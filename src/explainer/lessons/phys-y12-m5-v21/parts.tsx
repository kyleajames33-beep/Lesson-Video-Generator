// Lesson parts for phys-y12-m5-v21: the radial climb (the painted Earth with a true-scale radial line), the
// work-area builder (the lifting-force curve with refining strips, exact arithmetic), the energy well graph
// (U = -GMm/r under a zero line at the top) and its well cross-section, the spacecraft plate, and the shared
// v17/v18 parts.
// Colour key (design, root decisions 2 and 10; Revision 2): gravitational potential energy violet, g violet,
// forces amber, the work area pale amber, r navy, the surface g and mgh grey (full opacity), increases green,
// kinetic energy orange (handoff only), answers in dark-ink frames, mistakes slate (root rule R1).
import React from 'react';
import {staticFile} from 'remotion';
import {CARD, INK, INK_SOFT, TONES} from '../../shared/tokens';
import {ROLE} from '../../physics/projectile/board';
import {EARTH_SRC} from '../phys-y12-m5-v16/parts';
import {AMBER, Earth, GREY, Lbl, NAVY, Ring, SAT_SRC, SLATE, Satellite, T, TEAL, VIOLET, comma, fx, polar, sci, txt} from '../phys-y12-m5-v17/parts';
import {VecArrow} from '../phys-y12-m5-v18/parts';
import {RE} from './common';

export {AMBER, Earth, GREY, Lbl, NAVY, Ring, SLATE, Satellite, T, TEAL, VIOLET, VecArrow, comma, fx, polar, sci, txt};
export const GREEN = TONES.green, ORANGE = ROLE.v;
export const CRAFT_SRC = 'assets/physics/y12p-spacecraft-v1.png';
/** The Sun and comet plates are used only by the opening frame (last time's final frame). */
export const V21_PLATES = [EARTH_SRC, SAT_SRC, CRAFT_SRC, 'assets/physics/phys-y11-sun-v1.png', 'assets/physics/y12p-comet-v1.png'];

/** The spacecraft plate (2048 x 768; alpha box (286, 138) to (1767, 585)) by alpha-box centre and width. */
export const Spacecraft: React.FC<{cx: number; cy: number; w: number}> = ({cx, cy, w}) => {
	const s = w / (1767 - 286);
	return <image href={staticFile(CRAFT_SRC)} x={cx - 1026.5 * s} y={cy - 361.5 * s} width={2048 * s} height={768 * s} />;
};

// ---------------------------------------------------------------- graphs
/** A graph frame: origin (ox, oy), width w, height h, x running 0..xMax (m). `down` graphs grow downwards from oy. */
export type Gr = {ox: number; oy: number; w: number; h: number; xMax: number; yMax: number};
export const gx = (g: Gr, r: number) => g.ox + (r / g.xMax) * g.w;
export const gy = (g: Gr, v: number) => g.oy - (v / g.yMax) * g.h;
const pathD = (pts: [number, number][]) => pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
/** A curve y = fn(r) from r0 to r1 on a graph. */
export const curveD = (g: Gr, fn: (r: number) => number, r0: number, r1: number, n = 140) => pathD(Array.from({length: n + 1}, (_, k) => { const r = r0 + ((r1 - r0) * k) / n; return [gx(g, r), gy(g, fn(r))]; }));
/** The area under a curve from r0 to r1 (closed to the axis). */
export const areaD = (g: Gr, fn: (r: number) => number, r0: number, r1: number, n = 140) => `${curveD(g, fn, r0, r1, n)} L${gx(g, r1).toFixed(1)},${g.oy} L${gx(g, r0).toFixed(1)},${g.oy} Z`;
/** Axes with arrowheads and titles (x along the bottom, y up the left). */
export const Axes: React.FC<{g: Gr; xTitle: React.ReactNode; yTitle?: React.ReactNode; xTicks?: readonly [number, string][]; yTicks?: readonly [number, string][]; opacity?: number}> = ({g, xTitle, yTitle, xTicks = [], yTicks = [], opacity = 1}) => (
	<g opacity={opacity}>
		<line x1={g.ox} y1={g.oy} x2={g.ox + g.w + 30} y2={g.oy} stroke={INK} strokeWidth={4} />
		<line x1={g.ox} y1={g.oy} x2={g.ox} y2={g.oy - g.h - 30} stroke={INK} strokeWidth={4} />
		<path d={`M${g.ox + g.w + 30},${g.oy} l-14,-8 l0,16 Z`} fill={INK} />
		<path d={`M${g.ox},${g.oy - g.h - 30} l-8,14 l16,0 Z`} fill={INK} />
		{xTicks.map(([v, l], i) => <g key={i}><line x1={gx(g, v)} y1={g.oy} x2={gx(g, v)} y2={g.oy + 10} stroke={INK} strokeWidth={3} /><T x={gx(g, v)} y={g.oy + 40} size={28} color={INK_SOFT} anchor="middle" weight={700}>{l}</T></g>)}
		{yTicks.map(([v, l], i) => <g key={i}><line x1={g.ox - 10} y1={gy(g, v)} x2={g.ox} y2={gy(g, v)} stroke={INK} strokeWidth={3} /><T x={g.ox - 16} y={gy(g, v) + 10} size={28} color={INK_SOFT} anchor="end" weight={700}>{l}</T></g>)}
		<T x={g.ox + g.w + 30} y={g.oy + 80} size={30} anchor="end">{xTitle}</T>
		{yTitle ? <T x={g.ox + 16} y={g.oy - g.h - 40} size={30}>{yTitle}</T> : null}
	</g>
);

