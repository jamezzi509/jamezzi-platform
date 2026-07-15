import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ArrowRightIcon } from "@/components/ui/icons";
import type { CaseStudy } from "@/content/case-studies";

export function ProjectCaseStudy({ study }: { study: CaseStudy }) {
  return (
    <main className="bg-paper pt-28 pb-0 lg:pt-36">
      <Container>
        <Link
          href="/portfolio"
          className="text-button text-indigo-dark inline-flex min-h-11 items-center gap-2"
        >
          <span aria-hidden="true">←</span> All Projects
        </Link>

        <header className="mt-7 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20">
          <div>
            <p className="text-eyebrow text-indigo-dark">{study.eyebrow}</p>
            <h1 className="text-editorial-headline text-ink mt-4 max-w-4xl">
              {study.headline}
            </h1>
          </div>
          <p className="text-intro text-muted lg:pb-1">{study.summary}</p>
        </header>

        <dl className="border-border mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-y py-6 md:grid-cols-4 lg:mt-14">
          <Meta label="Project" value={study.name} />
          <Meta label="Status" value={study.status} />
          <Meta label="Role" value={study.role} />
          <Meta label="Year" value={study.year} />
        </dl>

        <div className="bg-night rounded-showcase border-night-border relative mt-10 aspect-[16/7] min-h-64 overflow-hidden border lg:mt-14">
          <Image
            src={study.image.src}
            alt={study.image.alt}
            fill
            priority
            sizes="100vw"
            className="object-contain"
          />
        </div>

        <section className="grid gap-12 py-20 lg:grid-cols-2 lg:gap-20 lg:py-28">
          <EditorialBlock
            number="01"
            title="The challenge"
            copy={study.challenge}
          />
          <EditorialBlock
            number="02"
            title="The product approach"
            copy={study.solution}
          />
        </section>
      </Container>

      <section className="bg-night text-night-text py-20 lg:py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="text-eyebrow text-night-muted">WHAT WAS BUILT</p>
            <h2 className="text-editorial-headline text-night-text mt-4">
              {study.capabilitiesHeadline}
            </h2>
          </div>

          <div className="border-night-border mt-12 grid border-t md:grid-cols-2 lg:grid-cols-3">
            {study.capabilities.map((capability, index) => (
              <article
                key={capability.title}
                className="border-night-border border-b py-8 md:px-7 md:odd:border-r lg:border-r lg:px-8 lg:nth-[3n]:border-r-0"
              >
                <p className="text-metadata text-night-muted">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="text-card-title text-night-text mt-4">
                  {capability.title}
                </h3>
                <p className="text-body text-night-muted mt-3">
                  {capability.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <Container>
        <section className="grid gap-14 py-20 lg:grid-cols-[1fr_0.72fr] lg:gap-24 lg:py-28">
          <div>
            <p className="text-eyebrow text-indigo-dark">OUTCOME</p>
            <h2 className="text-editorial-headline text-ink mt-4">
              {study.outcomeHeadline}
            </h2>
            <ul className="border-border mt-9 border-t">
              {study.outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="text-body text-ink border-border flex gap-4 border-b py-5"
                >
                  <span className="text-indigo" aria-hidden="true">
                    ✓
                  </span>
                  {outcome}
                </li>
              ))}
            </ul>
          </div>

          <aside>
            <p className="text-eyebrow text-indigo-dark">TOOLS & DISCIPLINES</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {study.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-control border-border text-supporting text-ink border bg-white px-3 py-2"
                >
                  {item}
                </span>
              ))}
            </div>
          </aside>
        </section>
      </Container>

      <section className="bg-indigo py-16 text-white lg:py-20">
        <Container className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-eyebrow text-white/70">NEXT PROJECT</p>
            <h2 className="font-display mt-3 text-4xl leading-tight md:text-5xl">
              {study.nextProject.name}
            </h2>
          </div>
          <Link
            href={study.nextProject.href}
            className="text-button inline-flex min-h-11 items-center gap-2 rounded-[10px] bg-white px-6 text-black"
          >
            View Case Study <ArrowRightIcon className="size-4" />
          </Link>
        </Container>
      </section>
    </main>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-metadata text-muted">{label}</dt>
      <dd className="text-supporting text-ink mt-1 font-medium">{value}</dd>
    </div>
  );
}

function EditorialBlock({
  number,
  title,
  copy,
}: {
  number: string;
  title: string;
  copy: string[];
}) {
  return (
    <article>
      <p className="text-metadata text-indigo-dark">{number}</p>
      <h2 className="text-feature-headline-sm text-ink mt-3">{title}</h2>
      <div className="text-body text-muted mt-5 flex flex-col gap-4">
        {copy.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
