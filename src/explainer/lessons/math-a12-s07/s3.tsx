// Scenes 11 to 16: attempt 1 (uniform on [3, 8]: f and P(4 ≤ X < 6.5)) and its brief feedback (1/5, 1/2; crossed
// 1/8), attempt 2 (P(X > 6) = 0.25 on [0, k]: k and P(X < 3)) and its brief feedback (8, 3/8; crossed k = 24), the
// handoff (the train's flat density resting on a beam with a violet fulcrum at t = 2 and "?": exported as
// S07FinalFrame, s08's opening frame) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, prog} from '../../kit';
import {FrameSvg, GivensStrip, KeyNotesBullets, QuestionCard, SceneHeading, smooth} from '../../math/studio';
import {K11, K12, K13, K14, K15, K16} from './cuemap';
import {dur, hold} from './common';
import {AMB, AnswerBox, BROWN, BeamPlot, BoxCard, BusStop, Chip, DENS, FramedCard, GOOD, Hand, INK, QStrip, Row, Slip, UniformPlot, ticks} from './parts';

const Q1 = 'A continuous random variable X is uniformly distributed on 3 ≤ x ≤ 8. Write down the probability density function f(x), and find P(4 ≤ X < 6.5).';
const Q2 = 'The delay, X minutes, of a train is uniformly distributed on 0 ≤ x ≤ k. The probability that the delay is more than 6 minutes is 0.25. Find k, and find P(X < 3).';

/** A bare number line (no interval marked) for the question cards. */
const BareLine: React.FC<{y: number; at: number; marks: readonly {v: number; label: string}[]; from: number; to: number; label: string}> = ({y, at, marks, from, to, label}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	const X = (v: number) => 200 + ((v - from) / (to - from)) * 1240;
	return <FrameSvg style={{opacity: o}}>
		<line x1={X(from) - 30} x2={X(to) + 30} y1={y} y2={y} stroke={INK} strokeWidth={4} strokeLinecap="round" />
		{marks.map(m => <g key={m.label}><line x1={X(m.v)} x2={X(m.v)} y1={y - 12} y2={y + 12} stroke={INK} strokeWidth={3} /><text x={X(m.v)} y={y + 50} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, fill: INK}}>{m.label}</text></g>)}
		<text x={X(to) + 30} y={y + 96} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, fill: INK}}>{label}</text>
	</FrameSvg>;
};

// ---------- 11. attempt 1 ----------
export const S11: React.FC = () => (
	<>
		<QuestionCard at={0} size={40} w={1700} y={170} hold={{...hold('scene-11'), ringFrom: K11.pause}} pauseAt={K11.pause}><div>{Q1}</div></QuestionCard>
		<BareLine y={500} at={6} from={0} to={10} marks={Array.from({length: 11}, (_, i) => ({v: i, label: String(i)}))} label="x" />
		<BoxCard x={96} y={640} w={760} at={10} size={36} title="to do"><div style={{fontWeight: 800}}>write down f(x)</div><div style={{fontWeight: 800}}>find P(4 ≤ X &lt; 6.5)</div></BoxCard>
	</>
);

// ---------- 12. feedback 1 ----------
const G12 = {x: 40, y: 340, w: 900, h: 600} as const;
export const S12: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K12;
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<QStrip parts={['X is uniformly distributed on ', {u: '3 ≤ x ≤ 8', at: k.interval}, '. Write down f(x), and find ', {u: 'P(4 ≤ X < 6.5)', at: k.from}, '.']} size={30} />
			<GivensStrip x={96} y={250} size={36} items={[{content: 'uniform on 3 ≤ x ≤ 8', role: 'b', at: k.interval}, {content: 'P(4 ≤ X < 6.5)', role: 'k', at: k.from}]} />
			<UniformPlot {...G12} win={{x: [0, 10], y: [0, 0.3]}} a={3} b={8} c={0.2} zeros={prog(fr, k.elsewhere, 14)} fill={0.6} shades={[{from: 4, to: 6.5, o: prog(fr, k.half - 20, 14)}]} xTicks={ticks([0, 2, 3, 4, 6.5, 8, 10])} yTicks={[{value: 0.2, label: fr >= k.interval + 30 ? '1/5' : '?'}]} xLabel="x" yLabel="f(x)" />
			<Row x={980} y={350} at={k.interval} size={44} dim={prog(fr, k.elsewhere, 12) * 0.3}>f(x) = 1/(8 − 3) = 1/5</Row>
			<BoxCard x={980} y={430} w={760} at={-30} out={k.elsewhere - 14} size={38} title="the model" edge={AMB.stroke}><div style={{fontWeight: 800}}>height = 1 ÷ (b − a)</div><div style={{fontWeight: 800}}>P = (width covered) ÷ (b − a)</div></BoxCard>
			<AnswerBox x={980} y={420} at={k.elsewhere} size={40}>{'f(x) = 1/5 for 3 ≤ x ≤ 8\nf(x) = 0 elsewhere'}</AnswerBox>
			<Row x={980} y={570} at={k.from} size={44}>P(4 ≤ X &lt; 6.5) = 2.5/5</Row>
			<AnswerBox x={980} y={640} at={k.half} size={44}>P(4 ≤ X &lt; 6.5) = 1/2</AnswerBox>
			<Slip x={980} y={750} at={k.height} strikeAt={k.not} size={42} caption="width is b − a = 5">f(x) = 1/8</Slip>
		</>
	);
};

