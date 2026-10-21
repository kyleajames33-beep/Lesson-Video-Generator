// M6 B11 scenes 11a to 13: two unseen exam items (in-body PCSK9 editing: explain the benefit, identify two
// uncertainties; evaluate the headline "CRISPR will soon cure all genetic diseases"), each kept whole on screen through
// "Pause here to answer." and its 10 s countdown; brief feedback with the givens underlined as they are used and one
// crossed classic mistake (no givens card). Then the decision rule with the handoff, and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Countdown, Heading, MistakeChip, Overlay, Sx} from '../bio-m5-b13/shared';
import {HscTag, NotesBoard, QText, qCheck} from '../bio-m5-g01/board';
import type {QBlock, QMark} from '../bio-m5-g01/board';
import {CardBox} from '../bio-m6-b01/parts';
import {S, hold} from './common';
import {TopThumb} from './s1';
import {AMBER, AMBER_INK, BIO_INK, CARD, Cavendish, GREY_INK, INK, INK_SOFT, Ladder, MarkText, Pill, PLATES, Pl, prog} from './parts';

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

// ---------- item 1: in-body editing ----------
type T1 = {a: number; b: number; c: number; d: number; qa: number; qb: number};
const STEM1 = (t: T1) => [
	{text: 'A gene-editing treatment for high blood cholesterol is being tested in small, early-stage human trials.', at: t.a},
	{text: 'The treatment is carried in the blood inside tiny fat particles that are taken up by liver cells.', at: t.b},
	{text: 'It changes one base in the PCSK9 gene, so the gene no longer codes for a working protein.', at: t.c},
	{text: "The PCSK9 protein reduces the liver's ability to remove LDL cholesterol from the blood.", at: t.d},
] as QBlock[];
const QA1 = (t: T1) => ({text: '(a) Explain how this edit could lower the level of LDL cholesterol in the blood. (3 marks)', at: t.qa, para: true, weight: 700} as QBlock);
const QB1 = (t: T1) => ({text: '(b) Identify TWO uncertainties that must be resolved before this becomes a routine treatment. (2 marks)', at: t.qb, para: true, weight: 700} as QBlock);
const Q1 = (t: T1, marks: QMark[] = []) => qCheck([...STEM1(t), QA1(t), QB1(t)], marks);
const STRIP1 = (t: T1, marks: QMark[] = []) => qCheck(STEM1(t), marks);
const MARKS1 = ['no longer codes for a working protein', "reduces the liver's ability to remove LDL", 'small, early-stage human trials', 'liver cells'];
qCheck(STRIP1({a: 0, b: 0, c: 0, d: 0, qa: 0, qb: 0}).blocks, MARKS1.map(phrase => ({phrase, at: 0})));

// ---------- 11a. Attempt one ----------
const KA = cues(S('attempt'), {two: 'Two exam questions now', first: 'First', gene: 'A gene-editing treatment', taken: "It's taken up", changes: 'changes one base', protein: 'That protein reduces', explain: 'Explain how the edit', identify: 'Then identify', pause: 'Pause here to answer'});
export const SceneAttempt: React.FC = () => {
	const t: T1 = {a: KA.gene, b: KA.taken, c: KA.changes, d: KA.protein, qa: KA.explain, qb: KA.identify};
	return (
		<>
			<Heading text="Exam question 1" at={KA.two} size={50} />
			<Overlay>
				<HscTag at={KA.two} />
				<CardBox x={100} y={180} w={1720} h={830} at={KA.first - 6} />
				<QText q={Q1(t)} x={140} y={250} w={1640} size={35} card={false} />
				<AnsBox x={140} y={610} w={1300} h={170} at={KA.explain + 20} label="(a)" />
				<AnsBox x={140} y={800} w={1300} h={190} at={KA.identify + 20} label="(b)" />
				<PauseHold id="attempt" at={KA.pause} cy={845} />
			</Overlay>
		</>
	);
};

