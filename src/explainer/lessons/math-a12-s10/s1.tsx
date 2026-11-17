// Scenes 1 to 6: s09's bags' bell with its σ marks and the area question; the apples and the graphing calculator;
// the PDF's parts on the apples' bell; the global maximum from the sign of f′ (a rider and a sign strip); the
// inflection points from the sign of f″ (cap and tail tints); the calculator's band slider (0.6827, 0.9545,
// 0.9973); the apples' bell sliding and squeezing onto the bags' bell with its ±σ area fixed.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, prog} from '../../kit';
import {BandSlider, FrameSvg, LiveReadoutBoard, MATH_CAP, MATH_CUP, MarkSpan, NormalCurve, SceneHeading, SignStrip, StudioPlot, fnPath, kf, makePlot, normBetween, normPdf, regionPath, smooth, vis} from '../../math/studio';
import type {PlotTick} from '../../math/studio';
import {BB, MB} from '../math-a12-s09/s1';
import {K1, K2, K3, K4, K5, K6} from './cuemap';
import {AM, APPLE, AS, AnswerBox, BROWN, CHIP_BAG, CRATE, Calc, Chip, Frac, GREY, Hand, INK, Mark, PdfFormula, Plate, Q, Row, S09FinalFrame, SCALES, ScreenGraph, TEAL, VIO, bellFill, pdfA} from './parts';

const AMB = '#d18f1f';
export const WA = {x: [100, 200] as [number, number], y: [0, 0.03] as [number, number]};
const TA = [105, 120, 135, 150, 165, 180, 195];
const TA_MU = [105, 120, 135, 165, 180, 195];

// ---------- 1. hook ----------
export const S01: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K1;
	const sw = smooth(prog(fr, k.apples - 6, 26));
	const pulse = vis(fr, k.marks, k.apples, 10) * (0.55 + 0.45 * Math.sin((fr - k.marks) / 5));
	const [qx, qy] = MB.pf(175, 0.06);
	const sc = 1 - 0.8 * sw;
	return (
		<>
			<div style={{position: 'absolute', left: 0, top: 0, width: 1920, height: 1080, transform: `translate(${96 * sw}px, ${190 * sw}px) scale(${sc})`, transformOrigin: '0 0'}}>
				{sw > 0.4 ? <div style={{position: 'absolute', inset: 0, background: '#fffdf8', borderRadius: 40, border: '8px solid rgba(60,45,20,0.18)', opacity: prog(sw, 0.4, 0.3)}} /> : null}
				<S09FinalFrame />
				<FrameSvg style={{opacity: pulse}}><circle cx={qx + 14} cy={qy + 34} r={58} fill="none" stroke={AMB} strokeWidth={8} /></FrameSvg>
			</div>
			<Hand x={1300} y={770} at={k.formula} out={k.apples - 6} size={48} color={BROWN} w={560}>no area formula in this course</Hand>
			{sw > 0.01 ? <div style={{position: 'absolute', inset: 0, opacity: sw}}>
				<SceneHeading text="Graphing the normal curve" at={k.apples} size={48} />
				<Hand x={96} y={420} at={k.apples + 10} size={34} color={GREY}>last video: chip bags</Hand>
				<Row x={560} y={200} at={k.mean} size={44} color={TEAL.ink}>X ∼ N(150, 15²)</Row>
				<Hand x={560} y={262} at={k.mean + 20} size={36} color={GREY}>X: apple mass (g)</Hand>
				<Plate plate={CRATE} x={96} y={500} w={520} at={k.apples + 4} />
				<Hand x={120} y={870} at={k.mean} size={36} color={GREY}>masses vary from apple to apple</Hand>
				<Plate plate={SCALES} x={690} y={800} w={440} at={k.apples + 14} />
				<Plate plate={APPLE} x={810} y={571} w={200} at={k.apples + 24} />
				<Chip x={760} y={860} at={k.apples + 34} size={40} color={TEAL.ink}>152 g</Chip>
				<Calc x={1480} y={290} h={600} at={k.calc < k.apples ? k.apples + 20 : k.calc} screen={s => <div style={{position: 'absolute', left: 10, top: 8, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color: '#1f2a24', opacity: 0.55}}>Y1 =</div>} />
				<Hand x={1180} y={600} at={k.then - 20} size={40} color={BROWN} w={300}>measure the areas</Hand>
				<Chip x={1110} y={100} at={k.all} size={36} color={BROWN}>How much area within 1σ, 2σ, 3σ?</Chip>
			</div> : null}
		</>
	);
};

