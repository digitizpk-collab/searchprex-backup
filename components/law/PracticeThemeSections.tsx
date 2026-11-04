// components/law/PracticeThemeSections.tsx
//
// The sections that make each practice page different (lib/practice-themes):
// two photographs, one section in its own format, the long-tail searches with
// contextual links, and a prominent founder section with a lead form.

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Clock, Search } from "lucide-react";

import PillForm from "@/components/home/PillForm";
import type { PracticeTheme } from "@/lib/practice-themes";

export function PracticeEmotionBand({ theme }: { theme: Pick<PracticeTheme, "gap" | "images"> }) {
  return (
    <section className="px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <p className="mx-auto max-w-3xl text-center text-lg font-semibold leading-relaxed text-slate-800">{theme.gap}</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {theme.images.map((img) => (
            <figure key={img.src} className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
              <div className="relative aspect-[16/10]">
                <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 100vw, 560px" className="object-cover" />
              </div>
              <figcaption className="p-5 text-[15px] leading-relaxed text-slate-700">{img.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PracticeUniqueSection({ theme }: { theme: PracticeTheme }) {
  const u = theme.unique;
  const link = (s: PracticeTheme["unique"]["steps"][number]) =>
    s.href ? (
      <Link href={s.href} className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-neutral-950 underline underline-offset-2">
        {s.anchor} <ArrowRight className="h-3.5 w-3.5" aria-hidden />
      </Link>
    ) : null;
  return (
    <section className={`px-4 py-16 sm:px-6 ${u.format === "hours" || u.format === "funnel" ? "bg-neutral-950 text-white" : "bg-slate-50"}`}>
      <div className="mx-auto max-w-6xl">
        <p className={`text-center text-xs font-bold uppercase tracking-[0.16em] ${u.format === "hours" || u.format === "funnel" ? "text-emerald-300" : "text-emerald-800"}`}>{u.eyebrow}</p>
        <h2 className={`mx-auto mt-3 max-w-3xl text-center text-3xl font-black tracking-tight sm:text-4xl ${u.format === "hours" || u.format === "funnel" ? "text-white" : "text-neutral-950"}`}>{u.title}</h2>
        <p className={`mx-auto mt-4 max-w-2xl text-center text-[15px] leading-relaxed ${u.format === "hours" || u.format === "funnel" ? "text-white/70" : "text-slate-600"}`}>{u.intro}</p>

        {u.format === "journey" && (
          <ol className="mt-10 grid gap-5 md:grid-cols-3">
            {u.steps.map((s) => (
              <li key={s.t} className="rounded-3xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-black text-neutral-950">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.d}</p>
                {link(s)}
              </li>
            ))}
          </ol>
        )}

        {u.format === "hours" && (
          <ol className="mx-auto mt-10 max-w-3xl space-y-4 border-l-2 border-emerald-400/40 pl-6">
            {u.steps.map((s) => (
              <li key={s.t} className="relative">
                <span className="absolute -left-[33px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-400"><Clock className="h-2.5 w-2.5 text-neutral-950" aria-hidden /></span>
                <h3 className="text-lg font-black text-white">{s.t}</h3>
                <p className="mt-1 text-sm leading-relaxed text-white/75">{s.d}</p>
                {s.href ? <Link href={s.href} className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-emerald-300 underline underline-offset-2">{s.anchor} <ArrowRight className="h-3.5 w-3.5" aria-hidden /></Link> : null}
              </li>
            ))}
          </ol>
        )}

        {u.format === "checklist" && (
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {u.steps.map((s) => (
              <div key={s.t} className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-6">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800"><Check className="h-4 w-4" aria-hidden /></span>
                <div>
                  <h3 className="text-lg font-black text-neutral-950">{s.t}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{s.d}</p>
                  {link(s)}
                </div>
              </div>
            ))}
          </div>
        )}

        {u.format === "funnel" && (
          <ol className="mx-auto mt-10 max-w-4xl space-y-3">
            {u.steps.map((s, i) => (
              <li key={s.t} className="rounded-2xl border border-white/10 bg-white/5 p-5" style={{ marginLeft: `${i * 4}%`, marginRight: `${i * 4}%` }}>
                <h3 className="text-lg font-black text-white">{s.t}</h3>
                <p className="mt-1 text-sm leading-relaxed text-white/75">{s.d}</p>
                {s.href ? <Link href={s.href} className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-emerald-300 underline underline-offset-2">{s.anchor} <ArrowRight className="h-3.5 w-3.5" aria-hidden /></Link> : null}
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}

export function PracticeLongTails({ theme, name }: { theme: PracticeTheme; name: string }) {
  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-black tracking-tight text-neutral-950 sm:text-4xl">The {name.toLowerCase()} searches we target</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-[15px] leading-relaxed text-slate-600">
          Beyond the main search, these are the specific searches that bring the right clients, and the page that answers each one.
        </p>
        <ul className="mt-8 divide-y divide-slate-100 rounded-3xl border border-slate-200 bg-white">
          {theme.longTails.map((l) => (
            <li key={l.q} className="flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <Search className="mt-1 h-4 w-4 shrink-0 text-emerald-700" aria-hidden />
                <div>
                  <p className="font-bold text-neutral-950">{l.q}</p>
                  <p className="text-sm text-slate-600">{l.why}</p>
                </div>
              </div>
              <Link href={l.href} className="shrink-0 text-sm font-bold text-neutral-950 underline underline-offset-2">{l.anchor}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function PracticeFounderSpotlight({ theme, slug, role = "Founder · SEO expert for law firms", heading = "You work with Mubashar Sharif, not a sales team" }: { theme: Pick<PracticeTheme, "founderLine">; slug: string; role?: string; heading?: string }) {
  return (
    <section className="bg-neutral-950 px-4 py-20 text-white sm:px-6">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative mx-auto w-full max-w-[280px] overflow-hidden rounded-3xl border border-white/10 sm:max-w-sm lg:max-w-md">
          <div className="relative aspect-[4/5]">
            <Image src="/images/mubashar-sharif.jpg" alt="Mubashar Sharif, founder of SearchPrex and SEO expert" fill sizes="(max-width: 1024px) 90vw, 440px" className="object-cover" />
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-950 to-transparent p-5">
            <p className="text-xl font-black">Mubashar Sharif</p>
            <p className="text-sm text-white/75">{role}</p>
          </div>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">Your SEO expert</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">{heading}</h2>
          <p className="mt-4 text-lg leading-relaxed text-white/85">{theme.founderLine}</p>
          <ul className="mt-6 grid gap-2 text-[15px] text-white/85 sm:grid-cols-2">
            {["5+ years in SEO", "Semrush and HubSpot certified", "One firm per city", "A report every Monday", "7-day free trial", "90-day money-back guarantee"].map((c) => (
              <li key={c} className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-300" aria-hidden /> {c}</li>
            ))}
          </ul>
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="font-bold">Get a free audit of your firm&apos;s site, from me, within 24 hours</p>
            <div className="mt-4">
              <PillForm source={`${slug}-founder`} tone="dark" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
