// M7 B04 scenes 12a to 14: two unseen exam items (an FMD outbreak in an exporting country: distinguish direct and
// indirect effects and say which costs more; district-wide wheat rust: one biological and one agricultural cause),
// each whole on screen through "Pause here to answer." and its 10 s countdown, with no plates or ledger; brief
// feedback with the givens underlined in the question strip as they are used and one crossed classic mistake (no
// givens card); the decision rule with the handoff to plant defence; the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, MistakeChip, Overlay} from '../bio-m5-b13/shared';
import {HscTag, NextChip, NotesBoard, QText, qCheck} from '../bio-m5-g01/board';
import type {QBlock, QMark} from '../bio-m5-g01/board';
import {AnsBox, PauseHold} from '../bio-m7-b01/s3';
import {S, hold} from './common';
import {AMBER, AMBER_INK, CARD, CTag, CardBox, EDGE, GREY_INK, GTag, Gate, INK, PLATES, Pl, SideWash, Sx, TEAL, WText, prog, tw, vis} from './parts';

// ---------- item 1: an FMD outbreak in Country P ----------
type T1 = {a: number; b: number; c: number; d: number; q: number};
const STEM1 = (t: T1) => [
	{text: 'Country P exports most of the beef it produces and has been free of foot-and-mouth disease (FMD) for decades.', at: t.a},
	{text: 'FMD is confirmed in one herd of 40 cattle.', at: t.b},
	{text: 'All 40 cattle are culled, together with 2000 healthy cattle on nearby farms.', at: t.c},
	{text: 'Three trading partners suspend imports of beef from Country P.', at: t.d},
] as QBlock[];
const DEM1 = (t: T1) => [{text: 'Distinguish between the direct and indirect effects of this outbreak on agricultural production. Explain which is likely to have the greater economic cost. (4 marks)', at: t.q, weight: 700}] as QBlock[];
const MARKS1 = ['one herd of 40 cattle', '2000 healthy cattle on nearby farms', 'suspend imports of beef', 'exports most of the beef it produces'];
qCheck(STEM1({a: 0, b: 0, c: 0, d: 0, q: 0}), MARKS1.map(phrase => ({phrase, at: 0})));

// ---------- 12a. Attempt one ----------
const KA = cues(S('attempt'), {two: 'Two exam questions', first: 'First', country: 'A country that exports', confirmed: 'The disease is confirmed', all: 'All 40', three: 'three trading partners', dist: 'Distinguish between', pause: 'Pause here to answer'});
export const SceneAttempt: React.FC = () => {
	const t: T1 = {a: KA.country, b: KA.confirmed, c: KA.all, d: KA.three, q: KA.dist};
	const h = hold('attempt');
	return (
		<>
			<Heading text="Exam question 1" at={KA.two} size={50} />
			<Overlay>
				<HscTag at={KA.two} />
				<CardBox x={100} y={170} w={1720} h={850} at={KA.first - 6} />
				<QText q={qCheck(STEM1(t), [])} x={140} y={240} w={1640} size={36} card={false} />
				<QText q={qCheck(DEM1(t), [])} x={140} y={500} w={1640} size={36} card={false} />
				<AnsBox x={140} y={650} w={1340} h={350} at={KA.dist + 30} />
				<PauseHold start={h.startFrame} end={h.endFrame} at={KA.pause} />
			</Overlay>
		</>
	);
};

