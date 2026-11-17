// Lesson parts for math-a12-t01 (Revision 4: shifts and scales of trig graphs; a marker buoy riding ocean swell off a
// surf beach), on the maths studio kit. Board parts (Row, Hand, Chip, BoxCard, AnswerBox, Task, Slip, FramedCard)
// come read-only from ../math-a12-f01/parts and QStrip from ../math-a12-f04/parts. Lesson-local rigs (t02 and t03
// import them read-only):
// - Swell: the coded travelling swell over the painted beach strip, with painted buoys riding it at their own
//   places (the yellow buoy at S0 reads c + k cos(a(t + b)), so the beach and the graph share one state);
// - TPlot: y = k f(a(x + b)) + c on a StudioPlot (sin, cos or tan; tan breaks at its moving asymptotes), with the
//   dashed grey parent ghost and a render prop for marks;
// - Dials and FeatBoard: the four role-coloured sliders and the feature readout, from the same state;
// - DayStage: the daylight stage (skyline, sun on its day-arc, the year graph with its month strip): scene 14's
//   handoff and t02's anchor.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT} from '../../kit';
import {CARD, CARD_SHADOW, FrameSvg, LiveReadoutBoard, MATH_ROLES, makePlot, ParameterSlider, StudioPlot, SvgPlate, fnPath, niceNum, piLabel, piTicks, plateHeight, transformFeatures, vis} from '../../math/studio';
import type {PlateSpec, PlotMap, PlotTick, RoleKey, TransformParams} from '../../math/studio';

export {AnswerBox, BoxCard, BROWN, Chip, FramedCard, GREEN, Hand, RED, Row, Slip, Task} from '../math-a12-f01/parts';
export {QStrip} from '../math-a12-f04/parts';

// ---------- colour roles (fixed for t01 to t03) ----------
export const KR = MATH_ROLES.k, AR = MATH_ROLES.a, BR = MATH_ROLES.b, CR = MATH_ROLES.mid, GOOD = MATH_ROLES.answer;
export const GREY = '#6b6358';
const span = (c: string) => {
	const S: React.FC<{children: React.ReactNode}> = ({children}) => <span style={{color: c}}>{children}</span>;
	return S;
};
export const Kc = span(KR.ink), Ac = span(AR.ink), Bc = span(BR.ink), Cc = span(CR.ink), Gc = span(GOOD.ink), Gy = span(GREY);

// ---------- plates (measured sidecars: work/brief240) ----------
/** Beach strip, cropped to rows 290 to 724 (the sand and the sea line at row 560); never stretched. */
export const BEACH: PlateSpec = {src: 'assets/maths/ma12-surf-beach-strip-v1.png', nat: [2172, 724], box: [0, 290, 2172, 724]};
export const BUOY: PlateSpec = {src: 'assets/maths/ma12-marker-buoy-v1.png', nat: [1024, 1536], box: [198, 127, 825, 1421]};
export const BUOY_OR: PlateSpec = {src: 'assets/maths/ma12-marker-buoy-orange-v1.png', nat: [1024, 1536], box: [198, 127, 825, 1421]};
/** City skyline strip, cropped to rows 380 to 724 (ground row 711). */
export const SKYLINE: PlateSpec = {src: 'assets/maths/ma12-city-skyline-strip-v1.png', nat: [2172, 724], box: [0, 380, 2172, 724]};
export const SUN: PlateSpec = {src: 'assets/physics/phys-y11-sun-v1.png', nat: [1254, 1254], box: [75, 90, 1152, 1165]};
export const T01_PLATES = [BEACH, BUOY, BUOY_OR, SKYLINE, SUN];
const SEA_ROW = 560, WATERLINE = 876, BUOY_CX = 512;

