// Year 11 Advanced kit, wave 1 (brief 245): number-line and graph parts for w05 to w09, w13, w14 to w18, w24, w25,
// w27 to w31 and g05 (maths-a11-kit-needs.md items 4, 5, 7, 8 and 9). NumberLineRay (rays, circles, test dots
// computed from the set, the mirror through 0), VerticalLineSweep (live hit count), AxisShadow (domain and range as
// shadows on the axes, checked against the curve), RegionLabels (profit and loss between two lines, switching at
// the solved crossing) and CrossingCounter (one parameter drives the curve, Δ and the count of crossings).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {CARD, PlateImg, PlateSpec, kf, niceNum, smooth, vis} from './primitives';
import {MATH_ANSWER, MATH_EXCLUDED, MATH_MISTAKE, MATH_ROLES, RoleKey, roleInk} from './roles';
import {PlotMap, PlotTick, PlotWindow, StudioPlot, TXT, fnPath} from './plot-core';
import {LiveReadoutBoard, ParameterSlider} from './readouts';

const lerp = (a: number, b: number, u: number) => a + (b - a) * u;
const clamp01 = (u: number) => Math.max(0, Math.min(1, u));
const haloText = (size: number, color: string, weight = 800): React.SVGProps<SVGTextElement> => ({style: TXT(size, color, weight), stroke: CARD, strokeWidth: 8, paintOrder: 'stroke'} as React.SVGProps<SVGTextElement>);

// =====================================================================================================
// NumberLineRay (w05, w06; w09, w18, w27, w30)
// =====================================================================================================
export type LineOp = '<' | '≤' | '>' | '≥';
/** An inequality's solution set (x op value), or an interval (ends may be ±Infinity). */
export type LineSet = {op: LineOp; value: number} | {from: number; to: number; closed?: readonly [boolean, boolean]};
const setEnds = (s: LineSet): {lo: number; hi: number; cl: [boolean, boolean]} => {
	if ('op' in s) {
		const closed = s.op === '≤' || s.op === '≥';
		return s.op === '<' || s.op === '≤' ? {lo: -Infinity, hi: s.value, cl: [false, closed]} : {lo: s.value, hi: Infinity, cl: [closed, false]};
	}
	return {lo: s.from, hi: s.to, cl: [s.closed?.[0] ?? true, s.closed?.[1] ?? true]};
};
/** Membership computed from the set (never set by hand): used for test-dot colours. */
export const inLineSet = (s: LineSet, v: number) => {
	const {lo, hi, cl} = setEnds(s);
	return (v > lo || (cl[0] && v === lo)) && (v < hi || (cl[1] && v === hi));
};
export type LinePiece = {set: LineSet; at: number; dur?: number; out?: number; role?: RoleKey; bracketsAt?: number};
export type LinePoint = {value: number | ((f: number) => number); at: number; out?: number; label?: string; role?: RoleKey; mirrorAt?: number; mirrorDur?: number};
export type LineTest = {value: number; at: number; out?: number; label?: string; piece?: number};

/**
 * A number line (ink, arrows both ends) with solution pieces in a role colour (blue by default). A piece draws from
 * its circle (open or closed by the inequality) and runs off to an arrow for an unbounded end; `bracketsAt` drops
 * interval-notation brackets onto the finite ends (w09). Points (ink dots, live values allowed) can slide or fold
 * through 0 along an arc at mirrorAt (the "multiply by −1" picture, with `fold` drawing the violet dashed line).
 * Test dots drop on and turn green inside or red outside, computed from the pieces. `whole` lights the integers
 * along a piece (whole trips 0 to 8). Positioned at (x, y) as the svg's top left; `inline` renders in flow for
 * question cards (the IntervalPicture use).
 */
