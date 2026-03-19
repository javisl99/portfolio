import { skillCategories } from "@/data/skills";
import type { Locale } from "@/lib/i18n";

export function SkillGrid({ locale }: { locale: Locale }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {skillCategories.map((category) => (
        <article className="rounded-[1.75rem] border border-line bg-panel/88 p-6 shadow-soft" key={category.title.en}>
          <h3 className="mb-3 text-xl font-semibold text-ink">{category.title[locale]}</h3>
          <p className="mb-5 text-sm leading-7 text-muted">{category.description[locale]}</p>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <span className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-ink" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
