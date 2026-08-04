#!/usr/bin/env node

import { Command } from "commander";
import fs from "fs";
import path from "path";
import { prettierIgnoreContent, prettierrcContent, settingsContent } from "./constants";

const program = new Command();

program.name("sudhucodes").description("CLI to setup workspace").version("0.0.3");

program
    .command("init")
    .description("Initialize VSCode config and prettier in the workspace")
    .option("-f, --force", "Force overwrite existing files")
    .action((options) => {
        const isForce = options.force;
        const targetDir = process.cwd();
        const vscodeDir = path.join(targetDir, ".vscode");
        const settingsPath = path.join(vscodeDir, "settings.json");
        const prettierIgnorePath = path.join(targetDir, ".prettierignore");
        const prettierrcPath = path.join(targetDir, ".prettierrc");

        console.log("Initializing configurations...");

        // Create .vscode dir
        if (!fs.existsSync(vscodeDir)) {
            fs.mkdirSync(vscodeDir, { recursive: true });
            console.log("✅ Created .vscode directory");
        }

        // Write settings.json
        if (!fs.existsSync(settingsPath) || isForce) {
            fs.writeFileSync(settingsPath, JSON.stringify(settingsContent, null, 4));
            console.log(
                `✅ ${isForce && fs.existsSync(settingsPath) ? "Overwrote" : "Created"} .vscode/settings.json`,
            );
        } else {
            console.log(
                "⚠️ Skipped .vscode/settings.json (already exists). Use --force or -f to overwrite.",
            );
        }

        // Write .prettierrc
        if (!fs.existsSync(prettierrcPath) || isForce) {
            fs.writeFileSync(prettierrcPath, JSON.stringify(prettierrcContent, null, 4));
            console.log(
                `✅ ${isForce && fs.existsSync(prettierrcPath) ? "Overwrote" : "Created"} .prettierrc`,
            );
        } else {
            console.log("⚠️ Skipped .prettierrc (already exists). Use --force or -f to overwrite.");
        }

        // Write .prettierignore
        if (!fs.existsSync(prettierIgnorePath) || isForce) {
            fs.writeFileSync(prettierIgnorePath, prettierIgnoreContent);
            console.log(
                `✅ ${isForce && fs.existsSync(prettierIgnorePath) ? "Overwrote" : "Created"} .prettierignore`,
            );
        } else {
            console.log(
                "⚠️ Skipped .prettierignore (already exists). Use --force or -f to overwrite.",
            );
        }

        console.log("📦 Please install prettier as devDependency...");
        console.log("🎉 Done!");
    });

program.parse();
