// B8 shared pieces: plates (via B7's PlateB), B5b's painted chromosomes with our own allele letters, the ported cross
// logic (gamete lists with or without one crossover, pairing counts, 2 to the power n, all checked at build time),
// allele beads (white; amber only for a new allele), gamete cells, the pairing grid and small coded tokens.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import lesson from '../../../../docs/production/claude-pm/lessons/b8/measured/lesson.json';
import {
	AMBER, AMBER_INK, AnswerBox, Chip, Countdown, DrawPath, Enter, FONT_DISPLAY, FONT_HAND, Fade, GREYT, GREY_INK, GreyTag, HandText, Heading, INK, INK_SOFT,
	MistakeChip, ModelLine, Overlay, PLUM, PlainArrow, PlateB, Ring, Soil, SpanBracket, Strand, Sx, Tick, chipW, clamp01, lerp, notesCheck, pbH, pbPt, prog,
	pulse, rng, scribbleEllipse, tw, wrap, GeneCard, DnaIcon,
} from '../bio-m5-b07/shared';
import type {PB} from '../bio-m5-b07/shared';
import {sceneOf} from '../bio-m5-b06b/shared';
import {Bead as B5Bead, Coin, MC, PCell, PP, TT, geomY, LP_Ab, LT_aB, COL, PLUM as CPLUM, TEALC} from '../bio-m5-b05b/shared';
import type {Col, Strand as CStrand} from '../bio-m5-b05b/shared';
import * as A from './assets';

export {
	AMBER, AMBER_INK, AnswerBox, Chip, Countdown, DrawPath, Enter, FONT_DISPLAY, FONT_HAND, Fade, GREYT, GREY_INK, GreyTag, HandText, Heading, INK, INK_SOFT,
	MistakeChip, ModelLine, Overlay, PLUM, PlainArrow, PlateB, Ring, Soil, SpanBracket, Strand, Sx, Tick, chipW, clamp01, lerp, notesCheck, pbH, pbPt, prog,
	pulse, rng, scribbleEllipse, tw, wrap, GeneCard, DnaIcon,
	B5Bead, Coin, MC, PCell, PP, TT, geomY, LP_Ab, LT_aB, COL, CPLUM, TEALC,
};
export type {PB, Col, CStrand};
export const S = sceneOf(lesson as unknown as {scenes: unknown[]});
export const vis = (f: number, at: number, out?: number, d = 12) => prog(f, at, d) * (out === undefined ? 1 : 1 - prog(f, out, d));

// ---------- the cell ----------
/**
 * Coded cell outline (owner note 18 Oct: the B5 painted cell plate looked stretched and blurry when squeezed into
 * B8's wide cells). The painted plate is a round cell with organelles, so any wide oval distorts it. This outline keeps
 * the plate's cream cytoplasm and brown membrane, stays sharp at any size and aspect, and gives the chromosomes a calm
 * ground. Same props as B5a's PCell. B8 draws Cell8; PCell stays re-exported unchanged for B9, G01 and G02.
 */
export const Cell8: React.FC<{cx: number; cy: number; rx: number; ry: number; o?: number}> = ({cx, cy, rx, ry, o = 1}) => {
	const gid = 'c8' + React.useId().replace(/[^a-zA-Z0-9]/g, '');
	if (o <= 0.01) return null;
	const n = 72;
	const ring = (k: number) => Array.from({length: n}, (_, i) => {
		const a = (i / n) * Math.PI * 2;
		const w = 1 + 0.014 * Math.sin(3 * a + 0.7) + 0.009 * Math.sin(5 * a + 2.1);
		return `${i ? 'L' : 'M'}${(cx + Math.cos(a) * rx * w * k).toFixed(1)},${(cy + Math.sin(a) * ry * w * k).toFixed(1)}`;
	}).join(' ') + ' Z';
	const sw = Math.max(2, Math.min(4.5, Math.min(rx, ry) * 0.035));
	return (
		<g opacity={o}>
			<defs>
				<radialGradient id={gid} cx="50%" cy="46%" r="60%">
					<stop offset="0%" stopColor="#fdf7ec" />
					<stop offset="78%" stopColor="#f8ecd6" />
					<stop offset="100%" stopColor="#f1dfbf" />
				</radialGradient>
			</defs>
			<path d={ring(1)} fill={`url(#${gid})`} stroke="#b07a45" strokeWidth={sw} strokeLinejoin="round" />
			{Math.min(rx, ry) > 50 ? <path d={ring(0.965)} fill="none" stroke="#d9b98f" strokeWidth={sw * 0.5} opacity={0.8} /> : null}
		</g>
	);
};

