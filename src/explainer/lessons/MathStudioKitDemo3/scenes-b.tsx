// MathStudioKitDemo3, scenes 19 to 29: kit pass 2B finance, trig, log-scale and practice parts (f09 to f15, t01 to
// t04, g01 to g03) on the designs' own numbers with reused plates or coded stand-ins. Not a lesson.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	COS_FAMILY, Card, CardTitle, CalendarDeposits, DecisionTree, DepositTower, FunctionSimulator, GoalMeter, HandTag, LiveReadoutBoard, LoanBalanceBar, LoanDialGraph,
	MATHS_KIT2B_ANCHORS, MATHS_KIT2B_PLATES, MATHS_KIT2_PLATES, PlateFields, RotatingPlate, SceneHeading, ScreenApp, StepRatioSlider, StudioFeatureMarks,
	StudioLevelLine, StudioLogAxisMorph, StudioPlot, StudioTransformPanel, StudioWindowMap, TangentPlate, TargetDial,
	annuityFV, fmtMoney, fmtNum, fnPath, kf, loanBalance, loanBarState, loanPresentValue, makePlot, piLabel, piTicks, screenAngle,
} from '../../math/studio';
import type {FnFamily} from '../../math/studio';
import {FONT_DISPLAY, INK, prog} from '../../kit';

const P = MATHS_KIT2B_PLATES, A = MATHS_KIT2B_ANCHORS, K = MATHS_KIT2_PLATES;

// 19. LoanBalanceBar (f09's car loan, with the interest-free ghost), PlateFields on the laptop, TargetDial.
const S19: React.FC = () => {
	const f = useCurrentFrame();
	const t = kf(f, [[10, 0], [200, 4.6]]);
	const st = loanBarState(30000, 0.006, 600, t);
	return (
		<>
			<SceneHeading text="Loan balance bar, statement fields and a target dial" />
			<LoanBalanceBar x={170} y={190} width={150} height={680} max={32000} P={30000} r={0.006} M={600} t={t} ghost={{label: 'no interest'}} label="balance" readout={{x: 720, y: 170, width: 560}} />
			<PlateFields plate={K.laptop} x={720} y={540} w={560} dark fields={[
				{rect: [420, 200, 1380, 300], label: 'Loan', value: '$30,000'},
				{rect: [420, 320, 1380, 420], label: 'Month', value: String(st.month + 1)},
				{rect: [420, 440, 1380, 540], label: 'Interest added', value: fmtMoney(st.interest, 2), role: 'interest'},
				{rect: [420, 560, 1380, 660], label: 'Paid off after', value: '?', question: true},
			]} />
			<TargetDial cx={1580} cy={520} r={190} min={0} max={1000} value={kf(f, [[20, 0], [180, 374.81]])} target={600} label="final repayment" valueText={v => fmtMoney(v, 2)} role="repay" ticks={[{value: 0, label: '$0'}, {value: 500, label: '$500'}, {value: 1000, label: '$1,000'}]} />
		</>
	);
};

// 20. ScreenApp on the reused phone, explorer and goal modes, and the GoalMeter (f15's holiday fund).
const S20: React.FC = () => {
	const f = useCurrentFrame();
	const M = kf(f, [[20, 300], [160, 450]]);
	const bal = annuityFV(M, 0.004, 60);
	return (
		<>
			<SceneHeading text="An app on the phone's screen, and a goal meter" />
			<ScreenApp plate={P.phone} x={100} y={150} w={400} screen={A.phoneScreen} title="Savings" controls={[
				{label: 'Start', value: '$0', frac: 0, role: 'start'},
				{label: 'Deposit', value: fmtMoney(M), frac: M / 600, role: 'deposit', glow: true},
				{label: 'Rate', value: '4.8% p.a.', frac: 0.48, role: 'interest'},
				{label: 'Years', value: '5', frac: 0.25},
			]} readouts={[{label: 'Balance', value: fmtMoney(bal, 2)}, {label: 'Put in', value: fmtMoney(M * 60), role: 'deposit'}]} graph={{fn: m => annuityFV(M, 0.004, m), ghost: m => annuityFV(300, 0.004, m), xMax: 60, yMax: 32000}} />
			<ScreenApp plate={P.phone} x={540} y={150} w={400} screen={A.phoneScreen} title="Holiday goal" mode="goal" controls={[
				{label: 'Goal', value: '$6,000', frac: 0.6},
				{label: 'In', value: '2 years', frac: 0.4},
				{label: 'Rate', value: '6% p.a.', frac: 0.6, role: 'interest'},
				{label: 'Deposit', value: '', frac: 0, role: 'deposit', question: true},
			]} readouts={[{label: 'Balance', value: '$6,000'}]} graph={{fn: m => annuityFV(235.93, 0.005, m), xMax: 24, yMax: 7000, goal: 6000, upTo: 24 * prog(f, 20, 140)}} />
			<GoalMeter x={1010} y={190} width={150} height={680} goal={6000} M={235.92} r={0.005} t={kf(f, [[10, 0], [190, 24]])} max={6600} magnifier={{cx: 1580, cy: 680, R: 120, at: 192}} readout={{x: 1430, y: 170, width: 460}} />
		</>
	);
};

