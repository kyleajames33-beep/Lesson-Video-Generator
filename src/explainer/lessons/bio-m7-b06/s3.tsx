// M7 B06 scenes 13a to 15: two unseen exam items (a blue dye leak after histamine; a child whose neutrophils cannot
// attach to vessel walls), each whole on screen through "Pause here to answer." and its 10 s countdown, with no plates,
// strip or vessel (nothing answer-bearing); brief feedback with the givens underlined in the question strip as they are
// used and one crossed classic mistake (no givens card); the decision rule beside the small strip with the handoff to
// B cells; the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, MistakeChip, Overlay} from '../bio-m5-b13/shared';
import {HscTag, NextChip, NotesBoard, QText, qCheck} from '../bio-m5-g01/board';
import type {QBlock, QMark} from '../bio-m5-g01/board';
import {AnsBox, PauseHold} from '../bio-m7-b01/s3';
import {WText} from '../bio-m6-p01/parts';
import {S, hold} from './common';
import {stripAt} from './board';
import {ResponseStrip, stripRects} from './strip';
import {AMBER, AMBER_INK, CARD, CardBox, DROP, EDGE, GREY_INK, GTag, INK, Sx, TEAL, prog, tw, vis} from './parts';

/** A feedback row: a short bold label column and one hand answer line; bright while current. */
export const ARow: React.FC<{y: number; label?: string; text: string; at: number; lit: number; color?: string; x?: number; w?: number; labelW?: number; size?: number}> = ({y, label, text, at, lit, color = TEAL, x = 120, w = 1680, labelW = 260, size = 38}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	const on = lit > 0.5;
	const tx = label ? x + labelW : x + 30;
	return (
		<g opacity={o * (on ? 1 : 0.75)}>
			<rect x={x} y={y} width={w} height={88} rx={18} fill={on ? '#fffaf0' : CARD} stroke={on ? color : EDGE} strokeWidth={on ? 3.5 : 2.5} />
			{label ? <Sx x={x + 28} y={y + 56} text={label} size={32} color={on ? color : GREY_INK} weight={800} at={-100} /> : null}
			<WText x={tx} y={y + 58} text={text} size={size} maxW={x + w - tx - 24} color={on ? INK : GREY_INK} hand weight={700} at={-100} />
		</g>
	);
};

// ---------- item 1: the dye leak ----------
type T1 = {a: number; b: number; c: number; d: number};
const STEM1 = (t: T1) => [
	{text: 'A blue dye that binds to proteins in blood plasma was injected into the bloodstream of a mouse.', at: t.a},
	{text: 'Histamine solution was then injected into one small area of its skin, and saline (salt solution) into another area as a control.', at: t.b},
	{text: 'After 15 minutes, the skin at the histamine site was stained blue. The skin at the saline site was not.', at: t.c},
] as QBlock[];
const DEM1 = (t: T1) => [{text: 'Explain the result. Explain how this change helps to defend tissue against bacteria. (3 marks)', at: t.d, weight: 700}] as QBlock[];
const MARKS1 = ['Histamine solution', 'binds to proteins in blood plasma', 'stained blue', 'as a control'];
qCheck(STEM1({a: 0, b: 0, c: 0, d: 0}), MARKS1.map(phrase => ({phrase, at: 0})));

// ---------- 13a. Attempt one ----------
const KA = cues(S('attempt'), {two: 'Two exam questions', first: 'First', exp: 'In an experiment', hist: 'Histamine was then', within: 'Within fifteen minutes', explain: 'Explain this result', pause: 'Pause here to answer'});
export const SceneAttempt: React.FC = () => {
	const t: T1 = {a: KA.exp, b: KA.hist, c: KA.within, d: KA.explain};
	const h = hold('attempt');
	return (
		<>
			<Heading text="Exam question 1" at={KA.two} size={50} />
			<Overlay>
				<HscTag at={KA.two} />
				<CardBox x={100} y={170} w={1720} h={850} at={KA.first - 6} />
				<QText q={qCheck(STEM1(t), [])} x={140} y={240} w={1640} size={36} card={false} />
				<QText q={qCheck(DEM1(t), [])} x={140} y={560} w={1640} size={36} card={false} />
				<AnsBox x={140} y={680} w={1340} h={320} at={KA.explain + 30} />
				<PauseHold start={h.startFrame} end={h.endFrame} at={KA.pause} />
			</Overlay>
		</>
	);
};

