// G01 scenes 3a to 3d: question 2, a firefly gene's coding strand written 3' to 5'. The mRNA is the coding strand read
// from its 5' end with T as U; every codon and amino acid on screen is computed (B6b asRNA, B6c translate and the
// codon chart), including both wrong routes, and checked at build time.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {AMBER, AMBER_INK, INK, INK_SOFT, prog} from '../../kit';
import {BaseTile, BigArrow, GREYT, MRNA, MRNA_INK, Overlay, PLUM, Strand, asRNA, complementRNA, cw} from '../bio-m5-b06b/shared';
import type {SceneL} from '../bio-m5-b06b/shared';
import {AABead, CodonChart, NB, PepLink, codonToAA, reverse, translate} from '../bio-m5-b06c/shared';
import type {ChartGeom} from '../bio-m5-b06c/shared';
import {Sugar} from '../bio-m5-b04/dna';
import {AidChip, Badge, CheckStrip, Crossed, GreyTag, HscTag, ModelLine, Note, PauseHold, QText, RED, Ring, Sx, TaskLine, clamp01, lerp, qCheck, smooth, vis} from './board';
import {PLG, PlateB} from './plates';
import {hold, sc} from './common';
import {CHECKS, TRACE} from './s1';

// ---------- computed sequences ----------
/** The coding strand as written on the card, 3' (left) to 5' (right). */
const WRITTEN = 'CGGAATAAAGGTGTA';
const CODING53 = reverse(WRITTEN);
const MRNA_SEQ = asRNA(CODING53);
const CODONS = [0, 1, 2, 3, 4].map(k => MRNA_SEQ.slice(3 * k, 3 * k + 3));
const CHAIN = translate(MRNA_SEQ);
const STOP_K = CODONS.findIndex(c => codonToAA(c) === 'stop');
const WRONG_READ = asRNA(WRITTEN);
const WRONG_PAIR = complementRNA(WRITTEN);
const aasOf = (m: string) => [0, 1, 2, 3, 4].map(k => codonToAA(m.slice(3 * k, 3 * k + 3)));
(() => {
	const must = (ok: boolean, msg: string) => { if (!ok) throw new Error('G01 Q2 check failed: ' + msg); };
	must(CODING53 === 'ATGTGGAAATAAGGC', 'coding strand 5 to 3 ' + CODING53);
	must(MRNA_SEQ === 'AUGUGGAAAUAAGGC', 'mRNA ' + MRNA_SEQ);
	must(CHAIN.join('-') === 'Met-Trp-Lys' && STOP_K === 3, 'chain ' + CHAIN.join('-'));
	must(aasOf(WRONG_READ).join(',') === 'Arg,Asn,Lys,Gly,Val', 'read from the 3 end');
	must(aasOf(WRONG_PAIR).join(',') === 'Ala,Leu,Phe,Pro,His', 'paired like a template');
})();