// 21. CalendarDeposits (f12) and the DepositTower (f13) merging into one column.
const S21: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<SceneHeading text="Deposit calendar stamps, and the deposit tower" />
			<CalendarDeposits x={96} y={190} w={640} t={kf(f, [[10, 0], [200, 2.8]], false)} r={0.005} M={200} />
			<DepositTower x={820} y={190} width={1050} height={460} M={200} r={0.005} t={kf(f, [[10, 0], [120, 60]])} maxMonths={60} max={300} mergeMax={14500} merge={prog(f, 205, 30)} label="month 1 → 60" readout={{x: 820, y: 720, width: 600}} />
			<HandTag x={1460} y={760} text="first in earns the most" role="interest" at={120} size={40} />
		</>
	);
};

// 22. LoanDialGraph (g03 W1: the P dial) and the StepRatioSlider (t04 decibels).
const PV = loanPresentValue(2800, 0.005, 300);
const S22: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<SceneHeading text="Loan graph with a P dial; step slider and ratio" />
			<LoanDialGraph x={40} y={150} width={1020} height={620} P={kf(f, [[20, 600000], [80, 330000], [150, PV]])} r={0.005} M={2800} N={300} yMax={650000} xTicks={[100, 200, 300]} yTicks={[200000, 400000, 600000].map(v => ({value: v, label: `${v / 1000}k`}))}
				slider={{x: 90, y: 810, width: 480, min: 300000, max: 650000, ticks: [{value: 300000, label: '300k'}, {value: 650000, label: '650k'}]}} />
			<LiveReadoutBoard x={1110} y={170} width={560} inline rows={[{label: 'loan P', value: 0, text: fmtMoney(kf(f, [[20, 600000], [80, 330000], [150, PV]])), role: 'start'}, {label: 'after 300 months', value: 0, text: fmtMoney(loanBalance(kf(f, [[20, 600000], [80, 330000], [150, PV]]), 0.005, 2800, 300), 2)}]} />
			<StepRatioSlider x={1110} y={420} width={380} step={kf(f, [[20, 0], [170, 30]])} min={0} max={40} ticks={[0, 10, 20, 30, 40].map(v => ({value: v, label: String(v)}))} per={10} symbol="dB" ratioLabel="intensity" hops={{x: 1110, y: 720}} />
		</>
	);
};

// 23. StudioTransformPanel: four dials (k amber, a blue, b teal, c violet) and the feature readout.
const S23: React.FC = () => (
	<>
		<SceneHeading text="Transform panel: y = k cos(a(x + b)) + c" />
		<StudioTransformPanel x={30} y={150} width={1110} height={680} window={{x: [-0.5, 2 * Math.PI + 0.5], y: [-2.6, 3.6]}} xTicks={piTicks(0, 2, 2)} yTicks={[-2, -1, 1, 2, 3]}
			keys={[{frame: 20, k: 1}, {frame: 60, k: 2}, {frame: 70, c: 0}, {frame: 110, c: 1}, {frame: 120, a: 1}, {frame: 160, a: 2}, {frame: 165, b: 0}, {frame: 195, b: -Math.PI / 3}]}
			glow={[{param: 'k', from: 20, to: 65}, {param: 'c', from: 70, to: 115}, {param: 'a', from: 120, to: 165}, {param: 'b', from: 165}]}
			sliders={{x: 1180, y: 160, width: 330, gap: 108}} readout={{x: 1200, y: 630, width: 640, rows: ['amplitude', 'period', 'shift', 'midline']}}
			rider={[{frame: 10, x: 0}, {frame: 230, x: 2 * Math.PI}]} />
	</>
);

