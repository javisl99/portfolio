"use client";

import { Home, RotateCcw } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect } from "react";

import { ButtonLink } from "@/components/ui/button-link";
import { StatusPage } from "@/components/ui/status-page";
import { defaultLocale, isLocale, localizePath } from "@/lib/i18n";

export default function ErrorPage({ error, retry }: { error: Error & { digest?: string }; retry: () => void }) {
  const params = useParams<{ locale?: string }>();
  const locale = params.locale && isLocale(params.locale) ? params.locale : defaultLocale;
  const isSpanish = locale === "es";

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <StatusPage
      actions={
        <>
          <button
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-indigo-400/35 bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-500 px-5 py-3 text-sm font-semibold leading-none text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_16px_36px_-14px_rgba(99,102,241,0.6)] transition hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent"
            onClick={retry}
            type="button"
          >
            <RotateCcw className="h-4 w-4" />
            {isSpanish ? "Intentarlo de nuevo" : "Try again"}
          </button>
          <ButtonLink href={localizePath(locale)} variant="secondary">
            <Home className="h-4 w-4" />
            {isSpanish ? "Volver al inicio" : "Back to home"}
          </ButtonLink>
        </>
      }
      code="500"
      description={
        isSpanish
          ? "Se ha producido un error inesperado al mostrar esta página. Puedes reintentar la operación o volver a una zona segura del portfolio."
          : "An unexpected error occurred while displaying this page. You can retry the operation or return to a safe area of the portfolio."
      }
      detail={error.digest ? `Error ID · ${error.digest}` : isSpanish ? "Incidencia registrada" : "Issue recorded"}
      eyebrow={isSpanish ? "Error de aplicación" : "Application error"}
      title={isSpanish ? "Algo no ha salido como esperábamos." : "Something did not go as expected."}
    />
  );
}
