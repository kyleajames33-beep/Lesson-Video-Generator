// Answer side of the skills kit: the HSC-booklet ruled answer box (white, faint blue rules, red margin), handwritten
// answer rows that write on line by line, margin ticks, the mark counter, dotted answer slots, the cause-effect chain
// overlay, the lost-marks tag and the weak-against-strong panel.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, FONT_DISPLAY, prog, scribbleEllipse} from '../../kit';
import {T, findRun, measure, runSpans, wrap} from './text';
import type {Span} from './text';
import {PenTick} from './card';
import {AMBER, CARD, CAUSE, CAUSE_EDGE, GREEN, GREY_INK, INK, INK_SOFT, MARGIN, RED, RED_SOFT, RULE, clamp01, lerp, smooth, vis} from './theme';

export type AnsSpec = {x: number; y: number; w: number; lines: number; lh?: number; size?: number; label?: string; margin?: number};
/** One answer row (a point). It starts on the next free ruled line, writes on from `at` over `dur` frames and gains a
 *  margin tick at `tick`. `gapLines` skips ruled lines before it. */
export type ARow = {text: string; at: number; dur?: number; tick?: number; color?: string; gapLines?: number};
export type AWord = {t: string; ax: number; ay: number; w: number; line: number; row: number};
const HEADER = 50;

export const answerGeom = (spec: AnsSpec, rows: ARow[]) => {
	const lh = spec.lh ?? 54, size = spec.size ?? 33, margin = spec.margin ?? 64;
	const tx = spec.x + margin + 16, tw = spec.w - margin - 34;
	const ruleY = (i: number) => spec.y + HEADER + (i + 1) * lh;
	const base = (i: number) => ruleY(i) - lh * 0.24;
	const words: AWord[] = [];
	const rowInfo: {first: number; n: number; lineText: string[]; chars: number[]}[] = [];
	let line = 0;
	rows.forEach((r, ri) => {
		line += r.gapLines ?? 0;
		const L = wrap(r.text, tw, size, true, 700);
		const lineText: string[] = Array.from({length: L.lines}, () => '');
		for (const w of L.words) {
			words.push({t: w.t, ax: tx + w.x, ay: base(line + w.line), w: w.w, line: line + w.line, row: ri});
			lineText[w.line] = lineText[w.line] ? lineText[w.line] + ' ' + w.t : w.t;
		}
		rowInfo.push({first: line, n: L.lines, lineText, chars: lineText.map(t => t.length)});
		line += L.lines;
	});
	if (line > spec.lines) console.warn(`answer box overflow: ${line} lines in a ${spec.lines}-line box`);
	return {x: spec.x, y: spec.y, w: spec.w, h: HEADER + spec.lines * lh + 16, lh, size, margin, tx, tw, ruleY, base, words, rows: rowInfo, used: line};
};
export type AnsGeom = ReturnType<typeof answerGeom>;
export const ansSpans = (g: AnsGeom, row: number, phrase: string, occ = 1): Span[] => {
	const idx = g.words.map((w, i) => ({w, i})).filter(o => o.w.row === row);
	const [a, b] = findRun(idx.map(o => o.w), phrase, occ, `in answer row ${row}`);
	return runSpans(g.words, idx[a].i, idx[b].i);
};
/** All occurrences of a single word in a row. */
const allSpans = (g: AnsGeom, row: number, word: string): Span[] => {
	const out: Span[] = [];
	for (let k = 1; k < 20; k++) { try { out.push(...ansSpans(g, row, word, k)); } catch { break; } }
	return out;
};

export type AAnn =
	| {kind: 'under'; row: number; phrase: string; occ?: number | 'all'; at: number; color?: string; out?: number}
	| {kind: 'ring'; row: number; phrase: string; occ?: number; at: number; color?: string; out?: number}
	| {kind: 'tick'; row: number; phrase: string; occ?: number; at: number}
	| {kind: 'chain'; row: number; cause: string; effect: string; causeOcc?: number; effectOcc?: number; at: number; out?: number};

