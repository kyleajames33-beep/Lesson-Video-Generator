// Lesson parts for math-a12-f01 (Revision 3: sequences, partial sums, series and sigma; a cricket scoreboard, then
// a stack of chairs), on the maths studio kit. Lesson-local rigs:
// - Scoreboard: the painted scoreboard (brief 240 plate) with coded labels and flip numbers drawn inside its two
//   measured blank panels (TOTAL above, OVER below; Codex's recommended code rects), at native aspect;
// - Grass: the painted grass strip, tiled at native aspect and clipped to its measured grass band (file y 500 to
//   616, inside the alpha box, so the bright low-alpha fringe never shows); Ball: the painted ball, rolling;
// - Ladder: value cards on fixed position slots (own version of the kit ladder: separate label timing, any card size,
//   a sliding window for the run-off, glows, reorder along arcs, step arcs and an end cap);
// - Stack: partial-sum columns (one block per term, blue outline and teal fill; each column is the previous one plus
//   one block), with dimming, a pulsing top block, the S₅ − S₄ overlay, a clip line for the run-off and a squeeze;
// - SigmaBox: a large ∑ with dashed lower, upper and right slots, filled on cue, limits amber and rule blue;
//   Sig: an inline display-style ∑ with its limits; Posts: the counter values as amber posts with numbered gaps;
// - small board parts: Row, Hand, Chip, BoxCard, AnswerBox, Task, FramedCard, Lbl.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {CARD, CARD_SHADOW, FrameSvg, MATH_AMBER, MATH_ANSWER, MATH_BLUE, MATH_MISTAKE, MATH_TEAL, SvgPlate, plateHeight, smooth, usePlatePreload, vis} from '../../math/studio';
import type {PlateSpec} from '../../math/studio';

export const BLUE = MATH_BLUE;
export const TEAL = MATH_TEAL;
export const AMBER = MATH_AMBER;
export const GREEN = MATH_ANSWER;
export const RED = MATH_MISTAKE;
export const SOFT = '#4f4840';
export const POS = '#5f574c'; // positions n: grey ink, full strength
export const BLUE_SOFT = '#dceaf7';
export const TEAL_SOFT = '#d6eeee';
export const AMBER_SOFT = '#f8e8c8';
export const AMBER_STROKE = '#d18f1f';
export const BROWN = '#8a5a12';

// ---------- the numbers (design "Numbers to verify") ----------
export const sum = (a: readonly number[]) => a.reduce((s, v) => s + v, 0);
export const partials = (a: readonly number[]) => a.map((_, i) => sum(a.slice(0, i + 1)));
export const range = (i: number, j: number) => Array.from({length: j - i + 1}, (_, k) => i + k);
export const TEAM_A = [1, 3, 5, 7] as const;
export const TEAM_B = [7, 5, 3, 1] as const;
export const RUNS = [2, 4, 6, 8, 10] as const; // aₙ = 2n
export const RUNS8 = range(1, 8).map(n => 2 * n);
export const P1 = (n: number) => n * n - n + 1;
{
	const eq = (a: readonly number[], b: readonly number[]) => a.length === b.length && a.every((v, i) => v === b[i]);
	const checks: [string, boolean][] = [
		['hook', eq([1, 2, 3, 4].map(t => t ** 3 - 2 * t * t), [-1, 0, 9, 32])],
		['teams', eq(partials(TEAM_A), [1, 4, 9, 16]) && eq(partials(TEAM_B), [7, 12, 15, 16])],
		['2n', eq(RUNS, range(1, 5).map(n => 2 * n)) && eq(partials(RUNS8), [2, 6, 12, 20, 30, 42, 56, 72]) && 2 * 50 === 100],
		['sigma 1', sum(range(1, 4).map(k => 2 * k - 1)) === 16],
		['sigma 2', eq(range(3, 7).map(k => k * k), [9, 16, 25, 36, 49]) && sum(range(3, 7).map(k => k * k)) === 135 && 7 - 3 + 1 === 5],
		['problem 1', eq(range(1, 5).map(P1), [1, 3, 7, 13, 21]) && sum(range(1, 5).map(P1)) === 45],
		['odd', sum(range(1, 10).map(k => 2 * k - 1)) === 100 && 2 * 10 - 1 === 19],
		['A1', eq(range(2, 5).map(k => 4 * k - 3), [5, 9, 13, 17]) && sum([5, 9, 13, 17]) === 44 && sum(range(1, 4).map(k => 4 * k - 3)) === 28],
		['A2', eq(range(1, 4).map(n => 10 - 2 * n), [8, 6, 4, 2]) && sum([8, 6, 4, 2]) === 20],
		['chairs', eq([1, 2, 3].map(n => 80 + 6 * (n - 1)), [80, 86, 92])],
	];
	const bad = checks.filter(k => !k[1]).map(k => k[0]);
	if (bad.length) throw new Error('math-a12-f01 numbers: ' + bad.join(', '));
}

