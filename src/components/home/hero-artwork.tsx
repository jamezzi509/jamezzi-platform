export function HeroArtwork() {
  return (
    <svg
      viewBox="0 0 1600 1000"
      preserveAspectRatio="xMidYMid slice"
      className="hero-artwork-fade absolute inset-0 size-full"
      aria-hidden="true"
      focusable="false"
    >
      {/* translucent planes */}
      <g style={{ mixBlendMode: "multiply" }}>
        <polygon
          points="880,-60 1660,40 1500,460 800,300"
          fill="var(--color-indigo)"
          opacity="0.12"
        />
        <polygon
          points="580,90 1200,250 1000,610 430,420"
          fill="var(--color-violet)"
          opacity="0.1"
        />
        <polygon
          points="-120,510 610,660 460,1060 -220,960"
          fill="var(--color-indigo-light)"
          opacity="0.55"
        />
        <polygon
          points="140,650 500,750 400,1010 70,900"
          fill="var(--color-violet)"
          opacity="0.08"
        />
      </g>

      {/* construction lines */}
      <g stroke="var(--color-indigo)" strokeWidth="1" opacity="0.3">
        <line x1="1600" y1="-580" x2="0" y2="120" />
        <line x1="1600" y1="-360" x2="0" y2="340" />
        <line x1="1600" y1="-140" x2="0" y2="560" />
        <line x1="1600" y1="80" x2="0" y2="780" />
        <line x1="1600" y1="300" x2="0" y2="1000" />
        <line x1="1600" y1="520" x2="0" y2="1220" />
      </g>
      <g
        stroke="var(--color-violet)"
        strokeWidth="1"
        opacity="0.22"
        strokeDasharray="2 10"
      >
        <line x1="1600" y1="-260" x2="0" y2="440" />
        <line x1="1600" y1="200" x2="0" y2="900" />
      </g>

      {/* tick marks along one construction line */}
      <g stroke="var(--color-indigo)" strokeWidth="1" opacity="0.35">
        <line x1="1240" y1="188" x2="1252" y2="164" />
        <line x1="1080" y1="248" x2="1092" y2="224" />
        <line x1="920" y1="308" x2="932" y2="284" />
        <line x1="760" y1="368" x2="772" y2="344" />
        <line x1="600" y1="428" x2="612" y2="404" />
        <line x1="440" y1="488" x2="452" y2="464" />
      </g>

      {/* contour lines */}
      <g
        fill="none"
        stroke="var(--color-violet)"
        opacity="0.28"
        strokeWidth="1.5"
      >
        <path d="M 1500 120 C 1250 60, 950 180, 820 380 C 700 560, 780 760, 620 880" />
        <path d="M 1560 240 C 1300 200, 1040 300, 920 480 C 800 660, 860 820, 700 940" />
      </g>
      <g
        fill="none"
        stroke="var(--color-indigo)"
        opacity="0.18"
        strokeWidth="1.5"
      >
        <path d="M 1400 40 C 1180 20, 900 120, 780 300 C 660 480, 700 660, 540 800" />
      </g>

      {/* rough coral marks, upper right, resolving toward lower left */}
      <g fill="none" stroke="var(--color-coral)" strokeLinecap="round">
        <path
          d="M 1300 90 Q 1330 60, 1360 92 T 1420 85"
          strokeWidth="3"
          opacity="0.55"
        />
        <path
          d="M 1250 160 Q 1275 140, 1300 168"
          strokeWidth="2.5"
          opacity="0.4"
        />
        <path
          d="M 980 340 Q 1000 322, 1022 342"
          strokeWidth="2"
          opacity="0.28"
        />
      </g>

      {/* precise geometric anchor, lower left — rough resolves into exact.
          Kept below the hero copy column so it never sits under the text. */}
      <g stroke="var(--color-ink)" fill="none" opacity="0.45">
        <circle cx="230" cy="965" r="22" strokeWidth="1.5" />
        <line x1="230" y1="928" x2="230" y2="1002" strokeWidth="1" />
        <line x1="193" y1="965" x2="267" y2="965" strokeWidth="1" />
        <circle
          cx="230"
          cy="965"
          r="3"
          fill="var(--color-coral)"
          stroke="none"
        />
      </g>
    </svg>
  );
}
