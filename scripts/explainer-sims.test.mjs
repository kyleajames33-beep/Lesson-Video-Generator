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
