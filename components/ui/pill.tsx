import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export function Pill({ className, ...props }: ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(96,165,250,0.08),rgba(255,255,255,0.02))] px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#bcd1ff] shadow-[0_16px_30px_-24px_rgba(37,99,235,0.42)] backdrop-blur-sm",
        className,
      )}
      {...props}
    />
  );
}
