// Scenes 13 to 16: attempt 2 and its feedback, the handoff (d10 opens on its final frame), the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {
	CARD, CARD_SHADOW, Card, CardTitle, FrameSvg, FunctionSimulator, GivensStrip, HandTag, InnerSlot, KeyNotesBullets, MarkSpan, MistakeCard, QuestionCard, RolesOn, SceneHeading, TaskStrip,
	MATH_STRAND_ACCENT,
} from '../../math/studio';
import type {FnFamily} from '../../math/studio';
import type {Range} from '../../math/graphs';
import {cue, hold} from './common';
import {
	CUBIC, CurveLabel, D10_STAGE, DISPLAY, DOWN, FN, GREEN, Klass, NextChip, PreRing, QBlankAxes, Ring, SignChart, Sup, UP, WIN_E, WholeRows, gmap, tint,
} from './parts';

// ---------- 13. attempt 2 ----------
const Q2: React.FC<{u?: {sp: number; nat: number; sign: number}}> = ({u}) => (
	<>
		<div>The derivative of a function f is f′(x) = x(x − 2)<Sup>2</Sup>.</div>
		<div style={{marginTop: 6}}>(a) Find the x-values of the {u ? <MarkSpan kind="underline" at={u.sp}>stationary points</MarkSpan> : 'stationary points'} of f.</div>
		<div style={{marginTop: 6}}>(b) Determine the {u ? <MarkSpan kind="underline" at={u.nat}>nature</MarkSpan> : 'nature'} of each stationary point, justifying your answer using the {u ? <MarkSpan kind="underline" at={u.sign}>sign of f′(x)</MarkSpan> : 'sign of f′(x)'}.</div>
	</>
);
export const S13: React.FC = () => {
	const id = 'scene-13';
	const h = hold(id), pauseAt = cue(id, 'Pause here');
	return (
		<RolesOn on={false}>
			<Card x={96} y={640} w={620} at={6} pad="12px 24px 14px">
				<CardTitle>Given</CardTitle>
				{[<>f′(x) = x(x − 2)²</>, <>(a) x-values of stationary points</>, <>(b) nature, using sign of f′</>].map((g, i) => <div key={i} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, color: INK, marginTop: 2, whiteSpace: 'pre'}}>{g}</div>)}
			</Card>
			<Enter at={6} style={{position: 'absolute', left: 740, top: 630}}><QBlankAxes w={1084} h={310} xRange={[-2, 4]} ticks={[-1, 1, 2, 3]} tag="sign of f′ on each side?" label={<>f′(x) = x(x − 2)²</>} /></Enter>
			<QuestionCard at={0} size={46} w={1460} y={196} hold={h} pauseAt={pauseAt} heading="Last one"><Q2 /></QuestionCard>
			<PreRing from={pauseAt} start={h.startFrame} />
		</RolesOn>
	);
};