export const NumberLineRay: React.FC<{
	x?: number; y?: number; width?: number; height?: number; range: readonly [number, number];
	ticks?: readonly (number | PlotTick)[]; tickSize?: number; at?: number; out?: number;
	pieces?: readonly LinePiece[]; points?: readonly LinePoint[]; tests?: readonly LineTest[];
	whole?: {from: number; to: number; at: number; stagger?: number; role?: RoleKey};
	fold?: {at: number; out?: number; label?: string};
	inline?: boolean; card?: boolean;
}> = ({x = 0, y = 0, width = 1400, height = 210, range, ticks, tickSize = 30, at = 0, out, pieces = [], points = [], tests = [], whole, fold, inline = false, card = false}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const L = 40, Rx = width - 40, Y = Math.round(height * 0.55);
	const X = (v: number) => L + ((v - range[0]) / (range[1] - range[0])) * (Rx - L);
	const tk: PlotTick[] = (ticks ?? (() => {
		const n = range[1] - range[0], step = n <= 22 ? 1 : n <= 44 ? 2 : 5, out: number[] = [];
		for (let v = Math.ceil(range[0] / step) * step; v <= range[1]; v += step) out.push(v);
		return out;
	})()).map(t => (typeof t === 'number' ? {value: t, label: niceNum(t)} : t));
	const visible = (p: LinePiece) => f >= p.at;
	const pieceEls = pieces.map((p, i) => {
		const po = vis(f, p.at, p.out, 8);
		if (po <= 0.001) return null;
		const R = MATH_ROLES[p.role ?? 'a'];
		const {lo, hi, cl} = setEnds(p.set);
		const a = Number.isFinite(lo) ? X(lo) : L - 6, b = Number.isFinite(hi) ? X(hi) : Rx + 6;
		const u = smooth(clamp01((f - p.at) / (p.dur ?? 24)));
		// Draw from the finite end (the circle) outward; an interval draws left to right.
		const fromLeft = Number.isFinite(lo);
		const s0 = fromLeft ? a : b, s1 = fromLeft ? lerp(a, b, u) : lerp(b, a, u);
		const br = p.bracketsAt === undefined ? 0 : prog(f, p.bracketsAt, 14);
		const end = (v: number, closed: boolean, side: 0 | 1) => (
			<g key={side}>
				<circle cx={X(v)} cy={Y} r={14} fill={closed ? R.stroke : CARD} stroke={R.stroke} strokeWidth={5} opacity={1 - br} />
				{br > 0 ? <text x={X(v)} y={Y + 24 - (1 - br) * 60} textAnchor="middle" opacity={br} style={TXT(76, R.ink, 700)}>{side === 0 ? (closed ? '[' : '(') : closed ? ']' : ')'}</text> : null}
			</g>
		);
		const arrow = (tip: number, dir: 1 | -1) => <path d={`M${tip - dir * 20},${Y - 16} L${tip + dir * 6},${Y} L${tip - dir * 20},${Y + 16}`} fill="none" stroke={R.stroke} strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" />;
		return (
			<g key={i} opacity={po}>
				<line x1={s0} x2={s1} y1={Y} y2={Y} stroke={R.stroke} strokeWidth={12} strokeLinecap="round" />
				{!Number.isFinite(hi) && u >= 0.98 ? arrow(Rx + 14, 1) : null}
				{!Number.isFinite(lo) && u >= 0.98 ? arrow(L - 14, -1) : null}
				{Number.isFinite(lo) ? end(lo, cl[0], 0) : null}
				{Number.isFinite(hi) && (fromLeft ? u >= 0.98 : true) ? end(hi, cl[1], 1) : null}
			</g>
		);
	});
	const wholeEls = whole ? (() => {
		const R = MATH_ROLES[whole.role ?? 'a'];
		const out: React.ReactNode[] = [];
		for (let v = Math.ceil(whole.from); v <= whole.to; v++) {
			const wo = prog(f, whole.at + (v - Math.ceil(whole.from)) * (whole.stagger ?? 4), 8);
			if (wo > 0) out.push(<circle key={v} cx={X(v)} cy={Y - 34} r={9} fill={R.stroke} opacity={wo} />);
		}
		return out;
	})() : null;
	const pointEls = points.map((p, i) => {
		const po = vis(f, p.at, p.out, 10);
		if (po <= 0.001) return null;
		const v0 = typeof p.value === 'function' ? p.value(f) : p.value;
		const m = p.mirrorAt === undefined ? 0 : smooth(clamp01((f - p.mirrorAt) / (p.mirrorDur ?? 30)));
		const r = X(Math.abs(v0)) - X(0);
		const th = (v0 >= 0 ? 0 : Math.PI) + (v0 >= 0 ? 1 : -1) * m * Math.PI;
		const px = m > 0 ? X(0) + r * Math.cos(th) : X(v0), py = m > 0 ? Y - Math.abs(r * Math.sin(th)) * 0.55 : Y;
		const val = m >= 1 ? -v0 : v0;
		const c = roleInk(p.role, INK);
		return (
			<g key={i} opacity={po}>
				{m > 0 && m < 1 ? <path d={`M${X(v0)},${Y} A${Math.abs(r)},${Math.abs(r) * 0.55} 0 0 ${v0 >= 0 ? 0 : 1} ${X(-v0)},${Y}`} fill="none" stroke={MATH_ROLES.gradient.stroke} strokeWidth={3} strokeDasharray="8 8" opacity={0.6} /> : null}
				<circle cx={px} cy={py} r={13} fill={c} />
				<text x={px} y={py - 30} textAnchor="middle" {...haloText(40, c)}>{p.label ?? niceNum(val)}</text>
			</g>
		);
	});
	const testEls = tests.map((t, i) => {
		const to = vis(f, t.at, t.out, 8);
		if (to <= 0.001) return null;
		const d = smooth(clamp01((f - t.at) / 14));
		const live = pieces.filter((p, k) => (t.piece === undefined ? visible(p) : k === t.piece));
		const inside = live.some(p => inLineSet(p.set, t.value));
		const c = d < 1 ? INK_SOFT : inside ? MATH_ANSWER : MATH_MISTAKE;
		const py = lerp(Y - 110, Y, d);
		return (
			<g key={'t' + i} opacity={to}>
				<circle cx={X(t.value)} cy={py} r={15} fill={c} stroke={CARD} strokeWidth={4} />
				{d >= 1 && t.label ? <text x={X(t.value)} y={Y - 44} textAnchor="middle" {...haloText(36, c)}>{t.label}</text> : null}
			</g>
		);
	});
	const fo = fold ? vis(f, fold.at, fold.out, 12) : 0;
	const svg = (
		<svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} style={{display: 'block', overflow: 'visible', ...(card ? {background: '#fbf8f1', borderRadius: 14, border: '2px solid rgba(60,45,20,0.12)'} : {})}}>
			<line x1={L - 22} x2={Rx + 22} y1={Y} y2={Y} stroke={INK} strokeWidth={4} />
			<path d={`M${Rx + 10},${Y - 10} L${Rx + 24},${Y} L${Rx + 10},${Y + 10} M${L - 10},${Y - 10} L${L - 24},${Y} L${L - 10},${Y + 10}`} fill="none" stroke={INK} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
			{tk.map(t => <g key={t.value}><line x1={X(t.value)} x2={X(t.value)} y1={Y - 10} y2={Y + 10} stroke={INK} strokeWidth={3} /><text x={X(t.value)} y={Y + 18 + tickSize} textAnchor="middle" style={TXT(tickSize, INK, 700)}>{t.label}</text></g>)}
			{fo > 0 ? <g opacity={fo}>
				<line x1={X(0)} x2={X(0)} y1={Y - 120} y2={Y + 30} stroke={MATH_ROLES.gradient.stroke} strokeWidth={4} strokeDasharray="12 9" />
				{fold?.label ? <text x={X(0) + 14} y={Y - 62} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, fill: MATH_ROLES.gradient.ink} as React.CSSProperties}>{fold.label}</text> : null}
			</g> : null}
			{pieceEls}
			{wholeEls}
			{pointEls}
			{testEls}
		</svg>
	);
	if (inline) return <div style={{opacity: o}}>{svg}</div>;
	return <div style={{position: 'absolute', left: x, top: y, opacity: o}}>{svg}</div>;
};

