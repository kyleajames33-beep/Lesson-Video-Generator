// MathStudioKitDemo2, scenes 17 to 33: kit pass 2A parts for i10 to i14 and f01 to f08, and the build-agent
// fixes (ringFrom, multiplyOpacity, HandText maxWidth, ScreenCounter fit, FunctionSimulator options).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_DISPLAY, HandText, INK} from '../../kit';
import {
	BigNumberCard, BoardGrid, BounceRig, ConstantFamilySlider, ConvergenceStrip, FoldLayers, FunctionSimulator, GrowingPlate, HandTag, LiveReadoutBoard, LogRuler,
	MATHS_KIT2_PLATES, MATHS_SHARED_ANCHORS, MATHS_SHARED_PLATES, PairingRectangle, ParameterSlider, PeriodTimeline, PlateReadout, QuestionCard,
	SceneHeading, ScreenCounter, ShiftCancelRows, SpriteField, SpriteStack, StepCounter, StudioAreaFlip, StudioCoefficientLedger,
	StudioHorizontalStrips, StudioParticleTrack, StudioPartialSumStack, StudioSigmaBuilder, StudioSwapReflection, StudioSymmetryPairs, StudioTermLadder,
	StudioToolPanel, StudioUnitProduct, TermPlot, TripSim, bounceAt, constantThroughPoint, fmtBig, fmtBigInt, fmtSci, insideFade, kf,
} from '../../math/studio';
import type {ShiftTerm} from '../../math/studio';

const K = MATHS_KIT2_PLATES, P = MATHS_SHARED_PLATES;
const ticks = (vs: number[], f: (v: number) => string = v => String(v)) => vs.map(v => ({value: v, label: f(v)}));

// 17. AreaFlip (x-axis) and HorizontalStrips (rising layers, splits).
const S17: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<SceneHeading text="Area flip, and horizontal strips rising in layers" />
			<StudioAreaFlip x={30} y={150} width={900} height={800} window={{x: [-0.5, 3.5], y: [-4.5, 4.5]}} fn={x => x * x - 4} a={0} b={2} flipAt={90} label={{at: [1, -1.7], before: '−16/3', after: '16/3'}} yTicks={[-4, -2, 2, 4]} />
			<HandTag x={140} y={990} text="area is positive: flip it up" role="k" at={130} size={42} />
			<StudioHorizontalStrips x={970} y={150} width={900} height={800} window={{x: [-0.3, 4.6], y: [-0.3, 4.4]}} g={y => (y * y) / 4} c={0} d={4}
				nKeys={[{frame: 0, value: 2}, {frame: 70, value: 4}, {frame: 130, value: 8}]} level={kf(f, [[10, 0.2], [200, 4]])} xLabel="x" yLabel="y" yTicks={[1, 2, 3, 4]}
				readout={{x: 1480, y: 620, width: 380, label: 'Σ g(y)Δy', digits: 3}} />
		</>
	);
};

// 18. Swap reflection (y = x) and odd symmetry pairs with a slice transfer.
const S18: React.FC = () => (
	<>
		<SceneHeading text="Swapping x and y, and odd symmetry pairs" />
		<StudioSwapReflection x={20} y={150} width={820} height={820} window={{x: [-0.5, 3.5], y: [-0.5, 3.534]}} mirrorAt={10} swapAt={70} dur={70}
			elements={[{kind: 'fill', fn: Math.exp, a: 0, b: 1, color: '#d6eeee'}, {kind: 'curve', fn: Math.exp, domain: [-0.5, 1.3]}, {kind: 'label', X: 1.55, Y: 3.2, text: 'y = eˣ'}, {kind: 'point', X: 0, Y: 1}]} />
		<StudioSymmetryPairs fn={x => x ** 3 - 3 * x} h={2} mode="odd" turnAt={30} dur={60} plot={{x: 860, y: 150, width: 720, height: 800, window: {x: [-2.4, 2.4], y: [-3, 3]}, yTicks: [-2, 2]}}
pairs={[{x: 0.25, at: 110, width: 0.3}, {x: 1.45, at: 140, width: 0.3}]} transfer={{x: 0.85, at: 165, width: 0.3}} readout={{x: 1600, y: 200, width: 290}} />
	</>
);

