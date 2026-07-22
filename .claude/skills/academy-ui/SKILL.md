---
name: academy-ui
description: >
  Build interactive, browser-based Computer Science lessons for the "Computer &
  Internet Essentials" academy. Use whenever creating or editing an Academy lesson,
  simulator, or OS-fidelity UI (Windows/macOS/Linux/ChromeOS mini-apps): file explorers,
  settings panels, uninstallers, browsers, mail clients, OS-comparison thumbnails, etc.
  Enforces the shared design system, component kit, trap+feedback pedagogy, and
  EN/FR/HT localization so every lesson looks and behaves consistently.
---

# Academy UI — lesson build skill

Produce **functional interactive simulators**, never textbook chapters. Each lesson is a
self-contained HTML file (hand-written CSS + vanilla JS, no framework) that renders a
photoreal operating-system surface the learner actually operates. Files live at
`public/academy/<course-slug>/module-<n>.html`, served statically by Next.js.

Full worked reference builds (real markup, not excerpts) live in `references/`:
`full-desktop-reference.html` (Windows desktop + taskbar + file-manager window),
`component-reference.html` (Windows Settings window chrome), `linux-file-manager-reference.html`
(GNOME/GTK file manager). Open and match these — don't reinvent chrome ad hoc.

## Order of work (always)
1. Pick the lesson's real-world task and the OS surface it lives on.
2. Build from the component kit below — never draw chrome ad hoc, and match the reference
   builds in `references/` for anything they already cover.
3. Wire the engine: I18N object -> objective state machine -> trap/feedback logic -> reset.
4. Verify in the browser at both a real desktop width (1440-1600px — a small preview pane
   hides sizing problems, see "Scaling to real screens" below) and phone width (~390px).
5. Screenshot every OS-chrome or wallpaper element before calling it done — code-level
   reasoning about gradients, crops, or icon choice does not reliably predict how it renders.

