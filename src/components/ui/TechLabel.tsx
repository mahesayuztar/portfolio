import type { IconType } from "react-icons";
import {
  SiBootstrap,
  SiCodeigniter,
  SiDocker,
  SiGit,
  SiGo,
  SiJquery,
  SiLaravel,
  SiLinux,
  SiMysql,
  SiNextdotjs,
  SiPhp,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const technologyIcons: Record<string, IconType> = {
  Bootstrap: SiBootstrap,
  CodeIgniter: SiCodeigniter,
  Docker: SiDocker,
  Git: SiGit,
  Golang: SiGo,
  jQuery: SiJquery,
  Laravel: SiLaravel,
  Linux: SiLinux,
  MySQL: SiMysql,
  "Next.js": SiNextdotjs,
  PHP: SiPhp,
  Python: SiPython,
  React: SiReact,
  "Tailwind CSS": SiTailwindcss,
  TypeScript: SiTypescript,
};

type TechLabelProps = {
  technology: string;
  variant?: "inline" | "list";
};

export function TechLabel({ technology, variant = "inline" }: TechLabelProps) {
  const Icon = technologyIcons[technology];

  return (
    <span className={`inline-flex items-center gap-2 text-muted-ink ${variant === "inline" ? "border-b border-border pb-1 text-xs" : "text-sm"}`}>
      {Icon && <Icon className="size-3.5 shrink-0 text-accent" aria-hidden />}
      <span>{technology}</span>
    </span>
  );
}
