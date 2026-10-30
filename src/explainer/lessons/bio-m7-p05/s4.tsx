// M7 P05 (Biology practical) scenes 13a to 15: two unseen exam items (assess a treatment claim from zone data; identify
// two problems in a flawed antiseptic method and fix each), each whole on screen through "Pause here to answer." and
// its 10 s countdown with nothing answer-bearing; brief feedback with the givens underlined in the question strip as
// they are used and one crossed classic mistake; the plan card with the handoff to vector control; the key notes with
// the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay} from '../bio-m5-b13/shared';
import {HscTag, NextChip, NotesBoard, QText, qCheck} from '../bio-m5-g01/board';
import type {QBlock, QMark} from '../bio-m5-g01/board';
import {CardBox} from '../bio-m6-b01/parts';
import {AnsBox, PauseHold} from '../bio-m7-b01/s3';
import {S, hold} from './common';
import {AMBER, AMBER_INK, CARD, CrossChip, DPlate, EDGE, GREY_INK, INK, PLATES, Pl, Sx, TEAL, TERRA, WText, crossChipW, fitW, prog, vis} from './parts';

// ---------- item 1: assess a treatment claim ----------
type T1 = {s: number; m: number; c: number; d: number};
const Q1 = (t: T1) => [
	{text: 'A student tested two antibiotic discs, P and Q, each 6 mm in diameter, on nutrient agar plates spread with a harmless bacterium. She also used a disc dipped in sterile water.', at: t.s},
	{text: 'After 48 hours at 28 °C, the mean zone of inhibition diameters were: P 22 mm, Q 13 mm, sterile water 6 mm.', at: t.m},
	{text: "She concluded: 'Antibiotic P would be a more effective treatment than Q for a bacterial infection in people.'", at: t.c},
] as QBlock[];
const D1 = (t: T1) => [{text: 'Assess her conclusion. (3 marks)', at: t.d, weight: 700}] as QBlock[];
qCheck([...Q1({s: 0, m: 0, c: 0, d: 0}), ...D1({s: 0, m: 0, c: 0, d: 0})], [{phrase: 'P 22 mm,', at: 0}, {phrase: 'Q 13 mm,', at: 0}, {phrase: 'sterile water 6 mm.', at: 0}, {phrase: "a bacterial infection in people.'", at: 0}]);

// ---------- 13a. Attempt 1 ----------
const KA = cues(S('attempt-1'), {turn: 'Your turn', student: 'A student tested', mean: 'The mean zone', concluded: 'She concluded', assess: 'Assess her conclusion', pause: 'Pause here to answer'});
export const SceneAttemptOne: React.FC = () => {
	const t: T1 = {s: KA.student, m: KA.mean, c: KA.concluded, d: KA.assess};
	const h = hold('attempt-1');
	return (
		<>
			<Heading text="Exam question 1" at={KA.turn} size={50} />
			<Overlay>
				<HscTag at={KA.turn} />
				<CardBox x={100} y={170} w={1720} h={850} at={KA.turn + 6} />
				<QText q={qCheck(Q1(t), [])} x={140} y={250} w={1640} size={36} card={false} />
				<QText q={qCheck(D1(t), [])} x={140} y={560} w={1640} size={38} card={false} />
				<AnsBox x={140} y={620} w={1340} h={380} at={KA.assess + 30} />
				<PauseHold start={h.startFrame} end={h.endFrame} at={KA.pause} />
			</Overlay>
		</>
	);
};

