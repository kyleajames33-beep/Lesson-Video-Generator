// Lesson parts for phys-y12-m8-v06: the colour roles (design "Colour key (Revision 2)" with root rule R1), the element
// sources for the periodic table, the ladder marks, the binding-curve thumbnail with its reached-stage arrows, the
// star cross-section and v05's parts re-exported.
// Colour key: core temperature red; stellar mass purple; energy amber; the iron barrier and "takes in energy" red;
// protons rose, neutrons grey, electrons navy, antineutrinos grey; stable nuclei ink rings, unstable nuclei red rings;
// periodic cells by source (Big Bang pale blue, Sun-like stars green, massive stars and supernovae amber, neutron-star
// collisions purple, slow process green striped); answers in dark-ink frames; mistakes slate (R1).
import React from 'react';
import {ELEMENT_PLATES} from '../../physics/atom/elements';
import {MALTESE} from '../../physics/atom/electron';
import {BindingCurve, bcX, bcY, bindingAt} from '../../physics/atom/nuclear';
import type {BCBox} from '../../physics/atom/nuclear';
import type {LadderMark} from '../../physics/atom/elements';
import {AMBER, BLUE, GREEN, GREY, Givens, INK, Lbl, NAVY, NEUTRON, NucDisc, PURPLE, RED, ROSE, Shrunk, Strip, TEAL, V05_PLATES, VIOLET, fx, sci} from '../phys-y12-m8-v05/parts';
import {IGNITE} from './common';

export {AMBER, BLUE, GREEN, GREY, Givens, INK, Lbl, NAVY, NEUTRON, NucDisc, PURPLE, RED, ROSE, Shrunk, Strip, TEAL, VIOLET, fx, sci};
export const V06_PLATES = [...new Set([...V05_PLATES, ...ELEMENT_PLATES, MALTESE.src])];

// ---------------------------------------------------------------- element sources
export type Src = 'bb' | 'sun' | 'massive' | 's' | 'r' | 'none';
export const SRC_FILL: Record<Src, string> = {bb: '#cfe3f5', sun: '#cbe7d2', massive: '#f5d595', s: '#cbe7d2', r: '#ddcdf0', none: '#efe9de'};
export const SRC_LABEL: Record<Exclude<Src, 'none'>, string> = {bb: 'Big Bang', sun: 'Sun-like and intermediate stars', massive: 'massive stars and supernovae', s: 'slow process: giants', r: 'rapid process: neutron-star collisions'};
const S_SET = new Set([38, 39, 40, 56, 57, 58, 82, 83]), R_SET = new Set([63, 76, 77, 78, 79, 90, 92]);
/** Main source of element Z as shown (design scene 11; oxygen with the massive stars, site note 22). */
export const srcOf = (Z: number): Src => (Z <= 2 ? 'bb' : Z === 6 || Z === 7 ? 'sun' : Z >= 8 && Z <= 26 ? 'massive' : S_SET.has(Z) ? 's' : R_SET.has(Z) ? 'r' : 'none');
/** Cell fill with sources revealed from given frames (undefined: not yet). */
export const fillAt = (f: number, at: Partial<Record<Src, number>>) => (Z: number) => {
	const s = srcOf(Z), a = at[s];
	return {color: a !== undefined && f >= a ? SRC_FILL[s] : SRC_FILL.none, stripe: s === 's' && a !== undefined && f >= a ? 'y' : undefined};
};

// ---------------------------------------------------------------- the ladder
export const LADDER_MARKS = (o: Partial<Record<keyof typeof IGNITE, number>> = {}, extra: Partial<Record<keyof typeof IGNITE, string>> = {}): LadderMark[] => [
	{T: IGNITE.H, label: 'H ~10⁷ K', o: o.H ?? 1, extra: extra.H},
	{T: IGNITE.He, label: 'He ~10⁸ K', o: o.He ?? 1, extra: extra.He},
	{T: IGNITE.C, label: 'C ~6 × 10⁸ K', o: o.C ?? 1, extra: extra.C},
	{T: IGNITE.Ne, label: 'Ne ~1.2 × 10⁹ K', dy: 16, o: o.Ne ?? 1, extra: extra.Ne},
	{T: IGNITE.O, label: 'O ~1.5 × 10⁹ K', dy: -16, o: o.O ?? 1, extra: extra.O},
	{T: IGNITE.Si, label: 'Si ~3 × 10⁹ K', o: o.Si ?? 1, extra: extra.Si},
];

// ---------------------------------------------------------------- the binding-curve thumbnail
export const THUMB: BCBox = {x: 1530, y: 196, w: 280, h: 120};
/** The curve as a thumbnail (top right) with solid arrows along the stages reached (mass numbers). */
export const CurveThumb: React.FC<{reach?: readonly (readonly [number, number, string])[]; opacity?: number; b?: BCBox; barrier?: number}> = ({reach = [], opacity = 1, b = THUMB, barrier = 0}) => (opacity <= 0.001 ? null : (
	<g opacity={opacity}>
		<rect x={b.x - 30} y={b.y - 26} width={b.w + 60} height={b.h + 52} rx={12} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
		<BindingCurve b={b} ticksA={[]} ticksB={[]} xTitle="" yTitle="" width={3.5} />
		{reach.map(([a0, a1, col], i) => <g key={i}>
			<path d={`M${bcX(b, a0)},${bcY(b, bindingAt(a0)) - 8} L${bcX(b, a1)},${bcY(b, bindingAt(a1)) - 8}`} stroke={col} strokeWidth={6} strokeLinecap="round" />
			<circle cx={bcX(b, a1)} cy={bcY(b, bindingAt(a1)) - 8} r={6} fill={col} />
		</g>)}
		{barrier > 0.001 ? <line x1={bcX(b, 56)} y1={b.y - 10} x2={bcX(b, 56)} y2={b.y + b.h} stroke={RED.stroke} strokeWidth={6} opacity={barrier} /> : null}
	</g>
));
export const ThumbLabel: React.FC<{at?: number}> = ({at = -30}) => <Lbl x={THUMB.x + THUMB.w / 2} y={THUMB.y + THUMB.h + 56} at={at} color={GREY.ink} size={26} anchor="middle">binding curve</Lbl>;

// ---------------------------------------------------------------- the star cross-section
/** A coded star cross-section: envelope radius R (colour from yellow to red by `red`), core radius r with helium discs. */
export const StarSection: React.FC<{cx: number; cy: number; R: number; r: number; red?: number; glow?: number; shell?: number; envO?: number; coreFill?: string; children?: React.ReactNode}> = ({cx, cy, R, r, red = 0, glow = 1, shell = 0, envO = 1, coreFill, children}) => {
	const mix = (a: number[], b: number[]) => `rgb(${a.map((v, i) => Math.round(v + (b[i] - v) * red)).join(',')})`;
	return (
		<g>
			{envO > 0.001 ? <circle cx={cx} cy={cy} r={R} fill={mix([251, 221, 140], [233, 140, 96])} stroke={INK} strokeWidth={3.5} opacity={envO} /> : null}
			{shell > 0.001 ? <circle cx={cx} cy={cy} r={r + 22} fill="none" stroke={AMBER.stroke} strokeWidth={16} opacity={shell} /> : null}
			<circle cx={cx} cy={cy} r={r} fill={coreFill ?? '#fff1d0'} stroke={INK} strokeWidth={3} />
			{glow > 0.001 ? <circle cx={cx} cy={cy} r={r} fill="#f2a43a" opacity={0.45 * glow} /> : null}
			{children}
		</g>
	);
};
