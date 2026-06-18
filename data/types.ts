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

export interface HighlightPill {
  label: LocalizedString;
  shortLabel?: LocalizedString;
}

export interface SkillCategory {
  title: LocalizedString;
  items: string[];
}

export interface ExperienceEntry {
  id: string;
  badge: LocalizedString;
  period: LocalizedString;
  company: string;
  title: LocalizedString;
  subtitle: LocalizedString;
  description: LocalizedString;
  cardImpact: LocalizedString;
  buttonLabel: LocalizedString;
  modalSubtitle: LocalizedString;
  modalSummary: LocalizedString;
  context: LocalizedString;
  responsibilities: LocalizedString[];
  stack: string[];
  modalImpact: LocalizedString;
  focusAreas?: string[];
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
