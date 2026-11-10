// Scenes 9 to 12: an excluded value splits the chart, the memory aid (signs to arrows), attempt 1 and its
// feedback.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, Enter, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {
	CARD, CARD_SHADOW, Card, CardTitle, FrameSvg, FunctionSimulator, GivensStrip, HandTag, MarkSpan, MistakeCard, QuestionCard, RolesOn, TaskStrip,
	vis,
} from '../../math/studio';
import type {Range} from '../../math/graphs';
import {cue, hold} from './common';
import {
	CUBIC, CurveLabel, DISPLAY, DOWN, FN, Frac, GREEN, GREY, Klass, PreRing, QBlankAxes, QUOT, Ring, SignChart, Sup, UP, VIOLET, Valley, WholeRows, gmap, valleyPts,
} from './parts';

// ---------- 9. an excluded value splits the chart too ----------
export const S09: React.FC = () => {
	const id = 'scene-09';
	const f = useCurrentFrame();
	const deriv = cue(id, 'Its derivative is'), signx = cue(id, 'sign of x'), neg = cue(id, 'negative, negative'), one1 = cue(id, 'zero, one'), there = cue(id, 'breaks there'), last = cue(id, 'At minus two'), one2 = cue(id, 'point two one');
	const G = {x: 40, y: 160, w: 1100, h: 560};
	const W = {x: [-3, 2] as Range, y: [-3, 4] as Range};
	const M = gmap(G.x, G.y, G.w, G.h, W);
	const p1 = M.pt(-2, -Math.exp(-2)), p2 = M.pt(-0.5, 2 * Math.exp(-0.5));
	return (
		<>
			<TaskStrip text="An excluded value splits the chart too" at={2} />
			<FunctionSimulator x={G.x} y={G.y} width={G.w} height={G.h} window={W} family={QUOT} timeline={[{frame: 0, x: 0}]} color={FN}
				xTicks={[-2, -1, 1]} yTicks={[-2, 2, 4]} xLabel="" yLabel="y" asymptotes={[-1]}
				overlay={() => <FrameSvg>
					<circle cx={M.pt(-1, 0)[0]} cy={M.pt(-1, 0)[1]} r={14} fill={CARD} stroke={GREY} strokeWidth={5} />
					<Ring p={M.pt(0, 1)} r={28} o={prog(f, one1, 12)} />
					<circle cx={p1[0]} cy={p1[1]} r={12} fill={VIOLET} stroke={CARD} strokeWidth={4} opacity={prog(f, last, 12)} />
					<circle cx={p2[0]} cy={p2[1]} r={12} fill={VIOLET} stroke={CARD} strokeWidth={4} opacity={prog(f, last + 40, 12)} />
				</FrameSvg>} />
			<CurveLabel x={M.pt(-0.95, 3.6)[0] + 20} y={M.pt(0, 3.6)[1]} size={32} color={GREY}>x = −1</CurveLabel>
			<CurveLabel x={M.pt(0.6, 3.2)[0]} y={M.pt(0.6, 3.2)[1]} size={38} color={FN}>y = e<Sup>x</Sup>/(x + 1)</CurveLabel>
			<Klass x={M.pt(0, 1)[0] + 30} y={M.pt(0, 1)[1] + 26} at={one1 + 6} size={32}>local minimum (0, 1)</Klass>
			<CurveLabel x={p1[0] - 20} y={p1[1] - 60} at={last + 6} size={30} color={VIOLET}>(−2, −0.135)</CurveLabel>
			<CurveLabel x={p2[0] + 20} y={p2[1] - 50} at={last + 46} size={30} color={VIOLET}>(−½, 1.213)</CurveLabel>
			<Klass x={130} y={M.pt(0, 2.4)[1]} at={one2 - 70} size={30}>decreasing: x &lt; −1 and −1 &lt; x &lt; 0</Klass>
			<SignChart x={96} y={744} w={1060} win={[-3, 2]} ticks={[-3, -2, 0, 1, 2]} test={false} signLabel="f′(x)"
				boundaries={[{x: -1, at: -30, kind: 'excluded', label: 'x ≠ −1'}, {x: 0, at: -30}]}
				cells={[{sign: -1, at: neg}, {sign: -1, at: neg + 12}, {sign: 1, at: neg + 30}]} />
			<HandTag x={M.pt(-1, 0)[0] - 10} y={930} text="the chart splits here" at={there} size={36} color={GREY} anchor="middle" />
			{/* right column */}
			<Card x={1180} y={160} w={644} at={-30} pad="10px 24px 12px">
				<div style={{...DISPLAY(44, INK, 800), display: 'flex', alignItems: 'center', gap: 10}}><span style={{color: VIOLET}}>y′</span> = <Frac n={<>x e<Sup>x</Sup></>} d={<>(x + 1)<Sup>2</Sup></>} /><span style={{color: GREY}}>, x ≠ −1</span></div>
				<div style={DISPLAY(28, INK_SOFT, 600)}>last video</div>
			</Card>
			<Enter at={deriv + 40} style={{position: 'absolute', left: 1190, top: 330, width: 640}}>
				<div style={DISPLAY(34, INK, 700)}>e<Sup>x</Sup> &gt; 0 and (x + 1)<Sup>2</Sup> &gt; 0 for x ≠ −1</div>
			</Enter>
			<Enter at={signx} style={{position: 'absolute', left: 1190, top: 384, width: 640}}>
				<div style={DISPLAY(38, VIOLET, 800)}>so sign of y′ = sign of x</div>
			</Enter>
			<Enter at={one1 + 10} style={{position: 'absolute', left: 1190, top: 450}}><span style={DISPLAY(38, INK, 800)}>y(0) = e<Sup>0</Sup>/1 = 1</span></Enter>
			<Enter at={there} style={{position: 'absolute', left: 1180, top: 516, width: 644}}>
				<div style={{background: '#f1ebdf', border: '2px solid rgba(60,45,20,0.14)', borderRadius: 14, padding: '8px 20px', ...DISPLAY(32, '#4f4840', 700), whiteSpace: 'normal'}}>excluded value: no point, but the chart splits</div>
			</Enter>
			<Enter at={last} style={{position: 'absolute', left: 1190, top: 616}}><span style={DISPLAY(34, INK, 700)}>y(−2) = −e<Sup>−2</Sup> <span style={{color: INK_SOFT}}>≈ −0.135</span></span></Enter>
			<Enter at={last + 40} style={{position: 'absolute', left: 1190, top: 664}}><span style={DISPLAY(34, INK, 700)}>y(−½) = 2e<Sup>−½</Sup> <span style={{color: INK_SOFT}}>≈ 1.213</span></span></Enter>
			<Enter at={last + 80} style={{position: 'absolute', left: 1190, top: 714}}><span style={DISPLAY(32, INK, 800)}>−2 &lt; −½ but y(−2) &lt; y(−½)</span></Enter>
			<MistakeCard x={1180} y={772} w={644} at={one2 - 60} size={34} wrong={<>decreasing for x &lt; 0</>} caption="not across the break" />
		</>
	);
};

