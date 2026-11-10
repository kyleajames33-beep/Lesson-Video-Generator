// Scenes 9 to 15: the memory aid (the kit derivative wheel inside the framed card), attempt 1 and its brief
// feedback, attempt 2 and its brief feedback (with a one-arrow wheel inset), the rectangles handoff (exported as
// I05FinalFrame, i06's opening) and the key notes, which return silently to that frame.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, prog} from '../../kit';
import {CARD, GivensStrip, HandTag, InnerSlot, KeyNotesBullets, MistakeCard, QuestionCard, RolesOn, SceneHeading, StripStepper, StudioDerivativeWheel, StudioPlot, TaskStrip, fnPath} from '../../math/studio';
import {K9, K10, K11, K12, K13, K14, K15} from './cuemap';
import {dur, hold} from './common';
import {AMB, AnswerBox, Attempt, BLUE, Bl, BoxCard, Cc, Chip, CurvePic, FramedCard, GREY, Line, MiniPlot, PLabel, RED, Tick, V, VIOLET} from './parts';

const PI = Math.PI;
const NEVER = 99999;
const AidMain: React.FC = () => <>Differentiate: one step forward. Integrate: one step back.</>;

// ---------- 9. memory aid ----------
export const S09: React.FC = () => {
	const f = useCurrentFrame();
	const k = K9;
	const pulse = f < k.fromCos ? {kind: 'int' as const, index: 3, at: k.fromSin} : {kind: 'int' as const, index: 0, at: k.fromCos};
	const ig = [0, 1, 2, 3].map(i => k.integ + 10 + i * 8);
	return (
		<>
			<SceneHeading text="A way to remember the signs" at={4} size={56} />
			<FramedCard x={60} y={150} w={1800} h={810} />
			<div style={{position: 'absolute', left: 110, top: 172, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: '#4f4840'}}>Memory aid</div>
			<div style={{position: 'absolute', left: 110, top: 230}}><StudioDerivativeWheel size={680} dAt={[k.cos, k.msin, k.mcos, k.back]} intAt={ig} pulse={pulse} labelSize={52} /></div>
			<div style={{position: 'absolute', left: 860, top: 190, width: 960, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 62, lineHeight: 1.12, color: INK}}><AidMain /></div>
			<Line x={870} y={400} at={-30} size={44}>∫<V>sin x</V> dx = −cos x <Cc>+ C</Cc>    ∫<V>cos x</V> dx = sin x <Cc>+ C</Cc></Line>
			<HandTag x={880} y={530} text="one step back from sin x: −cos x" at={k.fromSin} size={44} color={BLUE} />
			<HandTag x={880} y={600} text="one step back from cos x: sin x" at={k.fromCos} size={44} color={BLUE} />
			<BoxCard x={860} y={640} w={960} at={-30} size={42} border={VIOLET}><V>sec² x</V> is not on the wheel: it comes from tan x</BoxCard>
			<div style={{position: 'absolute', left: 870, top: 770, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 40, color: INK}}>x in radians. Add <Cc>+ C</Cc>.</div>
			<Chip x={860} y={850} at={-30} size={36} color={AMB}>the panels: energy = (60/π)(1 − cos(πt/12))</Chip>
		</>
	);
};

// ---------- 10. attempt 1 ----------
const Q1: React.FC = () => <div>Find ∫ 6 cos 3x dx.</div>;
export const S10: React.FC = () => (
	<Attempt hold={hold('scene-10')} pauseAt={K10.pause} top={440} size={52} given={[<>∫<V>6 cos 3x</V> dx</>]}
		picture={<CurvePic fn={x => 6 * Math.cos(3 * x)} xs={[0, 2.1]} ys={[-7, 7]} xTicks={[1, 2]} yTicks={[-6, 6]} label="the integrand" w={820} h={460} />}>
		<Q1 />
	</Attempt>
);

