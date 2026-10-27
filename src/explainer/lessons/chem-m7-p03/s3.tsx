// M7 P03 scenes 14 to 19: attempt 1 (ethanol molar enthalpy from raw data), brief feedback (water in q, fuel in n;
// "fuel's mass in q" crossed), attempt 2 (uncovered copper can, no shield), brief feedback (heat loss; shield and lid;
// "repeat more times" crossed), the decision rule and handoff, and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {ChainRow, KeyNotesBoard, Overlay, PauseHold, Sx, TaskLine} from '../chem-m6-p02/parts';
import {AnswerChip, Crossed, QCardX} from '../chem-m7-c01/molecules';
import {dimAt, vis} from '../chem-m7-c04a/parts';
import {SET, hold, sc} from './common';
import {Escape, GREENC, HEAT, INK, INK_SOFT, NAVY, NBLUE, SetP, TEAL} from './parts';
import type {SetPos} from './parts';

const SY = 70;

// ---------- 14. Attempt 1 ----------
const Q1 = ['A spirit burner containing ethanol (M = 46.07 g mol⁻¹) is used to heat', '200.0 g of water from 20.3 °C to 38.9 °C. The mass of the spirit burner decreases', 'from 158.42 g to 157.36 g. The specific heat capacity of water is 4.18 J g⁻¹ °C⁻¹.', 'Calculate the molar enthalpy of combustion of ethanol.'];
const K14 = cues(sc('attempt-1'), {turn: 'Your turn', an: 'An ethanol', calc: 'Calculate the', pause: 'Pause here'});
export const SceneAttempt1: React.FC = () => (
	<Overlay>
		<Sx x={96} y={130} text="Your turn" size={56} color={INK} hand at={K14.turn} />
		<QCardX lines={Q1} at={K14.an} y={200} size={38} />
		<PauseHold h={hold('attempt-1')} at={K14.pause} x={140} y={860} cx={1650} cy={850} />
		{void K14.calc}
	</Overlay>
);

// ---------- 15. Feedback 1 ----------
const K15 = cues(sc('feedback-1'), {dt: 'eighteen point six', q: 'q uses', fif: 'fifteen thousand', lost: 'burner lost', n: 'zero point zero two', dh: 'minus six hundred', slip: 'classic slip', fuel: 'fuel in n'});
export const SceneFeedback1: React.FC = () => {
	const f = useCurrentFrame();
	const x = 160, s = 34;
	return (
		<Overlay>
			<QCardX lines={Q1} at={-100} y={SY} size={26} under={[{line: 1, phrase: '20.3 °C to 38.9 °C', at: K15.dt}, {line: 1, phrase: '200.0 g of water', at: K15.q}, {line: 2, phrase: '4.18 J g⁻¹ °C⁻¹', at: K15.q + 8}, {line: 2, phrase: 'from 158.42 g to 157.36 g', at: K15.lost}, {line: 0, phrase: 'M = 46.07 g mol⁻¹', at: K15.n}]} />
			<g opacity={dimAt(f, K15.q, 0.4)}><Sx x={x} y={400} text="ΔT = 38.9 − 20.3 = 18.6 °C" size={s} color={INK} weight={700} at={K15.dt} /></g>
			<g opacity={dimAt(f, K15.lost, 0.4)}><Sx x={x} y={465} text="q = 200.0 × 4.18 × 18.6 = 15 549.6 J = 15.5496 kJ" size={s} color={HEAT} weight={700} at={K15.q + 10} /></g>
			<g opacity={dimAt(f, K15.dh, 0.5)}><Sx x={x} y={530} text="Δm = 1.06 g;  n = 1.06 ÷ 46.07 = 0.023008 mol" size={s} color={NBLUE} weight={700} at={K15.lost} /></g>
			<Sx x={x} y={595} text="ΔHc = −15.5496 ÷ 0.023008 = −675.8 → −676 kJ mol⁻¹ (3 s.f.)" size={s} color={INK} weight={700} at={K15.dh} />
			<AnswerChip x={x} y={630} text="ΔHc = −676 kJ mol⁻¹" at={K15.dh + 30} size={36} />
			<Crossed x={x} y={790} text="q = 1.06 × 4.18 × 18.6 = 82.4 J → −3.58 kJ mol⁻¹" at={K15.slip} cross={K15.fuel} note="m in q is the water: 200.0 g" size={32} />
			{void K15.fif}{void K15.n}
		</Overlay>
	);
};

// ---------- 16. Attempt 2 ----------
const Q2 = ['A student burns methanol and then butan-1-ol in a spirit burner beneath an uncovered', 'copper can, with no draught shield, heating the water by 20 °C each time. Her mean molar', 'enthalpies of combustion are −310 kJ mol⁻¹ for methanol and −1050 kJ mol⁻¹ for butan-1-ol.', 'The data values are −726 kJ mol⁻¹ and −2676 kJ mol⁻¹. Each was repeated three times.', 'Explain why her values are less negative than the data values, and suggest one', 'improvement that would reduce this difference.'];
const K16 = cues(sc('attempt-2'), {last: 'Last one', a: 'A student', explain: 'Explain why', pause: 'Pause here'});
export const SceneAttempt2: React.FC = () => (
	<Overlay>
		<Sx x={96} y={130} text="Last one" size={56} color={INK} hand at={K16.last} />
		<QCardX lines={Q2} at={K16.a} y={180} size={32} />
		<SetP P={{cx: 1240, top: 600, h: 330}} at={K16.a + 20} />
		<PauseHold h={hold('attempt-2')} at={K16.pause} x={140} y={860} cx={1650} cy={850} />
		{void K16.explain}
	</Overlay>
);

