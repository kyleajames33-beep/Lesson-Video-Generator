// Lesson parts for math-a12-i02 (Revision 3: power primitives and the reverse chain rule; a sourdough starter
// rising in a jar), built on the maths studio kit. Lesson-local rigs:
// - StarterRise: the painted jar with its painted starter revealed (kit ContainerFill reveal mode) to the level
//   5 cm + H(t), a coded centimetre rule (90 file px per cm, brief 238 measurements: inner floor y 1560, rim
//   y 300, walls x 260 and 940), the feeding mark at 5 cm, and an optional dashed red ghost level for the slip;
// - StarterGraphs and StarterBoard: the rate (violet) and rise (ink) graphs and the readouts, from the same t;
// - Rt (a root with its vinculum), Frac, role spans, small plots for the attempts and checks.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {CARD, CARD_SHADOW, ContainerFill, FrameSvg, LiveReadoutBoard, MATH_AMBER, MATH_BLUE, MATH_GRADIENT, MATH_MISTAKE, StudioPlot, fnPath, plateMap, vis} from '../../math/studio';
import type {PlateSpec, PlotMap} from '../../math/studio';

export {AnswerBox, Attempt, BoxCard, Chip, GREEN, GREY, GREY_INK, Line, RED, Ring, Tick, V, VIOLET, Frac, Approx} from '../math-a12-d19/parts';
export const BLUE = MATH_BLUE;
export const AMB = MATH_AMBER;

const glowBg = (rgb: string, g: number) => (g > 0.001 ? `rgba(${rgb},${0.9 * g})` : undefined);
/** The inner rate (a, the inside's derivative): blue. */
export const Bl: React.FC<{children: React.ReactNode; g?: number}> = ({children, g = 0}) => <span style={{color: MATH_BLUE, background: glowBg('220,234,247', g), borderRadius: 8}}>{children}</span>;
/** C: amber. */
export const Cc: React.FC<{children?: React.ReactNode}> = ({children = 'C'}) => <span style={{color: '#7a4600'}}>{children}</span>;
/** A square root with its bar over the radicand. */
export const Rt: React.FC<{children: React.ReactNode}> = ({children}) => (
	<span style={{whiteSpace: 'nowrap'}}>√<span style={{borderTop: '0.07em solid currentColor', padding: '0.04em 0.06em 0', marginLeft: '0.01em'}}>{children}</span></span>
);
/** A superscript (smaller than Pow for nested fractions). */
export const Sup: React.FC<{children: React.ReactNode}> = ({children}) => <span style={{fontSize: '0.62em', position: 'relative', top: '-0.82em', marginLeft: '0.03em', whiteSpace: 'pre'}}>{children}</span>;

