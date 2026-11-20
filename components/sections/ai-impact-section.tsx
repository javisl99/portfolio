import {
  ArrowRight,
  BrainCircuit,
  Check,
  FileSearch,
  FileText,
  Gauge,
  Rocket,
  ShieldCheck,
  SquareTerminal,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import type { AiImpactMetric, CopyCard } from "@/data/types";
import type { Locale } from "@/lib/i18n";

import { ButtonLink } from "@/components/ui/button-link";
import { InfoDisclaimer } from "@/components/ui/info-disclaimer";
import { MetricCounter } from "@/components/ui/metric-counter";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";
import { localizePath } from "@/lib/i18n";
import { cn } from "@/lib/utils";

interface AIImpactSectionProps {
  locale: Locale;
  eyebrow: string;
  title: string;
  description: string;
  context: string;
  metrics: AiImpactMetric[];
  metricsNote: string;
  note: string;
  items: CopyCard[];
}

type Accent = "blue" | "green" | "violet";

type WorkflowStep = {
  icon: LucideIcon;
  number: number;
  title: string;
  body: string;
  accent: Accent;
};

const tones: Record<Accent, { border: string; text: string; soft: string; glow: string; ring: string }> = {
  blue: {
    border: "border-indigo-500/30",
    text: "text-indigo-300",
    soft: "bg-indigo-500/10",
    glow: "shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_16px_36px_-24px_rgba(99,102,241,0.4)]",
    ring: "stroke-[#6366f1]",
  },
  green: {
    border: "border-emerald-500/30",
    text: "text-emerald-300",
    soft: "bg-emerald-500/10",
    glow: "shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_16px_36px_-24px_rgba(16,185,129,0.35)]",
    ring: "stroke-[#10b981]",
  },
  violet: {
    border: "border-purple-500/30",
    text: "text-purple-300",
    soft: "bg-purple-500/10",
    glow: "shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_16px_36px_-24px_rgba(168,85,247,0.35)]",
    ring: "stroke-[#a855f7]",
  },
};


const workflowCopy = {
  es: {
    accelerator: "IA como acelerador",
    validator: "Yo valido y decido",
    steps: [
      {
        icon: FileSearch,
        number: 1,
        title: "Contexto y datos",
        body: "Reviso logs, trazas, código y contexto de negocio.",
        accent: "blue",
      },
      {
        icon: BrainCircuit,
        number: 2,
        title: "IA analiza",
        body: "La IA detecta patrones y propone hipótesis.",
        accent: "blue",
      },
      {
        icon: FileText,
        number: 3,
        title: "Resultado inicial",
        body: "Obtengo resumen, causas posibles y opciones.",
        accent: "blue",
      },
      {
        icon: SquareTerminal,
        number: 4,
        title: "Pruebas locales",
        body: "Valido hipótesis con tests y revisión del código.",
        accent: "green",
      },
      {
        icon: ShieldCheck,
        number: 5,
        title: "Validación técnica",
        body: "Reviso estándar, impacto y criterios funcionales.",
        accent: "green",
      },
      {
        icon: Rocket,
        number: 6,
        title: "Decisión y entrega",
        body: "Tomo la decisión final y despliego la solución.",
        accent: "green",
      },
    ] satisfies WorkflowStep[],
    acceleratorTitle: "IA = Acelerador",
    acceleratorBody:
      "Apoya el análisis, la búsqueda de información y la generación de opciones en tareas cognitivas y repetitivas.",
    ownerTitle: "Yo = Responsable",
    ownerBody:
      "Decido, valido, pruebo y asumo la responsabilidad técnica y del impacto en producción.",
    metricsEyebrow: "Impacto en el día a día",
  },
  en: {
    accelerator: "AI as accelerator",
    validator: "I validate and decide",
    steps: [
      {
        icon: FileSearch,
        number: 1,
        title: "Context and data",
        body: "I review logs, traces, code, and business context.",
        accent: "blue",
      },
      {
        icon: BrainCircuit,
        number: 2,
        title: "AI analyzes",
        body: "AI detects patterns and proposes hypotheses.",
        accent: "blue",
      },
      {
        icon: FileText,
        number: 3,
        title: "Initial output",
        body: "I get a summary, likely causes, and options.",
        accent: "blue",
      },
      {
        icon: SquareTerminal,
        number: 4,
        title: "Local testing",
        body: "I validate hypotheses with tests and code review.",
        accent: "green",
      },
      {
        icon: ShieldCheck,
        number: 5,
        title: "Technical validation",
        body: "I review standard behavior, impact, and functional criteria.",
        accent: "green",
      },
      {
        icon: Rocket,
        number: 6,
        title: "Decision and delivery",
        body: "I make the final decision and deploy the solution.",
        accent: "green",
      },
    ] satisfies WorkflowStep[],
    acceleratorTitle: "AI = Accelerator",
    acceleratorBody:
      "It supports analysis, information lookup, and option generation across cognitive and repetitive tasks.",
    ownerTitle: "I = Responsible",
    ownerBody:
      "I decide, validate, test, and own the technical outcome and the production impact.",
    metricsEyebrow: "Day-to-day impact",
  },
} as const;

function BulletList({ accent, lines }: { accent: Accent; lines: string[] }) {
  const tone = tones[accent];

  return (
    <ul className="mt-3 grid gap-2.5 text-sm leading-6 text-slate-300 sm:leading-7">
      {lines.map((line) => (
        <li className="flex gap-3" key={line}>
          <span className={cn("mt-1.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border shadow-[0_0_14px_-6px_currentColor]", tone.border, tone.soft, tone.text)}>
            <Check className="h-3 w-3" strokeWidth={2.8} />
          </span>
          <span>{line}</span>
        </li>
      ))}
    </ul>
  );
}

function GroupRail({ accent, label }: { accent: Accent; label: string }) {
  const tone = tones[accent];

  return (
    <div className="mb-3 hidden items-center gap-3 lg:flex">
      <div className={cn("h-px flex-1 rounded-full bg-current/70", tone.text)} />
      <span className={cn("font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em]", tone.text)}>{label}</span>
      <div className={cn("h-2.5 w-2.5 rounded-full bg-current shadow-[0_0_18px_currentColor]", tone.text)} />
      <div className={cn("h-px flex-1 rounded-full bg-current/70", tone.text)} />
    </div>
  );
}

function WorkflowStepCard({ step, showArrow }: { step: WorkflowStep; showArrow?: boolean }) {
  const tone = tones[step.accent];
  const Icon = step.icon;
  const tintClass =
    step.accent === "blue"
      ? "bg-[linear-gradient(180deg,rgba(79,134,255,0.055),rgba(6,11,22,0.98)_34%,rgba(6,11,22,0.98))]"
      : "bg-[linear-gradient(180deg,rgba(103,226,125,0.055),rgba(6,11,22,0.98)_34%,rgba(6,11,22,0.98))]";

  return (
    <div className="relative">
      <article
        className={cn(
          "group h-full rounded-[1.35rem] border p-4 transition duration-300 hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none sm:p-5",
          `ai-animate ai-delay-${step.number}`,
          tone.border,
          tone.glow,
          tintClass,
        )}
      >
        <div className="mb-4 flex items-start justify-between gap-3">
          <span
            className={cn(
              "inline-flex h-9 w-9 items-center justify-center rounded-full border text-sm font-black text-white",
              tone.border,
              tone.soft,
            )}
          >
            {step.number}
          </span>
          <Icon className={cn("h-10 w-10 shrink-0 transition duration-300 group-hover:scale-105 motion-reduce:transform-none", tone.text)} strokeWidth={1.8} />
        </div>
        <h3 className="text-lg font-black tracking-tight text-white">{step.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-300">{step.body}</p>
      </article>

      {showArrow ? (
        <div className="pointer-events-none absolute -right-6 top-1/2 hidden -translate-y-1/2 xl:flex">
          <span className="relative inline-flex items-center justify-center">
            <ArrowRight className={cn("h-5 w-5", tone.text)} />
            <span className={cn("absolute h-1.5 w-1.5 rounded-full flow-dot", tone.text.replace("text-", "bg-"))} />
          </span>
        </div>
      ) : null}
    </div>
  );
}

function MetricRing({ accent, progress, icon: Icon }: { accent: Accent; progress: number; icon: LucideIcon }) {
  const tone = tones[accent];
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const dashoffset = circumference - (circumference * progress) / 100;

  return (
    <div aria-hidden="true" className="relative h-20 w-20 shrink-0">
      <svg className="h-20 w-20 -rotate-90" viewBox="0 0 80 80">
        <circle cx="40" cy="40" r={radius} className="stroke-white/10" fill="none" strokeWidth="8" />
        <circle
          cx="40"
          cy="40"
          r={radius}
          className={cn(tone.ring, "ring-animate")}
          fill="none"
          strokeLinecap="round"
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={dashoffset}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center rounded-full bg-[radial-gradient(circle,rgba(7,12,24,0.88),rgba(7,12,24,0.55))]">
        <Icon className={cn("h-7 w-7", tone.text)} strokeWidth={2} />
      </div>
    </div>
  );
}

function getRelativeReduction(before: number, after: number) {
  return Math.round(((before - after) / before) * 100);
}

export function AIImpactSection({ locale, eyebrow, title, description, context, metrics, metricsNote, note, items }: AIImpactSectionProps) {
  const copy = workflowCopy[locale];
  const acceleratorSteps = copy.steps.slice(0, 3);
  const validatorSteps = copy.steps.slice(3);
  const supportLines = (items[0]?.body[locale] ?? "").split("\n").filter(Boolean);
  const validationLines = (items[1]?.body[locale] ?? "").split("\n").filter(Boolean);
  const contextTitle = locale === "es" ? "Contexto de uso" : "Usage context";

  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-7 flex flex-col items-center gap-3.5 text-center sm:mb-9">
        <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[#9fbeff]">{eyebrow}</p>
        <h2 className="max-w-4xl font-display text-[2.1rem] font-black tracking-tight text-ink sm:text-5xl">{title}</h2>
        <p className="max-w-3xl text-[1.02rem] leading-7 text-muted sm:text-lg sm:leading-8">{description}</p>
        <ButtonLink className="mt-1" href={localizePath(locale, "/projects")} variant="secondary">
          {locale === "es" ? "Ver casos reales" : "View real cases"}
        </ButtonLink>
      </div>

      <div className="grid gap-4 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-5">
        <aside className="grid gap-2 self-start">
          <article className="rounded-[1.45rem] border border-white/8 bg-[linear-gradient(180deg,rgba(11,18,32,0.92),rgba(7,12,24,0.97))] p-4 shadow-soft sm:px-5 sm:py-4">
            <div className="flex items-start gap-3">
              <div className={cn("mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border", tones.blue.border, tones.blue.soft)}>
                <SquareTerminal className={cn("h-4 w-4", tones.blue.text)} strokeWidth={1.9} />
              </div>
              <div>
                <p className="font-mono text-[0.66rem] font-bold uppercase tracking-[0.18em] text-[#9fbeff]">{contextTitle}</p>
                <p className="mt-3 text-sm leading-7 text-slate-200">{context}</p>
              </div>
            </div>
          </article>

          <article className="rounded-[1.45rem] border border-white/8 bg-[linear-gradient(180deg,rgba(11,18,32,0.92),rgba(7,12,24,0.97))] p-4 shadow-soft sm:px-5 sm:py-4">
            <p className="font-mono text-[0.66rem] font-bold uppercase tracking-[0.18em] text-[#9fbeff]">{items[0]?.title[locale]}</p>
            <BulletList accent="blue" lines={supportLines} />
          </article>

          <article className="rounded-[1.45rem] border border-white/8 bg-[linear-gradient(180deg,rgba(11,18,32,0.92),rgba(7,12,24,0.97))] p-4 shadow-soft sm:px-5 sm:py-4">
            <p className="font-mono text-[0.66rem] font-bold uppercase tracking-[0.18em] text-[#7be08f]">{items[1]?.title[locale]}</p>
            <BulletList accent="green" lines={validationLines} />
          </article>
        </aside>

        <div className="grid gap-4">
          <section className="rounded-[1.65rem] border border-white/8 bg-[linear-gradient(180deg,rgba(9,15,29,0.96),rgba(6,10,22,0.99))] p-4 shadow-soft sm:p-5 lg:p-6">
            <div className="space-y-6">
              <div>
                <GroupRail accent="blue" label={copy.accelerator} />
                <p className="mb-3 font-mono text-[0.66rem] font-bold uppercase tracking-[0.18em] text-[#74a5ff] lg:hidden">{copy.accelerator}</p>
                <RevealOnScroll className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                  {acceleratorSteps.map((step, index) => (
                    <WorkflowStepCard key={step.number} showArrow={index < acceleratorSteps.length - 1} step={step} />
                  ))}
                </RevealOnScroll>
              </div>

              <div>
                <GroupRail accent="green" label={copy.validator} />
                <p className="mb-3 font-mono text-[0.66rem] font-bold uppercase tracking-[0.18em] text-[#7be08f] lg:hidden">{copy.validator}</p>
                <RevealOnScroll className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                  {validatorSteps.map((step, index) => (
                    <WorkflowStepCard key={step.number} showArrow={index < validatorSteps.length - 1} step={step} />
                  ))}
                </RevealOnScroll>
              </div>
            </div>
          </section>

          <section className="overflow-hidden rounded-[1.55rem] border border-white/8 bg-[linear-gradient(180deg,rgba(10,17,31,0.96),rgba(6,11,22,0.99))] shadow-soft">
            <div className="grid gap-0 md:grid-cols-2">
              <div className="border-b border-white/8 px-5 py-6 md:border-b-0 md:border-r md:border-white/8 sm:px-6 sm:py-7">
                <div className="flex items-start gap-4.5">
                  <div className={cn("flex h-16 w-16 shrink-0 items-center justify-center rounded-full border", tones.blue.border, tones.blue.soft)}>
                    <Gauge className={cn("h-7 w-7", tones.blue.text)} strokeWidth={1.9} />
                  </div>
                  <div>
                    <h3 className={cn("text-[1.15rem] font-black tracking-tight", tones.blue.text)}>{copy.acceleratorTitle}</h3>
                    <p className="mt-2.5 text-sm leading-7 text-slate-300">{copy.acceleratorBody}</p>
                  </div>
                </div>
              </div>

              <div className="px-5 py-6 sm:px-6 sm:py-7">
                <div className="flex items-start gap-4.5">
                  <div className={cn("flex h-16 w-16 shrink-0 items-center justify-center rounded-full border", tones.green.border, tones.green.soft)}>
                    <ShieldCheck className={cn("h-7 w-7", tones.green.text)} strokeWidth={1.9} />
                  </div>
                  <div>
                    <h3 className={cn("text-[1.15rem] font-black tracking-tight", tones.green.text)}>{copy.ownerTitle}</h3>
                    <p className="mt-2.5 text-sm leading-7 text-slate-300">{copy.ownerBody}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/8 px-5 py-3.5 sm:px-6">
              <InfoDisclaimer>{note}</InfoDisclaimer>
            </div>
          </section>

          <section className="pt-3 sm:pt-4">
            <p className="mb-4 font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#9fbeff]">{copy.metricsEyebrow}</p>
            <RevealOnScroll className="grid gap-3" rootMargin="0px 0px -180px 0px">
              <article className="ai-animate overflow-hidden rounded-[1.45rem] border border-white/8 bg-[linear-gradient(180deg,rgba(11,18,32,0.9),rgba(7,12,24,0.96))] shadow-soft transition duration-300 hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none">
                {metrics.map((metric) => {
                  const relativeReduction = getRelativeReduction(metric.beforeValue, metric.afterValue);

                  return (
                    <div className="grid gap-6 p-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center sm:p-6" key={metric.title[locale]}>
                      <div className="flex items-center gap-4 sm:gap-5">
                        <MetricRing accent="violet" icon={Gauge} progress={relativeReduction} />
                        <div>
                          <p className="font-mono text-[0.64rem] font-bold uppercase tracking-[0.18em] text-purple-300">{metric.title[locale]}</p>
                          <h3 className="value-appear mt-2 text-2xl font-black leading-tight tracking-tight text-white sm:text-3xl">
                            <MetricCounter className="inline-block tabular-nums" locale={locale} target={relativeReduction} />{" "}{metric.highlight[locale]}
                          </h3>
                        </div>
                      </div>

                      <div className="grid gap-3 sm:grid-cols-2">
                        <div className="ai-animate rounded-xl border border-white/8 bg-white/[0.025] p-4 sm:p-5" style={{ animationDelay: "0.2s" }}>
                          <p className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400">{metric.beforeLabel[locale]}</p>
                          <MetricCounter className="value-appear mt-3 block text-3xl font-black tabular-nums tracking-tight text-slate-100" decimals={1} locale={locale} target={metric.beforeValue} />
                          <p className="mt-1 text-xs text-slate-400">{locale === "es" ? "de la estimación original" : "of the original estimate"}</p>
                          <p className="mt-1 text-sm text-slate-400">n = {metric.beforeCount} {locale === "es" ? "tarjetas" : "tickets"}</p>
                          <div aria-hidden="true" className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                            <span className="metric-progress-fill block h-full rounded-full bg-slate-400" style={{ width: `${metric.beforeValue}%` }} />
                          </div>
                        </div>
                        <div className="ai-animate rounded-xl border border-indigo-400/20 bg-indigo-500/[0.06] p-4 sm:p-5" style={{ animationDelay: "0.4s" }}>
                          <p className="font-mono text-xs font-bold uppercase tracking-wider text-indigo-200">{metric.afterLabel[locale]}</p>
                          <MetricCounter className="value-appear mt-3 block text-3xl font-black tabular-nums tracking-tight text-white" decimals={1} locale={locale} target={metric.afterValue} />
                          <p className="mt-1 text-xs text-slate-300">{locale === "es" ? "de la estimación original" : "of the original estimate"}</p>
                          <p className="mt-1 text-sm text-slate-300">n = {metric.afterCount} {locale === "es" ? "tarjetas" : "tickets"}</p>
                          <div aria-hidden="true" className="mt-4 h-1.5 overflow-hidden rounded-full bg-indigo-200/10">
                            <span className="metric-progress-fill block h-full rounded-full bg-indigo-300" style={{ width: `${metric.afterValue}%` }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div className="border-t border-white/8 px-5 py-3.5 sm:px-6">
                  <InfoDisclaimer>{metricsNote}</InfoDisclaimer>
                </div>
              </article>
            </RevealOnScroll>
          </section>
        </div>
      </div>
    </div>
  );
}
