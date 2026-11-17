// Year 11 Advanced kit, wave 2 (brief 245, maths-a11-kit-needs.md trigonometry items 1, 4, 5 and 6): the circle
// parts for t03, t04, t08 to t10, t12, t13 and t15a. StudioCirclePoint (rays at signed angles with a lap counter,
// the drop triangle, ratio and paired readouts, undefined flags and stamped hollow dots, related-angle copies,
// quadrant signs and ASTC, mirrors in the x-axis, the y-axis and y = x, a level line y = k or x = k, degree or radian
// labels), CircleToGraph (a projector from the circle to the sin, cos or tan graph), RadiusWrap (radius lengths
// bending onto the rim, and an arc straightening to rθ) and SectorSegment (sector, chord, triangle, segment, minor
// and major). Also TAN_FAMILY and the degree helpers degTicks and fmtDeg (kept out of trig-parts.tsx).
// Colour roles (t03, root ruling 27): the angle blue (a), y and sine amber (k) on circles, x and cosine violet
// (gradient), r ink, ratio values teal (b); on graphs sine is teal, cosine violet and tangent amber. A related or
// complementary angle uses TRIG_MAGENTA (t13, t15a), which is clearly not the mistake red.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, PAPER_DEEP, prog} from '../../kit';
import {CARD, CARD_SHADOW, FrameSvg, fmtNum, kf, niceNum, smooth, vis} from './primitives';
import {MATH_EXCLUDED, MATH_MISTAKE, MATH_ROLES, RoleColours} from './roles';
import {LiveReadoutBoard, ReadoutRow} from './readouts';
import {PlotTick, PlotWindow, StudioPlot, TXT, fnPath, makePlot} from './plot-core';
import type {FnFamily, Tick} from './fn-sim';
import {piLabel} from './trig-parts';
import type {Range} from '../graphs';

// =====================================================================================================
// Shared helpers
// =====================================================================================================
const MINUS = '−';
const D2R = Math.PI / 180;
/** Magenta for a related angle α (t15a) or 90° − θ (t13). 5.9:1 on paper; hue well away from the mistake red. */
export const TRIG_MAGENTA: RoleColours = {ink: '#a12d7c', stroke: '#b8378c', soft: '#f5dcec'};
/** A value fixed, or keyed over frames as [frame, value] pairs (eased). */
export type Keyed = number | readonly (readonly [number, number])[];
export const keyedAt = (v: Keyed, f: number) => (typeof v === 'number' ? v : kf(f, v));
const keyedMax = (v: Keyed) => (typeof v === 'number' ? v : Math.max(...v.map(p => p[1])));
const haloText = (size: number, color: string, weight = 800): React.SVGProps<SVGTextElement> => ({style: TXT(size, color, weight), stroke: CARD, strokeWidth: 8, paintOrder: 'stroke'} as React.SVGProps<SVGTextElement>);

/** Degrees with a true minus sign: 120 → "120°", −240 → "−240°", 57.2958 (digits 1) → "57.3°". */
export const fmtDeg = (v: number, digits = 0) => {
	const r = Math.abs(v) < 0.5 * 10 ** -digits ? 0 : v;
	return (r < 0 ? MINUS : '') + Math.abs(r).toFixed(digits) + '°';
};
/** Degree ticks every `step` degrees from lo to hi (0 left out, as piTicks does): "90°", "180°", "−90°". */
export const degTicks = (lo: number, hi: number, step = 90): Tick[] => {
	const out: Tick[] = [];
	for (let v = Math.ceil(lo / step) * step; v <= hi + 1e-9; v += step) if (v !== 0) out.push({value: v, label: fmtDeg(v)});
	return out;
};
/** tan as a FunctionSimulator family: excluded at every odd multiple of π/2 in [−40π, 40π]. */
export const TAN_FAMILY: FnFamily = {
	f: u => Math.tan(u),
	df: u => 1 / Math.cos(u) ** 2,
	excluded: Array.from({length: 80}, (_, i) => (i - 40 + 0.5) * Math.PI),
};
/** Angle label in the chosen unit: degrees "150°" or radians as a π multiple "5π/6" (degrees in). */
export const angleText = (deg: number, unit: 'deg' | 'rad' = 'deg') => (unit === 'deg' ? fmtDeg(deg, Math.abs(deg - Math.round(deg)) < 1e-6 ? 0 : 1) : piLabel(deg * D2R));
/** Text for SVG with a built-up fraction when the label has one slash ("5π/6", "−π/4"); plain text otherwise. */
export const SvgFracText: React.FC<{x: number; y: number; text: string; size?: number; color?: string; anchor?: 'start' | 'middle' | 'end'}> = ({x, y, text, size = 34, color = INK, anchor = 'middle'}) => {
	const i = text.indexOf('/');
	if (i < 0 || text.indexOf('/', i + 1) >= 0 || text.includes(' ')) return <text x={x} y={y} textAnchor={anchor} {...haloText(size, color)}>{text}</text>;
	const neg = text.startsWith(MINUS), num = text.slice(neg ? 1 : 0, i), den = text.slice(i + 1);
	const w = Math.max(num.length, den.length) * size * 0.56 + 8;
	const mx = anchor === 'middle' ? x : anchor === 'start' ? x + w / 2 + (neg ? size * 0.6 : 0) : x - w / 2;
	const s = size * 0.86;
	return <g>
		{neg ? <text x={mx - w / 2 - 4} y={y} textAnchor="end" {...haloText(s, color)}>{MINUS}</text> : null}
		<text x={mx} y={y - s * 0.3} textAnchor="middle" {...haloText(s, color)}>{num}</text>
		<line x1={mx - w / 2} x2={mx + w / 2} y1={y - s * 0.12} y2={y - s * 0.12} stroke={CARD} strokeWidth={8} />
		<line x1={mx - w / 2} x2={mx + w / 2} y1={y - s * 0.12} y2={y - s * 0.12} stroke={color} strokeWidth={3} />
		<text x={mx} y={y + s * 0.72} textAnchor="middle" {...haloText(s, color)}>{den}</text>
	</g>;
};

/** The two angles in [0°, 360°) where the line y = k (or x = k) meets a circle of radius r ([] if it misses). */
export const levelAngles = (kind: 'y' | 'x', k: number, r = 1): number[] => {
	const q = k / r;
	if (Math.abs(q) > 1 + 1e-12) return [];
	const n = (d: number) => ((d % 360) + 360) % 360;
	if (kind === 'y') {const a = Math.asin(Math.max(-1, Math.min(1, q))) / D2R; return Math.abs(Math.abs(q) - 1) < 1e-12 ? [n(a)] : [n(a), n(180 - a)].sort((u, v) => u - v);}
	const a = Math.acos(Math.max(-1, Math.min(1, q))) / D2R;
	return Math.abs(Math.abs(q) - 1) < 1e-12 ? [n(a)] : [n(a), n(360 - a)].sort((u, v) => u - v);
};
/** The related angle (acute, to the x-axis) of any angle in degrees. */
export const relatedAngle = (deg: number) => {const d = ((deg % 180) + 180) % 180; return d > 90 ? 180 - d : d;};
/** Quadrant 1 to 4 of an angle (0 on an axis). */
export const quadrantOf = (deg: number) => {const d = ((deg % 360) + 360) % 360; if (d % 90 === 0) return 0; return Math.floor(d / 90) + 1;};
/** The related-angle copies of an acute A: quadrants 1 to 4 at A, 180 − A, 180 + A, 360 − A. */
export const relatedCopies = (A: number) => [A, 180 - A, 180 + A, 360 - A] as const;

// Arc in frame space, anticlockwise-positive maths angles in degrees. `grow` widens each lap (a spiral).
const arcD = (cx: number, cy: number, r: number, a0: number, a1: number, grow = 0) => {
	const n = Math.max(8, Math.ceil(Math.abs(a1 - a0) / 3));
	let d = '';
	for (let i = 0; i <= n; i++) {
		const a = a0 + ((a1 - a0) * i) / n, rr = r + (grow * Math.abs(a - a0)) / 360;
		d += `${i ? 'L' : 'M'}${(cx + rr * Math.cos(a * D2R)).toFixed(2)},${(cy - rr * Math.sin(a * D2R)).toFixed(2)} `;
	}
	return d;
};
const wedgeD = (cx: number, cy: number, r: number, a0: number, a1: number) => `M${cx},${cy} ${arcD(cx, cy, r, a0, a1).replace(/^M/, 'L')} Z`;

