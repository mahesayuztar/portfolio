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
  "Laravel Sail": SiLaravel,
  Linux: SiLinux,
  MySQL: SiMysql,
  "Next.js": SiNextdotjs,
  PHP: SiPhp,
  Python: SiPython,
  React: SiReact,
  "Tailwind CSS": SiTailwindcss,
  TypeScript: SiTypescript,
};

const technologyIconPaths: Record<string, string> = {
  "C++": "/icons/tech/cplusplus.svg",
  EV3: "/icons/tech/robotics.svg",
  Midtrans: "/icons/tech/payment.svg",
  Netlify: "/icons/tech/netlify.svg",
  Networking: "/icons/tech/networking.svg",
  "REST APIs": "/icons/tech/rest-api.svg",
  Robotics: "/icons/tech/robotics.svg",
  Servers: "/icons/tech/server.svg",
  SPSS: "/icons/tech/spss.svg",
  SQL: "/icons/tech/sql.svg",
  VPS: "/icons/tech/server.svg",
};

type TechLabelProps = {
  technology: string;
  variant?: "inline" | "list";
};

export function TechLabel({ technology, variant = "inline" }: TechLabelProps) {
  const Icon = technologyIcons[technology];
  const iconPath = technologyIconPaths[technology];

  return (
    <span className={`inline-flex items-center gap-2 text-muted-ink ${variant === "inline" ? "border-b border-border pb-1 text-xs" : "text-sm"}`}>
      {Icon && <Icon className="size-3.5 shrink-0 text-accent" aria-hidden />}
      {!Icon && iconPath && (
        <span
          className="size-3.5 shrink-0 bg-accent"
          style={{ WebkitMask: `url(${iconPath}) center / contain no-repeat`, mask: `url(${iconPath}) center / contain no-repeat` }}
          aria-hidden
        />
      )}
      <span>{technology}</span>
    </span>
  );
}
