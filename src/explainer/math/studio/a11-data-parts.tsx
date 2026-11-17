// Year 11 Advanced kit, wave 3 (brief 245, maths-a11-kit-needs-g-s.md items 12 and 13): data parts for s10 and s11.
// FrequencyTable (a spreadsheet with value, frequency, relative frequency, cumulative frequency and cumulative
// relative frequency columns that fill column by column, a formula bar showing the selected cell's formula, and a
// highlighted row), and plot layers for ClassHistogram or StudioPlot render props: FrequencyPolygon (midpoints
// joined, closed to the axis at the empty neighbouring classes, bars ghosted), CumulativeColumns (frequency bars
// morphing into the cumulative staircase), CumulativePolygon (points at upper class boundaries, with the midpoint
// slip) and MedianReader (across from half the total, then down; for a polygon or for single-value columns, with
// optional equal divisions showing the interpolation). Every value is computed from the frequencies.
// Roles (s10, s11): frequency blue (a), relative frequency teal (b), cumulative frequency violet (gradient),
// cumulative relative frequency amber (k), the median green. s10 formulas use plain references (=B3/B5, no "$",
// root's decision of 17 November) unless `absolute` is set.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, INK, INK_SOFT, PAPER_DEEP, prog} from '../../kit';
import {CARD, CARD_SHADOW, niceNum, smooth, vis} from './primitives';
import {MATH_ANSWER, MATH_MISTAKE, MATH_ROLES, RoleKey, roleInk} from './roles';
import {PlotMap, TXT} from './plot-core';

const lerp = (a: number, b: number, u: number) => a + (b - a) * u;
const clamp01 = (u: number) => Math.max(0, Math.min(1, u));
const haloText = (size: number, color: string, weight = 800): React.SVGProps<SVGTextElement> => ({style: {...TXT(size, color, weight), fontVariantNumeric: 'tabular-nums'}, stroke: CARD, strokeWidth: 8, paintOrder: 'stroke'} as React.SVGProps<SVGTextElement>);

// =====================================================================================================
// Frequency arithmetic
// =====================================================================================================
export const runningTotals = (counts: readonly number[]) => {let s = 0; return counts.map(c => (s += c));};
/** Decimal places (2 or 3) needed to show every value in a column exactly, as a spreadsheet set to match would. */
const colDigits = (vals: readonly number[]) => (vals.every(v => Math.abs(Math.round(v * 100) - v * 100) < 1e-7) ? 2 : 3);
export type FreqColumn = 'value' | 'freq' | 'rel' | 'cum' | 'cumRel';
/** Every column of a frequency table, computed. */
export const frequencyColumns = (freqs: readonly number[]) => {
	const total = freqs.reduce((s, v) => s + v, 0), cum = runningTotals(freqs);
	return {total, rel: freqs.map(v => v / total), cum, cumRel: cum.map(v => v / total)};
};
/**
 * Median position for single values: the first value whose cumulative frequency reaches half the total (s11 scene
 * 5: 10, 28, 40 reaches 20 at the value 2). Returns the value and its index.
 */
export const discreteMedian = (values: readonly number[], freqs: readonly number[]) => {
	const {total, cum} = frequencyColumns(freqs), i = cum.findIndex(c => c >= total / 2);
	return {value: values[i], index: i, level: total / 2};
};
/** Median estimate from a cumulative polygon through upper class boundaries (linear between points). */
export const polygonMedian = (edges: readonly number[], freqs: readonly number[], level?: number) => {
	const {total, cum} = frequencyColumns(freqs), L = level ?? total / 2;
	const j = cum.findIndex(c => c >= L), c0 = j > 0 ? cum[j - 1] : 0, c1 = cum[j];
	const frac = (L - c0) / (c1 - c0);
	return {value: edges[j] + frac * (edges[j + 1] - edges[j]), index: j, c0, c1, frac, level: L};
};
/** Index of the tallest class (the modal class); throws on a tie (two modes: the author says so). */
export const modalIndex = (freqs: readonly number[]) => {
	const mx = Math.max(...freqs), at = freqs.map((v, i) => (v === mx ? i : -1)).filter(i => i >= 0);
	if (at.length !== 1) throw new Error(`modalIndex: ${at.length} classes share the top frequency`);
	return at[0];
};

