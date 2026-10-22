// M6 P05 scenes 14 to 19: two worded attempts (the full question on screen through the countdown); brief feedback with
// the question's phrases underlined as they are used and one crossed mistake each; the decision rule and handoff; key
// notes.
import React from 'react';
import {cues} from '../../cues';
import {Heading, hold, sc} from './common';
import {BURETTE} from './assets';
import {
	ACIDC, AChip, AMBER_INK, BUF_TAB, BUFTINT, ETHC, Fade, FillBeaker, GREEN, INK, INK_SOFT, KeyNotesBoard, MistakeX, Note, Overlay, P, PHChip, PicH, PauseHold, QBox, QText, RBottle,
	RatioBar, RuleCard, ShrinkTo, Sx, TEAL, TabBeaker, WATERC, WLine, beakerW, qCheck,
} from './parts';
import type {QBlock, QMark} from './parts';

// ---------- 14/15. Question 1 ----------
const A1 = 'attempt-1';
const K14 = cues(sc(A1), {turn: 'Your turn', student: 'A student adds', then: 'Then she adds', concludes: 'She concludes', evaluate: 'Evaluate her', pause: 'Pause here'});
const Q1 = (t: number[], marks: QMark[] = []) => qCheck([
	{text: 'A student tests whether a solution is a buffer.', at: t[0]},
	{text: 'She adds 1.00 mL of 0.100 mol/L hydrochloric acid to 20.0 mL of the solution, and the pH changes from 4.68 to 4.59.', at: t[0] + 10},
	{text: 'She then adds 1.00 mL of 0.100 mol/L sodium hydroxide to the same beaker, and the pH returns to 4.68.', at: t[1]},
	{text: 'She concludes that the solution is a buffer that resists both acid and base.', at: t[2]},
	{text: 'Evaluate her method.', at: t[3], para: true},
] as QBlock[], marks);
const M1 = ['20.0 mL of the solution', 'to the same beaker', 'returns to 4.68'];
qCheck(Q1([0, 0, 0, 0]).blocks, M1.map(phrase => ({phrase, at: 0})));
const QX = 130, QW = 1040;
const Question1: React.FC<{t: number[]; marks?: QMark[]}> = ({t, marks}) => (
	<>
		<QBox x={100} y={200} w={QW + 60} h={430} at={t[0] - 6} />
		<QText q={Q1(t, marks)} x={QX} y={265} w={QW} size={36} card={false} />
	</>
);
export const SceneAttempt1: React.FC = () => (
	<Overlay>
		<Sx x={96} y={150} text="Your turn" size={58} color={INK} hand at={K14.turn} />
		<Question1 t={[K14.student, K14.then, K14.concludes, K14.evaluate]} />
		<TabBeaker x={1420} y={420} h={200} label="20.0 mL solution" tab={INK_SOFT} at={K14.student + 10} tint={BUFTINT} size={24} />
		<PHChip x={1420 + beakerW(200) / 2} y={320} text="4.68" at={K14.student + 20} out={K14.student + 200} size={34} anchor="middle" />
		<PHChip x={1420 + beakerW(200) / 2} y={320} text="4.59" at={K14.student + 200} out={K14.then + 120} size={34} anchor="middle" />
		<PHChip x={1420 + beakerW(200) / 2} y={320} text="4.68" at={K14.then + 120} size={34} anchor="middle" />
		<PauseHold h={hold(A1)} at={K14.pause} x={130} y={800} cx={900} cy={780} />
	</Overlay>
);

