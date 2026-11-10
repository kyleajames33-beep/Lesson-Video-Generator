// Scenes 1 to 4: the hook (i11's x³ pieces become the garden path's mound and hollow; ∫₋₁¹ x³ cos x dx = 0 with no
// primitive), odd functions cancel (the kit StudioSymmetryPairs half-turn, strip pair and slice transfer), even
// functions double (the footbridge arch and the mirror), and the split of a mixed integrand with the two conditions.
// I11FinalFrameStandIn is i11's described final frame (i11 is not built yet).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, FONT_DISPLAY, INK, prog} from '../../kit';
import {AreaFillLayer, CARD, FrameSvg, HandTag, LiveReadoutBoard, SceneHeading, StudioPlot, StudioSymmetryPairs, fnPath, smooth} from '../../math/studio';
import type {PlotMap} from '../../math/studio';
import {K1, K2, K3, K4} from './cuemap';
import {ABLUE, AnswerBox, BPlot, BoxCard, BridgeRig, CUT, Chip, GRAD, GardenRig, Hand, Int, Lims, PLabel, Row, SOFT, TEAL, Task, Tick, cubic, g} from './parts';

const PI = Math.PI;
const cube = (x: number) => x * x * x;

/** i11's final frame as its design describes it (i11 is not built; replace with its export once it is). */
export const I11FinalFrameStandIn: React.FC = () => (
	<>
		<SceneHeading text="Next: symmetry" at={-300} size={56} />
		<StudioPlot x={40} y={150} width={1060} height={800} window={{x: [-2.5, 2.5], y: [-9, 9]}} xTicks={[-2, -1, 1, 2]} yTicks={[-8, 8]} xLabel="x" yLabel="y = x³" at={-300}>
			{(m: PlotMap) => <>
				<AreaFillLayer m={m} fn={cube} a={-2} to={2} signed />
				<g clipPath={m.clip}><path d={fnPath(m, cube, -2.5, 2.5)} stroke={ABLUE} strokeWidth={6.5} fill="none" /></g>
			</>}
		</StudioPlot>
		<Row x={1160} y={200} at={-300} size={60}><Int lo="−2" hi="2">x³</Int> = ?</Row>
		<Chip x={1160} y={380} at={-300} size={50} color="#d18f1f">Next: symmetry</Chip>
		<div style={{position: 'absolute', left: 1700, top: 340, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 120, color: '#7a4600'}}>?</div>
		<Hand x={1170} y={540} at={-300} size={42} color={SOFT}>the two pieces look exactly alike</Hand>
	</>
);

// ---------- 1. hook ----------
const GP = {x: 40, y: 200, w: 1000};
const GW = {x: [-1.3, 1.3] as [number, number], y: [-0.75, 0.75] as [number, number]};
export const S01: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K1;
	const sw = prog(fr, k.path, 16);
	if (sw <= 0) return <I11FinalFrameStandIn />;
	const soil = prog(fr, k.net, 14);
	return (
		<>
			{sw < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}><I11FinalFrameStandIn /></div> : null}
			<div style={{position: 'absolute', inset: 0, opacity: sw}}>
				<SceneHeading text="How do symmetry and numerical tools check an integral?" at={k.path - 10} size={50} />
				<GardenRig x={GP.x} y={GP.y} w={GP.w} soil={soil} profile={prog(fr, k.along, 14)} tags={prog(fr, k.mound, 12)} />
				<BoxCard x={60} y={760} w={980} at={k.along} size={40} title="the garden path">over 2 m, the ground is y = x³ cos x metres above the planned level (the string)</BoxCard>
				<BPlot x={1080} y={160} w={800} h={520} win={GW} fn={g} xTicks={[-1, 1]} yTicks={[-0.5, 0.5]} xLabel="x (m)" yLabel="height (m)"
					under={m => <g opacity={soil}><AreaFillLayer m={m} fn={g} a={-1} to={1} signed /></g>} />
				<Row x={1090} y={720} at={k.net} size={48}>net soil = <Int lo="−1" hi="1">x³ cos x</Int></Row>
				<Hand x={1100} y={820} at={k.no} size={38} color={SOFT}>no primitive by our rules</Hand>
				<Chip x={1090} y={880} at={k.zero} size={46} color="#287347">= 0 exactly <span style={{color: '#7a4600'}}>?</span></Chip>
				<HandTag x={1500} y={905} text="cut = fill?" at={k.fills} size={44} color={TEAL} />
				<FrameSvg><Countdown start={1073} end={1143} x={1800} y={250} r={46} ringFrom={k.look} /></FrameSvg>
			</div>
		</>
	);
};

