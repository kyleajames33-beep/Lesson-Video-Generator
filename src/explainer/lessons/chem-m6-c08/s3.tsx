// M6 C08 scenes 11 to 16: two worded attempts (full question on screen through the countdown), brief feedback with
// the givens underlined as they are used and one crossed mistake each, the decision rule and the key notes.
import React from 'react';
import {cues} from '../../cues';
import {Heading, hold, sc} from './common';
import {ANT, CAL} from './assets';
import {
	AChip, BASE_INK, DimG, EqLine, Fade, INK, INK_SOFT, KeyNotesBoard, MistakeX, Note, Overlay, P, PauseHold, PlateAt, QText, RuleCard, Sx, TEAL, TaskLine, WLine, eq, picW, qCheck,
} from './parts';
import type {QBlock, QMark} from './parts';
import {CardBox, Shrink} from '../chem-m6-c07/s4';

const QX = 140, QW = 1640;

// ---------- 11/12. Question 1 ----------
const A1 = 'attempt-1';
const K11 = cues(sc(A1), {turn: 'Your turn', meth: 'Methanoic acid is', calc: 'Calculate the pH', given: 'given that K', show: 'Show that the', pause: 'Pause here'});
const Q1 = (t: [number, number, number], marks: QMark[] = []) => qCheck([
	{text: 'Methanoic acid (HCOOH) is the acid in some ant stings.', at: t[0]},
	{text: 'Calculate the pH of a 0.200 mol/L methanoic acid solution at 25 °C, given that Ka = 1.8 × 10⁻⁴.', at: t[1]},
	{text: 'Show that the simplifying assumption is valid.', at: t[2], para: true},
] as QBlock[], marks);
qCheck(Q1([0, 0, 0]).blocks, [{phrase: '0.200 mol/L', at: 0}, {phrase: 'Ka', at: 0}, {phrase: '1.8', at: 0}, {phrase: '10⁻⁴.', at: 0}, {phrase: 'Show that the simplifying assumption is valid', at: 0}]);
const Question1: React.FC<{t: [number, number, number]; marks?: QMark[]}> = ({t, marks}) => (
	<>
		<CardBox y={200} h={280} at={t[0] - 6} />
		<QText q={Q1(t, marks)} x={QX} y={272} w={QW} size={44} card={false} />
	</>
);
export const SceneAttempt1: React.FC = () => (
	<Overlay>
		<TaskLine text="Your turn" at={K11.turn} />
		<PlateAt p={ANT} x={1810 - picW(ANT, 120)} y={64} h={120} at={K11.meth} />
		<Question1 t={[K11.meth, K11.calc, K11.show]} />
		<PauseHold h={hold(A1)} at={K11.pause} x={140} y={720} cx={1560} cy={700} />
		{void K11.given}
	</Overlay>
);

const F1 = 'feedback-1';
const K12 = cues(sc(F1), {weak: 'Methanoic acid is weak', drop: 'so drop the', xsq: 'x squared is', six: 'six point zero times', three: 'three percent of', valid: 'the assumption is', ph: 'The pH is', r222: 'two point two two', full: 'The full equation', r223: 'two point two three', z01: 'point zero one', treat: 'Treating the acid', strong: 'as strong gives'});
export const SceneFeedback1: React.FC = () => {
	const X = 140, S = 38, RX = 1240;
	const ka = K12.xsq + 10;
	return (
		<Overlay>
			<Shrink k={0.66}>
				<Question1 t={[-100, -100, -100]} marks={[{phrase: '0.200 mol/L', at: K12.xsq + 20}, {phrase: 'Ka', at: ka}, {phrase: '1.8', at: ka + 4}, {phrase: '10⁻⁴.', at: ka + 8}, {phrase: 'Show that the simplifying assumption is valid', at: K12.three, color: TEAL}]} />
			</Shrink>
			<WLine x={X} y={480} size={S} dim={K12.three} items={P('E row: 0.200 − x ≈ 0.200,  x,  x', K12.drop)} />
			<WLine x={X} y={560} size={S} dim={K12.three} items={P('x^{2} = 1.8 × 10^{−4} × 0.200 = 3.6 × 10^{−5};', K12.xsq + 6, {t: 'x = 6.0 × 10^{−3} mol/L', color: TEAL}, K12.six)} />
			<WLine x={X} y={650} size={S} dim={K12.r222} items={P('6.0 × 10^{−3} ÷ 0.200 = 3.0% < 5% ✓', K12.three)} />
			<WLine x={X} y={740} size={S} items={P('pH = −log(6.0 × 10^{−3})', K12.ph, {t: '= 2.22', color: TEAL}, K12.r222)} />
			<AChip x={RX} y={690} text="pH = 2.22" size={46} color={TEAL} hand={false} at={K12.r222 + 20} />
			<DimG at={K12.strong} to={0.35}>
				<Sx x={RX} y={820} text="full equation: 2.23 (shortcut within 0.01)" size={30} color={INK_SOFT} weight={600} at={K12.z01} />
			</DimG>
			<MistakeX x={X} y={820} text="[H_3O^{+}] = 0.200: pH 0.699" at={K12.treat} cross={K12.strong + 20} note="weak: [H_3O^{+}] ≠ c" size={34} />
			{void K12.weak}{void K12.valid}{void K12.full}{void K12.r223}
		</Overlay>
	);
};