// ---------- board geometry ----------
const TASK2 = 'Write the mRNA (with ends). Give the amino acid chain and how many.';
const SX0 = 430, SP = 66, SY = 236; // coding strand: first column x, pitch, backbone y
const TW = 54, TH = 44, SO = 16;
const sx = (i: number) => SX0 + i * SP;
const MY = 410; // mRNA backbone
const mx = (k: number) => SX0 + k * SP + Math.floor(k / 3) * 22;
const CH: ChartGeom = {x0: 0, y0: 0, cw: 228, ch: 146};
const CHART_AT = {x: 1072, y: 590, s: 0.68};
/** Screen point of a chart line (codon). */
const chartPt = (codon: string): [number, number] => {
	const r = NB.indexOf(codon[0]), c = NB.indexOf(codon[1]), t = NB.indexOf(codon[2]);
	return [CHART_AT.x + (c * CH.cw + 12) * CHART_AT.s, CHART_AT.y + (r * CH.ch + 30 + t * 36 - 8) * CHART_AT.s];
};
const Chart: React.FC<{at: number; o?: number; codon?: string; rowHi?: number; colHi?: number; lineHi?: Record<string, number>}> = ({at, o = 1, codon, rowHi = 0, colHi = 0, lineHi = {}}) => (
	<g transform={`translate(${CHART_AT.x},${CHART_AT.y}) scale(${CHART_AT.s})`}>
		<CodonChart g={CH} at={at} o={o} row={codon ? NB.indexOf(codon[0]) : -1} col={codon ? NB.indexOf(codon[1]) : -1} rowHi={rowHi} colHi={colHi} lineHi={lineHi} />
	</g>
);
const CodingStrand: React.FC<{at: number; glow?: (i: number) => number; o?: number}> = ({at, glow, o = 1}) => {
	const f = useCurrentFrame();
	return <Strand x={SX0} y={SY} letters={WRITTEN} pitch={SP} face="down" color={PLUM} tw={TW} th={TH} so={SO} thick={7} o={o * prog(f, at, 16)} glow={glow} />;
};
const EndsW: React.FC<{at: number}> = ({at}) => (
	<>
		<Sx x={SX0 - 52} y={SY + 50} text="3'" size={46} color={INK} hand anchor="middle" at={at} />
		<Sx x={sx(14) + 52} y={SY + 50} text="5'" size={46} color={INK} hand anchor="middle" at={at} />
	</>
);
/** The mRNA row: landed(k) 0..1 shows tile k; grey(k) greys it; glow(k) lights it. */
const MrnaRow: React.FC<{landed: (k: number) => number; grey?: (k: number) => number; glow?: (k: number) => number; o?: number}> = ({landed, grey, glow, o = 1}) => (
	<g opacity={o}>
		{Array.from({length: 14}, (_, k) => {
			const a = landed(k), b = landed(k + 1);
			return a > 0.95 && b > 0.95 ? <line key={'l' + k} x1={mx(k)} y1={MY} x2={mx(k + 1)} y2={MY} stroke={MRNA} strokeWidth={7} strokeLinecap="round" /> : null;
		})}
		{Array.from({length: 15}, (_, k) => {
			const a = landed(k);
			if (a < 0.95) return null;
			const gr = grey ? grey(k) : 0;
			return (
				<g key={k}>
					<line x1={mx(k)} y1={MY + 8} x2={mx(k)} y2={MY + SO} stroke={MRNA} strokeWidth={5} />
					<Sugar x={mx(k)} y={MY} r={12} color={MRNA} />
					<BaseTile x={mx(k)} y={MY + SO} face="down" l={MRNA_SEQ[k]} w={TW} h={TH} tone={gr > 0.5 ? 'grey' : undefined} glow={glow ? glow(k) : 0} />
				</g>
			);
		})}
	</g>
);
const Slots: React.FC<{at: number; o?: number}> = ({at, o = 1}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 16) * o;
	if (p <= 0.01) return null;
	return (
		<g opacity={p}>
			{Array.from({length: 15}, (_, k) => <rect key={k} x={mx(k) - TW / 2} y={MY + SO} width={TW} height={TH} rx={8} fill="none" stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="7 6" />)}
			<rect x={mx(0) - 86} y={MY + 12} width={48} height={50} rx={8} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="7 6" />
			<rect x={mx(14) + 38} y={MY + 12} width={48} height={50} rx={8} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="7 6" />
			<Sx x={mx(0) - 100} y={MY + 46} text="mRNA" size={32} color={MRNA_INK} hand anchor="end" at={-100} />
		</g>
	);
};
const MrnaEnds: React.FC<{left: number; right: number}> = ({left, right}) => (
	<>
		<Sx x={mx(0) - 62} y={MY + 50} text="5'" size={46} color={MRNA_INK} hand anchor="middle" at={left} />
		<Sx x={mx(14) + 62} y={MY + 50} text="3'" size={46} color={MRNA_INK} hand anchor="middle" at={right} />
	</>
);
type Q2At = {q: number; fire: number; coding: number; end3: number; chart: number; here: number; chain: number};
const NO2: Q2At = {q: -100, fire: -100, coding: -100, end3: -100, chart: -100, here: -100, chain: -100};
const Q2Q = (t: Q2At) => qCheck([
	{text: 'Fireflies glow using an enzyme made from one gene.', at: t.fire},
	{text: "The strand shown is a short section of that gene's coding strand, written from its 3' end to its 5' end.", at: t.here},
	{text: '(a) Using the codon chart, write the mRNA with its ends.', at: t.chart, para: true, weight: 650},
	{text: '(b) Give the chain of amino acids this section codes for, and say how many there are.', at: t.chain, para: true, weight: 650},
], ['coding strand', "from its 3' end to its 5' end"].map(phrase => ({phrase, at: 1e9})));
Q2Q(NO2);
const Q2Head: React.FC<{a?: Q2At; m?: Record<string, number>; s?: number}> = ({a, m = {}, s: sc0 = 1}) => {
	const f = useCurrentFrame();
	const t = a ?? NO2;
	return (
		<g>
			<TaskLine text={TASK2} at={a ? 6 : -100} size={46} />
			<HscTag at={a ? 10 : -100} />
			<Badge text="Transcription and translation" at={t.q + 10} />
			<PlateB p={PLG.firefly} cx={200} cy={270} w={210} o={prog(f, t.fire, 14)} />
			<Note x={110} y={386} text="firefly" at={t.fire + 6} size={34} color={INK_SOFT} />
			<CodingStrand at={t.coding - 10} />
			<EndsW at={t.end3} />
			<Sx x={sx(14) + 96} y={SY + 46} text="coding strand" size={36} color={PLUM} hand at={t.coding} />
			<GreyTag x={SX0 - 20} y={500} text="illustrative sequence, not the real gene" at={t.coding + 20} size={24} />
			<QText q={Q2Q(t)} x={120} y={612} w={776} size={30} at={t.fire} markAt={m} s={sc0} />
		</g>
	);
};

