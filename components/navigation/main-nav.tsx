"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { localizePath, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

interface MainNavProps {
  locale: Locale;
  items: Array<{ href: string; label: string }>;
}

export function MainNav({ locale, items }: MainNavProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className="hidden items-center gap-2 rounded-full border border-line bg-panel/80 p-1.5 shadow-[0_18px_50px_-30px_rgba(2,6,23,0.8)] md:flex">
      {items.map((item) => {
        const href = localizePath(locale, item.href);
        const isActive = item.href === "/" ? pathname === localizePath(locale) : pathname === href;

        return (
          <Link
            className={cn(
              "cursor-pointer rounded-full px-4 py-2.5 text-sm font-semibold text-muted transition hover:bg-white/[0.04] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent",
              isActive && "bg-[linear-gradient(135deg,rgba(37,99,235,0.34),rgba(96,165,250,0.22))] text-white shadow-[inset_0_0_0_1px_rgba(96,165,250,0.24),0_12px_28px_-18px_rgba(37,99,235,0.7)]",
            )}
            href={href}
            key={item.href}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
