// G01 scenes 4a to 4d: question 3, a koala testis cell through meiosis. Chromosomes are counted by centromeres and DNA
// by chromatids; the painted B5b chromosomes (plum and teal homologues) copy, pair, separate and split. Every count and
// mass on screen is computed from the card's 16 chromosomes and 7.0 pg, and checked at build time.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {AMBER, AMBER_INK, INK, INK_SOFT, prog} from '../../kit';
import {Overlay} from '../bio-m5-b06b/shared';
import {MC, PCell, CPLUM} from '../bio-m5-b08/shared';
import type {Col} from '../bio-m5-b08/shared';
import {AidChip, BIO, BIO_SOFT, Badge, CheckStrip, Crossed, Fade, GreyTag, HscTag, Note, PauseHold, QText, qCheck, RED, Ring, Sx, TaskLine, lerp, smooth, vis} from './board';
import {PLG, PlateB} from './plates';
import {hold, sc} from './common';
import {CHECKS, TRACE} from './s1';

// ---------- computed counts ----------
const N2 = 16, DNA0 = 7.0;
const STAGES = [
	{label: 'prophase I', chrom: N2, dna: DNA0 * 2},
	{label: 'each cell after meiosis I', chrom: N2 / 2, dna: DNA0},
	{label: 'each sperm cell', chrom: N2 / 2, dna: DNA0 / 2},
];
const fmt = (v: number) => v.toFixed(1);
(() => {
	const must = (ok: boolean, msg: string) => { if (!ok) throw new Error('G01 Q3 check failed: ' + msg); };
	must(STAGES.map(s => `${s.chrom}/${fmt(s.dna)}`).join(' ') === '16/14.0 8/7.0 8/3.5', 'counts');
	must(Math.abs(4 * STAGES[2].dna - STAGES[0].dna) < 1e-9, 'four sperm hold all the copied DNA');
})();

// ---------- board ----------
const TASK3 = 'Chromosomes and DNA mass at three stages.';
const TB = {x: 980, y: 230, lw: 360, c1: 190, c2: 280, hh: 60, rh: 76};
const rowY = (r: number) => TB.y + TB.hh + r * TB.rh;
const cellC = (r: number, c: 1 | 2): [number, number] => [c === 1 ? TB.x + TB.lw + TB.c1 / 2 : TB.x + TB.lw + TB.c1 + TB.c2 / 2, rowY(r) + TB.rh / 2 + 12];
type Val = {r: number; c: 1 | 2; text: string; at: number; o?: number; color?: string};
const CountTable: React.FC<{at: number; vals?: Val[]; labelsAt?: number}> = ({at, vals = [], labelsAt}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 16);
	if (p <= 0.01) return null;
	const W = TB.lw + TB.c1 + TB.c2;
	const la = labelsAt ?? at;
	return (
		<g>
			<g opacity={p}>
				<rect x={TB.x} y={TB.y} width={W} height={TB.hh + 3 * TB.rh} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.3)" strokeWidth={3} />
				<rect x={TB.x} y={TB.y} width={W} height={TB.hh} rx={16} fill={BIO_SOFT} />
				{[1, 2, 3].map(r => <line key={r} x1={TB.x} y1={TB.y + TB.hh + (r - 1) * TB.rh} x2={TB.x + W} y2={TB.y + TB.hh + (r - 1) * TB.rh} stroke="rgba(60,45,20,0.22)" strokeWidth={2} />)}
				<line x1={TB.x + TB.lw} y1={TB.y} x2={TB.x + TB.lw} y2={TB.y + TB.hh + 3 * TB.rh} stroke="rgba(60,45,20,0.22)" strokeWidth={2} />
				<line x1={TB.x + TB.lw + TB.c1} y1={TB.y} x2={TB.x + TB.lw + TB.c1} y2={TB.y + TB.hh + 3 * TB.rh} stroke="rgba(60,45,20,0.22)" strokeWidth={2} />
				<Sx x={TB.x + TB.lw + TB.c1 / 2} y={TB.y + 41} text="chromosomes" size={30} color={BIO} hand anchor="middle" at={-100} />
				<Sx x={TB.x + TB.lw + TB.c1 + TB.c2 / 2} y={TB.y + 41} text="DNA (pg)" size={30} color={BIO} hand anchor="middle" at={-100} />
			</g>
			{STAGES.map((s, r) => <Sx key={r} x={TB.x + 22} y={rowY(r) + TB.rh / 2 + 11} text={s.label} size={32} hand at={la + r * 6} />)}
			{vals.map((v, i) => {
				const [cx, cy] = cellC(v.r, v.c);
				return <g key={i} opacity={v.o ?? 1}><Sx x={cx} y={cy} text={v.text} size={36} color={v.color ?? INK} weight={800} anchor="middle" at={v.at} /></g>;
			})}
		</g>
	);
};
const VALS = (a: {r1c: number; r1d: number; r2c: number; r2d: number; r3c: number; r3d: number}): Val[] => [
	{r: 0, c: 1, text: String(STAGES[0].chrom), at: a.r1c}, {r: 0, c: 2, text: `about ${fmt(STAGES[0].dna)}`, at: a.r1d},
	{r: 1, c: 1, text: String(STAGES[1].chrom), at: a.r2c}, {r: 1, c: 2, text: `about ${fmt(STAGES[1].dna)}`, at: a.r2d},
	{r: 2, c: 1, text: String(STAGES[2].chrom), at: a.r3c}, {r: 2, c: 2, text: `about ${fmt(STAGES[2].dna)}`, at: a.r3d},
];
const ALL_VALS = VALS({r1c: -100, r1d: -100, r2c: -100, r2d: -100, r3c: -100, r3d: -100});

