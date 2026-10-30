// Render only the small silent explainer maths pilot and its review stills.
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {build} from 'esbuild';
import {bundle} from '@remotion/bundler';
import {renderMedia, renderStill, selectComposition} from '@remotion/renderer';
import {ROOT, FONTS} from './lib/explainer-common.mjs';

const base = path.join(ROOT, 'out/explainer/maths-tangent-pilot');
const publicDir = path.join(base, 'public');
fs.mkdirSync(base, {recursive: true});
for (const rel of FONTS) {
	const dest = path.join(publicDir, rel);
	fs.mkdirSync(path.dirname(dest), {recursive: true});
	fs.copyFileSync(path.join(ROOT, 'public', rel), dest);
}

// Check the actual exported model, including the inverse SVG scale. Screen
// angles cannot be used as slopes because the two axes have different scales.
const modelBundle = path.join(base, 'model-check.cjs');
await build({entryPoints: [path.join(ROOT, 'src/explainer/math/kit.tsx')], outfile: modelBundle, platform: 'node', format: 'cjs', bundle: true, packages: 'external', jsx: 'automatic'});
const {square, squareSlope, tangentAt, graphPoint} = createRequire(import.meta.url)(modelBundle);
assert.equal(square(2), 4);
assert.equal(squareSlope(2), 4);
assert.equal(tangentAt(2, 3), 8);
const p = graphPoint(2, tangentAt(2, 2)), q = graphPoint(3, tangentAt(2, 3));
const xUnit = graphPoint(1, 0).x - graphPoint(0, 0).x;
const yUnit = graphPoint(0, 0).y - graphPoint(0, 1).y;
const plottedSlope = ((p.y - q.y) / yUnit) / ((q.x - p.x) / xUnit);
assert.equal(plottedSlope, 4);
for (const a of [1, 1.25, 1.5, 1.75, 2]) {
	assert.equal(tangentAt(a, a), square(a));
	assert.equal(tangentAt(a, a + 1) - tangentAt(a, a), squareSlope(a));
}
fs.writeFileSync(path.join(base, 'math-check.json'), JSON.stringify({point: [2, 4], tangentPoint: [3, 8], rise: 4, run: 1, derivative: 4, plottedSlope, movingTangentChecks: 'passed', curve: 'exact quadratic Bezier'}, null, 2) + '\n');
console.log('Actual plotted geometry agrees with displayed slope: 4.');
fs.writeFileSync(path.join(base, 'review.html'), `<!doctype html><html lang="en-AU"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Maths tangent pilot</title><style>body{margin:0;background:#f6f1e7;color:#26231f;font:18px system-ui}main{max-width:1200px;margin:24px auto;padding:0 16px}video{width:100%;display:block}h1{font-size:26px}</style><main><h1>Maths Advanced: tangent slope</h1><video controls preload="auto" src="maths-tangent-pilot.mp4"></video><p>15-second silent kit demonstration. Use full-screen landscape on a phone.</p></main></html>`);

const serveUrl = await bundle({entryPoint: path.join(ROOT, 'src/explainer/math/pilot-entry.tsx'), publicDir});
const composition = await selectComposition({serveUrl, id: 'MathsAdvanced-Tangent-Pilot'});
for (const frame of [80, 260, 420]) {
	for (const [size, scale] of [['desktop', 1], ['phone-landscape', 844 / 1920]]) {
		await renderStill({serveUrl, composition, frame, scale, output: path.join(base, `${size}-f${frame}.png`), imageFormat: 'png'});
	}
}
console.log('Desktop and phone landscape stills rendered.');
if (!process.argv.includes('--stills-only')) {
	await renderMedia({serveUrl, composition, codec: 'h264', crf: 18, concurrency: 2, muted: true, outputLocation: path.join(base, 'maths-tangent-pilot.mp4')});
	console.log('Silent playback rendered.');
}