// 19. Coefficient ledger, tool panel (no output during a hold) and unit products (one crossed).
const S19: React.FC = () => (
	<>
		<SceneHeading text="Trapezium ledger, tool panel and unit products" />
		<StudioCoefficientLedger x={120} y={250} labels={['y₀', 'y₁', 'y₂', 'y₃', 'y₄']} addAt={[20, 50, 80, 110]} colW={170} />
		<StudioToolPanel x={1080} y={170} w={760} input="∫ e^(−x²) dx, 0 to 2" output="0.882" typeAt={20} outputAt={150} holds={[[60, 100]]} />
		<StudioUnitProduct x={120} y={560} height={{value: '3', unit: 'kW', role: 'k'}} width={{value: '0.5', unit: 'h', role: 'b'}} product={{value: '1.5', unit: 'kWh', role: 'answer'}} at={30} />
		<StudioUnitProduct x={120} y={800} height={{value: '$4', unit: 'per item'}} width={{value: '3', unit: 'h'}} product={{value: '$12', unit: 'item·h'}} at={90} crossed={{at: 150, caption: 'units do not match'}} />
	</>
);

// 20. Particle track with a plate sprite on a tiled floor, and the constant-family slider.
const S20: React.FC = () => {
	const f = useCurrentFrame();
	const pos = (fr: number) => 20 + 16 * Math.sin((fr - 10) / 45);
	const vel = (fr: number) => (16 / 45) * Math.cos((fr - 10) / 45) * 30;
	const g = (t: number) => t ** 3 - 2 * t * t;
	const Cend = constantThroughPoint(g, {x: 1, y: 3});
	const C = kf(f, [[60, 6.5], [170, Cend]]);
	return (
		<>
			<SceneHeading text="Robot on a hallway track, and a family of constants" />
			<StudioParticleTrack x={120} y={440} width={1680} range={[-2, 42]} position={pos} velocity={vel} arrowScale={9} sprite={{plate: K.robotVacuum, w: 150, lift: 20}} floor={{plate: K.hallwayFloor, h: 210, y: 220}}
				ticks={ticks([0, 10, 20, 30, 40])} unit="cm" rests={[{x: 20, at: 0, label: 'start'}]} trail={{from: 10, every: 8}} />
			<ConstantFamilySlider x={30} y={540} width={1000} height={520} window={{x: [-0.3, 3.3], y: [-2.5, 12]}} g={g} constants={[-2, 0, 2, 6]} C={C} point={{x: 1, y: 3, label: '(1, 3)'}} markerX={1}
				label={c => `v = t³ − 2t² + ${c.toFixed(1)}`} xTicks={[1, 2, 3]} yTicks={[4, 8]} />
			<ParameterSlider x={1080} y={690} width={420} symbol="C" role="k" value={C} min={0} max={8} ticks={ticks([0, 4, 8])} />
			<LiveReadoutBoard x={1240} y={830} width={600} inline rows={[{label: 'x', value: pos(f), digits: 1, unit: 'cm', role: 'a'}, {label: 'v', value: vel(f), digits: 1, unit: 'cm/s', role: 'b'}]} />
		</>
	);
};

// 21. TripSim reverse with odometer, and a flip-mode plate readout.
const S21: React.FC = () => {
	const f = useCurrentFrame();
	const sched = [{frame: 0, speed: 60}, {frame: 80, speed: 0}, {frame: 110, speed: -60}, {frame: 190, speed: 0}];
	const step = Math.min(4, Math.floor(f / 40));
	return (
		<>
			<SceneHeading text="A trip that reverses: displacement against odometer" />
			<TripSim schedule={sched} hoursPerFrame={1 / 60} road={{x: 60, y: 200, w: 1100, h: 300, pxPerKm: 12}} car={{plate: P.car, x: 420, y: 250, w: 320}} readout={{x: 1220, y: 200, width: 620, mode: 'displacement'}} />
			<HandTag x={140} y={580} text="back the same way: displacement 0, odometer 160 km" role="k" at={190} size={42} />
			<PlateReadout plate={P.soundMeter} x={160} y={660} w={760} region={MATHS_SHARED_ANCHORS.soundMeterDisplay} value={String(step * 25)} flipAt={[40, 80, 120, 160]} />
			<HandTag x={980} y={800} text="flip mode: the panel turns over on each change" role="a" at={40} size={40} />
		</>
	);
};

