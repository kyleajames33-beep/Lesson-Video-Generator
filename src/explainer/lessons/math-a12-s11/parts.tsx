// Lesson parts for math-a12-s11 (Revision 4: z-scores, the standard normal, comparing results, the table for
// areas beyond, negative z by symmetry, middles, and a judgement under the model; a snapper and a golden perch,
// then a drink-bottle filling machine), on the maths studio kit and s10's parts (imported read-only through
// ../math-a12-s10/parts, which carry s01 to s09's). Lesson-local rigs:
// - the numbers (checked at load against the design's "Numbers to verify");
// - BottleFill: the reused PET bottle plate with a coded fill level and a red 490 mL line;
// - MirrorTail: a left tail lifted and laid on the matching right tail (the design's TailMirror; not in the kit);
// - Pulse: a ring that pulses on cue.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, prog} from '../../kit';
import {FrameSvg, MATH_ROLES, normCdf, phi, plateHeight, regionPath, smooth, vis, zTableValue} from '../../math/studio';
import type {PlateSpec, PlotMap} from '../../math/studio';
import {Plate} from '../math-a12-s10/parts';

export * from '../math-a12-s10/parts';
export {S10FinalFrame, FishHandoff, FB, FISH_Y, FISH_W, FISH_H, fishMap} from '../math-a12-s10/s3';

// ---------- numbers (design "Numbers to verify") ----------
{
	const near = (a: number, b: number, t = 5e-5) => Math.abs(a - b) < t;
	const tail = (z: number) => 1 - phi(z);
	const checks: [string, boolean][] = [
		['z', near((45 - 40) / 4, 1.25, 1e-12) && near((40 - 36) / 2.5, 1.6, 1e-12) && near((490 - 500) / 8, -1.25, 1e-12) && near((474 - 500) / 8, -3.25, 1e-12)],
		['table', zTableValue(1.25) === 0.8944 && zTableValue(1.6) === 0.9452 && zTableValue(1.0) === 0.8413 && zTableValue(1.67) === 0.9525 && zTableValue(3.25) === 0.9994 && zTableValue(0.5) === 0.6915 && zTableValue(1.5) === 0.9332],
		['slider', [[0, 0.5], [0.5, 0.3085], [1, 0.1587], [1.25, 0.1056], [1.6, 0.0548], [2, 0.0228]].every(([z, p]) => near(tail(z), p))],
		['bolts', near(1 - 2 * 0.0475, 0.905, 1e-12) && near(2 * phi(5 / 3) - 1, 0.9044) && near(0.5 / 0.3, 5 / 3, 1e-12)],
		['bottle', near(normCdf(474, 500, 8), 0.000577, 1e-6) && near(1 - 0.9994, 0.0006, 1e-12)],
		['cohort', near((72 - 60) / 12, 1, 1e-12) && near((68 - 55) / 10, 1.3, 1e-12) && near((74 - 62) / 8, 1.5, 1e-12) && near((81 - 70) / 10, 1.1, 1e-12)],
		['A2', Math.sqrt(9) === 3 && near(4.5 / 3, 1.5, 1e-12) && near(1 - 0.9332, 0.0668, 1e-12) && near(4.5 / 9, 0.5, 1e-12)],
	];
	const bad = checks.filter(k => !k[1]).map(k => k[0]);
	if (bad.length) throw new Error('math-a12-s11 numbers: ' + bad.join(', '));
}

// ---------- plates (alpha > 32 boxes, measured 17 Nov) ----------
export const BOTTLE: PlateSpec = {src: 'assets/chemistry/m7-pet-bottle-v1.png', nat: [2000, 2000], box: [795, 402, 1205, 1598]};
/** The bottle's fillable body [x0, yTop, x1, yBottom] in native pixels (kit anchor petBottleInterior, estimated). */
export const BOTTLE_IN = [830, 760, 1170, 1540] as const;
export const HEX_BOLT: PlateSpec = {src: 'assets/maths/ma12-hex-bolt-v1.png', nat: [2048, 768], box: [348, 161, 1701, 617]};
export const S11_PLATES = [BOTTLE, HEX_BOLT];

