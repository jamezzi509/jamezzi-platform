import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";

export function ComingSoon({
  section,
  title,
}: {
  section: string;
  title?: string;
}) {
  return (
    <section className="bg-paper flex min-h-[70vh] items-center py-24">
      <Container className="max-w-2xl">
        <p className="text-eyebrow text-indigo-dark">{section.toUpperCase()}</p>
        <h1 className="text-section-headline text-ink mt-4">
          {title ?? section}
        </h1>
        <p className="text-intro text-muted mt-5">
          This page is being built as part of a future Jamezzi milestone. Thanks
          for your patience.
        </p>
        <CtaLink href="/" variant="secondary" className="mt-8">
          Back to Home
        </CtaLink>
      </Container>
    </section>
  );
}
