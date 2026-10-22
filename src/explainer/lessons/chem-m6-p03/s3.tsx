// M6 P03 scenes 13 to 19: the memory aid; two worded attempts (the full question on screen through the countdown);
// brief feedback with the question's phrases underlined as they are used and one crossed mistake each; the decision
// rule and handoff; key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, hold, sc} from './common';
import {TISSUE, WASH, WASH_N} from './assets';
import {
	AChip, AMBER, AMBER_INK, BASE_INK, Bottle, CalSeg, ClingDrop, DrawPath, Fade, FullMeter, GLINE, INK, INK_SOFT, KeyNotesBoard, LabelBeaker, LensFrame, MistakeX, Note, OHg, Overlay,
	PauseHold, PicH, ProbeIcon, QBox, QText, RuleCard, ShrinkTo, StableDot, Stream, Sx, TEAL, TRead, beakerW, bottleW, lerp, meterBeaker, picW, qCheck, smooth, treadW, vis,
} from './parts';
import type {GG, QBlock, QMark} from './parts';

// ---------- 13. Memory aid ----------
const S13 = 'memory-aid';
const K13 = cues(sc(S13), {routine: 'routine to', cal: 'calibrate first', rinse: 'rinse between', wait: 'wait for steady', read: 'when you read', one: 'one pH step'});
export const SceneAid: React.FC = () => {
	const f = useCurrentFrame();
	const WH = 200, ww = picW(WASH, WH), k = WH / WASH.box[3];
	const nz: [number, number] = [1300 + (WASH_N.nozzle[0] - WASH.box[0]) * k, 430 + (WASH_N.nozzle[1] - WASH.box[1]) * k];
	return (
		<Overlay>
			<Sx x={96} y={160} text="The routine to remember" size={40} color={INK_SOFT} hand at={K13.routine} />
			<Sx x={110} y={330} text="Calibrate first." size={100} color={TEAL} hand at={K13.cal} />
			<Sx x={110} y={530} text="Rinse between." size={100} color={TEAL} hand at={K13.rinse} />
			<Sx x={110} y={730} text="Wait for steady." size={100} color={TEAL} hand at={K13.wait} />
			{[['pH 4.00', '#e06a5a'], ['pH 7.00', '#e8c547'], ['pH 10.00', '#5b8fd6']].map(([t, c], i) => <Bottle key={i} x={1100 + i * (bottleW(150) + 20)} y={200} h={150} ph={t} color={c} at={K13.cal + 6 + i * 5} />)}
			<Fade at={K13.rinse + 4}><PicH p={WASH} x={1300} y={430} h={WH} /></Fade>
			<Stream a={nz} b={[nz[0] + 130, nz[1] + 40]} at={K13.rinse + 14} out={K13.wait} />
			<TRead x={1100} y={650} text={fr => (fr < K13.wait + 30 ? (fr < K13.wait + 4 ? '' : (2 + ((fr * 7) % 30) / 100).toFixed(2)) : '2.03')} at={K13.wait} sample="10.00" />
			<StableDot x={1100 + treadW(34, '10.00') + 24} y={676} at={K13.wait + 30} />
			<Sx x={110} y={920} text="one pH step = 10 × the hydronium" size={44} color={INK} weight={700} at={K13.one} />
			{void K13.read}{void ww}{void f}
		</Overlay>
	);
};

