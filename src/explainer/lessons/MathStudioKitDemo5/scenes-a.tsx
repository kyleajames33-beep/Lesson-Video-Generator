// MathStudioKitDemo5, scenes 1 to 11: Year 11 Advanced wave 2 circle parts (brief 245) on the designs' own numbers:
// StudioCirclePoint (t03, t04, t08, t12, t13, t15a), CircleToGraph (t10), RadiusWrap (t08, t09) and SectorSegment
// (t09). Not a lesson. One 300-frame scene per group.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	CircleToGraph, HandTag, LiveReadoutBoard, RadiusWrap, SceneHeading, SectorSegment, StudioCirclePoint, TRIG_MAGENTA,
	degTicks, keyedAt, piLabel, piTicks,
} from '../../math/studio';
import type {Keyed} from '../../math/studio';

const D2R = Math.PI / 180;
const ALL_PI6_PI4 = [0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330];

// 1. Rays and laps (t03 scene 2): 120°, one more lap to 480°, back clockwise to −240°, all on one ray.
const LAP: Keyed = [[20, 0], [60, 120], [95, 120], [150, 480], [185, 480], [245, -240]];
const A1: React.FC = () => (
	<>
		<SceneHeading text="StudioCirclePoint: one ray, many angles" size={52} />
		<StudioCirclePoint cx={700} cy={580} unit={70} r={4} at={4} circle={false} rays={[{angle: LAP, at: 10, arc: {at: 20}, lap: {x: 1180, y: 300, base: 120}}]} />
		<HandTag x={1180} y={480} text="anticlockwise +, clockwise −" role="a" at={40} size={44} />
		<HandTag x={1180} y={600} text="± 360°: same ray" role="a" at={250} size={46} />
	</>
);

// 2. Definitions on a circle of radius r (t03 scenes 3 and 5): drop, readouts, radius change, undefined at 90°.
const A2: React.FC = () => (
	<>
		<SceneHeading text="Readouts change sign; tan is undefined where x = 0" size={52} />
		<StudioCirclePoint cx={620} cy={580} unit={90} r={[[60, 3], [100, 3.6]]} axis={4.3} at={4}
			rays={[{angle: [[10, 50], [110, 50], [150, 150], [185, 150], [215, 90]], at: 6, arc: {at: 12}, drop: {at: 20, out: 205}, coords: {at: 30, out: 205}}]}
			readout={{x: 1180, y: 260, width: 560, at: 20, names: 'both'}} flag={{at: 210}} axisPoints={{at: 230}} />
		<HandTag x={1180} y={640} text="same ratios, any r" role="b" at={70} out={150} size={44} />
		<HandTag x={1180} y={640} text="x < 0: cos < 0" role="gradient" at={160} out={205} size={44} />
		<HandTag x={1180} y={640} text="can't divide by 0" role="mistake" at={225} size={44} />
	</>
);

// 3. Related-angle copies (t04 scene 2) and quadrant signs with ASTC (t04 scene 3).
const A3: React.FC = () => (
	<>
		<SceneHeading text="Related-angle copies, quadrant signs and ASTC" size={52} />
		<StudioCirclePoint cx={640} cy={590} unit={250} r={1} axis={1.3} at={4}
			related={{A: 30, at: 10, copies: [{q: 2, at: 40}, {q: 3, at: 100}, {q: 4, at: 160}], copyText: q => (q === 1 ? undefined : `x ${q === 4 ? '+' : '−'}, y ${q === 2 ? '+' : '−'}`)}} />
		<StudioCirclePoint cx={1480} cy={590} unit={230} r={1} axis={1.3} at={4}
			quadrants={{at: 10, signs: [{q: 1, at: 40, out: 150}, {q: 2, at: 60, out: 150}, {q: 3, at: 80, out: 150}, {q: 4, at: 100, out: 150}], astc: {at: 150, wordsAt: 200, lit: [{q: 2, at: 250}]}, shade: [{q: 2, at: 250}]}} />
		<HandTag x={1250} y={250} text="All Stations To Central" role="b" at={210} size={42} />
	</>
);

