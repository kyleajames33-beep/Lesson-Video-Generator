// Lesson parts for math-a12-i03 (Revision 3: exponential primitives; a phone on charge), built on the maths
// studio kit and i02's lesson parts (imported read-only). Lesson-local rigs:
// - PhoneRig: the painted phone in its dock (brief 238 plate, screen [330, 330, 870, 1390] in file pixels) with a
//   coded display ("battery", a battery bar and "charging at") drawn inside the measured screen;
// - ChargeGraph and ChargeBoard: the rate (violet) and battery (ink) graphs on t 0 to 8 h, and the readouts
//   (time, charging at, battery, left to fill, rate ÷ left to fill = 0.5), all from one t;
// - CurvePic: a small inline graph for the attempt cards.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT} from '../../kit';
import {CARD, FrameSvg, LiveReadoutBoard, MATH_GRADIENT, StudioPlot, SvgPlate, fnPath, plateMap, usePlatePreload, vis} from '../../math/studio';
import type {PlateSpec, PlotMap} from '../../math/studio';

export {AMB, AnswerBox, Attempt, BLUE, Bl, BoxCard, Cc, Chip, FramedCard, Frac, GREEN, GREY, Line, MiniPlot, PLabel, RED, Rt, Tick, V, VIOLET} from '../math-a12-i02/parts';

/** The exponent of e (or a), in a superscript. */
export const Ex: React.FC<{children: React.ReactNode; base?: React.ReactNode}> = ({children, base = 'e'}) => <>{base}<span style={{fontSize: '0.64em', position: 'relative', top: '-0.8em', marginLeft: '0.03em', whiteSpace: 'pre'}}>{children}</span></>;

// ---------- the models (design author notes a to e, Revision 3 anchor) ----------
export const rate = (t: number) => 30 * Math.exp(-0.5 * t);
export const batt = (t: number) => 100 - 60 * Math.exp(-0.5 * t);
export const left = (t: number) => 100 - batt(t);
export const drug = (t: number) => Math.exp(-0.5 * t) + 1;
{
	const near = (a: number, b: number, tol = 1e-4) => Math.abs(a - b) < tol;
	const d = (F: (x: number) => number, x: number) => (F(x + 1e-6) - F(x - 1e-6)) / 2e-6;
	const checks: [string, boolean][] = [
		['phone', near(rate(0), 30) && near(batt(0), 40) && near(d(batt, 3), rate(3)) && near(rate(4) / left(4), 0.5) && near(batt(8), 98.90106) && near(rate(8), 0.549469) && near(2 * Math.log(6), 3.583519)],
		['drug', near(drug(0), 2) && near(d(drug, 1), -0.5 * Math.exp(-0.5)) && near(drug(6), 1.049787)],
		['e3x', near(d(x => Math.exp(3 * x) / 3, 0.4), Math.exp(1.2))],
		['2x', near(d(x => 2 ** x / Math.LN2, 1.3), 2 ** 1.3)],
		['A1', near(d(x => 2 * Math.exp(2 * x - 1), 0.3), 4 * Math.exp(-0.4)) && near(d(x => 4 * Math.exp(2 * x - 1), 0.3), 8 * Math.exp(-0.4))],
		['A2', near(d(x => 3 ** x / Math.log(3) - 0.5 * Math.exp(-2 * x), 0.7), 3 ** 0.7 + Math.exp(-1.4))],
		['algebra', near(d(x => 0.5 * Math.exp(2 * x) + 2 * Math.exp(x) + x, 0.5), (Math.exp(0.5) + 1) ** 2)],
	];
	const bad = checks.filter(k => !k[1]).map(k => k[0]);
	if (bad.length) throw new Error('math-a12-i03 numbers: ' + bad.join(', '));
}

