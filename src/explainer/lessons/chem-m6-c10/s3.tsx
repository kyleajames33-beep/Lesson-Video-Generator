// M6 C10 scenes 12 to 17: two worded attempts (full question on screen through the countdown), brief feedback with the
// givens underlined as they are used and one crossed mistake each, the decision rule and the key notes.
import React from 'react';
import {cues} from '../../cues';
import {Heading, hold, sc} from './common';
import {PHMETER} from './assets';
import {AChip, BASE_INK, DimG, KeyNotesBoard, MistakeX, NAVY, Overlay, P, PKRuler, PauseHold, PlateAt, QText, RuleCard, TaskLine, TEAL, WLine, qCheck} from './parts';
import type {PR, QBlock, QMark} from './parts';
import {CardBox, Shrink} from '../chem-m6-c07/s4';

const QX = 140, QW = 1640;

// ---------- 12/13. Question 1 ----------
const A1 = 'attempt-1';
const K12 = cues(sc(A1), {turn: 'Your turn', lactic: 'Lactic acid is', a: 'A zero point', calc: 'Calculate the K', pause: 'Pause here'});
const Q1 = (t: [number, number, number], marks: QMark[] = []) => qCheck([
	{text: 'Lactic acid is the weak monoprotic acid that forms when milk turns sour.', at: t[0]},
	{text: 'A 0.200 mol/L solution of lactic acid has a pH of 2.28 at 25 °C.', at: t[1]},
	{text: 'Calculate the acid dissociation constant, Ka, and the pKa of lactic acid.', at: t[2], para: true},
] as QBlock[], marks);
qCheck(Q1([0, 0, 0]).blocks, [{phrase: 'pH of 2.28', at: 0}, {phrase: '0.200 mol/L', at: 0}, {phrase: 'Ka', at: 0}, {phrase: 'pKa', at: 0}]);
const Question1: React.FC<{t: [number, number, number]; marks?: QMark[]}> = ({t, marks}) => (
	<>
		<CardBox y={200} h={290} at={t[0] - 6} />
		<QText q={Q1(t, marks)} x={QX} y={272} w={QW} size={44} card={false} />
	</>
);
export const SceneAttempt1: React.FC = () => (
	<Overlay>
		<TaskLine text="Your turn" at={K12.turn} />
		<Question1 t={[K12.lactic, K12.a, K12.calc]} />
		<PauseHold h={hold(A1)} at={K12.pause} x={140} y={700} cx={1560} cy={690} />
	</Overlay>
);

const F1 = 'feedback-1';
const K13 = cues(sc(F1), {hyd: 'Hydronium is ten', r525: 'five point two five', left: 'The acid left', r195: 'zero point one nine five', ka: 'K a is the', r14: 'one point four', pka: 'the p K a', r385: 'three point eight five', stop: 'Stopping at the', slip: 'the slip'});
export const SceneFeedback1: React.FC = () => {
	const X = 140, S = 38, RX = 1250;
	return (
		<Overlay>
			<Shrink k={0.66}>
				<Question1 t={[-100, -100, -100]} marks={[{phrase: 'pH of 2.28', at: K13.hyd + 6}, {phrase: '0.200 mol/L', at: K13.left + 10}, {phrase: 'Ka', at: K13.r385, color: TEAL}, {phrase: 'pKa', at: K13.r385 + 6, color: TEAL}]} />
			</Shrink>
			<WLine x={X} y={460} size={S} dim={K13.left} items={P('[H_3O^{+}] = [A^{-}] = 10^{−2.28}', K13.hyd + 10, {t: '= 5.25 × 10^{−3} mol/L', color: TEAL}, K13.r525)} />
			<WLine x={X} y={530} size={S} dim={K13.r14} items={P('[HA] = 0.200 − 0.00525', K13.left + 14, '= 0.195 mol/L', K13.r195)} />
			<WLine x={X} y={600} size={S} dim={K13.r385} items={P('Ka = (5.25 × 10^{−3})^{2} / 0.195', K13.ka, {t: '= 1.41 × 10^{−4} → 1.4 × 10^{−4}', color: TEAL}, K13.r14)} />
			<WLine x={X} y={670} size={S} items={P('pKa = −log(1.41 × 10^{−4})', K13.pka, {t: '= 3.85', color: NAVY}, K13.r385)} />
			<AChip x={RX} y={500} text="Ka = 1.4 × 10^{−4}" size={44} color={TEAL} hand={false} at={K13.r14 + 30} />
			<AChip x={RX} y={590} text="pKa = 3.85" size={44} color={NAVY} hand={false} at={K13.r385 + 24} />
			<MistakeX x={X} y={760} text="Ka = 5.2 × 10^{−3}" at={K13.stop} cross={K13.slip + 6} note="that's [H_3O^{+}], not Ka" size={36} />
		</Overlay>
	);
};

