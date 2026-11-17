// Scenes 11 to 15: feedback 1 (English 1.5 > Mathematics 1.1; crossed "81 > 74"), attempt 2 (N(42, 9), P(X > 46.5))
// and its feedback (0.0668; crossed z = 0.5), the handoff (the bottles' bell with a 1% tail below 490, σ = 8, μ = ?:
// exported as S11FinalFrame, s12's opening frame) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, prog} from '../../kit';
import {FrameSvg, GivensStrip, KeyNotesBullets, NormalCurve, QuestionCard, SceneHeading, ScoreCompare, StudioPlot, makePlot, normPdf, smooth} from '../../math/studio';
import {K11, K12, K13, K14, K15} from './cuemap';
import {dur, hold} from './common';
import {AnswerBox, BROWN, BottleFill, BoxCard, Chip, Frac, FramedCard, GOOD, GREY, Hand, INK, Mark, PERCH, Plate, QStrip, Row, SNAPPER, Slip, TEAL, VIO, bellFill} from './parts';

const AMB = '#d18f1f';

// ---------- 11. feedback 1 ----------
export const S11: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K11;
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<QStrip parts={['Priya scored ', {u: '74', at: k.english}, ' in English, where the marks had mean ', {u: '62', at: k.english + 20}, ' and standard deviation ', {u: '8', at: k.english + 40}, ', and ', {u: '81', at: k.maths}, ' in Mathematics, where the marks had mean ', {u: '70', at: k.maths + 20}, ' and standard deviation ', {u: '10', at: k.maths + 40}, '. In which subject did Priya perform better relative to the cohort? Justify your answer using z-scores.']} size={28} />
			<GivensStrip x={96} y={330} size={34} items={[{content: 'English 74 (μ 62, σ 8)', role: 'k', at: k.english}, {content: 'Maths 81 (μ 70, σ 10)', role: 'a', at: k.maths}]} />
			<ScoreCompare x={110} y={480} width={800} items={[{label: 'English 74', mu: 62, sigma: 8, value: 74, role: 'k'}, {label: 'Mathematics 81', mu: 70, sigma: 10, value: 81, role: 'a'}]} toZ={smooth(prog(fr, k.bigger, 36))} rowGap={165} at={-30} />
			<Row x={980} y={420} at={-30} size={36} color={GREY}>z = <Frac n="x − μ" d="σ" /> for each subject</Row>
			<Row x={980} y={520} at={k.five} size={40}>English: z = <Frac n="74 − 62" d="8" /> = 1.5</Row>
			<Row x={980} y={610} at={k.one} size={40}>Mathematics: z = <Frac n="81 − 70" d="10" /> = 1.1</Row>
			<AnswerBox x={980} y={710} at={k.cohort} size={44}>English: 1.5 &gt; 1.1</AnswerBox>
			<Slip x={980} y={810} at={k.choosing} strikeAt={k.spreads} size={36} caption="raw marks from different groups">Mathematics, because 81 &gt; 74</Slip>
		</>
	);
};

// ---------- 12. attempt 2 ----------
const Q2 = 'The times, X minutes, taken to complete a puzzle are modelled by X ∼ N(42, 9). Find P(X > 46.5). You may use: P(Z < 0.50) = 0.6915 and P(Z < 1.50) = 0.9332.';
export const S12: React.FC = () => (
	<>
		<QuestionCard at={0} size={40} w={1700} y={170} heading="Last one" hold={{...hold('scene-12'), ringFrom: K12.pause}} pauseAt={K12.pause}><div>{Q2}</div></QuestionCard>
		<StudioPlot x={300} y={450} width={900} height={380} window={{x: [33, 51], y: [0, 0.15]}} xTicks={[]} yTicks={[]} xLabel="time x (min)" yLabel="f(x)" grid={false} at={6} />
		<BoxCard x={1220} y={470} w={360} at={10} size={34} title="to do"><div style={{fontWeight: 800}}>find P(X &gt; 46.5)</div></BoxCard>
	</>
);

