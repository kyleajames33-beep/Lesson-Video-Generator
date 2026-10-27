// M7 B10 scenes 13a to 15: two unseen exam items (evaluate a quarantine plan against incubation and spread before
// symptoms; explain an outbreak risk and a baby's protection from the proportion immune in two towns), each whole on
// screen through "Pause here to answer." and its 10 s countdown with nothing answer-bearing; brief feedback with the
// givens underlined in the question strip as they are used, a small coded day strip or two small networks, and one
// crossed classic mistake (no givens card); the decision rule beside the small board with the handoff; key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay} from '../bio-m5-b13/shared';
import {HscTag, NextChip, NotesBoard, QText, qCheck} from '../bio-m5-g01/board';
import type {QBlock, QMark} from '../bio-m5-g01/board';
import {AnsBox, PauseHold} from '../bio-m7-b01/s3';
import {ARow} from '../bio-m7-b06/s3';
import {Verdict} from '../bio-m7-b08/s3';
import {S, hold} from './common';
import {PLATES} from './assets';
import {spread} from './s3';
import {
	AMBER, AMBER_INK, Board, CardBox, GREY_INK, GTag, Network, Pl, ST_PLATE, StepChip, Sx, TEAL, TERRA, TLBr, Timeline, fitW, makeNet, MistakeChip, prog, tlx, tw, vis,
} from './parts';
import type {BoardPlate, Net, Pt, TL} from './parts';

// ---------- item 1: a quarantine plan ----------
type T1 = {a: number; b: number; c: number; q: number};
const STEM1 = (t: T1): QBlock[] => [
	{text: 'A newly identified virus spreads between people by close contact. Its incubation period is 5 to 14 days.', at: t.a},
	{text: 'Infected people can transmit the virus from 2 days before their symptoms start.', at: t.b},
	{text: "A town's health plan states: “Contacts of a case will be quarantined for 7 days after their last contact with the case. Anyone who develops symptoms will be isolated.”", at: t.c, para: true},
];
const DEM1 = (t: T1): QBlock[] => [{text: 'Evaluate this plan. (4 marks)', at: t.q, weight: 700}];
const ALL1: T1 = {a: -100, b: -100, c: -100, q: -100};
qCheck(STEM1(ALL1), ['Anyone who develops symptoms will be isolated', 'quarantined for 7 days', '5 to 14 days', 'from 2 days before their symptoms'].map(phrase => ({phrase, at: 0})));

// ---------- 13a. Attempt one ----------
const KA = cues(S('attempt'), {two: 'Two exam questions', first: 'First', virus: 'A new virus', people: 'people can spread', plan: "A town's plan", evaluate: 'Evaluate the plan', pause: 'Pause here to answer'});
export const SceneAttempt: React.FC = () => {
	const t: T1 = {a: KA.virus, b: KA.people, c: KA.plan, q: KA.evaluate};
	const h = hold('attempt');
	return (
		<>
			<Heading text="Exam question 1" at={KA.two} size={50} />
			<Overlay>
				<HscTag at={KA.two} />
				<CardBox x={100} y={170} w={1720} h={850} at={KA.first - 6} />
				<QText q={qCheck(STEM1(t), [])} x={140} y={250} w={1640} size={36} card={false} />
				<QText q={qCheck(DEM1(t), [])} x={140} y={620} w={1640} size={36} card={false} />
				<AnsBox x={140} y={670} w={1340} h={330} at={KA.evaluate + 30} />
				<PauseHold start={h.startFrame} end={h.endFrame} at={KA.pause} />
			</Overlay>
		</>
	);
};

