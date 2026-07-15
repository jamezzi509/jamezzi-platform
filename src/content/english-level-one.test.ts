import { describe, expect, it } from "vitest";
import { englishLevelOneLessons } from "@/content/english-level-one";
import { englishPremiumLessons } from "@/content/english-lessons-premium";

describe("First English curriculum", () => {
  it("moves from first words through each module's mission lesson", () => {
    expect(englishLevelOneLessons[0].slug).toBe("hello-and-goodbye");

    const moduleOneLessons = englishLevelOneLessons.filter(
      (lesson) => lesson.moduleNumber === 1,
    );
    expect(moduleOneLessons.at(-1)?.slug).toBe("first-conversation-mission");

    const moduleTwoLessons = englishLevelOneLessons.filter(
      (lesson) => lesson.moduleNumber === 2,
    );
    expect(moduleTwoLessons[0]?.slug).toBe("am-is-are");
    expect(moduleTwoLessons.at(-1)?.slug).toBe("to-be-mission");

    const moduleThreeLessons = englishLevelOneLessons.filter(
      (lesson) => lesson.moduleNumber === 3,
    );
    expect(moduleThreeLessons[0]?.slug).toBe("have-and-has");
    expect(moduleThreeLessons.at(-1)?.slug).toBe("have-mission");

    const moduleFourLessons = englishLevelOneLessons.filter(
      (lesson) => lesson.moduleNumber === 4,
    );
    expect(moduleFourLessons[0]?.slug).toBe("days-of-the-week");
    expect(moduleFourLessons.at(-1)?.slug).toBe("daily-life-mission");
  });

  it("exposes the complete Level 1 lesson set", () => {
    expect(
      englishLevelOneLessons.filter((lesson) => lesson.available),
    ).toHaveLength(englishLevelOneLessons.length);
  });

  it("has premium interactive content for every classroom lesson", () => {
    const premiumSlugs = new Set(
      englishPremiumLessons.map((lesson) => lesson.slug),
    );
    expect(premiumSlugs.size).toBe(englishLevelOneLessons.length);
    expect(
      englishLevelOneLessons.every((lesson) => premiumSlugs.has(lesson.slug)),
    ).toBe(true);
  });
});
