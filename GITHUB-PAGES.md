# Publish Bellevue Live! Pass with GitHub Pages

This package contains the interactive concept demonstration and a GitHub Actions deployment workflow. All bookings, payments, rewards and AI responses remain demonstrations. No API keys or payment credentials are required.

## 1. Create the repository

Sign into GitHub as **printrune** and open <https://github.com/new>.

- Owner: `printrune`
- Repository name: `bellevue-live-pass`
- Visibility: **Public** for GitHub Free. GitHub Pro and other eligible paid plans can use a private repository.
- Add a README so the new repository has a `main` branch.

GitHub Pages publishes the website for visitors. Public repository visibility also makes its uploaded source files available to everyone. Upload only this prepared package; original confidential planning PDFs are not included.

## 2. Select GitHub Actions

In the repository, open **Settings → Pages**. Under **Build and deployment**, set **Source** to **GitHub Actions**. You do not need to choose a starter workflow because one is included.

## 3. Upload the extracted package

Extract `bellevue-live-pass-github-pages.zip` on your computer. In GitHub, open **Code → Add file → Upload files** and drag in the extracted files and folders, including `.github`.

Upload the contents, not the ZIP or an enclosing folder. `package.json`, `index.html`, `src`, `public`, `scripts`, `pnpm-lock.yaml`, `pnpm-workspace.yaml`, and `.github` must be at the repository root. Commit to `main` with a message such as “Add Bellevue Live Pass”. The package's README can replace the initial README.

After uploading, confirm `.github/workflows/deploy.yml` is visible in GitHub. If the browser skipped the dot folder, use **Add file → Create new file**, type `.github/workflows/deploy.yml`, paste the contents of the included workflow, and commit.

## 4. Wait for deployment

Open **Actions → Deploy Bellevue Live Pass** and wait for both `build` and `deploy` to pass. The workflow installs the locked dependencies, runs the business-logic tests, builds the app with the base path supplied by GitHub, and publishes `dist`.

The expected address for this account and repository name is:

<https://printrune.github.io/bellevue-live-pass/>

The simulator will be at:

<https://printrune.github.io/bellevue-live-pass/#simulator>

These are expected addresses, not confirmation that deployment has happened. The authoritative live address appears in **Settings → Pages → Visit site** and in the successful deployment job.

If the first workflow ran before Pages was configured, finish step 2, then use **Actions → Deploy Bellevue Live Pass → Run workflow** on `main`.

## 5. Future updates

Commit updated source files to `main`; the workflow rebuilds and publishes. Browser-local plans remain on each visitor's browser. Moving from the existing private demo to GitHub Pages does not transfer local browser data between the two domains.

The workflow reads the repository path from GitHub, so it also supports a different repository name or a properly configured custom domain. Always retain `pnpm-lock.yaml` and `pnpm-workspace.yaml`.

## Local verification

With Node 24 and pnpm 11.25.0 installed:

```powershell
pnpm install --frozen-lockfile
pnpm test
$env:BASE_PATH='/bellevue-live-pass'
pnpm build
pnpm preview
```

Open the URL printed by Vite, including `/bellevue-live-pass/`. For a root-domain build, clear `BASE_PATH` before building. The installation manifest, embedded simulator, images, documents, and service worker all use the configured base path. Service worker caches are isolated by deployment path.

## References

- [Create a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [GitHub Pages custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
- [Vite deployment](https://vite.dev/guide/static-deploy.html#github-pages)
- [GitHub Pages usage limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits): the current package is a concept demonstration; an operational commercial ticketing service needs hosting suited to real transactions.
