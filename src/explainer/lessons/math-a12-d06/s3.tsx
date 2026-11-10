// Scenes 10 to 15: attempt 1 and its feedback, attempt 2 and its feedback, the handoff to eˣ sin x, the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {
	Card, CardTitle, FrameSvg, FunctionSimulator, GivensStrip, HandTag, KeyNotesBullets, MarkSpan, MistakeCard, QuestionCard, RolesOn, SceneHeading, TaskStrip,
	MATH_ANSWER, MATH_STRAND_ACCENT, CARD, CARD_SHADOW,
} from '../../math/studio';
import {cue, hold, PI} from './common';
import {
	AMB, Am, AttemptStage, BLUE, Bike, Bl, Chip, CrankIcon, CurveLabel, DISPLAY, EXSIN, Frac, HANDOFF_STAGE, HANDOFF_WIN, LabelledRow, Legend, NumberLine, RecallChip, SINLN, Sq, SqP, StructurePic, Sup, TEAL, TanLine, Te, VIOLET, gmap,
} from './parts';

const Answer: React.FC<{at: number; x: number; y: number; size?: number; children: React.ReactNode}> = ({at, x, y, size = 52, children}) => (
	<Enter at={at} style={{position: 'absolute', left: x, top: y}}>
		<div style={{display: 'inline-block', background: CARD, border: `5px solid ${MATH_ANSWER}`, borderRadius: 16, padding: '0 20px 4px', boxShadow: CARD_SHADOW, ...DISPLAY(size)}}>{children}</div>
	</Enter>
);

// ---------- 10. attempt 1 ----------
const Q1: React.FC<{u?: {a: number; b: number}}> = ({u}) => (
	<div>Differentiate y = {u ? <MarkSpan kind="underline" at={u.a}>ln(x² − 9)</MarkSpan> : 'ln(x² − 9)'}, and state the {u ? <MarkSpan kind="underline" at={u.b}>values of x</MarkSpan> : 'values of x'} for which your answer is valid.</div>
);
export const S10: React.FC = () => {
	const id = 'scene-10';
	return (
		<AttemptStage hold={hold(id)} pauseAt={cue(id, 'Pause here')} given={[<>y = ln(x² − 9)</>, <>state where it is valid</>]}
			picture={<StructurePic outer="ln" inner="x² − 9" />}>
			<Q1 />
		</AttemptStage>
	);
};

// ---------- 11. feedback 1 ----------
export const S11: React.FC = () => {
	const id = 'scene-11';
	const f = useCurrentFrame();
	const start = cue(id, 'The inside'), twoX = cue(id, 'derivative two x'), nine = cue(id, 'minus nine', 2), logNeeds = cue(id, 'The log needs'), three = cue(id, 'more than three'), saying = cue(id, 'Saying only'), between = cue(id, 'Between');
	return (
		<>
			<TaskStrip text="Check your working" at={2} />
			<Legend items={[[BLUE, 'inside slope'], [TEAL, 'outside'], [AMB, 'domain']]} />
			<RolesOn on={f >= start}>
				<QuestionCard at={-40} shrinkAt={-30} w={1460}><Q1 u={{a: start + 10, b: three}} /></QuestionCard>
			</RolesOn>
			<GivensStrip x={1170} y={168} maxW={660} items={[
				{content: <>inside: x² − 9</>, at: start},
				{content: <><Te>outside: ln(<Sq />)</Te>, <Am>needs <Sq /> &gt; 0</Am></>, at: start + 20},
			]} />
			<LabelledRow x={96} y={350} label="inside slope" color={BLUE} at={twoX}><Bl>2x</Bl></LabelledRow>
			<Card x={96} y={470} w={1000} at={-30} out={nine - 8} pad="14px 26px 16px">
				<CardTitle>Plan</CardTitle>
				{[<>1. Find the inside slope.</>, <>2. dy/dx = inside slope ÷ inside.</>, <>3. The log needs the inside &gt; 0.</>].map((t, i) => <div key={i} style={{...DISPLAY(38, INK, 700), marginTop: 4}}>{t}</div>)}
			</Card>
			<Answer at={nine} x={84} y={460}>dy/dx = <Frac n={<Bl>2x</Bl>} d="x² − 9" /></Answer>
			<Enter at={logNeeds} style={{position: 'absolute', left: 96, top: 600}}><span style={DISPLAY(44)}>need <Am>x² − 9 &gt; 0</Am>, so x² &gt; 9</span></Enter>
			<Enter at={-30} style={{position: 'absolute', left: 96, top: 668}}>
				<NumberLine w={1040} h={170} size={44} bold range={[-7, 7]} shade={f >= three ? [{from: -8, to: -3}, {from: 3, to: 8}] : []} circles={[{x: -3, open: true, color: AMB}, {x: 3, open: true, color: AMB}]} ticks={[{x: -6, label: '−6'}, {x: -3, label: '−3'}, {x: 0, label: '0'}, {x: 3, label: '3'}, {x: 6, label: '6'}]}
					label={f >= between ? {x: 0, text: 'inside negative: no log'} : undefined} />
			</Enter>
			<Answer at={three} x={1160} y={820} size={52}><Am>x &lt; −3 or x &gt; 3</Am></Answer>
			<div style={{position: 'absolute', left: 1150, top: 330}}>
				<StructurePic w={680} h={290} k={1} outer="ln" inner="x² − 9" roles />
			</div>
			<MistakeCard x={1150} y={640} w={680} at={saying} size={44} wrong={<>valid for x ≠ ±3</>} caption="−3 < x < 3: no log" />
		</>
	);
};

