// Scenes 7 to 9: the Ferris wheel callback (d05's wheel turns once while a projector line carries the marked cabin's
// height to the graph; a bottom start means −cos), the exact solve h = 17 m (t = 20 s up, t = 40 s down), and the
// framed memory card "Middle, half, period, start." (exported as T03Card).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {HandTag, PlateImg, SceneHeading, StudioPlot, fnPath, kf, makePlot} from '../../math/studio';
import {K7, K8, K9} from './cuemap';
import {AR, Ac, AnswerBox, Arw, CR, Cc, Chip, FONT_DISPLAY, FONT_HAND, FramedCard, GOOD, GREY, Gy, HBracket, Hand, INK, KR, Kc, Lb, PI, ReadStrip, Ring, Row, SlotEq, Slip, TIDE, Task, Wheel, hF, seatAt, wheelY} from './parts';

const WWIN = {x: [-2, 63] as [number, number], y: [0, 25] as [number, number]};
const GREEN = '#2e7d4f';

// ---------- 7. a turning wheel makes a wave ----------
const W7 = {cx: 330, cy: 470, R: 220};
const G7 = {x: 640, y: 196, w: 1250, h: 580};
export const S07: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K7;
	const t = kf(fr, [[k.as, 0], [k.as + 140, 60], [k.check + 10, 60], [k.check + 70, 90]], false);
	const tt = t % 60 === 0 && t > 0 ? (t >= 90 ? 30 : 60) : t % 60;
	const m = makePlot(G7.x, G7.y, G7.w, G7.h, WWIN);
	const [sx, sy] = seatAt(W7.cx, W7.cy, W7.R, -PI / 2 + (PI * t) / 30);
	const [gx, gy] = m.pf(tt, hF(tt));
	const proj = prog(fr, k.wave - 10, 10) * (1 - prog(fr, k.midline, 14)) + prog(fr, k.check + 10, 10) * (1 - prog(fr, k.top + 14, 10));
	return (
		<>
			<SceneHeading text="A turning wheel makes a wave" at={4} size={44} />
			<Wheel cx={W7.cx} cy={W7.cy} R={W7.R} turn={(PI * t) / 30} />
			<svg width={1920} height={1080} style={{position: 'absolute', left: 0, top: 0, overflow: 'visible'}}>
				<g opacity={prog(fr, k.here + 30, 12)}><line x1={W7.cx} y1={W7.cy} x2={W7.cx + W7.R} y2={W7.cy} stroke={INK} strokeWidth={5} /><text x={W7.cx + 20} y={W7.cy - 14} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, fill: INK}} stroke="#fffdf8" strokeWidth={7} paintOrder="stroke">radius 10 m</text></g>
				<g opacity={prog(fr, k.here + 90, 12)}><line x1={W7.cx - W7.R - 50} x2={W7.cx - W7.R - 50} y1={wheelY(W7.cy, W7.R, 0)} y2={W7.cy} stroke={CR.stroke} strokeWidth={6} /><text x={W7.cx - W7.R - 40} y={W7.cy + 0.6 * W7.R} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, fill: CR.ink}} stroke="#fffdf8" strokeWidth={7} paintOrder="stroke">centre 12 m</text></g>
				<circle cx={sx} cy={sy} r={26} fill="none" stroke={KR.stroke} strokeWidth={6} opacity={prog(fr, k.bottom, 10) * (1 - prog(fr, k.wave, 10))} />
				<circle cx={sx} cy={sy} r={10} fill={INK} stroke="#fffdf8" strokeWidth={3} />
				{proj > 0.01 ? <g opacity={proj}><line x1={sx} y1={sy} x2={gx} y2={gy} stroke={GREY} strokeWidth={3} strokeDasharray="10 8" /></g> : null}
			</svg>
			<StudioPlot x={G7.x} y={G7.y} width={G7.w} height={G7.h} window={WWIN} xTicks={[10, 20, 30, 40, 50, 60]} yTicks={[5, 10, 15, 20]} xLabel="t (seconds)" yLabel="h (m)" at={-30}>
				{mm => <>
					{(() => {const o = prog(fr, k.midline, 12), [a, y] = mm.p(0, 12), [b] = mm.p(60, 12); return o > 0.01 ? <g opacity={o}><line x1={a} x2={b} y1={y} y2={y} stroke={CR.stroke} strokeWidth={5} strokeDasharray="16 10" /><Lb at={[b + 6, y + 10]} o={1} anchor="start" color={CR.ink} size={30}>12</Lb></g> : null;})()}
					<g clipPath={mm.clip}><path d={fnPath(mm, hF, 0, Math.min(60, t), 400)} stroke={INK} strokeWidth={7} fill="none" /></g>
					{(() => {const o = prog(fr, k.amp, 12); return o > 0.01 ? <g opacity={o}><line x1={mm.p(30, 0)[0]} x2={mm.p(30, 0)[0]} y1={mm.p(0, 12)[1]} y2={mm.p(0, 22)[1]} stroke={KR.stroke} strokeWidth={10} strokeLinecap="round" /><Lb at={[mm.p(30, 0)[0] + 18, mm.p(0, 17)[1]]} o={1} anchor="start" color={KR.ink} size={32}>10</Lb></g> : null;})()}
					<HBracket x0={mm.p(0, 0)[0]} x1={mm.p(60, 0)[0]} y={mm.p(0, 24)[1]} o={prog(fr, k.period, 12)} color={AR.stroke} label="period 60 s: a = 2π ÷ 60 = π/30" size={32} />
					<circle cx={mm.p(tt, hF(tt))[0]} cy={mm.p(tt, hF(tt))[1]} r={12} fill={INK} stroke="#fffdf8" strokeWidth={4} opacity={prog(fr, k.as, 10)} />
					<Ring at={mm.p(30, 22)} o={prog(fr, k.top, 10)} r={22} color={GREEN} />
				</>}
			</StudioPlot>
			<SlotEq x={760} y={96} at={k.midline} k={{at: k.thirty2, v: '−10'}} a={{at: k.thirty1, v: 'π/30'}} c={{at: k.midline, v: '12'}} size={40} />
			<NegCosThumb at={k.starts} />
			<HandTag x={370} y={830} text="starts at the bottom: −cos" at={k.starts + 10} size={34} color={INK} />
			<AnswerBox x={1030} y={590} at={k.thirty2 + 10} size={36}>h(t) = 12 − 10cos(πt/30)</AnswerBox>
			<Chip x={1030} y={676} at={k.thirty2 + 40} size={30} color={GREY}>k = −10: reflected cos; amplitude 10</Chip>
			<Hand x={1030} y={520} at={k.top} size={32} color={GREEN} w={560}>t = 30: cos π = −1, h = 12 + 10 = 22</Hand>
			<HandTag x={60} y={790} text="turning → wave" at={k.wave} out={k.starts - 6} size={38} color={INK} />
			<ReadStrip x={G7.x} y={830} w={G7.w} cells={[{label: 'time t', text: tt.toFixed(1), unit: 's', color: AR.ink}, {label: 'cabin height h', text: hF(tt).toFixed(1), unit: 'm'}]} />
		</>
	);
};
const NegCosThumb: React.FC<{at: number}> = ({at}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o < 0.01) return null;
	const X = (v: number) => 20 + (v / (2 * PI)) * 240, Y = (v: number) => 64 - v * 40;
	let d = ''; for (let i = 0; i <= 80; i++) {const v = (2 * PI * i) / 80; d += `${i ? 'L' : 'M'}${X(v).toFixed(1)},${Y(-Math.cos(v)).toFixed(1)}`;}
	return <svg width={290} height={140} style={{position: 'absolute', left: 60, top: 790, opacity: o, overflow: 'visible', background: '#fbf8f1', borderRadius: 14, border: '2px solid rgba(60,45,20,0.12)'}}>
		<line x1={10} x2={280} y1={64} y2={64} stroke={GREY} strokeWidth={2} />
		<path d={d} fill="none" stroke={GREY} strokeWidth={5} /><circle cx={X(0)} cy={Y(-1)} r={13} fill="none" stroke={INK} strokeWidth={4} />
		<text x={150} y={130} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28, fill: GREY}}>y = −cos x</text>
	</svg>;
};

