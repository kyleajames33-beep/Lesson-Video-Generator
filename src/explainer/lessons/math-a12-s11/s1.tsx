// Scenes 1 to 5: s10's two catches (raw gaps 5 cm and 4 cm, different spreads); the σ rulers and the z-score
// formula (1.25 and 1.6); both bells sliding and squeezing onto Z ∼ N(0, 1) with their tails unchanged; Alex and
// Blake compared by z; the z-slider and this table (0.8944, 0.9452; tails 0.1056 and 0.0548).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, prog} from '../../kit';
import {FrameSvg, LiveReadoutBoard, NormalCurve, SceneHeading, ScoreCompare, SigmaRuler, StudioPlot, ZSlider, ZTable, fnPath, kf, makePlot, normBetween, normPdf, regionPath, smooth, vis} from '../../math/studio';
import type {PlotTick} from '../../math/studio';
import {K1, K2, K3, K4, K5} from './cuemap';
import {AnswerBox, BROWN, BoxCard, Chip, FB, FISH_H, FISH_W, FISH_Y, FishHandoff, Frac, GREY, Hand, Mark, PERCH, Plate, Pulse, Row, SNAPPER, Slip, TEAL, Task, VIO, bellFill, fishMap} from './parts';

const AMB = '#d18f1f';
const pdf0 = (v: number) => normPdf(v, 0, 1);

// ---------- 1. hook ----------
export const S01: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K1;
	return (
		<>
			<FishHandoff chip={-300} left={-300} right={-300} tint={-300} chipOut={k.vary - 20} />
			<SceneHeading text="z-scores" at={k.vary} size={52} />
			{FB.map((b, i) => {
				const m = fishMap(i);
				const bx = b.x + 230, bw = 420;
				const [mx, my] = m.pf(b.v, m.win.y[1] * 0.8), [ax] = m.pf(b.mu, 0), [vx] = m.pf(b.v, 0);
				const at = i ? k.perch : k.snapper;
				const ro = prog(fr, k.ruler, 14);
				return <React.Fragment key={i}>
					<FrameSvg style={{opacity: prog(fr, at, 14)}}>
						<rect x={bx} y={336} width={bw} height={30} rx={6} fill="#e8d9b8" stroke="#a88b55" strokeWidth={3} />
						{Array.from({length: 15}, (_, j) => <line key={j} x1={bx + 14 + j * 28} x2={bx + 14 + j * 28} y1={336} y2={j % 5 ? 348 : 356} stroke="#7a6440" strokeWidth={3} />)}
						<text x={bx + bw + 14} y={364} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: '#7a6440'}}>{`${b.v} cm`}</text>
					</FrameSvg>
					<Mark m={m} v={b.mu - b.sigma} o={prog(fr, k.vary + 10 * i, 14)} mu={b.mu} sigma={b.sigma} />
					<Mark m={m} v={b.mu + b.sigma} o={prog(fr, k.vary + 10 * i, 14)} mu={b.mu} sigma={b.sigma} />
					<Hand x={m.pf(b.mu + 1.15 * b.sigma, 0)[0]} y={m.pf(0, m.win.y[1] * 0.62)[1]} at={k.vary + 10 * i} size={38} color={VIO.ink}>{i ? 'σ = 2.5 cm' : 'σ = 4 cm'}</Hand>
					<Pulse x={mx + 20} y={my + 10} r={46} at={k.compared} out={k.ruler + 20} />
					<FrameSvg style={{opacity: ro}}>
						<rect x={ax} y={FISH_Y + FISH_H + 64} width={vx - ax} height={26} rx={4} fill="none" stroke={VIO.stroke} strokeWidth={4} strokeDasharray="10 6" />
						<text x={vx + 16} y={FISH_Y + FISH_H + 88} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: VIO.ink}}>? σ</text>
					</FrameSvg>
					<Hand x={vx + 84} y={FISH_Y + FISH_H + 50} at={k.compared} size={38} color={AMB}>{i ? '4 cm' : '5 cm'}</Hand>
				</React.Fragment>;
			})}
			<Hand x={790} y={200} at={k.compared} size={46} color={BROWN} w={340} align="center">different spreads</Hand>
			<Chip x={980} y={80} at={k.catch} size={36} color={BROWN}>Which is more unusual? How much area beyond?</Chip>
		</>
	);
};

