// Kit pass 2B, trig graphs, log scales and practice (root decision 62; t01 to t04, g01 to g03): studio versions of
// TransformPanel, FeatureMarks, LevelLine, WindowMap and LogAxisMorph, a step-slider ratio readout, a plate laid
// along a tangent and the DecisionTree. Roles (t01 to t03): k amber, a blue, b teal, c violet (`mid`), curve ink,
// parent a dashed grey ghost. t04: the number in front amber, a step teal, a ratio blue.
import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, PAPER_DEEP, prog} from '../../kit';
import {CARD, CARD_SHADOW, FrameSvg, PlateSpec, SvgPlate, fmtNum, kf, niceNum, vis} from './primitives';
import {MATH_ROLES, RoleKey} from './roles';
import {LiveReadoutBoard, ParameterSlider} from './readouts';
import {FnFamily, FunctionSimulator, FunctionSimulatorProps, Tick} from './fn-sim';
import {StudioPlot, TXT, fnPath} from './plot-core';
import type {PlotTick} from './plot-core';
import {usePlatePreload} from './rig';
import type {Range} from '../graphs';

/** A value as a multiple of π when it is one (π/3, −π/4, 2π), otherwise 2 decimals. */
export const piLabel = (v: number, den = 12) => {
	if (Math.abs(v) < 1e-9) return '0';
	const k = (v / Math.PI) * den;
	if (Math.abs(k - Math.round(k)) > 1e-6) return fmtNum(v, 2);
	let n = Math.round(k), d = den;
	const g = (a: number, b: number): number => (b ? g(b, a % b) : a);
	const c = g(Math.abs(n), d); n /= c; d /= c;
	const sign = n < 0 ? '−' : '', a = Math.abs(n);
	return `${sign}${a === 1 ? '' : a}π${d === 1 ? '' : '/' + d}`;
};

// ---------- StudioTransformPanel ----------
export type TransformParams = {k: number; a: number; b: number; c: number};
export type TransformKey = {frame: number} & Partial<TransformParams>;
const PARAM_ROLE: Record<keyof TransformParams, RoleKey> = {k: 'k', a: 'a', b: 'b', c: 'mid'};
/** k, a, b and c at a frame (each eased between its own keys; defaults 1, 1, 0, 0). */
export const transformAt = (keys: readonly TransformKey[], frame: number): TransformParams => {
	const ch = (n: keyof TransformParams, d: number) => {const pts = keys.filter(q => q[n] !== undefined).map(q => [q.frame, q[n] as number] as const); return pts.length ? kf(frame, pts) : d;};
	return {k: ch('k', 1), a: ch('a', 1), b: ch('b', 0), c: ch('c', 0)};
};
/** Amplitude, period, horizontal shift, midline and range of y = k f(a(x + b)) + c for a parent of period `basePeriod`. */
export const transformFeatures = (p: TransformParams, basePeriod = 2 * Math.PI) => ({amplitude: Math.abs(p.k), period: basePeriod / Math.abs(p.a), shift: -p.b, midline: p.c, range: [p.c - Math.abs(p.k), p.c + Math.abs(p.k)] as Range});
export const COS_FAMILY: FnFamily = {f: u => Math.cos(u), df: u => -Math.sin(u)};
export const SIN_FAMILY: FnFamily = {f: u => Math.sin(u), df: u => Math.cos(u)};
type SliderSpec = {min: number; max: number; ticks: {value: number; label: string}[]};
const DEFAULT_SLIDERS: Record<keyof TransformParams, SliderSpec> = {
	k: {min: -3, max: 3, ticks: [{value: -3, label: '−3'}, {value: 0, label: '0'}, {value: 3, label: '3'}]},
	a: {min: 0.25, max: 3, ticks: [{value: 0.5, label: '½'}, {value: 1, label: '1'}, {value: 2, label: '2'}, {value: 3, label: '3'}]},
	b: {min: -Math.PI, max: Math.PI, ticks: [{value: -Math.PI, label: '−π'}, {value: 0, label: '0'}, {value: Math.PI, label: 'π'}]},
	c: {min: -2, max: 2, ticks: [{value: -2, label: '−2'}, {value: 0, label: '0'}, {value: 2, label: '2'}]},
};
/**
 * The four-dial transform panel: y = k f(a(x + b)) + c. Four ParameterSliders in role colours drive a
 * FunctionSimulator (xScale = 1/a, xShift = −b, yScale = k, yShift = c) and a feature readout, all from the same
 * state. `glow` names the dial being taught: the others dim. `slots` reveals dials one at a time (t03).
 * `rider` keys a point by DISPLAYED x. `ghost` draws the parent dashed grey. Extra simulator props pass through `sim`.
 */
