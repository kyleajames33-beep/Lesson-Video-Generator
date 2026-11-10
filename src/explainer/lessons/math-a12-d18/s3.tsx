// Scenes 8 to 13: attempt 1 (least fencing for a 50 m² garden against a wall) and its brief feedback, attempt 2
// (the 16 cm by 10 cm box) and its brief feedback, the handoff (the yellow car and d19's axes; d19 opens on the
// final frame, exported as D18FinalFrame) and the key notes, which cross-fade back to it.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {CARD, CARD_SHADOW, FrameSvg, FunctionSimulator, GivensStrip, HandTag, KeyNotesBullets, MarkSpan, MistakeCard, QuestionCard, RolesOn, SceneHeading, StudioBoxNetFold, TaskStrip, kf, makePlot, smooth, MATH_STRAND_ACCENT} from '../../math/studio';
import {K10, K11, K12, K13, K8, K9} from './cuemap';
import {dur, hold} from './common';
import {AMB, Am, AnswerBox, Attempt, BLUE, CARDTEX, CarAxes, CarTag, Chip, FlatCard, GREEN, GREY_INK, GardenPicture, Line, PlanPen, RED, Ring, V, VIOLET, Xb, fence, fence1, stubLine} from './parts';
import {AID18} from './s2';

// ---------- 8. attempt 1 ----------
const Q1: React.FC<{u?: {a: number; l: number}}> = ({u}) => (
	<div>A rectangular garden has {u ? <MarkSpan kind="underline" at={u.a}>an area of 50 m²</MarkSpan> : 'an area of 50 m²'}. It is fenced on three sides, and a straight wall forms the fourth side. Find the dimensions of the garden that use the least length of fencing, and state that {u ? <MarkSpan kind="underline" at={u.l}>least length</MarkSpan> : 'least length'}.</div>
);
export const S08: React.FC = () => (
	<Attempt hold={hold('scene-08')} pauseAt={K8.pause} top={470} given={['area 50 m²', 'three sides fenced', 'a wall on the fourth']} picture={<GardenPicture />}>
		<Q1 />
	</Attempt>
);

// ---------- 9. feedback 1 ----------
const WIN_L = {x: [0, 15] as [number, number], y: [0, 60] as [number, number]};
const L_FAM = {f: (x: number) => fence(x), df: (x: number) => fence1(x), domain: [{from: 0, to: Infinity}]};
export const S09: React.FC = () => {
	const f = useCurrentFrame();
	const k = K9;
	const G = {x: 1090, y: 610, w: 800, h: 330};
	const M = makePlot(G.x, G.y, G.w, G.h, WIN_L);
	const P = M.pf(5, 20);
	const tm = {pt: M.pf, sx: M.sx, sy: M.sy};
	const xr = kf(f, [[0, 2.5], [k.deriv, 2.5], [k.five + 10, 5]]);
	return (
		<>
			<TaskStrip text="Check your working" at={2} size={56} />
			<RolesOn on={f >= 10}>
				<QuestionCard at={-40} shrinkAt={-30} w={1700} y={170} size={44}><Q1 u={{a: k.xy, l: k.thats}} /></QuestionCard>
			</RolesOn>
			<GivensStrip x={1290} y={160} size={30} maxW={600} items={[{content: 'area 50 m²', role: 'k', at: 6}, {content: 'three sides fenced', at: 12}, {content: 'x out, y along', at: 18}]} />
			<Line x={96} y={390} at={k.xy} size={46}><Xb>x</Xb>y = 50, so y = 50/<Xb>x</Xb></Line>
			<Line x={96} y={452} at={k.fencing} size={46}>L = 2<Xb>x</Xb> + 50/<Xb>x</Xb><span style={{opacity: prog(f, k.gt, 10)}}>,  <Am>x &gt; 0</Am></span></Line>
			<Line x={96} y={514} at={k.deriv} size={46}><V>L′ = 2 − 50/x² = 0</V></Line>
			<Line x={96} y={576} at={k.five - 10} size={46}>x² = 25, so <Xb>x = 5</Xb></Line>
			<Line x={96} y={640} at={k.near} size={38} color={GREY_INK}>x → 0⁺: L → ∞;   x → ∞: L → ∞</Line>
			<AnswerBox x={90} y={700} at={k.thats} size={38}>5 m by 10 m (10 m along the wall); least fencing 20 m</AnswerBox>
			<MistakeCard x={96} y={790} w={960} at={k.alone} size={36} wrong={<>least fencing: x = 5</>} caption="it asks for a length of fencing: 20 m" />
			<PlanPen cx={1490} top={360} scale={18} x={xr} mode="fixed" fixedArea={50} wallLength={600} wallH={44} labels="symbols" areaText="50 m²" />
			<FunctionSimulator x={G.x} y={G.y} width={G.w} height={G.h} window={WIN_L} family={L_FAM} timeline={[{frame: 0, x: xr}]} color={INK} at={k.fencing}
				xTicks={[5, 10, 15]} yTicks={[20, 40, 60]} xLabel="x (m)" yLabel="L (m)" point={{at: k.fencing}}
				overlay={() => <FrameSvg>
					<Ring p={P} r={28} o={prog(f, k.five, 12)} color={GREEN} />
					<line {...stubLine(tm, 5, 20, 0, 0, 100)} stroke={VIOLET} strokeWidth={7} strokeLinecap="round" opacity={prog(f, k.five, 12)} />
				</FrameSvg>} />
		</>
	);
};