// ---------- 13b. Feedback one ----------
const KB = cues(S('feedback-one'), {made: 'Histamine made', carrying: 'carrying the blood', blue: 'turned blue', control: 'The control shows', infection: 'In an infection', reach: 'white blood cells reach', saying: 'Saying the vessels', mistake: 'classic mistake'});
export const SceneFeedbackOne: React.FC = () => {
	const f = useCurrentFrame();
	const all: T1 = {a: -100, b: -100, c: -100, d: -100};
	const marks: QMark[] = [
		{phrase: 'Histamine solution', at: KB.made + 4, color: TEAL},
		{phrase: 'binds to proteins in blood plasma', at: KB.carrying, color: TEAL},
		{phrase: 'stained blue', at: KB.blue, color: TEAL},
		{phrase: 'as a control', at: KB.control, color: AMBER},
	];
	const lit = (a: number, b: number) => vis(f, a, b, 10);
	const mw = tw('vessels widened, so dye showed', 30) + 48;
	return (
		<>
			<Heading text="Leaky walls let the dye out" at={4} size={50} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={150} w={1720} h={172} at={-100} />
				<QText q={qCheck(STEM1(all), marks)} x={140} y={196} w={2200} size={34} card={false} s={0.74} />
				<ARow y={370} label="result" text="histamine → leaky vessel walls" at={KB.made + 6} lit={lit(KB.made, KB.carrying + 30)} />
				<ARow y={370} label="result" text="histamine → leaky walls: proteins and dye leave the blood" at={KB.carrying + 30} lit={lit(KB.carrying + 30, KB.control)} />
				<ARow y={480} label="control" text="control: not the injection itself" at={KB.control + 6} lit={lit(KB.control, KB.infection)} color={AMBER_INK} />
				<ARow y={590} label="defence" text="defence: cells and proteins reach the site" at={KB.reach} lit={lit(KB.reach, KB.saying)} />
				<MistakeChip x={130} y={740} text="vessels widened, so dye showed" at={KB.saying} cross={KB.mistake + 6} size={30} />
				<GTag x={130 + mw + 40} y={746} text="widening: more blood, not leakage" at={KB.mistake + 16} size={26} />
				{void DROP}
			</Overlay>
		</>
	);
};

// ---------- item 2: neutrophils that cannot leave ----------
type T2 = {a: number; b: number; c: number; d: number};
const STEM2 = (t: T2) => [
	{text: 'A child has an inherited condition in which neutrophils cannot attach to the inner wall of blood vessels.', at: t.a},
	{text: 'Blood tests show a higher than normal number of neutrophils in the blood.', at: t.b},
	{text: 'The child has repeated bacterial skin infections, and infected wounds form little or no pus.', at: t.c},
] as QBlock[];
const DEM2 = (t: T2) => [{text: 'Explain these observations. (4 marks)', at: t.d, weight: 700}] as QBlock[];
const MARKS2 = ['cannot attach to the inner wall', 'higher than normal number of neutrophils in the blood', 'repeated bacterial skin infections', 'little or no pus'];
qCheck(STEM2({a: 0, b: 0, c: 0, d: 0}), MARKS2.map(phrase => ({phrase, at: 0})));

// ---------- 13c. Attempt two ----------
const KC = cues(S('attempt-two'), {second: 'Second', child: 'A child has', blood: 'Their blood contains', yet: 'yet they get', explain: 'Explain these', pause: 'Pause here to answer'});
export const SceneAttemptTwo: React.FC = () => {
	const t: T2 = {a: KC.child, b: KC.blood, c: KC.yet, d: KC.explain};
	const h = hold('attempt-two');
	return (
		<>
			<Heading text="Exam question 2" at={KC.second} size={50} />
			<Overlay>
				<HscTag at={KC.second} />
				<CardBox x={100} y={170} w={1720} h={850} at={KC.second + 6} />
				<QText q={qCheck(STEM2(t), [])} x={140} y={240} w={1640} size={36} card={false} />
				<QText q={qCheck(DEM2(t), [])} x={140} y={500} w={1640} size={36} card={false} />
				<AnsBox x={140} y={600} w={1340} h={400} at={KC.explain + 30} />
				<PauseHold start={h.startFrame} end={h.endFrame} at={KC.pause} />
			</Overlay>
		</>
	);
};

