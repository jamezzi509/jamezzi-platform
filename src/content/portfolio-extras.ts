import type { PortfolioExtra } from "@/types/content";

export const portfolioExtras: PortfolioExtra[] = [
  {
    slug: "roadize",
    name: "Roadize",
    status: "launching-soon",
    category: "Dispatch OS & Professional Training",
    headline:
      "One platform for working dispatchers and the people becoming one.",
    description:
      "Roadize combines an 11-module trucking dispatch operating system with a bilingual academy containing 70 lessons, simulations, and professional certification.",
    proof: ["2 connected products", "11 OS modules", "70 academy lessons"],
    image: {
      src: "/portfolio/roadize.webp",
      alt: "Roadize Dispatch OS and Academy product overview.",
    },
  },
  {
    slug: "pepinye",
    name: "Pepinyè",
    status: "live",
    category: "Haitian Creole Agricultural Education",
    headline: "Practical gardening knowledge, created for Haiti.",
    description:
      "Pepinyè is a mobile-first agricultural education platform in Haitian Creole, with long-form learning, a plant encyclopedia, and an interactive planting calendar.",
    proof: [
      "24+ practical articles",
      "11-plant encyclopedia",
      "12-month calendar",
    ],
    image: {
      src: "/portfolio/pepinye.webp",
      alt: "Pepinyè Haitian Creole gardening education homepage.",
    },
  },
];
