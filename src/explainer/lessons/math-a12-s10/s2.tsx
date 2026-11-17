// Scenes 7 to 11: the empirical rule on a σ-labelled bell with the outside amounts halving into tails; the heights
// problem (site lesson 2 problem 1) on the g01 board; judgements (196 cm, the juice apples between 2.5% and 16%);
// the CDF drawn by an area sweep with F(130) ≈ 0.0912; the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, prog} from '../../kit';
import {FrameSvg, LiveReadoutBoard, NormalCurve, SceneHeading, StudioPlot, TailLadder, fnPath, kf, makePlot, normCdf, normPdf, regionPath, smooth, vis} from '../../math/studio';
import type {PlotTick} from '../../math/studio';
import {K7, K8, K9, K10, K11} from './cuemap';
import {AM, APPLE, AS, AnswerBox, BROWN, BoxCard, CRATE, Calc, FramedCard, GOOD, GREY, Hand, INK, Mark, Plate, Q, RED, Row, ScreenGraph, Slip, TEAL, Task, VIO, bellFill, pdfA} from './parts';
import {WA} from './s1';

const AMB = '#d18f1f';
const pdf0 = (v: number) => normPdf(v, 0, 1);

// ---------- 7. the empirical rule and its tails ----------
const B7 = {x: 40, y: 190, w: 1100, h: 640} as const;
const W7 = {x: [-3.6, 3.6] as [number, number], y: [0, 0.46] as [number, number]};
const M7 = makePlot(B7.x, B7.y, B7.w, B7.h, W7);
const SIG7: PlotTick[] = [-3, -2, -1, 0, 1, 2, 3].map(j => ({value: j, label: j === 0 ? 'μ' : `μ ${j > 0 ? '+' : '−'} ${Math.abs(j) === 1 ? '' : Math.abs(j)}σ`}));
export const S07: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K7;
	const bands = [{j: 3, at: k.s997, c: 'rgba(243,217,166,0.45)', t: '99.7%'}, {j: 2, at: k.s95, c: 'rgba(243,217,166,0.7)', t: '95%'}, {j: 1, at: k.s68, c: 'rgba(224,170,80,0.75)', t: '68%'}];
	const bandOut = k.out1 - 10;
	const tails = [{j: 1, at: k.out1, split: k.sixteen, whole: '32%', half: '16%'}, {j: 2, at: k.out2, split: k.half, whole: '5%', half: '2.5%'}, {j: 3, at: k.out3, split: k.side3, whole: '0.3%', half: '0.15%'}];
	const cur = fr >= k.out3 ? 2 : fr >= k.out2 ? 1 : 0;
	return (
		<>
			<SceneHeading text="The empirical rule" at={4} size={48} />
			<NormalCurve x={B7.x} y={B7.y} width={B7.w} height={B7.h} window={W7} mu={0} sigma={1} xTicks={SIG7} xLabel="" yLabel="" at={-30}
				overlay={m => <>
					{bellFill(m, 0, 1, -3.6, 3.6)}
					{bands.map(b => {const o = vis(fr, b.at, bandOut, 14); return o > 0.01 ? <path key={b.j} d={regionPath(m, pdf0, -b.j, b.j)} fill={b.c} stroke={AMB} strokeWidth={3} opacity={o} /> : null;})}
					{bands.map((b, i) => {const o = vis(fr, b.at, bandOut, 14); if (o <= 0.01) return null; const [lx, by] = m.p(-b.j, 0), [rx] = m.p(b.j, 0), yy = by - 40 - i * 0; const ty = m.p(0, [0.03, 0.08, 0.2][i])[1]; return <g key={'t' + b.j} opacity={o}>
						<text x={(lx + rx) / 2} y={ty} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, fill: '#8a5a12'}} stroke="#fffdf8" strokeWidth={8} paintOrder="stroke">{b.t}</text>
						<line x1={lx} x2={rx} y1={yy + 40} y2={yy + 40} stroke="none" />
					</g>;})}
					{tails.map((t, i) => {
						const o = vis(fr, t.at, i < 2 ? tails[i + 1].at - 6 : undefined, 12);
						if (o <= 0.01) return null;
						const sp = smooth(prog(fr, t.split, 30));
						const [cx] = m.p(0, 0), [lx] = m.p(-t.j - 0.5, 0), [rx] = m.p(t.j + 0.5, 0), ty = m.p(0, 0.3)[1];
						const tailY = m.p(0, 0.11)[1];
						return <g key={'o' + t.j} opacity={o}>
							<g clipPath={m.clip}><path d={regionPath(m, pdf0, -3.6, -t.j)} fill="rgba(209,143,31,0.6)" stroke={AMB} strokeWidth={3} />
							<path d={regionPath(m, pdf0, t.j, 3.6)} fill="rgba(209,143,31,0.6)" stroke={AMB} strokeWidth={3} /></g>
							{sp < 1 ? <text x={cx} y={ty} textAnchor="middle" opacity={1 - sp} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, fill: '#8a5a12'}} stroke="#fffdf8" strokeWidth={8} paintOrder="stroke">{`${t.whole} outside`}</text> : null}
							{sp > 0 ? [lx, rx].map((x, q) => <text key={q} x={cx + (x - cx) * sp} y={ty + (tailY - ty) * sp} textAnchor="middle" opacity={sp} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 48, fill: '#8a5a12'}} stroke="#fffdf8" strokeWidth={8} paintOrder="stroke">{t.half}</text>) : null}
						</g>;
					})}
				</>} />
			<Hand x={B7.x + 380} y={B7.y + 690} at={k.sixteen} size={40} color={BROWN}>outside, then halve</Hand>
			<Row x={1180} y={180} at={k.any} size={36} color={'#2f7d4f'}>approximately, for any normal distribution:</Row>
			<Row x={1180} y={240} at={k.s68} size={44}>≈ 68% within μ ± σ</Row>
			<Row x={1180} y={300} at={k.s95} size={44}>≈ 95% within μ ± 2σ</Row>
			<Row x={1180} y={360} at={k.s997} size={44}>≈ 99.7% within μ ± 3σ</Row>
			<FrameSvg style={{opacity: prog(fr, k.three, 14)}}><rect x={1160} y={228} width={640} height={200} rx={18} fill="none" stroke="#2f7d4f" strokeWidth={5} /></FrameSvg>
			<Row x={1180} y={450} at={k.calc} size={32} color={GREY}>calculator: 68.27%, 95.45%, 99.73%</Row>
			<Calc x={1560} y={500} h={400} at={-30} out={k.sixteen - 30} screen={s => <ScreenGraph s={s} mu={0} sigma={1} win={[-3.6, 3.6]} band={[-1, 1]} readout="0.6827" size={32} />} />
			<Hand x={1180} y={560} at={-30} out={k.sixteen - 30} size={36} color={GREY} w={360}>measured: 0.6827, 0.9545, 0.9973</Hand>
			<TailLadder x={1180} y={530} w={660} mu={0} sigma={1} rowH={104} rows={[
				{from: 1, label: 'beyond μ + σ', value: '16%', at: k.sixteen},
				{from: 2, label: 'beyond μ + 2σ', value: '2.5%', at: k.half},
				{from: 3, label: 'beyond μ + 3σ', value: '0.15%', at: k.side3 - 10},
			]} />
			<Hand x={1180} y={860} at={k.sixteen} size={34} color={GREY} w={700}>{['each tail: half of 32%', 'each tail: half of 5%', 'each tail: half of 0.3%'][cur]}</Hand>
		</>
	);
};

