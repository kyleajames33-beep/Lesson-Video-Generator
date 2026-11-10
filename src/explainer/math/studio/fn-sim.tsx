// FunctionSimulator (also exported as FunctionRider): the d01 one-timeline design for ANY function f with a
// supplied f′. One frame-keyed timeline drives the curve, a point riding it, its tangent, the tangent
// triangle, a secant with held stops, comparison lines, ghost curves, gradient dots and the readout board,
// so none of them can disagree.
//
// Coordinates.
//   Base input u: the point's position on the base function f(u, p) (timeline channel `x`).
//   Displayed curve: X = xScale·u + xShift, Y = yScale·f(u) + yShift. A sideways stretch (xScale) or a
//   vertical stretch or fold (yScale, may pass through 0 and go negative) therefore CARRIES the point,
//   the tangent and the triangle, exactly as the transform carries the curve. Displayed gradient:
//   (yScale / xScale)·f′(u).
//   Reflection in y = x (channel `reflect`, 0 to 1): every displayed point (X, Y) is carried to
//   ((1 − s)X + sY, (1 − s)Y + sX); directions are carried the same way, so at s = 1 the tangent's slope is
//   1 / m and the triangle's legs have swapped (labels swap from run to rise at the half way point).
//   Needs an equal-unit plot (the component throws otherwise).
// Domain. `domain` lists the connected base intervals (open ends by default); `excluded` lists removed
// points. The curve is never evaluated outside them, and the point throws if keyed outside.
// Labels, readouts and slope text hide while a fold (yScale or xScale changing sign) or a reflection is in
// transit, and show again at its ends (d04 author note c).
import React, {useId} from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {graphTransform} from '../graphs';
import type {DomainInterval, Range} from '../graphs';
import {CARD, FrameSvg, kf, fmtNum, niceNum, vis} from './primitives';
import {MATH_AMBER, MATH_EXCLUDED, MATH_GRADIENT, MATH_INNER, MATH_TEAL as MATH_ROLES_TEAL} from './roles';
import {LiveReadoutBoard, ReadoutRow} from './readouts';
import {MagnifierLeader} from './anchor';

export type FnParams = Record<string, number>;
export type FnFamily = {
	f: (u: number, p: FnParams) => number;
	df: (u: number, p: FnParams) => number;
	/** Connected base intervals (open ends unless included). Default: the whole real line. */
	domain?: readonly DomainInterval[] | ((p: FnParams) => readonly DomainInterval[]);
	/** Points removed from the domain (asymptotes or holes). The curve breaks there. */
	excluded?: readonly number[];
	/** Open circles drawn at removed points whose limit is finite: base u and the limit of f there. */
	holes?: readonly {u: number; y: number}[];
};

export type FnKey = {frame: number; x?: number; q?: number; xScale?: number; yScale?: number; xShift?: number; yShift?: number; reflect?: number; p?: FnParams};
const CHANNELS = ['x', 'q', 'xScale', 'yScale', 'xShift', 'yShift', 'reflect'] as const;
type Channel = (typeof CHANNELS)[number];
const DEFAULTS: Record<Channel, number> = {x: 0, q: NaN, xScale: 1, yScale: 1, xShift: 0, yShift: 0, reflect: 0};

export type FnState = {
	frame: number;
	/** Base input of the point, and f, f′ there. */
	u: number; fu: number; dfu: number;
	params: FnParams;
	xScale: number; yScale: number; xShift: number; yShift: number; reflect: number;
	/** Displayed point and gradient before the reflection. */
	X: number; Y: number; slope: number;
	/** Carried point and slope after the reflection (equal to X, Y, slope when reflect = 0). */
	px: number; py: number; pslope: number;
	/** Secant partner (base q, displayed point) and the secant's slope; NaN when no secant is keyed. */
	q: number; qX: number; qY: number; secantSlope: number;
	/** 1 when settled, 0 while a fold or reflection is in transit. */
	settled: number;
};

const domainOf = (fam: FnFamily, p: FnParams): readonly DomainInterval[] => {
	const d = typeof fam.domain === 'function' ? fam.domain(p) : fam.domain;
	return d ?? [{from: -Infinity, to: Infinity}];
};
/** True when base u is inside the family's domain for these parameters. */
export const fnInDomain = (fam: FnFamily, p: FnParams, u: number) => {
	if (!Number.isFinite(u)) return false;
	if (fam.excluded?.some(e => Math.abs(e - u) < 1e-12)) return false;
	return domainOf(fam, p).some(d => (u > d.from || (u === d.from && !!d.includeFrom)) && (u < d.to || (u === d.to && !!d.includeTo)));
};

const keysFor = (timeline: readonly FnKey[], c: Channel) => timeline.filter(k => k[c] !== undefined).map(k => [k.frame, k[c] as number] as const);

/** Evaluate every channel at a frame (eased between the keys that set it, held otherwise). */
export const fnStateAt = (fam: FnFamily, timeline: readonly FnKey[], frame: number, opts: {logParams?: readonly string[]; baseParams?: FnParams} = {}): FnState => {
	const ch = {...DEFAULTS};
	for (const c of CHANNELS) {
		const pts = keysFor(timeline, c);
		if (pts.length) ch[c] = kf(frame, pts);
	}
	const params: FnParams = {...(opts.baseParams ?? {})};
	const names = new Set<string>();
	timeline.forEach(k => Object.keys(k.p ?? {}).forEach(n => names.add(n)));
	names.forEach(n => {
		const pts = timeline.filter(k => k.p && k.p[n] !== undefined).map(k => [k.frame, k.p![n]] as const);
		if (opts.logParams?.includes(n)) {
			if (pts.some(([, v]) => !(v > 0))) throw new RangeError(`FunctionSimulator: log-eased parameter ${n} must stay positive`);
			params[n] = Math.exp(kf(frame, pts.map(([fr, v]) => [fr, Math.log(v)] as const)));
		} else params[n] = kf(frame, pts);
	});
	if (Math.abs(ch.xScale) < 1e-9) throw new RangeError('FunctionSimulator: xScale may not be 0');
	const u = ch.x;
	const fu = fam.f(u, params), dfu = fam.df(u, params);
	const X = ch.xScale * u + ch.xShift, Y = ch.yScale * fu + ch.yShift;
	const slope = (ch.yScale / ch.xScale) * dfu;
	const s = ch.reflect;
	const px = (1 - s) * X + s * Y, py = (1 - s) * Y + s * X;
	const dX = (1 - s) + s * slope, dY = (1 - s) * slope + s;
	const pslope = Math.abs(dX) < 1e-9 ? Infinity : dY / dX;
	let qX = NaN, qY = NaN, secantSlope = NaN;
	if (Number.isFinite(ch.q)) {
		qX = ch.xScale * ch.q + ch.xShift;
		qY = ch.yScale * fam.f(ch.q, params) + ch.yShift;
		secantSlope = Math.abs(qX - X) < 1e-9 ? slope : (qY - Y) / (qX - X);
	}
	return {frame, u, fu, dfu, params, xScale: ch.xScale, yScale: ch.yScale, xShift: ch.xShift, yShift: ch.yShift, reflect: s, X, Y, slope, px, py, pslope, q: ch.q, qX, qY, secantSlope, settled: settledAt(timeline, frame)};
};

