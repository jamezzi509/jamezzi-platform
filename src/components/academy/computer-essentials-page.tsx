import Link from "next/link";
import { ComputerEssentialsLessonList } from "@/components/academy/computer-essentials-lesson-list";
import { Container } from "@/components/ui/container";

export function ComputerEssentialsPage() {
  return (
    <main className="bg-paper pt-28 pb-20 lg:pt-36 lg:pb-28">
      <Container>
        <nav aria-label="Breadcrumb" className="text-metadata text-muted">
          <Link href="/academy" className="hover:text-indigo-dark">
            Academy
          </Link>
          <span aria-hidden="true"> / </span>
          <Link
            href="/academy/courses/computer-internet-essentials"
            className="hover:text-indigo-dark"
          >
            Computer &amp; Internet Essentials
          </Link>
          <span aria-hidden="true"> / Lessons</span>
        </nav>

        <header className="mt-10 grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-end lg:gap-24">
          <div>
            <p className="text-eyebrow text-indigo-dark">MODULE 1</p>
            <h1 className="text-editorial-headline text-ink mt-4">
              Welcome to the Digital World
            </h1>
            <p className="text-intro text-muted mt-6 max-w-2xl">
              Understand what a computer actually is, before you touch a single
              button.
            </p>
          </div>
          <div className="border-border border-y py-6">
            <p className="text-body text-ink">
              Concepts before buttons — every lesson answers what it is, why it
              exists, and when you use it, before showing where to click. New
              modules open here as they&rsquo;re built.
            </p>
          </div>
        </header>

        <section className="mt-16 grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <div>
            <p className="text-eyebrow text-indigo-dark">YOUR LESSONS</p>
            <h2 className="font-display text-ink mt-4 text-4xl leading-tight md:text-5xl">
              Learn one idea at a time.
            </h2>
            <p className="text-body text-muted mt-5">
              Lessons open progressively. Your progress stays on this device.
            </p>
          </div>

          <ComputerEssentialsLessonList />
        </section>
      </Container>
    </main>
  );
}
