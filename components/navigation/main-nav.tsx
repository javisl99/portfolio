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
    <nav aria-label="Primary" className="hidden items-center gap-2 lg:flex">
      {items.map((item) => {
        const href = localizePath(locale, item.href);
        const isActive = pathname === href;

        return (
          <Link
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium text-muted transition hover:bg-white/70 hover:text-ink",
              isActive && "bg-white text-ink shadow-[0_10px_24px_-18px_rgba(15,23,42,0.55)]",
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

