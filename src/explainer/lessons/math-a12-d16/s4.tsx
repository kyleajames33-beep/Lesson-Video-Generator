// Scenes 9 to 12: attempt 1 (stationary points of x³ + 3x² − 9x and their nature) and its brief feedback, attempt 2
// (points of inflection of x⁵ − 5x⁴) and its brief feedback.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {Card, CardTitle, CupCapGlyph, FrameSvg, FunctionSimulator, GivensStrip, MarkSpan, MistakeCard, QuestionCard, RolesOn, SignStrip, TaskStrip, makePlot} from '../../math/studio';
import {AnswerStack} from '../math-a12-d14/parts';
import {cue, hold} from './common';
import {A1, A2, AnswerBox, Bl, CAPC, CUPC, CurveLabel, Diamond, GREEN, Line, Ol, RED, Ring, V} from './parts';

/** d14/d15 attempt layout: question card, Given card, answer-free axes with the demands as hand tags, full ring. */
const Attempt: React.FC<{hold: {startFrame: number; endFrame: number}; pauseAt: number; picture: React.ReactNode; given: React.ReactNode[]; heading?: string; top?: number; children: React.ReactNode}> = ({hold: h, pauseAt, picture, given, heading, top = 470, children}) => (
	<RolesOn on={false}>
		<Card x={96} y={top} w={640} at={6} pad="16px 28px 18px">
			<CardTitle>Given</CardTitle>
			{given.map((g, i) => <div key={i} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, color: INK, marginTop: 4, whiteSpace: 'pre'}}>{g}</div>)}
		</Card>
		<div style={{position: 'absolute', left: 770, top}}>{picture}</div>
		<QuestionCard at={0} size={46} w={1640} y={190} hold={{...h, ringFrom: pauseAt}} pauseAt={pauseAt} heading={heading}>{children}</QuestionCard>
	</RolesOn>
);
const QAxes: React.FC<{w?: number; h?: number; x0: number; x1: number; y0: number; y1: number; ticks: number[]; tags: string[]}> = ({w = 820, h = 360, x0, x1, y0, y1, ticks, tags}) => {
	const sx = (w - 330) / (x1 - x0), sy = (h - 60) / (y1 - y0);
	const X = (v: number) => 30 + (v - x0) * sx, Y = (v: number) => 16 + (y1 - v) * sy;
	return (
		<div style={{width: w, height: h, position: 'relative', background: '#fbf8f1', borderRadius: 14, border: '2px solid rgba(60,45,20,0.12)', boxSizing: 'border-box'}}>
			<svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{position: 'absolute', inset: 0, overflow: 'visible'}}>
				<path d={`M${X(x0)},${Y(0)} H${X(x1) + 16} M${X(0)},${Y(y0)} V${Y(y1) - 6}`} stroke={INK} strokeWidth={4.5} fill="none" strokeLinecap="round" />
				<text x={X(x1) + 22} y={Y(0) + 10} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, fill: INK_SOFT}}>x</text>
				<text x={X(0) + 12} y={Y(y1) + 14} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, fill: INK_SOFT}}>y</text>
				{ticks.map(t => <g key={t}><line x1={X(t)} x2={X(t)} y1={Y(0) - 10} y2={Y(0) + 10} stroke={INK} strokeWidth={4} /><text x={X(t)} y={Y(0) + 42} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, fill: INK}}>{t < 0 ? `−${-t}` : t}</text></g>)}
			</svg>
			<div style={{position: 'absolute', right: 26, top: 40, textAlign: 'right', fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46, lineHeight: 1.3, color: INK}}>
				{tags.map((t, i) => <div key={i}>{t}</div>)}
			</div>
		</div>
	);
};

// ---------- 9. attempt 1 ----------
const Q1: React.FC<{u?: {use: number}}> = ({u}) => (
	<div>Find the stationary points on the curve y = x³ + 3x² − 9x, and {u ? <MarkSpan kind="underline" at={u.use}>use the second derivative</MarkSpan> : 'use the second derivative'} to determine their nature.</div>
);
export const S09: React.FC = () => {
	const id = 'scene-09';
	return (
		<Attempt hold={hold(id)} pauseAt={cue(id, 'Pause here')} given={['y = x³ + 3x² − 9x', 'use y″']}
			picture={<QAxes h={420} x0={-4.5} x1={2.5} y0={-10} y1={32} ticks={[-4, -2, 2]} tags={['stationary points?', 'nature?']} />}>
			<Q1 />
		</Attempt>
	);
};

