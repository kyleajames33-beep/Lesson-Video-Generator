// M6 B07 scenes 10a to 12: two unseen exam items (a new recessive allele n traced over two generations; evaluate the
// claim that mutation is not important), each kept whole on screen through "Pause here to answer." and its 10 s
// countdown, brief feedback with the givens underlined as they are used and one crossed classic mistake (no givens
// card), the decision rule with the handoff, and the key notes. Punnett squares are letters only and computed.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Countdown, Heading, MistakeChip, Overlay, Sx} from '../bio-m5-b13/shared';
import {HscTag, NotesBoard, QText, qCheck} from '../bio-m5-g01/board';
import type {QBlock, QMark} from '../bio-m5-g01/board';
import {AlleleRing, CardBox, PoolBasin} from '../bio-m6-b01/parts';
import {S, hold} from './common';
import {ABead, AMBER, AMBER_INK, BIO_INK, Chrom, GreyCross, INK, INK_SOFT, InkCell, Punnett, TickG, geno, prog, vis} from './parts';

/** "Pause here to answer." with the 10 s countdown ring. */
const PauseHold: React.FC<{id: string; at: number; x?: number; y?: number; cx?: number; cy?: number}> = ({id, at, x = 140, y = 1048, cx = 1660, cy = 800}) => {
	const h = hold(id);
	return (
		<>
			<Sx x={x} y={y} text="Pause here to answer." size={48} color={AMBER_INK} hand at={at} />
			<Countdown start={h.startFrame} end={h.endFrame} x={cx} y={cy} r={60} />
		</>
	);
};
const AnsBox: React.FC<{x: number; y: number; w: number; h: number; at: number; label: string}> = ({x, y, w, h, at, label}) => (
	<>
		<CardBox x={x} y={y} w={w} h={h} at={at} dash="10 7" />
		<Sx x={x + 22} y={y + 40} text={label} size={26} color={INK_SOFT} weight={700} at={at} />
	</>
);
const Line: React.FC<{x: number; y: number; text: string; at: number; size?: number; color?: string}> = ({x, y, text, at, size = 30, color = AMBER_INK}) => (
	<Sx x={x} y={y} text={text} size={size} color={color} hand at={at} />
);

// ---------- item 1 ----------
type T1 = {a: number; b: number; c: number; d: number; e: number};
const STEM1 = (t: T1, marks: QMark[] = []) => qCheck([
	{text: 'A mutation in one sperm cell produces a new recessive allele, n, of a gene on an autosome (a numbered chromosome).', at: t.a},
	{text: 'This sperm fertilises an egg. The animal that develops has one copy of n in every cell.', at: t.b},
	{text: 'It later mates with an animal that has no copies of n.', at: t.c},
] as QBlock[], marks);
const DEM1 = (t: T1) => qCheck([
	{text: '(a) What fraction of their offspring would be expected to carry n? (1 mark)', at: t.d, weight: 700},
	{text: '(b) Explain how an animal with two copies of n could arise in a later generation. Refer to meiosis and fertilisation. (3 marks)', at: t.e, para: true, weight: 700},
] as QBlock[], []);
const MARKS1 = ['one copy of n in every cell', 'no copies of n'];
qCheck(STEM1({a: 0, b: 0, c: 0, d: 0, e: 0}).blocks, MARKS1.map(phrase => ({phrase, at: 0})));
// computed crosses: carrier x non-carrier, carrier x carrier
const cross = (p: [string, string], q: [string, string]) => p.flatMap(a => q.map(b => geno(a, b)));
const C1 = cross(['N', 'n'], ['N', 'N']);
const C2 = cross(['N', 'n'], ['N', 'n']);
if (C1.filter(g => g.includes('n')).length / C1.length !== 0.5 || C1.includes('nn')) throw new Error('B07 item 1 (a) must be 1/2 carriers, no nn');
if (C2.filter(g => g === 'nn').length / C2.length !== 0.25) throw new Error('B07 item 1 (b) must be 1/4 nn');

// ---------- 10a. Attempt one ----------
const KA = cues(S('attempt'), {two: 'Two exam questions now', mutation: 'A mutation in one sperm', that: 'That sperm fertilises', later: 'It later mates', what: 'What fraction', then: 'Then explain how', pause: 'Pause here to answer'});
export const SceneAttempt: React.FC = () => {
	const t: T1 = {a: KA.mutation, b: KA.that, c: KA.later, d: KA.what, e: KA.then};
	return (
		<>
			<Heading text="Exam question 1" at={KA.two} size={50} />
			<Overlay>
				<HscTag at={KA.two} />
				<CardBox x={100} y={180} w={1720} h={830} at={KA.mutation - 6} />
				<QText q={STEM1(t)} x={140} y={242} w={1640} size={34} card={false} />
				<QText q={DEM1(t)} x={140} y={430} w={1640} size={33} card={false} />
				<AnsBox x={140} y={600} w={1300} h={100} at={KA.what + 20} label="(a)" />
				<AnsBox x={140} y={720} w={1300} h={260} at={KA.then + 30} label="(b)" />
				<PauseHold id="attempt" at={KA.pause} />
			</Overlay>
		</>
	);
};

