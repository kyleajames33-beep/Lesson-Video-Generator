// Lesson parts for phys-y12-m7-v14: the colour roles (design colour key, Revision 2, with root rule R1), the trip
// board in its last-time state, a coded ruler, the marker beacon, a ring, the station deck geometry and v13's parts.
// Colour key: Earth and station frame ink; ship frame teal; proper lengths teal; contracted lengths ink; γ violet;
// muons slate; velocities orange arrows; momentum (handoff) amber; answers in dark-ink frames; mistakes slate (R1).
import React from 'react';
import {FONT_DISPLAY} from '../../kit';
import {SPACE_STATION} from '../../physics/light/relativity';
import type {Place} from '../../physics/light/plates';
import {nat} from '../../physics/light/thermal';
import {AMBER, Counter, GREEN, GREY, Givens, INK, Lbl, NAVY, ORANGE, Panel, SLATE, Shrunk, Strip, TEAL, V13_PLATES, VArrow, VIOLET, fx, sci} from '../phys-y12-m7-v13/parts';

export {AMBER, Counter, GREEN, GREY, Givens, INK, Lbl, NAVY, ORANGE, Panel, SLATE, Shrunk, Strip, TEAL, VArrow, VIOLET, fx, sci};
export const V14_PLATES = V13_PLATES;
const T = (size: number, color: string, weight = 800): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: weight, fontSize: size, fill: color});

/** Screen deck line of the space station placed at p: left and right x and the deck y. */
export const deckOf = (p: Place) => {
	const a = nat(SPACE_STATION, p, 442, 280), b = nat(SPACE_STATION, p, 1760, 280);
	return {x0: a[0], x1: b[0], y: a[1]};
};
/** A coded ruler from x0 to x1 at y with ten divisions and a label under it. */
export const Ruler: React.FC<{x0: number; x1: number; y: number; color: string; label?: string; size?: number; opacity?: number; up?: boolean}> = ({x0, x1, y, color, label, size = 30, opacity = 1, up = false}) => {
	if (opacity <= 0.001) return null;
	const s = up ? -1 : 1;
	return (
		<g opacity={opacity}>
			<line x1={x0} y1={y} x2={x1} y2={y} stroke={color} strokeWidth={5} />
			{Array.from({length: 11}, (_, i) => <line key={i} x1={x0 + ((x1 - x0) * i) / 10} y1={y} x2={x0 + ((x1 - x0) * i) / 10} y2={y - s * (i % 5 ? 9 : 18)} stroke={color} strokeWidth={3} />)}
			{label ? <text x={(x0 + x1) / 2} y={y + s * (size + 6) + (up ? size * 0.3 : 0)} textAnchor="middle" style={T(size, color)}>{label}</text> : null}
		</g>
	);
};
/** A coded marker beacon on a deck at (x, deckY): a post, a lamp that flashes at `flash` (0 to 1). */
export const Beacon: React.FC<{x: number; deckY: number; flash?: number; color?: string}> = ({x, deckY, flash = 0, color = INK}) => (
	<g>
		<line x1={x} y1={deckY} x2={x} y2={deckY - 70} stroke={color} strokeWidth={6} />
		<circle cx={x} cy={deckY - 82} r={14} fill={flash > 0.01 ? '#ffd166' : '#fffdf8'} stroke={color} strokeWidth={4} />
		{flash > 0.01 ? <circle cx={x} cy={deckY - 82} r={14 + 30 * flash} fill="none" stroke="#e0a400" strokeWidth={4} opacity={1 - flash} /> : null}
	</g>
);
/** A coded ring seen edge-on (perpendicular to the motion): a tall ellipse centred at (cx, cy) with diameter d. */
export const Ring: React.FC<{cx: number; cy: number; d: number; color: string; opacity?: number}> = ({cx, cy, d, color, opacity = 1}) => (opacity <= 0.001 ? null : <ellipse cx={cx} cy={cy} rx={d * 0.16} ry={d / 2} fill="none" stroke={color} strokeWidth={7} opacity={opacity} />);
