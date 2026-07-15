import Link from "next/link";
import { EnglishLevelOneLessons } from "@/components/academy/english-level-one-lessons";
import { Container } from "@/components/ui/container";

export function EnglishLevelOnePage() {
  return (
    <main className="bg-paper pt-28 pb-20 lg:pt-36 lg:pb-28">
      <Container>
        <nav aria-label="Breadcrumb" className="text-metadata text-muted">
          <Link href="/academy" className="hover:text-indigo-dark">
            Academy
          </Link>
          <span aria-hidden="true"> / </span>
          <Link
            href="/academy/courses/english-for-beginners"
            className="hover:text-indigo-dark"
          >
            English for Beginners
          </Link>
          <span aria-hidden="true"> / Level 1</span>
        </nav>

        <header className="mt-10 grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-end lg:gap-24">
          <div>
            <p className="text-eyebrow text-indigo-dark">LEVEL 1 · FREE</p>
            <h1 className="text-editorial-headline text-ink mt-4">
              First English
            </h1>
            <p className="text-intro text-muted mt-6 max-w-2xl">
              Build your first useful sentences and say them with confidence.
            </p>
          </div>
          <div className="border-border border-y py-6">
            <p className="text-body text-ink">
              By the end of this level, you can greet someone, introduce
              yourself, use essential polite words, and take part in a short
              first conversation.
            </p>
          </div>
        </header>

        <section className="mt-16 grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <div>
            <p className="text-eyebrow text-indigo-dark">YOUR LESSONS</p>
            <h2 className="font-display text-ink mt-4 text-4xl leading-tight md:text-5xl">
              Learn one useful thing at a time.
            </h2>
            <p className="text-body text-muted mt-5">
              Lessons open progressively. You can start without creating an
              account, and your progress will stay on this device.
            </p>
          </div>

          <EnglishLevelOneLessons />
        </section>
      </Container>
    </main>
  );
}
