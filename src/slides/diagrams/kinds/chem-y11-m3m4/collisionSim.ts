// collisionSim — a small deterministic hard-sphere simulation for the rate
// dioramas. Particles move in a box, bounce off the walls and off each other
// (equal-mass elastic collisions). An A–B collision is *effective* only if the
// collision is hard enough (normal relative speed ≥ `threshold`, standing in
// for Ea) AND both particles meet with their reactive spot facing the other
// (orientation). Effective pairs merge into one product particle.
//
// The whole run is precomputed once per config (seeded, no Math.random) and
// cached, so any frame can be drawn on its own and always looks the same.

import {hash01} from './shared';

export type SimConfig = {
	w: number;
	h: number;
	nA: number;
	nB: number;
	r: number;
	/** Speed range in px/frame. */
	speed: [number, number];
	/** Minimum normal relative speed for a reaction (the "Ea"). Infinity = never react. */
	threshold: number;
	/** Half-angle (radians) within which each reactive spot must face the partner. */
	orientTol: number;
	frames: number;
	seed: number;
	/** 'count': nothing reacts; `effectiveBy` counts hits hard enough to beat the threshold. */
	mode?: 'react' | 'count';
};

export type SimParticle = {x: number; y: number; a: number; kind: 'A' | 'B' | 'P'; alive: boolean; speed: number};
export type SimEvent = {f: number; x: number; y: number; effective: boolean};
export type SimRun = {frames: SimParticle[][]; events: SimEvent[]; collisionsBy: Int32Array; effectiveBy: Int32Array};

const cache = new Map<string, SimRun>();

type P = {x: number; y: number; vx: number; vy: number; a: number; spin: number; kind: 'A' | 'B' | 'P'; alive: boolean; r: number};

export const runSim = (cfg: SimConfig): SimRun => {
	const key = JSON.stringify(cfg);
	const hit = cache.get(key);
	if (hit) return hit;

	const {w, h, nA, nB, r, speed, threshold, orientTol, frames, seed, mode = 'react'} = cfg;
	const ps: P[] = [];
	const n = nA + nB;
	// Start on a jittered grid so nothing overlaps at frame 0; kinds alternate
	// A, B, A, B… so both are spread through the box.
	const cols = Math.ceil(Math.sqrt((n * w) / h));
	const rows = Math.ceil(n / cols);
	let ia = 0, ib = 0;
	for (let i = 0; i < n; i++) {
		const c = i % cols, rw = Math.floor(i / cols);
		const cellW = w / cols, cellH = h / rows;
		const x = cellW * (c + 0.5) + (hash01(seed + i * 3) - 0.5) * Math.max(0, cellW - 2 * r) * 0.6;
		const y = cellH * (rw + 0.5) + (hash01(seed + i * 5 + 1) - 0.5) * Math.max(0, cellH - 2 * r) * 0.6;
		const sp = speed[0] + (speed[1] - speed[0]) * hash01(seed + i * 7 + 2);
		const dir = hash01(seed + i * 11 + 3) * Math.PI * 2;
		const isA = (i % 2 === 0 && ia < nA) || ib >= nB;
		if (isA) ia++;
		else ib++;
		ps.push({
			x: Math.min(w - r, Math.max(r, x)), y: Math.min(h - r, Math.max(r, y)),
			vx: Math.cos(dir) * sp, vy: Math.sin(dir) * sp,
			a: hash01(seed + i * 13 + 4) * Math.PI * 2, spin: (hash01(seed + i * 17 + 5) - 0.5) * 0.12,
			kind: isA ? 'A' : 'B',
			alive: true, r,
		});
	}

	const out: SimParticle[][] = [];
	const events: SimEvent[] = [];
	const collisionsBy = new Int32Array(frames + 1);
	const effectiveBy = new Int32Array(frames + 1);
	let nc = 0, ne = 0;

	const facing = (p: P, nx: number, ny: number) => {
		const d = Math.atan2(ny, nx) - p.a;
		const wrapped = Math.atan2(Math.sin(d), Math.cos(d));
		return Math.abs(wrapped) <= orientTol;
	};

	for (let f = 0; f <= frames; f++) {
		out.push(ps.map((p) => ({x: p.x, y: p.y, a: p.a, kind: p.kind, alive: p.alive, speed: Math.hypot(p.vx, p.vy)})));
		collisionsBy[f] = nc;
		effectiveBy[f] = ne;
		const SUB = 2;
		for (let s = 0; s < SUB; s++) {
			for (const p of ps) {
				if (!p.alive) continue;
				p.x += p.vx / SUB;
				p.y += p.vy / SUB;
				p.a += p.spin / SUB;
				if (p.x < p.r) { p.x = p.r; p.vx = Math.abs(p.vx); }
				if (p.x > w - p.r) { p.x = w - p.r; p.vx = -Math.abs(p.vx); }
				if (p.y < p.r) { p.y = p.r; p.vy = Math.abs(p.vy); }
				if (p.y > h - p.r) { p.y = h - p.r; p.vy = -Math.abs(p.vy); }
			}
			for (let i = 0; i < ps.length; i++) {
				const p = ps[i];
				if (!p.alive) continue;
				for (let j = i + 1; j < ps.length; j++) {
					const q = ps[j];
					if (!q.alive) continue;
					const dx = q.x - p.x, dy = q.y - p.y;
					const d = Math.hypot(dx, dy);
					const min = p.r + q.r;
					if (d >= min || d === 0) continue;
					const nx = dx / d, ny = dy / d;
					const rel = (p.vx - q.vx) * nx + (p.vy - q.vy) * ny; // closing speed along the normal
					if (rel <= 0) continue;
					nc++;
					const ab = (p.kind === 'A' && q.kind === 'B') || (p.kind === 'B' && q.kind === 'A');
					if (mode === 'count' && rel >= threshold) ne++;
					if (mode === 'react' && ab && rel >= threshold && facing(p, nx, ny) && facing(q, -nx, -ny)) {
						ne++;
						events.push({f, x: (p.x + q.x) / 2, y: (p.y + q.y) / 2, effective: true});
						p.kind = 'P';
						p.x = (p.x + q.x) / 2;
						p.y = (p.y + q.y) / 2;
						p.vx = (p.vx + q.vx) / 2;
						p.vy = (p.vy + q.vy) / 2;
						p.r = r * 1.25;
						p.x = Math.min(w - p.r, Math.max(p.r, p.x));
						p.y = Math.min(h - p.r, Math.max(p.r, p.y));
						q.alive = false;
						continue;
					}
					events.push({f, x: (p.x + q.x) / 2, y: (p.y + q.y) / 2, effective: mode === 'count' && rel >= threshold});
					// Equal-mass elastic bounce: swap normal components.
					p.vx -= rel * nx; p.vy -= rel * ny;
					q.vx += rel * nx; q.vy += rel * ny;
					// Separate so they don't stick.
					const push = (min - d) / 2 + 0.01;
					p.x -= nx * push; p.y -= ny * push;
					q.x += nx * push; q.y += ny * push;
				}
			}
		}
	}
	const run = {frames: out, events, collisionsBy, effectiveBy};
	cache.set(key, run);
	return run;
};