// ---------- 13. attempt 2 ----------
export const S13: React.FC = () => (
	<>
		<QuestionCard at={0} size={40} w={1700} y={170} heading="Last one" hold={{...hold('scene-13'), ringFrom: K13.pause}} pauseAt={K13.pause}><div>{Q2}</div></QuestionCard>
		<BareLine y={540} at={6} from={0} to={10} marks={[{v: 0, label: '0'}, {v: 4.5, label: '6'}, {v: 8.5, label: 'k'}]} label="delay x (min)" />
		<BoxCard x={96} y={660} w={760} at={10} size={36} title="to do"><div style={{fontWeight: 800}}>find k</div><div style={{fontWeight: 800}}>find P(X &lt; 3)</div></BoxCard>
	</>
);

// ---------- 14. feedback 2 ----------
const G14 = {x: 40, y: 340, w: 900, h: 600} as const;
export const S14: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K14;
	const known = fr >= k.eight;
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<QStrip parts={['The delay X is uniform on ', {u: '0 ≤ x ≤ k', at: k.more}, '. P(delay is ', {u: 'more than 6 minutes', at: k.more}, ') = 0.25. Find k, and find P(X < 3).']} size={30} />
			<GivensStrip x={96} y={250} size={36} items={[{content: 'uniform on 0 ≤ x ≤ k', role: 'b', at: k.more}, {content: 'P(X > 6) = 0.25', role: 'k', at: k.more + 20}, {content: 'P(X < 3)', at: k.p3}]} />
			<UniformPlot {...G14} win={{x: [-1, 10], y: [0, 0.2]}} a={0} b={8} c={0.125} fill={0.6} zeros={1} shades={[{from: 6, to: 8, o: prog(fr, k.five - 20, 14)}, {from: 0, to: 3, o: prog(fr, k.eighths - 20, 14)}]} xTicks={known ? ticks([0, 3, 6, 8]) : ticks([0, 6, 8], ['0', '6', 'k'])} yTicks={[{value: 0.125, label: known ? '1/8' : '1/k'}]} xLabel="x (min)" yLabel="f(x)" at={k.more} />
			<Row x={980} y={350} at={k.so} size={44}>P(X &gt; 6) = (k − 6)/k = 0.25</Row>
			<Row x={980} y={430} at={k.then} size={44}>k − 6 = 0.25k ⇒ 0.75k = 6</Row>
			<AnswerBox x={980} y={510} at={k.eight} size={48}>k = 8</AnswerBox>
			<AnswerBox x={980} y={620} at={k.eighths} size={48}>P(X &lt; 3) = 3/8</AnswerBox>
			<Slip x={980} y={740} at={k.six} strikeAt={k.four} size={42} caption="that is P(X < 6)">6/k = 0.25 ⇒ k = 24</Slip>
		</>
	);
};

