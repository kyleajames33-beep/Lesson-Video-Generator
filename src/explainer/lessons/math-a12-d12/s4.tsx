// Scenes 9 to 12: attempt 1 (gradient of cosec x at π/6) and its brief feedback, attempt 2 (cosec x + cot x and
// where its derivative exists) and its brief feedback.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_DISPLAY, INK, INK_SOFT, prog} from '../../kit';
import {Card, CardTitle, FrameSvg, FunctionSimulator, GivensStrip, HandTag, MarkSpan, MistakeCard, QuestionCard, RolesOn, TaskStrip} from '../../math/studio';
import {cue, hold} from './common';
import {AMB, AmberStrip, PreRing, COSEC, COT, CurveLabel, GREY, PI, QRadAxis, Ring, S_ASYM, TanLine, VIOLET, WholeRows, gmap, tl} from './parts';

const pi6Ticks = [{value: 0, label: '0'}, {value: PI / 6, label: 'π/6'}, {value: PI / 3, label: 'π/3'}, {value: PI / 2, label: 'π/2'}, {value: 2 * PI / 3, label: '2π/3'}, {value: 5 * PI / 6, label: '5π/6'}, {value: PI, label: 'π'}];
const halfTicks = [{value: -PI, label: '−π'}, {value: -PI / 2, label: '−π/2'}, {value: 0, label: '0'}, {value: PI / 2, label: 'π/2'}, {value: PI, label: 'π'}, {value: 3 * PI / 2, label: '3π/2'}, {value: 2 * PI, label: '2π'}];

/** The d02 to d09 attempt layout, sized for these short questions: question card, a 46 px Given card and a large answer-free picture; full ring from "Pause here to answer." */
const Attempt: React.FC<{hold: {startFrame: number; endFrame: number}; pauseAt: number; picture: React.ReactNode; given: React.ReactNode[]; heading?: string; children: React.ReactNode}> = ({hold, pauseAt, picture, given, heading, children}) => (
	<RolesOn on={false}>
		<Card x={96} y={500} w={640} at={6} pad="16px 28px 18px">
			<CardTitle>Given</CardTitle>
			{given.map((g, i) => <div key={i} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 46, color: INK, marginTop: 6, whiteSpace: 'pre'}}>{g}</div>)}
		</Card>
		<Enter at={6} style={{position: 'absolute', left: 770, top: 486}}>{picture}</Enter>
		<QuestionCard at={0} size={60} w={1500} y={196} hold={hold} pauseAt={pauseAt} heading={heading}>{children}</QuestionCard>
		<PreRing from={pauseAt} start={hold.startFrame} />
	</RolesOn>
);

// ---------- 9. attempt 1 ----------
const Q1: React.FC<{u?: {x: number; exact: number}}> = ({u}) => (
	<div>Find the {u ? <MarkSpan kind="underline" at={u.exact}>exact</MarkSpan> : 'exact'} gradient of the curve y = cosec x at the point where {u ? <MarkSpan kind="underline" at={u.x}>x = π/6</MarkSpan> : 'x = π/6'}.</div>
);
export const S09: React.FC = () => {
	const id = 'scene-09';
	return (
		<Attempt hold={hold(id)} pauseAt={cue(id, 'Pause here')} given={[<>y = cosec x</>, <>x = π/6</>, <>exact gradient</>]}
			picture={<QRadAxis w={820} h={430} range={[-0.25, PI + 0.3]} ticks={pi6Ticks} mark={PI / 6} tag="gradient here?" />}>
			<Q1 />
		</Attempt>
	);
};

