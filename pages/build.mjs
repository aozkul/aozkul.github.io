import fs from 'node:fs';import path from 'node:path';import {fileURLToPath} from 'node:url';
const dir=path.dirname(fileURLToPath(import.meta.url)),repo=path.dirname(dir),out=path.join(dir,'public');
fs.mkdirSync(out,{recursive:true});
for(const file of ['index.html','404.html','site-premium.css','site-data.js','portfolio-content.js','portfolio-app.js','favicon.svg'])fs.copyFileSync(path.join(repo,file),path.join(out,file));
fs.cpSync(path.join(repo,'assets/icons'),path.join(out,'assets/icons'),{recursive:true});
fs.writeFileSync(path.join(out,'.nojekyll'),'');
fs.writeFileSync(path.join(out,'robots.txt'),'User-agent: *\nAllow: /\nSitemap: https://aozkul.github.io/sitemap.xml\n');
fs.writeFileSync(path.join(out,'sitemap.xml'),'<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://aozkul.github.io/</loc></url></urlset>');
console.log('Portfolio built with explicit public asset allowlist.');
