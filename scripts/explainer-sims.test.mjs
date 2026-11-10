// node scripts/explainer-sims.test.mjs   (or: npm run test:explainer-sims)
// Physics sanity checks for the simulation engines in src/explainer/sims, and the
// colour-contrast guarantee of src/explainer/shared/tokens.ts.
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {pathToFileURL, fileURLToPath} from 'node:url';
import {build} from 'esbuild';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const load = async rel => {
	const outfile = path.join(os.tmpdir(), `explainer-sim-test-${process.pid}-${path.basename(rel)}.mjs`);
	await build({entryPoints: [path.join(ROOT, rel)], outfile, bundle: true, platform: 'node', format: 'esm', logLevel: 'silent'});
	try { return await import(pathToFileURL(outfile).href); } finally { fs.rmSync(outfile, {force: true}); }
};
const box = await load('src/explainer/sims/particle-box.ts');
const motion = await load('src/explainer/sims/field-motion.ts');
const tokens = await load('src/explainer/shared/tokens.ts');
const mean = (arr, from, to) => { let s = 0; for (let i = from; i < to; i++) s += arr[i]; return s / (to - from); };
const gas = extra => ({seed: 7, frames: 900, w: 600, h: 400, species: [{id: 'A', r: 3}], initial: [{species: 'A', count: 160}], ...extra});

test('the same config always gives the same run', () => {
	const a = box.runBox(gas({frames: 200})), b = box.runBox(gas({frames: 200}));
	assert.deepEqual(Array.from(a.x.slice(-240)), Array.from(b.x.slice(-240)));
	const c = box.runBox(gas({frames: 200, seed: 8}));
	assert.notDeepEqual(Array.from(a.x.slice(-240)), Array.from(c.x.slice(-240)));
});

test('particles stay in the box and none are lost', () => {
	const run = box.runBox(gas());
	for (let f = 0; f < run.frames; f += 50) for (let i = 0; i < run.slots; i++) {
		if (run.sp[f * run.slots + i] < 0) continue;
		const x = run.x[f * run.slots + i], y = run.y[f * run.slots + i];
		assert.ok(x >= 0 && x <= 600 && y >= 0 && y <= 400, `particle outside at frame ${f}`);
	}
	assert.equal(run.counts[0][0], 160);
	assert.equal(run.counts[0][899], 160);
});

test('pressure sits near 1 at the start conditions and temperature holds', () => {
	const run = box.runBox(gas());
	assert.ok(Math.abs(mean(run.pressure, 300, 900) - 1) < 0.2, `pressure ${mean(run.pressure, 300, 900)}`);
	assert.ok(Math.abs(mean(run.temperature, 300, 900) - 1) < 0.08);
});

test('halving the volume about doubles the pressure (Boyle)', () => {
	const run = box.runBox(gas({frames: 1200, volume: [[200, 1], [500, 0.5]]}));
	const before = mean(run.pressure, 100, 200), after = mean(run.pressure, 800, 1200);
	assert.ok(after / before > 1.6 && after / before < 2.5, `ratio ${after / before}`);
	assert.ok(Math.abs(run.wallX[1199] - 300) < 1);
});

test('doubling the temperature about doubles the pressure (Gay-Lussac)', () => {
	const run = box.runBox(gas({frames: 1200, temperature: [[200, 1], [500, 2]]}));
	const ratio = mean(run.pressure, 800, 1200) / mean(run.pressure, 100, 200);
	assert.ok(ratio > 1.6 && ratio < 2.5, `ratio ${ratio}`);
	assert.ok(Math.abs(mean(run.temperature, 800, 1200) - 2) < 0.15);
});

const reversible = extra => ({seed: 3, frames: 2400, w: 700, h: 420, species: [{id: 'A', r: 9}, {id: 'B', r: 9}, {id: 'AB', r: 12, mass: 2}],
	initial: [{species: 'A', count: 60}, {species: 'B', count: 60}],
	reactions: [{from: ['A', 'B'], to: ['AB'], ea: 1.2}, {from: ['AB'], to: ['A', 'B'], rate: 0.12}], ...extra});

