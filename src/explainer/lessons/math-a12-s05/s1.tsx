// Scenes 1 to 5: s04's x²/9 becomes a parcel tracker (equal strips hold unequal probability; simulated arrivals pile
// up late); rise ÷ width → the gradient, so f = F′ (the paired view); s04's histogram rescaled to a density (bars past
// 1, areas unchanged); probability as area under f (1/3 again); the two properties of a density.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, prog} from '../../kit';
import {ArrivalDots, ClassHistogram, FrameSvg, LiveReadoutBoard, SceneHeading, TrackerFill, kf, makePlot, smooth} from '../../math/studio';
import {S04FinalFrame} from '../math-a12-s04/s3';
import {K1, K2, K3, K4, K5} from './cuemap';
import {ARRIVALS as ARR, AREA, AnswerBox, Blocks, CDF, Chip, DATA_R, DENS, DENS5, EDGES, Ev, F9, F9Plot, Framed, GOOD, GREY, Hand, INK, Int, Pair, Parcel, REL5, RiseBracket, Row, Van, f9, hourTicks} from './parts';

const winF = {x: [-1, 4] as [number, number], y: [-0.2, 1.2] as [number, number]};
const winf = {x: [-1, 4] as [number, number], y: [-0.1, 0.8] as [number, number]};
const fTicks = [0.2, 0.4, 0.6].map(v => ({value: v, label: String(v)}));

// ---------- 1. hook: equal strips, unequal probability ----------
const G1 = {x: 760, y: 150, w: 1100, h: 640} as const;
const M1 = makePlot(G1.x, G1.y, G1.w, G1.h, winF);
export const S01: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K1;
	const b = prog(fr, k.parcel - 14, 22);
	const ride = kf(fr, [[0, 0], [k.f, 0], [k.steeply + 20, 3]]);
	const tg = 1 - prog(fr, k.compare, 14);
	const st = prog(fr, k.compare, 14);
	return (
		<>
			{b < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - b}}><S04FinalFrame /></div> : null}
			{b > 0 ? <div style={{position: 'absolute', inset: 0, opacity: b}}>
				<SceneHeading text="How does a density give probabilities?" at={k.parcel} size={52} />
				<Van x={96} y={190} w={520} />
				<Parcel x={250} y={470} w={260} />
				<Hand x={96} y={612} at={k.parcel + 20} size={42} color={INK}>delivery: between 9 and 12</Hand>
				<Hand x={96} y={668} at={k.x} size={36} color={GREY} w={600}>X: arrival time, hours after 9</Hand>
				<TrackerFill x={96} y={740} width={420} value={F9(ride)} at={k.f} digits={2} />
				<F9Plot {...G1} xTicks={hourTicks} yLabel="F(x): chance it has arrived" tangents={[{x: 0.5, o: tg}, {x: 2.5, o: tg}]}>
					{m => <>
						{st > 0 ? [0.5, 2.5].map(a => {const [x0, t] = m.p(a, 1.2), [x1, bt] = m.p(a + 0.1, -0.2); return <rect key={a} x={x0} y={t} width={x1 - x0} height={bt - t} fill="#f8e8c8" opacity={0.9 * st} />;}) : null}
						{fr >= k.f && fr < k.compare ? (() => {const [px, py] = m.p(ride, F9(ride)); return <circle cx={px} cy={py} r={13} fill={CDF} stroke="#fffdf8" strokeWidth={5} />;})() : null}
						<RiseBracket m={m} x={0.6} y0={F9(0.5)} y1={F9(0.6) + 0.04} label="≈ 0.012" o={prog(fr, k.r1, 12)} />
						<RiseBracket m={m} x={2.6} y0={F9(2.5)} y1={F9(2.6)} label="≈ 0.057" o={prog(fr, k.r2, 12)} />
					</>}
				</F9Plot>
				<Chip x={M1.pf(-0.8, 0)[0]} y={M1.pf(0, 1.12)[1]} at={k.five} size={40} color={AREA.ink}>0.057 ÷ 0.012 ≈ 4.6</Chip>
				<Hand x={M1.pf(0.1, 0)[0]} y={M1.pf(0, 0.88)[1]} at={k.compare} size={38} color={AREA.ink}>two strips, each a tenth of an hour</Hand>
				<ArrivalDots x={M1.box.left + G1.x} y={950} width={M1.box.width} range={winF.x} times={ARR} pace={{at: k.closely - 6, slow: 0, until: k.closely + 70}} tallies={{edges: [0, 1, 2, 3], labelY: 900}} at={k.closely - 6} />
				<Hand x={96} y={880} at={k.closely} size={36} color={GREY}>simulated arrivals (90)</Hand>
				<Hand x={1560} y={966} at={k.closely + 50} size={44} color={AREA.ink}>packed late</Hand>
			</div> : null}
		</>
	);
};

