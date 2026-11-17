// MathStudioKitDemo6, scenes 10 to 22: Year 11 Advanced wave 3 probability and data parts (brief 245) on the
// designs' own numbers: SetBraces and SubsetTest (s01), OutcomeArray (s04, s06, s07, s09), VennDiagram (s02, s03,
// s05, s07), ProbabilityTree (s06, s07), TwoWayTable (s07), DotsVsInterval (s09), FrequencyTable (s10) and the
// histogram layers FrequencyPolygon, CumulativeColumns, CumulativePolygon and MedianReader (s11). Not a lesson.
import React from 'react';
import {
	ClassHistogram, CumulativeColumns, CumulativePolygon, DotsVsInterval, FrequencyPolygon, FrequencyTable, HandTag, MedianReader, OutcomeArray, ProbabilityTree,
	SceneHeading, SetBraces, StudioPlot, SubsetTest, TwoWayTable, VennDiagram, unionLights,
} from '../../math/studio';

// 10. SetBraces (s01 scene 2): E drops in, reorders (same set), a repeated 6 bounces off; the infinite set; |E| = 6.
const B1: React.FC = () => (
	<>
		<SceneHeading text="SetBraces: any order, each element once" size={52} />
		<SetBraces x={160} y={330} name="E" elements={[2, 4, 6, 8, 10, 12]} drop={{at: 10, stagger: 8}} order={{to: [12, 10, 8, 6, 4, 2], at: 80, dur: 34}} reject={{element: 6, at: 140}} size={60} />
		<SetBraces x={160} y={560} elements={[0, 2, 4, 6]} drop={{at: 190, stagger: 6}} ellipsis={{at: 225}} size={60} />
		<SetBraces x={160} y={800} name="E" elements={[2, 4, 6, 8, 10, 12]} at={230} badge={{at: 240, stagger: 8}} size={60} />
		<HandTag x={1200} y={330} text="any order" role="a" at={110} size={44} />
		<HandTag x={1200} y={420} text="each element once" role="mistake" at={160} size={44} />
		<HandTag x={1000} y={560} text="infinite: never ends" role="a" at={235} size={44} />
	</>
);

// 11. SubsetTest (s01 scene 6): A = {1, 3} ⊆ B; C = {1, 3, 5} ⊈ B; ∅ ⊆ B.
const B2: React.FC = () => (
	<>
		<SceneHeading text="SubsetTest: test every element" size={52} />
		<SubsetTest x={160} y={260} a={{name: 'A', elements: [1, 3]}} b={{name: 'B', elements: [1, 2, 3, 4]}} testAt={20} stagger={26} verdictAt={90} gapY={140} />
		<SubsetTest x={160} y={590} a={{name: 'C', elements: [1, 3, 5]}} b={{name: 'B', elements: [1, 2, 3, 4]}} at={110} testAt={130} stagger={26} verdictAt={225} gapY={140} />
		<SubsetTest x={1250} y={590} a={{name: '∅', elements: []}} b={{name: 'B', elements: [1, 2, 3, 4]}} at={240} testAt={250} verdictAt={255} gapY={140} verdictX={1500} />
		<HandTag x={1250} y={300} text="smaller isn't enough" role="mistake" at={230} size={42} />
	</>
);

// 12. OutcomeArray (s06 scene 2, s09 scene 3, s07 scene 1): pairs, sevens, the rule card X = total, then given total 8.
const pair = (r: number, c: number) => `(${c + 1}, ${r + 1})`;
const B3: React.FC = () => (
	<>
		<SceneHeading text="OutcomeArray: light a rule, relabel, restrict" size={52} />
		<OutcomeArray x={260} y={240} rows={6} cols={6} cell={110} size={34} text={pair} fillAt={6} fillStagger={1}
			colLabels={['1', '2', '3', '4', '5', '6']} rowLabels={['1', '2', '3', '4', '5', '6']} colTitle={{text: 'white', role: 'a'}} rowTitle={{text: 'red', role: 'b'}}
			rings={[{r: 1, c: 0, at: 50, out: 80}, {r: 0, c: 1, at: 50, out: 80}]}
			lights={[{pred: (r, c) => r + c + 2 === 7, at: 90, out: 190, role: 'gradient', stagger: 5}, {pred: (r, c) => r + c + 2 === 8, at: 200, role: 'b', stagger: 4}, {pred: (r, c) => r === c && r + c + 2 === 8, at: 240, role: 'gradient'}]}
			relabel={[{text: (r, c) => String(r + c + 2), at: 140}]} restrict={{pred: (r, c) => r + c + 2 === 8, at: 215}}
			tally={{pred: (r, c) => r === c, at: 250, x: 1080, y: 560, text: (n, N) => `P(double | total 8) = ${n}/${N}`, size: 46, role: 'answer'}} />
		<HandTag x={1080} y={340} text="(1, 2) ≠ (2, 1)" role="a" at={50} out={130} size={44} />
		<HandTag x={1080} y={420} text="X = total" role="a" at={145} size={44} />
		<HandTag x={1080} y={660} text="ruled out" role="height" at={225} size={44} />
	</>
);