// ---------- plates (brief 240 manifest measurements) ----------
export const BOARD: PlateSpec = {src: 'assets/maths/ma12-cricket-scoreboard-v1.png', nat: [1448, 1086], box: [250, 131, 1193, 978]};
export const BALL: PlateSpec = {src: 'assets/maths/ma12-cricket-ball-v1.png', nat: [1254, 1254], box: [213, 203, 1023, 1055]};
export const GRASS: PlateSpec = {src: 'assets/maths/ma12-cricket-grass-strip-v1.png', nat: [2172, 724], box: [0, 500, 2172, 616]};
export const CHAIR: PlateSpec = {src: 'assets/maths/ma12-stacking-chair-side-v1.png', nat: [1073, 1466], box: [160, 194, 902, 1276]};
const PANEL_TOTAL = [366, 342, 1080, 606] as const;
const PANEL_OVER = [368, 647, 1079, 762] as const;
export const boardH = (w: number) => plateHeight(BOARD, w);
const PANEL_INK = '#eef6ea';

/** A flip: the value folds shut and reopens around each change frame. */
const flipScale = (f: number, flips: readonly number[], d = 10) => flips.reduce((acc, c) => {const u = (f - (c - d / 2)) / d; return u > 0 && u < 1 ? Math.min(acc, Math.abs(1 - 2 * u)) : acc;}, 1);
/** Value from a schedule of [frame, value] (the last entry at or before f). */
export const sched = <T,>(f: number, steps: readonly (readonly [number, T])[], first: T): T => steps.reduce((v, s) => (f >= s[0] ? s[1] : v), first);

/**
 * The painted scoreboard (alpha box top-left at x, y; width w) with coded labels and values in its measured panels.
 * `total` and `over` are shown as given; `flips` fold the numbers around each change. `team` titles the top panel.
 */
export const Scoreboard: React.FC<{x: number; y: number; w: number; total: React.ReactNode; over: React.ReactNode; flips?: readonly number[]; team?: string; totalColor?: string; overColor?: string; ring?: {o: number; color?: string}; at?: number; out?: number; o?: number}> = ({x, y, w, total, over, flips = [], team, totalColor = PANEL_INK, overColor = PANEL_INK, ring, at = -30, out, o: oIn = 1}) => {
	usePlatePreload([BOARD.src]);
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12) * oIn;
	if (o <= 0.001) return null;
	const s = w / (BOARD.box[2] - BOARD.box[0]);
	const R = (r: readonly number[]) => ({x: x + (r[0] - BOARD.box[0]) * s, y: y + (r[1] - BOARD.box[1]) * s, w: (r[2] - r[0]) * s, h: (r[3] - r[1]) * s});
	const T = R(PANEL_TOTAL), O = R(PANEL_OVER);
	const fl = flipScale(f, flips);
	const lab = Math.max(30, Math.min(40, O.h * 0.42));
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o}}>
			<FrameSvg><SvgPlate plate={BOARD} x={x} y={y} w={w} /></FrameSvg>
			<div style={{position: 'absolute', left: T.x + 16, top: T.y + 10, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: lab, letterSpacing: 2, color: PANEL_INK, opacity: 0.92}}>{team ? `${team.toUpperCase()}  TOTAL` : 'TOTAL'}</div>
			<div style={{position: 'absolute', left: T.x, top: T.y + lab * 1.3, width: T.w, height: T.h - lab * 1.3, display: 'flex', alignItems: 'center', justifyContent: 'center', transform: `scaleY(${fl})`, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: Math.min((T.h - lab * 1.3) * 0.8, 150), color: totalColor, fontVariantNumeric: 'tabular-nums', lineHeight: 1}}>{total}</div>
			<div style={{position: 'absolute', left: O.x + 16, top: O.y, height: O.h, display: 'flex', alignItems: 'center', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: lab, letterSpacing: 2, color: PANEL_INK, opacity: 0.92}}>OVER</div>
			<div style={{position: 'absolute', left: O.x + O.w * 0.35, top: O.y, width: O.w * 0.6, height: O.h, display: 'flex', alignItems: 'center', justifyContent: 'center', transform: `scaleY(${fl})`, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: Math.max(30, O.h * 0.7), color: overColor, fontVariantNumeric: 'tabular-nums', lineHeight: 1}}>{over}</div>
			{ring && ring.o > 0.01 ? <FrameSvg><ellipse cx={T.x + T.w / 2} cy={T.y + lab * 1.3 + (T.h - lab * 1.3) / 2} rx={T.w * 0.24} ry={(T.h - lab * 1.3) * 0.46} fill="none" stroke={ring.color ?? '#7fb7ea'} strokeWidth={7} opacity={ring.o} /></FrameSvg> : null}
		</div>
	);
};
/** Frame rectangles of the scoreboard's panels (for tags and rings placed around them). */
export const boardPanels = (x: number, y: number, w: number) => {
	const s = w / (BOARD.box[2] - BOARD.box[0]);
	const R = (r: readonly number[]) => ({x: x + (r[0] - BOARD.box[0]) * s, y: y + (r[1] - BOARD.box[1]) * s, w: (r[2] - r[0]) * s, h: (r[3] - r[1]) * s});
	return {total: R(PANEL_TOTAL), over: R(PANEL_OVER), bottom: y + (BOARD.box[3] - BOARD.box[1]) * s};
};