// ---------- the swell ----------
export type TP = TransformParams;
export const P0: TP = {k: 1, a: 1, b: 0, c: 0};
/** The yellow buoy's place on the strip (fraction), the swell's travel time across the strip (s), the orange buoy π/3 s later. */
export const S0 = 0.1, TRAVEL = 6, S1 = S0 + Math.PI / 3 / TRAVEL;
const taper = (s: number) => (s <= 0.42 ? 1 : s >= 0.62 ? 0 : 1 - ((s - 0.42) / 0.2) ** 2 * (3 - 2 * ((s - 0.42) / 0.2)));
/** Height (m above calm water) of the swell at strip fraction s, time t; at s = S0 it is c + k cos(a(t + b)). */
export const swellH = (p: TP, t: number, s: number) => p.c + p.k * taper(s) * Math.cos(p.a * (t + p.b - (s - S0) * TRAVEL));
export type BuoySpec = {s: number; plate: PlateSpec; o?: number; ring?: number; tag?: string};
/**
 * The coded swell across the painted beach strip (schematic, not to scale): a translucent sea whose surface
 * travels towards the beach, the dashed calm-water line, and painted buoys sitting at their waterline on the surface.
 */
export const Swell: React.FC<{x: number; y: number; w: number; t: number; p: TP; buoys: readonly BuoySpec[]; mPx?: number; bw?: number; calm?: number; o?: number}> = ({x, y, w, t, p, buoys, mPx = w * 0.045, bw = w * 0.1, calm = 1, o = 1}) => {
	if (o <= 0.001) return null;
	const s = w / 2172, h = plateHeight(BEACH, w), seaY = y + (SEA_ROW - BEACH.box[1]) * s, bot = Math.max(y + h, seaY + 4.6 * mPx);
	const surf = (f: number) => seaY - swellH(p, t, f) * mPx;
	const n = 90, pts: string[] = [];
	for (let i = 0; i <= n; i++) {const f = (i / n) * 0.66; pts.push(`${(x + f * w).toFixed(1)},${surf(f).toFixed(1)}`);}
	const gid = `sw${Math.round(x)}${Math.round(y)}${Math.round(w)}`;
	const bs = bw / (BUOY.box[2] - BUOY.box[0]);
	return <FrameSvg style={{opacity: o}}>
		<defs><linearGradient id={gid} x1="0" x2="1" y1="0" y2="0"><stop offset="0" stopColor="#5f9fb8" stopOpacity={0.62} /><stop offset="0.6" stopColor="#5f9fb8" stopOpacity={0.55} /><stop offset="1" stopColor="#5f9fb8" stopOpacity={0} /></linearGradient></defs>
		<SvgPlate plate={BEACH} x={x} y={y} w={w} />
		{buoys.map((b, i) => {const bx = x + b.s * w, by = surf(b.s); return (b.o ?? 1) > 0.01 ? <g key={i} opacity={b.o ?? 1}><SvgPlate plate={b.plate} x={bx - (BUOY_CX - BUOY.box[0]) * bs} y={by - (WATERLINE - BUOY.box[1]) * bs} w={bw} /></g> : null;})}
		<path d={`M${x},${bot} L${pts.join(' L')} L${x + 0.66 * w},${bot} Z`} fill={`url(#${gid})`} />
		<rect x={x} y={seaY} width={w} height={bot - seaY} fill="#5f9fb8" opacity={0.28} />
		<path d={`M${pts.slice(0, 70).join(' L')}`} fill="none" stroke="#2f6f88" strokeWidth={Math.max(2.5, w / 320)} strokeLinejoin="round" />
		<g opacity={calm}><line x1={x} x2={x + w} y1={seaY} y2={seaY} stroke={GREY} strokeWidth={3} strokeDasharray="12 9" /></g>
		{buoys.map((b, i) => {
			if (!b.ring || b.ring < 0.01) return null;
			const bx = x + b.s * w, by = surf(b.s);
			return <g key={'r' + i} opacity={b.ring}><circle cx={bx} cy={by - bw * 0.75} r={bw * 0.85} fill="none" stroke={INK} strokeWidth={5} />
				{b.tag ? <text x={bx} y={by + bw * 1.05} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, fill: INK}} stroke={CARD} strokeWidth={7} paintOrder="stroke">{b.tag}</text> : null}</g>;
		})}
	</FrameSvg>;
};
/** Frame y of calm water on a Swell strip at (y, w) (for labels). */
export const calmY = (y: number, w: number) => y + (SEA_ROW - BEACH.box[1]) * (w / 2172);