// ---------- 12. attempt 2 ----------
const Q2: React.FC<{u?: {a: number; b: number; c: number}}> = ({u}) => (
	<>
		<div>Let y = {u ? <MarkSpan kind="underline" at={u.a}>sin(ln x)</MarkSpan> : 'sin(ln x)'}, for x &gt; 0.</div>
		<div style={{marginTop: 10}}>(a) Find dy/dx.</div>
		<div style={{marginTop: 6}}>(b) Find the exact gradient of the curve at {u ? <MarkSpan kind="underline" at={u.c}>x = e</MarkSpan> : 'x = e'}.</div>
	</>
);
const LINE_E = <NumberLine w={300} h={140} size={40} bold range={[-1, 4]} shade={[{from: 0, to: 5, color: '#ddd5c6'}]} circles={[{x: 0, open: true, color: INK_SOFT}]} ticks={[{x: 0, label: '0'}]} mark={{x: Math.E, label: 'x = e', color: INK}} />;
export const S12: React.FC = () => {
	const id = 'scene-12';
	return (
		<AttemptStage hold={hold(id)} pauseAt={cue(id, 'Pause here')} heading="Last one" size={46} given={[<>y = sin(ln x)</>, <>x &gt; 0</>, <>x = e</>]}
			picture={<StructurePic outer="sin" inner="ln x" line={LINE_E} />}>
			<Q2 />
		</AttemptStage>
	);
};

// ---------- 13. feedback 2 ----------
export const S13: React.FC = () => {
	const id = 'scene-13';
	const f = useCurrentFrame();
	const start = cue(id, 'The outside'), lnx = cue(id, 'natural log of x'), so = cue(id, 'So d y'), oneOver = cue(id, 'one over x'), atE = cue(id, 'At x equals e'), overE = cue(id, 'over e'), left = cue(id, 'If you left');
	const G = {x: 1150, y: 320, w: 680, h: 440};
	const W = {x: [0, 8] as [number, number], y: [-1.3, 1.3] as [number, number]};
	const M = gmap(G.x, G.y, G.w, G.h, W);
	return (
		<>
			<TaskStrip text="Check your working" at={2} />
			<Legend />
			<RolesOn on={f >= start}>
				<QuestionCard at={-40} shrinkAt={-30} w={1460} size={46} heading="Last one"><Q2 u={{a: lnx, b: 0, c: atE}} /></QuestionCard>
			</RolesOn>
			<GivensStrip x={1150} y={168} maxW={680} items={[
				{content: <>outside: sin(<Sq />)</>, role: 'b', at: start},
				{content: <>inside: ln x</>, at: lnx},
				{content: <>x = e</>, at: atE},
			]} />
			<Enter at={so} style={{position: 'absolute', left: 96, top: 360}}><span style={DISPLAY(52)}>dy/dx = <Te>cos(ln x)</Te> × <Bl><Frac n="1" d="x" /></Bl></span></Enter>
			<RecallChip x={760} y={378} at={oneOver + 10} size={30}>d03: (ln x)′ = 1/x</RecallChip>
			<Answer at={oneOver + 24} x={84} y={480}>= <Frac n={<Te>cos(ln x)</Te>} d={<Bl>x</Bl>} /></Answer>
			<Answer at={overE - 10} x={84} y={630} size={48}>at x = e: <Frac n="cos(ln e)" d="e" /> = <Frac n="cos 1" d="e" /></Answer>
			<RecallChip x={800} y={660} at={atE + 30} size={30}>ln e = 1</RecallChip>
			<RecallChip x={800} y={716} at={overE + 10} size={30}>≈ 0.199</RecallChip>
			<FunctionSimulator x={G.x} y={G.y} width={G.w} height={G.h} window={W} family={SINLN} timeline={[{frame: 0, x: Math.E}]} color={INK}
				xTicks={[{value: Math.E, label: 'e'}, 4, 6, 8]} yTicks={[-1, 1]} xLabel="x" yLabel="y"
				point={{at: atE}} tangent={{at: overE, halfLength: 140}} />
			<CurveLabel x={M.pt(4.3, 1.05)[0]} y={M.pt(4.3, 1.05)[1] - 60} size={40}>y = sin(ln x), x &gt; 0</CurveLabel>
			<HandTag x={M.pt(Math.E, 0)[0] + 30} y={M.pt(0, 0.4)[1]} text="slope ≈ 0.199" at={overE + 16} size={38} color={VIOLET} />
			<MistakeCard x={96} y={800} w={1000} at={left} size={44} wrong={<>cos 1 ≈ 0.540</>} caption="missing × 1/x, the inside slope" />
		</>
	);
};

