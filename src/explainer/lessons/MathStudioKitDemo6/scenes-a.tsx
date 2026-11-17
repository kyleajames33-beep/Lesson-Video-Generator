// MathStudioKitDemo6, scenes 1 to 9: Year 11 Advanced wave 3 transformation parts (brief 245) on the designs' own
// numbers: TransformationTracer (g01, g02, g05), PointImageTable (g02), StretchFromAxis (g03), TransformQueue and
// QueueVerdict (g04), FeatureLedger and PenLiftMark (g05), CircleTracer and its CircleFromCentre mode (w24, g03,
// g06) and TwoSquareTiles (g06). Not a lesson. One 300-frame scene per group.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	AxisShadow, CircleTracer, FeatureLedger, HandTag, LiveReadoutBoard, PenLiftMark, PointImageTable, QueueVerdict, SceneHeading, StretchFromAxis, StudioPlot,
	TransformQueue, TransformationTracer, TwoSquareTiles, circlePoint, imageFn, keyedAt,
} from '../../math/studio';
import type {Keyed, Move} from '../../math/studio';

/** Height that gives equal units for a StudioPlot of this width and window spans. */
const eqH = (width: number, xs: number, ys: number) => ((width - 126) * ys) / xs + 120;
const sq = (x: number) => x * x;
const recip = (x: number) => 1 / x;

// 1. Translations carry asymptotes as whole lines (g01 scene 5): 1/x left 2, up 1; 2ˣ down 3 with its range bar.
const A1: React.FC = () => (
	<>
		<SceneHeading text="TransformationTracer: asymptotes come too" size={52} />
		<StudioPlot x={60} y={170} width={880} height={700} window={{x: [-5, 7], y: [-5, 6]}}>
			{m => <TransformationTracer m={m} parent={recip} breaks={[0]} at={4}
				moves={[{kind: 'slide', axis: 'x', by: -2, at: 30}, {kind: 'slide', axis: 'y', by: 1, at: 90}]}
				asymptotes={[{line: 'x', value: 0, label: true, slip: {at: 220}}, {line: 'y', value: 0, label: true}]}
				points={[{x: 1, y: 1, at: 10, coords: true, ring: {at: 140}}]} imageLabel={{text: 'y = 1/(x + 2) + 1', x: 1.2, y: 3.6, at: 140}} />}
		</StudioPlot>
		<StudioPlot x={980} y={170} width={880} height={700} window={{x: [-5, 7], y: [-5, 6]}}>
			{m => <>
				<TransformationTracer m={m} parent={x => 2 ** x} at={4} moves={[{kind: 'slide', axis: 'y', by: -3, at: 40}]} asymptotes={[{line: 'y', value: 0, label: true}]}
					points={[{x: 0, y: 1, at: 10, coords: true}]} />
				<AxisShadow m={m} rayPoints={[-3, -1, 0, 1, 2].map(v => [v, 2 ** v - 3] as const)} domain={{from: -Infinity, to: Infinity}} range={{from: -3, to: Infinity, closedFrom: false}} castSideAt={130} labels={{range: 'range y > −3'}} />
			</>}
		</StudioPlot>
		<HandTag x={240} y={915} text="asymptotes come too" role="b" at={150} size={40} />
		<HandTag x={1110} y={915} text="the asymptote moves too" role="mistake" at={240} size={40} />
	</>
);

// 2. Reflections (g02 feedback 1): A(−3, 2), B(0, −1), C(4, 0); y → −y in the x-axis, then x → −x in the y-axis.
const PTS = [{name: 'A', x: -3, y: 2}, {name: 'B', x: 0, y: -1}, {name: 'C', x: 4, y: 0}];
const A2: React.FC = () => (
	<>
		<SceneHeading text="Mirror creases, equal ticks, and the image table" size={52} />
		<StudioPlot x={60} y={170} width={740} height={eqH(740, 10, 10)} window={{x: [-5, 5], y: [-5, 5]}}>
			{m => <>
				<TransformationTracer m={m} parent={sq} curve={false} ghost={false} at={4} out={150} requireEqualUnits
					moves={[{kind: 'reflect', axis: 'y', at: 40, dur: 40}]} points={PTS.map(p => ({x: p.x, y: p.y, label: p.name, role: 'height' as const}))} />
				<TransformationTracer m={m} parent={sq} curve={false} ghost={false} at={160} requireEqualUnits
					moves={[{kind: 'reflect', axis: 'x', at: 180, dur: 40}]} points={PTS.map(p => ({x: p.x, y: p.y, label: p.name, role: 'height' as const}))} />
			</>}
		</StudioPlot>
		<PointImageTable x={880} y={260} at={20} points={PTS} title="images"
			columns={[{head: 'y → −y', moves: [{kind: 'reflect', axis: 'y'}], role: 'k', at: 90, stagger: 16}, {head: 'x → −x', moves: [{kind: 'reflect', axis: 'x'}], role: 'a', at: 230, stagger: 16}]} />
		<HandTag x={900} y={720} text="on the mirror: stays" role="k" at={120} size={42} />
	</>
);