// ---------- 8. an exact solve ----------
const W8 = {cx: 250, cy: 500, R: 185};
const G8 = {x: 470, y: 250, w: 760, h: 540};
export const S08: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K8;
	const t = kf(fr, [[k.on, 0], [k.on + 40, 20], [k.up + 10, 20], [k.down - 10, 40]]);
	const m = makePlot(G8.x, G8.y, G8.w, G8.h, WWIN);
	const [sx, sy] = seatAt(W8.cx, W8.cy, W8.R, -PI / 2 + (PI * t) / 30);
	const lv = prog(fr, k.when + 30, 12);
	return (
		<>
			<SceneHeading text="An exact solve: 17 m up" at={4} size={44} />
			<Wheel cx={W8.cx} cy={W8.cy} R={W8.R} turn={(PI * t) / 30} />
			<svg width={1920} height={1080} style={{position: 'absolute', left: 0, top: 0, overflow: 'visible'}}>
				<line x1={W8.cx - 1.3 * W8.R} x2={W8.cx + 1.3 * W8.R} y1={wheelY(W8.cy, W8.R, 17)} y2={wheelY(W8.cy, W8.R, 17)} stroke={KR.stroke} strokeWidth={5} strokeDasharray="14 9" opacity={lv} />
				<text x={W8.cx + 1.3 * W8.R} y={wheelY(W8.cy, W8.R, 17) - 12} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: KR.ink}} opacity={lv} stroke="#fffdf8" strokeWidth={7} paintOrder="stroke">17 m</text>
				<circle cx={sx} cy={sy} r={10} fill={INK} stroke="#fffdf8" strokeWidth={3} />
				<Arw from={[sx + 30, sy + 30]} to={[sx + 30, sy - 30]} o={prog(fr, k.on + 40, 10) * (1 - prog(fr, k.up + 10, 10))} color={INK} width={6} />
				<Arw from={[sx - 30, sy - 30]} to={[sx - 30, sy + 30]} o={prog(fr, k.down - 10, 10)} color={INK} width={6} />
			</svg>
			<StudioPlot x={G8.x} y={G8.y} width={G8.w} height={G8.h} window={WWIN} xTicks={[10, 20, 30, 40, 50, 60]} yTicks={[5, 10, 15, 20]} xLabel="t (s)" yLabel="h (m)" at={-30}>
				{mm => <>
					<g clipPath={mm.clip}><path d={fnPath(mm, hF, 0, 60, 400)} stroke={INK} strokeWidth={7} fill="none" /></g>
					{(() => {const [a, y] = mm.p(WWIN.x[0], 17), [b] = mm.p(WWIN.x[1], 17); return <line x1={a} x2={b} y1={y} y2={y} stroke={KR.stroke} strokeWidth={5} strokeDasharray="16 10" opacity={lv} />;})()}
					{[20, 40].map((X, i) => <g key={X} opacity={prog(fr, k.seconds + i * 8, 10)}><circle cx={mm.p(X, 17)[0]} cy={mm.p(X, 17)[1]} r={13} fill={INK} stroke="#fffdf8" strokeWidth={4} /><Lb at={[mm.p(X, 17)[0] + (i ? 30 : -30), mm.p(0, 17)[1] - 20]} o={1} size={34} color={GREEN}>{String(X)}</Lb></g>)}
					<circle cx={mm.p(t, hF(t))[0]} cy={mm.p(t, hF(t))[1]} r={11} fill="#2f6f88" stroke="#fffdf8" strokeWidth={4} opacity={prog(fr, k.on, 10)} />
				</>}
			</StudioPlot>
			<Task x={1270} y={150} w={610} at={-30} size={34}>When is h = 17 m, for 0 ≤ t ≤ 60?</Task>
			<Chip x={1270} y={262} at={k.when + 40} out={k.cos} size={30} color={KR.ink}>one turn, level inside: expect 2</Chip>
			<Row x={1270} y={330} at={k.twelve} size={38} small={30} dim={prog(fr, k.half, 12)}>12 − 10cos(πt/30) = 17</Row>
			<Row x={1270} y={392} at={k.half} size={38} small={30} dim={prog(fr, k.cos, 12)}>cos(πt/30) = −½</Row>
			<Row x={1270} y={454} at={k.cos + 30} size={38} small={30} dim={prog(fr, k.seconds, 12)}>πt/30 = 2π/3 or 4π/3</Row>
			<AnswerBox x={1270} y={530} at={k.seconds} size={40}>t = 20 s or t = 40 s</AnswerBox>
			<div style={{position: 'absolute', left: 1270, top: 630}}><Slip x={0} y={0} w={600} at={k.seconds + 24} strikeAt={k.seconds + 36} size={34} caption="twice per turn: up and down">t = 20 s only</Slip></div>
			<HandTag x={1290} y={800} text="up, then down" at={k.up} size={40} color={INK} />
			<ReadStrip x={G8.x} y={850} w={G8.w} cells={[{label: 'time t', text: t.toFixed(1), unit: 's', color: AR.ink}, {label: 'cabin height h', text: hF(t).toFixed(1), unit: 'm'}]} />
		</>
	);
};

