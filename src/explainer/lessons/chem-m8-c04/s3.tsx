// M8 C04 scenes 14 to 19: two worded attempts (the full question, table and graph arrive at once and stay through the
// countdown), brief feedback with the givens underlined as they are used and one crossed mistake each, the handoff
// (four-row decision card; the calibration practical next) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {AAS, BEAKER, COLM, CUV, FLASK, FURN, FURN_A, NB, UVV, hold, sc} from './common';
import {
	BeakerFill, CAxes, CPts, CRead, CSeg, Detector, Beam, Fade, Framed, HTag, INK, INK_SOFT, KeyNotesBoard, MistakeX, NAVY, PauseHold, PicV, QText, RowCard, SEL, STD, ShrinkAt, Sx, TEAL, TaskLine,
	PBC, PB_INK, WLine, gx, gy, natPt, picWp, qCheck, vis,
} from './parts';
import type {CG, QBlock, QMark} from './parts';

const TAG = 'HSC-style question, written for HSCScience';
const QTag: React.FC = () => <Sx x={1824} y={150} text={TAG} size={28} color={INK_SOFT} anchor="end" hand at={-1000} />;
const Card: React.FC<{h: number}> = ({h}) => <rect x={100} y={185} width={1720} height={h} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />;

// ---------- 14/15. Attempt 1 ----------
const A1 = 'attempt-1';
const K14 = cues(sc(A1), {turn: 'Your turn', pause: 'Pause here'});
const Q1 = (marks: QMark[] = []) => qCheck([
	{text: 'A sample of vineyard runoff is analysed for copper by atomic absorption spectroscopy. The calibration standards gave the results in the table, plotted on the graph. A 10.00 mL portion of the runoff was diluted to 100.0 mL with distilled water, and the diluted solution gave an absorbance of 0.226.', at: 4},
	{text: 'Determine the concentration of copper in the original runoff, in mg/L.', at: 4, para: true, weight: 700},
] as QBlock[], marks);
const G14: CG = {x: 1260, y: 240, w: 500, h: 460, x0: 0, x1: 4.5, y0: 0, y1: 0.4};
const CU_STD: [number, number][] = [[0, 0], [1, 0.09], [2, 0.181], [3, 0.27], [4, 0.361]];
const Table1: React.FC = () => {
	const X = 140, Y = 660, LW = 250, CW = 142, RH = 56;
	const rows: [string, string[]][] = [['copper (mg/L)', ['0.00', '1.00', '2.00', '3.00', '4.00']], ['absorbance', ['0.000', '0.090', '0.181', '0.270', '0.361']]];
	return (
		<g>
			{rows.map(([h, vals], r) => (
				<g key={r}>
					<rect x={X} y={Y + r * RH} width={LW + CW * 5} height={RH} fill={r ? '#fffdf8' : '#f1ebdf'} stroke="rgba(60,45,20,0.3)" strokeWidth={2} />
					<Sx x={X + 16} y={Y + r * RH + 38} text={h} size={30} color={INK} weight={700} at={-1000} />
					{vals.map((v, i) => <Sx key={i} x={X + LW + CW * i + CW / 2} y={Y + r * RH + 38} text={v} size={30} color={INK} anchor="middle" weight={600} at={-1000} />)}
				</g>
			))}
			{[0, 1, 2, 3, 4].map(i => <line key={i} x1={X + LW + CW * i} x2={X + LW + CW * i} y1={Y} y2={Y + 2 * RH} stroke="rgba(60,45,20,0.3)" strokeWidth={2} />)}
		</g>
	);
};
const Question1: React.FC<{marks?: QMark[]}> = ({marks}) => (
	<>
		<Card h={650} />
		<QText q={Q1(marks)} x={140} y={250} w={1000} size={33} card={false} />
		<Table1 />
		<CAxes g={G14} at={-1000} xLabel="Cu (mg/L)" yLabel="absorbance" xTicks={[0, 1, 2, 3, 4]} yTicks={[0, 0.1, 0.2, 0.3, 0.4]} fy={n => n.toFixed(1)} grid={{dx: 0.5, dy: 0.05}} size={28} card={false} />
		<CSeg g={G14} a={[0, 0]} b={[4.4, 0.0902 * 4.4]} at={-1000} color={STD} width={4} />
		<CPts g={G14} pts={CU_STD.map(([x, y]) => ({x, y, at: -1000}))} r={9} />
	</>
);
export const SceneAttempt1: React.FC = () => (
	<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
		<TaskLine text="Your turn" at={0} />
		<QTag />
		<Question1 />
		<PicV p={AAS} x={1500} y={870} h={150} />
		<PauseHold h={hold(A1)} at={K14.pause} x={140} y={930} cx={1050} cy={900} />
	</svg>
);
const F1 = 'feedback-1';
const K15 = cues(sc(F1), {read: 'Read point', across: 'across', down: 'down', about: 'about two', l1: 'litre', diluted: "That's the", runoff: 'The runoff', tenfold: 'tenfold', mult: 'multiply by', tf: 'twenty five', l2: ['litre', 2], stop: 'Stopping', slip: 'slip'});
export const SceneFeedback1: React.FC = () => (
	<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
		<TaskLine text="Your turn" at={-1000} />
		<QTag />
		<Question1 marks={[
			{phrase: 'an absorbance of 0.226.', at: K15.read + 4, color: SEL},
			{phrase: 'A 10.00 mL portion of the runoff was diluted to 100.0 mL', at: K15.runoff, color: NAVY},
			{phrase: 'concentration of copper in the original runoff,', at: K15.mult, color: TEAL},
		]} />
		<CRead g={G14} a={0.226} c={2.51} at={K15.across - 10} downAt={K15.down} value="about 2.5" size={30} />
		<WLine x={140} y={880} size={38} items={[{t: `diluted: about 2.5${NB}mg/L`, at: K15.about}, {t: '(0.226 ÷ 0.0902 = 2.51)', at: K15.about + 20, color: INK_SOFT}]} />
		<WLine x={140} y={948} size={38} items={[{t: 'dilution factor = 100.0 ÷ 10.00 =', at: K15.runoff}, {t: '10.0', at: K15.tenfold, color: TEAL}]} />
		<Framed x={140} y={1030} text={`original: 2.51 × 10.0 ≈ 25${NB}mg/L`} at={K15.tf - 6} size={42} color={STD} />
		<MistakeX x={1220} y={880} text={`2.5${NB}mg/L`} at={K15.stop} cross={K15.slip} note="the diluted value: multiply back" size={36} />
		{void K15.l1}{void K15.diluted}{void K15.l2}
	</svg>
);

