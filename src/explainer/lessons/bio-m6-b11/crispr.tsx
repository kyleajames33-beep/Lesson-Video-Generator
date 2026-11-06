// M6 B11 quality fix (6 Nov 2026): the CRISPR mechanism drawn large. A double-stranded DNA ladder with lettered,
// colour-coded bases (A yellow, T orange, G pink, C blue, as in the painted helix plate b5x-zoom-helix); a terracotta
// guide RNA (U for T) that pairs base by base with one DNA strand while the other strand is lifted aside; a translucent
// Cas9 enzyme around the pairing; amber cuts through both strands; a repair that inserts one base pair; and a second,
// similar stretch where the guide pairs with two mismatches and Cas9 cuts again (dashed). Kept in its own file because
// other lessons import ./parts.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, FONT_DISPLAY, INK, prog} from '../../kit';

const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
import {Sx} from '../bio-m5-b13/shared';

const smooth = (t: number) => { const u = clamp01(t); return u * u * (3 - 2 * u); };
export const BASE_FILL: Record<string, string> = {A: '#efcb55', T: '#ef9d50', U: '#e7b07a', G: '#e7798a', C: '#6c9be0'};
const PAIR: Record<string, string> = {A: 'T', T: 'A', G: 'C', C: 'G'};
export const TOP_COL = '#9a86c8', BOT_COL = '#56aea6', RNA_COL = '#c0643f', CAS_COL = '#8d84a8';

/** One base block hanging from a backbone at (x, y0) toward y1 (length |y1 - y0|), lettered. */
const BaseBlock: React.FC<{x: number; y0: number; y1: number; b: string; o?: number; w?: number; grey?: number}> = ({x, y0, y1, b, o = 1, w = 48, grey = 0}) => {
	if (o <= 0.01) return null;
	const top = Math.min(y0, y1), h = Math.abs(y1 - y0);
	const g = clamp01(grey);
	return (
		<g opacity={o}>
			<rect x={x - w / 2} y={top} width={w} height={h} rx={9} fill={g > 0.5 ? '#d9d6d0' : BASE_FILL[b]} stroke={INK} strokeWidth={2.2} />
			<text x={x} y={top + h / 2 + 11} textAnchor="middle" fill={INK} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30}}>{b}</text>
		</g>
	);
};

export type Site = {i0: number; n: number; lift: number; open?: number};
export type DnaProps = {
	x0: number; ty: number; by: number; pitch: number; seq: string; draw?: number;
	/** top strand lifted above these stretches by lift (0..1 of `open` px) */
	sites?: Site[]; open?: number;
	/** right of cut index `cut`, everything shifts right by `gap` px; `ins` > 0 draws an inserted amber pair there */
	cut?: number; gap?: number; ins?: number; insBase?: string;
	grey?: {i0: number; n: number; v: number};
	hi?: {i0: number; n: number; v: number}[];
};
export const dnaX = (p: DnaProps, i: number) => p.x0 + i * p.pitch + (p.cut !== undefined && i >= p.cut ? p.gap ?? 0 : 0);
const liftAt = (p: DnaProps, i: number) => {
	let l = 0;
	for (const s of p.sites ?? []) {
		const d = i < s.i0 ? s.i0 - i : i > s.i0 + s.n - 1 ? i - (s.i0 + s.n - 1) : 0;
		const w = d === 0 ? 1 : d === 1 ? 0.55 : d === 2 ? 0.15 : 0;
		l = Math.max(l, w * s.lift * (p.open ?? 190));
	}
	return l;
};
/** The double strand: top backbone (lilac), bottom backbone (teal), paired bases between. */
export const Dna: React.FC<DnaProps> = (p) => {
	const n = p.seq.length;
	const d = p.draw ?? 1;
	const mid = (p.ty + p.by) / 2;
	const shown = Math.floor(n * clamp01(d) + 0.0001);
	const topPts: string[] = [], botPts: string[] = [];
	const blocks: React.ReactNode[] = [];
	for (let i = 0; i < shown; i++) {
		const x = dnaX(p, i), L = liftAt(p, i);
		topPts.push(`${x - p.pitch / 2},${p.ty - L} ${x + p.pitch / 2},${p.ty - L}`);
		botPts.push(`${x - p.pitch / 2},${p.by} ${x + p.pitch / 2},${p.by}`);
		const gr = p.grey && i >= p.grey.i0 && i < p.grey.i0 + p.grey.n ? p.grey.v : 0;
		const b = p.seq[i];
		blocks.push(
			<g key={i}>
				{(p.hi ?? []).map((h, k) => (i >= h.i0 && i < h.i0 + h.n && h.v > 0.01 ? <rect key={k} x={x - p.pitch / 2} y={p.ty - L - 26} width={p.pitch} height={p.by - p.ty + L + 52} fill="#fff1c9" opacity={0.8 * h.v} /> : null))}
				<BaseBlock x={x} y0={p.ty - L} y1={mid - 5 - L} b={b} grey={gr} />
				<BaseBlock x={x} y0={p.by} y1={mid + 5} b={PAIR[b]} grey={gr} />
			</g>,
		);
	}
	// the cut gap: split polylines at the cut so the strands visibly break
	const split = (pts: string[]) => (p.cut === undefined || (p.gap ?? 0) < 1 ? [pts] : [pts.slice(0, p.cut), pts.slice(p.cut)]);
	const insO = clamp01(p.ins ?? 0);
	return (
		<g>
			{blocks}
			{insO > 0.01 && p.cut !== undefined ? (
				<g opacity={insO}>
					<rect x={dnaX(p, p.cut) - p.pitch - 6} y={p.ty - 30} width={p.pitch + 12} height={p.by - p.ty + 60} rx={12} fill="none" stroke={AMBER} strokeWidth={5} />
					<BaseBlock x={dnaX(p, p.cut) - p.pitch} y0={p.ty} y1={mid - 5} b={p.insBase ?? 'A'} />
					<BaseBlock x={dnaX(p, p.cut) - p.pitch} y0={p.by} y1={mid + 5} b={PAIR[p.insBase ?? 'A']} />
				</g>
			) : null}
			{split(topPts).map((s, k) => (s.length ? <polyline key={'t' + k} points={s.join(' ')} fill="none" stroke={TOP_COL} strokeWidth={14} strokeLinecap="round" strokeLinejoin="round" /> : null))}
			{split(botPts).map((s, k) => (s.length ? <polyline key={'b' + k} points={s.join(' ')} fill="none" stroke={BOT_COL} strokeWidth={14} strokeLinecap="round" strokeLinejoin="round" /> : null))}
			{insO > 0.01 && p.cut !== undefined ? (
				<g opacity={insO}>
					<line x1={dnaX(p, p.cut) - p.pitch * 1.5} y1={p.ty} x2={dnaX(p, p.cut) - p.pitch / 2} y2={p.ty} stroke={AMBER} strokeWidth={14} strokeLinecap="round" />
					<line x1={dnaX(p, p.cut) - p.pitch * 1.5} y1={p.by} x2={dnaX(p, p.cut) - p.pitch / 2} y2={p.by} stroke={AMBER} strokeWidth={14} strokeLinecap="round" />
				</g>
			) : null}
		</g>
	);
};

