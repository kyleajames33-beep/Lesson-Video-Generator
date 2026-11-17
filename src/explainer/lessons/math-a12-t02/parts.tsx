// Lesson parts for math-a12-t02 (Revision 4: every solution of a transformed trig equation in a stated domain; a
// city's daylight over one year), on the maths studio kit and t01's parts (imported read-only: TPlot, DayStage,
// the board parts and the colour roles). Lesson-local rigs (t03 imports them read-only):
// - WMap: one number line on which the ink x-domain strip slides and stretches into the teal u-window (the studio
//   StudioWindowMap's geometry, with staged dots, grey out-of-window values and a plain-curve strip above it);
// - LevelBoard: a transformed curve with the amber level line, ink crossing dots and an amber crossing counter;
// - TideStage: the harbour boat-ramp tide board with its coded water band (scene 15; t03's anchor).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {CARD, CARD_SHADOW, FrameSvg, LiveReadoutBoard, MATH_ROLES, StudioPlot, StudioWindowMap, SvgPlate, crossingsOf, fnPath, piLabel, vis} from '../../math/studio';
import type {PlateSpec, PlotMap, PlotTick} from '../../math/studio';
import {FONT_DISPLAY, FONT_HAND, GREY, INK, KR, Lb, PI, RED} from '../math-a12-t01/parts';

export * from '../math-a12-t01/parts';
export {T01FinalFrame} from '../math-a12-t01/s3';

// ---------- the window map ----------
export type WMProps = {x: number; y: number; w: number; range: [number, number]; domain: [number, number]; a: number; b: number; p: number;
	/** u values shown as ink dots (staged by `at`), slid back to x = (u − b)/a by `back` (0..1). */
	dots?: readonly {u: number; at: number; glow?: number}[]; back?: number;
	/** Out-of-window u values: grey hollow dots, crossed in red at `cross`. */
	outs?: readonly {u: number; at: number; cross?: number}[];
	/** The plain curve over the u-axis (sin, cos or tan of u) in a strip of height `ch` above the line, with a level. */
	curve?: {fn: (u: number) => number; yr: [number, number]; level?: number; at?: number; breaks?: readonly number[]; ch?: number};
	closed?: [boolean, boolean]; names?: [string, string]; at?: number; out?: number;
};
export const wmX = (x: number, w: number, range: [number, number]) => (v: number) => x + ((v - range[0]) / (range[1] - range[0])) * w;
/** The studio window map plus the plain u-curve strip above it and staged solution dots on the line. */
export const WMap: React.FC<WMProps> = ({x, y, w, range, domain, a, b, p, dots = [], back = 0, outs = [], curve, closed = [true, true], names = ['x', 'u'], at = -30, out}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const X = wmX(x, w, range);
	const e = p * p * (3 - 2 * p);
	const lo = domain[0] + (a * domain[0] + b - domain[0]) * e, hi = domain[1] + (a * domain[1] + b - domain[1]) * e;
	const ch = curve?.ch ?? 120, cy0 = y - 84 - ch;
	const cY = (v: number) => (curve ? cy0 + ((curve.yr[1] - v) / (curve.yr[1] - curve.yr[0])) * ch : 0);
	const B = MATH_ROLES.b;
	return <div style={{position: 'absolute', inset: 0, opacity: o}}>
		{curve ? <FrameSvg style={{opacity: vis(f, curve.at ?? at, undefined, 14)}}>
			<rect x={X(Math.min(lo, hi))} y={cy0 - 6} width={Math.max(2, X(Math.max(lo, hi)) - X(Math.min(lo, hi)))} height={ch + 12} fill={e > 0.5 ? B.soft : '#ebe4d6'} opacity={0.75} rx={8} />
			<line x1={x} x2={x + w} y1={cY(0)} y2={cY(0)} stroke={INK} strokeWidth={2.5} opacity={0.7} />
			<path d={(() => {let d = '', pen = false; const brk = curve.breaks ?? []; for (let i = 0; i <= 500; i++) {const u = range[0] + ((range[1] - range[0]) * i) / 500; if (brk.some(q => Math.abs(u - q) < 0.04)) {pen = false; continue;} const v = curve.fn(u); if (!Number.isFinite(v) || v > curve.yr[1] + 0.3 || v < curve.yr[0] - 0.3) {pen = false; continue;} d += `${pen ? 'L' : 'M'}${X(u).toFixed(1)},${cY(v).toFixed(1)}`; pen = true;} return d;})()} fill="none" stroke={INK} strokeWidth={4.5} strokeLinejoin="round" />
			{(curve.breaks ?? []).map(q => <line key={q} x1={X(q)} x2={X(q)} y1={cy0} y2={cy0 + ch} stroke={GREY} strokeWidth={3} strokeDasharray="8 7" />)}
			{curve.level !== undefined ? <line x1={x} x2={x + w} y1={cY(curve.level)} y2={cY(curve.level)} stroke={KR.stroke} strokeWidth={4} /> : null}
			<text x={x + 8} y={cy0 + 26} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 32, fill: B.ink}} stroke={CARD} strokeWidth={6} paintOrder="stroke">plain curve</text>
		</FrameSvg> : null}
		<StudioWindowMap x={x} y={y} width={w} range={range} domain={domain} a={a} b={b} p={p} fmt={piLabel} closed={closed} names={names} at={-300} />
		<FrameSvg>
			{outs.map((q, i) => {const oo = vis(f, q.at, undefined, 10); if (oo < 0.01) return null; const cx = X(q.u), cr = q.cross !== undefined ? vis(f, q.cross, undefined, 10) : 0; return <g key={'o' + i} opacity={oo}>
				<circle cx={cx} cy={y} r={13} fill={CARD} stroke={GREY} strokeWidth={4} />
				{curve ? <circle cx={cx} cy={cY(curve.level ?? 0)} r={11} fill={CARD} stroke={GREY} strokeWidth={4} /> : null}
				<text x={cx} y={y + 52} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: GREY}}>{piLabel(q.u)}</text>
				{cr > 0.01 ? <g opacity={cr} stroke={RED} strokeWidth={6} strokeLinecap="round"><line x1={cx - 22} x2={cx + 22} y1={y - 22} y2={y + 22} /><line x1={cx - 22} x2={cx + 22} y1={y + 22} y2={y - 22} /></g> : null}
			</g>;})}
			{dots.map((q, i) => {const oo = vis(f, q.at, undefined, 10); if (oo < 0.01) return null; const xv = (q.u - b) / a, v = q.u + (xv - q.u) * back, cx = X(v), gl = q.glow ?? 0, done = back > 0.95; return <g key={'d' + i} opacity={oo}>
				{curve && back < 0.05 ? <circle cx={X(q.u)} cy={cY(curve.level ?? 0)} r={11} fill={INK} stroke={CARD} strokeWidth={4} /> : null}
				{gl > 0.01 ? <circle cx={cx} cy={y} r={26} fill="none" stroke={KR.stroke} strokeWidth={5} opacity={gl} /> : null}
				<circle cx={cx} cy={y} r={13} fill={done ? MATH_ROLES.answer.stroke : INK} stroke={CARD} strokeWidth={4} />
				{back < 0.3 ? <text x={cx} y={y + 52} textAnchor="middle" opacity={1 - back / 0.3} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, fill: INK}} stroke={CARD} strokeWidth={7} paintOrder="stroke">{piLabel(v)}</text> : null}
			</g>;})}
		</FrameSvg>
	</div>;
};

