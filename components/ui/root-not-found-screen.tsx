import { Home, Languages } from "lucide-react";

import { BrandLogo } from "@/components/ui/brand-logo";
import { ButtonLink } from "@/components/ui/button-link";
import { StatusPage } from "@/components/ui/status-page";

export function RootNotFoundScreen() {
  return (
    <>
      <title>Página no encontrada | Javier Sánchez Lancha</title>
      <header className="border-b border-white/6 bg-[#08090d]/80">
        <div className="mx-auto flex min-h-[4.4rem] w-full max-w-7xl items-center px-5 sm:px-6 lg:px-8">
          <ButtonLink aria-label="Ir al inicio" className="border-0 bg-transparent p-0 shadow-none hover:translate-y-0 hover:brightness-100" href="/es" variant="ghost">
            <BrandLogo variant="full-light" />
          </ButtonLink>
        </div>
      </header>
      <main>
        <StatusPage
          actions={
            <>
              <ButtonLink href="/es" variant="primary">
                <Home className="h-4 w-4" />
                Volver al inicio
              </ButtonLink>
              <ButtonLink href="/en" variant="secondary">
                <Languages className="h-4 w-4" />
                English version
              </ButtonLink>
            </>
          }
          code="404"
          description="La dirección que has escrito no pertenece a ninguna sección disponible. Vuelve al portfolio o cambia a la versión en inglés."
          detail="Ruta global no encontrada"
          eyebrow="Ruta no encontrada"
          title="Este enlace no lleva a ninguna parte."
        />
      </main>
    </>
  );
}
