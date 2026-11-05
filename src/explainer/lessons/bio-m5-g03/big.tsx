// G03 (Biology) quality fix, 6 Nov 2026: painted plates for the repair, the homologous pair, body cells and the
// health records (all already in public/assets/biology), allele beads placed beside the painted chromosomes (never
// over them), a letters-only Hardy-Weinberg Punnett square (HSC style: A and a, with p and q on the gametes) and a
// framed answer box. New parts only; shared.tsx keeps its exports.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, CARD, EDGE, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, P, TEAL, clamp01, prog} from './shared';
import type {PB} from '../bio-m5-b07/shared';
import {pbPt} from '../bio-m5-b07/shared';

const B = 'assets/biology/';
export const PAIR = B + 'cd-homologous-pair-loci-v1.png';
export const CELL = B + 'b6a-animal-cell-v1.png';
export const HELIX = B + 'y11-dna-helix-v1.png';
export const ENZ = B + 'y11-enzyme-ligase-v1.png';
export const FILES = B + 'm8-hospital-case-files-v1.png';
export const BIG_ASSETS = [PAIR, CELL, HELIX, ENZ, FILES];
const HAVE_BIG = new Set(BIG_ASSETS);
/** Natural sizes and alpha boxes (alpha > 20) measured 6 Nov from the files. */
export const PLB = {
	pair: P(PAIR, [2000, 2000], [105, 113, 1895, 1854], HAVE_BIG),
	cell: P(CELL, [1986, 1992], [165, 161, 1827, 1791], HAVE_BIG),
	helix: P(HELIX, [1400, 2000], [434, 160, 965, 1840], HAVE_BIG),
	enz: P(ENZ, [800, 800], [98, 72, 701, 728], HAVE_BIG),
	files: P(FILES, [2000, 2000], [199, 274, 1800, 1724], HAVE_BIG),
};
/** Pair plate: the lower dark band (same locus on both homologues), read off the plate at natural pixels. */
export const PAIR_LOCUS = {y: 1433, pinkOut: 470, tealOut: 1530};
export const platePt = (p: PB, cx: number, cy: number, w: number, u: number, v: number) => pbPt(p, cx, cy, w)(u, v);

/** An allele bead: working (amber), faulty (grey with a cross) or lost (dark, dashed edge). */
export const Bead: React.FC<{x: number; y: number; r?: number; kind: 'working' | 'faulty' | 'lost'; o?: number; glow?: number}> = ({x, y, r = 24, kind, o = 1, glow = 0}) => {
	if (o <= 0.01) return null;
	const fill = kind === 'working' ? AMBER : kind === 'faulty' ? '#a9aeb3' : '#4a4540';
	return (
		<g opacity={o}>
			{glow > 0.01 ? <circle cx={x} cy={y} r={r * 1.9} fill={AMBER} opacity={0.35 * glow} /> : null}
			<circle cx={x} cy={y} r={r} fill={fill} stroke={kind === 'working' ? AMBER_INK : INK} strokeWidth={3} strokeDasharray={kind === 'lost' ? '6 5' : undefined} />
			{kind === 'faulty' ? <g stroke={INK} strokeWidth={4} strokeLinecap="round"><line x1={x - r * 0.5} y1={y - r * 0.5} x2={x + r * 0.5} y2={y + r * 0.5} /><line x1={x + r * 0.5} y1={y - r * 0.5} x2={x - r * 0.5} y2={y + r * 0.5} /></g> : null}
		</g>
	);
};

const T: React.FC<{x: number; y: number; t: string; size: number; color?: string; anchor?: 'start' | 'middle' | 'end'; weight?: number; o?: number}> = ({x, y, t, size, color = INK, anchor = 'middle', weight = 800, o = 1}) => (
	<text x={x} y={y} textAnchor={anchor} opacity={o} style={{fontFamily: FONT_DISPLAY, fontWeight: weight, fontSize: size}} fill={color}>{t}</text>
);

/**
 * Letters-only Hardy-Weinberg Punnett square. Gametes A (p, teal) and a (q, amber) on the top (father) and the side
 * (mother); cells AA, Aa, Aa, aa with their products. `ringAt` rings the two carrier cells one after the other.
 */
