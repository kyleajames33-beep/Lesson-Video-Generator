// M8 B01 scenes 10a to 12: two unseen exam items (construct a loop from a written description, with an empty ring as the
// drawing space; interpret a two-line air and core temperature graph), each whole on screen through "Pause here to
// answer." and its 10 s countdown with nothing answer-bearing; brief feedback with the givens underlined as they are used,
// the ring slots filling, and one crossed classic mistake (no givens card); the decision rule and handoff; key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay} from '../bio-m5-b13/shared';
import {HscTag, NextChip, NotesBoard, QText, qCheck} from '../bio-m5-g01/board';
import type {QBlock, QMark} from '../bio-m5-g01/board';
import {AnsBox, PauseHold} from '../bio-m7-b01/s3';
import {NB, S, hold} from './common';
import {AMBER, AMBER_INK, CardBox, ColdRing, GREY_INK, GTag, INK, INK_SOFT, MistakeChip, PLATES, Pl, ROLE, StepChip, Sx, TEAL, prog, ringPt, vis} from './parts';
import type {RG} from './parts';
import {LoopRing, RingArc, TAxes, TLine, tx, ty} from '../m8-shared/parts';
import type {TG} from '../m8-shared/parts';

// ---------- item 1: construct a loop ----------
type T1 = {a: number; b: number; c: number; qa: number; qb: number};
const Q1 = (t: T1): QBlock[] => [
	{text: 'During exercise, respiring muscle cells release more carbon dioxide into the blood.', at: t.a},
	{text: 'Chemoreceptors in the brainstem and in the walls of major arteries detect the rise in blood carbon dioxide concentration.', at: t.b},
	{text: 'The medulla oblongata, part of the brainstem, sends nerve impulses to the diaphragm and the muscles between the ribs. The rate and depth of breathing increase.', at: t.c},
	{text: '(a) Construct a negative feedback loop for this response, naming each of the five components. (3 marks)', at: t.qa, weight: 700, para: true},
	{text: '(b) Explain why this is an example of negative feedback. (2 marks)', at: t.qb, weight: 700, para: true},
];
const ALL1: T1 = {a: -100, b: -100, c: -100, qa: -100, qb: -100};
const M1 = ['blood carbon dioxide concentration.', 'Chemoreceptors', 'medulla oblongata,', 'diaphragm and the muscles between the ribs.', 'rate and depth of breathing increase.'];
qCheck(Q1(ALL1), M1.map(phrase => ({phrase, at: 0})));
const R1: RG = {cx: 1530, cy: 500, R: 175, r: 64};
const KA = cues(S('attempt'), {two: 'Two exam questions', first: 'First', during: 'During exercise', chemo: 'Chemoreceptors in', medulla: 'The medulla', construct: 'Construct a negative', explain: 'and explain why', pause: 'Pause here'});
const Card1: React.FC<{t: T1; marks?: QMark[]}> = ({t, marks = []}) => (
	<>
		<HscTag at={-100} />
		<CardBox x={100} y={170} w={1720} h={850} at={-100} />
		<QText q={qCheck(Q1(t), marks)} x={140} y={250} w={1160} size={30} card={false} />
	</>
);
export const SceneAttempt: React.FC = () => {
	const h = hold('attempt');
	const t: T1 = {a: KA.during, b: KA.chemo, c: KA.medulla, qa: KA.construct, qb: KA.explain};
	return (
		<>
			<Heading text="Exam question 1" at={KA.two} size={50} />
			<Overlay>
				<Card1 t={t} />
				<LoopRing g={R1} at={KA.construct + 10} />
				<Sx x={R1.cx} y={R1.cy + R1.R + R1.r + 40} text="drawing space" size={22} color={INK_SOFT} anchor="middle" hand weight={700} at={KA.construct + 16} />
				<PauseHold start={h.startFrame} end={h.endFrame} at={KA.pause} />
				{void KA.first}
			</Overlay>
		</>
	);
};
const KB = cues(S('feedback-one'), {stim: 'Stimulus: blood', rec: 'Receptor: the', ctrl: 'Control centre', eff: 'Effectors: the', resp: 'Response: faster', neg: "It's negative", opposes: 'opposes the rise', calling: 'Calling exercise', classic: 'classic mistake'});
const FILL1: string[][] = [['CO_2', 'rises'], ['chemo-', 'receptors'], ['medulla', 'oblongata'], ['diaphragm,', 'rib muscles'], ['faster,', 'deeper', 'breathing']];
export const SceneFeedbackOne: React.FC = () => {
	const f = useCurrentFrame();
	const at = [KB.stim, KB.rec, KB.ctrl, KB.eff, KB.resp];
	const marks: QMark[] = M1.map((phrase, i) => ({phrase, at: at[i] + 6, color: AMBER}));
	return (
		<>
			<Heading text="Five parts, from the stem" at={4} size={50} />
			<Overlay>
				<Card1 t={ALL1} marks={marks} />
				<LoopRing g={R1} lit={at}>
					{FILL1.map((ls, i) => {
						const [x, y] = ringPt(R1, i);
						return ls.map((l, k) => <Sx key={i + '-' + k} x={x} y={y + 8 + (k - (ls.length - 1) / 2) * 24} text={l} size={20} color={INK} anchor="middle" weight={700} at={at[i] + 8} />);
					})}
					{ROLE.map((t, i) => {
						const [x, y] = ringPt(R1, i, R1.R + R1.r + 22);
						return <Sx key={t} x={x} y={y + 8} text={t} size={20} color={GREY_INK} anchor="middle" hand weight={700} at={at[i]} />;
					})}
					<RingArc g={R1} i={4} at={KB.opposes} color={AMBER} width={6} sign="−" signAt={KB.opposes + 8} signSize={40} />
				</LoopRing>
				<MistakeChip x={140} y={830} text="Stimulus: exercise" at={KB.calling} cross={KB.classic + 6} size={30} />
				<GTag x={140} y={920} text="exercise is the cause; the stimulus is the change in CO_2" at={KB.classic + 16} size={24} />
				{void f}{void vis}
			</Overlay>
		</>
	);
};