// ---------- 10b. Feedback one ----------
const KB = cues(S('feedback-one'), {carrier: 'The carrier is', meiosis: 'Meiosis separates', half: 'half its gametes carry n', about: 'So about half', none: 'none has two', later: 'if two carriers mate', joins: 'fertilisation joins two', four: 'one offspring in four', saying: 'Saying every offspring', mistake: 'the classic mistake'});
const ALL1: T1 = {a: -100, b: -100, c: -100, d: -100, e: -100};
const Gam: React.FC<{x: number; y: number; l: string; at: number}> = ({x, y, l, at}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	return o > 0.01 ? <g opacity={o}><InkCell cx={x} cy={y} rx={34} /><text x={x} y={y + 13} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 36, fontStyle: 'italic'}} fill={INK}>{l}</text></g> : null;
};
export const SceneFeedbackOne: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Heading text="Half the gametes, then one in four" at={4} size={50} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={180} w={1720} h={130} at={-100} />
				<QText q={STEM1(ALL1, [{phrase: MARKS1[0], at: KB.carrier + 4}, {phrase: MARKS1[1], at: KB.about}])} x={140} y={228} w={2280} size={36} card={false} s={0.7} />
				{/* working */}
				<Sx x={150} y={480} text="Nn" size={52} color={INK} weight={800} at={KB.carrier + 10} />
				<Sx x={150} y={520} text="carrier" size={28} color={AMBER_INK} hand at={KB.carrier + 16} />
				<Gam x={330} y={466} l="N" at={KB.half} />
				<Gam x={420} y={466} l="n" at={KB.half + 6} />
				<Sx x={500} y={478} text="half the gametes carry n" size={30} color={INK_SOFT} hand at={KB.half + 14} out={KB.later} />
				<Sx x={170} y={590} text="Nn × NN" size={34} color={INK} weight={700} at={KB.half + 20} />
				<Punnett x={220} y={660} c={92} top={['N', 'n']} side={['N', 'N']} at={KB.half + 24} size={36} />
				<Sx x={560} y={590} text="Nn × Nn" size={34} color={INK} weight={700} at={KB.later} />
				<Punnett x={610} y={660} c={92} top={['N', 'n']} side={['N', 'n']} at={KB.later + 4} size={36} hot={(i, j) => (i === 1 && j === 1 ? prog(f, KB.four, 12) : 0)} />
				{/* the model answer */}
				<AnsBox x={900} y={420} w={920} h={110} at={-100} label="(a)" />
				<Line x={970} y={488} text="1/2 carry one copy (Nn); none is nn" at={KB.about + 4} size={34} />
				<AnsBox x={900} y={550} w={920} h={300} at={-100} label="(b)" />
				<Line x={970} y={600} text="two carriers (Nn) mate in a later generation;" at={KB.later + 10} />
				<Line x={970} y={644} text="meiosis in each carrier separates the partners," at={KB.later + 40} />
				<Line x={970} y={688} text="so half its gametes carry n;" at={KB.later + 60} />
				<Line x={970} y={732} text="fertilisation joins two n gametes at random:" at={KB.joins} />
				<Line x={970} y={776} text="about 1 in 4 offspring are nn" at={KB.four} />
				<MistakeChip x={150} y={930} text="the parent has n, so every offspring inherits it" at={KB.saying} cross={KB.mistake} size={32} />
				{void KB.meiosis}{void KB.none}{void vis}
			</Overlay>
		</>
	);
};

// ---------- item 2 ----------
const CLAIM = 'A student claims: "Meiosis and fertilisation produce almost all the genetic variation in each generation, so mutation is not important."';
type T2 = {a: number; b: number};
const Q2 = (t: T2, marks: QMark[] = []) => qCheck([
	{text: CLAIM, at: t.a},
	{text: 'Evaluate this claim. (4 marks)', at: t.b, para: true, weight: 700},
] as QBlock[], marks);
const MARKS2 = ['almost all the genetic variation in each generation', 'so mutation is not important'];
qCheck(Q2({a: 0, b: 0}).blocks, MARKS2.map(phrase => ({phrase, at: 0})));

