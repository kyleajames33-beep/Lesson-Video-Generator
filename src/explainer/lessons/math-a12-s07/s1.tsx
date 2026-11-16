// Scenes 1 to 5: s06's flat density parked as a card; a bus every ten minutes, 200 stored arrivals and their waits
// levelling in a histogram; equally likely means flat (a window on a hump, then on a flat line); the forced height
// 1/(b − a) (a height dial); the probability as the fraction covered (g01 board); a density taller than 1.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, prog} from '../../kit';
import {ArrivalDots, ClassHistogram, FrameSvg, LiveReadoutBoard, SceneHeading, fnPath, integrate, kf, makePlot, paceArrival, regionPath, smooth} from '../../math/studio';
import type {StudioPace} from '../../math/studio';
import {S06FinalFrame} from '../math-a12-s06/s3';
import {K1, K2, K3, K4, K5} from './cuemap';
import {AMB, AMBER_FILL, ARRIVE, DATA_R, AnswerBox, BUS, BoxCard, BusStop, Chip, DENS, GREY, Hand, INK, PARK, ParkedCard, RED, RiseBracket, Row, Slip, Task, UniformPlot, WAITS, hump, ticks} from './parts';

// ---------- the density axes shared by scenes 1 (end) to 3 ----------
export const G2 = {x: 40, y: 180, w: 1100, h: 760} as const;
export const W2 = {x: [-3, 13] as [number, number], y: [0, 0.2] as [number, number]};
export const M2 = makePlot(G2.x, G2.y, G2.w, G2.h, W2);
export const BusRight: React.FC<{at?: number; out?: number}> = ({at, out}) => <BusStop x={1720} base={900} h={330} at={at} out={out} />;
/** A "?" on the y axis of the scene 2 axes. */
export const AxisQ: React.FC<{o: number}> = ({o}) => (o <= 0.01 ? null : <div style={{position: 'absolute', left: M2.pf(-3, 0)[0] - 4, top: M2.pf(0, 0.1)[1] - 40, opacity: o, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 56, color: DENS.ink}}>?</div>);
const xT = ticks([0, 2, 4, 6, 8, 10]);

// ---------- 1. hook: a bus every ten minutes ----------
const STRIP = {x: 290, y: 640, w: 740} as const;
const HIST = {x: 1170, y: 330, w: 710, h: 520} as const;
export const S01: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K1;
	const sh = smooth(prog(fr, k.soon, 30));
	const s = 1 - sh * (1 - PARK.w / 1920);
	const s06o = 1 - prog(fr, k.soon + 22, 10);
	const pace: StudioPace = {at: k.wait, slow: 5, every: 30, until: k.classes + 120};
	const fall = 18;
	const landed = WAITS.filter((_, i) => fr >= paceArrival(i, 200, pace) + fall).length;
	const inBars = new Array(10).fill(0); WAITS.forEach((w, i) => {if (fr >= paceArrival(i, 200, pace) + fall + 20) inBars[Math.floor(w)]++;});
	const HM = makePlot(HIST.x, HIST.y, HIST.w, HIST.h, {x: [0, 10], y: [0, 32]});
	const away = prog(fr, k.what + 10, 24);
	return (
		<>
			{s06o > 0.01 ? <div style={{position: 'absolute', left: 0, top: 0, width: 1920, height: 1080, opacity: s06o, transform: `translate(${PARK.x * sh}px, ${PARK.y * sh}px) scale(${s})`, transformOrigin: '0 0'}}><S06FinalFrame /></div> : null}
			<ParkedCard o={prog(fr, k.soon + 22, 10)} />
			<SceneHeading text="How does a continuous uniform model work?" at={k.soon + 10} size={50} />
			{away < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - away}}>
				<BusStop x={60} base={STRIP.y} h={420} at={k.first} />
				<ArrivalDots x={STRIP.x} y={STRIP.y} width={STRIP.w} range={[0, 30]} times={ARRIVE} pace={pace} fall={fall} ticks={ticks([0, 10, 20, 30])} label="time (min)" wait={{period: 10, sprite: {plate: BUS, w: 230}, text: w => `wait ${w.toFixed(1)} min`}} at={k.first} />
				<ClassHistogram x={HIST.x} y={HIST.y} width={HIST.w} height={HIST.h} edges={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} yMax={32} xTicks={[0, 2, 4, 6, 8, 10]} yTicks={[10, 20, 30]} xLabel="wait (min)" yLabel=""
					drop={{values: WAITS, arriveAt: i => paceArrival(i, 200, pace) + fall, hold: 4, fall: 16}} countLabels={false} model={{value: 20, at: k.level}} at={k.bus} />
				<FrameSvg>{inBars.map((c, j) => {const [px, py] = HM.pf(j + 0.5, 0); return c > 0 ? <text key={j} x={px} y={py - 14} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: DATA_R.ink}} stroke="#fffdf8" strokeWidth={6} paintOrder="stroke">{c}</text> : null;})}</FrameSvg>
				<LiveReadoutBoard x={STRIP.x} y={830} width={440} at={k.sim} rows={[{label: 'arrivals', value: landed, text: `${landed} of 200`, role: 'a'}]} />
				<Hand x={1250} y={872} at={k.level} size={40} color={DENS.ink}>roughly level (model: 20 each)</Hand>
				<Row x={1130} y={290} at={k.bus} size={30}>arrivals</Row>
				<Hand x={1250} y={916} at={k.level + 20} size={28} color={GREY}>illustrative sample</Hand>
				<Hand x={770} y={846} at={k.any} size={40} color={AMB.ink}>any wait 0 to 10</Hand>
				<Hand x={770} y={900} at={k.stretch} size={32} color={GREY}>same width: no more likely</Hand>
			</div> : null}
			{away > 0 ? <div style={{position: 'absolute', inset: 0, opacity: away}}>
				<UniformPlot {...G2} win={W2} a={0} b={10} c={0.1} draw={0} zeros={0} xTicks={xT} xLabel="T (min)" yLabel="density" />
				<AxisQ o={1} />
				<BusRight />
			</div> : null}
		</>
	);
};

