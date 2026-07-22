import Link from "next/link";
import Logo from "./Logo";
import { NAV, CONTACT, COMPANY, PRODUCTS } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg-2">
      <div className="section-pad maxw py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              {COMPANY.legal} — aftermarket engine parts in original quality. Exporting engineering
              excellence since {COMPANY.since}.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="chip">ISO 9001:2015</span>
              <span className="chip chip-gold">Star Export House</span>
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Navigate</div>
            <ul className="mt-5 space-y-3">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-sm text-ink-2 transition-colors hover:text-blue">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Catalogue</div>
            <ul className="mt-5 space-y-3">
              {PRODUCTS.slice(0, 6).map((p) => (
                <li key={p.slug}>
                  <Link href={`/products/${p.slug}`} className="text-sm text-ink-2 transition-colors hover:text-blue">
                    {p.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/products" className="text-sm font-semibold text-blue hover:text-blue-deep">
                  All products →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Contact</div>
            <ul className="mt-5 space-y-3 text-sm text-ink-2">
              <li>
                <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-blue">
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT.phone.replace(/[^+\d]/g, "")}`} className="transition-colors hover:text-blue">
                  {CONTACT.phone} ({CONTACT.phoneNote})
                </a>
              </li>
              <li className="max-w-xs text-muted">{CONTACT.address}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="section-pad maxw flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted sm:flex-row">
          <span>© {new Date().getFullYear()} {COMPANY.legal}. All rights reserved.</span>
          <span>Powered By <a href="https://techlinque.com/">TLQ</a></span>
          <span>Aftermarket Engine Parts in Original Quality · Since {COMPANY.since}</span>
        </div>
      </div>
    </footer>
  );
}
