// Lesson parts for phys-y12-m5-v20: the Kepler orbit stage (a field motion run in AU and years drawn about the
// painted Sun, with equal-time sectors and the end triangles as lesson overlays built from the run's
// positions), the painted Sun, comet (rotated about its nucleus so the tails point away from the Sun), Mars
// and Jupiter, and the shared v17/v18 parts.
// Colour key (design, root decisions 2 and 10; Revision 2): velocity teal, gravity amber (its along-path part
// dashed amber, its across-path part dashed grey), swept areas pale amber, the semi-major axis navy, foci navy
// crosses, answers in dark-ink frames, mistakes slate (root rule R1).
import React from 'react';
import {staticFile} from 'remotion';
import {CARD, INK, INK_SOFT} from '../../shared/tokens';
import type {MotionPath} from '../../sims/field-motion';
import {stateAt, trailTo} from '../../sims/field-motion';
import {EARTH_SRC} from '../phys-y12-m5-v16/parts';
import {AMBER, DashCircle, Earth, GREY, Lbl, MARS_SRC, Mars, SAT_SRC, NAVY, Ring, SLATE, T, TEAL, VIOLET, comma, fx, polar, sci, txt} from '../phys-y12-m5-v17/parts';
import {VecArrow} from '../phys-y12-m5-v18/parts';
import {AUYR_KMS} from './common';

export {AMBER, DashCircle, Earth, GREY, Lbl, Mars, NAVY, Ring, SLATE, T, TEAL, VIOLET, VecArrow, comma, fx, polar, sci, txt};
export const SUN_SRC = 'assets/physics/phys-y11-sun-v1.png';
export const COMET_SRC = 'assets/physics/y12p-comet-v1.png';
export const JUPITER_SRC = 'assets/physics/y12p-jupiter-v1.png';
/** The satellite plate is used only by the opening frame (last time's final frame). */
export const V20_PLATES = [SUN_SRC, COMET_SRC, MARS_SRC, JUPITER_SRC, EARTH_SRC, SAT_SRC];

/** The Sun plate (disc centre (613, 627), radius 538 in its 1254 plate) by centre and diameter. */
export const Sun: React.FC<{cx: number; cy: number; d: number; opacity?: number}> = ({cx, cy, d, opacity = 1}) => {
	const s = d / 1076;
	return <image href={staticFile(SUN_SRC)} x={cx - 613 * s} y={cy - 627 * s} width={1254 * s} height={1254 * s} opacity={opacity} />;
};
/** Jupiter (alpha box (206, 195) to (1038, 1043)) by centre and diameter. */
export const Jupiter: React.FC<{cx: number; cy: number; d: number}> = ({cx, cy, d}) => {
	const s = d / 840;
	return <image href={staticFile(JUPITER_SRC)} x={cx - 622 * s} y={cy - 619 * s} width={1254 * s} height={1254 * s} />;
};
/** The comet plate (1983 x 793; nucleus (1624, 382), tails to the left) by nucleus position and whole-plate
 * width, turned about the nucleus so the tails point along `away` (a screen direction, usually Sun to comet). */
export const Comet: React.FC<{x: number; y: number; w: number; away: [number, number]; opacity?: number}> = ({x, y, w, away, opacity = 1}) => {
	const s = w / 1983;
	const deg = (Math.atan2(away[1], away[0]) * 180) / Math.PI + 180;
	return <g transform={`rotate(${deg} ${x} ${y})`} opacity={opacity}><image href={staticFile(COMET_SRC)} x={x - 1624 * s} y={y - 382 * s} width={1983 * s} height={793 * s} /></g>;
};

