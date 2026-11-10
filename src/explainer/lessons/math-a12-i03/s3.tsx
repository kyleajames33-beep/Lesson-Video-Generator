// Scenes 10 to 16: the memory aid (the triangle on e^(3x) and 2ˣ with its gradient), attempt 1 and its brief
// feedback, attempt 2 and its brief feedback, the 1/x handoff (exported as I03FinalFrame, i04's opening) and the
// key notes, which return silently to that frame.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, prog} from '../../kit';
import {CARD, GivensStrip, HandTag, InnerSlot, KeyNotesBullets, MistakeCard, QuestionCard, RolesOn, SceneHeading, TaskStrip, usePlatePreload} from '../../math/studio';
import {K10, K11, K12, K13, K14, K15, K16} from './cuemap';
import {dur, hold} from './common';
import {AMB, AnswerBox, Attempt, BLUE, Bl, BoxCard, Cc, Chip, CurvePic, Ex, FramedCard, Frac, GREY, Line, MiniPlot, PHONE, PLabel, PhoneRig, RED, Tick, V, VIOLET, phoneH} from './parts';

export const AID03 = 'Divide by the inner rate: a for e^(ax + b), ln a for aˣ.';
const Aid: React.FC = () => <>Divide by the inner rate: <Bl>a</Bl> for eᵃˣ⁺ᵇ, <Bl>ln a</Bl> for aˣ.</>;

// ---------- 10. memory aid ----------
export const S10: React.FC = () => {
	const f = useCurrentFrame();
	const k = K10;
	return (
		<>
			<SceneHeading text="The pattern to keep" at={4} size={56} />
			<FramedCard x={60} y={150} w={1800} h={840} />
			<div style={{position: 'absolute', left: 110, top: 168, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: '#4f4840'}}>Memory aid</div>
			<div style={{position: 'absolute', left: 400, top: 160, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 64, color: INK, opacity: prog(f, k.divide, 14)}}><Aid /></div>
			<MiniPlot x={100} y={280} w={830} h={470} win={{x: [-1, 0.62], y: [-0.4, 5.6]}} xTicks={[-0.5, 0.5]} yTicks={[1, 2, 3, 4, 5]}
				curves={[{fn: x => Math.exp(3 * x), from: -1, to: 0.62, color: INK}]}>
				{m => {const a = m.p(0, 1), b = m.p(1 / 3, 1), c = m.p(1 / 3, 2), l0 = m.p(-0.25, 0.25), l1 = m.p(0.45, 2.35); return <>
					<line x1={l0[0]} y1={l0[1]} x2={l1[0]} y2={l1[1]} stroke={VIOLET} strokeWidth={6} strokeLinecap="round" />
					<path d={`M${a[0]},${a[1]} H${b[0]} V${c[1]}`} stroke={BLUE} strokeWidth={5} fill="none" />
					<PLabel p={a} dx={10} dy={44} text="run ⅓" color={BLUE} size={36} />
					<PLabel p={c} dx={16} dy={40} text="rise 1" color={BLUE} size={36} />
					<circle cx={a[0]} cy={a[1]} r={11} fill={INK} stroke={CARD} strokeWidth={4} />
				</>;}}
			</MiniPlot>
			<HandTag x={260} y={330} text="e³ˣ: gradient 3 × height, so ÷ 3" at={k.divide + 20} size={42} color={BLUE} />
			<MiniPlot x={990} y={280} w={830} h={470} win={{x: [-2, 2.6], y: [-0.5, 6.4]}} xTicks={[-2, -1, 1, 2]} yTicks={[2, 4, 6]}
				curves={[{fn: x => 2 ** x, from: -2, to: 2.6, color: INK}, {fn: x => Math.LN2 * 2 ** x, from: -2, to: 2.6, color: VIOLET, dash: '12 10'}]}>
				{m => <PLabel p={m.p(-1.9, 5.6)} text="gradient = ln 2 × height" color={VIOLET} size={34} />}
			</MiniPlot>
			<HandTag x={1140} y={410} text="2ˣ: ÷ ln 2, its inner rate" at={k.ln} size={42} color={BLUE} />
			<Line x={120} y={780} at={k.divide + 30} size={38}>a ≠ 0 for eᵃˣ⁺ᵇ;  a &gt; 0, a ≠ 1 for aˣ.  Differentiate back to check.  <Tick size={38} o={prog(f, k.check + 20, 10)} /></Line>
			<Chip x={120} y={870} at={k.divide + 40} size={40}>the phone: ÷ (<Bl>−½</Bl>), so × (−2)</Chip>
		</>
	);
};

