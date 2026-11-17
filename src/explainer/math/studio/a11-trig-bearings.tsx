// Year 11 Advanced kit, wave 2 (brief 245, maths-a11-kit-needs.md trigonometry item 3): bearings and elevation for
// t02a, t02b, t04, t05 and t06. BearingRose (one station: N, E, S and W, clockwise sweeps from north with a live
// three-digit readout, anticlockwise "turn back" sweeps for compass bearings, compass labels, markers, reverse
// bearings), BearingJourney (legs on a map with a north line at every turn, reverse-bearing sweeps at the turning
// point, the angle between two bearings filled, the line home and the angle at the start) and ElevationView (a
// coded HSC-style side view: two parallel horizontals, one sight line, the elevation and depression angles lit
// together with a hand "Z", a drifting object with live distance and angle readouts, and the classic wrong angle).
// Bearings are measured clockwise from north; the screen direction of bearing β is (sin β, −cos β).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {CARD, CARD_SHADOW, FrameSvg, fmtNum, smooth, vis} from './primitives';
import {MATH_MISTAKE, MATH_ROLES, RoleColours} from './roles';
import {TXT} from './plot-core';
import {Keyed, fmtDeg, keyedAt} from './a11-trig-circle';

const D2R = Math.PI / 180;
const haloText = (size: number, color: string, weight = 800): React.SVGProps<SVGTextElement> => ({style: TXT(size, color, weight), stroke: CARD, strokeWidth: 8, paintOrder: 'stroke'} as React.SVGProps<SVGTextElement>);

// =====================================================================================================
// Bearing arithmetic
// =====================================================================================================
const norm360 = (b: number) => ((b % 360) + 360) % 360;
/** A true bearing in three digits, leading zeros kept: 32 → "032°", 212 → "212°", 76.87 → "077°". */
export const fmtBearing = (b: number, digits = 0) => {
	let v = Number(norm360(b).toFixed(digits));
	if (v >= 360) v -= 360;
	const [i, d] = v.toFixed(digits).split('.');
	return `${i.padStart(3, '0')}${d ? '.' + d : ''}°`;
};
export type Compass = {from: 'N' | 'S'; deg: number; to: 'E' | 'W'};
/** N40°E → 40, S32°W → 212, S25°E → 155, N65°W → 295. */
export const compassToTrue = (c: Compass) => norm360(c.from === 'N' ? (c.to === 'E' ? c.deg : 360 - c.deg) : c.to === 'E' ? 180 - c.deg : 180 + c.deg);
/** A true bearing as a compass bearing: 212 → "S32°W" (0, 90, 180, 270 → "N", "E", "S", "W"). */
export const compassLabel = (b: number, digits = 0) => {
	const v = norm360(b);
	const card = [[0, 'N'], [90, 'E'], [180, 'S'], [270, 'W'], [360, 'N']] as const;
	for (const [d, n] of card) if (Math.abs(v - d) < 0.5 * 10 ** -digits) return n;
	const ns = v < 90 || v > 270 ? 'N' : 'S', ew = v < 180 ? 'E' : 'W';
	const deg = ns === 'N' ? (ew === 'E' ? v : 360 - v) : ew === 'E' ? 180 - v : v - 180;
	return `${ns}${fmtNum(deg, digits)}°${ew}`;
};
/** The bearing of the return journey: β ± 180°, kept in [0°, 360°). */
export const reverseBearing = (b: number) => norm360(b + 180);
/** Screen direction (y down) of a bearing. */
export const bearingDir = (b: number): [number, number] => [Math.sin(b * D2R), -Math.cos(b * D2R)];
/** Vertices of a journey from `start` (frame px): each leg {bearing, dist} at `unit` px per unit. */
export const journeyPoints = (start: readonly [number, number], legs: readonly {bearing: number; dist: number}[], unit: number) => {
	const pts: [number, number][] = [[start[0], start[1]]];
	for (const l of legs) {const [dx, dy] = bearingDir(l.bearing), p = pts[pts.length - 1]; pts.push([p[0] + dx * l.dist * unit, p[1] + dy * l.dist * unit]);}
	return pts;
};
/** Distance and true bearing from the start to the end of a journey (maths units). */
export const journeyResult = (legs: readonly {bearing: number; dist: number}[]) => {
	let e = 0, n = 0;
	for (const l of legs) {e += l.dist * Math.sin(l.bearing * D2R); n += l.dist * Math.cos(l.bearing * D2R);}
	return {dist: Math.hypot(e, n), bearing: norm360(Math.atan2(e, n) / D2R)};
};

