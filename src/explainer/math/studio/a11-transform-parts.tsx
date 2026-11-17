// Year 11 Advanced kit, wave 3 (brief 245, maths-a11-kit-needs-g-s.md items 1 to 6): graph transformation parts for
// g01 to g06. TransformationTracer (a parent ghost and its image moving step by step, with carried points, carried
// vertical and horizontal asymptotes, mirror creases with equal-distance ticks and a left-behind asymptote slip),
// PointImageTable (g02's images of named points, row by row), StretchFromAxis (g03: the fixed axis bold, arrows
// proportional to distance from it), TransformQueue with QueueVerdict (g04: step cards applied one at a time, and
// "order matters" or "same curve" computed from the two final curves), FeatureLedger with PenLiftMark (g05: parent
// and image features, every image entry computed from the moves) and CircleTracer with its CircleFromCentre mode
// (w24's running point, g03's enlargement and oval, g06's slide, spokes and domain and range bars). TwoSquareTiles
// composes two wave 1 CompleteSquareTiles for g06's two groups with a balance line.
// Colour roles (root ruling 31, Year 12 t01): horizontal moves blue (stretch or flip, role a) and teal (slide, b);
// vertical moves amber (stretch or flip, k) and violet (slide, gradient). The image curve is ink, the parent a
// dashed grey ghost. Every move is a point map applied in order, so the order of moves is never ambiguous.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, PAPER_DEEP, prog} from '../../kit';
import {CARD, CARD_SHADOW, niceNum, smooth, vis} from './primitives';
import {MATH_ANSWER, MATH_MISTAKE, MATH_ROLES, RoleKey, roleInk, roleStroke} from './roles';
import {PlotMap, PlotTick, PlotWindow, StudioPlot, TXT} from './plot-core';
import {AxisSet, AxisShadow} from './a11-graph-parts';
import {CompleteSquareTiles, cornerText} from './a11-algebra-parts';
import {Keyed, keyedAt} from './a11-trig-circle';

const MINUS = '−';
const lerp = (a: number, b: number, u: number) => a + (b - a) * u;
const clamp01 = (u: number) => Math.max(0, Math.min(1, u));
const haloText = (size: number, color: string, weight = 800): React.SVGProps<SVGTextElement> => ({style: TXT(size, color, weight), stroke: CARD, strokeWidth: 8, paintOrder: 'stroke'} as React.SVGProps<SVGTextElement>);
const GHOST = '#9a9184';
const ASYM = '#7d756a';

// =====================================================================================================
// Moves: point maps, applied in order
// =====================================================================================================
export type MoveAxis = 'x' | 'y';
/**
 * One transformation as a point map. `axis` names the coordinate that changes: a slide on 'x' moves sideways; a
 * stretch on 'x' is a horizontal dilation from the y-axis; a reflect on 'x' negates x (a flip in the y-axis).
 */
export type Move =
	| {kind: 'slide'; axis: MoveAxis; by: number}
	| {kind: 'stretch'; axis: MoveAxis; factor: number}
	| {kind: 'reflect'; axis: MoveAxis};
/** A move with its cue (and optional duration and role override). */
export type TimedMove = Move & {at: number; dur?: number; role?: RoleKey};

/** Ruling 31 colours: x stretch or flip blue, x slide teal, y stretch or flip amber, y slide violet. */
export const moveRole = (mv: Move): RoleKey => (mv.axis === 'x' ? (mv.kind === 'slide' ? 'b' : 'a') : mv.kind === 'slide' ? 'gradient' : 'k');
/** Affine coefficients of one move on its own axis: v → A v + B. */
const moveAffine = (mv: Move): [number, number] => (mv.kind === 'slide' ? [1, mv.by] : mv.kind === 'stretch' ? [mv.factor, 0] : [-1, 0]);
/** The move applied a fraction u of the way (a slide moves u of its distance; a stretch or flip scales through). */
const moveAt = (mv: Move, v: number, u: number) => {
	const [A, B] = moveAffine(mv);
	return v * lerp(1, A, u) + B * u;
};
/** Net affine map of a list of moves on one axis (with optional progress per move). */
export const axisMap = (moves: readonly Move[], axis: MoveAxis, us?: readonly number[]): [number, number] => {
	let A = 1, B = 0;
	moves.forEach((mv, i) => {
		if (mv.axis !== axis) return;
		const u = us ? us[i] : 1;
		const a = lerp(1, moveAffine(mv)[0], u), b = moveAffine(mv)[1] * u;
		A = a * A; B = a * B + b;
	});
	return [A, B];
};
/** Image of a point after every move. */
export const applyMoves = (moves: readonly Move[], x: number, y: number): [number, number] => {
	const [ax, bx] = axisMap(moves, 'x'), [ay, by] = axisMap(moves, 'y');
	return [ax * x + bx, ay * y + by];
};
/** The image curve as a function of X (throws if a horizontal factor is 0). */
export const imageFn = (parent: (x: number) => number, moves: readonly Move[]) => {
	const [ax, bx] = axisMap(moves, 'x'), [ay, by] = axisMap(moves, 'y');
	if (Math.abs(ax) < 1e-12) throw new RangeError('imageFn: horizontal factor 0');
	return (X: number) => ay * parent((X - bx) / ax) + by;
};
/** Where a vertical asymptote x = v ('x') or a horizontal one y = v ('y') lands: each moves only on its own axis. */
export const mapLine = (moves: readonly Move[], line: MoveAxis, v: number) => {
	const [A, B] = axisMap(moves, line);
	return A * v + B;
};
/** A set on one axis (domain on 'x', range on 'y') carried through the moves; ends swap when the factor is negative. */
export const mapAxisSet = (moves: readonly Move[], axis: MoveAxis, s: AxisSet): AxisSet => {
	const [A, B] = axisMap(moves, axis);
	const m = (v: number) => (Number.isFinite(v) ? A * v + B : v * Math.sign(A));
	const gaps = (s.gaps ?? []).map(m).sort((p, q) => p - q);
	if (A >= 0) return {from: m(s.from), to: m(s.to), closedFrom: s.closedFrom, closedTo: s.closedTo, gaps};
	return {from: m(s.to), to: m(s.from), closedFrom: s.closedTo, closedTo: s.closedFrom, gaps};
};
/** Plain words for a move: "right 3", "up 2", "× 2 from the y-axis", "flip in the x-axis". */
export const moveText = (mv: Move) => {
	if (mv.kind === 'slide') return mv.axis === 'x' ? `${mv.by >= 0 ? 'right' : 'left'} ${niceNum(Math.abs(mv.by))}` : `${mv.by >= 0 ? 'up' : 'down'} ${niceNum(Math.abs(mv.by))}`;
	if (mv.kind === 'stretch') return `× ${niceNum(mv.factor)} from the ${mv.axis === 'x' ? 'y' : 'x'}-axis`;
	return `flip in the ${mv.axis === 'x' ? 'y' : 'x'}-axis`;
};
/** "(3, 4)" with true minus signs and nice fractions. */
export const ptText = (x: number, y: number) => `(${niceNum(x)}, ${niceNum(y)})`;
/** A one-axis set in words: "all real x", "x ≠ 2", "x > 1", "y ≤ 4", "−2 ≤ x ≤ 6". */
export const axisSetText = (s: AxisSet, sym: string) => {
	const lo = Number.isFinite(s.from), hi = Number.isFinite(s.to), gaps = s.gaps ?? [];
	const g = gaps.length ? gaps.map(v => `${sym} ≠ ${niceNum(v)}`).join(', ') : '';
	let core: string;
	if (!lo && !hi) core = gaps.length ? '' : `all real ${sym}`;
	else if (lo && hi) core = `${niceNum(s.from)} ${s.closedFrom ?? true ? '≤' : '<'} ${sym} ${s.closedTo ?? true ? '≤' : '<'} ${niceNum(s.to)}`;
	else if (lo) core = `${sym} ${s.closedFrom ?? true ? '≥' : '>'} ${niceNum(s.from)}`;
	else core = `${sym} ${s.closedTo ?? true ? '≤' : '<'} ${niceNum(s.to)}`;
	return [core, g].filter(Boolean).join(', ');
};

/** Progress (0..1) of each timed move at frame f. */
const progresses = (moves: readonly TimedMove[], f: number) => moves.map(mv => smooth(clamp01((f - mv.at) / (mv.dur ?? 36))));

/** Sampled path of the parametric image (u, parent(u)) through live x and y maps; pen lifts at breaks and NaN. */
const imagePath = (m: PlotMap, parent: (x: number) => number, xm: [number, number], ym: [number, number], uDomain: readonly [number, number] | undefined, breaks: readonly number[], n = 420): string => {
	const [ax, bx] = xm, [ay, by] = ym;
	let a: number, b: number;
	if (Math.abs(ax) > 1e-3) {
		const p = (m.win.x[0] - bx) / ax, q = (m.win.x[1] - bx) / ax, pad = Math.abs(q - p) * 0.08;
		a = Math.min(p, q) - pad; b = Math.max(p, q) + pad;
	} else {a = m.win.x[0]; b = m.win.x[1];}
	if (uDomain) {a = Math.max(a, uDomain[0]); b = Math.min(b, uDomain[1]);}
	if (!(b > a)) return '';
	const ext = (m.win.y[1] - m.win.y[0]) * 3;
	const step = (b - a) / n;
	let d = '', pen = false;
	const brk = [...breaks].filter(c => c > a && c < b).sort((p, q) => p - q);
	const xs: number[] = [];
	for (let i = 0; i <= n; i++) xs.push(a + step * i);
	// Exact samples beside each break so a branch reaches the box edge.
	brk.forEach(c => {xs.push(c - step * 0.02, c + step * 0.02);});
	if (uDomain) xs.push(uDomain[0], uDomain[1]);
	xs.sort((p, q) => p - q);
	let prevU = -Infinity;
	for (const u of xs) {
		if (u < a - 1e-12 || u > b + 1e-12) continue;
		if (brk.some(c => (prevU < c && u > c) || Math.abs(u - c) < 1e-12)) pen = false;
		prevU = u;
		const v = parent(u);
		if (!Number.isFinite(v)) {pen = false; continue;}
		const X = ax * u + bx, Y = Math.max(m.win.y[0] - ext, Math.min(m.win.y[1] + ext, ay * v + by));
		const [px, py] = m.p(X, Y);
		d += `${pen ? 'L' : 'M'}${px.toFixed(2)},${py.toFixed(2)} `;
		pen = true;
	}
	return d;
};

