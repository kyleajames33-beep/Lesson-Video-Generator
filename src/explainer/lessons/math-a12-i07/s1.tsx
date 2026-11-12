// Scenes 1 to 3: the hook (i06's final frame, then the bath filling and draining beside the net-flow graph; the last
// strip below the axis is water lost), keep the signs and refine (signed strips settling on 32 from left and right),
// and the definite integral's notation with plain meanings.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, prog} from '../../kit';
import {AreaFillLayer, CARD, Card, FrameSvg, HandTag, RiemannLayer, SceneHeading, kf, smooth, vis} from '../../math/studio';
import {Int} from '../math-a12-i08/parts';
import {I06FinalFrame} from '../math-a12-i06/s3';
import {K1, K2, K3} from './cuemap';
import {AMB_INK, AMB_SOFT, Am, BathBoard, BathRig, BoxCard, Bracket, Chip, FG, FlowGraph, GREY, Line, Note, PLabel, SegRow, TEAL_INK, TEAL_SOFT, Tl, V, net, tap, water} from './parts';

export const HEAD1 = 'How does a signed sum become a definite integral?';
export const BATHG = {x: 1110, y: 175, w: 770};
const GR = '#6b4fa0';

/** i06's eight left rectangles of width 1 (teal), the eighth optionally amber. */
const EightRects: React.FC<{m: Parameters<NonNullable<React.ComponentProps<typeof FlowGraph>['children']>>[0]; amber?: number; hi?: number}> = ({m, amber = 0, hi = 0}) => (
	<>{Array.from({length: 8}, (_, i) => {const h = net(i); const a = m.p(i, Math.max(0, h)), b = m.p(i + 1, Math.min(0, h)); const last = i === 7; return <g key={i}>
		<rect x={a[0]} y={a[1]} width={b[0] - a[0]} height={Math.max(3, b[1] - a[1])} fill="#cfe8e4" stroke="#1f6f66" strokeWidth={3} />
		{last && amber > 0.001 ? <rect x={a[0]} y={a[1]} width={b[0] - a[0]} height={Math.max(3, b[1] - a[1])} fill="#f3d9a6" stroke="#b07a1a" strokeWidth={4} opacity={amber} /> : null}
		{last && hi > 0.001 ? <rect x={a[0] - 4} y={a[1] - 4} width={b[0] - a[0] + 8} height={b[1] - a[1] + 8} fill="none" stroke={INK} strokeWidth={5} opacity={hi} /> : null}
	</g>;})}</>
);

