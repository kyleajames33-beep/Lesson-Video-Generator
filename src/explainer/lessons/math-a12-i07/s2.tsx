// Scenes 4 to 9: the triangle above (36 L gained), the triangle below (4 L lost; no sum is positive), the signed
// total (32 L net change, the bath's level graph), a trapezium from 1 to 3, a balancing case (the balance bar levels)
// and a semicircle folded below the axis.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, prog} from '../../kit';
import {AreaFillLayer, BalanceBar, CARD, Card, HandTag, RiemannLayer, SceneHeading, StudioPlot, TaskStrip, EquationStrip, fnPath, kf, smooth, vis} from '../../math/studio';
import {Int} from '../math-a12-i08/parts';
import {K4, K5, K6, K7, K8, K9} from './cuemap';
import {BATHG} from './s1';
import {AMB_INK, Am, BathBoard, BathRig, Bracket, Chip, FlowGraph, GREEN, GREY, MiniPlot, Note, PLabel, SegRow, TEAL_INK, Tl, V, net, tap, water} from './parts';

const GR = '#6b4fa0';
const FI = (t0: number, t1: number) => <Int lo={String(t0)} hi={String(t1)} v="t" color={GR}>(12 − 2t)</Int>;
const triA = (m: Parameters<NonNullable<React.ComponentProps<typeof FlowGraph>['children']>>[0], pts: [number, number][], o: number, color: string) => o > 0.001 ? <path d={'M' + pts.map(p => m.p(p[0], p[1]).join(',')).join(' L') + ' Z'} fill="none" stroke={color} strokeWidth={5} strokeLinejoin="round" opacity={o} /> : null;

// ---------- 4. above the axis: a triangle ----------
export const S04: React.FC = () => {
	const f = useCurrentFrame();
	const k = K4;
	const to = 6 * smooth(prog(f, k.zero, 60));
	const t = kf(f, [[k.so, 0], [k.gains + 40, 6]]);
	return (
		<>
			<SceneHeading text="Above the axis: a triangle" at={4} size={52} />
			<FlowGraph>
				{m => <>
					<AreaFillLayer m={m} fn={net} a={0} to={to} signed />
					{triA(m, [[0, 0], [0, 12], [6, 0]], prog(f, k.zero + 60, 12), INK)}
					<Bracket a={m.p(0, -1.3)} b={m.p(6, -1.3)} text="base 6" o={prog(f, k.zero + 60, 12)} dy={44} />
					<Bracket a={m.p(-0.25, 0)} b={m.p(-0.25, 12)} text="height 12" o={prog(f, k.twelve, 12)} dx={30} dy={10} anchor="start" />
					<PLabel p={m.p(1.2, 3.5)} text="36" color={TEAL_INK} size={60} o={prog(f, k.half + 70, 12)} />
				</>}
			</FlowGraph>
			<BathRig x={BATHG.x} y={BATHG.y} w={BATHG.w} V={water(t)} tapRate={tap(t)} tag={{text: '36 in', o: vis(f, k.gains + 10, undefined, 12), color: TEAL_INK}} />
			<BathBoard x={1110} y={590} width={770} t={t} rows={['time', 'net', 'water']} size={46} />
			<Note x={1120} y={850} at={k.so} size={34}>the bath runs from 0 to 6 minutes: 40 L → 76 L</Note>
			<SegRow x={40} y={860} size={50} segs={[{c: <>{FI(0, 6)} = ½ × 6 × 12</>, at: k.half}, {c: <>= <Tl>36</Tl></>, at: k.half + 66}]} />
		</>
	);
};

