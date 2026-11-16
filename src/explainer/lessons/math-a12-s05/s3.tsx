// Scenes 11 to 16: attempt 1 (k(x + 1) on [0, 2]: k and P(X > 1)) and its brief feedback (1/4, 5/8; crossed 3/4, a
// height), attempt 2 (f from F = (4x − x²)/4) and its brief feedback ((2 − x)/2, 0 elsewhere; crossed f = 1 for x > 2),
// the handoff (the hump 3x(2 − x)/4 with "?": exported as S05FinalFrame, s06's opening frame) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, prog} from '../../kit';
import {FrameSvg, GivensStrip, KeyNotesBullets, QuestionCard, SceneHeading, TrackerFill, makePlot, regionPath} from '../../math/studio';
import {K11, K12, K13, K14, K15, K16} from './cuemap';
import {dur, hold} from './common';
import {AREA, AnswerBox, BROWN, BoxCard, CDF, Chip, DENS, Ev, F9Plot, FA2, FramedCard, GOOD, GREY, Hand, INK, Int, Pair, Parcel, QStrip, Row, Slip, f3, fA1, fA2, xTicksN} from './parts';

const W2 = {x: [-0.5, 2.5] as [number, number], y: [-0.05, 1.0] as [number, number]};
const t2 = xTicksN([0.5, 1, 1.5, 2]);
const Q1 = 'A continuous random variable X has probability density function f(x) = k(x + 1) for 0 ≤ x ≤ 2, and f(x) = 0 elsewhere. (a) Find the value of k. (b) Find P(X > 1).';
const Q2 = 'A continuous random variable X has cumulative distribution function F(x) = 0 for x < 0, F(x) = (4x − x²)/4 for 0 ≤ x ≤ 2, F(x) = 1 for x > 2. Find the probability density function of X.';

// ---------- 11. attempt 1 ----------
export const S11: React.FC = () => (
	<>
		<QuestionCard at={0} size={40} w={1700} y={170} hold={{...hold('scene-11'), ringFrom: K11.pause}} pauseAt={K11.pause}><div>{Q1}</div></QuestionCard>
		<BoxCard x={96} y={430} w={600} at={6} size={36} title="given"><div style={{fontWeight: 800}}>f(x) = k(x + 1), 0 ≤ x ≤ 2</div><div style={{fontWeight: 800}}>f(x) = 0 elsewhere</div><div style={{fontWeight: 800}}>find k, then P(X &gt; 1)</div></BoxCard>
		<F9Plot x={720} y={400} w={860} h={560} draw={-1} win={W2} xTicks={t2} yTicks={[{value: 0.5, label: '0.5'}]} yLabel="f(x)" at={6} />
	</>
);

// ---------- 12. feedback 1 ----------
export const S12: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K12;
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<QStrip parts={['X has probability density function ', {u: 'f(x) = k(x + 1) for 0 ≤ x ≤ 2', at: k.four}, ', and 0 elsewhere. (a) Find k. (b) Find ', {u: 'P(X > 1)', at: k.then}, '.']} />
			<GivensStrip x={96} y={250} size={36} items={[{content: 'f(x) = k(x + 1), 0 ≤ x ≤ 2', role: 'b', at: k.total}, {content: '0 elsewhere', at: k.total}]} />
			<F9Plot x={40} y={340} w={900} h={620} win={W2} xTicks={t2} yTicks={fr >= k.so ? [{value: 0.5, label: '0.5'}] : []} yLabel="f(x)" color={DENS.stroke} fn={fA1}>
				{m => <path d={regionPath(m, fA1, 1, 2)} fill="#f3d9a6" stroke={AREA.stroke} strokeWidth={3} opacity={prog(fr, k.then, 14)} />}
			</F9Plot>
			<Row x={980} y={350} at={k.total} size={44} dim={prog(fr, k.then, 12) * 0.3}><Int lo="0" hi="2" />k(x + 1) dx = k<Ev lo="0" hi="2">x²/2 + x</Ev> = 4k = 1</Row>
			<AnswerBox x={980} y={436} at={k.so} size={48}>k = 1/4</AnswerBox>
			<Row x={980} y={540} at={k.then} size={40}>P(X &gt; 1) = (1/4)<Ev lo="1" hi="2">x²/2 + x</Ev></Row>
			<Row x={980} y={620} at={k.thats} size={44}>= (1/4)(4 − 3/2)</Row>
			<AnswerBox x={1400} y={608} at={k.five} size={50}>= 5/8</AnswerBox>
			<Slip x={980} y={730} at={k.wrong} strikeAt={k.area} size={42} caption="a height, not an area">P(X &gt; 1) = f(2) = 3/4</Slip>
		</>
	);
};