// ---------- 17. Feedback 2 ----------
const K17 = cues(sc('feedback-2'), {water: 'of the water', less: 'less negative', shield: 'draught shield', rep: 'Repeating', every: 'every run'});
export const SceneFeedback2: React.FC = () => {
	const S: SetPos = {cx: 300, top: 420, h: 460};
	return (
		<Overlay>
			<QCardX lines={Q2} at={-100} y={SY} size={24} under={[{line: 0, phrase: 'uncovered', at: K17.water}, {line: 1, phrase: 'copper can, with no draught shield', at: K17.water + 6}, {line: 2, phrase: '−310 kJ mol⁻¹', at: K17.less}, {line: 2, phrase: '−1050 kJ mol⁻¹', at: K17.less + 6}, {line: 3, phrase: 'Each was repeated three times', at: K17.rep}]} />
			<SetP P={S} to={SET.shield} swap={K17.shield} />
			<Escape P={S} at={K17.water} out={K17.shield + 10} />
			<ChainRow x={640} y={430} ws={[330, 130, 330]} h={100} gap={46} at={K17.less} size={28} cells={[{lines: ['heat lost to', 'air and can'], at: K17.less}, {lines: ['q'], at: K17.less + 12, dir: 'down', color: HEAT}, {lines: ['ΔH less', 'negative'], at: K17.less + 24}]} />
			<AnswerChip x={640} y={590} text="heat loss; shield + lid keep more heat in the water" at={K17.shield + 10} size={30} />
			<Crossed x={640} y={760} text="repeat more times" at={K17.rep} cross={K17.every} note="repeats: reliability, not accuracy" size={34} />
			{void GREENC}
		</Overlay>
	);
};

// ---------- 18. Decision rule and handoff ----------
const K18 = cues(sc('decision-rule'), {change: 'change only', water: "water's mass", trace: 'trace each', stop: 'stop heat', next: 'Next:'});
export const SceneRule: React.FC = () => {
	const f = useCurrentFrame();
	const lines = [
		{t: '1  Same water, can, flame distance, shield, lid, 20.0 °C rise.', at: K18.change},
		{t: '2  Water in q, fuel in n.', at: K18.water},
		{t: '3  Error → q or n → ΔH.', at: K18.trace},
		{t: '4  Fix the cause: shield, lid, close, cap.', at: K18.stop},
	];
	return (
		<Overlay>
			<TaskLine text="The plan" at={0} size={54} y={130} />
			{lines.map((l, i) => <g key={i} opacity={lines[i + 1] ? dimAt(f, lines[i + 1].at, 0.6) : 1}><Sx x={140} y={280 + i * 100} text={l.t} size={40} color={INK} weight={700} at={l.at} /></g>)}
			<g opacity={vis(f, K18.next)}>
				<rect x={400} y={760} width={1120} height={120} rx={20} fill="#dff2ef" stroke="#0d6b52" strokeWidth={3} />
				<Sx x={440} y={810} text="Next:" size={32} color="#0d6b52" hand at={-1000} />
				<Sx x={440} y={854} text="practical and investigation questions (exam skills)" size={34} color={INK} weight={700} at={-1000} />
				<Sx x={440} y={930} text="then: combustion enthalpy practice" size={26} color={INK_SOFT} weight={600} at={-1000} />
			</g>
			{void NAVY}{void TEAL}
		</Overlay>
	);
};

// ---------- 19. Key notes ----------
const NOTES = [
	'Set-up: spirit burner under a metal can of 200.0 g water, flame close; draught shield and lid; heatproof mat. Weigh burner with cap before and after (reweigh at once). Cap just before a 20 °C rise, the same for each alcohol; stir; ΔT = highest − starting temperature.',
	'Calculation: q = m(water) × c × ΔT; n = (mass of burner lost) ÷ M; ΔHc = −q ÷ n. Example (methanol): q = 16.72 kJ (kept unrounded), n = 1.40 ÷ 32.04 = 0.043695 mol, ΔHc = −383 kJ mol⁻¹ (3 s.f.).',
	'Results (means of 3 trials, kJ mol⁻¹): methanol −383, ethanol −688, propan-1-ol −985, butan-1-ol −1.20 × 10³. More negative with chain length; each about half the data value.',
	'Errors (source → q or n → ΔH): heat to can, clamp and air (q too small); incomplete combustion, soot (q too small); evaporation from the wick (n too big). Each makes ΔH less negative; not every error does (water recorded too high makes it more negative). Fixes: shield, lid, flame close, short wick and clean base, cap and reweigh at once. Never "human error".',
	'Validity: valid for ranking (one variable changed, similar losses); less valid as an absolute value. Reliability: trials within about 2%, gaps far bigger than the spread. Accuracy: about half the data values; improve by cutting heat loss, not by repeating. Risk: all four flammable (methanol, ethanol, propan-1-ol highly flammable); methanol toxic; propan-1-ol and butan-1-ol damage eyes; refill cold and away from flames; organic waste container.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={25} aidTop={850} aids={['Water in q, fuel in n.', 'Shield, lid, close, cap.']} tag="measuring and comparing the enthalpy of combustion of alcohols" />
);
