// Scenes 6 to 10: the straight-line CDF (the running area grows by equal steps); the train problem (s06's parked flat
// density on [1, 5], with f, F and two probabilities); the fair-die parallel and no single mode; when the model fits;
// the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, prog} from '../../kit';
import {CdfTracer, ClassHistogram, FrameSvg, ProbabilityBars, SceneHeading, kf, makePlot, smooth} from '../../math/studio';
import {K6, K7, K8, K9, K10} from './cuemap';
import {AMB, AMBER_FILL, AnswerBox, BUS, BoxCard, BusStop, CDF, COUNTS, Chip, DATA_R, DENS, EDGES, F9Plot, FramedCard, GOOD, GREY, Hand, INK, Int, PARK, ParkedCard, Plate, RED, RedDie, RiseBracket, Row, Slip, Task, UniformPlot, Uni, WAIT_COUNTS, ticks, uni} from './parts';

// ---------- 6. the CDF is a straight line ----------
const TR = {x: 300, y: 170, width: 900, heightTop: 380, heightBottom: 330, gap: 16} as const;
const TOP6 = makePlot(TR.x, TR.y, TR.width, TR.heightTop, {x: [-2, 12], y: [0, 1.1]});
export const S06: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K6;
	const c = k.changes;
	const marker = kf(fr, [[0, 0], [k.back + 30, 0], [k.back + 80, 2], [c, 2], [c + 10, 3], [c + 16, 3], [c + 26, 4], [c + 32, 4], [c + 42, 5], [c + 50, 5], [k.end - 6, 10], [k.before, 10], [k.one, 12]]);
	const dots = prog(fr, k.end, 14);
	const chk = prog(fr, k.check, 14);
	return (
		<>
			<SceneHeading text="The CDF is a straight line" at={4} size={48} />
			<BusStop x={70} base={TR.y + TR.heightTop + TR.gap + TR.heightBottom - 72} h={250} />
			<CdfTracer {...TR} windowX={[-2, 12]} yTop={[0, 1.1]} yBottom={[0, 0.15]} density={uni(0, 10)} F={Uni(0, 10)} marker={marker} xTicks={[0, 2, 4, 6, 8, 10]} yTopTicks={[0.5, 1]} yBottomTicks={[{value: 0.1, label: '1/10'}]} xLabel="t (min)" topLabel="F(t) = P(T ≤ t)" bottomLabel="f(t) = 1/10"
				readout={{x: 1240, y: 170, width: 520, xLabel: 't (min)', digits: 2}} at={-30} />
			<FrameSvg style={{opacity: dots}}>{[[4, '0.4'], [7, '0.7']].map(([t, l]) => {const [px, py] = TOP6.pf(t as number, (t as number) / 10); return <g key={l}><circle cx={px} cy={py} r={12} fill="none" stroke={GREY} strokeWidth={4} /><text x={px + 18} y={py + 36} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: GREY}}>{l}</text></g>;})}</FrameSvg>
			<Hand x={1240} y={420} at={c + 14} out={k.check} size={42} color={AMB.ink}>equal steps: straight line</Hand>
			<Chip x={1240} y={410} at={k.check} size={30} color={GREY}>from s05: F(x) = ∫ f(t) dt, from a to x</Chip>
			<Row x={1240} y={490} at={k.end} size={40} color={CDF}>F(t) = t/10 for 0 ≤ t ≤ 10</Row>
			<AnswerBox x={1240} y={566} at={k.fx} size={44}>{'F(x) = (x − a)/(b − a)\nfor a ≤ x ≤ b'}</AnswerBox>
			<Row x={1240} y={720} at={k.before} size={38} color={CDF} dim={chk * 0.3}>F(x) = 0 for x &lt; a</Row>
			<Row x={1240} y={772} at={k.one} size={38} color={CDF} dim={chk * 0.3}>F(x) = 1 for x &gt; b</Row>
			<Row x={1240} y={840} at={k.integral} size={40}>F(x) = <Int lo="a" hi="x" /> 1/(b − a) dt</Row>
			<Row x={1240} y={900} at={k.gives} size={40} color={GOOD.ink}>= (x − a)/(b − a) ✓</Row>
		</>
	);
};

