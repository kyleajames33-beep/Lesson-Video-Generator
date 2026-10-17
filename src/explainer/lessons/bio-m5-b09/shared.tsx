// B9 shared pieces: the measured lesson, plates (pea plants at one common scale so tall and short compare honestly,
// seeds, the "Next" plates), the pedigrees P0 to P3 and the inset trio (each checked by fitsMode at build time), the
// worked crosses (computed by the shared cross logic and checked at build time), and small helpers. The shared
// genetics kit lives in ./genetics (B10 and G02 import it too).
import React from 'react';
import lesson from '../../../../docs/production/claude-pm/lessons/b9/measured/lesson.json';
import {sceneOf} from '../bio-m5-b06b/shared';
import {PlateB, Soil, prog} from '../bio-m5-b08/shared';
import type {PB} from '../bio-m5-b08/shared';
import {binom, completeDom, cross, fitsMode, onlyGeno} from './genetics';
import type {Ped} from './genetics';
import * as A from './assets';

export * from '../bio-m5-b08/shared';
export * from './genetics';
export {PocketBlob} from '../bio-m5-b07/shared';
export const S = sceneOf(lesson as unknown as {scenes: unknown[]});
export const hold = (id: string) => S(id).responseHold as {startFrame: number; endFrame: number};

// ---------- plates ----------
const P = (src: string, nat: [number, number], box: [number, number, number, number]): PB => ({src, nat, box, have: A.HAVE.has(src)});
export const PL9 = {
	tall: P(A.PEA_TALL, [2000, 2000], [729, 203, 1277, 1781]),
	short: P(A.PEA_SHORT, [2000, 2000], [735, 619, 1303, 1452]),
	round: P(A.PEA_YR, [2000, 2000], [383, 383, 1618, 1619]),
	wrinkled: P(A.PEA_YW, [2000, 2000], [414, 362, 1634, 1655]),
	fly: P(A.FLY_WHITE, [2000, 2000], [444, 390, 1560, 1618]),
	snapPink: P(A.SNAP_PINK, [2000, 2000], [599, 215, 1410, 1785]),
};
/** Stem base (natural pixel row) of each pea plate, so both plants stand on the same soil line at the same scale. */
const BASE_V = {tall: 1500, short: 1235};
/**
 * A pea plant plate at a common scale k (screen px per natural px), its stem base on `ground`. The soil strip is drawn
 * over the roots when `soil` is set.
 */
export const PeaPlant: React.FC<{tall: boolean; x: number; ground: number; k?: number; o?: number; soil?: number; filter?: string}> = ({tall, x, ground, k = 0.2, o = 1, soil = 0, filter}) => {
	const p = tall ? PL9.tall : PL9.short;
	const w = (p.box[2] - p.box[0]) * k;
	const cy = ground - (BASE_V[tall ? 'tall' : 'short'] - (p.box[1] + p.box[3]) / 2) * k;
	return (
		<g>
			<PlateB p={p} cx={x} cy={cy} w={w} o={o} filter={filter} />
			{soil > 0 ? <Soil x={x} y={ground - 6} w={soil} h={34} o={o} /> : null}
		</g>
	);
};
/** Height of a pea plant above its stem base at scale k. */
export const peaH = (tall: boolean, k = 0.2) => (BASE_V[tall ? 'tall' : 'short'] - (tall ? PL9.tall : PL9.short).box[1]) * k;

