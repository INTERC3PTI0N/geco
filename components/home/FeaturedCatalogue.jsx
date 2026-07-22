"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { PRODUCTS } from "@/lib/content";

const FEATURED = ["engine-valves", "cylinder-liner-wet-type", "crankshafts", "pistons-piston-assly", "cam-shafts", "engineering-bearings-bushes"];

export default function FeaturedCatalogue() {
  const root = useRef(null);
  const innerRef = useRef(null);
  const trackRef = useRef(null);
  const items = FEATURED.map((s) => PRODUCTS.find((p) => p.slug === s)).filter(Boolean);

  useEffect(() => {
    const section = root.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop: horizontal scroll driven by a CSS-sticky inner panel + a plain
      // scrub tween. We deliberately do NOT use ScrollTrigger `pin`, which wraps
      // this <section> in a "pin-spacer" div — that DOM surgery desyncs from
      // React's tree and makes route changes throw `removeChild ... not a child`.
      // Sticky pinning is pure CSS, so React can unmount cleanly.
      mm.add("(min-width: 1024px)", () => {
        const PAD = 160;
        const getDist = () => Math.max(0, track.scrollWidth - window.innerWidth + PAD);
        const applyHeight = () => { section.style.height = window.innerHeight + getDist() + "px"; };
        applyHeight();

        const tween = gsap.to(track, {
          x: () => -getDist(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        const onRefreshInit = () => applyHeight();
        ScrollTrigger.addEventListener("refreshInit", onRefreshInit);
        ScrollTrigger.refresh();

        // subtle scale-in of each card as it travels into view
        gsap.utils.toArray(".cat-card").forEach((card) => {
          gsap.from(card, {
            opacity: 0, scale: 0.94, duration: 0.6,
            scrollTrigger: { trigger: card, containerAnimation: tween, start: "left 95%" },
          });
        });

        return () => {
          ScrollTrigger.removeEventListener("refreshInit", onRefreshInit);
          section.style.height = "";
          gsap.set(track, { clearProps: "x" });
        };
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative bg-[#0a1428] text-white">
      <div
        ref={innerRef}
        className="relative flex flex-col justify-center py-20 lg:sticky lg:top-0 lg:h-screen lg:overflow-hidden lg:py-0"
      >
        <div className="dotgrid pointer-events-none absolute inset-0 opacity-[0.05]" />
        <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(60% 50% at 15% 20%, rgba(27,95,217,0.22), transparent 60%)" }} />

        {/* header */}
        <div className="section-pad relative">
          <div className="maxw flex flex-wrap items-end justify-between gap-6 border-t border-white/10 pt-6">
            <div>
              <span className="tech-label !text-[#7aa6ff]">/ 02 — The Catalogue</span>
              <h2 className="font-display mt-4 max-w-2xl text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
                Aftermarket engine parts,<br />
                <span className="text-[#8fb4ff]">precision crafted.</span>
              </h2>
            </div>
            <Link href="/products" className="btn-blue sheen">View all 18 categories <Arrow /></Link>
          </div>
        </div>

        {/* horizontal track */}
        <div className="relative mt-14 overflow-x-auto lg:overflow-visible">
          <div ref={trackRef} className="flex gap-6 px-[max(1.25rem,5vw)] lg:w-max">
            {items.map((p, i) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="cat-card group relative flex w-[78vw] shrink-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-colors hover:border-[#4d8dff]/50 sm:w-[380px]"
              >
                <div className="flex items-start justify-between">
                  <span className="font-display text-2xl font-bold text-white/20">{String(i + 1).padStart(2, "0")}</span>
                  <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-[#8fb4ff]">{p.tag}</span>
                </div>
                <div className="relative my-6 grid h-52 place-items-center overflow-hidden rounded-xl bg-white">
                  <Image src={`/brand/products/${p.slug}.webp`} alt={p.name} width={360} height={260} unoptimized
                    className="h-40 w-auto max-w-[85%] object-contain transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="font-display text-xl font-semibold leading-snug">{p.name}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-white/55">{p.summary}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.12em] text-[#8fb4ff]">
                  View details <Arrow small />
                </span>
              </Link>
            ))}
            {/* end card */}
            <Link href="/products" className="cat-card group flex w-[78vw] shrink-0 flex-col justify-center rounded-2xl border border-dashed border-white/20 bg-white/[0.03] p-8 text-center sm:w-[300px]">
              <span className="font-display text-5xl font-extrabold text-[#8fb4ff]">18</span>
              <span className="mt-2 font-mono text-xs uppercase tracking-[0.16em] text-white/60">Full catalogue</span>
              <span className="mt-5 inline-flex items-center justify-center gap-2 text-sm font-semibold text-white">Browse all <Arrow /></span>
            </Link>
          </div>
        </div>

        <div className="section-pad relative mt-10 hidden lg:block">
          <div className="maxw flex items-center gap-3 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-white/40">
            <span className="h-px w-10 bg-white/25" /> Scroll to travel the range →
          </div>
        </div>
      </div>
    </section>
  );
}

const Arrow = ({ small }) => (
  <svg width={small ? 13 : 16} height={small ? 13 : 16} viewBox="0 0 24 24" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