/** Mark counter: "n / total" in a pill, popping as each tick lands; optional illustrative label under it. */
export const MarkCounter: React.FC<{x: number; y: number; total: number; ticks: number[]; at: number; out?: number; size?: number; label?: boolean; anchor?: 'end' | 'start'}> = ({x, y, total, ticks, at, out, size = 32, label = false, anchor = 'end'}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 10);
	if (o <= 0.01) return null;
	const n = Math.min(total, ticks.filter(t => f >= t).length);
	const lastT = ticks.filter(t => f >= t).sort((a, b) => b - a)[0];
	const pop = lastT === undefined ? 1 : 1 + 0.3 * Math.sin(clamp01((f - lastT) / 12) * Math.PI);
	const text = `${n} / ${total}`;
	const w = measure(text, size, false, 800) + size * 1.1, h = size * 1.45;
	const x0 = anchor === 'end' ? x - w : x;
	const full = n >= total && total > 0;
	return (
		<g opacity={o}>
			<g transform={`translate(${x0 + w / 2},${y - size * 0.34}) scale(${pop}) translate(${-(x0 + w / 2)},${-(y - size * 0.34)})`}>
				<rect x={x0} y={y - size * 0.34 - h / 2} width={w} height={h} rx={h / 2} fill={full ? '#e3f3e9' : '#fffdf8'} stroke={full ? GREEN : INK_SOFT} strokeWidth={2.5} />
				<text x={x0 + w / 2} y={y} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, fontVariantNumeric: 'tabular-nums'}} fill={full ? GREEN : INK}>{text}</text>
			</g>
			{label ? <T x={anchor === 'end' ? x : x0} y={y + size * 0.9} text="HSCScience marking guide (illustrative)" size={19} color={GREY_INK} anchor={anchor} weight={600} /> : null}
		</g>
	);
};

/** Dotted answer slots, `per` ruled lines each. */
const Slots: React.FC<{g: AnsGeom; at: number; out?: number; n: number; per: number; start?: number}> = ({g, at, out, n, per, start = 0}) => {
	const f = useCurrentFrame();
	return (
		<g>
			{Array.from({length: n}, (_, i) => {
				const o = vis(f, at + i * 6, out, 10);
				if (o <= 0.01) return null;
				const y0 = g.ruleY(start + i * per - 1) + 6, y1 = g.ruleY(start + (i + 1) * per - 1) - 6;
				return <rect key={i} x={g.tx - 8} y={y0} width={g.tw} height={y1 - y0} rx={12} fill="none" stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="4 8" opacity={o * 0.8} />;
			})}
		</g>
	);
};

