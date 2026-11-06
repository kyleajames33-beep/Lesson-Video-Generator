// Module 8 Biology practice board (bio-m8-g01 builds it; bio-m8-g03 reuses it). The worded question card (stem, data
// and demands as an exam prints them, full text from the first frame), the left question column that the walkthrough
// keeps readable with amber underlines on cue, a data table with cell underlines, the pause hold with the shared
// countdown, chips, grey recall tags, the crossed classic mistake, the framed answer, an answer box whose lines write on
// cue, painted plates with a fade window, a fraction row with a boxed denominator, and the decision board. Type sizes
// follow the A-grade gate: current lines 44 px or more, readouts about 52 px, nothing below 26 px, full ink for content.
// Other lessons' parts are imported read-only. Nothing here draws people.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, BLUE, Countdown, DrawPath, INK, INK_SOFT, prog, scribbleEllipse} from '../../kit';
import {Sx} from '../chem-m5-c05/parts';
import {mw} from '../chem-m5-c11/parts';
import {PlateB, pbH, pbPt} from '../bio-m5-b07/shared';
import type {PB} from '../bio-m5-b07/shared';
import {QText, qCheck} from '../bio-m5-g01/board';
import type {QBlock, QMark} from '../bio-m5-g01/board';
import {Zoom} from '../bio-m8-b01/parts';

export {AMBER, AMBER_INK, BLUE, Countdown, DrawPath, INK, INK_SOFT, prog, scribbleEllipse, Sx, mw, PlateB, pbH, pbPt, QText, qCheck, Zoom};
export type {PB, QBlock, QMark};

export const TEAL = '#2f7f86';
export const TEAL_SOFT = '#e3f1f2';
export const RED = '#c4432f';
export const GREYT = '#575148';
export const GREY_FILL = '#f1eee7';
export const VIOLET = '#6a4fb0';
export const CARD = '#fffdf8';
export const EDGE = 'rgba(60,45,20,0.24)';
export const GLOW = '#fff1d2';
export const HSC = 'HSC-style question, written for HSCScience';

export const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
export const smooth = (t: number) => { const u = clamp01(t); return u * u * (3 - 2 * u); };
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
export const vis = (f: number, at: number, out?: number, d = 12) => prog(f, at, d) * (out === undefined ? 1 : 1 - prog(f, out, d));
/** A single bump 0..1..0 from `at` over `d` frames. */
export const pulse = (f: number, at: number, d = 30) => (f < at || f > at + d ? 0 : Math.sin(((f - at) / d) * Math.PI));
export const plateW = (p: PB, h: number) => (h * (p.box[2] - p.box[0])) / (p.box[3] - p.box[1]);

// ---------- text ----------
export const wrapM = (text: string, size: number, maxW: number, hand = false, weight = 700): string[] => {
	const out: string[] = [];
	let line = '';
	for (const w of text.split(' ')) {
		const t = line ? line + ' ' + w : w;
		if (line && mw(t, size, hand, weight) > maxW) { out.push(line); line = w; } else line = t;
	}
	if (line) out.push(line);
	return out;
};
/** Wrapped text (hand by default). y is the first baseline. */
export const T: React.FC<{x: number; y: number; text: string; size?: number; w?: number; color?: string; hand?: boolean; weight?: number; at?: number; out?: number; anchor?: 'start' | 'middle' | 'end'; lh?: number; o?: number}> = ({x, y, text, size = 44, w = 2000, color = INK, hand = true, weight = 700, at = -1000, out, anchor = 'start', lh, o = 1}) => {
	const L = lh ?? Math.round(size * (hand ? 1.12 : 1.24));
	return <g>{wrapM(text, size, w, hand, weight).map((t, i) => <Sx key={i} x={x} y={y + i * L} text={t} size={size} color={color} hand={hand} weight={weight} at={at} out={out} anchor={anchor} opacity={o} />)}</g>;
};
export const tLines = (text: string, size: number, w: number, hand = true, weight = 700) => wrapM(text, size, w, hand, weight).length;

