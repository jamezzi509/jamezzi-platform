/**
 * Lightweight content schema for "Digital Marketing & AI" (internal build
 * codename: Dominate Digital). Unlike computer-rebuild's CourseLesson, this
 * course's lessons carry no block content here -- each module is a
 * self-contained simulator file (public/academy/digital-marketing-ai/module-<n>.html)
 * that renders its own lesson content in HT/FR/EN. This model exists only
 * for site-level sequencing: resume-card progress, the course path grid, and
 * resolving a lesson slug to the module simulator that serves it.
 */

export interface CourseLesson {
  id: string;
  slug: string;
  moduleId: string;
  order: number;
  titleHt: string;
  titleFr: string;
  titleEn: string;
}

export interface CourseModule {
  id: string;
  order: number;
  titleHt: string;
  titleFr: string;
  titleEn: string;
  purpose: string;
}
