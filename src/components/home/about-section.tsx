import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { ArrowRightIcon } from "@/components/ui/icons";

export function AboutSection() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="relative lg:col-span-5 lg:col-start-1">
            <div
              role="img"
              aria-label="Photo of James Alexandre in his workspace — coming soon"
              className="rounded-card border-border bg-paper flex aspect-[4/5] w-full max-w-sm items-end overflow-hidden border p-6 lg:max-w-none"
            >
              <p className="text-metadata text-muted">
                Photo placeholder — final photograph pending
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 lg:self-center">
            <p className="text-eyebrow text-indigo-dark">ABOUT JAMES</p>
            <h2 className="text-editorial-headline text-ink mt-4">
              I build because I believe better tools should exist.
            </h2>
            <div className="text-body text-muted mt-6 flex flex-col gap-4">
              <p>
                I&rsquo;m James Alexandre, the person behind Jamezzi. I design
                and develop digital products around problems I encounter,
                understand, or believe deserve a better solution.
              </p>
              <p>
                My work moves across business, technology, education, and
                entrepreneurship—but the approach stays the same: understand the
                real problem, remove unnecessary complexity, and build something
                people can put to use.
              </p>
              <p>
                I also turn that experience into practical courses, books,
                seminars, and live training through Jamezzi Academy.
              </p>
            </div>
            <CtaLink href="/about" variant="link" className="mt-6">
              More About James
              <ArrowRightIcon className="size-4" />
            </CtaLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
