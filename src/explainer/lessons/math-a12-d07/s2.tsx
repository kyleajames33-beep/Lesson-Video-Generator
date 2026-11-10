// Scenes 5 to 9: three g01 boards (eˣ sin x, eˣ ln x, x³ sin 2x), the inner 2 checked on the graph, the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, INK, INK_SOFT, prog} from '../../kit';
import {
	AreaStrips, Card, CardTitle, EquationStrip, FrameSvg, FunctionSimulator, GivensCard, HandTag, MarkSpan, MemoryAidCard, MistakeCard, SceneHeading, TaskStrip, vis,
	MATH_ANSWER, MATH_MISTAKE, CARD, CARD_SHADOW,
} from '../../math/studio';
import {cue} from './common';
import {
	AMB, Am, BLUE, Bl, Chip, CurveLabel, DECK_TOP, DISPLAY, EXLN, EXSIN, Frac, HANDOFF_WIN, Legend, PI, RecallChip, Slot, Sup, TEAL, TanLine, Te, VIOLET, X3SIN2, gmap,
} from './parts';

const EX = <>e<Sup>x</Sup></>;
const AnswerBox: React.FC<{at: number; children: React.ReactNode; size?: number; x: number; y: number}> = ({at, children, size = 52, x, y}) => (
	<Enter at={at} style={{position: 'absolute', left: x, top: y}}>
		<div style={{display: 'inline-block', background: CARD, border: `5px solid ${MATH_ANSWER}`, borderRadius: 16, padding: '0 20px 4px', boxShadow: CARD_SHADOW, ...DISPLAY(size)}}>{children}</div>
	</Enter>
);
const Plan: React.FC<{y?: number; out: number; lines: React.ReactNode[]}> = ({y = 640, out, lines}) => (
	<Card x={96} y={y} w={860} at={-30} out={out} pad="14px 26px 16px">
		<CardTitle>Plan</CardTitle>
		{lines.map((t, i) => <div key={i} style={{...DISPLAY(38, INK, 700), marginTop: 4}}>{t}</div>)}
	</Card>
);
/** A row of working (display font) that writes on at a cue. */
const Line: React.FC<{at: number; x: number; y: number; size?: number; dim?: number; children: React.ReactNode}> = ({at, x, y, size = 50, dim = 0, children}) => (
	<Enter at={at} style={{position: 'absolute', left: x, top: y}}><span style={{...DISPLAY(size - 12 * dim), opacity: 1 - 0.4 * dim}}>{children}</span></Enter>
);
const Ring: React.FC<{at: number; children: React.ReactNode}> = ({at, children}) => <MarkSpan kind="circle" at={at} color={INK} width={4}>{children}</MarkSpan>;