/** Scene title: hand, writes on left to right. */
export const Title: React.FC<{text: string; at?: number; size?: number; out?: number}> = ({text, at = 2, size = 58, out}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, Math.max(14, Math.round(text.length * 0.7)));
	const o = out === undefined ? 1 : 1 - prog(f, out, 10);
	if (f < at || o <= 0.01) return null;
	return (
		<g opacity={o} style={p >= 1 ? undefined : {clipPath: `inset(-40% ${100 - p * 100}% -40% -5%)`}}>
			<Sx x={96} y={112} text={text} size={size} color={INK} hand at={-1000} />
		</g>
	);
};
/** Dashed tag top right: every question card carries it. */
export const HscTag: React.FC<{y?: number}> = ({y = 44}) => {
	const w = mw(HSC, 28, true, 700) + 44;
	return (
		<g>
			<rect x={1824 - w} y={y} width={w} height={48} rx={24} fill={CARD} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="8 6" />
			<Sx x={1824 - w / 2} y={y + 34} text={HSC} size={28} color={INK} anchor="middle" hand at={-1000} />
		</g>
	);
};
/** Blue type badge, top right, left of the HSC tag. */
export const Badge: React.FC<{text: string; at?: number; right?: number; y?: number}> = ({text, at = -1000, right = 1824, y = 104}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12);
	if (v <= 0.01) return null;
	const w = mw(text, 32, true, 700) + 52;
	return (
		<g opacity={v}>
			<rect x={right - w} y={y} width={w} height={52} rx={26} fill={BLUE} />
			<Sx x={right - w / 2} y={y + 37} text={text} size={32} color={CARD} anchor="middle" hand at={-1000} />
		</g>
	);
};

