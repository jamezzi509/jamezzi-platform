import { describe, expect, it } from "vitest";
import {
  computePlacement,
  placementQuestions,
} from "@/content/english-placement-quiz";

function answerAllCorrect(): Record<number, number> {
  const answers: Record<number, number> = {};
  for (const question of placementQuestions) {
    answers[question.id] = question.correct;
  }
  return answers;
}

describe("English placement quiz", () => {
  it("places a student with no correct answers at the very start", () => {
    expect(computePlacement({}).num).toBe(1);
  });

  it("places a student who answers everything correctly at the top band", () => {
    expect(computePlacement(answerAllCorrect()).num).toBe(10);
  });

  it("stops advancing at the first band where fewer than 2 answers are correct", () => {
    const answers = answerAllCorrect();
    const bandBQuestions = placementQuestions.filter((q) => q.band === "B");
    answers[bandBQuestions[0].id] = -1;
    answers[bandBQuestions[1].id] = -1;

    expect(computePlacement(answers).num).toBe(2);
  });

  it("has 15 questions across 5 bands", () => {
    expect(placementQuestions).toHaveLength(15);
    const bands = new Set(placementQuestions.map((q) => q.band));
    expect(bands.size).toBe(5);
  });
});
