import { describe, expect, it } from "vitest";
import { englishModules } from "@/content/english-course";

describe("English for Beginners structure", () => {
  it("lists all 18 modules from the course brief, in order", () => {
    expect(englishModules).toHaveLength(18);
    expect(englishModules.map((module) => module.number)).toEqual(
      Array.from({ length: 18 }, (_, index) => index + 1),
    );
  });

  it("starts with Your First English and ends with Think in English", () => {
    expect(englishModules[0].title).toBe("Your First English");
    expect(englishModules.at(-1)?.title).toBe("Think in English");
  });
});
