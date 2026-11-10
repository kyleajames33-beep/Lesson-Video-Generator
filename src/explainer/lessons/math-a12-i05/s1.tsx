// Scenes 1 to 4: the hook (i04's sine frame, then the solar panels' day with live power and energy graphs, then
// the paired test of cos x at π/2), the flip to −cos x and its gradient trace, cos x and radians, and sec² x
// from tan x on its pieces.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, prog} from '../../kit';
import {CARD, Card, FrameSvg, HandTag, LiveReadoutBoard, MATH_EXCLUDED, StudioDerivativeWheel, SceneHeading, StudioPlot, fnPath, kf, makePlot, vis} from '../../math/studio';
import type {PlotMap} from '../../math/studio';
import {I04FinalFrame} from '../math-a12-i04/s3';
import {K1, K2, K3, K4} from './cuemap';
import {AMB, BLUE, BoxCard, Cc, Chip, GREY, Line, PAIR, PLabel, RED, SolarBoard, SolarGraph, SolarRig, Stub, Tick, TrigPair, V, VIOLET, WX, YBOT, YTOP, energy, power} from './parts';

const PI = Math.PI;
const RX = 1090;

// ---------- 1. hook ----------
export const S01: React.FC = () => {
	const f = useCurrentFrame();
	const k = K1;
	const sw = prog(f, k.home - 12, 16);
	if (sw <= 0) return <I04FinalFrame />;
	const t = kf(f, [[k.sunset, 0], [k.sunset + 90, 12], [k.fastest, 12], [k.fastest + 24, 6]]);
	const b = prog(f, k.prim, 16);
	const steep = prog(f, k.fastest + 24, 10);
	return (
		<>
			{sw < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}><I04FinalFrame /></div> : null}
			{b < 1 ? <div style={{position: 'absolute', inset: 0, opacity: sw * (1 - b)}}>
				<SceneHeading text="A home's solar panels over one day" at={k.home - 12} size={56} />
				<SolarRig x={40} bottom={950} w={760} t={t} />
				<SolarBoard x={850} y={150} width={1040} t={t} glow={[k.fastest + 24, 99999]} />
				<SolarGraph x={850} y={380} w={1040} h={270} t={t} kind="power">
					{m => <PLabel p={m.p(0.2, 5.4)} text="a sine hump" color={VIOLET} size={36} hand o={prog(f, k.sunset + 40, 12)} />}
				</SolarGraph>
				<SolarGraph x={850} y={680} w={1040} h={280} t={t} kind="energy">
					{m => <>
						<Stub m={m} X={6} Y={energy(6)} s={power(6)} o={steep} hl={120} />
						<PLabel p={m.p(6.6, 12)} text="steepest at noon" color={VIOLET} size={40} hand o={steep} />
						<PLabel p={m.p(0.2, 36)} text="gradient = power" color={INK} size={36} hand o={prog(f, k.grad, 12)} />
					</>}
				</SolarGraph>
			</div> : null}
			{b > 0 ? <div style={{position: 'absolute', inset: 0, opacity: b}}><S01B /></div> : null}
		</>
	);
};
const S01B: React.FC = () => {
	const f = useCurrentFrame();
	const k = K1;
	const g = prog(f, k.test, 12);
	return (
		<>
			<SceneHeading text="Which curve has gradient sin x?" at={k.prim} size={56} />
			<TrigPair topLabel="y: candidate primitive"
				top={m => {const a = m.p(PI / 2, YTOP[0]), c = m.p(PI / 2, YTOP[1]); return <>
					<line x1={a[0]} x2={c[0]} y1={a[1]} y2={c[1]} stroke="#8a8378" strokeWidth={3} strokeDasharray="10 9" opacity={g} />
					<g clipPath={m.clip}><path d={fnPath(m, Math.cos, WX[0], WX[1])} stroke={INK} strokeWidth={6.5} fill="none" opacity={prog(f, k.cos, 12)} /></g>
					<PLabel p={m.p(3.6, 1.75)} text="candidate: cos x" size={38} o={prog(f, k.cos, 12)} />
					<Stub m={m} X={PI / 2} Y={0} s={1} o={prog(f, k.one, 12)} dash="14 10" hl={130} />
					<PLabel p={m.p(0.1, 1.35)} text="need: climbing" color={VIOLET} size={40} hand o={prog(f, k.climbing, 12)} />
					<Stub m={m} X={PI / 2} Y={0} s={-1} o={prog(f, k.minus, 12)} color={INK} hl={130} />
					<PLabel p={m.p(2.0, -1.25)} text="cos x: falling" size={38} color={RED} o={prog(f, k.but + 20, 12)} />
				</>;}}
				bottom={m => {const a = m.p(PI / 2, YBOT[0]), c = m.p(PI / 2, YBOT[1]), p = m.p(PI / 2, 1); return <>
					<line x1={a[0]} x2={c[0]} y1={a[1]} y2={c[1]} stroke="#8a8378" strokeWidth={3} strokeDasharray="10 9" opacity={g} />
					<g clipPath={m.clip}><path d={fnPath(m, Math.sin, WX[0], WX[1])} stroke={VIOLET} strokeWidth={6} fill="none" /></g>
					<circle cx={p[0]} cy={p[1]} r={20} fill="none" stroke={VIOLET} strokeWidth={5} opacity={prog(f, k.one, 12)} />
					<PLabel p={m.p(3.3, 0.95)} text="sin x: the gradient we need" color={VIOLET} size={36} />
				</>;}} />
			<Chip x={RX} y={150} at={k.which} size={44} color={AMB}>which curve has gradient <V>sin x</V>?</Chip>
			<BoxCard x={RX} y={270} w={800} at={k.prim} out={k.one - 4} size={42} title="why">energy: gradient = power, a sine hump. So the energy curve is a primitive of a sine curve.</BoxCard>
			<LiveReadoutBoard x={RX} y={270} width={790} at={k.one} inline size={52} labelSize={30} rows={[{label: 'needed at π/2: sin(π/2)', value: 1, digits: 0, role: 'gradient'}]} />
			<LiveReadoutBoard x={RX} y={380} width={790} at={k.minus} inline size={52} labelSize={30} rows={[{label: 'gradient of cos x at π/2', value: -1, digits: 0}]} />
			<HandTag x={RX + 10} y={560} text="opposite sign" at={k.wrong} size={56} color={RED} />
			<BoxCard x={RX} y={630} w={800} at={k.where} size={48} border={RED}>So where does the minus sign go?</BoxCard>
		</>
	);
};