// ---------- 12b. Feedback one ----------
const KB = cues(S('feedback-one'), {direct: 'Direct effects are', sick: 'the 40 sick cattle', indirect: 'Indirect effects come', healthy: 'the 2,000 healthy', lost: 'lost beef exports', far: 'cost far more', exports: 'the country exports most', counting: 'Counting the healthy', mistake: 'classic mistake'});
const ALL1: T1 = {a: -100, b: -100, c: -100, d: -100, q: -100};
export const SceneFeedbackOne: React.FC = () => {
	const f = useCurrentFrame();
	const marks: QMark[] = [
		{phrase: 'one herd of 40 cattle', at: KB.sick, color: TEAL},
		{phrase: '2000 healthy cattle on nearby farms', at: KB.healthy, color: AMBER},
		{phrase: 'suspend imports of beef', at: KB.lost, color: AMBER},
		{phrase: 'exports most of the beef it produces', at: KB.exports, color: AMBER},
	];
	const mw = tw('healthy culled cattle = direct', 30) + 48;
	return (
		<>
			<Heading text="Direct or indirect?" at={4} size={50} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={150} w={1720} h={176} at={-100} />
				<QText q={qCheck(STEM1(ALL1), marks)} x={140} y={198} w={2200} size={34} card={false} s={0.74} />
				<SideWash x0={975} x1={1800} y0={360} y1={780} o={prog(f, KB.exports, 16)} />
				<Gate at={0} x={960} y0={390} y1={760} labelAt={6} sidesAt={10} sideY={790} />
				<CTag x={130} y={420} text="direct: 40 infected cattle, lost production, then culled" at={KB.sick + 6} color={TEAL} size={32} maxW={780} dim={vis(f, KB.indirect, undefined, 10)} />
				<CTag x={990} y={420} text="indirect: 2000 healthy cattle culled" at={KB.healthy + 6} color={AMBER_INK} size={32} maxW={790} dim={prog(f, KB.lost, 10)} />
				<CTag x={990} y={510} text="indirect: lost exports" at={KB.lost + 6} color={AMBER_INK} size={32} maxW={790} dim={prog(f, KB.exports, 10)} />
				<CTag x={990} y={620} text="indirect larger: export dependent" at={KB.exports + 8} color={AMBER_INK} size={34} maxW={790} />
				<MistakeChip x={130} y={850} text="healthy culled cattle = direct" at={KB.counting} cross={KB.mistake + 6} size={30} />
				<GTag x={130 + mw + 40} y={856} text="never infected: a cost of control" at={KB.mistake + 16} size={26} />
				{void KB.direct}{void KB.far}
			</Overlay>
		</>
	);
};

// ---------- item 2: a district of one wheat variety ----------
type T2 = {a: number; b: number; c: number; d: number; q: number};
const STEM2 = (t: T2) => [
	{text: 'Nearly every farm in a wheat-growing district plants the same wheat variety.', at: t.a},
	{text: 'A new strain of a rust fungus appears that is able to infect this variety.', at: t.b},
	{text: 'Its spores are carried by wind, and the growing season is warm and wet.', at: t.c},
	{text: 'Wheat yields fall across the whole district.', at: t.d},
] as QBlock[];
const DEM2 = (t: T2) => [{text: 'Explain ONE biological cause and ONE agricultural cause of the losses in this district. (3 marks)', at: t.q, weight: 700}] as QBlock[];
qCheck(STEM2({a: 0, b: 0, c: 0, d: 0, q: 0}), ['able to infect this variety', 'carried by wind', 'warm and wet', 'plants the same wheat variety'].map(phrase => ({phrase, at: 0})));

// ---------- 12c. Attempt two ----------
const KC = cues(S('attempt-two'), {second: 'Second', nearly: 'Nearly every farm', strain: 'A new strain', spores: 'Its spores travel', yields: 'Yields fall', explain: 'Explain one biological', pause: 'Pause here to answer'});
export const SceneAttemptTwo: React.FC = () => {
	const t: T2 = {a: KC.nearly, b: KC.strain, c: KC.spores, d: KC.yields, q: KC.explain};
	const h = hold('attempt-two');
	return (
		<>
			<Heading text="Exam question 2" at={KC.second} size={50} />
			<Overlay>
				<HscTag at={KC.second} />
				<CardBox x={100} y={170} w={1720} h={850} at={KC.second + 6} />
				<QText q={qCheck(STEM2(t), [])} x={140} y={240} w={1640} size={36} card={false} />
				<QText q={qCheck(DEM2(t), [])} x={140} y={450} w={1640} size={36} card={false} />
				<AnsBox x={140} y={580} w={1340} h={420} at={KC.explain + 30} />
				<PauseHold start={h.startFrame} end={h.endFrame} at={KC.pause} />
			</Overlay>
		</>
	);
};

