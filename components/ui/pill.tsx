import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export function Pill({ className, ...props }: ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-line/80 bg-panel/82 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted shadow-soft backdrop-blur",
        className,
      )}
      {...props}
    />
  );
}
