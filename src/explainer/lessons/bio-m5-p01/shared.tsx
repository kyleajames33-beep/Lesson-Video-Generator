// P01 (Biology practical, lesson key bp01) shared pieces: the measured lesson, plates (dashed stand-ins while brief 71
// is pending), the constant board (question, method step rail, bench, card zone, colour key), the model sequence with
// build checks (template, mRNA, codons, anticodons and amino acids all computed), and the coded kit: paper nucleotide
// cards (B4 tab families, two or three notches), card rows with tape, hydrogen-bond dots, a snap burst, pencil arrows,
// pop-beads, the tRNA card and paper ribosome overlays, a mini ladder icon, a codon chart excerpt and the assessment
// card. B13's shared chain (Heading, Overlay, Sx, chips, MistakeChip, Countdown and the rest) is reused.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import lesson from '../../../../docs/production/claude-pm/lessons/bp01/measured/lesson.json';
import {sceneOf} from '../bio-m5-b06b/shared';
import {complementDNA, complementRNA} from '../bio-m5-b06b/shared';
import {anticodonOf, codonToAA} from '../bio-m5-b06c/shared';
import {ORIG, NEWC, mix, pulse} from '../bio-m5-b04/dna';
import {AMBER, AMBER_INK, CARD, DrawPath, EDGE, FONT_DISPLAY, GREYT, INK, INK_SOFT, P, PlateB, Sx, TEAL, clamp01, lerp, pbPt, prog, rng} from '../bio-m5-b13/shared';
import type {PB} from '../bio-m5-b13/shared';
import * as A from './assets';

export * from '../bio-m5-b13/shared';
export {ORIG, NEWC, mix, pulse};
export const S = sceneOf(lesson as unknown as {scenes: unknown[]});
export const hold = (id: string) => S(id).responseHold as {startFrame: number; endFrame: number};

// ---------- plates (alpha boxes and anchor points from brief 71 provenance) ----------
export const PLP = {
	helix: P(A.HELIX, [2000, 2000], [619, 154, 1481, 1846], A.HAVE),
	riboReal: P(A.RIBO_REAL, [2000, 2000], [296, 349, 1722, 1673], A.HAVE),
	chromo: P(A.CHROMO, [2000, 2000], [603, 184, 1399, 1836], A.HAVE),
	sheets: P(A.SHEETS, [2000, 2000], [160, 299, 1840, 1701], A.HAVE),
	scissors: P(A.SCISSORS, [2000, 2000], [202, 160, 1798, 1840], A.HAVE),
	tape: P(A.TAPE, [2000, 2000], [160, 202, 1840, 1798], A.HAVE),
	pencil: P(A.PENCIL, [2000, 2000], [160, 214, 1840, 1786], A.HAVE),
	pile: P(A.PILE, [2000, 2000], [160, 473, 1840, 1526], A.HAVE),
	ribo: P(A.PAPER_RIBO, [2000, 2000], [160, 243, 1840, 1757], A.HAVE),
	trna: P(A.TRNA_CARD, [2000, 2000], [343, 160, 1657, 1840], A.HAVE),
	clipboard: P(A.CLIPBOARD, [2000, 2000], [283, 160, 1716, 1840], A.HAVE),
};
export const RIBO_WINDOW: [number, number, number, number] = [580, 880, 1450, 1070];
export const TRNA_TABS: [number, number][] = [[540, 1710], [1000, 1710], [1460, 1710]];
export const TRNA_CUP: [number, number] = [1000, 300];

// ---------- the model sequence (computed and checked) ----------
export const CODING = 'ATGGCATTTTGA';
/** Template strand written left to right under the coding strand (so it reads 3' to 5'). */
export const TEMPLATE = complementDNA(CODING);
export const MRNA = complementRNA(TEMPLATE);
export const CODONS = [0, 1, 2, 3].map(k => MRNA.slice(3 * k, 3 * k + 3));
export const AAS = CODONS.map(codonToAA);
export const ANTIS = CODONS.slice(0, 3).map(anticodonOf);
export const AA_NAME: Record<string, string> = {Met: 'methionine', Ala: 'alanine', Phe: 'phenylalanine'};
/** Scene 9 flash: the template card opposite the first base of codon 2. */
export const FLASH_I = 3;
(() => {
	const must = (ok: boolean, m: string) => { if (!ok) throw new Error('P01 (Biology) check failed: ' + m); };
	must(TEMPLATE === 'TACCGTAAAACT', 'template');
	must(MRNA === CODING.replace(/T/g, 'U') && MRNA === 'AUGGCAUUUUGA', 'mRNA');
	must(AAS.join() === 'Met,Ala,Phe,stop', 'amino acids');
	must(ANTIS.join() === 'UAC,CGU,AAA', 'anticodons');
	must(FLASH_I === 3 && TEMPLATE[FLASH_I] === 'C' && Math.floor(FLASH_I / 3) === 1, 'flash card');
})();

