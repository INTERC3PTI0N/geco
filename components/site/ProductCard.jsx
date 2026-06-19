import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ p, index }) {
  return (
    <Link href={`/products/${p.slug}`} className="card group flex h-full flex-col p-6">
      <div className="flex items-start justify-between">
        {index != null && <span className="font-display text-sm text-muted">{String(index + 1).padStart(2, "0")}</span>}
        <span className="chip">{p.tag}</span>
      </div>

      <div
        className="relative my-6 grid h-40 place-items-center overflow-hidden rounded-xl"
        style={{ background: "linear-gradient(140deg, var(--blue-tint), #fff)" }}
      >
        <Image
          src={`/brand/products/${p.slug}.webp`}
          alt={p.name}
          width={320}
          height={220}
          unoptimized
          className="h-32 w-auto max-w-[85%] object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <h3 className="font-display text-lg font-semibold leading-snug text-ink">{p.name}</h3>
      <p className="mt-2 line-clamp-2 text-sm text-muted">{p.summary}</p>

      <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-blue">
        View details
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  );
}
