// Scenes 13 to 17: feedback 1, attempt 2 and its feedback, the handoff to log₂ x, the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {
	Card, CardTitle, FrameSvg, FunctionSimulator, GivensStrip, HandTag, KeyNotesBullets, MarkSpan, MistakeCard, Pow, QuestionCard, Role, RolesOn, SceneHeading, TaskStrip, WorkingRows,
	MATH_ANSWER, MATH_GRADIENT, MATH_STRAND_ACCENT, CARD, CARD_SHADOW,
} from '../../math/studio';
import type {FnFamily} from '../../math/studio';
import {cue, hold} from './common';
import {AttemptStage, BlankAxes, CurveLabel, DISPLAY, Frac, LN, LnRule, Legend, NAVY, PhoneIcon, RecallChip, SQ, SQ_TICKS, WatchIcon} from './parts';

const F13: FnFamily = {f: u => 2 * Math.log(u) - 3 * u, df: u => 2 / u - 3, domain: [{from: 0, to: Infinity}]};

// ---------- 13. feedback 1 ----------
export const S13: React.FC = () => {
	const id = 'scene-13';
	const f = useCurrentFrame();
	const start = cue(id, 'Two times'), soDy = cue(id, 'So d y'), atX = cue(id, 'At x equals two'), minus2 = cue(id, 'minus two'), wrote = cue(id, 'If you wrote');
	return (
		<>
			<TaskStrip text="Check your working" at={2} />
			<Legend />
			<RolesOn on={f >= start}>
				<QuestionCard at={-40} shrinkAt={-30}>
					<div>A curve has equation y = <MarkSpan kind="underline" at={start + 10}><Role r="k">2</Role> ln x</MarkSpan> − <MarkSpan kind="underline" at={start + 140}>3x</MarkSpan>, for <MarkSpan kind="underline" at={start + 20}>x &gt; 0</MarkSpan>.</div>
					<div style={{marginTop: 16}}>Find the gradient of the curve at <MarkSpan kind="underline" at={atX}>x = 2</MarkSpan>.</div>
				</QuestionCard>
			</RolesOn>
			<GivensStrip x={1120} y={170} maxW={710} items={[
				{content: <>y = 2 ln x − 3x</>, at: start},
				{content: <>x &gt; 0</>, at: start + 20},
				{content: <>x = 2</>, at: atX},
			]} />
			<WorkingRows x={96} y={380} w={1000} size={58} oldSize={40} gap={16} rows={[
				{left: 'dy/dx', right: <><Frac n={<Role r="k">2</Role>} d="x" /> − 3</>, at: soDy},
				{left: 'at x = 2', right: <><Frac n="2" d="2" /> − 3 = 1 − 3</>, at: atX},
				{right: '−2', at: minus2, answer: true},
			]} />
			<FunctionSimulator x={1130} y={300} width={694} height={480} window={{x: [0, 3.5], y: [-9, -1]}} family={F13} timeline={[{frame: 0, x: 2}]}
				xTicks={[1, 2, 3]} yTicks={[-8, -6, -4, -2]} xLabel="x" yLabel="y" asymptotes={[0]}
				point={{at: -30}} tangent={{at: minus2 - 20, halfLength: 140}}
				overlay={g => <HandTag x={g.pt[0] + 30} y={g.pt[1] - 70} text="slope −2" at={minus2} size={44} color={MATH_GRADIENT} />} />
			<CurveLabel x={1220} y={330} size={40}>y = 2 ln x − 3x</CurveLabel>
			<MistakeCard x={96} y={790} w={1728} size={44} at={wrote} wrong={<>dy/dx = <Frac n="1" d="x" /> − 3, so −2.5</>} caption="2 ln x is a stretch, not ln(2x)" />
		</>
	);
};

// ---------- 14. attempt 2 ----------
export const S14: React.FC = () => {
	const id = 'scene-14';
	return (
		<AttemptStage hold={hold(id)} pauseAt={cue(id, 'Pause here')} given={[<>f(x) = ln(x³)</>, <>x &gt; 0</>, <>f′(x) = 6</>]}
			picture={<BlankAxes w={720} h={380} tag="gradient = 6 where?" />}>
			<div>Consider the function f(x) = ln(x³), for x &gt; 0.</div>
			<div style={{marginTop: 16}}>(a) Find f′(x).</div>
			<div style={{marginTop: 10}}>(b) Find the value of x for which f′(x) = 6.</div>
		</AttemptStage>
	);
};

