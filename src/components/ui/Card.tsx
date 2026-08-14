import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  tone?: "white" | "surface" | "primary" | "secondary" | "cream";
  shadow?: "none" | "sm" | "soft" | "offset";
  notch?: boolean;
  as?: "div" | "article";
};

const toneClasses: Record<NonNullable<CardProps["tone"]>, string> = {
  white: "bg-white",
  surface: "bg-surface",
  primary: "bg-primary",
  secondary: "bg-secondary",
  cream: "bg-cream",
};

const shadowClasses: Record<NonNullable<CardProps["shadow"]>, string> = {
  none: "",
  sm: "shadow-offset-sm",
  soft: "shadow-offset-soft",
  offset: "shadow-offset",
};

const notchClip =
  "polygon(0 0, calc(100% - 22px) 0, 100% 22px, 100% 100%, 0 100%)";

export function Card({
  children,
  className = "",
  tone = "white",
  shadow = "none",
  notch = false,
  as: As = "div",
}: CardProps) {
  return (
    <As
      className={`rounded-xl border-ink p-6 ${toneClasses[tone]} ${shadowClasses[shadow]} ${className}`}
      style={notch ? { clipPath: notchClip } : undefined}
    >
      {children}
    </As>
  );
}