// ---------- 8. a problem on the marks ----------
const B8 = {x: 40, y: 330, w: 1000, h: 560} as const;
export const W8 = {x: [140, 200] as [number, number], y: [0, 0.055] as [number, number]};
export const M8 = makePlot(B8.x, B8.y, B8.w, B8.h, W8);
const pdfH = (v: number) => normPdf(v, 170, 8);
const HT = [146, 154, 162, 170, 178, 186, 194];
const DoorScale: React.FC<{at: number; o?: number}> = ({at, o = 1}) => {
	const f = useCurrentFrame();
	const op = prog(f, at, 14) * o;
	if (op <= 0.01) return null;
	const x = 1060, y0 = 860, y1 = 360;
	const Y = (h: number) => y0 - ((h - 140) / 60) * (y0 - y1);
	return <FrameSvg style={{opacity: op}}>
		<path d={`M${x - 26},${y0} V${y1 - 20} H${x + 26} V${y0}`} fill="none" stroke="#a89e8f" strokeWidth={8} />
		{[140, 160, 180, 200].map(h => <g key={h}><line x1={x - 26} x2={x - 6} y1={Y(h)} y2={Y(h)} stroke="#8a8172" strokeWidth={4} /><text x={x - 34} y={Y(h) + 10} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28, fill: '#6b6358'}}>{h}</text></g>)}
		<text x={x} y={y0 + 40} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28, fill: '#6b6358'}}>cm</text>
	</FrameSvg>;
};
export const HeightsBell: React.FC<{shade: React.ComponentProps<typeof NormalCurve>['shade']; at?: number}> = ({shade, at = -30}) => (
	<NormalCurve x={B8.x} y={B8.y} width={B8.w} height={B8.h} window={W8} mu={170} sigma={8} xTicks={HT} xLabel="height (cm)" yLabel="f(x)" shade={shade} overlay={m => bellFill(m, 170, 8, 140, 200)} at={at} />
);
export const S08: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K8;
	const dimA = prog(fr, k.taller, 14);
	return (
		<>
			<Task x={96} y={140} w={1000} at={-30} size={44}>Heights: find P(162 &lt; H &lt; 178) and P(H &gt; 186).</Task>
			<BoxCard x={1140} y={140} w={720} at={-30} size={44} title="model and givens">
				<div style={{fontWeight: 800, color: TEAL.ink}}>H ∼ N(170, 8²)</div>
				<div style={{fontWeight: 800}}>μ = 170 cm, σ = 8 cm <span style={{fontSize: 30, color: GREY, fontWeight: 700}}>(variance 64)</span></div>
			</BoxCard>
			<HeightsBell shade={[{from: 162, to: 178, at: k.p68, out: k.taller + 30}, {to: 154, at: k.outside, out: k.half, color: 'rgba(243,217,166,0.6)'}, {from: 186, at: k.outside}]} />
			<Mark m={M8} v={162} o={prog(fr, k.s178, 14) * (1 - 0.6 * dimA)} mu={170} sigma={8} label="162" ly={0.052} />
			<Mark m={M8} v={178} o={prog(fr, k.s178, 14) * (1 - 0.6 * dimA)} mu={170} sigma={8} label="178" ly={0.052} />
			<Mark m={M8} v={186} o={prog(fr, k.s186, 14)} mu={170} sigma={8} label="186" ly={0.02} />
			<Mark m={M8} v={154} o={vis(fr, k.outside, k.half, 14)} mu={170} sigma={8} />
			<DoorScale at={k.heights} />
			<Row x={1140} y={330} at={k.either} size={40} dim={dimA}>162 = 170 − 8 = μ − σ</Row>
			<Row x={1140} y={386} at={k.either + 14} size={40} dim={dimA}>178 = 170 + 8 = μ + σ</Row>
			<AnswerBox x={1140} y={450} at={k.p68} size={44}>P(162 &lt; H &lt; 178) ≈ 68%</AnswerBox>
			<Row x={1140} y={560} at={k.two} size={44}>186 = 170 + 2 × 8 = μ + 2σ</Row>
			<Hand x={1140} y={630} at={k.outside} size={36} color={AMB}>outside ±2σ: 5%, half above</Hand>
			<AnswerBox x={1140} y={690} at={k.p25} size={44}>P(H &gt; 186) ≈ 5% ÷ 2 = 2.5%</AnswerBox>
			<Slip x={1140} y={800} at={k.p25 + 8} strikeAt={k.p25 + 24} size={34} caption="that's inside ±2σ, not above">P(H &gt; 186) ≈ 95%</Slip>
		</>
	);
};

