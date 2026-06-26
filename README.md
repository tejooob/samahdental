# Samah Dental Care — Demo Website

A single-page demo site for **Samah Dental Care**, a specialist dental clinic in Charai, Thane (W), operated by Dr. Dikshit Solanki (MDS, Conservative Dentistry & Endodontics) and Dr. Riddhi Solanki (MDS, Prosthodontics, Crown & Bridge & Implantology).

Warm, luxury, clean aesthetic. Built as a self-contained `index.html` with no build step.

## Sections

- Hero with real clinic photo
- About the clinic
- The specialists (both doctors)
- Treatments
- Why choose us
- Patient testimonials
- Contact with appointment request form

## Run locally

Open `index.html` directly in a browser, or serve it:

```bash
node serve.mjs
# then open http://localhost:5500
```

## Tech

- Plain HTML + CSS (OKLCH color, fluid `clamp()` type, CSS grid/flex)
- Fonts: Petrona + Hanken Grotesk (Google Fonts)
- Vanilla JS for nav, scroll reveals, and the demo form
- Responsive, with reduced-motion support

> Note: the appointment form is a front-end demo only and does not store or send submissions.
