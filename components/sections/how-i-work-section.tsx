import { CheckCircle2 } from "lucide-react";

import { Container } from "@/components/ui/container";
import type { CopyCard } from "@/data/types";
import type { Locale } from "@/lib/i18n";

interface HowIWorkSectionProps {
  locale: Locale;
  eyebrow: string;
  title: string;
  description: string;
  items: CopyCard[];
}

export function HowIWorkSection({ locale, eyebrow, title, description, items }: HowIWorkSectionProps) {
  const bulletItems = items.slice(0, 3);
  const tiles = items.slice(0, 4);

  return (
    <section className="py-18 sm:py-24" id="how-i-work">
      <Container>
        <div className="rounded-[1.75rem] border border-line bg-surface/60 p-8 md:p-12">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-accent">{eyebrow}</p>
              <h2 className="mb-6 font-display text-3xl font-black tracking-tight text-ink">{title}</h2>
              <p className="mb-8 max-w-2xl leading-8 text-muted">{description}</p>
              <div className="space-y-4">
                {bulletItems.map((item) => (
                  <div className="flex items-start gap-4" key={item.title.en}>
                    <CheckCircle2 className="mt-1 h-5 w-5 text-accent" />
                    <div>
                      <h3 className="font-bold text-ink">{item.title[locale]}</h3>
                      <p className="text-sm text-muted">{item.body[locale]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {tiles.map((item, index) => {
                const highlighted = index === 0 || index === 3;

                return (
                  <div
                    className={
                      highlighted
                        ? "aspect-square rounded-2xl border border-accent/20 bg-accent/10"
                        : "aspect-square rounded-2xl border border-line bg-panel"
                    }
                    key={item.title.en}
                  >
                    <div className="flex h-full items-center justify-center p-5 text-center">
                      <div>
                        <div className={highlighted ? "mb-2 text-2xl font-black text-accent" : "mb-2 text-2xl font-black text-ink"}>
                          0{index + 1}
                        </div>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-ink">{item.title[locale]}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
