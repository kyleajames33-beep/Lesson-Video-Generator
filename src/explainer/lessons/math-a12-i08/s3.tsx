// Scenes 10 to 16: the memory aid (two columns, each with its picture), attempt 1 (A(x) from 2 with a root
// integrand) and its brief feedback, attempt 2 (FTC on 3x²) and its brief feedback, the handoff (exported as
// I08FinalFrame, i09's opening) and the key notes, which return silently to that frame.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, prog} from '../../kit';
import {AreaFillLayer, CARD, FrameSvg, GivensStrip, HandTag, KeyNotesBullets, MarkSpan, MistakeCard, QuestionCard, RolesOn, SceneHeading, StudioLimitSubstitution, StudioPlot, TaskStrip, fnPath, regionPath} from '../../math/studio';
import type {PlotMap} from '../../math/studio';
import {K10, K11, K12, K13, K14, K15, K16} from './cuemap';
import {dur, hold} from './common';
import {A, ABLUE, AMBER, AMBER_STROKE, AnswerBox, Attempt, BoxCard, Bu, Chip, FramedCard, GRAD, Int, Lims, MiniPlot, PLabel, PairView, Rows, Rt, TEAL, Te, f} from './parts';
import type {PairG} from './parts';

const SOFT = '#4f4840';
const AidA = 'Differentiate the area, get the height.';
const AidB = 'Integrate the rate, get the change.';

// ---------- 10. memory aid ----------
const GA: PairG = {x: 120, y: 420, w: 780, hTop: 240, hBot: 230, gap: 12, wx: [-0.3, 6.3], yTop: [-0.6, 5.2], yBot: [-3.4, 3.4]};
const AreaPic: React.FC<{x: number; y: number; w: number; h: number; o?: number}> = ({x, y, w, h, o = 1}) => (
	<StudioPlot x={x} y={y} width={w} height={h} window={{x: [-0.2, 3.3], y: [-0.4, 3.4]}} xTicks={[{value: 0.5, label: 'a'}, {value: 2.5, label: 'b'}]} yTicks={[]} xLabel="t" yLabel="rate f" at={-30} opacity={o}>
		{m => <>
			<AreaFillLayer m={m} fn={f} a={0.5} to={2.5} signed />
			<g clipPath={m.clip}><path d={fnPath(m, f, -0.2, 3.3)} stroke={TEAL} strokeWidth={6} fill="none" /></g>
			<PLabel p={m.p(0.75, 0.75)} text="change" color={INK} size={40} hand />
		</>}
	</StudioPlot>
);
export const S10: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K10;
	return (
		<>
			<SceneHeading text="The pair to remember" at={4} size={56} />
			<FramedCard x={60} y={150} w={1800} h={820} />
			<div style={{position: 'absolute', left: 110, top: 170, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: SOFT}}>Memory aid</div>
			<div style={{position: 'absolute', left: 110, top: 230, width: 820, opacity: prog(fr, k.diff, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 60, lineHeight: 1.1, color: INK}}>{AidA}</div>
			<div style={{position: 'absolute', left: 1000, top: 230, width: 820, opacity: prog(fr, k.integ, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 60, lineHeight: 1.1, color: INK}}>{AidB}</div>
			<PairView g={GA} X={3.6} topLabel="area A" botLabel="height f" xLabel="t" xTicks={[]} yTopTicks={[]} yBotTicks={[]}
				topKids={m => {const [px, py] = m.p(3.6, A(3.6)), vx = m.sx, vy = 0.6 * m.sy, l = Math.hypot(vx, vy); return <line x1={px - (vx / l) * 80} y1={py - (vy / l) * 80} x2={px + (vx / l) * 80} y2={py + (vy / l) * 80} stroke={GRAD} strokeWidth={6} strokeLinecap="round" />;}} />
			<AreaPic x={1000} y={420} w={800} h={420} o={prog(fr, k.integ, 12) * 0.85 + 0.15} />
			<div style={{position: 'absolute', left: 1240, top: 860, opacity: prog(fr, k.integ + 10, 12), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 48, color: INK}}>= F(b) − F(a)</div>
			<div style={{position: 'absolute', left: 130, top: 890, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 34, color: INK, opacity: prog(fr, k.integ + 20, 12)}}>f continuous. Any primitive F works.</div>
			<FrameSvg style={{opacity: prog(fr, k.works, 12)}}>
				<path d="M 900 300 C 950 250, 960 250, 990 290" stroke={GRAD} strokeWidth={6} fill="none" strokeLinecap="round" />
				<path d="M 972 274 L 992 292 L 968 300" stroke={GRAD} strokeWidth={6} fill="none" strokeLinecap="round" strokeLinejoin="round" />
				<text x={945} y={236} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34, fill: GRAD}}>why</text>
			</FrameSvg>
		</>
	);
};

