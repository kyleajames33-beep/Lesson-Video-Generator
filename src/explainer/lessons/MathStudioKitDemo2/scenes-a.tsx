// MathStudioKitDemo2, scenes 1 to 16: kit pass 2A parts for d15 to d19 and i01 to i09 on dummy numbers with
// delivered or reused plates. Not a lesson. One 240-frame scene per group; stills at local frame 200.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, INK} from '../../kit';
import {
	AccumulatingPlateReadout, BalanceBar, Card, CardTitle, ConcavityGlyphs, ContainerFill, CupCapGlyph, FunctionSimulator, HandTag, LiveReadoutBoard,
	MATHS_KIT2_ANCHORS, MATHS_KIT2_PLATES, MATHS_SHARED_ANCHORS, MATHS_SHARED_PLATES, MaskedPlateRise, PlateImg, PreloadPlates, NetFlowArrow, PlateLevelFill,
	PlusC, RefinementTable, SceneHeading, ScreenChart, SignStrip, StudioAccumulationTracer, StudioAreaFill, StudioBoxNetFold, StudioCandidateTable,
	StudioDerivativeCheck, StudioDerivativeWheel, StudioFencePen, StudioIntegralNotation, StudioLimitSubstitution, StudioLowerLimitDial,
	StudioOneSidedSecants, StudioPrimitiveFamily, StudioRiemannStrips, StudioStackedDerivativePanels, ThermoColumn, TwoPieceTracer,
	boxNetVolume, concavityCells, concavityRegions, constantThroughPoint, fencePenState, fmtMoney, kf, piTicks, piecewiseFamily, plateMap, riemannSum, zoomFactorKeys, TXT,
} from '../../math/studio';
import type {FnKey} from '../../math/studio';

const K = MATHS_KIT2_PLATES, KA = MATHS_KIT2_ANCHORS, P = MATHS_SHARED_PLATES;
const INF = Infinity;

// 1. One-sided secants at a corner (d15 scene 4 shape): x², then x.
const CORNER = piecewiseFamily([{from: -INF, to: 1, includeTo: true, f: x => x * x, df: x => 2 * x}, {from: 1, to: INF, f: x => x, df: () => 1}]);
const S01: React.FC = () => (
	<>
		<SceneHeading text="One-sided secants: a corner settles on 2 and 1" />
		<StudioOneSidedSecants x={40} y={160} width={1160} height={860} window={{x: [-0.6, 2.6], y: [-0.6, 4.2]}} family={CORNER} a={1}
			left={{stops: [{frame: 10, h: -0.5}, {frame: 70, h: -0.1}, {frame: 130, h: -0.01}]}} right={{stops: [{frame: 10, h: 0.5}, {frame: 70, h: 0.1}, {frame: 130, h: 0.01}]}}
			legs={{side: 'right', at: 20, out: 120}} readout={{x: 1260, y: 200, width: 580, title: 'Secant gradients'}}
			sim={{label: {content: () => 'y = x², then y = x', at: 0, pos: () => [-0.5, 3.8]}}} />
		<HandTag x={1270} y={560} text="left settles on 2" role="a" at={140} size={44} />
		<HandTag x={1270} y={630} text="right settles on 1" role="b" at={160} size={44} />
		<HandTag x={1270} y={720} text="two values: no derivative" role="mistake" at={180} size={44} />
	</>
);

// 2. Piecewise helper with owned endpoints, and the animated zoom factor (×1 to ×40), resampled every frame.
const SMOOTH = piecewiseFamily([{from: -INF, to: 1, includeTo: true, f: x => x * x, df: x => 2 * x}, {from: 1, to: INF, f: x => 2 * x - 1, df: () => 2}]);
const STEP = piecewiseFamily([{from: -INF, to: 1, includeTo: true, f: x => x * x, df: x => 2 * x}, {from: 1, to: INF, f: x => x + 1, df: () => 1}]);
const S02: React.FC = () => {
	const zf = zoomFactorKeys([{frame: 30, factor: 1}, {frame: 190, factor: 40}]);
	return (
		<>
			<SceneHeading text="Piecewise families and an animated zoom (×1 to ×40)" />
			<FunctionSimulator x={30} y={160} width={920} height={840} window={{x: [-0.6, 2.4], y: [-0.6, 4.4]}} family={SMOOTH} timeline={[{frame: 0, x: 1}]}
				point={{at: 0}} zoom={{cx: 330, cy: 420, r: 160, factor: zf, at: 10}} label={{content: () => 'smooth join', at: 0, pos: () => [1.5, 3.6]}} />
			<FunctionSimulator x={970} y={160} width={920} height={840} window={{x: [-0.6, 2.4], y: [-0.6, 4.4]}} family={STEP} timeline={[{frame: 0, x: 1}]}
				point={{at: 0}} markers={STEP.endpointMarkers(0)} zoom={{cx: 1270, cy: 420, r: 160, factor: zf, at: 10}} label={{content: () => 'a step', at: 0, pos: () => [1.6, 3.6]}} />
<HandTag x={140} y={1030} text="straightens into one line" role="answer" at={150} size={42} />
<HandTag x={1080} y={1030} text="filled dot owned, open dot not" role="k" at={60} size={42} />
		</>
	);
};

