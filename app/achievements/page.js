import PageHeader from "@/components/site/PageHeader";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import CTA from "@/components/site/CTA";
import Gallery from "@/components/site/Gallery";
import { AWARDS, STATS, CREDENTIALS } from "@/lib/content";

const AWARD_IMAGES = Array.from({ length: 9 }, (_, i) => ({
  src: `/brand/achievements/award-${i + 1}.webp`,
  alt: `Geco Trading Corporation award and recognition ${i + 1}`,
}));

const MEMBERSHIP_IMAGES = [
  { src: "/brand/memberships/membership-1.webp", alt: "Geco Trading Corporation membership and association logo 1" },
  { src: "/brand/memberships/membership-2.webp", alt: "Geco Trading Corporation membership and association logo 2" },
  { src: "/brand/memberships/membership-3.webp", alt: "Geco Trading Corporation membership and association logo 3" },
  { src: "/brand/memberships/membership-4.webp", alt: "Government of India Certificate of Recognition — One Star Export House, awarded to Geco Trading Corporation Private Limited" },
];

export const metadata = {
  title: "Achievements — Geco Trading Corporation",
  description:
    "Celebrating excellence in engineering goods exports — Gold Trophy largest exporter five years running, ISO 9001:2015 certified, Government of India Star Export House.",
};

export default function AchievementsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Awards & Accolades"
        title="Celebrating excellence in"
        accent="engineering exports."
        body="More than six decades of uninterrupted innovation, recognised by industry and the Government of India alike."
      />

      {/* Trophy / 60 / quality showcase */}
      <section className="section-pad py-10 lg:py-16">
        <div className="maxw grid items-center gap-8 lg:grid-cols-4">
          <Reveal className="card flex flex-col items-center p-8 text-center">
            <Gallery
              images={[{ src: "/brand/trophy.webp", alt: "Gold Trophy" }]}
              className="inline-block"
              itemClassName="h-36 w-auto"
              imgClassName="object-contain"
            />
            <h3 className="font-display mt-5 text-lg font-semibold text-ink">Gold Trophy</h3>
            <p className="mt-2 text-sm text-muted">Largest exporter — five years in a row.</p>
          </Reveal>

          <Reveal delay={0.08} className="order-first lg:order-none lg:col-span-2">
            <div className="flex flex-col items-center text-center">
              <Gallery
                images={[{ src: "/brand/60-years.webp", alt: "Celebrating 60+ years of innovation" }]}
                className="inline-block w-full max-w-sm"
                itemClassName="w-full"
                imgClassName="h-auto w-full object-contain"
              />
              <p className="mt-6 max-w-md text-ink-2">
                A legacy of innovation, manufacturing and global trust — built part by part, year after year.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="card flex flex-col items-center p-8 text-center">
            <Gallery
              images={[{ src: "/brand/quality.webp", alt: "World Class Quality" }]}
              className="inline-block"
              itemClassName="h-36 w-auto"
              imgClassName="object-contain"
            />
            <h3 className="font-display mt-5 text-lg font-semibold text-ink">World Class Quality</h3>
            <p className="mt-2 text-sm text-muted">ISO 9001:2015 certified manufacturing.</p>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="section-pad py-10">
        <div className="maxw grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="bg-bg-2 px-5 py-9 text-center">
              <div className="font-display text-4xl font-bold text-gradient-blue sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-[0.68rem] uppercase tracking-[0.14em] text-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Awards & Accolades gallery */}
      <section className="section-pad py-20 lg:py-28">
        <div className="maxw">
          <Reveal as="h2" className="font-display text-center text-3xl font-bold text-ink sm:text-4xl">
            Awards and Accolades
          </Reveal>
          <p className="mx-auto mt-4 max-w-2xl text-center text-ink-2">
            Moments from award ceremonies and certifications recognising six decades of engineering excellence and export leadership.
          </p>
          <Reveal delay={0.05}>
            <Gallery
              images={AWARD_IMAGES}
              className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3"
              itemClassName="w-full aspect-[4/3] rounded-2xl border border-line bg-bg-2"
              imgClassName="object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Memberships & Associations */}
      <section className="section-pad bg-bg-2 py-20 lg:py-28">
        <div className="maxw">
          <Reveal as="h2" className="font-display text-center text-3xl font-bold text-ink sm:text-4xl">
            Memberships &amp; Associations
          </Reveal>
          <Reveal delay={0.05}>
            <Gallery
              images={MEMBERSHIP_IMAGES}
              className="mt-12 grid grid-cols-1 items-center gap-8 sm:grid-cols-2 lg:grid-cols-4"
              itemClassName="card w-full flex h-40 items-center justify-center p-8"
              imgClassName="!h-full !w-auto max-w-full object-contain"
            />
          </Reveal>
        </div>
      </section>

      {/* Awards list */}
      <section className="section-pad py-20 lg:py-28">
        <div className="maxw">
          <Reveal as="h2" className="font-display text-3xl font-bold text-ink sm:text-4xl">
            Recognition that spans decades.
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {AWARDS.map((a, i) => (
              <Reveal key={a.title} delay={(i % 2) * 0.06} className="card flex gap-5 p-7">
                <span className="font-display text-2xl font-bold text-gold">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink">{a.title}</h3>
                  <p className="mt-2 text-sm text-muted">{a.note}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 flex flex-wrap gap-3">
            {CREDENTIALS.map((c) => (
              <span key={c} className="chip chip-gold">{c}</span>
            ))}
          </Reveal>
        </div>
      </section>

      <CTA eyebrow="Proven excellence" title="Source from an award-winning export house." />
    </>
  );
}
