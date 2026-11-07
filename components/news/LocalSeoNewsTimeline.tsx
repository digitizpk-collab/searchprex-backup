export type LocalSeoNewsUpdate = {
  date: string;
  status: string;
  title: string;
  summary: string;
  href: string;
  source: string;
  topics: string[];
  trending?: boolean;
  image: string;
  imageAlt: string;
  /** One clause for the hub's "In short" box. Entries without one stay out of it. */
  brief?: string;
  /** What a business should do now, shown when this is the newest entry. */
  action?: string;
};

/**
 * The hub's "In short" box, built from the log so its date and content can't
 * drift apart: the newest day's entries, then up to three older ones.
 */
export function localSeoNewsBrief(updates: LocalSeoNewsUpdate[]) {
  const shortDate = (date: string) =>
    new Date(`${date} 12:00:00 UTC`).toLocaleDateString("en-US", { month: "short", day: "numeric", timeZone: "UTC" });
  const dated = updates
    .filter((u) => u.brief)
    .sort((a, b) => Date.parse(`${b.date} 12:00:00 UTC`) - Date.parse(`${a.date} 12:00:00 UTC`));
  if (dated.length === 0) return null;
  const newest = dated[0].date;
  return {
    asOf: newest,
    latest: dated.filter((u) => u.date === newest).map((u) => u.brief as string),
    earlier: dated.filter((u) => u.date !== newest).slice(0, 3).map((u) => `${u.brief} (${shortDate(u.date)})`),
    action: dated.find((u) => u.action)?.action,
  };
}

export const localSeoNewsUpdates: LocalSeoNewsUpdate[] = [
  {
    date: "November 6, 2026",
    status: "Confirmed",
    title: "Google Maps adds a Message button beside Call on Android and iOS",
    summary:
      "Search Engine Roundtable reports that Lisa Landsman shared the change in the Google Business Help Forums. Messages can route to channels such as WhatsApp or SMS, depending on what the business has linked. The report does not mention a ranking effect. Check which channel your profile uses and who answers it.",
    href: "https://www.seroundtable.com/google-maps-messaging-android-ios-42472.html",
    source: "Search Engine Roundtable",
    topics: ["Google Maps", "Google Business Profile"],
    trending: true,
    image: "/images/local/google-business-profile-local-intent.webp",
    imageAlt: "A customer checking a local business listing on a phone outside a neighborhood storefront",
    brief: "Google Maps now shows a Message button beside Call on Android and iOS",
    action: "check which messaging channel your profile uses, and who answers it.",
  },
  {
    date: "November 6, 2026",
    status: "Confirmed",
    title: "Google publishes a help document for managing offers on Business Profiles",
    summary:
      "The document explains how offers can appear on a profile in Search, including offers from authorized third parties. To remove a wrong third-party offer, contact Business Profile Support; the provider then has 5 business days to take it down. Google says the feature is only in select regions and languages.",
    href: "https://support.google.com/business/answer/18888417?hl=en",
    source: "Google Business Profile Help",
    topics: ["Google Business Profile"],
    trending: true,
    image: "/images/news/local-business-owner-storefront.webp",
    imageAlt: "A local business owner standing outside a neighborhood storefront",
    brief: "Google published a help document on managing offers",
  },
  {
    date: "October 23, 2026",
    status: "Reported test",
    title: "Google is testing expanded Business Profile performance reports",
    summary:
      "Search Engine Roundtable reports that some profiles are seeing more detailed sections for engagement, reviews, audience and search trends. Google has not announced a general rollout. If the report appears in your account, compare its figures with your existing baseline before changing your reporting routine.",
    href: "https://www.seroundtable.com/google-business-profiles-new-performance-reports-42367.html",
    source: "Search Engine Roundtable",
    topics: ["Google Business Profile", "Local rankings"],
    trending: true,
    image: "/images/about/founder-hands-on-strategy-desk.webp",
    imageAlt: "SEO strategist reviewing a local business search performance report at a desk",
    brief: "Google was reported testing expanded performance reports",
  },
  {
    date: "October 22, 2026",
    status: "Reported test",
    brief: "a new local panel layout was seen in testing",
    title: "Google is testing a different local panel layout",
    summary:
      "The observed design swaps the position of business photos and key profile details. The report does not establish a ranking or conversion effect, so check how your own profile appears on desktop and mobile rather than changing assets based on the test alone.",
    href: "https://www.seroundtable.com/google-local-panel-layout-42356.html",
    source: "Search Engine Roundtable",
    topics: ["Google Maps", "Google Business Profile"],
    trending: true,
    image: "/images/local/google-business-profile-local-intent.webp",
    imageAlt: "A customer checking a local business listing on a phone outside a neighborhood storefront",
  },
  {
    date: "October 19, 2026",
    status: "Reported test",
    brief: "Posts were seen higher in some panels",
    title: "Google Posts may appear higher in some local panels",
    summary:
      "Local-search observers report that the Posts section has moved up and down in some panels. This is an interface observation, not a confirmed rollout or ranking change. Keep profile posts current for customers, but do not expect posting alone to improve local rankings.",
    href: "https://www.seroundtable.com/google-posts-higher-42319.html",
    source: "Search Engine Roundtable",
    topics: ["Google Business Profile", "Local rankings"],
    trending: true,
    image: "/images/case-studies/dolls-cleaning-local-van.webp",
    imageAlt: "A local home-service team beside its service van in a neighborhood",
  },
  {
    date: "September 30, 2026",
    status: "Reported behavior",
    title: "Some Maps users are prompted to sign in to read all reviews",
    summary:
      "The behavior has been reported by users, but Google has not confirmed a broad change. There is no evidence that it changes local ranking. Test your profile signed in and out, and continue asking all customers for honest reviews without incentives.",
    href: "/resources/news/google-maps-sign-in-to-read-reviews",
    source: "SearchPrex update and its linked source",
    topics: ["Google Maps", "Reviews"],
    trending: true,
    image: "/images/audiences/local-contractor-garage.webp",
    imageAlt: "A local service business owner reviewing work details with his team",
  },
  {
    date: "September 23, 2026",
    status: "Google Help guidance",
    title: "Certain suggested profile edits have a four-day review window",
    summary:
      "Google's current help documentation says that when an edit requires review, owners may have four days to accept or reject it. If there is no response, Google may publish it when public information supports the change. Check profile notifications and keep your website details accurate.",
    href: "https://support.google.com/business/answer/3480441?hl=en",
    source: "Google Business Profile Help",
    topics: ["Google Business Profile"],
    image: "/images/audiences/local-contractor-garage.webp",
    imageAlt: "A local service business owner reviewing work details with his team",
  },
  {
    date: "September 14, 2026",
    status: "Documented feature · limited availability",
    title: "Business Profiles can show information collected by Google",
    summary:
      "Google's help page describes a Collected info area for details gathered through automated calls, texts or WhatsApp. Availability is limited by region, language and business category. If it is available in your profile, review the details and remove anything inaccurate.",
    href: "https://support.google.com/business/answer/3039617?hl=en-en",
    source: "Google Business Profile Help",
    topics: ["Google Business Profile", "Local rankings"],
    image: "/images/locations/cleveland-law-consultation.webp",
    imageAlt: "Local business professionals reviewing customer information together",
  },
];