// ---------- cards and question text ----------
export const Box: React.FC<{x: number; y: number; w: number; h: number; stroke?: string; sw?: number; fill?: string; r?: number; o?: number; dash?: string}> = ({x, y, w, h, stroke = EDGE, sw = 3, fill = CARD, r = 22, o = 1, dash}) => (o <= 0.01 ? null : <rect x={x} y={y} width={w} height={h} rx={r} fill={fill} stroke={stroke} strokeWidth={sw} opacity={o} strokeDasharray={dash} />);
const nrm = (w: string) => w.toLowerCase().replace(/[^a-z0-9']/g, '');
const hasPhrase = (blocks: QBlock[], phrase: string) => {
	const W = blocks.flatMap(b => b.text.split(/\s+/)).map(nrm).filter(Boolean);
	const t = phrase.split(/\s+/).map(nrm).filter(Boolean);
	for (let i = 0; i + t.length <= W.length; i++) if (t.every((x, k) => W[i + k] === x)) return true;
	return false;
};
/** One flow of question text (QText, real font metrics) with only the marks that belong to it. */
export const QPart: React.FC<{blocks: QBlock[]; marks?: QMark[]; x: number; y: number; w: number; size: number; lh?: number}> = ({blocks, marks = [], x, y, w, size, lh}) => (
	<QText q={qCheck(blocks, marks.filter(m => hasPhrase(blocks, m.phrase)))} x={x} y={y} w={w} size={size} lh={lh} card={false} />
);
/** Throws at module load if a mark matches no part (so a script change cannot leave an underline pointing at nothing). */
export const marksCheck = (parts: QBlock[][], marks: QMark[]) => {
	for (const m of marks) if (!parts.some(p => hasPhrase(p, m.phrase))) throw new Error(`mark "${m.phrase}" not in the question`);
	return marks;
};
export const blk = (text: string, para = false, weight = 500): QBlock => ({text, at: -1000, para, weight});

// ---------- table ----------
export type TblSpec = {cols: number[]; head: string[]; rows: string[][]; align?: ('start' | 'middle')[]};
/** A data table; `marks` underlines cell 'r,c' (r = 1.. for data rows) in amber from a frame; `hot` rings a row. */
export const Tbl: React.FC<{t: TblSpec; x: number; y: number; size: number; headSize?: number; rowH: number; marks?: Record<string, number>; hot?: {r: number; at: number; out?: number; color?: string}[]; o?: number; boldCol0?: boolean}> = ({t, x, y, size, headSize, rowH, marks = {}, hot = [], o = 1, boldCol0 = true}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const hs = headSize ?? Math.round(size * 0.82);
	const heads = t.head.map((h, c) => wrapM(h, hs, t.cols[c] - 22, false, 700));
	const hl = Math.max(...heads.map(h => h.length));
	const HL = Math.round(hs * 1.18);
	const headH = hl * HL + 22;
	const W = t.cols.reduce((a, b) => a + b, 0);
	const cx = (c: number) => x + t.cols.slice(0, c).reduce((a, b) => a + b, 0);
	const H = headH + rowH * t.rows.length;
	const al = (c: number) => t.align?.[c] ?? (c === 0 ? 'start' : 'middle');
	const tx = (c: number) => (al(c) === 'start' ? cx(c) + 14 : cx(c) + t.cols[c] / 2);
	return (
		<g opacity={o}>
			<rect x={x} y={y} width={W} height={H} rx={10} fill={CARD} stroke="rgba(60,45,20,0.45)" strokeWidth={2.5} />
			<rect x={x + 1.5} y={y + 1.5} width={W - 3} height={headH - 1.5} rx={9} fill="#f1ebdf" />
			{t.rows.map((_, r) => <line key={'h' + r} x1={x} x2={x + W} y1={y + headH + rowH * r} y2={y + headH + rowH * r} stroke="rgba(60,45,20,0.35)" strokeWidth={2} />)}
			{t.cols.slice(1).map((_, c) => <line key={'v' + c} x1={cx(c + 1)} x2={cx(c + 1)} y1={y} y2={y + H} stroke="rgba(60,45,20,0.35)" strokeWidth={2} />)}
			{heads.map((h, c) => h.map((ln, k) => <Sx key={c + '-' + k} x={cx(c) + 11} y={y + 14 + hs * 0.92 + k * HL} text={ln} size={hs} color={INK} weight={700} at={-1000} />))}
			{hot.map((h, k) => { const v = vis(f, h.at, h.out, 10); return v > 0.01 ? <rect key={'k' + k} x={x + 4} y={y + headH + rowH * (h.r - 1) + 4} width={W - 8} height={rowH - 8} rx={8} fill={h.color ?? AMBER} opacity={0.18 * v} /> : null; })}
			{t.rows.map((row, r) => row.map((v, c) => {
				const ls = v.split('\n');
				const LH = size * 1.12;
				return ls.map((ln, k) => <Sx key={r + '-' + c + '-' + k} x={tx(c)} y={y + headH + rowH * r + rowH / 2 + size * 0.36 + (k - (ls.length - 1) / 2) * LH} text={ln} size={size} color={INK} weight={c === 0 && boldCol0 ? 800 : 600} anchor={al(c)} at={-1000} />);
			}))}
			{Object.entries(marks).map(([k, a]) => {
				if (f < a) return null;
				const [r, c] = k.split(',').map(Number);
				const isHead = r === 0;
				const text = isHead ? heads[c][0] : t.rows[r - 1][c].split('\n')[0];
				const ww = mw(text, isHead ? hs : size, false, isHead ? 700 : 600) + 10;
				const x0 = isHead || al(c) === 'start' ? (isHead ? cx(c) + 6 : cx(c) + 9) : cx(c) + t.cols[c] / 2 - ww / 2;
				const yy = isHead ? y + 14 + hs * 0.92 + (heads[c].length - 1) * HL + 10 : y + headH + rowH * (r - 1) + rowH / 2 + size * 0.36 + 9;
				return <DrawPath key={k} d={`M${x0},${yy} C${x0 + ww * 0.3},${yy + 3} ${x0 + ww * 0.7},${yy - 2} ${x0 + ww},${yy + 2}`} at={a} dur={12} color={AMBER} width={5} />;
			})}
		</g>
	);
};
export const tblH = (t: TblSpec, size: number, rowH: number, headSize?: number) => {
	const hs = headSize ?? Math.round(size * 0.82);
	const hl = Math.max(...t.head.map((h, c) => wrapM(h, hs, t.cols[c] - 22, false, 700).length));
	return hl * Math.round(hs * 1.18) + 22 + rowH * t.rows.length;
};

// ---------- chips, tags, notes ----------
export const Chip: React.FC<{x: number; y: number; text: string; at?: number; out?: number; size?: number; color?: string; fill?: string; ink?: string; anchor?: 'start' | 'middle' | 'end'; hand?: boolean; sw?: number; o?: number; glow?: number}> = ({x, y, text, at = -1000, out, size = 30, color = TEAL, fill = CARD, ink, anchor = 'start', hand = true, sw = 3, o = 1, glow = 0}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const w = mw(text, size, hand, 700) + size * 1.2;
	const h = size * 1.55;
	const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
	return (
		<g opacity={v}>
			{glow > 0.01 ? <rect x={x0 - 8} y={y - 8} width={w + 16} height={h + 16} rx={h / 2 + 8} fill={AMBER} opacity={0.35 * glow} /> : null}
			<rect x={x0} y={y} width={w} height={h} rx={h / 2} fill={fill} stroke={color} strokeWidth={sw} />
			<Sx x={x0 + w / 2} y={y + h / 2 + size * 0.34} text={text} size={size} color={ink ?? color} anchor="middle" hand={hand} weight={700} at={-1000} />
		</g>
	);
};
export const chipW = (text: string, size = 30, hand = true) => mw(text, size, hand, 700) + size * 1.2;
/** Grey recall tag (names the earlier video). */
export const GTag: React.FC<{x: number; y: number; text: string; at?: number; out?: number; size?: number; anchor?: 'start' | 'middle' | 'end'}> = ({x, y, text, at, out, size = 30, anchor}) => <Chip x={x} y={y} text={text} at={at} out={out} size={size} color="#8d857a" fill={GREY_FILL} ink={GREYT} anchor={anchor} sw={2.5} />;
/** A boxed multi-line tag (wraps to w). */
export const Tag: React.FC<{x: number; y: number; w: number; text: string; at?: number; out?: number; size?: number; color?: string; ink?: string; fill?: string; o?: number}> = ({x, y, w, text, at = -1000, out, size = 32, color = TEAL, ink, fill = CARD, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const lines = wrapM(text, size, w - 36, true, 700);
	const L = Math.round(size * 1.12);
	const bw = Math.max(...lines.map(l => mw(l, size, true, 700))) + 36;
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={bw} height={lines.length * L + 22} rx={14} fill={fill} stroke={color} strokeWidth={3} />
			{lines.map((l, i) => <Sx key={i} x={x + 18} y={y + 10 + size * 0.88 + i * L} text={l} size={size} color={ink ?? color} hand weight={700} at={-1000} />)}
		</g>
	);
};
export const tagH = (text: string, w: number, size = 32) => wrapM(text, size, w - 36, true, 700).length * Math.round(size * 1.12) + 22;

/** The crossed classic mistake: ink chip, red scribble and slash at `cross`, a teal correction under it. */
export const Mistake: React.FC<{x: number; y: number; text: string; at: number; cross: number; note?: string; size?: number; noteW?: number; out?: number; anchor?: 'start' | 'middle'}> = ({x, y, text, at, cross, note, size = 44, noteW = 900, out, anchor = 'start'}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12);
	if (v <= 0.01) return null;
	const w = mw(text, size, true, 700) + size * 1.3;
	const h = size * 1.6;
	const x0 = anchor === 'middle' ? x - w / 2 : x;
	return (
		<g opacity={v}>
			<rect x={x0} y={y} width={w} height={h} rx={h / 2} fill={CARD} stroke={INK_SOFT} strokeWidth={3} />
			<Sx x={x0 + w / 2} y={y + h / 2 + size * 0.34} text={text} size={size} color={INK} anchor="middle" hand weight={700} at={-1000} />
			<DrawPath d={scribbleEllipse(x0 + w / 2, y + h / 2, w / 2 + 14, h / 2 + 10, 7, 1.1)} at={cross} dur={16} color={RED} width={5} />
			<DrawPath d={`M${x0 + 14},${y + h - 8} L${x0 + w - 14},${y + 8}`} at={cross + 8} dur={10} color={RED} width={7} />
			{note ? <T x={anchor === 'middle' ? x : x0 + 10} y={y + h + size * 1.05} text={note} size={size * 0.9} w={noteW} color={TEAL} at={cross + 14} anchor={anchor === 'middle' ? 'middle' : 'start'} /> : null}
		</g>
	);
};
/** The framed answer (g01 layout). y is the baseline. */
export const Framed: React.FC<{x: number; y: number; text: string; at: number; out?: number; size?: number; color?: string; anchor?: 'start' | 'middle'; hand?: boolean}> = ({x, y, text, at, out, size = 52, color = TEAL, anchor = 'start', hand = false}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12);
	if (v <= 0.01) return null;
	const w = mw(text, size, hand, 800) + size * 0.9;
	const x0 = anchor === 'middle' ? x - w / 2 : x;
	const s = 0.9 + 0.1 * smooth(prog(f, at, 14));
	return (
		<g opacity={v} transform={`translate(${x0 + w / 2},${y - size * 0.35}) scale(${s}) translate(${-(x0 + w / 2)},${-(y - size * 0.35)})`}>
			<rect x={x0} y={y - size * 1.08} width={w} height={size * 1.5} rx={14} fill={CARD} stroke={color} strokeWidth={5} />
			<Sx x={x0 + size * 0.45} y={y} text={text} size={size} color={color} hand={hand} weight={800} at={-1000} />
		</g>
	);
};