// ---------- 11. feedback 1 ----------
export const S11: React.FC = () => {
	const k = K11;
	const f = useCurrentFrame();
	return (
		<>
			<TaskStrip text="Check your working" at={2} size={56} />
			<RolesOn on={f >= 10}><QuestionCard at={-40} shrinkAt={-30} w={1100} y={170} size={44}><Q1 /></QuestionCard></RolesOn>
			<GivensStrip x={1290} y={160} size={30} maxW={600} items={[{content: '6 cos 3x', role: 'gradient', at: 6}, {content: 'inside 3x', at: 12}]} />
			<Line x={96} y={290} at={k.sine} size={48}><V>d/dx</V> sin <InnerSlot>3x</InnerSlot> = <Bl>3</Bl> cos 3x</Line>
			<Line x={96} y={390} at={k.need} size={48}><V>6 cos 3x</V> = 2 × <Bl>3</Bl> cos 3x</Line>
			<AnswerBox x={96} y={500} at={k.so} size={52}>2 sin 3x <Cc>+ C</Cc></AnswerBox>
			<Line x={96} y={620} at={k.diff} size={44}><V>d/dx</V> (2 sin 3x) = 2 × <Bl>3</Bl> cos 3x = <V>6 cos 3x</V> <Tick size={44} o={prog(f, k.diff + 40, 10)} /></Line>
			<MistakeCard x={96} y={760} w={960} at={k.wrong} size={44} wrong={<>18 sin 3x + C</>} caption="its derivative is 54 cos 3x" />
			<MiniPlot x={1100} y={380} w={790} h={580} win={{x: [-0.2, 2.2], y: [-9, 9]}} xTicks={[1, 2]} yTicks={[-6, 6]}
				curves={[{fn: x => 6 * Math.cos(3 * x), from: -0.2, to: 2.2, color: VIOLET}, {fn: x => 2 * Math.sin(3 * x), from: -0.2, to: 2.2, color: INK, o: prog(f, k.so, 12)}, {fn: x => 18 * Math.sin(3 * x), from: -0.2, to: 2.2, color: RED, dash: '14 10', o: prog(f, k.wrong, 14)}]}>
				{m => <>
					<PLabel p={m.p(0.0, 8.0)} text="integrand 6 cos 3x" color={VIOLET} size={34} />
					<PLabel p={m.p(1.2, -3.6)} text="2 sin 3x" size={36} o={prog(f, k.so, 12)} />
					<PLabel p={m.p(0.75, -7.9)} text="slip: 9 times too tall" color={RED} size={34} o={prog(f, k.wrong + 10, 12)} />
				</>}
			</MiniPlot>
		</>
	);
};

// ---------- 12. attempt 2 ----------
const Q2: React.FC = () => <div>Find ∫ 4x sin(x²) dx.</div>;
export const S12: React.FC = () => (
	<Attempt hold={hold('scene-12')} pauseAt={K12.pause} heading="Last one" top={440} size={52} given={[<>∫<V>4x sin(x²)</V> dx</>]}
		picture={<CurvePic fn={x => 4 * x * Math.sin(x * x)} xs={[-2, 2]} ys={[-7, 7]} xTicks={[-2, -1, 1, 2]} yTicks={[-6, 6]} label="the integrand" w={820} h={460} />}>
		<Q2 />
	</Attempt>
);

