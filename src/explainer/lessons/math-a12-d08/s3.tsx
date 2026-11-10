// Scenes 8 to 12: the memory aid, attempt 1 and its feedback, attempt 2 and its feedback.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {
	CARD, CARD_SHADOW, FrameSvg, FunctionSimulator, GivensStrip, HandTag, MarkSpan, MistakeCard, QuestionCard, RolesOn, StudioDomainStrip, TaskStrip,
	vis,
} from '../../math/studio';
import type {FnFamily} from '../../math/studio';
import type {Range} from '../../math/graphs';
import {cue, hold} from './common';
import {
	Am, Asym, Attempt, BLUE, Bt, CurveLabel, DISPLAY, DashBadge, Dashboard, EX, Frac, GREEN, Givens, OpenMark, QuotPicture, RED, Sup, TEAL, TanLine, Tp, VIOLET, WholeRows, gmap,
} from './parts';

// ---------- 8. memory aid ----------
export const S08: React.FC = () => {
	const id = 'scene-08';
	const f = useCurrentFrame();
	const sq = cue(id, 'squared'), high = cue(id, 'High is the top'), ldh = cue(id, 'Low dee high means'), fpg = cue(id, 'same as f prime'), minus = cue(id, 'the minus is'), unlike = cue(id, 'And unlike'), neg = cue(id, 'negates the');
	const gT = vis(f, ldh, minus + 40), gB = vis(f, minus, minus + 80);
	const glow = (c: string, a: number) => (a > 0.001 ? `rgba(${c},${0.55 * a})` : undefined);
	return (
		<>
			<TaskStrip text="A way to remember it" at={2} />
			<div style={{position: 'absolute', left: 150, top: 168, width: 1620, height: 772, boxSizing: 'border-box', background: CARD, border: `4px solid ${INK}`, borderRadius: 24, boxShadow: `inset 0 0 0 8px ${CARD}, inset 0 0 0 10.5px ${INK}, ${CARD_SHADOW}`}} />
			<div style={{position: 'absolute', left: 198, top: 190}}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 48, color: INK_SOFT}}>Memory aid</span></div>
			<div style={{position: 'absolute', left: 198, top: 262, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 84, color: INK, whiteSpace: 'pre', lineHeight: 1.1}}>
				<span style={{borderRadius: 14, padding: '0 8px', background: glow('214,238,238', gT), color: gT > 0.3 ? TEAL : INK}}>lo d(hi)</span>
				<span style={{borderRadius: 14, padding: '0 8px', background: glow('220,234,247', gB), color: gB > 0.3 ? BLUE : INK}}> − hi d(lo)</span>
				<span>, over </span>
				<MarkSpan kind="underline" at={sq + 4} width={6}>lo²</MarkSpan>
			</div>
			<HandTag x={1030} y={300} text="whole bottom squared" at={sq + 10} size={42} color={INK} />
			<Enter at={-30} style={{position: 'absolute', left: 198, top: 410}}>
				<div style={{display: 'inline-flex', alignItems: 'center', gap: 24, ...DISPLAY(60, INK, 800)}}>
					<span>(f/g)′ =</span>
					<Frac n={<><Tp>f′g</Tp> <Bt>− fg′</Bt></>} d={<>g<Sup>2</Sup></>} />
					<Am>, g ≠ 0</Am>
				</div>
			</Enter>
			<HandTag x={1080} y={430} text="hi = top: f" at={high} size={40} role="b" />
			<HandTag x={1080} y={490} text="lo = bottom: g" at={high + 20} size={40} role="a" />
			<HandTag x={1080} y={556} text="lo d(hi) = g f′ = f′g" at={fpg} size={42} role="b" />
			{/* keyed lines with icons */}
			<Dashboard x={210} y={640} w={240} numbers={false} speed={100} at={-30} />
			<Enter at={-30} style={{position: 'absolute', left: 480, top: 650}}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 50, color: BLUE}}>time pulls the average down: the minus</span></Enter>
			<Enter at={-30} style={{position: 'absolute', left: 250, top: 748}}>
				<div style={{display: 'inline-flex', flexDirection: 'column', alignItems: 'center', ...DISPLAY(34, INK, 800), background: '#fbf8f1', border: '2px solid rgba(60,45,20,0.14)', borderRadius: 12, padding: '4px 22px'}}>
					<span>hi</span><span style={{alignSelf: 'stretch', height: 4, background: INK, borderRadius: 2}} /><span>lo</span>
				</div>
			</Enter>
			<Enter at={-30} style={{position: 'absolute', left: 480, top: 762}}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 50, color: INK}}>hi = top (numerator), lo = bottom (denominator)</span></Enter>
			{/* product against quotient */}
			<Enter at={unlike} style={{position: 'absolute', left: 210, top: 856}}>
				<div style={{display: 'inline-flex', gap: 30, alignItems: 'center'}}>
					<span style={{background: '#f1ebdf', border: '2px solid rgba(60,45,20,0.14)', borderRadius: 14, padding: '6px 18px', ...DISPLAY(36, INK, 700)}}>product: u′v + uv′ = uv′ + u′v <span style={{color: GREEN}}>✓</span></span>
					<span style={{opacity: prog(f, neg, 12), background: '#f7dcd8', border: `2px solid ${RED}`, borderRadius: 14, padding: '6px 18px', ...DISPLAY(36, INK, 700)}}>quotient: fg′ − f′g = −(f′g − fg′) <span style={{color: RED}}>✗</span></span>
				</div>
			</Enter>
		</>
	);
};

