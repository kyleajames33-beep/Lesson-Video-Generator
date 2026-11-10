// Scenes 1 to 4: the hook (i09's arches become the lift's velocity; net change 0, floors travelled 4), f ≥ 0 (the
// trapezium, 10 both ways), f ≤ 0 (x² − 4 on [0, 2]: −16/3, flipped to 16/3) and the sign change (above minus
// below, −3; area 23/3, with a small lift inset replaying "floors up − floors down").
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, INK, prog} from '../../kit';
import {AreaFillLayer, CARD, LiveReadoutBoard, SceneHeading, StudioPlot, fnPath, kf, regionPath, smooth} from '../../math/studio';
import type {PlotMap, PlotTick} from '../../math/studio';
import {I09FinalFrame} from '../math-a12-i09/s3';
import {K1, K2, K3, K4} from './cuemap';
import {ABLUE, AnswerBox, BoxCard, Chip, FlipFill, Fq4, Hand, Int, Lims, LiftShaftSim, Named, PLabel, Row, SOFT, TEAL, Task, level, q4, travelled} from './parts';

const PI = Math.PI;
/** A blue curve on its own axes; children draw fills under the curve via `under`. */
export const BPlot: React.FC<{x: number; y: number; w: number; h: number; win: {x: [number, number]; y: [number, number]}; fn: (x: number) => number; from?: number; to?: number; xTicks?: readonly (number | PlotTick)[]; yTicks?: readonly (number | PlotTick)[]; xLabel?: string; yLabel?: string; at?: number; out?: number; under?: (m: PlotMap) => React.ReactNode; kids?: (m: PlotMap) => React.ReactNode}> = ({x, y, w, h, win, fn, from, to, xTicks, yTicks, xLabel = 'x', yLabel = 'y', at = -30, out, under, kids}) => (
	<StudioPlot x={x} y={y} width={w} height={h} window={win} xTicks={xTicks} yTicks={yTicks} xLabel={xLabel} yLabel={yLabel} at={at} out={out}>
		{m => <>
			{under ? under(m) : null}
			<g clipPath={m.clip}><path d={fnPath(m, fn, from ?? win.x[0], to ?? win.x[1])} stroke={ABLUE} strokeWidth={6.5} fill="none" strokeLinecap="round" /></g>
			{kids ? kids(m) : null}
		</>}
	</StudioPlot>
);
const RX = 1000;

