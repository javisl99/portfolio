import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Blocks,
  BriefcaseBusiness,
  Building2,
  CalendarRange,
  ShieldCheck,
  ShoppingCart,
  UserRound,
  Wrench,
} from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { siteCopy } from "@/data/site";
import { createMetadata } from "@/lib/metadata";
import { getAllProjectPaths, getProject } from "@/lib/projects";
import { isLocale, localizePath, type Locale } from "@/lib/i18n";

function getProjectVisual(slug: string) {
  if (slug.includes("buildingcenter")) {
    return { icon: Building2, gradient: "from-accent/28 via-accent/8 to-transparent" };
  }

  if (slug.includes("airbus")) {
    return { icon: Blocks, gradient: "from-accent/22 via-accent/7 to-transparent" };
  }

  return { icon: ShoppingCart, gradient: "from-accent/24 via-accent/7 to-transparent" };
}

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

  const copy = siteCopy[locale];
  const categoryLabel =
    project.category === "sap-commerce"
      ? locale === "es"
        ? "Caso SAP Commerce"
        : "SAP Commerce case study"
      : locale === "es"
        ? "Proyecto personal"
        : "Personal project";
  const visual = getProjectVisual(slug);
  const VisualIcon = visual.icon;

  return (
    <>
      <Container className="py-8 sm:py-10">
        <nav className="mb-8 flex items-center gap-2 text-sm font-medium text-muted">
          <Link className="transition hover:text-accent" href={localizePath(locale, "/")}>
            {locale === "es" ? "Portfolio" : "Portfolio"}
          </Link>
          <span>/</span>
          <Link className="transition hover:text-accent" href={localizePath(locale, "/projects")}>
            {locale === "es" ? "Casos" : "Case studies"}
          </Link>
          <span>/</span>
          <span className="text-ink">{project.title}</span>
        </nav>

        <section className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_22rem] lg:items-start">
          <div className="space-y-6">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <div className="relative flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-line bg-surface/75 sm:h-32 sm:w-32">
                <div className={`absolute inset-0 bg-gradient-to-br ${visual.gradient}`} />
                <VisualIcon className="relative h-14 w-14 text-ink/20" />
              </div>
              <div className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent">{categoryLabel}</p>
                <h1 className="font-display text-4xl font-black leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
                  {project.title}
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-muted">{project.summary}</p>
                <div className="flex flex-wrap gap-4 text-sm font-medium text-muted">
                  <span className="flex items-center gap-2">
                    <BriefcaseBusiness className="h-4 w-4 text-accent" />
                    {project.employer}
                  </span>
                  {project.client ? (
                    <span className="flex items-center gap-2">
                      <UserRound className="h-4 w-4 text-accent" />
                      {project.client}
                    </span>
                  ) : null}
                  <span className="flex items-center gap-2">
                    <CalendarRange className="h-4 w-4 text-accent" />
                    {project.year}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  className="rounded-full border border-line bg-panel px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-ink"
                  key={item}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <aside className="rounded-2xl border border-accent/25 bg-[#102022] p-6 text-white shadow-[0_28px_60px_-32px_rgba(2,6,23,0.72)]">
            <div className="mb-4 flex items-center gap-2 text-accent">
              <BriefcaseBusiness className="h-5 w-5" />
              <p className="text-xs font-bold uppercase tracking-[0.24em]">
                {locale === "es" ? "Recruiter TL;DR" : "Recruiter TL;DR"}
              </p>
            </div>
            <p className="text-sm leading-7 text-slate-300">{project.signal}</p>
            <ul className="mt-6 grid gap-3 text-sm leading-7 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                <span>{project.stakes}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                <span>{project.contribution}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                <span>{project.domain}</span>
              </li>
            </ul>
            <div className="mt-6 flex flex-col gap-3">
              <ButtonLink className="w-full" href={localizePath(locale, "/contact")} variant="primary">
                {copy.ctas.contact}
              </ButtonLink>
              <ButtonLink className="w-full border-white/12 bg-white/6 text-white hover:bg-white/12" href={localizePath(locale, "/projects")} variant="secondary">
                {copy.ctas.projects}
              </ButtonLink>
            </div>
          </aside>
        </section>
      </Container>

      <Container className="pb-18 sm:pb-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <article className="tech-grid-bg rounded-2xl border border-line bg-panel p-6 shadow-soft sm:p-8">
            <div className="grid gap-5">{project.content}</div>
          </article>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-line bg-panel p-5 shadow-soft">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {locale === "es" ? "Resumen" : "Snapshot"}
              </p>
              <p className="text-sm leading-7 text-muted">{project.summary}</p>
            </div>
            <div className="rounded-2xl border border-line bg-panel p-5 shadow-soft">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {locale === "es" ? "Rol" : "Role"}
              </p>
              <p className="text-sm leading-7 text-muted">{project.role}</p>
            </div>
            <div className="rounded-2xl border border-line bg-panel p-5 shadow-soft">
              <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                <ShieldCheck className="h-4 w-4" />
                {locale === "es" ? "Qué estaba en juego" : "What was at stake"}
              </p>
              <p className="text-sm leading-7 text-muted">{project.stakes}</p>
            </div>
            <div className="rounded-2xl border border-line bg-panel p-5 shadow-soft">
              <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                <Wrench className="h-4 w-4" />
                {locale === "es" ? "Qué hice" : "What I did"}
              </p>
              <p className="text-sm leading-7 text-muted">{project.contribution}</p>
            </div>
            <ButtonLink className="w-full" href={localizePath(locale, "/projects")} variant="secondary">
              {copy.ctas.projects}
            </ButtonLink>
            <ButtonLink className="w-full" href={localizePath(locale, "/contact")} variant="primary">
              {copy.ctas.contact}
            </ButtonLink>
            <Link
              className="inline-flex items-center gap-2 text-sm font-bold text-ink transition hover:text-accent"
              href={localizePath(locale, "/projects")}
            >
              <ArrowLeft className="h-4 w-4" />
              {locale === "es" ? "Volver a casos" : "Back to case studies"}
            </Link>
          </aside>
        </div>
      </Container>
    </>
  );
}