// 22. SpriteStack: nested copies with a ghost crossed and a pull-back, and pyramid mode with glow, labels and tint.
const S22: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<SceneHeading text="Sprite stacks: nesting with a ghost, and a pyramid" />
<SpriteStack plate={K.crate} x={420} y={980} w={330} offsets={[[0, 0], [0, -70], [0, -140], [0, -210]]} count={kf(f, [[10, 1], [120, 4]], false)} scale={kf(f, [[150, 1], [200, 0.85]])} ghost={{at: 130, crossAt: 180}} />
<HandTag x={140} y={300} text="each copy sits 70 px higher" role="k" at={60} size={42} />
			<SpriteStack plate={K.tennisBall} x={1320} y={980} w={120} pyramid={{rows: 5, labels: r => `${r}`, labelSide: 'left', glow: {row: 3, at: 120}}} count={kf(f, [[10, 0], [150, 15]], false)} tint={{copies: [0, 1, 2, 3, 4], amount: 0.45}} />
		</>
	);
};

// 23. TermPlot (fly in, labels, guide, triangle, reference line, no-term) with a term ladder and step counter.
const S23: React.FC = () => (
	<>
		<SceneHeading text="Term plot, term ladder and step counter" />
		<TermPlot x={30} y={300} width={1100} height={740} window={{x: [0, 8.5], y: [60, 130]}} nRange={[1, 6]} flyFrom={[1500, 300]} xTicks={[1, 2, 3, 4, 5, 6, 7, 8]} yTicks={[70, 90, 110, 130]}
			series={[{term: n => 72 + 8 * (n - 1), at: 20, stagger: 14, labels: {at: 70}}]} guide={{fn: n => 72 + 8 * (n - 1), at: 150}} triangle={{n: 3, at: 170, label: '+8'}}
			refLine={{Y: 120, label: 'ceiling 120 cm', at: 110, tint: 'above'}} noTerm={[{n: 0, Y: 64, at: 130, label: 'no term'}]} xLabel="n (chairs)" yLabel="height (cm)" />
		<StudioTermLadder x={1180} y={420} values={['72', '80', '88']} cardW={190} gap={30} dropAt={20} />
		<StepCounter xs={[1275, 1495, 1715]} y={420} at={80} bracket={{label: '2 steps', at: 140, y: 250}} zeroFlash={{at: 60}} />
	</>
);

// 24. PairingRectangle on sprites and in bar mode, and a PeriodTimeline.
const S24: React.FC = () => (
	<>
		<SceneHeading text="Pairing rectangle (sprites and bars), period timeline" />
		<PairingRectangle x={330} y={590} n={5} sprite={{plate: K.tennisBall, w: 76}} copyAt={20} rotateAt={60} slideAt={110} readouts={{at: 160, stagger: 6}} />
		<PairingRectangle x={1180} y={590} n={6} bars={{a: 3, d: 4, unit: 9, barW: 56}} copyAt={20} rotateAt={60} slideAt={110} readouts={{at: 160}} />
		<PeriodTimeline x={140} y={990} tabW={160} gap={30} unit={1.3} periods={[{label: 'day 1', value: 30, at: 20}, {label: 'day 2', value: 60, at: 40}, {label: 'day 3', value: 90, at: 60}, {label: 'day 4', value: 120, at: 80}, {label: 'day 5', at: 100, unknown: true}]}
			arcs={[{from: 0, to: 1, label: '+30', at: 120}, {from: 2, to: 3, label: '+30', at: 140}]} total={{value: 150, text: '?', label: 'total', at: 170}} timeMode={{at: 10, label: 't = 0'}} />
	</>
);