// ---------- 11. attempt 1 ----------
const root = (t: number) => Math.sqrt(1 + t * t * t);
const RootPic: React.FC = () => (
	<div style={{position: 'relative', width: 820, height: 420}}>
		<MiniPlot x={0} y={0} w={820} h={420} win={{x: [-0.2, 3.3], y: [-0.5, 6.6]}} xTicks={[]} yTicks={[]} xLabel="t" yLabel="y" curves={[{fn: root, from: 0, to: 3.2, color: INK}]}>
			{m => {const [p2, ay] = m.p(2, 0), [px] = m.p(2.7, 0); return <>
				<path d={regionPath(m, root, 2, 2.7)} fill="#d6eeee" stroke="none" />
				<circle cx={p2} cy={ay} r={13} fill={INK} stroke={CARD} strokeWidth={4} /><text x={p2} y={ay + 46} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, fill: INK}}>2</text>
				<circle cx={px} cy={ay} r={13} fill={AMBER_STROKE} stroke={CARD} strokeWidth={4} /><text x={px} y={ay + 46} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, fill: AMBER}}>x</text>
			</>;}}
		</MiniPlot>
	</div>
);
export const S11: React.FC = () => (
	<Attempt hold={hold('scene-11')} pauseAt={K11.pause} top={430} size={52} given={[<>A(x) = <Int lo="2" hi="x" v="t"><Rt>1 + t³</Rt></Int></>, <>find A(2) and A′(2)</>]} picture={<RootPic />}>
		<div>Let A(x) = <Int lo="2" hi="x" v="t"><Rt>1 + t³</Rt></Int>. Find A(2) and A′(2).</div>
	</Attempt>
);

