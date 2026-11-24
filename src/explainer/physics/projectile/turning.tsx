// Turning-effects drawing kit for the Module 5 torque lessons (v09 torque, v10 balance), in the same visual
// system as board.tsx. New file (23 November 2026); no existing kit file changed.
//
// Angles here are in degrees in the maths sense: measured from +x, anticlockwise positive, with screen y
// pointing down (so a point at angle a and radius r is (cx + r cos a, cy - r sin a)). Plates are drawn at a
// uniform scale only, from the anchors Codex reported in their JSON sidecars.
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {DrawPath, FONT_DISPLAY, prog} from '../../kit';
import {CARD, INK} from '../../shared/tokens';
import {ROLE} from './board';

export const rad = (deg: number) => (deg * Math.PI) / 180;
/** Point at angle `deg` (maths sense) and radius r from (cx, cy). */
export const polar = (cx: number, cy: number, r: number, deg: number): [number, number] => [cx + r * Math.cos(rad(deg)), cy - r * Math.sin(rad(deg))];
/** Screen offset of a vector of length L at angle `deg` (maths sense). */
export const vec = (L: number, deg: number): [number, number] => [L * Math.cos(rad(deg)), -L * Math.sin(rad(deg))];

/** Turning-effect colours (v09 and v10 key): anticlockwise blue, clockwise orange, moment arm violet, r navy. */
export const TURN = {acw: ROLE.y, cw: ROLE.v, arm: ROLE.a, r: ROLE.given, force: ROLE.w, perp: ROLE.x, along: ROLE.slate} as const;

// ---------------------------------------------------------------- spanner and nut (top view)
const SPAN_SRC = 'assets/physics/y12p-spanner-v1.png', NUT_SRC = 'assets/physics/y12p-nut-plate-v1.png';
const SPAN_CANVAS: [number, number] = [2172, 724], NUT_CANVAS: [number, number] = [1254, 1254];
const SPAN_RING: [number, number] = [330.1, 363.69], SPAN_FORCE: [number, number] = [1710, 363.69];
const NUT_C: [number, number] = [627, 626];
export const SPANNER_PLATES = [SPAN_SRC, NUT_SRC];
/** Scale and handle-end point of the spanner whose ring sits on (cx, cy) with the force point armPx to the right. */
export const spannerGeom = (cx: number, cy: number, armPx: number) => {
	const s = armPx / (SPAN_FORCE[0] - SPAN_RING[0]);
	return {s, end: [cx + armPx, cy] as [number, number], ppm: armPx / 0.25, nutR: 115 * s};
};
/** The nut-plate and spanner plates at one scale (ring on the nut centre, handle to the right). */
export const SpannerNut: React.FC<{cx: number; cy: number; armPx: number; opacity?: number}> = ({cx, cy, armPx, opacity = 1}) => {
	const {s} = spannerGeom(cx, cy, armPx);
	return (
		<g opacity={opacity}>
			<image href={staticFile(NUT_SRC)} x={cx - NUT_C[0] * s} y={cy - NUT_C[1] * s} width={NUT_CANVAS[0] * s} height={NUT_CANVAS[1] * s} preserveAspectRatio="none" />
			<image href={staticFile(SPAN_SRC)} x={cx - SPAN_RING[0] * s} y={cy - SPAN_RING[1] * s} width={SPAN_CANVAS[0] * s} height={SPAN_CANVAS[1] * s} preserveAspectRatio="none" />
		</g>
	);
};

// ---------------------------------------------------------------- tower crane and its load (side view)
const CRANE_SRC = 'assets/physics/y12p-tower-crane-v1.png', LOAD_SRC = 'assets/physics/phys-y11-crane-load-v1.png';
const CRANE_CANVAS: [number, number] = [1448, 1086], LOAD_CANVAS: [number, number] = [1000, 1600];
const C_MAST: [number, number] = [395, 336], C_HOOK: [number, number] = [1200, 550], C_CW: [number, number] = [234, 336];
const C_GROUND = 985, LOAD_ATTACH: [number, number] = [500, 211], LOAD_REL = 0.24;
/** The load plate's bricks and pallet: centre y and bottom y in load-plate pixels (alpha profile, 23 Nov). */
const LOAD_BRICKS: [number, number] = [1150, 1389];
export const CRANE_PLATES = [CRANE_SRC, LOAD_SRC];
/**
 * Geometry of the crane standing on a ground line at `groundY` with its mast axis at x = `mastX`, scale s
 * (frame px per native px). Anchors from the plate's JSON: mast at jib height (the pivot), hook, counterweight
 * centre. Arms 805 : 161 native px = 30 m : 6 m.
 */
