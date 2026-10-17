// B10 shared pieces: the measured lesson, plates (flies, snapdragons and cattle on common boxes so each set aligns,
// one red blood cell cropped from B7's plate), the crosses (computed by B9's shared cross logic, with sons against
// daughters), pedigree P4 and the attempt family (checked by fitsMode in X-linked recessive mode), and new coded
// pieces: X and Y chips with allele tags, the hair zoom and petal zoom, antigen cells, pigment dots and small helpers.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import lesson from '../../../../docs/production/claude-pm/lessons/b10/measured/lesson.json';
import {sceneOf} from '../bio-m5-b06b/shared';
import {AMBER, AMBER_INK, FONT_DISPLAY, INK, INK_SOFT, PlateB, SERIF, clamp01, cross, fitsMode, onlyGeno, pbPt, prog, rng} from '../bio-m5-b09/shared';
import type {PB, Ped} from '../bio-m5-b09/shared';
import {P1} from '../bio-m5-b09/shared';
import * as A from './assets';

export * from '../bio-m5-b09/shared';
export {cw} from '../bio-m5-b06b/shared';
export const S = sceneOf(lesson as unknown as {scenes: unknown[]});
export const hold = (id: string) => S(id).responseHold as {startFrame: number; endFrame: number};

// ---------- plates ----------
const P = (src: string, nat: [number, number], box: [number, number, number, number]): PB => ({src, nat, box, have: A.HAVE.has(src)});
const FLY_BOX: [number, number, number, number] = [444, 390, 1560, 1618];
const SNAP_BOX: [number, number, number, number] = [599, 215, 1452, 1785];
const COW_BOX: [number, number, number, number] = [222, 338, 1780, 1641];
export const PL10 = {
	flyRed: P(A.FLY_RED, [2000, 2000], FLY_BOX),
	flyWhite: P(A.FLY_WHITE, [2000, 2000], FLY_BOX),
	snapRed: P(A.SNAP_RED, [2000, 2000], SNAP_BOX),
	snapPink: P(A.SNAP_PINK, [2000, 2000], SNAP_BOX),
	snapWhite: P(A.SNAP_WHITE, [2000, 2000], SNAP_BOX),
	cowRed: P(A.COW_RED, [2000, 2000], COW_BOX),
	cowRoan: P(A.COW_ROAN, [2000, 2000], COW_BOX),
	cowWhite: P(A.COW_WHITE, [2000, 2000], COW_BOX),
	rbc: P(A.RBC, [2000, 2000], [768, 792, 1362, 1332]),
};
/** A point on the roan's flank (natural pixels), inside the intermixed red and white hair, clear of the head. */
export const FLANK: [number, number] = [1250, 820];

// ---------- crosses (computed, never typed) ----------
const XO = (k: string) => [`X^{${k}}`, `X^{${k.toLowerCase()}}`, 'Y'];
/** X-linked recessive phenotype: affected without the dominant allele; a heterozygous female is a carrier. */
const xlinked = (dom: string, aff: string, ok: string) => (g: string) => {
	const D = `X^{${dom}}`, d = `X^{${dom.toLowerCase()}}`;
	if (!g.includes(D)) return aff;
	return g.includes(d) ? 'carrier' : ok;
};
/** Morgan's F1 female (X^R X^r, side) with a red-eyed male (X^R Y, top). */
export const MORGAN = cross(['X^{R}', 'Y'], ['X^{R}', 'X^{r}'], XO('R'), g => (g.includes('X^{R}') ? 'red' : 'white'));
export const HAEM = cross(['X^{H}', 'Y'], ['X^{H}', 'X^{h}'], XO('H'), xlinked('H', 'affected', 'unaffected'));
export const CB = cross(['X^{B}', 'Y'], ['X^{B}', 'X^{b}'], XO('B'), xlinked('B', 'colour-blind', 'normal vision'));
const CO = (het: string) => (g: string) => (g === 'C^{R} C^{R}' ? 'red' : g === 'C^{W} C^{W}' ? 'white' : het);
export const SNAP = cross(['C^{R}', 'C^{W}'], ['C^{R}', 'C^{W}'], ['C^{R}', 'C^{W}'], CO('pink'));
export const ROAN = cross(['C^{R}', 'C^{W}'], ['C^{R}', 'C^{W}'], ['C^{R}', 'C^{W}'], CO('roan'));
export const ABO_ORDER = ['I^{A}', 'I^{B}', 'i'];
export const aboType = (g: string) => (g.includes('I^{A}') && g.includes('I^{B}') ? 'AB' : g.includes('I^{A}') ? 'A' : g.includes('I^{B}') ? 'B' : 'O');
export const ABO = cross(['I^{A}', 'i'], ['I^{B}', 'i'], ABO_ORDER, aboType);
/** Every ABO genotype from three alleles (two per person), grouped by blood group. */
export const ABO_TABLE = (() => {
	const gs: string[] = [];
	for (let a = 0; a < 3; a++) for (let b = a; b < 3; b++) gs.push(`${ABO_ORDER[a]} ${ABO_ORDER[b]}`);
	const groups = ['A', 'B', 'AB', 'O'].map(t => ({t, gs: gs.filter(g => aboType(g) === t)}));
	return {n: gs.length, groups};
})();
export const isSon = (c: {male: boolean}) => c.male;
export const affectedSon = (c: {male: boolean; ph: string}) => c.male && c.ph === 'affected';