// =====================================================================================================
// FrequencyTable (s10, s11)
// =====================================================================================================
const DEFAULT_HEAD: Record<FreqColumn, string> = {value: 'value', freq: 'frequency', rel: 'relative frequency', cum: 'cumulative frequency', cumRel: 'cumulative relative frequency'};
const COL_ROLE: Record<FreqColumn, RoleKey | undefined> = {value: undefined, freq: 'a', rel: 'b', cum: 'gradient', cumRel: 'k'};
/**
 * A spreadsheet-style frequency table (s10 scenes 3 and 4, A1; s11's source table). Column letters run A, B, C … in
 * the order given; sheet row 1 holds the headings, the values start at row 2 and the total row follows. Each column
 * fills top to bottom at its cue; every number is computed from `freqs`. `select` outlines a cell and shows its
 * formula in the bar above (=B3/B5, =D2+B3, =D3/B5; `absolute` writes B$5); `highlight` frames a row in green;
 * `totalTick` ticks the relative column's total of 1. `width` sets the table width; columns share it.
 */
export const FrequencyTable: React.FC<{
	x: number; y: number; width?: number; values: readonly (number | string)[]; freqs: readonly number[];
	columns: readonly {key: FreqColumn; at: number; stagger?: number; head?: string}[];
	total?: {at: number; label?: string}; totalTick?: number; select?: readonly {key: FreqColumn; row: number | 'total'; at: number; out?: number}[];
	highlight?: readonly {row: number; at: number; out?: number; keys?: readonly FreqColumn[]}[]; absolute?: boolean; formulaBar?: boolean;
	size?: number; rowHeight?: number; at?: number; out?: number; dimKeys?: {keys: readonly FreqColumn[]; at: number; out?: number};
}> = ({x, y, width = 1300, values, freqs, columns, total, totalTick, select = [], highlight = [], absolute = false, formulaBar = true, size = 44, rowHeight = 74, at = 0, out, dimKeys}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const C = frequencyColumns(freqs), n = freqs.length, totalRow = n + 2;
	const letter = (k: FreqColumn) => String.fromCharCode(65 + columns.findIndex(c => c.key === k));
	const has = (k: FreqColumn) => columns.some(c => c.key === k);
	const digits: Partial<Record<FreqColumn, number>> = {rel: colDigits(C.rel), cumRel: colDigits(C.cumRel)};
	const cellVal = (k: FreqColumn, i: number): string => {
		switch (k) {
			case 'value': return typeof values[i] === 'number' ? niceNum(values[i] as number) : String(values[i]);
			case 'freq': return String(freqs[i]);
			case 'rel': return C.rel[i].toFixed(digits.rel!);
			case 'cum': return String(C.cum[i]);
			default: return C.cumRel[i].toFixed(digits.cumRel!);
		}
	};
	const totalVal = (k: FreqColumn) => (k === 'value' ? total?.label ?? 'total' : k === 'freq' ? String(C.total) : k === 'rel' ? '1' : '');
	const B = has('freq') ? letter('freq') : 'B', D = has('cum') ? letter('cum') : '', tRef = `${B}${absolute ? '$' : ''}${totalRow}`;
	const formula = (k: FreqColumn, row: number | 'total'): string => {
		if (row === 'total') return k === 'freq' || k === 'rel' ? `=SUM(${letter(k)}2:${letter(k)}${n + 1})` : '';
		const r = row + 2;
		switch (k) {
			case 'freq': return String(freqs[row]);
			case 'value': return cellVal('value', row);
			case 'rel': return `=${B}${r}/${tRef}`;
			case 'cum': return row === 0 ? `=${B}2` : `=${D}${r - 1}+${B}${r}`;
			default: return D ? `=${D}${r}/${tRef}` : `=SUM(${B}$2:${B}${r})/${tRef}`;
		}
	};
	const rowNumW = 64, colW = (width - rowNumW) / columns.length, headH = 40, labH = Math.max(26, size * 0.62) * 2.3;
	const top = (formulaBar ? 72 : 0);
	const cx = (j: number) => rowNumW + j * colW, cy = (r: number) => top + headH + labH + r * rowHeight; // r = 0 for the first value row
	const sel = [...select].reverse().find(s => f >= s.at && (s.out === undefined || f < s.out + 10));
	const dimO = dimKeys ? vis(f, dimKeys.at, dimKeys.out, 12) : 0;
	const cellStyle = (j: number, r: number, h: number, extra: React.CSSProperties = {}): React.CSSProperties => ({position: 'absolute', left: cx(j), top: r, width: colW, height: h, display: 'flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box', borderRight: `2px solid ${PAPER_DEEP}`, borderBottom: `2px solid ${PAPER_DEEP}`, fontFamily: FONT_DISPLAY, fontVariantNumeric: 'tabular-nums', ...extra});
	return (
		<div style={{position: 'absolute', left: x, top: y, width, opacity: o, background: CARD, borderRadius: 16, boxShadow: CARD_SHADOW, height: top + headH + labH + (n + 1) * rowHeight + 10}}>
			{formulaBar ? <div style={{position: 'absolute', left: 14, top: 12, right: 14, height: 50, borderRadius: 10, border: `2px solid ${PAPER_DEEP}`, display: 'flex', alignItems: 'center', gap: 18, padding: '0 16px', fontFamily: FONT_DISPLAY, fontSize: 32, fontWeight: 700}}>
				<span style={{color: INK_SOFT, minWidth: 64}}>{sel ? `${letter(sel.key)}${sel.row === 'total' ? totalRow : sel.row + 2}` : ''}</span>
				<span style={{color: INK_SOFT, fontStyle: 'italic'}}>fx</span>
				<span style={{color: INK, fontWeight: 800, fontSize: 36}}>{sel ? formula(sel.key, sel.row) : ''}</span>
			</div> : null}
			<div style={{position: 'absolute', left: 0, top, width: rowNumW, height: headH, background: '#ece6da'}} />
			{columns.map((c, j) => <div key={'L' + j} style={cellStyle(j, top, headH, {background: '#ece6da', fontSize: 26, fontWeight: 700, color: INK_SOFT})}>{String.fromCharCode(65 + j)}</div>)}
			{Array.from({length: n + 2}, (_, r) => <div key={'R' + r} style={{position: 'absolute', left: 0, top: r === 0 ? top + headH : cy(r - 1), width: rowNumW, height: r === 0 ? labH : rowHeight, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#ece6da', fontFamily: FONT_DISPLAY, fontSize: 26, fontWeight: 700, color: INK_SOFT, borderBottom: `2px solid ${PAPER_DEEP}`, boxSizing: 'border-box'}}>{r + 1}</div>)}
			{columns.map((c, j) => {
				const co = prog(f, c.at - 8, 10), role = COL_ROLE[c.key];
				const dim = dimKeys && dimKeys.keys.includes(c.key) ? dimO : 0;
				return <React.Fragment key={c.key}>
					<div style={cellStyle(j, top + headH, labH, {opacity: co * (1 - 0.6 * dim), fontSize: Math.max(26, size * 0.62), fontWeight: 800, color: roleInk(role), lineHeight: 1.05, textAlign: 'center', padding: '0 8px'})}>{c.head ?? DEFAULT_HEAD[c.key]}</div>
					{Array.from({length: n}, (_, i) => {
						const u = prog(f, c.at + i * (c.stagger ?? 14), 10);
						return <div key={i} style={cellStyle(j, cy(i), rowHeight, {opacity: u * (1 - 0.6 * dim), fontSize: size, fontWeight: 800, color: roleInk(role)})}>{cellVal(c.key, i)}</div>;
					})}
					{total ? <div style={cellStyle(j, cy(n), rowHeight, {opacity: prog(f, Math.max(total.at, c.key === 'value' ? total.at : c.at + n * (c.stagger ?? 14)), 10) * (1 - 0.6 * dim), fontSize: size, fontWeight: 800, color: c.key === 'value' ? INK_SOFT : roleInk(role), background: '#f4efe4'})}>
						{totalVal(c.key)}{c.key === 'rel' && totalTick !== undefined && f >= totalTick ? <span style={{color: MATH_ANSWER, marginLeft: 10}}>✓</span> : null}
					</div> : null}
				</React.Fragment>;
			})}
			{highlight.map((h, i) => {
				const ho = vis(f, h.at, h.out, 12);
				if (ho <= 0.001) return null;
				const ks = h.keys ?? columns.map(c => c.key);
				const js = ks.map(k => columns.findIndex(c => c.key === k)).filter(j => j >= 0);
				const j0 = Math.min(...js), j1 = Math.max(...js);
				return <div key={'h' + i} style={{position: 'absolute', left: cx(j0) + 3, top: cy(h.row) + 3, width: (j1 - j0 + 1) * colW - 6, height: rowHeight - 6, border: `5px solid ${MATH_ANSWER}`, borderRadius: 10, opacity: ho, boxSizing: 'border-box'}} />;
			})}
			{sel ? (() => {const j = columns.findIndex(c => c.key === sel.key), r = sel.row === 'total' ? n : sel.row; return <div style={{position: 'absolute', left: cx(j), top: cy(r), width: colW, height: rowHeight, border: `4px solid ${MATH_ROLES.a.stroke}`, boxSizing: 'border-box', opacity: prog(f, sel.at, 8)}} />;})() : null}
		</div>
	);
};

// =====================================================================================================
// Plot layers for ClassHistogram (its `children` render prop) or StudioPlot
// =====================================================================================================
const mids = (edges: readonly number[]) => edges.slice(0, -1).map((e, j) => (e + edges[j + 1]) / 2);
/** Polyline that draws on over [at, at + dur] (pathLength trick). */
const drawOn = (pts: readonly (readonly [number, number])[], u: number, color: string, w: number, dash?: string) => {
	if (u <= 0 || pts.length < 2) return null;
	const d = pts.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(2)},${p[1].toFixed(2)}`).join(' ');
	return dash
		? <path d={d} fill="none" stroke={color} strokeWidth={w} strokeDasharray={dash} opacity={u} strokeLinejoin="round" />
		: <path d={d} fill="none" stroke={color} strokeWidth={w} strokeLinejoin="round" strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - u} />;
};
/**
 * The frequency polygon (s11 scene 4): a point at the middle of each bar top (staggered from `at`), the bars ghosted
 * under a paper wash at `ghostBars`, the points joined at `joinAt`, and the ends closed to the axis at the empty
 * neighbouring classes' midpoints at `closeAt`. `relative` divides by the total. A second polygon (another 40 spins)
 * is another instance with role 'height' and `dashed`.
 */
export const FrequencyPolygon: React.FC<{
	m: PlotMap; edges: readonly number[]; counts: readonly number[]; at: number; joinAt?: number; closeAt?: number; out?: number;
	ghostBars?: number; role?: RoleKey; relative?: boolean; dashed?: boolean; stagger?: number;
}> = ({m, edges, counts, at, joinAt, closeAt, out, ghostBars, role = 'a', relative = false, dashed = false, stagger = 8}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.001) return null;
	const R = MATH_ROLES[role], N = counts.reduce((s, v) => s + v, 0), k = relative ? 1 / N : 1;
	const xs = mids(edges), w0 = edges[1] - edges[0], wN = edges[edges.length - 1] - edges[edges.length - 2];
	const pts = xs.map((v, j) => m.p(v, counts[j] * k));
	// Close to the axis at the empty neighbouring class: an end class that is already empty is its own closure.
	const left = counts[0] === 0 ? pts[0] : m.p(xs[0] - w0, 0), right = counts[counts.length - 1] === 0 ? pts[pts.length - 1] : m.p(xs[xs.length - 1] + wN, 0);
	const ju = joinAt === undefined ? 1 : clamp01((f - joinAt) / 30), cu = closeAt === undefined ? 1 : clamp01((f - closeAt) / 16);
	const go = ghostBars === undefined ? 0 : prog(f, ghostBars, 16);
	return <g opacity={o} clipPath={m.clip}>
		{go > 0 ? edges.slice(0, -1).map((e, j) => {const [x0, ty] = m.p(e, counts[j] * k), [x1, by] = m.p(edges[j + 1], 0); return <rect key={'gb' + j} x={x0 - 3} y={ty - 3} width={x1 - x0 + 6} height={by - ty + 1} fill={CARD} opacity={0.62 * go} />;}) : null}
		{drawOn(pts, smooth(ju), R.stroke, 6, dashed ? '14 10' : undefined)}
		{cu > 0 ? <>{drawOn([left, pts[0]], smooth(cu), R.stroke, 6, dashed ? '14 10' : undefined)}{drawOn([pts[pts.length - 1], right], smooth(cu), R.stroke, 6, dashed ? '14 10' : undefined)}</> : null}
		{pts.map((p, j) => {const u = prog(f, at + j * stagger, 8); return u > 0 ? <circle key={j} cx={p[0]} cy={p[1]} r={11} fill={R.stroke} stroke={CARD} strokeWidth={3} opacity={u} /> : null;})}
		{cu > 0 ? [left, right].map((p, i) => <circle key={'c' + i} cx={p[0]} cy={p[1]} r={10} fill={R.stroke} opacity={cu} />) : null}
	</g>;
};
/**
 * Frequency bars that morph into the cumulative staircase (s11 scene 5, feedback 1): heights run from each class's
 * frequency to its running total over [morphAt, morphAt + dur], the colour from blue to violet, with the heights
 * written on top. Draw on a StudioPlot whose y window reaches the total.
 */
export const CumulativeColumns: React.FC<{m: PlotMap; edges: readonly number[]; counts: readonly number[]; at?: number; morphAt?: number; dur?: number; out?: number; labels?: boolean; grow?: number; relative?: boolean; size?: number}> = ({m, edges, counts, at = 0, morphAt, dur = 36, out, labels = true, grow, relative = false, size = 34}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.001) return null;
	const cum = runningTotals(counts), N = cum[cum.length - 1], k = relative ? 1 / N : 1;
	const u = morphAt === undefined ? 1 : smooth(clamp01((f - morphAt) / dur));
	const g = grow ?? 1;
	const A = MATH_ROLES.a, V = MATH_ROLES.gradient;
	return <g opacity={o}>
		{counts.map((c, j) => {
			const h = lerp(c, cum[j], u) * k * g;
			const [x0, ty] = m.p(edges[j], h), [x1, by] = m.p(edges[j + 1], 0);
			const R = u < 0.5 ? A : V;
			return <g key={j}>
				<rect x={x0} y={ty} width={x1 - x0} height={Math.max(0, by - ty)} fill={R.soft} stroke={R.stroke} strokeWidth={4} />
				{labels && g >= 1 ? <text x={(x0 + x1) / 2} y={ty - 12} textAnchor="middle" {...haloText(size, R.ink)}>{relative ? niceNum(lerp(c, cum[j], u) * k, 2) : Math.round(lerp(c, cum[j], u))}</text> : null}
			</g>;
		})}
	</g>;
};
/**
 * The cumulative frequency polygon (s11 scene 7, feedback 2): points at (first lower boundary, 0) and at each upper
 * class boundary with its running total, plotting in turn from `at`, then joined at `joinAt`. `relative` plots the
 * running total over the total (0 to 1; the same shape). `slip` shows red ghost points at the class midpoints,
 * crossed (the classic slip). `labels` writes each point's coordinates.
 */
export const CumulativePolygon: React.FC<{
	m: PlotMap; edges: readonly number[]; counts: readonly number[]; at: number; joinAt?: number; out?: number; role?: RoleKey; relative?: boolean; stagger?: number;
	slip?: {at: number; out?: number}; labels?: boolean; size?: number;
}> = ({m, edges, counts, at, joinAt, out, role = 'gradient', relative = false, stagger = 10, slip, labels = false, size = 30}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.001) return null;
	const cum = runningTotals(counts), N = cum[cum.length - 1], k = relative ? 1 / N : 1;
	const R = MATH_ROLES[role];
	const data: [number, number][] = [[edges[0], 0], ...cum.map((c, j) => [edges[j + 1], c * k] as [number, number])];
	const pts = data.map(([a, b]) => m.p(a, b));
	const ju = joinAt === undefined ? 1 : clamp01((f - joinAt) / 36);
	const so = slip ? vis(f, slip.at, slip.out, 12) : 0;
	return <g opacity={o}>
		{drawOn(pts, smooth(ju), R.stroke, 6)}
		{pts.map((p, j) => {const u = prog(f, at + j * stagger, 8); return u > 0 ? <g key={j} opacity={u}>
			<circle cx={p[0]} cy={p[1]} r={11} fill={R.stroke} stroke={CARD} strokeWidth={3} />
			{labels ? <text x={p[0] - 14} y={p[1] - 18} textAnchor="end" {...haloText(size, R.ink)}>{`(${niceNum(data[j][0])}, ${relative ? niceNum(data[j][1], 2) : niceNum(data[j][1])})`}</text> : null}
		</g> : null;})}
		{so > 0 ? mids(edges).map((v, j) => {const [px, py] = m.p(v, cum[j] * k), c = prog(f, slip!.at + 14, 10); return <g key={'s' + j} opacity={so}>
			<circle cx={px} cy={py} r={12} fill="none" stroke={MATH_MISTAKE} strokeWidth={4} strokeDasharray="5 5" />
			<path d={`M${px - 16},${py - 16} L${px - 16 + 32 * c},${py - 16 + 32 * c} M${px + 16},${py - 16} L${px + 16 - 32 * c},${py - 16 + 32 * c}`} stroke={MATH_MISTAKE} strokeWidth={5} strokeLinecap="round" />
		</g>;}) : null}
	</g>;
};
/**
 * Median reader (s11 scenes 5 and 7, feedbacks): a dashed line rises up the y-axis from 0 to half the total (or to
 * `level`, for example 0.5 on a relative axis), runs across until it meets the cumulative graph, then drops to the
 * x-axis where a green marker writes the median. Mode 'polygon' interpolates along the cumulative polygon (an
 * estimate, "≈"); mode 'steps' meets the first single-value column that reaches the level and reads that value.
 * `divisions` marks the crossing segment's rise and the matching class width in equal parts (quarters for 22.5).
 */
export const MedianReader: React.FC<{
	m: PlotMap; mode: 'polygon' | 'steps'; edges: readonly number[]; counts: readonly number[]; values?: readonly number[]; at: number; acrossAt?: number; dropAt?: number; out?: number;
	level?: number; relative?: boolean; divisions?: number; label?: (v: number) => string; digits?: number; size?: number; expect?: number;
}> = ({m, mode, edges, counts, values, at, acrossAt, dropAt, out, level, relative = false, divisions, label, digits = 1, size = 40, expect}) => {
	const f = useCurrentFrame();
	const N = counts.reduce((s, v) => s + v, 0), k = relative ? 1 / N : 1;
	const L = level ?? (relative ? 0.5 : N / 2);
	const pm = mode === 'polygon' ? polygonMedian(edges, counts, L / k) : null;
	const dm = mode === 'steps' ? discreteMedian(values ?? mids(edges), counts) : null;
	const med = pm ? pm.value : dm!.value;
	if (expect !== undefined && Math.abs(med - expect) > 0.05) throw new Error(`MedianReader: median ${med}, design says ${expect}`);
	const o = vis(f, at, out, 12);
	if (o <= 0.001) return null;
	const aAt = acrossAt ?? at + 30, dAt = dropAt ?? aAt + 30;
	const rise = smooth(clamp01((f - at) / 26)), across = smooth(clamp01((f - aAt) / 24)), drop = smooth(clamp01((f - dAt) / 20));
	const [ox, oy] = m.p(m.win.x[0] < 0 && m.win.x[1] > 0 ? 0 : m.win.x[0], 0);
	const [, ly] = m.p(0, L * rise);
	const hitX = med;
	const [hx] = m.p(hitX, L), [mx] = m.p(med, 0);
	const G = MATH_ANSWER;
	const txt = (label ?? (v => (pm ? `median ≈ ${niceNum(Math.round(v * 10 ** digits) / 10 ** digits, digits)}` : `median = ${niceNum(v)}`)))(med);
	return <g opacity={o}>
		<line x1={ox} y1={oy} x2={ox} y2={ly} stroke={G} strokeWidth={9} strokeLinecap="round" opacity={0.5} />
		<text x={ox + 16} y={ly - 14} opacity={rise} {...haloText(size, G)}>{relative ? niceNum(L, 2) : niceNum(L)}</text>
		{across > 0 ? <line x1={ox} y1={ly} x2={lerp(ox, hx, across)} y2={ly} stroke={G} strokeWidth={5} strokeDasharray="14 10" /> : null}
		{drop > 0 ? <line x1={hx} y1={ly} x2={pm ? hx : mx} y2={lerp(ly, oy, drop)} stroke={G} strokeWidth={5} strokeDasharray="14 10" /> : null}
		{pm && divisions && across >= 1 ? (() => {
			// Equal parts of the crossing segment: the rise c0 → c1 on the y-axis and the class width on the x-axis.
			const [, y0] = m.p(0, pm.c0 * k), [, y1] = m.p(0, pm.c1 * k), [x0] = m.p(edges[pm.index], 0), [x1] = m.p(edges[pm.index + 1], 0);
			const dv = prog(f, aAt + 24, 14);
			return <g opacity={dv}>
				<line x1={ox + 22} x2={ox + 22} y1={y0} y2={y1} stroke={MATH_ROLES.gradient.stroke} strokeWidth={5} />
				<line x1={x0} x2={x1} y1={oy - 22} y2={oy - 22} stroke={MATH_ROLES.gradient.stroke} strokeWidth={5} />
				{Array.from({length: divisions + 1}, (_, i) => <g key={i}>
					<line x1={ox + 12} x2={ox + 32} y1={lerp(y0, y1, i / divisions)} y2={lerp(y0, y1, i / divisions)} stroke={MATH_ROLES.gradient.stroke} strokeWidth={4} />
					<line y1={oy - 32} y2={oy - 12} x1={lerp(x0, x1, i / divisions)} x2={lerp(x0, x1, i / divisions)} stroke={MATH_ROLES.gradient.stroke} strokeWidth={4} />
				</g>)}
			</g>;
		})() : null}
		{drop >= 1 ? <g opacity={prog(f, dAt + 20, 12)}>
			<path d={`M${mx},${oy - 4} l-14,-24 l28,0 z`} fill={G} />
			<text x={mx + 18} y={oy - 40} {...haloText(size + 4, G)}>{txt}</text>
		</g> : null}
	</g>;
};

// =====================================================================================================
// Module-load self checks on the designs' numbers
// =====================================================================================================
{
	const fail = (what: string) => {throw new Error(`a11-data-parts self check: ${what}`);};
	// s10: frequencies 10, 18, 12 give 0.25, 0.45, 0.30; cumulative 10, 28, 40; cumulative relative 0.25, 0.70, 1.00.
	const s10 = frequencyColumns([10, 18, 12]);
	if (s10.rel.map(v => v.toFixed(2)).join() !== '0.25,0.45,0.30' || s10.cum.join() !== '10,28,40' || s10.cumRel.map(v => v.toFixed(2)).join() !== '0.25,0.70,1.00' || s10.total !== 40) fail('s10 table');
	// s10 A1: 22, 11, 5, 2 give 0.55, 0.275, 0.125, 0.05; cumulative 22, 33, 38, 40; 0.55, 0.825, 0.95, 1; at least one cracked 0.45.
	const a1 = frequencyColumns([22, 11, 5, 2]);
	if (a1.rel.map(v => v.toFixed(3)).join() !== '0.550,0.275,0.125,0.050' || a1.cum.join() !== '22,33,38,40' || Math.abs(1 - a1.rel[0] - 0.45) > 1e-12 || colDigits(a1.rel) !== 3) fail('s10 A1');
	if (Math.abs(13 / 60 - 0.2167) > 1e-4 || 52 / 80 !== 0.65 || 0.65 * 200 !== 130) fail('s10 estimates');
	// s11: mode 2 and median 2 (half of 40 is first reached at 2); A1 mode 2, median 3; ride median 22.5, modal class 20 to 30; quiz ≈ 58.7, modal 60 to 80.
	if (modalIndex([10, 18, 12]) !== 1 || discreteMedian([1, 2, 3], [10, 18, 12]).value !== 2) fail('s11 spins');
	if (modalIndex([3, 9, 5, 6, 4, 3]) !== 1 || discreteMedian([1, 2, 3, 4, 5, 6], [3, 9, 5, 6, 4, 3]).value !== 3 || runningTotals([3, 9, 5, 6, 4, 3]).join() !== '3,12,17,23,27,30') fail('s11 A1');
	const ride = polygonMedian([0, 10, 20, 30, 40, 50], [6, 14, 20, 7, 3]);
	if (Math.abs(ride.value - 22.5) > 1e-12 || ride.frac !== 0.25 || modalIndex([6, 14, 20, 7, 3]) !== 2 || runningTotals([6, 14, 20, 7, 3]).join() !== '6,20,40,47,50') fail('s11 ride');
	if (Math.abs(polygonMedian([0, 10, 20, 30, 40, 50], [6, 14, 20, 7, 3], 0.5 * 50).value - 22.5) > 1e-12) fail('s11 ride relative');
	const quiz = polygonMedian([0, 20, 40, 60, 80, 100], [3, 8, 15, 18, 6]);
	if (Math.abs(quiz.value - (40 + (14 / 15) * 20)) > 1e-12 || quiz.value.toFixed(1) !== '58.7' || modalIndex([3, 8, 15, 18, 6]) !== 3) fail('s11 quiz');
}

