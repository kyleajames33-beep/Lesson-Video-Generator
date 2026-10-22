// M6 P01 (Biology practical) scenes 14 to 19: two unseen HSC-style tasks, each kept whole on screen through "Pause
// here to answer." and its 10 s countdown; brief feedback with the givens underlined as they are used, one reasoning
// line at a time (earlier lines dim) and one crossed classic mistake; the decision rule with the handoff to b03; the
// key notes with the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Countdown, Heading, Overlay} from '../bio-m5-b13/shared';
import {HscTag, NotesBoard, QText, qCheck} from '../bio-m5-g01/board';
import type {QBlock, QMark} from '../bio-m5-g01/board';
import {CardBox} from '../bio-m6-b01/parts';
import {S, hold} from './common';
import {AMBER, AMBER_INK, CARD, FONT_DISPLAY, CTag, CrossChip, EDGE, GREY_INK, GTag, INK, INK_SOFT, PLATES, Pl, Sx, TERRA, TEAL, VIOLET, WText, prog, smooth, tw} from './parts';

const PauseHold: React.FC<{id: string; at: number}> = ({id, at}) => {
	const h = hold(id);
	return (
		<>
			<Sx x={140} y={1048} text="Pause here to answer." size={48} color={AMBER_INK} hand at={at} />
			<Countdown start={h.startFrame} end={h.endFrame} x={1680} y={860} r={60} />
		</>
	);
};
const AnsBox: React.FC<{x: number; y: number; w: number; h: number; at: number}> = ({x, y, w, h, at}) => {
	const f = useCurrentFrame();
	return (
		<>
			<CardBox x={x} y={y} w={w} h={h} at={at} dash="10 7" />
			<Sx x={x + 22} y={y + 40} text="working" size={26} color={INK_SOFT} weight={700} at={at} />
			{[1, 2, 3, 4, 5].map(i => (y + 40 + i * 52 < y + h - 10 ? <line key={i} x1={x + 20} x2={x + w - 20} y1={y + 40 + i * 52} y2={y + 40 + i * 52} stroke="#e4dccb" strokeWidth={2} opacity={prog(f, at, 14)} /> : null))}
		</>
	);
};
/** A working line: text writes at `at`, an amber result writes at `res`, the line dims at `dim`. */
const WLine: React.FC<{x: number; y: number; text: string; at: number; res?: string; resAt?: number; dim?: number; size?: number}> = ({x, y, text, at, res, resAt = 0, dim, size = 42}) => {
	const f = useCurrentFrame();
	const d = dim === undefined ? 0 : prog(f, dim, 12);
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	return (
		<g opacity={(1 - 0.5 * d) * o}>
			<text x={x} y={y} style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: size, whiteSpace: 'pre'}} fill={d > 0.5 ? GREY_INK : INK}>
				{text}
				{res ? <tspan dx={14} style={{fontWeight: 800, fontSize: size + 4}} fill={d > 0.5 ? GREY_INK : AMBER_INK} fillOpacity={prog(f, resAt, 12)}>{res}</tspan> : null}
			</text>
		</g>
	);
};

// ---------- item 1 ----------
type T1 = {a: number; b: number; c: number; q: number};
const STEM1 = (t: T1) => [
	{text: 'In a repeat of this investigation, yeast was spread on agar plates and exposed to UV light in a cabinet at a fixed distance.', at: t.a},
	{text: 'After incubation, the control plates (0 s) had 145, 151 and 160 colonies.', at: t.b},
	{text: 'The plates exposed for 45 s had 36, 41 and 46 colonies.', at: t.c},
	{text: 'Calculate the relative survival of the yeast at 45 s (mean colonies at 45 s as a percentage of the control mean). Show your working.', at: t.q, weight: 700, para: true},
] as QBlock[];
const MARKS1 = ['145, 151 and 160', '36, 41 and 46', 'relative survival of the yeast at 45 s'];
qCheck(STEM1({a: 0, b: 0, c: 0, q: 0}), MARKS1.map(phrase => ({phrase, at: 0})));