// ---------- pedigrees ----------
/** P4, X-linked recessive pattern (scene 5). II-1 is married in; carriers carry the standard centre dot. */
export const P4: Ped = {
	inds: [
		{id: 'I-1', sex: 'M', aff: true, col: 1.5}, {id: 'I-2', sex: 'F', aff: false, col: 2.5},
		{id: 'II-1', sex: 'M', aff: false, col: 0}, {id: 'II-2', sex: 'F', aff: false, col: 1, carrier: true}, {id: 'II-3', sex: 'M', aff: false, col: 2}, {id: 'II-4', sex: 'F', aff: false, col: 3, carrier: true},
		{id: 'III-1', sex: 'M', aff: true, col: -0.5}, {id: 'III-2', sex: 'F', aff: false, col: 0.5}, {id: 'III-3', sex: 'M', aff: true, col: 1.5},
	],
	fams: [{a: 'I-1', b: 'I-2', kids: ['II-2', 'II-3', 'II-4']}, {a: 'II-1', b: 'II-2', kids: ['III-1', 'III-2', 'III-3']}],
};
/** Attempt one's family: the woman (II-1) and her colour-blind father (I-1); her partner II-2 is married in. */
export const PCB: Ped = {
	inds: [
		{id: 'I-1', sex: 'M', aff: true, col: 0}, {id: 'I-2', sex: 'F', aff: false, col: 1},
		{id: 'II-1', sex: 'F', aff: false, col: 0.5}, {id: 'II-2', sex: 'M', aff: false, col: 1.5},
	],
	fams: [{a: 'I-1', b: 'I-2', kids: ['II-1']}, {a: 'II-1', b: 'II-2', kids: []}],
};

// ---------- build checks ----------
(() => {
	const must = (ok: boolean, msg: string) => { if (!ok) throw new Error('B10 check failed: ' + msg); };
	must(MORGAN.daughters.every(c => c.ph === 'red'), 'Morgan daughters all red');
	must(MORGAN.frac(c => c.ph === 'white', MORGAN.sons) === '1/2', 'Morgan sons half white');
	must(HAEM.frac(affectedSon) === '1/4' && HAEM.frac(c => c.ph === 'affected', HAEM.sons) === '1/2', 'haemophilia all children against sons');
	must(HAEM.daughters.every(c => c.ph !== 'affected') && HAEM.frac(c => c.ph === 'carrier', HAEM.daughters) === '1/2', 'haemophilia daughters');
	must(CB.frac(c => c.male && c.ph === 'colour-blind') === '1/4' && CB.frac(c => c.ph === 'colour-blind', CB.sons) === '1/2' && CB.daughters.every(c => c.ph !== 'colour-blind'), 'colour blindness item');
	must(SNAP.genoText === '1 C^{R} C^{R} : 2 C^{R} C^{W} : 1 C^{W} C^{W}' && SNAP.phenText === '1 red : 2 pink : 1 white', 'snapdragon ratios ' + SNAP.phenText);
	must(ROAN.phenText === '1 red : 2 roan : 1 white', 'roan ratio');
	must(ABO.cells.map(c => c.ph).sort().join() === 'A,AB,B,O' && ABO.frac(c => c.ph === 'AB') === '1/4', 'ABO surprise');
	must(ABO_TABLE.n === 6 && ABO_TABLE.groups.map(g => g.gs.length).join() === '2,2,1,1', 'six genotypes, four groups');
	must(fitsMode(P4, 'XR').fits, 'P4 fits X-linked recessive');
	must(!fitsMode(P1, 'XR').fits, "B9's P1 is not X-linked recessive");
	must(fitsMode(PCB, 'XR').fits && onlyGeno(PCB, 'XR', 'II-1') === 'Hh', 'the woman must be a carrier');
	must(1 / 100 === 0.01 && (1 / 100) ** 2 === 1 / 10000, 'male excess aside');
})();
export const MORGAN_F2 = {redF: 2459, redM: 1011, whiteM: 782, whiteF: 0};