// =====================================================================================================
// VerticalLineSweep (w07; w24, w25)
// =====================================================================================================
/** One branch of a relation: y = f(x) on [from, to] (NaN where undefined). A circle is two branches. */
export type RelationBranch = {f: (x: number) => number; from?: number; to?: number};
/** Number of distinct real y values the relation has at x (the vertical line's hits). */
export const relationHits = (branches: readonly RelationBranch[], x: number): number[] => {
	const ys: number[] = [];
	for (const b of branches) {
		if ((b.from !== undefined && x < b.from - 1e-12) || (b.to !== undefined && x > b.to + 1e-12)) continue;
		const y = b.f(x);
		if (Number.isFinite(y) && !ys.some(v => Math.abs(v - y) < 1e-6)) ys.push(y);
	}
	return ys;
};

/**
 * A StudioPlot with a relation drawn from its branches and an amber vertical line that sweeps along keyframes
 * (pauses are repeated keys). The live readout "hits: n" and the hit dots are green for 1, red for 2 or more and
 * grey for 0, computed from the branches at the line's x. `coords` shows each hit's coordinates during frame
 * windows (the pause at x = 2 or x = 6). `children` and `html` draw extra marks in the plot.
 */
export const VerticalLineSweep: React.FC<{
	x: number; y: number; width?: number; height?: number; window: PlotWindow;
	xTicks?: readonly (number | PlotTick)[]; yTicks?: readonly (number | PlotTick)[]; xLabel?: string; yLabel?: string;
	branches: readonly RelationBranch[]; curveColor?: string; curveAt?: number; curveLabel?: {text: string; x: number; y: number};
	sweep: readonly (readonly [number, number])[]; sweepAt?: number; sweepOut?: number;
	coords?: readonly (readonly [number, number])[]; at?: number; out?: number;
	/** Where the "hits: n" pill rides on the line (default bottom of the plot box). */
	readoutAt?: 'top' | 'bottom';
	children?: (m: PlotMap) => React.ReactNode; html?: (m: PlotMap) => React.ReactNode;
}> = ({x, y, width = 1100, height = 760, window: win, xTicks, yTicks, xLabel, yLabel, branches, curveColor = INK, curveAt = 0, curveLabel, sweep, sweepAt, sweepOut, coords = [], at = 0, out, readoutAt = 'bottom', children, html}) => {
	const f = useCurrentFrame();
	const sAt = sweepAt ?? (sweep.length ? sweep[0][0] : 0);
	const so = vis(f, sAt, sweepOut, 10);
	const lx = kf(f, sweep, true);
	const hits = relationHits(branches, lx);
	const n = hits.length;
	const c = n === 0 ? MATH_EXCLUDED : n === 1 ? MATH_ANSWER : MATH_MISTAKE;
	const showCoords = coords.some(([a, b]) => f >= a && f < b);
	const draw = prog(f, curveAt, 30);
	return (
		<StudioPlot x={x} y={y} width={width} height={height} window={win} xTicks={xTicks} yTicks={yTicks} xLabel={xLabel} yLabel={yLabel} at={at} out={out}
			html={m => html ? html(m) : null}>
			{m => {
				const [lpx] = m.p(lx, 0);
				return (
					<>
						<g clipPath={m.clip}>
							{branches.map((b, i) => {
								const a = Math.max(win.x[0], b.from ?? win.x[0]), bb = Math.min(win.x[1], b.to ?? win.x[1]);
								return <path key={i} d={fnPath(m, b.f, a, bb, 320)} fill="none" stroke={curveColor} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - draw} />;
							})}
						</g>
						{curveLabel && draw > 0.6 ? (() => {const [cx, cy] = m.p(curveLabel.x, curveLabel.y); return <text x={cx} y={cy} opacity={prog(f, curveAt + 18, 12)} {...haloText(44, curveColor)}>{curveLabel.text}</text>;})() : null}
						{so > 0 ? <g opacity={so}>
							<line x1={lpx} x2={lpx} y1={m.box.top} y2={m.box.top + m.box.height} stroke={MATH_ROLES.k.stroke} strokeWidth={6} />
							<g transform={`translate(${Math.min(Math.max(lpx, m.box.left + 100), m.box.left + m.box.width - 100)},${readoutAt === 'top' ? m.box.top + 8 : m.box.top + m.box.height - 70})`}>
								<rect x={-94} y={0} width={188} height={62} rx={14} fill={CARD} stroke={c} strokeWidth={4} />
								<text x={0} y={44} textAnchor="middle" style={TXT(40, c, 800)}>hits: {n}</text>
							</g>
							{hits.map((h, i) => {
								const [hx, hy] = m.p(lx, h);
								if (hy < m.box.top - 2 || hy > m.box.top + m.box.height + 2) return null;
								return <g key={i}>
									<circle cx={hx} cy={hy} r={13} fill={c} stroke={CARD} strokeWidth={4} />
									{showCoords ? <text x={hx + 22} y={hy + (h >= 0 ? -16 : 40)} {...haloText(38, c)}>({niceNum(lx)}, {niceNum(h)})</text> : null}
								</g>;
							})}
						</g> : null}
						{children ? children(m) : null}
					</>
				);
			}}
		</StudioPlot>
	);
};