// ---------- 13. attempt 2 ----------
const WP = {top: {x: [-0.5, 2.5] as [number, number], y: [-0.1, 1.2] as [number, number]}, bot: {x: [-0.5, 2.5] as [number, number], y: [-0.05, 1.1] as [number, number]}};
export const S13: React.FC = () => (
	<>
		<QuestionCard at={0} size={40} w={1700} y={170} heading="Last one" hold={{...hold('scene-13'), ringFrom: K13.pause}} pauseAt={K13.pause}><div>{Q2}</div></QuestionCard>
		<BoxCard x={96} y={440} w={600} at={6} size={36} title="given"><div style={{fontWeight: 800}}>F(x) = (4x − x²)/4, 0 ≤ x ≤ 2</div><div style={{fontWeight: 800}}>F = 0 below 0, 1 above 2</div><div style={{fontWeight: 800}}>find f(x)</div></BoxCard>
		<Pair x={720} y={420} w={860} hTop={280} hBot={280} winTop={WP.top} winBot={WP.bot} xTicks={t2} topLabel="F" botLabel="f" at={6} />
	</>
);

// ---------- 14. feedback 2 ----------
export const S14: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K14;
	const P = {x: 40, y: 340, w: 900, hTop: 300, hBot: 320} as const;
	const T = makePlot(P.x, P.y, P.w, P.hTop, WP.top), B = makePlot(P.x, P.y + P.hTop + 14, P.w, P.hBot, WP.bot);
	const g = prog(fr, k.zero, 14);
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<QStrip parts={['X has CDF F(x) = 0 for x < 0, ', {u: 'F(x) = (4x − x²)/4 for 0 ≤ x ≤ 2', at: k.four}, ', F(x) = 1 for x > 2. Find the probability density function of X.']} size={28} />
			<GivensStrip x={96} y={250} size={36} items={[{content: 'F(x) = (4x − x²)/4, 0 ≤ x ≤ 2', role: 'gradient', at: k.diff}, {content: 'F = 0 below, 1 above', at: k.diff}]} />
			<Pair {...P} winTop={WP.top} winBot={WP.bot} F={FA2} f={fA2} drawf={fr >= k.two ? 2.5 : -0.5} xTicks={t2} topLabel="F(x)" botLabel="f(x)" />
			<FrameSvg style={{opacity: g}}>{[[-0.5, 0], [2, 2.5]].map(([a, b], i) => {const [x0, y0] = T.pf(a, FA2(a)), [x1] = T.pf(b, 0), [u0, v0] = B.pf(a, 0), [u1] = B.pf(b, 0); return <g key={i}><line x1={x0} x2={x1} y1={y0} y2={y0} stroke={DENS.stroke} strokeWidth={12} opacity={0.35} /><line x1={u0} x2={u1} y1={v0} y2={v0} stroke={DENS.stroke} strokeWidth={12} opacity={0.35} /></g>;})}</FrameSvg>
			<Row x={980} y={360} at={k.diff} size={44}>f(x) = F′(x) = (4 − 2x)/4</Row>
			<AnswerBox x={980} y={446} at={k.two} size={44}>f(x) = (2 − x)/2, 0 ≤ x ≤ 2</AnswerBox>
			<Hand x={990} y={546} at={k.never} size={38} color={GREY}>≥ 0 on [0, 2]</Hand>
			<Row x={980} y={610} at={k.outside} size={44} color={DENS.ink}>f(x) = 0 elsewhere</Row>
			<Hand x={1420} y={622} at={k.zero} size={38} color={DENS.ink}>flat F: gradient 0</Hand>
			<Slip x={980} y={720} at={k.saying} strikeAt={k.deriv} size={42} caption="d/dx (1) = 0, not 1">f(x) = 1 for x &gt; 2</Slip>
		</>
	);
};

