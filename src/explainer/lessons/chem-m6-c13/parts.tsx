// Drawing parts for M6 C13 (indicators, the salt at equivalence, the jump). Reuses C12 (and through it C10 to C01: the
// board, task line, givens card, step chip, working lines, chips, crossed chips, question card, countdown, key notes,
// the C05 particle glyphs, the C07 water and meeting pair, the C06 pair bracket, the C12 burette rig). New here, and
// imported by C14:
// - Graph primitives (GG, Axes, Curve, Lit, Band, GDot, Drop, Inset): a coded lineGraph whose curves come from
//   curves.ts and draw point by point; Lit lights the stretch of a curve inside a pH band; Band slides an indicator's
//   range across the plot from the y axis;
// - PHRuler and RBand: a pH ruler with indicator range bands that blend their two colours;
// - IndSite: an indicator particle (HIn white-outlined with its proton, In- in the base colour) that gives its proton
//   to water or takes one back from an arriving hydronium; HydSite: one ion reacting with water (ethanoate takes a
//   proton, ammonium gives one);
// - Swatch (coded flask colour), SetRing (a ring moving across an indicator set plate), ColBar (HIn against In-),
//   Tree (the stronger-parent icon), ITable (attempt 2's indicator table).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, prog} from '../../kit';
import {
	An, Fade, H3O, HA, INK, INK_SOFT, NH3g, NH4g, OHg, PROTON, PROTON_INK, PicH, Sx, WaterT, clamp01, hPos, lerp, mw, picW, smooth, vis,
} from '../chem-m6-c12/parts';
import type {PDef} from './assets';
import {hexMix} from './common';
import {volAt} from './curves';

export * from '../chem-m6-c12/parts';

// ---------- colours ----------
export const PINK = '#d93f8f', PINK_INK = '#a8246a';
export const CLEAR = '#ece6dc';
export const MO_RED = '#d9402b', MO_ORA = '#ec8a2a', MO_YEL = '#eec22f';
export const MR_RED = '#cf2f5c';
export const BTB_YEL = '#e2c62c', BTB_GRN = '#5aa845', BTB_BLUE = '#2f6cc9';
export const ETH_C = '#1f8a7a';
export const HCL_C = '#6aa3d8';
export const NH3_C = '#d08a1c';
export const GREYX = '#9a948a';

// ---------- value cache (the curve solver is called many times per frame) ----------
const CACHE = new WeakMap<(v: number) => number, Map<number, number>>();
export const val = (fn: (v: number) => number, v: number) => {
	let m = CACHE.get(fn);
	if (!m) { m = new Map(); CACHE.set(fn, m); }
	let r = m.get(v);
	if (r === undefined) { r = fn(v); m.set(v, r); }
	return r;
};

// ---------- graph primitives ----------
export type GG = {x: number; y: number; w: number; h: number; x0: number; x1: number; y0: number; y1: number};
export const gx = (g: GG, v: number) => g.x + ((v - g.x0) / (g.x1 - g.x0)) * g.w;
export const gy = (g: GG, p: number) => g.y + g.h - ((Math.max(g.y0, Math.min(g.y1, p)) - g.y0) / (g.y1 - g.y0)) * g.h;
const of = (o: number | ((f: number) => number), f: number) => (typeof o === 'number' ? o : o(f));

