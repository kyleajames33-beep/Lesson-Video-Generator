// Lesson parts for math-a12-d19 (Revision 3: dQ/dt = kQ, exponential growth and decay; a car losing 15% of its
// current value a year), built on the maths studio kit. Lesson-local rigs:
// - CarRig: the reused Biology yellow car with a coded price tag hung from its mirror (d18's handoff geometry by
//   default), whose value ticks;
// - CarGraph: d18's t-V axes (a replica of d18's CarAxes, so d19's first frame is d18's last), with the value
//   curve, a ghost path and extra points;
// - DepreciationSim: CarGraph + CarRig + a kit LiveReadoutBoard driven by one t, so the price tag, the point,
//   its violet tangent (gradient −0.15 × value) and the readouts "value", "rate of change" and "rate ÷ value"
//   (fixed at −0.15) can never disagree;
// - FactorLadder (memory card), StubInset (scene 2), QPic (attempt pictures).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {CARD, CARD_SHADOW, FrameSvg, LiveReadoutBoard, MATHS_KIT2_PLATES, MATH_BLUE, MATH_GRADIENT, MATH_EXCLUDED, Pow, SvgPlate, fmtMoney, makePlot, plateMap, usePlatePreload, vis} from '../../math/studio';
import type {PlateSpec, PlotMap} from '../../math/studio';
import {T_WIN} from '../math-a12-d18/parts';

export {AMB, AMB_INK, Am, AnswerBox, Attempt, BoxCard, Chip, GREEN, GREY, GREY_INK, Line, RED, Ring, Tick, V, VIOLET, stubLine} from '../math-a12-d18/parts';
export {T_WIN};
export const BLUE = MATH_BLUE;

const glowBg = (rgb: string, g: number) => (g > 0.001 ? `rgba(${rgb},${0.9 * g})` : undefined);
/** k and its units: blue. */
export const Kb: React.FC<{children: React.ReactNode; g?: number}> = ({children, g = 0}) => <span style={{color: MATH_BLUE, background: glowBg('220,234,247', g), borderRadius: 8}}>{children}</span>;
/** A, the initial value: amber ink. */
export const Aa: React.FC<{children: React.ReactNode; g?: number}> = ({children, g = 0}) => <span style={{color: '#7a4600', background: glowBg('248,232,200', g), borderRadius: 8}}>{children}</span>;
/** Grey "≈" readout beside an exact value. */
export const Approx: React.FC<{children: React.ReactNode; size?: number}> = ({children, size = 34}) => <span style={{fontSize: size, fontWeight: 700, color: '#4f4840'}}>{children}</span>;
/** e raised to a power. */
export const Ex: React.FC<{children: React.ReactNode}> = ({children}) => <>e<Pow>{children}</Pow></>;
/** Built-up fraction (dQ over dt). */
export const Frac: React.FC<{n: React.ReactNode; d: React.ReactNode; scale?: number}> = ({n, d, scale = 0.8}) => (
	<span style={{display: 'inline-flex', flexDirection: 'column', alignItems: 'center', verticalAlign: 'middle', fontSize: `${scale}em`, lineHeight: 1.04, margin: '0 0.1em', position: 'relative', top: '-0.08em'}}>
		<span style={{padding: '0 0.12em'}}>{n}</span>
		<span style={{borderTop: '0.08em solid currentColor', padding: '0 0.12em'}}>{d}</span>
	</span>
);
export const DQ: React.FC<{q?: string}> = ({q = 'Q'}) => <Frac n={`d${q}`} d="dt" />;