// ---------- 1. hook ----------
const CUT = 12;
export const S01: React.FC = () => {
	const f = useCurrentFrame();
	const k = K1;
	if (f < CUT) return <I06FinalFrame />;
	const i06o = 1 - prog(f, k.bath - 4, 16);
	const sIn = smooth(prog(f, k.bath, 22));
	const blinkAt = k.look + 10;
	const t = f < blinkAt ? kf(f, [[k.graph + 40, 0], [k.wins, 6], [k.wins + 90, 8]]) : kf(f, [[blinkAt + 12, 7], [k.litres, 7], [k.litres + 60, 8]]);
	const blink = f >= k.look && f < blinkAt + 14 ? Math.max(1 - prog(f, k.look, 10), prog(f, blinkAt + 2, 10)) : 1;
	const wash = vis(f, k.losing, k.look, 14);
	const ringO = 1 - prog(f, k.look, 12);
	const amber = prog(f, k.litres, 14);
	return (
		<>
			{i06o > 0.001 ? <div style={{position: 'absolute', inset: 0, opacity: i06o}}><I06FinalFrame /></div> : null}
			{f >= k.bath - 4 ? <div style={{position: 'absolute', inset: 0, opacity: sIn}}>
				<SceneHeading text={HEAD1} at={k.bath + 6} size={52} />
				<FlowGraph>
					{m => {const [x0, yT] = m.p(-0.4, 13.4), [x1, y0] = m.p(8.6, 0), [, yB] = m.p(0, -5); const pt = m.p(t, net(t)); const c = m.p(7.5, -1); return <>
						<rect x={x0} y={yT} width={x1 - x0} height={y0 - yT} fill={TEAL_SOFT} opacity={0.55 * wash} />
						<rect x={x0} y={y0} width={x1 - x0} height={yB - y0} fill={AMB_SOFT} opacity={0.8 * wash} />
						<EightRects m={m} amber={amber} hi={vis(f, k.look, k.strip + 60, 12)} />
						<g opacity={ringO}><ellipse cx={c[0]} cy={c[1]} rx={70} ry={58} fill="none" stroke="#d18f1f" strokeWidth={6} /><text x={c[0] + 76} y={c[1] + 22} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 64, fill: AMB_INK}}>?</text></g>
						<PLabel p={m.p(4.6, 9.6)} text="gaining" color={TEAL_INK} size={46} hand o={wash} />
						<PLabel p={m.p(1.2, -3.4)} text="losing" color={AMB_INK} size={46} hand o={wash} />
						{f >= k.graph + 40 && f < k.look ? <circle cx={pt[0]} cy={pt[1]} r={13} fill={GR} stroke={CARD} strokeWidth={4} /> : null}
						{(() => {const p = m.p(6, 0); const o = vis(f, k.wins, k.look, 12); return <g opacity={o}><circle cx={p[0]} cy={p[1]} r={24} fill="none" stroke={GR} strokeWidth={5} /><text x={p[0] - 30} y={p[1] + 60} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: GR}} stroke={CARD} strokeWidth={7} paintOrder="stroke">net flow 0 at t = 6</text></g>;})()}
						<Bracket a={m.p(6.88, 0)} b={m.p(6.88, -2)} text="height −2 L/min" o={prog(f, k.height, 12)} dx={-20} dy={80} anchor="end" />
						<Bracket a={m.p(7, 0.8)} b={m.p(8, 0.8)} text="width 1 min" o={prog(f, k.width, 12)} dy={-18} />
						<PLabel p={m.p(5.0, 10.8)} text="net flow = 12 − 2t" color={GR} size={42} o={1 - prog(f, k.losing - 10, 12)} />
					</>;}}
				</FlowGraph>
				<div style={{position: 'absolute', inset: 0, opacity: blink, transform: `translateX(${(1 - sIn) * 140}px)`}}>
					<BathRig x={BATHG.x} y={BATHG.y} w={BATHG.w} V={water(t)} tapRate={tap(t)} tag={{text: 'lost about 2 L', o: vis(f, k.so, undefined, 12), color: AMB_INK}} />
				</div>
				<BathBoard x={1110} y={590} width={770} t={t} at={k.bath + 20} size={44} />
				<Chip x={40} y={850} at={k.think} out={k.look - 6} size={44} color="#d18f1f">Think: what could a strip below the axis mean?</Chip>
				<SegRow x={40} y={860} size={50} segs={[{c: <>(<V>−2 L/min</V>) × (1 min)</>, at: k.minus}, {c: <>= <Am>−2 L</Am></>, at: k.litres}, {c: <span style={{fontSize: 34, color: '#4f4840'}}>(an estimate)</span>, at: k.litres + 20}]} />
				<HandTag x={420} y={770} text="negative change" at={k.strip} size={46} color={AMB_INK} />
			</div> : null}
		</>
	);
};

