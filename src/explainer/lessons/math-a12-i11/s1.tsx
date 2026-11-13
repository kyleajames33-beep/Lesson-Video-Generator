// Scenes 1 to 5: the hook (i10's final frame, then the pool: water against the y-axis, no rule for ln x, layers lie
// sideways), sideways strips and ∫ x dy, the reflection in y = x, the area under ln x as rectangle minus water, and
// signs with sideways strips (x = y² − 4, i10's curve reflected).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, prog} from '../../kit';
import {AreaFillLayer, CARD, Card, CardTitle, EquationStrip, FrameSvg, HandTag, LiveReadoutBoard, PlateImg, SceneHeading, StudioPlot, TaskStrip, fnPath, kf, smooth, vis} from '../../math/studio';
import {I10FinalFrame} from '../math-a12-i10/s3';
import {K1, K2, K3, K4, K5} from './cuemap';
import {AMB, AMB_INK, Am, BLUE, Bl, BoxCard, Chip, E, GREY, Int, MiniPlot, Note, PLabel, POOL, PoolCut, RED_INK, SUMS, SegRow, Sideways, SquareGraph, TEAL, Tl, VIO, refl} from './parts';

export const HEAD1 = 'How do we find area using y and a reflected graph?';
const RX = 790;

// ---------- 1. hook ----------
const CUT = 12;
export const S01: React.FC = () => {
	const f = useCurrentFrame();
	const k = K1;
	if (f < CUT) return <I10FinalFrame />;
	const i10o = 1 - prog(f, k.beach - 6, 16);
	const sIn = prog(f, k.beach - 6, 16);
	const fill = f < k.sideways ? 1 : kf(f, [[k.sideways, 1], [k.sideways + 20, 0], [k.sideways + 70, 1]]);
	const vO = vis(f, k.so + 10, k.sideways, 12);
	const crossO = vis(f, k.so + 70, k.sideways, 10);
	return (
		<>
			{i10o > 0.001 ? <div style={{position: 'absolute', inset: 0, opacity: i10o}}><I10FinalFrame /></div> : null}
			{sIn > 0.001 ? <div style={{position: 'absolute', inset: 0, opacity: sIn}}>
				<SceneHeading text={HEAD1} at={k.beach} size={52} />
				<SquareGraph layers={f >= k.sideways + 20 ? 5 : 0}>
					{m => <>
						{[1.1, 1.75, 2.4].map(X => {const a = m.p(X, 0), b = m.p(X + 0.3, Math.log(X + 0.15)); return <g key={X} opacity={vO}>
							<rect x={a[0]} y={b[1]} width={b[0] - a[0]} height={a[1] - b[1]} fill="#f8e8c8" stroke="#d18f1f" strokeWidth={3} />
							<text x={(a[0] + b[0]) / 2} y={b[1] - 10} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, fill: AMB_INK}}>?</text>
							<path d={`M${a[0]},${b[1]} L${b[0]},${a[1]} M${b[0]},${b[1]} L${a[0]},${a[1]}`} stroke={RED_INK} strokeWidth={5} opacity={crossO} />
						</g>;})}
						<PLabel p={m.p(1.6, 1.25)} text="y = ln x" color={BLUE} size={40} />
						<PLabel p={m.p(0.15, 2.6)} text="water: against the y-axis" color="#2f6f8f" size={38} hand />
					</>}
				</SquareGraph>
				<div style={{position: 'absolute', inset: 0, opacity: 1 - prog(f, k.deep + 30, 16)}}><PlateImg plate={POOL} x={1000} y={170} w={860} /></div>
				<PoolCut x={RX} y={150} w={1090} fill={fill} layers={f >= k.sideways + 20 ? 5 : 0} hiLayer={f >= k.sideways + 70 ? 2 : undefined} tags={vis(f, k.deep + 40, k.sideways, 12)} at={k.deep} />
				<BoxCard x={RX} y={590} w={1090} at={k.beach + 30} size={40} title="the water's cross-section">between <Bl>y = ln x</Bl>, the y-axis, y = 0 and y = 1</BoxCard>
				<Chip x={RX} y={760} at={k.catch} out={k.sideways - 6} size={44} color={GREY}>∫ ln x dx: no rule in this course</Chip>
				<HandTag x={RX + 10} y={870} text="so we can't add these strips exactly" at={k.so + 70} out={k.sideways - 6} size={46} color={RED_INK} />
				<HandTag x={RX + 10} y={770} text="water settles in flat layers" at={k.sideways + 30} size={46} color="#2f6f8f" />
				<Chip x={RX} y={870} at={k.how - 6} size={48} color={AMB}>Area using y?</Chip>
			</div> : null}
		</>
	);
};