const F1 = 'feedback-1';
const K15 = cues(sc(F1), {small: 'small drop', flaws: 'two flaws', control: 'no control', water: 'water', unusual: 'unusually small', same: 'same beaker', neutralised: 'neutralised', nothing: 'tells you nothing', fresh: 'fresh portion'});
export const SceneFeedback1: React.FC = () => (
	<Overlay>
		<ShrinkTo k={0.62} cx={100} cy={180}>
			<Question1 t={[-100, -100, -100, -100]} marks={[{phrase: M1[0], at: K15.control}, {phrase: M1[1], at: K15.same}, {phrase: M1[2], at: K15.same + 10}]} />
		</ShrinkTo>
		<AChip x={900} y={200} text="fits a buffer, but two flaws" size={36} color={AMBER_INK} hand={false} at={K15.small + 10} />
		<TabBeaker x={1020} y={330} h={170} label="buffer?" tab={BUF_TAB} at={K15.control - 10} tint={BUFTINT} size={22} />
		<g opacity={0.75}><TabBeaker x={1260} y={330} h={170} label="20.0 mL water" tab="#9a948a" at={K15.control + 8} tint={WATERC} size={22} /></g>
		<rect x={1250} y={320} width={beakerW(170) + 20} height={190} rx={14} fill="none" stroke={GREEN} strokeWidth={3} strokeDasharray="10 8" opacity={0.8} />
		<Note x={1020} y={590} text="control: same dose, 20.0 mL water" size={34} color={GREEN} at={K15.control + 14} />
		<AChip x={QX} y={660} text="fresh portion for the base test" size={36} color={TEAL} hand={false} at={K15.fresh - 6} />
		<MistakeX x={QX} y={780} text="the pH came back, so it resists base too" at={K15.nothing - 30} cross={K15.nothing + 8} note="the base just undid the acid" size={32} />
		{void K15.flaws}{void K15.water}{void K15.unusual}{void K15.neutralised}
	</Overlay>
);

// ---------- 16/17. Question 2 ----------
const A2 = 'attempt-2';
const K16 = cues(sc(A2), {more: 'One more', student: 'A student mixes', calc: 'Calculate the', ka: 'K a is', pause: 'Pause here'});
const Q2 = (t: number[], marks: QMark[] = []) => qCheck([
	{text: 'A student mixes 30.0 mL of 0.100 mol/L ethanoic acid with 10.0 mL of 0.100 mol/L sodium ethanoate at 25 °C.', at: t[0]},
	{text: 'Calculate the expected pH of the mixture.', at: t[1]},
	{text: 'Ka(CH₃COOH) = 1.8 × 10⁻⁵', at: t[2], para: true},
] as QBlock[], marks);
const M2 = ['30.0 mL of 0.100 mol/L', '10.0 mL of 0.100 mol/L', 'Ka(CH₃COOH)'];
qCheck(Q2([0, 0, 0]).blocks, M2.map(phrase => ({phrase, at: 0})));
const Question2: React.FC<{t: number[]; marks?: QMark[]}> = ({t, marks}) => (
	<>
		<QBox x={100} y={200} w={QW + 60} h={330} at={t[0] - 6} />
		<QText q={Q2(t, marks)} x={QX} y={265} w={QW} size={36} card={false} />
	</>
);
export const SceneAttempt2: React.FC = () => (
	<Overlay>
		<Sx x={96} y={150} text="One more" size={58} color={INK} hand at={K16.more} />
		<Question2 t={[K16.student, K16.calc, K16.ka]} />
		<RBottle x={1330} y={260} h={300} lines={['ethanoic acid', '0.100 mol/L']} color={ACIDC} at={K16.student + 20} size={16} />
		<RBottle x={1600} y={260} h={300} lines={['sodium ethanoate', '0.100 mol/L']} color={ETHC} at={K16.student + 40} size={16} />
		<PauseHold h={hold(A2)} at={K16.pause} x={130} y={720} cx={900} cy={700} />
	</Overlay>
);

