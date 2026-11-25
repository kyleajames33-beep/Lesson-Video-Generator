// Lesson parts for phys-y12-m8-v18: the colour roles (design "Colour key (Revision 2)" with root rule R1), the painted
// OPAL pool plate with its anchors, number formats, nuclide terms and v17's parts re-exported.
// Colour key: neutrons grey discs (fast ones with a short grey streak); protons red "p" (as last time's clusters);
// uranium and fragments red-and-grey disc clusters, labelled; gamma photons amber packets; energy amber; k and its
// readouts navy; control rods dark slate bars; moderator water pale blue; masses in u ink; answers in dark-ink frames;
// mistakes slate (R1).
import React from 'react';
import type {LightSpec} from '../../physics/light/plates';
import type {NucTerm} from '../../physics/atom/nuclear';
import {AMBER, GREEN_C, GREY, Givens, INK, Lbl, NAVY, NEU, NEUTRON, NUC_RED, ORANGE, RED, ROSE, Shrunk, Strip, T, TEAL, U92, V17_PLATES, fx, sci, u6} from '../phys-y12-m8-v17/parts';

export {AMBER, GREEN_C, GREY, Givens, INK, Lbl, NAVY, NEU, NEUTRON, NUC_RED, ORANGE, RED, ROSE, Shrunk, Strip, T, TEAL, U92, fx, sci, u6};
/** The painted OPAL pool (1448 x 1086; visible box measured from the alpha channel, threshold 20, 26 November 2026).
 *  Anchors read from the native pixels the same day: glowing core (718, 836); water surface about y 210 and the pool
 *  floor about y 960 on the core's vertical. */
export const OPAL_PLATE: LightSpec = {src: 'assets/physics/y12p-opal-reactor-pool-v1.png', W: 1448, H: 1086, box: [279, 60, 1142, 1068]};
export const OPAL_AT = {core: [718, 836], surface: 210, floor: 960} as const;
export const V18_PLATES = [...new Set([...V17_PLATES, OPAL_PLATE.src])];
export const SLATE = {ink: '#3b4650', stroke: '#4a5560', soft: '#dfe3e7'};
export const WATER = {fill: '#dcecf6', edge: '#7fb2d4', ink: '#2f6c94'};
export const FUEL = {fill: '#e9e2d4', edge: INK};
/** Whole numbers with thousands separators. */
export const comma = (v: number) => Math.round(v).toLocaleString('en-AU');
export const BA56: NucTerm = {A: 141, Z: 56, s: 'Ba'}, KR36: NucTerm = {A: 92, Z: 36, s: 'Kr'}, XE54: NucTerm = {A: 140, Z: 54, s: 'Xe'}, SR38: NucTerm = {A: 94, Z: 38, s: 'Sr'};
export const N3: NucTerm = {A: 1, Z: 0, s: 'n', k: 3}, NX: NucTerm = {A: 1, Z: 0, s: 'n', k: 'x'};
export const FISSION_EQ: readonly NucTerm[] = [NEU, '+', U92, '→', BA56, '+', KR36, '+', N3];
/** A grey neutron disc with an optional streak behind it (fast) pointing back along deg. */
export const Neutron: React.FC<{x: number; y: number; r?: number; streak?: number; deg?: number; opacity?: number; label?: boolean}> = ({x, y, r = 16, streak = 0, deg = 0, opacity = 1, label = true}) => {
	if (opacity <= 0.001) return null;
	const a = (deg * Math.PI) / 180;
	return (
		<g opacity={opacity}>
			{streak > 0.5 ? <line x1={x - Math.cos(a) * (r + 4)} y1={y - Math.sin(a) * (r + 4)} x2={x - Math.cos(a) * (r + streak)} y2={y - Math.sin(a) * (r + streak)} stroke={GREY.stroke} strokeWidth={r * 0.7} strokeLinecap="round" opacity={0.55} /> : null}
			<circle cx={x} cy={y} r={r} fill={NEUTRON} stroke={INK} strokeWidth={2} />
			{label && r >= 14 ? <text x={x} y={y + r * 0.38} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: Math.max(19, r * 1.05), fill: '#ffffff'}}>n</text> : null}
		</g>
	);
};
