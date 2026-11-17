// MathStudioKitDemo4, scenes 8 to 15: Year 11 Advanced wave 1 function and graph parts (brief 245) on the designs'
// own numbers: NumberLineRay (w05, w06, w09), MappingDiagram (w07), VerticalLineSweep (w07), FunctionMachine (w08,
// w27), ModelCard and RegionLabels (w12, w13), AxisShadow (w09, g05) and CrossingCounter (w14, w17).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	AxisShadow, CrossingCounter, FunctionMachine, HandTag, LiveReadoutBoard, MappingDiagram, ModelCard, NumberLineRay, RegionLabels, SceneHeading, StudioPlot, VerticalLineSweep,
	fnPath, kf, MATH_ROLES,
} from '../../math/studio';
import {FONT_HAND} from '../../kit';

// 8. NumberLineRay: a ray, the mirror through 0, test dots, whole dots and a union with brackets.
const B1: React.FC = () => (
	<>
		<SceneHeading text="NumberLineRay: rays, the mirror, test dots, brackets" size={52} />
		<NumberLineRay x={200} y={140} width={1520} height={200} range={[-10, 10]} at={4}
			pieces={[{set: {op: '<', value: 4}, at: 10, out: 80}]}
			points={[{value: 2, at: 96, mirrorAt: 150}, {value: 5, at: 96, mirrorAt: 150}]} fold={{at: 140, label: '× (−1)'}} />
		<HandTag x={1560} y={140} text="order swaps" role="gradient" at={190} size={40} />
		<NumberLineRay x={200} y={350} width={1520} height={200} range={[-10, 10]} at={4}
			pieces={[{set: {op: '≤', value: -5}, at: 20}]} tests={[{value: -6, at: 70, label: '−2(−6) = 12 ≥ 10 ✓'}, {value: 0, at: 110, label: '−2(0) = 0 ≥ 10 ✗'}]} />
		<NumberLineRay x={200} y={560} width={1520} height={200} range={[-2, 12]} at={4}
			pieces={[{set: {op: '≤', value: 8}, at: 30}]} whole={{from: 0, to: 8, at: 90, stagger: 5}} />
		<HandTag x={1100} y={600} text="whole trips: 0 to 8" role="a" at={130} size={40} />
		<NumberLineRay x={200} y={770} width={1520} height={200} range={[-6, 8]} at={4}
			pieces={[{set: {op: '<', value: -2}, at: 40, bracketsAt: 200}, {set: {op: '>', value: 3}, at: 70, bracketsAt: 200}]} tests={[{value: 0, at: 150, label: 'outside'}]} />
	</>
);

// 9. MappingDiagram: buttons to snacks; B2's second arrow; reversing breaks the function (w07 scenes 2 and 3).
const BUTTONS = {title: 'buttons', role: 'a' as const, items: ['A1', 'A2', 'B1', 'B2'].map(id => ({id, label: id}))};
const SNACKS = {title: 'snacks', role: 'b' as const, items: [['chips', 'chips'], ['apple', 'apple'], ['muesli', 'muesli bar'], ['water', 'water']].map(([id, label]) => ({id, label}))};
const B2: React.FC = () => (
	<>
		<SceneHeading text="MappingDiagram: verdict computed from the arrows" />
		<MappingDiagram x={180} y={170} width={1200} height={600} left={BUTTONS} right={SNACKS} at={4} reverseAt={180}
			arrows={[{from: 'A1', to: 'chips', at: 10}, {from: 'A2', to: 'apple', at: 25}, {from: 'B1', to: 'chips', at: 40}, {from: 'B2', to: 'muesli', at: 55}, {from: 'B2', to: 'water', at: 90}]}
			verdict={{at: 70, x: 180, y: 820}} />
		<HandTag x={1440} y={420} text="B2: two outputs" role="mistake" at={100} size={44} out={170} />
		<HandTag x={1440} y={420} text="reversed: chips has two" role="mistake" at={210} size={44} />
	</>
);

// 10. VerticalLineSweep on y = x² and on the circle x² + y² = 9 (w07 scene 5).
const B3: React.FC = () => (
	<>
		<SceneHeading text="VerticalLineSweep: a live hit count" />
		<VerticalLineSweepPair />
	</>
);
const VerticalLineSweepPair: React.FC = () => (
	<>
		<VerticalLineSweep x={50} y={170} width={880} height={760} window={{x: [-4, 4], y: [-4, 10]}} xTicks={[-3, -2, -1, 1, 2, 3]} yTicks={[2, 4, 6, 8]}
			branches={[{f: x => x * x}]} curveAt={4} curveLabel={{text: 'y = x²', x: 1.5, y: 8.6}}
			sweep={[[30, -3], [80, -2], [110, -2], [170, 2], [200, 2], [250, 3]]} coords={[[80, 110], [170, 200]]} />
		<VerticalLineSweep x={990} y={170} width={880} height={760} window={{x: [-4.4, 4.4], y: [-4, 4]}} xTicks={[-3, -2, -1, 1, 2, 3]} yTicks={[-3, -2, -1, 1, 2, 3]}
			branches={[{f: x => Math.sqrt(9 - x * x), from: -3, to: 3}, {f: x => -Math.sqrt(9 - x * x), from: -3, to: 3}]} curveAt={4} curveLabel={{text: 'x² + y² = 9', x: 1.6, y: 3.4}}
			sweep={[[30, -3.8], [110, 0], [160, 0], [250, 3.8]]} coords={[[110, 160]]} />
	</>
);

