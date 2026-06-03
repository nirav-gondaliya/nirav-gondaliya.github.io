# Nirav Gondaliya — Portfolio

Single-page personal site for **Nirav Gondaliya**, Senior Full-Stack & AI-Infrastructure
Engineer. Built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- **Next.js 15** (App Router, React Server Components)
- **TypeScript**, **Tailwind CSS 3**, **Framer Motion**
- **next/font** for self-hosted Google fonts (Inter, JetBrains Mono, Instrument Serif)
- **`@vercel/og`** via `next/og` for the dynamic OG image, favicon, and Apple touch icon
- Single long scrolling page, sticky anchor nav, light + dark mode (default light)
- Performance-obsessed: lazy assets, semantic HTML, WCAG AA, keyboard nav, focus rings,
  reduced-motion respect

## Local development

```bash
npm install
npm run dev
```

The site runs at <http://localhost:3000>.

## Production build

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. On [vercel.com](https://vercel.com), **Add New Project** → import the repo.
3. Vercel auto-detects Next.js — no settings to change. Hit **Deploy**.
4. Add your custom domain (`niravgondaliya.dev`) under **Project → Settings → Domains**.
5. The canonical `SITE_URL` in `app/layout.tsx` and the sitemap/robots URLs in
   `app/sitemap.ts` and `app/robots.ts` are already set to `https://niravgondaliya.dev`.
   GitHub Pages reads `public/CNAME` (which contains `niravgondaliya.dev`) to serve
   the static export from the custom domain.

That's it. No environment variables required.

## Project structure

```
app/
  layout.tsx            # root layout, metadata, OG/Twitter cards, fonts, theme bootstrap
  page.tsx              # composes the long-scroll page
  globals.css           # CSS variables, theme tokens, scribble + dotted SVG utilities
  icon.tsx              # 32×32 favicon (dynamic)
  apple-icon.tsx        # 180×180 Apple touch icon (dynamic)
  opengraph-image.tsx   # 1200×630 OG image (dynamic)
  twitter-image.tsx     # re-exports OG for Twitter
  robots.ts / sitemap.ts
components/
  nav.tsx               # sticky nav + light/dark toggle + mobile menu
  footer.tsx
  theme-provider.tsx    # localStorage-backed light/dark
  section.tsx, tag.tsx, status-badge.tsx, motion-in.tsx
  sections/
    hero.tsx, about.tsx, experience.tsx, projects.tsx, tools.tsx,
    open-source.tsx, mentoring.tsx, clients.tsx, looking-for.tsx, contact.tsx
lib/
  data.ts               # all copy: featured projects, more tools, experience timeline
```

## Editing content

Everything user-visible lives in `lib/data.ts` and the section components under
`components/sections/`. Update `FEATURED_PROJECTS`, `MORE_TOOLS`, or `EXPERIENCE` and the
page rebuilds itself.

GitHub repo links are resolved against `https://github.com/nirav-gondaliya`. Where a project has
no public repo, links fall back to the profile.

## Accessibility & performance notes

- Semantic landmarks: `<header>`, `<main>`, `<footer>`, `<section>` with `aria-label`
- Skip-to-content link
- Visible focus ring (`*:focus-visible`)
- All decorative SVGs marked `aria-hidden`
- `prefers-reduced-motion` honored by `motion-in.tsx` and global CSS
- Fonts loaded via `next/font` with `display: swap` — no FOUT/FOIT layout shift
- No external image hosts, no client-side analytics by default

## License

Source code: MIT. Copy and content: © Nirav Gondaliya.
