import type { CompetencyRating } from "@/content/computer-rebuild/schema";

/**
 * The single source of truth for the seven core competencies rated both at
 * the course's start (skills-intake.ts) and its end (Checkpoint 4's
 * readiness reflection). Shared so the two records line up index-for-index
 * for the growth-summary comparison — duplicating this list in both places
 * would risk them drifting apart.
 */
export const computerRebuildCoreCompetencies: CompetencyRating[] = [
  { skillHt: "Mwen ka òganize fichye mwen yo.", skillEn: "I can organize my files." },
  { skillHt: "Mwen ka enstale lojisyèl san danje.", skillEn: "I can install software safely." },
  {
    skillHt: "Mwen konnen diferans ant Wi-Fi ak entènèt.",
    skillEn: "I know the difference between Wi-Fi and the internet.",
  },
  {
    skillHt: "Mwen konnen kijan pou evite eskrokri komen yo.",
    skillEn: "I know how to avoid common scams.",
  },
  {
    skillHt: "Mwen ka rezoud pwoblèm òdinatè senp.",
    skillEn: "I can solve simple computer problems.",
  },
  {
    skillHt: "Mwen ka chwazi bon òdinatè pou bezwen mwen.",
    skillEn: "I can choose the right computer for my needs.",
  },
  {
    skillHt: "Mwen ka kominike pwofesyonèlman pa imèl.",
    skillEn: "I can communicate professionally by email.",
  },
];

export const computerRebuildConfidenceScaleHt: [string, string, string] = [
  "Mwen pa ka fè sa toujou",
  "Mwen ta ka fè l ak èd",
  "Mwen ka fè l poukont mwen",
];
