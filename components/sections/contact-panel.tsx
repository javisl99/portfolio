import { ButtonLink } from "@/components/ui/button-link";
import { siteCopy, siteSettings } from "@/data/site";
import type { Locale } from "@/lib/i18n";

export function ContactPanel({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale];

  return (
    <div className="grid gap-4 rounded-[2rem] border border-line bg-panel/88 p-6 shadow-soft lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
      <div className="space-y-4">
        <p className="text-sm leading-7 text-muted">{copy.pages.contact.availability}</p>
        <ul className="grid gap-2 text-sm text-muted">
          <li>
            <span className="font-semibold text-ink">Email:</span> {siteSettings.email}
          </li>
          <li>
            <span className="font-semibold text-ink">LinkedIn:</span> {siteSettings.linkedin}
          </li>
          <li>
            <span className="font-semibold text-ink">{locale === "es" ? "Ubicación" : "Location"}:</span> {siteSettings.location}
          </li>
        </ul>
      </div>
      <div className="flex flex-wrap gap-3">
        <ButtonLink href={`mailto:${siteSettings.email}`} variant="primary">
          {copy.ctas.email}
        </ButtonLink>
        <ButtonLink href={siteSettings.linkedin} target="_blank" variant="secondary">
          {copy.ctas.linkedin}
        </ButtonLink>
        <ButtonLink href={`/${locale}/cv`} target="_blank" variant="secondary">
          {copy.ctas.resume}
        </ButtonLink>
      </div>
    </div>
  );
}
