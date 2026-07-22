import type { CourseLesson } from "@/content/dominate-digital/schema";

/**
 * Real lessons for the modules that have a built simulator so far. Slugs
 * here must exactly match the MOD<n>_LESSON_SLUGS array inside that
 * module's HTML file (public/academy/digital-marketing-ai/module-<n>.html)
 * -- that file writes these same slugs into the shared completed-lessons
 * key once the module is finished, and this list is what the course page
 * and resume card use to compute progress and the next lesson to resume.
 */
export const dominateDigitalLessons: CourseLesson[] = [
  {
    id: "m1-l1",
    slug: "what-is-digital-marketing",
    moduleId: "m1",
    order: 1,
    titleHt: "Kisa Maketing Dijital Ye?",
    titleFr: "Qu'est-ce que le Marketing Digital ?",
    titleEn: "What Is Digital Marketing?",
  },
  {
    id: "m1-l2",
    slug: "digital-vs-traditional-marketing",
    moduleId: "m1",
    order: 2,
    titleHt: "Maketing Dijital kont Maketing Tradisyonèl",
    titleFr: "Marketing Digital vs. Traditionnel",
    titleEn: "Digital vs. Traditional Marketing",
  },
  {
    id: "m1-l3",
    slug: "the-customer-journey",
    moduleId: "m1",
    order: 3,
    titleHt: "Vwayaj Kliyan an",
    titleFr: "Le Parcours Client",
    titleEn: "The Customer Journey",
  },
  {
    id: "m1-l4",
    slug: "the-marketing-funnel",
    moduleId: "m1",
    order: 4,
    titleHt: "Antonwa Maketing an",
    titleFr: "L'Entonnoir de Marketing",
    titleEn: "The Marketing Funnel",
  },
  {
    id: "m1-l5",
    slug: "understanding-value",
    moduleId: "m1",
    order: 5,
    titleHt: "Konprann Valè",
    titleFr: "Comprendre la Valeur",
    titleEn: "Understanding Value",
  },
  {
    id: "m1-l6",
    slug: "myths-about-digital-marketing",
    moduleId: "m1",
    order: 6,
    titleHt: "Manti Yo Di sou Maketing Dijital",
    titleFr: "Mythes sur le Marketing Digital",
    titleEn: "Myths About Digital Marketing",
  },
  {
    id: "m1-l7",
    slug: "careers-in-digital-marketing",
    moduleId: "m1",
    order: 7,
    titleHt: "Karyè nan Maketing Dijital",
    titleFr: "Les Métiers du Marketing Digital",
    titleEn: "Careers in Digital Marketing",
  },
];

export function getDominateDigitalLesson(slug: string) {
  return dominateDigitalLessons.find((lesson) => lesson.slug === slug);
}
