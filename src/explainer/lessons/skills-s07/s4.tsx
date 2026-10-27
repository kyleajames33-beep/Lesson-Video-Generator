// S07 scenes 10 to 15: the Chemistry drill (two students' neutralisation results; compare reliability and accuracy),
// its brief feedback (a number line: X tight but off, Y spread but centred; "agree means accurate" crossed), the
// Biology drill (tap against tank water, counted at 24 h and 72 h; explain why not valid and propose a fix), its brief
// feedback (time changed as well as the water; same incubation time; "more plates" crossed), the decision board and the
// key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER_INK, AnswerBox, Chip, CrossedHabit, DrillCountdown, GREY_INK, GreyTag, HandLine, KeyNotes, Overlay, Plate, QuestionCard, RoutineStrip, T, TEAL, ZONE, answerGeom, cardGeom, plateW, prog,
} from './kit';
import type {ARow, AnsSpec, CardSpec} from './kit';
import {CUP7, PCOUNT, PSPARSE, SX, SW, TANK, TAP, hold, sc} from './common';
import {ClipPlate, FixRail, MarginMark, NumberLine, TERRA, TimePill, VarStrip} from './pieces';

const ALL4 = [-100, -100, -100, -100];
const boxUnder = (spec: CardSpec, lines: number): AnsSpec => ({x: ZONE.box.x, y: spec.y + cardGeom(spec).h + 26, w: ZONE.box.w, lines, lh: 46, size: 28, margin: 92});
const LABEL = 'HSCScience marking guide (illustrative)';
void LABEL;
const MiniRail: React.FC<{y: number; lit?: {row: number; from: number; to?: number}[]}> = ({y, lit = []}) => (
	<FixRail box={{x: SX, y, w: 1000}} s={SW / 1000} rowH={120} rows={[-100, -100, -100]} lit={lit} />
);
const Marks: React.FC<{box: AnsSpec; rows: ARow[]; marks: {row: number; l: 'W' | 'F' | 'fix'; at: number}[]}> = ({box, rows, marks}) => {
	const g = answerGeom(box, rows);
	return <g>{marks.map((m, i) => <MarginMark key={i} x={box.x + 46} y={g.base(g.rows[m.row].first) - 10} l={m.l} at={m.at} />)}</g>;
};

