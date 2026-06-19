import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageHeader from "@/components/site/PageHeader";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/site/ProductCard";
import CTA from "@/components/site/CTA";
import { PRODUCT_SLUGS, getProduct, CATEGORIES } from "@/lib/content";

export function generateStaticParams() {
  return PRODUCT_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return {
    title: `${p.name} — Geco Trading Corporation`,
    description: p.summary,
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();

  const category = CATEGORIES.find((c) => c.id === p.category);
  const related = (p.related || []).map(getProduct).filter(Boolean);

  return (
    <>
      <PageHeader eyebrow={category?.name || "Product"} title={p.name} body={p.summary}>
        <Reveal className="mt-8 flex flex-wrap items-center gap-3">
          <Link href="/products" className="text-sm font-medium text-blue hover:text-blue-deep">← Back to catalogue</Link>
          <span className="chip">{p.tag}</span>
        </Reveal>
      </PageHeader>

      <section className="section-pad pb-8 lg:pb-12">
        <div className="maxw grid gap-12 lg:grid-cols-[1.4fr_0.9fr] lg:gap-16">
          {/* Main content */}
          <div>
            {p.process?.length > 0 && (
              <div className="space-y-px overflow-hidden rounded-2xl border border-line bg-line">
                {p.process.map((step, i) => (
                  <Reveal key={i} delay={i * 0.05} className="bg-white p-7">
                    <div className="flex items-start gap-4">
                      <span className="font-display text-sm font-semibold text-gold-deep">{String(i + 1).padStart(2, "0")}</span>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-ink">{step.title}</h3>
                        <p className="mt-2 leading-relaxed text-ink-2">{step.body}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            )}

            {p.features?.length > 0 && (
              <div className="mt-10">
                <h3 className="eyebrow">Key Features</h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {p.features.map((f) => (
                    <Reveal key={f} className="flex items-center gap-3 rounded-xl border border-line bg-bg-2 px-4 py-3">
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-blue-soft text-blue">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </span>
                      <span className="text-sm font-medium text-ink">{f}</span>
                    </Reveal>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar specs */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="card overflow-hidden">
              <div className="relative grid h-56 place-items-center" style={{ background: "linear-gradient(140deg, var(--blue-tint), #fff)" }}>
                <Image
                  src={`/brand/products/${p.slug}.webp`}
                  alt={p.name}
                  width={420}
                  height={300}
                  unoptimized
                  className="h-44 w-auto max-w-[88%] object-contain"
                  priority
                />
              </div>
              <div className="p-6">
                {p.materials?.length > 0 && (
                  <SpecBlock title="Materials" items={p.materials} />
                )}
                {p.finishes?.length > 0 && (
                  <SpecBlock title="Finishes & Processes" items={p.finishes} className="mt-6" />
                )}
                {p.applications?.length > 0 && (
                  <div className="mt-6">
                    <h4 className="eyebrow">Applications</h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.applications.map((a) => (
                        <span key={a} className="chip">{a}</span>
                      ))}
                    </div>
                  </div>
                )}
                <Link href="/contact" className="btn-blue mt-7 w-full justify-center">Enquire about this part</Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-pad bg-bg-2 py-20 lg:py-24">
          <div className="maxw">
            <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">Related products</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r, i) => (
                <Reveal key={r.slug} delay={i * 0.05}>
                  <ProductCard p={r} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA />
    </>
  );
}

function SpecBlock({ title, items, className = "" }) {
  return (
    <div className={className}>
      <h4 className="eyebrow">{title}</h4>
      <ul className="mt-3 space-y-2">
        {items.map((it) => (
          <li key={it} className="flex gap-2.5 text-sm text-ink-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}
