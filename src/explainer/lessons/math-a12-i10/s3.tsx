// Scenes 9 to 14: attempt 1 (area for y = x(x − 2) on [0, 4]) and its brief feedback, attempt 2 (integral and area
// from a labelled graph) and its brief feedback, the handoff (exported as I10FinalFrame, i11's opening: y = ln x
// with the region against the y-axis for 0 ≤ y ≤ 1 and one sideways ghost strip) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, prog} from '../../kit';
import {AreaFillLayer, CARD, GivensStrip, HandTag, KeyNotesBullets, MistakeCard, QuestionCard, RolesOn, SceneHeading, StudioPlot, TaskStrip, fnPath, regionPath, smooth} from '../../math/studio';
import type {PlotMap} from '../../math/studio';
import {K9, K10, K11, K12, K13, K14} from './cuemap';
import {dur, hold} from './common';
import {BPlot} from './s1';
import {q4} from './parts';
import {ABLUE, AnswerBox, Attempt, BoxCard, Chip, FlipFill, FramedCard, Hand, Int, LiftShaftSim, Named, PLabel, Row, SOFT, TEAL} from './parts';

// ---------- 9. attempt 1 ----------
const AxesPic: React.FC = () => (
	<div style={{position: 'relative', width: 820, height: 420}}>
		<StudioPlot x={0} y={0} width={820} height={420} window={{x: [-0.5, 4.6], y: [-2, 9]}} xTicks={[4]} yTicks={[]} xLabel="x" yLabel="y" at={-30}>
			{(m: PlotMap) => {const [x0] = m.p(0, 0), [x4] = m.p(4, 0); return <>
				<line x1={x4} x2={x4} y1={m.box.top} y2={m.box.top + m.box.height} stroke={INK} strokeWidth={4} strokeDasharray="12 9" />
				<text x={x4 - 12} y={m.box.top + 34} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: INK}}>x = 4</text>
				<text x={x0 + 12} y={m.box.top + 34} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: INK}}>x = 0</text>
			</>;}}
		</StudioPlot>
	</div>
);
export const S09: React.FC = () => (
	<Attempt hold={hold('scene-09')} pauseAt={K9.pause} top={470} size={46} given={[<>y = x(x − 2)</>, <>x = 0 to x = 4</>]} picture={<AxesPic />}>
		<div>Find the area of the region bounded by y = x(x − 2), the x-axis and the lines x = 0 and x = 4.</div>
	</Attempt>
);

// ---------- 10. feedback 1 ----------
const p2 = (x: number) => x * (x - 2);
const RP = {x: 1100, y: 330, w: 790, h: 630};
export const S10: React.FC = () => {
	const k = K10;
	const fr = useCurrentFrame();
	const flip = smooth(prog(fr, k.make, 26));
	return (
		<>
			<TaskStrip text="Check your working" at={2} size={56} />
			<RolesOn on={fr >= 10}><QuestionCard at={-40} shrinkAt={-30} w={1100} y={170} size={44}><div>Area bounded by y = x(x − 2), the x-axis, x = 0 and x = 4.</div></QuestionCard></RolesOn>
			<GivensStrip x={1290} y={160} size={30} maxW={600} items={[{content: 'y = x(x − 2)', role: 'a', at: 6}, {content: 'x = 0 to x = 4', at: 10}]} />
			<Row x={96} y={310} at={k.zeros} size={48} color={TEAL}>zeros: x = 0, x = 2</Row>
			<Row x={96} y={395} at={k.from02} size={44}><Int lo="0" hi="2">(x² − 2x)</Int><span style={{opacity: prog(fr, k.m43, 10)}}> = −4/3</span></Row>
			<Row x={96} y={480} at={k.from24} size={44}><Int lo="2" hi="4">(x² − 2x)</Int><span style={{opacity: prog(fr, k.t20, 10)}}> = 20/3</span></Row>
			<AnswerBox x={96} y={590} at={k.sum} size={48}>area = 4/3 + 20/3 = 24/3<span style={{opacity: prog(fr, k.eight, 10)}}> = 8</span></AnswerBox>
			<BoxCard x={96} y={740} w={960} at={-30} out={k.wrong - 16} size={42} title="plan">zeros, sign of each piece, two integrals, make positive, add</BoxCard>
			<MistakeCard x={96} y={740} w={960} at={k.wrong - 10} size={48} wrong={<>16/3</>} caption="that's signed: 20/3 − 4/3" />
			<BPlot x={RP.x} y={RP.y} w={RP.w} h={RP.h} win={{x: [-0.3, 4.4], y: [-2, 8.8]}} fn={p2} from={-0.2} to={4.2} xTicks={[2, 4]} yTicks={[4, 8]}
				under={m => <><FlipFill m={m} fn={p2} a={0} b={2} p={flip} /><AreaFillLayer m={m} fn={p2} a={2} to={4} signed /></>}
				kids={m => <><PLabel p={m.p(0.15, 3.0)} text="− on (0, 2), + on (2, 4)" color={TEAL} size={36} hand o={prog(fr, k.from02, 12)} /><PLabel p={m.p(3.1, 2.0)} text="20/3" size={44} o={prog(fr, k.t20, 12)} /><PLabel p={m.p(0.55, flip > 0.5 ? 0.35 : -1.3)} text={flip > 0.5 ? '4/3' : '−4/3'} size={40} o={prog(fr, k.m43, 12)} /></>} />
		</>
	);
};

