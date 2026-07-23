/**
 * Illustration library for the "Break Through English" premium lesson shell.
 * Per the language-lesson-ui redesign skill: a consistent recurring two-
 * character cast (Ana / John) reused across every lesson instead of a new
 * character per lesson, built as real layered SVG (gradients, shading,
 * drop-shadow) rather than an abstract placeholder shape.
 *
 * Scene selection is derived purely from the lesson's existing `slug` /
 * `illustrationKey` fields -- no lesson content changes required.
 */

const skinA = "url(#lesson-skinA)";
const skinB = "url(#lesson-skinB)";
const shirtA = "url(#lesson-shirtA)";
const shirtB = "url(#lesson-shirtB)";

function Defs() {
  return (
    <defs>
      <linearGradient id="lesson-skyBg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F1F0FC" />
        <stop offset="100%" stopColor="#E4E1FA" />
      </linearGradient>
      <linearGradient id="lesson-skinA" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#F5C89A" />
        <stop offset="100%" stopColor="#E8A96B" />
      </linearGradient>
      <linearGradient id="lesson-skinB" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#8B5A3C" />
        <stop offset="100%" stopColor="#6E4229" />
      </linearGradient>
      <linearGradient id="lesson-shirtA" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#7D70E2" />
        <stop offset="100%" stopColor="#5B4FC9" />
      </linearGradient>
      <linearGradient id="lesson-shirtB" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#4FC993" />
        <stop offset="100%" stopColor="#2FA876" />
      </linearGradient>
    </defs>
  );
}

function SceneGround() {
  return (
    <>
      <rect width="420" height="260" rx="24" fill="url(#lesson-skyBg)" />
      <circle cx="365" cy="45" r="34" fill="#FCE3A8" opacity=".6" />
      <circle cx="45" cy="200" r="46" fill="#D8D3F7" opacity=".5" />
      <path d="M0 220 Q210 195 420 220 L420 260 L0 260Z" fill="#E4E1FA" />
    </>
  );
}

type Pose = "wave" | "point" | "raise-hand" | "neutral" | "arms-out";

function Character({
  x,
  y,
  variant,
  pose,
  flip = false,
}: {
  x: number;
  y: number;
  variant: "a" | "b";
  pose: Pose;
  flip?: boolean;
}) {
  const skin = variant === "a" ? skinA : skinB;
  const shirt = variant === "a" ? shirtA : shirtB;
  const hair = variant === "a" ? "#3A2B1E" : "#1c1512";
  const brow = variant === "a" ? "#8a5230" : "#3d281a";
  const s = flip ? -1 : 1;

  return (
    <g transform={`translate(${x},${y})`}>
      <ellipse cx="0" cy="88" rx="46" ry="8" fill="#00000012" />
      <path d="M-38 88 Q-40 20 0 15 Q40 20 38 88 Z" fill={shirt} />
      <circle cx="0" cy="-18" r="34" fill={skin} />
      <path
        d={`M${-32 * s} -22 Q${-34 * s} -52 0 -54 Q${34 * s} -52 ${32 * s} -22 Q${30 * s} -34 0 -36 Q${-30 * s} -34 ${-32 * s} -22Z`}
        fill={hair}
      />
      <circle cx="-12" cy="-16" r="3.4" fill="#2a2a2a" />
      <circle cx="12" cy="-16" r="3.4" fill="#2a2a2a" />
      <path
        d="M-14 -2 Q0 8 14 -2"
        stroke={brow}
        strokeWidth="2.6"
        fill="none"
        strokeLinecap="round"
      />
      {pose === "wave" && (
        <>
          <path
            d={`M${32 * s} 20 Q${60 * s} 8 ${62 * s} -18`}
            stroke={skin}
            strokeWidth="13"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx={62 * s} cy="-20" r="9" fill={skin} />
        </>
      )}
      {pose === "point" && (
        <>
          <path
            d={`M${30 * s} 10 Q${64 * s} -6 ${78 * s} -14`}
            stroke={skin}
            strokeWidth="13"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx={80 * s} cy="-16" r="8" fill={skin} />
        </>
      )}
      {pose === "raise-hand" && (
        <>
          <path
            d={`M${28 * s} 14 Q${40 * s} -20 ${34 * s} -46`}
            stroke={skin}
            strokeWidth="13"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx={34 * s} cy="-48" r="9" fill={skin} />
        </>
      )}
      {pose === "arms-out" && (
        <>
          <path
            d={`M${30 * s} 14 Q${56 * s} 10 ${64 * s} 22`}
            stroke={skin}
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx={64 * s} cy="24" r="8" fill={skin} />
          <path
            d={`M${-30 * s} 14 Q${-56 * s} 10 ${-64 * s} 22`}
            stroke={skin}
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx={-64 * s} cy="24" r="8" fill={skin} />
        </>
      )}
    </g>
  );
}

