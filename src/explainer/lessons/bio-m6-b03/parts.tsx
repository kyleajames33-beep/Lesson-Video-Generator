// M6 B03 drawing parts: the reading board (typeset mRNA codons with thin brackets, a slim DNA strand aligned under
// them, B6c amino acid beads above), letter swaps, the chart excerpt card (amino acids computed by B6c's codonToAA),
// the frame window and the small riding ribosome (B6c's flipped plate), a split strand for insert and delete
// demonstrations, a haemoglobin with empty beta lobes, term lines and a small chromosome bar for the Next chip.
// Codons are text, never tiles. B01's strand parts are imported, never edited.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {MRNA, MRNA_INK} from '../bio-m5-b06b/shared';
import {AABead, PepLink, Ribosome, codonToAA} from '../bio-m5-b06c/shared';
import {Fade, GREYT, GREY_INK, Sx, tw} from '../bio-m5-b13/shared';
import {BIO_INK, CARD, EDGE, SlimStrand, clamp01, lerp, rungX, vis} from '../bio-m6-b01/parts';

export {MRNA, MRNA_INK, AABead, PepLink, codonToAA};

// ---------- board geometry ----------
/** Letter pitch, codon gap and letter size on the reading board. */
export const LP = 46, CG = 30, LSZ = 46;
/** Rows: bead centres, mRNA baseline, DNA strand top. */
export const BY = 360, MY = 545, DY = 650, DGAP = 40;
/** Letter centre x for letter i with g codon gaps before it (default: grouped in threes). */
export const lx = (x0: number, i: number, g = Math.floor(i / 3), lp = LP, cg = CG) => x0 + i * lp + g * cg;
/** Codon centre x. */
export const cX = (x0: number, k: number, lp = LP, cg = CG) => lx(x0, 3 * k + 1, k, lp, cg);
/** Coding-strand DNA letters from mRNA. */
export const toDNA = (m: string) => m.replace(/U/g, 'T');
export const aas = (codons: string[]) => codons.map(codonToAA);