test('a reversible reaction settles to a steady mixture while both reactions keep going', () => {
	const run = box.runBox(reversible());
	const ab = run.counts[2];
	assert.ok(ab[0] <= 2);
	const early = mean(ab, 1200, 1800), late = mean(ab, 1800, 2400);
	assert.ok(late > 8 && late < 55, `AB settles at ${late}`);
	assert.ok(Math.abs(early - late) < 6, `still drifting: ${early} to ${late}`);
	assert.ok(box.rateAt(run, 0, 2399, 600) > 0.3 && box.rateAt(run, 1, 2399, 600) > 0.3, 'both directions still running');
	assert.ok(Math.abs(box.rateAt(run, 0, 2399, 600) - box.rateAt(run, 1, 2399, 600)) < 0.6, 'forward and reverse rates match');
	// atoms are conserved: A + AB is constant
	for (const f of [0, 700, 2399]) assert.equal(run.counts[0][f] + run.counts[2][f], 60);
});

test('adding a reactant shifts the mixture towards product', () => {
	const run = box.runBox(reversible({frames: 3600, inject: [{at: 1800, species: 'A', count: 50}]}));
	assert.ok(mean(run.counts[2], 3000, 3600) > mean(run.counts[2], 1200, 1800) + 3);
});

test('a higher activation energy makes fewer collisions succeed', () => {
	const count = ea => { const run = box.runBox(reversible({frames: 600, reactions: [{from: ['A', 'B'], to: ['AB'], ea}]})); return run.reacted[0][599]; };
	const easy = count(0.5), hard = count(4);
	assert.ok(easy > hard * 1.5, `easy ${easy}, hard ${hard}`);
	const run = box.runBox(reversible({frames: 600, reactions: [{from: ['A', 'B'], to: ['AB'], ea: 4}]}));
	assert.ok(run.events.some(e => !e.ok) && run.events.some(e => e.ok), 'records failed and successful collisions');
});

test('a membrane lets only the listed species spread to the other side', () => {
	const run = box.runBox({seed: 5, frames: 3000, w: 700, h: 400, species: [{id: 'water', r: 7}, {id: 'solute', r: 12, mass: 3}],
		initial: [{species: 'water', count: 80, region: 'left'}, {species: 'solute', count: 20, region: 'right'}], membrane: {x: 0.5, passes: ['water']}});
	assert.equal(run.left[0][0], 80);
	assert.ok(Math.abs(mean(run.left[0], 2400, 3000) - 40) < 12, `water left: ${mean(run.left[0], 2400, 3000)}`);
	assert.equal(run.left[1][2999], 0);
});

test('timelines ease between keys and hold at the ends', () => {
	assert.equal(box.timelineAt([[10, 1], [20, 3]], 0), 1);
	assert.equal(box.timelineAt([[10, 1], [20, 3]], 15), 2);
	assert.equal(box.timelineAt([[10, 1], [20, 3]], 99), 3);
	assert.equal(box.timelineAt(undefined, 5), 1);
});

// ---- field motion ----
test('a projectile matches the textbook range, height and flight time', () => {
	const g = 9.8, u = 20, angle = 35 * Math.PI / 180;
	const path = motion.runMotion({field: {kind: 'uniform', ax: 0, ay: -g}, start: {x: 0, y: 0, vx: u * Math.cos(angle), vy: u * Math.sin(angle)}, duration: 2 * u * Math.sin(angle) / g, steps: 400});
	const end = motion.stateAt(path, path.duration), top = motion.stateAt(path, path.duration / 2);
	assert.ok(Math.abs(end.x - (u * u * Math.sin(2 * angle)) / g) < 0.02, `range ${end.x}`);
	assert.ok(Math.abs(end.y) < 0.02);
	assert.ok(Math.abs(top.y - (u * Math.sin(angle)) ** 2 / (2 * g)) < 0.02);
	assert.ok(Math.abs(top.vy) < 0.02 && Math.abs(top.vx - u * Math.cos(angle)) < 1e-6, 'horizontal velocity never changes');
});

