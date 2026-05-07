# MapleX

Boutique engineering & AI consultancy — Zürich.
Vite + React + TypeScript + Tailwind CSS.

## Quick start

```bash
npm install
npm run dev          # http://localhost:5173
```

## Build & preview

```bash
npm run build        # outputs to ./dist
npm run preview      # serve the production build locally
```

## Tooling

```bash
npm run lint         # ESLint
npm run format       # Prettier
```

## Project structure

```
maplex-app/
├── public/                    # static assets served from /
│   ├── maplex-mark.svg
│   ├── dustin-becker.jpg
│   ├── llms.txt               # AI-search discoverability
│   ├── robots.txt
│   ├── sitemap.xml
│   └── logos/                 # partner logos
├── src/
│   ├── components/            # one file per page section
│   │   ├── Nav.tsx
│   │   ├── Hero.tsx
│   │   ├── Practice.tsx
│   │   ├── Partners.tsx
│   │   ├── Work.tsx
│   │   ├── Founder.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css              # Tailwind + a few base styles
├── index.html                 # JSON-LD + meta tags live here
├── tailwind.config.js         # Maplex design tokens
└── vercel.json
```

## Design system

Tokens are wired into `tailwind.config.js`:

- **Colors** — `ink` (#111418), `paper` (#FAFAF7), `accent` (#C8553D), neutral scale
- **Type** — `font-display` Fraunces, `font-sans` Inter, `font-mono` JetBrains Mono
- **Layout** — `max-w-content` (1280px), `max-w-prose` (680px)

## Contact form

The form posts to **formsubmit.co → contact@maplex.ch**. The first submission
will trigger a confirmation email from FormSubmit. After confirming, replace
your email or move to a dedicated endpoint when ready.

## SEO / AI discoverability

- Rich JSON-LD (`Organization`, `Person`, `Service` × 5, `FAQPage`) in `index.html`
- `public/llms.txt` for AI agents (ChatGPT, Perplexity, Claude)
- `public/robots.txt` + `public/sitemap.xml`
- Open Graph + Twitter card meta

## Deploy to Vercel

```bash
npm i -g vercel
vercel
```

`vercel.json` is preconfigured. Or push to GitHub and import in the Vercel dashboard.

## License

© MapleX. All rights reserved.
