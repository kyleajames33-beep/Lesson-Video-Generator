// Brief 129 only: exact model checks, serial stills and a 60-second silent kit pilot.
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {execFileSync} from 'node:child_process';
import {build} from 'esbuild';
import {bundle} from '@remotion/bundler';
import {openBrowser, renderMedia, renderStill, selectComposition} from '@remotion/renderer';
import {ROOT, FONTS, FFMPEG} from './lib/explainer-common.mjs';

const base = path.join(ROOT, 'out/explainer/maths-calculus-kit-pilot');
const lock = path.join(ROOT, 'out/explainer/.stills-lock');
const publicDir = path.join(base, 'public');
fs.mkdirSync(base, {recursive: true});
const modelPath = path.join(base, 'model-check.cjs');
await build({entryPoints: [path.join(ROOT, 'src/explainer/math/calculus-examples.ts')], outfile: modelPath, bundle: true, platform: 'node', format: 'cjs', packages: 'external', jsx: 'automatic'});
const require = createRequire(import.meta.url), examples = require(modelPath);
const kitPath = path.join(base, 'kit-check.cjs');
await build({entryPoints: [path.join(ROOT, 'src/explainer/math/kit.tsx')], outfile: kitPath, bundle: true, platform: 'node', format: 'cjs', packages: 'external', jsx: 'automatic'});
const k = require(kitPath);
let assertions = 0;
const near = (a, b, tolerance = 1e-7) => {assert.ok(Number.isFinite(a) && Number.isFinite(b) && Math.abs(a - b) <= tolerance * Math.max(1, Math.abs(b)), `${a} != ${b}`); assertions++;};
near(examples.exponential(0.5), 4); near(examples.exponentialDerivative(0.5), 8);
near(examples.quotientDerivative(0), 0);
near(examples.objective(0.5), 17 / 2); near(examples.objective(2), 4); near(examples.objective(4), 5);
near(examples.objectiveDerivative(2), 0); near(k.exactValueNumber({numerator: 17, denominator: 2}), examples.objective(0.5));
const modelPairs = [[examples.exponentialGraph, examples.exponentialDerivative], [examples.logGraph, x => 1 / x], [examples.sineGraph, Math.cos], [examples.quotientGraph, examples.quotientDerivative], [examples.objectiveGraph, examples.objectiveDerivative]];
let sampled = 0;
for (const [graph, derivative] of modelPairs) {
	const transform = k.graphTransform(graph);
	for (const line of k.sampleFunction(graph)) {
		for (const p of line) {
			assert.ok(k.inDomain(graph, p.x)); sampled++;
			const screen = transform.point(p.x, p.y), back = transform.inverse(screen.x, screen.y);
			near(back.x, p.x); near(back.y, graph.fn(p.x));
			// Independent central differences away from singularities and endpoint edges.
			const h = 1e-5;
			if (k.inDomain(graph, p.x - h) && k.inDomain(graph, p.x + h) && (!graph.asymptotes?.some(a => a.axis === 'x' && Math.abs(p.x - a.value) < 0.02))) {
				near((graph.fn(p.x + h) - graph.fn(p.x - h)) / (2 * h), derivative(p.x), 1e-5);
			}
			const m = derivative(p.x), q = transform.point(p.x + 0.01, p.y + 0.01 * m);
			near(((screen.y - q.y) / transform.sy) / ((q.x - screen.x) / transform.sx), m, 1e-6);
		}
	}
}
for (let frame = 0; frame < 300; frame++) {
	const state = k.secantState(examples.exponentialGraph, examples.exponentialDerivative, 0.5, 0.9, Math.min(1, frame / 205));
	if (state.tangent) near(state.slope, 8);
	else {assert.notEqual(state.x, 0.5); near(state.slope, (examples.exponential(state.x) - 4) / (state.x - 0.5));}
}
// Brief131 cue holds, tangent endpoint and dial/readout regressions.
const cueGraph={fn:x=>2**x,x:[-1,2],y:[0,5]};
const cues=[{frame:0,x:0.5,holdUntil:20},{frame:40,x:0.1,holdUntil:60},{frame:80,x:0.01,holdUntil:100},{frame:120,x:0}];
for(const [frame,x] of [[0,0.5],[20,0.5],[30,0.3],[40,0.1],[60,0.1],[80,0.01],[100,0.01],[120,0],[140,0]]) near(k.secantCueX(frame,cues),x);
for(const frame of [0,20,30,40,60,80,100,110,119,120,140]) {
 const state=k.secantCueState(cueGraph,x=>Math.log(2)*2**x,0,frame,cues);
 near(state.slope,state.tangent?Math.log(2):(2**state.x-1)/state.x);
}
assert.equal(k.secantCueState(cueGraph,x=>Math.log(2)*2**x,0,120,cues).tangent,true);
for(const bad of [NaN,Infinity])assert.throws(()=>k.secantCueX(0,[{frame:0,x:0.5,holdUntil:bad}]));
assert.throws(()=>k.secantCueX(0,[{frame:0,x:0.5,holdUntil:30},{frame:20,x:0.1}]));
near(k.dialFraction(2,2,3),0);near(k.dialFraction(2.5,2,3),0.5);near(k.dialFraction(3,2,3),1);
assert.throws(()=>k.dialFraction(1,2,2));
for(const point of [[-1,0.5],[0,1],[1,3]]) {const p=k.readoutPlacement(cueGraph,...point,true);assert.ok(p.left>=0&&p.left+p.width<=800);assert.ok(p.top>=0&&p.top+p.height<=520);}
// Near-convergence and gap regression cases.
for (const separation of [0.1, 0.001, 1e-5]) for (const progress of [0, 0.99, 0.999999, 1]) assert.ok(Number.isFinite(k.secantState(examples.exponentialGraph, examples.exponentialDerivative, 0.5, 0.5 + separation, progress).slope));
assert.throws(() => k.secantSlope(Math.sin, 1, 1));
assert.throws(() => k.secantState(examples.quotientGraph, examples.quotientDerivative, -2, 0, 0.5));
const gapGraph = {fn: x => x + 1, x: [-2, 3], y: [-2, 4], markers: [{x: 0.713, y: 1.713, kind: 'hole'}]};
assert.equal(k.sampleFunction(gapGraph).length, 2);
assert.ok(k.sampleFunction(gapGraph).every(line => !(line[0].x < 0.713 && line.at(-1).x > 0.713)));
assert.equal(k.sampleFunction(k.derivativeSpec(gapGraph, () => 1, [-2, 2])).length, 2);
const replacement = {...gapGraph, fn: x => x === 0.713 ? 3 : x + 1, markers: [...gapGraph.markers, {x: 0.713, y: 3, kind: 'included'}]};
assert.equal(k.inDomain(replacement, 0.713), true);
assert.ok(k.sampleFunction(replacement).every(line => line.every(p => p.x !== 0.713)));
const endpoints = {...gapGraph, domain: [{from: -1, to: 2, includeFrom: true, includeTo: false}], markers: []};
assert.deepEqual(k.endpointMarkers(endpoints).map(m => m.kind), ['included', 'excluded']);
assert.equal(k.inDomain(endpoints, -1), true); assert.equal(k.inDomain(endpoints, 2), false);
const corner = {...gapGraph, fn: Math.abs, markers: [{x: 0, y: 0, kind: 'corner'}]};
const cornerDerivative = k.derivativeSpec(corner, x => x < 0 ? -1 : 1, [-2, 2]);
assert.equal(k.inDomain(cornerDerivative, 0), false); assert.equal(k.sampleFunction(cornerDerivative).length, 2);
const signs = k.signIntervals(examples.quotientGraph, examples.quotientDerivative, [{x: -1, kind: 'excluded'}, {x: 0, kind: 'zero'}]);
assert.deepEqual(signs.map(v => v.sign), [-1, -1, 1]);
assert.ok(signs.every(v => !(v.from < -1 && v.to > -1)));
assert.deepEqual(k.radianTicks(0, 2 * Math.PI).map(t => t.label), ['0', 'π/2', 'π', '3π/2', '2π']);
for (const x of [0, Math.PI / 2, Math.PI, 3 * Math.PI / 2, 2 * Math.PI]) near(Math.cos(x), [1, 0, -1, 0, 1][Math.round(x / (Math.PI / 2))]);
// Addendum: each carried attachment uses the same mathematical mapping.
for (const move of [{xScale: 0.5}, {xShift: -1}, {yScale: 3}, {xScale: -0.5}]) {
 const original = {...examples.exponentialGraph, fn: Math.exp, domain: [{from: -2, to: 2, includeFrom: true, includeTo: false}]};
 const moved = k.transformedGraph(original, move);
 for (const x of [-1, 0, 1]) {
  const p = k.carriedPoint(x, Math.exp(x), move);
  near(moved.fn(p.x), p.y);
  const h = 1e-5;
  near((moved.fn(p.x+h)-moved.fn(p.x-h))/(2*h), k.carriedSlope(Math.exp(x), move));
 }
}
assert.throws(() => k.carriedSlope(1, {xScale: 0}));
near(k.carriedSlope(Math.E, {xScale: 0.5}), 2*Math.E);
near(k.carriedSlope(1, {xScale: -0.5}), -2);
// Brief132: independent reflection endpoint, continuity and triangle checks.
for(const height of [0.5,2,4]) {
 const p={x:Math.log(height),y:height};
 const end=k.reflectPoint(p,1);near(end.x,height);near(end.y,Math.log(height));
 for(let i=0;i<=100;i++) {const s=i/100,q=k.reflectPoint(p,s),d=k.reflectDirection(height,s);near(q.x,(1-s)*p.x+s*p.y);near(q.y,(1-s)*p.y+s*p.x);assert.ok(d.x>0&&d.y>0);if(i===50)near(q.x,q.y);if(i===100)near(d.y/d.x,1/height);}
 near((k.reflectPoint({x:p.x+1,y:p.y},1).y-end.y),1);
 near(k.reflectPoint({x:p.x+1,y:p.y+height},1).x-k.reflectPoint({x:p.x+1,y:p.y},1).x,height);
}
const squareUnits=k.graphTransform({x:[-3,5],y:[-3,5],width:746,height:740});near(squareUnits.sx,squareUnits.sy);
for(const x of [.5,2,4])for(const c of [1,2,3])near((Math.log(c*(x+1e-5))-Math.log(c*(x-1e-5)))/2e-5,1/x,1e-7);
// Brief133: limits exclude singular values; fold annotations hide around zero.
for(let frame=0;frame<331;frame++) {const a=k.limitedParameter(10-8.9*frame/110,1.1,10,[1]);assert.ok(a>=1.1&&a<=10&&a!==1);near(1/Math.log(a),1/Math.log(a));const scale=(1-2*frame/330)/Math.log(2);assert.equal(k.foldAnnotationsVisible(scale),Math.abs(scale)>.08);near(k.carriedSlope(.5,{yScale:scale}),scale*.5);}
near(k.limitedParameter(0,1.1,10,[1]),1.1);near(1/Math.log(1.1),10.492058687257);
assert.throws(()=>k.limitedParameter(2,.5,3,[1]));assert.throws(()=>k.limitedParameter(NaN,1.1,10,[1]));
assert.equal(k.foldAnnotationsVisible(0),false);assert.equal(k.foldAnnotationsVisible(.01),false);assert.equal(k.foldAnnotationsVisible(-1),true);
// Legacy API checks as well as the new model.
near(k.square(2), 4); near(k.squareSlope(2), 4); near(k.tangentAt(2, 3), 8);
for (const file of ['kit.tsx', 'graphs.tsx', 'algebra.tsx', 'calculus-examples.ts', 'calculus-pilot.tsx', 'calculus-pilot-entry.tsx']) assert.ok(!fs.readFileSync(path.join(ROOT, 'src/explainer/math', file), 'utf8').includes('\u2014'), `Em dash: ${file}`);
fs.writeFileSync(path.join(base, 'math-check.json'), JSON.stringify({status: 'passed', assertions, sampledPlottedValues: sampled, finiteDifferences: 'All five plotted function families', secants: '300 states, small separation and zero denominator regressions', domainChecks: 'Log positive domain, quotient gap, off-grid hole, derivative gap and corner', signIntervals: signs, radianSlopes: [1, 0, -1, 0, 1], optimisation: {candidates: ['1/2', '2', '4'], values: ['17/2', '4', '5']}, legacy: 'Square model retained'}, null, 2) + '\n');
console.log(`Maths passed: ${sampled} plotted values, ${assertions} numeric assertions plus domain and regression checks.`);
if (process.argv.includes('--check-only')) process.exit(0);