// ---------- letters and brackets ----------
export const Let: React.FC<{x: number; y: number; ch: string; o?: number; color?: string; size?: number}> = ({x, y, ch, o = 1, color = MRNA_INK, size = LSZ}) => (o <= 0.01 ? null : (
	<text x={x} y={y} textAnchor="middle" opacity={o} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size}} fill={color}>{ch}</text>
));
/** A thin codon bracket under letters (x1..x2) at y. */
export const Brk: React.FC<{x1: number; x2: number; y: number; o?: number; color?: string; w?: number}> = ({x1, x2, y, o = 1, color = '#c9a58f', w = 3}) => (o <= 0.01 ? null : (
	<path d={`M${x1},${y - 9} L${x1},${y} L${x2},${y} L${x2},${y - 9}`} fill="none" stroke={color} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" opacity={o} />
));
export const brkSpan = (x0: number, k: number, lp = LP, cg = CG): [number, number] => [lx(x0, 3 * k, k, lp, cg) - lp / 2 + 3, lx(x0, 3 * k + 2, k, lp, cg) + lp / 2 - 3];
/** A row of mRNA codons with brackets, optional position numbers and 5' and 3' ends. */
export const Codons: React.FC<{
	x0: number; y: number; codons: string[]; o?: number; size?: number; lp?: number; cg?: number; nums?: (number | string)[]; numO?: number; ends?: boolean;
	hot?: (k: number) => number; dim?: (k: number) => number; letterO?: (i: number) => number; letterColor?: (i: number) => string | undefined; brkO?: (k: number) => number;
}> = ({x0, y, codons, o = 1, size = LSZ, lp = LP, cg = CG, nums, numO = 1, ends = false, hot, dim, letterO, letterColor, brkO}) => {
	if (o <= 0.01) return null;
	const letters = codons.join('');
	const lastX = lx(x0, letters.length - 1, Math.floor((letters.length - 1) / 3), lp, cg);
	return (
		<g opacity={o}>
			{ends ? (
				<>
					<text x={x0 - lp * 0.95} y={y - size * 0.12} textAnchor="end" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: size * 0.6}} fill={MRNA_INK}>5'</text>
					<text x={lastX + lp * 0.95} y={y - size * 0.12} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: size * 0.6}} fill={MRNA_INK}>3'</text>
				</>
			) : null}
			{codons.map((c, k) => {
				const d = dim ? dim(k) : 0;
				const h = hot ? hot(k) : 0;
				const [b1, b2] = brkSpan(x0, k, lp, cg);
				const bo = brkO ? brkO(k) : 1;
				return (
					<g key={k} opacity={1 - 0.55 * d}>
						{h > 0.01 ? <rect x={b1 - 6} y={y - size * 0.95} width={b2 - b1 + 12} height={size * 1.35} rx={12} fill={AMBER} opacity={0.22 * h} /> : null}
						<Brk x1={b1} x2={b2} y={y + size * 0.36} o={bo} color={h > 0.5 ? AMBER : '#c9a58f'} w={h > 0.5 ? 4.5 : 3} />
						{c.split('').map((ch, j) => {
							const i = 3 * k + j;
							const lo = letterO ? letterO(i) : 1;
							return <Let key={j} x={lx(x0, i, k, lp, cg)} y={y} ch={ch} o={lo} size={size} color={letterColor?.(i) ?? MRNA_INK} />;
						})}
						{nums && nums[k] !== undefined ? <text x={cX(x0, k, lp, cg)} y={y + size * 0.36 + 34} textAnchor="middle" opacity={numO} style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 24}} fill={INK_SOFT}>{nums[k]}</text> : null}
					</g>
				);
			})}
		</g>
	);
};
/** A letter that changes at `at` (amber flash), and changes back at `out`. */
export const LetSwap: React.FC<{x: number; y: number; from: string; to: string; at: number; out?: number; size?: number; o?: number}> = ({x, y, from, to, at, out, size = LSZ, o = 1}) => {
	const f = useCurrentFrame();
	const k = prog(f, at, 10) * (out === undefined ? 1 : 1 - prog(f, out, 10));
	const flash = Math.max(0, Math.sin(clamp01((f - at) / 26) * Math.PI));
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			{flash > 0.01 ? <circle cx={x} cy={y - size * 0.36} r={size * 0.8} fill={AMBER} opacity={0.4 * flash} /> : null}
			<Let x={x} y={y - 10 * k} ch={from} o={1 - k} size={size} />
			<Let x={x} y={y + 10 * (1 - k)} ch={to} o={k} size={size} color={AMBER_INK} />
		</g>
	);
};

// ---------- the DNA row, aligned under the codons ----------
/** DNA rung pitch: the average letter pitch including codon gaps. */
export const PD = LP + CG / 3;
export const PAD = 2;
export const dnaX0 = (x0: number, pd = PD, lp = LP, cg = CG) => x0 - (lp + cg) / 2 - PAD * pd;
/** Rung x under mRNA letter i. */
export const rungAt = (x0: number, i: number) => rungX(dnaX0(x0), i + PAD, PD);
export const DnaRow: React.FC<{x0: number; n: number; y?: number; o?: number; hot?: number[]; band?: number; draw?: number}> = ({x0, n, y = DY, o = 1, hot = [], band = 1, draw = 1}) => (
	<SlimStrand x={dnaX0(x0)} y={y} n={n + 2 * PAD} pitch={PD} gap={DGAP} o={o} draw={draw} band={band > 0.01 ? {i0: PAD, i1: PAD + n - 1, o: band} : undefined} rung={i => (hot.includes(i - PAD) ? {color: AMBER, w: 6} : undefined)} />
);
/** The y at which a below-the-strand base callout starts. */
export const DNA_CALL_Y = DY + DGAP + 4;

/**
 * A strand split for insert and delete demonstrations. Rungs 0..k-1 on the left; for an insertion, `shift` opens a gap
 * after rung k-1 and a new amber rung fades in; for a deletion, rung k lifts out (`lift`) and the right part closes up.
 */
