"use client";

// components/home/StrategyPopup.tsx
//
// The free-strategy form as a pop-up. Opens when:
//   - any element with data-open-strategy is clicked (the "Tell me your goal"
//     button), or
//   - the visitor rests the pointer on a hot spot (data-lead-hotspot: results,
//     care, pricing) for 3 seconds — a sign of real interest.
// The hover trigger fires at most once per browser session and never on touch
// screens, so it cannot become a nag; Escape, the close button or a click on
// the backdrop always closes it.

import { useCallback, useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

import StrategyRequestForm from "@/components/home/StrategyRequestForm";

const SEEN_KEY = "sp-strategy-popup-seen";

export default function StrategyPopup() {
  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = useCallback(() => {
    setOpen(true);
    try { sessionStorage.setItem(SEEN_KEY, "1"); } catch {}
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const t = (e.target as HTMLElement | null)?.closest("[data-open-strategy]");
      if (t) { e.preventDefault(); show(); }
    };
    const hoverAllowed = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const seen = () => { try { return sessionStorage.getItem(SEEN_KEY) === "1"; } catch { return false; } };
    const onOver = (e: MouseEvent) => {
      if (!hoverAllowed || timer.current || seen()) return;
      if (!(e.target as HTMLElement | null)?.closest("[data-lead-hotspot]")) return;
      timer.current = setTimeout(() => { timer.current = null; if (!seen()) show(); }, 3000);
    };
    const onOut = (e: MouseEvent) => {
      const from = (e.target as HTMLElement | null)?.closest("[data-lead-hotspot]");
      const to = (e.relatedTarget as HTMLElement | null)?.closest?.("[data-lead-hotspot]");
      if (from && from !== to && timer.current) { clearTimeout(timer.current); timer.current = null; }
    };
    document.addEventListener("click", onClick);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      if (timer.current) clearTimeout(timer.current);
    };
  }, [show]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = prev; };
  }, [open]);

  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-neutral-950/60 p-0 backdrop-blur-sm sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="strategy-popup-title"
      onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
    >
      <div className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl bg-slate-50 p-5 sm:rounded-3xl sm:p-7">
        <button type="button" onClick={() => setOpen(false)} aria-label="Close" className="absolute right-4 top-4 rounded-full p-2 text-slate-500 hover:bg-slate-200 hover:text-neutral-950">
          <X className="h-5 w-5" aria-hidden />
        </button>
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-800">Free SEO strategy</p>
        <h2 id="strategy-popup-title" className="mt-2 pr-10 text-2xl font-black tracking-tight text-neutral-950 sm:text-3xl">Tell me your goal. I&apos;ll send a free SEO strategy within 24 hours.</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">Five quick questions. Written by me, Mubashar Sharif. No call needed.</p>
        <div className="mt-5">
          <StrategyRequestForm source="homepage-strategy-popup" />
        </div>
      </div>
    </div>
  );
}