// ---------- plates ----------
const P = (src: string, nat: [number, number], box: [number, number, number, number]): PB => ({src, nat, box, have: A.HAVE.has(src)});
const POD_BOX: [number, number, number, number] = [325, 634, 1276, 966];
const HYD_BOX: [number, number, number, number] = [266, 289, 1737, 1718];
const FLY_BOX: [number, number, number, number] = [444, 390, 1560, 1618];
export const PL8 = {
	ovary: P(A.OVARY, [1600, 1600], POD_BOX),
	pod: P(A.POD, [1600, 1600], POD_BOX),
	peaYR: P(A.PEA_YR, [2000, 2000], [383, 383, 1618, 1619]),
	peaGR: P(A.PEA_GR, [2000, 2000], [400, 401, 1614, 1613]),
	peaYW: P(A.PEA_YW, [2000, 2000], [414, 362, 1634, 1655]),
	peaGW: P(A.PEA_GW, [2000, 2000], [372, 375, 1629, 1647]),
	sperm: P(A.SPERM, [2200, 1600], [264, 641, 1936, 958]),
	egg: P(A.EGG, [2000, 2000], [240, 253, 1759, 1748]),
	flyRed: P(A.FLY_RED, [2000, 2000], FLY_BOX),
	flyWhite: P(A.FLY_WHITE, [2000, 2000], FLY_BOX),
	hydBlue: P(A.HYD_BLUE, [2000, 2000], HYD_BOX),
	hydPink: P(A.HYD_PINK, [2000, 2000], HYD_BOX),
	runner: P(A.RUNNER, [1672, 941], [0, 72, 1672, 912]),
	seedling: P(A.SEEDLING, [1600, 1600], [421, 136, 1179, 1467]),
	varied: P(A.VARIED, [1900, 986], [214, 259, 1725, 756]),
	prize: P(A.PRIZE, [1800, 1500], [408, 247, 1429, 1271]),
};
/** The four seed kinds, in the hook's order, with labels-only genotype tags (no dominance taught here). */
export const SEEDS: {p: PB; tag: string}[] = [
	{p: PL8.peaYR, tag: 'Yy Rr'}, {p: PL8.peaGR, tag: 'yy Rr'}, {p: PL8.peaYW, tag: 'Yy rr'}, {p: PL8.peaGW, tag: 'yy rr'},
];
/** Ovule (and seed) centres in the aligned ovary and pod plates (natural pixels), and the style tip. */
export const OVULES: [number, number][] = [[715, 795], [855, 795], [1000, 800]];
export const TIP: [number, number] = [1262, 802];

// ---------- the ported cross logic (CrossDiagram idea: each gamete from the parent's chromosomes) ----------
/** A chromosome pair: alleles listed along each homologue, e.g. [['D','E'],['d','e']]. */
export type Pair = [string[], string[]];
const product = <T,>(lists: T[][]): T[][] => lists.reduce<T[][]>((acc, l) => acc.flatMap(a => l.map(x => [...a, x])), [[]]);
/**
 * Gametes for chromosome pairs that assort independently (each pair gives one homologue). With `cross` (pair index and
 * the gene index after which one crossover falls), the recombinant chromatids are listed separately. Labels join the
 * alleles in pair order; every gamete is equally likely within its group.
 */