// ---------- 3a. Question 2 (pause) ----------
const KA = cues(sc('q2-question'), {q: 'Question two', fire: 'Fireflies glow', coding: 'coding strand', end3: "its 3' end", chart: 'Using the codon chart', mrna: 'write the mRNA', chain: 'give the chain', many: 'how many', pause: 'Pause here', here: "Here's a short section"});
export const SceneQ2Question: React.FC = () => {
	const h = hold('q2-question');
	return (
		<Overlay>
			<Q2Head a={{q: KA.q, fire: KA.fire, coding: KA.coding, end3: KA.end3, chart: KA.chart, here: KA.here, chain: KA.chain}} />
			<Ring cx={sx(14) + 96 + 110} cy={SY + 34} rx={130} ry={34} at={KA.coding + 8} out={KA.end3 + 30} />
			<Ring cx={SX0 - 52} cy={SY + 34} rx={34} ry={34} at={KA.end3 + 2} out={KA.chart + 20} />
			<Slots at={KA.mrna} />
			<Chart at={KA.chart} />
			<PauseHold h={h} at={KA.pause} x={110} y={966} cx={1730} cy={396} />
			<CheckStrip labels={CHECKS} title={TRACE} hold={h} />
		</Overlay>
	);
};

// ---------- 3b. Which strand, which end ----------
const SB = sc('q2-direction') as SceneL;
const KB = cues(SB, {which: 'Which strand', coding: "It's the coding strand", copy: 'is a copy of it', uT: 'U in place of T', nopair: 'No pairing', end: 'Which end', same: 'runs the same way', start: "start at the strand's 5' end", right: 'on the right', read: 'Read right to left', tu: 'T as U', c4: 'G G C'});
const PHRASES = ['A U G', 'U G G', 'A A A', 'U A A', 'G G C'];
const LAND = Array.from({length: 15}, (_, k) => cw(SB, PHRASES[Math.floor(k / 3)], k % 3) + 4);
export const SceneQ2Direction: React.FC = () => {
	const f = useCurrentFrame();
	const fly = (k: number) => smooth((f - (LAND[k] - 18)) / 18);
	const srcGlow = (i: number) => { const k = 14 - i; return f >= LAND[k] - 18 && f < LAND[k] + 6 ? 1 : 0; };
	return (
		<Overlay>
			<Q2Head m={{'coding strand': KB.coding, "from its 3' end to its 5' end": KB.end}} />
			<CodingStrand at={-100} glow={srcGlow} />
			<Chart at={-100} />
			<Slots at={-100} o={1 - prog(f, LAND[0] - 18, 12)} />
			<Ring cx={sx(14) + 52} cy={SY + 34} rx={36} ry={36} at={KB.end} />
			<BigArrow x1={sx(14) + 20} x2={SX0 - 20} y={358} at={KB.right} label="read from 5'" labelSide="above" size={32} />
			<AidChip x={96} y={918} text="coding strand: copy it, T becomes U" at={KB.coding + 6} size={30} />
			<Note x={640} y={958} text="no pairing" at={KB.nopair} size={32} color={INK_SOFT} />
			<GreyTag x={790} y={924} text="B6b" at={KB.coding + 14} size={24} />
			<GreyTag x={980} y={502} text="same letters, same direction as the coding strand (B6b)" at={KB.same} size={24} />
			<MrnaRow landed={k => (fly(k) >= 1 ? 1 : 0)} />
			{/* the flying copies: each leaves its strand tile and lands right to left, T turning to U */}
			{Array.from({length: 15}, (_, k) => {
				const t = fly(k);
				if (t <= 0 || t >= 1) return null;
				const src = 14 - k;
				const x = lerp(sx(src), mx(k), t), y = lerp(SY + SO, MY + SO, t);
				const l = t > 0.7 ? MRNA_SEQ[k] : WRITTEN[src];
				return <BaseTile key={k} x={x} y={y} face="down" l={l} w={TW} h={TH} />;
			})}
			<MrnaEnds left={KB.start + 10} right={LAND[14] + 10} />
			<CheckStrip labels={CHECKS} title={TRACE} ticks={{0: [KB.which], 1: [KB.end]}} />
		</Overlay>
	);
};

