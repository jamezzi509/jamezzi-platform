export const courseProgressChangedEvent = "jamezzi:course-progress-changed";
export const computerProgressStorageKey =
  "jamezzi:computer:essentials:completed";

const courseProgressPrefixes = {
  english: "jamezzi:english:",
  computer: "jamezzi:computer:",
} as const;

export type CourseProgressNamespace = keyof typeof courseProgressPrefixes;

export function clearCourseProgressFromBrowser(
  course: CourseProgressNamespace,
) {
  const keys: string[] = [];
  for (let index = 0; index < window.localStorage.length; index += 1) {
    const key = window.localStorage.key(index);
    if (key?.startsWith(courseProgressPrefixes[course])) keys.push(key);
  }
  keys.forEach((key) => window.localStorage.removeItem(key));
}

export function clearLessonProgressFromBrowser(
  progressStorageKey: string,
  lessonSlugs: string[],
) {
  const targets = new Set(lessonSlugs);
  const remaining = readCompletedLessons(progressStorageKey).filter(
    (slug) => !targets.has(slug),
  );
  window.localStorage.setItem(progressStorageKey, JSON.stringify(remaining));
  lessonSlugs.forEach((slug) =>
    window.localStorage.removeItem(
      `jamezzi:computer:essentials:lesson-state:${slug}`,
    ),
  );
  window.dispatchEvent(
    new CustomEvent(courseProgressChangedEvent, {
      detail: { storageKey: progressStorageKey },
    }),
  );
}

export function readCompletedLessons(storageKey: string): string[] {
  try {
    const parsed = JSON.parse(
      window.localStorage.getItem(storageKey) ?? "[]",
    ) as unknown;
    return Array.isArray(parsed)
      ? parsed.filter((value): value is string => typeof value === "string")
      : [];
  } catch {
    return [];
  }
}

export function saveCompletedLesson(
  storageKey: string,
  lessonSlug: string,
): "saved" | "existing" | "blocked" {
  try {
    const completed = readCompletedLessons(storageKey);
    if (completed.includes(lessonSlug)) return "existing";
    window.localStorage.setItem(
      storageKey,
      JSON.stringify([...completed, lessonSlug]),
    );
    window.dispatchEvent(
      new CustomEvent(courseProgressChangedEvent, {
        detail: { storageKey, lessonSlug },
      }),
    );
    return "saved";
  } catch {
    return "blocked";
  }
}

export function isProgressEventFor(event: Event, storageKey: string) {
  return (
    event instanceof CustomEvent &&
    (event.detail as { storageKey?: unknown } | undefined)?.storageKey ===
      storageKey
  );
}
