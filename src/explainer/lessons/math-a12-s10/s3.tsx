// Scenes 12 to 17: attempt 1 (tomatoes N(80, 36)) and its feedback (≈ 95%, ≈ 16%; crossed 32%), attempt 2 (read
// μ = 40 and σ = 5 from the PDF) and its feedback (maximum (40, 1/(5√(2π))), inflection at 35 and 45; crossed
// 40 ± √50), the handoff (the snapper and the golden perch with their right tails "?": exported as S10FinalFrame,
// s11's opening frame) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, prog} from '../../kit';
import {FrameSvg, GivensStrip, KeyNotesBullets, NormalCurve, QuestionCard, SceneHeading, StudioPlot, makePlot, normCdf, normPdf, smooth, vis} from '../../math/studio';
import {K12, K13, K14, K15, K16, K17} from './cuemap';
import {dur, hold} from './common';
import {AM, APPLE, AS, AnswerBox, BROWN, BoxCard, Calc, Chip, Frac, FramedCard, GOOD, GREY, Hand, INK, Mark, PERCH, PdfFormula, Plate, Q, QStrip, Row, SNAPPER, ScreenGraph, Slip, TEAL, VIO, bellFill, pdfA} from './parts';
import {WA} from './s1';

const AMB = '#d18f1f';

// ---------- 12. attempt 1 ----------
const Q1 = 'The masses, X g, of tomatoes are modelled by X ∼ N(80, 36). Use the empirical rule to find, approximately, P(68 < X < 92) and P(X > 86).';
export const S12: React.FC = () => (
	<>
		<QuestionCard at={0} size={40} w={1700} y={170} hold={{...hold('scene-12'), ringFrom: K12.pause}} pauseAt={K12.pause}><div>{Q1}</div></QuestionCard>
		<StudioPlot x={300} y={430} width={900} height={400} window={{x: [56, 104], y: [0, 0.075]}} xTicks={[]} yTicks={[]} xLabel="mass x (g)" yLabel="f(x)" grid={false} at={6} />
		<BoxCard x={1220} y={450} w={360} at={10} size={34} title="to do"><div style={{fontWeight: 800}}>find P(68 &lt; X &lt; 92)</div><div style={{fontWeight: 800}}>find P(X &gt; 86)</div></BoxCard>
	</>
);

// ---------- 13. feedback 1 ----------
const G13 = {x: 40, y: 380, w: 900, h: 520} as const;
const W13 = {x: [56, 104] as [number, number], y: [0, 0.075] as [number, number]};
const M13 = makePlot(G13.x, G13.y, G13.w, G13.h, W13);
export const S13: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K13;
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<QStrip parts={['The masses, X g, of tomatoes are modelled by X ∼ N(80, ', {u: '36', at: k.second}, '). Use the empirical rule to find, approximately, P(', {u: '68', at: k.s68}, ' < X < ', {u: '92', at: k.s68 + 10}, ') and P(X > ', {u: '86', at: k.s86}, ').']} size={28} />
			<GivensStrip x={96} y={286} size={34} items={[{content: 'X ∼ N(80, 36)', role: 'b', at: k.second}, {content: 'P(68 < X < 92)', role: 'k', at: k.s68}, {content: 'P(X > 86)', role: 'k', at: k.s86}]} />
			<StudioPlot x={G13.x} y={G13.y} width={G13.w} height={G13.h} window={W13} xTicks={[]} yTicks={[]} xLabel="" yLabel="" grid={false} at={-30} />
			<NormalCurve x={G13.x} y={G13.y} width={G13.w} height={G13.h} window={W13} mu={80} sigma={6} xTicks={[62, 68, 74, 86, 92, 98]} xLabel="mass x (g)" yLabel="f(x)" muMark={{}}
				shade={[{from: 68, to: 92, at: k.p95 - 10, out: k.s86}, {from: 86, at: k.p16 - 10}]} overlay={m => bellFill(m, 80, 6, 56, 104)} at={-30} />
			<Mark m={M13} v={68} o={prog(fr, k.twoSig, 14) * (1 - 0.6 * prog(fr, k.s86, 14))} mu={80} sigma={6} label="68" ly={0.071} />
			<Mark m={M13} v={92} o={prog(fr, k.twoSig, 14) * (1 - 0.6 * prog(fr, k.s86, 14))} mu={80} sigma={6} label="92" ly={0.071} />
			<Mark m={M13} v={86} o={prog(fr, k.s86 + 10, 14)} mu={80} sigma={6} label="86" ly={0.05} />
			<Row x={980} y={380} at={k.six} size={44}>σ = √36 = 6</Row>
			<Row x={980} y={450} at={k.twoSig} size={40} dim={prog(fr, k.s86, 14)}>80 ± 12 = μ ± 2σ</Row>
			<AnswerBox x={980} y={520} at={k.p95} size={44}>P(68 &lt; X &lt; 92) ≈ 95%</AnswerBox>
			<Row x={980} y={620} at={k.s86} size={40}>86 = 80 + 6 = μ + σ</Row>
			<AnswerBox x={980} y={690} at={k.p16} size={44}>P(X &gt; 86) ≈ 32% ÷ 2 = 16%</AnswerBox>
			<Slip x={1080} y={800} at={k.wrong} strikeAt={k.tails} size={36} caption="that's both tails">P(X &gt; 86) ≈ 32%</Slip>
		</>
	);
};

