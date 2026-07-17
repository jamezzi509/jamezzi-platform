export interface CaseStudy {
  slug: string;
  name: string;
  eyebrow: string;
  headline: string;
  summary: string;
  status: string;
  role: string;
  year: string;
  image: { src: string; alt: string };
  challenge: string[];
  solution: string[];
  capabilitiesHeadline: string;
  capabilities: Array<{ title: string; description: string }>;
  outcomeHeadline: string;
  outcomes: string[];
  stack: string[];
  nextProject: { name: string; href: string };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "nichr",
    name: "Nichr",
    eyebrow: "AI OPPORTUNITY INTELLIGENCE",
    headline: "Finding the YouTube opportunity before it becomes obvious.",
    summary:
      "Nichr is a full-stack SaaS platform that helps multilingual creators discover, evaluate, and act on promising content niches across English, French, and Haitian Creole.",
    status: "Launch-ready",
    role: "Founder · Product Designer · UI Engineer",
    year: "2026",
    image: {
      src: "/portfolio/nichr.webp",
      alt: "Nichr opportunity database showing multilingual content opportunities and evaluation scores.",
    },
    challenge: [
      "Most YouTube research products were designed around English-language creators. They could surface search volume, but not the cross-language gaps that matter to someone publishing in French, Haitian Creole, or several languages at once.",
      "Creators also needed more than keyword counts. Choosing a niche requires understanding competition, monetization, risk, sustainability, and how long a particular business model may take to produce results.",
    ],
    solution: [
      "I designed Nichr as an opportunity intelligence system instead of another keyword tool. Each niche becomes a structured brief that explains its potential, difficulty, risks, revenue paths, and practical first steps.",
      "The product combines a focused research workspace with live AI analysis, giving creators a repeatable way to compare opportunities and make decisions with more context.",
    ],
    capabilitiesHeadline: "Intelligence designed to support a real decision.",
    capabilities: [
      {
        title: "Seven-dimension scoring",
        description:
          "Growth, monetization, demand, competition, sustainability, barrier to entry, and AI confidence—presented through clear visual scoring and methodology notes.",
      },
      {
        title: "Honest competition analysis",
        description:
          "Explains the effort required, who can win, and why instead of reducing a complex market decision to a misleading green or red signal.",
      },
      {
        title: "Risk and monetization mapping",
        description:
          "Opportunity-specific risks include mitigation guidance, while four to six relevant revenue paths are ranked and explained in context.",
      },
      {
        title: "Live AI intelligence",
        description:
          "Five Claude-powered analyses generate an intelligence brief, recommendation, deeper insights, a 30-day content plan, and a monetization roadmap.",
      },
      {
        title: "Research workspace",
        description:
          "Collections, persistent notes, saved opportunities, and a comparison mode support ongoing research rather than one-time searches.",
      },
      {
        title: "Complete product ecosystem",
        description:
          "The platform ships with its marketing site, animated product demo, CMS, pricing, affiliate program, help content, and legal foundation.",
      },
    ],
    outcomes: [
      "A launch-ready SaaS product designed, written, and developed from the ground up",
      "Purpose-built multilingual opportunity research across EN, FR, and HT",
      "A complete evaluation model that goes beyond keyword volume",
      "Product, marketing, content management, affiliate, and legal systems prepared for deployment",
    ],
    outcomeHeadline: "From product idea to a complete, deployable SaaS system.",
    stack: [
      "React",
      "JavaScript",
      "Anthropic API",
      "Decap CMS",
      "Product Design",
      "Content Strategy",
      "Information Architecture",
    ],
    nextProject: { name: "Endize", href: "/portfolio/endize" },
  },
  {
    slug: "endize",
    name: "Endize",
    eyebrow: "BUSINESS & CONTRACT READINESS",
    headline:
      "Showing a business exactly what must be fixed before the next bid.",
    summary:
      "Endize evaluates small businesses across four readiness categories, calculates a weighted score, and converts the result into a prioritized plan for competing for government and corporate contracts.",
    status: "Launch-ready",
    role: "Founder · Product Designer · Developer",
    year: "2026",
    image: {
      src: "/portfolio/endize.webp",
      alt: "Endize readiness assessment showing a weighted score and priority next steps.",
    },
    challenge: [
      "Many capable small businesses pursue contracts without knowing that a missing registration, insurance policy, NAICS classification, or capability statement can disqualify them before their actual work is considered.",
      "The information exists, but it is fragmented across government websites, procurement terminology, and generic checklists. Owners need to understand where they stand, what matters most, and what to fix first.",
    ],
    solution: [
      "I designed Endize around a short diagnostic assessment instead of a long resource directory. The platform scores Foundation, Compliance, Identity, and Contract Readiness using weighted requirements that reflect their impact on eligibility and credibility.",
      "The result is not just a number. Endize turns every gap into a prioritized action plan, connects the owner to relevant learning material, and provides a path to hands-on assistance when a task requires expert support.",
    ],
    capabilitiesHeadline:
      "A readiness system that turns uncertainty into an ordered plan.",
    capabilities: [
      {
        title: "Four-part readiness assessment",
        description:
          "A focused assessment evaluates business foundation, compliance, identity, and contract readiness without overwhelming the owner.",
      },
      {
        title: "Weighted readiness score",
        description:
          "Requirements contribute differently to the score, reflecting the fact that missing insurance or registration matters more than a minor profile improvement.",
      },
      {
        title: "Prioritized action plan",
        description:
          "Results are translated into ordered next steps so the business knows what blocks progress now and what can be improved later.",
      },
      {
        title: "Contract learning center",
        description:
          "Plain-language guidance explains contract terminology, bid requirements, registrations, and the documents businesses are expected to prepare.",
      },
      {
        title: "Opportunity discovery",
        description:
          "The product direction includes helping owners locate relevant government and corporate opportunities after their readiness foundation is in place.",
      },
      {
        title: "Talk-first professional services",
        description:
          "Owners can request NAICS research, vendor registration help, and capability statement creation without paying before the need is understood.",
      },
    ],
    outcomeHeadline:
      "A three-minute assessment that produces a practical path forward.",
    outcomes: [
      "A clear readiness score across four business-critical categories",
      "Immediate visibility into requirements that may prevent a successful bid",
      "A prioritized plan that separates urgent blockers from later improvements",
      "Education and professional support connected directly to identified gaps",
    ],
    stack: [
      "Product Strategy",
      "Assessment Design",
      "Scoring Systems",
      "UX Design",
      "React",
      "Business Research",
      "Content Architecture",
    ],
    nextProject: { name: "clienIQ", href: "/portfolio/clieniq" },
  },
  {
    slug: "clieniq",
    name: "clienIQ",
    eyebrow: "AGENCY CRM & REVENUE INTELLIGENCE",
    headline:
      "Turning every client relationship into a visible growth opportunity.",
    summary:
      "clienIQ is a full-stack CRM built specifically for service agencies, combining lead management, delivery, documents, payments, collaboration, and an Opportunity Engine that exposes untapped client revenue.",
    status: "In active use",
    role: "Founder · Product Designer · Developer",
    year: "2026",
    image: {
      src: "/portfolio/clieniq.webp",
      alt: "clienIQ dashboard showing agency revenue, client opportunities, and its Opportunity Engine.",
    },
    challenge: [
      "Small service agencies often run their client operations through spreadsheets, direct messages, disconnected documents, and the owner's memory. Leads disappear, delivery becomes difficult to track, and proposals are rebuilt repeatedly.",
      "General-purpose CRMs can manage contacts, but they rarely understand a service catalog or reveal which existing clients have not purchased relevant services. That hidden revenue remains invisible even when the agency already has the relationship required to earn it.",
    ],
    solution: [
      "I designed clienIQ as an operating system for agencies that sell done-for-you services. Sales, delivery, documents, payments, tasks, and team activity live inside one opinionated workflow with useful defaults already in place.",
      "Its Opportunity Engine compares every client's purchase history against the agency's service catalog, identifies relevant missing services, and calculates the exact untapped revenue attached to each relationship.",
    ],
    capabilitiesHeadline:
      "Agency operations connected to the revenue already inside the business.",
    capabilities: [
      {
        title: "Opportunity Engine",
        description:
          "Automatically detects services each client has not purchased, recommends relevant offers, and calculates untapped revenue per client and across the agency.",
      },
      {
        title: "Dual operating pipelines",
        description:
          "Separate drag-and-drop Sales and Delivery boards keep prospecting work distinct from the client fulfillment process.",
      },
      {
        title: "Generated client documents",
        description:
          "Twenty-six proposals, contracts, invoices, welcome packets, and other documents are prefilled from live client data and exportable as PDFs.",
      },
      {
        title: "Agency playbooks",
        description:
          "One-click workflow templates preload the tasks and documents required when an agency wins a specific type of client engagement.",
      },
      {
        title: "Team and data controls",
        description:
          "Admin and Member roles provide controlled collaboration with strict separation of agency data and permissions.",
      },
      {
        title: "Analytics and billing",
        description:
          "Revenue, lead sources, performance, wins, and losses are tracked alongside Stripe and PayPal subscription billing for future SaaS plans.",
      },
    ],
    outcomeHeadline:
      "A working agency platform designed to become a scalable SaaS business.",
    outcomes: [
      "Currently used internally to operate a service agency",
      "Twenty-six repeatable documents generated from structured client information",
      "Sales and delivery workflows connected inside one responsive product",
      "A phased path from internal system to SaaS subscriptions and white-label licensing",
    ],
    stack: [
      "React 18",
      "Vite",
      "Supabase",
      "PostgreSQL",
      "Stripe",
      "PayPal",
      "Recharts",
      "Vercel",
    ],
    nextProject: { name: "Roadize", href: "/portfolio/roadize" },
  },
  {
    slug: "roadize",
    name: "Roadize",
    eyebrow: "DISPATCH OS & PROFESSIONAL TRAINING",
    headline:
      "One connected platform for dispatching work and learning the profession.",
    summary:
      "Roadize combines a professional trucking dispatch operating system with a bilingual training academy built around the decisions dispatchers make every day.",
    status: "Launch-ready",
    role: "Founder · Product Designer · Developer",
    year: "2026",
    image: {
      src: "/portfolio/roadize.webp",
      alt: "Roadize product overview showing Dispatch OS modules and Dispatch Academy capabilities.",
    },
    challenge: [
      "Independent dispatchers frequently operate through spreadsheets, load boards, messages, and disconnected documents. The tools available manage fragments of the job, but not the complete workflow a dispatcher is responsible for.",
      "People entering the profession face a second gap: video-heavy training explains terminology but rarely lets students practice evaluating loads, handling crises, onboarding carriers, or making the decisions required during a real shift.",
    ],
    solution: [
      "I designed Roadize as two connected products. Dispatch OS gives working dispatchers one command center for loads, trucks, drivers, brokers, income, expenses, documents, safety, analytics, and AI-assisted actions.",
      "Dispatch Academy teaches the profession through 70 structured lessons and interactive simulations. Students practice load selection, carrier onboarding, crisis response, interviews, and final assessments in English and Haitian Creole.",
    ],
    capabilitiesHeadline:
      "Professional operations and practical training built as one ecosystem.",
    capabilities: [
      {
        title: "Eleven-module Dispatch OS",
        description:
          "Loads, fleet, drivers, brokers, revenue, expenses, documents, safety, analytics, AI assistance, and settings operate inside one command center.",
      },
      {
        title: "Load and rate intelligence",
        description:
          "A live RPM evaluator, twelve-step load workflow, deadhead context, and rate-confirmation mismatch detection support faster, safer decisions.",
      },
      {
        title: "Fleet and compliance visibility",
        description:
          "Truck status, driver HOS, DQ files, insurance dates, DOT calendars, CSA indicators, and broker records are visible before they become problems.",
      },
      {
        title: "Seventy-lesson Academy",
        description:
          "Twelve phases take a learner from trucking fundamentals through client acquisition and building an independent dispatch company.",
      },
      {
        title: "Decision-based simulations",
        description:
          "A load board, crisis scenarios, carrier onboarding, interview practice, and an AI-assisted final exam replace passive learning with applied judgment.",
      },
      {
        title: "Installable bilingual products",
        description:
          "The OS, Academy, driver portal, and mobile alert view are responsive PWAs with offline support, notifications, and English–Kreyòl delivery.",
      },
    ],
    outcomeHeadline:
      "Two products that support the dispatcher from first lesson to daily operation.",
    outcomes: [
      "Eleven operating modules connected inside one dispatcher workflow",
      "Seventy lessons organized into twelve progressive training phases",
      "Interactive simulations for loads, crises, onboarding, interviews, and certification",
      "Desktop, mobile alert, and driver experiences delivered as installable PWAs",
    ],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Stripe",
      "Anthropic API",
      "Recharts",
      "PWA",
      "Vercel",
    ],
    nextProject: { name: "Pepinyè", href: "/portfolio/pepinye" },
  },
  {
    slug: "pepinye",
    name: "Pepinyè",
    eyebrow: "AGRICULTURAL EDUCATION IN HAITIAN CREOLE",
    headline:
      "Making practical gardening knowledge accessible in the language people use.",
    summary:
      "Pepinyè is a mobile-first agricultural education platform in Haitian Creole, combining practical articles, a plant encyclopedia, a planting calendar, and a foundation for local agricultural commerce.",
    status: "Live",
    role: "Founder · Product Designer · Developer · Content Strategist",
    year: "2026",
    image: {
      src: "/portfolio/pepinye.webp",
      alt: "Pepinyè Haitian Creole agricultural education homepage with a young seedling.",
    },
    challenge: [
      "Haiti imports much of its food despite fertile land and deep agricultural knowledge. Many useful gardening resources are written in French or English, leaving Haitian Creole speakers without clear, climate-specific guidance in the language they understand best.",
      "The need is not only for articles. Learners must know what to plant, when to plant it, how to respond to local conditions, and where to find information without navigating technical agricultural language.",
    ],
    solution: [
      "I created Pepinyè as a Haitian Creole-first learning platform organized around practical action. Its content system moves from beginner fundamentals to soil, plant problems, advanced growing methods, and earning income from gardening.",
      "The platform combines editorial learning with an eleven-plant encyclopedia and a twelve-month planting calendar that accounts for seasons, hurricane conditions, and traditional knowledge such as moon phases.",
    ],
    capabilitiesHeadline:
      "A complete learning foundation for growing food, plants, and local knowledge.",
    capabilities: [
      {
        title: "Haitian Creole-first content",
        description:
          "Long-form education is written for clarity in Haitian Creole instead of being treated as a secondary translation of French or English material.",
      },
      {
        title: "Structured learning library",
        description:
          "Twenty-four-plus articles span getting started, soil and fertilizer, problems and solutions, advanced methods, and agricultural income.",
      },
      {
        title: "Interactive plant encyclopedia",
        description:
          "Eleven detailed plant profiles connect growing instructions, practical uses, recipes, and common problem-and-solution guidance.",
      },
      {
        title: "Twelve-month planting calendar",
        description:
          "Monthly recommendations incorporate Haiti's seasons, hurricane alerts, and traditional moon-phase farming knowledge.",
      },
      {
        title: "Content management and SEO",
        description:
          "A protected admin CMS, structured metadata, social previews, sitemap, analytics, and search indexing support sustainable publishing and discovery.",
      },
      {
        title: "Marketplace-ready direction",
        description:
          "The product foundation anticipates a peer marketplace for seedlings and livestock alongside future education on raising animals and producing feed.",
      },
    ],
    outcomeHeadline:
      "A live educational product designed to grow into an agricultural ecosystem.",
    outcomes: [
      "A practical agricultural learning experience delivered entirely in Haitian Creole",
      "Twenty-four-plus articles and eleven detailed plant guides prepared for continued growth",
      "A mobile-optimized calendar translating seasonal knowledge into monthly action",
      "SEO, analytics, administration, and marketplace foundations included from launch",
    ],
    stack: [
      "React 18",
      "Vite",
      "React Router",
      "Vercel",
      "Google Analytics 4",
      "SEO Architecture",
      "Content Strategy",
      "Responsive Design",
    ],
    nextProject: { name: "Nichr", href: "/portfolio/nichr" },
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
