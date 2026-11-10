// Scenes 10 to 15: attempt 1 and its feedback, attempt 2 and its feedback, the handoff to eˣ/(x + 1), the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {
	Card, CardTitle, FrameSvg, FunctionSimulator, GivensStrip, HandTag, KeyNotesBullets, MarkSpan, MistakeCard, QuestionCard, RolesOn, SceneHeading, TaskStrip, vis,
	MATH_ANSWER, MATH_STRAND_ACCENT, CARD, CARD_SHADOW,
} from '../../math/studio';
import {cue, hold} from './common';
import {
	AMB, AttemptStage, Bl, Chip, CurveLabel, DISPLAY, DeckImg, EXQ, Legend, RectPic, RecallChip, Slot, Sup, TanLine, Te, VIOLET, XEMX, gmap,
} from './parts';

const EX = <>e<Sup>x</Sup></>;
const EMX = <>e<Sup>−x</Sup></>;
const Answer: React.FC<{at: number; x: number; y: number; size?: number; children: React.ReactNode}> = ({at, x, y, size = 52, children}) => (
	<Enter at={at} style={{position: 'absolute', left: x, top: y}}>
		<div style={{display: 'inline-block', background: CARD, border: `5px solid ${MATH_ANSWER}`, borderRadius: 16, padding: '0 20px 4px', boxShadow: CARD_SHADOW, ...DISPLAY(size)}}>{children}</div>
	</Enter>
);
const Line: React.FC<{at: number; x: number; y: number; size?: number; dim?: number; children: React.ReactNode}> = ({at, x, y, size = 50, dim = 0, children}) => (
	<Enter at={at} style={{position: 'absolute', left: x, top: y}}><span style={{...DISPLAY(size), opacity: 1 - 0.3 * dim}}>{children}</span></Enter>
);

// ---------- 10. attempt 1 ----------
const Q1: React.FC<{u?: {a: number; b: number}}> = ({u}) => (
	<>
		<div>Differentiate f(x) = {u ? <MarkSpan kind="underline" at={u.a}>x²e<Sup>x</Sup></MarkSpan> : <>x²e<Sup>x</Sup></>}.</div>
		<div style={{marginTop: 10}}>Give your answer in {u ? <MarkSpan kind="underline" at={u.b}>fully factorised</MarkSpan> : 'fully factorised'} form.</div>
	</>
);
export const S10: React.FC = () => {
	const id = 'scene-10';
	return (
		<AttemptStage hold={hold(id)} pauseAt={cue(id, 'Pause here')} given={[<>f(x) = x²e<Sup>x</Sup></>, <>fully factorised</>]}
			picture={<RectPic across={EX} up="x²" inside={<>area x²e<Sup>x</Sup></>} />}>
			<Q1 />
		</AttemptStage>
	);
};

// ---------- 11. feedback 1 ----------
export const S11: React.FC = () => {
	const id = 'scene-11';
	const f = useCurrentFrame();
	const start = cue(id, 'u is'), twoX = cue(id, 'two x'), vIs = cue(id, 'v is'), soF = cue(id, 'So f prime'), both = cue(id, 'Both terms'), plusTwo = cue(id, 'plus two'), mult = cue(id, 'Multiplying');
	return (
		<>
			<TaskStrip text="Check your working" at={2} />
			<Legend />
			<RolesOn on={f >= start}>
				<QuestionCard at={-40} shrinkAt={-30} w={1460}><Q1 u={{a: twoX, b: plusTwo}} /></QuestionCard>
			</RolesOn>
			<GivensStrip x={1170} y={168} maxW={660} items={[
				{content: <>u = x²</>, role: 'b', at: start},
				{content: <>v = {EX}</>, role: 'a', at: vIs},
			]} />
			<Line at={twoX} x={96} y={330}><Te>u′ = 2x</Te>,  <Bl>v′ = {EX}</Bl></Line>
			<Line at={soF} x={96} y={430} dim={prog(f, plusTwo, 14)}>f′(x) = <Te>2x{EX}</Te> + <Bl>x²{EX}</Bl></Line>
			<Enter at={both} style={{position: 'absolute', left: 96, top: 530}}><span style={DISPLAY(36, INK_SOFT, 700)}>shared factor: <MarkSpan kind="circle" at={both + 6} color={INK}>x{EX}</MarkSpan></span></Enter>
			<Answer at={plusTwo} x={84} y={600}>f′(x) = x{EX}(x + 2)</Answer>
			<MistakeCard x={96} y={760} w={1000} at={mult} size={44} wrong={<>f′(x) = 2x{EX}</>} caption="each factor takes a turn" />
			<div style={{position: 'absolute', left: 1150, top: 330}}>
				<RectPic w={680} h={380} across={EX} up="x²" roles strips={f >= soF} />
			</div>
			<HandTag x={1160} y={760} text="two strips: two turns" at={soF + 10} size={40} color={INK} />
		</>
	);
};