// ---------- 14/15. Question 1 ----------
const A1 = 'attempt-1';
const K14 = cues(sc(A1), {turn: 'Your turn', student: 'A student measures', without: 'without rinsing', other: 'Other groups', explain: 'Explain the', pause: 'Pause here'});
const Q1 = (t: number[], marks: QMark[] = []) => qCheck([
	{text: 'A student measures the pH of 0.010 mol/L sodium hydroxide solution with a calibrated pH meter.', at: t[0]},
	{text: 'Without rinsing the probe, she then measures a sample of distilled water and obtains a reading of 9.2.', at: t[1]},
	{text: 'Other groups measured the same distilled water at about 6.', at: t[2]},
	{text: 'Explain the difference between her reading and the other groups\' readings, and describe how she should change her method.', at: t[3], para: true},
] as QBlock[], marks);
qCheck(Q1([0, 0, 0, 0]).blocks, [{phrase: 'Without rinsing the probe', at: 0}, {phrase: 'distilled water', at: 0}, {phrase: '9.2', at: 0}]);
const QX = 130, QW1 = 980;
const Question1: React.FC<{t: number[]; marks?: QMark[]}> = ({t, marks}) => (
	<>
		<QBox x={100} y={200} w={QW1 + 60} h={440} at={t[0] - 6} />
		<QText q={Q1(t, marks)} x={QX} y={265} w={QW1} size={36} card={false} />
	</>
);
const MX = 1280, MY = 300, MH = 400;
export const SceneAttempt1: React.FC = () => {
	const mb = meterBeaker(MX, MY, MH);
	return (
		<Overlay>
			<Sx x={96} y={150} text="Your turn" size={58} color={INK} hand at={K14.turn} />
			<Question1 t={[K14.student, K14.without, K14.other, K14.explain]} />
			<FullMeter x={MX} y={MY} h={MH} at={K14.without - 10} read={() => '9.21'} />
			<Sx x={mb.cx} y={mb.bottom + 46} text="distilled water" size={30} color={INK} anchor="middle" weight={700} at={K14.without} />
			<PauseHold h={hold(A1)} at={K14.pause} x={130} y={800} cx={880} cy={780} />
		</Overlay>
	);
};

const F1 = 'feedback-1';
const K15 = cues(sc(F1), {carried: 'carried into', noions: 'no ions', tiny: 'tiny amount', rinse: 'should rinse', fresh: 'fresh portion', averaging: 'Averaging more', pushes: 'pushes the'});
export const SceneFeedback1: React.FC = () => {
	const f = useCurrentFrame();
	const BH = 230, BX = 1450, BY = 650, bw = beakerW(BH);
	const tipX = BX + bw / 2, tipY = BY - 20;
	const surf = BY + BH * 0.416;
	const L = {cx: 1150, cy: 520, r: 120};
	const WH = 210, ww = picW(WASH, WH), k = WH / WASH.box[3];
	const nozzle: [number, number] = [tipX + 70, tipY - 160];
	const wx = nozzle[0] - (ww - (WASH_N.nozzle[0] - WASH.box[0]) * k), wy = nozzle[1] - (WASH_N.nozzle[1] - WASH.box[1]) * k;
	const tq = smooth(prog(f, K15.rinse + 50, 14)) * (1 - smooth(prog(f, K15.rinse + 84, 14)));
	const TW = 100, tisH = (TISSUE.box[3] / TISSUE.box[2]) * TW;
	return (
		<Overlay>
			<ShrinkTo k={0.62} cx={100} cy={180}>
				<Question1 t={[-100, -100, -100, -100]} marks={[{phrase: 'Without rinsing the probe', at: K15.carried}, {phrase: 'distilled water', at: K15.noions}, {phrase: '9.2', at: K15.noions + 8}]} />
			</ShrinkTo>
			<LabelBeaker x={BX} y={BY} h={BH} at={-100} lines={[{t: 'distilled water', at: -100}]} size={28} />
			<ProbeIcon x={tipX} y={tipY} h={260} />
			<ClingDrop x={tipX} y0={tipY + 4} y1={surf} at={K15.carried - 10} fall={K15.carried + 10} color="#a58ad6" />
			<Note x={tipX - 330} y={tipY + 40} text="OH^{−} carried over" size={32} color={BASE_INK} at={K15.carried + 20} out={K15.rinse} />
			<LensFrame cx={L.cx} cy={L.cy} r={L.r} at={K15.noions} out={K15.rinse + 10}>
				<rect x={L.cx - L.r} y={L.cy - L.r} width={2 * L.r} height={2 * L.r} fill="#eef6fb" />
				{[[-0.4, -0.3], [0.35, 0.1], [-0.1, 0.45]].map(([u, v], i) => <OHg key={i} x={L.cx + u * L.r} y={L.cy + v * L.r} s={1.3} o={prog(f, K15.tiny + i * 8, 10)} />)}
			</LensFrame>
			<Note x={L.cx - 200} y={L.cy + L.r + 46} text="few ions: a trace shifts pH a lot" size={30} color={INK} at={K15.noions + 10} out={K15.rinse + 10} />
			<g opacity={vis(f, K15.rinse - 6, K15.rinse + 50, 10)}><g transform={`translate(${wx + ww},${wy}) scale(-1,1)`}><PicH p={WASH} x={0} y={0} h={WH} /></g></g>
			<Stream a={nozzle} b={[tipX + 8, tipY - 40]} at={K15.rinse + 6} out={K15.rinse + 44} />
			{tq > 0.01 ? <g transform={`translate(${lerp(tipX + 200, tipX - 4, tq)},${tipY - 30}) rotate(-70)`}><PicH p={TISSUE} x={-TW / 2} y={-tisH / 2} h={tisH} /></g> : null}
			<AChip x={QX} y={560} text="rinse and blot between samples; fresh portion" size={36} color={TEAL} hand={false} at={K15.fresh} />
			<MistakeX x={QX} y={680} text="take three readings and average" at={K15.averaging - 6} cross={K15.pushes} note="averaging keeps the contamination" size={34} />
			{void surf}
		</Overlay>
	);
};