// Arc between two bearings at (cx, cy), radius r, going the short or stated way (dir +1 clockwise).
const bArc = (cx: number, cy: number, r: number, b0: number, b1: number) => {
	const n = Math.max(8, Math.ceil(Math.abs(b1 - b0) / 3));
	let d = '';
	for (let i = 0; i <= n; i++) {const b = b0 + ((b1 - b0) * i) / n, [dx, dy] = bearingDir(b); d += `${i ? 'L' : 'M'}${(cx + dx * r).toFixed(1)},${(cy + dy * r).toFixed(1)} `;}
	return d;
};
const arrowHead = (cx: number, cy: number, r: number, b: number, dir: number, color: string, w = 5) => {
	const [px, py] = bearingDir(b), x = cx + px * r, y = cy + py * r, tx = -py * dir, ty = px * dir; // tangent, clockwise when dir > 0 (screen)
	return <path d={`M${x - tx * 16 - px * 8},${y - ty * 16 - py * 8} L${x},${y} L${x - tx * 16 + px * 8},${y - ty * 16 + py * 8}`} fill="none" stroke={color} strokeWidth={w} strokeLinejoin="round" strokeLinecap="round" />;
};
/** Dashed north line with an "N" at the top. */
const NorthLine: React.FC<{x: number; y: number; len: number; label?: string; opacity?: number; south?: boolean}> = ({x, y, len, label = 'N', opacity = 1, south = false}) => <g opacity={opacity}>
	<line x1={x} y1={y + (south ? len * 0.6 : 0)} x2={x} y2={y - len} stroke={INK} strokeWidth={3.5} strokeDasharray="12 8" />
	<path d={`M${x - 10},${y - len + 16} L${x},${y - len} L${x + 10},${y - len + 16}`} fill="none" stroke={INK} strokeWidth={3.5} strokeLinejoin="round" />
	<text x={x} y={y - len - 14} textAnchor="middle" {...haloText(34, INK)}>{label}</text>
</g>;

// =====================================================================================================
// BearingRose (t02b; t04, t05 and t06 badges)
// =====================================================================================================
export type BearingSweep = {
	/** Start bearing (0 = north; 180 = south) and the end bearing (keyed allowed); the direction follows the sign. */
	from?: number; to: Keyed; at: number; dur?: number; out?: number;
	/** Dim between these frames (the earlier arcs dim as a new one is taught). */
	dim?: {at: number; out?: number};
	/** 'true' writes "212°", 'compass' "S32°W", 'both' "S32°W = 212°"; a string is used as given. */
	label?: 'true' | 'compass' | 'both' | string; labelAt?: number;
	ray?: boolean; color?: RoleColours; radius?: number;
};
/**
 * A compass rose at (cx, cy) of radius R px: the north line (strong), E, S and W, ticks every 10°, and the
 * sweeps. Each sweep animates from `from` to `to` over `dur` frames (clockwise when to > from, anticlockwise
 * "turn back" when to < from), with a ray at its end, an arrowhead and its label once settled. `readout` shows the
 * live three-digit bearing of one sweep's tip in a card (52 px). `markers` write bearings at the cardinal points
 * ("090°", "000° = 360°"). `rings` ring the N, E, S or W ends. `reverse` sweeps the return bearing from a
 * journey's ray (+180°) with the dashed line back.
 */
