// M6 B04 drawing parts: HSC-style chromosome bars (a long rounded bar, thin bands between genes, gene letters in
// serif type, the centromere as a narrowed waist with a dark dot; every segment can slide, lift, shade, double or
// drop), copy counters, a coded karyotype (22 numbered pairs and the X pair, banded bars sized by real length,
// centromere positions approximate), meiosis cells with one homologous pair (B5b's plum and teal), and a coded book.
// Chromosomes are drawn in clean diagram panels only, never over a painted cell.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog, rng} from '../../kit';
import {GREYT, GREY_INK, Sx} from '../bio-m5-b13/shared';
import {SERIF} from '../bio-m5-b09/genetics';
import {BIO_INK, CARD, EDGE, clamp01, lerp, vis} from '../bio-m6-b01/parts';

export {clamp01, lerp, vis};
export const PLUMC = '#a8508f', TEALC = '#2b9a8e';

// ---------- chromosome bars ----------
export type Tone = 'n' | 'amber' | 'blue' | 'plum' | 'teal' | 'grey';
const FILL: Record<Tone, string> = {n: '#fbf0cf', amber: '#f6d58e', blue: '#dbe5ef', plum: '#f1dbe9', teal: '#d4ede9', grey: '#eceeef'};
const LINE: Record<Tone, string> = {n: INK, amber: AMBER_INK, blue: '#3d5a78', plum: PLUMC, teal: TEALC, grey: GREYT};
export const GW = 64, BH = 54, CW = 30;
export type Seg = {l: string; x: number; y?: number; o?: number; tone?: Tone; dashed?: boolean; capL?: boolean; capR?: boolean; line?: Tone; ring?: number; cut?: number};
/** Lay labels out from x0; '●' is the centromere. Returns segments (left edges) and the centromere centre. */
export const lay = (labels: string[], x0: number, gw = GW, cw = CW, tone: Tone = 'n'): {segs: Seg[]; cen: number | null; end: number} => {
	let x = x0, cen: number | null = null;
	const segs: Seg[] = [];
	labels.forEach(l => {
		if (l === '●') { cen = x + cw / 2; x += cw; return; }
		segs.push({l, x, tone});
		x += gw;
	});
	if (segs.length) { segs[0].capL = true; segs[segs.length - 1].capR = true; }
	return {segs, cen, end: x};
};
/** Centre x of the gene `l` in a layout. */
export const gx = (L: {segs: Seg[]}, l: string, gw = GW, occ = 1) => {
	let n = 0;
	for (const s of L.segs) if (s.l === l && ++n === occ) return s.x + gw / 2;
	throw new Error('gene ' + l + ' not in layout');
};
/** One HSC-style chromosome: segments (each can move on its own) and the centromere waist. */
export const Bar: React.FC<{segs: Seg[]; cen?: number | null; cenTone?: Tone; cenY?: number; y: number; gw?: number; h?: number; o?: number; size?: number; cenO?: number}> = ({segs, cen, cenTone = 'n', cenY, y, gw = GW, h = BH, o = 1, size, cenO = 1}) => {
	if (o <= 0.01) return null;
	const fs = size ?? Math.round(h * 0.56);
	const r = h / 2;
	return (
		<g opacity={o}>
			{cen !== null && cen !== undefined && cenO > 0.01 ? (
				<g opacity={cenO}>
					<rect x={cen - CW * (gw / GW) / 2 - 2} y={(cenY ?? y) - h * 0.24} width={CW * (gw / GW) + 4} height={h * 0.48} fill={FILL[cenTone]} />
					<line x1={cen - CW * (gw / GW) / 2 - 2} y1={(cenY ?? y) - h * 0.24} x2={cen + CW * (gw / GW) / 2 + 2} y2={(cenY ?? y) - h * 0.24} stroke={LINE[cenTone]} strokeWidth={3} />
					<line x1={cen - CW * (gw / GW) / 2 - 2} y1={(cenY ?? y) + h * 0.24} x2={cen + CW * (gw / GW) / 2 + 2} y2={(cenY ?? y) + h * 0.24} stroke={LINE[cenTone]} strokeWidth={3} />
					{[-1, 1].map(sd => <path key={sd} d={`M${cen + sd * (CW * (gw / GW) / 2 + 2)},${(cenY ?? y) - h / 2} L${cen + sd * (CW * (gw / GW) / 2 + 2)},${(cenY ?? y) - h * 0.24} M${cen + sd * (CW * (gw / GW) / 2 + 2)},${(cenY ?? y) + h * 0.24} L${cen + sd * (CW * (gw / GW) / 2 + 2)},${(cenY ?? y) + h / 2}`} stroke={LINE[cenTone]} strokeWidth={3} />)}
					<circle cx={cen} cy={cenY ?? y} r={Math.max(5, h * 0.17)} fill={INK} />
				</g>
			) : null}
			{segs.map((s, i) => {
				const so = s.o ?? 1;
				if (so <= 0.01) return null;
				const t = s.tone ?? 'n';
				const yy = (s.y ?? y);
				const x1 = s.x, x2 = s.x + gw, top = yy - r, bot = yy + r;
				const L = LINE[s.line ?? t];
				const d = `M${x1 + (s.capL ? r : 0)},${top} L${x2 - (s.capR ? r : 0)},${top} ${s.capR ? `A${r},${r} 0 0 1 ${x2 - r},${bot}` : `L${x2},${top} M${x2},${bot}`} L${x1 + (s.capL ? r : 0)},${bot} ${s.capL ? `A${r},${r} 0 0 1 ${x1 + r},${top}` : ''}`;
				const fillD = `M${x1 + (s.capL ? r : 0)},${top} L${x2 - (s.capR ? r : 0)},${top} ${s.capR ? `A${r},${r} 0 0 1 ${x2 - r},${bot}` : `L${x2},${bot}`} L${x1 + (s.capL ? r : 0)},${bot} ${s.capL ? `A${r},${r} 0 0 1 ${x1 + r},${top}` : `L${x1},${top}`} Z`;
				return (
					<g key={i} opacity={so}>
						{s.ring && s.ring > 0.01 ? <rect x={x1 - 6} y={top - 8} width={gw + 12} height={h + 16} rx={14} fill="none" stroke={AMBER} strokeWidth={5} opacity={s.ring} /> : null}
						<path d={fillD} fill={s.dashed ? 'none' : FILL[t]} />
						<path d={d} fill="none" stroke={s.dashed ? GREYT : L} strokeWidth={s.dashed ? 2.5 : 3} strokeDasharray={s.dashed ? '7 5' : undefined} strokeLinejoin="round" />
						{!s.capL || s.dashed ? <line x1={x1} y1={top + (s.dashed ? 0 : 1.5)} x2={x1} y2={bot - (s.dashed ? 0 : 1.5)} stroke={s.dashed ? GREYT : INK_SOFT} strokeWidth={2} strokeDasharray={s.dashed ? '5 4' : undefined} /> : null}
						{s.dashed && s.capR ? null : s.dashed ? <line x1={x2} y1={top} x2={x2} y2={bot} stroke={GREYT} strokeWidth={2} strokeDasharray="5 4" /> : null}
						<text x={x1 + gw / 2} y={yy + fs * 0.36} textAnchor="middle" style={{fontFamily: SERIF, fontWeight: 700, fontSize: fs}} fill={s.dashed ? GREY_INK : INK}>{s.l}</text>
						{s.cut && s.cut > 0.01 ? <path d={`M${x1 + gw / 2 - 6},${top - 10} L${x1 + gw / 2 + 6},${yy - 8} L${x1 + gw / 2 - 6},${yy + 8} L${x1 + gw / 2 + 6},${bot + 10}`} fill="none" stroke={AMBER_INK} strokeWidth={4.5} strokeLinecap="round" strokeLinejoin="round" opacity={s.cut} /> : null}
					</g>
				);
			})}
		</g>
	);
};
/** A jagged break mark at x (vertical), for a chromosome break. */
export const BreakMark: React.FC<{x: number; y: number; h?: number; o?: number}> = ({x, y, h = BH, o = 1}) => (o <= 0.01 ? null : (
	<path d={`M${x - 8},${y - h * 0.8} L${x + 8},${y - h * 0.3} L${x - 8},${y + h * 0.1} L${x + 8},${y + h * 0.5} L${x - 4},${y + h * 0.85}`} fill="none" stroke={AMBER_INK} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" opacity={o} />
));
/** Copy counters under genes. */
export const Count: React.FC<{x: number; y: number; n: string; o?: number; hot?: boolean; size?: number}> = ({x, y, n, o = 1, hot = false, size = 32}) => (o <= 0.01 ? null : (
	<text x={x} y={y} textAnchor="middle" opacity={o} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size}} fill={hot ? AMBER_INK : INK_SOFT}>{n}</text>
));
/** A small bar label at the left of a bar ("normal", "9"). */
export const BarTag: React.FC<{x: number; y: number; text: string; at: number; out?: number; size?: number; color?: string}> = ({x, y, text, at, out, size = 30, color = INK_SOFT}) => (
	<Sx x={x} y={y + size * 0.35} text={text} size={size} color={color} hand anchor="end" at={at} out={out} />
);