const arrowHead = (x1: number, y1: number, x2: number, y2: number, color: string, w = 5, hl = 18) => {
	const ang = Math.atan2(y2 - y1, x2 - x1);
	if (!Number.isFinite(ang) || Math.hypot(x2 - x1, y2 - y1) < 6) return null;
	const h1 = [x2 - hl * Math.cos(ang - 0.45), y2 - hl * Math.sin(ang - 0.45)], h2 = [x2 - hl * Math.cos(ang + 0.45), y2 - hl * Math.sin(ang + 0.45)];
	return <path d={`M${h1[0]},${h1[1]} L${x2},${y2} L${h2[0]},${h2[1]}`} fill="none" stroke={color} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" />;
};

// =====================================================================================================
// TransformationTracer (g01 to g05; also Year 12 t01's moving asymptotes)
// =====================================================================================================
export type TracerPoint = {
	x: number; y: number; at?: number; out?: number;
	/** Name written beside the point ("A", "vertex"). */
	label?: string;
	/** Live coordinates beside the point; exact once each move lands. */
	coords?: boolean;
	ring?: {at: number; out?: number; role?: RoleKey};
	/** Dotted flight path per move in the move's colour (default true). */
	trails?: boolean;
	/** Keep a grey dot at the starting position (default true). */
	ghost?: boolean;
	role?: RoleKey;
};
export type TracerAsymptote = {
	line: MoveAxis; value: number;
	/** "x = 0 → x = 2" written beside the line once its last move lands. */
	label?: boolean | {at: number};
	/** g01 scene 5's slip: a red dashed line left at the old place, crossed at slip.at. */
	slip?: {at: number; out?: number};
};
/**
 * The parent as a dashed grey ghost and its image moving one move at a time (each a point map, applied in order).
 * Draw inside a StudioPlot render prop (pass its PlotMap), as AxisShadow does. Points ride along, leaving dotted
 * flight paths in each move's colour (ruling 31); a reflection draws its mirror as a dashed crease in the move's
 * colour with an equal-distance tick on each half of every flight. Asymptotes are whole lines: a vertical one moves
 * only with horizontal moves, a horizontal one only with vertical moves. `uDomain` limits the parent (d = t² for
 * 0 ≤ t ≤ 4); `breaks` lifts the pen at the parent's excluded values. `requireEqualUnits` throws on unequal units.
 */
