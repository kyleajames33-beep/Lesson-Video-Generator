// Lesson parts for math-a12-i09 (Revision 2: definite integrals without losing signs; an outdoor thermometer on a
// frosty morning), on the maths studio kit and i08's parts (imported read-only). Lesson-local rigs:
// - ThermoRig: the painted thermometer (brief 238 plate; mapping y = 1017 − 97T in file pixels, bulb (498, 1577),
//   tube centre top (498.5, 505)) with the kit ThermoColumn's coded spirit column and coded degree numbers beside
//   the backing board (x 578), plus an optional clock tag;
// - Graph: an ink curve with a signed fill on its own axes, used by every worked example;
// - Task, the g01 task card; Num, the number line for attempt 2.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, prog} from '../../kit';
import {AreaFillLayer, CARD, FrameSvg, StudioPlot, ThermoColumn, fnPath, plateMap, vis} from '../../math/studio';
import type {PlateSpec, PlotMap, PlotTick} from '../../math/studio';

export {ABLUE, AMBER, AMBER_STROKE, AnswerBox, Attempt, BoxCard, Bu, Chip, FramedCard, GRAD, Int, Lims, Line, MiniPlot, PLabel, Rows, Rt, TEAL, Te, Tick, Vi} from '../math-a12-i08/parts';
export {Ex} from '../math-a12-i03/parts';

export const SOFT = '#4f4840';
export const RED = '#b8322a';

// ---------- the models (design author notes) ----------
export const sq = (x: number) => x * x;
export const cubeF = (x: number) => (x * x * x) / 3;
{
	const near = (a: number, b: number, tol = 1e-9) => Math.abs(a - b) < tol;
	const checks: [string, boolean][] = [
		['hook', near(cubeF(1) - cubeF(-2), 3) && near(1 / 3 - 8 / 3, -7 / 3) && near(1 - -2, 3)],
		['split', near(cubeF(0) - cubeF(-2), 8 / 3) && near(cubeF(1) - cubeF(0), 1 / 3)],
		['reverse', near(cubeF(-2) - cubeF(1), -3) && near(-2 - 1, -3)],
		['sine', near(-Math.cos(Math.PI) - -Math.cos(0), 2) && near(-0.5 * Math.cos(Math.PI / 2) - -0.5 * Math.cos(0), 0.5)],
		['exp', near(Math.exp(2) + 2 - 1, Math.exp(2) + 1) && Math.abs(Math.exp(2) + 1 - 8.389) < 5e-4 && near(Math.log(Math.E) - Math.log(1), 1)],
		['find k', near(3 * 3 - 1, 8) && near((-3) ** 2 - 1, 8)],
		['A1', near(-Math.cos(Math.PI) - -Math.cos(Math.PI / 3), 1.5)],
		['A2', 7 - 3 === 4],
		['handoff', near(-Math.cos(2 * Math.PI) - -Math.cos(0), 0)],
	];
	const bad = checks.filter(k => !k[1]).map(k => k[0]);
	if (bad.length) throw new Error('math-a12-i09 numbers: ' + bad.join(', '));
}

