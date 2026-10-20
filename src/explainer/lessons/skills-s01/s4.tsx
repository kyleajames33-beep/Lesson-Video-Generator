// S01 scenes 12 to 17: two drills (full card on screen through the 10 s countdown; no annotations, nothing
// answer-bearing), brief feedback with one crossed habit each, the decision rule and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AnswerBox, CardSpec, Chip, COW, CrossedHabit, DrillCountdown, GreyTag, HandLine, HI, INK, KeyNotes, Overlay, PenArrow, Plate, QuestionCard, RED, RoutineStrip, T, TEAL, ZONE, cardGeom, cardSpans,
	clamp01, lerp, measure, prog, vis,
} from './kit';
import type {AnsSpec} from './kit';
import {hold, sc} from './common';
import {BACK, FRONT} from './s1';

const SX = ZONE.side.x;
const ALL4 = [-100, -100, -100, -100];

// ---------- 12/13. Drill 1 (Biology, roan cattle) ----------
const roanSpec = (t: number[] = [-100, -100, -100], marksAt?: number): CardSpec => ({
	x: ZONE.card.x, y: ZONE.card.y, w: ZONE.card.w, subject: 'Biology', slotW: 250,
	items: [
		{text: 'Roan cattle have a mixture of red hairs and white hairs. Roan cattle were crossed with each other. The table shows the calves produced.', at: t[0]},
		{table: {head: ['Coat colour', 'Number of calves'], rows: [['red', '9'], ['roan', '21'], ['white', '10']], colW: [240, 300]}, at: t[1]},
		{text: 'Using the information provided, explain how these results show that roan cattle are heterozygous.', marks: '3 marks', at: t[2], marksAt},
	],
});
const ROAN = roanSpec();
const boxUnder = (spec: CardSpec, lines: number): AnsSpec => ({x: ZONE.box.x, y: spec.y + cardGeom(spec).h + 30, w: ZONE.box.w, lines, lh: 52, size: 33});
/** Plates for the roan card: the roan cow in the slot, small red and white cows beside their table rows. */
const RoanPlates: React.FC<{spec: CardSpec; at: number}> = ({spec, at}) => {
	const f = useCurrentFrame();
	const g = cardGeom(spec);
	const tb = g.items[1];
	const o = prog(f, at, 14);
	const rowY = (r: number) => tb.y0 + (r + 1) * (tb.rowH ?? 40);
	const xr = (tb.colX ?? [0])[0] + 168;
	const icon = 38;
	return (
		<g opacity={o}>
			<Plate p={COW.roan} x={g.slot.x + 4} y={g.slot.y + 30} h={200} />
			<Plate p={COW.red} x={xr} y={rowY(0) + 3} h={icon} />
			<Plate p={COW.roan} x={xr} y={rowY(1) + 3} h={icon} />
			<Plate p={COW.white} x={xr} y={rowY(2) + 3} h={icon} />
		</g>
	);
};
const D1 = 'drill-1';
const K12 = cues(sc(D1), {turn: 'Your turn', bio: 'First, Biology', roan: 'Roan cattle have', calves: 'their calves', using: 'Using the information provided', three: 'Three marks', pause: 'Pause here'});
export const SceneDrill1: React.FC = () => {
	const h = hold(D1);
	const spec = roanSpec([K12.roan, K12.calves - 20, K12.using], K12.three);
	const box = boxUnder(ROAN, 6);
	return (
		<Overlay>
			<RoutineStrip rows={ALL4} dim={[h.startFrame - 20, 1e9]} />
			<QuestionCard spec={spec} at={K12.bio - 10}><RoanPlates spec={spec} at={K12.roan} /></QuestionCard>
			<AnswerBox spec={box} at={K12.using} counter={{total: 3, label: true}} />
			<DrillCountdown hold={h} at={K12.pause} x={SX} y={box.y + 70} cx={SX + 245} cy={box.y + 210} />
		</Overlay>
	);
};
const F1 = 'feedback-1';
const K13 = cues(sc(F1), {verb: 'The verb is explain', three: 'three marks', data: 'use the data', so: 'So: roan parents', het: 'heterozygous', nine: 'Nine, twenty-one', give: 'parents give', half: 'And roan calves', share: 'heterozygous share', habit: 'The habit to drop', never: 'never using the numbers'});
const FB1 = [
	'Roan x roan gave red and white calves, so each roan parent carries a red and a white allele: heterozygous.',
	'9 : 21 : 10 is close to 1 : 2 : 1 (expected 10 : 20 : 10 of 40), the ratio from two heterozygous parents.',
	'Roan is about half (21 of 40), matching the heterozygous offspring.',
];
export const SceneFeedback1: React.FC = () => {
	const box = boxUnder(ROAN, 6);
	const g = cardGeom(ROAN);
	const num = (t: string) => cardSpans(g, t, 1, 1)[0];
	const nums = ['9', '21', '10'].map(num);
	return (
		<Overlay>
			<RoutineStrip rows={ALL4} />
			<QuestionCard spec={ROAN} at={-100} ann={[
				{kind: 'verb', phrase: 'explain', at: K13.verb + 8}, {kind: 'marks', at: K13.three},
				{kind: 'constraint', phrase: 'Using the information provided', at: K13.data},
				{kind: 'given', phrase: 'crossed with each other', at: K13.so},
				...['9', '21', '10'].map((t, i) => ({kind: 'given' as const, phrase: t, item: 1, at: K13.nine + i * 10})),
			]}><RoanPlates spec={ROAN} at={-100} /></QuestionCard>
			<AnswerBox spec={box} at={-100} counter={{total: 3, label: true}} rows={[
				{text: FB1[0], at: K13.so, dur: K13.het - K13.so, tick: K13.het + 10},
				{text: FB1[1], at: K13.nine, dur: K13.give - K13.nine, tick: K13.give + 8},
				{text: FB1[2], at: K13.half, dur: K13.share - K13.half, tick: K13.share + 8},
			]} />
			{nums.map((n, i) => <PenArrow key={i} a={[n.x2 + 12, n.y - 10]} b={[1040, 392 + (i - 1) * 14]} at={K13.nine + 4 + i * 10} color={TEAL} bow={(i - 1) * 8} />)}
			<HandLine x={1056} y={402} text="used in point 2" at={K13.nine + 30} size={34} color={TEAL} />
			<CrossedHabit x={SX} y={box.y + 40} text="Codominance means both alleles show." at={K13.habit} cross={K13.never} caption="the question said: use the information" size={28} maxW={470} />
		</Overlay>
	);
};

