// Lesson parts for phys-y12-m5-v18: the orbit stage (the painted Earth with metre-to-pixel mapping for field
// motion runs), Newton's mountain (a coded mountain at true launch height with the painted launcher in a zoom
// circle), the space station and spanner plates, and the shared v17 parts (satellite, Moon, number formats).
// Colour key (design, root decisions 2 and 10): velocity teal, gravitational force amber, g and acceleration
// violet, r navy, altitude grey (full opacity), answers in dark-ink frames, mistakes slate (root rule R1).
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {CARD, INK, INK_SOFT} from '../../shared/tokens';
import {BALL_PLATE, BallSvg, LAUNCHER_PLATES, LauncherSvg, VecArrow, launcherGeom} from '../../physics/projectile/board';
import type {MotionPath} from '../../sims/field-motion';
import {stateAt, trailTo} from '../../sims/field-motion';
import {AMBER, AUS, DashCircle, Earth, GREY, Lbl, Moon, NAVY, Ring, SAT_SRC, Satellite, SLATE, T, TEAL, VIOLET, comma, fx, polar, sci, txt} from '../phys-y12-m5-v17/parts';
import {EARTH_SRC, MOON_SRC} from '../phys-y12-m5-v16/parts';
import {RE} from './common';

export {AMBER, AUS, DashCircle, Earth, GREY, Lbl, Moon, NAVY, Ring, Satellite, SLATE, T, TEAL, VIOLET, comma, fx, polar, sci, txt};
export const STATION_SRC = 'assets/physics/y12p-space-station-v1.png';
export const SPANNER_SRC = 'assets/physics/y12p-spanner-v1.png';
export const V18_PLATES = [EARTH_SRC, MOON_SRC, SAT_SRC, STATION_SRC, SPANNER_SRC, BALL_PLATE, ...LAUNCHER_PLATES];

/** A stage: Earth centred at (cx, cy) drawn `R` px in radius; metres map uniformly (y up in metres, down on screen). */
export type Stage = {cx: number; cy: number; R: number};
export const toPx = (st: Stage, x: number, y: number): [number, number] => [st.cx + (x / RE) * st.R, st.cy - (y / RE) * st.R];
export const rPx = (st: Stage, r: number) => (r / RE) * st.R;

/** A field motion run drawn as a trail to time t (s) with an optional ball (coded dot) at its head. */
export const RunTrail: React.FC<{st: Stage; path: MotionPath; t: number; color?: string; width?: number; dot?: number; opacity?: number}> = ({st, path, t, color = TEAL.stroke, width = 5, dot = 0, opacity = 1}) => {
	if (t <= 0) return null;
	const pts = trailTo(path, t, 260).map(([x, y]) => toPx(st, x, y));
	const d = pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
	const s = stateAt(path, t);
	const [hx, hy] = toPx(st, s.x, s.y);
	return (
		<g opacity={opacity}>
			<path d={d} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
			{dot > 0 ? <circle cx={hx} cy={hy} r={dot} fill={INK} stroke={CARD} strokeWidth={2} /> : null}
		</g>
	);
};
/** Head of a run at time t, in pixels, with the unit velocity direction (screen). */
export const headAt = (st: Stage, path: MotionPath, t: number) => {
	const s = stateAt(path, t);
	const [x, y] = toPx(st, s.x, s.y);
	const sp = Math.hypot(s.vx, s.vy) || 1;
	return {x, y, ux: s.vx / sp, uy: -s.vy / sp, speed: s.speed};
};

/** Newton's mountain: a coded peak on top of the Earth plate, rising to the launch radius (true scale), drawn up from `at`. */
export const Mountain: React.FC<{st: Stage; r0: number; at?: number; opacity?: number}> = ({st, r0, at = -60, opacity = 1}) => {
	const p = prog(useCurrentFrame(), at, 30);
	if (p <= 0) return null;
	const top = st.cy - st.R, peak = st.cy - rPx(st, r0);
	const h = (top - peak) * p + 3;
	const half = 34;
	return (
		<g opacity={opacity}>
			<path d={`M${st.cx - half},${top + 8} L${st.cx - 4},${top - h} L${st.cx + 4},${top - h} L${st.cx + half},${top + 8} Z`} fill="#b9ad97" stroke={INK} strokeWidth={3} strokeLinejoin="round" />
		</g>
	);
};
/** The zoom circle at the peak: the painted launcher (barrel level) with the steel ball at the muzzle. */
export const LauncherZoom: React.FC<{x: number; y: number; r: number; at: number; out?: number; peak: [number, number]}> = ({x, y, r, at, out, peak}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 16) * (out === undefined ? 1 : 1 - prog(f, out, 14));
	if (o <= 0.001) return null;
	const w = r * 1.25;
	const g = launcherGeom(0, 0, w, 0);
	const px = x - w * 0.18, py = y + r * 0.08;
	const gm = launcherGeom(px, py, w, 0);
	return (
		<g opacity={o}>
			<line x1={peak[0]} y1={peak[1]} x2={x - r * 0.7} y2={y + r * 0.7} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="6 6" />
			<circle cx={x} cy={y} r={r} fill={CARD} stroke={INK} strokeWidth={4} />
			<clipPath id="v18zoom"><circle cx={x} cy={y} r={r - 3} /></clipPath>
			<g clipPath="url(#v18zoom)">
				<path d={`M${x - r},${gm.floorY + 2} L${x - r * 0.2},${gm.floorY + 2} L${x + r * 0.1},${y + r} L${x - r},${y + r} Z`} fill="#b9ad97" stroke={INK} strokeWidth={3} />
				<LauncherSvg px={px} py={py} w={w} deg={0} />
				<BallSvg cx={gm.muzzle[0] + g.ballD * 0.5} cy={gm.muzzle[1]} d={g.ballD} />
			</g>
		</g>
	);
};

/** The station plate (alpha box (282, 279) to (1893, 508)) by the centre of its alpha box and the box width. */
export const Station: React.FC<{cx: number; cy: number; w: number; rotate?: number; opacity?: number}> = ({cx, cy, w, rotate = 0, opacity = 1}) => {
	const s = w / (1893 - 282);
	const bx = (282 + 1893) / 2, by = (279 + 508) / 2;
	return <g transform={`rotate(${rotate} ${cx} ${cy})`} opacity={opacity}><image href={staticFile(STATION_SRC)} x={cx - bx * s} y={cy - by * s} width={2172 * s} height={724 * s} /></g>;
};
/** The spanner plate (alpha box (158, 183) to (1993, 543)) by centre and box width. */
export const Spanner: React.FC<{cx: number; cy: number; w: number; rotate?: number}> = ({cx, cy, w, rotate = 0}) => {
	const s = w / (1993 - 158);
	const bx = (158 + 1993) / 2, by = (183 + 543) / 2;
	return <g transform={`rotate(${rotate} ${cx} ${cy})`}><image href={staticFile(SPANNER_SRC)} x={cx - bx * s} y={cy - by * s} width={2172 * s} height={724 * s} /></g>;
};

/** Right-angle mark at (x, y) between unit directions a and b (screen), size s. */
export const RightAngle: React.FC<{x: number; y: number; a: [number, number]; b: [number, number]; s?: number; color?: string}> = ({x, y, a, b, s = 20, color = INK}) => (
	<path d={`M${x + a[0] * s},${y + a[1] * s} L${x + a[0] * s + b[0] * s},${y + a[1] * s + b[1] * s} L${x + b[0] * s},${y + b[1] * s}`} fill="none" stroke={color} strokeWidth={3} />
);
/** Arrow helper re-export for the stage files. */
export {VecArrow};
