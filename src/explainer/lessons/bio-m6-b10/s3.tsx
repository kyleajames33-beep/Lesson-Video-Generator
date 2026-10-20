// M6 B10 scenes 11a to 13: two unseen exam items (Golden Rice: a group that benefits, a concern, and why safety
// evidence would not settle every objection; evaluate AquAdvantage salmon), each kept whole on screen through "Pause
// here to answer." and its 10 s countdown; brief feedback with the givens underlined as they are used and one crossed
// classic mistake (no givens card); the evaluate answer shows criteria, evidence and a verdict. Then the decision rule
// with the handoff, and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Countdown, Heading, MistakeChip, Overlay, Sx} from '../bio-m5-b13/shared';
import {HscTag, NotesBoard, QText, qCheck} from '../bio-m5-g01/board';
import type {QBlock, QMark} from '../bio-m5-g01/board';
import {CardBox} from '../bio-m6-b01/parts';
import {S, hold} from './common';
import {AMBER, AMBER_INK, BIO_INK, CARD, GREY_INK, INK, INK_SOFT, JChip, PLATES, Pl, Strip, prog} from './parts';

const PauseHold: React.FC<{id: string; at: number; x?: number; y?: number; cx?: number; cy?: number}> = ({id, at, x = 140, y = 1048, cx = 1680, cy = 840}) => {
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
const Line: React.FC<{x: number; y: number; text: string; at: number; size?: number; color?: string}> = ({x, y, text, at, size = 34, color = AMBER_INK}) => (
	<Sx x={x} y={y} text={text} size={size} color={color} hand at={at} />
);

// ---------- item 1: Golden Rice ----------
type T1 = {a: number; b: number; qa: number; qb: number};
const STEM1 = (t: T1) => [
	{text: 'Golden Rice has been genetically modified to produce beta-carotene, which the human body converts to vitamin A.', at: t.a},
	{text: 'It was developed to reduce vitamin A deficiency, which can cause blindness in children, in communities where rice is the main food.', at: t.b},
] as QBlock[];
const QA1 = (t: T1) => ({text: '(a) Identify one group that could benefit from Golden Rice and one possible concern about its use. (2 marks)', at: t.qa, para: true, weight: 700} as QBlock);
const QB1 = (t: T1) => ({text: '(b) Explain why evidence that Golden Rice is safe to eat would not settle every objection to its use. (3 marks)', at: t.qb, para: true, weight: 700} as QBlock);
const Q1 = (t: T1, marks: QMark[] = []) => qCheck([...STEM1(t), QA1(t), QB1(t)], marks);
const STRIP1 = (t: T1, marks: QMark[] = []) => qCheck([...STEM1(t), QB1(t)], marks);
const MARKS1 = ['blindness in children', 'rice is the main food', 'safe to eat'];
qCheck(STRIP1({a: 0, b: 0, qa: 0, qb: 0}).blocks, MARKS1.map(phrase => ({phrase, at: 0})));

// ---------- 11a. Attempt one ----------
const KA = cues(S('attempt'), {two: 'Two exam questions now', first: 'First', golden: 'Golden Rice has', developed: 'It was developed', identify: 'Identify one group', explain: 'Then explain', pause: 'Pause here to answer'});
export const SceneAttempt: React.FC = () => {
	const f = useCurrentFrame();
	const t: T1 = {a: KA.golden, b: KA.developed, qa: KA.identify, qb: KA.explain};
	return (
		<>
			<Heading text="Exam question 1" at={KA.two} size={50} />
			<Overlay>
				<HscTag at={KA.two} />
				<CardBox x={100} y={180} w={1720} h={830} at={KA.first - 6} />
				<Pl p={PLATES.rice} cx={1660} cy={300} w={250} o={prog(f, KA.golden, 14)} />
				<QText q={Q1(t)} x={140} y={250} w={1360} size={36} card={false} />
				<AnsBox x={140} y={690} w={1300} h={110} at={KA.identify + 20} label="(a)" />
				<AnsBox x={140} y={815} w={1300} h={180} at={KA.explain + 20} label="(b)" />
				<PauseHold id="attempt" at={KA.pause} />
			</Overlay>
		</>
	);
};

// ---------- 11b. Feedback one ----------
const KB = cues(S('feedback-one'), {children: 'Children in rice-dependent', hardest: 'hits them hardest', concern: 'One concern', enough: 'eat enough', safety: 'Safety is a question', cons: 'consequences', answer: 'evidence can answer', princ: 'principle', seed: 'who controls the seed', isnt: "isn't about safety", saying: 'Saying', mistake: 'the classic mistake'});
const ALL1: T1 = {a: -100, b: -100, qa: -100, qb: -100};
export const SceneFeedbackOne: React.FC = () => {
	const ROWS: [string, string, number][] = [['safe to eat?', 'consequences: evidence can answer', KB.cons], ['acceptable to modify crops at all?', 'principle', KB.princ], ['who controls the seed?', 'distribution', KB.seed]];
	return (
		<>
			<Heading text="Safety answers one kind of question" at={4} size={50} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={180} w={1720} h={170} at={-100} />
				<QText q={STRIP1(ALL1, [{phrase: MARKS1[0], at: KB.children + 6}, {phrase: MARKS1[1], at: KB.children + 22}, {phrase: MARKS1[2], at: KB.safety}])} x={140} y={232} w={2400} size={36} card={false} s={0.66} />
				<AnsBox x={100} y={385} w={1720} h={150} at={-100} label="(a)" />
				<Line x={200} y={440} text="benefit: children in communities that rely on rice (vitamin A deficiency hits them hardest)" at={KB.children + 10} size={34} />
				<Line x={200} y={500} text="concern: whether it is grown and eaten enough" at={KB.enough} size={34} />
				<AnsBox x={100} y={555} w={1720} h={300} at={-100} label="(b)" />
				{ROWS.map(([q, a, at], i) => (
					<g key={i}>
						<Sx x={200} y={612 + i * 62} text={q} size={34} color={INK} hand at={at} />
						<Sx x={860} y={612 + i * 62} text={'→  ' + a} size={34} color={AMBER_INK} hand at={at + 8} />
					</g>
				))}
				<Line x={200} y={812} text="so safety evidence does not settle objections of principle or distribution" at={KB.isnt} size={34} color={BIO_INK} />
				<MistakeChip x={140} y={890} text="it's safe, so there's nothing to object to" at={KB.saying} cross={KB.mistake} size={32} />
				{void KB.hardest}{void KB.concern}{void KB.answer}
			</Overlay>
		</>
	);
};

// ---------- item 2: AquAdvantage salmon ----------
type T2 = {a: number; b: number; c: number; d: number};
const STEM2 = (t: T2) => [
	{text: 'AquAdvantage salmon are Atlantic salmon that carry a growth hormone gene from Chinook salmon, together with a DNA switch from another fish, so they reach market size faster than non-modified Atlantic salmon.', at: t.a},
	{text: 'They are produced as all-female fish that are effectively sterile.', at: t.b},
	{text: 'They were raised in secure land-based tanks.', at: t.c},
] as QBlock[];
const Q2 = (t: T2, marks: QMark[] = []) => qCheck([...STEM2(t), {text: 'Evaluate the use of this biotechnology. In your answer, refer to a benefit, a risk and the groups affected. (5 marks)', at: t.d, para: true, weight: 700}], marks);
const S2 = (t: T2, marks: QMark[] = []) => qCheck(STEM2(t), marks);
const MARKS2 = ['reach market size faster', 'effectively sterile', 'secure land-based tanks'];
qCheck(S2({a: 0, b: 0, c: 0, d: 0}).blocks, MARKS2.map(phrase => ({phrase, at: 0})));

// ---------- 11c. Attempt two ----------
const KC = cues(S('attempt-two'), {second: 'Second', aqua: 'AquAdvantage salmon carry', produced: 'They are produced', raised: 'and were raised', evaluate: 'Evaluate the use', pause: 'Pause here to answer'});
export const SceneAttemptTwo: React.FC = () => (
	<>
		<Heading text="Exam question 2" at={KC.second} size={50} />
		<Overlay>
			<HscTag at={KC.second} />
			<CardBox x={100} y={180} w={1720} h={830} at={KC.aqua - 6} />
			<QText q={Q2({a: KC.aqua, b: KC.produced, c: KC.raised, d: KC.evaluate})} x={140} y={252} w={1640} size={36} card={false} />
			<AnsBox x={140} y={600} w={1320} h={390} at={KC.evaluate + 20} label="answer" />
			<PauseHold id="attempt-two" at={KC.pause} cy={800} />
		</Overlay>
	</>
);

// ---------- 11d. Feedback two ----------
const KD = cues(S('feedback-two'), {fish: 'Fish farmers benefit', sooner: 'reach market sooner', escape: 'escape', breeding: 'breeding with wild', eff: 'Effective sterility', unlikely: 'very unlikely', protects: 'protects wild salmon', welfare: 'welfare', justified: 'justified under these controls', listing: 'Listing', mistake: 'the classic mistake'});
const ALL2: T2 = {a: -100, b: -100, c: -100, d: -100};
const MC = [{x: 140, w: 540}, {x: 710, w: 560}, {x: 1300, w: 520}];
export const SceneFeedbackTwo: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Heading text="Criteria, evidence, verdict" at={4} size={50} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={180} w={1720} h={160} at={-100} />
				<QText q={S2(ALL2, [{phrase: MARKS2[0], at: KD.sooner}, {phrase: MARKS2[1], at: KD.unlikely}, {phrase: MARKS2[2], at: KD.unlikely + 14}])} x={140} y={230} w={2500} size={36} card={false} s={0.62} />
				{['benefit', 'harm or risk', "the fish's welfare"].map((h, i) => (
					<g key={h} opacity={prog(f, i === 0 ? KD.sooner - 10 : i === 1 ? KD.escape - 6 : KD.welfare - 6, 12)}>
						<Sx x={MC[i].x + 6} y={408} text={h} size={36} color={i === 2 ? BIO_INK : INK} weight={800} />
						<line x1={MC[i].x} y1={424} x2={MC[i].x + MC[i].w - 20} y2={424} stroke={i === 2 ? BIO_INK : INK_SOFT} strokeWidth={3} />
					</g>
				))}
				<JChip col={MC[0]} y={446} lines={['faster growth: to market sooner']} kind="benefit" o={prog(f, KD.sooner, 12)} lit={1 - prog(f, KD.escape, 10)} />
				<Sx x={MC[0].x + 10} y={548} text="who: fish farmers" size={30} color={GREY_INK} hand at={KD.sooner + 14} />
				<JChip col={MC[1]} y={446} lines={['escape, and breeding', 'with wild salmon']} kind="harm" o={prog(f, KD.escape, 12)} lit={1 - prog(f, KD.welfare, 10)} />
				<Sx x={MC[1].x + 10} y={590} text="reduced by: sterility, land tanks" size={32} color={AMBER_INK} hand at={KD.unlikely} />
				<Sx x={MC[1].x + 10} y={636} text="who: wild salmon, people who fish" size={30} color={GREY_INK} hand at={KD.protects} />
				<JChip col={MC[2]} y={446} lines={["check the fish's health", 'and welfare']} kind="harm" o={prog(f, KD.welfare, 12)} lit={1 - prog(f, KD.justified, 10)} />
				<g opacity={prog(f, KD.justified, 12)}>
					<rect x={140} y={690} width={1680} height={130} rx={22} fill="#fff3d9" stroke={AMBER} strokeWidth={4} />
					<Sx x={170} y={744} text="Verdict: justified, with effective sterility and land tanks;" size={42} color={INK} hand />
					<Sx x={170} y={798} text="welfare must be checked" size={42} color={INK} hand />
				</g>
				<MistakeChip x={140} y={870} text="a list of pros and cons, no verdict" at={KD.listing} cross={KD.mistake} size={32} />
				{void KD.fish}{void KD.breeding}{void KD.eff}{void CARD}
			</Overlay>
		</>
	);
};

