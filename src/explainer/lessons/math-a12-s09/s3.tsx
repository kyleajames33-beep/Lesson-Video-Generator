// Scenes 11 to 15: feedback 1 (N(64, 36): 64, 64, 64, σ = 6; crossed σ = 36), attempt 2 and its feedback (equal tails
// 0.0548, middle 0.8904; crossed 0.9452), the handoff (the bags' bell with marks at μ ± σ, μ ± 2σ, μ ± 3σ and "?":
// exported as S09FinalFrame, s10's opening frame) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, prog} from '../../kit';
import {FrameSvg, GivensStrip, makePlot, KeyNotesBullets, NormalCurve, QuestionCard, SceneHeading, StudioPlot, normPdf, smooth} from '../../math/studio';
import {K11, K12, K13, K14, K15} from './cuemap';
import {dur, hold} from './common';
import {AnswerBox, bellFill, BROWN, BoxCard, CHIP_BAG, Chip, FramedCard, GOOD, GREY, Hand, INK, MU, Mark, Plate, Q, QStrip, Row, SIG, Slip, TEAL, VIO} from './parts';
import {BB, MB, WB} from './s1';

const AMB = '#d18f1f';

// ---------- 11. feedback 1 ----------
const G11 = {x: 40, y: 340, w: 900, h: 560} as const;
export const S11: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K11;
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<QStrip parts={['Bolt lengths X mm: X ∼ N(', {u: '64', at: k.four}, ', ', {u: '36', at: k.second}, '). State the mean, the median, the mode and the standard deviation.']} size={30} />
			<GivensStrip x={96} y={250} size={36} items={[{content: 'X ∼ N(64, 36)', role: 'b', at: k.first}, {content: 'length in mm', at: k.first}]} />
			<StudioPlot x={G11.x} y={G11.y} width={G11.w} height={G11.h} window={{x: [40, 88], y: [0, 0.075]}} xTicks={[]} yTicks={[]} xLabel="" yLabel="" grid={false} at={-30} />
			<NormalCurve x={G11.x} y={G11.y} width={G11.w} height={G11.h} window={{x: [40, 88], y: [0, 0.075]}} mu={64} sigma={6} xTicks={[46, 52, 58, 70, 76, 82]} xLabel="length x (mm)" yLabel="f(x)" muMark={{at: k.too}} overlay={m => bellFill(m, 64, 6, 40, 88)} at={k.first + 10} />
			<Row x={980} y={350} at={k.four} size={44}>mean μ = 64</Row>
			<Row x={980} y={420} at={k.too} size={44}>median = mode = 64</Row>
			<Hand x={980} y={490} at={k.too + 20} size={34} color={GREY}>symmetric, one peak</Hand>
			<AnswerBox x={980} y={560} at={k.mm} size={48}>σ = √36 = 6 mm</AnswerBox>
			<Slip x={980} y={680} at={k.a} strikeAt={k.squared} size={42} caption="36 is σ²">σ = 36</Slip>
		</>
	);
};

// ---------- 12. attempt 2 ----------
const Q2 = 'The masses, X g, of chocolate bars are modelled by X ∼ N(250, 25). Given that P(X < 242) = 0.0548, find P(X > 258) and P(242 < X < 258).';
export const S12: React.FC = () => (
	<>
		<QuestionCard at={0} size={40} w={1700} y={170} heading="Last one" hold={{...hold('scene-12'), ringFrom: K12.pause}} pauseAt={K12.pause}><div>{Q2}</div></QuestionCard>
		<StudioPlot x={300} y={430} width={900} height={400} window={{x: [228, 272], y: [0, 0.09]}} xTicks={[]} yTicks={[]} xLabel="mass x (g)" yLabel="f(x)" grid={false} at={6} />
		<BoxCard x={1240} y={450} w={360} at={10} size={34} title="to do"><div style={{fontWeight: 800}}>find P(X &gt; 258)</div><div style={{fontWeight: 800}}>find P(242 &lt; X &lt; 258)</div></BoxCard>
	</>
);

// ---------- 13. feedback 2 ----------
const G13 = {x: 40, y: 340, w: 900, h: 560} as const;
const W13 = {x: [228, 272] as [number, number], y: [0, 0.09] as [number, number]};
const M13 = makePlot(G13.x, G13.y, G13.w, G13.h, W13);
export const S13: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K13;
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<QStrip parts={['X ∼ N(250, 25). Given P(X < ', {u: '242', at: k.below}, ') = 0.0548, find P(X > ', {u: '258', at: k.two}, ') and P(242 < X < 258).']} size={30} />
			<GivensStrip x={96} y={250} size={36} items={[{content: 'X ∼ N(250, 25)', role: 'b', at: k.two}, {content: 'P(X < 242) = 0.0548', role: 'k', at: k.two + 20}]} />
			<NormalCurve x={G13.x} y={G13.y} width={G13.w} height={G13.h} window={W13} mu={250} sigma={5} xTicks={[242, 258]} xLabel="mass x (g)" yLabel="f(x)" muMark={{}}
				shade={[{to: 242, at: k.eight - 30}, {from: 258, at: k.eight}, {from: 242, to: 258, at: k.four - 20, color: 'rgba(243,217,166,0.55)'}]} overlay={m => bellFill(m, 250, 5, 228, 272)} at={-30} />
			<Hand x={M13.pf(231, 0)[0]} y={M13.pf(0, 0.03)[1]} at={k.below} size={34} color={AMB}>8 below</Hand>
			<Hand x={M13.pf(259.5, 0)[0]} y={M13.pf(0, 0.03)[1]} at={k.below} size={34} color={AMB}>8 above</Hand>
			<AnswerBox x={980} y={360} at={k.eight} size={44}>P(X &gt; 258) = 0.0548</AnswerBox>
			<Hand x={980} y={450} at={k.sym} size={34} color={VIO.ink}>symmetric: same distance, same area</Hand>
			<Row x={980} y={530} at={k.middle} size={40}>P(242 &lt; X &lt; 258) = 1 − 2(0.0548)</Row>
			<AnswerBox x={980} y={600} at={k.four} size={44}>P(242 &lt; X &lt; 258) = 0.8904</AnswerBox>
			<Slip x={980} y={710} at={k.one} strikeAt={k.tail} size={40} caption="the right tail is still in it">1 − 0.0548 = 0.9452</Slip>
		</>
	);
};