// 24. FunctionSimulator draw-as-you-go with StudioFeatureMarks; moving asymptotes on tan (a from 1 to 2).
const TAN: FnFamily = {f: u => Math.tan(u), df: u => 1 / Math.cos(u) ** 2, excluded: [-1.5 * Math.PI, -Math.PI / 2, Math.PI / 2, 1.5 * Math.PI, 2.5 * Math.PI]};
const S24: React.FC = () => {
	const f = useCurrentFrame();
	const a = kf(f, [[30, 1], [170, 2]]);
	return (
		<>
			<SceneHeading text="Draw as you go with feature marks; asymptotes that move" />
			<FunctionSimulator x={30} y={160} width={920} height={560} window={{x: [-0.4, 4 * Math.PI + 0.4], y: [-1.7, 1.9]}} family={COS_FAMILY} timeline={[{frame: 10, x: 0}, {frame: 220, x: 4 * Math.PI}]} xTicks={piTicks(0, 4, 1)} yTicks={[-1, 1]}
				point={{at: 0}} drawAsYouGo={{from: 0}} xLabel="time (s)" yLabel="height (m)"
				overlay={g => <StudioFeatureMarks toFrame={g.toFrame} params={{k: 1, a: 1, b: 0, c: 0}} xRange={[0, 4 * Math.PI]} ampX={2 * Math.PI} periodFrom={0} show={{midline: 40, amplitude: 70, period: 100}} />} />
			<FunctionSimulator x={980} y={160} width={910} height={560} window={{x: [-Math.PI, Math.PI], y: [-4, 4]}} family={TAN} timeline={[{frame: 0, x: 0.4, xScale: 1}, {frame: 30, xScale: 1}, {frame: 170, xScale: 0.5}]} xTicks={piTicks(-1, 1, 4)} yTicks={[-2, 2]}
				movingAsymptotes={{base: [-1.5 * Math.PI, -Math.PI / 2, Math.PI / 2, 1.5 * Math.PI]}} branchSafe={{}} point={{at: 0}} />
			<LiveReadoutBoard x={1060} y={760} width={560} inline rows={[{label: 'a', value: a, digits: 2, role: 'a'}, {label: 'period π/a', value: Math.PI / a, text: piLabel(Math.PI / a), role: 'a'}]} />
			<HandTag x={120} y={800} text="the pen draws the height" role="k" at={60} size={40} />
		</>
	);
};

// 25. StudioLevelLine: D = 12 + 2 sin(x − π/6) on [0, 2π], the level sweeping to 11 (three crossings at the ends).
const D = (x: number) => 12 + 2 * Math.sin(x - Math.PI / 6);
const S25: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<SceneHeading text="Level line with a crossing counter" />
			<StudioLevelLine x={40} y={150} width={1200} height={720} window={{x: [-0.3, 2 * Math.PI + 0.3], y: [9, 15]}} fn={D} domain={[0, 2 * Math.PI]} level={kf(f, [[20, 13], [80, 14], [100, 14], [150, 14.5], [190, 11]])}
				xTicks={piTicks(0, 2, 2)} yTicks={[10, 11, 12, 13, 14]} xLabel="x (one year)" yLabel="daylight D (h)" levelLabel={L => `D = ${fmtNum(L, 1)}`} counter={{x: 1320, y: 200, label: 'days with this daylight'}} />
			<HandTag x={1320} y={480} text="both ends are the same date" role="k" at={120} size={40} />
		</>
	);
};

// 26. StudioWindowMap (slide into the u-window and back) and StudioLogAxisMorph (phone storage).
const S26: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<SceneHeading text="Window map, and a linear axis turning logarithmic" />
			<StudioWindowMap x={130} y={330} width={1660} range={[-1, 7]} domain={[0, 2 * Math.PI]} a={1} b={-Math.PI / 6} p={prog(f, 20, 70)} back={prog(f, 120, 50)} dots={[Math.PI / 6, (5 * Math.PI) / 6]} ticks={piTicks(0, 2, 2)} />
			<StudioLogAxisMorph x={150} y={790} width={1620} linMax={256e9} decades={[3, 12]} p={prog(f, 40, 120)}
				points={[{value: 1e3, label: 'text'}, {value: 3e6, label: 'photo'}, {value: 4e9, label: 'film'}, {value: 256e9, label: 'phone', role: 'k'}]}
				linearTicks={[0, 50e9, 100e9, 150e9, 200e9, 250e9].map(v => ({value: v, label: v ? `${v / 1e9} GB` : '0'}))} decadeEvery={3} marks={[{e: 3, label: 'kB'}, {e: 6, label: 'MB'}, {e: 9, label: 'GB'}, {e: 12, label: 'TB'}]} />
		</>
	);
};

