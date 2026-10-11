import fs from 'node:fs';
import path from 'node:path';
import {build} from 'esbuild';
import {ROOT, buildSlimPublic, loadConfig, totalFrames} from './lib/explainer-common.mjs';

const id = process.argv[2];
const revision = process.argv.find((a) => a.startsWith('--revision='))?.slice(11) || 'v1';
if (!id || id.startsWith('--')) throw new Error('Usage: node scripts/build-explainer-preview.mjs <explainerId> --revision=vN');
if (!/^v\d+$/.test(revision)) throw new Error('Use a numbered revision such as v1.');
const config = await loadConfig(id);
const page = `${id}-preview-${revision}`;
const output = path.join(ROOT, 'out/prototypes', page);
if (fs.existsSync(output)) throw new Error(`Preview ${page} already exists. Choose a new revision.`);
fs.mkdirSync(path.join(output, 'public'), {recursive: true});
const {bytes, files} = buildSlimPublic(config, path.join(output, 'public'));
await build({
	entryPoints: [path.join(ROOT, 'src/explainer/preview-entry.tsx')], outfile: path.join(output, 'review.js'),
	bundle: true, format: 'iife', platform: 'browser', target: 'chrome110', jsx: 'automatic', minify: true,
	define: {'process.env.NODE_ENV': '"production"'}, logLevel: 'error',
});
const title = `${config.subjectLabel} ${config.topicLabel} | Explainer preview ${revision}`;
const html = `<!doctype html><html lang="en-AU"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title><style>body{margin:0;background:#faf9f5;color:#24382f;font:18px/1.5 system-ui}main{max-width:1100px;margin:auto;padding:28px}h1{font-size:30px;margin:0 0 16px}.controls{display:flex;flex-wrap:wrap;gap:8px;margin:20px 0}button{font:inherit;padding:8px 12px;background:white;color:#386c59;border:1px solid #b3c5b9;border-radius:4px;cursor:pointer}</style><main><h1>${title}</h1><div id="explainer-root" data-explainer-id="${id}"></div><p>${totalFrames(config)} frames at 30 fps. Voiced preview, pending review.</p></main><script>window.remotion_staticBase="/${page}/public"</script><script src="review.js"></script></html>`;
fs.writeFileSync(path.join(output, 'index.html'), html, {flag: 'wx'});
console.log(`public: ${files} files, ${(bytes / 1048576).toFixed(1)} MB`);
console.log(`http://127.0.0.1:8778/${page}/`);