// ---------- 16/17. Question 2 ----------
const A2 = 'attempt-2';
const K16 = cues(sc(A2), {more: 'One more', student: 'A student calibrates', reads: 'then reads', another: 'Another group', evaluate: 'Evaluate the', pause: 'Pause here'});
const Q2 = (t: number[], marks: QMark[] = []) => qCheck([
	{text: 'A student calibrates a pH meter with a pH 7.00 buffer only.', at: t[0]},
	{text: 'She then measures the pH of 0.010 mol/L hydrochloric acid three times, using a fresh portion each time, and obtains 2.31, 2.30 and 2.32.', at: t[1]},
	{text: 'Another group calibrated with pH 7.00 and pH 4.00 buffers and obtained 2.03 for the same solution.', at: t[2]},
	{text: 'Evaluate the reliability and accuracy of the first student\'s results.', at: t[3], para: true},
] as QBlock[], marks);
const M2 = ['2.31, 2.30 and 2.32', '2.03', 'calibrated with pH 7.00 and pH 4.00', 'pH 7.00 buffer only'];
qCheck(Q2([0, 0, 0, 0]).blocks, M2.map(phrase => ({phrase, at: 0})));
const QW2 = 1000;
const Question2: React.FC<{t: number[]; marks?: QMark[]}> = ({t, marks}) => (
	<>
		<QBox x={100} y={200} w={QW2 + 60} h={460} at={t[0] - 6} />
		<QText q={Q2(t, marks)} x={QX} y={265} w={QW2} size={36} card={false} />
	</>
);
export const SceneAttempt2: React.FC = () => (
	<Overlay>
		<Sx x={96} y={150} text="One more" size={58} color={INK} hand at={K16.more} />
		<Question2 t={[K16.student, K16.reads, K16.another, K16.evaluate]} />
		<FullMeter x={MX} y={MY} h={MH} at={K16.reads - 10} read={() => '2.31'} />
		<Bottle x={1330} y={760} h={190} ph="pH 7.00" color="#e8c547" at={K16.student + 10} />
		<PauseHold h={hold(A2)} at={K16.pause} x={130} y={820} cx={900} cy={800} />
	</Overlay>
);

