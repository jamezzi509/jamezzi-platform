import type { Metadata } from "next";
import Image from "next/image";
import { ComingSoon } from "@/components/coming-soon";
import { GuideBody } from "@/components/guides/guide-body";
import { Container } from "@/components/ui/container";
import { guides } from "@/content/guides";
import { getGuideMarkdown } from "@/lib/guide-content";
import { titleFromSlug } from "@/lib/format";

function findGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const slugValue = slug?.[0];
  if (!slugValue) return {};

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
    return <ComingSoon section="Guides" />;
  }

  const guide = findGuide(slugValue);
  const markdown = guide ? getGuideMarkdown(guide.slug) : null;

  if (!guide || !markdown) {
    const title = titleFromSlug(slugValue);
    return <ComingSoon section="Guides" title={title} />;
  }

  const { frontmatter, content } = markdown;

  return (
    <article className="bg-paper py-16 lg:py-20">
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