// ---------- 2. the density is the gradient of F ----------
const PV = {x: 760, y: 150, w: 1100, hTop: 400, hBot: 420} as const;
const PT = makePlot(PV.x, PV.y, PV.w, PV.hTop, winF), PB = makePlot(PV.x, PV.y + PV.hTop + 14, PV.w, PV.hBot, winf);
export const S02: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K2;
	const h = fr < k.thinner ? 0.1 : 10 ** (-1 - smooth(prog(fr, k.thinner, 40, t => t)));
	const rise = F9(1.5 + h) - F9(1.5);
	const sp = prog(fr, k.here - 10, 22);
	const tan = prog(fr, k.becomes, 14);
	const drawf = kf(fr, [[0, -1], [k.two, -1], [k.zero + 30, 4]]);
	const con = prog(fr, k.hour, 14);
	return (
		<>
			<SceneHeading text="Rise ÷ width → the density f" at={4} size={48} />
			<Van x={96} y={160} w={300} />
			<Parcel x={420} y={200} w={160} />
			<LiveReadoutBoard x={96} y={330} width={560} at={-30} out={k.here} rows={[
				{label: 'strip width (hours)', value: h, format: v => String(Number(v.toFixed(3)))},
				{label: 'rise in F', value: rise, digits: 4, role: 'k'},
				{label: 'rise ÷ width (per hour)', value: rise / h, digits: 3, role: 'gradient'},
			]} />
			<Row x={96} y={330} at={k.here} size={44} color={DENS.ink}>f(x) = 2x/9 on [0, 3]</Row>
			<Row x={96} y={404} at={k.zero} size={40} color={DENS.ink}>f(x) = 0 elsewhere</Row>
			<Hand x={96} y={480} at={k.hour} size={42} color={DENS.ink}>f(1.5) = 1/3 per hour</Hand>
			<AnswerBox x={96} y={656} at={k.define} size={52}>f(x) = F′(x)</AnswerBox>
			<Hand x={96} y={750} at={k.define + 20} size={36} color={INK} w={600}>the probability density function (PDF)</Hand>
			<Chip x={96} y={830} at={k.isnt} size={34} color={DENS.ink}>density = probability per unit of x</Chip>
			<Hand x={96} y={916} at={k.rope} size={36} color={GREY}>like a rope: grams per metre</Hand>
			{sp < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sp}}>
				<F9Plot x={PV.x} y={PV.y} w={PV.w} h={640} xTicks={hourTicks} yLabel="F(x): chance it has arrived">
					{m => {
						const [x0, t] = m.p(1.5, 1.2), [x1, bt] = m.p(1.5 + h, -0.2), s = 1 / 3, [ax, ay] = m.p(0.6, 0.25 - 0.9 * s), [bx, by] = m.p(2.4, 0.25 + 0.9 * s);
						return <>
							<rect x={x0} y={t} width={Math.max(3, x1 - x0)} height={bt - t} fill="#f8e8c8" opacity={0.9} />
							<RiseBracket m={m} x={1.5 + h} y0={F9(1.5)} y1={F9(1.5 + h)} />
							<line x1={ax} y1={ay} x2={bx} y2={by} stroke={INK} strokeWidth={4} strokeDasharray="12 8" opacity={tan} />
						</>;
					}}
				</F9Plot>
				<Hand x={1070} y={196} at={k.becomes} size={42} color={CDF}>rise ÷ width → gradient = 1/3</Hand>
			</div> : null}
			{sp > 0 ? <div style={{position: 'absolute', inset: 0, opacity: sp}}>
				<Pair {...PV} winTop={winF} winBot={winf} F={F9} f={f9} drawf={drawf} xTicks={hourTicks} yBotTicks={fTicks} topLabel="F(x)" botLabel="f(x): probability per hour" />
				<FrameSvg style={{opacity: con}}>
					{(() => {const [a, b] = PT.pf(1.5, 0.25), [, c] = PB.pf(1.5, 1 / 3); return <><line x1={a} x2={a} y1={b} y2={c} stroke={DENS.stroke} strokeWidth={4} strokeDasharray="10 8" /><circle cx={a} cy={b} r={11} fill={CDF} stroke="#fffdf8" strokeWidth={4} /><circle cx={a} cy={c} r={13} fill={DENS.stroke} stroke="#fffdf8" strokeWidth={4} /></>;})()}
				</FrameSvg>
				<Hand x={PB.pf(1.6, 0)[0]} y={PB.pf(0, 0.66)[1]} at={k.hour} size={40} color={DENS.ink}>per hour</Hand>
				<Hand x={PB.pf(0.1, 0)[0]} y={PB.pf(0, 0.7)[1]} at={k.high} size={36} color={GREY} w={420}>high f: values packed in near there</Hand>
			</div> : null}
		</>
	);
};