export const BearingRose: React.FC<{
	cx: number; cy: number; R: number; at?: number; out?: number; ticks?: boolean; cardinals?: boolean;
	sweeps?: readonly BearingSweep[];
	readout?: {sweep: number; x: number; y: number; at?: number; compass?: boolean};
	markers?: readonly {bearing: number; text?: string; at: number; out?: number}[];
	rings?: readonly {end: 'N' | 'E' | 'S' | 'W'; at: number; out?: number}[];
	reverse?: {bearing: number; at: number; out?: number; dur?: number; label?: boolean};
}> = ({cx, cy, R, at = 0, out, ticks = true, cardinals = true, sweeps = [], readout, markers = [], rings = [], reverse}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const B = MATH_ROLES.a;
	const sweepNow = (s: BearingSweep) => {
		const from = s.from ?? 0, to = keyedAt(s.to, f);
		const u = typeof s.to === 'number' ? smooth((f - s.at) / (s.dur ?? Math.max(24, Math.abs(to - from) * 0.5))) : 1;
		return {from, to, cur: from + (to - from) * u, done: u >= 1};
	};
	const els: React.ReactNode[] = [];
	els.push(<g key="rose">
		<circle cx={cx} cy={cy} r={R} fill={CARD} stroke="rgba(60,45,20,0.18)" strokeWidth={3} />
		{ticks ? Array.from({length: 36}, (_, i) => {const [dx, dy] = bearingDir(i * 10), L = i % 9 === 0 ? 0 : i % 3 === 0 ? 18 : 10; return L ? <line key={i} x1={cx + dx * (R - L)} y1={cy + dy * (R - L)} x2={cx + dx * R} y2={cy + dy * R} stroke={INK_SOFT} strokeWidth={3} /> : null;}) : null}
		<line x1={cx} y1={cy + R} x2={cx} y2={cy - R} stroke={INK} strokeWidth={3} strokeDasharray="10 8" opacity={0.6} />
		<line x1={cx - R} y1={cy} x2={cx + R} y2={cy} stroke={INK} strokeWidth={3} strokeDasharray="10 8" opacity={0.6} />
		<line x1={cx} y1={cy} x2={cx} y2={cy - R} stroke={INK} strokeWidth={5} />
		<path d={`M${cx - 12},${cy - R + 20} L${cx},${cy - R} L${cx + 12},${cy - R + 20}`} fill="none" stroke={INK} strokeWidth={5} strokeLinejoin="round" />
		{cardinals ? ([['N', 0], ['E', 90], ['S', 180], ['W', 270]] as const).map(([n, b]) => {const [dx, dy] = bearingDir(b); return <text key={n} x={cx + dx * (R + 34)} y={cy + dy * (R + 34) + 14} textAnchor="middle" {...haloText(n === 'N' ? 44 : 38, INK)}>{n}</text>;}) : null}
		<circle cx={cx} cy={cy} r={8} fill={INK} />
	</g>);
	for (const rg of rings) {
		const ro = vis(f, rg.at, rg.out, 10), b = {N: 0, E: 90, S: 180, W: 270}[rg.end], [dx, dy] = bearingDir(b);
		if (ro > 0) els.push(<circle key={'rg' + rg.end + rg.at} cx={cx + dx * (R + 34)} cy={cy + dy * (R + 34)} r={34} fill="none" stroke={MATH_ROLES.k.stroke} strokeWidth={5} opacity={ro} />);
	}
	sweeps.forEach((s, i) => {
		const so = vis(f, s.at, s.out, 10);
		if (so <= 0.001) return;
		const dim = s.dim ? 1 - 0.65 * vis(f, s.dim.at, s.dim.out, 12) : 1;
		const {from, to, cur, done} = sweepNow(s), C = s.color ?? B, rr = s.radius ?? R * 0.42;
		const [dx, dy] = bearingDir(cur), dir = Math.sign(to - from) || 1;
		const lab = s.label === undefined || s.label === 'true' ? fmtBearing(to) : s.label === 'compass' ? compassLabel(to) : s.label === 'both' ? `${compassLabel(to)} = ${fmtBearing(to)}` : s.label;
		const lo = done ? prog(f, s.labelAt ?? s.at + (s.dur ?? 24), 10) : 0;
		els.push(<g key={'sw' + i} opacity={so * dim}>
			{s.ray !== false ? <line x1={cx} y1={cy} x2={cx + dx * R * 0.96} y2={cy + dy * R * 0.96} stroke={C.stroke} strokeWidth={6} strokeLinecap="round" /> : null}
			{Math.abs(cur - from) > 1 ? <><path d={bArc(cx, cy, rr, from, cur)} fill="none" stroke={C.stroke} strokeWidth={6} />{arrowHead(cx, cy, rr, cur, dir, C.stroke)}</> : null}
			{lo > 0 ? <text x={cx + dx * (R * 0.96 + 12) + (dx >= 0 ? 14 : -14)} y={cy + dy * (R * 0.96 + 12) + (dy > 0 ? 40 : -6)} textAnchor={dx >= 0 ? 'start' : 'end'} opacity={lo} {...haloText(38, C.ink)}>{lab}</text> : null}
		</g>);
	});
	if (reverse) {
		const ro = vis(f, reverse.at, reverse.out, 10);
		if (ro > 0) {
			const u = smooth((f - reverse.at) / (reverse.dur ?? 30)), b = reverse.bearing, rb = reverseBearing(b), [dx, dy] = bearingDir(b), [rx, ry] = bearingDir(b + 180 * u);
			els.push(<g key="rev" opacity={ro}>
				<line x1={cx} y1={cy} x2={cx + dx * R * 0.96} y2={cy + dy * R * 0.96} stroke={INK_SOFT} strokeWidth={5} strokeDasharray="12 8" />
				<line x1={cx} y1={cy} x2={cx + rx * R * 0.96} y2={cy + ry * R * 0.96} stroke={MATH_ROLES.gradient.stroke} strokeWidth={6} />
				<path d={bArc(cx, cy, R * 0.28, b, b + 180 * u)} fill="none" stroke={MATH_ROLES.gradient.stroke} strokeWidth={5} />
				{u >= 1 && reverse.label !== false ? <text x={cx + rx * (R + 20)} y={cy + ry * (R + 20) + 14} textAnchor={rx >= 0 ? 'start' : 'end'} {...haloText(38, MATH_ROLES.gradient.ink)}>{`${fmtBearing(b)} ${b < 180 ? '+' : '−'} 180° = ${fmtBearing(rb)}`}</text> : null}
			</g>);
		}
	}
	for (const mk of markers) {
		const mo = vis(f, mk.at, mk.out, 10), [dx, dy] = bearingDir(mk.bearing);
		if (mo > 0) els.push(<text key={'mk' + mk.bearing + mk.at} x={cx + dx * (R + 34) + (Math.abs(dx) > 0.5 ? dx * 70 : 66)} y={cy + dy * (R + 34) + (Math.abs(dy) > 0.5 ? 14 : -26)} textAnchor="middle" opacity={mo} {...haloText(34, B.ink)}>{mk.text ?? fmtBearing(mk.bearing)}</text>);
	}
	let card: React.ReactNode = null;
	if (readout && sweeps[readout.sweep]) {
		const s = sweeps[readout.sweep], {cur} = sweepNow(s), ro = vis(f, readout.at ?? s.at, s.out, 10);
		card = <div style={{position: 'absolute', left: readout.x, top: readout.y, opacity: ro, background: CARD, borderRadius: 18, boxShadow: CARD_SHADOW, border: `4px solid ${B.stroke}`, padding: '6px 26px', textAlign: 'center'}}>
			<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color: B.ink}}>bearing</div>
			<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 64, color: B.ink, lineHeight: 1.05, fontVariantNumeric: 'tabular-nums'}}>{fmtBearing(cur)}</div>
			{readout.compass ? <div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 34, color: B.ink}}>{compassLabel(cur)}</div> : null}
		</div>;
	}
	return <><FrameSvg style={{opacity: o}}>{els}</FrameSvg>{card}</>;
};