export const StudioTransformPanel: React.FC<{
	x: number; y: number; width?: number; height?: number; window: {x: Range; y: Range}; keys: readonly TransformKey[]; family?: FnFamily; basePeriod?: number;
	sliders?: {x: number; y: number; width?: number; gap?: number; specs?: Partial<Record<keyof TransformParams, SliderSpec>>; only?: readonly (keyof TransformParams)[]};
	glow?: readonly {param: keyof TransformParams; from: number; to?: number}[]; slots?: Partial<Record<keyof TransformParams, number>>;
	readout?: {x: number; y: number; width?: number; rows?: readonly ('amplitude' | 'period' | 'shift' | 'midline' | 'range')[]; format?: (v: number) => string};
	rider?: readonly {frame: number; x: number}[]; ghost?: boolean | {at: number}; xTicks?: readonly (number | Tick)[]; yTicks?: readonly (number | Tick)[];
	label?: (p: TransformParams) => string; sim?: Partial<FunctionSimulatorProps>; at?: number; out?: number;
}> = ({x, y, width = 1100, height = 640, window: win, keys, family = COS_FAMILY, basePeriod = 2 * Math.PI, sliders, glow = [], slots = {}, readout, rider, ghost = true, xTicks, yTicks, label, sim = {}, at = 0, out}) => {
	const f = useCurrentFrame();
	const p = transformAt(keys, f), feat = transformFeatures(p, basePeriod);
	const X = rider?.length ? kf(f, rider.map(q => [q.frame, q.x] as const)) : 0;
	const tl = [{frame: 0, xScale: 1 / p.a, xShift: -p.b, yScale: p.k, yShift: p.c, x: p.a * (X + p.b)}];
	const glowing = glow.filter(g => f >= g.from && (g.to === undefined || f < g.to)).map(g => g.param);
	const fmt = readout?.format ?? ((v: number) => piLabel(v));
	const names: (keyof TransformParams)[] = ['k', 'a', 'b', 'c'];
	const only = sliders?.only ?? names;
	const ghostAt = typeof ghost === 'object' ? ghost.at : at;
	return <>
		<FunctionSimulator x={x} y={y} width={width} height={height} window={win} family={family} timeline={tl} xTicks={xTicks} yTicks={yTicks} at={at} out={out}
			curves={ghost ? [{fn: (v: number) => family.f(v, {}), at: ghostAt, dash: '14 10'}, ...(sim.curves ?? [])] : sim.curves}
			point={rider ? {at, ...(sim.point ?? {})} : sim.point}
			label={label ? {content: () => label(p), at, ...(sim.label ?? {})} : sim.label}
			{...Object.fromEntries(Object.entries(sim).filter(([kk]) => !['curves', 'point', 'label'].includes(kk)))} />
		{sliders ? only.map((n, i) => {
			const sp = {...DEFAULT_SLIDERS[n], ...(sliders.specs?.[n] ?? {})};
			const so = slots[n] !== undefined ? prog(f, slots[n]!, 14) : 1;
			const dim = glowing.length && !glowing.includes(n) ? 0.4 : 1;
			return <div key={n} style={{position: 'absolute', inset: 0, opacity: so * dim}}>
				<ParameterSlider x={sliders.x} y={sliders.y + i * (sliders.gap ?? 112)} width={sliders.width ?? 420} symbol={n} role={PARAM_ROLE[n]} value={p[n]} min={sp.min} max={sp.max} ticks={sp.ticks} at={at} out={out} format={n === 'b' ? (v => piLabel(v)) : undefined} />
			</div>;
		}) : null}
		{readout ? <LiveReadoutBoard x={readout.x} y={readout.y} width={readout.width ?? 460} at={at} out={out} inline rows={(readout.rows ?? ['amplitude', 'period', 'shift', 'midline', 'range']).map(r =>
			r === 'amplitude' ? {label: 'amplitude', value: feat.amplitude, text: niceNum(feat.amplitude), role: 'k' as RoleKey, glow: glowing.includes('k') ? [0, 1e9] as [number, number] : undefined}
			: r === 'period' ? {label: 'period', value: feat.period, text: fmt(feat.period), role: 'a' as RoleKey, glow: glowing.includes('a') ? [0, 1e9] as [number, number] : undefined}
			: r === 'shift' ? {label: 'shift', value: feat.shift, text: feat.shift === 0 ? '0' : `${feat.shift > 0 ? 'right' : 'left'} ${fmt(Math.abs(feat.shift))}`, role: 'b' as RoleKey, glow: glowing.includes('b') ? [0, 1e9] as [number, number] : undefined}
			: r === 'midline' ? {label: 'midline', value: feat.midline, text: `y = ${niceNum(feat.midline)}`, role: 'mid' as RoleKey, glow: glowing.includes('c') ? [0, 1e9] as [number, number] : undefined}
			: {label: 'range', value: 0, text: `${niceNum(feat.range[0])} ≤ y ≤ ${niceNum(feat.range[1])}`})} /> : null}
	</>;
};

