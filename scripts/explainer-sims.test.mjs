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

// ------------------------------------------------------------------- chance
const chance = await load('src/explainer/sims/chance.ts');
const waves = await load('src/explainer/sims/waves.ts');
const near = (a, b, tol, msg) => assert.ok(Math.abs(a - b) <= tol, `${msg ?? 'value'}: ${a} is not within ${tol} of ${b}`);

test('chance: exact probabilities are right and add to 1', () => {
	const two = chance.exactDistribution({kind: 'dice'});
	assert.deepEqual(two.values, [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
	near(two.theory[5], 6 / 36, 1e-12, 'P(total 7)');
	near(two.theory[0], 1 / 36, 1e-12, 'P(total 2)');
	const coins = chance.exactDistribution({kind: 'coins', coins: 10, p: 0.3});
	near(coins.theory.reduce((s, p) => s + p, 0), 1, 1e-12, 'binomial total');
	near(coins.theory[3], 120 * 0.3 ** 3 * 0.7 ** 7, 1e-12, 'P(3 of 10)');
	const cross = chance.exactDistribution({kind: 'weighted', outcomes: [{label: 'tall', weight: 3}, {label: 'short', weight: 1}]});
	assert.deepEqual(cross.theory, [0.75, 0.25]);
});

test('chance: the same seed gives the same trials, and the tally closes in on the exact answer', () => {
	const config = {seed: 21, trials: 20000, experiment: {kind: 'dice'}};
	const a = chance.runTrials(config), b = chance.runTrials(config);
	assert.deepEqual(Array.from(a.outcome.slice(0, 200)), Array.from(b.outcome.slice(0, 200)));
	assert.equal(chance.tallyAfter(a, 20000).reduce((s, c) => s + c, 0), 20000);
	for (let v = 0; v < a.values.length; v++) near(chance.shareAfter(a, v, 20000), a.theory[v], 0.012, `share of total ${a.values[v]}`);
	near(chance.meanAfter(a, 20000), 7, 0.06, 'mean of two dice');
	near(a.mean, 7, 1e-12, 'exact mean');
	const seven = chance.eventOf(a, v => v === 7);
	near(seven.probability, 1 / 6, 1e-12, 'event probability');
	near(seven.share[20000], chance.shareAfter(a, 5, 20000), 1e-6, 'event share matches the tally');
	const parts = chance.partsOf(a, 1);
	assert.equal(parts.length, 2);
	assert.equal(parts[0] + parts[1], a.values[a.outcome[0]]);
});

test('chance: binomial mean and spread, and a 3 to 1 cross', () => {
	const run = chance.runTrials({seed: 5, trials: 8000, experiment: {kind: 'coins', coins: 12, p: 0.25}});
	near(run.mean, 3, 1e-9, 'np');
	near(run.sd, Math.sqrt(12 * 0.25 * 0.75), 1e-9, 'sqrt(npq)');
	near(chance.meanAfter(run, 8000), 3, 0.06, 'sample mean');
	const cross = chance.runTrials({seed: 9, trials: 4000, experiment: {kind: 'weighted', outcomes: [{label: 'tall', weight: 3}, {label: 'short', weight: 1}]}});
	near(chance.shareAfter(cross, 0, 4000), 0.75, 0.02, 'share tall');
});

test('chance: the pace never goes backwards and shows every trial by the end', () => {
	const run = chance.runTrials({seed: 1, trials: 3000, experiment: {kind: 'dice'}});
	const pace = {at: 30, slow: 5, every: 20, until: 300};
	assert.equal(chance.trialsShown(run, 29, pace), 0);
	assert.equal(chance.trialsShown(run, 30, pace), 1);
	assert.equal(chance.trialsShown(run, 30 + 4 * 20, pace), 5);
	let last = 0;
	for (let f = 0; f <= 320; f++) { const k = chance.trialsShown(run, f, pace); assert.ok(k >= last, `went backwards at frame ${f}`); last = k; }
	assert.equal(chance.trialsShown(run, 300, pace), 3000);
});

// -------------------------------------------------------------------- waves
test('waves: a travelling wave repeats every wavelength and every period, and moves at wavelength / period', () => {
	const w = {amplitude: 0.2, wavelength: 1.5, period: 0.4};
	near(waves.displacement(w, 0.37, 0.11), waves.displacement(w, 0.37 + 1.5, 0.11), 1e-12, 'one wavelength on');
	near(waves.displacement(w, 0.37, 0.11), waves.displacement(w, 0.37, 0.11 + 0.4), 1e-12, 'one period on');
	near(waves.waveSpeed(w), 3.75, 1e-12, 'speed');
	near(waves.displacement(w, 0.37, 0.11), waves.displacement(w, 0.37 + 3.75 * 0.05, 0.16), 1e-12, 'shape carried along at the wave speed');
	const back = {...w, direction: -1};
	near(waves.displacement(back, 0.37, 0.11), waves.displacement(back, 0.37 - 3.75 * 0.05, 0.16), 1e-12, 'backward wave');
	assert.equal(waves.displacement({...w, front: true}, 2, 0.1), 0);
});

test('waves: two equal opposite waves make a standing wave with still nodes', () => {
	const L = 1.2, mode = waves.standingMode(L, 3);
	near(mode.wavelength, 0.8, 1e-12, 'third harmonic wavelength');
	assert.equal(mode.nodes.length, 4);
	assert.equal(mode.antinodes.length, 3);
	const right = {amplitude: 0.1, wavelength: mode.wavelength, period: 0.5}, left = {...right, direction: -1, phase: Math.PI};
	for (const t of [0, 0.07, 0.19, 0.33]) {
		for (const x of mode.nodes) near(waves.sumAt([right, left], x, t), 0, 1e-9, `node at ${x}`);
		near(Math.abs(waves.sumAt([right, left], mode.antinodes[0], t)), Math.abs(waves.standingAt(mode, 0.2, 0.5, mode.antinodes[0], t)), 1e-9, 'antinode size');
	}
	const pipe = waves.standingMode(0.6, 3, 'closed-open');
	near(pipe.wavelength, 0.8, 1e-12, 'closed pipe third harmonic');
	near(pipe.antinodes[pipe.antinodes.length - 1], 0.6, 1e-9, 'antinode at the open end');
	assert.equal(pipe.nodes[0], 0);
	assert.throws(() => waves.standingMode(0.6, 2, 'closed-open'));
	const open = waves.standingMode(0.6, 1, 'open-open');
	assert.deepEqual(open.nodes.map(n => +n.toFixed(6)), [0.3]);
});

test('waves: two sources reinforce where the path difference is a whole number of wavelengths', () => {
	const a = {x: 0, y: 0.1}, b = {x: 0, y: -0.1}, lambda = 0.05;
	const mid = waves.interferenceAt(a, b, 1, 0, lambda);
	near(mid.pathDifference, 0, 1e-12, 'centre line');
	assert.equal(mid.kind, 'reinforce');
	// find a point on the screen x = 1 where the path difference is half a wavelength
	let lo = 0, hi = 0.3;
	for (let i = 0; i < 60; i++) { const y = (lo + hi) / 2; if (waves.pathDifference(a, b, 1, y) < lambda / 2) lo = y; else hi = y; }
	const dark = waves.interferenceAt(a, b, 1, lo, lambda);
	near(dark.wavelengths, 0.5, 1e-6, 'half a wavelength');
	assert.equal(dark.kind, 'cancel');
	// the medium really is still there, and lively on the centre line
	let still = 0, lively = 0;
	for (let i = 0; i < 40; i++) { const t = i * 0.01; still = Math.max(still, Math.abs(waves.fieldAt([a, b], lambda, 0.4, 1, lo, t))); lively = Math.max(lively, Math.abs(waves.fieldAt([a, b], lambda, 0.4, 1, 0, t))); }
	assert.ok(still < 0.01 && lively > 1.9, `still ${still}, lively ${lively}`);
	const bright = waves.brightAngles(0.2, 0.05);
	assert.equal(bright.length, 9);
	near(Math.sin(bright[5].angle), 0.25, 1e-12, 'first bright line');
	near(waves.doubleSlitBrightness(0.2, 0.05, bright[6].angle), 1, 1e-9, 'bright');
	near(waves.doubleSlitBrightness(0.2, 0.05, waves.darkAngles(0.2, 0.05)[4].angle), 0, 1e-9, 'dark');
});

test('waves: crests crowd in front of a moving source, and the Doppler formula matches the spacing', () => {
	const v = 340, vs = 85, T = 0.01;
	const fronts = waves.wavefronts({source: t => [vs * t, 0], speed: v, period: T, t: 0.1});
	assert.equal(fronts.length, 11);
	const ahead = fronts.map(c => c.x + c.r), behind = fronts.map(c => c.x - c.r);
	near(ahead[0] - ahead[1], (v - vs) * T, 1e-9, 'spacing in front');
	near(behind[1] - behind[0], (v + vs) * T, 1e-9, 'spacing behind');
	near(waves.dopplerFrequency({frequency: 100, waveSpeed: v, sourceSpeed: vs}), v / ((v - vs) * T), 1e-9, 'heard in front');
	near(waves.dopplerFrequency({frequency: 100, waveSpeed: v, sourceSpeed: -vs}), 80, 1e-9, 'heard behind');
});

const titr = await load('src/explainer/sims/titration.ts');
const circ = await load('src/explainer/sims/circuits.ts');

test('titration: strong acid with strong base starts at pH 1, meets at pH 7 and mirrors after', () => {
	const t = {analyte: {kind: 'acid', concentration: 0.1, volume: 25}, titrant: {kind: 'base', concentration: 0.1}};
	near(titr.phAt(t, 0), 1, 1e-6, 'start');
	near(titr.equivalenceVolume(t), 25, 1e-12, 'equivalence volume');
	near(titr.equivalencePoint(t).pH, 7, 1e-6, 'equivalence pH');
	near(titr.phAt(t, 24.95), 4, 0.01, 'one drop before');
	near(titr.phAt(t, 25.05), 10, 0.01, 'one drop after');
	let last = -Infinity;
	for (let v = 0; v <= 50; v += 0.25) { const pH = titr.phAt(t, v); assert.ok(pH > last, 'pH rises all the way'); last = pH; }
	assert.equal(titr.halfEquivalence(t), null);
	assert.throws(() => titr.phAt({analyte: {kind: 'acid', concentration: 0.1, volume: 25}, titrant: {kind: 'acid', concentration: 0.1}}, 1));
});

test('titration: a weak acid starts higher, buffers at pH = pKa and ends above 7', () => {
	const t = {analyte: {kind: 'acid', concentration: 0.1, k: 1.8e-5, volume: 25}, titrant: {kind: 'base', concentration: 0.1}};
	near(titr.phAt(t, 0), 2.875, 0.005, 'start');
	const half = titr.halfEquivalence(t);
	near(half.volume, 12.5, 1e-12, 'half volume');
	near(half.pKa, 4.745, 0.001, 'pKa');
	near(half.pH, half.pKa, 0.01, 'pH = pKa half-way');
	near(titr.equivalencePoint(t).pH, 8.72, 0.01, 'equivalence pH');
	const m = titr.mixtureAt(t, 12.5);
	near(m.acid.molecule / m.acid.ion, 1, 0.01, 'equal amounts of the two forms');
	near(m.h + m.base.ion, m.oh + m.acid.ion, 1e-9, 'charges balance');
	assert.equal(titr.indicatorFit(t, titr.INDICATORS.phenolphthalein).suits, true);
	assert.equal(titr.indicatorFit(t, titr.INDICATORS.methylOrange).suits, false);
	assert.ok(titr.indicatorFit(t, titr.INDICATORS.methylOrange).early > 5, 'methyl orange finishes changing far too early');
	assert.ok(Math.abs(titr.indicatorFit(t, titr.INDICATORS.phenolphthalein).early) < 0.1);
});

test('titration: a weak base with a strong acid falls and ends below 7', () => {
	const t = {analyte: {kind: 'base', concentration: 0.1, k: 1.8e-5, volume: 25}, titrant: {kind: 'acid', concentration: 0.1}};
	near(titr.phAt(t, 0), 11.125, 0.005, 'start');
	near(titr.equivalencePoint(t).pH, 5.28, 0.01, 'equivalence pH');
	near(titr.halfEquivalence(t).pH, 9.255, 0.01, 'half-way');
	assert.ok(titr.phAt(t, 30) < titr.phAt(t, 20));
	assert.equal(titr.indicatorFit(t, titr.INDICATORS.methylOrange).suits, true);
	assert.equal(titr.indicatorFit(t, titr.INDICATORS.phenolphthalein).suits, false);
	near(titr.volumeAtPh(t, 9.255), 12.5, 0.02, 'volume at a pH');
	const strong = {analyte: {kind: 'acid', concentration: 0.1, volume: 25}, titrant: {kind: 'base', concentration: 0.1}};
	for (const name of ['methylOrange', 'bromothymolBlue', 'phenolphthalein']) assert.equal(titr.indicatorFit(strong, titr.INDICATORS[name]).suits, true, name);
});

test('titration: conductivity is lowest at equivalence for strong with strong, and pouring follows its keyframes', () => {
	const t = {analyte: {kind: 'acid', concentration: 0.1, volume: 25}, titrant: {kind: 'base', concentration: 0.1}};
	let best = 0, low = Infinity;
	for (let v = 0; v <= 50; v += 0.05) { const c = titr.conductivityAt(t, v); if (c < low) { low = c; best = v; } }
	near(best, 25, 0.06, 'minimum at equivalence');
	near(titr.conductivityAt(t, 0), 0.1 * (349.8 + 76.3), 0.01, 'start: H+ and Cl-');
	near(low, 0.05 * (50.1 + 76.3), 0.01, 'equivalence: Na+ and Cl- only');
	const pour = [[10, 0], [110, 20], [210, 25]];
	assert.equal(titr.addedAt(pour, 0), 0);
	near(titr.addedAt(pour, 60), 10, 1e-12, 'half-way through the first stretch');
	assert.equal(titr.addedAt(pour, 500), 25);
	near(titr.flowAt(pour, 60), 0.2, 1e-9, 'fast stretch');
	near(titr.flowAt(pour, 160), 0.05, 1e-9, 'slow stretch');
	assert.equal(titr.flowAt(pour, 400), 0);
	near(titr.indicatorShare(titr.INDICATORS.bromothymolBlue, 6.8), 0.5, 1e-9, 'half changed');
	assert.equal(titr.cssColour(titr.indicatorColour(titr.INDICATORS.phenolphthalein, 5)), 'rgba(214,54,143,0.000)');
});

test('circuits: series shares the voltage, parallel shares the current', () => {
	const series = circ.solveCircuit([
		{id: 'b', kind: 'battery', from: 'N', to: 'P', emf: 12},
		{id: 'r1', kind: 'resistor', from: 'P', to: 'm', r: 2},
		{id: 'r2', kind: 'resistor', from: 'm', to: 'N', r: 4},
		{id: 'v', kind: 'voltmeter', from: 'm', to: 'N'},
	]);
	near(series.current.b, 2, 1e-6, 'battery current');
	near(series.current.r1, 2, 1e-6, 'same current');
	near(series.drop.r1, 4, 1e-6, 'smaller share');
	near(series.drop.r2, 8, 1e-6, 'larger share');
	near(series.drop.v, 8, 1e-6, 'voltmeter');
	assert.equal(series.current.v, 0);
	near(series.power.r2, 16, 1e-6, 'power');
	near(series.voltage.P, 12, 1e-6, 'top rail');
	const parallel = circ.solveCircuit([
		{id: 'b', kind: 'battery', from: 'N', to: 'P', emf: 12},
		{id: 'a', kind: 'ammeter', from: 'P', to: 'j'},
		{id: 'r1', kind: 'resistor', from: 'j', to: 'N', r: 6},
		{id: 'r2', kind: 'resistor', from: 'j', to: 'N', r: 3},
	]);
	near(parallel.current.r1, 2, 1e-6, 'branch 1');
	near(parallel.current.r2, 4, 1e-6, 'branch 2');
	near(parallel.current.a, 6, 1e-6, 'ammeter reads the total');
	near(parallel.current.b, 12 / circ.parallelResistance(6, 3), 1e-6, 'matches the parallel formula');
	near(circ.parallelResistance(6, 3), 2, 1e-12, 'parallel formula');
	assert.equal(circ.seriesResistance(2, 4, 6), 12);
	assert.equal(parallel.short, false);
});

test('circuits: internal resistance lowers the terminal voltage, and a short is flagged', () => {
	const s = circ.solveCircuit([{id: 'b', kind: 'battery', from: 'N', to: 'P', emf: 9, r: 1}, {id: 'r', kind: 'resistor', from: 'P', to: 'N', r: 8}]);
	near(s.current.b, 1, 1e-6, 'current');
	near(s.terminal.b, 8, 1e-6, 'terminal voltage');
	near(s.power.b, 1, 1e-6, 'heat in the battery');
	const open = circ.solveCircuit([{id: 'b', kind: 'battery', from: 'N', to: 'P', emf: 9, r: 1}, {id: 's', kind: 'switch', from: 'P', to: 'x', closed: false}, {id: 'r', kind: 'resistor', from: 'x', to: 'N', r: 8}]);
	assert.equal(open.current.r, 0);
	near(open.terminal.b, 9, 1e-6, 'open circuit: terminal voltage equals the EMF');
	near(open.drop.s, 9, 1e-6, 'the whole voltage sits across the open switch');
	assert.equal(circ.solveCircuit([{id: 'b', kind: 'battery', from: 'N', to: 'P', emf: 9}, {id: 'w', kind: 'wire', from: 'P', to: 'N'}]).short, true);
	assert.throws(() => circ.solveCircuit([{id: 'x', kind: 'wire', from: 'a', to: 'b'}, {id: 'x', kind: 'wire', from: 'b', to: 'a'}]));
});

test('circuits: closing a switch changes the currents, charge is conserved at junctions and never jumps', () => {
	const parts = [
		{id: 'b', kind: 'battery', from: 'N', to: 'P', emf: 12},
		{id: 'l1', kind: 'lamp', from: 'P', to: 'j', r: 4},
		{id: 'l2', kind: 'lamp', from: 'j', to: 'N', r: 6},
		{id: 's', kind: 'switch', from: 'j', to: 'c', closed: false},
		{id: 'l3', kind: 'lamp', from: 'c', to: 'N', r: 6},
	];
	const run = circ.runCircuit(parts, [{at: 100, set: {s: {closed: true}}}]);
	const before = circ.circuitAt(run, 99), after = circ.circuitAt(run, 100);
	near(before.current.b, 1.2, 1e-6, 'one path');
	assert.equal(before.current.l3, 0);
	near(after.current.b, 12 / 7, 1e-6, 'two paths');
	near(after.current.l1, after.current.l2 + after.current.l3, 1e-9, 'current in equals current out');
	assert.ok(after.power.l1 > before.power.l1 && after.power.l2 < before.power.l2, 'lamp 1 brightens, lamp 2 dims');
	assert.equal(circ.partsAt(run, 50).find(p => p.id === 's').closed, false);
	assert.equal(circ.partsAt(run, 150).find(p => p.id === 's').closed, true);
	near(circ.chargeMoved(run, 'b', 100), 120, 1e-6, 'charge before the change');
	near(circ.chargeMoved(run, 'b', 107), 120 + 12, 1e-6, 'charge carries on from where it was');
	assert.equal(circ.chargeMoved(run, 'l3', 100), 0);
	assert.throws(() => circ.runCircuit(parts, [{at: 5, set: {nope: {closed: true}}}]));
});

test('waves: refraction follows Snell and stops at the critical angle', () => {
	const deg = Math.PI / 180;
	near(waves.refractionAngle(1, 1.5, 30 * deg) / deg, 19.4712, 1e-3, 'air to glass');
	near(waves.criticalAngle(1.5, 1) / deg, 41.8103, 1e-3, 'critical angle');
	assert.equal(waves.refractionAngle(1.5, 1, 45 * deg), null);
	assert.equal(waves.criticalAngle(1, 1.5), null);
	const pulse = {amplitude: 1, width: 0.4, start: 0, speed: 2};
	near(waves.pulseAt(pulse, 1, 0.5), 1, 1e-12, 'pulse centre moves at its speed');
	assert.deepEqual(waves.particleAt(() => 0.1, 2, 0, 'longitudinal'), [2.1, 0]);
});

const pop = await load('src/explainer/sims/population.ts');

test('population: drift keeps the mean frequency near p0, and small populations fix', () => {
	const a = pop.runAlleles({p0: 0.3, n: 50, generations: 20, lines: 600, seed: 4});
	const b = pop.runAlleles({p0: 0.3, n: 50, generations: 20, lines: 600, seed: 4});
	assert.deepEqual(Array.from(a.p[5]), Array.from(b.p[5]), 'same seed, same lines');
	assert.notDeepEqual(Array.from(a.p[5]), Array.from(pop.runAlleles({p0: 0.3, n: 50, generations: 20, lines: 600, seed: 5}).p[5]));
	for (const g of [1, 5, 20]) near(a.p.reduce((s, l) => s + l[g], 0) / a.p.length, 0.3, 0.02, `mean at generation ${g}`);
	// Variance grows as p0 q0 (1 - (1 - 1/2N)^g).
	const g = 20, m = a.p.reduce((s, l) => s + l[g], 0) / a.p.length, varG = a.p.reduce((s, l) => s + (l[g] - m) ** 2, 0) / a.p.length;
	near(varG, 0.3 * 0.7 * (1 - (1 - 1 / 100) ** g), 0.012, 'spread grows at the Wright-Fisher rate');
	const small = pop.runAlleles({p0: 0.5, n: 10, generations: 400, lines: 400, seed: 9});
	assert.ok(small.fixedAt.every(x => x !== null), 'every small population has lost one allele');
	near(small.fixedTo.filter(x => x === 'A').length / 400, 0.5, 0.08, 'A is kept in about p0 of them');
	for (let l = 0; l < 10; l++) { const at = small.fixedAt[l], end = small.p[l][400]; assert.ok(end === 0 || end === 1); assert.equal(small.p[l][at], end, 'stays fixed'); }
	const still = pop.runAlleles({p0: 0.4, generations: 30});
	assert.ok(still.p[0].every(v => v === 0.4), 'no drift and no selection: nothing changes');
});

test('population: selection moves the frequency the right way at the deterministic rate', () => {
	const w = {AA: 1.1, Aa: 1.05, aa: 1};
	const p = 0.2, q = 0.8, wbar = pop.meanFitness(p, w);
	near(pop.selectionStep(p, w) - p, p * q * (p * (w.AA - w.Aa) + q * (w.Aa - w.aa)) / wbar, 1e-12, 'one step matches the textbook change');
	const det = pop.runAlleles({p0: 0.2, generations: 100, fitness: w});
	for (let g = 1; g <= 100; g++) assert.ok(det.p[0][g] > det.p[0][g - 1], 'A rises every generation');
	assert.ok(det.p[0][100] > 0.9);
	const against = pop.runAlleles({p0: 0.8, generations: 60, fitness: {AA: 0.9, Aa: 0.95, aa: 1}});
	assert.ok(against.p[0][60] < 0.8, 'a less fit allele falls');
	const drift = pop.runAlleles({p0: 0.2, n: 2000, generations: 60, lines: 40, seed: 2, fitness: w});
	for (const g of [20, 40, 60]) near(drift.p.reduce((s, l) => s + l[g], 0) / 40, drift.expected[g], 0.02, `large N follows the curve at ${g}`);
	near(drift.expected[60], det.p[0][60], 1e-12, 'expected curve is the no-drift run');
});

test('population: logistic growth approaches K and grows fastest at K / 2', () => {
	const c = pop.runLogistic({n0: 10, r: 0.5, k: 1000, to: 40});
	near(c.v[c.v.length - 1], 1000, 1, 'approaches K');
	for (let i = 1; i < c.v.length; i++) assert.ok(c.v[i] >= c.v[i - 1] && c.v[i] <= 1000);
	let best = 0; for (let i = 1; i < c.rate.length; i++) if (c.rate[i] > c.rate[best]) best = i;
	near(c.v[best], 500, 15, 'fastest growth at K / 2');
	near(c.rate[best], 0.5 * 1000 / 4, 0.5, 'maximum rate rK / 4');
	near(pop.logisticAt(c.config, Math.log(99) / 0.5), 500, 1e-9, 'exact time to K / 2');
	const d = pop.runLogistic({n0: 10, r: 0.5, k: 1000, to: 40, form: 'discrete'});
	assert.equal(d.t.length, 41);
	near(d.v[1], 10 + 0.5 * 10 * (1 - 10 / 1000), 1e-12, 'one discrete step');
	near(d.v[40], 1000, 1, 'discrete also settles on K');
	let jump = 0; for (let i = 1; i < d.v.length; i++) if (d.v[i] - d.v[i - 1] > d.v[jump + 1] - d.v[jump]) jump = i - 1;
	near(d.v[jump], 500, 260, 'biggest step starts near K / 2');
});

test('population: Lotka-Volterra keeps its conserved quantity over several cycles', () => {
	const c = {prey0: 40, predators0: 9, preyGrowth: 0.1, predation: 0.02, conversion: 0.01, predatorDeath: 0.1, to: 400};
	const run = pop.runPredatorPrey(c);
	const v0 = pop.lotkaInvariant(c, c.prey0, c.predators0);
	let worst = 0; for (let i = 0; i < run.t.length; i++) worst = Math.max(worst, Math.abs(pop.lotkaInvariant(c, run.prey[i], run.predators[i]) - v0));
	assert.ok(worst < 1e-6 * Math.abs(v0), `drift ${worst}`);
	const cycles = run.t[run.t.length - 1] / pop.lotkaSmallPeriod(c);
	assert.ok(cycles > 4, `${cycles} cycles`);
	let peaks = 0; for (let i = 1; i < run.prey.length - 1; i++) if (run.prey[i] > run.prey[i - 1] && run.prey[i] >= run.prey[i + 1]) peaks++;
	assert.ok(peaks >= 4, 'prey rises and falls again and again');
	const bal = pop.lotkaBalance(c);
	const still = pop.runPredatorPrey({...c, prey0: bal.prey, predators0: bal.predators, to: 50});
	near(still.prey[still.prey.length - 1], bal.prey, 1e-9, 'balance point stays put');
	near(pop.valueAt([0, 1, 2], [0, 10, 30], 1.5), 20, 1e-12, 'valueAt interpolates');
});

const heat = await load('src/explainer/sims/heating.ts');

test('heating: plateaus last m L / P and slopes are P / (m c)', () => {
	// 0.5 kg of ice at -20 °C heated at 500 W to 120 °C.
	const c = {mass: 0.5, power: 500, start: -20, end: 120, c: {solid: 2100, liquid: 4200, gas: 2010}, melt: {at: 0, latent: 334000}, boil: {at: 100, latent: 2260000}};
	const run = heat.runHeating(c);
	assert.deepEqual(run.stretches.map(s => s.stage), ['solid', 'melting', 'liquid', 'boiling', 'gas']);
	const [solid, melting, liquid, boiling, gas] = run.stretches;
	near(melting.t1 - melting.t0, 0.5 * 334000 / 500, 1e-9, 'melting time');
	near(boiling.t1 - boiling.t0, 0.5 * 2260000 / 500, 1e-9, 'boiling time');
	assert.equal(melting.T0, 0); assert.equal(melting.T1, 0); assert.equal(boiling.T1, 100);
	for (const [s, cap] of [[solid, 2100], [liquid, 4200], [gas, 2010]]) near((s.T1 - s.T0) / (s.t1 - s.t0), 500 / (0.5 * cap), 1e-9, `${s.stage} slope`);
	near(run.heat, 500 * run.duration, 1e-6, 'heat = power x time');
	near(run.heat, 0.5 * (2100 * 20 + 334000 + 4200 * 100 + 2260000 + 2010 * 20), 1e-6, 'heat = sum of m c dT and m L');
	const mid = heat.heatingAt(run, (melting.t0 + melting.t1) / 2);
	assert.equal(mid.stage, 'melting'); near(mid.solid, 0.5, 1e-9, 'half melted'); near(mid.liquid, 0.5, 1e-9, 'half liquid'); assert.equal(mid.temperature, 0);
	const late = heat.heatingAt(run, boiling.t0 + 0.25 * (boiling.t1 - boiling.t0));
	near(late.gas, 0.25, 1e-9, 'a quarter boiled off'); near(late.liquid + late.gas + late.solid, 1, 1e-12, 'shares add to 1');
	assert.equal(heat.heatingAt(run, 1e9).temperature, 120);
	assert.equal(heat.plateaus(run).length, 2);
	const curve = heat.heatingCurve(run);
	assert.equal(curve.t.length, 6); near(heat.heatingAt(run, curve.t[2]).temperature, curve.v[2], 1e-9, 'corners match');
	// A duration cuts the run part-way through boiling; a liquid start skips the solid stretches.
	const cut = heat.runHeating({...c, end: undefined, duration: 2000});
	near(cut.duration, 2000, 1e-9, 'stops at the duration'); assert.equal(cut.stretches.at(-1).stage, 'boiling');
	const warmWater = heat.runHeating({...c, start: 20, end: 60});
	assert.deepEqual(warmWater.stretches.map(s => s.stage), ['liquid']);
	near(warmWater.duration, 0.5 * 4200 * 40 / 500, 1e-9, 'warming water only');
	assert.throws(() => heat.runHeating({...c, c: {liquid: 4200}}));
});

const prof = await load('src/explainer/sims/energy-profile.ts');

test('energy profile: arrows have the right lengths and signs', () => {
	const exo = prof.energyProfile({reactants: 0, products: -90, ea: 120, catalysedEa: 70});
	assert.equal(exo.kind, 'exothermic');
	assert.equal(exo.peak, 120); assert.equal(exo.catalysedPeak, 70);
	assert.deepEqual(exo.ea, {from: 0, to: 120, length: 120});
	assert.deepEqual(exo.catalysedEa, {from: 0, to: 70, length: 70});
	assert.deepEqual(exo.deltaHArrow, {from: 0, to: -90, length: -90});
	assert.equal(exo.reverseEa, 210);
	const endo = prof.energyProfile({reactants: 50, products: 110, ea: 100});
	assert.equal(endo.kind, 'endothermic'); assert.equal(endo.deltaH, 60); assert.ok(endo.deltaHArrow.length > 0, 'ΔH arrow points up');
	assert.equal(endo.reverseEa, 40); assert.equal(endo.catalysedEa, null);
	// The curve starts and ends on the levels and tops out at the peak.
	near(prof.profileEnergyAt(exo, 0), 0, 1e-12, 'reactant level'); near(prof.profileEnergyAt(exo, 1), -90, 1e-12, 'product level');
	near(prof.profileEnergyAt(exo, prof.PROFILE_SHAPE.peakAt), 120, 1e-12, 'peak'); near(prof.profileEnergyAt(exo, prof.PROFILE_SHAPE.peakAt, true), 70, 1e-12, 'catalysed peak');
	let top = -Infinity; for (let u = 0; u <= 1; u += 0.001) top = Math.max(top, prof.profileEnergyAt(endo, u)); near(top, 150, 1e-9, 'never above the peak');
	assert.throws(() => prof.energyProfile({reactants: 0, products: 100, ea: 60}), /Ea ≥ ΔH/);
	assert.throws(() => prof.energyProfile({reactants: 0, products: -10, ea: 60, catalysedEa: 80}));
});

test('titration: carbonate with a strong acid has two equivalence points, 1 : 2 from the start', () => {
	// Na2CO3 0.1 mol/L, 25 mL, with HCl 0.1 mol/L. H2CO3: Ka1 4.5e-7, Ka2 4.7e-11, so Kb1 = Kw / Ka2 and Kb2 = Kw / Ka1.
	const t = {analyte: {kind: 'base', concentration: 0.1, volume: 25, k: 1e-14 / 4.7e-11, k2: 1e-14 / 4.5e-7}, titrant: {kind: 'acid', concentration: 0.1}};
	const [v1, v2] = titr.equivalenceVolumes(t);
	near(v1, 25, 1e-12, 'first'); near(v2, 50, 1e-12, 'second'); near(v2 / v1, 2, 1e-12, '1 : 2 from the start');
	assert.equal(titr.equivalenceVolume(t), 50);
	// The steepest drops on the curve sit at those volumes.
	const steepest = (a, b) => { let best = a, drop = 0; for (let v = a; v <= b; v += 0.02) { const d = titr.phAt(t, v) - titr.phAt(t, v + 0.02); if (d > drop) { drop = d; best = v; } } return best + 0.01; };
	const s1 = steepest(10, 40), s2 = steepest(40, 70);
	near(s1, 25, 0.3, 'first steep drop'); near(s2, 50, 0.1, 'second steep drop'); near(s2 / s1, 2, 0.03, 'measured ratio');
	near(titr.phAt(t, 0), 11.66, 0.03, 'start: 0.1 mol/L carbonate');
	const halves = titr.halfEquivalences(t);
	assert.equal(halves.length, 2);
	near(halves[0].volume, 12.5, 1e-12, 'first half-way'); near(halves[0].pKa, 10.33, 0.01, 'pKa2 of carbonic acid'); near(halves[0].pH, halves[0].pKa, 0.1, 'pH = pKa2');
	near(halves[1].volume, 37.5, 1e-12, 'second half-way'); near(halves[1].pKa, 6.35, 0.01, 'pKa1'); near(halves[1].pH, halves[1].pKa, 0.05, 'pH = pKa1');
	near(titr.equivalencePoints(t)[0].pH, 8.34, 0.1, 'first end point: hydrogencarbonate, pH = (pKa1 + pKa2) / 2');
	assert.ok(titr.equivalencePoints(t)[1].pH < 4.5, 'second end point is acidic (carbonic acid)');
	const m = titr.mixtureAt(t, 25);
	assert.equal(m.base.forms.length, 3); near(m.base.forms.reduce((a, b) => a + b, 0), m.base.total, 1e-12, 'forms add up');
	assert.ok(m.base.forms[1] > 0.95 * m.base.total, 'at the first end point it is nearly all hydrogencarbonate');
	near(m.h + m.base.charge, m.oh + m.acid.charge, 1e-9, 'charges balance');
	const fit = titr.indicatorFit(t, titr.INDICATORS.phenolphthalein, 0.02, v1);
	near(fit.equivalence, 25, 1e-12, 'fit against the first end point');
	let last = Infinity; for (let v = 0; v <= 70; v += 0.5) { const pH = titr.phAt(t, v); assert.ok(pH < last, 'pH falls all the way'); last = pH; }
});

test('titration: a two-H+ acid with a strong base buffers at each pKa; one-step results are unchanged', () => {
	const t = {analyte: {kind: 'acid', concentration: 0.1, volume: 20, k: 1e-4, k2: 1e-9}, titrant: {kind: 'base', concentration: 0.1}};
	assert.deepEqual(titr.equivalenceVolumes(t), [20, 40]);
	const [a, b] = titr.halfEquivalences(t);
	near(a.pH, 4, 0.06, 'pH = pKa1'); near(b.pH, 9, 0.06, 'pH = pKa2');
	near(titr.halfEquivalence(t).volume, 10, 1e-12, 'halfEquivalence gives the first');
	const sulfuric = {analyte: {kind: 'base', concentration: 0.1, volume: 25}, titrant: {kind: 'acid', concentration: 0.05, k2: 1.2e-2}};
	assert.deepEqual(titr.equivalenceVolumes(sulfuric), [25], 'two H+ per titrant particle halves the volume');
	near(titr.phAt(t, 0), titr.phAt({...t, analyte: {...t.analyte, k2: undefined}}, 0), 0.001, 'a tiny Ka2 hardly changes the start');
	const mono = {analyte: {kind: 'acid', concentration: 0.1, k: 1.8e-5, volume: 25}, titrant: {kind: 'base', concentration: 0.1}};
	assert.deepEqual(titr.equivalenceVolumes(mono), [25]);
	near(titr.mixtureAt(mono, 12.5).acid.charge, titr.mixtureAt(mono, 12.5).acid.ion, 1e-15, 'one-step charge = ion');
});

test('circuits: real meters load the circuit by the hand-calculated amount', () => {
	// Voltmeter of 10 kΩ across the lower of two 10 kΩ resistors on 12 V.
	const parts = r => [
		{id: 'b', kind: 'battery', from: 'N', to: 'P', emf: 12},
		{id: 'r1', kind: 'resistor', from: 'P', to: 'm', r: 10000},
		{id: 'r2', kind: 'resistor', from: 'm', to: 'N', r: 10000},
		{id: 'v', kind: 'voltmeter', from: 'm', to: 'N', r},
	];
	near(circ.solveCircuit(parts(undefined)).drop.v, 6, 1e-6, 'ideal voltmeter');
	const lower = circ.parallelResistance(10000, 10000), loaded = circ.solveCircuit(parts(10000));
	near(loaded.drop.v, 12 * lower / (10000 + lower), 1e-6, 'loaded reading = 4 V');
	near(loaded.drop.v, 4, 1e-6, 'four volts');
	near(loaded.current.v, 4 / 10000, 1e-9, 'the meter draws current');
	near(circ.solveCircuit(parts(1e7)).drop.v, 12 * circ.parallelResistance(10000, 1e7) / (10000 + circ.parallelResistance(10000, 1e7)), 1e-6, 'a large meter barely loads');
	// Ammeter of 1 Ω in series with 5 Ω on 12 V.
	const amm = r => circ.solveCircuit([{id: 'b', kind: 'battery', from: 'N', to: 'P', emf: 12}, {id: 'a', kind: 'ammeter', from: 'P', to: 'x', r}, {id: 'r', kind: 'resistor', from: 'x', to: 'N', r: 5}]);
	near(amm(undefined).current.a, 2.4, 1e-6, 'ideal ammeter');
	near(amm(1).current.a, 2, 1e-6, 'ammeter resistance lowers the current: 12 / 6');
	near(amm(1).drop.a, 2, 1e-6, 'and takes a little voltage');
	// New loads behave as resistances.
	for (const kind of ['motor', 'rheostat', 'coil']) near(circ.solveCircuit([{id: 'b', kind: 'battery', from: 'N', to: 'P', emf: 6}, {id: 'x', kind, from: 'P', to: 'N', r: 3}]).current.x, 2, 1e-6, kind);
});

test('circuits: a switch closing or a part added at a frame changes the current from that frame; a ramp is smooth', () => {
	const parts = [
		{id: 'b', kind: 'battery', from: 'N', to: 'P', emf: 12},
		{id: 'r1', kind: 'resistor', from: 'P', to: 'j', r: 6},
		{id: 's', kind: 'switch', from: 'j', to: 'N', closed: false},
		{id: 'm', kind: 'motor', from: 'j', to: 'N', r: 6, present: false},
	];
	const run = circ.runCircuit(parts, [{at: 60, set: {s: {closed: true}}}]);
	assert.equal(circ.circuitAt(run, 59).current.b, 0, 'open: no current');
	near(circ.circuitAt(run, 60).current.b, 2, 1e-6, 'closed at frame 60: 12 / 6');
	const added = circ.runCircuit([...parts.slice(0, 2), {id: 'w', kind: 'wire', from: 'j', to: 'k'}, {id: 'm', kind: 'motor', from: 'k', to: 'N', r: 6, present: false}], [{at: 40, set: {m: {present: true}}}]);
	assert.equal(circ.circuitAt(added, 39).current.m, 0); assert.equal(circ.circuitAt(added, 39).current.b, 0);
	near(circ.circuitAt(added, 40).current.m, 1, 1e-6, 'the motor joins at frame 40');
	assert.equal(circ.partsAt(added, 10).find(p => p.id === 'm').present, false);
	// A rheostat turned from 12 Ω down to 2 Ω over 100 frames.
	const ramp = circ.runCircuit([{id: 'b', kind: 'battery', from: 'N', to: 'P', emf: 12}, {id: 'v', kind: 'rheostat', from: 'P', to: 'N', r: 12}], [{at: 50, set: {v: {r: 2}}, over: 100}]);
	near(circ.circuitAt(ramp, 50).current.b, 1, 1e-6, 'starts at 1 A');
	near(circ.circuitAt(ramp, 100).current.b, 12 / 7, 1e-6, 'half-way through the turn: 7 Ω');
	near(circ.circuitAt(ramp, 150).current.b, 6, 1e-6, 'ends at 6 A');
	near(circ.circuitAt(ramp, 400).current.b, 6, 1e-6, 'and stays');
	let last = 0; for (let f = 0; f <= 200; f++) { const i = circ.circuitAt(ramp, f).current.b; assert.ok(i >= last - 1e-12, 'current rises steadily'); assert.ok(i - last < 0.15 || f === 0, 'no jumps'); last = i; }
	const linear = circ.runCircuit([{id: 'b', kind: 'battery', from: 'N', to: 'P', emf: 10}], []);
	assert.equal(linear.phases.length, 1);
	near(circ.chargeMoved(ramp, 'b', 50), 50, 1e-6, 'charge before the ramp');
});

// ---------------------------------------------------------------- magnetic fields
const mag = await load('src/explainer/sims/magnetic-field.ts');
const rel = (a, b, tol, msg) => assert.ok(Math.abs(a - b) <= tol * Math.abs(b), `${msg ?? ''} got ${a}, expected ${b}`);

test('magnetic field: a straight wire gives mu0 I / (2 pi r), circling anticlockwise for current out of the page', () => {
	const wire = [{kind: 'wire', x: 0, y: 0, current: 5}];
	const f = mag.magneticFieldAt(wire, 0.02, 0);
	rel(f.b, (4e-7 * Math.PI * 5) / (2 * Math.PI * 0.02), 1e-9, 'size');
	near(f.bx, 0, 1e-12); assert.ok(f.by > 0, 'up at the right of the wire');
	rel(mag.magneticFieldAt(wire, 0.04, 0).b, f.b / 2, 1e-9, 'twice as far, half the field');
	assert.ok(mag.magneticFieldAt([{kind: 'wire', x: 0, y: 0, current: -5}], 0.02, 0).by < 0, 'reversed current, reversed field');
	rel(mag.wireField(5, 0.02), f.b, 1e-12);
});

test('magnetic field: a loop gives mu0 I / (2R) at its centre and the on-axis formula along its axis', () => {
	const loop = [{kind: 'loop', x: 0, y: 0, radius: 0.05, current: 2}];
	const c = mag.magneticFieldAt(loop, 0, 0);
	rel(c.bx, (4e-7 * Math.PI * 2) / (2 * 0.05), 1e-4, 'centre');
	near(c.by, 0, 1e-12);
	for (const x of [0.03, 0.1, -0.08]) rel(mag.magneticFieldAt(loop, x, 0).bx, (4e-7 * Math.PI * 2 * 0.05 ** 2) / (2 * (0.05 ** 2 + x ** 2) ** 1.5), 1e-4, `on axis at ${x}`);
	const turned = mag.magneticFieldAt([{kind: 'loop', x: 0, y: 0, radius: 0.05, current: 2, angle: Math.PI / 2}], 0, 0);
	near(turned.bx, 0, 1e-10); rel(turned.by, c.bx, 1e-9, 'axis turned to point up');
	rel(mag.loopCentreField(2, 0.05, 10), 10 * c.bx, 1e-4, 'N turns');
});

test('magnetic field: a long solenoid has mu0 n I inside, nearly uniform, and far less outside', () => {
	const sol = [{kind: 'solenoid', x: 0, y: 0, radius: 0.02, length: 0.4, turns: 400, current: 1.5}];
	const inside = mag.magneticFieldAt(sol, 0, 0).bx, expected = mag.solenoidField(1.5, 400 / 0.4);
	rel(inside, expected, 0.01, 'centre');
	rel(mag.magneticFieldAt(sol, 0.05, 0.006).bx, expected, 0.02, 'off the axis, still inside');
	assert.ok(Math.abs(mag.magneticFieldAt(sol, 0, 0.08).b) < 0.05 * expected, 'weak outside');
});

test('magnetic field: a bar magnet is a dipole far away, and a compass points away from its north end', () => {
	const bar = [{kind: 'bar', x: 0, y: 0, length: 0.1, strength: 20}];
	const m = 20 * 0.1, far = mag.magneticFieldAt(bar, 2, 0);
	rel(far.bx, (4e-7 * Math.PI * 2 * m) / (4 * Math.PI * 2 ** 3), 0.01, 'on the axis: mu0 2m / (4 pi r^3)');
	rel(mag.magneticFieldAt(bar, 0, 2).bx, -(4e-7 * Math.PI * m) / (4 * Math.PI * 2 ** 3), 0.01, 'beside it: half the size, pointing back');
	near(mag.compassAngle(bar, 0.2, 0), 0, 1e-9, 'beyond the north end the needle points away');
	near(Math.abs(mag.compassAngle(bar, -0.2, 0)), 0, 1e-9, 'beyond the south end it points towards the magnet');
});

test('magnetic field: fields add, and field lines follow the field', () => {
	const two = [{kind: 'wire', x: -0.05, y: 0, current: 3}, {kind: 'wire', x: 0.05, y: 0, current: 3}];
	near(mag.magneticFieldAt(two, 0, 0).b, 0, 1e-15, 'midway between equal parallel currents the fields cancel');
	const opposite = [{kind: 'wire', x: -0.05, y: 0, current: 3}, {kind: 'wire', x: 0.05, y: 0, current: -3}];
	rel(mag.magneticFieldAt(opposite, 0, 0).b, 2 * mag.wireField(3, 0.05), 1e-9, 'opposite currents: the fields add between them');
	rel(mag.forceBetweenWires(10, 10, 0.05), 4e-4, 1e-9, '10 A and 10 A, 5 cm apart');
	const bounds = {x0: -0.2, x1: 0.2, y0: -0.2, y1: 0.2};
	const [circle] = mag.fieldLines([two[0]], mag.wireSeeds(two[0], [0.04]), {bounds});
	assert.ok(circle.closed, 'a line round one wire closes');
	for (const [x, y] of circle.points) near(Math.hypot(x + 0.05, y), 0.04, 2e-4, 'and it is a circle');
	const bar = {kind: 'bar', x: 0, y: 0, length: 0.12, width: 0.03, strength: 10};
	const lines = mag.fieldLines([bar], mag.barSeeds(bar, 7), {bounds, direction: 'forward'});
	const middle = lines[3].points, end = middle[middle.length - 1];
	assert.ok(end[0] >= 0.199, 'the line straight out of the north end leaves the box to the right');
	const side = lines[1].points, last = side[side.length - 1];
	assert.ok(last[0] < 0, 'a line from the side of the north end curls round to the south half');
	const coil = {kind: 'loop', x: 0, y: 0, radius: 0.05, current: 1};
	assert.equal(mag.coilSeeds(coil, 5).length, 5);
	assert.ok(mag.fieldLine([coil], 0, 0.02, {bounds: {x0: -1, x1: 1, y0: -1, y1: 1}, step: 0.002, maxSteps: 3000}).closed, 'a line through a loop closes round its wire');
});

// ---------------------------------------------------------------- flux and induction
const ind = await load('src/explainer/sims/induction.ts');

test('induction: Faraday\'s law, emf = -N dPhi/dt, for a field that rises steadily', () => {
	// B rises by 0.5 T each second through 0.02 m^2, 50 turns: emf = -50 x 0.02 x 0.5 = -0.5 V.
	const run = ind.runInduction({source: {kind: 'field', area: 0.02, b: t => 0.5 * t}, turns: 50, duration: 2});
	for (const t of [0.1, 1, 1.9]) near(ind.inductionAt(run, t).emf, -0.5, 1e-9, `emf at ${t}`);
	near(ind.inductionAt(run, 1).linkage, 50 * 0.02 * 0.5, 1e-12, 'flux linkage');
	near(ind.faradayEmf(50, 0.02 * 0.5 * 2, 2), -0.5, 1e-12, 'average over the run');
	const s = ind.inductionAt(run, 1).lenz;
	assert.deepEqual(s, {change: 'increasing', inducedField: -1, current: 'clockwise'}, 'Lenz: the induced field opposes the rise');
	const steady = ind.runInduction({source: {kind: 'field', area: 0.02, b: () => 0.8}, turns: 50, duration: 1});
	near(steady.peakEmf, 0, 1e-12, 'steady flux, no emf, however large the flux');
	assert.equal(ind.inductionAt(steady, 0.5).lenz.current, 'none');
});

test('induction: a turning coil gives flux BA cos and emf NBA omega sin, a quarter turn apart', () => {
	const src = {kind: 'rotating', b: 0.2, area: 0.01, frequency: 5}, run = ind.runInduction({source: src, turns: 100, duration: 0.4, steps: 800});
	const w = 2 * Math.PI * 5, peak = ind.generatorPeakEmf(100, 0.2, 0.01, 5);
	rel(peak, 100 * 0.2 * 0.01 * w, 1e-12, 'NBA omega');
	for (const t of [0.013, 0.05, 0.21, 0.333]) {
		const s = ind.inductionAt(run, t);
		near(s.flux, 0.2 * 0.01 * Math.cos(w * t), 2e-6, 'flux');
		near(s.emf, peak * Math.sin(w * t), peak * 2e-3, 'emf');
	}
	rel(run.peakEmf, peak, 1e-3, 'peak emf');
	near(ind.inductionAt(run, 0).emf, 0, peak * 1e-6, 'face on: most flux, no emf');
	near(ind.inductionAt(run, 0.05).flux, 0, 1e-9, 'edge on: no flux');
	rel(Math.abs(ind.inductionAt(run, 0.05).emf), peak, 1e-3, 'edge on: largest emf');
	near(ind.fluxThrough(0.5, 0.04, Math.PI / 3), 0.01, 1e-12, 'BA cos 60');
});

test('induction: a sliding rod gives Blv while it moves and nothing when it stops', () => {
	const run = ind.runInduction({source: {kind: 'rod', b: 0.3, length: 0.25, position: t => (t < 1 ? 4 * t : 4)}, duration: 2, resistance: 2});
	near(Math.abs(ind.inductionAt(run, 0.5).emf), ind.rodEmf(0.3, 0.25, 4), 1e-9, 'B l v = 0.30 V');
	near(Math.abs(ind.inductionAt(run, 0.5).current), 0.15, 1e-9, 'current through 2 ohms');
	near(ind.inductionAt(run, 1.5).emf, 0, 1e-12, 'stopped');
});

test('induction: a magnet passing through a coil gives one pulse each way, and Lenz opposes each change', () => {
	const run = ind.runInduction({source: {kind: 'magnet', moment: 1, radius: 0.05, position: t => -0.3 + 0.3 * t}, turns: 200, duration: 2, steps: 800});
	const coming = ind.inductionAt(run, 0.7), leaving = ind.inductionAt(run, 1.3), middle = ind.inductionAt(run, 1);
	assert.ok(coming.emf < 0 && leaving.emf > 0, 'the emf reverses as the magnet passes the centre');
	near(coming.emf, -leaving.emf, 1e-9, 'same size each way at the same speed');
	near(middle.emf, 0, run.peakEmf * 1e-3, 'at the centre the flux is at its peak and the emf is zero');
	assert.equal(coming.lenz.inducedField, -1, 'approaching: the coil\'s field points back at the magnet (repels)');
	assert.equal(leaving.lenz.inducedField, 1, 'leaving: the coil\'s field points after the magnet (attracts)');
	rel(middle.flux, (4e-7 * Math.PI * 1) / (2 * 0.05), 1e-9, 'flux at the centre: mu0 m / (2a)');
	// Twice as fast: twice the emf.
	const fast = ind.runInduction({source: {kind: 'magnet', moment: 1, radius: 0.05, position: t => -0.3 + 0.6 * t}, turns: 200, duration: 1, steps: 800});
	rel(fast.peakEmf, 2 * run.peakEmf, 1e-3, 'double the speed, double the emf');
});
