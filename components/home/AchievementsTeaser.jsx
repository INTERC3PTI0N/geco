import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const CARDS = [
  { img: "/brand/trophy.webp", title: "Gold Trophy", body: "Largest exporter — five years in a row." },
  { img: "/brand/quality.webp", title: "World Class Quality", body: "ISO 9001:2015 certified manufacturing." },
];

export default function AchievementsTeaser() {
  return (
    <section className="section-pad bg-bg-2 py-24 lg:py-32">
      <div className="maxw">
        <div className="text-center">
          <Reveal as="span" className="eyebrow eyebrow-gold">Awards &amp; Accolades</Reveal>
          <Reveal as="h2" delay={0.05} className="font-display mx-auto mt-4 max-w-3xl text-3xl font-bold leading-[1.08] tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Celebrating excellence in <span className="text-gradient-blue">engineering exports.</span>
          </Reveal>
        </div>

        <div className="mt-14 grid items-center gap-8 lg:grid-cols-4">
          {CARDS.slice(0, 1).map((c) => (
            <Reveal key={c.title} className="card flex flex-col items-center p-8 text-center">
              <Image src={c.img} alt={c.title} width={110} height={150} className="h-32 w-auto object-contain" />
              <h3 className="font-display mt-5 text-lg font-semibold text-ink">{c.title}</h3>
              <p className="mt-2 text-sm text-muted">{c.body}</p>
            </Reveal>
          ))}

          <Reveal delay={0.08} className="order-first lg:order-none lg:col-span-2">
            <div className="flex flex-col items-center text-center">
              <Image src="/brand/60-years.webp" alt="Celebrating 60+ years of innovation" width={420} height={170} className="h-auto w-full max-w-sm object-contain" />
              <p className="mt-6 max-w-md text-ink-2">
                Six decades of uninterrupted innovation, manufacturing and global trust — recognised by industry and government alike.
              </p>
              <Link href="/achievements" className="btn-blue mt-7">See all achievements</Link>
            </div>
          </Reveal>

          {CARDS.slice(1).map((c) => (
            <Reveal key={c.title} delay={0.12} className="card flex flex-col items-center p-8 text-center">
              <Image src={c.img} alt={c.title} width={110} height={150} className="h-32 w-auto object-contain" />
              <h3 className="font-display mt-5 text-lg font-semibold text-ink">{c.title}</h3>
              <p className="mt-2 text-sm text-muted">{c.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
