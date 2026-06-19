"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { MARQUEE } from "@/lib/content";

export default function Marquee() {
  const track = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(track.current, { xPercent: -50, ease: "none", duration: 30, repeat: -1 });
    });
    return () => ctx.revert();
  }, []);
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <div className="overflow-hidden border-y border-line bg-bg-2 py-5">
      <div ref={track} className="marquee-track">
        {items.map((it, i) => (
          <span key={i} className="flex items-center">
            <span className="font-display px-7 text-xl font-medium text-ink-2/70 sm:text-2xl">{it}</span>
            <span className="text-gold">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
