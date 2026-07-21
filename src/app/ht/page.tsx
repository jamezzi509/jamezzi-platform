import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";

export default function HaitianCreoleHomePage() {
  return (
    <section className="bg-paper flex min-h-[70vh] items-center py-24">
      <Container className="max-w-2xl">
        <p className="text-eyebrow text-indigo-dark">JAMEZZI</p>
        <h1 className="text-section-headline text-ink mt-4">
          Kontni an Kreyòl ap vini.
        </h1>
        <p className="text-intro text-muted mt-5">
          Lang sa a disponib nan seleksyonè a, men kontni tradui a poko pare.
        </p>
        <CtaLink href="/" variant="secondary" className="mt-8">
          Gade sit la an anglè
        </CtaLink>
      </Container>
    </section>
  );
}
