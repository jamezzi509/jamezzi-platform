type Variant = "decision" | "signals" | "readiness";

function DecisionMarks() {
  return (
    <>
      <g
        stroke="var(--color-indigo)"
        strokeWidth="1.25"
        opacity="0.4"
        fill="none"
      >
        <path d="M 40 40 L 150 100" />
        <path d="M 40 160 L 150 100" />
        <path d="M 150 100 L 270 60" />
        <path d="M 150 100 L 270 140" />
      </g>
      <g stroke="var(--color-ink)" fill="none" opacity="0.55">
        <circle cx="150" cy="100" r="16" strokeWidth="1.4" />
        <path
          d="M 143 100 L 149 106 L 159 92"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <g fill="var(--color-coral)">
        <circle cx="270" cy="60" r="3" />
        <circle cx="270" cy="140" r="3" />
      </g>
    </>
  );
}

function SignalMarks() {
  const bars = [18, 30, 22, 40, 34, 48, 44];
  return (
    <>
      <g fill="var(--color-indigo)" opacity="0.5">
        {bars.map((h, i) => (
          <rect
            key={i}
            x={40 + i * 20}
            y={150 - h}
            width="10"
            height={h}
            rx="2"
          />
        ))}
      </g>
      <g
        stroke="var(--color-violet)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.55"
      >
        <circle cx="252" cy="55" r="22" />
        <circle cx="252" cy="55" r="13" opacity="0.6" />
      </g>
      <g
        stroke="var(--color-coral)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
        strokeLinecap="round"
      >
        <path d="M 268 71 L 282 85" />
      </g>
    </>
  );
}

function ReadinessMarks() {
  return (
    <>
      <g fill="none" strokeLinecap="round">
        <circle
          cx="90"
          cy="100"
          r="42"
          stroke="var(--color-border)"
          strokeWidth="8"
        />
        <path
          d="M 90 58 A 42 42 0 1 1 52 122"
          stroke="var(--color-indigo)"
          strokeWidth="8"
          opacity="0.75"
        />
      </g>
      <g
        stroke="var(--color-ink)"
        strokeWidth="1.5"
        opacity="0.45"
        strokeLinecap="round"
      >
        <path d="M 168 62 L 178 72 L 196 52" />
        <path d="M 168 92 L 178 102 L 196 82" />
        <path d="M 168 122 L 178 132 L 196 112" />
      </g>
      <circle cx="252" cy="150" r="3" fill="var(--color-coral)" />
    </>
  );
}

export function GuideArtwork({ variant }: { variant: Variant }) {
  return (
    <svg
      viewBox="0 0 320 200"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 size-full"
      aria-hidden="true"
      focusable="false"
    >
      <g style={{ mixBlendMode: "multiply" }}>
        <polygon
          points="140,-20 340,40 300,160 100,120"
          fill="var(--color-indigo)"
          opacity="0.1"
        />
        <polygon
          points="-20,90 160,60 190,190 -40,200"
          fill="var(--color-violet)"
          opacity="0.08"
        />
      </g>
      <g stroke="var(--color-indigo)" strokeWidth="1" opacity="0.16">
        <line x1="320" y1="-20" x2="80" y2="200" />
        <line x1="260" y1="-20" x2="20" y2="160" />
      </g>
      {variant === "decision" && <DecisionMarks />}
      {variant === "signals" && <SignalMarks />}
      {variant === "readiness" && <ReadinessMarks />}
    </svg>
  );
}
