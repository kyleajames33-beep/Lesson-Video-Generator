// Scenes 9 to 13: the framed memory card ("Meet, then match."), attempt 1 (continuous, not differentiable: a
// corner at (1, 2)) and its brief feedback, attempt 2 (e^(2x) joined by ax + b) and its brief feedback.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {CARD, CARD_SHADOW, Card, CardTitle, FrameSvg, FunctionSimulator, GivensStrip, HandTag, MarkSpan, MistakeCard, QuestionCard, RolesOn, TaskStrip, vis} from '../../math/studio';
import {AnswerStack} from '../math-a12-d14/parts';
import {cue, hold} from './common';
import {
	A1FAM, A2FAM, AMB, AMB_INK, Am, AnswerBox, BoardSprite, CORNER, CurveLabel, GREEN, GREY, JUMP, Line, MiniTrack, P, Ring, SMOOTH, TEAL, Tick, V, VIOLET, Band,
	gmap, stubLine,
} from './parts';
import type {TMap, Win} from './parts';

const RED_SOFT = '#c9746c';

// ---------- 9. memory aid ----------
export const AID_MAIN = 'Meet, then match.';
const MT_WIN: Win = {x: [-0.5, 1.9], y: [-0.4, 3.0]};
/** The board badge: a straight plywood plank with the painted board riding it, about 400 px long. */
export const BoardBadge: React.FC<{w?: number}> = ({w = 420}) => {
	const h = w * 0.36;
	const M: TMap = {pt: (a, b) => [a * w, h * 0.62 - b * w], sx: w, sy: w};
	const flat = {...SMOOTH, pieces: [{from: -1, to: 2, f: () => 0, df: () => 0}]} as unknown as typeof SMOOTH;
	return (
		<svg width={w + 40} height={h} viewBox={`-20 0 ${w + 40} ${h}`} style={{display: 'block', overflow: 'visible'}}>
			<Band M={M} fam={flat} spec={{o: 1, ranges: [[-0.04, 1.04]], depth: 26}} />
			<line x1={-0.04 * w} x2={1.04 * w} y1={h * 0.62} y2={h * 0.62} stroke={INK} strokeWidth={5} />
			<BoardSprite p={[w / 2, h * 0.62]} deg={0} len={w * 0.94} />
		</svg>
	);
};
export const S09: React.FC = () => {
	const id = 'scene-09';
	const f = useCurrentFrame();
	const c = (p: string, n = 1) => cue(id, p, n);
	const mm = c('meet, then'), noStep = c('no step'), noKink = c('no kink'), alone = c('Meeting alone');
	const hl = (g: number) => (g > 0.001 ? `rgba(248,232,200,${0.9 * g})` : undefined);
	const lit = (a: number, b: number) => vis(f, a, b, 10);
	return (
		<>
			<TaskStrip text="The short version" at={4} size={52} />
			<div style={{position: 'absolute', left: 120, top: 160, width: 1680, height: 790, boxSizing: 'border-box', background: CARD, border: `4px solid ${INK}`, borderRadius: 24, boxShadow: `inset 0 0 0 8px ${CARD}, inset 0 0 0 10.5px ${INK}, ${CARD_SHADOW}`}} />
			<div style={{position: 'absolute', left: 168, top: 182, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK_SOFT}}>Memory aid</div>
			<div style={{position: 'absolute', left: 168, top: 236, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 80, lineHeight: 1.05, color: INK, background: hl(lit(mm, noStep - 20)), borderRadius: 12}}>{AID_MAIN}</div>
			<div style={{position: 'absolute', left: 168, top: 352, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 46, color: INK, lineHeight: 1.4}}>
				<div style={{opacity: prog(f, c('pieces meet') - 6, 12)}}><span style={{background: hl(lit(noStep - 10, noKink - 30)), borderRadius: 10}}><Am>meet:</Am> no step  <span style={{color: INK_SOFT, fontSize: 38}}>(continuous)</span></span></div>
				<div style={{opacity: prog(f, c('gradients match') - 6, 12)}}><span style={{background: hl(lit(noKink - 10, alone - 10)), borderRadius: 10}}><V>match:</V> no kink  <span style={{color: INK_SOFT, fontSize: 38}}>(differentiable)</span></span></div>
			</div>
			<div style={{position: 'absolute', left: 1240, top: 210}}><BoardBadge w={440} /></div>
			<div style={{position: 'absolute', left: 1250, top: 380, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: VIOLET}}>smooth ride: no step, no kink</div>
			<div style={{position: 'absolute', left: 168, top: 500, display: 'flex', gap: 32}}>
				<div><MiniTrack w={500} h={300} win={MT_WIN} fam={JUMP} ranges={[[-0.8, 2.2]]} step={{x: 1, lo: 1, hi: 2}} dots={[{X: 1, Y: 1}, {X: 1, Y: 2, open: true}]} label="a step: they don't meet" glow={lit(noStep - 6, noKink - 20)} />
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, color: AMB_INK, marginTop: 6}}>not continuous</div></div>
				<div><MiniTrack w={500} h={300} win={MT_WIN} fam={CORNER} ranges={[[-0.8, 2.2]]} corner={[1, 1]} label="a kink: 2 then 1" glow={Math.max(lit(noKink - 6, alone - 20), lit(alone + 30, 600))} />
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, color: VIOLET, marginTop: 6}}>continuous, not differentiable</div></div>
				<div><MiniTrack w={500} h={300} win={MT_WIN} fam={SMOOTH} ranges={[[-0.8, 2.2]]} label="smooth join" />
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, color: GREEN, marginTop: 6}}>differentiable</div></div>
			</div>
			<div style={{position: 'absolute', left: 168, top: 878, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52, color: INK, opacity: prog(f, alone, 12)}}>Meeting alone isn't enough.</div>
		</>
	);
};

