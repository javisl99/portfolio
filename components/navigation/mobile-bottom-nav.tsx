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
    { key: "projects", href: "/projects", label: locale === "es" ? "Casos" : "Work" },
    { key: "about", href: "/about", label: locale === "es" ? "About" : "About" },
    { key: "contact", href: "/contact", label: locale === "es" ? "Contacto" : "Contact" },
  ] as const;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex border-t border-accent/10 bg-bg/95 px-4 pb-4 pt-2 backdrop-blur-md md:hidden">
      {items.map((item) => {
        const href = localizePath(locale, item.href);
        const Icon = iconMap[item.key];
        const isActive = pathname === href;

        return (
          <Link
            className={cn(
              "flex flex-1 flex-col items-center justify-center gap-1",
              isActive ? "text-accent" : "text-muted",
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