// 3. Concavity tints and glyphs, and SignStrip concavity mode (d16's cubic).
const CUBIC = {f: (x: number) => x ** 3 - 6 * x * x + 9 * x, df: (x: number) => 3 * x * x - 12 * x + 9};
const CUB_CELLS = concavityCells([-0.3, 4.3], [2], [1, 3], x => 6 * x - 12);
const S03: React.FC = () => {
	const f = useCurrentFrame();
	const X = kf(f, [[10, 0], [210, 4]]);
	return (
		<>
			<SceneHeading text="Cup and cap: concavity tints, glyphs and sign strip" />
<FunctionSimulator x={220} y={150} width={980} height={640} window={{x: [-0.3, 4.3], y: [-1, 5.2]}} family={{f: u => CUBIC.f(u), df: u => CUBIC.df(u)}} timeline={[{frame: 10, x: 0}, {frame: 210, x: 4}]}
				regions={concavityRegions(CUB_CELLS, 20)} point={{at: 0}} tangent={{at: 0}} yTicks={[2, 4]}
				markers={[{X: 1, Y: 4, at: 60, label: 'max'}, {X: 2, Y: 2, at: 110, label: 'inflection', color: INK}, {X: 3, Y: 0, at: 150, label: 'min'}]}
				overlay={g => <ConcavityGlyphs cells={CUB_CELLS} toFrame={g.toFrame} Y={4.6} at={30} words />} />
<SignStrip x={220} y={830} width={980} windowX={[-0.3, 4.3]} mode="concavity" boundaries={[{x: 2, kind: 'zero', note: {text: 'changes: inflection', at: 130}}]}
				cells={[{sign: -1, test: {x: '1', value: '−6'}, revealAt: 60}, {sign: 1, test: {x: '3', value: '+6'}, revealAt: 90}]} />
<LiveReadoutBoard x={1260} y={180} width={590} rows={[
				{label: 'x', value: X, role: 'a'},
				{label: 'gradient f′(x)', value: CUBIC.df(X), role: 'gradient'},
				{label: 'f″(x) = 6x − 12', value: 6 * X - 12, role: 'k'},
				{label: 'shape', value: 0, text: 6 * X - 12 > 0 ? 'cup' : 6 * X - 12 < 0 ? 'cap' : 'flat', role: 'b'},
			]} />
<Card x={1260} y={700} w={590} at={20}><CardTitle>Glyphs</CardTitle><div style={{display: 'flex', gap: 40, alignItems: 'center', fontFamily: FONT_DISPLAY}}><CupCapGlyph kind="cup" size={80} /><span style={{fontSize: 40, fontWeight: 800, color: '#1f6fb2'}}>f″ &gt; 0</span><CupCapGlyph kind="cap" size={80} /><span style={{fontSize: 40, fontWeight: 800, color: '#5d6b2a'}}>f″ &lt; 0</span></div></Card>
		</>
	);
};