// ---------- the models (design author notes c to f, Revision 3 anchor) ----------
/** The starter: rate r(t) = 3/√(4t + 1) cm per hour, rise H(t) = (3/2)√(4t + 1) − 3/2 cm. */
export const rate = (t: number) => 3 / Math.sqrt(4 * t + 1);
export const rise = (t: number) => 1.5 * Math.sqrt(4 * t + 1) - 1.5;
/** The slip (forgot ÷ 4): 6√(4t + 1) − 6. */
export const slipRise = (t: number) => 6 * Math.sqrt(4 * t + 1) - 6;
export const FED = 5;
export const P4 = (x: number) => (4 * x ** 3) / 3 + 2 * x * x + x;
export const Q4 = (x: number) => (2 * x + 1) ** 3 / 6;
/** Scene 7's failing guess W = (x² + 1)⁴/(8x) and its derivative. */
export const W7 = (x: number) => (x * x + 1) ** 4 / (8 * x);
export const dW7 = (x: number) => ((x * x + 1) ** 3 * (7 * x * x - 1)) / (8 * x * x);
/** Feedback 2's slip V = x³(x³ + 1)⁵/15 and its derivative. */
export const dV13 = (x: number) => (x * x * (x ** 3 + 1) ** 4 * (18 * x ** 3 + 3)) / 15;
{
	const near = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
	const d = (F: (x: number) => number, x: number) => (F(x + 1e-6) - F(x - 1e-6)) / 2e-6;
	const checks: [string, boolean][] = [
		['starter', near(rate(0), 3) && near(rate(2), 1) && near(rate(6), 0.6) && near(rise(0), 0) && near(rise(6), 6) && near(slipRise(6), 24) && near(d(rise, 2), rate(2), 1e-5)],
		['gap', near(Q4(-1) - P4(-1), 1 / 6) && near(Q4(0.5) - P4(0.5), 1 / 6) && near(P4(0.5), 7 / 6)],
		['tracer', near(2 * (2 * 0 + 1) ** 2, 2) && near(2 * (2 * 0.5 + 1) ** 2, 8)],
		['scene 7', near(dW7(1), 6) && near(d(W7, 1.3), dW7(1.3), 1e-4)],
		['scene 8', near(d(x => Math.sqrt(x * x + 4), 1.5), 1.5 / Math.sqrt(1.5 ** 2 + 4), 1e-6)],
		['A1', near(d(x => -1 / (2 * x + 1) ** 3, 0.7), 6 / (2 * 0.7 + 1) ** 4, 1e-5) && near(d(x => -2 / (2 * x + 1) ** 3, 0.7), 12 / (2 * 0.7 + 1) ** 4, 1e-5)],
		['A2', near(d(x => (x ** 3 + 1) ** 5 / 15, 0.8), 0.64 * (0.512 + 1) ** 4, 1e-5) && near(dV13(1), 22.4) && near(d(x => x ** 3 * (x ** 3 + 1) ** 5 / 15, 0.9), dV13(0.9), 1e-4)],
	];
	const bad = checks.filter(k => !k[1]).map(k => k[0]);
	if (bad.length) throw new Error('math-a12-i02 numbers: ' + bad.join(', '));
}
export const f1 = (v: number) => (Math.abs(v) < 0.05 ? '0.0' : v.toFixed(1));

// ---------- the jar ----------
/** Brief 238 plates: the empty jar and its starter, on the same 1200 × 1800 canvas. */
export const JAR: PlateSpec = {src: 'assets/maths/ma12-starter-jar-v1.png', nat: [1200, 1800], box: [186, 244, 1013, 1656]};
export const FILL: PlateSpec = {src: 'assets/maths/ma12-starter-fill-v1.png', nat: [1200, 1800], box: [260, 300, 940, 1560]};
const INNER: [number, number, number, number] = [260, 300, 940, 1560];
const PX_CM = 90;
export const jarH = (w: number) => (w * (JAR.box[3] - JAR.box[1])) / (JAR.box[2] - JAR.box[0]);

/**
 * StarterRise: the jar, its starter revealed to 5 + H(t) cm, the centimetre rule on the right, the feeding mark,
 * and an optional ghost level (cm above the floor) for the slip. Every height comes from the rule's scale.
 */
