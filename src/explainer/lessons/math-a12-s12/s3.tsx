// Scenes 11 to 15: feedback 1 (z = −2.05, μ ≈ 1006.15 g; crossed 993.85), attempt 2 (σ from a 4% upper tail) and
// its feedback (z = 1.75, σ = 4 hours; crossed σ = −4), the handoff (the fills' bell at 508.64 with its 1% tail
// at 490 and the strand's three tools: exported as S12FinalFrame, the opening frame for later practice) and the
// key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, prog} from '../../kit';
import {FrameSvg, GivensStrip, KeyNotesBullets, NormalCurve, QuestionCard, SceneHeading, StudioPlot, makePlot} from '../../math/studio';
import {K11, K12, K13, K14, K15} from './cuemap';
import {dur, hold} from './common';
import {AnswerBox, BROWN, BottleFill, BoxCard, Chip, Frac, FramedCard, GOOD, GREY, HEAD, Hand, INK, MU_SET, Mark, Plate, QStrip, RED, Row, Slip, TEAL, VIO, bellFill} from './parts';
import {WF} from './s1';

const AMB = '#d18f1f';

// ---------- 11. feedback 1 ----------
const G11 = {x: 40, y: 400, w: 900, h: 500} as const;
const W11 = {x: [994, 1018] as [number, number], y: [0, 0.15] as [number, number]};
const M11 = makePlot(G11.x, G11.y, G11.w, G11.h, W11);
export const S11: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K11;
	const mu = 1006.15;
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<QStrip parts={['The masses, X g, of bags of flour are modelled by X ∼ N(μ, ', {u: '9', at: k.sigma}, '). Only ', {u: '2%', at: k.two}, ' of bags weigh less than ', {u: '1000 g', at: k.two + 20}, '. Use the values given to find an approximate value of μ. You may use: ', {u: 'P(Z < 2.05) = 0.9798', at: k.closer}, ' and P(Z < 2.06) = 0.9803.']} size={28} />
			<GivensStrip x={96} y={300} size={34} items={[{content: 'X ∼ N(μ, 9)', role: 'b', at: k.two}, {content: 'P(X < 1000) = 0.02', role: 'k', at: k.two + 20}, {content: 'P(Z < 2.05) = 0.9798', role: 'k', at: k.closer}]} />
			<NormalCurve x={G11.x} y={G11.y} width={G11.w} height={G11.h} window={W11} mu={mu} sigma={3} xTicks={[1000]} xLabel="mass x (g)" yLabel="f(x)" muMark={{}} shade={[{to: 1000}]} overlay={m => {const [px, by] = m.p(1000, 0), [, ty] = m.p(1000, 0.14); return <>{bellFill(m, mu, 3, 994, 1018)}<line x1={px} x2={px} y1={by} y2={ty} stroke={RED} strokeWidth={4} strokeDasharray="10 8" /></>;}} at={-30} />
			<Hand x={M11.pf(995, 0)[0]} y={M11.pf(0, 0.03)[1]} at={-30} size={38} color={AMB}>2%</Hand>
			<Hand x={M11.pf(1007.5, 0)[0]} y={M11.pf(0, 0.135)[1]} at={-30} out={k.grams} size={34} color={VIO.ink}>μ = ?</Hand>
			<Hand x={M11.pf(1007.5, 0)[0]} y={M11.pf(0, 0.135)[1]} at={k.grams} size={34} color={VIO.ink}>μ ≈ 1006.15</Hand>
			<Row x={980} y={400} at={k.closer} size={36}>P(Z &lt; 2.05) = 0.9798 ≈ 0.98</Row>
			<Row x={980} y={460} at={k.mean - 30} size={44}>so z = −2.05</Row>
			<Row x={980} y={540} at={k.sigma} size={40}>σ = 3: <Frac n="1000 − μ" d="3" /> = −2.05</Row>
			<AnswerBox x={980} y={650} at={k.grams} size={44}>μ ≈ 1000 + 6.15 = 1006.15 g</AnswerBox>
			<Row x={980} y={740} at={k.grams + 20} size={30} color={GREY}>app: 1006.16 (z not rounded)</Row>
			<Slip x={980} y={800} at={k.wrong} strikeAt={k.cutoff} size={34} caption="the mean must be above the cut-off">μ = 1000 − 6.15 = 993.85</Slip>
		</>
	);
};

