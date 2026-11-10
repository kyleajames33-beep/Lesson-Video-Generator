// Scenes 6 to 8: trapezia (one strip's left and right rectangles averaged into a chord; four trapezia beat 32
// rectangles), the trolley worked example (x² m/s on [0, 2], left, right and trapezia), and refinement with the
// kit RefinementTable's error bars (rectangle errors halve, trapezium errors quarter).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, INK, prog} from '../../kit';
import {Card, HandTag, LiveReadoutBoard, RefinementTable, SceneHeading, StudioPlot, StudioRiemannStrips, fnPath as fnPathL} from '../../math/studio';
import {K6, K7, K8} from './cuemap';
import {AMB, AnswerBox, BLUE, BoxCard, Chip, GREY, Line, PI, PLabel, T, V, VIOLET, rate, tL, tR, tT} from './parts';

const WIN = {x: [-0.1, 1.75] as [number, number], y: [-0.08, 1.15] as [number, number]};
const XT = [{value: PI / 4, label: 'π/4'}, {value: PI / 2, label: 'π/2'}];
const YT = [{value: 0.5, label: '0.5'}, {value: 1, label: '1'}];
const sq = (x: number) => x * x;

// ---------- 6. trapezia ----------
const RX6 = 1170;
export const S06: React.FC = () => {
	const f = useCurrentFrame();
	const k = K6;
	const trap = f >= k.each;
	const one = prog(f, k.join, 12) * (1 - prog(f, k.each, 10));
	const w = PI / 8, i = 1, x0 = i * w, x1 = (i + 1) * w;
	return (
		<>
			<SceneHeading text="Trapezia: join the tops" at={4} size={56} />
			<StudioRiemannStrips x={30} y={150} width={1100} height={810} window={WIN} fn={rate} a={0} b={PI / 2} n={4} rule={trap ? 'trapezium' : 'left'} curveColor={VIOLET} xTicks={XT} yTicks={YT} xLabel="time x (hours)" yLabel="rain rate (cm per hour)" at={-30}>
				{m => {const a = m.p(x0, Math.cos(x0)), b = m.p(x1, Math.cos(x0)), c = m.p(x1, Math.cos(x1)), d = m.p(x0, Math.cos(x1)), z0 = m.p(x0, 0), z1 = m.p(x1, 0); return <>
					<g opacity={one}>
						<path d={`M${z0[0]},${z0[1]} V${a[1]} H${b[0]} V${z1[1]}`} stroke="#c47a00" strokeWidth={5} fill="none" />
						<path d={`M${z0[0]},${z0[1]} V${d[1]} H${c[0]} V${z1[1]}`} stroke="#6f675b" strokeWidth={5} fill="none" strokeDasharray="10 8" />
						<line x1={a[0]} y1={a[1]} x2={c[0]} y2={c[1]} stroke={BLUE} strokeWidth={6} />
						<PLabel p={a} dx={-10} dy={-20} text="left" color="#7a4600" size={34} anchor="end" />
						<PLabel p={c} dx={14} dy={44} text="right" color="#4f4840" size={34} />
					</g>
					<PLabel p={m.p(0.75, 1.02)} text="chords sit just under the curve" color={BLUE} size={38} hand o={prog(f, k.under, 12)} />
				</>;}}
			</StudioRiemannStrips>
			<BoxCard x={RX6} y={150} w={720} at={-30} size={36} title="flat tops">Rectangles have flat tops, but the curve slopes. Last scene: 32 left rectangles ≈ 1.02</BoxCard>
			<BoxCard x={RX6} y={380} w={720} at={k.area} size={40} title="trapezium area">½(left height + right height) × Δx</BoxCard>
			<Line x={RX6 + 10} y={510} at={k.avg} size={36}>= ½(left rectangle + right rectangle)</Line>
			<StudioPlot x={RX6} y={570} width={720} height={390} window={{x: [0.3, 0.88], y: [-0.06, 1.08]}} xTicks={[{value: PI / 8, label: 'π/8'}, {value: PI / 4, label: 'π/4'}]} yTicks={[0.5, 1]} xLabel="x" yLabel="one strip, zoomed" at={-30} out={k.four - 4}>
				{m => {const a0 = PI / 8, a1 = PI / 4, z0 = m.p(a0, 0), z1 = m.p(a1, 0), l = m.p(a0, Math.cos(a0)), r = m.p(a1, Math.cos(a1)); return <>
					<path d={`M${z0[0]},${z0[1]} L${l[0]},${l[1]} L${r[0]},${r[1]} L${z1[0]},${z1[1]} Z`} fill="#dceaf7" stroke={BLUE} strokeWidth={4} />
					<path d={`M${z0[0]},${z0[1]} V${l[1]} H${z1[0]} V${z1[1]}`} stroke="#c47a00" strokeWidth={5} fill="none" />
					<path d={`M${z0[0]},${r[1]} H${z1[0]}`} stroke="#6f675b" strokeWidth={5} strokeDasharray="10 8" fill="none" />
					<path d={fnPathL(m, rate, 0.3, 0.88)} stroke={VIOLET} strokeWidth={6} fill="none" />
					<PLabel p={l} dx={12} dy={40} text="left height" color="#7a4600" size={32} />
					<PLabel p={r} dx={-14} dy={-22} text="right height" color="#4f4840" size={32} anchor="end" />
					<PLabel p={m.p(0.42, 0.25)} text="average of two rectangles" color={BLUE} size={38} hand o={prog(f, k.avg, 12)} />
				</>;}}
			</StudioPlot>
			<LiveReadoutBoard x={RX6} y={625} width={710} at={k.four} inline size={50} labelSize={30} rows={[
				{label: 'trapezia, n = 4', value: T(4), digits: 3, role: 'b', text: '≈ 0.987'},
				{label: 'rectangles, n = 32', value: 1.0243, digits: 2, role: 'a', at: k.closer, text: '≈ 1.02'},
			]} />
			<HandTag x={RX6 + 20} y={835} text="off by ≈ 0.013 vs ≈ 0.024" at={k.closer + 20} size={42} color={INK} />
			<Chip x={RX6} y={870} at={k.bends} size={34} color={GREY}>bends downwards (concave down): chords under</Chip>
		</>
	);
};

