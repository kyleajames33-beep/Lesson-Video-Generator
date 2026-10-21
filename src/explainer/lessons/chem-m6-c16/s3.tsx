// M6 C16 scenes 10 to 15: two worded attempts (full question on screen through the countdown); brief feedback with
// the question's phrases underlined as they are used and one crossed mistake each; the decision rule; key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, hold, sc} from './common';
import {ANTACID, ASPIRIN, MARBLE, VINEGAR} from './assets';
import {
	AChip, AMBER, AMBER_INK, AMT_C, ClTok, DimG, Fade, Heap, INK, INK_SOFT, KeyNotesBoard, LensFrame, MiniFork, MistakeX, MolesBar, NaTok, Note, OHg, Overlay, PH_C, PauseHold, PicH, PlateAt, QText,
	RuleCard, Sx, TEAL, USED_INK, clamp01, lerp, qCheck, smooth,
} from './parts';
import type {QBlock, QMark} from './parts';
import {CardBox, Shrink} from '../chem-m6-c07/s4';

const QX = 140, QW = 1640;

// ---------- 10/11. Question 1 ----------
const A1 = 'attempt-1';
const K10 = cues(sc(A1), {turn: 'Your turn', garden: 'A garden', tech: 'A technician', explain: 'Explain why', recommend: 'then recommend', pause: 'Pause here'});
const Q1 = (t: number[], marks: QMark[] = []) => qCheck([
	{text: 'A garden supplies company wants to determine the percentage by mass of calcium carbonate in a batch of crushed limestone.', at: t[0]},
	{text: 'A technician suggests mixing a sample of the limestone with water and measuring the pH with a calibrated pH probe.', at: t[1]},
	{text: '(a) Explain why this method would not determine the percentage of calcium carbonate.', at: t[2], para: true},
	{text: '(b) Recommend a more suitable method and justify your choice.', at: t[3], para: true},
] as QBlock[], marks);
const M1 = ['mixing a sample of the limestone with water and measuring the pH', 'percentage by mass', 'crushed limestone'];
qCheck(Q1([0, 0, 0, 0]).blocks, M1.map(phrase => ({phrase, at: 0})));
const Question1: React.FC<{t: number[]; marks?: QMark[]}> = ({t, marks}) => (
	<>
		<CardBox y={200} h={360} at={t[0] - 6} />
		<QText q={Q1(t, marks)} x={QX} y={272} w={QW} size={40} card={false} />
	</>
);
export const SceneAttempt1: React.FC = () => (
	<Overlay>
		<Sx x={96} y={150} text="Your turn" size={58} color={INK} hand at={K10.turn} />
		<Question1 t={[K10.garden, K10.tech, K10.explain, K10.recommend]} />
		<PauseHold h={hold(A1)} at={K10.pause} x={140} y={760} cx={1560} cy={740} />
	</Overlay>
);

const F1 = 'feedback-1';
const K11 = cues(sc(F1), {barely: 'barely dissolves', amount: 'an amount', back: 'back titration', add: 'add a measured', half: 'Half the', direct: 'A direct', trap: 'the trap', slowly: 'too slowly'});
export const SceneFeedback1: React.FC = () => {
	const L = {cx: 1300, cy: 340, r: 130};
	return (
		<Overlay>
			<Shrink k={0.55}>
				<Question1 t={[-100, -100, -100, -100]} marks={[
					{phrase: 'mixing a sample of the limestone with water and measuring the pH', at: K11.barely + 10, color: PH_C},
					{phrase: 'percentage by mass', at: K11.back, color: AMT_C}, {phrase: 'crushed limestone', at: K11.back + 12, color: AMT_C},
				]} />
			</Shrink>
			<LensFrame cx={L.cx} cy={L.cy} r={L.r} at={K11.barely}>
				<rect x={L.cx - L.r} y={L.cy - L.r} width={2 * L.r} height={2 * L.r} fill="#eef6fb" />
				<Heap cx={L.cx} base={L.cy + L.r * 0.85} s={2.4} />
				<NaTok x={L.cx - 55} y={L.cy - 55} s={1.15} grey={1} label="Ca^{2+}" />
				<ClTok x={L.cx + 50} y={L.cy - 30} s={1.15} grey={1} label="CO_3^{2−}" />
			</LensFrame>
			<Note x={L.cx} y={L.cy + L.r + 46} text="only a tiny amount dissolves" size={28} color={INK_SOFT} anchor="middle" at={K11.barely + 20} out={K11.amount} hand={false} />
			<MiniFork x={1520} y={240} w={240} h={180} at={K11.barely} litU={K11.amount} litL={K11.back} labels={['pH', 'amount']} size={30} />
			<Note x={L.cx} y={L.cy + L.r + 46} text="pH: not an amount" size={34} color={PH_C} anchor="middle" at={K11.amount + 6} />
			<PlateAt p={MARBLE} x={140} y={520} h={220} at={K11.back} />
			<Note x={140} y={790} text="slow, insoluble solid" size={32} color={INK_SOFT} at={K11.back + 10} />
			<AChip x={560} y={530} text="back titration" size={40} color={TEAL} hand={false} at={K11.back + 6} />
			<MolesBar x={560} y={630} w={520} h={56} at={K11.add} split={K11.half - 20} used={() => 0.6} size={24} usedText="used" leftText="left" />
			<Note x={560} y={740} text="acid used ÷ 2 → n(CaCO_3) → %" size={32} color={USED_INK} at={K11.half} hand={false} />
			<MistakeX x={560} y={810} text="direct titration with HCl" at={K11.direct} cross={K11.trap + 6} note="too slow: endpoint before the solid reacts" size={32} />
			{void K11.slowly}
		</Overlay>
	);
};