export const HWSquare: React.FC<{x: number; y: number; c?: number; at: number; ringAt?: [number, number]; o?: number; products?: boolean; lit?: number}> = ({x, y, c = 170, at, ringAt, o = 1, products = true, lit = 0}) => {
	const f = useCurrentFrame();
	const p0 = prog(f, at, 14) * o;
	if (p0 <= 0.01) return null;
	const hx = x + 110, hy = y + 70; // grid origin (header column 110 wide, header row 70 tall)
	const g = [['A', 'p'], ['a', 'q']] as const;
	const col = (k: number) => (k ? AMBER_INK : TEAL);
	const cell = (r: number, k: number) => ({geno: (g[r][0] + g[k][0]).split('').sort((m, n) => (m === 'A' ? -1 : n === 'A' ? 1 : 0)).join(''), prod: r === k ? (r ? 'q²' : 'p²') : 'pq'});
	const ring = (r: number, k: number) => {
		if (!ringAt) return 0;
		if (r === 1 && k === 0) return prog(f, ringAt[0], 10);
		if (r === 0 && k === 1) return prog(f, ringAt[1], 10);
		return 0;
	};
	return (
		<g opacity={p0}>
			<T x={hx + c} y={y + 6} t="father's gametes" size={28} color={INK_SOFT} weight={600} />
			<text x={x + 30} y={hy + c} textAnchor="middle" transform={`rotate(-90 ${x + 30} ${hy + c})`} style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 26}} fill={INK_SOFT}>mother's gametes</text>
			{[0, 1].map(k => (
				<g key={'h' + k} opacity={prog(f, at + 4 + k * 4, 10)}>
					<T x={hx + c * k + c / 2} y={hy - 12} t={g[k][0]} size={52} color={col(k)} />
					<T x={hx + c * k + c / 2 + 40} y={hy - 12} t={`(${g[k][1]})`} size={28} color={col(k)} weight={700} anchor="start" />
					<T x={x + 84} y={hy + c * k + c / 2 + 18} t={g[k][0]} size={52} color={col(k)} />
					<T x={x + 84} y={hy + c * k + c / 2 + 52} t={`(${g[k][1]})`} size={24} color={col(k)} weight={700} />
				</g>
			))}
			{[0, 1].map(r => [0, 1].map(k => {
				const cc = cell(r, k);
				const rg = ring(r, k);
				const carrier = r !== k;
				const on = carrier && clamp01(lit) > 0.5;
				return (
					<g key={`${r}${k}`} opacity={prog(f, at + 12 + (r * 2 + k) * 5, 10)}>
						<rect x={hx + c * k} y={hy + c * r} width={c} height={c} fill={on || rg > 0.5 ? '#fff3d9' : CARD} stroke={INK} strokeWidth={3} />
						<T x={hx + c * k + c / 2} y={hy + c * r + c / 2 + 8} t={cc.geno} size={60} color={INK} />
						{products ? <T x={hx + c * k + c / 2} y={hy + c * r + c / 2 + 52} t={cc.prod} size={32} color={carrier ? AMBER_INK : INK_SOFT} weight={700} /> : null}
						{rg > 0.01 ? <rect x={hx + c * k + 8} y={hy + c * r + 8} width={c - 16} height={c - 16} rx={18} fill="none" stroke={AMBER} strokeWidth={6} opacity={rg} /> : null}
					</g>
				);
			}))}
		</g>
	);
};

/** A framed answer (the g01 answer box): a thick amber frame around the result. */
export const AnswerFrame: React.FC<{x: number; y: number; w: number; h?: number; at: number; text: string; size?: number; sub?: string}> = ({x, y, w, h = 110, at, text, size = 64, sub}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			<rect x={x} y={y} width={w} height={h} rx={16} fill="#fffdf8" stroke={INK} strokeWidth={5} />
			<T x={x + 30} y={y + h / 2 + size * 0.36} t={text} size={size} color={INK} anchor="start" />
			{sub ? <T x={x + w + 24} y={y + h / 2 + 12} t={sub} size={32} color={INK_SOFT} weight={600} anchor="start" /> : null}
		</g>
	);
};

/** A task strip (the g01 task line): a pale band across the top of the working area. */
export const TaskStrip: React.FC<{x: number; y: number; w: number; at: number; text: string; size?: number}> = ({x, y, w, at, text, size = 44}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			<rect x={x} y={y} width={w} height={size * 1.7} rx={14} fill="#f6efe1" stroke={EDGE} strokeWidth={2.5} />
			<T x={x + 24} y={y + size * 1.7 / 2 + size * 0.34} t="TASK" size={22} color={INK_SOFT} weight={800} anchor="start" />
			<text x={x + 100} y={y + size * 1.7 / 2 + size * 0.34} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: size}} fill={INK}>{text}</text>
		</g>
	);
};