// 27. RotatingPlate projector mode: d05's wheel draws its own height graph.
const HUB_Y = 520, R = 250;
const S27: React.FC = () => {
	const f = useCurrentFrame();
	const t = kf(f, [[10, 0], [230, 60]], false), ang = (2 * Math.PI * t) / 60;
	const m = makePlot(760, HUB_Y - 348, 1100, 720, {x: [0, 60], y: [0, 24]});
	const h = (s: number) => 12 - 10 * Math.cos((2 * Math.PI * s) / 60);
	const [gx] = m.pf(t, h(t));
	const s = R / A.ferrisBracketR;
	return (
		<>
			<SceneHeading text="Projector mode: the wheel draws its height graph" />
			<RotatingPlate plate={P.ferrisRim} pivot={[A.ferrisHub[0], A.ferrisHub[1]]} cx={380} cy={HUB_Y} w={(P.ferrisRim.box[2] - P.ferrisRim.box[0]) * s} angle={ang}
				sprites={[{plate: P.ferrisGondolaMarked, attach: {angle: -Math.PI / 2, r: A.ferrisBracketR}, hang: [A.ferrisGondolaPivot[0], A.ferrisGondolaPivot[1]], w: 0.3 * R}]}
				projector={{toX: gx, at: 10}} />
			<StudioPlot x={760} y={HUB_Y - 348} width={1100} height={720} window={{x: [0, 60], y: [0, 24]}} xTicks={[15, 30, 45, 60]} yTicks={[2, 12, 22]} xLabel="time (s)" yLabel="height (m)">
				{mm => <path d={fnPath(mm, h, 0, Math.max(0.01, t))} stroke={INK} strokeWidth={7} fill="none" />}
			</StudioPlot>
		</>
	);
};

// 28. DecisionTree (g01): branches light as the givens are read and their results drop onto the board.
const S28: React.FC = () => (
	<>
		<SceneHeading text="Decision tree: branches light as the givens are read" />
		<DecisionTree x={110} y={180} boardY={620} nodes={[
			{question: 'Last step?', branches: [{label: 'product'}, {label: 'quotient'}, {label: 'chain'}, {label: 'term by term', litAt: 40, result: 'term by term'}]},
			{question: 'Domain?', branches: [{label: 'ln: inside > 0', litAt: 90, result: 'x > 0'}, {label: 'fraction'}, {label: 'tan'}]},
			{question: 'Demand?', branches: [{label: 'given gradient', litAt: 140, result: "f′(x) = 4"}, {label: 'outside point'}, {label: 'stationary point'}]},
		]} />
	</>
);

// 29. TangentPlate: d15's skateboard laid along the tangent of y = x² − 6 ln x where the gradient reaches 4.
const BOWL: FnFamily = {f: x => x * x - 6 * Math.log(x), df: x => 2 * x - 6 / x, domain: [{from: 0, to: Infinity}]};
const S29: React.FC = () => (
	<>
		<SceneHeading text="A plate laid along the tangent" />
		<FunctionSimulator x={60} y={150} width={1150} height={760} window={{x: [0, 5], y: [-1, 11]}} family={BOWL} timeline={[{frame: 10, x: 1}, {frame: 150, x: 3}]} xTicks={[1, 2, 3, 4]} yTicks={[2, 4, 6, 8, 10]}
			point={{at: 0}} tangent={{at: 0, halfLength: 320}}
			onPoint={g => <TangentPlate plate={K.skateboard} point={g.pt} angle={screenAngle(g.toFrame, g.s.X, g.s.Y, g.s.slope)} w={300} contact={[A.skateboardContact[0], A.skateboardContact[1]]} />}
			readout={{x: 1280, y: 200, width: 520, rows: [{label: 'x', value: s => s.X, digits: 2, role: 'a'}, {label: 'gradient 2x − 6/x', value: s => s.slope, digits: 2, role: 'gradient'}]}} />
		<Card x={1280} y={460} w={560} at={0}><CardTitle>Task</CardTitle><div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 40, color: INK, lineHeight: 1.25}}>y = x² − 6 ln x. Where is the gradient 4?</div></Card>
		<HandTag x={1290} y={760} text="the board lies flat on the slope" role="gradient" at={10} size={40} />
		<HandTag x={1290} y={840} text="gradient 4 at x = 3" role="answer" at={160} size={40} />
	</>
);

export const SCENES_B: Record<string, React.FC> = {
	'loan-bar': S19, 'screen-app-goal': S20, 'calendar-tower': S21, 'p-dial-step': S22, 'transform-panel': S23, 'draw-asymptotes': S24, 'level-line': S25,
	'window-log': S26, projector: S27, 'decision-tree': S28, 'tangent-plate': S29,
};
export const PLATES_B = [K.laptop, P.phone, P.ferrisRim, P.ferrisGondolaMarked, K.skateboard];
