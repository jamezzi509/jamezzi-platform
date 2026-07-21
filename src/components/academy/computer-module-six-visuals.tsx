import Image from "next/image";
import type { LessonVisual } from "@/content/computer-course-v2";

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

export type ModuleSixVisualKind = keyof typeof photos;

export function isModuleSixVisual(
  visual: LessonVisual,
): visual is { kind: ModuleSixVisualKind } {
  return visual.kind in photos;
}

export function ModuleSixVisual({
  visual,
}: {
  visual: { kind: ModuleSixVisualKind };
}) {
  const [filename, alt] = photos[visual.kind];
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
        controls, names, and decisions are taught in the interactive practice
        and platform steps—not inferred from generated screen text.
      </figcaption>
    </figure>
  );
}