// ---------- 2. turn it upside down ----------
const Band: React.FC<{m: PlotMap; a: number; b: number; color: string; o: number}> = ({m, a, b, color, o}) => {
	if (o <= 0.001) return null;
	const p = m.p(a, 0), q = m.p(b, 0);
	return <rect x={p[0]} y={m.box.top} width={q[0] - p[0]} height={m.box.height} fill={color} opacity={0.45 * o} />;
};
export const S02: React.FC = () => {
	const f = useCurrentFrame();
	const k = K2;
	const s = kf(f, [[k.down, 1], [k.down + 30, -1]]);
	const flat = Math.abs(s);
	const pre = vis(f, k.at, k.down, 10) * flat;
	const post = prog(f, k.slope, 12);
	const rx = kf(f, [[k.watch + 8, 0.02], [k.watch + 130, 2 * PI - 0.02]], false);
	const tr = f >= k.watch + 8;
	const dots = tr ? Array.from({length: 33}, (_, i) => (i * 2 * PI) / 32).filter(X => X <= rx) : [];
	const climb = prog(f, k.climbs, 12), fall = prog(f, k.falls, 12);
	return (
		<>
			<SceneHeading text="Turn it upside down: −cos x" at={4} size={56} />
			<TrigPair topLabel={s > 0 ? 'y = cos x' : 'y = −cos x'}
				top={m => <>
					<Band m={m} a={0} b={PI} color="#cfe8e4" o={climb * (1 - prog(f, k.watch, 10))} />
					<Band m={m} a={PI} b={2 * PI} color="#f6e2bf" o={fall * (1 - prog(f, k.watch, 10))} />
					<g clipPath={m.clip}><path d={fnPath(m, x => s * Math.cos(x), WX[0], WX[1])} stroke={INK} strokeWidth={6.5} fill="none" /></g>
					<Stub m={m} X={1.5 * PI} Y={0} s={-1} o={pre} dash="14 10" hl={120} />
					<Stub m={m} X={1.5 * PI} Y={0} s={s} o={vis(f, k.one, k.down, 10) * flat} color={INK} hl={120} />
					<Stub m={m} X={PI / 2} Y={0} s={1} o={post} dash="14 10" hl={130} />
					<Stub m={m} X={1.5 * PI} Y={0} s={-1} o={post} dash="14 10" hl={130} />
					<Stub m={m} X={PI / 2} Y={0} s={1} o={post * (1 - prog(f, k.watch, 8))} color={INK} hl={90} />
					<Stub m={m} X={1.5 * PI} Y={0} s={-1} o={post * (1 - prog(f, k.watch, 8))} color={INK} hl={90} />
					{tr && f <= k.watch + 140 ? <Stub m={m} X={rx} Y={-Math.cos(rx)} s={Math.sin(rx)} hl={120} /> : null}
					<PLabel p={m.p(3.5, 1.8)} text={s > 0 ? 'cos x' : '−cos x'} size={42} o={flat} />
					<PLabel p={m.p(0.15, 1.8)} text="climbing" color="#1f6f66" size={38} hand o={climb * (1 - prog(f, k.watch, 10))} />
					<PLabel p={m.p(PI + 0.15, -1.35)} text="falling" color="#7a4600" size={38} hand o={fall * (1 - prog(f, k.watch, 10))} />
				</>}
				bottom={m => <>
					<Band m={m} a={0} b={PI} color="#cfe8e4" o={climb * (1 - prog(f, k.watch, 10))} />
					<Band m={m} a={PI} b={2 * PI} color="#f6e2bf" o={fall * (1 - prog(f, k.watch, 10))} />
					<g clipPath={m.clip}><path d={fnPath(m, Math.sin, WX[0], WX[1])} stroke={VIOLET} strokeWidth={6} fill="none" opacity={tr ? 0.35 : 1} />
						{tr ? <path d={fnPath(m, Math.sin, 0, Math.max(0.03, rx))} stroke={VIOLET} strokeWidth={6} fill="none" /> : null}</g>
					{dots.map(X => {const p = m.p(X, Math.sin(X)); return <circle key={X} cx={p[0]} cy={p[1]} r={9} fill={VIOLET} stroke={CARD} strokeWidth={3} />;})}
					{(() => {const p = m.p(1.5 * PI, -1); return <circle cx={p[0]} cy={p[1]} r={20} fill="none" stroke={VIOLET} strokeWidth={5} opacity={pre} />;})()}
					<PLabel p={m.p(3.4, 0.95)} text="sin x" color={VIOLET} size={38} />
					<PLabel p={m.p(0.15, -0.95)} text="dots: the gradient of −cos x" color={VIOLET} size={34} o={tr ? 1 : 0} />
				</>} />
			<Chip x={RX} y={150} at={-30} size={42} color={GREY}><V>d/dx</V> cos x = −sin x  (earlier video)</Chip>
			<LiveReadoutBoard x={RX} y={260} width={790} at={k.at} out={k.down} inline size={52} labelSize={30} rows={[
				{label: 'needed at 3π/2: sin(3π/2)', value: -1, digits: 0, role: 'gradient'},
				{label: 'gradient of cos x at 3π/2', value: 1, digits: 0, at: k.one},
			]} />
			<BoxCard x={RX} y={420} w={800} at={-30} out={k.every - 4} size={42} border={RED} title="last test, at π/2">needed gradient 1, but cos x gives −1</BoxCard>
			<HandTag x={RX + 10} y={460} text="opposite again: flip it" at={k.every} out={k.down} size={44} color={RED} />
			<LiveReadoutBoard x={RX} y={260} width={790} at={k.slope} inline size={52} labelSize={30} rows={[
				{label: 'gradient of −cos x at π/2', value: 1, digits: 0, role: 'gradient'},
				{label: 'gradient of −cos x at 3π/2', value: -1, digits: 0, role: 'gradient'},
			]} />
			<HandTag x={RX + 10} y={470} text="flipping reverses every slope" at={k.flipping} size={42} color={BLUE} />
			<BoxCard x={RX} y={540} w={800} at={k.climbs} out={k.diff - 4} size={40} border="#1f6f66">−cos x climbs on 0 &lt; x &lt; π, where sin x &gt; 0, and falls on π &lt; x &lt; 2π, where sin x &lt; 0</BoxCard>
			<Line x={RX} y={560} at={k.diff} size={44}><V>d/dx</V> (−cos x) = −(−sin x) = <V>sin x</V> <Tick size={44} o={prog(f, k.diff + 40, 10)} /></Line>
			<Chip x={RX} y={650} at={k.exactly} size={42} color={VIOLET}>gradients of −cos x = <V>sin x</V> <Tick size={40} /></Chip>
			<SolarGraph x={RX} y={560} w={800} h={380} t={12} kind="power" full out={k.climbs - 4}>
				{m => <>
					<PLabel p={m.p(0.3, 5.5)} text="power = 5 sin(πt/12)" color={VIOLET} size={36} />
					<PLabel p={m.p(6.6, 2.0)} text="energy needs a primitive of this" color={INK} size={34} hand />
				</>}
			</SolarGraph>
			<Card x={RX} y={740} w={800} h={210} at={k.climbs} out={k.so - 4} pad="10px 20px">
				<div style={{display: 'flex', alignItems: 'center', gap: 20}}>
					<div style={{flex: 'none', marginTop: -6}}><StudioDerivativeWheel size={230} dAt={[-60, -60, -60, -60]} labelSize={30} /></div>
					<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, lineHeight: 1.2, color: INK}}><V>d/dx</V>(−cos x) = <V>sin x</V><br /><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, color: BLUE}}>−cos x: one step on to sin x</span></div>
				</div>
			</Card>
			<BoxCard x={RX} y={800} at={k.so} size={54} border={INK} bw={5}>∫<V>sin x</V> dx = −cos x <Cc>+ C</Cc></BoxCard>
		</>
	);
};