// 3. StretchFromAxis (g03 scenes 2 and 3): x → x/2 from the bold blue y-axis; y → y/2 from the bold amber x-axis.
const A3: React.FC = () => (
	<>
		<SceneHeading text="StretchFromAxis: arrows as long as the distance" size={52} />
		<StudioPlot x={60} y={170} width={880} height={700} window={{x: [-1, 7], y: [-1, 10]}}>
			{m => <StretchFromAxis m={m} parent={sq} axis="x" factor={2} at={40} samples={[0.5, 1, 1.5, 2, 2.5, 3]} pairs={[{x: 2, at: 110}, {x: 0, at: 150}]} />}
		</StudioPlot>
		<StudioPlot x={980} y={170} width={880} height={700} window={{x: [-1, 7], y: [-1, 10]}}>
			{m => <StretchFromAxis m={m} parent={sq} axis="y" factor={2} at={130} samples={[0.5, 1, 1.5, 2]} pairs={[{x: 1, at: 200}]} />}
		</StudioPlot>
		<HandTag x={200} y={915} text="inside ÷2: twice as wide" role="a" at={120} size={40} />
		<HandTag x={1120} y={915} text="y/2 = x² → y = 2x²" role="k" at={210} size={40} />
	</>
);

// 4. TransformQueue (g04 scene 2): × 2 then up 1 gives vertex (0, 1); up 1 then × 2 gives (0, 2).
const ST: Move = {kind: 'stretch', axis: 'y', factor: 2}, UP: Move = {kind: 'slide', axis: 'y', by: 1};
const A4: React.FC = () => (
	<>
		<SceneHeading text="TransformQueue: the stretch stretches the slide" size={52} />
		<TransformQueue x={120} y={240} height={520} window={{x: [-3, 3], y: [-1, 9]}} parent={sq} at={4} startRow="x²"
			steps={[{move: ST, label: '× 2 (vertical)', at: 30, row: '2x²'}, {move: UP, label: 'up 1', at: 90, row: '2x² + 1'}]}
			point={{x: 0, y: 0, coords: true, ring: {at: 140}}} />
		<TransformQueue x={1040} y={240} height={520} window={{x: [-3, 3], y: [-1, 9]}} parent={sq} at={4} startRow="x²"
			steps={[{move: UP, label: 'up 1', at: 130, row: 'x² + 1'}, {move: ST, label: '× 2 (vertical)', at: 190, row: '2(x² + 1) = 2x² + 2'}]}
			point={{x: 0, y: 0, coords: true, ring: {at: 240}}} />
		<QueueVerdict x={960} y={858} size={40} parent={sq} a={[ST, UP]} b={[UP, ST]} range={[-3, 3]} at={255} expect="differ" />
	</>
);

// 5. Different axes commute (g04 scene 3): right 1 and × 2 vertical, both orders land on 2(x − 1)².
const RT: Move = {kind: 'slide', axis: 'x', by: 1};
const A5: React.FC = () => (
	<>
		<SceneHeading text="Different axes: both orders give one curve" size={52} />
		<TransformQueue x={120} y={240} height={520} window={{x: [-2, 5], y: [-1, 9]}} parent={sq} at={4} startRow="x²"
			steps={[{move: RT, label: 'right 1', at: 30, row: '(x − 1)²'}, {move: ST, label: '× 2 (vertical)', at: 90, row: '2(x − 1)²'}]} overlay={{moves: [ST, RT], at: 230}} />
		<TransformQueue x={1040} y={240} height={520} window={{x: [-2, 5], y: [-1, 9]}} parent={sq} at={4} startRow="x²"
			steps={[{move: ST, label: '× 2 (vertical)', at: 130, row: '2x²'}, {move: RT, label: 'right 1', at: 190, row: '2(x − 1)²'}]} overlay={{moves: [RT, ST], at: 230}} />
		<QueueVerdict x={960} y={858} size={40} parent={sq} a={[RT, ST]} b={[ST, RT]} range={[-2, 5]} at={250} expect="same" />
	</>
);

