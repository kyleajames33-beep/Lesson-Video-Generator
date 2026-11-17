// Year 11 Advanced kit, wave 3 (brief 245, maths-a11-kit-needs-g-s.md items 7 to 11 and 14): set and probability
// parts for s01 to s09. SetBraces and SubsetTest (s01: tokens dropping into braces, a repeat bouncing off, a
// reorder that changes nothing, the |A| badge, the subset test with ticks and crosses), OutcomeArray (s01, s04 to
// s07, s09: cells or tokens in a grid or a U rectangle, predicate lighting, restrict, ordered draws without the
// diagonal, neutral row bands, relabels and a live count), VennDiagram (s02 to s05, s07, s08: counts, decimals or
// tokens in four regions, shading, the disjoint slide, the restrict-to-B mode, member dots with the double-count
// ticks, and a regions-add-to-|U| sum), ProbabilityTree (s06 to s08: branches growing by stage, products at the tips,
// path lighting, dimming, a rider and a summed event row, exact fractions where given), TwoWayTable (s07, s08:
// totals computed, restrict to a row or column with its total boxed, the box sliding to a new given) and
// DotsVsInterval (s09: separate values against a solid interval). OutcomeGrid in prob-parts.tsx is unchanged.
// HSC style (root ruling 8 and the s06 decision): letters and numbers only inside regions, cells and branches; no
// pictures. Roles: A blue (a), B teal (b), A ∩ B violet (gradient), complement and "neither" amber (k); coded counters
// and their branches neutral (ink and grey), lettered.
import React, {useId} from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, PAPER, PAPER_DEEP, prog} from '../../kit';
import {CARD, CARD_SHADOW, FrameSvg, niceNum, smooth, vis} from './primitives';
import {MATH_ANSWER, MATH_EXCLUDED, MATH_MISTAKE, MATH_ROLES, RoleKey, roleInk, roleStroke} from './roles';
import {TXT} from './plot-core';
import {measureText} from './a11-function-parts';

const lerp = (a: number, b: number, u: number) => a + (b - a) * u;
const clamp01 = (u: number) => Math.max(0, Math.min(1, u));
const haloText = (size: number, color: string, weight = 800): React.SVGProps<SVGTextElement> => ({style: {...TXT(size, color, weight), fontVariantNumeric: 'tabular-nums'}, stroke: CARD, strokeWidth: 8, paintOrder: 'stroke'} as React.SVGProps<SVGTextElement>);
const DIM_FILL = '#ebe6dc';
const NEUTRAL_BAND = '#e4ded2';
const pulseAt = (f: number, at: number, len = 40) => (f >= at && f < at + len ? Math.sin(((f - at) / len) * Math.PI) : 0);

// =====================================================================================================
// Exact fractions (tree branches, shares)
// =====================================================================================================
/** A probability as a decimal or an exact fraction [numerator, denominator] (kept as written on a branch). */
export type Frac = number | readonly [number, number];
const gcd = (a: number, b: number): number => {a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a || 1;};
export const fracValue = (p: Frac) => (typeof p === 'number' ? p : p[0] / p[1]);
/** Lowest terms of n/d. */
export const reduceFrac = (n: number, d: number): [number, number] => {const g = gcd(n, d); return d < 0 ? [-n / g, -d / g] : [n / g, d / g];};
/** "½" for one half, "n/d" otherwise (as written, not reduced). */
export const fracText = (p: Frac) => (typeof p === 'number' ? decText(p) : p[0] === 1 && p[1] === 2 ? '½' : `${p[0]}/${p[1]}`);
/** A decimal with at most 4 places and no trailing zeros: 0.42, 0.18, 0.005. */
export const decText = (v: number, max = 4) => {
	const s = (Math.round(v * 10 ** max) / 10 ** max).toFixed(max).replace(/0+$/, '').replace(/\.$/, '');
	return s.startsWith('-') ? '−' + s.slice(1) : s;
};
/** Product of probabilities: exact (reduced) when every factor is a fraction, otherwise a decimal. */
export const fracProduct = (ps: readonly Frac[]): Frac => {
	if (ps.every(p => typeof p !== 'number')) {
		let n = 1, d = 1;
		ps.forEach(p => {n *= (p as readonly [number, number])[0]; d *= (p as readonly [number, number])[1];});
		return reduceFrac(n, d);
	}
	return ps.reduce<number>((s, p) => s * fracValue(p), 1);
};
/** Sum of probabilities: exact (reduced) when every term is a fraction, otherwise a decimal. */
export const fracSum = (ps: readonly Frac[]): Frac => {
	if (ps.every(p => typeof p !== 'number')) {
		let n = 0, d = 1;
		ps.forEach(p => {const [a, b] = p as readonly [number, number]; n = n * b + a * d; d *= b; [n, d] = reduceFrac(n, d);});
		return reduceFrac(n, d);
	}
	return ps.reduce<number>((s, p) => s + fracValue(p), 0);
};
const fracOut = (p: Frac) => (typeof p === 'number' ? decText(p) : p[1] === 1 ? String(p[0]) : `${p[0]}/${p[1]}`);

// =====================================================================================================
// SetBraces and SubsetTest (s01)
// =====================================================================================================
type Elem = string | number;
const elemText = (e: Elem) => (typeof e === 'number' ? niceNum(e) : e);
/** Token x offsets for "Name = {a, b, c}" (left edges, relative to the set's left), and the closing brace's x. */
const braceLayout = (name: string | undefined, els: readonly Elem[], size: number, ellipsis: boolean) => {
	const lead = name ? measureText(`${name} = `, size) : 0;
	const bw = measureText('{', size * 1.15, 700) + size * 0.18;
	const comma = measureText(', ', size);
	let cx = lead + bw;
	const xs: number[] = [], ws: number[] = [];
	els.forEach((e, i) => {xs.push(cx); const w = measureText(elemText(e), size); ws.push(w); cx += w + (i < els.length - 1 || ellipsis ? comma : 0);});
	const ellX = cx;
	if (ellipsis) cx += measureText('…', size);
	if (!els.length && !ellipsis) cx += size * 0.6;
	return {lead, bw, xs, ws, ellX, close: cx + size * 0.12, comma};
};
/**
 * A set in braces (s01): "E = {2, 4, 6}". Tokens drop in at `drop` (staggered) in the role colour; `order` moves the
 * tokens to a new order (the same set); `reject` sends a repeated element at the braces, which bounces off and fades;
 * `ellipsis` writes "…" last (an infinite set); `badge` lights the tokens one by one while "|E| = n" counts up.
 * `empty` writes "?" inside empty braces. Positioned with (x, y) at the left of the text's middle line.
 */
