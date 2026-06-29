import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export function Pill({ className, ...props }: ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-xl border border-accent/20 bg-accent/8 px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-accent",
        className,
      )}
      {...props}
    />
  );
}