// ---------- 5. worked example: eˣ sin x ----------
export const S05: React.FC = () => {
	const id = 'scene-05';
	const f = useCurrentFrame();
	const ux = cue(id, 'x', 4), vx = cue(id, 'cos x'), row = cue(id, 'gives'), share = cue(id, 'Both terms'), take = cue(id, 'times sine x'), check = cue(id, 'Check pi'), thats = cue(id, "That's e to"), saw = cue(id, 'saw');
	const G = {x: 1060, y: 150, w: 764, h: 440};
	const MG = gmap(G.x, G.y, G.w, G.h, HANDOFF_WIN);
	const age = prog(f, share, 14);
	return (
		<>
			<TaskStrip text="Differentiate" at={2} />
			<Legend />
			<EquationStrip at={-30}>y = <Te>{EX}</Te> <Bl>sin x</Bl></EquationStrip>
			<GivensCard x={96} y={300} w={760} at={ux - 4} size={46} lines={[
				{content: <>u = {EX}, u′ = {EX}</>, role: 'b', at: ux},
				{content: <>v = sin x, v′ = cos x</>, role: 'a', at: vx, note: 'd05, x in radians'},
			]} />
			<Plan y={640} out={row - 10} lines={[<>1. Label u and v; find u′ and v′.</>, <>2. Write <Te>u′v</Te> + <Bl>uv′</Bl>.</>, <>3. Take out a common factor.</>]} />
			<Line at={row} x={96} y={650} dim={age}>dy/dx = <Te>{EX} sin x</Te> + <Bl>{EX} cos x</Bl></Line>
			<HandTag x={330} y={760} text="u′v" at={row + 20} out={share} size={40} role="b" />
			<HandTag x={600} y={760} text="uv′" at={row + 30} out={share} size={40} role="a" />
			<Enter at={share} style={{position: 'absolute', left: 96, top: 610}}><span style={DISPLAY(38, INK_SOFT, 700)}>shared factor: <Ring at={share + 6}>{EX}</Ring></span></Enter>
			<AnswerBox at={take} x={84} y={726}>= {EX}(sin x + cos x)</AnswerBox>
			<AnswerBox at={thats} x={84} y={840} size={42}>x = π/2: e<Sup>π/2</Sup>(1 + 0) = e<Sup>π/2</Sup> ≈ 4.810</AnswerBox>
			<FunctionSimulator x={G.x} y={G.y} width={G.w} height={G.h} window={HANDOFF_WIN} family={EXSIN} timeline={[{frame: 0, x: PI / 2}]} color={INK}
				xTicks={[{value: PI / 2, label: 'π/2'}, {value: PI, label: 'π'}]} yTicks={[4, 8]} xLabel="x" yLabel="y" point={{at: -30}} tangent={{at: -30, halfLength: 130}} />
			<CurveLabel x={MG.pt(0.0, 7.4)[0]} y={MG.pt(0, 7.4)[1]} size={40}>y = {EX} sin x</CurveLabel>
			<Chip x={MG.pt(1.75, 0)[0]} y={MG.pt(0, 3.4)[1]} at={saw - 30} size={38} color={VIOLET}><span style={{color: VIOLET}}>gradient 4.81 ✓</span></Chip>
			<MistakeCard x={1060} y={640} w={764} at={check} size={42} wrong={<>dy/dx = {EX} cos x</>} caption="slope × slope: one turn is missing" />
		</>
	);
};

// ---------- 6. a log factor keeps its domain ----------
export const S06: React.FC = () => {
	const id = 'scene-06';
	const f = useCurrentFrame();
	const zero = cue(id, 'zero'), vx = cue(id, 'over x', 1), gives = cue(id, 'That gives'), take = cue(id, 'Take out'), posX = cue(id, 'positive x'), every = cue(id, 'Every new');
	const G = {x: 1060, y: 150, w: 764, h: 500};
	const W = {x: [-0.5, 2.5] as [number, number], y: [-3, 6] as [number, number]};
	const M = gmap(G.x, G.y, G.w, G.h, W);
	return (
		<>
			<TaskStrip text="Differentiate" at={2} />
			<Legend items={[[TEAL, 'u: first factor'], [BLUE, 'v: second factor'], [AMB, 'domain']]} />
			<EquationStrip at={-30}>y = <Te>{EX}</Te> <Bl>ln x</Bl></EquationStrip>
			<Chip x={560} y={176} at={zero} size={48} color={AMB}><Am>x &gt; 0</Am></Chip>
			<GivensCard x={96} y={300} w={760} at={-30} size={46} lines={[
				{content: <>u = {EX}, u′ = {EX}</>, role: 'b', at: -30},
				{content: <>v = ln x, v′ = <Frac n="1" d="x" /></>, role: 'a', at: vx, note: 'd03, x > 0'},
			]} />
			<Plan y={620} out={gives - 10} lines={[<>1. The domain comes from ln x.</>, <>2. Write <Te>u′v</Te> + <Bl>uv′</Bl>.</>, <>3. Take out {EX}; keep x &gt; 0.</>]} />
			<Line at={gives} x={96} y={640} dim={prog(f, take, 14)}>dy/dx = <Te>{EX} ln x</Te> + <Bl>{EX} · <Frac n="1" d="x" /></Bl></Line>
			<AnswerBox at={take + 20} x={84} y={750}>= {EX}(ln x + <Frac n="1" d="x" />), <Am>x &gt; 0</Am></AnswerBox>
			<HandTag x={760} y={880} text="x > 0 carried down" at={posX} size={38} color={AMB} />
			<FunctionSimulator x={G.x} y={G.y} width={G.w} height={G.h} window={W} family={EXLN} timeline={[{frame: 0, x: 1}]} color={INK}
				xTicks={[1, 2]} yTicks={[-2, 2, 4, 6]} xLabel="x" yLabel="y" asymptotes={[0]}
				regions={[{x: [-0.5, 0], color: '#f1c97a', opacity: 0.55, at: zero}]} />
			<CurveLabel x={M.pt(1.0, 5.2)[0]} y={M.pt(1.0, 5.2)[1]} size={40}>y = {EX} ln x</CurveLabel>
			<HandTag x={M.pt(-0.45, 0)[0]} y={M.pt(0, -2.3)[1]} text="no ln x here" at={zero + 10} size={34} color={AMB} />
			<MistakeCard x={1060} y={700} w={764} at={every} size={42} wrong={<>dy/dx = {EX} · <Frac n="1" d="x" /></>} caption="both turns, not slope × slope" />
		</>
	);
};

