import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";

export default function FrenchHomePage() {
  return (
    <section className="bg-paper flex min-h-[70vh] items-center py-24">
      <Container className="max-w-2xl">
        <p className="text-eyebrow text-indigo-dark">JAMEZZI</p>
        <h1 className="text-section-headline text-ink mt-4">
          Le contenu en français arrive.
        </h1>
        <p className="text-intro text-muted mt-5">
          Cette langue est disponible dans le sélecteur, mais le contenu traduit
          n&rsquo;est pas encore prêt.
        </p>
        <CtaLink href="/" variant="secondary" className="mt-8">
          Voir le site en anglais
        </CtaLink>
      </Container>
    </section>
  );
}