// ---------- 10. feedback 1 ----------
const FG = {x: 1080, y: 330, w: 790, h: 600};
export const S10: React.FC = () => {
	const id = 'scene-10';
	const f = useCurrentFrame();
	const c = (p: string, n = 1) => cue(id, p, n);
	const yp = c('y prime is'), pts = c('stationary points are'), one = c('and one.'), ypp = c('y double prime'), atM3 = c('At minus three', 2), m12 = c('minus twelve'), cd = c('concave down'), p27 = c('twenty-seven'), at1 = c('At one,'), t12 = c("it's twelve"), cu = c('concave up'), m5 = c('minus five'), posAt = c('Positive at one');
	const W = {x: [-4.5, 2.5] as [number, number], y: [-10, 32] as [number, number]};
	const M = makePlot(FG.x, FG.y, FG.w, FG.h, W);
	const Pm = M.pf(-3, 27), Pn = M.pf(1, -5);
	return (
		<>
			<TaskStrip text="Check your working" at={2} />
			<RolesOn on={f >= 10}>
				<QuestionCard at={-40} shrinkAt={-30} w={1640} y={196} size={46}><Q1 u={{use: ypp}} /></QuestionCard>
			</RolesOn>
			<GivensStrip x={1180} y={166} size={34} maxW={700} items={[{content: 'y = x³ + 3x² − 9x', at: 6}, {content: 'use y″', at: 12}]} />
			<Line x={96} y={340} at={yp} size={44}><V>y′ = 3x² + 6x − 9 = 3(x + 3)(x − 1)</V></Line>
			<Line x={96} y={404} at={pts} size={44}>= 0:  x = −3<span style={{opacity: prog(f, one, 10)}}> or x = 1</span></Line>
			<Line x={96} y={476} at={ypp} size={44}><Bl>y″ = 6x + 6</Bl></Line>
			<Line x={96} y={548} at={atM3} size={44}><Bl>y″(−3) = <span style={{opacity: prog(f, m12, 10)}}>−12 &lt; 0</span></Bl><span style={{opacity: prog(f, cd, 10)}}>: <Ol>cap</Ol> <CupCapGlyph kind="cap" size={38} />, max (−3, 27)</span></Line>
			<Line x={96} y={620} at={at1} size={44}><Bl>y″(1) = <span style={{opacity: prog(f, t12, 10)}}>12 &gt; 0</span></Bl><span style={{opacity: prog(f, cu, 10)}}>: <Bl>cup</Bl> <CupCapGlyph kind="cup" size={38} />, min (1, −5)</span></Line>
			<AnswerStack x={70} y={694} at={m5} size={42} rows={[{content: 'local maximum (−3, 27)', at: m5}, {content: 'local minimum (1, −5)', at: m5 + 6}]} />
			<MistakeCard x={96} y={830} w={880} at={posAt} size={40} wrong={<>y″(1) &gt; 0, so a maximum</>} caption="positive: cup: minimum" />
			<FunctionSimulator x={FG.x} y={FG.y} width={FG.w} height={FG.h} window={W} family={A1} timeline={[{frame: 0, x: 0}]} color={INK} at={-30}
				xTicks={[-4, -2, 2]} yTicks={[10, 20, 30]} xLabel="x" yLabel="y"
				regions={[{x: [-4.5, -1], color: CAPC, opacity: 0.85, at: cd}, {x: [-1, 2.5], color: CUPC, opacity: 0.85, at: cu}]}
				overlay={() => <FrameSvg>
					<Ring p={Pm} r={26} o={prog(f, p27, 12)} />
					<Ring p={Pn} r={26} o={prog(f, m5, 12)} />
				</FrameSvg>} />
			<CurveLabel x={M.pf(-4.4, 0)[0]} y={M.pf(0, 31)[1]} at={-30} size={36} color={INK}>y = x³ + 3x² − 9x</CurveLabel>
			<CurveLabel x={Pm[0] + 26} y={Pm[1] - 10} at={p27} size={34} color={INK}>(−3, 27)</CurveLabel>
			<CurveLabel x={Pn[0] - 40} y={Pn[1] + 30} at={m5} size={34} color={INK}>(1, −5)</CurveLabel>
		</>
	);
};

