// S08 scenes 11 to 16: the Biology drill (a ward's hand hygiene data with a confounded cleaning routine; plan only), its
// brief feedback (the plan card fills; "start writing straight away" crossed), the Chemistry drill (rewrite a student's
// last line about soap in hard water), its brief feedback (a judgement with a side, a reason and a weighed criterion;
// "advantages and disadvantages" crossed), the decision board and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, AnswerBox, Chip, CrossedHabit, DrawPath, DrillCountdown, GREEN, GREY_INK, GreyTag, INK, INK_SOFT, Overlay, Plate, QuestionCard, T, TEAL, answerGeom, cardGeom, plateW, prog, vis,
} from './kit';
import type {AnsSpec, CardSpec} from './kit';
import {SOAP, hold, sc} from './common';
import {Notes8, Para, PENCIL, PlanCard, VIOLET, linesOf} from './pieces';
import type {PlanRow} from './pieces';

// ---------- 11/12. Drill 1 (Biology) ----------
const d1Spec = (t: number[] = [-100, -100, -100, -100], marksAt?: number): CardSpec => ({
	x: 330, y: 96, w: 1500, subject: 'Biology', size: 25, note: 'example data',
	items: [
		{text: 'A hospital ward measured staff hand hygiene compliance and the rate of infections that patients caught on the ward. A hand hygiene training program began in July. In the same month, the ward also started a new daily cleaning routine.', at: t[0]},
		{table: {head: ['', 'Jan to Jun (before)', 'Jul to Dec (after)'], rows: [['Hand hygiene compliance (%)', '45', '82'], ['Infections caught on the ward (per 1,000 patient-days)', '6.0', '2.5']], colW: [740, 300, 300]}, at: t[1], gap: 0.5},
		{text: 'Evaluate the training program.', marks: '6 marks', at: t[2], marksAt, gap: 0.55},
		{text: 'Task: write a PLAN only: the demands, your judgement, and one line per paragraph.', at: t[3], weight: 700, gap: 0.4},
	],
});
const D1 = d1Spec();
const d1b = () => D1.y + cardGeom(D1).h;
const PX = 330, PW = 1000, SIDE = 1400;
const K11 = cues(sc('drill-1'), {turn: 'Your turn', subject: 'in your subject', bio: 'Biology first', ward: 'A ward started', same: 'in the same month', compliance: 'Compliance and', question: 'The question says', six: 'six marks', dont: "Don't write", write: 'Write the plan', pause: 'Pause here'});
export const SceneDrill1: React.FC = () => {
	const f = useCurrentFrame();
	const h = hold('drill-1');
	const spec = d1Spec([K11.ward, K11.compliance, K11.question, K11.write], K11.six);
	return (
		<Overlay>
			<QuestionCard spec={spec} at={K11.bio - 6} />
			<GreyTag x={SIDE} y={d1b() + 14} text="patient-day: one patient on the ward for one day" at={K11.compliance + 20} size={20} maxW={430} />
			<PlanCard x={PX} y={d1b() + 30} w={PW} at={K11.write} rows={[]} size={26} title="Your plan" minH={330} />
			<DrillCountdown hold={h} at={K11.pause} x={SIDE} y={d1b() + 160} cx={SIDE + 220} cy={d1b() + 290} r={52} />
			<T x={SIDE} y={d1b() + 112} text="Do the one in your subject, or both." size={26} hand weight={700} color={INK_SOFT} o={vis(f, K11.subject, K11.question, 10)} />
			{void K11.turn}{void K11.same}{void K11.dont}
		</Overlay>
	);
};
const K12 = cues(sc('feedback-1'), {judgement: 'Judgement first', effective: 'probably effective', one: 'Line one', hand: 'hand hygiene breaks', two: 'Line two', eighty: 'eighty two', three: 'Line three', month: 'same month', habit: 'The habit', plan: 'without a plan'});
export const SceneFeedback1: React.FC = () => {
	const rows: PlanRow[] = [
		{t: 'hands carry pathogens → hygiene breaks the contact link (b10)', at: K12.hand - 10},
		{t: '45 → 82% | 6.0 → 2.5 per 1,000 patient-days', at: K12.eighty - 20},
		{t: 'cleaning routine began in July too → confounding', at: K12.month - 10},
		{t: 'close: verdict + condition', at: K12.month + 50},
	];
	return (
		<Overlay>
			<QuestionCard spec={D1} at={-100} ann={[
				{kind: 'verb', phrase: 'Evaluate', at: 4}, {kind: 'marks', at: 10},
				{kind: 'given', phrase: '45', item: 1, at: K12.two + 20, color: TEAL}, {kind: 'given', phrase: '82', item: 1, at: K12.eighty, color: TEAL},
				{kind: 'given', phrase: '6.0', item: 1, at: K12.eighty + 30, color: TEAL}, {kind: 'given', phrase: '2.5', item: 1, at: K12.eighty + 40, color: TEAL},
				{kind: 'given', phrase: 'In the same month, the ward also started a new daily cleaning routine.', at: K12.month, color: AMBER},
			]} />
			<Chip x={SIDE} y={d1b() + 20} text="evaluate: judgement against criteria, using the data" at={8} out={K12.one} size={26} color={AMBER_INK} maxW={450} />
			<PlanCard x={PX} y={d1b() + 30} w={PW} at={-100} rows={rows} size={26} title="Plan" verdict={{t: 'Verdict: probably effective, but not proven (cleaning changed too)', at: K12.effective}} label="HSCScience model plan (illustrative)" />
			<CrossedHabit x={SIDE} y={d1b() + 150} text="start writing straight away" at={K12.habit} cross={K12.plan} caption="no plan, and the cleaning routine gets missed" size={28} maxW={460} />
			{void K12.judgement}{void K12.three}
		</Overlay>
	);
};