// 13. Ordered draws (s06 scene 7): 10 × 9 without the diagonal, R rows banded, R then B violet: 25 of 90. Die and coin (s04).
const RB = ['R', 'R', 'R', 'R', 'R', 'B', 'B', 'B', 'B', 'B'];
const B4: React.FC = () => (
	<>
		<SceneHeading text="Ordered draws and predicate lighting" size={52} />
		<OutcomeArray x={150} y={250} rows={10} cols={9} ordered cell={60} size={30} text={(r, j) => RB[j]} rowLabels={RB} fillAt={4} fillStagger={0.5}
			colTitle={{text: '2nd: the 9 left'}} bands={[{rows: [0, 1, 2, 3, 4], label: 'R first', at: 60}]}
			lights={[{pred: (r, j) => r < 5 && j >= 5, at: 100, role: 'gradient', stagger: 1}]}
			tally={{pred: (r, j) => r < 5 && j >= 5, at: 150, x: 150, y: 915, text: (n, N) => `R then B: ${n}/${N} = 5/18`, size: 44}} />
		<OutcomeArray x={1080} y={330} rows={2} cols={6} cell={112} size={36} text={(r, c) => `${c + 1}${r ? 'T' : 'H'}`} fillAt={10} fillOrder="col" fillStagger={3}
			colLabels={['1', '2', '3', '4', '5', '6']} rowLabels={['H', 'T']}
			lights={unionLights((r, c) => (c + 1) % 2 === 0, r => r === 0, 180)}
			tally={{pred: (r, c) => (c + 1) % 2 === 0 || r === 0, at: 200, x: 1080, y: 640, text: (n, N) => `P(A ∪ B) = ${n}/${N}`, size: 46}} />
		<HandTag x={1080} y={760} text="or: either, or both" role="gradient" at={210} size={42} />
	</>
);

// 14. VennDiagram counts (s02 scene 4) and counts becoming probabilities (s05 scene 2).
const B5: React.FC = () => (
	<>
		<SceneHeading text="VennDiagram: fill the middle first; counts to probabilities" size={52} />
		<VennDiagram x={60} y={180} width={900} height={600} uLabel="U: 50 cones" labels={{A: 'C', B: 'V'}}
			regions={{AB: {text: '8', at: 20}, A: {text: '22', at: 60}, B: {text: '12', at: 100}, out: {text: '8', at: 140}}}
			shade={[{regions: ['A', 'out'], at: 230, label: 'V̅: 22 + 8 = 30'}]} sum={{at: 180, total: 50, suffix: ' = |U|'}} />
		<VennDiagram x={1000} y={180} width={860} height={600} uLabel="40 rooms" labels={{A: 'A: sea view', B: 'B: spa'}} labelSize={38}
			regions={{A: [{text: '10', at: 10}, {text: '0.25', at: 120}], AB: [{text: '6', at: 10}, {text: '0.15', at: 140}], B: [{text: '4', at: 10}, {text: '0.1', at: 160}], out: [{text: '20', at: 10}, {text: '0.5', at: 180}]}}
			sum={{at: 210, total: 1}} />
		<HandTag x={1040} y={915} text="÷ |S| everywhere" role="height" at={130} size={42} />
	</>
);