// ---------- 14. attempt 2 ----------
export const S14: React.FC = () => (
	<>
		<QuestionCard at={0} size={38} w={1700} y={170} heading="Last one" hold={{...hold('scene-14'), ringFrom: K14.pause}} pauseAt={K14.pause}>
			<div>A normal random variable X has probability density function</div>
			<div style={{fontSize: 50, fontWeight: 700, margin: '8px 0 10px 60px'}}><PdfFormula sigma="5" mu="40" twoSig="50" />.</div>
			<div>State the coordinates of the global maximum of the graph of f, and the x-values of its points of inflection.</div>
		</QuestionCard>
		<StudioPlot x={300} y={510} width={900} height={310} window={{x: [20, 60], y: [0, 0.09]}} xTicks={[20, 30, 40, 50, 60]} yTicks={[]} xLabel="x" yLabel="f(x)" grid={false} at={6} />
		<BoxCard x={1220} y={520} w={360} at={10} size={34} title="to do"><div style={{fontWeight: 800}}>global maximum</div><div style={{fontWeight: 800}}>points of inflection</div></BoxCard>
	</>
);

// ---------- 15. feedback 2 ----------
const G15 = {x: 40, y: 420, w: 880, h: 480} as const;
const W15 = {x: [20, 60] as [number, number], y: [0, 0.09] as [number, number]};
const M15 = makePlot(G15.x, G15.y, G15.w, G15.h, W15);
const pdf15 = (v: number) => normPdf(v, 40, 5);
export const S15: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K15;
	const bell = prog(fr, k.global - 10, 14);
	const infl = prog(fr, k.s45 - 10, 12);
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<Row x={96} y={150} at={k.match} size={42} color={GREY}>general: <PdfFormula /></Row>
			<Row x={96} y={250} at={-30} size={44}>given: f(x) = <Frac n="1" d={<><MarkSpanU at={k.front}>5</MarkSpanU>√(2π)</>} /> e<span style={{fontSize: '0.64em', position: 'relative', top: '-0.78em'}}>−(x − <MarkSpanU at={k.mean}>40</MarkSpanU>)²/50</span></Row>
			<Hand x={1060} y={270} at={-30} size={32} color={GREY} w={800}>find: global maximum, points of inflection</Hand>
			<StudioPlot x={G15.x} y={G15.y} width={G15.w} height={G15.h} window={W15} xTicks={[20, 30, 35, 40, 45, 50, 60]} yTicks={[]} xLabel="x" yLabel="f(x)" grid={false} at={-30}>
				{m => <>
					{bell > 0.01 ? <g opacity={bell}><path d={(() => {let d = ''; for (let i = 0; i <= 200; i++) {const v = 20 + (40 * i) / 200; const [px, py] = m.p(v, pdf15(v)); d += `${i ? 'L' : 'M'}${px.toFixed(1)},${py.toFixed(1)} `;} return d;})()} stroke={TEAL.stroke} strokeWidth={7} fill="none" />
						{(() => {const [px, py] = m.p(40, pdf15(40)); return <circle cx={px} cy={py} r={15} fill="#2f7d4f" stroke="#fffdf8" strokeWidth={4} />;})()}</g> : null}
					{infl > 0.01 ? [35, 45].map(v => {const [px, py] = m.p(v, pdf15(v)); return <circle key={v} cx={px} cy={py} r={14} fill={VIO.stroke} stroke="#fffdf8" strokeWidth={4} opacity={infl} />;}) : null}
				</>}
			</StudioPlot>
			<Row x={980} y={360} at={k.mean} size={44}>μ = 40</Row>
			<Row x={1260} y={360} at={k.five} size={44}>σ = 5</Row>
			<Row x={980} y={430} at={k.five + 30} size={34} color={GREY}>check: 2σ² = 2 × 25 = 50 ✓</Row>
			<AnswerBox x={980} y={500} at={k.pi} size={44}>maximum (40, <Frac n="1" d="5√(2π)" />)</AnswerBox>
			<Hand x={980} y={620} at={k.pi + 10} size={34} color={GREY}>≈ (40, 0.0798)</Hand>
			<AnswerBox x={980} y={680} at={k.s45} size={44}>inflection at x = 35 and x = 45</AnswerBox>
			<Slip x={980} y={790} at={k.forty} strikeAt={k.squared} size={36} caption="50 is 2σ²">x = 40 ± √50</Slip>
		</>
	);
};
/** An underline that draws on cue (amber), inside formula text. */
const MarkSpanU: React.FC<{at: number; children: React.ReactNode}> = ({at, children}) => {
	const f = useCurrentFrame();
	const p = smooth(prog(f, at, 14));
	return <span style={{position: 'relative', display: 'inline-block', fontWeight: 800, color: p > 0.5 ? VIO.ink : undefined}}>{children}<span style={{position: 'absolute', left: -2, bottom: -4, height: 5, width: `calc(${p * 100}% + 4px)`, background: AMB, borderRadius: 3}} /></span>;
};