// ---------- board ----------
export const QUESTION = 'What does a model show, and what does it hide?';
export const STEPS = ['1. Make nucleotides', '1b. RNA, tRNA, ribosome', '2. Build', '3. Copy', '4. Transcribe', '5. Translate'];
export const Rail: React.FC<{lit: number; at?: number}> = ({lit, at = 0}) => {
	const f = useCurrentFrame();
	let x = 96;
	return (
		<g>
			{STEPS.map((s, i) => {
				const w = s.length * 13.2 + 36;
				const x0 = x;
				x += w + 12;
				const on = i === lit ? prog(f, at, 12) : 0;
				const done = i < lit;
				return (
					<g key={s}>
						<rect x={x0} y={178} width={w} height={42} rx={21} fill={on > 0.5 ? AMBER : CARD} stroke={on > 0.5 ? AMBER_INK : done ? INK_SOFT : EDGE} strokeWidth={on > 0.5 ? 3 : 2} />
						<text x={x0 + w / 2} y={206} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 22}} fill={on > 0.5 ? INK : done ? INK_SOFT : GREYT}>{s}</text>
					</g>
				);
			})}
		</g>
	);
};
export const BENCH = {x: 70, y: 250, w: 1180, h: 680};
const GRAIN = (() => {
	const r = rng(41);
	return Array.from({length: 9}, () => ({y: BENCH.y + 30 + r() * (BENCH.h - 60), x0: BENCH.x + 30 + r() * 300, x1: BENCH.x + BENCH.w - 30 - r() * 300, b: (r() - 0.5) * 14}));
})();
/** The bench (pale wood). `p` draws it on from the left; `w` overrides its width. */
export const Bench: React.FC<{p?: number; o?: number; w?: number}> = ({p = 1, o = 1, w = BENCH.w}) => {
	if (o <= 0.01 || p <= 0.01) return null;
	return (
		<g opacity={o}>
			<rect x={BENCH.x} y={BENCH.y} width={w * clamp01(p)} height={BENCH.h} rx={26} fill="#efe3c9" stroke="rgba(110,80,40,0.16)" strokeWidth={2} />
			{GRAIN.map((g, i) => (g.x1 < BENCH.x + w * p ? <path key={i} d={`M${g.x0},${g.y} Q${(g.x0 + g.x1) / 2},${g.y + g.b} ${Math.min(g.x1, BENCH.x + w - 30)},${g.y}`} fill="none" stroke="rgba(150,110,60,0.13)" strokeWidth={3} /> : null))}
		</g>
	);
};
/** The card zone (right third). */
export const CZ = {x: 1290, y: 260, w: 570};

// ---------- colour key ----------
export type CardCol = 'blue' | 'green' | 'yellow' | 'orange' | 'white';
export const CC: Record<CardCol, {fill: string; line: string}> = {
	blue: {fill: '#c8dcf1', line: ORIG},
	green: {fill: '#cde7d2', line: NEWC},
	yellow: {fill: '#f7e6a0', line: '#b08a1a'},
	orange: {fill: '#f8c897', line: '#c46a1f'},
	white: {fill: '#fbfaf6', line: '#8a8f95'},
};
export const KEY: {c: CardCol | 'bead'; t: string}[] = [
	{c: 'blue', t: 'original DNA'}, {c: 'green', t: 'new DNA'}, {c: 'yellow', t: 'RNA'}, {c: 'orange', t: 'tRNA card'}, {c: 'bead', t: 'amino acid'},
];
/** Colour key at the lower left. `at[i]` is when row i appears (default: shown); `hot[i]` pulses a row. */
export const ColourKey: React.FC<{at?: number[]; hot?: number[]; o?: number; glow?: number}> = ({at, hot, o = 1, glow = 0}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const first = at ? Math.min(...at) : -100;
	let x = 110;
	return (
		<g opacity={o * prog(f, first, 12)}>
			<rect x={80} y={950} width={1160} height={84} rx={20} fill={CARD} stroke={glow > 0.01 ? AMBER : EDGE} strokeWidth={glow > 0.01 ? 3 + 3 * glow : 2.5} />
			<text x={102} y={972} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 17}} fill={INK_SOFT}>KEY</text>
			{KEY.map((k, i) => {
				const x0 = x + 44;
				x += 44 + k.t.length * 13.6 + 70;
				const ap = at ? prog(f, at[i], 12) : 1;
				const h = hot ? hot[i] ?? 0 : 0;
				return (
					<g key={k.t} opacity={ap}>
						{h > 0.01 ? <rect x={x0 - 12} y={968} width={k.t.length * 13.6 + 80} height={52} rx={14} fill={AMBER} opacity={0.3 * h} /> : null}
						{k.c === 'bead' ? <PopBead x={x0 + 14} y={994} r={14} c="red" /> : <rect x={x0} y={978} width={34} height={32} rx={5} fill={CC[k.c].fill} stroke={CC[k.c].line} strokeWidth={3} />}
						<text x={x0 + 46} y={1003} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 24}} fill={INK}>{k.t}</text>
					</g>
				);
			})}
		</g>
	);
};