// =====================================================================================================
// AxisShadow (w09; w24, w25, w28, w30, w31, g01, g05, g06)
// =====================================================================================================
/** An axis set: from and to (±Infinity for unbounded), open or closed ends, and excluded values (open gaps). */
export type AxisSet = {from: number; to: number; closedFrom?: boolean; closedTo?: boolean; gaps?: readonly number[]};

/** Smallest and largest value of fn over [a, b] (gaps skipped): dense sampling, then golden-section refinement. */
export const sampledExtremes = (fn: (x: number) => number, a: number, b: number, gaps: readonly number[] = [], n = 4000): [number, number] => {
	const ok = (x: number) => !gaps.some(g => Math.abs(x - g) < 1e-9);
	let lo = Infinity, hi = -Infinity, ilo = -1, ihi = -1;
	const xs: number[] = [];
	for (let i = 0; i <= n; i++) xs.push(a + ((b - a) * i) / n);
	xs.forEach((x, i) => {
		if (!ok(x)) return;
		const v = fn(x);
		if (!Number.isFinite(v)) return;
		if (v < lo) {lo = v; ilo = i;}
		if (v > hi) {hi = v; ihi = i;}
	});
	const refine = (i: number, sgn: 1 | -1) => {
		if (i <= 0 || i >= n) return sgn * fn(xs[Math.max(0, Math.min(n, i))]);
		let l = xs[i - 1], r = xs[i + 1];
		const g = (Math.sqrt(5) - 1) / 2;
		for (let k = 0; k < 80; k++) {
			const m1 = r - g * (r - l), m2 = l + g * (r - l);
			if (sgn * fn(m1) < sgn * fn(m2)) r = m2; else l = m1;
		}
		return sgn * fn((l + r) / 2);
	};
	if (ilo >= 0) lo = Math.min(lo, refine(ilo, 1));
	if (ihi >= 0) hi = Math.max(hi, -refine(ihi, -1));
	return [lo, hi];
};
/** Throws if the author's range disagrees with the curve over the domain (finite ends, 1e-6). */
export const checkAxisRange = (fn: (x: number) => number, domain: AxisSet, range: AxisSet, win: PlotWindow) => {
	const a = Number.isFinite(domain.from) ? domain.from : win.x[0], b = Number.isFinite(domain.to) ? domain.to : win.x[1];
	const [lo, hi] = sampledExtremes(fn, a, b, domain.gaps ?? []);
	if (Number.isFinite(range.from) && Math.abs(lo - range.from) > 1e-6) throw new Error(`AxisShadow: range starts at ${lo}, not ${range.from}`);
	if (Number.isFinite(range.to) && Math.abs(hi - range.to) > 1e-6) throw new Error(`AxisShadow: range ends at ${hi}, not ${range.to}`);
};