// ---------- 12. Decision rule and handoff ----------
const KE = cues(S('decision-rule'), {so: 'So to judge', benefit: 'name a concrete benefit', harm: 'a concrete harm', animal: 'for an animal', check: 'Check what the evidence', kind: 'say which kind', verdict: 'end with a verdict', next: 'Next, where'});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const STEPS = [
		{at: KE.benefit, t: 'benefit + who gets it'},
		{at: KE.harm, t: 'harm or risk + who carries it'},
		{at: KE.animal, t: 'animal? its welfare', blue: true},
		{at: KE.check, t: 'check the evidence; which kind of question?'},
		{at: KE.verdict, t: 'verdict + condition'},
	];
	return (
		<>
			<Heading text="To judge any biotechnology" at={KE.so} size={56} />
			<Overlay>
				{STEPS.map((s, i) => (
					<g key={i} opacity={prog(f, s.at, 14)}>
						<rect x={140} y={225 + i * 118} width={1180} height={94} rx={22} fill={CARD} stroke={s.blue ? BIO_INK : AMBER} strokeWidth={3.5} />
						<Sx x={190} y={286 + i * 118} text={`${i + 1}`} size={44} color={AMBER_INK} weight={800} />
						<Sx x={250} y={286 + i * 118} text={s.t} size={46} color={s.blue ? BIO_INK : INK} hand />
					</g>
				))}
				<g opacity={prog(f, KE.next, 14)}>
					<rect x={760} y={850} width={1060} height={96} rx={48} fill={CARD} stroke={AMBER} strokeWidth={3.5} />
					<Strip cx={880} y={884} n={5} pitch={22} gap={26} ins={prog(f, KE.next + 30, 12)} i0={2} i1={2} />
					<Sx x={1000} y={912} text="Next: future directions in biotechnology" size={40} color={INK} hand />
				</g>
				{void KE.kind}{void AMBER}
			</Overlay>
		</>
	);
};

// ---------- 13. Key notes ----------
const NOTES = [
	'Judge a biotechnology with a concrete benefit, a concrete harm or risk, and who gets each (stakeholders: people, animals or ecosystems affected). "It works" is not a judgement.',
	'Bt cotton (Australia): far fewer insecticide sprays (about 85% less, with better pest management, CSIRO), benefiting growers, workers and beneficial insects. Risks: resistance by natural selection, managed with non-Bt refuges; a licence fee each season; a monoculture remains.',
	'Animal cases add the animal\'s own welfare, the embryos and surrogates used, and objections in principle. Hornless dairy cattle: no painful dehorning, but checks later found unintended bacterial DNA beside the edit in one bull, inherited by some of his calves.',
	'Three kinds of question: consequences (evidence can answer), distribution (who gains and pays: policy), principle (is it acceptable at all: evidence cannot settle).',
	'Evaluate: end with a verdict, its main reason and any condition.',
];
export const SceneNotes: React.FC = () => (
	<NotesBoard notes={NOTES} aid="Who benefits? Who carries the risk? Who decides whether it's used? What happens to biodiversity?" tag="animal case: and what happens to the animal itself" size={29} aidTop={720} />
);
