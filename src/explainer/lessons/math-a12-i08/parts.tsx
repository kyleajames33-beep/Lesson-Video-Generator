// Lesson parts for math-a12-i08 (Revision 4: the accumulation function and the Fundamental Theorem; a shopping-centre
// car park filling and emptying), on the maths studio kit and i06's parts (imported read-only). Lesson-local rigs:
// - CarParkRig: the painted car park entrance (brief 238 plate; sign face [881, 834, 1401, 1014] and entry-lane
//   ground centre (1182, 1260) in file pixels) with a coded counter on the sign and the kit NetFlowArrow at the lane
//   (in: teal, pointing into the building; out: amber, pointing out), both from the same x as the graphs;
// - PairView: the paired view in the design's colour roles (A blue above, f = 3 − t teal below with the signed fill
//   from the start a to the amber marker x). The kit StudioAccumulationTracer draws both curves in ink and puts x in
//   blue, so it is not used here (reported as a kit issue);
// - Rows: working rows, the newest at working size and earlier rows at 34 px;
// - Lims and Int: square-bracket limits and integrals with stacked limits (no Unicode sub/superscript letters).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, prog} from '../../kit';
import {AreaFillLayer, CARD, FrameSvg, MATH_AMBER, MATH_BLUE, MATH_GRADIENT, MATH_TEAL, NetFlowArrow, StudioIntegralNotation, StudioPlot, SvgPlate, fnPath, makePlot, plateMap, smooth, usePlatePreload, vis} from '../../math/studio';
import type {PlateSpec, PlotMap, PlotTick} from '../../math/studio';

export {AMB, AnswerBox, Attempt, BLUE, BoxCard, Chip, FramedCard, GREEN, GREY, Line, MiniPlot, PLabel, QAxes, RED, V, VIOLET} from '../math-a12-i06/parts';
export {Rt} from '../math-a12-i02/parts';
export {Tick} from '../math-a12-i05/parts';

export const TEAL = MATH_TEAL;
export const ABLUE = MATH_BLUE;
export const AMBER = MATH_AMBER;
export const GRAD = MATH_GRADIENT;
export const AMBER_STROKE = '#d18f1f';

// ---------- the models (design author notes a to h) ----------
export const f = (t: number) => 3 - t;
export const A = (x: number) => 3 * x - (x * x) / 2;
export const cars = (x: number) => Math.round(100 * A(x));
/** Counting from 10 am (start t = 1). */
export const A1 = (x: number) => A(x) - 2.5;
export const sq = (t: number) => t * t;
/** The graphing application's A for t²: 400 equal midpoint strips from 0 to x (author note g2). */
export const Anum = (x: number) => {
	const n = 400, h = x / n;
	let s = 0;
	for (let i = 0; i < n; i++) s += sq((i + 0.5) * h) * h;
	return s;
};
/** Clock time x hours after 9 am. */
export const clock = (x: number) => {
	const mins = Math.round((9 + Math.max(0, x)) * 60);
	const hh = Math.floor(mins / 60), mm = mins % 60;
	if (hh === 12 && mm === 0) return 'noon';
	const h12 = hh > 12 ? hh - 12 : hh;
	return `${h12}:${String(mm).padStart(2, '0')} ${hh < 12 ? 'am' : 'pm'}`;
};
{
	const near = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) < tol;
	const chord = (h: number) => (A(1 + h) - A(1)) / h;
	const checks: [string, boolean][] = [
		['A by shapes', near(A(1), 2.5) && near(A(2), 4) && near(A(3), 4.5) && near(A(4), 4) && near(A(6), 0) && near(((3 + 2) / 2) * 1, 2.5) && near(((3 + 1) / 2) * 2, 4) && near(0.5 * 3 * 3, 4.5) && near(4.5 - 0.5, 4)],
		['cars', cars(3) === 450 && cars(2) === 400 && cars(1) === 250 && cars(6) === 0],
		['chords', near(chord(0.5), 1.75) && near(chord(0.1), 1.95) && near(chord(0.01), 1.995)],
		['derivative', near((A(2.3 + 1e-6) - A(2.3 - 1e-6)) / 2e-6, f(2.3), 1e-6)],
		['start 10 am', near(A1(2), 1.5) && near(A(1), 2.5) && near(Math.round(100 * A1(2)), 150)],
		['curve', near(Anum(2), 8 / 3, 2e-5) && near(Anum(1.3), 1.3 ** 3 / 3, 2e-5)],
		['payoff', near(8 / 3 - 0, 2.6666667, 1e-6) && near(Math.sin(Math.PI / 2) - Math.sin(0), 1) && near(12 * 8 - 64 - 0, 32)],
		['A1 attempt', near(Math.sqrt(1 + 8), 3) && near((3 * 4) / (2 * Math.sqrt(9)), 2)],
		['A2 attempt', 27 - 1 === 26 && 32 - 6 === 26],
		['handoff', near(1 / 3 - -8 / 3, 3)],
	];
	const bad = checks.filter(k => !k[1]).map(k => k[0]);
	if (bad.length) throw new Error('math-a12-i08 numbers: ' + bad.join(', '));
}