// 4. Stacked panels f, f′, f″ with progressive traces, columns, rings and tints.
const S04: React.FC = () => {
	const f = useCurrentFrame();
	const X = kf(f, [[10, -0.2], [215, 4.2]]);
	const gradCells = concavityCells([-0.3, 4.3], [1, 3], [0, 2, 4], x => 3 * x * x - 12 * x + 9);
	return (
		<>
			<SceneHeading text="Stacked panels: f, f′ and f″ on one x scale" />
			<StudioStackedDerivativePanels x={40} y={160} width={1160} panelHeight={290} windowX={[-0.3, 4.3]} traceFrom={-0.3} xTicks={[1, 2, 3, 4]}
				panels={[
					{fn: CUBIC.f, df: CUBIC.df, y: [-1, 5.5], yTicks: [4], tints: {cells: CUB_CELLS, kind: 'concavity', at: 150}},
					{fn: CUBIC.df, y: [-4.5, 10], trace: 'progressive', yTicks: [5], tints: {cells: gradCells, kind: 'gradient', at: 120}},
					{fn: x => 6 * x - 12, y: [-14, 14], trace: 'progressive', yTicks: [10]},
				]}
				rider={{keys: [{frame: 10, x: -0.2}, {frame: 215, x: 4.2}], at: 0}}
				columns={[{x: 1, at: 40, label: 'max'}, {x: 2, at: 60, label: 'inflection', glow: [100, 180]}, {x: 3, at: 80, label: 'min'}]}
				rings={[{panel: 1, x: 1, at: 90}, {panel: 1, x: 3, at: 110}, {panel: 2, x: 2, at: 130}]}
				markers={[{panel: 0, X: 1, at: 40}, {panel: 0, X: 2, at: 60, shape: 'diamond'}, {panel: 0, X: 3, at: 80}]} />
			<LiveReadoutBoard x={1260} y={190} width={580} rows={[
				{label: 'x', value: X, role: 'a'},
				{label: 'f(x)', value: CUBIC.f(X), role: 'height'},
				{label: 'f′(x)', value: CUBIC.df(X), role: 'gradient'},
				{label: 'f″(x)', value: 6 * X - 12, role: 'a'},
			]} />
			<HandTag x={1270} y={800} text="f′ turns where f bends" role="gradient" at={140} size={44} />
		</>
	);
};

// 5. ContainerFill with a profile interior (the delivered vase) and ScreenChart on the laptop.
const S05: React.FC = () => {
	const f = useCurrentFrame();
const lvl = kf(f, [[20, 0.02], [210, 0.8]], false);
	const day = kf(f, [[20, 0], [210, 14]], false);
	const V = (d: number) => 100 / (1 + Math.exp(-(d - 7) * 0.8));
	const vh = 820, vw = (758 * vh) / 1234;
	return (
		<>
			<SceneHeading text="Profile fill in a vase, and a chart on a screen" />
			<ContainerFill x={90} y={190} w={vw} container={K.barrelVase} interior={[0, 0, 1, 1]} profile={KA.vaseProfile} level={lvl} fillColor="#7fbfe0" fillOpacity={0.6} />
<HandTag x={110} y={1045} text="widest part: slowest rise" role="a" at={100} size={40} />
			<ScreenChart plate={K.laptop} x={700} y={240} w={1150} screen={KA.laptopScreen} window={{x: [0, 14], y: [0, 100]}} fn={V} upTo={day}
				xTicks={[0, 7, 14]} yTicks={[50, 100]} xLabel="day" yLabel="total views (thousands)" tags={[{X: 1.5, Y: 18, text: 'slow start', at: 60}, {X: 7.6, Y: 40, text: 'fastest', at: 140}]} />
		</>
	);
};

// 6. FencePen (wall strip, slider) and BoxNetFold (card texture).
const S06: React.FC = () => {
	const f = useCurrentFrame();
	const x = kf(f, [[10, 5], [100, 15], [200, 10]]);
	const q = fencePenState(40, x);
	const cut = 4;
	return (
		<>
			<SceneHeading text="Fence pen against a wall, and a box net folding" />
<StudioFencePen cx={470} top={180} scale={18} total={40} x={x} wall={{plate: K.stoneWallTop, length: 820, h: 70}} slider={{x: 90, y: 760, width: 520, min: 0, max: 20, ticks: [0, 5, 10, 15, 20].map(v => ({value: v, label: String(v)}))}} />
			<LiveReadoutBoard x={90} y={890} width={760} inline rows={[{label: 'area', value: q.area, digits: 1, unit: 'm²', role: 'height'}]} />
<StudioBoxNetFold x={990} y={200} W={24} H={24} cut={cut} fold={kf(f, [[100, 0], [170, 1]])} cutProgress={kf(f, [[40, 0], [90, 1]])} scale={27} texture={{plate: K.cardTexture, px: 0.3}} />
			<LiveReadoutBoard x={1240} y={820} width={600} inline rows={[{label: 'volume V', value: boxNetVolume(24, 24, cut).volume, digits: 0, unit: 'cm³', role: 'height'}]} />
		</>
	);
};