export const TransformationTracer: React.FC<{
	m: PlotMap; parent: (x: number) => number; moves: readonly TimedMove[];
	uDomain?: readonly [number, number]; breaks?: readonly number[];
	at?: number; out?: number; ghost?: boolean; ghostAt?: number; curve?: boolean; curveColor?: string; curveWidth?: number; dashed?: boolean;
	points?: readonly TracerPoint[]; asymptotes?: readonly TracerAsymptote[];
	mirrors?: boolean; trailsOut?: number;
	imageLabel?: {text: string; x: number; y: number; at: number; out?: number; role?: RoleKey; anchor?: 'start' | 'middle' | 'end'; size?: number};
	ghostLabel?: {text: string; x: number; y: number; anchor?: 'start' | 'middle' | 'end'; size?: number};
	requireEqualUnits?: boolean;
}> = ({m, parent, moves, uDomain, breaks = [], at = 0, out, ghost = true, ghostAt, curve = true, curveColor = INK, curveWidth = 6, dashed = false, points = [], asymptotes = [], mirrors = true, trailsOut, imageLabel, ghostLabel, requireEqualUnits = false}) => {
	const f = useCurrentFrame();
	if (requireEqualUnits && Math.abs(m.sx - m.sy) / m.sx > 0.01) throw new Error(`TransformationTracer: unequal units (${m.sx.toFixed(2)} and ${m.sy.toFixed(2)} px per unit)`);
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const us = progresses(moves, f);
	const xm = axisMap(moves, 'x', us), ym = axisMap(moves, 'y', us);
	const go = ghostAt === undefined ? 1 : prog(f, ghostAt, 12);
	const to = trailsOut === undefined ? 1 : 1 - prog(f, trailsOut, 12);
	const b = m.box;
	// Mirrors: shown while a reflection runs and for 40 frames after it lands.
	const mirrorEls = mirrors ? moves.map((mv, i) => {
		if (mv.kind !== 'reflect') return null;
		const mo = vis(f, mv.at - 6, mv.at + (mv.dur ?? 36) + 40, 10);
		if (mo <= 0.001) return null;
		const R = MATH_ROLES[mv.role ?? moveRole(mv)];
		const [ox, oy] = m.p(0, 0);
		const glow = 0.5 + 0.5 * Math.sin(clamp01((f - mv.at) / (mv.dur ?? 36)) * Math.PI);
		return mv.axis === 'x'
			? <g key={'mi' + i} opacity={mo}><line x1={ox} x2={ox} y1={b.top} y2={b.top + b.height} stroke={R.soft} strokeWidth={22 * glow} /><line x1={ox} x2={ox} y1={b.top} y2={b.top + b.height} stroke={R.stroke} strokeWidth={5} strokeDasharray="16 10" /></g>
			: <g key={'mi' + i} opacity={mo}><line y1={oy} y2={oy} x1={b.left} x2={b.left + b.width} stroke={R.soft} strokeWidth={22 * glow} /><line y1={oy} y2={oy} x1={b.left} x2={b.left + b.width} stroke={R.stroke} strokeWidth={5} strokeDasharray="16 10" /></g>;
	}) : null;
	// Asymptotes: ghost at the start, live line, arrow from the start, label and slip.
	const asymEls = asymptotes.map((as, i) => {
		const v0 = as.value;
		const cur = as.line === 'x' ? xm[0] * v0 + xm[1] : ym[0] * v0 + ym[1];
		const fin = mapLine(moves, as.line, v0);
		const lineAt = (v: number, color: string, w: number, dash: string, op: number, key: string) => {
			if (as.line === 'x') {const [px] = m.p(v, 0); return <line key={key} x1={px} x2={px} y1={b.top} y2={b.top + b.height} stroke={color} strokeWidth={w} strokeDasharray={dash} opacity={op} />;}
			const [, py] = m.p(0, v); return <line key={key} y1={py} y2={py} x1={b.left} x2={b.left + b.width} stroke={color} strokeWidth={w} strokeDasharray={dash} opacity={op} />;
		};
		// The arrow uses the colour of the last move on this line's axis that has started.
		const mvIdx = moves.map((mv, k) => (mv.axis === as.line && us[k] > 0 ? k : -1)).filter(k => k >= 0);
		const aRole = mvIdx.length ? moves[mvIdx[mvIdx.length - 1]].role ?? moveRole(moves[mvIdx[mvIdx.length - 1]]) : 'height';
		const moved = Math.abs(cur - v0) > 1e-6;
		const arrowPos = as.line === 'x' ? (() => {const yv = lerp(m.win.y[0], m.win.y[1], 0.7 - i * 0.08); const [x1, y1] = m.p(v0, yv), [x2] = m.p(cur, yv); return [x1, y1, x2, y1];})() : (() => {const xv = lerp(m.win.x[0], m.win.x[1], 0.9 - i * 0.06); const [x1, y1] = m.p(xv, v0), [, y2] = m.p(xv, cur); return [x1, y1, x1, y2];})();
		const lastAt = Math.max(at, ...moves.filter(mv => mv.axis === as.line).map(mv => mv.at + (mv.dur ?? 36)));
		const lab = as.label ? prog(f, typeof as.label === 'object' ? as.label.at : lastAt, 12) : 0;
		const sl = as.slip ? vis(f, as.slip.at, as.slip.out, 12) : 0;
		const [lx, ly] = as.line === 'x' ? m.p(fin, m.win.y[1]) : m.p(m.win.x[0], fin);
		const labelText = `${as.line} = ${niceNum(v0)} → ${as.line} = ${niceNum(fin)}`;
		return <g key={'as' + i}>
			{ghost && moved ? lineAt(v0, ASYM, 3, '10 10', 0.35 * go, 'g') : null}
			{lineAt(cur, ASYM, 4, '14 10', 0.95, 'c')}
			{moved ? <g opacity={0.95 * to}>
				<line x1={arrowPos[0]} y1={arrowPos[1]} x2={arrowPos[2]} y2={arrowPos[3]} stroke={roleStroke(aRole)} strokeWidth={6} strokeLinecap="round" />
				{arrowHead(arrowPos[0], arrowPos[1], arrowPos[2], arrowPos[3], roleStroke(aRole), 6)}
			</g> : null}
			{lab > 0 ? <text x={as.line === 'x' ? lx + 14 : lx + 14} y={as.line === 'x' ? ly + 44 : ly - 14} opacity={lab} {...haloText(34, roleInk(aRole === 'height' ? undefined : aRole))}>{labelText}</text> : null}
			{sl > 0 ? <g opacity={sl}>
				{lineAt(v0, MATH_MISTAKE, 4, '12 10', 1, 's')}
				{(() => {const [cx, cy] = as.line === 'x' ? m.p(v0, lerp(m.win.y[0], m.win.y[1], 0.3)) : m.p(lerp(m.win.x[0], m.win.x[1], 0.3), v0); const s = 22 * prog(f, as.slip!.at + 8, 10); return <path d={`M${cx - s},${cy - s} L${cx + s},${cy + s} M${cx + s},${cy - s} L${cx - s},${cy + s}`} stroke={MATH_MISTAKE} strokeWidth={7} strokeLinecap="round" />;})()}
			</g> : null}
		</g>;
	});
	// Points: their path is the composition of the moves applied in order.
	const pointEls = points.map((p, i) => {
		const po = vis(f, p.at ?? at, p.out, 10);
		if (po <= 0.001) return null;
		let x = p.x, y = p.y;
		const legs: {x1: number; y1: number; x2: number; y2: number; role: RoleKey; done: boolean; reflect: MoveAxis | null}[] = [];
		moves.forEach((mv, k) => {
			const u = us[k];
			if (u <= 0) return;
			const nx = mv.axis === 'x' ? moveAt(mv, x, u) : x, ny = mv.axis === 'y' ? moveAt(mv, y, u) : y;
			const fx = mv.axis === 'x' ? moveAt(mv, x, 1) : x, fy = mv.axis === 'y' ? moveAt(mv, y, 1) : y;
			if (Math.hypot(fx - x, fy - y) > 1e-9) legs.push({x1: x, y1: y, x2: nx, y2: ny, role: mv.role ?? moveRole(mv), done: u >= 1, reflect: mv.kind === 'reflect' ? mv.axis : null});
			x = nx; y = ny;
		});
		const [px, py] = m.p(x, y), [gx, gy] = m.p(p.x, p.y);
		const R = MATH_ROLES[p.role ?? 'height'];
		const ro = p.ring ? vis(f, p.ring.at, p.ring.out, 10) : 0;
		const exact = us.every(u => u <= 0 || u >= 1);
		const ct = p.coords ? (exact ? ptText(x, y) : `(${niceNum(Math.round(x * 10) / 10, 1)}, ${niceNum(Math.round(y * 10) / 10, 1)})`) : '';
		return <g key={'pt' + i} opacity={po}>
			{(p.ghost ?? true) && legs.length ? <circle cx={gx} cy={gy} r={9} fill={GHOST} opacity={0.6 * go} /> : null}
			{(p.trails ?? true) ? legs.map((l, k) => {
				const [x1, y1] = m.p(l.x1, l.y1), [x2, y2] = m.p(l.x2, l.y2);
				const c = roleStroke(l.role);
				const ticks = l.reflect && l.done ? (() => {
					// Equal-distance ticks: one across the middle of each half of the flight.
					const mx = l.reflect === 'x' ? m.p(0, 0)[0] : (x1 + x2) / 2, my = l.reflect === 'y' ? m.p(0, 0)[1] : (y1 + y2) / 2;
					const h = [[(x1 + mx) / 2, (y1 + my) / 2], [(x2 + mx) / 2, (y2 + my) / 2]];
					return h.map(([tx, ty], q) => l.reflect === 'x'
						? <line key={'tk' + q} x1={tx} x2={tx} y1={ty - 14} y2={ty + 14} stroke={c} strokeWidth={4} />
						: <line key={'tk' + q} y1={ty} y2={ty} x1={tx - 14} x2={tx + 14} stroke={c} strokeWidth={4} />);
				})() : null;
				return <g key={'l' + k} opacity={to}>
					<line x1={x1} y1={y1} x2={x2} y2={y2} stroke={c} strokeWidth={5} strokeDasharray="3 11" strokeLinecap="round" />
					{l.done ? arrowHead(x1, y1, x2, y2, c, 5) : null}
					{ticks}
				</g>;
			}) : null}
			<circle cx={px} cy={py} r={11} fill={R.stroke} stroke={CARD} strokeWidth={3} />
			{ro > 0 ? <circle cx={px} cy={py} r={26} fill="none" stroke={roleStroke(p.ring!.role ?? 'answer')} strokeWidth={5} opacity={ro} /> : null}
			{p.label || ct ? <text x={px + 22} y={py - 20} {...haloText(34, R.ink)}>{[p.label, ct].filter(Boolean).join(' ')}</text> : null}
		</g>;
	});
	const ilo = imageLabel ? vis(f, imageLabel.at, imageLabel.out, 12) : 0;
	return (
		<g opacity={o}>
			{mirrorEls}
			<g clipPath={m.clip}>
				{asymEls}
				{ghost ? <path d={imagePath(m, parent, [1, 0], [1, 0], uDomain, breaks)} fill="none" stroke={GHOST} strokeWidth={4.5} strokeDasharray="14 11" opacity={0.85 * go} /> : null}
				{curve ? <path d={imagePath(m, parent, xm, ym, uDomain, breaks)} fill="none" stroke={curveColor} strokeWidth={curveWidth} strokeDasharray={dashed ? '14 10' : undefined} strokeLinecap="round" strokeLinejoin="round" /> : null}
			</g>
			{ghostLabel ? (() => {const [lx, ly] = m.p(ghostLabel.x, ghostLabel.y); return <text x={lx} y={ly} textAnchor={ghostLabel.anchor ?? 'start'} opacity={go} {...haloText(ghostLabel.size ?? 32, INK_SOFT, 700)}>{ghostLabel.text}</text>;})() : null}
			{pointEls}
			{ilo > 0 ? (() => {const [lx, ly] = m.p(imageLabel!.x, imageLabel!.y); return <text x={lx} y={ly} textAnchor={imageLabel!.anchor ?? 'start'} opacity={ilo} {...haloText(imageLabel!.size ?? 38, roleInk(imageLabel!.role))}>{imageLabel!.text}</text>;})() : null}
		</g>
	);
};

// =====================================================================================================
// PointImageTable (g02)
// =====================================================================================================
/**
 * Named points and their images under one or more rules, filling row by row (g02 scene 2 and feedback 1). Image
 * entries are computed from each column's moves; a point that a rule leaves unchanged (on the mirror) gets the tag
 * `stayTag` and a pulse. Columns use their rule's colour.
 */
