// The HSC-style question card and its annotation layer (skills series).
// The card is typeset like an HSC paper: plain sans text on white, an optional centred equation line, an optional
// ruled table and the mark value in brackets at the right. Header: subject badge (left) and the dashed tag
// "HSC-style question, written for HSCScience" (right), which every card carries.
// Annotations sit on the measured words: highlighter swipe (verb), marks ring, pen underline (content words and
// givens), teal square brackets (constraint phrases), rings, ticks, glow pulses and small job tags.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, FONT_DISPLAY, FONT_HAND, prog, scribbleEllipse} from '../../kit';
import {T, findRun, measure, runSpans, wrap} from './text';
import type {Span} from './text';
import {AMBER, AMBER_INK, CARD, GREEN, GREY_FILL, GREY_INK, HI, INK, INK_SOFT, PEN, SUBJECT_COLOUR, TEAL, clamp01, pulse, smooth, vis} from './theme';

export type QText = {text: string; at?: number; align?: 'left' | 'center'; marks?: string; marksAt?: number; gap?: number; weight?: number; label?: string};
export type QTable = {table: {head: string[]; rows: string[][]; colW: number[]}; at?: number; gap?: number};
export type QItem = QText | QTable;
export type Subject = 'Chemistry' | 'Biology';
export type CardSpec = {x: number; y: number; w: number; subject: Subject; items: QItem[]; size?: number; slotW?: number; pad?: number; note?: string};
export type GWord = {t: string; ax: number; ay: number; w: number; line: number; item: number; bold?: boolean};
const HEADER = 62;
const isTable = (q: QItem): q is QTable => 'table' in q;

/** Pure geometry of a card (absolute coordinates, unscaled). */
export const cardGeom = (spec: CardSpec) => {
	const size = spec.size ?? 30, pad = spec.pad ?? 36, lh = Math.round(size * 1.38);
	const textX = spec.x + pad, textW = spec.w - 2 * pad - (spec.slotW ?? 0);
	const words: GWord[] = [];
	const items: {y0: number; y1: number; marks?: {x1: number; x2: number; y: number; text: string}; cells?: {x: number; y: number; w: number; h: number}[]; rowH?: number; colX?: number[]}[] = [];
	let cursor = spec.y + HEADER + 22, line = 0;
	spec.items.forEach((q, ii) => {
		if (ii > 0) cursor += (q.gap ?? 0.42) * lh;
		const y0 = cursor;
		if (isTable(q)) {
			const rowH = Math.round(lh * 1.04);
			const colX: number[] = [];
			let cx = textX + 10;
			q.table.colW.forEach(w => { colX.push(cx); cx += w; });
			[q.table.head, ...q.table.rows].forEach((row, r) => {
				const by = y0 + r * rowH + rowH * 0.68;
				row.forEach((cell, c) => {
					let wx = colX[c] + 18;
					for (const t of cell.split(/\s+/).filter(Boolean)) {
						const ww = measure(t, size * 0.94, false, r === 0 ? 700 : 500);
						words.push({t, ax: wx, ay: by, w: ww, line, item: ii, bold: r === 0});
						wx += ww + measure(' ', size * 0.94);
					}
				});
				line++;
			});
			const n = q.table.rows.length + 1;
			items.push({y0, y1: y0 + n * rowH, rowH, colX: [...colX, cx]});
			cursor = y0 + n * rowH;
			return;
		}
		const indent = q.label ? Math.round(size * 1.7) : 0;
		const avail = textW - indent;
		const L = wrap(q.text, avail, size, false, q.weight ?? 500);
		let nLines = L.lines;
		let marks: {x1: number; x2: number; y: number; text: string} | undefined;
		if (q.marks) {
			const mt = `(${q.marks})`;
			const mwid = measure(mt, size, false, 500);
			const lastW = L.widths[L.lines - 1] + indent;
			if (lastW + 40 + mwid > textW) nLines += 1;
			marks = {x1: textX + textW - mwid, x2: textX + textW, y: y0 + size + (nLines - 1) * lh, text: mt};
		}
		const centre = q.align === 'center';
		for (const w of L.words) {
			const off = centre ? (avail - L.widths[w.line]) / 2 : 0;
			words.push({t: w.t, ax: textX + indent + w.x + off, ay: y0 + size + w.line * lh, w: w.w, line: line + w.line, item: ii, bold: (q.weight ?? 500) >= 650});
		}
		line += nLines;
		items.push({y0, y1: y0 + nLines * lh, marks});
		cursor = y0 + nLines * lh;
	});
	const h = cursor - spec.y + 18;
	return {x: spec.x, y: spec.y, w: spec.w, h, size, lh, textX, textW, words, items, slot: {x: spec.x + spec.w - pad - (spec.slotW ?? 0), y: spec.y + HEADER + 10, w: spec.slotW ?? 0, h: h - HEADER - 26}};
};
export type CardGeom = ReturnType<typeof cardGeom>;

