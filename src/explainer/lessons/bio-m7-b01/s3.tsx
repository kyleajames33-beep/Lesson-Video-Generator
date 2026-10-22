// M7 B01 scenes 11a to 13: two unseen exam items (classify three agents described only by structure; explain why an
// antibiotic could act on bovine TB but not BSE), each kept whole on screen through "Pause here to answer." and its
// 10 s countdown, with no plates that give the answer away; brief feedback with the givens underlined in the question
// strip as they are used and one crossed classic mistake (no givens card); the decision rule with the handoff to
// Pasteur and Koch; the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Countdown, Heading, MistakeChip, Overlay} from '../bio-m5-b13/shared';
import {HscTag, NextChip, NotesBoard, QText, qCheck} from '../bio-m5-g01/board';
import type {QBlock, QMark} from '../bio-m5-g01/board';
import {CardBox} from '../bio-m6-b01/parts';
import {S, hold} from './common';
import {AMBER, AMBER_INK, CARD, DrawPath, EDGE, GREYT, GREY_INK, GTag, GreyCross, INK, INK_SOFT, PLATES, Pl, Sx, fitW, prog, vis} from './parts';
import type {PB} from './parts';

export const PauseHold: React.FC<{start: number; end: number; at: number}> = ({start, end, at}) => (
	<>
		<Sx x={140} y={1048} text="Pause here to answer." size={48} color={AMBER_INK} hand at={at} />
		<Countdown start={start} end={end} x={1680} y={860} r={60} />
	</>
);
export const AnsBox: React.FC<{x: number; y: number; w: number; h: number; at: number}> = ({x, y, w, h, at}) => {
	const f = useCurrentFrame();
	return (
		<>
			<CardBox x={x} y={y} w={w} h={h} at={at} dash="10 7" />
			<Sx x={x + 22} y={y + 40} text="answer" size={26} color={INK_SOFT} weight={700} at={at} />
			{[1, 2, 3, 4, 5].map(i => (y + 40 + i * 52 < y + h - 10 ? <line key={i} x1={x + 20} x2={x + w - 20} y1={y + 40 + i * 52} y2={y + 40 + i * 52} stroke="#e4dccb" strokeWidth={2} opacity={prog(f, at, 14)} /> : null))}
		</>
	);
};
/** A feedback answer row: bold label, the hand answer, an optional plate thumbnail at its end; bright while current. */
export const FbRow: React.FC<{y: number; label: string; text: string; at: number; lit: number; plate?: PB; x?: number; w?: number}> = ({y, label, text, at, lit, plate, x = 120, w = 1680}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	const on = lit > 0.5;
	return (
		<g opacity={o * (on ? 1 : 0.7)}>
			<rect x={x} y={y} width={w} height={92} rx={18} fill={on ? '#fffaf0' : CARD} stroke={on ? AMBER : EDGE} strokeWidth={on ? 3.5 : 2.5} />
			<Sx x={x + 30} y={y + 60} text={label} size={36} color={on ? INK : GREY_INK} weight={800} />
			<Sx x={x + 110} y={y + 62} text={text} size={40} color={on ? INK : GREY_INK} hand />
			{plate ? <Pl p={plate} cx={x + w - 80} cy={y + 46} w={fitW(plate, 120, 76)} dim={on ? 0 : 0.6} /> : null}
		</g>
	);
};

// ---------- item 1: three agents ----------
type T1 = {s: number; p: number; q: number; r: number; d: number};
const STEM1 = (t: T1) => [
	{text: 'Three disease-causing agents were isolated from infected organisms.', at: t.s},
	{text: 'Agent P: a single cell with its own nucleus and no cell wall, found inside the red blood cells of a wild bird.', at: t.p, para: true},
	{text: 'Agent Q: a small circular RNA molecule with no protein coat, isolated from deformed potato tubers.', at: t.q, para: true},
	{text: 'Agent R: a flat, segmented worm about 2 m long, attached to the intestine wall of a dog.', at: t.r, para: true},
] as QBlock[];
const DEM1 = (t: T1) => [{text: 'Classify each agent as a type of pathogen. Justify each classification. (3 marks)', at: t.d, weight: 700}] as QBlock[];
const MARKS1 = ['a single cell', 'its own nucleus', 'no cell wall', 'circular RNA molecule', 'no protein coat', 'segmented worm', '2 m long'];
qCheck(STEM1({s: 0, p: 0, q: 0, r: 0, d: 0}), MARKS1.map(phrase => ({phrase, at: 0})));

