"use client";

import dynamic from "next/dynamic";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import { REGIONS } from "@/lib/content";

const Globe = dynamic(() => import("@/components/scene/Globe"), { ssr: false });

export default function GlobalReach() {
  return (
    <section className="section-pad relative overflow-hidden bg-[#060d1f] py-24 text-white lg:py-32">
      <div className="dotgrid pointer-events-none absolute inset-0 opacity-[0.05]" />
      <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(60% 60% at 78% 45%, rgba(27,95,217,0.22), transparent 60%)" }} />

      <div className="maxw relative grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        {/* copy */}
        <div>
          <span className="tech-label !text-[#7aa6ff]">/ 05 — Global Footprint</span>
          <Reveal as="h2" delay={0.05} className="font-display mt-4 max-w-xl text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
            From the Middle East <span className="text-[#8fb4ff]">to the USA.</span>
          </Reveal>
          <Reveal as="p" delay={0.1} className="mt-6 max-w-md text-white/65">
            Our components keep engines running across six continents — a trusted name in{" "}
            <span className="font-semibold text-white">60+ countries</span> wherever precision and reliability matter most.
            Drag the globe to explore our reach.
          </Reveal>

          <div className="mt-10 flex gap-12">
            <div className="border-l-2 border-[#e7c463]/60 pl-4">
              <div className="font-display text-4xl font-extrabold text-white sm:text-5xl"><Counter value={60} suffix="+" /></div>
              <div className="mt-2 font-mono text-[0.66rem] uppercase tracking-[0.14em] text-white/45">Countries exported</div>
            </div>
            <div className="border-l-2 border-[#e7c463]/60 pl-4">
              <div className="font-display text-4xl font-extrabold text-white sm:text-5xl"><Counter value={68} suffix="+" /></div>
              <div className="mt-2 font-mono text-[0.66rem] uppercase tracking-[0.14em] text-white/45">Years of trust</div>
            </div>
          </div>

          <Reveal delay={0.15} className="mt-9 flex flex-wrap gap-2">
            {REGIONS.map((r) => (
              <span key={r} className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-[#4d8dff]" /> {r}
              </span>
            ))}
          </Reveal>
        </div>

        {/* interactive 3D globe */}
        <div className="relative h-[52vh] min-h-[360px] w-full cursor-grab active:cursor-grabbing lg:h-[64vh]">
          <Globe />
          <div className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-white/35">
            ● Drag to rotate
          </div>
        </div>
      </div>
    </section>
  );
}