// 15. Double-count ticks (s03 scene 2): 17 print only, 9 both, 10 ebook only; ticks climb to 45, then the overlap loses one each.
const B6: React.FC = () => (
	<>
		<SceneHeading text="VennDiagram ticks: the overlap counted twice" size={52} />
		<VennDiagram x={160} y={180} width={1100} height={720} uLabel="U: 36 members" labels={{A: 'P', B: 'E'}}
			dots={{counts: {A: 17, AB: 9, B: 10}, at: 10, stagger: 1}} ticks={{aAt: 60, bAt: 140, stagger: 2, removeAt: 240, counter: {x: 1320, y: 420, size: 60}}}
			pulse={[{region: 'AB', at: 205}]} />
		<HandTag x={1320} y={540} text="counted twice" role="gradient" at={205} size={46} />
		<HandTag x={1320} y={640} text="each member once" role="answer" at={255} size={46} />
	</>
);

// 16. Disjoint slide (s02 scene 5) and restrict to B (s07 scene 3).
const B7: React.FC = () => (
	<>
		<SceneHeading text="VennDiagram: disjoint and restrict modes" size={52} />
		<VennDiagram x={50} y={190} width={880} height={600} uLabel="U = {1, ..., 9}" labels={{A: 'P', B: 'E'}}
			items={[{label: '2', region: 'A', at: 20}, {label: '3', region: 'A', at: 28}, {label: '5', region: 'A', at: 36}, {label: '7', region: 'A', at: 44}, {label: '4', region: 'B', at: 52}, {label: '6', region: 'B', at: 60}, {label: '8', region: 'B', at: 68}, {label: '1', region: 'out', at: 76}, {label: '9', region: 'out', at: 84}]}
			separate={{at: 120, dur: 40}} />
		<VennDiagram x={990} y={190} width={880} height={600} uLabel="S" labels={{A: 'A', B: 'B'}} shade={[{regions: ['AB'], at: 20}]}
			regions={{AB: {text: 'A ∩ B', at: 20, size: 40}, A: {text: 'A only', at: 20, size: 36}, B: {text: 'B only', at: 20, size: 36}}} restrict={{to: 'B', at: 160, dur: 40}} />
		<HandTag x={120} y={890} text="disjoint: nothing in common" role="gradient" at={165} size={42} />
		<HandTag x={1060} y={890} text="B becomes the new whole" role="b" at={205} size={42} />
	</>
);

// 17. ProbabilityTree (s06 scenes 4 and 5): G 0.6, R 0.4, then G 0.7, R 0.3; exactly one green 0.46.
const B8: React.FC = () => (
	<>
		<SceneHeading text="ProbabilityTree: along a branch multiply, across add" size={52} />
		<ProbabilityTree x={140} y={240} width={1240} height={600} stages={[{title: '1st light', at: 10, role: 'a'}, {title: '2nd light', at: 40, role: 'b'}]}
			branches={[{name: 'G', p: 0.6, children: [{name: 'G', p: 0.7}, {name: 'R', p: 0.3}]}, {name: 'R', p: 0.4, children: [{name: 'G', p: 0.7}, {name: 'R', p: 0.3}]}]}
			tips={{at: 120, stagger: 16}} ride={[{path: 'G/G', at: 80, dur: 36}]} light={[{paths: ['G/R', 'R/G'], at: 200, role: 'gradient'}]}
			sum={{paths: ['G/R', 'R/G'], at: 230, x: 140, y: 905, label: 'P(exactly one green)'}} />
		<HandTag x={1420} y={300} text="path = one outcome" role="height" at={80} size={42} />
		<HandTag x={1420} y={380} text="paths add to 1" role="answer" at={190} size={42} />
	</>
);

// 18. Without replacement (s06 scene 7, neutral lettered branches) and the delivery tree restricted to late (s07 scene 6).
const B9: React.FC = () => (
	<>
		<SceneHeading text="Trees: exact fractions, and restricting to an event" size={52} />
		<ProbabilityTree x={80} y={250} width={860} height={560} tipWidth={330} labelSize={38} stages={[{title: '1st', at: 10}, {title: '2nd', at: 40}]}
			branches={[{name: 'R', p: [5, 10], children: [{name: 'R', p: [4, 9]}, {name: 'B', p: [5, 9]}]}, {name: 'B', p: [5, 10], children: [{name: 'R', p: [5, 9]}, {name: 'B', p: [4, 9]}]}]}
			tips={{at: 90, stagger: 12, size: 32}} light={[{paths: ['R/B'], at: 150}]} />
		<ProbabilityTree x={1000} y={250} width={880} height={560} tipWidth={400} labelSize={34} stages={[{title: 'time', at: 20}, {title: 'delivery', at: 50}]}
			branches={[{name: 'peak', p: 0.6, children: [{name: 'late', p: 0.25}, {name: 'on time', p: 0.75}]}, {name: 'off-peak', p: 0.4, children: [{name: 'late', p: 0.1}, {name: 'on time', p: 0.9}]}]}
			tips={{at: 110, stagger: 12, format: 'value', size: 30}} dim={{except: ['peak/late', 'off-peak/late'], at: 190}}
			sum={{paths: ['peak/late', 'off-peak/late'], at: 220, x: 1000, y: 920, label: 'P(late)'}} />
		<HandTag x={120} y={900} text="9 left" role="height" at={60} size={42} />
	</>
);