// ---------- the paper nucleotide card ----------
export const CW = 70, BH = 54, TW = 50, TH = 46, FT = 9, CH = BH + TH, PITCH = 84;
export const bonds = (l: string) => (l === 'C' || l === 'G' ? 3 : 2);
export const isBump = (l: string) => l === 'A' || l === 'C';
const FEATX: Record<number, number[]> = {2: [11, -11], 3: [15, 0, -15]};
/** Pairing edge from right to left at y = CH, with the base's two or three notches. */
const edge = (l: string, w = TW) => {
	if (!l) return `L${-w / 2},${CH}`;
	const n = bonds(l);
	const sg = isBump(l) ? 1 : -1;
	const tri = !(l === 'C' || l === 'G');
	const hw = n === 2 ? 7 : 5.5;
	let d = '';
	for (const cx of FEATX[n]) {
		d += ` L${cx + hw},${CH}`;
		d += tri ? ` L${cx},${CH + sg * FT} L${cx - hw},${CH}` : ` C${cx + hw},${CH + sg * FT * 1.4} ${cx - hw},${CH + sg * FT * 1.4} ${cx - hw},${CH}`;
	}
	return d + ` L${-w / 2},${CH}`;
};
/** Card outline, face down, origin at the centre of the backbone (outer) edge. */
export const cardPath = (l: string) => `M${-CW / 2},0 L${CW / 2},0 L${CW / 2},${BH} L${TW / 2},${BH} L${TW / 2},${CH}${edge(l)} L${-TW / 2},${BH} L${-CW / 2},${BH} Z`;
/** Tab only (for the tRNA card tabs). */
export const tabPath = (l: string) => `M${TW / 2},${BH} L${TW / 2},${CH}${edge(l)} L${-TW / 2},${BH} Z`;
const pent = (cx: number, cy: number, r: number) => Array.from({length: 5}, (_, k) => `${(cx + Math.cos(((-90 + 72 * k) * Math.PI) / 180) * r).toFixed(1)},${(cy + Math.sin(((-90 + 72 * k) * Math.PI) / 180) * r).toFixed(1)}`).join(' ');

export type CardSpec = {o?: number; dx?: number; dy?: number; rot?: number; glow?: number; c?: CardCol | {fill: string; line: string}; ring?: number};
/**
 * One paper nucleotide card. (x, y) is the centre of its backbone edge; face 'down' hangs the tab below, 'up' points
 * it above. Pencil phosphate (circle) and sugar (pentagon) marks sit on the strip; the tab carries the base letter.
 */