// ---------- 14. handoff: eˣ sin x ----------
export const ROW4 = (size: number) => (
	<>
		<div style={DISPLAY(size)}>e<Sup><Sq /></Sup> → <Te>e<Sup><Sq /></Sup></Te> × <SqP /></div>
		<div style={DISPLAY(size)}>ln(<Sq />) → <Frac n={<SqP />} d={<Sq />} />, <Am><Sq /> &gt; 0</Am></div>
		<div style={DISPLAY(size)}>sin(<Sq />) → <Te>cos(<Sq />)</Te> × <SqP /></div>
		<div style={DISPLAY(size)}>cos(<Sq />) → <Te>−sin(<Sq />)</Te> × <SqP /></div>
	</>
);
/** d06's final-frame chrome (heading, recap line, the four outsides card, the "Next" chip); d07 opens on it. */
export const HandoffChrome: React.FC<{cardO?: number; chipAt?: number; headingOut?: number; recapO?: number; headingAt?: number}> = ({cardO = 1, chipAt = -30, headingOut, recapO = 1, headingAt = -24}) => (
	<>
		<SceneHeading text="Next: two functions multiplied" at={headingAt} out={headingOut} />
		<div style={{position: 'absolute', left: 96, top: 162, opacity: recapO}}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: INK_SOFT}}>So far: outside slope at the inside, times the inside slope.</span></div>
		<div style={{position: 'absolute', inset: 0, opacity: cardO}}>
			<div style={{position: 'absolute', left: 96, top: 250, width: 400, display: 'grid', rowGap: 10, background: CARD, borderRadius: 18, padding: '14px 22px', boxShadow: CARD_SHADOW, border: '2.5px solid rgba(60,45,20,0.10)'}}>
				<div style={DISPLAY(28, INK_SOFT, 700)}>The four outsides</div>
				{ROW4(34)}
			</div>
			<Chip x={96} y={720} w={400} at={chipAt} size={38} color={MATH_STRAND_ACCENT}>Next: the product rule with the new functions</Chip>
		</div>
	</>
);
export const S14: React.FC = () => {
	const id = 'scene-14';
	const f = useCurrentFrame();
	const log = cue(id, 'And for a log'), next = cue(id, 'Next'), slope = cue(id, 'slope', 3);
	const S = HANDOFF_STAGE;
	const M = gmap(S.x, S.y, S.w, S.h, HANDOFF_WIN);
	const before = 1 - prog(f, next - 6, 14);
	const X0 = PI / 2, Y0 = Math.exp(X0);
	return (
		<>
			<HandoffChrome cardO={0} />
			<div style={{position: 'absolute', inset: 0, opacity: before}}>
				<div style={{position: 'absolute', left: 96, top: 250, background: CARD, borderRadius: 20, padding: '18px 32px 22px', boxShadow: CARD_SHADOW, border: '3px solid rgba(60,45,20,0.14)', display: 'grid', rowGap: 14}}>
					<div style={DISPLAY(30, INK_SOFT, 700)}>This video: the four outsides</div>
					{ROW4(52)}
				</div>
				<Bike x={1050} y={330} w={760} theta={(f / 30) * 2.2} dot={false} />
				<HandTag x={1060} y={820} text="inside slope: how fast the inside turns" at={-30} size={40} role="a" />
				<HandTag x={1060} y={880} text="a log: keep the inside positive" at={log} size={40} color={AMB} />
			</div>
			<div style={{position: 'absolute', inset: 0, opacity: prog(f, next, 14)}}>
				<HandoffChrome chipAt={next + 20} recapO={0} headingOut={-1000} />
				<FunctionSimulator x={S.x} y={S.y} width={S.w} height={S.h} window={HANDOFF_WIN} family={EXSIN} timeline={[{frame: 0, x: X0}]} color={INK} draw={{at: next, dur: 40}}
					xTicks={[{value: PI / 4, label: 'π/4'}, {value: PI / 2, label: 'π/2'}, {value: 3 * PI / 4, label: '3π/4'}, {value: PI, label: 'π'}]} yTicks={[2, 4, 6, 8]} xLabel="x (radians)" yLabel="y"
					curves={[
						{fn: x => Math.exp(x), at: slope, color: TEAL, width: 4, dash: '12 9', domain: [-0.5, Math.log(8.2)]},
						{fn: x => Math.sin(x), at: slope, color: BLUE, width: 4, dash: '12 9'},
					]}
					point={{at: next + 30}}
					overlay={() => <FrameSvg><TanLine M={M} X={X0} Y={Y0} m={Y0} half={170} opacity={prog(f, next + 34, 12)} /></FrameSvg>} />
				<CurveLabel x={M.pt(0.05, 7.6)[0]} y={M.pt(0.05, 7.6)[1]} at={next + 30} size={46}>y = e<Sup>x</Sup> sin x</CurveLabel>
				<CurveLabel x={M.pt(1.75, 6.3)[0]} y={M.pt(1.75, 6.3)[1]} at={slope} size={38} color={TEAL}>e<Sup>x</Sup></CurveLabel>
				<CurveLabel x={M.pt(2.8, 1.5)[0]} y={M.pt(2.8, 1.5)[1]} at={slope} size={38} color={BLUE}>sin x</CurveLabel>
				<Chip x={M.pt(X0, 0)[0] - 330} y={M.pt(0, Y0)[1] - 40} at={next + 40} size={44} color={VIOLET}><span style={{color: VIOLET}}>gradient ?</span></Chip>
			</div>
		</>
	);
};