// ---------- 14. feedback 2 ----------
const F2: FnFamily = {f: u => u ** 4 / 4 - (4 * u ** 3) / 3 + 2 * u * u, df: u => u * (u - 2) * (u - 2)};
export const S14: React.FC = () => {
	const id = 'scene-14';
	const f = useCurrentFrame();
	const zeros = cue(id, 'equals two'), neg = cue(id, 'negative'), pos = cue(id, 'positive'), minimum = cue(id, 'minimum'), squared = cue(id, 'The squared bracket'), point = cue(id, 'turning point'), maximum = cue(id, 'maximum');
	const G = {x: 1090, y: 520, w: 734, h: 400};
	const W = {x: [-1.5, 3.5] as Range, y: [-1, 4.5] as Range};
	const M = gmap(G.x, G.y, G.w, G.h, W);
	return (
		<>
			<TaskStrip text="Check your working" at={2} />
			<RolesOn on={f >= 10}>
				<QuestionCard at={-40} shrinkAt={-30} w={1460} y={196} size={46} heading="Last one"><Q2 u={{sp: zeros, nat: minimum, sign: point}} /></QuestionCard>
			</RolesOn>
			<GivensStrip x={1090} y={152} size={36} items={[{content: <>f′(x) = x(x − 2)²</>, at: 6}]} />
			<SignChart x={1050} y={236} w={774} win={[-1.5, 3.5]} ticks={[-1, 1, 3]} signLabel="f′(x)" testSize={28}
				boundaries={[{x: 0, at: -30}, {x: 2, at: -30}]}
				cells={[{sign: -1, at: neg, test: 'f′(−1) = −9', testAt: neg - 30}, {sign: 1, at: pos - 10, test: 'f′(1) = 1', testAt: pos - 30}, {sign: 1, at: pos, test: 'f′(3) = 3', testAt: pos - 10}]} />
			<WholeRows x={96} y={456} w={960} size={44} oldSize={44} gap={8} rows={[
				{left: 'f′(x)', right: <>x<InnerSlot on={f >= squared}>(x − 2)<Sup>2</Sup></InnerSlot> = 0 when x = 0 or x = 2</>, at: 6, keep: true},
				{left: 'f′(−1)', right: <>(−1)(−3)<Sup>2</Sup> = −9  <span style={{color: DOWN}}>−</span></>, at: neg - 20, keep: true},
				{left: 'f′(1)', right: <>(1)(−1)<Sup>2</Sup> = 1  <span style={{color: UP}}>+</span></>, at: pos - 30, keep: true},
				{left: 'f′(3)', right: <>(3)(1)<Sup>2</Sup> = 3  <span style={{color: UP}}>+</span></>, at: pos, keep: true},
			]} />
			<HandTag x={430} y={440} text="never negative" at={squared + 10} size={38} color={INK_SOFT} />
			<Klass x={96} y={726} at={minimum} size={34}>x = 0: <span style={{color: DOWN}}>−</span> to <span style={{color: UP}}>+</span>, local minimum</Klass>
			<Klass x={96} y={782} at={point} size={34}>x = 2: <span style={{color: UP}}>+ 0 +</span>, horizontal point of inflection</Klass>
			<MistakeCard x={96} y={838} w={960} at={maximum - 10} size={30} wrong={<>x = 2: local maximum</>} caption="check the signs; turns don't alternate" />
			<FunctionSimulator at={-30} x={G.x} y={G.y} width={G.w} height={G.h} window={W} family={F2} timeline={[{frame: 0, x: 0}]} color={FN} curveWidth={6}
				xTicks={[-1, 1, 2, 3]} yTicks={[1, 2, 3, 4]} xLabel="x" yLabel="y"
				overlay={() => <FrameSvg><Ring p={M.pt(0, 0)} r={24} o={prog(f, minimum, 12)} /><Ring p={M.pt(2, F2.f(2, {}))} r={24} o={prog(f, point, 12)} /></FrameSvg>} />
			<CurveLabel x={M.pt(0.4, 4.3)[0]} y={M.pt(0.4, 4.3)[1]} size={30} color={INK_SOFT}>one such f (any + C)</CurveLabel>
		</>
	);
};