// ---------- 14. Attempt one ----------
const KA = cues(S('attempt-1'), {turn: 'Your turn', repeat: 'In a repeat', zero: 'the zero second plates', exposed: 'The plates exposed', calc: 'Calculate the relative survival', pause: 'Pause here to answer'});
export const SceneAttemptOne: React.FC = () => {
	const t: T1 = {a: KA.repeat, b: KA.zero, c: KA.exposed, q: KA.calc};
	return (
		<>
			<Heading text="Your turn: question 1" at={KA.turn} size={50} />
			<Overlay>
				<HscTag at={KA.turn} />
				<CardBox x={100} y={180} w={1720} h={840} at={KA.turn + 4} />
				<QText q={qCheck(STEM1(t), [])} x={140} y={260} w={1640} size={36} card={false} />
				<AnsBox x={140} y={620} w={1340} h={360} at={KA.calc + 30} />
				<PauseHold id="attempt-1" at={KA.pause} />
			</Overlay>
		</>
	);
};

// ---------- 15. Feedback one ----------
const KB = cues(S('feedback-1'), {control: 'The control mean is', m152: 'a hundred and fifty two', mean45: 'The forty five second mean', m41: 'forty one', over: 'Forty one over', r27: 'twenty seven point zero', seventy: 'Seventy three percent', trap: 'the trap'});
const ALL1: T1 = {a: -100, b: -100, c: -100, q: -100};
export const SceneFeedbackOne: React.FC = () => {
	const f = useCurrentFrame();
	const marks: QMark[] = [{phrase: MARKS1[0], at: KB.control}, {phrase: MARKS1[1], at: KB.mean45}, {phrase: MARKS1[2], at: KB.r27 - 6}];
	const bar = smooth(prog(f, KB.r27 + 6, 22));
	return (
		<>
			<Heading text="Relative survival at 45 s" at={4} size={50} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={160} w={1720} h={190} at={-100} />
				<QText q={qCheck(STEM1(ALL1), marks)} x={140} y={210} w={2700} size={34} card={false} s={0.6} />
				<WLine x={150} y={450} text="control mean = (145 + 151 + 160) ÷ 3 = 456 ÷ 3 =" at={KB.control} res="152" resAt={KB.m152} dim={KB.mean45} />
				<WLine x={150} y={550} text="45 s mean = (36 + 41 + 46) ÷ 3 = 123 ÷ 3 =" at={KB.mean45} res="41" resAt={KB.m41} dim={KB.over} />
				<WLine x={150} y={650} text="relative survival = 41 ÷ 152 × 100 =" at={KB.over} res="27.0 %" resAt={KB.r27} />
				<g opacity={prog(f, KB.r27, 12)}>
					<rect x={1240} y={720} width={500} height={44} rx={10} fill="#f6f1e6" stroke="#e4dccb" strokeWidth={2} />
					<rect x={1240} y={720} width={Math.max(4, 500 * 0.27 * bar)} height={44} rx={10} fill={AMBER} opacity={0.85} />
					<Sx x={1240} y={800} text="survival 27 % of the control" size={26} color={AMBER_INK} weight={700} at={KB.r27 + 10} />
				</g>
				<CrossChip x={150} y={800} text="73.0 %" at={KB.seventy} cross={KB.trap + 6} caption="that's the share lost, not survival" size={40} />
			</Overlay>
		</>
	);
};