export const NCard: React.FC<{x: number; y: number; face: 'down' | 'up'; l: string; marks?: boolean; letter?: boolean} & CardSpec> = ({x, y, face, l, c = 'blue', o = 1, dx = 0, dy = 0, rot = 0, glow = 0, marks = true, letter = true, ring = 0}) => {
	if (o <= 0.01) return null;
	const col = typeof c === 'string' ? CC[c] : c;
	const sy = face === 'down' ? 1 : -1;
	return (
		<g opacity={o} transform={`translate(${x + dx},${y + dy}) rotate(${rot})`}>
			<g transform={`scale(1,${sy})`}>
				{glow > 0.01 ? <path d={cardPath(l)} fill="none" stroke={AMBER} strokeWidth={12} strokeLinejoin="round" opacity={0.75 * glow} /> : null}
				<path d={cardPath(l)} fill={col.fill} stroke={col.line} strokeWidth={3} strokeLinejoin="round" />
				{marks ? (
					<g fill="none" stroke="#7b7468" strokeWidth={2}>
						<circle cx={-19} cy={BH / 2} r={7} />
						<polygon points={pent(9, BH / 2 + 1, 10)} />
					</g>
				) : null}
				{ring > 0.01 ? <path d={tabPath(l)} fill="none" stroke={AMBER_INK} strokeWidth={5} opacity={ring} /> : null}
			</g>
			{letter && l ? <text x={0} y={sy * (BH + TH * 0.42) + 10} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28}} fill={INK}>{l}</text> : null}
		</g>
	);
};
/** Tape strip across the join of two neighbouring cards. */
export const Tape: React.FC<{x: number; y: number; o?: number; glow?: number}> = ({x, y, o = 1, glow = 0}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		{glow > 0.01 ? <rect x={x - 22} y={y - 17} width={44} height={34} rx={6} fill={AMBER} opacity={0.55 * glow} /> : null}
		<path d={`M${x - 15},${y - 11} L${x + 15},${y - 11} L${x + 13},${y - 5} L${x + 16},${y} L${x + 13},${y + 5} L${x + 15},${y + 11} L${x - 15},${y + 11} L${x - 13},${y + 5} L${x - 16},${y} L${x - 13},${y - 5} Z`} fill="rgba(226,238,242,0.82)" stroke="rgba(110,135,150,0.75)" strokeWidth={1.8} />
	</g>
));

export type RowProps = {
	x0: number; y: number; face: 'down' | 'up'; letters: string; c: CardCol; pitch?: number; card?: (i: number) => CardSpec; tape?: (i: number) => number; tapeGlow?: number;
	marks?: boolean; dyOf?: (i: number) => number; o?: number;
};
/** A strand: a row of cards with tape between neighbours (tape(i) joins card i and i + 1). */
export const CRow: React.FC<RowProps> = ({x0, y, face, letters, c, pitch = PITCH, card, tape, tapeGlow = 0, marks = true, dyOf, o = 1}) => {
	if (o <= 0.01) return null;
	const n = letters.length;
	const sg = face === 'down' ? 1 : -1;
	const spec = (i: number) => (card ? card(i) : {});
	const dy = (i: number) => (dyOf ? dyOf(i) : 0) + (spec(i).dy ?? 0);
	return (
		<g opacity={o}>
			{letters.split('').map((l, i) => {
				const s = spec(i);
				return <NCard key={i} x={x0 + i * pitch} y={y} face={face} l={l} marks={marks} {...s} c={s.c ?? c} dy={dy(i)} />;
			})}
			{tape ? Array.from({length: n - 1}, (_, i) => {
				const t = tape(i);
				const oi = Math.min(spec(i).o ?? 1, spec(i + 1).o ?? 1);
				return t > 0.01 ? <Tape key={'t' + i} x={x0 + (i + 0.5) * pitch} y={y + sg * (BH / 2) + (dy(i) + dy(i + 1)) / 2} o={t * oi} glow={tapeGlow} /> : null;
			}) : null}
		</g>
	);
};
/** Hydrogen-bond dots across the pairing edge at column x (two or three, by the base). */
export const HB: React.FC<{x: number; y: number; l: string; p?: number; color?: string}> = ({x, y, l, p = 1, color = '#6b5a45'}) => (p <= 0.01 ? null : (
	<g opacity={p}>
		{FEATX[bonds(l)].map((cx, i) => <line key={i} x1={x + cx} y1={y - 9} x2={x + cx} y2={y + 9} stroke={color} strokeWidth={4.5} strokeLinecap="round" strokeDasharray="0.1 7.5" />)}
	</g>
));
/** A small burst at a seating point (the "snap"). */
export const Snap: React.FC<{x: number; y: number; at: number; color?: string}> = ({x, y, at, color = AMBER_INK}) => {
	const f = useCurrentFrame();
	const t = (f - at) / 12;
	if (t < 0 || t > 1) return null;
	return (
		<g opacity={1 - t}>
			{[-1, 1].map(s => [0.4, 0.95].map((a, j) => {
				const ang = s * a;
				const r0 = 30 + 18 * t, r1 = 44 + 26 * t;
				return <line key={s + '-' + j} x1={x + s * r0 * Math.cos(ang - (s > 0 ? 0 : Math.PI))} y1={y - r0 * Math.sin(Math.abs(ang)) * 0.6} x2={x + s * r1 * Math.cos(ang - (s > 0 ? 0 : Math.PI))} y2={y - r1 * Math.sin(Math.abs(ang)) * 0.6} stroke={color} strokeWidth={4} strokeLinecap="round" />;
			}))}
		</g>
	);
};
/** A pencil arrow along a strand, 5' to 3', with end tags. dir 1 draws left to right. */
export const StrandArrow: React.FC<{x1: number; x2: number; y: number; at: number; dir: 1 | -1; o?: number; glow?: number; size?: number}> = ({x1, x2, y, at, dir, o = 1, glow = 0, size = 30}) => {
	const f = useCurrentFrame();
	if (f < at || o <= 0.01) return null;
	const a = dir === 1 ? x1 : x2, b = dir === 1 ? x2 : x1;
	const tip = prog(f, at + 18, 6);
	return (
		<g opacity={o}>
			{glow > 0.01 ? <line x1={x1} y1={y} x2={x2} y2={y} stroke={AMBER} strokeWidth={14} strokeLinecap="round" opacity={0.5 * glow} /> : null}
			<DrawPath d={`M${a},${y} L${b},${y}`} at={at} dur={22} color="#5d5a54" width={4} />
			<path d={`M${b - dir * 18},${y - 11} L${b},${y} L${b - dir * 18},${y + 11}`} fill="none" stroke="#5d5a54" strokeWidth={4} strokeLinecap="round" opacity={tip} />
			<Sx x={a - dir * 14} y={y + 10} text="5'" size={size} color={INK} anchor={dir === 1 ? 'end' : 'start'} at={at} />
			<Sx x={b + dir * 14} y={y + 10} text="3'" size={size} color={INK} anchor={dir === 1 ? 'start' : 'end'} at={at + 18} />
		</g>
	);
};