// ---------- 10. attempt 2 ----------
const Q2: React.FC<{u?: {c: number}}> = ({u}) => (
	<div>An open box is made from a rectangular sheet of card {u ? <MarkSpan kind="underline" at={u.c}>16 cm by 10 cm</MarkSpan> : '16 cm by 10 cm'} by cutting equal squares of side x cm from each corner and folding up the sides. Find the value of x that gives the greatest volume, and state the greatest volume.</div>
);
export const S10: React.FC = () => (
	<Attempt hold={hold('scene-10')} pauseAt={K10.pause} heading="Last one" top={480} given={['card 16 cm by 10 cm', 'squares of side x cm']} picture={<FlatCard W={16} H={10} px={30} cut={2.6} />}>
		<Q2 />
	</Attempt>
);

// ---------- 11. feedback 2 ----------
export const S11: React.FC = () => {
	const f = useCurrentFrame();
	const k = K11;
	const strike = smooth(prog(f, k.reject - 6, 14));
	const fold = smooth(prog(f, k.cm + 6, 40)), cutP = prog(f, k.cm - 24, 30);
	return (
		<>
			<TaskStrip text="Check your working" at={2} size={56} />
			<RolesOn on={f >= 10}>
				<QuestionCard at={-40} shrinkAt={-30} w={1700} y={170} size={44} heading="Last one"><Q2 u={{c: k.shorter}} /></QuestionCard>
			</RolesOn>
			<GivensStrip x={1290} y={160} size={30} maxW={600} items={[{content: 'card 16 cm by 10 cm', role: 'k', at: 6}, {content: 'squares x cm', at: 12}]} />
			<Line x={96} y={390} at={k.vol} size={46}>V = <Xb>x</Xb>(16 − 2<Xb>x</Xb>)(10 − 2<Xb>x</Xb>)</Line>
			<Line x={96} y={452} at={k.shorter} size={46}>10 − 2<Xb>x</Xb> &gt; 0: <Am>0 &lt; x &lt; 5</Am></Line>
			<Line x={96} y={514} at={k.deriv} size={46}><V>V′ = 12x² − 104x + 160</V></Line>
			<Line x={96} y={576} at={k.two - 20} size={46}><V>= 4(3x − 20)(x − 2)</V></Line>
			<div style={{position: 'absolute', left: 96, top: 638, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, color: strike > 0.5 ? GREY_INK : INK, opacity: prog(f, k.twenty - 6, 12), whiteSpace: 'pre'}}>
				<span style={{position: 'relative'}}>x = 20/3 ≈ 6.67<svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{position: 'absolute', left: -6, top: 0, width: 'calc(100% + 12px)', height: '100%', overflow: 'visible'}}><path d="M0,60 L100,42" stroke={RED} strokeWidth={6} vectorEffect="non-scaling-stroke" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - strike} /></svg></span>
			</div>
			<HandTag x={500} y={666} text="not in 0 < x < 5" at={k.reject} size={42} color={RED} />
			<Line x={96} y={706} at={k.v2} size={46}>V(2) = 2 × 12 × 6 = 144<span style={{opacity: prog(f, k.cm, 10), fontSize: 34, color: GREY_INK, fontWeight: 700}}>   V → 0 at both ends</span></Line>
			<AnswerBox x={90} y={786} at={k.cm} size={42}>x = 2; greatest volume 144 cm³</AnswerBox>
			<StudioBoxNetFold x={1180} y={380} W={16} H={10} cut={2} fold={fold} cutProgress={cutP} scale={36} texture={{plate: CARDTEX, px: 0.25}} labels="values" at={-30} />
			<MistakeCard x={1150} y={790} w={740} at={k.negative} size={40} wrong={<>x = 20/3</>} caption="10 − 2x < 0: no box" />
		</>
	);
};