// ---------- 12. attempt 2 ----------
const Q2: React.FC<{u?: {a: number; b: number}}> = ({u}) => (
	<div>Find the exact gradient of the curve y = {u ? <MarkSpan kind="underline" at={u.a}>x{EMX}</MarkSpan> : <>x{EMX}</>} at the point where {u ? <MarkSpan kind="underline" at={u.b}>x = 2</MarkSpan> : 'x = 2'}.</div>
);
const TICK2 = <div style={{position: 'absolute', left: 170, bottom: 20, display: 'flex', alignItems: 'center', gap: 12}}><span style={{display: 'inline-block', width: 4, height: 30, background: INK}} /><span style={DISPLAY(34, INK, 800)}>x = 2</span></div>;
export const S12: React.FC = () => {
	const id = 'scene-12';
	return (
		<AttemptStage hold={hold(id)} pauseAt={cue(id, 'Pause here')} heading="Last one" given={[<>y = x{EMX}</>, <>x = 2</>, <>exact gradient</>]}
			picture={<RectPic across={EMX} up="x" extra={TICK2} />}>
			<Q2 />
		</AttemptStage>
	);
};

// ---------- 13. feedback 2 ----------
export const S13: React.FC = () => {
	const id = 'scene-13';
	const f = useCurrentFrame();
	const start = cue(id, 'u is'), vIs = cue(id, 'v is'), vprime = cue(id, 'minus e to the minus x'), so = cue(id, 'So d y'), atTwo = cue(id, 'At x equals two'), three = cue(id, 'one three'), lose = cue(id, 'Lose');
	const G = {x: 1110, y: 300, w: 714, h: 480};
	const W = {x: [-0.5, 4] as [number, number], y: [-0.5, 0.5] as [number, number]};
	const M = gmap(G.x, G.y, G.w, G.h, W);
	const X = 2, Y = 2 * Math.exp(-2), m = -Math.exp(-2);
	return (
		<>
			<TaskStrip text="Check your working" at={2} />
			<Legend />
			<RolesOn on={f >= start}>
				<QuestionCard at={-40} shrinkAt={-30} w={1460} heading="Last one"><Q2 u={{a: vIs, b: atTwo}} /></QuestionCard>
			</RolesOn>
			<GivensStrip x={1170} y={168} maxW={660} items={[
				{content: <>u = x</>, role: 'b', at: start},
				{content: <>v = {EMX}</>, role: 'a', at: vIs},
				{content: <>x = 2</>, at: atTwo},
			]} />
			<Line at={start} x={96} y={310} size={52}><Te>u = x, u′ = 1</Te></Line>
			<Card x={96} y={560} w={1000} at={-30} out={so - 10} pad="14px 26px 16px">
				<CardTitle>Plan</CardTitle>
				{[<>1. Label u and v; check v for an inside.</>, <>2. <Te>u′v</Te> + <Bl>uv′</Bl>, then factorise.</>, <>3. Substitute x = 2.</>].map((t, i) => <div key={i} style={{...DISPLAY(38, INK, 700), marginTop: 4}}>{t}</div>)}
			</Card>
			<Line at={vIs + 20} x={96} y={400} size={52}><Bl>v = e<Sup><Slot>−x</Slot></Sup>, v′ = <MarkSpan kind="box" at={vprime + 20} role="a">−</MarkSpan>{EMX}</Bl></Line>
			<HandTag x={780} y={436} text="from the inside" at={vprime + 30} size={38} role="a" />
			<Line at={so} x={96} y={500} size={52} dim={prog(f, atTwo, 14)}>dy/dx = <Te>{EMX}</Te> − <Bl>x{EMX}</Bl> = {EMX}(1 − x)</Line>
			<Answer at={atTwo + 20} x={84} y={596}>x = 2: dy/dx = −e<Sup>−2</Sup></Answer>
			<RecallChip x={690} y={616} at={three} size={34}>≈ −0.135</RecallChip>
			<MistakeCard x={96} y={730} w={980} at={lose} size={44} wrong={<>{EMX}(1 + x): 3e<Sup>−2</Sup> &gt; 0</>} caption="the inside −x gives a minus" />
			<FunctionSimulator x={G.x} y={G.y} width={G.w} height={G.h} window={W} family={XEMX} timeline={[{frame: 0, x: X}]} color={INK}
				xTicks={[1, 2, 3, 4]} yTicks={[-0.4, 0.4]} xLabel="x" yLabel="y" point={{at: atTwo}}
				overlay={() => <FrameSvg><TanLine M={M} X={X} Y={Y} m={m} half={130} opacity={prog(f, three, 12)} /></FrameSvg>} />
			<CurveLabel x={M.pt(1.6, 0.47)[0]} y={M.pt(1.6, 0.47)[1]} size={40}>y = x{EMX}</CurveLabel>
			<HandTag x={M.pt(2.2, 0)[0]} y={M.pt(0, 0.12)[1]} text="falling here" at={lose + 30} size={38} color={VIOLET} />
		</>
	);
};

