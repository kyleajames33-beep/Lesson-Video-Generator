// M6 C09 scenes 11 to 16: two worded attempts (full question on screen through the countdown), brief feedback with the
// givens underlined as they are used and one crossed mistake each, the decision rule and the key notes.
import React from 'react';
import {cues} from '../../cues';
import {Heading, hold, sc} from './common';
import {CAL, PHMETER} from './assets';
import {AChip, EIN_INK, KeyNotesBoard, MistakeX, Note, Overlay, P, PauseHold, PlateAt, QText, RuleCard, Staircase, TaskLine, TEAL, WLine, calW, qCheck} from './parts';
import type {QBlock, QMark} from './parts';
import {CardBox, Shrink} from '../chem-m6-c07/s4';

const QX = 140, QW = 1640;

// ---------- 11/12. Question 1 ----------
const A1 = 'attempt-1';
const K11 = cues(sc(A1), {turn: 'Your turn', eth: 'Ethanoic acid is', hcl: 'Hydrochloric acid gives', using: 'Using the amounts', calc: 'calculate the enthalpy', then: 'then the enthalpy', pause: 'Pause here'});
const Q1 = (t: [number, number, number, number], marks: QMark[] = []) => qCheck([
	{text: '50.0 mL of 1.00 mol/L ethanoic acid is mixed with 50.0 mL of 1.00 mol/L sodium hydroxide solution in a polystyrene cup. The temperature rises by 6.7 °C.', at: t[0]},
	{text: 'Under the same conditions, the enthalpy of neutralisation of hydrochloric acid is −57 kJ/mol.', at: t[1]},
	{text: 'Assume the density of the mixture is 1.00 g/mL and its specific heat capacity is 4.18 J g⁻¹ °C⁻¹.', at: t[1] + 40},
	{text: '(a) Calculate the enthalpy of neutralisation of ethanoic acid.', at: t[2], para: true},
	{text: '(b) Calculate the enthalpy change for the ionisation of ethanoic acid, and comment on its size.', at: t[3], para: true},
] as QBlock[], marks);
const Q1MARKS: QMark[] = [{phrase: '50.0 mL', at: 0}, {phrase: '50.0 mL', occ: 2, at: 0}, {phrase: '1.00 g/mL', at: 0}, {phrase: '4.18 J g⁻¹ °C⁻¹', at: 0}, {phrase: '6.7 °C', at: 0}, {phrase: '1.00 mol/L', at: 0}, {phrase: '−57 kJ/mol', at: 0}];
qCheck(Q1([0, 0, 0, 0]).blocks, Q1MARKS);
const Question1: React.FC<{t: [number, number, number, number]; marks?: QMark[]}> = ({t, marks}) => (
	<>
		<CardBox y={200} h={430} at={t[0] - 6} />
		<QText q={Q1(t, marks)} x={QX} y={268} w={QW} size={40} card={false} />
	</>
);
export const SceneAttempt1: React.FC = () => (
	<Overlay>
		<TaskLine text="Your turn" at={K11.turn} />
		<PlateAt p={CAL} x={1810 - calW(130)} y={56} h={130} at={K11.eth} />
		<Question1 t={[K11.eth, K11.hcl, K11.calc, K11.then]} />
		<PauseHold h={hold(A1)} at={K11.pause} x={140} y={790} cx={1560} cy={780} />
		{void K11.using}
	</Overlay>
);