// ---------- the models (design author notes a to h, Revision 3 anchor table) ----------
export const LN2 = Math.LN2;
/** The car: V = 30,000e^(−0.15t) dollars, t years. */
export const carV = (t: number) => 30000 * Math.exp(-0.15 * t);
export const carRate = (t: number) => -0.15 * carV(t);
export const T_HALF = LN2 / 0.15;
/** Savings (site we-1): B = 5000e^(0.06t). */
export const sav = (t: number) => 5000 * Math.exp(0.06 * t);
/** The town (site we-3): P = 10000e^(kt), k = ln 1.2 / 5. */
export const K_TOWN = Math.log(1.2) / 5;
export const town = (t: number) => 10000 * Math.exp(K_TOWN * t);
export const T_TOWN = LN2 / K_TOWN;
/** The substance (site we-2): Q = 200e^(kt), k = −ln 2 / 12. */
export const K_SUB = -LN2 / 12;
export const sub = (t: number) => 200 * Math.exp(K_SUB * t);
/** Attempt 1: P = 800e^(kt), k = ln 2 / 10. Attempt 2: Q = 100e^(kt), k = −ln 2 / 5. */
export const pop1 = (t: number) => 800 * Math.exp((LN2 / 10) * t);
export const mass2 = (t: number) => 100 * Math.exp((-LN2 / 5) * t);
{
	const near = (a: number, b: number, tol = 0.006) => Math.abs(a - b) < tol;
	const checks: [string, boolean][] = [
		['car', near(carRate(0), -4500) && near(carV(T_HALF), 15000) && near(carRate(T_HALF), -2250) && near(T_HALF, 4.620981) && near(carV(8), 9035.826) && near(carV(14), 3673.693) && near(carRate(14), -551.054) && near(Math.exp(-0.15), 0.860708)],
		['savings', near(sav(8), 8080.372)],
		['sweep', near(2 * Math.exp(0.5 * 4), 14.778) && near(2 * Math.exp(-0.5 * 4), 0.271)],
		['town', near(K_TOWN, 0.03646431, 1e-8) && near(T_TOWN, 19.008920) && near(LN2 / 0.0365, 18.990334) && near(town(5), 12000) && near(town(10), 14400) && near(town(15), 17280) && near(town(20), 20736)],
		['substance', near(K_SUB, -0.0577623, 1e-6) && near(sub(12), 100) && near(sub(30), 25 * Math.SQRT2) && near(sub(30), 35.355339)],
		['A1', near(pop1(10), 1600) && near(pop1(15), 1600 * Math.SQRT2) && near(pop1(15), 2262.7417) && near(LN2 / 10, 0.0693147, 1e-6)],
		['A2', near(mass2(10), 25) && near((-LN2 / 5) * 25, -5 * LN2) && near(-5 * LN2, -3.465736) && near((-LN2 / 5) * 100, -13.862944)],
	];
	const bad = checks.filter(k => !k[1]).map(k => k[0]);
	if (bad.length) throw new Error('math-a12-d19 numbers: ' + bad.join(', '));
}
export const money = (v: number) => fmtMoney(Math.round(v));

// ---------- the car and its price tag ----------
export const CAR: PlateSpec = MATHS_KIT2_PLATES.carYellow;
const MIRROR: [number, number] = [998, 300];
export const carH = (w: number) => (w * (CAR.box[3] - CAR.box[1])) / (CAR.box[2] - CAR.box[0]);
/** d18's handoff geometry (CarTag in math-a12-d18/parts). */
export const CAR_D18 = {x: 40, y: 430, w: 700};
/**
 * The yellow car with its coded price tag. The tag hangs from the mirror on a string; `tag` places the tag's
 * top-left corner and the string's end relative to the mirror (default: d18's handoff placement).
 */
export const CarRig: React.FC<{x: number; y: number; w: number; value: number; tag?: {dx: number; dy: number; sx: number; sy: number; size?: number}; at?: number; out?: number; ring?: number}> = ({x, y, w, value, tag = {dx: -200, dy: -196, sx: -40, sy: -120, size: 52}, at = -30, out, ring = 0}) => {
	usePlatePreload([CAR.src]);
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const m = plateMap(CAR, x, y, w);
	const [mx, my] = m.at(...MIRROR);
	const size = tag.size ?? 52;
	return (
		<>
			<FrameSvg style={{opacity: o}}>
				<SvgPlate plate={CAR} x={x} y={y} w={w} />
				<path d={`M${mx},${my} L${mx + tag.sx},${my + tag.sy}`} stroke={INK} strokeWidth={3} />
				<circle cx={mx} cy={my} r={6} fill={INK} />
			</FrameSvg>
			<div style={{position: 'absolute', left: mx + tag.dx, top: my + tag.dy, opacity: o, background: CARD, border: `4px solid ${ring > 0.001 ? '#287347' : INK}`, borderRadius: 16, padding: '4px 22px', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: INK, boxShadow: CARD_SHADOW, transform: 'rotate(-4deg)'}}>{money(value)}</div>
		</>
	);
};