## Design tokens (rebrand = edit only these)
Dark Academy shell: `--brand:#4f46e5` `--brand2:#3f37c9` `--brand-rgb:79,70,229` — verified
exact match to the live site's `--color-indigo`/`--color-indigo-dark` in `src/styles/tokens.css`;
use these precise values, not an approximation. `--ink-900:#0b0f17` `--ink-700:#151b28`
`--edge:#232c3d` `--text:#e7edf6` `--dim:#9aa6b8`. Semantic: `--good:#22c55e` `--warn:#e8a13a`
`--danger:#c42b1c`.
Windows-surface (Fluent light, used INSIDE the sim): `--w-accent:#005FB8` `--w-mica:#f3f3f3`
`--w-content:#fbfbfb` `--w-stroke:#e5e5e5` `--w-t1:#1b1b1b` `--w-t2:#5c5c5c` radius `8px`.
Linux-surface (GTK/GNOME, when a lesson's OS is Linux): `--gtk-bg:#fafafa` `--gtk-sidebar:#ebebeb`
`--gtk-stroke:#d6d6d6` `--gtk-accent:#3584e4` `--gtk-t1:#1e1e1e` `--gtk-t2:#6e6e6e`.
macOS-surface: light `#ecedf1` windows, traffic-light buttons `#ff5f57`/`#febc2e`/`#28c840`, Dock,
menu bar.
Motion: fast 140ms, base 200ms, ease `cubic-bezier(.2,.8,.2,1)`; window open = translateY(8px)+
scale(.98); toast = slide-in-x 320ms; row-remove = collapse 340ms.
**Never** use OS-surface colors (Fluent blue, GTK blue) for Academy-brand elements (HUD, progress
bar, course pin, notes cards) — those always use `--brand`/`--brand2`. **Never** use `--brand`
inside the simulated OS surface — that breaks the fiction that it's a real, unbranded OS.

## Typography
Simulator surfaces: `'Segoe UI Variable Text','Segoe UI',system-ui` (Windows) or
`'Cantarell','Inter',system-ui` (Linux/GTK) — native OS face only. Academy chrome: `Inter`.
Never mix within one surface. Scale: Display 26/600 (pane titles), Body 14/400 (list items),
Caption 12/400 (metadata), Overline 11/700 uppercase (HUD labels). Hard floor: nothing under
12px anywhere, on any screen size — check the *computed* font-size, not the CSS declaration.

## Iconography — real open-source icon sets ONLY, never hand-drawn paths
Pull every UI glyph from Lucide (lucide.dev, ISC license, free commercial use): fetch real path
data from `https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/<name>.svg`, or copy
paths from the reference builds in `references/`, which already contain real Lucide path data for
folder/file-text/image/archive/house/hard-drive/usb/star/download/monitor/search/grid, etc. —
**never invent icon paths from description.** If Lucide has no match (a two-tone folder-with-page,
a metallic recycle bin), compose it from multiple real primitive shapes + a 2-stop gradient (see
"rich desktop icons" in `full-desktop-reference.html`) rather than drawing a new path by hand.
App tiles: 32px, 8px radius, brand-gradient rect + white glyph. System glyphs inside the OS
surface: Lucide default (1.6–2px stroke, currentColor).
Desktop icons (This PC, Documents, Recycle Bin, Trash, Home): richer multi-shape/gradient
treatment, NOT a single-stroke line icon in a white card — see `full-desktop-reference.html`.
No card/badge background behind desktop icons; the icon sits directly on the wallpaper with
`filter: drop-shadow(0 2px 3px rgba(0,0,0,.35))` for legibility.

**Plain colored shapes (a circle, a rect) are not icons** and read as cheap/unfinished even when
color-coded consistently — every icon-shaped thing in a lesson (Start-menu pinned apps, sort/quiz
chips, anything the learner needs to recognize as "an app") needs a real Lucide glyph, not a
solid-fill placeholder. A reusable pattern: keep raw Lucide path data in one `LI{}` object, then a
`tileIcon(bg, name, mode)` helper that wraps a glyph in a colored rounded-rect tile (`mode:"fill"`
for filled icons like `grid`/`folder`, default stroke mode for outline icons like `monitor`/`mail`).
Define `LI`/`liIcon`/`tileIcon` (functions and the `const LI` object they read) *before* any
`const` object that calls `tileIcon()` at definition time — function declarations are hoisted, but
`const` bindings are not initialized until their own line executes, so calling `tileIcon()` from an
object literal that textually precedes `const LI` throws at load.

This is the rule for **small UI glyphs** — Start-menu app icons, sort/quiz chips, anything under
~40px where a real Lucide icon reads cleanly: coded markup, not a generated image, both because
it's trademark-safe by construction and because a photo is noise at that size.

**Whole-desktop OS-comparison thumbnails are a different case, decided the opposite way.** A first
attempt at building Windows/macOS/ChromeOS mini-desktops as coded HTML/CSS (taskbar div + Lucide
icons + CSS gradient wallpaper) was trademark-safe but AJ's verdict was that it "does not look like
them in reality" — coded chrome at this larger scale reads as flat/schematic, not like an actual
screenshot, and the whole point of the exercise is teaching visual recognition of the real thing.
Whole-desktop shots are now AI-generated (see "Generating real device photos" below), with the
same trademark discipline applied to the prompt. Re-litigate this only if photoreal generated
screenshots stop being achievable without trademark leakage — don't silently revert to coded
chrome because it's easier.

Physical objects (keyboard, monitor, laptop, phone) were never in scope for Lucide icons — those
need a real photo (see below), a different problem than either of the above.

**Trademark check on any Start-button/logo-shaped glyph**: a plain 2x2 grid of squares (Lucide
`grid-2x2`/`layout-grid`) is a generic, widely-used UI motif (macOS Launchpad, Android app
drawer, etc.) and is fine for a Windows Start button in one solid color. Do not add a second
color or a specific 4-color arrangement that starts to specifically recreate Microsoft's actual
flag mark — one glyph, one color, generic shape.

## Wallpaper / organic backgrounds — never flat CSS gradients or blurred div "blobs"
Flat linear/radial-gradient divs (even blurred, even layered with blend-modes) read as
AI-generated. Use the real technique from `full-desktop-reference.html`: an SVG `<filter>` chain
with `feTurbulence` (fractalNoise, low baseFrequency ~0.006–0.01) + `feDisplacementMap` (scale
250–350) to physically warp 3–5 stacked gradient layers (screen/multiply blend), then a separate
fine-grain `feTurbulence` pass (baseFrequency ~0.85, low opacity, applied last, unwarped) over the
whole thing. Screenshot-verify before considering a wallpaper done — "too dark" or "warp too
subtle to read" is not visible from code alone.

## Generating real device photos
For physical objects (keyboard, monitor, CPU, laptop, phone — anything that should look like a
real object rather than a UI glyph), a working `GEMINI_API_KEY` lives in `.env.local` (see project
memory `reference_gemini_api_key`). Use `gemini-2.5-flash-image` via `generateContent`:

```
curl -s -X POST "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent?key=$GEMINI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"contents":[{"parts":[{"text":"<prompt>, isolated on a plain white background, studio lighting, no other objects, no people, no logos or brand names"}]}]}'
```

The image can land in any part of the response (sometimes preceded by a text part) — search
`parts[]` for `inlineData`, don't assume `parts[0]`. After decoding:
1. **Look at the full-size image directly before deciding it's fine.** A bounding-box/luminance
   fill-ratio metric is not reliable on its own — a soft shadow or gradient under the subject can
   inflate the measured bbox far past the subject's actual size, passing the metric while the
   photo still looks sparse in its card (this happened with a storage-drive photo: "75% fill" by
   the metric, ~15% by eye). Crop outliers so every photo in a set reads at the same visual weight.
2. Resize to ~480px wide (`sips -Z 480`) and convert to WebP (`cwebp -q 82`) — keeps each photo
   under 40KB.
3. Place behind a white rounded swatch in the dark card (`background:#fff;border-radius:10-12px`)
   so the studio-white photo background doesn't show a harsh box against dark chrome.
4. If a generated image (square) has to sit in a non-square display box, don't use
   `object-fit:cover` — it crops the vertical dimension, which can crop away the exact feature
   the image exists to show. Use `object-fit:contain` (letterboxes against the card's existing
   background) — or better, avoid the problem entirely by building OS-chrome comparisons as coded
   HTML/CSS (per this skill) instead of photos, which has no aspect-ratio mismatch to begin with.
5. **Prompting an image model for OS chrome, not just objects, drew a real trademark**: asking
   for "a laptop screen" without exclusion drew Microsoft's Windows flag logo; asking for a
   "Start button" even with "no logos" in the prompt still drew the real four-color flag on retry.
   This is exactly why coded Lucide-icon chrome (above) is the right tool for OS UI, not generated
   images — a generated image can't be instructed away from a trademark as reliably as choosing
   the icon yourself.

## Component kit (compose from these — match `references/*.html`)
- Window chrome: 8px radius, Mica title bar, min/max/close (close hover = red).
- Left nav item: 36px, hover tint, selected = subtle bg + 3px accent bar.
- List row: icon 32 · name+meta · right value · "..." (opacity 0->1 on hover) -> flyout.
- Flyout: acrylic, 8px radius, small glyphs; destructive item in `--danger`.
- Dialog: Mica, Display title, actions right-aligned; danger action = red.
- Bundle trap: pre-checked "Recommended" bloatware checkbox inside a confirm dialog.
- UAC: dark secure-desktop overlay (rgba .55), verified-publisher block, Yes/No.
- Progress: determinate accent bar animating to 100%, uses `--brand`/`--brand2` gradient.
- Toast: dark OS notification, slides in bottom-right, auto-dismiss ~4.4s.
- Academy HUD (right rail): lesson tag/title, progress bar, objective checklist
  (circle -> green check + strike-through), typing AI assistant (avatar reacts). Uses `--brand`.
- Taskbar/dock course pin: brand-gradient tile distinct from native OS icons, badge = objectives
  remaining, tooltip on hover with course name.
- OS-comparison thumbnail (e.g. "which desktop is Windows?"): build each OS's *real* signature
  layout as coded HTML/CSS at small scale — Windows: centered/left Fluent taskbar with a Start
  button, running-app icons (dot indicator under running apps), system tray + clock. macOS:
  traffic-light window controls, thin top menu bar, centered rounded Dock. ChromeOS: bottom shelf,
  circular launcher in the corner, status area (wifi/battery/clock) — ChromeOS has no direct
  reference build here; extrapolate from the Windows taskbar pattern (shelf = taskbar equivalent)
  rather than reusing GNOME/Linux chrome, since ChromeOS's shelf is visually distinct from both.
  Abstract gradients with colored dots do **not** satisfy an "identify the OS" objective — a
  learner who's never seen any OS before has no reliable cue from color/dot-position alone.

## Responsive — mandatory, not optional
Every lesson must hold together at phone width (~390px), tablet (~768px), and desktop
(~1440-1600px+). Known failure points to guard against every time:
- Fixed-px flex columns in a taskbar/toolbar — convert side columns to `width:auto` or collapse
  content below ~640px.
- A search/input pill with a fixed wide px width — collapse to icon-only below ~640px.
- A side-nav/sidebar next to a content pane — stack vertically or make the sidebar a horizontal
  scroll strip below ~640px.
- A fixed-column grid that doesn't reduce column count on narrow screens.
- **The inverse failure, just as common**: content sized only for a small preview pane looks
  tiny with huge dead space on an actual monitor. Card art for a 4-across identification grid
  should run 150-180px tall, not 100px; card labels ~17-18px, not 14px. Test at ~1600px, not just
  whatever pane you're building in.
- `repeat(auto-fit,minmax(Npx,1fr))` grids: keep N low enough that everything in the set fits on
  one row at the target width, or the last item orphans onto an empty second row.
- Any lesson with a Windows taskbar (`.taskbar`, ~46px tall, pinned to the bottom) must clear it
  with every other absolutely-positioned floating control (a "Next" button, a hint button) —
  check for `.taskbar` in the stage before choosing a `bottom` offset, and never let two floating
  controls share the same corner. The same collision can appear only on mobile: a bottom-anchored
  instruction panel that's one line on desktop can wrap to 3-4 lines at 390px, growing tall enough
  to sit under a button that shares its bottom offset. If a floating button's position is set via
  inline style (`el.style.cssText=...`), a plain class-based media-query rule can't override it —
  use `!important` in the media query, which does beat inline style specificity.
- **Check for zero responsive handling at all, not just imperfect handling.** A file can look
  fine at whatever width you built it at and have literally no `@media` query anywhere — a 3-column
  flex layout (sidebar + stage + rail) doesn't collapse on its own just because the viewport
  shrank; it will overflow horizontally with the sidebar alone wider than a phone screen. Grep the
  file for `@media` before assuming a responsive pass has ever happened, and actually resize to
  ~390px and look — don't infer it from the desktop layout being flexbox.
Add a `@media (max-width: 860px)` block (with a `max-width: 480px` block for finer adjustments if
needed) addressing the applicable failure points for every new lesson; don't assume desktop layout
scales down (or up) cleanly on its own. At minimum: stack the shell vertically, cap the sidebar to
a scrollable strip instead of full height, let the header wrap, and reduce grid column counts.

## Verification — mandatory before calling any visual work done
Use the actual browser tools available in this environment (`mcp__Claude_Browser__*`) — navigate
to the lesson at `http://localhost:3000/academy/<course>/module-<n>.html`, screenshot at both
phone (~390px) and desktop (~1440-1600px) width, and look at the screenshot. Click through every
objective and every trap via `dispatchEvent(new MouseEvent('click',{bubbles:true,cancelable:true}))`
in `javascript_tool` and confirm progress hits 100%. Fix anything that looks wrong before
reporting done — don't make AJ catch a rendering problem a screenshot would have caught first.

## Pedagogy (non-negotiable)
- Every lesson has >=1 trap: malware file, bloatware bundle, wrong-target app, or protected
  system component. Wrong moves are blocked with a specific corrective message, not just "wrong."
  A trap doesn't need new engine mechanics — it's usually one extra content entry (a decoy icon,
  an extra wrong-answer branch) wired to a *specific* message instead of the lesson's generic
  "bad" fallback. Module 1's traps (module-1.html): 1.1 a scary-looking Recycle Bin icon that's
  actually safe (fear-reduction fits this lesson's own goal better than a punished wrong answer);
  1.2 the "Accounts" nav item (plausible wrong guess while hunting for device info); 1.3 a decoy
  "Internet" node next to the real 4-step IPOS flow; 1.4 CPU-guessed-as-Storage and
  SSD-guessed-as-Processing (per-part `trap:{catIndex:msg}` map checked before falling back to
  the generic `bad` message); 1.5 "Windows is software" (pre-existing, the original template);
  1.6 Tablet/Phone size confusion, reciprocal; 1.7 macOS/ChromeOS clicked before Windows is
  identified, each with its *own* explanation of why it looks Windows-like, not one generic
  "not this one"; 1.8 a decoy "Game" desktop icon reminding the learner to stay on-mission.
  When wiring a decoy element into a loop that also counts real answers (e.g. 1.3's node-read
  counter), explicitly exclude it from the selector/counter — don't rely on it lacking a data
  attribute to silently no-op, since a shared `.forEach` over too-broad a selector will still
  attach a handler and can corrupt state with a `NaN` key.
- Every learner action is a graded objective; progress is always visible.
- Assistant gives contextual, teachable feedback per action (why, not just pass/fail).
- Include a reset control.

## Localization
All learner-facing text in one language-keyed object (`I18N`/`UI`/`C`, same shape per language),
minimum HT/FR/EN. Simulator OS chrome may stay in its native OS language (authentic);
instructions, objectives, and assistant are fully translated. A language switcher re-renders the
live lesson.

## Lesson anatomy (4 layers)
1. Shell — dark Academy frame: sidebar, module header, language switcher, reset.
2. OS canvas — the photoreal simulated desktop the learner operates.
3. HUD — objectives + progress + typing assistant.
4. Engine — I18N, objective state machine, trap/feedback logic, reset.