// ---------- 10. memory aid ----------
/** A small sign chart whose arrows join into a sketch above it (a pen lift at an excluded value). */
const MiniChart: React.FC<{x: number; y: number; w: number; signs: (1 | -1)[]; gapAfter?: number; at: number; label: string; liftGlow?: number}> = ({x, y, w, signs, gapAfter, at, label, liftGlow = 0}) => {
	const f = useCurrentFrame();
	const cw = w / signs.length, cellY = y + 112, h = 70;
	let px = x + 10, py = y + 60;
	const segs: string[][] = [[]];
	segs[0].push(`M${px},${py}`);
	signs.forEach((s, i) => {
		const nx = x + (i + 1) * cw - 10, ny = py - s * 44;
		segs[segs.length - 1].push(`L${nx},${ny}`);
		px = nx; py = ny;
		if (gapAfter === i) {px += 20; segs.push([`M${px},${py}`]);}
	});
	return (
		<>
			<FrameSvg>
				{signs.map((s, i) => <g key={i}>
					<rect x={x + i * cw + 4 + (gapAfter !== undefined && i > gapAfter ? 10 : 0)} y={cellY} width={cw - 8 - (gapAfter !== undefined && (i === gapAfter || i === gapAfter + 1) ? 10 : 0)} height={h} rx={12} fill={s > 0 ? '#d6eeee' : '#f8e8c8'} />
					<text x={x + (i + 0.5) * cw - 22} y={cellY + 50} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, fill: s > 0 ? UP : DOWN}}>{s > 0 ? '+' : '−'}</text>
					<path d={s > 0 ? `M${x + (i + 0.5) * cw + 6},${cellY + 50} l26,-26 m-14,0 l14,0 l0,14` : `M${x + (i + 0.5) * cw + 6},${cellY + 22} l26,26 m-14,0 l14,0 l0,-14`} stroke={s > 0 ? UP : DOWN} strokeWidth={6} fill="none" strokeLinecap="round" strokeLinejoin="round" />
				</g>)}
				{gapAfter !== undefined ? <circle cx={x + (gapAfter + 1) * cw} cy={cellY + h / 2} r={11} fill={CARD} stroke={GREY} strokeWidth={5} /> : null}
				{segs.map((sg, i) => <DrawPath key={i} d={sg.join(' ')} at={at + i * 16} dur={26} color={INK} width={7} />)}
				{gapAfter !== undefined && liftGlow > 0.001 ? <circle cx={x + (gapAfter + 1) * cw + 10} cy={y + 60} r={34} fill="none" stroke={GREY} strokeWidth={4} strokeDasharray="6 6" opacity={liftGlow} /> : null}
			</FrameSvg>
			<div style={{position: 'absolute', left: x, top: y - 14, opacity: prog(f, -30, 10), ...DISPLAY(28, INK_SOFT, 700)}}>{label}</div>
		</>
	);
};
export const S10: React.FC = () => {
	const id = 'scene-10';
	const f = useCurrentFrame();
	const sketch = cue(id, 'sketch the shape'), peak = cue(id, 'a peak'), valley = cue(id, 'a valley'), step = cue(id, 'a step'), value = cue(id, 'excluded value');
	const VX = 760, VY = 334, VW = 1000;
	const vp = valleyPts(VX, VY, VW);
	const ridgeP = [VX + (300 - 147) * vp.s, VY + (215 - 47) * vp.s];
	const keyRow = (i: number, at: number, text: React.ReactNode) => (
		<Enter key={i} at={-30} style={{position: 'absolute', left: 770, top: 676 + i * 66, width: 990}}>
			<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, lineHeight: 1.08, color: INK, background: vis(f, at, at + 60) > 0.01 ? `rgba(220,239,226,${0.8 * vis(f, at, at + 60)})` : undefined, borderRadius: 12, padding: '0 8px'}}>{text}</div>
		</Enter>
	);
	return (
		<>
			<TaskStrip text="A way to picture it" at={2} />
			<div style={{position: 'absolute', left: 120, top: 168, width: 1680, height: 772, boxSizing: 'border-box', background: CARD, border: `4px solid ${INK}`, borderRadius: 24, boxShadow: `inset 0 0 0 8px ${CARD}, inset 0 0 0 10.5px ${INK}, ${CARD_SHADOW}`}} />
			<div style={{position: 'absolute', left: 168, top: 190}}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 48, color: INK_SOFT}}>Memory aid</span></div>
			<div style={{position: 'absolute', left: 760, top: 196, width: 990, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 62, lineHeight: 1.1, color: INK}}>Turn the signs into arrows; the arrows sketch the shape.</div>
			<MiniChart x={180} y={300} w={500} signs={[1, -1, 1]} at={sketch} label="worked example 1" />
			<MiniChart x={180} y={510} w={500} signs={[-1, -1, 1]} at={sketch + 30} label="the hike" />
			<MiniChart x={180} y={720} w={500} signs={[-1, -1, 1]} gapAfter={0} at={sketch + 60} label="eˣ/(x + 1)" liftGlow={vis(f, value, value + 90)} />
			<HandTag x={430} y={724} text="lift the pen" at={value + 6} size={40} color={INK} />
			<Valley x={VX} y={VY} w={VW} at={-30} ridge={prog(f, peak, 12)} creek={prog(f, valley, 12)} ledge={prog(f, step, 12)} />
			<HandTag x={ridgeP[0] + 70} y={ridgeP[1] - 40} text="summit" at={peak + 6} size={42} color={INK} />
			<HandTag x={vp.creek[0] + 80} y={vp.creek[1] - 70} text="creek" at={valley + 6} size={42} color={INK} />
			<HandTag x={vp.ledge[0] + 30} y={vp.ledge[1] - 80} text="ledge" at={step + 6} size={42} color={INK} />
			{keyRow(0, peak, <><span style={{color: UP}}>↗</span><span style={{color: DOWN}}>↘</span> peak: a summit <span style={{color: GREEN}}>(local max)</span></>)}
			{keyRow(1, valley, <><span style={{color: DOWN}}>↘</span><span style={{color: UP}}>↗</span> valley: the creek <span style={{color: GREEN}}>(local min)</span></>)}
			{keyRow(2, step, <><span style={{color: UP}}>↗↗</span> or <span style={{color: DOWN}}>↘↘</span> step: the ledge <span style={{color: GREEN}}>(horizontal point of inflection)</span></>)}
		</>
	);
};

