import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export const mdxComponents = {
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2 className="mt-10 text-2xl font-semibold tracking-tight text-ink" {...props} />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3 className="mt-8 text-xl font-semibold text-ink" {...props} />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => <p className="text-base leading-8 text-muted" {...props} />,
  ul: (props: ComponentPropsWithoutRef<"ul">) => <ul className="grid gap-3 pl-5" {...props} />,
  ol: (props: ComponentPropsWithoutRef<"ol">) => <ol className="grid gap-3 pl-5" {...props} />,
  li: (props: ComponentPropsWithoutRef<"li">) => <li className="text-base leading-8 text-muted" {...props} />,
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote className="rounded-[1.5rem] border border-line bg-surface px-5 py-4 text-base leading-8 text-ink" {...props} />
  ),
  a: ({ className, href = "", ...props }: ComponentPropsWithoutRef<"a">) => {
    const classes = cn("font-semibold text-ink underline decoration-accent/50 underline-offset-4", className);

    if (href.startsWith("http")) {
      return <a className={classes} href={href} rel="noreferrer" target="_blank" {...props} />;
    }

    return <Link className={classes} href={href} {...props} />;
  },
  strong: (props: ComponentPropsWithoutRef<"strong">) => <strong className="font-semibold text-ink" {...props} />,
};