// Shared directory lock, the same protocol as the other explainer render queue.
try {fs.mkdirSync(lock);} catch (e) {if (e.code === 'EEXIST') throw new Error('Shared stills lock is occupied. Retry after the current render finishes.'); throw e;}
fs.writeFileSync(path.join(lock, 'owner.json'), JSON.stringify({brief: 129, pid: process.pid, started: new Date().toISOString()}));
let browser;
const bundleDir = path.join(base, 'bundle');
try {
	for (const rel of FONTS) {const dst = path.join(publicDir, rel); fs.mkdirSync(path.dirname(dst), {recursive: true}); fs.copyFileSync(path.join(ROOT, 'public', rel), dst);}
	const serveUrl = await bundle({entryPoint: path.join(ROOT, 'src/explainer/math/calculus-pilot-entry.tsx'), publicDir, outDir: bundleDir});
	browser = await openBrowser('chrome');
	const composition = await selectComposition({serveUrl, id: 'MathsAdvanced-Calculus-Kit-Pilot', puppeteerInstance: browser});
	const frames = process.argv.includes('--dial-fold-only') ? [2460,2555,2605,2650,2695,2735] : process.argv.includes('--reflection-only') ? [2195,2220,2245,2270,2295,2385] : [100, 260, 440, 600, 765, 900, 1075, 1210, 1285, 1400, 1660, 1770, 1860, 1940, 2030, 2130];
	if (!process.argv.includes('--video-only')) for (const frame of frames) for (const [name, scale] of [['desktop', 1], ['phone-landscape', 844 / 1920]]) {
		await renderStill({serveUrl, composition, puppeteerInstance: browser, frame, scale, output: path.join(base, `${name}-f${frame}.png`), imageFormat: 'png'});
		console.log(`Still ${name} ${frame}`);
	}
	if (process.argv.includes('--dial-fold-only')) {
 await renderMedia({serveUrl,composition,puppeteerInstance:browser,codec:'h264',crf:20,concurrency:1,muted:true,frameRange:[2430,2759],outputLocation:path.join(base,'brief133-dial-fold-pilot.mp4')});
 }
 if (process.argv.includes('--reflection-only')) {
 await renderMedia({serveUrl,composition,puppeteerInstance:browser,codec:'h264',crf:20,concurrency:1,muted:true,frameRange:[2160,2429],outputLocation:path.join(base,'brief132-reflection-pilot.mp4')});
 }
 if (!process.argv.includes('--stills-only') && !process.argv.includes('--reflection-only') && !process.argv.includes('--dial-fold-only')) {
		// The shared font loader can stall in a long-lived render tab. Use a fresh
		// browser per six-second chunk, then join the silent H.264 streams exactly.
		await browser.close({silent: true}); browser = undefined;
		const chunks = path.join(base, 'chunks'); fs.mkdirSync(chunks, {recursive: true});
		const outputs = [];
		const rerenderArg = process.argv.find(arg => arg.startsWith('--rerender-from='));
		const rerenderFrom = rerenderArg ? Number(rerenderArg.split('=')[1]) : 0;
		assert.ok(Number.isInteger(rerenderFrom) && rerenderFrom >= 0 && rerenderFrom % 180 === 0, 'Rerender boundary must be a chunk start. Use only when preceding scene source is unchanged.');
		for (let start = 0; start < composition.durationInFrames; start += 180) {
			const end = Math.min(start + 179, composition.durationInFrames - 1), out = path.join(chunks, `f${start}.mp4`);
			if (start < rerenderFrom) {assert.ok(fs.existsSync(out), 'Missing unchanged prefix chunk: ' + out); outputs.push(out); continue;}
			for (let attempt = 1; attempt <= 3; attempt++) {
				try {
					browser = await openBrowser('chrome');
					await renderMedia({serveUrl, composition, puppeteerInstance: browser, codec: 'h264', crf: 20, concurrency: 1, muted: true, frameRange: [start, end], outputLocation: out});
					break;
				} catch (e) {console.log(`Chunk ${start} attempt ${attempt}: ${String(e.message).slice(0, 120)}`); if (attempt === 3) throw e;}
				finally {if (browser) {await browser.close({silent: true}); browser = undefined;}}
			}
			outputs.push(out); console.log(`Chunk ${start} to ${end} passed.`);
		}
		const list = path.join(chunks, 'concat.txt'); fs.writeFileSync(list, outputs.map(f => `file '${f.replaceAll('\\', '/').replaceAll("'", "'\\''")}'`).join('\n'));
		const final = path.join(base, 'maths-calculus-kit-pilot.mp4');
		execFileSync(FFMPEG, ['-y', '-v', 'error', '-f', 'concat', '-safe', '0', '-i', list, '-map', '0:v:0', '-an', '-c:v', 'copy', '-movflags', '+faststart', final], {windowsHide: true});
		const probe = JSON.parse(execFileSync(path.join(path.dirname(FFMPEG), 'ffprobe.exe'), ['-v', 'error', '-show_streams', '-show_format', '-of', 'json', final], {encoding: 'utf8', windowsHide: true}));
		assert.equal(probe.streams.length, 1); assert.equal(probe.streams[0].codec_type, 'video');
		assert.equal(Number(probe.streams[0].nb_frames), composition.durationInFrames); near(Number(probe.format.duration), composition.durationInFrames/composition.fps);
		assert.equal(probe.streams[0].width, 1920); assert.equal(probe.streams[0].height, 1080);
		execFileSync(FFMPEG, ['-v', 'error', '-i', final, '-c:v', 'rawvideo', '-threads', '1', '-f', 'null', '-'], {windowsHide: true});
		fs.writeFileSync(path.join(base, 'media-check.json'), JSON.stringify({status: 'passed', frames: composition.durationInFrames, fps: probe.streams[0].r_frame_rate, duration: probe.format.duration, width: 1920, height: 1080, audioStreams: 0, fullDecode: 'passed', chunks: outputs.length}, null, 2) + '\n');
		console.log(`${composition.durationInFrames/composition.fps}-second silent pilot rendered.`);
	}
	fs.writeFileSync(path.join(base, 'render-manifest.json'), JSON.stringify({composition: composition.id, frames: composition.durationInFrames, fps: composition.fps, desktop: [1920, 1080], phoneLandscape: [844, 475], stillFrames: frames, concurrency: 1, muted: true}, null, 2) + '\n');
} finally {
	if (browser) await browser.close({silent: true});
	// Only remove this script's known temporary bundle, inside this output directory.
	if (path.dirname(path.resolve(bundleDir)) !== path.resolve(base)) throw new Error('Unexpected bundle cleanup path');
	fs.rmSync(bundleDir, {recursive: true, force: true});
	fs.unlinkSync(path.join(lock, 'owner.json')); fs.rmdirSync(lock);
}