// ---------- 12. feedback 1 ----------
const RP = {x: 1100, y: 330, w: 790, h: 630};
export const S12: React.FC = () => {
	const k = K12;
	const fr = useCurrentFrame();
	return (
		<>
			<TaskStrip text="Check your working" at={2} size={56} />
			<RolesOn on={fr >= 10}><QuestionCard at={-40} shrinkAt={-30} w={1100} y={170} size={44}><div>A(x) is the integral of <Rt>1 + t³</Rt> from 2 to x. Find A(2) and A′(2).</div></QuestionCard></RolesOn>
			<GivensStrip x={1290} y={160} size={30} maxW={600} items={[{content: <>integrand <Rt>1 + t³</Rt></>, role: 'b', at: 6}, {content: 'start: 2', at: 10}]} />
			<div style={{position: 'absolute', left: 96, top: 320, opacity: prog(fr, k.zero, 12), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 46, color: INK, whiteSpace: 'pre'}}>A(2) = <Int lo="2" hi="2" v="t"><Rt>1 + t³</Rt></Int> = 0</div>
			<div style={{position: 'absolute', left: 96, top: 430, opacity: prog(fr, k.soA, 12), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 50, color: INK, whiteSpace: 'pre'}}>A′(x) = <Te><Rt>1 + x³</Rt></Te></div>
			<HandTag x={520} y={462} text="the height at the edge" at={k.soA + 20} size={40} color={TEAL} />
			<AnswerBox x={96} y={580} at={k.three} size={46}>A(2) = 0,  A′(2) = <Rt>1 + 8</Rt> = 3</AnswerBox>
			<BoxCard x={96} y={730} w={960} at={-30} out={k.wrong - 6} size={42} title="last scenes">A(x) = area from the start up to x, and A′(x) = f(x)</BoxCard>
			<MistakeCard x={96} y={730} w={960} at={k.wrong} size={46} wrong={<>A′(2) = 2</>} caption="that differentiates the root: 12/6 = 2" />
			<StudioPlot x={RP.x} y={RP.y} width={RP.w} height={RP.h} window={{x: [-0.2, 3.3], y: [-0.5, 6.6]}} xTicks={[1, 2, 3]} yTicks={[3, 6]} xLabel="t" yLabel="y = √(1 + t³)" at={-30}>
				{(m: PlotMap) => {const [p2, ay] = m.p(2, 0), [, py] = m.p(2, 3); return <>
					<g clipPath={m.clip}><path d={fnPath(m, root, 0, 3.3)} stroke={TEAL} strokeWidth={6} fill="none" /></g>
					<circle cx={p2} cy={ay} r={14} fill={INK} stroke={CARD} strokeWidth={4} />
					<PLabel p={m.p(1.2, 0.5)} text="start 2: no strip yet" color={INK} size={36} hand o={prog(fr, k.because, 12)} />
					<g opacity={prog(fr, k.soA, 12)}><line x1={p2} x2={p2} y1={ay} y2={py} stroke={AMBER_STROKE} strokeWidth={8} /><circle cx={p2} cy={py} r={12} fill={TEAL} stroke={CARD} strokeWidth={4} /></g>
					<PLabel p={m.p(0.15, 3.4)} text="height at 2: √9 = 3" color={TEAL} size={40} o={prog(fr, k.three, 12)} />
				</>;}}
			</StudioPlot>
		</>
	);
};

// ---------- 13. attempt 2 ----------
const cube3 = (x: number) => 3 * x * x;
const CubePic: React.FC = () => (
	<div style={{position: 'relative', width: 820, height: 420}}>
		<MiniPlot x={0} y={0} w={820} h={420} win={{x: [-0.2, 3.4], y: [-2, 30]}} xTicks={[1, 3]} yTicks={[]} xLabel="x" yLabel="y = 3x²" curves={[{fn: cube3, from: 0, to: 3.2, color: INK}]}>
			{m => <path d={regionPath(m, cube3, 1, 3)} fill="#d6eeee" stroke="none" />}
		</MiniPlot>
	</div>
);
export const S13: React.FC = () => (
	<Attempt hold={hold('scene-13')} pauseAt={K13.pause} heading="Last one" top={430} size={52} given={[<>f(x) = 3x²</>, <>from x = 1 to x = 3</>]} picture={<CubePic />}>
		<div>Use the Fundamental Theorem of Calculus to evaluate <Int lo="1" hi="3">3x²</Int>.</div>
	</Attempt>
);