// ---------- the thermometer ----------
export const FROST: PlateSpec = {src: 'assets/maths/ma12-frost-thermometer-v1.png', nat: [1000, 2400], box: [155, 259, 843, 2130]};
const yOfT = (T: number) => 1017 - 97 * T;
const BULB = [498, 1577] as const, TOP = [498.5, 505] as const;
const SCALE = {min: (1017 - BULB[1]) / 97, max: (1017 - TOP[1]) / 97};
export const frostW = (h: number) => (h * (FROST.box[2] - FROST.box[0])) / (FROST.box[3] - FROST.box[1]);
/** The thermometer with its top-left alpha corner at (x, y), height h, reading T °C. */
export const ThermoRig: React.FC<{x: number; y: number; h: number; T: number; clock?: string; at?: number; out?: number; mark?: {T: number; o: number}}> = ({x, y, h, T, clock, at = -30, out, mark}) => {
	const fr = useCurrentFrame();
	const o = vis(fr, at, out, 14);
	if (o <= 0.001) return null;
	const w = frostW(h);
	const m = plateMap(FROST, x, y, w);
	const every = m.s >= 0.33 ? 1 : 5;
	const lx = m.at(585, 0)[0];
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o}}>
			<ThermoColumn plate={FROST} x={x} y={y} w={w} bulb={BULB} top={TOP} tubeWidth={15} scale={SCALE} value={T} color="#c8443a" />
			<FrameSvg>
				{Array.from({length: 11}, (_, i) => i - 5).filter(t => t % every === 0).map(t => {const [, py] = m.at(0, yOfT(t)); return <text key={t} x={lx} y={py + 10} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, fill: t === 0 ? INK : '#3d362e'}} stroke={CARD} strokeWidth={6} paintOrder="stroke">{t < 0 ? `−${-t}` : t}</text>;})}
				{(() => {const [, py] = m.at(0, yOfT(5.6)); return <text x={lx} y={py} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, fill: INK}} stroke={CARD} strokeWidth={6} paintOrder="stroke">°C</text>;})()}
				{mark && mark.o > 0.01 ? (() => {const [bx] = m.at(418, 0), [, py] = m.at(0, yOfT(mark.T)); return <g opacity={mark.o}><line x1={bx - 30} x2={bx - 4} y1={py} y2={py} stroke={AMBER_S} strokeWidth={5} /><path d={`M${bx - 14},${py - 9} L${bx - 2},${py} L${bx - 14},${py + 9}`} fill={AMBER_S} /></g>;})() : null}
				{clock ? <text x={x + w / 2} y={y - 18} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, fill: '#9c5a00'}} stroke={CARD} strokeWidth={7} paintOrder="stroke">{clock}</text> : null}
			</FrameSvg>
		</div>
	);
};
const AMBER_S = '#d18f1f';
/** Clock text for t hours after midnight (6 am, 7:30 am, 9 pm). */
export const clockText = (t: number) => {
	const mins = Math.round(t * 60), hh = Math.floor(mins / 60) % 24, mm = mins % 60;
	const h12 = hh % 12 === 0 ? 12 : hh % 12;
	return `${h12}${mm ? ':' + String(mm).padStart(2, '0') : ''} ${hh < 12 ? 'am' : 'pm'}`;
};

// ---------- graphs ----------
export type Win = {x: [number, number]; y: [number, number]};
/** An ink curve with a signed fill from a to b (fill fraction `sweep` from a). */
export const Graph: React.FC<{x: number; y: number; w: number; h: number; win: Win; fn: (x: number) => number; a: number; b: number; sweep?: number; fillO?: number; from?: number; to?: number; xTicks?: readonly (number | PlotTick)[]; yTicks?: readonly (number | PlotTick)[]; xLabel?: string; yLabel?: string; ends?: boolean; at?: number; out?: number; kids?: (m: PlotMap) => React.ReactNode; under?: (m: PlotMap) => React.ReactNode}> = ({x, y, w, h, win, fn, a, b, sweep = 1, fillO = 1, from, to, xTicks, yTicks, xLabel = 'x', yLabel = 'y', ends = true, at = -30, out, kids, under}) => (
	<StudioPlot x={x} y={y} width={w} height={h} window={win} xTicks={xTicks} yTicks={yTicks} xLabel={xLabel} yLabel={yLabel} at={at} out={out}>
		{m => <>
			{under ? under(m) : null}
			{fillO > 0.01 && sweep > 0.001 ? <g opacity={fillO}><AreaFillLayer m={m} fn={fn} a={a} to={a + (b - a) * sweep} signed /></g> : null}
			<g clipPath={m.clip}><path d={fnPath(m, fn, from ?? win.x[0], to ?? win.x[1])} stroke={INK} strokeWidth={6} fill="none" strokeLinecap="round" /></g>
			{ends ? [a, b].map(X => {const [px, py] = m.p(X, fn(X)); return <circle key={X} cx={px} cy={py} r={11} fill={INK} stroke={CARD} strokeWidth={4} />;}) : null}
			{kids ? kids(m) : null}
		</>}
	</StudioPlot>
);

