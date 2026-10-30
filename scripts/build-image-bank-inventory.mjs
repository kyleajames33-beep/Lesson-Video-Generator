// Read-only course/art inventory for the Physics and Maths image-brief queue.
// Writes planning metadata only. Does not select assets, generate images or change lessons.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const output = 'docs/production/claude-pm/assets/physics-maths-image-bank';
const site = 'C:/Users/kygs/hscscience/subjects';
const slash = s => s.replaceAll('\\', '/');
const sha = b => crypto.createHash('sha256').update(b).digest('hex');
const walk = d => fs.existsSync(d) ? fs.readdirSync(d, {withFileTypes: true}).flatMap(e => e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]) : [];
const text = s => s.replace(/<[^>]*>/g, ' ').replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').replace(/&#39;|&apos;/g, "'").replace(/&quot;/g, '"').replaceAll('\u2014', ': ').replace(/\s+/g, ' ').trim();
const map = JSON.parse(fs.readFileSync('src/explainer/physics/artifacts/site/course-map.json'));
const sources = ['physics', 'maths-advanced'].flatMap(s => walk(`${site}/${s}/year12`).filter(f => f.endsWith('.sa.html')));
sources.push(`${site}/maths-advanced/year11/introduction-to-differentiation/lesson03.sa.html`);
const lessons = sources.sort((a, b) => a.localeCompare(b, 'en', {numeric: true})).map(file => {
  const bytes = fs.readFileSync(file), html = bytes.toString('utf8');
  const key = slash(path.relative(site, file));
  const support = map.lessons.find(l => slash(l.siteSource) === slash(file));
  return {lessonKey: key, sourcePath: slash(file), sourceSha256: sha(bytes), title: text(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1] ?? ''),
    subject: key.startsWith('physics/') ? 'physics' : 'maths-advanced', year: key.includes('/year11/') ? 11 : 12,
    topic: key.split('/')[2], headings: [...html.matchAll(/<h[23][^>]*>([\s\S]*?)<\/h[23]>/gi)].map(m => text(m[1])).filter(Boolean),
    codedVisualIds: support?.visuals ?? [], placement: key.includes('/year11/') ? 'calculus-bridge-prerequisite' : 'existing-year12-site-route'};
});
if (lessons.filter(l => l.subject === 'physics').length !== 70 || lessons.filter(l => l.year === 12 && l.subject === 'maths-advanced').length !== 59) throw new Error('Course counts changed. Review scope before regenerating.');
const assets = ['biology', 'chemistry', 'physics', 'maths'].flatMap(subject => walk(`public/assets/${subject}`).filter(f => /\.(png|jpe?g|webp)$/i.test(f)).map(file => {
  const bytes = fs.readFileSync(file), png = bytes.subarray(0, 8).equals(Buffer.from([137,80,78,71,13,10,26,10]));
  return {path: slash(file), subject, bytes: bytes.length, sha256: sha(bytes), width: png ? bytes.readUInt32BE(16) : null, height: png ? bytes.readUInt32BE(20) : null,
    reviewStatus: 'inventory-only-not-an-appearance-science-or-reuse-pass'};
}));
fs.mkdirSync(output, {recursive: true});
fs.writeFileSync(`${output}/source-inventory.json`, JSON.stringify({date: '2026-10-25', scope: '70 Year 12 Physics pages, 59 Year 12 Maths Advanced pages and one Year 11 calculus bridge. Other Maths courses, Year 11 routes and GCSE are outside this pass.', lessons}, null, 2) + '\n');
fs.writeFileSync(`${output}/existing-raster-inventory.json`, JSON.stringify({date: '2026-10-25', scope: 'Raw raster-file inventory. Versions and variants are separate files; counts are not approved asset or asset-family counts.', assets}, null, 2) + '\n');
console.log(JSON.stringify({lessons: lessons.length, rasterFiles: assets.length, output}));
