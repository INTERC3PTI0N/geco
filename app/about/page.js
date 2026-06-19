import PageHeader from "@/components/site/PageHeader";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import CTA from "@/components/site/CTA";
import Gallery from "@/components/site/Gallery";
import { ABOUT, STATS, AWARDS, REGIONS } from "@/lib/content";

export const metadata = {
  title: "About Us — Geco Trading Corporation",
  description:
    "Founded in 1958 by Mr. Haji K. M. Ibrahim, Geco Trading Corporation is a family-owned engineering export house manufacturing GTC brand engine parts in original quality.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Your engineering partner"
        accent="around the world."
        body={ABOUT.philosophy}
      />

      {/* Who we are */}
      <section className="section-pad py-16 lg:py-24">
        <div className="maxw grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-line bg-white p-3 shadow-[0_30px_60px_-30px_rgba(11,27,51,0.25)]">
              <Gallery
                images={[{ src: "/brand/who-we-are.webp", alt: "Geco Trading Corporation award trophies and GTC brand product packaging" }]}
                className="block"
                itemClassName="w-full"
                imgClassName="h-auto w-full rounded-xl object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal as="span" className="eyebrow">Who We Are</Reveal>
            <Reveal as="h2" delay={0.05} className="font-display mt-4 text-3xl font-bold leading-tight text-ink sm:text-4xl">
              Customers at the heart of everything we do.
            </Reveal>
            {ABOUT.whoWeAre.map((p, i) => (
              <Reveal as="p" key={i} delay={0.1 + i * 0.05} className="mt-5 text-ink-2">
                {p}
              </Reveal>
            ))}
            <Reveal delay={0.2} className="mt-7 flex flex-wrap gap-2">
              {REGIONS.map((r) => (
                <span key={r} className="chip">{r}</span>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats band */}
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

      {/* History */}
      <section className="section-pad py-16 lg:py-24">
        <div className="maxw grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Reveal as="span" className="eyebrow">Our Story</Reveal>
            <Reveal as="h2" delay={0.05} className="font-display mt-4 text-3xl font-bold leading-tight text-ink sm:text-4xl">
              A family-owned legacy since 1958.
            </Reveal>
          </div>
          <div className="lg:pt-2">
            {ABOUT.history.map((p, i) => (
              <Reveal as="p" key={i} delay={i * 0.05} className="mt-5 text-lg leading-relaxed text-ink-2 first:mt-0">
                {p}
              </Reveal>
            ))}
            <Reveal delay={0.15} className="mt-8 rounded-2xl border border-line bg-blue-tint p-7">
              <p className="font-display text-xl font-medium leading-snug text-ink sm:text-2xl">
                &ldquo;{ABOUT.motto}&rdquo;
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Awards + Memberships */}
      <section className="section-pad bg-bg-2 py-20 lg:py-28">
        <div className="maxw grid gap-14 lg:grid-cols-2">
          <div>
            <Reveal as="span" className="eyebrow eyebrow-gold">Awards &amp; Accolades</Reveal>
            <Reveal as="h2" delay={0.05} className="font-display mt-4 text-3xl font-bold text-ink sm:text-4xl">
              Recognised for excellence.
            </Reveal>
            <div className="mt-8 space-y-px overflow-hidden rounded-2xl border border-line bg-line">
              {AWARDS.map((a, i) => (
                <Reveal key={a.title} delay={i * 0.05} className="flex gap-4 bg-white p-6">
                  <span className="font-display text-sm text-gold-deep">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-semibold text-ink">{a.title}</h3>
                    <p className="mt-1 text-sm text-muted">{a.note}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div>
            <Reveal as="span" className="eyebrow">Memberships &amp; Associations</Reveal>
            <Reveal as="h2" delay={0.05} className="font-display mt-4 text-3xl font-bold text-ink sm:text-4xl">
              Certified and connected.
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {ABOUT.memberships.map((m, i) => (
                <Reveal key={m} delay={i * 0.05} className="card flex items-center gap-3 p-5">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-blue-soft text-blue">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  <span className="text-sm font-medium text-ink">{m}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA eyebrow="Partner with Geco" title="Six decades of trust. Let's build the next one together." />
    </>
  );
}