// 19. TwoWayTable (s07 scenes 4 and 5): restrict to peak (box 120), then the box slides to late's 38; the 30 stays violet.
const B10: React.FC = () => (
	<>
		<SceneHeading text="TwoWayTable: restrict, and the denominator moves" size={52} />
		<TwoWayTable x={200} y={260} rowHeads={['peak', 'off-peak']} colHeads={['late', 'on time']} cells={[[30, 90], [8, 72]]} fill={{at: 10, stagger: 16}}
			expectTotals={{rows: [120, 80], cols: [38, 162], grand: 200}} highlight={[{r: 0, c: 0, at: 90}]}
			restrict={[{row: 0, at: 100, out: 175}, {col: 0, at: 180}]} size={48} colWidth={240} />
		<HandTag x={1250} y={380} text="P(late | peak) = 30/120 = 0.25" role="b" at={130} size={42} />
		<HandTag x={1250} y={500} text="P(peak | late) = 30/38 ≈ 0.79" role="b" at={220} size={42} />
		<HandTag x={1250} y={620} text="same 30, new total" role="gradient" at={240} size={42} />
	</>
);

// 20. DotsVsInterval (s09 scenes 1, 4 and 5): counts 8 to 11 with gaps and a crossed 9.5; mass 1.0 to 1.3 kg, a stretch and a point.
const B11: React.FC = () => (
	<>
		<SceneHeading text="DotsVsInterval: count it, or measure it" size={52} />
		<DotsVsInterval x={220} y={360} width={1460}
			discrete={{range: [7, 12], ticks: [7, 8, 9, 10, 11, 12], values: [8, 9, 10, 11], at: 10, stagger: 12, label: 'count', gapsAt: 70, ellipsis: {at: 90}, ghost: {value: 9.5, at: 110}}}
			continuous={{range: [1.0, 1.3], ticks: [1.0, 1.1, 1.2, 1.3], tickDigits: 1, at: 140, dy: 330, label: 'mass (kg)', shade: [{from: 1.1, to: 1.2, at: 190, out: 240, label: 'P(1.1 ≤ M ≤ 1.2): a stretch'}, {from: 1.125, to: 1.135, at: 245, label: '1.125 to 1.135'}], point: {value: 1.1347, at: 215, label: 'M = 1.1347… exactly'}}} />
		<HandTag x={1300} y={240} text="gaps between values" role="height" at={75} size={40} />
	</>
);

// 21. FrequencyTable (s10 scenes 3 and 4): 10, 18, 12; relative, cumulative and cumulative relative; formulas in the bar.
const B12: React.FC = () => (
	<>
		<SceneHeading text="FrequencyTable: every column computed, formulas visible" size={52} />
		<FrequencyTable x={120} y={190} width={1680} values={[1, 2, 3]} freqs={[10, 18, 12]}
			columns={[{key: 'value', at: 6}, {key: 'freq', at: 12}, {key: 'rel', at: 40}, {key: 'cum', at: 120}, {key: 'cumRel', at: 170}]}
			total={{at: 30}} totalTick={90} select={[{key: 'rel', row: 1, at: 80, out: 115}, {key: 'cum', row: 1, at: 140, out: 165}, {key: 'cumRel', row: 2, at: 200}]}
			highlight={[{row: 1, at: 250, keys: ['value', 'cum', 'cumRel']}]} />
		<HandTag x={160} y={900} text="2 or less: 0.70 of spins = 28 spins" role="answer" at={255} size={44} />
	</>
);

