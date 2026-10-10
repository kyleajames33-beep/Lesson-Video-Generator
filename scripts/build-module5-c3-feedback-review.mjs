import fs from 'node:fs';
import path from 'node:path';
import {build} from 'esbuild';
import {sha256} from './lib/playback-assembly.mjs';

const axisReview = process.argv[2] === 'axis';
const pageName = axisReview ? 'module5-c3-axis-review-2026-10-10' : 'module5-c3-reference-review-2026-10-10';
const output = `out/prototypes/${pageName}`;
if (axisReview && fs.existsSync(`${output}/index.html`)) throw Error('Preserve existing axis review inputs; use a new revision identity before rebuilding.');
const entry = 'src/prototypes/Module5C3FeedbackReview.tsx';
const source = 'docs/production/module5-c3-reference-feedback-2026-10-10/lesson.json';
const lesson = JSON.parse(fs.readFileSync(source, 'utf8'));
if (JSON.stringify(lesson).includes('\u2014')) throw Error('Prohibited punctuation in selected lesson.');
fs.mkdirSync(output, {recursive:true});
const audio = [...new Set([lesson.introVoiceover?.audioFile, lesson.backgroundMusic,
  ...lesson.scenes.map(scene => scene.voiceover?.audioFile)].filter(Boolean))];
if (lesson.scenes.some(scene => scene.voiceover?.text && !scene.voiceover?.audioFile)) throw Error('Selected narration audio is missing.');
const assets = [];
for (const file of audio) {
  const relative = file.replace(/^public[\\/]/, '').replaceAll('\\', '/');
  const from = path.resolve('public', relative);
  if (!from.startsWith(path.resolve('public') + path.sep)) throw Error('Invalid audio asset path.');
  const target = path.join(output, 'public', relative);
  fs.mkdirSync(path.dirname(target), {recursive:true});
  fs.copyFileSync(from, target);
  assets.push({path:path.relative(process.cwd(), from).replaceAll('\\','/'), copiedPath:`public/${relative}`, sha256:sha256(fs.readFileSync(from))});
}
fs.cpSync('public/fonts', `${output}/public/fonts`, {recursive:true});
for (const file of fs.readdirSync('public/fonts').sort()) {
  if (fs.statSync(`public/fonts/${file}`).isFile()) assets.push({path:`public/fonts/${file}`, copiedPath:`public/fonts/${file}`, sha256:sha256(fs.readFileSync(`public/fonts/${file}`))});
}
const result = await build({entryPoints:[entry], outfile:`${output}/review.js`, bundle:true, format:'iife', platform:'browser',
  target:'chrome110', jsx:'automatic', define:{'process.env.NODE_ENV':'"production"'}, minify:true, metafile:true});
const script = fs.readFileSync(`${output}/review.js`, 'utf8').replaceAll('</script', '<\\/script').replaceAll('\u2014', '\\u2014');
const css = fs.readFileSync(`${output}/review.css`, 'utf8');
const page = `<!doctype html><html lang="en-AU"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Concentration and temperature at equilibrium</title><style>${css}
body{margin:0;background:#f7f7f5;color:#1a1a1a;font-family:system-ui,sans-serif}.voiced-review{max-width:1440px;margin:auto;padding:28px}.voiced-review h1{font-size:32px}.voiced-review p{font-size:18px;line-height:1.6}.scope-note{padding:16px 20px;background:#e8f5f0;border-radius:10px}.scope-note p{margin:8px 0}.scope-note a{color:#006b59}.review-selectors{display:flex;gap:24px;flex-wrap:wrap;align-items:center;margin:24px 0}.review-selectors label{display:flex;gap:8px;align-items:center}select,button{font:inherit;padding:10px 14px;border:1px solid #aaa;border-radius:7px;background:#fff;color:#17251f}.cue-buttons{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:24px}details{border:1px solid #bbb;border-radius:8px;padding:16px}.narration{white-space:pre-wrap}.review-note{color:#555}@media(max-width:600px){.voiced-review{padding:12px}.scope-note{padding:16px 20px;background:#e8f5f0;border-radius:10px}.scope-note p{margin:8px 0}.scope-note a{color:#006b59}.review-selectors{display:grid}select{max-width:100%}.review-selectors label{flex-wrap:wrap}}
</style><div id="root"></div><script>window.remotion_staticBase="/${pageName}/public";</script><script>${script}</script></html>`;
if (page.includes('\u2014')) throw Error('Prohibited punctuation in review page.');
fs.writeFileSync(`${output}/index.html`, page);
// Disabled Node-only package branches are esbuild virtual inputs, not files.
const dependencies = [...new Set([entry, 'scripts/build-module5-c3-feedback-review.mjs', ...Object.keys(result.metafile.inputs)
  .filter(file => !file.startsWith('node_modules/') && !file.startsWith('(disabled):'))
  .map(file => file.replace(/ with \{ type: 'json' \}$/, ''))])].sort();
fs.writeFileSync(`${output}/page-inputs.json`, JSON.stringify({schemaVersion:1,
  scope:'Exact voiced Remotion Player preview. Human listening, continuous playback, caption fit and public release approval remain pending.',
  pageSha256:sha256(fs.readFileSync(`${output}/index.html`)),
  inputs:dependencies.map(file => ({path:file,sha256:sha256(fs.readFileSync(file))})), assets}, null, 2)+'\n');
console.log(`http://127.0.0.1:8778/${pageName}/`);
