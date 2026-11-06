// Anchor parts: a microscope field of dividing painted cells, and a staged plate scene with a slow
// camera push, a magnifier leader to an inset and a thumbnail mode.
import React, {useId, useMemo} from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, INK, INK_SOFT, prog, rng} from '../../kit';
import {PlateSpec, SvgPlate, smooth, vis} from './primitives';
import {MA12_PLATES} from './plates';

type Home = {x: number; y: number; ang: number; parent: number; ph: number};

/** Deterministic homes (unit-circle coordinates) for every cell, daughters placed beside their parents. */
const makeHomes = (seed: number, n0: number, maxCells: number, lenN: number): Home[] => {
	const r = rng(seed);
	const homes: Home[] = [];
	const R = 0.8;
	const relax = (h: Home, upto: number) => {
		for (let it = 0; it < 30; it++) {
			let mx = 0, my = 0;
			for (let j = 0; j < upto; j++) {
				const o = homes[j], dx = h.x - o.x, dy = h.y - o.y, d = Math.hypot(dx, dy) || 1e-3;
				const want = lenN * 1.15;
				if (d < want) { mx += (dx / d) * (want - d) * 0.5; my += (dy / d) * (want - d) * 0.5; }
			}
			h.x += mx; h.y += my;
			const rr = Math.hypot(h.x, h.y);
			if (rr > R) { h.x *= R / rr; h.y *= R / rr; }
		}
	};
	for (let i = 0; i < maxCells; i++) {
		if (i < n0) {
			// golden-angle spread with jitter, so the starting cells fill the whole field
			const a = i * 2.39996 + r() * 0.6, rad = Math.sqrt((i + 0.5) / n0) * 0.66 + (r() - 0.5) * 0.08;
			const h: Home = {x: Math.cos(a) * rad, y: Math.sin(a) * rad, ang: r() * 180, parent: -1, ph: r() * 6.28};
			relax(h, i); homes.push(h);
		} else {
			const p = (i - n0) % i;
			const par = homes[p];
			const ax = (par.ang * Math.PI) / 180;
			const side = r() < 0.5 ? 1 : -1;
			const h: Home = {x: par.x + Math.cos(ax) * lenN * 1.1 * side, y: par.y + Math.sin(ax) * lenN * 1.1 * side, ang: par.ang + (r() - 0.5) * 50, parent: p, ph: r() * 6.28};
			relax(h, i); homes.push(h);
		}
	}
	return homes;
};

/**
 * Circular microscope field of painted cells whose number follows a supplied count (cells in view,
 * usually scale × y). Each new cell is born by a division: the parent swaps to the dividing sprite,
 * pinches, and splits into two; the daughter glides to its own place. With `falling`, cells fade out
 * one by one as the count drops. Placement and drift are seeded, so every render is identical.
 * Never draws a coded organism: cells and field are painted plates.
 */
