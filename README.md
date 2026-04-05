# [HAP's Robot ID Card App — Events Demo](https://hap-7000-events.netlify.app/)

Companion demo for [HAP's Learning Lab: The Living Page](https://hap-events.netlify.app). This vanilla JS app shows the final state of what HAP builds across all six stations — a fully interactive Robot ID Card app.

## What it demonstrates

- **addEventListener + callbacks** — all interactivity uses `addEventListener` with named functions
- **Event object** — every handler logs `event.type`, `event.target`, and `event.currentTarget`
- **View switching + forms + preventDefault** — classList toggles views, form submit prevents reload
- **Bubbling + delegation** — one listener on `#card-container` handles all card clicks, including dynamically added cards
- **Safe DOM construction** — `createElement` + `textContent` throughout, no `innerHTML`

## Beginner's guide

This project uses the same professional tooling harness as HAP's other demos:

- **Vite** — fast dev server with hot reload and production builds
- **ESLint** — catches bugs and enforces consistent code style
- **Prettier** — auto-formats your code
- **Husky + lint-staged** — runs linting and formatting before each commit
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

```text
.eslintrc.json          ESLint configuration
.prettierrc             Prettier configuration
.husky/pre-commit       Pre-commit hook (lint-staged)
.github/workflows/      GitHub Actions CI workflow
js/main.js              Event-driven SPA logic
css/style.css           Styles with CSS custom properties (hsl)
docs/tutorials/         Guides on linting, Husky, and GitHub Actions
docs/reference/         Event patterns, ESLint rules, Prettier options
docs/error-log.md       Track errors and fixes during development
vite.config.js          Vite configuration
```

## Documentation

- [docs/reference/event-patterns.md](docs/reference/event-patterns.md) — event patterns demonstrated in this app
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

MIT License 2026 - Cynthia Teeters
