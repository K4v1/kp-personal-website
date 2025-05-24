# Repo Guidelines for CodeGen Agents

This repository contains a personal website built with Next.js and TypeScript. Follow these rules when making automated contributions:

## Code Style
- Use 2 spaces for indentation.
- Keep the codebase minimal and avoid adding unnecessary dependencies.
- React components should be written as functional components using TypeScript.
- Follow the design tokens and approach described in `DESIGN_GUIDE.md`.

## Content
- Blog posts live in the `blog/` directory as Markdown files with `title` and `date` front matter.
- Do **not** modify files inside the `out/` folder; that directory is generated at build time.

## Build Checks
- After modifying code, run `npm install` if dependencies change, then run `npm run build` to ensure the site compiles.
- There are no automated tests, so the build command serves as the required programmatic check.

## Pull Request Notes
- Summarize the changes made and confirm `npm run build` succeeded in the PR description.
- Mention any limitations or TODOs in a separate **Notes** section before the summary.
