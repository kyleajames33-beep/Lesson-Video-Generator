// Lesson parts for math-a12-d09 (derivative signs, stationary and turning points; hike anchor): the valley
// plate with a walker dot that follows its painted trail, the hike function, sign-chart helpers, a green
// classification label, the empty sign-chart question picture and the handoff frame that d10 opens on.
// Generic helpers are imported read-only from math-a12-d04, d05 and d08 (same house style).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT} from '../../kit';
import type {Range} from '../../math/graphs';
import {
	CARD, FrameSvg, SvgPlate, MATH_AMBER, MATH_ANSWER, MATH_BLUE, MATH_DOWN, MATH_EXCLUDED, MATH_GRADIENT, MATH_MISTAKE, MATH_TEAL, MATH_UP,
	plateMap, usePlatePreload, vis,
} from '../../math/studio';
import type {FnFamily, PlateSpec} from '../../math/studio';

export {Chip, CurveLabel, DISPLAY, Dot, Frac, PreRing, RecallChip, TanLine, gmap} from '../math-a12-d04/parts';
export type {GMap} from '../math-a12-d04/parts';
export {WholeRows} from '../math-a12-d05/parts';
export {Attempt, Givens, HandoffBoard, HandoffTop, Sup, QUOT, Ring} from '../math-a12-d08/parts';

export const FN = MATH_BLUE;
export const VIOLET = MATH_GRADIENT;
export const UP = MATH_UP;
export const DOWN = MATH_DOWN;
export const TEAL = MATH_TEAL;
export const AMB = MATH_AMBER;
export const GREEN = MATH_ANSWER;
export const RED = MATH_MISTAKE;
export const GREY = MATH_EXCLUDED;

/** Signs as coloured text with their arrow. */
export const Plus: React.FC<{arrow?: boolean}> = ({arrow = true}) => <span style={{color: UP, fontWeight: 800}}>+{arrow ? ' ↗' : ''}</span>;
export const Minus: React.FC<{arrow?: boolean}> = ({arrow = true}) => <span style={{color: DOWN, fontWeight: 800}}>−{arrow ? ' ↘' : ''}</span>;

// ---------- the hike curve y = x⁴ − 4x³ ----------
export const HIKE: FnFamily = {f: u => u ** 4 - 4 * u ** 3, df: u => 4 * u ** 3 - 12 * u * u};
export const WIN_H = {x: [-1.5, 4.5] as Range, y: [-30, 20] as Range};
export const H_YTICKS = [-20, -10, 10];
export const H_XTICKS = [-1, 1, 2, 3, 4];

