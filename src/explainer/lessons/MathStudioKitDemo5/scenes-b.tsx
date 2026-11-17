// MathStudioKitDemo5, scenes 13 to 20: Year 11 Advanced wave 2 triangle and bearing parts (brief 245) on the
// designs' own numbers: StudioTriangle presets, focus words and limit mode (t01, t11), perpendicular and foot modes
// (t05, t06), hinge mode with HingeBars and the MinutesDial (t06, t05), SSAConstruction (t07), focus swap and scale
// mode (t13, t14a), BearingRose (t02b), BearingJourney with a reverse bearing (t02b, t06) and ElevationView (t02a).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	BearingJourney, BearingRose, Card, CardTitle, ElevationView, HandTag, HingeBars, LiveReadoutBoard, MinutesDial, SSAConstruction, SceneHeading, StudioTriangle, TRIG_MAGENTA, TRI_PRESETS,
	fmtDMS, fmtLimit, keyedAt, triHinge, triLimit, triRight, triSAS, triScale,
} from '../../math/studio';
import {FONT_DISPLAY, INK} from '../../kit';

const D2R = Math.PI / 180;

// 13. Presets (t01 scenes 2 and 3) with the focus words sliding, and the limit mode (t01 scene 4, t11 scene 5).
const LIMIT: [number, number][] = [[20, 60], [70, 30], [100, 30], [130, 45], [160, 45], [190, 60], [215, 60], [260, 6]];
const B1: React.FC = () => {
	const f = useCurrentFrame();
	const th = keyedAt(LIMIT, f);
	return (
		<>
			<SceneHeading text="StudioTriangle: presets, focus words, limit mode" size={52} />
			<StudioTriangle x={130} y={800} unit={280} shape={TRI_PRESETS['half-square']} at={4} vertices={false} focus={[{vertex: 'A', at: 0}]} focusWords={{at: 30}}
				sides={{a: {text: '1'}, b: {text: '1'}, c: {text: '√2', at: 60}}} angles={{A: {text: '45°'}, B: {text: '45°'}}} />
			<StudioTriangle x={620} y={840} unit={210} shape={TRI_PRESETS['half-equilateral']} at={4} vertices={false} focus={[{vertex: 'A', at: 0}, {vertex: 'B', at: 150}]} focusWords
				sides={{a: {text: '√3'}, b: {text: '1'}, c: {text: '2'}}} angles={{A: {text: '60°'}, B: {text: '30°'}}} />
			<StudioTriangle x={1170} y={840} unit={500} shape={() => triLimit(th)} at={4} vertices={false} focus={[{vertex: 'A', at: 0}]} fadeShort={0.12}
				sides={{c: {text: '1'}, a: {text: len => len.toFixed(4)}}} angles={{A: {text: d => `${d.toFixed(1)}°`, radius: 70}}} />
			<LiveReadoutBoard x={1440} y={150} width={420} at={10} inline size={44} rows={[
				{label: 'sin θ', value: Math.sin(th * D2R), digits: 4, role: 'k'},
				{label: 'cosec θ', value: 1 / Math.sin(th * D2R), text: fmtLimit(1 / Math.sin(th * D2R), 30, 2), role: 'k'},
			]} />
			<HandTag x={630} y={250} text="opposite ↔ adjacent" role="k" at={170} size={40} />
		</>
	);
};

// 14. Perpendicular mode (t05 scene 2) with pair colours and each half lit; foot mode (t06 scene 2).
const B2: React.FC = () => (
	<>
		<SceneHeading text="Perpendicular drop: pair colours, halves lit, the split base" size={52} />
		<StudioTriangle x={130} y={820} unit={105} shape={triSAS(7.4, 5.6, 58)} at={4} pairs={{at: 10}}
			sides={{a: {text: 'a'}, b: {text: 'b'}, c: {text: 'c'}}} angles={{A: {text: 'A'}, B: {text: 'B'}, C: {text: 'C'}}}
			drop={{from: 'B', at: 40, h: 'h', light: [{half: 'left', at: 80, out: 150}, {half: 'right', at: 150}]}} vertices={false} />
		<HandTag x={140} y={940 - 20} text="left half: sin A = h/c" role="a" at={90} out={150} size={40} />
		<HandTag x={500} y={940 - 20} text="right half: sin C = h/a" role="k" at={155} size={40} />
		<StudioTriangle x={1040} y={820} unit={105} shape={triSAS(7.2, 5, 62)} at={4}
			sides={{c: {text: 'c'}, a: {text: 'a'}}} angles={{A: {text: 'A'}}}
			drop={{from: 'B', at: 60, h: 'h', foot: 'H', split: {at: 100, labels: ['x', 'b − x']}, light: [{half: 'left', at: 160, out: 230}, {half: 'right', at: 230}]}} />
	</>
);