// =====================================================================================================
// StudioCirclePoint (t03, t04, t08, t10, t12, t13, t15a)
// =====================================================================================================
export type CircleRay = {
	/** Degrees, signed, any size (480, −240). Keyed for turns. */
	angle: Keyed; at: number; out?: number;
	color?: string; dash?: boolean; dim?: number;
	/** The signed arc from the positive x-axis (a spiral past one lap) and its angle label. */
	arc?: {at: number; out?: number; radius?: number; label?: boolean | string; color?: string};
	point?: boolean; hollow?: boolean;
	/** "(x, y)" beside the point; text replaces the values ("(−1, √3)"). */
	coords?: {at: number; out?: number; text?: string | ((x: number, y: number) => string); size?: number};
	/** Drop to the x-axis: x violet, y amber, r ink (labels may be values such as "−3"); a right-angle mark. */
	drop?: {at: number; out?: number; fill?: boolean; labels?: false | {x?: string; y?: string; r?: string}; size?: number};
	/** The related angle (acute, to the x-axis) as a light blue wedge with its label. */
	relatedWedge?: {at: number; out?: number; label?: boolean | string; color?: RoleColours};
	/** Lap counter card: the current angle, and "120° + 360° = 480°" when a whole number of laps from `base`. */
	lap?: {x: number; y: number; at?: number; base?: number; size?: number};
	rings?: readonly {at: number; out?: number}[];
};
export type CircleQuadrants = {
	at: number; out?: number; numerals?: 'arabic' | 'roman'; size?: number;
	signs?: readonly {q: 1 | 2 | 3 | 4; at: number; out?: number; text?: string}[];
	shade?: readonly {q: 1 | 2 | 3 | 4; at: number; out?: number; color?: string}[];
	/** ASTC letters (A, S, T, C) in the quadrants and, at wordsAt, "All Stations To Central" under them. */
	astc?: {at: number; out?: number; wordsAt?: number; lit?: readonly {q: 1 | 2 | 3 | 4; at: number; out?: number}[]};
};
export type CircleRelated = {
	/** The acute angle A in degrees, drawn as a wedge and triangle in quadrant 1. */
	A: number; at: number; out?: number;
	/** Reflections in order: quadrant 2 (y-axis mirror), 3 (x-axis mirror), 4 (y-axis mirror). */
	copies?: readonly {q: 2 | 3 | 4; at: number}[];
	brackets?: boolean; labels?: boolean; triangle?: boolean;
	/** Extra text beside each copy's point ("x = −√3, y = 1"). */
	copyText?: (q: 1 | 2 | 3 | 4) => string | undefined;
};
export type CircleMirror = {
	kind: 'x' | 'y' | 'yx'; ray?: number; at: number; out?: number;
	/** The mirror point flies across from the ray's point at flyAt (else it is simply there). */
	flyAt?: number; color?: RoleColours;
	/** yx: the 90° − θ arc from the y-axis; x: the −θ arc. */
	arc?: boolean; arcLabel?: string;
	coords?: string | ((x: number, y: number) => string); path?: boolean; lineLabel?: string;
};
export type CircleLevel = {
	kind?: 'y' | 'x'; k: Keyed; at: number; out?: number; label?: string; color?: RoleColours;
	/** Rays to both crossings, and the related angle α (magenta) between each ray and the x-axis. */
	rays?: {at: number; out?: number; labels?: boolean}; related?: {at: number; out?: number; label?: string};
};

/**
 * A circle of radius r on equal-unit axes (origin at cx, cy; `unit` px per unit). Everything is drawn from
 * computed coordinates: rays at any signed angle (spiral arcs past one lap, a lap counter), each point's drop
 * triangle, readouts of the ratios (x/r, y/r, y/x; or all six; or the three reciprocal pairs) that change sign
 * with the coordinates and read "undefined" where a denominator is 0, a flag at the point, hollow dots stamped
 * where the ray passed an excluded angle, the axis points, quadrant labels, signs, shading and ASTC, the
 * related-angle copies A, 180° − A, 180° + A, 360° − A with brackets, mirrors (x-axis: θ to −θ; y-axis; y = x:
 * θ to 90° − θ), a level line y = k or x = k with its two crossings and related angles, and rim marks in degree
 * or radian labels. `readout.ray`, `flag.ray` and `stamps.ray` pick the ray (default 0).
 */