// ---------- attempt layout (d14: question card, Given card, large answer-free picture, full ring) ----------
const Attempt: React.FC<{hold: {startFrame: number; endFrame: number}; pauseAt: number; picture: React.ReactNode; given: React.ReactNode[]; heading?: string; top?: number; children: React.ReactNode}> = ({hold: h, pauseAt, picture, given, heading, top = 600, children}) => (
	<RolesOn on={false}>
		<Card x={96} y={top} w={640} at={6} pad="16px 28px 18px">
			<CardTitle>Given</CardTitle>
			{given.map((g, i) => <div key={i} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 42, color: INK, marginTop: 4, whiteSpace: 'pre'}}>{g}</div>)}
		</Card>
		<div style={{position: 'absolute', left: 770, top: top}}>{picture}</div>
		<QuestionCard at={0} size={44} w={1640} y={190} hold={{...h, ringFrom: pauseAt}} pauseAt={pauseAt} heading={heading}>{children}</QuestionCard>
	</RolesOn>
);
/** Answer-free picture: axes with the join's x-value dashed and tagged, and the two questions. No curve. */
const QJoin: React.FC<{w?: number; h?: number; range: [number, number]; yRange: [number, number]; join: number; tags: [string, string]; ticks: number[]}> = ({w = 820, h = 340, range, yRange, join, tags, ticks}) => {
	const sx = (w - 330) / (range[1] - range[0]), sy = (h - 64) / (yRange[1] - yRange[0]);
	const ox = 30, oy = 16;
	const X = (v: number) => ox + (v - range[0]) * sx, Y = (v: number) => oy + (yRange[1] - v) * sy;
	return (
		<div style={{width: w, height: h, position: 'relative', background: '#fbf8f1', borderRadius: 14, border: '2px solid rgba(60,45,20,0.12)', boxSizing: 'border-box'}}>
			<svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{position: 'absolute', inset: 0, overflow: 'visible'}}>
				<path d={`M${X(range[0])},${Y(0)} H${X(range[1]) + 16} M${X(0)},${Y(yRange[0])} V${Y(yRange[1]) - 6}`} stroke={INK} strokeWidth={4.5} fill="none" strokeLinecap="round" />
				<text x={X(range[1]) + 22} y={Y(0) + 10} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, fill: INK_SOFT}}>x</text>
				{ticks.map(t => <g key={t}><line x1={X(t)} x2={X(t)} y1={Y(0) - 10} y2={Y(0) + 10} stroke={INK} strokeWidth={4} /><text x={X(t) + (t === 0 ? -22 : 0)} y={Y(0) + 42} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, fill: INK}}>{t}</text></g>)}
				<line x1={X(join)} x2={X(join)} y1={Y(yRange[1])} y2={Y(yRange[0])} stroke={AMB} strokeWidth={5} strokeDasharray="12 9" />
				<text x={X(join) + 14} y={Y(yRange[1]) + 34} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, fill: AMB_INK}}>join</text>
			</svg>
			<div style={{position: 'absolute', right: 26, top: 40, textAlign: 'right', fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46, lineHeight: 1.25, color: INK}}>
				<div>{tags[0]}</div><div>{tags[1]}</div>
			</div>
		</div>
	);
};