/** The painted grass strip tiled at native aspect along [x, x + w], grass band h px tall with its top at y. */
export const Grass: React.FC<{x: number; y: number; w: number; h?: number; at?: number; out?: number}> = ({x, y, w, h = 64, at = -30, out}) => {
	usePlatePreload([GRASS.src]);
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.001) return null;
	const tw = (h * (GRASS.box[2] - GRASS.box[0])) / (GRASS.box[3] - GRASS.box[1]);
	const id = `f01g${Math.round(x)}${Math.round(y)}`;
	const tiles = [];
	for (let k = 0; x + k * tw < x + w; k++) tiles.push(<SvgPlate key={k} plate={GRASS} x={x + k * tw} y={y} w={tw} />);
	return <FrameSvg style={{opacity: o}}><defs><clipPath id={id}><rect x={x} y={y} width={w} height={h} rx={6} /></clipPath></defs><g clipPath={`url(#${id})`}>{tiles}</g></FrameSvg>;
};
/** The painted ball, its bottom at groundY, centred on cx, turned by rot degrees. */
export const Ball: React.FC<{cx: number; groundY: number; d?: number; rot?: number; o?: number}> = ({cx, groundY, d = 90, rot = 0, o = 1}) => {
	usePlatePreload([BALL.src]);
	if (o <= 0.01) return null;
	const h = plateHeight(BALL, d);
	return <FrameSvg style={{opacity: o}}><g transform={`rotate(${rot} ${cx} ${groundY - h / 2})`}><SvgPlate plate={BALL} x={cx - d / 2} y={groundY - h} w={d} /></g></FrameSvg>;
};
/** A ball that rolls from x0 to x1 once per start frame (visible only while rolling). */
export const RollingBall: React.FC<{starts: readonly number[]; x0: number; x1: number; groundY: number; dur?: number; d?: number}> = ({starts, x0, x1, groundY, dur = 26, d = 90}) => {
	const f = useCurrentFrame();
	const live = starts.filter(s => f >= s && f < s + dur + 6);
	if (!live.length) return null;
	const s0 = live[live.length - 1];
	const u = Math.min(1, (f - s0) / dur);
	const cx = x0 + (x1 - x0) * (1 - (1 - u) * (1 - u));
	const o = Math.min(1, (f - s0) / 4) * (f > s0 + dur ? 1 - (f - s0 - dur) / 6 : 1);
	return <Ball cx={cx} groundY={groundY} d={d} rot={((cx - x0) / (Math.PI * d)) * 360} o={o} />;
};