// ---------- 2. sideways strips: ∫ x dy ----------
export const S02: React.FC = () => {
	const f = useCurrentFrame();
	const k = K2;
	const n = f < k.thinner + 10 ? 5 : f < k.thinner + 50 ? 10 : 40;
	const yv = kf(f, [[k.iff, 0], [k.area, 1]]);
	const sum = n === 5 ? SUMS[0] : n === 10 ? SUMS[1] : SUMS[2];
	return (
		<>
			<SceneHeading text="Sideways strips: the integral of x, d y" at={4} size={52} />
			<SquareGraph region={0.6}>
				{m => {const hi = n === 5 ? 2 : undefined; const y0 = 2 / 5; const L = Math.exp(y0); const a = m.p(0, y0), b = m.p(L, y0 + 0.2); return <>
					<Sideways m={m} g={Math.exp} c={0} d={1} n={n} hi={hi} />
					{hi !== undefined ? <>
						<text x={b[0] + 14} y={(a[1] + b[1]) / 2 + 12} opacity={prog(f, k.each, 12)} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, fill: AMB_INK}} stroke={CARD} strokeWidth={14} strokeLinejoin="round" paintOrder="stroke">Δy</text>
						<text x={(a[0] + b[0]) / 2} y={b[1] - 12} textAnchor="middle" opacity={prog(f, k.its, 12)} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, fill: TEAL}} stroke={CARD} strokeWidth={14} strokeLinejoin="round" paintOrder="stroke">x</text>
					</> : null}
					<PLabel p={m.p(0.1, 1.9)} text={`Σ x Δy ≈ ${sum.toFixed(2)}  (n = ${n})`} size={36} color="#4f4840" o={prog(f, k.thinner, 12)} />
					<PLabel p={m.p(1.6, 1.25)} text="y = ln x" color={BLUE} size={40} />
					{[0, 1].map(Y => <PLabel key={Y} p={m.p(-0.5, Y)} dy={Y ? -44 : -10} text={String(Y)} color={AMB} size={40} o={prog(f, k.limits, 12)} />)}
				</>;}}
			</SquareGraph>
			<HandTag x={60} y={940} text="limits are heights (y-values)" at={k.limits} size={44} color={AMB} />
			<PoolCut x={1120} y={150} w={760} layers={5} hiLayer={2} />
			<Card x={RX} y={440} w={1090} at={k.each - 12} out={k.one - 8} pad="14px 28px 16px">
				<CardTitle>one layer</CardTitle>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 42, color: INK, lineHeight: 1.4}}>
					<div style={{opacity: prog(f, k.each, 12)}}>thickness <Am>Δy</Am>: a small change in y</div>
					<div style={{opacity: prog(f, k.its, 12)}}>length <Tl>x</Tl>: the curve’s x at that height</div>
					<div style={{opacity: prog(f, k.so, 12)}}>area ≈ <Tl>x</Tl> × <Am>Δy</Am></div>
				</div>
			</Card>
			<LiveReadoutBoard x={RX} y={440} width={1090} at={k.one} inline size={46} labelSize={30} rows={[
				{label: 'height y above the floor', value: yv, digits: 2, role: 'k', unit: 'm'},
				{label: 'layer length x', value: Math.exp(yv), digits: 2, role: 'b', unit: 'm', format: v => v.toFixed(2)},
				{label: 'water so far', value: Math.exp(yv) - 1, digits: 2, unit: 'm²', format: v => v.toFixed(2)},
			]} />
			<div style={{position: 'absolute', left: RX, top: 160, width: 310, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, lineHeight: 1.2, color: '#2f6f8f'}}>the water, cut into flat layers</div>
			<SegRow x={RX} y={670} size={50} segs={[{c: <>Area = <Int lo="0" hi="1" v="y" color={TEAL}>x</Int></>, at: k.one}]} />
			<SegRow x={RX} y={760} size={48} segs={[{c: <>y = ln x  ⟺  <Tl>x = eʸ</Tl></>, at: k.iff + 20}]} />
			<SegRow x={RX} y={850} size={50} segs={[{c: <><Int lo="0" hi="1" v="y" color={TEAL}>eʸ</Int> = e¹ − e⁰</>, at: k.area + 10}, {c: <>= e − 1</>, at: k.one2}, {c: <span style={{fontSize: 34, color: '#4f4840'}}>≈ 1.72 m²</span>, at: k.about}]} answerAt={k.one2 + 6} />
		</>
	);
};