// ---------- 13. feedback 2 ----------
export const S13: React.FC = () => {
	const k = K13;
	const f = useCurrentFrame();
	return (
		<>
			<TaskStrip text="Check your working" at={2} size={56} />
			<RolesOn on={f >= 10}><QuestionCard at={-40} shrinkAt={-30} w={1100} y={170} size={44} heading="Last one"><Q2 /></QuestionCard></RolesOn>
			<GivensStrip x={1290} y={160} size={30} maxW={600} items={[{content: '4x sin(x²)', role: 'gradient', at: 6}, {content: 'inside x²', at: 12}]} />
			<Line x={96} y={290} at={k.inside} size={46}>inside <InnerSlot>x²</InnerSlot>: <V>d/dx</V> = <Bl>2x</Bl>;   4x = 2 × <Bl>2x</Bl></Line>
			<Line x={96} y={390} at={k.step} size={44}>one step back from sin is −cos</Line>
			<AnswerBox x={96} y={500} at={k.so} size={52}>−2 cos(x²) <Cc>+ C</Cc></AnswerBox>
			<Line x={96} y={620} at={k.diff} size={40}><V>d/dx</V>: −2 × (−sin(x²)) × <Bl>2x</Bl> = <V>4x sin(x²)</V> <Tick size={40} o={prog(f, k.diff + 60, 10)} /></Line>
			<MistakeCard x={96} y={760} w={960} at={k.wrong} size={44} wrong={<>2 cos(x²) + C</>} caption="its derivative is −4x sin(x²)" />
			<div style={{position: 'absolute', left: 1120, top: 230}}><StudioDerivativeWheel size={380} dAt={[]} intAt={[NEVER, NEVER, NEVER, k.step]} pulse={{kind: 'int', index: 3, at: k.step + 30}} labelSize={34} /></div>
			<HandTag x={1500} y={330} text="one step back" at={k.step + 10} size={38} color={BLUE} />
			<MiniPlot x={1100} y={600} w={790} h={360} win={{x: [-2, 2], y: [-7, 7]}} xTicks={[-2, -1, 1, 2]} yTicks={[-6, 6]}
				curves={[{fn: x => 4 * x * Math.sin(x * x), from: -2, to: 2, color: VIOLET}, {fn: x => -2 * Math.cos(x * x), from: -2, to: 2, color: INK, o: prog(f, k.so, 12)}]}>
				{m => <>
					<PLabel p={m.p(-1.95, 6.0)} text="integrand" color={VIOLET} size={34} />
					<PLabel p={m.p(0.3, -4.6)} text="−2 cos(x²)" size={34} o={prog(f, k.so, 12)} />
				</>}
			</MiniPlot>
		</>
	);
};

// ---------- 14. handoff ----------
const TEAL_FILL = '#cfe8e4', TEAL_INK = '#1f6f66';
const I05Board: React.FC<{headAt: number; curveAt: number; rectsAt: number; splitAt: number; chipAt: number}> = ({headAt, curveAt, rectsAt, splitAt, chipAt}) => {
	const f = useCurrentFrame();
	const n = f >= splitAt ? 8 : 4;
	const w = PI / 2 / n;
	return (
		<>
			<SceneHeading text="Next: add up thin rectangles" at={headAt} size={56} />
			<StudioPlot x={40} y={150} width={1180} height={810} window={{x: [-0.12, PI / 2 + 0.15], y: [-0.1, 1.2]}} xTicks={[{value: PI / 4, label: 'π/4'}, {value: PI / 2, label: 'π/2'}]} yTicks={[{value: 0.5, label: '0.5'}, {value: 1, label: '1'}]} at={curveAt}>
				{m => <>
					{Array.from({length: n}, (_, i) => {const o = n === 4 ? prog(f, rectsAt + i * 10, 8) : 1; const a = m.p(i * w, Math.cos(i * w)), b = m.p((i + 1) * w, 0); return <rect key={n + '-' + i} x={a[0]} y={a[1]} width={b[0] - a[0]} height={b[1] - a[1]} fill={TEAL_FILL} stroke={TEAL_INK} strokeWidth={3} opacity={o} />;})}
					<path d={fnPath(m, Math.cos, 0, PI / 2)} stroke={INK} strokeWidth={7} fill="none" strokeLinecap="round" />
					{[0, PI / 2].map(X => {const p = m.p(X, Math.cos(X)); return <circle key={X} cx={p[0]} cy={p[1]} r={12} fill={INK} stroke={CARD} strokeWidth={4} />;})}
					<PLabel p={m.p(0.75, 1.1)} text="y = cos x,  0 ≤ x ≤ π/2" size={42} />
				</>}
			</StudioPlot>
			<Chip x={1270} y={180} at={chipAt} size={46} color={AMB}>add them up?</Chip>
			<div style={{position: 'absolute', left: 1580, top: 150, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 96, color: '#7a4600', opacity: prog(f, chipAt, 12)}}>?</div>
			<StripStepper x={1270} y={330} values={[4, 8]} current={n} label="rectangles" at={rectsAt} />
			<HandTag x={1280} y={490} text="thinner and thinner" at={splitAt} size={48} color={TEAL_INK} />
			<BoxCard x={1270} y={560} w={600} at={rectsAt} size={38} border={TEAL_INK}>width π/8, then π/16;<br />each top-left corner on the curve</BoxCard>
			<HandTag x={1280} y={800} text="last video: trig primitives" at={headAt} size={40} color={GREY} />
			<div style={{position: 'absolute', left: 1280, top: 830, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: '#4f4840', opacity: prog(f, headAt, 12)}}>one step back round the wheel</div>
		</>
	);
};
/** i05's final frame (i06 opens on it). */
export const I05FinalFrame: React.FC = () => <I05Board headAt={-300} curveAt={-300} rectsAt={-300} splitAt={-300} chipAt={-300} />;
export const S14: React.FC = () => {
	const f = useCurrentFrame();
	const k = K14;
	const sw = prog(f, k.next, 16);
	return (
		<>
			{sw < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}>
				<SceneHeading text="Each trig primitive undoes a derivative rule" at={-30} size={52} />
				<div style={{position: 'absolute', left: 80, top: 190}}><StudioDerivativeWheel size={620} dAt={[-60, -60, -60, -60]} intAt={[-60, -60, -60, -60]} labelSize={48} /></div>
				<BoxCard x={820} y={190} at={-30} size={52} border={INK} bw={4}>∫<V>sin x</V> dx = −cos x <Cc>+ C</Cc></BoxCard>
				<BoxCard x={820} y={330} at={-30} size={52} border={INK} bw={4}>∫<V>cos x</V> dx = sin x <Cc>+ C</Cc></BoxCard>
				<BoxCard x={820} y={470} at={-30} size={52} border={INK} bw={4}>∫<V>sec² x</V> dx = tan x <Cc>+ C</Cc></BoxCard>
				<HandTag x={830} y={680} text="its sign, its inner rate, its + C" at={k.so + 30} size={50} color={BLUE} />
				<Chip x={820} y={740} at={-30} size={40} color={GREY}>x in radians; ÷ the inner rate for a linear inside</Chip>
			</div> : null}
			{sw > 0 ? <div style={{position: 'absolute', inset: 0, opacity: sw}}><I05Board headAt={k.next} curveAt={k.next} rectsAt={k.rects} splitAt={k.thinner} chipAt={k.add} /></div> : null}
		</>
	);
};

