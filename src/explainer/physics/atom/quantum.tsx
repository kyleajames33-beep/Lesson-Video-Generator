// Module 8 kit, part 7: the quantum model of the atom (additive kit file, 26 November 2026; first used by
// phys-y12-m8-v13). Course-neutral: every label, number and colour of meaning comes from the lesson.
// - Hydrogen 1s: the wave psi(r) = e^(-r/a0) (relative to the centre) and the probability per unit volume psi^2.
//   `Cloud1s` draws a slice through the 1s cloud whose opacity is the probability per volume (linear, so the centre is
//   densest), a0 set in px by the lesson.
// - Detections: `cloudRun` is a chance-engine run (sims/chance.ts, a `weighted` experiment). Its outcomes are thin
//   rings of the slice, weighted by ring area times the 1s probability per volume, so every dot is one draw from the
//   hydrogen 1s distribution in that slice; `cloudDots` places the first k draws (angle and in-ring jitter from a
//   fixed hash of the draw number), so the build-up is the same in every render.
// - Orbital shapes: soft 1s and 2s spheres and three 2p dumbbells on an x, y, z axis set that turns about the
//   vertical (illustrative shapes, not plotted wavefunctions: the lesson tags them "shapes, not to scale").
// - String to atom: a standing wave (sims/waves.ts `standingMode`, fixed ends) drawn between two points that bends,
//   as `m` goes from 0 to 1, into a closed wave round a nucleus, and a dashed energy well under the nucleus.
import React from 'react';
import {runTrials} from '../../sims/chance';
import type {ChanceRun} from '../../sims/chance';
import {standingAt, standingMode} from '../../sims/waves';

const TAU = Math.PI * 2;
/** Bohr radius in pm (author note: hydrogen 1s, psi proportional to e^(-r/a0)). */
export const A0_PM = 52.9;
/** Hydrogen 1s wave size relative to the centre. */
export const psi1s = (rPm: number) => Math.exp(-Math.abs(rPm) / A0_PM);
/** Probability per unit volume relative to the centre (the square of the wave's size). */
export const prob1s = (rPm: number) => psi1s(rPm) ** 2;

/** A slice through the 1s cloud: opacity proportional to the probability per volume (e^(-2r/a0)); `a` is a0 in px. */
export const Cloud1s: React.FC<{cx: number; cy: number; a: number; id: string; color: string; opacity?: number; reach?: number; peak?: number}> = ({cx, cy, a, id, color, opacity = 1, reach = 4, peak = 0.85}) => {
	if (opacity <= 0.001) return null;
	const R = a * reach, stops = 14;
	return (
		<g opacity={opacity}>
			<defs>
				<radialGradient id={id} cx="50%" cy="50%" r="50%">
					{Array.from({length: stops + 1}, (_, i) => { const t = i / stops; return <stop key={i} offset={t} stopColor={color} stopOpacity={peak * Math.exp(-2 * reach * t)} />; })}
				</radialGradient>
			</defs>
			<circle cx={cx} cy={cy} r={R} fill={`url(#${id})`} />
		</g>
	);
};

// ---------------------------------------------------------------- detections (chance engine)
const BINS = 40, REACH = 4.5;
const hsh = (n: number, k: number) => { const s = Math.sin(n * 12.9898 + k * 78.233) * 43758.5453; return s - Math.floor(s); };
/** Seeded detections in a slice through hydrogen 1s: ring bins of width REACH/BINS a0, weight = ring area x e^(-2r/a0). */
export const cloudRun = (seed: number, trials: number): ChanceRun => runTrials({
	seed, trials,
	experiment: {kind: 'weighted', outcomes: Array.from({length: BINS}, (_, k) => { const r = ((k + 0.5) * REACH) / BINS; return {label: `r${k}`, weight: r * Math.exp(-2 * r)}; })},
});
/** The first k detections as offsets in px from the nucleus (a = a0 in px). */
export const cloudDots = (run: ChanceRun, k: number, a: number): [number, number][] => {
	const n = Math.min(run.trials, Math.max(0, Math.floor(k))), out: [number, number][] = [];
	for (let i = 0; i < n; i++) {
		const r = ((run.outcome[i] + hsh(i, 1)) * REACH * a) / BINS, ang = TAU * hsh(i, 2);
		out.push([r * Math.cos(ang), r * Math.sin(ang)]);
	}
	return out;
};