// ---------- the ladder ----------
export type LadderProps = {
	x: number; y: number; values: readonly React.ReactNode[]; cardW?: number; h?: number; gap?: number; size?: number; color?: string; stroke?: string;
	labels?: (i: number) => React.ReactNode; labelsAt?: number; labelSize?: number;
	dropAt: number | readonly number[]; stagger?: number;
	glows?: readonly {i: number; at: number; out?: number}[];
	reorder?: {to: readonly number[]; at: number; dur?: number};
	arcs?: readonly {from: number; to: number; label: string; at: number}[];
	endCap?: {after: number; at: number; out?: number};
	/** Slide the cards left by this many slots (fractional); cards outside [clip0, clip1] are hidden. */
	shift?: number; clip?: readonly [number, number];
	/** Dashed empty slots under the cards (position slots before the values arrive). */
	slots?: number; slotsAt?: number;
	o?: number;
};
export const Ladder: React.FC<LadderProps> = ({x, y, values, cardW = 150, h = 100, gap = 24, size = 52, color = BLUE, stroke, labels, labelsAt = -30, labelSize = 30, dropAt, stagger = 10, glows = [], reorder, arcs = [], endCap, shift = 0, clip, slots, slotsAt = -30, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.001) return null;
	const sx = (i: number) => x + (i - shift) * (cardW + gap);
	const at = (i: number) => (typeof dropAt === 'number' ? dropAt + i * stagger : dropAt[i] ?? 1e9);
	const ro = reorder ? smooth(prog(f, reorder.at, reorder.dur ?? 36)) : 0;
	const inClip = (cx: number) => (clip ? Math.max(0, Math.min(1, (cx - clip[0]) / 40, (clip[1] - cx - cardW) / 40)) : 1);
	const lo = prog(f, labelsAt, 12);
	const nSlots = slots ?? values.length;
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o}}>
			{slots === undefined ? null : Array.from({length: nSlots}, (_, i) => {const cx = sx(i); const c = inClip(cx); return c > 0.01 ? <div key={'s' + i} style={{position: 'absolute', left: cx, top: y, width: cardW, height: h, boxSizing: 'border-box', borderRadius: 16, border: `3px dashed ${INK_SOFT}`, opacity: 0.55 * c * prog(f, slotsAt, 12)}} /> : null;})}
			{labels ? Array.from({length: nSlots}, (_, i) => {const cx = sx(i); const c = inClip(cx); return c > 0.01 ? <div key={'l' + i} style={{position: 'absolute', left: cx - 20, top: y + h + 8, width: cardW + 40, textAlign: 'center', fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: labelSize, color: POS, opacity: lo * c, whiteSpace: 'pre'}}>{labels(i)}</div> : null;}) : null}
			{values.map((v, i) => {
				const p = smooth(prog(f, at(i), 14));
				if (p <= 0.001) return null;
				const to = reorder ? reorder.to[i] : i;
				const cx = sx(i) + (sx(to) - sx(i)) * ro;
				const lift = reorder ? -Math.sin(Math.PI * ro) * 70 * (to > i ? 1 : -1) : 0;
				const c = inClip(cx);
				if (c <= 0.01) return null;
				const g = glows.reduce((m, gg) => (gg.i === i ? Math.max(m, vis(f, gg.at, gg.out, 10)) : m), 0);
				return <div key={i} style={{position: 'absolute', left: cx, top: y - (1 - p) * 50 + lift, width: cardW, height: h, opacity: p * c, boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center', background: g > 0 ? `rgba(248,232,200,${0.3 + 0.7 * g})` : CARD, borderRadius: 16, border: `4px solid ${g > 0.5 ? AMBER_STROKE : stroke ?? color}`, boxShadow: CARD_SHADOW, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color, whiteSpace: 'pre', fontVariantNumeric: 'tabular-nums'}}>{v}</div>;
			})}
			<FrameSvg>
				{arcs.map((a, i) => {const x0 = sx(a.from) + cardW / 2, x1 = sx(a.to) + cardW / 2, mid = (x0 + x1) / 2; return <g key={i}><DrawPath d={`M${x0},${y - 8} Q${mid},${y - 76} ${x1},${y - 8}`} at={a.at} dur={14} color={AMBER_STROKE} width={5} /><text x={mid} y={y - 56} textAnchor="middle" opacity={prog(f, a.at + 6, 10)} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, fill: AMBER}} stroke={CARD} strokeWidth={7} paintOrder="stroke">{a.label}</text></g>;})}
				{endCap ? (() => {const ex = sx(endCap.after) + cardW + gap / 2; const co = vis(f, endCap.at, endCap.out, 12); return co > 0.01 ? <g opacity={co} transform={`translate(0 ${endCap.out !== undefined ? -60 * prog(f, endCap.out, 12) : 0})`}><line x1={ex} x2={ex} y1={y - 18} y2={y + h + 18} stroke={INK} strokeWidth={8} strokeLinecap="round" /><line x1={ex - 12} x2={ex + 12} y1={y - 18} y2={y - 18} stroke={INK} strokeWidth={8} strokeLinecap="round" /><line x1={ex - 12} x2={ex + 12} y1={y + h + 18} y2={y + h + 18} stroke={INK} strokeWidth={8} strokeLinecap="round" /></g> : null;})() : null}
			</FrameSvg>
		</div>
	);
};
export const slotX = (x: number, i: number, cardW = 150, gap = 24) => x + i * (cardW + gap);

