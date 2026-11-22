import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const pages = ['index.html', 'work/greatnext.html', 'work/earnexxt.html', 'work/samxpress.html', 'work/ngsf.html'];
const problems = [];

for (const rel of pages) {
  const file = path.join(root, rel);
  const html = fs.readFileSync(file, 'utf8');
  const dir = path.dirname(file);
  const h1s = (html.match(/<h1[\s>]/g) || []).length;
  if (h1s !== 1) problems.push(`${rel}: ${h1s} h1 tags`);
  if (!/<meta name="description"/.test(html)) problems.push(`${rel}: no meta description`);
  if (!/<title>[^<]+<\/title>/.test(html)) problems.push(`${rel}: no title`);
  if (!/prefers-color-scheme/.test(html)) problems.push(`${rel}: no theme bootstrap`);
  if (!/data-theme-set="system"/.test(html)) problems.push(`${rel}: no system theme control`);

  for (const m of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
    const url = m[1];
    if (/^(https?:|mailto:|tel:|#)/.test(url)) continue;
    const clean = url.split('#')[0];
    if (!clean) continue;
    const target = path.resolve(dir, clean);
    if (!fs.existsSync(target)) problems.push(`${rel}: missing ${url}`);
  }

  for (const m of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/alt="[^"]+"/.test(m[0])) problems.push(`${rel}: image without alt: ${m[0].slice(0, 60)}`);
    if (!/width="\d+"/.test(m[0]) || !/height="\d+"/.test(m[0])) problems.push(`${rel}: image without dimensions`);
  }
}

const index = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const workSlugs = ['greatnext', 'earnexxt', 'samxpress', 'ngsf'];
for (const slug of workSlugs) {
  if (!index.includes(`work/${slug}.html`)) problems.push(`index: no link to ${slug}`);
}

console.log(problems.length ? problems.join('\n') : 'QA OK: all pages, links, images, headings, descriptions.');