const F1 = 'feedback-1';
const K12 = cues(sc(F1), {mass: 'The mass is', q: 'two thousand eight', divide: 'Divide by zero', m56: 'minus fifty six kilojoules', ion: 'The ionisation step', take: 'take away minus', plus1: 'about plus one', close: "That's close to", sub: 'Subtracting the other', sign: 'the sign backwards'});
export const SceneFeedback1: React.FC = () => {
	const X = 140, S = 36;
	const u = K12.q - 16;
	return (
		<Overlay>
			<Shrink k={0.6}>
				<Question1 t={[-100, -100, -100, -100]} marks={[
					{phrase: '50.0 mL', at: K12.mass}, {phrase: '50.0 mL', occ: 2, at: K12.mass + 4}, {phrase: '1.00 g/mL', at: K12.mass + 10},
					{phrase: '4.18 J g⁻¹ °C⁻¹', at: u}, {phrase: '6.7 °C', at: u + 6},
					{phrase: '1.00 mol/L', at: K12.divide, color: TEAL},
					{phrase: '−57 kJ/mol', at: K12.take, color: TEAL},
				]} />
			</Shrink>
			<WLine x={X} y={530} size={S} dim={K12.q} items={P('m = 100.0 mL × 1.00 g/mL', K12.mass, '= 100.0 g', K12.mass + 26)} />
			<WLine x={X} y={595} size={S} dim={K12.divide} items={P('q = 100.0 g × 4.18 J g^{-1} °C^{-1} × 6.7 °C', u, '= 2800.6 J', K12.q + 20)} />
			<WLine x={X} y={660} size={S} dim={K12.m56} items={P('n(H_2O) = 1.00 × 0.0500 = 0.0500 mol', K12.divide + 10)} />
			<WLine x={X} y={725} size={S} dim={K12.ion} items={P('ΔH = −2.8006 kJ ÷ 0.0500 mol', K12.m56 - 24, {t: '= −56.01 → −56 kJ/mol', color: TEAL}, K12.m56 + 6)} />
			<WLine x={X} y={790} size={S} items={P('step 1 = −56 − (−57)', K12.ion + 20, {t: '= +1 kJ/mol', color: TEAL}, K12.plus1)} />
			<AChip x={X} y={835} text="(a) −56 kJ/mol (2 s.f.)" size={34} color={TEAL} hand={false} at={K12.m56 + 40} />
			<AChip x={X + 470} y={835} text="(b) about +1 kJ/mol: close to zero" size={34} color={TEAL} hand={false} at={K12.plus1 + 20} />
			<MistakeX x={1270} y={835} text="−57 − (−56) = −1 kJ/mol" at={K12.sub} cross={K12.sign + 6} note="measured minus water step" size={32} />
			{void K12.close}
		</Overlay>
	);
};

// ---------- 13/14. Question 2 ----------
const A2 = 'attempt-2';
const K13 = cues(sc(A2), {last: 'Last one', hcn: 'Hydrogen cyanide is', using: 'Using minus fifty', predict: 'predict the enthalpy', pause: 'Pause here'});
const Q2 = (t: [number, number], marks: QMark[] = []) => qCheck([
	{text: 'Hydrogen cyanide, HCN, is a weak acid. Its ionisation, HCN(aq) → H⁺(aq) + CN⁻(aq), absorbs about 45 kJ/mol.', at: t[0]},
	{text: 'Using −57 kJ/mol for H⁺(aq) + OH⁻(aq) → H₂O(l), predict the enthalpy of neutralisation of hydrogen cyanide by sodium hydroxide, and explain why it differs from that of hydrochloric acid.', at: t[1], para: true},
] as QBlock[], marks);
qCheck(Q2([0, 0]).blocks, [{phrase: 'absorbs about 45 kJ/mol', at: 0}, {phrase: '−57 kJ/mol', at: 0}]);
const Question2: React.FC<{t: [number, number]; marks?: QMark[]}> = ({t, marks}) => (
	<>
		<CardBox y={200} h={330} at={t[0] - 6} />
		<QText q={Q2(t, marks)} x={QX} y={268} w={QW} size={42} card={false} />
	</>
);
export const SceneAttempt2: React.FC = () => (
	<Overlay>
		<TaskLine text="Last one" at={K13.last} />
		<Question2 t={[K13.hcn, K13.using]} />
		<PauseHold h={hold(A2)} at={K13.pause} x={140} y={720} cx={1560} cy={710} />
		{void K13.predict}
	</Overlay>
);