// ---------- 2. the formula and its parts ----------
const B2 = {x: 40, y: 260, w: 1040, h: 620} as const;
const M2 = makePlot(B2.x, B2.y, B2.w, B2.h, WA);
export const S02: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K2;
	const zoom = vis(fr, k.axis - 10, k.apples, 14);
	const flash = vis(fr, k.fifty, k.fifty + 16, 6);
	const dark = prog(fr, k.zero - 10, 16);
	const Z = {x: 1120, y: 560, w: 600, h: 270};
	return (
		<>
			<SceneHeading text="Each part of the formula has a job" at={4} size={48} />
			<Plate plate={APPLE} x={900} y={120} w={130} />
			<NormalCurve x={B2.x} y={B2.y} width={B2.w} height={B2.h} window={WA} mu={AM} sigma={AS} xTicks={TA} xLabel="mass x (g)" yLabel="f(x)" at={-30}
				shade={[{at: k.one, out: k.apples, color: 'rgba(243,217,166,0.55)', label: () => 'area = 1'}]}
				overlay={m => <>
					{bellFill(m, AM, AS, 100, 200, 1 - vis(fr, k.one, k.apples, 12))}
					{dark > 0.01 ? <g opacity={dark * (1 - prog(fr, k.apples, 14))}><path d={fnPath(m, pdfA, 100, 125)} stroke={TEAL.ink} strokeWidth={13} fill="none" /><path d={fnPath(m, pdfA, 175, 200)} stroke={TEAL.ink} strokeWidth={13} fill="none" /></g> : null}
					{(() => {const o = vis(fr, k.sym - 20, k.zero, 12); if (o <= 0.01) return null; const [ax, ay] = m.p(140, pdfA(140)), [bx] = m.p(160, 0), [, by0] = m.p(0, 0), [mx] = m.p(150, 0); return <g opacity={o}>
						<line x1={ax} x2={bx} y1={ay} y2={ay} stroke={VIO.stroke} strokeWidth={4} strokeDasharray="10 8" />
						<line x1={mx} x2={mx} y1={ay - 60} y2={by0} stroke={VIO.stroke} strokeWidth={4} />
						<circle cx={ax} cy={ay} r={14} fill={AMB} stroke="#fffdf8" strokeWidth={4} /><circle cx={bx} cy={ay} r={14} fill={AMB} stroke="#fffdf8" strokeWidth={4} />
						<text x={ax} y={by0 - 20} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: AMB}}>10 below</text>
						<text x={bx} y={by0 - 20} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: AMB}}>10 above</text>
					</g>;})()}
					{flash > 0.01 ? <path d={fnPath(m, pdfA, 100, 200)} stroke={AMB} strokeWidth={16} fill="none" opacity={0.7 * flash} /> : null}
				</>} />
			<Hand x={M2.pf(108, 0)[0]} y={M2.pf(0, 0.009)[1]} at={k.zero} out={k.apples} size={34} color={TEAL.ink}>tails fall</Hand>
			<Row x={1120} y={170} at={k.fn} size={50}><PdfFormula front={[k.number, k.apples]} power={[k.power, k.sym + 30]} minus={[k.further, k.but]} /></Row>
			<Hand x={1120} y={290} at={k.fn + 20} size={34} color={GREY}>normal probability density function</Hand>
			<Row x={1120} y={350} at={k.power + 10} size={38} color={AMB}>power: −(distance from μ)² ÷ 2σ²</Row>
			<Hand x={1120} y={420} at={k.same} size={40} color={VIO.ink}>same distance, same square</Hand>
			<Hand x={1120} y={480} at={k.zero - 10} size={40} color={TEAL.ink}>more negative, smaller</Hand>
			{zoom > 0.01 ? <div style={{position: 'absolute', inset: 0, opacity: zoom}}>
				<div style={{position: 'absolute', left: Z.x - 10, top: Z.y - 10, width: Z.w + 20, height: Z.h + 20, background: '#fffdf8', borderRadius: 16, border: '2.5px solid rgba(60,45,20,0.14)'}} />
				<StudioPlot x={Z.x} y={Z.y} width={Z.w} height={Z.h} window={{x: [185, 200], y: [0, 0.0012]}} xTicks={[185, 190, 195, 200]} yTicks={[]} xLabel="zoom: right tail" yLabel="" grid={false} at={-30}>
					{m => <g clipPath={m.clip}><path d={fnPath(m, pdfA, 185, 200, 200)} stroke={TEAL.stroke} strokeWidth={6} fill="none" /></g>}
				</StudioPlot>
				<Hand x={Z.x + 280} y={Z.y + 30} at={k.axis - 10} size={40} color={TEAL.ink}>e to any power &gt; 0</Hand>
			</div> : null}
			<Hand x={1120} y={850} at={k.number} out={k.apples} size={40} color={AMB}>chosen so the area is 1</Hand>
			<Hand x={1320} y={810} at={k.apples} size={36} color={AMB}>front factor: area is 1</Hand>
			<Calc x={1130} y={545} h={330} at={k.apples} screen={s => <ScreenGraph s={s} mu={AM} sigma={AS} win={[100, 200]} draw={smooth(prog(fr, k.apples + 30, 60))} />} />
			<div style={{position: 'absolute', left: 1320, top: 560, width: 560, opacity: prog(fr, k.apples + 6, 12), background: '#fffdf8', borderRadius: 16, border: '3px solid #2a2d31', padding: '8px 18px 10px', boxSizing: 'border-box'}}>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 26, letterSpacing: 2, color: GREY}}>TYPED IN</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 36, color: INK, whiteSpace: 'nowrap'}}>Y1 = <Frac n="1" d="15√(2π)" /> e<span style={{fontSize: '0.7em', position: 'relative', top: '-0.7em'}}>−(X − 150)²/450</span></div>
			</div>
			<Hand x={1320} y={740} at={k.two} size={36} color={GREY}>2σ² = 2 × 225 = 450</Hand>
		</>
	);
};