// ---------- 7. worked example: a factor with an inside ----------
const W8 = {x: [-0.25, 2] as [number, number], y: [-8, 2] as [number, number]};
const X8_TICKS = [{value: PI / 4, label: 'π/4'}, {value: PI / 2, label: 'π/2'}, 1, 2];
export const S07: React.FC = () => {
	const id = 'scene-07';
	const f = useCurrentFrame();
	const mult = cue(id, 'multiplication'), sq = cue(id, 'squared'), check = cue(id, 'Now check'), vprime = cue(id, 'two cos two x'), r1 = cue(id, 'Then u prime'), r2 = cue(id, 'plus two x cubed'), share = cue(id, 'Both terms'), answer = cue(id, 'so the answer');
	const G = {x: 1150, y: 150, w: 674, h: 420};
	const M = gmap(G.x, G.y, G.w, G.h, W8);
	return (
		<>
			<TaskStrip text="Differentiate" at={2} />
			<Legend />
			<EquationStrip at={-30}>y = <Te>x³</Te> <Bl>sin({f >= check ? <Slot>2x</Slot> : '2x'})</Bl></EquationStrip>
			<HandTag x={600} y={200} text="× outside: product rule" at={mult} size={40} color={INK} />
			<Card x={96} y={600} w={900} at={-30} out={r1 - 10} pad="16px 30px 20px">
				<CardTitle>The structure</CardTitle>
				<div style={DISPLAY(72)}><Te>x³</Te> <MarkSpan kind="circle" at={mult + 6} color={INK} width={5}>×</MarkSpan> <Bl>sin(2x)</Bl></div>
				<div style={{...DISPLAY(34, INK, 700), marginTop: 6}}>last step: multiply, so the product rule</div>
			</Card>
			<HandTag x={560} y={290} text="inside" at={check + 20} size={36} color={INK_SOFT} />
			<GivensCard x={96} y={320} w={760} at={sq - 4} size={46} lines={[
				{content: <>u = x³, u′ = 3x²</>, role: 'b', at: sq},
				{content: <>v = sin(2x), v′ = <MarkSpan kind="box" at={vprime + 20} role="a">2</MarkSpan> cos(2x)</>, role: 'a', at: vprime},
			]} />
			<RecallChip x={96} y={540} at={vprime + 20} out={r1 - 6} size={30}>last video: (sin kx)′ = k cos kx</RecallChip>
			<HandTag x={560} y={520} text="from the inside" at={vprime + 30} out={r1} size={38} role="a" />
			<Plan y={320} out={sq - 8} lines={[<>1. Product: label u and v.</>, <>2. Check each factor for an inside.</>, <>3. <Te>u′v</Te> + <Bl>uv′</Bl>, then factorise.</>]} />
			<Line at={r1} x={96} y={600} size={46} dim={prog(f, r2, 14)}>dy/dx = <Te>3x² sin(2x)</Te> + <Bl>x³ · 2 cos(2x)</Bl></Line>
			<Line at={r2} x={96} y={690} size={46} dim={prog(f, answer, 14)}>= <Te>3<Ring at={share + 6}>x²</Ring> sin(2x)</Te> + <Bl>2x³ cos(2x)</Bl></Line>
			<AnswerBox at={answer} x={84} y={790} size={48}>= x²(3 sin(2x) + 2x cos(2x))</AnswerBox>
			<FunctionSimulator x={G.x} y={G.y} width={G.w} height={G.h} window={W8} family={X3SIN2} timeline={[{frame: 0, x: PI / 2}]} color={INK}
				xTicks={X8_TICKS} yTicks={[-6, -4, -2, 2]} xLabel="x" yLabel="y" point={{at: -30}} />
			<CurveLabel x={M.pt(0.08, -1.6)[0]} y={M.pt(0, -1.6)[1]} size={38}>y = x³ sin(2x)</CurveLabel>
			<HandTag x={M.pt(PI / 2, 0)[0] + 20} y={M.pt(0, 1.2)[1]} text="slope here?" at={-10} size={38} color={VIOLET} />
		</>
	);
};