// ---------- the car's value graph ----------
export type Geom = {x: number; y: number; w: number; h: number};
/** d18's handoff axes. */
export const AXES_D18: Geom = {x: 820, y: 170, w: 1060, h: 640};
const thou = (v: number) => (v === 0 ? '0' : `${(v / 1000).toFixed(0)},000`);
export const carPlot = (g: Geom) => makePlot(g.x, g.y, g.w, g.h, T_WIN);
/** Points along V = 30,000e^(−0.15t) from a to b, as an SVG path in frame space. */
export const carPath = (M: PlotMap, a: number, b: number, n = 140) => Array.from({length: n + 1}, (_, i) => {const t = a + ((b - a) * i) / n; const p = M.pf(t, carV(t)); return `${i ? 'L' : 'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`;}).join(' ');
/** A tangent segment through (t, V) with gradient m dollars per year, `half` px each way (or one way). */
export const segAt = (M: PlotMap, t: number, v: number, m: number, half: number, back = half) => {
	const P = M.pf(t, v), vx = M.sx, vy = -m * M.sy, l = Math.hypot(vx, vy);
	return {x1: P[0] - (vx / l) * back, y1: P[1] - (vy / l) * back, x2: P[0] + (vx / l) * half, y2: P[1] + (vy / l) * half};
};
/**
 * The car's axes, drawn exactly as d18's CarAxes at d18's geometry (so the cut from D18FinalFrame is invisible),
 * with optional layers: the first point's stub, its "new" label, d18's grey readout, the value curve, a dashed
 * ghost path, and a render prop for overlays.
 */
export const CarGraph: React.FC<{g?: Geom; at?: number; out?: number; stub0?: number; newLabel?: number; readout?: number; point0?: number; curve?: {from?: number; upTo: number; o?: number}; ghost?: number; children?: (M: PlotMap) => React.ReactNode; tickSize?: number}> = ({g = AXES_D18, at = -30, out, stub0 = 1, newLabel = 1, readout = 1, point0 = 1, curve, ghost = 0, children, tickSize = 30}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const M = carPlot(g);
	const O = M.pf(0, 0), P = M.pf(0, 30000);
	const sl = -4500, vx = M.sx, vy = -sl * M.sy, l = Math.hypot(vx, vy), hl = 210 * (g.w / 1060);
	return (
		<FrameSvg style={{opacity: o}}>
			<path d={`M${M.pf(-0.6, 0)[0]},${O[1]} H${M.pf(14.6, 0)[0]} M${O[0]},${M.pf(0, -1500)[1]} V${M.pf(0, 33000)[1]}`} stroke={INK} strokeWidth={4} fill="none" />
			{[2, 4, 6, 8, 10, 12, 14].map(t => {const p = M.pf(t, 0); return <g key={t}><line x1={p[0]} x2={p[0]} y1={p[1] - 8} y2={p[1] + 8} stroke={INK} strokeWidth={3} /><text x={p[0]} y={p[1] + 40} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: tickSize, fill: INK}}>{t}</text></g>;})}
			{[5000, 10000, 15000, 20000, 25000, 30000].map(v => {const p = M.pf(0, v); return <g key={v}><line x1={p[0] - 8} x2={p[0] + 8} y1={p[1]} y2={p[1]} stroke={INK} strokeWidth={3} /><line x1={p[0]} x2={M.pf(14.6, 0)[0]} y1={p[1]} y2={p[1]} stroke="#d9cfbd" strokeWidth={1.5} /><text x={p[0] - 14} y={p[1] + 10} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: tickSize - 2, fill: INK}}>{thou(v)}</text></g>;})}
			<text x={M.pf(14.6, 0)[0] - 4} y={O[1] - 18} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: INK_SOFT}}>t (years)</text>
			{g === AXES_D18 ? <text x={O[0] - 14} y={M.pf(0, 33000)[1] - 10} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: INK_SOFT}}>V (dollars)</text>
				: <text x={O[0] + 16} y={M.pf(0, 33000)[1] - 6} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: INK_SOFT}}>V (dollars)</text>}
			<line x1={P[0] - (vx / l) * 20} y1={P[1] - (vy / l) * 20} x2={P[0] + (vx / l) * hl} y2={P[1] + (vy / l) * hl} stroke={MATH_GRADIENT} strokeWidth={7} strokeLinecap="round" opacity={stub0} />
			{point0 > 0.001 ? <circle cx={P[0]} cy={P[1]} r={13} fill={INK} stroke={CARD} strokeWidth={4} opacity={point0} /> : null}
			{newLabel > 0.001 ? <text x={P[0] + 30} y={P[1] - 8} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, fill: INK}} stroke={CARD} strokeWidth={8} paintOrder="stroke" opacity={newLabel}>new: $30,000</text> : null}
			{readout > 0.001 ? <text x={M.pf(1.2, 0)[0]} y={M.pf(0, 17000)[1]} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 34, fill: INK_SOFT}} opacity={readout}>losing 15% of $30,000 = $4,500 per year</text> : null}
			{ghost > 0.001 ? <path d={carPath(M, 0, 14)} stroke={MATH_EXCLUDED} strokeWidth={5} strokeDasharray="14 12" fill="none" opacity={ghost} /> : null}
			{curve && (curve.o ?? 1) > 0.001 && curve.upTo > (curve.from ?? 0) + 0.001 ? <path d={carPath(M, curve.from ?? 0, curve.upTo)} stroke={INK} strokeWidth={6} fill="none" strokeLinecap="round" opacity={curve.o ?? 1} /> : null}
			{children ? children(M) : null}
		</FrameSvg>
	);
};