// 25. SpriteField (rows over a region, in order) and GrowingPlate with a coded scale.
const S25: React.FC = () => {
	const f = useCurrentFrame();
	const hcm = kf(f, [[20, 6], [200, 26]]);
	return (
		<>
			<SceneHeading text="Sprite field filling day by day, and a growing plate" />
			<SpriteField plate={K.beanSeedling} w={66} count={kf(f, [[10, 0], [200, 36]], false)} region={{x: 80, y: 420, w: 980, h: 560, cols: 12, rows: 3}} />
			<HandTag x={120} y={330} text="36 planted, in order" role="b" at={160} size={42} />
			<GrowingPlate plate={K.beanSeedling} baseX={1500} baseY={980} height={hcm * 28} scale={{x: 1200, unitPx: 28, max: 28, step: 4, unit: 'cm', value: hcm}} />
			<LiveReadoutBoard x={1560} y={200} width={320} rows={[{label: 'height', value: hcm, digits: 1, unit: 'cm', role: 'a'}]} />
		</>
	);
};

// 26. FoldLayers doubling into a dense block, and a LogRuler with landmarks (a plate in one slot).
const S26: React.FC = () => {
	const f = useCurrentFrame();
const folds = kf(f, [[20, 0], [230, 8]], false);
	const thick = 1e-4 * 2 ** folds;
	return (
		<>
			<SceneHeading text="Folding layers, and a log ruler for the thickness" />
			<FoldLayers x={160} y={880} width={420} layerPx={4} folds={folds} maxH={600} readout={(k, layers) => `${Math.floor(k)} folds: ${layers} layers`} />
			<LogRuler x={1180} yTop={190} yBottom={960} decades={[-4, 2]} value={thick} markerLabel={thick < 0.01 ? `${(thick * 1000).toFixed(1)} mm` : `${(thick * 100).toFixed(1)} cm`} unit="metres"
				landmarks={[{value: 1e-4, label: 'one sheet', at: 20}, {value: 0.067, plate: K.tennisBall, plateW: 80, label: 'tennis ball', at: 60}, {value: 1.0, label: '1 metre', at: 90}]} />
		</>
	);
};

// 27. ShiftCancelRows (ink strikes, survivors), BoardGrid with doubling clusters, big-number formats.
const S27: React.FC = () => {
	const f = useCurrentFrame();
	const filled = kf(f, [[20, 0], [200, 24]], false);
	const top: ShiftTerm[] = [2, 4, 8, 16].map((v, i) => ({key: i + 1, display: String(v), sign: 1}));
	const bottom: ShiftTerm[] = [1, 2, 4, 8].map((v, i) => ({key: i, display: String(v), sign: -1}));
	return (
		<>
			<SceneHeading text="Shift and cancel, a chessboard of doubling, big numbers" />
			<ShiftCancelRows x={60} y={220} colW={150} columns={[0, 1, 2, 3, 4]} top={top} bottom={bottom} enterAt={[10, 30]} alignAt={60} strike={{all: true, at: 100, stagger: 10}} survivorsAt={160}
				labels={['2S', '−S']} check={{value: t => t.sign * Number(t.display), result: 15}} />
			<LiveReadoutBoard x={80} y={520} width={880} rows={[
				{label: 'grains so far', value: 2 ** Math.floor(filled) - 1, format: v => fmtBig(v), role: 'k'},
				{label: 'all 64 squares', value: 0, text: fmtSci(2 ** 64 - 1), role: 'height'},
			]} />
			<BoardGrid coded={{x: 1100, y: 160, size: 560}} count={i => 2 ** i} filled={filled} tidyMax={64} labels={(i, c) => (i % 8 === 7 && c > 64 ? fmtBig(c) : '')} glow={{index: 7, at: 100}} />
			<BigNumberCard x={1000} y={760} w={880} label="grains on square 64, exactly" value={fmtBigInt(BigInt(2) ** BigInt(63))} role="k" at={120} />
		</>
	);
};