// ---------- 16. handoff ----------
export const FB = [{x: 60, mu: 40, sigma: 4, win: [28, 52] as [number, number], v: 45, plate: SNAPPER, tag: '5 cm above', label: 'snapper: N(40, 4²) cm', ticks: [28, 32, 36, 44, 48, 52]},
	{x: 1000, mu: 36, sigma: 2.5, win: [28.5, 43.5] as [number, number], v: 40, plate: PERCH, tag: '4 cm above', label: 'golden perch: N(36, 2.5²) cm', ticks: [28.5, 31, 33.5, 38.5, 41, 43.5]}];
export const FISH_Y = 320, FISH_W = 860, FISH_H = 530;
/** The plot map of handoff bell i (0 snapper, 1 golden perch). */
export const fishMap = (i: number) => {const b = FB[i]; return makePlot(b.x, FISH_Y, FISH_W, FISH_H, {x: b.win, y: [0, normPdf(b.mu, b.mu, b.sigma) * 1.18]});};
export const FishHandoff: React.FC<{chip: number; left: number; right: number; tint: number; chipOut?: number}> = ({chip, left, right, tint, chipOut}) => {
	const f = useCurrentFrame();
	return <>
		<Chip x={96} y={80} at={chip} out={chipOut} size={44} color={BROWN}>Next: which catch is more unusual?</Chip>
		{FB.map((b, i) => {
			const at = i ? right : left;
			const win = {x: b.win, y: [0, normPdf(b.mu, b.mu, b.sigma) * 1.18] as [number, number]};
			const m = makePlot(b.x, FISH_Y, FISH_W, FISH_H, win);
			const [qx] = m.pf(b.v + (b.win[1] - b.v) * 0.35, 0), qy = m.pf(0, normPdf(b.v, b.mu, b.sigma) * 0.9)[1] - 70;
			return <React.Fragment key={i}>
				<Plate plate={b.plate} x={b.x + 250} y={170} w={360} at={at} />
				<NormalCurve x={b.x} y={FISH_Y} width={FISH_W} height={FISH_H} window={win} mu={b.mu} sigma={b.sigma} xTicks={b.ticks.map(t => ({value: t, label: String(t)}))} xLabel="length (cm)" yLabel="" muMark={{at}} shade={[{from: b.v, at: tint}]} overlay={mm => bellFill(mm, b.mu, b.sigma, b.win[0], b.win[1])} at={at} />
				<Mark m={m} v={b.v} o={prog(f, at + 10, 14)} mu={b.mu} sigma={b.sigma} label={`${b.v}: ${b.tag}`} ly={win.y[1] * 0.8} />
				<Q x={qx - 20} y={qy} o={prog(f, tint, 14)} color={AMB} />
				<Hand x={b.x + 120} y={FISH_Y + FISH_H + 4} at={at} size={38} color={TEAL.ink}>{b.label}</Hand>
			</React.Fragment>;
		})}
	</>;
};
/** s10's final frame, and s11's opening frame. */
export const S10FinalFrame: React.FC = () => <FishHandoff chip={-300} left={-300} right={-300} tint={-300} />;
const B16 = {x: 60, y: 300, w: 1000, h: 560} as const;
export const S16: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K16;
	const sw = prog(fr, k.next - 4, 18);
	const m = makePlot(B16.x, B16.y, B16.w, B16.h, WA);
	return (
		<>
			{sw < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}>
				<SceneHeading text="What the calculator showed" at={4} size={48} />
				<AnswerBox x={96} y={190} at={-30} size={36}>68, 95, 99.7</AnswerBox>
				<AnswerBox x={420} y={190} at={-30} size={36}>inflection at μ ± σ</AnswerBox>
				<NormalCurve x={B16.x} y={B16.y} width={B16.w} height={B16.h} window={WA} mu={AM} sigma={AS} xTicks={[105, 120, 135, 165, 180, 195]} xLabel="mass x (g)" yLabel="f(x)" muMark={{}} shade={[{from: 135, to: 165, at: k.verifies}]} at={-30}
					overlay={mm => <>
						{(() => {const o = prog(fr, k.peaks, 10); const [px, py] = mm.p(150, pdfA(150)); return <circle cx={px} cy={py} r={16} fill="#2f7d4f" stroke="#fffdf8" strokeWidth={4} opacity={o} />;})()}
						{[135, 165].map(v => {const o = prog(fr, k.bends, 10); const [px, py] = mm.p(v, pdfA(v)); return <circle key={v} cx={px} cy={py} r={14} fill={VIO.stroke} stroke="#fffdf8" strokeWidth={4} opacity={o} />;})}
					</>} />
				<Hand x={m.pf(152, 0)[0]} y={m.pf(0, 0.0292)[1] - 10} at={k.peaks} size={34} color={'#2f7d4f'}>peak at μ</Hand>
				<Hand x={m.pf(166, 0)[0]} y={m.pf(0, 0.019)[1]} at={k.bends} size={34} color={VIO.ink}>bend changes at μ ± σ</Hand>
				<Calc x={1460} y={200} h={640} at={-30} screen={s => <ScreenGraph s={s} mu={AM} sigma={AS} win={[100, 200]} cdf={fr >= k.graphs ? {to: 100 + 100 * smooth(prog(fr, k.graphs, 40))} : undefined} band={fr < k.graphs ? [135, 165] : undefined} readout={fr < k.graphs ? '0.6827' : 'F'} size={40} />} />
				<Hand x={m.pf(140, 0)[0]} y={m.pf(0, 0.008)[1]} at={k.verifies} size={40} color={'#8a5a12'}>0.6827</Hand>
				<Hand x={1120} y={600} at={k.verifies} size={36} color={'#8a5a12'} w={320}>verifies the rule</Hand>
				<Hand x={1120} y={700} at={k.graphs} size={36} color={VIO.ink} w={320}>graphs the CDF</Hand>
				<Plate plate={APPLE} x={1150} y={300} w={180} />
			</div> : null}
			{sw > 0 ? <div style={{position: 'absolute', inset: 0, opacity: sw}}><FishHandoff chip={k.next} left={k.snapper - 40} right={k.perch - 30} tint={k.each} /></div> : null}
		</>
	);
};

