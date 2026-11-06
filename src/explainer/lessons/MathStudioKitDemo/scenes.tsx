// MathStudioKitDemo: every studio-kit addition of 7 Nov on dummy coded data (no new plates; reused plates
// only). One 240-frame scene per part, for the kit check sheet. Not a lesson.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {INK, INK_SOFT} from '../../kit';
import {
	AreaStrips, ContainerFill, EXP_BASE_FAMILY, FrameSvg, FunctionSimulator, GivensStrip, GrowthBars, HandTag, LOG_BASE_FAMILY, LiveReadoutBoard,
	MATHS_SHARED_ANCHORS, MATHS_SHARED_PLATES, MATH_CURVE_OLIVE, MATH_GRADIENT, MATH_EXCLUDED, PairedDerivativePanel, ParameterSlider, PlateReadout,
	PlateSpec, QuestionAxes, QuestionCard, ReflectionCarrier, RotatingPlate, SceneHeading, ScreenCounter, SignStrip, StopwatchHand,
	StudioCancellation, StudioDomainStrip, QuarterTurnNormal, LinkedRiders, StudioCandidateTable, NameSwapChips, IntervalPicture, StudioRateChainStrips, StudioTangentTriangle, TripSim, clampAwayFrom, directionWord, easeInLog,
	fmtNum, fnStateAt, heldStops, kf, niceNum, piTicks, Pow, Role,
} from '../../math/studio';
import type {FnFamily, FnKey} from '../../math/studio';

export const SCENE_LEN = 240;
const P = MATHS_SHARED_PLATES;
const A = MATHS_SHARED_ANCHORS;
/** Demo-only container: the Chemistry m6 beaker (measured 7 Nov). */
export const BEAKER: PlateSpec = {src: 'assets/chemistry/m6-beaker-v1.png', nat: [2048, 2048], box: [278, 164, 1769, 1884]};

const LN: FnFamily = {f: u => Math.log(u), df: u => 1 / u, domain: [{from: 0, to: Infinity}]};
const EXP: FnFamily = {f: u => Math.exp(u), df: u => Math.exp(u)};

// 1. FunctionSimulator on ln x: open domain, held stops, triangle, gradient dots, callback and word rows.
const D01: React.FC = () => {
	const tl: FnKey[] = heldStops('x', [{frame: 20, value: 0.5}, {frame: 90, value: 1}, {frame: 150, value: 2}, {frame: 210, value: 4}], 40);
	return (
		<>
			<SceneHeading text="FunctionSimulator: any f with f′, open domain" at={2} />
			<FunctionSimulator x={70} y={170} width={1160} height={820} window={{x: [-1, 6], y: [-2.5, 2.5]}} family={LN} timeline={tl}
				regions={[{x: [-1, 0], color: '#ebe4d6', at: 0}]}
				label={{content: () => 'y = ln x', at: 10, pos: () => [4.6, 2.2]}}
				point={{at: 10}} tangent={{at: 20}} triangle={{run: 1, at: 30}} gradientDots={{at: 20, every: 8, bars: true}}
				readout={{x: 1290, y: 200, width: 540, title: 'Live', rows: [
					{label: 'x', value: s => s.u, role: 'a'},
					{label: 'gradient', value: s => s.slope, role: 'gradient', digits: 3},
					{label: 'gradient × x', value: s => s.slope * s.u, role: 'b', digits: 3},
					{label: 'direction', text: s => directionWord(s.slope), role: 'k'},
				]}} />
			<HandTag x={150} y={260} text="no ln x for x ≤ 0" at={30} role="mistake" size={42} />
			<HandTag x={1300} y={800} text="dots trace y = 1/x" at={120} role="gradient" size={44} />
		</>
	);
};