// ---------- StudioFeatureMarks ----------
/**
 * Feature marks in the role colours over any plot (pass toFrame from FunctionSimulator's overlay or a PlotMap's
 * pf): the violet dashed midline y = c across `xRange`, the amber amplitude bar at `ampX` from the midline to the
 * top, the blue period bracket from `periodFrom` over the top, and a teal shift arrow from x = 0 to x = −b.
 */
export const StudioFeatureMarks: React.FC<{toFrame: (X: number, Y: number) => [number, number]; params: TransformParams; basePeriod?: number; xRange: Range; ampX?: number; periodFrom?: number;
	show?: {midline?: number; amplitude?: number; period?: number; shift?: number}; labels?: boolean; out?: number}> = ({toFrame, params: p, basePeriod = 2 * Math.PI, xRange, ampX, periodFrom, show = {}, labels = true, out}) => {
	const f = useCurrentFrame();
	const feat = transformFeatures(p, basePeriod), top = p.c + Math.abs(p.k);
	const mo = show.midline !== undefined ? vis(f, show.midline, out) : 0, ao = show.amplitude !== undefined ? vis(f, show.amplitude, out) : 0;
	const po = show.period !== undefined ? vis(f, show.period, out) : 0, so = show.shift !== undefined ? vis(f, show.shift, out) : 0;
	const [m0x, m0y] = toFrame(xRange[0], p.c), [m1x] = toFrame(xRange[1], p.c);
	const ax = ampX ?? -p.b, [aX, aY0] = toFrame(ax, p.c), [, aY1] = toFrame(ax, top);
	const pf = periodFrom ?? -p.b, [p0x, pY] = toFrame(pf, top), [p1x] = toFrame(pf + feat.period, top);
	const [s0x, sY] = toFrame(0, top), [s1x] = toFrame(-p.b, top);
	const lab = (t: string, px: number, py: number, c: string, anchor: 'start' | 'middle' = 'middle') => labels ? <text x={px} y={py} textAnchor={anchor} style={TXT(32, c, 800)} stroke={CARD} strokeWidth={8} paintOrder="stroke">{t}</text> : null;
	return <FrameSvg>
		{mo > 0 ? <g opacity={mo}><line x1={m0x} x2={m1x} y1={m0y} y2={m0y} stroke={MATH_ROLES.mid.stroke} strokeWidth={5} strokeDasharray="14 9" />{lab(`y = ${niceNum(p.c)}`, m1x - 10, m0y - 14, MATH_ROLES.mid.ink, 'start')}</g> : null}
		{ao > 0 ? <g opacity={ao}><line x1={aX} x2={aX} y1={aY0} y2={aY1} stroke={MATH_ROLES.k.stroke} strokeWidth={9} strokeLinecap="round" />{lab(niceNum(feat.amplitude), aX + 16, (aY0 + aY1) / 2 + 10, MATH_ROLES.k.ink, 'start')}</g> : null}
		{po > 0 ? <g opacity={po}><path d={`M${p0x},${pY - 18} V${pY - 34} H${p1x} V${pY - 18}`} fill="none" stroke={MATH_ROLES.a.stroke} strokeWidth={5} />{lab(`period ${piLabel(feat.period)}`, (p0x + p1x) / 2, pY - 46, MATH_ROLES.a.ink)}</g> : null}
		{so > 0 && Math.abs(s1x - s0x) > 4 ? <g opacity={so}><line x1={s0x} x2={s1x} y1={sY - 70} y2={sY - 70} stroke={MATH_ROLES.b.stroke} strokeWidth={6} /><path d={`M${s1x - Math.sign(s1x - s0x) * 18},${sY - 82} L${s1x},${sY - 70} L${s1x - Math.sign(s1x - s0x) * 18},${sY - 58}`} fill="none" stroke={MATH_ROLES.b.stroke} strokeWidth={6} />{lab(piLabel(Math.abs(p.b)), (s0x + s1x) / 2, sY - 84, MATH_ROLES.b.ink)}</g> : null}
	</FrameSvg>;
};

