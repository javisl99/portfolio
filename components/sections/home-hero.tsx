import { ArrowDown, Coffee, Download, Layers3, Mail, Sparkles, Terminal, Verified } from "lucide-react";

import { BackendTelemetryWidget } from "@/components/ui/backend-telemetry-widget";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { siteCopy, siteSettings } from "@/data/site";
import { getCvDownloadName, getCvFilePath } from "@/lib/cv";
import { localizePath, type Locale } from "@/lib/i18n";

export function HomeHero({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale];
  const hero = copy.home.hero;
  const cvHref = getCvFilePath(locale);
  const cvDownloadName = getCvDownloadName(locale);
  const highlightIcons = [Verified, Coffee, Layers3, Sparkles, Verified];
  const heroTitleSecondary = locale === "es" ? "Java, Spring & SAP Commerce Cloud" : "Java, Spring & SAP Commerce Cloud";

  return (
    <section className="relative overflow-hidden pb-12 pt-8 sm:pb-16 sm:pt-12 lg:pb-20 lg:pt-24" id="top">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[40rem] bg-[radial-gradient(circle_at_20%_0%,rgba(99,102,241,0.18),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.14),transparent_35%)]" />

      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Value Proposition */}
          <div className="relative space-y-6 lg:col-span-6 xl:col-span-6">
            {/* Engineering Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/25 bg-indigo-500/10 px-3.5 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
              <Terminal className="h-3.5 w-3.5 text-indigo-400" />
              <span className="font-mono text-xs font-semibold text-indigo-300">
                {siteSettings.name} · {locale === "es" ? "Backend Engineer" : "Backend Engineer"}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="font-display text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-6xl xl:text-7xl">
                <span className="block text-gradient-silver">
                  {locale === "es" ? "Backend Software Engineer" : "Backend Software Engineer"}
                </span>
                <span className="mt-2 block text-2xl font-bold tracking-tight text-gradient-electric sm:text-3xl lg:text-4xl">
                  {heroTitleSecondary}
                </span>
              </h1>

              <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                {hero.summary}
              </p>

              <p className="max-w-xl text-sm leading-relaxed text-slate-400">
                {hero.proof}
              </p>
            </div>

            {/* Primary actions */}
            <div className="grid grid-cols-3 gap-2 pt-2 sm:flex sm:flex-wrap sm:gap-3 lg:flex-nowrap">
              <ButtonLink className="w-full min-w-0 px-2 py-3.5 text-[0.68rem] sm:w-auto sm:px-4 sm:text-base" href={localizePath(locale, "/projects")} variant="primary">
                <ArrowDown className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
                <span>{locale === "es" ? "Proyectos" : "Projects"}</span>
              </ButtonLink>
              <ButtonLink className="w-full min-w-0 px-2 py-3.5 text-[0.68rem] sm:w-auto sm:px-4 sm:text-base" href={localizePath(locale, "/contact")} variant="secondary">
                <Mail className="h-3.5 w-3.5 shrink-0 text-indigo-400 sm:h-4 sm:w-4" />
                {copy.ctas.contact}
              </ButtonLink>
              <ButtonLink
                className="w-full min-w-0 px-2 py-3.5 text-[0.68rem] sm:w-auto sm:px-4 sm:text-base"
                download={cvDownloadName}
                href={cvHref}
                target="_blank"
                variant="secondary"
              >
                <Download className="h-3.5 w-3.5 shrink-0 text-slate-400 sm:h-4 sm:w-4" />
                {copy.ctas.resume}
              </ButtonLink>
            </div>

          </div>

          {/* Right Column: Live Backend Telemetry & Architecture Window */}
          <div className="min-w-0 lg:col-span-6 xl:col-span-6">
            <BackendTelemetryWidget locale={locale} />
          </div>
        </div>

        {/* Highlights Bar */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:mt-16 sm:gap-4 xl:grid-cols-4">
          {hero.highlights.map((highlight, index) => {
            const Icon = highlightIcons[index % highlightIcons.length];

            return (
              <div
                className="group flex h-full min-w-0 items-center gap-3 rounded-2xl border border-white/8 bg-gradient-to-b from-[#14192b]/70 to-[#0c0f1d]/90 p-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition duration-300 hover:-translate-y-1 hover:border-indigo-400/35 hover:shadow-[0_12px_30px_-15px_rgba(99,102,241,0.3)]"
                key={highlight.label.en}
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/8 bg-white/[0.04] text-indigo-300 transition duration-300 group-hover:border-indigo-400/30 group-hover:bg-indigo-500/15 group-hover:text-white">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold leading-snug text-slate-200 transition duration-300 group-hover:text-white sm:text-sm">
                    {highlight.label[locale]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