export const StudioCirclePoint: React.FC<{
	cx: number; cy: number; unit: number; r?: Keyed; axis?: number; at?: number; out?: number;
	angleUnit?: 'deg' | 'rad'; circle?: boolean | {at: number}; axisLabels?: boolean; ticks?: readonly PlotTick[];
	rays?: readonly CircleRay[];
	readout?: {ray?: number; x: number; y: number; width?: number; at: number; out?: number; kind?: 'ratios' | 'six'; names?: 'fraction' | 'trig' | 'both'; digits?: number; undefinedRole?: 'mistake' | 'inner'; size?: number};
	paired?: {ray?: number; x: number; y: number; at: number; out?: number; digits?: number; size?: number};
	flag?: {ray?: number; at: number; out?: number; which?: 'tan' | 'sec' | 'cosec' | 'cot'; text?: string};
	stamps?: {ray?: number; from: number; out?: number; when: 'x0' | 'y0' | 'xy0'};
	hollowDots?: {angles: readonly number[]; at: number; out?: number};
	axisPoints?: {at: number; out?: number; labels?: 'r' | '1' | false};
	quadrants?: CircleQuadrants; related?: CircleRelated; mirrors?: readonly CircleMirror[]; level?: CircleLevel;
	marks?: {at: number; out?: number; angles: readonly number[]; unit?: 'deg' | 'rad'; color?: string; size?: number; gap?: number};
	children?: (g: {P: (X: number, Y: number) => [number, number]; R: number; r: number}) => React.ReactNode;
}> = ({cx, cy, unit, r: rK = 1, axis, at = 0, out, angleUnit = 'deg', circle = true, axisLabels = true, ticks = [], rays = [], readout, paired, flag, stamps, hollowDots, axisPoints, quadrants, related, mirrors = [], level, marks, children}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const r = keyedAt(rK, f), R = r * unit;
	const ax = (axis ?? keyedMax(rK) * 1.3) * unit;
	const P = (X: number, Y: number): [number, number] => [cx + X * unit, cy - Y * unit];
	const A = MATH_ROLES.a, Y = MATH_ROLES.k, Xc = MATH_ROLES.gradient, T = MATH_ROLES.b;
	const co = typeof circle === 'object' ? prog(f, circle.at, 24) : circle ? 1 : 0;
	const rayAngle = (i = 0) => (rays[i] ? keyedAt(rays[i].angle, f) : 0);
	const els: React.ReactNode[] = [];

	// quadrant shading (under everything)
	if (quadrants?.shade) for (const s of quadrants.shade) {
		const so = vis(f, s.at, s.out, 12);
		if (so > 0) els.push(<path key={'qs' + s.q + s.at} d={wedgeD(cx, cy, R, (s.q - 1) * 90, s.q * 90)} fill={s.color ?? PAPER_DEEP} opacity={0.85 * so} />);
	}
	// axes and circle
	els.push(<g key="axes">
		<path d={`M${cx - ax},${cy} H${cx + ax} M${cx},${cy + ax} V${cy - ax}`} stroke={INK} strokeWidth={3.5} strokeLinecap="round" fill="none" />
		<path d={`M${cx + ax - 14},${cy - 10} L${cx + ax + 2},${cy} L${cx + ax - 14},${cy + 10} M${cx - 10},${cy - ax + 14} L${cx},${cy - ax - 2} L${cx + 10},${cy - ax + 14}`} stroke={INK} strokeWidth={3.5} fill="none" strokeLinecap="round" strokeLinejoin="round" />
		{axisLabels ? <><text x={cx + ax + 8} y={cy + 40} {...haloText(32, INK, 700)}>x</text><text x={cx + 18} y={cy - ax + 6} {...haloText(32, INK, 700)}>y</text></> : null}
		{ticks.map(t => <g key={'t' + t.value}>
			<line x1={cx + t.value * unit} x2={cx + t.value * unit} y1={cy - 8} y2={cy + 8} stroke={INK} strokeWidth={3} />
			<text x={cx + t.value * unit} y={cy + 40} textAnchor="middle" style={TXT(28, INK_SOFT, 700)}>{t.label}</text>
		</g>)}
		{co > 0 ? <path d={arcD(cx, cy, R, 0, 360 * co)} fill="none" stroke={INK} strokeWidth={5} /> : null}
	</g>);
	// rim marks
	if (marks) {
		const mo = vis(f, marks.at, marks.out, 12), mc = marks.color ?? A.ink;
		if (mo > 0) els.push(<g key="marks" opacity={mo}>{marks.angles.map(d => {
			const c = Math.cos(d * D2R), s = Math.sin(d * D2R), g = marks.gap ?? 54;
			return <g key={d}>
				<line x1={cx + (R - 10) * c} y1={cy - (R - 10) * s} x2={cx + (R + 10) * c} y2={cy - (R + 10) * s} stroke={mc} strokeWidth={4} />
				<SvgFracText x={cx + (R + g) * c} y={cy - (R + g) * s + 10} text={angleText(d, marks.unit ?? angleUnit)} size={marks.size ?? 30} color={mc} />
			</g>;
		})}</g>);
	}
	// quadrant labels, signs, ASTC
	if (quadrants) {
		const qo = vis(f, quadrants.at, quadrants.out, 12), qs = quadrants.size ?? 44;
		const names = quadrants.numerals === 'roman' ? ['I', 'II', 'III', 'IV'] : ['1', '2', '3', '4'];
		const dir = (q: number): [number, number] => [Math.cos((q * 90 - 45) * D2R), Math.sin((q * 90 - 45) * D2R)];
		if (qo > 0) els.push(<g key="quads" opacity={qo}>{[1, 2, 3, 4].map(q => {
			const [c, s] = dir(q), lo = prog(f, quadrants.at + (q - 1) * 6, 10);
			return <text key={q} x={cx + R * 1.12 * c} y={cy - R * 1.12 * s + qs * 0.35} opacity={lo} textAnchor="middle" {...haloText(qs, INK_SOFT)}>{names[q - 1]}</text>;
		})}</g>);
		for (const sg of quadrants.signs ?? []) {
			const so = vis(f, sg.at, sg.out, 10);
			if (so <= 0) continue;
			const [c, s] = dir(sg.q), sx = sg.q === 1 || sg.q === 4 ? '+' : MINUS, sy = sg.q <= 2 ? '+' : MINUS;
			els.push(<text key={'sg' + sg.q + sg.at} x={cx + R * 0.62 * c} y={cy - R * 0.62 * s + 14} opacity={so} textAnchor="middle" {...haloText(36, INK)}>{sg.text ?? `x ${sx}, y ${sy}`}</text>);
		}
		if (quadrants.astc) {
			const as = quadrants.astc, ao = vis(f, as.at, as.out, 12), letters = ['A', 'S', 'T', 'C'], words = ['All', 'Stations', 'To', 'Central'];
			const wo = as.wordsAt !== undefined ? vis(f, as.wordsAt, as.out, 14) : 0;
			if (ao > 0) els.push(<g key="astc" opacity={ao}>{[1, 2, 3, 4].map(q => {
				const [c, s] = dir(q), lit = (as.lit ?? []).some(l => l.q === q && vis(f, l.at, l.out, 8) > 0.5);
				const lx = cx + R * 0.5 * c, ly = cy - R * 0.5 * s;
				return <g key={q}>
					{lit ? <circle cx={lx} cy={ly - 4} r={50} fill={T.soft} stroke={T.stroke} strokeWidth={4} /> : null}
					<text x={lx} y={ly + 22} textAnchor="middle" {...haloText(72, lit ? T.ink : INK)}>{letters[q - 1]}</text>
					{wo > 0 ? <text x={lx} y={ly + 66} opacity={wo} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34, fill: T.ink} as React.CSSProperties} stroke={CARD} strokeWidth={7} paintOrder="stroke">{words[q - 1]}</text> : null}
				</g>;
			})}</g>);
		}
	}
	// axis points
	if (axisPoints) {
		const po = vis(f, axisPoints.at, axisPoints.out, 12), lab = axisPoints.labels ?? 'r';
		const rs = lab === '1' ? '1' : 'r';
		const pts: [number, number, string, number, number][] = [[r, 0, `(${rs}, 0)`, 18, -24], [0, r, `(0, ${rs})`, 22, -22], [-r, 0, `(${MINUS}${rs}, 0)`, -18, -24], [0, -r, `(0, ${MINUS}${rs})`, 22, 48]];
		if (po > 0) els.push(<g key="axp" opacity={po}>{pts.map(([X, Yv, t, dx, dy], i) => {const [px, py] = P(X, Yv); return <g key={i}>
			<circle cx={px} cy={py} r={20} fill="none" stroke={INK} strokeWidth={4} />
			{lab ? <text x={px + dx} y={py + dy} textAnchor={dx < 0 ? 'end' : 'start'} {...haloText(32, INK)}>{t}</text> : null}
		</g>;})}</g>);
	}
	// related-angle copies
	if (related) {
		const rl = related, ro = vis(f, rl.at, rl.out, 12);
		if (ro > 0) {
			const signs: Record<number, [number, number]> = {1: [1, 1], 2: [-1, 1], 3: [-1, -1], 4: [1, -1]};
			const mirrorOf: Record<number, 'y' | 'x'> = {2: 'y', 3: 'x', 4: 'y'};
			const base = (sx: number, sy: number) => {
				const c = Math.cos(rl.A * D2R) * R, s = Math.sin(rl.A * D2R) * R;
				const px = cx + sx * c, py = cy - sy * s;
				const wpts: string[] = [];
				for (let i = 0; i <= 16; i++) {const a = (rl.A * i) / 16 * D2R; wpts.push(`${(cx + sx * 0.32 * R * Math.cos(a)).toFixed(1)},${(cy - sy * 0.32 * R * Math.sin(a)).toFixed(1)}`);}
				return {px, py, wedge: `M${cx},${cy} L${wpts.join(' L')} Z`};
			};
			const drawCopy = (q: 1 | 2 | 3 | 4, sx: number, sy: number, settled: boolean, key: string) => {
				const g = base(sx, sy);
				const lab = q === 1 ? `A = ${angleText(rl.A, angleUnit)}` : angleUnit === 'deg'
					? `${q === 4 ? '360°' : '180°'} ${q === 3 ? '+' : MINUS} A = ${fmtDeg(relatedCopies(rl.A)[q - 1])}`
					: `${q === 4 ? '2π' : 'π'} ${q === 3 ? '+' : MINUS} A`;
				const extra = rl.copyText?.(q);
				const lx = g.px + (sx > 0 ? 24 : -24), ly = g.py + (sy > 0 ? -26 : 46);
				return <g key={key}>
					<path d={g.wedge} fill={A.soft} stroke={A.stroke} strokeWidth={3} opacity={0.95} />
					<line x1={cx} y1={cy} x2={g.px} y2={g.py} stroke={A.stroke} strokeWidth={6} strokeLinecap="round" />
					{rl.triangle !== false ? <>
						<line x1={g.px} y1={g.py} x2={g.px} y2={cy} stroke={Y.stroke} strokeWidth={5} />
						<line x1={cx} y1={cy} x2={g.px} y2={cy} stroke={Xc.stroke} strokeWidth={7} />
					</> : null}
					<circle cx={g.px} cy={g.py} r={11} fill={A.stroke} stroke={CARD} strokeWidth={4} />
					{settled && rl.labels !== false ? <text x={lx} y={ly} textAnchor={sx > 0 ? 'start' : 'end'} {...haloText(34, A.ink)}>{lab}</text> : null}
					{settled && extra ? <text x={lx} y={ly + (sy > 0 ? -42 : 42)} textAnchor={sx > 0 ? 'start' : 'end'} {...haloText(30, INK)}>{extra}</text> : null}
				</g>;
			};
			const parts: React.ReactNode[] = [drawCopy(1, 1, 1, true, 'q1')];
			let prev: [number, number] = [1, 1];
			for (const cp of rl.copies ?? []) {
				if (f < cp.at) break;
				const u = smooth((f - cp.at) / 22), tgt = signs[cp.q];
				const sx = prev[0] + (tgt[0] - prev[0]) * u, sy = prev[1] + (tgt[1] - prev[1]) * u;
				const flash = 1 - prog(f, cp.at + 22, 16);
				if (flash > 0) parts.push(mirrorOf[cp.q] === 'y'
					? <line key={'mf' + cp.q} x1={cx} x2={cx} y1={cy - R * 1.2} y2={cy + R * 1.2} stroke={MATH_ROLES.gradient.stroke} strokeWidth={6} strokeDasharray="14 10" opacity={flash} />
					: <line key={'mf' + cp.q} x1={cx - R * 1.2} x2={cx + R * 1.2} y1={cy} y2={cy} stroke={MATH_ROLES.gradient.stroke} strokeWidth={6} strokeDasharray="14 10" opacity={flash} />);
				parts.push(drawCopy(cp.q, sx, sy, u >= 1, 'c' + cp.q));
				if (u >= 1 && rl.brackets !== false) {
					const deg = relatedCopies(rl.A)[cp.q - 1];
					const [b0, b1] = cp.q === 4 ? [deg, 360] : [180, deg];
					parts.push(<path key={'br' + cp.q} d={arcD(cx, cy, R * 0.5, b0, b1)} fill="none" stroke={A.stroke} strokeWidth={6} opacity={prog(f, cp.at + 22, 12)} />);
				}
				prev = tgt;
			}
			els.push(<g key="related" opacity={ro}>{parts}</g>);
		}
	}
	// level line and its crossings
	if (level) {
		const lv = level, lo = vis(f, lv.at, lv.out, 12);
		if (lo > 0) {
			const k = keyedAt(lv.k, f), kind = lv.kind ?? 'y', Lc = lv.color ?? MATH_ROLES.k, M = TRIG_MAGENTA;
			const [lx0, ly0] = kind === 'y' ? P(-r * 1.25, k) : P(k, -r * 1.25), [lx1, ly1] = kind === 'y' ? P(r * 1.25, k) : P(k, r * 1.25);
			const angs = levelAngles(kind, k, r);
			const rayO = lv.rays ? vis(f, lv.rays.at, lv.rays.out, 12) : 0, relO = lv.related ? vis(f, lv.related.at, lv.related.out, 12) : 0;
			els.push(<g key="level" opacity={lo}>
				<line x1={lx0} y1={ly0} x2={lx1} y2={ly1} stroke={Lc.stroke} strokeWidth={5} />
				{lv.label ? <text x={kind === 'y' ? lx1 + 10 : lx0 + 12} y={kind === 'y' ? ly1 + 12 : ly0 + 8} {...haloText(34, Lc.ink)}>{lv.label}</text> : null}
				{angs.map(d => {
					const [px, py] = P(r * Math.cos(d * D2R), r * Math.sin(d * D2R)), rel = relatedAngle(d);
					const a0 = d <= 90 ? 0 : d <= 270 ? 180 : 360;
					return <g key={d}>
						{rayO > 0 ? <g opacity={rayO}><line x1={cx} y1={cy} x2={px} y2={py} stroke={A.stroke} strokeWidth={6} strokeLinecap="round" />
							{lv.rays?.labels !== false ? <text x={px + (px >= cx ? 18 : -18)} y={py + (py <= cy ? -18 : 42)} textAnchor={px >= cx ? 'start' : 'end'} {...haloText(34, A.ink)}>{angleText(Math.round(d * 1e6) / 1e6, angleUnit)}</text> : null}</g> : null}
						{relO > 0 && rel > 0.5 ? <g opacity={relO}>
							<path d={arcD(cx, cy, R * 0.3, a0, d)} fill="none" stroke={M.stroke} strokeWidth={6} />
							<text x={cx + R * 0.42 * Math.cos(((a0 + d) / 2) * D2R)} y={cy - R * 0.42 * Math.sin(((a0 + d) / 2) * D2R) + 12} textAnchor="middle" {...haloText(34, M.ink)}>{lv.related?.label ?? 'α'}</text>
						</g> : null}
						<circle cx={px} cy={py} r={13} fill={INK} stroke={CARD} strokeWidth={5} />
					</g>;
				})}
			</g>);
		}
	}
	// rays
	rays.forEach((ry, i) => {
		const ro = vis(f, ry.at, ry.out, 12) * (1 - 0.6 * (ry.dim ?? 0));
		if (ro <= 0.001) return;
		const th = keyedAt(ry.angle, f), c = Math.cos(th * D2R), s = Math.sin(th * D2R);
		const X = r * c, Yv = r * s, [px, py] = P(X, Yv);
		const col = ry.color ?? A.stroke, g: React.ReactNode[] = [];
		if (ry.relatedWedge) {
			const wo = vis(f, ry.relatedWedge.at, ry.relatedWedge.out, 12), W = ry.relatedWedge.color ?? A;
			const a0 = Math.abs(Math.sin(th * D2R)) < 1e-9 ? th : (((th % 360) + 360) % 360) <= 90 ? 0 : (((th % 360) + 360) % 360) <= 270 ? 180 : 360;
			const d = ((th % 360) + 360) % 360;
			if (wo > 0) g.push(<g key="rw" opacity={wo}><path d={wedgeD(cx, cy, R * 0.34, a0, d)} fill={W.soft} stroke={W.stroke} strokeWidth={3} />
				{ry.relatedWedge.label !== false ? <text x={cx + R * 0.48 * Math.cos(((a0 + d) / 2) * D2R)} y={cy - R * 0.48 * Math.sin(((a0 + d) / 2) * D2R) + 12} textAnchor="middle" {...haloText(34, W.ink)}>{typeof ry.relatedWedge.label === 'string' ? ry.relatedWedge.label : angleText(relatedAngle(th), angleUnit)}</text> : null}</g>);
		}
		if (ry.drop) {
			const dd = ry.drop, dO = vis(f, dd.at, dd.out, 12), sz = dd.size ?? 38;
			if (dO > 0) {
				const sx = Math.sign(X) || 1, sy = Math.sign(Yv) || 1, m = 18;
				const lb = dd.labels === false ? null : {x: 'x', y: 'y', r: 'r', ...(dd.labels ?? {})};
				const nx = -s, ny = c; // outward normal of the hypotenuse, chosen away from the triangle
				const side = Math.sign(nx * (X / 2 - X) + ny * (Yv / 2 - 0)) || 1;
				g.push(<g key="drop" opacity={dO}>
					{dd.fill !== false ? <path d={`M${cx},${cy} L${px},${cy} L${px},${py} Z`} fill={Y.soft} opacity={0.55} /> : null}
					<line x1={px} y1={py} x2={px} y2={cy} stroke={Y.stroke} strokeWidth={6} />
					<line x1={cx} y1={cy} x2={px} y2={cy} stroke={Xc.stroke} strokeWidth={8} />
					{Math.abs(X) * unit > 30 && Math.abs(Yv) * unit > 30 ? <path d={`M${px - sx * m},${cy} V${cy - sy * m} H${px}`} fill="none" stroke={INK} strokeWidth={3} /> : null}
					{lb ? <>
						<text x={(cx + px) / 2} y={cy + (sy > 0 ? 44 : -18)} textAnchor="middle" {...haloText(sz, Xc.ink)}>{lb.x}</text>
						<text x={px + sx * 16} y={(py + cy) / 2 + 12} textAnchor={sx > 0 ? 'start' : 'end'} {...haloText(sz, Y.ink)}>{lb.y}</text>
						<text x={(cx + px) / 2 - side * nx * 34} y={(cy + py) / 2 + side * ny * 34 + 12} textAnchor="middle" {...haloText(sz, INK)}>{lb.r}</text>
					</> : null}
				</g>);
			}
		}
		if (ry.arc) {
			const ar = ry.arc, aO = vis(f, ar.at, ar.out, 12), rad = ar.radius ?? R * 0.22, laps = Math.abs(th) / 360;
			if (aO > 0) {
				const grow = laps > 1 ? Math.min(36, (R * 0.25) / laps) : 0, mid = th / 2, mr = rad + (grow * Math.abs(th)) / 720 + 34;
				g.push(<g key="arc" opacity={aO}>
					<path d={arcD(cx, cy, rad, 0, th, grow)} fill="none" stroke={ar.color ?? col} strokeWidth={5} />
					{Math.abs(th) > 2 ? (() => {const ea = th * D2R, er = rad + (grow * Math.abs(th)) / 360, ex = cx + er * Math.cos(ea), ey = cy - er * Math.sin(ea), dir = Math.sign(th), tx = -Math.sin(ea) * dir, ty = -Math.cos(ea) * dir;
						return <path d={`M${ex - tx * 16 - Math.cos(ea) * 8},${ey - ty * 16 + Math.sin(ea) * 8} L${ex},${ey} L${ex - tx * 16 + Math.cos(ea) * 8},${ey - ty * 16 - Math.sin(ea) * 8}`} fill="none" stroke={ar.color ?? col} strokeWidth={5} strokeLinejoin="round" />;})() : null}
					{ar.label !== false ? <SvgFracText x={cx + mr * Math.cos(mid * D2R)} y={cy - mr * Math.sin(mid * D2R) + 12} text={typeof ar.label === 'string' ? ar.label : angleText(th, angleUnit)} size={34} color={A.ink} /> : null}
				</g>);
			}
		}
		g.push(<line key="ray" x1={cx} y1={cy} x2={cx + (R + Math.min(70, R * 0.18)) * c} y2={cy - (R + Math.min(70, R * 0.18)) * s} stroke={col} strokeWidth={6} strokeLinecap="round" strokeDasharray={ry.dash ? '14 10' : undefined} />);
		if (ry.point !== false) g.push(ry.hollow
			? <circle key="pt" cx={px} cy={py} r={13} fill={CARD} stroke={MATH_EXCLUDED} strokeWidth={5} />
			: <circle key="pt" cx={px} cy={py} r={13} fill={INK} stroke={CARD} strokeWidth={5} />);
		for (const rg of ry.rings ?? []) {const rgo = vis(f, rg.at, rg.out, 10); if (rgo > 0) g.push(<circle key={'rg' + rg.at} cx={px} cy={py} r={26 + 6 * (1 - prog(f, rg.at, 12))} fill="none" stroke={MATH_ROLES.answer.stroke} strokeWidth={5} opacity={rgo} />);}
		if (ry.coords) {
			const cc = ry.coords, cO = vis(f, cc.at, cc.out, 10);
			const txt = typeof cc.text === 'function' ? cc.text(X, Yv) : cc.text ?? `(${niceNum(X)}, ${niceNum(Yv)})`;
			if (cO > 0) g.push(<text key="co" x={px + (c >= -0.05 ? 22 : -22)} y={py + (s >= 0 ? -22 : 50)} opacity={cO} textAnchor={c >= -0.05 ? 'start' : 'end'} {...haloText(cc.size ?? 36, INK)}>{txt}</text>);
		}
		els.push(<g key={'ray' + i} opacity={ro}>{g}</g>);
	});
	// mirrors
	mirrors.forEach((mr, i) => {
		const mo = vis(f, mr.at, mr.out, 12);
		if (mo <= 0.001) return;
		const th = rayAngle(mr.ray ?? 0), M = mr.color ?? (mr.kind === 'yx' ? TRIG_MAGENTA : MATH_ROLES.a);
		const md = mr.kind === 'x' ? -th : mr.kind === 'y' ? 180 - th : 90 - th;
		const [p0x, p0y] = P(r * Math.cos(th * D2R), r * Math.sin(th * D2R));
		const mX = r * Math.cos(md * D2R), mY = r * Math.sin(md * D2R), [p1x, p1y] = P(mX, mY);
		const u = mr.flyAt === undefined ? 1 : smooth((f - mr.flyAt) / 24);
		const qx = p0x + (p1x - p0x) * u, qy = p0y + (p1y - p0y) * u;
		const L = R * 1.25;
		const line = mr.kind === 'x' ? [cx - L, cy, cx + L, cy] : mr.kind === 'y' ? [cx, cy - L, cx, cy + L] : [cx - L * 0.8, cy + L * 0.8, cx + L * 0.8, cy - L * 0.8];
		const coordTxt = typeof mr.coords === 'function' ? mr.coords(mX, mY) : mr.coords;
		els.push(<g key={'mir' + i} opacity={mo}>
			<line x1={line[0]} y1={line[1]} x2={line[2]} y2={line[3]} stroke={mr.kind === 'yx' ? MATH_ROLES.gradient.stroke : INK_SOFT} strokeWidth={4} strokeDasharray="14 10" />
			{mr.lineLabel ? <text x={line[2] + 10} y={line[3] - 10} {...haloText(32, mr.kind === 'yx' ? MATH_ROLES.gradient.ink : INK_SOFT)}>{mr.lineLabel}</text> : null}
			{mr.path ? <line x1={p0x} y1={p0y} x2={p1x} y2={p1y} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="3 9" strokeLinecap="round" /> : null}
			{u >= 1 ? <line x1={cx} y1={cy} x2={p1x} y2={p1y} stroke={M.stroke} strokeWidth={6} strokeLinecap="round" strokeDasharray={mr.kind === 'yx' ? undefined : '14 9'} /> : null}
			{u >= 1 && mr.arc ? (() => {const [a0, a1] = mr.kind === 'yx' ? [90, md] : [0, md], mid = (a0 + a1) / 2, rr = R * 0.3;
				return <g><path d={arcD(cx, cy, rr, a0, a1)} fill="none" stroke={M.stroke} strokeWidth={5} />
					<text x={cx + (rr + 34) * Math.cos(mid * D2R)} y={cy - (rr + 34) * Math.sin(mid * D2R) + 12} textAnchor="middle" {...haloText(32, M.ink)}>{mr.arcLabel ?? (mr.kind === 'yx' ? `90° ${MINUS} θ` : `${MINUS}θ`)}</text></g>;})() : null}
			<circle cx={qx} cy={qy} r={13} fill={M.stroke} stroke={CARD} strokeWidth={5} />
			{u >= 1 && coordTxt ? <text x={p1x + (p1x >= cx ? 22 : -22)} y={p1y + (p1y <= cy ? -22 : 50)} textAnchor={p1x >= cx ? 'start' : 'end'} {...haloText(36, M.ink)}>{coordTxt}</text> : null}
		</g>);
	});
	// stamped hollow dots
	const hollow = new Set<number>();
	if (hollowDots && vis(f, hollowDots.at, hollowDots.out, 10) > 0) hollowDots.angles.forEach(a => hollow.add(((Math.round(a) % 360) + 360) % 360));
	if (stamps && rays[stamps.ray ?? 0] && f >= stamps.from && (stamps.out === undefined || f < stamps.out)) {
		const ang = rays[stamps.ray ?? 0].angle;
		const targets = stamps.when === 'x0' ? [90, 270] : stamps.when === 'y0' ? [0, 180] : [0, 90, 180, 270];
		let prev = keyedAt(ang, stamps.from);
		for (let fr = stamps.from; fr <= f; fr++) {
			const cur = keyedAt(ang, fr);
			for (const t of targets) {
				const near = (v: number) => {const d = (((v - t) % 360) + 540) % 360 - 180; return d;};
				const d0 = near(prev), d1 = near(cur);
				if (Math.abs(d1) < 0.3 || (Math.sign(d0) !== Math.sign(d1) && Math.abs(d0 - d1) < 90)) hollow.add(t);
			}
			prev = cur;
		}
	}
	hollow.forEach(a => {const [hx, hy] = P(r * Math.cos(a * D2R), r * Math.sin(a * D2R)); els.push(<circle key={'h' + a} cx={hx} cy={hy} r={15} fill={CARD} stroke={MATH_EXCLUDED} strokeWidth={5} />);});
	// flag at the point
	let flagEl: React.ReactNode = null;
	if (flag && rays[flag.ray ?? 0] && vis(f, flag.at, flag.out, 8) > 0) {
		const th = rayAngle(flag.ray ?? 0), w = flag.which ?? 'tan';
		const zero = w === 'tan' || w === 'sec' ? Math.abs(Math.cos(th * D2R)) < 1e-6 : Math.abs(Math.sin(th * D2R)) < 1e-6;
		if (zero) {
			const [px, py] = P(r * Math.cos(th * D2R), r * Math.sin(th * D2R));
			const txt = flag.text ?? (w === 'tan' || w === 'sec' ? 'undefined: x = 0' : 'undefined: y = 0');
			flagEl = <div style={{position: 'absolute', left: px + 34, top: py < cy - 1 ? py + 36 : py > cy + 1 ? py - 96 : py - 30, opacity: vis(f, flag.at, flag.out, 8), background: CARD, border: `4px solid ${MATH_MISTAKE}`, borderRadius: 14, padding: '4px 16px', boxShadow: CARD_SHADOW, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, color: MATH_MISTAKE, whiteSpace: 'nowrap'}}>{txt}</div>;
		}
	}
	// lap counters
	const laps = rays.map((ry, i) => {
		if (!ry.lap) return null;
		const lo = vis(f, ry.lap.at ?? ry.at, ry.out, 12);
		if (lo <= 0.001) return null;
		const th = Math.round(keyedAt(ry.angle, f) * 10) / 10, base = ry.lap.base;
		let txt = fmtDeg(th, Math.abs(th - Math.round(th)) < 0.05 ? 0 : 1);
		if (base !== undefined) {
			const k = Math.round((th - base) / 360);
			if (k !== 0 && Math.abs(th - base - 360 * k) < 0.05) txt = `${fmtDeg(base)} ${k > 0 ? '+' : MINUS} ${Math.abs(k) === 1 ? '' : Math.abs(k) + ' × '}360° = ${fmtDeg(th)}`;
		}
		return <div key={'lap' + i} style={{position: 'absolute', left: ry.lap.x, top: ry.lap.y, opacity: lo, background: CARD, border: `4px solid ${A.stroke}`, borderRadius: 18, boxShadow: CARD_SHADOW, padding: '6px 24px', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: ry.lap.size ?? 52, color: A.ink, fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap'}}>{txt}</div>;
	});
	// readouts
	const ratioState = (i = 0) => {const th = rayAngle(i); return {th, X: r * Math.cos(th * D2R), Y: r * Math.sin(th * D2R)};};
	let board: React.ReactNode = null;
	if (readout) {
		const {X, Y: Yv} = ratioState(readout.ray), dg = readout.digits ?? 4, names = readout.names ?? 'fraction', ur = readout.undefinedRole ?? 'mistake';
		const tiny = 1e-6 * Math.max(1, r);
		const row = (frac: string, trig: string, num: number, den: number, role: 'b'): ReadoutRow => {
			const und = Math.abs(den) < tiny, label = names === 'fraction' ? frac : names === 'trig' ? trig : `${trig} = ${frac}`;
			return und ? {label, value: 0, text: `${frac.split('/')[0]}/0: undefined`, role: ur} : {label, value: num / den, digits: dg, role};
		};
		const rows: ReadoutRow[] = [row('x/r', 'cos θ', X, r, 'b'), row('y/r', 'sin θ', Yv, r, 'b'), row('y/x', 'tan θ', Yv, X, 'b')];
		if (readout.kind === 'six') rows.push(row('r/x', 'sec θ', r, X, 'b'), row('r/y', 'cosec θ', r, Yv, 'b'), row('x/y', 'cot θ', X, Yv, 'b'));
		board = <LiveReadoutBoard x={readout.x} y={readout.y} width={readout.width ?? 520} at={readout.at} out={readout.out} inline size={readout.size ?? 48} rows={rows} />;
	}
	let pairBoard: React.ReactNode = null;
	if (paired) {
		const po = vis(f, paired.at, paired.out, 12);
		if (po > 0.001) {
			const {X, Y: Yv} = ratioState(paired.ray), dg = paired.digits ?? 3, sz = paired.size ?? 44, tiny = 1e-6 * Math.max(1, r);
			const val = (n: number, d: number) => (Math.abs(d) < tiny ? 'undefined' : fmtNum(n / d, dg));
			const pairs: [string, number, number, string, number, number, RoleColours][] = [['x/r', X, r, 'r/x', r, X, Xc], ['y/r', Yv, r, 'r/y', r, Yv, Y], ['y/x', Yv, X, 'x/y', X, Yv, T]];
			pairBoard = <div style={{position: 'absolute', left: paired.x, top: paired.y, opacity: po, background: CARD, borderRadius: 20, boxShadow: CARD_SHADOW, padding: '10px 24px', display: 'grid', gridTemplateColumns: 'auto auto auto auto auto', columnGap: 18, rowGap: 4, alignItems: 'baseline'}}>
				{pairs.map(([l1, n1, d1, l2, n2, d2, C]) => {
					const v1 = val(n1, d1), v2 = val(n2, d2);
					const st = (v: string): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: sz, color: v === 'undefined' ? MATH_EXCLUDED : C.ink, fontVariantNumeric: 'tabular-nums', textAlign: 'right', minWidth: sz * 3.4});
					const lab: React.CSSProperties = {fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, color: C.ink};
					return <React.Fragment key={l1}><span style={lab}>{l1}</span><span style={st(v1)}>{v1}</span><span style={{...lab, color: INK_SOFT}}>↔</span><span style={lab}>{l2}</span><span style={st(v2)}>{v2}</span></React.Fragment>;
				})}
			</div>;
		}
	}
	return <>
		<FrameSvg style={{opacity: o}}>{els}{children ? children({P, R, r}) : null}</FrameSvg>
		<div style={{position: 'absolute', inset: 0, opacity: o, pointerEvents: 'none'}}>{laps}{flagEl}</div>
		{board}{pairBoard}
	</>;
};

