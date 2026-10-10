import fs from 'node:fs';
import {build} from 'esbuild';
import {sha256} from './lib/playback-assembly.mjs';

const revision = process.argv[2] ?? '';
const voiced = revision === 'voiced';
if (revision && !voiced && !/^v[0-9]+$/.test(revision)) throw Error('Use a bounded revision identity such as v2 or voiced.');
const pageName = voiced ? 'module5-starter-voiced-review-2026-10-10' : `module5-starter-review-2026-10-10${revision ? `-${revision}` : ''}`;
const output = `out/prototypes/${pageName}`;
const entry = voiced ? 'src/prototypes/Module5StarterVoicedReview.tsx' : 'src/prototypes/Module5StarterReview.tsx';
const assets = [];
if (fs.existsSync(`${output}/index.html`)) throw Error('Preserve existing review. Select a new page identity before rebuilding.');
for (const subject of ['chemistry', 'biology']) {
  const copy = fs.readFileSync(`docs/production/module5-starters-2026-10-10/${subject}/${voiced ? 'measured/' : ''}lesson.json`, 'utf8');
  if (copy.includes('\u2014')) throw Error('Prohibited punctuation in selected copy.');
  if (voiced) for (const scene of JSON.parse(copy).scenes) {
    if (!scene.voiceover?.text) continue;
    const source = scene.voiceover.audioFile;
    if (!source?.startsWith('public/audio/') || source.includes('..')) throw Error('Invalid selected audio path.');
    assets.push({path:source,sha256:sha256(fs.readFileSync(source))});
  }
}
fs.mkdirSync(output, {recursive:true});
fs.cpSync('public/fonts', `${output}/public/fonts`, {recursive:true});
for (const asset of assets) {
  const target = `${output}/${asset.path}`;
  fs.mkdirSync(target.slice(0,target.lastIndexOf('/')), {recursive:true});
  fs.copyFileSync(asset.path,target);
}
const result = await build({entryPoints:[entry], outfile:`${output}/review.js`, bundle:true, format:'iife',
  platform:'browser', target:'chrome110', jsx:'automatic', define:{'process.env.NODE_ENV':'"production"'}, minify:true, metafile:true});
const script = fs.readFileSync(`${output}/review.js`, 'utf8').replaceAll('</script', '<\\/script').replaceAll('\u2014', '\\u2014');
const css = fs.readFileSync(`${output}/review.css`, 'utf8');
const html = `<!doctype html><html lang="en-AU"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Module 5 opening lessons | HSCScience</title><style>${css}
body{margin:0;background:#f7f7f5;color:#17251f;font:18px/1.5 system-ui,sans-serif}main{max-width:1100px;margin:auto;padding:24px}.controls{display:flex;flex-wrap:wrap;gap:16px;margin:20px 0}label{display:flex;gap:8px;align-items:center}select,button{font:inherit;padding:8px;border:1px solid #aaa;border-radius:6px;background:white}details{border:1px solid #ccc;padding:16px}h1{font-size:32px}@media(max-width:600px){main{padding:12px}label{flex-wrap:wrap}select{max-width:100%}}
</style><div id="root"></div><script>window.remotion_staticBase="/${pageName}/public";</script><script>${script}</script></html>`;
fs.writeFileSync(`${output}/index.html`, html, {flag:'wx'});
const inputs = [...new Set([entry, 'scripts/build-module5-starter-review.mjs', ...Object.keys(result.metafile.inputs)
  .filter(file => !file.startsWith('node_modules/') && !file.startsWith('(disabled):'))
  .map(file => file.replace(/ with \{ type: 'json' \}$/, ''))])].sort();
fs.writeFileSync(`${output}/page-inputs.json`, JSON.stringify({schemaVersion:1, scope:'Silent exact Player, estimated cues. No listening or release pass.',
  pageSha256:sha256(html), assets, inputs:inputs.map(path=>({path,sha256:sha256(fs.readFileSync(path))})),
  fonts:fs.readdirSync('public/fonts').filter(file=>fs.statSync(`public/fonts/${file}`).isFile()).map(file=>({path:`public/fonts/${file}`,sha256:sha256(fs.readFileSync(`public/fonts/${file}`))}))},null,2)+'\n',{flag:'wx'});
console.log(`http://127.0.0.1:8778/${pageName}/`);
