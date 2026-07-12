# Jamezzi

The public website for **Jamezzi** — the personal brand and education platform of James
Alexandre. The site brings together his digital products, portfolio, practical guides,
courses, books, and occasional in-person seminars, and points visitors toward Jamezzi Academy.

Full product/design spec: [`docs/JAMEZZI_HOMEPAGE_SPEC.md`](docs/JAMEZZI_HOMEPAGE_SPEC.md).

## Current milestone

**Homepage foundation** (branch `build/homepage-foundation`) — the production project
foundation, public header/navigation, homepage, footer, responsive behavior, an EN/FR/HT
language-switcher shell, and motion/reduced-motion states.

Out of scope for this milestone: full Portfolio, Guides, About, Academy, authentication,
checkout, dashboard, and case-study pages. Those routes currently render a minimal
"coming soon" placeholder so nothing on the homepage links to a broken page.

## Stack

- [Next.js](https://nextjs.org) (App Router, Turbopack)
- TypeScript in strict mode
- Tailwind CSS v4 (CSS-first `@theme` config)
- pnpm
- ESLint + Prettier
- Vitest + React Testing Library + jest-axe

## Typography

Both typefaces are self-hosted as variable WOFF2 files under `src/fonts/` (no external font
requests):

- **Newsreader** — the hero headline and intentionally selected editorial statements only
  (e.g. the About James headline). Loaded via `src/fonts/index.ts` as `--font-newsreader`.
- **DM Sans** — navigation, standard section headings, body copy, buttons, forms, and all
  other UI. Loaded as `--font-dm-sans`.

The full responsive type scale is defined as semantic Tailwind utilities in
`src/styles/typography.css` (`text-hero-headline`, `text-editorial-headline`,
`text-section-headline`, `text-feature-headline`, `text-card-title`, `text-body`, etc.),
matching the mobile/tablet/desktop steps in the spec.

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

| Command             | Description                            |
| ------------------- | -------------------------------------- |
| `pnpm dev`          | Start the local dev server (Turbopack) |
| `pnpm build`        | Production build                       |
| `pnpm start`        | Serve the production build             |
| `pnpm lint`         | ESLint                                 |
| `pnpm typecheck`    | `tsc --noEmit`                         |
| `pnpm test`         | Run the Vitest suite once              |
| `pnpm format`       | Format the codebase with Prettier      |
| `pnpm format:check` | Check formatting without writing       |

## Testing

Unit/component tests (Vitest + React Testing Library) cover navigation, the language
switcher, the footer, and the homepage's structured content. An axe (`jest-axe`) sweep runs
across the header, homepage, and footer to catch accessibility regressions. Test files sit
next to the code they cover (`*.test.ts` / `*.test.tsx`).

## Project structure

```
docs/                       Product/design spec and implementation prompt
src/
  app/                       Routes (App Router). Out-of-scope pages render <ComingSoon/>
  components/
    home/                    Homepage sections (Hero, Selected Work, About, Academy, Guides, CTA)
    layout/                  Header, footer, mobile nav, language switcher
    ui/                      Small shared primitives (Container, CtaLink, icons)
  content/                   Typed structured data (nav, footer, products, guides, locales)
  fonts/                     Self-hosted Newsreader + DM Sans (variable WOFF2) and loader
  lib/                       Small utilities and hooks (cn, motion tokens, reduced motion, etc.)
  styles/                    Design tokens, type scale, and motion CSS
  types/                     Shared content types
  test/                      Vitest setup
```

## Design tokens

Colors, radii, shadows, motion timings/easing, and breakpoints are centralized in
`src/styles/tokens.css` via Tailwind v4's `@theme` block, so every component consumes the
same palette and scale rather than one-off values.

## Product placeholders

Nichr, Endize, and clienIQ don't have final screenshots yet, so their showcases use
clearly-scoped local placeholder compositions (score tracks, tag chips, a radar chart) that
match the required information architecture and can be swapped for real screenshots without
changing any surrounding layout.
