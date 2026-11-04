// app/industries/page.tsx
//
// The industries hub: every industry page on the site, grouped by service,
// each card carrying the result behind it — or saying plainly that there
// isn't one yet (law firms, Shopify).
//
// Built entirely from lib/local-industries.ts, lib/ecommerce-industries.ts,
// lib/industry-pages.ts and the case studies, so a new industry page appears
// here, in the footer and in the sitemap without being typed in three places.

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Scale, ShoppingCart, MapPin } from "lucide-react";

import ArticleLeadMagnet from "@/components/ArticleLeadMagnet";
import { SpokeEssentials, SpokeWhyAndAi } from "@/components/service-wireframe/SpokeSections";
import { Breadcrumb, CardGrid, FaqList, PageHero, Section, SectionHeading, Accent } from "@/components/layout";
import { LOCAL_INDUSTRIES } from "@/lib/local-industries";
import { ECOMMERCE_INDUSTRIES } from "@/lib/ecommerce-industries";
import { INDUSTRY_PAGES } from "@/lib/industry-pages";
import { caseStudies } from "@/app/case-studies/data";
import { founderRef, websiteRef } from "@/lib/site-schema";

const SITE = "https://www.searchprex.com";
const PAGE_URL = `${SITE}/industries`;
const SOURCE = "industries";

/** Hardcoded on purpose — a date that moves on every request claims a review that did not happen. */
const LAST_REVIEWED = "2026-09-26";

