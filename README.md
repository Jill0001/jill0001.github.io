# Mengzhao Jia — Personal Website

A clean, static personal website for Mengzhao Jia, focused on multimodal reasoning, vision-language models, selected work, experience, and education.

The site uses Next.js 16, React 19, TypeScript, and Tailwind CSS. It is configured as a static export for GitHub Pages at [jill0001.github.io](https://jill0001.github.io/).

## Run locally

```bash
nvm use
npm ci
npm run dev
```

Open `http://localhost:3000` in a browser. The project targets Node.js 24 (see `.nvmrc`); Node.js 22 also builds successfully in this local environment.

## Verify a production build

```bash
npm run check
```

This runs linting, type checking, and `next build`. The static deployable files are written to `out/`.

## Update the site

- Page copy, publications, projects, experience, and education: `src/app/page.tsx`
- SEO metadata: `src/app/layout.tsx`
- Global styles: `src/app/globals.css`
- CV download: `public/Mengzhao_Jia_CV.pdf`
- Profile illustration: `public/mengzhao-jia.jpg`

## Deploy to GitHub Pages

The included workflow at `.github/workflows/deploy.yml` publishes the static `out/` directory when `main` is pushed.

1. Create a public GitHub repository named `Jill0001.github.io` under the `Jill0001` account.
2. Push this project’s `main` branch to that repository.
3. In the repository’s **Settings → Pages**, set the publishing source to **GitHub Actions**.
4. Wait for the “Deploy website to GitHub Pages” workflow to finish, then visit `https://jill0001.github.io/`.

For a user site, the workflow automatically exports from the site root. It also supports GitHub’s configured base path if this project is ever moved to a project site.

## Attribution

This project started from the [AI Website Cloner Template](https://github.com/JCodesMore/ai-website-cloner-template), released under the MIT License. The page implementation and content have been rewritten for this personal website.
