// node stills.mjs <id> <outDir> <frame> [<frame>...] : full-resolution PNG stills (asset guard on), stills lock held.
import fs from 'node:fs';
import path from 'node:path';
import {bundle} from '@remotion/bundler';
import {renderStill, selectComposition} from '@remotion/renderer';
import {ROOT, buildSlimPublic, loadConfig, totalFrames} from '../../../scripts/lib/explainer-common.mjs';
const [id, outDir, ...frames] = process.argv.slice(2);
const sleep = ms => new Promise(r => setTimeout(r, ms));
const posix = p => p.split(path.sep).join('/');
const config = await loadConfig(id); const total = totalFrames(config);
fs.mkdirSync(outDir, {recursive: true});
const lock = path.join(ROOT, 'out/explainer/.stills-lock'); let locked = false;
const release = () => { if (locked) { locked = false; fs.rmSync(lock, {recursive: true, force: true}); } };
process.on('exit', release);
for (;;) { try { fs.mkdirSync(lock); locked = true; fs.writeFileSync(path.join(lock, 'owner.json'), JSON.stringify({tool: 'maths-repair-agent stills', id, pid: process.pid})); break; } catch { let o = null; try { o = JSON.parse(fs.readFileSync(path.join(lock, 'owner.json'), 'utf8')); } catch {} let alive = true; if (o?.pid) { try { process.kill(o.pid, 0); } catch { alive = false; } } if (o?.pid && !alive) { fs.rmSync(lock, {recursive: true, force: true}); continue; } await sleep(10000); } }
const base = path.join(ROOT, 'out/explainer', id); const entry = path.join(base, `stills-entry-${process.pid}.tsx`);
let serveUrl = null;
try {
	const pub = path.join(base, 'public-slim'); buildSlimPublic(config, pub); const src = config.__entrySource;
	fs.writeFileSync(entry, `import React from 'react';\nimport {Composition, registerRoot} from 'remotion';\nimport {ExplainerVideo} from '${posix(path.join(ROOT, 'src/explainer/ExplainerVideo'))}';\nimport {${src.exportName} as config} from '${posix(src.modulePath)}';\nimport {ExplainerAssetGuard} from '${posix(path.join(ROOT, 'scripts/lib/explainer-render-guard'))}';\nconst W: React.FC = () => <ExplainerAssetGuard><ExplainerVideo config={config} /></ExplainerAssetGuard>;\nregisterRoot(() => <Composition id={config.id} component={W} durationInFrames={${total}} fps={30} width={1920} height={1080} />);\n`);
	serveUrl = await bundle({entryPoint: entry, publicDir: pub});
	const composition = await selectComposition({serveUrl, id, timeoutInMilliseconds: 90000});
	for (const fr of frames) { const out = path.join(outDir, `after-${fr}.png`); await renderStill({composition, serveUrl, frame: Number(fr), output: out, imageFormat: 'png', timeoutInMilliseconds: 90000, logLevel: 'error'}); console.log(out); }
} finally { release(); fs.rmSync(entry, {force: true}); if (serveUrl) fs.rmSync(serveUrl, {recursive: true, force: true}); }
process.exit(0);