// ---------- 13b. Feedback one ----------
const KB = cues(S('feedback-one'), {partly: 'only partly effective', iso: 'Isolating people with', short: 'is too short', late: 'as late as', twelve: 'from day twelve', should: 'Quarantine should last', saying: 'Saying quarantine is', classic: 'classic mistake'});
const TL1: TL = {x0: 300, x1: 1500, y: 600, days: 14};
export const SceneFeedbackOne: React.FC = () => {
	const f = useCurrentFrame();
	const marks: QMark[] = [
		{phrase: 'Anyone who develops symptoms will be isolated', at: KB.iso + 4, color: TEAL},
		{phrase: 'quarantined for 7 days', at: KB.short, color: AMBER},
		{phrase: '5 to 14 days', at: KB.late + 4, color: AMBER},
		{phrase: 'from 2 days before their symptoms', at: KB.twelve, color: AMBER},
	];
	const lit = (a: number, b: number) => vis(f, a, b, 10);
	const mw = tw('quarantine is for people with symptoms', 30) + 48;
	const sx = tlx(TL1, 14);
	return (
		<>
			<Heading text="Isolate the infected, quarantine the exposed" at={4} size={48} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={150} w={1720} h={176} at={-100} />
				<QText q={qCheck(STEM1(ALL1), marks)} x={140} y={196} w={2200} size={34} card={false} s={0.74} />
				<Verdict x={120} y={350} text="partly effective" at={KB.partly + 6} size={32} />
				<Timeline t={TL1} at={KB.short - 10} label="days after last contact" />
				<TLBr t={TL1} d0={0} d1={7} y={TL1.y - 60} label="quarantine: released day 7" at={KB.short + 10} color={AMBER_INK} />
				{f >= KB.late + 8 ? <g opacity={prog(f, KB.late + 8, 10)}>{[[-10, -16], [6, -22], [12, -10], [-4, -6]].map(([dx, dy], i) => <circle key={i} cx={sx + dx} cy={TL1.y + dy} r={5} fill="#c4432f" />)}<Sx x={sx} y={TL1.y - 34} text="symptoms" size={22} color="#9e2a22" weight={700} anchor="middle" at={-100} /></g> : null}
				<TLBr t={TL1} d0={12} d1={14} y={TL1.y - 120} label="infectious from day 12" at={KB.twelve + 6} color={TERRA} fill={1} labelX={tlx(TL1, 8.6)} />
				<GTag x={tlx(TL1, 8.2)} y={TL1.y - 196} text="spreads after release" at={KB.twelve + 26} size={22} />
				<ARow y={680} text="isolation: removes known sources" at={KB.iso + 10} lit={lit(KB.iso + 10, KB.short)} w={1680} size={34} />
				<ARow y={780} text="quarantine should cover the 14-day incubation period" at={KB.should + 6} lit={lit(KB.should + 6, KB.saying)} w={1680} size={34} color={AMBER_INK} />
				<MistakeChip x={130} y={900} text="quarantine is for people with symptoms" at={KB.saying} cross={KB.classic + 6} size={30} />
				<GTag x={130 + mw + 40} y={906} text="quarantine: exposed, not yet sick" at={KB.classic + 16} size={26} />
			</Overlay>
		</>
	);
};

// ---------- item 2: two towns ----------
type T2 = {a: number; b: number; c: number; d: number; q: number};
const STEM2 = (t: T2): QBlock[] => [
	{text: 'Disease Y is an airborne viral disease. A vaccine is available. For disease Y, about 80% of a population must be immune for herd immunity.', at: t.a},
	{text: 'Town A: 92% of people immune.', at: t.b, para: true},
	{text: 'Town B: 70% of people immune.', at: t.c, para: true},
	{text: 'A visitor infectious with disease Y spends a day in each town.', at: t.d, para: true},
];
const DEM2 = (t: T2): QBlock[] => [{text: 'Explain why an outbreak of disease Y is more likely in town B than in town A, and why a baby who is too young to be vaccinated and has no antibodies against disease Y is protected in town A. (3 marks)', at: t.q, weight: 700}];
const ALL2: T2 = {a: -100, b: -100, c: -100, d: -100, q: -100};
qCheck([...STEM2(ALL2), ...DEM2(ALL2)], ['Town B: 70%', 'about 80%', 'Town A: 92%', 'too young to be vaccinated', 'has no antibodies against disease Y'].map(phrase => ({phrase, at: 0})));

