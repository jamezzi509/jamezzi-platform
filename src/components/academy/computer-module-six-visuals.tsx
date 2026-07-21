import Image from "next/image";
import type { LessonVisual } from "@/content/computer-course-v2";
import type { PreferredPlatform } from "@/lib/use-computer-platform";
import { cn } from "@/lib/cn";

const photos = {
  "apps-what-is-app": [
    "apps-what-is-app.webp",
    "Real Windows and Mac laptops showing installed applications",
  ],
  "apps-find-installed": [
    "apps-find-installed.webp",
    "Adult learner finding installed applications on a laptop",
  ],
  "apps-trusted-store": [
    "apps-trusted-store.webp",
    "Two real laptops showing application marketplace context",
  ],
  "apps-review-listing": [
    "apps-review-listing.webp",
    "Adult learner reviewing an application listing and budget",
  ],
  "apps-safe-install": [
    "apps-safe-install.webp",
    "Adult learner pausing before confirming a software installation",
  ],
  "apps-update": [
    "apps-update.webp",
    "Real laptop completing an application update",
  ],
  "apps-uninstall": [
    "apps-uninstall.webp",
    "Adult learner reviewing installed applications before removal",
  ],
  "apps-permissions": [
    "apps-permissions.webp",
    "Adult learner considering camera and microphone access",
  ],
  "apps-default-open-with": [
    "apps-default-open-with.webp",
    "Adult learner choosing an application for a file",
  ],
} as const;

const conceptVisuals = {
  "apps-types-map": [
    "Identify before acting",
    "Icon → location → behavior → type",
    "Local computer",
    [
      ["Installed app", "Appears in the installed-app location"],
      [
        "Shortcut",
        "Points elsewhere; removing it usually removes only the route",
      ],
    ],
    "Browser or system",
    [
      ["Web app", "Runs mainly at a web address inside a browser"],
      ["System component", "Supplied and protected by the operating system"],
    ],
  ],
  "apps-installed-locations": [
    "Platform routes",
    "Search quickly; verify locally",
    "Windows 11",
    [
      ["Fast", "Start → type the app name"],
      ["Verify", "Settings → Apps → Installed apps"],
    ],
    "macOS",
    [
      ["Fast", "Command–Space → type the app name"],
      ["Verify", "Finder → Applications"],
    ],
  ],
  "apps-source-ladder": [
    "Source gate",
    "Use the first source you can verify",
    "Continue to the listing audit",
    [
      ["1 · Platform store", "Microsoft Store or Mac App Store"],
      ["2 · Publisher", "Exact official domain and matching publisher"],
      ["3 · Organization", "Verified school or employer portal"],
    ],
    "Stop",
    [
      ["Look-alike domain", "Misspelling, redirect, or unrelated publisher"],
      ["Crack or mirror", "Unlawful offer or unexplained repackaging"],
      ["Download advertisement", "Leads somewhere other than the publisher"],
    ],
  ],
  "apps-listing-anatomy": [
    "Before Get, Buy, or Install",
    "Six fields form the decision",
    "Identity and fit",
    [
      ["Publisher", "Who is responsible?"],
      ["Compatibility", "Does it support this system?"],
      ["Storage", "Is there enough working space?"],
    ],
    "Cost and access",
    [
      ["Price model", "Free, one-time, trial, or subscription?"],
      ["Renewal", "When and how much is the next charge?"],
      ["Permissions", "Do requests match intended features?"],
    ],
  ],
  "apps-security-prompts": [
    "Approval gate",
    "Three facts must agree",
    "Windows security prompt",
    [
      ["Action", "Did you deliberately start this installation?"],
      ["App", "Does the exact app name match?"],
      ["Publisher", "Is the verified publisher shown?"],
    ],
    "macOS security prompt",
    [
      ["Source", "App Store or verified publisher?"],
      ["Developer", "Identified and expected?"],
      ["Protection", "Keep Gatekeeper enabled; stop if asked to bypass it"],
    ],
  ],
  "apps-update-routes": [
    "Known updater only",
    "Return through the route that owns the update",
    "Explainable routes",
    [
      ["Store app", "Store → Updates or automatic updates"],
      ["Publisher app", "App menu → Check for Updates"],
      ["Web app", "Service updates on its servers"],
    ],
    "Reject",
    [
      ["Browser scan", "A webpage claiming it inspected every local app"],
      ["Unsolicited popup", "A prompt you did not open from the app or store"],
      ["Remote helper", "A stranger requesting control to install updates"],
    ],
  ],
  "apps-removal-consequences": [
    "Four separate layers",
    "Uninstall does not mean erase everything",
    "What removal changes",
    [
      [
        "Application",
        "Software is removed and its occupied storage becomes available",
      ],
      ["Shortcut", "May disappear or lose its target"],
    ],
    "What needs a separate decision",
    [
      ["Documents", "Usually remain, but may need another compatible app"],
      ["Subscription", "Continues until cancelled and confirmed separately"],
    ],
  ],
  "apps-permission-panels": [
    "Operating-system controls",
    "Review access by category",
    "Windows 11 · Privacy & security",
    [
      ["Camera", "Apps allowed to use the camera"],
      ["Microphone", "Apps allowed to capture sound"],
      ["Location", "Apps allowed to request location"],
    ],
    "macOS · Privacy & Security",
    [
      ["Camera / Microphone", "Review each listed application"],
      ["Files and Folders", "Review protected-location access"],
      ["Location Services", "Review location access separately"],
    ],
  ],
  "apps-default-scope": [
    "Scope first",
    "One opening or the future rule?",
    "This time only",
    [
      ["Windows", "Right-click file → Open with"],
      ["macOS", "Control-click file → Open With"],
      ["Result", "The general default stays unchanged"],
    ],
    "All files of this type",
    [
      ["Windows", "Settings → Apps → Default apps"],
      ["macOS", "Get Info → Open with → Change All"],
      ["Result", "Future openings use the selected compatible app"],
    ],
  ],
} as const;