/** 0 while a sign-changing fold (xScale or yScale) or a reflection is between its keys; fades over 8 frames at each end. */
export const settledAt = (timeline: readonly FnKey[], frame: number) => {
	let s = 1;
	for (const c of ['xScale', 'yScale', 'reflect'] as const) {
		const pts = keysFor(timeline, c);
		for (let i = 0; i + 1 < pts.length; i++) {
			const [a, va] = pts[i], [b, vb] = pts[i + 1];
			const moving = c === 'reflect' ? Math.abs(va - vb) > 1e-9 : va * vb < 0;
			if (!moving || frame < a || frame > b) continue;
			const fade = Math.min(prog(frame, a, 8), 1 - prog(frame, b - 8, 8));
			s = Math.min(s, 1 - fade);
		}
	}
	return s;
};

/** Key list that moves a channel through held stops: each stop eases in over `move` frames and holds until the next. */
export const heldStops = (channel: 'x' | 'q', stops: readonly {frame: number; value: number}[], move = 24): FnKey[] => {
	const out: FnKey[] = [];
	stops.forEach((s, i) => {
		if (i === 0) out.push({frame: s.frame, [channel]: s.value});
		else {
			out.push({frame: s.frame - move, [channel]: stops[i - 1].value});
			out.push({frame: s.frame, [channel]: s.value});
		}
	});
	return out;
};

/** The direction word for a gradient (d09): uphill, level (|m| below the threshold) or downhill. */
export const directionWord = (m: number, threshold = 0.05, words: [string, string, string] = ['downhill', 'level', 'uphill']) => (Math.abs(m) < threshold ? words[1] : m > 0 ? words[2] : words[0]);

export type Tick = {value: number; label: string; /** Optional second line under an x tick (two-line labels, such as years under t). */ sub?: string};
const PI_FRAC: Record<string, string> = {'1/2': 'π/2', '1/1': 'π', '3/2': '3π/2', '2/1': '2π', '1/4': 'π/4', '3/4': '3π/4', '1/3': 'π/3', '2/3': '2π/3', '1/6': 'π/6', '5/6': '5π/6', '5/4': '5π/4', '7/4': '7π/4', '5/2': '5π/2', '3/1': '3π', '4/1': '4π'};
/** Radian ticks every π/den from lo to hi (in multiples of π), labelled π/2, π, 3π/2 and so on. */
export const piTicks = (lo: number, hi: number, den = 2): Tick[] => {
	const out: Tick[] = [];
	for (let k = Math.ceil(lo * den); k <= Math.floor(hi * den); k++) {
		if (k === 0) continue;
		const g = gcd(Math.abs(k), den), n = Math.abs(k) / g, d = den / g;
		const key = `${n}/${d}`;
		const lab = PI_FRAC[key] ?? (d === 1 ? `${n}π` : `${n}π/${d}`);
		out.push({value: (k * Math.PI) / den, label: (k < 0 ? '−' : '') + lab});
	}
	return out;
};
const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : a);
const toTicks = (t: readonly (number | Tick)[]): Tick[] => t.map(v => (typeof v === 'number' ? {value: v, label: niceNum(v)} : v));

export type FnRow = Omit<ReadoutRow, 'value' | 'text'> & {
	value?: (s: FnState) => number;
	text?: (s: FnState) => string;
	/** Blank the number while a fold or reflection is in transit (default true). */
	hideInTransit?: boolean;
};

export type FnGeometry = {
	s: FnState;
	/** Frame-space carried point. */
	pt: [number, number];
	/** Displayed graph coordinates to frame space (no reflection applied). */
	toFrame: (X: number, Y: number) => [number, number];
	/** Displayed graph coordinates carried by the current reflection, then to frame space. */
	carry: (X: number, Y: number) => [number, number];
	box: {left: number; top: number; width: number; height: number};
};

