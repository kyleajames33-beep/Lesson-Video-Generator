// Scenes 6 to 10: the second courier (find k from total area 1, the k dial stopping at area 1; P(X < 1) = 7/16), F
// built from f with a dummy variable (the tracker fills as the area grows), f from F by differentiating (0 on the
// flat pieces), and the memory aid (the tracker).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, prog} from '../../kit';
import {CdfTracer, FrameSvg, LiveReadoutBoard, MarkSpan, ParameterSlider, SceneHeading, TrackerFill, kf, makePlot, regionPath, smooth} from '../../math/studio';
import {K6, K7, K8, K9, K10} from './cuemap';
import {AREA, AnswerBox, BoxCard, CDF, DENS, Ev, F3, F9Plot, FramedCard, Fc, GOOD, GREY, Hand, INK, Int, Pair, Parcel, Row, Slip, Task, Van, f3, fc, hour8Ticks, xTicksN} from './parts';

const winC = {x: [-0.5, 4.5] as [number, number], y: [-0.05, 0.8] as [number, number]};
const cTicks = [0.25, 0.5].map(v => ({value: v, label: String(v)}));
const G6 = {x: 40, y: 330, w: 1000, h: 640} as const;
const M6 = makePlot(G6.x, G6.y, G6.w, G6.h, winC);
const COURIER = <><div style={{color: DENS.ink, fontWeight: 800}}>f(x) = k(4 − x) for 0 ≤ x ≤ 4</div><div style={{color: DENS.ink, fontWeight: 800}}>f(x) = 0 elsewhere</div></>;

// ---------- 6. finding an unknown constant ----------
export const S06: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K6;
	const kv = kf(fr, [[0, 0.05], [k.eight + 10, 0.05], [k.eighth, 0.125]]);
	return (
		<>
			<Van x={96} y={150} w={300} />
			<Hand x={96} y={300} at={k.second} size={34} color={GREY} w={330}>second courier: 8 am to 12</Hand>
			<Task x={440} y={150} w={600} at={-30} size={44}>Find k.</Task>
			<BoxCard x={1080} y={150} w={780} at={-30} size={38} title="given">{COURIER}</BoxCard>
			<F9Plot {...G6} win={winC} fn={x => fc(x, kv)} xTicks={hour8Ticks} yTicks={cTicks} yLabel="f(x)" color={DENS.stroke}>
				{m => {const [x0, y0] = m.p(0, 0), [x4] = m.p(4, 0), [, yt] = m.p(0, 4 * kv); return <>
					<path d={regionPath(m, x => fc(x, kv), 0, 4)} fill="#f3d9a6" opacity={0.8} />
					<path d={`M${x0},${y0 + 16} v10 H${x4} v-10`} fill="none" stroke={AREA.stroke} strokeWidth={5} />
					<text x={(x0 + x4) / 2} y={y0 + 4} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: AREA.ink}} stroke="#fffdf8" strokeWidth={7} paintOrder="stroke">base 4</text>
					<path d={`M${x0 - 14},${y0} h-10 V${yt} h10`} fill="none" stroke={AREA.stroke} strokeWidth={5} />
					<text x={x0 + 20} y={yt - 14} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: AREA.ink}} stroke="#fffdf8" strokeWidth={7} paintOrder="stroke">height 4k</text>
				</>;}}
			</F9Plot>
			<Hand x={M6.pf(1.6, 0)[0]} y={M6.pf(0, 0.62)[1]} at={k.their} size={36} color={GREY} w={420}>early stop: early arrivals most likely</Hand>
			<ParameterSlider x={1080} y={330} width={380} symbol="k" role="k" value={kv} min={0} max={0.2} ticks={[{value: 0, label: '0'}, {value: 0.1, label: '0.1'}, {value: 0.2, label: '0.2'}]} at={-30} format={v => (Math.abs(v - 0.125) < 1e-4 ? '1/8' : v.toFixed(3))} />
			<LiveReadoutBoard x={1080} y={470} width={330} at={-30} rows={[{label: 'area under f', value: 8 * kv, format: v => (Math.abs(v - 1) < 1e-6 ? '1 ✓' : v.toFixed(2)), role: 'k'}]} />
			<Row x={1080} y={620} at={k.eight} size={44}>area = ½ × 4 × 4k = 8k</Row>
			<Row x={1080} y={690} at={k.integ} size={40}><Int lo="0" hi="4" />k(4 − x) dx = k<Ev lo="0" hi="4">4x − x²/2</Ev> = 8k</Row>
			<AnswerBox x={1080} y={780} at={k.eighth} size={50}>8k = 1, so k = 1/8</AnswerBox>
			<Slip x={1080} y={880} at={k.pos} strikeAt={k.pos + 20} size={40} caption="a density can't be negative">k = −1/8</Slip>
		</>
	);
};