export const gametes = (pairs: Pair[], cross?: {pair: number; after: number}) => {
	const parental = product(pairs.map(p => [p[0], p[1]])).map(g => g.flat().join(''));
	if (!cross) return {parental, recombinant: [] as string[]};
	const [a, b] = pairs[cross.pair];
	const k = cross.after + 1;
	const ra = [...a.slice(0, k), ...b.slice(k)], rb = [...b.slice(0, k), ...a.slice(k)];
	const lists = pairs.map((p, i) => (i === cross.pair ? [ra, rb] : [p[0], p[1]]));
	const recombinant = product(lists).map(g => g.flat().join(''));
	return {parental, recombinant};
};
export const spaced = (g: string) => g.split('').join(' ');
export const pow2 = (n: number) => 2 ** n;
export const fmt = (n: number) => Math.round(n).toLocaleString('en-AU');
// build checks
(() => {
	const yr = gametes([[['Y'], ['y']], [['R'], ['r']]]).parental;
	if (yr.join() !== 'YR,Yr,yR,yr') throw new Error('YyRr gamete check failed: ' + yr.join());
	const fly = gametes([[['D', 'E'], ['d', 'e']], [['F'], ['f']]], {pair: 0, after: 0});
	if (fly.parental.join() !== 'DEF,DEf,deF,def') throw new Error('fly parental check failed: ' + fly.parental.join());
	if (fly.recombinant.join() !== 'DeF,Def,dEF,dEf') throw new Error('fly recombinant check failed: ' + fly.recombinant.join());
	const ab = gametes([[['A', 'B'], ['a', 'b']]], {pair: 0, after: 0});
	if (ab.parental.join() !== 'AB,ab' || ab.recombinant.join() !== 'Ab,aB') throw new Error('AB crossover check failed');
	if (pow2(23) !== 8388608 || pow2(46) !== 70368744177664 || pow2(23) * pow2(23) !== pow2(46)) throw new Error('power check failed');
	if (yr.length * yr.length !== 16) throw new Error('pairing count check failed');
})();
export const GAM_YR = gametes([[['Y'], ['y']], [['R'], ['r']]]).parental; // YR, Yr, yR, yr
export const FLY = gametes([[['D', 'E'], ['d', 'e']], [['F'], ['f']]], {pair: 0, after: 0});

// ---------- allele beads and chromosomes with our letters ----------
/** White allele bead with a letter; amber fill only for a new allele (owner colour rule). */
export const ABead8: React.FC<{x: number; y: number; t: string; r?: number; o?: number; amber?: number; ring?: number}> = ({x, y, t, r = 17, o = 1, amber = 0, ring = 0}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		{ring > 0.01 ? <circle cx={x} cy={y} r={r + 9} fill="none" stroke={AMBER} strokeWidth={5} opacity={ring} /> : null}
		<circle cx={x} cy={y} r={r} fill={amber > 0.5 ? AMBER : '#fffdf8'} stroke={amber > 0.5 ? AMBER_INK : INK} strokeWidth={Math.max(2.5, r * 0.16)} />
		<text x={x} y={y + r * 0.4} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: r * (t.length <= 1 ? 1.15 : t.length === 2 ? 0.95 : 0.78)}} fill={INK}>{t}</text>
	</g>
));
/**
 * One unduplicated painted chromosome (B5b plates) in colour col, with letters: `top` at the upper gene level and
 * `bot` at the lower level (long kind), or `top` at the short kind's gene level.
 */
export const Chr: React.FC<{x: number; y: number; kind: 'L' | 'S'; col: Col | [Col, Col]; s?: number; top?: string; bot?: string; o?: number; r?: number; beadO?: number; hi?: number}> = ({x, y, kind, col, s = 1, top, bot, o = 1, r, beadO = 1, hi = 0}) => {
	if (o <= 0.01) return null;
	const st: CStrand = Array.isArray(col) ? col : [col, col];
	const rr = r ?? 17 * s;
	const ft = kind === 'L' ? 0.17 : 0.76;
	return (
		<g opacity={o}>
			<MC x={x} y={y} kind={kind} a={st} dup={0} s={s} beads={0} hiA={hi} />
			{top ? <ABead8 x={x} y={geomY(y, kind, s, ft)} t={top} r={rr} o={beadO} /> : null}
			{kind === 'L' && bot ? <ABead8 x={x} y={geomY(y, kind, s, 0.83)} t={bot} r={rr} o={beadO} /> : null}
		</g>
	);
};
export const chrBeadY = (y: number, kind: 'L' | 'S', s: number, level: 'top' | 'bot') => geomY(y, kind, s, kind === 'L' ? (level === 'top' ? 0.17 : 0.83) : 0.76);
/** A gamete cell (painted cell plate, small) holding one long and one short chromosome. */
export const GameteCell: React.FC<{x: number; y: number; rx?: number; ry?: number; long: [Col, string, string?]; short: [Col, string]; s?: number; o?: number; ring?: number}> = ({x, y, rx = 120, ry = 100, long, short, s = 0.6, o = 1, ring = 0}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<Cell8 cx={x} cy={y} rx={rx} ry={ry} />
		{ring > 0.01 ? <ellipse cx={x} cy={y} rx={rx + 12} ry={ry + 10} fill="none" stroke={AMBER} strokeWidth={6} opacity={ring} /> : null}
		<Chr x={x - rx * 0.26} y={y} kind="L" col={long[0]} s={s} top={long[1]} bot={long[2]} r={17} />
		<Chr x={x + rx * 0.3} y={y + 10} kind="S" col={short[0]} s={s} top={short[1]} r={17} />
	</g>
));
/** A plain gamete bubble with its letters (for lists). */
export const GameteDot: React.FC<{x: number; y: number; text: string; r?: number; o?: number; ring?: number; size?: number}> = ({x, y, text, r = 62, o = 1, ring = 0, size = 34}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<Cell8 cx={x} cy={y} rx={r * 1.12} ry={r * 0.86} />
		{ring > 0.01 ? <ellipse cx={x} cy={y} rx={r * 1.12 + 10} ry={r * 0.86 + 9} fill="none" stroke={AMBER} strokeWidth={5} opacity={ring} /> : null}
		<rect x={x - tw(text, size) / 2 - 12} y={y - size * 0.8} width={tw(text, size) + 24} height={size * 1.2} rx={10} fill="rgba(255,253,248,0.92)" />
		<text x={x} y={y + size * 0.3} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size}} fill={INK}>{text}</text>
	</g>
));