// ---------- 3. the global maximum ----------
const B3 = {x: 40, y: 200, w: 1040, h: 520} as const;
const M3 = makePlot(B3.x, B3.y, B3.w, B3.h, WA);
const dfA = (v: number) => (-(v - AM) / (AS * AS)) * pdfA(v);
export const S03: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K3;
	const X = kf(fr, [[k.left - 6, 110], [k.right - 6, 150], [k.all - 6, 190]], false);
	const ride = vis(fr, k.left - 10, k.global + 30, 10);
	const sgn = Math.abs(X - 150) < 0.6 ? '0' : X < 150 ? '+' : '−';
	return (
		<>
			<SceneHeading text="Where is the highest point?" at={4} size={48} />
			<Calc x={1740} y={660} h={260} screen={s => <ScreenGraph s={s} mu={AM} sigma={AS} win={[100, 200]} />} />
			<NormalCurve x={B3.x} y={B3.y} width={B3.w} height={B3.h} window={WA} mu={AM} sigma={AS} xTicks={TA_MU} xLabel="mass x (g)" yLabel="f(x)" muMark={{at: k.global}} at={-30}
				overlay={m => <>
					{bellFill(m, AM, AS, 100, 200)}
					{(() => {const o = vis(fr, k.global, undefined, 12); const [px, py] = m.p(150, pdfA(150)); return o > 0.01 ? <circle cx={px} cy={py} r={26 + 4 * Math.sin(fr / 5)} fill="none" stroke={MATH_ROLES_ANSWER} strokeWidth={7} opacity={o} /> : null;})()}
					{ride > 0.01 ? (() => {const [px, py] = m.p(X, pdfA(X)), sl = dfA(X), dx = 9, [qx, qy] = m.p(X + dx, pdfA(X) + sl * dx), [rx, ry] = m.p(X - dx, pdfA(X) - sl * dx); const c = sgn === '+' ? '#2f7d4f' : sgn === '−' ? '#b8322a' : VIO.stroke; return <g opacity={ride}><line x1={rx} y1={ry} x2={qx} y2={qy} stroke={c} strokeWidth={6} strokeLinecap="round" /><circle cx={px} cy={py} r={15} fill={c} stroke="#fffdf8" strokeWidth={5} /></g>;})() : null}
				</>} />
			<SignStrip x={B3.x} y={B3.y + B3.h + 50} width={B3.w} windowX={WA.x} boundaries={[{x: 150, kind: 'zero'}]} cells={[{sign: 1}, {sign: -1}]} follow={fr >= k.left - 6 ? X : 100} showTests={false} at={k.left - 20} rowLabel="f′(x)" />
			<Hand x={M3.pf(152, 0)[0]} y={M3.pf(0, 0.0295)[1] - 6} at={k.global} size={36} color={'#2f7d4f'}>rises, then falls</Hand>
			<Row x={1130} y={190} at={k.itself - 20} size={32} color={GREY}>f′(x) = (derivative of the power) × f(x)</Row>
			<Row x={1130} y={250} at={k.itself} size={52}>f′(x) = <MarkSpan kind="box" at={k.sign} color={VIO.stroke} width={5}>−<Frac n="x − μ" d="σ²" /></MarkSpan> f(x)</Row>
			<Row x={1130} y={390} at={k.positive} size={44} color={TEAL.ink}>f(x) &gt; 0 ✓</Row>
			<LiveReadoutBoard x={1130} y={470} width={540} at={k.left - 10} out={k.global + 40} inline rows={[{label: 'x', value: X, digits: 0, role: 'a'}, {label: 'sign of f′(x)', value: 0, text: sgn, role: 'gradient'}]} />
			<Row x={1460} y={390} at={k.rises} size={36} color={'#2f7d4f'}>left: + rises</Row>
			<Row x={1460} y={440} at={k.falls} size={36} color={'#b8322a'}>right: − falls</Row>
			<AnswerBox x={1130} y={660} at={k.global} size={44}>global maximum at x = μ</AnswerBox>
			<AnswerBox x={1130} y={770} at={k.pi} size={44}>f(μ) = <Frac n="1" d="σ√(2π)" /></AnswerBox>
			<Hand x={560} y={170} at={k.pi + 10} size={34} color={GREY}>apples: 1/(15√(2π)) ≈ 0.0266</Hand>
		</>
	);
};
const MATH_ROLES_ANSWER = '#2f7d4f';

