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

## Wiring a simulator module into the live course
Each simulator module (`module-<n>.html`) is a standalone static file with zero framework
dependency, but it must still act like part of the real course:
- Render it via `ComputerModuleSimulator({moduleNumber, title})`
  (`src/components/academy/computer-module-simulator.tsx`) — a full-viewport iframe. The
  `/academy/courses/<course>/learn/*` route already hides the site header/footer (see
  `isLearningWorkspace` in `site-header.tsx`/`site-footer.tsx`), so it renders edge-to-edge
  with no extra chrome, no layout changes needed.
- In `src/app/academy/[[...slug]]/page.tsx`, add the module's `moduleId` to the
  `computerSimulatorModules` map — one entry covers every lesson slug tagged with that
  moduleId. Leave the underlying `computerRebuildLessons`/`computerRebuildModules` data
  untouched; the course page, onboarding, and checkpoint/exam sequencing all key off that
  array by `moduleId`/`order`, and intercepting at the dispatch layer means none of that
  math needs to change.
- Inside the simulator file itself: persist `S` (progress state) to a dedicated
  `localStorage` key (`jamezzi:computer:essentials:module<n>-sim-state`) so reloading
  resumes instead of resetting; once every lesson is done, write that module's real lesson
  slugs into the site's shared completed-lessons key
  (`jamezzi:computer:essentials:completed`, same array-of-slugs format
  `src/lib/course-progress.ts` uses) and dispatch `jamezzi:course-progress-changed` on
  `window.parent` (same-origin iframes share localStorage automatically, but a
  `dispatchEvent` only reaches listeners on the window it's called on — cross-frame it must
  go through `window.parent`) — this is what makes the course page/resume card correctly
  show the module done. Make the brand-mark logo a real link back to the course, and inject
  a "Continue to Module N+1" link on completion, both `target="_top"` so they escape the
  iframe. Make every *other* module's sidebar row a real `target="_top"` link to that
  module's first lesson slug in the live course (whichever system currently serves it) —
  never leave it a dead click.
- A module already wired this way needs **no changes** when a *different* module gets its
  own simulator later — Module 1's "Continue to Module 2" link and sidebar row already
  pointed at Module 2's real lesson slug; once that slug started resolving to a simulator
  instead of a text lesson, the existing link just worked.