// ---------- 11. attempt 1 ----------
const Q1: React.FC<{u?: {inc: number; dec: number; sp: number; nat: number}}> = ({u}) => (
	<>
		<div>Consider f(x) = x<Sup>3</Sup> − 3x.</div>
		<div style={{marginTop: 6}}>(a) Find the values of x for which f is {u ? <MarkSpan kind="underline" at={u.inc}>increasing</MarkSpan> : 'increasing'} and for which f is {u ? <MarkSpan kind="underline" at={u.dec}>decreasing</MarkSpan> : 'decreasing'}.</div>
		<div style={{marginTop: 6}}>(b) Find the coordinates of the {u ? <MarkSpan kind="underline" at={u.sp}>stationary points</MarkSpan> : 'stationary points'} of f and determine their {u ? <MarkSpan kind="underline" at={u.nat}>nature</MarkSpan> : 'nature'}.</div>
	</>
);
/** Attempt layout for long questions: card on top, 40 px Given card and the empty sign chart below. */
export const AttemptTall: React.FC<{hold: {startFrame: number; endFrame: number}; pauseAt: number; given: React.ReactNode[]; heading?: string; picture: React.ReactNode; children: React.ReactNode}> = ({hold, pauseAt, given, heading, picture, children}) => (
	<RolesOn on={false}>
		<Card x={96} y={640} w={620} at={6} pad="12px 24px 14px">
			<CardTitle>Given</CardTitle>
			{given.map((g, i) => <div key={i} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: INK, marginTop: 2, whiteSpace: 'pre'}}>{g}</div>)}
		</Card>
		<Enter at={6} style={{position: 'absolute', left: 740, top: 630}}>{picture}</Enter>
		<QuestionCard at={0} size={46} w={1460} y={196} hold={hold} pauseAt={pauseAt} heading={heading}>{children}</QuestionCard>
		<PreRing from={pauseAt} start={hold.startFrame} />
	</RolesOn>
);
export const S11: React.FC = () => {
	const id = 'scene-11';
	return (
		<AttemptTall hold={hold(id)} pauseAt={cue(id, 'Pause here')} picture={<QBlankAxes w={1084} h={310} xRange={[-3, 3]} ticks={[-2, -1, 1, 2]} tag="where does f rise, fall, turn?" label={<>y = x³ − 3x</>} />} given={[<>f(x) = x³ − 3x</>, <>(a) increasing, decreasing</>, <>(b) stationary points, nature</>]}>
			<Q1 />
		</AttemptTall>
	);
};