// ---------- 10/11. Drill 1 (Chemistry) ----------
const d1Spec = (t: number[] = [-100, -100, -100], marksAt?: number): CardSpec => ({
	x: ZONE.card.x, y: ZONE.card.y, w: ZONE.card.w, subject: 'Chemistry', slotW: 230, size: 28,
	items: [
		{text: 'Two students each measured the molar enthalpy of neutralisation of hydrochloric acid with sodium hydroxide three times, using a lidded polystyrene cup. The accepted value is about −57 kJ mol^{−1}. Results are in kJ mol^{−1}.', at: t[0]},
		{table: {head: ['Student', 'Trial 1', 'Trial 2', 'Trial 3'], rows: [['X', '−51', '−52', '−51'], ['Y', '−60', '−53', '−58']], colW: [160, 150, 150, 150]}, at: t[1]},
		{text: "Compare the reliability and accuracy of the two students' results.", marks: '3 marks', at: t[2], marksAt},
	],
});
const D1 = d1Spec();
const CupSlot: React.FC<{spec: CardSpec; at: number}> = ({spec, at}) => {
	const f = useCurrentFrame();
	const g = cardGeom(spec);
	const h = Math.min(190, g.slot.h - 30), w = plateW(CUP7, h);
	const x = g.slot.x + g.slot.w - w - 10, y = g.slot.y + 4;
	return (
		<g opacity={prog(f, at, 14)}>
			<Plate p={CUP7} x={x} y={y} h={h} />
			<T x={x + w / 2} y={y + h + 22} text="lidded polystyrene cup" size={16} weight={600} color={GREY_INK} anchor="middle" />
		</g>
	);
};
const K10 = cues(sc('drill-1'), {turn: 'Your turn', chem: 'Chemistry first', two: 'Two students', acc: 'The accepted', results: 'Their results', compare: 'Compare the', three: 'Three marks', pause: 'Pause here'});
export const SceneDrill1: React.FC = () => {
	const h = hold('drill-1');
	const spec = d1Spec([K10.two, K10.results, K10.compare], K10.three);
	const box = boxUnder(D1, 6);
	return (
		<Overlay>
			<RoutineStrip rows={ALL4} dim={[h.startFrame - 20, 1e9]} o={0.6} />
			<QuestionCard spec={spec} at={K10.chem - 6}><CupSlot spec={spec} at={K10.two + 30} /></QuestionCard>
			<AnswerBox spec={box} at={K10.compare} counter={{total: 3, label: true}} />
			<MiniRail y={box.y} />
			<DrillCountdown hold={h} at={K10.pause} x={SX} y={box.y + 230} cx={SX + 240} cy={box.y + 340} r={46} />
			{void K10.turn}{void K10.acc}
		</Overlay>
	);
};
const K11 = cues(sc('feedback-1'), {one: 'within one', reliable: 'more reliable', accurate: 'more accurate', consist: 'consistently less', mix: 'The mix-up', agreeing: 'Agreeing is'});
export const SceneFeedback1: React.FC = () => {
	const box = boxUnder(D1, 6);
	const rows: ARow[] = [
		{text: "Reliability: X's trials agree within 1 kJ mol^{−1}, Y's spread over 7, so X is more reliable.", at: K11.one + 20, dur: 70, tick: K11.reliable + 10},
		{text: "Accuracy: Y's values are within 4 of −57 (mean −57); X's are 5 to 6 less negative (mean about −51), so Y is more accurate.", at: K11.accurate - 70, dur: 90, tick: K11.accurate + 20},
		{text: 'X is consistently less negative: a systematic error, such as heat loss.', at: K11.consist, dur: 60, tick: K11.consist + 70},
	];
	return (
		<Overlay>
			<QuestionCard spec={D1} at={-100} ann={[{kind: 'verb', phrase: 'Compare', at: 4}, {kind: 'marks', at: 10}, {kind: 'given', phrase: '−51 −52 −51', item: 1, at: K11.one}, {kind: 'given', phrase: '−60 −53 −58', item: 1, at: K11.one + 30}, {kind: 'given', phrase: '−57', item: 0, at: K11.accurate - 70}]}>
				<CupSlot spec={D1} at={-100} />
			</QuestionCard>
			<AnswerBox spec={box} rows={rows} at={-100} counter={{total: 3, label: true}} />
			<Marks box={box} rows={rows} marks={[{row: 0, l: 'W', at: K11.one + 20}, {row: 1, l: 'W', at: K11.accurate - 70}, {row: 2, l: 'F', at: K11.consist}]} />
			<NumberLine x={SX + 10} y={box.y + 140} w={360} lo={-62} hi={-50} at={K11.one} ref={{v: -57, label: '−57 (accepted)'}}
				sets={[{vals: [-51, -52, -51], at: K11.one + 6, color: '#2c4a7c', label: 'X', spread: 'spread 1', above: true}, {vals: [-60, -53, -58], at: K11.one + 30, color: TERRA, label: 'Y', spread: 'spread 7'}]} />
			<CrossedHabit x={SX} y={box.y + 290} text="X is more accurate because its results agree" at={K11.mix} cross={K11.agreeing} caption="agree = reliable; close to −57 = accurate" size={24} maxW={SW} />
		</Overlay>
	);
};