export const PointImageTable: React.FC<{
	x: number; y: number; points: readonly {name?: string; x: number; y: number}[];
	columns: readonly {head: string; moves: readonly Move[]; role?: RoleKey; at: number; stagger?: number}[];
	at?: number; out?: number; size?: number; stayTag?: string; title?: string;
}> = ({x, y, points, columns, at = 0, out, size = 44, stayTag = 'stays', title}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const cell: React.CSSProperties = {padding: '6px 18px', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap'};
	return (
		<div style={{position: 'absolute', left: x, top: y, opacity: o, background: CARD, borderRadius: 20, boxShadow: CARD_SHADOW, padding: '14px 18px'}}>
			{title ? <div style={{fontFamily: FONT_DISPLAY, fontSize: 28, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase', color: INK_SOFT, padding: '0 18px 6px'}}>{title}</div> : null}
			<table style={{borderCollapse: 'collapse'}}>
				<thead><tr>
					<th style={{...cell, fontSize: size * 0.72, color: INK_SOFT, textAlign: 'left'}}>point</th>
					{columns.map((c, j) => <th key={j} style={{...cell, fontSize: size * 0.72, color: roleInk(c.role), opacity: prog(f, c.at - 10, 10), textAlign: 'left'}}>{c.head}</th>)}
				</tr></thead>
				<tbody>{points.map((p, i) => <tr key={i} style={{borderTop: `2px solid ${PAPER_DEEP}`}}>
					<td style={{...cell, color: INK}}>{p.name ? `${p.name}` : ''}{ptText(p.x, p.y)}</td>
					{columns.map((c, j) => {
						const t = c.at + i * (c.stagger ?? 24), u = prog(f, t, 12);
						const [ix, iy] = applyMoves(c.moves, p.x, p.y);
						const stays = Math.abs(ix - p.x) < 1e-9 && Math.abs(iy - p.y) < 1e-9;
						const pulse = stays && f >= t ? 0.5 + 0.5 * Math.cos(((f - t) / 18) * Math.PI) * Math.max(0, 1 - (f - t) / 60) : 0;
						return <td key={j} style={{...cell, color: roleInk(c.role), opacity: u, background: pulse > 0.5 ? MATH_ROLES[c.role ?? 'height'].soft : undefined, borderRadius: 10}}>
							{(p.name ? `${p.name}′` : '') + ptText(ix, iy)}
							{stays && u > 0 ? <span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: size * 0.8, color: INK_SOFT, marginLeft: 14}}>{stayTag}</span> : null}
						</td>;
					})}
				</tr>)}</tbody>
			</table>
		</div>
	);
};

// =====================================================================================================
// StretchFromAxis (g03)
// =====================================================================================================
/**
 * A dilation from an axis (g03 scenes 2 to 4): the fixed axis drawn bold in the move's colour (labelled "stretch
 * from here"), sampled parent points carried along arrows away from (or towards) it, each arrow as long as
 * |factor − 1| × the point's distance from the axis, and the image forming as the factor runs from 1. `axis` is
 * the coordinate multiplied: 'x' is a horizontal dilation from the y-axis, 'y' a vertical one from the x-axis.
 * `pairs` ring a parent point and its image together. Draw inside a StudioPlot render prop.
 */
export const StretchFromAxis: React.FC<{
	m: PlotMap; parent: (x: number) => number; axis: MoveAxis; factor: number; at: number; dur?: number; out?: number;
	samples?: readonly number[]; uDomain?: readonly [number, number]; breaks?: readonly number[];
	role?: RoleKey; axisLabel?: string | false; pairs?: readonly {x: number; at: number; out?: number}[]; ghost?: boolean; arrowsOut?: number;
}> = ({m, parent, axis, factor, at, dur = 48, out, samples, uDomain, breaks = [], role, axisLabel = 'stretch from here', pairs = [], ghost = true, arrowsOut}) => {
	const f = useCurrentFrame();
	const o = vis(f, at - 20, out, 12);
	if (o <= 0.001) return null;
	const mv: Move = {kind: 'stretch', axis, factor};
	const R = MATH_ROLES[role ?? moveRole(mv)];
	const u = smooth(clamp01((f - at) / dur));
	const s = lerp(1, factor, u);
	const xm: [number, number] = axis === 'x' ? [s, 0] : [1, 0], ym: [number, number] = axis === 'y' ? [s, 0] : [1, 0];
	const b = m.box, [ox, oy] = m.p(0, 0);
	const xs = samples ?? Array.from({length: 9}, (_, i) => lerp(m.win.x[0], m.win.x[1], (i + 0.5) / 9));
	const ao = arrowsOut === undefined ? 1 : 1 - prog(f, arrowsOut, 12);
	const bold = prog(f, at - 20, 14);
	const img = (x0: number): [number, number] => [axis === 'x' ? s * x0 : x0, axis === 'y' ? s * parent(x0) : parent(x0)];
	return (
		<g opacity={o}>
			{axis === 'x'
				? <line x1={ox} x2={ox} y1={b.top} y2={b.top + b.height} stroke={R.stroke} strokeWidth={10 * bold} strokeLinecap="round" />
				: <line y1={oy} y2={oy} x1={b.left} x2={b.left + b.width} stroke={R.stroke} strokeWidth={10 * bold} strokeLinecap="round" />}
			{axisLabel ? <text x={axis === 'x' ? ox + 18 : b.left + b.width - 10} y={axis === 'x' ? b.top + 36 : oy - 20} textAnchor={axis === 'x' ? 'start' : 'end'} opacity={bold} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, fill: R.ink}} stroke={CARD} strokeWidth={8} paintOrder="stroke">{axisLabel}</text> : null}
			<g clipPath={m.clip}>
				{ghost ? <path d={imagePath(m, parent, [1, 0], [1, 0], uDomain, breaks)} fill="none" stroke={GHOST} strokeWidth={4.5} strokeDasharray="14 11" opacity={0.85} /> : null}
				<path d={imagePath(m, parent, xm, ym, uDomain, breaks)} fill="none" stroke={INK} strokeWidth={6} strokeLinecap="round" />
				{u > 0 ? xs.map((x0, i) => {
					const y0 = parent(x0);
					if (!Number.isFinite(y0)) return null;
					const [x1, y1] = m.p(x0, y0), [x2, y2] = m.p(...img(x0));
					if (Math.hypot(x2 - x1, y2 - y1) < 3) return <circle key={i} cx={x1} cy={y1} r={7} fill={R.stroke} opacity={ao} />;
					return <g key={i} opacity={ao}><line x1={x1} y1={y1} x2={x2} y2={y2} stroke={R.stroke} strokeWidth={5} strokeLinecap="round" />{arrowHead(x1, y1, x2, y2, R.stroke, 5, 16)}<circle cx={x1} cy={y1} r={6} fill={GHOST} /></g>;
				}) : null}
			</g>
			{pairs.map((p, i) => {
				const po = vis(f, p.at, p.out, 10);
				if (po <= 0.001) return null;
				const y0 = parent(p.x), [ix, iy] = [axis === 'x' ? factor * p.x : p.x, axis === 'y' ? factor * y0 : y0];
				const [x1, y1] = m.p(p.x, y0), [x2, y2] = m.p(ix, iy);
				const same = Math.hypot(x2 - x1, y2 - y1) < 2;
				return <g key={'p' + i} opacity={po}>
					<circle cx={x1} cy={y1} r={24} fill="none" stroke={GHOST} strokeWidth={5} />
					{!same ? <circle cx={x2} cy={y2} r={24} fill="none" stroke={MATH_ROLES.answer.stroke} strokeWidth={5} /> : null}
					<text x={x1 - 26} y={y1 - 26} textAnchor="end" {...haloText(32, INK_SOFT)}>{ptText(p.x, y0)}</text>
					{!same ? <text x={x2 + 26} y={y2 - 26} {...haloText(34, MATH_ANSWER)}>{ptText(ix, iy)}</text> : null}
				</g>;
			})}
		</g>
	);
};

// =====================================================================================================
// TransformQueue and QueueVerdict (g04)
// =====================================================================================================
export type QueueStep = {move: Move; label: string; at: number; dur?: number; role?: RoleKey; row?: string};
/** True when the two orders give the same curve at every sampled x in [a, b] (finite values only, within tol). */
export const ordersAgree = (parent: (x: number) => number, a: readonly Move[], b: readonly Move[], range: readonly [number, number], tol = 1e-9, n = 61) => {
	const fa = imageFn(parent, a), fb = imageFn(parent, b);
	for (let i = 0; i < n; i++) {
		const x = lerp(range[0], range[1], i / (n - 1)), p = fa(x), q = fb(x);
		if (Number.isFinite(p) !== Number.isFinite(q)) return false;
		if (Number.isFinite(p) && Math.abs(p - q) > tol * Math.max(1, Math.abs(p))) return false;
	}
	return true;
};
/**
 * One queue of step cards above a plot (g04 scenes 2 and 3; feedback 1): each card lights and ticks as its move
 * applies to the current curve (a TransformationTracer), and the row under the plot shows that step's equation
 * (the newest 44 px, the one before it 30 px). `point` rides along (the vertex), with flight arrows in each move's
 * colour; `overlay` draws the other order's final curve dashed at its cue, to show two curves landing together.
 */
export const TransformQueue: React.FC<{
	x: number; y: number; width?: number; height?: number; window: PlotWindow; parent: (x: number) => number; uDomain?: readonly [number, number];
	steps: readonly QueueStep[]; point?: TracerPoint; overlay?: {moves: readonly Move[]; at: number; out?: number};
	xTicks?: readonly (number | PlotTick)[]; yTicks?: readonly (number | PlotTick)[]; at?: number; out?: number; startRow?: string; cardSize?: number; rowSize?: number;
}> = ({x, y, width = 760, height = 600, window: win, parent, uDomain, steps, point, overlay, xTicks, yTicks, at = 0, out, startRow, cardSize = 36, rowSize = 44}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const moves: TimedMove[] = steps.map(s => ({...s.move, at: s.at, dur: s.dur, role: s.role}));
	const rows = [startRow ? {text: startRow, at} : null, ...steps.map(s => (s.row ? {text: s.row, at: s.at + (s.dur ?? 36)} : null))].filter((r): r is {text: string; at: number} => !!r && f >= r.at);
	const cur = rows[rows.length - 1], prev = rows[rows.length - 2];
	return <>
		<div style={{position: 'absolute', left: x, top: y - cardSize * 1.9 - 10, width, display: 'flex', gap: 14, opacity: o}}>
			{steps.map((s, i) => {
				const R = MATH_ROLES[s.role ?? moveRole(s.move)];
				const live = vis(f, s.at - 4, s.at + (s.dur ?? 36) + 14, 8), done = f >= s.at + (s.dur ?? 36);
				return <div key={i} style={{display: 'flex', alignItems: 'center', gap: 10, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: cardSize, color: R.ink, background: live > 0.3 ? R.soft : CARD, border: `4px solid ${R.stroke}`, borderRadius: 14, padding: '6px 16px', boxShadow: CARD_SHADOW, opacity: done ? 0.8 : 1, transform: `scale(${1 + 0.06 * live})`}}>
					<span style={{fontSize: cardSize * 0.72, color: INK_SOFT}}>{i + 1}</span>{s.label}{done ? <span style={{color: MATH_ANSWER}}>✓</span> : null}
				</div>;
			})}
		</div>
		<StudioPlot x={x} y={y} width={width} height={height} window={win} xTicks={xTicks} yTicks={yTicks} at={at} out={out}>
			{m => <>
				<TransformationTracer m={m} parent={parent} uDomain={uDomain} moves={moves} points={point ? [point] : []} at={at} />
				{overlay ? (() => {
					const ov = vis(f, overlay.at, overlay.out, 12);
					return ov > 0 ? <g opacity={ov} clipPath={m.clip}><path d={imagePath(m, parent, axisMap(overlay.moves, 'x'), axisMap(overlay.moves, 'y'), uDomain, [])} fill="none" stroke={MATH_ROLES.gradient.stroke} strokeWidth={6} strokeDasharray="12 12" /></g> : null;
				})() : null}
			</>}
		</StudioPlot>
		<div style={{position: 'absolute', left: x, top: y + height + 4, width, textAlign: 'center', opacity: o, fontFamily: FONT_DISPLAY, fontWeight: 800, color: INK}}>
			{prev ? <div style={{fontSize: rowSize * 0.68, color: INK_SOFT, lineHeight: 1.2}}>{prev.text}</div> : null}
			{cur ? <div style={{fontSize: rowSize, lineHeight: 1.2, opacity: prog(f, cur.at, 12)}}>{cur.text}</div> : null}
		</div>
	</>;
};
/**
 * The commute verdict chip (g04): computed by comparing the two orders' final curves. Same curve: green outline,
 * "different axes: same curve"; different curves: red outline, "same axis: order matters". `expect` throws if the
 * author's reading disagrees with the computation.
 */