// ---------- 11. attempt 1 ----------
const Q1: React.FC = () => <div>Find ∫4e²ˣ⁻¹ dx.</div>;
export const S11: React.FC = () => (
	<Attempt hold={hold('scene-11')} pauseAt={K11.pause} top={440} size={52} given={[<>∫4<Ex>2x − 1</Ex> dx</>]}
		picture={<CurvePic fn={x => 4 * Math.exp(2 * x - 1)} xs={[-1, 1.2]} ys={[-0.5, 14]} xTicks={[-1, 1]} yTicks={[4, 8, 12]} label="the integrand" w={1060} h={460} />}>
		<Q1 />
	</Attempt>
);

// ---------- 12. feedback 1 ----------
export const S12: React.FC = () => {
	const k = K12;
	const f = useCurrentFrame();
	return (
		<>
			<TaskStrip text="Check your working" at={2} size={56} />
			<RolesOn on={f >= 10}><QuestionCard at={-40} shrinkAt={-30} w={1100} y={170} size={44}><Q1 /></QuestionCard></RolesOn>
			<GivensStrip x={1290} y={160} size={30} maxW={600} items={[{content: '4e²ˣ⁻¹', role: 'gradient', at: 6}, {content: 'exponent 2x − 1', at: 12}]} />
			<Line x={96} y={280} at={k.exp} size={44}>exponent <InnerSlot>2x − 1</InnerSlot>: inner rate <Bl>2</Bl></Line>
			<Line x={96} y={380} at={k.div} size={50}>∫<V>4<Ex>2x − 1</Ex></V> dx = 4 · <Frac n="1" d={<Bl>2</Bl>} /><Ex>2x − 1</Ex> <Cc>+ C</Cc></Line>
			<AnswerBox x={96} y={500} at={k.four} size={52}>2<Ex>2x − 1</Ex> <Cc>+ C</Cc></AnswerBox>
			<Line x={96} y={620} at={k.diff} size={44}><V>d/dx</V>: 2 · <Bl>2</Bl><Ex>2x − 1</Ex> = 4<Ex>2x − 1</Ex>  <Tick size={44} o={prog(f, k.diff + 30, 10)} /></Line>
			<MistakeCard x={96} y={730} w={960} at={k.leaving} size={46} wrong={<>4<Ex>2x − 1</Ex> + C</>} caption="its derivative is twice the integrand" />
			<MiniPlot x={1100} y={380} w={790} h={580} win={{x: [-1, 1.05], y: [-1, 24]}} xTicks={[-0.5, 0.5, 1]} yTicks={[5, 10, 15, 20]}
				curves={[{fn: x => 4 * Math.exp(2 * x - 1), from: -1, to: 1.05, color: VIOLET}, {fn: x => 8 * Math.exp(2 * x - 1), from: -1, to: 1.05, color: RED, dash: '14 10', o: prog(f, k.leaving, 14)}]}>
				{m => <>
					<PLabel p={m.p(-0.95, 12)} text="integrand" color={VIOLET} size={38} />
					<PLabel p={m.p(-0.95, 19)} text="slip's gradient: twice" color={RED} size={38} o={prog(f, k.leaving + 10, 12)} />
				</>}
			</MiniPlot>
		</>
	);
};

// ---------- 13. attempt 2 ----------
const Q2: React.FC = () => <div>Find ∫(3ˣ + e⁻²ˣ) dx.</div>;
export const S13: React.FC = () => (
	<Attempt hold={hold('scene-13')} pauseAt={K13.pause} heading="Last one" top={440} size={52} given={[<>∫(3ˣ + <Ex>−2x</Ex>) dx</>]}
		picture={<CurvePic fn={x => 3 ** x + Math.exp(-2 * x)} xs={[-1, 1.5]} ys={[-0.5, 9]} xTicks={[-1, 1]} yTicks={[2, 4, 6, 8]} label="the integrand" w={1060} h={460} />}>
		<Q2 />
	</Attempt>
);