/**
 * Domain and range as shadows: drawn inside a StudioPlot render prop (pass its PlotMap). At castDownAt the light
 * falls straight down: dashed rays drop from the curve and a blue bar grows along the x axis with closed or open end
 * dots, open gaps at excluded values and arrows at unbounded ends; at castSideAt the light comes from the side and a
 * teal bar grows up the y axis. With `fn`, the range is checked against the curve (throws on a mismatch); the rays
 * come from `fn` or from `rayPoints` (for a relation such as a circle). `labels` write beside each bar.
 * Use role 'mistake' with `dashed` for a crossed ghost bar ("all reals").
 */
export const AxisShadow: React.FC<{
	m: PlotMap; domain?: AxisSet; range?: AxisSet; fn?: (x: number) => number; rayPoints?: readonly (readonly [number, number])[];
	castDownAt?: number; castSideAt?: number; dur?: number; out?: number;
	domainRole?: RoleKey; rangeRole?: RoleKey; dashed?: boolean;
	labels?: {domain?: string; range?: string; size?: number};
}> = ({m, domain, range, fn, rayPoints, castDownAt, castSideAt, dur = 36, out, domainRole = 'a', rangeRole = 'b', dashed = false, labels}) => {
	const f = useCurrentFrame();
	if (fn && domain && range) checkAxisRange(fn, domain, range, m.win);
	const oo = out === undefined ? 1 : 1 - prog(f, out, 12);
	if (oo <= 0.001) return null;
	const [ox, oy] = m.p(Math.max(m.win.x[0], Math.min(m.win.x[1], 0)), Math.max(m.win.y[0], Math.min(m.win.y[1], 0)));
	const pts: (readonly [number, number])[] = rayPoints ? [...rayPoints] : fn && domain ? (() => {
		const a = Number.isFinite(domain.from) ? domain.from : m.win.x[0], b = Number.isFinite(domain.to) ? domain.to : m.win.x[1];
		return Array.from({length: 9}, (_, i) => a + ((b - a) * (i + 0.5)) / 9).map(xx => [xx, fn(xx)] as const).filter(([, yy]) => Number.isFinite(yy) && yy >= m.win.y[0] && yy <= m.win.y[1]);
	})() : [];
	const bar = (set: AxisSet, axis: 'x' | 'y', at: number, role: RoleKey) => {
		const R = MATH_ROLES[role];
		const u = smooth(clamp01((f - at) / dur));
		if (u <= 0) return null;
		const lo = axis === 'x' ? m.win.x[0] : m.win.y[0], hi = axis === 'x' ? m.win.x[1] : m.win.y[1];
		const a = Number.isFinite(set.from) ? set.from : lo, b = Number.isFinite(set.to) ? set.to : hi;
		const cur = lerp(a, b, u);
		const P = (v: number): [number, number] => (axis === 'x' ? [m.p(v, 0)[0], oy] : [ox, m.p(0, v)[1]]);
		const [x1, y1] = P(a), [x2, y2] = P(cur);
		const gaps = (set.gaps ?? []).filter(g => g > a && g < cur);
		const arrowAt = (v: number, dir: 1 | -1) => {
			const [px, py] = P(v);
			return axis === 'x'
				? <path d={`M${px - dir * 22},${py - 18} L${px + dir * 4},${py} L${px - dir * 22},${py + 18}`} fill="none" stroke={R.stroke} strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" />
				: <path d={`M${px - 18},${py + dir * 22} L${px},${py - dir * 4} L${px + 18},${py + dir * 22}`} fill="none" stroke={R.stroke} strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" />;
		};
		const dot = (v: number, closed: boolean, k: string) => {const [px, py] = P(v); return <circle key={k} cx={px} cy={py} r={13} fill={closed ? R.stroke : CARD} stroke={R.stroke} strokeWidth={5} />;};
		const rays = pts.filter(([px]) => axis === 'x' ? px <= cur + 1e-9 : true).filter(([, py]) => axis === 'y' ? (Number.isFinite(set.from) ? py >= set.from - 1e-9 : true) && py <= cur + 1e-9 : true);
		return (
			<g>
				{rays.map(([rx, ry], i) => {
					const [cx, cy] = m.p(rx, ry);
					const [tx, ty] = axis === 'x' ? [cx, oy] : [ox, cy];
					return <line key={'r' + i} x1={cx} y1={cy} x2={tx} y2={ty} stroke={R.stroke} strokeWidth={3} strokeDasharray="6 10" opacity={0.55 * (1 - prog(f, at + dur + 20, 30))} />;
				})}
				<path d={`M${x1},${y1} L${x2},${y2}`} stroke={R.stroke} strokeWidth={16} strokeLinecap="butt" strokeDasharray={dashed ? '22 14' : undefined} opacity={0.88} />
				{gaps.map(g => <circle key={'g' + g} cx={P(g)[0]} cy={P(g)[1]} r={13} fill={CARD} stroke={R.stroke} strokeWidth={5} />)}
				{Number.isFinite(set.from) ? dot(set.from, set.closedFrom ?? true, 'a') : arrowAt(lo, -1)}
				{u >= 0.98 ? (Number.isFinite(set.to) ? dot(set.to, set.closedTo ?? true, 'b') : arrowAt(hi, 1)) : null}
			</g>
		);
	};
	const ls = labels?.size ?? 40;
	const dl = castDownAt !== undefined && labels?.domain ? prog(f, castDownAt + dur, 12) : 0;
	const rl = castSideAt !== undefined && labels?.range ? prog(f, castSideAt + dur, 12) : 0;
	return (
		<g opacity={oo}>
			{domain && castDownAt !== undefined ? bar(domain, 'x', castDownAt, domainRole) : null}
			{range && castSideAt !== undefined ? bar(range, 'y', castSideAt, rangeRole) : null}
			{dl > 0 ? <text x={m.box.left + m.box.width - 10} y={oy - 26} textAnchor="end" opacity={dl} {...haloText(ls, roleInk(domainRole))}>{labels?.domain}</text> : null}
			{rl > 0 ? <text x={ox + 26} y={m.box.top + ls} opacity={rl} {...haloText(ls, roleInk(rangeRole))}>{labels?.range}</text> : null}
		</g>
	);
};