export const SetBraces: React.FC<{
	x: number; y: number; name?: string; elements: readonly Elem[]; role?: RoleKey; size?: number; at?: number; out?: number;
	drop?: {at: number; stagger?: number}; order?: {to: readonly Elem[]; at: number; dur?: number};
	reject?: {element: Elem; at: number}; ellipsis?: {at: number} | boolean; badge?: {at: number; stagger?: number; x?: number; y?: number; size?: number; symbol?: string};
	empty?: string; nameColor?: string;
	/** Braces and commas only: the tokens are drawn by a parent (SubsetTest's flights). */
	hideTokens?: boolean;
}> = ({x, y, name, elements, role = 'a', size = 52, at = 0, out, drop, order, reject, ellipsis, badge, empty, nameColor = INK, hideTokens = false}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.001) return null;
	const R = MATH_ROLES[role];
	const ell = !!ellipsis;
	const L0 = braceLayout(name, elements, size, ell);
	const L1 = order ? braceLayout(name, order.to, size, ell) : L0;
	const ou = order ? smooth(clamp01((f - order.at) / (order.dur ?? 30))) : 0;
	const close = lerp(L0.close, L1.close, ou);
	const eo = typeof ellipsis === 'object' ? prog(f, ellipsis.at, 12) : ell ? 1 : 0;
	const top = y - size * 0.62;
	const span = (left: number, text: string, color: string, extra: React.CSSProperties = {}, key?: string | number) => (
		<span key={key} style={{position: 'absolute', left: x + left, top, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, lineHeight: 1.2, color, whiteSpace: 'pre', ...extra}}>{text}</span>
	);
	const badgeLit = badge ? Math.max(0, Math.min(elements.length, Math.floor((f - badge.at) / (badge.stagger ?? 12)) + 1)) : 0;
	const rj = reject ? clamp01((f - reject.at) / 40) : 0;
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o, pointerEvents: 'none'}}>
			{name ? span(0, `${name} = `, nameColor) : null}
			{span(L0.lead, '{', INK, {fontSize: size * 1.15, fontWeight: 700, top: top - size * 0.1})}
			{elements.map((e, i) => {
				const j = order ? order.to.findIndex(t => elemText(t) === elemText(e)) : i;
				const left = lerp(L0.xs[i], L1.xs[Math.max(0, j)], ou);
				const d = drop ? smooth(clamp01((f - drop.at - i * (drop.stagger ?? 8)) / 14)) : 1;
				if (d <= 0) return null;
				const lit = badge && i < badgeLit;
				const lift = order ? Math.sin(ou * Math.PI) * size * 0.7 * (i % 2 ? 1 : -1) : 0;
				const comma = (order ? j : i) < elements.length - 1 || ell;
				return <React.Fragment key={i}>
					{hideTokens ? null : span(left, elemText(e), R.ink, {opacity: d, transform: `translateY(${(1 - d) * -size * 1.6 + lift}px)`, background: lit ? R.soft : undefined, borderRadius: 10, outline: lit ? `3px solid ${R.stroke}` : undefined})}
					{comma && d >= 1 ? span(left + L0.ws[i], ',', INK_SOFT, {opacity: 1 - Math.sin(ou * Math.PI)}) : null}
				</React.Fragment>;
			})}
			{ell && eo > 0 ? span(L0.ellX, '…', R.ink, {opacity: eo}) : null}
			{!elements.length && empty ? span(L0.lead + L0.bw, empty, INK_SOFT) : null}
			{span(close, '}', INK, {fontSize: size * 1.15, fontWeight: 700, top: top - size * 0.1})}
			{reject && rj > 0 && rj < 1 ? (() => {
				// Flies in from the right towards the closing brace, bounces back and fades.
				const u = rj < 0.5 ? smooth(rj * 2) : 1 - 0.6 * smooth((rj - 0.5) * 2);
				const left = lerp(close + size * 4, close + size * 0.9, u);
				return span(left, elemText(reject.element), R.ink, {opacity: rj < 0.5 ? 1 : 1 - (rj - 0.5) * 2, transform: `rotate(${rj > 0.5 ? (rj - 0.5) * 40 : 0}deg)`});
			})() : null}
			{badge && f >= badge.at ? (() => {
				const bs = badge.size ?? size;
				return <div style={{position: 'absolute', left: badge.x ?? x + close + size * 1.2, top: (badge.y ?? y) - bs * 0.7, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: bs, color: INK, background: CARD, border: `4px solid ${R.stroke}`, borderRadius: 16, padding: '2px 18px', boxShadow: CARD_SHADOW, fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap'}}>
					{`|${badge.symbol ?? name ?? 'A'}| = ${badgeLit}`}
				</div>;
			})() : null}
		</div>
	);
};
/**
 * The subset test (s01 scene 6 and feedback 2): set B in braces above, set A below. From testAt, each element of A
 * flies up to B: it ticks green where B holds it and bounces back with a red cross where it does not. The verdict
 * "A ⊆ B" or "A ⊈ B" is computed and framed at verdictAt. An empty A (name "∅") passes with nothing to test.
 */
export const SubsetTest: React.FC<{
	x: number; y: number; a: {name: string; elements: readonly Elem[]; role?: RoleKey}; b: {name: string; elements: readonly Elem[]; role?: RoleKey};
	at?: number; out?: number; testAt: number; stagger?: number; verdictAt?: number; size?: number; gapY?: number; verdictX?: number;
}> = ({x, y, a, b, at = 0, out, testAt, stagger = 30, verdictAt, size = 52, gapY = 150, verdictX}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.001) return null;
	const inB = (e: Elem) => b.elements.some(t => elemText(t) === elemText(e));
	const subset = a.elements.every(inB);
	const LA = braceLayout(a.name === '∅' ? undefined : a.name, a.elements, size, false), LB = braceLayout(b.name, b.elements, size, false);
	const yA = y + gapY;
	const vo = verdictAt === undefined ? 0 : prog(f, verdictAt, 14);
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o, pointerEvents: 'none'}}>
			<SetBraces x={x} y={y} name={b.name} elements={b.elements} role={b.role ?? 'b'} size={size} />
			{a.name === '∅'
				? <div style={{position: 'absolute', left: x, top: yA - size * 0.62, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: roleInk(a.role ?? 'a')}}>∅</div>
				: <SetBraces x={x} y={yA} name={a.name} elements={a.elements} size={size} role={a.role ?? 'a'} hideTokens />}
			{a.elements.map((e, i) => {
				const t0 = testAt + i * stagger, u = clamp01((f - t0) / 22);
				const hit = inB(e), j = b.elements.findIndex(t => elemText(t) === elemText(e));
				const fromX = x + LA.xs[i], fromY = yA;
				const toX = hit ? x + LB.xs[j] : x + LB.close + size * 0.4, toY = y + size * 0.9;
				// A hit waits under its match with a tick, then returns; a miss bounces straight back with a cross.
				const back = f > t0 + (hit ? 40 : 22) ? smooth(clamp01((f - t0 - (hit ? 40 : 22)) / 16)) : 0;
				const px = lerp(lerp(fromX, toX, smooth(u)), fromX, back), py = lerp(lerp(fromY, toY, smooth(u)), fromY, back);
				const mark = f >= t0 + 22;
				return <div key={i} style={{position: 'absolute', left: px, top: py - size * 0.62, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, lineHeight: 1.2, color: roleInk(a.role ?? 'a')}}>
					{elemText(e)}
					{mark ? <span style={{position: 'absolute', left: '100%', top: -size * 0.35, marginLeft: 4, fontSize: size * 0.8, color: hit ? MATH_ANSWER : MATH_MISTAKE}}>{hit ? '✓' : '✗'}</span> : null}
				</div>;
			})}
			{vo > 0 ? <div style={{position: 'absolute', left: verdictX ?? x + Math.max(LA.close, LB.close) + size * 2, top: yA - size * 0.75, opacity: vo, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: INK, border: `5px solid ${MATH_ANSWER}`, borderRadius: 16, padding: '2px 20px', background: CARD, whiteSpace: 'nowrap'}}>
				{`${a.name} ${subset ? '⊆' : '⊈'} ${b.name}`}
			</div> : null}
		</div>
	);
};

// =====================================================================================================
// OutcomeArray (s01, s04 to s07, s09)
// =====================================================================================================
export type CellPred = (r: number, c: number) => boolean;
export type ArrayLight = {pred: CellPred; at: number; out?: number; role?: RoleKey; stagger?: number};
/** The three layers that show A ∪ B by region: A only blue, B only teal, both violet. */
export const unionLights = (A: CellPred, B: CellPred, at: number, out?: number, stagger?: number): ArrayLight[] => [
	{pred: (r, c) => A(r, c) && !B(r, c), at, out, role: 'a', stagger},
	{pred: (r, c) => B(r, c) && !A(r, c), at, out, role: 'b', stagger},
	{pred: (r, c) => A(r, c) && B(r, c), at, out, role: 'gradient', stagger},
];
/** Number of cells matching `pred` in a rows × cols array (ordered: rows × (rows − 1), the diagonal left out). */
export const countCells = (rows: number, cols: number, pred: CellPred, ordered = false) => {
	let n = 0;
	const C = ordered ? rows - 1 : cols;
	for (let r = 0; r < rows; r++) for (let c = 0; c < C; c++) {const j = ordered ? (c < r ? c : c + 1) : c; if (pred(r, j)) n++;}
	return n;
};
/**
 * An outcome array (HSC style, letters and numbers only): rows × cols cells (or round tokens) labelled by text(r, c),
 * optionally inside a U or S rectangle (`frame`). Cells appear at `fillAt` (row or column order). `lights` colour the
 * cells of an event given as a rule, later layers on top; `restrict` greys every cell outside an event (the new
 * sample space); `relabel` swaps every cell's text at a cue (a rule card: totals, larger number, |difference|);
 * `ordered` draws n × (n − 1) cells for two draws without replacement, column c meaning the item j ≠ r (pred and
 * text get (r, j)); `bands` put a neutral grey band behind named rows; `tally` writes the live count over the
 * current denominator (the restricted count once `restrict` is on). `fill` gives a token its object colour.
 */
