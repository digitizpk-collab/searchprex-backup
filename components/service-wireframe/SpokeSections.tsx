// components/service-wireframe/SpokeSections.tsx
//
// Shared blocks for the sub-service pages, so each carries the same essentials
// as the homepage: a direct answer under the hero (for readers and AI
// answers), the trial and guarantee in plain sight, a fair comparison, and
// how the page's service shows up in AI search. Claims are the confirmed ones
// only: 7-day free trial, 90-day money-back guarantee, Monday report, founder
// doing the work.

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export function SpokeEssentials({ keyword, answer }: { keyword: string; answer: string }) {
  return (
    <section className="px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-3xl rounded-2xl border border-emerald-200 bg-emerald-50/60 p-6">
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-emerald-800">In short</p>
        <p className="mt-2 text-base leading-7 text-slate-800">
          <strong>{keyword}</strong> {answer}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {["7-day free trial", "90-day money-back guarantee", "Report every Monday", "Done by the founder"].map((c) => (
            <li key={c} className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-white px-3 py-1.5 text-[13px] font-semibold text-neutral-900">
              <Check className="h-3.5 w-3.5 text-emerald-600" aria-hidden /> {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export type CompareRow = [string, string, string, string];

export function SpokeWhyAndAi({
  service,
  rows,
  aiLine,
  title,
}: {
  service: string;
  rows: CompareRow[];
  aiLine: string;
  /** Overrides the comparison heading where the page already has a "why choose" section. */
  title?: string;
}) {
  return (
    <>
      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-black tracking-tight text-neutral-950 sm:text-4xl">
            {title ?? `Why choose SearchPrex for ${service}?`}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-[15px] leading-relaxed text-slate-600">
            The founder does the work, prices are published, there&apos;s no contract, and you can try it free for 7 days.
          </p>
          <div className="mt-8 overflow-x-auto rounded-3xl border border-slate-200 bg-white">
            <table className="w-full min-w-[600px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <th className="px-5 py-4"> </th>
                  <th className="px-5 py-4 text-neutral-950">SearchPrex</th>
                  <th className="px-5 py-4">Doing it yourself</th>
                  <th className="px-5 py-4">Typical agency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {rows.map((r) => (
                  <tr key={r[0]}>
                    <th scope="row" className="px-5 py-4 font-bold text-neutral-950">{r[0]}</th>
                    <td className="px-5 py-4 font-semibold text-emerald-800">{r[1]}</td>
                    <td className="px-5 py-4 text-slate-600">{r[2]}</td>
                    <td className="px-5 py-4 text-slate-600">{r[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6">
        <div className="mx-auto flex max-w-5xl flex-col gap-5 rounded-3xl bg-neutral-950 p-7 text-white sm:p-9 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">AI search · AEO &amp; GEO</p>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl">{service} for ChatGPT, Gemini and AI Overviews</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-white/75">{aiLine}</p>
          </div>
          <Link href="/ai-search" className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-white px-5 py-3 text-sm font-bold text-neutral-950 hover:bg-emerald-100">
            How AI search works <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
