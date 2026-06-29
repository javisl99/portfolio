import type { MetadataRoute } from "next";
import { promises as fs } from "node:fs";
import path from "node:path";

import { buildUrl } from "@/lib/metadata";
import { locales, localizePath, type Locale } from "@/lib/i18n";
import { getAllProjectPaths, getProjectLastModified } from "@/lib/projects";

const staticPageSources: Record<string, string[]> = {
  "": ["app/(root)/page.tsx", "data/site.ts"],
  "/experience": ["app/(site)/[locale]/experience/page.tsx", "data/site.ts", "data/experience.ts"],
  "/projects": ["app/(site)/[locale]/projects/page.tsx", "data/site.ts"],
  "/about": ["app/(site)/[locale]/about/page.tsx", "data/site.ts"],
  "/contact": ["app/(site)/[locale]/contact/page.tsx", "data/site.ts"],
};

async function getLatestMtime(paths: string[]) {
  const stats = await Promise.all(paths.map(async (filePath) => fs.stat(path.join(/* turbopackIgnore: true */ process.cwd(), filePath))));

  return new Date(Math.max(...stats.map((stat) => stat.mtime.getTime())));
}

async function getStaticPageLastModified(pathname: keyof typeof staticPageSources) {
  return getLatestMtime(staticPageSources[pathname]);
}

async function getProjectEntry(locale: Locale, slug: string) {
  return {
    url: buildUrl(localizePath(locale, `/projects/${slug}`)),
    lastModified: await getProjectLastModified(locale, slug),
    changeFrequency: "monthly" as const,
    priority: 0.72,
  };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPaths = ["", "/experience", "/projects", "/about", "/contact"];
  const localizedPages = await Promise.all(
    locales.flatMap((locale) => {
      return staticPaths.map(async (currentPath) => {
        const isHome = currentPath === "";

        return {
          url: buildUrl(localizePath(locale, currentPath)),
          lastModified: await getStaticPageLastModified(currentPath as keyof typeof staticPageSources),
          changeFrequency: (isHome ? "weekly" : "monthly") as MetadataRoute.Sitemap[number]["changeFrequency"],
          priority: isHome ? 0.95 : 0.8,
        };
      });
    }),
  );
  const projectPaths = await getAllProjectPaths();
  const localizedProjects = await Promise.all(projectPaths.map(({ locale, slug }) => getProjectEntry(locale, slug)));

  return [
    {
      url: buildUrl("/"),
      lastModified: await getStaticPageLastModified(""),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...localizedPages,
    ...localizedProjects,
  ];
}
