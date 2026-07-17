import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ComingSoon } from "@/components/coming-soon";
import { GuideBody } from "@/components/guides/guide-body";
import { Container } from "@/components/ui/container";
import { guides } from "@/content/guides";
import { getGuideMarkdown } from "@/lib/guide-content";
import { titleFromSlug } from "@/lib/format";

function findGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

function GuidesIndex() {
  return (
    <div className="bg-paper pt-28 pb-20 lg:pt-32 lg:pb-24">
      <Container>
        <header className="max-w-3xl">
          <p className="text-eyebrow text-indigo-dark">JAMEZZI GUIDES</p>
          <h1 className="text-editorial-headline text-ink mt-4">
            What I know, made useful.
          </h1>
          <p className="text-intro text-muted mt-6 max-w-2xl">
            Practical explanations drawn from the work—covering digital
            products, content research, business development, and the lessons
            learned while building.
          </p>
        </header>

        <section aria-labelledby="published-guides" className="mt-14 lg:mt-16">
          <h2 id="published-guides" className="sr-only">
            Published guides
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={guide.href}
                className="group flex flex-col"
              >
                <div className="rounded-card border-border relative aspect-[4/3] overflow-hidden border bg-white">
                  <Image
                    src={guide.coverImage!}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <p className="text-metadata text-muted mt-4">
                  {guide.category} · {guide.readingTime}
                </p>
                <h2 className="text-card-title text-ink group-hover:text-indigo-dark mt-2 transition-colors">
                  {guide.title}
                </h2>
                <p className="text-body text-muted mt-3">{guide.dek}</p>
                <span className="text-button text-indigo-dark mt-5">
                  Read Guide <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const slugValue = slug?.[0];
  if (!slugValue) {
    return {
      title: "Guides",
      description:
        "Practical guides from James Alexandre on building products, researching content opportunities, and preparing businesses to compete.",
    };
  }

  const guide = findGuide(slugValue);
  const markdown = guide ? getGuideMarkdown(guide.slug) : null;
  if (!guide || !markdown) return {};

  return {
    title: markdown.frontmatter.title,
    description: markdown.frontmatter.description,
  };
}

export default async function GuidesPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  const slugValue = slug?.[0];

  if (!slugValue) {
    return <GuidesIndex />;
  }

  const guide = findGuide(slugValue);
  const markdown = guide ? getGuideMarkdown(guide.slug) : null;

  if (!guide || !markdown) {
    const title = titleFromSlug(slugValue);
    return <ComingSoon section="Guides" title={title} />;
  }

  const { frontmatter, content } = markdown;

  return (
    <article className="bg-paper pt-28 pb-16 lg:pt-32 lg:pb-20">
      <Container className="max-w-3xl">
        <p className="text-eyebrow text-indigo-dark">
          {frontmatter.category.toUpperCase()}
        </p>
        <h1 className="text-editorial-headline text-ink mt-4">
          {frontmatter.title}
        </h1>
        <p className="text-metadata text-muted mt-4">
          {frontmatter.author} · {frontmatter.readingTime}
        </p>

        <div className="rounded-showcase border-border relative mt-8 aspect-[4/3] w-full overflow-hidden border">
          <Image
            src={frontmatter.coverImage}
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 768px, 100vw"
            className="object-cover"
          />
        </div>

        <GuideBody content={content} />
      </Container>
    </article>
  );
}
