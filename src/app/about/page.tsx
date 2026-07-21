import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { ArrowRightIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "About James",
  description:
    "Meet James Alexandre, the product builder and educator behind Jamezzi, its portfolio of digital products, practical guides, and Academy.",
};

const principles = [
  {
    number: "01",
    title: "Start with the real problem.",
    copy: "A polished interface cannot rescue a product that solves the wrong problem. I begin by understanding the work, the friction, and the decision someone is trying to make.",
  },
  {
    number: "02",
    title: "Remove unnecessary complexity.",
    copy: "Useful products make difficult work clearer. I organize information, workflows, and language so people can act without first becoming experts in the software.",
  },
  {
    number: "03",
    title: "Build the complete experience.",
    copy: "The product, positioning, content, mobile behavior, onboarding, and business model should support one another. I treat them as parts of the same system.",
  },
];

const workAreas = [
  {
    label: "PRODUCTS",
    title: "Tools designed around overlooked work.",
    copy: "From creator intelligence and contract readiness to agency operations, dispatching, and agricultural education, each product begins with a specific problem worth solving.",
    href: "/portfolio",
    cta: "Explore the Portfolio",
  },
  {
    label: "GUIDES",
    title: "What I learn becomes something others can use.",
    copy: "I document the thinking behind product decisions, opportunity research, and business preparation in practical language—not abstract theory.",
    href: "/guides",
    cta: "Read the Guides",
  },
  {
    label: "ACADEMY",
    title: "Practical knowledge, built to be applied.",
    copy: "Courses, books, and occasional seminars turn working experience into structured learning people can follow at their own pace.",
    href: "/academy",
    cta: "Visit the Academy",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-paper pt-28 lg:pt-36">
      <Container>
        <header className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-20">
          <div>
            <p className="text-eyebrow text-indigo-dark">ABOUT JAMES</p>
            <h1 className="text-editorial-headline text-ink mt-4">
              I build because I believe better tools should exist.
            </h1>
            <p className="text-intro text-muted mt-7 max-w-xl">
              I&rsquo;m James Alexandre, a product builder and educator. I turn
              problems I encounter, understand, or believe deserve a better
              solution into useful digital products and practical learning.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <CtaLink href="/portfolio" variant="primary">
                Explore My Work
              </CtaLink>
              <CtaLink href="/contact" variant="secondary">
                Contact James
              </CtaLink>
            </div>
          </div>

          <div className="rounded-showcase border-border relative aspect-[4/3] overflow-hidden border bg-white">
            <Image
              src="/about/james-alexandre.webp"
              alt="James Alexandre working at a laptop."
              fill
              priority
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover object-[center_55%]"
            />
          </div>
        </header>

        <dl className="border-border mt-16 grid grid-cols-2 border-y py-7 md:grid-cols-4 lg:mt-24">
          <Stat value="5" label="Products in the portfolio" />
          <Stat value="3" label="Published guides" />
          <Stat value="3" label="Working languages" />
          <Stat value="1" label="Practical approach" />
        </dl>

        <section className="py-20 lg:py-28">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <p className="text-eyebrow text-indigo-dark">HOW I WORK</p>
              <h2 className="text-editorial-headline text-ink mt-4">
                Clear thinking before more features.
              </h2>
            </div>
            <div className="border-border border-t">
              {principles.map((principle) => (
                <article
                  key={principle.number}
                  className="border-border grid gap-3 border-b py-7 md:grid-cols-[56px_1fr] md:gap-5"
                >
                  <p className="text-metadata text-indigo-dark">
                    {principle.number}
                  </p>
                  <div>
                    <h3 className="text-card-title text-ink">
                      {principle.title}
                    </h3>
                    <p className="text-body text-muted mt-3">
                      {principle.copy}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Container>

      <section className="bg-night text-night-text py-20 lg:py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="text-eyebrow text-night-muted">THE WORK</p>
            <h2 className="text-editorial-headline text-night-text mt-4">
              Products, explanations, and learning built from the same work.
            </h2>
          </div>

          <div className="border-night-border mt-12 grid border-t lg:grid-cols-3">
            {workAreas.map((area) => (
              <article
                key={area.label}
                className="border-night-border flex flex-col border-b py-8 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
              >
                <p className="text-metadata text-night-muted">{area.label}</p>
                <h3 className="text-card-title text-night-text mt-5">
                  {area.title}
                </h3>
                <p className="text-body text-night-muted mt-3 flex-1">
                  {area.copy}
                </p>
                <Link
                  href={area.href}
                  className="text-button text-night-text mt-7 inline-flex min-h-11 items-center gap-2"
                >
                  {area.cta}
                  <ArrowRightIcon className="size-4" />
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-24">
          <div>
            <p className="text-eyebrow text-indigo-dark">SPEAKING & SEMINARS</p>
            <h2 className="text-editorial-headline text-ink mt-4">
              Invite James to teach something practical.
            </h2>
            <p className="text-intro text-muted mt-6 max-w-2xl">
              I&rsquo;m available for selected sessions on digital skills,
              product thinking, technology, entrepreneurship, YouTube, and
              practical uses of AI.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 lg:justify-end">
            <CtaLink href="/contact?type=seminar-or-speaking" variant="primary">
              Invite James to Speak
            </CtaLink>
            <CtaLink href="/academy/seminar-updates" variant="secondary">
              Get Seminar Updates
            </CtaLink>
          </div>
        </Container>
      </section>
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-border border-l px-3 first:border-l-0 first:pl-0 md:px-6">
      <dt className="font-display text-ink text-3xl md:text-4xl">{value}</dt>
      <dd className="text-metadata text-muted mt-2 max-w-32">{label}</dd>
    </div>
  );
}