// ---------- answer box ----------
export type ALine = {t: string; at: number; out?: number; color?: string};
/** An answer box whose lines write on cue. The newest line is the current line (`size`, amber marker); earlier lines
 *  settle to `sizeOld` as established results. Lines wrap to the box. */
export const AnsBox: React.FC<{x: number; y: number; w: number; h: number; label: string; lines: ALine[]; size?: number; sizeOld?: number; gap?: number; o?: number; hint?: string}> = ({x, y, w, h, label, lines, size = 44, sizeOld = 34, gap = 8, o = 1, hint}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	let yy = y + 50;
	const live = lines.filter(l => f >= l.at && (l.out === undefined || f < l.out));
	const newest = live.length ? live[live.length - 1] : undefined;
	return (
		<g opacity={o}>
			<rect x={x} y={y} width={w} height={h} rx={18} fill={CARD} stroke={live.length ? AMBER : EDGE} strokeWidth={3} />
			<Sx x={x + 22} y={y + 38} text={label} size={28} color={INK_SOFT} weight={700} at={-1000} />
			{hint && !live.length && f < (lines[0]?.at ?? 0) ? <T x={x + 38} y={y + 96} w={w - 70} text={hint} size={36} color={BLUE} /> : null}
			{lines.map((l, i) => {
				if (f < l.at || (l.out !== undefined && f >= l.out + 12)) return null;
				const next = lines.slice(i + 1).find(n => n.out === undefined || n.at < n.out);
				const k = next ? smooth(prog(f, next.at, 12)) : 0;
				const sz = lerp(size, sizeOld, k);
				const L = Math.round(sz * 1.14);
				const rows = wrapM(l.t, sz, w - 64, true, 700);
				const y0 = yy + sz * 0.9;
				yy += rows.length * L + gap;
				const v = vis(f, l.at, l.out, 12);
				const isNew = l === newest;
				return (
					<g key={i} opacity={v}>
						{isNew ? <rect x={x + 16} y={y0 - sz * 0.8} width={7} height={rows.length * L - sz * 0.1} rx={3} fill={AMBER} /> : null}
						{rows.map((r, kk) => <Sx key={kk} x={x + 38} y={y0 + kk * L} text={r} size={sz} color={l.color ?? INK} hand weight={700} at={-1000} />)}
					</g>
				);
			})}
		</g>
	);
};

