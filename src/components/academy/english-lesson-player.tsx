import { EnglishPremiumLessonPlayer } from "@/components/academy/english-premium-lesson-player";
import { englishPremiumLessons } from "@/content/english-lessons-premium";

export function EnglishLessonPlayer({ lessonSlug }: { lessonSlug: string }) {
  const lesson =
    englishPremiumLessons.find((item) => item.slug === lessonSlug) ??
    englishPremiumLessons[0];
  return <EnglishPremiumLessonPlayer lesson={lesson} />;
}
