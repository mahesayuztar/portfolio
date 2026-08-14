import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary: "bg-primary border-ink text-ink hover:bg-secondary",
  secondary: "bg-white border-ink text-ink hover:bg-surface",
  ghost: "bg-transparent border-transparent text-ink hover:bg-surface",
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full border-[1.5px] px-6 min-h-11 text-sm font-medium transition-colors duration-200 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ink";

type CommonProps = {
  variant?: Variant;
  arrow?: boolean;
  children: ReactNode;
  className?: string;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  arrow = false,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${base} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {children}
      {arrow && (
        <span className="inline-block transition-transform duration-200 group-hover:translate-x-[3px]">
          →
        </span>
      )}
    </>
  );

  if ("href" in props && props.href) {
    const { href, ...anchorProps } = props as ButtonAsLink;
    return (
      <a href={href} className={classes} {...anchorProps}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonAsButton)}>
      {content}
    </button>
  );
}
