// Plot core for the second studio pass (d15 to d19, i01 to i14, f01 to f08): one studio-sized axes frame with
// a render prop, path sampling, numeric integration and number formats. Every part in calc-parts,
// integration-parts and series-parts that draws a graph uses StudioPlot, so the axes look the same everywhere
// (30 px tick labels, 3.5 px ink axes, #e4dccd grid, as FunctionSimulator).
import React, {useId} from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, INK, INK_SOFT} from '../../kit';
import {graphTransform} from '../graphs';
import type {Range} from '../graphs';
import {niceNum, vis} from './primitives';

/** A tick with an optional second line (years under t values, clock times under hours). */
export type PlotTick = {value: number; label: string; sub?: string};
export type PlotWindow = {x: Range; y: Range};
export type PlotMap = {
	/** Frame position and size of the plot's SVG. */
	x: number; y: number; width: number; height: number;
	win: PlotWindow;
	box: {left: number; top: number; width: number; height: number};
	sx: number; sy: number;
	/** Maths coordinates to the plot SVG's local pixels. */
	p: (X: number, Y: number) => [number, number];
	/** Maths coordinates to frame pixels. */
	pf: (X: number, Y: number) => [number, number];
	/** url(#...) of the clip to the plot box. */
	clip: string;
};

export const makePlot = (x: number, y: number, width: number, height: number, win: PlotWindow, clipId = ''): PlotMap => {
	const t = graphTransform({x: win.x, y: win.y, width, height});
	const p = (X: number, Y: number): [number, number] => {const q = t.point(X, Y); return [q.x, q.y];};
	return {x, y, width, height, win, box: t.box, sx: t.sx, sy: t.sy, p, pf: (X, Y) => {const q = p(X, Y); return [x + q[0], y + q[1]];}, clip: `url(#${clipId})`};
};

const toPlotTicks = (t: readonly (number | PlotTick)[]): PlotTick[] => t.map(v => (typeof v === 'number' ? {value: v, label: niceNum(v)} : v));
const rangeInt = (a: number, b: number) => Array.from({length: Math.max(0, b - a + 1)}, (_, i) => a + i);
export const TXT = (size: number, color = INK_SOFT, weight = 700): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontSize: size, fontWeight: weight, fill: color} as React.CSSProperties);

/**
 * Studio-sized axes with a render prop. Children draw in the plot's local SVG coordinates (use m.p); wrap
 * anything that must stay inside the box in <g clipPath={m.clip}>. Tick labels are 30 px; a tick's `sub` adds
 * a second 28 px line (two-line tick labels such as years).
 */
