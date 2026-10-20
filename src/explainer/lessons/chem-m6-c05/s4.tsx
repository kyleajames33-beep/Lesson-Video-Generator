// M6 C05 scenes 12 to 17: two worded attempts (full question on screen through the countdown), brief feedback with the
// givens underlined as they are used and one crossed mistake each, the decision rule and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, hold, sc} from './common';
import {PHMETER} from './assets';
import {
	AChip, ACID, ACID_INK, EqLine, Fade, INK_SOFT, KeyNotesBoard, MistakeX, Note, OpGlow, Overlay, PauseHold, PlateAt, QText, RuleCard, Sx, TEAL, TaskLine, eSpan, eq, fitSize, qCheck, smooth,
} from './parts';
import type {QBlock, QMark} from './parts';

const QX = 140, QW = 1640;
const CardBox: React.FC<{y: number; h: number; at: number}> = ({y, h, at}) => (
	<Fade at={at}><rect x={100} y={y} width={1720} height={h} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} /></Fade>
);
/** The question group shrinks towards the top during feedback. */
const Shrink: React.FC<{k: number; children: React.ReactNode}> = ({k, children}) => {
	const f = useCurrentFrame();
	const s = 1 - (1 - k) * smooth(prog(f, 0, 20));
	return <g transform={`translate(100,${178}) scale(${s}) translate(-100,-178)`}>{children}</g>;
};

// ---------- 12/13. Question 1 ----------
const A1 = 'attempt-1';
const K12 = cues(sc(A1), {turn: 'Your turn', sol: 'Solutions of nitric', their: 'Their pH values', explain: 'Explain the difference', write: 'write an ionic', pause: 'Pause here'});
const Q1 = (t: [number, number, number, number], marks: QMark[] = []) => qCheck([
	{text: 'Nitric acid (HNO₃) and nitrous acid (HNO₂) solutions each have a concentration of 0.10 mol/L at 25 °C.', at: t[0]},
	{text: 'The nitric acid solution has a pH of 1.0 and the nitrous acid solution has a pH of 2.2.', at: t[1]},
	{text: 'Explain the difference in pH.', at: t[2], para: true},
	{text: 'Include an ionic equation for each acid reacting with water, using the correct arrow.', at: t[3]},
] as QBlock[], marks);
qCheck(Q1([0, 0, 0, 0]).blocks, [{phrase: 'concentration of 0.10 mol/L', at: 0}, {phrase: 'pH of 1.0', at: 0}, {phrase: 'pH of 2.2', at: 0}]);
const Question1: React.FC<{t: [number, number, number, number]; marks?: QMark[]}> = ({t, marks}) => (
	<>
		<CardBox y={200} h={330} at={t[0] - 6} />
		<QText q={Q1(t, marks)} x={QX} y={272} w={QW} size={42} card={false} />
	</>
);
export const SceneAttempt1: React.FC = () => (
	<Overlay>
		<TaskLine text="Your turn" at={K12.turn} />
		<Question1 t={[K12.sol, K12.their, K12.explain, K12.write]} />
		<PauseHold h={hold(A1)} at={K12.pause} x={140} y={720} cx={1560} cy={700} />
	</Overlay>
);

