// Lesson parts for math-a12-i04 (Revision 3: the reciprocal primitive and ln|x|; a school fundraiser whose
// donations come in at 1000/t dollars a day), on the maths studio kit and i03's parts (imported read-only).
// Lesson-local rigs:
// - FundRig: the painted thermometer board (brief 238 plate) with a coded red fill drawn BEHIND the plate, so it
//   shows through the plate's transparent tube, neck and bulb (238-I04-TUBE-BULB-CONNECTION: the 24 px neck at
//   y 1900 to 1923 joins them), on a coded $0 to $7000 scale (tube inner bottom y 1900 = $0, top y 260 = $7000);
// - FundGraph and FundBoard: the donation rate (violet) and total (ink) graphs on days 1 to 32, and the readouts,
//   all from one t, so the fill, the graph and the readout agree to the dollar;
// - PairPlots: the paired ln / 1/x panels (same geometry as the kit TwoPieceTracer used in scenes 4 and 5);
// - GapLine: a number line with grey excluded rings.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT} from '../../kit';
import {CARD, FrameSvg, LiveReadoutBoard, MATH_EXCLUDED, MATH_GRADIENT, StudioPlot, SvgPlate, fmtMoney, fnPath, makePlot, plateMap, usePlatePreload, vis} from '../../math/studio';
import type {PlateSpec, PlotMap} from '../../math/studio';

export {AMB, AnswerBox, Attempt, BLUE, Bl, BoxCard, Cc, Chip, CurvePic, Ex, FramedCard, Frac, GREEN, GREY, Line, MiniPlot, PLabel, RED, Tick, V, VIOLET} from '../math-a12-i03/parts';
export {QAxes} from '../math-a12-d17/parts';

// ---------- the models (design author notes a to h, Revision 3 anchor) ----------
/** Donations: R(t) = 1000/t dollars a day; total D(t) = 1000 ln t + 2000 (t ≥ 1, $2000 in at the end of day one). */
export const rate = (t: number) => 1000 / t;
export const total = (t: number, C = 2000) => 1000 * Math.log(t) + C;
export const LADDER = [1, 2, 4, 8, 16, 32];
{
	const near = (a: number, b: number, tol = 1e-3) => Math.abs(a - b) < tol;
	const d = (F: (x: number) => number, x: number) => (F(x + 1e-6) - F(x - 1e-6)) / 2e-6;
	const lnAbs = (x: number) => Math.log(Math.abs(x));
	const checks: [string, boolean][] = [
		['fundraiser', near(total(1), 2000) && near(d(t => total(t), 7), rate(7), 1e-4) && near(total(10), 4302.585) && near(total(32), 5465.736) && near(rate(32), 31.25)
			&& LADDER.slice(1).every((t, i) => near(total(t) - total(LADDER[i]), 1000 * Math.LN2)) && near(1000 * Math.LN2, 693.147)],
		['ln|x|', near(d(lnAbs, 2), 0.5, 1e-6) && near(d(lnAbs, -2), -0.5, 1e-6) && near(d(x => Math.log(-x), -0.5), -2, 1e-5)],
		['linear', near(d(x => lnAbs(2 * x - 3), 2), 2, 1e-5) && near(d(x => 0.5 * lnAbs(2 * x - 3), 2), 1, 1e-5) && near(d(x => 0.5 * lnAbs(2 * x - 3), 1), -1, 1e-5)],
		['matched', near(d(x => Math.log(x * x + 4), 1.3), 2.6 / (1.69 + 4), 1e-6) && near(d(x => lnAbs(x * x - 4), 0.7), 1.4 / (0.49 - 4), 1e-6)],
		['we-1', near(d(x => (2 / 3) * Math.exp(3 * x) + 4 * lnAbs(x), -0.6), 2 * Math.exp(-1.8) + 4 / -0.6, 1e-5)],
		['we-2', near(d(x => -Math.exp(-x) + 3 * lnAbs(x) + x ** 3 / 3, 1.4), Math.exp(-1.4) + 3 / 1.4 + 1.96, 1e-5)],
		['A1', near(d(x => 2 * lnAbs(3 * x + 1), 0.4), 6 / 2.2, 1e-6) && near(d(x => 6 * lnAbs(3 * x + 1), 0.4), 18 / 2.2, 1e-5)],
		['A2', near(d(x => lnAbs(x ** 3 - 8) / 3, 1), 1 / -7, 1e-6) && near(d(x => lnAbs(x ** 3 - 8) / 3, 3), 9 / 19, 1e-6)],
	];
	const bad = checks.filter(k => !k[1]).map(k => k[0]);
	if (bad.length) throw new Error('math-a12-i04 numbers: ' + bad.join(', '));
}
export const money = (v: number) => fmtMoney(Math.round(v));