// ---------- 2. counting standard deviations ----------
const B2 = (i: number) => ({x: i ? 980 : 40, y: 270, w: 880, h: 330});
const fishWin = (i: number) => ({x: FB[i].win, y: [0, normPdf(FB[i].mu, FB[i].mu, FB[i].sigma) * 1.18] as [number, number]});
const map2 = (i: number) => {const b = B2(i); return makePlot(b.x, b.y, b.w, b.h, fishWin(i));};
const sigTicks = (mu: number, s: number, unit = ''): PlotTick[] => [-3, -2, -1, 1, 2, 3].map(j => ({value: mu + j * s, label: `${Math.round((mu + j * s) * 10) / 10}${unit}`}));
export const S02: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K2;
	const slipO = vis(fr, k.snapper - 20, k.subtract, 12);
	const rulers = [{from: k.five, to: k.sig1, total: 1.25, text: '5 cm ÷ 4 cm'}, {from: k.four, to: k.sig2, total: 1.6, text: '4 cm ÷ 2.5 cm'}];
	return (
		<>
			<Task x={96} y={130} w={860} at={-30} size={44}>Which catch is further out?</Task>
			<BoxCard x={990} y={120} w={880} at={-30} size={34} title="givens">
				<div style={{fontWeight: 800}}>snapper: x = 45 cm, μ = 40 cm, σ = 4 cm</div>
				<div style={{fontWeight: 800}}>perch: x = 40 cm, μ = 36 cm, σ = 2.5 cm</div>
			</BoxCard>
			{FB.map((b, i) => {
				const B = B2(i), m = map2(i), r = rulers[i];
				const [rx0] = m.pf(b.win[0], 0), [rx1] = m.pf(b.win[1], 0);
				const p = (fr - r.from) / Math.max(1, r.to - r.from);
				return <React.Fragment key={i}>
					<NormalCurve x={B.x} y={B.y} width={B.w} height={B.h} window={fishWin(i)} mu={b.mu} sigma={b.sigma} xTicks={sigTicks(b.mu, b.sigma)} xLabel={`${i ? 'perch' : 'snapper'} length (cm)`} yLabel="" muMark={{}} shade={[{from: b.v, at: -30}]} overlay={mm => bellFill(mm, b.mu, b.sigma, b.win[0], b.win[1])} at={-30} />
					<Mark m={m} v={b.v} o={1} mu={b.mu} sigma={b.sigma} label={`${b.v}`} ly={m.win.y[1] * 0.75} />
					<Plate plate={i ? PERCH : SNAPPER} x={B.x + B.w - 230} y={B.y - 10} w={200} />
					<SigmaRuler x={rx0} y={710} width={rx1 - rx0} range={b.win} from={b.mu} to={b.v} sigma={b.sigma} progress={Math.max(0, Math.min(1, p))} ticks={[{value: b.mu, label: `${b.mu}`}, {value: b.v, label: `${b.v}`}]} label={s => `${s >= r.total - 1e-6 ? r.total : s.toFixed(2)} σ`} at={r.from - 10} />
					<Hand x={rx0 + 10} y={640} at={r.to - 10} size={44} color={VIO.ink}>{r.text.replace(/ = .*$/, '')}</Hand>
				</React.Fragment>;
			})}
			<Hand x={760} y={600} at={k.sig2} out={k.subtract} size={40} color={VIO.ink}>count the σs</Hand>
			<Pulse x={map2(1).pf(40, 0)[0]} y={map2(1).pf(0, 0.1)[1]} r={50} at={k.further} />
			<Hand x={map2(1).pf(41, 0)[0]} y={map2(1).pf(0, 0.15)[1]} at={k.further} size={40} color={'#2f7d4f'}>further out</Hand>
			<div style={{position: 'absolute', inset: 0, opacity: slipO}}><Slip x={1000} y={790} at={k.snapper} strikeAt={k.snapper + 30} size={36} caption="different spreads">snapper: 5 cm &gt; 4 cm</Slip></div>
			<Row x={96} y={790} at={k.subtract} size={56}>z = <Frac n="x − μ" d="σ" /></Row>
			<Hand x={420} y={800} at={k.count} size={36} color={GREY}>z-score (standardised score)</Hand>
			<Hand x={96} y={890} at={k.tells} size={34} color={GREY} w={860}>number of standard deviations above or below the mean</Hand>
			<AnswerBox x={1000} y={790} at={k.above} size={38}>snapper: z = (45 − 40)/4 = 1.25</AnswerBox>
			<AnswerBox x={1000} y={876} at={k.above + 10} size={38}>perch: z = (40 − 36)/2.5 = 1.6</AnswerBox>
			<Hand x={1700} y={830} at={k.above + 20} size={36} color={'#2f7d4f'} w={180}>+ : above</Hand>
		</>
	);
};