export const metadata: Metadata = {
  title: "SEO by Industry: Local, Ecommerce & Law Firms | Free Audit",
  description:
    "SEO by industry: HVAC, roofing, cleaning, home services, remodeling, WooCommerce, outdoor stores and law firms, with case studies where we have them.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "SEO by Industry: Local Trades, Online Stores & Law Firms",
    description: "SEO by industry, each page backed by a real case study — or honest that it isn't yet.",
    url: PAGE_URL,
    siteName: "SearchPrex",
    type: "website",
    images: [{ url: "https://www.searchprex.com/opengraph-image", width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

type Card = { href: string; title: string; proof?: string };

/** First metric of a page's first case study, as "value label · client". */
function proofLine(caseClients: string[]): string | undefined {
  const cs = caseStudies.find((c) => c.slug.client === caseClients[0]);
  const m = cs?.metrics[0];
  return cs && m ? `${m.v} ${m.l} · ${cs.client}` : undefined;
}

const GROUPS: Array<{ id: string; eyebrow: string; title: string; intro: string; icon: typeof MapPin; hub: string; hubLabel: string; cards: Card[] }> = [
  {
    id: "local",
    eyebrow: "Local businesses",
    title: "Local SEO by trade",
    intro: "Service businesses that win calls from the map pack, the Business Profile and AI Overviews.",
    icon: MapPin,
    hub: "/services/local-seo",
    hubLabel: "All local SEO services",
    cards: LOCAL_INDUSTRIES.map((i) => ({ href: `/services/local-seo/${i.slug}`, title: i.h1, proof: proofLine(i.caseClients) })),
  },
  {
    id: "ecommerce",
    eyebrow: "Ecommerce",
    title: "Ecommerce SEO by platform and niche",
    intro: "Large catalogues: indexing, product and brand copy at scale, speed and structured data.",
    icon: ShoppingCart,
    hub: "/services/ecommerce-seo",
    hubLabel: "All ecommerce SEO services",
    cards: ECOMMERCE_INDUSTRIES.map((i) => ({ href: `/services/ecommerce-seo/${i.slug}`, title: i.h1, proof: proofLine(i.caseClients) })),
  },
  {
    id: "law",
    eyebrow: "Law firms",
    title: "Law firm SEO by practice area",
    intro: "No law firm client has been published yet — the practice-area pages explain the approach, not borrowed results.",
    icon: Scale,
    hub: "/services/law-firm-seo",
    hubLabel: "All law firm SEO services",
    cards: INDUSTRY_PAGES.map((p) => ({ href: `/services/law-firm-seo/${p.slug}`, title: `${p.name} SEO` })),
  },
];

const FAQS = [
  {
    q: "Which industries does SearchPrex work with?",
    a: "Local service businesses (HVAC, roofing, cleaning, home services and remodeling), ecommerce stores (WooCommerce, and knife and outdoor retailers in particular), and law firms. Every industry page links to the case study behind it, or says plainly when there isn't one yet.",
  },
  {
    q: "Do you work with industries that aren't listed?",
    a: "Yes. The work — site structure, content that answers the search, technical fixes and local signals — carries across industries. A page only goes up here once there is a real result to show for that industry.",
  },
  {
    q: "Why is there no page for my industry in my city?",
    a: "Pages that differ only by the city name are what Google calls doorway pages, and they can hurt a whole site. City pages exist where there is real demand and real local substance; the industry pages cover the rest.",
  },
];

export default function IndustriesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: "Industries We Serve",
        isPartOf: websiteRef,
        author: founderRef,
        reviewedBy: founderRef,
        dateModified: LAST_REVIEWED,
        mainEntity: {
          "@type": "ItemList",
          itemListElement: GROUPS.flatMap((g) => g.cards).map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.title,
            url: `${SITE}${c.href}`,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE },
          { "@type": "ListItem", position: 2, name: "Industries", item: PAGE_URL },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${PAGE_URL}#faq`,
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <main>
      <script id="ld-industries" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Industries" }]} />

      <PageHero
        compactTop
        eyebrow="Industries"
        title={
          <>
            SEO by Industry: <Accent>Local Trades, Online Stores and Law Firms</Accent>
          </>
        }
        subtitle="Every trade and practice searches differently, and generic SEO misses that. Pick yours: each page shows the work for your industry and the case study behind it, or says plainly when there isn't one yet."
        trustPoints={["Reply within 24 hours", "Month to month", "The founder does the work"]}
        aside={
          <ArticleLeadMagnet
            variant="sidebar"
            source={SOURCE}
            copy={{
              headline: "Free tear-down, any industry",
              sub: "Send your URL. I’ll check your site against the top competitors in your industry and tell you what to fix first, within 24 hours.",
            }}
          />
        }
      />

      <SpokeEssentials
        keyword="SEO by industry"
        answer="means pages, Business Profile work and fixes built around how your customers search: by trade and town for local businesses, by product for online stores, and by practice area for law firms. Month to month, from $800 a month."
      />

      {/* PROOF — one result per industry type, each with screenshots on its case study. */}
      <Section tight>
        <SectionHeading eyebrow="Results by industry" title="SEO results from clients' own dashboards" />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { tag: "Online store · WooCommerce", figure: "+227%", line: "Net sales, $5,832 to $19,100 a month.", href: "/case-studies/ecommerce/smk-store", client: "SMK Store" },
            { tag: "Local · HVAC", figure: "Named", line: "In Google's AI Overview for an AC installation search.", href: "/case-studies/hvac/local-hvac-services", client: "HVAC Services Team" },
            { tag: "Local · Cleaning", figure: "#1", line: "Named first in the AI Overview, #1 organic below it.", href: "/case-studies/cleaning/dolls-cleaning", client: "Doll's Cleaning" },
          ].map((r) => (
            <Link key={r.client} href={r.href} className="rounded-3xl border border-slate-200 bg-white p-6 transition hover:border-neutral-900 hover:shadow-md">
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-800">{r.tag}</p>
              <p className="mt-1 text-lg font-black text-neutral-950">{r.client}</p>
              <p className="mt-3 text-4xl font-black tracking-tight text-neutral-950">{r.figure}</p>
              <p className="mt-1 text-sm text-slate-600">{r.line}</p>
            </Link>
          ))}
        </div>
      </Section>

      {GROUPS.map((g, gi) => {
        const Icon = g.icon;
        return (
          <Section key={g.id} id={g.id} tone={gi % 2 ? "surface" : undefined}>
            <SectionHeading eyebrow={g.eyebrow} title={g.title} intro={g.intro} />
            <CardGrid columns={3}>
              {g.cards.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:border-neutral-900 hover:shadow-md"
                >
                  <p className="flex items-center gap-2 text-base font-black text-neutral-950 group-hover:text-neutral-700">
                    <Icon className="h-4 w-4 flex-shrink-0 text-neutral-900" aria-hidden />
                    {c.title}
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                    {c.proof ?? "No case study yet — the approach, stated honestly."}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-neutral-900">
                    Open <ArrowRight className="h-3 w-3" aria-hidden />
                  </span>
                </Link>
              ))}
            </CardGrid>
            <p className="mt-6 text-center">
              <Link href={g.hub} className="inline-flex items-center gap-1 text-sm font-bold text-neutral-950 hover:text-neutral-700">
                {g.hubLabel} <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </p>
          </Section>
        );
      })}

      <SpokeWhyAndAi
        service="SEO for your industry"
        title="Industry SEO: SearchPrex vs the alternatives"
        rows={[
          ["Who does the work", "The founder", "You, after hours", "Often a junior"],
          ["Knows your industry", "Pages built per trade, platform and practice", "You know it, SEO is the hard part", "Often one template for everyone"],
          ["Proof", "Case studies with screenshots", "n/a", "Often logos only"],
          ["Contract", "Month to month", "None", "Often 6 to 12 months"],
          ["Risk", "7-day free trial, 90-day money-back", "Your time", "Rarely a guarantee"],
        ]}
        aiLine="AI tools answer by industry: 'best HVAC company near me', 'Shopify SEO help', 'divorce lawyer in Wichita'. Pages written for your industry give them the right answer to quote."
      />

      <Section tone="surface" width="reading">
        <SectionHeading eyebrow="FAQ" title="SEO by industry: questions, answered" />
        <FaqList faqs={FAQS} name="industries-faq" />
      </Section>

      <ArticleLeadMagnet
        variant="bottom"
        source={SOURCE}
        copy={{
          headline: "Send me your URL. I’ll tell you what is holding it back.",
          sub: "Two fields. A written look at your site and competitors — from me, within 24 hours.",
        }}
      />
    </main>
  );
}
