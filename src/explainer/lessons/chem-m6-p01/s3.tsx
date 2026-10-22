// M6 P01 scenes 13 to 19: the memory aid; two worded attempts (the full question on screen through the countdown,
// nothing answer-bearing); brief feedback with the question's phrases underlined as they are used and one crossed
// mistake each; the decision rule and handoff; key notes.
import React from 'react';
import {cues} from '../../cues';
import {GREEN, hexMix, hold, sc} from './common';
import {BURETTE, SODA_BOX, STEEP} from './assets';
import {
	AChip, C, CabBeaker, Chart, ChartBr, DimG, Fade, FullMeter, INK, INK_SOFT, KeyNotesBoard, LoopArrow, MistakeX, Note, Overlay, PauseHold, PenLink, PicH, QBox, QText, RX, RuleCard,
	ShrinkTo, Sx, TEAL, Tracker, Wells, cabW, chartX, pale, qCheck, swings, wellPt,
} from './parts';
import type {ChartG, QBlock, QMark, WFill} from './parts';

// ---------- 13. Memory aid ----------
const S13 = 'memory-aid';
const K13 = cues(sc(S13), {three: 'Three words', steep: 'steep', chart: ['chart', 1], cycle: ['cycle', 1], one: 'cycle one sample'});
export const SceneAid: React.FC = () => {
	const X = [330, 960, 1590];
	const g: ChartG = {x: X[1] - 190, y: 560, sw: 46, sh: 70, gap: 8};
	return (
		<Overlay>
			{[['Steep.', K13.steep], ['Chart.', K13.chart], ['Cycle.', K13.cycle]].map(([t, a], i) => (
				<Sx key={i} x={X[i]} y={430} text={t as string} size={130} color={i === 2 ? TEAL : INK} anchor="middle" hand at={a as number} />
			))}
			<Fade at={K13.steep + 10}><PicH p={STEEP} x={X[0] - 130} y={520} h={300} /></Fade>
			<Chart g={g} at={K13.chart + 10} size={18} />
			<Fade at={K13.cycle + 10}><CabBeaker x={X[2] - cabW(260) / 2} y={530} h={260} states={[{at: -100, s: 'r'}, ...swings(K13.cycle + 30, 18, 8, 'g')]} /></Fade>
			<LoopArrow cx={X[2]} cy={680} rx={170} ry={170} at={K13.cycle + 14} />
			<AChip x={960} y={920} text="cycle one sample, not fresh wells" size={40} color={TEAL} hand anchor="middle" at={K13.one} />
			{void K13.three}
		</Overlay>
	);
};

// ---------- 14/15. Question 1 ----------
const QX = 130, QW = 1040;
const A1 = 'attempt-1';
const K14 = cues(sc(A1), {turn: 'Your turn', student: 'A student', they: 'They turn', explain: 'Explain why', describe: 'describe a test', pause: 'Pause here'});
const Q1 = (t: number[], marks: QMark[] = []) => qCheck([
	{text: 'A student adds 3 drops of red cabbage extract to each of three wells. Well A contains dilute hydrochloric acid, well B contains distilled water and well C contains dilute sodium hydroxide solution.', at: t[0]},
	{text: 'Well A turns red, well B stays purple but is slightly paler than the extract, and well C turns green.', at: t[1]},
	{text: '(a) Explain why the student included well B.', at: t[2], para: true},
	{text: '(b) Describe a test the student could carry out to show that the colour change of the extract is reversible.', at: t[3], para: true},
] as QBlock[], marks);
const M1 = ['well B contains distilled water', 'slightly paler than the extract', 'show that the colour change of the extract is reversible'];
qCheck(Q1([0, 0, 0, 0]).blocks, M1.map(phrase => ({phrase, at: 0})));
const Question1: React.FC<{t: number[]; marks?: QMark[]}> = ({t, marks}) => (
	<>
		<QBox x={100} y={200} w={QW + 60} h={500} at={t[0] - 6} />
		<QText q={Q1(t, marks)} x={QX} y={262} w={QW} size={32} card={false} />
	</>
);
const ABC: React.FC<{x: number; y: number; h: number; at: number}> = ({x, y, h, at}) => {
	const fills: WFill[] = [{r: 0, c: 1, color: C.red}, {r: 0, c: 3, color: C.purple, pale: 0.35}, {r: 0, c: 5, color: C.green}];
	return (
		<>
			<Wells x={x} y={y} h={h} fills={fills} at={at} />
			{[1, 3, 5].map((c, i) => <Sx key={i} x={wellPt(x, y, h, 0, c)[0]} y={y - 14} text={'ABC'[i]} size={32} color={INK} anchor="middle" weight={800} at={at + 6} />)}
		</>
	);
};
export const SceneAttempt1: React.FC = () => (
	<Overlay>
		<Sx x={96} y={150} text="Your turn" size={58} color={INK} hand at={K14.turn} />
		<Question1 t={[K14.student, K14.they, K14.explain, K14.describe]} />
		<ABC x={1250} y={300} h={300} at={K14.student + 20} />
		<PauseHold h={hold(A1)} at={K14.pause} x={130} y={800} cx={900} cy={780} />
	</Overlay>
);