// ---------- 13/14. Question 2 ----------
const A2 = 'attempt-2';
const K13 = cues(sc(A2), {last: 'Last one', meth: 'Methylamine is a', calc: 'Calculate the pH', pause: 'Pause here'});
const Q2 = (t: [number, number], marks: QMark[] = []) => qCheck([
	{text: 'Methylamine (CH₃NH₂) is a weak base that reacts with water in the same way as ammonia.', at: t[0]},
	{text: 'Calculate the pH of a 0.400 mol/L methylamine solution at 25 °C, given that Kb = 4.4 × 10⁻⁴.', at: t[1], para: true},
] as QBlock[], marks);
qCheck(Q2([0, 0]).blocks, [{phrase: 'reacts with water in the same way as ammonia', at: 0}, {phrase: '0.400 mol/L', at: 0}, {phrase: 'Kb', at: 0}, {phrase: '4.4', at: 0}, {phrase: '10⁻⁴.', at: 0}]);
const Question2: React.FC<{t: [number, number]; marks?: QMark[]}> = ({t, marks}) => (
	<>
		<CardBox y={200} h={300} at={t[0] - 6} />
		<QText q={Q2(t, marks)} x={QX} y={272} w={QW} size={44} card={false} />
	</>
);
export const SceneAttempt2: React.FC = () => (
	<Overlay>
		<TaskLine text="Last one" at={K13.last} />
		<Question2 t={[K13.meth, K13.calc]} />
		<PauseHold h={hold(A2)} at={K13.pause} x={140} y={700} cx={1560} cy={690} />
	</Overlay>
);

const F2 = 'feedback-2';
const K14 = cues(sc(F2), {takes: 'Methylamine takes a', making: 'making hydroxide', xsq: 'x squared is', x: 'so x, the', r13: 'one point three times', three: 'about three percent', passes: 'the check passes', poh: 'The pOH is', ph: 'the pH is', r1212: 'twelve point one two', using: 'Using zero point', treats: 'treats a weak'});
export const SceneFeedback2: React.FC = () => {
	const X = 140, S = 38, RX = 1240;
	const items = eq(['CH_3NH_2(aq)', '+', 'H_2O(l)', '<=>', 'CH_3NH_3^{+}(aq)', '+', {t: 'OH^{-}(aq)', color: BASE_INK}], K14.making, K14.making);
	return (
		<Overlay>
			<Shrink k={0.66}>
				<Question2 t={[-100, -100]} marks={[{phrase: 'reacts with water in the same way as ammonia', at: K14.takes + 10}, {phrase: '0.400 mol/L', at: K14.xsq + 20}, {phrase: 'Kb', at: K14.xsq + 30}, {phrase: '4.4', at: K14.xsq + 34}, {phrase: '10⁻⁴.', at: K14.xsq + 38}]} />
			</Shrink>
			<DimG at={K14.poh} to={0.4}>
				<EqLine items={items} x={X} y={470} size={40} />
			</DimG>
			<WLine x={X} y={570} size={S} dim={K14.poh} items={P('x = √(4.4 × 10^{−4} × 0.400) = 1.33 × 10^{−2}', K14.x, {t: '→ 1.3 × 10^{−2} mol/L = [OH^{-}]', color: BASE_INK}, K14.r13)} />
			<WLine x={X} y={650} size={S} dim={K14.poh} items={P({t: '1.3 × 10^{−2} ÷ 0.400 = 3.3% < 5% ✓', color: TEAL}, K14.three)} />
			<WLine x={X} y={740} size={S} items={P('pOH = 1.88;', K14.poh, 'pH = 14.00 − 1.88', K14.ph, {t: '= 12.12', color: TEAL}, K14.r1212)} />
			<AChip x={RX} y={690} text="pH = 12.12" size={46} color={TEAL} hand={false} at={K14.r1212 + 20} />
			<MistakeX x={X} y={820} text="[OH^{-}] = 0.400: pH 13.602" at={K14.using} cross={K14.treats + 20} note="weak base: [OH^{-}] ≠ c" size={34} />
			{void K14.passes}{void INK}
		</Overlay>
	);
};

