import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";

export function OpportunityCta() {
  return (
    <section className="bg-indigo py-20 text-white lg:py-28">
      <Container className="flex flex-col items-start gap-6 lg:items-center lg:text-center">
        <p className="text-eyebrow text-indigo-light">
          LET&rsquo;S WORK TOGETHER
        </p>
        <h2 className="text-section-headline max-w-2xl text-white">
          Have an idea worth making real?
        </h2>
        <p className="text-intro text-indigo-light max-w-xl">
          I&rsquo;m open to selected product collaborations, digital projects,
          partnerships, and speaking or seminar invitations.
        </p>
        <CtaLink href="/contact" variant="inverse">
          Start a Conversation
        </CtaLink>
      </Container>
    </section>
  );
}