const F1 = 'feedback-1';
const K15 = cues(sc(F1), {control: 'control', alone: 'dilution alone', so: 'So the red', one: 'one sample', add: 'add base', repeat: 'repeat three', testing: 'Testing again', fresh: 'fresh wells', sep: 'separately'});
const Ans: React.FC<{x: number; y: number; w: number; tag: string; lines: string[]; at: number; color?: string}> = ({x, y, w, tag, lines, at, color = TEAL}) => (
	<Fade at={at}>
		<rect x={x} y={y} width={w} height={36 + lines.length * 44} rx={16} fill="#fffdf8" stroke={color} strokeWidth={3} />
		<Sx x={x + 22} y={y + 50} text={tag} size={32} color={color} weight={800} at={-1000} />
		{lines.map((l, i) => <Sx key={i} x={x + 80} y={y + 50 + i * 44} text={l} size={31} color={INK} weight={700} at={at + i * 10} />)}
	</Fade>
);
export const SceneFeedback1: React.FC = () => (
	<Overlay>
		<ShrinkTo k={0.62} cx={100} cy={180}>
			<Question1 t={[-100, -100, -100, -100]} marks={[{phrase: M1[0], at: K15.control}, {phrase: M1[1], at: K15.alone}, {phrase: M1[2], at: K15.one}]} />
		</ShrinkTo>
		<ABC x={1250} y={230} h={240} at={-100} />
		<Ans x={100} y={530} w={1100} tag="(a)" at={K15.control + 20} lines={['B = control: dilution only pales it;', 'red and green come from acid and base']} />
		<DimG at={K15.testing} to={0.5}>
			<CabBeaker x={1420} y={540} h={240} states={[{at: -100, s: 'r'}, ...swings(K15.add, 16, 6, 'g')]} o={1} />
			<LoopArrow cx={1420 + cabW(240) / 2} cy={540 + 140} rx={170} ry={170} at={K15.one} />
			<Tracker x={1300} y={940} at={K15.repeat} ticks={[K15.repeat + 6, K15.repeat + 14, K15.repeat + 22]} label="3 cycles" />
		</DimG>
		<Ans x={100} y={680} w={1100} tag="(b)" at={K15.add} lines={['one sample: base until green, acid until red;', 'repeat 3 times; same colours return']} />
		<MistakeX x={100} y={850} text="test acid and base again in fresh wells" at={K15.testing} cross={K15.sep} note="fresh wells show each colour, not a reversal" size={32} />
		{void K15.so}{void K15.fresh}
	</Overlay>
);

// ---------- 16/17. Question 2 ----------
const A2 = 'attempt-2';
const K16 = cues(sc(A2), {more: 'One more', her: 'Her colour', baking: 'A baking soda', estimate: 'Estimate its', assess: 'assess the accuracy', pause: 'Pause here'});
const Q2 = (t: number[], marks: QMark[] = []) => qCheck([
	{text: 'A student made a colour chart for her red cabbage extract using buffer solutions: pH 2 red, pH 4 pink, pH 6 violet, pH 7 purple, pH 8 blue, pH 10 blue-green, pH 12 green.', at: t[0]},
	{text: 'Three drops of the extract turned a solution of baking soda blue, with a slight green tint.', at: t[1]},
	{text: '(a) Estimate the pH of the baking soda solution.', at: t[2], para: true},
	{text: '(b) Assess the accuracy of this method compared with a calibrated pH meter.', at: t[3], para: true},
] as QBlock[], marks);
const M2 = ['blue, with a slight green tint', 'pH 8 blue, pH 10 blue-green', 'calibrated pH meter'];
qCheck(Q2([0, 0, 0, 0]).blocks, M2.map(phrase => ({phrase, at: 0})));
const Question2: React.FC<{t: number[]; marks?: QMark[]}> = ({t, marks}) => (
	<>
		<QBox x={100} y={200} w={QW + 60} h={440} at={t[0] - 6} />
		<QText q={Q2(t, marks)} x={QX} y={262} w={QW} size={32} card={false} />
	</>
);
const G2: ChartG = {x: 1250, y: 250, sw: 70, sh: 60, gap: 14};
const SAMPLE = hexMix(C.blue, C.bg, 0.3);
const SodaSet: React.FC<{at: number}> = ({at}) => (
	<>
		<Chart g={G2} at={at} size={20} names />
		<Fade at={at + 20}><PicH p={SODA_BOX} x={1290} y={480} h={200} /></Fade>
		<Fade at={at + 26}>
			<circle cx={1600} cy={600} r={50} fill="#f7f7f5" stroke="rgba(60,45,20,0.35)" strokeWidth={2.5} />
			<circle cx={1600} cy={600} r={43} fill={SAMPLE} />
			<Sx x={1600} y={690} text="sample" size={26} color={INK_SOFT} anchor="middle" weight={700} at={-1000} />
		</Fade>
	</>
);
export const SceneAttempt2: React.FC = () => (
	<Overlay>
		<Sx x={96} y={150} text="One more" size={58} color={INK} hand at={K16.more} />
		<Question2 t={[K16.her, K16.baking, K16.estimate, K16.assess]} />
		<SodaSet at={K16.her + 10} />
		<PauseHold h={hold(A2)} at={K16.pause} x={130} y={780} cx={900} cy={760} />
	</Overlay>
);

