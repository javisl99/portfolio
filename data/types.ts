import type { Locale } from "@/lib/i18n";

export type LocalizedString = Record<Locale, string>;
export type ProjectCategory = "sap-commerce" | "personal";

export interface CopyCard {
  title: LocalizedString;
  body: LocalizedString;
}

export interface QuickFact {
  label: LocalizedString;
  value: LocalizedString;
}

export interface SkillCategory {
  title: LocalizedString;
  items: string[];
}

export interface ExperienceEntry {
  period: LocalizedString;
  company: string;
  role: LocalizedString;
  client?: string;
  project: LocalizedString;
  projectType: LocalizedString;
  progression: LocalizedString;
  overview: LocalizedString;
  focusAreas: LocalizedString[];
  context: LocalizedString;
  problem: LocalizedString;
  intervention: LocalizedString[];
  result: LocalizedString;
  signal: LocalizedString;
  stack: string[];
}

export interface ProjectFrontmatter {
  title: string;
  summary: string;
  role: string;
  employer: string;
  client?: string;
  category: ProjectCategory;
  domain: string;
  stack: string[];
  stakes: string;
  contribution: string;
  signal: string;
  year: string;
  featured: boolean;
  locale: Locale;
}