// ---------- 14/15. Question 2 ----------
const A2 = 'attempt-2';
const K14 = cues(sc(A2), {last: 'Last one', pka: 'The p K a', list: 'List the acids', then: 'Then identify the', pause: 'Pause here'});
const Q2 = (t: [number, number, number], marks: QMark[] = []) => qCheck([
	{text: 'The pKa values of three acids at 25 °C are: hydrofluoric acid, HF, 3.17; methanoic acid, HCOOH, 3.74; hydrocyanic acid, HCN, 9.21.', at: t[0]},
	{text: '(a) List the acids in order of decreasing strength.', at: t[1], para: true},
	{text: '(b) Identify the strongest base among F⁻, HCOO⁻ and CN⁻, and calculate its Kb. Kw = 1.0 × 10⁻¹⁴ at 25 °C.', at: t[2], para: true},
] as QBlock[], marks);
qCheck(Q2([0, 0, 0]).blocks, [{phrase: '3.17;', at: 0}, {phrase: '3.74;', at: 0}, {phrase: '9.21.', at: 0}, {phrase: 'F⁻, HCOO⁻ and CN⁻', at: 0}, {phrase: 'Kw', at: 0}, {phrase: '1.0', at: 0}, {phrase: '10⁻¹⁴', occ: 2, at: 0}]);
const Question2: React.FC<{t: [number, number, number]; marks?: QMark[]}> = ({t, marks}) => (
	<>
		<CardBox y={200} h={400} at={t[0] - 6} />
		<QText q={Q2(t, marks)} x={QX} y={272} w={QW} size={42} card={false} />
	</>
);
export const SceneAttempt2: React.FC = () => (
	<Overlay>
		<TaskLine text="Last one" at={K14.last} />
		<Question2 t={[K14.pka, K14.list, K14.then]} />
		<PauseHold h={hold(A2)} at={K14.pause} x={140} y={780} cx={1560} cy={770} />
	</Overlay>
);

const F2 = 'feedback-2';
const K15 = cues(sc(F2), {lowest: 'Lowest p K', hf: 'hydrofluoric acid, then', weakest: 'The weakest acid', cyanide: "that's cyanide", hcn: "Hydrocyanic acid's K", r62: 'six point two', r16: 'one point six', putting: 'Putting nine point', back: 'golf backwards'});
export const SceneFeedback2: React.FC = () => {
	const X = 140, S = 38;
	const R: PR = {x0: 560, x1: 1500, y: 570};
	return (
		<Overlay>
			<Shrink k={0.6}>
				<Question2 t={[-100, -100, -100]} marks={[{phrase: '3.17;', at: K15.lowest + 10}, {phrase: '3.74;', at: K15.lowest + 16}, {phrase: '9.21.', at: K15.lowest + 22}, {phrase: 'F⁻, HCOO⁻ and CN⁻', at: K15.weakest + 10}, {phrase: 'Kw', at: K15.r16 - 40, color: TEAL}, {phrase: '1.0', at: K15.r16 - 36, color: TEAL}, {phrase: '10⁻¹⁴', occ: 2, at: K15.r16 - 32, color: TEAL}]} />
			</Shrink>
			<DimG at={K15.weakest} to={0.3}>
				<PKRuler R={R} at={K15.lowest} pkaAt={K15.lowest} kaLabels={false} every={2} size={20} marks={[
					{p: 3.17, at: K15.lowest + 16, name: 'HF', side: 'l', pLabel: {t: '3.17', at: K15.lowest + 16}},
					{p: 3.74, at: K15.lowest + 22, name: 'HCOOH', side: 'r', pLabel: {t: '3.74', at: K15.lowest + 22}, color: '#a97a14'},
					{p: 9.21, at: K15.lowest + 28, name: 'HCN', side: 'r', pLabel: {t: '9.21', at: K15.lowest + 28}, color: '#8f6bb8'},
				]} />
			</DimG>
			<WLine x={X} y={720} size={S} dim={K15.hcn} items={P('(a) HF > HCOOH > HCN', K15.hf)} />
			<WLine x={X} y={785} size={S} dim={K15.hcn} items={P('(b) strongest base: CN^{-} (weakest acid)', K15.cyanide)} />
			<WLine x={X} y={850} size={S} dim={K15.r16} items={P('Ka(HCN) = 10^{−9.21}', K15.hcn + 10, '= 6.2 × 10^{−10}', K15.r62)} />
			<WLine x={X} y={915} size={S} items={P('Kb(CN^{-}) = 1.0 × 10^{−14} ÷ 6.2 × 10^{−10}', K15.r16 - 50, {t: '= 1.6 × 10^{−5}', color: BASE_INK}, K15.r16)} />
			<AChip x={1250} y={720} text="Kb(CN^{-}) = 1.6 × 10^{−5}" size={42} color={BASE_INK} hand={false} at={K15.r16 + 30} />
			<MistakeX x={1250} y={840} text="HCN strongest (9.21 is biggest)" at={K15.putting} cross={K15.back + 4} note="lowest pKa wins" size={30} />
		</Overlay>
	);
};