// ---------- 7. a probability as an area ----------
export const S07: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K7;
	const a = prog(fr, k.integ, 16);
	return (
		<>
			<Van x={96} y={150} w={300} />
			<Task x={440} y={150} w={600} at={-30} size={44}>Find P(X &lt; 1).</Task>
			<BoxCard x={1080} y={150} w={780} at={-30} size={38} title="given"><div style={{color: DENS.ink, fontWeight: 800}}>f(x) = (4 − x)/8 for 0 ≤ x ≤ 4</div><div style={{color: DENS.ink, fontWeight: 800}}>f(x) = 0 elsewhere</div></BoxCard>
			<F9Plot {...G6} win={winC} fn={x => fc(x)} xTicks={hour8Ticks} yTicks={cTicks} yLabel="f(x)" color={DENS.stroke}>
				{m => {const [x0, y0] = m.p(0, 0), [x1] = m.p(1, 0), [, yb] = m.p(0, 0.6), [px, py] = m.p(0, 0.5), z = prog(fr, k.zero, 10); return <>
					<path d={regionPath(m, x => fc(x), 0, 1)} fill="#f3d9a6" stroke={AREA.stroke} strokeWidth={3} opacity={a} />
					<g opacity={prog(fr, k.first, 12)}><path d={`M${x0},${yb + 14} V${yb} H${x1} V${yb + 14}`} fill="none" stroke={AREA.stroke} strokeWidth={5} /></g>
					<circle cx={px} cy={py} r={14 + 4 * z} fill={DENS.stroke} stroke="#fffdf8" strokeWidth={4} opacity={z} />
					<text x={(x0 + x1) / 2} y={y0 - 60} textAnchor="middle" opacity={prog(fr, k.seven, 12)} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, fill: AREA.ink}}>7/16</text>
				</>;}}
			</F9Plot>
			<Hand x={M6.pf(0.1, 0)[0]} y={M6.pf(0, 0.72)[1]} at={k.first} size={38} color={AREA.ink}>first hour of four</Hand>
			<Hand x={M6.pf(0.25, 0)[0]} y={M6.pf(0, 0.5)[1] - 20} at={k.zero} size={38} color={DENS.ink}>highest density</Hand>
			<Row x={1080} y={360} at={k.integ} size={44}>P(X &lt; 1) = <Int lo="0" hi="1" />(4 − x)/8 dx</Row>
			<Row x={1080} y={450} at={k.thats} size={44}>= (1/8)<Ev lo="0" hi="1">4x − x²/2</Ev></Row>
			<Row x={1080} y={540} at={k.thats + 30} size={44}>= (1/8)(4 − ½)</Row>
			<AnswerBox x={1080} y={630} at={k.seven} size={52}>= 7/16</AnswerBox>
			<Row x={1340} y={648} at={k.seven + 20} size={36} color={GREY}>≈ 0.44</Row>
			<Hand x={1080} y={740} at={k.just} size={40} color={INK} w={780}>just under half of the probability, in the first hour: before 9 am</Hand>
			<Hand x={1080} y={860} at={k.fits} size={38} color={GREY} w={780}>it fits: this density is highest at 0</Hand>
		</>
	);
};

