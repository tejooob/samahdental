# Samah Dental Care — Website

Marketing site for **Samah Dental Care**, a specialist dental clinic in Charai, Thane (W), operated by Dr. Dikshit Solanki (MDS, Conservative Dentistry & Endodontics) and Dr. Riddhi Solanki (MDS, Prosthodontics, Crown & Bridge & Implantology).

Built with **Next.js (App Router)** as a fully static site (SSG). Warm, luxury, clean aesthetic.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build (static export)

```bash
npm run build    # outputs static files to ./out
```

The `out/` folder is plain static HTML/CSS/JS and can be hosted anywhere (GitHub Pages, Netlify, Vercel, S3, any static host).

## Structure

- `app/layout.tsx` — root layout, fonts (Petrona + Hanken Grotesk via `next/font`), metadata
- `app/page.tsx` — composes the page sections
- `app/globals.css` — design system + all styles (OKLCH color, fluid type)
- `components/` — one component per section; `SiteHeader`, `BookingForm`, and `ScrollReveal` are client components for interactivity
- `public/clinic-team.webp` — hero photo of the doctors

## Tech notes

- `output: 'export'` in `next.config.mjs` produces a static build.
- Responsive, with reduced-motion support and touch/safe-area handling.
- The appointment form is a front-end demo only; it does not store or send submissions.
