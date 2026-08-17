import type { Achievement, Certificate } from "@/types/content";

export const achievements: Achievement[] = [
  {
    id: "btc-open-2026",
    title: "2nd Place — Junior Team",
    event: "3rd BTC International Bridge Open Tournament",
    year: "2026",
    context:
      "Earned second place in the Junior Team category, applying partnership coordination, probabilistic reasoning, and disciplined decision-making throughout a competitive bridge tournament.",
    image: "/images/recognition/bridge-1-achievement_11zon.webp",
    imageAlt:
      "Certificate awarding Mahesa Yuztar second place in the Junior Team category at the 3rd BTC Bridge Open Tournament 2026",
  },
  {
    id: "mcf-itb",
    title: "2nd Place",
    event: "Data Science Competition — MCF ITB",
    year: "2024",
    context: "Worked with a team to turn an unfamiliar dataset into a clear analytical argument under competition pressure.",
    image: "/images/recognition/mcf-itb_8_11zon.webp",
    imageAlt: "Mahesa and his team holding the second-place award at MCF ITB 2024",
  },
  {
    id: "bridge-province",
    title: "1st Place",
    event: "East Java Provincial Open Pairs Bridge Championship",
    year: "2024",
    context: "A result shaped by pattern recognition, partnership, and making careful decisions with incomplete information.",
  },
  {
    id: "bridge-batu",
    title: "3rd Place",
    event: "Batu Mayor's Cup Junior Pairs Bridge",
    year: "2024",
    context: "Competitive bridge became another way to practice composure, communication, and strategic reasoning.",
  },
  {
    id: "kri",
    title: "National Finalist",
    event: "Kontes Robot Indonesia — KRSBI-H",
    year: "2024",
    context: "Built and integrated behavior for a humanoid soccer robot where software had to negotiate real hardware constraints.",
  },
];

export const certificates: Certificate[] = [
  { id: "toefl", issuer: "IIEF", title: "TOEFL ITP — 553", year: "2026" },
  { id: "ibm-ds", issuer: "IBM", title: "Introduction to Data Science", year: "2025" },
  { id: "cisco-nae", issuer: "Cisco", title: "Network Automation Engineering Fundamentals", year: "2025" },
  { id: "oracle", issuer: "Oracle", title: "OCI Data Foundations Associate", year: "2025" },
  { id: "ibm-ai", issuer: "IBM", title: "Generative AI for Data Engineers", year: "2025" },
  { id: "deeplearning", issuer: "DeepLearning.AI", title: "Mathematics for Machine Learning and Data Science", year: "2025" },
  { id: "dqlab", issuer: "DQLab", title: "Data Analyst Project: Business Decision Research", year: "2025" },
  { id: "cisco-it", issuer: "Cisco", title: "IT Essentials", year: "2024" },
];