// 7. Limit rows, money and unit formats, and two-line tick labels (years under t).
const S07: React.FC = () => {
	const f = useCurrentFrame();
	const tl: FnKey[] = [{frame: 10, x: 0}, {frame: 200, x: 12}];
	const t = kf(f, [[10, 0], [200, 12]]);
	const v = 30 * Math.exp(-0.15 * t);
	return (
		<>
			<SceneHeading text="Limit rows, money readouts and two-line ticks" />
			<FunctionSimulator x={30} y={150} width={1020} height={640} window={{x: [0, 20], y: [0, 32]}} family={{f: u => 30 * Math.exp(-0.15 * u), df: u => -4.5 * Math.exp(-0.15 * u)}} timeline={tl}
				point={{at: 0}} tangent={{at: 0}} xLabel="t (years)" yLabel="value ($ thousands)" yTicks={[10, 20, 30]}
				xTicks={[0, 5, 10, 15, 20].map(v2 => ({value: v2, label: String(v2), sub: String(2010 + v2)}))} />
			<LiveReadoutBoard x={60} y={830} width={980} inline rows={[
				{label: 'value', value: v * 1000, format: w => fmtMoney(w), role: 'height'},
				{label: 'rate of change', value: -0.15 * v * 1000, format: w => fmtMoney(w, 0, ' per year'), role: 'gradient'},
			]} />
			<StudioCandidateTable x={1090} y={170} w={790} headings={['candidate', 'area A', 'kind']} winnerAt={170} rows={[
				{x: 'x → 0⁺', exact: 'A → 0', at: 20, limit: true},
				{x: 'x = 10', exact: '200 m²', at: 60, kind: 'stationary', winner: true},
				{x: 'x → 20⁻', exact: 'A → 0', at: 100, limit: true},
			]} />
			<HandTag x={1110} y={720} text="limits are not values reached" role="k" at={140} size={42} />
		</>
	);
};

// 8. PrimitiveFamily, IntegralNotation with + C, and DerivativeCheck (numeric check).
const S08: React.FC = () => {
	const f = useCurrentFrame();
	const F = (x: number) => x * x, fx = (x: number) => 2 * x;
	const Cend = constantThroughPoint(F, {x: 1, y: 3});
	const C = kf(f, [[40, 0], [160, Cend]]);
	return (
		<>
			<SceneHeading text="Primitive family, integral notation, derivative check" />
			<StudioPrimitiveFamily x={30} y={150} width={980} height={860} window={{x: [-2.5, 2.5], y: [-3, 7]}} F={F} f={fx} constants={[-2, -1, 1, 3, 4]} C={C}
				label={c => `y = x² + ${c.toFixed(1)}`} stubs={{xs: [-1.5, 0, 1.5], at: 30}} point={{x: 1, y: 3, label: '(1, 3)', at: 20}}
gapBars={{upper: 4, lower: 3, xs: [-1.2, 1.2], label: 'gap 1', at: 90}} ghost={{C: 0, at: 60}} yTicks={[2, 4, 6]} />
			<div style={{position: 'absolute', left: 1090, top: 200, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 76, color: INK}}>
				<StudioIntegralNotation integrand="2x" size={76} labels={{sign: {text: 'integral sign', at: 30}, integrand: {text: 'integrand', at: 50}, differential: {text: 'dx', at: 70}}} right={<>= x² <PlusC at={100} /></>} />
			</div>
			<StudioDerivativeCheck x={1300} y={560} answer="x² + 2" result="2x" at={90} tickAt={150} answerFn={x => x * x + 2} targetFn={x => 2 * x} />
		</>
	);
};

