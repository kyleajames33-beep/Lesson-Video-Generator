// B11 shared pieces (B12 imports the base tiles, read rows, ID cards and the pool bar): the measured lesson, the cattle
// plates on one common box, the example herd (64 red, 32 roan, 4 white) with a seeded mixed order and its sorted
// order, the allele copies and every count on screen (computed and checked at build time), and new coded parts: the
// herd grid, mini allele chips, the gene pool bar, bar charts, base tiles in B4's shapes with serif letters, ID cards,
// the chromosome bar, the per cent strip for the sample-bounce draws and the clover leaf icon. Tables, panels, beads
// and the rest of the genetics kit come from B13's shared chain.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import lesson from '../../../../docs/production/claude-pm/lessons/b11/measured/lesson.json';
import {sceneOf} from '../bio-m5-b06b/shared';
import {AMBER, AMBER_INK, CARD, EDGE, FONT_DISPLAY, FONT_HAND, GREYT, GREY_INK, INK, INK_SOFT, PlateB, SERIF, clamp01, lerp, prog, rng} from '../bio-m5-b13/shared';
import type {PB} from '../bio-m5-b13/shared';
import {FILL, LINE, tilePath} from '../bio-m5-b04/dna';
import * as A from './assets';

export * from '../bio-m5-b13/shared';
export {cw} from '../bio-m5-b06b/shared';
export {codonToAA} from '../bio-m5-b07/shared';
export {FILL, LINE};
export const S = sceneOf(lesson as unknown as {scenes: unknown[]});
export const hold = (id: string) => S(id).responseHold as {startFrame: number; endFrame: number};
export const COAT_RED = '#a8492c';
export const COAT_ROAN = '#c99a86';

// ---------- plates ----------
const P = (src: string, nat: [number, number], box: [number, number, number, number]): PB => ({src, nat, box, have: A.HAVE.has(src)});
/** B10's common cattle box, so red, roan and white stand on the same footprint. */
const COW_BOX: [number, number, number, number] = [222, 338, 1780, 1641];
export const PL11 = {
	red: P(A.COW_RED, [2000, 2000], COW_BOX),
	roan: P(A.COW_ROAN, [2000, 2000], COW_BOX),
	white: P(A.COW_WHITE, [2000, 2000], COW_BOX),
	swab: P(A.SWAB, [2000, 2000], [429, 236, 1473, 1776]),
};
export type Kind = 0 | 1 | 2; // red, roan, white
export const KIND_NAME = ['red', 'roan', 'white'];
export const cowPlate = (k: Kind) => (k === 0 ? PL11.red : k === 1 ? PL11.roan : PL11.white);
export const cowH = (w: number) => (w * (COW_BOX[3] - COW_BOX[1])) / (COW_BOX[2] - COW_BOX[0]);
export const Cow: React.FC<{k: Kind; cx: number; cy: number; w: number; o?: number; filter?: string}> = ({k, cx, cy, w, o = 1, filter}) => <PlateB p={cowPlate(k)} cx={cx} cy={cy} w={w} o={o} filter={filter} />;
/** Coat colour alleles of each kind (two copies, autosomal). */
export const allelesOf = (k: Kind): ['R' | 'W', 'R' | 'W'] => (k === 0 ? ['R', 'R'] : k === 1 ? ['R', 'W'] : ['W', 'W']);
export const GENO = ['C^{R} C^{R}', 'C^{R} C^{W}', 'C^{W} C^{W}'];

