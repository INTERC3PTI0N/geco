"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { CREDENTIALS } from "@/lib/content";
import MeshTextHover from "@/components/scene/MeshTextHover";
import Wallpaper from "@/components/scene/Wallpaper";

const FRAME_COUNT = 157;
const pad = (n) => String(n).padStart(4, "0");
const frameSrc = (i) => `/brand/frames/frame_${pad(i + 1)}.webp`;

const HERO_LINES = [
  { text: "The Possibilities" },
  { text: "Are Endless", gradient: true },
];

export default function Hero() {
  const root = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let currentIdx = -1;

    const drawFrame = (idx) => {
      const img = frames[idx];
      if (!img?.complete || !img.naturalWidth) return;
      if (idx === currentIdx) return;
      currentIdx = idx;
      ctx.clearRect(0, 0, 960, 540);
      ctx.drawImage(img, 0, 0, 960, 540);
    };

    const frames = Array.from({ length: FRAME_COUNT }, (_, i) => {
      const img = new Image();
      img.src = frameSrc(i);
      if (i === 0) img.onload = () => drawFrame(0);
      return img;
    });

    const gsapCtx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" }, delay: 0.15 });
      tl.from(".hero-kick", { yPercent: 100, opacity: 0, duration: 0.7, stagger: 0.08 })
        .from(".hero-title", { yPercent: 12, opacity: 0, duration: 1 }, "-=0.3")
        .from(".hero-sub", { y: 22, opacity: 0, duration: 0.8 }, "-=0.6")
        .from(".hero-cta", { y: 18, opacity: 0, duration: 0.6, stagger: 0.08 }, "-=0.45")
        .from(".hero-panel", { clipPath: "inset(0 0 100% 0)", duration: 1.1, ease: "power4.inOut" }, 0.3)
        .from(".hero-cred", { opacity: 0, y: 12, duration: 0.5, stagger: 0.05 }, "-=0.5");

      // scroll-scrub the engine frame sequence
      const proxy = { f: 0 };
      const scrubAnim = gsap.to(proxy, {
        f: FRAME_COUNT - 1,
        ease: "none",
        paused: true,
        onUpdate() { drawFrame(Math.round(proxy.f)); },
      });
      ScrollTrigger.create({
        trigger: root.current, start: "top top", end: "bottom top", scrub: true, animation: scrubAnim,
      });

      gsap.to(".hero-scrolldot", { yPercent: 200, repeat: -1, duration: 1.6, ease: "power1.inOut", yoyo: true });

      // gentle parallax drift on the engine as you scroll
      gsap.to(".hero-engine", {
        yPercent: -12, ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
    }, root);

    return () => gsapCtx.revert();
  }, []);

  return (
    <section ref={root} className="relative min-h-[100svh] overflow-hidden bg-bg">
      <div className="dotgrid pointer-events-none absolute inset-0 opacity-40" />

      <div className="section-pad maxw relative z-10 flex min-h-[100svh] flex-col justify-center pt-28 pb-10">
        {/* top datasheet row */}
        <div className="hero-kick flex items-center justify-between border-t border-line pt-4 text-[0.68rem]">
          <span className="tech-label !text-ink-2">GECO — Precision Components</span>
          <span className="tech-label !text-muted hidden sm:inline">Est. 1958 · Mumbai, IN · ISO 9001:2015</span>
        </div>

        <div className="mt-8 grid flex-1 items-center gap-10 lg:mt-10 lg:grid-cols-[1.12fr_0.88fr]">
          {/* left — copy on solid white */}
          <div>
            <span className="hero-kick eyebrow inline-flex items-center gap-3">
              <span className="font-display text-gold text-base">01</span>
              <span className="h-px w-8 bg-blue" />
              Aftermarket Engine Parts · Original Quality
            </span>

            <div className="hero-title mt-6">
              <MeshTextHover
                lines={HERO_LINES}
                className="font-display font-extrabold leading-[0.92] tracking-[-0.03em] text-[clamp(2.25rem,6vw,5rem)]"
              />
            </div>

            <p className="hero-sub mt-7 max-w-xl text-base leading-relaxed text-ink-2 sm:text-lg">
              Your reliable engineering partner around the world — precision-crafted components,
              centrifugally cast and machined to original equipment, exported to{" "}
              <span className="font-semibold text-ink">60+ countries</span> since 1958.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link href="/products" className="hero-cta btn-blue sheen">
                Explore Catalogue <Arrow />
              </Link>
              <Link href="/about" className="hero-cta btn-ghost">Our Heritage</Link>
            </div>
          </div>

          {/* right — bounded WebGL instrument viewport (WebGL stays inside this frame) */}
          <div className="hero-panel relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] border border-line bg-blue-tint shadow-[0_50px_90px_-40px_rgba(11,27,51,0.45)] sm:aspect-[5/4] lg:aspect-auto lg:h-[68vh]">
            <Wallpaper className="opacity-55" />
            {/* soft light scrim so the engine reads clearly */}
            <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(72% 62% at 50% 44%, rgba(255,255,255,0.78), rgba(255,255,255,0.15) 72%, transparent)" }} />

            {/* HUD corners */}
            <Corner className="left-4 top-4" />
            <Corner className="right-4 top-4 rotate-90" />
            <Corner className="left-4 bottom-4 -rotate-90" />
            <Corner className="right-4 bottom-4 rotate-180" />

            {/* readouts */}
            <div className="absolute left-5 top-5 z-10">
              <span className="tech-label !text-blue-deep">◦ Engine Core</span>
            </div>
            <div className="absolute right-5 top-5 z-10 text-right">
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-blue-deep/70">GTC / Live</span>
            </div>

            {/* the engine */}
            <div className="hero-engine absolute inset-0 z-10 flex items-center justify-center p-6">
              <canvas ref={canvasRef} width={960} height={540} className="h-auto w-full max-w-full drop-shadow-2xl" />
            </div>

            {/* bottom spec strip */}
            <div className="absolute inset-x-4 bottom-4 z-10 flex items-center justify-between rounded-xl border border-line/70 bg-white/70 px-4 py-2.5 backdrop-blur">
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-ink-2">Centrifugally cast · Precision honed</span>
              <span className="font-mono text-[0.62rem] font-semibold text-blue">60+ yrs</span>
            </div>
          </div>
        </div>

        {/* bottom credentials ticker on a ruler */}
        <div className="hero-cred mt-10 border-t border-line pt-4">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
            {CREDENTIALS.map((c) => (
              <span key={c} className="flex items-center gap-2 font-mono text-[0.66rem] uppercase tracking-[0.14em] text-muted">
                <Check /> {c}
              </span>
            ))}
            <span className="ml-auto hidden items-center gap-2 text-muted lg:flex">
              <span className="tech-label !text-muted">Scroll</span>
              <span className="relative h-6 w-px overflow-hidden bg-line">
                <span className="hero-scrolldot absolute left-0 top-0 h-2 w-px bg-blue" />
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

const Corner = ({ className = "" }) => (
  <span className={`pointer-events-none absolute z-10 h-5 w-5 border-l-2 border-t-2 border-blue/40 ${className}`} />
);
const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const Check = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className="text-gold">
    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
