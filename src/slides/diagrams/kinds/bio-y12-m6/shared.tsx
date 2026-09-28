// Shared pieces for the bio-y12-m6 lane (Genetic Change). Lane-local on
// purpose (docs/diorama-system.md). Generic animation/paint helpers are reused
// read-only from the chem-y12-m6 lane; the biology pieces below (genetic code,
// base colours, stone ledge, chromosome rod, cell) could be promoted into
// diorama.tsx if other biology lanes want them.

import type {ReactNode} from 'react';
import {STONE} from '../../diorama';

export {clamp, fadeAt, popAt, ease, shade, mix, GlossDefs, Ball, Pill, textWidth, Arrow, hash01} from '../chem-y12-m6/shared';

// ── Colours ────────────────────────────────────────────────────────────────
// Three meanings at most per diagram (rule 4). Blue is the biology accent;
// rose is the contrasting allele / second parent; amber stays reserved for the
// one thing that matters (a new allele, the mutated base).
export const BLUE = '#3a8ad9';
export const ROSE = '#d9657a';
export const SLATE = '#7d8a9c';
export const GREEN = '#5aa469';
export const PURPLE = '#8a6cc9';
export const AMBER = '#f0a830';

/** Base colours for DNA tiles (A green, T red, G purple, C blue). */
export const BASE_COLOR: Record<string, string> = {A: '#4f9d62', T: '#d25a55', G: '#8a6cc9', C: '#3a7fd0'};

// ── Genetic code (standard table, DNA coding strand, T not U) ─────────────
const AA1 = 'FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG';
const ORDER = 'TCAG';
const THREE: Record<string, string> = {
	F: 'Phe', L: 'Leu', S: 'Ser', Y: 'Tyr', C: 'Cys', W: 'Trp', P: 'Pro', H: 'His', Q: 'Gln', R: 'Arg', I: 'Ile', M: 'Met',
	T: 'Thr', N: 'Asn', K: 'Lys', V: 'Val', A: 'Ala', D: 'Asp', E: 'Glu', G: 'Gly', '*': 'STOP',
};
/** Three-letter amino acid (or "STOP") for a DNA coding-strand codon; "" if incomplete. */
export const codonToAA = (codon: string) => {
	if (codon.length < 3) return '';
	const i = ORDER.indexOf(codon[0]) * 16 + ORDER.indexOf(codon[1]) * 4 + ORDER.indexOf(codon[2]);
	return THREE[AA1[i]] ?? '?';
};
/** Translate in frame from base 0; stops after the first STOP. */
export const translate = (seq: string) => {
	const out: string[] = [];
	for (let i = 0; i + 3 <= seq.length; i += 3) {
		const aa = codonToAA(seq.slice(i, i + 3));
		out.push(aa);
		if (aa === 'STOP') break;
	}
	return out;
};

// ── Painted pieces ─────────────────────────────────────────────────────────

/** A long stone ledge (the strip version of DioramaPlinth). (x, y) = top-left of the top face. */
export const StoneLedge = ({id, x, y, w, d = 16, children}: {id: string; x: number; y: number; w: number; d?: number; children?: ReactNode}) => (
	<g>
		<defs>
			<linearGradient id={`${id}-ltop`} x1="0" x2="0" y1="0" y2="1">
				<stop offset="0%" stopColor={STONE.topLight} />
				<stop offset="100%" stopColor={STONE.topEdge} />
			</linearGradient>
			<linearGradient id={`${id}-lside`} x1="0" x2="1" y1="0" y2="0">
				<stop offset="0%" stopColor={STONE.sideLight} />
				<stop offset="45%" stopColor={STONE.side} />
				<stop offset="100%" stopColor={STONE.sideDark} />
			</linearGradient>
		</defs>
		<rect x={x + 8} y={y + d + 6} width={w} height={10} rx={5} fill={STONE.shadow} />
		<rect x={x} y={y + 4} width={w} height={d + 2} rx={7} fill={`url(#${id}-lside)`} />
		<rect x={x} y={y} width={w} height={d * 0.75} rx={7} fill={`url(#${id}-ltop)`} />
		<line x1={x + 8} y1={y + 2} x2={x + w - 8} y2={y + 2} stroke="#fff" strokeOpacity={0.45} strokeWidth={1.5} />
		{children}
	</g>
);

