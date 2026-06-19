# GECO — Geco Trading Corporation

A modernised, motion-driven marketing site for **Geco Trading Corporation Pvt. Ltd.** —
aftermarket engine parts in original quality, exporting engineering excellence since 1958.

Rebuilt from the content of [geco-trade.com](https://geco-trade.com/) with an Awwwards-grade
sequential scroll experience.

## Stack

- **Next.js 16** (App Router) + React 19
- **Tailwind CSS v4** — design tokens for the brand palette
- **GSAP + ScrollTrigger** — preloader, scroll-pinned horizontal product gallery, parallax, counters
- **three.js + @react-three/fiber + drei** — metallic engine assembly in the hero (procedural gears + cylinder-liner ring stack, pointer-reactive, environment-lit)
- **Framer Motion** — section reveals, nav, mobile menu
- **Lenis** — smooth scrolling, synced to ScrollTrigger

## Brand palette

Pulled from the GTC logo + the "60+ years" gold mark:

| Token | Value | Use |
|-------|-------|-----|
| `--bg` | `#0a0a0c` | near-black base |
| `--steel` | `#cdd3da` | brushed-steel text/metal |
| `--gold` / `--gold-lite` | `#d4af37` / `#f4dd8c` | accent, CTAs, awards |

## Sections (sequential flow → CTA)

Preloader → Hero (3D) → Marquee → Heritage & stats → Products (pinned horizontal) →
Why Geco → Awards & 60+ years → Global footprint → Contact → Footer.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Contact backend

`POST /api/contact` validates and accepts enquiries (`app/api/contact/route.js`).
It currently logs server-side; wire in an email/CRM provider (Resend, SendGrid, etc.)
where indicated to deliver enquiries to `info@geco-trade.com`.

## Assets

Brand images/logos live in `public/brand/` (reused from the original site).