export const Axes: React.FC<{g: GG; at: number; out?: number; o?: number | ((f: number) => number); xTicks: number[]; yTicks?: number[]; xLabel: string; yLabel: string; size?: number; grid?: boolean; xGrid?: number[]; xFmt?: (n: number) => string; yNumbers?: boolean}> = ({g, at, out, o = 1, xTicks, yTicks = [], xLabel, yLabel, size = 26, grid = true, xGrid = [], xFmt = n => String(n), yNumbers = true}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * of(o, f);
	if (v <= 0.01) return null;
	const ax = smooth(prog(f, at, 20));
	return (
		<g opacity={v}>
			{grid ? yTicks.map(t => <line key={'g' + t} x1={g.x} y1={gy(g, t)} x2={g.x + g.w} y2={gy(g, t)} stroke="#e6dece" strokeWidth={2} opacity={ax} />) : null}
			{xGrid.map(t => <line key={'v' + t} x1={gx(g, t)} y1={g.y} x2={gx(g, t)} y2={g.y + g.h} stroke="#e6dece" strokeWidth={2} opacity={ax} />)}
			<line x1={g.x} y1={g.y + g.h} x2={g.x + g.w * ax} y2={g.y + g.h} stroke={INK} strokeWidth={4} strokeLinecap="round" />
			<line x1={g.x} y1={g.y + g.h} x2={g.x} y2={g.y + g.h - g.h * ax} stroke={INK} strokeWidth={4} strokeLinecap="round" />
			{xTicks.map(t => (
				<g key={'x' + t}>
					<line x1={gx(g, t)} y1={g.y + g.h} x2={gx(g, t)} y2={g.y + g.h + 10} stroke={INK} strokeWidth={3} opacity={ax} />
					<Sx x={gx(g, t)} y={g.y + g.h + size * 1.35} text={xFmt(t)} size={size} color={INK_SOFT} anchor="middle" weight={600} at={at + 10} />
				</g>
			))}
			{yNumbers ? yTicks.map(t => <Sx key={'y' + t} x={g.x - 14} y={gy(g, t) + size * 0.35} text={String(t)} size={size} color={INK_SOFT} anchor="end" weight={600} at={at + 10} />) : null}
			<Sx x={g.x + g.w / 2} y={g.y + g.h + size * 2.75} text={xLabel} size={size + 2} color={INK} anchor="middle" weight={700} at={at + 10} />
			<Sx x={g.x - 16} y={g.y - 22} text={yLabel} size={size + 4} color={INK} anchor="start" weight={800} at={at + 10} />
		</g>
	);
};

/** A curve drawn point by point from x0 (or `from`) to `to` over `dur` frames from `at`. */
export const Curve: React.FC<{g: GG; fn: (v: number) => number; xs: number[]; color: string; at: number; dur?: number; from?: number; to?: number; o?: number | ((f: number) => number); width?: number; out?: number; dash?: string}> = ({g, fn, xs, color, at, dur = 60, from, to, o = 1, width = 6, out, dash}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10) * of(o, f);
	if (v <= 0.01 || f < at) return null;
	const a = from ?? g.x0, b = to ?? g.x1;
	const m = a + (b - a) * clamp01((f - at) / dur);
	const pts = xs.filter(q => q >= a && q <= m).map(q => [gx(g, q), gy(g, val(fn, q))]);
	if (m < b) pts.push([gx(g, m), gy(g, val(fn, m))]);
	if (pts.length < 2) return null;
	return <path d={`M${pts.map(p => p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' L')}`} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" opacity={v} strokeDasharray={dash} />;
};

/** The stretch of a monotonic curve whose pH lies between lo and hi, drawn on (thick) in `color`. */
export const litRange = (fn: (v: number) => number, lo: number, hi: number, a: number, b: number) => {
	const v1 = volAt(fn, lo, a, b), v2 = volAt(fn, hi, a, b);
	return [Math.min(v1, v2), Math.max(v1, v2)] as [number, number];
};
export const Lit: React.FC<{g: GG; fn: (v: number) => number; xs: number[]; lo: number; hi: number; color: string; at: number; out?: number; o?: number | ((f: number) => number); dur?: number; width?: number; range?: [number, number]; grad?: [string, string]}> = ({g, fn, xs, lo, hi, color, at, out, o = 1, dur = 18, width = 13, range, grad}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10) * of(o, f);
	if (v <= 0.01 || f < at) return null;
	const [v1, v2] = range ?? litRange(fn, lo, hi, g.x0, g.x1);
	const pts = [v1, ...xs.filter(q => q > v1 && q < v2), v2].map(q => [gx(g, q), gy(g, val(fn, q))]);
	const d = `M${pts.map(p => p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' L')}`;
	const id = `lit-${Math.round(g.x)}-${Math.round(g.y)}-${lo}-${hi}`;
	const y1 = gy(g, lo), y2 = gy(g, hi);
	return (
		<g opacity={v}>
			{grad ? <defs><linearGradient id={id} gradientUnits="userSpaceOnUse" x1={0} y1={y1} x2={0} y2={y2}><stop offset="0" stopColor={grad[0]} /><stop offset="1" stopColor={grad[1]} /></linearGradient></defs> : null}
			<DrawPath d={d} at={at} dur={dur} color={grad ? `url(#${id})` : color} width={width} />
		</g>
	);
};