// ---------- 4. the points of inflection ----------
const d2sign = (v: number) => Math.sign((v - AM) ** 2 - AS * AS);
export const S04: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K4;
	const cap = prog(fr, k.peak - 10, 16), cup = prog(fr, k.out - 14, 16);
	const dots = prog(fr, k.inflect, 12);
	const pulse = vis(fr, k.so, undefined, 10) * (0.5 + 0.5 * Math.sin((fr - k.so) / 4));
	return (
		<>
			<SceneHeading text="Where does the bend change?" at={4} size={48} />
			<Calc x={1740} y={660} h={260} screen={s => <ScreenGraph s={s} mu={AM} sigma={AS} win={[100, 200]} />} />
			<NormalCurve x={B3.x} y={B3.y} width={B3.w} height={B3.h} window={WA} mu={AM} sigma={AS} xTicks={TA_MU} xLabel="mass x (g)" yLabel="f(x)" muMark={{}} at={-30}
				overlay={m => {
					const top = m.p(0, WA.y[1])[1], base = m.p(0, 0)[1];
					const band = (a: number, b: number, c: string, o: number) => {const [x0] = m.p(a, 0), [x1] = m.p(b, 0); return o > 0.01 ? <rect x={x0} y={top} width={x1 - x0} height={base - top} fill={c} opacity={0.85 * o} /> : null;};
					return <>
						{band(135, 165, MATH_CAP, cap)}{band(100, 135, MATH_CUP, cup)}{band(165, 200, MATH_CUP, cup)}
						<path d={fnPath(m, pdfA, 100, 200, 300)} stroke={TEAL.stroke} strokeWidth={7} fill="none" />
						{[135, 165].map(v => {const [px, py] = m.p(v, pdfA(v)); return dots > 0.01 ? <g key={v} opacity={dots}><circle cx={px} cy={py} r={16 + 8 * pulse} fill="#2f7d4f" stroke="#fffdf8" strokeWidth={5} /></g> : null;})}
					</>;
				}} />
			<Mark m={M3} v={135} o={prog(fr, k.five, 14)} label="μ − σ = 135" mu={AM} sigma={AS} ly={0.0275} />
			<Mark m={M3} v={165} o={prog(fr, k.five, 14)} label="μ + σ = 165" mu={AM} sigma={AS} ly={0.0275} />
			<Hand x={M3.pf(141, 0)[0]} y={M3.pf(0, 0.012)[1]} at={k.peak} size={36} color={'#6d7631'}>concave down</Hand>
			<Hand x={M3.pf(101.5, 0)[0]} y={M3.pf(0, 0.016)[1]} at={k.out - 10} size={36} color={'#2f5f8f'}>concave up</Hand>
			<Hand x={M3.pf(170, 0)[0]} y={M3.pf(0, 0.016)[1]} at={k.out - 10} size={36} color={'#2f5f8f'}>concave up</Hand>
			<SignStrip x={B3.x} y={B3.y + B3.h + 50} width={B3.w} windowX={WA.x} mode="concavity" boundaries={[{x: 135, kind: 'zero'}, {x: 165, kind: 'zero'}]} cells={[{sign: 1, revealAt: k.out - 10}, {sign: -1, revealAt: k.peak - 10}, {sign: 1, revealAt: k.out - 10}]} showTests={false} at={k.between - 10} rowLabel="f″(x)" />
			<Row x={1130} y={180} at={-30} size={32} dim={1} color={GREY}>f′(x) = −((x − μ)/σ²) f(x)</Row>
			<Row x={1130} y={232} at={k.product} size={40} dim={prog(fr, k.factorise, 14)} color={prog(fr, k.factorise, 14) > 0.5 ? GREY : INK}>f″(x) = −<Frac n="1" d="σ²" />f(x) − <Frac n="x − μ" d="σ²" />f′(x)</Row>
			<Row x={1130} y={330} at={k.factorise} size={50}>f″(x) = <Frac n="f(x)" d="σ⁴" /><MarkSpan kind="box" at={k.bracket} color={VIO.stroke} width={5}>((x − μ)² − σ²)</MarkSpan></Row>
			<Row x={1130} y={460} at={k.again + 20} size={40} color={TEAL.ink}>f(x)/σ⁴ &gt; 0 ✓</Row>
			<Row x={1130} y={530} at={k.zero} size={44}>(x − μ)² = σ², so x = μ ± σ</Row>
			<AnswerBox x={1130} y={630} at={k.inflect} size={40}>points of inflection at x = μ ± σ</AnswerBox>
			<Hand x={1130} y={740} at={k.so} size={42} color={VIO.ink} w={600}>one σ: where the bend changes</Hand>
			<Hand x={1130} y={820} at={k.changes} size={34} color={GREY} w={580}>sign of f″ changes at 135 and 165</Hand>
		</>
	);
};
export {d2sign};