// ---------- 14. feedback 2 ----------
export const S14: React.FC = () => {
	const k = K14;
	const fr = useCurrentFrame();
	return (
		<>
			<TaskStrip text="Check your working" at={2} size={56} />
			<RolesOn on={fr >= 10}><QuestionCard at={-40} shrinkAt={-30} w={1100} y={170} size={44} heading="Last one"><div>Use the FTC to evaluate the integral of 3x² from 1 to 3.</div></QuestionCard></RolesOn>
			<GivensStrip x={1290} y={160} size={30} maxW={600} items={[{content: 'f(x) = 3x²', role: 'b', at: 6}, {content: 'from 1 to 3', at: 10}]} />
			<div style={{position: 'absolute', left: 96, top: 330, opacity: prog(fr, k.prim, 12), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 48, color: INK, whiteSpace: 'pre'}}>a primitive of 3x²: <span style={{opacity: prog(fr, k.cubed, 12)}}>F(x) = <Bu>x³</Bu></span></div>
			<HandTag x={760} y={430} text="check: d/dx x³ = 3x²" at={k.cubed + 20} size={38} color={SOFT} />
			<StudioLimitSubstitution x={96} y={470} size={48} prefix={<><Lims lo="1" hi="3">x³</Lims> =</>} upper="3³" lowerBody="1³" at={k.so} bracketAt={k.so + 50} lowerAt={k.so + 76} then={{content: <>= 27 − 1</>, at: k.so + 100}} />
			<AnswerBox x={96} y={580} at={k.six} size={52}>= 26</AnswerBox>
			<div style={{position: 'absolute', left: 340, top: 592, opacity: prog(fr, k.add, 12), fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 40, color: SOFT, whiteSpace: 'pre'}}>also <Lims lo="1" hi="3">x³ + 5</Lims> = 32 − 6 = 26</div>
			<BoxCard x={96} y={450} w={960} at={-30} out={k.so - 6} size={44} title="the theorem">FTC: <Int lo="a" hi="b">f(x)</Int> = F(b) − F(a)</BoxCard>
			<MistakeCard x={96} y={730} w={960} at={k.wrong} size={50} wrong={<>27</>} caption="F(1) not subtracted" />
			<StudioPlot x={RP.x} y={RP.y} width={RP.w} height={RP.h} window={{x: [-0.2, 3.4], y: [-2, 30]}} xTicks={[1, 2, 3]} yTicks={[10, 20]} xLabel="x" yLabel="y = 3x²" at={-30}>
				{(m: PlotMap) => <>
					<path d={regionPath(m, cube3, 1, 3)} fill="#d6eeee" stroke="#1f8a8f" strokeWidth={3} />
					<g clipPath={m.clip}><path d={fnPath(m, cube3, 0, 3.2)} stroke={TEAL} strokeWidth={6} fill="none" /></g>
					<PLabel p={m.p(2.25, 5)} text="26" color={INK} size={60} o={prog(fr, k.six, 12)} />
					<PLabel p={m.p(0.1, 26)} text="F(3) − F(1) = 27 − 1" color={ABLUE} size={40} o={prog(fr, k.so + 100, 12)} />
				</>}
			</StudioPlot>
		</>
	);
};