// 4. Mirrors: θ to −θ in the x-axis (t04 scene 5) and θ to 90° − θ in y = x (t13 scene 4).
const A4: React.FC = () => {
	const f = useCurrentFrame();
	const th = keyedAt([[60, 30], [130, 100], [170, 100], [230, 250]], f);
	return (
		<>
			<SceneHeading text="Mirror modes: the x-axis and the line y = x" size={52} />
			<StudioCirclePoint cx={500} cy={590} unit={220} r={1} axis={1.3} at={4}
				rays={[{angle: [[60, 30], [130, 100], [170, 100], [230, 250]], at: 6, arc: {at: 10, label: 'θ'}, drop: {at: 12, labels: false}}]}
				mirrors={[{kind: 'x', at: 20, flyAt: 24, arc: true, coords: (x, y) => `(${x.toFixed(2)}, ${y.toFixed(2)})`.replace(/-/g, '−')}]} />
			<LiveReadoutBoard x={790} y={230} width={340} at={30} inline size={44} rows={[
				{label: 'cos θ', value: Math.cos(th * D2R), digits: 4, role: 'gradient'},
				{label: 'cos(−θ)', value: Math.cos(-th * D2R), digits: 4, role: 'gradient'},
				{label: 'sin θ', value: Math.sin(th * D2R), digits: 4, role: 'k'},
				{label: 'sin(−θ)', value: Math.sin(-th * D2R), digits: 4, role: 'k'},
			]} />
			<HandTag x={790} y={720} text="x stays, y flips" role="gradient" at={60} size={42} />
			<StudioCirclePoint cx={1580} cy={590} unit={210} r={1} axis={1.3} at={4}
				rays={[{angle: [[150, 30], [210, 150]], at: 6, arc: {at: 10, label: 'θ'}, coords: {at: 12, text: x => (Math.abs(x - Math.cos(30 * D2R)) < 1e-6 ? '(x, y)' : Math.abs(x + Math.cos(30 * D2R)) < 1e-6 ? '(−√3/2, 1/2)' : '')}}]}
				mirrors={[{kind: 'yx', at: 40, flyAt: 70, arc: true, path: true, lineLabel: 'y = x', coords: (x, y) => (Math.abs(y - Math.cos(30 * D2R)) < 1e-6 ? '(y, x)' : Math.abs(x - 0.5) < 1e-6 ? '(1/2, −√3/2)' : '')}]} />
			<HandTag x={1380} y={900} text="swap x and y" color={TRIG_MAGENTA.ink} at={100} size={42} />
		</>
	);
};

// 5. Level lines (t15a scenes 2 and 3): y = 0.5 cuts at 30° and 150°; x = −0.5 at 120° and 240°.
const A5: React.FC = () => (
	<>
		<SceneHeading text="Level line y = k or x = k: two crossings, α in each" size={52} />
		<StudioCirclePoint cx={520} cy={590} unit={250} r={1} axis={1.3} at={4}
			quadrants={{at: 10, numerals: 'roman', shade: [{q: 1, at: 160}, {q: 2, at: 160}]}}
			level={{kind: 'y', k: [[20, -0.2], [70, 0.5]], at: 20, label: 'y = 0.5', rays: {at: 100}, related: {at: 130}}} />
		<StudioCirclePoint cx={1420} cy={590} unit={250} r={1} axis={1.3} at={4}
			quadrants={{at: 10, numerals: 'roman', shade: [{q: 2, at: 220}, {q: 3, at: 220}]}}
			level={{kind: 'x', k: [[40, 0.3], [90, -0.5]], at: 40, label: 'x = −0.5', rays: {at: 150}, related: {at: 180}}} />
		<HandTag x={160} y={250} text="sin > 0: I and II" role="k" at={170} size={40} />
		<HandTag x={1100} y={250} text="cos < 0: II and III" role="gradient" at={230} size={40} />
	</>
);

// 6. Paired readouts and stamped hollow dots (t12 scenes 2 and 3): one sweep round, each excluded point stamped.
const A6: React.FC = () => (
	<>
		<SceneHeading text="Reciprocal pairs flip sign together; zeros on the bottom stamp" size={52} />
		<StudioCirclePoint cx={500} cy={590} unit={250} r={1} axis={1.3} at={4}
			rays={[{angle: [[30, 40], [260, 400]], at: 6, arc: {at: 10}, drop: {at: 12, labels: false}}]}
			paired={{x: 940, y: 300, at: 20}} stamps={{from: 30, when: 'xy0'}} />
		<HandTag x={960} y={640} text="same sign as its partner" role="b" at={80} size={44} />
		<HandTag x={960} y={740} text="excluded: a zero on the bottom" color="#6b6358" at={160} size={42} />
	</>
);

// 7. Radian labels (t08 scene 6): the multiples of π/6 and π/4 on the rim, and the related copies in radians.
const A7: React.FC = () => (
	<>
		<SceneHeading text="Radian labels: multiples of π/6 and π/4" size={52} />
		<StudioCirclePoint cx={560} cy={600} unit={280} r={1} axis={1.04} at={4} axisLabels={false} angleUnit="rad"
			marks={{at: 10, angles: ALL_PI6_PI4, gap: 62, size: 30}} />
		<StudioCirclePoint cx={1440} cy={600} unit={240} r={1} axis={1.3} at={4} angleUnit="rad"
			related={{A: 45, at: 20, copies: [{q: 2, at: 60}, {q: 3, at: 110}, {q: 4, at: 160}], labels: true}} />
		<HandTag x={1160} y={250} text={`π − A, π + A, 2π − A`} role="a" at={200} size={42} />
	</>
);