// ---------- the phone ----------
export const PHONE: PlateSpec = {src: 'assets/maths/ma12-phone-dock-v1.png', nat: [1200, 2000], box: [272, 302, 1021, 1543]};
const SCREEN: [number, number, number, number] = [330, 330, 870, 1390];
export const phoneH = (w: number) => (w * (PHONE.box[3] - PHONE.box[1])) / (PHONE.box[2] - PHONE.box[0]);
/** The phone in its dock with a coded display: battery %, a battery bar and the charging rate, from one t. */
export const PhoneRig: React.FC<{x: number; y: number; w: number; t: number; at?: number; out?: number}> = ({x, y, w, t, at = -30, out}) => {
	usePlatePreload([PHONE.src]);
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const m = plateMap(PHONE, x, y, w);
	const [sx0, sy0] = m.at(SCREEN[0], SCREEN[1]);
	const [sx1, sy1] = m.at(SCREEN[2], SCREEN[3]);
	const sw = sx1 - sx0, sh = sy1 - sy0;
	const b = batt(Math.max(0, t));
	const big = Math.max(40, sw * 0.24);
	const bx = sx0 + sw * 0.2, bw = sw * 0.6, by = sy0 + sh * 0.36, bh = sh * 0.3;
	return (
		<FrameSvg style={{opacity: o}}>
			<SvgPlate plate={PHONE} x={x} y={y} w={w} />
			<text x={sx0 + sw / 2} y={sy0 + sh * 0.12} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: '#d9d4cb'}}>battery</text>
			<text x={sx0 + sw / 2} y={sy0 + sh * 0.12 + big + 6} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: big, fill: '#ffffff', fontVariantNumeric: 'tabular-nums'}}>{b.toFixed(1)}%</text>
			<rect x={bx} y={by} width={bw} height={bh} rx={14} fill="none" stroke="#d9d4cb" strokeWidth={5} />
			<rect x={bx + bw * 0.3} y={by - 16} width={bw * 0.4} height={14} rx={5} fill="#d9d4cb" />
			<rect x={bx + 8} y={by + 8 + (bh - 16) * (1 - b / 100)} width={bw - 16} height={(bh - 16) * (b / 100)} rx={8} fill="#6fcf8e" />
			<text x={sx0 + sw / 2} y={sy0 + sh * 0.8} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28, fill: '#d9d4cb'}}>charging at</text>
			<text x={sx0 + sw / 2} y={sy0 + sh * 0.8 + 44} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, fill: '#c9b6f2', fontVariantNumeric: 'tabular-nums'}}>{rate(Math.max(0, t)).toFixed(1)}%/h</text>
		</FrameSvg>
	);
};

/** Rate (violet) or battery (ink, with the dashed 100% level) against t, 0 to 8 h, drawn to the clock. */
export const ChargeGraph: React.FC<{x: number; y: number; w: number; h: number; t: number; kind: 'rate' | 'batt'; at?: number; out?: number; C?: number; children?: (m: PlotMap) => React.ReactNode}> = ({x, y, w, h, t, kind, at = -30, out, C, children}) => {
	const isRate = kind === 'rate';
	const fn = isRate ? rate : C === undefined ? batt : (u: number) => C - 60 * Math.exp(-0.5 * u);
	const win = {x: [-0.5, 8.6] as [number, number], y: (isRate ? [-2, 33] : [-8, 112]) as [number, number]};
	const tt = Math.max(0, Math.min(8, t));
	const col = isRate ? MATH_GRADIENT : INK;
	return (
		<StudioPlot x={x} y={y} width={w} height={h} window={win} xTicks={[2, 4, 6, 8]} yTicks={isRate ? [10, 20, 30] : [20, 40, 60, 80, 100]} xLabel="t (h)" yLabel={isRate ? 'charging at (% per hour)' : 'battery (%)'} at={at} out={out}>
			{m => <>
				{!isRate ? (() => {const a = m.p(-0.5, 100), b = m.p(8.6, 100); return <line x1={a[0]} x2={b[0]} y1={a[1]} y2={a[1]} stroke="#8a8378" strokeWidth={4} strokeDasharray="14 10" />;})() : null}
				<g clipPath={m.clip}>{tt > 0.01 ? <path d={fnPath(m, fn, 0, tt)} stroke={col} strokeWidth={6} fill="none" strokeLinecap="round" /> : null}</g>
				{(() => {const p = m.p(tt, fn(tt)); return <circle cx={p[0]} cy={p[1]} r={11} fill={col} stroke={CARD} strokeWidth={4} />;})()}
				{children ? children(m) : null}
			</>}
		</StudioPlot>
	);
};