// =====================================================================================================
// CircleToGraph (t10; t15a's circle-and-graph stage)
// =====================================================================================================
export type TrigFn = 'sin' | 'cos' | 'tan';
const FN: Record<TrigFn, (u: number) => number> = {sin: Math.sin, cos: Math.cos, tan: Math.tan};
const FN_ROLE: Record<TrigFn, RoleColours> = {sin: MATH_ROLES.b, cos: MATH_ROLES.gradient, tan: MATH_ROLES.k};
/**
 * The coded projector: a point turning on a unit circle (a StudioCirclePoint with a ray at `angle`, in degrees,
 * keyed) and the graph of sin, cos or tan of the angle against the angle. The graph traces only the angles the
 * point has reached since `traceFrom` (so a clockwise turn draws to the left). sin: a teal height on the circle
 * and a dashed level projector to the graph point (the circle sits on the graph's y = 0 with the graph's y-scale
 * unless `circle.cy` / `circle.unit` are given). cos: a violet bar along the x-axis; at `swing.at` a ghost copy
 * swings up a quarter turn and stands as the graph's height. tan: height (teal) over x (violet) on the circle,
 * the graph breaking at odd multiples of 90°. `axisUnit` sets the graph's x in degrees or radians;
 * `relabel` cross-fades degree tick labels to radian labels without moving the ticks; `windowKeys` extends the
 * x-axis (to 720°, say). `ghosts` draw dashed copies that can slide (`shift`, in axis units). `rings` ring the
 * graph point at chosen x. `bounds` draws y = ±1 dashed.
 */
