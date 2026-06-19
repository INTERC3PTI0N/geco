"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { CREDENTIALS } from "@/lib/content";

const FRAME_COUNT = 157;
const pad = (n) => String(n).padStart(4, "0");
const frameSrc = (i) => `/brand/frames/frame_${pad(i + 1)}.webp`;

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

    // Preload all frames; draw frame 0 as soon as it arrives
    const frames = Array.from({ length: FRAME_COUNT }, (_, i) => {
      const img = new Image();
      img.src = frameSrc(i);
      if (i === 0) img.onload = () => drawFrame(0);
      return img;
    });

    const gsapCtx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" }, delay: 0.15 });
      tl.from(".hero-line span", { yPercent: 115, duration: 1, stagger: 0.1 })
        .from(".hero-sub", { y: 22, opacity: 0, duration: 0.8 }, "-=0.55")
        .from(".hero-cta", { y: 18, opacity: 0, duration: 0.6, stagger: 0.08 }, "-=0.45")
        .from(".hero-cred", { opacity: 0, y: 12, duration: 0.5, stagger: 0.06 }, "-=0.35");

      // GSAP scrubs a proxy value; onUpdate converts it to a frame index and
      // draws to canvas — one decoded image swap per GSAP tick, no video decoder.
      const proxy = { f: 0 };
      const scrubAnim = gsap.to(proxy, {
        f: FRAME_COUNT - 1,
        ease: "none",
        paused: true,
        onUpdate() {
          drawFrame(Math.round(proxy.f));
        },
      });

      ScrollTrigger.create({
        trigger: root.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        animation: scrubAnim,
      });
    }, root);

    return () => gsapCtx.revert();
  }, []);

  return (
    <section ref={root} className="relative flex min-h-[100svh] items-center overflow-hidden bg-bg">
      <div className="dotgrid pointer-events-none absolute inset-0 opacity-50" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(70% 60% at 78% 35%, rgba(27,95,217,0.10), transparent 60%)" }}
      />

      <div className="section-pad maxw relative z-10 grid w-full items-center gap-10 pt-28 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy */}
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="eyebrow inline-flex items-center gap-3"
          >
            <span className="h-px w-8 bg-blue" />
            Aftermarket Engine Parts · Original Quality
          </motion.span>

          <h1 className="font-display mt-6 text-[12.5vw] font-bold leading-[0.95] tracking-[-0.02em] sm:text-[8.5vw] lg:text-[5.2vw]">
            <span className="hero-line block overflow-hidden">
              <span className="block text-ink">The Possibilities</span>
            </span>
            <span className="hero-line block overflow-hidden">
              <span className="block text-gradient-blue">Are Endless</span>
            </span>
          </h1>

          <p className="hero-sub mt-7 max-w-xl text-base leading-relaxed text-ink-2 sm:text-lg">
            We are your reliable and experienced engineering partner around the world — precision-crafted
            components trusted by industry and exported to <span className="font-semibold text-ink">60+ countries</span> since 1958.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link href="/products" className="hero-cta btn-blue">
              Explore Catalogue <Arrow />
            </Link>
            <Link href="/about" className="hero-cta btn-ghost">
              Our Heritage
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3">
            {CREDENTIALS.map((c) => (
              <div key={c} className="hero-cred flex items-center gap-2 text-xs text-muted">
                <Check /> {c}
              </div>
            ))}
          </div>
        </div>

        {/* Frame-sequence canvas — floating, scroll-scrubbed */}
        <div className="flex items-center justify-end">
          <canvas
            ref={canvasRef}
            width={960}
            height={540}
            className="aspect-video h-auto w-auto max-h-[42vh] max-w-full drop-shadow-2xl lg:max-h-[72vh]"
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[0.6rem] uppercase tracking-[0.28em] text-muted">Scroll</span>
        <span className="relative h-9 w-px overflow-hidden bg-line">
          <motion.span
            className="absolute left-0 top-0 h-3 w-px bg-blue"
            animate={{ y: [0, 24, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}

const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const Check = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="text-gold">
    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
