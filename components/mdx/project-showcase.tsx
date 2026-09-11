import Image from "next/image";

interface ProjectShowcaseProps {
  locale: "es" | "en";
}

const copy = {
  es: {
    label: "Recorrido de producto",
    title: "Un pago confirmado, visible en todo el flujo",
    description:
      "La vista de escritorio conserva el contexto de la lista y abre el detalle del cobro. En móvil, la misma información se reorganiza para priorizar lectura y acciones.",
    desktopAlt: "Detalle de un pago completado en Flecha Extreme en escritorio",
    mobileAlt: "Detalle de un pago completado en Flecha Extreme en móvil",
    note: "Datos ficticios preparados para esta demostración.",
  },
  en: {
    label: "Product walkthrough",
    title: "A confirmed payment, visible across the workflow",
    description:
      "The desktop view keeps the payment list in context while opening the transaction detail. On mobile, the same information is reorganized around readability and actions.",
    desktopAlt: "Completed payment detail in Flecha Extreme on desktop",
    mobileAlt: "Completed payment detail in Flecha Extreme on mobile",
    note: "Fictitious data prepared for this demonstration.",
  },
} as const;

export function ProjectShowcase({ locale }: ProjectShowcaseProps) {
  const content = copy[locale];

  return (
    <figure className="my-10 overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-[#11172a] to-[#090d18] p-4 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.9)] sm:p-6">
      <figcaption className="mb-5 sm:max-w-2xl">
        <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] text-indigo-300">
          {content.label}
        </p>
        <h3 className="mt-2 text-xl font-black tracking-tight text-white sm:text-2xl">{content.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">{content.description}</p>
      </figcaption>

      <div className="relative pb-8 sm:pr-[17%] sm:pb-10">
        <div className="overflow-hidden rounded-[1.2rem] border border-white/10 bg-slate-950 shadow-2xl">
          <Image
            alt={content.desktopAlt}
            className="h-auto w-full"
            height={960}
            loading="eager"
            sizes="(min-width: 1024px) 720px, 90vw"
            src="/images/projects/flecha-extreme/payments-desktop.png"
            width={1440}
          />
        </div>

        <div className="mx-auto -mt-4 w-[46%] overflow-hidden rounded-[1.35rem] border border-white/15 bg-slate-950 shadow-[0_24px_50px_-18px_rgba(0,0,0,0.95)] sm:absolute sm:-bottom-1 sm:right-0 sm:mt-0 sm:w-[23%]">
          <Image
            alt={content.mobileAlt}
            className="h-auto w-full"
            height={844}
            sizes="(min-width: 640px) 180px, 42vw"
            src="/images/projects/flecha-extreme/payments-mobile.png"
            width={390}
          />
        </div>
      </div>

      <p className="mt-1 text-center font-mono text-[0.65rem] text-slate-500">{content.note}</p>
    </figure>
  );
}
