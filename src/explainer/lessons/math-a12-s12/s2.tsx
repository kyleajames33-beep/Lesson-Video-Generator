// Scenes 6 to 10: σ from the empirical rule (bolts: 3σ = 1, σ = 1/3 mm, the bell squeezing until its 3σ marks meet
// the limits); a maximum σ from the table (cereal: z ≈ −2.575, σ ≈ 1.94, so 1.9 g on one-decimal settings; 2.0
// fails); two levers (μ = 380.16 g with σ = 2, or σ ≤ 1.9 with μ = 380); the memory aid; attempt 1.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, prog} from '../../kit';
import {FrameSvg, LiveReadoutBoard, NormalCurve, QuestionCard, SceneHeading, StudioPlot, fnPath, kf, makePlot, normBetween, normCdf, normPdf, regionPath, smooth, vis} from '../../math/studio';
import {K6, K7, K8, K9, K10} from './cuemap';
import {hold} from './common';
import {AnswerBox, BOTTLE, BROWN, BoxCard, CEREAL, Chip, Frac, FramedCard, GOOD, GREY, HEAD, HEX_BOLT, Hand, INK, MU_SET, Plate, RED, Row, Slip, TEAL, TableRow, Task, VIO, bellFill, bottleWidth} from './parts';

const AMB = '#d18f1f';
const GREEN = '#2f7d4f';
/** Solid red limit lines at the given values on a plot map. */
const Limits: React.FC<{m: ReturnType<typeof makePlot>; vs: readonly number[]; o?: number; label?: boolean}> = ({m, vs, o = 1, label = true}) => <FrameSvg style={{opacity: o}}>{vs.map(v => {const [px, by] = m.pf(v, 0), [, ty] = m.pf(v, m.win.y[1] * 0.95); return <g key={v}><line x1={px} x2={px} y1={by} y2={ty} stroke={RED} strokeWidth={5} />{label ? <text x={px} y={ty - 10} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: RED}}>{v}</text> : null}</g>;})}</FrameSvg>;

// ---------- 6. the spread from the empirical rule ----------
const B6 = {x: 40, y: 330, w: 900, h: 430} as const;
const W6 = {x: [48.3, 51.7] as [number, number], y: [0, 1.3] as [number, number]};
const M6 = makePlot(B6.x, B6.y, B6.w, B6.h, W6);
export const S06: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K6;
	const sg = kf(fr, [[k.shrinking, 0.5], [k.shrinking + 90, 1 / 3]]);
	const out = 1 - normBetween(49, 51, 50, sg);
	const pdf = (v: number) => normPdf(v, 50, sg);
	const band = vis(fr, k.sigma - 10, undefined, 14);
	return (
		<>
			<Task x={96} y={130} w={860} at={-30} size={44}>Bolts: find σ for about 0.3% rejected.</Task>
			<BoxCard x={990} y={120} w={880} at={-30} size={34} title="model and givens">
				<div style={{fontWeight: 800, color: TEAL.ink}}>X ∼ N(50, σ²), μ = 50 mm</div>
				<div style={{fontWeight: 800}}>limits 49 and 51 mm; rejected: about 0.3%</div>
			</BoxCard>
			<StudioPlot x={B6.x} y={B6.y} width={B6.w} height={B6.h} window={W6} xTicks={[49, 50, 51]} yTicks={[]} xLabel="length (mm)" yLabel="" grid={false} at={-30}>
				{m => <g clipPath={m.clip}>
					{band > 0.01 ? <path d={regionPath(m, pdf, 50 - 3 * sg, 50 + 3 * sg)} fill="rgba(243,217,166,0.5)" opacity={band} /> : null}
					<path d={regionPath(m, pdf, 48.3, 49)} fill="rgba(209,143,31,0.7)" stroke={AMB} strokeWidth={3} opacity={prog(fr, k.rejected - 20, 14)} />
					<path d={regionPath(m, pdf, 51, 51.7)} fill="rgba(209,143,31,0.7)" stroke={AMB} strokeWidth={3} opacity={prog(fr, k.rejected - 20, 14)} />
					<path d={fnPath(m, pdf, 48.3, 51.7, 300)} stroke={TEAL.stroke} strokeWidth={7} fill="none" />
					{[-3, 3].map(j => {const [px, by] = m.p(50 + j * sg, 0), [, ty] = m.p(50 + j * sg, pdf(50 + j * sg) + 0.25); return <line key={j} x1={px} x2={px} y1={by} y2={ty} stroke={VIO.stroke} strokeWidth={4} strokeDasharray="10 8" opacity={band} />;})}
				</g>}
			</StudioPlot>
			<Limits m={M6} vs={[49, 51]} />
			<Hand x={M6.pf(48.4, 0)[0]} y={M6.pf(0, 0.5)[1]} at={k.right + 40} out={k.sigma} size={36} color={VIO.ink}>2σ</Hand>
			<Hand x={M6.pf(51.25, 0)[0]} y={M6.pf(0, 0.5)[1]} at={k.right + 40} out={k.sigma} size={36} color={VIO.ink}>2σ</Hand>
			<Hand x={M6.pf(50.1, 0)[0]} y={M6.pf(0, 0.25)[1]} at={k.sigma} size={40} color={'#8a5a12'}>99.7% within ±3σ</Hand>
			<Plate plate={HEX_BOLT} x={1000} y={300} w={360} at={-30} />
			<Hand x={1390} y={320} at={-30} size={36} color={GREY} w={440}>reject if more than 1 mm from 50</Hand>
			<LiveReadoutBoard x={60} y={810} width={560} at={k.right} inline rows={[{label: 'σ (mm)', value: sg, digits: 3, role: 'gradient'}, {label: 'outside the limits', value: out * 100, text: `${(out * 100).toFixed(2)}%`, role: 'k'}]} />
			<Row x={1000} y={470} at={k.means} size={36}>0.3% outside, so 99.7% inside: μ ± 3σ</Row>
			<Hand x={1000} y={530} at={k.sigma} size={38} color={BROWN}>0.3% outside: 3σ</Hand>
			<div style={{position: 'absolute', inset: 0, opacity: vis(fr, k.sigma + 10, k.three, 12)}}><Slip x={1360} y={530} at={k.sigma + 10} strikeAt={k.sigma + 40} size={34} caption="that's 95%, not 99.7%">2σ = 1</Slip></div>
			<Row x={1000} y={640} at={k.three} size={48}>3σ = 1</Row>
			<AnswerBox x={1000} y={720} at={k.mm} size={48}>σ = 1/3 mm ≈ 0.33 mm</AnswerBox>
			<Hand x={1000} y={830} at={k.shrinking + 20} size={38} color={VIO.ink} w={860}>squeezing σ: the 3σ marks meet 49 and 51</Hand>
		</>
	);
};

