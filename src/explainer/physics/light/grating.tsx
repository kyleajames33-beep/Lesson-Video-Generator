// Grating kit for Module 7 (additive kit file, 25 November 2026; first used by phys-y12-m7-v07). Course-neutral:
// every label, number and colour of meaning is passed in by the lesson.
// - Ray: a straight ray from a point at an angle (degrees, measured up from the +x direction), drawn on from its start.
// - GratingBar: a coded grating seen edge-on in a top view (a dark bar with light slit gaps).
// - PhaseDial: a small dial whose hand shows a wave's phase on arrival (0 = pointing up).
// - SpectrumArc: one order of a white-light spectrum drawn as a coloured band on an arc (angles from d sin θ = mλ).
// - pairSum: relative brightness |Σ e^{ikδ}|² / N² for N in-line sources with a phase step δ between neighbours.
import React from 'react';
import {INK} from '../../shared/tokens';
import {wlColor} from './spectrum';

type Pt = [number, number];
const R = (d: number) => (d * Math.PI) / 180;

/** End point of a ray of length len from o at deg (up from +x). */
export const rayEnd = (o: Pt, deg: number, len: number): Pt => [o[0] + len * Math.cos(R(deg)), o[1] - len * Math.sin(R(deg))];
export const Ray: React.FC<{o: Pt; deg: number; len: number; color: string; width?: number; draw?: number; dash?: string; opacity?: number}> = ({o, deg, len, color, width = 5, draw = 1, dash, opacity = 1}) => {
	const u = Math.max(0, Math.min(1, draw));
	if (u <= 0.001 || opacity <= 0.001) return null;
	const e = rayEnd(o, deg, len * u);
	return <line x1={o[0]} y1={o[1]} x2={e[0]} y2={e[1]} stroke={color} strokeWidth={width} strokeDasharray={dash} strokeLinecap="round" opacity={opacity} />;
};
/** An arc of radius r about c from a0 to a1 (degrees, up from +x). */
export const arcPath = (c: Pt, r: number, a0: number, a1: number) => {
	const p0 = rayEnd(c, a0, r), p1 = rayEnd(c, a1, r);
	return `M${p0[0]},${p0[1]} A${r},${r} 0 ${Math.abs(a1 - a0) > 180 ? 1 : 0},${a1 > a0 ? 0 : 1} ${p1[0]},${p1[1]}`;
};

/** A grating edge-on (top view): a dark bar from y0 to y1 at x with `n` light gaps. */
export const GratingBar: React.FC<{x: number; y0: number; y1: number; n?: number; t?: number; opacity?: number; rotate?: number}> = ({x, y0, y1, n = 14, t = 12, opacity = 1, rotate = 0}) => {
	if (opacity <= 0.001) return null;
	const h = y1 - y0, cy = (y0 + y1) / 2;
	return (
		<g opacity={opacity} transform={rotate ? `rotate(${-rotate} ${x} ${cy})` : undefined}>
			<rect x={x - t / 2} y={y0} width={t} height={h} rx={2} fill="#34322f" />
			{Array.from({length: n}, (_, i) => <rect key={i} x={x - t / 2 - 1} y={y0 + ((i + 0.5) * h) / n - 1.5} width={t + 2} height={3} fill="#f4efe3" />)}
		</g>
	);
};

/** A phase dial: a ring with a hand at phase (radians; 0 points up, clockwise). */
export const PhaseDial: React.FC<{cx: number; cy: number; r: number; phase: number; color?: string; ring?: string; opacity?: number; hi?: string}> = ({cx, cy, r, phase, color = INK, ring = '#8a8378', opacity = 1, hi}) => {
	if (opacity <= 0.001) return null;
	const e: Pt = [cx + r * 0.8 * Math.sin(phase), cy - r * 0.8 * Math.cos(phase)];
	return (
		<g opacity={opacity}>
			<circle cx={cx} cy={cy} r={r} fill="#fffdf8" stroke={hi ?? ring} strokeWidth={hi ? 4 : 2.5} />
			<line x1={cx} y1={cy} x2={e[0]} y2={e[1]} stroke={color} strokeWidth={4} strokeLinecap="round" />
			<circle cx={e[0]} cy={e[1]} r={3.5} fill={color} />
		</g>
	);
};
/** Relative brightness for N sources in a line with phase step δ between neighbours (1 when all in step). */
export const pairSum = (N: number, delta: number) => {
	let re = 0, im = 0;
	for (let k = 0; k < N; k++) { re += Math.cos(k * delta); im += Math.sin(k * delta); }
	return (re * re + im * im) / (N * N);
};

/** One order of a white-light spectrum as a coloured band on an arc of radius r about c (d and λ in m; sign +1 above, -1 below). */
export const SpectrumArc: React.FC<{c: Pt; r: number; band: number; d: number; m: number; sign?: 1 | -1; nm0?: number; nm1?: number; reveal?: number; opacity?: number; steps?: number}> = ({c, r, band, d, m, sign = 1, nm0 = 400, nm1 = 700, reveal = 1, opacity = 1, steps = 40}) => {
	if (opacity <= 0.001 || reveal <= 0.001) return null;
	const k = Math.max(1, Math.round(steps * Math.min(1, reveal)));
	return (
		<g opacity={opacity}>
			{Array.from({length: k}, (_, i) => {
				const a = nm0 + ((nm1 - nm0) * i) / steps, b = nm0 + ((nm1 - nm0) * (i + 1)) / steps;
				const sa = (m * a * 1e-9) / d, sb = (m * b * 1e-9) / d;
				if (sb > 1) return null;
				const da = (sign * Math.asin(sa) * 180) / Math.PI, db = (sign * Math.asin(sb) * 180) / Math.PI;
				return <path key={i} d={arcPath(c, r, da, db)} stroke={wlColor((a + b) / 2)} strokeWidth={band} fill="none" />;
			})}
		</g>
	);
};