// ---------- the example herd (computed, never typed) ----------
export const HERD_N = {red: 64, roan: 32, white: 4};
/** Sorted order: index i is also the sorted grid slot (red first, then roan, then white). */
export const HERD: Kind[] = [...Array(HERD_N.red).fill(0), ...Array(HERD_N.roan).fill(1), ...Array(HERD_N.white).fill(2)];
/** A seeded mixed slot for each animal (the example herd before sorting). */
export const MIXED: number[] = (() => {
	const r = rng(41);
	const slots = HERD.map((_, i) => ({i, k: r()})).sort((a, b) => a.k - b.k).map(q => q.i);
	const out = new Array<number>(HERD.length);
	slots.forEach((animal, slot) => { out[animal] = slot; });
	return out;
})();
export const countKind = (ks: Kind[], k: Kind) => ks.filter(x => x === k).length;
export const whiteCopies = (ks: Kind[]) => ks.reduce<number>((a, k) => a + allelesOf(k).filter(c => c === "W").length, 0);
export const pc = (n: number, d: number) => Math.round((100 * n) / d);
export const HERD_COPIES = 2 * HERD.length;
export const HERD_W = whiteCopies(HERD);
export const HERD_R = HERD_COPIES - HERD_W;
/** Pool cells: every red copy to the left (0..159), white copies from 160 (white cattle first, then roans). */
export const POOL: {animal: number; copy: number; t: 'R' | 'W'; cell: number}[] = (() => {
	const out: {animal: number; copy: number; t: 'R' | 'W'; cell: number}[] = [];
	let r = 0, w = HERD_R;
	const order = [...HERD.keys()].sort((a, b) => (HERD[a] === 2 ? -1 : 0) - (HERD[b] === 2 ? -1 : 0) || a - b);
	for (const i of order) allelesOf(HERD[i]).forEach((t, c) => out.push({animal: i, copy: c, t, cell: t === 'R' ? r++ : w++}));
	return out;
})();

// ---------- scene data (computed, checked) ----------
export const PEAS = {tall: 91, short: 9};
export const SNP7 = {CC: 18, CT: 24, TT: 8};
export const SNP8 = {CC: 32, CT: 16, TT: 2};
export const tCopies = (g: {CC: number; CT: number; TT: number}) => g.CT + 2 * g.TT;
export const nPeople = (g: {CC: number; CT: number; TT: number}) => g.CC + g.CT + g.TT;
export const CLOVER = {A: {mark: 18, none: 42}, B: {mark: 30, none: 30}};
export const ITEM2 = {GG: 20, GA: 16, AA: 4};
/** Scene 9: two populations at 40 SNPs; exactly 21 shared (fixed data, count computed). */
export const SNP40 = (() => {
	const r = rng(77);
	const bases = ['A', 'C', 'G', 'T'];
	const shared = new Set<number>();
	const order = Array.from({length: 40}, (_, i) => ({i, k: r()})).sort((a, b) => a.k - b.k).map(q => q.i);
	order.slice(0, 21).forEach(i => shared.add(i));
	// column 0 is the one marker shown first: it must be shared
	if (!shared.has(0)) { shared.delete(order[20]); shared.add(0); }
	const p1 = Array.from({length: 40}, () => bases[Math.floor(r() * 4)]);
	const p2 = p1.map((b, i) => (shared.has(i) ? b : bases[(bases.indexOf(b) + 1 + Math.floor(r() * 3)) % 4]));
	return {p1, p2, same: p1.map((b, i) => b === p2[i])};
})();
/** Scene 10: fixed example draws (white copies) and the cattle that make them up (white, roan; the rest red). */
export const DRAW20 = [{w: 0, r: 4}, {w: 1, r: 10}, {w: 0, r: 7}];
export const DRAW200 = [{w: 8, r: 60}, {w: 9, r: 65}, {w: 8, r: 70}];
export const drawKinds = (n: number, d: {w: number; r: number}, seed: number): Kind[] => {
	const ks: Kind[] = [...Array(d.w).fill(2), ...Array(d.r).fill(1), ...Array(n - d.w - d.r).fill(0)];
	const rr = rng(seed);
	return ks.map(k => ({k, s: rr()})).sort((a, b) => a.s - b.s).map(q => q.k);
};
export const S20 = DRAW20.map((d, i) => drawKinds(20, d, 100 + i));
export const S200 = DRAW200.map((d, i) => drawKinds(200, d, 200 + i));
export const s20pct = S20.map(ks => (100 * whiteCopies(ks)) / (2 * ks.length));
export const s200pct = S200.map(ks => (100 * whiteCopies(ks)) / (2 * ks.length));