export const StarterRise: React.FC<{x: number; y: number; w: number; t: number; at?: number; out?: number; ghost?: {cm: number; o: number; label?: string}; ruleSize?: number; fedTag?: boolean}> = ({x, y, w, t, at = -30, out, ghost, ruleSize = 30, fedTag = true}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const m = plateMap(JAR, x, y, w);
	const [ix0, rimY] = m.at(INNER[0], INNER[1]);
	const [ix1, floorY] = m.at(INNER[2], INNER[3]);
	const cmY = (cm: number) => floorY - cm * PX_CM * m.s;
	const level = FED + rise(Math.max(0, t));
	const rx = m.at(1013, 0)[0] + 14;
	const lv = cmY(level);
	const g = ghost && ghost.o > 0.001 ? ghost : null;
	const gy = g ? Math.max(130, cmY(g.cm)) : 0;
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o}}>
			<ContainerFill x={x} y={y} w={w} container={JAR} interior={INNER} level={level / 14} reveal={{plate: FILL, dome: 10, surfaceLine: true}} />
			<FrameSvg>
				<line x1={ix0 - 6} x2={ix1 + 6} y1={cmY(FED)} y2={cmY(FED)} stroke="#4f4840" strokeWidth={3} strokeDasharray="10 8" />
				{fedTag ? <text x={ix0 + 12} y={cmY(FED) + 34} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34, fill: '#4f4840'}} stroke={CARD} strokeWidth={6} paintOrder="stroke">fed</text> : null}
				<line x1={rx} x2={rx} y1={floorY} y2={rimY} stroke={INK} strokeWidth={3.5} />
				{Array.from({length: 15}, (_, cm) => <g key={cm}>
					<line x1={rx} x2={rx + (cm % 2 === 0 ? 22 : 12)} y1={cmY(cm)} y2={cmY(cm)} stroke={INK} strokeWidth={3} />
					{cm % 2 === 0 ? <text x={rx + 30} y={cmY(cm) + 10} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: ruleSize, fill: INK}}>{cm}</text> : null}
				</g>)}
				<text x={rx - 4} y={rimY - 18} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28, fill: INK_SOFT}}>cm</text>
				<path d={`M${rx - 4},${lv} l-20,-12 v24 Z`} fill={INK} />
				{g ? <g opacity={g.o}>
					<line x1={ix0 - 10} x2={rx + 60} y1={gy} y2={gy} stroke={MATH_MISTAKE} strokeWidth={5} strokeDasharray="14 10" />
					{g.cm > 14.2 ? <path d={`M${rx + 90},${gy + 50} V${gy - 6} M${rx + 76},${gy + 12} L${rx + 90},${gy - 6} L${rx + 104},${gy + 12}`} stroke={MATH_MISTAKE} strokeWidth={5} fill="none" strokeLinecap="round" /> : null}
					{g.label ? <text x={rx + 116} y={gy + 14} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, fill: MATH_MISTAKE}} stroke={CARD} strokeWidth={7} paintOrder="stroke">{g.label}</text> : null}
				</g> : null}
			</FrameSvg>
		</div>
	);
};

/** The rate (violet) or rise (ink) graph against t (0 to 6 h), drawn to the clock, with an optional riding dot. */
export const StarterGraph: React.FC<{x: number; y: number; w: number; h: number; t: number; kind: 'rate' | 'rise'; at?: number; out?: number; label?: boolean; ask?: number; ringEnd?: number; children?: (m: PlotMap) => React.ReactNode}> = ({x, y, w, h, t, kind, at = -30, out, ask = 0, ringEnd = 0, children}) => {
	const isRate = kind === 'rate';
	const fn = isRate ? rate : rise;
	const win = {x: [-0.4, 6.5] as [number, number], y: (isRate ? [-0.35, 3.4] : [-0.8, 7.2]) as [number, number]};
	const tt = Math.max(0, Math.min(6, t));
	const col = isRate ? MATH_GRADIENT : INK;
	return (
		<StudioPlot x={x} y={y} width={w} height={h} window={win} xTicks={[1, 2, 3, 4, 5, 6]} yTicks={isRate ? [1, 2, 3] : [2, 4, 6]} xLabel="t (h)" yLabel={isRate ? 'rising at (cm per hour)' : 'risen (cm)'} at={at} out={out}>
			{m => <>
				<g clipPath={m.clip}>{tt > 0.01 ? <path d={fnPath(m, fn, 0, tt)} stroke={col} strokeWidth={6} fill="none" strokeLinecap="round" /> : null}</g>
				{(() => {const p = m.p(tt, fn(tt)); return <circle cx={p[0]} cy={p[1]} r={11} fill={col} stroke={CARD} strokeWidth={4} />;})()}
				{ask > 0.001 ? (() => {const p = m.p(6, 0); const q = m.p(6, win.y[1]); return <g opacity={ask}><line x1={p[0]} x2={p[0]} y1={p[1]} y2={q[1] + 30} stroke="#8a8378" strokeWidth={4} strokeDasharray="10 8" /><text x={p[0] - 14} y={q[1] + 46} textAnchor="end" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52, fill: INK}}>?</text></g>;})() : null}
				{ringEnd > 0.001 ? (() => {const p = m.p(6, fn(6)); return <circle cx={p[0]} cy={p[1]} r={26} fill="none" stroke="#287347" strokeWidth={5} opacity={ringEnd} />;})() : null}
				{children ? children(m) : null}
			</>}
		</StudioPlot>
	);
};

