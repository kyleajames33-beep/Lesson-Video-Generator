// Lesson parts for phys-y12-m6-v04: the 3D field box set in the painted horseshoe magnet's gap (kit gap 4, from
// the shared magnetic kit), particles placed in 3D, the θ arc, and v03's parts. Colour roles (design, Revision 2):
// magnetic field arrows, dots and crosses slate (grey ink); velocity, its components and θ teal; magnetic force
// amber; charge and givens navy; sin θ readouts ink; answers in dark-ink frames; mistakes slate (root rule R1).
import React from 'react';
import {INK} from '../../shared/tokens';
import {Particle} from '../../physics/electromagnetism/plates';
import {FieldBox3D, Horseshoe, MAG_PLATES, project} from '../../physics/electromagnetism/magnetic';
import type {Cam, V3} from '../../physics/electromagnetism/magnetic';
import {Sun, SUN_SRC} from '../phys-y12-m5-v20/parts';
import {EARTH_SRC, Earth} from '../phys-y12-m5-v16/parts';
import {AMBER, BLUE, CardRect, GREY, Givens, Lbl, NAVY, ORANGE, Ring, Shrunk, Strip, T, TEAL, VIOLET, VecArrow, fx, sci, usePulse, V03_PLATES} from '../phys-y12-m6-v03/parts';

export {AMBER, BLUE, CardRect, GREY, Givens, Lbl, NAVY, ORANGE, Ring, Shrunk, Strip, T, TEAL, VIOLET, VecArrow, fx, sci, usePulse, Sun, Earth};
export const V04_PLATES = [...V03_PLATES, ...MAG_PLATES, SUN_SRC, EARTH_SRC];
export const FIELD = GREY.stroke;

// ---------------------------------------------------------------- the 3D field box
/** Box half-sizes in world px: face-on it is last time's 620 × 580 region; turned, it is shallow (depth 90). */
export const BOX = {hx: 310, hz: 135};
export const hyFor = (tilt: number) => 290 - 200 * Math.min(1, Math.max(0, tilt));
/** Last time's region, face-on. */
export const CAM_V03: Cam = {cx: 1070, cy: 590, k: 1, tilt: 0, maxDeg: 65, depthX: 0.45, depthY: 0};
/** The magnet view: looking across the field, which runs down from the north pole face to the south pole face. */
export const CAM_MAG: Cam = {cx: 1000, cy: 560, k: 0.9, tilt: 1, maxDeg: 65, depthX: 0.45, depthY: 0};
/** Pole-face lines for the box under a camera (where the magnet plate sits). */
export const facesFor = (cam: Cam) => {
	const a = project(cam, [0, 0, BOX.hz]), b = project(cam, [0, 0, -BOX.hz]);
	return {x: (a[0] + b[0]) / 2, top: a[1], bot: b[1]};
};
/** The field box, with the magnet round it once the camera has turned (`magnet` 0 to 1). */
export const MagnetBox: React.FC<{cam: Cam; magnet?: number; edges?: number; arrowCols?: number}> = ({cam, magnet = 0, edges, arrowCols = 5}) => {
	const m = facesFor(cam);
	return (
		<g>
			<Horseshoe x={m.x} top={m.top} bot={m.bot} opacity={magnet} />
			<FieldBox3D cam={cam} hx={BOX.hx} hy={hyFor(cam.tilt)} hz={BOX.hz} edges={edges} arrowCols={arrowCols} />
		</g>
	);
};
/** A charged particle at a world point. */
export const P3: React.FC<{cam: Cam; p: V3; sign?: '+' | '−'; r?: number; opacity?: number}> = ({cam, p, sign = '+', r = 22, opacity = 1}) => {
	const [x, y] = project(cam, p);
	return <Particle cx={x} cy={y} sign={sign} r={r} opacity={opacity} />;
};
/** A θ arc at screen point (x, y) from direction a to direction b (screen vectors), radius r. */
export const ThetaArc: React.FC<{x: number; y: number; a: [number, number]; b: [number, number]; r: number; color?: string; width?: number}> = ({x, y, a, b, r, color = TEAL.stroke, width = 4}) => {
	const a0 = Math.atan2(a[1], a[0]);
	let d = Math.atan2(b[1], b[0]) - a0;
	while (d > Math.PI) d -= 2 * Math.PI;
	while (d < -Math.PI) d += 2 * Math.PI;
	if (Math.abs(d) < 0.02) return null;
	const n = 24, pts = Array.from({length: n + 1}, (_, i) => { const t = a0 + (d * i) / n; return `${(x + r * Math.cos(t)).toFixed(1)},${(y + r * Math.sin(t)).toFixed(1)}`; });
	return <polyline points={pts.join(' ')} fill="none" stroke={color} strokeWidth={width} />;
};
/** A heavy ink dial needle on a quarter gauge (0° to 90°), centre (x, y), radius r. */
export const QuarterDial: React.FC<{x: number; y: number; r: number; deg: number}> = ({x, y, r, deg}) => {
	const t = (deg * Math.PI) / 180;
	return (
		<g>
			<path d={`M${x},${y} L${x + r},${y} A${r},${r} 0 0 0 ${x},${y - r} Z`} fill="#f1ebdf" stroke={INK} strokeWidth={3} />
			{[0, 30, 60, 90].map(d => { const a = (d * Math.PI) / 180; return <line key={d} x1={x + (r - 14) * Math.cos(a)} y1={y - (r - 14) * Math.sin(a)} x2={x + r * Math.cos(a)} y2={y - r * Math.sin(a)} stroke={INK} strokeWidth={3} />; })}
			<line x1={x} y1={y} x2={x + (r - 6) * Math.cos(t)} y2={y - (r - 6) * Math.sin(t)} stroke={TEAL.stroke} strokeWidth={7} strokeLinecap="round" />
			<circle cx={x} cy={y} r={8} fill={INK} />
		</g>
	);
};
