// Lesson parts for phys-y12-m6-v02: the strobe trajectory mode for the plate stage (kit gap 2): a run on the field
// motion engine drawn at true scale (uniform px per metre on both axes), its trail, strobe images at equal time
// steps, and the plate stage itself from v01. Colour roles (design, Revision 2): field lines blue, v_x teal, v_y
// teal dashed, forces amber, acceleration violet, L, d, y and d/2 navy, the projectile ghost grey (full ink),
// kinetic energy orange (handoff), answers in dark-ink frames, mistakes slate (root rule R1).
import React from 'react';
import {stateAt, trailTo} from '../../sims/field-motion';
import type {MotionPath} from '../../sims/field-motion';
import {INK} from '../../shared/tokens';
import {Particle, StrobeDot} from '../../physics/electromagnetism/plates';
import type {PG} from '../../physics/electromagnetism/plates';
import {AMBER, BLUE, CardRect, GREY, Givens, Lbl, NAVY, ORANGE, Ring, SLATE, Shrunk, Stage, Strip, T, TEAL, VIOLET, VecArrow, comma, fx, lerpG, lerpS, logLerp, sci, usePulse} from '../phys-y12-m6-v01/parts';
import {V01_PLATES} from '../phys-y12-m6-v01/parts';

export {AMBER, BLUE, CardRect, GREY, Givens, Lbl, NAVY, ORANGE, Ring, SLATE, Shrunk, Stage, Strip, T, TEAL, VIOLET, VecArrow, comma, fx, lerpG, lerpS, logLerp, sci, usePulse};
export const V02_PLATES = [...V01_PLATES];

/** A true-scale map: entry point (x0, y0) on screen, k px per metre (y up in metres, down on screen). */
export type Map = {x0: number; y0: number; k: number};
export const toPx = (m: Map, x: number, y: number): [number, number] => [m.x0 + x * m.k, m.y0 - y * m.k];
/** The plate geometry for a map, plate length L and gap d (centre-line entry). */
export const platesFor = (m: Map, L: number, d: number): PG => ({x1: m.x0, x2: m.x0 + L * m.k, yTop: m.y0 - (d / 2) * m.k, yBot: m.y0 + (d / 2) * m.k});
const dOf = (pts: [number, number][]) => pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
/** A run's trail to time t, drawn on a map. */
export const Trail: React.FC<{m: Map; path: MotionPath; t: number; color?: string; width?: number; dash?: string; opacity?: number}> = ({m, path, t, color = TEAL.stroke, width = 5, dash, opacity = 1}) => {
	if (t <= 0) return null;
	return <path d={dOf(trailTo(path, Math.min(t, path.duration), 300).map(([x, y]) => toPx(m, x, y)))} fill="none" stroke={color} strokeWidth={width} strokeDasharray={dash} strokeLinecap="round" opacity={opacity} />;
};
/** The particle at time t on a run. */
export const RunDot: React.FC<{m: Map; path: MotionPath; t: number; sign?: '+' | '−'; r?: number}> = ({m, path, t, sign = '−', r = 20}) => {
	const s = stateAt(path, Math.min(Math.max(0, t), path.duration));
	const [x, y] = toPx(m, s.x, s.y);
	return <Particle cx={x} cy={y} sign={sign} r={r} />;
};
/** Strobe images at n equal time steps up to time T (only those already reached by t), with optional arrows. */
export const Strobes: React.FC<{m: Map; path: MotionPath; T: number; n: number; t: number; vx?: number; a?: number; vy?: number; vyScale?: number; color?: string}> = ({m, path, T, n, t, vx = 0, a = 0, vy = 0, vyScale = 1, color = INK}) => (
	<g>
		{Array.from({length: n + 1}, (_, k) => (k * T) / n).filter(tk => tk <= t + 1e-15).map((tk, k) => {
			const s = stateAt(path, tk);
			const [x, y] = toPx(m, s.x, s.y);
			const vyLen = vy ? -(s.vy / path.vy[path.n] || 0) * vy * vyScale : 0;
			return (
				<g key={k}>
					<StrobeDot cx={x} cy={y} r={11} color={color} />
					{vx ? <VecArrow x={x + 14} y={y} dx={vx} dy={0} color={TEAL.stroke} width={4} head={12} /> : null}
					{a ? <VecArrow x={x} y={y - 14} dx={0} dy={-a} color={VIOLET.stroke} width={4} head={12} /> : null}
					{vy && Math.abs(vyLen) > 4 ? <VecArrow x={x + 4} y={y - 4} dx={0} dy={vyLen} color={TEAL.stroke} width={3.5} head={11} dash="6 5" /> : null}
				</g>
			);
		})}
	</g>
);
/** A small kinetic-energy bar (orange), length in px. */
export const KBar: React.FC<{x: number; y: number; len: number; h?: number; opacity?: number}> = ({x, y, len, h = 26, opacity = 1}) => <rect x={x} y={y} width={len} height={h} fill="#f6d2b4" stroke={ORANGE.stroke} strokeWidth={3} opacity={opacity} />;
