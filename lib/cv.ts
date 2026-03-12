import { experienceEntries } from "@/data/experience";
import { skillCategories } from "@/data/skills";
import { siteCopy, siteSettings } from "@/data/site";
import type { Locale } from "@/lib/i18n";

function sanitizePdfText(value: string) {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)");
}

function buildPdf(lines: string[]) {
  const stream = [
    "BT",
    "/F1 24 Tf",
    "52 790 Td",
    `(${sanitizePdfText(lines[0])}) Tj`,
    "0 -26 Td",
    "/F1 14 Tf",
    `(${sanitizePdfText(lines[1])}) Tj`,
    ...lines.slice(2).flatMap((line, index) => [
      index === 0 ? "0 -34 Td" : "0 -18 Td",
      `(${sanitizePdfText(line)}) Tj`,
    ]),
    "ET",
  ].join("\n");

  const objects = [
    "1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj",
    "2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj",
    "3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R >>\nendobj",
    `4 0 obj\n<< /Length ${stream.length} >>\nstream\n${stream}\nendstream\nendobj`,
    "5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj",
  ];

  let pdf = "%PDF-1.4\n";
  const offsets = [0];

  objects.forEach((object) => {
    offsets.push(pdf.length);
    pdf += `${object}\n`;
  });

  const startXref = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n`;
  pdf += "0000000000 65535 f \n";

  offsets.slice(1).forEach((offset) => {
    pdf += `${offset.toString().padStart(10, "0")} 00000 n \n`;
  });

  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${startXref}\n%%EOF`;

  return new TextEncoder().encode(pdf);
}

export function createResumePdf(locale: Locale) {
  const copy = siteCopy[locale];
  const leadRole = experienceEntries[0];
  const skillSnapshot = skillCategories
    .flatMap((category) => category.skills)
    .slice(0, 8)
    .join(", ");

  const lines = [
    siteSettings.name,
    siteSettings.role,
    copy.home.hero.summary,
    copy.home.hero.availability,
    `${locale === "es" ? "Ubicacion" : "Location"}: ${siteSettings.location}`,
    `${locale === "es" ? "Email" : "Email"}: ${siteSettings.email}`,
    `${locale === "es" ? "LinkedIn" : "LinkedIn"}: ${siteSettings.linkedin}`,
    `${locale === "es" ? "Experiencia actual" : "Current focus"}: ${leadRole.role[locale]} - ${leadRole.company}`,
    `${locale === "es" ? "Capacidades clave" : "Key capabilities"}: ${skillSnapshot}`,
  ];

  return buildPdf(lines);
}