// ---------- 7. a problem: the train's wait ----------
const GF = {x: 40, y: 330, w: 1000, h: 300} as const;
const Gf = {x: 40, y: 640, w: 1000, h: 300} as const;
const WF = {x: [0, 6] as [number, number], y: [0, 1.1] as [number, number]};
const Wf = {x: [0, 6] as [number, number], y: [0, 0.4] as [number, number]};
const MF = makePlot(GF.x, GF.y, GF.w, GF.h, WF);
const T7 = Uni(1, 5);
export const S07: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K7;
	const grow = smooth(prog(fr, 0, 30));
	const sc = 1 + grow * (Gf.w / PARK.w - 1);
	const tx = PARK.x + (Gf.x - PARK.x) * grow, ty = PARK.y + (Gf.y + 30 - PARK.y) * grow;
	const drawF = kf(fr, [[k.then, 0], [k.four, 6]]);
	const tail = prog(fr, k.chance, 14) * (1 - prog(fr, k.and, 14));
	const mid = prog(fr, k.and + 10, 14);
	const dim1 = prog(fr, k.chance, 14) * 0.35;
	return (
		<>
			{grow < 1 || fr < 34 ? <div style={{position: 'absolute', left: 0, top: 0, width: 1920, height: 1080, opacity: 1 - prog(fr, 24, 10), transform: `translate(${tx - PARK.x * sc}px, ${ty - PARK.y * sc}px) scale(${sc})`, transformOrigin: '0 0'}}><ParkedCard /></div> : null}
			<Task x={96} y={150} w={960} at={10} size={40}>Find f(t) and F(t), then P(T &gt; 3.5) and P(2 ≤ T ≤ 4).</Task>
			<BoxCard x={1080} y={150} w={800} at={k.say} size={36} title="given"><div style={{fontWeight: 800}}>T: waiting time (minutes)</div><div style={{fontWeight: 800}}>T uniform on 1 ≤ t ≤ 5</div></BoxCard>
			<F9Plot {...GF} win={WF} fn={T7} draw={drawF} xTicks={ticks([1, 2, 3, 3.5, 4, 5])} yTicks={[{value: 0.25, label: '¼'}, {value: 0.625, label: '5/8'}, {value: 0.75, label: '¾'}, {value: 1, label: '1'}].filter(t => fr >= k.thats || t.value === 1)} yLabel="F(t)" at={20}>
				{m => <>
					<RiseBracket m={m} x={3.5} y0={T7(3.5)} y1={1} o={tail} label="1 − F(3.5)" side={-1} />
					{tail > 0.01 ? (() => {const [px, py] = m.p(3.5, T7(3.5)), [x0] = m.p(0, 0); return <g opacity={tail}><path d={`M${x0},${py} H${px}`} stroke={GREY} strokeWidth={3} strokeDasharray="8 7" /><circle cx={px} cy={py} r={11} fill={CDF} /></g>;})() : null}
					{mid > 0.01 ? (() => {const [p2, q2] = m.p(2, 0.25), [p4, q4] = m.p(4, 0.75), [x0] = m.p(0, 0); return <g opacity={mid}><path d={`M${x0},${q2} H${p2} M${x0},${q4} H${p4}`} stroke={GREY} strokeWidth={3} strokeDasharray="8 7" /><circle cx={p2} cy={q2} r={11} fill={CDF} /><circle cx={p4} cy={q4} r={11} fill={CDF} /></g>;})() : null}
					<RiseBracket m={m} x={4.25} y0={0.25} y1={0.75} o={mid} label="F(4) − F(2)" />
				</>}
			</F9Plot>
			<UniformPlot {...Gf} win={Wf} a={1} b={5} c={0.25} fill={0.6} zeros={prog(fr, k.elsewhere, 14)} shades={[{from: 3.5, to: 5, o: tail}, {from: 2, to: 4, o: mid}]} xTicks={ticks([1, 2, 3, 3.5, 4, 5])} yTicks={[{value: 0.25, label: fr >= k.interval ? '1/4' : '?'}]} xLabel="t (min)" yLabel="f(t)" at={30} />
			<Row x={1080} y={330} at={k.interval} out={k.elsewhere} size={44}>f(t) = 1/(5 − 1) = 1/4</Row>
			<AnswerBox x={1080} y={330} at={k.elsewhere} size={34}>f(t) = 1/4 for 1 ≤ t ≤ 5, 0 elsewhere</AnswerBox>
			<Row x={1080} y={410} at={k.then} out={k.four} size={44}>F(t) = <Int lo="1" hi="t" /> ¼ du = (t − 1)/4</Row>
			<AnswerBox x={1080} y={410} at={k.four} size={34}>F(t) = (t − 1)/4 for 1 ≤ t ≤ 5</AnswerBox>
			<Row x={1090} y={476} at={k.four + 20} size={30} color={GREY}>F = 0 below 1, F = 1 above 5</Row>
			<Row x={1080} y={540} at={k.chance + 30} size={44} dim={prog(fr, k.five, 12) * 0.3}>{fr >= k.thats ? 'P(T > 3.5) = 1 − 2.5/4' : 'P(T > 3.5) = 1 − F(3.5)'}</Row>
			<AnswerBox x={1080} y={604} at={k.five} size={38}>P(T &gt; 3.5) = 3/8 = 0.375</AnswerBox>
			<Slip x={1080} y={690} at={k.five + 12} strikeAt={k.five + 34} size={30} caption="F gives below, not above">P(T &gt; 3.5) = F(3.5) = 5/8</Slip>
			<Row x={1080} y={810} at={k.and + 14} size={38}>P(2 ≤ T ≤ 4) = F(4) − F(2) = 3/4 − 1/4</Row>
			<AnswerBox x={1080} y={866} at={k.half} size={38}>P(2 ≤ T ≤ 4) = 1/2</AnswerBox>
			<Hand x={1530} y={872} at={k.two} size={36} color={GREY}>2 of the 4 minutes ✓</Hand>
		</>
	);
};