export const CircleToGraph: React.FC<{
	circle: {cx: number; cy?: number; unit?: number; axis?: number};
	graph: {x: number; y: number; width: number; height: number; window: PlotWindow; windowKeys?: readonly {frame: number; x: Range}[]; xTicks?: readonly PlotTick[]; yTicks?: readonly (number | PlotTick)[]; xLabel?: string; yLabel?: string; relabel?: {at: number; ticks: readonly PlotTick[]}};
	fn: TrigFn; angle: Keyed; axisUnit?: 'deg' | 'rad'; traceFrom?: number; at?: number; out?: number; color?: RoleColours;
	projector?: boolean; swing?: {at: number}; showCurve?: boolean;
	ghosts?: readonly {fn: TrigFn; at: number; out?: number; color?: RoleColours; shift?: Keyed}[];
	rings?: readonly {X: number; at: number; out?: number}[];
	bounds?: {at: number; out?: number}; asymptotes?: {at: number; out?: number};
	readout?: {x: number; y: number; width?: number; at?: number};
	circleExtras?: Partial<React.ComponentProps<typeof StudioCirclePoint>>;
}> = ({circle, graph, fn, angle, axisUnit = 'deg', traceFrom, at = 0, out, color, projector = true, swing, showCurve = true, ghosts = [], rings = [], bounds, asymptotes, readout, circleExtras = {}}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const win: PlotWindow = graph.windowKeys?.length ? {x: [kf(f, graph.windowKeys.map(k => [k.frame, k.x[0]] as const)), kf(f, graph.windowKeys.map(k => [k.frame, k.x[1]] as const))], y: graph.window.y} : graph.window;
	const th = keyedAt(angle, f), toX = (deg: number) => (axisUnit === 'deg' ? deg : deg * D2R), u = th * D2R;
	const C = color ?? FN_ROLE[fn], F = FN[fn];
	const g = (X: number) => F(axisUnit === 'deg' ? X * D2R : X);
	// angles reached since traceFrom
	let lo = th, hi = th;
	const t0 = traceFrom ?? at;
	for (let fr = t0; fr <= f; fr++) {const v = keyedAt(angle, fr); lo = Math.min(lo, v); hi = Math.max(hi, v);}
	const breaks: number[] = fn === 'tan' ? Array.from({length: 40}, (_, i) => toX((i - 20 + 0.5) * 180)) : [];
	return <>
		<StudioPlot x={graph.x} y={graph.y} width={graph.width} height={graph.height} window={win} xTicks={graph.relabel ? graph.xTicks?.map(t => ({...t, label: ''})) : graph.xTicks} yTicks={graph.yTicks} xLabel={graph.xLabel ?? (axisUnit === 'deg' ? 'θ' : 'x')} yLabel={graph.yLabel ?? `${fn} θ`} at={at} out={out}>
			{m => {
				const [gx, gy] = m.p(toX(th), F(u));
				const defined = Number.isFinite(F(u)) && Math.abs(Math.cos(u)) > 1e-6 || fn !== 'tan';
				const b = m.box;
				return <>
					{bounds && vis(f, bounds.at, bounds.out, 10) > 0 ? <g opacity={vis(f, bounds.at, bounds.out, 10)}>{[1, -1].map(v => {const [, py] = m.p(0, v); return <line key={v} x1={b.left} x2={b.left + b.width} y1={py} y2={py} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="12 9" />;})}</g> : null}
					{asymptotes && vis(f, asymptotes.at, asymptotes.out, 10) > 0 ? <g opacity={vis(f, asymptotes.at, asymptotes.out, 10)}>{breaks.filter(v => v > win.x[0] && v < win.x[1]).map(v => {const [px] = m.p(v, 0); return <line key={v} x1={px} x2={px} y1={b.top} y2={b.top + b.height} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="12 9" />;})}</g> : null}
					{graph.relabel ? (() => {const rp = prog(f, graph.relabel.at, 18); return <>
						{(graph.xTicks ?? []).map(t => {const [px] = m.p(t.value, 0); return <text key={'o' + t.value} x={px} y={b.top + b.height + 40} textAnchor="middle" opacity={1 - rp} style={TXT(30)}>{t.label}</text>;})}
						{graph.relabel.ticks.map(t => {const [px] = m.p(t.value, 0); return <text key={'n' + t.value} x={px} y={b.top + b.height + 40} textAnchor="middle" opacity={rp} style={TXT(30)}>{t.label}</text>;})}
					</>;})() : null}
					<g clipPath={m.clip}>
						{ghosts.map((gh, i) => {const go = vis(f, gh.at, gh.out, 12); if (go <= 0) return null; const sh = keyedAt(gh.shift ?? 0, f), GF = FN[gh.fn];
							return <path key={i} d={fnPath(m, X => GF(axisUnit === 'deg' ? (X - sh) * D2R : X - sh), win.x[0], win.x[1], 400, gh.fn === 'tan' ? breaks.map(v => v + sh) : [])} stroke={(gh.color ?? FN_ROLE[gh.fn]).stroke} strokeWidth={5} strokeDasharray="14 10" fill="none" opacity={0.7 * go} />;})}
						{showCurve && hi > lo ? <path d={fnPath(m, g, toX(lo), toX(hi), Math.max(40, Math.ceil((hi - lo) / 2)), breaks)} stroke={C.stroke} strokeWidth={7} fill="none" strokeLinejoin="round" /> : null}
					</g>
					{rings.map((rg, i) => {const ro = vis(f, rg.at, rg.out, 10); if (ro <= 0) return null; const [rx, ryy] = m.p(rg.X, g(rg.X)); return <circle key={i} cx={rx} cy={ryy} r={22 + 6 * (1 - prog(f, rg.at, 12))} fill="none" stroke={MATH_ROLES.answer.stroke} strokeWidth={5} opacity={ro} />;})}
					{defined && gy > b.top - 4 && gy < b.top + b.height + 4 ? <>
						<line x1={gx} x2={gx} y1={m.p(0, 0)[1]} y2={gy} stroke={C.stroke} strokeWidth={4} opacity={0.6} />
						<circle cx={gx} cy={gy} r={13} fill={C.stroke} stroke={CARD} strokeWidth={5} />
					</> : null}
				</>;
			}}
		</StudioPlot>
		<CircleProjector circle={circle} graph={graph} win={win} fn={fn} th={th} toX={toX} C={C} projector={projector} swing={swing} at={at} out={out} angle={angle} extras={circleExtras} />
		{readout ? <LiveReadoutBoard x={readout.x} y={readout.y} width={readout.width ?? 480} at={readout.at ?? at} out={out} inline rows={[
			{label: 'θ', value: th, text: axisUnit === 'deg' ? fmtDeg(th) : fmtNum(u, 2), role: 'a'},
			fn === 'tan' && Math.abs(Math.cos(u)) < 1e-6 ? {label: 'tan θ', value: 0, text: 'undefined', role: 'inner'} : {label: `${fn} θ`, value: F(u), digits: fn === 'tan' ? 2 : 3, role: fn === 'sin' ? 'b' : fn === 'cos' ? 'gradient' : 'k'},
		]} /> : null}
	</>;
};

