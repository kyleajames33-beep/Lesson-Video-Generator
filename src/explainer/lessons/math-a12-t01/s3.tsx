// Scenes 10 to 15: attempt 1 (the buoy, y = −2cos(3x − π/2) + 4) and its brief feedback (crossed "right π/2"),
// attempt 2 (tan(x/2) + 1, the parent tan picture) and its feedback (crossed "period 4π"), the daylight handoff
// (exported as T01FinalFrame, t02's opening frame) and the key notes, which return silently to that frame.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {GivensStrip, KeyNotesBullets, PlateImg, QuestionCard, SceneHeading, fnPath, kf, piTicks, smooth} from '../../math/studio';
import {K10, K11, K12, K13, K14, K15} from './cuemap';
import {dur, hold} from './common';
import {AR, Ac, AnswerBox, BR, BROWN, BUOY, Bc, CR, Cc, Chip, DayStage, Dot, FONT_DISPLAY, FONT_HAND, FramedCard, GOOD, GREY, Gy, Hand, INK, KR, Kc, Lb, PI, QStrip, Ring, Row, Slip, TPlot, dayD, tf} from './parts';
import {T01Card} from './s2';

// ---------- 10. attempt 1 ----------
const Q1 = 'A buoy’s height above the sea floor, in metres, x seconds after a timer starts, is y = −2cos(3x − π/2) + 4. State the amplitude, the period, the horizontal translation and the range.';
const BuoyPic: React.FC = () => (
	<div style={{position: 'relative', width: 260, height: 360}}>
		<PlateImg plate={BUOY} x={60} y={0} w={140} />
		<svg width={260} height={360} style={{position: 'absolute', left: 0, top: 0, overflow: 'visible'}}>
			<path d="M0,180 Q32,168 65,180 T130,180 T195,180 T260,180 V300 H0 Z" fill="#5f9fb8" opacity={0.5} />
			<path d="M0,180 Q32,168 65,180 T130,180 T195,180 T260,180" fill="none" stroke="#2f6f88" strokeWidth={4} />
			<line x1={0} x2={260} y1={340} y2={340} stroke={GREY} strokeWidth={4} />
			<text x={130} y={330} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 26, fill: GREY}}>sea floor</text>
		</svg>
	</div>
);
export const S10: React.FC = () => (
	<QuestionCard at={0} size={40} w={1480} y={190} hold={{...hold('scene-10'), ringFrom: K10.pause}} pauseAt={K10.pause} picture={{node: <BuoyPic />, w: 260}}><div>{Q1}</div></QuestionCard>
);

// ---------- 11. feedback 1 ----------
const A1: import('./parts').TP = {k: -2, a: 3, b: -PI / 6, c: 4};
export const S11: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K11;
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={44} />
			<QStrip y={160} size={30} parts={['A buoy’s height above the sea floor, in metres, x seconds after a timer starts, is y = ', {u: '−2', at: k.two}, 'cos(', {u: '3x', at: k.three}, {u: ' − π/2', at: k.six1}, ')', {u: ' + 4', at: k.mid}, '. State the amplitude, the period, the horizontal translation and the range.']} />
			<GivensStrip x={96} y={318} size={36} items={[{content: 'k = −2', role: 'k', at: k.two}, {content: 'a = 3', role: 'a', at: k.three}, {content: 'c = 4', role: 'mid', at: k.mid}]} />
			<Row x={96} y={410} at={k.two} size={46} small={32} dim={prog(fr, k.three, 12)}><Kc>amplitude = |−2| = 2</Kc></Row>
			<Row x={96} y={478} at={k.three} size={46} small={32} dim={prog(fr, k.factor, 12)}><Ac>period = 2π ÷ 3 = 2π/3</Ac></Row>
			<Row x={96} y={546} at={k.six1} size={46} small={32} dim={prog(fr, k.mid, 12)}>y = −2cos(3(x <Bc>− π/6</Bc>)) + 4: <Bc>right π/6</Bc></Row>
			<Row x={96} y={614} at={k.six2} size={46} small={32}><Cc>range: 4 − 2 ≤ y ≤ 4 + 2, so 2 ≤ y ≤ 6</Cc></Row>
			<AnswerBox x={96} y={700} at={k.six2 + 24} size={38}>amplitude 2 · period 2π/3 · right π/6 · 2 ≤ y ≤ 6</AnswerBox>
			<div style={{position: 'absolute', left: 96, top: 800}}><Slip x={0} y={0} w={420} at={k.slid} strikeAt={k.three2} size={36} caption="factor out 3 first">right π/2</Slip></div>
			<TPlot x={1250} y={400} w={650} h={420} p={A1} win={{x: [-0.15, PI + 0.15], y: [-0.4, 7]}} ghost={0} xTicks={[{value: PI / 6, label: 'π/6'}, {value: PI / 2, label: 'π/2'}, {value: 5 * PI / 6, label: '5π/6'}]} yTicks={[2, 4, 6]} xLabel="x (s)" yLabel="y (m)" at={k.six2}>
				{m => <>
					<Ring at={m.p(PI / 6, 2)} o={prog(fr, k.six2 + 20, 10)} r={18} />
					<Lb at={[m.p(PI / 6, 2)[0], m.p(0, 2)[1] + 50]} o={prog(fr, k.six2 + 24, 10)} size={30}>trough (π/6, 2)</Lb>
					<Ring at={m.p(PI / 2, 6)} o={prog(fr, k.six2 + 30, 10)} r={18} />
					<Lb at={[m.p(PI / 2, 6)[0] + 26, m.p(0, 6)[1] + 10]} o={prog(fr, k.six2 + 34, 10)} size={30} anchor="start">peak (π/2, 6)</Lb>
				</>}
			</TPlot>
		</>
	);
};

