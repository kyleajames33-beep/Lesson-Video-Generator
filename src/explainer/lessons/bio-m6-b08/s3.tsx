// M6 B08 scenes 9a to 11: two unseen exam items (skinks after a cyclone: 4 / 20 = 0.2, a bottleneck; a conservation
// plan: gene flow against mutation), each kept whole on screen through "Pause here to answer." and its 10 s
// countdown, brief feedback with the givens underlined as they are used and one crossed classic mistake (no givens
// card), the decision rule with the handoff, and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Countdown, Heading, MistakeChip, Overlay, Sx} from '../bio-m5-b13/shared';
import {HscTag, NotesBoard, QText, qCheck} from '../bio-m5-g01/board';
import type {QBlock, QMark} from '../bio-m5-g01/board';
import {CardBox} from '../bio-m6-b01/parts';
import {Brace, GreyCross, TickG} from '../bio-m6-b07/parts';
import {S, hold} from './common';
import {AMBER, AMBER_INK, BIO_INK, FreqBar, INK, INK_SOFT, PoolBasin, Rg, fmt, prog, slotsOf, vis} from './parts';
import type {RK} from './parts';

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
const Line: React.FC<{x: number; y: number; text: string; at: number; size?: number; color?: string}> = ({x, y, text, at, size = 32, color = AMBER_INK}) => (
	<Sx x={x} y={y} text={text} size={size} color={color} hand at={at} />
);

// ---------- item 1: skinks ----------
type T1 = {a: number; b: number; c: number; d: number; e: number};
const STEM1 = (t: T1, marks: QMark[] = []) => qCheck([
	{text: 'An island population of 500 skinks has allele b at a frequency of 0.1 for a gene on an autosome.', at: t.a},
	{text: 'A cyclone kills all but 10 skinks. Survival during the cyclone was unrelated to this gene.', at: t.b},
	{text: 'The 10 survivors carry 4 copies of allele b.', at: t.c},
] as QBlock[], marks);
const DEM1 = (t: T1) => qCheck([
	{text: '(a) Calculate the frequency of allele b after the cyclone. (1 mark)', at: t.d, weight: 700},
	{text: '(b) Identify the process that changed the frequency of b. Justify your answer. (2 marks)', at: t.e, para: true, weight: 700},
] as QBlock[], []);
const MARKS1 = ['10 survivors', '4 copies of allele b', 'unrelated to this gene'];
qCheck(STEM1({a: 0, b: 0, c: 0, d: 0, e: 0}).blocks, MARKS1.map(phrase => ({phrase, at: 0})));
const COPIES = 10 * 2, PB = 4 / COPIES;
if (COPIES !== 20 || PB !== 0.2) throw new Error('B08 item 1 must be 4 / 20 = 0.2');

// ---------- 9a. Attempt one ----------
const KA = cues(S('attempt'), {two: 'Two exam questions now', island: 'An island population', cyclone: 'A cyclone kills', ten: 'The ten survivors carry', calc: 'Calculate the frequency', then: 'Then identify the process', pause: 'Pause here to answer'});
export const SceneAttempt: React.FC = () => {
	const t: T1 = {a: KA.island, b: KA.cyclone, c: KA.ten, d: KA.calc, e: KA.then};
	return (
		<>
			<Heading text="Exam question 1" at={KA.two} size={50} />
			<Overlay>
				<HscTag at={KA.two} />
				<CardBox x={100} y={180} w={1720} h={830} at={KA.island - 6} />
				<QText q={STEM1(t)} x={140} y={244} w={1640} size={36} card={false} />
				<QText q={DEM1(t)} x={140} y={440} w={1640} size={34} card={false} />
				<AnsBox x={140} y={600} w={1300} h={110} at={KA.calc + 16} label="(a)" />
				<AnsBox x={140} y={730} w={1300} h={250} at={KA.then + 20} label="(b)" />
				<PauseHold id="attempt" at={KA.pause} />
			</Overlay>
		</>
	);
};