const F2 = 'feedback-2';
const K17 = cues(sc(F2), {moles: 'moles first', eth: 'Ethanoic acid', z300: 'zero point zero zero three zero zero', ethan: 'Ethanoate', z100: 'zero point zero zero one zero zero', ratio: 'ratio is three', hyd: 'Hydronium is', f54: 'five point four', f427: 'four point two seven', not: "It's not", equal: 'equal amounts'});
export const SceneFeedback2: React.FC = () => {
	const X = 96, S = 36;
	return (
		<Overlay>
			<ShrinkTo k={0.62} cx={100} cy={180}>
				<Question2 t={[-100, -100, -100]} marks={[{phrase: M2[0], at: K17.eth}, {phrase: M2[1], at: K17.ethan}, {phrase: M2[2], at: K17.hyd + 10, color: TEAL}]} />
			</ShrinkTo>
			<WLine x={X} y={520} size={S} dim={K17.f54} items={P('n(CH_3COOH) = 0.100 × 0.0300', K17.eth + 6, '= 3.00 × 10^{−3} mol', K17.z300)} />
			<WLine x={X} y={585} size={S} dim={K17.f54} items={P('n(CH_3COO^{−}) = 0.100 × 0.0100', K17.ethan + 6, '= 1.00 × 10^{−3} mol', K17.z100)} />
			<WLine x={X} y={660} size={S} dim={K17.f427} items={P('[H_3O^{+}] = 1.8 × 10^{−5} × 3.00', K17.hyd + 10, {t: '= 5.4 × 10^{−5} mol/L', color: INK}, K17.f54)} />
			<WLine x={X} y={740} size={42} items={P('pH = −log(5.4 × 10^{−5})', K17.f427 - 24, {t: '= 4.27', color: TEAL}, K17.f427)} />
			<RatioBar x={1420} base={640} k={80000} nA={() => 0.003} nB={() => 0.001} at={K17.ratio - 6} labA="CH_3COOH" labB="CH_3COO^{−}" size={26} mid={{t: 'ratio 3 : 1', at: K17.ratio, color: TEAL}} />
			<AChip x={X} y={790} text="expected pH 4.27" size={38} color={TEAL} hand={false} at={K17.f427 + 16} />
			<MistakeX x={X} y={890} text="pH = pKa = 4.74" at={K17.not - 6} cross={K17.equal - 6} note="only when the moles are equal" size={34} />
			{void K17.moles}
		</Overlay>
	);
};

// ---------- 18. Decision rule and handoff ----------
const DR = 'decision-rule';
const K18 = cues(sc(DR), {mix: 'mix a weak', predict: 'predict its', split: 'split it', compare: 'compare the changes', check: 'Check dilution', next: 'Next'});
export const SceneDecision: React.FC = () => (
	<>
		<Heading text="Preparing and testing a buffer" at={4} size={58} />
		<Overlay>
			<RuleCard x={96} y={210} w={1728} at={K18.mix - 10} lh={86} lines={[
				{t: '1  Weak acid + conjugate base, measured with pipettes; make enough.', at: K18.mix, lit: [K18.mix, K18.predict], size: 36, hand: false},
				{t: '2  Predict: [H_3O^{+}] = Ka × n(HA) ÷ n(A^{−}).', at: K18.predict, lit: [K18.predict, K18.split], size: 36, hand: false},
				{t: '3  Split into fresh portions; water control; same dose.', at: K18.split, lit: [K18.split, K18.compare], size: 36, hand: false},
				{t: '4  Compare changes: acid, base, dilution, capacity.', at: K18.compare, lit: [K18.compare, K18.next], size: 36, hand: false},
			]} />
			<AChip x={96} y={720} text="Next: titration to find an unknown concentration" size={38} color={TEAL} hand={false} at={K18.next} />
			<Fade at={K18.next + 8}><PicH p={BURETTE} x={1500} y={640} h={400} /></Fade>
			{void K18.check}
		</Overlay>
	</>
);

// ---------- 19. Key notes ----------
const NOTES = [
	'Prepare: 50.0 mL of 0.100 mol/L ethanoic acid + 50.0 mL of 0.100 mol/L sodium ethanoate (pipettes): 0.00500 mol of each; equal moles, so predicted pH = pKa = 4.74. Measured 4.68: small offsets are normal. Make enough for every test (about 70 mL per set).',
	'Test: 20.0 mL buffer portions and 20.0 mL water controls; add 1.00 mL of 0.100 mol/L HCl or NaOH; acid and base in separate fresh portions.',
	'Results: buffer −0.09 (acid), +0.09 (base); water −3.58, +5.70. Buffer resists, doesn\'t prevent. Ratio after acid 0.00110 ÷ 0.000900: predicted 4.66.',
	'Dilution (÷ 10): ratio unchanged, pH 4.68 → 4.72. Capacity: the diluted buffer\'s ethanoate is used up by the same dose, pH → 3.41.',
	'Validity: water control, same dose and volume, fresh portions. Reliability: fresh batches agree. Accuracy: calibrated meter, pipettes; comparing changes cancels a constant offset.',
	'Risk: dilute solutions below limits (glasses still); 0.100 mol/L NaOH just below the irritant limit, so treat a splash as harmful; glacial ethanoic acid flammable and corrosive, teacher only; pipette filler.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={30} aidTop={850} aids={['Split, dose, compare.']} tag="fresh portion each test; same volume and dose; water control" />
);
void FillBeaker;