// ---------- X and Y chips ----------
/**
 * A coded sex chromosome chip: X is a short cream X shape, Y a shorter cream Y. `tag` is the allele letter shown as a
 * raised tag on the X (never colour only); `slot` draws an empty dashed tag slot (the Y carries no copy).
 */
export const SexChrom: React.FC<{x: number; y: number; kind: 'X' | 'Y'; tag?: string; tagO?: number; slot?: number; s?: number; o?: number; ring?: number; edge?: string}> = ({x, y, kind, tag, tagO = 1, slot = 0, s = 1, o = 1, ring = 0, edge}) => {
	if (o <= 0.01) return null;
	const arms = kind === 'X' ? 'M-16,-34 L16,34 M16,-34 L-16,34' : 'M-14,-26 L0,-2 M14,-26 L0,-2 M0,-2 L0,26';
	const tx = 26, ty = -32;
	return (
		<g opacity={o} transform={`translate(${x},${y}) scale(${s})`}>
			{ring > 0.01 ? <circle r={50} fill="none" stroke={AMBER} strokeWidth={4} opacity={ring} /> : null}
			<path d={arms} stroke={edge ?? INK} strokeWidth={20} strokeLinecap="round" fill="none" />
			<path d={arms} stroke="#fbf0cf" strokeWidth={13} strokeLinecap="round" fill="none" />
			{slot > 0.01 ? <circle cx={tx} cy={ty} r={13} fill="none" stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="5 4" opacity={slot} /> : null}
			{tag && tagO > 0.01 ? (
				<g opacity={tagO}>
					<circle cx={tx} cy={ty} r={14} fill="#fffdf8" stroke={INK} strokeWidth={2.5} />
					<text x={tx} y={ty + 7} textAnchor="middle" style={{fontFamily: SERIF, fontWeight: 700, fontSize: 21}} fill={INK}>{tag}</text>
				</g>
			) : null}
		</g>
	);
};

// ---------- hair zoom, petal zoom ----------
/** A magnified circle on the roan's coat: separate hair strokes, each fully red or fully white (seeded). */
export const HairZoom: React.FC<{x: number; y: number; r: number; o?: number; grow?: number}> = ({x, y, r, o = 1, grow = 1}) => {
	if (o <= 0.01) return null;
	const rr = rng(31);
	const hairs = Array.from({length: 260}, () => {
		const a = rr() * Math.PI * 2, d = Math.sqrt(rr()) * r * 0.92;
		return {x: x + Math.cos(a) * d, y: y + Math.sin(a) * d, ang: -0.9 + (rr() - 0.5) * 0.5, len: 26 + rr() * 22, red: rr() < 0.55};
	});
	const k = clamp01(grow);
	return (
		<g opacity={o}>
			<defs><clipPath id={`hz${x}`}><circle cx={x} cy={y} r={r * k} /></clipPath></defs>
			<circle cx={x} cy={y} r={r * k} fill="#b9a68e" />
			<g clipPath={`url(#hz${x})`}>
				{hairs.map((h, i) => (
					<line key={i} x1={h.x} y1={h.y} x2={h.x + Math.cos(h.ang) * h.len} y2={h.y + Math.sin(h.ang) * h.len} stroke={h.red ? '#9b3b22' : '#f7f2ea'} strokeWidth={4.5} strokeLinecap="round" />
				))}
				{hairs.filter(h => !h.red).map((h, i) => <line key={'o' + i} x1={h.x} y1={h.y} x2={h.x + Math.cos(h.ang) * h.len} y2={h.y + Math.sin(h.ang) * h.len} stroke="#c9bba6" strokeWidth={1} strokeLinecap="round" opacity={0.7} />)}
			</g>
			<circle cx={x} cy={y} r={r * k} fill="none" stroke={INK} strokeWidth={5} />
		</g>
	);
};
/** A magnified circle on a pink petal: an even pink wash with faint cell outlines (every cell in between). */
export const PetalZoom: React.FC<{x: number; y: number; r: number; o?: number; grow?: number}> = ({x, y, r, o = 1, grow = 1}) => {
	if (o <= 0.01) return null;
	const k = clamp01(grow);
	const cells: React.ReactNode[] = [];
	for (let i = -4; i <= 4; i++) for (let j = -4; j <= 4; j++) cells.push(<ellipse key={i + ',' + j} cx={x + i * 34 + (j % 2) * 17} cy={y + j * 30} rx={15} ry={13} fill="none" stroke="#d987a6" strokeWidth={1.5} opacity={0.55} />);
	return (
		<g opacity={o}>
			<defs><clipPath id={`pz${x}`}><circle cx={x} cy={y} r={r * k} /></clipPath></defs>
			<circle cx={x} cy={y} r={r * k} fill="#efa3bf" />
			<g clipPath={`url(#pz${x})`}>{cells}</g>
			<circle cx={x} cy={y} r={r * k} fill="none" stroke={INK} strokeWidth={5} />
		</g>
	);
};
/** Lines from a small spot to a zoom circle. */
export const ZoomLines: React.FC<{from: [number, number]; to: [number, number]; r: number; spot?: number; o?: number}> = ({from, to, r, spot = 22, o = 1}) => {
	if (o <= 0.01) return null;
	const a = Math.atan2(to[1] - from[1], to[0] - from[0]) + Math.PI / 2;
	const pts = [1, -1].map(sg => [from[0] + Math.cos(a) * spot * sg, from[1] + Math.sin(a) * spot * sg, to[0] + Math.cos(a) * r * sg, to[1] + Math.sin(a) * r * sg]);
	return (
		<g opacity={o}>
			<circle cx={from[0]} cy={from[1]} r={spot} fill="none" stroke={INK} strokeWidth={4} />
			{pts.map((p, i) => <line key={i} x1={p[0]} y1={p[1]} x2={p[2]} y2={p[3]} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="6 6" />)}
		</g>
	);
};