// ---------- StudioLevelLine ----------
/** Every x in [a, b] where fn(x) = L (sign changes refined by bisection; closed ends count when they sit on the line). */
export const crossingsOf = (fn: (x: number) => number, domain: Range, L: number, n = 2000, closed = true) => {
	const out: number[] = [], g = (x: number) => fn(x) - L, tol = 1e-7 * Math.max(1, Math.abs(L));
	let x0 = domain[0], g0 = g(x0);
	if (closed && Math.abs(g0) < tol) out.push(x0);
	for (let i = 1; i <= n; i++) {
		const x1 = domain[0] + ((domain[1] - domain[0]) * i) / n, g1 = g(x1);
		if (Math.abs(g1) < tol) {if (i < n || closed) out.push(x1);}
		else if (g0 * g1 < 0 && Math.abs(g0) >= tol) {let a = x0, b = x1; for (let k = 0; k < 60; k++) {const m = (a + b) / 2; if (g(a) * g(m) <= 0) b = m; else a = m;} out.push((a + b) / 2);}
		else if (Math.abs(g0) >= tol && i > 1) {
			// a touch (tangent to the line) between samples: check the local extreme
			const xm = (x0 + x1) / 2, gm = g(xm);
			if (Math.abs(gm) < 1e-4 * Math.max(1, Math.abs(L)) && Math.sign(g0) === Math.sign(g1) && Math.abs(gm) < Math.min(Math.abs(g0), Math.abs(g1))) out.push(xm);
		}
		x0 = x1; g0 = g1;
	}
	return out.filter((v, i, arr) => i === 0 || Math.abs(v - arr[i - 1]) > (domain[1] - domain[0]) / n * 1.5);
};
/**
 * The level line (the right-hand side) on the graph of fn over a closed domain: an amber line at y = level (now,
 * from frames), ink dots at every crossing and an amber crossing counter that jumps as crossings appear and vanish.
 */