// ---------- 1. hook ----------
const SH = {x: 1120, y: 175, h: 760};
export const S01: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K1;
	const sw = prog(fr, k.picture, 16);
	if (sw <= 0) return <I09FinalFrame />;
	const t = kf(fr, [[k.seconds + 20, 0], [k.ends, 2 * PI]], false);
	const flip = smooth(prog(fr, k.area4 + 10, 26));
	return (
		<>
			{sw < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}><I09FinalFrame /></div> : null}
			<div style={{position: 'absolute', inset: 0, opacity: sw}}>
				<SceneHeading text="How do signed integrals differ from total area?" at={k.picture - 10} size={54} />
				<BPlot x={40} y={150} w={1000} h={640} win={{x: [-0.3, 6.7], y: [-1.45, 1.45]}} fn={Math.sin} xTicks={[{value: PI, label: 'π'}, {value: 2 * PI, label: '2π'}]} yTicks={[-1, 1]} xLabel="t (s)" yLabel="v (floors per second)"
					under={m => <>
						{t > 0.01 ? <AreaFillLayer m={m} fn={Math.sin} a={0} to={Math.min(t, PI)} signed /> : null}
						{t > PI ? <FlipFill m={m} fn={Math.sin} a={PI} b={Math.min(t, 2 * PI)} p={flip} /> : null}
					</>}
					kids={m => {const [px] = m.p(t, 0); return <>
						{fr >= k.seconds ? <line x1={px} x2={px} y1={m.box.top} y2={m.box.top + m.box.height} stroke="#d18f1f" strokeWidth={4} strokeDasharray="8 8" /> : null}
						<PLabel p={m.p(1.25, 0.35)} text="2" color={INK} size={56} o={prog(fr, k.arch, 12)} />
						<PLabel p={m.p(4.4, flip > 0.5 ? 0.35 : -0.6)} text="2" color={INK} size={56} o={prog(fr, k.arch, 12)} />
						<PLabel p={m.p(0.2, -1.15)} text="up 2, down 2" color={SOFT} size={40} hand o={prog(fr, k.down, 12)} />
					</>;}} />
				<Named x={60} y={850} kind="int" at={k.keeps} size={48}>2 − 2 = 0</Named>
				<Named x={560} y={850} kind="area" at={k.doesnt} size={48}>2 + 2 = 4</Named>
				<div style={{position: 'absolute', inset: 0, transform: `translateX(${(1 - smooth(sw)) * 260}px)`}}><LiftShaftSim x={SH.x} y={SH.y} h={SH.h} lv={level(t)} /></div>
				<BoxCard x={1440} y={430} w={440} at={k.picture} out={k.area4 - 6} size={36} title="the lift">v = sin t floors per second, for 2π seconds</BoxCard>
				<BoxCard x={1440} y={640} w={440} at={k.picture + 20} out={k.so - 6} size={34} title="two questions">Where does it end up? How far did it go?</BoxCard>
				<LiveReadoutBoard x={1440} y={190} width={440} at={k.picture} inline size={48} labelSize={28} rows={[
					{label: 'velocity', value: Math.sin(t), digits: 2, role: 'a'},
					{label: 'net change', value: level(t), digits: 2, role: 'height'},
					{label: 'floors travelled', value: travelled(t), digits: 2, role: 'k'},
				]} />
				<Hand x={1450} y={520} at={k.up2} out={k.down} size={42} color={INK}>up 2</Hand>
				<Hand x={1450} y={520} at={k.ends} size={40} color={INK}>ends where it started</Hand>
				<Chip x={1440} y={600} at={k.area4} size={44} color="#d18f1f">Area = 2 + 2 = 4</Chip>
				<Chip x={1440} y={720} at={k.so} size={38} color={INK}>How do we find the area?</Chip>
			</div>
		</>
	);
};

// ---------- 2. above the axis ----------
const lin = (x: number) => 2 * x + 1;
export const S02: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K2;
	const sweep = smooth(prog(fr, 4, 40));
	return (
		<>
			<SceneHeading text="Above the axis: area = integral" at={4} size={56} />
			<BPlot x={40} y={150} w={920} h={800} win={{x: [-0.3, 3.6], y: [-0.6, 8.2]}} fn={lin} xTicks={[1, 2, 3]} yTicks={[3, 7]}
				under={m => <AreaFillLayer m={m} fn={lin} a={1} to={1 + 2 * sweep} signed bounds={{a: '', b: '', at: 0}} />}
				kids={m => {const o = prog(fr, k.trap, 12); const a = m.p(1, 0), b = m.p(1, 3), c = m.p(3, 7), d = m.p(3, 0); return <>
					<g opacity={o}><path d={`M${a[0]},${a[1]} L${b[0]},${b[1]} L${c[0]},${c[1]} L${d[0]},${d[1]} Z`} fill="none" stroke={INK} strokeWidth={4} strokeDasharray="12 8" /></g>
					<PLabel p={m.p(1.08, 1.5)} text="3" size={44} o={o} />
					<PLabel p={m.p(2.65, 3.5)} text="7" size={44} o={o} />
					<PLabel p={m.p(1.6, 0.5)} text="width 2" size={40} o={o} />
					<PLabel p={m.p(0.0, 7.6)} text="f(x) ≥ 0 on 1 ≤ x ≤ 3" color={TEAL} size={40} hand />
				</>;}} />
			<Task x={RX} y={150} w={880} at={-30} size={42}>Find the area under y = 2x + 1{'\n'}from x = 1 to x = 3.</Task>
			<BoxCard x={RX} y={330} w={880} at={-30} out={k.now - 4} size={42} title="every strip adds area">On or above the axis, every height is positive, so each strip adds area.</BoxCard>
			<Hand x={RX + 10} y={520} at={k.earlier} out={k.now - 4} size={42} color={SOFT}>earlier video, by geometry: 10</Hand>
			<Row x={RX + 10} y={330} at={k.now} size={50}><Int lo="1" hi="3">(2x + 1)</Int> = <Lims lo="1" hi="3">x² + x</Lims></Row>
			<Row x={RX + 10} y={440} at={k.ten - 30} size={50}>= 12 − (2) = 10</Row>
			<Named x={RX} y={570} kind="int" at={k.same2} size={50}>10</Named>
			<Named x={RX} y={670} kind="area" at={k.same2 + 8} size={50} frame={1}>10</Named>
			<Hand x={RX + 20} y={790} at={k.same2 + 20} size={46} color="#287347">same when f ≥ 0</Hand>
		</>
	);
};