const F2 = 'feedback-2';
const K17 = cues(sc(F2), {sits: 'The colour sits', eight: 'eight to nine', range: 'range', steps: 'steps are', accurate: 'accurate', reads: 'eight point three four', writing: 'Writing exactly', zero: 'eight point zero', show: 'can show'});
export const SceneFeedback2: React.FC = () => {
	const mid = chartX(G2, 4) + G2.sw / 2 + (chartX(G2, 5) - chartX(G2, 4)) * 0.3;
	return (
		<Overlay>
			<ShrinkTo k={0.62} cx={100} cy={180}>
				<Question2 t={[-100, -100, -100, -100]} marks={[{phrase: M2[0], at: K17.sits + 10}, {phrase: M2[1], at: K17.steps}, {phrase: M2[2], at: K17.accurate}]} />
			</ShrinkTo>
			<SodaSet at={-100} />
			<ChartBr g={G2} i={4} j={5} at={K17.sits + 20} color={TEAL} />
			<PenLink a={[1600, 545]} b={[mid, G2.y + G2.sh + 8]} at={K17.eight - 10} color={TEAL} />
			<Ans x={100} y={500} w={1100} tag="(a)" at={K17.eight} lines={['about pH 8 to 9 (a range, not a value)']} />
			<Ans x={100} y={620} w={1100} tag="(b)" at={K17.accurate} lines={['less accurate: steps 2 units wide, colour judged', 'by eye; a calibrated meter is within a few hundredths']} />
			<FullMeter x={1300} y={740} h={220} at={K17.reads - 16} read={() => '8.34'} />
			<MistakeX x={100} y={850} text="pH = 8.0" at={K17.writing} cross={K17.zero + 20} note="a colour match gives a range" size={34} />
			{void K17.range}{void K17.show}{void pale}
		</Overlay>
	);
};

// ---------- 18. Decision rule and handoff ----------
const DR = 'decision-rule';
const K18 = cues(sc(DR), {steep: 'steep and filter', chart: 'chart its', water: 'water control', cycle: 'cycle one', next: 'Next'});
export const SceneDecision: React.FC = () => (
	<Overlay>
		<Sx x={96} y={150} text="A cabbage indicator you can trust" size={58} color={INK} hand at={4} />
		<RuleCard x={96} y={210} w={1728} at={K18.steep - 10} lh={90} lines={[
			{t: '1  Steep in hot water, filter, cool; record the colour.', at: K18.steep, lit: [K18.steep, K18.chart], size: 38, hand: false},
			{t: '2  Chart: equal drops into solutions of known pH.', at: K18.chart, lit: [K18.chart, K18.water], size: 38, hand: false},
			{t: '3  Water control: dilution alone.', at: K18.water, lit: [K18.water, K18.cycle], size: 38, hand: false},
			{t: '4  Cycle one sample three times: same colours return.', at: K18.cycle, lit: [K18.cycle, K18.next], size: 38, hand: false},
		]} />
		<AChip x={96} y={720} text="Next: what titration curves and conductivity graphs reveal" size={38} color={TEAL} hand={false} at={K18.next} />
		<Fade at={K18.next + 8}><PicH p={BURETTE} x={1620} y={640} h={360} /></Fade>
		{void RX}{void GREEN}{void Note}
	</Overlay>
);

// ---------- 19. Key notes ----------
const NOTES = [
	"Red cabbage's colour comes from a mixture of anthocyanins, which behave like weak-acid indicators (HIn) that can lose more than one proton, so the extract shows several colours that change gradually.",
	'Prepare: chop (teacher), steep about 20 g in 100 mL hot water for 10 min (heat lets the pigment out of the cells), filter off solids, cool. Record the starting colour (purple).',
	'Calibrate: equal drops of extract (3) in solutions of known pH (buffers, checked with a meter) on a white tile. Typical chart: 2 red, 4 pink, 6 violet, 7 purple, 8 blue, 10 blue-green, 12 green. Precision depends on the spacing.',
	'Water control: dilution alone only pales the colour. Reversibility: one sample, base until green, acid until red, three cycles; the same colours return (equilibrium shifts with H^{+}). Strong base left standing can destroy the pigment.',
	'Validity: one batch, equal drops, water control. Reliability: repeats give the same colours. Accuracy: chart about ±1 pH unit; a calibrated meter is far better. Poor for titrations: gradual changes, no single sharp one.',
	'Risk: hot water and knife (teacher); 0.10 mol/L NaOH is just below the irritant limit, so treat a splash as harmful (safety glasses, also for the HCl); extract stains.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={27} aidTop={880} aids={['Steep. Chart. Cycle.']} tag="cycle one sample, not fresh wells" />
);
