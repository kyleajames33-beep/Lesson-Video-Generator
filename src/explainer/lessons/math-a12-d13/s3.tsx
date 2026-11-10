// Scenes 7 to 10: attempt 1 (gradient of 5^(x²) at x = 1) and its brief feedback, attempt 2 (log base 2 of 4 − x
// and its domain) and its brief feedback.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_DISPLAY, INK, INK_SOFT, prog} from '../../kit';
import {Card, CardTitle, FrameSvg, FunctionSimulator, GivensStrip, MarkSpan, MistakeCard, QuestionCard, RolesOn, TaskStrip} from '../../math/studio';
import {cue, hold} from './common';
import {AMB, AmberStrip, AnswerBox, B, CurveLabel, EXP5, Frac2, GREY, LOG2, Lb, Line, P, PreRing, QRadAxis, Ring, S, T, VIOLET, gmap, tl} from './parts';

/** The d02 to d09 attempt layout (as d12): question card, 46 px Given card, large answer-free picture, full ring from "Pause here". */
const Attempt: React.FC<{hold: {startFrame: number; endFrame: number}; pauseAt: number; picture: React.ReactNode; given: React.ReactNode[]; heading?: string; children: React.ReactNode}> = ({hold: h, pauseAt, picture, given, heading, children}) => (
	<RolesOn on={false}>
		<Card x={96} y={500} w={640} at={6} pad="16px 28px 18px">
			<CardTitle>Given</CardTitle>
			{given.map((g, i) => <div key={i} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 46, color: INK, marginTop: 6, whiteSpace: 'pre'}}>{g}</div>)}
		</Card>
		<Enter at={6} style={{position: 'absolute', left: 770, top: 486}}>{picture}</Enter>
		<QuestionCard at={0} size={60} w={1500} y={196} hold={h} pauseAt={pauseAt} heading={heading}>{children}</QuestionCard>
		<PreRing from={pauseAt} start={h.startFrame} />
	</RolesOn>
);
const numTicks = (vals: number[]) => vals.map(v => ({value: v, label: v < 0 ? '−' + Math.abs(v) : String(v)}));
const F5 = <>5<P>x²</P></>;

// ---------- 7. attempt 1 ----------
const Q1: React.FC<{u?: {x: number; exact: number}}> = ({u}) => (
	<div>Find the {u ? <MarkSpan kind="underline" at={u.exact}>exact</MarkSpan> : 'exact'} gradient of the curve y = {F5} at the point where {u ? <MarkSpan kind="underline" at={u.x}>x = 1</MarkSpan> : 'x = 1'}.</div>
);
export const S07: React.FC = () => {
	const id = 'scene-07';
	return (
		<Attempt hold={hold(id)} pauseAt={cue(id, 'Pause here')} given={[<>y = {F5}</>, <>x = 1</>, <>exact gradient</>]}
			picture={<QRadAxis w={820} h={430} range={[-2.4, 2.4]} ticks={numTicks([-2, -1, 0, 1, 2])} mark={1} tag="gradient here?" />}>
			<Q1 />
		</Attempt>
	);
};

// ---------- 8. feedback 1 ----------
const FG = {x: 1080, y: 236, w: 760, h: 600};
export const S08: React.FC = () => {
	const id = 'scene-08';
	const f = useCurrentFrame();
	const copy = cue(id, 'copy it'), twox = cue(id, 'two x as well'), atone = cue(id, 'At x equals one'), five = cue(id, 'ten times') + 48, mistake = cue(id, 'Five times the natural');
	const W = {x: [-0.3, 1.45] as [number, number], y: [-2, 25] as [number, number]};
	const M = gmap(FG.x, FG.y, FG.w, FG.h, W);
	return (
		<>
			<TaskStrip text="Check your working" at={2} />
			<RolesOn on={f >= 10}>
				<QuestionCard at={-40} shrinkAt={-30} w={1500} y={196} size={60}><Q1 u={{x: atone, exact: five + 10}} /></QuestionCard>
			</RolesOn>
			<GivensStrip x={1080} y={152} size={36} items={[{content: <>y = {F5}</>, at: 6}, {content: 'x = 1', at: 12}, {content: 'exact', at: 18}]} />
			<Line x={96} y={320} at={copy} size={52}>dy/dx = 5<P><S>x²</S></P> × <T>ln 5</T><span style={{opacity: prog(f, twox, 12)}}> × <B g={prog(f, twox + 6, 8) * (1 - prog(f, twox + 70, 12))}>2x</B></span></Line>
			<Line x={96} y={440} at={atone} size={52}>x = 1:  5¹ × <T>ln 5</T> × <B>2</B></Line>
			<AnswerBox x={250} y={530} at={five} size={56}><span>= 10 ln 5</span></AnswerBox>
			<Line x={640} y={556} at={five + 16} size={38} color={INK_SOFT} weight={600}>≈ 16.09</Line>
			<MistakeCard x={96} y={690} w={900} at={mistake} size={48} wrong={<>5 ln 5</>} caption="the inside's 2x is missing" />
			<FunctionSimulator x={FG.x} y={FG.y} width={FG.w} height={FG.h} window={W} family={EXP5} timeline={tl([[0, 1]])} color={INK} at={-30}
				xTicks={[1]} yTicks={[5, 10, 15, 20]} xLabel="x" yLabel="y"
				point={{at: atone, color: INK}} tangent={{at: five, halfLength: 170}}
				overlay={() => <FrameSvg><Ring p={M.pt(1, 5)} r={28} o={prog(f, five, 12)} color={VIOLET} /></FrameSvg>} />
			<CurveLabel x={M.pt(-0.25, 0)[0]} y={M.pt(0, 21)[1]} at={-30} size={40} color={INK}>y = {F5}</CurveLabel>
			<CurveLabel x={M.pt(1, 5)[0] + 30} y={M.pt(1, 5)[1] + 10} at={atone + 10} size={34} color={INK}>(1, 5)</CurveLabel>
		</>
	);
};