// ---------- 12/13. Question 2 ----------
const A2 = 'attempt-2';
const K12 = cues(sc(A2), {last: 'Last one', aspirin: 'Aspirin is', old: 'In old', each: 'each molecule', would: 'Would the', pause: 'Pause here'});
const Q2 = (t: number[], marks: QMark[] = []) => qCheck([
	{text: 'Aspirin (acetylsalicylic acid) is a monoprotic acid.', at: t[0]},
	{text: 'A pharmacist checks the aspirin content of tablets by dissolving each tablet in a mixture of ethanol and water and titrating it with standard sodium hydroxide solution.', at: t[0] + 90},
	{text: 'In old tablets, some of the aspirin has reacted with water.', at: t[1]},
	{text: 'Each aspirin molecule that reacts forms one molecule of ethanoic acid and one molecule of salicylic acid, and both act as monoprotic acids in the titration.', at: t[2]},
	{text: 'Explain whether the titration would give an aspirin content for an old tablet that is too high or too low.', at: t[3], para: true},
] as QBlock[], marks);
const M2 = ['one molecule of ethanoic acid and one molecule of salicylic acid', 'both act as monoprotic acids'];
qCheck(Q2([0, 0, 0, 0]).blocks, M2.map(phrase => ({phrase, at: 0})));
const Question2: React.FC<{t: number[]; marks?: QMark[]}> = ({t, marks}) => (
	<>
		<CardBox y={200} h={430} at={t[0] - 6} />
		<QText q={Q2(t, marks)} x={QX} y={268} w={QW} size={38} card={false} />
	</>
);
export const SceneAttempt2: React.FC = () => (
	<Overlay>
		<Sx x={96} y={150} text="Last one" size={58} color={INK} hand at={K12.last} />
		<Question2 t={[K12.aspirin, K12.old, K12.each, K12.would]} />
		<PicH p={ASPIRIN} x={1590} y={60} h={120} />
		<PauseHold h={hold(A2)} at={K12.pause} x={140} y={790} cx={1560} cy={780} />
	</Overlay>
);