// 2. Secant to tangent with held stops and the round zoom.
const D02: React.FC = () => {
	const tl: FnKey[] = [{frame: 0, x: 1}, ...heldStops('q', [{frame: 0, value: 3}, {frame: 60, value: 2}, {frame: 110, value: 1.5}, {frame: 160, value: 1.1}, {frame: 225, value: 1.0}], 30)];
	return (
		<>
			<SceneHeading text="Secant settles onto the tangent (held stops, zoom)" at={2} />
			<FunctionSimulator x={70} y={170} width={1100} height={820} window={{x: [-1, 3.2], y: [-0.5, 8.5]}} family={EXP_BASE_FAMILY} baseParams={{c: 2}} timeline={tl}
				label={{content: () => <>y = 2<Pow>x</Pow></>, at: 6, pos: () => [2.55, 6.2], side: 'left'}}
				point={{at: 6}} secant={{at: 10}} tangent={{at: 214}} zoom={{cx: 1520, cy: 330, r: 170, factor: 3, at: 20}}
				readout={{x: 1250, y: 590, width: 580, rows: [
					{label: 'Q at x', value: s => s.q, role: 'k'},
					{label: 'secant slope', value: s => s.secantSlope, role: 'k', digits: 3},
					{label: 'tangent slope', value: s => s.slope, role: 'gradient', digits: 3},
				]}} />
		</>
	);
};

// 3. Base family through a = 1 (the flat line), log-eased sweep, slider.
const D03: React.FC = () => {
	const f = useCurrentFrame();
	const tl: FnKey[] = [{frame: 0, x: 1}, {frame: 10, p: {c: 2}}, {frame: 60, p: {c: 2}}, {frame: 130, p: {c: 1}}, {frame: 170, p: {c: 1}}, {frame: 230, p: {c: 0.5}}];
	const st = fnStateAt(EXP_BASE_FAMILY, tl, f, {logParams: ['c']});
	return (
		<>
			<SceneHeading text="Base family: aˣ passes through a = 1" at={2} />
			<FunctionSimulator x={70} y={170} width={1100} height={700} window={{x: [-2.5, 2.5], y: [-0.5, 6]}} family={EXP_BASE_FAMILY} timeline={tl} logParams={['c']}
				color={INK} curves={[{fn: X => Math.exp(X), at: 0, label: {text: 'eˣ', X: 1.5}}]}
				label={{content: s => `y = ${niceNum(s.params.c)}ˣ`, at: 6, pos: () => [-2.3, 4.9]}}
				point={{at: 6}} tangent={{at: 12}}
				readout={{x: 1260, y: 200, width: 560, rows: [
					{label: 'height', value: s => s.Y, role: 'height', digits: 3},
					{label: 'gradient', value: s => s.slope, role: 'gradient', digits: 3},
					{label: 'gradient ÷ height = ln a', value: s => s.slope / s.Y, role: 'a', digits: 3},
				]}} />
			<ParameterSlider x={110} y={915} width={760} symbol="a" role="k" value={st.params.c} min={0.25} max={4} ticks={[{value: 0.5, label: '½'}, {value: 1, label: '1'}, {value: 2, label: '2'}, {value: 3, label: '3'}, {value: 4, label: '4'}]} at={4} />
			<HandTag x={1270} y={720} text="a = 1: flat, ratio 0" at={130} role="k" size={46} />
		</>
	);
};

// 4. Vertical stretch and fold carrying the triangle; olive comparison curve; excluded base on the slider; meter display.
const D04: React.FC = () => {
	const f = useCurrentFrame();
	const L2 = 1 / Math.log(2);
	const tl: FnKey[] = [{frame: 0, x: 2, yScale: 1}, {frame: 60, yScale: L2}, {frame: 120, yScale: L2}, {frame: 190, yScale: -L2}];
	const st = fnStateAt(LOG_BASE_FAMILY, tl, f);
	const base = clampAwayFrom(easeInLog(2, 0.5, (f - 120) / 70), 1, 0.1);
	return (
		<>
			<SceneHeading text="Stretch and fold carry the triangle; a = 1 excluded" at={2} />
			<StudioTangentTriangle x={70} y={160} width={1140} height={700} window={{x: [-0.5, 5.5], y: [-3, 3]}} family={LOG_BASE_FAMILY} timeline={tl} run={1}
				curves={[{fn: X => (X > 0 ? Math.log10(X) : NaN), domain: [0.02, 5.5], at: 0, color: MATH_CURVE_OLIVE, width: 6, label: {text: 'log₁₀ x', X: 4.6}}]}
				label={{content: s => (s.yScale > 0 ? <>y = log<sub style={{fontSize: '0.6em'}}>2</sub> x</> : <>y = log<sub style={{fontSize: '0.6em'}}>½</sub> x</>), at: 6, pos: () => [3.9, st.yScale > 0 ? 2.4 : -2.4]}}
				readout={{x: 1260, y: 600, width: 560, inline: true, rows: [
					{label: 'gradient', value: s => s.slope, role: 'gradient', digits: 3},
					{label: 'ratio to ln x', value: s => s.yScale, role: 'k', digits: 3},
				]}} />
			<PlateReadout plate={P.soundMeter} x={1290} y={170} w={520} region={A.soundMeterDisplay} value={st.Y} digits={2} />
			<ParameterSlider x={110} y={925} width={700} symbol="a" role="k" value={base} min={0.25} max={3} ticks={[{value: 0.5, label: '½'}, {value: 2, label: '2'}, {value: 3, label: '3'}]} excluded={{value: 1, label: 'a = 1 not allowed', at: 10}} />
		</>
	);
};