// ---------- worked crosses (computed, never typed) ----------
export const TALL = completeDom('T', 'tall', 'short');
export const TtTt = cross(['T', 't'], ['T', 't'], ['T', 't'], TALL);
export const TTtt = cross(['T', 'T'], ['t', 't'], ['T', 't'], TALL);
export const Tttt = cross(['T', 't'], ['t', 't'], ['T', 't'], TALL);
export const AFF_D = completeDom('A', 'affected', 'unaffected');
export const AFF_R = (g: string) => (g === 'aa' ? 'affected' : 'unaffected');
export const AaAa_R = cross(['A', 'a'], ['A', 'a'], ['A', 'a'], AFF_R);
export const AaAa_D = cross(['A', 'a'], ['A', 'a'], ['A', 'a'], AFF_D);
export const Aaaa_D = cross(['A', 'a'], ['a', 'a'], ['A', 'a'], AFF_D);
export const ROUND = completeDom('R', 'round', 'wrinkled');
export const Rrrr = cross(['R', 'r'], ['r', 'r'], ['R', 'r'], ROUND);
export const RRrr = cross(['R', 'R'], ['r', 'r'], ['R', 'r'], ROUND);
/** Chance of 0..4 short plants in a group of four (p = 1/4 each). */
export const DIST4 = [0, 1, 2, 3, 4].map(k => binom(4, k, 0.25));
export const pct = (v: number, dp = 0) => `${(v * 100).toFixed(dp)}%`;
export const MENDEL = {tall: 787, short: 277};

// ---------- pedigrees (standard symbols; numbers run left to right in each generation) ----------
/** Scene 7 demo. */
export const P0: Ped = {
	inds: [
		{id: 'I-1', sex: 'M', aff: false, col: 1}, {id: 'I-2', sex: 'F', aff: false, col: 2},
		{id: 'II-1', sex: 'M', aff: false, col: 0.5}, {id: 'II-2', sex: 'F', aff: false, col: 1.5}, {id: 'II-3', sex: 'F', aff: true, col: 2.5},
	],
	fams: [{a: 'I-1', b: 'I-2', kids: ['II-1', 'II-2', 'II-3']}],
};
/** P1, autosomal recessive (scene 8, 10; B10 recalls it). II-1 is II-2's wife (married in, no children shown). */
export const P1: Ped = {
	inds: [
		{id: 'I-1', sex: 'M', aff: true, col: 1}, {id: 'I-2', sex: 'F', aff: false, col: 2},
		{id: 'II-1', sex: 'F', aff: false, col: 0}, {id: 'II-2', sex: 'M', aff: false, col: 1}, {id: 'II-3', sex: 'F', aff: false, col: 2}, {id: 'II-4', sex: 'M', aff: false, col: 3},
		{id: 'III-1', sex: 'F', aff: true, col: 2}, {id: 'III-2', sex: 'M', aff: false, col: 3},
	],
	fams: [{a: 'I-1', b: 'I-2', kids: ['II-2', 'II-3']}, {a: 'II-1', b: 'II-2', kids: []}, {a: 'II-3', b: 'II-4', kids: ['III-1', 'III-2']}],
};
/** P2, autosomal dominant clues (scene 9). II-1 is married in. */
export const P2: Ped = {
	inds: [
		{id: 'I-1', sex: 'M', aff: true, col: 1.5}, {id: 'I-2', sex: 'F', aff: false, col: 2.5},
		{id: 'II-1', sex: 'M', aff: false, col: 0}, {id: 'II-2', sex: 'F', aff: true, col: 1}, {id: 'II-3', sex: 'M', aff: false, col: 2}, {id: 'II-4', sex: 'M', aff: true, col: 3},
		{id: 'III-1', sex: 'M', aff: true, col: 0}, {id: 'III-2', sex: 'F', aff: false, col: 1},
	],
	fams: [{a: 'I-1', b: 'I-2', kids: ['II-2', 'II-3', 'II-4']}, {a: 'II-1', b: 'II-2', kids: ['III-1', 'III-2']}],
};
/** The decisive inset trio: two affected parents, an unaffected daughter. */
export const INSET: Ped = {
	inds: [{id: 'I-1', sex: 'M', aff: true, col: 0}, {id: 'I-2', sex: 'F', aff: true, col: 1}, {id: 'II-1', sex: 'F', aff: false, col: 0.5}],
	fams: [{a: 'I-1', b: 'I-2', kids: ['II-1']}],
};
/** P3, attempt one (autosomal, stated). */
export const P3: Ped = {
	inds: [
		{id: 'I-1', sex: 'M', aff: true, col: 1}, {id: 'I-2', sex: 'F', aff: true, col: 2},
		{id: 'II-1', sex: 'F', aff: false, col: 0.5}, {id: 'II-2', sex: 'M', aff: true, col: 1.5}, {id: 'II-3', sex: 'F', aff: true, col: 2.5}, {id: 'II-4', sex: 'M', aff: false, col: 3.5},
		{id: 'III-1', sex: 'M', aff: true, col: 2.5}, {id: 'III-2', sex: 'F', aff: false, col: 3.5},
	],
	fams: [{a: 'I-1', b: 'I-2', kids: ['II-1', 'II-2', 'II-3']}, {a: 'II-3', b: 'II-4', kids: ['III-1', 'III-2']}],
};

