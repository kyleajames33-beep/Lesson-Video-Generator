// M6 P04 scenes 14 to 20: the memory aid; two worded attempts (the full question on screen through the countdown);
// brief feedback with the question's phrases underlined as they are used and one crossed mistake each; the decision
// rule and handoff; key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, hold, sc} from './common';
import {FLASK_G, PIPETTE_G} from './assets';
import {
	AChip, AMBER_INK, BASE, BASE_INK, ChangeBar, Dial2, DimG, EqLine, FlaskFill, INK, INK_SOFT, KeyNotesBoard, LabelBeaker, MistakeX, Note, Overlay, PHChip, PROTON, PROTON_INK, Padlock,
	PauseHold, PipettePlate, QBox, QText, Ring, RuleCard, ShrinkTo, Sx, TEAL, VAxis, clamp01, eSpan, eq, flaskPt, lerp, qCheck, smooth, vaY,
} from './parts';
import type {QBlock, QMark, VA} from './parts';

// ---------- 14. Memory aid ----------
const S14 = 'memory-aid';
const K14 = cues(sc(S14), {rule: 'rule to remember', match: 'match then compare', dilute: 'when you dilute', strong: 'strong moves', weak: 'weak moves'});
export const SceneAid: React.FC = () => {
	const wob = (fr: number) => 0.5 + 0.36 * Math.sin(fr / 11);
	const A: VA = {x: 1500, top: 560, bottom: 840, lo: 0, hi: 2};
	return (
		<Overlay>
			<Sx x={96} y={160} text="The rule to remember" size={40} color={INK_SOFT} hand at={K14.rule} />
			<Sx x={110} y={330} text="Match, then compare." size={96} color={TEAL} hand at={K14.match} />
			<Dial2 x={1560} y={300} r={60} label="concentration" val={() => 0.62} at={K14.match + 6} />
			<Padlock x={1640} y={250} s={1.2} at={K14.match + 14} />
			<Sx x={110} y={520} text="Dilute ten times:" size={72} color={INK} hand at={K14.dilute} />
			<Sx x={110} y={640} text="strong moves about one," size={72} color={TEAL} hand at={K14.strong} />
			<Sx x={110} y={760} text="weak moves about half." size={72} color={AMBER_INK} hand at={K14.weak} />
			<ChangeBar x={A.x} y1={vaY(A, 0.1)} y2={vaY(A, 1.06)} at={K14.strong + 6} solid color={PROTON} ink={PROTON_INK} />
			<ChangeBar x={A.x + 130} y1={vaY(A, 0.1)} y2={vaY(A, 0.6)} at={K14.weak + 6} solid={false} color={PROTON} ink={AMBER_INK} />
			<Sx x={A.x} y={A.bottom + 50} text="strong" size={28} color={INK} anchor="middle" weight={700} at={K14.strong + 6} />
			<Sx x={A.x + 130} y={A.bottom + 50} text="weak" size={28} color={INK} anchor="middle" weight={700} at={K14.weak + 6} />
			<Sx x={110} y={920} text="exact ÷ 10 with volumetric glassware; weak acid mostly un-ionised" size={32} color={INK_SOFT} weight={600} at={K14.weak + 24} />
			{void wob}
		</Overlay>
	);
};

