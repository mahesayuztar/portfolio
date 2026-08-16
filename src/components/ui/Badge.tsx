import type { ReactNode } from "react";

export function Badge({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`inline-flex border-b border-border pb-1 text-xs text-muted-ink ${className}`}>{children}</span>;
}