/** time, charging at, battery, left to fill, and the fixed ratio, from one t. */
export const ChargeBoard: React.FC<{x: number; y: number; width: number; t: number; at?: number; out?: number; rows?: ('time' | 'rate' | 'batt' | 'left' | 'ratio')[]; size?: number; ratioGlow?: [number, number]}> = ({x, y, width, t, at = -30, out, rows = ['time', 'rate', 'batt', 'left', 'ratio'], size = 48, ratioGlow}) => {
	const tt = Math.max(0, Math.min(8, t));
	const all = {
		time: {label: 'time', value: tt, digits: 1, unit: 'h'},
		rate: {label: 'charging at', value: rate(tt), digits: 1, role: 'gradient' as const, unit: '%/h'},
		batt: {label: 'battery', value: batt(tt), digits: 1, unit: '%'},
		left: {label: 'left to fill', value: left(tt), digits: 1, unit: '%'},
		ratio: {label: 'rate ÷ left to fill', value: 0.5, digits: 1, role: 'a' as const, glow: ratioGlow},
	};
	return <LiveReadoutBoard x={x} y={y} width={width} at={at} out={out} inline size={size} labelSize={30} rows={rows.map(r => all[r])} />;
};

/** A small inline graph for question cards (integrand in violet, nothing answer-bearing). */
export const CurvePic: React.FC<{fn: (x: number) => number; xs: [number, number]; ys: [number, number]; xTicks: number[]; yTicks: number[]; label: string; w?: number; h?: number}> = ({fn, xs, ys, xTicks, yTicks, label, w = 900, h = 420}) => {
	const L = 90, R = w - 40, T = 30, B = h - 60;
	const X = (v: number) => L + ((v - xs[0]) / (xs[1] - xs[0])) * (R - L), Y = (v: number) => B - ((v - ys[0]) / (ys[1] - ys[0])) * (B - T);
	const d = Array.from({length: 201}, (_, i) => {const v = xs[0] + ((xs[1] - xs[0]) * i) / 200; return `${i ? 'L' : 'M'}${X(v).toFixed(1)},${Y(Math.min(ys[1], fn(v))).toFixed(1)}`;}).join(' ');
	const lab = (v: number) => (v < 0 ? `−${-v}` : String(v));
	return (
		<div style={{width: w, height: h, position: 'relative', background: '#fbf8f1', borderRadius: 14, border: '2px solid rgba(60,45,20,0.12)', boxSizing: 'border-box'}}>
			<svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{position: 'absolute', inset: 0}}>
				<path d={`M${L},${Y(0)} H${R + 10} M${X(0)},${B + 10} V${T - 6}`} stroke={INK} strokeWidth={4.5} fill="none" strokeLinecap="round" />
				{xTicks.map(v => <g key={'x' + v}><line x1={X(v)} x2={X(v)} y1={Y(0) - 10} y2={Y(0) + 10} stroke={INK} strokeWidth={4} /><text x={X(v)} y={Y(0) + 44} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, fill: INK}}>{lab(v)}</text></g>)}
				{yTicks.map(v => <g key={'y' + v}><line x1={X(0) - 10} x2={X(0) + 10} y1={Y(v)} y2={Y(v)} stroke={INK} strokeWidth={4} /><text x={X(0) - 18} y={Y(v) + 11} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, fill: INK}}>{v}</text></g>)}
				<text x={R + 6} y={Y(0) - 14} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: INK_SOFT}}>x</text>
				<path d={d} stroke={MATH_GRADIENT} strokeWidth={6} fill="none" strokeLinecap="round" />
				<text x={L + 30} y={T + 40} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, fill: MATH_GRADIENT}}>{label}</text>
			</svg>
		</div>
	);
};
