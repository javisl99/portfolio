"use client";

import Link from "next/link";
import { BriefcaseBusiness, Home, Mail, UserRound } from "lucide-react";
import { usePathname } from "next/navigation";

import { localizePath, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

interface MobileBottomNavProps {
  locale: Locale;
}

const iconMap = {
  home: Home,
  projects: BriefcaseBusiness,
  about: UserRound,
  contact: Mail,
};

export function MobileBottomNav({ locale }: MobileBottomNavProps) {
  const pathname = usePathname();
  const items = [
    { key: "home", href: "/", label: locale === "es" ? "Inicio" : "Home" },
    { key: "projects", href: "/projects", label: locale === "es" ? "Proyectos" : "Work" },
    { key: "about", href: "/about", label: locale === "es" ? "Sobre mi" : "About" },
    { key: "contact", href: "/contact", label: locale === "es" ? "Contacto" : "Contact" },
  ] as const;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex border-t border-white/8 bg-[rgba(3,7,18,0.92)] px-4 pb-4 pt-2 backdrop-blur-xl md:hidden">
      {items.map((item) => {
        const href = localizePath(locale, item.href);
        const Icon = iconMap[item.key];
        const isActive = pathname === href;

        return (
          <Link
            className={cn(
              "flex flex-1 flex-col items-center justify-center gap-1 rounded-2xl px-2 py-2",
              isActive ? "bg-white/[0.04] text-accent-soft" : "text-muted",
            )}
            href={href}
            key={item.key}
          >
            <Icon className="h-4 w-4" />
            <span className="text-[10px] font-medium uppercase tracking-wider">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
