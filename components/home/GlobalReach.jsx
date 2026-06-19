import Image from "next/image";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import { REGIONS } from "@/lib/content";

export default function GlobalReach() {
  return (
    <section className="section-pad py-24 lg:py-32">
      <div className="maxw grid items-center gap-14 lg:grid-cols-2">
        <div>
          <Reveal as="span" className="eyebrow inline-flex items-center gap-3">
            <span className="h-px w-8 bg-blue" /> Global Footprint
          </Reveal>
          <Reveal as="h2" delay={0.05} className="font-display mt-5 text-3xl font-bold leading-[1.06] tracking-tight text-ink sm:text-4xl lg:text-5xl">
            From the Middle East <span className="text-gradient-blue">to the USA.</span>
          </Reveal>
          <Reveal as="p" delay={0.1} className="mt-6 max-w-md text-ink-2">
            Our components keep engines running across continents — a trusted name wherever precision and
            reliability matter most.
          </Reveal>

          <Reveal delay={0.15} className="mt-7 flex flex-wrap gap-2">
            {REGIONS.map((r) => (
              <span key={r} className="chip">{r}</span>
            ))}
          </Reveal>

          <div className="mt-10 flex gap-12">
            <div>
              <div className="font-display text-4xl font-bold text-gradient-blue sm:text-5xl">
                <Counter value={60} suffix="+" />
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.16em] text-muted">Countries Exported</div>
            </div>
            <div>
              <div className="font-display text-4xl font-bold text-gradient-blue sm:text-5xl">
                <Counter value={68} suffix="+" />
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.16em] text-muted">Years of Trust</div>
            </div>
          </div>
        </div>

        <Reveal delay={0.1} className="relative">
          <div className="dotgrid absolute inset-0 -z-10 rounded-3xl opacity-60" />
          <Image src="/brand/countries.webp" alt="Countries Geco exports to" width={760} height={460} className="h-auto w-full object-contain" />
        </Reveal>
      </div>
    </section>
  );
}