// ---------- 3c. The chart, and the stop codon ----------
const KC = cues(sc('q2-chain'), {chart: 'Now the chart', c0: 'A U G is the start', met: 'methionine', c1: 'U G G is tryptophan', trp: ['tryptophan', 1], c2: 'A A A is lysine', lys: ['lysine', 1], c3: 'U A A is a stop', stop: 'stop codon', adds: 'adds no amino acid', rel: 'the chain is released', ggc: 'G G C is never read', chain: 'The chain is methionine', three: 'three amino acids'});
const LOOK = [KC.c0, KC.c1, KC.c2, KC.c3];
const BEAD_AT = [KC.met, KC.trp, KC.lys];
const BX = (i: number) => 200 + i * 150, BY = 830;
export const SceneQ2Chain: React.FC = () => {
	const f = useCurrentFrame();
	const cur = LOOK.reduce((a, t, i) => (f >= t - 4 ? i : a), -1);
	const codon = cur >= 0 ? CODONS[cur] : undefined;
	const t0 = cur >= 0 ? LOOK[cur] : 0;
	const end = cur >= 0 && cur < 3 ? LOOK[cur + 1] - 6 : KC.ggc;
	const rowHi = cur >= 0 ? prog(f, t0 - 4, 8) * (1 - prog(f, end, 8)) : 0;
	const colHi = cur >= 0 ? prog(f, t0 + 6, 8) * (1 - prog(f, end, 8)) : 0;
	const lineHi: Record<string, number> = {};
	LOOK.forEach((t, i) => { lineHi[CODONS[i]] = prog(f, t + 14, 8) * (i === cur && f < end ? 1 : 0.45); });
	const glow = (k: number) => { const c = Math.floor(k / 3); return c === cur && f < end ? prog(f, t0 - 4, 8) : 0; };
	const grey = (k: number) => (Math.floor(k / 3) === 4 ? prog(f, KC.ggc, 10) : 0);
	const pointer = codon && colHi > 0.5 ? chartPt(codon) : null;
	return (
		<Overlay>
			<Q2Head m={{'coding strand': -100, "from its 3' end to its 5' end": -100}} s={lerp(1, 0.5, smooth(f / 22))} />
			<Chart at={-100} codon={codon} rowHi={rowHi} colHi={colHi} lineHi={lineHi} />
			<MrnaRow landed={() => 1} glow={glow} grey={grey} />
			<MrnaEnds left={-100} right={-100} />
			{pointer ? (
				<g opacity={colHi}>
					<path d={`M${mx(cur * 3 + 1)},${MY + SO + TH + 8} C${mx(cur * 3 + 1)},${MY + 160} ${pointer[0] - 80},${pointer[1]} ${pointer[0] - 8},${pointer[1]}`} fill="none" stroke={AMBER_INK} strokeWidth={4} strokeDasharray="8 7" />
					<circle cx={pointer[0] - 8} cy={pointer[1]} r={7} fill={AMBER_INK} />
				</g>
			) : null}
			{/* the chain */}
			{CHAIN.map((aa, i) => {
				const at = BEAD_AT[i];
				const p = prog(f, at, 12);
				return (
					<g key={i}>
						{i > 0 ? <PepLink a={[BX(i - 1), BY]} b={[BX(i), BY]} o={p} r={46} /> : null}
						<g transform={`translate(${BX(i)},${BY}) scale(${0.6 + 0.4 * p}) translate(${-BX(i)},${-BY})`}><AABead x={BX(i)} y={BY} aa={aa} r={46} o={p} /></g>
					</g>
				);
			})}
			<Note x={BX(0) - 30} y={BY - 64} text="start" at={KC.met + 4} size={32} />
			<g opacity={prog(f, KC.stop, 12)}>
				<path d={`M${BX(2) + 70},${BY - 50} L${BX(2) + 84},${BY - 50} L${BX(2) + 84},${BY + 50} L${BX(2) + 70},${BY + 50}`} fill="none" stroke={GREYT} strokeWidth={6} strokeLinecap="round" />
			</g>
			<Sx x={BX(2) + 104} y={BY - 6} text="stop: adds" size={32} color={INK_SOFT} hand at={KC.stop + 6} />
			<Sx x={BX(2) + 104} y={BY + 30} text="nothing" size={32} color={INK_SOFT} hand at={KC.stop + 10} />
			<GreyTag x={mx(12) - 70} y={482} text="after the stop: not read" at={KC.ggc + 6} size={26} />
			<ModelLine x={130} y={928} text={`mRNA: 5' ${CODONS.join(' ')} 3'`} at={KC.three - 30} size={36} />
			<ModelLine x={130} y={974} text={`chain: ${CHAIN.join('-')}, ${CHAIN.length} amino acids`} at={KC.three} size={36} />
			<CheckStrip labels={CHECKS} title={TRACE} ticks={{0: [-100], 1: [-100]}} />
		</Overlay>
	);
};