/** Spans of a phrase on the card (unscaled). `item` limits the search to one item. */
export const cardSpans = (g: CardGeom, phrase: string, occ = 1, item?: number): Span[] => {
	const idx = g.words.map((w, i) => ({w, i})).filter(o => item === undefined || o.w.item === item);
	const [a, b] = findRun(idx.map(o => o.w), phrase, occ, 'on the question card');
	return runSpans(g.words, idx[a].i, idx[b].i);
};
/** Map an unscaled card point to the screen when the card is drawn at scale s (about its top-left). */
export const cardPt = (spec: CardSpec, s: number, p: [number, number]): [number, number] => [spec.x + (p[0] - spec.x) * s, spec.y + (p[1] - spec.y) * s];
/** Screen box of a phrase (first span) for pointing at it from outside the card. */
export const phraseAt = (spec: CardSpec, phrase: string, occ = 1, s = 1, item?: number) => {
	const g = cardGeom(spec);
	const sp = cardSpans(g, phrase, occ, item);
	const a = sp[0], z = sp[sp.length - 1];
	const [x1, y] = cardPt(spec, s, [a.x1, a.y]);
	const [x2] = cardPt(spec, s, [a.x2, a.y]);
	const [zx2, zy] = cardPt(spec, s, [z.x2, z.y]);
	return {x1, x2, y, cx: (x1 + x2) / 2, top: y - g.size * 0.85 * s, bottom: y + g.size * 0.3 * s, endX: zx2, endY: zy};
};
/** Screen position of an item's "(n marks)" text. */
export const marksAt = (spec: CardSpec, item?: number, s = 1) => {
	const g = cardGeom(spec);
	const i = item ?? g.items.map((it, k) => (it.marks ? k : -1)).filter(k => k >= 0).pop()!;
	const m = g.items[i].marks!;
	const [x1, y] = cardPt(spec, s, [m.x1, m.y]);
	const [x2] = cardPt(spec, s, [m.x2, m.y]);
	return {x1, x2, y, cx: (x1 + x2) / 2, cy: y - g.size * 0.34 * s};
};

export type Ann =
	| {kind: 'verb' | 'given' | 'constraint' | 'ring' | 'tick' | 'pulse' | 'tag'; phrase: string; occ?: number; item?: number; at: number; out?: number; color?: string; text?: string; above?: boolean}
	| {kind: 'marks'; item?: number; at: number; out?: number; color?: string};
export type CardDim = {items: number[]; at: number; out?: number; to?: number};

const sweep = (f: number, at: number, i: number, n: number, dur = 12) => clamp01((f - at - (i * dur) / Math.max(1, n)) / (dur / Math.max(1, n)));