// =====================================================================================================
// RegionLabels (w13; w19)
// =====================================================================================================
/** x in [a, b] where f1 = f2 (bisection to machine precision), or null if they do not cross. */
export const crossingX = (f1: (x: number) => number, f2: (x: number) => number, a: number, b: number): number | null => {
	const g = (x: number) => f1(x) - f2(x);
	let l = a, r = b, gl = g(l);
	if (gl === 0) return l;
	if (gl * g(r) > 0) return null;
	for (let k = 0; k < 200 && r - l > 0; k++) {
		const mid = (l + r) / 2, gm = g(mid);
		if (gm === 0) return mid;
		if (gm * gl < 0) r = mid; else {l = mid; gl = gm;}
		if (mid === l && mid === r) break;
	}
	return (l + r) / 2;
};
export type RegionTone = RoleKey | 'grey';
const toneFill = (t: RegionTone) => (t === 'grey' ? '#e3ddd2' : MATH_ROLES[t].soft);
const toneInk = (t: RegionTone) => (t === 'grey' ? '#6b6358' : MATH_ROLES[t].ink);

/**
 * The gap between two lines (or curves) shaded in one tone where line 1 is above and another where line 2 is above,
 * with word labels ("loss", "profit"; "A cheaper", "B cheaper") centred in each shaded part. The switch happens at
 * the solved crossing, never a typed x. `riderX` limits the shading to x ≤ riderX (the shading follows a rider).
 * Draw inside a StudioPlot render prop. `crossing` rings the crossing point and draws a dashed vertical at it.
 */
export const RegionLabels: React.FC<{
	m: PlotMap; f1: (x: number) => number; f2: (x: number) => number; xFrom: number; xTo: number;
	tones: {above1: RegionTone; above2: RegionTone}; labels: {above1: string; above2: string};
	riderX?: number; at?: number; out?: number; labelSize?: number; opacity?: number;
	crossing?: {at: number; role?: RoleKey; dashed?: boolean};
	/** Draw only the fill (under the lines) or only the labels and ring (over them). Default both. */
	layer?: 'all' | 'fill' | 'labels';
}> = ({m, f1, f2, xFrom, xTo, tones, labels, riderX, at = 0, out, labelSize = 44, opacity = 0.75, crossing, layer = 'all'}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const cx = crossingX(f1, f2, xFrom, xTo);
	const lim = Math.min(xTo, riderX ?? xTo);
	const segs: [number, number][] = cx === null ? [[xFrom, xTo]] : [[xFrom, cx], [cx, xTo]];
	const parts = segs.map(([a, b]) => [a, Math.min(b, lim)] as [number, number]).filter(([a, b]) => b > a);
	const poly = (a: number, b: number) => {
		let d = '';
		const n = 60;
		for (let i = 0; i <= n; i++) {const X = a + ((b - a) * i) / n; const [px, py] = m.p(X, f1(X)); d += `${i ? 'L' : 'M'}${px},${py} `;}
		for (let i = n; i >= 0; i--) {const X = a + ((b - a) * i) / n; const [px, py] = m.p(X, f2(X)); d += `L${px},${py} `;}
		return d + 'Z';
	};
	const co = crossing ? prog(f, crossing.at, 14) : 0;
	return (
		<g opacity={o}>
			{layer !== 'labels' ? <g clipPath={m.clip}>
				{parts.map(([a, b], i) => {
					const mid = (a + b) / 2;
					const tone = f1(mid) >= f2(mid) ? tones.above1 : tones.above2;
					return <path key={i} d={poly(a, b)} fill={toneFill(tone)} opacity={opacity} />;
				})}
			</g> : null}
			{layer !== 'fill' ? parts.map(([a, b], i) => {
				const [pa] = m.p(a, 0), [pb] = m.p(b, 0);
				if (pb - pa < 90) return null;
				const mid = (a + b) / 2;
				const above1 = f1(mid) >= f2(mid);
				const tone = above1 ? tones.above1 : tones.above2;
				// Centre the label where the gap is widest, keeping the word inside the shaded part.
				const text = above1 ? labels.above1 : labels.above2;
				const hw = (text.length * 0.3 * labelSize + 16) / m.sx;
				const lo = Math.min(mid, a + hw), hi = Math.max(mid, b - hw);
				let best = mid, gap = -1;
				for (let k = 0; k <= 40; k++) {const X = lo + ((hi - lo) * k) / 40; const g = Math.abs(f1(X) - f2(X)); if (g > gap) {gap = g; best = X;}}
				const [lx, ly] = m.p(best, (f1(best) + f2(best)) / 2);
				return <text key={'l' + i} x={lx} y={ly + labelSize * 0.35} textAnchor="middle" opacity={clamp01((pb - pa - 90) / 60)} {...haloText(labelSize, toneInk(tone))}>{text}</text>;
			}) : null}
			{layer !== 'fill' && crossing && cx !== null && co > 0 ? (() => {
				const [px, py] = m.p(cx, f1(cx));
				const c = crossing.role ? MATH_ROLES[crossing.role].stroke : INK;
				return <g opacity={co}>
					{crossing.dashed ? <line x1={px} x2={px} y1={m.box.top} y2={m.box.top + m.box.height} stroke={c} strokeWidth={3} strokeDasharray="12 10" /> : null}
					<circle cx={px} cy={py} r={22} fill="none" stroke={c} strokeWidth={5} />
				</g>;
			})() : null}
		</g>
	);
};

