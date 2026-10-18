// P02 (Biology practical, lesson key bp02) shared pieces: the measured lesson, plates (dashed stand-ins while brief 71
// is pending), the constant board (question, method step rail, bench and card zone from P01, colour key), the model
// data with build checks (gamete types with and without a crossover, the example tallies, pooled class data and the
// attempt's chance), and the coded kit: vertical pop-bead chains with allele stickers, centromere pieces, string loops,
// gamete cards (face up and face down), a die with code pips, and an observed-against-expected column chart.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import lesson from '../../../../docs/production/claude-pm/lessons/bp02/measured/lesson.json';
import {sceneOf} from '../bio-m5-b06b/shared';
import {AMBER, AMBER_INK, CARD, EDGE, FONT_DISPLAY, GREYT, INK, INK_SOFT, P, PlateB, clamp01, prog} from '../bio-m5-b13/shared';
import * as A from './assets';

export * from '../bio-m5-b13/shared';
export {Bench, BENCH, CZ, PenLink, fadeIO, AC, AssessFrame, AcText, acCell} from '../bio-m5-p01/shared';
export {Tally, tallyW} from '../bio-m5-p03/shared';
export const S = sceneOf(lesson as unknown as {scenes: unknown[]});
export const hold = (id: string) => S(id).responseHold as {startFrame: number; endFrame: number};

// ---------- plates ----------
export const PLP = {
	chrPink: P(A.CHR_PINK, [2000, 2000], [602, 183, 1402, 1838], A.HAVE),
	chrTeal: P(A.CHR_TEAL, [2000, 2000], [601, 182, 1403, 1838], A.HAVE),
	cell: P(A.CELL, [2000, 2000], [262, 259, 1739, 1697], A.HAVE),
	peaRound: P(A.PEA_ROUND, [2000, 2000], [383, 383, 1618, 1619], A.HAVE),
	peaWrinkled: P(A.PEA_WRINKLED, [2000, 2000], [414, 362, 1634, 1655], A.HAVE),
	beadPlum: P(A.BEAD_PLUM, [2000, 2000], [200, 377, 1800, 1622], A.HAVE),
	beadTeal: P(A.BEAD_TEAL, [2000, 2000], [200, 375, 1800, 1624], A.HAVE),
	centromere: P(A.CENTROMERE, [2000, 2000], [490, 690, 1510, 1309], A.HAVE),
	loop: P(A.LOOP, [2048, 2048], [260, 264, 1841, 1756], A.HAVE),
	stickers: P(A.STICKERS, [2048, 2048], [190, 315, 1860, 1766], A.HAVE),
	cards: P(A.CARDS, [2048, 2048], [286, 428, 1759, 1602], A.HAVE),
	cardBack: P(A.CARD_BACK, [2048, 2048], [343, 524, 1833, 1545], A.HAVE),
	die: P(A.DIE, [2048, 2048], [430, 412, 1669, 1725], A.HAVE),
	clipboard: P(A.CLIPBOARD, [2000, 2000], [283, 160, 1716, 1840], A.HAVE),
};
/** The die plate's blank top face (natural pixels, read off the plate): centre and the two half-edge vectors. */
export const DIE_FACE = {c: [1050, 752] as [number, number], e1: [305, 160] as [number, number], e2: [-285, 160] as [number, number]};

