# Kernora project pages

Public marketing, support and privacy pages in Turkish, English and German. Hosted within the portfolio at `https://aozkul.github.io/kernora/` because the CRM source repository is private. This folder contains only public copy and the original brand assets; never copy CRM source, environment settings, databases, uploads or credentials here.

Run `node pages/build.mjs` and `node pages/check.mjs` at the portfolio root. Content lives in `pages/kernora/content.json`; the builder emits only `pages/public/kernora/`. No dependencies or backend are required. The page privacy notice is scoped to the showcase, not separate CRM deployments.

The portfolio card uses `catalogOnly: true` to survive public-repository refreshes without querying the private repository. No repository links are rendered.