// The circle half of CircleToGraph (kept separate so it can share the plot transform).
const CircleProjector: React.FC<{circle: {cx: number; cy?: number; unit?: number; axis?: number}; graph: {x: number; y: number; width: number; height: number; window: PlotWindow}; win: PlotWindow; fn: TrigFn; th: number; toX: (d: number) => number; C: RoleColours; projector: boolean; swing?: {at: number}; at: number; out?: number; angle: Keyed; extras: Partial<React.ComponentProps<typeof StudioCirclePoint>>}> = ({circle, graph, win, fn, th, toX, C, projector, swing, at, out, angle, extras}) => {
	const f = useCurrentFrame();
	// StudioPlot's own transform, for frame-space positions.
	const m = makePlot(graph.x, graph.y, graph.width, graph.height, win);
	const [, zy] = m.pf(win.x[0], 0), unit = circle.unit ?? m.sy, cy = circle.cy ?? zy, cx = circle.cx;
	const u = th * D2R, c = Math.cos(u), s = Math.sin(u), px = cx + c * unit, py = cy - s * unit;
	const [gx, gy] = m.pf(toX(th), FN[fn](u));
	const inBox = gy >= m.y + m.box.top - 2 && gy <= m.y + m.box.top + m.box.height + 2 && gx >= m.x + m.box.left - 2 && gx <= m.x + m.box.left + m.box.width + 2;
	const Xc = MATH_ROLES.gradient, T = MATH_ROLES.b, o = vis(f, at, out, 14);
	const sw = swing ? smooth((f - swing.at) / 24) : 0;
	let ghost: React.ReactNode = null;
	if (fn === 'cos' && swing && f >= swing.at) {
		const L = c * unit, [gbx, gby] = m.pf(toX(th), 0);
		const bx = cx + (gbx - cx) * sw, by = cy + (gby - cy) * sw, rot = (-Math.PI / 2) * sw * Math.sign(L || 1);
		const ex = bx + Math.abs(L) * Math.cos(rot) * Math.sign(L || 1), ey = by + Math.abs(L) * Math.sin(rot) * Math.sign(L || 1);
		ghost = <line x1={bx} y1={by} x2={ex} y2={ey} stroke={Xc.stroke} strokeWidth={10} strokeLinecap="round" opacity={0.55} />;
	}
	return <>
		<StudioCirclePoint cx={cx} cy={cy} unit={unit} r={1} axis={circle.axis ?? 1.25} at={at} out={out} rays={[{angle, at, point: true}]} {...extras} />
		<FrameSvg style={{opacity: o}}>
			{fn === 'sin' || fn === 'tan' ? <line x1={px} y1={py} x2={px} y2={cy} stroke={T.stroke} strokeWidth={8} strokeLinecap="round" /> : null}
			{fn === 'cos' || fn === 'tan' ? <line x1={cx} y1={cy} x2={px} y2={cy} stroke={Xc.stroke} strokeWidth={10} strokeLinecap="round" /> : null}
			{ghost}
			{projector && inBox && (fn !== 'cos' || !swing) ? <line x1={px} y1={py} x2={gx} y2={gy} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="10 9" /> : null}
			<circle cx={px} cy={py} r={13} fill={C.stroke} stroke={CARD} strokeWidth={5} />
		</FrameSvg>
	</>;
};

