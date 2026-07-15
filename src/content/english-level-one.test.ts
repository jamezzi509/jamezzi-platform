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

    const moduleFiveLessons = englishLevelOneLessons.filter(
      (lesson) => lesson.moduleNumber === 5,
    );
    expect(moduleFiveLessons[0]?.slug).toBe("who-questions");
    expect(moduleFiveLessons.at(-1)?.slug).toBe("questions-mission");

    const moduleSixLessons = englishLevelOneLessons.filter(
      (lesson) => lesson.moduleNumber === 6,
    );
    expect(moduleSixLessons[0]?.slug).toBe("action-verbs-conjugation");
    expect(moduleSixLessons.at(-1)?.slug).toBe("action-verbs-mission");

    const moduleSevenLessons = englishLevelOneLessons.filter(
      (lesson) => lesson.moduleNumber === 7,
    );
    expect(moduleSevenLessons[0]?.slug).toBe("do-does-did");
    expect(moduleSevenLessons.at(-1)?.slug).toBe("power-verbs-mission");

    const moduleEightLessons = englishLevelOneLessons.filter(
      (lesson) => lesson.moduleNumber === 8,
    );
    expect(moduleEightLessons[0]?.slug).toBe("meeting-someone");
    expect(moduleEightLessons.at(-1)?.slug).toBe("conversations-mission");

    const moduleNineLessons = englishLevelOneLessons.filter(
      (lesson) => lesson.moduleNumber === 9,
    );
    expect(moduleNineLessons[0]?.slug).toBe("i-like-pattern");
    expect(moduleNineLessons.at(-1)?.slug).toBe("patterns-mission");

    const moduleTenLessons = englishLevelOneLessons.filter(
      (lesson) => lesson.moduleNumber === 10,
    );
    expect(moduleTenLessons[0]?.slug).toBe("apostrophe-confusion");
    expect(moduleTenLessons.at(-1)?.slug).toBe("confusing-english-mission");

    const moduleElevenLessons = englishLevelOneLessons.filter(
      (lesson) => lesson.moduleNumber === 11,
    );
    expect(moduleElevenLessons[0]?.slug).toBe("look-up-for-after");
    expect(moduleElevenLessons.at(-1)?.slug).toBe("phrasal-verbs-mission");

    const moduleTwelveLessons = englishLevelOneLessons.filter(
      (lesson) => lesson.moduleNumber === 12,
    );
    expect(moduleTwelveLessons[0]?.slug).toBe("computer-and-phone");
    expect(moduleTwelveLessons.at(-1)?.slug).toBe("technology-mission");
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