/** An indicator's pH band sliding across the plot from the y axis; the fill blends acid colour (lo) to base colour (hi). */
export const Band: React.FC<{g: GG; lo: number; hi: number; cLo: string; cHi: string; at: number; out?: number; o?: number | ((f: number) => number); label?: string; labelColor?: string; dur?: number; op?: number; labelSize?: number}> = ({g, lo, hi, cLo, cHi, at, out, o = 1, label, labelColor = INK, dur = 26, op = 0.3, labelSize = 26}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * of(o, f);
	if (v <= 0.01) return null;
	const s = smooth(prog(f, at, dur));
	const y1 = gy(g, hi), y2 = gy(g, lo);
	const id = `band-${Math.round(g.x)}-${Math.round(g.y)}-${lo}-${hi}`;
	return (
		<g opacity={v}>
			<defs><linearGradient id={id} x1={0} y1={1} x2={0} y2={0}><stop offset="0" stopColor={cLo} /><stop offset="1" stopColor={cHi} /></linearGradient></defs>
			<rect x={g.x + 2} y={y1} width={(g.w - 2) * s} height={y2 - y1} fill={`url(#${id})`} opacity={op} />
			<line x1={g.x} y1={y1} x2={g.x + g.w * s} y2={y1} stroke={cHi} strokeWidth={2} opacity={0.7} />
			<line x1={g.x} y1={y2} x2={g.x + g.w * s} y2={y2} stroke={cLo} strokeWidth={2} opacity={0.7} />
			{label ? <Sx x={g.x + g.w - 12} y={y1 - 10} text={label} size={labelSize} color={labelColor} anchor="end" weight={700} at={at + 10} /> : null}
		</g>
	);
};

export const GDot: React.FC<{g: GG; v: number; p: number; at: number; out?: number; color?: string; r?: number; label?: string; dx?: number; dy?: number; anchor?: 'start' | 'middle' | 'end'; size?: number; labelColor?: string; ring?: boolean}> = ({g, v, p, at, out, color = INK, r = 9, label, dx = 16, dy = -14, anchor = 'start', size = 28, labelColor, ring = false}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 10);
	if (o <= 0.01) return null;
	const X = gx(g, v), Y = gy(g, p);
	return (
		<g opacity={o}>
			{ring ? <circle cx={X} cy={Y} r={r + 12} fill="none" stroke="#ffffff" strokeWidth={7} /> : null}
			{ring ? <circle cx={X} cy={Y} r={r + 12} fill="none" stroke={INK} strokeWidth={3} /> : null}
			<circle cx={X} cy={Y} r={r * (0.6 + 0.4 * prog(f, at, 10))} fill={color} stroke="#ffffff" strokeWidth={2.5} />
			{label ? <Sx x={X + dx} y={Y + dy} text={label} size={size} color={labelColor ?? color} anchor={anchor} weight={800} at={at + 4} /> : null}
		</g>
	);
};

/** Dashed guide lines from a curve point down to the x axis and/or across to the y axis. */
export const Drop: React.FC<{g: GG; v: number; p: number; at: number; out?: number; toX?: boolean; toY?: boolean; color?: string; xLabel?: string; yLabel?: string; size?: number; o?: number | ((f: number) => number)}> = ({g, v, p, at, out, toX = true, toY = false, color = INK, xLabel, yLabel, size = 28, o = 1}) => {
	const f = useCurrentFrame();
	const op = vis(f, at, out, 10) * of(o, f);
	if (op <= 0.01) return null;
	const X = gx(g, v), Y = gy(g, p);
	return (
		<g opacity={op}>
			{toX ? <DrawPath d={`M${X},${Y} L${X},${g.y + g.h}`} at={at} dur={14} color={color} width={3} dash="8 7" /> : null}
			{toY ? <DrawPath d={`M${X},${Y} L${g.x},${Y}`} at={at} dur={14} color={color} width={3} dash="8 7" /> : null}
			{toX && xLabel ? <Sx x={X} y={g.y + g.h - 14} text={xLabel} size={size} color={color} anchor="middle" weight={800} at={at + 10} /> : null}
			{toY && yLabel ? <Sx x={g.x + 12} y={Y - 12} text={yLabel} size={size} color={color} anchor="start" weight={800} at={at + 10} /> : null}
		</g>
	);
};

