import Link from "next/link";

export default function LocalSeoResearchNote() {
  return (
    <section aria-labelledby="local-seo-field-note" className="mb-10 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-emerald-800">
        SearchPrex field note · Mubashar Sharif · November 7, 2026
      </p>
      <h2 id="local-seo-field-note" className="text-2xl font-bold leading-tight text-slate-950 sm:text-3xl">
        What this month’s changes mean for your business
      </h2>
      <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
        Most updates on this page won’t move your rankings. They change how customers reach you, so I would check these first:
      </p>
      <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
        <li><strong>Send your profile a test message.</strong> See which channel it reaches and how long a reply takes.</li>
        <li><strong>Look up your profile in Search.</strong> Check for offers you did not create.</li>
        <li><strong>Check who gets Google’s notifications.</strong> You have four days to review certain suggested edits.</li>
        <li><strong>Compare your name, address and phone number.</strong> They should match on your website, your profile and your listings.</li>
      </ol>
      <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
        That last check taught me something on a real client. In 2024, the website for Mammoth Roofing, a Texas company, was gaining visibility: impressions rose from 16.9K to 45.2K in 28 days, yet clicks only moved from 197 to 210. So I moved my effort to local SEO: the Google Business Profile, Map Pack optimization, and a name, address and phone number that matched everywhere. After that, the client’s monthly calls and local leads in Texas improved. That is one client’s experience, not a promise or a confirmed ranking factor.
      </p>
      <p className="mt-4 text-sm leading-6 text-slate-700">
        For more, see our <Link href="/resources/local-seo-tips" className="font-semibold text-emerald-900 underline decoration-emerald-300 underline-offset-4">Local SEO tips and lead playbook</Link>, covering profile accuracy, useful local pages and lead measurement. For market-specific examples, compare our <Link href="/locations/ohio/cleveland" className="font-semibold text-emerald-900 underline decoration-emerald-300 underline-offset-4">Cleveland local market page</Link>, <Link href="/locations/texas/katy" className="font-semibold text-emerald-900 underline decoration-emerald-300 underline-offset-4">Katy local market page</Link>, and <Link href="/locations/texas/sugar-land" className="font-semibold text-emerald-900 underline decoration-emerald-300 underline-offset-4">Sugar Land local market page</Link>. For profile-to-call advice, see our guide to <Link href="/blog/get-more-calls-from-google-business-profile" className="font-semibold text-emerald-900 underline decoration-emerald-300 underline-offset-4">getting more calls from a Google Business Profile</Link>.
      </p>
    </section>
  );
}