// 5. Reflection carrier: eˣ folds onto ln x; the triangle's legs swap.
const D05: React.FC = () => {
	const tl: FnKey[] = [{frame: 0, x: 0.7, reflect: 0}, {frame: 40, reflect: 0}, {frame: 180, reflect: 1}];
	return (
		<>
			<SceneHeading text="Reflection in y = x: legs swap, slope becomes 1/m" at={2} />
			<ReflectionCarrier x={90} y={150} width={800} height={794} window={{x: [-1.5, 4.5], y: [-1.5, 4.5]}} family={EXP} timeline={tl}
				curves={[{fn: X => (X > 0 ? Math.log(X) : NaN), domain: [0.03, 4.5], at: 0, label: {text: 'ln x', X: 3.7}}]}
				label={{content: s => (s.reflect < 0.5 ? 'y = eˣ' : 'carried eˣ'), at: 6, pos: s => (s.reflect < 0.5 ? [1.2, 3.9] : [3.6, 1.6])}}
				point={{at: 6}} tangent={{at: 10}} triangle={{run: 1, at: 16}}
				readout={{x: 1000, y: 230, width: 620, title: 'Carried point', rows: [
					{label: 'point', text: s => `(${fmtNum(s.px)}, ${fmtNum(s.py)})`, role: 'height'},
					{label: 'carried slope', value: s => s.pslope, role: 'gradient', digits: 3},
					{label: '1 ÷ x at the point', value: s => 1 / s.px, role: 'answer', digits: 3},
				]}} />
			<HandTag x={1010} y={760} text="run 1 becomes rise 1" at={185} role="gradient" size={46} />
		</>
	);
};

// 6. RotatingPlate (bike wheel, upright sprites, unit-circle overlay) driving sin x with radian ticks.
const D06: React.FC = () => {
	const f = useCurrentFrame();
	const th = kf(f, [[10, 0], [230, 2.6]]);
	const W = 560, s = W / (P.bikeWheel.box[2] - P.bikeWheel.box[0]);
	const cx = 400, cy = 560, R = 430 * s;
	const SIN: FnFamily = {f: u => Math.sin(u), df: u => Math.cos(u)};
	const jarHang: [number, number] = [701, 162];
	return (
		<>
			<SceneHeading text="RotatingPlate: rim turns, sprites stay upright" at={2} />
			<RotatingPlate plate={P.bikeWheel} pivot={[...A.bikeWheelHub]} cx={cx} cy={cy} w={W} angle={th}
				sprites={[0, 1, 2, 3, 4, 5].map(k => ({plate: P.sealedJar, attach: {angle: (k * Math.PI) / 3, r: 430}, hang: jarHang, w: 58}))}
				unitCircle={{r: R, theta: th, at: 20, angleLabel: t => `${fmtNum(t)} rad`, heightLabel: t => `sin = ${fmtNum(Math.sin(t))}`}} />
			<FunctionSimulator x={760} y={160} width={1120} height={560} window={{x: [0, 2 * Math.PI + 0.3], y: [-1.5, 1.5]}} family={SIN} timeline={[{frame: 10, x: 0}, {frame: 230, x: 2.6}]}
				xTicks={piTicks(0, 2, 2)} yTicks={[-1, 1]} point={{at: 6}} tangent={{at: 12}} label={{content: () => 'y = sin x', at: 6, pos: () => [4.6, 1.25]}}
				readout={{x: 860, y: 760, width: 940, inline: true, rows: [
					{label: 'angle (rad)', value: s => s.u, role: 'gradient'},
					{label: 'height sin x', value: s => s.Y, role: 'a'},
					{label: 'climbing rate cos x', value: s => s.slope, role: 'gradient'},
				]}}
				onPoint={g => <FrameSvg><line x1={cx + R * Math.cos(th)} y1={cy - R * Math.sin(th)} x2={g.pt[0]} y2={g.pt[1]} stroke={MATH_GRADIENT} strokeWidth={3} strokeDasharray="8 8" opacity={0.6} /></FrameSvg>} />
		</>
	);
};

