import { describe, expect, it } from "vitest";
import {
  computeFinalExamResult,
  finalExamQuestions,
} from "@/content/english-final-exam";

describe("English final exam", () => {
  it("has exactly two self-contained questions per module, 1 through 18", () => {
    expect(finalExamQuestions).toHaveLength(36);

    for (let moduleNumber = 1; moduleNumber <= 18; moduleNumber += 1) {
      const questions = finalExamQuestions.filter(
        (question) => question.moduleNumber === moduleNumber,
      );
      expect(questions).toHaveLength(2);
    }
  });

  it("gives every question exactly four options with a valid correct index", () => {
    for (const question of finalExamQuestions) {
      expect(question.options).toHaveLength(4);
      expect(question.correctIndex).toBeGreaterThanOrEqual(0);
      expect(question.correctIndex).toBeLessThan(question.options.length);
    }
  });

  it("has unique question ids", () => {
    const ids = new Set(finalExamQuestions.map((question) => question.id));
    expect(ids.size).toBe(finalExamQuestions.length);
  });

  it("passes with a perfect score", () => {
    const answers = Object.fromEntries(
      finalExamQuestions.map((question) => [
        question.id,
        question.correctIndex,
      ]),
    );
    const result = computeFinalExamResult(answers);
    expect(result.correctCount).toBe(36);
    expect(result.score).toBe(1);
    expect(result.passed).toBe(true);
    expect(result.missedModules).toEqual([]);
  });

  it("fails with zero correct answers and flags every module", () => {
    const answers = Object.fromEntries(
      finalExamQuestions.map((question) => [
        question.id,
        (question.correctIndex + 1) % question.options.length,
      ]),
    );
    const result = computeFinalExamResult(answers);
    expect(result.correctCount).toBe(0);
    expect(result.passed).toBe(false);
    expect(result.missedModules).toHaveLength(18);
  });

  it("requires at least 29 of 36 correct (80%) to pass", () => {
    const wrongFirst28 = finalExamQuestions
      .slice(0, 28)
      .map((question) => [
        question.id,
        (question.correctIndex + 1) % question.options.length,
      ]);
    const rightRest = finalExamQuestions
      .slice(28)
      .map((question) => [question.id, question.correctIndex]);

    const failingResult = computeFinalExamResult(
      Object.fromEntries([...wrongFirst28, ...rightRest]),
    );
    expect(failingResult.correctCount).toBe(8);
    expect(failingResult.passed).toBe(false);

    const passingAnswers = Object.fromEntries(
      finalExamQuestions.map((question, index) => [
        question.id,
        index < 7
          ? (question.correctIndex + 1) % question.options.length
          : question.correctIndex,
      ]),
    );
    const passingResult = computeFinalExamResult(passingAnswers);
    expect(passingResult.correctCount).toBe(29);
    expect(passingResult.passed).toBe(true);
  });
});
