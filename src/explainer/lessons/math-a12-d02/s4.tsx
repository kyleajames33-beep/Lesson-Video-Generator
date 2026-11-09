// Scenes 13 to 16: attempt 2 and its feedback, the handoff to ln x, the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {
	Card, CardTitle, EXP_BASE_FAMILY, FunctionSimulator, GivensStrip, HandTag, KeyNotesBullets, MarkSpan, MistakeCard, PlateImg, Pow, QuestionAxes, QuestionCard, Role, RolesOn,
	SceneHeading, TaskStrip, WorkingRows, MATH_BLUE, MATH_GRADIENT, MATH_STRAND_ACCENT, CARD, CARD_SHADOW,
} from '../../math/studio';
import {cue, hold} from './common';
import {AttemptStage, CurveLabel, D02_PLATES, DISPLAY, JarThumb, Legend, Ln, RatioPanel, Rule} from './parts';

const EXP = EXP_BASE_FAMILY;
const HALF = '½';

// ---------- 13. attempt 2 ----------
export const S13: React.FC = () => {
	const id = 'scene-13';
	return (
		<AttemptStage hold={hold(id)} pauseAt={cue(id, 'Pause here')} given={[<>g(x) = ({HALF})<Pow>x</Pow></>, <>at x = 2</>, <>exact value, then the sign</>]}
			picture={<QuestionAxes w={720} h={380} window={{x: [-1, 3], y: [-0.6, 2.4]}} fn={() => 0} color="transparent" point={{x: 2, tag: 'gradient here?'}} xTicks={[{value: 2, label: '2'}]} />}>
			<div>Consider the function g(x) = ({HALF})<Pow>x</Pow>.</div>
			<div style={{marginTop: 16}}>(a) Find the exact value of g′(2).</div>
			<div style={{marginTop: 10}}>(b) Explain the sign of g′(2).</div>
		</AttemptStage>
	);
};