// ---------- 10c. Attempt two ----------
const KC = cues(S('attempt-two'), {second: 'Second', claims: 'A student claims', evaluate: 'Evaluate this claim', pause: 'Pause here to answer'});
export const SceneAttemptTwo: React.FC = () => (
	<>
		<Heading text="Exam question 2" at={KC.second} size={50} />
		<Overlay>
			<HscTag at={KC.second} />
			<CardBox x={100} y={180} w={1720} h={830} at={KC.claims - 6} />
			<QText q={Q2({a: KC.claims, b: KC.evaluate})} x={140} y={256} w={1640} size={40} card={false} />
			<AnsBox x={140} y={480} w={1320} h={480} at={KC.evaluate + 14} label="answer" />
			<PauseHold id="attempt-two" at={KC.pause} cy={720} />
		</Overlay>
	</>
);

// ---------- 10d. Feedback two ----------
const KD = cues(S('feedback-two'), {first: 'The first part is right', one: 'In one generation', but: 'But the conclusion is wrong', resh: 'Reshuffling only recombines', ultimate: 'ultimate source', asexual: 'asexual organisms', partly: 'partly correct', saying: 'Saying crossing over', mistake: 'the classic mistake'});
export const SceneFeedbackTwo: React.FC = () => {
	const ROW = {x: 140, y1: 470, y2: 650, w: 1680};
	return (
		<>
			<Heading text="Right for one generation, wrong overall" at={4} size={50} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={180} w={1720} h={190} at={-100} />
				<QText q={Q2({a: -100, b: -100}, [{phrase: MARKS2[0], at: KD.first + 4}, {phrase: MARKS2[1], at: KD.but + 4}])} x={140} y={238} w={2300} size={40} card={false} s={0.7} />
				<CardBox x={ROW.x - 30} y={ROW.y1 - 66} w={ROW.w + 30} h={150} at={KD.first} />
				<Sx x={ROW.x} y={ROW.y1} text="first part" size={36} color={INK} weight={700} at={KD.first} />
				<TickG x={ROW.x + 230} y={ROW.y1 - 12} at={KD.one} s={36} />
				<Line x={ROW.x + 300} y={ROW.y1} text="correct: in one generation, reshuffling makes nearly all" at={KD.one} size={36} />
				<Line x={ROW.x + 300} y={ROW.y1 + 48} text="the differences between offspring" at={KD.one + 20} size={36} />
				<CardBox x={ROW.x - 30} y={ROW.y2 - 66} w={ROW.w + 30} h={196} at={KD.but} />
				<Sx x={ROW.x} y={ROW.y2} text="conclusion" size={36} color={INK} weight={700} at={KD.but} />
				<GreyCross x={ROW.x + 236} y={ROW.y2 - 12} at={KD.but + 10} s={18} />
				<Line x={ROW.x + 300} y={ROW.y2} text="incorrect: every allele first arose by mutation" at={KD.resh} size={36} />
				<Line x={ROW.x + 300} y={ROW.y2 + 48} text="(the ultimate source); asexual organisms rely on" at={KD.ultimate} size={36} />
				<Line x={ROW.x + 300} y={ROW.y2 + 96} text="mutation and gene transfer" at={KD.asexual} size={36} />
				<Sx x={ROW.x} y={890} text="Verdict: partly correct; mutation is essential over the long term." size={40} color={INK} hand at={KD.partly} />
				<MistakeChip x={ROW.x} y={940} text="crossing over makes new alleles" at={KD.saying} cross={KD.mistake} size={32} />
			</Overlay>
		</>
	);
};