export const SplitStrand: React.FC<{x: number; y: number; n: number; k: number; pitch?: number; gap?: number; mode: 'ins' | 'del'; t: number; t2: number; o?: number}> = ({x, y, n, k, pitch = PD, gap = DGAP, mode, t, t2, o = 1}) => {
	if (o <= 0.01) return null;
	const col = '#9a8f80';
	if (mode === 'ins') {
		const sh = pitch * t;
		return (
			<g opacity={o}>
				<SlimStrand x={x} y={y} n={k} pitch={pitch} gap={gap} />
				<SlimStrand x={x + k * pitch + sh} y={y} n={n - k} pitch={pitch} gap={gap} />
				{t2 > 0.01 ? (
					<g opacity={t2}>
						{[y, y + gap].map((yy, j) => <line key={j} x1={x + k * pitch} y1={yy} x2={x + k * pitch + sh} y2={yy} stroke={col} strokeWidth={4} strokeLinecap="round" />)}
						<line x1={x + k * pitch + sh / 2} y1={y + 3 - 30 * (1 - t2)} x2={x + k * pitch + sh / 2} y2={y + gap - 3 - 30 * (1 - t2)} stroke={AMBER} strokeWidth={6} strokeLinecap="round" />
					</g>
				) : null}
			</g>
		);
	}
	const close = pitch * t2;
	const rx = x + k * pitch + pitch / 2;
	return (
		<g opacity={o}>
			<SlimStrand x={x} y={y} n={k} pitch={pitch} gap={gap} />
			<SlimStrand x={x + (k + 1) * pitch - close} y={y} n={n - k - 1} pitch={pitch} gap={gap} />
			{[y, y + gap].map((yy, j) => <line key={j} x1={x + k * pitch} y1={yy} x2={x + (k + 1) * pitch - close} y2={yy} stroke={col} strokeWidth={4} strokeLinecap="round" opacity={1 - clamp01(t * 1.4)} />)}
			<line x1={rx} y1={y + 3 - 70 * t} x2={rx} y2={y + gap - 3 - 70 * t} stroke={AMBER} strokeWidth={6} strokeLinecap="round" opacity={clamp01(1.6 - 1.6 * t) * (t > 0.01 ? 1 : 0)} />
		</g>
	);
};

// ---------- beads ----------
export const BR = 30;
/** A bead row above codons: beads joined by peptide links; per-bead opacity, ring and grey. */
export const Beads: React.FC<{xs: number[]; y?: number; aa: string[]; o?: number; r?: number; bo?: (k: number) => number; lo?: (k: number) => number; ring?: (k: number) => number; grey?: boolean}> = ({xs, y = BY, aa, o = 1, r = BR, bo, lo, ring, grey = false}) => {
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			{xs.slice(1).map((x, k) => {
				const l = lo ? lo(k) : Math.min(bo ? bo(k) : 1, bo ? bo(k + 1) : 1);
				return <PepLink key={k} a={[xs[k], y]} b={[x, y]} o={l} r={r} />;
			})}
			{xs.map((x, k) => <AABead key={k} x={x} y={y} aa={aa[k]} r={r} o={bo ? bo(k) : 1} ring={ring ? ring(k) : 0} grey={grey} />)}
		</g>
	);
};
/** A bead that flips from one amino acid to another at `at` (and back at `out`). */
export const BeadSwap: React.FC<{x: number; y?: number; from: string; to: string; at: number; out?: number; ring?: boolean; r?: number}> = ({x, y = BY, from, to, at, out, ring = true, r = BR}) => {
	const f = useCurrentFrame();
	const k = prog(f, at, 12) * (out === undefined ? 1 : 1 - prog(f, out, 10));
	const sx = Math.abs(Math.cos(k * Math.PI));
	return (
		<g transform={`translate(${x},${y}) scale(${Math.max(0.05, sx)},1) translate(${-x},${-y})`}>
			{k < 0.5 ? <AABead x={x} y={y} aa={from} r={r} /> : <AABead x={x} y={y} aa={to} r={r} ring={ring ? 1 : 0} />}
		</g>
	);
};
/** A dashed empty bead outline (an amino acid that is never added). */
export const GhostBead: React.FC<{x: number; y?: number; r?: number; o?: number}> = ({x, y = BY, r = BR, o = 1}) => (o <= 0.01 ? null : (
	<circle cx={x} cy={y} r={r} fill="none" stroke={GREYT} strokeWidth={3} strokeDasharray="7 6" opacity={o} />
));
/** The grey stop bar that ends a chain. */
export const StopBar: React.FC<{x: number; y?: number; o?: number; h?: number}> = ({x, y = BY, o = 1, h = 64}) => (o <= 0.01 ? null : (
	<rect x={x - 6} y={y - h / 2} width={12} height={h} rx={5} fill={GREYT} opacity={o} />
));