// ---------- 9. memory aid ----------
const Icon: React.FC<{fn: (v: number) => number}> = ({fn}) => {
	let d = ''; for (let i = 0; i <= 50; i++) {const v = (2 * PI * i) / 50; d += `${i ? 'L' : 'M'}${(10 + (v / (2 * PI)) * 120).toFixed(1)},${(40 - fn(v) * 26).toFixed(1)}`;}
	return <svg width={140} height={80} style={{overflow: 'visible', verticalAlign: 'middle'}}><line x1={6} x2={134} y1={40} y2={40} stroke={GREY} strokeWidth={2} /><path d={d} fill="none" stroke={INK} strokeWidth={4} /><circle cx={10} cy={40 - fn(0) * 26} r={8} fill={GOOD.stroke} /></svg>;
};
/** The framed memory card "Middle, half, period, start." */
export const T03Card: React.FC<{x: number; y: number; scale?: number; c0: number; c1: number; c2: number; c3: number; c4: number}> = ({x, y, scale = 1, c0, c1, c2, c3, c4}) => {
	const f = useCurrentFrame();
	const o = (a: number) => prog(f, a, 12);
	return <div style={{position: 'absolute', left: x, top: y, width: 1460, height: 680, transform: `scale(${scale})`, transformOrigin: 'top left'}}>
		<FramedCard x={0} y={0} w={1460} h={680} at={-30} />
		<div style={{position: 'absolute', left: 60, top: 36, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46, color: GOOD.ink}}>Memory aid</div>
		<PlateImg plate={TIDE} x={70} y={120} w={110} />
		<div style={{position: 'absolute', left: 230, top: 110, opacity: o(c0), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 64, color: INK}}>Middle, half, period, start.</div>
		<div style={{position: 'absolute', left: 240, top: 214, opacity: o(c1), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40}}><Cc>middle: c = (max + min) ÷ 2</Cc></div>
		<div style={{position: 'absolute', left: 240, top: 284, opacity: o(c2), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40}}><Kc>half: |k| = (max − min) ÷ 2</Kc></div>
		<div style={{position: 'absolute', left: 240, top: 354, opacity: o(c3), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40}}><Ac>period: a = 2π ÷ period</Ac></div>
		<div style={{position: 'absolute', left: 240, top: 424, opacity: o(c4), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: INK}}>start: max → cos, min → −cos, middle rising → sin</div>
		<div style={{position: 'absolute', left: 240, top: 500, opacity: o(c4 + 10), display: 'flex', gap: 60, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color: GREY}}>
			<span><Icon fn={Math.cos} /> cos</span><span><Icon fn={v => -Math.cos(v)} /> −cos</span><span><Icon fn={Math.sin} /> sin</span>
		</div>
	</div>;
};
export const S09: React.FC = () => {
	const k = K9;
	return (
		<>
			<SceneHeading text="A checklist for a sinusoidal model" at={4} size={44} />
			<T03Card x={230} y={180} c0={k.middle} c1={k.mid} c2={k.amp} c3={k.a} c4={k.and} />
			<Hand x={230} y={880} at={k.here} size={30} color={GREY}><Gy>Assumes a smooth sinusoid with consecutive extremes. Some sources write a cos(bt) + d.</Gy></Hand>
		</>
	);
};
export {Ring};
