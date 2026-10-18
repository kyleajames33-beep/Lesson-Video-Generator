// G02 shared pieces: the measured lesson, plates (chickens and cats on common boxes so each set aligns), the crosses
// (computed by B9's shared cross logic: an in-between map for Q1, an X-linked map with both alleles shown for Q2, the
// PKU squares for Q3), pedigrees P-Q3 and P-Q4 (checked by fitsMode), every probability on screen (computed as exact
// fractions) and small helpers. The board pieces come from G01's Biology practice board.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import lesson from '../../../../docs/production/claude-pm/lessons/g02b/measured/lesson.json';
import type {CueScene} from '../../cues';
import {INK, INK_SOFT, prog} from '../../kit';
import {PlateB} from '../bio-m5-b07/shared';
import type {PB} from '../bio-m5-b07/shared';
import {cross, fitsMode, fracStr, onlyGeno} from '../bio-m5-b09/genetics';
import type {Ped} from '../bio-m5-b09/genetics';
import {Sx, tw} from '../bio-m5-g01/board';
import {wrap} from '../bio-m5-b06b/shared';
import * as A from './assets';

export {PlateB, wrap};
export type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('G02 scene not found ' + id);
	return s;
};
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};

export const MOVES = ['1 choose the model', "2 genotypes you're sure of", '3 combine the chances'];
export const MOVES_TITLE = 'first moves:';

// ---------- plates ----------
const P = (src: string, nat: [number, number], box: [number, number, number, number]): PB => ({src, nat, box, have: A.HAVE.has(src)});
const CHICK_BOX: [number, number, number, number] = [319, 232, 1752, 1773];
const CAT_BOX: [number, number, number, number] = [223, 338, 1781, 1599];
export const PL2 = {
	black: P(A.CHICK_BLACK, [2000, 2000], CHICK_BOX),
	blue: P(A.CHICK_BLUE, [2000, 2000], CHICK_BOX),
	splash: P(A.CHICK_SPLASH, [2000, 2000], CHICK_BOX),
	tort: P(A.CAT_TORT, [2000, 2000], CAT_BOX),
	orange: P(A.CAT_ORANGE, [2000, 2000], CAT_BOX),
	catBlack: P(A.CAT_BLACK, [2000, 2000], CAT_BOX),
};
export const chickOf = (ph: string) => (ph === 'black' ? PL2.black : ph === 'blue' ? PL2.blue : PL2.splash);
export const catOf = (ph: string) => (ph === 'tortoiseshell' ? PL2.tort : ph === 'orange' ? PL2.orange : PL2.catBlack);

// ---------- Q1: Andalusian chickens (incomplete dominance) ----------
export const CB = 'C^{B}', CW = 'C^{W}';
/** In-between (incomplete dominance) phenotypes: never labelled co-dominance. */
export const inBetween = (homA: string, het: string, homB: string) => (g: string) => (g === `${CB} ${CB}` ? homA : g === `${CW} ${CW}` ? homB : het);
const CHICK = inBetween('black', 'blue', 'splashed white');
export const BLUExBLUE = cross([CB, CW], [CB, CW], [CB, CW], CHICK);
export const BLACKxWHITE = cross([CB, CB], [CW, CW], [CB, CW], CHICK);
export const P_BLUE = BLUExBLUE.share(c => c.ph === 'blue');
/** Exact product of two simple fractions n1/d1 * n2/d2. */
export const mulFrac = (a: [number, number], b: [number, number]) => fracStr(a[0] * b[0], a[1] * b[1]);
export const TWO_BLUE = mulFrac([1, 2], [1, 2]);

// ---------- Q2: tortoiseshell cats (X-linked, both alleles shown) ----------
export const XO = 'X^{O}', Xo = 'X^{o}';
const CAT = (g: string) => (g.includes('Y') ? (g.includes(XO) ? 'orange' : 'black') : g.includes(XO) && g.includes(Xo) ? 'tortoiseshell' : g.includes(XO) ? 'orange' : 'black');
/** Father (orange male) across the top, mother (tortoiseshell female) down the side. */
export const CATS = cross([XO, 'Y'], [XO, Xo], [XO, Xo, 'Y'], CAT);
export const AUTO = cross(['O', 'O'], ['O', 'o'], ['O', 'o'], g => (g === 'Oo' ? 'tortoiseshell' : g === 'OO' ? 'orange' : 'black'));

