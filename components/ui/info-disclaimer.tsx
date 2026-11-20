import type { ReactNode } from "react";
import { Info } from "lucide-react";

import { cn } from "@/lib/utils";

interface InfoDisclaimerProps {
  children: ReactNode;
  className?: string;
}

export function InfoDisclaimer({ children, className }: InfoDisclaimerProps) {
  return (
    <div className={cn("flex items-start gap-3", className)}>
      <Info aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" strokeWidth={2} />
      <p className="text-xs leading-5 text-slate-500">{children}</p>
    </div>
  );
}