// ---------- 14. handoff: eˣ/(x + 1) ----------
export const S14: React.FC = () => {
	const id = 'scene-14';
	const f = useCurrentFrame();
	const next = cue(id, 'Next'), gap = cue(id, 'gap'), so = cue(id, 'So how');
	const S = {x: 520, y: 250, w: 1300, h: 640};
	const W = {x: [-3, 2.5] as [number, number], y: [-4, 5] as [number, number]};
	const M = gmap(S.x, S.y, S.w, S.h, W);
	const [ax, ay0] = M.pt(-1, 5), [, ay1] = M.pt(-1, -4), [p0x, p0y] = M.pt(0, 1);
	const glow = vis(f, gap, gap + 60);
	return (
		<>
			<SceneHeading text="Next: one function divided by another" at={-24} />
			<div style={{position: 'absolute', left: 96, top: 162}}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: INK_SOFT}}>So far: each factor takes a turn; the other one stays.</span></div>
			<div style={{position: 'absolute', left: 96, top: 250, width: 400, background: CARD, borderRadius: 18, padding: '14px 22px', boxShadow: CARD_SHADOW, border: '2.5px solid rgba(60,45,20,0.10)'}}>
				<div style={DISPLAY(28, INK_SOFT, 700)}>This video</div>
				<div style={DISPLAY(44)}>(uv)′ = <Te>u′v</Te> + <Bl>uv′</Bl></div>
				<div style={{position: 'relative', height: 120, marginTop: 10}}><DeckImg x={0} y={0} w={340} /></div>
			</div>
			<FunctionSimulator x={S.x} y={S.y} width={S.w} height={S.h} window={W} family={EXQ} timeline={[{frame: 0, x: 0}]} color={INK} draw={{at: next, dur: 40}}
				xTicks={[-3, -2, -1, 1, 2]} yTicks={[-4, -2, 2, 4]} xLabel="x" yLabel="y" asymptotes={[-1]} point={{at: so}}
				overlay={() => <FrameSvg>{glow > 0 ? <line x1={ax} x2={ax} y1={ay0} y2={ay1} stroke={AMB} strokeWidth={8} strokeDasharray="12 10" opacity={glow} /> : null}{f >= so ? <circle cx={p0x} cy={p0y} r={36} fill="none" stroke={INK} strokeWidth={4} opacity={prog(f, so, 10)} /> : null}</FrameSvg>} />
			<CurveLabel x={M.pt(0.6, 4.6)[0]} y={M.pt(0.6, 4.6)[1]} at={next + 20} size={46}>y = <Frac2 n={EX} d="x + 1" /></CurveLabel>
			<CurveLabel x={ax + 12} y={ay0 + 10} at={next + 20} size={36} color={INK_SOFT}>x = −1</CurveLabel>
			<Chip x={M.pt(-2.9, 0)[0]} y={M.pt(0, 4.4)[1]} at={gap} size={38} color={AMB}>bottom = 0 at x = −1</Chip>
			<Chip x={p0x + 50} y={p0y - 110} at={so + 10} size={44} color={VIOLET}><span style={{color: VIOLET}}>gradient ?</span></Chip>
			<Chip x={96} y={720} w={400} at={next + 20} size={38} color={MATH_STRAND_ACCENT}>Next: the quotient rule</Chip>
		</>
	);
};
const Frac2: React.FC<{n: React.ReactNode; d: React.ReactNode}> = ({n, d}) => (
	<span style={{display: 'inline-flex', flexDirection: 'column', alignItems: 'center', verticalAlign: 'middle', fontSize: '0.8em', lineHeight: 1.08}}>
		<span>{n}</span><span style={{alignSelf: 'stretch', height: 4, background: 'currentColor'}} /><span>{d}</span>
	</span>
);

