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

  it("Module 3 starts with the desktop and ends with its mission", () => {
    const moduleThreeLessons = computerEssentialsLessons.filter(
      (lesson) => lesson.moduleNumber === 3,
    );
    expect(moduleThreeLessons[0]?.slug).toBe("the-desktop");
    expect(moduleThreeLessons.at(-1)?.slug).toBe("using-your-computer-mission");
  });

  it("Module 4 starts with what-is-a-file-and-folder and ends with its mission", () => {
    const moduleFourLessons = computerEssentialsLessons.filter(
      (lesson) => lesson.moduleNumber === 4,
    );
    expect(moduleFourLessons[0]?.slug).toBe("what-is-a-file-and-folder");
    expect(moduleFourLessons.at(-1)?.slug).toBe("files-and-folders-mission");
  });

  it("Module 5 starts with wifi-and-connecting and ends with its mission", () => {
    const moduleFiveLessons = computerEssentialsLessons.filter(
      (lesson) => lesson.moduleNumber === 5,
    );
    expect(moduleFiveLessons[0]?.slug).toBe("wifi-and-connecting");
    expect(moduleFiveLessons.at(-1)?.slug).toBe("internet-mastery-mission");
  });

  it("Module 6 starts with what-is-email and ends with its mission", () => {
    const moduleSixLessons = computerEssentialsLessons.filter(
      (lesson) => lesson.moduleNumber === 6,
    );
    expect(moduleSixLessons[0]?.slug).toBe("what-is-email");
    expect(moduleSixLessons.at(-1)?.slug).toBe("email-mastery-mission");
  });

  it("Module 7 starts with installing-and-uninstalling-apps and ends with its mission", () => {
    const moduleSevenLessons = computerEssentialsLessons.filter(
      (lesson) => lesson.moduleNumber === 7,
    );
    expect(moduleSevenLessons[0]?.slug).toBe(
      "installing-and-uninstalling-apps",
    );
    expect(moduleSevenLessons.at(-1)?.slug).toBe("mobile-devices-mission");
  });

  it("Module 8 starts with google-drive and ends with its mission", () => {
    const moduleEightLessons = computerEssentialsLessons.filter(
      (lesson) => lesson.moduleNumber === 8,
    );
    expect(moduleEightLessons[0]?.slug).toBe("google-drive");
    expect(moduleEightLessons.at(-1)?.slug).toBe("google-ecosystem-mission");
  });

  it("gives screenshots-and-screen-recording steps for all four platforms", () => {
    const lesson = computerPremiumLessons.find(
      (item) => item.slug === "screenshots-and-screen-recording",
    );
    expect(lesson?.platformExamples?.map((p) => p.platform)).toEqual([
      "windows",
      "mac",
      "android",
      "iphone",
    ]);
    const withImages = lesson?.platformExamples?.filter(
      (p) => p.illustrationSrc,
    );
    expect(withImages?.map((p) => p.platform)).toEqual(["windows", "mac"]);
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