// ---------- 8. the same idea as a fair die, and no single mode ----------
const G8 = {x: 40, y: 280, w: 860, h: 500} as const;
const W8 = {x: [0, 6] as [number, number], y: [0, 0.35] as [number, number]};
export const S08: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K8;
	const ring = prog(fr, k.because + 60, 16);
	return (
		<>
			<SceneHeading text="The same idea as a fair die" at={4} size={48} />
			<UniformPlot {...G8} win={W8} a={1} b={5} c={0.25} fill={0.6} xTicks={ticks([1, 2, 3, 4, 5])} yTicks={[{value: 0.25, label: '1/4'}]} xLabel="t (min)" yLabel="f(t)">
				{m => {const [cx, cy] = m.p(3, 0.25), rx = 2.25 * m.sx; return ring > 0.01 ? <ellipse cx={cx} cy={cy} rx={rx} ry={34} fill="none" stroke={AMB.stroke} strokeWidth={6} opacity={ring} /> : null;}}
			</UniformPlot>
			<RedDie x={1360} y={170} w={110} at={-30} />
			<ProbabilityBars x={1000} y={300} width={860} height={480} labels={['1', '2', '3', '4', '5', '6']} values={[1, 1, 1, 1, 1, 1].map(v => v / 6)} max={0.25} role="b" valueText={() => '1/6'} grow={{at: 6, dur: 20, stagger: 5}} xLabel="die face" yTicks={[{value: 1 / 6, label: '1/6'}]} at={-30} />
			<Hand x={1040} y={800} at={k.sixth} size={40} color={DENS.ink}>6 values: 1/6 each</Hand>
			<Hand x={130} y={800} at={k.cont} size={40} color={DENS.ink}>interval of width 4: height 1/4</Hand>
			<Hand x={760} y={186} at={k.cont + 20} size={46} color={AMB.ink}>spread 1 evenly</Hand>
			<Chip x={1040} y={872} at={k.because} size={32} color={GREY}>mode: where f is highest</Chip>
			<Hand x={130} y={872} at={k.mode - 20} size={42} color={AMB.ink}>every point is highest: no single mode</Hand>
		</>
	);
};