// ---------- 2. equally likely means flat ----------
const wideBand = (a: number, b: number, o: number, label: string) => {
	if (o <= 0.01) return null;
	const [x0, top] = M2.pf(a, 0.2), [x1, base] = M2.pf(b, 0);
	return <g opacity={o}>
		<rect x={x0} y={top} width={x1 - x0} height={base - top} fill={AMBER_FILL} opacity={0.55} />
		<path d={`M${x0},${base + 8} V${base + 22} H${x1} V${base + 8}`} fill="none" stroke={AMB.stroke} strokeWidth={5} />
		<text x={(x0 + x1) / 2} y={top + 44} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: AMB.ink}}>{label}</text>
	</g>;
};
export const S02: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K2;
	const bands = prog(fr, k.eight, 14) * (1 - prog(fr, k.change - 10, 14));
	const humpO = prog(fr, k.change, 16) * (1 - prog(fr, k.so, 16));
	const flat = smooth(prog(fr, k.so + 6, 40));
	const zeros = prog(fr, k.outside, 14);
	const onHump = fr < k.so + 6;
	const c = onHump ? kf(fr, [[k.change, 2], [k.change + 50, 5], [k.change + 100, 9]]) : kf(fr, [[k.so + 40, 2], [k.flat - 30, 5], [k.flat + 40, 9]]);
	const winO = onHump ? prog(fr, k.change + 6, 12) : prog(fr, k.so + 40, 12) * (1 - prog(fr, k.outside, 14));
	const fn = onHump ? hump : (t: number) => (t < 0 || t > 10 ? 0 : 0.1);
	const area = integrate(fn, c - 1, c + 1, 120);
	return (
		<>
			<SceneHeading text="Equally likely means flat" at={4} size={48} />
			<ParkedCard />
			<UniformPlot {...G2} win={W2} a={0} b={10} c={0.1} draw={flat} zeros={zeros} xTicks={xT} yTicks={flat > 0.5 ? [{value: 0.1, label: 'c'}] : []} xLabel="T (min)" yLabel="density">
				{m => <>
					{winO > 0.01 ? <path d={regionPath(m, fn, c - 1, c + 1)} fill={AMBER_FILL} stroke={AMB.stroke} strokeWidth={4} opacity={winO} /> : null}
					{humpO > 0.01 ? <path d={fnPath(m, hump, -3, 13)} fill="none" stroke={GREY} strokeWidth={5} strokeDasharray="14 10" opacity={humpO} /> : null}
				</>}
			</UniformPlot>
			<AxisQ o={1 - prog(fr, k.so + 20, 12)} />
			<FrameSvg>{wideBand(1, 3, bands, '1 to 3')}{wideBand(6, 8, bands, '6 to 8')}</FrameSvg>
			<Hand x={M2.pf(3.6, 0)[0]} y={M2.pf(0, 0.17)[1]} at={k.eight + 10} out={k.change - 10} size={44} color={AMB.ink}>= same probability</Hand>
			<Hand x={M2.pf(6.6, 0)[0]} y={M2.pf(0, 0.185)[1]} at={k.change + 60} out={k.so} size={42} color={GREY}>a hump fails</Hand>
			<LiveReadoutBoard x={1180} y={360} width={480} at={k.change} out={k.outside} rows={[
				{label: 'window width', value: 2, digits: 0},
				{label: onHump ? 'area under the hump' : 'area under the flat line', value: area, digits: 3, role: 'k', ...(onHump ? {} : {text: '2c'})},
			]} />
			<Hand x={1180} y={620} at={k.so + 50} out={k.outside} size={44} color={AMB.ink} w={500}>same width, same area</Hand>
			<Row x={M2.pf(0.4, 0)[0]} y={M2.pf(0, 0.17)[1]} at={k.outside} size={44} color={DENS.ink}>f(t) = c for 0 ≤ t ≤ 10, 0 elsewhere</Row>
			<Hand x={M2.pf(-2.8, 0)[0]} y={M2.pf(0, 0)[1] - 66} at={k.because} size={32} color={GREY}>no wait &lt; 0</Hand>
			<Hand x={M2.pf(10.2, 0)[0]} y={M2.pf(0, 0)[1] - 66} at={k.because + 20} size={32} color={GREY}>no wait &gt; 10</Hand>
			<BusRight />
		</>
	);
};

