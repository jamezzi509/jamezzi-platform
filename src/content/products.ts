import type { Product } from "@/types/content";

export const products: Product[] = [
  {
    slug: "nichr",
    name: "Nichr",
    featured: true,
    status: "launching-soon",
    category: "AI-Powered YouTube Opportunity Intelligence",
    headline: "Discover the YouTube opportunity before everyone else does.",
    description:
      "Nichr helps multilingual YouTube creators find and evaluate promising channel niches across English, French, and Haitian Creole—using seven-dimensional scoring, competition and risk analysis, monetization mapping, and live AI insights.",
    proof: [
      "7-dimension scoring",
      "Multilingual niche research",
      "AI opportunity briefs",
    ],
    actionLabel: "View Nichr Case Study",
    href: "/portfolio/nichr",
    visualFocus: [
      "Opportunity score",
      "Radar chart",
      "Competition and risk",
      "Monetization potential",
      "One real YouTube niche example",
    ],
    image: {
      src: "/portfolio/nichr.webp",
      alt: "Nichr opportunity database showing multilingual content opportunities, scores, growth, and competition.",
    },
  },
  {
    slug: "endize",
    name: "Endize",
    featured: false,
    status: "launching-soon",
    category: "Business & Contract Readiness",
    headline: "Know what's holding your business back.",
    description:
      "Endize evaluates a business across Foundation, Compliance, Identity, and Contract Readiness, then turns the results into a prioritized plan for pursuing government and corporate contracts.",
    proof: [
      "4 readiness categories",
      "Weighted score out of 100",
      "Prioritized action plan",
    ],
    actionLabel: "View Endize Case Study",
    href: "/portfolio/endize",
    visualFocus: [
      "Weighted score",
      "Four readiness categories",
      "Prioritized action plan",
      "One missing requirement",
    ],
    image: {
      src: "/portfolio/endize.webp",
      alt: "Endize business readiness result showing a score of 74 out of 100 and prioritized next steps.",
    },
  },
  {
    slug: "clieniq",
    name: "clienIQ",
    featured: false,
    status: "launching-soon",
    category: "Agency CRM & Operations",
    headline: "Built around how service agencies actually work.",
    description:
      "clienIQ brings leads, delivery, documents, payments, and team workflows into one purpose-built platform—with an Opportunity Engine that reveals untapped revenue across existing client relationships.",
    proof: ["Dual pipelines", "26 generated documents", "Opportunity Engine"],
    actionLabel: "View clienIQ Case Study",
    href: "/portfolio/clieniq",
    visualFocus: [
      "Opportunity Engine",
      "Untapped revenue",
      "Missing services",
      "Recommended next action",
    ],
    image: {
      src: "/portfolio/clieniq.webp",
      alt: "clienIQ agency dashboard showing its Opportunity Engine and untapped client revenue.",
    },
  },
];

export const featuredProduct = products.find((product) => product.featured)!;
export const supportingProducts = products.filter(
  (product) => !product.featured,
);
