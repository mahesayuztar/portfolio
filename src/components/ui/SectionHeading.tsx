import { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`${align === "center" ? "text-center" : "text-left"} ${className}`}>
      {eyebrow && (
        <span className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-muted-ink">
          <span aria-hidden>✦</span>
          {eyebrow}
        </span>
      )}
      <h2 className="text-[clamp(32px,4.5vw,52px)] leading-[1.1] font-semibold text-ink">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-xl text-base text-muted-ink">{subtitle}</p>
      )}
    </div>
  );
}
