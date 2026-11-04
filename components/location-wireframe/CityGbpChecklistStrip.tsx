// components/location-wireframe/CityGbpChecklistStrip.tsx
//
// One contextual link from every city page to the free Google Business
// Profile checklist, with the city in the anchor so each page's link reads
// differently. Rendered by the route after each city's own wireframe view.

import Link from "next/link";
import { ArrowRight, ClipboardCheck } from "lucide-react";

export default function CityGbpChecklistStrip({ city }: { city: string }) {
  return (
    <section className="border-t border-slate-200 bg-slate-50 px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-4 rounded-3xl border border-slate-200 bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div className="flex gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800">
            <ClipboardCheck className="h-5 w-5" aria-hidden />
          </span>
          <div>
            <p className="text-lg font-black text-neutral-950">Check your own listing first</p>
            <p className="mt-1 text-sm leading-relaxed text-slate-600">
              23 checks written to Google&apos;s own rules. Free, no email needed.
            </p>
          </div>
        </div>
        <Link
          href="/resources/google-business-profile-checklist"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-neutral-950 px-5 py-3 text-sm font-bold text-white hover:bg-neutral-800"
        >
          Google Business Profile checklist for {city} firms <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </section>
  );
}