export const QueueVerdict: React.FC<{
	x: number; y: number; parent: (x: number) => number; a: readonly Move[]; b: readonly Move[]; range: readonly [number, number]; at: number; out?: number;
	expect?: 'same' | 'differ'; text?: {same?: string; differ?: string}; size?: number; anchor?: 'start' | 'middle';
}> = ({x, y, parent, a, b, range, at, out, expect, text, size = 44, anchor = 'middle'}) => {
	const f = useCurrentFrame();
	const same = ordersAgree(parent, a, b, range);
	if (expect && (expect === 'same') !== same) throw new Error(`QueueVerdict: the two orders ${same ? 'agree' : 'differ'}, expected ${expect}`);
	const o = vis(f, at, out, 12);
	if (o <= 0.001) return null;
	const c = same ? MATH_ANSWER : MATH_MISTAKE;
	const label = same ? text?.same ?? 'different axes: same curve' : text?.differ ?? 'same axis: order matters';
	return <div style={{position: 'absolute', left: x, top: y, transform: `translate(${anchor === 'middle' ? '-50%' : '0'}, 0) scale(${0.9 + 0.1 * o})`, opacity: o, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: c, background: CARD, border: `5px solid ${c}`, borderRadius: 18, padding: '8px 26px', boxShadow: CARD_SHADOW, whiteSpace: 'nowrap'}}>{label}</div>;
};

// =====================================================================================================
// FeatureLedger and PenLiftMark (g05)
// =====================================================================================================
export type LedgerRow =
	| {kind: 'vAsym'; value: number}
	| {kind: 'hAsym'; value: number}
	| {kind: 'points'; pts: readonly (readonly [number, number])[]}
	| {kind: 'domain'; set: AxisSet}
	| {kind: 'range'; set: AxisSet}
	| {kind: 'solve'; text: string};
export type LedgerEntry = LedgerRow & {
	/** Row label (defaults: "vertical asymptote", "horizontal asymptote", "key points", "domain", "range", "intercepts: solve"). */
	name?: string; at: number; carryAt?: number; out?: number; pulse?: readonly number[];
	/** The design's image text: throws at load if the computed entry differs. */
	expect?: string;
};
const ledgerDefault: Record<LedgerRow['kind'], string> = {vAsym: 'vertical asymptote', hAsym: 'horizontal asymptote', points: 'key points', domain: 'domain', range: 'range', solve: 'intercepts: solve'};
/** Parent and image text for a ledger row (image computed from the moves; 'solve' rows are never carried). */
export const ledgerTexts = (r: LedgerRow, moves: readonly Move[]): [string, string] => {
	switch (r.kind) {
		case 'vAsym': return [`x = ${niceNum(r.value)}`, `x = ${niceNum(mapLine(moves, 'x', r.value))}`];
		case 'hAsym': return [`y = ${niceNum(r.value)}`, `y = ${niceNum(mapLine(moves, 'y', r.value))}`];
		case 'points': return [r.pts.map(p => ptText(p[0], p[1])).join('\n'), r.pts.map(p => ptText(...applyMoves(moves, p[0], p[1]))).join('\n')];
		case 'domain': return [axisSetText(r.set, 'x'), axisSetText(mapAxisSet(moves, 'x', r.set), 'x')];
		case 'range': return [axisSetText(r.set, 'y'), axisSetText(mapAxisSet(moves, 'y', r.set), 'y')];
		default: return ['', r.text];
	}
};
/**
 * A two-column ledger (g05 scenes 2, 3 and 5): parent features on the left, image features on the right, each
 * image entry computed from `moves` and arriving with "→" at its carryAt. A 'solve' row spans the image column
 * under a rule: intercepts are found by solving, never carried. `bracket` draws "the frame" round a run of rows.
 * `scale` shrinks the whole card at a cue (g05 scene 3's 30 px ledger).
 */
export const FeatureLedger: React.FC<{
	x: number; y: number; width?: number; parentHead: string; imageHead: string; moves: readonly Move[]; rows: readonly LedgerEntry[];
	at?: number; out?: number; size?: number; bracket?: {from: number; to: number; at: number; label?: string}; scale?: {at: number; to: number};
}> = ({x, y, width = 760, parentHead, imageHead, moves, rows, at = 0, out, size = 44, bracket, scale}) => {
	const f = useCurrentFrame();
	rows.forEach(r => {if (r.expect !== undefined) {const got = ledgerTexts(r, moves)[1]; if (got !== r.expect) throw new Error(`FeatureLedger: ${r.kind} computes "${got}", design says "${r.expect}"`);}});
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const sc = scale ? lerp(1, scale.to, prog(f, scale.at, 18)) : 1;
	const headH = size * 0.9 + 26;
	const rowHs = rows.map(r => (r.kind === 'points' ? r.pts.length : 1) * size * 1.15 + 22 + size * 0.17);
	const br = bracket ? prog(f, bracket.at, 18) : 0;
	return (
		<div style={{position: 'absolute', left: x, top: y, width, opacity: o, transform: `scale(${sc})`, transformOrigin: 'top left'}}>
			<div style={{background: CARD, borderRadius: 20, boxShadow: CARD_SHADOW, padding: '12px 22px 14px', position: 'relative'}}>
				<div style={{display: 'grid', gridTemplateColumns: '0.85fr 1fr 1.15fr', alignItems: 'end', height: headH, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size * 0.7}}>
					<span style={{color: INK_SOFT, fontSize: size * 0.56, letterSpacing: 1.5, textTransform: 'uppercase'}}>feature</span>
					<span style={{color: INK_SOFT}}>{parentHead}</span>
					<span style={{color: INK}}>{imageHead}</span>
				</div>
				{rows.map((r, i) => {
					const ro = vis(f, r.at, r.out, 12);
					const [pt, it] = ledgerTexts(r, moves);
					const co = r.kind === 'solve' ? prog(f, r.at, 12) : r.carryAt === undefined ? 0 : prog(f, r.carryAt, 14);
					const pulse = Math.max(0, ...(r.pulse ?? []).map(p => (f >= p && f < p + 40 ? Math.sin(((f - p) / 40) * Math.PI) : 0)));
					return <div key={i} style={{display: 'grid', gridTemplateColumns: r.kind === 'solve' ? '0.85fr 2.15fr' : '0.85fr 1fr 1.15fr', alignItems: 'center', minHeight: rowHs[i], boxSizing: 'border-box', borderTop: `2px solid ${r.kind === 'solve' ? INK_SOFT : PAPER_DEEP}`, opacity: ro, background: pulse > 0 ? `rgba(247,220,160,${0.7 * pulse})` : undefined, borderRadius: 10, margin: '0 -10px', padding: '0 10px'}}>
						<span style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: size * 0.62, color: INK_SOFT, lineHeight: 1.1}}>{r.name ?? ledgerDefault[r.kind]}</span>
						{r.kind === 'solve' ? <span style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: MATH_ANSWER, opacity: co}}>{it}</span> : <>
							<span style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: INK_SOFT, whiteSpace: 'pre', lineHeight: 1.15}}>{pt}</span>
							<span style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: INK, opacity: co, whiteSpace: 'pre', lineHeight: 1.15, transform: `translateX(${(1 - co) * -40}px)`, display: 'inline-flex', gap: '0.3em'}}><span style={{color: INK_SOFT}}>→</span><span>{it}</span></span>
						</>}
					</div>;
				})}
			</div>
			{bracket && br > 0 ? (() => {
				const sumTo = (k: number) => rowHs.slice(0, k).reduce((q, v) => q + v, 0);
				const top = 12 + headH + sumTo(bracket.from) + 6, bot = 12 + headH + sumTo(bracket.to + 1) - 6;
				return <svg style={{position: 'absolute', left: width + 8, top: 0, overflow: 'visible'}} width={80} height={bot + 20}>
					<path d={`M0,${top} Q22,${top} 22,${top + 24} L22,${(top + bot) / 2 - 18} Q22,${(top + bot) / 2} 40,${(top + bot) / 2} Q22,${(top + bot) / 2} 22,${(top + bot) / 2 + 18} L22,${bot - 24} Q22,${bot} 0,${bot}`} fill="none" stroke={MATH_ROLES.k.stroke} strokeWidth={5} pathLength={1} strokeDasharray={1} strokeDashoffset={1 - br} strokeLinecap="round" />
					{bracket.label ? <text x={50} y={(top + bot) / 2 + 14} opacity={br} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: size, fill: MATH_ROLES.k.ink}}>{bracket.label}</text> : null}
				</svg>;
			})() : null}
		</div>
	);
};
/**
 * The discontinuity at a vertical asymptote x = c (g05 scene 2): each branch is retraced in the role colour where it
 * runs into the asymptote (a pulse), and a dotted pen-lift hop with an arrowhead jumps across the line at height `y`
 * (default the window's middle; pass the horizontal asymptote). Draw inside a StudioPlot render prop.
 */
