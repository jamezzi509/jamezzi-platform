# Computer & Internet Essentials — Migration Audit

**Source of truth:** `~/Downloads/computer-internet-essentials-master-build-brief(1).md`
**Rule from the brief (Section 18, item 20):** "When this brief conflicts with an older course document, this brief wins."
**Status:** Phase 1 — Architecture & audit. No new lessons, no new images generated until this is reviewed.

This replaces the informal 17-module build we were doing (`break-the-fear-brief.md`). The new brief restructures the course to **14 modules**, adds a **Windows-or-Mac platform-choice model** (not "show all four OS tabs per lesson"), adds a real **capstone + 50-question exam + certificate + 4 confidence checkpoints**, and — critically — **explicitly excludes** several things the old build went deep on: Google Workspace mastery, Microsoft Office mastery, a per-tool AI catalog, and smartphone mastery as a standalone subject.

---

## 1. What survives, what doesn't (at a glance)

| Old module | Lessons | Verdict |
|---|---:|---|
| 1. Welcome to the Digital World | 12 | Rewrite — restructure around new Module 1, add platform-choice onboarding |
| 2. Meet Your Computer | 10 | Rewrite — old module was peripherals; new Module 2 wants internal mental model (CPU/RAM/storage/motherboard) |
| 3. Using Your Computer | 12 | Strongest match — rewrite for platform-conditional model, add 3 missing lessons |
| 4. Files & Folders | 10 | Strong match — rewrite + absorb File Explorer/Finder from old M3 |
| 5. Internet Mastery | 11 | Splits into two new modules (Wi-Fi/connection vs. browser/web-skills) |
| 6. Email Mastery | 11 | Good match — rewrite, de-brand from Gmail-specific, add video-call readiness |
| 7. Mobile Devices | 12 | **Cut as a dedicated module** — "smartphone mastery as separate subject" is explicitly excluded. Fragments move into 4 other modules; ~7 lessons cut outright |
| 8. Google Ecosystem | 11 | **Cut entirely** — "Google Workspace mastery/depth" explicitly excluded. Survives only as one recognition-level bullet |
| 9. Microsoft Essentials | 7 | **Cut entirely** — "Microsoft Office mastery" explicitly excluded; named as its own *future* course |
| 10. Internet Safety | 10 | Good match — rewrite, absorb Digital Payments as ONE lesson (not a module) |
| 11. AI for Everyone | 10 | **Cut to one lesson** — "unrelated AI tool catalogs" explicitly named for removal. Replaced by a single "Use AI as a Computer Tutor" lesson in the new Digital Independence module |

**Net: of ~116 existing lessons, roughly 40 lessons' worth of content is directly reusable (rewritten), and about 45 lessons are cut outright** (Modules 8, 9, 11 wholesale, plus most of Module 7). **Three entirely new modules must be built from zero:**

- **Module 12 — Buying and Caring for a Computer** (14 lessons, the single densest module in the brief — Intel vs. AMD, Apple Silicon generations, full used-computer inspection checklists, a buying decision sheet)
- **Module 13 — Troubleshooting and Maintenance** (11 lessons, a repeatable diagnostic loop)
- **Module 14 — Digital Independence** (9 lessons + the capstone, the AI-tutor lesson, "choose your next path")

Plus: 4 confidence checkpoints, a 50-question final exam, a certificate system, and a `Computer Needs Profile` / `Computer Buying Decision Sheet` artifact pattern that doesn't exist anywhere in the current build.

---

## 2. Lesson-by-lesson migration table

