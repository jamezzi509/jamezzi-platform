import { cn } from "@/lib/cn";

type Tone = "light" | "dark";

const focusTagTone: Record<Tone, string> = {
  light: "border-border bg-paper text-ink",
  dark: "border-night-border bg-night-raised text-night-text",
};

export function FocusTag({
  children,
  tone = "light",
}: {
  children: string;
  tone?: Tone;
}) {
  return (
    <span
      className={cn(
        "rounded-control text-metadata inline-flex items-center border px-3 py-1.5",
        focusTagTone[tone],
      )}
    >
      {children}
    </span>
  );
}

const trackLabelTone: Record<Tone, string> = {
  light: "text-muted",
  dark: "text-night-muted",
};

const trackBaseTone: Record<Tone, string> = {
  light: "bg-border/60",
  dark: "bg-night-border",
};

export function PlaceholderTrack({
  label,
  fillPercent,
  tone = "light",
}: {
  label: string;
  fillPercent: number;
  tone?: Tone;
}) {
  return (
    <div>
      <p className={cn("text-metadata", trackLabelTone[tone])}>{label}</p>
      <div
        role="img"
        aria-label={`${label} — illustrative placeholder`}
        className={cn(
          "mt-2 h-2 w-full overflow-hidden rounded-full",
          trackBaseTone[tone],
        )}
      >
        <div
          className="h-full rounded-full bg-[var(--accent)]"
          style={{ width: `${fillPercent}%` }}
        />
      </div>
    </div>
  );
}

const RADAR_AXES = 7;

const radarGridTone: Record<Tone, string> = {
  light: "text-border",
  dark: "text-night-border",
};

export function RadarPlaceholder({ tone = "light" }: { tone?: Tone }) {
  const center = 60;
  const radius = 48;
  const sampleShape = [0.55, 0.7, 0.4, 0.85, 0.6, 0.75, 0.5];

  const axisPoint = (index: number, scale: number) => {
    const angle = (Math.PI * 2 * index) / RADAR_AXES - Math.PI / 2;
    return [
      center + Math.cos(angle) * radius * scale,
      center + Math.sin(angle) * radius * scale,
    ];
  };

  const gridRings = [0.33, 0.66, 1];
  const shapePoints = sampleShape
    .map((scale, i) => axisPoint(i, scale).join(","))
    .join(" ");

  return (
    <svg
      viewBox="0 0 120 120"
      className={cn("size-full", radarGridTone[tone])}
      role="img"
      aria-label="Illustrative seven-dimension opportunity radar chart placeholder"
    >
      {gridRings.map((scale) => (
        <polygon
          key={scale}
          points={Array.from({ length: RADAR_AXES }, (_, i) =>
            axisPoint(i, scale).join(","),
          ).join(" ")}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
      ))}
      {Array.from({ length: RADAR_AXES }, (_, i) => {
        const [x, y] = axisPoint(i, 1);
        return (
          <line
            key={i}
            x1={center}
            y1={center}
            x2={x}
            y2={y}
            stroke="currentColor"
            strokeWidth="1"
          />
        );
      })}
      <polygon
        points={shapePoints}
        fill="var(--accent)"
        fillOpacity="0.28"
        stroke="var(--accent)"
        strokeWidth="2"
      />
    </svg>
  );
}