// ---------- 9. judgements, and where the rule stops ----------
const B9 = {x: 40, y: 260, w: 1040, h: 600} as const;
const M9 = makePlot(B9.x, B9.y, B9.w, B9.h, WA);
export const S09: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K9;
	const sw = prog(fr, k.now - 4, 20);
	const roll = smooth(prog(fr, k.juice - 30, 70));
	const [rdx, rdy] = M9.pf(130, 0);
	return (
		<>
			{sw < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}>
				<Task x={96} y={140} w={1000} at={-30} size={44}>Is a student of 196 cm unusual?</Task>
				<BoxCard x={1140} y={140} w={720} at={-30} size={44} title="model and givens"><div style={{fontWeight: 800, color: TEAL.ink}}>H ∼ N(170, 8²), σ = 8 cm</div></BoxCard>
				<HeightsBell shade={[{to: 186, at: -30, out: k.judge + 10, color: 'rgba(243,217,166,0.45)'}, {from: 194, at: k.very - 20}]} />
				<Mark m={M8} v={186} o={1 - prog(fr, k.judge + 10, 14)} mu={170} sigma={8} label="186" ly={0.02} />
				<Row x={1140} y={290} at={-30} out={k.judge + 10} size={36} color={GREY}>so P(H &lt; 186) ≈ 97.5%</Row>
				<Mark m={M8} v={194} o={prog(fr, k.s194, 14)} mu={170} sigma={8} label="μ + 3σ = 194" ly={0.016} />
				<FrameSvg style={{opacity: prog(fr, k.s196, 12)}}>{(() => {const [px, py] = M8.pf(196, 0); return <><circle cx={px} cy={py} r={14} fill={RED} stroke="#fffdf8" strokeWidth={4} /><text x={px} y={py - 30} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: RED}}>196</text></>;})()}</FrameSvg>
				<Row x={1140} y={330} at={k.three} size={44}>194 = 170 + 3 × 8 = μ + 3σ</Row>
				<Row x={1140} y={400} at={k.only} size={44}>above μ + 3σ: about 0.15%</Row>
				<Row x={1140} y={470} at={k.fewer} size={44}>above 196: fewer still</Row>
				<AnswerBox x={1140} y={580} at={k.very - 10} size={44}>P(H &gt; 194) ≈ 0.15%</AnswerBox>
				<Hand x={1140} y={690} at={k.very} size={48} color={RED}>very unusual</Hand>
			</div> : null}
			{sw > 0 ? <div style={{position: 'absolute', inset: 0, opacity: sw}}>
				<SceneHeading text="The juice apples" at={k.now} size={48} />
				<Plate plate={CRATE} x={1560} y={110} w={300} at={k.now} />
				<NormalCurve x={B9.x} y={B9.y} width={B9.w} height={B9.h} window={WA} mu={AM} sigma={AS} xTicks={[105, 120, 135, 165, 180, 195]} xLabel="mass x (g)" yLabel="f(x)" muMark={{}} at={-30}
					shade={[{to: 135, at: k.below2 - 4, out: k.below2 + 40, color: 'rgba(243,217,166,0.7)'}, {to: 120, at: k.below2 + 40, out: k.so - 4, color: 'rgba(209,143,31,0.7)'}, {to: 130, at: k.so}]}
					overlay={m => bellFill(m, AM, AS, 100, 200)} />
				<Mark m={M9} v={135} o={prog(fr, k.sits, 14)} mu={AM} sigma={AS} label="μ − σ = 135" ly={0.026} />
				<Mark m={M9} v={120} o={prog(fr, k.sits + 16, 14)} mu={AM} sigma={AS} label="μ − 2σ = 120" ly={0.02} />
				<FrameSvg style={{opacity: prog(fr, k.sits, 12)}}><circle cx={rdx} cy={rdy} r={15} fill={RED} stroke="#fffdf8" strokeWidth={4} /><text x={rdx} y={rdy + 76} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, fill: RED}}>130</text></FrameSvg>
				<Hand x={M9.pf(101, 0)[0]} y={M9.pf(0, 0.012)[1]} at={k.below2} out={k.below2 + 40} size={40} color={'#8a5a12'}>about 16%</Hand>
				<Hand x={M9.pf(101, 0)[0]} y={M9.pf(0, 0.008)[1]} at={k.below2 + 40} out={k.so - 4} size={40} color={'#8a5a12'}>about 2.5%</Hand>
				<JuiceChute at={k.juice - 30} roll={roll} />
				<Row x={1120} y={420} at={k.juice} size={40}>juice: X &lt; 130 g</Row>
				<Row x={1120} y={490} at={k.sits + 20} size={40}>120 &lt; 130 &lt; 135</Row>
				<Row x={1120} y={600} at={k.percent} size={52}>2.5% &lt; P(X &lt; 130) &lt; 16%</Row>
				<Hand x={1120} y={690} at={k.percent + 10} size={44} color={BROWN}>a range, not a value</Hand>
				<Q x={M9.pf(116, 0)[0]} y={M9.pf(0, 0.0105)[1]} o={prog(fr, k.thirty, 12)} color={AMB} />
				<Hand x={1120} y={790} at={k.actual} size={36} color={GREY} w={700}>need the area to the left of 130</Hand>
			</div> : null}
		</>
	);
};
/** A coded chute at the left of the bell with a painted apple rolling down it (`roll` 0..1). */
const JuiceChute: React.FC<{at: number; roll: number}> = ({at, roll}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	if (o <= 0.01) return null;
	const x0 = 1150, y0 = 866, x1 = 1450, y1 = 912;
	const ax = x0 + (x1 - x0) * roll, ay = y0 + (y1 - y0) * roll - 64;
	return <>
		<FrameSvg style={{opacity: o}}>
			<path d={`M${x0 - 20},${y0 + 4} L${x1 + 30},${y1 + 4}`} stroke="#8a8172" strokeWidth={10} strokeLinecap="round" />
			<rect x={x1 + 30} y={y1 - 50} width={110} height={70} rx={10} fill="#efe6d4" stroke="#8a8172" strokeWidth={5} />
			<text x={x1 + 85} y={y1 - 4} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34, fill: '#6b6358'}}>juice</text>
		</FrameSvg>
		<Plate plate={APPLE} x={ax - 32} y={ay} w={64} at={at} rot={roll * 540} />
	</>;
};