// ---------- 10. attempt 1 ----------
const Q1: React.FC<{u?: {own: number; cont: number; diff: number}}> = ({u}) => (
	<div>
		<div>The function g is defined by g(x) = 3 − x² for {u ? <MarkSpan kind="underline" at={u.own}>x ≤ 1</MarkSpan> : 'x ≤ 1'} and g(x) = x + 1 for x &gt; 1.</div>
		<div>(a) Determine whether g is {u ? <MarkSpan kind="underline" at={u.cont}>continuous</MarkSpan> : 'continuous'} at x = 1.</div>
		<div>(b) Determine whether g is {u ? <MarkSpan kind="underline" at={u.diff}>differentiable</MarkSpan> : 'differentiable'} at x = 1.  Justify your answers.</div>
	</div>
);
export const S10: React.FC = () => {
	const id = 'scene-10';
	return (
		<Attempt hold={hold(id)} pauseAt={cue(id, 'Pause here')} top={500} given={['g(x) = 3 − x²,  x ≤ 1', 'g(x) = x + 1,  x > 1', 'join: x = 1']}
			picture={<QJoin range={[-1, 2.5]} yRange={[-0.6, 3.6]} join={1} tags={['continuous?', 'differentiable?']} ticks={[-1, 1, 2]} />}>
			<Q1 />
		</Attempt>
	);
};