// ---------- 7. the trolley ----------
const RX7 = 1070;
const W7 = {x: [-0.1, 2.15] as [number, number], y: [-0.3, 4.4] as [number, number]};
export const S07: React.FC = () => {
	const f = useCurrentFrame();
	const k = K7;
	const rule = f >= k.trap ? 'trapezium' : f >= k.right ? 'right' : 'left';
	const hO = prog(f, k.heights, 12);
	return (
		<>
			<SceneHeading text="Compare the methods: a trolley" at={4} size={56} />
			<BoxCard x={30} y={140} w={1860} at={-30} size={38} title="task">A trolley&apos;s speed is x² m/s, x seconds after it starts. Estimate the distance travelled in the first 2 s, using 4 strips.</BoxCard>
			<StudioRiemannStrips x={30} y={330} width={1000} height={630} window={W7} fn={sq} a={0} b={2} n={4} rule={rule} draw={{at: k.speed, per: 8}} curveColor={VIOLET} xTicks={[0.5, 1, 1.5, 2]} yTicks={[1, 2, 3, 4]} xLabel="time x (s)" yLabel="speed (m/s)" at={-30}>
				{m => <>
					{[0, 0.5, 1, 1.5, 2].map(X => {const a = m.p(X, 0), b = m.p(X, sq(X)); return <g key={X} opacity={hO * (1 - prog(f, k.left, 10))}><line x1={a[0]} x2={b[0]} y1={a[1]} y2={b[1]} stroke={VIOLET} strokeWidth={5} /><circle cx={b[0]} cy={b[1]} r={9} fill={VIOLET} /><text x={b[0] - 10} y={b[1] - 16} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, fill: VIOLET}}>{[0, 0.25, 1, 2.25, 4][X * 2]}</text></g>;})}
					<PLabel p={m.p(0.05, 3.9)} text="strip area = speed × time = distance" color={BLUE} size={36} hand o={prog(f, k.speed, 12)} />
					<PLabel p={m.p(1.0, 3.2)} text={rule === 'trapezium' ? 'trapezia' : rule === 'right' ? 'right rectangles' : 'left rectangles'} size={38} o={prog(f, k.left, 12)} />
				</>}
			</StudioRiemannStrips>
			<Card x={RX7} y={330} w={820} at={-30} pad="10px 24px 12px">
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: '#4f4840'}}>GIVEN</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: INK, lineHeight: 1.3}}>a = 0 s, b = 2 s, n = 4;  speed <V>x²</V> m/s<br />Δx = (b − a)/n</div>
			</Card>
			<Card x={RX7} y={490} w={820} at={-30} pad="8px 20px 10px">
				<div style={{display: 'grid', gridTemplateColumns: '210px repeat(5, 1fr)', rowGap: 4, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, color: INK, textAlign: 'center'}}>
					<div style={{textAlign: 'left', fontSize: 30}}>time x (s)</div>{['0', '0.5', '1', '1.5', '2'].map(v => <div key={v} style={{opacity: prog(f, k.dx, 10) > 0.5 || v === '0' || v === '2' ? 1 : 0.25}}>{v}</div>)}
					<div style={{textAlign: 'left', fontSize: 30, color: VIOLET}}>speed (m/s)</div>{['0', '0.25', '1', '2.25', '4'].map(v => <div key={v} style={{color: VIOLET, opacity: prog(f, k.heights, 10)}}>{v}</div>)}
				</div>
			</Card>
			<Line x={RX7 + 10} y={610} at={k.dx} size={40}>Δx = (2 − 0)/4 = 0.5</Line>
			<LiveReadoutBoard x={RX7} y={670} width={820} at={-30} inline size={44} labelSize={30} rows={[
				{label: f >= k.left ? 'left: 0.5 × (0 + 0.25 + 1 + 2.25)' : 'left rectangles', value: tL(4), digits: 2, unit: 'm', text: f >= k.lsum ? undefined : '?', glow: [k.left, k.right]},
				{label: f >= k.right ? 'right: 0.5 × (0.25 + 1 + 2.25 + 4)' : 'right rectangles', value: tR(4), digits: 2, unit: 'm', text: f >= k.rsum ? undefined : '?', glow: [k.right, k.trap]},
			]} />
			<AnswerBox x={RX7} y={840} at={k.trap} size={40}>trapezia: (1.75 + 3.75)/2 = 2.75 m</AnswerBox>
		</>
	);
};