// ---------- item 2 ----------
type T2 = {a: number; b: number; c: number; d: number; q: number};
const STEM2 = (t: T2) => [
	{text: 'A student repeated the investigation.', at: t.a},
	{text: 'To have more colonies to count at 120 s, she spread the 120 s plates with a yeast suspension ten times as concentrated as the one used for all other plates.', at: t.b},
	{text: 'The control plates (0 s) had a mean of 142 colonies and the 120 s plates had a mean of 52 colonies.', at: t.c},
	{text: 'She reported a relative survival of 36.6 % at 120 s.', at: t.d},
	{text: 'Evaluate her result.', at: t.q, weight: 700, para: true},
] as QBlock[];
const MARKS2 = ['ten times as concentrated', 'a mean of 52 colonies', 'a mean of 142 colonies'];
qCheck(STEM2({a: 0, b: 0, c: 0, d: 0, q: 0}), MARKS2.map(phrase => ({phrase, at: 0})));

// ---------- 16. Attempt two ----------
const KC = cues(S('attempt-2'), {one: 'One more', toHave: 'To have more colonies', control: 'The control mean was', reported: 'She reported', evaluate: 'Evaluate her result', pause: 'Pause here to answer'});
export const SceneAttemptTwo: React.FC = () => {
	const t: T2 = {a: KC.toHave - 12, b: KC.toHave, c: KC.control, d: KC.reported, q: KC.evaluate};
	return (
		<>
			<Heading text="Your turn: question 2" at={KC.one} size={50} />
			<Overlay>
				<HscTag at={KC.one} />
				<CardBox x={100} y={180} w={1720} h={840} at={KC.one + 4} />
				<QText q={qCheck(STEM2(t), [])} x={140} y={260} w={1640} size={36} card={false} />
				<AnsBox x={140} y={640} w={1340} h={340} at={KC.evaluate + 20} />
				<PauseHold id="attempt-2" at={KC.pause} />
			</Overlay>
		</>
	);
};

// ---------- 17. Feedback two ----------
const KD = cues(S('feedback-2'), {as: 'As reported', ten: 'ten times', two: 'two things changed', fifty: 'Fifty two colonies', r37: 'three point seven', close: 'close to the main data', mistake: 'Her mistake', correcting: 'correcting'});
const ALL2: T2 = {a: -100, b: -100, c: -100, d: -100, q: -100};
export const SceneFeedbackTwo: React.FC = () => {
	const f = useCurrentFrame();
	const marks: QMark[] = [{phrase: MARKS2[0], at: KD.ten}, {phrase: MARKS2[1], at: KD.fifty}, {phrase: MARKS2[2], at: KD.r37}];
	const stripDim = prog(f, KD.fifty, 12);
	return (
		<>
			<Heading text="Two things changed at once" at={4} size={50} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={160} w={1720} h={190} at={-100} />
				<QText q={qCheck(STEM2(ALL2), marks)} x={140} y={210} w={2700} size={34} card={false} s={0.6} />
				<CTag x={150} y={380} text="as reported: not valid" at={KD.as} color={TERRA} size={36} />
				<g opacity={1 - 0.5 * stripDim}>
					<g opacity={prog(f, KD.ten + 6, 12)}>
						<rect x={150} y={470} width={1000} height={64} rx={16} fill={CARD} stroke={EDGE} strokeWidth={2.5} />
						<Sx x={176} y={514} text="120 s plates: 10 × the cells" size={32} color={stripDim > 0.5 ? GREY_INK : VIOLET} weight={700} at={-100} />
						<Sx x={640} y={514} text="|   all other plates: 1 ×" size={32} color={GREY_INK} weight={700} at={-100} />
					</g>
					<CTag x={1180} y={470} text="two variables changed: time and cells plated" at={KD.two} color={TERRA} size={28} maxW={600} dim={stripDim} />
				</g>
				<WLine x={150} y={640} text="52 ÷ 10 ≈ 5.2 colonies per standard plate" at={KD.fifty} dim={KD.r37} size={40} />
				<WLine x={150} y={730} text="5.2 ÷ 142 × 100 ≈" at={KD.r37 - 10} res="3.7 %" resAt={KD.r37} size={40} />
				<GTag x={720} y={696} text="main data: 3.5 %" at={KD.close} size={26} />
				<CrossChip x={150} y={800} text="36.6 % survival" at={KD.mistake} cross={KD.correcting + 4} caption="different numbers of cells plated, not corrected" size={36} />
				<WText x={1000} y={850} text="fair fix: same suspension for every plate, or correct for the cells plated" size={28} maxW={800} color={GREY_INK} weight={600} at={KD.correcting + 20} />
			</Overlay>
		</>
	);
};

