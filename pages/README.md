# Portfolio Pages

Run `node pages/build.mjs` then `node pages/check.mjs`. GitHub Actions deploys only `pages/public`. Content lives in `portfolio-content.js`; styling in `site-premium.css`. Eight product sites, search, TR/EN and light/dark preferences are available. The sticky section navigation links to the featured Demo, Projects, Expertise, About, Experience, Impact, Skills and Contact. A responsive disclosure panel includes active-section feedback, keyboard focus management and Escape dismissal. Repository links and technology filters are intentionally absent. App icons are local assets.

The professional profile is aligned with the owner-supplied Germany CV (September 2026). Impact includes two independently designed Bosch/Bursa projects (~€750K and ~€350K annual savings) and three additional professional projects. There is no €200K claim in the current CV. Technical skills are organised into six groups and the four selected training entries are labelled as training. Keep TR/EN data in `portfolio-content.js` and the Turkish static fallback in `index.html` aligned.

The Experience timeline includes all six CV roles with original dates, location, focus, role-specific responsibilities and technology tags. Current-role and project-contract badges are translated. Keep these data and the static Turkish fallback aligned.

Kernora’s public TR/EN/DE overview, support and privacy pages are built from `pages/kernora/` into `/kernora/`. The CRM source repository stays private; the curated public portfolio entry survives repository-list refreshes.

## Signal / 01 — independent industrial example

Pinned above the portfolio hero. The first navigation item opens `#industrial-demo`. This is a browser simulation, not a deployed industrial system. All code and seeded machine events were created specifically for this public demonstration; no employer code, internal architecture or actual production records were used. No demo data is fetched or transmitted. The portfolio’s existing public GitHub catalogue fetch is unrelated.

- `industrial-model.mjs`: three synthetic machines, one telemetry event per machine per simulated second; one completed cycle every four seconds per machine. Temperature/vibration values and cycle outcomes use a seeded generator.
- Edge: FIFO, 180 events, drop newest on overflow with a visible cumulative loss counter. A disconnected link retains events in memory. No persistence is implied.
- Broker model: 48-event queue, accepts up to 12 events per tick. Acceptance acknowledges removal from the edge queue; a full broker applies backpressure.
- API projection: consumes up to 6 queued events per tick, also while the edge link is offline. Ordered per-machine sequence high-water marks suppress duplicate delivery. This simplified policy assumes FIFO delivery, not arbitrary reordered events.
- KPIs: good parts; good/completed quality rate; mean completed-cycle duration; pending events across both queues. Empty denominators display a dash. Temperature uses each machine’s most recent delivered sample. Staleness is simulated time minus the last delivered sample time. No OEE or production-performance claim.
- Controls: disconnect/reconnect, pause/resume, deterministic reset. Off-screen and hidden tabs suspend simulation time. Reduced-motion users start paused. Reload discards all state. The expandable local JSON view displays the calculated projection and latest event.
- `industrial-demo.mjs` and `.css`: TR/EN, dark/light, responsive layout; no external library.

Run `node --test pages/industrial-model.test.mjs`, `node pages/build.mjs`, and `node pages/check.mjs`. Tests cover deterministic reset, outage/recovery parity, overflow/accounting, backpressure, deduplication, KPI formulas and bounded long runs. The Pages workflow runs these checks and deploys only the explicit asset allowlist in `pages/public`. No broker or API credentials are required or present. A real MQTT/Kafka/HTTP deployment is outside this demonstration’s scope.