/** time, rising at (violet), risen (ink): one board from the same t. */
export const StarterBoard: React.FC<{x: number; y: number; width: number; t: number; at?: number; out?: number; riseText?: string; size?: number}> = ({x, y, width, t, at = -30, out, riseText, size = 52}) => {
	const tt = Math.max(0, Math.min(6, t));
	return <LiveReadoutBoard x={x} y={y} width={width} at={at} out={out} inline size={size} labelSize={30} rows={[
		{label: 'time', value: tt, digits: 1, unit: 'h'},
		{label: 'rising at', value: rate(tt), digits: 1, role: 'gradient', unit: 'cm/h'},
		{label: 'risen', value: rise(tt), digits: 1, unit: 'cm', text: riseText},
	]} />;
};

// ---------- small plots ----------
/** A plain plot of one or more curves (solid or dashed) for checks and attempt pictures. */
export type CurveSpec = {fn: (x: number) => number; from: number; to: number; color: string; dash?: string; width?: number; o?: number};
export const MiniPlot: React.FC<{x: number; y: number; w: number; h: number; win: {x: [number, number]; y: [number, number]}; curves: CurveSpec[]; xTicks?: number[]; yTicks?: number[]; xLabel?: string; yLabel?: string; at?: number; out?: number; children?: (m: PlotMap) => React.ReactNode}> = ({x, y, w, h, win, curves, xTicks, yTicks, xLabel = 'x', yLabel = 'y', at = -30, out, children}) => (
	<StudioPlot x={x} y={y} width={w} height={h} window={win} xTicks={xTicks} yTicks={yTicks} xLabel={xLabel} yLabel={yLabel} at={at} out={out}>
		{m => <>
			<g clipPath={m.clip}>{curves.map((c, i) => (c.o ?? 1) > 0.001 ? <path key={i} d={fnPath(m, c.fn, c.from, c.to)} stroke={c.color} strokeWidth={c.width ?? 6} strokeDasharray={c.dash} fill="none" strokeLinecap="round" opacity={c.o ?? 1} /> : null)}</g>
			{children ? children(m) : null}
		</>}
	</StudioPlot>
);

/** A plot label in frame space (plot-local coordinates from m.p), stroked on paper. */
export const PLabel: React.FC<{p: [number, number]; text: React.ReactNode; color?: string; size?: number; anchor?: 'start' | 'middle' | 'end'; hand?: boolean; o?: number; dx?: number; dy?: number}> = ({p, text, color = INK, size = 36, anchor = 'start', hand = false, o = 1, dx = 0, dy = 0}) => (o <= 0.001 ? null :
	<text x={p[0] + dx} y={p[1] + dy} textAnchor={anchor} opacity={o} style={{fontFamily: hand ? FONT_HAND : FONT_DISPLAY, fontWeight: hand ? 700 : 800, fontSize: size, fill: color}} stroke={CARD} strokeWidth={8} paintOrder="stroke">{text}</text>);

/** Framed card (double ink rule) used by the memory aid and the notes card. */
export const FramedCard: React.FC<{x: number; y: number; w: number; h: number; at?: number; children?: React.ReactNode}> = ({x, y, w, h, at = -30, children}) => {
	const f = useCurrentFrame();
	return <div style={{position: 'absolute', left: x, top: y, width: w, height: h, opacity: prog(f, at, 14), boxSizing: 'border-box', background: CARD, border: `4px solid ${INK}`, borderRadius: 24, boxShadow: `inset 0 0 0 8px ${CARD}, inset 0 0 0 10.5px ${INK}, ${CARD_SHADOW}`}}>{children}</div>;
};