// ---------- 3. cos x and radians ----------
export const S03: React.FC = () => {
	const f = useCurrentFrame();
	const k = K3;
	const rx = kf(f, [[k.rules + 30, 0.02], [k.rules + 100, 2 * PI - 0.02]], false);
	const tr = f >= k.rules + 30;
	const dots = tr ? Array.from({length: 33}, (_, i) => (i * 2 * PI) / 32).filter(X => X <= rx) : [];
	const tx = kf(f, [[k.at2, 0], [k.at2 + 24, PI / 2]]);
	const to = prog(f, k.at0, 12);
	const rg = prog(f, k.both, 12);
	return (
		<>
			<SceneHeading text="cos x, and why radians" at={4} size={56} />
			<TrigPair topLabel="y = sin x"
				top={m => <>
					<g clipPath={m.clip}><path d={fnPath(m, Math.sin, WX[0], WX[1])} stroke={INK} strokeWidth={6.5} fill="none" /></g>
					{tr && f < k.at0 ? <Stub m={m} X={rx} Y={Math.sin(rx)} s={Math.cos(rx)} hl={120} /> : null}
					<Stub m={m} X={tx} Y={Math.sin(tx)} s={Math.cos(tx)} o={to} hl={140} />
					<PLabel p={m.p(3.6, 1.7)} text="sin x" size={42} />
				</>}
				bottom={m => <>
					<g clipPath={m.clip}><path d={fnPath(m, Math.cos, WX[0], WX[1])} stroke={VIOLET} strokeWidth={6} fill="none" /></g>
					{dots.map(X => {const p = m.p(X, Math.cos(X)); return <circle key={X} cx={p[0]} cy={p[1]} r={9} fill={VIOLET} stroke={CARD} strokeWidth={3} />;})}
					{(() => {const p = m.p(tx, Math.cos(tx)); return <circle cx={p[0]} cy={p[1]} r={20} fill="none" stroke={VIOLET} strokeWidth={5} opacity={to} />;})()}
					<PLabel p={m.p(3.6, 0.95)} text="cos x" color={VIOLET} size={40} />
				</>} />
			<BoxCard x={RX} y={150} at={-30} size={40} border={GREY}>∫<V>sin x</V> dx = −cos x <Cc>+ C</Cc>  <span style={{background: rg > 0.01 ? `rgba(220,234,247,${rg})` : undefined, borderRadius: 8}}>(x in radians)</span></BoxCard>
			<Line x={RX} y={270} at={k.rules} size={44}><V>d/dx</V> sin x = <V>cos x</V></Line>
			<HandTag x={RX + 470} y={320} text="earlier video" at={k.rules + 10} size={36} color={GREY} />
			<LiveReadoutBoard x={RX} y={370} width={790} at={k.at0} inline size={52} labelSize={30} rows={[
				{label: 'x', value: tx, text: tx < 0.01 ? '0' : tx > PI / 2 - 0.01 ? 'π/2' : '…'},
				{label: 'gradient of sin x', value: Math.cos(tx), digits: 1, role: 'gradient'},
				{label: 'cos x', value: Math.cos(tx), digits: 1, role: 'gradient'},
			]} />
			<BoxCard x={RX} y={620} at={k.so + 40} size={54} border={INK} bw={5}>∫<V>cos x</V> dx = sin x <Cc>+ C</Cc></BoxCard>
			<HandTag x={RX + 10} y={790} text="no minus sign" at={k.nominus} size={44} color={INK} />
			<BoxCard x={RX} y={820} w={800} at={k.both} size={36} border={BLUE}>sin and cos derivatives need radians,<br />so these primitives do too</BoxCard>
		</>
	);
};

