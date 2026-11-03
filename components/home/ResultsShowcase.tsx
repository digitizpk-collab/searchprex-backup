"use client";

// components/home/ResultsShowcase.tsx
// The homepage results: one card per client in the same four lines — who,
// the problem, what was done, the result — with the screenshot that proves
// it. Tabs let a buyer jump to their own kind of business. There is no law
// firm result yet, so that tab says so instead of borrowing one.

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import ProofImage from "@/components/ProofImage";
import type { ProofShot } from "@/components/ServiceProofStrip";

export type ResultCard = {
  tab: "local" | "store" | "international";
  tag: string;
  client: string;
  problem: string;
  did: string;
  figure: string;
  figureLabel: string;
  shot: ProofShot;
  href: string;
};

const TABS = [
  { id: "all", label: "All" },
  { id: "local", label: "Local businesses" },
  { id: "store", label: "Online stores" },
  { id: "international", label: "International" },
  { id: "law", label: "Law firms" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export default function ResultsShowcase({ cards }: { cards: ResultCard[] }) {
  const [tab, setTab] = useState<TabId>("all");
  const shown = tab === "all" ? cards : cards.filter((c) => c.tab === tab);

  return (
    <div>
      <div role="tablist" aria-label="Filter results by business type" className="mb-8 flex flex-wrap justify-center gap-2">
        {TABS.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={tab === t.id}
            onClick={() => setTab(t.id)}
            className={`rounded-full border px-4 py-2 text-sm font-bold transition ${
              tab === t.id
                ? "border-neutral-950 bg-neutral-950 text-white"
                : "border-slate-300 bg-white text-neutral-800 hover:border-neutral-900"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "law" ? (
        <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 text-center">
          <h3 className="text-xl font-black text-neutral-950">No law firm result published yet</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            I won&apos;t borrow someone else&apos;s numbers. The first firm I work with in your city gets the founder on
            every page and city exclusivity while we build that case study together. Test me first with the free audit.
          </p>
          <Link
            href="/services/law-firm-seo"
            className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-neutral-900 hover:underline"
          >
            How law firm SEO works here <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2">
          {shown.map((c, i) => {
            // The first card of the current tab leads, full width.
            const lead = i === 0;
            return (
              <article
                key={c.client}
                className={`group grid overflow-hidden rounded-3xl border border-slate-200 bg-white transition hover:border-neutral-900 hover:shadow-lg ${
                  lead ? "md:col-span-2 md:grid-cols-[1fr_1.15fr]" : ""
                }`}
              >
                <div className={`flex flex-col p-6 sm:p-8 ${lead ? "" : "order-2"}`}>
                  <p className="text-xs font-bold uppercase tracking-widest text-emerald-800">{c.tag}</p>
                  <h3 className="mt-1 text-lg font-black text-neutral-950">{c.client}</h3>
                  <div className="mt-5 rounded-2xl bg-emerald-50 px-5 py-4">
                    <p className={`font-black tabular-nums tracking-tight text-emerald-900 ${lead ? "text-5xl" : "text-4xl"}`}>{c.figure}</p>
                    <p className="mt-1 text-sm font-semibold text-emerald-900/80">{c.figureLabel}</p>
                  </div>
                  <dl className="mt-5 grid gap-3 text-sm">
                    <div>
                      <dt className="text-xs font-bold uppercase tracking-wider text-slate-400">The problem</dt>
                      <dd className="mt-0.5 text-slate-700">{c.problem}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-bold uppercase tracking-wider text-slate-400">What I did</dt>
                      <dd className="mt-0.5 text-slate-700">{c.did}</dd>
                    </div>
                  </dl>
                  <Link href={c.href} className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-bold text-neutral-900 hover:underline">
                    Read the {c.client} case study <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden />
                  </Link>
                </div>
                <div className={`bg-slate-50 p-4 sm:p-5 ${lead ? "md:border-l md:border-slate-100" : "order-1 border-b border-slate-100"}`}>
                  <ProofImage
                    {...c.shot}
                    frameAspect="16 / 9"
                    sizes={lead ? "(max-width: 768px) 100vw, 620px" : "(max-width: 768px) 100vw, 540px"}
                  />
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