// ---------- 8. does the inner two matter? ----------
export const S08: React.FC = () => {
	const id = 'scene-08';
	const f = useCurrentFrame();
	const check = cue(id, 'Check'), there = cue(id, 'There'), soThe = cue(id, 'So the first'), five = cue(id, 'seven five'), agrees = cue(id, 'agrees'), leave = cue(id, 'Leave out');
	const G = {x: 96, y: 160, w: 1100, h: 760};
	const M = gmap(G.x, G.y, G.w, G.h, W8);
	const X = PI / 2, m2 = -(PI ** 3) / 8;
	return (
		<>
			<SceneHeading text="Does the inner 2 matter?" at={-24} />
			<Legend />
			<FunctionSimulator x={G.x} y={G.y} width={G.w} height={G.h} window={W8} family={X3SIN2} timeline={[{frame: 0, x: X}]} color={INK}
				xTicks={X8_TICKS} yTicks={[-6, -4, -2, 2]} xLabel="x" yLabel="y" point={{at: -30}} tangent={{at: agrees, halfLength: 200}}
				overlay={() => <FrameSvg><TanLine M={M} X={X} Y={0} m={m2} half={200} color={MATH_MISTAKE} dash="14 10" opacity={vis(f, leave, 99999)} /></FrameSvg>} />
			<CurveLabel x={M.pt(0.1, -2)[0]} y={M.pt(0, -2)[1]} size={42}>y = x³ sin(2x)</CurveLabel>
			<Chip x={1240} y={170} at={-30} size={32} color={MATH_ANSWER}>dy/dx = x²(3 sin(2x) + 2x cos(2x))</Chip>
			<RecallChip x={1240} y={270} at={there} size={30}>sin π = 0, cos π = −1</RecallChip>
			<Line at={check} x={1240} y={350} size={44} dim={prog(f, soThe, 14)}>at x = π/2:</Line>
			<Line at={soThe} x={1240} y={420} size={44} dim={prog(f, five, 14)}>3(π/2)² · <Te>0</Te> + 2(π/2)³(<Bl>−1</Bl>)</Line>
			<AnswerBox at={five - 40} x={1228} y={500} size={52}>= −π³/4</AnswerBox>
			<RecallChip x={1560} y={515} at={five} size={30}>≈ −7.752</RecallChip>
			<Chip x={M.pt(X, 0)[0] + 40} y={M.pt(0, 0.9)[1]} at={agrees} size={40} color={VIOLET}><span style={{color: VIOLET}}>gradient −7.75</span></Chip>
			<MistakeCard x={1240} y={640} w={584} at={leave} size={40} wrong={<>without the 2: −π³/8 ≈ −3.88</>} caption="the inside's 2 doubles that term" />
			<HandTag x={M.pt(X, 0)[0] + 140} y={M.pt(0, -2.6)[1]} text="too shallow" at={leave + 30} size={40} color={MATH_MISTAKE} />
		</>
	);
};