// ---------- 15. feedback 2 ----------
export const S15: React.FC = () => {
	const id = 'scene-15';
	const f = useCurrentFrame();
	const use = cue(id, 'Use the log'), forPos = cue(id, 'For positive'), threeTimes = cue(id, 'is three times'), threeOver = cue(id, 'is three over'), set = cue(id, 'Set'), half = cue(id, 'half'), pos = cue(id, "That's positive"), oneOver = cue(id, 'One over');
	const three = <Role r="k">3</Role>;
	return (
		<>
			<TaskStrip text="Check your working" at={2} />
			<Legend />
			<RolesOn on={f >= use}>
				<QuestionCard at={-40} shrinkAt={-30}>
					<div>Consider the function f(x) = <MarkSpan kind="underline" at={forPos + 20}>ln(x³)</MarkSpan>, for <MarkSpan kind="underline" at={forPos}>x &gt; 0</MarkSpan>.</div>
					<div style={{marginTop: 16}}>(a) Find f′(x).</div>
					<div style={{marginTop: 10}}>(b) Find the value of x for which <MarkSpan kind="underline" at={set}>f′(x) = 6</MarkSpan>.</div>
				</QuestionCard>
			</RolesOn>
			<GivensStrip x={1120} y={170} maxW={710} items={[
				{content: <>f(x) = ln(x³)</>, at: use},
				{content: <>x &gt; 0</>, at: forPos},
				{content: <>f′(x) = 6</>, at: set},
			]} />
			<RecallChip x={96} y={390} at={-30} out={threeTimes - 6} size={44}>Year 11 log law: ln(x<Pow>n</Pow>) = n ln x (x &gt; 0)</RecallChip>
			<Card x={96} y={500} w={1000} at={-30} out={threeTimes - 6} pad="12px 26px 14px">
				<CardTitle>Plan</CardTitle>
				{[<>1. Log law first: ln(x³) = 3 ln x.</>, <>2. Differentiate.</>, <>3. Solve f′(x) = 6, and check x &gt; 0.</>].map((t, i) => <div key={i} style={{...DISPLAY(38, INK, 700), marginTop: 4}}>{t}</div>)}
			</Card>
			<WorkingRows x={96} y={380} w={1000} size={56} oldSize={38} gap={14} rows={[
				{left: 'f(x)', right: <>{three} ln x</>, at: threeTimes},
				{left: 'f′(x)', right: <Frac n={three} d="x" />, at: threeOver, answer: true},
				{left: <Frac n="3" d="x" />, right: '6', at: set},
				{left: 'x', right: '½', at: half, answer: true},
			]} />
			<HandTag x={560} y={760} text="½ > 0 ✓ in the domain" at={pos} size={42} color={MATH_ANSWER} />
			<FunctionSimulator x={1130} y={300} width={694} height={480} window={{x: [0, 3], y: [-4, 4]}} family={{...LN, f: u => 3 * Math.log(u), df: u => 3 / u}} timeline={[{frame: 0, x: 0.5, p: {c: Math.E}}]}
				xTicks={[1, 2]} yTicks={[-2, 2, 4]} xLabel="x" yLabel="y" asymptotes={[0]}
				point={{at: half - 10}} tangent={{at: half, halfLength: 130}}
				overlay={g => <HandTag x={g.pt[0] + 40} y={g.pt[1] - 40} text="slope 6" at={half + 10} size={44} color={MATH_GRADIENT} />} />
			<CurveLabel x={1500} y={340} size={40}>y = 3 ln x</CurveLabel>
			<MistakeCard x={96} y={800} w={1728} size={44} at={oneOver} wrong={<>f′(x) = <Frac n="1" d="x³" /></>} caption="1/x is for ln x itself: use the log law first" />
		</>
	);
};

