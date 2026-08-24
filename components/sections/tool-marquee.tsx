interface Tool {
  name: string;
  slug: string;
  color: string;
  iconUrl: string;
}

const tools = [
  { name: "Java", slug: "java", color: "#f89820", iconUrl: "/tools/java.svg" },
  { name: "Spring", slug: "spring", color: "#6db33f", iconUrl: "/tools/spring.svg" },
  { name: "SAP Commerce", slug: "sap", color: "#0faaff", iconUrl: "/tools/sap.svg" },
  { name: "Docker", slug: "docker", color: "#2496ed", iconUrl: "/tools/docker.svg" },
  { name: "GitHub", slug: "github", color: "#f5f7fa", iconUrl: "/tools/github.svg" },
  { name: "Postman", slug: "postman", color: "#ff6c37", iconUrl: "/tools/postman.svg" },
  { name: "Jira", slug: "jira", color: "#2684ff", iconUrl: "/tools/jira.svg" },
  { name: "Codex", slug: "codex", color: "#f5f7fa", iconUrl: "/tools/codex.svg" },
  { name: "Notion", slug: "notion", color: "#f5f7fa", iconUrl: "/tools/notion.svg" },
] satisfies readonly Tool[];

function ToolItem({ name, color, iconUrl }: Tool) {
  return (
    <div className="group flex shrink-0 items-center gap-3 px-5 text-slate-300 sm:px-7">
      <span
        aria-hidden="true"
        className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] p-2 transition duration-300 group-hover:border-white/20 group-hover:bg-white/[0.08]"
        style={{ color }}
      >
        <>
          {/* External brand SVGs are intentionally used as lightweight tool marks. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            className="h-full w-full object-contain opacity-90 transition duration-300 group-hover:opacity-100"
            height="28"
            loading="lazy"
            decoding="async"
            src={iconUrl}
            width="28"
          />
        </>
      </span>
      <span className="whitespace-nowrap font-mono text-xs font-semibold tracking-[0.12em] text-slate-400 transition duration-300 group-hover:text-white sm:text-sm">
        {name}
      </span>
    </div>
  );
}

export function ToolMarquee({ locale }: { locale: "es" | "en" }) {
  return (
    <section aria-labelledby="tool-marquee-title" className="overflow-hidden border-y border-white/8 bg-black/20 py-4">
      <h2 className="sr-only" id="tool-marquee-title">
        {locale === "es" ? "Herramientas y tecnologías" : "Tools and technologies"}
      </h2>
      <p className="sr-only">
        {locale === "es" ? `Tecnologías utilizadas: ${tools.map((tool) => tool.name).join(", ")}.` : `Technologies used: ${tools.map((tool) => tool.name).join(", ")}.`}
      </p>
      <ul aria-hidden="true" className="tool-marquee-track m-0 flex w-max list-none items-center p-0">
        {[...tools, ...tools, ...tools, ...tools].map((tool, index) => (
          <li key={`${tool.slug}-${index}`}>
            <ToolItem {...tool} />
          </li>
        ))}
      </ul>
    </section>
  );
}