// ---------- karyotype ----------
const LEN: number[] = [248, 242, 198, 190, 181, 171, 159, 145, 138, 134, 135, 133, 114, 107, 102, 90, 83, 80, 59, 64, 47, 51, 156];
const CEN: number[] = [0.5, 0.39, 0.46, 0.26, 0.27, 0.35, 0.38, 0.31, 0.32, 0.29, 0.39, 0.27, 0.15, 0.15, 0.15, 0.41, 0.3, 0.22, 0.46, 0.45, 0.25, 0.27, 0.39];
export const KNAME = (i: number) => (i < 22 ? String(i + 1) : 'X');
/** Size rank of each chromosome (0 = largest). */
export const SIZE_RANK: number[] = (() => { const idx = LEN.map((_, i) => i).sort((a, b) => LEN[b] - LEN[a]); const r: number[] = []; idx.forEach((i, k) => { r[i] = k; }); return r; })();
if (SIZE_RANK[20] !== 22) throw new Error('chromosome 21 must be the smallest');
/** One small banded chromosome (vertical), its bottom at y. */
export const KChrom: React.FC<{x: number; y: number; i: number; sc: number; w?: number; o?: number; hot?: number; amber?: boolean}> = ({x, y, i, sc, w = 12, o = 1, hot = 0, amber = false}) => {
	if (o <= 0.01) return null;
	const h = LEN[i] * sc, p = CEN[i];
	const top = y - h, cy = top + h * p;
	const r = rng(i * 7 + 3);
	const bands = Array.from({length: Math.max(2, Math.round(h / 22))}, () => top + 4 + r() * (h - 8));
	const fill = amber ? '#f6d58e' : hot > 0.5 ? '#f3e2b0' : '#ebe3d3';
	const stroke = amber ? AMBER_INK : INK_SOFT;
	return (
		<g opacity={o}>
			<rect x={x - w / 2} y={top} width={w} height={Math.max(4, cy - top - 2)} rx={w / 2} fill={fill} stroke={stroke} strokeWidth={1.6} />
			<rect x={x - w / 2} y={cy + 2} width={w} height={Math.max(4, y - cy - 2)} rx={w / 2} fill={fill} stroke={stroke} strokeWidth={1.6} />
			{bands.filter(b => Math.abs(b - cy) > 5).map((b, k) => <line key={k} x1={x - w / 2 + 2} y1={b} x2={x + w / 2 - 2} y2={b} stroke={INK_SOFT} strokeWidth={1.6} opacity={0.6} />)}
		</g>
	);
};
export const KPITCH = 60;
/** The karyotype strip: pairs 1 to 22 and the X pair; `lit(i)` lights pairs, `third21` slides in a third 21, `sorted` reorders by size. */
export const Karyo: React.FC<{x0: number; y: number; sc?: number; o?: number; lit?: (i: number) => number; third21?: number; sorted?: number; hot21?: number; dim?: (i: number) => number; labels?: boolean}> = ({x0, y, sc = 0.55, o = 1, lit, third21 = 0, sorted = 0, hot21 = 0, dim, labels = true}) => {
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			{LEN.map((_, i) => {
				const pos = lerp(i, SIZE_RANK[i], sorted);
				const cx = x0 + pos * KPITCH + (i >= 21 || (sorted > 0.5 && SIZE_RANK[i] > SIZE_RANK[20]) ? 0 : 0);
				const hl = lit ? lit(i) : 1;
				const d = dim ? dim(i) : 0;
				const is21 = i === 20;
				return (
					<g key={i} opacity={(0.35 + 0.65 * hl) * (1 - 0.6 * d)}>
						<KChrom x={cx - 9} y={y} i={i} sc={sc} hot={hl} amber={is21 && hot21 > 0.5} />
						<KChrom x={cx + 9} y={y} i={i} sc={sc} hot={hl} amber={is21 && hot21 > 0.5} />
						{is21 && third21 > 0.01 ? <KChrom x={cx + 27} y={y - 30 * (1 - third21)} i={i} sc={sc} o={third21} amber /> : null}
						{labels ? <text x={cx + (is21 && third21 > 0.5 ? 9 : 0)} y={y + 30} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 20}} fill={is21 && hot21 > 0.5 ? AMBER_INK : INK_SOFT}>{KNAME(i)}</text> : null}
					</g>
				);
			})}
		</g>
	);
};
export const karyoX = (x0: number, i: number, sorted = 0) => x0 + lerp(i, SIZE_RANK[i], sorted) * KPITCH;