// ---------- 16. handoff ----------
export const S16: React.FC = () => {
	const id = 'scene-16';
	const f = useCurrentFrame();
	const next = cue(id, 'Next'), stretched = cue(id, 'stretched');
	const L2 = 1 / Math.log(2);
	return (
		<>
			<SceneHeading text="Next: change the log base" at={2} />
			<div style={{position: 'absolute', left: 96, top: 162}}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: INK_SOFT}}>So far: flip the graph, flip the slope.</span></div>
			<Enter at={-30} style={{position: 'absolute', left: 96, top: 270, width: 760}}>
				<div style={{background: CARD, borderRadius: 20, padding: '18px 30px 22px', boxShadow: CARD_SHADOW, border: '3px solid rgba(60,45,20,0.14)'}}>
					<div style={DISPLAY(30, INK_SOFT, 700)}>This video:</div>
					<div style={DISPLAY(52)}><LnRule dom /></div>
					<div style={{...DISPLAY(34, INK, 600), marginTop: 8}}>ln x is e<Pow>x</Pow> reflected in y = x</div>
				</div>
			</Enter>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - prog(f, next - 30, 14)}}>
				<div style={{position: 'absolute', left: 140, top: 560, width: 150, height: 300}}><PhoneIcon h={280} /></div>
				<div style={{position: 'absolute', left: 330, top: 640, width: 200, height: 220}}><WatchIcon h={200} /></div>
			</div>
			<Enter at={next + 10} style={{position: 'absolute', left: 96, top: 640}}>
				<div style={{display: 'inline-block', background: CARD, borderRadius: 18, padding: '8px 30px 12px', boxShadow: CARD_SHADOW, border: `3px solid ${MATH_STRAND_ACCENT}`, ...DISPLAY(50)}}>Next: changing the log base</div>
			</Enter>
			<HandTag x={110} y={820} text="stretched upward by how much?" at={stretched} size={42} color={NAVY} />
			<FunctionSimulator x={1000} y={170} width={826} height={820} window={SQ} family={LN} timeline={[{frame: 0, x: 1, p: {c: Math.E}}]}
				xTicks={SQ_TICKS} yTicks={SQ_TICKS} xLabel="x" yLabel="y" asymptotes={[0]}
				curves={[{fn: X => (X > 0.03 ? Math.log(X) * L2 : NaN), at: next, color: NAVY, width: 6, domain: [0.03, 5]}]}
				overlay={g => {
					const [ax, ay] = g.toFrame(4, Math.log(4)), [, by] = g.toFrame(4, 2);
					return f >= next + 20 ? <>
						<FrameSvg>
							<line x1={ax} y1={ay} x2={ax} y2={by + 10} stroke={NAVY} strokeWidth={5} />
							<path d={`M${ax - 12},${by + 22} L${ax},${by + 4} L${ax + 12},${by + 22}`} stroke={NAVY} strokeWidth={5} fill="none" />
						</FrameSvg>
						<HandTag x={ax + 20} y={(ay + by) / 2 + 10} text="× ?" at={next + 24} size={56} color={NAVY} />
					</> : null;
				}} />
			<CurveLabel x={1560} y={560} size={44}>y = ln x</CurveLabel>
			<CurveLabel x={1440} y={330} size={44} color={NAVY} at={next + 10}>y = log<span style={{fontSize: '0.6em', position: 'relative', top: '0.3em'}}>2</span> x</CurveLabel>
		</>
	);
};

// ---------- 17. key notes ----------
export const S17: React.FC = () => {
	const f = useCurrentFrame();
	const items = [
		{content: <>For x &gt; 0: <LnRule /></>, at: 10},
		{content: <>Not ln x, and not 1/(ln x).</>, at: 22},
		{content: <>Why: ln x is e<Pow>x</Pow> reflected in y = x,<br />so each slope flips to 1 ÷ slope.</>, at: 34},
		{content: <>Proof: e<Pow>ln x</Pow> = x, so x × d/dx(ln x) = 1.</>, at: 46},
		{content: <>Log laws first: ln(<Role r="b">3</Role>x) → 1/x;<br /><Role r="k">3</Role> ln x → 3/x; ln(x³) → 3/x.</>, at: 58},
	];
	return (
		<>
			<SceneHeading text="Key notes: what to write in your book" at={2} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('scene-17', 'Pause')} size={42} color={MATH_STRAND_ACCENT} anchor="end" />
			<KeyNotesBullets x={110} y={200} w={1000} items={items} size={38} gap={28} />
			<Enter at={70} style={{position: 'absolute', left: 1170, top: 196, width: 654}}>
				<div style={{background: CARD, border: `4px solid ${INK}`, borderRadius: 22, boxShadow: `inset 0 0 0 7px ${CARD}, inset 0 0 0 9.5px ${INK}, ${CARD_SHADOW}`, padding: '22px 34px 26px'}}>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK_SOFT}}>Memory aid</div>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 60, lineHeight: 1.05, color: INK, marginTop: 6}}>Flip the graph, flip the slope.</div>
					<div style={{height: 2, background: 'rgba(60,45,20,0.14)', margin: '18px 0 10px'}} />
					<div style={{display: 'flex', alignItems: 'center', gap: 22, marginTop: 10, opacity: prog(f, 80, 12)}}>
						<div style={{position: 'relative', width: 64, height: 120, flex: 'none'}}><PhoneIcon h={116} /></div>
						<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 50, color: NAVY}}>e<Pow>x</Pow>: slope = height</span>
					</div>
					<div style={{display: 'flex', alignItems: 'center', gap: 22, marginTop: 10, opacity: prog(f, 90, 12)}}>
						<div style={{position: 'relative', width: 64, height: 110, flex: 'none'}}><WatchIcon h={88} y={10} /></div>
						<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 50, color: INK}}>ln x: slope = 1/x (x &gt; 0)</span>
					</div>
					<div style={{...DISPLAY(44), marginTop: 18, opacity: prog(f, 104, 12)}}><LnRule /></div>
				</div>
			</Enter>
		</>
	);
};