// ---------- 7. a maximum spread from the table ----------
const B7 = {x: 300, y: 270, w: 680, h: 380} as const;
const W7 = {x: [372, 388] as [number, number], y: [0, 0.23] as [number, number]};
const M7 = makePlot(B7.x, B7.y, B7.w, B7.h, W7);
const MiniBell: React.FC<{x: number; y: number; w: number; h: number; mu: number; sigma: number; at: number; good: boolean; label: string; tail: string}> = ({x, y, w, h, mu, sigma, at, good, label, tail}) => {
	const f = useCurrentFrame();
	return <>
		<StudioPlot x={x} y={y} width={w} height={h} window={W7} xTicks={[375, 380]} yTicks={[]} xLabel="" yLabel="" grid={false} at={at}>
			{m => <g clipPath={m.clip}><path d={regionPath(m, v => normPdf(v, mu, sigma), 372, 375)} fill={good ? 'rgba(47,125,79,0.35)' : 'rgba(184,50,42,0.35)'} stroke={good ? GREEN : RED} strokeWidth={3} /><path d={fnPath(m, v => normPdf(v, mu, sigma), 372, 388, 200)} stroke={TEAL.stroke} strokeWidth={5} fill="none" /></g>}
		</StudioPlot>
		<div style={{position: 'absolute', left: x + w + 10, top: y + 30, opacity: prog(f, at, 12), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, color: good ? GREEN : RED, whiteSpace: 'pre', lineHeight: 1.2}}>
			<span style={{textDecoration: good ? undefined : 'line-through', textDecorationThickness: 4}}>{label}</span>{`\n${tail}\n${good ? 'passes ✓' : 'fails'}`}
		</div>
	</>;
};
export const S07: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K7;
	const sg = fr < k.grams ? 2 : kf(fr, [[k.grams, 2], [k.grams + 30, 1.9417]]);
	const sw = prog(fr, k.up - 10, 16);
	return (
		<>
			<Task x={96} y={130} w={860} at={-30} size={44}>Cereal: maximum σ, to 1 decimal place.</Task>
			<BoxCard x={990} y={120} w={880} at={-30} size={34} title="model and givens">
				<div style={{fontWeight: 800, color: TEAL.ink}}>X ∼ N(380, σ²)</div>
				<div style={{fontWeight: 800}}>cut-off 375 g; μ = 380 g; P(X &lt; 375) &lt; 0.005</div>
			</BoxCard>
			<Plate plate={CEREAL} x={60} y={270} w={220} />
			<NormalCurve x={B7.x} y={B7.y} width={B7.w} height={B7.h} window={W7} mu={380} sigma={sg} xTicks={[376, 384]} xLabel="mass (g)" yLabel="" muMark={{}} shade={[{to: 375, at: k.under}]} overlay={m => bellFill(m, 380, sg, 372, 388)} at={-30} />
			<Limits m={M7} vs={[375]} />
			<Hand x={M7.pf(372.3, 0)[0]} y={M7.pf(0, 0.06)[1]} at={k.under} size={36} color={AMB}>&lt; 0.5%</Hand>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}>
				<Row x={60} y={700} at={k.then} size={40}>(375 − 380)/σ = −2.575</Row>
				<Row x={60} y={780} at={k.grams} size={46}>σ = 5/2.575 ≈ 1.94 g</Row>
			</div>
			{sw > 0 ? <div style={{position: 'absolute', inset: 0, opacity: sw}}>
				<MiniBell x={40} y={680} w={300} h={240} mu={380} sigma={1.9} at={k.up - 10} good label="σ = 1.9" tail="≈ 0.43%" />
				<MiniBell x={520} y={680} w={300} h={240} mu={380} sigma={2} at={k.up} good={false} label="σ = 2.0" tail="≈ 0.62%" />
			</div> : null}
			<BoxCard x={1040} y={270} w={820} at={-30} size={40} title="the unknown spread"><div style={{fontWeight: 800}}>z = <Frac n="375 − 380" d="σ" />, z from the table</div></BoxCard>
			<Row x={1040} y={420} at={k.tail} size={32} color={GREY}>0.005 on the left mirrors to 0.995 left of +z</Row>
			<TableRow x={1040} y={470} row={2.5} cols={[6, 7, 8, 9]} hi={[7, 8]} hiAt={k.table} at={k.tail} size={32} cellW={150} />
			<Chip x={1040} y={610} at={k.table + 30} size={32} color={AMB}>target 0.9950: halfway</Chip>
			<AnswerBox x={1040} y={680} at={k.z575} size={44}>z ≈ −2.575</AnswerBox>
			<Row x={1400} y={694} at={k.z575 + 20} size={30} color={GREY}>app: −2.576</Row>
			<AnswerBox x={1040} y={770} at={k.round} size={38}>σ ≤ 1.9 g (one-decimal settings)</AnswerBox>
			<Hand x={1040} y={856} at={k.round + 10} size={38} color={BROWN}>maximum σ: round down</Hand>
			<Row x={1040} y={906} at={k.up} size={28} color={GREY}>σ = 2.0: z = −2.5, tail 1 − 0.9938 = 0.0062</Row>
		</>
	);
};

