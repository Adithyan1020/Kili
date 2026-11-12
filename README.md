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
- `src/components/` — one component per section (Hero, WhyTrustUs, Services, Process, Destinations, Faq, Footer)
- `src/components/Faq.jsx` — FAQ content; also emits `FAQPage` structured data
- `src/index.css` — design tokens (colors, fonts, radius scale) and all section styles
- `src/fonts.js` — self-hosted fonts (only the weights in use)
- `public/` — favicon, `og-image.jpg` (1200×630 social preview), `robots.txt`, `sitemap.xml`
- `scripts/prerender.mjs` — post-build step that injects the server-rendered HTML

## Before going live

- Replace placeholder phone/address in `Footer.jsx` (also add `telephone` and `address` to the JSON-LD in `index.html`)
- Point "Book Consultation" buttons at a real booking form / WhatsApp link
- Add real Privacy Policy and Terms pages
- Update the domain (`https://www.truviq.com/`) in `index.html`, `robots.txt` and `sitemap.xml` if it differs