// ---------- 17. key notes ----------
export const S17: React.FC = () => {
	const fr = useCurrentFrame();
	const items = [
		{content: <>Peak at x = μ, height <Frac n="1" d="σ√(2π)" />.</>, at: 2},
		{content: <>Points of inflection at x = μ ± σ.</>, at: 6},
		{content: <>About 68%, 95%, 99.7% within 1, 2, 3 σ.</>, at: 10},
		{content: <>One tail: half of what&apos;s outside (16%, 2.5%, 0.15%).</>, at: 14},
		{content: <>CDF F(x): area to the left; F(μ) = 0.5.</>, at: 18},
	];
	const end = Math.max(1350, dur('scene-17'));
	const back = prog(fr, end - 40, 18);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
				<SceneHeading text="Key notes: what to write in your book" at={-60} size={56} />
				<div style={{position: 'absolute', right: 96, top: 108, opacity: prog(fr, K17.pause, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: BROWN}}>pause to copy</div>
				<KeyNotesBullets x={96} y={250} w={1080} items={items} size={38} gap={44} />
				<FramedCard x={1220} y={196} w={660} h={740} at={8} />
				{fr >= 8 ? <div style={{position: 'absolute', inset: 0, opacity: prog(fr, 8, 14)}}>
					<div style={{position: 'absolute', left: 1260, top: 214, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: GOOD.ink}}>Memory aid</div>
					<div style={{position: 'absolute', left: 1260, top: 276, width: 590, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 64, lineHeight: 1.1, color: INK}}>68, 95, 99.7.</div>
					<div style={{position: 'absolute', left: 1260, top: 370, width: 590, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 58, lineHeight: 1.1, color: BROWN}}>Outside, then halve.</div>
					<div style={{position: 'absolute', left: 1260, top: 470, width: 590, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, lineHeight: 1.3, color: INK}}>within 1, 2, 3 σ of μ; one tail is half of what lies outside</div>
					<Plate plate={APPLE} x={1460} y={640} w={200} />
				</div> : null}
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><S10FinalFrame /></div> : null}
		</>
	);
};
export {normCdf, vis, AS, GivensStrip, Calc};
