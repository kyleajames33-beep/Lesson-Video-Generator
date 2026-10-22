// M7 B03 scenes 12a to 14: two unseen exam items (Ross River virus after rain: name the mode and justify the
// better measure; cholera against influenza: compare entry and transmission adaptations), each whole on screen
// through "Pause here to answer." and its 10 s countdown, with no answer-bearing plates; brief feedback with the
// givens underlined in the question strip as they are used and one crossed classic mistake (no givens card); the
// decision rule with the handoff to the epidemic practical; the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, MistakeChip, Overlay} from '../bio-m5-b13/shared';
import {HscTag, NextChip, NotesBoard, QText, qCheck} from '../bio-m5-g01/board';
import type {QBlock, QMark} from '../bio-m5-g01/board';
import {CardBox} from '../bio-m6-b01/parts';
import {AnsBox, FbRow, PauseHold} from '../bio-m7-b01/s3';
import {S, hold} from './common';
import {AMBER, AMBER_INK, BreakMark, CARD, Chain, EDGE, GREYT, GREY_INK, GTag, HostCircle, INK, PLATES, Pl, Sx, TEAL, WText, fitW, prog, tw, vis} from './parts';

// ---------- item 1: Ross River virus ----------
type T1 = {s: number; v: number; n: number; a: number; b: number; d: number};
const STEM1 = (t: T1) => [
	{text: 'After heavy rain, cases of Ross River virus disease increased in a Queensland town.', at: t.s},
	{text: 'The virus is carried by mosquitoes that breed in standing water.', at: t.v},
	{text: 'It is not passed directly from person to person.', at: t.n},
] as QBlock[];
const OPT1 = (t: T1) => [
	{text: 'Measure A: isolate infected people in hospital.', at: t.a},
	{text: 'Measure B: drain standing water and treat what remains with larvicide (a chemical that kills mosquito larvae).', at: t.b, para: true},
] as QBlock[];
const DEM1 = (t: T1) => [{text: 'Identify the mode of transmission of Ross River virus. Justify which measure would better reduce the number of new cases. (3 marks)', at: t.d, weight: 700}] as QBlock[];
const MARKS1 = ['carried by mosquitoes', 'breed in standing water', 'not passed directly from person to person'];
qCheck(STEM1({s: 0, v: 0, n: 0, a: 0, b: 0, d: 0}), MARKS1.map(phrase => ({phrase, at: 0})));

// ---------- 12a. Attempt one ----------
const KA = cues(S('attempt'), {two: 'Two exam questions', first: 'First', after: 'After heavy rain', virus: 'The virus is carried', isnt: "isn't passed", a: 'Measure A', b: 'Measure B', identify: 'Identify the mode', pause: 'Pause here to answer'});
export const SceneAttempt: React.FC = () => {
	const t: T1 = {s: KA.after, v: KA.virus, n: KA.isnt, a: KA.a, b: KA.b, d: KA.identify};
	const h = hold('attempt');
	return (
		<>
			<Heading text="Exam question 1" at={KA.two} size={50} />
			<Overlay>
				<HscTag at={KA.two} />
				<CardBox x={100} y={170} w={1720} h={850} at={KA.first - 6} />
				<QText q={qCheck(STEM1(t), [])} x={140} y={240} w={1640} size={36} card={false} />
				<CardBox x={140} y={400} w={1640} h={196} at={KA.a - 6} dash="8 6" fill="#fffaf0" />
				<QText q={qCheck(OPT1(t), [])} x={170} y={460} w={1580} size={34} card={false} />
				<QText q={qCheck(DEM1(t), [])} x={140} y={650} w={1640} size={36} card={false} />
				<AnsBox x={140} y={760} w={1340} h={240} at={KA.identify + 30} />
				<PauseHold start={h.startFrame} end={h.endFrame} at={KA.pause} />
			</Overlay>
		</>
	);
};