// ---------- 3 and 4. below the axis, then a sign change ----------
const W34 = {x: [-0.3, 3.4] as [number, number], y: [-4.6, 5.6] as [number, number]};
export const S03: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K3;
	const flip = smooth(prog(fr, k.removed, 30));
	const pulse = prog(fr, k.every, 10) * (1 - prog(fr, k.prim, 10));
	return (
		<>
			<SceneHeading text="Below the axis: area = −(integral)" at={4} size={56} />
			<BPlot x={40} y={150} w={920} h={800} win={W34} fn={q4} xTicks={[1, 2, 3]} yTicks={[-4, 4]}
				under={m => <FlipFill m={m} fn={q4} a={0} b={2} p={flip} />}
				kids={m => <>
					{[0, 0.5, 1].map((x0, i) => {const [a, ay] = m.p(x0, 0), [b, by] = m.p(x0 + 0.5, q4(x0)); return <g key={i} opacity={pulse}><rect x={a} y={ay} width={b - a} height={by - ay} fill="#f2c4a0" stroke="#d18f1f" strokeWidth={4} /><text x={(a + b) / 2} y={by + 40} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: INK}} stroke={CARD} strokeWidth={6} paintOrder="stroke">{[-4, -3.75, -3][i]}</text></g>;})}
					{(() => {const o = prog(fr, k.length, 12) * (1 - flip); const [a, ay] = m.p(1.0, 0), [, by] = m.p(1.0, q4(1.25)); return <g opacity={o}><line x1={a - 20} x2={a - 20} y1={ay} y2={by} stroke="#d18f1f" strokeWidth={6} /><path d={`M${a - 32},${ay + 12} L${a - 20},${ay} L${a - 8},${ay + 12} M${a - 32},${by - 12} L${a - 20},${by} L${a - 8},${by - 12}`} stroke="#d18f1f" strokeWidth={5} fill="none" /></g>;})()}
					<PLabel p={m.p(0.1, 4.9)} text="f(x) ≤ 0 on 0 ≤ x ≤ 2" color={TEAL} size={40} hand />
					<PLabel p={m.p(0.15, 2.4)} text="length = −(height)" color="#9c5a00" size={42} hand o={prog(fr, k.length, 12)} />
					<PLabel p={m.p(0.6, flip > 0.5 ? 1.4 : -1.6)} text={flip > 0.5 ? '16/3' : '−16/3'} size={52} o={prog(fr, k.thirds, 12)} />
				</>} />
			<Task x={RX} y={150} w={880} at={-30} size={42}>Find the area between y = x² − 4{'\n'}and the x-axis, 0 ≤ x ≤ 2.</Task>
			<Row x={RX + 10} y={320} at={k.prim} size={48}>F(x) = x³/3 − 4x</Row>
			<Row x={RX + 10} y={400} at={k.at2} size={46}>F(2) − (F(0)) = (8/3 − 8) − (0)</Row>
			<Named x={RX} y={490} kind="int" at={k.thirds} size={48}>−16/3</Named>
			<Hand x={RX + 20} y={580} at={k.but} out={k.removed} size={44} color="#b8322a">an area can't be negative</Hand>
			<Named x={RX} y={580} kind="area" at={k.sixteen} size={48}>16/3</Named>
			<AnswerBox x={RX} y={700} at={k.write} size={44}>Area = |<Int lo="0" hi="2">(x² − 4)</Int>| = −<Int lo="0" hi="2">(x² − 4)</Int> = 16/3</AnswerBox>
		</>
	);
};

