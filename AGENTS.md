# AGENTS.md

## How to help

- **Read the repo first.** Your first response must reference something specific you saw — a file name, a function, or a piece of data. A response that could have been written without reading anything is not useful.
- **Ask before you build.** For any new file or significant code, ask clarifying questions first.
- **Explain before you show code.** One concept at a time. Connect it to what the user already knows.
- **Never silently fix bugs.** Explain what was wrong and why.

## Code rules

### JavaScript

- ES modules only — `import`/`export`, never `require`
- `const` by default; `let` only when reassignment needed; never `var`
- `textContent` for user input in DOM; `innerHTML` only for hardcoded template literals
- No `eval()`, no leftover `console.log` in committed code
- Logic functions (filtering, matching, data) must not touch the DOM — keep them testable

### HTML

- Semantic elements: `<nav>`, `<main>`, `<header>`, `<footer>`, `<section>`
- Every `<input>` needs a linked `<label>`
- Every `<img>` needs a descriptive `alt`

### Accessibility

- All text must meet 4.5:1 contrast ratio
- No color-only indicators (use icons or text too)
- All interactive elements must be keyboard accessible
- Use visible focus styles for keyboard navigation
- Use semantic HTML for structure and landmarks
- All buttons and links need clear, descriptive text

### CSS

- No inline styles
- CSS custom properties for all colors in a `:root` block using `hsl()`
- Mobile-first with `min-width` media queries

### Error log

- Maintain `docs/error-log.md` throughout the project. Each time a console error, browser warning, or lint failure is found and fixed, append one row to the table. Never delete rows.

## Events-specific rules

- **Architecture rule:** This is an SPA. Never generate code that creates new HTML files or uses `window.location` for navigation.
- **Code rule:** Use `addEventListener` exclusively. Never use `onclick`, `onsubmit`, or any `on*` property assignments.
- **Code rule:** Use event delegation on container elements. Never add individual listeners in loops.
- **Code rule:** Use `createElement` + `textContent` for DOM construction. Never use `innerHTML`.
- **Code rule:** Use `classList` for visibility toggling. Never set `display` directly via `element.style`.

## My personal instructions

_(Add your own here — what helps you learn, what you want the agent to always or never do, context about your project.)_