// ---------- 3. the height is forced ----------
const colLabels = (o: number) => (o <= 0.01 ? null : <g opacity={o}>
	{Array.from({length: 10}, (_, i) => {const [x0, top] = M2.pf(i, 0.1), [x1, base] = M2.pf(i + 1, 0); return <g key={i}>
		{i ? <line x1={x0} x2={x0} y1={top} y2={base} stroke={DENS.stroke} strokeWidth={3} strokeDasharray="6 6" /> : null}
		<text x={(x0 + x1) / 2} y={top + 40} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, fill: DENS.ink}}>1/10</text>
	</g>;})}
</g>);
export const S03: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K3;
	const fill = prog(fr, k.now + 10, 16);
	const c = kf(fr, [[0, 0.1], [k.here - 10, 0.1], [k.here + 10, 0.05], [k.ten, 0.05], [k.ten + 24, 0.08], [k.tenth, 0.1]]);
	const gen = prog(fr, k.same, 18);
	const br = prog(fr, k.here, 14) * (1 - gen);
	const [xa, yc] = M2.pf(0, c), [xb, y0] = M2.pf(10, 0);
	return (
		<>
			<SceneHeading text="The height is forced" at={4} size={48} />
			<ParkedCard o={1 - prog(fr, k.forced + 10, 14)} />
			{gen < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - gen}}>
				<UniformPlot {...G2} win={W2} a={0} b={10} c={c} fill={fill} xTicks={xT} yTicks={fr >= k.tenth ? [{value: 0.1, label: '1/10'}] : [{value: c, label: 'c'}]} xLabel="T (min)" yLabel="density" />
				<FrameSvg style={{opacity: br}}>
					<path d={`M${xa},${y0 - 60} H${xb}`} stroke={AMB.stroke} strokeWidth={5} markerEnd="" />
					<path d={`M${xa},${y0 - 72} v24 M${xb},${y0 - 72} v24`} stroke={AMB.stroke} strokeWidth={5} />
					<text x={(xa + xb) / 2} y={y0 - 80} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, fill: AMB.ink}}>width 10</text>
					<path d={`M${xb + 16},${yc} h14 V${y0} h-14`} fill="none" stroke={AMB.stroke} strokeWidth={5} />
					<text x={xb + 40} y={(yc + y0) / 2 + 12} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, fill: AMB.ink}}>height</text>
				</FrameSvg>
				<FrameSvg>{colLabels(prog(fr, k.means, 16))}</FrameSvg>
			</div> : null}
			{gen > 0 ? <div style={{position: 'absolute', inset: 0, opacity: gen}}>
				<UniformPlot {...G2} win={W2} a={2} b={8} c={0.12} fill={1} xTicks={ticks([2, 8], ['a', 'b'])} yTicks={[]} xLabel="x" yLabel="f(x)" />
				<FrameSvg>{(() => {const [p0, t] = M2.pf(2, 0.12), [p1, b] = M2.pf(8, 0); return <g>
					<path d={`M${p0},${b - 60} H${p1} M${p0},${b - 72} v24 M${p1},${b - 72} v24`} stroke={AMB.stroke} strokeWidth={5} fill="none" />
					<text x={(p0 + p1) / 2} y={b - 80} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, fill: AMB.ink}}>width b − a</text>
					<path d={`M${p1 + 16},${t} h14 V${b} h-14`} fill="none" stroke={AMB.stroke} strokeWidth={5} />
					<text x={p1 + 40} y={(t + b) / 2 + 12} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, fill: AMB.ink}}>{fr >= k.over ? 'height 1/(b − a)' : 'height ?'}</text>
				</g>;})()}</FrameSvg>
			</div> : null}
			<Row x={1180} y={250} at={k.total} out={k.same} size={44} dim={prog(fr, k.ten, 12) * 0.3}>total area = 1</Row>
			<Row x={1180} y={330} at={k.ten} out={k.same} size={52}>10 × c = 1</Row>
			<LiveReadoutBoard x={1180} y={420} width={520} at={k.here} out={k.same} rows={[
				{label: 'height', value: c, digits: 3, role: 'b'},
				{label: 'area = 10 × height', value: 10 * c, digits: 2, role: 'k'},
			]} />
			<AnswerBox x={1180} y={680} at={k.tenth} out={k.same} size={52}>c = 1/10</AnswerBox>
			<Hand x={1180} y={790} at={k.each} out={k.same} size={42} color={DENS.ink}>1/10 per minute</Hand>
			<Row x={1180} y={330} at={k.rect} size={52}>c(b − a) = 1</Row>
			<AnswerBox x={1180} y={430} at={k.over} size={46}>{'f(x) = 1/(b − a)\nfor a ≤ x ≤ b\nf(x) = 0 elsewhere'}</AnswerBox>
			<Hand x={1180} y={680} at={k.forced} size={46} color={INK}>forced, not chosen</Hand>
			<BusRight out={k.same} />
		</>
	);
};