Legend: **Rewrite** (concept survives, needs restructuring for the new brief) · **Merge** (folds into a broader lesson) · **Move** (relocates to a different module, largely intact) · **Split** (becomes 2+ lessons) · **Remove** (cut, no destination in this course) · **New** (doesn't exist yet)

### Old Module 1 → New Module 1 "You Belong in the Digital World"

| Old lesson | Action | Notes |
|---|---|---|
| welcome-to-computers | Rewrite | Good tone match already |
| — | **New** | *Choose Your Learning Path* — platform-preference onboarding, doesn't exist |
| what-is-a-computer | Rewrite | New brief wants the input/processing/output/storage framing specifically |
| — | **New** | *Input, Processing, Output, and Storage* — explicit diagram lesson |
| hardware-vs-software | Rewrite | Direct match |
| desktop-vs-laptop | Merge | → "Computers Come in Different Forms" (also needs all-in-one, Chromebook — missing) |
| tablet-vs-phone | Remove | Smartphone-as-subject is out of scope |
| windows-vs-mac | Merge | → "Windows, macOS, Android, and iOS" (no brand-superiority framing) |
| android-vs-iphone | Merge | Same lesson as above |
| what-is-an-operating-system | Merge | Folds into the OS-types lesson, not standalone |
| what-is-the-internet | Move | → new Module 6, not Module 1 |
| what-is-the-cloud | Move | → new Module 9 ("Cloud, Backup, and Moving Files") |
| digital-vocabulary | Remove | Brief explicitly bans a standalone vocab-dump lesson |
| first-digital-mission | Rewrite | New version is concrete/physical (turn on computer, identify parts) |

### Old Module 2 → New Module 2 "How a Computer Works"

Old Module 2 was peripherals-focused ("things you plug in"). New Module 2 wants the internal conceptual model (power-on sequence, motherboard, CPU, RAM, storage, specs-reading). This is close to a full rebuild.

| Old lesson | Action | Notes |
|---|---|---|
| the-monitor | Remove | Reframes as part of "Graphics, Screen, Sound, Camera, and Microphone" concept lesson |
| keyboard-basics | Move | → new Module 3 "Keyboard Map" |
| mouse-and-trackpad | Move | → new Module 3 "Mouse and Trackpad Confidence" |
| webcam-and-microphone | Split | Concept half → new M2; practical/permissions half → new M10 |
| speakers-and-sound | Split | Same split as above |
| usb-and-hdmi | Move | → new Module 10 "Ports and Connectors" |
| charging-and-power-button | Split | Concept → new M2 "Battery, Charger, and Power"; troubleshooting → new M13 |
| restart-vs-shutdown | Move | → new Module 13, expand to include Sleep and Force Quit |
| external-devices | Split | Printer/scanner → new M10 (new lessons); general devices → M10 USB/external-drive lesson |
| meet-your-computer-mission | Rewrite | New "Explain Your Computer" mission is about finding OS/RAM/storage specs, not identifying physical parts |
| — | **New** | Power-on sequence, Motherboard, CPU, RAM, Reading Basic Specs — 5 lessons |

### Old Module 3 → New Module 3 "Control Your Computer"

Best-aligned module in the whole build. Needs restructuring from "4 platform tabs per lesson" to platform-conditional (Mode C: separate Windows/Mac variant lessons).

| Old lesson | Action | Notes |
|---|---|---|
| the-desktop | Split | → separate "The Windows Desktop" / "The Mac Desktop" lessons, each needing a real screenshot |
| taskbar-dock-and-start-menu | Split | Same as above |
| finder-and-file-explorer | Move | Actually belongs in new Module 4, not Module 3 |
| working-with-windows | Rewrite | → "Open, Switch, Minimize, Maximize, and Close" — add Close vs. Quit distinction |
| right-click-and-drag-drop | Rewrite | → "Drag and Drop Without Losing Things" |
| keyboard-shortcuts | Rewrite | → "Copy, Cut, Paste, Undo, and Redo" — make the Clipboard concept chain explicit |
| settings-and-personalization | Rewrite | → "Settings You Should Know" |
| sound-and-notifications | Merge | Folds into Settings lesson |
| screenshots-and-screen-recording | Rewrite | Good match, add "where captures are saved" + privacy note |
| typing-accented-characters | Rewrite | Strong existing content — keep the differentiator, redo visual |
| multi-tasking | Merge | Folds into Open/Switch/Close lesson (Alt-Tab / Cmd-Tab) |
| using-your-computer-mission | Rewrite | → "Make the Computer Yours" mission |
| — | **New** | Selecting and Editing Text, Menus/Buttons/Checkboxes/Dialogs, Accessibility and Comfort — 3 lessons |

### Old Module 4 → New Module 4 "Files and Folders"

| Old lesson | Action | Notes |
|---|---|---|
| what-is-a-file-and-folder | Split | → separate "What Is a File?" / "What Is a Folder?" lessons |
| standard-folders | Rewrite | Add "Downloads is not permanent organization" framing |
| file-extensions | Rewrite | Expand list, add EXE/DMG safety awareness |
| working-with-pdf | Move | → new Module 5 (Applications), not Files |
| rename-copy-move-delete | Split | → "Create, Rename, Copy, and Move" + "Delete and Restore" |
| recycle-bin-and-restore | Merge | Into "Delete and Restore" above |
| searching-for-files | Rewrite | Add "calm troubleshooting sequence" framing |
| zip-and-compression | Rewrite | Add "do not open unknown archives" |
| cloud-backup | Move | → new Module 9, bigger dedicated treatment |
| files-and-folders-mission | Rewrite | → "Organize a Real Folder" using the new downloadable practice ZIP |
| — | **New** | File Explorer on Windows / Finder on Mac (moved in from old M3), File Names That Help You Later, Save/Save As/Export, USB Drives and External Storage |

### Old Module 5 → splits into new Module 6 "Internet and Wi-Fi" + new Module 7 "Browser and Web Skills"

My old module conflated "internet/Wi-Fi" with "browser/search" into one. The new brief treats these as two distinct modules.

| Old lesson | Action | Notes |
|---|---|---|
| wifi-and-connecting | Rewrite | → M6 "Connect to Wi-Fi Safely," single-platform not 4-tab |
| browser-basics | Rewrite | → M7 "Browser, Search Engine, Website, and Web Page" |
| search-engines-and-the-address-bar | Split | → M7 "Address Bar..." + M7 "Search Better" (needs real expansion: quoting, date filters, source comparison) |
| tabs-and-bookmarks | Split | → M7 "Tabs and Windows" + M7 "Bookmarks, History, and Reading Later" |
| history-and-cache | Split | Distributes across the above + "Cookies, Cache, and Private Browsing" |
| cookies-explained | Rewrite | → "Cookies, Cache, and Private Browsing" |
| incognito-mode | Merge | Same lesson as above |
| links-and-qr-codes | Split | QR → M6 hotspot/cross-device area; link-safety → safety module |
| downloads-and-uploads | Rewrite | → M6 "Download and Upload" |
| data-usage-awareness | Merge | → M6 "Connection Speed, Signal, and Data Use" |
| internet-mastery-mission | Split | → two separate missions, one per new module |
| — | **New** | What Is the Internet? (standalone concept), ISP→Router→Wi-Fi chain, Wi-Fi/Mobile Data/Hotspot lesson, "Wi-Fi connected but no internet" troubleshooting, **Is This Information Trustworthy?** (credibility evaluation — brief treats this as important and it doesn't exist at all yet), Accounts/Sign-In/Sign-Out/Profiles |

### Old Module 6 → New Module 8 "Email and Online Communication"

| Old lesson | Action | Notes |
|---|---|---|
| what-is-email | Rewrite | → "How Email Works" |
| creating-a-gmail-account | Rewrite | De-brand → "Create or Secure an Email Account," don't force creation if learner has one |
| inbox-and-composing | Split | → "Inbox, Sent, Drafts, Spam, and Trash" + "Compose and Send a Clear Email" |
| reply-reply-all-forward | Rewrite | Direct match |
| email-attachments | Rewrite | Add file-size awareness, cloud-link alternative |
| folders-and-labels | Merge | → "Organize and Find Email" |
| spam-and-trash | Merge | → "Inbox, Sent, Drafts, Spam, and Trash" |
| searching-your-email | Merge | → "Organize and Find Email" |
| writing-professional-emails | Merge | → "Compose and Send a Clear Email" |
| recognizing-email-scams | Rewrite | → "Email Scams and Dangerous Attachments" — this is a required visual test-set scenario, see §4 |
| email-mastery-mission | Rewrite | → "Send a Complete Message" |
| — | **New** | Basic Video-Call Readiness (camera/mic/mute/background — provider-agnostic, not "learn Zoom") |

### Old Module 7 "Mobile Devices" → **dismantled, no dedicated module**

The new brief's Section 4.2 explicitly excludes "smartphone mastery as a separate subject." Phone-related content only appears as *Mode D: cross-device support* inside other modules, when a computer task genuinely requires it.

| Old lesson | Action | Notes |
|---|---|---|
| installing-and-uninstalling-apps | Split | Windows/Mac half → new Module 5; Play Store/App Store parity → **removed**, out of scope |
| managing-storage | Move | → new Module 13 "Storage Full: What It Means" (computer-focused) |
| photos-and-your-gallery | Move | → new Module 9 "Photo Organization and Backup" |
| messages-and-calls | Remove | No home — pure smartphone-mastery content |
| managing-contacts | Remove | Same |
| software-updates | Move | → new Module 13 "Updates and Basic Maintenance Routine" |
| bluetooth-basics | Move | → new Module 10 "Bluetooth" — reframe toward headphones/mouse, not phone-to-phone |
| mobile-hotspot | Merge | One bullet inside new M6's "Wi-Fi, Mobile Data, and Hotspots" |
| settings-tour | Remove | Phone Settings app tour isn't in scope |
| file-sharing-between-devices | Move | → new Module 9 "Transfer Files Between Phone and Computer" — brief explicitly warns "avoid platform promises that vary by model" |
| mobile-backups | Merge | → new Module 9 "A Simple Backup Plan" |
| mobile-devices-mission | Remove | Module itself is gone |

**Net: ~12 lessons collapse into fragments across 4 other modules; roughly 7 lessons are cut outright.**

### Old Module 8 "Google Ecosystem" → **removed entirely**

Explicitly named in the brief's exclusion list ("Google Workspace mastery," "Google Workspace depth") and in the Section 18 "Remove" list. All 11 lessons (Drive, Docs, Sheets, Slides, Calendar, Maps, Photos, Translate, Meet, Keep, plus the mission) are cut. New brief's only touchpoint is one recognition-level bullet inside Module 5: *"Recognize Word, Google Docs, Excel, Sheets, PowerPoint, and Slides."* Section 18 explicitly names **"Google Workspace"** as a candidate future course — this content isn't wasted, it just doesn't belong in *this* course.

### Old Module 9 "Microsoft Essentials" → **removed entirely**

Same treatment. **"Microsoft Office for Work"** is explicitly named as its own future course in Section 18. All 7 lessons cut from this course.

### Old Module 10 → New Module 11 "Safety, Privacy, and Digital Money"

Good conceptual overlap — one of the stronger old modules. Digital Payments does **not** get its own module; it folds into one lesson here.

| Old lesson | Action | Notes |
|---|---|---|
| creating-strong-passwords | Merge | Combines with password-managers into ONE lesson (brief pairs them) |
| password-managers | Merge | Same lesson as above |
| two-factor-authentication | Rewrite | Add "never share a code," recovery codes |
| what-is-a-virus | Rewrite | → "Viruses, Malware, and Updates" |
| recognizing-fake-websites | Merge | → "Fake Websites, Links, and Downloads" |
| identity-theft-protection | Merge | → "What Needs Protection?" (opening/framing lesson, not a standalone deep-dive) |
| public-wifi-safety | Rewrite | Broadens to "Privacy on Shared and Public Computers" — full shared-device privacy, not just Wi-Fi |
| privacy-settings-basics | Rewrite | Old version was social-media-settings; new brief's angle is device/browser/shared-computer — different enough to need a real rewrite |
| spotting-online-scams | Merge | → "Phishing, Fake Support, and Urgency" — required visual test-set scenario, see §4 |
| internet-safety-mission | Rewrite | → "Stop the Scam" (review fictional messages, identify red flags) |
| — | **New** | "What Needs Protection?" (opening lesson), **"Online Shopping and Digital Payment Safety"** (this is exactly where MonCash/NatCash awareness-level content goes — confirms the earlier decision to hold off was correct; brief explicitly bans "unstable step-by-step app instructions" and says *"Do not invent MonCash, NatCash, Apple, Google, Microsoft, or banking functionality"*), "What to Do If Something Goes Wrong" |

### Old Module 11 "AI for Everyone" → **cut to a single lesson**

Section 18's Remove list names **"unrelated AI tool catalogs"** specifically. All 10 lessons (what-is-ai, ChatGPT, Claude, Gemini, Copilot, Perplexity, image AI, voice AI, prompting, mission) are exactly the pattern being called out. New brief wants **one** lesson — "131. Use AI as a Computer Tutor" — inside the new Module 14, covering good uses (explain a term, rewrite an error message, build a troubleshooting checklist, compare specs, practice email wording) and hard boundaries (never share secrets, verify instructions, don't run unknown commands, AI doesn't replace backups or diagnosis). Section 18 names **"AI for Work & Business"** as a candidate future course for the cut depth.

---

## 3. Entirely new content required

| New module | Lessons | Status |
|---|---:|---|
| Module 5 — Applications and Everyday Documents | 8 | Mostly new (working-with-pdf and app-install concept partially reusable) |
| Module 9 — Cloud, Backup, and Moving Files | 8 | Partially reusable (cloud-backup, mobile-backups, file-sharing, photos) but needs real sync-vs-backup framing |
| Module 10 — Devices, Printing, and Everyday Connections | 8 | Partially reusable (USB/HDMI, Bluetooth, webcam/mic/speakers) but printing/scanning (2 lessons) is 100% new |
| **Module 12 — Buying and Caring for a Computer** | **14** | **100% new.** Densest module in the brief: needs profile → device types → Intel vs. AMD → processor generations → Intel vs. Apple Silicon → M-series chips → RAM/storage → physical inspection → new/used/refurbished → full used-Windows checklist → full used-Mac checklist → buying scams → care/maintenance → final decision sheet |
| Module 13 — Troubleshooting and Maintenance | 11 | Mostly new — a repeatable 8-step diagnostic loop, only software-updates/restart-vs-shutdown partially reusable |
| Module 14 — Digital Independence | 9 + capstone | 100% new — organization system, routines, the one AI lesson, capstone prep, the capstone itself (16-task rubric-graded scenario), growth review, next-path guidance |

Plus, system-wide: 4 confidence checkpoints (after Modules 3, 6, 10, 14), a 50-question randomized final exam bank, the capstone rubric (7 weighted categories), and certificate issuance/verification.

---

## 4. Image audit

**128 images exist.** All were generated the same way: one photorealistic AI illustration per lesson via Gemini, used as the primary lesson visual. The new brief's Section 9A changes the entire visual model — and under its QA rubric, **not a single existing image can be marked "keep as-is."** Nothing has been reviewed against the new rubric (concept accuracy, platform truth, distraction control, text correctness, etc.), so even images whose lesson survives need to go through the new visual-brief process before they're trusted again.

| Classification | Count | Meaning |
|---|---:|---|
| **Replace with real screenshot** | 10 | Fake AI-generated UI mockups currently presented as real interfaces — a direct violation of *"Do not use AI-generated screenshots as factual interface instructions"* |
| **Replace with SVG/HTML diagram** | 6 | Concept is a process/comparison/hierarchy — wrong visual type entirely, not a photo problem |
| **Regenerate as instructional illustration** | 31 | Lesson survives (rewritten), current image's concept is reusable, needs a fresh visual brief + QA pass |
| **Remove** | 81 | Underlying lesson is cut, merged elsewhere, or moved to a module where the image doesn't fit |

### 4a. Replace with real screenshot (10) — interface-accuracy violations

These are AI-generated fakes of real operating-system UI. Per Section 9A.2, this is a hard rule violation regardless of visual quality — screenshots of factual interfaces must be real.

| File | Fake interface shown |
|---|---|
| `restart-vs-shutdown-windows.webp` | Windows Start menu power panel |
| `restart-vs-shutdown-mac.webp` | Apple menu shutdown options |
| `finder-and-file-explorer-windows.webp` | File Explorer window |
| `finder-and-file-explorer-mac.webp` | Finder window |
| `screenshots-and-screen-recording-windows.webp` | Windows screenshot tool |
| `screenshots-and-screen-recording-mac.webp` | macOS screenshot tool |
| `wifi-and-connecting-windows.webp` | Windows Wi-Fi network panel |
| `wifi-and-connecting-mac.webp` | macOS Wi-Fi menu-bar dropdown |
| `file-sharing-between-devices-android.webp` | Android Nearby Share panel |
| `file-sharing-between-devices-iphone.webp` | iOS AirDrop panel |

### 4b. Replace with SVG/HTML diagram (6)

| File | Required diagram (per Section 9A.4's explicit diagram-family list) |
|---|---|
| `what-is-a-computer.webp` | Input → Processing → Output → Storage |
| `hardware-vs-software.webp` | Hardware → Operating System → Application → File |
| `keyboard-shortcuts.webp` | Clipboard chain: Copy → Clipboard → Paste |
| `what-is-a-file-and-folder.webp` | File vs. Folder comparison |
| `downloads-and-uploads.webp` | Download vs. Upload direction |
| `what-is-email.webp` | Email route (sender → server → inbox) |

Two more required diagram families have no current asset at all because their lessons are moving modules — noted here so they aren't lost: **Local storage vs. cloud storage** (old `what-is-the-cloud.webp`, moving to new Module 9) and **Backup flow** (old `cloud-backup.webp`, moving to new Module 9). Both need fresh diagrams once those lessons are rebuilt.

### 4c. Regenerate as instructional illustration (31)

Full list, grouped by destination module — these lessons survive and need a fresh visual brief (Section 9A.5) before regeneration, not a straight re-prompt of the old brief:

- **Module 1:** welcome-to-computers, desktop-vs-laptop, windows-vs-mac, first-digital-mission
- **Module 2/3 (relocated):** keyboard-basics, mouse-and-trackpad, usb-and-hdmi
- **Module 3:** working-with-windows, right-click-and-drag-drop, settings-and-personalization, typing-accented-characters
- **Module 4:** standard-folders, file-extensions, recycle-bin-and-restore, searching-for-files, zip-and-compression
- **Module 6/7 (relocated):** browser-basics, cookies-explained, incognito-mode
- **Module 8:** reply-reply-all-forward, email-attachments, writing-professional-emails, recognizing-email-scams
- **Module 9/13 (relocated):** software-updates, bluetooth-basics
- **Module 11:** creating-strong-passwords, two-factor-authentication, what-is-a-virus, recognizing-fake-websites, public-wifi-safety, spotting-online-scams

Two of these — `recognizing-email-scams` and `spotting-online-scams` — map onto the required "Phishing scenario" test-set image (§5, item 7). Only one final asset should survive; treat these as competing drafts for the same required visual, not two separate images.

### 4d. Remove (81)

The full list is implicit in §2's migration table (every lesson marked Remove there). In short: all 11 Google Ecosystem images, all 7 Microsoft Essentials images, all 10 AI-for-Everyone images, 12 of the 16 Mobile Devices images, and the remaining ~41 spread across Modules 1–6 and 10 whose lessons were merged, split, or moved into a module where the existing asset no longer fits the new framing.

### 4e. Trademark/logo rule — new constraint, applies everywhere

**No AI image generator (Gemini, OpenAI, or any future provider) may be asked to reproduce a real brand's logo or trademarked mark** — Intel, AMD, Apple, Windows, Google, Android, etc. This isn't a style preference, it's a legal/brand-safety line: an AI "close enough" rendering of a chip logo or a Start-menu icon is a trademark-imitation problem independent of how accurate it looks. The new visual QA rubric already implies this ("Originality — does not imitate protected characters or another brand style") but it needs to be an explicit, checked rule, not an inference.

This bites hardest in **Module 12** (Intel vs. AMD, Apple Silicon generations) since brand identity is literally the subject matter, but it applies to every lesson that touches a named product. Practical handling:

- **Comparison/spec content (Intel vs. AMD, M1 vs. M2, etc.):** build as clean SVG/HTML diagrams using **typography only** — e.g., a labeled card reading "Intel Core i5-1335U" in plain text, never a stylized logo mark. This also matches the brief's own preference for SVG/HTML over photos for factual/comparison content, so it's not an extra constraint, just a sharper reason for one already planned.
- **Real screenshots** (e.g., Windows "System Information" or macOS "About This Mac" showing "Apple M2" or "Intel Core i7" in the actual OS text) are fine — that's genuine interface content, not a fabricated logo, and the new brief already requires real screenshots for factual UI anyway.
- **Add to every visual brief's `forbidden_elements` field by default:** no fabricated or approximated brand logos, no stylized processor badges, no invented company wordmarks.
- If an actual Intel/AMD/Apple logo is ever needed (e.g., a "how to read the sticker on your laptop" lesson), it has to come from the brand's own official press/logo kit under their usage guidelines — never AI-generated — and that's a licensing/attribution question for a human to clear, not something Claude Code should generate or guess at.

---

## 5. Required 10-image visual test set (Section 9A.11)

Per the brief: *"Generate and approve only these first... Do not generate the remaining course visuals until these establish the quality bar."* **None of these have been generated yet.** Visual briefs (Section 9A.5 schema) need to be written and approved before any generation happens.

| # | Visual | Type | Status |
|---|---|---|---|
| 1 | Input → processing → output → storage diagram | SVG/HTML | Brief not written |
| 2 | RAM vs. SSD visual | SVG/HTML | Brief not written |
| 3 | Windows vs. Mac path-selection visual | Illustration | Brief not written |
| 4 | Wi-Fi vs. internet diagram | SVG/HTML | Brief not written |
| 5 | File vs. folder visual | SVG/HTML | Brief not written — existing `what-is-a-file-and-folder.webp` is the closest analog but must be rebuilt as a diagram, not a photo |
| 6 | Download vs. upload diagram | SVG/HTML | Brief not written — existing `downloads-and-uploads.webp` is the closest analog, same rebuild note |
| 7 | Phishing scenario | Illustration/scenario | Brief not written — see §4c note on the two competing existing drafts |
| 8 | Used-computer inspection scene | Realistic illustration | Brief not written — first visual for the entirely-new Module 12 |
| 9 | Backup flow | SVG/HTML | Brief not written — existing `cloud-backup.webp` is the closest analog, must be rebuilt as a diagram |
| 10 | Troubleshooting loop | SVG/HTML | Brief not written — first visual for the entirely-new Module 13 |

---

## 6. Engineering changes required

- **Platform preference model** — `preferredPlatform: "windows" | "mac"` selected at onboarding, switchable later, with universal/shared-steps/platform-variant/cross-device lesson modes (Section 5.4's suggested `Platform`/`LessonBlock`/`CourseLesson` TypeScript shapes)
- **Lesson content schema overhaul** — current flat `ComputerPremiumLesson` interface needs to become a typed `blocks` array (goal/explanation/diagram/vocabulary/platform_steps/practice/mission/mistake/safety/ai_help/knowledge_check/reflection) per Section 5.4
- **Image provider adapter** — `CourseVisualRequest`/`CourseVisualResult` interface (Section 9A.3) so Gemini and OpenAI GPT Image are interchangeable providers behind one call site; API keys server-side only
- **Visual brief + review pipeline** — sidecar YAML brief per generated image (Section 9A.5), draft → review folder → human approve/reject/revise → optimize → link, before any asset enters a lesson. `forbidden_elements` must default to include "no fabricated brand logos/trademarks" on every brief (see §4e)
- **Practice-file ZIP pack** — downloadable fictional-content ZIP (Section 9.1's exact folder structure) that missions actually reference
- **Confidence checkpoints, exam bank, capstone submission, certificate issuance/verification** — none of this exists yet for this course

---

## 7. What's explicitly blocked until reviewed

Per the brief's non-negotiable rules (Section 21) and direct instruction:

- No new Gemini (or other) image generation until the visual brief system + 10-image test set are approved
- No further mass lesson writing until the buying module, platform strategy, lesson shell, and visual test set are reviewed together
- No existing content deleted — this audit is the mapping; nothing gets removed from the repo until you sign off on the table above