// ---------- 11. feedback 1 ----------
const FG = {x: 1080, y: 330, w: 790, h: 600};
export const S11: React.FC = () => {
	const id = 'scene-11';
	const f = useCurrentFrame();
	const c = (p: string, n = 1) => cue(id, p, n);
	const belongs = c('belongs'), gOne = c('so g of one'), two1 = c('which is two') + 8, second = c('The second piece'), two2 = c('also two') + 10, meet = c('They meet'), cont = c('continuous.'), grads = c('The gradients are'), mtwo = c('which is minus two') + 10, one = c('and one.'), isnt = c("Minus two isn't"), corner = c("There's a corner"), cornerPt = c('one, two') + 12, being = c('Being continuous');
	const W: Win = {x: [-1, 2.5], y: [-1, 3.5]};
	const M = gmap(FG.x, FG.y, FG.w, FG.h, W);
	const Pc = M.pt(1, 2);
	const stubO = prog(f, isnt, 14);
	return (
		<>
			<TaskStrip text="Check your working" at={2} />
			<RolesOn on={f >= 10}>
				<QuestionCard at={-40} shrinkAt={-30} w={1500} y={196} size={44}><Q1 u={{own: belongs, cont: meet, diff: isnt}} /></QuestionCard>
			</RolesOn>
			<GivensStrip x={1180} y={166} size={34} maxW={700} items={[{content: 'g = 3 − x², x ≤ 1', at: 6}, {content: 'g = x + 1, x > 1', at: 12}, {content: 'join x = 1', at: 18}]} />
			<Line x={96} y={392} at={gOne} size={46}>g(1) = 3 − 1² = <span style={{opacity: prog(f, two1, 10)}}>2</span><span style={{opacity: prog(f, second, 12)}}>;   <Am>right piece → 1 + 1 = 2</Am></span></Line>
			<Line x={96} y={458} at={meet} size={46}><Am>they meet:</Am>  continuous at x = 1 <Tick size={40} o={prog(f, cont, 10)} /></Line>
			<Line x={96} y={532} at={grads} size={46}>gradients:  left <V>−2x = −2</V><span style={{opacity: prog(f, one, 10)}}>,  right <V>1</V></span></Line>
			<Line x={96} y={598} at={isnt} size={46}><V>−2 ≠ 1</V>:  not differentiable at x = 1</Line>
			<AnswerStack x={70} y={672} at={corner} size={44} rows={[{content: '(a) continuous', at: corner}, {content: '(b) not differentiable: a corner at (1, 2)', at: cornerPt}]} />
			<MistakeCard x={96} y={824} w={880} at={being} size={40} wrong={<>continuous, so differentiable</>} caption="a corner is continuous" />
			<FunctionSimulator x={FG.x} y={FG.y} width={FG.w} height={FG.h} window={W} family={A1FAM} timeline={[{frame: 0, x: 1}]} color={INK} at={-30}
				xTicks={[-1, 1, 2]} yTicks={[1, 2, 3]} xLabel="x" yLabel="y"
				overlay={() => <FrameSvg>
					<g opacity={stubO}>
						<line {...stubLine(M, 1, 2, -2, -1, 150)} stroke={VIOLET} strokeWidth={8} strokeLinecap="round" />
						<line {...stubLine(M, 1, 2, 1, 1, 150)} stroke={VIOLET} strokeWidth={8} strokeLinecap="round" />
					</g>
					<Ring p={Pc} r={28} o={prog(f, cornerPt, 12)} />
					<circle cx={Pc[0]} cy={Pc[1]} r={9} fill={INK} opacity={prog(f, two2, 12)} />
				</FrameSvg>} />
			<CurveLabel x={M.pt(-0.95, 0)[0]} y={M.pt(0, 3.4)[1]} at={-30} size={38} color={INK}>y = g(x)</CurveLabel>
			<CurveLabel x={Pc[0] + 30} y={Pc[1] + 18} at={two2} size={36} color={INK}>(1, 2)</CurveLabel>
			<CurveLabel x={Pc[0] - 250} y={Pc[1] + 60} at={isnt + 6} size={34} color={VIOLET}>gradient −2</CurveLabel>
			<CurveLabel x={Pc[0] + 110} y={Pc[1] - 110} at={isnt + 12} size={34} color={VIOLET}>gradient 1</CurveLabel>
			<HandTag x={M.pt(1.25, 0)[0]} y={M.pt(0, -0.55)[1]} text="a corner at (1, 2)" at={cornerPt} size={40} color={INK} />
		</>
	);
};

// ---------- 12. attempt 2 ----------
const E2 = <>e<P>2x</P></>;
const Q2: React.FC<{u?: {diff: number}}> = ({u}) => (
	<div>
		<div>The function f is defined by f(x) = {E2} for x ≤ 0 and f(x) = ax + b for x &gt; 0, where a and b are constants.</div>
		<div>Find the values of a and b for which f is {u ? <MarkSpan kind="underline" at={u.diff}>differentiable</MarkSpan> : 'differentiable'} at x = 0.</div>
	</div>
);
export const S12: React.FC = () => {
	const id = 'scene-12';
	return (
		<Attempt hold={hold(id)} pauseAt={cue(id, 'Pause here')} heading="Last one" top={482} given={[<>f(x) = {E2},  x ≤ 0</>, <>f(x) = ax + b,  x &gt; 0</>, <>find a and b</>]}
			picture={<QJoin w={820} h={370} range={[-1.5, 1.5]} yRange={[-0.5, 3.6]} join={0} tags={['a?', 'b?']} ticks={[-1, 1]} />}>
			<Q2 />
		</Attempt>
	);
};

