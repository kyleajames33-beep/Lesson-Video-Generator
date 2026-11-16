// Scenes 6 to 10: when a normal model fits (checklist; water use, the bus wait and lifetimes do not); probabilities as
// shaded areas out to ±∞; symmetry gives equal tails; the memory aid; attempt 1.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, prog} from '../../kit';
import {ClassHistogram, FrameSvg, NormalCurve, QuestionCard, SceneHeading, StudioPlot, fnPath, normPdf, regionPath} from '../../math/studio';
import {K6, K7, K8, K9, K10} from './cuemap';
import {hold} from './common';
import {AMBER_FILL, AnswerBox, bellFill, BAG_COUNTS, BAG_EDGES, BoxCard, BusStop, CHIP_BAG, FramedCard, GOOD, GREY, Hand, INK, MU, Plate, Row, SIG, Slip, TEAL, Task, VIO} from './parts';
import {WB} from './s1';
import {makePlot} from '../../math/studio';
const B7 = {x: 96, y: 270, w: 1100, h: 620} as const;
const MB = makePlot(B7.x, B7.y, B7.w, B7.h, WB);

const AMB = '#d18f1f';
const RED = '#b8322a';
const pdf = (v: number) => normPdf(v, MU, SIG);

// ---------- 6. when a normal model fits ----------
const water = (x: number) => (x < 0 ? 0 : (x * Math.exp(-x / 1.5)) / 2.25);
const bus = (x: number) => (x < 0 || x > 10 ? 0 : 0.1);
const life = (x: number) => (x < 0 ? 0 : 0.5 * Math.exp(-x / 2));
const SK = [
	{f: water, mu: 3, sd: Math.sqrt(2) * 1.5, ymax: 0.3, tag: 'water use: skewed right', cue: 'right' as const},
	{f: bus, mu: 5, sd: 10 / Math.sqrt(12), ymax: 0.16, tag: 'bus wait: flat', cue: 'bell' as const},
	{f: life, mu: 2, sd: 2, ymax: 0.55, tag: 'lifetime: piled at 0', cue: 'off' as const},
];
export const S06: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K6;
	const wrong = prog(fr, k.those, 14);
	return (
		<>
			<SceneHeading text="When a normal model fits" at={4} size={48} />
			{SK.map((s, i) => {
				const y = 200 + i * 245, at = k[s.cue] - 30;
				return <React.Fragment key={i}>
					<StudioPlot x={40} y={y} width={620} height={250} window={{x: [-2, 12], y: [0, s.ymax]}} xTicks={[]} yTicks={[]} xLabel="" yLabel="" grid={false} at={0} opacity={0.35 + 0.65 * prog(fr, at, 14)}>
						{m => <g clipPath={m.clip}>
							{wrong > 0.01 ? <path d={regionPath(m, v => Math.max(s.f(v), normPdf(v, s.mu, s.sd)), -2, 12, v => Math.min(s.f(v), normPdf(v, s.mu, s.sd)))} fill="rgba(184,50,42,0.25)" opacity={wrong} /> : null}
							<path d={fnPath(m, v => normPdf(v, s.mu, s.sd), -2, 12, 200)} stroke={TEAL.stroke} strokeWidth={4} strokeDasharray="12 8" fill="none" />
							<path d={regionPath(m, s.f, -2, 12)} fill="rgba(107,99,88,0.14)" />
							<path d={fnPath(m, s.f, -2, 12, 300, [0, 10])} stroke={INK} strokeWidth={6} fill="none" />
						</g>}
					</StudioPlot>
					<Hand x={680} y={y + 90} at={at + 20} size={38} color={RED} w={380}>{s.tag}</Hand>
				</React.Fragment>;
			})}
			<BusStop x={960} base={y2base(1)} h={150} at={k.bell - 30} />
			<Hand x={680} y={890} at={k.those} size={34} color={RED} w={420}>a bell puts probability in the wrong places</Hand>
			<Row x={1120} y={150} at={k.so} size={36} color={GREY}>look for:</Row>
			<Row x={1120} y={200} at={k.dirs} size={36}>✓ continuous</Row>
			<Row x={1120} y={250} at={k.dirs + 10} size={36}>✓ one peak</Row>
			<Row x={1120} y={300} at={k.dirs + 20} size={36}>✓ roughly symmetric</Row>
			<Row x={1120} y={350} at={k.dirs + 30} size={36}>✓ thins out both ways</Row>
			<ClassHistogram x={1120} y={410} width={640} height={340} edges={BAG_EDGES} counts={BAG_COUNTS} density total={1000} yMax={0.11} xTicks={[165, 175, 185]} yTicks={[]} xLabel="mass (g)" yLabel="" countLabels={false} at={-30}>
				{m => <path d={fnPath(m, pdf, 161, 189, 200)} stroke={TEAL.stroke} strokeWidth={5} fill="none" />}
			</ClassHistogram>
			<Plate plate={CHIP_BAG} x={1760} y={430} w={110} at={-30} />
			<Row x={1120} y={760} at={k.lay + 40} size={34} color={TEAL.ink}>tails match the bell</Row>
			<Hand x={1120} y={812} at={k.clues} size={38} color={GREY}>clues, not a proof</Hand>
			<Hand x={1120} y={866} at={k.many} size={32} color={GOOD.ink} w={760}>good sign: many small, independent effects</Hand>
		</>
	);
};
const y2base = (i: number) => 200 + i * 245 + 178;

