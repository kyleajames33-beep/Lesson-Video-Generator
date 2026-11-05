// Silent kit pilot for the maths studio parts, staged on d01 Revision 5 scenes 1, 4, 5, 9, 11, 12 and
// 17 (placeholder timing, about 15 s each). Plates are placeholders until the ma12- plates arrive.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, INK, INK_SOFT} from '../kit';
import {
	AnchorStage, Card, CurveSimulator, FrameSvg, GrowthField, HandTag, KeyNotesScreen, LiveReadoutBoard, MA12_PLATES, MagnifierLeader, MarkSpan,
	MemoryAidCard, MistakeCard, ParameterSlider, PlateImg, Pow, QuestionCard, Role, RolesOn, SceneHeading, WorkingBoard, ResultCard, InnerSlot,
	MATH_BLUE, MATH_GRADIENT, DrawnMark, kf, niceNum, simAt, simHeight, vis, plateHeight,
} from './studio';
import type {SimKey} from './studio';

const LN3 = Math.log(3);

// ---------- d01 scene 1: a flask where the rate equals the count ----------
export const PilotHook: React.FC = () => {
	const f = useCurrentFrame();
	const xAt = (g: number) => kf(g, [[110, 0], [400, LN3]], false);
	const y = Math.exp(xAt(f));
	const cloudy = Math.max(0, Math.min(1, (y - 1) / 2));
	const FL = {x: 110, y: 330, w: 450};
	const broth: [number, number] = [FL.x + (590 - 230) * (FL.w / 715), FL.y + (1560 - 920) * (FL.w / 715)];
	const field = {cx: 965, cy: 590, d: 600};
	return (
		<>
			<SceneHeading text="A flask where the rate equals the count" at={6} />
			<AnchorStage push={{start: 0, dur: 450, to: 1.035, origin: [700, 600]}}>
				<PlateImg plate={MA12_PLATES.flask} x={FL.x} y={FL.y} w={FL.w} opacity={vis(f, 2, undefined, 16)} />
				<PlateImg plate={MA12_PLATES.flaskCloudy} x={FL.x} y={FL.y} w={FL.w} opacity={cloudy} />
				<MagnifierLeader from={broth} r={26} to={[field.cx, field.cy]} R={field.d / 2} at={24} />
				<GrowthField cx={field.cx} cy={field.cy} d={field.d} at={20} countAt={g => 8 * Math.exp(xAt(g))} seed={11} maxCells={26} />
				<HandTag x={field.cx} y={field.cy + field.d / 2 + 44} text="a drop, magnified" at={44} out={150} size={40} color={INK_SOFT} anchor="middle" />
				<HandTag x={FL.x + FL.w / 2} y={FL.y + plateHeight(MA12_PLATES.flask, FL.w) + 46} text="while the food lasts" at={250} size={40} color={INK_SOFT} anchor="middle" />
			</AnchorStage>
			<LiveReadoutBoard x={1300} y={300} width={530} at={36} title="In the flask" rows={[
				{label: 'cells', value: y, role: 'height', unit: 'million', mark: {kind: 'circle', at: 330, role: 'height'}},
				{label: 'growth rate', value: y, role: 'gradient', unit: 'million per hour', mark: {kind: 'circle', at: 336, role: 'gradient'}},
			]} />
			<HandTag x={1300} y={640} text="× 2 cells → × 2 splits" at={150} out={320} size={46} />
			<HandTag x={1300} y={660} text="rate = count" at={344} size={64} role="gradient" />
			<HandTag x={1712} y={484} text="same" at={412} size={50} role="gradient" marks={[{kind: 'brace', x: 1664, y1: 392, y2: 572}]} markAt={404} />
		</>
	);
};