// ---------- 12. attempt 2 ----------
const Q2 = 'Describe the transformations that map y = tan x onto y = tan(x/2) + 1. State the period and the range.';
const TanPic: React.FC = () => {
	const W = 560, H = 400, X = (x: number) => 20 + ((x + PI) / (2 * PI)) * (W - 40), Y = (y: number) => H / 2 - y * 46;
	const seg = (a: number, b: number) => {let d = ''; for (let i = 0; i <= 60; i++) {const x = a + ((b - a) * i) / 60, y = Math.max(-4.5, Math.min(4.5, Math.tan(x))); d += `${i ? 'L' : 'M'}${X(x).toFixed(1)},${Y(y).toFixed(1)}`;} return d;};
	return <svg width={W} height={H + 40} style={{overflow: 'visible'}}>
		<line x1={10} x2={W - 10} y1={H / 2} y2={H / 2} stroke={INK} strokeWidth={3} /><line x1={X(0)} x2={X(0)} y1={6} y2={H - 6} stroke={INK} strokeWidth={3} />
		{[-PI / 2, PI / 2].map(a => <line key={a} x1={X(a)} x2={X(a)} y1={6} y2={H - 6} stroke={GREY} strokeWidth={3} strokeDasharray="10 8" />)}
		{[[-PI, -PI / 2 - 0.08], [-PI / 2 + 0.08, PI / 2 - 0.08], [PI / 2 + 0.08, PI]].map(([a, b], i) => <path key={i} d={seg(a, b)} fill="none" stroke="#8a8378" strokeWidth={5} />)}
		{[[-PI / 2, '−π/2'], [PI / 2, 'π/2'], [-PI, '−π'], [PI, 'π']].map(([v, l]) => <text key={l as string} x={X(v as number)} y={H + 32} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28, fill: INK}}>{l}</text>)}
		<text x={X(0) + 12} y={28} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28, fill: GREY}}>y = tan x</text>
	</svg>;
};
export const S12: React.FC = () => (
	<QuestionCard at={0} size={40} w={1480} y={190} heading="Last one" hold={{...hold('scene-12'), ringFrom: K12.pause}} pauseAt={K12.pause} picture={{node: <TanPic />, w: 560}}><div>{Q2}</div></QuestionCard>
);

// ---------- 13. feedback 2 ----------
const W13 = {x: [-1.5 * PI, 1.5 * PI] as [number, number], y: [-4, 4.5] as [number, number]};
export const S13: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K13;
	const a = kf(fr, [[k.two - 10, 1], [k.two + 34, 0.5]]), c = kf(fr, [[k.unit - 6, 0], [k.unit + 28, 1]]);
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={44} />
			<QStrip y={160} size={30} parts={['Describe the transformations that map y = tan x onto y = tan(', {u: 'x/2', at: k.inside}, ')', {u: ' + 1', at: k.out}, '. State the period and the range.']} />
			<GivensStrip x={96} y={262} size={36} items={[{content: 'a = ½', role: 'a', at: k.inside}, {content: 'c = 1', role: 'mid', at: k.out}]} />
			<Row x={96} y={360} at={k.two} size={46} small={32} dim={prog(fr, k.unit, 12)}><Ac>horizontal dilation, factor 2</Ac></Row>
			<Row x={96} y={428} at={k.unit} size={46} small={32} dim={prog(fr, k.pi, 12)}><Cc>translation up 1</Cc></Row>
			<Row x={96} y={496} at={k.pi - 20} size={46} small={32} dim={prog(fr, k.range, 12)}><Ac>period = π ÷ ½ = 2π</Ac></Row>
			<Row x={96} y={564} at={k.range} size={46} small={32}>range: all real y</Row>
			<AnswerBox x={96} y={650} at={k.range + 30} size={36}>dilation ×2 from the y-axis, up 1 · period 2π · all real y</AnswerBox>
			<div style={{position: 'absolute', left: 96, top: 760}}><Slip x={0} y={0} w={520} at={k.four} strikeAt={k.tanEnd} size={36} caption="2π ÷ a is for sin and cos">period 4π</Slip></div>
			<TPlot x={1150} y={300} w={750} h={630} p={{k: 1, a, b: 0, c}} fam="tan" win={W13} xTicks={piTicks(-1, 1, 1)} yTicks={[-2, 2]}>
				{m => {const o = prog(fr, k.unit + 10, 12), [l, y] = m.p(W13.x[0], 1), [r] = m.p(W13.x[1], 1); return o > 0.01 ? <g opacity={o}><line x1={l} x2={r} y1={y} y2={y} stroke={CR.stroke} strokeWidth={5} strokeDasharray="16 10" /><Lb at={[r - 6, y - 14]} o={1} color={CR.ink} anchor="end" size={32}>y = 1</Lb></g> : null;}}
			</TPlot>
			<Hand x={1250} y={262} at={k.two} size={34} color={AR.ink}>asymptotes ±π/2 → ±π</Hand>
		</>
	);
};