export const StudioLevelLine: React.FC<{
	x: number; y: number; width?: number; height?: number; window: {x: Range; y: Range}; fn: (x: number) => number; domain: Range; level: number; closed?: boolean;
	xTicks?: readonly (number | PlotTick)[]; yTicks?: readonly (number | PlotTick)[]; xLabel?: string; yLabel?: string; levelLabel?: (L: number) => string;
	counter?: {x: number; y: number; label?: string}; at?: number; out?: number;
}> = ({x, y, width = 1100, height = 620, window: win, fn, domain, level, closed = true, xTicks, yTicks, xLabel = 'x', yLabel = 'y', levelLabel, counter, at = 0, out}) => {
	const f = useCurrentFrame();
	const xs = crossingsOf(fn, domain, level, 2000, closed);
	const o = vis(f, at, out, 14);
	return <>
		<StudioPlot x={x} y={y} width={width} height={height} window={win} xTicks={xTicks} yTicks={yTicks} xLabel={xLabel} yLabel={yLabel} at={at} out={out}>
			{m => {
				const [lx0, ly] = m.p(win.x[0], level), [lx1] = m.p(win.x[1], level);
				return <>
					<g clipPath={m.clip}><path d={fnPath(m, fn, domain[0], domain[1], 400)} stroke={INK} strokeWidth={7} fill="none" strokeLinejoin="round" /></g>
					{[domain[0], domain[1]].map((d, i) => {const [px, py] = m.p(d, fn(d)); return <circle key={i} cx={px} cy={py} r={10} fill={closed ? INK : CARD} stroke={INK} strokeWidth={4} />;})}
					<line x1={lx0} x2={lx1} y1={ly} y2={ly} stroke={MATH_ROLES.k.stroke} strokeWidth={5} />
					{levelLabel ? <text x={lx1 - 8} y={ly - 14} textAnchor="end" style={TXT(34, MATH_ROLES.k.ink, 800)} stroke={CARD} strokeWidth={8} paintOrder="stroke">{levelLabel(level)}</text> : null}
					{xs.map((cx, i) => {const [px, py] = m.p(cx, level); return <circle key={i} cx={px} cy={py} r={13} fill={INK} stroke={CARD} strokeWidth={5} />;})}
				</>;
			}}
		</StudioPlot>
		{counter ? <div style={{position: 'absolute', left: counter.x, top: counter.y, opacity: o, background: CARD, borderRadius: 18, boxShadow: CARD_SHADOW, border: `4px solid ${MATH_ROLES.k.stroke}`, padding: '8px 24px'}}>
			<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color: MATH_ROLES.k.ink}}>{counter.label ?? 'solutions'}</div>
			<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 64, color: MATH_ROLES.k.ink, lineHeight: 1.05}}>{xs.length}</div>
		</div> : null}
	</>;
};

// ---------- StudioWindowMap ----------
/**
 * Do to the domain what you do to x: on one number line, the ink x-domain strip [lo, hi] slides and stretches
 * (p 0..1) into the teal u-window [a·lo + b, a·hi + b], with live endpoint labels. Solution dots (u values) sit in
 * the window at p = 1 and slide back (`back` 0..1) to their x values (u − b)/a.
 */
export const StudioWindowMap: React.FC<{
	x: number; y: number; width?: number; range: Range; domain: Range; a: number; b: number; p: number; back?: number; dots?: readonly number[];
	ticks?: readonly PlotTick[]; fmt?: (v: number) => string; closed?: [boolean, boolean]; names?: [string, string]; at?: number; out?: number;
}> = ({x, y, width = 1400, range, domain, a, b, p, back = 0, dots = [], ticks = [], fmt = piLabel, closed = [true, true], names = ['x', 'u'], at = 0, out}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const px = (v: number) => x + ((v - range[0]) / (range[1] - range[0])) * width;
	const e = p * p * (3 - 2 * p);
	const lo = domain[0] + (a * domain[0] + b - domain[0]) * e, hi = domain[1] + (a * domain[1] + b - domain[1]) * e;
	const [L, H] = [Math.min(lo, hi), Math.max(lo, hi)];
	const col = e > 0.5 ? MATH_ROLES.b : MATH_ROLES.balance, name = e > 0.5 ? names[1] : names[0];
	return <FrameSvg style={{opacity: o}}>
		<line x1={x} x2={x + width} y1={y} y2={y} stroke={INK} strokeWidth={4} strokeLinecap="round" />
		{ticks.map(t => <g key={t.label}><line x1={px(t.value)} x2={px(t.value)} y1={y - 10} y2={y + 10} stroke={INK} strokeWidth={3} /><text x={px(t.value)} y={y + 46} textAnchor="middle" style={TXT(30, INK, 700)}>{t.label}</text></g>)}
		<rect x={px(L)} y={y - 22} width={Math.max(2, px(H) - px(L))} height={44} rx={10} fill={col.soft} stroke={col.stroke} strokeWidth={4} opacity={0.9} />
		{[[L, closed[0]], [H, closed[1]]].map(([v, c], i) => <g key={i}><circle cx={px(v as number)} cy={y} r={11} fill={c ? col.stroke : CARD} stroke={col.stroke} strokeWidth={4} />
			<text x={px(v as number)} y={y - 40} textAnchor="middle" style={TXT(36, col.ink, 800)} stroke={CARD} strokeWidth={8} paintOrder="stroke">{fmt(v as number)}</text></g>)}
		<text x={px(H) + 26} y={y + 12} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, fill: col.ink}}>{name}</text>
		{dots.map((u, i) => {const xv = (u - b) / a, v = u + (xv - u) * back, show = e > 0.95 || back > 0; return show ? <g key={i}><circle cx={px(v)} cy={y} r={13} fill={back > 0.95 ? MATH_ROLES.answer.stroke : INK} stroke={CARD} strokeWidth={4} /><text x={px(v)} y={y + 86} textAnchor="middle" style={TXT(32, back > 0.95 ? MATH_ROLES.answer.ink : INK, 800)}>{fmt(v)}</text></g> : null;})}
	</FrameSvg>;
};