// 6. FeatureLedger (g05 scene 2): y = 1/x to y = 3/(x − 2) + 1; the frame carried, then the pen lift at x = 2.
const HYP: Move[] = [{kind: 'stretch', axis: 'y', factor: 3}, {kind: 'slide', axis: 'x', by: 2}, {kind: 'slide', axis: 'y', by: 1}];
const A6: React.FC = () => (
	<>
		<SceneHeading text="FeatureLedger: carry the frame" size={52} />
		<StudioPlot x={40} y={170} width={960} height={700} window={{x: [-4, 8], y: [-5, 7]}}>
			{m => <>
				<TransformationTracer m={m} parent={recip} breaks={[0]} at={4}
					moves={HYP.map((mv, i) => ({...mv, at: 30 + i * 30, dur: 28}))}
					asymptotes={[{line: 'x', value: 0}, {line: 'y', value: 0}]} points={[{x: 1, y: 1, at: 8}, {x: -1, y: -1, at: 8}]} trailsOut={190} />
				<AxisShadow m={m} fn={imageFn(recip, HYP)} domain={{from: -Infinity, to: Infinity, gaps: [2]}} range={{from: -Infinity, to: Infinity, gaps: [1]}} castDownAt={190} castSideAt={225} dur={30} />
				<PenLiftMark m={m} fn={imageFn(recip, HYP)} c={2} y={1} at={262} />
			</>}
		</StudioPlot>
		<FeatureLedger x={1010} y={200} width={640} parentHead="y = 1/x" imageHead="y = 3/(x − 2) + 1" moves={HYP} at={10} size={40}
			bracket={{from: 0, to: 4, at: 160, label: 'the frame'}}
			rows={[
				{kind: 'vAsym', value: 0, at: 14, carryAt: 80, expect: 'x = 2'},
				{kind: 'hAsym', value: 0, at: 20, carryAt: 110, expect: 'y = 1'},
				{kind: 'points', pts: [[1, 1], [-1, -1]], at: 26, carryAt: 125, name: 'key points', expect: '(3, 4)\n(1, −2)'},
				{kind: 'domain', set: {from: -Infinity, to: Infinity, gaps: [0]}, at: 32, carryAt: 200, expect: 'x ≠ 2'},
				{kind: 'range', set: {from: -Infinity, to: Infinity, gaps: [0]}, at: 38, carryAt: 235, expect: 'y ≠ 1'},
				{kind: 'solve', text: '(0, −½), (−1, 0)', at: 270},
			]} />
		<HandTag x={1060} y={915} text="break: discontinuity" role="mistake" at={265} size={40} />
	</>
);

// 7. CircleFromCentre (g06 scenes 2 and 3): the 5 km circle slides to (3, −2); (x − 2)² + (y + 1)² = 16 from spokes.
const A7: React.FC = () => (
	<>
		<SceneHeading text="CircleTracer: slide it, or step out the spokes" size={52} />
		<StudioPlot x={30} y={170} width={760} height={eqH(760, 15, 14)} window={{x: [-6, 9], y: [-8, 6]}}>
			{m => <CircleTracer m={m} r={5} at={4} slide={{to: [3, -2], at: 30, yAt: 80, dur: 40}} ghost={{at: 4, label: 'x² + y² = 25'}}
				points={[{x: 6, y: 2, at: 150, label: '(6, 2)', onCircle: true, triangle: {at: 190, across: '3 across', up: '4 up'}}]} centreLabel />}
		</StudioPlot>
		<StudioPlot x={1000} y={150} width={740} height={eqH(740, 12, 12)} window={{x: [-4, 8], y: [-7, 5]}}>
			{m => <CircleTracer m={m} a={2} b={-1} r={4} at={4} spokes={{at: 30, stagger: 16, coords: true}} bars={{domainAt: 170, rangeAt: 215, labels: true}} centreLabel />}
		</StudioPlot>
		<HandTag x={60} y={915} text="(x − 3)² + (y + 2)² = 25" role="b" at={130} size={40} />
		<HandTag x={1020} y={915} text="one radius each way" role="k" at={110} size={40} />
	</>
);

