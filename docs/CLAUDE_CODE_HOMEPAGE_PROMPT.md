# Claude Code Prompt — Jamezzi Homepage Milestone

You are implementing the first production milestone of Jamezzi.com in the repository `jamezzi509/jamezzi-platform`.

## Authority

Read `docs/JAMEZZI_HOMEPAGE_SPEC.md` in full before editing anything. That document contains locked product, copy, design, responsive, motion, and accessibility decisions. Treat it as the source of truth.

Do not reinterpret approved copy, reorder sections, substitute fonts, change colors, add sections, simplify the mobile art direction, or invent product claims. If the specification and this prompt appear to conflict, stop and report the conflict before proceeding.

## Milestone Boundary

Build only:

- Production-ready project foundation required for the homepage
- Public header and navigation
- Homepage
- Footer
- Responsive behavior
- Language-switcher shell for EN, FR, and HT
- Motion and reduced-motion states
- Structured content/data used by the homepage
- Essential SEO metadata for the homepage
- Tests appropriate to this milestone

Do not build full Portfolio, Guides, About, Academy, authentication, checkout, dashboard, course, book, Help Center, or case-study pages yet. Do not create fake content for unfinished routes.

## First Actions

1. Inspect the repository and report its current state.
2. Read the full homepage specification.
3. Create a branch named `build/homepage-foundation` when Git history permits it.
4. Propose the smallest appropriate technical foundation.
5. Unless the repository already establishes a different compatible stack, use:
   - Current stable Next.js with App Router
   - TypeScript in strict mode
   - Tailwind CSS
   - pnpm
   - ESLint
   - Prettier
6. Use Server Components by default. Add Client Components only for real interaction.
7. Do not add a CMS, database, authentication provider, payment library, animation framework, component library, or state-management library in this milestone unless the approved homepage demonstrably requires it.

## Implementation Requirements

### Architecture

- Keep page composition readable and component boundaries purposeful.
- Store homepage products, guides, navigation, footer links, and social links in typed structured data.
- Centralize colors, typography, spacing, radii, shadows, motion timings, and breakpoints.
- Avoid giant components, premature abstractions, and duplicated markup.
- Use semantic landmarks and logical heading order.

### Typography

- Self-host Newsreader and DM Sans using legal open-source WOFF2 files.
- Use Newsreader only where specified.
- Use DM Sans for functional and body typography.
- Implement the exact responsive scale in the specification.
- Mobile standard body copy is 17px; meaningful text never drops below 14px; form controls are at least 16px.
- Prevent font layout shift.

### Hero

- Build the hero as one integrated environment shared by navigation, typography, and original abstract artwork.
- Do not render a separate illustration beneath the hero text on mobile.
- Build the original artwork with performant CSS and/or SVG where practical.
- The artwork must use the approved field of translucent planes, construction lines, contours, indigo, violet, and restrained coral.
- Preserve warm Paper negative space behind the text.
- Do not copy Stripe artwork or source code.
- Do not add product dashboards, floating cards, laptops, or device mockups to the hero.

### Product Showcases

- Nichr is the dominant feature.
- Use focused, readable interface compositions for Nichr, Endize, and clienIQ.
- Do not shrink full dashboards into unreadable screenshots.
- Each product keeps its own visual identity.
- If final product screenshots/assets are missing, create clearly named local visual placeholders that match the required information architecture and can be replaced without changing component layout. Do not fabricate customer or performance data.

### Responsive Design

- Test at 320px, 390px, 768px, 1024px, and 1440px.
- No horizontal overflow.
- Mobile hero remains an integrated first-viewport composition.
- Product showcases use deliberate crops, not compressed desktop canvases.
- Mobile touch targets are at least 44px.
- Layout should adapt before text is reduced.

### Motion

- Follow the locked timing and easing tokens.
- Prefer transform and opacity.
- Product data animations run once and end at real values.
- Fully honor `prefers-reduced-motion`.
- No scroll hijacking, custom cursor, perpetual animation, or heavy parallax.

### Navigation

- The Jamezzi logo is the Home link; do not add a Home navigation item.
- Desktop order: Portfolio, Guides, About, Academy, language switcher, Sign In.
- Academy is visually distinguished.
- Mobile header: Jamezzi, Academy, menu trigger.
- Dropdowns and mobile navigation must be keyboard accessible, close on Escape, close outside, and restore focus appropriately.
- Language switcher uses EN, FR, HT and language names, never flags.

### Accessibility

- Target WCAG 2.2 AA.
- Provide visible focus states.
- Ensure accessible names for icon-only controls and social icons.
- Do not rely on color alone.
- Support 200% zoom and content reflow.
- Add meaningful alt text to informative product visuals; use empty alt for decorative artwork.
- Verify contrast in both light and dark sections.

### Performance

- Avoid unnecessary JavaScript.
- Optimize images and fonts.
- Reserve image dimensions to prevent layout shift.
- Keep hero artwork performant on ordinary mobile devices.
- Do not import a heavy animation library for effects achievable with CSS or a few lines of local code.

## Visual Verification

After implementation:

1. Run the development server.
2. Capture full-page screenshots at 1440px and 390px.
3. Compare them against the approved desktop and mobile mockups supplied by the owner.
4. Correct typography, spacing, composition, line breaks, contrast, and product visual scale.
5. Also inspect 320px, 768px, and 1024px for overflow and broken hierarchy.
6. Do not declare completion based only on a successful build.

## Required Validation

Run and pass:

- Type checking
- ESLint
- Production build
- Relevant automated tests
- Accessibility checks available in the local workflow
- Responsive overflow check at required widths

Fix relevant warnings and errors before reporting completion.

## Final Report

Return:

1. Summary of what was implemented
2. Final directory structure
3. Every dependency added and why
4. Every file created or modified
5. Commands run and their results
6. Screenshot paths for 1440px and 390px
7. Known gaps caused by missing final assets
8. Any deliberate deviations from the specification, with reasons
9. Commit SHA and branch name

Stop after this milestone. Do not continue into other pages without approval.
