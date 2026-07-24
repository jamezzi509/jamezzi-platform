import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ArrowRightIcon } from "@/components/ui/icons";
import {
  launchingFirstCourses,
  plannedCourses,
  type CourseSummary,
} from "@/content/courses";

const courseImages: Record<string, string> = {
  "english-for-beginners": "/images/academy/courses/english-for-beginners.webp",
  "computer-internet-essentials":
    "/images/academy/courses/computer-internet-essentials.webp",
  "digital-marketing-ai": "/images/academy/courses/digital-marketing-ai.webp",
};

export function CourseLibrary() {
  return (
    <main className="bg-paper pt-28 pb-24 lg:pt-36">
      <Container>
        <header className="grid gap-7 py-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:gap-24 lg:py-16">
          <div>
            <p className="text-eyebrow text-indigo-dark">ONLINE COURSES</p>
            <h1 className="text-editorial-headline text-ink mt-4">
              Learn something useful. Put it to work.
            </h1>
          </div>
          <p className="text-intro text-muted max-w-xl">
            Focused, self-paced learning designed around practical outcomes and
            skills you can use beyond the screen.
          </p>
        </header>

        <section aria-label="Available courses" className="grid gap-6 lg:grid-cols-2">
          {launchingFirstCourses.map((course, index) => (
            <CourseCard key={course.slug} course={course} wide={index === 0} />
          ))}
        </section>

        <section className="border-border mt-20 border-t pt-12">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-eyebrow text-indigo-dark">COMING LATER</p>
              <h2 className="text-feature-headline-sm text-ink mt-4">
                More paths are being shaped.
              </h2>
              <p className="text-body text-muted mt-4 max-w-sm">
                These courses are planned but are not available for purchase yet.
              </p>
            </div>
            <div className="border-border border-t">
              {plannedCourses.map((course) => (
                <div
                  key={course.slug}
                  className="border-border grid gap-3 border-b py-6 sm:grid-cols-[1fr_1.25fr_auto] sm:items-start sm:gap-8"
                >
                  <div>
                    <p className="text-metadata text-indigo-dark">COMING LATER</p>
                    <h3 className="text-card-title text-ink mt-1">{course.title}</h3>
                  </div>
                  <p className="text-body text-muted">{course.description}</p>
                  <p className="text-ink whitespace-nowrap text-base font-semibold">
                    {course.free ? "Free" : `$${course.price}`}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}

function CourseCard({
  course,
  wide = false,
}: {
  course: CourseSummary;
  wide?: boolean;
}) {
  const priceLabel = course.free ? "Free" : `$${course.price}`;

  return (
    <Link
      href={`/academy/courses/${course.slug}`}
      className={`group border-border overflow-hidden rounded-[22px] border bg-white ${wide ? "lg:col-span-2 lg:grid lg:grid-cols-[1.08fr_0.92fr]" : ""}`}
    >
      <div
        className={`relative overflow-hidden ${wide ? "min-h-[320px] lg:min-h-[430px]" : "aspect-[16/10]"}`}
      >
        <Image
          src={courseImages[course.slug]}
          alt=""
          fill
          sizes={
            wide
              ? "(max-width: 1023px) 100vw, 55vw"
              : "(max-width: 1023px) 100vw, 50vw"
          }
          className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
        />
      </div>
      <div className="flex flex-col justify-center p-7 lg:p-10">
        <div className="flex items-center justify-between gap-4">
          <p className="text-metadata text-indigo-dark">
            {course.category} · {course.free ? "OPEN ACCESS" : "LIFETIME ACCESS"}
          </p>
          <span className="rounded-full bg-[#f0edff] px-3 py-1 text-sm font-semibold text-indigo-dark">
            {priceLabel}
          </span>
        </div>
        <h2 className="text-feature-headline-sm text-ink mt-4">
          {course.title}
        </h2>
        <p className="text-body text-muted mt-4">{course.description}</p>
        <span className="text-button text-indigo-dark mt-7 inline-flex items-center gap-2">
          {course.free ? "Start Free Course" : `View Course · ${priceLabel}`}
          <ArrowRightIcon className="size-4" />
        </span>
      </div>
    </Link>
  );
}