// ---------- Q3: PKU (autosomal recessive) ----------
export const PKU_SQ = cross(['P', 'p'], ['P', 'p'], ['P', 'p'], g => (g === 'pp' ? 'PKU' : 'unaffected'));
const unaffected = PKU_SQ.cells.filter(c => c.ph !== 'PKU');
export const CARRIER = fracStr(unaffected.filter(c => c.g === 'Pp').length, unaffected.length);
export const CHILD_A = fracStr(2 * 1 * 1, 3 * 1 * 4);
export const CHILD_B = PKU_SQ.frac(c => c.ph === 'PKU');
export const SLIP = mulFrac([1, 2], [1, 4]);
/** Pedigree P-Q3: the woman (II-2), her affected brother (II-1) and parents; her partner (II-3) and his affected mother (I-3). */
export const PQ3: Ped = {
	inds: [
		{id: 'I-1', sex: 'M', aff: false, col: 0}, {id: 'I-2', sex: 'F', aff: false, col: 1}, {id: 'I-3', sex: 'F', aff: true, col: 2.6}, {id: 'I-4', sex: 'M', aff: false, col: 3.6},
		{id: 'II-1', sex: 'M', aff: true, col: 0}, {id: 'II-2', sex: 'F', aff: false, col: 1.3}, {id: 'II-3', sex: 'M', aff: false, col: 3.1},
	],
	fams: [{a: 'I-1', b: 'I-2', kids: ['II-1', 'II-2']}, {a: 'I-3', b: 'I-4', kids: ['II-3']}, {a: 'II-2', b: 'II-3', kids: []}],
};
/** With the affected first child (4d). */
export const PQ3B: Ped = {inds: [...PQ3.inds, {id: 'III-1', sex: 'F', aff: true, col: 2.2}], fams: [...PQ3.fams.slice(0, 2), {a: 'II-2', b: 'II-3', kids: ['III-1']}]};
/** Autosomal letters on screen for PKU (fitsMode works in A/a). */
export const asP = (g: string | null) => (g ?? '?').replace(/A/g, 'P').replace(/a/g, 'p');

// ---------- Q4: which pattern? ----------
/**
 * Pedigree P-Q4. The narration names the married-in partner II-4, so he is drawn beside his wife II-1 at the left of
 * generation II (the numbers there read 4, 1, 2, 3), keeping the couple line clear of her brothers and sister.
 */
export const PQ4: Ped = {
	inds: [
		{id: 'I-1', sex: 'M', aff: false, col: 1}, {id: 'I-2', sex: 'F', aff: true, col: 2},
		{id: 'II-4', sex: 'M', aff: false, col: 0}, {id: 'II-1', sex: 'F', aff: true, col: 1}, {id: 'II-2', sex: 'M', aff: false, col: 2}, {id: 'II-3', sex: 'F', aff: false, col: 3},
		{id: 'III-1', sex: 'M', aff: true, col: 0}, {id: 'III-2', sex: 'F', aff: false, col: 1},
	],
	fams: [{a: 'I-1', b: 'I-2', kids: ['II-1', 'II-2', 'II-3']}, {a: 'II-4', b: 'II-1', kids: ['III-1', 'III-2']}],
};
export const AD_G = Object.fromEntries(PQ4.inds.map(p => [p.id, onlyGeno(PQ4, 'AD', p.id)]));
export const AR_SURE = ['I-1', 'II-4'].map(id => onlyGeno(PQ4, 'AR', id));