// 9. ContainerFill reveal mode (starter jar) and MaskedPlateRise (shoots from the soil lines).
const S09: React.FC = () => {
	const f = useCurrentFrame();
	const jh = 820, jw = (826 * jh) / 1411;
	const bh = 880, bw = (1162 * bh) / 1614, bx = 860, by = 150;
	const m = plateMap(K.bookcasePots, bx, by, bw);
	const shootW = 110;
	return (
		<>
			<SceneHeading text="Reveal fill (painted starter) and masked rise" />
			<ContainerFill x={120} y={190} w={jw} container={K.starterJar} interior={KA.starterInterior} reveal={{plate: K.starterFill, dome: 14, surfaceLine: true}} level={kf(f, [[20, 0.25], [200, 0.72]])} />
<HandTag x={120} y={1040} text="painted fill, revealed to the level" role="b" at={60} size={40} />
			<PreloadPlates plates={[K.bookcasePots]} />
			<PlateImg plate={K.bookcasePots} x={bx} y={by} w={bw} />
			{KA.bookcaseSoil.map(([sx, sy], i) => {const [cx, my] = m.at(sx, sy); return <MaskedPlateRise key={i} plate={K.beanShoot} cx={cx} maskY={my} w={shootW} rise={kf(f, [[20 + i * 20, 0], [200, (shootW * 701) / 353 * (0.9 - i * 0.25)]])} />;})}
			<HandTag x={1520} y={420} text="shoots rise from the soil" role="answer" at={80} size={40} />
		</>
	);
};

// 10. Two-piece tracer with separate C sliders, and the derivative wheel.
const S10: React.FC = () => {
	const f = useCurrentFrame();
	const c1 = kf(f, [[150, 0], [200, 1]]);
	return (
		<>
			<SceneHeading text="Two pieces, two constants, and the derivative wheel" />
			<TwoPieceTracer x={30} y={150} width={1060} heightTop={460} heightBottom={400} windowX={[-4, 4]} yTop={[-2.5, 3.5]} yBottom={[-4, 4]} excluded={[0]} xTicks={[-3, -1, 1, 3]} yTopTicks={[2]} yBottomTicks={[-2, 2]}
				pieces={[{from: -4, to: 0, F: x => Math.log(-x), f: x => 1 / x}, {from: 0, to: 4, F: x => Math.log(x), f: x => 1 / x}]} cs={[c1, 0]}
				sweeps={[{piece: 0, from: -3.8, to: -0.3, start: 10, end: 80}, {piece: 1, from: 0.3, to: 3.8, start: 90, end: 160}]}
				sliders={[{x: 1110, y: 760, width: 380, min: -2, max: 2, ticks: [{value: -2, label: '−2'}, {value: 0, label: '0'}, {value: 2, label: '2'}]}, {x: 1110, y: 900, width: 380, min: -2, max: 2, ticks: [{value: -2, label: '−2'}, {value: 0, label: '0'}, {value: 2, label: '2'}]}]}
				topLabel="ln|x| + C" bottomLabel="1/x" />
			<Card x={1180} y={150} w={640} at={0} pad="10px 20px"><div style={{display: 'flex', justifyContent: 'center'}}><StudioDerivativeWheel size={540} dAt={[20, 35, 50, 65]} intAt={[100, 115, 130, 145]} pulse={{kind: 'd', index: 0, at: 170}} /></div></Card>
		</>
	);
};

// 11. Gradient dots at listed x against a dashed target that turns solid, and a balance bar.
const S11: React.FC = () => {
	const f = useCurrentFrame();
	const xs = Array.from({length: 9}, (_, i) => (i * Math.PI) / 4);
	return (
		<>
			<SceneHeading text="Gradient dots against a target, and a balance bar" />
			<FunctionSimulator x={30} y={150} width={1160} height={800} window={{x: [-0.3, 6.7], y: [-1.6, 1.6]}} family={{f: u => Math.sin(u), df: u => Math.cos(u)}} timeline={[{frame: 10, x: 0}, {frame: 190, x: 2 * Math.PI}]}
				xTicks={piTicks(0, 2, 2)} yTicks={[-1, 1]} point={{at: 0}} tangent={{at: 0}} gradientDots={{at: 10, xs, target: {fn: Math.cos, solidAt: 195}}} label={{content: () => 'y = sin x', at: 0, pos: () => [1.0, 1.35]}} />
<BalanceBar x={1520} y={430} w={500} left={{label: 'area above', value: 2, role: 'b'}} right={{label: 'area below', value: kf(f, [[30, 1.1], [180, 2]]), role: 'k'}} scale={1} />
			<HandTag x={1290} y={820} text="dots land on cos x" role="gradient" at={150} size={44} />
		</>
	);
};

