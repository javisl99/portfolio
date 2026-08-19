# Contributing

## Workflow

- Create a feature branch from `develop`.
- Open a pull request into `develop` for review and validation.
- Promote changes from `develop` to `main` through another pull request.
- Do not commit credentials, tokens, `.env` files, or generated build output.

## Local validation

```bash
pnpm install --frozen-lockfile
pnpm lint
pnpm typecheck
pnpm build
```

Pull requests run the same checks in GitHub Actions. The CI workflow intentionally runs with read-only permissions and without secrets so that contributions from forks can be checked safely.