// ---------- 10. the CDF, graphed ----------
const BT = {x: 40, y: 160, w: 1040, h: 380} as const;
const BC = {x: 40, y: 556, w: 1040, h: 384} as const;
const MT = makePlot(BT.x, BT.y, BT.w, BT.h, WA);
const WC = {x: WA.x, y: [0, 1.1] as [number, number]};
const MC = makePlot(BC.x, BC.y, BC.w, BC.h, WC);
const FA = (v: number) => normCdf(v, AM, AS);
export const S10: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K10;
	const X = kf(fr, [[k.shape, 101], [k.side, 150], [k.highest, 165], [k.levels + 30, 199], [k.at130, 199], [k.two, 130]]);
	const swept = fr >= k.shape;
	const drawTo = fr >= k.levels + 30 ? 199 : X;
	const dot = (v: number, at: number, c = VIO.stroke) => {const o = prog(fr, at, 12); if (o <= 0.01) return null; const [px, py] = MC.p(v, FA(v)); return <circle cx={px} cy={py} r={13} fill={c} stroke="#fffdf8" strokeWidth={4} opacity={o} />;};
	return (
		<>
			<SceneHeading text="The cumulative distribution function" at={2} size={44} />
			<StudioPlot x={BT.x} y={BT.y} width={BT.w} height={BT.h} window={WA} xTicks={[]} yTicks={[]} xLabel="" yLabel="f(x)" grid={false} at={-30}>
				{m => <>
					{swept ? <path d={regionPath(m, pdfA, 100, Math.max(100.01, X), () => 0, 160)} fill="#f3d9a6" stroke={AMB} strokeWidth={3} /> : null}
					{(() => {const o = vis(fr, k.side - 10, k.slope, 12); if (o <= 0.01) return null; const [px, t] = m.p(150, 0.029), [, b] = m.p(150, 0); return <g opacity={o}><line x1={px} x2={px} y1={t} y2={b} stroke={VIO.stroke} strokeWidth={4} /><text x={px - 70} y={m.p(0, 0.008)[1]} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, fill: '#8a5a12'}}>½</text><text x={px + 70} y={m.p(0, 0.008)[1]} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, fill: '#8a5a12'}}>½</text></g>;})()}
					<g clipPath={m.clip}><path d={fnPath(m, pdfA, 100, 200)} stroke={TEAL.stroke} strokeWidth={6} fill="none" /></g>
					{swept ? (() => {const [px, py] = m.p(X, pdfA(X)), [, by] = m.p(X, 0); return <g><line x1={px} x2={px} y1={by} y2={py - 20} stroke={VIO.stroke} strokeWidth={4} /><circle cx={px} cy={by} r={10} fill={VIO.stroke} /></g>;})() : null}
				</>}
			</StudioPlot>
			<StudioPlot x={BC.x} y={BC.y} width={BC.w} height={BC.h} window={WC} xTicks={[105, 120, 130, 150, 165, 180, 195]} yTicks={[0.5, 1]} xLabel="mass x (g)" yLabel="F(x)" grid={false} at={-30}>
				{m => <>
					{(() => {const o = prog(fr, k.levels, 12); if (o <= 0.01) return null; const [x0, y] = m.p(100, 1), [x1] = m.p(200, 1); return <g opacity={o}><line x1={x0} x2={x1} y1={y} y2={y} stroke={GREY} strokeWidth={3} strokeDasharray="10 8" /></g>;})()}
					{swept ? <g clipPath={m.clip}><path d={fnPath(m, FA, 100, Math.max(100.01, drawTo), 260)} stroke={VIO.stroke} strokeWidth={7} fill="none" /></g> : null}
					{(() => {const o = vis(fr, k.highest - 10, k.at130, 12); if (o <= 0.01) return null; const s = pdfA(150), [ax, ay] = m.p(142, 0.5 - 8 * s), [bx, by] = m.p(158, 0.5 + 8 * s); return <line x1={ax} y1={ay} x2={bx} y2={by} stroke={AMB} strokeWidth={6} opacity={o} />;})()}
					{dot(150, k.side)}{dot(135, k.levels + 10)}{dot(165, k.levels + 10)}{dot(130, k.two, '#2f7d4f')}
					{swept ? (() => {const [px, py] = m.p(X, FA(X)); return <circle cx={px} cy={py} r={11} fill={VIO.stroke} stroke="#fffdf8" strokeWidth={4} />;})() : null}
				</>}
			</StudioPlot>
			<Hand x={MC.pf(152, 0)[0]} y={MC.pf(0, 0.36)[1]} at={k.side} out={k.levels} size={34} color={VIO.ink}>F(150) = 0.5</Hand>
			<Hand x={MC.pf(156, 0)[0]} y={MC.pf(0, 0.58)[1]} at={k.highest} out={k.at130} size={36} color={AMB}>steepest at μ</Hand>
			<Hand x={MC.pf(166, 0)[0]} y={MC.pf(0, 1)[1] - 52} at={k.levels} size={32} color={GREY}>never reaches 1</Hand>
			<Hand x={MC.pf(105, 0)[0]} y={MC.pf(0, 0.42)[1]} at={k.levels + 10} out={k.at130} size={32} color={GREY}>F(135) ≈ 0.1587 ≈ 16%</Hand>
			<Hand x={MC.pf(168, 0)[0]} y={MC.pf(0, 0.72)[1]} at={k.levels + 10} out={k.at130} size={32} color={GREY}>F(165) ≈ 0.8413 ≈ 50% + 34%</Hand>
			<Row x={1120} y={160} at={k.capF} size={44}>F(x) = P(X ≤ x)</Row>
			<Row x={1120} y={226} at={k.left} size={36} color={'#8a5a12'}>= area to the left of x</Row>
			<LiveReadoutBoard x={1120} y={330} width={420} at={k.shape} inline rows={[{label: 'x', value: X, digits: 0, role: 'a'}, {label: 'F(x)', value: FA(X), digits: 4, role: 'gradient'}]} />
			<Calc x={1580} y={290} h={420} at={-30} screen={s => fr < k.graph ? <ScreenGraph s={s} mu={AM} sigma={AS} win={[100, 200]} /> : <ScreenGraph s={s} mu={AM} sigma={AS} win={[100, 200]} cdf={{to: swept ? drawTo : 100}} />} />
			<Hand x={1580} y={230} at={k.graph} size={30} color={GREY}>Y2 = cdf of Y1</Hand>
			<AnswerBox x={1120} y={740} at={k.two} size={40}>P(X &lt; 130) = F(130) ≈ 0.0912</AnswerBox>
			<Plate plate={CRATE} x={1700} y={800} w={180} at={k.model} />
			<Hand x={1120} y={850} at={k.model} size={44} color={'#2f7d4f'}>model: about 9% to juice</Hand>
		</>
	);
};