function SpeechBubble({
  x,
  y,
  text,
}: {
  x: number;
  y: number;
  text: string;
}) {
  const width = Math.max(84, text.length * 11 + 40);
  return (
    <g transform={`translate(${x - width / 2},${y})`}>
      <path
        d={`M0 0 h${width - 30} a14 14 0 0 1 14 14 v22 a14 14 0 0 1 -14 14 h-${width / 2 - 30} l-10 14 -6 -14 h-${width / 2 - 40} a14 14 0 0 1 -14 -14 v-22 a14 14 0 0 1 14 -14 Z`}
        fill="#fff"
        stroke="#E1DEF7"
        strokeWidth="1.5"
      />
      <text
        x={width / 2}
        y="27"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontWeight="700"
        fontSize="17"
        fill="#534AB7"
      >
        {text}
      </text>
    </g>
  );
}

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 420 260"
      className="mx-auto block h-[180px] w-full max-w-[420px] sm:h-[210px]"
      style={{
        filter: "drop-shadow(0 10px 22px rgba(109,95,216,.18))",
      }}
      aria-hidden="true"
    >
      <Defs />
      <SceneGround />
      {children}
    </svg>
  );
}

/** Two characters greeting with a speech bubble -- the approved reference scene. */
export function GreetingScene({ bubbleText = "Hello!" }: { bubbleText?: string }) {
  return (
    <Frame>
      <Character x={120} y={150} variant="a" pose="wave" />
      <Character x={280} y={150} variant="b" pose="wave" flip />
      <SpeechBubble x={200} y={30} text={bubbleText} />
    </Frame>
  );
}

/** John pointing something out to Ana, used for vocabulary/description lessons. */
export function PointingScene({ bubbleText = "Look!" }: { bubbleText?: string }) {
  return (
    <Frame>
      <Character x={130} y={155} variant="a" pose="neutral" />
      <Character x={280} y={150} variant="b" pose="point" flip />
      <SpeechBubble x={230} y={26} text={bubbleText} />
    </Frame>
  );
}

/** Ana with a raised hand asking a question. */
export function QuestionScene({ bubbleText = "Who?" }: { bubbleText?: string }) {
  return (
    <Frame>
      <Character x={150} y={158} variant="a" pose="raise-hand" />
      <Character x={290} y={158} variant="b" pose="neutral" flip />
      <SpeechBubble x={190} y={14} text={bubbleText} />
    </Frame>
  );
}

/** Both characters, arms open -- used for feelings/description/family lessons. */
export function TogetherScene({ bubbleText }: { bubbleText?: string }) {
  return (
    <Frame>
      <Character x={150} y={155} variant="a" pose="arms-out" />
      <Character x={280} y={155} variant="b" pose="arms-out" flip />
      {bubbleText && <SpeechBubble x={215} y={22} text={bubbleText} />}
    </Frame>
  );
}

/** Weather scene: John under a sun/cloud, pointing at the sky. */
export function WeatherScene({ bubbleText = "Sunny!" }: { bubbleText?: string }) {
  return (
    <Frame>
      <circle cx="130" cy="60" r="26" fill="#FCE3A8" />
      <g transform="translate(240,50)">
        <ellipse cx="0" cy="10" rx="34" ry="18" fill="#fff" opacity=".9" />
        <ellipse cx="24" cy="4" rx="26" ry="16" fill="#fff" opacity=".9" />
        <ellipse cx="-22" cy="6" rx="24" ry="15" fill="#fff" opacity=".9" />
      </g>
      <Character x={200} y={165} variant="a" pose="point" />
      <SpeechBubble x={260} y={16} text={bubbleText} />
    </Frame>
  );
}