// ---------- 9. memory aid ----------
export const S09: React.FC = () => {
	const id = 'scene-09';
	const f = useCurrentFrame();
	const each = cue(id, 'Each factor'), widthCh = cue(id, 'the width changes'), heightCh = cue(id, 'the height changes'), factors = cue(id, 'factors'), isnt = cue(id, "isn't the rule"), because = cue(id, 'because the two');
	const dU = 0.5 * prog(f, widthCh, 30), dV = 0.3 * prog(f, heightCh, 30);
	return (
		<>
			<SceneHeading text="Memory aid" at={-24} />
			<Legend />
			<AreaStrips x={110} y={660} u={4} v={2} du={Math.max(1e-6, dU)} dv={Math.max(1e-6, dV)} roles={{u: 'b', v: 'a', corner: 'inner'}} at={-30}
				plate={{spec: DECK_TOP, region: DECK_TOP.box, u0: 4, v0: 2, w: 520}} />
			<div style={{position: 'absolute', left: 110, top: 676, ...DISPLAY(36, TEAL)}}>length (u)</div>
			<div style={{position: 'absolute', left: 30, top: 500, width: 70, textAlign: 'right', ...DISPLAY(36, BLUE)}}>v</div>
			<HandTag x={110} y={770} text="length grows, width stays" at={widthCh + 10} size={38} role="b" />
			<HandTag x={110} y={830} text="width grows, length stays" at={heightCh + 10} size={38} role="a" />
			<MemoryAidCard x={700} y={170} w={1124} at={0} iconSize={80} scale={1.06}
				keys={[
					{icon: <div style={{position: 'absolute', left: 0, top: 18, width: 80, height: 44, background: '#d6eeee', border: `4px solid ${TEAL}`, borderRadius: 6}} />, text: <>u′v: u changes, v stays</>, role: 'b', at: each + 30},
					{icon: <div style={{position: 'absolute', left: 0, top: 18, width: 80, height: 44, background: '#dceaf7', border: `4px solid ${BLUE}`, borderRadius: 6}} />, text: <>uv′: v changes, u stays</>, role: 'a', at: each + 60},
				]}
				main={{content: <>Each factor takes a turn; the other one stays.</>, at: each}}
				formula={{content: <>(uv)′ = <Te>u′<MarkSpan kind="underline" at={factors} color={INK}>v</MarkSpan></Te> + <Bl><MarkSpan kind="underline" at={factors + 8} color={INK}>u</MarkSpan>v′</Bl></>, at: each + 40}} />
			<HandTag x={110} y={900} text="each term keeps one factor" at={factors + 10} size={40} color={INK} />
			<Enter at={isnt} style={{position: 'absolute', left: 720, top: 800}}>
				<span style={{...DISPLAY(52, INK_SOFT, 700)}}><MarkSpan kind="strike" at={isnt + 10} color={MATH_MISTAKE} width={6}>u′v′</MarkSpan></span>
				<span style={{...DISPLAY(38, MATH_MISTAKE, 700), marginLeft: 20}}>keeps neither factor</span>
			</Enter>
			<Enter at={because} style={{position: 'absolute', left: 1260, top: 800}}>
				<span style={DISPLAY(44)}><Te>u′v</Te> + <Bl>uv′</Bl> = <Bl>uv′</Bl> + <Te>u′v</Te></span>
			</Enter>
			<HandTag x={1264} y={905} text="order doesn't matter for a product" at={because + 20} size={36} color={INK} />
		</>
	);
};