// 7. ContainerFill (beaker, coded coins), ScreenCounter (phone screen) and StopwatchHand.
const D07: React.FC = () => {
	const f = useCurrentFrame();
	const level = (g: number) => Math.min(0.92, 0.12 * Math.exp(g / 115));
	const users = 1000 * Math.exp(f / 120);
	return (
		<>
			<SceneHeading text="ContainerFill, ScreenCounter and StopwatchHand" at={2} />
			<ContainerFill x={90} y={250} w={460} container={BEAKER} interior={[460, 500, 1680, 1720]} level={level(f)} drops={{from: 0, rate: g => 3 + 14 * level(g), size: 44}} />
			<LiveReadoutBoard x={90} y={850} width={460} inline rows={[{label: 'level', value: level(f) * 100, digits: 0, unit: '%', role: 'k'}]} />
			<ScreenCounter plate={P.phoneTripod} x={640} y={210} w={600} screen={A.phoneScreen} rows={[{label: 'users', value: users, digits: 0}, {label: 'per day', value: users / 1.2, digits: 0, color: '#bfe8d4'}]} />
			<StopwatchHand cx={1560} cy={430} r={190} seconds={f / 30 * 4} face label={`${fmtNum(f / 30 * 4, 1)} s`} />
			<HandTag x={1560} y={760} text="hand from the same clock" at={20} anchor="middle" size={40} color={INK_SOFT} />
		</>
	);
};

// 8. QuestionCard with a picture slot, countdown, GivensStrip, and a PlateReadout card on a guitar.
const D08: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<QuestionCard at={0} hold={{startFrame: 40, endFrame: 340}} w={1440} picture={{node: <QuestionAxes window={{x: [-0.5, 4.5], y: [-2, 2]}} fn={Math.log} domain={[0.02, 4.5]} point={{x: 2, tag: 'gradient here?'}} shade={[{from: 0, to: 4.5, label: 'x > 0'}]} xTicks={[{value: 1, label: '1'}, {value: 2, label: '2'}, {value: 4, label: '4'}]} />}}>
				The curve y = ln x is shown. Find the gradient of its tangent at x = 2, and state the domain of y = ln x.
			</QuestionCard>
			<GivensStrip x={96} y={630} items={[{content: 'y = ln x', at: 10}, {content: 'x = 2', role: 'a', at: 16}, {content: 'domain x > 0', role: 'k', at: 22}]} />
			<PlateReadout plate={P.guitar} x={860} y={730} w={640} anchor={[1500, 420]} card={{x: 1540, y: 760, width: 330}} label="string frequency" value={110 * Math.pow(2, Math.min(1, f / 200))} digits={1} unit="Hz" role="b" />
		</>
	);
};

// 9. AreaStrips (role strips and corner) with GrowthBars.
const D09: React.FC = () => {
	const f = useCurrentFrame();
	const t = kf(f, [[20, 0], [200, 2]]);
	const du = 0.5 * t, dv = 0.25 * t;
	const real = (4 + du) * (3 + dv) - 12, guess = du * dv;
	return (
		<>
			<SceneHeading text="AreaStrips: both sides grow" at={2} />
			<AreaStrips x={240} y={880} unit={120} u={4} v={3} du={du} dv={dv} stripsAt={10} tags={{side: 'Δu × v', top: 'u × Δv', corner: 'Δu × Δv', at: 30}} sideLabels={{u: () => 'u = 4 m', v: () => 'v = 3 m'}} />
			<GrowthBars x={1060} y={300} w={780} max={8} title="Area added" rows={[
				{label: 'real', value: real, digits: 2, unit: 'm²', role: 'answer'},
				{label: 'guess', value: guess, digits: 2, unit: 'm²', role: 'mistake', dashed: true},
			]} />
			<HandTag x={1070} y={640} text="each side's growth × the other side" at={120} role="answer" size={44} />
		</>
	);
};

