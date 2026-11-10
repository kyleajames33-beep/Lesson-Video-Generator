// Scenes 9 to 12: attempt 1 (y = e^(2x) at x = ½) and its brief feedback, attempt 2 (y = sin x + cos x at
// x = π/4, the flat case, not hinted on the card) and its brief feedback.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {Card, CardTitle, FrameSvg, FunctionSimulator, GivensStrip, MarkSpan, MistakeCard, QuestionCard, RolesOn, TaskStrip, piTicks} from '../../math/studio';
import {cue, hold} from './common';
import {AnswerBox, AnswerStack, CurveLabel, E, E2X, Line, P, PI, PreRing, Ring, SPC, TEAL, Tl, V, VIOLET, gmap, tl} from './parts';

/** The d02 to d13 attempt layout: question card, Given card, large answer-free picture, full ring from "Pause here". */
const Attempt: React.FC<{hold: {startFrame: number; endFrame: number}; pauseAt: number; picture: React.ReactNode; given: React.ReactNode[]; heading?: string; children: React.ReactNode}> = ({hold: h, pauseAt, picture, given, heading, children}) => (
	<RolesOn on={false}>
		<Card x={96} y={500} w={640} at={6} pad="16px 28px 18px">
			<CardTitle>Given</CardTitle>
			{given.map((g, i) => <div key={i} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 46, color: INK, marginTop: 6, whiteSpace: 'pre'}}>{g}</div>)}
		</Card>
		<Enter at={6} style={{position: 'absolute', left: 770, top: 500}}>{picture}</Enter>
		<QuestionCard at={0} size={50} w={1500} y={196} hold={h} pauseAt={pauseAt} heading={heading}>{children}</QuestionCard>
		<PreRing from={pauseAt} start={h.startFrame} />
	</RolesOn>
);

/** Answer-free picture: equal-unit axes with the x-value marked, and the two questions. No curve, no gradient. */
const QTanNormal: React.FC<{w?: number; h?: number; range: [number, number]; yRange: [number, number]; ticks: {value: number; label: string}[]; mark: number; markLabel: string}> = ({w = 820, h = 380, range, yRange, ticks, mark, markLabel}) => {
	const s = Math.min((w - 100) / (range[1] - range[0]), (h - 70) / (yRange[1] - yRange[0]));
	const ox = (w - s * (range[1] - range[0])) / 2, oy = 20;
	const X = (v: number) => ox + (v - range[0]) * s, Y = (v: number) => oy + (yRange[1] - v) * s;
	const grid: number[] = [];
	for (let v = Math.ceil(range[0]); v <= range[1]; v++) grid.push(v);
	const gy: number[] = [];
	for (let v = Math.ceil(yRange[0]); v <= yRange[1]; v++) gy.push(v);
	return (
		<div style={{width: w, height: h, position: 'relative', background: '#fbf8f1', borderRadius: 14, border: '2px solid rgba(60,45,20,0.12)', boxSizing: 'border-box'}}>
			<svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{position: 'absolute', inset: 0, overflow: 'visible'}}>
				{grid.map(v => <line key={'gx' + v} x1={X(v)} x2={X(v)} y1={Y(yRange[1])} y2={Y(yRange[0])} stroke="#e4dccd" strokeWidth={2} />)}
				{gy.map(v => <line key={'gy' + v} x1={X(range[0])} x2={X(range[1])} y1={Y(v)} y2={Y(v)} stroke="#e4dccd" strokeWidth={2} />)}
				<path d={`M${X(range[0])},${Y(0)} H${X(range[1]) + 16} M${X(0)},${Y(yRange[0])} V${Y(yRange[1]) - 10}`} stroke={INK} strokeWidth={4.5} fill="none" strokeLinecap="round" />
				<text x={X(range[1]) + 24} y={Y(0) + 10} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, fill: INK_SOFT}}>x</text>
				<text x={X(0) + 12} y={Y(yRange[1]) + 6} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, fill: INK_SOFT}}>y</text>
				{ticks.map(t => <g key={t.label}><line x1={X(t.value)} x2={X(t.value)} y1={Y(0) - 10} y2={Y(0) + 10} stroke={INK} strokeWidth={4} /><text x={X(t.value)} y={Y(0) + 46} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 34, fill: INK}}>{t.label}</text></g>)}
				<circle cx={X(mark)} cy={Y(0)} r={13} fill={INK} stroke="#fffdf8" strokeWidth={4} />
				<text x={X(mark) + 18} y={Y(0) - 22} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, fill: INK}} stroke="#fbf8f1" strokeWidth={8} paintOrder="stroke">{markLabel}</text>
			</svg>
			<div style={{position: 'absolute', right: 30, top: 22, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 50, color: VIOLET}}>tangent?</div>
			<div style={{position: 'absolute', right: 30, top: 84, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 50, color: TEAL}}>normal?</div>
		</div>
	);
};