export const OutcomeArray: React.FC<{
	x: number; y: number; rows: number; cols: number; cell?: number; shape?: 'cell' | 'token';
	text: (r: number, c: number) => string; relabel?: readonly {text: (r: number, c: number) => string; at: number}[];
	rowLabels?: readonly string[]; colLabels?: readonly string[]; rowTitle?: {text: string; role?: RoleKey}; colTitle?: {text: string; role?: RoleKey};
	fill?: (r: number, c: number) => string | undefined; fillAt?: number; fillStagger?: number; fillOrder?: 'row' | 'col';
	lights?: readonly ArrayLight[]; restrict?: {pred: CellPred; at: number; out?: number};
	rings?: readonly {r: number; c: number; at: number; out?: number; role?: RoleKey}[];
	bands?: readonly {rows: readonly number[]; label?: string; at: number; out?: number}[];
	tally?: {pred: CellPred; at: number; out?: number; x: number; y: number; size?: number; text?: (n: number, N: number) => string; role?: RoleKey};
	ordered?: boolean; frame?: {label: string; pad?: number; at?: number}; size?: number; textColor?: (r: number, c: number) => string | undefined;
	at?: number; out?: number;
}> = ({x, y, rows, cols, cell = 96, shape = 'cell', text, relabel = [], rowLabels, colLabels, rowTitle, colTitle, fill, fillAt, fillStagger = 2, fillOrder = 'row', lights = [], restrict, rings = [], bands = [], tally, ordered = false, frame, size, textColor, at = 0, out}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const C = ordered ? rows - 1 : cols;
	const fs = size ?? Math.round(cell * 0.36);
	const jOf = (r: number, c: number) => (ordered ? (c < r ? c : c + 1) : c);
	// Per-layer order index of each matching cell (for staggered lighting).
	const layerIdx = lights.map(L => {const m = new Map<string, number>(); let k = 0; for (let r = 0; r < rows; r++) for (let c = 0; c < C; c++) if (L.pred(r, jOf(r, c))) m.set(`${r},${c}`, k++); return m;});
	const ro = restrict ? vis(f, restrict.at, restrict.out, 16) : 0;
	const pad = frame?.pad ?? 26;
	const cellsEls: React.ReactNode[] = [];
	for (let r = 0; r < rows; r++) for (let c = 0; c < C; c++) {
		const j = jOf(r, c);
		const idx = fillOrder === 'row' ? r * C + c : c * rows + r;
		const fo = fillAt === undefined ? 1 : prog(f, fillAt + idx * fillStagger, 8);
		if (fo <= 0.001) continue;
		let role: RoleKey | null = null, lo = 0;
		lights.forEach((L, li) => {
			const k = layerIdx[li].get(`${r},${c}`);
			if (k === undefined) return;
			const v = vis(f, L.at + k * (L.stagger ?? 0), L.out, 8);
			if (v > 0.001) {role = L.role ?? 'k'; lo = v;}
		});
		const dim = restrict && !restrict.pred(r, j) ? ro : 0;
		const Rl = role ? MATH_ROLES[role as RoleKey] : null;
		const base = fill?.(r, j);
		const gx = x + c * cell, gy = y + r * cell;
		let tx = text(r, j), tAlpha = 1;
		for (let q = 0; q < relabel.length; q++) {
			const u = prog(f, relabel[q].at, 14);
			if (u <= 0) break;
			if (u < 1) tAlpha = Math.abs(u - 0.5) * 2;
			tx = u < 0.5 ? (q ? relabel[q - 1].text(r, j) : text(r, j)) : relabel[q].text(r, j);
		}
		const tc = dim > 0.5 ? MATH_EXCLUDED : Rl && lo > 0.5 ? Rl.ink : base ? '#ffffff' : textColor?.(r, j) ?? INK;
		const fillCol = dim > 0 ? DIM_FILL : Rl && lo > 0 ? Rl.soft : base ?? CARD;
		const stroke = dim > 0 ? '#cfc8bb' : Rl && lo > 0 ? Rl.stroke : base ? 'rgba(0,0,0,0.25)' : INK_SOFT;
		cellsEls.push(<g key={`${r},${c}`} opacity={fo * (1 - 0.55 * dim)}>
			{shape === 'cell'
				? <rect x={gx + 3} y={gy + 3} width={cell - 6} height={cell - 6} rx={8} fill={fillCol} stroke={stroke} strokeWidth={Rl && lo > 0 ? 5 : 2.5} />
				: <circle cx={gx + cell / 2} cy={gy + cell / 2} r={cell / 2 - 6} fill={fillCol} stroke={stroke} strokeWidth={Rl && lo > 0 ? 5 : 2.5} />}
			<text x={gx + cell / 2} y={gy + cell / 2 + fs * 0.36} textAnchor="middle" opacity={tAlpha} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: fs, fill: tc, fontVariantNumeric: 'tabular-nums'}}>{tx}</text>
		</g>);
	}
	const W2 = C * cell, H2 = rows * cell;
	const fo2 = frame ? prog(f, frame.at ?? at, 12) : 0;
	const tN = tally ? countCells(rows, cols, (r, c) => tally.pred(r, c) && (!restrict || ro < 0.5 || restrict.pred(r, c)), ordered) : 0;
	const tD = restrict && ro >= 0.5 ? countCells(rows, cols, restrict.pred, ordered) : rows * C;
	const to = tally ? vis(f, tally.at, tally.out, 12) : 0;
	return (
		<FrameSvg style={{opacity: o}}>
			{frame ? <g opacity={fo2}>
				<rect x={x - pad} y={y - pad - 56} width={W2 + 2 * pad} height={H2 + 2 * pad + 56} rx={14} fill="none" stroke={INK} strokeWidth={4} />
				<text x={x - pad + 20} y={y - pad - 14} style={TXT(36, INK, 800)}>{frame.label}</text>
			</g> : null}
			{bands.map((bd, i) => {
				const bo = vis(f, bd.at, bd.out, 12);
				if (bo <= 0.001) return null;
				const rs = [...bd.rows].sort((p, q) => p - q);
				// One band per run of consecutive rows.
				const runs: number[][] = [];
				rs.forEach(r => {const last = runs[runs.length - 1]; if (last && last[last.length - 1] === r - 1) last.push(r); else runs.push([r]);});
				return <g key={'b' + i} opacity={bo}>
					{runs.map((run, k) => <rect key={k} x={x - 14} y={y + run[0] * cell - 2} width={W2 + 28} height={run.length * cell + 4} rx={12} fill={NEUTRAL_BAND} />)}
					{bd.label ? <text x={x + W2 + 28} y={y + runs[0][0] * cell + cell * 0.6} style={TXT(32, INK_SOFT, 800)}>{bd.label}</text> : null}
				</g>;
			})}
			{colTitle ? <text x={x + W2 / 2} y={y - (colLabels ? 66 : 22)} textAnchor="middle" style={TXT(34, roleInk(colTitle.role), 800)}>{colTitle.text}</text> : null}
			{rowTitle ? <text x={x - (rowLabels ? 70 : 24)} y={y + H2 / 2} textAnchor="middle" transform={`rotate(-90 ${x - (rowLabels ? 70 : 24)} ${y + H2 / 2})`} style={TXT(34, roleInk(rowTitle.role), 800)}>{rowTitle.text}</text> : null}
			{colLabels && !ordered ? colLabels.map((l, c) => <text key={'cl' + c} x={x + c * cell + cell / 2} y={y - 18} textAnchor="middle" style={TXT(32, roleInk(colTitle?.role), 800)}>{l}</text>) : null}
			{rowLabels ? rowLabels.map((l, r) => <text key={'rl' + r} x={x - 18} y={y + r * cell + cell / 2 + 12} textAnchor="end" style={TXT(32, roleInk(rowTitle?.role), 800)}>{l}</text>) : null}
			{cellsEls}
			{rings.map((g, i) => {
				const go = vis(f, g.at, g.out, 10);
				if (go <= 0.001) return null;
				const c = ordered ? (g.c < g.r ? g.c : g.c - 1) : g.c;
				return <rect key={'rg' + i} x={x + c * cell - 4} y={y + g.r * cell - 4} width={cell + 8} height={cell + 8} rx={14} fill="none" stroke={roleStroke(g.role ?? 'gradient')} strokeWidth={6} opacity={go} />;
			})}
			{tally && to > 0 ? <text x={tally.x} y={tally.y} opacity={to} {...haloText(tally.size ?? 48, roleInk(tally.role))}>{(tally.text ?? ((n, N) => `${n}/${N}`))(tN, tD)}</text> : null}
		</FrameSvg>
	);
};

// =====================================================================================================
// VennDiagram (s02 to s05, s07, s08)
// =====================================================================================================
export type VennRegion = 'A' | 'AB' | 'B' | 'out';
export type VennText = {text: string; at: number; out?: number; role?: RoleKey; size?: number};
export const VENN_ROLE: Record<VennRegion, RoleKey> = {A: 'a', AB: 'gradient', B: 'b', out: 'k'};
/** Region sets for the usual shadings. */
export const VENN_SHADE = {intersection: ['AB'], union: ['A', 'AB', 'B'], notA: ['B', 'out'], notB: ['A', 'out'], neither: ['out'], aOnly: ['A'], bOnly: ['B'], exactlyOne: ['A', 'B']} as const;
const latestText = (v: VennText | readonly VennText[] | undefined, f: number): {cur: VennText | null; prev: VennText | null; u: number} => {
	if (!v) return {cur: null, prev: null, u: 0};
	const list = Array.isArray(v) ? (v as readonly VennText[]) : [v as VennText];
	let k = -1;
	list.forEach((t, i) => {if (f >= t.at) k = i;});
	if (k < 0) return {cur: null, prev: null, u: 0};
	const cur = list[k];
	if (cur.out !== undefined && f >= cur.out + 12) return {cur: null, prev: null, u: 0};
	return {cur, prev: k > 0 ? list[k - 1] : null, u: prog(f, cur.at, 14) * (cur.out === undefined ? 1 : 1 - prog(f, cur.out, 12))};
};
/**
 * A two-set Venn diagram in a U (or S) rectangle, letters and numbers only. `regions` hold counts, decimals or
 * listed elements, each a list of timed texts (a count can turn into its decimal); fill the middle first by cueing
 * AB earliest. `shade` fills region sets (VENN_SHADE) in their colours with an optional 44 px label under the
 * rectangle. `separate` slides the circles apart (disjoint: the overlap shrinks to nothing and "∅" writes in the
 * gap); `restrict` shrinks the rectangle onto circle B (or A) and greys the rest, so B becomes the new whole;
 * `items` fly tokens into regions; `dots` place member dots and `ticks` give each dot a tick per set it is in, the
 * overlap ticked twice and later crossed once, with a live tick count; `sum` writes the region values added up and
 * checks them against `total`. Omit labels.B for one circle (s01's complement).
 */
