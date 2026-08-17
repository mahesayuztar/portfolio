import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    slug: "budgeting",
    title: "Budgeting",
    category: "Personal Finance Management",
    year: "2026",
    description:
      "Personal finance platform for managing balances, transactions, savings, debts, analytics, and financial reports across multiple accounts.",
    role: "Fullstack Development — Product Design & Financial System Architecture",
    stack: ["Node.js", "Next.js", "Prisma", "Supabase", "PostgreSQL"],
    problem:
      "Managing personal finances across multiple bank accounts, cash balances, savings goals, debts, and transaction categories can become fragmented, making it difficult to understand overall financial health and spending patterns.",
    solution:
      "Built a customizable personal finance system with multi-account balance management, transaction tracking, savings, debt and receivable management, dashboard analytics, monthly and yearly reports, and user-defined accounts and transaction categories to accommodate individual financial needs.",
    mockups: [
      { src: "/images/projects/budgeting/1.webp", alt: "Budgeting application dashboard overview" },
      { src: "/images/projects/budgeting/2.webp", alt: "Budgeting application transaction management" },
      { src: "/images/projects/budgeting/3.webp", alt: "Budgeting application financial analytics" },
      { src: "/images/projects/budgeting/4.webp", alt: "Budgeting application account settings" },
    ],
    link: "https://budgeting-khaki.vercel.app/dashboard"
  },
  {
  slug: "sisgo-erp",
  title: "ERP",
  category: "Enterprise Resource Planning",
  year: "2026",
  description:
    "Integrated ERP platform covering finance, sales, procurement, inventory, and other enterprise operations.",
  role: "Software Engineer — Financial Business Logic & ERP Development",
  stack: [
    "Laravel",
    "Next.js",
    "SQL Server",
    "DataGrip",
  ],
  problem:
    "Complex enterprise operations required financial, inventory, sales, and procurement processes to remain synchronized while maintaining accounting consistency across interconnected modules.",
  solution:
    "Developed and maintained ERP business logic with a primary focus on financial systems including general ledger, accounts receivable, balance sheets, automatic journal posting, inventory costing (COGS), and transaction flows across sales, procurement, inventory, and other operational modules.",
  mockups: [],
  internal: true,
},
{
  slug: "sisgo-website-builder",
  title: "Website Builder",
  category: "Platform / Website Builder",
  year: "2026",
  description:
    "Scalable website-building platform designed around reusable packages and extensible components.",
  role: "Software Engineer — Architecture & Platform Development",
  stack: [
    "Laravel",
    "Next.js",
    "React",
    "PostgreSQL",
  ],
  problem:
    "Building and maintaining multiple websites independently created duplicated implementations and made features increasingly difficult to reuse, distribute, and scale.",
  solution:
    "Designed a reusable website-builder architecture centered on scalability, package-based functionality, shared components, and modular development so features can be developed once and reused across multiple websites.",
  mockups: [],
  internal: true,
},
  {
    slug: "mentorin",
    title: "Mentorin",
    category: "Education / CBT Platform",
    year: "2024",
    description: "Timed CBT platform for entrance-exam practice.",
    role: "Fullstack Development",
    stack: ["Laravel", "MySQL", "Bootstrap", "jQuery", "Midtrans"],
    problem:
      "Static question banks did not reproduce timed test conditions or give students a useful post-exam review.",
    solution:
      "Built authentication, Midtrans payment, timed exam delivery, scoring, answer discussion, result history, and VPS deployment.",
    mockups: [
      { src: "/images/projects/mentorin/1.webp", alt: "Mentorin learning platform homepage" },
      { src: "/images/projects/mentorin/2.webp", alt: "Mentorin examination package selection" },
      { src: "/images/projects/mentorin/3.webp", alt: "Mentorin timed examination interface" },
      { src: "/images/projects/mentorin/4.webp", alt: "Mentorin examination question interface" },
      { src: "/images/projects/mentorin/5.webp", alt: "Mentorin examination result summary" },
      { src: "/images/projects/mentorin/6.webp", alt: "Mentorin answer discussion interface" },
    ],
  },
  {
    slug: "solusi-desa",
    title: "Solusi Desa",
    category: "Civic Technology",
    year: "2024",
    description: "Citizen complaint submission and administration system.",
    role: "Fullstack Development",
    stack: ["Laravel", "MySQL", "Bootstrap", "jQuery"],
    problem:
      "Reports needed evidence, ownership, status history, and an administrative response workflow.",
    solution:
      "Built authenticated citizen and admin flows with image attachments, complaint history, review, and responses.",
    mockups: [
      { src: "/images/projects/solusi-desa/1.webp", alt: "Solusi Desa public complaint homepage" },
      { src: "/images/projects/solusi-desa/2.webp", alt: "Solusi Desa complaint submission interface" },
      { src: "/images/projects/solusi-desa/3.webp", alt: "Solusi Desa complaint tracking interface" },
    ],
  },
  {
    slug: "fruitguard-plus",
    title: "FruitGuard+",
    category: "Commercial / Product Website",
    year: "2024",
    description: "Public product site for the FruitGuard+ innovation.",
    role: "Fullstack Development",
    stack: ["HTML", "Tailwind CSS", "jQuery", "Netlify"],
    problem:
      "The prototype needed a clear public explanation for potential adopters.",
    solution: "Designed and deployed a responsive product narrative on Netlify.",
    mockups: [
      { src: "/images/projects/fruit-guard/1.webp", alt: "FruitGuard+ product website introduction" },
      { src: "/images/projects/fruit-guard/2.webp", alt: "FruitGuard+ product benefits section" },
      { src: "/images/projects/fruit-guard/3.webp", alt: "FruitGuard+ product information section" },
    ],
    link: "https://fruit-guard.netlify.app"
  },
  {
    slug: "govind-abra-enterprise",
    title: "Govind Abra Enterprise",
    category: "Business Platform",
    year: "2024",
    description: "Certification registration, administration, and payment platform.",
    role: "Fullstack Development",
    stack: [
      "Laravel",
      "Tailwind CSS",
      "MySQL",
      "Docker",
      "Laravel Sail",
      "Midtrans",
    ],
    problem:
      "Profile, registration, certification administration, and payments were handled in disconnected processes.",
    solution:
      "Unified participant registration, certification management, admin tools, and Midtrans payment in a Dockerized Laravel application.",
    mockups: [],
    internal: true
  },
];
