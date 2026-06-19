"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Preloader from "./Preloader";

export default function AppChrome({ children }) {
  const pathname = usePathname();
  const [showPre, setShowPre] = useState(false);
  const [done, setDone] = useState(true);

  // Preloader only on first visit of the session, and only on the home route.
  useEffect(() => {
    const seen = typeof window !== "undefined" && sessionStorage.getItem("geco_seen");
    if (!seen && window.location.pathname === "/") {
      setShowPre(true);
      setDone(false);
    }
  }, []);

  // Recalculate scroll triggers / scroll to top on route change
  useEffect(() => {
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname]);

  const finish = () => {
    sessionStorage.setItem("geco_seen", "1");
    setDone(true);
    setShowPre(false);
  };

  return (
    <SmoothScroll>
      <AnimatePresence>{showPre && <Preloader key="pre" onComplete={finish} />}</AnimatePresence>
      <Navbar />
      <main className={done ? "" : "pointer-events-none"}>{children}</main>
      <Footer />
    </SmoothScroll>
  );
}
