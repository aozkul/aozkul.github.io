/* Public portfolio. No credentials, tracking or private-repository requests.
   Repository pagination, Pages links and optional public icon discovery. */
(() => {
  'use strict';
  const d = window.PORTFOLIO_DATA;
  if (!d || !d.translations || !Array.isArray(d.projects)) return;
  const root = document.documentElement;
  let lang = d.defaultLanguage === 'en' ? 'en' : 'tr';
  let filter = 'all', query = '', status = 'saved', projects = d.projects.slice();
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
  const el = (tag,cls,text) => { const n=document.createElement(tag); if(cls)n.className=cls; if(text!==undefined)n.textContent=text; return n; };
  const link = (href,cls,text) => { const a=el('a',cls,text); a.href=href; a.target='_blank'; a.rel='noopener noreferrer'; return a; };
  const arrow = () => { const a=el('span','link-arrow','↗'); a.setAttribute('aria-hidden','true'); return a; };
  function filters() {
    const values=[...new Set(projects.map(p=>p.language || 'other'))].sort();
    if(filter!=='all' && !values.includes(filter))filter='all';
    document.querySelector('.filters').replaceChildren(...['all',...values].map(v=>{
      const b=el('button','',v==='all'?t('projects.filter.all'):v==='other'?t('projects.filter.other'):v);
      b.type='button';b.dataset.filter=v;b.setAttribute('aria-pressed',String(filter===v));return b;
    }));
  }
  function gallery() {
    const grid=document.getElementById('project-grid'), fragment=document.createDocumentFragment();
    let count=0;
    projects.forEach((p,i)=>{
      const repo=url(p.url); if(!repo)return;
      const page=url(lang==='en' ? p.pageEn || p.page : p.page);
      const a=el('article','project-card');a.dataset.repository=p.name;a.dataset.language=p.language || 'other';
      a.hidden=(filter!=='all' && filter!==a.dataset.language) || (query && !fold([p.name,p.language,local(p.description)].join(' ')).includes(query));
      if(!a.hidden)count++;
      const target=link(page || repo,'project-link');
      const action=t(page?'projects.visit':'projects.link');target.setAttribute('aria-label',`${p.name} — ${action}`);
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
      meta.append(el('span','',t(page?'projects.website':'projects.repository')),el('span','language',p.language || 'GitHub'));
      const bottom=el('div','project-bottom');bottom.append(el('span','',action),arrow());
      info.append(meta,el('h3','',p.name));if(local(p.description))info.append(el('p','project-description',local(p.description)));info.append(bottom);
      target.append(art,info);a.append(target);
      const source=link(repo,'project-source',t('projects.source'));source.setAttribute('aria-label',`${p.name} — GitHub`);source.append(arrow());a.append(source);fragment.append(a);
    });
    grid.replaceChildren(fragment);
    document.getElementById('project-empty').hidden=count!==0;
    document.getElementById('project-count').textContent=t('projects.count').replace('{count}',String(count)).replace('{total}',String(projects.length));
    document.getElementById('project-sync').textContent=t('projects.sync.'+status);
  }
  function career() {
    const timeline=document.getElementById('career-list');
    timeline.replaceChildren(...(d.career || []).map(job=>{
      const item=el('article','career-item'),date=el('p','career-date',local(job.dates));
      const body=el('div','career-body');body.append(el('h3','',job.role),el('p','career-company',job.company+' · '+job.city),el('p','career-text',local(job.text)));
      item.append(date,body);return item;
    }));
    document.getElementById('impact-list').replaceChildren(...(d.impact || []).map(p=>{
      const a=el('article','impact-card');a.append(el('p','impact-value',p.value),el('h3','',local(p.title)),el('p','',local(p.text)),el('p','impact-tech',p.tech));return a;
    }));
    document.getElementById('impact-other').replaceChildren(...(d.otherImpact || []).map(p=>{
      const a=el('article','impact-detail');a.append(el('h3','',p.title),el('p','',local(p.text)));return a;
    }));
    document.getElementById('skills-list').replaceChildren(...(d.skills || []).map(skill=>el('span','skill-chip',skill)));
    document.getElementById('certificates-list').replaceChildren(...(d.certificates || []).map(c=>el('li','',c)));
  }
  function menu(open){
    const b=document.getElementById('menu-toggle');b.setAttribute('aria-expanded',String(open));b.setAttribute('aria-label',t(open?'menu.close':'menu.open'));
    document.getElementById('main-nav').classList.toggle('is-open',open);
  }
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
    document.querySelector('.filters').setAttribute('aria-label',t('projects.filter.label'));
    const search=document.getElementById('project-search');search.placeholder=t('projects.search');search.setAttribute('aria-label',t('projects.search'));
    const contact=document.getElementById('optional-links');contact.replaceChildren();
    if(/^[^\s@?&#]+@[^\s@?&#]+\.[^\s@?&#]+$/.test(d.profile.email || '')){const a=el('a','',t('contact.email'));a.href='mailto:'+d.profile.email;contact.append(a);}
    contact.hidden=!contact.children.length;menu(false);theme();filters();gallery();career();
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
      const fresh=rows.filter(r=>r.private===false && (!r.visibility || r.visibility==='public') && r.owner?.login?.toLowerCase()==='aozkul' && typeof r.name==='string' && /^[a-zA-Z0-9_.-]+$/.test(r.name)).map(r=>{
        const p=known.get(r.name.toLowerCase()) || {},homepage=url(r.homepage);
        const defaultPage=r.name.toLowerCase()==='aozkul.github.io'?'https://aozkul.github.io/':'https://aozkul.github.io/'+encodeURIComponent(r.name)+'/';
        const page=homepage && new URL(homepage).hostname!=='github.com'?homepage:r.has_pages===true?(url(p.page)||defaultPage):null;
        return {...p,name:r.name,url:'https://github.com/aozkul/'+encodeURIComponent(r.name),language:typeof r.language==='string'?r.language:null,page,pageEn:page && page===p.page?p.pageEn:null,description:p.description || (typeof r.description==='string'?r.description:''),visibility:'public',publicVerified:true,branch:typeof r.default_branch==='string'?r.default_branch:null,revision:typeof r.pushed_at==='string'?r.pushed_at:null};
      }).filter(p=>{const name=p.name.toLowerCase();if(seen.has(name))return false;seen.add(name);return true;});
      fresh.sort((a,b)=>(a.order??999)-(b.order??999)||a.name.localeCompare(b.name));
      projects=fresh;status='live';filters();gallery();void discoverIcons();
    }catch(_){status='saved';document.getElementById('project-sync').textContent=t('projects.sync.saved');}
    finally{clearTimeout(timeout);}
  }
  document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>{lang=b.dataset.lang;store('ao-language',lang);translate();}));
  document.querySelector('.filters').addEventListener('click',e=>{const b=e.target.closest('button[data-filter]');if(!b)return;filter=b.dataset.filter;filters();gallery();});
  document.getElementById('project-search').addEventListener('input',e=>{query=fold(e.target.value.trim());gallery();});
  document.getElementById('theme-toggle').addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';store('ao-theme',root.dataset.theme);theme();});
  document.getElementById('menu-toggle').addEventListener('click',()=>menu(document.getElementById('menu-toggle').getAttribute('aria-expanded')!=='true'));
  document.querySelectorAll('#main-nav a').forEach(a=>a.addEventListener('click',()=>menu(false)));
  document.addEventListener('click',e=>{if(!e.target.closest('.site-header'))menu(false);});
  document.addEventListener('keydown',e=>{if(e.key==='Escape' && document.getElementById('menu-toggle').getAttribute('aria-expanded')==='true'){menu(false);document.getElementById('menu-toggle').focus();}});
  window.matchMedia('(min-width:751px)').addEventListener('change',e=>{if(e.matches)menu(false);});
  document.getElementById('year').textContent=new Date().getFullYear();
  translate();void sync();
})();
