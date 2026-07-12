import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { HeroArtwork } from "@/components/home/hero-artwork";
import { HeroArtworkParallax } from "@/components/home/hero-artwork-parallax";

export function Hero() {
  return (
    <section className="bg-paper relative min-h-[100svh] overflow-hidden lg:min-h-[740px]">
      {/* Mobile/tablet: full-bleed artwork behind the centered text (unchanged composition). */}
      <div className="absolute inset-0 lg:left-[38%]">
        <HeroArtworkParallax>
          <HeroArtwork />
        </HeroArtworkParallax>
      </div>

      <Container className="relative z-10 flex min-h-[100svh] flex-col justify-center pt-28 pb-16 lg:min-h-[740px] lg:pb-20">
        <div className="max-w-xl lg:max-w-[520px]">
          <p className="hero-enter hero-enter-1 text-eyebrow text-indigo-dark">
            JAMES ALEXANDRE
          </p>
          <h1 className="hero-enter hero-enter-2 text-hero-headline text-ink mt-5">
            Ideas are only valuable when they become real.
          </h1>
          <p className="hero-enter hero-enter-3 text-body text-muted mt-6 max-w-md">
            I design and build practical digital products—and turn what I know
            into courses, books, and seminars.
          </p>
          <div className="hero-enter hero-enter-4 mt-6 flex flex-wrap items-center gap-4">
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