// ---------- 14. handoff ----------
const pdf = (v: number) => normPdf(v, MU, SIG);
const Handoff: React.FC<{chip: number; m1: number; tint: number; m3: number}> = ({chip, m1, tint, m3}) => {
	const f = useCurrentFrame();
	const o1 = prog(f, m1, 14), o3 = prog(f, m3, 14), o2 = prog(f, m3 - 20, 14), ot = prog(f, tint, 14);
	const [qx, qy] = MB.pf(175, 0.06);
	return <>
		<Chip x={96} y={88} at={chip} size={38} color={BROWN}>Next: how much area lies within one, two and three σ?</Chip>
		<NormalCurve x={BB.x} y={BB.y} width={BB.w} height={BB.h} window={WB} mu={MU} sigma={SIG} xTicks={[163, 167, 171, 179, 183, 187]} xLabel="mass (g)" yLabel="f(x)" muMark={{}} shade={[{from: 171, to: 179, at: tint, color: 'rgba(243,217,166,0.7)'}]} overlay={m => bellFill(m, MU, SIG, 159, 191)} at={-300} />
		<Mark m={MB} v={171} o={o1} label="μ − σ" />
		<Mark m={MB} v={179} o={o1} label="μ + σ" />
		<Mark m={MB} v={167} o={o2} label="μ − 2σ" ly={0.03} />
		<Mark m={MB} v={183} o={o2} label="μ + 2σ" ly={0.03} />
		<Mark m={MB} v={163} o={o3} label="μ − 3σ" ly={0.014} />
		<Mark m={MB} v={187} o={o3} label="μ + 3σ" ly={0.014} />
		<Q x={qx - 30} y={qy} o={ot} color={AMB} />
		<Q x={MB.pf(184, 0)[0]} y={MB.pf(0, 0.062)[1]} o={o2} />
		<Q x={MB.pf(188, 0)[0]} y={MB.pf(0, 0.044)[1]} o={o3} />
		<Plate plate={CHIP_BAG} x={1500} y={230} w={200} at={chip} />
		<Hand x={1300} y={560} at={chip} size={36} color={TEAL.ink} w={560}>the bags: X ∼ N(175, 16), σ = 4 g</Hand>
		<Hand x={1300} y={660} at={tint} size={40} color={BROWN} w={560}>How much area between the marks?</Hand>
	</>;
};
/** s09's final frame, and s10's opening frame. */
export const S09FinalFrame: React.FC = () => <Handoff chip={-300} m1={-300} tint={-300} m3={-300} />;
export const S14: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K14;
	const sw = prog(fr, k.next - 4, 18);
	return (
		<>
			{sw < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}>
				<SceneHeading text="Mirror, middle, forever" at={4} size={52} />
				<AnswerBox x={96} y={230} at={k.so} size={44}>check: one peak, symmetry, tails</AnswerBox>
				<AnswerBox x={96} y={340} at={k.so + 90} size={44}>normal: mean = median = mode</AnswerBox>
				<NormalCurve x={96} y={460} width={1000} height={440} window={WB} mu={MU} sigma={SIG} xTicks={[167, 183]} xLabel="mass (g)" yLabel="f(x)" muMark={{}} at={-30} />
				<Plate plate={CHIP_BAG} x={1400} y={300} w={300} />
			</div> : null}
			{sw > 0 ? <div style={{position: 'absolute', inset: 0, opacity: sw}}><Handoff chip={k.next} m1={k.mark} tint={k.marks} m3={k.three} /></div> : null}
		</>
	);
};

// ---------- 15. key notes ----------
export const S15: React.FC = () => {
	const fr = useCurrentFrame();
	const items = [
		{content: <>Normal: a continuous bell, used for many natural measurements.</>, at: 2},
		{content: <>Symmetric about μ: mean = median = mode = μ.</>, at: 6},
		{content: <>X ∼ N(μ, σ²): the second number is the variance.</>, at: 10},
		{content: <>Probability = shaded area; tails run to ±∞.</>, at: 14},
		{content: <>Equal distances from μ give equal tails.</>, at: 18},
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
					<div style={{position: 'absolute', left: 1260, top: 276, width: 590, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 58, lineHeight: 1.1, color: INK}}>Mirror, middle, forever.</div>
					<div style={{position: 'absolute', left: 1260, top: 440, width: 590, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, lineHeight: 1.3, color: INK}}>halves match; mean = median = mode; tails go on forever</div>
					<Plate plate={CHIP_BAG} x={1450} y={600} w={200} />
				</div> : null}
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><S09FinalFrame /></div> : null}
		</>
	);
};
export {smooth};
