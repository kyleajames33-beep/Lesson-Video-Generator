// M6 P07 scenes 14 to 19: two worded attempts (the full question on screen through the countdown, nothing
// answer-bearing); brief feedback with the question's phrases underlined as they are used and one crossed mistake each;
// the decision rule and handoff; key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, hold, sc} from './common';
import {BEAKER, CLEANER, VINEGAR} from './assets';
import {
	AMB, BurCounter, ChainV, EqLine, Fade, INK, INK_SOFT, KeyNotesBoard, MistakeX, Note, Overlay, PauseHold, PicH, QBox, QText, Rise, RuleCard, ScaleBar, ShrinkTo, Sx, TEAL, TERRA, VIO,
	WLine, P, AChip, eq, fitSize, picW, qCheck, smooth,
} from './parts';
import type {QBlock, QMark} from './parts';

const QX = 130, QW = 1060;
const Tag: React.FC<{at: number}> = ({at}) => <Sx x={QX + QW + 30} y={150} text="HSC-style question, written for HSCScience" size={26} color={INK_SOFT} anchor="end" hand at={at} />;

// ---------- 14/15. Question 1 ----------
const A1 = 'attempt-1';
const K14 = cues(sc(A1), {turn: 'Your turn', cleaning: 'A cleaning', student: 'A student plans', use: 'Use the label', pause: 'Pause here'});
const Q1 = (t: number[], marks: QMark[] = []) => qCheck([
	{text: "A cleaning vinegar is labelled '6% acidity', meaning 6 g of ethanoic acid per 100 mL.", at: t[0]},
	{text: 'A student plans to titrate 25.00 mL aliquots of the undiluted cleaning vinegar with 0.09940 mol/L sodium hydroxide from a 50.00 mL burette.', at: t[1]},
	{text: 'M(CH₃COOH) = 60.05 g/mol.', at: t[1] + 20},
	{text: 'Use the label to estimate the expected titre, and explain how the student should change the plan.', at: t[2], para: true},
] as QBlock[], marks);
const M1 = ['6 g of ethanoic acid per 100 mL', '60.05 g/mol', '25.00 mL aliquots', '0.09940 mol/L', '50.00 mL burette'];
qCheck(Q1([0, 0, 0]).blocks, M1.map(phrase => ({phrase, at: 0})));
const Question1: React.FC<{t: number[]; marks?: QMark[]}> = ({t, marks}) => (
	<>
		<QBox x={100} y={200} w={QW + 60} h={370} at={t[0] - 6} />
		<QText q={Q1(t, marks)} x={QX} y={265} w={QW} size={36} card={false} />
	</>
);
export const SceneAttempt1: React.FC = () => (
	<Overlay>
		<Sx x={96} y={150} text="Your turn" size={58} color={INK} hand at={K14.turn} />
		<Tag at={K14.turn + 10} />
		<Question1 t={[K14.cleaning, K14.student, K14.use]} />
		<Fade at={K14.cleaning + 10}><PicH p={VINEGAR} x={1380} y={230} h={380} /></Fade>
		<Sx x={1380 + picW(VINEGAR, 380) / 2} y={660} text="cleaning vinegar:" size={30} color={INK} anchor="middle" weight={700} at={K14.cleaning + 20} />
		<Sx x={1380 + picW(VINEGAR, 380) / 2} y={700} text="6% acidity" size={30} color={INK_SOFT} anchor="middle" weight={700} at={K14.cleaning + 26} />
		<PauseHold h={hold(A1)} at={K14.pause} x={130} y={760} cx={1000} cy={740} />
	</Overlay>
);