export const VennDiagram: React.FC<{
	x: number; y: number; width?: number; height?: number; uLabel: string; labels: {A: string; B?: string}; roles?: {A?: RoleKey; B?: RoleKey};
	regions?: Partial<Record<VennRegion, VennText | readonly VennText[]>>;
	shade?: readonly {regions: readonly VennRegion[]; at: number; out?: number; label?: string; role?: RoleKey}[];
	separate?: {at: number; dur?: number; empty?: string};
	restrict?: {to: 'A' | 'B'; at: number; dur?: number; out?: number};
	items?: readonly {label: string; region: VennRegion; at: number; role?: RoleKey; from?: readonly [number, number]}[];
	dots?: {counts: Partial<Record<VennRegion, number>>; at: number; stagger?: number};
	ticks?: {aAt: number; bAt: number; stagger?: number; removeAt?: number; counter?: {x: number; y: number; size?: number}};
	pulse?: readonly {region: VennRegion; at: number}[]; dimCircle?: {which: 'A' | 'B'; at: number; out?: number};
	sum?: {at: number; total?: number; suffix?: string; size?: number}; at?: number; out?: number; itemSize?: number; labelSize?: number;
}> = ({x, y, width = 1100, height = 700, uLabel, labels, roles, regions = {}, shade = [], separate, restrict, items = [], dots, ticks, pulse = [], dimCircle, sum, at = 0, out, itemSize = 44, labelSize = 44}) => {
	const f = useCurrentFrame();
	const uid = `vn${useId().replace(/:/g, '')}`;
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const two = labels.B !== undefined;
	const RA = MATH_ROLES[roles?.A ?? 'a'], RB = MATH_ROLES[roles?.B ?? 'b'];
	const R = Math.min(height * 0.37, width * (two ? 0.24 : 0.3), separate ? (width / 2 - 24) / 2.16 : Infinity);
	const cy = y + height * 0.53;
	const sepU = separate ? smooth(clamp01((f - separate.at) / (separate.dur ?? 36))) : 0;
	const d = two ? lerp(R * 0.56, R * 1.14, sepU) : 0;
	const cxA = x + width / 2 - d, cxB = x + width / 2 + d;
	const ru = restrict ? smooth(clamp01((f - restrict.at) / (restrict.dur ?? 40))) * (restrict.out === undefined ? 1 : 1 - prog(f, restrict.out, 16)) : 0;
	const keep = restrict?.to ?? 'B', kx = keep === 'B' ? cxB : cxA;
	const rect = {x: lerp(x, kx - R - 10, ru), y: lerp(y, cy - R - 10, ru), w: lerp(width, 2 * R + 20, ru), h: lerp(height, 2 * R + 20, ru), rx: lerp(14, R + 10, ru)};
	const inA = (px: number, py: number, m = 0) => Math.hypot(px - cxA, py - cy) < R - m;
	const inB = (px: number, py: number, m = 0) => two && Math.hypot(px - cxB, py - cy) < R - m;
	const regionOf = (px: number, py: number, m: number): VennRegion | null => {
		const a = inA(px, py, m), b = inB(px, py, m), na = !inA(px, py, -m), nb = !inB(px, py, -m) || !two;
		if (a && b) return 'AB';
		if (a && nb) return 'A';
		if (b && na) return 'B';
		if (na && nb && px > x + m && px < x + width - m && py > y + 60 + m && py < y + height - m) return 'out';
		return null;
	};
	const anchor = (rg: VennRegion): [number, number] => rg === 'A' ? [two ? cxA - R * 0.42 : cxA, cy] : rg === 'B' ? [cxB + R * 0.42, cy] : rg === 'AB' ? [(cxA + cxB) / 2, cy] : [x + width - 80, y + height - 56];
	// Slots for tokens and dots: grid points inside a region, nearest the anchor first (deterministic).
	const slots = (rg: VennRegion, n: number, spacing: number, margin: number) => {
		const out2: [number, number][] = [];
		for (let py = y + 70; py < y + height - 10; py += spacing) for (let px = x + 20 + ((Math.round((py - y) / spacing) % 2) * spacing) / 2; px < x + width - 10; px += spacing) if (regionOf(px, py, margin) === rg) out2.push([px, py]);
		const [ax, ay] = anchor(rg);
		return out2.sort((p, q) => Math.hypot(p[0] - ax, (p[1] - ay) * 1.4) - Math.hypot(q[0] - ax, (q[1] - ay) * 1.4)).slice(0, n);
	};
	const regionShape = (rg: VennRegion, fill: string, key: string, op: number) => {
		const common = {fill, opacity: op} as const;
		if (rg === 'A') return <circle key={key} cx={cxA} cy={cy} r={R} mask={two ? `url(#${uid}-nb)` : undefined} {...common} />;
		if (rg === 'B') return two ? <circle key={key} cx={cxB} cy={cy} r={R} mask={`url(#${uid}-na)`} {...common} /> : null;
		if (rg === 'AB') return two ? <circle key={key} cx={cxB} cy={cy} r={R} clipPath={`url(#${uid}-ca)`} {...common} /> : null;
		return <rect key={key} x={x} y={y} width={width} height={height} rx={14} mask={`url(#${uid}-nab)`} {...common} />;
	};
	const shadeEls = shade.map((s, i) => {
		const so = vis(f, s.at, s.out, 14);
		if (so <= 0.001) return null;
		return <g key={'sh' + i}>{s.regions.map(rg => regionShape(rg, MATH_ROLES[s.role ?? (rg === 'A' ? roles?.A ?? 'a' : rg === 'B' ? roles?.B ?? 'b' : VENN_ROLE[rg])].soft, rg, so))}</g>;
	});
	const pulseEls = pulse.map((p, i) => {const v = pulseAt(f, p.at, 40); return v > 0 ? regionShape(p.region, MATH_ROLES[VENN_ROLE[p.region]].soft, 'pu' + i, v) : null;});
	const shadeLabel = [...shade].reverse().find(s => s.label && f >= s.at && (s.out === undefined || f < s.out + 12));
	// Region texts.
	const textEls = (['AB', 'A', 'B', 'out'] as VennRegion[]).map(rg => {
		const {cur, prev, u} = latestText(regions[rg], f);
		if (!cur) return null;
		const [ax, ay] = anchor(rg);
		const s = cur.size ?? 52, role = cur.role ?? (rg === 'A' ? roles?.A ?? 'a' : rg === 'B' ? roles?.B ?? 'b' : VENN_ROLE[rg]);
		const fade = ru > 0 && rg !== keep && rg !== 'AB' ? 1 - 0.75 * ru : 1;
		return <g key={'t' + rg} opacity={fade}>
			{prev && u < 1 ? <text x={ax} y={ay + s * 0.36 - u * 30} textAnchor="middle" opacity={1 - u} {...haloText(prev.size ?? 52, roleInk(prev.role ?? role))}>{prev.text}</text> : null}
			<text x={ax} y={ay + s * 0.36 + (1 - u) * 30} textAnchor="middle" opacity={u} {...haloText(s, roleInk(role))}>{cur.text}</text>
		</g>;
	});
	// Tokens.
	const byRegion: Record<VennRegion, number> = {A: 0, AB: 0, B: 0, out: 0};
	const itemEls = items.map((it, i) => {
		const k = byRegion[it.region]++;
		const sl = slots(it.region, k + 1, itemSize * 1.5, itemSize * 0.7)[k] ?? anchor(it.region);
		const u = smooth(clamp01((f - it.at) / 22));
		if (f < it.at) return null;
		const from = it.from ?? [x + width / 2, y - 60];
		const px = lerp(from[0], sl[0], u), py = lerp(from[1], sl[1], u) - Math.sin(u * Math.PI) * 60;
		return <text key={'it' + i} x={px} y={py + itemSize * 0.36} textAnchor="middle" {...haloText(itemSize, roleInk(it.role ?? (it.region === 'A' ? roles?.A ?? 'a' : it.region === 'B' ? roles?.B ?? 'b' : VENN_ROLE[it.region])))}>{it.label}</text>;
	});
	// Member dots and the double-count ticks.
	const dotEls: React.ReactNode[] = [];
	let tickCount = 0;
	if (dots) {
		let gi = 0;
		const aList: [number, number, VennRegion][] = [], bList: [number, number, VennRegion][] = [];
		(['A', 'AB', 'B', 'out'] as VennRegion[]).forEach(rg => {
			const n = dots.counts[rg] ?? 0;
			slots(rg, n, 46, 20).forEach(([px, py]) => {
				const t = dots.at + gi++ * (dots.stagger ?? 1);
				if (f < t) return;
				dotEls.push(<circle key={`d${rg}${px}${py}`} cx={px} cy={py} r={10} fill={INK} opacity={prog(f, t, 6)} />);
				if (rg === 'A' || rg === 'AB') aList.push([px, py, rg]);
				if (rg === 'B' || rg === 'AB') bList.push([px, py, rg]);
			});
		});
		if (ticks) {
			const st = ticks.stagger ?? 3;
			const tick = (px: number, py: number, color: string, side: -1 | 1, key: string, op: number, crossed: number) => (
				<g key={key} opacity={op}>
					<path d={`M${px + side * 13 - 8},${py - 16} l6,8 l12,-16`} fill="none" stroke={color} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
					{crossed > 0 ? <line x1={px + side * 13 - 12} y1={py - 30} x2={px + side * 13 + 12} y2={py - 2} stroke={MATH_MISTAKE} strokeWidth={5} opacity={crossed} /> : null}
				</g>
			);
			aList.forEach(([px, py], k) => {const t = ticks.aAt + k * st; if (f >= t) {tickCount++; dotEls.push(tick(px, py, RA.stroke, -1, `ta${k}`, prog(f, t, 6), 0));}});
			bList.forEach(([px, py, rg], k) => {
				const t = ticks.bAt + k * st;
				if (f < t) return;
				const rem = ticks.removeAt !== undefined && rg === 'AB' ? prog(f, ticks.removeAt, 16) : 0;
				if (rem < 0.5) tickCount++;
				dotEls.push(tick(px, py, RB.stroke, 1, `tb${k}`, prog(f, t, 6) * (1 - 0.6 * rem), rem));
			});
		}
	}
	// The sum row: the values shown in A, AB, B and out, added.
	let sumEl: React.ReactNode = null;
	if (sum && f >= sum.at) {
		const vals = (['A', 'AB', 'B', 'out'] as VennRegion[]).map(rg => latestText(regions[rg], 1e9).cur).filter((t): t is VennText => !!t).map(t => ({t: t.text, v: parseFloat(t.text.replace('−', '-'))})).filter(q => Number.isFinite(q.v));
		const tot = vals.reduce((s, q) => s + q.v, 0);
		if (sum.total !== undefined && Math.abs(tot - sum.total) > 1e-9) throw new Error(`VennDiagram: regions add to ${tot}, not ${sum.total}`);
		sumEl = <text x={x + width / 2} y={y + height + 64} textAnchor="middle" opacity={prog(f, sum.at, 14)} {...haloText(sum.size ?? 44, INK)}>{`${vals.map(q => q.t).join(' + ')} = ${decText(tot)}${sum.suffix ?? ''}`}</text>;
	}
	const dc = dimCircle ? vis(f, dimCircle.at, dimCircle.out, 14) : 0;
	const lab = (txt: string, cx: number, side: -1 | 1, R0: typeof RA) => <text x={cx + side * R * (two ? 0.3 : 0.5)} y={cy - R - 16} textAnchor={side < 0 ? 'end' : 'start'} {...haloText(labelSize, R0.ink)}>{txt}</text>;
	return (
		<FrameSvg style={{opacity: o}}>
			<defs>
				<clipPath id={`${uid}-ca`}><circle cx={cxA} cy={cy} r={R} /></clipPath>
				<mask id={`${uid}-na`}><rect x={x - 50} y={y - 50} width={width + 100} height={height + 100} fill="white" /><circle cx={cxA} cy={cy} r={R} fill="black" /></mask>
				<mask id={`${uid}-nb`}><rect x={x - 50} y={y - 50} width={width + 100} height={height + 100} fill="white" />{two ? <circle cx={cxB} cy={cy} r={R} fill="black" /> : null}</mask>
				<mask id={`${uid}-nab`}><rect x={x - 50} y={y - 50} width={width + 100} height={height + 100} fill="white" /><circle cx={cxA} cy={cy} r={R} fill="black" />{two ? <circle cx={cxB} cy={cy} r={R} fill="black" /> : null}</mask>
				<mask id={`${uid}-nk`}><rect x={x - 50} y={y - 50} width={width + 100} height={height + 100} fill="white" /><circle cx={kx} cy={cy} r={R} fill="black" /></mask>
			</defs>
			{shadeEls}
			{pulseEls}
			<rect x={rect.x} y={rect.y} width={rect.w} height={rect.h} rx={rect.rx} fill="none" stroke={INK} strokeWidth={4.5} />
			<text x={x + 22} y={y + 46} opacity={1 - ru} {...haloText(38, INK)}>{uLabel}</text>
			<circle cx={cxA} cy={cy} r={R} fill="none" stroke={RA.stroke} strokeWidth={6} />
			{two ? <circle cx={cxB} cy={cy} r={R} fill="none" stroke={RB.stroke} strokeWidth={6} /> : null}
			{lab(labels.A, cxA, -1, RA)}
			{two ? lab(labels.B!, cxB, 1, RB) : null}
			{ru > 0 ? <rect x={x} y={y} width={width} height={height} rx={14} fill={PAPER} opacity={0.78 * ru} mask={`url(#${uid}-nk)`} /> : null}
			{dc > 0 ? <circle cx={dimCircle!.which === 'A' ? cxA : cxB} cy={cy} r={R + 3} fill={PAPER} opacity={0.75 * dc} /> : null}
			{separate && sepU > 0.6 ? <text x={(cxA + cxB) / 2} y={cy + 24} textAnchor="middle" opacity={(sepU - 0.6) / 0.4} {...haloText(64, MATH_ROLES.gradient.ink)}>{separate.empty ?? '∅'}</text> : null}
			{textEls}
			{itemEls}
			{dotEls}
			{ticks?.counter && f >= ticks.aAt ? <text x={ticks.counter.x} y={ticks.counter.y} {...haloText(ticks.counter.size ?? 48, INK)}>{`ticks: ${tickCount}`}</text> : null}
			{shadeLabel ? <text x={x + width / 2} y={y + height + (sum ? 124 : 60)} textAnchor="middle" opacity={vis(f, shadeLabel.at, shadeLabel.out, 12)} {...haloText(44, roleInk(shadeLabel.role ?? (shadeLabel.regions.length === 1 ? VENN_ROLE[shadeLabel.regions[0]] : undefined)))}>{shadeLabel.label}</text> : null}
			{sumEl}
		</FrameSvg>
	);
};