- Verify a target module's "first lesson" slug against its lessons' actual `order` field in
  `src/content/computer-rebuild/lessons.ts` before wiring `MODULE_FIRST_LESSON` — don't just
  grep for the first `moduleId: "mN"` match, since lesson ids aren't always in visual/`order`
  sequence (`m6-l0a`/`m6-l0b`/`m6-l1` are `order: 1/2/3`, i.e. `m6-l1` is the *third* lesson,
  not the first). Modules 1-5 all shipped with Module 6's entry pointing at `m6-l1`
  ("Connect to Wi-Fi Safely") instead of `m6-l0a` ("What Is the Internet?"), silently
  skipping two lessons for any learner who jumped into Module 6 from an earlier module's
  sidebar or continue button — caught only when actually building Module 6 and cross-
  checking its lessons against the brief. Fixed retroactively across all five files when found.

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
  Module 2's traps (module-2.html) all come straight from the approved brief's own named
  misconceptions rather than being invented fresh: 2.1 mashing the power button mid-boot
  (decoy node, same pattern as 1.3); 2.2 an "Open the Case" button that's always wrong,
  no correct counterpart needed since the brief flatly prohibits it; 2.3 the "CPU is a brain"
  oversimplification as a binary choice (both answers give a response, but only one is
  praised — a trap doesn't require the wrong answer to look plausible-correct, just common);
  2.4 two traps in one lesson: an experiential one (open browser tabs until a RAM meter caps
  out red) and a follow-up quiz trap (closing an app to free RAM ≠ losing the saved file —
  RAM vs. storage permanence, the same underlying confusion as 1.4's CPU/SSD trap but from
  the opposite direction); 2.5 a unit-scale trap (1 TB mistaken for 100 GB) inside an
  otherwise-normal multiple-choice check; 2.6 the camera privacy-light misconception, wired
  as a toggle (click the camera tile to flip its light on/off) plus a binary-choice question
  about what the light means; 2.7 the "always plugged in doesn't affect battery health" myth
  as a true/false question; 2.8 two per-item traps in one sort exercise (`item.trap:{catIndex:msg}`,
  same map pattern as 1.4/1.6): Windows sorted as an "Application" (it's the OS; Microsoft
  Word is the separate application), and Chrome sorted as a "Website" (it's a browser, not
  Google or the internet itself); 2.9 a fake "Most Popular Color" row planted among real
  spec-sheet categories in an About-panel reused from 1.2's chrome — ported directly from the
  already-approved text-lesson's own trap rather than invented new.
  Module 3's traps (module-3.html) follow the same discipline: 3.1 double-clicking a link
  (single-click is enough; double-click is for opening files/apps); 3.2 Caps Lock vs. Shift
  for a single capital letter; 3.3 Backspace vs. Delete direction; 3.4 assuming Kreyòl/French
  accents need extra software (Windows keyboard settings already do it); 3.6 "closing a
  window quits the application" (closing ≠ quitting, an important distinction the brief
  names explicitly); 3.7 a pre-checked "Recommended" bloatware checkbox in an install dialog
  — the skill's own documented "Bundle trap" component pattern, its first actual use in
  built content; 3.8 Cut-then-navigate-away loses the content (why Cut is riskier than Copy
  for beginners); 3.9 dropping a file in the wrong folder by "accident," recovered via Undo;
  3.10 trying to search by screen position instead of purpose/name; 3.11 a fake "Computer
  Voice" setting planted among real toggles (same fake-row-in-a-real-list pattern as 2.9);
  3.12 sharing a screenshot without checking what's visible in it first; 3.13 "accessibility
  features are only for people with disabilities" (they help everyone).
  Two real bugs surfaced auditing Module 3 that are worth watching for in any future
  `stage.desk`-style lesson: (1) `nextBar()`'s inline-flex "Next" button only works inside
  `stage.lab`'s normal document flow — dropped into a `stage.desk` scene (where everything
  else is absolutely positioned), it renders at the stage's top-left with nothing to push it
  aside, overlapping whatever desktop icon sits there. Desk-style lessons must use
  `injectNext()` (an absolutely-positioned floating button, `bottom` offset increased to
  clear the taskbar when one is present) instead — this was already established for Module 1
  but got missed when a later module's desk-style lessons were built from scratch rather than
  copied from a working desk-style lesson. (2) A lesson's `objs` array is just display
  strings — nothing enforces that every listed objective actually has a `setObj(i)` call
  wired to it somewhere. One lesson shipped with 3 stated objectives where the 3rd
  ("close a window") was never actually completable because no code path called `setObj(2)`
  and the trap UI meant to gate it was never rendered at all. After wiring a lesson, actually
  drive it to 100% via the objectives list, not just by triggering the interactions that feel
  central — if an objective's checkbox won't tick, the lesson can never be marked done.
  Module 4's traps (module-4.html) again pull straight from the brief's own named
  misconceptions: 4.1 assuming renaming a file's extension in its name (.docx -> .pdf)
  actually converts its content (it doesn't — same underlying confusion as 1.4/2.5's
  category traps, applied to file format this time); 4.2 assuming a deleted folder's
  contents survive somewhere else (they don't — deleting a folder deletes everything
  inside it); 4.3 assuming File Explorer's search box searches the whole computer from
  inside a subfolder (it defaults to the current folder + subfolders only); 4.4 the
  brief's own named "Downloads is not permanent organization" misconception, as a
  binary trap-vs-correct choice; 4.5 the brief's "final-final-2" naming problem, shown
  as an actual name chain (Rapò.docx -> ...-final-FINAL-2.docx) where the trap answer is
  guessing which one is "really" final rather than recognizing the question is
  unanswerable without clear dates/version numbers; 4.6 clicking Save (instead of Save
  As) when the intent was to preserve the original — the risk is framed as a scenario
  question, not a live overwrite, since this lesson's Save button doesn't hold separate
  document state; 4.7 renaming a file and stripping its extension by accident, breaking
  the file-to-app association; 4.8 the brief's "USB drives/cloud don't always have a
  Recycle Bin" caution, as a true/false question distinct from the local-disk delete/
  restore flow it follows; 4.9 panicking after a few seconds of fruitless searching
  instead of working through the name/type/date/recent-files sequence; 4.10 a sort
  exercise (same `item.ans` category-map pattern as 1.4/1.6/2.8) with one deliberately
  uncategorizable item — an .exe installer — where choosing ANY category triggers the
  same safety-awareness trap message instead of a correct/incorrect judgment, since the
  point is recognizing "this needs caution," not sorting it correctly; 4.11 a decoy
  "You-Won-a-Prize.zip" archive planted next to the real compress/extract exercise
  (same fake-row-among-real-rows pattern as 2.9/3.11), teaching not to open unknown
  archives; 4.12 the brief's USB malware-awareness caution — finding an unknown drive on
  the ground and being tempted to plug it in immediately, as a binary trap-vs-correct
  choice following the normal connect/copy/eject flow. Lesson 4.13 (module mission) has
  no trap of its own — it's a 6-step checklist matching the brief's mission spec
  verbatim (extract a ZIP, build a folder system, rename files, move them, restore one
  deleted file, find another via search), each step wired to its own `setObj(i)` on click.
  Module 5's traps (module-5.html) again pull from the brief's own named points: 5.1
  mistaking a website (Facebook.com) for an installed application — the same installed-
  vs-not confusion the brief flags, as a binary trap; 5.2 a decoy giant green "DOWNLOAD
  NOW!!!" ad button planted next to the real, smaller download link (same fake-row-among-
  real-rows discipline as 2.9/3.11/4.11, applied to a full-width button instead of a list
  row); 5.3 the skill's own "Bundle trap" component (pre-checked "Recommended" checkbox
  in an install dialog) — first established in Module 3, reused verbatim here rather than
  reinvented, this time gating an actual objective (`setObj` only fires once the box is
  unchecked before continuing, not merely once the dialog is seen); 5.4 two related but
  separate brief points wired as two different actions: updating (its own objective) vs.
  deleting a Desktop shortcut icon mistaken for uninstalling (the trap — the app is still
  installed and still using space) vs. the real Uninstall-in-Settings action (correct,
  also notes that files created with an app survive its removal); 5.5 closing a document
  without saving a *second* round of edits made after the last Save — deliberately tracked
  with an `editedAgain` flag so the trap only fires when there's genuinely unsaved work,
  not on every close; 5.6 assuming a PDF can be edited as freely as a Word document (it's
  fixed-layout by design); 5.7 checking "Always use this app" in an Open With flow when
  the intent was only a one-time open — the trap isn't a wrong click, it's an unexamined
  checkbox silently changing the default for every file of that type going forward (same
  danger shape as 5.3's bundle checkbox, applied to file associations instead of bundled
  software); 5.8 a permission-mismatch trap: a Calculator app requesting Camera and
  Location access, which no calculator function could ever justify — reusing the toggle-
  row component from Module 3's settings lesson, now applied to a permissions panel.
  Module 6's traps (module-6.html) again pull from the brief's own named points: 6.1
  mistaking a company/app (Facebook, Google) for the internet itself, rather than a
  service that merely uses it; 6.2 assuming modem and router are always two separate
  physical boxes — the brief explicitly calls out combined modem/router awareness, so
  the "trap" here is the overly-rigid assumption, not the combined-device fact itself;
  6.3 a decoy open, password-less "Free_Public_WiFi" network planted next to two
  password-protected ones (same fake-row-among-real-rows pattern as 2.9/3.11/4.11/5.2,
  applied to a Wi-Fi network list); 6.4 leaving a phone hotspot on indefinitely after
  finishing, instead of turning it off (battery + exposure reasons the brief names
  directly); 6.5 the brief's own distinction between signal strength and actual speed —
  full signal bars don't guarantee fast speed, since congestion and other factors matter
  too; 6.6 reaching straight for restarting/unplugging the router instead of working
  through the brief's own calm troubleshooting sequence (other sites, other devices,
  reconnect, then escalate) — same discipline as 4.9's search sequence and the explicit
  "ask permission before touching equipment that isn't yours" addition the brief implies;
  6.7 uploading an ID photo to an unfamiliar site "verifying" an account — a phishing-
  adjacent trap that previews the domain-spoofing awareness Module 6 also teaches in 6.8;
  6.8 a fake-domain trap using a real component, not a decoy row: scanning a QR code
  reveals its destination is `paypal-secure-login.xyz`, not `paypal.com` — deliberately
  named to be readable as suspicious once printed out, teaching learners to always read
  a QR/link's actual destination rather than trusting the code by default.
  Module 7's traps (module-7.html) again pull from the brief's own named points: 7.1
  mistaking Google (search engine) for a browser like Chrome/Edge; 7.2 a fake in-page
  "Search here to save big..." box styled as a link, planted below the real address bar
  (same fake-row-among-real-rows discipline as 2.9/3.11/4.11/5.2/6.3, applied to a
  spoofed search box instead of a list row or button); 7.3 assuming the fix for "too many
  tabs, can't find the one I want" is closing the browser entirely and starting over,
  instead of scanning the tab list or closing only what's no longer needed — note this
  lesson's trap Q is deliberately NOT gated by an objective (the 2 tracked objectives are
  open/switch/close and reopen-a-closed-tab; the too-many-tabs trap is supplementary
  pedagogy layered on top, still worth teaching even though the brief's own lesson
  content doesn't name it as a checkable skill); 7.4 the brief's own explicit caution
  against typing a full sensitive personal question (e.g. an ID number) directly into a
  search engine, since search queries can be logged/visible to other device users; 7.5 a
  "Sponsored" top result vs. an organically-ranked, well-sourced result below it — paid
  placement isn't a trust signal, matching the brief's explicit "sponsored result"
  callout; 7.6 the brief's own bookmarks-vs-history distinction: clearing browsing
  history does NOT delete bookmarks, since they're two separate systems (automatic log
  vs. intentionally-saved pages); 7.7 reusing the fake-download-button pattern from 5.2,
  now in the browser's own download-manager context rather than an external download
  page; 7.8 the brief's biggest named misconception for this lesson — private browsing
  does NOT make you invisible online; it only skips saving history/cookies locally, while
  websites, an employer (on a work computer), or the internet provider can still see
  activity; 7.9 leaving an account signed in on a shared/public computer for
  convenience instead of always signing out — the brief's explicit "saved passwords
  caution" and shared-computer guidance.
  Module 8's traps (module-8.html) again pull from the brief's own named points: 8.1
  mixing up the "To" and "From" fields (a beginner staple); 8.2 sharing an email
  password with a friend "to help," even though the brief explicitly says avoid sharing
  credentials — no exception carved out for trusted people; 8.3 assuming every email in
  Spam is definitely a scam, when spam filters can misfire and misfile a legitimate
  message; 8.4 a vague subject line ("Hello"/"Question") that tells the recipient
  nothing, vs. a precise one; 8.5 the brief's own named "avoid Reply All mistakes" —
  clicking Reply All when only the sender needed to see the response; 8.6 a genuinely
  time-based trap (not just a wrong-answer button): clicking Send while the attachment's
  upload progress bar is still under 100% is blocked from completing the objective, and
  the AI assistant explains why, with the actual live percentage interpolated into the
  message — verified by testing both paths (send while `pct<100` blocks completion with
  no objectives set; send once `pct===100` completes both). This is the first lesson in
  the whole series whose trap is gated by real async state (a `setInterval` progress
  tick) rather than a pre-scripted branch choice; 8.7 clicking a "you won a prize" link
  embedded in what looks like a legitimate marketing email instead of using the real
  "Unsubscribe" button — the brief's explicit distinction between unsubscribing from
  legitimate marketing (safe, expected) vs. clicking suspicious in-body links (risky) on
  what might still be a spoofed sender; 8.8 the central lesson of the whole module: an
  urgent-toned scam email (fake urgency, mismatched sender domain, a suspicious link) —
  the correct response is verifying through another channel entirely (official phone
  number, known site), never through a link the email itself provides; 8.9 joining a
  video call without first checking background/mute state in a noisy or private setting.
  Module 9's traps (module-9.html) pull directly from the brief's own core distinctions:
  9.1 assuming a cloud file is reachable with no internet at all; 9.2 the module's
  namesake misconception, made LIVE rather than just asked as a question — deleting a
  file that's synced with the cloud is demonstrated to delete it in both places (sync
  reproduces changes, including deletions), not just described in a trap-question
  feedback string; 9.3 the same offline-access limit as 9.1, reinforced in the
  upload/download context; 9.4 a public share link marked "anyone can edit" on a
  sensitive folder — the brief's own viewer-vs-editor and public-link-risk points; 9.5
  the brief's explicit "multiple-copy rule" — one copy on one device is NOT a backup,
  no matter how important the file; 9.6 reaching for email/WhatsApp to move a large or
  sensitive file just because it's convenient, when the brief explicitly limits those
  channels to small, non-sensitive files; 9.7 replacing a photo's only copy when editing
  it (crop/filter) instead of preserving the original — mirrors 9.5's multiple-copy
  discipline applied to photos specifically; 9.8 the module's most consequential trap:
  a "Windows System Files" storage category sized deceptively large (45GB, styled in
  `--danger` red) planted among genuinely safe-to-clean categories (Downloads,
  duplicates, old installers) — clicking it fires a hard warning instead of a "cleaned!"
  confirmation, since the brief explicitly says never delete unknown system files. Unlike
  earlier per-module sort exercises (1.4/1.6/2.8/4.10), this trap uses a single always-
  present decoy row rather than one item embedded in a shuffled set — reachable by intent
  (clicking the biggest number promising the most space back) rather than by chance.
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
