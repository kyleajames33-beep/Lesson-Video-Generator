// Scenes 6 to 10: negative z by symmetry (the bottles below 490 mL: 0.1056); a middle by symmetry (the bolts,
// about 0.905); a judgement under the model (a 474 mL bottle: 0.0006); the memory aid; attempt 1.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, prog} from '../../kit';
import {FrameSvg, NormalCurve, QuestionCard, SceneHeading, StudioPlot, ZTable, fnPath, makePlot, normPdf, regionPath, smooth, vis} from '../../math/studio';
import {K6, K7, K8, K9, K10} from './cuemap';
import {hold} from './common';
import {AnswerBox, BROWN, BottleFill, BoxCard, Chip, Frac, FramedCard, GOOD, GREY, HEX_BOLT, Hand, INK, Mark, MirrorTail, PERCH, Plate, RED, Row, Slip, TEAL, Task, VIO, bellFill} from './parts';

const AMB = '#d18f1f';
const pdf0 = (v: number) => normPdf(v, 0, 1);
const pdfB = (v: number) => normPdf(v, 500, 8);
const WB = {x: [460, 540] as [number, number], y: [0, 0.058] as [number, number]};
const BTK = [470, 480, 490, 510, 520, 530];

// ---------- 6. negative z by symmetry ----------
const B6 = {x: 40, y: 270, w: 900, h: 400} as const;
const M6 = makePlot(B6.x, B6.y, B6.w, B6.h, WB);
const Z6 = {x: 980, y: 270, w: 900, h: 400} as const;
export const S06: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K6;
	const mir = prog(fr, k.snapper - 10, 40);
	return (
		<>
			<Task x={96} y={130} w={860} at={-30} size={44}>X ∼ N(500, 64): fill (mL)</Task>
			<BoxCard x={990} y={120} w={880} at={-30} size={40} title="givens"><div style={{fontWeight: 800}}>x = 490 mL, μ = 500 mL, σ = 8 mL</div></BoxCard>
			<NormalCurve x={B6.x} y={B6.y} width={B6.w} height={B6.h} window={WB} mu={500} sigma={8} xTicks={BTK} xLabel="fill (mL)" yLabel="" muMark={{}} shade={[{to: 490, at: k.bottle}]} overlay={m => bellFill(m, 500, 8, 460, 540)} at={-30} />
			<Mark m={M6} v={490} o={prog(fr, k.bottle, 14)} mu={500} sigma={8} label="490" ly={0.05} />
			<BottleFill x={B6.x + B6.w - 170} y={250} h={300} level={490} at={-30} />
			<StudioPlot x={Z6.x} y={Z6.y} width={Z6.w} height={Z6.h} window={{x: [-3.6, 3.6], y: [0, 0.46]}} xTicks={[-3, -1.25, 0, 1.25, 3]} yTicks={[]} xLabel="z" yLabel="" grid={false} at={-30}>
				{m => <>
					<path d={regionPath(m, pdf0, -3.6, -1.25)} fill="#f3d9a6" stroke={AMB} strokeWidth={3} opacity={prog(fr, k.minus, 14)} />
					<path d={regionPath(m, pdf0, 1.25, 3.6)} fill="rgba(209,143,31,0.45)" stroke={AMB} strokeWidth={3} opacity={prog(fr, k.matches, 14)} />
					<g clipPath={m.clip}><path d={fnPath(m, pdf0, -3.6, 3.6, 300)} stroke="#145e63" strokeWidth={7} fill="none" /></g>
					<MirrorTail m={m} fn={pdf0} c={0} a={1.25} lo={-3.6} p={prog(fr, k.snapper - 10, 40)} />
				</>}
			</StudioPlot>
			<Hand x={Z6.x + 600} y={Z6.y + 40} at={k.snapper} size={38} color={VIO.ink}>{mir > 0.5 ? 'mirror tail' : ''}</Hand>
			<Hand x={Z6.x + 40} y={Z6.y + 20} at={-30} out={k.minus} size={36} color={GREY} w={400}>the standard normal: this table covers z ≥ 0</Hand>
			<Row x={96} y={700} at={-30} size={44} dim={prog(fr, k.so, 14) * 0.5}>z = <Frac n="x − μ" d="σ" />{fr >= k.minus ? <> = <Frac n="490 − 500" d="8" /> = −1.25</> : null}</Row>
			<Row x={96} y={800} at={k.area} size={44}>P(Z &lt; −1.25) = P(Z &gt; 1.25)</Row>
			<AnswerBox x={96} y={870} at={k.so} size={40}>P(X &lt; 490) = 1 − 0.8944 = 0.1056</AnswerBox>
			<div style={{position: 'absolute', inset: 0, opacity: vis(fr, k.matches, k.so + 20, 12)}}><Slip x={1000} y={710} at={k.matches} strikeAt={k.matches + 30} size={36} caption="that's left of +1.25">P(Z &lt; −1.25) = 0.8944</Slip></div>
			<Row x={1000} y={720} at={k.about} size={40} color={GREY}>about 10.6% underfilled</Row>
			<Row x={1000} y={800} at={k.any} size={38}>P(Z &lt; −a) = P(Z &gt; a) = 1 − P(Z &lt; a)</Row>
			<Hand x={1000} y={870} at={k.flip} size={36} color={BROWN}>flip to the other side, then 1 − table</Hand>
		</>
	);
};