// ---------- 13. feedback 2 ----------
const G13 = {x: 40, y: 380, w: 900, h: 520} as const;
const W13 = {x: [33, 51] as [number, number], y: [0, 0.15] as [number, number]};
const M13 = makePlot(G13.x, G13.y, G13.w, G13.h, W13);
export const S13: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K13;
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<QStrip parts={['The times, X minutes, taken to complete a puzzle are modelled by X ∼ N(42, ', {u: '9', at: k.variance}, '). Find P(X > ', {u: '46.5', at: k.zed}, '). You may use: P(Z < 0.50) = 0.6915 and ', {u: 'P(Z < 1.50) = 0.9332', at: k.table}, '.']} size={28} />
			<GivensStrip x={96} y={286} size={34} items={[{content: 'X ∼ N(42, 9)', role: 'b', at: k.variance}, {content: 'P(X > 46.5)', role: 'k', at: k.zed}, {content: 'P(Z < 1.50) = 0.9332', role: 'k', at: k.table}]} />
			<NormalCurve x={G13.x} y={G13.y} width={G13.w} height={G13.h} window={W13} mu={42} sigma={3} xTicks={[36, 39, 45, 48]} xLabel="time x (min)" yLabel="f(x)" muMark={{}} shade={[{from: 46.5, at: k.right}]} overlay={m => bellFill(m, 42, 3, 33, 51)} at={-30} />
			<Mark m={M13} v={46.5} o={prog(fr, k.zed, 14)} mu={42} sigma={3} label="46.5" ly={0.13} />
			<Row x={980} y={400} at={k.three} size={44}>σ = √9 = 3</Row>
			<Row x={980} y={480} at={k.five} size={42}>z = <Frac n="46.5 − 42" d="3" /> = 1.5</Row>
			<AnswerBox x={980} y={610} at={k.eight} size={40}>P(X &gt; 46.5) = 1 − 0.9332 = 0.0668</AnswerBox>
			<Slip x={980} y={720} at={k.wrong} strikeAt={k.sigma} size={38} caption="9 is σ²">z = 4.5/9 = 0.5</Slip>
		</>
	);
};