// ---------- 12. attempt 2 ----------
const Q2 = 'The running times, X hours, of a phone battery are modelled by X ∼ N(50, σ²). 4% of batteries run for more than 57 hours. Find σ. You may use: P(Z < 1.41) = 0.9207 and P(Z < 1.75) = 0.9599.';
export const S12: React.FC = () => (
	<>
		<QuestionCard at={0} size={40} w={1700} y={170} heading="Last one" hold={{...hold('scene-12'), ringFrom: K12.pause}} pauseAt={K12.pause}><div>{Q2}</div></QuestionCard>
		<StudioPlot x={300} y={480} width={900} height={340} window={{x: [36, 64], y: [0, 0.12]}} xTicks={[{value: 57, label: '57'}]} yTicks={[]} xLabel="running time x (hours)" yLabel="f(x)" grid={false} at={6}>
			{m => {const [px, by] = m.p(57, 0), [, ty] = m.p(57, 0.11); return <line x1={px} x2={px} y1={by} y2={ty} stroke={RED} strokeWidth={4} strokeDasharray="10 8" />;}}
		</StudioPlot>
		<BoxCard x={1220} y={490} w={360} at={10} size={34} title="to do"><div style={{fontWeight: 800}}>find σ</div></BoxCard>
	</>
);

// ---------- 13. feedback 2 ----------
const G13 = {x: 40, y: 400, w: 900, h: 500} as const;
const W13 = {x: [36, 64] as [number, number], y: [0, 0.12] as [number, number]};
const M13 = makePlot(G13.x, G13.y, G13.w, G13.h, W13);
export const S13: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K13;
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<QStrip parts={['The running times, X hours, of a phone battery are modelled by X ∼ N(50, σ²). ', {u: '4%', at: k.four}, ' of batteries run for more than ', {u: '57 hours', at: k.four + 20}, '. Find σ. You may use: P(Z < 1.41) = 0.9207 and ', {u: 'P(Z < 1.75) = 0.9599', at: k.five}, '.']} size={28} />
			<GivensStrip x={96} y={300} size={34} items={[{content: 'X ∼ N(50, σ²)', role: 'b', at: k.four}, {content: 'P(X > 57) = 0.04', role: 'k', at: k.four + 20}, {content: 'P(Z < 1.75) = 0.9599', role: 'k', at: k.five}]} />
			<StudioPlot x={G13.x} y={G13.y} width={G13.w} height={G13.h} window={W13} xTicks={[57]} yTicks={[]} xLabel="running time x (hours)" yLabel="f(x)" grid={false} at={-30} out={k.mean - 10}>
				{m => {const [px, by] = m.p(57, 0), [, ty] = m.p(57, 0.11); return <line x1={px} x2={px} y1={by} y2={ty} stroke={RED} strokeWidth={4} strokeDasharray="10 8" />;}}
			</StudioPlot>
			<NormalCurve x={G13.x} y={G13.y} width={G13.w} height={G13.h} window={W13} mu={50} sigma={4} xTicks={[42, 46, 54, 57, 62]} xLabel="running time x (hours)" yLabel="f(x)" muMark={{}} shade={[{from: 57}]} overlay={m => bellFill(m, 50, 4, 36, 64)} at={k.mean - 10} />
			<Hand x={M13.pf(58, 0)[0]} y={M13.pf(0, 0.03)[1]} at={k.mean} size={38} color={AMB}>4%</Hand>
			<Row x={980} y={410} at={k.five - 10} size={36}>P(Z &lt; 1.75) = 0.9599 ≈ 0.96</Row>
			<Row x={980} y={470} at={k.five} size={44}>so z = 1.75</Row>
			<Row x={980} y={550} at={k.seven} size={44}><Frac n="57 − 50" d="σ" /> = 1.75</Row>
			<AnswerBox x={980} y={660} at={k.hours} size={46}>σ = 7/1.75 = 4 hours</AnswerBox>
			<Row x={980} y={760} at={k.hours + 20} size={30} color={GREY}>about 4 hours (table z; exact z gives 3.998)</Row>
			<Slip x={980} y={820} at={k.wrong} strikeAt={k.negative} size={34} caption="57 is above the mean">z = −1.75, σ = −4</Slip>
		</>
	);
};

