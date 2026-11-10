// Scenes 13 to 18: attempt 1 (x − 4/x: domain, symmetry, no stationary points, no inflection) and its brief
// feedback, attempt 2 (graph-only: where f′ is zero, crossing or touching, and where f′ turns) and its brief
// feedback, the handoff (the painted pen against the stone wall; d18 opens on the final frame, exported as
// D17FinalFrame) and the key notes, which cross-fade back to it.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {CARD, CARD_SHADOW, FrameSvg, FunctionSimulator, GivensStrip, HandTag, KeyNotesBullets, MarkSpan, MistakeCard, QuestionCard, RolesOn, SceneHeading, SignStrip, StudioStackedDerivativePanels, TaskStrip, kf, smooth, vis, MATH_STRAND_ACCENT} from '../../math/studio';
import {K13, K14, K15, K16, K17, K18} from './cuemap';
import {dur, hold} from './common';
import {A1F, AID_MAIN, AMB, AMB_INK, AnswerBox, Attempt, Bl, Chip, GridGraph, Line, Ol, PenPlate, QAxes, V, VIOLET, r, r1, stubLine} from './parts';
import {CubicPoints, W1, plot} from './geom';
import {CrossIcon, stackMaps} from './s4';
import {G2} from './s1';

// ---------- 13. attempt 1 ----------
const Q1: React.FC<{u?: {d: number; s: number}}> = ({u}) => (
	<div>
		<div>Consider f(x) = x − 4/x.</div>
		<div>(a) State the {u ? <MarkSpan kind="underline" at={u.d}>domain</MarkSpan> : 'domain'} of f and whether f is odd, even or neither.</div>
		<div>(b) Show that the graph of y = f(x) has {u ? <MarkSpan kind="underline" at={u.s}>no stationary points</MarkSpan> : 'no stationary points'}.</div>
		<div>(c) Does the graph have a point of inflection? Justify your answer.</div>
	</div>
);
export const S13: React.FC = () => {
	const id = 'scene-13';
	return (
		<Attempt hold={hold(id)} pauseAt={K13.pause} top={540} given={['f(x) = x − 4/x']}
			picture={<QAxes h={400} x0={-4} x1={4} y0={-6} y1={6} ticks={[-4, -2, 2, 4]} tags={['domain?', 'inflection?']} />}>
			<Q1 />
		</Attempt>
	);
};

// ---------- 14. feedback 1 ----------
export const S14: React.FC = () => {
	const f = useCurrentFrame();
	const k = K14;
	const G = {x: 1090, y: 392, w: 800, h: 400};
	return (
		<>
			<TaskStrip text="Check your working" at={2} size={56} />
			<RolesOn on={f >= 10}>
				<QuestionCard at={-40} shrinkAt={-30} w={1700} y={170} size={44}><Q1 u={{d: k.domain, s: k.never}} /></QuestionCard>
			</RolesOn>
			<GivensStrip x={1320} y={166} size={36} maxW={560} items={[{content: 'f(x) = x − 4/x', at: 6}]} />
			<Line x={96} y={400} at={k.domain} size={44}><span style={{color: AMB_INK}}>x ≠ 0</span>;  f(−x) = −x + 4/x<span style={{opacity: prog(f, k.odd, 10)}}> = −f(x): odd</span></Line>
			<Line x={96} y={470} at={k.fp} size={44}><V>f′(x) = 1 + 4/x²</V><span style={{opacity: prog(f, k.always, 10)}}> &gt; 0 for all x ≠ 0</span></Line>
			<Line x={96} y={536} at={k.never} size={44}>never zero: no stationary points</Line>
			<Line x={96} y={610} at={k.fpp} size={44}><Bl>f″(x) = −8/x³</Bl></Line>
			<SignStrip x={60} y={690} width={980} windowX={[-4, 4]} mode="concavity" at={k.fpp + 20} rowLabel="f″" showTests={false}
				boundaries={[{x: 0, kind: 'excluded', color: '#b8322a', label: 'x = 0', note: {text: 'not in the domain', at: k.but, color: '#b8322a'}}]}
				cells={[{sign: 1, revealAt: k.changes}, {sign: -1, revealAt: k.changes + 10}]} />
			<AnswerBox x={96} y={866} at={k.noPoint} size={40}>(a) x ≠ 0, odd   (b) f′ &gt; 0: none   (c) no inflection</AnswerBox>
			<FunctionSimulator x={G.x} y={G.y} width={G.w} height={G.h} window={{x: [-4, 4], y: [-6, 6]}} family={A1F} timeline={[{frame: 0, x: 2}]} color={INK} at={-30}
				xTicks={[-4, -2, 2, 4]} yTicks={[-4, 4]} xLabel="x" yLabel="y" asymptotes={[0]} />
			<HandTag x={G.x + 60} y={G.y + 60} text="rises on each piece" at={k.rises} size={38} color={VIOLET} />
			<MistakeCard x={G.x} y={806} w={800} at={k.noInfl} size={36} wrong={<>point of inflection at (0, 0)</>} caption="x = 0 is not in the domain" />
		</>
	);
};

