"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";

const PANELS = 6;

export default function Preloader({ onComplete }) {
  const root = useRef(null);
  const barRef = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    const counter = { v: 0 };

    const ctx = gsap.context(() => {
      // intro
      gsap.set(".pl-panel", { yPercent: 0 });
      gsap.from(".pl-mark", { yPercent: 120, opacity: 0, duration: 1, stagger: 0.09, ease: "power3.out" });
      gsap.from(".pl-scan", { scaleX: 0, duration: 1.1, ease: "power2.out" });

      const tl = gsap.timeline({
        onComplete: () => {
          // content lifts away, then panels wipe up like machined shutters
          gsap.to(".pl-mark", { yPercent: -120, opacity: 0, duration: 0.5, stagger: 0.05, ease: "power3.in" });
          gsap.to(".pl-foot", { opacity: 0, duration: 0.35 });
          gsap.to(".pl-panel", {
            yPercent: -100,
            duration: 0.9,
            ease: "power4.inOut",
            stagger: 0.06,
            delay: 0.25,
            onStart: () => (document.documentElement.style.overflow = ""),
            onComplete: () => onComplete?.(),
          });
        },
      });

      tl.to(counter, {
        v: 100,
        duration: 1.5,
        ease: "power2.inOut",
        onUpdate: () => {
          const val = Math.round(counter.v);
          setCount(val);
          if (barRef.current) barRef.current.style.transform = `scaleX(${val / 100})`;
        },
      });
    }, root);

    return () => {
      ctx.revert();
      document.documentElement.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <div ref={root} className="fixed inset-0 z-[100] overflow-hidden">
      {/* machined shutter panels */}
      <div className="absolute inset-0 flex">
        {Array.from({ length: PANELS }).map((_, i) => (
          <div key={i} className="pl-panel relative h-full flex-1 border-r border-line/60 last:border-r-0" style={{ left: 0 }} />
        ))}
      </div>

      {/* content layer */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center">
        <div className="dotgrid pointer-events-none absolute inset-0 opacity-50" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(55% 45% at 50% 45%, rgba(27,95,217,0.08), transparent 70%)" }}
        />

        <div className="relative mb-8 overflow-hidden">
          <Image
            src="/brand/60-years.webp"
            alt="Celebrating 60+ years of innovation"
            width={420}
            height={170}
            priority
            className="pl-mark h-auto w-[min(60vw,260px)] object-contain"
          />
        </div>
        <div className="relative overflow-hidden">
          <p className="pl-mark tech-label text-muted">Precision Components · Since 1958</p>
        </div>

        {/* scanning ruler line — precision instrument cue */}
        <div className="pl-scan relative mt-9 h-px w-[min(60vw,340px)] origin-center overflow-hidden bg-line">
          <span className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-blue to-transparent" />
        </div>

        {/* footer counter + machined progress */}
        <div className="pl-foot absolute bottom-14 left-1/2 w-[min(70vw,420px)] -translate-x-1/2">
          <div className="mb-3 flex items-end justify-between">
            <span className="tech-label text-muted">Calibrating</span>
            <span className="pl-digit font-display text-3xl font-semibold text-blue">{String(count).padStart(3, "0")}</span>
          </div>
          <div className="ruler mb-2 opacity-60" />
          <div className="h-[3px] w-full overflow-hidden rounded-full bg-blue-soft">
            <div
              ref={barRef}
              className="h-full origin-left rounded-full"
              style={{ transform: "scaleX(0)", background: "linear-gradient(90deg, var(--blue), var(--blue-deep))" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
