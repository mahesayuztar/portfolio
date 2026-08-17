import { socialLinks } from "@/data/social";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const socialIcons = {
  github: FaGithub,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
};

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <nav className={`flex items-center gap-2 ${className}`} aria-label="Social profiles">
      {socialLinks.map((socialLink) => {
        const Icon = socialIcons[socialLink.id as keyof typeof socialIcons];

        return (
          <a
            key={socialLink.id}
            href={socialLink.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Visit Mahesa on ${socialLink.label}`}
            title={socialLink.label}
            className={`social-link social-link-${socialLink.id} flex size-11 items-center justify-center rounded-full border border-border bg-surface text-muted-ink transition-[color,border-color,background-color,transform] duration-200 hover:-translate-y-0.5 focus-visible:-translate-y-0.5`}
          >
            <Icon size={19} aria-hidden />
          </a>
        );
      })}
    </nav>
  );
}
