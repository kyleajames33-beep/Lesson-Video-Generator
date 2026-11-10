// Scenes 5 to 8: why radians (the wheel as the unit circle, then the degree stretch), cosine's gradient graph,
// the slide by π/2, and the graphing check.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, INK, INK_SOFT, prog} from '../../kit';
import {
	Card, DrawnMark, FrameSvg, FunctionSimulator, HandTag, LiveReadoutBoard, MistakeCard, PreloadPlates, SceneHeading, MATH_ANSWER, kf, vis,
} from '../../math/studio';
import type {FnKey} from '../../math/studio';
import {cue, PI} from './common';
import {
	BLUE, COS, Chip, CurveLabel, DISPLAY, Dot, FerrisWheel, GONDOLA, GONDOLA_MARKED, GreenRule, Legend, NAVY, RAD_TICKS, RIM, ReadStrip, RecallChip, SIN, STAND, TEAL, TRIG_WIN, TanLine, VIOLET, gmap, num,
} from './parts';
import {PairedLower} from './s1';

const PLATES = [RIM, STAND, GONDOLA, GONDOLA_MARKED];
const GU = {x: 420, y: 150, w: 1060, h: 420};
const GL = {x: 420, y: 556, w: 1060, h: 400};
export const SIN_RULE = <>d/dx(sin x) = cos x</>;
export const COS_RULE = <>d/dx(cos x) = −sin x</>;

// ---------- 5. why radians ----------
const GR = {x: 96, y: 170, w: 1040, h: 560};
export const S05: React.FC = () => {
	const id = 'scene-05';
	const f = useCurrentFrame();
	const lengthX = cue(id, 'length x'), means = cue(id, "That's what"), one = cue(id, 'slope there is one'), degrees = cue(id, 'In degrees'), three = cue(id, 'fifty seven point three'), five = cue(id, 'zero one seven five'), rule = cue(id, 'The rule only works');
	const M = gmap(GR.x, GR.y, GR.w, GR.h, TRIG_WIN);
	const th = kf(f, [[one - 20, 0.3], [one + 50, 0.1]]);
	const s0 = three - 26, s1 = three + 24, r0 = rule, r1 = rule + 36;
	const T: FnKey[] = [{frame: 0, x: 0, xScale: 1}, {frame: s0, xScale: 1}, {frame: s1, xScale: 180 / PI}, {frame: r0, xScale: 180 / PI}, {frame: r1, xScale: 1}];
	const deg = f >= s0 + 10 && f < r0 + 20;
	const CX = 1480, CY = 440, R = 300;
	return (
		<>
			<PreloadPlates plates={PLATES} />
			<SceneHeading text="Why radians?" at={2} />
			<Legend />
			<FerrisWheel cx={CX} cy={CY} R={R} angle={th} stand={false}
				unitCircle={{r: R, theta: th, at: lengthX - 20, colorArc: INK, colorHeight: VIOLET}} />
			<CurveLabel x={CX - R / 2 - 20} y={CY + 10} at={-30} size={40}>radius 1</CurveLabel>
			<HandTag x={CX + 40} y={CY - 150} text="arc ≈ height" at={one + 20} size={44} color={VIOLET} />
			<ReadStrip x={1160} y={790} w={664} at={lengthX} cells={[
				{label: 'arc travelled', text: num(th, th < 0.2 ? 3 : 2)},
				{label: 'height sin x', text: num(Math.sin(th), th < 0.2 ? 4 : 3), color: VIOLET},
			]} />
			<RecallChip x={1160} y={150} at={means} out={degrees} size={32}>1 radian: arc = radius</RecallChip>
			<FunctionSimulator x={GR.x} y={GR.y} width={GR.w} height={GR.h} window={TRIG_WIN} family={SIN} timeline={T} color={INK}
				xTicks={() => (deg ? [1, 2, 3, 4, 5, 6] : RAD_TICKS)} yTicks={[-1, 1]} xLabel={deg ? 'x in degrees' : 'x (radians)'} yLabel="y"
				curves={[{fn: X => X, at: one, out: degrees, color: '#8a8378', dash: '12 10', width: 4, domain: [-1.5, 1.5]}, {fn: Math.sin, at: s0, out: r1, color: INK_SOFT, dash: '12 10', width: 4}]}
				point={{at: -30}} tangent={{at: -30, halfLength: 200}}
				readout={{x: 96, y: 846, width: 520, at: -30, inline: true, rows: [{label: 'gradient at 0', value: s => s.slope, role: 'gradient', digits: deg ? 4 : 3, glow: [five, five + 90]}]}} />
			<CurveLabel x={M.pt(3.6, -1)[0]} y={M.pt(3.6, -1)[1] + 14} size={42} out={s0}>y = sin x</CurveLabel>
			<CurveLabel x={M.pt(1.25, 1.25)[0]} y={M.pt(1.25, 1.25)[1] - 24} at={one + 6} out={degrees} color={INK_SOFT} size={36}>y = x</CurveLabel>
			<Chip x={96} y={752} at={three} out={r0} size={40}>degrees: graph stretched sideways by <span style={{color: BLUE}}>180/π</span> ≈ 57.3</Chip>
			<Chip x={640} y={846} at={five} out={r0 + 10} size={40} color={BLUE}><span style={{color: BLUE}}>= π/180</span></Chip>
			<HandTag x={880} y={880} text="÷ 57.3" at={five + 10} out={r0 + 10} size={48} color={BLUE} />
			<Chip x={96} y={752} at={r0 + 6} size={40} color={MATH_ANSWER}>The rules need x in radians</Chip>
		</>
	);
};