(() => {
	const must = (ok: boolean, msg: string) => { if (!ok) throw new Error('B11 check failed: ' + msg); };
	must(HERD.length === 100 && countKind(HERD, 0) === 64 && countKind(HERD, 1) === 32 && countKind(HERD, 2) === 4, 'herd counts');
	must(HERD_COPIES === 200 && HERD_W === 40 && HERD_R === 160 && HERD_W / HERD_COPIES === 0.2, 'herd copies 40 of 200');
	must(pc(4, 100) === 4 && pc(36, 100) === 36, 'hook wrong answers');
	must(POOL.length === 200 && POOL.filter(q => q.t === 'W').length === 40 && POOL.filter(q => HERD[q.animal] === 2 && q.t === 'W').every(q => q.cell < HERD_R + 8), 'pool order');
	must(new Set(MIXED).size === 100, 'mixed slots');
	must(PEAS.tall + PEAS.short === 100 && pc(PEAS.short, 100) === 9, 'pea field');
	must(nPeople(SNP7) === 50 && tCopies(SNP7) === 40 && 2 * SNP7.CC + SNP7.CT === 60 && pc(SNP7.TT, 50) === 16, 'scene 7');
	must(nPeople(SNP8) === 50 && tCopies(SNP8) === 20, 'scene 8');
	must(SNP40.same.filter(Boolean).length === 21 && SNP40.same[0], 'scene 9 grid shares 21 of 40');
	must(S20.map(whiteCopies).join() === '4,12,7' && S200.map(whiteCopies).join() === '76,83,86', 'sample draws');
	must(s20pct.map(Math.round).join() === '10,30,18' && s200pct.map(Math.round).join() === '19,21,22', 'sample per cents');
	const a = CLOVER.A, b = CLOVER.B;
	must(a.mark + a.none === 60 && b.mark + b.none === 60 && pc(a.mark, 60) === 30 && pc(b.mark, 60) === 50 && pc(a.mark, a.none) === 43, 'clover item');
	const n2 = ITEM2.GG + ITEM2.GA + ITEM2.AA;
	must(n2 === 40 && ITEM2.GA + 2 * ITEM2.AA === 24 && (ITEM2.GA + 2 * ITEM2.AA) / (2 * n2) === 0.3 && pc(ITEM2.AA, n2) === 10, 'SNP item');
})();

// ---------- the herd grid ----------
export type GridG = {x: number; y: number; dx: number; dy: number; cols: number};
export const gxy = (G: GridG, slot: number): [number, number] => [G.x + (slot % G.cols) * G.dx, G.y + Math.floor(slot / G.cols) * G.dy];
/** A small coat colour allele chip (red or cream pill with the superscript letter). */
export const MiniAllele: React.FC<{x: number; y: number; t: 'R' | 'W'; r?: number; o?: number; glow?: number}> = ({x, y, t, r = 8, o = 1, glow = 0}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		{glow > 0.01 ? <rect x={x - r * 1.5 - 5} y={y - r - 5} width={r * 3 + 10} height={r * 2 + 10} rx={r + 5} fill={AMBER} opacity={0.8 * glow} /> : null}
		<rect x={x - r * 1.5} y={y - r} width={r * 3} height={r * 2} rx={r} fill={t === 'R' ? COAT_RED : '#fffdf8'} stroke={INK} strokeWidth={1.4} />
		{r >= 7 ? <text x={x} y={y + r * 0.42} textAnchor="middle" style={{fontFamily: SERIF, fontWeight: 700, fontSize: r * 1.2}} fill={t === 'R' ? '#fff6ee' : INK}>{t}</text> : null}
	</g>
));
/**
 * The herd on a grid: each animal moves from its mixed slot to its sorted slot as `sort` goes 0..1. `show(i)` is its
 * appearance, `pulse(i)` an amber halo, `chips` shows its two allele chips under it (0..1), `chipGlow(i, c)` lights one.
 */
