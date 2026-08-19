import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Blocks, ExternalLink, FileDown, FolderOpen, Mail, ServerCog, ShieldCheck } from "lucide-react";

import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { siteCopy, siteSettings } from "@/data/site";
import { getCvDownloadName, getCvFilePath } from "@/lib/cv";
import { createMetadata } from "@/lib/metadata";
import { isLocale, localizePath, type Locale } from "@/lib/i18n";

const channelIcons = [Mail, LinkedinIcon, FileDown] as const;
const fitIcons = [ServerCog, ShieldCheck, Blocks] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale)) {
    return {};
  }

  const locale = rawLocale as Locale;
  const pageMeta = siteCopy[locale].metadata.pages.contact;

  return createMetadata({
    locale,
    title: pageMeta.title,
    description: pageMeta.description,
    keywords: pageMeta.keywords,
    path: "/contact",
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale)) {
    notFound();
  }

  const locale = rawLocale as Locale;
  const copy = siteCopy[locale];
  const page = copy.pages.contact;
  const cvHref = getCvFilePath(locale);
  const cvDownloadName = getCvDownloadName(locale);
  const secondaryLinks = [
    {
      href: localizePath(locale, "/projects"),
      label: locale === "es" ? "Ver proyectos" : "View projects",
      icon: FolderOpen,
      external: false,
    },
    {
      href: siteSettings.github,
      label: "GitHub",
      icon: GithubIcon,
      external: true,
    },
  ];
  const fitCards =
    locale === "es"
      ? [
          {
            title: "Java backend y APIs",
            body: "Experiencia en lógica de negocio, integraciones y APIs.",
          },
          {
            title: "Producción y soporte",
            body: "Incidencias, evolución funcional y colaboración con QA y negocio.",
          },
          {
            title: "SAP Commerce Cloud",
            body: "Especialización fuerte sin limitar el perfil a consultoría SAP.",
          },
        ]
      : [
          {
            title: "Java backend and APIs",
            body: "Experience in business logic, integrations, and APIs.",
          },
          {
            title: "Production and support",
            body: "Incidents, feature evolution, and collaboration with QA and business.",
          },
          {
            title: "SAP Commerce Cloud",
            body: "Strong specialization without limiting the profile to SAP consulting.",
          },
        ];
  const channelBadges =
    locale === "es"
      ? {
          Email: "RESPUESTA MÁS RÁPIDA",
          LinkedIn: "PERFIL PROFESIONAL",
          CV: "VERSIÓN ACTUALIZADA",
        }
      : {
          Email: "FASTEST RESPONSE",
          LinkedIn: "PROFESSIONAL PROFILE",
          CV: "UPDATED VERSION",
        };

  return (
    <>
      <PageHero className="py-8 sm:py-14" eyebrow={page.eyebrow} intro={page.intro} title={page.title} />

      <Section align="center" className="py-14 sm:py-18" description={undefined} eyebrow={page.channelsTitle} title={locale === "es" ? "Canales de contacto" : "Contact channels"}>
        <div className="grid gap-4 lg:grid-cols-3">
          {page.channelsItems.map((item, index) => {
            const Icon = channelIcons[index % channelIcons.length];
            const isCv = item.label === "CV";

            return (
              <article
                className="group flex h-full flex-col rounded-[1.65rem] border border-white/8 bg-[linear-gradient(180deg,rgba(11,18,32,0.94),rgba(7,12,24,0.98))] p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-[#60a5fa]/35 hover:shadow-[0_0_30px_rgba(59,130,246,0.08)] motion-reduce:transform-none motion-reduce:transition-none"
                key={item.label}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#60a5fa]/18 bg-[#60a5fa]/10 text-[#c8d2ff] transition duration-300 group-hover:border-[#93c5fd]/30 group-hover:bg-[#60a5fa]/14 group-hover:text-[#dbeafe] motion-reduce:transition-none">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex flex-1 flex-col">
                  <p className="mt-5 font-mono text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#9fbeff]">{item.label}</p>
                  <p className="mt-2 font-mono text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    {channelBadges[item.label as keyof typeof channelBadges]}
                  </p>
                  {item.label === "LinkedIn" ? (
                    <div className="mt-3 min-h-[4.75rem] space-y-1">
                      <p className="text-base font-semibold leading-7 text-ink">Javier Sánchez Lancha</p>
                      <p className="text-sm leading-6 text-slate-300">Backend Software Engineer</p>
                    </div>
                  ) : (
                    <div className="mt-3 min-h-[4.75rem]">
                      <p className="break-words text-base font-semibold leading-7 text-ink [word-break:break-word]">{item.value}</p>
                    </div>
                  )}
                </div>
                <div className="mt-6">
                  <ButtonLink
                    className="w-full justify-center"
                    download={isCv ? cvDownloadName : undefined}
                    href={isCv ? cvHref : (item.href ?? "#")}
                    target="_blank"
                    variant={index === 0 ? "primary" : "secondary"}
                  >
                    {item.label === "Email" ? (locale === "es" ? "Enviar email" : "Send email") : null}
                    {item.label === "LinkedIn" ? (locale === "es" ? "Abrir LinkedIn" : "Open LinkedIn") : null}
                    {item.label === "CV" ? (locale === "es" ? "Descargar CV" : "Download CV") : null}
                    <ExternalLink className="h-4 w-4" />
                  </ButtonLink>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <Section align="center" className="py-14 sm:py-18" description={page.fitIntro} eyebrow={locale === "es" ? "Encaje profesional" : "Professional fit"} title={page.fitTitle}>
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2 xl:grid-cols-3">
          {fitCards.map((card, index) => {
            const Icon = fitIcons[index % fitIcons.length];

            return (
              <article
                className="group rounded-[1.5rem] border border-white/8 bg-[linear-gradient(180deg,rgba(11,18,32,0.94),rgba(7,12,24,0.98))] p-5 text-left shadow-soft transition duration-300 hover:-translate-y-1 hover:border-[#60a5fa]/35 hover:shadow-[0_0_30px_rgba(59,130,246,0.08)] motion-reduce:transform-none motion-reduce:transition-none"
                key={card.title}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#60a5fa]/18 bg-[#60a5fa]/10 text-[#c8d2ff] transition duration-300 group-hover:border-[#93c5fd]/30 group-hover:bg-[#60a5fa]/14 group-hover:text-[#dbeafe] motion-reduce:transition-none">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="mt-4 text-base font-black tracking-tight text-ink">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{card.body}</p>
              </article>
            );
          })}
        </div>
      </Section>

      <section className="pb-10 pt-2 sm:pb-14">
        <Container>
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
            <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[#9fbeff]">{page.secondaryLinksTitle}</p>
            <div className="flex flex-wrap items-center justify-center gap-5 text-sm font-semibold text-slate-300">
              {secondaryLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <ButtonLink
                    className="min-h-10 px-4 py-2 text-sm font-semibold"
                    href={link.href}
                    key={link.label}
                    target={link.external ? "_blank" : undefined}
                    variant="ghost"
                  >
                    <Icon className="h-4 w-4" />
                    {link.label}
                  </ButtonLink>
                );
              })}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