// ---------- 5. below the axis: negative ----------
export const S05: React.FC = () => {
	const f = useCurrentFrame();
	const k = K5;
	const to = 6 + 2 * smooth(prog(f, 8, 50));
	const t = kf(f, [[k.so + 60, 6], [k.loses + 20, 8]]);
	const stripsO = vis(f, k.every, k.no + 40, 10);
	return (
		<>
			<SceneHeading text="Below the axis: negative" at={4} size={52} />
			<FlowGraph>
				{m => <>
					<g opacity={0.45}><AreaFillLayer m={m} fn={net} a={0} to={6} signed /></g>
					<AreaFillLayer m={m} fn={net} a={6} to={to} signed />
					<g opacity={stripsO}><RiemannLayer m={m} fn={net} a={6} b={8} n={10} rule="left" signed /></g>
					{triA(m, [[6, 0], [8, 0], [8, -4]], prog(f, k.four, 12), INK)}
					<Bracket a={m.p(6, 1.1)} b={m.p(8, 1.1)} text="base 2" o={prog(f, k.tri + 10, 12)} dy={-18} />
					<Bracket a={m.p(8.3, 0)} b={m.p(8.3, -4)} text="" o={prog(f, k.tri + 40, 12)} />
					<PLabel p={m.p(6.0, -3.5)} text="depth 4" size={36} o={prog(f, k.tri + 40, 12)} />
					{(() => {const p = m.p(8, -4); return <circle cx={p[0]} cy={p[1]} r={22} fill="none" stroke={GR} strokeWidth={5} opacity={vis(f, k.tri + 40, k.so + 40, 10)} />;})()}
					<PLabel p={m.p(1.5, 3.5)} text="36" color={TEAL_INK} size={52} o={0.6} />
					<PLabel p={m.p(7.35, -0.9)} text="−4" color={AMB_INK} size={44} o={prog(f, k.four + 20, 12)} />
				</>}
			</FlowGraph>
			<BathRig x={BATHG.x} y={BATHG.y} w={BATHG.w} V={water(t)} tapRate={tap(t)} tag={{text: '4 out', o: vis(f, k.loses + 20, undefined, 12), color: AMB_INK}} />
			<BathBoard x={1110} y={590} width={770} t={t} rows={['time', 'net', 'water']} size={44} />
			<Card x={1110} y={830} w={770} at={k.no} pad="10px 22px 12px">
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, color: INK}}>f(x) ≤ 0 on a ≤ x ≤ b  ⇒  integral ≤ 0</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 30, color: '#4f4840', opacity: prog(f, k.region, 12)}}>&lt; 0 unless f(x) = 0 all the way (f continuous, a &lt; b)</div>
			</Card>
			<HandTag x={60} y={890} text="every strip here is ≤ 0: no sum is positive" at={k.every + 20} out={k.so - 8} size={42} color={AMB_INK} />
			<SegRow x={40} y={860} size={50} segs={[{c: <>{FI(6, 8)} = −(½ × 2 × 4)</>, at: k.so}, {c: <>= <Am>−4</Am></>, at: k.so + 56}]} />
		</>
	);
};

// ---------- 6. across the axis: the signed total ----------
export const S06: React.FC = () => {
	const f = useCurrentFrame();
	const k = K6;
	return (
		<>
			<SceneHeading text="Across the axis: the signed total" at={4} size={52} />
			<FlowGraph>
				{m => <>
					<AreaFillLayer m={m} fn={net} a={0} to={8} signed />
					<PLabel p={m.p(1.3, 3.5)} text="36" color={TEAL_INK} size={52} />
					<PLabel p={m.p(6.3, -3.4)} text="−4" color={AMB_INK} size={52} />
					<PLabel p={m.p(2.4, 7.3)} text="+ area above" color={TEAL_INK} size={42} hand o={prog(f, k.above, 12)} />
					<PLabel p={m.p(3.2, -3.4)} text="− area below" color={AMB_INK} size={42} hand o={prog(f, k.below, 12)} />
				</>}
			</FlowGraph>
			<BathRig x={BATHG.x} y={BATHG.y} w={BATHG.w} V={water(8)} tapRate={0} ghost={{V: 30, o: prog(f, k.neg1, 12), label: 'drained more than it gained'}} tag={{text: '72 L', o: 1 - prog(f, k.neg1, 12)}} />
			<MiniPlot x={1110} y={560} w={770} h={340} win={{x: [-0.3, 8.6], y: [20, 95]}} xTicks={[2, 4, 6, 8]} yTicks={[40, 60, 80]} xLabel="t (min)" yLabel="water in the bath (L)" at={-30}
				curves={[{fn: water, from: 0, to: 8, color: INK, width: 6}]}>
				{m => {const a = m.p(8.25, 40), b = m.p(8.25, 72); const o = prog(f, k.net + 20, 12); return <>
					<line x1={m.p(0, 40)[0]} x2={a[0]} y1={a[1]} y2={a[1]} stroke="#8a8378" strokeWidth={3} strokeDasharray="8 7" opacity={o} />
					<Bracket a={a} b={b} text="net change 32 L" o={o} dx={-20} anchor="end" dy={10} color={GREEN} size={34} />
				</>;}}
			</MiniPlot>
			<SegRow x={40} y={860} size={50} segs={[{c: <>{FI(0, 8)} = 36 + (−4)</>, at: k.adds}, {c: <>= 32</>, at: k.two}]} answerAt={k.two + 6} />
			<HandTag x={850} y={900} text="settles on 32 ✓" at={k.matches} size={42} color={GREEN} />
			<Note x={44} y={950} at={k.net + 40} size={30}>for a velocity, this is the displacement (a later video)</Note>
		</>
	);
};

