#!/usr/bin/env node

import { Command } from "commander";
import fs from "fs";
import path from "path";
import {
    claudeMdContent,
    designMdContent,
    nextjsSettingsContent,
    prettierIgnoreContent,
    prettierrcContent,
    settingsContent,
} from "./constants";

const program = new Command();

program.name("sudhucodes").description("CLI to setup workspace").version("0.0.3");

program
    .command("init")
    .description("Initialize VSCode config and prettier in the workspace")
    .option("-f, --force", "Force overwrite existing files")
    .option("-n, --nextjs", "Include Next.js custom editor labels in VS Code settings")
    .action((options) => {
        const isForce = options.force;
        const isNextjs = options.nextjs;
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

        // Prepare settings content
        const finalSettings = {
            ...settingsContent,
            ...(isNextjs ? nextjsSettingsContent : {}),
        };

        // Write settings.json
        if (!fs.existsSync(settingsPath) || isForce) {
            fs.writeFileSync(settingsPath, JSON.stringify(finalSettings, null, 4));
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

const skill = program.command("skill").description("Manage and add skill/rule files");

skill
    .command("add [name]")
    .description("Add skill/rule files to workspace (claude, design, all)")
    .option("-f, --force", "Force overwrite existing files")
    .action((name, options) => {
        const isForce = options.force;
        const targetDir = process.cwd();

        const skills: Record<string, { filename: string; content: string }> = {
            claude: { filename: "CLAUDE.md", content: claudeMdContent },
            design: { filename: "DESIGN.md", content: designMdContent },
        };

        if (!name) {
            console.log(
                `❌ Please specify a skill to add: ${Object.keys(skills).join(", ")}, all\nExample: sudhucodes skill add claude`,
            );
            return;
        }

        const skillKey = name.toLowerCase();

        const toAdd =
            skillKey === "all"
                ? Object.values(skills)
                : skills[skillKey]
                  ? [skills[skillKey]]
                  : null;

        if (!toAdd) {
            console.log(
                `❌ Unknown skill "${name}". Available skills: ${Object.keys(skills).join(", ")}, all`,
            );
            return;
        }

        for (const item of toAdd) {
            const filePath = path.join(targetDir, item.filename);
            if (!fs.existsSync(filePath) || isForce) {
                fs.writeFileSync(filePath, item.content);
                console.log(
                    `✅ ${isForce && fs.existsSync(filePath) ? "Overwrote" : "Created"} ${item.filename}`,
                );
            } else {
                console.log(
                    `⚠️ Skipped ${item.filename} (already exists). Use --force or -f to overwrite.`,
                );
            }
        }

        console.log("🎉 Done!");
    });

program.parse();