export const PenLiftMark: React.FC<{m: PlotMap; fn: (x: number) => number; c: number; at: number; out?: number; role?: RoleKey; y?: number; span?: number; reach?: number}> = ({m, fn, c, at, out, role = 'mistake', y, span, reach = 1.2}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.001) return null;
	const R = MATH_ROLES[role];
	const pulse = 0.55 + 0.45 * Math.cos(((f - at) / 14) * Math.PI);
	const hy = y ?? (m.win.y[0] + m.win.y[1]) / 2, hs = span ?? (m.win.x[1] - m.win.x[0]) * 0.06;
	const branch = (a: number, b: number) => {
		let d = '', pen = false;
		for (let i = 0; i <= 80; i++) {
			const X = a + ((b - a) * i) / 80, Y = fn(X);
			if (!Number.isFinite(Y)) {pen = false; continue;}
			const [px, py] = m.p(X, Math.max(m.win.y[0] - 2, Math.min(m.win.y[1] + 2, Y)));
			d += `${pen ? 'L' : 'M'}${px.toFixed(1)},${py.toFixed(1)} `; pen = true;
		}
		return d;
	};
	const [x1, y1] = m.p(c - hs, hy), [x2] = m.p(c + hs, hy), top = y1 - Math.abs(x2 - x1) * 0.7;
	return <g opacity={o}>
		<g clipPath={m.clip} opacity={pulse}>
			<path d={branch(c - reach, c - 1e-3)} fill="none" stroke={R.stroke} strokeWidth={10} strokeLinecap="round" opacity={0.55} />
			<path d={branch(c + 1e-3, c + reach)} fill="none" stroke={R.stroke} strokeWidth={10} strokeLinecap="round" opacity={0.55} />
		</g>
		<path d={`M${x1},${y1} Q${(x1 + x2) / 2},${top} ${x2},${y1}`} fill="none" stroke={R.stroke} strokeWidth={5} strokeDasharray="3 10" strokeLinecap="round" />
		{arrowHead((x1 + x2) / 2 + 10, top + (y1 - top) * 0.45, x2, y1, R.stroke, 5, 16)}
		<circle cx={x1} cy={y1} r={7} fill={R.stroke} />
	</g>;
};

// =====================================================================================================
// CircleTracer, with the CircleFromCentre mode (w24, w25, g03, g06)
// =====================================================================================================
export type CirclePointSpec = {x: number; y: number; at: number; out?: number; label?: string; onCircle?: boolean; role?: RoleKey;
	/** Right-angled triangle from the centre to this point, legs labelled ("3 across", "4 up"). */
	triangle?: {at: number; across?: string; up?: string; acrossRole?: RoleKey; upRole?: RoleKey}};
/** The point at `deg` degrees on the circle centre (a, b), radius r (with optional x and y scales). */
export const circlePoint = (a: number, b: number, r: number, deg: number, sx = 1, sy = 1): [number, number] => [a + sx * r * Math.cos((deg * Math.PI) / 180), b + sy * r * Math.sin((deg * Math.PI) / 180)];
/** Centre and radius of x² + y² + Dx + Ey + F = 0 by completing both squares (throws when r² ≤ 0). */
export const circleFromGeneral = (D: number, E: number, F: number) => {
	const a = -D / 2, b = -E / 2, r2 = a * a + b * b - F;
	if (!(r2 > 0)) throw new RangeError(`circleFromGeneral: r² = ${r2}`);
	return {a, b, r2, r: Math.sqrt(r2)};
};
/**
 * A circle (x − a)² + (y − b)² = r² on an equal-unit StudioPlot (throws on unequal units). Modes, combinable:
 * `tracer` runs a point round it with its right-angled triangle (across blue, up teal, radius amber by default) as w24
 * does; `spokes` steps four radius spokes out to the axis-parallel points, ringing each, and the circle draws through
 * them (g06 scene 3); `slide` moves the whole circle as one move, sideways (teal arrow) then up or down (violet), the
 * ghost left at the start (g06 scene 2); `sx` and `sy` scale it (g03: enlargement with equal factors, an oval with
 * one); `bars` casts the domain and range with AxisShadow; `points` mark named points, `onCircle` throwing if a point
 * is more than 1 px off the final circle. Draw inside a StudioPlot render prop; read live values with circlePoint.
 */
