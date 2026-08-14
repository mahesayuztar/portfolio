import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "header" | "footer";
};

export function Container({ children, className = "", as: As = "div" }: ContainerProps) {
  return (
    <As className={`w-[min(100%-32px,1280px)] mx-auto ${className}`}>
      {children}
    </As>
  );
}
