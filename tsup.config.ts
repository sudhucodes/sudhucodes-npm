import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/index.ts"],
    format: ["cjs", "esm"],
    minify: true,
    minifySyntax: true,
    minifyWhitespace: true,
    clean: true,
});