// ---------- 7. shaded areas out to infinity ----------
const arrow = (x0: number, y: number, dir: -1 | 1, o: number) => (o <= 0.01 ? null : <g opacity={o} stroke={AMB} strokeWidth={6} fill="none" strokeLinecap="round"><path d={`M${x0},${y} h${dir * 70} M${x0 + dir * 50},${y - 16} L${x0 + dir * 70},${y} L${x0 + dir * 50},${y + 16}`} /></g>);
export const S07: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K7;
	const [lx, ly] = MB.pf(159, 0), [rx] = MB.pf(191, 0);
	return (
		<>
			<Task x={96} y={150} w={960} at={-30} size={44}>Shade P(X &lt; 170) and P(X &gt; 180).</Task>
			<Plate plate={CHIP_BAG} x={1730} y={110} w={140} />
			<NormalCurve x={B7.x} y={B7.y} width={B7.w} height={B7.h} window={WB} mu={MU} sigma={SIG} xTicks={[165, 170, 175, 180, 185]} xLabel="mass (g)" yLabel="f(x)" shade={[{to: 170, at: k.thats}, {from: 180, at: k.inf2 - 20}]} overlay={m => bellFill(m, MU, SIG, 159, 191)} at={-30} />
			<FrameSvg>{arrow(lx + 10, ly + 2, -1, prog(fr, k.inf1, 12))}{arrow(rx - 10, ly + 2, 1, prog(fr, k.inf2, 12))}</FrameSvg>
			<Hand x={lx + 90} y={ly - 80} at={k.inf1} size={36} color={AMB}>to −∞</Hand>
			<Hand x={rx - 70} y={ly - 80} at={k.inf2} size={36} color={AMB}>to +∞</Hand>
			<Row x={1240} y={330} at={k.thats} size={40}>P(X &lt; 170): area left of 170</Row>
			<Row x={1240} y={400} at={k.single} size={30} color={GREY}>P(X ≤ 170) = P(X &lt; 170), since P(X = 170) = 0</Row>
			<Row x={1240} y={480} at={k.model} size={32} color={GREY}>P(X &lt; 0): less than 10⁻⁴⁰⁰</Row>
			<Hand x={1240} y={540} at={k.useful} size={40} color={INK}>tiny: still useful</Hand>
			<Row x={1240} y={640} at={k.over} size={40}>P(X &gt; 180): area right of 180</Row>
		</>
	);
};

// ---------- 8. symmetry gives equal tails ----------
export const S08: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K8;
	const lift = prog(fr, k.area - 20, 30);
	const half = prog(fr, k.mean, 14);
	return (
		<>
			<Task x={96} y={150} w={960} at={-30} size={44}>Use one tail to find the others.</Task>
			<Plate plate={CHIP_BAG} x={1730} y={110} w={140} />
			<Row x={1240} y={240} at={-30} size={32} color={GREY}>one tail given: P(X &lt; 170)</Row>
			<NormalCurve x={B7.x} y={B7.y} width={B7.w} height={B7.h} window={WB} mu={MU} sigma={SIG} xTicks={[165, 170, 180, 185]} xLabel="mass (g)" yLabel="f(x)"
				shade={[{to: 170, at: -30}, {from: 180, at: k.area}, {from: 170, to: 180, at: k.tails, out: k.mean, color: 'rgba(243,217,166,0.5)'}, {from: 170, to: 175, at: k.mean + 20}]} muMark={{at: k.mean}} at={-30}
				overlay={(m) => <g>{bellFill(m, MU, SIG, 159, 191)}{lift > 0.01 ? <path d={regionPath(m, v => pdf(2 * MU - v), 180, 191)} fill="none" stroke={VIO.stroke} strokeWidth={5} strokeDasharray="10 7" opacity={lift} /> : null}</g>} />
			<Hand x={MB.pf(161.5, 0)[0]} y={MB.pf(0, 0.045)[1]} at={k.one} size={32} color={AMB}>5 below</Hand>
			<Hand x={MB.pf(182, 0)[0]} y={MB.pf(0, 0.045)[1]} at={k.one} size={32} color={AMB}>5 above</Hand>
			<Hand x={MB.pf(176, 0)[0]} y={MB.pf(0, 0.106)[1]} at={k.area} size={36} color={VIO.ink}>same distance, same area</Hand>
			<FrameSvg style={{opacity: half}}>{(() => {const [px, t] = MB.pf(175, 0.1), [, b] = MB.pf(175, 0); return <line x1={px} x2={px} y1={t} y2={b + 40} stroke={VIO.stroke} strokeWidth={4} />;})()}</FrameSvg>
			<AnswerBox x={1240} y={300} at={k.area} size={40}>P(X &gt; 180) = P(X &lt; 170)</AnswerBox>
			<AnswerBox x={1240} y={400} at={k.tails} size={32}>P(170 &lt; X &lt; 180) = 1 − 2 × P(X &lt; 170)</AnswerBox>
			<Slip x={1240} y={490} at={k.tails + 30} strikeAt={k.tails + 52} size={28} caption="two tails to remove">P(170 &lt; X &lt; 180) = 1 − P(X &lt; 170)</Slip>
			<AnswerBox x={1240} y={640} at={k.each} size={32}>P(170 &lt; X &lt; 175) = 0.5 − P(X &lt; 170)</AnswerBox>
			<Hand x={1240} y={730} at={k.mean} size={36} color={VIO.ink}>each half: ½</Hand>
			<Hand x={1240} y={800} at={k.curve} size={36} color={GREY}>whole area = 1</Hand>
		</>
	);
};