// =====================================================================================================
// ProbabilityTree (s06 to s08)
// =====================================================================================================
export type TreeBranch = {name: string; p: Frac; text?: string; at?: number; children?: readonly TreeBranch[]};
type TreePath = {names: string[]; ps: Frac[]};
const treePaths = (bs: readonly TreeBranch[], pre: TreePath = {names: [], ps: []}): TreePath[] => bs.flatMap(b => {
	const cur = {names: [...pre.names, b.name], ps: [...pre.ps, b.p]};
	return b.children?.length ? treePaths(b.children, cur) : [cur];
});
/** A path's id ("G/R", "peak/late") and its display name ("GR", "peak ∩ late"). */
export const pathId = (names: readonly string[]) => names.join('/');
const pathName = (names: readonly string[]) => (names.every(n => n.length === 1) ? names.join('') : names.join(' ∩ '));
/** Every path of a tree with its product (exact when its branches are fractions). Throws unless the paths add to 1. */
export const treeTips = (branches: readonly TreeBranch[]) => {
	const paths = treePaths(branches).map(p => ({id: pathId(p.names), name: pathName(p.names), ps: p.ps, product: fracProduct(p.ps)}));
	const tot = paths.reduce((s, p) => s + fracValue(p.product), 0);
	if (Math.abs(tot - 1) > 1e-9) throw new Error(`ProbabilityTree: paths add to ${tot}, not 1`);
	return paths;
};
/**
 * A probability tree (HSC style: letters and numbers only, branch labels in ink unless a stage role is given).
 * Stages are columns that grow at their cues; each branch writes "name p" (or `text`). Tips write "GG: 0.6 × 0.7 =
 * 0.42" (products exact when the branches are fractions). `light` thickens named paths ("G/R") in a role colour;
 * `dim` greys every other path (restrict); `ride` runs a dot along a path; `sum` writes the event's probability as
 * the paths added. Throws unless every node's branches and all the tips add to 1.
 */