// 12. Riemann strips: trapezium rule, n stepping 1, 2, 4, 8 with splits, the stepper, readout and refinement table.
const S12: React.FC = () => {
	const sq = (x: number) => x * x;
	const rows = [1, 2, 4, 8].map((n, i) => ({n, left: riemannSum(sq, 0, 3, n, 'left'), right: riemannSum(sq, 0, 3, n, 'right'), trap: riemannSum(sq, 0, 3, n, 'trapezium'), at: 20 + i * 40}));
	return (
		<>
			<SceneHeading text="Riemann strips: trapezia, splits and the strip count" />
			<StudioRiemannStrips x={30} y={150} width={1100} height={740} window={{x: [-0.2, 3.3], y: [-0.6, 9.6]}} fn={sq} a={0} b={3} rule="trapezium"
				nKeys={[{frame: 0, value: 1}, {frame: 50, value: 2}, {frame: 100, value: 4}, {frame: 150, value: 8}]} yTicks={[3, 6, 9]}
				readout={{x: 1180, y: 160, width: 640, exact: {label: '∫₀³ x² dx', value: 9}}} stepper={{x: 120, y: 940, values: [1, 2, 4, 8]}} />
			<RefinementTable x={1180} y={500} w={700} exact={9} digits={3} rows={rows} />
		</>
	);
};

// 13. Reverse strips (negative widths) and a signed area fill swept in.
const S13: React.FC = () => (
	<>
		<SceneHeading text="Strips drawn backwards, and a signed area fill" />
<StudioRiemannStrips x={30} y={150} width={920} height={700} window={{x: [-2.4, 1.4], y: [-0.8, 4.6]}} fn={x => x * x} a={-2} b={1} n={6} rule="left" direction="reverse" draw={{at: 10, per: 24}} xTicks={[-2, -1, 1]} yTicks={[2, 4]}
			readout={{x: 120, y: 860, width: 780, label: 'running sum (right to left)', digits: 3}} />
		<StudioAreaFill x={980} y={150} width={910} height={760} window={{x: [-0.3, 6.7], y: [-1.5, 1.5]}} fn={Math.sin} a={0} b={2 * Math.PI} sweep={{at: 20, dur: 150}} signed xTicks={piTicks(0, 2, 2)} yTicks={[-1, 1]}
			bounds={{a: '', b: '', at: 170}}>
			{m => {const [x1, y1] = m.p(Math.PI / 2, 0.45), [x2, y2] = m.p((3 * Math.PI) / 2, -0.45); return <g opacity={1}><text x={x1} y={y1} textAnchor="middle" style={TXT(48, '#13767a', 800)}>+2</text><text x={x2} y={y2 + 30} textAnchor="middle" style={TXT(48, '#9c5a00', 800)}>−2</text></g>;}}
		</StudioAreaFill>
		<HandTag x={1060} y={980} text="signed total: 2 − 2 = 0" role="k" at={180} size={42} />
	</>
);

// 14. Accumulation tracer: A(x) above f(x), signed fill, dots, edge strip, clock slider, net-flow arrow.
const clock = (h: number) => {const t = 9 + h, hh = Math.floor(t), mm = Math.round((t - hh) * 60); const h12 = ((hh + 11) % 12) + 1; return `${h12}:${String(mm).padStart(2, '0')} ${hh >= 12 ? 'pm' : 'am'}`;};
const S14: React.FC = () => (
	<>
		<SceneHeading text="Accumulation: A(x) builds from the area under f" />
		<StudioAccumulationTracer x={30} y={150} width={1060} heightTop={420} heightBottom={420} windowX={[-0.3, 7.3]} yTop={[-2.5, 6]} yBottom={[-4.5, 4]}
			A={x => 3 * x - (x * x) / 2} f={x => 3 - x} a={0} keys={[{frame: 10, x: 0}, {frame: 200, x: 6}]} dots={[1, 2, 3, 4, 5, 6]} edgeStrip={{h: 0.6, at: 110, out: 175}}
			xTicks={[1, 3, 5, 7]} yTopTicks={[2, 4]} yBottomTicks={[-2, 2]} topLabel="cars parked A(x)" bottomLabel="net flow f(x)" xLabel="hours after 9 am"
			readout={{x: 1150, y: 160, width: 600, labels: {x: 'time', f: 'net flow', A: 'cars parked'}, xText: clock}}
slider={{x: 1110, y: 620, width: 420, min: 0, max: 7, ticks: [{value: 0, label: '9 am'}, {value: 3, label: '12'}, {value: 6, label: '3 pm'}], symbol: 't'}}
onValue={s => <NetFlowArrow x={1400} y={800} value={s.f} scale={14} positive={{role: 'b', label: 'in'}} negative={{role: 'k', label: 'out'}} />} />
	</>
);