const F1 = 'feedback-1';
const K13 = cues(sc(F1), {same: 'same concentration', strength: 'difference is strength', strong: 'Nitric acid is strong', ion: 'ionises completely', single: 'single arrow', weak: 'Nitrous acid is weak', fewer: 'fewer hydronium ions', double: 'double arrow', said: 'If you said', dilute: 'more dilute', look: 'look again', equal: 'are equal'});
export const SceneFeedback1: React.FC = () => {
	const X = 160;
	const e1 = eq(['HNO_3(aq)', '+', 'H_2O(l)', '->', 'H_3O^{+}(aq)', '+', 'NO_3^{-}(aq)'], [0, 1, 2, 3, 4, 5, 6].map(i => K13.ion + 6 + i * 5));
	const e2 = eq(['HNO_2(aq)', '+', 'H_2O(l)', '<=>', 'H_3O^{+}(aq)', '+', 'NO_2^{-}(aq)'], [0, 1, 2, 3, 4, 5, 6].map(i => K13.fewer + i * 5));
	const S = Math.min(50, fitSize(e2, 1180, 50));
	return (
		<Overlay>
			<Shrink k={0.72}>
				<Question1 t={[-100, -100, -100, -100]} marks={[{phrase: 'concentration of 0.10 mol/L', at: K13.same}, {phrase: 'pH of 1.0', at: K13.ion}, {phrase: 'pH of 2.2', at: K13.fewer}]} />
			</Shrink>
			<OpGlow items={e1} i={3} size={S} x={X} y={620} at={K13.single} len={46} />
			<EqLine items={e1} x={X} y={620} size={S} />
			<Note x={eSpan(e1, 6, S, X).x2 + 50} y={620} text="strong" size={40} color={TEAL} at={K13.ion + 30} />
			<OpGlow items={e2} i={3} size={S} x={X} y={730} at={K13.double} len={46} color={ACID} />
			<EqLine items={e2} x={X} y={730} size={S} />
			<Note x={eSpan(e2, 6, S, X).x2 + 50} y={730} text="weak" size={40} color={ACID_INK} at={K13.fewer + 30} />
			<MistakeX x={X} y={810} text="HNO_2 is more dilute" at={K13.said} cross={K13.look} note="same concentration: different strength" size={34} />
			{void K13.strength}{void K13.strong}{void K13.weak}{void K13.dilute}{void K13.equal}
		</Overlay>
	);
};

// ---------- 14/15. Question 2 ----------
const A2 = 'attempt-2';
const K14 = cues(sc(A2), {last: 'Last one', amm: 'mole per litre ammonia', naoh: 'mole per litre sodium', student: 'A student claims', assess: 'Assess this claim', pause: 'Pause here'});
const Q2 = (t: [number, number, number, number], marks: QMark[] = []) => qCheck([
	{text: 'A 0.10 mol/L ammonia solution has a pH of 11.1.', at: t[0]},
	{text: 'A 0.0010 mol/L sodium hydroxide solution has a pH of 11.0.', at: t[1]},
	{text: 'A student claims that ammonia and sodium hydroxide are equally strong bases, because their pH values are almost the same.', at: t[2]},
	{text: 'Assess this claim.', at: t[3], para: true},
] as QBlock[], marks);
qCheck(Q2([0, 0, 0, 0]).blocks, [{phrase: 'equally strong bases', at: 0}, {phrase: '0.10 mol/L', at: 0}, {phrase: '0.0010 mol/L', at: 0}]);
const Question2: React.FC<{t: [number, number, number, number]; marks?: QMark[]}> = ({t, marks}) => (
	<>
		<CardBox y={200} h={330} at={t[0] - 6} />
		<QText q={Q2(t, marks)} x={QX} y={272} w={QW} size={42} card={false} />
	</>
);
export const SceneAttempt2: React.FC = () => (
	<Overlay>
		<TaskLine text="Last one" at={K14.last} />
		<Question2 t={[K14.amm - 10, K14.naoh - 10, K14.student, K14.assess]} />
		<PauseHold h={hold(A2)} at={K14.pause} x={140} y={720} cx={1560} cy={700} />
	</Overlay>
);