// ---------- 15. attempt 2 ----------
const W15 = {x: [-2.2, 3.3] as [number, number], y: [-4, 8] as [number, number]};
const Q2: React.FC<{u?: {ct: number}}> = ({u}) => (
	<div>
		<div>The graph of y = f(x) is shown.</div>
		<div>(a) State the values of x for which f′(x) = 0. For each, state whether the graph of y = f′(x) {u ? <MarkSpan kind="underline" at={u.ct}>crosses or touches</MarkSpan> : 'crosses or touches'} the x-axis.</div>
		<div>(b) State the x-values of the turning points of the graph of y = f′(x).</div>
	</div>
);
export const S15: React.FC = () => {
	const id = 'scene-15';
	return (
		<Attempt hold={hold(id)} pauseAt={K15.pause} heading="Last one" top={500} given={['graph of y = f(x)', 'gridlines at integers']}
			picture={<GridGraph w={780} h={440} win={W15} fn={r} xTicks={[-2, -1, 1, 2, 3]} yTicks={[-4, -2, 2, 4, 6, 8]} />}>
			<Q2 />
		</Attempt>
	);
};

// ---------- 16. feedback 2 ----------
const ST16 = {x: 30, y: 390, w: 1100, ph: [290, 260] as [number, number], gap: 10};
export const S16: React.FC = () => {
	const f = useCurrentFrame();
	const k = K16;
	const x = kf(f, [[k.atM1 - 20, -2.15], [k.crosses + 10, -0.6], [k.at2 + 10, 1.2], [k.touches + 14, 2.5], [k.turns, 3.25]], false);
	const [M0, F1] = stackMaps({...ST16, ph: ST16.ph}, W15.x, [W15.y, [-8, 9]]);
	const tm = {pt: M0.pf, sx: M0.sx, sy: M0.sy};
	return (
		<>
			<TaskStrip text="Check your working" at={2} size={56} />
			<RolesOn on={f >= 10}>
				<QuestionCard at={-40} shrinkAt={-30} w={1700} y={170} size={44} heading="Last one"><Q2 u={{ct: k.crosses}} /></QuestionCard>
			</RolesOn>
			<StudioStackedDerivativePanels x={ST16.x} y={ST16.y} width={ST16.w} panelHeight={ST16.ph} gap={ST16.gap} windowX={W15.x} xTicks={[-2, -1, 1, 2, 3]} at={-60} hideFormula
				panels={[{fn: r, df: r1, y: W15.y, yTicks: [-2, 2, 4, 6]}, {fn: r1, y: [-8, 9], yTicks: [-4, 4, 8], trace: 'progressive'}]}
				rider={{keys: [{frame: 0, x}], at: k.atM1 - 20}} traceFrom={-2.2}
				columns={[{x: -1, at: k.flat}, {x: 0, at: k.zeroTwo, glow: [k.zeroTwo, k.and]}, {x: 2, at: k.flat, glow: [k.zeroTwo, k.and]}]}
				rings={[{panel: 1, x: -1, at: k.crosses}, {panel: 1, x: 2, at: k.touches, kind: 'touch'}, {panel: 1, x: 0, at: k.zeroTwo, kind: 'turn'}, {panel: 1, x: 2, at: k.two, kind: 'turn'}]} />
			<FrameSvg>
				<g opacity={vis(f, k.flat, k.atM1 + 40, 12)}>
					<line {...stubLine(tm, -1, r(-1), 0, 0, 90)} stroke={VIOLET} strokeWidth={7} strokeLinecap="round" />
					<line {...stubLine(tm, 2, r(2), 0, 0, 90)} stroke={VIOLET} strokeWidth={7} strokeLinecap="round" />
				</g>
			</FrameSvg>
			<HandTag x={F1.pf(-0.85, 0)[0]} y={F1.pf(0, 6.5)[1]} text="crosses" at={k.crosses} size={44} color={INK} />
			<HandTag x={F1.pf(2.15, 0)[0]} y={F1.pf(0, 6.5)[1]} text="touches" at={k.touches} size={44} color={INK} />
			<GivensStrip x={1290} y={160} size={32} maxW={600} items={[{content: 'graph of f only', at: 6}, {content: 'gridlines at integers', at: 12}]} />
			<Line x={1170} y={420} at={k.flat} size={44}>f flat at −1 and 2: <V>f′ = 0</V></Line>
			<HandTag x={1170} y={520} text="at each zero: cross or touch?" at={k.zero} out={k.crosses - 14} size={44} color={VIOLET} />
			<Line x={1170} y={488} at={k.crosses - 10} size={44}>x = −1: f turns: <V>f′ crosses</V></Line>
			<Line x={1170} y={556} at={k.touches - 10} size={44}>x = 2: no turn: <V>f′ touches</V></Line>
			<Line x={1170} y={624} at={k.turns} size={44}>bend changes: <V>f′ turns</V></Line>
			<AnswerBox x={1150} y={700} at={k.two} size={40}><div><div>(a) x = −1 crosses; x = 2 touches</div><div>(b) x = 0 and x = 2</div></div></AnswerBox>
			<MistakeCard x={1150} y={830} w={750} at={k.and} size={36} wrong={<>f′ = 0 where f meets the x-axis</>} caption="f′ = 0 where f is flat" />
		</>
	);
};