export const S04: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K4;
	const back = 1 - smooth(prog(fr, 0, 24));
	const flip = Math.max(back, smooth(prog(fr, k.but, 30)));
	const tl = kf(fr, [[k.lift, 0], [k.lift + 70, 2 * PI]]);
	const inset = 1;
	return (
		<>
			<SceneHeading text="Across the axis: above minus below" at={4} size={56} />
			<BPlot x={40} y={150} w={920} h={800} win={W34} fn={q4} xTicks={[1, 2, 3]} yTicks={[-4, 4]}
				under={m => <>
					<FlipFill m={m} fn={q4} a={0} b={2} p={flip} />
					{fr >= k.from ? <g opacity={prog(fr, k.from, 12)}><path d={regionPath(m, q4, 2, 3)} fill="#d6eeee" stroke="#1f8a8f" strokeWidth={3} /></g> : null}
				</>}
				kids={m => {const [zx, zy] = m.p(2, 0); return <>
					<g opacity={prog(fr, k.crosses, 12)}><circle cx={zx} cy={zy} r={14} fill={CARD} stroke={TEAL} strokeWidth={5} /><text x={zx - 12} y={zy - 22} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: TEAL}} stroke={CARD} strokeWidth={6} paintOrder="stroke">zero</text></g>
					<PLabel p={m.p(2.25, 1.2)} text="7/3" size={50} o={prog(fr, k.seven, 12)} />
					<PLabel p={m.p(0.6, flip > 0.5 ? 1.4 : -1.6)} text={flip > 0.5 ? '16/3' : '−16/3'} size={50} />
				</>;}} />
			{inset > 0.01 ? <div style={{position: 'absolute', inset: 0, opacity: inset}}><LiftShaftSim x={150} y={200} h={420} lv={level(tl)} tags={false} /></div> : null}
			<Hand x={330} y={560} at={k.lift + 10} size={40} color={INK}>floors up − floors down</Hand>
			<Row x={RX + 10} y={150} at={k.piece} size={38} color={SOFT}>F(3) − F(2) = −3 − (−16/3) = 7/3</Row>
			<Named x={RX} y={230} kind="int" at={k.whole} size={44}><Int lo="0" hi="3">(x² − 4)</Int> = F(3) − (F(0)) = −3</Named>
			<Row x={RX + 10} y={340} at={k.and} size={50}>−3 = 7/3 − 16/3</Row>
			<div style={{position: 'absolute', left: RX, top: 450, opacity: prog(fr, k.so, 14), background: CARD, border: '5px solid #287347', borderRadius: 18, padding: '8px 22px 12px', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: INK, whiteSpace: 'pre'}}>
				<Int lo="a" hi="b">f(x)</Int> = (area above) − (area below)
			</div>
			<Hand x={RX + 20} y={570} at={k.so + 30} size={36} color={TEAL}>f continuous</Hand>
			<LiveReadoutBoard x={RX} y={630} width={600} at={-30} inline size={40} labelSize={28} rows={[{label: 'lift: net change', value: level(tl), digits: 2, role: 'height'}, {label: 'floors travelled', value: travelled(tl), digits: 2, role: 'k'}]} />
			<Named x={RX} y={830} kind="area" at={k.forarea} size={48} frame={prog(fr, k.tt, 10)}>16/3 + 7/3<span style={{opacity: prog(fr, k.tt, 10)}}> = 23/3</span></Named>
		</>
	);
};