type Q3At = {q: number; koala: number; before: number; meio: number; give: number};
const NO3: Q3At = {q: -100, koala: -100, before: -100, meio: -100, give: -100};
const Q3Q = (t: Q3At) => qCheck([
	{text: "A koala's body cells each have 16 chromosomes.", at: t.koala},
	{text: "Before its DNA is copied, a cell in a koala's testis holds 16 chromosomes and about 7.0 picograms (pg) of DNA.", at: t.before},
	{text: 'It then makes sperm by meiosis. Assume no mistakes in division. (1 pg is a millionth of a millionth of a gram.)', at: t.meio},
	{text: 'Give the number of chromosomes and the mass of DNA in this cell (a) in prophase I, (b) in each cell after meiosis I and (c) in each sperm cell.', at: t.give, para: true, weight: 650},
], ['holds 16 chromosomes', 'about 7.0 picograms', 'makes sperm by meiosis'].map(phrase => ({phrase, at: 1e9})));
Q3Q(NO3);
const Q3Head: React.FC<{a?: Q3At; m?: Record<string, number>}> = ({a, m = {}}) => {
	const f = useCurrentFrame();
	const t = a ?? NO3;
	return (
		<g>
			<TaskLine text={TASK3} at={a ? 6 : -100} size={50} />
			<HscTag at={a ? 10 : -100} />
			<Badge text="Meiosis: counts" at={t.q + 10} />
			<PlateB p={PLG.koala} cx={206} cy={312} w={220} o={prog(f, t.koala, 14)} />
			<Note x={340} y={414} text="koala" at={t.koala + 6} size={34} color={INK_SOFT} />
			<QText q={Q3Q(t)} x={120} y={490} w={776} size={30} at={t.koala} markAt={m} />
		</g>
	);
};