// ---------- 8. building F from f ----------
const TR = {x: 40, y: 150, width: 1100, heightTop: 400, heightBottom: 380, gap: 16} as const;
const TT = makePlot(TR.x, TR.y, TR.width, TR.heightTop, {x: [-0.5, 4.5], y: [0, 1.2]});
export const S08: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K8;
	const marker = kf(fr, [[0, -0.5], [k.area, -0.5], [k.f4 + 30, 4], [k.one, 4.5]]);
	const dot = prog(fr, k.seven, 12);
	return (
		<>
			<CdfTracer x={TR.x} y={TR.y} width={TR.width} heightTop={TR.heightTop} heightBottom={TR.heightBottom} gap={TR.gap} windowX={[-0.5, 4.5]} yTop={[0, 1.2]} yBottom={[0, 0.6]}
				density={x => fc(x)} F={Fc} marker={marker} xTicks={hour8Ticks} yTopTicks={[1]} yBottomTicks={[0.25, 0.5]} xLabel="x (hours after 8)" topLabel="F(x)" bottomLabel="" at={-30} />
			<Hand x={TT.pf(2.5, 0)[0]} y={TR.y + TR.heightTop + TR.gap + 60} at={-30} size={36} color={DENS.ink}>f(x) = (4 − x)/8</Hand>
			<FrameSvg style={{opacity: dot}}>{(() => {const [px, py] = TT.pf(1, 7 / 16); return <><circle cx={px} cy={py} r={14} fill={CDF} stroke="#fffdf8" strokeWidth={5} /><text x={px - 24} y={py - 24} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, fill: CDF}} stroke="#fffdf8" strokeWidth={7} paintOrder="stroke">7/16</text></>;})()}</FrameSvg>
			<Van x={1180} y={150} w={260} />
			<TrackerFill x={1180} y={300} width={360} value={Fc(marker)} at={-30} digits={2} />
			<Row x={1180} y={440} at={k.so} size={46}>F(x) = <Int lo="0" hi="x" />f(<MarkSpan kind="circle" at={k.t} role="k" width={5}>t</MarkSpan>) dt</Row>
			<Hand x={1600} y={452} at={k.dummy} size={40} color={AREA.ink}>t: x is taken</Hand>
			<Row x={1180} y={530} at={k.here} size={38}>= (1/8)<Ev lo="0" hi="x">4t − t²/2</Ev></Row>
			<AnswerBox x={1180} y={610} at={k.here + 30} size={40}>F(x) = (8x − x²)/16, 0 ≤ x ≤ 4</AnswerBox>
			<Row x={1180} y={710} at={k.f0} size={36}>F(0) = 0,  F(4) = (32 − 16)/16 = 1 ✓</Row>
			<Row x={1180} y={776} at={k.one} size={34} color={GREY}>F = 0 for x &lt; 0; F = 1 for x &gt; 4</Row>
			<Hand x={1180} y={846} at={k.f1} size={40} color={CDF}>F(1) = 7/16: the area we just found</Hand>
		</>
	);
};