const F2 = 'feedback-2';
const K17 = cues(sc(F2), {reliable: 'reliable', agree: 'agree within', accurate: 'accurate', sit: 'they sit', three: 'zero point three', guess: 'guess its slope', every: 'every reading shares', calibrate: 'Calibrate with', classic: 'classic slip'});
const GF: GG = {x: 1280, y: 560, w: 520, h: 300, x0: 0, x1: 14, y0: 0, y1: 1};
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	const SX = 140, SW = 900, SY = 640;
	const X = (p: number) => SX + ((p - 2.0) / 0.4) * SW;
	return (
		<Overlay>
			<ShrinkTo k={0.62} cx={100} cy={180}>
				<Question2 t={[-100, -100, -100, -100]} marks={[
					{phrase: M2[0], at: K17.reliable}, {phrase: M2[1], at: K17.accurate, color: TEAL}, {phrase: M2[2], at: K17.accurate + 10, color: TEAL}, {phrase: M2[3], at: K17.guess},
				]} />
			</ShrinkTo>
			<Note x={SX} y={540} text="range 0.02: reliable" size={36} color={TEAL} at={K17.agree} />
			<Fade at={K17.accurate}>
				<line x1={SX} y1={SY} x2={SX + SW} y2={SY} stroke={INK_SOFT} strokeWidth={4} strokeLinecap="round" />
				{[2.0, 2.1, 2.2, 2.3, 2.4].map(p => <g key={p}><line x1={X(p)} y1={SY - 10} x2={X(p)} y2={SY + 10} stroke={INK_SOFT} strokeWidth={3} /><Sx x={X(p)} y={SY + 42} text={p.toFixed(1)} size={26} color={INK_SOFT} anchor="middle" weight={600} at={-1000} /></g>)}
				<circle cx={X(2.03)} cy={SY} r={12} fill={TEAL} stroke={INK} strokeWidth={2} />
				<Sx x={X(2.03)} y={SY - 24} text="2.03" size={28} color={TEAL} anchor="middle" weight={800} at={-1000} />
				{[2.3, 2.31, 2.32].map((p, i) => <circle key={i} cx={X(p)} cy={SY - i * 14} r={9} fill={AMBER} stroke={INK} strokeWidth={2} />)}
			</Fade>
			<Fade at={K17.three}>
				<DrawPath d={`M${X(2.03)},${SY + 66} L${X(2.03)},${SY + 78} L${X(2.31)},${SY + 78} L${X(2.31)},${SY + 66}`} at={K17.three} dur={12} color={AMBER_INK} width={4} />
				<Sx x={(X(2.03) + X(2.31)) / 2} y={SY + 118} text="about 0.3 too high: not accurate" size={32} color={AMBER_INK} anchor="middle" hand weight={700} at={K17.three + 6} />
			</Fade>
			<Fade at={K17.guess - 6}>
				<line x1={GF.x} y1={GF.y + GF.h} x2={GF.x + GF.w} y2={GF.y + GF.h} stroke={INK} strokeWidth={3} />
				<line x1={GF.x} y1={GF.y + GF.h} x2={GF.x} y2={GF.y} stroke={INK} strokeWidth={3} />
				<Sx x={GF.x + GF.w / 2} y={GF.y + GF.h + 34} text="pH" size={24} color={INK} anchor="middle" weight={700} at={-1000} />
			</Fade>
			<CalSeg g={GF} a={2} b={12} at={K17.guess} color={TEAL} />
			<CalSeg g={GF} a={2} b={12} at={K17.guess + 10} color={GLINE} slope={1.6} width={4} />
			{f > K17.guess ? <circle cx={GF.x + (7 / 14) * GF.w} cy={GF.y + GF.h - 0.5 * GF.h} r={10} fill="#6aa3d8" stroke="#2f5d9e" strokeWidth={3} /> : null}
			<Note x={GF.x} y={GF.y - 20} text="one point: slope assumed" size={32} color={INK_SOFT} at={K17.guess + 14} />
			<AChip x={SX} y={800} text="reliable, not accurate; calibrate with pH 4 and 7" size={36} color={TEAL} hand={false} at={K17.calibrate} />
			<MistakeX x={SX} y={900} text="they agree, so they're accurate" at={K17.classic - 20} cross={K17.classic + 10} note="agreement is reliability, not accuracy" size={32} />
			{void K17.sit}{void K17.every}
		</Overlay>
	);
};

