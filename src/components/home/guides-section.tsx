import Link from "next/link";
import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { ArrowRightIcon } from "@/components/ui/icons";
import { dominantGuide, supportingGuides } from "@/content/guides";
import { GuideArtwork } from "@/components/home/guide-artwork";

export function GuidesSection() {
  return (
    <section className="bg-paper py-20 lg:py-32">
      <Container>
        <div className="max-w-2xl">
          <p className="text-eyebrow text-indigo-dark">SELECTED GUIDES</p>
          <h2 className="text-section-headline text-ink mt-4">
            What I know, made useful.
          </h2>
          <p className="text-intro text-muted mt-5">
            Practical explanations drawn from the work—covering digital
            products, technology, business, and lessons learned while building.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Link
            href={dominantGuide.href}
            className="group lg:col-span-7 lg:col-start-1"
          >
            <div className="rounded-showcase border-border relative aspect-[16/10] overflow-hidden border bg-white">
              <GuideArtwork />
            </div>
            <p className="text-metadata text-muted mt-6">Guide</p>
            <h3 className="text-card-title text-ink duration-control ease-primary group-hover:text-indigo-dark mt-2 transition-colors">
              {dominantGuide.title}
            </h3>
          </Link>

          <div className="divide-border flex flex-col divide-y lg:col-span-4 lg:col-start-9">
            {supportingGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={guide.href}
                className="group py-6 first:pt-0"
              >
                <p className="text-metadata text-muted">Guide</p>
                <h3 className="text-card-title text-ink duration-control ease-primary group-hover:text-indigo-dark mt-2 transition-colors">
                  {guide.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <CtaLink href="/guides" variant="link">
            View All Guides
            <ArrowRightIcon className="size-4" />
          </CtaLink>
        </div>
      </Container>
    </section>
  );
}