// ---------- the transformed curve ----------
export type Fam = 'cos' | 'sin' | 'tan';
const base = (fam: Fam) => (fam === 'cos' ? Math.cos : fam === 'sin' ? Math.sin : Math.tan);
export const tf = (p: TP, fam: Fam = 'cos') => (x: number) => p.k * base(fam)(p.a * (x + p.b)) + p.c;
/** Vertical asymptotes of k tan(a(x + b)) + c inside [lo, hi]. */
export const tanAsym = (p: TP, lo: number, hi: number) => {
	const out: number[] = [];
	for (let n = -12; n <= 12; n++) {const X = (Math.PI / 2 + n * Math.PI) / p.a - p.b; if (X > lo && X < hi) out.push(X);}
	return out;
};
export const PI = Math.PI;
export const WMAIN = {x: [-PI - 0.2, 2 * PI + 0.2] as [number, number], y: [-4.5, 3.5] as [number, number]};
export const XT: PlotTick[] = piTicks(-1, 2, 2);
export const YT = [-4, -3, -2, -1, 1, 2, 3];
/**
 * y = k f(a(x + b)) + c in ink over the dashed grey parent ghost, on a StudioPlot. `drawTo` draws the curve only up
 * to a displayed x (a pen). Tan breaks at its asymptotes, which are drawn dashed grey and move with the transform.
 */
export const TPlot: React.FC<{x: number; y: number; w: number; h: number; p: TP; fam?: Fam; win?: {x: [number, number]; y: [number, number]}; ghost?: number; ghostFam?: Fam; ghostP?: TP; curveO?: number; drawFrom?: number; drawTo?: number;
	xTicks?: readonly (number | PlotTick)[]; yTicks?: readonly (number | PlotTick)[]; xLabel?: string; yLabel?: string; at?: number; out?: number; color?: string; width?: number; children?: (m: PlotMap) => React.ReactNode; under?: (m: PlotMap) => React.ReactNode}> =
	({x, y, w, h, p, fam = 'cos', win = WMAIN, ghost = 1, ghostFam, ghostP = P0, curveO = 1, drawFrom, drawTo, xTicks = XT, yTicks = YT, xLabel = 'x', yLabel = 'y', at = -30, out, color = INK, width = 7, children, under}) => {
		const gf = ghostFam ?? fam;
		const asy = fam === 'tan' ? tanAsym(p, win.x[0], win.x[1]) : [];
		const gAsy = gf === 'tan' ? tanAsym(ghostP, win.x[0], win.x[1]) : [];
		const lo = drawFrom ?? win.x[0], hi = drawTo ?? win.x[1];
		return <StudioPlot x={x} y={y} width={w} height={h} window={win} xTicks={xTicks} yTicks={yTicks} xLabel={xLabel} yLabel={yLabel} at={at} out={out}>
			{m => <>
				{under ? under(m) : null}
				<g clipPath={m.clip}>
					{fam === 'tan' ? asy.map(X => {const [px] = m.p(X, 0); return <line key={X} x1={px} x2={px} y1={m.box.top} y2={m.box.top + m.box.height} stroke={GREY} strokeWidth={3} strokeDasharray="12 9" />;}) : null}
					{ghost > 0.01 ? <path d={fnPath(m, tf(ghostP, gf), win.x[0], win.x[1], 400, gAsy)} stroke="#9a9184" strokeWidth={5} strokeDasharray="14 10" fill="none" opacity={ghost} /> : null}
					{curveO > 0.01 && hi > lo ? <path d={fnPath(m, tf(p, fam), lo, hi, 500, asy)} stroke={color} strokeWidth={width} fill="none" strokeLinejoin="round" strokeLinecap="round" opacity={curveO} /> : null}
				</g>
				{children ? children(m) : null}
			</>}
		</StudioPlot>;
	};

