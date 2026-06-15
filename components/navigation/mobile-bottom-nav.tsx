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

const homeSectionMap = {
  "/": "#top",
  "/projects": "#projects",
  "/about": "#about",
  "/contact": "#contact",
} as const;

export function MobileBottomNav({ locale }: MobileBottomNavProps) {
  const pathname = usePathname();
  const items = [
    { key: "home", href: "/", label: locale === "es" ? "Inicio" : "Home" },
    { key: "projects", href: "/projects", label: locale === "es" ? "Proyectos" : "Work" },
    { key: "about", href: "/about", label: locale === "es" ? "Sobre mí" : "About" },
    { key: "contact", href: "/contact", label: locale === "es" ? "Contacto" : "Contact" },
  ] as const;

  return (
    <nav className="fixed bottom-4 left-4 right-4 z-50 flex rounded-[1.75rem] border border-line bg-[rgba(3,7,18,0.9)] px-3 py-2 shadow-[0_24px_60px_-32px_rgba(2,6,23,0.95)] backdrop-blur-xl md:hidden">
      {items.map((item) => {
        const href = `${localizePath(locale)}${homeSectionMap[item.href]}`;
        const Icon = iconMap[item.key];
        const isActive = item.href === "/" ? pathname === localizePath(locale) : false;

        return (
          <Link
            className={cn(
              "flex flex-1 flex-col items-center justify-center gap-1 rounded-2xl px-2 py-2.5",
              isActive ? "bg-white/[0.05] text-accent-soft" : "text-muted",
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
