import { EnglishLessonPlayer } from "@/components/academy/english-lesson-player";

export function EnglishWelcomeLesson({ lessonSlug }: { lessonSlug: string }) {
  return <EnglishLessonPlayer lessonSlug={lessonSlug} />;
}
