// B12 shared pieces: the measured lesson, plates (swab v2, gel tank v2), and new coded parts on top of B11's tiles and
// ID cards: the sequencing trace (labelled peaks, a double peak at a heterozygous site), the repeat strip (GATA
// blocks), the gel generator (band distance from fragment length = flank + 4 x repeats, by a log-length rule; shorter
// runs further), electrode edges, the choice-board card, and every data set on screen with build-time checks.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import lesson from '../../../../docs/production/claude-pm/lessons/b12/measured/lesson.json';
import {sceneOf} from '../bio-m5-b06b/shared';
import {AMBER, AMBER_INK, CARD, EDGE, FILL, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, LINE, PSym, SERIF, clamp01, fitsMode, lerp, prog} from '../bio-m5-b11/shared';
import type {PB, Ped} from '../bio-m5-b11/shared';
import * as A from './assets';

export * from '../bio-m5-b11/shared';
export const S = sceneOf(lesson as unknown as {scenes: unknown[]});
export const hold = (id: string) => S(id).responseHold as {startFrame: number; endFrame: number};

// ---------- plates ----------
const P = (src: string, nat: [number, number], box: [number, number, number, number]): PB => ({src, nat, box, have: A.HAVE.has(src)});
export const PL12 = {
	swab: P(A.SWAB, [2000, 2000], [429, 236, 1473, 1776]),
	tank: P(A.GEL_TANK, [2000, 2000], [320, 503, 1804, 1531]),
};

// ---------- data (computed and checked) ----------
/** Scene 4 family at the sickle site (codon 6 middle base on the coding strand: A normal, T sickle). */
export const FAM: Ped = {
	inds: [
		{id: 'I-1', sex: 'M', aff: false, col: 0.5}, {id: 'I-2', sex: 'F', aff: false, col: 1.5},
		{id: 'II-1', sex: 'F', aff: true, col: 0}, {id: 'II-2', sex: 'M', aff: false, col: 1}, {id: 'II-3', sex: 'F', aff: false, col: 2},
	],
	fams: [{a: 'I-1', b: 'I-2', kids: ['II-1', 'II-2', 'II-3']}],
};
export const FAM_GENO: Record<string, string> = {'I-1': 'A/T', 'I-2': 'A/T', 'II-1': 'T/T', 'II-2': 'A/A', 'II-3': 'A/T'};
/** Nine bases around HBB codon 6 (codons 5 to 7: CCT GAG GAG); index 4 is codon 6's middle base. */
export const SITE9 = 'CCTGAGGAG';
export const SITE_I = 4;
export const traceSeq = (g: string) => SITE9.split('').map((b, i) => (i === SITE_I ? (g[0] === g[2] ? g[0] : g) : b));
/** Fragment length for a repeat count (flank 100 bases, 4-base unit). */
export const fragLen = (n: number) => 100 + 4 * n;
/** Scene 7 trio and man X. */
export const TRIO = {mother: [8, 11], child: [8, 12], father: [9, 12], manX: [10, 13]};
/** Attempt 1: three markers; lanes mother, child, man A, man B. */
export const PAT = [
	{mother: [7, 9], child: [9, 12], manA: [12, 14], manB: [8, 10]},
	{mother: [10, 11], child: [11, 13], manA: [13, 16], manB: [13, 15]},
	{mother: [6, 8], child: [6, 10], manA: [10, 11], manB: [9, 12]},
];
/** The child's band not shared with the mother (unambiguous only when the mother has exactly one of the two). */
export const paternal = (m: {mother: number[]; child: number[]}) => {
	const fromMum = m.child.filter(b => m.mother.includes(b));
	if (fromMum.length !== 1) throw new Error('B12: maternal band must be unambiguous');
	return m.child.find(b => !m.mother.includes(b))!;
};
export const canBeFather = (bands: number[][], man: number[][]) => bands.every((_, k) => man[k].includes(bands[k][0]));
(() => {
	const must = (ok: boolean, msg: string) => { if (!ok) throw new Error('B12 check failed: ' + msg); };
	must(fitsMode(FAM, 'AR').fits, 'family fits autosomal recessive');
	must(FAM_GENO['II-1'] === 'T/T' && FAM_GENO['I-1'] === 'A/T' && FAM_GENO['I-2'] === 'A/T', 'family genotypes');
	must(SITE9.slice(3, 6) === 'GAG' && SITE9[SITE_I] === 'A', 'codon 6 GAG, middle A');
	must(TRIO.child.every(b => TRIO.mother.includes(b) || TRIO.father.includes(b)), 'trio child bands from a parent');
	must(TRIO.child.some(b => !TRIO.mother.includes(b) && !TRIO.manX.includes(b)), 'man X excluded');
	const pat = PAT.map(paternal);
	must(pat.join() === '12,13,10', 'paternal bands 12, 13, 10');
	must(PAT.every((m, k) => m.manA.includes(pat[k])), 'man A consistent at all three');
	must(PAT.filter((m, k) => !m.manB.includes(pat[k])).length === 2 && PAT[1].manB.includes(13), 'man B excluded at markers 1 and 3');
	must(fragLen(8) === 132 && fragLen(11) === 144 && fragLen(12) === 148, 'band lengths');
	must(Math.abs(Math.pow(0.1, 10) - 1e-10) < 1e-20, 'ten markers one in ten billion');
})();
export const ladderText = (n: number) => `1/${Math.round(Math.pow(10, n)).toLocaleString('en-AU')}`;

