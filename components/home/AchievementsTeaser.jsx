import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function AchievementsTeaser() {
  return (
    <section className="section-pad bg-bg-2 py-24 lg:py-32">
      <div className="maxw">
        <div className="border-t border-line pt-6 text-center">
          <Reveal as="span" className="tech-label tech-label-gold">/ 04 — Awards &amp; Accolades</Reveal>
          <Reveal as="h2" delay={0.05} className="font-display mx-auto mt-4 max-w-3xl text-4xl font-extrabold leading-[1.04] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Celebrating excellence in <span className="text-gradient-blue">engineering exports.</span>
          </Reveal>
        </div>

        <Reveal delay={0.08} className="mt-14 flex justify-center">
          <div className="flex flex-col items-center text-center">
            <Image src="/brand/60-years.webp" alt="Celebrating 60+ years of innovation" width={420} height={170} className="h-auto w-full max-w-sm object-contain" />
            <p className="mt-6 max-w-md text-ink-2">
              Six decades of uninterrupted innovation, manufacturing and global trust — recognised by industry and government alike.
            </p>
            <Link href="/achievements" className="btn-blue mt-7">See all achievements</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