const F2 = 'feedback-2';
const K15 = cues(sc(F2), {not: 'not valid', naoh: 'Sodium hydroxide is strong', amm: 'Ammonia is weak', match: 'pH values match', hundred: 'a hundred times more', equal: 'At equal concentrations', higher: 'much higher pH', slip: 'classic slip', same: 'same pH, same'});
export const SceneFeedback2: React.FC = () => {
	const X = 160;
	return (
		<Overlay>
			<Shrink k={0.72}>
				<Question2 t={[-100, -100, -100, -100]} marks={[{phrase: 'equally strong bases', at: K15.not}, {phrase: '0.10 mol/L', at: K15.hundred}, {phrase: '0.0010 mol/L', at: K15.hundred + 10}]} />
			</Shrink>
			<AChip x={X} y={560} text="Not valid" size={44} color="#b4513f" hand at={K15.not + 10} />
			<Sx x={X} y={700} text="NaOH: strong, every unit gives OH^{-}" size={38} color={TEAL} weight={700} at={K15.naoh} />
			<Sx x={X} y={760} text="NH_3: weak, a small fraction makes OH^{-}" size={38} color={ACID_INK} weight={700} at={K15.amm} />
			<Fade at={K15.hundred} out={K15.equal}>
				<Sx x={1120} y={600} text="100 × more ammonia" size={42} color={TEAL} weight={700} at={K15.hundred} />
			</Fade>
			<Sx x={1120} y={600} text="at 0.10 mol/L:" size={34} color={INK_SOFT} weight={700} at={K15.equal + 4} />
			<Sx x={1120} y={650} text="NaOH pH 13.0, NH_3 pH 11.1" size={34} color={INK_SOFT} weight={700} at={K15.equal + 10} />
			<MistakeX x={X} y={830} text="same pH, same strength" at={K15.slip} cross={K15.same + 20} note="compare at the same concentration" size={34} />
			{void K15.match}{void K15.higher}
		</Overlay>
	);
};

// ---------- 16. Decision rule and handoff ----------
const DR = 'decision-rule';
const K16 = cues(sc(DR), {whenever: 'whenever you compare', two: 'two separate questions', how: 'How much is dissolved', conc: "That's concentration", comp: 'How completely does', str: "That's strength", arrow: 'use the arrow', next: 'Next', lab: 'in the lab'});
export const SceneDecision: React.FC = () => (
	<>
		<Heading text="Comparing acids or bases" at={4} size={58} />
		<Overlay>
			<RuleCard x={96} y={200} w={1728} at={K16.two} lh={92} lines={[
				{t: '1  How much per litre? Concentration.', at: K16.how, lit: [K16.how, K16.comp], size: 48},
				{t: '2  How completely does it ionise? Strength.', at: K16.comp, lit: [K16.comp, K16.arrow], size: 48},
				{t: '3  Strong: →.  Weak: ⇌.', at: K16.arrow, lit: [K16.arrow, K16.next], size: 48},
			]} />
			<AChip x={96} y={640} text="Next: measuring the pH of acids and bases" size={42} color={TEAL} at={K16.next} />
			<PlateAt p={PHMETER} x={1340} y={560} h={400} at={K16.next + 6} />
			{void K16.whenever}{void K16.conc}{void K16.str}{void K16.lab}
		</Overlay>
	</>
);

// ---------- 17. Key notes ----------
const NOTES = [
	'Strength: how completely an acid ionises (or a base dissociates or reacts) in water. Strong: completely, single arrow: HCl(aq) + H_2O(l) → H_3O^{+}(aq) + Cl^{-}(aq). Weak: partly, a dynamic equilibrium, double arrow: CH_3COOH(aq) + H_2O(l) ⇌ H_3O^{+}(aq) + CH_3COO^{-}(aq).',
	'Concentration: moles dissolved per litre. A dilute strong acid is still strong. pH depends on both strength and concentration, so compare strength at the same concentration (0.10 mol/L: HCl pH 1.0, acetic acid pH 2.9).',
	'Strong acids: HCl, HBr, HI, HNO_3, HClO_4, H_2SO_4 (first H^{+}); treat others as weak (HF is weak). Strong bases: Group 1 hydroxides and Ca(OH)_2, Sr(OH)_2, Ba(OH)_2 (two OH^{-} each). NH_3 is a weak base.',
	'Low solubility is not weakness: little Ca(OH)_2 dissolves, but all that dissolves dissociates. Weak does not mean safe.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={32} aidTop={770} aids={['Strength is how much it breaks up. Concentration is how much you put in.', 'So I Brought No Clean Clothes.']} tag="compare strength at the same concentration" />
);