// ---------- 15. handoff ----------
const Handoff: React.FC<{chip: number; tri: number; tilt: number; q: number}> = ({chip, tri, tilt, q}) => {
	const f = useCurrentFrame();
	return <>
		<Chip x={96} y={88} at={chip} size={40} color={BROWN}>Next: where does a density balance?</Chip>
		<BeamPlot tri={prog(f, tri, 14)} tilt={tilt} q={prog(f, q, 14)} />
		<Hand x={1300} y={300} at={q} size={46} color={BROWN} w={560}>Where would it balance?</Hand>
		<Hand x={1300} y={420} at={q + 30} size={36} color={BROWN} w={560}>And for a density that isn&apos;t flat: the balance point, and the spread?</Hand>
		<Hand x={1300} y={640} at={chip} size={34} color={DENS.ink} w={560}>the train: f(t) = 1/4 on [1, 5]</Hand>
	</>;
};
/** s07's final frame, and s08's opening frame. */
export const S07FinalFrame: React.FC = () => <Handoff chip={-300} tri={-300} tilt={3} q={-300} />;
export const S15: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K15;
	const sw = prog(fr, k.next - 4, 18);
	const tilt = 3 * smooth(prog(fr, k.balance + 10, 40));
	return (
		<>
			{sw < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}>
				<SceneHeading text="The uniform model" at={4} size={52} />
				<AnswerBox x={96} y={220} at={k.so} size={48}>flat on [a, b]</AnswerBox>
				<AnswerBox x={96} y={330} at={k.so + 60} size={48}>height forced: 1/(b − a)</AnswerBox>
				<AnswerBox x={96} y={440} at={k.so + 140} size={48}>probability = fraction of the interval</AnswerBox>
				<BusStop x={1500} base={900} h={420} />
				<UniformPlot x={96} y={560} w={1000} h={380} win={{x: [0, 6], y: [0, 0.35]}} a={1} b={5} c={0.25} fill={0.6} xTicks={ticks([1, 5])} yTicks={[{value: 0.25, label: '1/4'}]} xLabel="t (min)" yLabel="f(t)" />
			</div> : null}
			{sw > 0 ? <div style={{position: 'absolute', inset: 0, opacity: sw}}><Handoff chip={k.next} tri={k.balance} tilt={tilt} q={k.balance + 30} /></div> : null}
		</>
	);
};

// ---------- 16. key notes ----------
export const S16: React.FC = () => {
	const fr = useCurrentFrame();
	const items = [
		{content: <>Uniform on [a, b]: f(x) = 1/(b − a), 0 elsewhere.</>, at: 2},
		{content: <>Equal widths, equal probability: the density is flat.</>, at: 6},
		{content: <>Probability = (width covered inside [a, b]) ÷ (b − a).</>, at: 10},
		{content: <>F(x) = (x − a)/(b − a) on [a, b]; 0 below, 1 above.</>, at: 14},
		{content: <>A density can exceed 1; a uniform has no single mode.</>, at: 18},
	];
	const end = Math.max(1350, dur('scene-16'));
	const back = prog(fr, end - 40, 18);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
				<SceneHeading text="Key notes: what to write in your book" at={-60} size={56} />
				<div style={{position: 'absolute', right: 96, top: 108, opacity: prog(fr, K16.pause, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: BROWN}}>pause to copy</div>
				<KeyNotesBullets x={96} y={250} w={1080} items={items} size={38} gap={44} />
				<FramedCard x={1220} y={196} w={660} h={740} at={8} />
				{fr >= 8 ? <div style={{position: 'absolute', inset: 0, opacity: prog(fr, 8, 14)}}>
					<div style={{position: 'absolute', left: 1260, top: 214, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: GOOD.ink}}>Memory aid</div>
					<div style={{position: 'absolute', left: 1260, top: 276, width: 590, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 54, lineHeight: 1.1, color: INK}}>Flat, so one over the width.</div>
					<div style={{position: 'absolute', left: 1260, top: 420, width: 590, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, lineHeight: 1.1, color: AMB.ink}}>Probability = width you want (inside [a, b]) ÷ whole width.</div>
					<BusStop x={1300} base={900} h={300} />
					<UniformPlot x={1400} y={616} w={440} h={262} win={{x: [0, 6], y: [0, 0.35]}} a={1} b={5} c={0.25} fill={0.6} shades={[{from: 2, to: 3.5, o: 1}]} xTicks={ticks([1, 5], ['a', 'b'])} yTicks={[]} xLabel="x" yLabel="f" />
				</div> : null}
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><S07FinalFrame /></div> : null}
		</>
	);
};
export {Slip};
