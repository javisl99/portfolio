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
    <nav aria-label="Primary" className="hidden items-center gap-1 rounded-full border border-white/8 bg-white/[0.03] p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md md:flex">
      {items.map((item) => {
        const href = localizePath(locale, item.href);
        const isActive = item.href === "/" ? pathname === localizePath(locale) : pathname === href;

        return (
          <Link
            className={cn(
              "cursor-pointer rounded-full px-3.5 py-1.5 text-xs font-semibold text-slate-400 transition duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent",
              isActive
                ? "border border-white/10 bg-white/[0.08] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]"
                : "hover:bg-white/[0.04]",
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