/** The riding point at time t with its violet tangent (gradient −0.15 × V); optional trail of stubs left behind. */
export const CarPoint: React.FC<{M: PlotMap; t: number; o?: number; half?: number; trail?: readonly number[]; trailHalf?: number}> = ({M, t, o = 1, half = 150, trail = [], trailHalf = 70}) => {
	if (o <= 0.001) return null;
	const P = M.pf(t, carV(t));
	return (
		<g opacity={o}>
			{trail.filter(s => s < t - 0.05).map(s => <line key={s} {...segAt(M, s, carV(s), carRate(s), trailHalf)} stroke={MATH_GRADIENT} strokeWidth={5} strokeLinecap="round" opacity={0.5} />)}
			<line {...segAt(M, t, carV(t), carRate(t), half)} stroke={MATH_GRADIENT} strokeWidth={7} strokeLinecap="round" />
			<circle cx={P[0]} cy={P[1]} r={13} fill={INK} stroke={CARD} strokeWidth={4} />
		</g>
	);
};

/**
 * DepreciationSim: the car's graph with the value curve drawn behind a riding point, the car with its ticking
 * price tag, and the live board (value, rate of change, rate ÷ value), all from the same t.
 */
export const DepreciationSim: React.FC<{t: number; graph: Geom; car: {x: number; y: number; w: number; tag: {dx: number; dy: number; sx: number; sy: number; size?: number}}; board?: {x: number; y: number; width: number; at?: number}; trail?: readonly number[]; ratioGlow?: [number, number]; pointAt?: number; half?: number; children?: (M: PlotMap) => React.ReactNode; curveO?: number}> = ({t, graph, car, board, trail, ratioGlow, pointAt = -30, children, curveO = 1, half = 150}) => {
	const f = useCurrentFrame();
	const v = carV(t), r = carRate(t);
	return (
		<>
			<CarGraph g={graph} stub0={0} newLabel={0} readout={0} point0={0} curve={{upTo: t, o: curveO}}>
				{M => <>
					<CarPoint M={M} t={t} o={prog(f, pointAt, 12)} trail={trail} half={half} />
					{children ? children(M) : null}
				</>}
			</CarGraph>
			<CarRig x={car.x} y={car.y} w={car.w} value={v} tag={car.tag} />
			{board ? <LiveReadoutBoard x={board.x} y={board.y} width={board.width} at={board.at ?? -30} inline size={52} labelSize={32} rows={[
				{label: 'value', value: v, format: money},
				{label: 'rate of change', value: r, role: 'gradient', format: money, unit: 'per year'},
				{label: 'rate ÷ value', value: -0.15, role: 'a', format: () => '−0.15', unit: 'per year', glow: ratioGlow},
			]} /> : null}
		</>
	);
};