// ---------- the valley plate ----------
/** Brief 235 hiking valley (manifest: native 2448 x 782, alpha box 147,47 to 2300,724; ledge 854,426; creek 1713,673). */
export const VALLEY: PlateSpec = {src: 'assets/maths/ma12-hiking-valley-v1.png', nat: [2448, 782], box: [147, 47, 2300, 724]};
const TRAIL: [number, number][] = [[170, 197], [329, 241], [520, 354], [695, 427], [880, 425], [1002, 431], [1098, 490], [1220, 527], [1326, 596], [1538, 644], [1697, 674], [1819, 663], [1952, 602], [2079, 478], [2259, 302]];
/** Curve x to the plate's trail x (file px): ridge, ledge (x = 0), creek (x = 3), far rim. Not a scale map (author note iii). */
const trailFx = (x: number) => {
	const k: [number, number][] = [[-1.5, 250], [0, 854], [3, 1713], [4.5, 2259]];
	if (x <= k[0][0]) return k[0][1];
	for (let i = 0; i + 1 < k.length; i++) if (x <= k[i + 1][0]) return k[i][1] + ((x - k[i][0]) / (k[i + 1][0] - k[i][0])) * (k[i + 1][1] - k[i][1]);
	return k[k.length - 1][1];
};
const trailFy = (fx: number) => {
	for (let i = 0; i + 1 < TRAIL.length; i++) if (fx <= TRAIL[i + 1][0]) return TRAIL[i][1] + ((fx - TRAIL[i][0]) / (TRAIL[i + 1][0] - TRAIL[i][0])) * (TRAIL[i + 1][1] - TRAIL[i][1]);
	return TRAIL[TRAIL.length - 1][1];
};
export const valleyH = (w: number) => (w * (VALLEY.box[3] - VALLEY.box[1])) / (VALLEY.box[2] - VALLEY.box[0]);
/** Frame points on the plate: the walker for curve x, the ledge and the creek. */
export const valleyPts = (x: number, y: number, w: number) => {
	const m = plateMap(VALLEY, x, y, w);
	return {walker: (cx: number) => {const fx = trailFx(cx); return m.at(fx, trailFy(fx) - 10);}, ledge: m.at(854, 420), creek: m.at(1713, 668), s: m.s};
};
/** The valley plate (native aspect) with the walker dot riding its trail and optional rings on the ledge and the creek. */
export const Valley: React.FC<{x: number; y: number; w: number; walker?: number; walkerO?: number; ledge?: number; creek?: number; ridge?: number; at?: number; out?: number}> = ({x, y, w, walker, walkerO = 1, ledge = 0, creek = 0, ridge = 0, at = -30, out}) => {
	usePlatePreload([VALLEY.src]);
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const p = valleyPts(x, y, w);
	const r = Math.max(10, 26 * (w / 1200));
	const wp = walker === undefined ? null : p.walker(walker);
	return (
		<FrameSvg style={{opacity: o}}>
			<SvgPlate plate={VALLEY} x={x} y={y} w={w} />
			{ledge > 0.001 ? <ellipse cx={p.ledge[0]} cy={p.ledge[1]} rx={r * 3.2} ry={r * 1.8} fill="none" stroke={INK} strokeWidth={Math.max(3, r * 0.22)} opacity={ledge} /> : null}
			{creek > 0.001 ? <ellipse cx={p.creek[0]} cy={p.creek[1]} rx={r * 3.2} ry={r * 1.8} fill="none" stroke={INK} strokeWidth={Math.max(3, r * 0.22)} opacity={creek} /> : null}
			{ridge > 0.001 ? (() => {const m = plateMap(VALLEY, x, y, w); const [rx, ry] = m.at(300, 215); return <ellipse cx={rx} cy={ry} rx={r * 3.2} ry={r * 1.8} fill="none" stroke={INK} strokeWidth={Math.max(3, r * 0.22)} opacity={ridge} />;})() : null}
			{wp && walkerO > 0.001 ? <g opacity={walkerO}><circle cx={wp[0]} cy={wp[1]} r={r * 1.1} fill="#fffdf8" opacity={0.7} /><circle cx={wp[0]} cy={wp[1]} r={r * 0.62} fill={INK} stroke="#fffdf8" strokeWidth={Math.max(2, r * 0.16)} /></g> : null}
		</FrameSvg>
	);
};

// ---------- labels and pictures ----------
/** Green framed classification label (answers). */
export const Klass: React.FC<{x: number; y: number; at: number; out?: number; size?: number; children: React.ReactNode; anchor?: 'start' | 'end' | 'middle'}> = ({x, y, at, out, size = 34, children, anchor = 'start'}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.001) return null;
	return (
		<div style={{position: 'absolute', left: x, top: y, opacity: o, transform: `translateX(${anchor === 'start' ? 0 : anchor === 'end' ? -100 : -50}%)`, background: CARD, border: `4px solid ${GREEN}`, borderRadius: 14, padding: '2px 14px', boxShadow: '0 8px 18px rgba(40,115,71,0.12)', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: INK, whiteSpace: 'pre'}}>{children}</div>
	);
};

/** Question picture: an empty sign-chart frame (a number line labelled x over an empty "sign of f′(x)" row). Nothing answer-bearing. */
export const EmptyChart: React.FC<{w?: number; h?: number}> = ({w = 900, h = 380}) => (
	<div style={{width: w, height: h, background: '#fbf8f1', borderRadius: 14, border: '2px solid rgba(60,45,20,0.12)', boxSizing: 'border-box', position: 'relative'}}>
		<div style={{position: 'absolute', left: 30, top: 22, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: INK}}>sign chart: your tool</div>
		<svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{position: 'absolute', inset: 0, overflow: 'visible'}}>
			<line x1={250} x2={w - 50} y1={150} y2={150} stroke={INK} strokeWidth={5} strokeLinecap="round" />
			<path d={`M${w - 62},${138} L${w - 44},${150} L${w - 62},${162}`} stroke={INK} strokeWidth={5} fill="none" />
			<text x={w - 50} y={128} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, fill: INK_SOFT}}>x</text>
			<rect x={250} y={196} width={w - 300} height={110} rx={16} fill="#eee8de" stroke="rgba(60,45,20,0.18)" strokeWidth={2} />
			<text x={232} y={262} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, fill: INK}}>sign of f′(x)</text>
			<text x={232} y={160} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, fill: INK}}>x</text>
			<text x={(250 + w - 50) / 2} y={268} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 48, fill: INK_SOFT}}>?</text>
		</svg>
	</div>
);