// ---------- 7. middles by symmetry ----------
const B7 = {x: 40, y: 300, w: 1000, h: 540} as const;
const W7 = {x: [49, 51] as [number, number], y: [0, 1.5] as [number, number]};
const M7 = makePlot(B7.x, B7.y, B7.w, B7.h, W7);
export const S07: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K7;
	return (
		<>
			<Task x={96} y={130} w={860} at={-30} size={44}>Bolts: find P(49.5 &lt; X &lt; 50.5).</Task>
			<BoxCard x={990} y={120} w={880} at={-30} size={36} title="model and givens">
				<div style={{fontWeight: 800, color: TEAL.ink}}>X ∼ N(50, 0.3²)</div>
				<div style={{fontWeight: 800}}>μ = 50 mm, σ = 0.3 mm; pass: 49.5 to 50.5 mm</div>
			</BoxCard>
			<Plate plate={HEX_BOLT} x={B7.x + B7.w - 330} y={300} w={300} at={-30} />
			<NormalCurve x={B7.x} y={B7.y} width={B7.w} height={B7.h} window={W7} mu={50} sigma={0.3} xTicks={[49.1, 49.5, 50.5, 50.9].map(v => ({value: v, label: v.toFixed(1)}))} xLabel="length (mm)" yLabel="" muMark={{}}
				shade={[{to: 49.5, at: k.each}, {from: 50.5, at: k.each}, {from: 49.5, to: 50.5, at: k.tails, color: 'rgba(243,217,166,0.6)'}]} overlay={m => bellFill(m, 50, 0.3, 49, 51)} at={-30} />
			<Mark m={M7} v={49.5} o={prog(fr, k.five, 14)} mu={50} sigma={0.3} label="49.5" ly={1.2} />
			<Mark m={M7} v={50.5} o={prog(fr, k.five, 14)} mu={50} sigma={0.3} label="50.5" ly={1.2} />
			<Row x={1080} y={290} at={-30} size={40}>z = <Frac n="x − μ" d="σ" />{fr >= k.zed ? <> = ±<Frac n="0.5" d="0.3" /> ≈ ±1.67</> : null}</Row>
			<Hand x={1530} y={300} at={k.zed + 10} size={34} color={GREY} w={340}>z rounded for the table</Hand>
			<ZTable x={1000} y={400} rowStart={1.5} rows={3} cols={8} cellW={98} cellH={44} size={26} highlight={{z: 1.67, at: k.each}} at={-30} />
			<Row x={1080} y={600} at={k.each + 20} size={38}>P(Z &gt; 1.67) = 1 − 0.9525 = 0.0475</Row>
			<AnswerBox x={1080} y={670} at={k.middle2} size={40}>P ≈ 1 − 2(0.0475) = 0.905</AnswerBox>
			<Row x={1080} y={770} at={k.middle2 + 30} size={30} color={GREY}>exact z = 5/3 gives ≈ 0.9044 (both approximate)</Row>
			<Row x={1080} y={840} at={k.so} size={44} color={'#2f7d4f'}>about 90.5% pass</Row>
		</>
	);
};