// ---------- 15. handoff (d10 opens on its final frame) ----------
/** d10's opening frame: x³ − 3x on −2 ≤ x ≤ 3, (−1, 2) ringed, (1, −2) dim, the two chips. */
export const D09Final: React.FC<{drawAt?: number; intervalAt?: number; reachesAt?: number; nextAt?: number}> = ({drawAt = -30, intervalAt = -30, reachesAt = -30, nextAt = -30}) => {
	const f = useCurrentFrame();
	const S = D10_STAGE;
	const M = gmap(S.x, S.y, S.w, S.h, WIN_E);
	const iv = prog(f, intervalAt, 16);
	const fam: FnFamily = {...CUBIC, domain: [{from: -2, to: 3, includeFrom: true, includeTo: true}]};
	return (
		<>
			<FunctionSimulator at={drawAt} draw={{at: drawAt, dur: 30}} x={S.x} y={S.y} width={S.w} height={S.h} window={WIN_E} family={fam} timeline={[{frame: 0, x: -1}]} color={FN}
				xTicks={[-2, -1, 1, 2, 3]} yTicks={[5, 10, 15]} xLabel="x" yLabel="y"
				regions={[{x: [-2, 3], color: tint(FN, 0.08), at: intervalAt}]}
				curves={[{fn: x => x ** 3 - 3 * x, at: drawAt, out: intervalAt, color: FN, width: 7, domain: [-2.5, -2]}, {fn: x => x ** 3 - 3 * x, at: drawAt, out: intervalAt, color: FN, width: 7, domain: [3, 3.5]}]}
				overlay={() => <FrameSvg>
					<Ring p={M.pt(-1, 2)} r={28} o={prog(f, drawAt + 20, 12)} />
					<circle cx={M.pt(1, -2)[0]} cy={M.pt(1, -2)[1]} r={11} fill={FN} opacity={0.35 * prog(f, drawAt + 20, 12)} />
					<circle cx={M.pt(-2, -2)[0]} cy={M.pt(-2, -2)[1]} r={13} fill={FN} stroke={CARD} strokeWidth={4} opacity={iv} />
					<circle cx={M.pt(3, 18)[0]} cy={M.pt(3, 18)[1]} r={13} fill={FN} stroke={CARD} strokeWidth={4} opacity={iv} />
				</FrameSvg>} />
			<Klass x={M.pt(-1, 2)[0] - 30} y={M.pt(-1, 2)[1] - 104} at={drawAt + 24} size={40} anchor="middle">local maximum (−1, 2)</Klass>
			<Enter at={reachesAt} style={{position: 'absolute', left: M.pt(3, 18)[0] - 640, top: M.pt(3, 18)[1] - 30}}>
				<div style={{background: CARD, borderRadius: 16, padding: '6px 22px', border: `3px solid ${FN}`, boxShadow: CARD_SHADOW, ...DISPLAY(40, INK, 800)}}>largest value on −2 ≤ x ≤ 3?</div>
			</Enter>
			<NextChip at={nextAt} text="Next: global maxima and minima" />
		</>
	);
};
export const S15: React.FC = () => {
	const id = 'scene-15';
	const next = cue(id, 'Next'), interval = cue(id, 'interval'), reaches = cue(id, 'reaches');
	return (
		<>
			<Enter at={-30} style={{position: 'absolute', left: 96, top: 104}}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: INK}}>Turn the signs into arrows; the arrows sketch the shape.</span></Enter>
			<Enter at={10} out={next - 20} style={{position: 'absolute', left: 0, right: 0, top: 440, display: 'flex', justifyContent: 'center'}}>
				<div style={{background: CARD, borderRadius: 18, padding: '18px 36px', boxShadow: CARD_SHADOW, ...DISPLAY(48, INK, 800), textAlign: 'center', lineHeight: 1.5}}>
					<div><span style={{color: UP}}>+</span> to <span style={{color: DOWN}}>−</span>: local max.   <span style={{color: DOWN}}>−</span> to <span style={{color: UP}}>+</span>: local min.</div>
					<div>Same sign: horizontal point of inflection.</div>
				</div>
			</Enter>
			<D09Final drawAt={next} intervalAt={interval} reachesAt={reaches} nextAt={next + 30} />
		</>
	);
};

// ---------- 16. key notes ----------
export const S16: React.FC = () => {
	const f = useCurrentFrame();
	const items = [
		{content: <><span style={{color: UP}}>f′ &gt; 0: increasing.</span> <span style={{color: DOWN}}>f′ &lt; 0: decreasing.</span></>, at: 10},
		{content: <>Stationary: f′(c) = 0. It need not turn.</>, at: 22},
		{content: <><span style={{color: UP}}>+</span> to <span style={{color: DOWN}}>−</span>: local max. <span style={{color: DOWN}}>−</span> to <span style={{color: UP}}>+</span>: local min.</>, at: 34},
		{content: <>Same sign both sides: horizontal point of inflection.</>, at: 46},
		{content: <>Split at zeros and excluded values; y from f.</>, at: 58},
	];
	return (
		<>
			<SceneHeading text="Key notes: what to write in your book" at={2} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('scene-16', 'Pause')} size={42} color={MATH_STRAND_ACCENT} anchor="end" />
			<KeyNotesBullets x={110} y={220} w={1020} items={items} size={40} gap={70} />
			<Enter at={70} style={{position: 'absolute', left: 1170, top: 196, width: 654}}>
				<div style={{background: CARD, border: `4px solid ${INK}`, borderRadius: 22, boxShadow: `inset 0 0 0 7px ${CARD}, inset 0 0 0 9.5px ${INK}, ${CARD_SHADOW}`, padding: '22px 30px 26px', height: 600, boxSizing: 'border-box', position: 'relative'}}>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK_SOFT}}>Memory aid</div>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 54, lineHeight: 1.1, color: INK, marginTop: 4}}>Turn the signs into arrows; the arrows sketch the shape.</div>
					<div style={{position: 'absolute', left: 30, right: 26, top: 316, opacity: prog(f, 96, 12), ...DISPLAY(40, INK, 700), whiteSpace: 'normal', lineHeight: 1.3}}>
						<div>peak: summit <span style={{color: GREEN}}>(local max)</span></div>
						<div>valley: creek <span style={{color: GREEN}}>(local min)</span></div>
						<div>step: ledge <span style={{color: GREEN}}>(inflection)</span></div>
						<div>lift the pen at an excluded value</div>
					</div>
				</div>
			</Enter>
		</>
	);
};
