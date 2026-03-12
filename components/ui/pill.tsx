import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export function Pill({ className, ...props }: ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-line/80 bg-white/70 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted shadow-[0_10px_40px_-24px_rgba(15,23,42,0.4)] backdrop-blur",
        className,
      )}
      {...props}
    />
  );
}