// 22. Histogram layers (s11 scenes 2, 4 and 5): frequency polygon closed to the axis; columns to the cumulative staircase; median 2.
const B13: React.FC = () => (
	<>
		<SceneHeading text="FrequencyPolygon and the cumulative staircase" size={52} />
		<ClassHistogram x={40} y={180} width={900} height={720} edges={[-0.5, 0.5, 1.5, 2.5, 3.5, 4.5]} counts={[0, 10, 18, 12, 0]} yMax={20} xTicks={[0, 1, 2, 3, 4]} yTicks={[5, 10, 15, 20]} xLabel="value" countLabels>
			{m => <>
				<FrequencyPolygon m={m} edges={[-0.5, 0.5, 1.5, 2.5, 3.5, 4.5]} counts={[0, 10, 18, 12, 0]} at={30} ghostBars={60} joinAt={70} closeAt={110} />
				<FrequencyPolygon m={m} edges={[-0.5, 0.5, 1.5, 2.5, 3.5, 4.5]} counts={[0, 12, 16, 12, 0]} at={150} out={210} joinAt={150} closeAt={170} role="height" dashed />
			</>}
		</ClassHistogram>
		<StudioPlot x={980} y={180} width={900} height={720} window={{x: [0.5 - 0.5, 4], y: [0, 40]}} xTicks={[1, 2, 3]} yTicks={[10, 20, 30, 40]} xLabel="value" yLabel="cumulative frequency" grid={false}>
			{m => <>
				<CumulativeColumns m={m} edges={[0.5, 1.5, 2.5, 3.5]} counts={[10, 18, 12]} morphAt={60} at={10} />
				<MedianReader m={m} mode="steps" edges={[0.5, 1.5, 2.5, 3.5]} counts={[10, 18, 12]} values={[1, 2, 3]} at={150} expect={2} />
			</>}
		</StudioPlot>
		<HandTag x={1500} y={300} text="first reaches 20" role="answer" at={230} size={40} />
	</>
);

// 23. CumulativePolygon (s11 scene 7 and feedback 2): the ride, median ≈ 22.5 by quarters; the quiz, median ≈ 58.7.
const RIDE = [6, 14, 20, 7, 3], QUIZ = [3, 8, 15, 18, 6];
const B14: React.FC = () => (
	<>
		<SceneHeading text="CumulativePolygon: upper boundaries, across and down" size={52} />
		<StudioPlot x={40} y={180} width={900} height={720} window={{x: [0, 50], y: [0, 50]}} xTicks={[10, 20, 30, 40, 50]} yTicks={[10, 20, 30, 40, 50]} xLabel="waiting time (min)" yLabel="cumulative frequency" grid={false}>
			{m => <>
				<CumulativePolygon m={m} edges={[0, 10, 20, 30, 40, 50]} counts={RIDE} at={10} joinAt={70} slip={{at: 230}} />
				<MedianReader m={m} mode="polygon" edges={[0, 10, 20, 30, 40, 50]} counts={RIDE} at={110} divisions={4} expect={22.5} />
			</>}
		</StudioPlot>
		<StudioPlot x={980} y={180} width={900} height={720} window={{x: [0, 100], y: [0, 50]}} xTicks={[20, 40, 60, 80, 100]} yTicks={[10, 20, 30, 40, 50]} xLabel="score" yLabel="cumulative frequency" grid={false}>
			{m => <>
				<CumulativePolygon m={m} edges={[0, 20, 40, 60, 80, 100]} counts={QUIZ} at={20} joinAt={80} />
				<MedianReader m={m} mode="polygon" edges={[0, 20, 40, 60, 80, 100]} counts={QUIZ} at={140} expect={58.7} />
			</>}
		</StudioPlot>
		<HandTag x={200} y={290} text="upper boundaries, not midpoints" role="mistake" at={240} size={38} />
	</>
);

export const SCENES_B: Record<string, React.FC> = {
	'set-braces': B1, 'subset-test': B2, 'array-dice': B3, 'array-ordered': B4, 'venn-counts': B5, 'venn-ticks': B6, 'venn-modes': B7,
	'tree-lights': B8, 'tree-fractions': B9, 'two-way-table': B10, 'dots-vs-interval': B11, 'frequency-table': B12, 'histogram-layers': B13, 'cumulative-polygon': B14,
};
