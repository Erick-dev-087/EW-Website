// ──────────────────────────────────────────────
// Centralized Content Data
// ──────────────────────────────────────────────

// ── Projects ──────────────────────────────────
export interface Project {
  slug: string;
  title: string;
  category: string;
  categoryTag: string;
  shortDescription: string;
  description: string;
  challenge: string;
  solution: string;
  process: string;
  result: string;
  technologies: string[];
  image: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "fintech-dashboard",
    title: "Fintech Dashboard",
    category: "WEB",
    categoryTag: "Fintech Platform",
    shortDescription:
      "Payment infrastructure for modern businesses.",
    description:
      "A comprehensive financial dashboard that provides real-time analytics, transaction monitoring, and payment processing for a growing fintech startup.",
    challenge:
      "The client needed a unified platform to manage multiple payment channels, reconcile transactions in real-time, and provide actionable financial insights to their merchants.",
    solution:
      "We built a modular dashboard with real-time data streaming, customizable widgets, and multi-currency support. The system processes thousands of transactions per second with sub-second latency.",
    process:
      "Starting with extensive stakeholder interviews, we mapped the complete transaction lifecycle, designed a scalable data architecture, and built iteratively with weekly demos.",
    result:
      "The platform now processes over 50,000 daily transactions with 99.99% uptime. Merchant onboarding time was reduced from 2 weeks to 48 hours.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Stripe API", "AWS"],
    image: "/projects/fintech-dashboard.png",
    featured: true,
  },
  {
    slug: "mobile-health-app",
    title: "Health & Wellness App",
    category: "MOBILE",
    categoryTag: "Mobile Application",
    shortDescription:
      "Personal health tracking reimagined for modern users.",
    description:
      "A cross-platform mobile application that integrates with wearable devices to provide personalized health insights, workout tracking, and nutrition planning.",
    challenge:
      "Users needed a single app that could aggregate health data from multiple wearable brands and provide meaningful, actionable insights rather than raw numbers.",
    solution:
      "We developed a React Native application with a custom data normalization engine that unifies data from Fitbit, Apple Health, and Garmin into a coherent health narrative.",
    process:
      "We conducted user research with fitness enthusiasts and healthcare professionals, built a data pipeline for wearable integration, and refined the UX through three rounds of beta testing.",
    result:
      "The app achieved a 4.7-star rating on both app stores with 15,000 active monthly users within the first quarter of launch.",
    technologies: ["React Native", "Node.js", "MongoDB", "HealthKit", "Google Fit API"],
    image: "/projects/health-app.png",
    featured: true,
  },
  {
    slug: "analytics-platform",
    title: "Data Analytics Platform",
    category: "SOFTWARE",
    categoryTag: "Custom Software",
    shortDescription:
      "Enterprise analytics that turns data into decisions.",
    description:
      "A custom analytics platform built for a logistics company to optimize fleet management, predict maintenance needs, and reduce operational costs.",
    challenge:
      "The company was drowning in data from GPS trackers, fuel sensors, and maintenance logs scattered across multiple disconnected systems.",
    solution:
      "We built a centralized analytics platform with interactive dashboards, predictive maintenance algorithms, and automated reporting that connects all data sources.",
    process:
      "Deep-diving into their operations, we identified key data sources, designed ETL pipelines, built predictive models, and deployed a real-time monitoring dashboard.",
    result:
      "Fleet downtime reduced by 35%, fuel costs dropped by 18%, and maintenance scheduling accuracy improved to 92%.",
    technologies: ["Python", "React", "PostgreSQL", "TensorFlow", "Docker", "GCP"],
    image: "/projects/analytics-platform.png",
    featured: true,
  },
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    category: "WEB",
    categoryTag: "Web Application",
    shortDescription:
      "A scalable storefront built for growth.",
    description:
      "A custom e-commerce platform with multi-vendor support, real-time inventory management, and an AI-powered product recommendation engine.",
    challenge:
      "The client outgrew their existing Shopify setup and needed a custom solution that could handle their unique multi-vendor marketplace model.",
    solution:
      "We built a headless commerce platform with independent vendor dashboards, real-time stock synchronization, and personalized product recommendations.",
    process:
      "We migrated their existing catalog, designed a vendor onboarding flow, built the recommendation engine, and executed a phased rollout to minimize disruption.",
    result:
      "Average order value increased by 24% through recommendations. Vendor onboarding time dropped from days to hours.",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Redis", "Algolia", "Vercel"],
    image: "/projects/fintech-dashboard.png",
    featured: false,
  },
  {
    slug: "automation-workflow",
    title: "Business Automation Suite",
    category: "AUTOMATION",
    categoryTag: "Automation & AI",
    shortDescription:
      "Intelligent workflows that eliminate manual work.",
    description:
      "An automation platform that streamlined document processing, client communication, and reporting for a professional services firm.",
    challenge:
      "The firm spent 30+ hours per week on manual data entry, document formatting, and report generation, time better spent on client work.",
    solution:
      "We designed intelligent workflows using OCR, NLP, and custom integrations that automatically process documents, generate reports, and sync data across systems.",
    process:
      "We audited their manual processes, identified automation opportunities, built custom integrations with their existing tools, and trained their team.",
    result:
      "Manual processing time reduced by 85%. The firm now handles 3x more clients without additional administrative staff.",
    technologies: ["Python", "OpenAI API", "Zapier", "Google Cloud", "PostgreSQL"],
    image: "/projects/analytics-platform.png",
    featured: false,
  },
  {
    slug: "inventory-mobile",
    title: "Inventory Management App",
    category: "MOBILE",
    categoryTag: "Mobile Application",
    shortDescription:
      "Real-time inventory control from anywhere.",
    description:
      "A mobile-first inventory management system with barcode scanning, real-time stock tracking, and automated reorder alerts.",
    challenge:
      "Warehouse staff relied on paper-based tracking and desktop-only software, leading to stock discrepancies and missed reorder windows.",
    solution:
      "We built a mobile app with offline-first architecture, barcode/QR scanning, and real-time sync that works reliably in warehouse environments with poor connectivity.",
    process:
      "On-site observation of warehouse workflows informed the UX design. We built the offline sync engine first, then layered on scanning and reporting features.",
    result:
      "Stock accuracy improved from 82% to 98%. Reorder response time decreased from 3 days to 4 hours.",
    technologies: ["React Native", "Node.js", "SQLite", "Firebase", "REST API"],
    image: "/projects/health-app.png",
    featured: false,
  },
];

