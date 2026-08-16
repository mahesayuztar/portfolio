import { ThemeToggle } from "@/components/ui/ThemeToggle";
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
      <div className="mx-auto flex min-h-16 w-[min(100%-40px,1180px)] items-center justify-between gap-5">
        <Link href="/" className="shrink-0 font-heading text-sm font-medium tracking-tight">Mahesa Yuztar</Link>
        <nav aria-label="Primary navigation" className="hidden lg:block">
          <ul className="flex items-center gap-5">
            {navigationItems.map((item) => <li key={item.href}><a href={item.href} className="text-xs text-muted-ink transition-colors hover:text-ink">{item.label}</a></li>)}
          </ul>
        </nav>
        <details className="group relative ml-auto lg:hidden">
          <summary className="cursor-pointer list-none text-xs text-muted-ink transition-colors hover:text-ink">Menu</summary>
          <nav aria-label="Mobile navigation" className="absolute right-0 top-9 w-48 rounded-md border border-border bg-window p-2 window-shadow">
            <ul>{navigationItems.map((item) => <li key={item.href}><a href={item.href} className="block rounded-sm px-3 py-2.5 text-sm text-muted-ink transition-colors hover:bg-surface hover:text-ink">{item.label}</a></li>)}</ul>
          </nav>
        </details>
        <div className="flex items-center gap-3">
          <a href="mailto:mahesayuztar@gmail.com" className="hidden text-xs text-accent transition-colors hover:text-accent-strong sm:block">Available for a conversation</a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