// ---------- 9. attempt 1 ----------
const E2 = <>e<P>2x</P></>;
const Q1: React.FC<{u?: {x: number; exact: number}}> = ({u}) => (
	<div>Find the equations of the tangent and the normal to the curve y = {E2} at the point where {u ? <MarkSpan kind="underline" at={u.x}>x = ½</MarkSpan> : 'x = ½'}. Give your answers in {u ? <MarkSpan kind="underline" at={u.exact}>exact form</MarkSpan> : 'exact form'}.</div>
);
export const S09: React.FC = () => {
	const id = 'scene-09';
	return (
		<Attempt hold={hold(id)} pauseAt={cue(id, 'Pause here')} given={[<>y = {E2}</>, <>x = ½</>, <>exact form</>]}
			picture={<QTanNormal range={[-1.2, 2.3]} yRange={[-0.45, 1.6]} ticks={[{value: -1, label: '−1'}, {value: 1, label: '1'}, {value: 2, label: '2'}]} mark={0.5} markLabel="x = ½" />}>
			<Q1 />
		</Attempt>
	);
};

// ---------- 10. feedback 1 ----------
const FG = {x: 1080, y: 236, w: 760, h: 620};
export const S10: React.FC = () => {
	const id = 'scene-10';
	const f = useCurrentFrame();
	const power = cue(id, 'e to the power'), e1 = cue(id, 'a half, e') + 18, grad = cue(id, 'The gradient is'), twoE = cue(id, 'two e to the two x'), half1 = cue(id, 'at x equals a half') + 28, tanIs = cue(id, 'So the tangent is'), half2 = cue(id, 'x minus a half') + 17;
	const nGrad = cue(id, "The normal's gradient"), half3 = cue(id, 'x minus a half', 2) + 21, isnt = cue(id, "The point isn't");
	const W = {x: [-0.5, 1] as [number, number], y: [-0.5, 4] as [number, number]};
	const M = gmap(FG.x, FG.y, FG.w, FG.h, W);
	return (
		<>
			<TaskStrip text="Check your working" at={2} />
			<RolesOn on={f >= 10}>
				<QuestionCard at={-40} shrinkAt={-30} w={1500} y={196} size={50}><Q1 u={{x: e1, exact: half3 + 6}} /></QuestionCard>
			</RolesOn>
			<GivensStrip x={1080} y={152} size={36} items={[{content: <>y = {E2}</>, at: 6}, {content: 'x = ½', at: 12}, {content: 'exact form', at: 18}]} />
			<Line x={96} y={340} at={power} size={48}>y = e<P>2 × ½</P> = e<P>1</P> = e<span style={{opacity: prog(f, e1, 12)}}>   →  point (½, e)</span></Line>
			<Line x={96} y={420} at={twoE} size={48}>dy/dx = <V>2e<P>2x</P></V><span style={{opacity: prog(f, half1, 12)}}>;  x = ½:  <V>2e</V></span><span style={{opacity: prog(f, half1 + 10, 12), fontSize: 32, fontWeight: 700, color: INK_SOFT}}>  ≈ 5.437</span></Line>
			<Line x={96} y={480} at={grad + 6} size={30} color={INK_SOFT} weight={700}>chain rule: the inside 2x gives the 2</Line>
			<AnswerBox x={96} y={540} at={half2} size={48}><span>tangent:  y − e = <V>2e</V>(x − ½)<span style={{opacity: prog(f, half2 + 14, 12), fontSize: 34, fontWeight: 700, color: INK_SOFT}}>   so y = 2ex</span></span></AnswerBox>
			<Line x={96} y={636} at={nGrad} size={44}>m<sub style={{fontSize: 28}}>N</sub> = <Tl>−1/(2e)</Tl><span style={{fontSize: 32, fontWeight: 700, color: INK_SOFT}}>  ≈ −0.184</span></Line>
			<AnswerBox x={96} y={700} at={half3} size={48}><span>normal:  y − e = <Tl>−(1/(2e))</Tl>(x − ½)</span></AnswerBox>
			<MistakeCard x={96} y={800} w={900} at={isnt} size={42} wrong={<>point (½, 2e)</>} caption="2e is f′(½), not f(½)" />
			<FunctionSimulator x={FG.x} y={FG.y} width={FG.w} height={FG.h} window={W} family={E2X} timeline={tl([[0, 0.5]])} color={INK} at={-30}
				xTicks={[{value: 0.5, label: '½'}, {value: 1, label: '1'}]} yTicks={[1, 2, 3, 4]} xLabel="x" yLabel="y"
				tangent={{at: half2, halfLength: 470}}
				overlay={() => <FrameSvg>
					<Ring p={M.pt(0.5, E)} r={26} o={prog(f, e1, 12)} />
					<circle cx={M.pt(0.5, E)[0]} cy={M.pt(0.5, E)[1]} r={9} fill={INK} opacity={prog(f, e1, 12)} />
					<Ring p={M.pt(0, 0)} r={22} o={prog(f, half2 + 14, 12)} color={VIOLET} />
				</FrameSvg>} />
			<CurveLabel x={M.pt(-0.45, 0)[0]} y={M.pt(0, 3.75)[1]} at={-30} size={40} color={INK}>y = {E2}</CurveLabel>
			<CurveLabel x={M.pt(0.5, E)[0] + 34} y={M.pt(0.5, E)[1] + 4} at={e1} size={34} color={INK}>(½, e)</CurveLabel>
			<CurveLabel x={M.pt(0, 0)[0] + 30} y={M.pt(0, 0)[1] - 60} at={half2 + 14} size={30} color={VIOLET}>through (0, 0)</CurveLabel>
		</>
	);
};