// ---------- 15. key notes ----------
export const S15: React.FC = () => {
	const f = useCurrentFrame();
	const items = [
		{content: <>Product rule: (uv)′ = <Te>u′v</Te> + <Bl>uv′</Bl></>, at: 10},
		{content: <>It is not u′v′ (that keeps neither factor)</>, at: 22},
		{content: <>Check each factor for an inside: (sin 2x)′ = 2 cos 2x</>, at: 34},
		{content: <>Keep a factor's domain: {EX} ln x needs <span style={{color: AMB}}>x &gt; 0</span></>, at: 46},
		{content: <>Factorise: ({EX} sin x)′ = {EX}(sin x + cos x)</>, at: 58},
	];
	return (
		<>
			<SceneHeading text="Key notes: what to write in your book" at={2} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('scene-15', 'Pause')} size={42} color={MATH_STRAND_ACCENT} anchor="end" />
			<KeyNotesBullets x={110} y={220} w={1040} items={items} size={42} gap={56} />
			<Enter at={70} style={{position: 'absolute', left: 1180, top: 196, width: 644}}>
				<div style={{background: CARD, border: `4px solid ${INK}`, borderRadius: 22, boxShadow: `inset 0 0 0 7px ${CARD}, inset 0 0 0 9.5px ${INK}, ${CARD_SHADOW}`, padding: '22px 32px 26px'}}>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK_SOFT}}>Memory aid</div>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 58, lineHeight: 1.05, color: INK, marginTop: 6}}>Each factor takes a turn; the other one stays.</div>
					<div style={{height: 2, background: 'rgba(60,45,20,0.14)', margin: '18px 0 10px'}} />
					<div style={{position: 'relative', height: 130, opacity: prog(f, 80, 12)}}><DeckImg x={0} y={10} w={360} /></div>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, lineHeight: 1.1, opacity: prog(f, 90, 12)}}><Te>length's growth × width</Te>, plus <Bl>length × width's growth</Bl></div>
					<div style={{...DISPLAY(40), marginTop: 14, opacity: prog(f, 100, 12)}}>(uv)′ = <Te>u′v</Te> + <Bl>uv′</Bl></div>
				</div>
			</Enter>
		</>
	);
};