// ---------- 9. finding f from F ----------
const W9 = {top: {x: [-0.5, 2.5] as [number, number], y: [-0.1, 1.2] as [number, number]}, bot: {x: [-0.5, 2.5] as [number, number], y: [-0.05, 0.9] as [number, number]}};
const P9 = {x: 40, y: 330, w: 1000, hTop: 330, hBot: 330, gap: 10} as const;
const T9 = makePlot(P9.x, P9.y, P9.w, P9.hTop, W9.top), B9 = makePlot(P9.x, P9.y + P9.hTop + P9.gap, P9.w, P9.hBot, W9.bot);
export const S09: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K9;
	const sweep = kf(fr, [[0, -0.5], [k.diff2, -0.5], [k.diff2 + 110, 2.5]]);
	const flat = prog(fr, k.and, 14);
	const t = (v: number) => (v < 0 || v > 2 ? 0 : (6 * v - 3 * v * v) / 4);
	return (
		<>
			<Task x={96} y={150} w={940} at={-30} size={44}>Find the probability density function.</Task>
			<BoxCard x={1080} y={150} w={780} at={-30} size={36} title="given"><div style={{color: CDF, fontWeight: 800}}>F(x) = 0 for x &lt; 0</div><div style={{color: CDF, fontWeight: 800}}>F(x) = x²(3 − x)/4 for 0 ≤ x ≤ 2</div><div style={{color: CDF, fontWeight: 800}}>F(x) = 1 for x &gt; 2</div></BoxCard>
			<Pair {...P9} winTop={W9.top} winBot={W9.bot} F={F3} f={f3} drawf={sweep} xTicks={xTicksN([1, 2])} yBotTicks={[{value: 0.5, label: '0.5'}]} />
			<FrameSvg>
				{sweep > -0.5 && sweep < 2.5 ? (() => {const s = t(sweep), [px, py] = T9.pf(sweep, F3(sweep)), d = 0.35, [ax, ay] = T9.pf(sweep - d, F3(sweep) - s * d), [bx, by] = T9.pf(sweep + d, F3(sweep) + s * d); return <><line x1={ax} y1={ay} x2={bx} y2={by} stroke={AREA.stroke} strokeWidth={5} /><circle cx={px} cy={py} r={10} fill={AREA.stroke} /></>;})() : null}
				<g opacity={flat}>
					{[[-0.5, 0], [2, 2.5]].map(([a, b], i) => {const [x0, y0] = T9.pf(a, F3(a)), [x1, y1] = T9.pf(b, F3(b)), [u0, v0] = B9.pf(a, 0), [u1] = B9.pf(b, 0); return <g key={i}><line x1={x0} x2={x1} y1={y0} y2={y1} stroke={DENS.stroke} strokeWidth={12} opacity={0.35} /><line x1={u0} x2={u1} y1={v0} y2={v0} stroke={DENS.stroke} strokeWidth={12} opacity={0.35} /></g>;})}
				</g>
			</FrameSvg>
			<Hand x={T9.pf(1.95, 0)[0]} y={T9.pf(0, 0.6)[1]} at={k.flat} size={36} color={DENS.ink}>flat F: f = 0</Hand>
			<Row x={1080} y={390} at={k.first} size={40} dim={prog(fr, k.dens, 14) * 0.3}>F(0) = 0,  F(2) = (4 × 1)/4 = 1 ✓</Row>
			<Row x={1080} y={460} at={k.expand} size={44} dim={prog(fr, k.dens, 14) * 0.3}>F(x) = (3x² − x³)/4</Row>
			<Row x={1080} y={536} at={k.diff2} size={44}>f(x) = F′(x) = (6x − 3x²)/4</Row>
			<AnswerBox x={1080} y={620} at={k.dens} size={44}>f(x) = <span style={{color: fr >= k.positive ? GOOD.ink : 'inherit'}}>3x</span>(<span>2 − x</span>)/4, 0 ≤ x ≤ 2</AnswerBox>
			<Hand x={1080} y={720} at={k.positive} size={38} color={GOOD.ink} w={780}>3x ≥ 0 and 2 − x ≥ 0 on [0, 2], so f ≥ 0</Hand>
			<Row x={1080} y={800} at={k.and} size={44} color={DENS.ink}>f(x) = 0 elsewhere</Row>
			<Hand x={1080} y={870} at={k.flat} size={34} color={GREY} w={780}>at x = 0 and 2, F has a corner: one point changes no probability</Hand>
		</>
	);
};

// ---------- 10. memory aid ----------
export const S10: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K10;
	const m = kf(fr, [[0, 0], [k.think, 0], [k.one, 3]]);
	const F = (x: number) => Math.min(1, (x * x) / 9);
	return (
		<>
			<SceneHeading text="A picture to hold on to" at={4} size={48} />
			<FramedCard x={160} y={170} w={1600} h={640} at={-30} />
			<div style={{position: 'absolute', left: 210, top: 196, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: GOOD.ink}}>Memory aid</div>
			<Parcel x={230} y={290} w={330} />
			<TrackerFill x={210} y={470} width={360} value={F(m)} at={-30} digits={2} label="parcel tracker" />
			<Hand x={210} y={640} at={k.and} size={40} color={CDF} w={500}>by 12 noon: exactly 1</Hand>
			<Hand x={720} y={250} at={k.F} size={60} color={INK} w={1000}>F: the chance so far.</Hand>
			<Hand x={720} y={340} at={k.f} size={60} color={INK} w={1000}>f: how fast it's building.</Hand>
			<Row x={720} y={470} at={k.diff} size={44}>Differentiate <span style={{color: CDF}}>F</span> → <span style={{color: DENS.ink}}>f</span>.</Row>
			<Row x={1190} y={470} at={k.integ} size={44}>Integrate <span style={{color: DENS.ink}}>f</span> → <span style={{color: CDF}}>F</span>.</Row>
			<Row x={720} y={560} at={k.and} size={44} color={GOOD.ink}>Total: 1</Row>
			<F9Plot x={1060} y={560} w={600} h={240} xTicks={[]} yTicks={[]} draw={m} yLabel="F" />
		</>
	);
};
export {smooth, Pair, Parcel, Slip};