/**
 * The PET bottle plate h tall (alpha box) at (x, y) with a coded fill to `level` mL on a scale where the body's
 * bottom is `range[0]` and its shoulder `range[1]`, and a dashed red limit line.
 */
export const BottleFill: React.FC<{x: number; y: number; h: number; level: number; range?: [number, number]; limit?: number; at?: number; out?: number; low?: boolean}> = ({x, y, h, level, range = [380, 520], limit = 490, at = -30, out, low = false}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const s = h / (BOTTLE.box[3] - BOTTLE.box[1]), w = (BOTTLE.box[2] - BOTTLE.box[0]) * s;
	const ix0 = x + (BOTTLE_IN[0] - BOTTLE.box[0]) * s, ix1 = x + (BOTTLE_IN[2] - BOTTLE.box[0]) * s, iy0 = y + (BOTTLE_IN[1] - BOTTLE.box[1]) * s, iy1 = y + (BOTTLE_IN[3] - BOTTLE.box[1]) * s;
	const Y = (v: number) => iy1 - ((v - range[0]) / (range[1] - range[0])) * (iy1 - iy0);
	const ly = Y(level);
	return <>
		<Plate plate={BOTTLE} x={x} y={y} w={w} at={at} out={out} />
		<FrameSvg style={{opacity: o}}>
			<rect x={ix0 + 3} y={ly} width={ix1 - ix0 - 6} height={iy1 - ly - 3} rx={8} fill={low ? '#e0675c' : '#4f9fd1'} opacity={0.5} />
			<line x1={ix0} x2={ix1} y1={ly} y2={ly} stroke={low ? MATH_ROLES.mistake.stroke : MATH_ROLES.a.stroke} strokeWidth={4} />
			<line x1={ix0 - 14} x2={ix1 + 14} y1={Y(limit)} y2={Y(limit)} stroke={MATH_ROLES.mistake.stroke} strokeWidth={3} strokeDasharray="8 6" />
			<text x={ix1 + 20} y={Y(limit) + 10} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, fill: MATH_ROLES.mistake.ink}} stroke="#fffdf8" strokeWidth={6} paintOrder="stroke">{limit}</text>
		</FrameSvg>
	</>;
};
export const bottleWidth = (h: number) => (h * (BOTTLE.box[2] - BOTTLE.box[0])) / (BOTTLE.box[3] - BOTTLE.box[1]);

/** In a plot's overlay: the tail below `-a` lifted and laid on the tail above `+a` (p 0..1), about centre c. */
export const MirrorTail: React.FC<{m: PlotMap; fn: (v: number) => number; c: number; a: number; lo: number; p: number; color?: string}> = ({m, fn, c, a, lo, p, color = MATH_ROLES.gradient.stroke}) => {
	if (p <= 0.001) return null;
	const [cx] = m.p(c, 0);
	const e = smooth(p), sx = 1 - 2 * e, lift = -90 * Math.sin(Math.PI * e);
	return <g transform={`translate(${cx},${lift}) scale(${sx},1) translate(${-cx},0)`}><path d={regionPath(m, fn, lo, c - a)} fill="rgba(124,92,191,0.25)" stroke={color} strokeWidth={4} strokeDasharray="10 7" /></g>;
};
/** A pulsing ring at frame (x, y) between `at` and `out`. */
export const Pulse: React.FC<{x: number; y: number; r?: number; at: number; out?: number; color?: string}> = ({x, y, r = 40, at, out, color = MATH_ROLES.k.stroke}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 10);
	if (o <= 0.01) return null;
	return <FrameSvg style={{opacity: o * (0.55 + 0.45 * Math.sin((f - at) / 5))}}><circle cx={x} cy={y} r={r} fill="none" stroke={color} strokeWidth={7} /></FrameSvg>;
};
export {plateHeight, prog};