// =====================================================================================================
// BearingJourney (t02b scenes 4 and 5; t05 handoff; t06's yacht)
// =====================================================================================================
/**
 * Legs on a map from `start` (frame px), `unit` px per unit. Each leg draws on its cue with its length label;
 * every vertex in `norths` gets a dashed north line. `sweeps` are bearing arcs at a vertex (from north, or from
 * any bearing: the reverse bearing 220° at the turn), `between` fills the angle between two bearings at a vertex
 * (a right-angle mark when it is 90°), `home` draws the line from the start to the end with its length, and
 * `startAngle` marks the angle α at the start between the first leg and the line home. `colors` recolours legs
 * (t02b: the 9 km leg amber as opposite, 12 km violet as adjacent).
 */
export const BearingJourney: React.FC<{
	start: readonly [number, number]; unit: number; at?: number; out?: number;
	legs: readonly {bearing: number; dist: number; at: number; dur?: number; label?: string; color?: RoleColours | {at: number; color: RoleColours}}[];
	norths?: readonly {vertex: number; at: number; out?: number; label?: string}[];
	sweeps?: readonly {vertex: number; from?: number; to: number; at: number; dur?: number; out?: number; label?: string; color?: RoleColours; radius?: number; glow?: {at: number; out?: number}}[];
	between?: readonly {vertex: number; b1: number; b2: number; at: number; out?: number; label?: string}[];
	home?: {at: number; out?: number; label?: string; dashed?: boolean | {solidAt: number}};
	startAngle?: {at: number; out?: number; label?: string};
	vertexLabels?: readonly (string | undefined)[];
}> = ({start, unit, at = 0, out, legs, norths = [], sweeps = [], between = [], home, startAngle, vertexLabels = []}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const pts = journeyPoints(start, legs, unit), B = MATH_ROLES.a, nl = Math.min(150, unit * 3.2);
	const els: React.ReactNode[] = [];
	norths.forEach((n, i) => {const no = vis(f, n.at, n.out, 12); if (no > 0) els.push(<NorthLine key={'n' + i} x={pts[n.vertex][0]} y={pts[n.vertex][1]} len={nl} label={n.label} opacity={no} south />);});
	between.forEach((bt, i) => {
		const bo = vis(f, bt.at, bt.out, 12);
		if (bo <= 0) return;
		const [x, y] = pts[bt.vertex], r = 64, lo = Math.min(bt.b1, bt.b2), hi = Math.max(bt.b1, bt.b2);
		const right = Math.abs(hi - lo - 90) < 0.01;
		const [d1x, d1y] = bearingDir(lo), [d2x, d2y] = bearingDir(hi), mid = bearingDir((lo + hi) / 2);
		els.push(<g key={'bt' + i} opacity={bo}>
			{right ? <path d={`M${x + d1x * 34},${y + d1y * 34} L${x + (d1x + d2x) * 34},${y + (d1y + d2y) * 34} L${x + d2x * 34},${y + d2y * 34}`} fill="none" stroke={INK} strokeWidth={4} />
				: <path d={`M${x},${y} ${bArc(x, y, r, lo, hi).replace(/^M/, 'L')} Z`} fill={B.soft} stroke={B.stroke} strokeWidth={4} />}
			{bt.label ? <text x={x + mid[0] * (r + 50)} y={y + mid[1] * (r + 50) + 12} textAnchor="middle" {...haloText(36, B.ink)}>{bt.label}</text> : null}
		</g>);
	});
	legs.forEach((l, i) => {
		const lo = vis(f, l.at, out, 8);
		if (lo <= 0) return;
		const u = smooth((f - l.at) / (l.dur ?? 30)), [x0, y0] = pts[i], [x1, y1] = pts[i + 1];
		const C = l.color && 'at' in l.color ? (f >= l.color.at ? l.color.color : null) : (l.color as RoleColours | undefined) ?? null;
		const ex = x0 + (x1 - x0) * u, ey = y0 + (y1 - y0) * u, nx = -(y1 - y0), ny = x1 - x0, L = Math.hypot(nx, ny) || 1;
		const side = (nx / L) * 1 + (ny / L) * 0 >= 0 ? 1 : -1;
		els.push(<g key={'l' + i} opacity={lo}>
			<line x1={x0} y1={y0} x2={ex} y2={ey} stroke={C ? C.stroke : INK} strokeWidth={7} strokeLinecap="round" />
			{u >= 1 && l.label ? <text x={(x0 + x1) / 2 + (nx / L) * 40 * side} y={(y0 + y1) / 2 + (ny / L) * 40 * side + 12} textAnchor="middle" {...haloText(38, C ? C.ink : INK)}>{l.label}</text> : null}
		</g>);
	});
	sweeps.forEach((s, i) => {
		const so = vis(f, s.at, s.out, 10);
		if (so <= 0) return;
		const [x, y] = pts[s.vertex], from = s.from ?? 0, u = smooth((f - s.at) / (s.dur ?? 30)), cur = from + (s.to - from) * u, C = s.color ?? B, r = s.radius ?? 56;
		const g = s.glow ? vis(f, s.glow.at, s.glow.out, 10) : 0, [dx, dy] = bearingDir(cur), mid = bearingDir((from + cur) / 2);
		els.push(<g key={'s' + i} opacity={so}>
			{g > 0 ? <path d={bArc(x, y, r, from, cur)} fill="none" stroke={C.soft} strokeWidth={22} opacity={g} /> : null}
			<line x1={x} y1={y} x2={x + dx * (r + 30)} y2={y + dy * (r + 30)} stroke={C.stroke} strokeWidth={3} strokeDasharray="6 6" />
			<path d={bArc(x, y, r, from, cur)} fill="none" stroke={C.stroke} strokeWidth={5} />
			{arrowHead(x, y, r, cur, Math.sign(s.to - from) || 1, C.stroke)}
			{u >= 1 ? <text x={x + mid[0] * (r + 42)} y={y + mid[1] * (r + 42) + 12} textAnchor="middle" {...haloText(34, C.ink)}>{s.label ?? fmtBearing(s.to)}</text> : null}
		</g>);
	});
	if (home) {
		const ho = vis(f, home.at, home.out, 12);
		if (ho > 0) {
			const [x0, y0] = pts[0], [x1, y1] = pts[pts.length - 1], u = smooth((f - home.at) / 30);
			const dashed = typeof home.dashed === 'object' ? f < home.dashed.solidAt : !!home.dashed;
			els.push(<g key="home" opacity={ho}>
				<line x1={x0} y1={y0} x2={x0 + (x1 - x0) * u} y2={y0 + (y1 - y0) * u} stroke={INK} strokeWidth={6} strokeDasharray={dashed ? '14 10' : undefined} />
				{u >= 1 && home.label ? <text x={(x0 + x1) / 2 - 30} y={(y0 + y1) / 2 + 40} textAnchor="end" {...haloText(38, INK)}>{home.label}</text> : null}
			</g>);
		}
	}
	if (startAngle) {
		const so = vis(f, startAngle.at, startAngle.out, 12);
		if (so > 0) {
			const res = journeyResult(legs), b1 = legs[0].bearing, b2 = res.bearing, [x, y] = pts[0], lo = Math.min(b1, b2), hi = Math.max(b1, b2), mid = bearingDir((lo + hi) / 2);
			els.push(<g key="sa" opacity={so}><path d={`M${x},${y} ${bArc(x, y, 80, lo, hi).replace(/^M/, 'L')} Z`} fill={B.soft} stroke={B.stroke} strokeWidth={4} />
				<text x={x + mid[0] * 124} y={y + mid[1] * 124 + 12} textAnchor="middle" {...haloText(36, B.ink)}>{startAngle.label ?? 'α'}</text></g>);
		}
	}
	pts.forEach((p, i) => {
		const lab = vertexLabels[i];
		if (!lab || (i > 0 && f < legs[i - 1].at + (legs[i - 1].dur ?? 30))) return;
		els.push(<g key={'v' + i}><circle cx={p[0]} cy={p[1]} r={9} fill={INK} /><text x={p[0] - 20} y={p[1] + 40} textAnchor="end" {...haloText(36, INK)}>{lab}</text></g>);
	});
	return <FrameSvg style={{opacity: o}}>{els}</FrameSvg>;
};