// ---------- item 2: interpret a graph ----------
type T2 = {a: number; b: number; qa: number; qb: number};
const Q2 = (t: T2): QBlock[] => [
	{text: `A healthy adult sat in a room at 22${NB}°C, then moved into a room at 5${NB}°C for 60${NB}minutes.`, at: t.a},
	{text: "The graph shows air temperature and the adult's core body temperature.", at: t.b},
	{text: '(a) Identify the variable being regulated. (1 mark)', at: t.qa, weight: 700, para: true},
	{text: '(b) Explain the pattern in core body temperature after the move, with reference to negative feedback. (3 marks)', at: t.qb, weight: 700, para: true},
];
const ALL2: T2 = {a: -100, b: -100, qa: -100, qb: -100};
const M2 = ['variable being regulated.', "adult's core body temperature."];
qCheck(Q2(ALL2), M2.map(phrase => ({phrase, at: 0})));
const GA: TG = {x: 1140, y: 290, w: 520, h: 380, x0: 0, x1: 70, y0: 0, y1: 25};
const GC: TG = {...GA, y0: 36, y1: 37.5};
const AIR: [number, number][] = [[0, 22], [10, 22], [11, 5], [70, 5]];
const CORE: [number, number][] = [[0, 37], [10, 37], [20, 36.6], [32, 36.9], [40, 36.8], [48, 37.0], [56, 36.85], [64, 37.0], [70, 36.9]];
const Graph2: React.FC<{at: number; lit?: number}> = ({at, lit}) => {
	const f = useCurrentFrame();
	return (
		<>
			<TAxes g={GA} at={at} xLabel="time (min)" yLabel="air temperature (°C)" xTicks={[0, 10, 20, 30, 40, 50, 60, 70]} yTicks={[0, 5, 10, 15, 20, 25]} size={20}
				rTicks={{g: GC, ticks: [36, 36.5, 37, 37.5], label: 'core body temperature (°C)', color: TEAL}} />
			<TLine g={GA} pts={AIR} at={at + 10} dur={40} color="#9a948a" width={5} label="air" labelDy={-14} size={24} />
			<TLine g={GC} pts={CORE} at={at + 24} dur={70} color={TEAL} width={5} label="core" labelDy={-16} size={24} />
			{lit !== undefined ? <TLine g={GC} pts={[[20, 36.6], [32, 36.9]]} at={lit} dur={24} color={AMBER} width={11} o={0.85 * prog(f, lit, 10)} /> : null}
			<GTag x={GA.x} y={GA.y + GA.h + 96} text="teaching data" at={at + 20} size={22} />
		</>
	);
};
const KC = cues(S('attempt-two'), {second: 'Second', healthy: 'A healthy adult', graph: 'The graph shows', identify: 'Identify the variable', explain: 'and explain the', pause: 'Pause here'});
const Card2: React.FC<{t: T2; marks?: QMark[]}> = ({t, marks = []}) => (
	<>
		<HscTag at={-100} />
		<CardBox x={100} y={170} w={1720} h={850} at={-100} />
		<QText q={qCheck(Q2(t), marks)} x={140} y={250} w={860} size={30} card={false} />
	</>
);
export const SceneAttemptTwo: React.FC = () => {
	const h = hold('attempt-two');
	return (
		<>
			<Heading text="Exam question 2" at={KC.second} size={50} />
			<Overlay>
				<Card2 t={{a: KC.healthy, b: KC.graph, qa: KC.identify, qb: KC.explain}} />
				<Graph2 at={KC.graph} />
				<AnsBox x={140} y={640} w={860} h={340} at={KC.explain + 30} />
				<PauseHold start={h.startFrame} end={h.endFrame} at={KC.pause} />
			</Overlay>
		</>
	);
};
const KD = cues(S('feedback-two'), {reg: 'The regulated variable', core: 'core body temperature', notair: 'not air', small: 'small fall', stim: 'the stimulus', hypo: 'The hypothalamus', shiver: 'with shivering', made: 'made more heat', recovered: 'temperature recovered', naming: 'Naming air', classic: 'classic mistake', five: 'stayed at five'});
const MR: RG = {cx: 330, cy: 790, R: 110, r: 38};
export const SceneFeedbackTwo: React.FC = () => {
	const f = useCurrentFrame();
	const marks: QMark[] = [{phrase: M2[0], at: KD.reg, color: TEAL}, {phrase: M2[1], at: KD.core + 6, color: AMBER}];
	const dip: [number, number] = [tx(GC, 20), ty(GC, 36.6)];
	const pu = vis(f, KD.five, undefined, 8) * (0.5 + 0.5 * Math.sin((f - KD.five) / 5));
	const axisLit = vis(f, KD.core, undefined, 10);
	return (
		<>
			<Heading text="Core temperature, not air" at={4} size={50} />
			<Overlay>
				<Card2 t={ALL2} marks={marks} />
				<Graph2 at={-100} lit={KD.made} />
				{axisLit > 0.01 ? <rect x={GA.x + GA.w + 70} y={GA.y + 20} width={44} height={GA.h - 40} rx={14} fill="none" stroke={AMBER} strokeWidth={4} opacity={axisLit} /> : null}
				<g opacity={prog(f, KD.small, 10)}>
					<circle cx={dip[0]} cy={dip[1]} r={11} fill={AMBER} stroke="#fffdf8" strokeWidth={3} />
					<Sx x={dip[0] + 18} y={dip[1] + 44} text={`36.6${NB}°C, stimulus`} size={26} color={AMBER_INK} hand weight={700} at={-1000} />
				</g>
				<ColdRing id="b01f2" g={MR} at={KD.hypo - 10} c={{lit: [KD.hypo, KD.hypo + 8, KD.hypo + 16, KD.shiver, KD.made], show: [KD.hypo, KD.hypo + 8, KD.hypo + 16, KD.shiver, KD.made], minus: {at: KD.recovered}, shiver: fr => vis(fr, KD.shiver, KD.made + 20, 6)}} />
				<MistakeChip x={520} y={860} text="regulated variable: air temperature" at={KD.naming} cross={KD.classic + 6} size={28} />
				<GTag x={520} y={945} text={`the air stayed at 5${NB}°C`} at={KD.five} size={24} />
				{pu > 0.01 ? <circle cx={tx(GA, 45)} cy={ty(GA, 5)} r={22} fill="none" stroke={AMBER} strokeWidth={4} opacity={pu} /> : null}
				{void KD.notair}{void KD.stim}{void INK}
			</Overlay>
		</>
	);
};