export type FunctionSimulatorProps = {
	x: number; y: number; width?: number; height?: number;
	window: {x: Range; y: Range};
	family: FnFamily;
	timeline: readonly FnKey[];
	/** Parameters eased in their logarithm (for example a base swept from 4 down to ½). */
	logParams?: readonly string[];
	baseParams?: FnParams;
	draw?: {at: number; dur?: number};
	color?: string | ((s: FnState) => string);
	curveWidth?: number;
	/** Draw the main curve only up to the point (left to right): a traced curve. */
	clipToPoint?: {from: number};
	label?: {content: (s: FnState) => React.ReactNode; at: number; out?: number; pos?: (s: FnState) => [number, number]; side?: 'right' | 'left'; size?: number};
	point?: {at: number; out?: number; color?: string; r?: number};
	tangent?: {at: number; out?: number; halfLength?: number; color?: string};
	/** Tangent triangle. run in base units carried by the transform (`carried`, default) or fixed in displayed units (`screen`). */
	triangle?: {run: number; at: number; out?: number; mode?: 'carried' | 'screen'; dim?: [number, number]; labels?: {first?: (len: number, s: FnState) => string; second?: (len: number, s: FnState) => string}};
	/** Secant from the point to the partner keyed by channel q (use heldStops for stops). */
	secant?: {at: number; out?: number; color?: string; extend?: number; showQ?: boolean};
	/** Round zoom inset around the point, with a magnifier leader. */
	zoom?: {cx: number; cy: number; r: number; /** A fixed factor, or a function of the frame (animated, resampled every frame). */ factor: number | ((frame: number) => number); at: number; out?: number};
	/** Straight comparison lines through the point (slope from the state), dashed grey by default. */
	lines?: readonly {slope: (s: FnState) => number; at: number; out?: number; color?: string; dash?: string; halfLength?: number; label?: string}[];
	/** Extra curves in displayed coordinates: ghosts (dashed grey by default) and comparison curves. */
	curves?: readonly {fn: (X: number) => number; at: number; out?: number; color?: string; dash?: string; width?: number; domain?: Range; label?: {text: string; X: number; color?: string}; /** Carry this curve by the reflection too (default: it stays put as a fixed reference). */ carried?: boolean}[];
	/** Dots at (X, gradient) left behind by the riding point, sampled every `every` frames. */
	gradientDots?: {at: number; out?: number; every?: number; color?: string; bars?: boolean;
		/** Drop dots only at these displayed x values, each as the riding point passes it (instead of every few frames). */
		xs?: readonly number[];
		/** Dashed target curve the dots should land on; it turns solid at solidAt. */
		target?: {fn: (X: number) => number; at?: number; solidAt?: number; color?: string}};
	/** Markers at displayed coordinates that pop in on cues (ratio panels, landmarks). */
	markers?: readonly {X: number; Y: number; at: number; out?: number; color?: string; label?: string; open?: boolean}[];
	/** Shaded rectangles in displayed coordinates (domain shading, sign tints). */
	regions?: readonly {x: Range; y?: Range; color: string; opacity?: number; at: number; out?: number}[];
	/** Dashed vertical asymptotes at displayed X. */
	asymptotes?: readonly number[];
	/** Colour of the asymptote lines (default the grey excluded colour). */
	asymptoteColor?: string;
	/** Lift the pen of the extra `curves` at the listed asymptotes, so no curve is drawn across one. */
	curvesBreakAtAsymptotes?: boolean;
	/** Do not draw the main curve (use the simulator for its axes, point and extra curves only). */
	hideMainCurve?: boolean;
	/** The mirror line y = x (drawn automatically when the timeline keys a reflection). */
	mirror?: {at: number; out?: number};
	dropLine?: {at: number; out?: number};
	/**
	 * Branch-safe riding (tan x and other asymptotes): within `gap` base units of an excluded value, or while the
	 * point is off the plot, the point, tangent, triangle, lines and readout numbers fade out, so nothing is
	 * ever drawn across a break; they reappear on the next branch.
	 */
	branchSafe?: {gap?: number};
	/** The normal at the point (perpendicular in maths units). `turn` animates the tangent turning a quarter turn onto it. */
	normal?: {at: number; out?: number; halfLength?: number; color?: string; turn?: {at: number; dur?: number}; rightAngle?: boolean};
	xLabel?: string; yLabel?: string;
	xTicks?: readonly (number | Tick)[] | ((frame: number) => readonly (number | Tick)[]);
	yTicks?: readonly (number | Tick)[];
	readout?: {x: number; y: number; width?: number; at?: number; out?: number; title?: string; inline?: boolean; size?: number; rows: FnRow[]};
	overlay?: (g: FnGeometry) => React.ReactNode;
	/** Same as overlay; use it to move a plate sprite (crank, walker, cabin) from the point. */
	onPoint?: (g: FnGeometry) => React.ReactNode;
	/** Hide the grid and axis labels (thumbnail panels). */
	bare?: boolean;
	at?: number; out?: number;
	/**
	 * Kit pass 2B (opt in): draw-as-you-go. The main curve is drawn from displayed x = `from` up to the riding point
	 * (as clipToPoint), with a pen nib at the point so the graph is seen being written as the clock runs.
	 */
	drawAsYouGo?: {from: number; pen?: boolean; color?: string};
	/**
	 * Kit pass 2B (opt in): asymptotes that move with the transform. `base` lists vertical asymptotes in BASE u
	 * (drawn at X = xScale·u + xShift); `horizontal` lists horizontal ones in base y (drawn at Y = yScale·y + yShift).
	 */
	movingAsymptotes?: {base?: readonly number[]; horizontal?: readonly number[]; color?: string; at?: number; out?: number};
};

const TXT = (size: number, color = INK_SOFT, weight = 700): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontSize: size, fontWeight: weight, fill: color} as React.CSSProperties);
const range = (a: number, b: number) => Array.from({length: Math.max(0, b - a + 1)}, (_, i) => a + i);

/** Sample the displayed curve per connected base interval, never outside the domain. Returns polylines in displayed coords. */
export const sampleDisplayed = (fam: FnFamily, s: Pick<FnState, 'params' | 'xScale' | 'yScale' | 'xShift' | 'yShift'>, win: {x: Range; y: Range}, n = 360): [number, number][][] => {
	const ext = (win.y[1] - win.y[0]) * 3;
	// Base interval covering the window.
	const ua = (win.x[0] - s.xShift) / s.xScale, ub = (win.x[1] - s.xShift) / s.xScale;
	const lo = Math.min(ua, ub), hi = Math.max(ua, ub);
	const cuts = (fam.excluded ?? []).filter(e => e > lo && e < hi);
	const out: [number, number][][] = [];
	for (const d of domainOf(fam, s.params)) {
		const a0 = Math.max(lo, d.from), b0 = Math.min(hi, d.to);
		if (!(b0 > a0)) continue;
		const edges = [a0, ...cuts.filter(c => c > a0 && c < b0), b0];
		for (let i = 0; i + 1 < edges.length; i++) {
			const a = edges[i], b = edges[i + 1], span = b - a;
			const openA = a === d.from ? !d.includeFrom : cuts.includes(a), openB = b === d.to ? !d.includeTo : cuts.includes(b);
			const us: number[] = [];
			const eps = span * 1e-7;
			const A = openA ? a + eps : a, B = openB ? b - eps : b;
			for (let k = 0; k <= n; k++) us.push(A + ((B - A) * k) / n);
			// extra samples crowding the open ends (steep near ln 0 or 1/x)
			for (let k = 1; k <= 7; k++) {
				if (openA) us.push(a + span * 10 ** -k);
				if (openB) us.push(b - span * 10 ** -k);
			}
			us.sort((p, q) => p - q);
			const line: [number, number][] = [];
			for (const u of us) {
				if (!fnInDomain(fam, s.params, u) && !(u === A || u === B)) continue;
				const v = fam.f(u, s.params);
				if (!Number.isFinite(v)) continue;
				const Y = Math.max(win.y[0] - ext, Math.min(win.y[1] + ext, s.yScale * v + s.yShift));
				line.push([s.xScale * u + s.xShift, Y]);
			}
			if (line.length > 1) out.push(s.xScale < 0 ? line.reverse() : line);
		}
	}
	return out;
};

