import Link from "next/link";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/site/ProductCard";
import { PRODUCTS } from "@/lib/content";

const FEATURED = ["engine-valves", "cylinder-liner-wet-type", "crankshafts", "pistons-piston-assly", "cam-shafts", "engineering-bearings-bushes"];

export default function FeaturedCatalogue() {
  const items = FEATURED.map((s) => PRODUCTS.find((p) => p.slug === s)).filter(Boolean);
  return (
    <section className="section-pad bg-bg-2 py-24 lg:py-32">
      <div className="maxw">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal as="span" className="eyebrow inline-flex items-center gap-3">
              <span className="h-px w-8 bg-blue" /> The Catalogue
            </Reveal>
            <Reveal as="h2" delay={0.05} className="font-display mt-5 max-w-2xl text-3xl font-bold leading-[1.06] tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Aftermarket engine parts, <span className="text-gradient-blue">precision crafted.</span>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link href="/products" className="btn-ghost">View all 18 categories</Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.06}>
              <ProductCard p={p} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