/** Small hand-drawn arrow glyph (up teal, down amber) for sign rows. */
export const SignArrow: React.FC<{up: boolean; size?: number}> = ({up, size = 40}) => (
	<svg width={size} height={size} viewBox="-24 -24 48 48" style={{verticalAlign: 'middle', overflow: 'visible'}}>
		<path d={up ? 'M-16,14 L14,-16 M-2,-17 L15,-17 L15,0' : 'M-16,-14 L14,16 M-2,17 L15,17 L15,0'} stroke={up ? UP : DOWN} strokeWidth={6} fill="none" strokeLinecap="round" strokeLinejoin="round" />
	</svg>
);

// ---------- the handoff frame (scene 15's final frame; d10 opens on it) ----------
export const CUBIC: FnFamily = {f: u => u ** 3 - 3 * u, df: u => 3 * u * u - 3};
export const WIN_E = {x: [-2.5, 3.5] as Range, y: [-4, 20] as Range};
/** d10's opening window: 1300 x 640. */
export const D10_STAGE = {x: 310, y: 190, w: 1300, h: 640};
export const NextChip: React.FC<{at?: number; text: string}> = ({at = -30, text}) => (
	<Enter at={at} style={{position: 'absolute', left: 0, right: 0, top: 892, display: 'flex', justifyContent: 'center'}}>
		<div style={{background: '#f1ebdf', border: '2px solid rgba(60,45,20,0.14)', borderRadius: 14, padding: '8px 22px', fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 44, color: '#4f4840', whiteSpace: 'pre'}}>{text}</div>
	</Enter>
);
export const tint = (c: string, a: number) => {
	const n = parseInt(c.slice(1), 16);
	return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
};

/**
 * A solid sign chart (no grey "?" boxes): an x number line, the sign row, an optional test row and a
 * nature row. Boundaries, signs, tests and labels each arrive on their cue; unrevealed cells are plain
 * paper cards with a light ink rule.
 */
export type ChartBoundary = {x: number; at: number; kind?: 'zero' | 'excluded'; label?: string};
export type ChartCell = {sign: 1 | -1; at: number; test?: React.ReactNode; testAt?: number};
export const SignChart: React.FC<{x: number; y: number; w: number; win: [number, number]; ticks: number[]; boundaries: ChartBoundary[]; cells: ChartCell[]; nature?: {x: number; text: React.ReactNode; at: number}[]; test?: boolean; at?: number; signLabel?: string; testSize?: number; labelW?: number}> = ({x, y, w, win, ticks, boundaries, cells, nature = [], test = true, at = -30, signLabel = 'sign of f′(x)', testSize = 34, labelW}) => {
	const f = useCurrentFrame();
	const L = x + (labelW ?? (signLabel.length > 6 ? 230 : 130)), R = x + w - 30;
	const X = (v: number) => L + ((v - win[0]) / (win[1] - win[0])) * (R - L);
	const lineY = y + 30, cellY = y + 56, cellH = 80, testY = cellY + cellH + 40;
	const shownB = boundaries.filter(b => f >= b.at);
	const edges = [win[0], ...boundaries.map(b => b.x), win[1]];
	const o = vis(f, at, undefined, 12);
	const p = (a: number) => Math.min(1, Math.max(0, (f - a) / 12));
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o, pointerEvents: 'none'}}>
			<FrameSvg>
				<rect x={x} y={y - 10} width={w} height={(test ? testY + 30 : cellY + cellH + 20) - y + 10 + (nature.length ? 56 : 0)} rx={18} fill={CARD} stroke="rgba(60,45,20,0.10)" strokeWidth={2.5} />
				<line x1={L - 10} x2={R + 12} y1={lineY} y2={lineY} stroke={INK} strokeWidth={4} strokeLinecap="round" />
				<path d={`M${R + 2},${lineY - 11} L${R + 16},${lineY} L${R + 2},${lineY + 11}`} stroke={INK} strokeWidth={4} fill="none" />
				<text x={L - 24} y={lineY + 11} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, fill: INK}}>x</text>
				{ticks.filter(t => !boundaries.some(b => b.x === t && f >= b.at)).map(t => <g key={t}><line x1={X(t)} x2={X(t)} y1={lineY - 9} y2={lineY + 9} stroke={INK_SOFT} strokeWidth={3} /><text x={X(t)} y={lineY - 16} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28, fill: INK_SOFT}}>{t < 0 ? '−' + Math.abs(t) : t}</text></g>)}
				<text x={L - 24} y={cellY + cellH / 2 + 12} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, fill: INK}}>{signLabel}</text>
				{test ? <text x={L - 24} y={testY + 10} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: INK_SOFT}}>test</text> : null}
				{(shownB.length ? [win[0], ...shownB.map(b => b.x), win[1]] : [win[0], win[1]]).slice(0, -1).map((a, i, arr) => {
					const b = i + 1 < arr.length ? arr[i + 1] : win[1];
					return <rect key={'c' + i} x={X(a) + 5} y={cellY} width={X(b) - X(a) - 10} height={cellH} rx={14} fill="#fbf8f1" stroke="rgba(60,45,20,0.16)" strokeWidth={2} />;
				})}
				{cells.map((c, i) => {
					const q = p(c.at);
					if (q <= 0 || shownB.length < boundaries.length) return null;
					const a = X(edges[i]) + 5, b = X(edges[i + 1]) - 5, mid = (a + b) / 2, up = c.sign > 0;
					const col = up ? UP : DOWN;
					return <g key={'s' + i} opacity={q}>
						<rect x={a} y={cellY} width={b - a} height={cellH} rx={14} fill={up ? '#d6eeee' : '#f8e8c8'} />
						<text x={mid - 30} y={cellY + cellH / 2 + 18} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, fill: col}}>{up ? '+' : '−'}</text>
						<path d={up ? `M${mid + 6},${cellY + 66} l34,-36 m-18,0 l18,0 l0,18` : `M${mid + 6},${cellY + 28} l34,36 m-18,0 l18,0 l0,-18`} stroke={col} strokeWidth={7} fill="none" strokeLinecap="round" strokeLinejoin="round" />
					</g>;
				})}
				{shownB.map(b => {
					const q = p(b.at), bx = X(b.x);
					const ex = b.kind === 'excluded';
					return <g key={'b' + b.x} opacity={q}>
						<line x1={bx} x2={bx} y1={lineY - 14} y2={cellY + cellH + 8} stroke={ex ? GREY : INK} strokeWidth={3.5} strokeDasharray={ex ? '8 7' : undefined} />
						{ex ? <circle cx={bx} cy={lineY} r={12} fill={CARD} stroke={GREY} strokeWidth={5} /> : <circle cx={bx} cy={lineY} r={8} fill={INK} />}
						<text x={bx} y={lineY - 18} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: ex ? GREY : INK}}>{b.label ?? (b.x < 0 ? '−' + Math.abs(b.x) : String(b.x))}</text>
						{!ex ? <text x={bx} y={cellY + cellH / 2 + 14} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, fill: INK}} stroke={CARD} strokeWidth={10} paintOrder="stroke">0</text> : null}
					</g>;
				})}
			</FrameSvg>
			{test ? cells.map((c, i) => c.test === undefined ? null : <div key={'t' + i} style={{position: 'absolute', left: (X(edges[i]) + X(edges[i + 1])) / 2, top: testY - 24, transform: 'translateX(-50%)', opacity: p(c.testAt ?? c.at), fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: testSize, color: INK, whiteSpace: 'pre'}}>{c.test}</div>) : null}
			{nature.map((n, i) => <Klass key={i} x={X(n.x)} y={(test ? testY + 30 : cellY + cellH + 18) + 4} at={n.at} anchor="middle" size={30}>{n.text}</Klass>)}
		</div>
	);
};

