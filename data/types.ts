import type { Locale } from "@/lib/i18n";

export type LocalizedString = Record<Locale, string>;
export type ProjectCategory = "sap-commerce" | "personal";

export interface ExperienceEntry {
  period: LocalizedString;
  company: string;
  role: LocalizedString;
  cvSummary: LocalizedString;
  client?: string;
  project?: LocalizedString;
  engagementType?: LocalizedString;
  sector: LocalizedString;
  summary: LocalizedString;
  achievements: LocalizedString[];
  technicalFocus: LocalizedString[];
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
  employer: string;
  client?: string;
  category: ProjectCategory;
  domain: string;
  stack: string[];
  impact: string;
  year: string;
  featured: boolean;
  locale: Locale;
}
