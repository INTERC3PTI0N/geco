"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Preloader from "./Preloader";
import ContactDock from "./ContactDock";

export default function AppChrome({ children }) {
  const pathname = usePathname();
  // Preloader runs on every full page load / refresh (AppChrome only mounts on
  // hard loads, not on client-side navigation, so route changes stay instant).
  const [showPre, setShowPre] = useState(true);
  const [done, setDone] = useState(false);

  // Recalculate scroll triggers / scroll to top on route change
  useEffect(() => {
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname]);

  const finish = () => {
    setDone(true);
    setShowPre(false);
  };

  return (
    <SmoothScroll>
      <AnimatePresence>{showPre && <Preloader key="pre" onComplete={finish} />}</AnimatePresence>
      <Navbar />
      <main className={done ? "" : "pointer-events-none"}>{children}</main>
      <Footer />
      <ContactDock />
    </SmoothScroll>
  );
}