// ---------- 13b. Feedback 1 ----------
const KB = cues(S('feedback-1'), {part: 'only part', p22: "P's twenty two", q13: ['thirteen', 1], control: 'six millimetre control', larger: 'larger clear zone', doesnt: "doesn't show", diffusion: 'dose and diffusion', trials: 'clinical trials', biggest: 'Biggest zone', over: 'overclaim'});
const ALL1: T1 = {s: -100, m: -100, c: -100, d: -100};
const FRow: React.FC<{y: number; label: string; text: string; at: number; color: string; lines: number}> = ({y, label, text, at, color, lines}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			<rect x={120} y={y} width={1680} height={lines * 44 + 30} rx={18} fill="#fffaf0" stroke={color} strokeWidth={3} />
			<Sx x={146} y={y + 46} text={label} size={32} color={color} weight={800} at={-100} />
			<WText x={360} y={y + 46} text={text} size={32} maxW={1410} color={color} hand weight={700} lh={44} at={at} />
		</g>
	);
};
export const SceneFeedbackOne: React.FC = () => {
	const marks: QMark[] = [
		{phrase: 'P 22 mm,', at: KB.p22},
		{phrase: 'Q 13 mm,', at: KB.q13},
		{phrase: 'sterile water 6 mm.', at: KB.control},
		{phrase: "a bacterial infection in people.'", at: KB.diffusion},
	];
	const chip = 'biggest zone = best medicine';
	return (
		<>
			<Heading text="Judge the claim against the data" at={4} size={50} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={150} w={1720} h={210} at={-100} />
				<QText q={qCheck([...Q1(ALL1), {...D1(ALL1)[0], para: true}], marks)} x={140} y={200} w={2240} size={36} card={false} s={0.72} />
				<FRow y={390} label="Judgement" text="only partly supported" at={KB.part} color={INK} lines={1} />
				<FRow y={490} label="Evidence" text="P 22 mm against Q 13 mm; control 6 mm, so paper and water alone made no zone: P produced a larger clear zone, under these conditions" at={KB.p22 + 10} color={TEAL} lines={2} />
				<FRow y={634} label="Limit" text="a larger zone doesn't show a better treatment. Zone size also depends on dose and diffusion; treatment needs the drug to reach the infection safely and work on the real pathogen (clinical trials)" at={KB.doesnt} color={TERRA} lines={3} />
				<CrossChip x={140} y={850} text={chip} at={KB.biggest} cross={KB.over + 6} size={34} />
				<Sx x={140 + crossChipW(chip, 34) + 30} y={890} text="a plate isn't a patient" size={30} color={GREY_INK} weight={600} at={KB.over + 16} />
				<Sx x={1800} y={1010} text="HSCScience marking guide (illustrative)" size={22} color={GREY_INK} weight={600} anchor="end" at={KB.part} />
				{void KB.larger}{void KB.trials}
			</Overlay>
		</>
	);
};

// ---------- item 2: a flawed method ----------
type T2 = {s: number; p: number; d: number};
const Q2 = (t: T2) => [
	{text: 'A student compared two antiseptic solutions, X and Y. She soaked one paper disc in X for 1 minute and another paper disc in Y for 10 minutes, then placed both discs on a single nutrient agar plate spread with a harmless bacterium.', at: t.s},
	{text: 'She incubated the plate at 37 °C for 48 hours, then removed the lid to measure each zone of inhibition with a ruler.', at: t.p},
] as QBlock[];
const D2 = (t: T2) => [{text: 'Identify TWO problems with this method and propose an improvement that fixes each problem. (4 marks)', at: t.d, weight: 700}] as QBlock[];
qCheck(Q2({s: 0, p: 0, d: 0}), [{phrase: 'for 1 minute', at: 0}, {phrase: 'for 10 minutes,', at: 0}, {phrase: 'removed the lid', at: 0}, {phrase: '37 °C', at: 0}, {phrase: 'a single nutrient agar plate', at: 0}]);