// ---------- 9. when the uniform model fits ----------
export const S09: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K9;
	const box = prog(fr, k.showed, 14), glow = prog(fr, k.prob, 14);
	const tt = prog(fr, k.and, 14);
	const X = (v: number) => 1070 + (v / 12) * 760;
	return (
		<>
			<FrameSvg><line x1={960} x2={960} y1={190} y2={930} stroke="rgba(60,45,20,0.18)" strokeWidth={4} strokeLinecap="round" /></FrameSvg>
			<Hand x={96} y={150} at={k.when} size={52} color={GOOD.ink}>fits</Hand>
			<Hand x={1000} y={150} at={k.when + 10} size={52} color={RED}>doesn&apos;t fit</Hand>
			<Hand x={300} y={162} at={k.nothing} size={34} color={GREY}>nothing favours part of the interval</Hand>
			<BusStop x={100} base={560} h={290} at={k.turning} />
			<ClassHistogram x={210} y={230} width={720} height={380} edges={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} counts={WAIT_COUNTS} yMax={32} xTicks={[0, 5, 10]} yTicks={[10, 20, 30]} xLabel="bus wait (min)" yLabel="arrivals" countLabels={false} model={{value: 20, at: k.turning}} at={k.turning} />
			<UniformPlot x={96} y={640} w={820} h={270} win={{x: [-0.8, 0.8], y: [0, 1.5]}} a={-0.5} b={0.5} c={1} fill={0.6} xTicks={ticks([-0.5, 0, 0.5], ['−0.5', '0', '0.5'])} yTicks={[{value: 1, label: '1'}]} xLabel="rounding error (cm)" yLabel="f" at={k.rounding} />
			<Hand x={500} y={652} at={k.half} size={30} color={GREY} w={420}>error = true length − rounded length</Hand>
			<ClassHistogram x={1000} y={230} width={880} height={400} edges={EDGES} counts={COUNTS} density total={200} yMax={4} xTicks={ticks([0.1, 0.2, 0.3, 0.4, 0.5, 0.6])} yTicks={[1, 2, 3]} xLabel="reaction time (s)" yLabel="density" countLabels={false} at={k.nothing}>
				{m => {const [x0, y2] = m.p(0.1, 2), [x1, b] = m.p(0.6, 0), [a1, y1] = m.p(0.2, 1), [a2] = m.p(0.5, 1), [a3] = m.p(0.6, 1); return <>
					<rect x={x0} y={y2} width={x1 - x0} height={b - y2} fill="none" stroke={DENS.stroke} strokeWidth={5} strokeDasharray="14 9" opacity={box} />
					<g opacity={glow}><rect x={x0} y={y2} width={a1 - x0} height={y1 - y2} fill="rgba(184,50,42,0.30)" stroke={RED} strokeWidth={4} /><rect x={a2} y={y2} width={a3 - a2} height={y1 - y2} fill="rgba(184,50,42,0.30)" stroke={RED} strokeWidth={4} /></g>
				</>;}}
			</ClassHistogram>
			<Hand x={1560} y={196} at={k.nothing} size={30} color={GREY}>from s04</Hand>
			<Hand x={1000} y={644} at={k.showed} size={34} color={DENS.ink}>flat model, same total area</Hand>
			<Hand x={1000} y={692} at={k.prob} size={38} color={RED}>too much probability at the extremes</Hand>
			{tt > 0.01 ? <div style={{position: 'absolute', inset: 0, opacity: tt}}>
				<div style={{position: 'absolute', left: 1000, top: 750, width: 880, height: 190, background: '#fffdf8', borderRadius: 16, border: '2.5px solid rgba(60,45,20,0.14)'}} />
				<FrameSvg>
					<line x1={X(0)} x2={X(12)} y1={890} y2={890} stroke={INK} strokeWidth={4} />
					{[0, 10].map(v => <g key={v}><line x1={X(v)} x2={X(v)} y1={880} y2={900} stroke={INK} strokeWidth={3} /><text x={X(v)} y={928} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28, fill: INK}}>{v}</text></g>)}
					<circle cx={X(9.6)} cy={878} r={11} fill={DATA_R.stroke} stroke="#fffdf8" strokeWidth={3} />
				</FrameSvg>
				<Plate plate={BUS} x={X(10) - 75} y={820} w={150} />
				<Hand x={1030} y={770} at={k.and} size={40} color={RED}>timetable checked: no</Hand>
				<Hand x={1240} y={834} at={k.arrive - 10} size={32} color={GREY}>arrive just before the bus</Hand>
			</div> : null}
		</>
	);
};

// ---------- 10. memory aid ----------
export const S10: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K10;
	const X = (v: number) => 260 + (v / 10) * 300;
	return (
		<>
			<SceneHeading text="Remember it" at={4} size={48} />
			<FramedCard x={160} y={170} w={1600} h={720} at={-30} />
			<div style={{position: 'absolute', left: 210, top: 196, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: GOOD.ink}}>Memory aid</div>
			<BusStop x={210} base={640} h={300} />
			<FrameSvg>
				<line x1={X(0)} x2={X(10)} y1={640} y2={640} stroke={INK} strokeWidth={5} strokeLinecap="round" />
				{[0, 10].map(v => <g key={v}><line x1={X(v)} x2={X(v)} y1={626} y2={654} stroke={INK} strokeWidth={4} /><text x={X(v)} y={690} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: INK}}>{v}</text></g>)}
				<path d={`M${X(0)},${600} v-12 H${X(10)} v12`} fill="none" stroke={AMB.stroke} strokeWidth={4} />
			</FrameSvg>
			<Hand x={330} y={530} at={-30} size={34} color={AMB.ink}>10 min gap</Hand>
			<Hand x={700} y={240} at={k.flat} size={60} color={INK} w={1000}>Flat, so one over the width.</Hand>
			<Hand x={700} y={330} at={k.and} size={50} color={INK} w={1020}>Probability = width you want (inside [a, b]) ÷ whole width.</Hand>
			<Row x={700} y={480} at={k.flat + 20} size={40} color={DENS.ink}>f(x) = 1/(b − a) on [a, b], 0 elsewhere</Row>
			<UniformPlot x={700} y={560} w={640} h={300} win={{x: [0, 6], y: [0, 0.35]}} a={1} b={5} c={0.25} fill={0.6} shades={[{from: 2, to: 3.5, o: prog(fr, k.and + 20, 14)}]} xTicks={ticks([1, 5], ['a', 'b'])} yTicks={[]} xLabel="x" yLabel="f(x)" />
			<Hand x={1380} y={700} at={k.and + 30} size={36} color={AMB.ink} w={340}>width you want ÷ whole width</Hand>
		</>
	);
};
export {AMBER_FILL, smooth};