// ---------- chromosomes: 8 homologous pairs (plum and teal) ----------
const CY = 790;
const BIG = {cx: 1400, rx: 230, ry: 175};
const DAU = [{cx: 1180}, {cx: 1620}];
const FOUR = [1060, 1280, 1500, 1720];
type Pt = [number, number];
const S0 = (j: number, h: number): Pt => [BIG.cx - 175 + j * 50, CY + (h ? 44 : -44)];
const S1 = (j: number, h: number): Pt => [BIG.cx + (h ? 26 : -26), CY - 154 + j * 44];
/** Meiosis I: one homologue of each pair to each cell (left gets plum of pairs 0 to 3 and teal of pairs 4 to 7). */
const dauOf = (j: number, h: number) => (h === (j < 4 ? 0 : 1) ? 0 : 1);
const S2 = (j: number, h: number): Pt => [DAU[dauOf(j, h)].cx - 75 + (j % 4) * 50, CY + (j < 4 ? -46 : 46)];
const S3 = (j: number, h: number, a: number): Pt => [FOUR[dauOf(j, h) * 2 + a] - 60 + (j % 4) * 40, CY + (j < 4 ? -38 : 38)];
const colOf = (h: number): Col => (h ? 'T' : 'P');
const mixP = (a: Pt, b: Pt, t: number): Pt => [lerp(a[0], b[0], t), lerp(a[1], b[1], t)];
const PAIRS = Array.from({length: 8}, (_, j) => j);
(() => {
	const n = [0, 1].map(d => PAIRS.flatMap(j => [0, 1].filter(h => dauOf(j, h) === d)).length);
	if (n[0] !== 8 || n[1] !== 8) throw new Error('G01 Q3: each cell after meiosis I gets 8 chromosomes');
	if (!PAIRS.every(j => dauOf(j, 0) !== dauOf(j, 1))) throw new Error('G01 Q3: homologues go to different cells');
})();
/** Chromosomes at a stage mix: pos(j, h) for duplicated ones, or singles after meiosis II. */
const Chroms: React.FC<{pos: (j: number, h: number) => Pt; dup: number; s?: number; o?: number; hi?: (j: number, h: number) => number}> = ({pos, dup, s = 0.26, o = 1, hi}) => (
	<g opacity={o}>
		{PAIRS.flatMap(j => [0, 1].map(h => {
			const [x, y] = pos(j, h);
			return <MC key={j + '-' + h} x={x} y={y} kind="M" a={[colOf(h), colOf(h)]} dup={dup} s={s} beads={0} hiA={hi ? hi(j, h) : 0} hiB={hi ? hi(j, h) : 0} />;
		}))}
	</g>
);
const Singles: React.FC<{t: number}> = ({t}) => (
	<g>
		{PAIRS.flatMap(j => [0, 1].flatMap(h => [0, 1].map(a => {
			const [x, y] = mixP(S2(j, h), S3(j, h, a), t);
			const off = (a ? 1 : -1) * 5 * (1 - t);
			return <MC key={`${j}-${h}-${a}`} x={x + off} y={y} kind="M" a={[colOf(h), colOf(h)]} dup={0} s={lerp(0.26, 0.22, t)} beads={0} />;
		})))}
	</g>
);
const RuleChip: React.FC<{x?: number; y: number; text: string; at: number; out?: number; icon: 'dot' | 'arms'}> = ({x = 96, y, text, at, out, icon}) => {
	const w = text.length * 0.4 * 28 * 1.06 + 100;
	return (
		<Fade at={at} out={out}>
			<rect x={x} y={y} width={w} height={56} rx={28} fill={BIO_SOFT} stroke={BIO} strokeWidth={3} />
			{icon === 'dot'
				? <circle cx={x + 38} cy={y + 28} r={10} fill="#fbf0cf" stroke={INK} strokeWidth={3} />
				: <path d={`M${x + 24},${y + 10} L${x + 50},${y + 46} M${x + 50},${y + 10} L${x + 24},${y + 46}`} stroke={CPLUM} strokeWidth={6} strokeLinecap="round" />}
			<Sx x={x + 68} y={y + 38} text={text} size={28} color={BIO} hand at={at} />
		</Fade>
	);
};
const BANK = 'Meiosis I splits the pairs. Meiosis II splits the copies.';

// ---------- 4a. Question 3 (pause) ----------
const KA = cues(sc('q3-question'), {before: 'Before its DNA is copied', q: 'Question three', koala: "A koala's body cells", n16: '16 chromosomes', mass: '7.0 picograms', meio: 'by meiosis', give: 'Give the number', pro: 'in prophase one', after: 'each cell after meiosis one', sperm: 'each sperm cell', pause: 'Pause here'});
export const SceneQ3Question: React.FC = () => {
	const f = useCurrentFrame();
	const h = hold('q3-question');
	return (
		<Overlay>
			<Q3Head a={{q: KA.q, koala: KA.koala, before: KA.before, meio: KA.meio, give: KA.give}} />
			<CountTable at={KA.give} labelsAt={KA.pro} />
			<PCell cx={BIG.cx} cy={CY} rx={BIG.rx} ry={BIG.ry} o={prog(f, KA.meio, 16)} />
			<PauseHold h={h} at={KA.pause} x={980} y={592} cx={1730} cy={690} />
			<CheckStrip labels={CHECKS} title={TRACE} hold={h} />
		</Overlay>
	);
};

