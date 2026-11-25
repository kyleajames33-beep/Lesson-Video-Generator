// Lesson parts for phys-y12-m6-v08: the two-wire end-on stage (kit gap 1: either wire a dot or a cross, each wire's
// field circles in its own slate, field arrows at the other wire, force arrows always drawn equal), the hanging strips
// of the hook, and v07's parts re-exported.
// Colour roles (design, Revision 2): currents I₁, I₂ orange; wire 1's field slate, wire 2's field a lighter slate (full
// opacity); B readouts slate; forces and F/l amber; distances r navy; μ₀ ink; answers in dark-ink frames; mistakes
// slate (root rule R1).
import React from 'react';
import {INK} from '../../shared/tokens';
import {Arrow2} from '../../physics/electromagnetism/magnetic';
import {EndOnWire, FieldCircles} from '../../physics/electromagnetism/wires';
import {AMBER, CardRect, GREY, Givens, Lbl, NAVY, ORANGE, Ring, Shrunk, Strip, T, fx, sci, V07_PLATES} from '../phys-y12-m6-v07/parts';

export {AMBER, CardRect, GREY, Givens, Lbl, NAVY, ORANGE, Ring, Shrunk, Strip, T, fx, sci};
export const V08_PLATES = [...V07_PLATES];
export const FIELD1 = GREY.stroke, FIELD2 = '#8796a6', FIELD2_INK = '#4d5c6b';

/** One end-on wire with its field circles (dot: anticlockwise; cross: clockwise). */
export const WireField: React.FC<{x: number; y: number; dir: 'out' | 'in'; radii?: readonly number[]; grow?: number; color?: string; r?: number; heads?: boolean; opacity?: number}> = ({x, y, dir, radii = [], grow = 1, color = FIELD1, r = 40, heads = true, opacity = 1}) => (
	<g opacity={opacity}>
		<FieldCircles cx={x} cy={y} radii={radii} sense={dir === 'out' ? 'ccw' : 'cw'} color={color} grow={grow} heads={heads ? [90, 270, 0, 180] : []} />
		<EndOnWire cx={x} cy={y} r={r} dir={dir} />
	</g>
);
/** A force arrow on a wire at (x, y): `len` px, positive to the right. */
export const FArrow: React.FC<{x: number; y: number; len: number; r?: number; opacity?: number; width?: number}> = ({x, y, len, r = 40, opacity = 1, width = 9}) =>
	Math.abs(len) < 3 ? null : <Arrow2 from={[x + Math.sign(len) * (r + 6), y]} to={[x + Math.sign(len) * (r + 6) + len, y]} color={AMBER.stroke} width={width} head={28} opacity={opacity} />;
/** A field arrow (B at a wire) through (x, y): `len` px, positive up the page. */
export const BArrow: React.FC<{x: number; y: number; len: number; color?: string; opacity?: number; r?: number}> = ({x, y, len, color = FIELD1, opacity = 1, r = 40}) =>
	Math.abs(len) < 3 ? null : <Arrow2 from={[x - r - 26, y + len / 2]} to={[x - r - 26, y - len / 2]} color={color} width={6} head={22} opacity={opacity} />;

/** A hanging foil strip (plain light-grey line, author note a) bowed by `bow` px at its middle (positive to the right). */
export const Strip2: React.FC<{x: number; y1: number; y2: number; bow: number}> = ({x, y1, y2, bow}) => (
	<path d={`M${x},${y1} Q${x + 2 * bow},${(y1 + y2) / 2} ${x},${y2}`} fill="none" stroke="#a9b0b8" strokeWidth={10} strokeLinecap="round" />
);
export const StripOutline: React.FC<{x: number; y1: number; y2: number; bow: number}> = ({x, y1, y2, bow}) => (
	<path d={`M${x},${y1} Q${x + 2 * bow},${(y1 + y2) / 2} ${x},${y2}`} fill="none" stroke={INK} strokeWidth={13} strokeLinecap="round" />
);
export const fl = (v: number) => sci(v, 1);
