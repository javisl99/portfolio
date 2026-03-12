import type { Locale } from "@/lib/i18n";

export type LocalizedString = Record<Locale, string>;

export interface ExperienceEntry {
  period: LocalizedString;
  company: string;
  role: LocalizedString;
  sector: LocalizedString;
  summary: LocalizedString;
  achievements: LocalizedString[];
  stack: string[];
  impact: LocalizedString;
}

export interface Milestone {
  title: LocalizedString;
  body: LocalizedString;
  meta: LocalizedString;
}

export interface SkillCategory {
  title: LocalizedString;
  description: LocalizedString;
  skills: string[];
}

export interface ProjectFrontmatter {
  title: string;
  summary: string;
  role: string;
  stack: string[];
  impact: string;
  year: string;
  featured: boolean;
  locale: Locale;
}