// =====================================================================================================
// ElevationView (t02a)
// =====================================================================================================
/** The angle of elevation from a horizontal distance d to a height h (degrees). */
export const elevationAngle = (h: number, d: number) => Math.atan2(h, d) / D2R;
/**
 * A coded HSC-style side view. (x, y) is the frame position of the cliff's foot, `unit` px per unit; the cliff
 * (height h, amber) rises there and the object sits d (keyed: a drift) along the water to the right. Two parallel
 * horizontals (dashed grey: the clifftop and the water), one sight line (ink) from the top to the object, a
 * right-angle mark at the foot, the water length (violet). `elevation` draws the angle at the object, `depression`
 * the angle at the top below the top horizontal; `z` traces a hand "Z" between them; both carry the same computed
 * angle. `wrong` draws the classic slip in red: the angle between the cliff face and the sight line.
 * `readout` shows live "distance" (violet) and "angle" (blue).
 */
export const ElevationView: React.FC<{
	x: number; y: number; unit: number; h: number; d: Keyed; at?: number; out?: number;
	labels?: {h?: string; d?: string; object?: string; angle?: (deg: number) => string};
	elevation?: {at: number; out?: number}; depression?: {at: number; out?: number}; z?: {at: number; out?: number}; wrong?: {at: number; out?: number; label?: string};
	readout?: {x: number; y: number; at?: number}; topLine?: boolean; waterReach?: number;
}> = ({x, y, unit, h, d: dK, at = 0, out, labels = {}, elevation, depression, z, wrong, readout, topLine = true, waterReach}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const d = keyedAt(dK, f), ang = elevationAngle(h, d), fmtA = labels.angle ?? ((v: number) => fmtDeg(v, 1));
	const top: [number, number] = [x, y - h * unit], obj: [number, number] = [x + d * unit, y];
	const reach = (waterReach ?? d * 1.25) * unit, Am = MATH_ROLES.k, V = MATH_ROLES.gradient, B = MATH_ROLES.a;
	const arc = (cx: number, cy: number, r: number, a0: number, a1: number) => {let p = ''; for (let i = 0; i <= 20; i++) {const t = (a0 + ((a1 - a0) * i) / 20) * D2R; p += `${i ? 'L' : 'M'}${(cx + r * Math.cos(t)).toFixed(1)},${(cy - r * Math.sin(t)).toFixed(1)} `;} return p;};
	const eo = elevation ? vis(f, elevation.at, elevation.out, 12) : 0, dO = depression ? vis(f, depression.at, depression.out, 12) : 0, zo = z ? prog(f, z.at, 20) * (z.out === undefined ? 1 : 1 - prog(f, z.out, 10)) : 0, wo = wrong ? vis(f, wrong.at, wrong.out, 12) : 0;
	const zPath = `M${top[0] + 120},${top[1]} L${top[0]},${top[1]} L${obj[0]},${obj[1]} L${obj[0] - 120},${obj[1]}`;
	return <>
		<FrameSvg style={{opacity: o}}>
			<line x1={x - 40} x2={x + reach} y1={y} y2={y} stroke={INK_SOFT} strokeWidth={4} strokeDasharray="14 10" />
			{topLine ? <line x1={x - 40} x2={x + reach} y1={top[1]} y2={top[1]} stroke={INK_SOFT} strokeWidth={4} strokeDasharray="14 10" /> : null}
			<line x1={x} y1={y} x2={top[0]} y2={top[1]} stroke={Am.stroke} strokeWidth={8} strokeLinecap="round" />
			<path d={`M${x + 22},${y} V${y - 22} H${x}`} fill="none" stroke={INK} strokeWidth={3} />
			<line x1={x} y1={y + 6} x2={obj[0]} y2={y + 6} stroke={V.stroke} strokeWidth={6} opacity={0.8} />
			<line x1={top[0]} y1={top[1]} x2={obj[0]} y2={obj[1]} stroke={INK} strokeWidth={5} />
			<circle cx={obj[0]} cy={obj[1]} r={11} fill={INK} stroke={CARD} strokeWidth={4} />
			{labels.h ? <text x={x - 20} y={(y + top[1]) / 2 + 12} textAnchor="end" {...haloText(40, Am.ink)}>{labels.h}</text> : null}
			{labels.d ? <text x={(x + obj[0]) / 2} y={y + 52} textAnchor="middle" {...haloText(40, V.ink)}>{labels.d}</text> : null}
			{labels.object ? <text x={obj[0]} y={obj[1] + 52} textAnchor="middle" {...haloText(34, INK)}>{labels.object}</text> : null}
			{eo > 0 ? <g opacity={eo}><path d={arc(obj[0], obj[1], 90, 180 - ang, 180)} fill="none" stroke={B.stroke} strokeWidth={6} />
				<text x={obj[0] - 130 * Math.cos((ang / 2) * D2R)} y={obj[1] - 130 * Math.sin((ang / 2) * D2R) + 12} textAnchor="middle" {...haloText(36, B.ink)}>{fmtA(ang)}</text></g> : null}
			{dO > 0 ? <g opacity={dO}><path d={arc(top[0], top[1], 90, -ang, 0)} fill="none" stroke={B.stroke} strokeWidth={6} />
				<text x={top[0] + 140 * Math.cos((ang / 2) * D2R)} y={top[1] + 140 * Math.sin((ang / 2) * D2R) + 12} textAnchor="middle" {...haloText(36, B.ink)}>{fmtA(ang)}</text></g> : null}
			{zo > 0 ? <path d={zPath} fill="none" stroke={MATH_ROLES.gradient.stroke} strokeWidth={6} strokeLinejoin="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - zo} opacity={0.7} /> : null}
			{zo > 0.9 ? <text x={top[0] + 150} y={top[1] - 18} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, fill: MATH_ROLES.gradient.ink} as React.CSSProperties} stroke={CARD} strokeWidth={7} paintOrder="stroke">Z: alternate angles</text> : null}
			{wo > 0 ? <g opacity={wo}><path d={arc(top[0], top[1], 70, -90, -ang)} fill="none" stroke={MATH_MISTAKE} strokeWidth={6} />
				<text x={top[0] + 100 * Math.cos(((-90 - ang) / 2) * D2R)} y={top[1] - 100 * Math.sin(((-90 - ang) / 2) * D2R) + 12} textAnchor="middle" {...haloText(34, MATH_MISTAKE)}>{wrong?.label ?? fmtA(90 - ang)}</text></g> : null}
		</FrameSvg>
		{readout ? <div style={{position: 'absolute', left: readout.x, top: readout.y, opacity: vis(f, readout.at ?? at, out, 12), background: CARD, borderRadius: 18, boxShadow: CARD_SHADOW, padding: '8px 26px', display: 'grid', gridTemplateColumns: 'auto auto', columnGap: 24, alignItems: 'baseline'}}>
			<span style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color: V.ink}}>distance</span><span style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, color: V.ink, fontVariantNumeric: 'tabular-nums', textAlign: 'right'}}>{`${fmtNum(d, 0)} m`}</span>
			<span style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color: B.ink}}>angle of elevation</span><span style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, color: B.ink, fontVariantNumeric: 'tabular-nums', textAlign: 'right'}}>{fmtDeg(ang, 1)}</span>
		</div> : null}
	</>;
};

