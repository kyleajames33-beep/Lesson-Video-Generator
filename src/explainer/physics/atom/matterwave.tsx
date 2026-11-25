// Matter-wave kit for Module 8 (additive kit file, 26 November 2026; first used by phys-y12-m8-v12).
// Course-neutral: labels, numbers and colours of meaning are passed in by the lesson.
// - DIFF_TUBE: the painted electron diffraction tube (school apparatus) with anchors read on a 100 px grid on
//   26 November 2026 from the delivered plate (root decisions 17 and 18): electron gun (450, 322), graphite on its mesh
//   (1235, 325), screen centre (1655, 330) seen nearly edge-on, terminal posts black (705, 600) and red (1135, 600).
//   Rings are never drawn on the edge-on painted screen; use RingScreen as a face-on "screen view".
// - RingScreen: a face-on circular screen (dark until lit) with ring bands and optional single spots.
// - ringSpots: single landing spots for a ring pattern from the chance engine (`sims/chance.ts`, a `weighted`
//   experiment whose outcomes are the rings, weighted by brightness, plus a faint background), placed at seeded angles.
// - ringAngles: ring angles from the waves engine (`sims/waves.ts`, `brightAngles` for a spacing and a wavelength).
// - PolarLobe: a detector signal plotted against angle about a point (a lobe with its tip at a set angle).
// - CrystalRows: rows of grey atom discs.
import React from 'react';
import {CARD, INK} from '../../shared/tokens';
import {runTrials} from '../../sims/chance';
import type {ChanceRun} from '../../sims/chance';
import {brightAngles} from '../../sims/waves';
import type {LightSpec} from '../light/plates';

export const DIFF_TUBE: LightSpec = {src: 'assets/physics/y12p-electron-diffraction-tube-v1.png', W: 1920, H: 819, box: [128, 16, 1751, 798]};
export const DIFF_AT = {gun: [450, 322], graphite: [1235, 325], screen: [1655, 330], postBlack: [705, 600], postRed: [1135, 600]} as const;
export const MATTER_PLATES = [DIFF_TUBE.src];

/** First-order ring angle (radians) for spacing d and wavelength λ (waves engine; grating form d sin θ = λ). */
export const ringAngle = (d: number, lambda: number) => brightAngles(d, lambda).find(b => b.m === 1)?.angle ?? NaN;
/** Bragg form for a polycrystal: 2d sin θ = λ (the waves engine's first order for spacing 2d), deflection 2θ; ring
 *  radius on a flat screen at L: r = L tan 2θ. */
export const ringRadius = (d: number, lambda: number, L: number) => L * Math.tan(2 * ringAngle(2 * d, lambda));

/** A face-on screen: dark disc that lights pale green (`lit` 0 to 1), ring bands (radii in px) and spots. */
export const RingScreen: React.FC<{cx: number; cy: number; R: number; lit?: number; rings?: readonly number[]; ringW?: number; ringColor: string; ringOpacity?: number; spots?: readonly (readonly [number, number])[]; spotColor?: string; spotR?: number; opacity?: number; shade?: number}> = ({cx, cy, R, lit = 1, rings = [], ringW = 14, ringColor, ringOpacity = 1, spots = [], spotColor = '#1f3a68', spotR = 3.2, opacity = 1, shade = 0}) => {
	if (opacity <= 0.001) return null;
	return (
		<g opacity={opacity}>
			<circle cx={cx} cy={cy} r={R} fill="#22302a" stroke={INK} strokeWidth={4} />
			<circle cx={cx} cy={cy} r={R - 4} fill="#cfe8c4" opacity={lit} />
			{shade > 0.001 ? rings.map((r, i) => <circle key={`s${i}`} cx={cx} cy={cy} r={r} fill="none" stroke={ringColor} strokeWidth={ringW * 2.6} opacity={0.22 * shade} />) : null}
			{ringOpacity > 0.001 ? rings.map((r, i) => <circle key={i} cx={cx} cy={cy} r={r} fill="none" stroke={ringColor} strokeWidth={ringW} opacity={ringOpacity} />) : null}
			{spots.map(([x, y], i) => <circle key={`p${i}`} cx={cx + x} cy={cy + y} r={spotR} fill={spotColor} />)}
			<circle cx={cx} cy={cy} r={R} fill="none" stroke={INK} strokeWidth={4} />
		</g>
	);
};