/** Highlighter swipe behind spans (drawn under the text). */
const Highlight: React.FC<{spans: Span[]; size: number; at: number; out?: number; color?: string}> = ({spans, size, at, out, color = HI}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 6);
	if (f < at || o <= 0.01) return null;
	return (
		<g opacity={o}>
			{spans.map((s, i) => {
				const p = smooth(sweep(f, at, i, spans.length));
				const w = (s.x2 - s.x1 + 12) * p;
				return <path key={i} d={`M${s.x1 - 6},${s.y - size * 0.78} L${s.x1 - 6 + w},${s.y - size * 0.84} L${s.x1 - 6 + w},${s.y + size * 0.2} L${s.x1 - 6},${s.y + size * 0.26} Z`} fill={color} opacity={0.82} />;
			})}
		</g>
	);
};
const Underline: React.FC<{spans: Span[]; size: number; at: number; out?: number; color?: string}> = ({spans, size, at, out, color = PEN}) => {
	const f = useCurrentFrame();
	const o = out === undefined ? 1 : 1 - prog(f, out, 8);
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			{spans.map((s, i) => {
				const y = s.y + size * 0.2, x1 = s.x1 - 2, x2 = s.x2 + 2;
				return <DrawPath key={i} d={`M${x1},${y + 1} C${x1 + (x2 - x1) * 0.3},${y + 4} ${x1 + (x2 - x1) * 0.7},${y - 2} ${x2},${y + 2}`} at={at + i * 6} dur={Math.min(16, 6 + (x2 - x1) / 50)} color={color} width={3.6} />;
			})}
		</g>
	);
};
/** Teal square brackets round a phrase (left of its first span, right of its last), with a faint wash. */
const Brackets: React.FC<{spans: Span[]; size: number; at: number; out?: number; color?: string}> = ({spans, size, at, out, color = TEAL}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 8);
	if (o <= 0.01) return null;
	const a = spans[0], z = spans[spans.length - 1];
	const t = (s: Span) => s.y - size * 0.92, b = (s: Span) => s.y + size * 0.3;
	const d = 10;
	return (
		<g opacity={o}>
			{spans.map((s, i) => <rect key={i} x={s.x1 - 6} y={t(s)} width={s.x2 - s.x1 + 12} height={b(s) - t(s)} fill={color} opacity={0.1 * prog(f, at + 8, 10)} />)}
			<DrawPath d={`M${a.x1 - 6 + d},${t(a)} L${a.x1 - 6},${t(a)} L${a.x1 - 6},${b(a)} L${a.x1 - 6 + d},${b(a)}`} at={at} dur={8} color={color} width={4.5} cap="butt" />
			<DrawPath d={`M${z.x2 + 6 - d},${t(z)} L${z.x2 + 6},${t(z)} L${z.x2 + 6},${b(z)} L${z.x2 + 6 - d},${b(z)}`} at={at + 6} dur={8} color={color} width={4.5} cap="butt" />
		</g>
	);
};
const RingSpans: React.FC<{spans: Span[]; size: number; at: number; out?: number; color?: string; seed?: number}> = ({spans, size, at, out, color = AMBER, seed = 5}) => {
	const f = useCurrentFrame();
	const o = out === undefined ? 1 : 1 - prog(f, out, 8);
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			{spans.map((s, i) => <DrawPath key={i} d={scribbleEllipse((s.x1 + s.x2) / 2, s.y - size * 0.32, (s.x2 - s.x1) / 2 + 14, size * 0.72, seed + i, 1.12)} at={at + i * 8} dur={16} color={color} width={4} />)}
		</g>
	);
};
/** Small green pen tick. */
export const PenTick: React.FC<{x: number; y: number; at: number; s?: number; color?: string; out?: number}> = ({x, y, at, s = 30, color = GREEN, out}) => {
	const f = useCurrentFrame();
	const o = out === undefined ? 1 : 1 - prog(f, out, 8);
	if (o <= 0.01 || f < at) return null;
	return <g opacity={o}><DrawPath d={`M${x - s * 0.5},${y} L${x - s * 0.12},${y + s * 0.42} L${x + s * 0.55},${y - s * 0.5}`} at={at} dur={10} color={color} width={Math.max(4, s * 0.2)} /></g>;
};

/**
 * The question card. `ann` are annotations; `dims` fade whole items back (for example, the other lettered parts);
 * `s` scales the card about its top-left (number, or a function of the frame for a shrink); `children` draw in card
 * coordinates on top (plates in the right slot, see cardGeom(spec).slot).
 */