/** The ruled answer box. Rows write on; ticks land in the margin; the counter in the header counts them. */
export const AnswerBox: React.FC<{spec: AnsSpec; rows?: ARow[]; at: number; out?: number; counter?: {total: number; extra?: number[]; at?: number; label?: boolean}; slots?: {at: number; out?: number; n: number; per?: number}; ann?: AAnn[]; move?: {at: number; dur?: number; x: number; y: number; s: number}; o?: number; dimRows?: {rows: number[]; at: number; out?: number; to?: number}[]; children?: React.ReactNode}> = ({spec, rows = [], at, out, counter, slots, ann = [], move, o = 1, dimRows = [], children}) => {
	const f = useCurrentFrame();
	const g = answerGeom(spec, rows);
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	const m = move ? smooth(prog(f, move.at, move.dur ?? 22)) : 0;
	const s = move ? lerp(1, move.s, m) : 1;
	const dx = move ? lerp(0, move.x - spec.x, m) : 0, dy = move ? lerp(0, move.y - spec.y, m) : 0;
	const rowDim = (r: number) => dimRows.reduce((acc, d) => (d.rows.includes(r) ? acc * (1 - (1 - (d.to ?? 0.3)) * vis(f, d.at, d.out, 12)) : acc), 1);
	const draw = prog(f, at, 20);
	const ticks = [...rows.map(r => r.tick).filter((t): t is number => t !== undefined), ...ann.filter(a => a.kind === 'tick').map(a => a.at), ...(counter?.extra ?? [])];
	return (
		<g opacity={v} transform={`translate(${spec.x + dx},${spec.y + dy}) scale(${s}) translate(${-spec.x},${-spec.y})`}>
			<rect x={g.x + 4} y={g.y + 7} width={g.w} height={g.h} rx={10} fill="rgba(60,45,20,0.07)" />
			<rect x={g.x} y={g.y} width={g.w} height={g.h} rx={10} fill={CARD} stroke="rgba(60,45,20,0.22)" strokeWidth={2.5} />
			<T x={g.x + 22} y={g.y + 36} text={spec.label ?? 'Answer'} size={30} color={INK_SOFT} hand weight={700} />
			{Array.from({length: spec.lines}, (_, i) => <line key={i} x1={g.x + 10} x2={g.x + 10 + (g.w - 20) * clamp01(draw * 1.4 - i * 0.05)} y1={g.ruleY(i)} y2={g.ruleY(i)} stroke={RULE} strokeWidth={2} />)}
			<line x1={g.x + g.margin} x2={g.x + g.margin} y1={g.y + HEADER - 4} y2={g.y + HEADER - 4 + (g.h - HEADER - 6) * draw} stroke={MARGIN} strokeWidth={2} />
			{slots ? <Slots g={g} at={slots.at} out={slots.out} n={slots.n} per={slots.per ?? 2} /> : null}
			{ann.map((a, i) => {
				if (a.kind !== 'chain') return null;
				const ov = vis(f, a.at, a.out, 10);
				if (ov <= 0.01) return null;
				const c = ansSpans(g, a.row, a.cause, a.causeOcc ?? 1), e = ansSpans(g, a.row, a.effect, a.effectOcc ?? 1);
				const box = (sp: Span, k: number, d: number) => <rect key={k} x={sp.x1 - 6} y={sp.y - g.size * 0.82} width={(sp.x2 - sp.x1 + 12) * clamp01((f - a.at - d) / 10)} height={g.size * 1.1} rx={8} fill={CAUSE} />;
				const cz = c[c.length - 1], e0 = e[0];
				const p1: [number, number] = [(cz.x1 + cz.x2) / 2, cz.y + g.size * 0.32], p2: [number, number] = [(e0.x1 + e0.x2) / 2, e0.y + g.size * 0.32];
				const sameLine = Math.abs(p1[1] - p2[1]) < 2;
				const mid: [number, number] = sameLine ? [(p1[0] + p2[0]) / 2, p1[1] + 26] : [(p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2 + 8];
				const ang = Math.atan2(p2[1] - mid[1], p2[0] - mid[0]);
				return (
					<g key={'c' + i} opacity={ov}>
						{c.map((sp, k) => box(sp, k, 0))}
						{e.map((sp, k) => box(sp, 10 + k, 12))}
						<DrawPath d={`M${p1[0]},${p1[1]} Q${mid[0]},${mid[1]} ${p2[0]},${p2[1]}`} at={a.at + 14} dur={14} color={CAUSE_EDGE} width={3.5} />
						<path d={`M${p2[0] - Math.cos(ang - 0.5) * 13},${p2[1] - Math.sin(ang - 0.5) * 13} L${p2[0]},${p2[1]} L${p2[0] - Math.cos(ang + 0.5) * 13},${p2[1] - Math.sin(ang + 0.5) * 13}`} fill="none" stroke={CAUSE_EDGE} strokeWidth={3.5} strokeLinecap="round" opacity={prog(f, a.at + 26, 6)} />
					</g>
				);
			})}
			{rows.map((r, ri) => {
				const info = g.rows[ri];
				const total = info.chars.reduce((a2, b) => a2 + b, 0);
				const dur = r.dur ?? Math.max(20, total * 0.85);
				let acc = 0;
				const dim = rowDim(ri);
				return (
					<g key={ri} opacity={dim}>
						{info.lineText.map((lt, li) => {
							const t0 = r.at + (acc / total) * dur;
							acc += info.chars[li];
							const t1 = r.at + (acc / total) * dur;
							const p = clamp01((f - t0) / Math.max(1, t1 - t0));
							if (p <= 0) return null;
							return (
								<g key={li} style={p >= 1 ? undefined : {clipPath: `inset(-40% ${100 - p * 100}% -40% -2%)`}}>
									<T x={g.tx} y={g.base(info.first + li)} text={lt} size={g.size} color={r.color ?? INK} hand weight={700} />
								</g>
							);
						})}
						{r.tick !== undefined ? <PenTick x={g.x + g.margin / 2} y={g.base(info.first) - g.size * 0.3} at={r.tick} s={30} /> : null}
					</g>
				);
			})}
			{ann.map((a, i) => {
				if (a.kind === 'chain') return null;
				if (a.kind === 'tick') {
					const sp = ansSpans(g, a.row, a.phrase, a.occ ?? 1);
					return <PenTick key={i} x={g.x + g.margin / 2} y={sp[0].y - g.size * 0.3} at={a.at} s={30} />;
				}
				const sps = a.kind === 'under' && a.occ === 'all' ? allSpans(g, a.row, a.phrase) : ansSpans(g, a.row, a.phrase, typeof a.occ === 'number' ? a.occ : 1);
				const oo = a.out === undefined ? 1 : 1 - prog(f, a.out, 8);
				if (oo <= 0.01) return null;
				if (a.kind === 'under') return <g key={i} opacity={oo}>{sps.map((sp, k) => <DrawPath key={k} d={`M${sp.x1 - 3},${sp.y + 8} L${sp.x2 + 3},${sp.y + 6}`} at={a.at + k * 5} dur={8} color={a.color ?? AMBER} width={5} />)}</g>;
				return <g key={i} opacity={oo}>{sps.map((sp, k) => <DrawPath key={k} d={scribbleEllipse((sp.x1 + sp.x2) / 2, sp.y - g.size * 0.3, (sp.x2 - sp.x1) / 2 + 12, g.size * 0.66, 4 + k, 1.12)} at={a.at} dur={14} color={a.color ?? AMBER} width={4} />)}</g>;
			})}
			{counter ? <MarkCounter x={g.x + g.w - 18} y={g.y + 37} total={counter.total} ticks={ticks} at={counter.at ?? at} size={28} /> : null}
			{counter?.label ? <T x={g.x + g.w - 6} y={g.y + g.h + 26} text="HSCScience marking guide (illustrative)" size={19} color={GREY_INK} anchor="end" weight={600} o={prog(f, counter.at ?? at, 12)} /> : null}
			{children}
		</g>
	);
};

/** Red lost-marks tag, for example "−2: not in terms of collision theory". Wraps at maxW. */
export const LostMarksTag: React.FC<{x: number; y: number; text: string; at: number; out?: number; size?: number; maxW?: number}> = ({x, y, text, at, out, size = 27, maxW = 900}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 10);
	if (o <= 0.01) return null;
	const L = wrap(text, maxW - 36, size, false, 700);
	const lines: string[] = Array.from({length: L.lines}, () => '');
	L.words.forEach(w => { lines[w.line] = lines[w.line] ? lines[w.line] + ' ' + w.t : w.t; });
	const w = Math.max(...L.widths) + 36, h = L.lines * size * 1.3 + 22;
	const pop = 1 + 0.12 * Math.sin(clamp01((f - at) / 10) * Math.PI);
	return (
		<g opacity={o} transform={`translate(${x},${y}) scale(${pop}) translate(${-x},${-y})`}>
			<rect x={x} y={y} width={w} height={h} rx={12} fill={RED_SOFT} stroke={RED} strokeWidth={3} />
			{lines.map((t, i) => <T key={i} x={x + 18} y={y + 11 + size * 1.02 + i * size * 1.3} text={t} size={size} color={RED} weight={700} />)}
		</g>
	);
};

