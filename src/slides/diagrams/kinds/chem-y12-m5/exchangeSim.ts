// exchangeSim — a deterministic A ⇌ B model for the equilibrium dioramas.
//
// The expected particle counts follow first-order kinetics both ways
// (forward rate = kf·nA, reverse rate = kr·nB, per frame), integrated in small
// Euler steps. Individual hops are emitted each time the cumulative forward or
// reverse count crosses a whole number, so the particles on screen always agree
// with the smooth curves, and at equilibrium hops keep firing both ways at the
// same rate while the counts stay put.
//
// Disturbances: at a frame, add particles to either side (a concentration
// change), or change kf/kr (a temperature change: a new Keq). Everything is
// cached per config, so any frame can be drawn on its own.

export type ExchangeEvent = {dir: 'f' | 'r'; start: number};
export type ExchangeDisturb = {at: number; addLeft?: number; addRight?: number; kf?: number; kr?: number};
export type ExchangeConfig = {
	/** Particles on each side at frame 0. */
	left0: number;
	right0: number;
	/** Per-frame rate constants. Keq = kf / kr (= nB / nA at equilibrium). */
	kf: number;
	kr: number;
	/** Frame the reaction starts (before this nothing hops). */
	start: number;
	frames: number;
	disturb?: ExchangeDisturb[];
	/** Frames a hop spends in the air. */
	flight: number;
};
export type ExchangeRun = {
	/** Continuous expected counts per frame. */
	nA: Float64Array;
	nB: Float64Array;
	/** Forward and reverse rates per frame (particles per frame). */
	rf: Float64Array;
	rr: Float64Array;
	events: ExchangeEvent[];
	/** Discrete particles sitting on each plinth per frame. */
	onLeft: Int32Array;
	onRight: Int32Array;
	/** Particles added by a disturbance, by frame, on each side (cumulative). */
	addedLeft: Int32Array;
	addedRight: Int32Array;
};

const cache = new Map<string, ExchangeRun>();

export const runExchange = (cfg: ExchangeConfig): ExchangeRun => {
	const key = JSON.stringify(cfg);
	const hit = cache.get(key);
	if (hit) return hit;
	const {left0, right0, start, frames, flight, disturb = []} = cfg;
	let {kf, kr} = cfg;
	const T = frames + 1;
	const nA = new Float64Array(T), nB = new Float64Array(T), rf = new Float64Array(T), rr = new Float64Array(T);
	const addedLeft = new Int32Array(T), addedRight = new Int32Array(T);
	const events: ExchangeEvent[] = [];
	let a = left0, b = right0, F = 0, R = 0, addL = 0, addR = 0;
	// Start the hop counters half a step in, so a system that starts at
	// equilibrium fires its forward and reverse hops on the same frames.
	F = 0.5;
	R = 0.5;
	for (let f = 0; f < T; f++) {
		for (const d of disturb) {
			if (d.at === f) {
				a += d.addLeft ?? 0;
				b += d.addRight ?? 0;
				addL += d.addLeft ?? 0;
				addR += d.addRight ?? 0;
				if (d.kf !== undefined) kf = d.kf;
				if (d.kr !== undefined) kr = d.kr;
			}
		}
		addedLeft[f] = addL;
		addedRight[f] = addR;
		nA[f] = a;
		nB[f] = b;
		rf[f] = f >= start ? kf * a : 0;
		rr[f] = f >= start ? kr * b : 0;
		if (f < start) continue;
		const SUB = 8;
		for (let s = 0; s < SUB; s++) {
			const df = (kf * a) / SUB, dr = (kr * b) / SUB;
			a += dr - df;
			b += df - dr;
			const F0 = Math.floor(F), R0 = Math.floor(R);
			F += df;
			R += dr;
			for (let k = F0; k < Math.floor(F); k++) events.push({dir: 'f', start: f});
			for (let k = R0; k < Math.floor(R); k++) events.push({dir: 'r', start: f});
		}
	}
	// Discrete occupancy: a hop leaves its plinth at `start` and lands `flight` frames later.
	const onLeft = new Int32Array(T), onRight = new Int32Array(T);
	const dL = new Int32Array(T + flight + 2), dR = new Int32Array(T + flight + 2);
	for (const e of events) {
		const land = e.start + flight;
		if (e.dir === 'f') {
			dL[e.start] -= 1;
			dR[land] += 1;
		} else {
			dR[e.start] -= 1;
			dL[land] += 1;
		}
	}
	let cl = left0, cr = right0;
	let prevAL = 0, prevAR = 0;
	for (let f = 0; f < T; f++) {
		cl += dL[f] + (addedLeft[f] - prevAL);
		cr += dR[f] + (addedRight[f] - prevAR);
		prevAL = addedLeft[f];
		prevAR = addedRight[f];
		onLeft[f] = cl;
		onRight[f] = cr;
	}
	const run = {nA, nB, rf, rr, events, onLeft, onRight, addedLeft, addedRight};
	cache.set(key, run);
	return run;
};