type PhotoKind = keyof typeof photos;
type ConceptKind = keyof typeof conceptVisuals;
type ModuleSixVisualKind = PhotoKind | ConceptKind;

export function isModuleSixVisual(
  visual: LessonVisual,
): visual is { kind: ModuleSixVisualKind } {
  return visual.kind in photos || visual.kind in conceptVisuals;
}

export function ModuleSixVisual({
  visual,
  platform,
}: {
  visual: { kind: ModuleSixVisualKind };
  platform: PreferredPlatform | null;
}) {
  if (visual.kind in conceptVisuals)
    return (
      <ConceptScreen
        data={conceptVisuals[visual.kind as ConceptKind]}
        platform={platform}
      />
    );
  const [filename, alt] = photos[visual.kind as PhotoKind];
  return (
    <figure className="overflow-hidden rounded-[24px] border border-[#DDD8E8] bg-white shadow-[0_18px_50px_rgba(49,42,84,.12)]">
      <div className="relative aspect-[16/9] bg-[#E9E7F1]">
        <Image
          src={`/images/academy/courses/computer-internet-essentials/v2/${filename}`}
          alt={alt}
          fill
          sizes="(max-width: 900px) 100vw, 880px"
          className="object-cover"
        />
      </div>
      <figcaption className="border-t border-[#E6E2ED] px-5 py-4 text-[15px] leading-relaxed text-[#625E6C]">
        <strong className="text-[#282432]">Photographic context.</strong> Exact
        controls, names, and decisions are taught in the instructional screen,
        interactive practice, and platform steps—not inferred from generated
        screen text.
      </figcaption>
    </figure>
  );
}

function ConceptScreen({
  data,
  platform,
}: {
  data: (typeof conceptVisuals)[ConceptKind];
  platform: PreferredPlatform | null;
}) {
  const [eyebrow, title, leftTitle, left, rightTitle, right] = data;
  return (
    <div
      className="overflow-hidden rounded-[26px] border border-[#D8D3E5] bg-[#F0EEF8] shadow-[0_18px_50px_rgba(49,42,84,.12)]"
      role="img"
      aria-label={`${title}. ${leftTitle}. ${rightTitle}.`}
    >
      <div className="flex items-center justify-between border-b border-[#D8D3E5] bg-white px-5 py-3">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-[#EF6A65]" />
          <span className="size-2.5 rounded-full bg-[#F5B725]" />
          <span className="size-2.5 rounded-full bg-[#38BC79]" />
        </div>
        <span className="text-xs font-bold tracking-[.12em] text-[#625E6C] uppercase">
          Instructional screen ·{" "}
          {platform === "mac" ? "Mac path saved" : "Windows path saved"}
        </span>
      </div>
      <div className="p-5 sm:p-7">
        <p className="text-xs font-bold tracking-[.14em] text-[#5449D8] uppercase">
          {eyebrow}
        </p>
        <h3 className="font-display mt-2 text-2xl text-[#201C2B] sm:text-3xl">
          {title}
        </h3>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            [leftTitle, left],
            [rightTitle, right],
          ].map(([columnTitle, items], column) => (
            <section
              key={String(columnTitle)}
              className={cn(
                "rounded-2xl border bg-white p-5",
                column === 0 ? "border-[#CFC9F6]" : "border-[#E6D3D1]",
              )}
            >
              <h4 className="font-bold text-[#282432]">
                {String(columnTitle)}
              </h4>
              <div className="mt-4 grid gap-3">
                {(items as readonly (readonly [string, string])[]).map(
                  ([label, detail]) => (
                    <div key={label} className="rounded-xl bg-[#F7F6FB] p-3.5">
                      <strong className="block text-sm text-[#332E42]">
                        {label}
                      </strong>
                      <span className="mt-1 block text-sm leading-relaxed text-[#696474]">
                        {detail}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