// ---------- the fundraiser board ----------
export const BOARD: PlateSpec = {src: 'assets/maths/ma12-fundraiser-board-v1.png', nat: [900, 2400], box: [271, 193, 621, 2207]};
const TUBE = {x0: 390, x1: 510, top: 260, bottom: 1900};
const BULB = {cx: 450, cy: 2040, r: 120};
const MAX = 7000;
export const boardW = (h: number) => (h * (BOARD.box[2] - BOARD.box[0])) / (BOARD.box[3] - BOARD.box[1]);
/** The board at (x, y) with height h: red fill to `value` dollars behind the plate, $ scale on the right. */
export const FundRig: React.FC<{x: number; y: number; h: number; value: number; at?: number; out?: number; scaleSize?: number; ghost?: {value: number; o: number}}> = ({x, y, h, value, at = -30, out, scaleSize = 30, ghost}) => {
	usePlatePreload([BOARD.src]);
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const w = boardW(h);
	const m = plateMap(BOARD, x, y, w);
	const vy = (v: number) => m.at(0, TUBE.bottom - ((TUBE.bottom - TUBE.top) * Math.max(0, Math.min(MAX, v))) / MAX)[1];
	const [tx0] = m.at(TUBE.x0, 0), [tx1] = m.at(TUBE.x1, 0);
	const [bx, by] = m.at(BULB.cx, BULB.cy);
	const [, ttop] = m.at(0, TUBE.top);
	const rx = m.at(BOARD.box[2], 0)[0] + 10;
	const ly = vy(value);
	return (
		<FrameSvg style={{opacity: o}}>
			<rect x={tx0 - 2} y={ttop - 4} width={tx1 - tx0 + 4} height={by - ttop + 4} fill="#f3efe6" />
			<circle cx={bx} cy={by} r={BULB.r * m.s + 2} fill="#f3efe6" />
			<circle cx={bx} cy={by} r={BULB.r * m.s + 2} fill="#d2453a" />
			<rect x={tx0 - 2} y={ly} width={tx1 - tx0 + 4} height={by - ly} fill="#d2453a" />
			<rect x={tx0 - 2} y={ly} width={tx1 - tx0 + 4} height={5} fill="#a8322a" />
			<SvgPlate plate={BOARD} x={x} y={y} w={w} />
			{ghost && ghost.o > 0.001 ? <line x1={tx0 - 16} x2={rx + 30} y1={vy(ghost.value)} y2={vy(ghost.value)} stroke="#8a8378" strokeWidth={4} strokeDasharray="12 8" opacity={ghost.o} /> : null}
			<line x1={rx} x2={rx} y1={vy(0)} y2={vy(MAX)} stroke={INK} strokeWidth={3} />
			{Array.from({length: 8}, (_, i) => i * 1000).map(v => <g key={v}>
				<line x1={rx} x2={rx + 18} y1={vy(v)} y2={vy(v)} stroke={INK} strokeWidth={3} />
				<text x={rx + 24} y={vy(v) + 10} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: scaleSize, fill: INK}} stroke={CARD} strokeWidth={5} paintOrder="stroke">${v}</text>
			</g>)}
			<path d={`M${rx - 4},${ly} l-22,-13 v26 Z`} fill="#a8322a" />
		</FrameSvg>
	);
};