// ---------- 16/17. Attempt 2 ----------
const A2 = 'attempt-2';
const K16 = cues(sc(A2), {last: 'Last one', pause: 'Pause here'});
const Q2 = (marks: QMark[] = []) => qCheck([
	{text: 'A laboratory receives two samples:', at: 4},
	{text: '(a) a deep blue solution of the copper(II) ammonia complex, expected to be about 0.02 mol/L;', at: 4, para: true},
	{text: '(b) a tap water sample to be checked for traces of lead, expected to be below 0.01 mg/L.', at: 4, para: true},
	{text: 'For each sample, choose colourimetry, UV-visible spectrophotometry or atomic absorption spectroscopy, and justify your choice.', at: 4, para: true, weight: 700},
] as QBlock[], marks);
const Question2: React.FC<{marks?: QMark[]}> = ({marks}) => (
	<>
		<Card h={640} />
		<QText q={Q2(marks)} x={140} y={270} w={1060} size={40} card={false} />
	</>
);
export const SceneAttempt2: React.FC = () => (
	<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
		<TaskLine text="Last one" at={0} />
		<QTag />
		<Question2 />
		<PicV p={CUV.deep} x={1330} y={290} h={420} />
		<PicV p={BEAKER} x={1500} y={430} h={280} />
		<BeakerFill x={1500} y={430} h={280} />
		<HTag x={1385} y={760} text="(a)" size={36} color={INK_SOFT} anchor="middle" at={-1000} />
		<HTag x={1620} y={760} text="(b)" size={36} color={INK_SOFT} anchor="middle" at={-1000} />
		<PauseHold h={hold(A2)} at={K16.pause} x={140} y={930} cx={1050} cy={900} />
	</svg>
);
const F2 = 'feedback-2';
const K17 = cues(sc(F2), {copper: 'For the copper', coloured: 'strongly coloured', max: 'max', trace: 'For trace', furnace: 'furnace measures', lower: 'far lower', saying: 'Saying', trap: 'trap', free: 'free atoms'});
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	const FZ = {x: 1180, y: 250, h: 140};
	const [, fby] = natPt(FURN, FZ.x, FZ.y, FZ.h, 0, FURN_A.axis);
	const [tx0] = natPt(FURN, FZ.x, FZ.y, FZ.h, FURN_A.x0, 0);
	const [tx1] = natPt(FURN, FZ.x, FZ.y, FZ.h, FURN_A.x1, 0);
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="Last one" at={-1000} />
			<ShrinkAt cx={100} cy={185} k={0.62} at={K17.max - 24}>
				<Question2 marks={[
					{phrase: '(a) a deep blue solution', at: K17.max, color: '#2f6fd0'},
					{phrase: 'traces of lead, expected to be below 0.01 mg/L.', at: K17.trace, color: SEL},
				]} />
			</ShrinkAt>
			<PicV p={COLM} x={1240} y={460} h={150} at={K17.max - 10} />
			<Fade at={-100} out={K17.max - 20}>
				<PicV p={CUV.deep} x={1330} y={290} h={420} />
				<PicV p={BEAKER} x={1500} y={430} h={280} />
				<BeakerFill x={1500} y={430} h={280} />
				<HTag x={1385} y={760} text="(a)" size={36} color={INK_SOFT} anchor="middle" at={-1000} />
				<HTag x={1620} y={760} text="(b)" size={36} color={INK_SOFT} anchor="middle" at={-1000} />
			</Fade>
			<Sx x={140} y={670} text="(a) colourimetry or UV-visible: coloured, absorbs visible light;" size={36} color={INK} weight={600} at={K17.max} />
			<Sx x={140} y={718} text={`λmax about 600${NB}nm (or an orange filter), with a calibration`} size={36} color={INK} weight={600} at={K17.max + 10} />
			<Sx x={140} y={810} text="(b) graphite-furnace AAS: Pb^{2+} colourless;" size={40} color={SEL} weight={700} at={K17.trace} />
			<Sx x={140} y={862} text="the furnace measures far lower levels than a flame" size={40} color={SEL} weight={700} at={K17.furnace} />
			<Fade at={K17.furnace - 6}>
				<PicV p={FURN} x={FZ.x} y={FZ.y} h={FZ.h} />
				<Beam x0={FZ.x - 30} x1={FZ.x + 520} y={fby} at={K17.furnace} split={(tx0 + tx1) / 2} thin={fr => 1 - 0.55 * prog(fr, K17.lower, 20)} h={14} />
				{[0.4, 0.5, 0.6].map((u, i) => <circle key={i} cx={tx0 + (tx1 - tx0) * u} cy={fby + (i % 2 ? 10 : -10)} r={11} fill={PBC} stroke={PB_INK} strokeWidth={2} opacity={vis(f, K17.furnace + 10 + i * 4)} />)}
				<Detector x={FZ.x + 525} y={fby} at={K17.furnace} w={84} text={() => 'A'} />
				<HTag x={FZ.x} y={FZ.y + FZ.h + 26} text="lamp beam through the hot tube" size={28} color={INK_SOFT} at={K17.furnace} />
			</Fade>
			<MistakeX x={140} y={900} text="AAS detects the lead ions in the water" at={K17.saying} cross={K17.trap} note="it measures free atoms" size={34} />
			{void K17.copper}{void K17.coloured}{void K17.free}
		</svg>
	);
};