export type ARow = {p: string; t: string; at: number; color?: string};
/** An answer frame with a prompt per row (visible from the first frame); each row's answer writes on its cue and the
 *  newest carries an amber marker. Space is reserved, so rows never jump. */
export const AnsRows: React.FC<{x: number; y: number; w: number; h: number; label: string; rows: ARow[]; size?: number; psize?: number; gap?: number; o?: number}> = ({x, y, w, h, label, rows, size = 40, psize = 30, gap = 12, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const L = Math.round(size * 1.12);
	const live = rows.filter(r => f >= r.at);
	const newest = live.length ? live[live.length - 1] : undefined;
	let yy = y + 56;
	return (
		<g opacity={o}>
			<rect x={x} y={y} width={w} height={h} rx={18} fill={CARD} stroke={live.length ? AMBER : EDGE} strokeWidth={3} />
			<Sx x={x + 22} y={y + 38} text={label} size={28} color={INK_SOFT} weight={700} at={-1000} />
			{rows.map((r, i) => {
				const lines = wrapM(r.t, size, w - 64, true, 700);
				const py = yy + psize * 0.9;
				const ty = py + 8 + size * 0.95;
				yy += psize * 1.1 + 8 + lines.length * L + gap;
				const v = prog(f, r.at, 12);
				return (
					<g key={i}>
						<Sx x={x + 24} y={py} text={r.p} size={psize} color={BLUE} hand weight={700} at={-1000} />
						{v > 0.01 ? <g opacity={v}>
							{r === newest ? <rect x={x + 16} y={ty - size * 0.8} width={7} height={lines.length * L - size * 0.1} rx={3} fill={AMBER} /> : null}
							{lines.map((ln, k) => <Sx key={k} x={x + 38} y={ty + k * L} text={ln} size={size} color={r.color ?? INK} hand weight={700} at={-1000} />)}
						</g> : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------- plates ----------
/** A plate centred on (cx, cy) at width w, with a fade window and a small slide in. */
export const Pic: React.FC<{p: PB; cx: number; cy: number; w: number; at?: number; out?: number; o?: number; slide?: number; id?: string}> = ({p, cx, cy, w, at = -1000, out, o = 1, slide = 0, id}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 16) * o;
	if (v <= 0.01) return null;
	const dx = slide ? (1 - smooth(prog(f, at, 22))) * slide : 0;
	return <g transform={dx ? `translate(${dx},0)` : undefined}><PlateB p={p} cx={cx} cy={cy} w={w} o={v} id={id} /></g>;
};
/** The same, sized by height. */
export const PicH: React.FC<{p: PB; cx: number; cy: number; h: number; at?: number; out?: number; o?: number; slide?: number}> = ({p, cx, cy, h, ...r}) => <Pic p={p} cx={cx} cy={cy} w={plateW(p, h)} {...r} />;
/** Two aligned plates cross-fading in place (matched pair on one union box). */
export const PicPair: React.FC<{a: PB; b: PB; cx: number; cy: number; w: number; at: number; dur?: number; o?: number}> = ({a, b, cx, cy, w, at, dur = 36, o = 1}) => {
	const f = useCurrentFrame();
	const k = smooth(prog(f, at, dur));
	if (o <= 0.01) return null;
	return <g opacity={o}>{k < 0.999 ? <PlateB p={a} cx={cx} cy={cy} w={w} /> : null}{k > 0.001 ? <PlateB p={b} cx={cx} cy={cy} w={w} o={k} /> : null}</g>;
};

// ---------- arrows and marks ----------
export const Arrow: React.FC<{a: [number, number]; b: [number, number]; at?: number; color?: string; width?: number; bow?: number; head?: number; o?: number; dash?: string}> = ({a, b, at = -1000, color = INK_SOFT, width = 5, bow = 0, head = 18, o = 1, dash}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 10) * o;
	if (v <= 0.01) return null;
	const mx = (a[0] + b[0]) / 2 + (bow ? -(b[1] - a[1]) * bow : 0), my = (a[1] + b[1]) / 2 + (bow ? (b[0] - a[0]) * bow : 0);
	const ang = Math.atan2(b[1] - my, b[0] - mx);
	return (
		<g opacity={v}>
			<DrawPath d={`M${a[0]},${a[1]} Q${mx},${my} ${b[0]},${b[1]}`} at={at} dur={14} color={color} width={width} dash={dash} />
			<path d={`M${b[0] - head * Math.cos(ang - 0.45)},${b[1] - head * Math.sin(ang - 0.45)} L${b[0]},${b[1]} L${b[0] - head * Math.cos(ang + 0.45)},${b[1] - head * Math.sin(ang + 0.45)}`} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" opacity={prog(f, at + 10, 6)} />
		</g>
	);
};
export const Ring: React.FC<{cx: number; cy: number; rx: number; ry: number; at: number; out?: number; color?: string; width?: number; seed?: number}> = ({cx, cy, rx, ry, at, out, color = AMBER, width = 5, seed = 3}) => {
	const f = useCurrentFrame();
	const v = out === undefined ? 1 : 1 - prog(f, out, 10);
	if (f < at || v <= 0.01) return null;
	return <g opacity={v}><DrawPath d={scribbleEllipse(cx, cy, rx, ry, seed, 1.15)} at={at} dur={16} color={color} width={width} /></g>;
};
/** Fades a group to `to` from `at` (and back from `undim`). */
export const Dim: React.FC<{at: number; to?: number; undim?: number; children: React.ReactNode}> = ({at, to = 0.45, undim, children}) => {
	const f = useCurrentFrame();
	const d = prog(f, at, 14) * (undim === undefined ? 1 : 1 - prog(f, undim, 14));
	return <g opacity={1 - (1 - to) * d}>{children}</g>;
};
export const Show: React.FC<{at?: number; out?: number; d?: number; children: React.ReactNode}> = ({at = -1000, out, d = 12, children}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, d);
	return v > 0.01 ? <g opacity={v}>{children}</g> : null;
};
/** Scales children about (cx, cy) from k0 to 1 over the first frames (a settle in, so openings hold their content). */
export const Settle: React.FC<{cx: number; cy: number; k0?: number; at?: number; children: React.ReactNode}> = ({cx, cy, k0 = 1.04, at = 0, children}) => {
	const f = useCurrentFrame();
	const s = k0 + (1 - k0) * smooth(prog(f, at, 18));
	return <g transform={`translate(${cx},${cy}) scale(${s}) translate(${-cx},${-cy})`}>{children}</g>;
};

// ---------- fraction row ----------
/** "lhs = num / [den] × tail" with the denominator boxed; yc is the fraction bar. `numSwap` swaps the numerator text. */
export const FracRow: React.FC<{x: number; yc: number; lhs: string; num: string; den: string; tail: string; size?: number; at?: number; numSwap?: {t: string; at: number; lhs?: string}; denPulse?: number; denLabel?: string; o?: number}> = ({x, yc, lhs, num, den, tail, size = 46, at = -1000, numSwap, denPulse, denLabel, o = 1}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12) * o;
	if (v <= 0.01) return null;
	const sw = numSwap ? prog(f, numSwap.at, 14) : 0;
	const L = sw > 0.5 && numSwap?.lhs ? numSwap.lhs : lhs;
	const N = sw > 0.5 ? numSwap!.t : num;
	const lw = L ? mw(L + ' =', size, false, 800) + 26 : 0;
	const fw = Math.max(mw(num, size, false, 700), mw(numSwap?.t ?? '', size, false, 700), mw(den, size, false, 700)) + 40;
	const fx = x + lw;
	const pu = denPulse === undefined ? 0 : pulse(f, denPulse, 36);
	const flash = numSwap ? pulse(f, numSwap.at, 30) : 0;
	return (
		<g opacity={v}>
			{L ? <Sx x={x} y={yc + size * 0.35} text={L + ' ='} size={size} color={INK} weight={800} at={-1000} /> : null}
			{flash > 0.01 ? <rect x={fx} y={yc - size * 1.2} width={fw} height={size * 1.08} rx={10} fill={AMBER} opacity={0.4 * flash} /> : null}
			<Sx x={fx + fw / 2} y={yc - size * 0.3} text={N} size={size} color={sw > 0.5 ? AMBER_INK : INK} anchor="middle" weight={700} at={-1000} />
			<line x1={fx} x2={fx + fw} y1={yc} y2={yc} stroke={INK} strokeWidth={4} />
			<rect x={fx + 8} y={yc + 10} width={fw - 16} height={size * 1.3} rx={10} fill={pu > 0.01 ? GLOW : 'none'} stroke={AMBER} strokeWidth={4 + 3 * pu} />
			<Sx x={fx + fw / 2} y={yc + 10 + size * 0.98} text={den} size={size} color={INK} anchor="middle" weight={700} at={-1000} />
			<Sx x={fx + fw + 22} y={yc + size * 0.35} text={tail} size={size} color={INK} weight={700} at={-1000} />
			{denLabel ? <Sx x={fx + fw / 2} y={yc + size * 1.3 + 50} text={denLabel} size={32} color={AMBER_INK} anchor="middle" hand weight={700} at={-1000} /> : null}
		</g>
	);
};

// ---------- pause hold ----------
export const Pause: React.FC<{h: {startFrame: number; endFrame: number}; at: number; tx: number; ty: number; cx: number; cy: number; r?: number}> = ({h, at, tx, ty, cx, cy, r = 52}) => (
	<g>
		<Sx x={tx} y={ty} text="Pause here to answer." size={54} color={AMBER_INK} hand at={at} />
		<Countdown start={h.startFrame} end={h.endFrame} x={cx} y={cy} r={r} />
	</g>
);
/** A faint ruled answer area for the attempt (nothing answer-bearing). */
export const BlankLines: React.FC<{x: number; y: number; w: number; h: number; label: string; gap?: number}> = ({x, y, w, h, label, gap = 52}) => (
	<g>
		<rect x={x} y={y} width={w} height={h} rx={16} fill={CARD} stroke={EDGE} strokeWidth={2.5} strokeDasharray="10 8" />
		<Sx x={x + 20} y={y + 38} text={label} size={28} color={INK_SOFT} weight={700} at={-1000} />
		{Array.from({length: Math.max(0, Math.floor((h - 64) / gap))}, (_, i) => <line key={i} x1={x + 20} x2={x + w - 20} y1={y + 64 + (i + 1) * gap - 10} y2={y + 64 + (i + 1) * gap - 10} stroke="rgba(60,45,20,0.14)" strokeWidth={2} />)}
	</g>
);

// ---------- decision board ----------
export type DRow = {see: string; doo: string; badge: string; at: number; thumb: React.ReactNode};
/** Rows present (dim) from the first frame; each lights on its cue. Thumbnails sit at the left of each row. */
export const Decision: React.FC<{rows: DRow[]; y0?: number; rh?: number; gap?: number}> = ({rows, y0 = 200, rh = 196, gap = 18}) => {
	const f = useCurrentFrame();
	return (
		<g>
			<Sx x={380} y={y0 - 16} text="What you see" size={36} color={INK_SOFT} hand at={-1000} />
			<Sx x={1000} y={y0 - 16} text="What you do first" size={36} color={INK_SOFT} hand at={-1000} />
			{rows.map((r, i) => {
				const y = y0 + i * (rh + gap);
				const L = prog(f, r.at, 14);
				const o = 0.42 + 0.58 * L;
				return (
					<g key={i}>
						<rect x={96} y={y} width={1728} height={rh} rx={22} fill={L > 0.5 ? '#fffaf0' : CARD} stroke={L > 0.5 ? BLUE : EDGE} strokeWidth={L > 0.5 ? 4 : 3} />
						<g opacity={o}>
							{r.thumb}
							<T x={380} y={y + rh / 2 + 15 - ((tLines(r.see, 42, 520) - 1) * 48) / 2} text={r.see} size={42} w={520} color={INK} lh={48} />
							<path d={`M${930},${y + rh / 2} L${975},${y + rh / 2} M${960},${y + rh / 2 - 13} L${975},${y + rh / 2} L${960},${y + rh / 2 + 13}`} fill="none" stroke={BLUE} strokeWidth={5} strokeLinecap="round" />
							<T x={1000} y={y + rh / 2 + 15 - ((tLines(r.doo, 42, 640) - 1) * 48) / 2} text={r.doo} size={42} w={640} color={BLUE} lh={48} />
							<Chip x={1806} y={y + rh / 2 - 22} text={r.badge} size={28} color={BLUE} anchor="end" />
						</g>
					</g>
				);
			})}
		</g>
	);
};

/** Full-frame SVG stage for a scene. */
export const Svg: React.FC<{children: React.ReactNode}> = ({children}) => <svg width={1920} height={1080} viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0, overflow: 'visible'}}>{children}</svg>;
/** A computation line: `sub` in ink, then `res` (teal, bold) from `resAt`. y is the baseline. */
export const CalcLine: React.FC<{x: number; y: number; sub: string; res?: string; at: number; resAt?: number; out?: number; dim?: number; size?: number; label?: string; labelColor?: string}> = ({x, y, sub, res, at, resAt, out, dim, size = 44, label, labelColor = INK}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12);
	if (v <= 0.01) return null;
	const d = dim === undefined ? 0 : prog(f, dim, 14);
	const lw = label ? mw(label, size, false, 800) + 18 : 0;
	const sw = mw(sub, size, false, 700);
	return (
		<g opacity={v * (1 - 0.45 * d)}>
			{label ? <Sx x={x} y={y} text={label} size={size} color={labelColor} weight={800} at={-1000} /> : null}
			<Sx x={x + lw} y={y} text={sub} size={size} color={INK} weight={700} at={-1000} />
			{res && resAt !== undefined ? <Sx x={x + lw + sw + 18} y={y} text={res} size={size * 1.08} color={TEAL} weight={800} at={resAt} /> : null}
		</g>
	);
};
