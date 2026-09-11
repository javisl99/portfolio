"use client";

// @ts-ignore: font packages may not have type declarations for side-effect imports
import "@fontsource-variable/manrope";
// @ts-ignore: font packages may not have type declarations for side-effect imports
import "@fontsource-variable/space-grotesk";

import "./globals.css";

import { Home, RotateCcw } from "lucide-react";
import { useEffect } from "react";

import { ButtonLink } from "@/components/ui/button-link";
import { StatusPage } from "@/components/ui/status-page";

export default function GlobalError({ error, retry }: { error: Error & { digest?: string }; retry: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="es">
      <body>
        <title>Error de aplicación | Javier Sánchez Lancha</title>
        <main>
          <StatusPage
            actions={
              <>
                <button
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-indigo-400/35 bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-500 px-5 py-3 text-sm font-semibold leading-none text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_16px_36px_-14px_rgba(99,102,241,0.6)] transition hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent"
                  onClick={retry}
                  type="button"
                >
                  <RotateCcw className="h-4 w-4" />
                  Intentarlo de nuevo
                </button>
                <ButtonLink href="/es" variant="secondary">
                  <Home className="h-4 w-4" />
                  Volver al inicio
                </ButtonLink>
              </>
            }
            code="500"
            description="El portfolio no ha podido cargar correctamente. Puedes reintentar la operación o volver al inicio."
            detail={error.digest ? `Error ID · ${error.digest}` : "Incidencia registrada"}
            eyebrow="Error crítico"
            title="Algo no ha salido como esperábamos."
          />
        </main>
      </body>
    </html>
  );
}