// =====================================================================================================
// CrossingCounter (w14; w15 to w18, w31's LevelLine idea)
// =====================================================================================================
export type Quad = readonly [number, number, number];
/** Real roots of ax² + bx + c and their count, with Δ: count 1 only when |Δ| ≤ 1e-9. */
export const quadCrossings = ([a, b, c]: Quad): {disc: number; count: number; roots: number[]} => {
	if (a === 0) return b === 0 ? {disc: NaN, count: 0, roots: []} : {disc: NaN, count: 1, roots: [-c / b]};
	const disc = b * b - 4 * a * c;
	if (Math.abs(disc) <= 1e-9) return {disc, count: 1, roots: [-b / (2 * a)]};
	if (disc < 0) return {disc, count: 0, roots: []};
	const s = Math.sqrt(disc);
	return {disc, count: 2, roots: [(-b - s) / (2 * a), (-b + s) / (2 * a)].sort((p, q) => p - q)};
};
export type CrossingMode =
	/** y = ax² + bx + p (vertical shift). */
	| {kind: 'shift'; a: number; b: number}
	/** y = p(x − x0)(x − x1) + yEnd: ends pinned at (x0, yEnd) and (x1, yEnd), sag p (w14 hammock). */
	| {kind: 'sag'; x0: number; x1: number; yEnd: number}
	/** Fixed parabola y = ax² + bx + c met by the line y = slope·x + p (w17). */
	| {kind: 'line'; a: number; b: number; c: number; slope: number};
/** The curve shown and the quadratic whose roots are counted, at parameter p. */
export const crossingSetup = (mode: CrossingMode, p: number): {coeffs: Quad; curve: (x: number) => number; line?: (x: number) => number} => {
	if (mode.kind === 'shift') return {coeffs: [mode.a, mode.b, p], curve: x => mode.a * x * x + mode.b * x + p};
	if (mode.kind === 'sag') {
		const {x0, x1, yEnd} = mode;
		return {coeffs: [p, -p * (x0 + x1), p * x0 * x1 + yEnd], curve: x => p * (x - x0) * (x - x1) + yEnd};
	}
	return {coeffs: [mode.a, mode.b - mode.slope, mode.c - p], curve: x => mode.a * x * x + mode.b * x + mode.c, line: x => mode.slope * x + p};
};

/**
 * One timeline drives a quadratic's parameter p (`timeline`: [frame, value] keys, eased; hold on a key for the
 * touching beat): the curve redraws, the zero (or meeting) dots appear, merge and split, and a readout board shows
 * p, Δ (violet, 2 decimals) and the count (amber), all computed from the same coefficients, so they cannot
 * disagree. Optional slider and painted plate states that cross-fade with p (the hammock's three states).
 */
