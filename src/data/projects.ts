import type { Project } from "@/types/content";

export const projects: Project[] = [
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
