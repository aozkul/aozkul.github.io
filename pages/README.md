# Portfolio Pages

Run `node pages/build.mjs` then `node pages/check.mjs`. GitHub Actions deploys only `pages/public`. Content lives in `portfolio-content.js`; styling in `site-premium.css`. Eight product sites, search, TR/EN and light/dark preferences are available. The sticky section navigation links to Home, Projects, Expertise, About, Experience, Impact, Skills and Contact. A responsive disclosure panel includes active-section feedback, keyboard focus management and Escape dismissal. Repository links and technology filters are intentionally absent. App icons are local assets.

The professional profile is aligned with the owner-supplied Germany CV (September 2026). Impact includes two independently designed Bosch/Bursa projects (~€750K and ~€350K annual savings) and three additional professional projects. There is no €200K claim in the current CV. Technical skills are organised into six groups and the four selected training entries are labelled as training. Keep TR/EN data in `portfolio-content.js` and the Turkish static fallback in `index.html` aligned.

The Experience timeline includes all six CV roles with original dates, location, focus, role-specific responsibilities and technology tags. Current-role and project-contract badges are translated. Keep these data and the static Turkish fallback aligned.

Kernora’s public TR/EN/DE overview, support and privacy pages are built from `pages/kernora/` into `/kernora/`. The CRM source repository stays private; the curated public portfolio entry survives repository-list refreshes.