export default function LocalSeoNewsTimeline() {
  const twoDaysAgo = new Date();
  twoDaysAgo.setHours(0, 0, 0, 0);
  twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
  const recentUpdates = localSeoNewsUpdates.filter((update) => new Date(update.date).getTime() >= twoDaysAgo.getTime());

  return (
    <section
      aria-labelledby="local-seo-news-timeline"
      className="mb-10 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-7"
    >
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">
        Updated October 24, 2026 · Sources checked
      </p>
      <h2
        id="local-seo-news-timeline"
        className="mb-3 text-2xl font-bold leading-tight text-slate-950 sm:text-3xl"
      >
        Latest Local SEO News and Google Business Profile Updates
      </h2>
      <p className="mb-6 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base">
        Follow local search news and recent Local SEO changes, separated into
        documented guidance and reported tests. A layout test is not proof of a
        ranking change; verify changes in your own Business Profile and
        performance data.
      </p>

      <section aria-labelledby="local-seo-last-two-days" className="mb-6 rounded-xl border border-emerald-100 bg-white p-4 sm:p-5">
        <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
          <h3 id="local-seo-last-two-days" className="text-base font-bold text-slate-950">Local SEO updates from the past two days</h3>
          <span className="text-xs font-medium text-slate-500">Dated, sourced updates</span>
        </div>
        {recentUpdates.length ? (
          <ul className="space-y-3">
            {recentUpdates.map((update) => (
              <li key={`recent-${update.title}`} className="border-t border-slate-100 pt-3 first:border-0 first:pt-0">
                <p className="text-xs font-medium text-slate-500">{update.date} · {update.status}</p>
                <p className="mt-1 text-sm font-semibold leading-5 text-slate-900">{update.title}</p>
                <a href={update.href} target={update.href.startsWith("http") ? "_blank" : undefined} rel={update.href.startsWith("http") ? "noopener noreferrer" : undefined} className="mt-1 inline-block text-xs font-semibold text-emerald-800 underline decoration-emerald-300 underline-offset-4">Read source: {update.source}</a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm leading-6 text-slate-600">No source-checked local search changes have been logged in the past two days. The full dated update log follows.</p>
        )}
      </section>

      <ol className="space-y-4">
        {localSeoNewsUpdates.map((update) => (
          <li
            key={update.title}
            className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5"
          >
            <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold text-slate-500">
              <time>{update.date}</time>
              <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-emerald-800">
                {update.status}
              </span>
            </div>
            <h3 className="mb-2 text-lg font-bold leading-snug text-slate-900">
              {update.title}
            </h3>
            <p className="mb-3 text-sm leading-6 text-slate-600">
              {update.summary}
            </p>
            <a
              href={update.href}
              target={update.href.startsWith("http") ? "_blank" : undefined}
              rel={update.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-sm font-semibold text-emerald-800 underline decoration-emerald-300 underline-offset-4 hover:text-emerald-950"
            >
              Source: {update.source}
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
