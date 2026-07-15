import { describe, expect, it } from "vitest";
import { englishLevelOneLessons } from "@/content/english-level-one";

describe("First English curriculum", () => {
  it("moves from first words to a real conversation mission", () => {
    expect(englishLevelOneLessons[0].slug).toBe("hello-and-goodbye");
    expect(englishLevelOneLessons.at(-1)?.slug).toBe(
      "first-conversation-mission",
    );
  });

  it("only exposes lessons that have actually been built", () => {
    expect(
      englishLevelOneLessons.filter((lesson) => lesson.available),
    ).toHaveLength(1);
  });
});