// ---------- 9b. Feedback one ----------
const KB = cues(S('feedback-one'), {ten: 'Ten skinks carry twenty copies', four: 'four out of twenty', point: 'zero point two', double: 'double what it was', survival: 'Survival had nothing', only: 'only ten survived', bottleneck: 'a bottleneck', because: 'because the survivors', saying: 'Saying b increased', mistake: 'the classic mistake'});
const ALL1: T1 = {a: -100, b: -100, c: -100, d: -100, e: -100};
const SK: RK[] = Array.from({length: 20}, (_, i) => ([2, 7, 11, 16].includes(i) ? 'B' : 'A'));
if (SK.filter(k => k === 'B').length / SK.length !== PB) throw new Error('B08 feedback basin must match 4 / 20');
export const SceneFeedbackOne: React.FC = () => {
	const f = useCurrentFrame();
	const B = {x: 150, y: 480, w: 480, h: 200};
	const sl = slotsOf(B.x, B.y, B.w, B.h, 20, 7);
	return (
		<>
			<Heading text="Count copies, then ask why" at={4} size={50} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={180} w={1720} h={130} at={-100} />
				<QText q={STEM1(ALL1, [{phrase: MARKS1[0], at: KB.ten + 4}, {phrase: MARKS1[1], at: KB.four}, {phrase: MARKS1[2], at: KB.survival}])} x={140} y={230} w={2300} size={36} card={false} s={0.7} />
				<PoolBasin x={B.x} y={B.y} w={B.w} h={B.h} o={prog(f, KB.ten, 12)} />
				{SK.map((k, i) => <Rg key={i} x={sl[i][0]} y={sl[i][1]} r={13} k={k === 'B' && f >= KB.four + 10 ? 'B' : f >= KB.ten + 10 ? 'A' : 'ghost'} o={prog(f, KB.ten + 4 + i * 0.8, 8)} glow={k === 'B' ? vis(f, KB.four + 10, KB.four + 50, 10) : 0} />)}
				<Sx x={B.x + B.w / 2} y={B.y + B.h + 70} text="10 × 2 = 20 copies" size={44} color={INK} weight={800} anchor="middle" at={KB.ten + 16} />
				<g opacity={prog(f, KB.double, 12)}>
					<FreqBar x={180} y={830} w={300} p={0.1} text="0.1 before" size={30} />
					<FreqBar x={180} y={890} w={300} p={0.2} text="0.2 after" size={30} color={AMBER} />
				</g>
				<AnsBox x={720} y={430} w={1100} h={110} at={-100} label="(a)" />
				<Line x={800} y={500} text={`4 / ${COPIES} = ${fmt(PB)}`} at={KB.four} size={40} />
				<AnsBox x={720} y={560} w={1100} h={280} at={-100} label="(b)" />
				<Line x={800} y={612} text="genetic drift (a bottleneck):" at={KB.bottleneck} />
				<Line x={800} y={656} text="survival was random with respect to this gene," at={KB.bottleneck + 30} />
				<Line x={800} y={700} text="and 10 survivors are a small sample," at={KB.because} />
				<Line x={800} y={744} text="so the frequency changed by chance" at={KB.because + 26} />
				<MistakeChip x={720} y={900} text="b rose because it helped survival (selection)" at={KB.saying} cross={KB.mistake} size={32} />
				{void KB.point}{void KB.only}{void BIO_INK}
			</Overlay>
		</>
	);
};

// ---------- item 2: possums ----------
type T2 = {a: number; b: number; c: number};
const Q2 = (t: T2, marks: QMark[] = []) => qCheck([
	{text: 'A small, isolated population of 30 possums has lost much of its genetic variation.', at: t.a},
	{text: 'A conservation team plans to bring in 10 possums from a large population of the same species.', at: t.b},
	{text: 'Evaluate this plan, compared with leaving the population isolated and relying on mutation to restore its genetic variation. (4 marks)', at: t.c, para: true, weight: 700},
] as QBlock[], marks);
const MARKS2 = ['bring in 10 possums from a large population', 'relying on mutation', 'small, isolated population of 30'];
qCheck(Q2({a: 0, b: 0, c: 0}).blocks, MARKS2.map(phrase => ({phrase, at: 0})));