// ---------- 14. handoff (the daylight stage; t02 opens on it) ----------
const Handoff: React.FC<{x: number; drawTo: number; next: number; line: number; chip: number; note: number; bracket: number}> = ({x, drawTo, next, line, chip, note, bracket}) => {
	const f = useCurrentFrame();
	return <>
		<DayStage x={x} drawTo={drawTo} line={{level: 13, o: prog(f, line, 14), label: 'D = 13'}} bracket={prog(f, bracket, 14)} />
		<Chip x={96} y={96} at={next} size={34} color={BROWN}>Next: solving trig equations from the graph</Chip>
		<Chip x={1180} y={96} at={chip} size={34} color={KR.ink}>13 hours of daylight: which days?</Chip>
		<Hand x={60} y={862} at={note} size={30} color={GREY} w={800}><Gy>x = 0: about 24 August; whole year: 2π</Gy></Hand>
		<Hand x={1000} y={230} at={next} size={36} color={INK}>D = 12 + 2sin(x − π/6)</Hand>
	</>;
};
/** t01's final frame, and t02's opening frame. */
export const T01FinalFrame: React.FC = () => <Handoff x={2 * PI} drawTo={2 * PI} next={-300} line={-300} chip={-300} note={-300} bracket={-300} />;
export const S14: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K14;
	const sw = prog(fr, k.next - 6, 18);
	const run = smooth(prog(fr, k.twelve, 150));
	return (
		<>
			{sw < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}>
				<SceneHeading text="Outside as written, inside the opposite" at={4} size={44} />
				<T01Card x={300} y={200} scale={0.9} c1={-300} c2={-300} c3={-300} c4={-300} c5={-300} c6={-300} c7={-300} />
			</div> : null}
			{sw > 0 ? <div style={{position: 'absolute', inset: 0, opacity: sw}}>
				<Handoff x={2 * PI * run} drawTo={2 * PI * run} next={k.next} line={k.thirteen} chip={k.one} note={k.where} bracket={k.twelve + 150} />
			</div> : null}
		</>
	);
};

// ---------- 15. key notes ----------
export const S15: React.FC = () => {
	const fr = useCurrentFrame();
	const items = [
		{content: <>Factor first: y = <Kc>k</Kc> f(<Ac>a</Ac>(x <Bc>+ b</Bc>)) <Cc>+ c</Cc>.</>, at: 2},
		{content: <><Kc>k</Kc>: heights × k, amplitude |k| (k &lt; 0 flips).</>, at: 6},
		{content: <><Cc>c</Cc>: up c, midline y = c.</>, at: 10},
		{content: <><Ac>a</Ac>: period 2π/a (tan: π/a, no amplitude).</>, at: 14},
		{content: <><Bc>b</Bc>: x − b slides right b; x + b slides left b.</>, at: 18},
	];
	const end = Math.max(1350, dur('scene-15'));
	const back = prog(fr, end - 40, 18);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
				<SceneHeading text="Key notes: what to write in your book" at={-60} size={52} />
				<div style={{position: 'absolute', right: 96, top: 108, opacity: prog(fr, K15.pause, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: BROWN}}>pause to copy</div>
				<KeyNotesBullets x={96} y={250} w={1060} items={items} size={38} gap={44} />
				<FramedCard x={1200} y={196} w={680} h={680} at={8} />
				{fr >= 8 ? <div style={{position: 'absolute', inset: 0, opacity: prog(fr, 8, 14)}}>
					<div style={{position: 'absolute', left: 1240, top: 214, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: GOOD.ink}}>Memory aid</div>
					<PlateImg plate={BUOY} x={1740} y={220} w={90} />
					<div style={{position: 'absolute', left: 1240, top: 290, width: 600, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52, lineHeight: 1.12, color: INK}}>Outside: on y, as written.</div>
					<div style={{position: 'absolute', left: 1240, top: 430, width: 600, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52, lineHeight: 1.12, color: INK}}>Inside: on x, the opposite.</div>
					<div style={{position: 'absolute', left: 1240, top: 600, width: 600, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, color: INK}}>Factor the inside first.</div>
					<div style={{position: 'absolute', left: 1240, top: 700, width: 600, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color: GREY}}>Some sources write a f(bx + c) + d.</div>
				</div> : null}
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><T01FinalFrame /></div> : null}
		</>
	);
};
export {BR, Dot, fnPath, dayD, tf, TPlot, Ring};