// ---------- small pictures ----------
/** Scene 2 inset: a small curve with three violet tangent stubs, a caption above (k < 0 or k > 0). */
export const StubInset: React.FC<{x: number; y: number; w?: number; h?: number; grow: boolean; at: number; caption: React.ReactNode}> = ({x, y, w = 400, h = 200, grow, at, caption}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, undefined, 14);
	if (o <= 0.001) return null;
	const gx = 40, gy = 70, gw = w - 70, gh = h - 90;
	const fn = (u: number) => (grow ? Math.exp(1.6 * u) / Math.exp(1.6) : Math.exp(-1.6 * u));
	const df = (u: number) => (grow ? 1.6 * fn(u) : -1.6 * fn(u));
	const X = (u: number) => x + gx + u * gw, Y = (q: number) => y + gy + gh - q * gh * 0.92;
	const d = Array.from({length: 61}, (_, i) => {const u = i / 60; return `${i ? 'L' : 'M'}${X(u).toFixed(1)},${Y(fn(u)).toFixed(1)}`;}).join(' ');
	const stub = (u: number, k: number) => {
		const s = prog(f, at + 10 + k * 10, 10);
		const vx = gw, vy = -df(u) * gh * 0.92, l = Math.hypot(vx, vy), hl = 34;
		return <line key={u} x1={X(u) - (vx / l) * hl} y1={Y(fn(u)) - (vy / l) * hl} x2={X(u) + (vx / l) * hl} y2={Y(fn(u)) + (vy / l) * hl} stroke={MATH_GRADIENT} strokeWidth={6} strokeLinecap="round" opacity={s} />;
	};
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o}}>
			<div style={{position: 'absolute', left: x, top: y, width: w, height: h, background: CARD, borderRadius: 18, boxShadow: CARD_SHADOW, border: '2.5px solid rgba(60,45,20,0.10)', boxSizing: 'border-box'}} />
			<div style={{position: 'absolute', left: x + 20, top: y + 8, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, color: INK, whiteSpace: 'pre'}}>{caption}</div>
			<FrameSvg>
				<path d={`M${x + gx},${y + gy - 4} V${y + gy + gh} H${x + gx + gw + 8}`} stroke={INK} strokeWidth={3} fill="none" />
				<path d={d} stroke={INK} strokeWidth={5} fill="none" strokeLinecap="round" />
				{[0.15, 0.5, 0.85].map((u, k) => stub(u, k))}
			</FrameSvg>
		</div>
	);
};

/**
 * Attempt picture: empty axes with the start point ringed and labelled, and the question's demands as hand tags
 * (no curve, nothing answer-bearing).
 */
export const QPic: React.FC<{w?: number; h?: number; tMax: number; yMax: number; tTicks: number[]; start: {v: number; label: string}; ask: {t: number; tag: string}; xLabel: string; yLabel: string; side?: string}> = ({w = 860, h = 420, tMax, yMax, tTicks, start, ask, xLabel, yLabel, side}) => {
	const L = 120, R = w - 70, T = 40, B = h - 70;
	const X = (t: number) => L + (t / tMax) * (R - L), Y = (v: number) => B - (v / yMax) * (B - T);
	return (
		<div style={{width: w, height: h, position: 'relative', background: '#fbf8f1', borderRadius: 14, border: '2px solid rgba(60,45,20,0.12)', boxSizing: 'border-box'}}>
			<svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{position: 'absolute', inset: 0, overflow: 'visible'}}>
				<path d={`M${L},${T - 10} V${B} H${R + 16}`} stroke={INK} strokeWidth={4.5} fill="none" strokeLinecap="round" />
				{tTicks.map(t => <g key={t}><line x1={X(t)} x2={X(t)} y1={B - 9} y2={B + 9} stroke={INK} strokeWidth={4} /><text x={X(t)} y={B + 42} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, fill: INK}}>{t}</text></g>)}
				<text x={R + 12} y={B - 16} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, fill: INK_SOFT}}>{xLabel}</text>
				<text x={L + 14} y={T + 6} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, fill: INK_SOFT}}>{yLabel}</text>
				<circle cx={X(0)} cy={Y(start.v)} r={12} fill={INK} stroke="#fbf8f1" strokeWidth={4} />
				<circle cx={X(0)} cy={Y(start.v)} r={26} fill="none" stroke={INK} strokeWidth={4} />
				<text x={X(0) - 18} y={Y(start.v) + 12} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: '#7a4600'}}>{start.label}</text>
				<line x1={X(ask.t)} x2={X(ask.t)} y1={B} y2={T + 20} stroke={MATH_EXCLUDED} strokeWidth={4} strokeDasharray="12 10" />
				<text x={X(ask.t)} y={T + 6} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46, fill: INK}}>{ask.tag}</text>
				{side ? <text x={X(0) + 50} y={Y(start.v) - 34} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, fill: INK}}>{side}</text> : null}
			</svg>
		</div>
	);
};