// ---------- 13c. Attempt two ----------
const KC = cues(S('attempt-two'), {second: 'Second', disease: 'For disease Y', a: 'In town A', b: 'In town B', visitor: 'A visitor with', explain: 'Explain why an', pause: 'Pause here to answer'});
export const SceneAttemptTwo: React.FC = () => {
	const t: T2 = {a: KC.disease, b: KC.a, c: KC.b, d: KC.visitor, q: KC.explain};
	const h = hold('attempt-two');
	return (
		<>
			<Heading text="Exam question 2" at={KC.second} size={50} />
			<Overlay>
				<HscTag at={KC.second} />
				<CardBox x={100} y={170} w={1720} h={850} at={KC.second + 6} />
				<QText q={qCheck(STEM2(t), [])} x={140} y={250} w={1640} size={34} card={false} />
				<QText q={qCheck([...DEM2(t)], [])} x={140} y={600} w={1640} size={34} card={false} />
				<AnsBox x={140} y={730} w={1340} h={270} at={KC.explain + 30} />
				<PauseHold start={h.startFrame} end={h.endFrame} at={KC.pause} />
			</Overlay>
		</>
	);
};

// ---------- 13d. Feedback two ----------
const KD = cues(S('feedback-two'), {below: 'below the eighty', grows: 'outbreak grows', above: 'above eighty', reach: 'reach the baby', saying: 'Saying the baby', classic: 'classic mistake', nomem: 'has no memory', around: 'people around it'});
/** A small town network (6 x 3) plus a visitor node (18) joined to the left edge. */
const town = (x0: number, seed: number): Net => {
	const n = makeNet(6, 3, x0, 470, 92, 82, seed, 0.3);
	const p = n.pts[6];
	return {pts: [...n.pts, [p[0] - 90, p[1]] as Pt], edges: [...n.edges, [18, 6], [18, 0], [18, 12]]};
};
const TB_ = town(250, 31), TA_ = town(1110, 33);
const GB = new Set([6, 7, 8, 2, 14]), GA = new Set([11]);
const BABY_A = 11;
export const SceneFeedbackTwo: React.FC = () => {
	const f = useCurrentFrame();
	const marks: QMark[] = [
		{phrase: 'Town B: 70%', at: KD.below + 4, color: AMBER},
		{phrase: 'about 80%', at: KD.below + 14, color: AMBER},
		{phrase: 'Town A: 92%', at: KD.above, color: TEAL},
		{phrase: 'too young to be vaccinated', at: KD.reach + 4, color: AMBER},
		{phrase: 'has no antibodies against disease Y', at: KD.reach + 16, color: AMBER},
	];
	const spB = spread(TB_, 18, KD.below + 20, GB, 16);
	const spA = spread(TA_, 18, KD.above + 10, GA, 16);
	const lit = (a: number, b: number) => vis(f, a, b, 10);
	const mw = tw('the baby is immune', 30) + 48;
	const bb = TA_.pts[BABY_A];
	return (
		<>
			<Heading text="Immune people protect the baby" at={4} size={48} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={150} w={1720} h={190} at={-100} />
				<QText q={qCheck([...STEM2(ALL2), ...DEM2(ALL2)].map(b => ({...b, para: false})), marks)} x={140} y={194} w={2260} size={34} card={false} s={0.72} />
				<Sx x={480} y={420} text="town B" size={34} color={TERRA} hand weight={700} anchor="middle" at={KD.below} />
				<Network n={TB_} r={18} immune={i => (i === 18 || GB.has(i) ? 0 : 1)} infected={i => (spB.inf.has(i) ? prog(f, spB.inf.get(i)!, 10) : 0)} pulses={spB.pulses} o={prog(f, KD.below, 14)} />
				<Sx x={1340} y={420} text="town A" size={34} color={TEAL} hand weight={700} anchor="middle" at={KD.above - 6} />
				<Network n={TA_} r={18} immune={i => (i === 18 || GA.has(i) ? 0 : 1)} infected={i => (spA.inf.has(i) ? prog(f, spA.inf.get(i)!, 10) : 0)} pulses={spA.pulses} o={prog(f, KD.above - 6, 14)} />
				<Sx x={bb[0]} y={bb[1] + 46} text="baby" size={24} color={GREY_INK} hand weight={700} anchor="middle" at={KD.reach + 4} />
				<ARow y={706} text="B: 70% < 80%: each case infects more than one; outbreak grows" at={KD.below + 30} lit={lit(KD.below + 30, KD.above)} w={1680} size={32} color={TERRA} />
				<ARow y={804} text="A: 92% > 80%: fewer than one per case; chain dies out" at={KD.above + 20} lit={lit(KD.above + 20, KD.saying)} w={1680} size={32} />
				<MistakeChip x={130} y={918} text="the baby is immune" at={KD.saying} cross={KD.classic + 6} size={30} />
				<GTag x={130 + mw + 40} y={924} text="no memory cells or antibodies; protected by those around it" at={KD.nomem} size={26} />
				{void KD.grows}{void KD.around}{void AMBER_INK}
			</Overlay>
		</>
	);
};