export const StudioPlot: React.FC<{
	x: number; y: number; width?: number; height?: number; window: PlotWindow;
	xTicks?: readonly (number | PlotTick)[]; yTicks?: readonly (number | PlotTick)[];
	xLabel?: string; yLabel?: string; grid?: boolean; bare?: boolean; at?: number; out?: number; opacity?: number;
	children?: (m: PlotMap) => React.ReactNode;
	/** Frame-space layer drawn after the SVG (HTML labels, readouts). */
	html?: (m: PlotMap) => React.ReactNode;
}> = ({x, y, width = 1100, height = 760, window: win, xTicks, yTicks, xLabel = 'x', yLabel = 'y', grid = true, bare = false, at = 0, out, opacity = 1, children, html}) => {
	const f = useCurrentFrame();
	const id = `sp-${useId().replace(/:/g, '')}`;
	const o = vis(f, at, out, 14) * opacity;
	if (o <= 0.001) return null;
	const m = makePlot(x, y, width, height, win, id);
	const b = m.box;
	const xt = toPlotTicks(xTicks ?? rangeInt(Math.ceil(win.x[0]), Math.floor(win.x[1])).filter(v => v !== 0));
	const yt = toPlotTicks(yTicks ?? rangeInt(Math.ceil(win.y[0]), Math.floor(win.y[1])).filter(v => v !== 0 && (win.y[1] - win.y[0] <= 8 || v % 2 === 0)));
	const O = m.p(Math.max(win.x[0], Math.min(win.x[1], 0)), Math.max(win.y[0], Math.min(win.y[1], 0)));
	const hasSub = xt.some(t => t.sub);
	return (
		<>
			<div style={{position: 'absolute', left: x, top: y, width, height, opacity: o}}>
				<svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} style={{overflow: 'visible'}}>
					<defs><clipPath id={id}><rect x={b.left} y={b.top} width={b.width} height={b.height} /></clipPath></defs>
					{!bare && grid ? <>
						{xt.map(v => {const [px] = m.p(v.value, 0); return <line key={'gx' + v.value} x1={px} x2={px} y1={b.top} y2={b.top + b.height} stroke="#e4dccd" strokeWidth={2} />;})}
						{yt.map(v => {const [, py] = m.p(0, v.value); return <line key={'gy' + v.value} x1={b.left} x2={b.left + b.width} y1={py} y2={py} stroke="#e4dccd" strokeWidth={2} />;})}
					</> : null}
					{!bare ? <>
						{xt.map(v => {const [px] = m.p(v.value, 0); return <g key={'tx' + v.value}>
							<text x={px} y={b.top + b.height + 40} textAnchor="middle" style={TXT(30)}>{v.label}</text>
							{v.sub ? <text x={px} y={b.top + b.height + 74} textAnchor="middle" style={TXT(28, INK, 700)}>{v.sub}</text> : null}
						</g>;})}
						{yt.map(v => {const [, py] = m.p(0, v.value); return <text key={'ty' + v.value} x={b.left - 16} y={py + 10} textAnchor="end" style={TXT(30)}>{v.label}</text>;})}
						<text x={b.left + b.width} y={b.top + b.height + (hasSub ? 112 : 82)} textAnchor="end" style={TXT(30, INK, 700)}>{xLabel}</text>
						<text x={b.left} y={b.top - 16} textAnchor="start" style={TXT(30, INK, 700)}>{yLabel}</text>
					</> : null}
					<path d={`M${b.left},${O[1]} H${b.left + b.width} M${O[0]},${b.top} V${b.top + b.height}`} stroke={INK} strokeWidth={3.5} fill="none" strokeLinecap="round" />
					{children ? children(m) : null}
				</svg>
			</div>
			{html ? <div style={{position: 'absolute', inset: 0, pointerEvents: 'none', opacity: o}}>{html(m)}</div> : null}
		</>
	);
};

/**
 * Path of y = fn(X) for X from a to b in a plot's local coordinates. The pen lifts at non-finite values and at
 * listed breaks; values are clamped a little outside the window so steep ends leave the box cleanly.
 */
export const fnPath = (m: PlotMap, fn: (X: number) => number, a: number, b: number, n = 260, breaks: readonly number[] = []): string => {
	const ext = (m.win.y[1] - m.win.y[0]) * 2;
	let d = '', pen = false;
	for (let i = 0; i <= n; i++) {
		const X = a + ((b - a) * i) / n;
		if (breaks.some(c => Math.abs(X - c) < Math.abs(b - a) / n / 2)) {pen = false; continue;}
		const Y = fn(X);
		if (!Number.isFinite(Y)) {pen = false; continue;}
		const [px, py] = m.p(X, Math.max(m.win.y[0] - ext, Math.min(m.win.y[1] + ext, Y)));
		d += `${pen ? 'L' : 'M'}${px.toFixed(2)},${py.toFixed(2)} `;
		pen = true;
	}
	return d;
};
/** Closed region between y = fn(X) and the x-axis (or y = base(X)) for X from a to b, local coordinates. */
export const regionPath = (m: PlotMap, fn: (X: number) => number, a: number, b: number, base: (X: number) => number = () => 0, n = 160): string => {
	if (!(b > a)) return '';
	let d = '';
	for (let i = 0; i <= n; i++) {const X = a + ((b - a) * i) / n; const [px, py] = m.p(X, fn(X)); d += `${i ? 'L' : 'M'}${px.toFixed(2)},${py.toFixed(2)} `;}
	for (let i = n; i >= 0; i--) {const X = a + ((b - a) * i) / n; const [px, py] = m.p(X, base(X)); d += `L${px.toFixed(2)},${py.toFixed(2)} `;}
	return d + 'Z';
};