// ---------- small SVG marks (plot-local coordinates) ----------
export const Ring: React.FC<{at: [number, number]; o: number; r?: number; color?: string}> = ({at: [cx, cy], o, r = 20, color = INK}) => (o <= 0.01 ? null : <circle cx={cx} cy={cy} r={r} fill="none" stroke={color} strokeWidth={6} opacity={o} />);
export const Dot: React.FC<{at: [number, number]; o: number; r?: number; color?: string; hollow?: boolean}> = ({at: [cx, cy], o, r = 12, color = INK, hollow}) => (o <= 0.01 ? null : <circle cx={cx} cy={cy} r={r} fill={hollow ? CARD : color} stroke={hollow ? color : CARD} strokeWidth={hollow ? 5 : 4} opacity={o} />);
export const Arw: React.FC<{from: [number, number]; to: [number, number]; o: number; color?: string; width?: number; dash?: string}> = ({from, to, o, color = INK, width = 6, dash}) => {
	if (o <= 0.01) return null;
	const ang = Math.atan2(to[1] - from[1], to[0] - from[0]), L = 20;
	const h1 = [to[0] - L * Math.cos(ang - 0.45), to[1] - L * Math.sin(ang - 0.45)], h2 = [to[0] - L * Math.cos(ang + 0.45), to[1] - L * Math.sin(ang + 0.45)];
	return <g opacity={o} stroke={color} strokeWidth={width} fill="none" strokeLinecap="round" strokeLinejoin="round">
		<line x1={from[0]} y1={from[1]} x2={to[0]} y2={to[1]} strokeDasharray={dash} /><path d={`M${h1[0]},${h1[1]} L${to[0]},${to[1]} L${h2[0]},${h2[1]}`} />
	</g>;
};
export const Lb: React.FC<{at: [number, number]; o: number; children: React.ReactNode; color?: string; size?: number; anchor?: 'start' | 'middle' | 'end'; hand?: boolean}> = ({at: [x, y], o, children, color = INK, size = 34, anchor = 'middle', hand = false}) => (o <= 0.01 ? null :
	<text x={x} y={y} textAnchor={anchor} opacity={o} style={{fontFamily: hand ? FONT_HAND : FONT_DISPLAY, fontWeight: hand ? 700 : 800, fontSize: size, fill: color}} stroke={CARD} strokeWidth={8} paintOrder="stroke">{children}</text>);
/** A horizontal bracket over [x0, x1] at height y (plot-local px) with a label above; `arrow` marks a run past the right end. */
export const HBracket: React.FC<{x0: number; x1: number; y: number; o: number; color: string; label?: string; arrow?: boolean; size?: number}> = ({x0, x1, y, o, color, label, arrow, size = 34}) => (o <= 0.01 ? null :
	<g opacity={o}>
		<path d={`M${x0},${y + 16} V${y} H${x1}${arrow ? '' : ` V${y + 16}`}`} fill="none" stroke={color} strokeWidth={5} />
		{arrow ? <path d={`M${x1 - 16},${y - 12} L${x1},${y} L${x1 - 16},${y + 12}`} fill="none" stroke={color} strokeWidth={5} /> : null}
		{label ? <text x={(x0 + x1) / 2} y={y - 14} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, fill: color}} stroke={CARD} strokeWidth={8} paintOrder="stroke">{label}</text> : null}
	</g>);
/** A vertical bracket at x from y0 to y1 (plot-local px), arrowheads when unbounded. */
export const VBracket: React.FC<{x: number; y0: number; y1: number; o: number; color?: string; label?: string; arrows?: boolean; side?: 'left' | 'right'; ly?: number}> = ({x, y0, y1, o, color = INK, label, arrows, side = 'right', ly}) => (o <= 0.01 ? null :
	<g opacity={o} stroke={color} strokeWidth={6} fill="none" strokeLinecap="round">
		<line x1={x} x2={x} y1={y0} y2={y1} />
		{arrows ? <><path d={`M${x - 14},${y0 + 18} L${x},${y0} L${x + 14},${y0 + 18}`} /><path d={`M${x - 14},${y1 - 18} L${x},${y1} L${x + 14},${y1 - 18}`} /></> : <><line x1={x - 14} x2={x + 14} y1={y0} y2={y0} /><line x1={x - 14} x2={x + 14} y1={y1} y2={y1} /></>}
		{label ? <text x={side === 'right' ? x + 22 : x - 22} y={ly ?? (y0 + y1) / 2 + 12} textAnchor={side === 'right' ? 'start' : 'end'} stroke={CARD} strokeWidth={8} paintOrder="stroke" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: color}}>{label}</text> : null}
	</g>);

