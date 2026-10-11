import React from 'react';
import lesson from '../../../../docs/production/claude-pm/lessons/c2/measured/lesson.json';
import {HandText, INK, Plate, prog} from '../../kit';
import type {CueScene} from '../../cues';
import {useCurrentFrame} from 'remotion';
import {FLASK_CROP, FLASK_EQ, FLASK_NAT, FLASK_START} from './assets';

const L = lesson as unknown as {scenes: (CueScene & {durationInFrames: number})[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('scene not found ' + id);
	return s;
};

export const NAVY = '#2b4a8f';
export const VIOLET = '#8a5cc2';
export const GREENP = '#5da83f';
export const GREEN_INK = '#3f7d29';

export const Heading: React.FC<{text: string; at?: number; size?: number; color?: string; out?: number}> = ({text, at = 4, size = 70, color = INK, out}) => {
	const f = useCurrentFrame();
	const o = out === undefined ? 1 : 1 - prog(f, out, 10);
	return <div style={{position: 'absolute', left: 96, top: 92, opacity: o}}><HandText text={text} at={at} size={size} cps={30} color={color} /></div>;
};

/** Piecewise value over local frames. smooth = eased between keys, otherwise linear. */
export const kf = (f: number, pts: [number, number][], smooth = true): number => {
	if (f <= pts[0][0]) return pts[0][1];
	for (let i = 0; i + 1 < pts.length; i++) {
		const [a, va] = pts[i], [b, vb] = pts[i + 1];
		if (f < b) {
			const u = (f - a) / (b - a);
			const s = smooth ? u * u * (3 - 2 * u) : u;
			return va + (vb - va) * s;
		}
	}
	return pts[pts.length - 1][1];
};

// ---------- the (made-up) rate model: forward = 250[PCl5], reverse = 4687.5[PCl3][Cl2] ----------
export const KF = 250, KR = 4687.5;
const U_MAX = 7.2, DU = 0.002;
const run = (x0: number) => {
	const N = Math.round(U_MAX / DU);
	const out = new Float32Array(N + 1);
	let x = x0;
	for (let i = 0; i <= N; i++) {
		out[i] = x;
		x += ((KF * (0.2 - x) - KR * x * x) / 1000) * DU;
	}
	return out;
};
const FROM_REACTANT = run(0), FROM_PRODUCT = run(0.2);
/** [PCl3] = [Cl2] in mol/L at model time u (u in 0..7.2). start 'r' = reactant only, 'p' = products only. */
export const xAt = (start: 'r' | 'p', u: number) => {
	const a = start === 'r' ? FROM_REACTANT : FROM_PRODUCT;
	const i = Math.max(0, Math.min(a.length - 1, u / DU));
	const i0 = Math.floor(i), i1 = Math.min(a.length - 1, i0 + 1);
	return a[i0] + (a[i1] - a[i0]) * (i - i0);
};
export const fwdAt = (start: 'r' | 'p', u: number) => KF * (0.2 - xAt(start, u));
export const revAt = (start: 'r' | 'p', u: number) => KR * xAt(start, u) ** 2;
/** First model time at which [PCl3] reaches x (reactant start). */
export const uWhere = (x: number) => {
	for (let u = 0; u <= U_MAX; u += 0.01) if (xAt('r', u) >= x) return u;
	return U_MAX;
};
export const U_EQ = uWhere(0.0795);

/** Painted flask pair. `eq` 0..1 crossfades the colourless plate to the pale yellow-green one. Plate is w wide. */
export const PaintedFlask: React.FC<{x: number; y: number; w: number; eq?: number; opacity?: number}> = ({x, y, w, eq = 0, opacity = 1}) => (
	<>
		<Plate src={FLASK_START} natural={FLASK_NAT} crop={FLASK_CROP} width={w} style={{left: x, top: y, opacity: (1 - eq) * opacity}} />
		{eq > 0 ? <Plate src={FLASK_EQ} natural={FLASK_NAT} crop={FLASK_CROP} width={w} style={{left: x, top: y, opacity: eq * opacity}} /> : null}
	</>
);
export const paintedH = (w: number) => (FLASK_CROP[3] / FLASK_CROP[2]) * w;
