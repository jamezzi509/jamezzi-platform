"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/ui/container";
import { ArrowRightIcon } from "@/components/ui/icons";
import { courses, type CourseSummary } from "@/content/courses";
import { cn } from "@/lib/cn";

type Filter = "all" | "launching-first" | "free" | CourseSummary["category"];

const filters: Array<{ value: Filter; label: string }> = [
  { value: "all", label: "All Courses" },
  { value: "launching-first", label: "Launching First" },
  { value: "free", label: "Free" },
  { value: "technology", label: "Technology" },
  { value: "business", label: "Business" },
];

const categoryLabels: Record<CourseSummary["category"], string> = {
  foundation: "Foundation",
  technology: "Technology",
  business: "Business",
};

export function CourseLibrary() {
  const [filter, setFilter] = useState<Filter>("all");
  const visibleCourses = courses.filter((course) => {
    if (filter === "all") return true;
    if (filter === "launching-first")
      return course.availability === "launching-first";
    if (filter === "free") return course.free;
    return course.category === filter;
  });

  return (
    <main className="bg-paper pt-28 pb-20 lg:pt-36 lg:pb-28">
      <Container>
        <header className="grid gap-7 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:gap-24">
          <div>
            <p className="text-eyebrow text-indigo-dark">ONLINE COURSES</p>
            <h1 className="text-editorial-headline text-ink mt-4">
              Learn a real skill. Build from there.
            </h1>
          </div>
          <div>
            <p className="text-intro text-muted max-w-xl">
              Clear, self-paced learning designed around useful outcomes—not
              passive watching or technical language you cannot apply.
            </p>
            <Link
              href="/sign-in"
              className="text-button text-indigo-dark mt-5 inline-flex min-h-11 items-center gap-2"
            >
              Already learning? Sign in
              <ArrowRightIcon className="size-4" />
            </Link>
          </div>
        </header>

        <div
          className="border-border mt-12 flex gap-2 overflow-x-auto border-y py-4 lg:mt-16"
          aria-label="Filter courses"
        >
          {filters.map((item) => (
            <button
              key={item.value}
              type="button"
              aria-pressed={filter === item.value}
              onClick={() => setFilter(item.value)}
              className={cn(
                "text-button min-h-11 shrink-0 rounded-full px-5 transition-colors",
                filter === item.value
                  ? "bg-ink text-white"
                  : "border-border text-ink hover:border-indigo border bg-white",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <p aria-live="polite" className="text-metadata text-muted">
            {visibleCourses.length}{" "}
            {visibleCourses.length === 1 ? "course" : "courses"}
          </p>
          <p className="text-metadata text-muted">Self-paced learning</p>
        </div>

        <section
          aria-label="Course catalog"
          className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {visibleCourses.map((course, index) => (
            <CourseCard key={course.slug} course={course} index={index + 1} />
          ))}
        </section>

        <section className="bg-night rounded-showcase text-night-text mt-16 grid gap-8 p-7 md:p-10 lg:mt-24 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
          <div>
            <p className="text-eyebrow text-night-muted">
              START FREE—NO ACCOUNT REQUIRED
            </p>
            <h2 className="text-feature-headline-sm text-night-text mt-4">
              Begin with English for Beginners.
            </h2>
            <p className="text-body text-night-muted mt-4 max-w-2xl">
              Open the lessons, practice, and save progress on this device.
              Create a free account later only if you want cloud sync and a
              certificate.
            </p>
          </div>
          <Link
            href="/academy/courses/english-for-beginners"
            className="bg-paper text-button text-ink inline-flex min-h-12 items-center justify-center gap-2 rounded-[10px] px-6"
          >
            Explore Free English <ArrowRightIcon className="size-4" />
          </Link>
        </section>
      </Container>
    </main>
  );
}

function CourseCard({
  course,
  index,
}: {
  course: CourseSummary;
  index: number;
}) {
  return (
    <Link
      href={`/academy/courses/${course.slug}`}
      className="rounded-showcase border-border group flex min-h-[360px] flex-col overflow-hidden border bg-white transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(15,15,15,0.08)]"
    >
      <div
        className={cn(
          "relative flex h-36 items-end overflow-hidden p-5",
          course.category === "foundation" && "bg-[#f0edff]",
          course.category === "technology" && "bg-[#eaf1fe]",
          course.category === "business" && "bg-[#fdefe6]",
        )}
      >
        <span className="font-display text-ink/10 absolute -top-10 -right-2 text-[150px] leading-none">
          {String(index).padStart(2, "0")}
        </span>
        <p className="text-eyebrow text-ink relative">
          {categoryLabels[course.category]}
        </p>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-5">
          <h2 className="text-card-title text-ink group-hover:text-indigo-dark transition-colors">
            {course.title}
          </h2>
          <span className="text-button text-indigo-dark shrink-0">
            {course.free
              ? "Free"
              : course.price === null
                ? "Price soon"
                : `$${course.price}`}
          </span>
        </div>
        <p className="text-metadata text-indigo-dark mt-3">
          {course.availability === "launching-first"
            ? "Launching first"
            : "Planned"}
        </p>
        <p className="text-body text-muted mt-4 flex-1">{course.description}</p>
        <span className="text-button text-indigo-dark mt-6 inline-flex items-center gap-2">
          View Course
          <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