// ---------- 12/13. Drill 2 (Biology) ----------
const d2Spec = (t: number[] = [-100, -100, -100], marksAt?: number): CardSpec => ({
	x: ZONE.card.x, y: ZONE.card.y, w: ZONE.card.w, subject: 'Biology', slotW: 250, size: 27,
	items: [
		{text: 'A student compared the microbes that grow from tap water and from rainwater tank water. She spread 0.1 mL of each sample onto its own nutrient agar plate, taped the lids and incubated both plates upside down at 28 °C.', at: t[0]},
		{text: 'She counted the tap water plate after 24 hours and the tank water plate after 72 hours. The tap water plate had 31 colonies and the tank water plate had 118 colonies. She concluded that more microbes grew from the tank water than from the tap water.', at: t[1]},
		{text: 'Explain why this conclusion is not valid, and propose a change that fixes the problem.', marks: '3 marks', at: t[2], marksAt},
	],
});
const D2 = d2Spec();
const BottleSlot: React.FC<{spec: CardSpec; at: number}> = ({spec, at}) => {
	const f = useCurrentFrame();
	const g = cardGeom(spec);
	const h = Math.min(170, g.slot.h - 40), w = plateW(TAP, h);
	const x0 = g.slot.x + 20, y = g.slot.y + 6;
	return (
		<g opacity={prog(f, at, 14)}>
			<ClipPlate p={TAP} x={x0} y={y} h={h} />
			<ClipPlate p={TANK} x={x0 + w + 40} y={y} h={h} />
			<T x={x0 + w / 2} y={y + h + 24} text="tap" size={20} weight={700} color={GREY_INK} anchor="middle" />
			<T x={x0 + w * 1.5 + 40} y={y + h + 24} text="tank" size={20} weight={700} color={GREY_INK} anchor="middle" />
		</g>
	);
};
const K12 = cues(sc('drill-2'), {bio: 'Now Biology', student: 'A student compares', counts: 'She counts', every: 'Everything else', explain: 'Explain why', three: 'Three marks', pause: 'Pause here'});
export const SceneDrill2: React.FC = () => {
	const h = hold('drill-2');
	const spec = d2Spec([K12.student, K12.counts, K12.explain], K12.three);
	const box = boxUnder(D2, 5);
	return (
		<Overlay>
			<RoutineStrip rows={ALL4} dim={[h.startFrame - 20, 1e9]} o={0.6} />
			<QuestionCard spec={spec} at={K12.bio - 6}><BottleSlot spec={spec} at={K12.student + 20} /></QuestionCard>
			<AnswerBox spec={box} at={K12.explain} counter={{total: 3, label: true}} />
			<DrillCountdown hold={h} at={K12.pause} x={SX} y={box.y + 60} cx={SX + 240} cy={box.y + 170} r={46} />
			{void K12.every}
		</Overlay>
	);
};
const K13 = cues(sc('feedback-2'), {changed: 'time changed', longer: 'Given longer', fix: 'The fix:', both: 'incubate both', habit: 'The habit', unequal: 'unequal times'});
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	const box = boxUnder(D2, 5);
	const rows: ARow[] = [
		{text: 'Feature: incubation time differed (24 h against 72 h) as well as the water source.', at: K13.changed + 10, dur: 60, tick: K13.longer},
		{text: 'Effect: longer incubation lets more colonies grow large enough to count, so the difference may be caused by time, not the water.', at: K13.longer + 10, dur: 90, tick: K13.fix},
		{text: 'Fix: incubate both plates at 28 °C for the same time (for example 48 h) and count them at the same time.', at: K13.both, dur: 80, tick: K13.both + 90},
	];
	const py = box.y + 10;
	return (
		<Overlay>
			<QuestionCard spec={D2} at={-100} ann={[{kind: 'verb', phrase: 'Explain', at: 4}, {kind: 'given', phrase: 'not valid,', at: 8}, {kind: 'marks', at: 12}, {kind: 'given', phrase: 'after 24 hours', at: K13.changed}, {kind: 'given', phrase: 'after 72 hours', at: K13.changed + 10}]}>
				<BottleSlot spec={D2} at={-100} />
			</QuestionCard>
			<AnswerBox spec={box} rows={rows} at={-100} counter={{total: 3, label: true}} />
			<Marks box={box} rows={rows} marks={[{row: 0, l: 'F', at: K13.changed + 10}, {row: 1, l: 'F', at: K13.longer + 10}, {row: 2, l: 'fix', at: K13.both}]} />
			<g opacity={prog(f, K13.changed, 12)}>
				<Plate p={PSPARSE} x={SX + 10} y={py} h={150} />
				<Plate p={PCOUNT} x={SX + 210} y={py} h={150} />
				<T x={SX + 85} y={py + 176} text="tap: 31" size={22} weight={700} color={GREY_INK} anchor="middle" />
				<T x={SX + 285} y={py + 176} text="tank: 118" size={22} weight={700} color={GREY_INK} anchor="middle" />
			</g>
			<TimePill x={SX + 40} y={py + 190} text="24 h" to="48 h" swapAt={K13.both + 30} at={K13.changed + 10} />
			<TimePill x={SX + 240} y={py + 190} text="72 h" to="48 h" swapAt={K13.both + 30} at={K13.changed + 16} />
			<VarStrip x={SX} y={py + 250} indep="water source" controlled={['agar', '0.1 mL', '28 °C', 'time']} hot={3} bad={K13.changed + 20} good={K13.both + 30} at={K13.changed + 10} />
			<CrossedHabit x={ZONE.box.x} y={box.y + answerGeom(box, rows).h + 20} text="repeat with more plates of each sample" at={K13.habit} cross={K13.unequal} caption="repeats: reliability; the times are still unequal" size={24} maxW={700} />
		</Overlay>
	);
};

