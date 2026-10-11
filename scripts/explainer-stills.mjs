import fs from 'node:fs';
import path from 'node:path';
import {bundle} from '@remotion/bundler';
import {renderStill, selectComposition} from '@remotion/renderer';
import {ROOT, buildSlimPublic, loadConfig, writeEntry} from './lib/explainer-common.mjs';

const [id, ...rest] = process.argv.slice(2);
const frames = rest.map(Number).filter((n) => Number.isInteger(n) && n >= 0);
if (!id || !frames.length) throw new Error('Usage: node scripts/explainer-stills.mjs <explainerId> <frame...>');
const config = await loadConfig(id);
const base = path.join(ROOT, 'out/explainer', id);
const pub = path.join(base, 'public-slim');
buildSlimPublic(config, pub);
const entry = path.join(base, 'entry.tsx');
writeEntry(config, entry);
const serveUrl = await bundle({entryPoint: entry, publicDir: pub});
try {
	const composition = await selectComposition({serveUrl, id, timeoutInMilliseconds: 60000});
	const dir = path.join(base, 'stills');
	fs.mkdirSync(dir, {recursive: true});
	for (const frame of frames) {
		const output = path.join(dir, `${id}-f${String(frame).padStart(5, '0')}.png`);
		await renderStill({composition, serveUrl, frame, output, scale: 0.5, imageFormat: 'png', timeoutInMilliseconds: 60000});
		console.log(output);
	}
} finally {
	fs.rmSync(serveUrl, {recursive: true, force: true});
	fs.rmSync(entry, {force: true});
}