// ---------- the level board ----------
/** Ink crossing dots of fn and the level L on [d0, d1] (closed ends count), in plot-local px. */
export const crossDots = (m: PlotMap, fn: (x: number) => number, dom: [number, number], L: number, o: number, closed = true) => crossingsOf(fn, dom, L, 2000, closed).map((cx, i) => <circle key={i} cx={m.p(cx, L)[0]} cy={m.p(cx, L)[1]} r={13} fill={INK} stroke={CARD} strokeWidth={5} opacity={o} />);
/** An amber level line across a plot with a label at the right end. */
export const levelLine = (m: PlotMap, L: number, o: number, label?: string) => {
	if (o <= 0.01) return null;
	const [a, ly] = m.p(m.win.x[0], L), [b] = m.p(m.win.x[1], L);
	return <g opacity={o}><line x1={a} x2={b} y1={ly} y2={ly} stroke={KR.stroke} strokeWidth={5} />{label ? <text x={b - 6} y={ly - 14} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: KR.ink}} stroke={CARD} strokeWidth={8} paintOrder="stroke">{label}</text> : null}</g>;
};
/** The ink domain bracket with end dots (filled = included) just under a plot's x-axis box. */
export const domainBar = (m: PlotMap, d: [number, number], o: number, closed: [boolean, boolean] = [true, true], dy = 18) => {
	if (o <= 0.01) return null;
	const [a] = m.p(d[0], 0), [b] = m.p(d[1], 0), yy = m.box.top + m.box.height + dy;
	return <g opacity={o}><line x1={a} x2={b} y1={yy} y2={yy} stroke={INK} strokeWidth={5} />{[a, b].map((px, i) => <circle key={i} cx={px} cy={yy} r={10} fill={closed[i] ? INK : CARD} stroke={INK} strokeWidth={4} />)}</g>;
};
/** The amber crossing counter (52 px). */
export const Counter: React.FC<{x: number; y: number; n: number; at?: number; out?: number; label?: string}> = ({x, y, n, at = -30, out, label = 'crossings'}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.001) return null;
	return <div style={{position: 'absolute', left: x, top: y, opacity: o, background: CARD, borderRadius: 18, boxShadow: CARD_SHADOW, border: `4px solid ${KR.stroke}`, padding: '6px 24px', textAlign: 'center'}}>
		<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color: KR.ink}}>{label}</div>
		<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 64, color: KR.ink, lineHeight: 1.05}}>{n}</div>
	</div>;
};
export const XT_2PI: PlotTick[] = [{value: PI / 2, label: 'π/2'}, {value: PI, label: 'π'}, {value: 1.5 * PI, label: '3π/2'}, {value: 2 * PI, label: '2π'}];