// ---------- d01 scene 4: the squash doubles every slope ----------
const label4 = (a: number) => <>y = e<Pow>{Math.abs(a - 1) < 0.01 ? 'x' : <><Role r="a">{niceNum(a, 1)}</Role>x</>}</Pow></>;
const T4: SimKey[] = [{frame: 0, a: 1, u: 1}, {frame: 100, a: 1}, {frame: 150, a: 2}, {frame: 240, u: 1}, {frame: 290, u: 0}];
export const PilotSquash: React.FC = () => {
	const f = useCurrentFrame();
	const p = simAt(T4, f);
	return (
		<>
			<SceneHeading text="The fast strain: the squash doubles every slope" at={4} size={54} />
			<CurveSimulator x={40} y={180} width={1120} height={790} window={{x: [-2, 2], y: [0, 8]}} timeline={T4} draw={{at: 6, dur: 30}}
				color={q => (q.a > 1.01 ? MATH_BLUE : INK)} label={q => label4(q.a)} labelAt={20}
				ghost={{a: 1, at: 100}} point={{at: 12}} tangent={{at: 40}} triangle={{runU: 1, at: 50, dim: [240, 9999]}}
				xLabel="x: hours" yLabel="y: cells (millions)"
				readout={{x: 1200, y: 296, width: 620, at: 30, inline: true, rows: [{kind: 'height'}, {kind: 'gradient'}, {kind: 'ratio', mark: {kind: 'box', at: 300, role: 'a'}}]}}
				overlay={g => g.tri ? <>
					<HandTag x={(g.tri.start[0] + g.tri.corner[0]) / 2} y={g.tri.start[1] + 90} text="halves" at={158} out={236} role="a" size={44} anchor="middle"
						marks={[{kind: 'circle', cx: (g.tri.start[0] + g.tri.corner[0]) / 2, cy: g.tri.start[1] + 30, rx: 80, ry: 28}]} markAt={152} />
					<HandTag x={g.tri.corner[0] + 160} y={(g.tri.corner[1] + g.tri.end[1]) / 2 + 48} text="same" at={170} out={236} size={44} color={MATH_GRADIENT} />
				</> : null} />
			<Enter at={14} style={{position: 'absolute', left: 1200, top: 168}}>
				<span style={{fontFamily: "'Inter Tight', sans-serif", fontWeight: 800, fontSize: 64, color: INK, whiteSpace: 'pre'}}>y = e<Pow><Role r="a">2</Role>x</Pow></span>
			</Enter>
			<HandTag x={1520} y={212} text="x is doubled first" at={40} out={290} role="a" size={42} />
			<ResultCard x={1200} y={596} at={300}>d/dx(e<Pow><Role r="a">2</Role>x</Pow>) = <Role r="a">2</Role>e<Pow><Role r="a">2</Role>x</Pow></ResultCard>
			<HandTag x={1790} y={640} text="× 2" at={318} role="a" size={52} anchor="end" marks={[{kind: 'arrow', from: [1770, 548], to: [1640, 612], bend: -0.3}]} markAt={306} />
			<Card x={1200} y={770} w={620} at={380} pad="10px 18px">
				<div style={{position: 'relative', height: 120}}>
					<PlateImg plate={MA12_PLATES.flaskCloudy} x={0} y={4} w={96} />
					<div style={{position: 'absolute', left: 116, top: 0, fontFamily: "'Inter Tight', sans-serif", fontWeight: 700, fontSize: 30, color: MATH_BLUE}}>fast strain, x = 0</div>
					<div style={{position: 'absolute', left: 116, top: 40, fontFamily: "'Inter Tight', sans-serif", fontWeight: 800, fontSize: 32, color: INK}}>1.00 <span style={{fontSize: 26, fontWeight: 600, color: INK_SOFT}}>million</span></div>
					<div style={{position: 'absolute', left: 116, top: 78, fontFamily: "'Inter Tight', sans-serif", fontWeight: 800, fontSize: 32, color: MATH_GRADIENT}}>2.00 <span style={{fontSize: 26, fontWeight: 600, color: INK_SOFT}}>million per hour</span></div>
				</div>
			</Card>
			<span style={{display: 'none'}}>{p.a}</span>
		</>
	);
};