// ---------- 11. attempt 2 ----------
const Q2: React.FC<{u?: {x: number; exact: number}}> = ({u}) => (
	<div>Find the equations of the tangent and the normal to the curve y = sin x + cos x at the point where {u ? <MarkSpan kind="underline" at={u.x}>x = π/4</MarkSpan> : 'x = π/4'}. Give your answers in {u ? <MarkSpan kind="underline" at={u.exact}>exact form</MarkSpan> : 'exact form'}.</div>
);
export const S11: React.FC = () => {
	const id = 'scene-11';
	return (
		<Attempt hold={hold(id)} pauseAt={cue(id, 'Pause here')} heading="Last one" given={[<>y = sin x + cos x</>, <>x = π/4</>, <>exact form</>]}
			picture={<QTanNormal range={[-0.8, 3.5]} yRange={[-0.45, 1.6]} ticks={[{value: PI / 2, label: 'π/2'}, {value: PI, label: 'π'}]} mark={PI / 4} markLabel="x = π/4" />}>
			<Q2 />
		</Attempt>
	);
};

// ---------- 12. feedback 2 ----------
export const S12: React.FC = () => {
	const id = 'scene-12';
	const f = useCurrentFrame();
	const sinCos = cue(id, 'sin and cos'), two = cue(id, 'is root two') + 12, grad = cue(id, 'The gradient is'), zero = cue(id, 'zero there'), horiz = cue(id, 'tangent is horizontal'), vert = cue(id, 'The normal is vertical'), four = cue(id, 'x equals pi over four') + 31, not = cue(id, 'Not x equals');
	const W = {x: [-0.5, 2.5] as [number, number], y: [-0.6, 1.8] as [number, number]};
	const G = {x: 1080, y: 236, w: 760, h: 627};
	const M = gmap(G.x, G.y, G.w, G.h, W);
	const Pp = M.pt(PI / 4, Math.SQRT2);
	return (
		<>
			<TaskStrip text="Check your working" at={2} />
			<RolesOn on={f >= 10}>
				<QuestionCard at={-40} shrinkAt={-30} w={1500} y={196} size={50} heading="Last one"><Q2 u={{x: 15, exact: four + 6}} /></QuestionCard>
			</RolesOn>
			<GivensStrip x={1080} y={152} size={36} items={[{content: 'y = sin x + cos x', at: 6}, {content: 'x = π/4', at: 12}, {content: 'exact form', at: 18}]} />
			<Line x={96} y={340} at={sinCos} size={48}>y = √2/2 + √2/2<span style={{opacity: prog(f, two, 12)}}> = √2</span><span style={{opacity: prog(f, two + 10, 12), fontSize: 32, fontWeight: 700, color: INK_SOFT}}>  ≈ 1.414</span></Line>
			<Line x={96} y={420} at={grad + 20} size={48}>dy/dx = cos x − sin x</Line>
			<Line x={96} y={500} at={zero - 12} size={48}>x = π/4:  √2/2 − √2/2 = <V>0</V></Line>
			<Line x={96} y={590} at={horiz} out={four} size={48}>tangent:  y = √2  <span style={{fontSize: 32, fontWeight: 700, color: INK_SOFT}}>horizontal</span></Line>
			<Line x={96} y={656} at={vert} out={four} size={48}>normal:   x = π/4  <span style={{fontSize: 32, fontWeight: 700, color: INK_SOFT}}>vertical</span></Line>
			<AnswerStack x={70} y={580} at={four} size={48} rows={[{content: <>tangent:  <V>y = √2</V></>, at: four}, {content: <>normal:   <Tl>x = π/4</Tl></>, at: four}]} />
			<MistakeCard x={96} y={760} w={940} at={not} size={44} wrong={<>normal x = √2</>} caption="vertical line: x = the point's x-coordinate" />
			<FunctionSimulator x={G.x} y={G.y} width={G.w} height={G.h} window={W} family={SPC} timeline={tl([[0, PI / 4]])} color={INK} at={-30}
				xTicks={piTicks(0, 0.75, 4)} yTicks={[{value: 1, label: '1'}]} xLabel="x (radians)" yLabel="y"
				tangent={{at: horiz, halfLength: 800}} normal={{at: vert, halfLength: 800}}
				overlay={() => <FrameSvg>
					<Ring p={Pp} r={26} o={prog(f, two, 12)} />
					<circle cx={Pp[0]} cy={Pp[1]} r={9} fill={INK} opacity={prog(f, two, 12)} />
				</FrameSvg>} />
			<CurveLabel x={M.pt(1.45, 0)[0]} y={M.pt(0, 1.55)[1]} at={-30} size={38} color={INK}>y = sin x + cos x</CurveLabel>
			<CurveLabel x={Pp[0] + 30} y={Pp[1] + 12} at={two} size={34} color={INK}>(π/4, √2)</CurveLabel>
			<CurveLabel x={Pp[0] + 14} y={M.box.top + M.box.height - 56} at={vert + 10} size={34} color={TEAL}>x = π/4</CurveLabel>
			<CurveLabel x={M.pt(1.6, 0)[0]} y={Pp[1] - 52} at={horiz + 10} size={34} color={VIOLET}>y = √2</CurveLabel>
		</>
	);
};