// ---------------------------------------------------------------- the Kepler stage
/** A view: the Sun at (sx, sy), k px per AU. Perihelion (run +x) is drawn to the LEFT of the Sun. */
export type View = {sx: number; sy: number; k: number};
export const toV = (v: View, x: number, y: number): [number, number] => [v.sx - x * v.k, v.sy - y * v.k];
export const lerpView = (a: View, b: View, t: number): View => ({sx: a.sx + (b.sx - a.sx) * t, sy: a.sy + (b.sy - a.sy) * t, k: a.k + (b.k - a.k) * t});
const pathD = (pts: [number, number][]) => pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
/** The ellipse of a Kepler orbit (a, e) with the Sun at the focus, in a view. */
export const ellipseD = (v: View, a: number, e: number, n = 160) => {
	const b = a * Math.sqrt(1 - e * e), c = a * e;
	return pathD(Array.from({length: n + 1}, (_, k) => { const t = (2 * Math.PI * k) / n; return toV(v, a * Math.cos(t) - c, b * Math.sin(t)); }));
};
/** State of a run at time t (years, wrapped to the run). */
export const at = (p: MotionPath, t: number) => stateAt(p, ((t % p.duration) + p.duration) % p.duration);
/** The swept sector from the Sun between times t0 and t1 (years), as a closed path, and its area (AU^2). */
export const sector = (v: View, p: MotionPath, t0: number, t1: number, n = 24) => {
	const pts: [number, number][] = [];
	let area = 0, last: [number, number] | null = null;
	for (let k = 0; k <= n; k++) {
		const s = at(p, t0 + ((t1 - t0) * k) / n);
		if (last) area += 0.5 * Math.abs(last[0] * s.y - last[1] * s.x);
		last = [s.x, s.y];
		pts.push(toV(v, s.x, s.y));
	}
	return {d: `M${v.sx},${v.sy} ${pathD(pts).replace('M', 'L')} Z`, area};
};
/** Head of a run in a view: pixels, unit velocity on screen, speed in km/s, and the acceleration split into
 * its part along the velocity and its part across it (screen vectors, AU/yr^2). */
export const head = (v: View, p: MotionPath, t: number) => {
	const s = at(p, t);
	const [x, y] = toV(v, s.x, s.y);
	const sp = Math.hypot(s.vx, s.vy) || 1;
	const ux = -s.vx / sp, uy = -s.vy / sp;
	const ax = -s.ax, ay = -s.ay;
	const along = ax * ux + ay * uy;
	return {x, y, ux, uy, kms: sp * AUYR_KMS, ax, ay, along: [along * ux, along * uy] as [number, number], across: [ax - along * ux, ay - along * uy] as [number, number], r: Math.hypot(s.x, s.y)};
};
/** A thin trail of a run up to time t. */
export const Trail: React.FC<{v: View; p: MotionPath; t0: number; t1: number; color?: string; width?: number}> = ({v, p, t0, t1, color = TEAL.stroke, width = 4}) => {
	if (t1 <= t0) return null;
	const pts = Array.from({length: 120}, (_, k) => { const s = at(p, t0 + ((t1 - t0) * k) / 119); return toV(v, s.x, s.y); });
	return <path d={pathD(pts)} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" />;
};
/** A focus marker: a small navy cross. */
export const Focus: React.FC<{x: number; y: number; size?: number; color?: string}> = ({x, y, size = 14, color = NAVY.stroke}) => (
	<path d={`M${x - size},${y - size} L${x + size},${y + size} M${x + size},${y - size} L${x - size},${y + size}`} stroke={color} strokeWidth={4.5} strokeLinecap="round" />
);
/** A live speed bar (teal) from (x, y) upwards, `h` px for vMax km/s. */
export const SpeedBar: React.FC<{x: number; y: number; w?: number; h: number; kms: number; vMax: number; label?: string}> = ({x, y, w = 46, h, kms, vMax, label = 'speed'}) => {
	const fill = Math.max(2, Math.min(1, kms / vMax) * h);
	return (
		<g>
			<rect x={x} y={y - h} width={w} height={h} fill={CARD} stroke={INK_SOFT} strokeWidth={3} rx={6} />
			<rect x={x + 3} y={y - fill} width={w - 6} height={fill - 3} fill={TEAL.stroke} rx={4} />
			<T x={x + w / 2} y={y + 34} size={28} anchor="middle" color={TEAL.ink}>{label}</T>
		</g>
	);
};
export {trailTo, INK, INK_SOFT, CARD};