/** Ana holding up fingers for counting/numbers lessons. */
export function CountingScene({ bubbleText = "1, 2, 3…" }: { bubbleText?: string }) {
  return (
    <Frame>
      <Character x={150} y={158} variant="a" pose="raise-hand" />
      <g transform="translate(184,74)">
        <rect x="-6" y="-30" width="12" height="34" rx="6" fill={skinA} />
        <rect x="12" y="-26" width="12" height="30" rx="6" fill={skinA} />
        <rect x="-24" y="-22" width="12" height="26" rx="6" fill={skinA} />
      </g>
      <Character x={290} y={158} variant="b" pose="neutral" flip />
      <SpeechBubble x={230} y={12} text={bubbleText} />
    </Frame>
  );
}

/** Upgraded, dedicated "welcome" scene for the very first lesson. */
export function WelcomeScene() {
  return <GreetingScene bubbleText="Hello!" />;
}

/** Alphabet blocks scene, characters presenting letters. */
export function AlphabetScene() {
  return (
    <Frame>
      <Character x={110} y={165} variant="a" pose="point" />
      <Character x={310} y={165} variant="b" pose="wave" flip />
      {["A", "B", "C"].map((letter, index) => (
        <g key={letter} transform={`translate(${168 + index * 44},70)`}>
          <rect
            width="38"
            height="38"
            rx="9"
            fill={index === 1 ? "url(#lesson-shirtB)" : "url(#lesson-shirtA)"}
          />
          <text
            x="19"
            y="26"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontWeight="800"
            fontSize="19"
            fill="#fff"
          >
            {letter}
          </text>
        </g>
      ))}
    </Frame>
  );
}

const slugSceneRules: { test: RegExp; Scene: typeof GreetingScene; bubble: string }[] = [
  { test: /alphabet|letter/, Scene: AlphabetScene, bubble: "" },
  { test: /weather/, Scene: WeatherScene, bubble: "" },
  { test: /number|count|how-many|age/, Scene: CountingScene, bubble: "1, 2, 3…" },
  { test: /question|ask/, Scene: QuestionScene, bubble: "?" },
  { test: /feel|family|describ|personality|character/, Scene: TogetherScene, bubble: "" },
  { test: /point|object|thing|vocabulary|word/, Scene: PointingScene, bubble: "Look!" },
];

/**
 * Chooses an illustration scene purely from the lesson's slug/illustrationKey
 * -- no lesson content is read or modified. Falls back to the generic
 * greeting scene (the two-character default the skill recommends) for any
 * lesson whose topic doesn't match a more specific scene.
 */
export function LessonIllustration({
  slug,
  illustrationKey,
  heroEmoji,
}: {
  slug: string;
  illustrationKey: "welcome" | "alphabet" | "emoji";
  heroEmoji?: string;
}) {
  if (illustrationKey === "welcome") return <WelcomeScene />;
  if (illustrationKey === "alphabet") return <AlphabetScene />;

  const rule = slugSceneRules.find((r) => r.test.test(slug));
  if (rule) {
    const { Scene, bubble } = rule;
    return bubble ? <Scene bubbleText={bubble} /> : <Scene />;
  }

  return <GreetingScene bubbleText={heroEmoji ?? "Hi!"} />;
}

/** Small recurring mascot for completion / correct-answer moments. */
export function LessonMascot({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 60"
      className={`size-[52px] shrink-0 ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="lesson-mascot-shirt" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7D70E2" />
          <stop offset="100%" stopColor="#5B4FC9" />
        </linearGradient>
      </defs>
      <circle cx="30" cy="30" r="28" fill="url(#lesson-mascot-shirt)" />
      <circle cx="21" cy="26" r="4" fill="#fff" />
      <circle cx="21" cy="26" r="2" fill="#2a2a2a" />
      <circle cx="39" cy="26" r="4" fill="#fff" />
      <circle cx="39" cy="26" r="2" fill="#2a2a2a" />
      <path
        d="M18 38 Q30 48 42 38"
        stroke="#fff"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