/** The rate (violet) or total (ink) graph on days 1 to 32, drawn to the clock t, with a riding dot. */
export const FundGraph: React.FC<{x: number; y: number; w: number; h: number; t: number; kind: 'rate' | 'total'; C?: number; at?: number; out?: number; full?: boolean; xTicks?: number[]; children?: (m: PlotMap) => React.ReactNode}> = ({x, y, w, h, t, kind, C = 2000, at = -30, out, full = false, xTicks = [8, 16, 24, 32], children}) => {
	const isRate = kind === 'rate';
	const fn = isRate ? rate : (u: number) => total(u, C);
	const win = {x: [-0.6, 33.5] as [number, number], y: (isRate ? [-60, 1120] : [-300, 6600]) as [number, number]};
	const tt = Math.max(1, Math.min(32, t));
	const col = isRate ? MATH_GRADIENT : INK;
	return (
		<StudioPlot x={x} y={y} width={w} height={h} window={win} xTicks={xTicks} yTicks={isRate ? [{value: 500, label: '$500'}, {value: 1000, label: '$1000'}] : [{value: 2000, label: '$2000'}, {value: 4000, label: '$4000'}, {value: 6000, label: '$6000'}]}
			xLabel="day t" yLabel={isRate ? 'donations ($ per day)' : 'total raised ($)'} at={at} out={out}>
			{m => <>
				<g clipPath={m.clip}>
					{full ? <path d={fnPath(m, fn, 1, 32)} stroke={col} strokeWidth={6} fill="none" strokeLinecap="round" /> : tt > 1.01 ? <path d={fnPath(m, fn, 1, tt)} stroke={col} strokeWidth={6} fill="none" strokeLinecap="round" /> : null}
				</g>
				{(() => {const p = m.p(tt, fn(tt)); return <circle cx={p[0]} cy={p[1]} r={12} fill={col} stroke={CARD} strokeWidth={4} />;})()}
				{children ? children(m) : null}
			</>}
		</StudioPlot>
	);
};

/** day, donations today (violet), total raised (ink): one board from the same t. */
export const FundBoard: React.FC<{x: number; y: number; width: number; t: number; at?: number; out?: number; size?: number; C?: number; glow?: {rate?: [number, number]; total?: [number, number]}}> = ({x, y, width, t, at = -30, out, size = 52, C = 2000, glow = {}}) => {
	const tt = Math.max(1, Math.min(32, t));
	return <LiveReadoutBoard x={x} y={y} width={width} at={at} out={out} inline size={size} labelSize={30} rows={[
		{label: 'day', value: tt, format: v => String(Math.floor(v + 1e-9))},
		{label: 'donations today', value: rate(tt), role: 'gradient', format: v => money(v) + '/day', glow: glow.rate},
		{label: 'total raised', value: total(tt, C), format: money, glow: glow.total},
	]} />;
};

// ---------- the paired ln / 1/x panels ----------
export const PAIR = {x: 40, y: 150, w: 1000, hTop: 440, hBottom: 360, gap: 10};
export const WX: [number, number] = [-4.5, 4.5];
export const YTOP: [number, number] = [-2.5, 2];
export const YBOT: [number, number] = [-3, 3];
export const topMap = () => makePlot(PAIR.x, PAIR.y, PAIR.w, PAIR.hTop, {x: WX, y: YTOP});
export const botMap = () => makePlot(PAIR.x, PAIR.y + PAIR.hTop + PAIR.gap, PAIR.w, PAIR.hBottom, {x: WX, y: YBOT});
export const PX_TICKS = [-4, -2, 2, 4];
const ln = Math.log;
/** A tangent segment of slope s through (X, Y) on a plot, in plot-local pixels. */
export const tangentSeg = (m: PlotMap, X: number, Y: number, s: number, hl = 130) => {
	const [px, py] = m.p(X, Y), vx = m.sx, vy = -s * m.sy, l = Math.hypot(vx, vy);
	return {x1: px - (vx / l) * hl, y1: py - (vy / l) * hl, x2: px + (vx / l) * hl, y2: py + (vy / l) * hl};
};
/** Upper (candidate primitive) and lower (y = 1/x, the gradient we need) panels for scenes 2 and 3. */
export const PairPlots: React.FC<{top: (m: PlotMap) => React.ReactNode; bottom: (m: PlotMap) => React.ReactNode; topLabel?: string}> = ({top, bottom, topLabel = 'y'}) => (
	<>
		<StudioPlot x={PAIR.x} y={PAIR.y} width={PAIR.w} height={PAIR.hTop} window={{x: WX, y: YTOP}} xTicks={PX_TICKS} yTicks={[-2, -1, 1]} yLabel={topLabel} at={-30}>
			{m => <>
				{(() => {const [px] = m.p(0, 0); return <line x1={px} x2={px} y1={m.box.top} y2={m.box.top + m.box.height} stroke={MATH_EXCLUDED} strokeWidth={3} strokeDasharray="10 9" />;})()}
				{top(m)}
			</>}
		</StudioPlot>
		<StudioPlot x={PAIR.x} y={PAIR.y + PAIR.hTop + PAIR.gap} width={PAIR.w} height={PAIR.hBottom} window={{x: WX, y: YBOT}} xTicks={PX_TICKS} yTicks={[-2, 2]} yLabel="f(x) = 1/x" at={-30}>
			{m => <>
				{(() => {const [px] = m.p(0, 0); return <line x1={px} x2={px} y1={m.box.top} y2={m.box.top + m.box.height} stroke={MATH_EXCLUDED} strokeWidth={3} strokeDasharray="10 9" />;})()}
				{bottom(m)}
			</>}
		</StudioPlot>
	</>
);
/** ln x on (a, b) with 0 < a (or its mirror ln(−x) on negative x), in a plot. */
export const lnPath = (m: PlotMap, a: number, b: number, C = 0) => fnPath(m, X => ln(Math.abs(X)) + C, a, b);
export const recipPath = (m: PlotMap, a: number, b: number) => fnPath(m, X => 1 / X, a, b);

