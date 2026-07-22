import Reveal from "@/components/Reveal";
import { VALUE_PROPS } from "@/lib/content";

export default function ValueProps() {
  return (
    <section className="section-pad py-24 lg:py-32">
      <div className="maxw grid gap-12 border-t border-line pt-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        {/* sticky heading */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="tech-label">/ 01 — Why Geco</span>
          <Reveal as="h2" delay={0.05} className="font-display mt-4 text-4xl font-extrabold leading-[1.03] tracking-tight text-ink sm:text-5xl">
            Precision crafted for <span className="text-gradient-blue">maximum performance.</span>
          </Reveal>
          <Reveal as="p" delay={0.1} className="mt-6 max-w-md text-ink-2">
            Revolutionising performance with unmatched quality in every component — centrifugally cast,
            accurately machined, engineered to match original equipment, part for part.
          </Reveal>
          <Reveal delay={0.15} className="mt-8 inline-flex items-center gap-3 rounded-full border border-line bg-bg-2 px-5 py-2.5">
            <span className="h-2 w-2 rounded-full bg-gold" />
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-ink-2">Four reasons, zero compromise</span>
          </Reveal>
        </div>

        {/* animated numbered ledger */}
        <div>
          {VALUE_PROPS.map((v, i) => (
            <Reveal
              key={v.no}
              delay={i * 0.05}
              x={40}
              className="group grid grid-cols-[auto_1fr] gap-6 border-b border-line py-8 transition-colors first:border-t hover:bg-bg-2/60 sm:gap-8 sm:py-10"
            >
              <span className="font-display text-5xl font-extrabold leading-none text-ink/12 transition-colors group-hover:text-blue/70 sm:text-6xl">
                {v.no}
              </span>
              <div className="pt-1">
                <div className="flex items-center gap-3">
                  <span className="h-px w-6 bg-gold transition-all duration-500 group-hover:w-12" />
                  <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">{v.title}</h3>
                </div>
                <p className="mt-3 max-w-lg leading-relaxed text-muted">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
