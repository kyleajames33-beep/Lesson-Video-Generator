// Scenes 9 to 12: the worked example (3 sin x), the memory aid (the derivative cycle), attempt 1 and feedback.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_HAND, HandText, INK, INK_SOFT, prog} from '../../kit';
import {
	CARD, CARD_SHADOW, Card, EquationStrip, FrameSvg, FunctionSimulator, GivensCard, GivensStrip, HandTag, MarkSpan, MistakeCard, PreloadPlates, QuestionCard, TaskStrip,
	MATH_AMBER, MATH_ANSWER, kf, piTicks,
} from '../../math/studio';
import type {FnKey} from '../../math/studio';
import type {Range} from '../../math/graphs';
import {cue, hold, PI} from './common';
import {
	AttemptWide, WholeRows, CurveLabel, DISPLAY, FerrisWheel, Frac, GONDOLA, GONDOLA_MARKED, Legend, NAVY, QRad, RIM, RecallChip, SIN, STAND, TEAL, TRIG_WIN, TanLine, VIOLET, gmap, RAD_TICKS,
} from './parts';

const PLATES = [RIM, STAND, GONDOLA, GONDOLA_MARKED];
const R3 = <Frac n="3√2" d="2" />;
const W02 = {x: [0, 2 * PI] as Range, y: [-3.5, 3.5] as Range};

// ---------- 9. worked example ----------
export const S09: React.FC = () => {
	const id = 'scene-09';
	const f = useCurrentFrame();
	const two = cue(id, 'root two over two', 1), big = cue(id, 'three times as big'), r1 = cue(id, 'three cos x'), r2 = cue(id, 'Set that equal'), r3 = cue(id, 'Cos x equals'), quad = cue(id, 'Cos is positive'), ans = cue(id, 'seven pi over four');
	const graph = cue(id, 'On the graph'), rising = cue(id, 'rising'), tangents = cue(id, 'two tangents');
	const G = {x: 1240, y: 290, w: 584, h: 560};
	const M = gmap(G.x, G.y, G.w, G.h, W02);
	const T: FnKey[] = [{frame: 0, x: PI / 4, yScale: 1}, {frame: big - 10, yScale: 1}, {frame: big + 26, yScale: 3}];
	const tO = prog(f, graph, 14);
	return (
		<>
			<TaskStrip text="Find every x in [0, 2π] with this gradient" at={-24} />
			<Legend />
			<EquationStrip at={-30} y={164} size={66}>y = <span style={{color: MATH_AMBER}}>3</span> sin x</EquationStrip>
			<GivensCard x={96} y={300} w={460} at={-30} title="Givens" size={46} lines={[
				{content: <>gradient = {R3}</>, at: -30, glow: [r2, r3]},
				{content: <>0 ≤ x ≤ 2π</>, at: two, glow: [ans - 10, ans + 60]},
				{content: <>number in front 3</>, at: -30, role: 'k'},
			]} />
			<Card x={600} y={300} w={620} at={-30} out={r1 - 8} pad="14px 28px 18px">
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK_SOFT}}>Plan</div>
				{[<>1. Differentiate y.</>, <>2. Set dy/dx = {R3}.</>, <>3. Solve for x in [0, 2π].</>].map((t, i) => (
					<div key={i} style={{...DISPLAY(38, INK, 700), padding: '2px 12px', margin: '6px -12px 0', borderRadius: 10, background: i === 0 ? '#efe6d2' : undefined}}>{t}</div>
				))}
			</Card>
			<WholeRows x={600} y={300} w={630} size={54} oldSize={38} gap={12} rows={[
				{left: 'dy/dx', right: <><span style={{color: MATH_AMBER}}>3</span> cos x</>, at: r1},
				{left: <><span style={{color: MATH_AMBER}}>3</span> cos x</>, right: R3, at: r2},
				{left: 'cos x', right: <Frac n="√2" d="2" />, at: r3},
				{left: 'x', right: <><Frac n="π" d="4" /> or <Frac n="7π" d="4" /></>, at: ans, answer: true},
			]} />
			<RecallChip x={600} y={720} at={quad} size={30}>Year 11: cos &gt; 0 in quadrants 1 and 4</RecallChip>
			<MistakeCard x={96} y={800} w={1124} at={ans + 50} size={40} wrong={<>x = π/4 only (7π/4 is below the axis)</>} caption="the gradient, not the height, must be 3√2/2" />
			<FunctionSimulator x={G.x} y={G.y} width={G.w} height={G.h} window={W02} family={SIN} timeline={T} color={INK} curveWidth={6}
				xTicks={piTicks(0, 2, 2)} yTicks={[-3, -2, -1, 1, 2, 3]} xLabel="x" yLabel="y"
				curves={[{fn: Math.sin, at: big - 10, color: INK_SOFT, dash: '12 9', width: 4}]}
				overlay={() => (
					<FrameSvg>
						<TanLine M={M} X={PI / 4} Y={3 * Math.sin(PI / 4)} m={3 * Math.cos(PI / 4)} half={110} opacity={tO} />
						<TanLine M={M} X={7 * PI / 4} Y={3 * Math.sin(7 * PI / 4)} m={3 * Math.cos(7 * PI / 4)} half={110} opacity={tO} />
						{[PI / 4, 7 * PI / 4].map(x => <circle key={x} cx={M.pt(x, 3 * Math.sin(x))[0]} cy={M.pt(x, 3 * Math.sin(x))[1]} r={12} fill={VIOLET} stroke={CARD} strokeWidth={4} opacity={tO} />)}
					</FrameSvg>
				)} />
			<CurveLabel x={M.pt(2.6, 2.6)[0]} y={M.pt(2.6, 2.6)[1] - 30} at={big + 20} color={INK} size={38}>y = <span style={{color: MATH_AMBER}}>3</span> sin x</CurveLabel>
			<HandTag x={M.pt(3.2, 0)[0]} y={M.pt(0, -2.7)[1]} text="× 3: every slope × 3" at={big + 10} out={graph} size={36} role="k" />
			<CurveLabel x={M.pt(PI / 4, 0)[0] - 40} y={M.pt(0, -1.0)[1]} at={graph + 10} color={VIOLET} size={32}>2.121</CurveLabel>
			<CurveLabel x={M.pt(7 * PI / 4, 0)[0] - 60} y={M.pt(0, 0.6)[1]} at={graph + 10} color={VIOLET} size={32}>2.121</CurveLabel>
			<HandTag x={M.pt(2.3, 0)[0]} y={M.pt(0, -2.7)[1]} text="rising at both" at={rising} out={tangents} size={36} color={VIOLET} />
			<HandTag x={M.pt(2.6, 0)[0]} y={M.pt(0, -2.7)[1]} text="parallel" at={tangents} size={44} color={VIOLET} />
			<Enter at={graph + 20} style={{position: 'absolute', left: G.x + 20, top: G.y + G.h + 4}}><span style={DISPLAY(28, INK_SOFT, 700)}>3√2/2 ≈ 2.121</span></Enter>
		</>
	);
};