// ---------- the tide stage (scene 15; t03's anchor) ----------
export const TIDE: PlateSpec = {src: 'assets/maths/ma12-tide-board-v1.png', nat: [953, 1651], box: [143, 83, 679, 1588]};
const ROWS: [number, number][] = [[0, 1395], [1, 1257], [2, 1131], [3, 1006.5], [4, 877], [5, 745], [6, 606], [7, 459], [8, 304.5]];
/** File row of a water level h (m) on the painted board, piecewise linear between its measured whole-metre rows. */
export const tideRow = (h: number) => {
	if (h <= 0) return ROWS[0][1] + (ROWS[0][1] - ROWS[1][1]) * -h;
	for (let i = 0; i + 1 < ROWS.length; i++) if (h <= ROWS[i + 1][0]) {const [h0, r0] = ROWS[i], [h1, r1] = ROWS[i + 1]; return r0 + ((h - h0) / (h1 - h0)) * (r1 - r0);}
	return ROWS[8][1];
};
export const TIDE_G = {x: 820, y: 180, w: 1040, h: 600};
export const TIDE_WIN = {x: [-0.4, 12.6] as [number, number], y: [0, 8.6] as [number, number]};
/** The tide board and ramp (about 280 × 780 px) with a coded translucent water band whose surface sits at level h on the board's own scale. */
export const TideBoard: React.FC<{x: number; y: number; w: number; h: number; o?: number}> = ({x, y, w, h, o = 1}) => {
	if (o <= 0.01) return null;
	const s = w / (TIDE.box[2] - TIDE.box[0]);
	const wy = y + (tideRow(h) - TIDE.box[1]) * s, bot = y + (TIDE.box[3] - TIDE.box[1]) * s + 10;
	return <FrameSvg style={{opacity: o}}>
		<SvgPlate plate={TIDE} x={x} y={y} w={w} />
		<rect x={x - 60} y={wy} width={w + 120} height={Math.max(0, bot - wy)} fill="#5f9fb8" opacity={0.42} />
		<line x1={x - 60} x2={x + w + 60} y1={wy} y2={wy} stroke="#2f6f88" strokeWidth={5} />
	</FrameSvg>;
};
export type TideProps = {t: number; h: number; dots: readonly {t: number; h: number; o: number; label?: string}[]; chip?: number; next?: number; readout?: number; children?: (m: PlotMap) => React.ReactNode; curve?: {fn: (t: number) => number; to: number; o: number}};
/** The tide stage: the board at the left, the axes t (h) from 0 to 12 and h (m) from 0 to 8 at the right, and the readouts. */
export const TideStage: React.FC<TideProps> = ({t, h, dots, readout = 1, children, curve}) => {
	const G = TIDE_G;
	return <>
		<TideBoard x={80} y={170} w={280} h={h} />
		{readout > 0.01 ? <LiveReadoutBoard x={410} y={200} width={390} at={-300} inline rows={[{label: 'time t', value: t, digits: 1, unit: 'h', role: 'a'}, {label: 'water level h', value: h, digits: 1, unit: 'm', role: 'height'}]} /> : null}
		<StudioPlot x={G.x} y={G.y} width={G.w} height={G.h} window={TIDE_WIN} xTicks={[2, 4, 6, 8, 10, 12]} yTicks={[2, 4, 6, 8]} xLabel="t (hours)" yLabel="h (m)" at={-300}>
			{m => <>
				{curve && curve.o > 0.01 && curve.to > 0.001 ? <g clipPath={m.clip} opacity={curve.o}><path d={fnPath(m, curve.fn, 0, curve.to, 400)} stroke={INK} strokeWidth={7} fill="none" strokeLinecap="round" /></g> : null}
				{dots.map((d, i) => d.o > 0.01 ? <g key={i} opacity={d.o}><circle cx={m.p(d.t, d.h)[0]} cy={m.p(d.t, d.h)[1]} r={14} fill={INK} stroke={CARD} strokeWidth={5} />
					{d.label ? <Lb at={[m.p(d.t, d.h)[0] + 24, m.p(d.t, d.h)[1] + (d.h > 4 ? 44 : -22)]} o={1} anchor="start" size={34}>{d.label}</Lb> : null}</g> : null)}
				{children ? children(m) : null}
			</>}
		</StudioPlot>
	</>;
};
