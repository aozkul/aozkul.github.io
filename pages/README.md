# Portfolio Pages

Run `node pages/build.mjs` then `node pages/check.mjs`. GitHub Actions deploys only `pages/public`. Content lives in `portfolio-content.js`; styling in `site-premium.css`. Eight product sites, search, TR/EN and light/dark preferences are available. The sticky section navigation links to Home, Projects, Expertise, About, Experience, Impact, Skills and Contact. A responsive disclosure panel includes active-section feedback, keyboard focus management and Escape dismissal. Repository links and technology filters are intentionally absent. App icons are local assets.

The Impact section expands six CV-backed projects into contribution, business outcome and technology cards, followed by four delivery practices. The approximate €750K figure is annual; €350K and €200K have no stated period. Keep TR/EN data in `portfolio-content.js` and the Turkish static fallback in `index.html` aligned.

The Experience timeline includes all six CV roles with original dates, location, focus, role-specific responsibilities and technology tags. Current-role and project-contract badges are translated. Keep these data and the static Turkish fallback aligned.

Kernora’s public TR/EN/DE overview, support and privacy pages are built from `pages/kernora/` into `/kernora/`. The CRM source repository stays private; the curated public portfolio entry survives repository-list refreshes.
