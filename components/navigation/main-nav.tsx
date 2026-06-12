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
    <nav aria-label="Primary" className="hidden items-center gap-2 rounded-full border border-white/8 bg-white/[0.02] p-1 md:flex">
      {items.map((item) => {
        const href = localizePath(locale, item.href);
        const isActive = pathname === href;

        return (
          <Link
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold text-muted transition hover:bg-white/[0.04] hover:text-white",
              isActive && "bg-[linear-gradient(135deg,rgba(37,99,235,0.18),rgba(99,102,241,0.14))] text-white shadow-[inset_0_0_0_1px_rgba(96,165,250,0.18)]",
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