// ---------- sequencing trace ----------
/** A row of labelled peaks (base letters under each; colours by base, never colour only). 'A/T' draws two overlapping peaks. */
export const Trace: React.FC<{x: number; y: number; seq: string[]; pitch?: number; h?: number; reveal?: (i: number) => number; frame?: number; size?: number; o?: number; hot?: number}> = ({x, y, seq, pitch = 40, h = 70, reveal, frame, size = 24, o = 1, hot = 0}) => {
	if (o <= 0.01) return null;
	const peak = (cx: number, b: string, hh: number, k: number) => {
		const w = pitch * 0.55;
		return <path key={k} d={`M${cx - w},${y} C${cx - w * 0.4},${y} ${cx - w * 0.35},${y - hh} ${cx},${y - hh} C${cx + w * 0.35},${y - hh} ${cx + w * 0.4},${y} ${cx + w},${y}`} fill={FILL[b]} fillOpacity={0.55} stroke={LINE[b]} strokeWidth={2.5} />;
	};
	return (
		<g opacity={o}>
			<line x1={x - pitch * 0.6} y1={y} x2={x + (seq.length - 0.4) * pitch} y2={y} stroke={INK_SOFT} strokeWidth={2} />
			{frame !== undefined ? <rect x={x + frame * pitch - pitch * 0.55} y={y - h - 14} width={pitch * 1.1} height={h + size + 30} rx={8} fill={hot > 0.01 ? 'rgba(232,169,59,0.18)' : 'none'} stroke={AMBER} strokeWidth={3} /> : null}
			{seq.map((b, i) => {
				const r = reveal ? reveal(i) : 1;
				if (r <= 0.01) return null;
				const cx = x + i * pitch;
				const two = b.includes('/');
				return (
					<g key={i} opacity={r}>
						{two ? [peak(cx - pitch * 0.1, b[0], h * 0.62 * r, 0), peak(cx + pitch * 0.1, b[2], h * 0.58 * r, 1)] : peak(cx, b, h * (0.8 + ((i * 7) % 5) * 0.05) * r, 0)}
						<text x={cx} y={y + size + 4} textAnchor="middle" style={{fontFamily: SERIF, fontWeight: 700, fontSize: two ? size * 0.85 : size}} fill={INK}>{b}</text>
					</g>
				);
			})}
		</g>
	);
};

// ---------- repeat strip ----------
/** A marker drawn as flanks plus n boxed "GATA" blocks; `grow` 0..1 reveals the blocks; the count is written at the end. */
export const RepeatStrip: React.FC<{x: number; y: number; n: number; bw?: number; bh?: number; grow?: number; o?: number; count?: number; color?: string; label?: boolean}> = ({x, y, n, bw = 60, bh = 38, grow = 1, o = 1, count = 1, color = AMBER_INK, label = true}) => {
	if (o <= 0.01) return null;
	const shown = n * clamp01(grow);
	const fl = 60;
	return (
		<g opacity={o}>
			<rect x={x} y={y - 8} width={fl} height={16} rx={8} fill="#cfc6b6" />
			{Array.from({length: n}, (_, i) => {
				const p = clamp01(shown - i);
				if (p <= 0.01) return null;
				const bx = x + fl + i * bw;
				return (
					<g key={i} opacity={p}>
						<rect x={bx + 2} y={y - bh / 2} width={bw - 4} height={bh} rx={8} fill="#fff4dc" stroke={color} strokeWidth={2.5} />
						{label ? <text x={bx + bw / 2} y={y + bh * 0.2} textAnchor="middle" style={{fontFamily: SERIF, fontWeight: 700, fontSize: Math.min(bh * 0.55, bw * 0.3)}} fill={INK}>GATA</text> : null}
					</g>
				);
			})}
			<rect x={x + fl + shown * bw} y={y - 8} width={fl} height={16} rx={8} fill="#cfc6b6" />
			{count > 0.01 ? <text x={x + 2 * fl + shown * bw + 16} y={y + 12} opacity={count} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34}} fill={INK}>{Math.round(shown)}</text> : null}
		</g>
	);
};