// ---------- 11. attempt 2 ----------
const g6 = (x: number) => 0.25 * x * (2 - x) * (6 - x);
const G6Pic: React.FC<{signed?: boolean; w?: number; h?: number}> = ({signed = false, w = 820, h = 420}) => (
	<div style={{position: 'relative', width: w, height: h}}>
		<StudioPlot x={0} y={0} width={w} height={h} window={{x: [-0.4, 6.6], y: [-3.6, 2.4]}} xTicks={[2, 6]} yTicks={[]} xLabel="x" yLabel="y = f(x)" at={-30}>
			{(m: PlotMap) => <>
				{signed ? <AreaFillLayer m={m} fn={g6} a={0} to={6} signed /> : <><path d={regionPath(m, g6, 0, 2)} fill="#dcd7cd" /><path d={regionPath(m, g6, 2, 6)} fill="#dcd7cd" /></>}
				<g clipPath={m.clip}><path d={fnPath(m, g6, -0.2, 6.4)} stroke={signed ? ABLUE : INK} strokeWidth={6} fill="none" /></g>
				<PLabel p={m.p(0.2, 1.6)} text="area 5" size={36} />
				<PLabel p={m.p(3.2, -1.2)} text="area 3" size={36} />
			</>}
		</StudioPlot>
	</div>
);
export const S11: React.FC = () => (
	<Attempt hold={hold('scene-11')} pauseAt={K11.pause} heading="Last one" top={570} size={38} given={[<>above, 0 to 2: area 5</>, <>below, 2 to 6: area 3</>]} picture={<G6Pic />}>
		<div>The graph of y = f(x) is shown for 0 ≤ x ≤ 6. The region from x = 0 to x = 2 lies above the axis with area 5; the region from x = 2 to x = 6 lies below with area 3. Find <Int lo="0" hi="6">f(x)</Int> and the total area of the shaded regions.</div>
	</Attempt>
);

// ---------- 12. feedback 2 ----------
export const S12: React.FC = () => {
	const k = K12;
	const fr = useCurrentFrame();
	return (
		<>
			<TaskStrip text="Check your working" at={2} size={56} />
			<RolesOn on={fr >= 10}><QuestionCard at={-40} shrinkAt={-30} w={1100} y={170} size={44} heading="Last one"><div>Above: area 5 (0 to 2). Below: area 3 (2 to 6). The integral from 0 to 6, and the total area?</div></QuestionCard></RolesOn>
			<GivensStrip x={1290} y={160} size={30} maxW={600} items={[{content: 'above: area 5', at: 6}, {content: 'below: area 3', at: 10}]} />
			<Named x={96} y={330} kind="int" at={k.int} size={46} frame={prog(fr, k.two, 10)}><Int lo="0" hi="6">f(x)</Int> = 5 − 3<span style={{opacity: prog(fr, k.two, 10)}}> = 2</span></Named>
			<Named x={96} y={470} kind="area" at={k.total} size={46} frame={prog(fr, k.eight, 10)}>total area = 5 + 3<span style={{opacity: prog(fr, k.eight, 10)}}> = 8</span></Named>
			<MistakeCard x={96} y={620} w={960} at={k.wrong} size={46} wrong={<><Int lo="0" hi="6">f(x)</Int> = 8</>} caption="below the axis counts negative" />
			<BoxCard x={96} y={620} w={960} at={-30} out={k.wrong - 6} size={40} title="the rule">integral: above − below<br />area: above + below</BoxCard>
			<div style={{position: 'absolute', left: RP.x, top: RP.y}}><G6Pic signed w={RP.w} h={RP.h} /></div>
		</>
	);
};

