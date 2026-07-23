import type { MetadataRoute } from "next";

import { buildUrl } from "@/lib/metadata";
import { locales, localizePath, type Locale } from "@/lib/i18n";
import { getAllProjectPaths } from "@/lib/projects";

function getLanguageAlternates(pathname = "") {
  return {
    languages: {
      ...Object.fromEntries(locales.map((locale) => [locale, buildUrl(localizePath(locale, pathname))])),
      "x-default": buildUrl(localizePath("es", pathname)),
    },
  };
}

function getProjectEntry(locale: Locale, slug: string) {
  const pathname = `/projects/${slug}`;

  return {
    url: buildUrl(localizePath(locale, pathname)),
    changeFrequency: "monthly" as const,
    priority: 0.72,
    alternates: getLanguageAlternates(pathname),
  };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPaths = ["", "/experience", "/projects", "/about", "/contact"];
  const localizedPages = locales.flatMap((locale) =>
    staticPaths.map((currentPath) => {
      const isHome = currentPath === "";

      return {
        url: buildUrl(localizePath(locale, currentPath)),
        changeFrequency: (isHome ? "weekly" : "monthly") as MetadataRoute.Sitemap[number]["changeFrequency"],
        priority: isHome ? 0.95 : 0.8,
        alternates: getLanguageAlternates(currentPath),
      };
    }),
  );
  const projectPaths = await getAllProjectPaths();
  const localizedProjects = projectPaths.map(({ locale, slug }) => getProjectEntry(locale, slug));

  return [...localizedPages, ...localizedProjects];
}
