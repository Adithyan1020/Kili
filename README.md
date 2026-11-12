# TRUVIQ — Immigration & Consultancy website

Single-page marketing site built with React 19 + Vite.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Local dev server with hot reload |
| `npm run build` | Production build **plus pre-render**: the app is rendered to static HTML and injected into `dist/index.html`, so search engines and social previews see the full page content |
| `npm run preview` | Serve the built `dist/` locally |
| `npm run lint` | Lint with oxlint |

Deploy the contents of `dist/`.

## Structure

- `index.html` — page `<head>`: title, meta description, Open Graph/Twitter tags, canonical URL, business JSON-LD
- `src/components/` — one component per section, in page order: Hero (split-flap headline), Destinations (departure board), Process (flight route), WhyTrustUs (`#about`: stats + testimonials), Faq, Footer (`#contact`)
- `src/data/destinations.js` — board rows (countries, visa types, processing times, documents) and the visa-type filter (the old Services copy)
- `src/data/contact.js` — WhatsApp number and email used by every "contact an agent" button
- `src/components/Faq.jsx` — FAQ content; also emits `FAQPage` structured data
- `src/index.css` — design tokens (one orange accent) and all section styles
- `src/fonts.css` — the two self-hosted font files (Manrope variable, IBM Plex Mono 500)

Animations run once, on transform/opacity only, and are skipped with `prefers-reduced-motion`. Animated start states only apply when JS runs (`html.js`), so the page is readable without JS.
- `public/` — favicon, `og-image.jpg` (1200×630 social preview), `robots.txt`, `sitemap.xml`
- `scripts/prerender.mjs` — post-build step that injects the server-rendered HTML

## Before going live

- Set the real WhatsApp number in `src/data/contact.js` (currently a placeholder)
- Check processing times and document lists in `src/data/destinations.js` (marked PLACEHOLDER)
- Replace the three PLACEHOLDER testimonials in `WhyTrustUs.jsx` with real client reviews
- Replace placeholder phone/address/hours in `Footer.jsx` (also add `telephone` and `address` to the JSON-LD in `index.html`)
- Add real Privacy Policy and Terms pages
- Update the domain (`https://www.truviq.com/`) in `index.html`, `robots.txt` and `sitemap.xml` if it differs