// ---------- model data (computed and checked) ----------
export type Col = 'P' | 'T';
export const COLS: Record<Col, {fill: string; line: string}> = {P: {fill: '#b8649f', line: '#6e2a63'}, T: {fill: '#3ea698', line: '#1d6b62'}};
/** Gamete types: long-chromosome alleles (flower colour, height) and short (seed shape). */
export const LONG: Record<Col, [string, string]> = {P: ['P', 'T'], T: ['p', 't']};
export const SHORT: Record<Col, string> = {P: 'R', T: 'r'};
const combos = (longs: string[][]) => longs.flatMap(l => ['R', 'r'].map(s => `${l[0]} ${l[1]} ${s}`));
export const UNMIXED = combos([LONG.P, LONG.T]);
export const MIXED = combos([[LONG.P[0], LONG.T[1]], [LONG.T[0], LONG.P[1]]]);
export const TALLY = {RR: 3, Rr: 9, rr: 4};
export const N_FERT = TALLY.RR + TALLY.Rr + TALLY.rr;
export const EXPECT = {RR: N_FERT / 4, Rr: N_FERT / 2, rr: N_FERT / 4};
export const POOLED = {RR: 41, Rr: 79, rr: 40};
export const N_POOL = POOLED.RR + POOLED.Rr + POOLED.rr;
export const P_NONE4 = (3 / 4) ** 4;
(() => {
	const must = (ok: boolean, m: string) => { if (!ok) throw new Error('P02 (Biology) check failed: ' + m); };
	must(UNMIXED.join() === 'P T R,P T r,p t R,p t r' && UNMIXED.length === 2 ** 2, 'unmixed gametes = 2^n');
	must(MIXED.join() === 'P t R,P t r,p T R,p T r', 'mixed gametes');
	must(N_FERT === 16 && EXPECT.RR === 4 && EXPECT.Rr === 8 && EXPECT.rr === 4, 'expected 4, 8, 4');
	must(N_POOL === 160 && N_POOL / 4 === 40 && N_POOL / 2 === 80, 'pooled 160');
	must(Math.abs(P_NONE4 - 0.316) < 0.001 && P_NONE4.toFixed(2) === '0.32', 'attempt chance');
	must(2 ** 23 === 8388608, '2^23');
})();

// ---------- board ----------
export const QUESTION = 'Can a model predict offspring genotypes?';
export const STEPS = ['1. Build', '2. Copy', '3. Cross over', '4. Line up, divide', '5. Record', '6. Fertilise', '7. Mutate'];
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
export const KEY2: {k: 'P' | 'T' | 'w' | 'a'; t: string}[] = [{k: 'P', t: "parent's mother"}, {k: 'T', t: "parent's father"}, {k: 'w', t: 'allele'}, {k: 'a', t: 'new allele'}];
export const ColourKey2: React.FC<{at?: number[]; hot?: number[]; o?: number}> = ({at, hot, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const first = at ? Math.min(...at) : -100;
	let x = 110;
	return (
		<g opacity={o * prog(f, first, 12)}>
			<rect x={80} y={950} width={1160} height={84} rx={20} fill={CARD} stroke={EDGE} strokeWidth={2.5} />
			<text x={102} y={972} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 17}} fill={INK_SOFT}>KEY</text>
			{KEY2.map((k, i) => {
				const x0 = x + 44;
				x += 44 + k.t.length * 13.6 + 90;
				const ap = at ? prog(f, at[i], 12) : 1;
				const h = hot ? hot[i] ?? 0 : 0;
				return (
					<g key={k.t} opacity={ap}>
						{h > 0.01 ? <rect x={x0 - 14} y={968} width={k.t.length * 13.6 + 90} height={52} rx={14} fill={AMBER} opacity={0.3 * h} /> : null}
						{k.k === 'P' || k.k === 'T' ? <Bead x={x0 + 16} y={994} c={k.k} r={15} /> : <Sticker x={x0 + 16} y={994} r={14} t="" amber={k.k === 'a' ? 1 : 0} />}
						<text x={x0 + 44} y={1003} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 24}} fill={INK}>{k.k === 'P' ? 'plum: ' : k.k === 'T' ? 'teal: ' : ''}{k.t}</text>
					</g>
				);
			})}
		</g>
	);
};

