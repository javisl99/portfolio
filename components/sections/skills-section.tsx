import { Braces, Cloud, Cpu, Sparkles, Users } from "lucide-react";

import { Container } from "@/components/ui/container";
import type { SkillCategory } from "@/data/types";
import type { Locale } from "@/lib/i18n";

const icons = [Braces, Cpu, Cloud, Sparkles, Users];

interface SkillsSectionProps {
  locale: Locale;
  eyebrow: string;
  title: string;
  description: string;
  categories: SkillCategory[];
}

export function SkillsSection({ locale, eyebrow, title, description, categories }: SkillsSectionProps) {
  return (
    <section className="py-18 sm:py-24" id="skills">
      <Container>
        <div className="mb-10 max-w-3xl space-y-4">
          <p className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.24em] text-[#bcd1ff]">{eyebrow}</p>
          <h2 className="font-display text-3xl font-black tracking-tight text-ink sm:text-4xl">{title}</h2>
          <p className="text-base leading-8 text-muted sm:text-lg">{description}</p>
        </div>

        <div className="grid gap-5 xl:grid-cols-5 md:grid-cols-2">
          {categories.map((category, index) => {
            const Icon = icons[index % icons.length];

            return (
              <article
                className="rounded-[1.6rem] border border-line bg-[linear-gradient(180deg,rgba(10,16,31,0.92),rgba(8,13,26,0.96))] p-6 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-accent-soft/35"
                key={category.title.en}
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/8 bg-[linear-gradient(180deg,rgba(96,165,250,0.18),rgba(129,140,248,0.12))] text-[#d5e2ff]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-4 text-lg font-black tracking-tight text-ink">{category.title[locale]}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[0.7rem] font-medium tracking-[0.03em] text-ink"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
