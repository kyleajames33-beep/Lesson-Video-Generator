// Scenes 11 to 16: attempt 1 (the mode of 12x²(1 − x)) and its brief feedback (2/3; crossed 0, a minimum), attempt 2
// (the lower quartile of F = (x² + 2x)/8) and its brief feedback (√3 − 1; crossed −1 ± √3), the handoff (a flat density
// on [1, 5] at an unknown height: exported as S06FinalFrame, s07's opening frame) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, prog} from '../../kit';
import {FrameSvg, GivensStrip, KeyNotesBullets, QuestionCard, SceneHeading, StudioPlot, makePlot} from '../../math/studio';
import {K11, K12, K13, K14, K15, K16} from './cuemap';
import {dur, hold} from './common';
import {AREA, AcrossDown, AnswerBox, BROWN, BoxCard, CDF, Chip, Cookie, DATA_R, DENS, F9Plot, FQ, FramedCard, GOOD, GREY, Hand, INK, QStrip, R2, Row, Slip, Table, Tri, fA, xTicksN} from './parts';

const Q1 = 'A continuous random variable X has probability density function f(x) = 12x²(1 − x) for 0 ≤ x ≤ 1, and f(x) = 0 elsewhere. Find the mode of X, justifying your answer.';
const Q2 = 'A continuous random variable X has cumulative distribution function F(x) = 0 for x < 0, F(x) = (x² + 2x)/8 for 0 ≤ x ≤ 2, F(x) = 1 for x > 2. Find the exact value of the lower quartile of X.';
const WA = {x: [-0.2, 1.2] as [number, number], y: [-0.1, 2] as [number, number]};
const WQ = {x: [-0.5, 2.5] as [number, number], y: [-0.05, 1.2] as [number, number]};

// ---------- 11. attempt 1 ----------
export const S11: React.FC = () => (
	<>
		<QuestionCard at={0} size={40} w={1700} y={170} hold={{...hold('scene-11'), ringFrom: K11.pause}} pauseAt={K11.pause}><div>{Q1}</div></QuestionCard>
		<BoxCard x={96} y={430} w={600} at={6} size={36} title="given"><div style={{fontWeight: 800}}>f(x) = 12x²(1 − x), 0 ≤ x ≤ 1</div><div style={{fontWeight: 800}}>f(x) = 0 elsewhere</div><div style={{fontWeight: 800}}>find the mode; justify</div></BoxCard>
		<F9Plot x={720} y={400} w={860} h={560} draw={-1} win={WA} xTicks={xTicksN([0.5, 1])} yTicks={[{value: 1, label: '1'}, {value: 2, label: '2'}]} yLabel="f(x)" at={6} />
	</>
);

// ---------- 12. feedback 1 ----------
const G12 = {x: 40, y: 340, w: 900, h: 620} as const;
export const S12: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K12;
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<QStrip parts={['X has probability density function f(x) = 12x²(1 − x) for ', {u: '0 ≤ x ≤ 1', at: k.expand}, ', and 0 elsewhere. Find the mode of X, justifying your answer.']} size={28} />
			<GivensStrip x={96} y={250} size={36} items={[{content: 'f(x) = 12x²(1 − x)', role: 'b', at: k.expand}, {content: '0 ≤ x ≤ 1', at: k.expand}]} />
			<F9Plot {...G12} win={WA} fn={fA} xTicks={xTicksN([0.5, 1])} yTicks={[{value: 1, label: '1'}, {value: 16 / 9, label: '16/9'}]} yLabel="f(x)" color={DENS.stroke} />
			<Tri m={makePlot(G12.x, G12.y, G12.w, G12.h, WA)} x={2 / 3} o={prog(fr, k.thirds2, 12)} label="2/3" />
			<Row x={980} y={340} at={k.expand} size={40} dim={prog(fr, k.but, 12) * 0.3}>f(x) = 12x² − 12x³</Row>
			<Row x={980} y={404} at={k.or} size={40} dim={prog(fr, k.but, 12) * 0.3}>f′(x) = 24x − 36x² = 12x(2 − 3x)</Row>
			<Row x={980} y={468} at={k.thats} size={44}>= 0 ⇒ x = 0 or x = 2/3</Row>
			<Table x={980} y={550} size={34} headW={160} colW={150} at={k.but} hl={{col: 1, at: k.at}} rows={[{head: 'x', cells: ['0', '2/3', '1']}, {head: 'f(x)', cells: ['0', '16/9', '0'], color: DENS.ink}]} />
			<AnswerBox x={980} y={690} at={k.thirds2} size={48}>mode = 2/3</AnswerBox>
			<Slip x={1360} y={680} at={k.zero} strikeAt={k.min} size={42} caption="f′ = 0 at a minimum">mode = 0</Slip>
		</>
	);
};

