// Lesson parts for phys-y12-m6-v05: the orbit stage (kit gap 5: a charge on its exact circle from a magnetic run on
// the field motion engine, tangent v and inward F arrows with right-angle marks, a fixed speed readout and K bar),
// the v04 parts, and the crossed-field colour for the handoff. Colour roles (design, Revision 2): velocity teal;
// magnetic force amber (also the centripetal force); radius navy; field crosses slate; acceleration violet; kinetic
// energy orange; period and lap timers ink; F_B in the handoff rose; answers in dark-ink frames; mistakes slate (R1).
import React from 'react';
import {INK} from '../../shared/tokens';
import {BALL_PLATE} from '../../physics/projectile/board';
import {Particle} from '../../physics/electromagnetism/plates';
import {Arrow2, RightAngle} from '../../physics/electromagnetism/magnetic';
import {stateAt} from '../../sims/field-motion';
import type {MotionPath} from '../../sims/field-motion';
import {SAT_SRC, Satellite} from '../phys-y12-m5-v17/parts';
import {AMBER, CardRect, Earth, FIELD, GREY, Givens, Lbl, NAVY, ORANGE, Ring, Shrunk, Strip, T, TEAL, VIOLET, fx, sci, usePulse, V04_PLATES} from '../phys-y12-m6-v04/parts';

export {AMBER, CardRect, Earth, FIELD, GREY, Givens, Lbl, NAVY, ORANGE, Ring, Shrunk, Strip, T, TEAL, VIOLET, fx, sci, usePulse, Satellite};
export const ROSE = {ink: '#9e2f5c', stroke: '#c04a7a', soft: '#f6dce7'};
export const V05_PLATES = [...V04_PLATES, BALL_PLATE, SAT_SRC];

/** Screen position and unit velocity of a run at time t (wrapping round its lap), from origin (ox, oy). */
export const onRun = (run: MotionPath, t: number, ox: number, oy: number) => {
	const tt = ((t % run.duration) + run.duration) % run.duration;
	const s = stateAt(run, tt);
	const sp = Math.hypot(s.vx, s.vy) || 1;
	return {x: ox + s.x, y: oy - s.y, ux: s.vx / sp, uy: -s.vy / sp};
};
/** A charge with its tangent v (teal) and inward F (amber) arrows and the right-angle mark. `turn` +1: F to the left of v. */
export const VF: React.FC<{x: number; y: number; ux: number; uy: number; sign?: '+' | '−'; turn?: 1 | -1; vLen?: number; fLen?: number; r?: number; showF?: boolean; showV?: boolean; mark?: boolean; markW?: number; aLen?: number; opacity?: number}> = ({x, y, ux, uy, sign = '+', turn = 1, vLen = 150, fLen = 120, r = 22, showF = true, showV = true, mark = true, markW = 3.5, aLen = 0, opacity = 1}) => {
	const fx_ = turn * uy, fy = -turn * ux;
	return (
		<g opacity={opacity}>
			{showV ? <Arrow2 from={[x + ux * (r + 6), y + uy * (r + 6)]} to={[x + ux * vLen, y + uy * vLen]} color={TEAL.stroke} width={6} head={22} /> : null}
			{showF ? <Arrow2 from={[x + fx_ * (r + 6), y + fy * (r + 6)]} to={[x + fx_ * fLen, y + fy * fLen]} color={AMBER.stroke} width={7} head={24} /> : null}
			{aLen > 0 ? <Arrow2 from={[x + fx_ * (r + 6) - fy * 16, y + fy * (r + 6) + fx_ * 16]} to={[x + fx_ * aLen - fy * 16, y + fy * aLen + fx_ * 16]} color={VIOLET.stroke} width={6} head={22} /> : null}
			{mark && showF && showV ? <RightAngle x={x} y={y} u={[ux, uy]} v={[fx_, fy]} size={r + 18} width={markW} /> : null}
			<Particle cx={x} cy={y} sign={sign} r={r} />
		</g>
	);
};
/** A fixed kinetic-energy bar with its label. */
export const KFixed: React.FC<{x: number; y: number; len: number; label?: string; pulse?: number}> = ({x, y, len, label = 'K', pulse = 0}) => (
	<g>
		<rect x={x} y={y - 4 * pulse} width={len} height={30 + 8 * pulse} fill="#f6d2b4" stroke={ORANGE.stroke} strokeWidth={3 + 2 * pulse} />
		<text x={x + len + 14} y={y + 26} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 32, fill: ORANGE.ink} as React.CSSProperties}>{label}</text>
	</g>
);
/** An empty cross-hair marking a circle's centre (nothing there). */
export const CentreMark: React.FC<{x: number; y: number; opacity?: number}> = ({x, y, opacity = 1}) => (
	<g opacity={opacity}>
		<circle cx={x} cy={y} r={16} fill="none" stroke={INK} strokeWidth={3} strokeDasharray="5 5" />
		<path d={`M${x - 26},${y} L${x - 8},${y} M${x + 8},${y} L${x + 26},${y} M${x},${y - 26} L${x},${y - 8} M${x},${y + 8} L${x},${y + 26}`} stroke={INK} strokeWidth={3} />
	</g>
);
/** A scale bar of `px` pixels labelled `label`. */
export const ScaleBar: React.FC<{x: number; y: number; px: number; label: string}> = ({x, y, px, label}) => (
	<g>
		<path d={`M${x},${y - 10} L${x},${y} L${x + px},${y} L${x + px},${y - 10}`} fill="none" stroke={NAVY.stroke} strokeWidth={4} />
		<text x={x + px / 2} y={y + 34} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30, fill: NAVY.ink} as React.CSSProperties}>{label}</text>
	</g>
);