// ---------- 9. attempt 1 ----------
const Q1: React.FC<{u?: {x2: number; ex: number}}> = ({u}) => (
	<>
		<div>Differentiate y = <Tp>{EX}</Tp>/({u ? <MarkSpan kind="underline" at={u.x2} role="k"><Bt>x + 2</Bt></MarkSpan> : <Bt>x + 2</Bt>}).</div>
		<div style={{marginTop: 6}}>State any value of x that {u ? <MarkSpan kind="underline" at={u.ex} role="k">must be excluded</MarkSpan> : 'must be excluded'}.</div>
	</>
);
export const S09: React.FC = () => {
	const id = 'scene-09';
	const pause = cue(id, 'Pause here');
	return (
		<Attempt hold={hold(id)} pauseAt={pause} size={60} given={[<>y = {EX}/(x + 2)</>, <>find dy/dx</>, <>state any excluded x</>]}
			picture={<QuotPicture top={EX} bottom="x + 2" axis={{range: [-4.6, 2.6], ticks: [-4, -3, -2, -1, 0, 1, 2], tag: 'any x to exclude?'}} />}>
			<Q1 />
		</Attempt>
	);
};

// ---------- 10. feedback 1 ----------
const A1: FnFamily = {f: u => Math.exp(u) / (u + 2), df: u => (Math.exp(u) * (u + 1)) / ((u + 2) * (u + 2)), domain: [{from: -Infinity, to: -2}, {from: -2, to: Infinity}], excluded: [-2]};
export const S10: React.FC = () => {
	const id = 'scene-10';
	const f = useCurrentFrame();
	const two = cue(id, 'minus two', 1), fp = cue(id, 'f prime is'), gp = cue(id, 'g prime is one'), top = cue(id, 'So the top is'), one = cue(id, 'plus one', 1), so = cue(id, 'So d y'), start = cue(id, 'Start with');
	const G = {x: 1150, y: 300, w: 674, h: 470};
	const W = {x: [-5, 2.5] as Range, y: [-3, 3] as Range};
	const M = gmap(G.x, G.y, G.w, G.h, W);
	const den = <Bt>(x + 2)<Sup>2</Sup></Bt>;
	return (
		<>
			<TaskStrip text="Check your working" at={2} />
			<RolesOn on={f >= two - 10}>
				<QuestionCard at={-40} shrinkAt={-30} w={1460} y={200}><Q1 u={{x2: two - 6, ex: two + 6}} /></QuestionCard>
			</RolesOn>
			<GivensStrip x={1170} y={164} size={36} items={[{content: <>f = {EX}</>, role: 'b', at: 6}, {content: 'g = x + 2', role: 'a', at: 6}]} />
			<StudioDomainStrip conditions={['x ≠ −2']} path={[{frame: two, x: 96, y: 300}, {frame: so, x: 96, y: 300}, {frame: so + 24, x: 640, y: 740}]} at={two} size={44} />
			<Givens x={96} y={380} w={600} size={48} title="Parts" lines={[
				{content: <>f = {EX},  f′ = {EX}</>, at: fp, role: 'b'},
				{content: <>g = x + 2,  g′ = 1</>, at: gp, role: 'a'},
			]} />
			<WholeRows x={96} y={590} w={1030} size={52} oldSize={40} gap={12} rows={[
				{left: 'dy/dx', right: <Frac n={<><Tp>{EX}(x + 2)</Tp> <Bt>− {EX}</Bt></>} d={den} />, at: top},
				{left: 'dy/dx', right: <Frac n={<>{EX}(x + 1)</>} d={den} />, at: one, answer: true},
			]} />
			<FunctionSimulator at={-30} x={G.x} y={G.y} width={G.w} height={G.h} window={W} family={A1} timeline={[{frame: 0, x: 0}]} color={INK} curveWidth={6}
				xTicks={[-4, -3, -2, -1, 1, 2]} yTicks={[-2, 2]} xLabel="x" yLabel="y"
				overlay={() => <FrameSvg><Asym M={M} X={-2} o={prog(f, two, 12)} label="x = −2" /><OpenMark M={M} X={-2} o={prog(f, two, 12)} /></FrameSvg>} />
			<CurveLabel x={M.pt(-0.9, -1.1)[0]} y={M.pt(-0.9, -1.1)[1]} size={34}>y = {EX}/(x + 2)</CurveLabel>
			<MistakeCard x={1110} y={790} w={720} at={start + 6} size={34} wrong={<>−{EX}(x + 1)/(x + 2)²</>} caption="lo d(hi) comes first" />
		</>
	);
};

