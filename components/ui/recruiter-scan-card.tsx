interface RecruiterScanCardProps {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
}
export function RecruiterScanCard({ eyebrow, title, description, bullets }: RecruiterScanCardProps) {
  return (
    <div className="space-y-4">
      <div>
        <p className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.2em] text-indigo-400">{eyebrow}</p>
        <h2 className="mt-2 text-xl font-black tracking-tight text-white sm:text-2xl">{title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-300">{description}</p>
      </div>
      <ul className="grid gap-2 text-sm leading-relaxed text-slate-200">
        {bullets.map((bullet) => (
          <li className="flex gap-3" key={bullet}>
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-indigo-400" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