// ---------- 14. feedback 2 ----------
export const S14: React.FC = () => {
	const id = 'scene-14';
	const f = useCurrentFrame();
	const start = cue(id, 'G prime'), atTwo = cue(id, 'At two'), soG = cue(id, 'so g prime of two'), which = cue(id, 'which is'), four = cue(id, 'four'), neg = cue(id, "It's negative"), whileT = cue(id, 'while'), positive = cue(id, 'positive'), writing = cue(id, 'Writing');
	return (
		<>
			<TaskStrip text="Check your working" at={2} />
			<Legend />
			<RolesOn on={f >= start}>
				<QuestionCard at={-40} shrinkAt={-30}>
					<div>Consider the function g(x) = <MarkSpan kind="underline" at={start + 8}>({HALF})<Pow>x</Pow></MarkSpan>.</div>
					<div style={{marginTop: 16}}>(a) Find the <MarkSpan kind="underline" at={which}>exact</MarkSpan> value of <MarkSpan kind="underline" at={soG}>g′(2)</MarkSpan>.</div>
					<div style={{marginTop: 10}}>(b) Explain the <MarkSpan kind="underline" at={neg}>sign</MarkSpan> of g′(2).</div>
				</QuestionCard>
			</RolesOn>
			<GivensStrip x={1120} y={170} maxW={710} items={[
				{content: <>g(x) = ({HALF})<Pow>x</Pow></>, at: start},
				{content: <>x = 2</>, at: atTwo},
				{content: <>exact</>, at: which, role: 'answer'},
				{content: <>explain the sign</>, at: neg},
			]} />
			<WorkingRows x={96} y={360} w={1010} size={54} oldSize={38} gap={12} rows={[
				{left: 'rule', relation: ':', right: <>d/dx(a<Pow>x</Pow>) = (<Ln />)a<Pow>x</Pow>, a = {HALF}</>, at: -30},
				{left: 'g′(x)', right: <>(<Ln a={HALF} />)({HALF})<Pow>x</Pow></>, at: start + 6},
				{left: 'g′(2)', right: <>(<Ln a={HALF} />)({HALF})² = ¼ <Ln a={HALF} /></>, at: soG - 10},
				{right: <>−(<Ln a="2" />)/4</>, at: which, answer: true},
			]} />
			<Card x={96} y={640} w={1000} at={start + 10} out={neg - 6} pad="12px 26px 14px">
				<CardTitle>Plan</CardTitle>
				{[<>1. Copy ({HALF})<Pow>x</Pow>, multiply by <Ln a={HALF} />.</>, <>2. Put x = 2 in.</>, <>3. Explain the sign of each factor.</>].map((t, i) => <div key={i} style={{...DISPLAY(36, INK, 700), marginTop: 4}}>{t}</div>)}
			</Card>
			<HandTag x={560} y={598} text="≈ −0.173" at={four} size={48} color={INK_SOFT} />
			<Enter at={neg} style={{position: 'absolute', left: 96, top: 640, display: 'flex', gap: 22}}>
				<span style={{background: CARD, borderRadius: 14, padding: '4px 18px', border: `3px solid ${MATH_BLUE}`, ...DISPLAY(40, MATH_BLUE)}}>{HALF} &lt; 1, so ln {HALF} &lt; 0</span>
				<span style={{opacity: prog(f, whileT, 12), background: CARD, borderRadius: 14, padding: '4px 18px', border: '3px solid rgba(60,45,20,0.2)', ...DISPLAY(40)}}>({HALF})<Pow>x</Pow> &gt; 0 for every x</span>
			</Enter>
			<Enter at={positive} style={{position: 'absolute', left: 96, top: 718}}>
				<span style={DISPLAY(44)}>(−) × (+) &lt; 0, so g′(2) &lt; 0</span>
			</Enter>
			<FunctionSimulator x={1130} y={300} width={694} height={560} window={{x: [-1, 3.2], y: [0, 3]}} family={EXP} timeline={[{frame: 0, x: 2, p: {c: 0.5}}]}
				xLabel="x" yLabel="y" xTicks={[1, 2, 3]} yTicks={[1, 2, 3]} at={-30}
				point={{at: atTwo}} tangent={{at: neg, halfLength: 170}}
				overlay={g => <HandTag x={g.pt[0] - 40} y={g.pt[1] - 120} text="falling, never below 0" at={positive} size={40} color={MATH_GRADIENT} anchor="middle" />} />
			<CurveLabel x={1290} y={360} size={44}>y = ({HALF})<Pow>x</Pow></CurveLabel>
			<MistakeCard x={96} y={800} w={1728} size={44} at={writing} wrong={<>g′(2) = (ln 2)/4</>} caption="ln ½ = −ln 2: the sign flips" />
		</>
	);
};