// 10. TripSim: coded test road, car and dashboard plates, needle, screens and readouts.
const D10: React.FC = () => (
	<>
		<SceneHeading text="TripSim: one trip state drives everything" at={2} />
		<TripSim schedule={[{frame: 0, speed: 0}, {frame: 20, speed: 80}, {frame: 100, speed: 100}, {frame: 160, speed: 60}]} hoursPerFrame={1 / 60}
			road={{x: 96, y: 180, w: 1728, h: 330, pxPerKm: 30}}
			car={{plate: P.car, x: 300, y: 240, w: 440}}
			dashboard={{plate: P.dashboard, x: 96, y: 560, w: 1040, dial: A.dashboardDial, screen: A.dashboardScreenMain, screenSmall: A.dashboardScreenSmall}}
			readout={{x: 1200, y: 580, width: 620}} />
	</>
);

// 11. PairedDerivativePanel (f above f′, rider skipping the excluded 0) and the SignStrip filling as it passes.
const D11: React.FC = () => {
	const f = useCurrentFrame();
	const F: FnFamily = {f: u => u + 1 / u, df: u => 1 - 1 / (u * u), excluded: [0]};
	const tl: FnKey[] = [{frame: 10, x: -2.4}, {frame: 110, x: -0.35}, {frame: 111, x: 0.35}, {frame: 230, x: 2.4}];
	const st = fnStateAt(F, tl, f);
	const PW = 1180, WX = [-2.6, 2.6] as const;
	return (
		<>
			<SceneHeading text="PairedDerivativePanel and SignStrip" at={2} />
			<PairedDerivativePanel x={70} y={140} width={PW} heightTop={350} heightBottom={300} windowX={WX} yTop={[-5, 5]} yBottom={[-4, 2]} family={F} timeline={tl} traceFrom={-2.4}
				topLabel="y = x + 1/x" bottomLabel="f′(x)" yTopTicks={[-4, 4]} yBottomTicks={[-2, 1]} tints={{at: 10}}
				rings={[{x: -1, kind: 'touch', at: 70}, {x: 1, kind: 'cross', at: 180}]} />
			<SignStrip x={70} y={860} width={PW} windowX={WX} follow={st.X}
				boundaries={[{x: -1, kind: 'zero'}, {x: 0, kind: 'excluded'}, {x: 1, kind: 'zero'}]}
				cells={[{sign: 1, test: {x: '−2', value: '+¾'}}, {sign: -1, test: {x: '−½', value: '−3'}}, {sign: -1, test: {x: '½', value: '−3'}}, {sign: 1, test: {x: '2', value: '+¾'}}]} />
			<LiveReadoutBoard x={1320} y={200} width={520} rows={[
				{label: 'x', value: st.X, role: 'a'},
				{label: 'f′(x)', value: st.slope, role: 'gradient', digits: 3},
				{label: 'walking', value: 0, text: directionWord(st.slope, 0.05, ['down', 'level', 'up']), role: 'k'},
			]} />
			<HandTag x={1330} y={720} text="gap at 0: never bridged" at={100} color={MATH_EXCLUDED} size={42} />
		</>
	);
};

// 12. StudioCancellation with the moving domain strip, and StudioRateChainStrips.
const D12: React.FC = () => (
	<>
		<SceneHeading text="Cancellation, domain strip and rate chain" at={2} />
		<StudioCancellation x={110} y={180} size={64} prefix="y =" strikeAt={40}
			top={[{content: '(x − 1)', cancel: true}, {content: '(x + 1)'}]} bottom={[{content: '(x − 1)', cancel: true}]}
			result={{content: <Role r="answer">x + 1</Role>, at: 70}} />
		<StudioDomainStrip conditions={['x ≠ 1']} at={20} path={[{frame: 20, x: 140, y: 400}, {frame: 90, x: 140, y: 400}, {frame: 130, x: 1020, y: 232}]} />
		<StudioRateChainStrips x={110} y={520} w={1700} rows={[
			{label: 'x', from: 1, to: 1.1, role: 'a', at: 10},
			{label: 'u = x²', from: 1, to: 1.21, role: 'k', at: 50},
			{label: 'y = sin u', from: Math.sin(1), to: Math.sin(1.21), role: 'gradient', at: 90},
		]} links={[{label: '× 2x = 2', role: 'k', at: 60}, {label: '× cos u ≈ 0.54', role: 'gradient', at: 100}]} />
	</>
);