// ---------- 2. keep the signs, then refine ----------
const nAt = (f: number, k: typeof K2) => (f < k.s16 ? 8 : f < k.s64 ? 16 : f < k.s256 ? 64 : f < k.r28 ? 256 : f < k.r31 ? 16 : f < k.r3175 ? 64 : 256);
export const S02: React.FC = () => {
	const f = useCurrentFrame();
	const k = K2;
	const n = nAt(f, k);
	const rule = f < k.r28 ? 'left' : 'right';
	const signedO = prog(f, k.subtract, 14);
	const cur = f < k.s16 ? null : f < k.s64 ? 'left, n = 16:  36' : f < k.s256 ? 'left, n = 64:  33' : f < k.r28 ? 'left, n = 256:  32.25' : f < k.r31 ? 'right, n = 16:  28' : f < k.r3175 ? 'right, n = 64:  31' : 'right, n = 256:  31.75';
	const cell = (txt: string, at: number, color: string) => <div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, color, opacity: prog(f, at, 12), textAlign: 'center', fontVariantNumeric: 'tabular-nums'}}>{txt}</div>;
	return (
		<>
			<SceneHeading text="Keep the signs, then refine" at={4} size={52} />
			<FlowGraph>
				{m => <>
					<g opacity={1 - signedO}><RiemannLayer m={m} fn={net} a={0} b={8} n={8} rule="left" /></g>
					<g opacity={signedO}>{n >= 256 ? <AreaFillLayer m={m} fn={net} a={0} to={8} signed /> : <RiemannLayer m={m} fn={net} a={0} b={8} n={n} rule={rule} signed />}</g>
					<PLabel p={m.p(4.4, 10.6)} text="+ above: water in" color={TEAL_INK} size={40} hand o={prog(f, k.subtract, 12)} />
					<PLabel p={m.p(2.4, -3.6)} text="− below: water out" color={AMB_INK} size={40} hand o={prog(f, k.subtract + 10, 12)} />
				</>}
			</FlowGraph>
			<BathRig x={BATHG.x} y={BATHG.y} w={BATHG.w} V={water(8)} tapRate={0} tag={{text: '72 L at 8 min', o: 1}} />
			<BoxCard x={1110} y={590} w={770} at={-30} out={k.s16 - 8} size={40} title="the last strip">(<V>−2 L/min</V>) × (1 min) = <Am>−2 L</Am></BoxCard>
			<Card x={1110} y={570} w={770} at={k.s16} pad="12px 24px 14px">
				<div style={{display: 'grid', gridTemplateColumns: '1fr 1.3fr 1.3fr', borderBottom: '3px solid #ebe4d6', paddingBottom: 4}}>
					{['strips n', 'left heights', 'right heights'].map((h, i) => <div key={h} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, letterSpacing: 1, color: i === 0 ? '#4f4840' : i === 1 ? TEAL_INK : '#1f6fb2', textAlign: 'center'}}>{h}</div>)}
				</div>
				{([[16, '36', k.s16, '28', k.r28], [64, '33', k.s64, '31', k.r31], [256, '32.25', k.s256, '31.75', k.r3175]] as const).map(([nn, l, la, r, ra]) => <div key={nn} style={{display: 'grid', gridTemplateColumns: '1fr 1.3fr 1.3fr', padding: '4px 0'}}>
					{cell(String(nn), la, INK)}{cell(l, la, TEAL_INK)}{cell(r, ra, '#1f6fb2')}
				</div>)}
			</Card>
			{/* the number line: left values fall, right values rise, onto 32 */}
			{(() => {const o = prog(f, k.both, 14); if (o <= 0.001) return null; const X = (v: number) => 1150 + ((v - 27) / 10) * 680, y = 900; return <FrameSvg style={{opacity: o}}>
				<line x1={X(27)} x2={X(37)} y1={y} y2={y} stroke={INK} strokeWidth={4} />
				{[28, 30, 32, 34, 36].map(v => <g key={v}><line x1={X(v)} x2={X(v)} y1={y - 10} y2={y + 10} stroke={INK} strokeWidth={3} /><text x={X(v)} y={y + 42} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28, fill: INK}}>{v}</text></g>)}
				{[36, 33, 32.25].map((v, i) => <circle key={'l' + v} cx={X(v)} cy={y - 22} r={9} fill={TEAL_INK} opacity={0.5 + 0.25 * i} />)}
				{[28, 31, 31.75].map((v, i) => <circle key={'r' + v} cx={X(v)} cy={y - 22} r={9} fill="#1f6fb2" opacity={0.5 + 0.25 * i} />)}
				<line x1={X(32)} x2={X(32)} y1={y - 60} y2={y + 12} stroke={INK} strokeWidth={4} strokeDasharray="8 6" opacity={prog(f, k.t32, 12)} />
			</FrameSvg>;})()}
			{cur ? <Line x={40} y={860} at={k.s16} size={48}>signed sum, {cur}</Line> : <Line x={40} y={860} at={k.signed} size={48}>signed sum: strips above add, strips below subtract</Line>}
			<HandTag x={600} y={330} text="both settle on 32" at={k.t32} size={44} color={INK} />
		</>
	);
};