// ---------- 7. a trapezium that doesn't start at zero ----------
const RX7 = 1080;
const lin = (x: number) => 2 * x + 1;
export const S07: React.FC = () => {
	const f = useCurrentFrame();
	const k = K7;
	const to = 1 + 2 * smooth(prog(f, k.trap, 40));
	return (
		<>
			<TaskStrip text="Worked example: a trapezium" at={4} size={52} />
			<EquationStrip at={8} y={160} size={56}>Evaluate {<Int lo="1" hi="3" color={GR}>(2x + 1)</Int>} using areas.</EquationStrip>
			<StudioPlot x={30} y={270} width={1000} height={680} window={{x: [-0.3, 3.5], y: [-0.5, 8]}} xTicks={[1, 2, 3]} yTicks={[3, 7]} at={-30}>
				{m => <>
					{to > 1.001 ? <AreaFillLayer m={m} fn={lin} a={1} to={to} signed /> : null}
					<g clipPath={m.clip}><path d={fnPath(m, lin, -0.3, 3.5)} stroke={GR} strokeWidth={7} fill="none" strokeLinecap="round" /></g>
					{[1, 3].map(X => {const a = m.p(X, 0), b = m.p(X, lin(X)); return <line key={X} x1={a[0]} x2={b[0]} y1={a[1]} y2={b[1]} stroke={INK} strokeWidth={4} strokeDasharray="10 8" opacity={prog(f, k.find + 40, 12)} />;})}
					{[[1, k.at1 + 50], [3, k.seven]].map(([X, at]) => {const p = m.p(X, lin(X)); return <circle key={X} cx={p[0]} cy={p[1]} r={13} fill={GR} stroke={CARD} strokeWidth={4} opacity={prog(f, at, 12)} />;})}
					<Bracket a={m.p(0.82, 0)} b={m.p(0.82, 3)} text="3" o={prog(f, k.at1 + 50, 12)} dx={-18} anchor="end" dy={10} size={42} />
					<Bracket a={m.p(3.18, 0)} b={m.p(3.18, 7)} text="7" o={prog(f, k.seven, 12)} dx={18} anchor="start" dy={10} size={42} />
					<Bracket a={m.p(1, -0.25)} b={m.p(3, -0.25)} text="width 2" o={prog(f, k.trap, 12)} dy={-16} size={38} />
					<PLabel p={m.p(1.6, 2.2)} text="10" color={TEAL_INK} size={64} o={prog(f, k.ten, 12)} />
					<PLabel p={m.p(-0.2, 7.4)} text="y = 2x + 1" color={GR} size={40} />
				</>}
			</StudioPlot>
			<SegRow x={RX7} y={290} size={50} segs={[{c: <>heights:  3 and 7</>, at: k.seven}]} />
			<SegRow x={RX7} y={380} size={50} segs={[{c: <>width:  3 − 1 = 2</>, at: k.trap + 10}]} />
			<SegRow x={RX7} y={470} size={52} segs={[{c: <>area = <span style={{whiteSpace: 'pre'}}>(3 + 7) ÷ 2 × 2</span></>, at: k.area}, {c: <>= 10</>, at: k.ten}]} />
			<SegRow x={RX7} y={580} size={52} segs={[{c: <><Int lo="1" hi="3" color={GR}>(2x + 1)</Int> = 10</>, at: k.ten + 14}]} answerAt={k.ten + 20} />
			<Card x={RX7} y={290} w={800} at={20} out={k.seven - 8} pad="16px 30px 18px">
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46, color: INK}}>the plan</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 42, color: INK, lineHeight: 1.45}}>1. sketch the region<br />2. name the shape<br />3. find its area<br />4. give it a sign: above +, below −</div>
			</Card>
			<HandTag x={RX7 + 10} y={730} text="above the axis: positive" at={k.stays} size={44} color={TEAL_INK} />
		</>
	);
};