// ---------- 5. the calculator measures the areas ----------
export const S05: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K5;
	const kk = kf(fr, [[k.ask, 0], [k.seven, 1], [k.widen, 1], [k.five, 2], [k.three, 2], [k.seven3, 3]]);
	const area = normBetween(AM - kk * AS, AM + kk * AS, AM, AS);
	const stop = fr >= k.three ? 3 : fr >= k.widen ? 2 : 1;
	const lo = AM - stop * AS, hi = AM + stop * AS;
	const row = (t: string, v: string, at: number, y: number) => <Row x={1000} y={y} at={at} size={40}><span style={{color: VIO.ink}}>{t}</span>  <span style={{color: '#8a5a12'}}>{v}</span></Row>;
	return (
		<>
			<SceneHeading text="The calculator measures the areas" at={4} size={48} />
			<BandSlider x={40} y={210} width={920} height={520} mu={AM} sigma={AS} k={kk} window={WA} xTicks={TA} xLabel="mass x (g)" at={-30} />
			<LiveReadoutBoard x={40} y={740} width={540} at={k.ask} inline rows={[{label: 'band μ ± kσ: k', value: kk, digits: 2, role: 'gradient'}, {label: 'area inside', value: area, digits: 4, role: 'k'}]} />
			<Hand x={430} y={250} at={k.seven} out={k.widen} size={40} color={AMB}>≈ 68%</Hand>
			<Hand x={610} y={760} at={k.model} size={36} color={GREY} w={380}>model: about 68% of apples within 1σ</Hand>
			<div style={{position: 'absolute', left: 1000, top: 200, width: 400, opacity: prog(fr, k.ask, 12), background: '#fffdf8', borderRadius: 16, border: '3px solid #2a2d31', padding: '8px 18px 10px', boxSizing: 'border-box'}}>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 26, letterSpacing: 2, color: GREY}}>ASKED FOR</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 36, color: INK}}>area under Y1 from {lo} to {hi}</div>
			</div>
			<Calc x={1460} y={170} h={700} screen={s => <ScreenGraph s={s} mu={AM} sigma={AS} win={[100, 200]} band={kk > 0.01 ? [AM - kk * AS, AM + kk * AS] : undefined} readout={fr >= k.works ? area.toFixed(4) : ' '} size={44} />} />
			{row('±1σ:', '0.6827', k.seven, 400)}
			{row('±2σ:', '0.9545', k.five, 460)}
			{row('±3σ:', '0.9973', k.seven3, 520)}
			<AnswerBox x={1000} y={620} at={-30} size={30}>max at x = μ</AnswerBox>
			<AnswerBox x={1000} y={700} at={-30} size={30}>inflection at x = μ ± σ</AnswerBox>
			<Hand x={1000} y={790} at={k.use} size={40} color={BROWN}>say you used it</Hand>
			<Chip x={1000} y={850} at={k.use + 20} size={30} color={GREY}>write: found using a graphing calculator</Chip>
		</>
	);
};