// ---------- 14. feedback 2 ----------
export const S14: React.FC = () => {
	const k = K14;
	const f = useCurrentFrame();
	return (
		<>
			<TaskStrip text="Check your working" at={2} size={56} />
			<RolesOn on={f >= 10}><QuestionCard at={-40} shrinkAt={-30} w={1100} y={170} size={44} heading="Last one"><Q2 /></QuestionCard></RolesOn>
			<GivensStrip x={1290} y={160} size={30} maxW={600} items={[{content: '3ˣ', role: 'gradient', at: 6}, {content: 'e⁻²ˣ', role: 'gradient', at: 12}]} />
			<Line x={96} y={290} at={k.three} size={50}>∫3ˣ dx = <Frac n="3ˣ" d={<Bl>ln 3</Bl>} /></Line>
			<HandTag x={600} y={330} text="inner rate ln 3" at={k.three + 20} size={42} color={BLUE} />
			<BoxCard x={96} y={430} w={960} at={10} out={k.e - 4} size={44} title="two terms">3ˣ and e⁻²ˣ: each ÷ its own <Bl>inner rate</Bl>,<br />then one <Cc>+ C</Cc></BoxCard>
			<Line x={96} y={420} at={k.e} size={48}>∫<Ex>−2x</Ex> dx = <Frac n="1" d={<Bl>−2</Bl>} /><Ex>−2x</Ex> = −½<Ex>−2x</Ex></Line>
			<AnswerBox x={96} y={540} at={k.with} size={52}><Frac n="3ˣ" d="ln 3" /> − ½<Ex>−2x</Ex> <Cc>+ C</Cc></AnswerBox>
			<Line x={96} y={660} at={k.with + 40} size={42}><V>d/dx</V>: 3ˣ + <Ex>−2x</Ex>  <Tick size={42} o={prog(f, k.with + 60, 10)} /></Line>
			<MistakeCard x={96} y={760} w={960} at={k.mult} size={44} wrong={<>3ˣ ln 3 − ½<Ex>−2x</Ex> + C</>} caption="× ln 3 is the derivative direction" />
			<MiniPlot x={1100} y={380} w={790} h={580} win={{x: [-1, 1.6], y: [-0.5, 9.5]}} xTicks={[-1, 1]} yTicks={[2, 4, 6, 8]}
				curves={[{fn: x => 3 ** x + Math.exp(-2 * x), from: -1, to: 1.6, color: VIOLET}, {fn: x => 3 ** x * Math.log(3) ** 2 + Math.exp(-2 * x), from: -1, to: 1.6, color: RED, dash: '14 10', o: prog(f, k.mult, 14)}]}>
				{m => <>
					<PLabel p={m.p(-0.1, 6.6)} text="integrand 3ˣ + e⁻²ˣ" color={VIOLET} size={36} />
					<PLabel p={m.p(0.2, 8.6)} text="slip's gradient: too high" color={RED} size={36} o={prog(f, k.mult + 10, 12)} />
				</>}
			</MiniPlot>
		</>
	);
};