// ---------- dials and the feature board ----------
type PK = keyof TP;
const PROLE: Record<PK, RoleKey> = {k: 'k', a: 'a', b: 'b', c: 'mid'};
const fmtA = (v: number) => (Math.abs(v - 0.5) < 0.004 ? '½' : niceNum(v, 2));
const SPEC: Record<PK, {min: number; max: number; ticks: {value: number; label: string}[]; format?: (v: number) => string}> = {
	k: {min: -3, max: 3, ticks: [{value: -3, label: '−3'}, {value: 0, label: '0'}, {value: 3, label: '3'}]},
	a: {min: 0.25, max: 3, ticks: [{value: 0.5, label: '½'}, {value: 1, label: '1'}, {value: 2, label: '2'}, {value: 3, label: '3'}], format: fmtA},
	b: {min: -PI, max: PI, ticks: [{value: -PI, label: '−π'}, {value: 0, label: '0'}, {value: PI, label: 'π'}], format: v => piLabel(v)},
	c: {min: -2, max: 2, ticks: [{value: -2, label: '−2'}, {value: 0, label: '0'}, {value: 2, label: '2'}]},
};
/** The four role-coloured sliders (k amber, a blue, b teal, c violet); `lit` glows, the rest dim. */
export const Dials: React.FC<{x: number; y: number; p: TP; lit?: readonly PK[]; only?: readonly PK[]; gap?: number; width?: number; at?: number; out?: number}> = ({x, y, p, lit = [], only = ['k', 'a', 'b', 'c'], gap = 100, width = 330, at = -30, out}) => (
	<>{only.map((n, i) => <div key={n} style={{position: 'absolute', inset: 0, opacity: lit.length && !lit.includes(n) ? 0.42 : 1}}>
		<ParameterSlider x={x} y={y + i * gap} width={width} symbol={n} role={PROLE[n]} value={p[n]} min={SPEC[n].min} max={SPEC[n].max} ticks={SPEC[n].ticks} format={SPEC[n].format} at={at} out={out} />
	</div>)}</>
);
export type FeatRow = 'amplitude' | 'period' | 'shift' | 'midline' | 'range';
/** Amplitude, period, horizontal shift, midline and range read from the same state as the curve (52 px numbers). */
export const FeatBoard: React.FC<{x: number; y: number; p: TP; rows?: readonly FeatRow[]; lit?: readonly PK[]; tan?: boolean; width?: number; at?: number; out?: number; box?: {row: FeatRow; at: number}}> = ({x, y, p, rows = ['amplitude', 'period', 'shift', 'midline', 'range'], lit = [], tan = false, width = 700, at = -30, out, box}) => {
	const ft = transformFeatures(p, tan ? PI : 2 * PI);
	const g = (n: PK) => (lit.includes(n) ? [0, 1e9] as [number, number] : undefined);
	const amp = niceNum(Math.round(ft.amplitude * 100) / 100);
	const sh = Math.abs(ft.shift) < 1e-6 ? '0' : `${ft.shift > 0 ? 'right' : 'left'} ${piLabel(Math.abs(ft.shift))}`;
	const r2 = (v: number) => niceNum(Math.round(v * 100) / 100);
	const mk = (r: FeatRow) => (box && box.row === r ? {kind: 'box' as const, at: box.at} : undefined);
	return <LiveReadoutBoard x={x} y={y} width={width} at={at} out={out} inline rows={rows.map(r =>
		r === 'amplitude' ? {label: 'amplitude', value: ft.amplitude, text: tan ? 'none' : amp, role: 'k' as RoleKey, glow: g('k'), mark: mk(r)}
		: r === 'period' ? {label: 'period', value: ft.period, text: piLabel(ft.period), role: 'a' as RoleKey, glow: g('a'), mark: mk(r)}
		: r === 'shift' ? {label: 'horizontal shift', value: ft.shift, text: sh, role: 'b' as RoleKey, glow: g('b'), mark: mk(r)}
		: r === 'midline' ? {label: 'midline', value: ft.midline, text: `y = ${r2(ft.midline)}`, role: 'mid' as RoleKey, glow: g('c'), mark: mk(r)}
		: {label: 'range', value: 0, text: tan ? 'all real y' : `${r2(ft.range[0])} ≤ y ≤ ${r2(ft.range[1])}`, mark: mk(r)})} />;
};