export const QuestionCard: React.FC<{spec: CardSpec; at: number; out?: number; ann?: Ann[]; dims?: CardDim[]; s?: number | ((f: number) => number); o?: number; rot?: number; children?: React.ReactNode; tag?: boolean}> = ({spec, at, out, ann = [], dims = [], s = 1, o = 1, rot = 0, children, tag = true}) => {
	const f = useCurrentFrame();
	const g = cardGeom(spec);
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	const sc = typeof s === 'function' ? s(f) : s;
	const lift = (1 - prog(f, at, 18)) * 26;
	const col = SUBJECT_COLOUR[spec.subject];
	const dimOf = (item: number) => dims.reduce((acc, d) => (d.items.includes(item) ? acc * (1 - (1 - (d.to ?? 0.28)) * vis(f, d.at, d.out, 12)) : acc), 1);
	const itemAt = (i: number) => spec.items[i].at ?? at + 6;
	const spansOf = (a: Ann) => (a.kind === 'marks' ? [] : cardSpans(g, a.phrase, a.occ ?? 1, a.item));
	const badgeW = measure(spec.subject.toUpperCase(), 21, false, 800) + 34;
	const tagText = 'HSC-style question, written for HSCScience';
	const tagW = measure(tagText, 25, true, 700) + 40;
	// word index within its item, for the write-on stagger
	const counters: number[] = [];
	return (
		<g opacity={v} transform={`translate(0,${lift}) translate(${spec.x},${spec.y}) scale(${sc}) rotate(${rot}) translate(${-spec.x},${-spec.y})`}>
			<rect x={g.x + 4} y={g.y + 8} width={g.w} height={g.h} rx={14} fill="rgba(60,45,20,0.08)" />
			<rect x={g.x} y={g.y} width={g.w} height={g.h} rx={14} fill={CARD} stroke="rgba(60,45,20,0.24)" strokeWidth={2.5} />
			<rect x={g.x + 26} y={g.y + 18} width={badgeW} height={34} rx={8} fill={col} />
			<T x={g.x + 26 + badgeW / 2} y={g.y + 42} text={spec.subject.toUpperCase()} size={21} color="#fffdf8" anchor="middle" weight={800} />
			{spec.note ? (
				<g>
					<rect x={g.x + 40 + badgeW} y={g.y + 18} width={measure(spec.note, 21, false, 600) + 28} height={34} rx={8} fill={GREY_FILL} />
					<T x={g.x + 54 + badgeW} y={g.y + 42} text={spec.note} size={21} color={GREY_INK} weight={600} />
				</g>
			) : null}
			{tag ? (
				<g>
					<rect x={g.x + g.w - 22 - tagW} y={g.y + 16} width={tagW} height={38} rx={19} fill="none" stroke={INK_SOFT} strokeWidth={2} strokeDasharray="7 5" />
					<T x={g.x + g.w - 22 - tagW / 2} y={g.y + 43} text={tagText} size={25} color={INK_SOFT} anchor="middle" hand weight={700} />
				</g>
			) : null}
			<line x1={g.x + 24} y1={g.y + HEADER + 4} x2={g.x + g.w - 24} y2={g.y + HEADER + 4} stroke="rgba(60,45,20,0.14)" strokeWidth={2} />
			{ann.filter(a => a.kind === 'verb' || a.kind === 'pulse').map((a, i) => <g key={'hp' + i} opacity={a.item === undefined ? 1 : dimOf(a.item)}>{a.kind === 'verb'
				? <Highlight key={'h' + i} spans={spansOf(a)} size={g.size} at={a.at} out={a.out} color={a.color} />
				: <g key={'p' + i} opacity={pulse(f, a.at, 36) * 0.9}>{spansOf(a).map((sp, k) => <rect key={k} x={sp.x1 - 8} y={sp.y - g.size * 0.95} width={sp.x2 - sp.x1 + 16} height={g.size * 1.3} rx={8} fill={a.color ?? HI} />)}</g>}</g>)}
			{g.items.map((it, ii) => {
				const q = spec.items[ii];
				if (!isTable(q) || !it.colX || !it.rowH) return null;
				const op = prog(f, itemAt(ii), 12) * dimOf(ii);
				const x0 = it.colX[0], x1 = it.colX[it.colX.length - 1];
				const n = q.table.rows.length + 1;
				const rh = it.rowH;
				return (
					<g key={'t' + ii} opacity={op} stroke="rgba(40,35,30,0.55)" strokeWidth={1.6}>
						<rect x={x0} y={it.y0} width={x1 - x0} height={n * rh} fill="none" />
						<rect x={x0} y={it.y0} width={x1 - x0} height={rh} fill="rgba(60,45,20,0.05)" stroke="none" />
						{Array.from({length: n - 1}, (_, r) => <line key={'r' + r} x1={x0} x2={x1} y1={it.y0 + (r + 1) * rh} y2={it.y0 + (r + 1) * rh} />)}
						{it.colX.slice(1, -1).map((cx, c) => <line key={'c' + c} x1={cx} x2={cx} y1={it.y0} y2={it.y0 + n * rh} />)}
					</g>
				);
			})}
			{g.words.map((w, i) => {
				counters[w.item] = (counters[w.item] ?? -1) + 1;
				const q = spec.items[w.item];
				const op = prog(f, itemAt(w.item) + counters[w.item] * 0.6, 8) * dimOf(w.item);
				if (op <= 0.01) return null;
				const tsz = isTable(q) ? g.size * 0.94 : g.size;
				return <T key={i} x={w.ax} y={w.ay} text={w.t} size={tsz} weight={w.bold ? 700 : 500} o={op} />;
			})}
			{spec.items.map((q, ii) => (!isTable(q) && q.label ? <T key={'l' + ii} x={g.textX} y={g.items[ii].y0 + g.size} text={q.label} size={g.size} weight={500} o={prog(f, itemAt(ii), 10) * dimOf(ii)} /> : null))}
			{g.items.map((it, ii) => (it.marks ? <T key={'m' + ii} x={it.marks.x2} y={it.marks.y} text={it.marks.text} size={g.size} anchor="end" weight={500} o={prog(f, (spec.items[ii] as QText).marksAt ?? itemAt(ii) + 6, 10) * dimOf(ii)} /> : null))}
			{ann.map((a, i) => <g key={'a' + i} opacity={a.item === undefined ? 1 : dimOf(a.item)}>{(() => {
				if (a.kind === 'verb' || a.kind === 'pulse') return null;
				if (a.kind === 'marks') {
					const k = a.item ?? g.items.map((it, j) => (it.marks ? j : -1)).filter(j => j >= 0).pop()!;
					const m = g.items[k].marks!;
					const oo = a.out === undefined ? 1 : 1 - prog(f, a.out, 8);
					return oo > 0.01 ? <g key={i} opacity={oo}><DrawPath d={scribbleEllipse((m.x1 + m.x2) / 2, m.y - g.size * 0.33, (m.x2 - m.x1) / 2 + 16, g.size * 0.78, 9, 1.15)} at={a.at} dur={14} color={a.color ?? AMBER} width={4.5} /></g> : null;
				}
				const sp = spansOf(a);
				if (a.kind === 'given') return <Underline key={i} spans={sp} size={g.size} at={a.at} out={a.out} color={a.color} />;
				if (a.kind === 'constraint') return <Brackets key={i} spans={sp} size={g.size} at={a.at} out={a.out} color={a.color} />;
				if (a.kind === 'ring') return <RingSpans key={i} spans={sp} size={g.size} at={a.at} out={a.out} color={a.color} seed={i + 3} />;
				if (a.kind === 'tick') { const z = sp[sp.length - 1]; return a.above ? <PenTick key={i} x={sp[0].x1 + 18} y={sp[0].y - g.size * 1.25} at={a.at} out={a.out} s={30} color={a.color} /> : <PenTick key={i} x={z.x2 + 26} y={z.y - g.size * 0.45} at={a.at} out={a.out} s={28} color={a.color} />; }
				if (a.kind === 'tag') {
					const s0 = sp[0];
					const tw = measure(a.text ?? '', 24, true, 700) + 22;
					const oo = vis(f, a.at, a.out, 10);
					return oo > 0.01 ? (
						<g key={i} opacity={oo}>
							<rect x={s0.x1 - 4} y={s0.y - g.size * 0.95 - 34} width={tw} height={30} rx={15} fill={a.color ?? AMBER} />
							<text x={s0.x1 - 4 + tw / 2} y={s0.y - g.size * 0.95 - 12} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 24}} fill="#fffdf8">{a.text}</text>
						</g>
					) : null;
				}
				return null;
			})()}</g>)}
			{children}
			{void FONT_DISPLAY}{void AMBER_INK}
		</g>
	);
};

/** The marks badge: a round stamp with the mark value that lifts off the card at `at` and travels to `to`. */
export const MarksBadge: React.FC<{from: [number, number]; to: [number, number]; value: string; at: number; dur?: number; r?: number; out?: number; color?: string}> = ({from, to, value, at, dur = 26, r = 30, out, color = AMBER}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 8);
	if (o <= 0.01) return null;
	const p = smooth(prog(f, at + 4, dur));
	const x = from[0] + (to[0] - from[0]) * p, y = from[1] + (to[1] - from[1]) * p - Math.sin(p * Math.PI) * 40;
	const pop = 1 + 0.25 * Math.sin(clamp01((f - at) / 10) * Math.PI);
	return (
		<g opacity={o} transform={`translate(${x},${y}) scale(${pop})`}>
			<circle r={r} fill="#fff8e6" stroke={color} strokeWidth={5} />
			<text y={r * 0.38} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: r * 1.1}} fill={AMBER_INK}>{value}</text>
		</g>
	);
};
