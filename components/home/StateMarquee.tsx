// components/home/StateMarquee.tsx
//
// The states SearchPrex covers as a slowly moving row of photo cards. Pure
// CSS: it pauses on hover or keyboard focus, and stops for visitors who ask
// for reduced motion (they get a normal scrollable row). The second copy of
// the row only exists to make the loop seamless, so it is hidden from screen
// readers and from tabbing.

import Image from "next/image";
import Link from "next/link";

export type MarqueeState = {
  name: string;
  hubHref: string | null;
  img: string;
  alt: string;
  cities: { name: string; href: string }[];
};

function Card({ s, hidden }: { s: MarqueeState; hidden?: boolean }) {
  return (
    <div className="relative flex h-80 w-60 shrink-0 flex-col overflow-hidden rounded-3xl bg-neutral-950 sm:w-72" aria-hidden={hidden || undefined}>
      {/* Photo on top, text on a solid panel below, so the state name stays
          readable whatever is in the picture. */}
      <div className="relative min-h-0 flex-1">
        <Image src={s.img} alt={hidden ? "" : s.alt} fill sizes="(max-width: 640px) 240px, 288px" className="object-cover" />
      </div>
      <div className="p-5 text-white">
        {(() => {
          const name = s.hubHref ? (
            <Link href={s.hubHref} tabIndex={hidden ? -1 : undefined} className="text-white hover:underline">{s.name}</Link>
          ) : s.name;
          return hidden ? <p className="text-xl font-black text-white sm:text-2xl">{name}</p> : <h3 className="text-xl font-black text-white sm:text-2xl">{name}</h3>;
        })()}
        <p className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1 text-sm text-white/80">
          {s.cities.map((c) => (
            <Link key={c.href} href={c.href} tabIndex={hidden ? -1 : undefined} className="hover:text-white hover:underline">{c.name}</Link>
          ))}
        </p>
      </div>
    </div>
  );
}

export default function StateMarquee({ states }: { states: MarqueeState[] }) {
  return (
    <div className="state-marquee group relative overflow-hidden">
      <style>{`
        @keyframes state-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .state-marquee .track { animation: state-marquee 60s linear infinite; }
        .state-marquee:hover .track, .state-marquee:focus-within .track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .state-marquee { overflow-x: auto; }
          .state-marquee .track { animation: none; }
          .state-marquee .dup { display: none; }
        }
      `}</style>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-slate-50 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-slate-50 to-transparent" />
      <div className="track flex w-max gap-5">
        {states.map((s) => <Card key={s.name} s={s} />)}
        <div className="dup flex gap-5">
          {states.map((s) => <Card key={`dup-${s.name}`} s={s} hidden />)}
        </div>
      </div>
    </div>
  );
}