// ---------- 3. the definite integral ----------
const G3 = {x: 30, y: 140, w: 900, h: 560};
const RX3 = 980;
export const S03: React.FC = () => {
	const f = useCurrentFrame();
	const k = K3;
	const flash = (i: number) => vis(f, k.limit + 10 + i * 18, k.limit + 30 + i * 18 + 40, 8);
	return (
		<>
			<SceneHeading text="The definite integral" at={4} size={52} />
			<FlowGraph g={G3}>{m => <AreaFillLayer m={m} fn={net} a={0} to={8} signed />}</FlowGraph>
			<BoxCard x={RX3} y={150} w={900} at={-30} size={40} title="from the last video">sum of strips:  Σ f(x)Δx, from a to b</BoxCard>
			<div style={{position: 'absolute', left: RX3, top: 290, opacity: prog(f, k.sum, 12), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 64, color: INK, whiteSpace: 'pre'}}>
				<Int lo="a" hi="b" color={GR}>f(x)</Int>  <span style={{fontSize: 46, opacity: prog(f, k.zero, 12)}}>= lim<sub style={{fontSize: 30}}> Δx → 0</sub> Σ f(x)Δx</span>
			</div>
			<HandTag x={RX3 + 10} y={460} text="long S: sum" at={k.sum + 10} out={k.zero + 10} size={40} color={GREY} />
			<Note x={RX3} y={440} at={k.zero + 26} size={34}>f continuous on a ≤ x ≤ b (from the last video)</Note>
			<Note x={RX3} y={500} at={k.limit} size={38} color={INK}>limit: the value the sums settle on</Note>
			<div style={{position: 'absolute', left: RX3 + 620, top: 500, display: 'flex', gap: 14, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34}}>
				{['36', '33', '32.25'].map((v, i) => <span key={v} style={{opacity: f < k.limit ? 0 : Math.min(1, 0.4 + 0.6 * flash(i) + (f > k.limit + 120 ? 0.6 : 0)), color: TEAL_INK}}>{v}</span>)}
			</div>
			<Note x={RX3} y={575} at={k.dx} size={38} color={INK}>dx: the strip width          f(x): the strip height</Note>
			<Note x={RX3} y={640} at={k.ends} size={38} color={INK}>a, b: the ends of the interval</Note>
			<SegRow x={40} y={730} size={46} out={k.units - 6} segs={[{c: <>the signed sums settle on <b>32</b></>, at: k.name - 20}]} />
			<Note x={RX3} y={820} at={k.name + 20} out={k.here - 8} size={40} color={INK}>that settled value: the definite integral</Note>
			<Line x={40} y={730} at={k.units} size={44}>units:  (<V>L/min</V>) × (min) = L</Line>
			<Chip x={40} y={810} at={k.itself} size={36} color={GREY}>any rate f:  the limit is the total change from a to b</Chip>
			<Chip x={40} y={885} at={k.storm} size={34} color={GREY}>the storm: the rain that fell</Chip>
			<Chip x={560} y={885} at={k.bath} size={34} color={GREY}>this bath: the change in the water it holds</Chip>
			<Line x={RX3} y={720} at={k.here} size={52}><Int lo="0" hi="8" v="t" color={GR}>(12 − 2t)</Int> ≈ 32 <span style={{color: '#7a4600'}}>?</span></Line>
			<HandTag x={RX3 + 20} y={840} text="check it with shapes" at={k.check} size={44} color={INK} />
		</>
	);
};
export {Tl};