/**
 * Weak against strong: the strong answer (already built) moves aside as "Answer B" and keeps its ticks; the weak
 * answer writes on as "Answer A" with its own ticks, counter and red lost-marks tag. Positions come from the scene.
 */
export const WeakStrongPanel: React.FC<{
	strong: {spec: AnsSpec; rows: ARow[]; total: number; ann?: AAnn[]; to: {x: number; y: number; s: number}; moveAt: number; dim?: number};
	weak: {spec: AnsSpec; rows: ARow[]; total: number; ann?: AAnn[]; at: number};
	lost?: {x: number; y: number; text: string; at: number; maxW?: number};
}> = ({strong, weak, lost}) => {
	const f = useCurrentFrame();
	return (
		<g>
			<AnswerBox spec={{...strong.spec, label: 'Answer B'}} rows={strong.rows.map(r => ({...r, at: -1000, tick: r.tick === undefined ? undefined : -1000}))} at={-100} counter={{total: strong.total, at: -100}} ann={strong.ann} move={{at: strong.moveAt, x: strong.to.x, y: strong.to.y, s: strong.to.s}} o={1 - (1 - (strong.dim ?? 0.6)) * prog(f, strong.moveAt + 20, 16)} />
			<AnswerBox spec={{...weak.spec, label: 'Answer A'}} rows={weak.rows} at={weak.at} counter={{total: weak.total, at: weak.at, label: true}} ann={weak.ann} />
			{lost ? <LostMarksTag x={lost.x} y={lost.y} text={lost.text} at={lost.at} maxW={lost.maxW} /> : null}
		</g>
	);
};