// =====================================================================================================
// Module-load self checks on the designs' numbers
// =====================================================================================================
{
	const fail = (what: string) => {throw new Error(`a11-trig-bearings self check: ${what}`);};
	// t02b: three digits always; S25°E = 155°, S32°W = 212°, N65°W = 295°, N40°E = 040°; S48°E = 132°, return 312°.
	if (fmtBearing(32) !== '032°' || fmtBearing(0) !== '000°' || fmtBearing(359.7) !== '000°') fail('three digits');
	if (compassToTrue({from: 'S', deg: 25, to: 'E'}) !== 155 || compassToTrue({from: 'S', deg: 32, to: 'W'}) !== 212 || compassToTrue({from: 'N', deg: 65, to: 'W'}) !== 295 || compassToTrue({from: 'N', deg: 40, to: 'E'}) !== 40) fail('compass to true');
	if (compassLabel(212) !== 'S32°W' || compassLabel(155) !== 'S25°E' || compassLabel(295) !== 'N65°W' || compassLabel(40) !== 'N40°E') fail('compass labels');
	{const b = compassToTrue({from: 'S', deg: 48, to: 'E'}); if (b !== 132 || fmtBearing(reverseBearing(b)) !== '312°') fail('S48°E return');}
	// t02b journey: 12 km on 040°, then 9 km on 130°: reverse 220°, a right angle, 15 km on about 077°.
	{const r = journeyResult([{bearing: 40, dist: 12}, {bearing: 130, dist: 9}]); if (reverseBearing(40) !== 220 || 220 - 130 !== 90 || Math.abs(r.dist - 15) > 1e-9 || fmtBearing(r.bearing) !== '077°') fail('t02b journey');}
	// t06: 12 km on 040°, then 9 km on 100°: 120° at the turn, d = √333 ≈ 18.2 km on about 065°.
	{const r = journeyResult([{bearing: 40, dist: 12}, {bearing: 100, dist: 9}]); if (Math.abs(r.dist - Math.sqrt(333)) > 1e-9 || fmtNum(r.dist, 1) !== '18.2' || fmtBearing(r.bearing) !== '065°') fail('t06 journey');}
	// t02a: h = 40 tan 52° = 51.197…; the angle at 40 m is 52.0° and at 65 m is 38.2°; d = 18 ÷ tan 27° ≈ 35.3 m.
	{const h = 40 * Math.tan(52 * D2R); if ((Math.floor(h * 1000) / 1000).toFixed(3) !== '51.197' || fmtNum(h, 1) !== '51.2' || fmtDeg(elevationAngle(h, 40), 1) !== '52.0°' || fmtDeg(elevationAngle(h, 65), 1) !== '38.2°') fail('t02a cliff');
		if (fmtNum(18 / Math.tan(27 * D2R), 1) !== '35.3' || Math.round(30 / Math.tan(12 * D2R)) !== 141) fail('t02a depression');}
}
