import type { CourseModule } from "@/content/dominate-digital/schema";

/**
 * The 20-module curriculum per docs/dominate-digital-curriculum.md.
 * Metadata for every module is defined now so the course page can show the
 * full path; only Module 1 has a built simulator and real lessons so far
 * (see lessons.ts) -- modules 2-20 render as "coming soon" until built.
 */
export const dominateDigitalModules: CourseModule[] = [
  {
    id: "m1",
    order: 1,
    titleHt: "Baz Maketing Dijital",
    titleFr: "Fondamentaux du Marketing Digital",
    titleEn: "Digital Marketing Foundations",
    purpose:
      "What digital marketing is, digital vs. traditional, the customer journey, the funnel, value, myths, and careers.",
  },
  {
    id: "m2",
    order: 2,
    titleHt: "Sikoloji Vant",
    titleFr: "Psychologie de la Vente",
    titleEn: "Psychology of Selling",
    purpose:
      "Emotion vs. logic, trust, social proof, scarcity, authority, reciprocity, pricing psychology, and color.",
  },
  {
    id: "m3",
    order: 3,
    titleHt: "Idantite Mak (Branding)",
    titleFr: "Image de Marque",
    titleEn: "Branding",
    purpose:
      "Naming, positioning, logos, color, typography, voice, personality, and consistency.",
  },
  {
    id: "m4",
    order: 4,
    titleHt: "Konnen Kliyan Ou",
    titleFr: "Connaître Votre Client",
    titleEn: "Know Your Customer",
    purpose:
      "Customer avatars, pain points, goals, objections, and market/competitor research.",
  },
  {
    id: "m5",
    order: 5,
    titleHt: "Ekri Tèks ki Vann",
    titleFr: "Rédaction Publicitaire",
    titleEn: "Copywriting",
    purpose:
      "Headlines, hooks, storytelling, product descriptions, CTAs, landing pages, sales pages, and email copy.",
  },
  {
    id: "m6",
    order: 6,
    titleHt: "Kontni Grafik",
    titleFr: "Contenu Graphique",
    titleEn: "Graphic Content",
    purpose:
      "Visual hierarchy, composition, social graphics, carousels, infographics, and brand kits, in a Canva-style editor.",
  },
  {
    id: "m7",
    order: 7,
    titleHt: "Maketing Videyo",
    titleFr: "Marketing Vidéo",
    titleEn: "Video Marketing",
    purpose:
      "How to use video, not filming it -- Shorts, Reels, TikTok, YouTube, scripts, hooks, retention, and thumbnails.",
  },
  {
    id: "m8",
    order: 8,
    titleHt: "IA pou Maketing",
    titleFr: "L'IA pour le Marketing",
    titleEn: "AI for Marketing",
    purpose:
      "ChatGPT, AI images, AI video, AI voice, AI research, prompt engineering, and AI workflows.",
  },
  {
    id: "m9",
    order: 9,
    titleHt: "Maketing sou Rezo Sosyal",
    titleFr: "Marketing sur les Réseaux Sociaux",
    titleEn: "Social Media Marketing",
    purpose:
      "Per-platform strategy: Facebook, Instagram, TikTok, LinkedIn, X, Pinterest, WhatsApp Business, and YouTube.",
  },
  {
    id: "m10",
    order: 10,
    titleHt: "Maketing Kontni",
    titleFr: "Marketing de Contenu",
    titleEn: "Content Marketing",
    purpose:
      "Content pillars, strategy, repurposing, evergreen content, blogging, and newsletters.",
  },
  {
    id: "m11",
    order: 11,
    titleHt: "SEO (Referansman)",
    titleFr: "SEO (Référencement)",
    titleEn: "SEO",
    purpose:
      "Google Search, keywords, search intent, on-page and technical basics, local SEO, and AI search optimization.",
  },
  {
    id: "m12",
    order: 12,
    titleHt: "Google Business Profile",
    titleFr: "Google Business Profile",
    titleEn: "Google Business Profile",
    purpose: "Setup, reviews, photos, rankings, and local visibility.",
  },
  {
    id: "m13",
    order: 13,
    titleHt: "Maketing pa Imèl",
    titleFr: "Email Marketing",
    titleEn: "Email Marketing",
    purpose:
      "Lead magnets, forms, newsletters, automation, welcome sequences, and sales emails.",
  },
  {
    id: "m14",
    order: 14,
    titleHt: "Sit Web ak Paj Aterisaj",
    titleFr: "Sites Web et Pages de Destination",
    titleEn: "Websites & Landing Pages",
    purpose:
      "Homepage, landing pages, conversion, forms, speed, and mobile optimization.",
  },
  {
    id: "m15",
    order: 15,
    titleHt: "Piblisite Peye",
    titleFr: "Publicité Payante",
    titleEn: "Paid Advertising",
    purpose:
      "Meta Ads, Google Ads, TikTok Ads, LinkedIn Ads, Pinterest Ads, budgeting, pixels, and retargeting.",
  },
  {
    id: "m16",
    order: 16,
    titleHt: "Analitik",
    titleFr: "Analytique",
    titleEn: "Analytics",
    purpose: "GA4, KPIs, conversion rate, CAC, ROAS, ROI, and dashboards.",
  },
  {
    id: "m17",
    order: 17,
    titleHt: "Otomatizasyon Maketing",
    titleFr: "Automatisation Marketing",
    titleEn: "Marketing Automation",
    purpose:
      "CRM, email automation, chatbots, lead nurturing, and workflows.",
  },
  {
    id: "m18",
    order: 18,
    titleHt: "Freelans ak Kreye Ajans",
    titleFr: "Freelance et Création d'Agence",
    titleEn: "Freelancing & Starting an Agency",
    purpose:
      "Clients, portfolio, pricing, contracts, Upwork/Fiverr/LinkedIn, cold outreach, and swipe-file scripts.",
  },
  {
    id: "m19",
    order: 19,
    titleHt: "Maketing pou Diferan Biznis",
    titleFr: "Marketing pour Différents Types d'Entreprises",
    titleEn: "Marketing for Different Businesses",
    purpose:
      "Marketing for real Haitian-context businesses -- diaspora import/export, Ti Machann-style selling, remittance-adjacent services, and church/community fundraising.",
  },
  {
    id: "m20",
    order: 20,
    titleHt: "Pwojè Final",
    titleFr: "Projet Final",
    titleEn: "Capstone Project",
    purpose:
      "Brand, logo, persona, website, content plan, social pages, AI assets, landing page, email sequence, ads, and analytics dashboard.",
  },
];