// ---------- 8. a judgement under the model ----------
const B8 = {x: 300, y: 260, w: 740, h: 400} as const;
const M8b = makePlot(B8.x, B8.y, B8.w, B8.h, WB);
export const S08: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K8;
	const zo = 1;
	const Z = {x: 330, y: 700, w: 680, h: 200};
	return (
		<>
			<Task x={96} y={130} w={860} at={-30} size={44}>Is a 474 mL bottle unusual?</Task>
			<BoxCard x={990} y={120} w={880} at={-30} size={40} title="model and givens"><div style={{fontWeight: 800}}>X ∼ N(500, 64): x = 474 mL, σ = 8 mL</div></BoxCard>
			<NormalCurve x={B8.x} y={B8.y} width={B8.w} height={B8.h} window={WB} mu={500} sigma={8} xTicks={[474, 516, 532]} xLabel="fill (mL)" yLabel="" muMark={{}} shade={[{to: 474, at: k.tail}]} overlay={m => bellFill(m, 500, 8, 460, 540)} at={-30} />
			<FrameSvg style={{opacity: prog(fr, k.check, 12)}}>{(() => {const [px, py] = M8b.pf(474, 0); return <circle cx={px} cy={py} r={15} fill={RED} stroke="#fffdf8" strokeWidth={4} />;})()}</FrameSvg>
			<BottleFill x={90} y={300} h={330} level={fr >= k.check ? 474 : 500} low={fr >= k.check} at={-30} />
			<Hand x={90} y={660} at={k.check} size={38} color={RED}>474 mL</Hand>
			{zo > 0.01 ? <div style={{position: 'absolute', inset: 0, opacity: zo}}>
				<div style={{position: 'absolute', left: Z.x - 10, top: Z.y - 10, width: Z.w + 20, height: Z.h + 20, background: '#fffdf8', borderRadius: 16, border: '2.5px solid rgba(60,45,20,0.14)'}} />
				<StudioPlot x={Z.x} y={Z.y} width={Z.w} height={Z.h} window={{x: [466, 478], y: [0, 0.0012]}} xTicks={[468, 474]} yTicks={[]} xLabel="zoom: left tail" yLabel="" grid={false} at={-30}>
					{m => <g clipPath={m.clip}><path d={regionPath(m, pdfB, 466, 474)} fill="#f3d9a6" stroke={AMB} strokeWidth={3} /><path d={fnPath(m, pdfB, 466, 478, 200)} stroke={TEAL.stroke} strokeWidth={6} fill="none" /></g>}
				</StudioPlot>
			</div> : null}
			<Row x={1080} y={300} at={-30} size={40}>z = <Frac n="x − μ" d="σ" />{fr >= k.its ? <> = <Frac n="474 − 500" d="8" /> = −3.25</> : null}</Row>
			<Hand x={1080} y={410} at={k.five + 20} size={34} color={GREY}>beyond 3σ: very unusual (last video)</Hand>
			<ZTable x={1080} y={470} rowStart={3.1} rows={3} cols={6} cellW={112} cellH={46} size={28} highlight={{z: 3.25, at: k.table}} at={-30} />
			<AnswerBox x={1080} y={670} at={k.six} size={38}>P(X &lt; 474) = 1 − 0.9994 = 0.0006</AnswerBox>
			<Row x={1080} y={770} at={k.low - 30} size={32} color={GREY}>about 6 in 10,000, assuming N(500, 64)</Row>
			<Hand x={1080} y={820} at={k.low - 10} size={38} color={BROWN}>under the model</Hand>
			<Chip x={1080} y={870} at={k.so} size={32} color={RED}>evidence the machine may have changed</Chip>
		</>
	);
};

