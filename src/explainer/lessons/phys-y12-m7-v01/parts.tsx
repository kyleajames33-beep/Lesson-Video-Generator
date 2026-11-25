// Lesson parts for phys-y12-m7-v01: the Module 7 colour key, the radio mast with its coded rod and oscillating
// electrons, the circuit symbols for a coil and a capacitor, a coded digital timer, and the Module 6 parts re-exported.
// Colour key (design, Revision 2, root decision 1): electric field blue; magnetic field slate; direction of travel navy;
// oscillating or accelerating charges rose; current orange; calculation results orange in dark-ink frames; measured
// historical values grey chips; light beams pale amber; mistakes slate (root rule R1).
import React from 'react';
import {FONT_DISPLAY} from '../../kit';
import {CARD, INK} from '../../shared/tokens';
import {Arrow, ChargeDot} from '../../physics/light/em';
import {ANCHOR, LIGHT_PLATES, LPlate, MAST, anchorAt} from '../../physics/light/plates';
import type {Place} from '../../physics/light/plates';
import {Givens} from '../phys-y12-m6-v17/parts';
import {Shrunk} from '../phys-y12-m6-v19/parts';
import {AMBER, BLUE, CardRect, FLUX, GREY, Lbl, NAVY, ORANGE, ROSE, Strip, fx, sci} from '../phys-y12-m6-v20/parts';

export {AMBER, BLUE, CardRect, FLUX, GREY, Givens, Lbl, NAVY, ORANGE, ROSE, Shrunk, Strip, fx, sci};
/** Pale amber for light beams. */
export const LIGHT = '#e3a23a';
export const LIGHT_INK = '#9c5a00';
export const V01_PLATES = [...LIGHT_PLATES];
type Pt = [number, number];

/** The radio mast with the coded rod along its top spike and electrons oscillating on it (`y` from -1 to 1). */
export const mastPts = (p: Place) => {
	const top = anchorAt(MAST, p, ANCHOR.mastTop[0], ANCHOR.mastTop[1] + 20), bot = anchorAt(MAST, p, ANCHOR.mastSpikeBot[0], ANCHOR.mastSpikeBot[1]);
	return {top, bot, mid: [top[0], (top[1] + bot[1]) / 2] as Pt, half: (bot[1] - top[1]) / 2};
};
export const MastRig: React.FC<{p: Place; osc?: number; dots?: number; rod?: number; ac?: number; ring?: number}> = ({p, osc = 0, dots = 0, rod = 1, ac = 0, ring = 0}) => {
	const m = mastPts(p);
	const dy = osc * m.half * 0.32;
	return (
		<g>
			<LPlate spec={MAST} p={p} />
			{rod > 0.001 ? <line x1={m.top[0]} y1={m.top[1]} x2={m.bot[0]} y2={m.bot[1]} stroke={ROSE.stroke} strokeWidth={9} strokeLinecap="round" opacity={0.55 * rod} /> : null}
			{dots > 0.001 ? <g opacity={dots}>{[-0.5, -0.1, 0.3].map((k, i) => <ChargeDot key={i} x={m.mid[0]} y={m.mid[1] + k * m.half + dy} r={9} color={ROSE.stroke} sign="" />)}</g> : null}
			{ac > 0.001 ? <g opacity={ac}>
				<line x1={m.bot[0]} y1={m.bot[1]} x2={m.bot[0] + 70} y2={m.bot[1]} stroke={INK} strokeWidth={4} />
				<circle cx={m.bot[0] + 100} cy={m.bot[1]} r={30} fill={CARD} stroke={INK} strokeWidth={4} />
				<path d={`M${m.bot[0] + 82},${m.bot[1]} q9,-16 18,0 t18,0`} fill="none" stroke={INK} strokeWidth={4} />
			</g> : null}
			{ring > 0.001 ? <ellipse cx={m.mid[0]} cy={m.mid[1]} rx={40} ry={m.half + 26} fill="none" stroke={ROSE.stroke} strokeWidth={5} opacity={ring} /> : null}
		</g>
	);
};

/** Circuit symbol of a coil (inductor), left end at (x, y). */
export const CoilSymbol: React.FC<{x: number; y: number; w?: number; color?: string}> = ({x, y, w = 120, color = INK}) => {
	const n = 4, r = (w - 40) / (2 * n);
	let d = `M${x},${y} h20`;
	for (let i = 0; i < n; i++) d += ` a${r},${r} 0 0 1 ${2 * r},0`;
	d += ' h20';
	return <path d={d} fill="none" stroke={color} strokeWidth={4} />;
};
/** Circuit symbol of a capacitor, left end at (x, y). */
export const CapSymbol: React.FC<{x: number; y: number; w?: number; color?: string}> = ({x, y, w = 120, color = INK}) => (
	<g stroke={color} strokeWidth={4}>
		<line x1={x} y1={y} x2={x + w / 2 - 9} y2={y} /><line x1={x + w / 2 + 9} y1={y} x2={x + w} y2={y} />
		<line x1={x + w / 2 - 9} y1={y - 24} x2={x + w / 2 - 9} y2={y + 24} strokeWidth={6} /><line x1={x + w / 2 + 9} y1={y - 24} x2={x + w / 2 + 9} y2={y + 24} strokeWidth={6} />
	</g>
);
/** A coded digital timer: a dark display with a reading. */
export const TimerBox: React.FC<{x: number; y: number; w?: number; h?: number; text: string; color?: string; opacity?: number; size?: number}> = ({x, y, w = 280, h = 84, text, color = '#9fe3b5', opacity = 1, size}) => (
	opacity <= 0.001 ? null : <g opacity={opacity}>
		<rect x={x} y={y} width={w} height={h} rx={12} fill="#2b2a28" stroke={INK} strokeWidth={4} />
		<text x={x + w / 2} y={y + h * 0.68} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size ?? h * 0.5, fill: color}}>{text}</text>
	</g>
);
/** A navy "direction of travel" arrow with its label. */
export const TravelArrow: React.FC<{from: Pt; to: Pt; opacity?: number}> = ({from, to, opacity = 1}) => <Arrow from={from} to={to} color={NAVY.stroke} width={6} head={26} opacity={opacity} />;
export {CardRect as Card};
export const lambdaText = (m: number) => `${fx(m, 1)} m`;
export const sciU = sci;
