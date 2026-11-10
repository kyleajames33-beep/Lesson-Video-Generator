// Scenes 9 to 14: attempt 1 (sin x from π/3 to π) and its brief feedback, attempt 2 (split and reverse on a number
// line) and its brief feedback, the handoff (exported as I09FinalFrame, i10's opening: sin x on [0, 2π] with signed
// arches, the row ending "= 0" and "Area = ?") and the key notes, which return silently to that frame.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, prog} from '../../kit';
import {AreaFillLayer, CARD, GivensStrip, HandTag, KeyNotesBullets, MistakeCard, QuestionCard, RolesOn, SceneHeading, StudioLimitSubstitution, StudioPlot, TaskStrip, fnPath} from '../../math/studio';
import type {PlotMap} from '../../math/studio';
import {K9, K10, K11, K12, K13, K14} from './cuemap';
import {dur, hold} from './common';
import {ABLUE, AMBER, AnswerBox, Attempt, BoxCard, Chip, Ex, FramedCard, GRAD, Graph, Hand, Int, Lims, NumLine, PLabel, Row, SOFT, TEAL, ThermoRig, Tick, sq} from './parts';

const PI = Math.PI;
const PT = [{value: PI / 3, label: 'π/3'}, {value: PI, label: 'π'}];
const Neg: React.FC = () => <span style={{color: GRAD}}>−</span>;

// ---------- 9. attempt 1 ----------
const SinPic: React.FC = () => (
	<div style={{position: 'relative', width: 820, height: 420}}>
		<StudioPlot x={0} y={0} width={820} height={420} window={{x: [-0.2, 3.5], y: [-0.3, 1.3]}} xTicks={PT} yTicks={[1]} xLabel="x" yLabel="y = sin x" at={-30}>
			{(m: PlotMap) => {const [a, ay] = m.p(PI / 3, 0), [b] = m.p(PI, 0); return <>
				<g clipPath={m.clip}><path d={fnPath(m, Math.sin, -0.2, 3.5)} stroke={INK} strokeWidth={6} fill="none" /></g>
				<path d={`M${a},${ay - 30} V${ay - 44} H${b} V${ay - 30}`} stroke={AMBER} strokeWidth={5} fill="none" />
			</>;}}
		</StudioPlot>
	</div>
);
export const S09: React.FC = () => (
	<Attempt hold={hold('scene-09')} pauseAt={K9.pause} top={430} size={56} given={[<>f(x) = sin x</>, <>from π/3 to π</>]} picture={<SinPic />}>
		<div>Evaluate <Int lo="π/3" hi="π">sin x</Int>.</div>
	</Attempt>
);

// ---------- 10. feedback 1 ----------
const RP = {x: 1100, y: 330, w: 790, h: 630};
export const S10: React.FC = () => {
	const k = K10;
	const fr = useCurrentFrame();
	return (
		<>
			<TaskStrip text="Check your working" at={2} size={56} />
			<RolesOn on={fr >= 10}><QuestionCard at={-40} shrinkAt={-30} w={1100} y={170} size={44}><div>Evaluate the integral of sin x from π/3 to π.</div></QuestionCard></RolesOn>
			<GivensStrip x={1290} y={160} size={30} maxW={600} items={[{content: 'f(x) = sin x', role: 'b', at: 6}, {content: 'from π/3 to π', at: 10}]} />
			<Row x={96} y={310} at={k.prim} size={48}>F(x) = <Neg />cos x</Row>
			<Row x={96} y={390} at={k.atpi} size={46} color={ABLUE}>F(π) = −cos π = 1</Row>
			<Row x={96} y={470} at={k.atpi3} size={46} color={AMBER}>F(π/3) = <Neg />cos(π/3) = −½</Row>
			<StudioLimitSubstitution x={96} y={560} size={52} prefix="=" upper="1" lowerSign="−" lowerBody="½" at={k.so} bracketAt={k.brk} lowerAt={k.brk + 17} collapseAt={k.which - 6} />
			<AnswerBox x={96} y={660} at={k.which} size={52}>= 3/2</AnswerBox>
			<MistakeCard x={96} y={780} w={960} at={k.wrong} size={48} wrong={<>1/2</>} caption="1 − ½: the bracket was dropped" />
			<Graph x={RP.x} y={RP.y} w={RP.w} h={RP.h} win={{x: [-0.2, 3.5], y: [-0.3, 1.3]}} fn={Math.sin} a={PI / 3} b={PI} from={-0.2} to={3.45} xTicks={PT} yTicks={[1]} yLabel="y = sin x"
				kids={m => <PLabel p={m.p(1.4, 0.35)} text="+ expected" color="#287347" size={44} hand />} />
			<div style={{position: 'absolute', left: 1700, top: 520, opacity: prog(fr, k.which, 10)}}><Tick size={56} /></div>
		</>
	);
};