// 15. Hinge mode with the c² bar (t06 scene 1: a = 12, b = 9; 117, 225, 333) and the minutes dial (t05 scene 4).
const HINGE: [number, number][] = [[20, 60], [70, 60], [110, 90], [150, 90], [190, 120]];
const B3: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<SceneHeading text="Hinge mode: c² against a² + b²; minutes on a dial" size={52} />
			<StudioTriangle x={240} y={800} unit={30} shape={() => triHinge(12, 9, keyedAt(HINGE, f))} at={4} vertices={{names: ['A', 'B', 'C']}}
				sides={{a: {text: 'a = 12', role: 'k'}, b: {text: 'b = 9', role: 'gradient'}, c: {text: len => `c ≈ ${len.toFixed(1)}`, role: 'a'}}} angles={{C: {text: d => `${Math.round(d)}°`}}} />
			<HingeBars x={760} y={260} width={200} height={600} a={12} b={9} C={HINGE} at={10} />
			<MinutesDial cx={1520} cy={520} r={170} deg={43.8685} fill={[[200, 0], [260, 1]]} at={190} />
			<Card x={1330} y={760} w={380} at={262}><CardTitle>B to the nearest minute</CardTitle><div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, color: INK}}>{fmtDMS(43.8685)}</div></Card>
		</>
	);
};

// 16. SSA construction (t07 scene 5): A = 40°, b = 9; a = 5, 5.79, 7, 10 gives 0, 1, 2, 1 triangles.
const B4: React.FC = () => (
	<>
		<SceneHeading text="SSAConstruction: the arc crosses twice, once or not at all" size={52} />
		<SSAConstruction x={260} y={780} unit={58} A={40} b={9} rayLength={15.6} at={4} perpendicular={{at: 20}} counter={{x: 1500, y: 240}}
			a={[[30, 5], [70, 5], [100, 5.785], [140, 5.785], [170, 7], [210, 7], [240, 10]]} />
		<HandTag x={1360} y={520} text="misses" role="k" at={40} out={100} size={44} />
		<HandTag x={1360} y={520} text="touches" role="k" at={110} out={170} size={44} />
		<HandTag x={1360} y={520} text="crosses twice" role="k" at={180} out={240} size={44} />
		<HandTag x={1360} y={520} text="behind the town" role="k" at={250} size={44} />
		<HandTag x={1360} y={640} text="two when b sin A < a < b" role="answer" at={180} size={40} />
	</>
);

// 17. Focus swap with the complement in magenta (t13 scene 3) and scale mode (t14a scene 3).
const TH = 35;
const B5: React.FC = () => {
	const f = useCurrentFrame();
	const k = 1 + (1 / Math.cos(TH * D2R) - 1) * Math.max(0, Math.min(1, (f - 120) / 40));
	const after = f >= 160;
	return (
		<>
			<SceneHeading text="Focus swap (θ to 90° − θ) and scale mode (÷ cos θ)" size={52} />
			<StudioTriangle x={140} y={800} unit={300} shape={triRight(Math.sqrt(3), 1)} at={4} vertices={false}
				focus={[{vertex: 'A', at: 0}, {vertex: 'B', at: 90}, {vertex: 'A', at: 200}]} focusWords
				sides={{a: {text: 'a'}, b: {text: 'b'}, c: {text: 'c'}}} angles={{A: {text: 'θ'}, B: {text: '90° − θ', color: TRIG_MAGENTA.ink}}} />
			<StudioTriangle x={1250} y={700} unit={250} shape={triScale(triLimit(TH), k)} at={4} vertices={false} focus={[{vertex: 'A', at: 0}]}
				sides={{a: {text: after ? 'tan θ' : 'sin θ'}, b: {text: after ? '1' : 'cos θ'}, c: {text: after ? 'sec θ' : '1'}}} angles={{A: {text: 'θ', radius: 80}}} squares={{at: 220}} />
			<HandTag x={980} y={250} text="every side ÷ cos θ" color="#6b6358" at={110} size={40} />
			<HandTag x={980} y={330} text="1² + tan² θ = sec² θ" role="answer" at={235} size={44} />
		</>
	);
};