// ---------- 12b. Feedback one ----------
const KB = cues(S('feedback-one'), {vector: 'vector transmission', mosq: 'because mosquitoes carry', b: 'Measure B is better', removes: 'removes where', fewer: 'fewer mosquitoes', choosing: 'Choosing isolation', mistake: 'classic mistake', isnt: "isn't passed directly", link: "a link it doesn't use"});
const ALL1: T1 = {s: -100, v: -100, n: -100, a: -100, b: -100, d: -100};
export const SceneFeedbackOne: React.FC = () => {
	const f = useCurrentFrame();
	const marks: QMark[] = [
		{phrase: 'carried by mosquitoes', at: KB.vector + 6},
		{phrase: 'breed in standing water', at: KB.b + 10},
		{phrase: 'not passed directly from person to person', at: KB.choosing + 8},
	];
	const lit = (a: number, b: number) => vis(f, a, b, 10);
	const mw = tw('A: isolate the sick', 32) + 48;
	return (
		<>
			<Heading text="Break the link the virus uses" at={4} size={50} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={150} w={1720} h={176} at={-100} />
				<QText q={qCheck([...STEM1(ALL1), ...OPT1(ALL1).map(b => ({...b, para: b.text.startsWith('Measure A') ? true : b.para}))], marks)} x={140} y={198} w={2200} size={34} card={false} s={0.74} />
				<g transform="translate(960,445) scale(0.5) translate(-960,-560)" opacity={prog(f, KB.vector - 4, 14)}>
					<Chain lx={330} rx={1590} y={560} r={90} labels={0} st={[0, 0, 0]} />
					<Pl p={PLATES.mosq} cx={960} cy={540} w={fitW(PLATES.mosq, 320, 200)} o={prog(f, KB.vector + 6, 14)} />
					<BreakMark x={1250} y={560} h={150} at={KB.removes} width={9} />
				</g>
				<FbRow y={540} label="1" text="mode: vector (mosquitoes)" at={KB.vector} lit={lit(KB.vector, KB.b)} plate={PLATES.mosq} />
				<FbRow y={652} label="2" text="B: removes breeding sites, fewer mosquitoes" at={KB.b} lit={lit(KB.b, KB.choosing)} />
				<MistakeChip x={140} y={800} text="A: isolate the sick" at={KB.choosing} cross={KB.mistake + 6} size={32} />
				<GTag x={140 + mw + 40} y={806} text="no direct link to break" at={KB.isnt} size={28} />
				{void KB.mosq}{void KB.fewer}{void KB.link}
			</Overlay>
		</>
	);
};

// ---------- item 2: cholera and influenza ----------
type T2 = {c: number; i: number; d: number};
const ROW_C = (at: number) => [{text: 'Vibrio cholerae (bacterium): hair-like pili help the bacteria cling together in clumps on the lining of the small intestine. Infection causes watery diarrhoea that releases very large numbers of bacteria.', at}] as QBlock[];
const ROW_I = (at: number) => [{text: 'Influenza virus: a surface protein (haemagglutinin) binds receptor molecules on cells lining the airways. Infection triggers coughing and sneezing.', at}] as QBlock[];
const DEM2 = (t: T2) => [{text: 'Compare how these two pathogens are adapted for entry into and transmission between hosts. (4 marks)', at: t.d, weight: 700}] as QBlock[];
qCheck(ROW_C(0), [{phrase: 'cling together in clumps on the lining of the small intestine', at: 0}, {phrase: 'watery diarrhoea', at: 0}]);
qCheck(ROW_I(0), [{phrase: 'binds receptor molecules on cells lining the airways', at: 0}, {phrase: 'triggers coughing', at: 0}]);

