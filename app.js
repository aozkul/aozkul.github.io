/* Vanilla JS. No API keys, network requests, tracking or build step. */
(() => {
  'use strict';
  const data = window.PORTFOLIO_DATA;
  if (!data || !data.translations || !Array.isArray(data.projects)) return;
  const root = document.documentElement;
  let language = data.defaultLanguage === 'en' ? 'en' : 'tr';
  let activeFilter = 'all';
  try {
    const saved = localStorage.getItem('ao-language');
    if (saved === 'tr' || saved === 'en') language = saved;
  } catch (_) { /* Preferences are optional, including in file:// previews. */ }
  const translate = key => data.translations[language][key] || data.translations.tr[key] || key;
  const store = (key, value) => { try { localStorage.setItem(key, value); } catch (_) {} };
  const safeUrl = (value, allowRelative = false) => {
    if (typeof value !== 'string' || !value.trim()) return null;
    const raw = value.trim();
    if (allowRelative && !/^[a-z][a-z\d+.-]*:/i.test(raw) && !raw.startsWith('//') && !raw.startsWith('\\')) return raw;
    try { const url = new URL(raw); return url.protocol === 'https:' ? url.href : null; } catch (_) { return null; }
  };
  const svg = (external = false) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    element.setAttribute('viewBox', '0 0 24 24'); element.setAttribute('fill', 'none');
    element.setAttribute('stroke', 'currentColor'); element.setAttribute('stroke-width', '1.65');
    element.setAttribute('aria-hidden', 'true');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', external ? 'M6 18 18 6M6 6h12v12' : 'M5 12h14M13 6l6 6-6 6');
    element.append(path); return element;
  };
  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };
  function renderProjects() {
    const grid = document.getElementById('project-grid');
    const fragment = document.createDocumentFragment();
    const allowedTones = new Set(['sage', 'lavender', 'peach', 'blue', 'yellow', 'rose']);
    let visible = 0;
    data.projects.forEach((project, index) => {
      const url = safeUrl(project.url);
      if (!url || typeof project.name !== 'string') return;
      const article = el('article', 'project-card');
      article.dataset.language = project.language || 'other';
      article.hidden = activeFilter !== 'all' && project.language !== activeFilter;
      if (!article.hidden) visible++;
      const link = el('a', 'project-link');
      link.href = url; link.target = '_blank'; link.rel = 'noopener noreferrer';
      link.setAttribute('aria-label', `${project.name} — GitHub`);
      const art = el('div', `project-art ${allowedTones.has(project.tone) ? project.tone : 'sage'}`);
      art.setAttribute('aria-hidden', 'true');
      art.append(el('span', 'art-grid'), el('span', 'art-caption', `AO / ${String(index + 1).padStart(2, '0')}`), el('span', 'project-mark', project.mark || project.name.slice(0, 2)), el('span', 'art-orbit'));
      const artArrow = el('span', 'art-arrow'); artArrow.append(svg(true)); art.append(artArrow);
      const info = el('div', 'project-info');
      const meta = el('div', 'project-meta');
      meta.append(el('span', '', translate('projects.repository')));
      const lang = el('span', 'language');
      if (project.language) {
        lang.append(el('i', `dot ${project.language === 'TypeScript' ? 'ts' : 'html'}`), document.createTextNode(String(project.language)));
      } else { lang.textContent = 'GitHub'; }
      meta.append(lang);
      const bottom = el('div', 'project-bottom');
      bottom.append(el('span', '', translate('projects.link')), svg());
      info.append(meta, el('h3', '', project.name), bottom); link.append(art, info); article.append(link); fragment.append(article);
    });
    grid.replaceChildren(fragment);
    document.getElementById('project-empty').hidden = visible !== 0;
    document.getElementById('project-count').textContent = translate('projects.count').replace('{count}', String(visible));
  }
  function renderOptionalLinks() {
    const box = document.getElementById('optional-links'); box.replaceChildren();
    const add = (href, label, external = true) => {
      if (!href) return;
      const a = el('a', '', translate(label)); a.href = href;
      if (external) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
      box.append(a);
    };
    const email = data.profile.email;
    if (typeof email === 'string' && /^[^\s@?&#]+@[^\s@?&#]+\.[^\s@?&#]+$/.test(email)) add('mailto:' + email, 'contact.email', false);
    add(safeUrl(data.profile.linkedin), 'contact.linkedin');
    add(safeUrl(data.profile.resumeUrl, true), 'contact.resume');
    box.hidden = box.children.length === 0;
  }
  function updateThemeLabel() {
    const button = document.getElementById('theme-toggle');
    button.setAttribute('aria-label', translate(root.dataset.theme === 'dark' ? 'theme.light' : 'theme.dark'));
    document.querySelector('meta[name="theme-color"]').content = root.dataset.theme === 'dark' ? '#151a17' : '#f5f4f0';
  }
  function setMenu(open) {
    const button = document.getElementById('menu-toggle');
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', translate(open ? 'menu.close' : 'menu.open'));
    document.getElementById('main-nav').classList.toggle('is-open', open);
  }
  function applyLanguage() {
    root.lang = language;
    document.querySelectorAll('[data-i18n]').forEach(node => { node.textContent = translate(node.dataset.i18n); });
    document.querySelectorAll('[data-lang]').forEach(button => { button.setAttribute('aria-pressed', String(button.dataset.lang === language)); });
    document.title = translate('meta.title');
    document.querySelector('meta[name="description"]').content = translate('meta.description');
    document.querySelector('meta[property="og:title"]').content = translate('meta.title');
    document.querySelector('meta[property="og:description"]').content = translate('meta.description');
    document.querySelector('meta[property="og:locale"]').content = language === 'tr' ? 'tr_TR' : 'en_US';
    document.getElementById('main-nav').setAttribute('aria-label', language === 'tr' ? 'Ana menü' : 'Main navigation');
    document.querySelector('.filters').setAttribute('aria-label', translate('projects.filter.label'));
    setMenu(false); updateThemeLabel(); renderProjects(); renderOptionalLinks();
  }
  document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => {
    language = button.dataset.lang; store('ao-language', language); applyLanguage();
  }));
  document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    renderProjects();
  }));
  document.getElementById('theme-toggle').addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    store('ao-theme', root.dataset.theme); updateThemeLabel();
  });
  document.getElementById('menu-toggle').addEventListener('click', () => {
    setMenu(document.getElementById('menu-toggle').getAttribute('aria-expanded') !== 'true');
  });
  document.querySelectorAll('#main-nav a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && document.getElementById('menu-toggle').getAttribute('aria-expanded') === 'true') {
      setMenu(false); document.getElementById('menu-toggle').focus();
    }
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.site-header')) setMenu(false);
  });
  window.matchMedia('(min-width: 651px)').addEventListener('change', event => { if (event.matches) setMenu(false); });
  document.getElementById('year').textContent = new Date().getFullYear();
  applyLanguage();
})();
