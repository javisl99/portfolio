import { ArrowLeft, Download, Mail } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { getCvDownloadName, getCvFilePath } from "@/lib/cv";
import { localizePath, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

interface ProjectDetailCtaProps {
  locale: Locale;
  className?: string;
}

export function ProjectDetailCta({ locale, className }: ProjectDetailCtaProps) {
  const cvHref = getCvFilePath(locale);
  const cvDownloadName = getCvDownloadName(locale);

  return (
    <div
      className={cn(
        "rounded-[1.8rem] border border-white/8 bg-[linear-gradient(180deg,rgba(11,18,32,0.92),rgba(7,12,24,0.98))] p-6 shadow-soft",
        className,
      )}
    >
      <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#9fbeff]">
        {locale === "es" ? "Siguiente paso" : "Next step"}
      </p>
      <h2 className="mt-3 text-2xl font-black tracking-tight text-ink">
        {locale === "es" ? "Si este caso encaja con lo que buscáis, hablemos." : "If this case matches what you need, let’s talk."}
      </h2>
      <p className="mt-3 text-sm leading-7 text-muted">
        {locale === "es"
          ? "También puedes revisar más casos, descargar mi CV o escribirme directamente."
          : "You can also review more case studies, download my resume, or reach out directly."}
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ButtonLink href={localizePath(locale, "/projects")} variant="secondary">
          <ArrowLeft className="h-4 w-4" />
          {locale === "es" ? "Volver a proyectos" : "Back to projects"}
        </ButtonLink>
        <ButtonLink download={cvDownloadName} href={cvHref} target="_blank" variant="secondary">
          <Download className="h-4 w-4" />
          {locale === "es" ? "Descargar CV" : "Download resume"}
        </ButtonLink>
        <ButtonLink href={localizePath(locale, "/contact")} variant="primary">
          <Mail className="h-4 w-4" />
          {locale === "es" ? "Contactar" : "Contact"}
        </ButtonLink>
      </div>
    </div>
  );
}