// ---------- 12c. Attempt two ----------
const KC = cues(S('attempt-two'), {second: 'Second', cholera: "The cholera bacterium's", influenza: 'Influenza virus has', compare: 'Compare how', pause: 'Pause here to answer'});
export const SceneAttemptTwo: React.FC = () => {
	const t: T2 = {c: KC.cholera, i: KC.influenza, d: KC.compare};
	const h = hold('attempt-two');
	const f = useCurrentFrame();
	return (
		<>
			<Heading text="Exam question 2" at={KC.second} size={50} />
			<Overlay>
				<HscTag at={KC.second} />
				<CardBox x={100} y={170} w={1720} h={850} at={KC.second + 6} />
				<g opacity={prog(f, KC.cholera - 6, 12)}>
					<rect x={130} y={200} width={1660} height={360} rx={14} fill="#fffaf0" stroke={EDGE} strokeWidth={2.5} />
					<line x1={130} x2={1790} y1={410} y2={410} stroke={EDGE} strokeWidth={2.5} />
				</g>
				<QText q={qCheck(ROW_C(t.c), [])} x={160} y={256} w={1600} size={36} card={false} />
				<QText q={qCheck(ROW_I(t.i), [])} x={160} y={466} w={1600} size={36} card={false} />
				<QText q={qCheck(DEM2(t), [])} x={140} y={624} w={1640} size={36} card={false} />
				<AnsBox x={140} y={720} w={1340} h={280} at={KC.compare + 30} />
				<PauseHold start={h.startFrame} end={h.endFrame} at={KC.pause} />
			</Overlay>
		</>
	);
};

// ---------- 12d. Feedback two ----------
const KD = cues(S('feedback-two'), {similar: 'Similar', both: 'both hold on', pili: 'pili on the gut', protein: 'the protein on airway', symptom: 'cause a symptom', releases: 'releases them', different: 'Different', cholera: 'cholera leaves', whereas: 'whereas influenza', writing: 'Writing two separate', mistake: 'classic mistake'});
export const SceneFeedbackTwo: React.FC = () => {
	const f = useCurrentFrame();
	const mC: QMark[] = [{phrase: 'cling together in clumps on the lining of the small intestine', at: KD.pili, color: TEAL}, {phrase: 'watery diarrhoea', at: KD.symptom + 6, color: AMBER}];
	const mI: QMark[] = [{phrase: 'binds receptor molecules on cells lining the airways', at: KD.protein, color: TEAL}, {phrase: 'triggers coughing', at: KD.symptom + 14, color: AMBER}];
	const XA = 360, XB = 1110, CW = 730;
	const cell = (x: number, y: number, w: number, h: number, text: string, at: number, color: string, lit: number) => {
		const o = prog(f, at, 12);
		if (o <= 0.01) return null;
		const on = lit > 0.5;
		return (
			<g opacity={o}>
				<rect x={x} y={y} width={w} height={h} rx={16} fill={on ? '#fffaf0' : CARD} stroke={on ? color : EDGE} strokeWidth={on ? 3.5 : 2.5} />
				<WText x={x + 24} y={y + 50} text={text} size={34} maxW={w - 48} color={on ? INK : GREY_INK} hand weight={700} at={-100} />
			</g>
		);
	};
	const lit = (a: number, b: number) => vis(f, a, b, 10);
	const mw = tw('two separate descriptions', 32) + 48;
	return (
		<>
			<Heading text="Say both, then whereas" at={4} size={50} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={150} w={1720} h={190} at={-100} />
				<QText q={qCheck([...ROW_C(-100), {...ROW_I(-100)[0], para: true}], [...mC, ...mI])} x={140} y={196} w={2260} size={34} card={false} s={0.72} />
				<Sx x={XA + CW / 2} y={400} text="V. cholerae" size={38} color={INK} weight={800} anchor="middle" at={KD.both - 6} />
				<Sx x={XB + CW / 2} y={400} text="influenza" size={38} color={INK} weight={800} anchor="middle" at={KD.both - 6} />
				<Sx x={120} y={480} text="similar" size={32} color={TEAL} weight={800} at={KD.similar} />
				{cell(XA, 425, XB + CW - XA, 84, 'entry: holds on at the entry site', KD.both, TEAL, lit(KD.both, KD.symptom))}
				{cell(XA, 520, XB + CW - XA, 84, 'transmission: a symptom releases the pathogen', KD.symptom, AMBER, lit(KD.symptom, KD.different))}
				<Sx x={120} y={680} text="different" size={32} color={AMBER_INK} weight={800} at={KD.different} />
				{cell(XA, 625, CW, 130, 'leaves in diarrhoea; swallowed in water (indirect)', KD.cholera, AMBER, lit(KD.cholera, KD.writing))}
				{cell(XB, 625, CW, 130, 'leaves in droplets; breathed in', KD.whereas, AMBER, lit(KD.whereas, KD.writing))}
				<MistakeChip x={140} y={830} text="two separate descriptions" at={KD.writing} cross={KD.mistake + 6} size={32} />
				<GTag x={140 + mw + 40} y={836} text="say 'both' and 'whereas'" at={KD.mistake + 16} size={28} />
				{void KD.releases}{void GREYT}
			</Overlay>
		</>
	);
};