// ---------- notation ----------
const textLen = (n: React.ReactNode) => (typeof n === 'string' || typeof n === 'number' ? String(n).length : 2);
/** [F(x)] with the upper limit at the bracket's top right and the lower limit at its bottom right. */
export const Lims: React.FC<{lo: React.ReactNode; hi: React.ReactNode; children: React.ReactNode}> = ({lo, hi, children}) => {
	const pad = 0.12 + 0.3 * Math.max(textLen(lo), textLen(hi));
	return <span style={{whiteSpace: 'pre'}}>[{children}]<span style={{position: 'relative', display: 'inline-block', width: `${pad}em`, height: '1em', verticalAlign: '-0.12em'}}>
		<span style={{position: 'absolute', left: '0.06em', top: '-0.42em', fontSize: '0.55em', lineHeight: 1}}>{hi}</span>
		<span style={{position: 'absolute', left: '0.06em', bottom: '-0.22em', fontSize: '0.55em', lineHeight: 1}}>{lo}</span>
	</span></span>;
};
/** ∫ with stacked limits, integrand in `color` (ink by default). */
export const Int: React.FC<{lo?: React.ReactNode; hi?: React.ReactNode; v?: string; color?: string; children: React.ReactNode}> = ({lo, hi, v = 'x', color = INK, children}) => <StudioIntegralNotation integrand={children} variable={v} lower={lo} upper={hi} integrandColor={color} />;
export const Te: React.FC<{children: React.ReactNode}> = ({children}) => <span style={{color: TEAL}}>{children}</span>;
export const Bu: React.FC<{children: React.ReactNode}> = ({children}) => <span style={{color: ABLUE}}>{children}</span>;
export const Am: React.FC<{children: React.ReactNode}> = ({children}) => <span style={{color: AMBER}}>{children}</span>;
export const Vi: React.FC<{children: React.ReactNode}> = ({children}) => <span style={{color: GRAD}}>{children}</span>;

// ---------- working rows ----------
/** Rows stacked down from (x, y): the newest at `size`, earlier rows shrink to `old` (full ink, slightly dimmed). */
export const Rows: React.FC<{x: number; y: number; rows: readonly {at: number; c: React.ReactNode; out?: number}[]; size?: number; old?: number; w?: number}> = ({x, y, rows, size = 50, old = 34, w}) => {
	const fr = useCurrentFrame();
	let yy = y;
	return <>{rows.map((r, i) => {
		const o = vis(fr, r.at, r.out, 12);
		if (o <= 0.001) return null;
		const next = rows.slice(i + 1).find(q => q.out === undefined || fr < q.out);
		const k = next ? smooth(prog(fr, next.at, 14)) : 0;
		const s = size + (old - size) * k;
		const top = yy;
		yy += s * 1.32 * Math.min(1, o * 1.5);
		return <div key={i} style={{position: 'absolute', left: x, top, width: w, opacity: o * (1 - 0.18 * k), transform: `translateY(${(1 - prog(fr, r.at, 12)) * 10}px)`, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: s, color: INK, whiteSpace: 'pre', lineHeight: 1.2}}>{r.c}</div>;
	})}</>;
};