// ---------- 3. the standard normal ----------
const B3 = {x: 40, y: 200, w: 1120, h: 600} as const;
export const S03: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K3;
	const u1 = smooth(prog(fr, k.subtracting + 20, 60)), u2 = smooth(prog(fr, k.dividing + 10, 80));
	const xLo = (26 + (-14 - 26) * u1) * (1 - u2) + -4 * u2, xHi = (54 + (14 - 54) * u1) * (1 - u2) + 4 * u2;
	const win = {x: [xLo, xHi] as [number, number], y: [0, 0.17 + (0.46 - 0.17) * u2] as [number, number]};
	const m = makePlot(B3.x, B3.y, B3.w, B3.h, win);
	const st = FB.map(b => {const s = Math.pow(b.sigma, 1 - u2), c = (b.mu * (1 - u1)) / Math.pow(b.sigma, u2); return {c, s, mark: (b.v - b.mu * u1) / Math.pow(b.sigma, u2)};});
	const ticks: PlotTick[] = u2 > 0.5 ? [-3, -2, -1, 0, 1, 2, 3].map(v => ({value: v, label: String(v)})) : u1 > 0.5 ? [-12, -8, -4, 0, 4, 8, 12].map(v => ({value: v, label: String(v)})) : [28, 32, 36, 40, 44, 48, 52].map(v => ({value: v, label: String(v)}));
	const xLabel = u2 > 0.5 ? 'z' : u1 > 0.5 ? 'x − μ (cm)' : 'length (cm)';
	const one = prog(fr, k.same - 10, 20);
	return (
		<>
			<SceneHeading text="The standard normal" at={4} size={48} />
			<StudioPlot x={B3.x} y={B3.y} width={B3.w} height={B3.h} window={win} xTicks={ticks} yTicks={[]} xLabel={xLabel} yLabel="" grid={false} at={-30}>
				{mm => <g clipPath={mm.clip}>
					{st.map((s, i) => <path key={'t' + i} d={regionPath(mm, v => normPdf(v, s.c, s.s), s.mark, xHi + 1)} fill={i ? 'rgba(209,143,31,0.45)' : 'rgba(243,217,166,0.7)'} stroke={AMB} strokeWidth={3} />)}
					{st.map((s, i) => <path key={'c' + i} d={fnPath(mm, v => normPdf(v, s.c, s.s), xLo, xHi, 360)} stroke={i ? '#2f8f86' : TEAL.stroke} strokeWidth={i ? 6 : 8} strokeDasharray={i ? '14 9' : undefined} fill="none" opacity={i ? 1 - 0.7 * one : 1} />)}
					{one > 0.01 ? <path d={fnPath(mm, pdf0, xLo, xHi, 360)} stroke="#145e63" strokeWidth={9} fill="none" opacity={one * prog(u2, 0.95, 0.05)} /> : null}
					{st.map((s, i) => {const [px, py] = mm.p(s.mark, normPdf(s.mark, s.c, s.s)), [, by] = mm.p(0, 0); return <g key={'m' + i}><line x1={px} x2={px} y1={by} y2={py - 30} stroke={AMB} strokeWidth={5} /><circle cx={px} cy={by} r={13} fill={AMB} stroke="#fffdf8" strokeWidth={4} /></g>;})}
				</g>}
			</StudioPlot>
			{st.map((s, i) => {const [px] = m.pf(s.mark, 0); return <Plate key={i} plate={i ? PERCH : SNAPPER} x={px + (i ? 30 : -230)} y={i ? 330 : 210} w={200} />;})}
			<LiveReadoutBoard x={1200} y={200} width={680} at={-30} inline rows={[
				{label: 'snapper: area beyond 45', value: normBetween(st[0].mark, Infinity, st[0].c, st[0].s), digits: 4, role: 'k'},
				{label: 'perch: area beyond 40', value: normBetween(st[1].mark, Infinity, st[1].c, st[1].s), digits: 4, role: 'k'},
			]} />
			<Hand x={1200} y={380} at={k.subtracting} out={k.dividing} size={38} color={VIO.ink}>− μ: centre slides to 0</Hand>
			<Hand x={1200} y={380} at={k.dividing} out={k.change} size={38} color={VIO.ink}>÷ σ: spread squeezes to 1</Hand>
			<Hand x={1200} y={380} at={k.change} size={40} color={BROWN}>same curve, same areas</Hand>
			<Row x={1200} y={460} at={k.written} size={44} color={'#145e63'}>Z ∼ N(0, 1): standard normal</Row>
			<Hand x={1200} y={524} at={k.written + 20} size={34} color={GREY}>mean 0, standard deviation 1</Hand>
			<Hand x={1220} y={590} at={k.non} size={34} color={GREY}>non-standard: X ∼ N(μ, σ²)</Hand>
			<StudioPlot x={1220} y={630} width={420} height={190} window={{x: [28, 52], y: [0, 0.12]}} xTicks={[]} yTicks={[]} xLabel="" yLabel="" grid={false} bare at={k.non}>
				{mm => <path d={fnPath(mm, v => normPdf(v, 40, 4), 28, 52, 200)} stroke={TEAL.stroke} strokeWidth={5} strokeDasharray="12 8" fill="none" />}
			</StudioPlot>
			<Row x={1200} y={850} at={k.area} size={44}>P(X &gt; 45) = P(Z &gt; 1.25)</Row>
		</>
	);
};