// ---------- 18. Decision rule and handoff ----------
const KE = cues(S('decision-rule'), {so: 'to analyse a survival', change: 'change one variable', handle: 'handle the control', repeats: 'use repeats', turn: 'turn means into relative survival', graph: 'graph every plate', claim: 'claim only what you measured', counts: 'colony counts measure survival', next: 'Next'});
const PLAN = [
	'One independent variable; control handled the same (lamp off).',
	'Three plates per time; means.',
	'Relative survival = mean ÷ control mean × 100.',
	'Graph means and every plate.',
	'Claim what was measured: survival, not mutation.',
];
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const at = [KE.change, KE.repeats, KE.turn, KE.graph, KE.claim];
	return (
		<>
			<Heading text="Analysing a survival investigation" at={KE.so - 10} size={54} />
			<Overlay>
				<rect x={110} y={240} width={1700} height={580} rx={26} fill={CARD} stroke={EDGE} strokeWidth={3} opacity={prog(f, 4, 12)} />
				{PLAN.map((t, i) => {
					const o = prog(f, at[i], 12);
					const nextAt = at[i + 1] ?? 1e9;
					const d = i < 4 ? prog(f, nextAt + 10, 12) : 0;
					return (
						<g key={i} opacity={o * (1 - 0.4 * d)}>
							<circle cx={180} cy={310 + i * 108} r={30} fill={d > 0.5 ? '#efece6' : AMBER} />
							<Sx x={180} y={322 + i * 108} text={String(i + 1)} size={34} color={INK} weight={800} anchor="middle" at={-100} />
							<Sx x={240} y={324 + i * 108} text={t} size={42} color={d > 0.5 ? GREY_INK : i === 4 ? TEAL : INK} hand weight={700} at={-100} />
						</g>
					);
				})}
				<g opacity={prog(f, KE.next, 14)}>
					<rect x={700} y={870} width={1120} height={130} rx={40} fill={CARD} stroke={AMBER} strokeWidth={3.5} />
					<Pl p={PLATES.yeast} cx={790} cy={935} w={110} />
					<Sx x={870} y={950} text="Next: what one changed base can do to a protein" size={38} color={INK} hand />
				</g>
				{void KE.handle}{void KE.counts}
			</Overlay>
		</>
	);
};

// ---------- 19. Key notes ----------
const NOTES = [
	'A colony grows from a surviving cell or small clump, so colony counts estimate survival. A cell that mutates but lives still grows a colony, so mutants are counted among survivors.',
	'Fair test: independent = UV exposure time; dependent = colonies per plate after 48 h at 30 °C; controlled = same suspension, 100 µL, lamp, 20 cm, agar, incubation, all kept dark. The 0 s control goes in the cabinet with lids off and the lamp off.',
	'Three plates per time; mean = total ÷ 3. Relative survival = mean ÷ control mean × 100 (30 s: 61 ÷ 142 × 100 = 43.0 %).',
	'Supported: longer UVC exposure, lower survival, under these conditions. Not shown: mutation. To measure mutation, test survivors for a new inherited trait (millions of cells on a selective medium), as a fraction of survivors, against unexposed cells.',
	'Time alone is not dose (dose = output at the plate × time). Risk: UVC only in an interlocked cabinet run by trained staff; grown plates sealed, never opened, sterilised before disposal; 70 % ethanol is flammable.',
];
export const SceneNotes: React.FC = () => (
	<NotesBoard notes={NOTES} aid="Colonies count survivors, changed or not." tag="survivor = a cell that could still divide" size={31} aidTop={840} />
);
