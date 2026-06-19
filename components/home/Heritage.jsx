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
    <section className="section-pad py-24 lg:py-32">
      <div className="maxw grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-line bg-white p-3 shadow-[0_30px_60px_-30px_rgba(11,27,51,0.25)]">
            <Slider images={CERTIFICATES} className="aspect-[3/4] w-full rounded-xl" imgClassName="object-cover" />
          </div>
          <div className="absolute -bottom-6 left-4 rounded-2xl border border-line bg-white px-5 py-4 shadow-lg sm:left-8">
            <Image src="/brand/60-years.webp" alt="Celebrating 60+ years" width={150} height={56} className="h-11 w-auto object-contain" />
          </div>
        </Reveal>

        <div>
          <Reveal as="span" className="eyebrow inline-flex items-center gap-3">
            <span className="h-px w-8 bg-blue" /> Our Heritage
          </Reveal>
          <Reveal as="h2" delay={0.05} className="font-display mt-5 text-3xl font-bold leading-[1.06] tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Leading engineering goods exporters <span className="text-gradient-blue">since 1958.</span>
          </Reveal>
          <Reveal as="p" delay={0.1} className="mt-6 max-w-xl text-ink-2">
            Founded by Mr. Haji K. M. Ibrahim, Geco Trading Corporation is a family-owned organisation that
            has grown into one of the largest and most reputed engineering export houses in India and across
            the globe. Our success is built on a simple principle — prioritise the customer&apos;s interest, and
            never compromise on quality.
          </Reveal>
          <Reveal delay={0.15} className="mt-8">
            <Link href="/about" className="btn-ghost">Read our story</Link>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="bg-white px-4 py-7 text-center">
                <div className="font-display text-3xl font-bold text-gradient-blue sm:text-4xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-[0.68rem] uppercase tracking-[0.14em] text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