// ---------- 6. cosine's gradient graph ----------
export const S06: React.FC = () => {
	const id = 'scene-06';
	const f = useCurrentFrame();
	const z = cue(id, 'is zero'), m1 = cue(id, 'minus one'), pi = cue(id, 'at pi', 2), o1 = cue(id, 'slope one'), again = cue(id, 'Again'), trace = cue(id, 'Trace those'), so = cue(id, 'So the derivative');
	const MU = gmap(GU.x, GU.y, GU.w, GU.h, TRIG_WIN), ML = gmap(GL.x, GL.y, GL.w, GL.h, TRIG_WIN);
	const run0 = trace + 4, run1 = trace + 96;
	const X = kf(f, [[z + 30, 0], [m1 - 30, PI / 2], [pi - 26, PI / 2], [pi, PI], [o1 - 60, PI], [o1 - 6, 1.5 * PI], [run0 - 14, 1.5 * PI], [run0, 0], [run1, 2 * PI]]);
	const ext = kf(f, [[run0, 0], [run1, 2 * PI]]);
	const T: FnKey[] = [{frame: 0, x: X}];
	const cross = vis(f, again, again + 50), flat = vis(f, again + 50, again + 110);
	return (
		<>
			<PreloadPlates plates={PLATES} />
			<SceneHeading text="Now the cosine curve" at={2} />
			<Legend />
			<FerrisWheel cx={250} cy={360} R={150} angle={X} />
			<HandTag x={250} y={690} text="cos x: how far right" at={10} size={34} color={NAVY} anchor="middle" />
			<HandTag x={250} y={730} text="of the hub" at={20} size={34} color={NAVY} anchor="middle" />
			<FunctionSimulator x={GU.x} y={GU.y} width={GU.w} height={GU.h} window={TRIG_WIN} family={COS} timeline={T} color={NAVY}
				xTicks={RAD_TICKS} yTicks={[-1, 1]} xLabel="" yLabel="y = cos x" point={{at: -30}} tangent={{at: -30, halfLength: 140}}
				readout={{x: 1510, y: 160, width: 314, at: -30, rows: [
					{label: 'x', value: s => s.X},
					{label: 'gradient', value: s => s.slope, role: 'gradient', digits: 3},
				]}}
				overlay={() => (
					<FrameSvg>
						{[PI / 2, 1.5 * PI].map(x => <circle key={x} cx={MU.pt(x, 0)[0]} cy={MU.pt(x, 0)[1]} r={30} fill="none" stroke={VIOLET} strokeWidth={5} opacity={cross} />)}
						{[0, PI, 2 * PI].map(x => <circle key={x} cx={MU.pt(x, Math.cos(x))[0]} cy={MU.pt(x, Math.cos(x))[1]} r={30} fill="none" stroke={INK_SOFT} strokeWidth={5} opacity={flat} />)}
					</FrameSvg>
				)} />
			{([[0, 0, z, '0'], [PI / 2, -1, m1, '−1'], [PI, 0, pi, '0'], [1.5 * PI, 1, o1, '1']] as const).map(([x, y, at, t]) => <CurveLabel key={x} x={ML.pt(x, y)[0] + 16} y={ML.pt(x, y)[1] - (y < 0 ? 0 : 54)} at={at} color={VIOLET} size={40}>{t}</CurveLabel>)}
			<PairedLower family={COS} X={X} ext={ext} label="gradient of cos x"
				landmarks={[{x: 0, y: 0, at: z}, {x: PI / 2, y: -1, at: m1}, {x: PI, y: 0, at: pi}, {x: 1.5 * PI, y: 1, at: o1}, {x: 2 * PI, y: 0, at: o1 + 10}]}
				target={{fn: x => -Math.sin(x), at: run1, color: INK, label: 'y = −sin x'}} />
			<FrameSvg><line x1={MU.pt(X, Math.cos(X))[0]} y1={MU.pt(X, Math.cos(X))[1]} x2={ML.pt(X, -Math.sin(X))[0]} y2={ML.pt(X, -Math.sin(X))[1]} stroke={VIOLET} strokeWidth={3} strokeDasharray="6 9" opacity={0.7} /></FrameSvg>
			<HandTag x={1510} y={520} text="crossings: steepest" at={again} out={trace} size={36} color={VIOLET} />
			<HandTag x={1510} y={570} text="peak, trough: flat" at={again + 50} out={trace} size={36} color={INK_SOFT} />
			<GreenRule x={1500} y={480} at={trace} size={34}>{SIN_RULE}</GreenRule>
			<GreenRule x={1500} y={660} at={so} size={40}>{COS_RULE}</GreenRule>
		</>
	);
};