/** The g01 task card (task strip) at 44 px. */
export const Task: React.FC<{x: number; y: number; w: number; at: number; out?: number; size?: number; children: React.ReactNode}> = ({x, y, w, at, out, size = 44, children}) => {
	const fr = useCurrentFrame();
	const o = vis(fr, at, out, 12);
	if (o <= 0.001) return null;
	return <div style={{position: 'absolute', left: x, top: y, width: w, opacity: o, background: CARD, borderRadius: 18, borderLeft: '10px solid #8a5a12', boxShadow: '0 14px 32px rgba(60,45,20,0.10)', padding: '8px 24px 12px', boxSizing: 'border-box'}}>
		<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: SOFT}}>TASK</div>
		<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: INK, whiteSpace: 'pre'}}>{children}</div>
	</div>;
};
/** A working row at a fixed position that writes on at `at`. */
export const Row: React.FC<{x: number; y: number; at: number; out?: number; size?: number; dim?: number; color?: string; children: React.ReactNode}> = ({x, y, at, out, size = 48, dim = 0, color = INK, children}) => {
	const fr = useCurrentFrame();
	const o = vis(fr, at, out, 12);
	if (o <= 0.001) return null;
	return <div style={{position: 'absolute', left: x, top: y, opacity: o * (1 - 0.3 * dim), transform: `translateY(${(1 - prog(fr, at, 12)) * 10}px)`, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color, whiteSpace: 'pre', lineHeight: 1.2}}>{children}</div>;
};
/** A hand-font tag in frame space. */
export const Hand: React.FC<{x: number; y: number; at: number; out?: number; size?: number; color?: string; children: React.ReactNode}> = ({x, y, at, out, size = 40, color = INK, children}) => {
	const fr = useCurrentFrame();
	const o = vis(fr, at, out, 12);
	if (o <= 0.001) return null;
	return <div style={{position: 'absolute', left: x, top: y, opacity: o, fontFamily: FONT_HAND, fontWeight: 700, fontSize: size, color, whiteSpace: 'pre'}}>{children}</div>;
};
/** A number line from 0 to 5 with brackets above it (attempt 2 and its feedback). */
export const NumLine: React.FC<{w: number; h: number; brackets: readonly {from: number; to: number; label: string; level: number; color?: string; o?: number}[]; ticks?: readonly number[]}> = ({w, h, brackets, ticks = [0, 2, 5]}) => {
	const X = (v: number) => 50 + (v / 5) * (w - 100);
	const base = h - 70;
	return <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{display: 'block', overflow: 'visible'}}>
		<line x1={30} x2={w - 20} y1={base} y2={base} stroke={INK} strokeWidth={4} />
		{ticks.map(t => <g key={t}><line x1={X(t)} x2={X(t)} y1={base - 14} y2={base + 14} stroke={INK} strokeWidth={4} /><text x={X(t)} y={base + 54} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, fill: INK}}>{t}</text></g>)}
		{brackets.map((b, i) => {const yy = base - 40 - b.level * 90; const c = b.color ?? INK; return <g key={i} opacity={b.o ?? 1}>
			<path d={`M${X(b.from) + 4},${yy + 24} V${yy} H${X(b.to) - 4} V${yy + 24}`} stroke={c} strokeWidth={5} fill="none" />
			<text x={(X(b.from) + X(b.to)) / 2} y={yy - 14} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 46, fill: c}}>{b.label}</text>
		</g>;})}
	</svg>;
};
