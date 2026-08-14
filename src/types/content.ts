export interface Project {
  slug: string;
  index: string;
  title: string;
  category: string;
  year: string;
  description: string;
  longDescription: string;

  image: string;
  gallery: string[];

  role: string;

  stack: string[];

  problem: string;
  solution: string;

  highlights: string[];

  github?: string;
  live?: string;
}

export interface JourneyItem {
  id: string;
  year: string;
  title: string;
  organization?: string;
  summary: string;
  whatHappened: string;
  whatIWorked: string;
  whatILearned: string;
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
}

export interface Certificate {
  id: string;
  issuer: string;
  title: string;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  external?: boolean;
}