const F1 = 'feedback-1';
const K15 = cues(sc(F1), {six: 'Six grams', one: 'one mole', tw: 'Twenty five millilitres', v: 'two hundred and fifty', five: 'five burette', dil: 'Dilute it ten', tenth: 'a tenth as much', t25: ['twenty five', 2], refill: 'Refilling five', wrong: 'get wrong'});
export const SceneFeedback1: React.FC = () => {
	const fill5 = (fr: number) => 5.03 * smooth(prog(fr, K15.five - 10, 50));
	return (
		<Overlay>
			<ShrinkTo k={0.62} cx={100} cy={180}>
				<Question1 t={[-100, -100, -100]} marks={[{phrase: M1[0], at: K15.one}, {phrase: M1[1], at: K15.one + 10}, {phrase: M1[2], at: K15.v - 20}, {phrase: M1[3], at: K15.v - 10}, {phrase: M1[4], at: K15.five}]} />
			</ShrinkTo>
			<WLine x={QX} y={540} size={34} dim={K15.v} dimTo={0.45} items={P('c ≈ 60 ÷ 60.05 ≈ 1 mol/L', K15.one)} />
			<WLine x={QX} y={605} size={34} dim={K15.dil} dimTo={0.45} items={P('n ≈ 1 × 0.02500 ≈ 0.025 mol', K15.tw + 10, {t: '→ V ≈ 0.025 ÷ 0.09940 ≈ 250 mL', color: AMB}, K15.v)} />
			<BurCounter x={1250} y={560} n={5} fill={fill5} at={K15.five - 14} out={K15.t25} h={200} w={36} gap={60} />
			<Note x={1250} y={840} text="five burette fills" size={32} color={INK} at={K15.five + 20} out={K15.t25} />
			<BurCounter x={1250} y={560} n={1} fill={() => 0.5} at={K15.t25 + 6} h={200} w={36} />
			<AChip x={1350} y={620} text="titre ≈ 25 mL" size={36} color={AMB} hand={false} at={K15.t25 + 10} />
			<ScaleBar x1={QX + 40} x2={QX + 520} y={770} lift={50} text="× 10" sub="25.00 mL → 250.0 mL volumetric flask" at={K15.dil} size={34} />
			<WLine x={QX} y={820} size={34} items={P('dilute × 10 (or a 2.50 mL aliquot): titre ≈ 25 mL', K15.t25)} />
			<MistakeX x={QX} y={870} text="refill the burette five times" at={K15.refill} cross={K15.refill + 26} note="ten readings: more reading error" size={30} />
			{void K15.six}{void K15.tenth}{void K15.wrong}
		</Overlay>
	);
};

// ---------- 16/17. Question 2 ----------
const A2 = 'attempt-2';
const K16 = cues(sc(A2), {more: 'One more', student: 'A student analyses', pours: 'She pours', then: 'Then she', explain: 'Explain the effect', pause: 'Pause here'});
const Q2 = (t: number[], marks: QMark[] = []) => qCheck([
	{text: 'A student analyses a household ammonia cleaner.', at: t[0]},
	{text: 'She pours some of the cleaner into an open beaker and leaves it on the bench for 40 minutes.', at: t[1]},
	{text: 'She then pipettes 25.00 mL of it into a 250.0 mL volumetric flask, makes it up to the mark, and titrates 25.00 mL aliquots with standardised hydrochloric acid using methyl orange indicator.', at: t[2]},
	{text: 'All other steps are carried out correctly.', at: t[2] + 20},
	{text: 'Explain the effect of leaving the cleaner in the open beaker on her calculated concentration of ammonia in the cleaner.', at: t[3], para: true},
] as QBlock[], marks);
const M2 = ['open beaker', '40 minutes', 'titrates 25.00 mL aliquots with standardised hydrochloric acid', 'calculated concentration of ammonia in the cleaner'];
qCheck(Q2([0, 0, 0, 0]).blocks, M2.map(phrase => ({phrase, at: 0})));
const Question2: React.FC<{t: number[]; marks?: QMark[]}> = ({t, marks}) => (
	<>
		<QBox x={100} y={200} w={QW + 60} h={520} at={t[0] - 6} />
		<QText q={Q2(t, marks)} x={QX} y={262} w={QW} size={34} card={false} />
	</>
);
export const SceneAttempt2: React.FC = () => (
	<Overlay>
		<Sx x={96} y={150} text="One more" size={58} color={INK} hand at={K16.more} />
		<Tag at={K16.more + 10} />
		<Question2 t={[K16.student, K16.pours, K16.then, K16.explain]} />
		<Fade at={K16.student + 10}><PicH p={CLEANER} x={1360} y={230} h={400} /></Fade>
		<Sx x={1360 + picW(CLEANER, 400) / 2} y={680} text="ammonia cleaner" size={30} color={INK} anchor="middle" weight={700} at={K16.student + 20} />
		<PauseHold h={hold(A2)} at={K16.pause} x={130} y={810} cx={1000} cy={790} />
	</Overlay>
);