// ---------- the car park ----------
export const PARK: PlateSpec = {src: 'assets/maths/ma12-car-park-entry-v1.png', nat: [2400, 1500], box: [224, 142, 2169, 1377]};
const SIGN = [881, 834, 1401, 1014] as const;
const LANE = [1182, 1350] as const; // in front of the gate (lane ground centre 1182, 1260); the arrow ends below the sign
export const parkH = (w: number) => (w * (PARK.box[3] - PARK.box[1])) / (PARK.box[2] - PARK.box[0]);
/** The plate at (x, y) of width w: counter on the sign, caption above, the net-flow arrow at the entry lane. */
export const CarParkRig: React.FC<{x: number; y: number; w: number; count: number; rate: number; caption?: string; captionB?: {text: string; p: number}; ring?: {o: number; color?: string; q?: boolean}; arrow?: boolean; at?: number; out?: number}> = ({x, y, w, count, rate, caption = 'extra cars since 9 am', captionB, ring, arrow = true, at = -30, out}) => {
	usePlatePreload([PARK.src]);
	const fr = useCurrentFrame();
	const o = vis(fr, at, out, 14);
	if (o <= 0.001) return null;
	const m = plateMap(PARK, x, y, w);
	const [s0x, s0y] = m.at(SIGN[0], SIGN[1]), [s1x, s1y] = m.at(SIGN[2], SIGN[3]);
	const [lx, ly] = m.at(LANE[0], LANE[1]);
	const sh = s1y - s0y;
	const pB = captionB ? captionB.p : 0;
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o}}>
			<FrameSvg>
				<SvgPlate plate={PARK} x={x} y={y} w={w} />
				<text x={(s0x + s1x) / 2} y={(s0y + s1y) / 2 + sh * 0.3} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: sh * 0.82, fill: '#ffd36b', fontVariantNumeric: 'tabular-nums'}}>{Math.max(0, Math.round(count))}</text>
				{ring && ring.o > 0.01 ? <g opacity={ring.o}><ellipse cx={(s0x + s1x) / 2} cy={(s0y + s1y) / 2} rx={(s1x - s0x) * 0.66} ry={sh * 0.95} fill="none" stroke={ring.color ?? '#2e7d4f'} strokeWidth={6} />{ring.q ? <text x={s1x + (s1x - s0x) * 0.2} y={(s0y + s1y) / 2 + 26} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 72, fill: '#7a4600'}} stroke={CARD} strokeWidth={8} paintOrder="stroke">?</text> : null}</g> : null}
				<text x={x + w / 2} y={y - 16} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, fill: ABLUE}} opacity={1 - pB}>{caption}</text>
				{captionB ? <text x={x + w / 2} y={y - 16} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, fill: ABLUE}} opacity={pB}>{captionB.text}</text> : null}
			</FrameSvg>
			{arrow ? <NetFlowArrow x={lx} y={ly} value={rate} scale={16} maxWidth={46} length={(1350 - 1050) * m.s} positive={{role: 'b', label: 'in'}} negative={{role: 'k', label: 'out'}} at={-30} /> : null}
		</div>
	);
};