// ---------- 13d. Feedback two ----------
const KD = cues(S('feedback-two'), {must: 'must stick to', stay: 'stay in the blood', fewer: 'fewer bacteria are', pus: 'Pus is mostly', thinking: 'Thinking more', mistake: 'classic mistake'});
export const SceneFeedbackTwo: React.FC = () => {
	const f = useCurrentFrame();
	const all: T2 = {a: -100, b: -100, c: -100, d: -100};
	const marks: QMark[] = [
		{phrase: 'cannot attach to the inner wall', at: KD.must + 6, color: TEAL},
		{phrase: 'higher than normal number of neutrophils in the blood', at: KD.stay, color: TEAL},
		{phrase: 'repeated bacterial skin infections', at: KD.fewer, color: TEAL},
		{phrase: 'little or no pus', at: KD.pus, color: TEAL},
	];
	const lit = (a: number, b: number) => vis(f, a, b, 10);
	const mw = tw('more neutrophils in blood = stronger defence', 30) + 48;
	return (
		<>
			<Heading text="Stuck in the blood" at={4} size={50} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={150} w={1720} h={172} at={-100} />
				<QText q={qCheck(STEM2(all), marks)} x={140} y={196} w={2200} size={34} card={false} s={0.74} />
				<ARow y={370} label="high count" text="can't leave: they stay in the blood" at={KD.stay} lit={lit(KD.stay, KD.fewer)} />
				<ARow y={480} label="infections" text="none at the site: bacteria not engulfed" at={KD.fewer + 6} lit={lit(KD.fewer, KD.pus)} />
				<ARow y={590} label="little pus" text="no neutrophils arriving: no pus" at={KD.pus + 6} lit={lit(KD.pus, KD.thinking)} />
				<MistakeChip x={130} y={740} text="more neutrophils in blood = stronger defence" at={KD.thinking} cross={KD.mistake + 6} size={30} />
				<GTag x={130 + mw + 40} y={746} text="they must reach the tissue" at={KD.mistake + 16} size={26} />
			</Overlay>
		</>
	);
};

// ---------- 14. Decision rule and handoff ----------
const KE = cues(S('decision-rule'), {so: 'So for any', which: 'which barrier was', infl: 'how inflammation changes', phago: 'how phagocytes reach', adapt: 'how adaptive cells', next: 'Next, how B'});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const strip = stripAt(11, [{thumbs: []}, {thumbs: []}, {thumbs: []}, {thumbs: []}], {x: 90, y: 200, w: 330, rh: 132, gap: 48, size: 30});
	const R = stripRects(strip);
	const steps = [
		{at: KE.which, text: 'barrier crossed'},
		{at: KE.infl, text: 'vessels: wider, leaky'},
		{at: KE.phago, text: 'phagocytes: reach, bind, engulf, digest'},
		{at: KE.adapt, text: 'dendritic cells alert T cells'},
	];
	return (
		<>
			<Heading text="Block, alarm, eat, alert" at={KE.so} size={56} />
			<Overlay>
				<ResponseStrip {...strip} />
				{steps.map((s, i) => {
					const o = prog(f, s.at, 14);
					const y = R[i].y + R[i].h / 2 - 46;
					const next = steps[i + 1]?.at ?? KE.next;
					const dim = 1 - 0.35 * prog(f, next, 12);
					return o > 0.01 ? (
						<g key={i} opacity={o * dim} transform={`translate(${(1 - o) * 18},0)`}>
							<rect x={520} y={y} width={1260} height={92} rx={26} fill={i === 3 ? '#fff3d9' : CARD} stroke={i === 3 ? AMBER : TEAL} strokeWidth={3.5} />
							<Sx x={560} y={y + 62} text={`${i + 1}`} size={46} color={i === 3 ? AMBER_INK : TEAL} weight={800} at={-100} />
							<Sx x={630} y={y + 62} text={s.text} size={42} color={INK} hand at={-100} />
						</g>
					) : null;
				})}
				<NextChip x={720} y={920} w={1100} text="Next: how B cells target an antigen" at={KE.next} />
			</Overlay>
		</>
	);
};

// ---------- 15. Key notes ----------
const NOTES = [
	'Barriers (always there): skin\'s dead outer layers flake off with microbes; mucus traps microbes and cilia sweep it to the throat; stomach acid kills many swallowed microbes; lysozyme (in tears and saliva) breaks down many bacterial walls.',
	'Innate immune system: barriers plus fast responses; born with it; works in much the same way against many pathogens; no improvement with repeat exposure.',
	'Inflammation: damaged cells and mast cells release chemicals. Histamine widens small vessels (red, warm) and makes them leaky, so fluid and proteins seep out (swelling); chemicals and pressure cause pain. Purpose: deliver cells and proteins to the infection.',
	'Neutrophils stick to the vessel wall near the infection, squeeze out and follow a chemical trail. Phagocytosis: bind, wrap, seal inside, lysosome enzymes digest. Pus: dead neutrophils, bacteria, fluid. Fever can follow if infection spreads.',
	'Dendritic cells carry pieces of the pathogen to a lymph node and show them to T cells: the adaptive response (specific, days to build) begins while the innate response is still going.',
	'Model: draw the four rungs (barriers, always there; inflammation, minutes; phagocytes, hours; adaptive, days) and label one change at each.',
];
export const SceneNotes: React.FC = () => (
	<NotesBoard notes={NOTES} aid="Block, alarm, eat, alert." tag="barriers block, inflammation raises the alarm, phagocytes eat, dendritic cells alert" size={25} aidTop={862} />
);
