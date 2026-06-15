import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

import { siteCopy } from "@/data/site";
import { createMetadata } from "@/lib/metadata";
import { getAllProjectPaths, getProject } from "@/lib/projects";
import { isLocale, type Locale } from "@/lib/i18n";

export async function generateStaticParams() {
  return getAllProjectPaths();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;

  if (!isLocale(rawLocale)) {
    return {};
  }

  const locale = rawLocale as Locale;
  const project = await getProject(locale, slug);

  if (!project) {
    return {};
  }

  return createMetadata({
    locale,
    title: project.title,
    description: project.summary,
    keywords: siteCopy[locale].metadata.pages.projectDetail.keywords,
    path: `/projects/${slug}`,
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;

  if (!isLocale(rawLocale)) {
    notFound();
  }

  const locale = rawLocale as Locale;
  const project = await getProject(locale, slug);

  if (!project) {
    notFound();
  }

  redirect(`/${locale}#projects`);
}
