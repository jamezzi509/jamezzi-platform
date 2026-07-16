import {
  computerRebuildConfidenceScaleHt,
  computerRebuildCoreCompetencies,
} from "@/content/computer-rebuild/competencies";
import type { SkillsIntake } from "@/content/computer-rebuild/schema";

/**
 * The "before" half of the growth-summary comparison — a short, skippable
 * self-rating shown once during onboarding, before Module 1. Reuses the same
 * competencies and scale as Checkpoint 4's readiness reflection so the two
 * records compare directly by index.
 */
export const computerRebuildSkillsIntake: SkillsIntake = {
  id: "skills-intake",
  titleHt: "Anvan Ou Kòmanse — Kijan Ou Santi W Kounye a?",
  titleEn: "Before You Start — How Do You Feel Right Now?",
  intro:
    "Sa a PA yon egzamen — pa gen okenn nòt ni repons kòrèk. Se yon foto vit sou kijan ou santi w kounye a, anvan ou kòmanse. Nan fen kou a, n ap montre w kijan ou grandi konpare ak jodi a. Ou ka sote etap sa a si ou pito.",
  scaleLabelsHt: computerRebuildConfidenceScaleHt,
  competencies: computerRebuildCoreCompetencies,
};