// ---------- 11. memory aid ----------
export const S11: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K11;
	const sp = smooth(prog(fr, k.halve, 30));
	const bell = (v: number) => 250 - pdf0(v) * 500;
	const X = (v: number) => 270 + v * 70;
	const path = (a: number, b: number, X2 = X) => {let d = ''; for (let i = 0; i <= 60; i++) {const v = a + ((b - a) * i) / 60; d += `${i ? 'L' : 'M'}${X2(v).toFixed(1)},${bell(v).toFixed(1)} `;} return d;};
	const area = (a: number, b: number, X2 = X) => path(a, b, X2) + `L${X2(b)},250 L${X2(a)},250 Z`;
	const lab = (x: number, y: number, t: string, o = 1, size = 34) => <text x={x} y={y} textAnchor="middle" opacity={o} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, fill: '#8a5a12'}} stroke="#fffdf8" strokeWidth={7} paintOrder="stroke">{t}</text>;
	return (
		<>
			<SceneHeading text="Remember the rule" at={4} size={48} />
			<FramedCard x={200} y={180} w={1520} h={720} at={-30} />
			<div style={{position: 'absolute', left: 250, top: 206, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: GOOD.ink}}>Memory aid</div>
			<Plate plate={APPLE} x={260} y={320} w={180} />
			<Hand x={500} y={270} at={-30} size={76} color={INK}>68, 95, 99.7</Hand>
			<div style={{position: 'absolute', left: 440, top: 400}}>
				<svg width={560} height={330} viewBox="0 0 560 330">
					<path d={area(-3, 3)} fill="rgba(243,217,166,0.45)" /><path d={area(-2, 2)} fill="rgba(243,217,166,0.8)" /><path d={area(-1, 1)} fill="rgba(224,170,80,0.85)" />
					<path d={path(-3.6, 3.6)} stroke={TEAL.stroke} strokeWidth={5} fill="none" /><line x1={14} x2={526} y1={250} y2={250} stroke={INK} strokeWidth={3} />
					{[-3, -2, -1, 1, 2, 3].map(j => <text key={j} x={X(j)} y={290} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, fill: VIO.ink}}>{`${j < 0 ? '−' : '+'}${Math.abs(j)}σ`}</text>)}
					{lab(X(0), 200, '68%', prog(fr, k.s68, 12))}{lab(X(-1.5), 238, '95%', prog(fr, k.s95, 12), 26)}{lab(X(2.5), 200, '99.7%', prog(fr, k.s997, 12), 28)}
				</svg>
			</div>
			<Hand x={1080} y={300} at={k.tail} size={64} color={BROWN}>Outside, then halve.</Hand>
			<div style={{position: 'absolute', left: 1080, top: 420, opacity: prog(fr, k.outside, 14)}}>
				<svg width={580} height={330} viewBox="0 0 580 330">
					<path d={area(-3.6, -1, v => 290 + v * 72)} fill="rgba(209,143,31,0.6)" /><path d={area(1, 3.6, v => 290 + v * 72)} fill="rgba(209,143,31,0.6)" />
					<path d={path(-3.6, 3.6, v => 290 + v * 72)} stroke={TEAL.stroke} strokeWidth={5} fill="none" />
					<line x1={20} x2={560} y1={250} y2={250} stroke={INK} strokeWidth={3} />
					{lab(290, 60, '32% outside', 1 - sp, 44)}
					{[-1, 1].map(q => <React.Fragment key={q}>{lab(290 + q * 180 * sp, 60 + 120 * sp, '16%', sp, 48)}</React.Fragment>)}
				</svg>
			</div>
			<Hand x={1080} y={770} at={k.halve} size={38} color={GREY} w={600}>one tail beyond μ + σ: 16%</Hand>
		</>
	);
};
export {smooth};
