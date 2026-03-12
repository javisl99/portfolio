import { cache, type ReactNode } from "react";
import { promises as fs } from "node:fs";
import path from "node:path";

import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

import { mdxComponents } from "@/components/mdx/components";
import type { ProjectFrontmatter } from "@/data/types";
import type { Locale } from "@/lib/i18n";

export interface ProjectSummary extends ProjectFrontmatter {
  slug: string;
}

export interface ProjectDetail extends ProjectSummary {
  content: ReactNode;
}

const projectsDirectory = path.join(process.cwd(), "content", "projects");

async function readProjectSource(locale: Locale, slug: string) {
  const fullPath = path.join(projectsDirectory, locale, `${slug}.mdx`);

  return fs.readFile(fullPath, "utf8");
}

export const getProjects = cache(async (locale: Locale): Promise<ProjectSummary[]> => {
  const directory = path.join(projectsDirectory, locale);
  const files = (await fs.readdir(directory)).filter((file) => file.endsWith(".mdx"));

  const projects = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.mdx$/, "");
      const source = await readProjectSource(locale, slug);
      const { data } = matter(source);

      return {
        ...(data as ProjectFrontmatter),
        slug,
      };
    }),
  );

  return projects.sort((left, right) => Number(right.year) - Number(left.year));
});

export async function getFeaturedProjects(locale: Locale) {
  const projects = await getProjects(locale);

  return projects.filter((project) => project.featured);
}

export async function getProject(locale: Locale, slug: string): Promise<ProjectDetail | null> {
  try {
    const source = await readProjectSource(locale, slug);
    const { data, content } = matter(source);
    const { content: compiledContent } = await compileMDX({
      source: content,
      options: {
        parseFrontmatter: false,
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
      },
      components: mdxComponents,
    });

    return {
      ...(data as ProjectFrontmatter),
      slug,
      content: compiledContent,
    };
  } catch {
    return null;
  }
}

export async function getAllProjectPaths() {
  const locales = ["es", "en"] as const;
  const allProjects = await Promise.all(
    locales.map(async (locale) => {
      const projects = await getProjects(locale);

      return projects.map((project) => ({
        locale,
        slug: project.slug,
      }));
    }),
  );

  return allProjects.flat();
}