export const FunctionSimulator: React.FC<FunctionSimulatorProps> = props => {
	const {x, y, width = 1100, height = 760, window: win, family: fam, timeline, logParams, baseParams, draw, color = INK, curveWidth = 7, clipToPoint, label, point, tangent, triangle, secant, zoom, lines = [], curves = [], gradientDots, markers = [], regions = [], asymptotes = [], mirror, dropLine, branchSafe, normal, xLabel = 'x', yLabel = 'y', readout, overlay, onPoint, bare = false, at = 0, out, asymptoteColor, curvesBreakAtAsymptotes = false, hideMainCurve = false, drawAsYouGo, movingAsymptotes} = props;
	const f = useCurrentFrame();
	const {fps} = useVideoConfig();
	const id = `fsim-${useId().replace(/:/g, '')}`;
	const st = fnStateAt(fam, timeline, f, {logParams, baseParams});
	const t = graphTransform({x: win.x, y: win.y, width, height});
	const b = t.box;
	const usesReflect = timeline.some(k => k.reflect !== undefined);
	if (usesReflect && Math.abs(t.sx - t.sy) / t.sx > 0.02) throw new RangeError('FunctionSimulator: a reflection in y = x needs an equal-unit plot (match the window aspect to width - 126 by height - 120)');
	// Branch visibility: 0 near an excluded value or off the plot (branch-safe riders only).
	const bv = !branchSafe ? 1 : (() => {
		const gap = branchSafe.gap ?? 0.12;
		const dEx = Math.min(Infinity, ...(fam.excluded ?? []).map(e => Math.abs(st.u - e)));
		const nearEx = Math.max(0, Math.min(1, (dEx - gap) / gap));
		const span = win.y[1] - win.y[0];
		const offY = Number.isFinite(st.Y) ? Math.max(0, Math.min(1, (span * 0.04 - Math.max(win.y[0] - st.Y, st.Y - win.y[1], -span * 0.04)) / (span * 0.04))) : 0;
		return Math.min(nearEx, offY);
	})();
	const pointVisible = point ? vis(f, point.at, point.out) * bv > 0 : false;
	if (pointVisible && !fnInDomain(fam, st.params, st.u)) throw new RangeError(`FunctionSimulator: the point is keyed outside the domain (u = ${st.u})`);
	const col = typeof color === 'function' ? color(st) : color;
	const o = vis(f, at, out, 14);
	if (o <= 0.001 && !readout) return null;

	const S = st.reflect;
	const carryG = (X: number, Y: number): [number, number] => [(1 - S) * X + S * Y, (1 - S) * Y + S * X];
	const sp = (X: number, Y: number) => {const q = t.point(X, Y); return [q.x, q.y] as [number, number];};
	const spc = (X: number, Y: number) => sp(...carryG(X, Y));
	const pathOf = (pts: [number, number][], carry = true) => pts.map((p, i) => {const [a, c] = carry ? spc(p[0], p[1]) : sp(p[0], p[1]); return `${i ? 'L' : 'M'}${a.toFixed(2)},${c.toFixed(2)}`;}).join(' ');

	const polylines = sampleDisplayed(fam, st, win);
	const drawP = draw ? prog(f, draw.at, draw.dur ?? 36) : 1;
	const P = spc(st.X, st.Y);
	const toFrame = (X: number, Y: number): [number, number] => {const q = sp(X, Y); return [x + q[0], y + q[1]];};
	const carry = (X: number, Y: number): [number, number] => {const q = spc(X, Y); return [x + q[0], y + q[1]];};
	const geo: FnGeometry = {s: st, pt: [x + P[0], y + P[1]], toFrame, carry, box: b};
	const settled = st.settled * bv;

	// A segment through the carried point along a displayed-space direction (1, m), carried by the reflection.
	const segment = (m: number, half: number) => {
		const dX = (1 - S) + S * m, dY = (1 - S) * m + S;
		const vx = dX * t.sx, vy = -dY * t.sy, len = Math.hypot(vx, vy) || 1;
		return {x1: P[0] - (vx / len) * half, y1: P[1] - (vy / len) * half, x2: P[0] + (vx / len) * half, y2: P[1] + (vy / len) * half};
	};

	// Ticks
	const rawXt = typeof props.xTicks === 'function' ? props.xTicks(f) : props.xTicks;
	const xt = toTicks(rawXt ?? range(Math.ceil(win.x[0]), Math.floor(win.x[1])).filter(v => v !== 0));
	const yt = toTicks(props.yTicks ?? range(Math.ceil(win.y[0]), Math.floor(win.y[1])).filter(v => v !== 0 && (win.y[1] - win.y[0] <= 8 || v % 2 === 0)));
	const O = t.point(Math.max(win.x[0], Math.min(win.x[1], 0)), Math.max(win.y[0], Math.min(win.y[1], 0)));

	// Triangle in displayed coords, carried.
	let tri: {a: [number, number]; c: [number, number]; e: [number, number]; run: number; rise: number} | undefined;
	if (triangle) {
		const run = (triangle.mode ?? 'carried') === 'carried' ? st.xScale * triangle.run : triangle.run;
		const rise = (triangle.mode ?? 'carried') === 'carried' ? st.yScale * st.dfu * triangle.run : st.slope * run;
		tri = {a: spc(st.X, st.Y), c: spc(st.X + run, st.Y), e: spc(st.X + run, st.Y + rise), run, rise};
	}
	const triO = triangle ? bv * vis(f, triangle.at, triangle.out) * (triangle.dim ? 1 - 0.65 * vis(f, triangle.dim[0], triangle.dim[1]) : 1) : 0;

	// Secant
	const secO = secant && Number.isFinite(st.q) ? vis(f, secant.at, secant.out) : 0;
	const Q = secO > 0 ? spc(st.qX, st.qY) : null;

	// Gradient dots: past states of the point.
	const dots: [number, number][] = [];
	if (gradientDots && f >= gradientDots.at && !gradientDots.xs) {
		const every = gradientDots.every ?? 6;
		for (let g = gradientDots.at; g <= f; g += every) {
			const sg = fnStateAt(fam, timeline, g, {logParams, baseParams});
			if (Number.isFinite(sg.slope)) dots.push([sg.X, sg.slope]);
		}
	}
	if (gradientDots?.xs && f >= gradientDots.at) {
		// A listed x gets its dot once the point has reached it since gradientDots.at (either direction).
		const X0 = fnStateAt(fam, timeline, gradientDots.at, {logParams, baseParams}).X;
		for (const xv of gradientDots.xs) {
			if (!((xv - X0) * (st.X - xv) >= 0 && Math.abs(st.X - X0) >= Math.abs(xv - X0) - 1e-9)) continue;
			const u = (xv - st.xShift) / st.xScale;
			if (!fnInDomain(fam, st.params, u)) continue;
			const m = (st.yScale / st.xScale) * fam.df(u, st.params);
			if (Number.isFinite(m)) dots.push([xv, m]);
		}
	}

	const labelO = label ? vis(f, label.at, label.out) * settled : 0;
	const labelPos = label && labelO > 0 ? (() => {
		const [LX, LY] = label.pos ? label.pos(st) : (() => {
			const X = win.x[1] - (win.x[1] - win.x[0]) * 0.08;
			const u = (X - st.xShift) / st.xScale;
			const v = fnInDomain(fam, st.params, u) ? st.yScale * fam.f(u, st.params) + st.yShift : st.Y;
			return [X, Math.max(win.y[0], Math.min(win.y[1] * 0.92, v))] as [number, number];
		})();
		const q = spc(LX, LY);
		return {left: x + q[0], top: y + q[1] - 34};
	})() : null;

	const zoomO = zoom ? vis(f, zoom.at, zoom.out) : 0;

	const curveLayer = (scale = 1, clipRect?: string) => (
		<g>
			{curves.map((c, i) => {
				const co = vis(f, c.at, c.out);
				if (co <= 0.001) return null;
				const [a, bb] = c.domain ?? win.x;
				const pts: [number, number][] = [];
				const breaks: number[] = [];
				for (let k = 0; k <= 300; k++) {
					const X = a + ((bb - a) * k) / 300, Y = c.fn(X);
					if (curvesBreakAtAsymptotes && k > 0 && asymptotes.some(A => (A - (a + ((bb - a) * (k - 1)) / 300)) * (A - X) <= 0)) breaks.push(pts.length);
					if (Number.isFinite(Y)) pts.push([X, Math.max(win.y[0] - 10, Math.min(win.y[1] + 10, Y))]);
				}
				const dC = !breaks.length ? pathOf(pts, !!c.carried) : [0, ...breaks].map((s0, j, arr) => pathOf(pts.slice(s0, j + 1 < arr.length ? arr[j + 1] : pts.length), !!c.carried)).join(' ');
				return <path key={'c' + i} d={dC} stroke={c.color ?? MATH_INNER} strokeWidth={(c.width ?? 5) / scale} strokeDasharray={c.dash ?? (c.color ? undefined : '14 10')} fill="none" opacity={co * (c.color ? 1 : 0.85)} strokeLinecap="round" />;
			})}
			<g clipPath={clipRect}>
				{hideMainCurve ? null : polylines.map((pl, i) => <path key={'m' + i} d={pathOf(pl)} stroke={col} strokeWidth={curveWidth / scale} fill="none" strokeLinejoin="round" strokeLinecap="round" />)}
			</g>
		</g>
	);

	const traceTo = clipToPoint ?? drawAsYouGo;
	const clipX = traceTo ? P[0] : b.left + b.width * drawP;
	const clipX0 = traceTo ? t.point(traceTo.from, 0).x : b.left;

	return (
		<>
			<div style={{position: 'absolute', left: x, top: y, width, height, opacity: o}}>
				<svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} style={{overflow: 'visible'}}>
					<defs>
						<clipPath id={id}><rect x={b.left} y={b.top} width={b.width} height={b.height} /></clipPath>
						<clipPath id={`${id}-d`}><rect x={Math.min(clipX0, clipX)} y={b.top - 10} width={Math.max(0, clipX - clipX0)} height={b.height + 20} /></clipPath>
					</defs>
					{!bare ? <>
						{xt.map(v => {const s = t.point(v.value, 0); return <g key={'x' + v.value}><line x1={s.x} x2={s.x} y1={b.top} y2={b.top + b.height} stroke="#e4dccd" strokeWidth={2} /><text x={s.x} y={b.top + b.height + 40} textAnchor="middle" style={TXT(30)}>{v.label}</text>{v.sub ? <text x={s.x} y={b.top + b.height + 74} textAnchor="middle" style={TXT(28, INK, 700)}>{v.sub}</text> : null}</g>;})}
						{yt.map(v => {const s = t.point(0, v.value); return <g key={'y' + v.value}><line x1={b.left} x2={b.left + b.width} y1={s.y} y2={s.y} stroke="#e4dccd" strokeWidth={2} /><text x={b.left - 16} y={s.y + 10} textAnchor="end" style={TXT(30)}>{v.label}</text></g>;})}
					</> : null}
					<g clipPath={`url(#${id})`}>
						{regions.map((r, i) => {
							const ro = vis(f, r.at, r.out);
							if (ro <= 0.001) return null;
							const [ya, yb] = r.y ?? win.y;
							const p0 = t.point(r.x[0], yb), p1 = t.point(r.x[1], ya);
							return <rect key={'r' + i} x={Math.min(p0.x, p1.x)} y={p0.y} width={Math.abs(p1.x - p0.x)} height={p1.y - p0.y} fill={r.color} opacity={ro * (r.opacity ?? 1)} />;
						})}
					</g>
					<path d={`M${b.left},${O.y} H${b.left + b.width} M${O.x},${b.top} V${b.top + b.height}`} stroke={INK} strokeWidth={3.5} fill="none" strokeLinecap="round" />
					{!bare ? <>
<text x={b.left + b.width} y={b.top + b.height + (xt.some(v => v.sub) ? 112 : 82)} textAnchor="end" style={TXT(30, INK, 700)}>{xLabel}</text>
						<text x={b.left} y={b.top - 16} textAnchor="start" style={TXT(30, INK, 700)}>{yLabel}</text>
					</> : null}
					<g clipPath={`url(#${id})`}>
						{(usesReflect || mirror) ? (() => {
							const mo = mirror ? vis(f, mirror.at, mirror.out) : vis(f, at, out);
							const lo = Math.max(win.x[0], win.y[0]), hi = Math.min(win.x[1], win.y[1]);
							const a0 = t.point(lo, lo), a1 = t.point(hi, hi);
							return <line x1={a0.x} y1={a0.y} x2={a1.x} y2={a1.y} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="4 10" strokeLinecap="round" opacity={mo} />;
						})() : null}
						{asymptotes.map(X => {const s = t.point(X, 0); return <line key={'as' + X} x1={s.x} x2={s.x} y1={b.top} y2={b.top + b.height} stroke={asymptoteColor ?? MATH_EXCLUDED} strokeWidth={3} strokeDasharray="10 9" />;})}
						{movingAsymptotes ? (() => {
							const mo = vis(f, movingAsymptotes.at ?? at, movingAsymptotes.out), mc = movingAsymptotes.color ?? asymptoteColor ?? MATH_EXCLUDED;
							if (mo <= 0.001) return null;
							return <g opacity={mo}>
								{(movingAsymptotes.base ?? []).map((u, i) => {const s = t.point(st.xScale * u + st.xShift, 0); return <line key={'ma' + i} x1={s.x} x2={s.x} y1={b.top} y2={b.top + b.height} stroke={mc} strokeWidth={3.5} strokeDasharray="10 9" />;})}
								{(movingAsymptotes.horizontal ?? []).map((v, i) => {const s = t.point(0, st.yScale * v + st.yShift); return <line key={'mh' + i} x1={b.left} x2={b.left + b.width} y1={s.y} y2={s.y} stroke={mc} strokeWidth={3.5} strokeDasharray="10 9" />;})}
							</g>;
						})() : null}
						<g clipPath={`url(#${id}-d)`}>{curveLayer()}</g>
						{dropLine ? <path d={`M${P[0]},${P[1]} V${O.y}`} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="8 7" opacity={vis(f, dropLine.at, dropLine.out)} /> : null}
						{gradientDots?.target ? (() => {
							const tg = gradientDots.target, solid = tg.solidAt !== undefined ? prog(f, tg.solidAt, 14) : 0;
							const tp: [number, number][] = [];
							for (let k = 0; k <= 300; k++) {const X = win.x[0] + ((win.x[1] - win.x[0]) * k) / 300, Y = tg.fn(X); if (Number.isFinite(Y)) tp.push([X, Math.max(win.y[0] - 10, Math.min(win.y[1] + 10, Y))]);}
							const tc = tg.color ?? MATH_GRADIENT;
							return <g opacity={vis(f, tg.at ?? gradientDots.at, gradientDots.out)}>
								<path d={pathOf(tp, false)} stroke={tc} strokeWidth={4} strokeDasharray="12 10" fill="none" opacity={(1 - solid) * 0.8} />
								{solid > 0 ? <path d={pathOf(tp, false)} stroke={tc} strokeWidth={6} fill="none" opacity={solid} strokeLinecap="round" /> : null}
							</g>;
						})() : null}
						{gradientDots ? <g opacity={vis(f, gradientDots.at, gradientDots.out)}>
							{dots.map(([X, m], i) => {const s = sp(X, m), z = sp(X, 0); return <g key={'gd' + i}>{gradientDots.bars ? <line x1={s[0]} x2={z[0]} y1={s[1]} y2={z[1]} stroke={gradientDots.color ?? MATH_GRADIENT} strokeWidth={4} opacity={0.35} /> : null}<circle cx={s[0]} cy={s[1]} r={8} fill={gradientDots.color ?? MATH_GRADIENT} /></g>;})}
						</g> : null}
						{tri ? <path d={`M${tri.a[0]},${tri.a[1]} L${tri.c[0]},${tri.c[1]} L${tri.e[0]},${tri.e[1]}`} fill="none" stroke={MATH_GRADIENT} strokeWidth={4.5} strokeDasharray="12 8" strokeLinecap="round" opacity={triO} /> : null}
						{lines.map((l, i) => {
							const lo = vis(f, l.at, l.out) * bv;
							if (lo <= 0.001) return null;
							const sg = segment(l.slope(st), l.halfLength ?? 260);
							return <line key={'l' + i} {...sg} stroke={l.color ?? MATH_INNER} strokeWidth={5} strokeDasharray={l.dash ?? '14 10'} strokeLinecap="round" opacity={lo} />;
						})}
						{Q ? (() => {
							const vx = Q[0] - P[0], vy = Q[1] - P[1], len = Math.hypot(vx, vy);
							const sg = len < 1 ? segment(st.slope, 300) : (() => {const e = secant!.extend ?? 160, ux = vx / len, uy = vy / len; return {x1: P[0] - ux * e, y1: P[1] - uy * e, x2: Q[0] + ux * e, y2: Q[1] + uy * e};})();
							return <line {...sg} stroke={secant!.color ?? '#d18f1f'} strokeWidth={5.5} strokeLinecap="round" opacity={secO} />;
						})() : null}
						{tangent ? <line {...segment(st.slope, tangent.halfLength ?? 250)} stroke={tangent.color ?? MATH_GRADIENT} strokeWidth={6} strokeLinecap="round" opacity={vis(f, tangent.at, tangent.out) * bv} /> : null}
						{normal ? (() => {
							const no = vis(f, normal.at, normal.out) * bv;
							if (no <= 0.001) return null;
							// Turn the tangent direction (1, m) by phi in maths units, then map to the screen.
							const phi = (Math.PI / 2) * (normal.turn ? prog(f, normal.turn.at, normal.turn.dur ?? 30) : 1);
							const m = st.slope, dX = Math.cos(phi) - m * Math.sin(phi), dY = Math.sin(phi) + m * Math.cos(phi);
							const vx = dX * t.sx, vy = -dY * t.sy, len = Math.hypot(vx, vy) || 1, half = normal.halfLength ?? 220;
							const ux = vx / len, uy = vy / len;
							const tvx = t.sx, tvy = -m * t.sy, tl = Math.hypot(tvx, tvy) || 1;
							const equal = Math.abs(t.sx - t.sy) / t.sx < 0.02;
							const sq = 26, a1 = [P[0] + (tvx / tl) * sq, P[1] + (tvy / tl) * sq], a2 = [P[0] + ux * sq, P[1] + uy * sq];
							return <g opacity={no}>
								<line x1={P[0] - ux * half} y1={P[1] - uy * half} x2={P[0] + ux * half} y2={P[1] + uy * half} stroke={normal.color ?? MATH_ROLES_TEAL} strokeWidth={6} strokeLinecap="round" />
								{(normal.rightAngle ?? true) && equal && phi > 1.55 ? <path d={`M${a1[0]},${a1[1]} L${a1[0] + a2[0] - P[0]},${a1[1] + a2[1] - P[1]} L${a2[0]},${a2[1]}`} fill="none" stroke={INK} strokeWidth={3.5} /> : null}
							</g>;
						})() : null}
					</g>
					{(fam.holes ?? []).map((h, i) => {
						const X = st.xScale * h.u + st.xShift, Y = st.yScale * h.y + st.yShift;
						if (X < win.x[0] || X > win.x[1] || Y < win.y[0] || Y > win.y[1]) return null;
						const s = spc(X, Y);
						return <circle key={'h' + i} cx={s[0]} cy={s[1]} r={12} fill={CARD} stroke={MATH_EXCLUDED} strokeWidth={5} />;
					})}
					{tri && triO > 0 ? (() => {
						const lenA = Math.abs(tri.run), lenB = Math.abs(tri.rise);
						const first = triangle!.labels?.first ? triangle!.labels.first(lenA, st) : `${S < 0.5 ? 'run' : 'rise'} ${niceNum(lenA)}`;
						const second = triangle!.labels?.second ? triangle!.labels.second(lenB, st) : `${S < 0.5 ? 'rise' : 'run'} ${fmtNum(lenB)}`;
						const mid = (p: [number, number], q: [number, number]) => [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2];
						const m1 = mid(tri.a, tri.c), m2 = mid(tri.c, tri.e);
						// push each label away from the triangle's centroid
						const cx = (tri.a[0] + tri.c[0] + tri.e[0]) / 3, cy = (tri.a[1] + tri.c[1] + tri.e[1]) / 3;
						const push = (m: number[], d = 34) => {const vx = m[0] - cx, vy = m[1] - cy, l = Math.hypot(vx, vy) || 1; return [m[0] + (vx / l) * d, m[1] + (vy / l) * d + 11];};
						const l1 = push(m1), l2 = push(m2, 44);
						return <g opacity={triO * settled}>
							<text x={l1[0]} y={l1[1]} textAnchor="middle" style={TXT(32, MATH_GRADIENT, 800)} stroke={CARD} strokeWidth={8} paintOrder="stroke">{first}</text>
							<text x={l2[0]} y={l2[1]} textAnchor={l2[0] >= m2[0] ? 'start' : 'end'} style={TXT(32, MATH_GRADIENT, 800)} stroke={CARD} strokeWidth={8} paintOrder="stroke">{second}</text>
						</g>;
					})() : null}
					{lines.map((l, i) => {
						if (!l.label) return null;
						const lo = vis(f, l.at, l.out) * settled;
						if (lo <= 0.001) return null;
						const sg = segment(l.slope(st), l.halfLength ?? 260);
						return <text key={'ll' + i} x={sg.x2 + 10} y={sg.y2} style={TXT(30, l.color ?? INK_SOFT, 800)} stroke={CARD} strokeWidth={7} paintOrder="stroke" opacity={lo}>{l.label}</text>;
					})}
					{curves.map((c, i) => {
						if (!c.label) return null;
						const co = vis(f, c.at, c.out) * settled;
						const Y = c.fn(c.label.X);
						if (co <= 0.001 || !Number.isFinite(Y)) return null;
						const s = c.carried ? spc(c.label.X, Y) : sp(c.label.X, Y);
						return <text key={'cl' + i} x={s[0] + 12} y={s[1] - 14} style={TXT(32, c.label.color ?? c.color ?? INK_SOFT, 800)} stroke={CARD} strokeWidth={8} paintOrder="stroke" opacity={co}>{c.label.text}</text>;
					})}
					{markers.map((m, i) => {
						const mo = vis(f, m.at, m.out);
						if (mo <= 0.001) return null;
						const pop = spring({frame: f - m.at, fps, config: {damping: 12, stiffness: 160, mass: 0.6}});
						const s = sp(m.X, m.Y);
						return <g key={'mk' + i} opacity={mo}>
							<circle cx={s[0]} cy={s[1] - (1 - pop) * 60} r={13} fill={m.open ? CARD : (m.color ?? MATH_AMBER)} stroke={m.open ? (m.color ?? MATH_EXCLUDED) : CARD} strokeWidth={5} />
							{m.label ? <text x={s[0] + 18} y={s[1] - 18} style={TXT(30, m.color ?? INK, 800)} stroke={CARD} strokeWidth={7} paintOrder="stroke">{m.label}</text> : null}
						</g>;
					})}
					{Q && secant?.showQ !== false ? <circle cx={Q[0]} cy={Q[1]} r={12} fill="#d18f1f" stroke={CARD} strokeWidth={4} opacity={secO} /> : null}
					{drawAsYouGo && drawAsYouGo.pen !== false ? <g transform={`translate(${P[0]},${P[1]}) rotate(-35)`}>
						<path d="M0,0 L-9,-26 L-9,-96 L9,-96 L9,-26 Z" fill={drawAsYouGo.color ?? '#d18f1f'} stroke={INK} strokeWidth={3} strokeLinejoin="round" />
						<path d="M0,0 L-9,-26 L9,-26 Z" fill="#f2dfb5" stroke={INK} strokeWidth={3} strokeLinejoin="round" />
						<circle cx={0} cy={0} r={4} fill={INK} />
					</g> : null}
					{point ? <circle cx={P[0]} cy={P[1]} r={(point.r ?? 14) * prog(f, point.at, 10)} fill={point.color ?? MATH_GRADIENT} stroke={CARD} strokeWidth={5} opacity={vis(f, point.at, point.out) * bv} /> : null}
				</svg>
			</div>
			{zoom && zoomO > 0.001 ? (() => {
				const R = zoom.r, k = typeof zoom.factor === 'function' ? zoom.factor(f) : zoom.factor;
				// Local map: displayed coordinates near the point, magnified k times about the point.
				const zp = (X: number, Y: number): [number, number] => {const q = spc(X, Y); return [zoom.cx + (q[0] - P[0]) * k, zoom.cy + (q[1] - P[1]) * k];};
				const spanX = (R / (t.sx * k)) * 1.3;
				const pts: [number, number][] = [];
				// Lift the pen where the domain breaks or the function jumps (a piecewise step), so the inset never bridges a gap.
				const lifts = new Set<number>();
				let prevIn = true, prevY = NaN, prevU = NaN;
				for (let i = 0; i <= 120; i++) {
					const X = st.X - spanX + (2 * spanX * i) / 120, u = (X - st.xShift) / st.xScale;
					if (fnInDomain(fam, st.params, u)) {
						const Y = st.yScale * fam.f(u, st.params) + st.yShift;
						// a jump: far more than the local gradient explains (steep but continuous curves are kept joined)
const g0 = Math.abs(fam.df(u, st.params)), g1 = Math.abs(fam.df(prevU, st.params));
						const jumpPx = Math.abs(Y - prevY) * t.sy * k, expectPx = Math.abs(st.yScale) * ((Number.isFinite(g0) ? g0 : 0) + (Number.isFinite(g1) ? g1 : 0)) / 2 * Math.abs(u - prevU) * t.sy * k;
						if (pts.length && (!prevIn || (jumpPx > R && jumpPx > 4 * expectPx))) lifts.add(pts.length);
						pts.push([X, Y]); prevIn = true; prevY = Y; prevU = u;
					} else prevIn = false;
				}
				const d = pts.map((p, i) => {const q = zp(p[0], p[1]); return `${i && !lifts.has(i) ? 'L' : 'M'}${q[0].toFixed(1)},${q[1].toFixed(1)}`;}).join(' ');
				const zid = `${id}-z`;
				const tl = segment(st.slope, R * 2);
				const secLine = Q ? (() => {const vx = Q[0] - P[0], vy = Q[1] - P[1], l = Math.hypot(vx, vy) || 1; return {x1: zoom.cx - (vx / l) * R * 2, y1: zoom.cy - (vy / l) * R * 2, x2: zoom.cx + (vx / l) * R * 2, y2: zoom.cy + (vy / l) * R * 2};})() : null;
				const Qz = Q ? [zoom.cx + (Q[0] - P[0]) * k, zoom.cy + (Q[1] - P[1]) * k] : null;
				return <>
					<MagnifierLeader from={geo.pt} r={26} to={[zoom.cx, zoom.cy]} R={R} at={zoom.at} out={zoom.out} />
					<FrameSvg style={{opacity: zoomO}}>
						<defs><clipPath id={zid}><circle cx={zoom.cx} cy={zoom.cy} r={R - 3} /></clipPath></defs>
						<circle cx={zoom.cx} cy={zoom.cy} r={R} fill={CARD} />
						<g clipPath={`url(#${zid})`}>
							<path d={d} stroke={col} strokeWidth={7} fill="none" strokeLinecap="round" />
							{secLine && secO > 0 ? <line {...secLine} stroke={secant?.color ?? '#d18f1f'} strokeWidth={5} opacity={secO} /> : null}
							{tangent && vis(f, tangent.at, tangent.out) > 0 ? <line x1={zoom.cx - (tl.x2 - tl.x1) / 2} y1={zoom.cy - (tl.y2 - tl.y1) / 2} x2={zoom.cx + (tl.x2 - tl.x1) / 2} y2={zoom.cy + (tl.y2 - tl.y1) / 2} stroke={MATH_GRADIENT} strokeWidth={6} opacity={vis(f, tangent.at, tangent.out)} /> : null}
							{Qz && secO > 0 ? <circle cx={Qz[0]} cy={Qz[1]} r={11} fill="#d18f1f" stroke={CARD} strokeWidth={4} /> : null}
							<circle cx={zoom.cx} cy={zoom.cy} r={13} fill={MATH_GRADIENT} stroke={CARD} strokeWidth={4} />
						</g>
						<circle cx={zoom.cx} cy={zoom.cy} r={R} fill="none" stroke={INK} strokeWidth={4.5} />
						<text x={zoom.cx} y={zoom.cy + R + 44} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, fill: INK_SOFT}}>{`zoomed ×${typeof zoom.factor === 'function' ? String(Math.round(k)) : niceNum(k, 0)}`}</text>
					</FrameSvg>
				</>;
			})() : null}
			{label && labelPos ? (
				<div style={{position: 'absolute', left: labelPos.left + (label.side === 'left' ? -26 : 26), top: labelPos.top, transform: label.side === 'left' ? 'translateX(-100%)' : undefined, opacity: o * labelO, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: label.size ?? 44, color: col, whiteSpace: 'pre', textShadow: `0 0 6px ${CARD}, 0 0 12px ${CARD}`}}>{label.content(st)}</div>
			) : null}
			{readout ? (
				<LiveReadoutBoard x={readout.x} y={readout.y} width={readout.width} at={readout.at ?? at} out={readout.out} title={readout.title} inline={readout.inline} size={readout.size} rows={readout.rows.map(r => {
					const hide = (r.hideInTransit ?? true) && settled < 0.5;
					const value = r.value ? r.value(st) : 0;
					return {...r, value, text: hide ? ' ' : r.text ? r.text(st) : !Number.isFinite(value) ? 'undefined' : undefined, dim: Math.max(r.dim ?? 0, (r.hideInTransit ?? true) ? 1 - settled : 0)} as ReadoutRow;
				})} />
			) : null}
			{overlay || onPoint ? <div style={{position: 'absolute', inset: 0, pointerEvents: 'none'}}>{overlay ? overlay(geo) : null}{onPoint ? onPoint(geo) : null}</div> : null}
		</>
	);
};