// ---------- 14. handoff ----------
const WH = {x: [460, 560] as [number, number], y: [0, 0.058] as [number, number]};
const BH = {x: 60, y: 240, w: 1100, h: 660} as const;
const MH = makePlot(BH.x, BH.y, BH.w, BH.h, WH);
const MU_H = 508.64;
/** The bottles' bell with a 1% tail below 490, σ = 8 and μ = ? (s12 opens on it). */
export const BottleHandoff: React.FC<{chip: number; bell: number; mean: number; chipOut?: number}> = ({chip, bell, mean, chipOut}) => {
	const f = useCurrentFrame();
	const [mx, by] = MH.pf(MU_H, 0), [, ty] = MH.pf(0, 0.054);
	const ao = prog(f, mean, 14), a = smooth(prog(f, mean, 30));
	return <>
		<Chip x={96} y={80} at={chip} out={chipOut} size={44} color={BROWN}>Next: finding μ or σ from a probability</Chip>
		<NormalCurve x={BH.x} y={BH.y} width={BH.w} height={BH.h} window={WH} mu={MU_H} sigma={8} xTicks={[470, 490, 530, 550]} xLabel="fill (mL)" yLabel="" muMark={{at: bell}} shade={[{to: 490, at: bell}]} overlay={m => bellFill(m, MU_H, 8, 460, 560)} at={bell} />
		<Mark m={MH} v={490} o={prog(f, bell, 14)} mu={MU_H} sigma={8} label="490" ly={0.046} />
		<Hand x={MH.pf(474, 0)[0]} y={MH.pf(0, 0.009)[1]} at={bell} size={48} color={AMB}>1%</Hand>
		<FrameSvg style={{opacity: ao}}>
			<line x1={mx} x2={mx} y1={by} y2={ty} stroke={VIO.stroke} strokeWidth={4} strokeDasharray="10 8" />
			<path d={`M${mx + 20},${ty + 30} h${80 * a} M${mx + 20 + 80 * a - 16},${ty + 16} L${mx + 20 + 80 * a},${ty + 30} L${mx + 20 + 80 * a - 16},${ty + 44}`} stroke={VIO.stroke} strokeWidth={5} fill="none" strokeDasharray="8 6" opacity={0.8} />
			<text x={mx} y={ty - 12} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, fill: VIO.ink}} stroke="#fffdf8" strokeWidth={8} paintOrder="stroke">μ = ?</text>
		</FrameSvg>
		<Chip x={1240} y={300} at={bell} size={44} color={VIO.ink}>σ = 8</Chip>
		<BottleFill x={1260} y={420} h={400} level={500} at={bell} />
		<Hand x={1460} y={520} at={bell} size={40} color={BROWN} w={420}>only 1% under 490 mL</Hand>
	</>;
};
/** s11's final frame, and s12's opening frame. */
export const S11FinalFrame: React.FC = () => <BottleHandoff chip={-300} bell={-300} mean={-300} />;
const W14 = {x: [-3.6, 3.6] as [number, number], y: [0, 0.46] as [number, number]};
const M14 = makePlot(60, 300, 1100, 540, W14);
export const S14: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K14;
	const sw = prog(fr, k.next - 4, 18);
	return (
		<>
			{sw < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}>
				<SceneHeading text="Counting standard deviations" at={4} size={48} />
				<AnswerBox x={96} y={180} at={-30} size={40}>z = <Frac n="x − μ" d="σ" /></AnswerBox>
				<AnswerBox x={460} y={190} at={-30} size={40}>This table looks left.</AnswerBox>
				<NormalCurve x={60} y={300} width={1100} height={540} window={W14} mu={0} sigma={1} xTicks={[-3, -2, -1, 1, 2, 3]} xLabel="z" yLabel="" shade={[{from: 1.25, at: k.turns}]} at={-30} />
				{[1.25, 1.6].map((z, i) => {const [px, py] = M14.pf(z, 0); return <FrameSvg key={z} style={{opacity: prog(fr, k.compares - 10 + 10 * i, 12)}}><circle cx={px} cy={py} r={14} fill={AMB} stroke="#fffdf8" strokeWidth={4} /></FrameSvg>;})}
				<Plate plate={SNAPPER} x={1240} y={320} w={300} at={k.compares - 10} />
				<Plate plate={PERCH} x={1240} y={520} w={300} at={k.compares} />
				<Hand x={1560} y={380} at={k.compares - 10} size={40} color={AMB}>z = 1.25</Hand>
				<Hand x={1560} y={580} at={k.compares} size={40} color={AMB}>z = 1.6</Hand>
				<Hand x={1240} y={780} at={k.turns} size={38} color={BROWN} w={620}>any normal area: a table look-up</Hand>
			</div> : null}
			{sw > 0 ? <div style={{position: 'absolute', inset: 0, opacity: sw}}><BottleHandoff chip={k.next} bell={k.company} mean={k.mean} /></div> : null}
		</>
	);
};

// ---------- 15. key notes ----------
export const S15: React.FC = () => {
	const fr = useCurrentFrame();
	const items = [
		{content: <>z = (x − μ)/σ: standard deviations above or below μ.</>, at: 2},
		{content: <>Z ∼ N(0, 1): every normal standardises to it.</>, at: 6},
		{content: <>Compare groups with z-scores; quote both.</>, at: 10},
		{content: <>This table: P(Z &lt; z). Right tail: 1 − table.</>, at: 14},
		{content: <>Negative z: mirror tail. Middle: 1 − 2 tails.</>, at: 18},
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
					<div style={{position: 'absolute', left: 1260, top: 276, width: 590, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 62, lineHeight: 1.1, color: INK}}>This table looks left.</div>
					<div style={{position: 'absolute', left: 1260, top: 450, width: 590, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, lineHeight: 1.3, color: INK}}>right tail: 1 − table; negative z: the mirror tail on the other side</div>
					<Plate plate={PERCH} x={1380} y={640} w={340} />
				</div> : null}
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><S11FinalFrame /></div> : null}
		</>
	);
};
export {TEAL, normPdf};