// ---------- 15/16. Question 1 ----------
const A1 = 'attempt-1';
const K15 = cues(sc(A1), {turn: 'Your turn', student: 'A student measures', nitric: 'nitric acid', concludes: 'She concludes', evaluate: 'Evaluate her', pause: 'Pause here'});
const Q1 = (t: number[], marks: QMark[] = []) => qCheck([
	{text: 'A student wants to compare the strengths of methanoic acid (HCOOH) and nitric acid (HNO₃).', at: t[0]},
	{text: 'Using a calibrated pH meter at 25 °C, she measures the pH of 0.50 mol/L methanoic acid as 2.03 and the pH of 0.0020 mol/L nitric acid as 2.70.', at: t[1]},
	{text: 'She concludes that methanoic acid is the stronger acid.', at: t[2]},
	{text: 'Evaluate her conclusion and describe how she should change her method.', at: t[3], para: true},
] as QBlock[], marks);
const M1 = ['0.50 mol/L', '0.0020 mol/L', 'calibrated pH meter at 25 °C'];
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
		<Sx x={96} y={150} text="Your turn" size={58} color={INK} hand at={K15.turn} />
		<Question1 t={[K15.student, K15.student + 40, K15.concludes, K15.evaluate]} />
		{[{x: 1330, t1: '0.50 mol/L', t2: 'HCOOH', r: '2.03'}, {x: 1600, t1: '0.0020 mol/L', t2: 'HNO_3', r: '2.70'}].map((b, i) => (
			<g key={i}>
				<LabelBeaker x={b.x} y={420} h={190} at={K15.student + 40 + i * 10} lines={[{t: b.t1, at: K15.student + 44 + i * 10}, {t: b.t2, at: K15.student + 48 + i * 10}]} size={24} />
				<PHChip x={b.x + 82} y={330} text={b.r} at={(i === 0 ? K15.student + 60 : K15.nitric + 20)} size={32} anchor="middle" drop />
			</g>
		))}
		<PauseHold h={hold(A1)} at={K15.pause} x={130} y={820} cx={900} cy={800} />
	</Overlay>
);

const F1 = 'feedback-1';
const K16 = cues(sc(F1), {valid: "isn't valid", conc: 'The concentrations', two50: 'two hundred and fifty', same: 'same concentration', meter: 'same meter', nitric: 'Then nitric', lower: 'read lower', lowerpH: 'Lower pH so', trap: 'trap'});
export const SceneFeedback1: React.FC = () => {
	const f = useCurrentFrame();
	const wob = (ph: number) => (fr: number) => 0.5 + 0.36 * Math.sin(fr / 11 + ph);
	const lockV = (fr: number) => (fr < K16.same ? wob(1.3)(fr) : lerp(wob(1.3)(K16.same), 0.62, smooth(clamp01((fr - K16.same) / 10))));
	const DX = [1230, 1470], DY = 450;
	return (
		<Overlay>
			<ShrinkTo k={0.62} cx={100} cy={180}>
				<Question1 t={[-100, -100, -100, -100]} marks={[{phrase: M1[0], at: K16.conc}, {phrase: M1[1], at: K16.conc + 8}, {phrase: M1[2], at: K16.same, color: TEAL}]} />
			</ShrinkTo>
			<AChip x={900} y={200} text="not valid" size={40} color={AMBER_INK} hand={false} at={K16.valid} />
			<DimG at={K16.same} to={0.38}>
				<AChip x={900} y={300} text="0.50 ÷ 0.0020 = 250 times" size={36} color={INK} hand={false} at={K16.two50} />
				<Note x={(DX[0] + DX[1]) / 2} y={DY + 110} text="two things mixed" size={34} color={INK_SOFT} anchor="middle" at={K16.conc + 20} />
			</DimG>
			<Dial2 x={DX[0]} y={DY} r={48} label="strength" val={wob(0)} at={K16.conc + 10} size={28} />
			<DimG at={K16.same + 16} to={0.5}><Dial2 x={DX[1]} y={DY} r={48} label="concentration" val={lockV} at={K16.conc + 14} size={28} /></DimG>
			<Padlock x={DX[1] + 62} y={DY - 40} s={1} at={K16.same} />
			<AChip x={QX} y={620} text="match: both 0.100 mol/L; nitric acid (strong) reads lower" size={34} color={TEAL} hand={false} at={K16.nitric} />
			<MistakeX x={QX} y={740} text="lower pH, so stronger acid" at={K16.lowerpH - 6} cross={K16.trap} note="only at the same concentration" size={34} />
			{void K16.meter}{void K16.lower}{void f}
		</Overlay>
	);
};