// ---------- d01 scene 5: a dial for a (slider and mirror toggle) ----------
const T5: SimKey[] = [{frame: 0, a: 2, u: 1, flip: 1}, {frame: 40, a: 2}, {frame: 90, a: 3}, {frame: 140, a: 3}, {frame: 190, a: 0.5}, {frame: 235, a: 0.5}, {frame: 270, a: 2}, {frame: 295, flip: 1}, {frame: 335, flip: -1}];
const label5 = (a: number, flip: number) => <>y = e<Pow><Role r="a">{niceNum(flip < 0 ? -a : a, 1)}</Role>x</Pow></>;
export const PilotDial: React.FC = () => {
	const f = useCurrentFrame();
	const p = simAt(T5, f);
	return (
		<>
			<SceneHeading text="A dial for a: any growth per cell" at={4} size={56} />
			<ParameterSlider x={96} y={180} width={540} symbol="a" role="a" value={p.a} min={0.25} max={3.25} at={8}
				ticks={[{value: 0.5, label: '½'}, {value: 1, label: '1'}, {value: 2, label: '2'}, {value: 3, label: '3'}]}
				mirror={(1 - p.flip) / 2} mirrorAt={250} badgeMark={{kind: 'circle', at: 404}} />
			<CurveSimulator x={40} y={322} width={1020} height={680} window={{x: [-2.5, 4.5], y: [0, 9]}} timeline={T5}
				color={MATH_BLUE} label={q => label5(q.a, q.flip)} labelAt={12}
				ghost={{a: 1, at: 10}} point={{at: 8}} tangent={{at: 12}} triangle={{runU: 1, at: 14}}
				xLabel="x: hours" yLabel="y: cells (millions)"
				readout={{x: 1110, y: 330, width: 640, at: 10, inline: true, rows: [{kind: 'height', mark: {kind: 'circle', at: 352, role: 'height'}}, {kind: 'gradient', mark: {kind: 'circle', at: 372, role: 'gradient'}}, {kind: 'ratio', glow: [396, 9999]}]}} />
			<ResultCard x={1110} y={620} at={96} out={176} size={50}>d/dx(e<Pow><Role r="a">3</Role>x</Pow>) = <Role r="a">3</Role>e<Pow><Role r="a">3</Role>x</Pow></ResultCard>
			<HandTag x={1130} y={660} text="every slope halves" at={196} out={250} role="a" size={50} />
			<HandTag x={560} y={830} text="always above the x-axis: y > 0" at={352} size={42} color={INK} />
			<HandTag x={1130} y={640} text="= a, every time" at={410} role="a" size={54} marks={[{kind: 'arrow', from: [1300, 600], to: [900, 280], bend: 0.18}]} markAt={398} />
			<GrowthField cx={1700} cy={780} d={250} cellLength={40} countAt={g => kf(g, [[0, 9], [300, 9], [440, 0.5]])} falling maxStartCells={9} maxCells={9} seed={5} at={250} />
			<HandTag x={1700} y={934} text="disinfectant: count falls" at={300} size={36} color={INK_SOFT} anchor="middle" />
		</>
	);
};

// ---------- d01 scene 9: worked example 1 ----------
export const PilotWorked: React.FC = () => (
	<WorkingBoard
		task={{text: 'Differentiate', at: 4}}
		equation={{content: <>y = e<Pow><InnerSlot><Role r="a">3</Role>x</InnerSlot></Pow></>, at: 16}}
		givens={{title: 'What we know', at: 40, lines: [
			{content: <>u = <Role r="a">3</Role>x</>, at: 46, role: 'inner', note: 'the inside part (the power)'},
			{content: <>a = 3</>, at: 70, role: 'a', note: 'the coefficient of x', glow: [100, 150]},
		]}}
		rows={[
			{left: 'du/dx', right: <MarkSpan kind="box" at={112} role="a"><Role r="a">3</Role></MarkSpan>, at: 100},
			{left: 'dy/dx', right: <><MarkSpan kind="circle" at={192} out={296} role="answer">e<Pow><Role r="a">3</Role>x</Pow></MarkSpan> × <Role r="a">3</Role></>, at: 170},
			{right: <><Role r="a">3</Role><MarkSpan kind="circle" at={400} role="answer">e<Pow><Role r="a">3</Role>x</Pow></MarkSpan></>, at: 236, answer: true},
		]}
		mistake={{at: 300, wrong: <>dy/dx = 3x · e<Pow>3x − 1</Pow></>, caption: 'x in the power, not the base', compare: <>x³ → 3x² works because x is in the base</>}}
	>
		<HandTag x={1320} y={420} text="copied unchanged" at={200} out={296} role="answer" size={46} />
	</WorkingBoard>
);