// ---------- partial-sum stacks ----------
export const subDigits = (n: number) => String(n).split('').map(c => '₀₁₂₃₄₅₆₇₈₉'[+c]).join('');
export type StackProps = {
	x: number; base: number; terms: readonly number[]; buildAt: readonly number[]; blockW?: number; gap?: number; unit?: number;
	labels?: boolean; labelsAt?: number; readouts?: boolean; readoutSize?: number; dim?: (j: number) => number;
	pulse?: readonly {col: number; at: number}[]; diff?: {upper: number; lower: number; at: number}; clipTop?: number; o?: number;
	/** Single column mode: only column `single` (0-based) is drawn, at x. */
	single?: number;
};
export const Stack: React.FC<StackProps> = ({x, base, terms, buildAt, blockW = 110, gap = 36, unit = 18, labels = true, labelsAt = -30, readouts = true, readoutSize = 44, dim, pulse = [], diff, clipTop, o = 1, single}) => {
	const f = useCurrentFrame();
	if (o <= 0.001) return null;
	if (terms.some(t => !(t > 0))) throw new RangeError('f01 Stack: positive terms only');
	const totals = partials(terms);
	const cols = single !== undefined ? [single] : buildAt.map((_, j) => j);
	const cx = (j: number) => (single !== undefined ? x : x + j * (blockW + gap));
	const id = `f01s${Math.round(x)}${Math.round(base)}`;
	const dO = diff ? prog(f, diff.at, 14) : 0;
	return (
		<FrameSvg style={{opacity: o}}>
			{clipTop !== undefined ? <defs><clipPath id={id}><rect x={0} y={clipTop} width={1920} height={1080 - clipTop} /></clipPath></defs> : null}
			<line x1={cx(cols[0]) - 20} x2={cx(cols[cols.length - 1]) + blockW + 20} y1={base} y2={base} stroke={INK} strokeWidth={4} />
			<g clipPath={clipTop !== undefined ? `url(#${id})` : undefined}>
				{cols.map(j => {
					const a = buildAt[j];
					const dj = dim ? dim(j) : 0;
					let yb = base;
					return <g key={j} opacity={1 - 0.45 * dj}>
						{terms.slice(0, j + 1).map((t, k) => {
							const p = smooth(prog(f, a + k * 3, 10));
							const hh = t * unit, yy = yb - hh;
							yb = yy;
							if (p <= 0.001) return null;
							const top = k === j;
							const pu = pulse.reduce((m, q) => (q.col === j && top ? Math.max(m, Math.sin(Math.PI * Math.max(0, Math.min(1, (f - q.at) / 24)))) : m), 0);
							const dg = diff && j === diff.upper && k > diff.lower ? dO : 0;
							return <rect key={k} x={cx(j)} y={yy - (1 - p) * 40} width={blockW} height={hh - 2} rx={5} fill={dg > 0 ? `rgba(220,234,247,${0.4 + 0.6 * dg})` : TEAL_SOFT} stroke={dg > 0 || pu > 0 ? (pu > 0 ? AMBER_STROKE : BLUE) : BLUE} strokeWidth={3 + 4 * Math.max(pu, dg)} opacity={p} />;
						})}
						{labels ? <text x={cx(j) + blockW / 2} y={base + 40} textAnchor="middle" opacity={Math.max(prog(f, labelsAt, 12), prog(f, a, 12))} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, fill: TEAL}}>S{subDigits(j + 1)}</text> : null}
						{readouts && (clipTop === undefined || base - totals[j] * unit - 14 - readoutSize > clipTop) ? <text x={cx(j) + blockW / 2} y={base - totals[j] * unit - 14} textAnchor="middle" opacity={prog(f, a + (j + 1) * 3 + 6, 12)} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: readoutSize, fill: TEAL}} stroke={CARD} strokeWidth={7} paintOrder="stroke">{totals[j]}</text> : null}
					</g>;
				})}
				{diff && dO > 0.01 ? (() => {const yl = base - totals[diff.lower] * unit; return <g opacity={dO}>
					<rect x={cx(diff.upper) - 4} y={yl} width={blockW + 8} height={totals[diff.lower] * unit} rx={6} fill="none" stroke={INK} strokeWidth={4} strokeDasharray="12 8" />
					<line x1={cx(diff.lower)} x2={cx(diff.upper) + blockW + 4} y1={yl} y2={yl} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="8 7" />
				</g>;})() : null}
			</g>
		</FrameSvg>
	);
};

/** A true subscript (the display and hand fonts lack ₖ, ᵢ, ⱼ and ₘ, which would fall back to a serif face). */
export const Sb: React.FC<{children: React.ReactNode}> = ({children}) => <span style={{fontSize: '0.62em', position: 'relative', top: '0.3em', marginLeft: '0.03em'}}>{children}</span>;

// ---------- sigma ----------
/** Inline display-style ∑ with its limits above and below (limit text at least 26 px). */
export const Sig: React.FC<{lo: React.ReactNode; hi: React.ReactNode; size: number; limColor?: string; limSize?: number}> = ({lo, hi, size, limColor = AMBER, limSize}) => {
	const ls = limSize ?? Math.max(28, Math.round(size * 0.5));
	return <span style={{display: 'inline-flex', flexDirection: 'column', alignItems: 'center', verticalAlign: 'middle', lineHeight: 1, margin: '0 0.12em', position: 'relative', top: '-0.06em'}}>
		<span style={{fontSize: ls, color: limColor, fontWeight: 800, lineHeight: 1.05}}>{hi}</span>
		<span style={{fontSize: size * 1.2, fontWeight: 500, lineHeight: 1, padding: '0.06em 0 0.14em'}}>∑</span>
		<span style={{fontSize: ls, color: limColor, fontWeight: 800, lineHeight: 1.1, whiteSpace: 'pre'}}>{lo}</span>
	</span>;
};
/**
 * A large ∑ with three dashed slots (lower start, upper stop, right rule), each filled on cue (limits amber, rule
 * blue by default). (x, y) is the top-left of the ∑ glyph box; `size` its font size. `glow` rings the ∑.
 */