// ---------- 11. attempt 2 ----------
const NLPic: React.FC = () => <NumLine w={820} h={400} brackets={[{from: 0, to: 2, label: '3', level: 0}, {from: 0, to: 5, label: '7', level: 1}]} />;
export const S11: React.FC = () => (
	<Attempt hold={hold('scene-11')} pauseAt={K11.pause} heading="Last one" top={470} size={46} given={[<><Int lo="0" hi="5">f(x)</Int> = 7</>, <><Int lo="0" hi="2">f(x)</Int> = 3</>]} picture={<NLPic />}>
		<div>f is continuous. Given <Int lo="0" hi="5">f(x)</Int> = 7 and <Int lo="0" hi="2">f(x)</Int> = 3, find <Int lo="5" hi="2">f(x)</Int>.</div>
	</Attempt>
);

// ---------- 12. feedback 2 ----------
export const S12: React.FC = () => {
	const k = K12;
	const fr = useCurrentFrame();
	const q = prog(fr, k.four, 10);
	return (
		<>
			<TaskStrip text="Check your working" at={2} size={56} />
			<RolesOn on={fr >= 10}><QuestionCard at={-40} shrinkAt={-30} w={1100} y={170} size={44} heading="Last one"><div>The integral of f from 0 to 5 is 7, and from 0 to 2 is 3. Find the integral from 5 to 2.</div></QuestionCard></RolesOn>
			<GivensStrip x={1290} y={160} size={30} maxW={600} items={[{content: '0 to 5: 7', at: 6}, {content: '0 to 2: 3', at: 10}, {content: 'f continuous', at: 14}]} />
			<Row x={96} y={320} at={k.split} size={46}><Int lo="0" hi="2">f</Int> + <Int lo="2" hi="5">f</Int> = <Int lo="0" hi="5">f</Int></Row>
			<Row x={96} y={430} at={k.so} size={46}>3 + <Int lo="2" hi="5">f</Int> = 7<span style={{opacity: q}}>, so <Int lo="2" hi="5">f</Int> = 4</span></Row>
			<BoxCard x={96} y={610} w={960} at={-30} out={k.answer - 4} size={40} title="plan">split at 2, then read the direction: 5 down to 2</BoxCard>
			<HandTag x={110} y={560} text="but it runs from 5 down to 2: the sign flips" at={k.but} size={40} color={GRAD} />
			<AnswerBox x={96} y={610} at={k.answer} size={48}><Int lo="5" hi="2">f(x)</Int> = −<Int lo="2" hi="5">f(x)</Int> = −4</AnswerBox>
			<MistakeCard x={96} y={790} w={960} at={k.wrong} size={48} wrong={<>4</>} caption="limits reversed: the sign flips" />
			<div style={{position: 'absolute', left: 1100, top: 380}}>
				<NumLine w={790} h={520} brackets={[{from: 0, to: 5, label: '7', level: 2}, {from: 0, to: 2, label: '3', level: 0, color: TEAL}, {from: 2, to: 5, label: q > 0.5 ? '4' : '?', level: 0, color: TEAL, o: prog(fr, k.so, 12)}, {from: 2, to: 5, label: 'from 5 to 2: −4', level: 1, color: '#287347', o: prog(fr, k.answer, 12)}]} />
			</div>
		</>
	);
};