// ---------- 7. why the minus sign: a slide keeps every slope ----------
export const S07: React.FC = () => {
	const id = 'scene-07';
	const f = useCurrentFrame();
	const two = cue(id, 'by pi over two'), slide = cue(id, 'A slide carries'), well = cue(id, 'as well'), down = cue(id, 'upside down'), check = cue(id, 'check the sign'), just = cue(id, 'Just after zero'), plus = cue(id, 'Plus sine x');
	const MU = gmap(GU.x, GU.y, GU.w, GU.h, TRIG_WIN), ML = gmap(GL.x, GL.y, GL.w, GL.h, TRIG_WIN);
	const s0 = two, s1 = two + 46;
	const sh = kf(f, [[s0, 0], [s1, -PI / 2]]);
	const slid = prog(f, s1 - 4, 10);
	const T: FnKey[] = [{frame: 0, x: 0, xShift: 0}, {frame: s0, xShift: 0}, {frame: s1, xShift: -PI / 2}];
	const tangents = [0, PI / 2, PI];
	return (
		<>
			<PreloadPlates plates={PLATES} />
			<SceneHeading text="Why the minus sign? A slide keeps every slope" at={2} size={52} />
			<Legend />
			<FerrisWheel cx={250} cy={360} R={150} angle={f >= just ? 0.35 : 0} ghostAhead={prog(f, s1, 14)} />
			<HandTag x={250} y={690} text="a quarter turn earlier" at={s1 + 6} out={check} size={34} color={TEAL} anchor="middle" />
			<HandTag x={250} y={690} text="above the hub: moving left" at={just + 10} size={32} color={VIOLET} anchor="middle"
				marks={[{kind: 'arrow', from: [250 + 150 * Math.cos(0.35) + 10, 360 - 150 * Math.sin(0.35) - 30], to: [250 + 150 * Math.cos(0.35) - 70, 360 - 150 * Math.sin(0.35) - 60], bend: 0.1}]} markAt={just + 4} />
			<FunctionSimulator x={GU.x} y={GU.y} width={GU.w} height={GU.h} window={TRIG_WIN} family={SIN} timeline={T} color={slid > 0.5 ? NAVY : INK}
				xTicks={RAD_TICKS} yTicks={[-1, 1]} xLabel="" yLabel="y"
				curves={[{fn: Math.sin, at: s0, color: INK_SOFT, dash: '12 10', width: 4}]}
				overlay={() => (
					<FrameSvg>
						{tangents.map(u => <TanLine key={u} M={MU} X={u + sh} Y={Math.sin(u)} m={Math.cos(u)} half={110} />)}
						{tangents.map(u => <Dot key={'d' + u} p={MU.pt(u + sh, Math.sin(u))} r={11} />)}
						{f >= just ? <DrawnMark mark={{kind: 'arrow', from: MU.pt(0.15, 1.3), to: MU.pt(0.9, 0.85), bend: -0.1}} at={just} color={INK} width={5} /> : null}
					</FrameSvg>
				)} />
			<CurveLabel x={MU.pt(3.7, 0.9)[0]} y={MU.pt(3.7, 0.9)[1] - 30} out={s0} size={42}>y = sin x</CurveLabel>
			<CurveLabel x={MU.pt(3.7, 0.9)[0]} y={MU.pt(3.7, 0.9)[1] - 30} at={s1} color={NAVY} size={42}>y = cos x</CurveLabel>
			<HandTag x={MU.pt(1.2, 0)[0]} y={MU.pt(0, -1.25)[1]} text="slope kept" at={slide + 10} out={well + 40} size={40} color={VIOLET} />
			<HandTag x={MU.pt(1.0, 0)[0]} y={MU.pt(0, 1.3)[1]} text="falling: slope < 0" at={just + 16} size={38} color={INK} />
			<PairedLower family={SIN} X={-PI / 2 + 0.0001} ext={2 * PI} extFrom={-PI} shift={sh} pointAt={99999} label={f >= well ? 'gradient of cos x' : 'gradient of sin x'}
				target={{fn: x => -Math.sin(x), at: down, color: INK, label: 'y = −sin x'}} />
			{f >= well ? <HandTag x={ML.pt(-PI / 2, 0)[0]} y={ML.pt(0, 1.32)[1]} text="slid left by π/2" at={well} size={36} color={TEAL}
				marks={[{kind: 'arrow', from: ML.pt(0, 1.05), to: ML.pt(-PI / 2 + 0.1, 1.05), bend: 0}]} markAt={well} /> : null}
			<Chip x={1500} y={170} w={330} at={s0 + 10} size={30} color={TEAL}>cos x = sin(x + <span style={{color: TEAL}}>π/2</span>)</Chip>
			<RecallChip x={1500} y={330} w={330} at={down} size={28}>cos(x + π/2) = −sin x</RecallChip>
			<MistakeCard x={1110} y={796} w={714} at={plus} size={38} wrong={<>d/dx(cos x) = sin x</>} caption="cos x falls just after 0" />
			<Enter at={check} style={{position: 'absolute', left: 1510, top: 470, width: 314}}><span style={{...DISPLAY(32, INK, 700), whiteSpace: 'normal'}}>just after 0: sin x &gt; 0, but cos x is falling</span></Enter>
		</>
	);
};

