import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { staticNewsSpokes } from "@/lib/static-news-spokes";
import { NEWS_FALLBACK_ARTICLES } from "@/lib/news-fallback";
import { LOCAL_NEWS_EXTRA_SLUGS } from "@/lib/local-news-slugs";

export const dynamic = "force-dynamic";

const DB_QUERY_TIMEOUT_MS = 1500;
const MAX_ITEMS = 20;
/** Topic hubs are not news items, so they stay out of the feed. */
const HUB_SLUG = "local-seo-updates";

type FeedItem = { slug: string; title: string; excerpt: string; time: number };

const escapeXml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const cdata = (value: string) => `<![CDATA[${value.replace(/]]>/g, "]]]]><![CDATA[>")}]]>`;
const dayToTime = (day: string) => Date.parse(`${day}T12:00:00Z`);

/** The committed articles, which do not depend on the database being reachable. */
function committedItems(matches: (category: string, slug: string) => boolean): FeedItem[] {
  return [
    ...staticNewsSpokes
      .filter((s) => matches(s.category, s.slug))
      .map((s) => ({ slug: s.slug, title: s.title, excerpt: s.excerpt, time: dayToTime(s.date) })),
    ...NEWS_FALLBACK_ARTICLES
      .filter((a) => matches(a.category, a.slug))
      .map((a) => ({ slug: a.slug, title: a.title, excerpt: a.excerpt, time: dayToTime(a.published) })),
  ];
}

/** Newer CMS posts, if the database answers in time. The feed works without them. */
async function cmsItems(filter: string): Promise<FeedItem[]> {
  let timeout: ReturnType<typeof setTimeout> | undefined;
  try {
    const posts = await Promise.race([
      db.marketingBlog.findMany({
        where: { published: true, category: { contains: filter, mode: "insensitive" } },
        orderBy: { publishedAt: "desc" },
        take: MAX_ITEMS,
        select: { slug: true, title: true, excerpt: true, publishedAt: true },
      }),
      new Promise<null>((resolve) => {
        timeout = setTimeout(() => resolve(null), DB_QUERY_TIMEOUT_MS);
      }),
    ]);
    return (posts ?? []).map((p) => ({
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt ?? "",
      time: (p.publishedAt ?? new Date()).getTime(),
    }));
  } catch (error) {
    console.warn("[feed] CMS unavailable; serving committed articles:", error);
    return [];
  } finally {
    if (timeout) clearTimeout(timeout);
  }
}

export async function GET(request: Request) {
  const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://www.searchprex.com";

  const { searchParams } = new URL(request.url);
  const categoryParam = searchParams.get("category");
  const filter = categoryParam || "News";
  const needle = filter.toLowerCase();
  const isLocal = needle === "local";

  const matches = (category: string, slug: string) =>
    slug !== HUB_SLUG &&
    (category.toLowerCase().includes(needle) || (isLocal && LOCAL_NEWS_EXTRA_SLUGS.has(slug)));

  const seen = new Set<string>();
  const items = [...committedItems(matches), ...(await cmsItems(filter))]
    .filter((item) => matches(filter, item.slug) && !seen.has(item.slug) && seen.add(item.slug))
    .sort((a, b) => b.time - a.time)
    .slice(0, MAX_ITEMS);

  const feedTitle = categoryParam ? `SearchPrex ${categoryParam} SEO News` : "SearchPrex SEO News";
  const feedDesc = categoryParam
    ? `Latest ${categoryParam} SEO news and updates from SearchPrex.`
    : "Latest SEO News, Google Algorithm Updates, and Digital Marketing insights from SearchPrex.";
  const feedLink = isLocal
    ? `${SITE}/resources/news/${HUB_SLUG}`
    : categoryParam
      ? `${SITE}/resources/news?category=${encodeURIComponent(categoryParam)}`
      : `${SITE}/resources/news`;
  const selfLink = `${SITE}/feed.xml${categoryParam ? `?category=${encodeURIComponent(categoryParam)}` : ""}`;

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(feedTitle)}</title>
    <link>${escapeXml(feedLink)}</link>
    <description>${escapeXml(feedDesc)}</description>
    <language>en-us</language>
    <atom:link href="${escapeXml(selfLink)}" rel="self" type="application/rss+xml" />
${items.map((item) => `    <item>
      <title>${cdata(item.title)}</title>
      <link>${SITE}/resources/news/${item.slug}</link>
      <guid isPermaLink="true">${SITE}/resources/news/${item.slug}</guid>
      <pubDate>${new Date(item.time).toUTCString()}</pubDate>
      <description>${cdata(item.excerpt)}</description>
    </item>`).join("\n")}
  </channel>
</rss>`;

  return new NextResponse(rss.trim(), {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