const F2 = 'feedback-2';
const K13 = cues(sc(F2), {high: 'Too high', each: 'Each aspirin', two: 'gives two', hyd: 'a hydroxide', total: 'counts total', saying: 'Saying too', acid: "acid hasn't"});
const Tok: React.FC<{x: number; y: number; t: string; o?: number; r?: number; size?: number}> = ({x, y, t, o = 1, r = 40, size = 22}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<circle cx={x} cy={y} r={r} fill="#fff4dc" stroke={AMBER} strokeWidth={4} />
		<Sx x={x} y={y + size * 0.36} text={t} size={size} color={AMBER_INK} anchor="middle" weight={800} at={-1000} />
	</g>
));
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	const sp = smooth(clamp01((f - K13.two) / 24));
	const oh = (at: number) => smooth(clamp01((f - at) / 18));
	const Y = 640;
	return (
		<Overlay>
			<Shrink k={0.55}>
				<Question2 t={[-100, -100, -100, -100]} marks={[{phrase: M2[0], at: K13.two, color: USED_INK}, {phrase: M2[1], at: K13.two + 20, color: USED_INK}]} />
			</Shrink>
			<AChip x={1140} y={240} text="too high" size={44} color={TEAL} hand={false} at={K13.high + 6} />
			<Fade at={K13.each}>
				<Tok x={260} y={Y} t="aspirin" />
				<Sx x={260} y={Y + 84} text="intact" size={26} color={INK_SOFT} anchor="middle" hand at={-1000} />
				<OHg x={lerp(380, 316, oh(K13.hyd))} y={lerp(Y - 60, Y - 20, oh(K13.hyd))} s={1.1} o={prog(f, K13.hyd - 10, 10)} />
				<Tok x={lerp(700, 640, sp)} y={Y} t="aspirin" o={1 - sp} />
				<Tok x={lerp(700, 610, sp)} y={Y} t="ethanoic" o={sp} r={46} size={18} />
				<Tok x={lerp(700, 800, sp)} y={Y} t="salicylic" o={sp} r={46} size={18} />
				<Sx x={705} y={Y + 84} text="broken down" size={26} color={INK_SOFT} anchor="middle" hand at={-1000} />
				<OHg x={lerp(560, 600, oh(K13.hyd + 6))} y={lerp(Y - 90, Y - 52, oh(K13.hyd + 6))} s={1.1} o={prog(f, K13.hyd - 4, 10)} />
				<OHg x={lerp(860, 812, oh(K13.hyd + 12))} y={lerp(Y - 90, Y - 52, oh(K13.hyd + 12))} s={1.1} o={prog(f, K13.hyd + 2, 10)} />
			</Fade>
			<DimG at={K13.saying} to={0.45}>
				<Note x={140} y={Y + 170} text="1 aspirin: 1 OH^{−} | broken down: 2 OH^{−}" size={32} color={INK} at={K13.hyd + 30} hand={false} />
			</DimG>
			<Fade at={K13.total}>
				<rect x={1140} y={560} width={420} height={50} rx={10} fill={AMT_C} opacity={0.85} />
				<Sx x={1350} y={594} text="total acid" size={28} color="#ffffff" anchor="middle" weight={800} at={-1000} />
			</Fade>
			<Note x={1140} y={670} text="a titre counts total acid" size={32} color={AMT_C} at={K13.total + 10} />
			<MistakeX x={1140} y={740} text="too low: less aspirin" at={K13.saying} cross={K13.acid} note="the acid is still there, in two pieces" size={32} />
		</Overlay>
	);
};

// ---------- 14. Decision rule and handoff ----------
const DR = 'decision-rule';
const K14 = cues(sc(DR), {so: 'So for', two: 'two questions', need: 'Do I need', forph: 'For pH', foramount: 'For an amount', say: 'Then say', next: 'Next', household: 'household sample'});
export const SceneDecision: React.FC = () => (
	<>
		<Heading text="For any sample" at={4} size={58} />
		<Overlay>
			<RuleCard x={96} y={210} w={1728} at={K14.so + 10} lh={78} lines={[
				{t: '1  pH (how acidic now) or amount (how much in total)?', at: K14.two, lit: [K14.two, K14.forph], size: 36, hand: false},
				{t: '2  pH → calibrated probe (two buffers).', at: K14.forph, lit: [K14.forph, K14.foramount], size: 36, hand: false},
				{t: '3  Amount → titrate: clear and fast → direct; slow solid → back;', at: K14.foramount, lit: [K14.foramount, K14.say], size: 36, hand: false},
				{t: '     coloured or cloudy → pH or conductivity meter.', at: K14.foramount + 60, lit: [K14.foramount + 60, K14.say], size: 36, hand: false},
				{t: '4  State what it measures: pH, or total acid (not which acid).', at: K14.say, lit: [K14.say, K14.next], size: 36, hand: false},
			]} />
			<AChip x={96} y={720} text="Next: analyse a household sample" size={42} color={TEAL} hand={false} at={K14.next} />
			<PlateAt p={VINEGAR} x={1300} y={660} h={250} at={K14.next + 6} />
			<PlateAt p={ANTACID} x={1460} y={760} h={130} at={K14.next + 12} />
			{void K14.need}{void K14.household}
		</Overlay>
	</>
);

// ---------- 15. Key notes ----------
const NOTES = [
	'A pH probe measures how acidic a solution is now (its pH, from a voltage at a glass membrane). A titration measures how much acid or base is present in total.',
	'Calibrate a pH probe with two buffers before use: pH 7.00 sets the zero point, pH 4.00 (or 10.00) sets the slope. The glass ages and temperature changes its response.',
	'Choosing a titration: clear, soluble, fast → direct, with an indicator; insoluble or slow solid → back titration; coloured or cloudy → follow the titration with a pH probe or a conductivity meter.',
	'A titration gives total acid (or base), not which acid. Probes allow continuous monitoring (for example, wastewater) and automatic titration.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={30} aidTop={620} aids={['pH tells you how acidic; a titration tells you how much.']} tag="then let the sample choose the titration" />
);
void INK_SOFT;
