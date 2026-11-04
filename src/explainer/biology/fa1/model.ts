/** Scientific state for the FA1 diagrams. Model time is illustrative, not seconds of molecular motion. */
export const clamp = (x: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, x));

export const sizePosition = (sizeNm: number, minNm = 0.1, maxNm = 100_000) => {
	if (!(sizeNm > 0 && minNm > 0 && maxNm > minNm)) throw new Error('Sizes must be positive and maxNm must exceed minNm.');
	return (Math.log10(maxNm) - Math.log10(sizeNm)) / (Math.log10(maxNm) - Math.log10(minNm));
};
export const formatSize = (nm: number) => nm >= 1000 ? `${nm / 1000} µm` : `${nm} nm`;
export const SIZE_TICKS_NM = [100_000, 10_000, 1000, 100, 10, 1, 0.1] as const;
export const INSTRUMENT_LIMITS = [
	{id: 'eye', label: 'Eye', sizeNm: 100_000, detail: 'about 100 µm'},
	{id: 'light', label: 'Light microscope', sizeNm: 200, detail: 'about 200 nm'},
	{id: 'electron', label: 'Electron microscope', sizeNm: 0.2, detail: 'about 0.2 nm, best instruments'},
] as const;

export type ParticleKind = {
	id: string; label: string; left: number; right: number; passes: boolean;
	color?: string; shape?: 'circle' | 'hexagon'; radius?: number;
};
export type GapConfig = {
	seed: number; width: number; height: number; gapHeight: number;
	stepLength: number; maxSteps: number; windowSteps: number;
	kinds: readonly ParticleKind[]; divider?: 'gap' | 'membrane' | 'none';
};
export type Particle = {id: number; kind: string; x: number; y: number; radius: number};
export type Crossing = {step: number; particleId: number; kind: string; direction: 'right' | 'left'};
export type GapSnapshot = {step: number; particles: readonly Particle[]; counts: Record<string, {left: number; right: number}>; totals: Record<string, {right: number; left: number}>};
export type GapSimulation = {config: GapConfig; snapshots: readonly GapSnapshot[]; crossings: readonly Crossing[]};

export const DEFAULT_GAP_CONFIG: GapConfig = {
	seed: 14709, width: 900, height: 360, gapHeight: 180, stepLength: 18,
	maxSteps: 1800, windowSteps: 120, divider: 'gap',
	kinds: [{id: 'solute', label: 'Particles', left: 40, right: 6, passes: true, color: '#7a4a8c'}],
};
const generator = (seed: number) => {
	let state = seed >>> 0;
	return () => {state = (state + 0x6d2b79f5) | 0; let t = Math.imul(state ^ state >>> 15, 1 | state); t ^= t + Math.imul(t ^ t >>> 7, 61 | t); return ((t ^ t >>> 14) >>> 0) / 4294967296;};
};
const reflect = (x: number, lo: number, hi: number) => {
	while (x < lo || x > hi) x = x < lo ? 2 * lo - x : 2 * hi - x;
	return x;
};

