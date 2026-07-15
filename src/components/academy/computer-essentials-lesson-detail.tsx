import { ComputerPremiumLessonPlayer } from "@/components/academy/computer-premium-lesson-player";
import { computerPremiumLessons } from "@/content/computer-lessons-premium";

export function ComputerEssentialsLessonDetail({
  lessonSlug,
}: {
  lessonSlug: string;
}) {
  const lesson =
    computerPremiumLessons.find((item) => item.slug === lessonSlug) ??
    computerPremiumLessons[0];
  return <ComputerPremiumLessonPlayer lesson={lesson} />;
}