// 13. Branch-safe rider on tan x, and the quarter-turn normal on an equal-unit plot.
const D13: React.FC = () => {
	const TAN: FnFamily = {f: u => Math.tan(u), df: u => 1 / Math.cos(u) ** 2, excluded: [-Math.PI / 2, Math.PI / 2, 1.5 * Math.PI]};
	const SQ: FnFamily = {f: u => 0.25 * u * u, df: u => 0.5 * u};
	return (
		<>
			<SceneHeading text="Branch-safe rider (tan x) and the quarter-turn normal" at={2} />
			<FunctionSimulator x={50} y={170} width={1000} height={700} window={{x: [-0.5, 4.2], y: [-4, 4]}} family={TAN} timeline={[{frame: 10, x: 0.2}, {frame: 230, x: 3.6}]} branchSafe={{gap: 0.15}}
				xTicks={piTicks(0, 1.25, 2)} yTicks={[-2, 2]} asymptotes={[Math.PI / 2]} point={{at: 6}} tangent={{at: 10, halfLength: 160}} label={{content: () => 'y = tan x', at: 6, pos: () => [3.4, 3.2]}}
				readout={{x: 120, y: 900, width: 860, inline: true, rows: [{label: 'gradient sec² x', value: s => s.slope, role: 'gradient'}]}} />
			<QuarterTurnNormal x={1080} y={170} width={800} height={740} window={{x: [-2, 4], y: [-1, 4.52]}} family={SQ} timeline={[{frame: 0, x: 2}]} turnAt={60}
				label={{content: () => 'y = x²/4', at: 6, pos: () => [-1.9, 3.9]}} />
			<HandTag x={1180} y={960} text="tangent turns 90° onto the normal" at={100} role="b" size={42} />
		</>
	);
};

// 14. Linked riders, the candidate table, name-swap chips and the interval picture.
const D14: React.FC = () => {
	const SIN: FnFamily = {f: u => Math.sin(u), df: u => Math.cos(u)};
	const COS: FnFamily = {f: u => Math.cos(u), df: u => -Math.sin(u)};
	return (
		<>
			<SceneHeading text="Linked riders, candidates, name swap, interval" at={2} />
			<LinkedRiders x={40} y={160} width={900} height={760} windowX={[0, 2 * Math.PI]} yA={[-1.4, 1.4]} yB={[-1.4, 1.4]} xTicks={piTicks(0, 2, 2)}
				a={{family: SIN, label: 'sin x', tangent: true}} b={{family: COS, label: 'cos x'}} timeline={[{frame: 10, x: 0.3}, {frame: 230, x: 5.5}]}
				readout={{x: 120, y: 940, width: 760, rows: [{label: 'gradient of sin x = cos x', value: (a, b) => a.slope - b.Y, role: 'answer', digits: 3, text: undefined}]}} />
			<StudioCandidateTable x={990} y={160} w={880} headings={['candidate x', 'f(x), exact', 'type']} winnerAt={150} rows={[
				{x: '0', exact: '0', at: 20, kind: 'endpoint'},
				{x: 'π/4', exact: '√2 / 2', decimal: Math.SQRT1_2, at: 50, kind: 'stationary', winner: true},
				{x: '−π/4', exact: '−√2 / 2', at: 80, kind: 'stationary', rejected: {reason: 'outside the interval', at: 110}},
			]} />
			<NameSwapChips x={1000} y={640} left={{content: 'run', role: 'gradient'}} right={{content: 'rise', role: 'a'}} swapAt={120} width={260} />
			<div style={{position: 'absolute', left: 1000, top: 800}}><IntervalPicture w={420} range={[-1, 4]} from={0} to={Math.PI / 2 + 1.2} ticks={[{value: 0, label: '0'}, {value: Math.PI / 2 + 1.2, label: 'b'}]} label="0 ≤ x ≤ b" /></div>
		</>
	);
};

export const DEMO_SCENES: Record<string, React.FC> = {
	'fn-sim': D01, secant: D02, 'base-family': D03, 'fold-excluded': D04, reflection: D05, 'rotating-plate': D06,
	'fill-counter': D07, 'question-card': D08, 'area-strips': D09, trip: D10, 'paired-sign': D11, 'algebra-parts': D12, 'branch-normal': D13, 'linked-candidates': D14,
};