// ---------- 10. feedback 1 ----------
const FG = {x: 1080, y: 236, w: 760, h: 560};
const WF = {x: [-0.3, 3.5] as [number, number], y: [-1, 6] as [number, number]};
export const S10: React.FC = () => {
	const id = 'scene-10';
	const f = useCurrentFrame();
	const dydx = cue(id, 'is minus cosec'), pi6 = cue(id, 'At pi over six'), two = cue(id, 'is two'), three1 = cue(id, 'root three', 1), three2 = cue(id, 'root three', 2), between = cue(id, 'Between zero'), twoover = cue(id, 'Two over root three');
	const M = gmap(FG.x, FG.y, FG.w, FG.h, WF);
	const fam = {...COSEC, domain: [{from: 0, to: PI}]};
	const p = M.pt(PI / 6, 2);
	return (
		<>
			<TaskStrip text="Check your working" at={2} />
			<RolesOn on={f >= 10}>
				<QuestionCard at={-40} shrinkAt={-30} w={1500} y={196} size={60}><Q1 u={{x: pi6, exact: three2 + 10}} /></QuestionCard>
			</RolesOn>
			<GivensStrip x={1080} y={152} size={36} items={[{content: 'y = cosec x', at: 6}, {content: 'x = π/6', at: 12}, {content: 'exact', at: 18}]} />
			<WholeRows x={96} y={300} w={960} size={50} oldSize={50} gap={10} rows={[
				{left: 'dy/dx', right: <>−cosec x cot x</>, at: dydx, keep: true},
				{left: 'x = π/6:', relation: ' ', right: <>sin(π/6) = ½,  so cosec(π/6) = 2</>, at: two - 30, keep: true},
				{left: '', relation: ' ', right: <>cot(π/6) = (√3/2) ÷ ½ = <span style={{background: prog(f, three1, 8) > 0 && f < three1 + 70 ? 'rgba(231,224,242,0.95)' : undefined, borderRadius: 10}}>√3</span></>, at: three1 - 20, keep: true},
				{left: 'dy/dx', right: <>−2 × √3 = −2√3</>, at: three2 - 6, answer: true},
			]} />
			<AmberStrip x={740} y={306} at={dydx + 20} size={34}>sin x ≠ 0</AmberStrip>
			<div style={{position: 'absolute', left: 660, top: 600, opacity: prog(f, three2 + 20, 12), fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 36, color: INK_SOFT}}>≈ −3.464</div>
			<FunctionSimulator x={FG.x} y={FG.y} width={FG.w} height={FG.h} window={WF} family={fam} timeline={tl([[0, PI / 6]])} color={INK} asymptotes={S_ASYM} at={-30}
				xTicks={[{value: PI / 6, label: 'π/6'}, {value: PI / 2, label: 'π/2'}, {value: PI, label: 'π'}]} yTicks={[2, 4]} xLabel="x" yLabel="y"
				overlay={() => <FrameSvg>
					<circle cx={p[0]} cy={p[1]} r={13} fill={INK} stroke="#fffdf8" strokeWidth={4} opacity={prog(f, pi6, 12)} />
					<TanLine M={M} X={PI / 6} Y={2} m={-2 * Math.sqrt(3)} half={130} opacity={prog(f, between, 12)} />
					<Ring p={p} r={30} o={prog(f, three2, 12)} color={VIOLET} />
				</FrameSvg>} />
			<CurveLabel x={M.pt(PI / 2, 0)[0] - 100} y={M.pt(0, 5.4)[1]} at={-30} size={38} color={INK}>y = cosec x</CurveLabel>
			<HandTag x={p[0] + 40} y={p[1] + 20} text="falling: negative slope" at={between + 20} size={36} color={VIOLET} />
			<CurveLabel x={p[0] + 26} y={p[1] - 64} at={pi6 + 6} size={32} color={INK}>(π/6, 2)</CurveLabel>
			<MistakeCard x={96} y={712} w={960} at={twoover} size={44} wrong={<>1/cos(π/6) = 2/√3</>} caption="flipped the derivative" />
		</>
	);
};

// ---------- 11. attempt 2 ----------
const Q2: React.FC<{u?: {vals: number}}> = ({u}) => (
	<>
		<div>Differentiate y = cosec x + cot x.</div>
		<div style={{marginTop: 6}}>State the {u ? <MarkSpan kind="underline" at={u.vals}>values of x</MarkSpan> : 'values of x'} for which dy/dx exists.</div>
	</>
);
export const S11: React.FC = () => {
	const id = 'scene-11';
	return (
		<Attempt hold={hold(id)} pauseAt={cue(id, 'Pause here')} heading="Last one" given={[<>y = cosec x + cot x</>, <>find dy/dx</>, <>where dy/dx exists</>]}
			picture={<QRadAxis w={820} h={430} range={[-PI - 0.35, 2 * PI + 0.35]} ticks={halfTicks} tag="where does dy/dx exist?" />}>
			<Q2 />
		</Attempt>
	);
};