// ---------- 9c. Attempt two ----------
const KC = cues(S('attempt-two'), {second: 'Second', small: 'A small isolated population', team: 'A conservation team', evaluate: 'Evaluate this plan', pause: 'Pause here to answer'});
export const SceneAttemptTwo: React.FC = () => (
	<>
		<Heading text="Exam question 2" at={KC.second} size={50} />
		<Overlay>
			<HscTag at={KC.second} />
			<CardBox x={100} y={180} w={1720} h={830} at={KC.small - 6} />
			<QText q={Q2({a: KC.small, b: KC.team, c: KC.evaluate})} x={140} y={252} w={1640} size={38} card={false} />
			<AnsBox x={140} y={560} w={1320} h={420} at={KC.evaluate + 20} label="answer" />
			<PauseHold id="attempt-two" at={KC.pause} cy={760} />
		</Overlay>
	</>
);

// ---------- 9d. Feedback two ----------
const KD = cues(S('feedback-two'), {bringing: 'Bringing in possums', flow: 'is gene flow', adds: 'It adds many existing alleles', rises: 'variation rises', mutation: 'Mutation adds new alleles', one: 'one copy at a time', thirty: 'in only thirty possums', far: 'far better', although: 'although the added alleles', thinking: 'Thinking gene flow creates', mistake: 'the classic mistake'});
export const SceneFeedbackTwo: React.FC = () => {
	const f = useCurrentFrame();
	const ROW = {x: 140, y1: 470, y2: 670};
	return (
		<>
			<Heading text="Gene flow is faster than mutation" at={4} size={50} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={180} w={1720} h={150} at={-100} />
				<QText q={Q2({a: -100, b: -100, c: -100}, [{phrase: MARKS2[0], at: KD.flow}, {phrase: MARKS2[1], at: KD.one}, {phrase: MARKS2[2], at: KD.thirty}])} x={140} y={224} w={2300} size={36} card={false} s={0.7} />
				<CardBox x={ROW.x - 30} y={ROW.y1 - 66} w={1710} h={160} at={KD.flow} />
				<Sx x={ROW.x} y={ROW.y1} text="bring in 10 possums" size={34} color={INK} weight={700} at={KD.flow} />
				<Line x={ROW.x + 400} y={ROW.y1} text="gene flow: many existing alleles added at once;" at={KD.adds} size={36} />
				<Line x={ROW.x + 400} y={ROW.y1 + 48} text="variation rises within a generation" at={KD.rises} size={36} />
				<g opacity={prog(f, KD.adds, 12)}>
					{[0, 1, 2, 3, 4].map(k => <Rg key={k} x={ROW.x + 30 + k * 34} y={ROW.y1 + 48} r={12} k={k > 1 ? 'flow' : 'A'} o={k > 1 ? prog(f, KD.adds + 10 + k * 6, 8) : 1} />)}
				</g>
				<CardBox x={ROW.x - 30} y={ROW.y2 - 66} w={1710} h={160} at={KD.mutation} />
				<Sx x={ROW.x} y={ROW.y2} text="stay isolated," size={34} color={INK} weight={700} at={KD.mutation} />
				<Sx x={ROW.x} y={ROW.y2 + 44} text="rely on mutation" size={34} color={INK} weight={700} at={KD.mutation} />
				<Line x={ROW.x + 400} y={ROW.y2} text="mutation: new alleles one copy at a time, very slow;" at={KD.one} size={36} />
				<Line x={ROW.x + 400} y={ROW.y2 + 48} text="drift in 30 possums loses most of them" at={KD.thirty} size={36} />
				<Sx x={ROW.x} y={880} text="Verdict: the plan is much better; the new alleles still face drift, so monitor." size={38} color={INK} hand at={KD.far} />
				<MistakeChip x={ROW.x} y={930} text="gene flow creates new alleles" at={KD.thinking} cross={KD.mistake} size={32} />
				{void KD.bringing}{void KD.although}{void AMBER}
			</Overlay>
		</>
	);
};

