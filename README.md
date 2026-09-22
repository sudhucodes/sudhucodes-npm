# sudhucodes

CLI utility to quickly scaffold opinionated VS Code workspace settings, Prettier configurations, and AI coding guidelines.

## Quick Start

Run directly via `npx`, `pnpm dlx`, or `bunx`:

```bash
npx sudhucodes init
```

Or install globally:

```bash
npm install -g sudhucodes
```

---

## Commands

### `init`

Initializes `.vscode/settings.json`, `.prettierrc`, and `.prettierignore` in the current workspace.

```bash
# Standard setup
sudhucodes init

# Include Next.js App Router tab labels in VS Code
sudhucodes init --nextjs

# Force overwrite existing files
sudhucodes init --force
```

#### Options

| Option     | Alias | Description                                                                           |
| :--------- | :---- | :------------------------------------------------------------------------------------ |
| `--nextjs` | `-n`  | Adds custom editor tab labels for Next.js App Router (`page.tsx`, `layout.tsx`, etc.) |
| `--force`  | `-f`  | Overwrite existing files if they already exist                                        |

---

### `skill add <name>`

Adds guideline and rule files directly into the workspace root.

```bash
# Add AI behavioral guidelines (CLAUDE.md)
sudhucodes skill add claude

# Add UI & Tailwind development rules (DESIGN.md)
sudhucodes skill add design

# Add all guidelines
sudhucodes skill add all

# Force overwrite existing files
sudhucodes skill add all --force
```

#### Available Skills

- **`claude`**: Generates `CLAUDE.md` with guidelines focused on simplicity, surgical edits, and goal-driven execution.
- **`design`**: Generates `DESIGN.md` with rules for Tailwind CSS utilities, light theme defaults, and clean UI conventions.
- **`all`**: Generates both `CLAUDE.md` and `DESIGN.md`.

---

## Configurations Provided

### VS Code (`.vscode/settings.json`)

- Prettier set as default formatter
- Format on save & organize imports on save enabled
- Smooth scrolling and smooth caret animations enabled
- Compact folder tree disabled

### Next.js Tab Labels (`--nextjs`)

Differentiates identical filenames in the Next.js App Router by showing parent folder context in editor tabs (e.g. `dashboard/settings - page.tsx`).

### Prettier (`.prettierrc` & `.prettierignore`)

- `printWidth: 100`
- `tabWidth: 4`
- Standard ignore rules (`node_modules`, `dist`, `build`, `.next`)

---

## License

ISC