const F2 = 'feedback-2';
const K14 = cues(sc(F2), {add: 'Add the two', m12: 'minus twelve', much: "That's much less", used: 'used up', no: 'no such step', writing: 'Writing minus fifty', released: 'as released'});
export const SceneFeedback2: React.FC = () => (
	<Overlay>
		<Shrink k={0.62}>
			<Question2 t={[-100, -100]} marks={[{phrase: 'absorbs about 45 kJ/mol', at: K14.add + 10}, {phrase: '−57 kJ/mol', at: K14.add + 30}]} />
		</Shrink>
		<Staircase x={540} y={640} k={3.6} w={700} at={K14.add} s1={() => 45} s1At={K14.add + 40} s2At={K14.add + 70} netAt={K14.m12 - 6} pulse1={K14.used}
			lvA={[{t: 'HCN(aq) + OH^{-}(aq)', at: K14.add + 4}]} lvB={[{t: 'H^{+}(aq) + CN^{-}(aq) + OH^{-}(aq)', at: K14.add + 44}]} lvC={[{t: 'CN^{-}(aq) + H_2O(l)', at: K14.add + 74}]}
			s1L={[{t: '+45', at: K14.add + 48}]} s2L={[{t: '−57', at: K14.add + 76}]} netL={[{t: '−12 kJ/mol', at: K14.m12 + 6}]} size={28} />
		<AChip x={1300} y={470} text="ΔH ≈ −12 kJ/mol" size={44} color={TEAL} hand={false} at={K14.m12 + 30} />
		<Note x={140} y={820} text="most of the 57 kJ goes into step 1; HCl: no step 1" size={36} color={EIN_INK} at={K14.used + 6} />
		<MistakeX x={140} y={870} text="−57 − 45 = −102 kJ/mol" at={K14.writing} cross={K14.released + 6} note="absorbed energy is +" size={32} />
		{void K14.much}{void K14.no}
	</Overlay>
);

// ---------- 15. Decision rule and handoff ----------
const DR = 'decision-rule';
const K15 = cues(sc(DR), {any: 'for any weak', start: 'start from minus', add: 'add the ionising', remember: 'remember that the', dont: "Don't use the", next: 'Next'});
export const SceneDecision: React.FC = () => (
	<>
		<Heading text="For any weak acid or base neutralisation" at={4} size={56} />
		<Overlay>
			<RuleCard x={96} y={210} w={1728} at={K15.any} lh={88} lines={[
				{t: '1  Water step: about −57 kJ/mol.', at: K15.start, lit: [K15.start, K15.add], size: 40, hand: false},
				{t: '2  Add the ionisation step, with its sign (+, ≈ 0 or −).', at: K15.add, lit: [K15.add, K15.remember], size: 40, hand: false},
				{t: '3  The weak acid or base still reacts completely.', at: K15.remember, lit: [K15.remember, K15.dont], size: 40, hand: false},
				{t: '4  Heat does not rank strength: use pH or Ka.', at: K15.dont, lit: [K15.dont, K15.next], size: 40, hand: false},
			]} />
			<AChip x={96} y={680} text="Next: Ka and pKa, and what they say about acid strength" size={38} color={TEAL} hand={false} at={K15.next} />
			<PlateAt p={PHMETER} x={1480} y={700} h={300} at={K15.next + 6} />
		</Overlay>
	</>
);

// ---------- 16. Key notes ----------
const NOTES = [
	'Every neutralisation in dilute solution can be counted as ending with H^{+}(aq) + OH^{-}(aq) → H_2O(l), about −57 kJ/mol.',
	'A weak acid still reacts completely: OH^{-} removes H_3O^{+}, the equilibrium shifts right, and more molecules ionise until all have reacted.',
	'By Hess\'s law, ΔH(neutralisation) = ΔH(ionisation step) + (−57 kJ/mol), so ΔH(ionisation step) = ΔH(measured) − (−57 kJ/mol). The ionisation step = energy in (a bond breaks) + energy out (water surrounds the new ions), so it can be positive, close to zero or negative.',
	'Examples: ethanoic acid about −56 kJ/mol (step about 0); HF about −68 (step about −11); HCl + NH_3 about −52 per mole of NH_3 (step about +5).',
	'Neutralisation heat does not rank acid strength: use pH or Ka.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={30} aidTop={800} aids={['Same last step, different first step.']} tag="dilute solutions; the first step's sign sets less, same or more heat" />
);