// ---------- beads, stickers, chains ----------
export const R = 15, PIT = 2.2 * R;
export const NL = 9, NS = 5, CEN_L = 4, CEN_S = 3, CUT = 6;
export const STK_L: [number, number] = [1, 7];
export const STK_S = 1;
/** One pop-bead (peg pointing down in a vertical chain). */
export const Bead: React.FC<{x: number; y: number; c: Col; r?: number; o?: number; ring?: number}> = ({x, y, c, r = R, o = 1, ring = 0}) => {
	if (o <= 0.01) return null;
	const pb = c === 'P' ? PLP.beadPlum : PLP.beadTeal;
	if (pb.have) return <g>{ring > 0.01 ? <circle cx={x} cy={y} r={r + 9} fill={AMBER} opacity={0.6 * ring} /> : null}<PlateB p={pb} cx={x} cy={y + r * 0.1} w={(2.2 * r * 1600) / 1455} rot={90} o={o} /></g>;
	const col = COLS[c];
	return (
		<g opacity={o}>
			{ring > 0.01 ? <circle cx={x} cy={y} r={r + 9} fill={AMBER} opacity={0.6 * ring} /> : null}
			<rect x={x - r * 0.28} y={y + r * 0.7} width={r * 0.56} height={r * 0.55} rx={r * 0.18} fill={col.fill} stroke={col.line} strokeWidth={1.8} />
			<circle cx={x} cy={y} r={r} fill={col.fill} stroke={col.line} strokeWidth={2.2} />
			<circle cx={x - r * 0.32} cy={y - r * 0.34} r={r * 0.26} fill="#fff" opacity={0.4} />
		</g>
	);
};
/** A round sticker (white, or amber for a new allele) with its letter (screen only). */
export const Sticker: React.FC<{x: number; y: number; t: string; r?: number; o?: number; amber?: number; ring?: number}> = ({x, y, t, r = R * 0.95, o = 1, amber = 0, ring = 0}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		{ring > 0.01 ? <circle cx={x} cy={y} r={r + 10} fill="none" stroke={AMBER} strokeWidth={5} opacity={ring} /> : null}
		<circle cx={x} cy={y} r={r} fill={amber > 0.5 ? AMBER : '#fffdf8'} stroke={INK} strokeWidth={2} />
		{t ? <text x={x} y={y + r * 0.42} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: r * 1.25}} fill={INK}>{t}</text> : null}
	</g>
));
export type ChromatidSpec = {cols: Col[]; stk: Record<number, string>; amber?: number};
/** A chromatid spec: kind L (9 beads, two genes) or S (5 beads, one gene), one colour, with its alleles. */
export const chromatid = (kind: 'L' | 'S', c: Col): ChromatidSpec => kind === 'L'
	? {cols: Array(NL).fill(c), stk: {[STK_L[0]]: LONG[c][0], [STK_L[1]]: LONG[c][1]}}
	: {cols: Array(NS).fill(c), stk: {[STK_S]: SHORT[c]}};
/** Swap the end pieces (beads CUT and below) of two long chromatids. */
export const swapEnds = (a: ChromatidSpec, b: ChromatidSpec): [ChromatidSpec, ChromatidSpec] => {
	const ca = a.cols.map((c, i) => (i >= CUT ? b.cols[i] : c));
	const cb = b.cols.map((c, i) => (i >= CUT ? a.cols[i] : c));
	const sa = {...a.stk, [STK_L[1]]: b.stk[STK_L[1]]};
	const sb = {...b.stk, [STK_L[1]]: a.stk[STK_L[1]]};
	return [{cols: ca, stk: sa}, {cols: cb, stk: sb}];
};
export const chainH = (n: number) => (n - 1) * PIT;
/**
 * A vertical bead chain, top bead centre at (x, y). `grow` 0..1 builds it bead by bead; `endDx`/`endDy` move the end
 * piece (beads from CUT down); `stkO` shows the stickers; `ringAll` rings the whole chain.
 */