// ---------- build checks: every pedigree and number on screen ----------
(() => {
	const must = (ok: boolean, msg: string) => { if (!ok) throw new Error('B9 check failed: ' + msg); };
	must(TtTt.genoText === '1 TT : 2 Tt : 1 tt', 'Tt x Tt genotypes ' + TtTt.genoText);
	must(TtTt.phenText === '3 tall : 1 short', 'Tt x Tt phenotypes ' + TtTt.phenText);
	must(TTtt.phenText === '4 tall', 'TT x tt ' + TTtt.phenText);
	must(Tttt.genoText === '2 Tt : 2 tt' && Tttt.phenText === '2 tall : 2 short', 'Tt x tt');
	must(Rrrr.phenText === '2 round : 2 wrinkled' && RRrr.phenText === '4 round', 'seed crosses');
	must(AaAa_D.frac(c => c.ph === 'unaffected') === '1/4', 'P3 next child unaffected');
	must(AaAa_R.frac(c => c.ph === 'affected') === '1/4', 'P1 next child affected');
	must(Aaaa_D.frac(c => c.ph === 'affected') === '1/2', 'Aa x aa');
	must(Math.abs(DIST4[1] - 27 / 64) < 1e-12 && pct(DIST4[1]) === '42%', 'exactly one short in four');
	must(Math.abs(DIST4.reduce((a, b) => a + b, 0) - 1) < 1e-12, 'distribution sums to 1');
	must((MENDEL.tall / MENDEL.short).toFixed(2) === '2.84' && pct(MENDEL.short / (MENDEL.tall + MENDEL.short), 1) === '26.0%', 'Mendel counts');
	must(fitsMode(P1, 'AR').fits && !fitsMode(P1, 'AD').fits && !fitsMode(P1, 'XR').fits, 'P1 is AR only (and not XR)');
	must(onlyGeno(P1, 'AR', 'II-3') === 'Aa' && onlyGeno(P1, 'AR', 'II-4') === 'Aa' && onlyGeno(P1, 'AR', 'II-2') === 'Aa' && onlyGeno(P1, 'AR', 'III-1') === 'aa', 'P1 genotypes');
	must(fitsMode(P2, 'AD').fits, 'P2 fits AD');
	must(fitsMode(INSET, 'AD').fits && !fitsMode(INSET, 'AR').fits, 'inset trio is AD only');
	must(fitsMode(P3, 'AD').fits && !fitsMode(P3, 'AR').fits, 'P3 is AD only');
	must(onlyGeno(P3, 'AD', 'I-1') === 'Aa' && onlyGeno(P3, 'AD', 'I-2') === 'Aa' && onlyGeno(P3, 'AD', 'II-1') === 'aa', 'P3 genotypes');
	must(onlyGeno(P2, 'AD', 'I-2') === 'aa', 'P2 unaffected parent');
})();

/** Fade in at `at`, optionally out at `out`. */
export const fadeV = (f: number, at: number, out?: number, d = 12) => prog(f, at, d) * (out === undefined ? 1 : 1 - prog(f, out, d));