// ---------- 13. attempt 2 ----------
export const S13: React.FC = () => (
	<>
		<QuestionCard at={0} size={40} w={1700} y={170} heading="Last one" hold={{...hold('scene-13'), ringFrom: K13.pause}} pauseAt={K13.pause}><div>{Q2}</div></QuestionCard>
		<BoxCard x={96} y={430} w={600} at={6} size={36} title="given"><div style={{fontWeight: 800}}>F(x) = (x² + 2x)/8, 0 ≤ x ≤ 2</div><div style={{fontWeight: 800}}>0 below 0, 1 above 2</div><div style={{fontWeight: 800}}>find the lower quartile exactly</div></BoxCard>
		<F9Plot x={720} y={400} w={860} h={560} draw={-1} win={WQ} xTicks={xTicksN([0.5, 1, 1.5, 2])} yTicks={[{value: 1, label: '1'}]} at={6} />
	</>
);

// ---------- 14. feedback 2 ----------
const G14 = {x: 40, y: 340, w: 900, h: 620} as const;
export const S14: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K14;
	const q = Math.sqrt(3) - 1;
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<QStrip parts={['X has CDF F(x) = 0 for x < 0, F(x) = (x² + 2x)/8 for ', {u: '0 ≤ x ≤ 2', at: k.solve}, ', F(x) = 1 for x > 2. Find the exact value of the ', {u: 'lower quartile', at: k.solve}, ' of X.']} size={28} />
			<GivensStrip x={96} y={250} size={36} items={[{content: 'F(x) = (x² + 2x)/8', role: 'gradient', at: k.solve}, {content: '0 ≤ x ≤ 2', at: k.solve}, {content: 'lower quartile', role: 'k', at: k.solve}]} />
			<F9Plot {...G14} win={WQ} fn={FQ} xTicks={xTicksN([0.5, 1, 1.5, 2])} yTicks={[{value: 0.25, label: '¼'}, {value: 1, label: '1'}]} />
			<AcrossDown top={makePlot(G14.x, G14.y, G14.w, G14.h, WQ)} F={FQ} p={0.25} q={q} o={prog(fr, k.solve + 10, 16)} label="Q₁" />
			<Row x={980} y={350} at={k.so} size={40}>(x² + 2x)/8 = ¼ ⇒ x² + 2x = 2</Row>
			<Row x={980} y={420} at={k.complete} size={42}>(x + 1)² = 3 ⇒ x = −1 ± √3</Row>
			<DomainStrip x={980} y={500} at={k.minus} />
			<AnswerBox x={980} y={640} at={k.three} size={46}>Q₁ = √3 − 1 (≈ 0.73)</AnswerBox>
			<Slip x={980} y={760} at={k.keeping} strikeAt={k.domain} size={42} caption="one root is outside [0, 2]">Q₁ = −1 ± √3</Slip>
		</>
	);
};
/** A number line −3 to 2.5 with the domain [0, 2] marked, the kept root √3 − 1 and the rejected −1 − √3 (open red). */
const DomainStrip: React.FC<{x: number; y: number; at: number}> = ({x, y, at}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	if (o <= 0.01) return null;
	const X = (v: number) => x + 20 + ((v + 3) / 5.5) * 760;
	return <>
		<FrameSvg style={{opacity: o}}>
			<line x1={X(-3)} x2={X(2.5)} y1={y + 40} y2={y + 40} stroke={INK} strokeWidth={4} />
			<line x1={X(0)} x2={X(2)} y1={y + 40} y2={y + 40} stroke={GOOD.stroke} strokeWidth={12} />
			{[-2, -1, 0, 1, 2].map(v => <g key={v}><line x1={X(v)} x2={X(v)} y1={y + 32} y2={y + 48} stroke={INK} strokeWidth={3} /><text x={X(v)} y={y + 84} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28, fill: INK}}>{v}</text></g>)}
			<circle cx={X(-1 - Math.sqrt(3))} cy={y + 40} r={13} fill="#fffdf8" stroke="#b8322a" strokeWidth={5} />
			<circle cx={X(Math.sqrt(3) - 1)} cy={y + 40} r={12} fill={GOOD.stroke} />
		</FrameSvg>
		<Hand x={x} y={y - 26} at={at} size={34} color="#b8322a">−1 − √3: rejected</Hand>
	</>;
};