// 8. The running point (w24 scene 2) and the enlargement and oval (g03 scene 6).
const ANG: Keyed = [[20, 36.87], [140, 126.87], [180, 126.87], [280, 400]];
const A8: React.FC = () => {
	const f = useCurrentFrame();
	const [X, Y] = circlePoint(0, 0, 10, keyedAt(ANG, f));
	return (
		<>
			<SceneHeading text="CircleTracer: x² + y² stays 100; scales make an enlargement or an oval" size={48} />
			<StudioPlot x={30} y={170} width={720} height={eqH(720, 26, 26)} window={{x: [-13, 13], y: [-13, 13]}} xTicks={[-10, -5, 5, 10]} yTicks={[-10, -5, 5, 10]}>
				{m => <CircleTracer m={m} r={10} at={4} color="#d18f1f" tracer={{angle: ANG, at: 10, labels: true}} />}
			</StudioPlot>
			<LiveReadoutBoard x={780} y={260} width={300} at={10} inline size={42} rows={[
				{label: 'x', value: X, digits: 2, role: 'a'}, {label: 'y', value: Y, digits: 2, role: 'b'},
				{label: 'x²', value: X * X, digits: 1, role: 'a'}, {label: 'y²', value: Y * Y, digits: 1, role: 'b'},
				{label: 'x² + y²', value: X * X + Y * Y, digits: 1, role: 'gradient'},
			]} />
			<StudioPlot x={1150} y={170} width={720} height={eqH(720, 8, 8)} window={{x: [-4, 4], y: [-4, 4]}}>
				{m => <CircleTracer m={m} r={[[30, 1], [90, 3], [150, 3], [180, 1]]} sx={[[200, 1], [250, 2]]} at={4} spokes={{at: 10, stagger: 4, rings: false, out: 190}} />}
			</StudioPlot>
			<HandTag x={1170} y={915} text="enlargement × 3, then width only: an oval" role="a" at={120} size={38} />
		</>
	);
};

// 9. TwoSquareTiles (g06 scene 4): x² − 4x and y² + 2y complete with corners 4 and 1; 11 + 4 + 1 = 16.
const A9: React.FC = () => (
	<>
		<SceneHeading text="TwoSquareTiles: complete both squares, add to both sides" size={52} />
		<div style={{position: 'absolute', left: 120, top: 190, fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: 52, color: '#26231f'}}>
			<span style={{color: '#13767a'}}>(x² − 4x)</span> + <span style={{color: '#6b4fa0'}}>(y² + 2y)</span> = 11
		</div>
		<TwoSquareTiles x={160} y={340} bx={-4} by={2} constant={11} unit={78} xValue={3.4} gapX={260} at={4} expectRight={16}
			xCue={{splitAt: 30, moveAt: 50, gapAt: 90, fillAt: 110, labelAt: 120}} yCue={{splitAt: 140, moveAt: 160, gapAt: 190, fillAt: 205, labelAt: 215}}
			balance={{x: 120, y: 820, at: 230, totalAt: 260}} />
		<HandTag x={1470} y={420} text="half of −4 is −2, (−2)² = 4" role="b" at={100} size={40} />
		<HandTag x={1470} y={520} text="half of 2 is 1, 1² = 1" role="gradient" at={200} size={40} />
		<HandTag x={1470} y={700} text="add to both sides" role="k" at={240} size={40} />
	</>
);

export const SCENES_A: Record<string, React.FC> = {
	'tracer-asymptotes': A1, 'tracer-reflect-table': A2, 'stretch-from-axis': A3, 'queue-same-axis': A4, 'queue-different-axes': A5,
	'feature-ledger': A6, 'circle-slide-spokes': A7, 'circle-tracer-scale': A8, 'two-square-tiles': A9,
};
