export function GuideArtwork() {
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
          opacity="0.12"
        />
        <polygon
          points="-20,90 160,60 190,190 -40,200"
          fill="var(--color-violet)"
          opacity="0.09"
        />
      </g>
      <g stroke="var(--color-indigo)" strokeWidth="1" opacity="0.28">
        <line x1="320" y1="-20" x2="80" y2="200" />
        <line x1="320" y1="40" x2="150" y2="200" />
        <line x1="260" y1="-20" x2="20" y2="160" />
      </g>
      <g
        fill="none"
        stroke="var(--color-violet)"
        opacity="0.32"
        strokeWidth="1.5"
      >
        <path d="M 300 30 C 250 10, 170 50, 150 110 C 132 164, 90 180, 60 190" />
      </g>
      <g
        fill="none"
        stroke="var(--color-coral)"
        strokeLinecap="round"
        opacity="0.5"
      >
        <path d="M 230 60 Q 244 46, 260 60" strokeWidth="2" />
      </g>
      <g stroke="var(--color-ink)" fill="none" opacity="0.35">
        <circle cx="72" cy="150" r="12" strokeWidth="1.2" />
        <circle
          cx="72"
          cy="150"
          r="2"
          fill="var(--color-coral)"
          stroke="none"
        />
      </g>
    </svg>
  );
}