/** A magnifier inset: a ring on the main plot joined to a framed box that holds its own children (draw a second GG). */
export const Inset: React.FC<{x: number; y: number; w: number; h: number; from: [number, number]; r?: number; at: number; out?: number; o?: number | ((f: number) => number); children: React.ReactNode; title?: string}> = ({x, y, w, h, from, r = 26, at, out, o = 1, children, title}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * of(o, f);
	if (v <= 0.01) return null;
	const id = `inset-${Math.round(x)}-${Math.round(y)}`;
	const s = 0.92 + 0.08 * smooth(prog(f, at, 16));
	return (
		<g opacity={v}>
			<circle cx={from[0]} cy={from[1]} r={r} fill="none" stroke={INK} strokeWidth={3.5} />
			<line x1={from[0] + r * 0.7} y1={from[1] - r * 0.7} x2={x} y2={y} stroke={INK_SOFT} strokeWidth={2} strokeDasharray="6 6" />
			<line x1={from[0] + r * 0.7} y1={from[1] + r * 0.7} x2={x} y2={y + h} stroke={INK_SOFT} strokeWidth={2} strokeDasharray="6 6" />
			<g transform={`translate(${x + w / 2},${y + h / 2}) scale(${s}) translate(${-(x + w / 2)},${-(y + h / 2)})`}>
				<rect x={x} y={y} width={w} height={h} rx={18} fill="#fffdf8" stroke={INK} strokeWidth={3.5} />
				<clipPath id={id}><rect x={x} y={y} width={w} height={h} rx={18} /></clipPath>
				<g clipPath={`url(#${id})`}>{children}</g>
				{title ? <Sx x={x + 18} y={y + 36} text={title} size={24} color={INK_SOFT} weight={700} at={at + 6} /> : null}
			</g>
		</g>
	);
};

/** A small vertical bracket with a label (for a jump on a graph). */
export const JumpBracket: React.FC<{x: number; y1: number; y2: number; at: number; out?: number; color?: string; text: string; size?: number; side?: 'r' | 'l'; o?: number}> = ({x, y1, y2, at, out, color = INK, text, size = 28, side = 'r', o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10) * o;
	if (v <= 0.01) return null;
	const d = side === 'r' ? -14 : 14;
	return (
		<g opacity={v}>
			<DrawPath d={`M${x + d},${y1} L${x},${y1} L${x},${y2} L${x + d},${y2}`} at={at} dur={14} color={color} width={4} />
			<Sx x={x + (side === 'r' ? 16 : -16)} y={(y1 + y2) / 2 + size * 0.35} text={text} size={size} color={color} anchor={side === 'r' ? 'start' : 'end'} weight={800} at={at + 6} />
		</g>
	);
};

