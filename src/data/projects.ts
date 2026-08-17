import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
  slug: "sisgo-erp",
  index: "05",
  title: "ERP",
  category: "Enterprise Resource Planning",
  year: "2026",
  description:
    "Integrated ERP platform covering finance, sales, procurement, inventory, and other enterprise operations.",
  role: "Software Engineer — Financial Business Logic & ERP Development",
  stack: [
    "Laravel",
    "Next.js",
    "PostgreSQL",
    "SQL Server",
    "DataGrip",
  ],
  problem:
    "Complex enterprise operations required financial, inventory, sales, and procurement processes to remain synchronized while maintaining accounting consistency across interconnected modules.",
  solution:
    "Developed and maintained ERP business logic with a primary focus on financial systems including general ledger, accounts receivable, balance sheets, automatic journal posting, inventory costing (HPP), and transaction flows across sales, procurement, inventory, and other operational modules.",
  mockups: [],
  internal: true,
},
{
  slug: "sisgo-website-builder",
  index: "06",
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
    index: "01",
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
    mockups: [],
  },
  {
    slug: "solusi-desa",
    index: "02",
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
    mockups: [],
  },
  {
    slug: "fruitguard-plus",
    index: "03",
    title: "FruitGuard+",
    category: "Commercial / Product Website",
    year: "2024",
    description: "Public product site for the FruitGuard+ innovation.",
    role: "Fullstack Development",
    stack: ["HTML", "Tailwind CSS", "jQuery", "Netlify"],
    problem:
      "The prototype needed a clear public explanation for potential adopters.",
    solution: "Designed and deployed a responsive product narrative on Netlify.",
    mockups: [],
  },
  {
    slug: "govind-abra-enterprise",
    index: "04",
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
  },
];