// ---------- 18. Decision rule and handoff ----------
const DR = 'decision-rule';
const K18 = cues(sc(DR), {cal: 'calibrate with', rinse: 'rinse and blot', wait: 'wait for a', repeat: 'repeat in', read: 'Then read', step: 'each step', next: 'Next'});
export const SceneDecision: React.FC = () => (
	<>
		<Heading text="Measuring pH you can trust" at={4} size={58} />
		<Overlay>
			<RuleCard x={96} y={210} w={1728} at={K18.cal - 10} lh={86} lines={[
				{t: '1  Calibrate: pH 7, 4, 10 (both sides of 7), same temperature.', at: K18.cal, lit: [K18.cal, K18.rinse], size: 38, hand: false},
				{t: '2  Rinse, blot.', at: K18.rinse, lit: [K18.rinse, K18.wait], size: 38, hand: false},
				{t: '3  Wait for a steady reading.', at: K18.wait, lit: [K18.wait, K18.repeat], size: 38, hand: false},
				{t: '4  Three readings, fresh portions; record the mean.', at: K18.repeat, lit: [K18.repeat, K18.read], size: 38, hand: false},
				{t: '5  Below 7: more H_3O^{+}; above 7: more OH^{−}; each step × 10.', at: K18.read, lit: [K18.read, K18.next], size: 38, hand: false},
			]} />
			<AChip x={96} y={790} text="Next: using pH to compare strong and weak acids and bases" size={38} color={TEAL} hand={false} at={K18.next} />
			<FullMeter x={1350} y={800} h={200} at={K18.next + 6} read={() => ''} />
			{[0, 1].map(i => <LabelBeaker key={i} x={1600 + i * 120} y={880} h={110} at={K18.next + 10 + i * 6} lines={[{t: '0.100 mol/L', at: K18.next + 14 + i * 6}]} size={18} />)}
			{void K18.step}
		</Overlay>
	</>
);

// ---------- 19. Key notes ----------
const NOTES = [
	'Range: 0.010 mol/L HCl, acetic acid, NH_3 and NaOH, plus distilled water; about 20 mL in clean, labelled beakers; fresh portion each reading.',
	'Calibrate the meter with buffers on both sides of 7, as close to the readings as possible (pH 7.00, then 4.00 and 10.00), at the samples\' temperature. The meter draws a straight line through the buffer points, so one buffer is not enough. Rinse with distilled water and blot between samples; bulb fully in; wait for a steady reading; three readings, record the mean.',
	'Example means: HCl 2.03, acetic acid 3.40, distilled water 5.96 (drifting), NH_3 10.59, NaOH 11.96. Below 7: more H_3O^{+} than OH^{−}; above 7: more OH^{−}. Each pH unit is 10 × the H_3O^{+}.',
	'Open distilled water reads below 7: dissolved CO_2 forms carbonic acid, which gives a few H_3O^{+}; few ions make the reading drift. Indicator paper: about whole numbers; a meter: two decimal places, meaningful only if calibrated.',
	'Validity: rinse, fresh portions, labels. Reliability: repeats agree. Accuracy: calibration with buffers either side of 7, close to the readings, same temperature. Risk: dilute solutions below classification limits (glasses still); concentrated stocks corrosive (teacher only); fragile glass bulb (holder, never stir with it).',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={27} aidTop={830} aids={['Calibrate first. Rinse between. Wait for steady.']} tag="one pH step = 10 × the hydronium" />
);
