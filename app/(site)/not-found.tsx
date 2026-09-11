import type { Metadata } from "next";

import { RootNotFoundScreen } from "@/components/ui/root-not-found-screen";
import { getMetadataBase } from "@/lib/metadata";

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: "Página no encontrada | Javier Sánchez Lancha",
  description: "La página solicitada no existe en este portfolio.",
};

export default function SiteNotFound() {
  return <RootNotFoundScreen />;
}