// ---------- 8. two levers for one condition ----------
const P8 = (i: number) => ({x: i ? 980 : 40, y: 300, w: 880, h: 330});
export const S08: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K8;
	const mu = kf(fr, [[k.keep, 380], [k.grams, 380.16]]);
	const sg = kf(fr, [[k.either, 2], [k.either + 40, 1.9]]);
	const panels = [{title: 'move μ (σ = 2 g)', mu, sigma: 2}, {title: 'shrink σ (μ = 380 g)', mu: 380, sigma: sg}];
	return (
		<>
			<Task x={96} y={130} w={1300} at={-30} size={44}>Under 0.5% below 375 g: two ways</Task>
			<Plate plate={CEREAL} x={1690} y={90} w={130} />
			{panels.map((p, i) => {
				const B = P8(i), m = makePlot(B.x, B.y, B.w, B.h, W7), tail = normCdf(375, p.mu, p.sigma);
				return <React.Fragment key={i}>
					<Row x={B.x + 60} y={244} at={-30} size={40} color={VIO.ink}>{p.title}</Row>
					<NormalCurve x={B.x} y={B.y} width={B.w} height={B.h} window={W7} mu={p.mu} sigma={p.sigma} xTicks={[376, 384]} xLabel="mass (g)" yLabel="" muMark={{}} shade={[{to: 375}]} overlay={mm => bellFill(mm, p.mu, p.sigma, 372, 388)} at={-30} />
					<Limits m={m} vs={[375]} />
					<Hand x={B.x + B.w - 330} y={B.y + 20} at={-30} size={38} color={tail < 0.005 ? GREEN : RED}>{`tail ${(tail * 100).toFixed(3)}%${tail < 0.005 ? ' ✓' : ''}`}</Hand>
				</React.Fragment>;
			})}
			<Row x={60} y={680} at={k.three} size={36}>(375 − μ)/2 = −2.575</Row>
			<Row x={60} y={740} at={k.mu} size={36}>μ = 375 + 5.15 = 380.15</Row>
			<Row x={60} y={796} at={k.short} size={28} color={GREY}>app: 380.152 (z not rounded), so 380.15 is just short</Row>
			<AnswerBox x={60} y={846} at={k.grams} size={40}>round up: μ = 380.16 g</AnswerBox>
			<AnswerBox x={1000} y={690} at={k.either} size={38}>σ ≤ 1.9 g (one-decimal settings)</AnswerBox>
			<Hand x={1000} y={800} at={k.spread} size={48} color={BROWN}>two levers</Hand>
		</>
	);
};