// ---------- 10. memory aid: the derivative cycle ----------
export const CycleNodes: React.FC<{cx: number; cy: number; r: number; size: number; at: number[]; arrowsAt: number[]}> = ({cx, cy, r, size, at, arrowsAt}) => {
	const f = useCurrentFrame();
	const nodes = ['sin x', 'cos x', '−sin x', '−cos x'];
	const pos = (k: number): [number, number] => [cx + r * Math.sin((k * PI) / 2), cy - r * Math.cos((k * PI) / 2)];
	return (
		<>
			<FrameSvg>
				{[0, 1, 2, 3].map(k => {
					const a0 = (k * PI) / 2 + 0.42, a1 = ((k + 1) * PI) / 2 - 0.42;
					const p0 = [cx + r * Math.sin(a0), cy - r * Math.cos(a0)], p1 = [cx + r * Math.sin(a1), cy - r * Math.cos(a1)];
					const o = prog(f, arrowsAt[k], 12);
					const ang = Math.atan2(p1[1] - p0[1], p1[0] - p0[0]) + 0.5;
					const tip = (d: number) => `${p1[0] - 22 * Math.cos(ang + d)},${p1[1] - 22 * Math.sin(ang + d)}`;
					const lx = cx + (r + 52) * Math.sin(((k + 0.5) * PI) / 2), ly = cy - (r + 52) * Math.cos(((k + 0.5) * PI) / 2);
					return <g key={k} opacity={o}>
						<path d={`M${p0[0]},${p0[1]} A${r},${r} 0 0 1 ${p1[0]},${p1[1]}`} fill="none" stroke={VIOLET} strokeWidth={6} strokeLinecap="round" />
						<path d={`M${tip(-0.45)} L${p1[0]},${p1[1]} L${tip(0.45)}`} fill="none" stroke={VIOLET} strokeWidth={6} strokeLinecap="round" />
						<text x={lx} y={ly + 12} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36, fill: VIOLET}}>d/dx</text>
					</g>;
				})}
			</FrameSvg>
			{nodes.map((n, k) => {
				const [x, y] = pos(k);
				const o = prog(f, at[k], 12);
				return <div key={n} style={{position: 'absolute', left: x, top: y, transform: 'translate(-50%, -50%)', opacity: 0.85 + 0.15 * o, fontFamily: FONT_HAND, fontWeight: 700, fontSize: size, color: INK, whiteSpace: 'pre', background: CARD, padding: '0 10px'}}>{n}</div>;
			})}
		</>
	);
};
export const S10: React.FC = () => {
	const id = 'scene-10';
	const f = useCurrentFrame();
	const sinAt = cue(id, 'Differentiate sine'), cosAt = cue(id, 'you get cos'), msin = cue(id, 'you get minus sine'), mcos = cue(id, 'gives minus cos'), again = cue(id, 'gives sine again'), started = cue(id, 'started'), each = cue(id, 'Each derivative');
	const GX = 990, GY = 250, GW = 730, GH = 420;
	const M = gmap(GX, GY, GW, GH, TRIG_WIN);
	const k = kf(f, [[each, 0], [each + 26, 1], [each + 34, 1], [each + 60, 2], [each + 68, 2], [each + 94, 3], [each + 102, 3], [each + 128, 4]]);
	const T: FnKey[] = [{frame: 0, x: 0, xShift: -k * PI / 2}];
	const labels = ['y = sin x', 'y = cos x', 'y = −sin x', 'y = −cos x', 'y = sin x'];
	const li = Math.round(k);
	return (
		<>
			<PreloadPlates plates={PLATES} />
			<TaskStrip text="A way to remember the pattern" at={2} />
			<Legend />
			<div style={{position: 'absolute', left: 150, top: 168, width: 1620, height: 772, boxSizing: 'border-box', background: CARD, border: `4px solid ${INK}`, borderRadius: 24, boxShadow: `inset 0 0 0 8px ${CARD}, inset 0 0 0 10.5px ${INK}, ${CARD_SHADOW}`}} />
			<div style={{position: 'absolute', left: 198, top: 190}}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 48, color: INK_SOFT}}>Memory aid</span></div>
			<CycleNodes cx={560} cy={540} r={220} size={64} at={[sinAt, cosAt, msin, mcos]} arrowsAt={[cosAt, msin, mcos, again]} />
			{f >= started ? <div style={{position: 'absolute', left: 520, top: 500}}><HandText text="✓" at={started} size={80} color={MATH_ANSWER} /></div> : null}
			<Enter at={-30} style={{position: 'absolute', left: 300, top: 830}}><span style={DISPLAY(44)}>x in radians</span></Enter>
			<FunctionSimulator x={GX} y={GY} width={GW} height={GH} window={TRIG_WIN} family={SIN} timeline={T} color={li % 2 ? NAVY : INK} curveWidth={6}
				xTicks={RAD_TICKS} yTicks={[-1, 1]} xLabel="x" yLabel="y"
				curves={[{fn: Math.sin, at: each, color: INK_SOFT, dash: '10 9', width: 3}]} />
			<CurveLabel x={M.pt(3.2, 1.2)[0]} y={M.pt(3.2, 1.2)[1] - 34} color={li % 2 ? NAVY : INK} size={40}>{labels[li]}</CurveLabel>
			<HandTag x={M.pt(-2.4, 0)[0]} y={M.pt(0, 1.3)[1]} text="← π/2 each time" at={each} size={40} color={TEAL} />
			<RecallChip x={GX + 20} y={GY + GH + 6} at={each + 60} size={30}>quarter period = 2π ÷ 4 = π/2</RecallChip>
			<FerrisWheel cx={GX + 70} cy={830} R={66} angle={0.6} stand={false} />
			<Enter at={-30} style={{position: 'absolute', left: GX + 150, top: 810}}><span style={DISPLAY(34)}>seat: height sin x, climbing rate <span style={{color: VIOLET}}>cos x</span></span></Enter>
		</>
	);
};