// ---------- 12. feedback 2 ----------
export const S12: React.FC = () => {
	const id = 'scene-12';
	const f = useCurrentFrame();
	const pis = cue(id, 'number of pis'), cosecg = cue(id, 'Cosec x gives'), cotg = cue(id, 'cot x gives'), so = cue(id, 'So d y by d x'), kpi = cue(id, 'k pi'), plus = cue(id, 'A plus on'), falls = cue(id, 'always falls');
	const G = {x: FG.x, y: FG.y, w: FG.w, h: 660};
	const M = gmap(G.x, G.y, G.w, G.h, {x: [-0.3, 3.5], y: [-4, 4]});
	const fam = {...COT, domain: [{from: 0, to: PI}]};
	const [ax, ay] = M.pt(1.0, 3.0), [bx, by] = M.pt(2.75, -2.6);
	return (
		<>
			<TaskStrip text="Check your working" at={2} />
			<RolesOn on={f >= 10}>
				<QuestionCard at={-40} shrinkAt={-30} w={1500} y={196} size={60} heading="Last one"><Q2 u={{vals: pis}} /></QuestionCard>
			</RolesOn>
			<GivensStrip x={1080} y={152} size={34} items={[{content: 'y = cosec x + cot x', at: 6}, {content: 'where dy/dx exists', at: 12}]} />
			<AmberStrip x={96} y={292} at={pis} size={40}>sin x ≠ 0:  x ≠ kπ, k an integer</AmberStrip>
			<WholeRows x={96} y={392} w={960} size={50} oldSize={50} gap={18} rows={[
				{left: '(cosec x)′', right: <>−cosec x cot x</>, at: cosecg + 10, keep: true},
				{left: '(cot x)′', right: <>−cosec²x</>, at: cotg + 10, keep: true},
				{left: 'dy/dx', right: <>−cosec x cot x − cosec²x</>, at: so + 10, answer: true},
			]} />
			<div style={{position: 'absolute', left: 300, top: 668, opacity: prog(f, kpi, 12), fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 38, color: INK_SOFT}}>= −cosec x(cot x + cosec x),  x ≠ kπ</div>
			<MistakeCard x={96} y={748} w={960} at={plus} size={44} wrong={<>−cosec x cot x + cosec²x</>} caption="(cot x)′ = −cosec²x" />
			<FunctionSimulator x={G.x} y={G.y} width={G.w} height={G.h} window={{x: [-0.3, 3.5], y: [-4, 4]}} family={fam} timeline={tl([[0, PI / 2]])} color={INK} asymptotes={S_ASYM} at={-30}
				xTicks={[{value: PI / 2, label: 'π/2'}, {value: PI, label: 'π'}]} yTicks={[-2, 2]} xLabel="x" yLabel="y"
				overlay={() => <FrameSvg>
					{S_ASYM.map(a => <circle key={a} cx={M.pt(a, 0)[0]} cy={M.pt(a, 0)[1]} r={16} fill="#fffdf8" stroke={AMB} strokeWidth={5} opacity={prog(f, pis, 12)} />)}
					<g opacity={prog(f, falls - 40, 14)}>
						<path d={`M${ax + 60},${ay} L${bx + 60},${by}`} stroke={VIOLET} strokeWidth={6} fill="none" strokeLinecap="round" />
						<path d={`M${bx + 60 - 22},${by - 8} L${bx + 60},${by} L${bx + 60 + 4},${by - 24}`} stroke={VIOLET} strokeWidth={6} fill="none" strokeLinecap="round" strokeLinejoin="round" />
					</g>
				</FrameSvg>} />
			<CurveLabel x={M.pt(0.75, 0)[0]} y={M.pt(0, 3.7)[1]} at={-30} size={38} color={INK}>y = cot x</CurveLabel>
			<HandTag x={M.pt(1.9, 0)[0]} y={M.pt(0, 2.3)[1]} text="cot always falls" at={falls - 30} size={38} color={VIOLET} />
			<CurveLabel x={M.pt(PI, 0)[0] + 16} y={M.pt(0, -0.2)[1]} at={pis} size={30} color={GREY}>x ≠ π</CurveLabel>
		</>
	);
};