// ---------- 3. a density can be bigger than one ----------
export const S03: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K3;
	const scale = smooth(prog(fr, k.divide + 20, 40)), grow = smooth(prog(fr, k.heights + 10, 40));
	const yMax = 0.42 + (4.2 - 0.42) * scale;
	const h = REL5.map((r, i) => r + (DENS5[i] - r) * grow);
	const ticks = yMax < 1.2 ? [0.1, 0.2, 0.3, 0.4].map(v => ({value: v, label: v.toFixed(1)})) : [1, 2, 3, 4].map(v => ({value: v, label: String(v)}));
	const amb = prog(fr, k.area, 14);
	return (
		<>
			<SceneHeading text="A density can be bigger than 1" at={4} size={48} />
			<ClassHistogram x={40} y={150} width={1200} height={820} edges={EDGES} counts={[0, ...h, 0]} yMax={yMax} xTicks={EDGES.map(v => ({value: v, label: String(v)}))} yTicks={ticks}
				xLabel="reaction time (s)" yLabel={grow > 0.5 ? 'density (per second)' : 'relative frequency'} countLabels={false} at={-30}>
				{m => <>
					{fr >= k.three ? (() => {const [a, y1] = m.p(0, 1), [b] = m.p(0.7, 1); return <line x1={a} x2={b} y1={y1} y2={y1} stroke={GREY} strokeWidth={4} strokeDasharray="12 9" opacity={prog(fr, k.three, 12)} />;})() : null}
					{amb > 0 ? (() => {const [x0, t] = m.p(0.3, h[2]), [x1, bt] = m.p(0.4, 0); return <rect x={x0} y={t} width={x1 - x0} height={bt - t} fill="#f3d9a6" stroke={AREA.stroke} strokeWidth={6} opacity={amb} />;})() : null}
					{h.map((v, i) => {
						const c = 0.15 + i * 0.1, [px, ty] = m.p(c, Math.min(v, yMax)), [, by] = m.p(c, 0), tall = by - ty > 90;
						return <g key={i}>
							<text x={px} y={tall ? (ty + by) / 2 + 12 : ty - 16} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: i === 2 && amb > 0.5 ? AREA.ink : INK}}>{REL5[i].toFixed(2)}</text>
							{grow > 0.95 ? <text x={px} y={ty - 16} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: DATA_R.ink}}>{DENS5[i]}</text> : null}
						</g>;
					})}
				</>}
			</ClassHistogram>
			<Blocks x={1300} y={150} w={480} />
			<Hand x={1300} y={390} at={k.go} size={36} color={GREY}>the reaction times from last video</Hand>
			<Row x={1290} y={450} at={k.second} size={44}>height =</Row>
			<Row x={1290} y={510} at={k.second} size={44}>rel. freq. ÷ 0.1</Row>
			<Row x={1290} y={600} at={k.add} size={40} color={GOOD.ink}>areas: 0.10 + 0.25 + 0.35</Row>
			<Row x={1290} y={656} at={k.add} size={40} color={GOOD.ink}>+ 0.20 + 0.10 = 1</Row>
			<Chip x={1290} y={740} at={k.three} size={40} color={DATA_R.ink}>density 3.5 &gt; 1: allowed</Chip>
			<Hand x={1290} y={830} at={k.area} size={56} color={AREA.ink}>area, not height</Hand>
		</>
	);
};

