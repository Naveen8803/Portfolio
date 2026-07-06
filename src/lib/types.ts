export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  type: 'internship' | 'fulltime' | 'freelance';
  metrics?: { value: string; label: string }[];
}

export interface Project {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  techStack: string[];
  github?: string;
  liveDemo?: string;
  highlights: string[];
  category: string;
  featured: boolean;
  previewImage?: string;
  problem?: string;
  solution?: string;
  architecture?: string;
  challenges?: string;
  futureScope?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  icon: string;
}

export interface Achievement {
  metric: string;
  label: string;
  description: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}
