"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";
import { NAV, CATEGORIES, productsByCategory } from "@/lib/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMenu(false);
  }, [pathname]);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div
        className="section-pad transition-all duration-500"
        style={{
          background: scrolled ? "rgba(255,255,255,0.82)" : "rgba(255,255,255,0)",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
        }}
      >
        <div className="maxw flex items-center justify-between" style={{ paddingTop: scrolled ? 12 : 18, paddingBottom: scrolled ? 12 : 18, transition: "all .4s" }}>
          <Logo />

          <nav className="hidden items-center gap-8 lg:flex" onMouseLeave={() => setMenu(false)}>
            {NAV.map((n) =>
              n.href === "/products" ? (
                <div key={n.href} onMouseEnter={() => setMenu(true)} className="relative">
                  <Link
                    href={n.href}
                    className={`relative text-sm font-medium transition-colors hover:text-blue ${isActive(n.href) ? "text-blue" : "text-ink-2"}`}
                  >
                    {n.label}
                  </Link>
                </div>
              ) : (
                <Link
                  key={n.href}
                  href={n.href}
                  className={`relative text-sm font-medium transition-colors hover:text-blue ${isActive(n.href) ? "text-blue" : "text-ink-2"}`}
                >
                  {n.label}
                </Link>
              )
            )}
            <Link href="/contact" className="btn-blue !px-5 !py-2.5 !text-sm">
              Get a Free Quote
            </Link>
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label="Menu"
          >
            <span className="h-0.5 w-6 rounded bg-ink transition-all" style={{ transform: open ? "translateY(6px) rotate(45deg)" : "none" }} />
            <span className="h-0.5 w-6 rounded bg-ink transition-all" style={{ opacity: open ? 0 : 1 }} />
            <span className="h-0.5 w-6 rounded bg-ink transition-all" style={{ transform: open ? "translateY(-6px) rotate(-45deg)" : "none" }} />
          </button>
        </div>

        {/* Products mega menu */}
        <AnimatePresence>
          {menu && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              onMouseEnter={() => setMenu(true)}
              onMouseLeave={() => setMenu(false)}
              className="absolute left-0 top-full hidden w-full lg:block"
            >
              <div className="section-pad">
                <div className="maxw mt-2 rounded-2xl border border-line bg-white p-6 shadow-[0_30px_60px_-30px_rgba(11,27,51,0.3)]">
                  <div className="grid grid-cols-3 gap-x-8 gap-y-6">
                    {CATEGORIES.map((c) => (
                      <div key={c.id}>
                        <div className="mb-3 flex items-center gap-2">
                          <span className="font-display text-xs font-semibold text-gold-deep">{c.no}</span>
                          <h4 className="text-sm font-semibold text-ink">{c.name}</h4>
                        </div>
                        <ul className="space-y-1.5">
                          {productsByCategory(c.id).map((p) => (
                            <li key={p.slug}>
                              <Link href={`/products/${p.slug}`} className="text-[0.82rem] text-ink-2 transition-colors hover:text-blue">
                                {p.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                    <span className="text-xs text-muted">18 product categories · made to original quality</span>
                    <Link href="/products" className="text-sm font-semibold text-blue hover:text-blue-deep">
                      View full catalogue →
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-line bg-white lg:hidden"
          >
            <div className="section-pad flex flex-col gap-1 py-6">
              {NAV.map((n) => (
                <Link key={n.href} href={n.href} className="py-3 font-display text-2xl text-ink">
                  {n.label}
                </Link>
              ))}
              <Link href="/contact" className="btn-blue mt-4 justify-center">
                Get a Free Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