// ---------- 15. handoff ----------
const xx = (x: number) => x * x;
const I08Board: React.FC<{headAt: number; plotAt: number; l1At: number; l2At: number; ringAt: number; chipAt: number}> = ({headAt, plotAt, l1At, l2At, ringAt, chipAt}) => {
	const fr = useCurrentFrame();
	const pulse = 1 + 0.35 * Math.max(0, Math.sin(Math.max(0, fr - ringAt) * 0.3)) * (fr >= ringAt && fr < ringAt + 70 ? 1 : 0);
	return (
		<>
			<SceneHeading text="Next: evaluating without losing signs" at={headAt} size={56} />
			<StudioPlot x={40} y={150} width={860} height={800} window={{x: [-2.5, 1.7], y: [-0.5, 4.6]}} xTicks={[-2, -1, 1]} yTicks={[2, 4]} xLabel="x" yLabel="y = x²" at={plotAt}>
				{(m: PlotMap) => <>
					<AreaFillLayer m={m} fn={xx} a={-2} to={1} signed />
					<g clipPath={m.clip}><path d={fnPath(m, xx, -2.5, 1.7)} stroke={INK} strokeWidth={6} fill="none" /></g>
					{[-2, 1].map(X => {const [px, py] = m.p(X, xx(X)); return <circle key={X} cx={px} cy={py} r={12} fill={INK} stroke={CARD} strokeWidth={4} />;})}
				</>}
			</StudioPlot>
			<div style={{position: 'absolute', left: 960, top: 190, opacity: prog(fr, l1At, 14), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 64, color: INK, whiteSpace: 'pre'}}><Int lo="−2" hi="1">x²</Int> = <Lims lo="−2" hi="1">x³/3</Lims></div>
			<div style={{position: 'absolute', left: 960, top: 360, opacity: prog(fr, l2At, 14), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 64, color: INK, whiteSpace: 'pre'}}>= 1/3 <span style={{display: 'inline-block', transform: `scale(${pulse})`, color: pulse > 1.05 ? AMBER : INK}}>−</span> <MarkSpan kind="circle" at={ringAt} color={AMBER_STROKE} width={5}>(−2)³</MarkSpan>/3 = ?</div>
			<Chip x={960} y={540} at={chipAt} size={46} color={AMBER_STROKE}>Next: evaluating without losing signs</Chip>
			<div style={{position: 'absolute', left: 1700, top: 600, opacity: prog(fr, chipAt, 14), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 120, color: '#7a4600'}}>?</div>
			<HandTag x={970} y={720} text="where do the minus signs go?" at={chipAt} size={46} color="#7a4600" />
			<HandTag x={970} y={820} text="every strip sits above the axis" at={chipAt} size={40} color={TEAL} />
		</>
	);
};
/** i08's final frame (i09 opens on it). */
export const I08FinalFrame: React.FC = () => <I08Board headAt={-300} plotAt={-300} l1At={-300} l2At={-300} ringAt={-300} chipAt={-300} />;
export const S15: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K15;
	const sw = prog(fr, k.next, 16);
	const X = Math.min(6, Math.max(0, (fr - 10) / 40));
	return (
		<>
			{sw < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}>
				<SceneHeading text="The area grows at the height of its edge" at={-30} size={56} />
				<PairView X={X} />
				<FramedCard x={1150} y={170} w={720} h={500} />
				<div style={{position: 'absolute', left: 1190, top: 190, width: 650, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52, lineHeight: 1.12, color: INK}}>{AidA} {AidB}</div>
				<div style={{position: 'absolute', left: 1160, top: 720, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 56, color: INK, whiteSpace: 'pre'}}><Int lo="a" hi="b" color={TEAL}>f(x)</Int> = F(b) − F(a)</div>
			</div> : null}
			{sw > 0 ? <div style={{position: 'absolute', inset: 0, opacity: sw}}><I08Board headAt={k.next} plotAt={k.next} l1At={k.heres} l2At={k.third} ringAt={k.go} chipAt={k.next + 10} /></div> : null}
		</>
	);
};

// ---------- 16. key notes ----------
export const S16: React.FC = () => {
	const fr = useCurrentFrame();
	const items = [
		{content: <>A(x) = <Int lo="a" hi="x" v="t">f(t)</Int>: signed area from a up to x.</>, at: 10},
		{content: <>A′(x) = f(x), for f continuous.</>, at: 22},
		{content: <>A new start a shifts A by a constant only.</>, at: 34},
		{content: <>FTC: <Int lo="a" hi="b">f(x)</Int> = F(b) − F(a), any primitive F.</>, at: 46},
		{content: <>Always subtract F(a), even when it is 0.</>, at: 58},
	];
	const back = prog(fr, Math.max(1350, dur('scene-16')) - 40, 18);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
				<SceneHeading text="Key notes: what to write in your book" at={2} />
				<HandTag x={1824} y={116} text="pause to copy" at={K16.pause} size={42} color="#8a5a12" anchor="end" />
				<KeyNotesBullets x={96} y={230} w={1070} items={items} size={40} gap={80} />
				<FramedCard x={1190} y={196} w={690} h={770} at={16} />
				<div style={{position: 'absolute', left: 1230, top: 214, opacity: prog(fr, 16, 14), width: 620}}>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: SOFT}}>Memory aid</div>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 48, lineHeight: 1.1, color: INK, marginTop: 4}}>{AidA}<br />{AidB}</div>
					<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 34, lineHeight: 1.25, color: INK, marginTop: 10}}>f continuous. Any primitive F works.</div>
				</div>
				{fr >= 16 ? <div style={{position: 'absolute', inset: 0, opacity: prog(fr, 16, 14)}}><AreaPic x={1230} y={600} w={610} h={340} /></div> : null}
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><I08FinalFrame /></div> : null}
		</>
	);
};
