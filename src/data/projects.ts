import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    slug: "mentorin",
    index: "01",
    title: "Mentorin",
    category: "Education / CBT Platform",
    year: "2024",
    description:
      "A CBT platform designed to reproduce the experience of real entrance exams.",
    longDescription:
      "Mentorin needed to reproduce the workflow of a real entrance exam while handling authentication, payment, timed testing, and result reporting. I built the application around those flows, using Laravel and MySQL for the application and Midtrans for payment.",
    role: "Fullstack Development",
    stack: ["Laravel", "MySQL", "Bootstrap", "jQuery", "Midtrans"],
    problem:
      "Students preparing for entrance exams needed a way to practice under conditions that actually resemble the real test — timed, scored, and reviewable afterwards, not just a static bank of questions.",
    solution:
      "I built a CBT platform that runs timed exams, handles authentication and payment through Midtrans, and gives students a full answer discussion and result recap after each attempt. I also handled the VPS deployment myself.",
    highlights: [
      "Timed CBT examination system",
      "Answer discussion after each attempt",
      "Result recap & scoring",
      "Authentication & payment via Midtrans",
      "VPS deployment",
    ],
    mockups: [],
  },
  {
    slug: "solusi-desa",
    index: "02",
    title: "Solusi Desa",
    category: "Civic Technology",
    year: "2024",
    description:
      "A complaint management platform designed to make reporting public issues easier for citizens.",
    longDescription:
      "Citizens needed a straightforward way to report public issues — with evidence attached and a way to track what happens next — instead of complaints disappearing into a phone call or a form nobody reads. I built the submission flow, the admin side that manages and responds to reports, and the authentication that ties both together.",
    role: "Fullstack Development",
    stack: ["Laravel", "MySQL", "Bootstrap", "jQuery"],
    problem:
      "There was no easy channel for citizens to report public issues with evidence and get visibility into what happened to their report afterwards.",
    solution:
      "I built a complaint platform with image attachments, a per-user complaint history, and an integrated admin system for reviewing and responding to reports — all behind authentication.",
    highlights: [
      "Complaint submission with image attachment",
      "User complaint history",
      "Integrated admin system",
      "Authentication",
    ],
    mockups: [],
  },
  {
    slug: "fruitguard-plus",
    index: "03",
    title: "FruitGuard+",
    category: "Commercial / Product Website",
    year: "2024",
    description:
      "A commercial website created to introduce and communicate the FruitGuard+ innovation.",
    longDescription:
      "FruitGuard+ needed a public-facing site that could clearly explain what the product does and why it matters, built to be fast and simple to deploy rather than over-engineered for a marketing page.",
    role: "Fullstack Development",
    stack: ["HTML", "Tailwind CSS", "jQuery", "Netlify"],
    problem:
      "The FruitGuard+ innovation needed a way to communicate its value to potential adopters, not just exist as an internal prototype.",
    solution:
      "I built a responsive product website presenting the innovation clearly, deployed on Netlify for fast, simple hosting.",
    highlights: [
      "Responsive product presentation",
      "Clear product information architecture",
      "Commercial landing experience",
    ],
    mockups: [],
  },
  {
    slug: "govind-abra-enterprise",
    index: "04",
    title: "Govind Abra Enterprise",
    category: "Business Platform",
    year: "2024",
    description:
      "A company platform combining company profile, certification registration, administration, and online payment.",
    longDescription:
      "The company needed one platform to present itself, manage certification registrations, run administration, and take payments — instead of stitching together separate disconnected tools.",
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
      "Company profile, certification registration, administration, and payment were spread across disconnected tools with no single source of truth.",
    solution:
      "I built a Laravel platform combining participant registration, certification management, an admin panel, and automated payment through Midtrans, containerized with Docker and Laravel Sail for consistent deployment.",
    highlights: [
      "Participant registration",
      "Certification management",
      "Admin panel",
      "Automated payment via Midtrans",
    ],
    mockups: [],
  },
];
