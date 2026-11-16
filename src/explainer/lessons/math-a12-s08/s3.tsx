// Scenes 11 to 14: attempt 2 (cos x on [0, π/2]: the integrals for an application) and its brief feedback (π/2 − 1,
// π − 3; crossed: squaring the whole integrand), the handoff (1,000 simulated chip bags in a bell around 175 g, "?":
// exported as S08FinalFrame, s09's opening frame) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, prog} from '../../kit';
import {CARD, ClassHistogram, FrameSvg, fnPath, GivensStrip, KeyNotesBullets, QuestionCard, SceneHeading, StudioPlot, makePlot, smooth} from '../../math/studio';
import {K11, K12, K13, K14} from './cuemap';
import {dur, hold} from './common';
import {AnswerBox, BAG_COUNTS, BAG_EDGES, BROWN, BoxCard, CHIP_BAG, Chip, DENS, Ev, FramedCard, GOOD, GREY, Hand, INK, Int, PHONES, Plate, QStrip, Row, Slip, VIO, fCos} from './parts';

const Q2 = 'A continuous random variable X has probability density function f(x) = cos x for 0 ≤ x ≤ π/2, and f(x) = 0 elsewhere. Write down the integrals you would evaluate, using an online computational application, to find E(X) and Var(X).';
const piTicks = [{value: Math.PI / 4, label: 'π/4'}, {value: Math.PI / 2, label: 'π/2'}];
/** A blank application panel (empty input line), for the attempt card. */
const BlankApp: React.FC<{x: number; y: number; w: number; at: number}> = ({x, y, w, at}) => {
	const o = prog(useCurrentFrame(), at, 12);
	return <div style={{position: 'absolute', left: x, top: y, width: w, opacity: o, background: '#2a2d31', borderRadius: 22, padding: '18px 26px 22px', boxSizing: 'border-box', border: '3px solid #4a4f55'}}>
		<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: '#a9b4ae'}}>ONLINE CALCULATOR</div>
		<div style={{marginTop: 10, background: '#dfe8dc', borderRadius: 12, height: 110}} />
	</div>;
};

// ---------- 11. attempt 2 ----------
export const S11: React.FC = () => (
	<>
		<QuestionCard at={0} size={38} w={1700} y={170} heading="Last one" hold={{...hold('scene-11'), ringFrom: K11.pause}} pauseAt={K11.pause}><div>{Q2}</div></QuestionCard>
		<StudioPlot x={300} y={470} width={700} height={360} window={{x: [0, 1.8], y: [0, 1.2]}} xTicks={piTicks} yTicks={[{value: 1, label: '1'}]} xLabel="x" yLabel="f(x)" grid={false} at={6} />
		<BlankApp x={1060} y={500} w={520} at={10} />
	</>
);

// ---------- 12. feedback 2 ----------
const G12 = {x: 40, y: 340, w: 900, h: 560} as const;
const W12 = {x: [0, 1.8] as [number, number], y: [0, 1.2] as [number, number]};
export const S12: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K12;
	const out = prog(fr, k.two, 12);
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<QStrip parts={['f(x) = ', {u: 'cos x', at: k.e}, ' on ', {u: '0 ≤ x ≤ π/2', at: k.e}, ', 0 elsewhere. Write the integrals you would evaluate with an application, to find E(X) and Var(X).']} size={28} />
			<GivensStrip x={96} y={250} size={36} items={[{content: 'f(x) = cos x', role: 'b', at: k.e}, {content: '0 ≤ x ≤ π/2', at: k.e}, {content: 'application', at: k.app}]} />
			<StudioPlot x={G12.x} y={G12.y} width={G12.w} height={G12.h} window={W12} xTicks={piTicks} yTicks={[{value: 1, label: '1'}]} xLabel="x" yLabel="f(x)" grid={false} at={-30}>
				{m => <path d={fnPath(m, fCos, 0, Math.PI / 2)} stroke={DENS.stroke} strokeWidth={7} fill="none" />}
			</StudioPlot>
			<Row x={980} y={350} at={k.dx} size={44}>E(X) = <Int lo="0" hi="π/2" /> x cos x dx</Row>
			<Row x={980} y={440} at={k.squared} size={44}>Var(X) = <Int lo="0" hi="π/2" /> x² cos x dx − μ²</Row>
			<div style={{position: 'absolute', left: 980, top: 530, width: 860, opacity: prog(fr, k.app, 12), background: '#2a2d31', borderRadius: 22, padding: '14px 26px 18px', boxSizing: 'border-box', border: '3px solid #4a4f55'}}>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: '#a9b4ae'}}>ONLINE CALCULATOR</div>
				<div style={{marginTop: 8, background: '#dfe8dc', borderRadius: 12, padding: '8px 18px', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, color: '#1f2a24'}}>
					<div style={{opacity: prog(fr, k.app + 20, 12)}}>μ = π/2 − 1 ≈ 0.571</div>
					<div style={{opacity: out}}>Var = π − 3 ≈ 0.142</div>
				</div>
			</div>
			<AnswerBox x={980} y={752} at={k.two + 20} size={40}>μ = π/2 − 1, Var(X) = π − 3</AnswerBox>
			<Slip x={980} y={836} at={k.squaring} strikeAt={k.variance} size={30} caption="square x only: this gives ≈ −0.073 < 0">{'∫ (x cos x)² dx − μ²'}</Slip>
		</>
	);
};