// ---------- 4 and 5. probability is area; the two properties ----------
const P4 = {x: 40, y: 150, w: 1100, hTop: 380, hBot: 440} as const;
const T4 = makePlot(P4.x, P4.y, P4.w, P4.hTop, winF), B4 = makePlot(P4.x, P4.y + P4.hTop + 14, P4.w, P4.hBot, winf);
const PairParcel: React.FC<{area?: {a: number; b: number; o: number}; top?: React.ComponentProps<typeof Pair>['top']; bot?: React.ComponentProps<typeof Pair>['bot']}> = p => (
	<Pair {...P4} winTop={winF} winBot={winf} F={F9} f={f9} xTicks={hourTicks} yBotTicks={fTicks} topLabel="F(x)" botLabel="f(x) = 2x/9 on [0, 3]" {...p} />
);
export const S04: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K4;
	const a = prog(fr, k.onetwo, 16), br = prog(fr, k.four, 14);
	return (
		<>
			<PairParcel area={{a: 1, b: 2, o: a}} top={m => <>
				{br > 0 ? [1, 2].map(v => {const [px, py] = m.p(v, F9(v)), [x0] = m.p(-1, 0); return <path key={v} d={`M${px},${py} H${x0}`} stroke={AREA.stroke} strokeWidth={3} strokeDasharray="8 7" opacity={br} />;}) : null}
				<RiseBracket m={m} x={2.15} y0={F9(1)} y1={F9(2)} label="1/3" o={prog(fr, k.third, 12)} />
			</>} bot={m => {const [px, py] = m.p(1.5, 0.12); return <text x={px} y={py} textAnchor="middle" opacity={prog(fr, k.third, 12)} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, fill: AREA.ink}}>1/3</text>;}} />
			<Parcel x={1660} y={150} w={200} />
			<Hand x={1180} y={160} at={k.so} size={44} color={AREA.ink} w={460}>for a density, probability = area</Hand>
			<Row x={1180} y={300} at={k.area} size={44}>P(c &lt; X &lt; d) = <Int lo="c" hi="d" />f(x) dx</Row>
			<Row x={1180} y={384} at={k.area + 40} size={44}>= F(d) − F(c)</Row>
			<Hand x={1520} y={396} at={k.prim} size={34} color={GREY}>F: a primitive of f</Hand>
			<Row x={1180} y={500} at={k.four} size={40}><Int lo="1" hi="2" />2x/9 dx = <Ev lo="1" hi="2">x²/9</Ev> = 4/9 − 1/9</Row>
			<AnswerBox x={1180} y={590} at={k.third} size={52}>= 1/3</AnswerBox>
			<Hand x={1430} y={606} at={k.chance} size={42} color={AREA.ink}>10 am to 11 am</Hand>
			<Hand x={1180} y={700} at={k.same} size={36} color={GREY} w={660}>the same 1/3 that F gave last video</Hand>
			<Chip x={1180} y={800} at={k.since} size={34} color={GREY}>≤ or &lt;: the same, as P(X = c) = 0</Chip>
		</>
	);
};
export const S05: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K5;
	const tri = prog(fr, k.check, 16);
	return (
		<>
			<PairParcel area={{a: 0, b: 3, o: tri}} bot={m => {
				const o = prog(fr, k.tri, 12), [x0, y0] = m.p(0, 0), [x3] = m.p(3, 0), [, yt] = m.p(3, 2 / 3);
				return <g opacity={o}>
					<path d={`M${x0},${y0 + 16} v10 H${x3} v-10`} fill="none" stroke={AREA.stroke} strokeWidth={5} />
					<text x={(x0 + x3) / 2} y={y0 + 4} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: AREA.ink}} stroke="#fffdf8" strokeWidth={7} paintOrder="stroke">base 3</text>
					<path d={`M${x3 + 14},${y0} h10 V${yt} h-10`} fill="none" stroke={AREA.stroke} strokeWidth={5} />
					<text x={x3 + 34} y={(y0 + yt) / 2 + 12} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: AREA.ink}}>height 2/3</text>
				</g>;
			}} />
			<Framed x={1180} y={160} at={k.never} size={44}>f(x) ≥ 0 in the domain</Framed>
			<Hand x={1180} y={256} at={k.because} size={40} color={DENS.ink}>F climbs, so f ≥ 0</Hand>
			<Framed x={1180} y={340} at={k.total} size={44}><Int lo="a" hi="b" />f(x) dx = 1 on [a, b]</Framed>
			<Row x={1180} y={450} at={k.if2} size={34}>or <Int lo="−∞" hi="∞" />f(x) dx = 1 on all real x</Row>
			<Hand x={1180} y={520} at={k.total + 20} size={36} color={GREY} w={660}>total area: all of the probability</Hand>
			<AnswerBox x={1180} y={600} at={k.half} size={50}>½ × 3 × 2/3 = 1</AnswerBox>
			<Hand x={1580} y={616} at={k.half + 20} size={44} color={GOOD.ink}>area = 1</Hand>
			<Parcel x={1180} y={730} w={200} />
			<TrackerFill x={1400} y={720} width={240} value={tri > 0.5 ? kf(fr, [[k.half, 0], [k.half + 40, 1]]) : 0} at={k.check} digits={2} label="arrived by 12" />
		</>
	);
};
export {B4, T4, CDF};