// ---------- 8. verify with a graphing check ----------
const GP = {x: 130, y: 220, w: 1240, h: 640};
export const S08: React.FC = () => {
	const id = 'scene-08';
	const f = useCurrentFrame();
	const every = cue(id, 'Every measured'), atOne = cue(id, 'At x equals one'), too = cue(id, 'too'), same = cue(id, 'Do the same');
	const M = gmap(GP.x, GP.y, GP.w, GP.h, TRIG_WIN);
	const sw = prog(f, same, 14);
	const dots = Array.from({length: 25}, (_, k) => (k * PI) / 12);
	const d1 = (k: number) => every + k * 4, d2 = (k: number) => same + 12 + k * 2;
	const n1 = dots.filter((_, k) => f >= d1(k)).length, n2 = dots.filter((_, k) => f >= d2(k)).length;
	const second = f >= same;
	const T: FnKey[] = [{frame: 0, x: 1}];
	return (
		<>
			<SceneHeading text="Check it on a graphing app" at={2} />
			<Legend />
			<Card x={96} y={160} w={1310} h={740} at={-30} pad="10px 24px"><div style={DISPLAY(30, INK_SOFT, 700)}>graphing check</div></Card>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}>
				<FunctionSimulator x={GP.x} y={GP.y} width={GP.w} height={GP.h} window={TRIG_WIN} family={SIN} timeline={T} color={INK}
					xTicks={RAD_TICKS} yTicks={[-1, 1]} xLabel="x" yLabel="y"
					curves={[{fn: Math.cos, at: -30, color: NAVY, dash: '14 10', width: 5}]} point={{at: atOne}} tangent={{at: atOne, halfLength: 150}} />
				<CurveLabel x={M.pt(4.2, -1)[0]} y={M.pt(4.2, -1)[1] + 14} size={42}>y = sin x</CurveLabel>
				<CurveLabel x={M.pt(-2.9, -1)[0]} y={M.pt(-2.9, -1)[1] + 14} color={NAVY} size={40}>y = cos x (dashed)</CurveLabel>
			</div>
			<div style={{position: 'absolute', inset: 0, opacity: sw}}>
				<FunctionSimulator x={GP.x} y={GP.y} width={GP.w} height={GP.h} window={TRIG_WIN} family={COS} timeline={T} color={NAVY}
					xTicks={RAD_TICKS} yTicks={[-1, 1]} xLabel="x" yLabel="y" at={same}
					curves={[{fn: x => -Math.sin(x), at: same, color: INK, dash: '14 10', width: 5}]} point={{at: same + 20}} tangent={{at: same + 20, halfLength: 150}} />
				<CurveLabel x={M.pt(-2.9, 1)[0]} y={M.pt(-2.9, 1)[1] - 50} color={NAVY} size={42}>y = cos x</CurveLabel>
				<CurveLabel x={M.pt(3.2, 1.1)[0]} y={M.pt(3.2, 1.1)[1] - 30} color={INK} size={40}>y = −sin x (dashed)</CurveLabel>
			</div>
			<FrameSvg>
				{dots.map((x, k) => second
					? <Dot key={k} p={M.pt(x, -Math.sin(x))} r={10} opacity={prog(f, d2(k), 5)} />
					: <Dot key={k} p={M.pt(x, Math.cos(x))} r={10} opacity={prog(f, d1(k), 5)} />)}
			</FrameSvg>
			<HandTag x={150} y={940} text={`${second ? n2 : n1} points checked`} at={every} size={44} color={VIOLET} />
			<GreenRule x={1440} y={166} size={36}>{SIN_RULE}</GreenRule>
			<GreenRule x={1440} y={316} size={36}>{COS_RULE}</GreenRule>
			<LiveReadoutBoard x={1440} y={480} width={384} at={atOne} title={second ? 'cos x at x = 1' : 'sin x at x = 1'} rows={[
				{label: 'measured gradient', value: second ? -Math.sin(1) : Math.cos(1), role: 'gradient', digits: 3},
				{label: second ? '−sin 1 ≈' : 'cos 1 ≈', value: second ? -Math.sin(1) : Math.cos(1), digits: 3, at: second ? same + 40 : too},
			]} />
			<HandTag x={1460} y={800} text="match ✓" at={too} out={same} size={48} color={MATH_ANSWER} />
			<HandTag x={1460} y={800} text="match ✓" at={same + 50} size={48} color={MATH_ANSWER} />
		</>
	);
};
