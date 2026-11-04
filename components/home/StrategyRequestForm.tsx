"use client";

// components/home/StrategyRequestForm.tsx
//
// The homepage "free SEO strategy" request: five short fields (name, work
// email, website, what you are stuck on, what you want from SEO), stored like
// every other lead via /api/leads, then a plain confirmation of what happens
// next. If the store refuses the lead, the visitor is told so.

import { useState } from "react";
import { ArrowRight, CheckCircle, Mail } from "lucide-react";

import { LEAD_FAILED_MESSAGE, submitLead } from "@/lib/submit-lead";
import { trackLead } from "@/lib/track";

const STUCK = [
  "Not enough calls or leads",
  "Not showing in Google Maps",
  "Pages not indexed by Google",
  "Traffic or sales dropped",
  "Not showing in AI answers",
  "Something else",
];

const field =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-neutral-950 outline-none placeholder:text-slate-400 focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/15";

export default function StrategyRequestForm({ source }: { source: string }) {
  const [f, setF] = useState({ name: "", email: "", website: "", stuck: "", goal: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [hint, setHint] = useState("");
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setF((v) => ({ ...v, [k]: e.target.value }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!f.name.trim()) return setHint("Please add your name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) return setHint("Please add a valid work email.");
    if (!f.website.trim()) return setHint("Please add your website.");
    setHint("");
    setStatus("sending");
    const ok = await submitLead({
      source,
      name: f.name.trim(),
      email: f.email.trim(),
      website: f.website.trim(),
      business: f.stuck,
      message: `Free SEO strategy request. Stuck on: ${f.stuck || "not given"}. Wants from SEO: ${f.goal.trim() || "not given"}`,
    });
    if (ok) trackLead("strategy_request", source);
    setStatus(ok ? "done" : "error");
  }

  if (status === "done") {
    return (
      <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 text-center sm:p-10">
        <CheckCircle className="mx-auto h-12 w-12 text-emerald-600" aria-hidden />
        <p className="mt-4 text-2xl font-black text-neutral-950">Thank you, {f.name.split(" ")[0]}. Request received.</p>
        <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-slate-700">
          You&apos;ll receive your free SEO strategy within 24 hours. Keep an eye on your inbox, and check spam just in case.
        </p>
        <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-neutral-900">
          <Mail className="h-4 w-4" aria-hidden /> Sent to {f.email}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="sr-name" className="text-sm font-bold text-neutral-950">Your name</label>
          <input id="sr-name" value={f.name} onChange={set("name")} autoComplete="name" placeholder="Jane Smith" className={`mt-1.5 ${field}`} />
        </div>
        <div>
          <label htmlFor="sr-email" className="text-sm font-bold text-neutral-950">Work email</label>
          <input id="sr-email" type="email" value={f.email} onChange={set("email")} autoComplete="email" placeholder="you@yourbusiness.com" className={`mt-1.5 ${field}`} />
        </div>
        <div>
          <label htmlFor="sr-site" className="text-sm font-bold text-neutral-950">Website</label>
          <input id="sr-site" value={f.website} onChange={set("website")} autoComplete="url" placeholder="yourbusiness.com" className={`mt-1.5 ${field}`} />
        </div>
        <div>
          <label htmlFor="sr-stuck" className="text-sm font-bold text-neutral-950">What are you stuck on?</label>
          <select id="sr-stuck" value={f.stuck} onChange={set("stuck")} className={`mt-1.5 ${field}`}>
            <option value="">Choose one</option>
            {STUCK.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="sr-goal" className="text-sm font-bold text-neutral-950">What do you want from SEO?</label>
          <textarea id="sr-goal" value={f.goal} onChange={set("goal")} rows={3} placeholder="For example: more calls for roof repairs in Dallas, or more online sales for my store" className={`mt-1.5 ${field} resize-none`} />
        </div>
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-neutral-950 px-6 py-4 text-base font-bold text-white transition hover:bg-neutral-800 disabled:opacity-70"
      >
        {status === "sending" ? "Sending…" : "Send me my free SEO strategy"} {status === "sending" ? null : <ArrowRight className="h-4 w-4" aria-hidden />}
      </button>
      <p className={`mt-3 text-center text-sm ${hint || status === "error" ? "font-semibold text-[#b8123a]" : "text-slate-500"}`} role={hint || status === "error" ? "alert" : undefined}>
        {hint || (status === "error" ? LEAD_FAILED_MESSAGE : "Written by me, Mubashar Sharif, within 24 hours. No call needed, no newsletter.")}
      </p>
    </form>
  );
}