// ---------- build checks ----------
(() => {
	const must = (ok: boolean, msg: string) => { if (!ok) throw new Error('G02 check failed: ' + msg); };
	must(BLUExBLUE.phenText === '1 black : 2 blue : 1 splashed white', 'chicken ratio ' + BLUExBLUE.phenText);
	must(BLUExBLUE.frac(c => c.ph === 'blue') === '1/2' && TWO_BLUE === '1/4', 'two blue chicks');
	must(BLACKxWHITE.cells.every(c => c.ph === 'blue'), 'black x splashed white gives all blue');
	must(CATS.frac(c => !c.male && c.ph === 'tortoiseshell') === '1/4', 'tortoiseshell female of all kittens');
	must(CATS.frac(c => c.ph === 'black', CATS.sons) === '1/2', 'black sons');
	must(CATS.daughters.map(c => c.ph).sort().join() === 'orange,tortoiseshell' && CATS.sons.map(c => c.ph).sort().join() === 'black,orange', 'cat boxes');
	must(AUTO.frac(c => c.ph === 'tortoiseshell') === '1/2', 'autosomal slip');
	must(fitsMode(PQ3, 'AR').fits && !fitsMode(PQ3, 'AD').fits && !fitsMode(PQ3, 'XR').fits, 'P-Q3 is autosomal recessive only');
	must(['I-1', 'I-2', 'II-3'].every(id => onlyGeno(PQ3, 'AR', id) === 'Aa') && onlyGeno(PQ3, 'AR', 'I-3') === 'aa' && onlyGeno(PQ3, 'AR', 'II-1') === 'aa', 'P-Q3 certain genotypes');
	must(onlyGeno(PQ3, 'AR', 'II-2') === null && [...fitsMode(PQ3, 'AR').possible['II-2']].sort().join() === 'AA,Aa', 'the woman is AA or Aa');
	must(CARRIER === '2/3' && CHILD_A === '1/6' && CHILD_B === '1/4' && SLIP === '1/8', 'PKU probabilities');
	must(onlyGeno(PQ3B, 'AR', 'II-2') === 'Aa', 'an affected child proves she is a carrier');
	must(fitsMode(PQ4, 'AD').fits && fitsMode(PQ4, 'AR').fits && !fitsMode(PQ4, 'XR').fits, 'P-Q4 fits AD and AR, not XR');
	must(AR_SURE.every(g => g === 'Aa'), 'recessive needs I-1 and II-4 to be carriers');
	must(AD_G['I-2'] === 'Aa' && AD_G['II-1'] === 'Aa' && AD_G['III-1'] === 'Aa' && ['I-1', 'II-2', 'II-3', 'II-4', 'III-2'].every(id => AD_G[id] === 'aa'), 'dominant genotypes');
})();

// ---------- small helpers ----------
/** The demands list (question cards): each demand wraps to the width and writes on at its cue, with an answer box. */
export const Demands: React.FC<{x: number; y: number; w: number; items: {text: string; at: number; box?: boolean}[]; size?: number; lh?: number; gap?: number}> = ({x, y, w, items, size = 30, lh = 40, gap = 86}) => {
	const f = useCurrentFrame();
	let yy = y;
	return (
		<g>
			{items.map((it, i) => {
				const lines = wrap(it.text, size, w);
				const y0 = yy;
				yy += lines.length * lh + (it.box === false ? 18 : gap);
				const bo = prog(f, it.at + 8, 12);
				return (
					<g key={i}>
						{lines.map((l, k) => <Sx key={k} x={x} y={y0 + k * lh} text={l} size={size} color={INK} weight={700} at={it.at + k * 3} />)}
						{it.box === false || bo <= 0.01 ? null : <rect x={x} y={y0 + (lines.length - 1) * lh + 16} width={w} height={gap - 30} rx={12} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="10 7" opacity={bo} />}
					</g>
				);
			})}
		</g>
	);
};
/** Multi-line answer text (first line ticked as a model line elsewhere). */
export const Lines: React.FC<{x: number; y: number; lines: string[]; at: number; size?: number; lh?: number; color?: string; step?: number}> = ({x, y, lines, at, size = 30, lh = 40, color = INK, step = 8}) => (
	<>{lines.map((l, i) => <Sx key={i} x={x} y={y + i * lh} text={l} size={size} color={color} weight={600} at={at + i * step} />)}</>
);
export const textW = tw;
void INK;