// ---------- 8. refinement ----------
export const S08: React.FC = () => {
	const f = useCurrentFrame();
	const k = K8;
	const nKeys = [{frame: -1000, value: 4}, {frame: k.eight, value: 8}, {frame: k.sixteen, value: 16}];
	return (
		<>
			<SceneHeading text="Which method improves fastest?" at={4} size={56} />
			<StudioRiemannStrips x={30} y={150} width={820} height={810} window={W7} fn={sq} a={0} b={2} nKeys={nKeys} rule="trapezium" curveColor={VIOLET} xTicks={[0.5, 1, 1.5, 2]} yTicks={[1, 2, 3, 4]} xLabel="time x (s)" yLabel="speed (m/s)" at={-30}
				stepper={{x: 140, y: 170, values: [4, 8, 16], label: 'strips n'}}>
				{m => <PLabel p={m.p(0.05, 2.6)} text="chords sit just above" color={BLUE} size={38} hand o={prog(f, k.bends, 12)} />}
			</StudioRiemannStrips>
			<RefinementTable x={880} y={150} w={1010} exact={8 / 3} digits={4} rows={[{n: 4, left: tL(4), right: tR(4), trap: tT(4), at: -30}, {n: 8, left: tL(8), right: tR(8), trap: tT(8), at: k.eight}, {n: 16, left: tL(16), right: tR(16), trap: tT(16), at: k.sixteen}]} />
			<Line x={890} y={520} at={k.settle} size={44}>all three settle near 2.667 m</Line>
			<HandTag x={900} y={660} text="rectangle errors roughly halve" at={k.halve} size={44} color="#7a4600" />
			<HandTag x={900} y={730} text="trapezium error: about a quarter" at={k.quarter} size={44} color={VIOLET} />
			<Chip x={880} y={770} at={k.bends} size={36} color={GREY}>bends upwards (concave up): chords over, a slight overestimate</Chip>
			<Chip x={880} y={860} at={k.tryit} size={40} color={AMB}>Try it: change n in any graphing app</Chip>
		</>
	);
};