export const Herd: React.FC<{G: GridG; w: number; sort?: number; show?: (i: number) => number; pulse?: (i: number) => number; chips?: number; chipGlow?: (i: number, c: number) => number; chipO?: (i: number, c: number) => number; o?: number; dim?: (i: number) => number}> = ({G, w, sort = 1, show, pulse, chips = 0, chipGlow, chipO, o = 1, dim}) => {
	if (o <= 0.01) return null;
	const h = cowH(w);
	return (
		<g opacity={o}>
			{HERD.map((k, i) => {
				const s = show ? show(i) : 1;
				if (s <= 0.01) return null;
				const t = clamp01(sort * 1.25 - (i % 10) * 0.025);
				const a = gxy(G, MIXED[i]), b = gxy(G, i);
				const x = lerp(a[0], b[0], t), y = lerp(a[1], b[1], t);
				const pu = pulse ? pulse(i) : 0;
				const dm = dim ? dim(i) : 0;
				return (
					<g key={i} opacity={s * (1 - 0.65 * dm)}>
						{pu > 0.01 ? <ellipse cx={x} cy={y} rx={w * 0.62} ry={h * 0.66} fill={AMBER} opacity={0.55 * pu} /> : null}
						<Cow k={k} cx={x} cy={y} w={w} />
						{chips > 0.01 ? allelesOf(k).map((c, j) => (
							<MiniAllele key={j} x={x + (j ? 1 : -1) * w * 0.2} y={y + h * 0.5 + 6} t={c} r={Math.max(4.5, w * 0.13)} o={chips * (chipO ? chipO(i, j) : 1)} glow={chipGlow ? chipGlow(i, j) : 0} />
						)) : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------- gene pool bar ----------
const CELL_FILL: Record<string, string> = {R: COAT_RED, W: '#fffdf8', t: '#cfe0b8', A: FILL.A, T: FILL.T, C: FILL.C, G: FILL.G};
export type PoolCell = {t: string; o?: number; glow?: number};
/** A bar of n cells; cell(j) returns its allele letter ('' empty, '?' unknown), appearance and amber glow. */
export const PoolBar: React.FC<{x: number; y: number; w: number; h: number; n: number; cell: (j: number) => PoolCell; o?: number; letters?: boolean}> = ({x, y, w, h, n, cell, o = 1, letters = false}) => {
	if (o <= 0.01) return null;
	const cw = w / n;
	return (
		<g opacity={o}>
			<rect x={x - 6} y={y - 6} width={w + 12} height={h + 12} rx={12} fill={CARD} stroke={INK_SOFT} strokeWidth={3} />
			{Array.from({length: n}, (_, j) => {
				const c = cell(j);
				const co = c.o ?? 1;
				const gl = c.glow ?? 0;
				return (
					<g key={j}>
						{c.t && c.t !== '?' && co > 0.01 ? <rect x={x + j * cw + 0.6} y={y} width={cw - 1.2} height={h} fill={CELL_FILL[c.t] ?? '#ddd'} stroke={c.t === 'W' ? '#c9bba6' : 'none'} strokeWidth={0.8} opacity={co} /> : null}
						{c.t === '?' && co > 0.01 ? <text x={x + (j + 0.5) * cw} y={y + h * 0.66} textAnchor="middle" opacity={co} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: Math.min(h * 0.6, cw * 1.6)}} fill={GREYT}>?</text> : null}
						{letters && c.t && c.t !== '?' && co > 0.01 ? <text x={x + (j + 0.5) * cw} y={y + h * 0.64} textAnchor="middle" opacity={co} style={{fontFamily: SERIF, fontWeight: 700, fontSize: Math.min(h * 0.55, cw * 0.8)}} fill={INK}>{c.t}</text> : null}
						{gl > 0.01 ? <rect x={x + j * cw} y={y - 7} width={cw} height={5} fill={AMBER_INK} opacity={gl} /> : null}
						{gl > 0.01 ? <rect x={x + j * cw} y={y + h + 2} width={cw} height={5} fill={AMBER_INK} opacity={gl} /> : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------- bar chart ----------
export type Bar = {label: string; v: number; p: number; color?: string; hot?: number};
/** Vertical bars from a table (values in per cent, axis 0 to 100), each labelled with its value. */
export const FreqBars: React.FC<{x: number; y: number; w: number; h: number; bars: Bar[]; axis: string; o?: number; title?: string}> = ({x, y, w, h, bars, axis, o = 1, title}) => {
	if (o <= 0.01) return null;
	const bw = Math.min(110, (w - 40) / bars.length - 30);
	const step = (w - 40) / bars.length;
	const Y = (v: number) => y + h - (v / 100) * h;
	return (
		<g opacity={o}>
			{title ? <text x={x + w / 2} y={y - 22} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34}} fill={INK}>{title}</text> : null}
			<line x1={x} y1={y + h} x2={x + w} y2={y + h} stroke={INK} strokeWidth={3} />
			<line x1={x} y1={y} x2={x} y2={y + h} stroke={INK} strokeWidth={3} />
			{[0, 50, 100].map(t => (
				<g key={t}>
					<line x1={x - 8} y1={Y(t)} x2={x} y2={Y(t)} stroke={INK} strokeWidth={2} />
					<text x={x - 14} y={Y(t) + 8} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 22}} fill={INK_SOFT}>{t}</text>
				</g>
			))}
			<text x={x + w / 2} y={y + h + 74} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 22}} fill={INK_SOFT}>{axis}</text>
			{bars.map((b, i) => {
				const cx = x + 20 + step * (i + 0.5);
				const p = clamp01(b.p);
				const top = Y(b.v * p);
				return (
					<g key={i}>
						{(b.hot ?? 0) > 0.01 ? <rect x={cx - bw / 2 - 7} y={top - 7} width={bw + 14} height={y + h - top + 7} rx={8} fill="none" stroke={AMBER} strokeWidth={4} opacity={b.hot} /> : null}
						<rect x={cx - bw / 2} y={top} width={bw} height={y + h - top} rx={5} fill={b.color ?? AMBER} stroke="rgba(38,35,31,0.5)" strokeWidth={1.5} opacity={p > 0.01 ? 1 : 0} />
						<text x={cx} y={y + h + 34} textAnchor="middle" opacity={p > 0.01 ? 1 : 0} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 26}} fill={INK}>{b.label}</text>
						<text x={cx} y={top - 12} textAnchor="middle" opacity={clamp01(p * 3 - 2)} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30}} fill={INK}>{`${b.v}%`}</text>
					</g>
				);
			})}
		</g>
	);
};

// ---------- base tiles and read rows ----------
/** A base tile in B4's shape and colours with a serif capital letter, centred at x,y. '?' draws a dashed blank. */
export const BaseT: React.FC<{x: number; y: number; l: string; w?: number; h?: number; o?: number; glow?: number; dim?: number; s?: number}> = ({x, y, l, w = 60, h = 50, o = 1, glow = 0, dim = 0, s = 1}) => {
	if (o <= 0.01) return null;
	const q = l === '?' || !FILL[l];
	return (
		<g opacity={o * (1 - 0.55 * dim)} transform={`translate(${x},${y}) scale(${s})`}>
			{glow > 0.01 ? <rect x={-w / 2 - 9} y={-h / 2 - 9} width={w + 18} height={h + 22} rx={14} fill={AMBER} opacity={0.6 * glow} /> : null}
			{q ? <rect x={-w / 2} y={-h / 2} width={w} height={h} rx={10} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="7 5" />
				: w < 40 ? <rect x={-w / 2} y={-h / 2} width={w} height={h} rx={6} fill={FILL[l]} stroke={LINE[l]} strokeWidth={2} />
				: <path d={tilePath(l, w, h)} fill={FILL[l]} stroke={LINE[l]} strokeWidth={3} strokeLinejoin="round" />}
			<text x={0} y={h * 0.22} textAnchor="middle" style={{fontFamily: SERIF, fontWeight: 700, fontSize: h * 0.62}} fill={q ? INK_SOFT : INK}>{q ? '?' : l}</text>
		</g>
	);
};
/** A row of tiles; tile(i) may override letter, appearance and glow. */
export const TileRow: React.FC<{x: number; y: number; seq: string; pitch?: number; w?: number; h?: number; o?: number; tile?: (i: number) => {l?: string; o?: number; glow?: number; dim?: number}}> = ({x, y, seq, pitch = 68, w = 60, h = 50, o = 1, tile}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		{seq.split('').map((c, i) => {
			const t = tile ? tile(i) : {};
			return <BaseT key={i} x={x + i * pitch} y={y} l={t.l ?? c} w={w} h={h} o={t.o ?? 1} glow={t.glow ?? 0} dim={t.dim ?? 0} />;
		})}
	</g>
));
/** A coded sample ID card (a tube icon and a label; no people). */
export const IdCard: React.FC<{x: number; y: number; label: string; w?: number; h?: number; o?: number; size?: number}> = ({x, y, label, w = 170, h = 70, o = 1, size = 28}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<rect x={x} y={y} width={w} height={h} rx={12} fill={CARD} stroke={INK_SOFT} strokeWidth={2.5} />
		<rect x={x + 14} y={y + h / 2 - 16} width={12} height={32} rx={5} fill="#fbfaf5" stroke={INK_SOFT} strokeWidth={1.6} />
		<rect x={x + 12} y={y + h / 2 - 21} width={16} height={7} rx={2} fill="#4f9fc9" />
		<text x={x + 40} y={y + h / 2 + size * 0.36} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: size}} fill={INK}>{label}</text>
	</g>
));
/** A long cream chromosome bar (coded) with rounded ends. */
export const ChromBar: React.FC<{x: number; y: number; w: number; h?: number; o?: number; fill?: string; stroke?: string}> = ({x, y, w, h = 44, o = 1, fill = '#f3e7cf', stroke = INK_SOFT}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<rect x={x} y={y - h / 2} width={w} height={h} rx={h / 2} fill={fill} stroke={stroke} strokeWidth={3} />
		<path d={`M${x + w * 0.46},${y - h / 2 + 2} Q${x + w * 0.48},${y} ${x + w * 0.46},${y + h / 2 - 2}`} fill="none" stroke={stroke} strokeWidth={2} opacity={0.6} />
	</g>
));