// 11. FunctionMachine (w08 scene 5): f(2) = 3, f(−1) = 9, and −1 without brackets gives 7; a √ machine refuses −3.
const B4: React.FC = () => (
	<>
		<SceneHeading text="FunctionMachine: the output is computed from the slots" />
		<FunctionMachine x={150} y={170} rule="( )² − 3( ) + 5" name="f" at={4} inputs={[
			{card: '2', at: 10},
			{card: '−1', at: 100},
			{card: '−1', at: 190, bracket: false, outputRole: 'mistake'},
		]} />
		<HandTag x={160} y={640} text="brackets!" role="a" at={130} size={44} out={185} />
		<HandTag x={160} y={640} text="no bracket: −1² = −1, so 7" role="mistake" at={240} size={44} />
		<FunctionMachine x={1120} y={600} compact rule="√( )" name="√" role="gradient" at={4} domain={v => v >= 0} refuseLabel="can't take a negative" inputs={[
			{card: '4', at: 30},
			{card: '−3', at: 140},
		]} />
	</>
);

// 12. ModelCard (w12 scene 2) and RegionLabels with a rider (w13 scene 3).
const C = (n: number) => 200 + 3 * n, R = (n: number) => 5 * n;
const B5: React.FC = () => {
	const f = useCurrentFrame();
	const n = kf(f, [[60, 0], [200, 100], [230, 100], [290, 250]]);
	return (
		<>
			<SceneHeading text="ModelCard and RegionLabels" />
			<ModelCard x={96} y={190} w={800} at={4} lines={[
				['A gym charges a ', {id: 'fee', text: '$60', value: '60', role: 'b'}, ' joining fee'],
				['plus ', {id: 'month', text: '$25', value: '25', role: 'gradient'}, ' per month.'],
			]} equations={[{x: 150, y: 520, segs: ['C = ', {slot: 'fixed'}, ' + ', {slot: 'rate'}, 'm'], at: 20}]}
				flights={[{span: 'fee', slot: 'fixed', at: 50, tag: {text: 'fixed: paid once'}}, {span: 'month', slot: 'rate', at: 110, tag: {text: 'rate: every month', dx: 60, dy: 50}}]} />
			<StudioPlot x={960} y={170} width={900} height={720} window={{x: [0, 260], y: [0, 1400]}} xTicks={[50, 100, 150, 200, 250]} yTicks={[200, 400, 600, 800, 1000, 1200]} xLabel="n cups" yLabel="dollars" at={4}>
				{m => {
					const [rx] = m.p(n, 0);
					return (
						<>
							<RegionLabels m={m} f1={C} f2={R} xFrom={0} xTo={260} riderX={n} tones={{above1: 'grey', above2: 'b'}} labels={{above1: 'loss', above2: 'profit'}} at={60} layer="fill" />
							<path d={fnPath(m, C, 0, 260, 20)} stroke={MATH_ROLES.gradient.stroke} strokeWidth={6} fill="none" />
							<path d={fnPath(m, R, 0, 260, 20)} stroke={MATH_ROLES.a.stroke} strokeWidth={6} fill="none" />
							<RegionLabels m={m} f1={C} f2={R} xFrom={0} xTo={260} riderX={n} tones={{above1: 'grey', above2: 'b'}} labels={{above1: 'loss', above2: 'profit'}} at={60} crossing={{at: 200}} layer="labels" />
							{f >= 60 ? <line x1={rx} x2={rx} y1={m.p(n, C(n))[1]} y2={m.p(n, R(n))[1]} stroke={MATH_ROLES.k.stroke} strokeWidth={5} /> : null}
						</>
					);
				}}
			</StudioPlot>
			<LiveReadoutBoard x={150} y={680} width={560} at={60} inline rows={[
				{label: 'cups n', value: n, digits: 0, role: 'k'},
				{label: 'profit R − C', value: R(n) - C(n), digits: 0, role: R(n) - C(n) >= 0 ? 'b' : undefined},
			]} />
		</>
	);
};