// ---------- 9. memory aid ----------
export const S09: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K9;
	const icon = (x: number, at: number, node: React.ReactNode) => <div style={{position: 'absolute', left: x, top: 450, width: 400, opacity: prog(fr, at, 12)}}>{node}</div>;
	return (
		<>
			<SceneHeading text="Remember the shape" at={4} size={48} />
			<FramedCard x={160} y={170} w={1600} h={720} at={-30} />
			<div style={{position: 'absolute', left: 210, top: 196, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: GOOD.ink}}>Memory aid</div>
			<Plate plate={CHIP_BAG} x={240} y={300} w={190} />
			<Hand x={560} y={290} at={k.mirror} size={72} color={INK}>Mirror, middle, forever.</Hand>
			{icon(520, k.halves, <svg width={400} height={300} viewBox="0 0 330 210"><path d={(() => {let d = ''; for (let i = 0; i <= 60; i++) {const v = 159 + (i / 60) * 32, X = 20 + (i / 60) * 290, Y = 170 - pdf(v) * 1300; d += `${i ? 'L' : 'M'}${X},${Y}`;} return d;})()} stroke={TEAL.stroke} strokeWidth={5} fill="none" /><line x1={165} x2={165} y1={30} y2={175} stroke={VIO.stroke} strokeWidth={4} strokeDasharray="10 7" /><text x={165} y={196} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 30, fill: VIO.ink}}>halves match</text></svg>)}
			{icon(950, k.halves + 50, <svg width={400} height={300} viewBox="0 0 330 210"><path d="M165,60 L135,120 L195,120 Z" fill={VIO.stroke} /><text x={165} y={170} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, fill: VIO.ink}}>mean = median = mode</text></svg>)}
			{icon(1340, k.forever, <svg width={400} height={300} viewBox="0 0 330 210"><g stroke={TEAL.stroke} strokeWidth={6} fill="none"><path d="M40,100 h-30 M28,84 L10,100 L28,116" /><path d="M290,100 h30 M302,84 L320,100 L302,116" /><line x1={40} x2={290} y1={100} y2={100} stroke={INK} strokeWidth={4} /></g><text x={165} y={170} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 30, fill: TEAL.ink}}>tails go on forever</text></svg>)}
		</>
	);
};

// ---------- 10. attempt 1 ----------
const Q1 = 'The lengths, X mm, of bolts made by a machine are modelled by X ∼ N(64, 36). State the mean, the median, the mode and the standard deviation of X.';
export const S10: React.FC = () => (
	<>
		<QuestionCard at={0} size={40} w={1700} y={170} hold={{...hold('scene-10'), ringFrom: K10.pause}} pauseAt={K10.pause}><div>{Q1}</div></QuestionCard>
		<StudioPlot x={300} y={430} width={900} height={400} window={{x: [40, 88], y: [0, 0.075]}} xTicks={[]} yTicks={[]} xLabel="length x (mm)" yLabel="f(x)" grid={false} at={6} />
		<BoxCard x={1240} y={450} w={360} at={10} size={34} title="to do"><div style={{fontWeight: 800}}>mean, median</div><div style={{fontWeight: 800}}>mode, standard deviation</div></BoxCard>
	</>
);
export {AMBER_FILL};
