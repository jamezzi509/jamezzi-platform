import { describe, expect, it } from "vitest";
import { englishLevels } from "@/content/english-course";

describe("English for Beginners structure", () => {
  it("progresses through the four agreed levels", () => {
    expect(englishLevels.map((level) => level.title)).toEqual([
      "First English",
      "Everyday English",
      "Practical English",
      "English Confidence",
    ]);
  });

  it("starts with the essential Level 1 topics", () => {
    expect(englishLevels[0].topics).toEqual([
      "First words",
      "Pronunciation",
      "To be",
      "To have",
      "Questions",
    ]);
  });
});