/**
 * Factor ladder (memory card): axes, the model curve, points at equal time steps (with values), and blue
 * "× factor" arcs between neighbours that write on their cues, on the empty side of the curve (`arcs`).
 * Optional dashed level line, a ringed crossing and a bracketed extra point; every label placement is explicit.
 */
type Lab = {dx: number; dy: number; anchor?: 'start' | 'middle' | 'end'};
export const FactorLadder: React.FC<{x: number; y: number; w: number; h: number; tMax: number; yMax: number; fn: (t: number) => number; pts: {t: number; label: string; lab?: Lab}[]; ptLab?: Lab; factor: string; arcAt: number[]; arcs: 'above' | 'below'; level?: {v: number; label: string; at: number; below?: boolean; left?: boolean}; cross?: {t: number; at: number; label: string; lab: Lab}; extra?: {t: number; at: number; label: string; between: [number, number]; lab: Lab}; tTicks: {value: number; label: string; sub?: string}[]; xLabel: string; xLabelBelow?: boolean; yLabel: string; size?: number; arcSize?: number}> = ({x, y, w, h, tMax, yMax, fn, pts, ptLab = {dx: -16, dy: -20, anchor: 'end'}, factor, arcAt, arcs, level, cross, extra, tTicks, xLabel, xLabelBelow = false, yLabel, size = 30, arcSize = 38}) => {
	const f = useCurrentFrame();
	const L = x + 70, R = x + w - 30, T = y + 30, B = y + h - 70;
	const X = (t: number) => L + (t / tMax) * (R - L), Y = (v: number) => B - (v / yMax) * (B - T);
	const d = Array.from({length: 121}, (_, i) => {const t = (tMax * i) / 120; return `${i ? 'L' : 'M'}${X(t).toFixed(1)},${Y(Math.min(yMax * 1.02, fn(t))).toFixed(1)}`;}).join(' ');
	const s = arcs === 'above' ? -1 : 1;
	const txt = (size2: number, fill: string, hand = false): React.CSSProperties => ({fontFamily: hand ? FONT_HAND : FONT_DISPLAY, fontWeight: hand ? 700 : 800, fontSize: size2, fill} as React.CSSProperties);
	return (
		<svg style={{position: 'absolute', left: 0, top: 0, overflow: 'visible'}} width={1920} height={1080} viewBox="0 0 1920 1080">
			<path d={`M${L},${T - 8} V${B} H${R + 10}`} stroke={INK} strokeWidth={4} fill="none" strokeLinecap="round" />
			{tTicks.map(tk => <g key={tk.value}><line x1={X(tk.value)} x2={X(tk.value)} y1={B - 8} y2={B + 8} stroke={INK} strokeWidth={3} /><text x={X(tk.value)} y={B + 36} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28, fill: INK}}>{tk.label}</text>{tk.sub ? <text x={X(tk.value)} y={B + 66} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 26, fill: INK_SOFT}}>{tk.sub}</text> : null}</g>)}
			{xLabel ? <text x={R + 8} y={xLabelBelow ? B + 66 : B - 14} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28, fill: INK_SOFT}}>{xLabel}</text> : null}
			{yLabel ? <text x={L + 12} y={T + 4} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28, fill: INK_SOFT}}>{yLabel}</text> : null}
			{level ? <g opacity={prog(f, level.at, 12)}><line x1={L} x2={R} y1={Y(level.v)} y2={Y(level.v)} stroke={MATH_EXCLUDED} strokeWidth={4} strokeDasharray="14 10" /><text x={level.left ? L - 10 : L + 10} y={Y(level.v) + (level.left ? 10 : level.below ? 38 : -12)} textAnchor={level.left ? 'end' : 'start'} style={txt(level.left ? 28 : 30, INK)} stroke={CARD} strokeWidth={6} paintOrder="stroke">{level.label}</text></g> : null}
			<path d={d} stroke={INK} strokeWidth={4} fill="none" opacity={0.6} />
			{pts.slice(1).map((p, i) => {
				const a = pts[i], ar = prog(f, arcAt[i] ?? 99999, 16);
				if (ar <= 0.001) return null;
				const x1 = X(a.t), y1 = Y(fn(a.t)) + s * 18, x2 = X(p.t), y2 = Y(fn(p.t)) + s * 18;
				const cx = (x1 + x2) / 2, cy = (y1 + y2) / 2 + s * (Math.min(Math.abs(y2 - y1) / 2, 30) + 44);
				const ax = 0.25 * x1 + 0.5 * cx + 0.25 * x2, ay = 0.25 * y1 + 0.5 * cy + 0.25 * y2;
				const ux = x2 - cx, uy = y2 - cy, ul = Math.hypot(ux, uy), hx = ux / ul, hy = uy / ul;
				const head = (r: number) => `M${x2},${y2} L${x2 - 18 * (hx * Math.cos(r) - hy * Math.sin(r))},${y2 - 18 * (hx * Math.sin(r) + hy * Math.cos(r))}`;
				return (
					<g key={i}>
						<path d={`M${x1},${y1} Q${cx},${cy} ${x2},${y2}`} stroke={MATH_BLUE} strokeWidth={5} fill="none" strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - ar} />
						<path d={`${head(0.5)} ${head(-0.5)}`} stroke={MATH_BLUE} strokeWidth={5} fill="none" strokeLinecap="round" opacity={ar >= 0.95 ? 1 : 0} />
						<text x={ax} y={ay + (s > 0 ? 40 : -14)} textAnchor="middle" opacity={ar} style={txt(arcSize, MATH_BLUE, true)} stroke={CARD} strokeWidth={6} paintOrder="stroke">{factor}</text>
					</g>
				);
			})}
			{pts.map((p, i) => {const lb = p.lab ?? ptLab; return <g key={i}><circle cx={X(p.t)} cy={Y(fn(p.t))} r={11} fill={INK} stroke={CARD} strokeWidth={4} />{p.label ? <text x={X(p.t) + lb.dx} y={Y(fn(p.t)) + lb.dy} textAnchor={lb.anchor ?? 'start'} style={txt(size, INK)} stroke={CARD} strokeWidth={6} paintOrder="stroke">{p.label}</text> : null}</g>;})}
			{cross ? <g opacity={prog(f, cross.at, 12)}><circle cx={X(cross.t)} cy={Y(fn(cross.t))} r={24} fill="none" stroke="#287347" strokeWidth={5} /><text x={X(cross.t) + cross.lab.dx} y={Y(fn(cross.t)) + cross.lab.dy} textAnchor={cross.lab.anchor ?? 'start'} style={txt(36, '#287347', true)} stroke={CARD} strokeWidth={6} paintOrder="stroke">{cross.label}</text></g> : null}
			{extra ? (() => {
				const o = prog(f, extra.at, 12);
				const px = X(extra.t), py = Y(fn(extra.t)), ya = Y(extra.between[0]), yb = Y(extra.between[1]);
				return <g opacity={o}>
					<path d={`M${px + 26},${ya} h14 V${yb} h-14`} stroke="#287347" strokeWidth={4} fill="none" />
					<circle cx={px} cy={py} r={12} fill="#287347" stroke={CARD} strokeWidth={4} />
					<text x={px + extra.lab.dx} y={py + extra.lab.dy} textAnchor={extra.lab.anchor ?? 'start'} style={txt(36, '#287347', true)} stroke={CARD} strokeWidth={6} paintOrder="stroke">{extra.label}</text>
				</g>;
			})() : null}
		</svg>
	);
};