// ---------- 15. key notes ----------
export const S15: React.FC = () => {
	const f = useCurrentFrame();
	const items = [
		{content: <>x in radians: ∫<V>sin x</V> dx = −cos x <Cc>+ C</Cc>.</>, at: 10},
		{content: <>∫<V>cos x</V> dx = sin x <Cc>+ C</Cc>;  ∫<V>sec² x</V> dx = tan x <Cc>+ C</Cc>.</>, at: 22},
		{content: <>Linear inside: ÷ its rate. ∫<V>cos 5x</V> dx = <Bl>⅕</Bl> sin 5x <Cc>+ C</Cc>.</>, at: 34},
		{content: <>Matched inside: the inner derivative must be a factor.</>, at: 46},
		{content: <>tan answers: one interval between asymptotes.</>, at: 58},
	];
	const back = prog(f, Math.max(1350, dur('scene-15')) - 40, 18);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
				<SceneHeading text="Key notes: what to write in your book" at={2} />
				<HandTag x={1824} y={116} text="pause to copy" at={K15.pause} size={42} color="#8a5a12" anchor="end" />
				<KeyNotesBullets x={96} y={230} w={1040} items={items} size={38} gap={50} />
				<FramedCard x={1180} y={196} w={680} h={770} at={16} />
				<div style={{position: 'absolute', left: 1220, top: 214, opacity: prog(f, 16, 14), width: 610}}>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: '#4f4840'}}>Memory aid</div>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46, lineHeight: 1.08, color: INK, marginTop: 4}}><AidMain /></div>
					<div style={{marginTop: 4, marginLeft: 120}}><StudioDerivativeWheel size={380} dAt={[-60, -60, -60, -60]} intAt={[-60, -60, -60, -60]} labelSize={36} /></div>
					<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 34, lineHeight: 1.25, color: INK}}>x in radians. Add <Cc>+ C</Cc>. <V>sec² x</V> comes from tan x.</div>
				</div>
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><I05FinalFrame /></div> : null}
		</>
	);
};