// ---------- StudioLogAxisMorph ----------
/**
 * One axis that morphs from linear (0 to linMax) to logarithmic (10^lo to 10^hi) as p goes 0 to 1: every point
 * slides from its linear place to its log place; the linear tick labels fade out and the decade labels fade in,
 * both carried by the same blended map. Points stack their labels while bunched at the left. `cursor` reads
 * "size" and "log₁₀ size" for one point.
 */
export const StudioLogAxisMorph: React.FC<{
	x: number; y: number; width?: number; linMax: number; decades: Range; p: number; points: readonly {value: number; label: string; role?: RoleKey}[];
	linearTicks?: readonly {value: number; label: string}[]; decadeLabel?: (e: number) => string; decadeEvery?: number; marks?: readonly {e: number; label: string}[];
	cursor?: {index: number; x: number; y: number; width?: number; fmt?: (v: number) => string}; at?: number; out?: number;
}> = ({x, y, width = 1500, linMax, decades, p, points, linearTicks = [], decadeLabel = e => `10${String(e).split('').map(c => '⁰¹²³⁴⁵⁶⁷⁸⁹'[+c] ?? c).join('')}`, decadeEvery = 1, marks = [], cursor, at = 0, out}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const e = p * p * (3 - 2 * p);
	const lin = (v: number) => x + (Math.max(0, v) / linMax) * width;
	const lg = (v: number) => x + ((Math.log10(Math.max(10 ** decades[0], v)) - decades[0]) / (decades[1] - decades[0])) * width;
	const pos = (v: number) => lin(v) * (1 - e) + lg(v) * e;
	const dec: number[] = [];
	for (let k = decades[0]; k <= decades[1]; k += decadeEvery) dec.push(k);
	return <>
		<FrameSvg style={{opacity: o}}>
			<line x1={x} x2={x + width} y1={y} y2={y} stroke={INK} strokeWidth={5} strokeLinecap="round" />
			{linearTicks.map(t => <g key={'l' + t.label} opacity={1 - e}><line x1={pos(t.value)} x2={pos(t.value)} y1={y - 12} y2={y + 12} stroke={INK} strokeWidth={3} /><text x={pos(t.value)} y={y + 48} textAnchor="middle" style={TXT(30, INK, 700)}>{t.label}</text></g>)}
			{dec.map(k => <g key={'d' + k} opacity={e}><line x1={pos(10 ** k)} x2={pos(10 ** k)} y1={y - 12} y2={y + 12} stroke={INK} strokeWidth={3} /><text x={pos(10 ** k)} y={y + 48} textAnchor="middle" style={TXT(30, INK, 700)}>{decadeLabel(k)}</text></g>)}
			{marks.map(mk => <g key={'m' + mk.e} opacity={e}><text x={pos(10 ** mk.e)} y={y + 96} textAnchor="middle" style={TXT(34, MATH_ROLES.b.ink, 800)}>{mk.label}</text></g>)}
			{points.map((pt, i) => {
				const R = MATH_ROLES[pt.role ?? 'a'], px = pos(pt.value), lift = 60 + (i % 3) * 52 * (1 - e) + (i % 2) * 52 * e;
				return <g key={i}><line x1={px} x2={px} y1={y} y2={y - lift + 14} stroke={R.stroke} strokeWidth={3} /><circle cx={px} cy={y} r={13} fill={R.stroke} stroke={CARD} strokeWidth={4} />
					<text x={px} y={y - lift} textAnchor={px < x + 80 ? 'start' : 'middle'} style={TXT(32, R.ink, 800)} stroke={CARD} strokeWidth={8} paintOrder="stroke">{pt.label}</text></g>;
			})}
		</FrameSvg>
		{cursor ? (() => {const v = points[cursor.index].value; return <LiveReadoutBoard x={cursor.x} y={cursor.y} width={cursor.width ?? 460} at={at} out={out} inline rows={[
			{label: 'size', value: v, text: cursor.fmt ? cursor.fmt(v) : undefined, role: points[cursor.index].role ?? 'a'},
			{label: 'log₁₀ size', value: Math.log10(v), digits: 2, role: 'b'},
		]} />;})() : null}
	</>;
};