// ---------- meiosis cells ----------
export type CChrom = {color: string; dx: number; dy: number; dup?: boolean; o?: number};
/** One chromosome glyph: a rounded bar (two side by side when duplicated) with a centromere dot. */
export const Glyph: React.FC<{x: number; y: number; color: string; dup?: boolean; h?: number; o?: number}> = ({x, y, color, dup = false, h = 46, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		{(dup ? [-5, 5] : [0]).map((d, k) => <rect key={k} x={x + d - 4.5} y={y - h / 2} width={9} height={h} rx={4.5} fill={color} stroke="rgba(38,35,31,0.5)" strokeWidth={1.5} />)}
		<circle cx={x} cy={y - h * 0.12} r={4} fill={INK} />
	</g>
));
export const MCell: React.FC<{x: number; y: number; r: number; o?: number; chroms?: CChrom[]; stroke?: string}> = ({x, y, r, o = 1, chroms = [], stroke = '#8a7a63'}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<circle cx={x} cy={y} r={r} fill="#fbf6e8" stroke={stroke} strokeWidth={4} />
		{chroms.map((c, k) => <Glyph key={k} x={x + c.dx} y={y + c.dy} color={c.color} dup={c.dup} o={c.o} />)}
	</g>
));

// ---------- the book ----------
/** A closed book outline with chapter tabs; `tabs` gives each tab's letter, y offset and tone. */
export const Book: React.FC<{x: number; y: number; w?: number; h?: number; o?: number; tabs: {l: string; o?: number; amber?: boolean; dy?: number}[]}> = ({x, y, w = 230, h = 300, o = 1, tabs}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<rect x={x + 10} y={y + 10} width={w} height={h} rx={12} fill="#e9dfcb" />
		<rect x={x} y={y} width={w} height={h} rx={12} fill={CARD} stroke={INK} strokeWidth={4} />
		<line x1={x + 26} y1={y} x2={x + 26} y2={y + h} stroke={INK_SOFT} strokeWidth={3} />
		{tabs.map((t, k) => {
			const ty = y + 14 + k * ((h - 28) / tabs.length) + (t.dy ?? 0);
			const th = (h - 28) / tabs.length - 4;
			return (
				<g key={k} opacity={t.o ?? 1}>
					<rect x={x + w - 2} y={ty} width={34} height={th} rx={6} fill={t.amber ? '#f6d58e' : '#f3ead6'} stroke={t.amber ? AMBER_INK : INK_SOFT} strokeWidth={2.5} />
					<text x={x + w + 15} y={ty + th / 2 + 8} textAnchor="middle" style={{fontFamily: SERIF, fontWeight: 700, fontSize: Math.min(24, th * 0.8)}} fill={INK}>{t.l}</text>
				</g>
			);
		})}
	</g>
));

