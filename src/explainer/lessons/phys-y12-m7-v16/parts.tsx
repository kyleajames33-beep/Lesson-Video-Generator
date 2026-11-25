// Lesson parts for phys-y12-m7-v16: the colour roles (design colour key, Revision 2, with root rule R1), the outgoing
// energy packets around a body, a coded molecule (oxygen red, carbon dark grey, hydrogen white, root rule R3) and v15's
// parts re-exported.
// Colour key: mass grey-blue bars; energy amber packets; electrons navy, positrons rose; protons rose, neutrons grey;
// the system boundary a dashed ink box; momentum arrows amber; answers in dark-ink frames; mistakes slate (root rule R1).
import React from 'react';
import {STATION} from '../../physics/electromagnetism/transformer';
import {BALANCE} from '../../physics/electromagnetism/bench';
import {MASS_ENERGY_PLATES} from '../../physics/light/massenergy';
import {Packet} from '../../physics/light/photo';
import {AMBER, GREY, Givens, INK, Lbl, NAVY, ORANGE, SLATE, Shrunk, Strip, TEAL, V15_PLATES, VArrow, VIOLET, fx, sci} from '../phys-y12-m7-v15/parts';

export {AMBER, GREY, Givens, INK, Lbl, NAVY, ORANGE, SLATE, Shrunk, Strip, TEAL, VArrow, VIOLET, fx, sci};
export const MASS = {ink: '#3e5472', stroke: '#5f7896', soft: '#dde4ee'};
export const ROSE = {ink: '#a83a5c', stroke: '#c4587a', soft: '#f6dde5'};
export const NEUTRON = '#9a958c';
export const V16_PLATES = [...new Set([...V15_PLATES, ...MASS_ENERGY_PLATES, STATION.src, BALANCE.src])];

/** Amber packets streaming out of a body at (cx, cy) from radius r0 to r1 (time t in seconds); `inward` reverses them. */
export const Outflow: React.FC<{cx: number; cy: number; r0: number; r1: number; t: number; n?: number; inward?: boolean; opacity?: number; len?: number}> = ({cx, cy, r0, r1, t, n = 10, inward = false, opacity = 1, len = 50}) => {
	if (opacity <= 0.001) return null;
	return (
		<g opacity={opacity}>
			{Array.from({length: n}, (_, i) => {
				const a = (i / n) * 2 * Math.PI + 0.3, u0 = ((t * 0.6 + (i * 0.37) % 1) % 1), u = inward ? 1 - u0 : u0;
				const r = r0 + (r1 - r0) * u;
				return <Packet key={i} x={cx + r * Math.cos(a)} y={cy + r * Math.sin(a)} deg={(a * 180) / Math.PI} len={len} color={AMBER.stroke} opacity={1 - 0.6 * u} />;
			})}
		</g>
	);
};
/** A small coded molecule pair (CO₂ beside H₂O) with outer electrons that shift by `shift` (0 to 1). */
export const Molecules: React.FC<{x: number; y: number; s?: number; shift?: number}> = ({x, y, s = 1, shift = 0}) => {
	const atom = (cx: number, cy: number, r: number, fill: string, k: number) => <circle key={k} cx={x + cx * s} cy={y + cy * s} r={r * s} fill={fill} stroke={INK} strokeWidth={2.5} />;
	const e = (cx: number, cy: number, k: number) => <circle key={`e${k}`} cx={x + cx * s} cy={y + cy * s} r={6 * s} fill={NAVY.stroke} />;
	return (
		<g>
			{atom(60, 60, 30, '#c8443a', 1)}{atom(130, 60, 34, '#4a4642', 2)}{atom(200, 60, 30, '#c8443a', 3)}
			{atom(300, 70, 32, '#c8443a', 4)}{atom(262, 112, 20, '#ffffff', 5)}{atom(338, 112, 20, '#ffffff', 6)}
			{e(95 + 10 * shift, 32, 1)}{e(165 - 10 * shift, 32, 2)}{e(95, 88 + 6 * shift, 3)}{e(281 + 8 * shift, 90, 4)}{e(319 - 8 * shift, 90, 5)}
		</g>
	);
};
export const BAL = BALANCE, PSTATION = STATION;