export const ProbabilityTree: React.FC<{
	x: number; y: number; width?: number; height?: number; stages: readonly {title: string; at: number; role?: RoleKey}[]; branches: readonly TreeBranch[];
	tips?: {at: number; stagger?: number; format?: 'product' | 'value' | 'name'; size?: number}; light?: readonly {paths: readonly string[]; at: number; out?: number; role?: RoleKey}[];
	dim?: {except: readonly string[]; at: number; out?: number}; ride?: readonly {path: string; at: number; dur?: number}[];
	sum?: {paths: readonly string[]; at: number; x: number; y: number; label?: string; size?: number}; labelSize?: number; tipWidth?: number; at?: number; out?: number;
}> = ({x, y, width = 1200, height = 760, stages, branches, tips, light = [], dim, ride = [], sum, labelSize = 40, tipWidth = 380, at = 0, out}) => {
	const f = useCurrentFrame();
	const check = (bs: readonly TreeBranch[]) => {const s = bs.reduce((q, b) => q + fracValue(b.p), 0); if (Math.abs(s - 1) > 1e-9) throw new Error(`ProbabilityTree: branches ${bs.map(b => b.name).join(', ')} add to ${s}`); bs.forEach(b => b.children && check(b.children));};
	check(branches);
	const all = treeTips(branches);
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const S = stages.length, colW = (width - tipWidth) / S;
	type Node = {px: number; py: number; nx: number; ny: number; b: TreeBranch; depth: number; idx: number; id: string};
	const nodes: Node[] = [];
	let leaf = 0;
	const L = all.length;
	const place = (bs: readonly TreeBranch[], depth: number, px: number, py: number, pre: string[]): number[] => bs.map((b, idx) => {
		const ids = [...pre, b.name], nx = x + (depth + 1) * colW;
		let ny: number;
		if (b.children?.length) {const ys = place(b.children, depth + 1, nx, 0, ids); ny = ys.reduce((s, v) => s + v, 0) / ys.length; nodes.filter(n => n.depth === depth + 1 && n.id.startsWith(pathId(ids) + '/')).forEach(n => {n.py = ny;});}
		else ny = y + ((leaf++ + 0.5) * height) / L;
		nodes.push({px, py, nx, ny, b, depth, idx, id: pathId(ids)});
		return ny;
	});
	const rootY = (() => {const ys = place(branches, 0, x, 0, []); return ys.reduce((s, v) => s + v, 0) / ys.length;})();
	nodes.filter(n => n.depth === 0).forEach(n => {n.py = rootY;});
	const onPath = (nodeId: string, pid: string) => pid === nodeId || pid.startsWith(nodeId + '/');
	const lightOf = (id: string) => {let r: {role: RoleKey; v: number} | null = null; light.forEach(l => {const v = vis(f, l.at, l.out, 10); if (v > 0 && l.paths.some(p => onPath(id, p))) r = {role: l.role ?? 'gradient', v};}); return r as {role: RoleKey; v: number} | null;};
	const dv = dim ? vis(f, dim.at, dim.out, 14) : 0;
	const branchAt = (n: Node) => n.b.at ?? stages[n.depth].at + n.idx * 8;
	return (
		<FrameSvg style={{opacity: o}}>
			{stages.map((s, i) => <text key={'st' + i} x={x + (i + 0.5) * colW + colW * 0.1} y={y - 26} textAnchor="middle" opacity={prog(f, s.at - 8, 12)} {...haloText(36, roleInk(s.role))}>{s.title}</text>)}
			<circle cx={x} cy={rootY} r={9} fill={INK} opacity={prog(f, stages[0]?.at ?? at, 10)} />
			{nodes.map((n, i) => {
				const t = branchAt(n), u = smooth(clamp01((f - t) / 16));
				if (u <= 0) return null;
				const lt = lightOf(n.id);
				const dimmed = dv > 0 && !dim!.except.some(p => onPath(n.id, p)) ? dv : 0;
				const ex = lerp(n.px, n.nx, u), ey = lerp(n.py, n.ny, u);
				const mx = lerp(n.px, n.nx, 0.5), my = lerp(n.py, n.ny, 0.5);
				const up = n.ny < n.py - 1, flat = Math.abs(n.ny - n.py) < 1;
				const col = lt ? MATH_ROLES[lt.role].stroke : INK;
				const stageRole = stages[n.depth].role;
				return <g key={i} opacity={1 - 0.7 * dimmed}>
					<line x1={n.px} y1={n.py} x2={ex} y2={ey} stroke={col} strokeWidth={lt ? 8 : 4.5} strokeLinecap="round" />
					{u >= 1 ? <circle cx={n.nx} cy={n.ny} r={7} fill={col} /> : null}
					{u >= 1 ? <text x={mx} y={my + (up || flat ? -16 : 46)} textAnchor="middle" opacity={prog(f, t + 10, 10)} {...haloText(labelSize, stageRole ? roleInk(stageRole) : INK)}>{n.b.text ?? `${n.b.name} ${fracText(n.b.p)}`}</text> : null}
				</g>;
			})}
			{tips ? all.map((p, i) => {
				const leafNode = nodes.find(n => n.id === p.id)!;
				const t = tips.at + i * (tips.stagger ?? 14), u = prog(f, t, 12);
				if (u <= 0) return null;
				const txt = tips.format === 'name' ? p.name : tips.format === 'value' ? `${p.name}: ${fracOut(p.product)}` : `${p.name}: ${p.ps.map(fracText).join(' × ')} = ${fracOut(p.product)}`;
				const lt = lightOf(p.id);
				const dimmed = dv > 0 && !dim!.except.includes(p.id) ? dv : 0;
				return <text key={'tp' + i} x={leafNode.nx + 24} y={leafNode.ny + 13} opacity={u * (1 - 0.7 * dimmed)} {...haloText(tips.size ?? 36, lt ? roleInk(lt.role) : INK)}>{txt}</text>;
			}) : null}
			{ride.map((r, i) => {
				const dur = r.dur ?? 40, u = clamp01((f - r.at) / dur);
				if (f < r.at || f > r.at + dur + 30) return null;
				const segs = r.path.split('/').map((_, k, arr) => nodes.find(n => n.id === arr.slice(0, k + 1).join('/'))!).filter(Boolean);
				const k = Math.min(segs.length - 1, Math.floor(u * segs.length)), w = u * segs.length - k;
				const s = segs[k];
				const px = lerp(s.px, s.nx, u >= 1 ? 1 : smooth(w)), py = lerp(s.py, s.ny, u >= 1 ? 1 : smooth(w));
				return <circle key={'rd' + i} cx={px} cy={py} r={14} fill={MATH_ROLES.k.stroke} stroke={CARD} strokeWidth={4} />;
			})}
			{sum && f >= sum.at ? (() => {
				const ps = sum.paths.map(id => all.find(p => p.id === id)).filter((p): p is (typeof all)[number] => !!p);
				if (ps.length !== sum.paths.length) throw new Error(`ProbabilityTree: unknown path in ${sum.paths.join(', ')}`);
				const tot = fracSum(ps.map(p => p.product));
				return <text x={sum.x} y={sum.y} opacity={prog(f, sum.at, 14)} {...haloText(sum.size ?? 44, INK)}>{`${sum.label ?? 'P'} = ${ps.map(p => fracOut(p.product)).join(' + ')} = ${fracOut(tot)}`}</text>;
			})() : null}
		</FrameSvg>
	);
};

// =====================================================================================================
// TwoWayTable (s07, s08)
// =====================================================================================================
/** Row totals, column totals and the grand total of a table of counts. */
export const tableTotals = (cells: readonly (readonly number[])[]) => {
	const rows = cells.map(r => r.reduce((s, v) => s + v, 0));
	const cols = cells[0].map((_, j) => cells.reduce((s, r) => s + r[j], 0));
	return {rows, cols, grand: rows.reduce((s, v) => s + v, 0)};
};
/** P(column j | row i) when given 'row' (count over the row total), or P(row i | column j) when given 'col'. */
export const tableConditional = (cells: readonly (readonly number[])[], i: number, j: number, given: 'row' | 'col') => {
	const T = tableTotals(cells), num = cells[i][j], den = given === 'row' ? T.rows[i] : T.cols[j];
	return {num, den, value: num / den, text: `${num}/${den}`};
};
/**
 * A two-way table with totals computed from the cells (s07 scenes 4 and 5, s07 and s08 attempts). Cells fill row by
 * row at `fill`; `restrict` greys everything outside one row (or column) and boxes its total in teal as the new
 * denominator; a later restrict slides the box to its new total while the counts keep their colours (the s07
 * builder check). `highlight` colours named cells (the shared 30 violet). `expectTotals` throws on a mismatch.
 */