// 28. BounceRig with exact readouts and a ConvergenceStrip fed from the peaks.
const PEAKS = [4, 2, 1, 0.5, 0.25, 0.125, 0.0625, 0.03125];
const S28: React.FC = () => {
	const f = useCurrentFrame();
	const t = kf(f, [[10, 0], [220, 7.6]], false);
	const totals = [4, 8, 10, 11, 11.5, 11.75];
	return (
		<>
			<SceneHeading text="A ball that bounces half as high, and its total distance" />
			<BounceRig x={330} floorY={700} unit={110} peaks={PEAKS} t={t} spacing={300} ball={{plate: K.tennisBall, w: 64}} scale={{x: 200, max: 4, step: 1, unit: 'm'}} arrows={{at: 40, upTo: 3}}
				onState={s => <LiveReadoutBoard x={1300} y={170} width={560} inline rows={[{label: 'bounce', value: s.bounce, digits: 0, role: 'a'}, {label: 'height', value: s.height, digits: 3, unit: 'm', role: 'b'}, {label: 'distance', value: s.travelled, digits: 3, unit: 'm', role: 'k'}]} />} />
			<ConvergenceStrip x={200} y={900} width={1560} range={[0, 13]} target={{value: 12, label: 'total → 12 m'}} values={totals} at={30} stagger={28} ticks={ticks([0, 4, 8, 12])} feedFrom={i => [330 + 150 + i * 200, 700 - PEAKS[Math.min(i, PEAKS.length - 1)] * 110]} />
			{bounceAt(PEAKS, t).bounce >= 5 ? <HandTag x={1320} y={560} text="too small to see, still counted" role="k" at={0} size={40} /> : null}
		</>
	);
};

// 29. TermPlot live ratio with a limit line that exists only while |r| < 1, and two plate riders (one stops at a floor).
const S29: React.FC = () => {
	const f = useCurrentFrame();
const r = kf(f, [[20, 0.5], [200, 0.8], [236, 1.05]]);
	const a = 4;
	const S = (n: number) => (Math.abs(1 - r) < 1e-9 ? a * n : (a * (1 - r ** n)) / (1 - r));
	return (
		<>
			<SceneHeading text="Live ratio: the total line exists only while |r| < 1" />
			<TermPlot x={30} y={150} width={1150} height={800} window={{x: [0, 10.5], y: [0, 30]}} nRange={[1, 10]} xTicks={[2, 4, 6, 8, 10]} yTicks={[10, 20, 30]}
				series={[{term: S, at: 0, stagger: 0}, {term: n => a * r ** (n - 1), at: 0, stagger: 0}]} xLabel="n" yLabel="Sₙ and aₙ"
				limitLine={{Y: a / (1 - Math.min(0.999, r)), label: 'S∞ = a / (1 − r)', opacity: insideFade(r)}}
				riders={[{series: 0, n: kf(f, [[20, 1], [200, 9]]), plate: K.carYellow, w: 120}, {series: 1, n: kf(f, [[20, 1], [200, 9]]), plate: K.carYellow, w: 120, floor: 1}]} />
<ParameterSlider x={1200} y={740} width={330} symbol="r" role="k" value={r} min={0} max={1.2} ticks={ticks([0, 0.5, 1], v => String(v))} excluded={{value: 0, label: 'r = 0 not allowed', gap: 0.05}} />
			<LiveReadoutBoard x={1240} y={190} width={600} rows={[{label: 'r', value: r, role: 'k'}, {label: 'S₁₀', value: S(10), role: 'a'}, {label: 'S∞', value: 0, text: Math.abs(r) < 1 ? (a / (1 - r)).toFixed(2) : 'none', role: 'answer'}]} />
		</>
	);
};

// 30. Studio term ladder (reorder, arcs, end cap, run-off) and partial-sum stack (checked readouts, difference, onBuilt).
const S30: React.FC = () => (
	<>
		<SceneHeading text="Term ladder and partial-sum stack" />
		<StudioTermLadder x={90} y={290} values={['2', '4', '6', '8', '10']} cardW={170} gap={30} dropAt={10} labelPrefix="n = " arcs={[{from: 0, to: 1, label: '+2', at: 60}, {from: 1, to: 2, label: '+2', at: 75}]} endCap={{after: 4, at: 100, label: 'stop'}} runOff={{extra: 1, at: 110}} reorder={{to: [4, 3, 2, 1, 0], at: 150}} />
		<StudioPartialSumStack x={1240} y={1000} terms={[2, 4, 6, 8, 10]} buildAt={20} stagger={28} blockW={84} gap={28} unit={14} readouts={[2, 6, 12, 20, 30]} difference={{upper: 4, lower: 3, at: 180}} pulseTop={{column: 4, at: 200}}
			onBuilt={b => <LiveReadoutBoard x={90} y={640} width={700} inline rows={[{label: 'columns built', value: b, digits: 0, role: 'a'}, {label: 'latest total', value: [0, 2, 6, 12, 20, 30][b], digits: 0, role: 'b'}]} />} />
	</>
);