// ---------- pH ruler with indicator bands ----------
export type PR = {x: number; w: number; lo: number; hi: number};
export const rx = (R: PR, p: number) => R.x + ((p - R.lo) / (R.hi - R.lo)) * R.w;
export const PHRuler: React.FC<{R: PR; y: number; at: number; out?: number; o?: number | ((f: number) => number); size?: number; step?: number}> = ({R, y, at, out, o = 1, size = 26, step = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * of(o, f);
	if (v <= 0.01) return null;
	const d = smooth(prog(f, at, 20));
	const ticks: number[] = [];
	for (let p = R.lo; p <= R.hi + 1e-9; p += step) ticks.push(Math.round(p * 10) / 10);
	return (
		<g opacity={v}>
			<line x1={R.x} y1={y} x2={R.x + R.w * d} y2={y} stroke={INK_SOFT} strokeWidth={4} strokeLinecap="round" />
			{ticks.map((t, i) => (
				<g key={t} opacity={prog(f, at + 4 + i, 8)}>
					<line x1={rx(R, t)} y1={y - 10} x2={rx(R, t)} y2={y + 10} stroke={INK_SOFT} strokeWidth={2.5} />
					<Sx x={rx(R, t)} y={y + size + 14} text={String(t)} size={size} color={INK_SOFT} anchor="middle" weight={600} at={-1000} />
				</g>
			))}
			<Sx x={R.x + R.w + 22} y={y + 10} text="pH" size={size + 4} color={INK_SOFT} weight={800} at={-1000} />
		</g>
	);
};
/** One indicator's transition range on a ruler row (y = row centre): a bar blending cA (low pH) to cB (high pH). */
export const RBand: React.FC<{R: PR; y: number; a: number; b: number; cA: string; cB: string; at: number; out?: number; o?: number | ((f: number) => number); h?: number; label?: string; labelX?: number; size?: number; dim?: number; undim?: number; dimTo?: number; stroke?: string}> = ({R, y, a, b, cA, cB, at, out, o = 1, h = 34, label, labelX, size = 28, dim, undim, dimTo = 0.32, stroke}) => {
	const f = useCurrentFrame();
	const dm = dim === undefined ? 0 : prog(f, dim, 12) * (undim === undefined ? 1 : 1 - prog(f, undim, 12));
	const v = vis(f, at, out, 12) * of(o, f) * (1 - (1 - dimTo) * dm);
	if (v <= 0.01) return null;
	const s = smooth(prog(f, at, 18));
	const x1 = rx(R, a), x2 = rx(R, b);
	const id = `rb-${Math.round(R.x)}-${Math.round(y)}-${a}-${b}`;
	return (
		<g opacity={v}>
			<defs><linearGradient id={id} x1={0} y1={0} x2={1} y2={0}><stop offset="0" stopColor={cA} /><stop offset="1" stopColor={cB} /></linearGradient></defs>
			<rect x={x1} y={y - h / 2} width={(x2 - x1) * s} height={h} rx={h * 0.3} fill={`url(#${id})`} stroke={stroke ?? 'rgba(60,45,20,0.35)'} strokeWidth={2} />
			{label ? <Sx x={labelX ?? R.x - 20} y={y + size * 0.35} text={label} size={size} color={INK} anchor="end" weight={700} at={at} /> : null}
		</g>
	);
};

// ---------- indicator particles ----------
/** HIn: white-outlined token carrying its proton (teal) at angle a. */
export const HInTok: React.FC<{x: number; y: number; s?: number; a?: number; o?: number; noH?: boolean}> = ({x, y, s = 1, a = -0.6, o = 1, noH = false}) => {
	if (o <= 0.01) return null;
	const [hx, hy] = hPos(x, y, s, a);
	return (
		<g opacity={o}>
			{!noH ? <line x1={x} y1={y} x2={hx} y2={hy} stroke={INK} strokeWidth={2.2 * s} /> : null}
			<circle cx={x} cy={y} r={13 * s} fill="#ffffff" stroke={INK_SOFT} strokeWidth={3 * s} />
			{!noH ? <circle cx={hx} cy={hy} r={6.5 * s} fill={PROTON} stroke={PROTON_INK} strokeWidth={1.8} /> : null}
		</g>
	);
};
/** In-: the base form, filled with the indicator's base colour. */
export const InTok: React.FC<{x: number; y: number; s?: number; o?: number; color: string}> = ({x, y, s = 1, o = 1, color}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<circle cx={x} cy={y} r={13 * s} fill={color} stroke={hexMix(color, '#000000', 0.3)} strokeWidth={2.2 * s} />
		<line x1={x - 5 * s} y1={y} x2={x + 5 * s} y2={y} stroke="#ffffff" strokeWidth={2.6 * s} strokeLinecap="round" />
	</g>
));
export type IEv = {at: number; to: 'In' | 'HIn'; meet?: number};
const T_IN = 16, T_ARR = 24, T_HOP = 12;
/**
 * One indicator particle. to 'In': its proton passes to a water at w, which becomes hydronium (drawn until `meet`,
 * where the scene's MeetPair takes over). to 'HIn': a hydronium arrives from above over T_ARR frames before `at` and
 * passes its proton back, leaving a water that fades.
 */