// ---------- chart excerpt card ----------
/** A small chart excerpt (codon, amino acid computed); `hi[codon]` lights a row with a pointer; stop rows grey. */
export const ChartCard: React.FC<{x: number; y: number; rows: string[]; at: number; out?: number; hi?: Record<string, number>; note?: {codon: string; text: string; at: number}; w?: number; size?: number; amberAt?: number; title?: string; rowH?: number; start?: boolean}> = ({x, y, rows, at, out, hi = {}, note, w = 340, size = 38, amberAt, title = 'codon chart', rowH = 60, start = false}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.01) return null;
	const slide = (1 - prog(f, at, 16)) * 60;
	const top = title ? 52 : 14;
	const H = top + rows.length * rowH + 14;
	return (
		<g opacity={o} transform={`translate(${slide},0)`}>
			<rect x={x} y={y} width={w} height={H} rx={18} fill={CARD} stroke={EDGE} strokeWidth={3} />
			{title ? <text x={x + 22} y={y + 38} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 28}} fill={INK_SOFT}>{title}</text> : null}
			{rows.map((c, i) => {
				const aa = codonToAA(c);
				const stop = aa === 'stop';
				const ry = y + top + i * rowH;
				const h = hi[c] ?? 0;
				const third = amberAt !== undefined ? prog(f, amberAt, 10) : 0;
				return (
					<g key={c}>
						{stop ? <rect x={x + 10} y={ry + 6} width={w - 20} height={rowH - 12} rx={10} fill="#dfe2e5" /> : null}
						{h > 0.01 ? <rect x={x + 8} y={ry + 4} width={w - 16} height={rowH - 8} rx={10} fill="none" stroke={AMBER} strokeWidth={5} opacity={h} /> : null}
						{h > 0.01 ? <path d={`M${x - 34},${ry + rowH / 2 - 14} L${x - 10},${ry + rowH / 2} L${x - 34},${ry + rowH / 2 + 14} Z`} fill={AMBER} opacity={h} /> : null}
						{c.split('').map((ch, j) => (
							<text key={j} x={x + 30 + j * size * 0.74} y={ry + rowH * 0.68} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: size}} fill={j === 2 && third > 0.5 ? AMBER_INK : stop ? GREY_INK : INK}>{ch}</text>
						))}
						<text x={x + 30 + size * 2.6} y={ry + rowH * 0.68} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size}} fill={stop ? GREY_INK : INK}>{aa}{start && c === 'AUG' ? ' (start)' : ''}</text>
						{note && note.codon === c ? <Sx x={x + 30 + size * 6} y={ry + rowH * 0.68} text={note.text} size={size * 0.78} color={AMBER_INK} hand at={note.at} /> : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------- frame window and riding ribosome ----------
export const FrameWin: React.FC<{x: number; y?: number; o?: number; lp?: number; size?: number}> = ({x, y = MY, o = 1, lp = LP, size = LSZ}) => (o <= 0.01 ? null : (
	<rect x={x - 1.5 * lp - 4} y={y - size * 0.98} width={3 * lp + 8} height={size * 1.4} rx={12} fill="#fff3d9" fillOpacity={0.85} stroke={AMBER} strokeWidth={5} opacity={o} />
));
/** B6c's flipped ribosome, small, its groove centred on the mRNA letters at x. */
export const Ribo: React.FC<{id: string; x: number; y?: number; o?: number; k?: number}> = ({id, x, y = MY - 16, o = 1, k = 0.13}) => (o <= 0.01 ? null : <Ribosome id={id} x={x} y={y} k={k} o={0.7 * o} />);

// ---------- labels ----------
/** The three row labels at the far left (fixed, faded after scene 3). */
export const RowLabels: React.FC<{o: number; beads?: boolean}> = ({o, beads = true}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		{beads ? <text x={96} y={BY + 10} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 28}} fill={INK_SOFT}>polypeptide</text> : null}
		<text x={96} y={MY - 12} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 28}} fill={MRNA_INK}>mRNA</text>
		<text x={96} y={DY + 30} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 28}} fill={INK_SOFT}>gene (DNA)</text>
	</g>
));
/** A new term with its gloss on one line: "term: gloss". */
export const Term: React.FC<{x: number; y: number; term: string; gloss: string; at: number; gat?: number; out?: number; size?: number}> = ({x, y, term, gloss, at, gat, out, size = 50}) => {
	const w = tw(term + ':', size) * 0.95 + 18;
	return (
		<Fade at={at} out={out}>
			<Sx x={x} y={y} text={term + ':'} size={size} color={INK} weight={800} at={at} />
			<Sx x={x + w} y={y} text={gloss} size={size * 0.82} color={BIO_INK} hand at={gat ?? at + 10} />
		</Fade>
	);
};
/** Small tick. */
export const TickS: React.FC<{x: number; y: number; at: number; s?: number; out?: number}> = ({x, y, at, s = 30, out}) => (
	<Fade at={at} out={out}><DrawPath d={`M${x - s * 0.5},${y} L${x - s * 0.12},${y + s * 0.45} L${x + s * 0.55},${y - s * 0.5}`} at={at} dur={12} color="#2f8a5b" width={6} /></Fade>
);