// ---------- 12d. Feedback two ----------
const KD = cues(S('feedback-two'), {bio: 'Biological', strain: 'the new strain can infect', wind: 'wind spreads', wet: 'Wet weather helps', agri: 'Agricultural', every: 'every farm grows', blaming: 'Blaming the weather', mistake: 'classic mistake'});
const ALL2: T2 = {a: -100, b: -100, c: -100, d: -100, q: -100};
/** One answer-table row (label column, hand answer wrapped), bright while current. */
const Row: React.FC<{y: number; h: number; label: string; text: string; at: number; lit: number; color: string}> = ({y, h, label, text, at, lit, color}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	const on = lit > 0.5;
	return (
		<g opacity={o * (on ? 1 : 0.75)}>
			<rect x={120} y={y} width={1680} height={h} rx={18} fill={on ? '#fffaf0' : CARD} stroke={on ? color : EDGE} strokeWidth={on ? 3.5 : 2.5} />
			<Sx x={150} y={y + 58} text={label} size={34} color={on ? color : GREY_INK} weight={800} at={-100} />
			<WText x={470} y={y + 58} text={text} size={36} maxW={1290} color={on ? INK : GREY_INK} hand weight={700} at={-100} />
		</g>
	);
};
export const SceneFeedbackTwo: React.FC = () => {
	const f = useCurrentFrame();
	const marks: QMark[] = [
		{phrase: 'able to infect this variety', at: KD.strain, color: TEAL},
		{phrase: 'carried by wind', at: KD.wind, color: TEAL},
		{phrase: 'warm and wet', at: KD.wet, color: TEAL},
		{phrase: 'plants the same wheat variety', at: KD.every, color: AMBER},
	];
	const mw = tw('the wet weather caused it', 30) + 48;
	return (
		<>
			<Heading text="Biology plus farming" at={4} size={50} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={150} w={1720} h={150} at={-100} />
				<QText q={qCheck(STEM2(ALL2), marks)} x={140} y={198} w={2200} size={34} card={false} s={0.74} />
				<Row y={360} h={130} label="biological" text="a strain that infects it, wind-borne spores (helped by wet weather)" at={KD.bio + 4} lit={vis(f, KD.bio, KD.agri, 10)} color={TEAL} />
				<Row y={520} h={130} label="agricultural" text="one variety everywhere, so no resistant plants to slow spread" at={KD.agri + 4} lit={vis(f, KD.agri, KD.blaming, 10)} color={AMBER_INK} />
				<MistakeChip x={130} y={720} text="the wet weather caused it" at={KD.blaming} cross={KD.mistake + 6} size={30} />
				<GTag x={130 + mw + 40} y={726} text="conditions help; the pathogen causes" at={KD.mistake + 16} size={26} />
			</Overlay>
		</>
	);
};

// ---------- 13. Decision rule and handoff ----------
const KE = cues(S('decision-rule'), {so: 'So for any', name: 'name the cause', follow: 'follow the effects', next: 'Next, how a plant'});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const steps = [
		{at: KE.name, text: 'name the cause: pathogen, host, conditions, farming'},
		{at: KE.follow, text: 'follow the effects: on the farm, then past the gate'},
	];
	return (
		<>
			<Heading text="Name the cause, follow the effects" at={KE.so} size={56} />
			<Overlay>
				{steps.map((s, i) => {
					const o = prog(f, s.at, 14);
					const y = 280 + i * 170;
					const dim = 1 - 0.35 * prog(f, steps[i + 1]?.at ?? KE.next, 12);
					return o > 0.01 ? (
						<g key={i} opacity={o * dim} transform={`translate(0,${(1 - o) * 18})`}>
							<rect x={140} y={y} width={1640} height={120} rx={30} fill={i === 1 ? '#fff3d9' : CARD} stroke={AMBER} strokeWidth={3.5} />
							<Sx x={190} y={y + 78} text={`${i + 1}`} size={50} color={AMBER_INK} weight={800} at={-100} />
							<Sx x={270} y={y + 80} text={s.text} size={46} color={INK} hand at={-100} />
						</g>
					) : null;
				})}
				<NextChip x={620} y={820} w={1200} text="Next: how a banksia defends itself" at={KE.next}>
					<g opacity={prog(f, KE.next, 12)}><Pl p={PLATES.banksia} cx={690} cy={862} w={62} /></g>
				</NextChip>
			</Overlay>
		</>
	);
};

// ---------- 14. Key notes ----------
const NOTES = [
	'Disease needs a pathogen, a host it can infect and the right conditions (for example, rust spores need water to germinate). Farming adds risk: one variety over large areas (monoculture) and moving plants, soil and machinery.',
	'Direct effects fall on the infected crop or animals: lower yield (rust takes sugars and leaf area; nematode galls squeeze the xylem), lower quality, control costs.',
	'Myrtle rust (Austropuccinia psidii, a fungus native to the Americas; Australia 2010): Australian myrtles had little resistance; spread by wind and nursery plants; fungicide costs and losses for lemon myrtle and tea tree; native guava now critically endangered; cannot be eradicated.',
	'Foot-and-mouth disease (virus; cattle, sheep, pigs, goats): blisters, lameness, less milk and meat. Direct effects: losses in the infected animals, including their death or culling. Indirect effects, beyond the sick animals (culling healthy animals, movement bans, closed export markets, tourism), usually cost more, especially for an exporter like Australia (FMD-free since 1872).',
	'Assess an effect by how big, how long and how far it reaches.',
];
export const SceneNotes: React.FC = () => (
	<NotesBoard notes={NOTES} aid="Count past the farm gate." tag="the sick plant or animal is only the first cost" size={29} aidTop={790} />
);
