import { describe, expect, it } from "vitest";
import { computerEssentialsLessons } from "@/content/computer-essentials-lessons";
import { computerPremiumLessons } from "@/content/computer-lessons-premium";

describe("Computer & Internet Essentials curriculum", () => {
  it("Module 1 starts with welcome and ends with the first digital mission", () => {
    const moduleOneLessons = computerEssentialsLessons.filter(
      (lesson) => lesson.moduleNumber === 1,
    );
    expect(moduleOneLessons[0]?.slug).toBe("welcome-to-computers");
    expect(moduleOneLessons.at(-1)?.slug).toBe("first-digital-mission");
  });

  it("Module 2 starts with the monitor and ends with its mission", () => {
    const moduleTwoLessons = computerEssentialsLessons.filter(
      (lesson) => lesson.moduleNumber === 2,
    );
    expect(moduleTwoLessons[0]?.slug).toBe("the-monitor");
    expect(moduleTwoLessons.at(-1)?.slug).toBe("meet-your-computer-mission");
  });

  it("gives restart-vs-shutdown real platform-specific screenshots", () => {
    const lesson = computerPremiumLessons.find(
      (item) => item.slug === "restart-vs-shutdown",
    );
    expect(lesson?.platformExamples).toBeDefined();
    expect(lesson?.platformExamples?.map((p) => p.platform)).toEqual([
      "windows",
      "mac",
    ]);
    for (const example of lesson?.platformExamples ?? []) {
      expect(example.illustrationSrc).toMatch(/\.webp$/);
    }
  });

  it("exposes every lesson as available", () => {
    expect(
      computerEssentialsLessons.filter((lesson) => lesson.available),
    ).toHaveLength(computerEssentialsLessons.length);
  });

  it("has premium interactive content for every lesson", () => {
    const premiumSlugs = new Set(
      computerPremiumLessons.map((lesson) => lesson.slug),
    );
    expect(premiumSlugs.size).toBe(computerEssentialsLessons.length);
    expect(
      computerEssentialsLessons.every((lesson) =>
        premiumSlugs.has(lesson.slug),
      ),
    ).toBe(true);
  });

  it("gives every quiz exactly four options with a valid correct index", () => {
    for (const lesson of computerPremiumLessons) {
      expect(lesson.quiz.options).toHaveLength(4);
      expect(lesson.quiz.correctIndex).toBeGreaterThanOrEqual(0);
      expect(lesson.quiz.correctIndex).toBeLessThan(lesson.quiz.options.length);
    }
  });
});