// ---------- 13c. Attempt 2 ----------
const KC = cues(S('attempt-2'), {more: 'One more', student: 'A student soaked', put: 'She put both', identify: 'Identify two problems', pause: 'Pause here to answer'});
export const SceneAttemptTwo: React.FC = () => {
	const t: T2 = {s: KC.student, p: KC.put, d: KC.identify};
	const h = hold('attempt-2');
	return (
		<>
			<Heading text="Exam question 2" at={KC.more} size={50} />
			<Overlay>
				<HscTag at={KC.more} />
				<CardBox x={100} y={170} w={1720} h={850} at={KC.more + 6} />
				<QText q={qCheck(Q2(t), [])} x={140} y={250} w={1640} size={36} card={false} />
				<QText q={qCheck(D2(t), [])} x={140} y={520} w={1640} size={38} card={false} />
				<AnsBox x={140} y={630} w={1340} h={370} at={KC.identify + 30} />
				<PauseHold start={h.startFrame} end={h.endFrame} at={KC.pause} />
			</Overlay>
		</>
	);
};

// ---------- 13d. Feedback 2 ----------
const KD = cues(S('feedback-2'), {soak: 'soaking times', every: 'Soak every disc', lid: 'removing the lid', closed: 'keep it closed', careful: 'Being more careful', classic: 'classic mistake', all: 'opened at all'});
const ALL2: T2 = {s: -100, p: -100, d: -100};
export const SceneFeedbackTwo: React.FC = () => {
	const f = useCurrentFrame();
	const silent = KD.closed + 60;
	const marks: QMark[] = [
		{phrase: 'for 1 minute', at: KD.soak},
		{phrase: 'for 10 minutes,', at: KD.soak + 10},
		{phrase: 'removed the lid', at: KD.lid},
		{phrase: '37 °C', at: silent},
		{phrase: 'a single nutrient agar plate', at: silent + 10},
	];
	const rows = [
		{p: 'unequal soaking → different amounts of antiseptic', fix: 'same soaking time, or the same measured volume (for example 10 µL) on each disc', at: KD.soak, fixAt: KD.every},
		{p: 'lid removed → exposure to unknown growth', fix: 'keep it closed; measure through the base', at: KD.lid, fixAt: KD.closed},
	];
	const X1 = 120, W1 = 760, X2 = 900, W2 = 920, Y0 = 420, RH = 130;
	const chip = 'be more careful opening the lid';
	return (
		<>
			<Heading text="Each fix must fix its problem" at={4} size={50} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={150} w={1720} h={190} at={-100} />
				<QText q={qCheck(Q2(ALL2), marks)} x={140} y={200} w={2240} size={36} card={false} s={0.72} />
				<g opacity={prog(f, KD.soak - 6, 12)}>
					<Sx x={X1 + 20} y={Y0 - 16} text="problem" size={30} color={INK} weight={800} at={-100} />
					<Sx x={X2 + 20} y={Y0 - 16} text="improvement that fixes it" size={30} color={INK} weight={800} at={-100} />
				</g>
				{rows.map((r, i) => {
					const o = prog(f, r.at, 12);
					if (o <= 0.01) return null;
					const dim = prog(f, KD.careful, 12) * 0;
					const y = Y0 + i * (RH + 12);
					return (
						<g key={i} opacity={o * (1 - 0.35 * dim)}>
							<rect x={X1} y={y} width={W1} height={RH} rx={16} fill="#fffaf0" stroke={AMBER} strokeWidth={3.5} />
							<rect x={X2} y={y} width={W2} height={RH} rx={16} fill="#fffaf0" stroke={AMBER} strokeWidth={3.5} />
							<WText x={X1 + 22} y={y + 52} text={r.p} size={32} maxW={W1 - 44} color={INK} hand weight={700} at={r.at} />
							<WText x={X2 + 22} y={y + 52} text={r.fix} size={32} maxW={W2 - 44} color={AMBER_INK} hand weight={700} at={r.fixAt} />
						</g>
					);
				})}
				<g opacity={vis(f, silent, undefined, 12)}>
					<rect x={X1} y={Y0 + 2 * (RH + 12)} width={W1 + W2 + 20} height={96} rx={16} fill={CARD} stroke={EDGE} strokeWidth={2.5} />
					<WText x={X1 + 22} y={Y0 + 2 * (RH + 12) + 40} text="also: 37 °C → 25 to 30 °C; one plate, no control → three plates and a blank disc" size={28} maxW={W1 + W2 - 30} color={GREY_INK} weight={600} at={silent} />
				</g>
				<CrossChip x={140} y={860} text={chip} at={KD.careful} cross={KD.classic + 6} size={32} />
				<Sx x={140 + crossChipW(chip, 32) + 30} y={900} text="the fix must remove the exposure" size={30} color={GREY_INK} weight={600} at={KD.all} />
				{void Pl}{void fitW}{void DPlate}
			</Overlay>
		</>
	);
};