// ---------- 13. handoff ----------
const I09Board: React.FC<{headAt: number; l1At: number; l2At: number; pulseAt: number; areaAt: number; tagsAt: [number, number]}> = ({headAt, l1At, l2At, pulseAt, areaAt, tagsAt}) => {
	const fr = useCurrentFrame();
	const p1 = pulseAt > 0 ? Math.max(0, Math.sin(Math.min(1, Math.max(0, (fr - pulseAt) / 24)) * PI)) : 0;
	const p2 = pulseAt > 0 ? Math.max(0, Math.sin(Math.min(1, Math.max(0, (fr - pulseAt - 26) / 24)) * PI)) : 0;
	return (
		<>
			<SceneHeading text="Next: signed integral or area?" at={headAt} size={56} />
			<StudioPlot x={40} y={150} width={1060} height={800} window={{x: [-0.3, 6.7], y: [-1.45, 1.45]}} xTicks={[{value: PI, label: 'π'}, {value: 2 * PI, label: '2π'}]} yTicks={[-1, 1]} xLabel="x" yLabel="y = sin x" at={headAt}>
				{(m: PlotMap) => <>
					<g opacity={1}><AreaFillLayer m={m} fn={Math.sin} a={0} to={2 * PI} signed /></g>
					{p1 > 0.01 ? <g opacity={0.5 * p1}><AreaFillLayer m={m} fn={Math.sin} a={0} to={PI} color="#1f8a8f" /></g> : null}
					{p2 > 0.01 ? <g opacity={0.5 * p2}><AreaFillLayer m={m} fn={Math.sin} a={PI} to={2 * PI} color="#d18f1f" /></g> : null}
					<g clipPath={m.clip}><path d={fnPath(m, Math.sin, -0.3, 6.7)} stroke={INK} strokeWidth={6} fill="none" /></g>
					<PLabel p={m.p(1.1, 0.45)} text="+" color="#13767a" size={72} />
					<PLabel p={m.p(4.25, -0.65)} text="−" color="#9c5a00" size={72} />
					<PLabel p={m.p(0.2, -1.05)} text="the arch below cancels the arch above" color={SOFT} size={36} hand o={prog(fr, tagsAt[0], 12)} />
					<PLabel p={m.p(3.5, 1.15)} text="but the shaded region isn't nothing" color={SOFT} size={36} hand o={prog(fr, tagsAt[1], 12)} />
				</>}
			</StudioPlot>
			<Row x={1150} y={170} at={l1At} size={50}><Int lo="0" hi="2π">sin x</Int> = <Lims lo="0" hi="2π">−cos x</Lims></Row>
			<Row x={1150} y={280} at={l2At} size={50}>= −1 − (−1) = 0</Row>
			<Chip x={1150} y={420} at={areaAt} size={52} color="#d18f1f">Area = ?</Chip>
			<Chip x={1150} y={540} at={areaAt} size={44} color="#d18f1f">Next: signed integral or area?</Chip>
			<div style={{position: 'absolute', left: 1700, top: 380, opacity: prog(fr, areaAt, 14), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 120, color: '#7a4600'}}>?</div>
			<Hand x={1160} y={660} at={areaAt} size={42} color={SOFT}>signed: + and − cancel</Hand>
			<Hand x={1160} y={730} at={areaAt} size={42} color={SOFT}>area: every piece counts</Hand>
		</>
	);
};
/** i09's final frame (i10 opens on it). */
export const I09FinalFrame: React.FC = () => <I09Board headAt={-300} l1At={-300} l2At={-300} pulseAt={-1} areaAt={-300} tagsAt={[-300, -300]} />;
export const S13: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K13;
	const sw = prog(fr, k.but, 16);
	return (
		<>
			{sw < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}>
				<SceneHeading text="Keep every sign" at={-30} size={56} />
				<Graph x={40} y={170} w={880} h={780} win={{x: [-2.6, 1.6], y: [-0.6, 4.6]}} fn={sq} a={-2} b={1} from={-2.2} to={1.45} xTicks={[-2, -1, 1]} yTicks={[2, 4]} yLabel="y = x²" kids={m => <PLabel p={m.p(-1.0, 3.3)} text="= 3, all above" color="#287347" size={44} hand />} />
				<FramedCard x={980} y={170} w={900} h={620} />
				{[{t: 'Keep F(a) in brackets.', at: 11}, {t: 'Flip the sign when the limits swap.', at: 97}, {t: 'Add the pieces at a split.', at: 159}].map((l, i) => <div key={i} style={{position: 'absolute', left: 1030, top: 210 + i * 180, width: 820, opacity: prog(fr, l.at, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 56, lineHeight: 1.1, color: INK}}>{l.t}</div>)}
			</div> : null}
			{sw > 0 ? <div style={{position: 'absolute', inset: 0, opacity: sw}}><I09Board headAt={k.but} l1At={k.int} l2At={k.zero} pulseAt={k.cancels} areaAt={k.area} tagsAt={[k.arch, k.yet]} /></div> : null}
		</>
	);
};