// ---------- 9. memory aid ----------
export const S09: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K9;
	const X = (v: number, c: number) => c + v * 62, bell = (v: number) => 230 - pdf0(v) * 440;
	const path = (a: number, b: number, c: number) => {let d = ''; for (let i = 0; i <= 60; i++) {const v = a + ((b - a) * i) / 60; d += `${i ? 'L' : 'M'}${X(v, c).toFixed(1)},${bell(v).toFixed(1)} `;} return d;};
	const area = (a: number, b: number, c: number) => path(a, b, c) + `L${X(b, c)},230 L${X(a, c)},230 Z`;
	const sp = smooth(prog(fr, k.mirror, 36));
	const lab = (x: number, y: number, t: string, c = '#8a5a12', size = 34) => <text x={x} y={y} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, fill: c}} stroke="#fffdf8" strokeWidth={7} paintOrder="stroke">{t}</text>;
	return (
		<>
			<SceneHeading text="Remember the table" at={4} size={48} />
			<FramedCard x={200} y={180} w={1520} h={720} at={-30} />
			<div style={{position: 'absolute', left: 250, top: 206, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: GOOD.ink}}>Memory aid</div>
			<Plate plate={PERCH} x={250} y={330} w={260} />
			<Hand x={270} y={470} at={-30} size={34} color={AMB}>z = 1.6</Hand>
			<Hand x={560} y={270} at={-30} size={76} color={INK}>This table looks left.</Hand>
			<div style={{position: 'absolute', left: 520, top: 420, opacity: prog(fr, k.looks, 14)}}>
				<svg width={600} height={360} viewBox="0 0 500 300">
					<path d={area(-3.6, 1.2, 250)} fill="rgba(243,217,166,0.8)" /><path d={area(1.2, 3.6, 250)} fill="rgba(209,143,31,0.6)" />
					<path d={path(-3.6, 3.6, 250)} stroke={TEAL.stroke} strokeWidth={5} fill="none" /><line x1={20} x2={480} y1={230} y2={230} stroke={INK} strokeWidth={3} />
					{lab(210, 190, 'table')}{lab(360, 150, '1 − table', '#8a5a12', 30)}
					{lab(250, 280, 'right tail: 1 − table', INK, 30)}
				</svg>
			</div>
			<div style={{position: 'absolute', left: 1100, top: 420, opacity: prog(fr, k.negative - 10, 14)}}>
				<svg width={600} height={360} viewBox="0 0 500 300">
					<path d={path(-3.6, 3.6, 250)} stroke={TEAL.stroke} strokeWidth={5} fill="none" /><line x1={20} x2={480} y1={230} y2={230} stroke={INK} strokeWidth={3} />
					<path d={area(-3.6, -1.2, 250)} fill="rgba(243,217,166,0.8)" stroke={AMB} strokeWidth={2} />
					<g transform={`translate(250,${-70 * Math.sin(Math.PI * sp)}) scale(${1 - 2 * sp},1) translate(-250,0)`}><path d={area(-3.6, -1.2, 250)} fill="rgba(124,92,191,0.25)" stroke={VIO.stroke} strokeWidth={3} strokeDasharray="8 6" /></g>
					{lab(250, 280, 'negative z: mirror tail', INK, 30)}
				</svg>
			</div>
		</>
	);
};

// ---------- 10. attempt 1 ----------
const Q1 = 'Priya scored 74 in English, where the marks had mean 62 and standard deviation 8, and 81 in Mathematics, where the marks had mean 70 and standard deviation 10. In which subject did Priya perform better relative to the cohort? Justify your answer using z-scores.';
export const S10: React.FC = () => (
	<>
		<QuestionCard at={0} size={40} w={1700} y={170} hold={{...hold('scene-10'), ringFrom: K10.pause}} pauseAt={K10.pause}><div>{Q1}</div></QuestionCard>
		<BoxCard x={300} y={520} w={380} at={8} size={34} title="english"><div style={{height: 60}} /></BoxCard>
		<BoxCard x={760} y={520} w={380} at={10} size={34} title="mathematics"><div style={{height: 60}} /></BoxCard>
		<FrameSvg style={{opacity: 1}}><line x1={300} x2={1140} y1={740} y2={740} stroke={INK} strokeWidth={4} strokeLinecap="round" />{[-3, -2, -1, 0, 1, 2, 3].map(j => <line key={j} x1={720 + j * 130} x2={720 + j * 130} y1={728} y2={752} stroke={INK} strokeWidth={3} />)}</FrameSvg>
		<Hand x={1000} y={760} at={8} size={30} color={GREY}>z</Hand>
	</>
);
export {vis};