// ---------- pop-beads (coded while the plates are pending) ----------
export const BEADS: Record<string, {fill: string; line: string; src: string}> = {
	red: {fill: '#d4503f', line: '#8e2c20', src: A.BEAD_RED},
	gold: {fill: '#e7b53c', line: '#9a7316', src: A.BEAD_GOLD},
	green: {fill: '#5fa85a', line: '#336b30', src: A.BEAD_GREEN},
};
/** One pop-bead (side view): body, peg on the right. Chain pitch is 2.2 r. */
export const PopBead: React.FC<{x: number; y: number; r?: number; c: keyof typeof BEADS | string; o?: number; ring?: number}> = ({x, y, r = 16, c, o = 1, ring = 0}) => {
	if (o <= 0.01) return null;
	const b = BEADS[c] ?? BEADS.red;
	if (A.HAVE.has(b.src)) {
		const pb = P(b.src, [2000, 2000], [200, 377, 1800, 1623], A.HAVE);
		return <g>{ring > 0.01 ? <circle cx={x} cy={y} r={r + 10} fill={AMBER} opacity={0.6 * ring} /> : null}<PlateB p={pb} cx={x + r * 0.1} cy={y} w={(2.2 * r * 1600) / 1455} o={o} /></g>;
	}
	return (
		<g opacity={o}>
			{ring > 0.01 ? <circle cx={x} cy={y} r={r + 10} fill={AMBER} opacity={0.6 * ring} /> : null}
			<rect x={x + r * 0.7} y={y - r * 0.28} width={r * 0.55} height={r * 0.56} rx={r * 0.18} fill={b.fill} stroke={b.line} strokeWidth={2} />
			<circle cx={x} cy={y} r={r} fill={b.fill} stroke={b.line} strokeWidth={2.5} />
			<circle cx={x - r * 0.32} cy={y - r * 0.34} r={r * 0.28} fill="#fff" opacity={0.45} />
		</g>
	);
};
export const beadPitch = (r: number) => 2.2 * r;

// ---------- tRNA card and paper ribosome (stand-in plus coded overlays) ----------
export const trnaPt = (cx: number, cy: number, w: number) => pbPt(PLP.trna, cx, cy, w);
export const trnaH = (w: number) => (w * (PLP.trna.box[3] - PLP.trna.box[1])) / (PLP.trna.box[2] - PLP.trna.box[0]);
/** Box width that gives tab centres exactly `pitch` apart. */
export const trnaWForPitch = (pitch: number) => (pitch / (TRNA_TABS[1][0] - TRNA_TABS[0][0])) * (PLP.trna.box[2] - PLP.trna.box[0]);
/**
 * The orange tRNA card: the painted plate (dashed stand-in while pending, with a faint coded T outline), coded base
 * tabs lettered with the anticodon (`lp` 0..1 writes the letters), and the bead in its cup.
 */
