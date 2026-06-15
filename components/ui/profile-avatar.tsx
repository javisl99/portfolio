import { BrandLogo } from "@/components/ui/brand-logo";
import { cn } from "@/lib/utils";

interface ProfileAvatarProps {
  className?: string;
  iconClassName?: string;
}

export function ProfileAvatar({ className, iconClassName }: ProfileAvatarProps) {
  return (
    <span aria-hidden="true" className={cn("inline-flex items-center justify-center rounded-2xl border border-line bg-panel p-1 shadow-soft", className)}>
      <BrandLogo className="w-10" imageClassName={cn("w-10", iconClassName)} variant="mark" />
    </span>
  );
}