// ---------- the paired view ----------
export type PairG = {x: number; y: number; w: number; hTop: number; hBot: number; gap: number; wx: [number, number]; yTop: [number, number]; yBot: [number, number]};
export const PG: PairG = {x: 40, y: 150, w: 1060, hTop: 400, hBot: 380, gap: 14, wx: [-0.3, 6.3], yTop: [-0.6, 5.2], yBot: [-3.5, 3.5]};
const HOURS = [1, 2, 3, 4, 5, 6];
export const topMap = (g: PairG = PG) => makePlot(g.x, g.y, g.w, g.hTop, {x: g.wx, y: g.yTop});
export const botMap = (g: PairG = PG) => makePlot(g.x, g.y + g.hTop + g.gap, g.w, g.hBot, {x: g.wx, y: g.yBot});
/** Teal f with the signed fill from the start a to the amber marker x; a dashed amber line joins the marker to A's point. */
export const PairView: React.FC<{
	g?: PairG; X: number; a?: number; fn?: (t: number) => number; Afn?: (x: number) => number;
	curve?: {from: number; to: number} | null; shift?: number; ghost?: number; dots?: readonly {x: number; o: number}[]; point?: number; marker?: number; link?: boolean;
	topLabel?: string; botLabel?: string; xLabel?: string; xTicks?: readonly (number | PlotTick)[]; yTopTicks?: readonly (number | PlotTick)[]; yBotTicks?: readonly (number | PlotTick)[];
	topKids?: (m: PlotMap) => React.ReactNode; botKids?: (m: PlotMap) => React.ReactNode; at?: number; out?: number; topAt?: number; topO?: number;
}> = ({g = PG, X, a = 0, fn = f, Afn = A, curve = {from: 0, to: 6}, shift = 0, ghost = 0, dots = [], point = 1, marker = 1, link = true, topLabel = 'A(x): extra cars (hundreds)', botLabel = 'net rate f(t) = 3 − t (hundred cars per hour)', xLabel = 't (hours after 9 am)', xTicks = HOURS, yTopTicks = [2, 4], yBotTicks = [-3, 3], topKids, botKids, at = -30, out, topAt, topO = 1}) => {
	const fr = useCurrentFrame();
	const yb = g.y + g.hTop + g.gap;
	const Ash = (x: number) => Afn(x) + shift;
	const tm = topMap(g), bm = botMap(g);
	const lo = vis(fr, at, out, 14) * (topAt === undefined ? 1 : prog(fr, topAt, 14)) * topO;
	return (
		<>
			<StudioPlot x={g.x} y={g.y} width={g.w} height={g.hTop} window={{x: g.wx, y: g.yTop}} xTicks={xTicks} yTicks={yTopTicks} xLabel="" yLabel={topLabel} at={topAt ?? at} out={out} opacity={topO}>
				{m => <>
					<g clipPath={m.clip}>
						{ghost > 0.01 ? <path d={fnPath(m, Afn, g.wx[0], g.wx[1])} stroke="#8a8378" strokeWidth={4.5} strokeDasharray="12 10" fill="none" opacity={ghost} /> : null}
						{curve && curve.to > curve.from ? <path d={fnPath(m, Ash, curve.from, curve.to)} stroke={ABLUE} strokeWidth={7} fill="none" strokeLinecap="round" /> : null}
					</g>
					{dots.map((d, i) => {if (d.o <= 0.01) return null; const [px, py] = m.p(d.x, Ash(d.x)); return <circle key={i} cx={px} cy={py} r={13} fill={ABLUE} stroke={CARD} strokeWidth={4} opacity={d.o} />;})}
					{point > 0.01 ? (() => {const [px, py] = m.p(X, Ash(X)); return <circle cx={px} cy={py} r={14} fill={CARD} stroke={ABLUE} strokeWidth={6} opacity={point} />;})() : null}
					{topKids ? topKids(m) : null}
				</>}
			</StudioPlot>
			<StudioPlot x={g.x} y={yb} width={g.w} height={g.hBot} window={{x: g.wx, y: g.yBot}} xTicks={xTicks} yTicks={yBotTicks} xLabel={xLabel} yLabel={botLabel} at={at} out={out}>
				{m => <>
					<AreaFillLayer m={m} fn={fn} a={Math.min(a, X)} to={Math.max(a, X)} signed />
					<g clipPath={m.clip}><path d={fnPath(m, fn, g.wx[0], g.wx[1])} stroke={TEAL} strokeWidth={7} fill="none" strokeLinecap="round" /></g>
					{marker > 0.01 ? (() => {const [px, py] = m.p(X, fn(X)), [, ay] = m.p(X, 0); return <g opacity={marker}><line x1={px} x2={px} y1={ay} y2={py} stroke={AMBER_STROKE} strokeWidth={5} /><circle cx={px} cy={ay} r={13} fill={AMBER_STROKE} stroke={CARD} strokeWidth={4} /><text x={px + 16} y={ay - 16} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: AMBER}} stroke={CARD} strokeWidth={7} paintOrder="stroke">x</text></g>;})() : null}
					{botKids ? botKids(m) : null}
				</>}
			</StudioPlot>
			{link && marker > 0.01 && lo > 0.01 ? <FrameSvg style={{opacity: lo * marker}}>{(() => {const [px, py] = tm.pf(X, Math.max(g.yTop[0], Math.min(g.yTop[1], Ash(X)))), [, qy] = bm.pf(X, fn(X)); return <line x1={px} y1={py + 14} x2={px} y2={qy} stroke={AMBER_STROKE} strokeWidth={3} strokeDasharray="6 9" opacity={0.75} />;})()}</FrameSvg> : null}
		</>
	);
};

/** A violet tangent stub of slope s at (X, Y) in a plot. */
export const Stub: React.FC<{m: PlotMap; X: number; Y: number; s: number; o?: number; hl?: number; color?: string; dash?: string}> = ({m, X, Y, s, o = 1, hl = 110, color = GRAD, dash}) => {
	if (o <= 0.01) return null;
	const [px, py] = m.p(X, Y), vx = m.sx, vy = -s * m.sy, l = Math.hypot(vx, vy);
	return <g opacity={o}><line x1={px - (vx / l) * hl} y1={py - (vy / l) * hl} x2={px + (vx / l) * hl} y2={py + (vy / l) * hl} stroke={color} strokeWidth={6} strokeDasharray={dash} strokeLinecap="round" /><circle cx={px} cy={py} r={11} fill={color} stroke={CARD} strokeWidth={4} /></g>;
};
/** A glowing point (teal by default). */
export const Glow: React.FC<{m: PlotMap; X: number; Y: number; o: number; color?: string}> = ({m, X, Y, o, color = TEAL}) => {
	if (o <= 0.01) return null;
	const [px, py] = m.p(X, Y);
	return <g opacity={o}><circle cx={px} cy={py} r={26} fill={color} opacity={0.22} /><circle cx={px} cy={py} r={13} fill={color} stroke={CARD} strokeWidth={4} /></g>;
};