export const TrnaCard: React.FC<{cx: number; cy: number; w: number; anti?: string; lp?: number; bead?: string; beadO?: number; o?: number; tabGlow?: number; tabs?: boolean; beadDy?: number}> = ({cx, cy, w, anti = '', lp = 1, bead, beadO = 1, o = 1, tabGlow = 0, tabs = true, beadDy = 0}) => {
	if (o <= 0.01) return null;
	const pt = trnaPt(cx, cy, w);
	const k = w / (PLP.trna.box[2] - PLP.trna.box[0]);
	const pitchPx = (TRNA_TABS[1][0] - TRNA_TABS[0][0]) * k;
	const ks = pitchPx / PITCH;
	const [tl, tt] = pt(430, 1500);
	const [tr] = pt(1570, 1500);
	const [ul, ut] = pt(870, 380);
	const [ur] = pt(1130, 380);
	const [cupX, cupY] = pt(TRNA_CUP[0], TRNA_CUP[1]);
	const r = Math.max(9, 95 * k);
	return (
		<g opacity={o}>
			{PLP.trna.have ? null : (
				<path d={`M${ul},${ut} L${ur},${ut} L${ur},${tt} L${tr},${tt} L${tr},${tt + 150 * k} L${tl},${tt + 150 * k} L${tl},${tt} L${ul},${tt} Z`} fill={CC.orange.fill} fillOpacity={0.55} stroke={CC.orange.line} strokeWidth={2.5} strokeDasharray="8 6" />
			)}
			<PlateB p={PLP.trna} cx={cx} cy={cy} w={w} />
			{PLP.trna.have ? null : <path d={`M${cupX - 100 * k},${cupY - 70 * k} L${cupX + 100 * k},${cupY - 70 * k} L${cupX + 70 * k},${cupY + 80 * k} L${cupX - 70 * k},${cupY + 80 * k} Z`} fill="#fbf6ea" stroke={INK_SOFT} strokeWidth={2} />}
			{tabs ? TRNA_TABS.map(([u, v], i) => {
				const [tx, ty] = pt(u, v);
				const l = anti[i] ?? '';
				return (
					<g key={i} transform={`translate(${tx},${ty - (BH + TH / 2) * ks}) scale(${ks})`}>
						{tabGlow > 0.01 ? <path d={tabPath(l)} fill="none" stroke={AMBER} strokeWidth={12} opacity={0.7 * tabGlow} /> : null}
						<path d={tabPath(l)} fill={CC.orange.fill} stroke={CC.orange.line} strokeWidth={3} strokeLinejoin="round" />
						{l ? <text x={0} y={BH + TH / 2 + 10} textAnchor="middle" opacity={clamp01(lp * 3 - i)} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28}} fill={INK}>{l}</text> : null}
					</g>
				);
			}) : null}
			{bead ? <PopBead x={cupX} y={cupY - 20 * k + beadDy} r={r} c={bead} o={beadO} /> : null}
		</g>
	);
};
/** Screen point of the tRNA cup (where its bead sits). */
export const trnaCup = (cx: number, cy: number, w: number): [number, number] => {
	const [x, y] = trnaPt(cx, cy, w)(TRNA_CUP[0], TRNA_CUP[1]);
	const k = w / (PLP.trna.box[2] - PLP.trna.box[0]);
	return [x, y - 20 * k];
};
/** Screen y of the pairing edge of the tRNA tabs. */
export const trnaEdgeY = (cx: number, cy: number, w: number) => {
	const k = w / (PLP.trna.box[2] - PLP.trna.box[0]);
	const ks = ((TRNA_TABS[1][0] - TRNA_TABS[0][0]) * k) / PITCH;
	return trnaPt(cx, cy, w)(0, TRNA_TABS[0][1])[1] - (BH + TH / 2) * ks + CH * ks;
};
export const riboWindow = (cx: number, cy: number, w: number) => {
	const pt = pbPt(PLP.ribo, cx, cy, w);
	const [x1, y1] = pt(RIBO_WINDOW[0], RIBO_WINDOW[1]);
	const [x2, y2] = pt(RIBO_WINDOW[2], RIBO_WINDOW[3]);
	return {x1, y1, x2, y2, cx: (x1 + x2) / 2, cy: (y1 + y2) / 2, w: x2 - x1, h: y2 - y1};
};
/** The card ribosome: plate (stand-in while pending) with a coded window outline. */
export const PaperRibo: React.FC<{cx: number; cy: number; w: number; o?: number; hot?: number}> = ({cx, cy, w, o = 1, hot = 0}) => {
	if (o <= 0.01) return null;
	const win = riboWindow(cx, cy, w);
	const h = (w * (PLP.ribo.box[3] - PLP.ribo.box[1])) / (PLP.ribo.box[2] - PLP.ribo.box[0]);
	return (
		<g opacity={o}>
			{PLP.ribo.have ? null : (
				<g>
					<ellipse cx={cx} cy={cy - h * 0.2} rx={w * 0.33} ry={h * 0.26} fill="#d9c09a" fillOpacity={0.45} stroke="#9a7d55" strokeWidth={2.5} strokeDasharray="8 6" />
					<ellipse cx={cx} cy={cy + h * 0.2} rx={w * 0.45} ry={h * 0.27} fill="#c6b2df" fillOpacity={0.45} stroke="#7d68a3" strokeWidth={2.5} strokeDasharray="8 6" />
				</g>
			)}
			<PlateB p={PLP.ribo} cx={cx} cy={cy} w={w} />
			<rect x={win.x1} y={win.y1} width={win.w} height={win.h} rx={4} fill={PLP.ribo.have ? 'none' : '#fffdf8'} stroke={hot > 0.01 ? AMBER : '#6b5a45'} strokeWidth={hot > 0.01 ? 4 + 2 * hot : 2.5} />
		</g>
	);
};