export const Chain: React.FC<{x: number; y: number; spec: ChromatidSpec; r?: number; o?: number; grow?: number; endDx?: number; endDy?: number; stkO?: number | ((i: number) => number); ringAll?: number; amberRing?: number; stkRing?: number}> = ({x, y, spec, r = R, o = 1, grow = 1, endDx = 0, endDy = 0, stkO = 1, ringAll = 0, amberRing = 0, stkRing = 0}) => {
	if (o <= 0.01) return null;
	const n = spec.cols.length;
	const pit = 2.2 * r;
	const shown = Math.ceil(clamp01(grow) * n - 1e-6);
	const pos = (i: number): [number, number] => [x + (i >= CUT && n === NL ? endDx : 0), y + i * pit + (i >= CUT && n === NL ? endDy : 0)];
	return (
		<g opacity={o}>
			{ringAll > 0.01 ? <rect x={x - r - 10} y={y - r - 10} width={2 * r + 20} height={chainH(n) * (r / R) + 2 * r + 20} rx={r + 10} fill="none" stroke={AMBER} strokeWidth={5} opacity={ringAll} /> : null}
			{spec.cols.map((c, i) => (i < shown ? <Bead key={i} x={pos(i)[0]} y={pos(i)[1]} c={c} r={r} /> : null))}
			{Object.entries(spec.stk).map(([k, t]) => {
				const i = Number(k);
				const so = typeof stkO === 'function' ? stkO(i) : stkO;
				return i < shown ? <Sticker key={'s' + k} x={pos(i)[0]} y={pos(i)[1]} t={t} r={r * 0.95} o={so} amber={spec.amber === i ? 1 : 0} ring={spec.amber === i ? amberRing : stkRing} /> : null;
			})}
		</g>
	);
};
/** Coded centromere piece joining two sister chains (plate when delivered). */
export const Centromere: React.FC<{x: number; y: number; w: number; o?: number; ring?: number}> = ({x, y, w, o = 1, ring = 0}) => {
	if (o <= 0.01) return null;
	if (PLP.centromere.have) return <PlateB p={PLP.centromere} cx={x} cy={y} w={(w * 1020) / 870} o={o} />;
	return (
		<g opacity={o}>
			{ring > 0.01 ? <circle cx={x} cy={y} r={w * 0.7} fill="none" stroke={AMBER} strokeWidth={5} opacity={ring} /> : null}
			<rect x={x - w / 2} y={y - 8} width={w} height={16} rx={7} fill="#cfd3d6" stroke="#6d7378" strokeWidth={2} />
		</g>
	);
};
export const SIS = 16;
/**
 * A chromosome: one chromatid, or two sisters (dup 0..1 slides the second out) joined by a centromere piece at the
 * kind's centromere bead.
 */
