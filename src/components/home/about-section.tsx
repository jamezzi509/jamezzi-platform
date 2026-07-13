import Image from "next/image";
import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { ArrowRightIcon } from "@/components/ui/icons";

export function AboutSection() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[42%_58%] lg:items-start lg:gap-12">
          <div className="relative">
            <div className="rounded-card border-border relative aspect-[4/3] w-full overflow-hidden border">
              <Image
                src="/about/james-alexandre.webp"
                alt="James Alexandre working on a laptop."
                fill
                sizes="(min-width: 1024px) 420px, 100vw"
                className="object-cover object-[center_55%]"
              />
            </div>
          </div>

          <div>
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
                I also turn that experience into practical courses, books, and
                in-person seminars through Jamezzi Academy.
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
