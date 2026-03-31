# Ready build

A project-agnostic professional JavaScript tooling harness. Clone it, install, and start building — linting, formatting, pre-commit hooks, CI, and a dev server are already configured.

## Beginner's guide

This starter gives you the same tooling setup used by professional JavaScript teams. Everything is pre-configured so you can focus on writing code instead of wiring up tools.

**What's included:**

- **Vite** — fast dev server with hot reload and production builds
- **ESLint** — catches bugs and enforces consistent code style
- **Prettier** — auto-formats your code so you never argue about semicolons
- **Husky + lint-staged** — runs linting and formatting automatically before each commit
- **Vitest** — fast unit testing framework
- **GitHub Actions** — CI pipeline that runs lint checks on every push

## Getting started

```bash
npm install
npm run dev
```

After `npm install`, Husky sets up pre-commit hooks automatically. Running `npm run dev` starts the Vite dev server.

## npm commands

| Command           | What it does                         |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the Vite development server    |
| `npm run build`   | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint on all JS files in `js/`  |
| `npm run format`  | Run Prettier on all files            |
| `npm test`        | Run Vitest tests                     |

## Project structure

```
.eslintrc.json          ESLint configuration
.prettierrc             Prettier configuration
.husky/pre-commit       Pre-commit hook (lint-staged)
.github/workflows/      GitHub Actions CI workflow
js/                     Your JavaScript files go here
docs/tutorials/         Guides on linting, Husky, and GitHub Actions
docs/reference/         ESLint rules, Prettier options, Vite/Vitest basics
docs/a-good-agents-md.md   How to write an effective AGENTS.md
docs/error-log.md       Track errors and fixes during development
vite.config.js          Vite configuration
```

## Documentation

- [docs/tutorials/why-linting.md](docs/tutorials/why-linting.md) — what linting is and why it matters
- [docs/tutorials/how-husky-works.md](docs/tutorials/how-husky-works.md) — how pre-commit hooks work
- [docs/tutorials/github-actions-101.md](docs/tutorials/github-actions-101.md) — understanding CI with GitHub Actions
- [docs/reference/eslint-rules.md](docs/reference/eslint-rules.md) — every ESLint rule in this project explained
- [docs/reference/prettier-options.md](docs/reference/prettier-options.md) — formatting options reference
- [docs/reference/vite-vitest-basics.md](docs/reference/vite-vitest-basics.md) — what Vite and Vitest do
- [docs/a-good-agents-md.md](docs/a-good-agents-md.md) — what makes an effective AGENTS.md

## Contributing

Contributions are welcome. Open an issue or submit a pull request.

## License

MIT License - Cynthia Teeters