// ---------- source chips, cards, tokens ----------
export const SRC = ['crossing over', 'independent assortment', 'random fertilisation', 'mutation'];
/** A white card chip (deck of cards analogy); amber when it is a new card. */
export const Card: React.FC<{x: number; y: number; t: string; rot?: number; amber?: number; o?: number; s?: number}> = ({x, y, t, rot = 0, amber = 0, o = 1, s = 1}) => (o <= 0.01 ? null : (
	<g opacity={o} transform={`translate(${x},${y}) rotate(${rot}) scale(${s})`}>
		<rect x={-30} y={-42} width={60} height={84} rx={8} fill={amber > 0.5 ? AMBER : '#fffdf8'} stroke={amber > 0.5 ? AMBER_INK : INK_SOFT} strokeWidth={3} />
		<text x={0} y={12} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32}} fill={INK}>{t}</text>
	</g>
));
/** Sun and shade chips. */
export const Sun: React.FC<{x: number; y: number; r?: number; o?: number; glow?: number}> = ({x, y, r = 22, o = 1, glow = 0}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		{glow > 0.01 ? <circle cx={x} cy={y} r={r * 2.2} fill={AMBER} opacity={0.3 * glow} /> : null}
		{Array.from({length: 8}, (_, i) => { const a = (i / 8) * Math.PI * 2; return <line key={i} x1={x + Math.cos(a) * r * 1.3} y1={y + Math.sin(a) * r * 1.3} x2={x + Math.cos(a) * r * 1.75} y2={y + Math.sin(a) * r * 1.75} stroke={AMBER_INK} strokeWidth={4} strokeLinecap="round" />; })}
		<circle cx={x} cy={y} r={r} fill={AMBER} stroke={AMBER_INK} strokeWidth={3} />
	</g>
));
export const Shade: React.FC<{x: number; y: number; s?: number; o?: number; glow?: number}> = ({x, y, s = 1, o = 1, glow = 0}) => (o <= 0.01 ? null : (
	<g opacity={o} transform={`translate(${x},${y}) scale(${s})`}>
		{glow > 0.01 ? <ellipse cx={0} cy={0} rx={70} ry={46} fill="#9aa0a6" opacity={0.3 * glow} /> : null}
		<path d="M-44,14 C-60,14 -60,-12 -40,-12 C-38,-34 -6,-38 4,-20 C14,-34 44,-28 42,-6 C60,-4 58,16 40,16 Z" fill="#d6d9dd" stroke="#6d747c" strokeWidth={3.5} />
	</g>
));
/** A coded pollen grain. */
export const Pollen: React.FC<{x: number; y: number; r?: number; o?: number}> = ({x, y, r = 12, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<circle cx={x} cy={y} r={r} fill="#f1c84b" stroke="#a37a12" strokeWidth={2.5} />
		<circle cx={x - r * 0.3} cy={y - r * 0.3} r={r * 0.25} fill="#fff1b8" />
	</g>
));
void GREYT; void GREY_INK; void Chip; void Countdown; void DrawPath; void Enter; void FONT_HAND; void GreyTag; void HandText; void Heading; void MistakeChip; void ModelLine; void Overlay; void PLUM; void PlainArrow; void PlateB; void Ring; void Soil; void SpanBracket; void Strand; void Sx; void Tick; void chipW; void clamp01; void lerp; void notesCheck; void pbH; void pbPt; void pulse; void rng; void scribbleEllipse; void wrap; void GeneCard; void DnaIcon; void B5Bead; void Coin; void PP; void TT; void LP_Ab; void LT_aB; void COL; void CPLUM; void TEALC; void AnswerBox;
void useCurrentFrame;
