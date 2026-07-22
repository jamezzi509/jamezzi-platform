---
name: marketing-tool-ui
description: >
  Build interactive, browser-based lessons for the "Dominate Digital" (Marketing & AI)
  academy that require operating a real marketing tool interface. Use whenever creating
  or editing a lesson that simulates: an AI chat/prompting tool, a Canva-style graphic
  editor, an ads campaign manager (Meta/Google/TikTok), an analytics dashboard (GA4-style),
  an email/automation builder, a landing-page builder, or a Google Business Profile panel.
  Sibling skill to academy-ui — shares its design tokens, icon-sourcing rule, responsive
  rules, and verification discipline, but simulates SaaS tool UIs instead of an OS desktop.
---

# Marketing Tool UI — lesson build skill

Produce **functional interactive tool simulators**, never screenshots or text descriptions
of a tool. Each lesson is a self-contained HTML file (hand-written CSS + vanilla JS, no
framework) that renders a photoreal marketing-tool interface the learner actually operates —
typing real prompts, dragging real layers, setting a real budget slider, reading real-looking
metrics.

## Order of work (always)
1. Pick the lesson's real task and which tool interface it happens inside (see table below).
2. Build from the component kit below — never draw chrome ad hoc.
3. Wire the engine: I18N object -> objective state machine -> trap/feedback logic -> reset.
4. **Verify with Playwright** (`/opt/pw-browsers/chromium-1194/chrome-linux/chrome`):
   screenshot at 390px (phone) and 1200px (desktop), view() both, fix anything that reads
   flat/wrong/broken before delivering. Never judge a UI as done from code alone.
5. Deliver each finished lesson immediately with present_files.