// ---------- 11. attempt 2 ----------
const Q2: React.FC<{u?: {j: number}}> = ({u}) => (
	<div>Find any points of inflection on the curve y = x⁵ − 5x⁴.  {u ? <MarkSpan kind="underline" at={u.j}>Justify</MarkSpan> : 'Justify'} your answer.</div>
);
export const S11: React.FC = () => {
	const id = 'scene-11';
	return (
		<Attempt hold={hold(id)} pauseAt={cue(id, 'Pause here')} heading="Last one" top={400} given={['y = x⁵ − 5x⁴', 'justify']}
			picture={<QAxes h={400} x0={-1} x1={4.5} y0={-280} y1={40} ticks={[1, 2, 3, 4]} tags={['inflection?']} />}>
			<Q2 />
		</Attempt>
	);
};

// ---------- 12. feedback 2 ----------
export const S12: React.FC = () => {
	const id = 'scene-12';
	const f = useCurrentFrame();
	const c = (p: string, n = 1) => cue(id, p, n);
	const ypp = c('y double prime'), three = c('at three.'), test = c('Test the'), neg1 = c("it's negative"), neg2 = c('still negative'), pos = c('positive.'), soC = c('So the concavity'), only = c('only at three'), p162 = c('sixty-two'), zeroIsnt = c("Zero isn't");
	const W = {x: [-1, 4.5] as [number, number], y: [-280, 40] as [number, number]};
	const G = {x: 1080, y: 330, w: 790, h: 390};
	const M = makePlot(G.x, G.y, G.w, G.h, W);
	const D = M.pf(3, -162);
	return (
		<>
			<TaskStrip text="Check your working" at={2} />
			<RolesOn on={f >= 10}>
				<QuestionCard at={-40} shrinkAt={-30} w={1640} y={196} size={46} heading="Last one"><Q2 u={{j: zeroIsnt}} /></QuestionCard>
			</RolesOn>
			<GivensStrip x={1180} y={166} size={34} maxW={700} items={[{content: 'y = x⁵ − 5x⁴', at: 6}, {content: 'justify', at: 12}]} />
			<Line x={96} y={300} at={-20} size={42}><V>y′ = 5x⁴ − 20x³</V></Line>
			<Line x={96} y={362} at={ypp} size={44}><Bl>y″ = 20x³ − 60x² = 20x²(x − 3)</Bl></Line>
			<Line x={96} y={430} at={three - 30} size={44}>y″ = 0:  x = 0 or x = 3<span style={{opacity: prog(f, three, 10), color: INK_SOFT, fontSize: 34}}>   (candidates)</span></Line>
			<SignStrip x={60} y={520} width={980} windowX={W.x} mode="concavity" at={test} rowLabel="y″" testLabel="test"
				boundaries={[{x: 0, kind: 'zero', note: {text: 'no change', at: zeroIsnt, color: RED}}, {x: 3, kind: 'zero', note: {text: 'changes', at: only, color: GREEN}}]}
				cells={[{sign: -1, test: {x: '−1', value: '−80'}, revealAt: neg1}, {sign: -1, test: {x: '1', value: '−40'}, revealAt: neg2}, {sign: 1, test: {x: '4', value: '320'}, revealAt: pos}]} />
			<Line x={96} y={790} at={p162 - 20} size={44}>y(3) = 243 − 405 = −162</Line>
			<AnswerBox x={G.x} y={740} at={p162} size={42}><span>only inflection: (3, −162)</span></AnswerBox>
			<MistakeCard x={G.x} y={836} w={780} at={zeroIsnt} size={36} wrong={<>(0, 0) is an inflection</>} caption="y″ < 0 on both sides of 0" />
			<FunctionSimulator x={G.x} y={G.y} width={G.w} height={G.h} window={W} family={A2} timeline={[{frame: 0, x: 3}]} color={INK} at={-30}
				xTicks={[1, 2, 3, 4]} yTicks={[{value: -250, label: '−250'}, {value: -150, label: '−150'}, {value: -50, label: '−50'}]} xLabel="x" yLabel="y"
				regions={[{x: [-1, 3], color: CAPC, opacity: 0.85, at: only}, {x: [3, 4.5], color: CUPC, opacity: 0.85, at: only}]}
				overlay={() => <FrameSvg><Diamond p={D} o={prog(f, p162 - 20, 12)} r={15} /></FrameSvg>} />
			<CurveLabel x={M.pf(-0.9, 0)[0]} y={M.pf(0, -230)[1]} at={-30} size={36} color={INK}>y = x⁵ − 5x⁴</CurveLabel>
			<CurveLabel x={D[0] - 230} y={D[1] - 8} at={p162 - 20} size={34} color={INK}>(3, −162)</CurveLabel>
		</>
	);
};