/** The guide RNA: a terracotta backbone with lettered bases (U for T) hanging down by `len`; `zip` 0..1 reveals the
 * pairing ticks in turn; `bad` lists base indices that do not pair (red cross). */
export const GuideRna: React.FC<{x: number; y: number; pitch: number; seq: string; len: number; o?: number; zip?: number; bad?: number[]; tail?: number}> = ({x, y, pitch, seq, len, o = 1, zip = 0, bad = [], tail = 2}) => {
	if (o <= 0.01) return null;
	const n = seq.length;
	return (
		<g opacity={o}>
			<path d={`M${x - pitch * 0.5},${y} L${x + (n - 0.5) * pitch},${y} C${x + (n + 0.4) * pitch},${y} ${x + (n + 0.6) * pitch},${y - 40} ${x + (n + tail) * pitch},${y - 70}`} fill="none" stroke={RNA_COL} strokeWidth={14} strokeLinecap="round" />
			{seq.split('').map((b, i) => {
				const cx = x + i * pitch;
				const r = b === 'T' ? 'U' : b;
				const z = clamp01(zip * n - i);
				const isBad = bad.includes(i);
				return (
					<g key={i}>
						<BaseBlock x={cx} y0={y} y1={y + len} b={r} />
						{z > 0.01 && !isBad ? <line x1={cx - 12} y1={y + len + 5} x2={cx + 12} y2={y + len + 5} stroke="#2f8a5b" strokeWidth={6} strokeLinecap="round" opacity={z} /> : null}
						{z > 0.01 && isBad ? <path d={`M${cx - 13},${y + len - 8} l26,26 M${cx + 13},${y + len - 8} l-26,26`} stroke="#c4432f" strokeWidth={6} strokeLinecap="round" opacity={z} /> : null}
					</g>
				);
			})}
		</g>
	);
};

/** Cas9: a large translucent lilac enzyme outline. */
export const Cas9Big: React.FC<{cx: number; cy: number; w: number; h: number; o?: number}> = ({cx, cy, w, h, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<path d={`M${cx - w * 0.42},${cy - h * 0.42} C${cx - w * 0.1},${cy - h * 0.62} ${cx + w * 0.3},${cy - h * 0.56} ${cx + w * 0.46},${cy - h * 0.3} C${cx + w * 0.56},${cy - h * 0.05} ${cx + w * 0.5},${cy + h * 0.36} ${cx + w * 0.3},${cy + h * 0.48} C${cx + w * 0.02},${cy + h * 0.6} ${cx - w * 0.32},${cy + h * 0.54} ${cx - w * 0.46},${cy + h * 0.3} C${cx - w * 0.58},${cy + h * 0.04} ${cx - w * 0.56},${cy - h * 0.26} ${cx - w * 0.42},${cy - h * 0.42} Z`}
			fill="rgba(150,138,196,0.20)" stroke={CAS_COL} strokeWidth={6} />
	</g>
));

/** An amber cut mark (a zigzag break) across a strand at (x, y). */
export const CutMark: React.FC<{x: number; y: number; o?: number; dash?: boolean}> = ({x, y, o = 1, dash = false}) => (o <= 0.01 ? null : (
	<path d={`M${x - 6},${y - 34} L${x + 8},${y - 12} L${x - 8},${y + 10} L${x + 6},${y + 34}`} fill="none" stroke={AMBER_INK} strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={dash ? '7 7' : undefined} opacity={o} />
));

/** Local helper: a value that eases from 0 to 1 between frames a and a + d. */
export const ease = (f: number, a: number, d: number) => smooth(prog(f, a, d));
export {lerp, Sx, AMBER, AMBER_INK, INK};
export const useF = useCurrentFrame;
