// Particle box: a small, deterministic 2D model of particles in a container.
// It is the engine only (no drawing, no React), so it can be unit-tested in node
// and reused by any course. See src/explainer/sims/README.md.
//
// What it models, qualitatively:
//   - particles that move, bounce off the walls and off each other (kinetic theory);
//   - temperature (average kinetic energy) following a timeline;
//   - a piston that changes the volume, with pressure measured from real wall hits;
//   - reactions: two particles that collide hard enough can react (collision theory),
//     and a particle can break apart on its own, so equilibrium can emerge by itself;
//   - particles added or removed at a cue (disturbing an equilibrium);
//   - a membrane that lets only some species through (diffusion, osmosis).
//
// What it is not: a quantitative chemistry or physics calculator. The numbers it
// reports (counts, relative pressure, relative temperature) are consistent with
// the picture on screen, which is the point: readouts and graphs are read from the
// same run that draws the particles, so they can never disagree with it.
//
// The whole run is computed once, frame by frame, from a seed. Every render and
// every frame order gives identical output, which Remotion requires.

export type Timeline = number | readonly (readonly [number, number])[];
/** Value of a timeline at a frame: constant, or eased (smoothstep) between [frame, value] keys. */
export const timelineAt = (t: Timeline | undefined, f: number, fallback = 1): number => {
	if (t === undefined) return fallback;
	if (typeof t === 'number') return t;
	if (!t.length) return fallback;
	if (f <= t[0][0]) return t[0][1];
	for (let i = 0; i + 1 < t.length; i++) {
		const [a, va] = t[i], [b, vb] = t[i + 1];
		if (f < b) { const u = (f - a) / (b - a); return va + (vb - va) * u * u * (3 - 2 * u); }
	}
	return t[t.length - 1][1];
};

export type Species = {
	id: string;
	/** Radius in px (default 12). */
	r?: number;
	/** Relative mass (default 1). Heavier particles move more slowly at the same temperature. */
	mass?: number;
};
export type Region = 'all' | 'left' | 'right';
export type Reaction = {
	/** One species (it changes or breaks apart by itself) or two (they must collide). */
	from: readonly [string] | readonly [string, string];
	/** One or two product species. */
	to: readonly [string] | readonly [string, string];
	/**
	 * Activation energy, in units of the average kinetic energy at temperature 1.
	 * Two-particle reactions need at least this much energy along the line of the
	 * collision. One-particle reactions speed up with temperature by exp(-ea / T).
	 */
	ea?: number;
	/** Two-particle: chance of reacting when the energy test passes (default 1). */
	p?: number;
	/** One-particle: chance per second of reacting at temperature 1 (default 0.2). */
	rate?: number;
	/** The reaction is switched on from this frame (default 0), and off from `until`. */
	activeFrom?: number;
	until?: number;
};
export type BoxConfig = {
	seed: number;
	/** Number of frames to compute. Ask for the whole stretch the box is on screen. */
	frames: number;
	/** Box size in px when the volume is 1. */
	w: number;
	h: number;
	species: readonly Species[];
	initial: readonly {species: string; count: number; region?: Region}[];
	/** Relative temperature over time (1 = the starting temperature). */
	temperature?: Timeline;
	/** Relative volume over time: the right wall is a piston at w x volume. */
	volume?: Timeline;
	/** Typical speed in px per frame of a mass-1 particle at temperature 1 (default 4). */
	speed?: number;
	reactions?: readonly Reaction[];
	inject?: readonly {at: number; species: string; count: number; region?: Region}[];
	remove?: readonly {at: number; species: string; count: number}[];
	/** A vertical membrane at x = w x `x`. Only the listed species cross it. */
	membrane?: {x: number; passes: readonly string[]; chance?: number};
	/** How firmly the temperature follows its timeline each frame, 0 to 1 (default 0.15; 0 = insulated box). */
	thermostat?: number;
	fps?: number;
};
export type BoxEvent = {f: number; x: number; y: number; reaction: number; ok: boolean};
export type BoxRun = {
	config: BoxConfig;
	frames: number;
	/** Number of particle slots. Slot i at frame f is at index f x slots + i. */
	slots: number;
	x: Float32Array;
	y: Float32Array;
	/** Species index of each slot per frame, or -1 when the slot is empty. */
	sp: Int8Array;
	/** counts[speciesIndex][frame] */
	counts: Uint16Array[];
	/** Counts left of the membrane (or left of the middle when there is no membrane). */
	left: Uint16Array[];
	/** Position of the piston (right wall) in px. */
	wallX: Float32Array;
	/** Pressure from wall hits, smoothed, relative to the ideal value at the start (so it starts near 1). */
	pressure: Float32Array;
	/** Average kinetic energy per particle relative to temperature 1 (so it reads as relative temperature). */
	temperature: Float32Array;
	/** Running total of particle-particle collisions. */
	collisions: Uint32Array;
	/** reacted[reactionIndex][frame]: running total of times that reaction has happened. */
	reacted: Uint32Array[];
	/** Every collision between a reacting pair: where, when, and whether it had enough energy. */
	events: BoxEvent[];
};

