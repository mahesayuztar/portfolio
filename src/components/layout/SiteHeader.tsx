import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Plus } from "lucide-react";
import Link from "next/link";

const navigationItems = [
  { href: "/#about", label: "About" },
  { href: "/#journey", label: "Journey" },
  { href: "/#projects", label: "Projects" },
  { href: "/recognition", label: "Recognition" },
  { href: "/beyond-code", label: "Beyond" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto w-[min(100%-40px,1180px)]">
        <div className="flex min-h-16 items-center justify-between gap-5">
          <Link href="/" className="shrink-0 font-heading text-sm font-medium tracking-tight">Mahesa Yuztar</Link>
          <nav aria-label="Primary navigation" className="desktop-navigation">
            <ul className="flex items-center gap-5">
              {navigationItems.map((item) => <li key={item.href}><a href={item.href} className="text-xs text-muted-ink transition-colors hover:text-ink">{item.label}</a></li>)}
            </ul>
          </nav>
          <div className="ml-auto flex items-center gap-3 lg:ml-0">
            <a href="mailto:mahesayuztar@gmail.com" className="hidden text-xs text-accent transition-colors hover:text-accent-strong sm:block">Available for a conversation</a>
            <ThemeToggle />
          </div>
        </div>

        <details className="mobile-navigation group border-t border-border">
          <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between text-xs uppercase tracking-[0.18em] text-muted-ink transition-colors hover:text-ink">
            <span>Navigate</span>
            <span className="flex items-center gap-2 normal-case tracking-normal"><span className="text-faint-ink group-open:hidden">Open menu</span><span className="hidden text-faint-ink group-open:inline">Close menu</span><Plus size={16} className="transition-transform duration-200 group-open:rotate-45" aria-hidden /></span>
          </summary>
          <nav aria-label="Mobile navigation" className="border-t border-border pb-4 pt-2">
            <ul>
              {navigationItems.map((item, _index) => (
                <li key={item.href}>
                  <a href={item.href} className="group/link grid grid-cols-[2rem_1fr_auto] items-center gap-3 border-b border-border/70 py-3.5 text-ink transition-colors hover:text-accent">
                    <span className="font-heading text-[10px] text-faint-ink">{String(_index + 1).padStart(2, "0")}</span>
                    <span className="text-base font-medium tracking-[-0.015em]">{item.label}</span>
                    <span className="text-sm text-faint-ink transition-transform group-hover/link:translate-x-1" aria-hidden>→</span>
                  </a>
                </li>
              ))}
            </ul>
            <a href="mailto:mahesayuztar@gmail.com" className="mt-4 flex items-center justify-between rounded-md bg-surface px-4 py-3 text-xs text-muted-ink"><span>Start a conversation</span><span className="text-accent">Email ↗</span></a>
          </nav>
        </details>
      </div>
    </header>
  );
}
