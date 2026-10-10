import fs from 'node:fs';
import path from 'node:path';
import {build} from 'esbuild';
import {sha256} from './lib/playback-assembly.mjs';

const root = process.cwd();
const output = 'out/prototypes/module5-rich-visual-review-2026-10-10';
fs.mkdirSync(output, {recursive: true});
fs.cpSync('public/fonts', `${output}/public/fonts`, {recursive: true});
await build({entryPoints: ['src/prototypes/Module5RichVisualReview.tsx'], outfile: `${output}/review.js`,
  bundle: true, format: 'iife', platform: 'browser', target: 'chrome110', jsx: 'automatic',
  define: {'process.env.NODE_ENV': '"production"'}, minify: true});
// Preserve the legacy tokenizer's punctuation regex without putting that
// raw character into the new HTML artifact. Selected copy is checked separately.
const script = fs.readFileSync(`${output}/review.js`, 'utf8').replaceAll('</script', '<\\/script').replaceAll('\u2014', '\\u2014');
const css = fs.readFileSync(`${output}/review.css`, 'utf8');
const page = `<!doctype html><html lang="en-AU"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Teaching models in motion | HSCScience</title><style>${css}
body{background:#f7f7f5;color:#1a1a1a;margin:0;font-family:system-ui,sans-serif}.rich-review{max-width:1440px;margin:auto;padding:28px}.rich-review h1{font-size:32px}.rich-review p{font-size:18px;line-height:1.6}.review-selectors{display:flex;gap:20px;flex-wrap:wrap;margin:24px 0}.review-selectors label{display:flex;flex-direction:column;gap:8px}select,button{font:inherit;padding:10px 14px;border:1px solid #aaa;border-radius:7px;background:#fff;color:#17251f}.cue-buttons{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:24px}details{border:1px solid #bbb;border-radius:8px;padding:16px}.narration{white-space:pre-wrap}.review-note{color:#555}@media(max-width:600px){.rich-review{padding:12px}.review-selectors{display:grid}select{max-width:100%}}
</style><div id="root"></div><script>window.remotion_staticBase="/module5-rich-visual-review-2026-10-10/public";</script><script>${script}</script></html>`;
if(page.includes('\u2014')) throw Error('Prohibited punctuation in review page.');
fs.writeFileSync(`${output}/index.html`, page);
const dependencies = [
  'src/prototypes/Module5RichVisualReview.tsx', 'src/slides/ConceptSlide.tsx', 'src/lesson/types.ts',
  'src/slides/diagrams/kinds/chem-y12-m5/Module5DisturbanceDiagram.tsx',
  'src/slides/diagrams/kinds/bio-y12-m5/PlantReproductionBoard.tsx',
  'docs/production/drafts/module5-rich-visuals-2026-10-10/integration-record.json',
  ...['chemistry','biology'].map(key => `docs/production/drafts/module5-rich-visuals-2026-10-10/${key}/lesson.json`),
];
fs.writeFileSync(`${output}/page-inputs.json`, JSON.stringify({schemaVersion:1, scope:'Silent actual Remotion Player preview with estimated cues, no listening/release approval.',
  pageSha256: sha256(fs.readFileSync(`${output}/index.html`)), inputs: dependencies.map(file => ({path:file,sha256:sha256(fs.readFileSync(path.resolve(root,file)))}))}, null, 2)+'\n');
console.log('http://127.0.0.1:8778/module5-rich-visual-review-2026-10-10/');
