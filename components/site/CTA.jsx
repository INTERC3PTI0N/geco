import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function CTA({
  eyebrow = "Let's work together",
  title = "Ready to source engine parts in original quality?",
  body = "Tell us what you need and our team will respond with availability, specifications and a quote.",
}) {
  return (
    <section className="section-pad py-20 lg:py-28">
      <div className="maxw">
        <Reveal className="relative overflow-hidden rounded-3xl px-8 py-16 text-center lg:px-16 lg:py-24"
          style={undefined}>
          <div className="pointer-events-none absolute inset-0 rounded-3xl" style={{ background: "linear-gradient(120deg, var(--blue-deep), var(--blue))" }} />
          <div className="dotgrid pointer-events-none absolute inset-0 rounded-3xl opacity-20" />
          <div className="relative">
            <span className="eyebrow !text-white/80">{eyebrow}</span>
            <h2 className="font-display mx-auto mt-4 max-w-3xl text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/80">{body}</p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-gold">Get a Free Quote</Link>
              <Link
                href="/products"
                className="btn-ghost !border-white/40 !text-white hover:!border-white hover:!bg-white/10 hover:!text-white"
              >
                Browse Catalogue
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
