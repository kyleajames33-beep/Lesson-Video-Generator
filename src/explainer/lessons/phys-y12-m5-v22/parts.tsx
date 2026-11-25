// Lesson parts for phys-y12-m5-v22: the energy bars (kinetic up from a zero line, potential down, total as a
// navy outline, all on one scale), the orbit stage (the painted Earth with a metre-to-pixel map for field motion
// runs), the three-curve graph, the steel ball plate for the thrown-ball inset, and the shared v17 to v21 parts.
// Colour key (design, root decisions 2 and 10; Revision 2): velocity teal, kinetic energy orange, potential
// energy violet, total energy navy (bold outline), engine thrust and energy supplied green, answers in dark-ink
// frames, mistakes slate (root rule R1).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {CARD, INK, INK_SOFT} from '../../shared/tokens';
import {BALL_PLATE, BallSvg} from '../../physics/projectile/board';
import {EARTH_SRC} from '../phys-y12-m5-v16/parts';
import {SAT_SRC} from '../phys-y12-m5-v17/parts';
import {COMET_SRC, Comet, SUN_SRC, SpeedBar, Sun} from '../phys-y12-m5-v20/parts';
import {AMBER, Earth, GREEN, GREY, Lbl, NAVY, ORANGE, Ring, SLATE, Satellite, T, TEAL, VIOLET, VecArrow, comma, fx, polar, sci as sciBase, txt} from '../phys-y12-m5-v21/parts';
/** Scientific notation with a true minus sign on the mantissa. */
export const sci = (v: number, d = 2) => sciBase(v, d).replace(/^-/, '−');
import {RE} from './common';

export {AMBER, BallSvg, Comet, Earth, GREEN, GREY, Lbl, NAVY, ORANGE, Ring, SLATE, Satellite, SpeedBar, Sun, T, TEAL, VIOLET, VecArrow, comma, fx, polar, txt};
/** Plates: Earth, satellite, the steel ball (scene 8 inset), the Sun and comet (scene 9). */
export const V22_PLATES = [EARTH_SRC, SAT_SRC, BALL_PLATE, SUN_SRC, COMET_SRC];

// ---------------------------------------------------------------- the orbit stage
/** Earth centred at (cx, cy), k px per metre; y up in metres, down on screen. */
export type St = {cx: number; cy: number; k: number};
export const P = (st: St, x: number, y: number): [number, number] => [st.cx + x * st.k, st.cy - y * st.k];
/** Plate rotation (degrees) for a satellite at (x, y) on screen round the stage centre (dish outwards). */
export const satDeg = (st: St, x: number, y: number) => (Math.atan2(y - st.cy, x - st.cx) * 180) / Math.PI + 90;
export const OrbitCircles: React.FC<{st: St; r1: number; r2: number; o1?: number; o2?: number; w2?: number}> = ({st, r1, r2, o1 = 1, o2 = 1, w2 = 3}) => (
	<g>
		<circle cx={st.cx} cy={st.cy} r={r1 * st.k} fill="none" stroke={INK} strokeWidth={3} strokeDasharray="10 8" opacity={o1} />
		<circle cx={st.cx} cy={st.cy} r={r2 * st.k} fill="none" stroke={INK} strokeWidth={w2} strokeDasharray="10 8" opacity={o2} />
		<Earth cx={st.cx} cy={st.cy} d={2 * RE * st.k} />
	</g>
);

// ---------------------------------------------------------------- energy bars (kit gap 7)
/** One state's bars: K (orange, up), U (violet, down), E (navy outline, down) from a zero line at y0. `s` is
 * px per joule. Each bar fades in from its own `at`. */