// ---------- StepRatioSlider ----------
/**
 * A teal step slider on a log scale with a blue live ratio readout 10^(step ÷ per) (per = 10 for decibels, 1 for
 * magnitude, −1 for pH), and blue "× 10" tags hopping along a strip, one per whole `per` steps.
 */
export const StepRatioSlider: React.FC<{x: number; y: number; width?: number; step: number; min: number; max: number; ticks: {value: number; label: string}[]; per?: number; symbol?: string; ratioLabel?: string; hops?: {x: number; y: number; gap?: number}; at?: number; out?: number}> = ({x, y, width = 600, step, min, max, ticks, per = 10, symbol = 'step', ratioLabel = 'ratio', hops, at = 0, out}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	const ratio = 10 ** (step / per), whole = Math.floor(Math.abs(step / per) + 1e-9);
	const rTxt = ratio >= 1000 ? Math.round(ratio).toLocaleString('en-AU') : ratio >= 10 ? fmtNum(ratio, 1) : fmtNum(ratio, 2);
	return <>
		<ParameterSlider x={x} y={y} width={width} symbol={symbol} role="b" value={step} min={min} max={max} ticks={ticks} at={at} out={out} digits={1} />
		<div style={{position: 'absolute', left: x, top: y + 140, opacity: o, display: 'flex', alignItems: 'baseline', gap: 18, background: CARD, borderRadius: 18, boxShadow: CARD_SHADOW, border: `4px solid ${MATH_ROLES.a.stroke}`, padding: '6px 24px'}}>
			<span style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, color: MATH_ROLES.a.ink}}>{ratioLabel}</span>
			<span style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, color: MATH_ROLES.a.ink, fontVariantNumeric: 'tabular-nums'}}>{`× ${rTxt}`}</span>
			<span style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 30, color: INK_SOFT}}>{`= 10^(${fmtNum(step, 1)} ÷ ${per})`}</span>
		</div>
		{hops ? <div style={{position: 'absolute', left: hops.x, top: hops.y, opacity: o, display: 'flex', gap: hops.gap ?? 18}}>
			{Array.from({length: whole}, (_, i) => <div key={i} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: MATH_ROLES.a.ink, background: MATH_ROLES.a.soft, borderRadius: 12, padding: '0 14px'}}>× 10</div>)}
		</div> : null}
	</>;
};

// ---------- TangentPlate ----------
/** Screen angle (radians, SVG sense) of slope m at (X, Y) under a plot mapping toFrame. */
export const screenAngle = (toFrame: (X: number, Y: number) => [number, number], X: number, Y: number, m: number) => {const [a, b] = toFrame(X, Y), [c, d] = toFrame(X + 1e-3, Y + m * 1e-3); return Math.atan2(d - b, c - a);};
/**
 * A plate laid along a tangent: the plate's `contact` point (file pixels; default the middle of its bottom edge)
 * sits on the frame point `at` and the plate turns to the screen angle `angle` (use screenAngle). The plate only
 * turns and is never stretched. `lift` raises it off the line along the normal.
 */
export const TangentPlate: React.FC<{plate: PlateSpec; point: [number, number]; angle: number; w: number; contact?: [number, number]; lift?: number; opacity?: number}> = ({plate, point, angle, w, contact, lift = 0, opacity = 1}) => {
	usePlatePreload([plate.src]);
	const s = w / (plate.box[2] - plate.box[0]);
	const c = contact ?? [(plate.box[0] + plate.box[2]) / 2, plate.box[3]];
	const deg = (angle * 180) / Math.PI;
	return <FrameSvg style={{opacity}}>
		<g transform={`translate(${point[0]},${point[1]}) rotate(${deg}) translate(0,${-lift})`}>
			<SvgPlate plate={plate} x={-(c[0] - plate.box[0]) * s} y={-(c[1] - plate.box[1]) * s} w={w} />
		</g>
	</FrameSvg>;
};