// ---------- 15. handoff ----------
const HP = {x: 96, y: 260, w: 1200, h: 700} as const;
const HW = {x: [0, 6] as [number, number], y: [0, 0.5] as [number, number]};
const Handoff: React.FC<{chip: number; q: number}> = ({chip, q}) => {
	const m = makePlot(HP.x, HP.y, HP.w, HP.h, HW);
	const [x1, yh] = m.pf(1, 0.25), [x5] = m.pf(5, 0), [x0, y0] = m.pf(0, 0), [x6] = m.pf(6, 0);
	return <>
		<Chip x={96} y={88} at={chip} size={40} color={BROWN}>Next: a flat density</Chip>
		<StudioPlot x={HP.x} y={HP.y} width={HP.w} height={HP.h} window={HW} xTicks={xTicksN([1, 2, 3, 4, 5])} yTicks={[]} xLabel="x" yLabel="f(x)" grid={false} at={-300} />
		<FrameSvg>
			<line x1={x0} x2={x1} y1={y0} y2={y0} stroke={DATA_R.stroke} strokeWidth={8} />
			<line x1={x1} x2={x5} y1={yh} y2={yh} stroke={DATA_R.stroke} strokeWidth={9} strokeLinecap="round" />
			<line x1={x5} x2={x6} y1={y0} y2={y0} stroke={DATA_R.stroke} strokeWidth={8} />
			<line x1={x1} x2={x1} y1={yh} y2={y0} stroke={DATA_R.stroke} strokeWidth={3} strokeDasharray="8 7" />
			<line x1={x5} x2={x5} y1={yh} y2={y0} stroke={DATA_R.stroke} strokeWidth={3} strokeDasharray="8 7" />
		</FrameSvg>
		<Hand x={(x1 + x5) / 2 - 220} y={yh - 80} at={-300} size={44} color={DATA_R.ink}>f(x) = ? for 1 ≤ x ≤ 5</Hand>
		<Chip x={HP.x + 4} y={yh - 40} at={q} size={44} color={BROWN}>?</Chip>
		<StudioPlot x={1360} y={300} width={500} height={360} window={{x: [0, 6], y: [0, 1.2]}} xTicks={xTicksN([1, 5])} yTicks={[{value: 1, label: '1'}]} xLabel="x" yLabel="F(x)" grid={false} at={-300} />
		<Chip x={1590} y={420} at={q} size={56} color={BROWN}>?</Chip>
		<Hand x={1360} y={700} at={q} size={40} color={BROWN} w={500}>How high must it be? What does F look like?</Hand>
	</>;
};
/** s06's final frame, and s07's opening frame. */
export const S06FinalFrame: React.FC = () => <Handoff chip={-300} q={-300} />;
export const S15: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K15;
	const sw = prog(fr, k.next - 4, 18);
	return (
		<>
			{sw < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}>
				<SceneHeading text="Mode, median, quartiles" at={4} size={52} />
				<AnswerBox x={96} y={220} at={k.so} size={50}>Mode: the top of f</AnswerBox>
				<AnswerBox x={96} y={340} at={k.so + 60} size={50}>Median and quartiles: across from F</AnswerBox>
				<Cookie cx={1400} cy={600} w={620} circle={{cm: R2}} />
				<Hand x={96} y={470} at={k.so + 90} size={44} color={AREA.ink}>cookie: mode 4 cm, median 2√2 ≈ 2.83 cm</Hand>
			</div> : null}
			{sw > 0 ? <div style={{position: 'absolute', inset: 0, opacity: sw}}><Handoff chip={k.next} q={k.how} /></div> : null}
		</>
	);
};

// ---------- 16. key notes ----------
export const S16: React.FC = () => {
	const fr = useCurrentFrame();
	const items = [
		{content: <>Mode: where f peaks (X most likely nearby). Use f, never F.</>, at: 2},
		{content: <>Find it: solve f′(x) = 0, confirm a maximum, check the ends.</>, at: 6},
		{content: <>Median: F(m) = ½. Quartiles: F(Q₁) = ¼, F(Q₃) = ¾.</>, at: 10},
		{content: <>Reject any root outside the domain, and say so.</>, at: 14},
		{content: <>Not f(m) = ½: a height is not an area.</>, at: 18},
	];
	const end = Math.max(1350, dur('scene-16'));
	const back = prog(fr, end - 40, 18);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
				<SceneHeading text="Key notes: what to write in your book" at={-60} size={56} />
				<div style={{position: 'absolute', right: 96, top: 108, opacity: prog(fr, K16.pause, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: BROWN}}>pause to copy</div>
				<KeyNotesBullets x={96} y={250} w={1080} items={items} size={40} gap={44} />
				<FramedCard x={1220} y={196} w={660} h={740} at={8} />
				{fr >= 8 ? <div style={{position: 'absolute', inset: 0, opacity: prog(fr, 8, 14)}}>
					<div style={{position: 'absolute', left: 1260, top: 214, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: GOOD.ink}}>Memory aid</div>
					<div style={{position: 'absolute', left: 1260, top: 276, width: 590, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 50, lineHeight: 1.1, color: INK}}>Mode: the top of f. Median and quartiles: go across from F.</div>
					<div style={{position: 'absolute', left: 1260, top: 530, width: 590, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, color: CDF}}>Median: F(m) = ½</div>
					<Cookie cx={1550} cy={760} w={290} circle={{cm: R2}} />
				</div> : null}
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><S06FinalFrame /></div> : null}
		</>
	);
};
