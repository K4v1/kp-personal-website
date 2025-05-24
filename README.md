# kp-personal-website

This site uses a minimal Next.js setup styled with Tailwind CSS.
It follows the design tokens in `DESIGN_GUIDE.md`.

## Development

```bash
npm install
npm run dev
```

Blog posts live in the `blog/` folder as markdown files.

## Build

Generate the static site for deployment:

```bash
npm run build
```

The static files are written to the `out/` directory.

## Deploy

Push the contents of `out/` to the `gh-pages` branch with:

```bash
npm run deploy
```

GitHub Pages should be configured to serve from that branch.
Running this command builds the site and publishes the contents of `out/`
to the `gh-pages` branch so your site updates right away. The repository also
includes a GitHub Actions workflow that runs `npm run deploy` automatically
whenever changes are pushed to `main`.

