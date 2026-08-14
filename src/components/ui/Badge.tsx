import { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  className?: string;
  tone?: "surface" | "pink" | "purple" | "cream";
};

const toneClasses: Record<NonNullable<BadgeProps["tone"]>, string> = {
  surface: "bg-surface",
  pink: "bg-pink-soft",
  purple: "bg-purple-soft",
  cream: "bg-cream",
};

export function Badge({ children, className = "", tone = "surface" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border-[1.5px] border-ink px-3 py-1 text-xs font-medium text-ink ${toneClasses[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