// ---------- 8. above and below can balance ----------
const RX8 = 820;
export const S08: React.FC = () => {
	const f = useCurrentFrame();
	const k = K8;
	const L = 4.5 * smooth(prog(f, k.from, 60)), R = 4.5 * smooth(prog(f, k.from2, 60));
	const toL = -3 + 3 * smooth(prog(f, k.from, 50)), toR = 3 * smooth(prog(f, k.from2, 50));
	return (
		<>
			<TaskStrip text="Above and below can balance" at={4} size={52} />
			<EquationStrip at={8} y={160} size={56}>Evaluate {<Int lo="−3" hi="3" color={GR}>x</Int>} using areas.</EquationStrip>
			<StudioPlot x={30} y={250} width={706} height={700} window={{x: [-3.5, 3.5], y: [-3.5, 3.5]}} xTicks={[-3, 3].map(v => ({value: v, label: v < 0 ? '−3' : '3'}))} yTicks={[-3, 3].map(v => ({value: v, label: v < 0 ? '−3' : '3'}))} at={-30}>
				{m => <>
					{toL > -2.999 ? <AreaFillLayer m={m} fn={x => x} a={-3} to={toL} signed /> : null}
					{toR > 0.001 ? <AreaFillLayer m={m} fn={x => x} a={0} to={toR} signed /> : null}
					<g clipPath={m.clip}><path d={fnPath(m, x => x, -3.5, 3.5)} stroke={GR} strokeWidth={7} fill="none" strokeLinecap="round" /></g>
					<PLabel p={m.p(-2.35, -0.7)} text="9/2" color={AMB_INK} size={44} o={prog(f, k.half1, 12)} />
					<PLabel p={m.p(1.6, 0.5)} text="9/2" color={TEAL_INK} size={44} o={prog(f, k.half2, 12)} />
					<PLabel p={m.p(1.6, 3.1)} text="y = x" color={GR} size={40} />
				</>}
			</StudioPlot>
			<Card x={RX8} y={290} w={1060} at={20} out={k.half1 - 8} pad="12px 26px 14px">
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: INK}}>the plan</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, color: INK, lineHeight: 1.35}}>find each piece's area, then give it its sign</div>
			</Card>
			<SegRow x={RX8} y={290} size={50} segs={[{c: <>below, −3 to 0:  area ½ × 3 × 3 = 9/2</>, at: k.half1}]} />
			<SegRow x={RX8} y={380} size={50} segs={[{c: <>above, 0 to 3:  area 9/2</>, at: k.half2}]} />
			<SegRow x={RX8} y={480} size={52} segs={[{c: <><Int lo="−3" hi="3" color={GR}>x</Int> = −9/2 + 9/2</>, at: k.so}, {c: <>= 0</>, at: k.zero}]} answerAt={k.zero + 6} />
			<BalanceBar x={1330} y={700} w={640} left={{label: 'below', value: L, role: 'k'}} right={{label: 'above', value: R, role: 'answer'}} scale={4.5} digits={1} at={k.from} />
			<HandTag x={RX8} y={930} text="plenty of area, but the integral is 0" at={k.plenty} size={42} color={INK} />
		</>
	);
};

