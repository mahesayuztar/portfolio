import type { ReactNode } from "react";
import { CursorRevealHeading } from "@/components/ui/CursorRevealHeading";

type SectionHeadingProps = { title: ReactNode; subtitle?: ReactNode; className?: string };

export function SectionHeading({ title, subtitle, className = "" }: SectionHeadingProps) {
  return (
    <div className={className}>
      <CursorRevealHeading as="h2" className="max-w-3xl text-balance text-[clamp(2rem,5vw,4.5rem)] font-medium leading-[0.98] tracking-[-0.04em] text-ink">{title}</CursorRevealHeading>
      {subtitle && <p className="mt-5 max-w-2xl text-base leading-7 text-muted-ink">{subtitle}</p>}
    </div>
  );
}
