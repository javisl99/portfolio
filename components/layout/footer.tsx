import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { siteCopy, siteSettings } from "@/data/site";
import { localizePath, type Locale } from "@/lib/i18n";

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  const copy = siteCopy[locale];

  return (
    <footer className="border-t border-line/70 py-10">
      <Container className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <div className="space-y-3">
          <p className="font-display text-2xl font-semibold text-ink">{siteSettings.name}</p>
          <p className="max-w-2xl text-sm leading-7 text-muted">{copy.footer.note}</p>
          <p className="max-w-2xl text-sm leading-7 text-muted">{copy.footer.availability}</p>
          <p className="text-sm text-muted">{copy.footer.builtWith}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={`mailto:${siteSettings.email}`} variant="secondary">
            {copy.ctas.email}
          </ButtonLink>
          <ButtonLink href={siteSettings.linkedin} target="_blank" variant="secondary">
            {copy.ctas.linkedin}
          </ButtonLink>
          <ButtonLink href={localizePath(locale, "/contact")} variant="primary">
            {copy.navigation[4]?.label ?? "Contact"}
          </ButtonLink>
        </div>
      </Container>
    </footer>
  );
}

