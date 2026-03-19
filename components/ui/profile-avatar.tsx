import { TerminalSquare } from "lucide-react";

import { cn } from "@/lib/utils";

interface ProfileAvatarProps {
  className?: string;
  iconClassName?: string;
}

export function ProfileAvatar({ className, iconClassName }: ProfileAvatarProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex items-center justify-center rounded-full border-2 border-accent bg-white text-accent shadow-sm dark:bg-slate-900",
        className,
      )}
    >
      <TerminalSquare className={cn("h-5 w-5", iconClassName)} />
    </span>
  );
}