// ---------- 13. feedback 2 ----------
export const S13: React.FC = () => {
	const id = 'scene-13';
	const f = useCurrentFrame();
	const c = (p: string, n = 1) => cue(id, p, n);
	const match = c('Match the'), deriv = c('The derivative'), twoAt = c('which is two') + 8, a2 = c('So a equals'), meet = c('Now meet'), e0 = c('e to the zero'), lineG = c('the line gives'), b1 = c('so b equals'), lineIs = c('The line is'), notB = c('Not b equals'), miss = c('miss by one'), jump = c('jump');
	const W: Win = {x: [-1.5, 1.5], y: [-0.5, 4]};
	const M = gmap(FG.x, FG.y, FG.w, FG.h, W);
	const P0 = M.pt(0, 1), O0 = M.pt(0, 0);
	return (
		<>
			<TaskStrip text="Check your working" at={2} />
			<RolesOn on={f >= 10}>
				<QuestionCard at={-40} shrinkAt={-30} w={1500} y={196} size={44} heading="Last one"><Q2 u={{diff: match}} /></QuestionCard>
			</RolesOn>
			<GivensStrip x={1180} y={166} size={34} maxW={700} items={[{content: <>{E2}, x ≤ 0</>, at: 6}, {content: 'ax + b, x > 0', at: 12}, {content: 'join x = 0', at: 18}]} />
			<Line x={96} y={360} at={deriv} size={46}><V>match:</V>  ({E2})′ = 2{E2}<span style={{opacity: prog(f, twoAt, 10)}}> = <V>2</V> at x = 0</span></Line>
			<Line x={96} y={440} at={a2 - 20} size={46}>right gradient = a,  so <V>a = 2</V></Line>
			<Line x={96} y={520} at={meet} size={46}><Am>meet:</Am>  e<P>0</P> = 1<span style={{opacity: prog(f, lineG, 10)}}>;   a(0) + b = b</span></Line>
			<Line x={96} y={600} at={b1} size={46}>so <Am>b = 1</Am></Line>
			<AnswerBox x={96} y={680} at={lineIs} size={48}><span>a = 2, b = 1:  y = 2x + 1 for x &gt; 0</span></AnswerBox>
			<MistakeCard x={96} y={790} w={880} at={notB} size={42} wrong={<>a = 2, b = 0</>} caption="the pieces miss by 1: a jump" />
			<FunctionSimulator x={FG.x} y={FG.y} width={FG.w} height={FG.h} window={W} family={A2FAM} timeline={[{frame: 0, x: 0}]} color={INK} at={-30}
				xTicks={[-1, 1]} yTicks={[1, 2, 3]} xLabel="x" yLabel="y"
				curves={[{fn: X => 2 * X, domain: [0.001, 1.5], at: notB + 10, out: jump + 40, color: RED_SOFT, dash: '12 10', width: 5}]}
				overlay={() => <FrameSvg>
					<line {...stubLine(M, 0, 1, 2, 0, 230)} stroke={VIOLET} strokeWidth={7} strokeLinecap="round" opacity={prog(f, lineIs, 14)} />
					<Ring p={P0} r={26} o={prog(f, e0, 12)} />
					<circle cx={P0[0]} cy={P0[1]} r={9} fill={INK} opacity={prog(f, e0, 12)} />
					<g opacity={vis(f, notB + 10, jump + 40, 12)}>
						<circle cx={O0[0]} cy={O0[1]} r={11} fill="#fffdf8" stroke={GREY} strokeWidth={4} />
						<line x1={O0[0]} y1={O0[1] - 14} x2={P0[0]} y2={P0[1] + 14} stroke={AMB} strokeWidth={5} strokeDasharray="10 8" />
					</g>
				</FrameSvg>} />
			<CurveLabel x={M.pt(-1.45, 0)[0]} y={M.pt(0, 3.9)[1]} at={-30} size={38} color={INK}>y = f(x)</CurveLabel>
			<CurveLabel x={P0[0] - 140} y={P0[1] - 70} at={e0} size={36} color={INK}>(0, 1)</CurveLabel>
			<CurveLabel x={M.pt(0.55, 0)[0]} y={M.pt(0, 2.9)[1]} at={lineIs + 10} size={34} color={VIOLET}>one tangent, gradient 2</CurveLabel>
			<HandTag x={M.pt(0.2, 0)[0]} y={M.pt(0, 0.45)[1]} text="miss by 1" at={miss} size={40} color={AMB_INK} />
		</>
	);
};
