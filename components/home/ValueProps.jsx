import Reveal from "@/components/Reveal";
import { VALUE_PROPS } from "@/lib/content";

export default function ValueProps() {
  return (
    <section className="section-pad py-24 lg:py-32">
      <div className="maxw">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <Reveal as="span" className="eyebrow inline-flex items-center gap-3">
              <span className="h-px w-8 bg-blue" /> Why Geco
            </Reveal>
            <Reveal as="h2" delay={0.05} className="font-display mt-5 text-3xl font-bold leading-[1.08] tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Precision crafted for <span className="text-gradient-blue">maximum performance.</span>
            </Reveal>
            <Reveal as="p" delay={0.1} className="mt-6 max-w-md text-ink-2">
              Revolutionising performance with unmatched quality in every component. Centrifugally cast,
              accurately machined, and engineered to match original equipment — part for part.
            </Reveal>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {VALUE_PROPS.map((v, i) => (
              <Reveal key={v.no} delay={i * 0.06} className="bg-white p-7">
                <span className="font-display text-sm font-semibold text-gold-deep">{v.no}</span>
                <h3 className="font-display mt-3 text-xl font-semibold text-ink">{v.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