// ---------- 11a. Attempt one ----------
const KA = cues(S('attempt'), {two: 'Two exam questions', first: 'First', three: 'Three agents', p: 'Agent P', q: 'Agent Q', r: 'Agent R', classify: 'Classify each', pause: 'Pause here to answer'});
export const SceneAttempt: React.FC = () => {
	const t: T1 = {s: KA.three, p: KA.p, q: KA.q, r: KA.r, d: KA.classify};
	const h = hold('attempt');
	return (
		<>
			<Heading text="Exam question 1" at={KA.two} size={50} />
			<Overlay>
				<HscTag at={KA.two} />
				<CardBox x={100} y={180} w={1720} h={840} at={KA.first - 6} />
				<QText q={qCheck(STEM1(t), [])} x={140} y={252} w={1640} size={38} card={false} />
				<QText q={qCheck(DEM1(t), [])} x={140} y={690} w={1640} size={38} card={false} />
				<AnsBox x={140} y={740} w={1340} h={260} at={KA.classify + 20} />
				<PauseHold start={h.startFrame} end={h.endFrame} at={KA.pause} />
			</Overlay>
		</>
	);
};

// ---------- 11b. Feedback one ----------
const KB = cues(S('feedback-one'), {p: 'P is a protozoan', pcell: 'one cell', pwall: 'no wall', q: 'Q is a viroid', qrna: 'RNA with', r: 'R is a helminth', ranimal: 'many-celled animal', calling: 'Calling Q', mistake: 'classic mistake'});
const ALL1: T1 = {s: -100, p: -100, q: -100, r: -100, d: -100};
export const SceneFeedbackOne: React.FC = () => {
	const f = useCurrentFrame();
	const marks: QMark[] = [
		{phrase: 'a single cell', at: KB.pcell}, {phrase: 'its own nucleus', at: KB.pcell + 10}, {phrase: 'no cell wall', at: KB.pwall},
		{phrase: 'circular RNA molecule', at: KB.qrna}, {phrase: 'no protein coat', at: KB.qrna + 14},
		{phrase: 'segmented worm', at: KB.ranimal}, {phrase: '2 m long', at: KB.ranimal + 12},
	];
	const lit = (a: number, b: number) => vis(f, a, b, 10);
	return (
		<>
			<Heading text="Sort each agent by its structure" at={4} size={50} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={160} w={1720} h={250} at={-100} />
				<QText q={qCheck(STEM1(ALL1), marks)} x={140} y={210} w={2120} size={34} card={false} s={0.76} />
				<FbRow y={450} label="P" text="protozoan (microorganism): one cell, nucleus, no wall" at={KB.p} lit={lit(KB.p, KB.r)} plate={PLATES.plasmo} />
				<FbRow y={562} label="Q" text="viroid (non-cellular): RNA only" at={KB.q} lit={lit(KB.q, KB.r)} plate={PLATES.viroid} />
				<FbRow y={674} label="R" text="helminth (macroorganism): many-celled animal" at={KB.r} lit={lit(KB.r, KB.calling)} plate={PLATES.tapeworm} />
				<MistakeChip x={140} y={830} text="Q is a small virus" at={KB.calling} cross={KB.mistake} size={32} />
				<GTag x={560} y={836} text="a virus has a protein coat" at={KB.mistake + 14} size={28} />
			</Overlay>
		</>
	);
};

