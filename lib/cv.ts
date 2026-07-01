import type { Locale } from "@/lib/i18n";

export const cvFileByLocale: Record<Locale, string> = {
  es: "/cv/Javier-Sanchez-Lancha-CV-ES.pdf",
  en: "/cv/Javier-Sanchez-Lancha-CV-EN.pdf",
};

export function getCvFilePath(locale: Locale) {
  return cvFileByLocale[locale];
}

export function getCvDownloadName(locale: Locale) {
  return getCvFilePath(locale).split("/").pop() ?? "Javier-Sanchez-Lancha-CV.pdf";
}