// ---------- 15. handoff ----------
const I03Board: React.FC<{headAt: number; ruleAt: number; whatAt: number; nextAt: number}> = ({headAt, ruleAt, whatAt, nextAt}) => {
	const f = useCurrentFrame();
	return (
		<>
			<SceneHeading text="Next: the reciprocal primitive" at={headAt} size={56} />
			<div style={{position: 'absolute', left: 96, top: 160, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: INK}}><Aid /></div>
			<div style={{position: 'absolute', left: 96, top: 250, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 110, color: INK, whiteSpace: 'pre'}}>∫ <V><Frac n="1" d="x" /></V> dx</div>
			<div style={{position: 'absolute', left: 120, top: 470, opacity: prog(f, ruleAt, 12), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 64, color: '#4f4840', whiteSpace: 'pre'}}>
				= <Frac n="x⁰" d="0" /> + C
				<svg width={360} height={120} viewBox="0 0 360 120" style={{position: 'absolute', left: -10, top: -10, overflow: 'visible'}}><path d="M10,10 L330,110 M330,10 L10,110" stroke={RED} strokeWidth={7} strokeLinecap="round" opacity={prog(f, ruleAt + 14, 10)} /></svg>
			</div>
			<HandTag x={100} y={680} text="n = −1: can't divide by 0" at={ruleAt + 10} size={48} color={RED} />
			<Chip x={96} y={760} at={whatAt} size={52} color={AMB}>primitive of 1/x?</Chip>
			<Chip x={96} y={870} at={nextAt} size={42}>Next: the reciprocal primitive</Chip>
			<MiniPlot x={1000} y={170} w={880} h={790} win={{x: [-3.3, 3.3], y: [-4.2, 4.2]}} xTicks={[-3, -2, -1, 1, 2, 3]} yTicks={[-4, -2, 2, 4]}
				curves={[{fn: x => 1 / x, from: -3.3, to: -0.24, color: VIOLET}, {fn: x => 1 / x, from: 0.24, to: 3.3, color: VIOLET}]}>
				{m => {const a = m.p(0, -4.2), b = m.p(0, 4.2), o = m.p(0, 0); return <>
					<line x1={a[0]} x2={b[0]} y1={a[1]} y2={b[1]} stroke={GREY} strokeWidth={4} strokeDasharray="12 10" />
					<circle cx={o[0]} cy={o[1]} r={14} fill={CARD} stroke={GREY} strokeWidth={5} />
					<PLabel p={m.p(0.6, 3.4)} text="y = 1/x" color={VIOLET} size={44} />
					<PLabel p={m.p(0.15, -0.5)} text="x = 0 excluded" size={38} hand />
				</>;}}
			</MiniPlot>
		</>
	);
};
/** i03's final frame (i04 opens on it). */
export const I03FinalFrame: React.FC = () => <I03Board headAt={-300} ruleAt={-60} whatAt={-60} nextAt={-60} />;
export const S15: React.FC = () => <I03Board headAt={K15.next - 6} ruleAt={K15.rule} whatAt={K15.what} nextAt={K15.next} />;

// ---------- 16. key notes ----------
export const S16: React.FC = () => {
	const f = useCurrentFrame();
	usePlatePreload([PHONE.src]);
	const items = [
		{content: <>∫eˣ dx = eˣ <Cc>+ C</Cc>: eˣ&apos;s gradient equals its height.</>, at: 10},
		{content: <>∫eᵃˣ⁺ᵇ dx = <Frac n="1" d={<Bl>a</Bl>} />eᵃˣ⁺ᵇ <Cc>+ C</Cc>, for a ≠ 0.</>, at: 22},
		{content: <>∫<Bl>f′(x)</Bl>eᶠ⁽ˣ⁾ dx = eᶠ⁽ˣ⁾ <Cc>+ C</Cc>.</>, at: 34},
		{content: <>∫aˣ dx = <Frac n="aˣ" d={<Bl>ln a</Bl>} /> <Cc>+ C</Cc>, a &gt; 0, a ≠ 1. (∫1 dx = x <Cc>+ C</Cc>.)</>, at: 46},
		{content: <>Use the point for <Cc>C</Cc>. Check by differentiating.</>, at: 58},
	];
	const back = prog(f, Math.max(1350, dur('scene-16')) - 40, 36);
	const pw = 230;
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
				<SceneHeading text="Key notes: what to write in your book" at={2} />
				<HandTag x={1824} y={116} text="pause to copy" at={K16.pause} size={42} color="#8a5a12" anchor="end" />
				<KeyNotesBullets x={96} y={230} w={1040} items={items} size={38} gap={50} />
				<FramedCard x={1180} y={196} w={680} h={770} at={16} />
				<div style={{position: 'absolute', left: 1220, top: 214, opacity: prog(f, 16, 14), width: 610}}>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: '#4f4840'}}>Memory aid</div>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 50, lineHeight: 1.08, color: INK, marginTop: 4}}><Aid /></div>
					<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 36, lineHeight: 1.25, color: INK, marginTop: 12}}>Then differentiate back to check.</div>
				</div>
				{f >= 16 ? <div style={{position: 'absolute', inset: 0, opacity: prog(f, 16, 14)}}>
					<PhoneRig x={1230} y={945 - phoneH(pw)} w={pw} t={8} />
					<div style={{position: 'absolute', left: 1500, top: 660, width: 340, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, lineHeight: 1.15, color: INK}}>the phone:<br />÷ (<span style={{color: BLUE}}>−½</span>),<br />so × (−2)</div>
				</div> : null}
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><I03FinalFrame /></div> : null}
		</>
	);
};
