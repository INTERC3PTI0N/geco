"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function Counter({ value, suffix = "", duration = 2 }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const obj = { v: 0 };
    const st = ScrollTrigger.create({
      trigger: ref.current,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          v: value,
          duration,
          ease: "power2.out",
          onUpdate: () => setDisplay(Math.round(obj.v)),
        });
      },
    });
    return () => st.kill();
  }, [value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}
