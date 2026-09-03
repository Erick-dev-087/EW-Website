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
  hook: string;
  problem: string;
  outcome: string;
  solution: string;
  cta: string;
  ctaQuestion: string;
  description: string;
  features: string[];
  forWho: string;
  workflow: string[];
}

export const services: Service[] = [
  {
    id: "web-applications",
    number: "01",
    title: "Websites & Digital Experiences",
    hook: "Want more people to discover your business and take you seriously when they do?",
    problem:
      "Your business exists. But online, it barely does. Potential customers can't find you, and when they do, your digital presence doesn't reflect the quality of what you actually offer.",
    outcome:
      "Become easier to discover, trust, and choose, with a digital presence that works as a real business asset.",
    solution:
      "We build websites and digital experiences designed around your customers and your business. Fast, polished, and built to grow with you.",
    cta: "Improve My Digital Presence →",
    ctaQuestion: "Ready to turn your online presence into a business asset?",
    description:
      "Your business deserves a digital presence that works as hard as you do. From custom platforms to customer-facing portals, every experience is designed to help people find you, trust you, and choose you.",
    features: [
      "Custom web platforms & portals",
      "Real-time dashboards & analytics",
      "E-commerce & marketplace solutions",
      "Progressive web applications",
      "API development & integration",
    ],
    forWho:
      "You've outgrown templates and page builders, and need a digital presence that truly represents your business.",
    workflow: [
      "Requirements workshop",
      "Architecture design",
      "Iterative development sprints",
      "Testing & QA",
      "Deployment & monitoring",
    ],
  },
  {
    id: "automation-ai",
    number: "02",
    title: "AI & Automation",
    hook: "Still paying people to do work a system could handle?",
    problem:
      "Your team spends hours on repetitive tasks like data entry, report generation, and manual follow-ups. That's time that should go toward work that actually moves the business forward.",
    outcome:
      "Free your team to focus on high-value work while intelligent systems handle the rest, accurately and around the clock.",
    solution:
      "We automate repetitive workflows and integrate AI capabilities so your team can spend more time on work that actually moves the business forward.",
    cta: "Find Automation Opportunities →",
    ctaQuestion: "Wondering what your business could automate?",
    description:
      "Stop losing hours to tasks a system could handle. We build intelligent automation workflows and integrate AI capabilities that save your team time, reduce errors, and let you scale without scaling headcount.",
    features: [
      "Business process automation",
      "AI/ML integration",
      "Document processing & OCR",
      "Chatbots & conversational AI",
      "Data pipeline automation",
    ],
    forWho:
      "Your team is spending too much time on repetitive tasks that machines could handle better, and it's slowing everything else down.",
    workflow: [
      "Process discovery",
      "Automation design",
      "AI model selection & training",
      "Integration & testing",
      "Monitoring & optimization",
    ],
  },
  {
    id: "custom-software",
    number: "03",
    title: "Custom Software",
    hook: "Outgrowing the way your business currently works?",
    problem:
      "You're forcing your business into someone else's software. Workarounds, spreadsheets, and disconnected tools that weren't built for how you actually operate.",
    outcome:
      "A system that fits your business instead of the other way around. Built around your actual processes, not someone else's assumptions.",
    solution:
      "We build systems around your actual processes instead of forcing your business into someone else's software. Internal tools, workflow systems, and platforms designed for exactly how you work.",
    cta: "Build a Better System →",
    ctaQuestion: "Ready to stop working around your software?",
    description:
      "When off-the-shelf tools don't fit, you shouldn't have to change how your business works. We build custom software tailored to your exact operational needs, including internal tools, workflow systems, and platforms designed for how you actually operate.",
    features: [
      "Internal business tools",
      "Workflow automation systems",
      "Data management platforms",
      "Legacy system modernization",
      "System integration & middleware",
    ],
    forWho:
      "Your business has unique processes, and you need software built around how you actually work, not the other way around.",
    workflow: [
      "Process audit & mapping",
      "Solution architecture",
      "Modular development",
      "User acceptance testing",
      "Training & handoff",
    ],
  },
  {
    id: "mobile-applications",
    number: "04",
    title: "Mobile Applications",
    hook: "What if your customers could take your business with them?",
    problem:
      "Your customers expect convenience. But your services are only accessible through a browser or in person, limiting when and how they can engage with your business.",
    outcome:
      "Your services become more accessible, convenient, and connected, available right in your customers' pockets.",
    solution:
      "We create mobile experiences that make your services more accessible, convenient, and connected. On both iOS and Android, with offline support and smooth performance.",
    cta: "Explore a Mobile Experience →",
    ctaQuestion: "Ready to put your business in your customers' hands?",
    description:
      "Your customers want to engage with your business on their terms. We build mobile experiences that make your services more accessible, convenient, and connected. Polished apps that work beautifully on both platforms.",
    features: [
      "Cross-platform (React Native)",
      "Native iOS & Android",
      "Offline-first architecture",
      "Push notifications & real-time updates",
      "App Store optimization & deployment",
    ],
    forWho:
      "You want to reach your customers on mobile with an experience that's as polished and reliable as your business itself.",
    workflow: [
      "User research & wireframing",
      "UI/UX design",
      "Development & device testing",
      "Beta testing program",
      "Store submission & launch",
    ],
  },
  {
    id: "ui-ux-design",
    number: "05",
    title: "UI / UX Design",
    hook: "Is your product powerful but painful to use?",
    problem:
      "Your product works, but users struggle with it. Confusing flows, cluttered screens, and poor first impressions are costing you customers and support hours.",
    outcome:
      "A product that feels intuitive from the first click. Your users stay longer, need less help, and actually enjoy using it.",
    solution:
      "We design interfaces that make complex things feel simple. Intuitive, accessible, and visually refined, because good design is good business.",
    cta: "Start a Design Audit →",
    ctaQuestion: "Want a product your users actually enjoy using?",
    description:
      "Your product should feel effortless to use. We create interfaces that are intuitive, accessible, and visually refined, turning complexity into clarity so your users stay, engage, and come back.",
    features: [
      "User research & personas",
      "Wireframing & prototyping",
      "Visual design systems",
      "Interaction design",
      "Usability testing",
    ],
    forWho:
      "Your product needs to look professional and feel effortless, because first impressions and usability directly impact your bottom line.",
    workflow: [
      "Discovery & research",
      "Information architecture",
      "Low-fidelity wireframes",
      "High-fidelity design",
      "Handoff & design QA",
    ],
  },
  {
    id: "seo",
    number: "06",
    title: "Search Engine Optimization",
    hook: "Are your competitors showing up where your customers are looking?",
    problem:
      "Your potential customers are searching for exactly what you offer, but they're finding your competitors instead. You're invisible where it matters most.",
    outcome:
      "Show up when your customers are looking, and stand out when they find you.",
    solution:
      "We optimize your digital presence to rank higher, drive organic traffic, and convert visitors into customers, so you stop relying solely on paid ads and word of mouth.",
    cta: "Get Found Online →",
    ctaQuestion: "Ready to show up where your customers are looking?",
    description:
      "Your potential customers are already searching for what you offer. We make sure they find you by optimizing your digital presence to rank higher, drive organic traffic, and turn visitors into customers.",
    features: [
      "Technical SEO & site speed",
      "Keyword strategy & content planning",
      "On-page & off-page optimization",
      "Local SEO & Google Business",
      "Analytics & performance tracking",
    ],
    forWho:
      "You want to increase your online visibility and stop relying solely on paid advertising or word of mouth to find customers.",
    workflow: [
      "Comprehensive site audit",
      "Keyword & competitor research",
      "Technical optimization",
      "Content strategy & creation",
      "Monthly reporting & refinement",
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