// ---------- 4. probability is the fraction covered ----------
const G4 = {x: 40, y: 300, w: 1000, h: 620} as const;
const W4 = {x: [-1, 13] as [number, number], y: [0, 0.14] as [number, number]};
const M4 = makePlot(G4.x, G4.y, G4.w, G4.h, W4);
const Gd = {x: 1080, y: 490, w: 800, h: 370} as const;
const Wd = {x: [0, 12] as [number, number], y: [0, 0.18] as [number, number]};
const Gone: React.FC<{at: number; children: React.ReactNode}> = ({at, children}) => {
	const o = 1 - prog(useCurrentFrame(), at, 14);
	return o <= 0.01 ? null : <div style={{position: 'absolute', inset: 0, opacity: o}}>{children}</div>;
};
export const S04: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K4;
	const dx = -3 * smooth(prog(fr, k.width - 10, 36));
	const shades = [{from: 0, to: 4, o: prog(fr, k.area, 14), dim: prog(fr, k.between, 14) * (1 - prog(fr, k.width - 10, 14))}, {from: 3, to: 7, o: prog(fr, k.between + 20, 14), dx}];
	const second = prog(fr, k.if, 14);
	return (
		<>
			<Task x={96} y={150} w={960} at={-30} size={44}>Find P(T &lt; 4) and P(3 &lt; T &lt; 7).</Task>
			<BoxCard x={1080} y={150} w={800} at={-30} size={38} title="given"><div style={{fontWeight: 800}}>T uniform on 0 ≤ t ≤ 10</div><div style={{color: DENS.ink, fontWeight: 800}}>f(t) = 1/10</div></BoxCard>
			<BoxCard x={1080} y={320} w={800} at={-30} size={38} title="the model" edge={AMB.stroke}><div style={{fontWeight: 800}}>P = (width covered) ÷ (b − a)</div></BoxCard>
			<UniformPlot {...G4} win={W4} a={0} b={10} c={0.1} fill={0.6} shades={shades} xTicks={ticks([0, 2, 3, 4, 6, 7, 8, 10])} yTicks={[{value: 0.1, label: '1/10'}]} xLabel="t (min)" yLabel="f(t)" />
			<BusStop x={M4.pf(11.3, 0)[0]} base={M4.pf(0, 0)[1]} h={300} />
			<Hand x={M4.pf(0.3, 0)[0]} y={M4.pf(0, 0.128)[1]} at={k.width} size={42} color={AMB.ink}>only the width matters</Hand>
			<Gone at={k.same}>
				<Row x={1080} y={470} at={k.area} size={44} dim={prog(fr, k.between, 12) * 0.4}>P(T &lt; 4) = 4 × 1/10</Row>
				<AnswerBox x={1080} y={540} at={k.four1} size={44}>P(T &lt; 4) = 0.4</AnswerBox>
				<Row x={1080} y={650} at={k.between + 20} size={44}>P(3 &lt; T &lt; 7) = (7 − 3) × 1/10</Row>
				<AnswerBox x={1080} y={720} at={k.four2} size={44}>P(3 &lt; T &lt; 7) = 0.4</AnswerBox>
				<Slip x={1080} y={815} at={k.four2 + 50} strikeAt={k.four2 + 74} size={36} caption="used the end, not the width">P(3 &lt; T &lt; 7) = 7/10</Slip>
			</Gone>
			{second > 0.01 ? <div style={{position: 'absolute', inset: 0, opacity: second}}>
				<Row x={1080} y={440} at={k.if} size={38}>X uniform on 2 ≤ x ≤ 10</Row>
				<UniformPlot {...Gd} win={Wd} a={2} b={10} c={0.125} fill={0.6} shades={[{from: 4, to: 7, o: prog(fr, k.eighths - 20, 14)}]} xTicks={ticks([2, 4, 7, 10])} yTicks={[{value: 0.125, label: '1/8'}]} xLabel="x" yLabel="f(x)">
					{m => {const [p0, , ] = m.p(2, 0), [p1, b] = m.p(10, 0), o = prog(fr, k.whole, 14); return <g opacity={o}>
						<path d={`M${p0},${b - 40} H${p1} M${p0},${b - 50} v20 M${p1},${b - 50} v20`} stroke={AMB.stroke} strokeWidth={4} fill="none" />
						<text x={(p0 + p1) / 2} y={b - 62} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, fill: AMB.ink}}>whole width 8</text>
					</g>;}}
				</UniformPlot>
				<AnswerBox x={1080} y={870} at={k.eighths} size={40}>P(4 &lt; X &lt; 7) = (7 − 4)/8 = 3/8</AnswerBox>
			</div> : null}
		</>
	);
};