export const craneGeom = (mastX: number, groundY: number, s: number) => {
	const x0 = mastX - C_MAST[0] * s, y0 = groundY - C_GROUND * s;
	const P = (p: [number, number]): [number, number] => [x0 + p[0] * s, y0 + p[1] * s];
	const hook = P(C_HOOK), ls = LOAD_REL * s;
	return {
		s, x0, y0, pivot: P(C_MAST), hook, cw: P(C_CW), top: y0 + 100 * s, left: x0 + 127 * s, right: x0 + 1322 * s,
		ppm: ((C_HOOK[0] - C_MAST[0]) * s) / 30,
		load: {s: ls, x: hook[0] - LOAD_ATTACH[0] * ls, y: hook[1] - LOAD_ATTACH[1] * ls, centre: [hook[0], hook[1] + (LOAD_BRICKS[0] - LOAD_ATTACH[1]) * ls] as [number, number], bottom: hook[1] + (LOAD_BRICKS[1] - LOAD_ATTACH[1]) * ls},
	};
};
export const CraneSvg: React.FC<{mastX: number; groundY: number; s: number; load?: boolean; opacity?: number}> = ({mastX, groundY, s, load = true, opacity = 1}) => {
	const g = craneGeom(mastX, groundY, s);
	return (
		<g opacity={opacity}>
			<image href={staticFile(CRANE_SRC)} x={g.x0} y={g.y0} width={CRANE_CANVAS[0] * s} height={CRANE_CANVAS[1] * s} preserveAspectRatio="none" />
			{load ? <image href={staticFile(LOAD_SRC)} x={g.load.x} y={g.load.y} width={LOAD_CANVAS[0] * g.load.s} height={LOAD_CANVAS[1] * g.load.s} preserveAspectRatio="none" /> : null}
		</g>
	);
};

// ---------------------------------------------------------------- marks
/**
 * A curved turning arrow on a circle about (cx, cy) from angle `from` to angle `to` (degrees, maths sense:
 * to > from is anticlockwise on screen). Draws on from `at` over `dur` frames; the head follows the tip.
 */