// ---------- 3. reflect the picture in y = x ----------
export const S03: React.FC = () => {
	const f = useCurrentFrame();
	const k = K3;
	const p = smooth(prog(f, k.reflect + 10, 45));
	const pt = smooth(prog(f, k.reflecting + 6, 30)) * (1 - prog(f, k.reflect, 10));
	return (
		<>
			<SceneHeading text="Reflect the picture in y = x" at={4} size={52} />
			<SquareGraph p={p} diag={prog(f, k.graphs + 20, 14)} ghost={prog(f, k.reflect + 10, 14)} layers={f >= k.up ? 0 : 5}>
				{m => {const q = refl(2, Math.log(2), pt); const s = m.p(q[0], q[1]); return <>
					{f >= k.up ? Array.from({length: 5}, (_, i) => {const x0 = i / 5, x1 = (i + 1) / 5; const a = m.p(x0, Math.exp(x0)), b = m.p(x1, 0); return <rect key={i} x={a[0]} y={a[1]} width={b[0] - a[0]} height={b[1] - a[1]} fill="none" stroke="#4a8fb0" strokeWidth={2.5 + 2 * vis(f, k.up, k.up + 30, 8)} />;}) : null}
					<circle cx={s[0]} cy={s[1]} r={12} fill={VIO} stroke={CARD} strokeWidth={4} opacity={vis(f, k.reflecting, k.reflect, 10)} />
					<PLabel p={s} dx={18} dy={-14} text={pt < 0.5 ? '(2, ln 2)' : '(ln 2, 2)'} size={34} color={VIO} o={vis(f, k.reflecting, k.reflect, 10)} />
					<PLabel p={m.p(2.15, 2.75)} text="y = x" color={VIO} size={38} o={prog(f, k.graphs + 30, 12)} />
					<PLabel p={m.p(0.85, 2.72)} text="y = eˣ" color={BLUE} size={40} anchor="end" o={prog(f, k.curve, 12)} />
					<PLabel p={m.p(1.25, -0.48)} text="(this was the y-axis)" color={INK} size={40} hand o={prog(f, k.yaxis, 12)} />
					<PLabel p={m.p(1.12, 0.62)} text="x = 0 to x = 1" color={AMB_INK} size={40} hand o={prog(f, k.region, 12)} />
				</>;}}
			</SquareGraph>
			<SegRow x={RX} y={170} size={40} segs={[{c: <><Int lo="0" hi="1" v="y" color={TEAL}>eʸ</Int> = e − 1   <span style={{fontSize: 30, color: '#4f4840'}}>(the water)</span></>, at: -30}]} />
			<Note x={RX} y={262} at={k.graphs + 20} out={k.reflecting - 6} size={40} color={VIO}>y = eˣ and y = ln x: mirror images in y = x</Note>
			<Note x={RX} y={270} at={k.reflecting} size={40} color={VIO}>reflect in y = x:  (x, y) → (y, x),  sizes kept</Note>
			<SegRow x={RX} y={340} size={52} segs={[{c: <><Int lo="0" hi="1" v="x" color={BLUE}>eˣ</Int> = e − 1</>, at: k.thats}]} />
			<HandTag x={RX + 520} y={400} text="same integral, letter changed" at={k.its} size={42} color={VIO} />
			<PoolCut x={RX} y={520} w={1090} layers={5} />
			<HandTag x={RX + 20} y={945} text="the pool's water: also e − 1 m²" at={k.so} size={44} color="#2f6f8f" />
		</>
	);
};