// ---------- 11. Decision rule and handoff ----------
const KE = cues(S('decision-rule'), {name: 'name the variable', trace: 'trace the five', check: 'and check that', next: 'Next', zoom: 'zoom in'});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const chips = [{at: KE.name, text: 'variable inside the body?'}, {at: KE.trace, text: 'five parts in order'}, {at: KE.check, text: 'response opposes?'}];
	return (
		<>
			<Heading text="For any loop" at={4} size={56} />
			<Overlay>
				<ColdRing id="b01dr" g={{cx: 1560, cy: 420, R: 150, r: 50}} c={{lit: [], minus: {at: -100, signAt: -100}}} />
				{chips.map((c, i) => <StepChip key={i} x={200} y={250 + i * 140} w={1000} n={i + 1} text={c.text} at={c.at} lit={vis(f, c.at, chips[i + 1]?.at ?? KE.next, 10)} />)}
				<NextChip x={560} y={860} w={1260} text="Next: How do endotherms regulate body temperature?" at={KE.next}>
					<Pl p={PLATES.skin} cx={622} cy={902} w={84} />
				</NextChip>
				{void KE.zoom}{void AMBER}
			</Overlay>
		</>
	);
};

// ---------- 12. Key notes ----------
const NOTES = [
	`Homeostasis: keeping the internal environment relatively stable, within a tolerance range around a set point (core temperature about 36.5 to 37.5${NB}°C), so enzymes keep working.`,
	'The loop, in order: stimulus (a change in the variable), receptor (detects it), control centre (compares with the set point), effector (acts), response (opposes the change).',
	'Negative feedback: the response opposes the deviation; as the variable returns, the signals and the extra response ease, and small fluctuations can occur around the set point. Positive feedback amplifies a change until an end point (blood clotting).',
	'Cold example: thermoreceptors (skin, hypothalamus) → hypothalamus → shivering muscles and narrowed skin arterioles → more heat made, less lost.',
	'Exam check: the regulated variable is inside the body (core temperature, not air temperature).',
];
export const SceneNotes: React.FC = () => (
	<NotesBoard notes={NOTES} aid="Some Really Cool Elephants Run." tag="stimulus, receptor, control centre, effector, response; negative if the response opposes the change" size={30} aidTop={790} />
);