// ---------- 15. handoff ----------
/** Final-frame geometry shared with the opening of math-a12-d03. */
export const HANDOFF_PANEL = {x: 820, y: 200, w: 1010, h: 720};
export const S15: React.FC = () => {
	const id = 'scene-15';
	const f = useCurrentFrame();
	const next = cue(id, 'Next');
	const sw = next + 30;
	const swapped = f >= sw;
	return (
		<>
			<SceneHeading text="Next: the gradient of the log curve" at={2} />
			<div style={{position: 'absolute', left: 96, top: 162}}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: INK_SOFT}}>So far: copy the exponential, then multiply by ln of the base.</span></div>
			<JarThumb y={240} label="per dollar = ln a" balance={2} rate={2 * Math.LN2} perDollar={Math.LN2} balanceAt={() => 2} out={next + 20} />
			<Enter at={sw} style={{position: 'absolute', left: 96, top: 300, width: 680}}>
				<div style={{background: CARD, borderRadius: 20, padding: '18px 30px 22px', boxShadow: CARD_SHADOW, border: '3px solid rgba(60,45,20,0.14)'}}>
					<div style={DISPLAY(30, INK_SOFT, 700)}>This video:</div>
					<div style={DISPLAY(48)}><Rule /></div>
				</div>
			</Enter>
			<RatioPanel x={HANDOFF_PANEL.x} y={HANDOFF_PANEL.y} w={HANDOFF_PANEL.w} h={HANDOFF_PANEL.h} curveAt={-60}
				color={swapped ? INK : MATH_BLUE} xLabel={swapped ? 'x' : 'base a'} yLabel={swapped ? 'y' : 'gradient ÷ height'}
				markers={[0.5, 1, 2, Math.E, 3, 4].map(a => ({a, at: -30, out: next + 6}))}
				point={{at: sw + 10}} tangent={{at: sw + 16}}
				label={{content: <span style={{color: swapped ? INK : MATH_BLUE}}>y = ln {swapped ? 'x' : 'a'}</span>, at: -30}} />
			<HandTag x={1140} y={700} text="gradient ?" at={sw + 30} size={56} color={MATH_GRADIENT} />
			<Enter at={sw + 40} style={{position: 'absolute', left: 96, top: 620}}>
				<div style={{display: 'inline-block', background: CARD, borderRadius: 18, padding: '8px 30px 12px', boxShadow: CARD_SHADOW, border: `3px solid ${MATH_STRAND_ACCENT}`, ...DISPLAY(50)}}>Next: differentiating ln x</div>
			</Enter>
			<HandTag x={110} y={860} text="our ratio points traced this curve" at={next + 10} size={40} role="a" />
		</>
	);
};

// ---------- 16. key notes ----------
export const S16: React.FC = () => {
	const f = useCurrentFrame();
	const items = [
		{content: <>For a &gt; 0: <Rule /></>, at: 10},
		{content: <>Why: a<Pow>x</Pow> = e<Pow>x <Ln /></Pow>, and du/dx = <Ln /></>, at: 22},
		{content: <>On y = a<Pow>x</Pow>: gradient = (<Ln />) × height</>, at: 34},
		{content: <>a = e gives e<Pow>x</Pow>. a = 1: gradient 0.<br />0 &lt; a &lt; 1: <Ln /> &lt; 0, so the curve falls.</>, at: 46},
		{content: <>Trap: not x·a<Pow>x − 1</Pow>.<br /><Ln /> is a number, not ln x.</>, at: 58},
	];
	return (
		<>
			<SceneHeading text="Key notes: what to write in your book" at={2} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('scene-16', 'Pause')} size={42} color={MATH_STRAND_ACCENT} anchor="end" />
			<KeyNotesBullets x={110} y={200} w={1000} items={items} size={38} gap={30} />
			<Enter at={70} style={{position: 'absolute', left: 1170, top: 196, width: 654}}>
				<div style={{background: CARD, border: `4px solid ${INK}`, borderRadius: 22, boxShadow: `inset 0 0 0 7px ${CARD}, inset 0 0 0 9.5px ${INK}, ${CARD_SHADOW}`, padding: '22px 34px 26px'}}>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK_SOFT}}>Memory aid</div>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 56, lineHeight: 1.05, color: INK, marginTop: 6}}>Copy the exponential, then multiply by <Role r="a">ln of the base</Role>.</div>
					<div style={{height: 2, background: 'rgba(60,45,20,0.14)', margin: '18px 0 10px'}} />
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: '#8a5a12'}}>the account key</div>
					<div style={{display: 'flex', alignItems: 'center', gap: 22, marginTop: 10, opacity: prog(f, 80, 12)}}>
						<div style={{position: 'relative', width: 80, height: 120, flex: 'none'}}><PlateImg plate={D02_PLATES.jarFull} x={4} y={0} w={74} /></div>
						<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 50, color: MATH_BLUE}}>ln a = growth per dollar</span>
					</div>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46, color: INK, marginTop: 12, opacity: prog(f, 90, 12)}}>a<Pow>x</Pow> leaves the y-axis with slope ln a</div>
					<div style={{...DISPLAY(40), marginTop: 18, opacity: prog(f, 104, 12)}}><Rule /></div>
				</div>
			</Enter>
		</>
	);
};
