export const courseProgressChangedEvent = "jamezzi:course-progress-changed";

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