// ---------- haemoglobin with empty beta lobes ----------
/** B7's haemoglobin look: two alpha lobes; the two beta lobes solid (normal) or dashed and empty (`empty` 0..1). */
export const HbB: React.FC<{x: number; y: number; s?: number; o?: number; empty?: number}> = ({x, y, s = 1, o = 1, empty = 0}) => {
	if (o <= 0.01) return null;
	const lobes: [number, number, 'a' | 'b'][] = [[-24, -22, 'a'], [24, -22, 'b'], [-24, 22, 'b'], [24, 22, 'a']];
	return (
		<g opacity={o} transform={`translate(${x},${y}) scale(${s})`}>
			{lobes.map(([lx2, ly, t], i) => {
				const e = t === 'b' ? clamp01(empty) : 0;
				return (
					<g key={i}>
						<circle cx={lx2} cy={ly} r={27} fill={t === 'a' ? '#e0b1ab' : '#cf948c'} stroke="#7d3b34" strokeWidth={3} opacity={1 - e} />
						{e > 0.01 ? <circle cx={lx2} cy={ly} r={27} fill="#fffdf8" stroke={GREYT} strokeWidth={2.5} strokeDasharray="5 4" opacity={e} /> : null}
						<text x={lx2 - (lx2 > 0 ? 2 : -2)} y={ly + 6} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 18}} fill={e > 0.5 ? GREY_INK : '#5a2620'}>{t === 'a' ? 'α' : 'β'}</text>
					</g>
				);
			})}
		</g>
	);
};

// ---------- a small coded chromosome bar (Next chip) ----------
export const MiniChrom: React.FC<{x: number; y: number; w?: number; h?: number; o?: number}> = ({x, y, w = 150, h = 30, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<rect x={x} y={y - h / 2} width={w * 0.38} height={h} rx={h / 2} fill="#fbf0cf" stroke={INK} strokeWidth={3} />
		<rect x={x + w * 0.42} y={y - h / 2} width={w * 0.58} height={h} rx={h / 2} fill="#fbf0cf" stroke={INK} strokeWidth={3} />
		<rect x={x + w * 0.62} y={y - h / 2 + 2} width={w * 0.18} height={h - 4} fill={AMBER} opacity={0.8} />
		<circle cx={x + w * 0.4} cy={y} r={6} fill={INK} />
		{[0.15, 0.27, 0.55, 0.88].map((t, i) => <line key={i} x1={x + w * t} y1={y - h / 2 + 3} x2={x + w * t} y2={y + h / 2 - 3} stroke={INK_SOFT} strokeWidth={2} />)}
	</g>
));
export {lerp, clamp01, vis};
