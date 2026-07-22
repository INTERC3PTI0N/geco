import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import Slider from "@/components/site/Slider";
import { STATS } from "@/lib/content";

const CERTIFICATES = [
  { src: "/brand/memberships/certificate-1.webp", alt: "ISO 9001:2015 Certificate of Registration — Geco Trading Corporation Private Limited" },
  { src: "/brand/memberships/certificate-2.webp", alt: "Government of India Certificate of Recognition — One Star Export House, awarded to Geco Trading Corporation Private Limited" },
];

export default function Heritage() {
  return (
    <section className="section-pad bg-bg-2 py-24 lg:py-32">
      <div className="maxw border-t border-line pt-10">
        <span className="tech-label">/ 03 — Our Heritage</span>
        <div className="mt-4 grid items-start gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          {/* sticky certificate panel */}
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <div className="relative overflow-hidden rounded-2xl border border-line bg-white p-3 shadow-[0_40px_80px_-40px_rgba(11,27,51,0.3)]">
                <Slider images={CERTIFICATES} className="aspect-[3/4] w-full rounded-xl" imgClassName="object-cover" />
                <span className="pointer-events-none absolute left-6 top-6 h-6 w-6 border-l-2 border-t-2 border-blue/40" />
                <span className="pointer-events-none absolute bottom-6 right-6 h-6 w-6 border-b-2 border-r-2 border-blue/40" />
              </div>
              <div className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl border border-line bg-white px-5 py-4 shadow-lg sm:left-8">
                <Image src="/brand/60-years.webp" alt="Celebrating 60+ years" width={150} height={56} className="h-11 w-auto object-contain" />
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal as="h2" delay={0.05} className="font-display text-4xl font-extrabold leading-[1.03] tracking-tight text-ink sm:text-5xl">
              Leading engineering goods exporters <span className="text-gradient-blue">since 1958.</span>
            </Reveal>
            <Reveal as="p" delay={0.1} className="mt-6 max-w-xl text-lg leading-relaxed text-ink-2">
              Founded by Mr. Haji K. M. Ibrahim, Geco Trading Corporation is a family-owned organisation that
              has grown into one of the largest and most reputed engineering export houses in India and across
              the globe. Our success rests on a simple principle — prioritise the customer&apos;s interest, and
              never compromise on quality.
            </Reveal>
            <Reveal delay={0.15} className="mt-8">
              <Link href="/about" className="btn-ghost">Read our story</Link>
            </Reveal>

            {/* stat ledger */}
            <div className="mt-12 grid grid-cols-2 gap-x-10 gap-y-8 border-t border-line pt-8 sm:grid-cols-2">
              {STATS.map((s) => (
                <div key={s.label} className="border-l-2 border-gold/50 pl-4">
                  <div className="font-display text-4xl font-extrabold text-gradient-blue sm:text-5xl">
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 font-mono text-[0.66rem] uppercase tracking-[0.14em] text-muted">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