// 31. Studio sigma builder: slots, counter dial, term cards, count and total.
const S31: React.FC = () => (
	<>
<SceneHeading text="Sigma builder: counters, term cards and totals" />
		<StudioSigmaBuilder x={160} y={250} start={1} stop={6} rule="(2k − 1)" ruleFn={k => 2 * k - 1} size={150} revealAt={{lower: 10, upper: 20, rule: 30}} dial={{at: 40, per: 22}} count={{at: 175}} total={{at: 185}} />
		<StudioSigmaBuilder x={900} y={700} start={3} stop={7} rule="k²" ruleFn={k => k * k} size={110} cardW={120} role="b" revealAt={{lower: 20, upper: 30, rule: 40}} dial={{at: 60, per: 20}} count={{at: 180}} total={{at: 190}} />
	</>
);

// 32. Question card with the ring full from "Pause here", Enter multiplyOpacity, HandText maxWidth.
const S32: React.FC = () => (
	<>
		<QuestionCard at={0} hold={{startFrame: 150, endFrame: 450, ringFrom: 60}} pauseAt={60}>
			<div>A ball is dropped from 4 m and each bounce reaches half the height before. Find the total distance it travels.</div>
			<div style={{marginTop: 18}}><HandText text="the ring is full from the pause line, then counts" at={20} size={40} color="#6b4fa0" maxWidth={1100} /></div>
		</QuestionCard>
		<Enter at={10} multiplyOpacity style={{position: 'absolute', left: 120, top: 640, opacity: 0.55, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 40, color: INK}}>Enter with multiplyOpacity: a dimmed earlier line fades in at 55%.</Enter>
	</>
);

// 33. FunctionSimulator: coloured asymptote, curves that lift at it, the main curve hidden; ScreenCounter fit.
const S33: React.FC = () => (
	<>
		<SceneHeading text="Asymptote options, and a screen counter that fits" />
		<FunctionSimulator x={30} y={150} width={1020} height={860} window={{x: [-4, 4], y: [-5, 5]}} family={{f: u => u, df: () => 1}} timeline={[{frame: 0, x: 1}]} hideMainCurve
			asymptotes={[0]} asymptoteColor="#b8322a" curvesBreakAtAsymptotes yTicks={[-4, -2, 2, 4]}
			curves={[{fn: X => 1 / X, at: 10, color: INK, width: 6, label: {text: 'y = 1/x', X: 1.2}}, {fn: X => 2 / X, at: 40, color: '#1f6fb2', width: 5, label: {text: 'y = 2/x', X: 2.6}}]} />
		<ScreenCounter plate={P.phoneTripod} x={1260} y={170} w={440} screen={MATHS_SHARED_ANCHORS.phoneScreen} fit rows={[{label: 'total views', value: 94671, digits: 0}, {label: 'today', value: 1520, digits: 0, unit: 'new'}]} />
		<HandTag x={1150} y={820} text="no line ever crosses x = 0" role="mistake" at={60} size={42} />
	</>
);

export const SCENES_B: Record<string, React.FC> = {
	'flip-strips': S17, 'swap-symmetry': S18, 'ledger-tool-unit': S19, 'particle-family': S20, 'trip-reverse': S21, 'sprite-stack': S22, 'term-plot': S23,
	'pairing-period': S24, 'field-grow': S25, 'fold-log': S26, 'shift-board': S27, 'bounce-converge': S28, 'live-ratio': S29, 'ladder-sums': S30, sigma: S31,
	'question-fixes': S32, 'asymptote-fit': S33,
};
export const PLATES_B = [K.hallwayFloor, K.robotVacuum, K.crate, K.tennisBall, K.beanSeedling, K.carYellow, P.car, P.soundMeter, P.phoneTripod];