// ---------- 15. Decision rule and handoff ----------
const DR = 'decision-rule';
const K15 = cues(sc(DR), {any: 'for any pH', decide: 'decide first', strong: 'Strong, use', weak: 'Weak, write', ice: 'build the ICE', drop: 'drop x if', check: "check it's under", take: 'then take the', next: 'Next'});
export const SceneDecision: React.FC = () => (
	<>
		<Heading text="For any pH question" at={4} size={58} />
		<Overlay>
			<RuleCard x={96} y={210} w={1728} at={K15.any} lh={88} lines={[
				{t: '1  Strong or weak?', at: K15.decide, lit: [K15.decide, K15.strong], size: 40, hand: false},
				{t: '2  Strong: [H_3O^{+}] or [OH^{-}] from c.', at: K15.strong, lit: [K15.strong, K15.weak], size: 40, hand: false},
				{t: '3  Weak: equation, ICE table, x ≈ √(K × c), check x < 5% of c.', at: K15.weak, lit: [K15.weak, K15.take], size: 40, hand: false},
				{t: '4  pH = −log[H_3O^{+}]; for a base, pOH first, then 14.00 − pOH.', at: K15.take, lit: [K15.take, K15.next], size: 40, hand: false},
			]} />
			<AChip x={96} y={680} text="Next: heat of neutralisation for weak acids" size={40} color={TEAL} hand={false} at={K15.next} />
			<PlateAt p={CAL} x={1480} y={640} h={340} at={K15.next + 6} />
			{void K15.ice}{void K15.drop}{void K15.check}{void Fade}{void Note}
		</Overlay>
	</>
);

// ---------- 16. Key notes ----------
const NOTES = [
	'A weak acid ionises only partly, so [H_3O^{+}] is much less than c. For HA(aq) + H_2O(l) ⇌ H_3O^{+}(aq) + A^{-}(aq), Ka = [H_3O^{+}][A^{-}] / [HA].',
	'ICE table (mol/L): I c, 0, 0; C −x, +x, +x; E c − x, x, x. So Ka = x^{2} / (c − x).',
	'If Ka is tiny and c is not, c − x ≈ c, so x ≈ √(Ka × c). Then check x ÷ c × 100% < 5%; if not, solve the full equation.',
	'Weak base: B(aq) + H_2O(l) ⇌ BH^{+}(aq) + OH^{-}(aq), Kb = x^{2} / (c − x), x = [OH^{-}], then pOH and pH = 14.00 − pOH (25 °C).',
	'Example: 0.150 mol/L propanoic acid, Ka = 1.3 × 10^{−5}: x = 1.4 × 10^{−3} mol/L (0.93%), pH 2.85 (2 d.p., because x has 2 s.f.).',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={31} aidTop={790} aids={['Strong or weak first.', 'Weak: x ≈ √(Ka × c), then check x < 5% of c.']} tag="Ka or Kb tiny, concentration not tiny" />
);
void INK_SOFT;