/** Large answer-free axes picture for the attempts: blank axes with x ticks and a violet hand question. */
export const QBlankAxes: React.FC<{w?: number; h?: number; xRange: [number, number]; ticks: number[]; tag: string; label?: React.ReactNode}> = ({w = 1080, h = 310, xRange, ticks, tag, label}) => {
	const pad = {l: 50, r: 50};
	const X = (v: number) => pad.l + ((v - xRange[0]) / (xRange[1] - xRange[0])) * (w - pad.l - pad.r);
	const oy = h * 0.62, ox = X(0);
	return (
		<div style={{width: w, height: h, position: 'relative', background: '#fbf8f1', borderRadius: 14, border: '2px solid rgba(60,45,20,0.12)', boxSizing: 'border-box'}}>
			<svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{position: 'absolute', inset: 0, overflow: 'visible'}}>
				<path d={`M${pad.l - 20},${oy} H${w - pad.r + 20} M${ox},${24} V${h - 24}`} stroke={INK} strokeWidth={4} fill="none" />
				<text x={w - pad.r + 14} y={oy - 16} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: INK_SOFT}}>x</text>
				<text x={ox + 12} y={44} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: INK_SOFT}}>y</text>
				{ticks.map(t => <g key={t}><line x1={X(t)} x2={X(t)} y1={oy - 10} y2={oy + 10} stroke={INK} strokeWidth={3} /><text x={X(t)} y={oy + 46} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, fill: INK}}>{t < 0 ? '−' + Math.abs(t) : t}</text></g>)}
				<text x={w / 2 + 60} y={74} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46, fill: VIOLET}}>{tag}</text>
			</svg>
			{label ? <div style={{position: 'absolute', left: 30, top: 20, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, color: INK}}>{label}</div> : null}
		</div>
	);
};
