import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "header" | "footer";
};

export function Container({ children, className = "", as: Component = "div" }: ContainerProps) {
  return <Component className={`mx-auto w-[min(100%-40px,1180px)] ${className}`}>{children}</Component>;
}