// ---------- 17. handoff ----------
const MemoryLine: React.FC<{at?: number}> = ({at = -30}) => {
	const f = useCurrentFrame();
	return <div style={{position: 'absolute', left: 1430, top: 160, width: 460, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, color: INK, opacity: prog(f, at, 12)}}>{AID_MAIN} Crossing: a turn. Touching: no turn.</div>;
};
const HandoffSide: React.FC<{forty: number; area: number; pen: number}> = ({forty, area, pen}) => (
	<>
		<Chip x={1430} y={340} at={forty} size={46} color={AMB}><span style={{color: AMB_INK}}>40 m of fencing</span></Chip>
		<Chip x={1430} y={462} at={pen} size={44} color={INK}>three sides: x, y, x</Chip>
		<Chip x={1430} y={584} at={area} size={52} color={MATH_STRAND_ACCENT}>largest area?</Chip>
	</>
);
const HEAD17 = 'Next: build the function yourself';
/** d17's final frame (d18 opens on it): the painted pen, the sheep, the side tags and both chips. */
export const D17FinalFrame: React.FC = () => (
	<>
		<SceneHeading text={HEAD17} at={-300} size={56} />
		<PenPlate at={-60} tagsAt={-60} wallAt={-60} />
		<MemoryLine at={-60} />
		<HandoffSide forty={-60} area={-60} pen={-60} />
	</>
);
export const S17: React.FC = () => {
	const f = useCurrentFrame();
	const k = K17;
	const swap = smooth(prog(f, k.next - 6, 26));
	const M = plot(G2, W1);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - swap}}>
				{swap < 1 ? <>
					<SceneHeading text="A sketch is a set of constraints" at={4} size={56} />
					<FunctionSimulator x={G2.x} y={G2.y} width={G2.w} height={G2.h} window={W1} family={{f: x => x ** 3 - 3 * x, df: x => 3 * x * x - 3}} timeline={[{frame: 0, x: 0}]} color={INK} at={-30}
						xTicks={[-2, -1, 1, 2]} yTicks={[-4, -2, 2, 4]} xLabel="x" yLabel="y" />
					<CubicPoints M={M} at={[-60, -60, -60]} labelSize={36} />
					<Chip x={1130} y={260} at={k.sketch} size={46} color={INK}>a sketch = a set of constraints</Chip>
					<Line x={1130} y={380} at={k.sketch + 50} size={42}><V>f′</V>: rising or falling</Line>
					<Line x={1130} y={444} at={k.sketch + 62} size={42}><Bl>f″</Bl>: <Ol>cap</Ol> or <Bl>cup</Bl></Line>
					<Line x={1130} y={508} at={k.sketch + 74} size={42}>domain, symmetry, ends</Line>
				</> : null}
			</div>
			<div style={{position: 'absolute', inset: 0, opacity: swap}}>
				{swap > 0.001 ? <>
					<SceneHeading text={HEAD17} at={k.next} size={56} />
					<PenPlate at={k.next - 6} tagsAt={k.pen} wallAt={k.wall} />
					<MemoryLine at={k.next + 20} />
					<HandoffSide forty={k.forty} area={k.area} pen={k.pen + 10} />
				</> : null}
			</div>
		</>
	);
};