// ---------- d01 scene 11: memory aid ----------
const FlaskIcon: React.FC<{n?: number; tag?: React.ReactNode}> = ({n = 1, tag}) => (
	<div style={{position: 'relative', width: 124, height: 112}}>
		{Array.from({length: n}, (_, i) => <PlateImg key={i} plate={MA12_PLATES.flaskCloudy} x={n === 1 ? 10 : i * 40} y={n === 1 ? 0 : 34} w={n === 1 ? 92 : 52} />)}
		{tag ? <div style={{position: 'absolute', right: -14, bottom: -8, fontFamily: "'Caveat', cursive", fontWeight: 700, fontSize: 40}}>{tag}</div> : null}
	</div>
);
export const PilotAid: React.FC = () => (
	<>
		<SceneHeading text="A way to hold onto it" at={4} />
		<MemoryAidCard x={230} y={196} w={1460} at={14} iconSize={124} subtitle="think of the flasks"
			keys={[
				{icon: <FlaskIcon tag={<Role r="a">×2</Role>} />, text: <>a: growth per cell → sets gradient ÷ height</>, role: 'a', at: 40},
				{icon: <FlaskIcon tag={<Role r="b">early</Role>} />, text: <>b: start time → no change to the slopes</>, role: 'b', at: 110},
				{icon: <FlaskIcon n={3} />, text: <>k: how many flasks → heights and slopes × k</>, role: 'k', at: 180},
			]}
			main={{content: <>Copy the exponential, then multiply by <Role r="k">k</Role> and <Role r="a">a</Role>.</>, at: 270}}
			formula={{content: <>d/dx(<Role r="k">k</Role>e<Pow><Role r="a">a</Role>x + <Role r="b">b</Role></Pow>) = <Role r="k">k</Role>·<Role r="a">a</Role>·e<Pow><Role r="a">a</Role>x + <Role r="b">b</Role></Pow></>, at: 320}} />
	</>
);

// ---------- d01 scene 12: attempt 1 ----------
export const PilotAttempt: React.FC = () => (
	<RolesOn on={false}>
		<QuestionCard at={4} size={48} hold={{startFrame: 50, endFrame: 350}}>
			<div>Consider the function f(x) = 4e<Pow>2x − 1</Pow>.</div>
			<div style={{marginTop: 18}}>(a) Find f′(x).</div>
			<div style={{marginTop: 10}}>(b) Hence find the exact value of f′(½).</div>
		</QuestionCard>
	</RolesOn>
);

// ---------- d01 scene 17: key notes ----------
export const PilotNotes: React.FC = () => (
	<KeyNotesScreen bulletsW={1010} size={40} items={[
		{content: <>d/dx(e<Pow><Role r="a">a</Role>x+<Role r="b">b</Role></Pow>) = <Role r="a">a</Role>e<Pow><Role r="a">a</Role>x+<Role r="b">b</Role></Pow> and d/dx(<Role r="k">k</Role>e<Pow><Role r="a">a</Role>x+<Role r="b">b</Role></Pow>) = <Role r="k">k</Role>·<Role r="a">a</Role>·e<Pow><Role r="a">a</Role>x+<Role r="b">b</Role></Pow></>, at: 14},
		{content: <>For y = <Role r="k">k</Role>e<Pow><Role r="a">a</Role>x+<Role r="b">b</Role></Pow>: gradient = <Role r="a">a</Role> × height.</>, at: 24},
		{content: <>Proof: u = ax + b, du/dx = a, so dy/dx = e<Pow>u</Pow> × a.</>, at: 34},
		{content: <>Negative a: gradient negative, but y stays positive.</>, at: 44},
		{content: <>Trap: not 3x·e<Pow>3x − 1</Pow>. The power rule needs x in the base.</>, at: 54},
	]} aside={
		<MemoryAidCard x={1150} y={214} w={700} at={70} scale={0.8} iconSize={0}
			main={{content: <>Copy the exponential, then multiply by <Role r="k">k</Role> and <Role r="a">a</Role>.</>, at: 76}}
			keys={[
				{text: 'a: growth per cell', role: 'a', at: 80},
				{text: 'b: start time', role: 'b', at: 84},
				{text: 'k: how many flasks', role: 'k', at: 88},
			]} />
	} />
);

export const STUDIO_SCENES = [
	{id: 'hook-flask', durationInFrames: 450},
	{id: 'fast-strain-squash', durationInFrames: 450},
	{id: 'dial-a', durationInFrames: 450},
	{id: 'worked-1', durationInFrames: 450},
	{id: 'memory-aid', durationInFrames: 450},
	{id: 'attempt-1', durationInFrames: 360},
	{id: 'key-notes', durationInFrames: 240},
];
export const STUDIO_COMPONENTS: Record<string, React.FC> = {
	'hook-flask': PilotHook, 'fast-strain-squash': PilotSquash, 'dial-a': PilotDial, 'worked-1': PilotWorked, 'memory-aid': PilotAid, 'attempt-1': PilotAttempt, 'key-notes': PilotNotes,
};
void FrameSvg; void DrawnMark; void simHeight;