// ---------- antigen cells ----------
/** One red blood cell (cropped from B7's plate) with coded antigen marks: triangles tagged "A", circles tagged "B". */
export const AntigenCell: React.FC<{x: number; y: number; w: number; a?: number; b?: number; o?: number; id: string; labels?: boolean}> = ({x, y, w, a = 0, b = 0, o = 1, id, labels = true}) => {
	if (o <= 0.01) return null;
	const p = PL10.rbc;
	const rx = w / 2, ry = (w * (p.box[3] - p.box[1])) / (p.box[2] - p.box[0]) / 2;
	const marks = 10;
	const ms = Math.max(0.35, Math.min(1, w / 200));
	return (
		<g opacity={o}>
			<defs><clipPath id={`ac-${id}`}><ellipse cx={x} cy={y} rx={rx * 0.99} ry={ry * 0.99} /></clipPath></defs>
			<g clipPath={`url(#ac-${id})`}><PlateB p={p} cx={x} cy={y} w={w} /></g>
			{Array.from({length: marks}, (_, i) => {
				const t = (i / marks) * Math.PI * 2 - Math.PI / 2;
				const isA = a > 0.01 && (b <= 0.01 || i % 2 === 0);
				const isB = b > 0.01 && (a <= 0.01 || i % 2 === 1);
				const mx = x + Math.cos(t) * (rx + 12 * ms), my = y + Math.sin(t) * (ry + 12 * ms);
				const deg = (t * 180) / Math.PI + 90;
				if (isA) {
					const g = clamp01(a * marks - i * 0.6);
					return g > 0.01 ? (
						<g key={i} transform={`translate(${mx},${my}) rotate(${deg}) scale(${g * ms})`}>
							<path d="M0,-17 L14,9 L-14,9 Z" fill="#f5d36b" stroke="#8a6420" strokeWidth={2.5} />
							{labels ? <text y={6} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 13}} fill={INK}>A</text> : null}
						</g>
					) : null;
				}
				if (isB) {
					const g = clamp01(b * marks - i * 0.6);
					return g > 0.01 ? (
						<g key={i} transform={`translate(${mx},${my}) rotate(${deg}) scale(${g * ms})`}>
							<circle r={12} fill="#a8d0e6" stroke="#2f5d7a" strokeWidth={2.5} />
							{labels ? <text y={5} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 13}} fill={INK}>B</text> : null}
						</g>
					) : null;
				}
				return null;
			})}
		</g>
	);
};
/** Antigen marks for a blood group (for small icons in boxes). */
export const groupMarks = (t: string) => ({a: t === 'A' || t === 'AB' ? 1 : 0, b: t === 'B' || t === 'AB' ? 1 : 0});

// ---------- pigment dots under a flower ----------
export const PigmentDots: React.FC<{x: number; y: number; n: number; at: number; color?: string}> = ({x, y, n, at, color = '#c2263a'}) => {
	const f = useCurrentFrame();
	return (
		<g>
			{Array.from({length: n}, (_, i) => {
				const p = prog(f, at + i * 3, 10);
				return p > 0.01 ? <circle key={i} cx={x + (i % 6) * 18 - 45} cy={y + Math.floor(i / 6) * 18} r={7 * p} fill={color} stroke="#7a1220" strokeWidth={1.5} /> : null;
			})}
		</g>
	);
};
void AMBER_INK; void pbPt;