// ---------- 3d. The classic mistake ----------
const KD = cues(sc('q2-mistake'), {left: 'reading from the left', english: 'read English', gives: 'That gives arginine', nostart: 'no start codon', always: 'Always find the', five: "5' end first"});
const gx = (k: number) => 1010 + k * 44 + Math.floor(k / 3) * 14;
export const SceneQ2Mistake: React.FC = () => {
	const f = useCurrentFrame();
	const wr = aasOf(WRONG_READ);
	const write = (k: number) => prog(f, KD.left - 30 + k * 2, 6);
	const crossAt = KD.left + 30;
	return (
		<Overlay>
			<Q2Head m={{'coding strand': -100, "from its 3' end to its 5' end": -100}} s={0.5} />
			<Chart at={-100} o={1 - 0.85 * prog(f, 0, 14)} />
			<MrnaRow landed={() => 1} grey={k => (Math.floor(k / 3) === 4 ? 1 : 0)} />
			<MrnaEnds left={-100} right={-100} />
			<ModelLine x={130} y={928} text={`mRNA: 5' ${CODONS.join(' ')} 3'`} at={-100} size={36} />
			<ModelLine x={130} y={974} text={`chain: ${CHAIN.join('-')}, ${CHAIN.length} amino acids`} at={-100} size={36} />
			{/* the wrong route: read left to right, as written */}
			<g opacity={prog(f, KD.left - 30, 10)}>
				<Sx x={1010} y={585} text="read from the left, as written:" size={30} color={INK_SOFT} hand at={-100} />
				{Array.from({length: 15}, (_, k) => <g key={k} opacity={write(k)}><BaseTile x={gx(k)} y={606} face="down" l={WRONG_READ[k]} w={38} h={32} tone="grey" /></g>)}
				{wr.map((aa, i) => (
					<g key={i}>
						{i > 0 ? <PepLink a={[1060 + (i - 1) * 118, 712]} b={[1060 + i * 118, 712]} r={30} o={prog(f, KD.gives + i * 5, 8)} /> : null}
						<AABead x={1060 + i * 118} y={712} aa={aa} r={30} grey o={prog(f, KD.gives + i * 5, 8)} />
					</g>
				))}
			</g>
			<g>
				{f >= crossAt ? <path d={`M${990},${560} C${1300},${530} ${1760},${540} ${1760},${650} C${1760},${770} ${1300},${770} ${1000},${750} C${960},${700} ${960},${600} ${1010},${560}`} fill="none" stroke={RED} strokeWidth={5} strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - smooth((f - crossAt) / 16)} /> : null}
				{f >= crossAt + 10 ? <line x1={1000} y1={760} x2={1000 + 760 * smooth((f - crossAt - 10) / 10)} y2={760 - 200 * smooth((f - crossAt - 10) / 10)} stroke={RED} strokeWidth={6} strokeLinecap="round" /> : null}
			</g>
			<Sx x={1010} y={800} text="read from the 3' end: wrong (no start codon)" size={32} color={RED} hand at={crossAt + 14} />
			{/* unspoken second route, after the spoken cross */}
			<Crossed x={1000} y={840} text={`paired it like a template: ${aasOf(WRONG_PAIR).join(', ')}`} at={KD.nostart + 10} cross={KD.nostart + 30} size={28} />
			<Sx x={1010} y={952} text="it's the coding strand: copy, don't pair" size={28} color={RED} hand at={KD.nostart + 44} />
			<Ring cx={sx(14) + 52} cy={SY + 34} rx={38} ry={38} at={KD.five} />
			<Ring cx={mx(0) - 62} cy={MY + 34} rx={38} ry={38} at={KD.five + 6} />
			<CheckStrip labels={CHECKS} title={TRACE} ticks={{0: [-100], 1: [KD.always]}} />
		</Overlay>
	);
};
void AMBER; void INK; void clamp01; void vis; void RED;
