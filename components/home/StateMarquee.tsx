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
    <div className="relative h-80 w-64 shrink-0 overflow-hidden rounded-3xl sm:w-72" aria-hidden={hidden || undefined}>
      <Image src={s.img} alt={hidden ? "" : s.alt} fill sizes="288px" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/35 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5 text-white">
        {(() => {
          const name = s.hubHref ? (
            <Link href={s.hubHref} tabIndex={hidden ? -1 : undefined} className="hover:underline">{s.name}</Link>
          ) : s.name;
          return hidden ? <p className="text-2xl font-black">{name}</p> : <h3 className="text-2xl font-black">{name}</h3>;
        })()}
        <p className="mt-2 flex flex-wrap gap-x-2 gap-y-1 text-sm text-white/85">
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
