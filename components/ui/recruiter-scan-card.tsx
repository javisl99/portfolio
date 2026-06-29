interface RecruiterScanCardProps {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
}

export function RecruiterScanCard({ eyebrow, title, description, bullets }: RecruiterScanCardProps) {
  return (
    <div className="space-y-5">
      <div>
        <p className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.22em] text-[#9fbeff]">{eyebrow}</p>
        <h2 className="mt-3 text-2xl font-black tracking-tight text-white">{title}</h2>
        <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
      </div>
      <ul className="grid gap-3 text-sm leading-7 text-slate-200">
        {bullets.map((bullet) => (
          <li className="flex gap-3" key={bullet}>
            <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