// ---------- 14. handoff ----------
const BH = {x: 60, y: 260, w: 1100, h: 640} as const;
const MH = makePlot(BH.x, BH.y, BH.w, BH.h, WF);
/** The fills' bell at 508.64 with its 1% tail at 490 and the strand's three tools (the strand's final frame). */
const FinalBoard: React.FC<{chips: number; later: number}> = ({chips, later}) => {
	const tools = ['68, 95, 99.7', 'z = (x − μ)/σ', 'area → z → μ or σ'];
	return <>
		{tools.map((t, i) => <Chip key={i} x={96 + i * 520} y={110} at={chips + 14 * i} size={40} color={[TEAL.ink, AMB, VIO.ink][i]}>{t}</Chip>)}
		<NormalCurve x={BH.x} y={BH.y} width={BH.w} height={BH.h} window={WF} mu={MU_SET} sigma={8} xTicks={[470, 490, 530, 550]} xLabel="fill (mL)" yLabel="" muMark={{}} shade={[{to: 490}]} overlay={m => bellFill(m, MU_SET, 8, 460, 560)} at={-30} />
		<Mark m={MH} v={490} o={1} mu={MU_SET} sigma={8} label="490" ly={0.046} />
		<Mark m={MH} v={MU_SET} o={1} mu={MU_SET} sigma={8} label="μ = 508.64" ly={0.056} />
		<Hand x={MH.pf(474, 0)[0]} y={MH.pf(0, 0.009)[1]} at={-30} size={48} color={AMB}>1%</Hand>
		<BottleFill x={1260} y={300} h={420} level={508} />
		<Plate plate={HEAD} x={1500} y={290} w={240} />
		{(() => {const sc = 240 / (HEAD.box[2] - HEAD.box[0]), cx = 1500 + (507 - HEAD.box[0]) * sc, cy = 290 + (620 - HEAD.box[1]) * sc, r = 200 * sc * 0.8, a = ((-140 + (280 * (MU_SET - 490)) / 30) * Math.PI) / 180; return <FrameSvg><circle cx={cx} cy={cy} r={r} fill="#fffdf8" stroke={VIO.stroke} strokeWidth={5} /><line x1={cx} y1={cy} x2={cx + Math.sin(a) * r * 0.75} y2={cy - Math.cos(a) * r * 0.75} stroke={VIO.stroke} strokeWidth={7} strokeLinecap="round" /><circle cx={cx} cy={cy} r={8} fill={VIO.stroke} /></FrameSvg>;})()}
		<Hand x={1530} y={680} at={-30} size={34} color={VIO.ink}>dial: 508.64</Hand>
		<Chip x={1260} y={800} at={later} size={44} color={BROWN}>Later: mixed practice</Chip>
	</>;
};
/** s12's final frame (the strand's last; later practice opens on it). */
export const S12FinalFrame: React.FC = () => <FinalBoard chips={-300} later={-300} />;
export const S14: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K14;
	const card = 1 - prog(fr, k.last, 16);
	return (
		<>
			<FinalBoard chips={k.sigma} later={k.later} />
			{card > 0.01 ? <div style={{position: 'absolute', inset: 0, opacity: card}}>
				<FramedCard x={96} y={96} w={1200} h={130} at={-30} />
				<div style={{position: 'absolute', left: 130, top: 118, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 60, color: INK}}>Area to z, then z to the unknown.</div>
			</div> : null}
		</>
	);
};

// ---------- 15. key notes ----------
export const S15: React.FC = () => {
	const fr = useCurrentFrame();
	const items = [
		{content: <>Find z first, then solve z = (x − μ)/σ.</>, at: 2},
		{content: <>Table backwards: a tail p is a left area 1 − p at +z.</>, at: 6},
		{content: <>Below the mean: z &lt; 0. Above: z &gt; 0.</>, at: 10},
		{content: <>Check on a sketch; round in the safe direction.</>, at: 14},
		{content: <>Whole-σ percentages: use 68, 95, 99.7.</>, at: 18},
	];
	const end = Math.max(1350, dur('scene-15'));
	const back = prog(fr, end - 40, 18);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
				<SceneHeading text="Key notes: what to write in your book" at={-60} size={56} />
				<div style={{position: 'absolute', right: 96, top: 108, opacity: prog(fr, K15.pause, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: BROWN}}>pause to copy</div>
				<KeyNotesBullets x={96} y={250} w={1080} items={items} size={38} gap={44} />
				<FramedCard x={1220} y={196} w={660} h={740} at={8} />
				{fr >= 8 ? <div style={{position: 'absolute', inset: 0, opacity: prog(fr, 8, 14)}}>
					<div style={{position: 'absolute', left: 1260, top: 214, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: GOOD.ink}}>Memory aid</div>
					<div style={{position: 'absolute', left: 1260, top: 276, width: 590, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 58, lineHeight: 1.1, color: INK}}>Area to z, then z to the unknown.</div>
					<div style={{position: 'absolute', left: 1260, top: 470, width: 590, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, lineHeight: 1.3, color: INK}}>area → z: the table backwards, sign from the side; z → μ or σ: z = (x − μ)/σ</div>
					<Plate plate={HEAD} x={1450} y={640} w={180} />
				</div> : null}
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><S12FinalFrame /></div> : null}
		</>
	);
};
export {RED};
