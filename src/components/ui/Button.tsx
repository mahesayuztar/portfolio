import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "quiet";

const variantClasses: Record<Variant, string> = {
  primary: "border-accent bg-accent text-accent-ink hover:bg-accent-strong",
  secondary: "border-border bg-surface text-ink hover:border-border-strong hover:bg-surface-raised",
  quiet: "border-transparent bg-transparent text-muted-ink hover:text-ink",
};

const baseClasses = "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-5 text-sm font-medium transition-[background-color,border-color,color,transform] duration-200 active:scale-[0.98]";

type CommonProps = { variant?: Variant; children: ReactNode; className?: string };
type ButtonAsButton = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type ButtonAsLink = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({ variant = "primary", children, className = "", ...props }: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;
  if ("href" in props && props.href) {
    const { href, ...anchorProps } = props as ButtonAsLink;
    return <a href={href} className={classes} {...anchorProps}>{children}</a>;
  }
  return <button className={classes} {...(props as ButtonAsButton)}>{children}</button>;
}