// ---------- number line with excluded values ----------
/** A number line from range[0] to range[1], solid either side of each excluded value (grey rings), with ticks. */
export const GapLine: React.FC<{x: number; y: number; w?: number; range: [number, number]; excluded: number[]; ticks: {value: number; label: string}[]; label?: string; at?: number; out?: number; color?: string}> = ({x, y, w = 760, range, excluded, ticks, label, at = -30, out, color = INK}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.001) return null;
	const h = label ? 150 : 120;
	const L = 36, R = w - 36, Y = label ? 80 : 50;
	const X = (v: number) => L + ((v - range[0]) / (range[1] - range[0])) * (R - L);
	const cuts = [range[0], ...excluded, range[1]];
	return (
		<div style={{position: 'absolute', left: x, top: y, width: w, height: h, opacity: o, background: '#fbf8f1', borderRadius: 14, border: '2px solid rgba(60,45,20,0.12)', boxSizing: 'border-box'}}>
			<svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{position: 'absolute', left: -2, top: -2, overflow: 'visible'}}>
				{label ? <text x={L} y={44} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, fill: color}}>{label}</text> : null}
				{cuts.slice(1).map((b, i) => <line key={i} x1={X(cuts[i]) + (i ? 16 : 0)} x2={X(b) - (i < cuts.length - 2 ? 16 : 0)} y1={Y} y2={Y} stroke={color} strokeWidth={9} strokeLinecap="round" />)}
				<path d={`M${X(range[0]) - 6},${Y} l18,-12 M${X(range[0]) - 6},${Y} l18,12 M${X(range[1]) + 6},${Y} l-18,-12 M${X(range[1]) + 6},${Y} l-18,12`} stroke={color} strokeWidth={5} strokeLinecap="round" />
				{ticks.map(t => <g key={t.label}><line x1={X(t.value)} x2={X(t.value)} y1={Y + 8} y2={Y + 20} stroke={INK} strokeWidth={3} /><text x={X(t.value)} y={Y + 54} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, fill: INK}}>{t.label}</text></g>)}
				{excluded.map(e => <circle key={e} cx={X(e)} cy={Y} r={14} fill={CARD} stroke={MATH_EXCLUDED} strokeWidth={5} />)}
			</svg>
		</div>
	);
};

/** A small ln|x| picture (two pieces, gap at 0) for cards and the handoff. */
export const LnAbsPic: React.FC<{x: number; y: number; w: number; h: number; at?: number; out?: number; children?: (m: PlotMap) => React.ReactNode}> = ({x, y, w, h, at = -30, out, children}) => (
	<StudioPlot x={x} y={y} width={w} height={h} window={{x: [-4.5, 4.5], y: [-2.5, 2]}} xTicks={[-4, -2, 2, 4]} yTicks={[-2, -1, 1]} at={at} out={out}>
		{m => <>
			<g clipPath={m.clip}>
				<path d={lnPath(m, -4.5, -0.02)} stroke={INK} strokeWidth={6} fill="none" strokeLinecap="round" />
				<path d={lnPath(m, 0.02, 4.5)} stroke={INK} strokeWidth={6} fill="none" strokeLinecap="round" />
			</g>
			{children ? children(m) : null}
		</>}
	</StudioPlot>
);
export {INK_SOFT};