// ---------- 13. handoff ----------
const E = Math.E;
const I10Board: React.FC<{headAt: number; ghostAt: number; chipAt: number}> = ({headAt, ghostAt, chipAt}) => {
	const fr = useCurrentFrame();
	return (
		<>
			<SceneHeading text="Next: strips that lie sideways" at={headAt} size={56} />
			<StudioPlot x={40} y={150} width={1060} height={800} window={{x: [-0.3, 3.3], y: [-1.7, 1.55]}} xTicks={[1, 2, {value: E, label: 'e'}]} yTicks={[1]} xLabel="x" yLabel="y" at={headAt}>
				{(m: PlotMap) => {
					const N = 60; let d = '';
					for (let i = 0; i <= N; i++) {const yy = i / N; const [px, py] = m.p(Math.exp(yy), yy); d += `${i ? 'L' : 'M'}${px},${py} `;}
					const [o1x, o1y] = m.p(0, 1), [o0x, o0y] = m.p(0, 0);
					const [gx0, gy] = m.p(0, 0.5), [gx1] = m.p(Math.exp(0.5), 0.5);
					return <>
						<path d={`${d} L${o1x},${o1y} L${o0x},${o0y} Z`} fill="#d6eeee" stroke="none" />
						{[0, 1].map(yy => {const [, py] = m.p(0, yy); return <line key={yy} x1={m.box.left} x2={m.box.left + m.box.width} y1={py} y2={py} stroke={INK} strokeWidth={3} strokeDasharray="10 9" opacity={0.7} />;})}
						<g clipPath={m.clip}><path d={fnPath(m, x => Math.log(Math.max(1e-4, x)), 0.12, 3.3)} stroke={ABLUE} strokeWidth={6.5} fill="none" /></g>
						<g opacity={prog(fr, ghostAt, 12)}><rect x={gx0} y={gy - 14} width={gx1 - gx0} height={28} fill="#f8e8c8" stroke="#d18f1f" strokeWidth={4} strokeDasharray="10 7" /><text x={gx1 + 22} y={gy + 22} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 64, fill: '#7a4600'}}>?</text></g>
						<PLabel p={m.p(2.1, 0.3)} text="y = ln x" color={ABLUE} size={44} />
						<PLabel p={m.p(1.9, 1.07)} dy={-60} text="y = 1" size={34} />
						<PLabel p={m.p(1.9, 0.05)} dy={-12} text="y = 0" size={34} />
					</>;
				}}
			</StudioPlot>
			<BoxCard x={1150} y={170} w={730} at={headAt} size={40} title="the region">between y = ln x, the y-axis, and the lines y = 0 and y = 1</BoxCard>
			<Chip x={1150} y={420} at={chipAt} size={52} color="#d18f1f">Area = ?</Chip>
			<Chip x={1150} y={540} at={chipAt} size={44} color="#d18f1f">Next: strips that lie sideways</Chip>
			<Hand x={1160} y={660} at={headAt} size={40} color={SOFT}>our strips stood up from the x-axis</Hand>
			<Hand x={1160} y={730} at={ghostAt} size={40} color={SOFT}>here they would lie sideways</Hand>
		</>
	);
};
/** i10's final frame (i11 opens on it). */
export const I10FinalFrame: React.FC = () => <I10Board headAt={-300} ghostAt={-300} chipAt={-300} />;
export const S13: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K13;
	const sw = prog(fr, k.every, 16);
	return (
		<>
			{sw < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}>
				<SceneHeading text="Above minus below, or every piece positive" at={-30} size={54} />
				<LiftShaftSim x={150} y={180} h={760} lv={0} />
				<Named x={560} y={330} kind="int" at={-30} size={52}>above − below</Named>
				<Named x={560} y={470} kind="area" at={-30} size={52}>every piece positive</Named>
				<FramedCard x={560} y={620} w={1300} h={240} />
				<div style={{position: 'absolute', left: 600, top: 680, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 60, color: INK}}>Find the zeros, split, flip the negatives, add.</div>
			</div> : null}
			{sw > 0 ? <div style={{position: 'absolute', inset: 0, opacity: sw}}><I10Board headAt={k.every} ghostAt={k.sideways} chipAt={k.how} /></div> : null}
		</>
	);
};

// ---------- 14. key notes ----------
export const S14: React.FC = () => {
	const fr = useCurrentFrame();
	const items = [
		{content: <>The integral keeps signs: area above − area below.</>, at: 10},
		{content: <>f ≤ 0: area = |<Int lo="a" hi="b">f(x)</Int>| = −<Int lo="a" hi="b">f(x)</Int>.</>, at: 22},
		{content: <>Find the zeros, test signs, integrate each piece.</>, at: 34},
		{content: <>Area = sum of |each piece|, not |whole integral|.</>, at: 46},
		{content: <>Velocity: integral = displacement, area = distance.</>, at: 58},
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
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 50, lineHeight: 1.08, color: INK, marginTop: 4}}>Find the zeros, split, flip the negatives, add.</div>
					<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 34, lineHeight: 1.25, color: INK, marginTop: 12}}>Integral: keeps the signs.<br />Area: every piece positive.</div>
				</div>
				{fr >= 16 ? <div style={{position: 'absolute', inset: 0, opacity: prog(fr, 16, 14)}}>
					<LiftShaftSim x={1260} y={560} h={380} lv={0} tags={false} />
					<div style={{position: 'absolute', left: 1220, top: 945, width: 260, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 30, color: SOFT}}>net 0, travelled 4</div>
					<BPlot x={1440} y={600} w={420} h={330} win={{x: [-0.2, 3.3], y: [-1.2, 4.6]}} fn={q4} xTicks={[2]} yTicks={[]} xLabel="x" yLabel="every piece +" under={m => <><FlipFill m={m} fn={q4} a={0} b={2} p={1} /><AreaFillLayer m={m} fn={q4} a={2} to={3} signed /></>} />
				</div> : null}
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><I10FinalFrame /></div> : null}
		</>
	);
};
