import { History, Layers3, MapPin, Mail, Verified } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Pill } from "@/components/ui/pill";
import { ProfileAvatar } from "@/components/ui/profile-avatar";
import { siteCopy, siteSettings } from "@/data/site";
import { localizePath, type Locale } from "@/lib/i18n";

export function HomeHero({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale];
  const hero = copy.home.hero;
  const snapshotIcons = [History, MapPin, Layers3, Verified];
  const stackTokens = ["Java", "SAP", "Spring", "SQL"];

  return (
    <section className="relative overflow-hidden py-12 lg:py-20">
      <Container>
        <div className="flex flex-col gap-8 md:hidden">
          <div className="flex flex-col items-center gap-4 text-center">
            <ProfileAvatar className="h-24 w-24 p-1" iconClassName="h-8 w-8" />
            <div>
              <h1 className="text-2xl font-bold leading-tight tracking-tight text-ink">{hero.title}</h1>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted">{hero.summary}</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <ButtonLink className="h-12 w-full justify-center rounded-lg text-sm font-bold tracking-wide" href={localizePath(locale, "/contact")} variant="primary">
              {locale === "es" ? "Contactar" : "Contact Me"}
            </ButtonLink>
            <ButtonLink
              className="h-12 w-full justify-center rounded-lg border border-accent/20 bg-accent/10 text-sm font-bold tracking-wide text-accent hover:bg-accent/15"
              href={localizePath(locale, "/experience")}
              variant="secondary"
            >
              {copy.ctas.experience}
            </ButtonLink>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {hero.quickFacts.slice(0, 3).map((fact) => (
              <div className="flex flex-col items-center justify-center rounded-xl border border-accent/10 bg-panel p-4 text-center shadow-sm" key={fact.label.en}>
                <span className="text-xs font-medium text-muted">{fact.label[locale]}</span>
                <span className="mt-1 text-sm font-bold text-accent">{fact.value[locale]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden items-center gap-12 lg:grid lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-7">
            <Pill>{hero.eyebrow}</Pill>
            <div className="space-y-4">
              <h1 className="font-display text-5xl font-black leading-[1.1] tracking-tight text-ink lg:text-7xl">
                {hero.title}
              </h1>
              <p className="max-w-2xl text-xl leading-relaxed text-muted">{hero.summary}</p>
            </div>

            <div className="flex flex-wrap gap-4">
              <ButtonLink className="rounded-xl px-8 py-4 text-lg" href={localizePath(locale, "/contact")} variant="primary">
                {locale === "es" ? "Contactar" : "Contact Me"}
              </ButtonLink>
              <ButtonLink className="rounded-xl px-8 py-4 text-lg" href={localizePath(locale, "/experience")} variant="secondary">
                {copy.ctas.experience}
              </ButtonLink>
            </div>
          </div>

          <div className="lg:col-span-5">
            <aside className="group relative overflow-hidden rounded-2xl border border-line bg-panel p-8 shadow-xl">
              <div className="absolute right-0 top-0 -mr-16 -mt-16 h-32 w-32 rounded-full bg-accent/5 blur-3xl transition-colors group-hover:bg-accent/10" />
              <h2 className="mb-6 flex items-center gap-2 text-xl font-bold text-ink">
                <Layers3 className="h-5 w-5 text-accent" />
                {locale === "es" ? "Recruiter snapshot" : "Recruiter Snapshot"}
              </h2>
              <ul className="space-y-6">
                {hero.quickFacts.map((fact, index) => {
                  const Icon = snapshotIcons[index % snapshotIcons.length];

                  return (
                    <li className="flex items-start gap-4" key={fact.label.en}>
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface text-accent">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm text-muted">{fact.label[locale]}</p>
                        <p className="font-bold text-ink">{fact.value[locale]}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-8 border-t border-line pt-8">
                <div className="flex flex-wrap gap-2">
                  {stackTokens.map((token) => (
                    <span
                      className="inline-flex h-12 min-w-12 items-center justify-center rounded-full bg-accent/20 px-3 text-[0.68rem] font-black tracking-[0.08em] text-ink"
                      key={token}
                    >
                      {token}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </Container>
    </section>
  );
}