// ---------- 13/14. Drill 2 (Chemistry) ----------
const d2Spec = (t: number[] = [-100, -100], marksAt?: number): CardSpec => ({
	x: 330, y: 96, w: 1500, subject: 'Chemistry', size: 28,
	items: [
		{text: 'Evaluate the use of soap for washing clothes in a town with hard water.', marks: '5 marks', at: t[0], marksAt},
		{text: 'A student\'s answer is below. Task: rewrite her last line so that it makes a judgement.', at: t[1], weight: 700, gap: 0.6},
	],
});
const D2 = d2Spec();
const d2b = () => D2.y + cardGeom(D2).h;
const her = (): AnsSpec => ({x: 330, y: d2b() + 24, w: 1250, lines: 5, lh: 46, size: 30, margin: 72, label: 'Her answer'});
const BODY = ['Hard water contains Ca^{2+} ions, which react with soap to form insoluble calcium stearate (scum).', 'This wastes soap and leaves grey deposits on fabric.', 'Soap is made from renewable fats and breaks down readily in the environment.'];
const LAST = 'Overall, soap has advantages and disadvantages.';
/** The hard-water soap tube, beside her answer (outside the card, so it can be read). */
const SoapSlot: React.FC<{at: number}> = ({at}) => {
	const f = useCurrentFrame();
	const h = 270, w = plateW(SOAP, h);
	const x = 1700 - w / 2, y = d2b() + 30;
	return (
		<g opacity={prog(f, at, 14)}>
			<Plate p={SOAP} x={x} y={y} h={h} />
			<T x={1700} y={y + h + 28} text="soap in hard water" size={22} weight={600} color={GREY_INK} anchor="middle" />
		</g>
	);
};
const HerAnswer: React.FC<{at: number[]; marks?: {phrase: string; at: number; color?: string}[]; strike?: number}> = ({at, marks = [], strike}) => {
	const f = useCurrentFrame();
	const g = answerGeom(her(), []);
	const lw = linesOf(LAST, g.tw, g.size)[0];
	void lw;
	return (
		<g>
			<AnswerBox spec={her()} at={at[0] - 6} />
			<Para g={g} line={0} color={PENCIL} parts={BODY.map((text, i) => ({text, at: at[0] + i * 26, dur: 24}))} marks={marks} />
			<Para g={g} line={4} color={PENCIL} parts={[{text: LAST, at: at[1], dur: 20}]} o={strike === undefined ? 1 : 1 - 0.6 * prog(f, strike, 12)} />
		</g>
	);
};
const K13 = cues(sc('drill-2'), {now: 'Now Chemistry', question: 'The question', student: 'A student explains', last: 'Her last line', rewrite: 'Rewrite that line', pause: 'Pause here'});
export const SceneDrill2: React.FC = () => {
	const h = hold('drill-2');
	const spec = d2Spec([K13.question, K13.rewrite], K13.question + 40);
	const gB = her().y + answerGeom(her(), []).h;
	return (
		<Overlay>
			<QuestionCard spec={spec} at={K13.now} /><SoapSlot at={K13.question + 20} />
			<HerAnswer at={[K13.student, K13.last]} />
			<DrillCountdown hold={h} at={K13.pause} x={330} y={gB + 90} cx={1100} cy={gB + 130} r={56} />
		</Overlay>
	);
};
const K14 = cues(sc('feedback-2'), {takes: 'takes a side', reason: 'gives the reason', example: 'For example', town: 'this hardwater town', poor: 'a poor choice', because: 'because calcium', wastes: 'wastes soap', even: 'even though', adv: 'Advantages and', trap: 'the trap', summary: "It's a summary"});
const NEW: AnsSpec = {x: 330, y: 0, w: 1250, lines: 3, lh: 48, size: 32, margin: 72, label: 'New last line'};
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	const gB = her().y + answerGeom(her(), []).h;
	const ns = {...NEW, y: gB + 20};
	const gn = answerGeom(ns, []);
	const parts = [
		{text: 'In this hard-water town, soap is a poor choice for washing clothes,', at: K14.town - 10, dur: 70},
		{text: 'because calcium ions turn much of it into scum, which wastes soap and leaves deposits on fabric,', at: K14.because, dur: 120},
		{text: 'even though soap is renewable and breaks down readily.', at: K14.even, dur: 40},
	];
	const nB = ns.y + gn.h;
	const tags = [{t: 'the side', c: AMBER_INK, at: K14.poor + 10}, {t: 'the reason', c: TEAL, at: K14.because + 40}, {t: 'the weighed criterion', c: VIOLET, at: K14.even + 20}];
	return (
		<Overlay>
			<QuestionCard spec={D2} at={-100} ann={[{kind: 'verb', phrase: 'Evaluate', at: 4}, {kind: 'given', phrase: 'town with hard water.', at: K14.town}]} /><SoapSlot at={-100} />
			<HerAnswer at={[-1000, -1000]} strike={K14.trap} marks={[
				{phrase: 'Ca^{2+} ions,', at: K14.because + 6, color: TEAL}, {phrase: 'insoluble calcium stearate (scum).', at: K14.because + 30, color: TEAL},
				{phrase: 'wastes soap', at: K14.wastes, color: TEAL}, {phrase: 'grey deposits', at: K14.wastes + 30, color: TEAL}, {phrase: 'renewable fats', at: K14.even + 6, color: TEAL},
			]} />
			<AnswerBox spec={ns} at={K14.example - 10} />
			<Para g={gn} line={0} parts={parts} marks={[
				{phrase: 'a poor choice', at: K14.poor + 4, color: '#f6d77a', kind: 'hi'},
				{phrase: parts[1].text, at: K14.because + 120, color: TEAL},
				{phrase: parts[2].text, at: K14.even + 40, color: VIOLET},
			]} />
			{tags.map((t, i) => <Chip key={i} x={330 + i * 330} y={nB + 18} text={t.t} at={t.at} size={28} color={t.c} />)}
			<GreyTag x={1580} y={nB + 80} text="HSCScience model answer (illustrative)" at={K14.because} size={19} anchor="end" />
			<GreyTag x={1580} y={nB + 124} text="s04: verdict, criteria, evidence" at={K14.reason} size={19} anchor="end" />
			<CrossedHabit x={330} y={nB + 120} text={LAST} at={K14.adv} cross={K14.trap} caption="summary, not a judgement" size={30} maxW={900} />
			<T x={330} y={nB + 260} text="A judgement takes a side and gives the reason." size={36} hand weight={700} color={INK} o={vis(f, K14.takes, K14.example, 10)} />
			{void K14.reason}{void K14.summary}{void DrawPath}{void GREEN}
		</Overlay>
	);
};