// ---------- 4. the area under the log curve ----------
export const S04: React.FC = () => {
	const f = useCurrentFrame();
	const k = K4;
	const p = 1 - smooth(prog(f, 0, 30));
	const conc = vis(f, k.concrete, undefined, 12);
	return (
		<>
			<SceneHeading text="The area under the log curve" at={4} size={52} />
			<SquareGraph p={p} region={0.5 + 0.5 * vis(f, k.piece, k.piece + 40, 8)}>
				{m => {const [x0, y1] = m.p(0, 1), [x1, y0] = m.p(E, 0); return <>
					{f >= k.concrete ? <g clipPath={m.clip}><path d={`${fnPath(m, Math.log, 1, E)} L${x1},${y0} Z`} fill="#f3d9a6" opacity={0.25 + 0.65 * prog(f, k.other, 14)} stroke={AMB} strokeWidth={5} /></g> : null}
					<rect x={x0} y={y1} width={x1 - x0} height={y0 - y1} fill="none" stroke={INK} strokeWidth={5} strokeDasharray="14 9" opacity={prog(f, k.draw, 12)} />
					<PLabel p={m.p(E / 2, 1)} dy={-14} text="e m" size={38} anchor="middle" o={prog(f, k.draw + 20, 12)} />
					<PLabel p={m.p(E, 0.5)} dx={14} text="1 m" size={38} o={prog(f, k.draw + 30, 12)} />
					<PLabel p={m.p(0.25, 0.55)} text="water" color="#2f6f8f" size={36} o={prog(f, k.piece, 12)} />
					<PLabel p={m.p(1.95, 0.2)} text="concrete" color={AMB_INK} size={34} o={prog(f, k.other, 12)} />
					<PLabel p={m.p(0.6, 1.9)} text="y = ln x" color={BLUE} size={40} />
				</>;}}
			</SquareGraph>
			<PoolCut x={RX} y={150} w={1090} layers={5} concrete={conc * (0.35 + 0.65 * prog(f, k.other, 14))} rect={prog(f, k.draw, 12)}>
				{P => {const w = P(560, 450), c = P(1180, 520); const o = prog(f, k.ramp, 12); return <g opacity={o} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40}}>
					<text x={w[0]} y={w[1]} textAnchor="middle" fill="#2f6f8f" stroke={CARD} strokeWidth={14} strokeLinejoin="round" paintOrder="stroke">1.72 m²</text>
					<text x={c[0]} y={c[1]} textAnchor="middle" fill={AMB_INK} stroke={CARD} strokeWidth={14} strokeLinejoin="round" paintOrder="stroke">1.00 m²</text>
				</g>;}}
			</PoolCut>
			<Card x={RX} y={580} w={1090} at={10} out={k.concrete - 6} pad="14px 28px 16px">
				<CardTitle>the region we couldn’t do</CardTitle>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 42, color: INK, lineHeight: 1.35}}>under <Bl>y = ln x</Bl>, from x = 1 to x = e,<br />above the x-axis</div>
			</Card>
			<HandTag x={RX + 20} y={600} text="the ramp's concrete: area?" at={k.concrete} out={k.e - 6} size={44} color={AMB_INK} />
			<SegRow x={RX} y={580} size={48} segs={[{c: <>rectangle:  e × 1 = e</>, at: k.e}]} />
			<SegRow x={RX} y={660} size={48} segs={[{c: <>water:  e − 1</>, at: k.piece + 30}]} />
			<SegRow x={RX} y={740} size={50} segs={[{c: <>concrete = e − (e − 1)</>, at: k.so}, {c: <>= 1 m²</>, at: k.one}]} answerAt={k.one + 6} />
			<HandTag x={RX + 10} y={870} text="concrete = rectangle − water" at={k.other + 20} out={k.we - 6} size={44} color={INK} />
			<Chip x={RX} y={890} at={k.we} size={40} color={GREY}>∫ ln x dx: not needed</Chip>
		</>
	);
};

