import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ComingSoon } from "@/components/coming-soon";
import { StatusBadge } from "@/components/home/status-badge";
import { ProjectCaseStudy } from "@/components/portfolio/project-case-study";
import { Container } from "@/components/ui/container";
import { ArrowRightIcon } from "@/components/ui/icons";
import { portfolioExtras } from "@/content/portfolio-extras";
import { getCaseStudy } from "@/content/case-studies";
import { products } from "@/content/products";
import { titleFromSlug } from "@/lib/format";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = slug?.[0] ? getCaseStudy(slug[0]) : null;

  if (study) {
    return { title: `${study.name} Case Study`, description: study.summary };
  }

  return {
    title: "Portfolio",
    description:
      "Selected digital products designed and built by James Alexandre across business, technology, education, and entrepreneurship.",
  };
}

const supportingProjects = [
  ...products
    .filter((product) => !product.featured)
    .map((product) => ({
      slug: product.slug,
      name: product.name,
      status: product.status,
      category: product.category,
      headline: product.headline,
      description: product.description,
      proof: product.proof,
      image: product.image,
    })),
  ...portfolioExtras,
];

function PortfolioIndex() {
  const featured = products.find((product) => product.featured)!;

  return (
    <main className="bg-paper pt-28 pb-20 lg:pt-36 lg:pb-28">
      <Container>
        <header className="grid gap-7 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20">
          <div>
            <p className="text-eyebrow text-indigo-dark">PORTFOLIO</p>
            <h1 className="text-editorial-headline text-ink mt-4 max-w-3xl">
              Useful products, built from real problems.
            </h1>
          </div>
          <p className="text-intro text-muted max-w-xl lg:pb-1">
            Selected work across business operations, creator intelligence,
            education, and practical tools—designed from strategy through
            production.
          </p>
        </header>

        <Link
          href={featured.href}
          className="bg-night rounded-showcase group relative mt-12 grid overflow-hidden p-7 md:p-10 lg:mt-16 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-12 lg:p-12"
        >
          <div className="relative z-10">
            <div className="flex items-center gap-2">
              <span className="text-eyebrow text-night-text">
                {featured.name}
              </span>
              <StatusBadge status={featured.status} tone="dark" />
            </div>
            <p className="text-metadata text-night-muted mt-5">
              {featured.category}
            </p>
            <h2 className="text-feature-headline text-night-text mt-3">
              {featured.headline}
            </h2>
            <p className="text-body text-night-muted mt-5">
              {featured.description}
            </p>
            <span className="text-button text-night-text mt-7 inline-flex items-center gap-2">
              View Case Study
              <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
          <div className="border-night-border relative mt-8 aspect-[16/9] overflow-hidden rounded-[10px] border bg-[#f7f8fb] lg:mt-0">
            <Image
              src={featured.image.src}
              alt={featured.image.alt}
              fill
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-contain"
            />
          </div>
        </Link>

        <section aria-labelledby="more-projects" className="mt-16 lg:mt-20">
          <div className="border-border flex items-center justify-between border-b pb-5">
            <h2 id="more-projects" className="text-eyebrow text-indigo-dark">
              MORE SELECTED WORK
            </h2>
            <p className="text-metadata text-muted">04 projects</p>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:gap-x-10 lg:gap-y-14">
            {supportingProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/portfolio/${project.slug}`}
                className="group flex flex-col"
              >
                <div className="rounded-showcase border-border relative aspect-[16/10] overflow-hidden border bg-[#f7f8fb]">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                  />
                </div>
                <div className="mt-5 flex items-center gap-2">
                  <p className="text-metadata text-muted">{project.category}</p>
                  <StatusBadge status={project.status} />
                </div>
                <h3 className="text-feature-headline-sm text-ink group-hover:text-indigo-dark mt-2 transition-colors">
                  {project.name}
                </h3>
                <p className="text-card-title text-ink mt-2">
                  {project.headline}
                </p>
                <p className="text-body text-muted mt-3 line-clamp-3">
                  {project.description}
                </p>
                <ul className="text-supporting text-muted mt-4 flex flex-wrap gap-x-2 gap-y-1">
                  {project.proof.map((item, index) => (
                    <li key={item} className="flex items-center gap-2">
                      {index > 0 ? <span aria-hidden="true">·</span> : null}
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="text-button text-indigo-dark mt-5 inline-flex items-center gap-2">
                  View Case Study
                  <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;

  if (!slug?.length) return <PortfolioIndex />;

  const study = getCaseStudy(slug[0]);
  if (study) return <ProjectCaseStudy study={study} />;

  const title = titleFromSlug(slug[slug.length - 1]);
  return <ComingSoon section="Portfolio" title={title} />;
}