// ---------- 15. handoff ----------
const HP = {x: 96, y: 170, w: 1300, h: 800} as const;
const HW = {x: [-0.5, 2.5] as [number, number], y: [-0.05, 0.95] as [number, number]};
const HM = makePlot(HP.x, HP.y, HP.w, HP.h, HW);
export const S05Handoff: React.FC<{chip: number; q1: number; q2: number; slide: number}> = ({chip, q1, q2, slide}) => {
	const xl = 0.3 + 0.55 * slide, [lx, ly0] = HM.pf(xl, 0), [, ly1] = HM.pf(xl, 0.85);
	const f = useCurrentFrame();
	return <>
		<Chip x={96} y={88} at={chip} size={40} color={BROWN}>Next: the most likely value and the middle</Chip>
		<F9Plot {...HP} win={HW} fn={f3} xTicks={xTicksN([1, 2])} yTicks={[]} yLabel="f(x)" color={DENS.stroke} />
		<Chip x={HM.pf(0.92, 0)[0]} y={HM.pf(0, 0.88)[1] - 30} at={q1} size={64} color={BROWN}>?</Chip>
		<FrameSvg style={{opacity: prog(f, q2, 12)}}><line x1={lx} x2={lx} y1={ly0} y2={ly1} stroke={INK} strokeWidth={5} strokeDasharray="14 10" /><text x={lx} y={ly1 - 16} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, fill: BROWN}}>?</text></FrameSvg>
		<BoxCard x={1450} y={420} w={410} at={-300} size={36} title="f(x)"><div style={{color: DENS.ink, fontWeight: 800}}>3x(2 − x)/4</div><div style={{color: DENS.ink, fontWeight: 800}}>for 0 ≤ x ≤ 2</div><div style={{color: DENS.ink, fontWeight: 800}}>0 elsewhere</div></BoxCard>
		<Hand x={1450} y={660} at={q1} size={46} color={BROWN} w={410}>where is X most likely?</Hand>
		<Hand x={1450} y={780} at={q2} size={46} color={BROWN} w={410}>where's the middle, half each side?</Hand>
	</>;
};
/** s05's final frame, and s06's opening frame. */
export const S05FinalFrame: React.FC = () => <S05Handoff chip={-300} q1={-300} q2={-300} slide={1} />;
export const S15: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K15;
	const sw = prog(fr, k.next - 4, 18);
	return (
		<>
			{sw < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}>
				<SceneHeading text="Density and CDF" at={4} size={52} />
				<AnswerBox x={96} y={200} at={k.so} size={46}>f(x) = F′(x): the gradient of F</AnswerBox>
				<AnswerBox x={96} y={320} at={k.so + 70} size={46}>P(c &lt; X &lt; d) = area under f</AnswerBox>
				<AnswerBox x={96} y={440} at={k.so + 160} size={46}>total area = 1</AnswerBox>
				<Pair x={1000} y={170} w={860} hTop={330} hBot={330} winTop={{x: [-1, 4], y: [-0.2, 1.2]}} winBot={{x: [-1, 4], y: [-0.1, 0.8]}} F={x => (x < 0 ? 0 : x > 3 ? 1 : (x * x) / 9)} f={x => (x < 0 || x > 3 ? 0 : (2 * x) / 9)} xTicks={xTicksN([1, 2, 3])} area={{a: 0, b: 3, o: 1}} />
				<Parcel x={200} y={620} w={360} />
			</div> : null}
			{sw > 0 ? <div style={{position: 'absolute', inset: 0, opacity: sw}}><S05Handoff chip={k.next} q1={k.likely} q2={k.side - 30} slide={prog(fr, k.side - 30, 30)} /></div> : null}
		</>
	);
};

// ---------- 16. key notes ----------
export const S16: React.FC = () => {
	const fr = useCurrentFrame();
	const items = [
		{content: <>f(x) = F′(x) where F has a gradient: probability per unit of x.</>, at: 2},
		{content: <>A density is not a probability. It can be bigger than 1.</>, at: 6},
		{content: <>P(c &lt; X &lt; d) = <Int lo="c" hi="d" />f(x) dx = F(d) − F(c).</>, at: 10},
		{content: <>Every density: f(x) ≥ 0 and total area 1. Use these to find k.</>, at: 14},
		{content: <>F(x) = <Int lo="a" hi="x" />f(t) dt. f = F′, and f = 0 outside the domain.</>, at: 18},
	];
	const end = Math.max(1350, dur('scene-16'));
	const back = prog(fr, end - 40, 18);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
				<SceneHeading text="Key notes: what to write in your book" at={-60} size={56} />
				<div style={{position: 'absolute', right: 96, top: 108, opacity: prog(fr, K16.pause, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: BROWN}}>pause to copy</div>
				<KeyNotesBullets x={96} y={250} w={1080} items={items} size={40} gap={44} />
				<FramedCard x={1220} y={196} w={660} h={720} at={8} />
				{fr >= 8 ? <div style={{position: 'absolute', inset: 0, opacity: prog(fr, 8, 14)}}>
					<div style={{position: 'absolute', left: 1260, top: 214, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: GOOD.ink}}>Memory aid</div>
					<div style={{position: 'absolute', left: 1260, top: 276, width: 590, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 54, lineHeight: 1.1, color: INK}}>F: the chance so far. f: how fast it's building.</div>
					<div style={{position: 'absolute', left: 1260, top: 500, width: 590, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, lineHeight: 1.3, color: CDF}}>Differentiate F → f. Integrate f → F. Total: 1.</div>
					<Parcel x={1300} y={660} w={250} />
					<TrackerFill x={1270} y={784} width={240} value={1} at={8} digits={2} label="arrived by 12" />
				</div> : null}
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><S05FinalFrame /></div> : null}
		</>
	);
};