export const CrossingCounter: React.FC<{
	x: number; y: number; width?: number; height?: number; window: PlotWindow;
	xTicks?: readonly (number | PlotTick)[]; yTicks?: readonly (number | PlotTick)[]; xLabel?: string; yLabel?: string;
	mode: CrossingMode; timeline: readonly (readonly [number, number])[]; at?: number; out?: number;
	curveRole?: RoleKey; lineRole?: RoleKey; dotRole?: RoleKey;
	readout?: {x: number; y: number; width?: number; paramLabel: string; paramRole?: RoleKey; digits?: number; countLabel?: string; at?: number};
	slider?: {x: number; y: number; width?: number; symbol: string; role?: RoleKey; min: number; max: number; ticks: {value: number; label: string}[]; at?: number};
	plates?: {states: readonly {value: number; plate: PlateSpec}[]; x: number; y: number; w: number};
	children?: (m: PlotMap, p: number) => React.ReactNode;
}> = ({x, y, width = 1000, height = 700, window: win, xTicks, yTicks, xLabel, yLabel, mode, timeline, at = 0, out, curveRole = 'height', lineRole = 'b', dotRole = 'k', readout, slider, plates, children}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const p = kf(f, timeline, true);
	const s = crossingSetup(mode, p);
	const q = quadCrossings(s.coeffs);
	const DR = MATH_ROLES[dotRole];
	const plateEls = plates ? (() => {
		const st = [...plates.states].sort((a, b) => a.value - b.value);
		const w = st.map(() => 0);
		if (p <= st[0].value) w[0] = 1;
		else if (p >= st[st.length - 1].value) w[st.length - 1] = 1;
		else for (let i = 0; i + 1 < st.length; i++) if (p >= st[i].value && p <= st[i + 1].value) {const t = (p - st[i].value) / (st[i + 1].value - st[i].value); w[i] = 1 - t; w[i + 1] = t;}
		return st.map((sv, i) => w[i] > 0.001 ? <PlateImg key={i} plate={sv.plate} x={plates.x} y={plates.y} w={plates.w} opacity={w[i] * o} /> : null);
	})() : null;
	return (
		<>
			{plateEls}
			<StudioPlot x={x} y={y} width={width} height={height} window={win} xTicks={xTicks} yTicks={yTicks} xLabel={xLabel} yLabel={yLabel} at={at} out={out}>
				{m => (
					<>
						<g clipPath={m.clip}>
							<path d={fnPath(m, s.curve, win.x[0], win.x[1], 300)} fill="none" stroke={MATH_ROLES[curveRole].stroke} strokeWidth={6} strokeLinecap="round" />
							{s.line ? <path d={fnPath(m, s.line, win.x[0], win.x[1], 40)} fill="none" stroke={MATH_ROLES[lineRole].stroke} strokeWidth={6} strokeLinecap="round" /> : null}
						</g>
						{q.roots.map((r, i) => {
							const yy = s.line ? s.line(r) : 0;
							const [px, py] = m.p(r, yy);
							return <circle key={i} cx={px} cy={py} r={q.count === 1 ? 17 : 14} fill={DR.stroke} stroke={CARD} strokeWidth={4} />;
						})}
						{children ? children(m, p) : null}
					</>
				)}
			</StudioPlot>
			{slider ? <ParameterSlider x={slider.x} y={slider.y} width={slider.width ?? 600} symbol={slider.symbol} role={slider.role ?? 'gradient'} value={p} min={slider.min} max={slider.max} ticks={slider.ticks} at={slider.at ?? at} out={out} digits={3} /> : null}
			{readout ? <LiveReadoutBoard x={readout.x} y={readout.y} width={readout.width ?? 520} at={readout.at ?? at} out={out} rows={[
				{label: readout.paramLabel, value: p, digits: readout.digits ?? 3, role: readout.paramRole},
				{label: 'Δ = b² − 4ac', value: q.disc, digits: 2, role: 'gradient'},
				{label: readout.countLabel ?? (mode.kind === 'line' ? 'meeting points' : 'x-intercepts'), value: q.count, digits: 0, role: 'k'},
			]} /> : null}
		</>
	);
};

// Module-load checks from the designs (w09 shadows, w13 crossings, w14 and w17 counts).
{
	const W: PlotWindow = {x: [-5, 10], y: [-2, 12]};
	checkAxisRange(x => Math.sqrt(2 * x + 6), {from: -3, to: Infinity}, {from: 0, to: Infinity}, W);
	checkAxisRange(x => x * x - 4 * x + 5, {from: -Infinity, to: Infinity}, {from: 1, to: Infinity}, W);
	checkAxisRange(x => Math.sqrt(x - 1) + 2, {from: 1, to: Infinity}, {from: 2, to: Infinity}, W);
	const near = (a: number | null, b: number) => {if (a === null || Math.abs(a - b) > 1e-9) throw new Error(`RegionLabels self check: ${a} vs ${b}`);};
	near(crossingX(n => 200 + 3 * n, n => 5 * n, 0, 260), 100);
	near(crossingX(h => 70 + 45 * h, h => 120 + 30 * h, 0, 10), 10 / 3);
	const sag: CrossingMode = {kind: 'sag', x0: 0, x1: 4, yEnd: 1.5};
	const exp: [number, number, number][] = [[0.25, -0.5, 0], [0.375, 0, 1], [0.5, 1, 2]];
	for (const [a, d, c] of exp) {
		const q = quadCrossings(crossingSetup(sag, a).coeffs);
		if (Math.abs(q.disc - d) > 1e-9 || q.count !== c) throw new Error(`CrossingCounter self check at a = ${a}: Δ ${q.disc}, count ${q.count}`);
	}
	const ln: CrossingMode = {kind: 'line', a: 1, b: 0, c: 0, slope: 2};
	for (const c of [-2, -1, 0]) {
		const q = quadCrossings(crossingSetup(ln, c).coeffs);
		if (Math.abs(q.disc - (4 + 4 * c)) > 1e-9) throw new Error('CrossingCounter line self check');
	}
}