// 8. CircleToGraph, sine (t10 scene 2): the height carried across; the axis extends to 720°, then relabels.
const GRAPH = {x: 660, y: 300, width: 1180, height: 560};
const A8: React.FC = () => (
	<>
		<SceneHeading text="CircleToGraph: the height becomes the graph" size={52} />
		<CircleToGraph circle={{cx: 330}} fn="sin" angle={[[20, 0], [140, 360], [160, 360], [230, 720]]} at={4}
			graph={{...GRAPH, window: {x: [-30, 380], y: [-1.5, 1.5]}, windowKeys: [{frame: 150, x: [-30, 380]}, {frame: 200, x: [-30, 740]}], xTicks: degTicks(0, 720, 90), yTicks: [-1, 1], relabel: {at: 250, ticks: degTicks(0, 720, 90).map(t => ({value: t.value, label: piLabel(t.value * D2R)}))}}}
			rings={[{X: 90, at: 60}, {X: 270, at: 115}]} bounds={{at: 130}} readout={{x: 1380, y: 100, width: 440}} />
		<HandTag x={110} y={900} text="height = sin θ" role="b" at={20} size={42} />
	</>
);

// 9. CircleToGraph, cosine (t10 scene 3): the violet bar swings up as the height; the sine ghost slides left 90°.
const A9: React.FC = () => (
	<>
		<SceneHeading text="Cosine: the x-coordinate bar swings up; sine is the same wave" size={52} />
		<CircleToGraph circle={{cx: 330}} fn="cos" angle={[[20, 0], [60, 0], [160, 360]]} at={4} swing={{at: 30}}
			graph={{...GRAPH, window: {x: [-30, 380], y: [-1.5, 1.5]}, xTicks: degTicks(0, 360, 90), yTicks: [-1, 1]}}
			ghosts={[{fn: 'sin', at: 180, shift: [[200, 0], [235, -90], [260, -90], [290, 0]]}]} rings={[{X: 0, at: 70}, {X: 180, at: 110}]} readout={{x: 1380, y: 100, width: 440}} />
		<HandTag x={110} y={900} text="x-coordinate = cos θ" role="gradient" at={20} size={42} />
	</>
);

// 10. CircleToGraph, tangent (t10 scene 7): height over x, asymptotes at ±π/2, radian axis.
const A10: React.FC = () => (
	<>
		<SceneHeading text="Tangent: height over x, breaking where x = 0" size={52} />
		<CircleToGraph circle={{cx: 330, cy: 580, unit: 170}} fn="tan" axisUnit="rad" angle={[[20, -178], [260, 178]]} at={4}
			graph={{...GRAPH, window: {x: [-3.4, 3.4], y: [-4, 4]}, xTicks: piTicks(-1, 1, 2), yTicks: [-4, -2, 2, 4], xLabel: 'x'}}
			asymptotes={{at: 30}} readout={{x: 1380, y: 100, width: 440}} />
		<HandTag x={110} y={900} text="tan θ = height ÷ x" role="k" at={20} size={42} />
	</>
);

// 11. RadiusWrap (t08 scenes 1 and 3): radius lengths bend on, pause at π, finish at 2π; the one-radian wedge.
const A11: React.FC = () => (
	<>
		<SceneHeading text="RadiusWrap: radius-lengths round the rim" size={52} />
		<RadiusWrap cx={620} cy={590} R={270} at={4} radius={{label: 'r = 10 cm', labelSide: 'below'}} counter={{x: 1180, y: 260}}
			length={[[30, 0], [120, 3], [140, Math.PI], [180, Math.PI], [250, 2 * Math.PI]]} wedge={{at: 262}} />
		<HandTag x={1180} y={520} text="half way: π" role="b" at={150} out={250} size={46} />
		<HandTag x={1180} y={520} text="all the way: 2π" role="b" at={250} size={46} />
	</>
);

// 12. RadiusWrap arc mode (t09 scene 2) and SectorSegment (t09 scenes 5 and 6): the leaf r = 50, θ = 2π/3.
const A12: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<SceneHeading text="Arc straightens to rθ; sector − triangle = segment" size={52} />
			<RadiusWrap cx={330} cy={560} R={260} at={4} straighten={{theta: Math.PI / 4, p: [[40, 0], [100, 1]], at: 10, label: 'l = 5π ≈ 15.7'}} radius={{label: 'r = 20'}} />
			<SectorSegment cx={1360} cy={470} R={300} theta={(2 * Math.PI) / 3} startDeg={210} at={4}
				chord={{at: 20, label: 'chord'}} arc={{at: 30}} radii={{at: 60, label: 'r = 50'}} angle={{at: 60}}
				sector={{at: 90, out: 215}} triangle={{at: 90, out: 215, lift: {at: 130, dx: 0, dy: -250}}} segment={{at: 150, out: 215, label: 'segment'}}
				major={{at: 220, label: 'major segment', arcLabel: '200π/3 ≈ 209'}} />
			<HandTag x={980} y={930} text={f < 215 ? 'sector − triangle ≈ 1535' : 'the rest: ≈ 6319'} role={f < 215 ? 'k' : 'gradient'} at={160} size={42} />
		</>
	);
};

export const SCENES_A: Record<string, React.FC> = {
	'rays-laps': A1, 'definitions-readouts': A2, 'related-astc': A3, 'mirrors': A4, 'level-lines': A5, 'paired-stamps': A6, 'radian-marks': A7,
	'graph-sin': A8, 'graph-cos': A9, 'graph-tan': A10, 'radius-wrap': A11, 'arc-sector-segment': A12,
};