// ---------- 4b. Two rules, then the copy ----------
const KB = cues(sc('q3-s-phase'), {two: 'Use two rules', chrom: 'Count the chromosomes', dna: 'count the DNA', before: 'Before prophase one', copied: 'is copied into two sister chromatids', one: 'one centromere', still: 'still has 16 chromosomes', twice: 'twice the DNA', p14: '14 picograms', doubles: 'Copying doubles the DNA'});
export const SceneQ3SPhase: React.FC = () => {
	const f = useCurrentFrame();
	const dup = smooth((f - KB.one + 10) / 26);
	const [rx, ry] = S0(0, 0);
	return (
		<Overlay>
			<Q3Head m={{'holds 16 chromosomes': KB.still, 'about 7.0 picograms': KB.twice}} />
			<CountTable at={-100} vals={VALS({r1c: KB.still + 12, r1d: KB.p14, r2c: 1e6, r2d: 1e6, r3c: 1e6, r3d: 1e6})} />
			<Note x={TB.x + TB.lw + TB.c1 + TB.c2 - 8} y={rowY(0) + 26} text="× 2" size={30} anchor="end" at={KB.p14 + 12} />
			<RuleChip x={980} y={538} text="chromosomes: count centromeres" at={KB.chrom} icon="dot" />
			<RuleChip x={1432} y={538} text="DNA: count chromatids" at={KB.dna} icon="arms" />
			<PCell cx={BIG.cx} cy={CY} rx={BIG.rx} ry={BIG.ry} />
			<Chroms pos={S0} dup={dup} o={prog(f, KB.before - 10, 16)} />
			<Ring cx={rx} cy={ry - 2} rx={26} ry={42} at={KB.one + 22} out={KB.still + 20} />
			<Note x={rx - 40} y={ry - 54} text="one centromere" at={KB.one + 24} out={KB.still + 20} size={28} />
			<AidChip x={96} y={866} text="copying doubles the DNA, not the chromosomes" at={KB.doubles} size={30} />
			<CheckStrip labels={CHECKS} title={TRACE} ticks={{2: [KB.chrom]}} />
		</Overlay>
	);
};

// ---------- 4c. Meiosis I, then meiosis II ----------
const KC = cues(sc('q3-divisions'), {m1: 'Meiosis one separates', hom: 'homologous pairs', gets8: 'gets 8 chromosomes', both: 'both its chromatids', p7: '7.0 picograms', m2: 'Meiosis two splits', sis: 'sister chromatids', keeps: 'keeps 8 chromosomes', single: 'now single', p35: '3.5 picograms'});
export const SceneQ3Divisions: React.FC = () => {
	const f = useCurrentFrame();
	const t1 = smooth((f - 6) / 34);
	const t2 = smooth((f - KC.hom) / 40);
	const t3 = smooth((f - KC.sis) / 40);
	const bigO = 1 - prog(f, KC.hom + 4, 14);
	const dauO = prog(f, KC.hom + 4, 14) * (1 - prog(f, KC.sis + 4, 14));
	const fourO = prog(f, KC.sis + 4, 14);
	const pos = (j: number, h: number) => (f < KC.hom ? mixP(S0(j, h), S1(j, h), t1) : mixP(S1(j, h), S2(j, h), t2));
	return (
		<Overlay>
			<Q3Head m={{'holds 16 chromosomes': -100, 'about 7.0 picograms': -100, 'makes sperm by meiosis': 4}} />
			<CountTable at={-100} vals={VALS({r1c: -100, r1d: -100, r2c: KC.gets8, r2d: KC.p7, r3c: KC.keeps, r3d: KC.p35})} />
			<RuleChip x={980} y={538} text="chromosomes: count centromeres" at={-100} icon="dot" />
			<RuleChip x={1432} y={538} text="DNA: count chromatids" at={-100} icon="arms" />
			<Sx x={96} y={975} text={BANK} size={32} color={AMBER_INK} hand at={KC.sis + 40} />
			<PCell cx={BIG.cx} cy={CY} rx={BIG.rx} ry={BIG.ry} o={bigO} />
			{DAU.map((d, i) => <PCell key={i} cx={d.cx} cy={CY} rx={190} ry={160} o={dauO} />)}
			{FOUR.map((x, i) => <PCell key={i} cx={x} cy={CY} rx={100} ry={100} o={fourO} />)}
			{f < KC.sis ? <Chroms pos={pos} dup={1} /> : <Singles t={t3} />}
			<GreyTag x={96} y={866} text="each still two chromatids" at={KC.both} out={KC.sis} size={28} />
			<GreyTag x={96} y={866} text="about: X- and Y-carrying sperm differ slightly" at={KC.p35 + 16} size={26} />
			<Sx x={980} y={962} text={`4 sperm × ${fmt(STAGES[2].dna)} = ${fmt(4 * STAGES[2].dna)} pg: all the copied DNA accounted for`} size={30} color={INK_SOFT} hand at={KC.p35 + 46} />
			<CheckStrip labels={CHECKS} title={TRACE} ticks={{2: [-100]}} />
		</Overlay>
	);
};