// ---------- 15. key notes ----------
export const S15: React.FC = () => {
	const f = useCurrentFrame();
	const items = [
		{content: <>Chain rule: d/dx f(g(x)) = <Te>f′(g(x))</Te> × <Bl>g′(x)</Bl></>, at: 10},
		{content: <>(e<Sup>f(x)</Sup>)′ = <Bl>f′(x)</Bl> e<Sup>f(x)</Sup></>, at: 22},
		{content: <>(ln f(x))′ = <Bl>f′(x)</Bl>/f(x), where <Am>f(x) &gt; 0</Am></>, at: 34},
		{content: <>Radians: (sin f)′ = <Bl>f′</Bl> cos f; (cos f)′ = −<Bl>f′</Bl> sin f</>, at: 46},
		{content: <>Domain: ln needs <Am>f(x) &gt; 0</Am>, not just f(x) ≠ 0</>, at: 58},
	];
	return (
		<>
			<SceneHeading text="Key notes: what to write in your book" at={2} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('scene-15', 'Pause')} size={42} color={MATH_STRAND_ACCENT} anchor="end" />
			<KeyNotesBullets x={110} y={220} w={1040} items={items} size={42} gap={56} />
			<Enter at={70} style={{position: 'absolute', left: 1180, top: 196, width: 644}}>
				<div style={{background: CARD, border: `4px solid ${INK}`, borderRadius: 22, boxShadow: `inset 0 0 0 7px ${CARD}, inset 0 0 0 9.5px ${INK}, ${CARD_SHADOW}`, padding: '22px 32px 26px'}}>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK_SOFT}}>Memory aid</div>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 58, lineHeight: 1.05, color: INK, marginTop: 6}}>Outside slope at the inside, times the inside slope.</div>
					<div style={{height: 2, background: 'rgba(60,45,20,0.14)', margin: '18px 0 10px'}} />
					<div style={{display: 'flex', alignItems: 'center', gap: 20, marginTop: 8, opacity: prog(f, 80, 12)}}>
						<div style={{position: 'relative', width: 120, height: 120, flex: 'none'}}><CrankIcon size={120} theta={0.9} /></div>
						<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46, lineHeight: 1.05, color: BLUE}}>inside slope: how fast the inside turns (the crank speed)</span>
					</div>
					<div style={{...DISPLAY(38), marginTop: 16, opacity: prog(f, 94, 12)}}>d/dx sin(x²) = <Bl>2x</Bl> <Te>cos(x²)</Te></div>
				</div>
			</Enter>
		</>
	);
};