export const IndSite: React.FC<{x: number; y: number; s?: number; a?: number; color: string; events: IEv[]; init?: 'HIn' | 'In'; w?: [number, number]; initH3O?: number; o?: number}> = ({x, y, s = 1, a = -0.6, color, events, init = 'HIn', w, initH3O, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const [wx, wy] = w ?? [x + 40 * s, y - 30 * s];
	const [hx, hy] = hPos(x, y, s, a);
	const start = (e: IEv) => (e.to === 'In' ? e.at : e.at - T_ARR);
	let ev: IEv | null = null;
	for (const e of events) if (f >= start(e)) ev = e;
	if (!ev) {
		const showH = init === 'In' && initH3O !== undefined && f < initH3O;
		return <g opacity={o}>{init === 'HIn' ? <HInTok x={x} y={y} s={s} a={a} /> : <InTok x={x} y={y} s={s} color={color} />}{showH ? <H3O x={wx} y={wy} s={s * 0.8} /> : null}</g>;
	}
	if (ev.to === 'In') {
		const t = f - ev.at;
		if (t < T_IN) {
			const p = smooth(t / T_IN);
			return (
				<g opacity={o}>
					<InTok x={x} y={y} s={s} color={color} o={p} />
					<HInTok x={x} y={y} s={s} a={a} noH o={1 - p} />
					<WaterT x={wx} y={wy} s={s * 0.8} />
					<circle cx={lerp(hx, wx + 7 * s, p)} cy={lerp(hy, wy - 6 * s, p)} r={6.5 * s} fill={PROTON} stroke={PROTON_INK} strokeWidth={1.8} />
				</g>
			);
		}
		return <g opacity={o}><InTok x={x} y={y} s={s} color={color} />{ev.meet === undefined || f < ev.meet ? <H3O x={wx} y={wy} s={s * 0.8} /> : null}</g>;
	}
	const t = f - (ev.at - T_ARR);
	const far: [number, number] = [wx + 60, wy - 260];
	if (t < T_ARR) {
		const p = smooth(t / T_ARR);
		return <g opacity={o}><InTok x={x} y={y} s={s} color={color} /><H3O x={lerp(far[0], wx, p)} y={lerp(far[1], wy, p)} s={s * 0.8} /></g>;
	}
	const t2 = t - T_ARR;
	if (t2 < T_HOP) {
		const p = smooth(t2 / T_HOP);
		return (
			<g opacity={o}>
				<HInTok x={x} y={y} s={s} a={a} noH o={p} />
				<InTok x={x} y={y} s={s} color={color} o={1 - p} />
				<WaterT x={wx} y={wy} s={s * 0.8} />
				<circle cx={lerp(wx + 7 * s, hx, p)} cy={lerp(wy - 6 * s, hy, p)} r={6.5 * s} fill={PROTON} stroke={PROTON_INK} strokeWidth={1.8} />
			</g>
		);
	}
	return <g opacity={o}><HInTok x={x} y={y} s={s} a={a} /><WaterT x={wx} y={wy} s={s * 0.8} o={1 - prog(f, ev.at + T_HOP + 10, 24)} /></g>;
};

/** One ion reacting with a water at w: 'eth' ethanoate takes the water's proton (water becomes hydroxide); 'nh4'
 *  ammonium gives its proton to the water (water becomes hydronium). */
export const HydSite: React.FC<{x: number; y: number; w: [number, number]; at: number; kind: 'eth' | 'nh4'; s?: number; a?: number; o?: number}> = ({x, y, w, at, kind, s = 1, a = -0.6, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const p = smooth(clamp01((f - at) / 18));
	const [wx, wy] = w;
	if (kind === 'eth') {
		const [hx, hy] = hPos(x, y, s, a);
		if (f < at) return <g opacity={o}><An x={x} y={y} s={s} /><WaterT x={wx} y={wy} s={s} /></g>;
		if (p < 1) return <g opacity={o}><An x={x} y={y} s={s} /><WaterT x={wx} y={wy} s={s} /><circle cx={lerp(wx, hx, p)} cy={lerp(wy, hy, p)} r={6.5 * s} fill={PROTON} stroke={PROTON_INK} strokeWidth={1.8} /></g>;
		return <g opacity={o}><HA x={x} y={y} s={s} a={a} /><OHg x={wx} y={wy} s={s} /></g>;
	}
	const px0 = x + Math.cos(a - 0.5) * 15 * s, py0 = y + Math.sin(a - 0.5) * 15 * s;
	if (f < at) return <g opacity={o}><NH4g x={x} y={y} s={s} a={a} /><WaterT x={wx} y={wy} s={s} /></g>;
	if (p < 1) return <g opacity={o}><NH3g x={x} y={y} s={s} a={a} /><WaterT x={wx} y={wy} s={s} /><circle cx={lerp(px0, wx + 7 * s, p)} cy={lerp(py0, wy - 6 * s, p)} r={8 * s} fill={PROTON} stroke={PROTON_INK} strokeWidth={1.8} /></g>;
	return <g opacity={o}><NH3g x={x} y={y} s={s} a={a} /><H3O x={wx} y={wy} s={s} /></g>;
};

// ---------- swatch, set ring, ratio columns ----------
export const Swatch: React.FC<{x: number; y: number; w?: number; h?: number; color: (f: number) => string; at: number; out?: number; label?: string; o?: number}> = ({x, y, w = 150, h = 70, color, at, out, label, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={w} height={h} rx={14} fill={color(f)} stroke="rgba(60,45,20,0.35)" strokeWidth={3} />
			{label ? <Sx x={x + w / 2} y={y + h + 34} text={label} size={26} color={INK_SOFT} anchor="middle" hand at={-1000} /> : null}
		</g>
	);
};
export const setW = (p: PDef, h: number) => picW(p, h);
/** An indicator set plate with a ring that sits on flask pos(f) (0, 1, 2; fractional values move between flasks). */
export const SetRing: React.FC<{p: PDef; u: [number, number, number]; x: number; y: number; h: number; at: number; out?: number; o?: number; pos?: (f: number) => number; ringAt?: number; ringOut?: number; color?: string}> = ({p, u, x, y, h, at, out, o = 1, pos, ringAt, ringOut, color = INK}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	const w = picW(p, h);
	const q = pos ? Math.max(0, Math.min(2, pos(f))) : 0;
	const i = Math.min(1, Math.floor(q));
	const uu = lerp(u[i], u[i + 1], q - i);
	const ro = ringAt === undefined ? 0 : vis(f, ringAt, ringOut, 10);
	return (
		<g opacity={v}>
			<PicH p={p} x={x} y={y} h={h} />
			{ro > 0.01 ? <ellipse cx={x + w * uu} cy={y + h * 0.52} rx={w * 0.165} ry={h * 0.54} fill="none" stroke={color} strokeWidth={4} opacity={ro} /> : null}
		</g>
	);
};
/** Two columns: HIn (white, outlined) and In- (base colour); frac(f) is the In- fraction. */
export const ColBar: React.FC<{x: number; base: number; H: number; frac: (f: number) => number; color: string; at: number; out?: number; o?: number; bw?: number; gap?: number; size?: number}> = ({x, base, H, frac, color, at, out, o = 1, bw = 70, gap = 30, size = 28}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const g = smooth(prog(f, at, 18));
	const q = frac(f);
	const hA = H * (1 - q) * g, hB = H * q * g;
	const xB = x + bw + gap;
	return (
		<g opacity={v}>
			<line x1={x - 14} y1={base} x2={xB + bw + 14} y2={base} stroke={INK_SOFT} strokeWidth={3} strokeLinecap="round" />
			<rect x={x} y={base - hA} width={bw} height={hA} rx={6} fill="#ffffff" stroke={INK_SOFT} strokeWidth={3} />
			<rect x={xB} y={base - hB} width={bw} height={hB} rx={6} fill={color} stroke={hexMix(color, '#000000', 0.3)} strokeWidth={2.5} />
			<Sx x={x + bw / 2} y={base + size * 1.3} text="HIn" size={size} color={INK} anchor="middle" weight={700} at={-1000} />
			<Sx x={xB + bw / 2} y={base + size * 1.3} text="In^{−}" size={size} color={hexMix(color, '#000000', 0.25)} anchor="middle" weight={700} at={-1000} />
		</g>
	);
};

// ---------- stronger-parent tree ----------
export type TParent = {t: string; strong: boolean};
export const Tree: React.FC<{x: number; y: number; a: TParent; b: TParent; res: string; color: string; at: number; lit?: number; out?: number; o?: number; size?: number}> = ({x, y, a, b, res, color, at, lit, out, o = 1, size = 28}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const lg = lit === undefined ? 0 : prog(f, lit, 14);
	const chip = (cx: number, cy: number, p: TParent) => {
		const w = mw(p.t, size, false, 700) + 34;
		return (
			<g>
				<rect x={cx - w / 2} y={cy - size} width={w} height={size * 1.6} rx={size * 0.8} fill="#fffdf8" stroke={p.strong ? INK : GREYX} strokeWidth={p.strong ? 4 : 2.5} strokeDasharray={p.strong ? undefined : '8 6'} />
				<Sx x={cx} y={cy + size * 0.32} text={p.t} size={size} color={p.strong ? INK : INK_SOFT} anchor="middle" weight={700} at={-1000} />
				<Sx x={cx} y={cy + size * 1.55} text={p.strong ? 'strong' : 'weak'} size={size * 0.8} color={p.strong ? INK : GREYX} anchor="middle" hand at={-1000} />
			</g>
		);
	};
	const ax = x - 120, bx = x + 120, ry = y + 170;
	const rw = mw(res, size + 6, true, 700) + 50;
	return (
		<g opacity={v}>
			{chip(ax, y, a)}
			{chip(bx, y, b)}
			<path d={`M${ax},${y + size * 1.9} L${ax},${y + 95} L${bx},${y + 95} L${bx},${y + size * 1.9} M${x},${y + 95} L${x},${ry - size - 8}`} fill="none" stroke={INK_SOFT} strokeWidth={3} />
			{lg > 0.01 ? <rect x={x - rw / 2 - 8} y={ry - size - 14} width={rw + 16} height={size * 1.8 + 16} rx={size} fill={color} opacity={0.22 * lg} /> : null}
			<rect x={x - rw / 2} y={ry - size - 6} width={rw} height={size * 1.8} rx={size * 0.9} fill="#fffdf8" stroke={color} strokeWidth={4} />
			<Sx x={x} y={ry + size * 0.22} text={res} size={size + 6} color={color} anchor="middle" hand at={-1000} />
		</g>
	);
};

// ---------- attempt 2 indicator table ----------
export const IROWS = [
	{n: 'methyl orange', r: '3.1–4.4', c: 'red to yellow'},
	{n: 'methyl red', r: '4.4–6.2', c: 'red to yellow'},
	{n: 'bromothymol blue', r: '6.0–7.6', c: 'yellow to blue'},
	{n: 'phenolphthalein', r: '8.3–10.0', c: 'colourless to pink'},
];
export const ITable: React.FC<{x: number; y: number; at: number; lh?: number; size?: number; cols?: [number, number, number]; marks?: {row: number; at: number; color?: string}[]}> = ({x, y, at, lh = 50, size = 32, cols = [0, 380, 640], marks = []}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12);
	if (v <= 0.01) return null;
	const W = cols[2] + 330;
	return (
		<g opacity={v}>
			<Sx x={x + cols[0]} y={y} text="indicator" size={size * 0.85} color={INK_SOFT} weight={700} at={-1000} />
			<Sx x={x + cols[1]} y={y} text="pH range" size={size * 0.85} color={INK_SOFT} weight={700} at={-1000} />
			<Sx x={x + cols[2]} y={y} text="colour change" size={size * 0.85} color={INK_SOFT} weight={700} at={-1000} />
			<line x1={x} y1={y + 14} x2={x + W} y2={y + 14} stroke="rgba(60,45,20,0.3)" strokeWidth={2.5} />
			{IROWS.map((r, i) => {
				const yy = y + 14 + lh * (i + 0.8);
				return (
					<g key={i}>
						<Sx x={x + cols[0]} y={yy} text={r.n} size={size} color={INK} weight={600} at={-1000} />
						<Sx x={x + cols[1]} y={yy} text={r.r} size={size} color={INK} weight={600} at={-1000} />
						<Sx x={x + cols[2]} y={yy} text={r.c} size={size} color={INK} weight={600} at={-1000} />
					</g>
				);
			})}
			{marks.map((m, k) => {
				const yy = y + 14 + lh * (m.row + 0.8) + 10;
				return <DrawPath key={k} d={`M${x - 4},${yy} L${x + W - 20},${yy}`} at={m.at} dur={16} color={m.color ?? '#d6a21e'} width={5} />;
			})}
		</g>
	);
};
export const iRowY = (y: number, i: number, lh = 50) => y + 14 + lh * (i + 0.8);
void Fade;
