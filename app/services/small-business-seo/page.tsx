// app/services/small-business-seo/page.tsx
//
// "SEO services for small business" (US 3.6K/mo, KD 19) and "SEO agency for
// small business" (1.3K, KD 45). Semrush marks the intent informational, so
// the page answers what's included, what it costs, how to choose and how it
// works, not only "hire us". Prices come from lib/pricing; every result links
// to the case study holding its screenshot.

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import PillForm from "@/components/home/PillForm";
import { RETAINER_PLANS, formatRange } from "@/lib/pricing";
import { founderRef, organizationRef, websiteRef } from "@/lib/site-schema";

const SITE = "https://www.searchprex.com";
const URL = `${SITE}/services/small-business-seo`;
const LAST_REVIEWED = "2026-11-03";

const local = RETAINER_PLANS[0];
const store = RETAINER_PLANS[2];

const TITLE = "SEO Services for Small Business | Month-to-Month, 7-Day Trial";
const DESCRIPTION = `SEO services for US small businesses, local or online, done by the founder. From ${formatRange(local)}/mo, month to month, free audit in 24 hours.`;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: "SearchPrex",
    type: "website",
    images: [{ url: `${SITE}/services/local-seo/opengraph-image`, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  robots: { index: true, follow: true },
};

const INCLUDED = [
  { t: "A free audit first", d: "Your site and your top competitors, read by me, within 24 hours. You see what's wrong before paying anything." },
  { t: "Google Business Profile and Maps", d: "Categories, services, photos, reviews and posts, for businesses that serve customers locally." },
  { t: "Technical fixes", d: "Indexing, site speed, broken pages and structured data, fixed in the site rather than listed in a report." },
  { t: "Keyword research", d: "The searches your customers actually type, sorted by what they're worth to you, not by volume." },
  { t: "Pages that answer buyers", d: "Service, product or city pages written for people, and ready to be quoted by Google AI Overviews and ChatGPT." },
  { t: "A report every Monday", d: "Plain English: what moved, what it brought in, and what I'm doing next." },
];

const CHOOSE = [
  "Who does the work? Ask for the name of the person touching your site, not the account manager.",
  "Are prices published? A real agency can tell you a range before a sales call.",
  "Is there a long contract? Month to month means they have to keep earning it.",
  "What do they report? Calls, sales and leads matter; rankings alone don't pay bills.",
  "Can they show screenshots? Results should come from the client's own Search Console or store dashboard.",
  "Who owns the work? Your website, domain, analytics and Business Profile should stay in your name.",
];

const RESULTS = [
  { tag: "Online store · WooCommerce", figure: "+227%", line: "Net sales from $5,832 to $19,100 a month, April to June 2026.", href: "/case-studies/ecommerce/smk-store", client: "SMK Store" },
  { tag: "Local · HVAC · Simi Valley, CA", figure: "Named", line: "In Google's AI Overview for an AC installation search, with a page-one organic ranking.", href: "/case-studies/hvac/local-hvac-services", client: "HVAC Services Team" },
  { tag: "Local · Cleaning · Chesterfield, MI", figure: "#1", line: "Named first in the AI Overview, and #1 organically below it.", href: "/case-studies/cleaning/dolls-cleaning", client: "Doll's Cleaning" },
];

const FAQS = [
  {
    q: "How much do SEO services for a small business cost?",
    a: `With SearchPrex, ${formatRange(local)} a month for a local business and ${formatRange(store)} a month for an online store, depending on how many locations, services or products the work covers. It's month to month, starts with a 7-day free trial, and is backed by a 90-day money-back guarantee.`,
  },
  {
    q: "Is SEO worth it for a small business?",
    a: "Usually, if customers search for what you sell. Unlike ads, the pages and the Business Profile keep bringing calls after the spend stops. The free audit tells you honestly whether your market has enough search demand before you pay anything.",
  },
  {
    q: "How long does small business SEO take to work?",
    a: "Early movement usually shows in 60 to 90 days: fixes indexed, Business Profile views and the first rankings. Steady leads take longer and depend on your competition. Every Monday report shows exactly what moved.",
  },
  {
    q: "Do I have to sign a contract?",
    a: "No. It's month to month after the 7-day free trial. If there's no measurable progress in 90 days, I either keep working at no extra cost or refund what you paid for those 90 days.",
  },
  {
    q: "Do you work with online-only small businesses?",
    a: "Yes. Shopify and WooCommerce stores get indexing, product and category pages, structured data and site speed. Local service businesses get Google Business Profile, Map Pack and service-area work.",
  },
];

export default function SmallBusinessSeoPage() {
  // Built from the arrays the page renders, so the FAQPage matches what a
  // visitor reads.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${URL}#webpage`,
        url: URL,
        name: "SEO Services for Small Business",
        isPartOf: websiteRef,
        about: { "@id": `${URL}#service` },
        author: founderRef,
        reviewedBy: founderRef,
        dateModified: LAST_REVIEWED,
      },
      {
        "@type": "Service",
        "@id": `${URL}#service`,
        name: "SEO Services for Small Business",
        serviceType: "Small business SEO",
        provider: organizationRef,
        areaServed: { "@type": "Country", name: "United States" },
        description: DESCRIPTION,
        url: URL,
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "USD",
          lowPrice: local.min,
          highPrice: store.max,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${URL}#faq`,
        mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE}/services` },
          { "@type": "ListItem", position: 3, name: "Small business SEO", item: URL },
        ],
      },
    ],
  };

  return (
    <main className="bg-white text-neutral-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="border-b border-slate-200 px-4 pb-16 pt-28 sm:px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-800">Small business SEO · Founder-led · Month to month</p>
            <h1 className="mt-3 text-[2rem] font-black leading-[1.1] tracking-tight sm:text-5xl">
              SEO Services for Small Business{" "}
              <span className="block text-[1.2rem] font-extrabold leading-snug text-neutral-600 sm:text-2xl">
                Local or online, done by the founder, not a junior
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-700">
              You don&apos;t have an agency budget, and you can&apos;t afford months of reports that don&apos;t bring in a single call.
              SearchPrex gives small businesses the same SEO work bigger companies pay for: Business Profile, technical fixes and
              pages that answer buyers, priced from {formatRange(local)} a month, with no long contract.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {["7-day free trial", "90-day money-back guarantee", "Weekly SEO report", "One client per city"].map((c) => (
                <li key={c} className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1.5 text-[13px] font-semibold">
                  <Check className="h-3.5 w-3.5 text-emerald-600" aria-hidden /> {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-neutral-950 p-6 text-white sm:p-8">
            <p className="text-lg font-black">Free audit of your site, within 24 hours</p>
            <p className="mt-1 text-sm text-white/70">I read it myself. No credit card, no call required.</p>
            <div className="mt-5">
              <PillForm source="small-business-seo" tone="dark" />
            </div>
          </div>
        </div>
      </section>

      {/* DIRECT ANSWER */}
      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-3xl rounded-2xl border border-emerald-200 bg-emerald-50/60 p-6">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-emerald-800">In short</p>
          <p className="mt-2 text-base leading-7 text-slate-800">
            <strong>SEO services for a small business</strong> cover a site audit, Google Business Profile, technical fixes, keyword
            research, pages written for buyers and regular reporting. At SearchPrex they cost {formatRange(local)} a month for a
            local business and {formatRange(store)} for an online store, month to month, with a 7-day free trial.
          </p>
        </div>
      </section>

      {/* INCLUDED */}
      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-black tracking-tight sm:text-4xl">What&apos;s included in small business SEO services</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INCLUDED.map((x) => (
              <div key={x.t} className="rounded-3xl border border-slate-200 p-6">
                <h3 className="text-lg font-black">{x.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COST */}
      <section className="border-y border-slate-200 bg-slate-50 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-black tracking-tight sm:text-4xl">How much does SEO cost for a small business?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[15px] leading-relaxed text-slate-600">
            Published prices, month to month. The range depends on how many locations, services or products the work covers.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[local, store].map((p) => (
              <div key={p.niche} className="rounded-3xl border border-slate-200 bg-white p-7">
                <p className="text-sm font-bold text-emerald-800">{p.niche}</p>
                <p className="mt-1 text-xs text-slate-600">{p.best}</p>
                <p className="mt-5 text-4xl font-black tracking-tight">
                  {formatRange(p)} <span className="text-base font-semibold text-slate-500">/ mo</span>
                </p>
                <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5 text-sm text-slate-700">
                  {p.includes.map((i) => (
                    <li key={i} className="flex gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden /> {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-slate-600">
            Every plan: 7-day free trial, 90-day money-back guarantee, one client per city.{" "}
            <Link href="/pricing" className="font-bold text-neutral-950 underline underline-offset-2">See full SEO pricing</Link>
          </p>
        </div>
      </section>

      {/* HOW TO CHOOSE */}
      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">How to choose an SEO agency for small business</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
            Six questions to ask any agency before you sign, including me.
          </p>
          <ol className="mt-8 space-y-4">
            {CHOOSE.map((c, i) => (
              <li key={c} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-sm font-black text-white">{i + 1}</span>
                <p className="pt-1 text-[15px] leading-relaxed text-slate-700">{c}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* RESULTS */}
      <section className="border-y border-slate-200 bg-slate-50 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-black tracking-tight sm:text-4xl">Small business SEO results, from clients&apos; own dashboards</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {RESULTS.map((r) => (
              <Link key={r.client} href={r.href} className="group rounded-3xl border border-slate-200 bg-white p-6 transition hover:border-neutral-900 hover:shadow-md">
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-800">{r.tag}</p>
                <h3 className="mt-1 text-lg font-black">{r.client}</h3>
                <p className="mt-4 text-4xl font-black tracking-tight">{r.figure}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{r.line}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold">
                  See the screenshots <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-black tracking-tight sm:text-4xl">How it works</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              ["Send your URL", "It takes 30 seconds. I read your site and your competitors and reply within 24 hours."],
              ["Try it for 7 days", "I start on the fixes that matter most, free, so you can judge the work before paying."],
              ["Monday report", "Every week: what moved, what it brought in, what's next. Month to month after that."],
            ].map(([t, d], i) => (
              <div key={t} className="rounded-3xl border border-slate-200 p-6">
                <p className="text-sm font-black text-emerald-700">Step {i + 1}</p>
                <h3 className="mt-1 text-lg font-black">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-slate-200 bg-slate-50 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-black tracking-tight sm:text-4xl">Small business SEO questions</h2>
          <div className="mt-8 space-y-3">
            {FAQS.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-slate-200 bg-white p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold">
                  <h3 className="text-base">{f.q}</h3>
                  <ArrowRight className="h-4 w-4 shrink-0 transition group-open:rotate-90" aria-hidden />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED + CLOSE */}
      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-black tracking-tight">Where to go from here</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["/services/local-seo", "Local SEO services", "For businesses that serve customers in an area."],
              ["/services/ecommerce-seo", "Ecommerce SEO services", "For Shopify and WooCommerce stores."],
              ["/services/technical-seo", "Technical SEO", "Indexing, speed and site structure."],
              ["/resources/google-business-profile-checklist", "Free Google Business Profile checklist", "23 checks, no email needed."],
              ["/resources/woocommerce-seo-checklist", "Free WooCommerce SEO checklist", "For small online stores."],
              ["/pricing", "SEO pricing", "Every plan, published."],
            ].map(([href, t, d]) => (
              <Link key={href} href={href} className="rounded-2xl border border-slate-200 p-5 transition hover:border-neutral-900">
                <p className="font-bold">{t}</p>
                <p className="mt-1 text-sm text-slate-600">{d}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 px-4 py-14 text-center text-white sm:px-6">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-black tracking-tight sm:text-3xl">Tell me about your business. I&apos;ll tell you what&apos;s holding it back.</h2>
          <p className="mt-3 text-sm text-white/70">Free audit within 24 hours. 7-day free trial. 90-day money-back guarantee.</p>
          <div className="mx-auto mt-6 max-w-xl">
            <PillForm source="small-business-seo-close" tone="dark" />
          </div>
        </div>
      </section>
    </main>
  );
}
