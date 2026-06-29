# Professional Portfolio

Bilingual professional portfolio built with Next.js, TypeScript, Tailwind CSS, and MDX.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- MDX case studies with typed frontmatter

## Run locally

```bash
pnpm install
pnpm dev
```

`pnpm dev` is the normal local workflow.

This project intentionally uses `next dev --webpack` for local development. During validation, plain `next dev` started Turbopack in the installed Next.js version, so Webpack remains the safer default here for MDX/content-heavy local work.

If local visual changes ever feel stale, cached, or partially reflected, use:

```bash
pnpm dev:clean
```

That clears `.next` before starting the development server again, which is especially useful after tricky style, modal, overlay, or responsive changes.

## Validation

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Development notes

- The development server runs on port `3001`.
- `pnpm dev` is the default choice for day-to-day work.
- `pnpm dev:clean` is the fallback when local cache or HMR gets into a bad state.
- `pnpm dev` and `pnpm dev:clean` both force Webpack on purpose to avoid accidental Turbopack regressions in local development.
- Tailwind v4 source scanning is configured from `app/globals.css`, including `app`, `pages`, `components`, `src`, `content`, `data`, and `lib`.

## Where to edit content

- Global copy and site settings: `data/site.ts`
- Experience timeline: `data/experience.ts`
- Milestones: `data/highlights.ts`
- Skills: `data/skills.ts`
- Project case studies: `content/projects/es/*.mdx` and `content/projects/en/*.mdx`

## Notes

- Contact links and some career details are starter placeholders meant to be replaced with your real data.
- The resume PDF is generated from the content layer at `/{locale}/cv`.
- Large copy/data structures already live outside React components, which helps keep Fast Refresh more predictable.
