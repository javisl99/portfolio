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
    <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
      {items.map((item) => {
        const href = localizePath(locale, item.href);
        const isActive = pathname === href;

        return (
          <Link
            className={cn(
              "border-b-2 border-transparent pb-1 text-sm font-semibold text-muted transition hover:border-accent/35 hover:text-accent",
              isActive && "border-accent text-ink",
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
