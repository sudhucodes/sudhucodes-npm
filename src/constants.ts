export const settingsContent = {
    "typescript.format.enable": true,
    "javascript.format.enable": true,
    "explorer.compactFolders": false,
    "editor.smoothScrolling": true,
    "editor.cursorSmoothCaretAnimation": "on",
    "workbench.list.smoothScrolling": true,
    "terminal.integrated.smoothScrolling": true,
    "editor.cursorBlinking": "smooth",
    "editor.detectIndentation": false,
    "css.lint.unknownAtRules": "ignore",
    "editor.codeActionsOnSave": {
        "source.organizeImports": "always",
    },
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
};

export const nextjsSettingsContent = {
    "workbench.editor.customLabels.patterns": {
        "**/app/**/page.tsx": "${dirname(1)}/${dirname} - page.tsx",
        "**/app/**/layout.tsx": "${dirname(1)}/${dirname} - layout.tsx",
        "**/app/**/loading.tsx": "${dirname(1)}/${dirname} - loading.tsx",
        "**/app/**/error.tsx": "${dirname(1)}/${dirname} - error.tsx",
        "**/app/**/not-found.tsx": "${dirname(1)}/${dirname} - not-found.tsx",
        "**/app/**/template.tsx": "${dirname(1)}/${dirname} - template.tsx",
        "**/app/**/default.tsx": "${dirname(1)}/${dirname} - default.tsx",
        "**/app/**/route.ts": "${dirname(1)}/${dirname} - route.ts",
    },
};

export const prettierIgnoreContent = `node_modules
dist
build
.next
`;

export const prettierrcContent = {
    printWidth: 100,
    tabWidth: 4,
};

export const claudeMdContent = `# CLAUDE.md

Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:

- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:

- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:

- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:

- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make them pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:

\`\`\`
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
\`\`\`

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.
`;

export const designMdContent = `# UI Development Rules

1. **Light theme only.**
   The entire website uses a light theme. Do not implement or account for a dark theme.

2. **Prefer Tailwind's default utility classes.**
   Avoid arbitrary values such as \`text-[13px]\`, \`p-[10px]\`, \`h-[14px]\`, or \`w-[14px]\` unless absolutely necessary. Prefer Tailwind's utility classes and Tailwind v4's numeric utilities.
    - Prefer \`p-2\`, \`p-3\`, \`text-sm\`, etc. over arbitrary pixel values.
    - For equal width and height, **always prefer \`size-*\`** over separate \`h-* w-*\` classes.
    - Examples:
        - \`h-4 w-4\` → \`size-4\`
        - \`h-5 w-5\` → \`size-5\`
        - \`h-[14px] w-[14px]\` → \`size-3.5\`
        - \`h-[18px] w-[18px]\` → \`size-4.5\`

    - Tailwind v4 supports numeric utility values beyond the traditional scale. Use them when appropriate:
        - \`h-200\`
        - \`h-400\`
        - \`w-300\`
        - \`size-500\`

    - Treat these numeric values as **4px increments** where applicable:
        - \`h-100\` → \`400px\`
        - \`h-200\` → \`800px\`
        - \`size-400\` → \`1600px\`

    - Use fractional numeric values when needed, such as \`size-4.5\`, rather than falling back to arbitrary values like \`size-[18px]\`.
    - Prefer \`h-*\`, \`w-*\`, \`size-*\`, \`p-*\`, \`m-*\`, \`gap-*\`, etc. with numeric values before using bracket notation.

3. **Don't repeat base body styles.**
   The \`<body>\` already has the classes in \`app/globals.css\` or \`src/index.css\`. Do not add these classes again unless you intentionally need to override them.

4. **Use the default border color.**
   The project's default border color is \`border-zinc-200\`. When adding a border, simply use \`border\` instead of \`border border-zinc-200\`, unless a different border color is specifically required.

5. **Don't use shadows unless required.**
   Prefer borders, spacing, contrast, and surface separation instead of shadows. Only use \`shadow-*\` when a shadow is genuinely necessary for the UI hierarchy or interaction.
`;