// ---------- 17/18. Question 2 ----------
const A2 = 'attempt-2';
const K17 = cues(sc(A2), {more: 'One more', acid: 'An acid of', dilutes: 'She dilutes', becomes: 'pH becomes', strong: 'strong or weak', justify: 'Justify', pause: 'Pause here'});
const Q2 = (t: number[], marks: QMark[] = []) => qCheck([
	{text: 'A student has a solution of a monoprotic acid of unknown concentration. Its pH is 2.40.', at: t[0]},
	{text: 'She uses a volumetric pipette to transfer 10.00 mL of it into a 100.0 mL volumetric flask and makes it up to the mark with distilled water.', at: t[1]},
	{text: 'The diluted solution has a pH of 2.90.', at: t[2]},
	{text: 'Determine whether the acid is strong or weak. Justify your answer.', at: t[3], para: true},
] as QBlock[], marks);
const M2 = ['10.00 mL', '100.0 mL', 'pH is 2.40', 'pH of 2.90', 'unknown concentration'];
qCheck(Q2([0, 0, 0, 0]).blocks, M2.map(phrase => ({phrase, at: 0, occ: phrase === '100.0 mL' ? 2 : 1})));
const Question2: React.FC<{t: number[]; marks?: QMark[]}> = ({t, marks}) => (
	<>
		<QBox x={100} y={200} w={QW + 60} h={430} at={t[0] - 6} />
		<QText q={Q2(t, marks)} x={QX} y={265} w={QW} size={36} card={false} />
	</>
);
export const SceneAttempt2: React.FC = () => {
	const FX = 1450, FY = 360, FH = 420;
	const neck = flaskPt(FX, FY, FH, 1024, FLASK_G.cropTop);
	return (
		<Overlay>
			<Sx x={96} y={150} text="One more" size={58} color={INK} hand at={K17.more} />
			<Question2 t={[K17.acid, K17.dilutes, K17.becomes, K17.strong]} />
			<g opacity={1}>
				<FlaskFill x={FX} y={FY} h={FH} level={() => FLASK_G.ring} o={1} />
				<PipettePlate tipX={neck[0] - 150} tipY={neck[1] + 260} h={320} rot={PIPETTE_G.tilt} />
			</g>
			<Sx x={FX + 85} y={FY + FH + 46} text="10.00 mL → 100.0 mL" size={28} color={INK_SOFT} anchor="middle" weight={700} at={K17.dilutes + 20} />
			<PauseHold h={hold(A2)} at={K17.pause} x={130} y={820} cx={900} cy={800} />
		</Overlay>
	);
};

const F2 = 'feedback-2';
const K18 = cues(sc(F2), {weak: 'weak', tenfold: 'tenfold dilution', one: 'one unit', three: 'three point four', z050: 'zero point five zero', more: 'more molecules', partly: 'partly ionised', low: 'A low starting', nothing: 'nothing about'});
export const SceneFeedback2: React.FC = () => {
	const A: VA = {x: 1080, top: 400, bottom: 840, lo: 2.2, hi: 3.6};
	return (
		<Overlay>
			<ShrinkTo k={0.62} cx={100} cy={180}>
				<Question2 t={[-100, -100, -100, -100]} marks={[
					{phrase: M2[0], at: K18.tenfold}, {phrase: M2[1], at: K18.tenfold + 6, occ: 2}, {phrase: M2[2], at: K18.z050, color: TEAL}, {phrase: M2[3], at: K18.z050 + 8, color: TEAL}, {phrase: M2[4], at: K18.nothing},
				]} />
			</ShrinkTo>
			<AChip x={900} y={200} text="weak" size={44} color={AMBER_INK} hand={false} at={K18.weak} />
			<Sx x={1110} y={250} text="10.00 mL → 100.0 mL: ÷ 10" size={36} color={INK} weight={700} at={K18.tenfold + 8} />
			<VAxis a={A} ticks={[2.4, 2.9, 3.4]} at={K18.one - 20} />
			<g opacity={0.45}>
				<ChangeBar x={A.x + 120} y1={vaY(A, 2.4)} y2={vaY(A, 3.4)} at={K18.one} solid color={PROTON} ink={PROTON_INK} />
			</g>
			<Sx x={A.x + 170} y={vaY(A, 3.4) + 10} text="if strong: 3.40" size={30} color={INK_SOFT} weight={700} at={K18.three} />
			<ChangeBar x={A.x + 330} y1={vaY(A, 2.4)} y2={vaY(A, 2.9)} at={K18.z050} solid={false} color={PROTON} ink={AMBER_INK} />
			<Sx x={A.x + 380} y={vaY(A, 2.9) + 10} text="+0.50" size={36} color={AMBER_INK} weight={800} at={K18.z050 + 10} />
			<Note x={A.x - 120} y={930} text="more molecules ionised on dilution: partial" size={34} color={TEAL} at={K18.more} />
			<MistakeX x={QX} y={640} text="pH 2.40 is low, so it's strong" at={K18.low - 6} cross={K18.nothing} note="unknown concentration" size={34} />
			{void K18.partly}{void BASE}{void BASE_INK}
		</Overlay>
	);
};