// ---------- 13. handoff ----------
export const HIST = {x: 96, y: 230, w: 1150, h: 620} as const;
export const HM = makePlot(HIST.x, HIST.y, HIST.w, HIST.h, {x: [161, 189], y: [0, 220]});
const Handoff: React.FC<{chip: number; grow: number; target: number; q: number}> = ({chip, grow, target, q}) => {
	const f = useCurrentFrame();
	const [tx, ty] = HM.pf(175, 210), [, by] = HM.pf(175, 0), [qx, qy] = HM.pf(171.5, 205);
	return <>
		<Chip x={96} y={88} at={chip} size={40} color={BROWN}>Next: when is a normal model useful?</Chip>
		<ClassHistogram x={HIST.x} y={HIST.y} width={HIST.w} height={HIST.h} edges={BAG_EDGES} counts={BAG_COUNTS} grow={grow} yMax={220} xTicks={[165, 170, 175, 180, 185]} yTicks={[50, 100, 150, 200]} xLabel="mass (g)" yLabel="number of bags" countLabels={false} at={-300} />
		<FrameSvg style={{opacity: prog(f, target, 14)}}><line x1={tx} x2={tx} y1={ty} y2={by} stroke={GREY} strokeWidth={4} strokeDasharray="12 9" /></FrameSvg>
		<Hand x={tx + 24} y={ty - 10} at={target} size={38} color={GREY}>target 175 g</Hand>
		<Hand x={1300} y={690} at={chip} size={36} color={GREY} w={560}>simulated: 1,000 bags</Hand>
		<Plate plate={CHIP_BAG} x={1500} y={250} w={240} at={chip} />
		<div style={{position: 'absolute', left: qx + 20, top: qy - 70, opacity: prog(f, q, 12), background: CARD, border: `4px solid ${BROWN}`, borderRadius: 16, padding: '0 22px 4px', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, color: BROWN}}>?</div>
		<Hand x={1300} y={790} at={q} size={44} color={BROWN} w={580}>Why a bell? When can we model it?</Hand>
	</>;
};
/** s08's final frame, and s09's opening frame. */
export const S08FinalFrame: React.FC = () => <Handoff chip={-300} grow={1} target={-300} q={-300} />;
export const S13: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K13;
	const sw = prog(fr, k.next - 4, 18);
	return (
		<>
			{sw < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}>
				<SceneHeading text="Continuous moments" at={4} size={52} />
				<AnswerBox x={96} y={230} at={k.so} size={48}>E(X) = <Int lo="a" hi="b" /> x f(x) dx</AnswerBox>
				<AnswerBox x={96} y={350} at={k.so + 60} size={48}>Var(X) = <Int lo="a" hi="b" /> x² f(x) dx − μ²</AnswerBox>
				<Hand x={96} y={480} at={k.so + 120} size={44} color={VIO.ink}>by hand, or set up and use an app</Hand>
				<Plate plate={PHONES} x={1300} y={260} w={420} />
				<Hand x={96} y={600} at={k.every} size={40} color={GREY} w={1100}>every density so far: a formula on an interval</Hand>
			</div> : null}
			{sw > 0 ? <div style={{position: 'absolute', inset: 0, opacity: sw}}><Handoff chip={k.next} grow={smooth(prog(fr, k.here, 40))} target={k.target} q={k.why} /></div> : null}
		</>
	);
};

// ---------- 14. key notes ----------
export const S14: React.FC = () => {
	const fr = useCurrentFrame();
	const items = [
		{content: <>E(X) = μ = ∫ₐᵇ x f(x) dx: the balance point.</>, at: 2},
		{content: <>Not ∫ f(x) dx: that is always 1.</>, at: 6},
		{content: <>Var(X) = ∫ₐᵇ x² f(x) dx − μ²; σ = √Var(X).</>, at: 10},
		{content: <>Uniform: E(X) = (a + b)/2, Var(X) = (b − a)²/12.</>, at: 14},
		{content: <>Beyond the course: write the set-up, use an app, say so.</>, at: 18},
	];
	const end = Math.max(1350, dur('scene-14'));
	const back = prog(fr, end - 40, 18);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
				<SceneHeading text="Key notes: what to write in your book" at={-60} size={56} />
				<div style={{position: 'absolute', right: 96, top: 108, opacity: prog(fr, K14.pause, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: BROWN}}>pause to copy</div>
				<KeyNotesBullets x={96} y={250} w={1080} items={items} size={38} gap={44} />
				<FramedCard x={1220} y={196} w={660} h={740} at={8} />
				{fr >= 8 ? <div style={{position: 'absolute', inset: 0, opacity: prog(fr, 8, 14)}}>
					<div style={{position: 'absolute', left: 1260, top: 214, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: GOOD.ink}}>Memory aid</div>
					<div style={{position: 'absolute', left: 1260, top: 276, width: 590, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 54, lineHeight: 1.1, color: INK}}>Sum becomes integral; P(x) becomes f(x) dx.</div>
					<div style={{position: 'absolute', left: 1260, top: 500, width: 590, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, color: VIO.ink}}>Σ x P(x) → ∫ x f(x) dx</div>
					<Plate plate={PHONES} x={1400} y={600} w={300} />
				</div> : null}
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><S08FinalFrame /></div> : null}
		</>
	);
};
export {BoxCard, Ev, Slip};
