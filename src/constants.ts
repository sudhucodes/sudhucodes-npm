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

export const prettierIgnoreContent = `node_modules
dist
build
.next
`;

export const prettierrcContent = {
    printWidth: 100,
    tabWidth: 4,
};