export const Bars: React.FC<{x: number; y0: number; s: number; k: number; u: number; e: number; kAt?: number; uAt?: number; eAt?: number; w?: number; gap?: number; labels?: boolean; size?: number}> = ({x, y0, s, k, u, e, kAt = -60, uAt = -60, eAt = -60, w = 60, gap = 18, labels = true, size = 30}) => {
	const f = useCurrentFrame();
	const ok = prog(f, kAt, 14), ou = prog(f, uAt, 14), oe = prog(f, eAt, 14);
	const hk = k * s * ok, hu = -u * s * ou, he = e * s * oe;
	const xe = x + 2 * (w + gap);
	return (
		<g>
			{ok > 0 ? <g>
				<rect x={x} y={y0 - Math.max(0, hk)} width={w} height={Math.abs(hk)} fill="#f6d2b4" stroke={ORANGE.stroke} strokeWidth={3} />
				{labels ? <T x={x + w / 2} y={y0 - Math.max(0, hk) - 12} size={size} anchor="middle" color={ORANGE.ink} opacity={ok}>K</T> : null}
			</g> : null}
			{ou > 0 ? <g>
				<rect x={x + w + gap} y={y0} width={w} height={hu} fill={VIOLET.soft} stroke={VIOLET.stroke} strokeWidth={3} />
				{labels ? <T x={x + w + gap + w / 2} y={y0 + hu + size + 6} size={size} anchor="middle" color={VIOLET.ink} opacity={ou}>U</T> : null}
			</g> : null}
			{oe > 0 ? <g>
				<rect x={xe} y={e < 0 ? y0 : y0 - he} width={w} height={Math.max(2, Math.abs(he))} fill={NAVY.soft} stroke={NAVY.stroke} strokeWidth={5} />
				{labels ? <T x={xe + w / 2} y={e < 0 ? y0 - he + size + 6 : y0 - he - 12} size={size} anchor="middle" color={NAVY.ink} opacity={oe}>E</T> : null}
			</g> : null}
		</g>
	);
};
/** The zero line under a set of bars. */
export const Zero: React.FC<{x1: number; x2: number; y: number; label?: boolean; opacity?: number}> = ({x1, x2, y, label = true, opacity = 1}) => (
	<g opacity={opacity}>
		<line x1={x1} y1={y} x2={x2} y2={y} stroke={INK} strokeWidth={4} />
		{label ? <T x={x1 - 10} y={y + 10} size={28} anchor="end" color={INK}>0</T> : null}
	</g>
);

// ---------------------------------------------------------------- the three-curve graph
/** A graph with its zero line at y0 (middle): x from 0 to xMax (m), `s` px per joule. */
export type G3 = {ox: number; y0: number; w: number; xMax: number; s: number; top: number; bot: number};
export const g3x = (g: G3, r: number) => g.ox + (r / g.xMax) * g.w;
export const g3y = (g: G3, v: number) => Math.max(g.top, Math.min(g.bot, g.y0 - v * g.s));
const pathD = (pts: [number, number][]) => pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
export const curve3 = (g: G3, fn: (r: number) => number, r0: number, r1: number, n = 140) => pathD(Array.from({length: n + 1}, (_, i) => { const r = r0 + ((r1 - r0) * i) / n; return [g3x(g, r), g3y(g, fn(r))] as [number, number]; }));
export const Axes3: React.FC<{g: G3; size?: number; xTitle?: string}> = ({g, size = 30, xTitle = 'orbital radius r'}) => (
	<g>
		<line x1={g.ox} y1={g.y0} x2={g.ox + g.w + 30} y2={g.y0} stroke={INK} strokeWidth={4} />
		<path d={`M${g.ox + g.w + 30},${g.y0} l-14,-8 l0,16 Z`} fill={INK} />
		<line x1={g.ox} y1={g.bot + 10} x2={g.ox} y2={g.top - 30} stroke={INK} strokeWidth={4} />
		<path d={`M${g.ox},${g.top - 30} l-8,14 l16,0 Z`} fill={INK} />
		<T x={g.ox + 16} y={g.top - 30} size={size}>energy (J)</T>
		<T x={g.ox + g.w + 30} y={g.y0 + 44} size={size} anchor="end">{xTitle}</T>
		<T x={g.ox - 12} y={g.y0 + 10} size={28} anchor="end" color={INK_SOFT}>0</T>
	</g>
);
export {INK, INK_SOFT, CARD};