// ---------- 11. Decision rule and handoff ----------
const KE = cues(S('decision-rule'), {so: 'So when a question', sort: 'sort each change', brand: 'brand-new allele', mut: "That's mutation", combo: 'new combination of existing alleles', which: 'say which process', crossing: 'crossing over within', indep: 'independent assortment between', fert: 'or fertilisation joining', next: 'Next, how mutation'});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const lit = (a: number, b: number) => vis(f, a, b, 10);
	const SUB = [
		{at: KE.crossing, out: KE.indep, t: 'crossing over', s: 'within a chromosome'},
		{at: KE.indep, out: KE.fert, t: 'independent assortment', s: 'between chromosomes'},
		{at: KE.fert, out: KE.next, t: 'fertilisation', s: "two parents' gametes"},
	];
	return (
		<>
			<Heading text="Where did the variation come from?" at={KE.so} size={56} />
			<Overlay>
				{/* branch 1 */}
				<g opacity={prog(f, KE.brand, 14)}>
					<CardBox x={110} y={220} w={1700} h={150} at={-100} stroke={AMBER} sw={3.5} />
					<ABead x={200} y={295} l="" r={30} amber />
					<Sx x={260} y={312} text="a brand-new allele?" size={50} color={INK} hand />
					<Sx x={760} y={312} text="→ mutation" size={54} color={AMBER_INK} hand at={KE.mut} />
				</g>
				{/* branch 2 */}
				<g opacity={prog(f, KE.combo, 14)}>
					<CardBox x={110} y={410} w={1700} h={420} at={-100} stroke={AMBER} sw={3.5} />
					<Sx x={160} y={490} text="a new combination of existing alleles?" size={50} color={INK} hand />
					<Sx x={1110} y={490} text="→ say which process:" size={46} color={BIO_INK} hand at={KE.which} />
					{SUB.map((s, i) => {
						const x = 180 + i * 560;
						const l = lit(s.at, s.out);
						return (
							<g key={i} opacity={prog(f, s.at, 12)}>
								<rect x={x - 20} y={540} width={520} height={260} rx={20} fill={l > 0.5 ? '#fff3d9' : '#fffdf8'} stroke={l > 0.5 ? AMBER : 'rgba(60,45,20,0.22)'} strokeWidth={l > 0.5 ? 4 : 2.5} />
								{i === 0 ? (
									<g>
										<Chrom x={395} y={580} L={120} w={30} set="rose" piecesA={[{t0: 0, t1: 0.55, set: 'rose'}, {t0: 0.55, t1: 1, set: 'teal'}]} lociA={[{t: 0.25, l: 'E'}, {t: 0.78, l: 'd', amber: true}]} beadR={12} />
										<Chrom x={445} y={580} L={120} w={30} set="teal" piecesA={[{t0: 0, t1: 0.55, set: 'teal'}, {t0: 0.55, t1: 1, set: 'rose'}]} lociA={[{t: 0.25, l: 'e'}, {t: 0.78, l: 'D'}]} beadR={12} />
									</g>
								) : i === 1 ? (
									<g>
										<Chrom x={900} y={590} L={110} w={30} set="rose" beadR={12} />
										<Chrom x={950} y={600} L={80} w={30} set="teal" beadR={12} />
										<Chrom x={1020} y={590} L={110} w={30} set="teal" beadR={12} />
										<Chrom x={1070} y={600} L={80} w={30} set="rose" beadR={12} />
									</g>
								) : (
									<g>
										<InkCell cx={1500} cy={640} rx={34} />
										<InkCell cx={1580} cy={640} rx={34} />
									</g>
								)}
								<Sx x={x + 240} y={750} text={s.t} size={38} color={l > 0.5 ? AMBER_INK : INK} hand anchor="middle" />
								<Sx x={x + 240} y={786} text={s.s} size={28} color={INK_SOFT} hand anchor="middle" />
							</g>
						);
					})}
				</g>
				<g opacity={prog(f, KE.next, 14)}>
					<CardBox x={980} y={860} w={840} h={150} at={-100} stroke={AMBER} sw={3.5} />
					<PoolBasin x={1010} y={895} w={140} h={80} />
					{[[1045, 925], [1080, 935], [1115, 925], [1060, 955], [1100, 955]].map(([x, y], k) => <AlleleRing key={k} x={x} y={y} r={9} kind={k === 2 ? 'new' : k === 4 ? 'b' : 'a'} />)}
					<Sx x={1180} y={950} text="Next: how a gene pool changes" size={40} color={INK} hand />
				</g>
				{void KE.sort}
			</Overlay>
		</>
	);
};

// ---------- 12. Key notes ----------
const NOTES = [
	'Mutation changes the base sequence and is the only process that makes new alleles. Meiosis (crossing over and independent assortment) and fertilisation (random joining of gametes) make new combinations of existing alleles.',
	'A new allele in a germ-line cell gives a carrier with one copy. Meiosis I separates the partner chromosomes, so half the carrier\'s gametes carry the allele. Two copies need two carriers\' gametes to meet (1 in 4 for two carriers).',
	'In one generation, almost all the differences between offspring come from reshuffling (more than 8 million chromosome combinations per human parent, against about 60 to 70 new mutations per child).',
	'Every allele first arose by mutation: mutation is the ultimate source of variation; meiosis and fertilisation are the immediate source.',
	'Bacteria reproduce asexually, with no meiosis or fertilisation: new variation comes from mutation and gene transfer.',
];
export const SceneNotes: React.FC = () => (
	<NotesBoard notes={NOTES} aid="Mutation prints a new card; meiosis deals the hands; fertilisation puts two hands together." tag="one generation: the dealing; long term: every card was once new" size={30} aidTop={680} />
);