// ---------- 12. feedback 1 ----------
export const S12: React.FC = () => {
	const id = 'scene-12';
	const f = useCurrentFrame();
	const plus = cue(id, 'plus, minus, plus'), inc = cue(id, 'So f increases'), two1 = cue(id, 'one, two'), two2 = cue(id, 'one, minus two'), time = cue(id, 'every time');
	const G = {x: 1090, y: 520, w: 734, h: 400};
	const W = {x: [-2.5, 2.5] as Range, y: [-3, 3] as Range};
	const M = gmap(G.x, G.y, G.w, G.h, W);
	return (
		<>
			<TaskStrip text="Check your working" at={2} />
			<RolesOn on={f >= 10}>
				<QuestionCard at={-40} shrinkAt={-30} w={1460} y={196} size={46}><Q1 u={{inc: inc, dec: inc + 40, sp: two1, nat: two1 + 20}} /></QuestionCard>
			</RolesOn>
			<GivensStrip x={1090} y={152} size={36} items={[{content: <>f(x) = x³ − 3x</>, at: 6}]} />
			<SignChart x={1050} y={236} w={774} win={[-2.5, 2.5]} ticks={[-2, 0, 2]} signLabel="f′(x)" testSize={28}
				boundaries={[{x: -1, at: -30}, {x: 1, at: -30}]}
				cells={[{sign: 1, at: plus, test: 'f′(−2) = 9', testAt: plus - 50}, {sign: -1, at: plus + 10, test: 'f′(0) = −3', testAt: plus - 30}, {sign: 1, at: plus + 20, test: 'f′(2) = 9', testAt: plus - 10}]} />
			<WholeRows x={96} y={440} w={960} size={48} oldSize={40} gap={12} rows={[
				{left: 'f′(x)', right: <>3x<Sup>2</Sup> − 3 = 3(x − 1)(x + 1)</>, at: 6, keep: true},
				{left: '', relation: ' ', right: <span style={{fontSize: 38, lineHeight: 1.25}}><span style={{color: UP}}>increasing: x &lt; −1 or x &gt; 1</span><br /><span style={{color: DOWN}}>decreasing: −1 &lt; x &lt; 1</span></span>, at: inc, keep: true},
				{left: 'f(−1)', right: <>−1 + 3 = 2: local max (−1, 2)</>, at: two1, answer: true},
				{left: 'f(1)', right: <>1 − 3 = −2: local min (1, −2)</>, at: two2, answer: true},
			]} />
			<MistakeCard x={96} y={830} w={960} at={time - 10} size={34} wrong={<>(−1, 0) and (1, 0)</>} caption="y from f, not f′" />
			<FunctionSimulator at={-30} x={G.x} y={G.y} width={G.w} height={G.h} window={W} family={CUBIC} timeline={[{frame: 0, x: -1}]} color={FN} curveWidth={6}
				xTicks={[-2, -1, 1, 2]} yTicks={[-2, 2]} xLabel="x" yLabel="y"
				overlay={() => <FrameSvg><Ring p={M.pt(-1, 2)} r={24} o={prog(f, two1, 12)} /><Ring p={M.pt(1, -2)} r={24} o={prog(f, two2, 12)} /></FrameSvg>} />
			<CurveLabel x={M.pt(1.2, 2.4)[0]} y={M.pt(1.2, 2.4)[1]} size={34} color={FN}>y = x³ − 3x</CurveLabel>
		</>
	);
};
