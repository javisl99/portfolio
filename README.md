# Professional Portfolio

Bilingual professional portfolio built with Next.js, TypeScript, Tailwind CSS, and MDX.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- MDX case studies with typed frontmatter

## Run locally

```bash
npm install
npm run dev
```

## Validation

```bash
npm run lint
npm run typecheck
npm run build
```

## Where to edit content

- Global copy and site settings: `data/site.ts`
- Experience timeline: `data/experience.ts`
- Milestones: `data/highlights.ts`
- Skills: `data/skills.ts`
- Project case studies: `content/projects/es/*.mdx` and `content/projects/en/*.mdx`

## Notes

- Contact links and some career details are starter placeholders meant to be replaced with your real data.
- The resume PDF is generated from the content layer at `/{locale}/cv`.