/** Every event is a geometrical crossing; blocked particles reflect rather than teleport. */
export const createGapSimulation = (input: GapConfig = DEFAULT_GAP_CONFIG): GapSimulation => {
	const config = {...input, kinds: input.kinds.map(k => ({...k}))};
	const {width, height, stepLength, maxSteps, windowSteps} = config;
	if (!(width > 100 && height > 100 && stepLength > 0 && stepLength < Math.min(width, height) / 4)) throw new Error('Invalid box dimensions or step length.');
	if (!(Number.isInteger(maxSteps) && maxSteps >= 1 && Number.isInteger(windowSteps) && windowSteps >= 1 && config.gapHeight >= 0 && config.gapHeight <= height)) throw new Error('Invalid duration, window or gap.');
	if (new Set(config.kinds.map(k => k.id)).size !== config.kinds.length || config.kinds.length < 1 || config.kinds.length > 2) throw new Error('Use one or two distinct species.');
	for (const k of config.kinds) {
		if (![k.left, k.right].every(n => Number.isInteger(n) && n >= 0) || (k.radius ?? 6) <= 0 || (k.radius ?? 6) > Math.min(width, height) / 12) throw new Error('Invalid particle count or radius.');
	}
	const rnd = generator(config.seed), mid = width / 2;
	const byKind = Object.fromEntries(config.kinds.map(k => [k.id, k]));
	let particles: Particle[] = [];
	for (const k of config.kinds) for (const side of ['left', 'right'] as const) for (let i = 0; i < k[side]; i++) {
		const r = k.radius ?? 6;
		particles.push({id: particles.length, kind: k.id, radius: r, x: side === 'left' ? r + rnd() * (mid - 3 * r) : mid + 2 * r + rnd() * (mid - 3 * r), y: r + rnd() * (height - 2 * r)});
	}
	const totals: Record<string, {right: number; left: number}> = Object.fromEntries(config.kinds.map(k => [k.id, {right: 0, left: 0}]));
	const snapshots: GapSnapshot[] = [], crossings: Crossing[] = [];
	const save = (step: number) => {
		const counts = Object.fromEntries(config.kinds.map(k => [k.id, {left: 0, right: 0}]));
		for (const p of particles) counts[p.kind][p.x < mid ? 'left' : 'right']++;
		snapshots.push({step, particles: particles.map(p => ({...p})), counts, totals: Object.fromEntries(Object.entries(totals).map(([id, a]) => [id, {...a}]))});
	};
	save(0);
	for (let step = 1; step <= maxSteps; step++) {
		particles = particles.map(p => {
			const theta = rnd() * 2 * Math.PI, dx = Math.cos(theta) * stepLength, dy = Math.sin(theta) * stepLength;
			let x = reflect(p.x + dx, p.radius, width - p.radius), y = reflect(p.y + dy, p.radius, height - p.radius);
			if (config.divider !== 'none') {
				const approachLeft = p.x < mid && x > mid - p.radius;
				const approachRight = p.x >= mid && x < mid + p.radius;
				if (approachLeft || approachRight) {
					const contactX = approachLeft ? mid - p.radius : mid + p.radius;
					const fraction = dx === 0 ? 0 : clamp((contactX - p.x) / dx, 0, 1);
					const contactY = reflect(p.y + dy * fraction, p.radius, height - p.radius);
					const gapLow = (height - config.gapHeight) / 2 + p.radius, gapHigh = (height + config.gapHeight) / 2 - p.radius;
					if (!byKind[p.kind].passes || contactY < gapLow || contactY > gapHigh) x = 2 * contactX - x;
				}
				// A diagonal step must also clear the aperture at the actual centre crossing.
				if ((p.x < mid) !== (x < mid)) {
					const crossY = p.y + (y - p.y) * (mid - p.x) / (x - p.x);
					if (!byKind[p.kind].passes || crossY < (height - config.gapHeight) / 2 + p.radius || crossY > (height + config.gapHeight) / 2 - p.radius) x = 2 * (p.x < mid ? mid - p.radius : mid + p.radius) - x;
				}
			}
			if ((p.x < mid) !== (x < mid)) {
				const direction = x >= mid ? 'right' : 'left';
				totals[p.kind][direction]++;
				crossings.push({step, particleId: p.id, kind: p.kind, direction});
			}
			return {...p, x, y};
		});
		save(step);
	}
	return {config, snapshots, crossings};
};

export const gapStateAt = (simulation: GapSimulation, step: number) => {
	if (!Number.isFinite(step) || Math.floor(step) > simulation.config.maxSteps) throw new Error('Requested time exceeds this simulation. Precompute more steps; do not silently freeze the particles.');
	const index = clamp(Math.floor(step), 0, simulation.config.maxSteps);
	const state = simulation.snapshots[index], start = Math.max(0, index - simulation.config.windowSteps);
	const earlier = simulation.snapshots[start];
	const recent = Object.fromEntries(simulation.config.kinds.map(k => [k.id, {
		right: state.totals[k.id].right - earlier.totals[k.id].right,
		left: state.totals[k.id].left - earlier.totals[k.id].left,
	}]));
	return {state, recent, elapsedWindowSteps: index - start};
};

/** Balance geometry accepts an authored judgement; evidence counts never set its tilt. */
export const balanceGeometry = (tiltDegrees: number, armLength = 270) => {
	const angle = clamp(tiltDegrees, -12, 12) * Math.PI / 180;
	return {left: {x: -armLength * Math.cos(angle), y: -armLength * Math.sin(angle)}, right: {x: armLength * Math.cos(angle), y: armLength * Math.sin(angle)}};
};