// 15. Lower-limit dial (caption swap) and limit substitution (bracket first, "− (−" collapses to "+").
const S15: React.FC = () => (
	<>
		<SceneHeading text="Changing the start, and substituting the limits" />
		<StudioLowerLimitDial x={30} y={150} width={1000} height={640} window={{x: [-0.3, 6.3], y: [-4, 6]}} A={x => 3 * x - (x * x) / 2} f={x => 3 - x} shift={-2.5} at={50} tangentAt={2}
			caption={{x: 130, y: 800, from: 'cars since 9 am', to: 'cars since 10 am'}} yTicks={[-2, 2, 4]} />
		<HandTag x={1080} y={520} text="parallel: same gradient" role="gradient" at={110} size={42} />
		<StudioLimitSubstitution x={130} y={900} size={64} prefix="∫₋₂¹ x² dx =" upper="1/3" lowerSign="−" lowerBody="8/3" at={20} minusAt={40} bracketAt={60} lowerAt={80} collapseAt={140} then={{content: '= 3', at: 180}} />
	</>
);

// 16. ThermoColumn (frost thermometer), PlateLevelFill (snow post) and an accumulating meter readout.
const S16: React.FC = () => {
	const f = useCurrentFrame();
	const th = KA.thermometer;
	const tH = 880, tW = (688 * tH) / 1871;
	const sH = 820, sW = (711 * sH) / 1490;
	const sp = KA.snowPost;
	const hours = kf(f, [[20, 0], [200, 6]]);
	return (
		<>
			<SceneHeading text="Thermometer column, snow level and an energy meter" />
			<ThermoColumn plate={K.frostThermometer} x={110} y={150} w={tW} bulb={th.bulb} top={th.top} tubeWidth={th.tubeWidth} scale={{min: (1017 - th.bulb[1]) / 97, max: (1017 - th.top[1]) / 97}} value={kf(f, [[20, -2], [200, 1]])}
				ticks={[-4, -2, 0, 2, 4].map(v => ({value: v, label: `${v < 0 ? '−' : ''}${Math.abs(v)} °C`}))} />
			<PlateLevelFill plate={K.snowPost} x={620} y={180} w={sW} band={[sp.x0 - 26, sp.groundY, sp.x1 + 26, sp.groundY - 250 * sp.pxPerCm]} scale={{min: 0, max: 250}} value={kf(f, [[20, 100], [200, 200]])} color="#eef4fb" surface="#7e9bb8"
				ticks={[0, 100, 200].map(v => ({value: v, label: `${v} cm`}))} />
			<AccumulatingPlateReadout plate={P.soundMeter} x={1180} y={300} w={680} region={MATHS_SHARED_ANCHORS.soundMeterDisplay} rate={() => 2.5} from={0} upTo={hours} digits={1} unit="kWh" />
			<LiveReadoutBoard x={1240} y={640} width={560} inline rows={[{label: 'hours', value: hours, digits: 1, role: 'a'}, {label: 'power', value: 2.5, unit: 'kW', digits: 1, role: 'k'}]} />
		</>
	);
};

export const SCENES_A: Record<string, React.FC> = {
	'one-sided': S01, 'zoom-piecewise': S02, concavity: S03, stacked: S04, 'vase-chart': S05, 'fence-box': S06, 'limit-money': S07, primitives: S08,
	'reveal-rise': S09, 'two-piece-wheel': S10, 'gradient-dots': S11, riemann: S12, 'reverse-fill': S13, accumulation: S14, 'lower-limit': S15, 'thermo-snow': S16,
};
export const PLATES_A = [K.barrelVase, K.laptop, K.stoneWallTop, K.cardTexture, K.starterJar, K.starterFill, K.bookcasePots, K.beanShoot, K.frostThermometer, K.snowPost, P.soundMeter];
