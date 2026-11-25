// Lesson parts for phys-y12-m8-v17: the colour roles (design "Colour key (Revision 2)" with root rule R1), signed number
// formats, the nuclide terms used on every board, the coded schematic of Rutherford's 1919 chamber (root decision 11:
// a coded HSC-style schematic, open decision 1), nucleus layouts and v16's parts re-exported.
// Colour key: protons red "p"; neutrons grey "n"; alpha particles amber "α"; ejected protons red with teal speed
// arrows; rest energy ink; kinetic energy and the K_in slider teal; Q and energy orange; electrons navy dots;
// repulsion rose; masses in u ink; answers in dark-ink frames; mistakes slate (R1).
import React from 'react';
import {clusterLayout} from '../../physics/atom/decay';
import type {NucTerm} from '../../physics/atom/nuclear';
import {Alpha} from '../phys-y12-m8-v08/parts';
import {AMBER, GREEN_C, GREY, Givens, INK, Lbl, NAVY, NEUTRON, NUC_RED, ORANGE, RED, ROSE, Shrunk, Strip, T, TEAL, V16_PLATES, fx, sci, u6} from '../phys-y12-m8-v16/parts';
import {PO_BE} from '../../physics/atom/neutron';

export {Alpha, AMBER, GREEN_C, GREY, Givens, INK, Lbl, NAVY, NEUTRON, NUC_RED, ORANGE, RED, ROSE, Shrunk, Strip, T, TEAL, fx, sci, u6};
export const V17_PLATES = [...new Set([...V16_PLATES, PO_BE.src])];
/** Signed fixed decimals with a true minus or a plus sign. */
export const sg = (v: number, d: number) => (v < 0 ? '−' : '+') + fx(Math.abs(v), d);
/** Six-decimal mass with a true minus sign. */
export const s6 = (v: number) => (v < 0 ? '−' : '') + u6(Math.abs(v));

// ---------------------------------------------------------------- nuclides
export const HE: NucTerm = {A: 4, Z: 2, s: 'He'}, N7: NucTerm = {A: 14, Z: 7, s: 'N'}, O8: NucTerm = {A: 17, Z: 8, s: 'O'}, H1: NucTerm = {A: 1, Z: 1, s: 'H'};
export const BE4: NucTerm = {A: 9, Z: 4, s: 'Be'}, C6: NucTerm = {A: 12, Z: 6, s: 'C'}, NEU: NucTerm = {A: 1, Z: 0, s: 'n'};
export const AL13: NucTerm = {A: 27, Z: 13, s: 'Al'}, P15: NucTerm = {A: 30, Z: 15, s: 'P'};
export const U92: NucTerm = {A: 235, Z: 92, s: 'U'}, BA56: NucTerm = {A: 141, Z: 56, s: 'Ba'}, KR36: NucTerm = {A: 92, Z: 36, s: 'Kr'}, N3: NucTerm = {A: 1, Z: 0, s: 'n', k: 3};
export const RUTH_EQ: readonly NucTerm[] = [HE, '+', N7, '→', O8, '+', H1];
export const FISSION_EQ: readonly NucTerm[] = [NEU, '+', U92, '→', BA56, '+', KR36, '+', N3];
/** Packed layouts (same seeds as last time's nitrogen-14). */
export const L_HE = clusterLayout(2, 2, 3), L_N14 = clusterLayout(7, 7, 4), L_O17 = clusterLayout(8, 9, 5), L_AL = clusterLayout(13, 14, 6), L_P30 = clusterLayout(15, 15, 7);

// ---------------------------------------------------------------- Rutherford's 1919 chamber (coded schematic)
export type ChamberG = {x: number; y: number; w: number; h: number; range: number; screen: number};
/** Side view: a closed box of nitrogen gas, a source at the left, a dashed line where the alphas stop, a zinc sulfide
 *  screen at the right end and an eyepiece tube outside it (drawn as a tube only; no viewer). */
export const Chamber: React.FC<{g: ChamberG; opacity?: number}> = ({g, opacity = 1}) => (opacity <= 0.001 ? null : (
	<g opacity={opacity}>
		<rect x={g.x} y={g.y} width={g.w} height={g.h} rx={18} fill="#eef3f6" stroke={INK} strokeWidth={5} />
		<rect x={g.x + 30} y={g.y + g.h / 2 - 34} width={56} height={68} rx={8} fill="#7d8790" stroke={INK} strokeWidth={3} />
		<rect x={g.screen} y={g.y + 24} width={18} height={g.h - 48} fill="#bfe3b4" stroke={INK} strokeWidth={3} />
		<rect x={g.x + g.w} y={g.y + g.h / 2 - 26} width={130} height={52} rx={8} fill="#d9d4ca" stroke={INK} strokeWidth={4} />
		<rect x={g.x + g.w + 130} y={g.y + g.h / 2 - 36} width={26} height={72} rx={6} fill="#bdb7ab" stroke={INK} strokeWidth={4} />
		<line x1={g.range} y1={g.y + 12} x2={g.range} y2={g.y + g.h - 12} stroke={AMBER.ink} strokeWidth={4} strokeDasharray="14 10" />
	</g>
));
export {clusterLayout};