// 13. AxisShadow on √(2x + 6) (w09 scene 6), x² − 4x + 5 (w09 scene 7) and 3/(x − 2) + 1 with gaps (g05).
const B6: React.FC = () => (
	<>
		<SceneHeading text="AxisShadow: domain and range as shadows" />
		<StudioPlot x={20} y={200} width={620} height={700} window={{x: [-4, 6], y: [-1.5, 5]}} xTicks={[-3, -2, 2, 4]} yTicks={[1, 2, 3, 4]} at={4}>
			{m => <>
				<path d={fnPath(m, x => Math.sqrt(2 * x + 6), -3, 6)} stroke={INK_CURVE} strokeWidth={6} fill="none" />
				<AxisShadow m={m} fn={x => Math.sqrt(2 * x + 6)} domain={{from: -3, to: Infinity}} range={{from: 0, to: Infinity}} castDownAt={30} castSideAt={110} labels={{domain: '[−3, ∞)', range: '[0, ∞)'}} />
			</>}
		</StudioPlot>
		<StudioPlot x={650} y={200} width={620} height={700} window={{x: [-1, 5], y: [-1, 9]}} xTicks={[1, 2, 3, 4]} yTicks={[2, 4, 6, 8]} at={4}>
			{m => <>
				<path d={fnPath(m, x => x * x - 4 * x + 5, -1, 5)} stroke={INK_CURVE} strokeWidth={6} fill="none" />
				<AxisShadow m={m} fn={x => x * x - 4 * x + 5} domain={{from: -Infinity, to: Infinity}} range={{from: 1, to: Infinity}} castDownAt={60} castSideAt={140} labels={{domain: 'all real x', range: '[1, ∞)'}} />
			</>}
		</StudioPlot>
		<StudioPlot x={1280} y={200} width={620} height={700} window={{x: [-3, 7], y: [-4, 6]}} xTicks={[-2, 2, 4, 6]} yTicks={[-2, 2, 4]} at={4}>
			{m => <>
				<path d={fnPath(m, x => 3 / (x - 2) + 1, -3, 7, 400, [2])} stroke={INK_CURVE} strokeWidth={6} fill="none" clipPath={m.clip} />
				<AxisShadow m={m} fn={x => 3 / (x - 2) + 1} domain={{from: -Infinity, to: Infinity, gaps: [2]}} range={{from: -Infinity, to: Infinity, gaps: [1]}} castDownAt={90} castSideAt={170} labels={{domain: 'x ≠ 2', range: 'y ≠ 1'}} />
			</>}
		</StudioPlot>
	</>
);
const INK_CURVE = '#26231f';

// 14. CrossingCounter sag mode (w14 scenes 1 and 5): ends pinned at (0, 1.5) and (4, 1.5).
const B7: React.FC = () => (
	<>
		<SceneHeading text="CrossingCounter: one slider drives curve, Δ and count" size={54} />
		<CrossingCounter x={60} y={210} width={1020} height={640} window={{x: [-0.5, 4.5], y: [-1, 2]}} xTicks={[1, 2, 3, 4]} yTicks={[-1, 1]} xLabel="x (m)" yLabel="h (m)"
			mode={{kind: 'sag', x0: 0, x1: 4, yEnd: 1.5}} timeline={[[10, 0.2], [80, 0.3], [120, 0.375], [190, 0.375], [260, 0.55]]} at={4}
			readout={{x: 1180, y: 200, width: 600, paramLabel: 'sag a', paramRole: 'gradient'}}
			slider={{x: 1000, y: 650, width: 480, symbol: 'a', role: 'gradient', min: 0.2, max: 0.55, ticks: [{value: 0.25, label: '1/4'}, {value: 0.375, label: '3/8'}, {value: 0.5, label: '1/2'}]}} />
		<div style={{position: 'absolute', left: 1180, top: 870, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: MATH_ROLES.k.ink}}>touches at a = 3/8</div>
	</>
);

// 15. CrossingCounter line mode (w17 scene 5): y = 2x + c slides down across y = x².
const B8: React.FC = () => (
	<>
		<SceneHeading text="CrossingCounter line mode: meeting points of a line" size={54} />
		<CrossingCounter x={60} y={200} width={1000} height={720} window={{x: [-3, 4], y: [-4, 10]}} xTicks={[-2, -1, 1, 2, 3]} yTicks={[-2, 2, 4, 6, 8]}
			mode={{kind: 'line', a: 1, b: 0, c: 0, slope: 2}} timeline={[[10, 3], [100, -1], [170, -1], [260, -3]]} at={4}
			readout={{x: 1180, y: 220, width: 600, paramLabel: 'intercept c', paramRole: 'b', countLabel: 'meeting points', digits: 2}} />
		<HandTag x={1190} y={700} text="Δ = 4 + 4c" role="gradient" at={40} size={46} />
	</>
);

export const SCENES_B: Record<string, React.FC> = {
	'number-line': B1, mapping: B2, 'vertical-sweep': B3, 'function-machine': B4, 'model-region': B5, 'axis-shadow': B6, 'crossing-sag': B7, 'crossing-line': B8,
};
