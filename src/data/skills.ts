import { SkillCategory } from "@/types/content";

export const skillCategories: SkillCategory[] = [
  {
    id: "build",
    label: "Build",
    items: ["React", "Next.js", "TypeScript", "Laravel", "PHP", "Tailwind"],
  },
  {
    id: "data",
    label: "Data",
    items: ["MySQL", "SQL Server", "Python", "Excel"],
  },
  {
    id: "ship",
    label: "Ship",
    items: ["Docker", "Linux", "VPS", "Git"],
  },
  {
    id: "human",
    label: "Work with humans",
    items: ["Communication", "Leadership", "Teaching", "Requirement analysis"],
  },
];

export const marqueeSkills: string[] = [
  "LARAVEL",
  "NEXT.JS",
  "TYPESCRIPT",
  "MYSQL",
  "DOCKER",
  "TAILWIND",
];