// ---------- 9. memory aid ----------
export const S09: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K9;
	const sk = smooth(prog(fr, k.sketch - 20, 30));
	const X = (v: number) => 200 + v * 50, Y = (v: number) => 200 - normPdf(v, 0, 1) * 380;
	const path = (a: number, b: number) => {let d = ''; for (let i = 0; i <= 50; i++) {const v = a + ((b - a) * i) / 50; d += `${i ? 'L' : 'M'}${X(v).toFixed(1)},${Y(v).toFixed(1)} `;} return d;};
	const bh = 240;
	return (
		<>
			<SceneHeading text="Remember the method" at={4} size={48} />
			<FramedCard x={200} y={180} w={1520} h={720} at={-30} />
			<div style={{position: 'absolute', left: 250, top: 206, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: GOOD.ink}}>Memory aid</div>
			<Plate plate={BOTTLE} x={270} y={300} w={bottleWidth(bh)} />
			<Plate plate={HEAD} x={360} y={290} w={130} />
			<Hand x={250} y={560} at={-30} size={34} color={VIO.ink}>dial: {MU_SET}</Hand>
			<Hand x={560} y={270} at={-30} size={66} color={INK}>Area to z, then z to the unknown.</Hand>
			<Row x={560} y={420} at={k.area} size={40}><span style={{color: AMB}}>area → z</span>  <span style={{color: GREY, fontSize: 34}}>(table backwards, sign from the side)</span></Row>
			<Row x={560} y={510} at={k.solve - 30} size={40}><span style={{color: VIO.ink}}>z → μ or σ</span>  <span style={{color: GREY, fontSize: 34}}>(z = (x − μ)/σ)</span></Row>
			<div style={{position: 'absolute', left: 560, top: 600, opacity: sk}}>
				<svg width={480} height={260} viewBox="0 0 400 220">
					<path d={path(-3.6, -1.3) + `L${X(-1.3)},200 L${X(-3.6)},200 Z`} fill="#f3d9a6" stroke={AMB} strokeWidth={3} />
					<path d={path(-3.6, 3.6)} stroke={TEAL.stroke} strokeWidth={5} fill="none" /><line x1={10} x2={390} y1={200} y2={200} stroke={INK} strokeWidth={3} />
					<path d={`M${X(-0.5)},40 h${100 * sk} m-14,-12 l14,12 l-14,12`} stroke={VIO.stroke} strokeWidth={5} fill="none" />
				</svg>
			</div>
			<Hand x={1080} y={680} at={k.sketch - 10} size={40} color={BROWN} w={560}>check the direction on a sketch</Hand>
		</>
	);
};

// ---------- 10. attempt 1 ----------
const Q1 = 'The masses, X g, of bags of flour are modelled by X ∼ N(μ, 9). Only 2% of bags weigh less than 1000 g. Use the values given to find an approximate value of μ. You may use: P(Z < 2.05) = 0.9798 and P(Z < 2.06) = 0.9803.';
export const S10: React.FC = () => (
	<>
		<QuestionCard at={0} size={40} w={1700} y={170} hold={{...hold('scene-10'), ringFrom: K10.pause}} pauseAt={K10.pause}><div>{Q1}</div></QuestionCard>
		<StudioPlot x={300} y={480} width={900} height={340} window={{x: [990, 1020], y: [0, 0.15]}} xTicks={[{value: 1000, label: '1000'}]} yTicks={[]} xLabel="mass x (g)" yLabel="f(x)" grid={false} at={6}>
			{m => {const [px, by] = m.p(1000, 0), [, ty] = m.p(1000, 0.14); return <line x1={px} x2={px} y1={by} y2={ty} stroke={RED} strokeWidth={4} strokeDasharray="10 8" />;}}
		</StudioPlot>
		<BoxCard x={1220} y={490} w={360} at={10} size={34} title="to do"><div style={{fontWeight: 800}}>find μ</div></BoxCard>
	</>
);
export {vis};