// ---------- the gel ----------
export type GelLane = {sex: 'M' | 'F'; label: string; bands: number[]; small?: boolean; aff?: boolean};
export type GelG = {x: number; y: number; w: number; h: number; n: number; lo: number; hi: number};
export const laneX = (G: GelG, i: number) => G.x + (G.w / G.n) * (i + 0.5);
/** Band y from repeat count: distance falls with the log of fragment length (shorter runs further). */
export const bandY = (G: GelG, rep: number) => {
	const t = (Math.log(fragLen(rep)) - Math.log(fragLen(G.lo))) / (Math.log(fragLen(G.hi)) - Math.log(fragLen(G.lo)));
	return G.y + 56 + (1 - t) * (G.h - 100);
};
/**
 * A front-on gel slab: wells along the top (black, negative edge), red positive edge at the bottom, one lane per lane
 * spec headed by a pedigree symbol and label, bands drawn at computed positions and labelled with repeat numbers.
 */
export const Gel: React.FC<{G: GelG; lanes: GelLane[]; o?: number; laneO?: (i: number) => number; bandO?: (i: number, j: number) => number; ring?: (i: number, j: number) => number; electrodes?: boolean; labels?: boolean; symSz?: number; labelSize?: number; bandW?: number}> = ({G, lanes, o = 1, laneO, bandO, ring, electrodes = true, labels = true, symSz = 40, labelSize = 26, bandW}) => {
	if (o <= 0.01) return null;
	const bw = bandW ?? Math.min(110, (G.w / G.n) * 0.62);
	return (
		<g opacity={o}>
			<rect x={G.x} y={G.y} width={G.w} height={G.h} rx={12} fill="#dceaf1" stroke="#7d9aa8" strokeWidth={3} />
			{electrodes ? (
				<g>
					<rect x={G.x} y={G.y - 14} width={G.w} height={10} rx={4} fill="#2b2b2b" />
					<rect x={G.x} y={G.y + G.h + 4} width={G.w} height={10} rx={4} fill="#c4432f" />
					<text x={G.x + G.w + 16} y={G.y + 4} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 26}} fill={INK}>{'− (black lead)'}</text>
					<text x={G.x + G.w + 16} y={G.y + G.h + 16} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 26}} fill="#a2321f">+ (red lead)</text>
				</g>
			) : null}
			{lanes.map((L, i) => {
				const lo = laneO ? laneO(i) : 1;
				if (lo <= 0.01) return null;
				const cx = laneX(G, i);
				return (
					<g key={i} opacity={lo}>
						<rect x={cx - bw / 2} y={G.y + 14} width={bw} height={14} rx={3} fill="#9fb8c4" stroke="#6f8b98" strokeWidth={1.5} />
						<PSym x={cx} y={G.y - 30 - symSz / 2} sex={L.sex} aff={!!L.aff} sz={L.small ? symSz * 0.72 : symSz} />
						<text x={cx} y={G.y - 44 - symSz} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: labelSize}} fill={INK}>{L.label}</text>
						{L.bands.map((b, j) => {
							const bo = bandO ? bandO(i, j) : 1;
							if (bo <= 0.01) return null;
							const by = bandY(G, b);
							const rg = ring ? ring(i, j) : 0;
							return (
								<g key={j} opacity={bo}>
									{rg > 0.01 ? <rect x={cx - bw / 2 - 8} y={by - 13} width={bw + 16} height={26} rx={10} fill="none" stroke={AMBER} strokeWidth={4} opacity={rg} /> : null}
									<rect x={cx - bw / 2} y={by - 5} width={bw} height={10} rx={4} fill="#3e6a86" />
									{labels ? <text x={cx + bw / 2 + 6} y={by + 8} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 22}} fill={INK}>{b}</text> : null}
								</g>
							);
						})}
					</g>
				);
			})}
		</g>
	);
};

// ---------- choice board card ----------
export const QCard: React.FC<{x: number; y: number; w: number; text: string; o?: number; dim?: number; icon?: React.ReactNode; size?: number}> = ({x, y, w, text, o = 1, dim = 0, icon, size = 30}) => (o <= 0.01 ? null : (
	<g opacity={o * (1 - 0.55 * dim)}>
		<rect x={x} y={y} width={w} height={90} rx={18} fill={CARD} stroke={EDGE} strokeWidth={3} />
		{icon}
		<text x={x + 150} y={y + 56} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: size}} fill={INK}>{text}</text>
	</g>
));
/** A mini gel icon (two lanes, a few bands). */
export const MiniGel: React.FC<{x: number; y: number; s?: number; o?: number}> = ({x, y, s = 1, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o} transform={`translate(${x},${y}) scale(${s})`}>
		<rect x={0} y={0} width={100} height={70} rx={8} fill="#dceaf1" stroke="#7d9aa8" strokeWidth={2.5} />
		{[[16, 30], [24, 52], [50, 22], [56, 46]].map(([bx, by], i) => <rect key={i} x={i < 2 ? 14 : 58} y={by - 4 + (bx % 3)} width={28} height={7} rx={2} fill="#3e6a86" />)}
	</g>
));
void lerp; void prog; void useCurrentFrame; void AMBER;
