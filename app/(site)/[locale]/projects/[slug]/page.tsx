import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ProjectDetailCta } from "@/components/sections/project-detail-cta";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { buildUrl, createMetadata } from "@/lib/metadata";
import { isLocale, localizePath, type Locale } from "@/lib/i18n";
import { getAllProjectPaths, getProject } from "@/lib/projects";

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
    keywords: [...project.stack, project.role, project.employer, project.client].filter(
      (keyword): keyword is string => Boolean(keyword),
    ),
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

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: locale === "es" ? "Inicio" : "Home",
        item: buildUrl(localizePath(locale)),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: locale === "es" ? "Proyectos" : "Projects",
        item: buildUrl(localizePath(locale, "/projects")),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: buildUrl(localizePath(locale, `/projects/${project.slug}`)),
      },
    ],
  };
  const projectStructuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    inLanguage: locale,
    url: buildUrl(localizePath(locale, `/projects/${project.slug}`)),
    creator: {
      "@type": "Person",
      name: "Javier Sanchez Lancha",
    },
    keywords: project.stack,
    about: [project.role, project.employer, project.client, project.domain].filter(Boolean),
  };

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
        type="application/ld+json"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectStructuredData),
        }}
        type="application/ld+json"
      />
      <Container className="pt-6 sm:pt-10">
        <nav aria-label={locale === "es" ? "Ruta de navegación" : "Breadcrumb"} className="mb-1 sm:mb-2">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted sm:gap-2">
            <li>
              <Link className="transition hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent" href={localizePath(locale)}>
                {locale === "es" ? "Inicio" : "Home"}
              </Link>
            </li>
            <li aria-hidden="true" className="text-slate-500">
              /
            </li>
            <li>
              <Link
                className="transition hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                href={localizePath(locale, "/projects")}
              >
                {locale === "es" ? "Proyectos" : "Projects"}
              </Link>
            </li>
            <li aria-hidden="true" className="text-slate-500">
              /
            </li>
            <li aria-current="page" className="text-ink">
              {project.title}
            </li>
          </ol>
        </nav>
      </Container>

      <PageHero className="py-10 sm:py-16" eyebrow={project.role} intro={project.summary} title={project.title}>
        <div className="space-y-5">
          <div>
            <p className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.22em] text-[#9fbeff]">
              {locale === "es" ? "Ficha rápida" : "Quick profile"}
            </p>
            <div className="mt-3 grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                <p className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-slate-400">{locale === "es" ? "Año" : "Year"}</p>
                <p className="mt-1 font-semibold text-white">{project.year}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                <p className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-slate-400">{locale === "es" ? "Empresa" : "Employer"}</p>
                <p className="mt-1 font-semibold text-white">{project.employer}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                <p className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-slate-400">{locale === "es" ? "Cliente" : "Client"}</p>
                <p className="mt-1 font-semibold text-white">{project.client ?? project.domain}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                <p className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-slate-400">{locale === "es" ? "Stack" : "Stack"}</p>
                <p className="mt-1 font-semibold text-white">{project.stack.slice(0, 3).join(" · ")}</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-[#60a5fa]/18 bg-[linear-gradient(135deg,rgba(18,39,82,0.96),rgba(24,35,76,0.98))] p-4">
            <p className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-[#bcd1ff]">
              {locale === "es" ? "Qué evaluaría un recruiter aquí" : "What a recruiter can assess here"}
            </p>
            <p className="mt-2 text-sm leading-6 text-white sm:leading-7">{project.signal}</p>
          </div>
        </div>
      </PageHero>

      <Container className="pb-20 sm:pb-28">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <article className="rounded-[2rem] border border-line bg-[linear-gradient(180deg,rgba(11,18,32,0.96),rgba(7,12,24,0.99))] p-7 shadow-soft sm:p-9">
            <div className="mb-8 grid gap-4 sm:grid-cols-3">
              <section className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-4">
                <p className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-[#9fbeff]">
                  {locale === "es" ? "Problema" : "Problem"}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-300">{project.stakes}</p>
              </section>
              <section className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-4">
                <p className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-[#9fbeff]">
                  {locale === "es" ? "Contribución" : "Contribution"}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-300">{project.contribution}</p>
              </section>
              <section className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-4">
                <p className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-[#9fbeff]">
                  {locale === "es" ? "Dominio" : "Domain"}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-300">{project.domain}</p>
              </section>
            </div>

            <div className="space-y-6">
              {project.content}
            </div>

            <ProjectDetailCta className="mt-10" locale={locale} />
          </article>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[1.8rem] border border-line bg-[linear-gradient(180deg,rgba(11,18,32,0.96),rgba(7,12,24,0.99))] p-6 shadow-soft">
              <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#9fbeff]">
                {locale === "es" ? "Stack técnico" : "Technical stack"}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[0.68rem] text-slate-200" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </aside>
        </div>
      </Container>
    </>
  );
}
