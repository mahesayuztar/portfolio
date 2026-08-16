import type { SkillCategory } from "@/types/content";

export const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    label: "Backend systems",
    items: ["Laravel", "PHP", "Golang", "CodeIgniter", "REST APIs", "Midtrans"],
  },
  {
    id: "frontend",
    label: "Product interfaces",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Bootstrap"],
  },
  {
    id: "data",
    label: "Data & delivery",
    items: ["Python", "SQL", "MySQL", "SPSS", "Docker", "Linux", "VPS"],
  },
  {
    id: "systems",
    label: "Systems with people",
    items: ["Networking", "Robotics", "Requirement analysis", "Teaching", "Leadership"],
  },
];