// ---------- 14. key notes ----------
export const S14: React.FC = () => {
	const fr = useCurrentFrame();
	const items = [
		{content: <><Int lo="a" hi="b">f(x)</Int> = F(b) − (F(a)): bracket F(a).</>, at: 10},
		{content: <>Predict the sign from the graph first.</>, at: 22},
		{content: <>Split: <Int lo="a" hi="b">f</Int> + <Int lo="b" hi="c">f</Int> = <Int lo="a" hi="c">f</Int>, a ≤ b ≤ c.</>, at: 34},
		{content: <>Reverse: <Int lo="b" hi="a">f</Int> = −<Int lo="a" hi="b">f</Int>; same limits give 0.</>, at: 46},
		{content: <>Watch: −cos 0 = −1, <Ex>0</Ex> = 1, ln 1 = 0.</>, at: 58},
	];
	const back = prog(fr, Math.max(1350, dur('scene-14')) - 40, 18);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
				<SceneHeading text="Key notes: what to write in your book" at={2} />
				<HandTag x={1824} y={116} text="pause to copy" at={K14.pause} size={42} color="#8a5a12" anchor="end" />
				<KeyNotesBullets x={96} y={230} w={1070} items={items} size={40} gap={70} />
				<FramedCard x={1190} y={196} w={690} h={770} at={16} />
				<div style={{position: 'absolute', left: 1230, top: 214, opacity: prog(fr, 16, 14), width: 620}}>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: SOFT}}>Memory aid</div>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46, lineHeight: 1.1, color: INK, marginTop: 4}}>Top minus (bracketed bottom). Swap the ends, swap the sign. Split at a point inside, and the pieces add up.</div>
				</div>
				{fr >= 16 ? <div style={{position: 'absolute', inset: 0, opacity: prog(fr, 16, 14)}}>
					<ThermoRig x={1250} y={560} h={390} T={1} mark={{T: -2, o: 1}} />
					<div style={{position: 'absolute', left: 1440, top: 700, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, color: INK, whiteSpace: 'pre'}}><span style={{color: ABLUE}}>1</span> − <span style={{color: AMBER}}>(−2)</span> = 3</div>
					<div style={{position: 'absolute', left: 1440, top: 780, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, color: SOFT}}>3 degrees warmer</div>
				</div> : null}
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><I09FinalFrame /></div> : null}
		</>
	);
};