// ---------- 2. odd functions cancel ----------
export const S02: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K2;
	return (
		<>
			<SceneHeading text="Odd functions cancel" at={4} size={56} />
			<GardenRig x={GP.x} y={GP.y} w={GP.w} tags={1 - prog(fr, k.alg, 12)} />
			<StudioSymmetryPairs fn={g} h={1} mode="odd" turnAt={k.turn + 10} dur={40} plot={{x: 1080, y: 160, width: 800, height: 520, window: GW, xTicks: [-1, 1], yTicks: [-0.5, 0.5]}} pairs={[{x: 0.55, at: k.pair, width: 0.12}]} transfer={{x: 0.75, at: k.every - 10, dur: 40, width: 0.12}} curveColor={ABLUE} at={-30} />
			<HandTag x={1110} y={210} text="half-turn: same graph" at={k.lands} size={40} color={GRAD} />
			<LiveReadoutBoard x={1080} y={720} width={800} at={k.same} inline size={44} labelSize={28} rows={[
				{label: 'soil cut (mound)', value: CUT, digits: 3, unit: 'm²', role: 'b'},
				{label: 'soil filled (hollow)', value: CUT, digits: 3, unit: 'm²', role: 'k'},
				{label: 'net', value: 0, digits: 3, unit: 'm²', role: 'answer'},
			]} />
			<Row x={60} y={750} at={k.here} size={30} color={SOFT}>(−x)³ = −x³   and   cos(−x) = cos x</Row>
			<Row x={60} y={800} at={k.alg} size={44}>f(−x) = (−x)³ cos(−x) = −x³ cos x = −f(x)</Row>
			<AnswerBox x={60} y={880} at={k.zero} size={46}>f odd: <Int lo="−a" hi="a">f(x)</Int> = 0</AnswerBox>
			<Row x={700} y={892} at={k.prim} size={36}><Lims lo="−2" hi="2">x⁴/4</Lims> = 4 − 4 = 0 <span style={{opacity: prog(fr, k.zero2 + 6, 10)}}><Tick size={36} /></span></Row>
		</>
	);
};

// ---------- 3. even functions double ----------
const BW = 900;
export const S03: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K3;
	return (
		<>
			<SceneHeading text="Even functions double" at={4} size={56} />
			<BridgeRig x={60} y={210} w={BW} mirror={prog(fr, k.foot + 20, 14)} pair={prog(fr, k.now, 12)} />
			<HandTag x={100} y={760} text="mirror: same graph" at={k.foot + 20} size={42} color="#9c5a00" />
			<BoxCard x={60} y={810} w={900} at={k.foot} size={40} title="the footbridge">its arch is y = cos x metres, from −π/2 to π/2</BoxCard>
			<Chip x={560} y={720} at={k.arch} size={44} color="#287347">opening: 2 m²</Chip>
			<StudioSymmetryPairs fn={Math.cos} h={PI / 2} mode="even" turnAt={k.foot + 20} dur={40} plot={{x: 1000, y: 160, width: 880, height: 470, window: {x: [-1.8, 1.8], y: [-0.15, 1.2]}, xTicks: [-1, 1], yTicks: [1]}} pairs={[{x: PI / 4 - 0.08, at: k.now, width: 0.16}]} curveColor={ABLUE} at={-30} />
			<Row x={1010} y={660} at={k.mirror} size={42}>f(−x) = f(x):  cos(−x) = cos x</Row>
			<AnswerBox x={1000} y={740} at={k.means} size={42}>f even: <Int lo="−a" hi="a">f(x)</Int> = 2<Int lo="0" hi="a">f(x)</Int></AnswerBox>
			<Row x={1010} y={880} at={k.forcos} size={40}>= 2<Lims lo="0" hi="π/2">sin x</Lims> = 2(1 − 0) = 2 <span style={{opacity: prog(fr, k.two, 10)}}><Tick size={40} /></span></Row>
		</>
	);
};

