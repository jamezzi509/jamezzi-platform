export function HeroArtwork() {
  return (
    <svg
      viewBox="0 0 1600 1000"
      preserveAspectRatio="xMidYMid slice"
      className="hero-artwork-fade absolute inset-0 size-full"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient
          id="jz-hero-plane-a"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop
            offset="0%"
            stopColor="var(--color-indigo)"
            stopOpacity="0.22"
          />
          <stop
            offset="100%"
            stopColor="var(--color-violet)"
            stopOpacity="0.1"
          />
        </linearGradient>
        <linearGradient
          id="jz-hero-plane-b"
          x1="100%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="var(--color-violet)" stopOpacity="0.2" />
          <stop
            offset="100%"
            stopColor="var(--color-indigo)"
            stopOpacity="0.06"
          />
        </linearGradient>
        <linearGradient
          id="jz-hero-plane-coral"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="var(--color-coral)" stopOpacity="0.14" />
          <stop
            offset="100%"
            stopColor="var(--color-violet)"
            stopOpacity="0.04"
          />
        </linearGradient>
        <pattern
          id="jz-hero-dots"
          width="30"
          height="30"
          patternUnits="userSpaceOnUse"
        >
          <circle
            cx="2"
            cy="2"
            r="1.4"
            fill="var(--color-indigo)"
            opacity="0.55"
          />
        </pattern>
      </defs>

      {/* fine dot-grid texture, right two-thirds of the field */}
      <rect
        x="640"
        y="-60"
        width="1020"
        height="1160"
        fill="url(#jz-hero-dots)"
        opacity="0.26"
      />

      {/* layered translucent planes */}
      <g style={{ mixBlendMode: "multiply" }}>
        <polygon
          points="760,-80 1680,120 1560,560 700,340"
          fill="url(#jz-hero-plane-a)"
        />
        <polygon
          points="880,180 1640,20 1600,540 980,660"
          fill="url(#jz-hero-plane-b)"
        />
        <polygon
          points="1120,-40 1500,60 1420,320 1060,240"
          fill="url(#jz-hero-plane-coral)"
        />
        <polygon
          points="-120,510 610,660 460,1060 -220,960"
          fill="var(--color-indigo-light)"
          opacity="0.55"
        />
        <polygon
          points="140,650 560,720 480,1030 60,960"
          fill="var(--color-violet)"
          opacity="0.09"
        />
        <polygon
          points="1180,560 1620,640 1560,980 1140,900"
          fill="var(--color-indigo)"
          opacity="0.08"
        />
      </g>

      {/* primary construction lines, upper-right to lower-left */}
      <g stroke="var(--color-indigo)" strokeWidth="1" opacity="0.2">
        <line x1="1600" y1="-680" x2="0" y2="60" />
        <line x1="1600" y1="-500" x2="0" y2="240" />
        <line x1="1600" y1="-320" x2="0" y2="420" />
        <line x1="1600" y1="-140" x2="0" y2="600" />
        <line x1="1600" y1="40" x2="0" y2="780" />
        <line x1="1600" y1="220" x2="0" y2="960" />
        <line x1="1600" y1="400" x2="0" y2="1140" />
      </g>
      <g
        stroke="var(--color-violet)"
        strokeWidth="1"
        opacity="0.13"
        strokeDasharray="2 10"
      >
        <line x1="1600" y1="-360" x2="0" y2="340" />
        <line x1="1600" y1="60" x2="0" y2="760" />
        <line x1="1600" y1="480" x2="0" y2="1180" />
      </g>

      {/* crosshatch — faint opposing diagonal for a woven, textured feel */}
      <g stroke="var(--color-indigo)" strokeWidth="1" opacity="0.07">
        <line x1="900" y1="-80" x2="1680" y2="620" />
        <line x1="1080" y1="-80" x2="1680" y2="440" />
        <line x1="700" y1="120" x2="1400" y2="820" />
        <line x1="520" y1="280" x2="1180" y2="900" />
      </g>

      {/* tick marks along two construction lines */}
      <g stroke="var(--color-indigo)" strokeWidth="1" opacity="0.28">
        <line x1="1240" y1="88" x2="1252" y2="64" />
        <line x1="1080" y1="148" x2="1092" y2="124" />
        <line x1="920" y1="208" x2="932" y2="184" />
        <line x1="760" y1="268" x2="772" y2="244" />
        <line x1="600" y1="328" x2="612" y2="304" />
        <line x1="440" y1="388" x2="452" y2="364" />
      </g>
      <g stroke="var(--color-violet)" strokeWidth="1" opacity="0.22">
        <line x1="1360" y1="500" x2="1372" y2="476" />
        <line x1="1200" y1="560" x2="1212" y2="536" />
        <line x1="1040" y1="620" x2="1052" y2="596" />
        <line x1="880" y1="680" x2="892" y2="656" />
      </g>

      {/* contour lines — nested, topographic layering */}
      <g
        fill="none"
        stroke="var(--color-violet)"
        opacity="0.22"
        strokeWidth="1.5"
      >
        <path d="M 1560 60 C 1300 0, 980 130, 840 340 C 700 550, 800 760, 640 900" />
        <path d="M 1600 200 C 1360 150, 1080 260, 960 460 C 840 660, 900 830, 740 960" />
      </g>
      <g
        fill="none"
        stroke="var(--color-indigo)"
        opacity="0.15"
        strokeWidth="1.5"
      >
        <path d="M 1460 -40 C 1220 -80, 920 60, 800 260 C 680 460, 720 640, 560 780" />
        <path d="M 1600 380 C 1400 340, 1160 420, 1060 580 C 960 740, 1000 880, 860 980" />
      </g>
      <g
        fill="none"
        stroke="var(--color-coral)"
        opacity="0.16"
        strokeWidth="1.5"
      >
        <path d="M 1380 140 C 1180 110, 960 220, 880 380" />
      </g>

      {/* rough coral marks, upper right, resolving toward lower left */}
      <g fill="none" stroke="var(--color-coral)" strokeLinecap="round">
        <path
          d="M 1300 90 Q 1330 60, 1360 92 T 1420 85"
          strokeWidth="3"
          opacity="0.6"
        />
        <path
          d="M 1250 160 Q 1275 140, 1300 168"
          strokeWidth="2.5"
          opacity="0.45"
        />
        <path
          d="M 1400 200 Q 1420 178, 1444 200"
          strokeWidth="2.5"
          opacity="0.4"
        />
        <path
          d="M 1130 260 Q 1152 240, 1176 262"
          strokeWidth="2"
          opacity="0.32"
        />
        <path
          d="M 980 340 Q 1000 322, 1022 342"
          strokeWidth="2"
          opacity="0.26"
        />
        <path
          d="M 860 420 Q 878 404, 898 422"
          strokeWidth="1.75"
          opacity="0.2"
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