export const Chromo: React.FC<{x: number; y: number; a: ChromatidSpec; b?: ChromatidSpec; dup?: number; cen?: number; r?: number; o?: number; aProps?: Partial<React.ComponentProps<typeof Chain>>; bProps?: Partial<React.ComponentProps<typeof Chain>>; cenRing?: number}> = ({x, y, a, b, dup = 0, cen = 0, r = R, o = 1, aProps = {}, bProps = {}, cenRing = 0}) => {
	if (o <= 0.01) return null;
	const k = r / R;
	const d = SIS * k * dup;
	const ci = a.cols.length === NL ? CEN_L : CEN_S;
	return (
		<g opacity={o}>
			{b && dup > 0.01 ? <Chain x={x + d} y={y} spec={b} r={r} {...bProps} /> : null}
			<Chain x={x - d} y={y} spec={a} r={r} {...aProps} />
			<Centromere x={x} y={y + ci * 2.2 * r} w={2 * SIS * k + 4} o={cen} ring={cenRing} />
		</g>
	);
};
/** A cell loop of string (coded: the round loop plate cannot stretch to the tall gamete loops). `p` draws it on. */
export const Loop: React.FC<{x: number; y: number; rx: number; ry: number; o?: number; p?: number; hot?: number}> = ({x, y, rx, ry, o = 1, p = 1, hot = 0}) => {
	if (o <= 0.01 || p <= 0.01) return null;
	const c = 2 * Math.PI * Math.sqrt((rx * rx + ry * ry) / 2);
	return (
		<g opacity={o}>
			{hot > 0.01 ? <ellipse cx={x} cy={y} rx={rx} ry={ry} fill="none" stroke={AMBER} strokeWidth={12} opacity={0.4 * hot} /> : null}
			<ellipse cx={x} cy={y} rx={rx} ry={ry} fill="rgba(255,253,246,0.35)" stroke="#a89d86" strokeWidth={9} strokeDasharray={`${c * p} ${c}`} strokeLinecap="round" />
			<ellipse cx={x} cy={y} rx={rx} ry={ry} fill="none" stroke="#f4efe3" strokeWidth={5} strokeDasharray={`${c * p} ${c}`} />
			<ellipse cx={x} cy={y} rx={rx} ry={ry} fill="none" stroke="#c9bfa9" strokeWidth={1.5} strokeDasharray="3 7" opacity={p} />
		</g>
	);
};
/** A gamete card: face up shows its alleles; face down shows a plain back. */
export const GCard: React.FC<{x: number; y: number; t?: string; w?: number; o?: number; rot?: number; back?: boolean; flip?: number; amber?: number; ring?: number}> = ({x, y, t = '', w = 150, o = 1, rot = 0, back = false, flip, amber = 0, ring = 0}) => {
	if (o <= 0.01) return null;
	const h = w * 0.62;
	const fl = flip ?? (back ? 0 : 1);
	const sx = Math.abs(Math.cos(Math.PI * (1 - fl)));
	const showFront = fl > 0.5;
	return (
		<g opacity={o} transform={`translate(${x},${y}) rotate(${rot}) scale(${Math.max(0.04, sx)},1)`}>
			{ring > 0.01 ? <rect x={-w / 2 - 8} y={-h / 2 - 8} width={w + 16} height={h + 16} rx={12} fill="none" stroke={AMBER} strokeWidth={5} opacity={ring} /> : null}
			<rect x={-w / 2} y={-h / 2} width={w} height={h} rx={8} fill={showFront ? '#fffdf8' : '#e9e1cf'} stroke={INK_SOFT} strokeWidth={2.5} />
			{showFront ? (
				<text x={0} y={w * 0.09} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: w * 0.22, letterSpacing: 1}} fill={INK}>{t}</text>
			) : (
				<g stroke="#cbbf9f" strokeWidth={2}>{[-1, 0, 1].map(k => <line key={k} x1={-w / 2 + 14} y1={k * h * 0.22} x2={w / 2 - 14} y2={k * h * 0.22} />)}</g>
			)}
			{amber > 0.01 && showFront ? <rect x={-w / 2} y={-h / 2} width={w} height={h} rx={8} fill="none" stroke={AMBER} strokeWidth={4} opacity={amber} /> : null}
		</g>
	);
};
const PIPS: Record<number, [number, number][]> = {1: [[0, 0]], 2: [[-1, -1], [1, 1]], 3: [[-1, -1], [0, 0], [1, 1]], 4: [[-1, -1], [1, -1], [-1, 1], [1, 1]], 5: [[-1, -1], [1, -1], [0, 0], [-1, 1], [1, 1]], 6: [[-1, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [1, 1]]};
/** The die: plate (stand-in while pending) with a coded top face showing `pips`; `tumble` 0..1 rolls it in. */
export const Die: React.FC<{x: number; y: number; w: number; pips: number; o?: number; tumble?: number; ring?: number}> = ({x, y, w, pips, o = 1, tumble = 1, ring = 0}) => {
	if (o <= 0.01) return null;
	const t = clamp01(tumble);
	const rot = (1 - t) * 540;
	const dx = (1 - t) * -160;
	const face = t < 1 ? (Math.floor(t * 9) % 6) + 1 : pips;
	const s = w * 0.42;
	return (
		<g opacity={o} transform={`translate(${x + dx},${y - Math.sin(t * Math.PI) * 40}) rotate(${rot})`}>
			{ring > 0.01 ? <rect x={-s - 16} y={-s - 16} width={2 * s + 32} height={2 * s + 32} rx={24} fill="none" stroke={AMBER} strokeWidth={5} opacity={ring} /> : null}
			{PLP.die.have ? (
				<g>
					<PlateB p={PLP.die} cx={0} cy={0} w={w} />
					<g transform={`scale(${w / (PLP.die.box[2] - PLP.die.box[0])}) translate(${-(PLP.die.box[0] + PLP.die.box[2]) / 2},${-(PLP.die.box[1] + PLP.die.box[3]) / 2})`}>
						<g transform={`matrix(${DIE_FACE.e1[0]},${DIE_FACE.e1[1]},${DIE_FACE.e2[0]},${DIE_FACE.e2[1]},${DIE_FACE.c[0]},${DIE_FACE.c[1]})`}>
							{(PIPS[face] ?? []).map(([u, v], i) => <circle key={i} cx={u * 0.52} cy={v * 0.52} r={0.15} fill="#1e1c1a" />)}
						</g>
					</g>
				</g>
			) : (
				<g>
					<rect x={-s} y={-s} width={2 * s} height={2 * s} rx={s * 0.28} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={3} strokeDasharray="9 6" />
					{(PIPS[face] ?? []).map(([u, v], i) => <circle key={i} cx={u * s * 0.5} cy={v * s * 0.5} r={s * 0.14} fill={INK} />)}
				</g>
			)}
		</g>
	);
};

// ---------- observed against expected chart ----------
export const ObsExpChart: React.FC<{x: number; y: number; w: number; h: number; obs: number[]; exp: number[]; labels: string[]; at: number; obsAt?: number; expAt?: number; max?: number; o?: number}> = ({x, y, w, h, obs, exp, labels, at, obsAt, expAt, max = 10, o = 1}) => {
	const f = useCurrentFrame();
	const ao = prog(f, at, 14) * o;
	if (ao <= 0.01) return null;
	const Y = (v: number) => y + h - (v / max) * h;
	const slot = w / labels.length;
	const bw = slot * 0.3;
	const po = prog(f, obsAt ?? at, 20), pe = prog(f, expAt ?? at, 20);
	return (
		<g opacity={ao}>
			{[0, 2, 4, 6, 8, 10].map(t => (
				<g key={t}>
					<line x1={x - 8} y1={Y(t)} x2={x} y2={Y(t)} stroke={INK} strokeWidth={2} />
					<text x={x - 14} y={Y(t) + 7} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 20}} fill={INK_SOFT}>{t}</text>
				</g>
			))}
			{labels.map((l, i) => {
				const cx = x + slot * (i + 0.5);
				return (
					<g key={l}>
						<rect x={cx - bw - 3} y={Y(exp[i] * pe)} width={bw} height={(h * exp[i] * pe) / max} fill="none" stroke={AMBER_INK} strokeWidth={3} strokeDasharray="7 5" />
						<rect x={cx + 3} y={Y(obs[i] * po)} width={bw} height={(h * obs[i] * po) / max} fill={AMBER} stroke={AMBER_INK} strokeWidth={2} />
						<text x={cx} y={y + h + 30} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 24}} fill={INK}>{l}</text>
					</g>
				);
			})}
			<line x1={x} y1={y + h} x2={x + w} y2={y + h} stroke={INK} strokeWidth={3} />
			<line x1={x} y1={y} x2={x} y2={y + h} stroke={INK} strokeWidth={3} />
			<text x={x - 50} y={y + h / 2} textAnchor="middle" transform={`rotate(-90 ${x - 50} ${y + h / 2})`} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 20}} fill={INK}>number of offspring</text>
			<text x={x + w / 2} y={y + h + 62} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 20}} fill={INK}>genotype</text>
			<rect x={x + w - 230} y={y - 30} width={22} height={18} fill="none" stroke={AMBER_INK} strokeWidth={2.5} strokeDasharray="5 4" />
			<text x={x + w - 200} y={y - 15} style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 18}} fill={INK}>expected</text>
			<rect x={x + w - 110} y={y - 30} width={22} height={18} fill={AMBER} stroke={AMBER_INK} strokeWidth={2} />
			<text x={x + w - 80} y={y - 15} style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 18}} fill={INK}>observed</text>
		</g>
	);
};
