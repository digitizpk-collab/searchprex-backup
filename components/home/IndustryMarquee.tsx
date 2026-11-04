// components/home/IndustryMarquee.tsx
//
// "Industries we work in" as two rows of links drifting in opposite
// directions. CSS only; pauses on hover or focus, and becomes a still,
// wrapping list for visitors who ask for reduced motion. The duplicate half
// of each row exists only for the seamless loop, so it is hidden from screen
// readers and from tabbing.

import Link from "next/link";

type Item = { name: string; href: string; group: string };

function Row({ items, reverse }: { items: Item[]; reverse?: boolean }) {
  const chip = (i: Item, hidden: boolean) => (
    <Link
      key={(hidden ? "dup-" : "") + i.href}
      href={i.href}
      tabIndex={hidden ? -1 : undefined}
      aria-hidden={hidden || undefined}
      className="inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-neutral-900 shadow-sm transition hover:border-neutral-900 hover:bg-neutral-950 hover:text-white"
    >
      <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700">{i.group}</span>
      {i.name} SEO
    </Link>
  );
  return (
    <div className="ind-row group relative overflow-hidden py-1">
      <div className={`ind-track flex w-max gap-3 ${reverse ? "ind-reverse" : ""}`}>
        {items.map((i) => chip(i, false))}
        <div className="ind-dup flex gap-3">{items.map((i) => chip(i, true))}</div>
      </div>
    </div>
  );
}

export default function IndustryMarquee({ groups }: { groups: { label: string; links: { name: string; href: string }[] }[] }) {
  const all: Item[] = groups.flatMap((g) => g.links.map((l) => ({ ...l, group: g.label })));
  const half = Math.ceil(all.length / 2);
  return (
    <div className="relative space-y-3">
      <style>{`
        @keyframes ind-left { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes ind-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        .ind-track { animation: ind-left 45s linear infinite; }
        .ind-track.ind-reverse { animation-name: ind-right; }
        .ind-row:hover .ind-track, .ind-row:focus-within .ind-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .ind-track { animation: none; flex-wrap: wrap; width: auto; }
          .ind-dup { display: none; }
        }
      `}</style>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-slate-50 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-slate-50 to-transparent" />
      <Row items={all.slice(0, half)} />
      <Row items={all.slice(half)} reverse />
    </div>
  );
}
