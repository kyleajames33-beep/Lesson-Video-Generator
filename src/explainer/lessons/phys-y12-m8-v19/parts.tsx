// Lesson parts for phys-y12-m8-v19: the colour roles (design "Colour key (Revision 2)" with root rule R1), the painted
// Sun, tokamak and steel ball plates with their anchors, nucleus layouts and v18's parts re-exported.
// Colour key: protons red "p" (as in the last two videos' clusters); neutrons grey; deuterium and tritium small
// red-and-grey clusters labelled ²H and ³H; helium-4 a cluster; repulsion arrows red; strong attraction navy; the
// energy curve ink with the hill shaded pale red and the well pale navy; Q and kinetic energy amber; temperature slate;
// plasma violet (painted); answers in dark-ink frames; mistakes slate (R1).
import React from 'react';
import type {LightSpec} from '../../physics/light/plates';
import {SUN} from '../../physics/light/plates';
import {STEEL_BALL} from '../../physics/light/frames';
import {clusterLayout} from '../../physics/atom/decay';
import {AMBER, GREEN_C, GREY, Givens, INK, Lbl, NAVY, NEUTRON, NUC_RED, ORANGE, RED, ROSE, SLATE, Shrunk, Strip, T, TEAL, V18_PLATES, fx, sci, u6} from '../phys-y12-m8-v18/parts';

export {AMBER, GREEN_C, GREY, Givens, INK, Lbl, NAVY, NEUTRON, NUC_RED, ORANGE, RED, ROSE, SLATE, Shrunk, Strip, T, TEAL, fx, sci, u6, SUN, STEEL_BALL};
/** The painted tokamak (1513 x 1040; visible box measured from the alpha channel, threshold 20, 26 November 2026).
 *  The violet plasma ring spans native x 498 to 1047 and y 417 to 648 (pixel scan the same day), centre (770, 532). */
export const TOKAMAK: LightSpec = {src: 'assets/physics/y12p-tokamak-v1.png', W: 1513, H: 1040, box: [161, 74, 1346, 962]};
export const TOK_AT = {ring: [770, 532], rx: 250, ry: 78, minor: 42} as const;
export const V19_PLATES = [...new Set([...V18_PLATES, SUN.src, TOKAMAK.src, STEEL_BALL.src])];
export const VIOLET = '#8a4fb0';
export const L_H2 = clusterLayout(1, 1, 2), L_H3 = clusterLayout(1, 2, 3), L_HE4 = clusterLayout(2, 2, 3), L_HE3 = clusterLayout(2, 1, 4);
/** A straight arrow with a filled head from (x0, y0) to (x1, y1). */
export const Arrow: React.FC<{x0: number; y0: number; x1: number; y1: number; color: string; width?: number; opacity?: number; dash?: string}> = ({x0, y0, x1, y1, color, width = 7, opacity = 1, dash}) => {
	if (opacity <= 0.001 || Math.hypot(x1 - x0, y1 - y0) < 2) return null;
	const a = Math.atan2(y1 - y0, x1 - x0), hl = 10 + width * 1.6;
	return (
		<g opacity={opacity}>
			<line x1={x0} y1={y0} x2={x1 - Math.cos(a) * hl * 0.6} y2={y1 - Math.sin(a) * hl * 0.6} stroke={color} strokeWidth={width} strokeLinecap="round" strokeDasharray={dash} />
			<path d={`M${x1},${y1} L${x1 - hl * Math.cos(a - 0.45)},${y1 - hl * Math.sin(a - 0.45)} L${x1 - hl * Math.cos(a + 0.45)},${y1 - hl * Math.sin(a + 0.45)} Z`} fill={color} />
		</g>
	);
};
