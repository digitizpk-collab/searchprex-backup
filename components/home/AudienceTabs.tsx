"use client";

// components/home/AudienceTabs.tsx
//
// "Who I help" — three audiences in one section. The tab cards rotate on
// their own every 7 seconds with a progress bar, pause while the pointer is
// over the section, and stop for good once the visitor picks one (or asks
// for reduced motion). Every panel is rendered into the HTML and only the
// inactive ones are hidden with CSS, so their links stay crawlable.
// Industry links live in the industries carousel, so they are not repeated
// here.

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, Info } from "lucide-react";

export interface AudienceTab {
  id: string;
  label: string;
  title: string;
  problem: string;
  visual?: {
    src: string;
    alt: string;
    caption: string;
    badge: string;
  };
  work: string[];
  /** One sourced result, or an honest note where there is none. */
  proof: { text: string; href?: string; honest?: boolean };
  hub: { href: string; label: string };
  pages: Array<{ href: string; label: string }>;
}

const TAGLINES: Record<string, string> = {
  law: "Signed cases, not clicks",
  local: "Calls from the Map Pack",
  ecommerce: "Sales from product pages",
};
const ROTATE_MS = 7000;

export default function AudienceTabs({ tabs }: { tabs: AudienceTab[] }) {
  const [active, setActive] = useState(tabs[0]?.id);
  const [auto, setAuto] = useState(true);
  const [paused, setPaused] = useState(false);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced.current) setAuto(false);
  }, []);

  useEffect(() => {
    if (!auto || paused) return;
    const t = setTimeout(() => {
      const i = tabs.findIndex((x) => x.id === active);
      setActive(tabs[(i + 1) % tabs.length].id);
    }, ROTATE_MS);
    return () => clearTimeout(t);
  }, [active, auto, paused, tabs]);

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <style>{`
        @keyframes aud-progress { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes aud-in { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }
        @keyframes aud-zoom { from { transform: scale(1); } to { transform: scale(1.08); } }
        .aud-panel { animation: aud-in 0.5s ease-out both; }
        .aud-zoom { animation: aud-zoom 9s ease-out both; }
        @media (prefers-reduced-motion: reduce) { .aud-panel, .aud-zoom { animation: none; } }
      `}</style>

      {/* Tab cards */}
      <div role="tablist" aria-label="Who SearchPrex works with" className="mb-8 grid gap-3 sm:grid-cols-3">
        {tabs.map((t) => {
          const on = active === t.id;
          return (
            <button
              key={t.id}
              role="tab"
              id={`tab-${t.id}`}
              aria-selected={on}
              aria-controls={`panel-${t.id}`}
              onClick={() => { setActive(t.id); setAuto(false); }}
              className={`relative overflow-hidden rounded-2xl border px-5 py-4 text-left transition duration-300 ${
                on ? "border-neutral-950 bg-neutral-950 text-white shadow-xl" : "border-slate-200 bg-white text-neutral-950 hover:border-neutral-900 hover:shadow-md"
              }`}
            >
              <span className="block text-lg font-black">{t.label}</span>
              <span className={`mt-0.5 block text-sm ${on ? "text-white/70" : "text-slate-500"}`}>{TAGLINES[t.id] ?? ""}</span>
              {on && auto ? (
                <span
                  key={`${t.id}-${paused}`}
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-1 origin-left bg-emerald-400"
                  style={{ animation: `aud-progress ${ROTATE_MS}ms linear both`, animationPlayState: paused ? "paused" : "running" }}
                />
              ) : null}
            </button>
          );
        })}
      </div>

      {/* Panels */}
      {tabs.map((t) => (
        <div
          key={t.id}
          role="tabpanel"
          id={`panel-${t.id}`}
          aria-labelledby={`tab-${t.id}`}
          className={active === t.id ? "aud-panel grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:grid-cols-[1fr_1.1fr]" : "hidden"}
        >
          {t.visual ? (
            <div className="relative min-h-[280px] overflow-hidden bg-neutral-900 lg:min-h-full">
              <Image
                key={active === t.id ? `${t.id}-on` : t.id}
                src={t.visual.src}
                alt={t.visual.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="aud-zoom object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="inline-block rounded-full bg-[#ef4444] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                  {t.visual.badge}
                </span>
                <p className="mt-3 text-base font-semibold leading-snug text-white sm:text-lg">&ldquo;{t.visual.caption}&rdquo;</p>
              </div>
            </div>
          ) : null}

          <div className="p-7 sm:p-9">
            <h3 className="text-2xl font-black tracking-tight text-neutral-950 sm:text-3xl">{t.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{t.problem}</p>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-emerald-800">What I do</p>
            <ul className="mt-3 grid gap-3 sm:grid-cols-2">
              {t.work.map((w) => (
                <li key={w} className="flex items-start gap-2.5 rounded-2xl bg-slate-50 p-3.5 text-sm leading-snug text-slate-800">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100">
                    <Check className="h-3 w-3 text-emerald-700" aria-hidden />
                  </span>
                  {w}
                </li>
              ))}
            </ul>

            <div className={`mt-6 rounded-2xl p-5 ${t.proof.honest ? "border border-slate-200 bg-white" : "bg-emerald-50"}`}>
              <p className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest ${t.proof.honest ? "text-neutral-700" : "text-emerald-800"}`}>
                {t.proof.honest ? <Info className="h-3.5 w-3.5" aria-hidden /> : null}
                {t.proof.honest ? "Where the evidence stands" : "Result"}
              </p>
              <p className="mt-1.5 text-[15px] font-semibold leading-snug text-neutral-950">{t.proof.text}</p>
              {t.proof.href ? (
                <Link href={t.proof.href} className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-neutral-900 hover:underline">
                  {t.proof.honest ? "See the approach" : "Read the case study"} <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              ) : null}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href={t.hub.href}
                className="inline-flex items-center gap-1.5 rounded-full bg-neutral-950 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-neutral-800"
              >
                {t.hub.label} <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <button
                type="button"
                data-open-strategy
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 px-5 py-3 text-sm font-bold text-neutral-950 transition hover:border-neutral-900"
              >
                Get my free audit
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
