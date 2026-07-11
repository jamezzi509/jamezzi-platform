import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { HeroArtwork } from "@/components/home/hero-artwork";
import { HeroArtworkParallax } from "@/components/home/hero-artwork-parallax";

export function Hero() {
  return (
    <section className="bg-paper relative min-h-[100svh] overflow-hidden lg:min-h-[92vh]">
      <HeroArtworkParallax>
        <HeroArtwork />
      </HeroArtworkParallax>

      <Container className="relative z-10 flex min-h-[100svh] flex-col justify-center pt-28 pb-16 lg:min-h-[92vh] lg:pt-32 lg:pb-24">
        <div className="max-w-3xl">
          <p className="hero-enter hero-enter-1 text-eyebrow text-indigo-dark">
            JAMES ALEXANDRE
          </p>
          <h1 className="hero-enter hero-enter-2 text-hero-headline text-ink mt-5">
            Ideas are only valuable when they become real.
          </h1>
          <p className="hero-enter hero-enter-3 text-intro text-muted mt-6 max-w-xl">
            I design and build practical digital products—and turn what I know
            into courses, books, and live training.
          </p>
          <div className="hero-enter hero-enter-4 mt-9 flex flex-wrap items-center gap-4">
            <CtaLink href="#selected-work" variant="primary">
              Explore My Work
            </CtaLink>
            <CtaLink href="/about" variant="secondary">
              About James
            </CtaLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