export const TwoWayTable: React.FC<{
	x: number; y: number; rowHeads: readonly string[]; colHeads: readonly string[]; cells: readonly (readonly number[])[]; corner?: string; totalLabel?: string;
	fill?: {at: number; stagger?: number}; restrict?: readonly {row?: number; col?: number; at: number; out?: number}[];
	highlight?: readonly {r: number; c: number; at: number; out?: number; role?: RoleKey}[]; size?: number; colWidth?: number; headWidth?: number; rowHeight?: number;
	expectTotals?: {rows?: readonly number[]; cols?: readonly number[]; grand?: number}; at?: number; out?: number; boxRole?: RoleKey;
}> = ({x, y, rowHeads, colHeads, cells, corner = '', totalLabel = 'total', fill, restrict = [], highlight = [], size = 44, colWidth = 230, headWidth = 260, rowHeight = 84, expectTotals, at = 0, out, boxRole = 'b'}) => {
	const f = useCurrentFrame();
	const T = tableTotals(cells);
	if (expectTotals) {
		const bad = (a: readonly number[] | undefined, b: readonly number[]) => a && a.some((v, i) => v !== b[i]);
		if (bad(expectTotals.rows, T.rows) || bad(expectTotals.cols, T.cols) || (expectTotals.grand !== undefined && expectTotals.grand !== T.grand)) throw new Error(`TwoWayTable: totals ${T.rows} / ${T.cols} / ${T.grand} differ from the design`);
	}
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const R = cells.length, C = cells[0].length;
	const val = (i: number, j: number) => (i < R && j < C ? cells[i][j] : i < R ? T.rows[i] : j < C ? T.cols[j] : T.grand);
	const cx = (j: number) => x + headWidth + j * colWidth, cy = (i: number) => y + rowHeight + i * rowHeight;
	// Current restriction (the latest started and not ended) and the box position, sliding between restricts.
	const active = restrict.filter(r => f >= r.at && (r.out === undefined || f < r.out + 14));
	const cur = active[active.length - 1];
	const boxCell = (r: {row?: number; col?: number}) => (r.row !== undefined ? [r.row, C] : [R, r.col ?? 0]);
	let box: [number, number, number] | null = null;
	if (cur) {
		const k = restrict.indexOf(cur), prev = k > 0 ? restrict[k - 1] : null;
		const u = smooth(clamp01((f - cur.at) / 24));
		const [r1, c1] = boxCell(cur), [r0, c0] = prev && (prev.out === undefined || prev.out >= cur.at - 2) ? boxCell(prev) : [r1, c1];
		box = [lerp(r0, r1, u), lerp(c0, c1, u), cur.out === undefined ? 1 : 1 - prog(f, cur.out, 14)];
	}
	const inside = (i: number, j: number) => !cur || (cur.row !== undefined ? i === cur.row : j === cur.col);
	const ro = cur ? prog(f, cur.at, 16) * (cur.out === undefined ? 1 : 1 - prog(f, cur.out, 14)) : 0;
	const fillO = (i: number) => (fill ? prog(f, fill.at + i * (fill.stagger ?? 20), 12) : 1);
	const BR = MATH_ROLES[boxRole];
	const cellText = (i: number, j: number) => {
		const hl = [...highlight].reverse().find(h => h.r === i && h.c === j && vis(f, h.at, h.out) > 0.5);
		const grey = !inside(i, j) ? ro : 0;
		const tot = i === R || j === C;
		return <div key={`${i},${j}`} style={{position: 'absolute', left: cx(j), top: cy(i), width: colWidth, height: rowHeight, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, fontVariantNumeric: 'tabular-nums', color: hl ? roleInk(hl.role ?? 'gradient') : tot ? INK : INK, opacity: fillO(Math.min(i, R)) * (1 - 0.72 * grey), background: hl ? MATH_ROLES[hl.role ?? 'gradient'].soft : grey > 0 ? `rgba(225,219,208,${grey})` : tot ? '#f4efe4' : undefined}}>{val(i, j)}</div>;
	};
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o, pointerEvents: 'none'}}>
			<div style={{position: 'absolute', left: x - 18, top: y - 14, width: headWidth + (C + 1) * colWidth + 36, height: (R + 2) * rowHeight + 28, background: CARD, borderRadius: 20, boxShadow: CARD_SHADOW}} />
			<div style={{position: 'absolute', left: x, top: y, width: headWidth, height: rowHeight, display: 'flex', alignItems: 'center', fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: size * 0.62, color: INK_SOFT}}>{corner}</div>
			{[...colHeads, totalLabel].map((h, j) => <div key={'ch' + j} style={{position: 'absolute', left: cx(j), top: y, width: colWidth, height: rowHeight, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size * 0.78, color: j === C ? INK_SOFT : INK, opacity: 1 - 0.72 * (cur && cur.col !== undefined && cur.col !== j ? ro : 0)}}>{h}</div>)}
			{[...rowHeads, totalLabel].map((h, i) => <div key={'rh' + i} style={{position: 'absolute', left: x, top: cy(i), width: headWidth, height: rowHeight, display: 'flex', alignItems: 'center', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size * 0.78, color: i === R ? INK_SOFT : INK, opacity: 1 - 0.72 * (cur && cur.row !== undefined && cur.row !== i ? ro : 0)}}>{h}</div>)}
			<svg style={{position: 'absolute', inset: 0, overflow: 'visible'}} width={1920} height={1080}>
				{Array.from({length: R + 2}, (_, i) => <line key={'h' + i} x1={x} x2={cx(C + 1)} y1={y + (i + 1) * rowHeight} y2={y + (i + 1) * rowHeight} stroke={i === R ? INK : PAPER_DEEP} strokeWidth={i === R ? 3 : 2} opacity={i === R + 1 ? 0 : 1} />)}
				<line x1={cx(0)} x2={cx(0)} y1={y} y2={cy(R + 1)} stroke={PAPER_DEEP} strokeWidth={2} />
				<line x1={cx(C)} x2={cx(C)} y1={y} y2={cy(R + 1)} stroke={INK} strokeWidth={3} />
			</svg>
			{Array.from({length: R + 1}, (_, i) => Array.from({length: C + 1}, (_, j) => cellText(i, j)))}
			{box ? <div style={{position: 'absolute', left: cx(box[1]) + 8, top: cy(box[0]) + 6, width: colWidth - 16, height: rowHeight - 12, border: `6px solid ${BR.stroke}`, borderRadius: 14, opacity: box[2]}} /> : null}
		</div>
	);
};

// =====================================================================================================
// DotsVsInterval (s09, optional)
// =====================================================================================================
/**
 * Separate values against a continuous stretch (s09 scenes 1, 4 and 5). The discrete line lands dots on listed
 * values (blue), can shade the gaps between them grey ("gaps between values"), end in an ellipsis running off the
 * right edge, and cross a ghost dot at an impossible value (9.5). The continuous line fills as a solid teal bar,
 * shades an interval (violet, with a label) and can mark a single exact value with zero width.
 */
