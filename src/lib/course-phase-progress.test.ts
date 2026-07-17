import { describe, expect, it } from "vitest";
import {
  canSaveCompletedLesson,
  isCoursePhaseComplete,
  type CourseEvidence,
} from "./course-phase-progress";

const empty: CourseEvidence = {
  missionDone: false,
  checkPassed: false,
  reflectionChosen: false,
};

describe("course phase progress", () => {
  it("never marks reading stages complete merely because they were opened", () => {
    for (const phase of ["learn", "words", "platform", "practice"] as const) {
      expect(
        isCoursePhaseComplete(phase, {
          missionDone: true,
          checkPassed: true,
          reflectionChosen: true,
        }),
      ).toBe(false);
    }
  });

  it("requires real evidence for mission, quiz, and reflection checks", () => {
    expect(isCoursePhaseComplete("mission", empty)).toBe(false);
    expect(isCoursePhaseComplete("check", empty)).toBe(false);
    expect(isCoursePhaseComplete("reflect", empty)).toBe(false);

    expect(
      isCoursePhaseComplete("mission", { ...empty, missionDone: true }),
    ).toBe(true);
    expect(
      isCoursePhaseComplete("check", { ...empty, checkPassed: true }),
    ).toBe(true);
    expect(
      isCoursePhaseComplete("reflect", {
        ...empty,
        reflectionChosen: true,
      }),
    ).toBe(true);
  });

  it("does not save a lesson until all required evidence exists", () => {
    expect(canSaveCompletedLesson(empty, true)).toBe(false);
    expect(
      canSaveCompletedLesson(
        { missionDone: true, checkPassed: true, reflectionChosen: false },
        true,
      ),
    ).toBe(false);
    expect(
      canSaveCompletedLesson(
        { missionDone: true, checkPassed: true, reflectionChosen: true },
        true,
      ),
    ).toBe(true);
  });
});