/** A glossy DNA base tile (letter on a painted square). */
export const BaseTile = ({x, y, s, base, opacity = 1, scaleY = 1, ring = 0, ringColor = AMBER}: {x: number; y: number; s: number; base: string; opacity?: number; scaleY?: number; ring?: number; ringColor?: string}) => {
	const c = BASE_COLOR[base] ?? SLATE;
	return (
		<g opacity={opacity} transform={`translate(${x},${y}) scale(1,${scaleY})`}>
			{ring > 0 && <rect x={-s / 2 - 5} y={-s / 2 - 5} width={s + 10} height={s + 10} rx={s * 0.26} fill="none" stroke={ringColor} strokeWidth={2.5 + ring * 1.5} />}
			<rect x={-s / 2 + 2} y={-s / 2 + 4} width={s} height={s} rx={s * 0.2} fill="rgba(40,36,30,0.22)" />
			<rect x={-s / 2} y={-s / 2} width={s} height={s} rx={s * 0.2} fill={c} stroke="rgba(0,0,0,0.22)" strokeWidth={1} />
			<rect x={-s / 2 + 3} y={-s / 2 + 3} width={s - 6} height={s * 0.36} rx={s * 0.14} fill="#fff" opacity={0.26} />
			<text y={s * 0.2} textAnchor="middle" fill="#fff" fontSize={s * 0.56} fontWeight={800}>{base}</text>
		</g>
	);
};

/**
 * A painted chromosome rod: rounded capsule with bands. Horizontal, centred on
 * (x, y), length `len`, thickness `t`. `bands` are fractions [from, to] with a
 * colour, drawn inside the rod.
 */
export const ChromosomeRod = ({
	id, x, y, len, t, color, bands = [], centromere = 0.5, opacity = 1, rotate = 0,
}: {id: string; x: number; y: number; len: number; t: number; color: string; bands?: {from: number; to: number; color: string}[]; centromere?: number | null; opacity?: number; rotate?: number}) => {
	const x0 = -len / 2;
	const cid = `${id}-rod`;
	return (
		<g opacity={opacity} transform={`translate(${x},${y}) rotate(${rotate})`}>
			<defs>
				<clipPath id={cid}>
					<rect x={x0} y={-t / 2} width={len} height={t} rx={t / 2} />
				</clipPath>
			</defs>
			<rect x={x0 + 3} y={-t / 2 + 5} width={len} height={t} rx={t / 2} fill="rgba(40,36,30,0.2)" />
			<g clipPath={`url(#${cid})`}>
				<rect x={x0} y={-t / 2} width={len} height={t} fill={color} />
				{bands.map((b, i) => (
					<rect key={i} x={x0 + b.from * len} y={-t / 2} width={(b.to - b.from) * len} height={t} fill={b.color} />
				))}
				<rect x={x0} y={-t / 2} width={len} height={t * 0.4} fill="#fff" opacity={0.28} />
				<rect x={x0} y={t * 0.18} width={len} height={t * 0.32} fill="#000" opacity={0.12} />
			</g>
			{centromere !== null && (
				<g>
					<path d={`M ${x0 + centromere * len - 5} ${-t / 2 - 1} Q ${x0 + centromere * len} ${-t / 2 + 6} ${x0 + centromere * len + 5} ${-t / 2 - 1} Z`} fill="#f7f7f5" />
					<path d={`M ${x0 + centromere * len - 5} ${t / 2 + 1} Q ${x0 + centromere * len} ${t / 2 - 6} ${x0 + centromere * len + 5} ${t / 2 + 1} Z`} fill="#f7f7f5" />
				</g>
			)}
			<rect x={x0} y={-t / 2} width={len} height={t} rx={t / 2} fill="none" stroke="rgba(0,0,0,0.25)" strokeWidth={1} />
		</g>
	);
};

/** A glossy round cell with an optional nucleus; children draw inside (in cell coordinates). */
export const Cell = ({id, x, y, r, color = '#bfe0f5', nucleus = true, nucleusColor = '#7fb3dc', opacity = 1, scale = 1, children}: {id: string; x: number; y: number; r: number; color?: string; nucleus?: boolean; nucleusColor?: string; opacity?: number; scale?: number; children?: ReactNode}) => (
	<g opacity={opacity} transform={`translate(${x},${y}) scale(${scale})`}>
		<defs>
			<radialGradient id={`${id}-cell`} cx="38%" cy="32%" r="72%">
				<stop offset="0%" stopColor="#ffffff" stopOpacity={0.95} />
				<stop offset="35%" stopColor={color} stopOpacity={0.85} />
				<stop offset="100%" stopColor={shadeHex(color, -0.18)} stopOpacity={0.95} />
			</radialGradient>
		</defs>
		<ellipse cx={3} cy={r * 0.92} rx={r * 0.95} ry={r * 0.22} fill="rgba(40,36,30,0.18)" />
		<circle r={r} fill={`url(#${id}-cell)`} stroke={shadeHex(color, -0.35)} strokeWidth={1.5} />
		{nucleus && <circle cx={r * 0.08} cy={r * 0.05} r={r * 0.38} fill={nucleusColor} stroke={shadeHex(nucleusColor, -0.3)} strokeWidth={1} />}
		{children}
	</g>
);

const shadeHex = (hex: string, amt: number) => {
	const n = parseInt(hex.slice(1), 16);
	const ch = (v: number) => Math.max(0, Math.min(255, Math.round(v + amt * 255)));
	return `#${((1 << 24) | (ch((n >> 16) & 255) << 16) | (ch((n >> 8) & 255) << 8) | ch(n & 255)).toString(16).slice(1)}`;
};