// ---------- 18. Handoff ----------
const K18 = cues(sc('handoff'), {so: 'So', pick: 'pick a', calib: 'calibrate', read: 'read inside', correct: 'correct for', next: 'Next', build: 'build a'});
export const SceneHandoff: React.FC = () => {
	const f = useCurrentFrame();
	const rows: [string, string, number][] = [
		['Choose', 'coloured → colourimetry or UV-visible (λmax); trace metal → AAS', K18.pick],
		['Calibrate', 'blank + standards, line of best fit', K18.calib],
		['Read', 'across, then down, inside the standards', K18.read],
		['Correct', '× dilution factor', K18.correct],
	];
	const out = vis(f, -1000, K18.next, 14);
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="Measuring concentration with light" at={0} />
			{rows.map(([t, b, a], i) => <RowCard key={t} x={96} y={200 + i * 200} w={1120} h={170} title={t} body={b} at={4 + i * 6} lit={a} color={i === 3 ? TEAL : STD} size={35} />)}
			<g opacity={out}>
				<PicV p={COLM} x={1300} y={220} h={210} />
				<PicV p={UVV} x={1540} y={230} h={200} />
				<PicV p={AAS} x={1300} y={520} h={250} />
			</g>
			{[0, 1, 2, 3, 4].map(i => <PicV key={i} p={FLASK} x={1280 + i * 108} y={260} h={260} at={K18.next + i * 5} />)}
			<PicV p={CUV.pale} x={1500} y={580} h={220} at={K18.build} />
			<HTag x={1532} y={850} text="unknown" size={30} color={INK_SOFT} anchor="middle" at={K18.build} />
			<Fade at={K18.next}>
				<rect x={1250} y={900} width={600} height={80} rx={40} fill="#fffdf8" stroke={TEAL} strokeWidth={4} />
				<Sx x={1550} y={952} text="Next: building a calibration (practical)" size={30} color={TEAL} anchor="middle" weight={700} at={-1000} />
			</Fade>
			{void K18.so}{void picWp}{void gx}{void gy}
		</svg>
	);
};

// ---------- 19. Key notes ----------
const NOTES = [
	'Measure with the colour a species absorbs (copper(II): red or orange filter).',
	'UV-visible: one wavelength, measured at λmax, the peak of the spectrum.',
	'c = A ÷ (εl). Excess NH_3 makes Cu^{2+} absorb more strongly.',
	'AAS: a lamp of the element; atoms in the flame absorb its light.',
	'Read across, then down, inside the standards. Too high: dilute, × dilution factor.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={44} aidTop={600} aids={['Across, then down, inside the standards, × dilution factor.', "AAS: the lamp is made of the element you're testing."]} tag="measure with the colour it absorbs, not the colour you see" />
);
void INK;