/** Composite Simpson integral of fn from a to b (n even). Exact for cubics; use for readouts that must match fills. */
export const integrate = (fn: (x: number) => number, a: number, b: number, n = 400): number => {
	if (a === b) return 0;
	const N = n % 2 ? n + 1 : n, h = (b - a) / N;
	let s = fn(a) + fn(b);
	for (let i = 1; i < N; i++) s += fn(a + i * h) * (i % 2 ? 4 : 2);
	return (s * h) / 3;
};
/** Central-difference derivative check: throws when df differs from F′ at any of `samples` points in [a, b]. */
export const assertDerivative = (F: (x: number) => number, df: (x: number) => number, a: number, b: number, samples = 21, tol = 1e-5, name = 'derivative') => {
	for (let i = 0; i < samples; i++) {
		const x = a + ((b - a) * i) / (samples - 1), h = 1e-5 * Math.max(1, Math.abs(x));
		const num = (F(x + h) - F(x - h)) / (2 * h), exp = df(x);
		if (!Number.isFinite(num) || !Number.isFinite(exp)) continue;
		if (Math.abs(num - exp) / Math.max(1, Math.abs(exp)) > tol) throw new RangeError(`${name} check failed at x = ${x}: ${num} against ${exp}`);
	}
};

const MINUS = '−';
/** Thousands-grouped number with a true minus sign: 94671 → "94,671". */
export const fmtGrouped = (v: number, digits = 0) => {
	const r = Math.abs(v) < 0.5 * 10 ** -digits ? 0 : v;
	const s = Math.abs(r).toLocaleString('en-AU', {minimumFractionDigits: digits, maximumFractionDigits: digits});
	return (r < 0 ? MINUS : '') + s;
};
/** Money string: 30000 → "$30,000", −4500 → "−$4,500"; `suffix` appends a unit such as " per year". */
export const fmtMoney = (v: number, digits = 0, suffix = '') => {
	const r = Math.abs(v) < 0.5 * 10 ** -digits ? 0 : v;
	return (r < 0 ? MINUS : '') + '$' + Math.abs(r).toLocaleString('en-AU', {minimumFractionDigits: digits, maximumFractionDigits: digits}) + suffix;
};
const SUP: Record<string, string> = {'0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹', '-': '⁻'};
/** Scientific form with superscript powers: 1.845e19 → "1.84 × 10¹⁹". */
export const fmtSci = (v: number, sig = 3) => {
	if (v === 0) return '0';
	const e = Math.floor(Math.log10(Math.abs(v)));
	const mant = v / 10 ** e;
	return `${v < 0 ? MINUS : ''}${Math.abs(mant).toFixed(Math.max(0, sig - 1))} × 10${String(e).split('').map(c => SUP[c] ?? c).join('')}`;
};
/** Grouped below `limit` (default 10⁶), scientific above: the big-number readout format. */
export const fmtBig = (v: number, limit = 1e6, sig = 3) => (Math.abs(v) >= limit ? fmtSci(v, sig) : fmtGrouped(v, 0));
/** An exact integer of any size (from a BigInt), grouped in threes: 2⁶⁴ − 1 → "18,446,744,073,709,551,615". */
export const fmtBigInt = (v: bigint) => {
	const neg = v < BigInt(0), s = (neg ? -v : v).toString();
	return (neg ? MINUS : '') + s.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
/** A frame-keyed step value: the last key at or before the frame (n stepping 1, 2, 4, 8). */
export const stepAt = (keys: readonly {frame: number; value: number}[], frame: number) => {
	let v = keys.length ? keys[0].value : 0;
	for (const k of keys) if (frame >= k.frame) v = k.value;
	return v;
};