export const SigmaBox: React.FC<{x: number; y: number; size?: number; lower: React.ReactNode; upper: React.ReactNode; rule: React.ReactNode; lowerAt: number; upperAt: number; ruleAt: number; ruleColor?: string; ruleSize?: number; glowAt?: number; glowOut?: number; slotW?: [number, number, number]; o?: number; out?: number}> = ({x, y, size = 190, lower, upper, rule, lowerAt, upperAt, ruleAt, ruleColor = BLUE, ruleSize, glowAt, glowOut, slotW = [220, 120, 360], o: oIn = 1, out}) => {
	const f = useCurrentFrame();
	const o = oIn * (out === undefined ? 1 : 1 - prog(f, out, 12));
	if (o <= 0.001) return null;
	const lim = Math.round(size * 0.3);
	const rs = ruleSize ?? Math.round(size * 0.42);
	const cxs = x + size * 0.31;
	const slots = [
		{l: cxs - slotW[0] / 2, t: y + size * 1.24, w: slotW[0], h: lim * 1.35, at: lowerAt, c: lower, color: AMBER, fs: lim},
		{l: cxs - slotW[1] / 2, t: y - lim * 1.3, w: slotW[1], h: lim * 1.35, at: upperAt, c: upper, color: AMBER, fs: lim},
		{l: x + size * 0.78, t: y + size * 0.62 - rs * 0.72, w: slotW[2], h: rs * 1.44, at: ruleAt, c: rule, color: ruleColor, fs: rs},
	];
	const g = glowAt !== undefined ? vis(f, glowAt, glowOut, 12) : 0;
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o}}>
			{g > 0.01 ? <div style={{position: 'absolute', left: x - size * 0.16, top: y + size * 0.02, width: size * 0.95, height: size * 1.2, borderRadius: '50%', background: AMBER_SOFT, opacity: g}} /> : null}
			<div style={{position: 'absolute', left: x, top: y, fontFamily: FONT_DISPLAY, fontWeight: 500, fontSize: size, lineHeight: 1, color: INK}}>∑</div>
			{slots.map((s, i) => {
				const p = prog(f, s.at, 12);
				return <React.Fragment key={i}>
					<div style={{position: 'absolute', left: s.l, top: s.t, width: s.w, height: s.h, boxSizing: 'border-box', borderRadius: 12, border: `3px dashed ${INK_SOFT}`, opacity: 0.6 * (1 - p)}} />
					<div style={{position: 'absolute', left: i === 2 ? s.l : s.l - 60, top: s.t, width: i === 2 ? undefined : s.w + 120, height: s.h, display: 'flex', alignItems: 'center', justifyContent: i === 2 ? 'flex-start' : 'center', opacity: p, transform: `translateY(${(1 - p) * 10}px)`, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: s.fs, color: s.color, whiteSpace: 'pre'}}>{s.c}</div>
				</React.Fragment>;
			})}
		</div>
	);
};
/** Slot anchor points of a SigmaBox (for hand tags). */
export const sigmaAnchors = (x: number, y: number, size = 190) => ({lower: [x + size * 0.31, y + size * 1.45] as const, upper: [x + size * 0.31, y - size * 0.2] as const, rule: [x + size * 0.78, y + size * 0.62] as const, sigma: [x + size * 0.3, y + size * 0.6] as const});

