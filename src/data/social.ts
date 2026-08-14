import { SocialLink } from "@/types/content";

// TODO: replace "#" placeholders with the real GitHub/LinkedIn profile URLs.
export const socialLinks: SocialLink[] = [
  { id: "email", label: "Email", href: "mailto:mahesayuztar@gmail.com" },
  { id: "github", label: "GitHub", href: "#", external: true },
  { id: "linkedin", label: "LinkedIn", href: "#", external: true },
  {
    id: "resume",
    label: "Résumé",
    href: "/resume/mahesa-yuztar-resume.pdf",
    external: true,
  },
];

export const contactEmail = "mahesayuztar@gmail.com";