// ---------- 4. comparing results from different groups ----------
export const S04: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K4;
	const toZ = smooth(prog(fr, k.deviations - 10, 40));
	return (
		<>
			<Task x={96} y={130} w={1720} at={-30} size={44}>Who did better relative to their cohort?</Task>
			<BoxCard x={96} y={250} w={520} at={k.alex} size={38} title="alex"><div style={{fontWeight: 800, color: '#2d6f9e'}}>Maths: 72</div><div style={{fontSize: 32}}>μ = 60, σ = 12</div></BoxCard>
			<BoxCard x={650} y={250} w={520} at={k.blake} size={38} title="blake"><div style={{fontWeight: 800, color: '#8a5a12'}}>English: 68</div><div style={{fontSize: 32}}>μ = 55, σ = 10</div></BoxCard>
			<ScoreCompare x={130} y={520} width={1000} items={[{label: 'Alex (Maths)', mu: 60, sigma: 12, value: 72, role: 'a' as const}, ...(fr >= k.blake ? [{label: 'Blake (English)', mu: 55, sigma: 10, value: 68, role: 'k' as const}] : [])]} toZ={toZ} rowGap={150} at={k.alex} />
			<BoxCard x={1220} y={250} w={640} at={-30} size={44} title="count standard deviations"><div style={{fontWeight: 800}}>z = <Frac n="x − μ" d="σ" /></div></BoxCard>
			<Row x={1220} y={430} at={k.higher} size={40} color={GREY}>72 &gt; 68</Row>
			<Hand x={1420} y={430} at={k.higher} size={40} color={BROWN}>higher mark ≠ better</Hand>
			<Row x={1220} y={510} at={k.one} size={42}>Alex: z = <Frac n="72 − 60" d="12" /> = 1.0</Row>
			<Row x={1220} y={610} at={k.three} size={42}>Blake: z = <Frac n="68 − 55" d="10" /> = 1.3</Row>
			<AnswerBox x={1220} y={720} at={k.deviations} size={44}>Blake: 1.3 &gt; 1.0</AnswerBox>
			<Chip x={1220} y={840} at={k.justify} size={36} color={GREY}>justify: quote both z-scores</Chip>
		</>
	);
};

// ---------- 5. a table for the areas beyond ----------
export const S05: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K5;
	const z = kf(fr, [[k.every, 0], [k.for125, 1.25], [k.at16, 1.25], [k.at16 + 70, 1.6]]);
	const perch = fr >= k.at16;
	const tail = normBetween(z, Infinity, 0, 1);
	return (
		<>
			<SceneHeading text="This table: areas to the left" at={4} size={48} />
			<ZSlider x={40} y={230} width={940} height={500} z={z} sprite={{plate: perch ? PERCH : SNAPPER, w: 170}} />
			<LiveReadoutBoard x={40} y={770} width={520} at={k.every} inline rows={[{label: 'z', value: z, digits: 2, role: 'k'}, {label: 'P(Z > z)', value: tail, digits: 4, role: 'k'}]} />
			<Hand x={600} y={160} at={k.zeds} out={k.six} size={40} color={BROWN}>this table looks left</Hand>
			<Hand x={600} y={160} at={k.six} size={40} color={BROWN}>1 − table</Hand>
			<Row x={1010} y={140} at={-30} size={32} color={GREY}>this table: P(Z &lt; z), z ≥ 0</Row>
			<ZTable x={1010} y={200} rowStart={1.0} rows={8} cols={6} cellW={120} cellH={50} size={30} highlight={perch ? {z: 1.6, at: k.at16 + 10} : {z: 1.25, at: k.row}} at={-30} />
			<AnswerBox x={1010} y={660} at={k.four} out={k.at16} size={40}>P(Z &lt; 1.25) = 0.8944</AnswerBox>
			<AnswerBox x={1010} y={660} at={k.gives + 30} size={40}>P(Z &lt; 1.6) = 0.9452</AnswerBox>
			<AnswerBox x={1010} y={750} at={k.six} size={40}>P(Z &gt; 1.25) = 1 − 0.8944 = 0.1056</AnswerBox>
			<AnswerBox x={1010} y={840} at={k.eight} size={40}>P(Z &gt; 1.6) = 1 − 0.9452 = 0.0548</AnswerBox>
			<Hand x={600} y={772} at={k.under + 20} size={34} color={GREY}>0.1056 ≈ 1 in 10</Hand>
			<Hand x={600} y={824} at={k.eighteen} size={34} color={GREY}>0.0548 ≈ 1 in 18</Hand>
			<Hand x={600} y={880} at={k.further} size={36} color={'#2f7d4f'}>perch: further out, smaller tail ✓</Hand>
		</>
	);
};
export {FISH_W};