const F2 = 'feedback-2';
const K17 = cues(sc(F2), {gas: 'gas dissolved', escapes: 'escapes from', fewer: 'fewer moles', less: 'need less acid', smaller: 'smaller', low: 'too low', saying: 'Saying water', faster: 'much faster'});
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	const BX = 1440, BY = 620, BH = 170;
	const strip = eq(['NH_3(aq)', '+', 'HCl(aq)', '->', 'NH_4Cl(aq)'], K17.smaller + 10);
	return (
		<Overlay>
			<ShrinkTo k={0.62} cx={100} cy={180}>
				<Question2 t={[-100, -100, -100, -100]} marks={[{phrase: M2[0], at: K17.gas}, {phrase: M2[1], at: K17.gas + 10}, {phrase: M2[2], at: K17.smaller}, {phrase: M2[3], at: K17.low}]} />
			</ShrinkTo>
			<Fade at={K17.gas}><PicH p={BEAKER} x={BX} y={BY} h={BH} /></Fade>
			<Rise x={BX} y={BY + 20} w={picW(BEAKER, BH)} at={K17.escapes} />
			<Sx x={BX + picW(BEAKER, BH) / 2} y={BY + BH + 40} text="open beaker" size={28} color={INK_SOFT} anchor="middle" hand at={K17.gas + 6} />
			<ChainV x={QX} y={560} gap={100} size={32} items={[
				{t: 'open beaker → NH_3 gas escapes → fewer moles of NH_3 in the sample', color: INK_SOFT, at: K17.fewer},
				{t: '→ titre smaller', color: VIO, at: K17.smaller},
				{t: '→ c(NH_3) too low', color: TERRA, at: K17.low},
			]} />
			<g opacity={0.8 * prog(f, K17.smaller + 10, 12)}><EqLine items={strip} x={QX + 440} y={700} size={fitSize(strip, 520, 30)} /></g>
			<MistakeX x={QX} y={870} text="water evaporates, so too high" at={K17.saying} cross={K17.faster} note="ammonia escapes much faster than water" size={30} />
			{void K17.less}{void TEAL}
		</Overlay>
	);
};

// ---------- 18. Decision rule and handoff ----------
const DR = 'decision-rule';
const K18 = cues(sc(DR), {so: 'So, to analyse', ask: 'ask whether', measure: 'Measure pH', plan: 'Plan the titre', report: 'Report each', next: 'Next'});
export const SceneDecision: React.FC = () => (
	<>
		<Heading text="Analysing a household sample" at={4} size={58} />
		<Overlay>
			<RuleCard x={96} y={210} w={1728} at={K18.so} lh={90} lines={[
				{t: '1  pH, amount, or both?', at: K18.ask, lit: [K18.ask, K18.measure], size: 38, hand: false},
				{t: '2  pH: calibrated probe, buffers either side, the undiluted sample.', at: K18.measure, lit: [K18.measure, K18.plan], size: 38, hand: false},
				{t: '3  Amount: estimate the titre from the label; dilute if needed; × the dilution factor.', at: K18.plan, lit: [K18.plan, K18.report], size: 38, hand: false},
				{t: '4  Report: pH; g per 100 mL as one named acid; the limits.', at: K18.report, lit: [K18.report, K18.next], size: 38, hand: false},
			]} />
			<Sx x={96} y={680} text="other samples change one step: juice (citric acid, 3 H⁺), soft drink (degas first), wine (pH endpoint), antacid (back titration)" size={26} color={INK_SOFT} weight={600} at={K18.report + 40} />
			<AChip x={96} y={780} text="Next: Module 7, organic chemistry" size={42} color={TEAL} hand={false} at={K18.next} />
		</Overlay>
	</>
);

// ---------- 19. Key notes ----------
const NOTES = [
	'Two questions: how acidic now (pH, calibrated probe) and how much in total (titration). Report both, each in its own units.',
	'pH: calibrate with buffers either side of the sample (pH 7.00 and 2.00 for vinegar); measure the undiluted sample; record the temperature. Vinegar: pH 2.46 at 25 °C.',
	'Plan from the label: 4 g per 100 mL ≈ 0.67 mol/L; neat 25.00 mL aliquots would need about 170 mL of 0.1 mol/L NaOH, so dilute tenfold (25.00 mL to 250.0 mL); moles unchanged; × 10 at the end.',
	'Standardised NaOH 0.09940 mol/L; phenolphthalein; first faint pink lasting 30 s. Mean titre 17.10 mL → 0.06799 mol/L diluted → 0.6799 mol/L → 4.083 g per 100 mL, titratable acidity as ethanoic acid.',
	'Limits: one bottle tested; other acids counted; % by mass needs the density. Risk: glasses (NaOH splash); phenolphthalein flammable, the solid may cause cancer (H350), two drops; never taste lab samples; pipette filler.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={29} aidTop={790} aids={['pH on the sample as it is; for the amount, dilute if you need to, then scale back up.']} tag="pH changes when you dilute; moles don't" />
);