// ---------- 14. Decision rule and handoff ----------
const KE = cues(S('decision-rule'), {lawn: 'a lawn', discs: 'discs spaced', closed: 'closed and upside', measure: 'Measure through', claim: 'claim only', next: 'Next'});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const lines = [
		{at: KE.lawn, t: '1 Lawn of an approved harmless culture (0.1 mL, spread evenly).'},
		{at: KE.discs, t: '2 Discs ≥ 2 cm apart; blank disc control; three plates, positions rotated.'},
		{at: KE.closed, t: '3 Label the base, close the lid (school procedure), invert, 25 to 30 °C, never opened.'},
		{at: KE.measure, t: '4 Measure through the base, two diameters, mean of three plates.'},
		{at: KE.claim, t: "5 Claim: the larger clear zone, under these conditions; not 'the stronger drug' or 'the better medicine'."},
	];
	return (
		<>
			<Heading text="The plan, start to finish" at={4} size={56} />
			<Overlay>
				{lines.map((l, i) => {
					const o = prog(f, l.at, 14);
					if (o <= 0.01) return null;
					const lit = vis(f, l.at, lines[i + 1]?.at ?? KE.next, 10);
					const y = 190 + i * 122;
					const long = l.t.length > 74;
					return (
						<g key={i} opacity={o * (lit > 0.5 ? 1 : 0.7)} transform={`translate(0,${(1 - o) * 16})`}>
							<rect x={100} y={y} width={1720} height={long ? 108 : 100} rx={26} fill={lit > 0.5 ? '#fff3d9' : CARD} stroke={lit > 0.5 ? AMBER : EDGE} strokeWidth={3.5} />
							{long ? <WText x={136} y={y + 44} text={l.t} size={34} maxW={1650} color={INK} hand weight={700} lh={40} /> : <Sx x={136} y={y + 64} text={l.t} size={38} color={INK} hand />}
						</g>
					);
				})}
				<NextChip x={820} y={840} w={1000} text="Next: vector control" at={KE.next}>
					<Pl p={PLATES.mosquito} cx={886} cy={882} w={fitW(PLATES.mosquito, 100, 64)} />
				</NextChip>
			</Overlay>
		</>
	);
};

// ---------- 15. Key notes ----------
const NOTES = [
	"A disc's antibiotic diffuses into the agar, strongest near the disc. The zone of inhibition is the clear ring where it is strong enough to stop growth.",
	'Variables: independent = the antibiotic; dependent = zone diameter (mm); controlled = culture and volume, agar batch and depth, disc size, spacing, 25 to 30 °C, 48 h. Negative control: blank disc + sterile water (no zone). Three plates, positions rotated.',
	'Measure through the base, two diameters at right angles, averaged; no zone = 6 mm (the disc).',
	'A larger zone shows a larger clear region under these conditions, not a stronger drug. Zone size also depends on dose, diffusion and whether the bacterium has the drug\'s target. Effectiveness as a treatment needs clinical trials.',
	"Safety: follow your teacher's approved school procedure; only the approved teaching culture; plates closed, inverted, 25 to 30 °C (never 37 °C), never opened to measure; forceps for discs (antibiotic allergy); teacher autoclaves before disposal; wash hands.",
];
export const SceneNotes: React.FC = () => (
	<NotesBoard notes={NOTES} aid="Zone shows the plate, not the patient." tag="Plates stay closed: measure through the base." size={30} aidTop={830} />
);
void TEAL; void TERRA;
