import PageHeader from "@/components/site/PageHeader";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/site/ProductCard";
import CTA from "@/components/site/CTA";
import { CATEGORIES, productsByCategory, INDUSTRIES } from "@/lib/content";

export const metadata = {
  title: "Products — Full Catalogue | Geco Trading Corporation",
  description:
    "The complete GTC aftermarket engine parts catalogue — valves, cylinder liners, crankshafts, pistons, bearings, gears and more, in original quality across 18 categories.",
};

export default function ProductsPage() {
  let counter = 0;
  return (
    <>
      <PageHeader
        eyebrow="The Catalogue"
        title="Aftermarket engine parts,"
        accent="precision crafted."
        body="Eighteen product categories, centrifugally cast and accurately machined to match original equipment — engineered for automobiles, tractors, trucks, earth-moving equipment and industrial engines."
      >
        <Reveal className="mt-8 flex flex-wrap gap-2">
          {INDUSTRIES.map((i) => (
            <span key={i} className="chip">{i}</span>
          ))}
        </Reveal>
      </PageHeader>

      {CATEGORIES.map((cat) => {
        const items = productsByCategory(cat.id);
        return (
          <section key={cat.id} className="section-pad py-14 lg:py-20 [&:nth-child(even)]:bg-bg-2">
            <div className="maxw">
              <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-7">
                <div className="flex items-start gap-4">
                  <span className="font-display text-lg font-bold text-gold">{cat.no}</span>
                  <div>
                    <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">{cat.name}</h2>
                    <p className="mt-2 max-w-2xl text-sm text-muted">{cat.blurb}</p>
                  </div>
                </div>
                <span className="chip">{items.length} products</span>
              </div>

              <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((p) => {
                  const idx = counter++;
                  return (
                    <Reveal key={p.slug} delay={(idx % 3) * 0.05}>
                      <ProductCard p={p} index={idx} />
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      <CTA eyebrow="Need something specific?" title="Send us your drawings — we manufacture to your specification." body="Many of our parts are produced to customer samples, drawings and specifications. Share your requirement and we'll quote." />
    </>
  );
}