/** Counter values as amber posts on a line, with numbered gaps, a bracket and the first post ringed. */
export const Posts: React.FC<{x: number; y: number; values: readonly number[]; step?: number; at: number; gapsAt?: number; bracket?: {at: number; label: string}; ring?: {at: number}; counter?: {at: number; stagger?: number}; o?: number}> = ({x, y, values, step = 150, at, gapsAt, bracket, ring, counter, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.001) return null;
	const px = (i: number) => x + i * step;
	const n = values.length;
	return (
		<FrameSvg style={{opacity: o}}>
			<line x1={px(0) - 30} x2={px(n - 1) + 30} y1={y} y2={y} stroke={INK} strokeWidth={4} opacity={prog(f, at, 12)} />
			{values.map((v, i) => {const p = prog(f, at + i * 5, 10); return <g key={i} opacity={p}>
				<line x1={px(i)} x2={px(i)} y1={y - 60} y2={y} stroke={AMBER_STROKE} strokeWidth={10} strokeLinecap="round" />
				<text x={px(i)} y={y + 52} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 48, fill: AMBER}}>{v}</text>
			</g>;})}
			{gapsAt !== undefined ? values.slice(1).map((_, i) => {const a = gapsAt + i * 8; return <g key={'g' + i}>
				<DrawPath d={`M${px(i) + 10},${y - 70} Q${(px(i) + px(i + 1)) / 2},${y - 112} ${px(i + 1) - 10},${y - 70}`} at={a} dur={10} color={INK_SOFT} width={4} />
				<text x={(px(i) + px(i + 1)) / 2} y={y - 114} textAnchor="middle" opacity={prog(f, a + 4, 8)} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, fill: INK}}>{i + 1}</text>
			</g>;}) : null}
			{bracket ? <g opacity={prog(f, bracket.at, 12)}>
				<path d={`M${px(0)},${y - 150} v-14 H${px(n - 1)} v14`} stroke={INK} strokeWidth={4} fill="none" />
				<text x={(px(0) + px(n - 1)) / 2} y={y - 180} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, fill: INK}} stroke={CARD} strokeWidth={7} paintOrder="stroke">{bracket.label}</text>
			</g> : null}
			{ring ? <g opacity={prog(f, ring.at, 12)}>
				<ellipse cx={px(0)} cy={y + 8} rx={42} ry={78} fill="none" stroke={AMBER_STROKE} strokeWidth={5} />
			</g> : null}
			{counter ? values.map((_, i) => {const a = counter.at + i * (counter.stagger ?? 10); return <g key={'c' + i} opacity={prog(f, a, 8)}><circle cx={px(i)} cy={y + 100} r={24} fill={TEAL_SOFT} stroke={TEAL} strokeWidth={3} /><text x={px(i)} y={y + 111} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: TEAL}}>{i + 1}</text></g>;}) : null}
		</FrameSvg>
	);
};