// ---------- 4. sec² x and tan x ----------
const W4: [number, number] = [-2.0, 5.1];
const T4 = [{value: -PI / 2, label: '−π/2'}, {value: PI / 4, label: 'π/4'}, {value: PI / 2, label: 'π/2'}, {value: PI, label: 'π'}, {value: 1.5 * PI, label: '3π/2'}];
const ASY = [-PI / 2, PI / 2, 1.5 * PI];
const PIECES4: [number, number][] = [[W4[0], -PI / 2], [-PI / 2, PI / 2], [PI / 2, 1.5 * PI], [1.5 * PI, W4[1]]];
const sec2 = (x: number) => 1 / Math.cos(x) ** 2;
export const S04: React.FC = () => {
	const f = useCurrentFrame();
	const k = K4;
	const tp = prog(f, k.at4, 12);
	const ring = prog(f, k.zero, 12);
	const pc = (i: number) => {const s = k.piece + i * 14; return vis(f, s, s + 26, 6);};
	const asy = (m: PlotMap) => ASY.map(a => {const p = m.p(a, 0); return <line key={a} x1={p[0]} x2={p[0]} y1={m.box.top} y2={m.box.top + m.box.height} stroke={MATH_EXCLUDED} strokeWidth={3.5} strokeDasharray="12 10" />;});
	const tint = (m: PlotMap) => PIECES4.slice(1, 3).map((pr, i) => {const a = m.p(pr[0], 0), b = m.p(pr[1], 0); const o = i === 0 ? pc(0) : pc(1); return o > 0.01 ? <rect key={i} x={a[0]} y={m.box.top} width={b[0] - a[0]} height={m.box.height} fill="#f6e2bf" opacity={0.6 * o} /> : null;});
	const tm = {x: PAIR.x, y: PAIR.y};
	return (
		<>
			<SceneHeading text="sec² x comes from tan x" at={4} size={56} />
			<StudioPlot x={tm.x} y={tm.y} width={PAIR.w} height={PAIR.hTop} window={{x: W4, y: [-4, 4]}} xTicks={T4} yTicks={[-2, 2]} yLabel="y = tan x" at={-30}>
				{m => {const p = m.p(PI / 4, 1), q = m.p(PI / 4 + 1, 1), r = m.p(PI / 4 + 1, 3); return <>
					{tint(m)}{asy(m)}
					<g clipPath={m.clip}>{PIECES4.map((pr, i) => <path key={i} d={fnPath(m, Math.tan, pr[0] + 0.004, pr[1] - 0.004)} stroke={INK} strokeWidth={6.5} fill="none" />)}</g>
					<g opacity={tp}><path d={`M${p[0]},${p[1]} H${q[0]} V${r[1]}`} stroke={BLUE} strokeWidth={5} fill="none" /></g>
					<Stub m={m} X={PI / 4} Y={1} s={2} o={tp} hl={140} />
					<PLabel p={[(p[0] + q[0]) / 2, p[1]]} dy={40} text="run 1" color={BLUE} size={32} anchor="middle" o={tp} />
					<PLabel p={[q[0], (q[1] + r[1]) / 2]} dx={12} dy={10} text="rise 2" color={BLUE} size={32} o={tp} />
					{(() => {const a = m.p(PI / 2, -3.2); return <ellipse cx={a[0]} cy={m.box.top + m.box.height / 2} rx={30} ry={m.box.height / 2 - 14} fill="none" stroke={RED} strokeWidth={5} strokeDasharray="14 10" opacity={ring} />;})()}
					<PLabel p={m.p(PI / 2 + 0.12, -3.3)} text="cos x = 0" color={RED} size={36} hand o={ring} />
				</>;}}
			</StudioPlot>
			<StudioPlot x={tm.x} y={tm.y + PAIR.hTop + PAIR.gap} width={PAIR.w} height={PAIR.hBottom} window={{x: W4, y: [-0.6, 6.5]}} xTicks={T4} yTicks={[1, 2, 4, 6]} yLabel="sec² x = 1/cos² x" at={-30}>
				{m => {const a = m.p(W4[0], 1), b = m.p(W4[1], 1); const nv = prog(f, k.never, 12); return <>
					{tint(m)}{asy(m)}
					<line x1={a[0]} x2={b[0]} y1={a[1]} y2={a[1]} stroke="#8a8378" strokeWidth={4} strokeDasharray="12 10" />
					<g clipPath={m.clip}>{PIECES4.map((pr, i) => <path key={i} d={fnPath(m, sec2, pr[0] + 0.004, pr[1] - 0.004)} stroke={VIOLET} strokeWidth={6} fill="none" />)}</g>
					{[0, PI].map(X => {const p = m.p(X, 1); return <circle key={X} cx={p[0]} cy={p[1]} r={18} fill="none" stroke={VIOLET} strokeWidth={5} opacity={nv} />;})}
					{(() => {const p = m.p(PI / 4, 2); return <circle cx={p[0]} cy={p[1]} r={18} fill="none" stroke={VIOLET} strokeWidth={5} opacity={prog(f, k.sec, 12)} />;})()}
					<PLabel p={m.p(2.1, 5.6)} text="never below 1" color={VIOLET} size={36} hand o={nv} />
				</>;}}
			</StudioPlot>
			{(() => {const a = makeTop().pf(PI / 4, 1), c = makeBot().pf(PI / 4, 2); const o = prog(f, k.sec, 12); return o > 0.01 ? <FrameSvg style={{opacity: o}}><line x1={a[0]} x2={c[0]} y1={a[1] + 16} y2={c[1] - 18} stroke={VIOLET} strokeWidth={4} strokeDasharray="10 9" /></FrameSvg> : null;})()}
			<BoxCard x={RX} y={150} w={800} at={-30} out={k.earlier - 4} size={42} title="the third rule">start from a derivative you already know</BoxCard>
			<Line x={RX} y={150} at={k.earlier} size={44}><V>d/dx</V> tan x = <V>sec² x</V> = <V>1/cos² x</V></Line>
			<HandTag x={RX + 560} y={252} text="earlier video" at={k.earlier + 10} size={36} color={GREY} />
			<BoxCard x={RX} y={290} at={k.so} size={54} border={INK} bw={5}>∫<V>sec² x</V> dx = tan x <Cc>+ C</Cc></BoxCard>
			<HandTag x={RX + 10} y={480} text="cos² x ≤ 1, so sec² x ≥ 1: tan x always climbs" at={k.never} size={38} color={VIOLET} />
			<LiveReadoutBoard x={RX} y={530} width={790} at={k.at4} inline size={52} labelSize={30} rows={[
				{label: 'gradient of tan x at π/4', value: 2, digits: 0, role: 'gradient', at: k.two},
				{label: 'sec²(π/4)', value: 2, digits: 0, role: 'gradient', at: k.sec},
			]} />
			<HandTag x={RX + 10} y={740} text="asymptotes where cos x = 0" at={k.zero} size={42} color={GREY} />
			<Chip x={RX} y={790} at={k.piece} size={42} color={AMB}>one piece at a time; <Cc>a constant each</Cc></Chip>
		</>
	);
};
const makeTop = () => makePlot(PAIR.x, PAIR.y, PAIR.w, PAIR.hTop, {x: W4, y: [-4, 4]});
const makeBot = () => makePlot(PAIR.x, PAIR.y + PAIR.hTop + PAIR.gap, PAIR.w, PAIR.hBottom, {x: W4, y: [-0.6, 6.5]});
