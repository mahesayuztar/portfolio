import type { SkillCategory } from "@/types/content";

export const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    label: "Backend systems",
    description: "Production APIs and operational flows that remain understandable after launch.",
    items: ["Laravel", "PHP", "Golang", "CodeIgniter", "REST APIs", "Midtrans"],
  },
  {
    id: "frontend",
    label: "Product interfaces",
    description: "Responsive interfaces that make complex processes easier to complete.",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Bootstrap"],
  },
  {
    id: "data",
    label: "Data & delivery",
    description: "Analysis, persistence, and the infrastructure required to ship reliably.",
    items: ["Python", "SQL", "MySQL", "SPSS", "Docker", "Linux", "VPS"],
  },
  {
    id: "systems",
    label: "Systems with people",
    description: "Technical work strengthened by teaching, leadership, and clear requirements.",
    items: ["Networking", "Robotics", "Requirement analysis", "Teaching", "Leadership"],
  },
];