const mulberry = (seed: number) => {
	let a = (seed * 2654435761 + 0x9e3779b9) >>> 0;
	return () => { a = (a + 0x6d2b79f5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
};

/** Compute the whole run. Deterministic for a given config. */
export const runBox = (config: BoxConfig): BoxRun => {
	const {frames, w, h} = config;
	if (!(frames > 0 && w > 0 && h > 0)) throw new RangeError('runBox: frames, w and h must be positive');
	const fps = config.fps ?? 30;
	const speed0 = config.speed ?? 4;
	const kT1 = 0.5 * speed0 * speed0; // average kinetic energy per particle at temperature 1
	const species = config.species;
	const index = (id: string) => { const i = species.findIndex(s => s.id === id); if (i < 0) throw new Error(`runBox: unknown species "${id}"`); return i; };
	const R = species.map(s => s.r ?? 12), M = species.map(s => s.mass ?? 1);
	const reactions = (config.reactions ?? []).map(r => ({...r, a: index(r.from[0]), b: r.from.length === 2 ? index(r.from[1]) : -1, c: index(r.to[0]), d: r.to.length === 2 ? index(r.to[1]) : -1}));
	const membrane = config.membrane ? {x: config.membrane.x * w, pass: species.map(s => config.membrane!.passes.includes(s.id)), chance: config.membrane.chance ?? 1} : null;
	const strength = config.thermostat ?? 0.15;
	const rand = mulberry(config.seed);
	const gauss = () => Math.sqrt(-2 * Math.log(1 - rand())) * Math.cos(2 * Math.PI * rand());

	const starting = config.initial.reduce((n, i) => n + i.count, 0);
	const slots = (starting + (config.inject ?? []).reduce((n, i) => n + i.count, 0)) * 2 + 8;
	const px = new Float64Array(slots), py = new Float64Array(slots), vx = new Float64Array(slots), vy = new Float64Array(slots);
	const sp = new Int8Array(slots).fill(-1);
	const out: BoxRun = {
		config, frames, slots,
		x: new Float32Array(frames * slots), y: new Float32Array(frames * slots), sp: new Int8Array(frames * slots),
		counts: species.map(() => new Uint16Array(frames)), left: species.map(() => new Uint16Array(frames)),
		wallX: new Float32Array(frames), pressure: new Float32Array(frames), temperature: new Float32Array(frames),
		collisions: new Uint32Array(frames), reacted: reactions.map(() => new Uint32Array(frames)), events: [],
	};

	let wall = w * timelineAt(config.volume, 0);
	const freeSlot = () => { for (let i = 0; i < slots; i++) if (sp[i] < 0) return i; return -1; };
	const thermal = (i: number, T: number) => { const s = speed0 * Math.sqrt(Math.max(T, 0) / (2 * M[sp[i]])); vx[i] = gauss() * s; vy[i] = gauss() * s; };
	const place = (s: number, region: Region, T: number) => {
		const i = freeSlot();
		if (i < 0) return;
		const mid = membrane ? membrane.x : wall / 2, r = R[s];
		const lo = region === 'right' ? mid + r : r, hi = region === 'left' ? mid - r : wall - r;
		for (let tries = 0; tries < 60; tries++) {
			px[i] = lo + rand() * Math.max(1, hi - lo); py[i] = r + rand() * Math.max(1, h - 2 * r);
			let clear = true;
			for (let j = 0; j < slots && clear; j++) if (j !== i && sp[j] >= 0 && Math.hypot(px[i] - px[j], py[i] - py[j]) < r + R[sp[j]]) clear = false;
			if (clear) break;
		}
		sp[i] = s; thermal(i, T);
	};
	const T0 = timelineAt(config.temperature, 0);
	for (const init of config.initial) for (let n = 0; n < init.count; n++) place(index(init.species), init.region ?? 'all', T0);
	const idealP0 = (starting * T0 * kT1) / (wall * h) || 1;

	const cell = 2 * Math.max(...R) + 1;
	const cols = Math.max(1, Math.ceil(w / cell)), rows = Math.max(1, Math.ceil(h / cell));
	const head = new Int32Array(cols * rows), next = new Int32Array(slots);
	let collisions = 0, smoothP = idealP0;
	const reactedSoFar = reactions.map(() => 0);
	const substeps = 2, dt = 1 / substeps;

	for (let f = 0; f < frames; f++) {
		const T = timelineAt(config.temperature, f);
		const newWall = w * timelineAt(config.volume, f), wallV = newWall - wall;
		for (const inj of config.inject ?? []) if (inj.at === f) for (let n = 0; n < inj.count; n++) place(index(inj.species), inj.region ?? 'all', T);
		for (const rem of config.remove ?? []) if (rem.at === f) { const s = index(rem.species); let left = rem.count; for (let i = slots - 1; i >= 0 && left > 0; i--) if (sp[i] === s) { sp[i] = -1; left--; } }

		let impulse = 0;
		for (let step = 0; step < substeps; step++) {
			wall += wallV * dt;
			for (let i = 0; i < slots; i++) {
				const s = sp[i];
				if (s < 0) continue;
				const r = R[s], m = M[s], ox = px[i];
				px[i] += vx[i] * dt; py[i] += vy[i] * dt;
				if (membrane && (ox - membrane.x) * (px[i] - membrane.x) < 0 && !(membrane.pass[s] && rand() < membrane.chance)) { px[i] = membrane.x + (ox < membrane.x ? -0.5 : 0.5); vx[i] = -vx[i]; }
				if (px[i] < r) { px[i] = r; if (vx[i] < 0) { impulse += 2 * m * -vx[i]; vx[i] = -vx[i]; } }
				if (px[i] > wall - r) { px[i] = wall - r; if (vx[i] > wallV) { impulse += 2 * m * (vx[i] - wallV); vx[i] = 2 * wallV - vx[i]; } }
				if (py[i] < r) { py[i] = r; if (vy[i] < 0) { impulse += 2 * m * -vy[i]; vy[i] = -vy[i]; } }
				if (py[i] > h - r) { py[i] = h - r; if (vy[i] > 0) { impulse += 2 * m * vy[i]; vy[i] = -vy[i]; } }
			}
			// Particle-particle collisions on a grid, so the cost stays low with a few hundred particles.
			head.fill(-1);
			for (let i = 0; i < slots; i++) {
				if (sp[i] < 0) continue;
				const c = Math.min(rows - 1, Math.max(0, Math.floor(py[i] / cell))) * cols + Math.min(cols - 1, Math.max(0, Math.floor(px[i] / cell)));
				next[i] = head[c]; head[c] = i;
			}
			for (let cy = 0; cy < rows; cy++) for (let cx = 0; cx < cols; cx++) for (let i = head[cy * cols + cx]; i >= 0; i = next[i]) {
				for (let oy = 0; oy <= 1; oy++) for (let ox = oy ? -1 : 0; ox <= 1; ox++) {
					const nx = cx + ox, ny = cy + oy;
					if (nx < 0 || nx >= cols || ny >= rows) continue;
					const same = ox === 0 && oy === 0;
					for (let j = same ? next[i] : head[ny * cols + nx]; j >= 0; j = next[j]) {
						const si = sp[i], sj = sp[j];
						if (si < 0 || sj < 0) continue;
						const dx = px[i] - px[j], dy = py[i] - py[j], dist = Math.hypot(dx, dy), reach = R[si] + R[sj];
						if (dist >= reach || dist === 0) continue;
						const ux = dx / dist, uy = dy / dist;
						const vn = (vx[i] - vx[j]) * ux + (vy[i] - vy[j]) * uy;
						if (vn >= 0) continue; // already moving apart
						collisions++;
						const mi = M[si], mj = M[sj], mu = (mi * mj) / (mi + mj);
						let reacted = false;
						for (let k = 0; k < reactions.length && !reacted; k++) {
							const rx = reactions[k];
							if (rx.b < 0 || f < (rx.activeFrom ?? 0) || (rx.until !== undefined && f >= rx.until)) continue;
							const straight = si === rx.a && sj === rx.b, swapped = si === rx.b && sj === rx.a;
							if (!straight && !swapped) continue;
							const ok = 0.5 * mu * vn * vn >= (rx.ea ?? 0) * kT1 && rand() < (rx.p ?? 1);
							out.events.push({f, x: (px[i] + px[j]) / 2, y: (py[i] + py[j]) / 2, reaction: k, ok});
							if (!ok) break;
							reacted = true; reactedSoFar[k]++;
							if (rx.d < 0) {
								// Two become one: keep the centre of mass and its momentum.
								px[i] = (px[i] * mi + px[j] * mj) / (mi + mj); py[i] = (py[i] * mi + py[j] * mj) / (mi + mj);
								vx[i] = (vx[i] * mi + vx[j] * mj) / (mi + mj); vy[i] = (vy[i] * mi + vy[j] * mj) / (mi + mj);
								sp[i] = rx.c; sp[j] = -1;
							} else {
								sp[i] = straight ? rx.c : rx.d; sp[j] = straight ? rx.d : rx.c;
								const J = 2 * mu * vn;
								vx[i] -= (J / mi) * ux; vy[i] -= (J / mi) * uy; vx[j] += (J / mj) * ux; vy[j] += (J / mj) * uy;
							}
						}
						if (!reacted) {
							const J = 2 * mu * vn;
							vx[i] -= (J / mi) * ux; vy[i] -= (J / mi) * uy; vx[j] += (J / mj) * ux; vy[j] += (J / mj) * uy;
							const push = (reach - dist) / 2;
							px[i] += ux * push; py[i] += uy * push; px[j] -= ux * push; py[j] -= uy * push;
						}
					}
				}
			}
		}
		// One-particle reactions: change, or break into two that move apart.
		for (let k = 0; k < reactions.length; k++) {
			const rx = reactions[k];
			if (rx.b >= 0 || f < (rx.activeFrom ?? 0) || (rx.until !== undefined && f >= rx.until)) continue;
			const chance = ((rx.rate ?? 0.2) / fps) * (rx.ea ? Math.exp(-rx.ea * (1 / Math.max(T, 0.05) - 1)) : 1);
			for (let i = 0; i < slots; i++) {
				if (sp[i] !== rx.a || rand() >= chance) continue;
				if (rx.d < 0) { sp[i] = rx.c; reactedSoFar[k]++; continue; }
				const j = freeSlot();
				if (j < 0) continue;
				const ang = rand() * Math.PI * 2, ux = Math.cos(ang), uy = Math.sin(ang), gap = (R[rx.c] + R[rx.d]) / 2 + 0.5;
				const kick = speed0 * Math.sqrt(T / 2);
				sp[j] = rx.d; px[j] = Math.min(wall - R[rx.d], Math.max(R[rx.d], px[i] - ux * gap)); py[j] = Math.min(h - R[rx.d], Math.max(R[rx.d], py[i] - uy * gap));
				vx[j] = vx[i] - (ux * kick) / M[rx.d]; vy[j] = vy[i] - (uy * kick) / M[rx.d];
				sp[i] = rx.c; px[i] = Math.min(wall - R[rx.c], Math.max(R[rx.c], px[i] + ux * gap)); py[i] = Math.min(h - R[rx.c], Math.max(R[rx.c], py[i] + uy * gap));
				vx[i] += (ux * kick) / M[rx.c]; vy[i] += (uy * kick) / M[rx.c];
				reactedSoFar[k]++;
				out.events.push({f, x: px[i], y: py[i], reaction: k, ok: true});
			}
		}
		// Temperature: measure, then nudge towards the timeline.
		let ke = 0, alive = 0;
		for (let i = 0; i < slots; i++) if (sp[i] >= 0) { ke += 0.5 * M[sp[i]] * (vx[i] * vx[i] + vy[i] * vy[i]); alive++; }
		const mean = alive ? ke / alive : 0;
		if (strength > 0 && mean > 0) { const k = Math.sqrt(Math.max(0.01, 1 + strength * ((T * kT1) / mean - 1))); for (let i = 0; i < slots; i++) if (sp[i] >= 0) { vx[i] *= k; vy[i] *= k; } }
		// Pressure: force per length of wall this frame, smoothed over about a second.
		const instant = impulse / (2 * (wall + h));
		smoothP += (instant - smoothP) * (f < 2 ? 1 : 0.06);

		const base = f * slots;
		const mid = membrane ? membrane.x : wall / 2;
		for (let i = 0; i < slots; i++) {
			out.x[base + i] = px[i]; out.y[base + i] = py[i]; out.sp[base + i] = sp[i];
			if (sp[i] >= 0) { out.counts[sp[i]][f]++; if (px[i] < mid) out.left[sp[i]][f]++; }
		}
		out.wallX[f] = wall; out.pressure[f] = smoothP / idealP0; out.temperature[f] = mean / kT1; out.collisions[f] = collisions;
		for (let k = 0; k < reactions.length; k++) out.reacted[k][f] = reactedSoFar[k];
	}
	return out;
};

/** Clamp a (possibly fractional or out-of-range) frame to one the run holds. */
export const boxFrame = (run: BoxRun, f: number) => Math.min(run.frames - 1, Math.max(0, Math.round(f)));
/** Count of one species at a frame. */
export const countAt = (run: BoxRun, speciesId: string, f: number) => run.counts[run.config.species.findIndex(s => s.id === speciesId)][boxFrame(run, f)];
/** How often a reaction is happening, per second, averaged over the last `window` frames. */
export const rateAt = (run: BoxRun, reaction: number, f: number, window = 45) => {
	const b = boxFrame(run, f), a = Math.max(0, b - window);
	return b === a ? 0 : ((run.reacted[reaction][b] - run.reacted[reaction][a]) / (b - a)) * (run.config.fps ?? 30);
};
/** Collisions per second between particles, averaged over the last `window` frames. */
export const collisionRateAt = (run: BoxRun, f: number, window = 45) => {
	const b = boxFrame(run, f), a = Math.max(0, b - window);
	return b === a ? 0 : ((run.collisions[b] - run.collisions[a]) / (b - a)) * (run.config.fps ?? 30);
};
