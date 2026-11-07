import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CHECKS = [
  { title: "Send your profile a test message", body: "See which channel it reaches and how long a reply takes." },
  { title: "Look up your profile in Search", body: "Check for offers you did not create." },
  { title: "Check who gets Google’s notifications", body: "You have four days to review certain suggested edits." },
  { title: "Compare your name, address and phone number", body: "They should match on your website, your profile and your listings." },
];

const RESULTS = [
  {
    label: "Website only, 28 days to October 2024",
    rows: [
      { name: "Impressions", value: "16.9K → 45.2K" },
      { name: "Clicks", value: "197 → 210" },
    ],
  },
  {
    label: "After local SEO, February to March 2025",
    rows: [
      { name: "Calls", value: "18 → 41" },
      { name: "Profile interactions", value: "233 → 350" },
    ],
  },
];

const linkClass = "font-semibold text-emerald-900 underline decoration-emerald-300 underline-offset-4";

export default function LocalSeoResearchNote() {
  return (
    <section aria-labelledby="local-seo-field-note" className="mb-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="p-5 sm:p-7">
        <div className="flex items-center gap-3">
          <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-1 ring-slate-200">
            <Image src="/images/mubashar-sharif.jpg" alt="" fill sizes="96px" className="object-cover object-top" />
          </span>
          <p className="text-xs font-bold uppercase leading-5 tracking-[0.14em] text-emerald-800">
            Field note · Mubashar Sharif
            <span className="block font-medium normal-case tracking-normal text-slate-500">November 7, 2026</span>
          </p>
        </div>

        <h2 id="local-seo-field-note" className="mt-4 text-2xl font-bold leading-tight text-slate-950 sm:text-3xl">
          What this month’s changes mean for your business
        </h2>
        <p className="mt-3 text-base leading-7 text-slate-700">
          Most updates on this page won’t move your rankings. They change how customers reach you, so I would check these first:
        </p>

        <ol className="mt-5 grid gap-3 sm:grid-cols-2">
          {CHECKS.map((check, index) => (
            <li key={check.title} className="flex min-w-0 gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <span aria-hidden className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-xs font-bold text-white">
                {index + 1}
              </span>
              <span className="min-w-0 text-sm leading-6 text-slate-700">
                <strong className="block text-slate-950">{check.title}</strong>
                {check.body}
              </span>
            </li>
          ))}
        </ol>
      </div>

      <div className="border-y border-emerald-200 bg-emerald-50/70 p-5 sm:p-7">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-800">From a real client</p>
        <h3 className="mt-1 text-xl font-bold leading-snug text-slate-950">Why that last check matters: Mammoth Roofing, Texas</h3>
        <p className="mt-3 text-base leading-7 text-slate-700">
          The website was gaining visibility, but clicks were barely moving. So I moved my effort to local SEO across its four Google Business Profiles: about 50 posts, about 20 business listings, better categories and services, and a name, address and phone number that matched everywhere.
        </p>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {RESULTS.map((result) => (
            <div key={result.label} className="min-w-0 rounded-xl border border-emerald-200 bg-white p-4">
              <p className="text-xs font-semibold leading-5 text-slate-500">{result.label}</p>
              <dl className="mt-2 space-y-1.5">
                {result.rows.map((row) => (
                  <div key={row.name} className="flex flex-wrap items-baseline justify-between gap-x-3">
                    <dt className="text-sm text-slate-600">{row.name}</dt>
                    <dd className="text-lg font-bold tabular-nums text-slate-950">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>

        <p className="mt-4 text-sm leading-6 text-slate-600">
          Results were uneven: San Antonio went from 4 calls to 22, Marble Falls stayed at 1, and March is a longer month. That is one client’s experience, not a promise or a confirmed ranking factor.
        </p>

        <Link
          href="/case-studies/roofing/mammoth-roofing"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-neutral-800"
        >
          See the case study and screenshots <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>

      <p className="p-5 text-sm leading-6 text-slate-700 sm:px-7">
        For more, see our <Link href="/resources/local-seo-tips" className={linkClass}>Local SEO tips and lead playbook</Link>, covering profile accuracy, useful local pages and lead measurement. For market-specific examples, compare our <Link href="/locations/ohio/cleveland" className={linkClass}>Cleveland local market page</Link>, <Link href="/locations/texas/katy" className={linkClass}>Katy local market page</Link>, and <Link href="/locations/texas/sugar-land" className={linkClass}>Sugar Land local market page</Link>. For profile-to-call advice, see our guide to <Link href="/blog/get-more-calls-from-google-business-profile" className={linkClass}>getting more calls from a Google Business Profile</Link>.
      </p>
    </section>
  );
}