export const CircleTracer: React.FC<{
	m: PlotMap; a?: number; b?: number; r: Keyed; sx?: Keyed; sy?: Keyed;
	at?: number; out?: number; draw?: {at: number; dur?: number}; color?: string; width?: number; ghost?: {at: number; out?: number; label?: string};
	tracer?: {angle: Keyed; at: number; out?: number; legs?: {across?: RoleKey; up?: RoleKey; hyp?: RoleKey}; labels?: boolean};
	spokes?: {at: number; stagger?: number; out?: number; role?: RoleKey; rings?: boolean; coords?: boolean};
	slide?: {to: readonly [number, number]; at: number; yAt?: number; dur?: number; arrowsOut?: number};
	bars?: {domainAt?: number; rangeAt?: number; out?: number; labels?: boolean};
	points?: readonly CirclePointSpec[]; centreDot?: boolean | {at: number}; centreLabel?: boolean;
	requireEqualUnits?: boolean;
}> = ({m, a = 0, b = 0, r, sx = 1, sy = 1, at = 0, out, draw, color = INK, width = 6, ghost, tracer, spokes, slide, bars, points = [], centreDot = true, centreLabel = false, requireEqualUnits = true}) => {
	const f = useCurrentFrame();
	if (requireEqualUnits && Math.abs(m.sx - m.sy) / m.sx > 0.01) throw new Error(`CircleTracer: unequal units (${m.sx.toFixed(2)} and ${m.sy.toFixed(2)} px per unit)`);
	const finA = slide ? slide.to[0] : a, finB = slide ? slide.to[1] : b;
	const rFin = typeof r === 'number' ? r : r[r.length - 1][1];
	points.forEach(p => {
		if (!p.onCircle) return;
		const err = Math.abs(Math.hypot(p.x - finA, p.y - finB) - rFin) * m.sx;
		if (err > 1) throw new Error(`CircleTracer: (${p.x}, ${p.y}) is ${err.toFixed(2)} px off the circle centre (${finA}, ${finB}) radius ${rFin}`);
	});
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const R0 = keyedAt(r, f), SX = keyedAt(sx, f), SY = keyedAt(sy, f);
	const dur = slide?.dur ?? 40;
	const ux = slide ? smooth(clamp01((f - slide.at) / dur)) : 0, uy = slide ? smooth(clamp01((f - (slide.yAt ?? slide.at + dur)) / dur)) : 0;
	const A = slide ? lerp(a, slide.to[0], ux) : a, B = slide ? lerp(b, slide.to[1], uy) : b;
	const [cx, cy] = m.p(A, B), rx = R0 * SX * m.sx, ry = R0 * SY * m.sy;
	const sp = spokes ? spokes : undefined;
	const spokeDone = sp ? sp.at + 3 * (sp.stagger ?? 14) + 14 : 0;
	const dr = draw ? clamp01((f - draw.at) / (draw.dur ?? 30)) : sp ? clamp01((f - spokeDone) / 30) : 1;
	const circ = (ccx: number, ccy: number, rrx: number, rry: number, frac: number) => frac >= 1
		? `M${ccx + rrx},${ccy} A${rrx},${rry} 0 1 0 ${ccx - rrx},${ccy} A${rrx},${rry} 0 1 0 ${ccx + rrx},${ccy}`
		: (() => {let d = ''; const n = Math.max(2, Math.round(160 * frac)); for (let i = 0; i <= n; i++) {const t = (i / 160) * Math.PI * 2; d += `${i ? 'L' : 'M'}${(ccx + rrx * Math.cos(t)).toFixed(2)},${(ccy - rry * Math.sin(t)).toFixed(2)} `;} return d;})();
	const go = ghost ? vis(f, ghost.at, ghost.out, 12) : 0;
	const [gx, gy] = m.p(a, b);
	const cdo = typeof centreDot === 'object' ? prog(f, centreDot.at, 10) : centreDot ? 1 : 0;
	const sR = MATH_ROLES[sp?.role ?? 'k'];
	return (
		<g opacity={o}>
			{go > 0 ? <g opacity={go}><path d={circ(gx, gy, R0 * m.sx, R0 * m.sy, 1)} fill="none" stroke={GHOST} strokeWidth={4} strokeDasharray="12 10" />{ghost!.label ? <text x={gx} y={gy - R0 * m.sy - 14} textAnchor="middle" {...haloText(30, INK_SOFT, 700)}>{ghost!.label}</text> : null}</g> : null}
			{bars ? <AxisShadow m={m} domain={{from: finA - rFin * keyedAt(sx, 1e9), to: finA + rFin * keyedAt(sx, 1e9)}} range={{from: finB - rFin * keyedAt(sy, 1e9), to: finB + rFin * keyedAt(sy, 1e9)}}
				rayPoints={[[finA - rFin, finB], [finA + rFin, finB], [finA, finB + rFin], [finA, finB - rFin]]} castDownAt={bars.domainAt} castSideAt={bars.rangeAt} out={bars.out}
				labels={bars.labels ? {domain: axisSetText({from: finA - rFin, to: finA + rFin}, 'x'), range: axisSetText({from: finB - rFin, to: finB + rFin}, 'y')} : undefined} /> : null}
			{dr > 0 ? <path d={circ(cx, cy, rx, ry, dr)} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" /> : null}
			{slide && (slide.arrowsOut === undefined || f < slide.arrowsOut + 12) ? (() => {
				const ao = slide.arrowsOut === undefined ? 1 : 1 - prog(f, slide.arrowsOut, 12);
				const [x0, y0] = m.p(a, b), [x1] = m.p(lerp(a, slide.to[0], ux), b), [, y2] = m.p(slide.to[0], lerp(b, slide.to[1], uy));
				return <g opacity={ao}>
					{ux > 0 ? <><line x1={x0} y1={y0} x2={x1} y2={y0} stroke={MATH_ROLES.b.stroke} strokeWidth={6} strokeDasharray="14 9" />{ux >= 1 ? arrowHead(x0, y0, x1, y0, MATH_ROLES.b.stroke, 6) : null}</> : null}
					{uy > 0 ? <><line x1={x1} y1={y0} x2={x1} y2={y2} stroke={MATH_ROLES.gradient.stroke} strokeWidth={6} strokeDasharray="14 9" />{uy >= 1 ? arrowHead(x1, y0, x1, y2, MATH_ROLES.gradient.stroke, 6) : null}</> : null}
				</g>;
			})() : null}
			{sp ? [0, 180, 90, 270].map((deg, i) => {
				const t = sp.at + i * (sp.stagger ?? 14), u = smooth(clamp01((f - t) / 14));
				if (u <= 0 || (sp.out !== undefined && f > sp.out + 12)) return null;
				const so = sp.out === undefined ? 1 : 1 - prog(f, sp.out, 12);
				const [ex, ey] = circlePoint(A, B, R0, deg, SX, SY), [px, py] = m.p(lerp(A, ex, u), lerp(B, ey, u));
				return <g key={deg} opacity={so}>
					<line x1={cx} y1={cy} x2={px} y2={py} stroke={sR.stroke} strokeWidth={6} strokeLinecap="round" />
					{u >= 1 && sp.rings !== false ? <circle cx={px} cy={py} r={18} fill="none" stroke={sR.stroke} strokeWidth={5} /> : null}
					{u >= 1 ? <circle cx={px} cy={py} r={8} fill={sR.stroke} /> : null}
					{u >= 1 && sp.coords ? <text x={px + (deg === 180 ? -16 : 16)} y={py + (deg === 270 ? 40 : -16)} textAnchor={deg === 180 ? 'end' : 'start'} {...haloText(30, sR.ink)}>{ptText(ex, ey)}</text> : null}
				</g>;
			}) : null}
			{tracer ? (() => {
				const to2 = vis(f, tracer.at, tracer.out, 12);
				if (to2 <= 0.001) return null;
				const deg = keyedAt(tracer.angle, f), [X, Y] = circlePoint(A, B, R0, deg, SX, SY);
				const [px, py] = m.p(X, Y), [fx] = m.p(X, B);
				const L = {across: 'a' as RoleKey, up: 'b' as RoleKey, hyp: 'k' as RoleKey, ...tracer.legs};
				const sq = 18 * Math.sign(cx - fx || 1), sv = 18 * Math.sign(py - cy || 1);
				return <g opacity={to2}>
					<line x1={cx} y1={cy} x2={fx} y2={cy} stroke={roleStroke(L.across)} strokeWidth={7} strokeLinecap="round" />
					<line x1={fx} y1={cy} x2={px} y2={py} stroke={roleStroke(L.up)} strokeWidth={7} strokeLinecap="round" />
					<line x1={cx} y1={cy} x2={px} y2={py} stroke={roleStroke(L.hyp)} strokeWidth={7} strokeLinecap="round" />
					{Math.abs(fx - cx) > 30 && Math.abs(py - cy) > 30 ? <path d={`M${fx + sq},${cy} L${fx + sq},${cy + sv} L${fx},${cy + sv}`} fill="none" stroke={INK} strokeWidth={3} /> : null}
					<circle cx={px} cy={py} r={13} fill={INK} stroke={CARD} strokeWidth={4} />
					{tracer.labels ? <text x={px + (X > A ? -20 : 20)} y={py - 18} textAnchor={X > A ? 'end' : 'start'} {...haloText(34, INK)}>{`(${niceNum(Math.round(X * 100) / 100)}, ${niceNum(Math.round(Y * 100) / 100)})`}</text> : null}
				</g>;
			})() : null}
			{cdo > 0 ? <g opacity={cdo}><circle cx={cx} cy={cy} r={10} fill={INK} />{centreLabel ? <text x={cx + 16} y={cy + 40} {...haloText(32, INK)}>{ptText(A, B)}</text> : null}</g> : null}
			{points.map((p, i) => {
				const po = vis(f, p.at, p.out, 10);
				if (po <= 0.001) return null;
				const [px, py] = m.p(p.x, p.y);
				const tri = p.triangle ? prog(f, p.triangle.at, 18) : 0;
				const [fx] = m.p(p.x, finB), [ccx, ccy] = m.p(finA, finB);
				return <g key={'cp' + i} opacity={po}>
					{tri > 0 ? <g opacity={tri}>
						<line x1={ccx} y1={ccy} x2={fx} y2={ccy} stroke={roleStroke(p.triangle!.acrossRole ?? 'b')} strokeWidth={7} strokeLinecap="round" />
						<line x1={fx} y1={ccy} x2={px} y2={py} stroke={roleStroke(p.triangle!.upRole ?? 'gradient')} strokeWidth={7} strokeLinecap="round" />
						<line x1={ccx} y1={ccy} x2={px} y2={py} stroke={roleStroke('k')} strokeWidth={5} strokeDasharray="10 8" />
						{p.triangle!.across ? <text x={(ccx + fx) / 2} y={ccy + (py < ccy ? 42 : -16)} textAnchor="middle" {...haloText(34, roleInk(p.triangle!.acrossRole ?? 'b'))}>{p.triangle!.across}</text> : null}
						{p.triangle!.up ? <text x={fx + (fx >= ccx ? 16 : -16)} y={(ccy + py) / 2 + 12} textAnchor={fx >= ccx ? 'start' : 'end'} {...haloText(34, roleInk(p.triangle!.upRole ?? 'gradient'))}>{p.triangle!.up}</text> : null}
					</g> : null}
					<circle cx={px} cy={py} r={12} fill={roleStroke(p.role ?? 'height')} stroke={CARD} strokeWidth={3} />
					{p.label ? <text x={px + 18} y={py - 18} {...haloText(34, roleInk(p.role))}>{p.label}</text> : null}
				</g>;
			})}
		</g>
	);
};

/** "(x² − 4x + 4)": a group with its added corner. */
const groupText = (b: number, sym: string) => `(${sym}² ${b < 0 ? MINUS : '+'} ${Math.abs(b) === 1 ? '' : niceNum(Math.abs(b))}${sym} + ${cornerText(b)})`;
// =====================================================================================================
// TwoSquareTiles (g06 scene 4): x group and y group, each completed, with a balance line
// =====================================================================================================
/**
 * Two wave 1 CompleteSquareTiles side by side, the x group (teal) and the y group (violet), each adding its own
 * corner (b/2)², with a balance line under them: the added corners written on the left and, matching, on the right,
 * then the new right side computed (11 + 4 + 1 = 16 for x² + y² − 4x + 2y − 11 = 0). A negative coefficient uses
 * wave 1's hatched strip. Throws if `expectRight` disagrees with constant + both corners.
 */
export const TwoSquareTiles: React.FC<{
	x: number; y: number; bx: number; by: number; constant: number; unit?: number; xValue?: number; gapX?: number;
	at?: number; out?: number; xCue: {splitAt: number; moveAt: number; gapAt: number; fillAt: number; labelAt?: number}; yCue: {splitAt: number; moveAt: number; gapAt: number; fillAt: number; labelAt?: number};
	balance?: {x: number; y: number; at: number; totalAt: number; size?: number}; expectRight?: number;
}> = ({x, y, bx, by, constant, unit = 60, xValue = 4, gapX = 140, at = 0, out, xCue, yCue, balance, expectRight}) => {
	const f = useCurrentFrame();
	const cx = (bx / 2) ** 2, cy = (by / 2) ** 2, right = constant + cx + cy;
	if (expectRight !== undefined && Math.abs(right - expectRight) > 1e-9) throw new Error(`TwoSquareTiles: right side ${right}, design says ${expectRight}`);
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const wX = (xValue + Math.abs(bx) / 2 + Math.abs(bx) / 2) * unit;
	const bo = balance ? prog(f, balance.at, 14) : 0, to = balance ? prog(f, balance.totalAt, 14) : 0;
	const s = balance?.size ?? 52;
	const R = (k: RoleKey, t: string) => <span style={{color: MATH_ROLES[k].ink}}>{t}</span>;
	return <>
		<CompleteSquareTiles x={x} y={y} b={bx} unit={unit} xValue={xValue} sym="x" at={at} out={out} stripRole="b" cornerRole="b" sideRole="b" {...xCue} />
		<CompleteSquareTiles x={x + wX + gapX} y={y} b={by} unit={unit} xValue={xValue} sym="y" at={at} out={out} stripRole="gradient" cornerRole="gradient" sideRole="gradient" {...yCue} />
		{balance && bo > 0 ? <div style={{position: 'absolute', left: balance.x, top: balance.y, opacity: bo * o, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: s, color: INK, whiteSpace: 'pre'}}>
			{R('b', groupText(bx, 'x'))}{' + '}{R('gradient', groupText(by, 'y'))}{' = '}{niceNum(constant)}{' '}{R('b', `+ ${cornerText(bx)}`)}{' '}{R('gradient', `+ ${cornerText(by)}`)}
			{to > 0 ? <span style={{opacity: to}}>{' = '}<span style={{color: MATH_ROLES.k.ink}}>{niceNum(right)}</span></span> : null}
		</div> : null}
	</>;
};

// =====================================================================================================
// Module-load self checks on the designs' numbers
// =====================================================================================================
{
	const near = (a: number, b: number, what: string, tol = 1e-9) => {if (!(Math.abs(a - b) <= tol)) throw new Error(`a11-transform-parts self check (${what}): ${a} vs ${b}`);};
	const sq = (x: number) => x * x;
	// g01: right 3 and up 2 carry (−1, 1), (0, 0), (1, 1) to (2, 3), (3, 2), (4, 3); 1/x right 3, down 2 has y-intercept −7/3.
	const g01: Move[] = [{kind: 'slide', axis: 'x', by: 3}, {kind: 'slide', axis: 'y', by: 2}];
	[[-1, 1, 2, 3], [0, 0, 3, 2], [1, 1, 4, 3]].forEach(([x, y, X, Y]) => {const [p, q] = applyMoves(g01, x, y); near(p, X, 'g01 arrow x'); near(q, Y, 'g01 arrow y');});
	near(imageFn(x => 1 / x, [{kind: 'slide', axis: 'x', by: 3}, {kind: 'slide', axis: 'y', by: -2}])(0), -7 / 3, 'g01 A1 y-intercept');
	// g02: replacing x by −x maps (−2, 8) to (2, 8); x² − 4x + 3 reflected in the y-axis is x² + 4x + 3, vertex (−2, −1).
	{const [p, q] = applyMoves([{kind: 'reflect', axis: 'x'}], -2, 8); near(p, 2, 'g02 reverse'); near(q, 8, 'g02 reverse y');}
	near(imageFn(x => x * x - 4 * x + 3, [{kind: 'reflect', axis: 'x'}])(1), 1 + 4 + 3, 'g02 worked');
	// g03: y = 2f(x/3): (2, 3) → (6, 6), (6, −1) → (18, −2); √(x/3) takes (4, 2) to (12, 2).
	const g03: Move[] = [{kind: 'stretch', axis: 'x', factor: 3}, {kind: 'stretch', axis: 'y', factor: 2}];
	{const [a, b] = applyMoves(g03, 2, 3), [c, d] = applyMoves(g03, 6, -1); near(a, 6, 'g03'); near(b, 6, 'g03'); near(c, 18, 'g03'); near(d, -2, 'g03');}
	near(imageFn(Math.sqrt, [{kind: 'stretch', axis: 'x', factor: 3}])(12), 2, 'g03 app');
	// g04: stretch-then-slide vertex (0, 1), slide-then-stretch (0, 2); horizontal pair 2 and 1; different axes agree.
	const st: Move = {kind: 'stretch', axis: 'y', factor: 2}, up: Move = {kind: 'slide', axis: 'y', by: 1};
	near(applyMoves([st, up], 0, 0)[1], 1, 'g04 stretch then slide'); near(applyMoves([up, st], 0, 0)[1], 2, 'g04 slide then stretch');
	const hs: Move = {kind: 'stretch', axis: 'x', factor: 2}, rt: Move = {kind: 'slide', axis: 'x', by: 1};
	near(applyMoves([rt, hs], 0, 0)[0], 2, 'g04 right then stretch'); near(applyMoves([hs, rt], 0, 0)[0], 1, 'g04 stretch then right');
	if (!ordersAgree(sq, [rt, st], [st, rt], [-2, 5]) || ordersAgree(sq, [st, up], [up, st], [-3, 3]) || ordersAgree(sq, [rt, hs], [hs, rt], [-2, 5])) throw new Error('a11-transform-parts self check: g04 verdicts');
	// g04 worked: reflect in x-axis, factor ½, 3 left, 2 up gives −4(x + 3)² + 2, vertex (−3, 2); 3f(2x − 4) + 5 takes (2, 4) to (3, 17).
	const w5: Move[] = [{kind: 'reflect', axis: 'y'}, {kind: 'stretch', axis: 'x', factor: 0.5}, {kind: 'slide', axis: 'x', by: -3}, {kind: 'slide', axis: 'y', by: 2}];
	near(imageFn(sq, w5)(-2), -4 + 2, 'g04 write the rule'); {const [p, q] = applyMoves(w5, 0, 0); near(p, -3, 'g04 vertex'); near(q, 2, 'g04 vertex');}
	{const [p, q] = applyMoves([{kind: 'stretch', axis: 'x', factor: 0.5}, {kind: 'slide', axis: 'x', by: 2}, {kind: 'stretch', axis: 'y', factor: 3}, {kind: 'slide', axis: 'y', by: 5}], 2, 4); near(p, 3, 'g04 read'); near(q, 17, 'g04 read');}
	// g05: y = 3/(x − 2) + 1 ledger; −2(x − 3)² + 4 crosses at 3 ± √2 with range y ≤ 4; log₂(x − 1) + 1 has x > 1 and crosses at 3/2.
	const hyp: Move[] = [{kind: 'stretch', axis: 'y', factor: 3}, {kind: 'slide', axis: 'x', by: 2}, {kind: 'slide', axis: 'y', by: 1}];
	const lt = (r: LedgerRow, want: string) => {const got = ledgerTexts(r, hyp)[1]; if (got !== want) throw new Error(`a11-transform-parts self check: g05 ledger "${got}" vs "${want}"`);};
	lt({kind: 'vAsym', value: 0}, 'x = 2'); lt({kind: 'hAsym', value: 0}, 'y = 1'); lt({kind: 'points', pts: [[1, 1], [-1, -1]]}, '(3, 4)\n(1, −2)');
	lt({kind: 'domain', set: {from: -Infinity, to: Infinity, gaps: [0]}}, 'x ≠ 2'); lt({kind: 'range', set: {from: -Infinity, to: Infinity, gaps: [0]}}, 'y ≠ 1');
	const h5 = imageFn(x => 1 / x, hyp); near(h5(0), -0.5, 'g05 y-intercept'); near(h5(-1), 0, 'g05 x-intercept');
	const par: Move[] = [{kind: 'stretch', axis: 'y', factor: -2}, {kind: 'slide', axis: 'x', by: 3}, {kind: 'slide', axis: 'y', by: 4}];
	const pf = imageFn(sq, par); near(pf(3 + Math.SQRT2), 0, 'g05 3 + √2', 1e-12); near(pf(3 - Math.SQRT2), 0, 'g05 3 − √2', 1e-12); near(pf(0), -14, 'g05 y-intercept −14');
	if (axisSetText(mapAxisSet(par, 'y', {from: 0, to: Infinity}), 'y') !== 'y ≤ 4') throw new Error('a11-transform-parts self check: g05 range y ≤ 4');
	const lg: Move[] = [{kind: 'slide', axis: 'x', by: 1}, {kind: 'slide', axis: 'y', by: 1}];
	if (axisSetText(mapAxisSet(lg, 'x', {from: 0, to: Infinity, closedFrom: false}), 'x') !== 'x > 1' || mapLine(lg, 'x', 0) !== 1) throw new Error('a11-transform-parts self check: g05 log');
	near(imageFn(Math.log2, lg)(1.5), 0, 'g05 log intercept 3/2');
	// g05 attempts: 2^(x + 1) − 4 meets the axis at (1, 0), y-intercept −2; 4/(x + 1) − 2 at (1, 0).
	near(imageFn(x => 2 ** x, [{kind: 'slide', axis: 'x', by: -1}, {kind: 'slide', axis: 'y', by: -4}])(1), 0, 'g05 A1'); near(imageFn(x => 1 / x, [{kind: 'stretch', axis: 'y', factor: 4}, {kind: 'slide', axis: 'x', by: -1}, {kind: 'slide', axis: 'y', by: -2}])(1), 0, 'g05 A2');
	// g06: (6, 2) on (x − 3)² + (y + 2)² = 25; x² + y² − 4x + 2y − 11 = 0 is centre (2, −1), r 4; A1 (5, −2), r 3; A2 r² = 10 through (6, 0).
	near(sq(6 - 3) + sq(2 + 2), 25, 'g06 house');
	{const c = circleFromGeneral(-4, 2, -11); near(c.a, 2, 'g06 we-2'); near(c.b, -1, 'g06 we-2'); near(c.r, 4, 'g06 we-2'); near(11 + (-4 / 2) ** 2 + (2 / 2) ** 2, 16, 'g06 balance'); if (cornerText(-4) !== '4' || cornerText(2) !== '1') throw new Error('a11-transform-parts self check: g06 corners');}
	{const c = circleFromGeneral(-10, 4, 20); near(c.a, 5, 'g06 A1'); near(c.b, -2, 'g06 A1'); near(c.r, 3, 'g06 A1');}
	near(sq(0 - 3) + sq(0 + 1), 10, 'g06 A2 origin'); near(sq(6 - 3) + sq(0 + 1), 10, 'g06 A2 (6, 0)');
	if (axisSetText({from: -2, to: 6}, 'x') !== '−2 ≤ x ≤ 6' || axisSetText({from: -Infinity, to: Infinity}, 'x') !== 'all real x') throw new Error('a11-transform-parts self check: set text');
}