// ---------- 5. a density taller than one ----------
const G5 = {x: 40, y: 170, w: 1100, h: 780} as const;
const W5 = {x: [-0.5, 1.5] as [number, number], y: [0, 2.5] as [number, number]};
export const S05: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K5;
	const wd = kf(fr, [[0, 1], [k.half, 1], [k.two, 0.5]]);
	const h = 1 / wd;
	return (
		<>
			<SceneHeading text="A density taller than 1" at={4} size={48} />
			<UniformPlot {...G5} win={W5} a={0} b={wd} c={h} fill={1} xTicks={ticks([0, 0.5, 1])} yTicks={ticks([1, 2])} xLabel="x" yLabel="f(x)" at={-30}>
				{m => {const [x0, y1] = m.p(-0.5, 1), [x1] = m.p(1.5, 1); return <>
					<line x1={x0} x2={x1} y1={y1} y2={y1} stroke={GREY} strokeWidth={4} strokeDasharray="14 10" />
					{(() => {const o = prog(fr, k.two, 14), [bx, ty] = m.p(wd + 0.03, h), [, by] = m.p(0, 0), [, ly] = m.p(0, 1.6); return o > 0.01 ? <g opacity={o}><path d={`M${bx},${by} h12 V${ty} h-12`} fill="none" stroke={AMB.stroke} strokeWidth={5} /><text x={bx + 26} y={ly} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, fill: AMB.ink}} stroke="#fffdf8" strokeWidth={7} paintOrder="stroke">height 2 = 1/0.5</text></g> : null;})()}
				</>;}}
			</UniformPlot>
			<Chip x={1180} y={170} at={k.here} size={34} color={GREY}>bus: width 10, height 1/10</Chip>
			<LiveReadoutBoard x={1180} y={270} width={560} at={k.what} rows={[
				{label: 'width', value: wd, digits: 2},
				{label: 'height', value: h, digits: 2, role: 'b'},
				{label: 'area = width × height', value: wd * h, digits: 2, role: 'k'},
			]} />
			<Chip x={1180} y={620} at={k.fine} size={40} color={DENS.ink}>f(x) = 2 &gt; 1: allowed</Chip>
			<Hand x={1180} y={700} at={k.fine + 20} size={40} color={DENS.ink}>taller than 1: fine</Hand>
			<Slip x={1180} y={760} at={k.isnt} strikeAt={k.prob} size={32} caption="only area is a probability">a density can&apos;t be more than 1</Slip>
			<Row x={1180} y={888} at={k.one} size={48}>area = 2 × 0.5 = 1</Row>
		</>
	);
};
export {INK, RED};