export const DotsVsInterval: React.FC<{
	x: number; y: number; width?: number; at?: number; out?: number; size?: number;
	discrete?: {range: readonly [number, number]; ticks: readonly number[]; values: readonly number[]; at: number; stagger?: number; label?: string; role?: RoleKey; gapsAt?: number; ellipsis?: {at: number}; ghost?: {value: number; at: number}};
	continuous?: {range: readonly [number, number]; ticks: readonly number[]; at: number; dy?: number; label?: string; role?: RoleKey; tickDigits?: number;
		shade?: readonly {from: number; to: number; at: number; out?: number; label?: string; role?: RoleKey}[]; point?: {value: number; at: number; label?: string}};
}> = ({x, y, width = 1400, at = 0, out, size = 34, discrete, continuous}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const line = (Y: number, range: readonly [number, number], ticks: readonly number[], label: string | undefined, digits = 0) => {
		const X = (v: number) => x + 40 + ((v - range[0]) / (range[1] - range[0])) * (width - 80);
		return {X, el: <g>
			<line x1={x} x2={x + width} y1={Y} y2={Y} stroke={INK} strokeWidth={4} />
			<path d={`M${x + width - 18},${Y - 14} L${x + width + 2},${Y} L${x + width - 18},${Y + 14}`} fill="none" stroke={INK} strokeWidth={4} />
			{ticks.map(t => <g key={t}><line x1={X(t)} x2={X(t)} y1={Y - 12} y2={Y + 12} stroke={INK} strokeWidth={3} /><text x={X(t)} y={Y + 50} textAnchor="middle" style={TXT(size, INK_SOFT, 700)}>{digits ? t.toFixed(digits) : niceNum(t)}</text></g>)}
			{label ? <text x={x} y={Y - 40} style={TXT(size + 4, INK, 800)}>{label}</text> : null}
		</g>};
	};
	const els: React.ReactNode[] = [];
	if (discrete) {
		const D = discrete, R = MATH_ROLES[D.role ?? 'a'], Y = y;
		const {X, el} = line(Y, D.range, D.ticks, D.label);
		els.push(<g key="d" opacity={prog(f, D.at - 10, 12)}>{el}
			{D.gapsAt !== undefined ? D.values.slice(0, -1).map((v, i) => <rect key={'g' + i} x={X(v) + 16} y={Y - 10} width={X(D.values[i + 1]) - X(v) - 32} height={20} rx={6} fill={MATH_EXCLUDED} opacity={0.45 * prog(f, (D.gapsAt ?? 0) + i * 4, 10)} />) : null}
			{D.values.map((v, i) => {const u = prog(f, D.at + i * (D.stagger ?? 10), 12); return u > 0 ? <circle key={'v' + i} cx={X(v)} cy={Y - (1 - u) * 60} r={14} fill={R.stroke} stroke={CARD} strokeWidth={3} opacity={u} /> : null;})}
			{D.ellipsis ? <text x={x + width - 70} y={Y - 26} opacity={prog(f, D.ellipsis.at, 12)} {...haloText(56, R.ink)}>…</text> : null}
			{D.ghost ? (() => {const g = prog(f, D.ghost.at, 12), c = prog(f, D.ghost.at + 16, 10), gx = X(D.ghost.value); return <g opacity={g}><circle cx={gx} cy={Y} r={14} fill="none" stroke={MATH_EXCLUDED} strokeWidth={4} strokeDasharray="5 5" /><path d={`M${gx - 20},${Y - 20} L${gx + 20 * (2 * c - 1)},${Y - 20 + 40 * c}`} stroke={MATH_MISTAKE} strokeWidth={6} strokeLinecap="round" /><path d={`M${gx + 20},${Y - 20} L${gx + 20 - 40 * c},${Y - 20 + 40 * c}`} stroke={MATH_MISTAKE} strokeWidth={6} strokeLinecap="round" opacity={c} /></g>;})() : null}
		</g>);
	}
	if (continuous) {
		const Cn = continuous, R = MATH_ROLES[Cn.role ?? 'b'], Y = y + (discrete ? Cn.dy ?? 230 : 0);
		const {X, el} = line(Y, Cn.range, Cn.ticks, Cn.label, Cn.tickDigits);
		const u = smooth(clamp01((f - Cn.at) / 30));
		els.push(<g key="c" opacity={prog(f, Cn.at - 10, 12)}>{el}
			<line x1={X(Cn.range[0])} x2={lerp(X(Cn.range[0]), X(Cn.range[1]), u)} y1={Y} y2={Y} stroke={R.stroke} strokeWidth={16} strokeLinecap="round" opacity={0.9} />
			{(Cn.shade ?? []).map((s, i) => {const so = vis(f, s.at, s.out, 12); const SR = MATH_ROLES[s.role ?? 'gradient']; return so > 0 ? <g key={'s' + i} opacity={so}><rect x={X(s.from)} y={Y - 26} width={X(s.to) - X(s.from)} height={52} rx={8} fill={SR.soft} stroke={SR.stroke} strokeWidth={4} />{s.label ? <text x={(X(s.from) + X(s.to)) / 2} y={Y - 44} textAnchor="middle" {...haloText(size + 4, SR.ink)}>{s.label}</text> : null}</g> : null;})}
			{Cn.point ? (() => {const po = prog(f, Cn.point.at, 12), px = X(Cn.point.value); return <g opacity={po}><line x1={px} x2={px} y1={Y - 30} y2={Y + 68} stroke={INK} strokeWidth={2} /><circle cx={px} cy={Y} r={6} fill={INK} />{Cn.point.label ? <text x={px} y={Y + 100} textAnchor="middle" {...haloText(size, INK)}>{Cn.point.label}</text> : null}</g>;})() : null}
		</g>);
	}
	return <FrameSvg style={{opacity: o}}>{els}</FrameSvg>;
};

// =====================================================================================================
// Module-load self checks on the designs' numbers
// =====================================================================================================
{
	const fail = (what: string) => {throw new Error(`a11-prob-parts self check: ${what}`);};
	const eq = (a: Frac, b: string, what: string) => {if (fracOut(a) !== b) fail(`${what}: ${fracOut(a)} vs ${b}`);};
	// s01: primes in 1 to 15 (6 of them, complement 9); factors of 12; {2, 4, 8} ⊈ E.
	const primes = [2, 3, 5, 7, 11, 13];
	if (countCells(3, 5, (r, c) => primes.includes(r * 5 + c + 1)) !== 6) fail('s01 primes');
	// s02 and s03 sums: 22 + 8 + 12 + 8 = 50; 26 + 9 + 13 + 12 = 60; s03 |M ∪ V| = 42, 25 = 14 + 16 − 5, neither 18; hostel 25.
	if (22 + 8 + 12 + 8 !== 50 || 26 + 9 + 13 + 12 !== 60 || 30 + 20 - 8 !== 42 || 14 + 16 - 25 !== 5 || 80 - (45 + 32 - 15) !== 18 || 70 + 45 - (120 - 30) !== 25) fail('s02 s03 counts');
	// s04: 25 gumballs, blue 13 to 20 = 8/25 = 0.32; die and coin: even or heads 9/12, even and heads 3/12.
	if (countCells(5, 5, (r, c) => {const n = r * 5 + c + 1; return n >= 13 && n <= 20;}) !== 8) fail('s04 blue');
	if (countCells(2, 6, (r, c) => (c + 1) % 2 === 0 || r === 0) !== 9 || countCells(2, 6, (r, c) => (c + 1) % 2 === 0 && r === 0) !== 3) fail('s04 die and coin');
	// s04 A1: multiples of 4 or greater than 14 in 1 to 20: 9; both: 2.
	if (countCells(4, 5, (r, c) => {const n = r * 5 + c + 1; return n % 4 === 0 || n > 14;}) !== 9) fail('s04 A1');
	// s05: hotel 10 + 6 + 4 = 20 of 40; decimals add to 1; A2 multiples of 5 or 6 in 1 to 30: 10.
	if (Math.abs(0.25 + 0.15 + 0.1 + 0.5 - 1) > 1e-12 || countCells(5, 6, (r, c) => {const n = r * 6 + c + 1; return n % 5 === 0 || n % 6 === 0;}) !== 10) fail('s05');
	// s06: total 7 six cells; at least one six 11; larger is 4: 7; traffic lights; R then B without replacement 25 of 90 = 5/18.
	if (countCells(6, 6, (r, c) => r + c + 2 === 7) !== 6 || countCells(6, 6, (r, c) => r === 5 || c === 5) !== 11 || countCells(6, 6, (r, c) => Math.max(r, c) === 3) !== 7) fail('s06 array');
	const lights = treeTips([{name: 'G', p: 0.6, children: [{name: 'G', p: 0.7}, {name: 'R', p: 0.3}]}, {name: 'R', p: 0.4, children: [{name: 'G', p: 0.7}, {name: 'R', p: 0.3}]}]);
	eq(lights[0].product, '0.42', 's06 GG'); eq(fracSum([lights[1].product, lights[2].product]), '0.46', 's06 exactly one green');
	const isR = (k: number) => k < 5;
	if (countCells(10, 9, (r, j) => isR(r), true) !== 45 || countCells(10, 9, (r, j) => isR(r) && !isR(j), true) !== 25) fail('s06 ordered draws');
	eq(fracProduct([[5, 10], [5, 9]]), '5/18', 's06 R then B');
	eq(fracSum([fracProduct([[4, 6], [2, 5]]), fracProduct([[2, 6], [4, 5]])]), '8/15', 's06 A2');
	eq(fracProduct([[1, 2], [1, 2], [1, 2]]), '1/8', 's06 coins');
	// s07: delivery app P(late | peak) = 30/120 = 0.25, P(peak | late) = 30/38 ≈ 0.79; tree 0.15 + 0.04 = 0.19; 0.15/0.19 = 15/19.
	const app = [[30, 90], [8, 72]];
	const T = tableTotals(app);
	if (T.rows.join() !== '120,80' || T.cols.join() !== '38,162' || T.grand !== 200) fail('s07 totals');
	if (tableConditional(app, 0, 0, 'row').value !== 0.25 || Math.round(tableConditional(app, 0, 0, 'col').value * 100) / 100 !== 0.79) fail('s07 conditionals');
	const tree7 = treeTips([{name: 'peak', p: 0.6, children: [{name: 'late', p: 0.25}, {name: 'on time', p: 0.75}]}, {name: 'off-peak', p: 0.4, children: [{name: 'late', p: 0.1}, {name: 'on time', p: 0.9}]}]);
	if (Math.abs(fracValue(fracSum([tree7[0].product, tree7[2].product])) - 0.19) > 1e-12 || Math.abs(fracValue(tree7[0].product) / 0.19 - 15 / 19) > 1e-12) fail('s07 tree');
	if (tableConditional([[30, 70], [15, 135]], 0, 0, 'row').value !== 0.3 || tableConditional([[30, 70], [15, 135]], 0, 0, 'col').text !== '30/45') fail('s07 A1');
	// s08: juice bar 12/100 = 0.12 against 0.4 × 0.25 = 0.1; French and German 0.1 against 0.12; alarms 1 − 0.005 = 0.995.
	const jt = tableTotals([[12, 28], [13, 47]]);
	if (jt.rows.join() !== '40,60' || jt.cols.join() !== '25,75' || Math.abs(0.4 * 0.25 - 0.1) > 1e-12 || Math.abs(0.4 * 0.3 - 0.12) > 1e-12 || decText(1 - 0.05 * 0.1) !== '0.995') fail('s08');
	// s09: X = |difference|: 0 six times, 1 ten times.
	if (countCells(6, 6, (r, c) => r === c) !== 6 || countCells(6, 6, (r, c) => Math.abs(r - c) === 1) !== 10) fail('s09 differences');
}