// ---------- 5. left of the y-axis: signs ----------
const g5 = (y: number) => y * y - 4;
const W5 = {x: 30, y: 240, w: 1100, h: 730};
const RX5 = 1170;
export const S05: React.FC = () => {
	const f = useCurrentFrame();
	const k = K5;
	const flip = smooth(prog(f, k.positive, 30));
	const sO = prog(f, k.take + 30, 14);
	return (
		<>
			<TaskStrip text="Sideways strips have signs" at={4} size={52} />
			<EquationStrip at={k.take - 10} y={160} size={40}>Find the area bounded by x = y² − 4, the y-axis and the lines y = 0 and y = 3.</EquationStrip>
			<StudioPlot x={W5.x} y={W5.y} width={W5.w} height={W5.h} window={{x: [-4.5, 5.5], y: [-1, 3.6]}} xTicks={[-4, -2, 2, 4].map(v => ({value: v, label: v < 0 ? `−${-v}` : String(v)}))} yTicks={[1, 2, 3]} at={-30}>
				{m => {const curve = Array.from({length: 121}, (_, i) => {const y = (3 * i) / 120; const q = m.p(g5(y), y); return `${i ? 'L' : 'M'}${q[0].toFixed(1)},${q[1].toFixed(1)}`;}).join(' '); return <>
					{(() => {const o1 = vis(f, k.when1, k.take, 12), o2 = vis(f, k.when2, k.take, 12); const a1 = m.p(0, 1.4), b1 = m.p(3, 1.0), a2 = m.p(-3, 2.6), b2 = m.p(0, 2.2); return <>
						<g opacity={o1}><rect x={a1[0]} y={a1[1]} width={b1[0] - a1[0]} height={b1[1] - a1[1]} fill="rgba(19,118,122,0.25)" stroke={TEAL} strokeWidth={4} /><text x={b1[0] + 14} y={b1[1] - 2} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, fill: TEAL}} stroke={CARD} strokeWidth={14} strokeLinejoin="round" paintOrder="stroke">x &gt; 0</text></g>
						<g opacity={o2}><rect x={a2[0]} y={a2[1]} width={b2[0] - a2[0]} height={b2[1] - a2[1]} fill="rgba(184,50,42,0.18)" stroke={RED_INK} strokeWidth={4} /><text x={a2[0]} y={a2[1] - 14} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, fill: RED_INK}} stroke={CARD} strokeWidth={14} strokeLinejoin="round" paintOrder="stroke">x &lt; 0</text></g>
					</>;})()}
					<g opacity={sO}><Sideways m={m} g={g5} c={0} d={3} n={12} signed flip={flip} /></g>
					{[0, 3].map(Y => <path key={Y} d={`M${m.p(-4.5, Y).join(',')} L${m.p(5.5, Y).join(',')}`} stroke={AMB} strokeWidth={3} strokeDasharray="10 9" opacity={prog(f, k.take + 20, 12)} />)}
					<path d={curve} stroke={BLUE} strokeWidth={6.5} fill="none" opacity={prog(f, k.take, 12)} />
					{(() => {const q = m.p(0, 2); return <circle cx={q[0]} cy={q[1]} r={11} fill={CARD} stroke={BLUE} strokeWidth={4} opacity={prog(f, k.take + 20, 12)} />;})()}
					<PLabel p={m.p(2.6, 2.35)} text="x = y² − 4" color={BLUE} size={40} o={prog(f, k.take, 12)} />
					<PLabel p={m.p(-4.3, 1.55)} text="left: subtracts" color={RED_INK} size={40} hand o={vis(f, k.when2, k.positive, 12)} />
					<PLabel p={m.p(1.2, 3.25)} text="right: adds" color={TEAL} size={40} hand o={prog(f, k.when1 + 40, 12)} />
					<PLabel p={m.p(1.0, 0.7)} text="16/3" color={RED_INK} size={44} o={prog(f, k.positive + 30, 12)} />
				</>;}}
			</StudioPlot>
			<Card x={RX5 - 20} y={250} w={760} at={10} out={k.from1 - 26} pad="16px 26px 18px">
				<CardTitle>a sideways strip’s sign</CardTitle>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, color: INK, lineHeight: 1.5}}>
					<div>area ≈ x × Δy</div>
					<div style={{color: TEAL, opacity: prog(f, k.when1, 12)}}>right of the y-axis: x &gt; 0, adds</div>
					<div style={{color: RED_INK, opacity: prog(f, k.when2, 12)}}>left of the y-axis: x &lt; 0, subtracts</div>
				</div>
			</Card>
			<SegRow x={RX5} y={540} size={46} out={k.from1 - 26} segs={[{c: <>x = 3, Δy = 0.25:  x Δy = <Tl>+0.75</Tl></>, at: k.when1 + 40}]} />
			<SegRow x={RX5} y={630} size={46} out={k.from1 - 26} segs={[{c: <>x = −3, Δy = 0.25:  x Δy = <span style={{color: RED_INK}}>−0.75</span></>, at: k.when2 + 40}]} />
			<Note x={RX5} y={250} at={k.from1 - 20} size={34}>F(y) = y³/3 − 4y</Note>
			<SegRow x={RX5} y={305} size={46} segs={[{c: <><Int lo="0" hi="2" v="y">(y² − 4)</Int> = −16/3</>, at: k.thirds1}]} />
			<Note x={RX5} y={410} at={k.own} size={32} color={RED_INK}>x ≤ 0 throughout: area = −∫ = 16/3</Note>
			<SegRow x={RX5} y={465} size={46} segs={[{c: <><Int lo="2" hi="3" v="y">(y² − 4)</Int> = 7/3</>, at: k.thirds2}]} />
			<SegRow x={RX5} y={570} size={48} segs={[{c: <>area = 16/3 + 7/3 = 23/3</>, at: k.thirds3}]} answerAt={k.thirds3 + 6} />
			<Note x={RX5} y={660} at={k.thirds3 + 30} size={32}>signed:  ∫₀³ x dy = −3</Note>
			<MiniPlot x={RX5 - 20} y={700} w={720} h={250} win={{x: [-0.3, 3.3], y: [-4.6, 5.6]}} xTicks={[1, 2, 3]} yTicks={[-4, 4]} at={k.numbers} curves={[{fn: x => x * x - 4, from: 0, to: 3, color: BLUE, width: 5}]}>
				{m => <><AreaFillLayer m={m} fn={x => x * x - 4} a={0} to={3} signed /><PLabel p={m.p(0.15, 4.0)} text="last video: y = x² − 4" size={30} /></>}
			</MiniPlot>
			<HandTag x={RX5} y={965} text="last video's curve, reflected in y = x" at={k.x} size={42} color={VIO} />
		</>
	);
};
export {Am, Bl, FrameSvg, FONT_HAND, RED_INK};
