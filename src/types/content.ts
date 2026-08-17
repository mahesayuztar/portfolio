export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  role: string;
  stack: string[];
  problem: string;
  solution: string;
  link?: string;
  internal?: boolean;
  mockups: ProjectMockup[];
}

export interface ProjectMockup {
  src: string;
  alt: string;
}

export interface JourneyItem {
  id: string;
  image?: string;
  imageBw?: string;
  imageAlt?: string;
  imageSize?: number;
  period: string;
  title: string;
  organization: string;
  summary: string;
  whatHappened: string;
  whatIWorked: string;
  tech: string[];
}

export interface SkillCategory {
  id: string;
  label: string;
  items: string[];
}

export interface Achievement {
  id: string;
  title: string;
  event: string;
  year: string;
  context: string;
  image?: string;
  imageAlt?: string;
}

export interface Certificate {
  id: string;
  issuer: string;
  title: string;
  year: string;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  external?: boolean;
}
