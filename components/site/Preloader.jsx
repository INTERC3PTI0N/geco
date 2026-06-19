"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

export default function Preloader({ onComplete }) {
  const root = useRef(null);
  const barRef = useRef(null);
  const gearRef = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    const counter = { v: 0 };

    const ctx = gsap.context(() => {
      gsap.to(gearRef.current, { rotate: 360, duration: 3.5, ease: "none", repeat: -1 });
      gsap.from(".pl-word", { yPercent: 120, opacity: 0, duration: 0.9, stagger: 0.1, ease: "power3.out" });

      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(".pl-word", { yPercent: -120, opacity: 0, duration: 0.45, stagger: 0.05, ease: "power3.in" });
          gsap.to(root.current, {
            yPercent: -100,
            duration: 0.9,
            ease: "power4.inOut",
            delay: 0.2,
            onStart: () => (document.documentElement.style.overflow = ""),
            onComplete: () => onComplete?.(),
          });
        },
      });

      tl.to(counter, {
        v: 100,
        duration: 2.2,
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
    <div ref={root} className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white">
      <div className="dotgrid pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(55% 45% at 50% 45%, rgba(27,95,217,0.08), transparent 70%)" }} />

      <div ref={gearRef} className="relative mb-9">
        <Gear />
      </div>

      <div className="relative overflow-hidden text-center">
        <div className="pl-word font-display text-[13vw] font-bold leading-[0.85] tracking-tight text-ink md:text-[6.5vw]">
          GECO
        </div>
      </div>
      <div className="relative mt-2 overflow-hidden">
        <p className="pl-word text-[0.7rem] uppercase tracking-[0.42em] text-muted">Engineering Excellence · Since 1958</p>
      </div>

      <div className="absolute bottom-14 left-1/2 w-[min(70vw,420px)] -translate-x-1/2">
        <div className="mb-3 flex items-end justify-between">
          <span className="text-[0.65rem] uppercase tracking-[0.28em] text-muted">Calibrating</span>
          <span className="font-display text-2xl font-semibold text-blue tabular-nums">{count}</span>
        </div>
        <div className="h-[3px] w-full overflow-hidden rounded-full bg-blue-soft">
          <div ref={barRef} className="h-full origin-left rounded-full" style={{ transform: "scaleX(0)", background: "linear-gradient(90deg, var(--blue), var(--blue-deep))" }} />
        </div>
      </div>
    </div>
  );
}

function Gear() {
  return (
    <svg width="64" height="64" viewBox="0 0 100 100" fill="none">
      <path
        d="M50 6l5 11 12-3 2 12 12 4-6 11 8 9-10 7 2 12-12 1-4 12-10-7-10 7-4-12-12-1 2-12-10-7 8-9-6-11 12-4 2-12 12 3z"
        stroke="var(--blue)"
        strokeWidth="2"
        strokeLinejoin="round"
        opacity="0.4"
      />
      <circle cx="50" cy="50" r="16" stroke="var(--gold)" strokeWidth="2.5" />
      <circle cx="50" cy="50" r="4" fill="var(--gold)" />
    </svg>
  );
}
