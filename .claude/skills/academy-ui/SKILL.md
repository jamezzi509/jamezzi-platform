---
name: academy-ui
description: Design and build standards for Jamezzi Academy lesson simulators (standalone HTML files under public/academy/). Use when building or editing any Academy lesson file.
---

# Academy UI — lesson build skill

Produce **functional interactive simulators**, never textbook chapters. Each lesson is a
self-contained HTML file (hand-written CSS + vanilla JS, no framework) that renders a
photoreal operating-system surface the learner actually operates. Files live at
`public/academy/<course-slug>/module-<n>.html`, served statically by Next.js.

## Order of work (always)
1. Pick the lesson's real-world task and the OS surface it lives on.
2. Build from the component kit below — never draw chrome ad hoc.
3. Wire the engine: I18N object -> objective state machine -> trap/feedback logic -> reset.
4. **Verify in the browser at a real desktop width (1440-1600px), not just a small preview
   pane.** A layout that looks fine at 800px can leave cards tiny and dead space everywhere
   at a real monitor's width — see "Scaling to real screens" below.
5. Verify every interactive path via `dispatchEvent(new MouseEvent('click',...))` in
   javascript_tool: click through every objective, every trap, confirm progress hits 100%,
   screenshot it.

## Design tokens (rebrand = edit only these)
Dark Academy shell: `--brand:#4f46e5` `--brand2:#3f37c9` `--brand-rgb:79,70,229` (Jamezzi indigo,
not generic blue) `--ink-900:#0b0f17` `--ink-700:#151b28` `--edge:#232c3d` `--text:#e7edf6`
`--dim:#9aa6b8`. Semantic: `--good:#22c55e` `--warn:#e8a13a` `--danger:#c42b1c`.
Windows-surface (Fluent light, used INSIDE the sim): `--w-accent:#005FB8` `--w-mica:#f3f3f3`
`--w-content:#fbfbfb` `--w-stroke:#e5e5e5` radius `8px`. **Never rebrand the Windows-surface
tokens to Jamezzi indigo** — the whole point is teaching recognition of the real OS. Only
Academy chrome (sidebar, HUD, badges, hotspots) gets the brand color.

## Typography
Simulator surfaces: `'Segoe UI Variable Text','Segoe UI',system-ui` (native OS face).
Academy chrome: `Inter`. Never mix within one surface.

## Iconography and photos
Original vector recreations or real generated photos ONLY — no shipped trademarked icons,
logos, or wallpapers. See "Generating real photos" below for the preferred path for physical
devices/parts; keep small (<32px) UI glyphs as simple vector icons, since a photo is noise at
that size.

**Trademark check on every generated image**: prompting an image model for "a laptop screen"
or "a Windows-style desktop" without an explicit exclusion will draw the real Microsoft flag
logo, Apple logo, etc. Always add "no logos, no brand names, no flags/symbols of any kind" to
the prompt, and inspect the result before using it.

## Generating real photos
A working `GEMINI_API_KEY` lives in `.env.local` (see project memory `reference_gemini_api_key`).
Use `gemini-2.5-flash-image` via `generateContent` for isolated product photos (devices, parts,
anything that should look like a real object rather than an icon):

```
curl -s -X POST "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent?key=$GEMINI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"contents":[{"parts":[{"text":"<prompt>, isolated on a plain white background, studio lighting, no other objects, no people, no logos or brand names"}]}]}'
```

The image can land in any part of the response (sometimes preceded by a text part) — search
`parts[]` for `inlineData`, don't assume `parts[0]`. After decoding:
1. Check the actual pixel fill ratio against the white background (some generations leave far
   more empty margin than others) and auto-crop outliers so every photo in a set reads at the
   same visual weight in its card — don't eyeball this, measure it (see git history on
   `module-1.html` for the Python/PIL approach: threshold on luminance < ~225 to find the
   subject's bounding box, pad ~40px, crop, then resize).
2. Resize to ~480px wide (`sips -Z 480`) and convert to WebP (`cwebp -q 82`) — keeps each
   photo under 40KB.
3. Place behind a white rounded swatch in the dark card (`background:#fff;border-radius:10-12px`)
   so the studio-white photo background doesn't show a harsh box against dark chrome.

## Scaling to real screens
The lesson stage is a flexible-width container, but if card art, image `max-height`, and label
`font-size` are all fixed in small px values (tuned by eye in a compact preview), the design
will look tiny and leave large dead space on an actual monitor — the container grows, the
content inside it doesn't. When sizing any identification grid, flow diagram, or icon:
- Test at ~1600px viewport width, not just whatever preview pane you're using while building.
- Card art/photo containers for a 4-across identification grid should run 150-180px tall, not
  100px. Card labels should run ~17-18px, not 14px. Scale flow-diagram icon swatches and
  device-form-factor icons the same way.
- `devgrid`-style `repeat(auto-fit,minmax(Npx,1fr))` grids: keep N low enough that all items
  in the set fit on one row at the target width, or you get an awkward orphaned last row.

## Floating controls and the taskbar
Any lesson with a Windows taskbar (`.taskbar`, 46px tall, pinned to the bottom) must clear it
with every other absolutely-positioned floating control (a "Next" button, a "not sure" hint,
etc.) — check for `.taskbar` in the stage before choosing a `bottom` offset, and never let two
floating controls share the same corner. Verify by screenshotting every lesson that has a
taskbar, not just the ones with new content.

## Component kit (compose from these)
- Window chrome: 8px radius, Mica title bar, min/max/close (close hover = red).
- Left nav item: 36px, hover tint, selected = subtle bg + 3px accent bar.
- List row: icon 32 · name+meta · right value · "..." (opacity 0->1 on hover) -> flyout.
- Bundle trap: pre-checked "Recommended" bloatware checkbox inside a confirm dialog.
- UAC: dark secure-desktop overlay (rgba .55), verified-publisher block, Yes/No.
- Academy HUD (right rail): lesson tag/title, progress bar, objective checklist
  (circle -> green check + strike-through), typing AI assistant (avatar reacts).

## Pedagogy (non-negotiable)
- Every lesson has >=1 trap: malware file, bloatware bundle, wrong-target app, or protected
  system component. Wrong moves are blocked with a specific corrective message, not just "wrong."
- Every learner action is a graded objective; progress is always visible.
- Assistant gives contextual, teachable feedback per action (why, not just pass/fail).
- Include a reset control.

## Localization
All learner-facing text in one language-keyed object (`I18N`/`UI`/`C`, same shape per
language), minimum HT/FR/EN. Simulator OS chrome may stay in its native OS language
(authentic); instructions, objectives, and assistant are fully translated. A language switcher
re-renders the live lesson.

## Lesson anatomy (4 layers)
1. Shell — dark Academy frame: sidebar, module header, language switcher, reset.
2. OS canvas — the photoreal simulated desktop the learner operates.
3. HUD — objectives + progress + typing assistant.
4. Engine — I18N, objective state machine, trap/feedback logic, reset.