// ---------- 14/15. Drill 2 (Chemistry, N2O4 in ice water) ----------
const no2Spec = (t: number[] = [-100, -100, -100, -100], marksAt?: number): CardSpec => ({
	x: ZONE.card.x, y: ZONE.card.y, w: ZONE.card.w, subject: 'Chemistry', slotW: 230,
	items: [
		{text: 'The following equilibrium is established in a sealed flask at room temperature.', at: t[0]},
		{text: 'N_2O_4(g) (colourless) ⇌ 2NO_2(g) (brown)    ΔH = +57 kJ mol^{−1}', align: 'center', at: t[1]},
		{text: 'The flask is placed in ice water.', at: t[2]},
		{text: 'With reference to Le Chatelier’s principle, predict and explain the change in the colour of the gas mixture.', marks: '3 marks', at: t[3], marksAt},
	],
});
const NO2 = no2Spec();
/** Coded sealed flask with an NO2 tint over an ice-water trough (no plate: C3 coded style). pale 0..1 fades the tint. */
const Flask: React.FC<{spec: CardSpec; at: number; pale?: number}> = ({spec, at, pale = 0}) => {
	const f = useCurrentFrame();
	const g = cardGeom(spec);
	const o = prog(f, at, 14);
	const cx = g.slot.x + g.slot.w / 2, cy = g.slot.y + 150, r = 48;
	const brown = `rgba(154,90,36,${lerp(0.62, 0.16, clamp01(pale))})`;
	return (
		<g opacity={o}>
			<rect x={cx - 100} y={cy + 8} width={200} height={84} rx={10} fill="#d9ecf7" stroke="#5aa3d0" strokeWidth={3} />
			{[[-70, 40], [-34, 66], [44, 46], [72, 70], [-76, 72]].map(([dx, dy], i) => <rect key={i} x={cx + dx - 11} y={cy + dy - 11} width={22} height={22} rx={4} fill="#f4fbff" stroke="#8fc0dd" strokeWidth={2} transform={`rotate(${i * 17} ${cx + dx} ${cy + dy})`} />)}
			<rect x={cx - 13} y={cy - r - 50} width={26} height={56} fill="#fbfcfd" stroke={INK} strokeWidth={3} />
			<circle cx={cx} cy={cy} r={r} fill={brown} stroke={INK} strokeWidth={3.5} />
			<rect x={cx - 18} y={cy - r - 68} width={36} height={22} rx={5} fill="#8a6a4a" stroke={INK} strokeWidth={2.5} />
			<path d={`M${cx - 30},${cy - 24} Q${cx - 37},${cy} ${cx - 27},${cy + 20}`} fill="none" stroke="#fff" strokeWidth={5} opacity={0.6} strokeLinecap="round" />
			<T x={cx} y={cy + 124} text="ice water" size={26} hand weight={700} color="#3f7fa8" anchor="middle" />
		</g>
	);
};
const D2 = 'drill-2';
const K14 = cues(sc(D2), {chem: 'Now Chemistry', colourless: 'Colourless dinitrogen', brown: 'brown nitrogen dioxide', flask: 'The flask is placed', withref: 'With reference to', three: 'Three marks', pause: 'Pause here'});
export const SceneDrill2: React.FC = () => {
	const h = hold(D2);
	const spec = no2Spec([K14.colourless, K14.brown, K14.flask, K14.withref], K14.three);
	const box = boxUnder(NO2, 6);
	return (
		<Overlay>
			<RoutineStrip rows={ALL4} dim={[h.startFrame - 20, 1e9]} />
			<QuestionCard spec={spec} at={K14.chem - 6}><Flask spec={spec} at={K14.colourless} /></QuestionCard>
			<AnswerBox spec={box} at={K14.withref} counter={{total: 3, label: true}} />
			<DrillCountdown hold={h} at={K14.pause} x={SX} y={box.y + 70} cx={SX + 245} cy={box.y + 210} />
		</Overlay>
	);
};
const F2 = 'feedback-2';
const K15 = cues(sc(F2), {two: 'two verbs', predict: 'Predict', paler: 'turns paler', explain: 'Explain, and this time', constraint: 'the constraint asks', cooling: 'Cooling is the change', heat: 'gives out heat', reverse: "That's the reverse", colourless: 'into colourless', tetroxide: 'dinitrogen tetroxide', habit: 'The habit to drop', stopping: 'and stopping'});
const FB2 = [
	'Prediction: the mixture becomes paler (less brown).',
	'By Le Chatelier’s principle, the system partially counteracts the decrease in temperature by favouring the exothermic reverse reaction (ΔH is positive for the forward reaction).',
	'So NO_2 (brown) is converted to N_2O_4 (colourless): [NO_2] decreases.',
];
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	const box = boxUnder(NO2, 6);
	return (
		<Overlay>
			<RoutineStrip rows={ALL4} />
			<QuestionCard spec={NO2} at={-100} ann={[
				{kind: 'verb', phrase: 'predict', at: K15.two}, {kind: 'verb', phrase: 'explain', at: K15.two + 10},
				{kind: 'tag', phrase: 'predict', at: K15.two + 16, text: 'job 1'}, {kind: 'tag', phrase: 'explain', at: K15.two + 24, text: 'job 2'},
				{kind: 'marks', at: K15.two + 30},
				{kind: 'constraint', phrase: 'With reference to Le Chatelier’s principle', at: K15.constraint},
				{kind: 'given', phrase: 'ice water', at: K15.cooling}, {kind: 'ring', phrase: 'ΔH = +57 kJ mol^{−1}', at: K15.heat},
			]}><Flask spec={NO2} at={-100} pale={prog(f, K15.colourless, 40)} /></QuestionCard>
			<AnswerBox spec={box} at={-100} counter={{total: 3, label: true}} rows={[
				{text: FB2[0], at: K15.predict, dur: K15.paler + 10 - K15.predict, tick: K15.paler + 10},
				{text: FB2[1], at: K15.explain, dur: K15.heat - K15.explain, tick: K15.heat + 10},
				{text: FB2[2], at: K15.reverse, dur: K15.tetroxide - K15.reverse, tick: K15.tetroxide + 12},
			]} />
			<GreyTag x={SX} y={box.y + 10} text="worked example: collision theory asked; here: Le Chatelier asked" at={K15.explain + 30} size={24} maxW={470} />
			<CrossedHabit x={SX} y={box.y + 170} text="It goes paler." at={K15.habit} cross={K15.stopping} caption="job 1 only" size={32} />
		</Overlay>
	);
};