// ---------- 18. key notes ----------
export const S18: React.FC = () => {
	const f = useCurrentFrame();
	const id = 'scene-18';
	const items = [
		{content: <>Check: domain, symmetry, intercepts, turning points, inflections, asymptotes, x → ±∞.</>, at: 10},
		{content: <>Label every feature with its coordinates or equation.</>, at: 22},
		{content: <><V>f′ &gt; 0</V>: f rises. <V>f′ &lt; 0</V>: f falls. <Bl>f″ &gt; 0</Bl>: cup. <Bl>f″ &lt; 0</Bl>: cap.</>, at: 34},
		{content: <>An inflection must be a point on the curve, not an excluded x.</>, at: 46},
		{content: <>f flat: <V>f′ = 0</V> (crosses if f turns, touches if not). f steepest: <V>f′</V> turns.</>, at: 58},
	];
	const back = prog(f, Math.max(1350, dur(id)) - 40, 36);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
				<SceneHeading text="Key notes: what to write in your book" at={2} />
				<HandTag x={1824} y={116} text="pause to copy" at={K18.pause} size={42} color={MATH_STRAND_ACCENT} anchor="end" />
				<KeyNotesBullets x={96} y={220} w={1040} items={items} size={38} gap={40} />
				<Enter at={70} style={{position: 'absolute', left: 1190, top: 196, width: 650}}>
					<div style={{background: CARD, border: `4px solid ${INK}`, borderRadius: 22, boxShadow: `inset 0 0 0 7px ${CARD}, inset 0 0 0 9.5px ${INK}, ${CARD_SHADOW}`, padding: '22px 30px 26px', height: 700, boxSizing: 'border-box'}}>
						<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK_SOFT}}>Memory aid</div>
						<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 66, lineHeight: 1.08, color: INK, marginTop: 4}}>{AID_MAIN}</div>
						<div style={{display: 'flex', alignItems: 'center', gap: 18, marginTop: 26}}><CrossIcon size={100} /><span style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 38, color: VIOLET}}>crossing zero: a turn above</span></div>
						<div style={{display: 'flex', alignItems: 'center', gap: 18, marginTop: 22}}><CrossIcon touch size={100} /><span style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 38, color: VIOLET}}>touching zero: flat, no turn</span></div>
						<div style={{marginTop: 34, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46, color: MATH_STRAND_ACCENT}}>smooth curves</div>
					</div>
				</Enter>
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><D17FinalFrame /></div> : null}
		</>
	);
};