// ---------- 14. Decision board ----------
const K14 = cues(sc('decision-rule'), {word: 'Name the word', feature: 'Point to', fix: 'give a fix', repeats: 'Repeats help', next: 'Next:'});
export const SceneDecision: React.FC = () => (
	<Overlay>
		<FixRail box={{x: 220, y: 150, w: 1480}} rowH={170} rows={[K14.word - 10, K14.feature - 10, K14.fix - 10]} size={40}
			lit={[{row: 0, from: K14.word, to: K14.feature}, {row: 1, from: K14.feature, to: K14.fix}, {row: 2, from: K14.fix, to: K14.repeats}]} initials={K14.word}
			ex={[{text: 'validity / reliability / accuracy (right target, repeats agree, close to true)', at: K14.word + 20}, {text: 'can raised to 6 cm for propan-1-ol: more heat lost, 34% against 43%', at: K14.feature + 20}, {text: 'same 2 cm for both, trimmed wick', at: K14.fix + 20}]} />
		<Chip x={220} y={780} text="repeats → reliability, not a systematic error" at={K14.repeats} size={34} color={TEAL} fill="#e3f3f0" />
		<Chip x={1000} y={900} text="Next: extended responses (6 to 9 marks)" at={K14.next} size={36} color={AMBER_INK} fill="#fff8e6" />
		{void HandLine}
	</Overlay>
);

// ---------- 15. Key notes ----------
const NOTES = [
	'Validity: does the method measure what it was meant to (only the independent variable changes)? Reliability: repeated the same way, do results agree? Accuracy: how close to the true value?',
	'Answer move: word (which quality), feature (which part of this method, and what it does to the result), fix (a change that removes that cause).',
	"Repeats improve reliability (and average out random scatter). They don't fix an error that pushes every trial the same way, or a variable that wasn't controlled.",
	'Use the stimulus: quote values (spread against gap; percentage of the data value).',
	'Risk: hazard, harm, and a control that stops that harm, for this substance.',
];
export const SceneNotes: React.FC = () => <KeyNotes notes={NOTES} aid="Right target, repeats agree, close to true." tag="Word, feature, fix." size={30} aidTop={700} />;