// ---------- 4d. The classic mistake ----------
const KD = cues(sc('q3-mistake'), {p35: '3.5 picograms', amount: "the sperm cell's amount", after: ['After meiosis one', 2], two: 'still has two chromatids', holds: 'still holds 7.0'});
export const SceneQ3Mistake: React.FC = () => {
	const f = useCurrentFrame();
	const ghost = vis(f, 8, KD.holds);
	const seven = 1 - 0.85 * vis(f, 4, KD.holds);
	const [gx, gy] = cellC(1, 2);
	const vals = ALL_VALS.map(v => (v.r === 1 && v.c === 2 ? {...v, o: seven} : v));
	const [hx, hy] = S2(0, 0);
	return (
		<Overlay>
			<Q3Head m={{'holds 16 chromosomes': -100, 'about 7.0 picograms': -100, 'makes sperm by meiosis': -100}} />
			<CountTable at={-100} vals={vals} />
			<g opacity={ghost}>
				<Sx x={gx} y={gy} text="3.5" size={40} color={INK_SOFT} weight={800} anchor="middle" at={-100} />
			</g>
			{f >= KD.p35 && f < KD.holds + 12 ? <g opacity={1 - prog(f, KD.holds, 12)}><Ring cx={gx} cy={gy - 12} rx={70} ry={30} at={KD.p35} color={RED} width={5} /><path d={`M${gx - 60},${gy + 10} L${gx + 60},${gy - 34}`} stroke={RED} strokeWidth={6} strokeLinecap="round" opacity={prog(f, KD.p35 + 10, 8)} /></g> : null}
			<Sx x={980} y={616} text="still two chromatids each" size={28} color={RED} hand at={KD.p35 + 16} />
			<Ring cx={gx} cy={gy - 12} rx={100} ry={32} at={KD.holds + 4} />
			{DAU.map((d, i) => <PCell key={i} cx={d.cx} cy={CY} rx={190} ry={160} />)}
			<Chroms pos={S2} dup={1} hi={(j, h) => (j === 0 && h === 0 ? vis(f, KD.two, KD.two + 60) : 0)} />
			<Note x={hx - 50} y={hy - 62} text="two chromatids" at={KD.two} out={KD.two + 70} size={28} />
			<Sx x={96} y={975} text={BANK} size={32} color={AMBER_INK} hand at={-100} />
			<Crossed x={96} y={864} text="prophase I: 32 chromosomes (counted chromatids)" at={KD.amount - 20} cross={KD.amount} size={28} />
			<AidChip x={980} y={532} text="Centromeres count the chromosomes; chromatids count the DNA." at={KD.after} size={26} />
			<CheckStrip labels={CHECKS} title={TRACE} ticks={{2: [-100]}} />
		</Overlay>
	);
};
void AMBER; void INK; void BIO;