// ---------- 9. a curved shape below the axis ----------
const RX9 = 820;
const semi = (x: number) => Math.sqrt(Math.max(0, 4 - x * x));
export const S09: React.FC = () => {
	const f = useCurrentFrame();
	const k = K9;
	const s = 1 - 2 * smooth(prog(f, k.axis, 40));
	const folding = f >= k.axis && f < k.axis + 40;
	const done = f >= k.axis + 40;
	return (
		<>
			<TaskStrip text="A curved shape below the axis" at={4} size={52} />
			<EquationStrip at={8} y={160} size={56}>Evaluate {<Int lo="−2" hi="2" color={GR}>−√(4 − x²)</Int>} using areas.</EquationStrip>
			<StudioPlot x={30} y={250} width={706} height={700} window={{x: [-2.6, 2.6], y: [-2.6, 2.6]}} xTicks={[-2, -1, 1, 2].map(v => ({value: v, label: v < 0 ? `−${-v}` : String(v)}))} yTicks={[-2, -1, 1, 2].map(v => ({value: v, label: v < 0 ? `−${-v}` : String(v)}))} at={-30}>
				{m => <>
					{done ? <g opacity={prog(f, k.every, 14)}><AreaFillLayer m={m} fn={x => -semi(x)} a={-2} to={2} signed /></g> : null}
					<g clipPath={m.clip}><path d={fnPath(m, x => s * semi(x), -2, 2, 240)} stroke={GR} strokeWidth={7} fill="none" strokeLinecap="round" /></g>
					{(() => {const a = m.p(0, 0), b = m.p(2, 0); return <g opacity={vis(f, k.two, k.axis, 12)}><line x1={a[0]} x2={b[0]} y1={a[1] - 3} y2={b[1] - 3} stroke={INK} strokeWidth={5} /><text x={(a[0] + b[0]) / 2} y={a[1] - 20} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, fill: INK}} stroke={CARD} strokeWidth={7} paintOrder="stroke">r = 2</text></g>;})()}
					{!folding ? <PLabel p={m.p(-2.4, done ? -2.35 : 2.35)} text={done ? 'y = −√(4 − x²)' : 'x² + y² = 4, top half'} color={GR} size={38} o={done ? prog(f, k.axis + 40, 12) : prog(f, k.top, 12)} /> : null}
					{done ? <PLabel p={m.p(-0.45, -1.2)} text="2π" color={AMB_INK} size={52} o={prog(f, k.every, 12)} /> : null}
				</>}
			</StudioPlot>
			<Card x={RX9} y={290} w={1060} at={20} out={k.half - 8} pad="12px 26px 14px">
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: INK}}>the plan</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, color: INK, lineHeight: 1.45}}>1. what shape is √(4 − x²)?<br />2. what does the minus sign do?<br />3. the area, then the sign</div>
			</Card>
			<SegRow x={RX9} y={600} size={44} segs={[{c: <>y = √(4 − x²) squares to x² + y² = 4</>, at: k.top}]} />
			<SegRow x={RX9} y={670} size={44} segs={[{c: <>the top half of a circle, radius 2</>, at: k.two}]} />
			<SegRow x={RX9} y={300} size={50} segs={[{c: <>area = ½ × π × 2²</>, at: k.half}, {c: <>= 2π</>, at: k.pi}]} />
			<SegRow x={RX9} y={400} size={46} segs={[{c: <>every strip is below the axis</>, at: k.every}]} />
			<SegRow x={RX9} y={500} size={52} segs={[{c: <><Int lo="−2" hi="2" color={GR}>−√(4 − x²)</Int> = −2π</>, at: k.mpi - 40}, {c: <span style={{fontSize: 36, color: '#4f4840'}}>≈ −6.28</span>, at: k.mpi - 20}]} answerAt={k.mpi - 34} />
			<HandTag x={RX9} y={780} text="the minus sign flips it below" at={k.minus} size={44} color={GR} />
		</>
	);
};
export {Chip, GREY, V};