// ---------- 12. handoff ----------
const HEAD12 = 'Next: when the rate depends on the amount';
const MemoryLine18: React.FC<{at?: number}> = ({at = -30}) => {
	const f = useCurrentFrame();
	return <div style={{position: 'absolute', right: 40, top: 70, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34, color: INK, opacity: prog(f, at, 12)}}>{AID18}</div>;
};
const CarChips: React.FC<{rateAt: number; worthAt: number}> = ({rateAt, worthAt}) => (
	<>
		<Chip x={50} y={196} at={rateAt} size={46} color={BLUE}>rate = <span style={{color: BLUE}}>15%</span> of the current value</Chip>
		<Chip x={50} y={800} at={worthAt} size={50} color={MATH_STRAND_ACCENT}>worth after 8 years?</Chip>
	</>
);
/** d18's final frame (d19 opens on it). */
export const D18FinalFrame: React.FC = () => (
	<>
		<SceneHeading text={HEAD12} at={-300} size={56} />
		<MemoryLine18 at={-60} />
		<CarTag at={-60} />
		<CarAxes at={-60} stubAt={-60} />
		<CarChips rateAt={-60} worthAt={-60} />
	</>
);
export const S12: React.FC = () => {
	const f = useCurrentFrame();
	const k = K12;
	const swap = smooth(prog(f, k.next - 6, 24));
	const dx = -900 * (1 - smooth(prog(f, k.next, 44)));
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - swap}}>
				{swap < 1 ? <>
					<SceneHeading text="Two problems, one method" at={4} size={56} />
					<PlanPen cx={460} top={250} scale={22} x={10} wallLength={600} labels="values" />
					<StudioBoxNetFold x={1110} y={250} W={24} H={24} cut={4} fold={1} cutProgress={1} scale={16} texture={{plate: CARDTEX, px: 0.25}} labels="values" at={-30} />
					<Line x={150} y={700} at={k.so} size={46}>the constraint builds the function</Line>
					<Line x={1080} y={700} at={k.so + 50} size={46}>the real object sets the domain</Line>
				</> : null}
			</div>
			<div style={{position: 'absolute', inset: 0, opacity: swap}}>
				{swap > 0.001 ? <>
					<SceneHeading text={HEAD12} at={k.next} size={56} />
					<MemoryLine18 at={k.next + 10} />
					<CarTag dx={dx} at={k.next - 6} />
					<CarAxes at={k.next + 20} stubAt={k.fifteen} />
					<CarChips rateAt={k.fifteen} worthAt={k.worth} />
				</> : null}
			</div>
		</>
	);
};

// ---------- 13. key notes ----------
export const S13: React.FC = () => {
	const f = useCurrentFrame();
	const id = 'scene-13';
	const items = [
		{content: <>Name the variables, with units. Write the constraint.</>, at: 10},
		{content: <>Use it to write the quantity in one variable.</>, at: 22},
		{content: <><Am>Domain</Am> from the real object: every length positive.</>, at: 34},
		{content: <>Stationary points inside the domain; compare with the ends.</>, at: 46},
		{content: <>Answer the question asked, in context, with units.</>, at: 58},
	];
	const back = prog(f, Math.max(1350, dur(id)) - 40, 36);
	const glossary: [string, string][] = [['Draw', 'shape, variables, units'], ['Link', 'constraint → one variable'], ['Limit', 'the real domain'], ['Solve', 'calculus, then the ends'], ['Say', 'the answer, with units']];
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
				<SceneHeading text="Key notes: what to write in your book" at={2} />
				<HandTag x={1824} y={116} text="pause to copy" at={K13.pause} size={42} color={MATH_STRAND_ACCENT} anchor="end" />
				<KeyNotesBullets x={96} y={220} w={1040} items={items} size={38} gap={40} />
				<Enter at={16} style={{position: 'absolute', left: 1190, top: 196, width: 650}}>
					<div style={{background: CARD, border: `4px solid ${INK}`, borderRadius: 22, boxShadow: `inset 0 0 0 7px ${CARD}, inset 0 0 0 9.5px ${INK}, ${CARD_SHADOW}`, padding: '22px 30px 26px', height: 700, boxSizing: 'border-box'}}>
						<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK_SOFT}}>Memory aid</div>
						<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 56, lineHeight: 1.08, color: INK, marginTop: 4}}>{AID18}</div>
						{glossary.map(([v, g], i) => (
							<div key={i} style={{display: 'flex', gap: 14, alignItems: 'baseline', marginTop: 14}}>
								<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: i === 2 ? AMB : INK, width: 110}}>{v}</span>
								<span style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 34, color: INK}}>{g}</span>
							</div>
						))}
					</div>
				</Enter>
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><D18FinalFrame /></div> : null}
		</>
	);
};
