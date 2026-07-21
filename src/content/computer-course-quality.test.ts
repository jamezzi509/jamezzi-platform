import { describe, expect, it } from "vitest";
import {
  computerLessonQualityRecords,
  validateApprovedCourseQuality,
} from "@/content/computer-course-quality";
import { computerLessonsV2 } from "@/content/computer-course-v2";

describe("Jamezzi paid-course quality gate", () => {
  it("requires one explicit quality record for every wired lesson", () => {
    const lessonSlugs = computerLessonsV2.map((lesson) => lesson.slug).sort();
    const qualitySlugs = computerLessonQualityRecords
      .map((record) => record.slug)
      .sort();

    expect(new Set(qualitySlugs).size).toBe(qualitySlugs.length);
    expect(qualitySlugs).toEqual(lessonSlugs);
  });

  it("does not allow an approved lesson to bypass the paid-course evidence gate", () => {
    const failures = computerLessonQualityRecords.flatMap((record) =>
      validateApprovedCourseQuality(record).map(
        (failure) => `${record.slug}: ${failure}`,
      ),
    );

    expect(failures).toEqual([]);
  });
});
