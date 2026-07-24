import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ArrowRightIcon } from "@/components/ui/icons";
import {
  launchingFirstCourses,
  plannedCourses,
  type CourseSummary,
} from "@/content/courses";

const coursePresentation: Record<
  string,
  {
    image: string;
    alt: string;
    type: string;
    scope: string;
    benefit: string;
  }
> = {
  "english-for-beginners": {
    image: "/images/academy/courses/english-for-beginners.webp",
    alt: "An adult learner practicing practical English",
    type: "FREE COURSE",
    scope: "151 lessons · Learn at your own pace",
    benefit: "Everyday English for conversations, work, and daily life.",
  },
  "computer-internet-essentials": {
    image: "/images/academy/courses/computer-internet-essentials-v2.webp",
    alt: "An adult learner building practical computer skills at home",
    type: "COMPLETE COURSE",
    scope: "14 modules · Interactive practice · Certificate",
    benefit: "Use a computer, the internet, files, email, and online services with confidence.",
  },
  "digital-marketing-ai": {
    image: "/images/academy/courses/digital-marketing-ai-v2.webp",
    alt: "An entrepreneur planning a digital marketing campaign",
    type: "COMPLETE COURSE",
    scope: "20 modules · Business assignments · Certificate",
    benefit: "Build a complete marketing system for your business or client work.",
  },
};

export function CourseLibrary() {
  return (
    <main className="bg-[#f7f6f2] pt-28 pb-24 lg:pt-36">
      <Container>
        <header className="max-w-4xl py-12 lg:py-16">
          <p className="text-eyebrow text-indigo-dark">JAMEZZI ACADEMY</p>
          <h1 className="text-editorial-headline text-ink mt-4">
            Courses built for progress—not passive watching.
          </h1>
          <p className="text-intro text-muted mt-6 max-w-3xl">
            Clear instruction, hands-on practice, assessments, and real work you
            can complete at your own pace. See exactly what is included before
            you enroll.
          </p>
        </header>

        <section aria-label="Available courses" className="grid gap-7 lg:grid-cols-2">
          {launchingFirstCourses.map((course, index) => (
            <CourseCard key={course.slug} course={course} wide={index === 0} />
          ))}
        </section>

        <section className="border-border mt-20 border-t pt-12">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-eyebrow text-indigo-dark">IN DEVELOPMENT</p>
              <h2 className="text-feature-headline-sm text-ink mt-4">
                What Jamezzi is building next.
              </h2>
              <p className="text-body text-muted mt-4 max-w-sm">
                These are planned programs. Their prices are shown for
                transparency, but enrollment is not open yet.
              </p>
            </div>
            <div className="border-border border-t">
              {plannedCourses.map((course) => (
                <div
                  key={course.slug}
                  className="border-border grid gap-3 border-b py-6 sm:grid-cols-[1fr_1.25fr_auto] sm:items-start sm:gap-8"
                >
                  <div>
                    <p className="text-metadata text-muted">ENROLLMENT NOT OPEN</p>
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
  const presentation = coursePresentation[course.slug];
  const priceLabel = course.free ? "Free" : `$${course.price}`;

  return (
    <Link
      href={`/academy/courses/${course.slug}`}
      className={`group border-border overflow-hidden rounded-[24px] border bg-white shadow-[0_16px_50px_rgba(29,24,46,0.06)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_65px_rgba(29,24,46,0.11)] ${wide ? "lg:col-span-2 lg:grid lg:grid-cols-[1.08fr_0.92fr]" : ""}`}
    >
      <div
        className={`relative overflow-hidden bg-[#e8e5df] ${wide ? "min-h-[340px] lg:min-h-[480px]" : "aspect-[4/3]"}`}
      >
        <Image
          src={presentation.image}
          alt={presentation.alt}
          fill
          sizes={
            wide
              ? "(max-width: 1023px) 100vw, 55vw"
              : "(max-width: 1023px) 100vw, 50vw"
          }
          className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        />
      </div>
      <div className="flex flex-col justify-center p-7 sm:p-8 lg:p-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-metadata text-indigo-dark">{presentation.type}</p>
            <p className="text-sm text-muted mt-1">{presentation.scope}</p>
          </div>
          <span className="rounded-full bg-[#f0edff] px-3.5 py-1.5 text-sm font-bold text-indigo-dark">
            {priceLabel}
          </span>
        </div>
        <h2 className="text-feature-headline-sm text-ink mt-5">{course.title}</h2>
        <p className="text-body text-ink/80 mt-4">{presentation.benefit}</p>
        <div className="border-border mt-6 border-t pt-5">
          <span className="text-button text-indigo-dark inline-flex items-center gap-2">
            {course.free ? "View Free Course" : "See Curriculum & Enrollment"}
            <ArrowRightIcon className="size-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