// ---------------------------------------------------------------- the energy well graph
/** The well graph: the zero line at y0 (top), U = -GMm/r below it; depth px for U(R). x runs 0..xMax (m). */
export type Well = {ox: number; y0: number; w: number; depth: number; xMax: number; umin: number};
export const wx = (w: Well, r: number) => w.ox + (r / w.xMax) * w.w;
export const wy = (w: Well, u: number) => w.y0 + (u / w.umin) * w.depth;
export const wellCurveD = (w: Well, U: (r: number) => number, r0: number, r1: number, n = 160) => pathD(Array.from({length: n + 1}, (_, k) => { const r = r0 + ((r1 - r0) * k) / n; return [wx(w, r), wy(w, U(r))]; }));
/** The coded well cross-section: rim at y0, walls following U(|x|) outside Earth, the Earth plate at the bottom. */
export const WellSection: React.FC<{cx: number; y0: number; halfW: number; depth: number; U: (r: number) => number; rMax: number; earthD?: number; draw?: number}> = ({cx, y0, halfW, depth, U, rMax, earthD = 70, draw = 1}) => {
	const u0 = U(RE);
	const side = (sgn: number) => Array.from({length: 61}, (_, k) => { const r = RE + ((rMax - RE) * k) / 60; return [cx + sgn * (earthD / 2 + ((r - RE) / (rMax - RE)) * (halfW - earthD / 2)), y0 + (U(r) / u0) * depth] as [number, number]; });
	const L = side(-1), R = side(1);
	const d = pathD([...L.reverse(), ...R]);
	return (
		<g opacity={draw}>
			<path d={`${d} L${cx + halfW},${y0 - 6} L${cx - halfW},${y0 - 6} Z`} fill="#efe7f7" stroke="none" />
			<path d={d} fill="none" stroke={VIOLET.stroke} strokeWidth={5} />
			<line x1={cx - halfW - 30} y1={y0} x2={cx + halfW + 30} y2={y0} stroke={INK} strokeWidth={4} />
			<Earth cx={cx} cy={y0 + depth + earthD * 0.15} d={earthD} />
		</g>
	);
};
/** A point on the well section's wall at radius r (right side). */
export const wellWall = (cx: number, y0: number, halfW: number, depth: number, U: (r: number) => number, rMax: number, r: number, earthD = 70): [number, number] => [cx + earthD / 2 + ((r - RE) / (rMax - RE)) * (halfW - earthD / 2), y0 + (U(r) / U(RE)) * depth];
export {INK, INK_SOFT, CARD};