// ---------- item 2: bovine TB and BSE ----------
type T2 = {a: number; b: number; q: number};
const STEM2 = (t: T2) => [
	{text: 'Bovine tuberculosis is caused by Mycobacterium bovis, a rod-shaped bacterium.', at: t.a},
	{text: 'Bovine spongiform encephalopathy (BSE) is caused by a prion.', at: t.b},
] as QBlock[];
const DEM2 = (t: T2) => [{text: 'Explain why an antibiotic could act on the pathogen that causes one of these diseases but not on the other. (3 marks)', at: t.q, weight: 700}] as QBlock[];
qCheck(STEM2({a: 0, b: 0, q: 0}), [{phrase: 'rod-shaped bacterium', at: 0}, {phrase: 'a prion', at: 0}]);

// ---------- 11c. Attempt two ----------
const KC = cues(S('attempt-two'), {second: 'Second', bovine: 'Bovine tuberculosis', mad: 'Mad cow', explain: 'Explain why', pause: 'Pause here to answer'});
export const SceneAttemptTwo: React.FC = () => {
	const f = useCurrentFrame();
	const t: T2 = {a: KC.bovine, b: KC.mad, q: KC.explain};
	const h = hold('attempt-two');
	return (
		<>
			<Heading text="Exam question 2" at={KC.second} size={50} />
			<Overlay>
				<HscTag at={KC.second} />
				<CardBox x={100} y={180} w={1720} h={840} at={KC.second + 6} />
				<Pl p={PLATES.cow} cx={1630} cy={320} w={260} o={prog(f, KC.bovine, 14)} />
				<QText q={qCheck(STEM2(t), [])} x={140} y={260} w={1300} size={36} card={false} />
				<QText q={qCheck(DEM2(t), [])} x={140} y={480} w={1300} size={36} card={false} />
				<AnsBox x={140} y={630} w={1340} h={370} at={KC.explain + 30} />
				<PauseHold start={h.startFrame} end={h.endFrame} at={KC.pause} />
			</Overlay>
		</>
	);
};

// ---------- 11d. Feedback two ----------
const KD = cues(S('feedback-two'), {tb: 'tuberculosis bacterium', prok: 'prokaryotic cell', ribo: 'bacterial ribosomes', enz: 'enzymes that build', prion: 'The prion is', misf: 'misfolded protein', nothing: 'nothing to act on', saying: 'Saying the prion', mistake: 'classic mistake'});
const ALL2: T2 = {a: -100, b: -100, q: -100};
const Cell2: React.FC<{x: number; y: number; w: number; text: string[]; at: number; lit: number; plate?: PB; mark?: 'tick' | 'cross'; markAt?: number}> = ({x, y, w, text, at, lit, plate, mark, markAt}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	const on = lit > 0.5;
	return (
		<g opacity={o * (on ? 1 : 0.75)}>
			<rect x={x} y={y} width={w} height={110} rx={16} fill={on ? '#fffaf0' : CARD} stroke={on ? AMBER : EDGE} strokeWidth={on ? 3.5 : 2.5} />
			{text.map((s, i) => <Sx key={i} x={x + 24} y={y + (text.length > 1 ? 46 + i * 42 : 68)} text={s} size={36} color={on ? INK : GREY_INK} hand />)}
			{plate ? <Pl p={plate} cx={x + w - 70} cy={y + 55} w={fitW(plate, 100, 84)} dim={on ? 0 : 0.5} /> : null}
			{mark === 'tick' && markAt !== undefined && f >= markAt ? <DrawPath d={`M${x + w - 92},${y + 56} L${x + w - 72},${y + 78} L${x + w - 40},${y + 34}`} at={markAt} dur={12} color={AMBER_INK} width={7} /> : null}
			{mark === 'cross' && markAt !== undefined ? <GreyCross x={x + w - 60} y={y + 55} at={markAt} s={22} /> : null}
		</g>
	);
};
export const SceneFeedbackTwo: React.FC = () => {
	const f = useCurrentFrame();
	const marks: QMark[] = [{phrase: 'rod-shaped bacterium', at: KD.tb}, {phrase: 'a prion', at: KD.misf}];
	const lit = (a: number, b: number) => vis(f, a, b, 10);
	const X0 = 470, CW = 660;
	return (
		<>
			<Heading text="No target, no action" at={4} size={50} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={160} w={1720} h={150} at={-100} />
				<QText q={qCheck(STEM2(ALL2), marks)} x={140} y={214} w={2040} size={34} card={false} s={0.8} />
				<Sx x={X0 + CW / 2} y={380} text="bovine TB" size={38} color={INK} weight={800} anchor="middle" at={KD.tb - 6} />
				<Sx x={X0 + CW + 30 + CW / 2} y={380} text="BSE" size={38} color={INK} weight={800} anchor="middle" at={KD.tb - 6} />
				<Sx x={120} y={470} text="what it is" size={30} color={GREY_INK} weight={700} at={KD.tb} />
				<Sx x={120} y={610} text="antibiotic" size={30} color={GREY_INK} weight={700} at={KD.ribo} />
				<Sx x={120} y={646} text="targets" size={30} color={GREY_INK} weight={700} at={KD.ribo} />
				<Cell2 x={X0} y={410} w={CW} text={['prokaryotic cell']} at={KD.prok} lit={lit(KD.prok, KD.ribo)} plate={PLATES.tb} />
				<Cell2 x={X0} y={550} w={CW} text={['bacterial ribosomes,', 'wall-building enzymes']} at={KD.ribo} lit={lit(KD.ribo, KD.prion)} mark="tick" markAt={KD.enz + 20} />
				<Cell2 x={X0 + CW + 30} y={410} w={CW} text={['misfolded protein: no cell']} at={KD.misf} lit={lit(KD.misf, KD.nothing)} plate={PLATES.prionM} />
				<Cell2 x={X0 + CW + 30} y={550} w={CW} text={['none']} at={KD.nothing} lit={lit(KD.nothing, KD.saying)} mark="cross" markAt={KD.nothing + 14} />
				<MistakeChip x={140} y={760} text="the prion is too small for the drug to reach" at={KD.saying} cross={KD.mistake} size={32} />
				{void GREYT}
			</Overlay>
		</>
	);
};