// ---------- 9. attempt 2 ----------
const Q2: React.FC<{u?: {diff: number; dom: number}}> = ({u}) => (
	<div>{u ? <MarkSpan kind="underline" at={u.diff}>Differentiate</MarkSpan> : 'Differentiate'} y = log<Lb>2</Lb>(4 − x), and state the {u ? <MarkSpan kind="underline" at={u.dom}>domain</MarkSpan> : 'domain'} of the function.</div>
);
export const S09: React.FC = () => {
	const id = 'scene-09';
	return (
		<Attempt hold={hold(id)} pauseAt={cue(id, 'Pause here')} heading="Last one" given={[<>y = log<Lb>2</Lb>(4 − x)</>, <>find dy/dx</>, <>state the domain</>]}
			picture={<QRadAxis w={820} h={430} range={[-7, 10]} ticks={numTicks([-6, -3, 0, 3, 6, 9])} tag="domain?" />}>
			<Q2 />
		</Attempt>
	);
};

// ---------- 10. feedback 2 ----------
export const S10: React.FC = () => {
	const id = 'scene-10';
	const f = useCurrentFrame();
	const four = cue(id, 'less than four', 1) + 18, insd = cue(id, "The inside's derivative"), so = cue(id, 'So d y by d x'), without = cue(id, 'Without the minus'), grows = cue(id, 'x grows');
	const W = {x: [-4, 5] as [number, number], y: [-3, 4] as [number, number]};
	const G = {...FG, h: 700};
	const M = gmap(G.x, G.y, G.w, G.h, W);
	const NL = {x: 130, y: 420, w: 880};
	const X = (v: number) => NL.x + ((v + 2) / 9) * NL.w;
	return (
		<>
			<TaskStrip text="Check your working" at={2} />
			<RolesOn on={f >= 10}>
				<QuestionCard at={-40} shrinkAt={-30} w={1500} y={196} size={60} heading="Last one"><Q2 u={{diff: so, dom: four}} /></QuestionCard>
			</RolesOn>
			<GivensStrip x={1080} y={152} size={36} items={[{content: <>y = log<Lb>2</Lb>(4 − x)</>, at: 6}, {content: 'domain', at: 12}]} />
			<FrameSvg style={{opacity: prog(f, 4, 12)}}>
				<rect x={NL.x - 10} y={NL.y - 26} width={(X(4) - NL.x + 10) * prog(f, four, 20)} height={52} rx={10} fill="rgba(248,232,200,0.95)" />
				<line x1={NL.x - 20} x2={NL.x + NL.w + 20} y1={NL.y} y2={NL.y} stroke={INK} strokeWidth={5} strokeLinecap="round" />
				<path d={`M${NL.x + NL.w + 6},${NL.y - 12} L${NL.x + NL.w + 22},${NL.y} L${NL.x + NL.w + 6},${NL.y + 12}`} stroke={INK} strokeWidth={5} fill="none" />
				{[-2, 0, 2, 4, 6].map(v => <g key={v}><line x1={X(v)} x2={X(v)} y1={NL.y - 12} y2={NL.y + 12} stroke={INK} strokeWidth={4} /><text x={X(v)} y={NL.y + 60} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 42, fill: v === 4 ? AMB : INK}}>{v < 0 ? '−' + Math.abs(v) : v}</text></g>)}
				<circle cx={X(4)} cy={NL.y} r={15} fill="#fffdf8" stroke={AMB} strokeWidth={6} opacity={prog(f, four, 12)} />
			</FrameSvg>
			<AmberStrip x={96} y={290} at={four} size={40}>4 − x &gt; 0, so x &lt; 4</AmberStrip>
			<Line x={96} y={540} at={insd} size={56}>inside: <S>4 − x</S>,  derivative <B>−1</B></Line>
			<AnswerBox x={96} y={636} at={so} size={54}><span>dy/dx = <Frac2 n={<B>−1</B>} d={<>(4 − x) <T>ln 2</T></>} />,  x &lt; 4</span></AnswerBox>
			<MistakeCard x={96} y={800} w={900} at={without} size={44} wrong={<>1/((4 − x) ln 2)</>} caption="the inside's −1 is missing" />
			<FunctionSimulator x={G.x} y={G.y} width={G.w} height={G.h} window={W} family={LOG2} timeline={tl([[0, 2]])} color={INK} asymptotes={[4]} at={-30} branchSafe={{gap: 0.05}}
				xTicks={[-2, 2, 4]} yTicks={[-2, 2]} xLabel="x" yLabel="y"
				regions={[{x: [-4, 4], color: 'rgba(248,232,200,0.6)', at: four}]}
				point={{at: so, color: INK}} tangent={{at: so + 6, halfLength: 150}} />
			<CurveLabel x={M.pt(-3.8, 0)[0]} y={M.pt(0, 3.6)[1]} at={-30} size={38} color={INK}>y = log<Lb>2</Lb>(4 − x)</CurveLabel>
			<CurveLabel x={M.pt(-3.8, 0)[0]} y={M.pt(0, -1.6)[1]} at={grows - 60} size={34} color={VIOLET}>falls: the inside shrinks as x grows</CurveLabel>
			<CurveLabel x={M.pt(4, 0)[0] + 10} y={M.pt(0, -2.6)[1]} at={four} size={30} color={GREY}>x = 4</CurveLabel>
		</>
	);
};
