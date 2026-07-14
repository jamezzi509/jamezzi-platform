import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { ArrowRightIcon } from "@/components/ui/icons";
import { guides } from "@/content/guides";
import { GuideArtwork } from "@/components/home/guide-artwork";

export function GuidesSection() {
  return (
    <section className="bg-paper py-12 lg:py-14">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="text-eyebrow text-indigo-dark">SELECTED GUIDES</p>
            <h2 className="text-editorial-headline text-ink mt-3">
              What I know, made useful.
            </h2>
          </div>
          <CtaLink href="/guides" variant="link">
            View All Guides
            <ArrowRightIcon className="size-4" />
          </CtaLink>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.15fr_1fr_1fr]">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={guide.href}
              className="group flex flex-col"
            >
              <div className="rounded-card border-border relative aspect-[2/1] overflow-hidden border bg-white">
                {guide.coverImage ? (
                  <Image
                    src={guide.coverImage}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
                  />
                ) : (
                  <GuideArtwork variant={guide.artwork} />
                )}
              </div>
              <p className="text-metadata text-muted mt-3">
                {guide.category} · {guide.readingTime}
              </p>
              <h3 className="text-card-title text-ink duration-control ease-primary group-hover:text-indigo-dark mt-1.5 line-clamp-2 transition-colors">
                {guide.title}
              </h3>
              {guide.dek ? (
                <p className="text-body text-muted mt-1.5 line-clamp-1">
                  {guide.dek}
                </p>
              ) : null}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