// =====================================================================================================
// RadiusWrap (t08, t09)
// =====================================================================================================
/** Counter text for radius-lengths laid: whole numbers exactly, otherwise two decimals cut with "…" (3.14…). */
export const wrapCount = (L: number) => (Math.abs(L - Math.round(L)) < 0.005 ? String(Math.round(L)) : `${(Math.floor(L * 100) / 100).toFixed(2)}…`);
/**
 * A radius-length string laid round the rim. `length` (keyed) is the number of radius-lengths laid, anticlockwise
 * from `startDeg`; each whole length is a separate teal piece with a tick at its end, and the unlaid rest of the
 * current piece sticks out straight along the tangent, so the string is seen bending on. The original radius stays
 * in ink. `counter` shows the laid count (1, 2, 3.14…, 6.28…). `wedge` fills the one-radian wedge with its label
 * and "≈ 57.3°". `straighten` peels the arc from startDeg through `theta` radians off the rim and lays it straight
 * beside the start radius (p 0 to 1, keyed), with a radius-length tick to compare against (arc = rθ).
 * Place it over a plate by passing the plate's centre and radius in frame pixels; `rim: false` hides the circle.
 */
export const RadiusWrap: React.FC<{
	cx: number; cy: number; R: number; startDeg?: number; at?: number; out?: number; rim?: boolean;
	length?: Keyed; radius?: {at?: number; out?: number; label?: string; labelSide?: 'above' | 'below'};
	counter?: {x: number; y: number; at?: number; out?: number; label?: string};
	wedge?: {at: number; out?: number; label?: string; readout?: boolean};
	straighten?: {theta: number; p: Keyed; at: number; out?: number; offset?: number; label?: string; ruler?: boolean};
}> = ({cx, cy, R, startDeg = 0, at = 0, out, rim = true, length, radius = {}, counter, wedge, straighten}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const T = MATH_ROLES.b, A = MATH_ROLES.a, a0 = startDeg * D2R;
	const pt = (ang: number, rr = R): [number, number] => [cx + rr * Math.cos(ang), cy - rr * Math.sin(ang)];
	const L = length === undefined ? 0 : Math.max(0, keyedAt(length, f));
	const pieces: React.ReactNode[] = [];
	const whole = Math.floor(L + 1e-9);
	for (let k = 0; k <= whole; k++) {
		const e = Math.min(k + 1, L);
		if (e - k <= 1e-6) continue;
		const d = arcD(cx, cy, R, (a0 + k) / D2R, (a0 + e) / D2R);
		pieces.push(<path key={'p' + k} d={d} fill="none" stroke={k % 2 ? T.stroke : '#0f5e61'} strokeWidth={11} strokeLinecap="butt" />);
		if (e - k >= 1 - 1e-6) {const [tx0, ty0] = pt(a0 + e, R - 18), [tx1, ty1] = pt(a0 + e, R + 18); pieces.push(<line key={'t' + k} x1={tx0} y1={ty0} x2={tx1} y2={ty1} stroke={INK} strokeWidth={4} />);}
	}
	const rest = L > 0 && L < 7 && Math.abs(L - Math.round(L)) > 1e-3 ? Math.ceil(L) - L : 0;
	if (rest > 0) {
		const [sx, sy] = pt(a0 + L), tx = -Math.sin(a0 + L), ty = -Math.cos(a0 + L);
		pieces.push(<line key="hang" x1={sx} y1={sy} x2={sx + tx * rest * R} y2={sy + ty * rest * R} stroke={Math.floor(L) % 2 ? T.stroke : '#0f5e61'} strokeWidth={11} />);
	}
	const ro = vis(f, radius.at ?? at, radius.out, 12), [rx, ry] = pt(a0);
	const wo = wedge ? vis(f, wedge.at, wedge.out, 12) : 0;
	let st: React.ReactNode = null;
	if (straighten) {
		const so = vis(f, straighten.at, straighten.out, 12), p = smooth(Math.max(0, Math.min(1, keyedAt(straighten.p, f)))), off = straighten.offset ?? 40;
		if (so > 0) {
			const n = 60, nx = Math.sin(a0), ny = Math.cos(a0); // screen normal on the clockwise side of the start radius
			let d = '';
			for (let i = 0; i <= n; i++) {
				const s = i / n, [ax, ay] = pt(a0 + s * straighten.theta);
				const bx = cx + Math.cos(a0) * s * straighten.theta * R + nx * off, by = cy - Math.sin(a0) * s * straighten.theta * R + ny * off;
				d += `${i ? 'L' : 'M'}${(ax + (bx - ax) * p).toFixed(1)},${(ay + (by - ay) * p).toFixed(1)} `;
			}
			const endX = cx + Math.cos(a0) * straighten.theta * R + nx * off, endY = cy - Math.sin(a0) * straighten.theta * R + ny * off;
			st = <g opacity={so}>
				<path d={arcD(cx, cy, R, startDeg, startDeg + straighten.theta / D2R)} fill="none" stroke={T.stroke} strokeWidth={4} strokeDasharray="8 8" opacity={0.5 * p} />
				<path d={d} fill="none" stroke={T.stroke} strokeWidth={11} strokeLinecap="round" />
				{straighten.ruler !== false && p > 0.98 ? <>
					<line x1={cx + nx * (off + 26)} y1={cy + ny * (off + 26)} x2={cx + Math.cos(a0) * R + nx * (off + 26)} y2={cy - Math.sin(a0) * R + ny * (off + 26)} stroke={INK} strokeWidth={3} />
					{[0, 1].map(k => <line key={k} x1={cx + Math.cos(a0) * R * k + nx * (off + 16)} y1={cy - Math.sin(a0) * R * k + ny * (off + 16)} x2={cx + Math.cos(a0) * R * k + nx * (off + 36)} y2={cy - Math.sin(a0) * R * k + ny * (off + 36)} stroke={INK} strokeWidth={3} />)}
					<text x={cx + Math.cos(a0) * R / 2 + nx * (off + 70)} y={cy - Math.sin(a0) * R / 2 + ny * (off + 70)} textAnchor="middle" {...haloText(30, INK, 700)}>1 radius</text>
				</> : null}
				{straighten.label && p > 0.98 ? <text x={endX + 14} y={endY + 12} {...haloText(36, T.ink)}>{straighten.label}</text> : null}
			</g>;
		}
	}
	return <>
		<FrameSvg style={{opacity: o}}>
			{wo > 0 ? <g opacity={wo}>
				<path d={wedgeD(cx, cy, R, startDeg, startDeg + 1 / D2R)} fill={A.soft} stroke={A.stroke} strokeWidth={4} />
				<text x={cx + R * 0.55 * Math.cos(a0 + 0.5)} y={cy - R * 0.55 * Math.sin(a0 + 0.5) + 12} textAnchor="middle" {...haloText(36, A.ink)}>{wedge?.label ?? '1 radian'}</text>
				{wedge?.readout !== false ? <text x={cx + R * 0.55 * Math.cos(a0 + 0.5)} y={cy - R * 0.55 * Math.sin(a0 + 0.5) + 56} textAnchor="middle" {...haloText(32, A.ink, 700)}>{`≈ ${fmtDeg(180 / Math.PI, 1)}`}</text> : null}
			</g> : null}
			{rim ? <circle cx={cx} cy={cy} r={R} fill="none" stroke={INK} strokeWidth={4} /> : null}
			{ro > 0 ? <g opacity={ro}><line x1={cx} y1={cy} x2={rx} y2={ry} stroke={INK} strokeWidth={6} strokeLinecap="round" /><circle cx={cx} cy={cy} r={7} fill={INK} />
				{radius.label ? <text x={(cx + rx) / 2 + Math.sin(a0) * (radius.labelSide === 'below' ? 46 : -34)} y={(cy + ry) / 2 + Math.cos(a0) * (radius.labelSide === 'below' ? 46 : -34) + 12} textAnchor="middle" {...haloText(36, INK)}>{radius.label}</text> : null}</g> : null}
			{pieces}
			{st}
		</FrameSvg>
		{counter ? <div style={{position: 'absolute', left: counter.x, top: counter.y, opacity: vis(f, counter.at ?? at, counter.out ?? out, 12), background: CARD, borderRadius: 18, boxShadow: CARD_SHADOW, border: `4px solid ${T.stroke}`, padding: '6px 26px', textAlign: 'center'}}>
			<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color: T.ink}}>{counter.label ?? 'radius-lengths'}</div>
			<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 64, color: T.ink, lineHeight: 1.05, fontVariantNumeric: 'tabular-nums'}}>{wrapCount(L)}</div>
		</div> : null}
	</>;
};

// =====================================================================================================
// SectorSegment (t09)
// =====================================================================================================
export const arcLength = (r: number, theta: number) => r * theta;
export const sectorArea = (r: number, theta: number) => 0.5 * r * r * theta;
export const segmentArea = (r: number, theta: number) => 0.5 * r * r * (theta - Math.sin(theta));
/**
 * Sector, chord, triangle and segment of a circle (centre cx, cy, radius R px; the angle θ in radians from
 * `startDeg`, anticlockwise). Each layer has its own cue: radii (ink), arc (teal), chord (ink), sector (pale teal),
 * the isosceles triangle (grey; `lift` slides it out by dx, dy), the minor segment (amber) and the major segment
 * (violet, with the major arc and the reflex angle 2π − θ). Labels are optional strings. Pass a plate's sidecar
 * centre, radius and hinge angles in frame pixels to land the segment on a painted leaf.
 */