// ---------- per cent strip (sample bounce) ----------
export type Dot = {v: number; at: number; ring?: number; label?: boolean};
/** An axis from 0 to 50 per cent with dots landing at their frames; values are labelled (rounded). */
export const PctStrip: React.FC<{x: number; y: number; w: number; dots: Dot[]; o?: number; lo?: number; hi?: number; label?: string; color?: string; r?: number; tickLabels?: boolean}> = ({x, y, w, dots, o = 1, lo = 0, hi = 50, label, color = AMBER, r = 14, tickLabels = true}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const X = (v: number) => x + ((v - lo) / (hi - lo)) * w;
	const ticks = [];
	for (let t = lo; t <= hi; t += 10) ticks.push(t);
	return (
		<g opacity={o}>
			{label ? <text x={x - 24} y={y + 8} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28}} fill={INK}>{label}</text> : null}
			<line x1={x} y1={y} x2={x + w} y2={y} stroke={INK} strokeWidth={3} />
			{ticks.map(t => (
				<g key={t}>
					<line x1={X(t)} y1={y} x2={X(t)} y2={y + 10} stroke={INK} strokeWidth={2} />
					{tickLabels ? <text x={X(t)} y={y + 36} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 22}} fill={INK_SOFT}>{t}%</text> : null}
				</g>
			))}
			{dots.map((d, i) => {
				const p = prog(f, d.at, 10);
				if (p <= 0.01) return null;
				const cy = y - r - 4;
				return (
					<g key={i} opacity={p}>
						{(d.ring ?? 0) > 0.01 ? <circle cx={X(d.v)} cy={cy} r={r + 9} fill="none" stroke={AMBER_INK} strokeWidth={4} opacity={d.ring} /> : null}
						<circle cx={X(d.v)} cy={lerp(cy - 60, cy, p)} r={r} fill={color} stroke={AMBER_INK} strokeWidth={2.5} />
						{d.label !== false ? <text x={X(d.v)} y={cy - r - 12} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 24}} fill={INK}>{Math.round(d.v)}%</text> : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------- clover leaf icon ----------
/** A coded white clover leaf: three leaflets; `mark` 0..1 is the pale V on each leaflet (0 = plain). */
export const Leaf: React.FC<{x: number; y: number; s?: number; mark?: number; o?: number}> = ({x, y, s = 1, mark = 1, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o} transform={`translate(${x},${y}) scale(${s})`}>
		<path d="M0,6 C4,30 10,46 18,60" fill="none" stroke="#4f7a36" strokeWidth={5} strokeLinecap="round" />
		{[-90, 30, 150].map(a => (
			<g key={a} transform={`rotate(${a + 90})`}>
				<path d="M0,0 C-26,-8 -34,-40 -18,-52 C-10,-58 -2,-54 0,-46 C2,-54 10,-58 18,-52 C34,-40 26,-8 0,0 Z" fill="#5f9a45" stroke="#3d6a2b" strokeWidth={2.5} />
				{mark > 0.01 ? <path d="M-15,-38 L0,-16 L15,-38" fill="none" stroke="#eef5e2" strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" opacity={0.95 * mark} /> : null}
			</g>
		))}
	</g>
));
void EDGE; void GREY_INK;