// ---------- 10. Decision rule and handoff ----------
const KE = cues(S('decision-rule'), {so: 'So when a question shows', ask: 'ask what happened', brand: 'brand-new allele appear', mut: "That's mutation", arrive: 'alleles arrive or leave', flow: "That's gene flow", chance: 'change by chance', drift: "That's drift", because: 'change because carriers', selection: "That's selection", judge: 'Then judge which', next: 'Next, what counts'});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const wob = Math.sin(f * 0.2) * 0.2;
	const STEPS = [
		{at: KE.brand, ans: KE.mut, q: 'a brand-new allele appeared?', a: 'mutation', icon: <Rg x={0} y={0} r={20} k="new" />},
		{at: KE.arrive, ans: KE.flow, q: 'alleles arrived or left with migrants?', a: 'gene flow', icon: <Rg x={0} y={0} r={20} k="flow" />},
		{at: KE.chance, ans: KE.drift, q: 'changed by chance, small group?', a: 'drift', icon: <g><rect x={-30} y={-8} width={60} height={16} rx={8} fill="#efe6d4" /><rect x={-30} y={-8} width={30 + 20 * wob} height={16} rx={8} fill="#8a8f96" /></g>},
		{at: KE.because, ans: KE.selection, q: 'carriers survive or breed better?', a: 'selection', icon: <path d="M-28,16 L-8,4 L8,-2 L28,-18" fill="none" stroke="#c4632e" strokeWidth={5} strokeLinecap="round" />},
	];
	return (
		<>
			<Heading text="What happened to the alleles?" at={KE.so} size={56} />
			<Overlay>
				{STEPS.map((s, i) => (
					<g key={i} opacity={prog(f, s.at, 14)}>
						<CardBox x={110} y={220 + i * 140} w={1300} h={116} at={-100} stroke={AMBER} sw={3} />
						<g transform={`translate(180,${278 + i * 140})`}>{s.icon}</g>
						<Sx x={240} y={292 + i * 140} text={s.q} size={44} color={INK} hand />
						<Sx x={1020} y={292 + i * 140} text={'→ ' + s.a} size={48} color={AMBER_INK} hand at={s.ans} />
					</g>
				))}
				<g opacity={prog(f, KE.judge, 14)}>
					<path d="M1440,230 L1470,230 L1470,770 L1440,770" fill="none" stroke={AMBER_INK} strokeWidth={4} />
					<Sx x={1500} y={480} text="then judge:" size={44} color={AMBER_INK} hand />
					<Sx x={1500} y={540} text="size, isolation," size={40} color={INK} hand />
					<Sx x={1500} y={590} text="time" size={40} color={INK} hand />
				</g>
				<g opacity={prog(f, KE.next, 14)}>
					<CardBox x={980} y={830} w={840} h={150} at={-100} stroke={AMBER} sw={3.5} />
					<path transform="translate(1040,860) scale(0.55) translate(-1030,-845)" d="M1030,940 L1030,895 C1030,860 1060,850 1080,858 C1095,840 1130,840 1145,858 C1170,850 1195,865 1195,895 L1195,940 Z" fill="#f3dfb8" stroke={INK_SOFT} strokeWidth={3} strokeLinejoin="round" />
					<Sx x={1160} y={920} text="Next: what counts as biotechnology?" size={36} color={INK} hand />
				</g>
				{void KE.ask}{void Brace}{void GreyCross}{void TickG}
			</Overlay>
		</>
	);
};

// ---------- 11. Key notes ----------
const NOTES = [
	'Gene pool: all the alleles in a population. Allele frequency = copies of that allele ÷ total copies of the gene (two per individual for an autosomal gene).',
	'Genetic drift: a random change in allele frequency, because each generation\'s alleles are a chance sample. Strongest in small populations; it can lose or fix an allele whatever its effect. Bottleneck (a crash to a few survivors) and founder effect (a few individuals start a new population) are drift.',
	'Mutation: the only source of new alleles. Each starts as one copy (1 in 2N), so mutation alone changes a gene pool slowly, and drift often loses new alleles in small populations.',
	'Gene flow: alleles move between populations with migrants that breed. It can add alleles a population lacked and makes populations more alike, but creates no new alleles.',
	'Which matters most depends on the population: drift in small, isolated ones; gene flow where migration is high; mutation over long times. Selection is non-random; drift is random.',
];
export const SceneNotes: React.FC = () => (
	<NotesBoard notes={NOTES} aid="Drift is luck, and luck matters more in small groups." tag="gene flow tends to make populations alike; drift can pull them apart, and so can selection when environments favour different alleles" size={29} aidTop={720} />
);