const h01 = (n: number) => { const s = Math.sin(n * 127.1 + 311.7) * 43758.5453; return s - Math.floor(s); };
/** Single spots for rings of radii (px) with weights; `background` is the weight of a spread-out faint outcome. */
export const ringSpotRun = (o: {seed: number; trials: number; weights: readonly number[]; background?: number}): ChanceRun => runTrials({
	seed: o.seed, trials: o.trials,
	experiment: {kind: 'weighted', outcomes: [...o.weights.map((w, i) => ({label: `ring ${i + 1}`, weight: w})), {label: 'background', weight: o.background ?? 0.12}]},
});
/** Positions (relative to the screen centre) of the first k spots of a run. */
export const ringSpots = (run: ChanceRun, k: number, radii: readonly number[], R: number, jitter = 7): [number, number][] => {
	const out: [number, number][] = [];
	for (let i = 0; i < Math.min(k, run.trials); i++) {
		const v = run.outcome[i], a = 2 * Math.PI * h01(i + 1), j = (h01(i + 7.3) - 0.5) * 2 * jitter;
		const r = v < radii.length ? radii[v] + j : R * 0.92 * Math.sqrt(h01(i + 3.1));
		out.push([r * Math.cos(a), r * Math.sin(a)]);
	}
	return out;
};

/** A detector signal lobe about (cx, cy): angles from the upward vertical (degrees, clockwise positive), radius r0 to
 *  r0 + amp at the peak, Gaussian in angle (width w degrees); `grow` scales the peak. */
export const lobePath = (cx: number, cy: number, r0: number, amp: number, peak: number, w: number, grow = 1, a0 = -10, a1 = 90) => {
	const n = 80;
	return Array.from({length: n + 1}, (_, i) => {
		const a = a0 + ((a1 - a0) * i) / n, r = r0 + grow * amp * Math.exp(-(((a - peak) / w) ** 2)) + grow * amp * 0.18 * Math.exp(-(((a - 20) / 30) ** 2));
		const t = (a * Math.PI) / 180;
		return `${i ? 'L' : 'M'}${(cx + r * Math.sin(t)).toFixed(1)},${(cy - r * Math.cos(t)).toFixed(1)}`;
	}).join(' ');
};
export const PolarLobe: React.FC<{cx: number; cy: number; r0: number; amp: number; peak: number; w?: number; grow?: number; color: string; opacity?: number}> = ({cx, cy, r0, amp, peak, w = 9, grow = 1, color, opacity = 1}) => (opacity <= 0.001 ? null : <path d={`${lobePath(cx, cy, r0, amp, peak, w, grow)} L${cx},${cy} Z`} fill={color} fillOpacity={0.18} stroke={color} strokeWidth={4} opacity={opacity} />);

/** Rows of grey atom discs: `cols` by `rows` from (x, y), spacing s, radius r. */
export const CrystalRows: React.FC<{x: number; y: number; cols: number; rows: number; s: number; r?: number; opacity?: number; hi?: number}> = ({x, y, cols, rows, s, r = 14, opacity = 1, hi = -1}) => (opacity <= 0.001 ? null : (
	<g opacity={opacity}>{Array.from({length: rows}, (_, j) => Array.from({length: cols}, (_, i) => <circle key={`${i}-${j}`} cx={x + i * s} cy={y + j * s} r={r} fill={j === hi ? '#bdb6aa' : '#d0cbc2'} stroke="#8a8378" strokeWidth={2} />))}</g>
));
export const PaperCard: React.FC<{x: number; y: number; w: number; h: number; opacity?: number}> = ({x, y, w, h, opacity = 1}) => <rect x={x} y={y} width={w} height={h} rx={16} fill={CARD} stroke="rgba(60,45,20,0.25)" strokeWidth={2.5} opacity={opacity} />;