export const TurnArrow: React.FC<{cx: number; cy: number; r: number; from: number; to: number; color: string; width?: number; at?: number; dur?: number; out?: number; head?: number}> = ({cx, cy, r, from, to, color, width = 7, at = -30, dur = 20, out, head = 24}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, dur);
	const o = out === undefined ? 1 : 1 - prog(f, out, 10);
	if (p <= 0.001 || o <= 0.001 || Math.abs(to - from) < 0.5) return null;
	const end = from + (to - from) * p;
	const sgn = to > from ? 1 : -1;
	// Stop the line a little short of the tip so the head covers its end.
	const lineEnd = end - sgn * Math.min(Math.abs(end - from), (head * 0.6 * 180) / (Math.PI * r));
	const [x1, y1] = polar(cx, cy, r, from), [x2, y2] = polar(cx, cy, r, lineEnd), [hx, hy] = polar(cx, cy, r, end);
	const large = Math.abs(lineEnd - from) > 180 ? 1 : 0;
	const sweep = sgn > 0 ? 0 : 1;
	const tx = sgn * -Math.sin(rad(end)), ty = sgn * -Math.cos(rad(end));
	const nx = -ty, ny = tx;
	return (
		<g opacity={o}>
			<path d={`M${x1},${y1} A${r},${r} 0 ${large},${sweep} ${x2},${y2}`} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" />
			<path d={`M${hx + tx * head * 0.35},${hy + ty * head * 0.35} L${hx - tx * head * 0.75 + nx * head * 0.5},${hy - ty * head * 0.75 + ny * head * 0.5} L${hx - tx * head * 0.75 - nx * head * 0.5},${hy - ty * head * 0.75 - ny * head * 0.5} Z`} fill={color} />
		</g>
	);
};
/** Angle arc at (px, py) from direction a1 to direction a2 (degrees), with an optional label at its middle. */
export const ArcAngle: React.FC<{px: number; py: number; r: number; a1: number; a2: number; label?: React.ReactNode; color?: string; at?: number; size?: number; lr?: number; out?: number}> = ({px, py, r, a1, a2, label, color = INK, at = -30, size = 36, lr, out}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12) * (out === undefined ? 1 : 1 - prog(f, out, 10));
	if (o <= 0.001) return null;
	const [x1, y1] = polar(px, py, r, a1), [x2, y2] = polar(px, py, r, a2);
	const large = Math.abs(a2 - a1) > 180 ? 1 : 0, sweep = a2 > a1 ? 0 : 1;
	const [lx, ly] = polar(px, py, lr ?? r + 34, (a1 + a2) / 2);
	return (
		<g opacity={o}>
			<path d={`M${x1},${y1} A${r},${r} 0 ${large},${sweep} ${x2},${y2}`} fill="none" stroke={color} strokeWidth={3.5} />
			{label !== undefined ? <foreignObject x={lx - 200} y={ly - size * 0.7} width={400} height={size * 1.5} style={{overflow: 'visible'}}><div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color, textAlign: 'center', whiteSpace: 'pre', textShadow: `0 0 6px ${CARD}, 0 0 3px ${CARD}`}}>{label}</div></foreignObject> : null}
		</g>
	);
};
/** Right-angle mark at corner (x, y) between the directions a and a + 90 degrees. */
export const RightMark: React.FC<{x: number; y: number; a: number; size?: number; color?: string; at?: number; width?: number; turn?: 1 | -1}> = ({x, y, a, size = 22, color = INK, at = -30, width = 3, turn = 1}) => {
	const o = prog(useCurrentFrame(), at, 10);
	if (o <= 0.001) return null;
	const [ux, uy] = vec(size, a), [vx, vy] = vec(size, a + 90 * turn);
	return <path d={`M${x + ux},${y + uy} L${x + ux + vx},${y + uy + vy} L${x + vx},${y + vy}`} fill="none" stroke={color} strokeWidth={width} opacity={o} />;
};
/** A dashed line drawn on from `at` (line of action, construction line). */
export const DashLine: React.FC<{x1: number; y1: number; x2: number; y2: number; color: string; at?: number; dur?: number; width?: number; dash?: string; out?: number}> = ({x1, y1, x2, y2, color, at = -30, dur = 18, width = 4, dash = '16 10', out}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, dur), o = out === undefined ? 1 : 1 - prog(f, out, 10);
	if (p <= 0.001 || o <= 0.001) return null;
	return <line x1={x1} y1={y1} x2={x1 + (x2 - x1) * p} y2={y1 + (y2 - y1) * p} stroke={color} strokeWidth={width} strokeDasharray={dash} strokeLinecap="round" opacity={o} />;
};
/** Pivot dot (navy ring with a dot). */
export const PivotDot: React.FC<{x: number; y: number; at?: number; r?: number; color?: string}> = ({x, y, at = -30, r = 11, color = ROLE.given.stroke}) => {
	const o = prog(useCurrentFrame(), at, 10);
	if (o <= 0.001) return null;
	return <g opacity={o}><circle cx={x} cy={y} r={r + 4} fill={CARD} stroke={color} strokeWidth={4} /><circle cx={x} cy={y} r={r * 0.55} fill={color} /></g>;
};
/** A short scribble-free hand pen ring (ellipse drawn on). */
export const PenRing: React.FC<{cx: number; cy: number; rx: number; ry: number; at: number; color?: string; width?: number}> = ({cx, cy, rx, ry, at, color = INK, width = 4.5}) => {
	const d = `M${cx + rx},${cy} A${rx},${ry} 0 1,0 ${cx - rx},${cy} A${rx},${ry} 0 1,0 ${cx + rx * 0.98},${cy - ry * 0.18}`;
	return <DrawPath d={d} at={at} dur={18} color={color} width={width} />;
};