export const SectorSegment: React.FC<{
	cx: number; cy: number; R: number; theta: number; startDeg?: number; at?: number; out?: number; rim?: boolean | {at: number};
	radii?: {at: number; out?: number; label?: string}; arc?: {at: number; out?: number; label?: string}; chord?: {at: number; out?: number; label?: string};
	sector?: {at: number; out?: number; label?: string}; triangle?: {at: number; out?: number; lift?: {at: number; dx: number; dy: number}};
	segment?: {at: number; out?: number; label?: string}; major?: {at: number; out?: number; label?: string; arcLabel?: string};
	angle?: {at: number; out?: number; label?: string};
}> = ({cx, cy, R, theta, startDeg = 0, at = 0, out, rim = true, radii, arc, chord, sector, triangle, segment, major, angle}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const a0 = startDeg, a1 = startDeg + theta / D2R;
	const pt = (d: number, rr = R): [number, number] => [cx + rr * Math.cos(d * D2R), cy - rr * Math.sin(d * D2R)];
	const [x0, y0] = pt(a0), [x1, y1] = pt(a1);
	const T = MATH_ROLES.b, Am = MATH_ROLES.k, V = MATH_ROLES.gradient, Bl = MATH_ROLES.a;
	const lay = (s?: {at: number; out?: number}) => (s ? vis(f, s.at, s.out, 12) : 0);
	const minorArc = arcD(cx, cy, R, a0, a1), majorArc = arcD(cx, cy, R, a1, a0 + 360);
	const segD = `${minorArc} Z`, majD = `${majorArc} Z`;
	const mid = (a0 + a1) / 2;
	const lift = triangle?.lift ? smooth((f - triangle.lift.at) / 24) : 0, ldx = (triangle?.lift?.dx ?? 0) * lift, ldy = (triangle?.lift?.dy ?? 0) * lift;
	const rimO = typeof rim === 'object' ? prog(f, rim.at, 20) : rim ? 1 : 0;
	const lab = (t: string | undefined, x: number, y: number, c: string, size = 36) => (t ? <text x={x} y={y} textAnchor="middle" {...haloText(size, c)}>{t}</text> : null);
	const segC = pt(mid, R * (0.5 + 0.5 * Math.cos(theta / 2)));
	return <FrameSvg style={{opacity: o}}>
		{lay(major) > 0 ? <g opacity={lay(major)}><path d={majD} fill={V.soft} stroke="none" /><path d={majorArc} fill="none" stroke={V.stroke} strokeWidth={9} />
			<path d={arcD(cx, cy, R * 0.16, a1, a0 + 360)} fill="none" stroke={Bl.stroke} strokeWidth={5} />
			{lab(major?.label, ...pt(mid + 180, R * 0.55), V.ink)}{lab(major?.arcLabel, ...pt(mid + 180, R + 50), V.ink, 32)}</g> : null}
		{lay(sector) > 0 ? <path d={wedgeD(cx, cy, R, a0, a1)} fill={T.soft} opacity={lay(sector)} /> : null}
		{lay(segment) > 0 ? <g opacity={lay(segment)}><path d={segD} fill={Am.soft} stroke={Am.stroke} strokeWidth={4} />{lab(segment?.label, segC[0], segC[1] + 12, Am.ink, 34)}</g> : null}
		{rimO > 0 ? <path d={arcD(cx, cy, R, 0, 360 * rimO)} fill="none" stroke={INK} strokeWidth={4} /> : null}
		{lay(triangle) > 0 ? <g opacity={lay(triangle)} transform={`translate(${ldx},${ldy})`}><path d={`M${cx},${cy} L${x0},${y0} L${x1},${y1} Z`} fill="#d9d3c8" stroke={INK_SOFT} strokeWidth={4} opacity={0.92} /></g> : null}
		{lay(arc) > 0 ? <g opacity={lay(arc)}><path d={minorArc} fill="none" stroke={T.stroke} strokeWidth={9} />{lab(arc?.label, ...pt(mid, R + 46), T.ink)}</g> : null}
		{lay(chord) > 0 ? <g opacity={lay(chord)}><line x1={x0} y1={y0} x2={x1} y2={y1} stroke={INK} strokeWidth={5} strokeDasharray={lay(radii) > 0 ? undefined : '14 9'} />{lab(chord?.label, x0 + (x1 - x0) * 0.24 - 34 * Math.cos(mid * D2R), y0 + (y1 - y0) * 0.24 + 34 * Math.sin(mid * D2R) + 12, INK, 34)}</g> : null}
		{lay(radii) > 0 ? <g opacity={lay(radii)}><path d={`M${x0},${y0} L${cx},${cy} L${x1},${y1}`} fill="none" stroke={INK} strokeWidth={5} strokeLinejoin="round" /><circle cx={cx} cy={cy} r={7} fill={INK} />
			{lab(radii?.label, (cx + x0) / 2 + 26 * Math.sin(a0 * D2R), (cy + y0) / 2 + 26 * Math.cos(a0 * D2R) + 12, INK, 34)}</g> : null}
		{lay(angle) > 0 ? <g opacity={lay(angle)}><path d={arcD(cx, cy, R * 0.18, a0, a1)} fill="none" stroke={Bl.stroke} strokeWidth={5} />
			<SvgFracText x={cx + R * 0.32 * Math.cos(mid * D2R)} y={cy - R * 0.32 * Math.sin(mid * D2R) + 12} text={angle?.label ?? piLabel(theta)} size={34} color={Bl.ink} /></g> : null}
	</FrameSvg>;
};

// =====================================================================================================
// Module-load self checks on the designs' numbers
// =====================================================================================================
{
	const near = (a: number, b: number, tol: number, what: string) => {if (!(Math.abs(a - b) <= tol)) throw new Error(`a11-trig-circle self check (${what}): ${a} vs ${b}`);};
	// t03: 120° on r = 2 reads −0.5000, 0.8660, −1.7321; 90° makes y/x undefined.
	const c120 = Math.cos(120 * D2R), s120 = Math.sin(120 * D2R);
	near(Number(fmtNum((2 * c120) / 2, 4).replace(MINUS, '-')), -0.5, 0, 't03 x/r');
	near(Number(fmtNum((2 * s120) / 2, 4)), 0.866, 0, 't03 y/r');
	near(Number(fmtNum(s120 / c120, 4).replace(MINUS, '-')), -1.7321, 0, 't03 y/x');
	if (!(Math.abs(Math.cos(90 * D2R)) < 1e-6)) throw new Error('a11-trig-circle self check: cos 90° is not 0');
	// t04: the copies of 30° land at 150°, 210°, 330°; cos θ = cos(−θ) at 100° and 250°.
	relatedCopies(30).forEach((d, i) => near(d, [30, 150, 210, 330][i], 0.5, 't04 copies'));
	for (const d of [100, 250]) near(Number(fmtNum(Math.cos(d * D2R), 4).replace(MINUS, '-')), Number(fmtNum(Math.cos(-d * D2R), 4).replace(MINUS, '-')), 0, 't04 mirror');
	// t15a: y = 0.5 → 30°, 150°; x = −0.5 → 120°, 240°; x = 0.5 → 60°, 300°.
	near(levelAngles('y', 0.5)[0], 30, 1e-9, 't15a y'); near(levelAngles('y', 0.5)[1], 150, 1e-9, 't15a y');
	near(levelAngles('x', -0.5)[0], 120, 1e-9, 't15a x'); near(levelAngles('x', -0.5)[1], 240, 1e-9, 't15a x');
	near(levelAngles('x', 0.5)[1], 300, 1e-9, 't15a x');
	// t08: the counter reads 3.14 at half a turn and 6.28 at a full turn; one radian is 57.3°.
	if (wrapCount(Math.PI) !== '3.14…' || wrapCount(2 * Math.PI) !== '6.28…' || wrapCount(3) !== '3') throw new Error('a11-trig-circle self check: RadiusWrap counter');
	if (fmtDeg(180 / Math.PI, 1) !== '57.3°') throw new Error('a11-trig-circle self check: one radian');
	// t08/t09: arc 5π cm on the r = 20 cm pizza (θ = π/4); sector 50π cm².
	near(arcLength(20, Math.PI / 4), 5 * Math.PI, 1e-12, 'pizza arc'); near(sectorArea(20, Math.PI / 4), 50 * Math.PI, 1e-12, 'pizza sector');
	// t09: the leaf (r = 50, θ = 2π/3) 2500π/3 − 625√3 ≈ 1535; the major segment ≈ 6,319; the major arc ≈ 209.
	const leaf = segmentArea(50, (2 * Math.PI) / 3);
	near(leaf, (2500 * Math.PI) / 3 - 625 * Math.sqrt(3), 1e-9, 't09 leaf');
	if (Math.round(leaf) !== 1535 || Math.round(2500 * Math.PI - leaf) !== 6319 || Math.round(7854 - 1535) !== 6319 || Math.round(arcLength(50, (4 * Math.PI) / 3)) !== 209) throw new Error('a11-trig-circle self check: t09 table');
	// t10: TAN_FAMILY excludes π/2 and its derivative is sec².
	if (!TAN_FAMILY.excluded!.some(v => Math.abs(v - Math.PI / 2) < 1e-12)) throw new Error('a11-trig-circle self check: TAN_FAMILY');
	if (degTicks(-360, 720, 90).length !== 12 || degTicks(0, 360)[0].label !== '90°') throw new Error('a11-trig-circle self check: degTicks');
}