// ---------- small shared pieces ----------
export const TickC: React.FC<{x: number; y: number; o?: number; s?: number}> = ({x, y, o = 1, s = 24}) => (o <= 0.01 ? null : (
	<path d={`M${x - s * 0.5},${y} L${x - s * 0.12},${y + s * 0.45} L${x + s * 0.55},${y - s * 0.5}`} fill="none" stroke="#2f8a5b" strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" opacity={o} />
));
/** A small labelled vertical bar for dosage charts. */
export const DoseBar: React.FC<{x: number; y: number; w?: number; h: number; p?: number; o?: number; label?: string; amber?: boolean; size?: number}> = ({x, y, w = 70, h, p = 1, o = 1, label, amber = false, size = 26}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<rect x={x - w / 2} y={y - h * clamp01(p)} width={w} height={h * clamp01(p)} rx={8} fill={amber ? AMBER : '#c9b8a0'} />
		{label ? <text x={x} y={y + size + 8} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: size}} fill={INK}>{label}</text> : null}
	</g>
));
export const Frame: React.FC<{x: number; y: number; w: number; h: number; at: number; out?: number; stroke?: string; dash?: string}> = ({x, y, w, h, at, out, stroke = EDGE, dash}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	return o > 0.01 ? <rect x={x} y={y} width={w} height={h} rx={22} fill={CARD} stroke={stroke} strokeWidth={3} strokeDasharray={dash} opacity={o} /> : null;
};
export {AMBER, AMBER_INK, BIO_INK, INK, INK_SOFT, GREYT, GREY_INK, prog};
