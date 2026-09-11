"use client";

import { ArrowLeft, Home } from "lucide-react";
import { useParams } from "next/navigation";

import { ButtonLink } from "@/components/ui/button-link";
import { StatusPage } from "@/components/ui/status-page";
import { defaultLocale, isLocale, localizePath } from "@/lib/i18n";

export default function NotFound() {
  const params = useParams<{ locale?: string }>();
  const locale = params.locale && isLocale(params.locale) ? params.locale : defaultLocale;
  const isSpanish = locale === "es";

  return (
    <StatusPage
      actions={
        <>
          <ButtonLink href={localizePath(locale)} variant="primary">
            <Home className="h-4 w-4" />
            {isSpanish ? "Volver al inicio" : "Back to home"}
          </ButtonLink>
          <ButtonLink href={localizePath(locale, "/projects")} variant="secondary">
            <ArrowLeft className="h-4 w-4" />
            {isSpanish ? "Explorar proyectos" : "Explore projects"}
          </ButtonLink>
        </>
      }
      code="404"
      description={
        isSpanish
          ? "La dirección no existe, ha cambiado o todavía no está disponible. Puedes volver al portfolio o seguir explorando mis proyectos."
          : "This address does not exist, has moved, or is not available yet. You can return to the portfolio or keep exploring my projects."
      }
      detail={isSpanish ? "Ruta no encontrada" : "Route not found"}
      eyebrow={isSpanish ? "Ruta no encontrada" : "Route not found"}
      title={isSpanish ? "Este enlace no lleva a ninguna parte." : "This link does not lead anywhere."}
    />
  );
}