// ---------------------------------------------------------------- orbital shapes
export type OrbitalShow = {s1?: number; s2?: number; px?: number; py?: number; pz?: number; axes?: number};
/** Project a 3D point (x right, y up, z towards the viewer) after turning by phi about the vertical, tilted by 18 deg. */
export const project = (x: number, y: number, z: number, phi: number): [number, number, number] => {
	const c = Math.cos(phi), s = Math.sin(phi);
	const X = x * c + z * s, Z = -x * s + z * c;
	const t = (18 * Math.PI) / 180, Y = y * Math.cos(t) - Z * Math.sin(t), D = y * Math.sin(t) + Z * Math.cos(t);
	return [X, -Y, D];
};
/** 1s and 2s spheres and the three 2p dumbbells on turning axes (scale `s` px per unit; 2p lobes reach 1.9 units). */
export const OrbitalSet: React.FC<{cx: number; cy: number; s: number; phi: number; show: OrbitalShow; color: string; nucleus: string; ink: string; id: string; size?: number}> = ({cx, cy, s, phi, show, color, nucleus, ink, id, size = 30}) => {
	const lobes: {key: string; o: number; d: [number, number, number]}[] = [];
	(['px', 'py', 'pz'] as const).forEach(k => {
		const o = show[k] ?? 0;
		if (o <= 0.001) return;
		const v: [number, number, number] = k === 'px' ? [1, 0, 0] : k === 'py' ? [0, 1, 0] : [0, 0, 1];
		for (const sg of [1, -1]) lobes.push({key: `${k}${sg}`, o, d: project(v[0] * sg, v[1] * sg, v[2] * sg, phi)});
	});
	lobes.sort((p, q) => p.d[2] - q.d[2]);
	const ax = show.axes ?? 1;
	const axis = (v: [number, number, number], label: string) => { const p = project(v[0] * 2.4, v[1] * 2.4, v[2] * 2.4, phi), q = project(-v[0] * 2.4, -v[1] * 2.4, -v[2] * 2.4, phi); return <g key={label}><line x1={cx + q[0] * s} y1={cy + q[1] * s} x2={cx + p[0] * s} y2={cy + p[1] * s} stroke={ink} strokeWidth={2.5} strokeDasharray="10 7" /><text x={cx + p[0] * s * 1.08} y={cy + p[1] * s * 1.08 + size * 0.35} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: size, fill: ink}}>{label}</text></g>; };
	const lobe = (l: {key: string; o: number; d: [number, number, number]}) => {
		const L = Math.hypot(l.d[0], l.d[1]), ang = (Math.atan2(l.d[1], l.d[0]) * 180) / Math.PI;
		const len = 0.95 * Math.max(0.35, L) * s, w = 0.55 * s;
		const mx = cx + (l.d[0] / Math.max(L, 1e-6)) * len, my = cy + (l.d[1] / Math.max(L, 1e-6)) * len;
		return <ellipse key={l.key} cx={mx} cy={my} rx={len} ry={w} transform={`rotate(${ang} ${mx} ${my})`} fill={`url(#${id}-lobe)`} stroke={color} strokeWidth={2.5} opacity={l.o} />;
	};
	return (
		<g>
			<defs>
				<radialGradient id={`${id}-lobe`} cx="50%" cy="50%" r="50%"><stop offset="0" stopColor={color} stopOpacity={0.55} /><stop offset="1" stopColor={color} stopOpacity={0.18} /></radialGradient>
				<radialGradient id={`${id}-sph`} cx="42%" cy="38%" r="60%"><stop offset="0" stopColor={color} stopOpacity={0.5} /><stop offset="1" stopColor={color} stopOpacity={0.12} /></radialGradient>
			</defs>
			{ax > 0.001 ? <g opacity={ax}>{axis([1, 0, 0], 'x')}{axis([0, 1, 0], 'y')}{axis([0, 0, 1], 'z')}</g> : null}
			{(show.s2 ?? 0) > 0.001 ? <g opacity={show.s2}><circle cx={cx} cy={cy} r={1.75 * s} fill={`url(#${id}-sph)`} stroke={color} strokeWidth={3} /><circle cx={cx} cy={cy} r={0.75 * s} fill="none" stroke={color} strokeWidth={2} strokeDasharray="6 6" /></g> : null}
			{lobes.map(lobe)}
			{(show.s1 ?? 0) > 0.001 ? <circle cx={cx} cy={cy} r={0.8 * s} fill={`url(#${id}-sph)`} stroke={color} strokeWidth={3} opacity={show.s1} /> : null}
			<circle cx={cx} cy={cy} r={Math.max(7, 0.09 * s)} fill={nucleus} stroke="#ffffff" strokeWidth={2} />
		</g>
	);
};

// ---------------------------------------------------------------- string to atom
/**
 * A standing wave (harmonic n, fixed ends) between (x0, y0) and (x1, y1) at time t (periods), bent by m (0 to 1) into a
 * closed wave of radius R round (cx, cy): each point of the string moves to the matching angle on the circle and its
 * displacement turns from across the string to along the radius.
 */
export const stringAtomPath = (o: {x0: number; y0: number; x1: number; y1: number; cx: number; cy: number; R: number; n: number; amp: number; t: number; m: number; pts?: number}) => {
	const N = o.pts ?? 120, mode = standingMode(1, o.n);
	const dx = o.x1 - o.x0, dy = o.y1 - o.y0, L = Math.hypot(dx, dy), nx = -dy / L, ny = dx / L;
	return Array.from({length: N + 1}, (_, i) => {
		const u = i / N, yv = standingAt(mode, o.amp, 1, u, o.t);
		const sx = o.x0 + dx * u - nx * yv, sy = o.y0 + dy * u - ny * yv;
		const a = -Math.PI + TAU * u, r = o.R + yv;
		const ax = o.cx + r * Math.cos(a), ay = o.cy + r * Math.sin(a);
		return `${i ? 'L' : 'M'}${(sx + (ax - sx) * o.m).toFixed(1)},${(sy + (ay - sy) * o.m).toFixed(1)}`;
	}).join(' ');
};
/** A dashed energy well (an attraction well, deepest at the nucleus) under a nucleus at (cx, top). */
export const EnergyWell: React.FC<{cx: number; top: number; w: number; depth: number; color: string; opacity?: number}> = ({cx, top, w, depth, color, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const d = Array.from({length: 61}, (_, i) => { const x = -w / 2 + (w * i) / 60, y = top + depth * (1 - Math.min(1, Math.abs(x) / (w / 2)) ** 0.35); return `${i ? 'L' : 'M'}${(cx + x).toFixed(1)},${y.toFixed(1)}`; }).join(' ');
	return <path d={d} fill="none" stroke={color} strokeWidth={3} strokeDasharray="10 8" opacity={opacity} />;
};
