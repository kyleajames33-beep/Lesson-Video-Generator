// Lesson parts for phys-y12-m7-v13: the colour roles (design colour key, Revision 2, with root rule R1), the star plate,
// a two-panel light-clock board (ship frame and Earth frame) and v12's parts re-exported.
// Colour key: Earth frame ink; ship frame teal; light amber; proper quantities (t₀) teal; dilated quantities (t) ink;
// γ violet; muons slate dots; velocities orange arrows; answers in dark-ink frames; mistakes slate (root rule R1).
import React from 'react';
import {FONT_DISPLAY} from '../../kit';
import {TONES} from '../../shared/tokens';
import {STAR_WHITE} from '../../physics/light/stars';
import {REL_PLATES} from '../../physics/light/relativity';
import {Givens} from '../phys-y12-m6-v01/parts';
import {AMBER, GREEN, GREY, INK, Lbl, NAVY, ORANGE, SLATE, Shrunk, Strip, TEAL, V12_PLATES, VArrow, fx, sci} from '../phys-y12-m7-v12/parts';

export {Givens};
export {AMBER, GREEN, GREY, INK, Lbl, NAVY, ORANGE, SLATE, Shrunk, Strip, TEAL, VArrow, fx, sci};
export const VIOLET = TONES.violet;
export const V13_PLATES = [...new Set([...V12_PLATES, ...REL_PLATES, STAR_WHITE.src])];

/** A panel frame (rounded card) with a title in its role colour. */
export const Panel: React.FC<{x: number; y: number; w: number; h: number; title: string; color: string; opacity?: number; size?: number}> = ({x, y, w, h, title, color, opacity = 1, size = 32}) => (opacity <= 0.001 ? null : (
	<g opacity={opacity}>
		<rect x={x} y={y} width={w} height={h} rx={18} fill="#fffdf8" stroke={color} strokeWidth={4} />
		<rect x={x + 18} y={y - 24} width={title.length * size * 0.56 + 36} height={48} rx={12} fill="#fffdf8" stroke={color} strokeWidth={3.5} />
		<text x={x + 36} y={y + size * 0.36} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, fill: color}}>{title}</text>
	</g>
));
/** A tick counter readout (HTML, left-middle at x, y). */
export const Counter: React.FC<{x: number; y: number; n: number; color: string; label?: string; size?: number; opacity?: number}> = ({x, y, n, color, label = 'ticks', size = 40, opacity = 1}) => (opacity <= 0.001 ? null : (
	<div style={{position: 'absolute', left: x, top: y - size * 0.68, opacity, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color, fontVariantNumeric: 'tabular-nums'}}>{`${label}: ${n}`}</div>
));