test('a circular orbit keeps its radius and speed, and closes after one period', () => {
	const GM = 4e14, r = 7e6, v = Math.sqrt(GM / r), period = 2 * Math.PI * r / v;
	const path = motion.runMotion({field: {kind: 'central', gm: GM}, start: {x: r, y: 0, vx: 0, vy: v}, duration: period, steps: 2000});
	for (const u of [0.25, 0.5, 0.8, 1]) {
		const s = motion.stateAt(path, period * u);
		assert.ok(Math.abs(Math.hypot(s.x, s.y) / r - 1) < 1e-3);
		assert.ok(Math.abs(s.speed / v - 1) < 1e-3);
	}
	const end = motion.stateAt(path, period);
	assert.ok(Math.hypot(end.x - r, end.y) / r < 5e-3);
});

test('an elliptical orbit conserves energy and sweeps equal areas', () => {
	const GM = 1, path = motion.runMotion({field: {kind: 'central', gm: GM}, start: {x: 1, y: 0, vx: 0, vy: 1.2}, duration: 12, steps: 6000});
	const energy = t => { const s = motion.stateAt(path, t); return 0.5 * s.speed ** 2 - GM / Math.hypot(s.x, s.y); };
	assert.ok(Math.abs(energy(11) - energy(0)) < 1e-4);
	const L = t => { const s = motion.stateAt(path, t); return s.x * s.vy - s.y * s.vx; };
	assert.ok(Math.abs(L(9) - L(1)) < 1e-4);
});

test('a charge in a magnetic field circles with radius mv / qB and constant speed', () => {
	const q = 1.6e-19, m = 9.11e-31, B = 2e-3, v = 3e6, r = (m * v) / (q * B);
	const period = (2 * Math.PI * m) / (q * B);
	const path = motion.runMotion({field: {kind: 'magnetic', qOverM: q / m, b: B}, start: {x: 0, y: 0, vx: v, vy: 0}, duration: period, steps: 2000});
	let maxY = 0;
	for (let i = 0; i <= 200; i++) { const s = motion.stateAt(path, (period * i) / 200); maxY = Math.max(maxY, Math.abs(s.y)); assert.ok(Math.abs(s.speed / v - 1) < 1e-3); }
	assert.ok(Math.abs(maxY / (2 * r) - 1) < 5e-3, `diameter ${maxY} against ${2 * r}`);
});

test('a charge between plates follows a parabola: deflection = qE t^2 / 2m', () => {
	const a = 1.76e11 * 500, v = 2e6, t = 2e-8;
	const path = motion.runMotion({field: {kind: 'uniform', ax: 0, ay: a}, start: {x: 0, y: 0, vx: v, vy: 0}, duration: t, steps: 200});
	const end = motion.stateAt(path, t);
	assert.ok(Math.abs(end.y / (0.5 * a * t * t) - 1) < 1e-6);
	assert.ok(Math.abs(end.x / (v * t) - 1) < 1e-9);
});

// ---- tokens ----
test('every tone ink is readable on paper and on cards', () => {
	for (const [name, t] of Object.entries(tokens.TONES)) {
		assert.ok(tokens.contrast(t.ink, tokens.PAPER) >= 4.5, `${name} on paper: ${tokens.contrast(t.ink, tokens.PAPER).toFixed(2)}`);
		assert.ok(tokens.contrast(t.ink, tokens.CARD) >= 4.5, `${name} on card: ${tokens.contrast(t.ink, tokens.CARD).toFixed(2)}`);
	}
	for (const [name, c] of Object.entries(tokens.SUBJECT_ACCENT)) assert.ok(tokens.contrast(c, tokens.PAPER) >= 4.5, name);
	assert.equal(tokens.readable(12), tokens.TYPE.min);
});