// ---------- 4. split a mixed integrand ----------
export const S04: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K4;
	const ghost = prog(fr, k.xcubed, 12) * (1 - prog(fr, k.three + 30, 12));
	return (
		<>
			<SceneHeading text="Split a mixed integrand: two conditions" at={4} size={56} />
			<BPlot x={40} y={150} w={900} h={800} win={{x: [-2.4, 2.4], y: [-9, 21]}} fn={cubic} xTicks={[-2, -1, 1, 2]} yTicks={[-8, 8, 16]} xLabel="x" yLabel="y = x³ + 3x²"
				under={m => <>
					<AreaFillLayer m={m} fn={cubic} a={-2} to={2} signed />
					<g clipPath={m.clip} opacity={0.5 + 0.5 * ghost}><path d={fnPath(m, cube, -2.4, 2.4)} stroke={GRAD} strokeWidth={4} strokeDasharray="12 9" fill="none" /><path d={fnPath(m, x => 3 * x * x, -2.4, 2.4)} stroke={TEAL} strokeWidth={4} strokeDasharray="12 9" fill="none" /></g>
				</>}
				kids={m => <><PLabel p={m.p(1.25, -6)} text="x³: odd" color={GRAD} size={40} hand /><PLabel p={m.p(-2.3, 16)} text="3x²: even" color={TEAL} size={40} hand /></>} />
			<Task x={980} y={150} w={900} at={-30} size={44}>Find <Int lo="−2" hi="2">(x³ + 3x²)</Int></Task>
			<Hand x={990} y={262} at={-30} size={36} color={SOFT}>interval −2 to 2: symmetric</Hand>
			<Row x={990} y={320} at={k.find} size={44}>= <Int lo="−2" hi="2"><span style={{color: GRAD}}>x³</span></Int> + <Int lo="−2" hi="2"><span style={{color: TEAL}}>3x²</span></Int></Row>
			<Row x={990} y={420} at={k.zero} size={44}>= <span style={{color: GRAD}}>0</span> + 2<Int lo="0" hi="2"><span style={{color: TEAL}}>3x²</span></Int> = 2<Lims lo="0" hi="2">x³</Lims></Row>
			<AnswerBox x={990} y={520} at={k.sixteen} size={48}>= 2 × 8 = 16</AnswerBox>
			<Row x={990} y={610} at={k.prims} size={34} color={SOFT}>check: 12 − (−4) = 16 <Tick size={32} /></Row>
			<Chip x={980} y={670} at={k.interval} size={38} color="#b8322a"><Int lo="−1" hi="2">…</Int>: not symmetric, the rules don't apply</Chip>
			<Chip x={980} y={760} at={k.zeroans} size={40} color={INK}>a zero answer is a signed integral, not an area</Chip>
			<StudioPlot x={980} y={850} width={900} height={170} window={{x: [-1.3, 1.3], y: [-0.7, 0.7]}} xTicks={[]} yTicks={[]} xLabel="" yLabel="" at={k.soil}>
				{(m: PlotMap) => <>
					<path d={`${fnPath(m, x => Math.abs(g(x)), -1, 1)}`} fill="none" stroke="none" />
					<AreaFillLayer m={m} fn={g} a={-1} to={1} color="#f8e8c8" outline="#d18f1f" />
					<g clipPath={m.clip}><path d={fnPath(m, g, -1.3, 1.3)} stroke={ABLUE} strokeWidth={4} fill="none" /></g>
				</>}
			</StudioPlot>
			<Hand x={1500} y={880} at={k.area} size={36} color="#9c5a00">area &gt; 0: the soil still moves</Hand>
		</>
	);
};
