import { Hero } from "@/components/home/hero";
import { SelectedWork } from "@/components/home/selected-work";
import { AboutSection } from "@/components/home/about-section";
import { AcademySection } from "@/components/home/academy-section";
import { GuidesSection } from "@/components/home/guides-section";
import { OpportunityCta } from "@/components/home/opportunity-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <AboutSection />
      <AcademySection />
      <GuidesSection />
      <OpportunityCta />
    </>
  );
}