// ---------- 11b. Feedback one ----------
const KB = cues(S('feedback-one'), {stops: 'stops liver cells', without: 'Without it', remove: 'remove LDL', falls: 'falls', unc: 'Uncertainties', anywhere: 'anywhere else', safe: 'safe for life', undone: "can't be undone", saying: 'Saying', mistake: 'the classic mistake', body: 'body cells'});
const ALL1: T1 = {a: -100, b: -100, c: -100, d: -100, qa: -100, qb: -100};
export const SceneFeedbackOne: React.FC = () => (
	<>
		<Heading text="How the edit lowers LDL" at={4} size={50} />
		<Overlay>
			<HscTag at={-100} />
			<CardBox x={100} y={180} w={1720} h={150} at={-100} />
			<QText q={STRIP1(ALL1, [{phrase: MARKS1[0], at: KB.stops + 10}, {phrase: MARKS1[1], at: KB.remove}, {phrase: MARKS1[2], at: KB.safe + 10}, {phrase: MARKS1[3], at: KB.body}])} x={140} y={230} w={2440} size={36} card={false} s={0.66} />
			<AnsBox x={100} y={380} w={1720} h={230} at={-100} label="(a)" />
			<Line x={200} y={440} text="no working PCSK9 protein in liver cells" at={KB.stops + 14} />
			<Line x={200} y={500} text="→  liver keeps its ability to remove LDL" at={KB.remove + 6} />
			<Line x={200} y={560} text="→  less LDL in the blood" at={KB.falls} />
			<AnsBox x={100} y={630} w={1720} h={210} at={-100} label="(b)" />
			<Line x={200} y={690} text="off-target edits elsewhere in the genome" at={KB.anywhere + 6} />
			<Line x={200} y={750} text="long-term safety (the edit is permanent)" at={KB.safe + 6} />
			<Sx x={200} y={808} text="also accepted: works in larger groups? cost and access?" size={28} color={GREY_INK} hand at={KB.undone + 10} />
			<MistakeChip x={140} y={880} text="the patient's children will inherit the edit" at={KB.saying} cross={KB.mistake} size={32} />
			<Sx x={1020} y={918} text="liver cells are body cells" size={34} color={BIO_INK} hand at={KB.body + 10} />
			{void KB.without}{void KB.unc}
		</Overlay>
	</>
);

// ---------- item 2: the headline ----------
type T2 = {a: number; d: number};
const STEM2 = (t: T2) => [{text: "A news headline states: 'CRISPR will soon cure all genetic diseases.'", at: t.a}] as QBlock[];
const Q2 = (t: T2, marks: QMark[] = []) => qCheck([...STEM2(t), {text: 'Evaluate this claim. Support your answer with examples. (5 marks)', at: t.d, para: true, weight: 700}], marks);
const S2 = (t: T2, marks: QMark[] = []) => qCheck(STEM2(t), marks);
const MARKS2 = ['soon', 'all'];
qCheck(S2({a: 0, d: 0}).blocks, MARKS2.map(phrase => ({phrase, at: 0})));

// ---------- 11c. Attempt two ----------
const KC = cues(S('attempt-two'), {second: 'Second', headline: 'A headline says', evaluate: 'Evaluate this claim', pause: 'Pause here to answer'});
export const SceneAttemptTwo: React.FC = () => (
	<>
		<Heading text="Exam question 2" at={KC.second} size={50} />
		<Overlay>
			<HscTag at={KC.second} />
			<CardBox x={100} y={180} w={1720} h={830} at={KC.headline - 6} />
			<QText q={Q2({a: KC.headline, d: KC.evaluate})} x={140} y={262} w={1640} size={40} card={false} />
			<AnsBox x={140} y={420} w={1320} h={570} at={KC.evaluate + 20} label="answer" />
			<PauseHold id="attempt-two" at={KC.pause} cy={800} />
		</Overlay>
	</>
);

