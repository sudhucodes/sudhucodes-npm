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