// ---------- 15. Decision board ----------
const K15 = cues(sc('decision-rule'), {so: 'So for a', take: 'take the question', tick: 'tick each demand', if: 'If the verb', decide: 'decide it first', plan: 'Plan one line', build: 'Build each paragraph', when: 'And when', end: 'end with the', next: 'Next in Biology'});
const ROWS = (k: typeof K15) => [
	{t: 'Unpack: verbs, constraint, stimulus → ticks', ex: 'analyse + assess; individual + population', at: k.take, to: k.if},
	{t: 'Judgement asked for? Decide it first', ex: 'probably contributed', at: k.if, to: k.plan},
	{t: 'Plan: one line per paragraph + its evidence', ex: '95 → 87%', at: k.plan, to: k.build},
	{t: 'PEEL each paragraph', ex: 'point, evidence, explain, link', at: k.build, to: k.when},
	{t: 'Judgement verb? End with the judgement + condition', ex: 'cases already falling before 2018', at: k.when, to: k.next},
];
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Overlay>
			<T x={96} y={150} text="For a long answer" size={60} hand weight={700} color={INK} o={prog(f, K15.so, 12)} />
			{ROWS(K15).map((r, i) => {
				const y = 210 + i * 132;
				const o = prog(f, r.at - 6, 12);
				if (o <= 0.01) return null;
				const lit = vis(f, r.at, r.to, 10);
				return (
					<g key={i} opacity={o * (0.55 + 0.45 * lit)}>
						<rect x={96} y={y} width={1728} height={116} rx={18} fill="#fffdf8" stroke={lit > 0.5 ? AMBER : 'rgba(60,45,20,0.2)'} strokeWidth={lit > 0.5 ? 4 : 2.5} />
						<circle cx={150} cy={y + 58} r={28} fill={lit > 0.5 ? '#fff3d9' : '#fffdf8'} stroke={AMBER} strokeWidth={3} />
						<T x={150} y={y + 69} text={`${i + 1}`} size={30} weight={800} color={AMBER_INK} anchor="middle" />
						<T x={206} y={y + 52} text={r.t} size={42} hand weight={700} color={INK} />
						<T x={206} y={y + 96} text={`e.g. ${r.ex}`} size={26} weight={600} color={TEAL} />
					</g>
				);
			})}
			<Chip x={96} y={890} text="Next in Biology: evaluate an infectious disease strategy" at={K15.next} size={38} color={AMBER_INK} fill="#fff8e6" />
			{void K15.tick}{void K15.decide}{void K15.end}
		</Overlay>
	);
};

// ---------- 16. Key notes ----------
const NOTES = [
	'Long answers (6 to 9 marks) are usually marked in bands, read as a whole. Top band: every demand, detailed use of the stimulus, a supported judgement.',
	'Unpack: every verb, every constraint ("refer to", "with reference to"), the stimulus. Tick each demand in the margin as you cover it.',
	'Plan in about a minute: if a judgement is asked for, decide it first. Then one line per paragraph with the evidence it will use, including values when the stimulus gives them.',
	'PEEL is a scaffold for each paragraph: Point, Evidence (from the stimulus), Explain (the science linking them), Link (back to the question). One idea per paragraph.',
	'Use the stimulus: select values, compare them, say what they mean. Don\'t just copy the trend.',
	'Judgement verbs (assess, evaluate, justify): state the verdict first and last, with its reasons and its condition. "Advantages and disadvantages" is not a verdict.',
];
export const SceneNotes: React.FC = () => <Notes8 notes={NOTES} aids={['Verdict first, PEEL each paragraph, verdict last.', 'Quote the number, then say what it means.']} tag="when the verb asks for a judgement" size={27} aidTop={790} />;