// ---------- board parts ----------
/** A working row at a fixed position that writes on at `at`; `dim` (0..1) shrinks it to `small` and softens it. */
export const Row: React.FC<{x: number; y: number; at: number; out?: number; size?: number; small?: number; dim?: number; color?: string; children: React.ReactNode}> = ({x, y, at, out, size = 52, small = 38, dim = 0, color = INK, children}) => {
	const fr = useCurrentFrame();
	const o = vis(fr, at, out, 12);
	if (o <= 0.001) return null;
	const d = Math.max(0, Math.min(1, dim));
	return <div style={{position: 'absolute', left: x, top: y, opacity: o, transform: `translateY(${(1 - prog(fr, at, 12)) * 10}px)`, fontFamily: FONT_DISPLAY, fontWeight: d > 0.5 ? 700 : 800, fontSize: size + (small - size) * d, color, whiteSpace: 'pre', lineHeight: 1.2}}>{children}</div>;
};
/** A hand-font tag in frame space. */
export const Hand: React.FC<{x: number; y: number; at: number; out?: number; size?: number; color?: string; w?: number; align?: 'left' | 'center' | 'right'; children: React.ReactNode}> = ({x, y, at, out, size = 40, color = INK, w, align = 'left', children}) => {
	const fr = useCurrentFrame();
	const o = vis(fr, at, out, 12);
	if (o <= 0.001) return null;
	return <div style={{position: 'absolute', left: x, top: y, width: w, opacity: o, textAlign: align, fontFamily: FONT_HAND, fontWeight: 700, fontSize: size, color, whiteSpace: w ? 'normal' : 'pre', lineHeight: 1.1}}>{children}</div>;
};
/** A rounded chip with a coloured border. */
export const Chip: React.FC<{x: number; y: number; at: number; out?: number; size?: number; color?: string; fill?: string; children: React.ReactNode}> = ({x, y, at, out, size = 44, color = INK, fill = CARD, children}) => {
	const fr = useCurrentFrame();
	const o = vis(fr, at, out, 12);
	if (o <= 0.001) return null;
	return <div style={{position: 'absolute', left: x, top: y, opacity: o, transform: `scale(${0.94 + 0.06 * smooth(prog(fr, at, 14))})`, transformOrigin: 'left center', background: fill, border: `4px solid ${color}`, borderRadius: 18, padding: '6px 22px 8px', boxShadow: CARD_SHADOW, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color, whiteSpace: 'pre', lineHeight: 1.2}}>{children}</div>;
};
/** A paper card with an optional uppercase title. */
export const BoxCard: React.FC<{x: number; y: number; w?: number; at: number; out?: number; size?: number; title?: string; edge?: string; children: React.ReactNode}> = ({x, y, w, at, out, size = 38, title, edge, children}) => {
	const fr = useCurrentFrame();
	const o = vis(fr, at, out, 12);
	if (o <= 0.001) return null;
	return <div style={{position: 'absolute', left: x, top: y, width: w, opacity: o, transform: `translateY(${(1 - prog(fr, at, 14)) * 12}px)`, boxSizing: 'border-box', background: CARD, borderRadius: 18, padding: '10px 26px 14px', boxShadow: CARD_SHADOW, border: '2.5px solid rgba(60,45,20,0.12)', borderLeft: edge ? `10px solid ${edge}` : undefined, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: size, color: INK, lineHeight: 1.28}}>
		{title ? <div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: SOFT, textTransform: 'uppercase', marginBottom: 2}}>{title}</div> : null}
		{children}
	</div>;
};
/** Green framed answer. */
export const AnswerBox: React.FC<{x: number; y: number; at: number; out?: number; size?: number; children: React.ReactNode}> = ({x, y, at, out, size = 52, children}) => {
	const fr = useCurrentFrame();
	const o = vis(fr, at, out, 12);
	if (o <= 0.001) return null;
	return <div style={{position: 'absolute', left: x, top: y, opacity: o, transform: `scale(${0.92 + 0.08 * smooth(prog(fr, at, 14))})`, transformOrigin: 'left center', background: CARD, border: `5px solid ${GREEN}`, borderRadius: 18, padding: '6px 26px 10px', boxShadow: '0 12px 26px rgba(40,115,71,0.16)', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: GREEN, whiteSpace: 'pre', lineHeight: 1.2, display: 'flex', alignItems: 'center'}}>{children}</div>;
};
/** The g01 task card. */
export const Task: React.FC<{x: number; y: number; w: number; at: number; out?: number; size?: number; children: React.ReactNode}> = ({x, y, w, at, out, size = 44, children}) => {
	const fr = useCurrentFrame();
	const o = vis(fr, at, out, 12);
	if (o <= 0.001) return null;
	return <div style={{position: 'absolute', left: x, top: y, width: w, opacity: o, background: CARD, borderRadius: 18, borderLeft: `10px solid ${BROWN}`, boxShadow: CARD_SHADOW, padding: '8px 26px 12px', boxSizing: 'border-box'}}>
		<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: SOFT}}>TASK</div>
		<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: size, color: INK, lineHeight: 1.3}}>{children}</div>
	</div>;
};
/** Framed card (double ink rule) for the memory aid and the notes card. */
export const FramedCard: React.FC<{x: number; y: number; w: number; h: number; at?: number; children?: React.ReactNode}> = ({x, y, w, h, at = -30, children}) => {
	const f = useCurrentFrame();
	return <div style={{position: 'absolute', left: x, top: y, width: w, height: h, opacity: prog(f, at, 14), boxSizing: 'border-box', background: CARD, border: `4px solid ${INK}`, borderRadius: 24, boxShadow: `inset 0 0 0 8px ${CARD}, inset 0 0 0 10.5px ${INK}, ${CARD_SHADOW}`}}>{children}</div>;
};
/** Text label in frame space (SVG), stroked on paper. */
export const Lbl: React.FC<{x: number; y: number; text: React.ReactNode; color?: string; size?: number; anchor?: 'start' | 'middle' | 'end'; hand?: boolean; o?: number}> = ({x, y, text, color = INK, size = 34, anchor = 'start', hand = false, o = 1}) => (o <= 0.01 ? null :
	<text x={x} y={y} textAnchor={anchor} opacity={o} style={{fontFamily: hand ? FONT_HAND : FONT_DISPLAY, fontWeight: hand ? 700 : 800, fontSize: size, fill: color}} stroke={CARD} strokeWidth={8} paintOrder="stroke">{text}</text>);
/** A red crossed slip with a hand caption (the classic mistake). */
export const Slip: React.FC<{x: number; y: number; at: number; size?: number; caption: string; w?: number; strikeAt?: number; children: React.ReactNode}> = ({x, y, at, size = 46, caption, w, strikeAt, children}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.001) return null;
	const sa = strikeAt ?? at + 12;
	const s = prog(f, sa, 12);
	return <div style={{position: 'absolute', left: x, top: y, width: w, opacity: o, background: CARD, border: `3px solid ${RED}`, borderRadius: 18, padding: '10px 24px 12px', boxShadow: CARD_SHADOW}}>
		<div style={{position: 'relative', display: 'inline-flex', alignItems: 'center', fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: size, color: INK_SOFT, whiteSpace: 'pre'}}>
			{children}
			<svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{position: 'absolute', left: -8, top: 0, width: 'calc(100% + 16px)', height: '100%', overflow: 'visible'}}>
				<path d="M0,64 Q50,50 100,38" stroke={RED} strokeWidth={6} vectorEffect="non-scaling-stroke" fill="none" strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - s} />
			</svg>
		</div>
		<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: RED, opacity: prog(f, sa + 10, 12), lineHeight: 1.1}}>{caption}</div>
	</div>;
};
