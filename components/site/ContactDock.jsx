"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import ContactForm from "./ContactForm";

/**
 * Scroll-triggered contact popup. A floating CTA appears once the user scrolls
 * past the hero; opening it slides in a panel with the same Resend-connected
 * enquiry form used in the contact section. Hidden on the /contact page itself.
 */
export default function ContactDock() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.75);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  if (pathname === "/contact") return null;

  return (
    <>
      {/* floating trigger */}
      <AnimatePresence>
        {visible && !open && (
          <motion.button
            initial={{ opacity: 0, y: 24, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            onClick={() => setOpen(true)}
            style={{ position: "fixed" }}
            className="btn-blue sheen bottom-6 right-6 z-[80] !px-6 !py-3.5 shadow-[0_18px_40px_-12px_rgba(27,95,217,0.6)]"
            aria-label="Request a quote"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            Request a Quote
          </motion.button>
        )}
      </AnimatePresence>

      {/* panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[90] flex justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.aside
              className="dock-panel relative ml-auto flex h-full w-full max-w-[460px] flex-col overflow-y-auto bg-bg px-6 py-8 sm:px-9"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 32 }}
              role="dialog"
              aria-modal="true"
              aria-label="Request a quote"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="tech-label text-muted">Direct line</span>
                  <h3 className="font-display mt-2 text-2xl font-bold leading-tight text-ink">
                    Request a quote
                  </h3>
                  <p className="mt-2 max-w-xs text-sm text-muted">
                    Tell us what you need — availability, specifications and pricing, straight to your inbox.
                  </p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line text-ink transition hover:border-blue hover:text-blue"
                  aria-label="Close"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              <div className="mt-7">
                <ContactForm compact />
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