## Which tool per module (Dominate Digital)
- Mod 6 Graphic Content -> Canva-style editor
- Mod 8 AI for Marketing -> AI chat/prompt interface
- Mod 12 Google Business Profile -> GBP listing dashboard
- Mod 13 Email Marketing -> email builder + automation flow canvas
- Mod 14 Websites & Landing Pages -> block-based page builder
- Mod 15 Paid Advertising -> Ads Manager campaign builder (Meta/Google/TikTok skins)
- Mod 16 Analytics -> GA4-style metrics dashboard
- Mod 17 Marketing Automation -> CRM/workflow canvas
All other modules stay text/interactive-shell only (see academy-ui's Academy HUD pattern) —
don't force a tool simulation where there's no tool to operate.

## Design tokens (shared with academy-ui — don't fork these)
Academy shell (chrome AROUND the simulated tool): `--brand:#6D5FD8` `--brand-2:#534AB7`
`--brand-secondary:#3B6FE0` `--ink-900:#0b0f17` `--ink-700:#151b28` `--edge:#232c3d`
`--text:#e7edf6` `--text-dim:#9aa6b8`. Semantic: `--good:#22c55e` `--warn:#e8a13a`
`--danger:#c42b1c`. Never use `--brand` inside the simulated tool surface — same rule as
academy-ui: it breaks the fiction that it's a real, unbranded third-party tool.

## Tool-surface skins (used INSIDE the simulated canvas, never for Academy chrome)
- **AI chat interface**: neutral light or dark chat UI (pick one, stay consistent per
  lesson) — user bubble right-aligned, response bubble left-aligned with a small assistant
  avatar, input bar pinned bottom with a send icon. Not styled like any single named product;
  generic enough to read as "an AI chat tool" without impersonating a specific brand.
- **Meta Ads Manager skin**: `#1877F2` accent, white/light-gray canvas, left campaign-tree
  nav, card-based ad set rows.
- **Google Ads / GA4 skin**: `#4285F4`/`#34A853`/`#FBBC05`/`#EA4335` accent set used sparingly
  (never all four on one element), white canvas, left icon-rail nav, card-based metric tiles.
- **TikTok Ads skin**: near-black canvas, white text, single cyan/pink accent pair
  (`#25F4EE`/`#FE2C55`) used sparingly for actives/CTAs only.
- **Canva-style editor**: white canvas center stage, left template/elements rail, right
  properties panel, top toolbar with undo/redo/zoom — layered shapes with real drag handles.
- **Generic SaaS dashboard** (GBP, email builder, automation canvas): white/light-gray card
  UI, single brand-neutral accent (`#3B6FE0` from the secondary token is safe here since it's
  generic enough not to impersonate a specific product), left nav + main content pattern.
Reasoning: real product accent colors used narrowly (nav highlights, primary buttons) make
the simulation instantly recognizable as "that kind of tool" without needing exact pixel
reproduction of any single company's UI, and without the AI-generic-SaaS-blue-and-white
templated look that reads as fake when overused everywhere at once.

## Typography
Tool surfaces: `-apple-system, 'Segoe UI', Roboto, system-ui` — neutral modern SaaS stack
(this is what actual marketing tools use; don't reach for a display/serif face here).
Academy chrome: `Inter`. Scale: Display 22-26/600 (dashboard page titles), Body 14/400
(field labels, table rows), Caption 12/400 (metadata, helper text), Metric 28-32/700
(big dashboard numbers — analytics/ads only). Hard floor: nothing under 12px anywhere,
on any screen size — verify against computed font-size, not the CSS declaration.

## Iconography — same rule as academy-ui: real icon sets only, never hand-drawn
Pull every icon from Lucide by fetching real path data from
`https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/<name>.svg`. Never
invent icon paths from description. For chart/metric visuals, build real SVG bar/line/donut
charts from actual coordinate math (see Charts below) — never a decorative fake chart icon.

## Charts and metrics — must be real data-driven SVG, not decorative
Any analytics/ads-results visual must be an actual SVG built from a small JS data array
(bars sized by value, line points plotted by coordinates, donut arcs computed by percentage)
— not a static illustration of "a chart shape." Numbers shown as text (CTR, CPC, ROAS, CAC)
must be internally consistent with each other (e.g. CTR = clicks/impressions, actually
computed, not two unrelated invented numbers) since marketing-literate users will notice
inconsistent metrics immediately and it undermines the lesson's credibility.

## Component kit (compose from these)
- Chat bubble pair (AI lesson): user right/brand-tinted, AI left/neutral, avatar 28px,
  typing-indicator dots animation before AI response resolves.
- Prompt quality meter: inline scoring after submit (e.g. "vague / clear / excellent") tied
  to real criteria (specificity, context given, format requested) — teachable, not random.
- Campaign builder stepper: numbered steps (Objective -> Audience -> Budget -> Creative ->
  Review) with a progress rail, one step visible at a time, back/next controls.
- Audience targeting card: age range slider, location chip input, interest tag chips —
  real interactive controls, not a static screenshot of them.
- Budget slider: draggable, live-updates a projected-reach number as it moves.
- Metric tile: label (caption) + big number (Metric scale) + small trend arrow/percent.
- Layer panel (Canva lesson): draggable-order list of layers with visibility toggle icons.
- Drop zone / drag handle: real pointer-event drag on canvas elements, not just a static mock.
- Flow canvas node (automation): rounded card with icon + label, connector line to next node.
- Academy HUD (right rail): identical to academy-ui's — lesson tag/title, progress bar,
  objective checklist, typing AI assistant. Uses `--brand`, same as academy-ui.

## Responsive — mandatory, same standard as academy-ui
Every lesson must hold together at phone (~390px), tablet (~768px), desktop (~1200px+).
Specific failure points for tool UIs: a left nav + main canvas + right properties panel
(3-column layout) must collapse to a single column with tabs/accordion below ~640px; a
draggable canvas (Canva-style) needs touch-event support, not just mouse events, since a
meaningful share of learners are phone-only; wide data tables (campaign lists, analytics
rows) need horizontal scroll or a stacked-card fallback below ~640px, not shrunk-unreadable
columns. Add a `@media (max-width: 640px)` block addressing this for every new lesson.

## Verification — mandatory before delivering ANY visual work
Same as academy-ui: never judge a tool UI as done from code alone. Screenshot at 390px and
1200px with Playwright, view() both, fix anything wrong (misaligned drag handles, illegible
metric text, broken 3-column collapse) before sending.

## Pedagogy (non-negotiable, same spirit as academy-ui)
- Every lesson has >=1 trap relevant to the tool: a vague AI prompt that produces a bad
  result, an ad audience set too broad/narrow, a budget that's unrealistic for the goal, a
  misleading metric read (e.g. confusing reach with engagement). Wrong moves get a specific
  corrective message explaining why, not just "wrong."
- Every learner action is a graded objective; progress is always visible in the HUD.
- Assistant gives contextual, teachable feedback per action.
- Include a reset control.

## Localization
Same as academy-ui: one `I18N` object keyed by language (EN/FR/HT minimum). Tool-surface
chrome (button labels like "Publish", "Save Draft") may stay in the tool's implied language
(usually English, since that's realistic for these tools) — instructions, objectives, and
assistant are fully translated. A language switcher re-renders the live lesson.

## Lesson anatomy (4 layers — same shape as academy-ui)
1. Shell — dark Academy frame: sidebar, module header, language, reset.
2. Tool canvas — the photoreal simulated marketing tool the learner operates.
3. HUD — objectives + progress + typing assistant.
4. Engine — I18N, objective state machine, trap/feedback logic, reset.
