import type { SVGProps } from "react";

function GlyphFrame(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      className="size-full"
      aria-hidden="true"
      focusable="false"
      {...props}
    />
  );
}

export function CoursesGlyph() {
  return (
    <GlyphFrame>
      <rect
        x="10"
        y="14"
        width="36"
        height="4"
        rx="2"
        fill="var(--color-indigo)"
        opacity="0.85"
      />
      <rect
        x="10"
        y="26"
        width="44"
        height="4"
        rx="2"
        fill="var(--color-violet)"
        opacity="0.5"
      />
      <rect
        x="10"
        y="38"
        width="24"
        height="4"
        rx="2"
        fill="var(--color-violet)"
        opacity="0.3"
      />
      <circle cx="46" cy="28" r="1.6" fill="var(--color-coral)" />
    </GlyphFrame>
  );
}

export function BooksGlyph() {
  return (
    <GlyphFrame>
      <rect
        x="12"
        y="14"
        width="30"
        height="38"
        rx="2"
        fill="var(--color-indigo)"
        opacity="0.18"
        stroke="var(--color-indigo)"
        strokeOpacity="0.6"
      />
      <rect
        x="20"
        y="10"
        width="30"
        height="38"
        rx="2"
        fill="var(--color-violet)"
        opacity="0.14"
        stroke="var(--color-violet)"
        strokeOpacity="0.55"
        transform="rotate(6 35 29)"
      />
    </GlyphFrame>
  );
}

export function EventsGlyph() {
  return (
    <GlyphFrame>
      <circle
        cx="32"
        cy="32"
        r="14"
        stroke="var(--color-violet)"
        strokeOpacity="0.6"
        fill="none"
      />
      <line
        x1="32"
        y1="10"
        x2="32"
        y2="18"
        stroke="var(--color-indigo)"
        opacity="0.7"
      />
      <line
        x1="32"
        y1="46"
        x2="32"
        y2="54"
        stroke="var(--color-indigo)"
        opacity="0.7"
      />
      <line
        x1="10"
        y1="32"
        x2="18"
        y2="32"
        stroke="var(--color-indigo)"
        opacity="0.7"
      />
      <line
        x1="46"
        y1="32"
        x2="54"
        y2="32"
        stroke="var(--color-indigo)"
        opacity="0.7"
      />
      <circle cx="32" cy="32" r="3" fill="var(--color-coral)" />
    </GlyphFrame>
  );
}