/** The equation strip (paper card, 48 px). */
export const EqStrip: React.FC<{x: number; y: number; at?: number; out?: number; size?: number; children: React.ReactNode}> = ({x, y, at = -30, out, size = 48, children}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.001) return null;
	return <div style={{position: 'absolute', left: x, top: y, opacity: o, background: CARD, borderRadius: 16, boxShadow: CARD_SHADOW, padding: '4px 24px 8px', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: INK, whiteSpace: 'pre'}}>{children}</div>;
};

// ---------- the daylight stage (scene 14; t02's anchor) ----------
export const dayD = (x: number) => 12 + 2 * Math.sin(x - PI / 6);
const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
/** The model's date for x (x = 0 about 24 August; a whole year is 2π). */
export const dayDate = (x: number) => {const d = new Date(Date.UTC(2026, 7, 24) + Math.round((x / (2 * PI)) * 365) * 86400000); return `${d.getUTCDate()} ${MON[d.getUTCMonth()]}`;};
export const DAY_WIN = {x: [-0.15, 2 * PI + 0.15] as [number, number], y: [9, 15] as [number, number]};
export const DAY_G = {x: 880, y: 170, w: 1010, h: 600};
export const DAY_XT: PlotTick[] = [{value: PI / 2, label: 'π/2'}, {value: PI, label: 'π'}, {value: 1.5 * PI, label: '3π/2'}, {value: 2 * PI, label: '2π'}];
const MONTHS: {x: number; label: string}[] = [['late Aug', 0], ['Nov', 2.33], ['Jan', 4.33], ['Mar', 6.33], ['May', 8.33], ['Jul', 10.33]].map(([l, m]) => ({label: l as string, x: ((m as number) / 12) * 2 * PI}));
export type DayProps = {
	/** Date cursor x (sun, readout and the drawn part of the curve), and how much of the curve is drawn (0..2π). */
	x: number; drawTo: number; readout?: number; line?: {level: number; o: number; label?: string}; rings?: readonly {x: number; y: number; o: number; label?: string}[];
	bracket?: number; months?: number; light?: readonly {x: number; o: number; label: string}[]; plates?: number; graph?: number; cursor?: number; dateRow?: boolean; children?: (m: PlotMap) => React.ReactNode;
};
/** The daylight stage: skyline and sun on a dashed day-arc whose length follows D, the year graph, the month strip and the domain bracket. */
export const DayStage: React.FC<DayProps> = ({x, drawTo, readout = 1, line, rings = [], bracket = 1, months = 1, light = [], plates = 1, graph = 1, cursor = 0, dateRow = true, children}) => {
	const D = dayD(x);
	const G = DAY_G;
	const sw = 820, sx = 40, sy = 640;
	const groundY = sy + (711 - SKYLINE.box[1]) * (sw / 2172) - 8;
	const hw = 30 + D * 27, hh = D * 16, cx = sx + sw / 2;
	const arc = `M${cx - hw},${groundY - 60} Q${cx},${groundY - 60 - 2 * hh} ${cx + hw},${groundY - 60}`;
	const sunW = 110, sunY = groundY - 60 - hh;
	return <>
		{plates > 0.01 ? <FrameSvg style={{opacity: plates}}>
			<path d={arc} fill="none" stroke="#c98a1b" strokeWidth={5} strokeDasharray="14 10" />
			<SvgPlate plate={SUN} x={cx - sunW / 2} y={sunY - sunW / 2} w={sunW} />
			<SvgPlate plate={SKYLINE} x={sx} y={sy} w={sw} />
		</FrameSvg> : null}
		{readout > 0.01 ? <LiveReadoutBoard x={60} y={180} width={560} at={-300} rows={[...(dateRow ? [{label: 'date (about)', value: x, text: dayDate(x)}] : []), {label: 'daylight D', value: D, digits: 1, unit: 'h', role: 'height' as RoleKey}]} /> : null}
		{graph > 0.01 ? <div style={{position: 'absolute', inset: 0, opacity: graph}}>
			<StudioPlot x={G.x} y={G.y} width={G.w} height={G.h} window={DAY_WIN} xTicks={DAY_XT} yTicks={[10, 11, 12, 13, 14]} xLabel="x" yLabel="D (hours)" at={-300}>
				{m => <>
					<g clipPath={m.clip}>{drawTo > 0.001 ? <path d={fnPath(m, dayD, 0, Math.min(2 * PI, drawTo), 400)} stroke={INK} strokeWidth={7} fill="none" strokeLinecap="round" /> : null}</g>
					{line && line.o > 0.01 ? (() => {const [a, ly] = m.p(DAY_WIN.x[0], line.level), [b] = m.p(DAY_WIN.x[1], line.level); return <g opacity={line.o}><line x1={a} x2={b} y1={ly} y2={ly} stroke={KR.stroke} strokeWidth={5} strokeDasharray="16 10" />
						<text x={b - 6} y={ly - 14} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: KR.ink}} stroke={CARD} strokeWidth={8} paintOrder="stroke">{line.label ?? `D = ${niceNum(line.level)}`}</text></g>;})() : null}
					{cursor > 0.01 ? (() => {const [px, py] = m.p(x, D), [, by] = m.p(x, 9); return <g opacity={cursor}><line x1={px} x2={px} y1={py} y2={by} stroke={GREY} strokeWidth={3} strokeDasharray="8 7" /><circle cx={px} cy={py} r={12} fill={INK} stroke={CARD} strokeWidth={4} /></g>;})() : null}
					{rings.map((r, i) => r.o > 0.01 ? <g key={i} opacity={r.o}><circle cx={m.p(r.x, r.y)[0]} cy={m.p(r.x, r.y)[1]} r={20} fill="none" stroke={INK} strokeWidth={6} />{r.label ? <Lb at={[m.p(r.x, r.y)[0], m.p(r.x, r.y)[1] - 34]} o={1} size={34}>{r.label}</Lb> : null}</g> : null)}
					{children ? children(m) : null}
				</>}
			</StudioPlot>
		</div> : null}
		{graph > 0.01 ? <DayMonths months={months} light={light} bracket={bracket * graph} /> : null}
	</>;
};
/** The grey month strip under the daylight graph, lit months, and the ink domain bracket "one year: 0 ≤ x ≤ 2π". */
const DayMonths: React.FC<{months: number; light: readonly {x: number; o: number; label: string}[]; bracket: number}> = ({months, light, bracket}) => {
	const G = DAY_G;
	// Same mapping as the StudioPlot (makePlot shares its geometry).
	const m = dayMap();
	const yM = G.y + G.h + 64, yB = G.y + G.h + 124;
	return <FrameSvg>
		<g opacity={months}>{MONTHS.map(mo => <text key={mo.label} opacity={1 - Math.max(0, ...light.map(l => (Math.abs(l.x - mo.x) < 1.1 ? l.o : 0)))} x={m.pf(mo.x, 9)[0]} y={yM} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28, fill: GREY}}>{mo.label}</text>)}</g>
		{light.map((l, i) => l.o > 0.01 ? <g key={i} opacity={l.o}><rect x={m.pf(l.x, 9)[0] - 78} y={yM - 32} width={156} height={44} rx={12} fill={KR.soft} stroke={KR.stroke} strokeWidth={3} /><text x={m.pf(l.x, 9)[0]} y={yM} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: KR.ink}}>{l.label}</text></g> : null)}
		{bracket > 0.01 ? (() => {const [a] = m.pf(0, 9), [b] = m.pf(2 * PI, 9); return <g opacity={bracket}><line x1={a} x2={b} y1={yB} y2={yB} stroke={INK} strokeWidth={5} /><circle cx={a} cy={yB} r={11} fill={INK} /><circle cx={b} cy={yB} r={11} fill={INK} />
			<text x={(a + b) / 2} y={yB + 46} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, fill: INK}}>one year: 0 ≤ x ≤ 2π</text></g>;})() : null}
	</FrameSvg>;
};
export const dayMap = () => makePlot(DAY_G.x, DAY_G.y, DAY_G.w, DAY_G.h, DAY_WIN);
export {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, CARD};
