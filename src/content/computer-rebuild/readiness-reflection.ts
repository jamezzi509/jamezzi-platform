import type { ReadinessReflection } from "@/content/computer-rebuild/schema";

/**
 * Confidence Checkpoint 4 — Section 8.4: "the capstone rubric plus final
 * readiness reflection." Unscored by design (Section 12.4's progress
 * language distinguishes "Checkpoint passed" from a readiness reflection,
 * and there is no submitted capstone artifact in this platform to grade).
 * Comes after the capstone (Module 14, lesson 7) and the two closing
 * lessons, gated the same way as Checkpoints 1-3: locked until every lesson
 * in the prerequisite modules is complete.
 */
export const computerRebuildReadinessReflections: ReadinessReflection[] = [
  {
    id: "checkpoint-4",
    order: 4,
    afterModuleId: "m14",
    titleHt: "Confidence Checkpoint 4 — Chèk Prepare Dijital Ou",
    titleEn: "Confidence Checkpoint 4 — Digital Readiness Check",
    intro:
      "Ou fin konplete Kapstòn nan ak tout 14 modil kou a. Sa a se PA yon egzamen — pa gen okenn nòt. Se yon moman pou ou fè yon pòz epi reflechi onètman sou kijan ou santi w kounye a, konpare ak lè ou te kòmanse. Repons ou yo rete antre ou, epi ou ka retounen chanje yo nenpòt lè.",
    scaleLabelsHt: [
      "Mwen pa ka fè sa toujou",
      "Mwen ta ka fè l ak èd",
      "Mwen ka fè l poukont mwen",
    ],
    competencies: [
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
    ],
    openQuestions: [
      { id: "most-confident", promptHt: "Ki konpetans ou pi konfyan de li?" },
      { id: "practice-more", promptHt: "Ki konpetans ou ta renmen pratike plis?" },
      { id: "still-nervous", promptHt: "Ki travay ki fè w toujou santi w nève?" },
      { id: "next-course", promptHt: "Ki pwochen kou ou ta renmen pran?" },
    ],
  },
];

export function getComputerRebuildReadinessReflection(id: string) {
  return computerRebuildReadinessReflections.find((r) => r.id === id);
}