// ---------- 14. Decision rule and handoff ----------
const KE = cues(S('decision-rule'), {name: 'name the route', find: 'find the link', judge: 'judge the measure', next: 'Next, why'});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const plates: BoardPlate[] = [{p: PLATES.bed, at: ST_PLATE[0], w: 190, h: 120}, {p: PLATES.sink, at: ST_PLATE[1], w: 140, h: 115}, {p: PLATES.vial, at: ST_PLATE[3], w: 150, h: 100}];
	const chips = [{at: KE.name, text: 'name the route'}, {at: KE.find, text: 'find the link'}, {at: KE.judge, text: 'judge: speed, how long, cost'}];
	return (
		<>
			<Heading text="Route, link, judge" at={4} size={56} />
			<Overlay>
				<Board s={0.42} ox={20} oy={120} stLit={[1, 1, 0]} st4Lit={1} plates={plates} o={prog(f, 0, 14)} />
				{chips.map((c, i) => <StepChip key={i} x={860} y={250 + i * 140} w={960} n={i + 1} text={c.text} at={c.at} lit={vis(f, c.at, chips[i + 1]?.at ?? KE.next, 10)} />)}
				<NextChip x={720} y={880} w={1100} text="Next: why antibiotics and antivirals work differently" at={KE.next}>
					<Pl p={PLATES.rodCoccus} cx={760} cy={922} w={fitW(PLATES.rodCoccus, 50, 40)} />
					<Pl p={PLATES.virus} cx={808} cy={922} w={36} />
				</NextChip>
			</Overlay>
		</>
	);
};

// ---------- 15. Key notes ----------
const NOTES = [
	'A pathogen must leave a host, travel and enter a host it can infect; each control breaks a link. Hygiene: travel. Isolation and quarantine: leaving. Vaccination: the next host.',
	"Hygiene: soap lifts microbes off skin and water rinses them away; alcohol rub works less well against norovirus and bacterial spores. Semmelweis (1847): chlorine handwashing cut deaths in the doctors' clinic from about 10% to about the midwives' level. Environmental management (clean surfaces, cooked food, treated water, sewage removal) works without anyone remembering. Hygiene does little against airborne spread (measles).",
	'Isolation: infected people kept apart (measles: until 4 days after the rash). Limit: spread before symptoms. Contact tracing finds the exposed; quarantine keeps some exposed, not-yet-sick people apart, depending on exposure and setting, for about the incubation period (infection to symptoms; measles: up to about 18 days). NSW: non-immune childcare and primary school contacts exposed outside the facility stay away until 18 days after last contact. Border quarantine and biosecurity keep diseases out. Optional: non-immune measles contacts may instead get MMR within 3 days or antibodies within 6 days of exposure.',
	'Herd immunity: when enough people are immune, each case infects fewer than one other on average, so chains die out; it protects those who can\'t be vaccinated. More contagious diseases need higher coverage (measles: about 93% immune; target 95%). Low local coverage allows outbreaks.',
	'Evaluate a measure: which link, how fast, how long it can be kept up, cost to people. Layer several measures.',
];
export const SceneNotes: React.FC = () => (
	<NotesBoard notes={NOTES} aid="Isolate the infected, quarantine the exposed." tag="Herd immunity: break enough links and the chain dies out." size={25} aidTop={850} />
);
void GREY_INK;