// ---------- small icons and cards ----------
/** A small coded ladder icon (two backbones and rungs), colours per strand; `tw` twists it (0..1, half a turn). */
export const MiniLadder: React.FC<{x: number; y: number; w: number; h?: number; top?: string; bot?: string; o?: number; n?: number; tw?: number}> = ({x, y, w, h = 40, top = ORIG, bot = ORIG, o = 1, n = 12, tw = 0}) => {
	if (o <= 0.01) return null;
	const pts = (s: 1 | -1) => Array.from({length: 41}, (_, i) => {
		const t = i / 40;
		const yy = y + h / 2 - s * (h / 2) * Math.cos(Math.PI * tw * t * 2);
		return `${i ? 'L' : 'M'}${(x + t * w).toFixed(1)},${yy.toFixed(1)}`;
	}).join(' ');
	return (
		<g opacity={o}>
			{Array.from({length: n}, (_, i) => {
				const t = (i + 0.5) / n;
				const a = (h / 2) * Math.cos(Math.PI * tw * t * 2);
				return <line key={i} x1={x + t * w} y1={y + h / 2 - a} x2={x + t * w} y2={y + h / 2 + a} stroke="#9c8c74" strokeWidth={3} />;
			})}
			<path d={pts(1)} fill="none" stroke={top} strokeWidth={7} strokeLinecap="round" />
			<path d={pts(-1)} fill="none" stroke={bot} strokeWidth={7} strokeLinecap="round" />
		</g>
	);
};
/** A short chain of beads, left to right. */
export const BeadChain: React.FC<{x: number; y: number; cols: string[]; r?: number; o?: number; ring?: (i: number) => number}> = ({x, y, cols, r = 14, o = 1, ring}) => (o <= 0.01 ? null : (
	<g opacity={o}>{cols.map((c, i) => <PopBead key={i} x={x + i * beadPitch(r)} y={y} r={r} c={c} ring={ring ? ring(i) : 0} />)}</g>
));
export const AA_BEAD: Record<string, string> = {Met: 'red', Ala: 'gold', Phe: 'green'};
/** Codon chart excerpt (B6c style): rows of codon and amino acid; `hot(i)` rings a row. */
export const CodonMini: React.FC<{x: number; y: number; rows: string[]; at: number; hot?: (i: number) => number; w?: number; size?: number; o?: number}> = ({x, y, rows, at, hot, w = 300, size = 26, o = 1}) => {
	const f = useCurrentFrame();
	const ao = prog(f, at, 12) * o;
	if (ao <= 0.01) return null;
	const rh = size + 18;
	return (
		<g opacity={ao}>
			<rect x={x} y={y} width={w} height={rh * (rows.length + 1) + 8} rx={12} fill="#f7f1e3" stroke={EDGE} strokeWidth={2.5} />
			<text x={x + 16} y={y + rh * 0.72} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: size * 0.8}} fill={INK_SOFT}>codon chart (excerpt)</text>
			{rows.map((c, i) => {
				const aa = codonToAA(c);
				const yy = y + rh * (i + 1);
				const h = hot ? hot(i) : 0;
				return (
					<g key={c}>
						{h > 0.01 ? <rect x={x + 8} y={yy + 4} width={w - 16} height={rh - 4} rx={8} fill="none" stroke={AMBER} strokeWidth={4} opacity={h} /> : null}
						<text x={x + 22} y={yy + rh * 0.7} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, letterSpacing: 2}} fill={INK}>{c}</text>
						<text x={x + w * 0.5} y={yy + rh * 0.7} style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: size}} fill={INK}>{aa === 'stop' ? 'stop' : aa}</text>
					</g>
				);
			})}
		</g>
	);
};

