import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";

function LinePattern() {
  return (
    <svg
      viewBox="0 0 1200 280"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 size-full"
      aria-hidden="true"
      focusable="false"
    >
      <g stroke="white" strokeWidth="1" opacity="0.12">
        <line x1="700" y1="-40" x2="1240" y2="320" />
        <line x1="820" y1="-40" x2="1360" y2="320" />
        <line x1="940" y1="-40" x2="1480" y2="320" />
      </g>
      <circle cx="1080" cy="60" r="2" fill="white" opacity="0.4" />
      <circle cx="1150" cy="200" r="2" fill="white" opacity="0.3" />
    </svg>
  );
}

export function OpportunityCta() {
  return (
    <section className="bg-indigo relative overflow-hidden py-10 text-white lg:py-12">
      <LinePattern />
      <Container className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
        <div>
          <p className="text-eyebrow text-indigo-light">
            LET&rsquo;S WORK TOGETHER
          </p>
          <h2 className="text-editorial-headline mt-2 text-white">
            Have an idea worth making real?
          </h2>
          <p className="text-body text-indigo-light mt-3 max-w-md">
            I&rsquo;m open to selected product collaborations, digital projects,
            partnerships, and speaking or seminar invitations.
          </p>
        </div>
        <CtaLink href="/contact" variant="dark" className="shrink-0">
          Start a Conversation
        </CtaLink>
      </Container>
    </section>
  );
}