// ---------- 16. Decision rule and handoff ----------
const DR = 'decision-rule';
const K16 = cues(sc(DR), {so: 'So to compare', never: 'never pH alone', get: 'Get K a', convert: 'convert with p', remember: 'remember that lower', conj: 'For a conjugate', next: 'Next'});
export const SceneDecision: React.FC = () => (
	<>
		<Heading text="To compare acid strength" at={4} size={58} />
		<Overlay>
			<RuleCard x={96} y={210} w={1728} at={K16.so} lh={88} lines={[
				{t: '1  Strength: compare Ka or pKa (pH only at equal c).', at: K16.so + 10, lit: [K16.so + 10, K16.get], size: 38, hand: false},
				{t: '2  Ka from pH: [H_3O^{+}] = 10^{−pH} = [A^{-}]; [HA] = c − [H_3O^{+}]; Ka = [H_3O^{+}]^{2} / [HA].', at: K16.get, lit: [K16.get, K16.convert], size: 36, hand: false},
				{t: '3  pKa = −log Ka; lower pKa, stronger acid.', at: K16.convert, lit: [K16.convert, K16.conj], size: 38, hand: false},
				{t: '4  Conjugate pair: Kb = Kw ÷ Ka.', at: K16.conj, lit: [K16.conj, K16.next], size: 38, hand: false},
			]} />
			<AChip x={96} y={680} text="Next: weak acid pH and Ka method practice" size={40} color={TEAL} hand={false} at={K16.next} />
			<PlateAt p={PHMETER} x={1480} y={700} h={300} at={K16.next + 6} />
			{void K16.never}{void K16.remember}
		</Overlay>
	</>
);

// ---------- 17. Key notes ----------
const NOTES = [
	'Ka measures an acid\'s tendency to ionise; its value does not depend on concentration (at a given temperature). pH depends on Ka and c, so compare acid strength with Ka or pKa.',
	'Ka from pH: [H_3O^{+}] = 10^{−pH} = [A^{-}]; [HA] = c − [H_3O^{+}]; Ka = [H_3O^{+}]^{2} / (c − [H_3O^{+}]). Example: 0.0500 mol/L HX, pH 2.78: Ka = 5.7 × 10^{−5}.',
	'pKa = −log Ka and Ka = 10^{−pKa}. Lower pKa = bigger Ka = stronger acid; one pKa unit is a factor of 10 in Ka.',
	'Strong acid: ionises completely, [H_3O^{+}] = c, no measurable Ka in water. Weak acid: [H_3O^{+}] ≪ c, Ka much less than 1, pKa positive.',
	'Conjugate pair: Ka × Kb = Kw = 1.0 × 10^{−14} (25 °C). The stronger the acid, the weaker its conjugate base.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={30} aidTop={760} aids={['pKa is like golf: the lowest score wins.', 'Conjugate pair: Ka × Kb = Kw.']} tag="compare acids at the same temperature; Ka × Kb = Kw for a conjugate pair only" />
);