/** The riding-point name used in the d06 to d09 designs: the same component. */
export const FunctionRider = FunctionSimulator;

/** Studio-sized tangent triangle on any function: FunctionSimulator with the point, tangent and triangle on from `at`. */
export const StudioTangentTriangle: React.FC<Omit<FunctionSimulatorProps, 'point' | 'tangent' | 'triangle'> & {run: number; mode?: 'carried' | 'screen'; triangleAt?: number; labels?: {first?: (len: number, s: FnState) => string; second?: (len: number, s: FnState) => string}}> = ({run, mode, triangleAt, labels, ...rest}) => {
	const a = rest.at ?? 0;
	return <FunctionSimulator {...rest} point={{at: a}} tangent={{at: a}} triangle={{run, at: triangleAt ?? a, mode, labels}} />;
};

/** The reflection carrier: FunctionSimulator on an equal-unit plot with the y = x mirror and a reflect channel 0 → 1. */
export const ReflectionCarrier: React.FC<FunctionSimulatorProps> = p => <FunctionSimulator {...p} mirror={p.mirror ?? {at: p.at ?? 0}} />;

// ---------- ready families ----------
/** y = c^x for a base c > 0, including c = 1 (the flat line, gradient 0) and bases below 1. Parameter: c. */
export const EXP_BASE_FAMILY: FnFamily = {
	f: (u, p) => Math.pow(p.c ?? Math.E, u),
	df: (u, p) => Math.pow(p.c ?? Math.E, u) * Math.log(p.c ?? Math.E),
};
/** y = log_c x on x > 0 (c > 0 and c ≠ 1: keep the driven c clear of 1 with clampAwayFrom). Parameter: c. */
export const LOG_BASE_FAMILY: FnFamily = {
	f: (u, p) => Math.log(u) / Math.log(p.c ?? Math.E),
	df: (u, p) => 1 / (u * Math.log(p.c ?? Math.E)),
	domain: [{from: 0, to: Infinity}],
};
/** k·f(x) families helper: wrap any f and f′ with an amplitude parameter k. */
export const scaledFamily = (f: (u: number) => number, df: (u: number) => number, domain?: readonly DomainInterval[], excluded?: readonly number[]): FnFamily => ({
	f: (u, p) => (p.k ?? 1) * f(u), df: (u, p) => (p.k ?? 1) * df(u), domain, excluded,
});
