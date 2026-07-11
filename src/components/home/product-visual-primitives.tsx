export function FocusTag({ children }: { children: string }) {
  return (
    <span className="rounded-control border-border bg-paper text-metadata text-ink inline-flex items-center border px-3 py-1.5">
      {children}
    </span>
  );
}

export function PlaceholderTrack({
  label,
  fillPercent,
}: {
  label: string;
  fillPercent: number;
}) {
  return (
    <div>
      <p className="text-metadata text-muted">{label}</p>
      <div
        role="img"
        aria-label={`${label} — illustrative placeholder`}
        className="bg-border/60 mt-2 h-2 w-full overflow-hidden rounded-full"
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

export function RadarPlaceholder() {
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
      className="text-border size-full"
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
        fillOpacity="0.18"
        stroke="var(--accent)"
        strokeWidth="2"
      />
    </svg>
  );
}