// ---------- 19. Decision rule and handoff ----------
const DR = 'decision-rule';
const K19 = cues(sc(DR), {so: 'to use pH', match: 'match the concentrations', dilute: 'or dilute', strong: 'Strong moves', but: 'But why', chloride: 'chloride', ethanoate: 'ethanoate', next: 'Next'});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const S = 30, X = 1000;
	const e1 = eq(['HCl(aq)', '+', 'H_2O(l)', '->', 'H_3O^{+}(aq)', '+', 'Cl^{-}(aq)'], K19.but);
	const e2 = eq(['CH_3COOH(aq)', '+', 'H_2O(l)', '<=>', 'H_3O^{+}(aq)', '+', 'CH_3COO^{-}(aq)'], K19.but + 6);
	const Y1 = 830, Y2 = 900;
	const s1 = eSpan(e1, 6, S, X), s2 = eSpan(e2, 6, S, X);
	return (
		<>
			<Heading text="Using pH to show strength" at={4} size={58} />
			<Overlay>
				<RuleCard x={96} y={210} w={1728} at={K19.match - 10} lh={92} lines={[
					{t: '1  Same concentration, same routine: lower pH = stronger acid (higher = stronger base).', at: K19.match, lit: [K19.match, K19.dilute], size: 34, hand: false},
					{t: '2  Dilute exactly ÷ 10: strong moves about 1 unit; weak moves less (about 0.5 here).', at: K19.dilute, lit: [K19.dilute, K19.strong + 70], size: 34, hand: false},
					{t: '3  Never judge strength from one pH at an unknown concentration.', at: K19.strong + 70, lit: [K19.strong + 70, K19.but], size: 34, hand: false},
				]} />
				<AChip x={96} y={680} text="Next: conjugate pairs and amphiprotic species" size={38} color={TEAL} hand={false} at={K19.next} />
				<g opacity={prog(f, K19.but, 12)}>
					<EqLine items={e1} x={X} y={Y1} size={S} />
					<EqLine items={e2} x={X} y={Y2} size={S} />
				</g>
				<Ring cx={s1.cx} cy={Y1 - S * 0.35} rx={s1.x2 - s1.cx + 14} ry={S * 0.85} at={K19.chloride} color={BASE_INK} seed={3} />
				<Sx x={s1.x2 + 30} y={Y1} text="?" size={44} color={BASE_INK} hand at={K19.chloride + 8} />
				<Ring cx={s2.cx} cy={Y2 - S * 0.35} rx={s2.x2 - s2.cx + 14} ry={S * 0.85} at={K19.ethanoate} color={BASE_INK} seed={5} />
				<Sx x={s2.x2 + 30} y={Y2} text="?" size={44} color={BASE_INK} hand at={K19.ethanoate + 8} />
				{void K19.so}
			</Overlay>
		</>
	);
};

// ---------- 20. Key notes ----------
const NOTES = [
	'Test 1, matched concentration: 0.100 mol/L of each, same calibrated meter, routine and temperature. Same concentration, so the gap is strength: HCl ionises completely, ethanoic acid only partly.',
	'Unmatched concentrations prove nothing: a concentrated weak acid can read lower than a dilute strong acid.',
	'Test 2, exact tenfold dilution (10.00 mL pipette to a 100.0 mL flask). Strong: pH moves about 1 (a tenth of the H_3O^{+}). Weak: about 0.5 for ethanoic acid (a bigger fraction ionises on dilution).',
	'Validity: matched concentration; the dilution test checks without trusting labels. Reliability: repeats within 0.03; diluted values match P03. Accuracy: readings near 1 and 13 lie outside the 4 to 10 calibration, but the gaps are far larger.',
	'Risk: 0.100 mol/L NaOH is just below the irritant limit, so treat a splash as harmful (glasses); other solutions below limits (glasses still); concentrated stocks corrosive, teacher only; pipette filler, never by mouth.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={31} aidTop={800} aids={['Match, then compare.', 'Dilute ten times: strong moves about one, weak moves about half.']} tag="exact ÷ 10; weak acid mostly un-ionised" />
);