// ---------- 11. attempt 2 ----------
const Q2: React.FC<{u?: {xe: number}}> = ({u}) => (
	<div>Find the gradient of the curve y = (<Tp>ln x</Tp>)/<Bt>x</Bt> at the point where {u ? <MarkSpan kind="underline" at={u.xe}>x = e</MarkSpan> : 'x = e'}.</div>
);
export const S11: React.FC = () => {
	const id = 'scene-11';
	const pause = cue(id, 'Pause here');
	return (
		<Attempt hold={hold(id)} pauseAt={pause} heading="Last one" size={60} given={[<>y = (ln x)/x</>, <>x = e</>, <>find the gradient</>]}
			picture={<QuotPicture top="ln x" bottom="x" axis={{range: [-0.4, 4.4], ticks: [0, 1, 2, 3, 4], mark: {x: Math.E, label: 'e', tag: 'gradient here?'}}} />}>
			<Q2 />
		</Attempt>
	);
};

// ---------- 12. feedback 2 ----------
const A2: FnFamily = {f: u => Math.log(u) / u, df: u => (1 - Math.log(u)) / (u * u), domain: [{from: 0, to: Infinity}]};
export const S12: React.FC = () => {
	const id = 'scene-12';
	const f = useCurrentFrame();
	const pos = cue(id, 'For positive x'), g1 = cue(id, 'g prime is one'), top = cue(id, "so it's one minus"), zero = cue(id, 'the gradient is zero'), atE = cue(id, 'At x equals e'), div = cue(id, 'Dividing the derivatives'), flat = cue(id, 'is flat');
	const G = {x: 1150, y: 250, w: 674, h: 530};
	const W = {x: [-0.5, 6] as Range, y: [-2, 1] as Range};
	const M = gmap(G.x, G.y, G.w, G.h, W);
	const e = Math.E;
	return (
		<>
			<TaskStrip text="Check your working" at={2} />
			<RolesOn on={f >= pos}>
				<QuestionCard at={-40} shrinkAt={-30} w={1460} y={200} heading="Last one"><Q2 u={{xe: atE}} /></QuestionCard>
			</RolesOn>
			<GivensStrip x={1170} y={164} size={36} items={[{content: 'x = e', at: 6}]} />
			<StudioDomainStrip conditions={['x > 0  (ln x)']} path={[{frame: pos, x: 96, y: 300}]} at={pos} size={44} />
			<Givens x={96} y={380} w={560} size={46} title="Parts" lines={[
				{content: <>f = ln x,  f′ = <Frac n="1" d="x" /></>, at: pos + 20, role: 'b'},
				{content: <>g = x,  g′ = 1</>, at: g1, role: 'a'},
			]} />
			<WholeRows x={96} y={600} w={1030} size={64} oldSize={46} gap={14} rows={[
				{left: 'dy/dx', right: <><Frac n={<><Tp>(<Frac n="1" d="x" />) × x</Tp> <Bt>− ln x</Bt></>} d={<>x<Sup>2</Sup></>} /> = <Frac n="1 − ln x" d={<>x<Sup>2</Sup></>} /></>, at: top},
				{left: 'x = e:', relation: ' ', right: <>dy/dx = <Frac n="1 − ln e" d={<>e<Sup>2</Sup></>} /> = 0</>, at: zero, answer: true},
			]} />
			<FunctionSimulator at={-30} x={G.x} y={G.y} width={G.w} height={G.h} window={W} family={A2} timeline={[{frame: 0, x: e}]} color={INK} curveWidth={6}
				xTicks={[1, 2, {value: e, label: 'e'}, 4, 5, 6]} yTicks={[-2, -1, 1]} xLabel="x" yLabel="y"
				point={{at: zero}}
				overlay={() => <FrameSvg><Asym M={M} X={0} /><TanLine M={M} X={e} Y={1 / e} m={0} half={150} opacity={prog(f, zero + 10, 12)} width={6 + 3 * vis(f, flat, flat + 50)} /></FrameSvg>} />
			<CurveLabel x={M.pt(3.4, -0.6)[0]} y={M.pt(3.4, -0.6)[1]} size={38}>y = (ln x)/x</CurveLabel>
			<CurveLabel x={M.pt(e, 1 / e)[0] - 40} y={M.pt(e, 1 / e)[1] + 66} at={zero + 10} size={30} color={INK_SOFT}>height 1/e ≈ 0.368</CurveLabel>
			<HandTag x={M.pt(e, 0)[0] - 10} y={M.pt(0, 0.82)[1]} text="flat" at={zero + 20} size={42} color={VIOLET} />
			<MistakeCard x={1110} y={790} w={720} at={div + 6} size={34} wrong={<>(1/x) ÷ 1 = 1/e</>} caption="that's the height, not the slope" />
			<DashBadge x={720} y={386} w={250} at={flat - 30} tagSize={34} tags={[{text: 'like the trip:', color: INK}, {text: 'rates divided = average,', color: INK}, {text: 'so flat', color: VIOLET}]} />
		</>
	);
};