export const GrowthField: React.FC<{cx: number; cy: number; d: number; countAt: (frame: number) => number; at?: number; out?: number; seed?: number; maxCells?: number; cellLength?: number; falling?: boolean; field?: PlateSpec; cell?: PlateSpec; dividing?: PlateSpec; maxStartCells?: number}> = ({cx, cy, d, countAt, at = 0, out, seed = 7, maxCells = 32, cellLength, falling = false, field = MA12_PLATES.field, cell = MA12_PLATES.rod, dividing = MA12_PLATES.rodDividing, maxStartCells}) => {
	const f = useCurrentFrame();
	const id = `gf-${useId().replace(/:/g, '')}`;
	const R = d / 2;
	const L = cellLength ?? d * 0.12;
	const lenN = L / R;
	const n0 = Math.max(1, Math.min(maxCells, Math.round(falling ? (maxStartCells ?? countAt(0)) : countAt(0))));
	const homes = useMemo(() => makeHomes(seed, n0, maxCells, lenN), [seed, n0, maxCells, lenN]);
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const count = Math.max(0, Math.min(maxCells, countAt(f)));

	// Birth frame of cell i: first frame in a window round now where the count passes i + 0.5.
	const birth = (i: number): number => {
		if (i < n0) return -1e9;
		const thr = i + 0.5;
		if (countAt(f - 90) >= thr) return -1e9;
		for (let g = f - 90; g <= f + 24; g++) if (countAt(g) >= thr) return g;
		return 1e9;
	};
	const cellW = L, cellH = (L * (cell.box[3] - cell.box[1])) / (cell.box[2] - cell.box[0]);
	// The dividing sprite is drawn at the single cell's body height (its own aspect kept), so it reads as the same
	// cell stretched to about twice its length (ma12 sidecar: displayScaleAtSameBodyHeightAsSingle).
	const divH = cellH;
	const divW = (divH * (dividing.box[2] - dividing.box[0])) / (dividing.box[3] - dividing.box[1]);
	const sprite = (key: string, plate: PlateSpec, x: number, y: number, ang: number, w: number, h: number, op: number, sx = 1) => op > 0.01 ? (
		<g key={key} transform={`translate(${x},${y}) rotate(${ang}) scale(${sx},1)`} opacity={op}><SvgPlate plate={plate} x={-w / 2} y={-h / 2} w={w} /></g>
	) : null;
	const pos = (i: number) => {
		const hm = homes[i];
		const wob = 0.012;
		return {x: cx + (hm.x + Math.sin(f * 0.021 + hm.ph) * wob) * R, y: cy + (hm.y + Math.cos(f * 0.017 + hm.ph * 1.3) * wob) * R, ang: hm.ang + Math.sin(f * 0.012 + hm.ph) * 7};
	};
	// Lobe centres of the dividing sprite sit about 0.2375 of its width from the pinch.
	const LOBE = 0.2375;
	const births = homes.map((_, i) => birth(i));
	const items: React.ReactNode[] = [];
	for (let i = 0; i < maxCells; i++) {
		const q = pos(i);
		const k = String(i);
		if (falling) {
			const alive = smooth(Math.max(0, Math.min(1, count - i + 0.5)));
			items.push(sprite(k, cell, q.x, q.y, q.ang, cellW, cellH, alive, 0.8 + 0.2 * alive));
			continue;
		}
		const B = births[i];
		if (B > f) continue; // not yet born: its parent shows the pre-split
		const ax = (q.ang * Math.PI) / 180;
		// 1. this cell is about to divide: rod stretches, the dividing sprite fades in and pinches
		const child = homes.findIndex((h, j) => h.parent === i && births[j] > f && births[j] - f <= 22);
		if (child >= 0) {
			const u = 1 - (births[child] - f) / 22;
			const op = smooth(u * 1.6);
			items.push(sprite(k + 'r', cell, q.x, q.y, q.ang, cellW, cellH, 1 - op, 1 + 0.3 * u));
			items.push(sprite(k + 'd', dividing, q.x, q.y, q.ang, divW * (0.75 + 0.25 * smooth(u)), divH * (0.75 + 0.25 * smooth(u)), op));
			continue;
		}
		// 2. a daughter just born: starts on the far lobe of its parent and glides to its own place
		const par = homes[i].parent;
		if (par >= 0 && f - B < 70) {
			const pq = pos(par), pax = (pq.ang * Math.PI) / 180;
			const sx0 = pq.x + Math.cos(pax) * divW * LOBE, sy0 = pq.y + Math.sin(pax) * divW * LOBE;
			const e = smooth((f - B) / 70);
			items.push(sprite(k, cell, sx0 + (q.x - sx0) * e, sy0 + (q.y - sy0) * e, pq.ang + (q.ang - pq.ang) * e, cellW, cellH, 1));
			continue;
		}
		// 3. a parent that just split starts on the near lobe and slides back home
		let last = -1;
		homes.forEach((h, j) => { if (h.parent === i && births[j] <= f && f - births[j] < 50) last = j; });
		if (last >= 0) {
			const e = smooth((f - births[last]) / 50);
			const kk = (1 - e) * divW * LOBE;
			items.push(sprite(k, cell, q.x - Math.cos(ax) * kk, q.y - Math.sin(ax) * kk, q.ang, cellW, cellH, 1));
			continue;
		}
		items.push(sprite(k, cell, q.x, q.y, q.ang, cellW, cellH, 1));
	}
	return (
		<svg width={1920} height={1080} viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0, overflow: 'visible', opacity: o, pointerEvents: 'none'}}>
			<defs><clipPath id={id}><circle cx={cx} cy={cy} r={R * 0.955} /></clipPath></defs>
			<SvgPlate plate={field} x={cx - R} y={cy - R} w={d} />
			<g clipPath={`url(#${id})`}>{items}</g>
		</svg>
	);
};