// ---------- 11. attempt 1 ----------
export const Q1: React.FC<{u?: {a: number; b: number}}> = ({u}) => (
	<>
		<div>Let f(x) = sin x.</div>
		<div style={{marginTop: 12}}>(a) Find f′(x).</div>
		<div style={{marginTop: 8}}>(b) Find the exact gradient of the curve y = f(x) at {u ? <MarkSpan kind="underline" at={u.a}>x = 2π/3</MarkSpan> : 'x = 2π/3'} and at {u ? <MarkSpan kind="underline" at={u.b}>x = 3π/2</MarkSpan> : 'x = 3π/2'}.</div>
	</>
);
const QPIC1 = <QRad marks={[{x: 2 * PI / 3, label: '2π/3'}, {x: 1.5 * PI, label: '3π/2'}]} w={900} h={380} />;
export const S11: React.FC = () => {
	const id = 'scene-11';
	const pause = cue(id, 'Pause here');
	return (
		<AttemptWide hold={hold(id)} pauseAt={pause} size={46} given={[<>f(x) = sin x</>, <>x = 2π/3 and x = 3π/2</>, <>exact values</>]} picture={QPIC1}>
			<Q1 />
		</AttemptWide>
	);
};

// ---------- 12. feedback 1 ----------
export const S12: React.FC = () => {
	const id = 'scene-12';
	const f = useCurrentFrame();
	const r1 = cue(id, 'is cos x'), half = cue(id, 'minus a half'), zero = cue(id, 'cos is zero'), wrong = cue(id, 'Minus one is');
	const G = {x: 1150, y: 330, w: 674, h: 560};
	const W = {x: [0, 2 * PI] as Range, y: [-1.6, 1.6] as Range};
	const M = gmap(G.x, G.y, G.w, G.h, W);
	return (
		<>
			<TaskStrip text="Check your working" at={2} />
			<QuestionCard at={-40} shrinkAt={-30} w={1460} y={200}><Q1 u={{a: half - 10, b: zero - 10}} /></QuestionCard>
			<GivensStrip x={1160} y={252} size={34} maxW={664} items={[
				{content: 'f(x) = sin x', at: 6}, {content: 'x = 2π/3', at: half - 10}, {content: 'x = 3π/2', at: zero - 10},
			]} />
			<WholeRows x={96} y={420} w={1030} size={54} oldSize={44} gap={16} rows={[
				{left: 'f′(x)', right: <>cos x</>, at: r1, answer: true},
				{left: <>f′(<Frac n="2π" d="3" />)</>, right: <>cos(<Frac n="2π" d="3" />) = −½</>, at: half, answer: true},
				{left: <>f′(<Frac n="3π" d="2" />)</>, right: <>cos(<Frac n="3π" d="2" />) = 0</>, at: zero, answer: true},
			]} />
			<MistakeCard x={96} y={806} w={1030} at={wrong} size={42} wrong={<>f′(3π/2) = −1</>} caption="−1 is the height, sin(3π/2)" />
			<FunctionSimulator x={G.x} y={G.y} width={G.w} height={G.h} window={W} family={SIN} timeline={[{frame: 0, x: 2 * PI / 3}, {frame: zero - 20, x: 2 * PI / 3}, {frame: zero, x: 1.5 * PI}]} color={INK}
				xTicks={piTicks(0, 2, 2)} yTicks={[-1, 1]} xLabel="x" yLabel="y"
				point={{at: half - 6}} tangent={{at: half, halfLength: 130}} />
			<CurveLabel x={M.pt(0.3, 1.1)[0]} y={M.pt(0.3, 1.1)[1] - 50} size={40}>y = sin x</CurveLabel>
			<HandTag x={M.pt(2.5, 0)[0]} y={M.pt(0, 1.35)[1]} text="falling" at={half + 10} out={zero} size={40} color={VIOLET} />
			<HandTag x={M.pt(3.6, 0)[0]} y={M.pt(0, -1.42)[1]} text="flat at the trough" at={zero + 10} size={38} color={VIOLET} />
			<FerrisWheel cx={M.pt(5.3, 0)[0]} cy={M.pt(0, 0.85)[1]} R={60} angle={f >= zero ? 1.5 * PI : 2 * PI / 3} stand={false} at={zero} />
			<HandTag x={M.pt(5.3, 0)[0]} y={M.pt(0, 0.85)[1] - 92} text="seat at the bottom" at={zero + 12} size={30} color={INK_SOFT} anchor="middle" />
		</>
	);
};