// ---------- 16. Decision rule ----------
const K16 = cues(sc('decision-rule'), {so: 'So before you write', dowhat: 'do what', howmuch: 'how much', aboutwhat: 'about what', usingwhat: 'using what', answer: 'Answer exactly', not: 'not the one next to it', next: 'Next'});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const s = 0.5;
	const bx = BACK.x, by = BACK.y;
	const nx = 96, ny = 892;
	const verbs = ['identify', 'describe', 'explain'];
	let cx = nx + 30 + measure('Next:', 40, true, 700) + 18;
	return (
		<Overlay>
			<RoutineStrip rows={ALL4} full={() => 1} after={-100}
				lit={[{row: 0, from: K16.dowhat, to: K16.howmuch}, {row: 1, from: K16.howmuch, to: K16.aboutwhat}, {row: 2, from: K16.aboutwhat, to: K16.usingwhat}, {row: 3, from: K16.usingwhat, to: K16.answer}]} />
			<g transform={`translate(${1180 - bx * s},${300 - by * s}) scale(${s})`}>
				<QuestionCard spec={BACK} at={K16.not} rot={4} o={0.6} />
				<QuestionCard spec={FRONT} at={K16.not - 4} />
				<g opacity={vis(f, K16.not + 14)}>
					<path d={`M${bx + 900},${by + 10} L${bx + 1040},${by + 110} M${bx + 1040},${by + 10} L${bx + 900},${by + 110}`} stroke={RED} strokeWidth={10} strokeLinecap="round" strokeDasharray="300" strokeDashoffset={300 * (1 - prog(f, K16.not + 14, 12))} />
				</g>
			</g>
			<g opacity={vis(f, K16.next)}>
				<rect x={nx} y={ny} width={1060} height={80} rx={40} fill="#fffdf8" stroke={TEAL} strokeWidth={3.5} />
				<T x={nx + 30} y={ny + 54} text="Next:" size={40} hand weight={700} color={TEAL} />
				{verbs.map((v, i) => {
					const w = measure(v, 40, true, 700);
					const x = cx; cx += w + (i < 2 ? measure(', ', 40, true, 700) + 6 : 0);
					return (
						<g key={v}>
							<rect x={x - 6} y={ny + 18} width={(w + 12) * prog(f, K16.next + 10 + i * 8, 10)} height={46} fill={HI} opacity={0.85} />
							<T x={x} y={ny + 54} text={v + (i < 2 ? ',' : '')} size={40} hand weight={700} color={INK} />
						</g>
					);
				})}
			</g>
			{void Chip}
		</Overlay>
	);
};

// ---------- 17. Key notes ----------
const NOTES = [
	'Before writing, read four things: the verb (do what?), the marks (how much?), the content words and givens (about what?), and any constraint (using what?).',
	'“In terms of X”: X must carry the explanation. “With reference to X”: name X and use it. “Using the information”: take details from the stimulus and say what they show.',
	'Marks are a guide to the number of linked points, often about one per mark. But the points must be linked, some marks need a specific item (an equation, a value), and long answers are judged as a whole.',
	'Two verbs mean two jobs (for example, predict and explain). After writing, tick each part of the question.',
];
export const SceneNotes: React.FC = () => <KeyNotes notes={NOTES} aid="Do what? How much? About what? Using what?" tag="then answer exactly that question, and tick each part" />;