// ── Services ──────────────────────────────────
export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  features: string[];
  forWho: string;
  workflow: string[];
}

export const services: Service[] = [
  {
    id: "web-applications",
    number: "01",
    title: "Web Applications",
    description:
      "We build fast, scalable web applications designed around your business. From complex dashboards to customer-facing platforms, every application is built for performance, security, and growth.",
    features: [
      "Custom web platforms & portals",
      "Real-time dashboards & analytics",
      "E-commerce & marketplace solutions",
      "Progressive web applications",
      "API development & integration",
    ],
    forWho: "Businesses that need custom web solutions beyond what templates and page builders can offer.",
    workflow: [
      "Requirements workshop",
      "Architecture design",
      "Iterative development sprints",
      "Testing & QA",
      "Deployment & monitoring",
    ],
  },
  {
    id: "mobile-applications",
    number: "02",
    title: "Mobile Applications",
    description:
      "Native and cross-platform mobile experiences that users actually want to open. We build apps that work beautifully on both iOS and Android, with offline support and smooth performance.",
    features: [
      "Cross-platform (React Native)",
      "Native iOS & Android",
      "Offline-first architecture",
      "Push notifications & real-time updates",
      "App Store optimization & deployment",
    ],
    forWho: "Companies looking to reach users on mobile with a polished, performant application.",
    workflow: [
      "User research & wireframing",
      "UI/UX design",
      "Development & device testing",
      "Beta testing program",
      "Store submission & launch",
    ],
  },
  {
    id: "custom-software",
    number: "03",
    title: "Custom Software",
    description:
      "When off-the-shelf tools don't fit, we build custom software tailored to your exact operational needs. Internal tools, workflow systems, and specialized platforms designed to solve your specific problems.",
    features: [
      "Internal business tools",
      "Workflow automation systems",
      "Data management platforms",
      "Legacy system modernization",
      "System integration & middleware",
    ],
    forWho: "Organizations with unique processes that need software built around how they actually work.",
    workflow: [
      "Process audit & mapping",
      "Solution architecture",
      "Modular development",
      "User acceptance testing",
      "Training & handoff",
    ],
  },
  {
    id: "automation-ai",
    number: "04",
    title: "Automation & AI",
    description:
      "Eliminate manual work and unlock insights with intelligent automation. We integrate AI capabilities and build custom automation workflows that save time and reduce errors.",
    features: [
      "Business process automation",
      "AI/ML integration",
      "Document processing & OCR",
      "Chatbots & conversational AI",
      "Data pipeline automation",
    ],
    forWho: "Teams spending too much time on repetitive tasks that machines could handle better.",
    workflow: [
      "Process discovery",
      "Automation design",
      "AI model selection & training",
      "Integration & testing",
      "Monitoring & optimization",
    ],
  },
  {
    id: "ui-ux-design",
    number: "05",
    title: "UI / UX Design",
    description:
      "Design that makes complex things feel simple. We create interfaces that are intuitive, accessible, and visually refined, because good design is good business.",
    features: [
      "User research & personas",
      "Wireframing & prototyping",
      "Visual design systems",
      "Interaction design",
      "Usability testing",
    ],
    forWho: "Products that need to look professional and feel effortless to use.",
    workflow: [
      "Discovery & research",
      "Information architecture",
      "Low-fidelity wireframes",
      "High-fidelity design",
      "Handoff & design QA",
    ],
  },
];

// ── Process Steps ─────────────────────────────
export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand the business, users, goals, and challenges. We dig deep before we design or build anything.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Turn the idea into a clear and useful product experience. Every screen, flow, and interaction is purposeful.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Develop, test, refine, and integrate the necessary systems. Clean code, solid architecture, continuous delivery.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Deploy the product and continue improving it. We don't disappear after launch. We stay until it's right.",
  },
];

// ── Clients ───────────────────────────────────
export interface Client {
  name: string;
  logo: string;
  width: number;
  height: number;
}

export const clients: Client[] = [
  {
    name: "SPE International, Kenyatta University Chapter",
    logo: "/clients/spe-ku.jpeg",
    width: 120,
    height: 120,
  },
  {
    name: "Young I.G Auto-Solution",
    logo: "/clients/young-ig.png",
    width: 120,
    height: 120,
  },
];

// ── Filter Categories ─────────────────────────
export const projectCategories = [
  { label: "All", value: "ALL" },
  { label: "Web", value: "WEB" },
  { label: "Mobile", value: "MOBILE" },
  { label: "Software", value: "SOFTWARE" },
  { label: "Automation", value: "AUTOMATION" },
] as const;