// ---------- 12. Decision rule and handoff ----------
const KE = cues(S('decision-rule'), {so: 'So when a question', first: 'first ask', then: 'Then sort', group: 'Its group', next: 'Next, how'});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const steps = [
		{at: KE.first, text: 'a pathogen, or something else?'},
		{at: KE.then, text: 'sort it: cells? many-celled animal? nucleus? what is it made of?'},
		{at: KE.group, text: 'its group predicts the treatment'},
	];
	return (
		<>
			<Heading text="Name the cause, sort it, then treat" at={KE.so} size={56} />
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
				<NextChip x={720} y={820} w={1100} text="Next: how Pasteur and Koch linked microbes to disease" at={KE.next}>
					<Pl p={PLATES.tb} cx={784} cy={862} w={80} />
				</NextChip>
			</Overlay>
		</>
	);
};

// ---------- 13. Key notes ----------
const NOTES = [
	'An infectious disease is caused by a pathogen (an organism or agent that lives in or on its host and harms it), and most can pass between hosts. Non-infectious diseases (such as type 2 diabetes) cannot be caught. Most microbes are not pathogens.',
	'Microorganisms (single cells or threads, each too small to see on its own): bacteria (prokaryotes, no nucleus; the tuberculosis bacterium has a peptidoglycan wall), fungi (nucleus, chitin in the wall, threads and spores; tinea, wheat stem rust), protozoa (one cell, nucleus, no wall; malaria).',
	'Macroorganisms (many-celled animals): parasitic worms such as helminths (pork tapeworm) and, in plants, root-knot nematodes; ectoparasites (ticks, lice).',
	'Non-cellular: virus (DNA or RNA in a protein coat; multiplies only inside a host cell; COVID-19, tobacco mosaic virus), viroid (RNA only; known in plants; potato spindle tuber), prion (misfolded protein only; makes normal copies misfold; known in animals; BSE).',
	'A drug must target something the pathogen has and the host lacks: antibiotics act on bacteria, not on viruses or prions.',
];
export const SceneNotes: React.FC = () => (
	<NotesBoard notes={NOTES} aid="Not a cell means antibiotics are useless. Viroid: RNA only. Prion: protein only." tag="sort by cells, many-celled animal, nucleus, then what it is made of" size={30} aidTop={830} />
);
