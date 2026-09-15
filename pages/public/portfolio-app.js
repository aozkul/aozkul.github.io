/* Public portfolio. No credentials, tracking or private-repository requests.
   Repository pagination, Pages links and optional public icon discovery. */
(() => {
  'use strict';
  const d = window.PORTFOLIO_DATA;
  if (!d || !d.translations || !Array.isArray(d.projects)) return;
  const root = document.documentElement;
  let lang = d.defaultLanguage === 'en' ? 'en' : 'tr';
  let query = '', status = 'saved', projects = d.projects.filter(p=>p.name?.toLowerCase()!=='aozkul.github.io');
  try { const saved = localStorage.getItem('ao-language'); if (['tr','en'].includes(saved)) lang = saved; } catch (_) {}
  const t = key => d.translations[lang][key] || d.translations.tr[key] || key;
  const local = value => typeof value === 'string' ? value : value?.[lang] || '';
  const store = (key,value) => { try { localStorage.setItem(key,value); } catch (_) {} };
  const fold = value => String(value || '').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  const url = (value,relative=false) => {
    if (typeof value !== 'string' || !value.trim()) return null;
    const raw = value.trim();
    if (relative && /^[a-zA-Z0-9][a-zA-Z0-9_./-]*$/.test(raw) && !raw.includes('..')) return raw;
    try { const u = new URL(raw); return u.protocol === 'https:' && !u.username && !u.password ? u.href : null; } catch (_) { return null; }
  };
  const projectPage = value => { const href=url(value); if(!href)return null; const host=new URL(href).hostname; return host==='github.com' || host.endsWith('.github.com') ? null : href; };
  const el = (tag,cls,text) => { const n=document.createElement(tag); if(cls)n.className=cls; if(text!==undefined)n.textContent=text; return n; };
  const link = (href,cls,text) => { const a=el('a',cls,text); a.href=href; a.target='_blank'; a.rel='noopener noreferrer'; return a; };
  const arrow = () => { const a=el('span','link-arrow','↗'); a.setAttribute('aria-hidden','true'); return a; };
  function gallery() {
    const grid=document.getElementById('project-grid'), fragment=document.createDocumentFragment();
    let count=0;
    projects.forEach((p,i)=>{
      const page=projectPage(lang==='en' ? p.pageEn || p.page : p.page); if(!page)return;
      const a=el('article','project-card');a.dataset.repository=p.name;a.dataset.language=p.language || 'other';
      a.hidden=Boolean(query && !fold([p.name,p.language,local(p.description)].join(' ')).includes(query));
      if(!a.hidden)count++;
      const target=link(page,'project-link');
      const action=t('projects.visit');target.setAttribute('aria-label',`${p.name} — ${action}`);
      const tone=['sage','lavender','peach','blue','yellow','rose'].includes(p.tone)?p.tone:'sage';
      const art=el('div','project-art '+tone);art.setAttribute('aria-hidden','true');
      art.append(el('span','art-grid'),el('span','art-caption',`AO / ${String(i+1).padStart(2,'0')}`),el('span','project-mark',p.mark || p.name.slice(0,2)),el('span','art-orbit'));
      const icon=url(p.icon,true);
      if(icon){
        const image=el('img','project-icon'+(p.logo?' logo':''));image.alt='';image.width=128;image.height=128;image.loading='lazy';image.decoding='async';image.referrerPolicy='no-referrer';
        image.addEventListener('load',()=>{if(image.naturalWidth)art.classList.add('has-icon');},{once:true});
        image.addEventListener('error',()=>{image.remove();art.classList.remove('has-icon');},{once:true});
        image.src=icon;art.append(image);
      }
      const sign=el('span','art-arrow');sign.append(arrow());art.append(sign);
      const info=el('div','project-info'),meta=el('div','project-meta');
      meta.append(el('span','',t('projects.website')),el('span','language',p.language || 'Web'));
      const bottom=el('div','project-bottom');bottom.append(el('span','',action),arrow());
      info.append(meta,el('h3','',p.name));if(local(p.description))info.append(el('p','project-description',local(p.description)));info.append(bottom);
      target.append(art,info);a.append(target);
      fragment.append(a);
    });
    grid.replaceChildren(fragment);
    document.getElementById('project-empty').hidden=count!==0;
    document.getElementById('project-count').textContent=t('projects.count').replace('{count}',String(count)).replace('{total}',String(projects.length));
    document.getElementById('project-sync').textContent=t('projects.sync.'+status);
  }
  function career() {
    const timeline=document.getElementById('career-list');
    timeline.replaceChildren(...(d.career || []).map((job,index)=>{
      const item=el('article','career-item'+(job.current?' is-current':'')),meta=el('div','career-meta'),id='career-role-'+(index+1);
      item.setAttribute('aria-labelledby',id);
      meta.append(el('p','career-date',local(job.dates)),el('p','career-location',job.city));
      if(job.current)meta.append(el('span','career-status',t('career.current')));
      if(job.contract)meta.append(el('span','career-contract',t('career.contract')));
      const body=el('div','career-body'),heading=el('h3','',job.role);heading.id=id;
      body.append(el('p','career-focus',local(job.focus)),heading,el('p','career-company',job.company),el('p','career-text',local(job.text)));
      const details=el('ul','career-details');
      for(const detail of job.details || []){const row=el('li');row.append(el('strong','',local(detail.label)),el('span','',local(detail.text)));details.append(row);}
      const tags=el('ul','career-tags');tags.setAttribute('aria-label',t('career.tags'));
      for(const tag of job.tags || [])tags.append(el('li','',tag));
      body.append(details,tags);item.append(meta,body);return item;
    }));
    const impactCard=(p,index)=>{
      const a=el('article','impact-card'+(p.value?' impact-card-metric':'')),id='impact-case-'+index;
      a.setAttribute('aria-labelledby',id);
      const category=el('p','impact-category'),number=el('span','',String(index).padStart(2,'0'));
      number.setAttribute('aria-hidden','true');category.append(number,document.createTextNode(local(p.category)));a.append(category);
      if(p.value){const metric=el('div','impact-metric');metric.append(el('p','impact-value',p.value),el('p','impact-metric-label',local(p.metric)));a.append(metric);}
      const title=el('h3','',local(p.title));title.id=id;a.append(title);
      const story=el('dl','impact-story');
      for(const key of ['contribution','outcome']){const row=el('div');row.append(el('dt','',t('impact.'+key)),el('dd','',local(p[key])));story.append(row);}
      const tags=el('ul','impact-tags');if(p.tech)tags.setAttribute('aria-label',t('impact.technologies'));
      for(const tag of p.tech || local(p.tags) || [])tags.append(el('li','',tag));
      a.append(story,tags);return a;
    };
    document.getElementById('impact-list').replaceChildren(...(d.impact || []).map((p,i)=>impactCard(p,i+1)));
    document.getElementById('impact-other').replaceChildren(...(d.otherImpact || []).map((p,i)=>impactCard(p,i+1+(d.impact || []).length)));
    document.getElementById('impact-delivery').replaceChildren(...(d.impactDelivery || []).map(p=>{
      const item=el('li');item.append(el('h4','',local(p.title)),el('p','',local(p.text)));return item;
    }));
    document.getElementById('skills-list').replaceChildren(...(d.skills || []).map(skill=>el('span','skill-chip',skill)));
    document.getElementById('certificates-list').replaceChildren(...(d.certificates || []).map(c=>el('li','',c)));
  }
  const header=document.querySelector('.site-header'),navigation=document.getElementById('main-nav'),menuButton=document.getElementById('menu-toggle'),backdrop=document.getElementById('nav-backdrop');
  const compactNavigation=window.matchMedia('(max-width:1120px)');
  const sectionLinks=[...navigation.querySelectorAll('a[href^="#"]')];
  const navigationSections=sectionLinks.map(a=>document.getElementById(a.hash.slice(1))).filter(Boolean);
  function menu(open){
    open=Boolean(open && compactNavigation.matches);
    menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',t(open?'menu.close':'menu.open'));
    navigation.classList.toggle('is-open',open);navigation.inert=compactNavigation.matches&&!open;backdrop.hidden=!open;
    if(open)requestAnimationFrame(()=>requestAnimationFrame(focusFirstSection));
  }
  function focusFirstSection(){
    if(menuButton.getAttribute('aria-expanded')==='true' && document.activeElement===menuButton)sectionLinks[0]?.focus({preventScroll:true});
  }
  navigation.addEventListener('transitionend',event=>{if(event.target===navigation)focusFirstSection();});
  menuButton.addEventListener('keydown',event=>{
    if(menuButton.getAttribute('aria-expanded')==='true' && (event.key==='ArrowDown' || (event.key==='Tab'&&!event.shiftKey))){event.preventDefault();sectionLinks[0]?.focus({preventScroll:true});}
  });
  let scrollFrame=0;
  function updateSectionNavigation(){
    scrollFrame=0;
    const headerHeight=header.getBoundingClientRect().height;
    root.style.setProperty('--header-height',`${headerHeight}px`);
    const maximum=Math.max(0,root.scrollHeight-window.innerHeight);
    header.style.setProperty('--reading-progress',String(maximum?Math.min(1,Math.max(0,window.scrollY/maximum)):0));
    header.classList.toggle('is-scrolled',window.scrollY>16);
    let active=navigationSections[0]?.id;
    for(const section of navigationSections)if(section.getBoundingClientRect().top<=headerHeight+55)active=section.id;
    if(maximum>0 && window.scrollY>=maximum-3)active=navigationSections.at(-1)?.id;
    for(const a of sectionLinks){if(a.hash==='#'+active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');}
  }
  function scheduleSectionNavigation(){if(!scrollFrame)scrollFrame=requestAnimationFrame(updateSectionNavigation);}
  function theme(){
    document.getElementById('theme-toggle').setAttribute('aria-label',t(root.dataset.theme==='dark'?'theme.light':'theme.dark'));
    document.querySelector('meta[name="theme-color"]').content=root.dataset.theme==='dark'?'#090c13':'#f7f6f2';
  }
  function translate(){
    root.lang=lang;
    document.querySelectorAll('[data-i18n]').forEach(n=>{n.textContent=t(n.dataset.i18n);});
    document.querySelectorAll('[data-lang]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===lang)));
    document.title=t('meta.title');
    document.querySelector('meta[name="description"]').content=t('meta.description');
    document.querySelector('meta[property="og:title"]').content=t('meta.title');
    document.querySelector('meta[property="og:description"]').content=t('meta.description');
    document.querySelector('meta[property="og:locale"]').content=lang==='tr'?'tr_TR':'en_US';
    document.getElementById('main-nav').setAttribute('aria-label',lang==='tr'?'Ana menü':'Main navigation');
    const search=document.getElementById('project-search');search.placeholder=t('projects.search');search.setAttribute('aria-label',t('projects.search'));
    const contact=document.getElementById('optional-links');contact.replaceChildren();
    if(/^[^\s@?&#]+@[^\s@?&#]+\.[^\s@?&#]+$/.test(d.profile.email || '')){const a=el('a','button lime',t('contact.email'));a.href='mailto:'+d.profile.email;contact.append(a);}
    contact.hidden=!contact.children.length;menu(false);theme();gallery();career();
  }
  // Only inspect trees belonging to repositories returned by the PUBLIC listing.
  // Icons are optional: failures and rate limits never hide the project cards.
  function iconCandidate(entries){
    if(!Array.isArray(entries))return null;
    const candidates=entries.filter(e=>e.type==='blob' && typeof e.path==='string' &&
      typeof e.size==='number' && e.size>0 && e.size<=2097152 &&
      !/(^|\/)(node_modules|vendor|\.git|pods|build|dist|test|tests|fixtures|screenshots|payments)(\/|$)/i.test(e.path) &&
      !e.path.split('/').some(part=>part==='..' || part==='.') &&
      /(^|\/)(app[-_]?icon(?:[-_]\d+)?|icon(?:[-_]\d+)?|logo|favicon|apple-touch-icon|Icon-App-1024x1024@1x)\.(png|webp|jpe?g|svg|ico)$/i.test(e.path));
    const score=e=>{
      let n=/app[-_]?icon|appiconset/i.test(e.path)?100:/\/icon[._-]/i.test('/'+e.path)?80:/\/logo\./i.test('/'+e.path)?70:40;
      if(/1024/.test(e.path))n+=12;
      if(/(^|\/)(public|assets|images)(\/|$)/i.test(e.path))n+=10;
      if(/\.(png|webp)$/i.test(e.path))n+=5;
      return n-e.path.split('/').length;
    };
    candidates.sort((a,b)=>score(b)-score(a)||a.path.localeCompare(b.path));
    return candidates[0] || null;
  }
  async function discoverIcons(){
    const pending=projects.filter(p=>!url(p.icon,true) && p.branch && p.publicVerified===true);
    let next=0,changed=false;
    const controller=new AbortController(),timeout=setTimeout(()=>controller.abort(),15000);
    async function worker(){
      while(next<pending.length && !controller.signal.aborted){
        const p=pending[next++],key='ao-public-icon-v1:'+p.name;
        try{
          let cached=null;
          try{cached=JSON.parse(sessionStorage.getItem(key)||'null');}catch(_){}
          if(cached && cached.revision===p.revision && typeof cached.time==='number' && Date.now()-cached.time<86400000){
            if(cached.icon && url(cached.icon)){p.icon=cached.icon;p.logo=cached.logo===true;changed=true;}
            continue;
          }
          const response=await fetch('https://api.github.com/repos/aozkul/'+encodeURIComponent(p.name)+'/git/trees/'+encodeURIComponent(p.branch)+'?recursive=1',{
            credentials:'omit',headers:{Accept:'application/vnd.github+json'},signal:controller.signal
          });
          if(response.status===403 || response.status===429){controller.abort();break;}
          if(!response.ok)continue;
          const data=await response.json();
          // Do not treat a truncated tree as an exhaustive search.
          if(data.truncated===true)continue;
          const match=iconCandidate(data.tree);
          let icon=null,logo=false;
          if(match){
            icon='https://raw.githubusercontent.com/aozkul/'+encodeURIComponent(p.name)+'/'+encodeURIComponent(p.branch)+'/'+match.path.split('/').map(encodeURIComponent).join('/');
            logo=/(^|\/)logo\./i.test(match.path);
            p.icon=icon;p.logo=logo;changed=true;
          }
          try{sessionStorage.setItem(key,JSON.stringify({revision:p.revision,time:Date.now(),icon,logo}));}catch(_){}
        }catch(_){}
      }
    }
    try{await Promise.all([worker(),worker()]);}finally{clearTimeout(timeout);}
    if(changed)gallery();
  }
  async function sync(){
    if(location.protocol==='file:')return;
    status='loading';document.getElementById('project-sync').textContent=t('projects.sync.loading');
    const controller=new AbortController(),timeout=setTimeout(()=>controller.abort(),12000);
    try{
      const rows=[];let complete=false;
      for(let page=1;page<=20;page++){
        const response=await fetch(`https://api.github.com/users/aozkul/repos?type=owner&per_page=100&sort=full_name&page=${page}`,{credentials:'omit',headers:{Accept:'application/vnd.github+json'},signal:controller.signal});
        if(!response.ok)throw new Error('GitHub unavailable');
        const batch=await response.json();if(!Array.isArray(batch))throw new Error('Invalid response');rows.push(...batch);
        if(batch.length<100){complete=true;break;}
      }
      if(!complete)throw new Error('Incomplete pagination');
      const known=new Map(d.projects.map((p,i)=>[p.name.toLowerCase(),{...p,order:i}])),seen=new Set();
      const fresh=rows.filter(r=>r.private===false && (!r.visibility || r.visibility==='public') && r.owner?.login?.toLowerCase()==='aozkul' && typeof r.name==='string' && r.name.toLowerCase()!=='aozkul.github.io' && /^[a-zA-Z0-9_.-]+$/.test(r.name)).map(r=>{
        const p=known.get(r.name.toLowerCase()) || {},homepage=projectPage(r.homepage);
        const defaultPage='https://aozkul.github.io/'+encodeURIComponent(r.name)+'/';
        const page=homepage || (r.has_pages===true?(projectPage(p.page)||defaultPage):null);
        return {...p,name:r.name,language:typeof r.language==='string'?r.language:null,page,pageEn:page && page===p.page?p.pageEn:null,description:p.description || (typeof r.description==='string'?r.description:''),visibility:'public',publicVerified:true,branch:typeof r.default_branch==='string'?r.default_branch:null,revision:typeof r.pushed_at==='string'?r.pushed_at:null};
      }).filter(p=>{const name=p.name.toLowerCase();if(!p.page || seen.has(name))return false;seen.add(name);return true;});
      // Owner-approved public showcases can have a private source repository.
      // Keep their published pages in the catalogue without querying private data.
      for(const p of known.values()){
        const name=p.name.toLowerCase();
        if(p.catalogOnly===true && projectPage(p.page) && !seen.has(name)){fresh.push(p);seen.add(name);}
      }
      fresh.sort((a,b)=>(a.order??999)-(b.order??999)||a.name.localeCompare(b.name));
      projects=fresh;status='live';gallery();void discoverIcons();
    }catch(_){status='saved';document.getElementById('project-sync').textContent=t('projects.sync.saved');}
    finally{clearTimeout(timeout);}
  }
  document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>{lang=b.dataset.lang;store('ao-language',lang);translate();}));
  document.getElementById('project-search').addEventListener('input',e=>{query=fold(e.target.value.trim());gallery();});
  document.getElementById('theme-toggle').addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';store('ao-theme',root.dataset.theme);theme();});
  menuButton.addEventListener('click',()=>menu(menuButton.getAttribute('aria-expanded')!=='true'));
  sectionLinks.forEach(a=>a.addEventListener('click',event=>{
    if(event.button!==0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)return;
    const target=document.getElementById(a.hash.slice(1));if(!target)return;
    menu(false);
    // Native fragment navigation preserves deep links and browser back/forward.
    const heading=target.querySelector('h1,h2');
    if(heading){heading.setAttribute('tabindex','-1');requestAnimationFrame(()=>heading.focus({preventScroll:true}));}
  }));
  document.addEventListener('click',e=>{if(!e.target.closest('.site-header'))menu(false);});
  document.addEventListener('keydown',e=>{if(e.key==='Escape' && document.getElementById('menu-toggle').getAttribute('aria-expanded')==='true'){menu(false);document.getElementById('menu-toggle').focus();}});
  document.addEventListener('focusin',event=>{if(!header.contains(event.target))menu(false);});
  compactNavigation.addEventListener('change',()=>{menu(false);scheduleSectionNavigation();});
  window.addEventListener('scroll',scheduleSectionNavigation,{passive:true});
  window.addEventListener('resize',scheduleSectionNavigation);
  window.addEventListener('hashchange',scheduleSectionNavigation);
  new ResizeObserver(scheduleSectionNavigation).observe(document.getElementById('main'));
  new ResizeObserver(scheduleSectionNavigation).observe(header);
  document.getElementById('year').textContent=new Date().getFullYear();
  translate();scheduleSectionNavigation();void sync();
})();