// 18. BearingRose (t02b scene 2): N40°E, S32°W (180° + 32°), S25°E (back from S), N65°W (back from 360°).
const B6: React.FC = () => (
	<>
		<SceneHeading text="BearingRose: clockwise from north, three digits" size={52} />
		<BearingRose cx={640} cy={590} R={290} at={4}
			sweeps={[
				{from: 0, to: 40, at: 20, label: 'both', dim: {at: 75}},
				{from: 180, to: 212, at: 85, label: 'both', dim: {at: 150}},
				{from: 180, to: 155, at: 155, label: 'both', dim: {at: 215}},
				{from: 360, to: 295, at: 225, label: 'both'},
			]}
			readout={{sweep: 3, x: 1180, y: 260, compass: true}} markers={[{bearing: 90, at: 10}, {bearing: 180, at: 10}, {bearing: 270, at: 10}]} rings={[{end: 'S', at: 80, out: 210}, {end: 'N', at: 220}]} />
		<HandTag x={1180} y={560} text="from S, towards W: add" role="a" at={110} out={155} size={40} />
		<HandTag x={1180} y={560} text="from S, towards E: subtract" role="a" at={175} out={225} size={40} />
		<HandTag x={1180} y={560} text="from N, towards W: 360° − 65°" role="a" at={250} size={40} />
	</>
);

// 19. BearingJourney (t02b scene 4): 12 km on 040°, then 9 km on 130°; reverse 220°, a right angle, 15 km.
const B7: React.FC = () => (
	<>
		<SceneHeading text="BearingJourney: a new north at every turn" size={52} />
		<BearingJourney start={[330, 820]} unit={42} at={4} vertexLabels={['O', 'P']}
			legs={[{bearing: 40, dist: 12, at: 20, label: '12 km', color: {at: 250, color: {ink: '#6b4fa0', stroke: '#6b4fa0', soft: '#e7e0f2'}}}, {bearing: 130, dist: 9, at: 140, label: '9 km', color: {at: 250, color: {ink: '#9c5a00', stroke: '#d18f1f', soft: '#f8e8c8'}}}]}
			norths={[{vertex: 0, at: 10}, {vertex: 1, at: 70}]}
			sweeps={[{vertex: 0, to: 40, at: 30}, {vertex: 1, to: 220, at: 90, label: '220°', radius: 92, glow: {at: 180, out: 230}}, {vertex: 1, to: 130, at: 130, label: '130°', glow: {at: 180, out: 230}}]}
			between={[{vertex: 1, b1: 130, b2: 220, at: 200}]} home={{at: 220, label: '15 km'}} startAngle={{at: 255}} />
		<BearingRose cx={1480} cy={600} R={220} at={4} sweeps={[{from: 0, to: 40, at: 20}]} reverse={{bearing: 40, at: 90}} />
		<HandTag x={1280} y={250} text="reverse: ± 180°" role="gradient" at={130} size={42} />
	</>
);

// 20. ElevationView (t02a scenes 1 to 3): the cliff h = 40 tan 52°; the yacht drifts from 40 m to 65 m.
const B8: React.FC = () => (
	<>
		<SceneHeading text="ElevationView: one sight line, two equal angles" size={52} />
		<ElevationView x={240} y={800} unit={8} h={40 * Math.tan(52 * D2R)} d={[[40, 40], [130, 65]]} at={4} waterReach={90}
			labels={{h: 'h ≈ 51.2 m', d: 'distance', object: 'yacht'}} elevation={{at: 10}} depression={{at: 160}} z={{at: 190}} wrong={{at: 250}}
			readout={{x: 1160, y: 240, at: 10}} />
		<HandTag x={1160} y={520} text="further: smaller angle" role="a" at={110} size={42} />
		<HandTag x={1160} y={620} text="both from the horizontal" role="a" at={200} size={42} />
		<HandTag x={1160} y={720} text="not from the cliff face" role="mistake" at={255} size={42} />
	</>
);

export const SCENES_B: Record<string, React.FC> = {
	'triangle-presets-limit': B1, 'triangle-perpendicular-foot': B2, 'triangle-hinge-minutes': B3, 'ssa-construction': B4, 'focus-swap-scale': B5,
	'bearing-rose': B6, 'bearing-journey': B7, 'elevation': B8,
};
