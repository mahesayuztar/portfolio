import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Menu, X } from "lucide-react";
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
            <details className="mobile-navigation group relative">
              <summary className="flex size-10 cursor-pointer list-none items-center justify-center rounded-full border border-border bg-surface text-muted-ink transition-colors hover:border-border-strong hover:text-ink" aria-label="Toggle navigation menu">
                <Menu size={17} className="group-open:hidden" aria-hidden />
                <X size={17} className="hidden group-open:block" aria-hidden />
              </summary>
              <nav aria-label="Mobile navigation" className="absolute right-0 top-12 w-[min(21rem,calc(100vw-40px))] rounded-md border border-border bg-window p-3 window-shadow">
                <ul className="mt-1">
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
              </nav>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
}