// ---------- 11d. Feedback two ----------
const KD = cues(S('feedback-two'), {part: 'Part of it holds', sickle: 'already treat sickle cell', many: 'many genes', reach: 'hard to reach', cost: 'cost limits', over: 'overstated', could: 'could treat', saying: "Saying it's approved", mistake: 'the classic mistake'});
const ALL2: T2 = {a: -100, d: -100};
export const SceneFeedbackTwo: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Heading text="Evaluate the headline" at={4} size={50} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={180} w={1720} h={110} at={-100} />
				<QText q={S2(ALL2, [{phrase: MARKS2[0], at: KD.part + 10}, {phrase: MARKS2[1], at: KD.part + 22}])} x={140} y={250} w={1640} size={38} card={false} />
				<g transform="translate(70,330) scale(0.62) translate(-130,-300)">
					<Ladder lit={4} labelO={0.9} />
					<TopThumb s={1} />
				</g>
				<Pill x={500} y={340} text="supported: some single-gene diseases (sickle cell)" mark="tick" o={prog(f, KD.sickle, 12)} lit={1 - prog(f, KD.many, 10)} size={34} />
				<Pill x={500} y={420} text="not supported: most diseases are many genes + environment" mark="cross" o={prog(f, KD.many, 12)} lit={1 - prog(f, KD.reach, 10)} size={34} />
				<Pill x={500} y={500} text="delivery to most tissues still hard" mark="cross" o={prog(f, KD.reach, 12)} lit={1 - prog(f, KD.cost, 10)} size={34} />
				<Pill x={500} y={580} text="cost and access" mark="cross" o={prog(f, KD.cost, 12)} lit={1 - prog(f, KD.over, 10)} size={34} />
				<g opacity={prog(f, KD.over, 12)}>
					<rect x={470} y={670} width={1350} height={170} rx={22} fill="#fff3d9" stroke={AMBER} strokeWidth={4} />
					<Sx x={500} y={728} text="Verdict: overstated" size={42} color={INK} hand />
				</g>
				<MarkText x={500} y={800} size={38} at={KD.could} parts={[{t: 'CRISPR '}, {t: 'could', mark: KD.could + 14}, {t: ' treat some single-gene diseases, '}, {t: 'if', mark: KD.could + 50}, {t: ' safe and affordable'}]} />
				<MistakeChip x={140} y={900} text="it's approved, so it works for everyone" at={KD.saying} cross={KD.mistake} size={32} />
				{void CARD}
			</Overlay>
		</>
	);
};

// ---------- 12. Decision rule and handoff ----------
const KE = cues(S('decision-rule'), {any: 'For any future', mech: 'explain the mechanism first', ladder: 'place it on the evidence ladder', judge: 'judge need', write: 'write could', next: 'Next'});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const STEPS = [
		{at: KE.mech, t: 'mechanism: what changes, and how?'},
		{at: KE.ladder, t: 'which rung of the evidence ladder?'},
		{at: KE.judge, t: 'need, feasibility, fairness'},
		{at: KE.write, t: 'could ... if ... (name the condition)'},
	];
	return (
		<>
			<Heading text="For any future biotechnology" at={KE.any} size={56} />
			<Overlay>
				{STEPS.map((s, i) => (
					<g key={i} opacity={prog(f, s.at, 14)}>
						<rect x={140} y={225 + i * 130} width={1180} height={100} rx={22} fill={CARD} stroke={AMBER} strokeWidth={3.5} />
						<Sx x={190} y={290 + i * 130} text={`${i + 1}`} size={46} color={AMBER_INK} weight={800} />
						<Sx x={250} y={290 + i * 130} text={s.t} size={46} color={INK} hand />
					</g>
				))}
				<g opacity={prog(f, KE.next, 14)}>
					<rect x={700} y={830} width={1120} height={130} rx={36} fill={CARD} stroke={AMBER} strokeWidth={3.5} />
					<Cavendish cx={735} cy={895} w={100} id="b11-next-banana" />
					<Pl p={PLATES.rhino} cx={880} cy={895} w={150} />
					<Sx x={1000} y={910} text="Next: how biotechnology changes biodiversity" size={36} color={INK} hand />
				</g>
			</Overlay>
		</>
	);
};

// ---------- 13. Key notes ----------
const NOTES = [
	'CRISPR gene editing: a guide RNA pairs with a chosen DNA sequence and leads the Cas9 enzyme there to cut both strands. Repair often adds or loses bases. The guide can sometimes cut similar sequences elsewhere (off-target edits).',
	'Approved use (2023): sickle cell disease. Blood stem cells are edited outside the body so less BCL11A is made; foetal haemoglobin is made again and prevents most sickling. The sickle allele remains. It needs chemotherapy, weeks in a specialist hospital and over US$2 million (US price), so most patients cannot get it yet.',
	'Future directions include editing cells inside the body, edited crops and DNA screening. Editing suits conditions caused by one gene; most common diseases involve many genes and the environment.',
	'Gene drive: an allele that copies itself to the other chromosome, so nearly all offspring inherit it. It could suppress malaria mosquitoes; it has worked in lab cages but not been released in the wild. Uncertainties: resistance, ecological effects, consent across borders, reversal.',
	'Judge a future use by need, feasibility and fairness, and write "could ... if ...".',
];
export const SceneNotes: React.FC = () => (
	<NotesBoard notes={NOTES} aid="Advanced isn't the same as proven. Need, feasibility, fairness." tag="place each claim on the evidence ladder: idea, lab, animals, human trials, approved" size={28} aidTop={800} />
);