// ---------- 6. the same areas for every normal curve ----------
// The narration describes σ growing ("stretches it sideways and squashes it down"), so a copy of the bags' bell
// slides from 175 to 150 and stretches onto the apples' bell, its ±σ band and live area fixed at 0.6827.
const B6 = {x: 40, y: 220, w: 1100, h: 640} as const;
const SIG_TICKS: PlotTick[] = [-3, -2, -1, 0, 1, 2, 3].map(j => ({value: AM + AS * j, label: j === 0 ? 'μ' : `μ ${j > 0 ? '+' : '−'} ${Math.abs(j) === 1 ? '' : Math.abs(j)}σ`}));
export const S06: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K6;
	const u1 = smooth(prog(fr, k.slides - 6, 40));
	const u2 = smooth(prog(fr, k.stretches - 4, k.change - k.stretches + 10));
	const z = smooth(prog(fr, k.measured, 36));
	const win = {x: [100, 200] as [number, number], y: [0, 0.11 + (0.032 - 0.11) * z] as [number, number]};
	const m6 = makePlot(B6.x, B6.y, B6.w, B6.h, win);
	const gmu = 175 + (AM - 175) * u1, gs = 4 * Math.pow(AS / 4, u2);
	const ghost = vis(fr, k.why, undefined, 14) * (1 - prog(fr, k.measured, 20));
	const live = normBetween(gmu - gs, gmu + gs, gmu, gs);
	const bagsO = 1 - z;
	const ticks = z > 0.6 ? SIG_TICKS : [{value: 125, label: '125'}, {value: 150, label: '150'}, {value: 175, label: '175'}];
	const bags = (v: number) => normPdf(v, 175, 4);
	return (
		<>
			<SceneHeading text="Is that just these apples?" at={4} size={48} />
			<StudioPlot x={B6.x} y={B6.y} width={B6.w} height={B6.h} window={win} xTicks={ticks} yTicks={[]} xLabel="mass x (g)" yLabel="f(x)" grid={false} at={-30}>
				{m => <g clipPath={m.clip}>
					<path d={regionPath(m, pdfA, AM - AS, AM + AS, () => 0, 160)} fill="#f3d9a6" stroke={AMB} strokeWidth={3} opacity={vis(fr, -30, k.why, 12) + prog(fr, k.measured + 20, 14)} />
					<path d={fnPath(m, pdfA, 100, 200, 300)} stroke={TEAL.stroke} strokeWidth={7} fill="none" />
					{bagsO > 0.01 ? <g opacity={bagsO}>
						<path d={regionPath(m, bags, 171, 179, () => 0, 160)} fill="#f3d9a6" stroke={AMB} strokeWidth={3} opacity={prog(fr, k.again - 10, 14)} />
						<path d={fnPath(m, bags, 100, 200, 400)} stroke={TEAL.stroke} strokeWidth={7} fill="none" />
					</g> : null}
					{ghost > 0.01 ? <g opacity={ghost}>
						<path d={regionPath(m, v => normPdf(v, gmu, gs), gmu - gs, gmu + gs, () => 0, 200)} fill="rgba(124,92,191,0.22)" stroke={VIO.stroke} strokeWidth={4} />
						<path d={fnPath(m, v => normPdf(v, gmu, gs), 100, 200, 400)} stroke={VIO.stroke} strokeWidth={6} strokeDasharray="14 10" fill="none" />
					</g> : null}
				</g>}
			</StudioPlot>
			<Mark m={m6} v={171} o={prog(fr, k.from, 14) * bagsO} mu={175} sigma={4} />
			<Mark m={m6} v={179} o={prog(fr, k.from, 14) * bagsO} mu={175} sigma={4} />
			<Mark m={m6} v={135} o={(1 - prog(fr, k.bags, 14)) + prog(fr, k.measured + 20, 14)} mu={AM} sigma={AS} />
			<Mark m={m6} v={165} o={(1 - prog(fr, k.bags, 14)) + prog(fr, k.measured + 20, 14)} mu={AM} sigma={AS} />
			<Hand x={B6.x + 120} y={B6.y + 30} at={k.why} out={k.measured} size={36} color={VIO.ink} w={760}>dashed: a copy of the bags&apos; bell, its ±σ band shaded</Hand>
			<Hand x={m6.pf(103, 0)[0]} y={m6.pf(0, 0)[1] - 100} at={-30} out={k.bags} size={34} color={TEAL.ink}>apples</Hand>
			<Plate plate={CHIP_BAG} x={1190} y={160} w={130} at={k.bags} />
			<Row x={1350} y={200} at={k.bags} size={40} color={TEAL.ink}>bags: N(175, 4²)</Row>
			<Calc x={1680} y={330} h={460} at={k.from} screen={s => <ScreenGraph s={s} mu={175} sigma={4} win={[159, 191]} band={[171, 179]} readout={fr >= k.again - 20 ? '0.6827' : ' '} size={32} />} />
			<Row x={1190} y={360} at={k.from} size={34} color={GREY}>area 171 to 179:</Row>
			<LiveReadoutBoard x={1190} y={440} width={460} at={k.why} rows={[{label: 'area between the marks', value: live, digits: 4, role: 'k'}]} />
			<AnswerBox x={1190} y={640} at={k.again} size={34}>bags, 171 to 179: 0.6827</AnswerBox>
			<AnswerBox x={1190} y={730} at={-30} size={34}>apples, 135 to 165: 0.6827</AnswerBox>
			<Hand x={1190} y={830} at={k.slides} out={k.stretches} size={36} color={VIO.ink}>μ slides the bell</Hand>
			<Hand x={1190} y={830} at={k.stretches} out={k.every} size={36} color={VIO.ink} w={680}>σ: 15/4 as wide, 4/15 as tall</Hand>
			<Hand x={1190} y={830} at={k.every} size={40} color={BROWN}>same for every normal curve</Hand>
		</>
	);
};
export {INK, FONT_HAND};