// ---------- 13. Decision rule and handoff ----------
const KE = cues(S('decision-rule'), {so: 'So for any', trace: 'trace how', sort: 'sort each', brk: 'break the link', next: 'Next, a classroom'});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const steps = [
		{at: KE.trace, text: 'trace it: leave, travel, enter'},
		{at: KE.sort, text: 'sort adaptations: entry or transmission'},
		{at: KE.brk, text: 'break the link the route depends on'},
	];
	return (
		<>
			<Heading text="Trace it, sort it, break it" at={KE.so} size={56} />
			<Overlay>
				{steps.map((s, i) => {
					const o = prog(f, s.at, 14);
					const y = 250 + i * 150;
					const dim = 1 - 0.35 * prog(f, steps[i + 1]?.at ?? KE.next, 12);
					return o > 0.01 ? (
						<g key={i} opacity={o * dim} transform={`translate(0,${(1 - o) * 18})`}>
							<rect x={140} y={y} width={1640} height={110} rx={28} fill={i === 2 ? '#fff3d9' : CARD} stroke={AMBER} strokeWidth={3.5} />
							<Sx x={190} y={y + 72} text={`${i + 1}`} size={50} color={AMBER_INK} weight={800} />
							<Sx x={270} y={y + 74} text={s.text} size={46} color={INK} hand />
						</g>
					) : null;
				})}
				<NextChip x={720} y={820} w={1100} text="Next: modelling an epidemic in class" at={KE.next}>
					<g opacity={prog(f, KE.next, 12)}>
						{[0, 1, 2].map(i => <HostCircle key={i} x={752 + i * 26} y={862} r={11} />)}
					</g>
				</NextChip>
				{void GREY_INK}
			</Overlay>
		</>
	);
};

// ---------- 14. Key notes ----------
const NOTES = [
	'To spread, a pathogen must leave a host, travel and enter a new host. The way it travels is its mode of transmission.',
	'Direct contact: host to host with nothing between (skin, body fluids, close-range droplets; tinea, HIV, influenza). Indirect contact: a non-living carrier, such as a fomite (contaminated object), water, food or air (norovirus, cholera, Salmonella, tuberculosis). Vector: a living carrier, usually an insect or tick (Anopheles mosquitoes carry Plasmodium). A fomite is not a vector.',
	'Entry adaptations get a pathogen in and hold it at the entry site: fimbriae grip host cells; viral surface proteins bind specific receptors; tapeworm hooks and suckers anchor to the gut wall.',
	'Transmission adaptations get it out and across: influenza triggers coughing; Plasmodium is injected into the skin in mosquito saliva; tapeworm eggs and cysts in undercooked pork; tobacco mosaic virus survives on tools.',
	'Control must match the route: barriers for direct contact, treat the carrier for indirect contact, break it at the vector for vectors.',
];
export const SceneNotes: React.FC = () => (
	<NotesBoard notes={NOTES} aid="Every control measure breaks a link." tag="name the route first, then the control follows" size={30} aidTop={700} />
);
