// Star plates and line-profile kit for Module 7 (additive kit file, 25 November 2026; first used by phys-y12-m7-v04).
// Course-neutral: line positions, widths and colours of meaning come from the lesson.
// Visible boxes measured from the alpha channel (threshold 20) on 25 November 2026 (discs centred in their boxes):
//   white star (brief 192), cool red star and hot blue star (brief 191), 1254 x 1254 each; the Sun plate is in plates.tsx.
// - Line shapes (depth from 0 to 1 at a wavelength offset): gaussDip (a narrow line), rotDip (rotational broadening: a
//   rounded dish with no long wings), lorentzDip (pressure broadening: a narrow core with long faint wings).
// - LineProfile: brightness against wavelength across one or more lines (continuum level at the top of the box).
// - dopplerShift: the line shift for a radial speed, Δλ = λ v / c (v much less than c).
import React from 'react';
import {INK} from '../../shared/tokens';
import type {LightSpec} from './plates';

type Pt = [number, number];
const P = (name: string) => `assets/physics/${name}.png`;
export const STAR_WHITE: LightSpec = {src: P('y12p-star-white-v1'), W: 1254, H: 1254, box: [49, 63, 1175, 1193]};
export const STAR_RED: LightSpec = {src: P('y12p-star-cool-red-v1'), W: 1254, H: 1254, box: [74, 88, 1153, 1166]};
export const STAR_BLUE: LightSpec = {src: P('y12p-star-hot-blue-v1'), W: 1254, H: 1254, box: [73, 88, 1153, 1167]};
export const STAR_PLATES = [STAR_WHITE, STAR_RED, STAR_BLUE].map(s => s.src);

/** Line shift (same units as lambda) for a radial speed v (m/s, positive receding): Δλ = λ v / c. */
export const dopplerShift = (lambda: number, v: number, c = 3.0e8) => (lambda * v) / c;

export type Dip = (x: number) => number;
/** A narrow line: Gaussian of width s and depth d at centre c. */
export const gaussDip = (c: number, s: number, d = 0.85): Dip => x => d * Math.exp(-0.5 * ((x - c) / s) ** 2);
/** Rotational broadening: an elliptical dish of half-width a (no long wings), depth d. */
export const rotDip = (c: number, a: number, d = 0.5): Dip => x => (Math.abs(x - c) >= a ? 0 : d * Math.sqrt(1 - ((x - c) / a) ** 2));
/** Pressure broadening: a Lorentzian of half-width g (narrow core, long faint wings), depth d. */
export const lorentzDip = (c: number, g: number, d = 0.85): Dip => x => d / (1 + ((x - c) / g) ** 2);
/** Sum of dips, capped at full depth. */
export const sumDips = (dips: readonly Dip[]): Dip => x => Math.min(0.98, dips.reduce((s, f) => s + f(x), 0));

/** Brightness against wavelength across the box: continuum at the top (y), full depth at y + h. x0 and x1 are the
 * wavelengths at the left and right edges. `draw` reveals left to right; `wing` highlights where the dip is small but
 * not zero (the long faint wings). */
export const LineProfile: React.FC<{x: number; y: number; w: number; h: number; x0: number; x1: number; dip: Dip; color?: string; width?: number; draw?: number; n?: number; axis?: boolean; opacity?: number; dashed?: boolean; wing?: {color: string; opacity: number}}> = ({x, y, w, h, x0, x1, dip, color = INK, width = 5, draw = 1, n = 220, axis = true, opacity = 1, dashed = false, wing}) => {
	if (opacity <= 0.001) return null;
	const m = Math.max(2, Math.round(n * Math.max(0, Math.min(1, draw))));
	const pts: Pt[] = Array.from({length: m}, (_, i) => { const lam = x0 + ((x1 - x0) * i) / (n - 1); return [x + (w * i) / (n - 1), y + h * dip(lam)]; });
	const d = pts.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
	const wingSegs = wing ? pts.map((p, i) => ({p, v: dip(x0 + ((x1 - x0) * i) / (n - 1))})).filter(q => q.v > 0.02 && q.v < 0.3) : [];
	return (
		<g opacity={opacity}>
			{axis ? <line x1={x} y1={y + h + 14} x2={x + w} y2={y + h + 14} stroke={INK} strokeWidth={3} /> : null}
			{wing && wing.opacity > 0.001 ? wingSegs.map((q, i) => <circle key={i} cx={q.p[0]} cy={q.p[1]} r={7} fill={wing.color} opacity={0.35 * wing.opacity} />) : null}
			<path d={d} fill="none" stroke={color} strokeWidth={width} strokeLinejoin="round" strokeDasharray={dashed ? '10 8' : undefined} />
		</g>
	);
};