// ---------- assessment card ----------
export const AC = {x: 760, y: 252, w: 1100, colW: 366, head: 74, rowH: 104};
export const AC_HEADS = ['Represents well', 'Leaves out or distorts', 'Improvement'];
/** The three-column assessment card frame. */
export const AssessFrame: React.FC<{at?: number; hotCol?: number; heads?: string[]; rows?: number}> = ({at = -100, hotCol = -1, heads = AC_HEADS, rows = 5}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	const h = AC.head + AC.rowH * rows + 30;
	return (
		<g opacity={o}>
			<rect x={AC.x} y={AC.y} width={AC.w} height={h} rx={22} fill={CARD} stroke={EDGE} strokeWidth={3} />
			<rect x={AC.x} y={AC.y} width={AC.w} height={AC.head} rx={22} fill="#efe6d4" />
			{heads.map((t, i) => (
				<g key={t}>
					{i ? <line x1={AC.x + i * AC.colW} y1={AC.y + 12} x2={AC.x + i * AC.colW} y2={AC.y + h - 12} stroke={EDGE} strokeWidth={2} /> : null}
					{i === hotCol ? <rect x={AC.x + i * AC.colW + 6} y={AC.y + 6} width={AC.colW - 12} height={AC.head - 12} rx={14} fill="none" stroke={AMBER} strokeWidth={4} /> : null}
					<text x={AC.x + i * AC.colW + AC.colW / 2} y={AC.y + 48} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 27}} fill={INK}>{t}</text>
				</g>
			))}
		</g>
	);
};
/** Top-left point of a cell (column, row) inside the assessment card. */
export const acCell = (col: number, row: number): [number, number] => [AC.x + col * AC.colW + 22, AC.y + AC.head + 18 + row * AC.rowH];
/** Two-line cell text. */
export const AcText: React.FC<{col: number; row: number; lines: string[]; at: number; color?: string; o?: number; size?: number}> = ({col, row, lines, at, color = INK, o = 1, size = 26}) => {
	const [x, y] = acCell(col, row);
	return <g opacity={o}>{lines.map((t, i) => <Sx key={i} x={x} y={y + 30 + i * (size + 8)} text={t} size={size} color={color} weight={i ? 600 : 700} at={at + i * 6} />)}</g>;
};
/** A dashed pen link (curve) from a bench point to a card point. */
export const PenLink: React.FC<{a: [number, number]; b: [number, number]; at: number; color?: string; o?: number}> = ({a, b, at, color = AMBER_INK, o = 1}) => {
	const f = useCurrentFrame();
	if (f < at || o <= 0.01) return null;
	const mx = (a[0] + b[0]) / 2, my = Math.min(a[1], b[1]) - 40;
	return (
		<g opacity={o}>
			<DrawPath d={`M${a[0]},${a[1]} Q${mx},${my} ${b[0]},${b[1]}`} at={at} dur={16} color={color} width={3} dash="8 7" />
			<circle cx={a[0]} cy={a[1]} r={6 * prog(f, at, 6)} fill={color} />
		</g>
	);
};
export const fadeIO = (f: number, at: number, out?: number, d = 12) => prog(f, at, d) * (out === undefined ? 1 : 1 - prog(f, out, d));
export const colMix = (a: CardCol, b: CardCol, t: number) => ({fill: mix(CC[a].fill, CC[b].fill, t), line: mix(CC[a].line, CC[b].line, t)});
void TEAL; void lerp; void pulse;
export type {PB};