/** Magnifier leader: a small ring on the plate and two dashed lines to the inset circle's tangents. */
export const MagnifierLeader: React.FC<{from: [number, number]; r?: number; to: [number, number]; R: number; at: number; out?: number; color?: string}> = ({from, r = 22, to, R, at, out, color = INK_SOFT}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out);
	if (o <= 0.001) return null;
	const [x1, y1] = from, [x2, y2] = to;
	const dx = x2 - x1, dy = y2 - y1, d = Math.hypot(dx, dy);
	const ang = Math.atan2(dy, dx);
	const beta = Math.asin(Math.max(-1, Math.min(1, (R - r) / d)));
	const p = (cx: number, cy: number, rad: number, a: number): [number, number] => [cx + rad * Math.cos(a), cy + rad * Math.sin(a)];
	const a1 = ang + Math.PI / 2 + beta, a2 = ang - Math.PI / 2 - beta;
	const s1 = p(x1, y1, r, a1), e1 = p(x2, y2, R, a1), s2 = p(x1, y1, r, a2), e2 = p(x2, y2, R, a2);
	return (
		<svg width={1920} height={1080} viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0, overflow: 'visible', opacity: o, pointerEvents: 'none'}}>
			<circle cx={x1} cy={y1} r={r * prog(f, at, 10)} fill="none" stroke={color} strokeWidth={3.5} />
			<DrawPath d={`M${s1[0]},${s1[1]} L${e1[0]},${e1[1]}`} at={at + 6} dur={22} color={color} width={3} dash="10 9" />
			<DrawPath d={`M${s2[0]},${s2[1]} L${e2[0]},${e2[1]}`} at={at + 8} dur={22} color={color} width={3} dash="10 9" />
		</svg>
	);
};

/**
 * Staging wrapper for an anchor scene: a slow camera push about an origin, and an optional thumbnail
 * mode that carries the whole live scene into a corner box (t from 0 to 1) while it keeps running.
 */
export const AnchorStage: React.FC<{children: React.ReactNode; push?: {start: number; dur: number; to: number; origin?: [number, number]}; thumb?: {t: number; x: number; y: number; scale: number; frame?: boolean}}> = ({children, push, thumb}) => {
	const f = useCurrentFrame();
	const pz = push ? 1 + (push.to - 1) * smooth(Math.max(0, Math.min(1, (f - push.start) / push.dur))) : 1;
	const [ox, oy] = push?.origin ?? [960, 540];
	const tt = thumb ? smooth(thumb.t) : 0;
	const s = pz * (1 - tt) + (thumb?.scale ?? 1) * tt;
	const txx = thumb ? thumb.x * tt : 0, tyy = thumb ? thumb.y * tt : 0;
	return (
		<div style={{position: 'absolute', inset: 0, transformOrigin: tt > 0 ? '0 0' : `${ox}px ${oy}px`, transform: tt > 0 ? `translate(${txx}px, ${tyy}px) scale(${s})` : `scale(${s})`}}>
			{thumb && tt > 0.02 && thumb.frame !== false ? <div style={{position: 'absolute', inset: 0, border: `${4 / s}px solid ${INK}`, borderRadius: 30 / s, opacity: tt, background: 'rgba(255,253,248,0.55)'}} /> : null}
			{children}
		</div>
	);
};