// ---------- DecisionTree ----------
export type DecisionNode = {question: string; branches: readonly {label: string; litAt?: number; result?: string}[]};
/**
 * The practice series' decision tree: question cards in a row, each with its branches as pills below. As the givens
 * are read, a branch lights amber (litAt) and its result chip drops onto the board row (boardY) under the card.
 * `scale` shrinks the whole tree for the memory card (text never below 26 px).
 */
export const DecisionTree: React.FC<{x: number; y: number; nodes: readonly DecisionNode[]; colW?: number; gap?: number; size?: number; boardY?: number; scale?: number; at?: number; out?: number}> = ({x, y, nodes, colW = 460, gap = 44, size = 34, boardY, scale = 1, at = 0, out}) => {
	const f = useCurrentFrame();
	const {fps} = useVideoConfig();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const A = MATH_ROLES.k, fs = Math.max(26, size * scale), pillH = fs * 1.7, cardH = fs * 2.4;
	return <div style={{position: 'absolute', left: x, top: y, opacity: o, transform: scale !== 1 ? `scale(${scale})` : undefined, transformOrigin: 'top left'}}>
		{nodes.map((n, i) => {
			const nx = i * (colW + gap), anyLit = n.branches.some(b => b.litAt !== undefined && f >= b.litAt);
			return <div key={i} style={{position: 'absolute', left: nx, top: 0, width: colW}}>
				<div style={{height: cardH, boxSizing: 'border-box', background: CARD, borderRadius: 16, boxShadow: CARD_SHADOW, border: `3px solid ${anyLit ? A.stroke : 'rgba(60,45,20,0.15)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size * 1.1, color: INK}}>{n.question}</div>
				<svg width={colW} height={n.branches.length * (pillH + 14) + 20} style={{position: 'absolute', left: 0, top: cardH, overflow: 'visible'}}>
					{n.branches.map((b, j) => {const lit = b.litAt !== undefined ? prog(f, b.litAt, 10) : 0; return <path key={j} d={`M28,0 V${20 + j * (pillH + 14) + pillH / 2} H52`} fill="none" stroke={lit > 0.5 ? A.stroke : PAPER_DEEP} strokeWidth={lit > 0.5 ? 5 : 3} />;})}
				</svg>
				{n.branches.map((b, j) => {
					const lit = b.litAt !== undefined ? prog(f, b.litAt, 10) : 0;
					return <div key={j} style={{position: 'absolute', left: 52, top: cardH + 20 + j * (pillH + 14), width: colW - 52, height: pillH, boxSizing: 'border-box', borderRadius: pillH / 2, display: 'flex', alignItems: 'center', padding: '0 20px',
						background: lit > 0 ? `rgba(248,232,200,${0.3 + 0.7 * lit})` : '#fbf8f1', border: `3px solid ${lit > 0.5 ? A.stroke : 'rgba(60,45,20,0.18)'}`, fontFamily: FONT_DISPLAY, fontWeight: lit > 0.5 ? 800 : 600, fontSize: size, color: lit > 0.5 ? A.ink : INK, transform: `scale(${1 + 0.04 * lit * (1 - lit) * 4})`}}>{b.label}</div>;
				})}
				{boardY !== undefined ? n.branches.filter(b => b.result && b.litAt !== undefined && f >= b.litAt + 10).map((b, j) => {
					const s = spring({frame: f - (b.litAt! + 10), fps, config: {damping: 14, stiffness: 120}});
					const j0 = n.branches.indexOf(b), from = cardH + 20 + j0 * (pillH + 14);
					return <div key={'r' + j} style={{position: 'absolute', left: 20, top: from + (boardY - from) * s, width: colW - 40, textAlign: 'center', boxSizing: 'border-box', borderRadius: 14, padding: '6px 14px', background: CARD, border: `4px solid ${A.stroke}`, boxShadow: CARD_SHADOW, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size * 1.25, color: A.ink, opacity: Math.min(1, s * 2)}}>{b.result}</div>;
				}) : null}
			</div>;
		})}
	</div>;
};
