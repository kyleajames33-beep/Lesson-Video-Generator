// Scenes 6 to 9: finishing the waiting term (4 ln|x| beside ln|x|: the constant multiple stretches every slope),
// the fundraiser's total (C slides onto the day-one $2000, then the doubling ladder with equal + $693 steps), the
// linear inside (ln|u| squashed by 2, slid by 3/2, then halved: the gradient readout goes 1, 2, 1), f′/f with an
// always-positive bottom and its sign-changing contrast, and the second mixed task.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, prog} from '../../kit';
import {CARD, Card, HandTag, InnerSlot, LiveReadoutBoard, MATH_AMBER, MATH_EXCLUDED, MistakeCard, SceneHeading, StudioPlot, fnPath, kf} from '../../math/studio';
import {K6, K6A, K7, K8, K9} from './cuemap';
import {AMB, AnswerBox, BLUE, Bl, BoxCard, Cc, Chip, Frac, FundBoard, FundGraph, FundRig, GREY, GapLine, LADDER, Line, MiniPlot, PLabel, RED, Tick, V, VIOLET, total} from './parts';

const ln = Math.log;
const lnA = (x: number) => ln(Math.abs(x));
const tk = (vs: number[]) => vs.map(v => ({value: v, label: v < 0 ? `−${-v}` : String(v)}));

// ---------- 6. finishing the waiting term ----------
const RX6 = 960;
export const S06: React.FC = () => {
	const f = useCurrentFrame();
	const k = K6;
	return (
		<>
			<SceneHeading text="Finishing the waiting term" at={4} size={56} />
			<MiniPlot x={30} y={150} w={880} h={810} win={{x: [-4.5, 4.5], y: [-6, 7]}} xTicks={[-4, -2, 2, 4]} yTicks={[-4, -2, 2, 4, 6]}
				curves={[
					{fn: lnA, from: -4.5, to: -0.01, color: '#9b9387', dash: '12 10', width: 4}, {fn: lnA, from: 0.01, to: 4.5, color: '#9b9387', dash: '12 10', width: 4},
					{fn: x => 4 * lnA(x), from: -4.5, to: -0.01, color: INK}, {fn: x => 4 * lnA(x), from: 0.01, to: 4.5, color: INK},
				]}>
				{m => {const p = m.p(2, 4 * ln(2)), s = 2, vx = m.sx, vy = -s * m.sy, l = Math.hypot(vx, vy), hl = 150; const o = prog(f, k.its + 30, 12); return <>
					<g opacity={o}><line x1={p[0] - (vx / l) * hl} y1={p[1] - (vy / l) * hl} x2={p[0] + (vx / l) * hl} y2={p[1] + (vy / l) * hl} stroke={VIOLET} strokeWidth={6} strokeLinecap="round" /><circle cx={p[0]} cy={p[1]} r={12} fill={VIOLET} stroke={CARD} strokeWidth={4} /></g>
					<PLabel p={m.p(-4.3, 6.2)} text="y = 4 ln|x|" size={42} />
					<PLabel p={m.p(1.2, -1.2)} text="ln|x| (dashed)" size={34} color="#6f675b" />
					<PLabel p={m.p(1.3, -5.2)} text="gradient at 2: 4/2 = 2" size={36} color={VIOLET} o={o} />
					<PLabel p={m.p(-4.3, -5.0)} text="× 4: every slope × 4" size={40} color={BLUE} hand o={o} />
					<PLabel p={m.p(0.15, -3.6)} text="x = 0: excluded" size={32} color="#6f675b" />
				</>;}}
			</MiniPlot>
			<BoxCard x={RX6} y={150} w={930} at={-30} size={50} title="task">Find ∫(2e³ˣ + <V g={prog(f, k.comes, 10)}><Frac n="4" d="x" /></V>) dx</BoxCard>
			<Line x={RX6 + 10} y={300} at={-30} size={40} dim={1}>∫2e³ˣ dx = ⅔e³ˣ</Line>
			<HandTag x={RX6 + 420} y={338} text="last video" at={-30} size={36} color={GREY} />
			<Line x={RX6 + 10} y={390} at={k.four} size={48}>∫<V><Frac n="4" d="x" /></V> dx = 4 ∫<V><Frac n="1" d="x" /></V> dx</Line>
			<Line x={RX6 + 10} y={510} at={k.its + 30} size={52}>= 4 ln|x|</Line>
			<HandTag x={RX6 + 300} y={560} text="constant multiple" at={k.its + 40} size={40} color={GREY} />
			<BoxCard x={RX6} y={630} w={930} at={-30} out={k.answer - 4} size={40} title="the plan">1. each term by its own rule<br />2. one <Cc>+ C</Cc> for the whole answer<br />3. differentiate back to check</BoxCard>
			<AnswerBox x={RX6} y={620} at={k.answer} size={50}>= ⅔e³ˣ + 4 ln|x| <Cc>+ C</Cc></AnswerBox>
			<Chip x={RX6} y={740} at={k.one} size={40} color={AMB}>one <Cc>+ C</Cc> for the whole answer</Chip>
			<Chip x={RX6 + 590} y={740} at={k.zero} size={40} color={GREY}>x ≠ 0</Chip>
			<Line x={RX6 + 10} y={850} at={k.diff} size={44}><V>d/dx</V>: ⅔ · 3e³ˣ + 4 · <Frac n="1" d="x" /> = 2e³ˣ + <V><Frac n="4" d="x" /></V> <Tick size={44} o={prog(f, k.comes, 10)} /></Line>
		</>
	);
};

// ---------- 6a. the fundraiser's total ----------
const RX6A = 1200;
export const S06A: React.FC = () => {
	const f = useCurrentFrame();
	const k = K6A;
	const t = kf(f, [[k.each, 1], [k.each + 150, 32]]);
	const C = kf(f, [[k.cIs - 24, 0], [k.thousand + 6, 2000]]);
	const ghostO = prog(f, k.cIs - 24, 10) * (1 - prog(f, k.each, 14));
	const tagO = prog(f, k.dollars, 12);
	return (
		<>
			<SceneHeading text="The fundraiser's total" at={4} size={56} />
			<FundRig x={50} y={170} h={780} value={total(t)} />
			<FundBoard x={400} y={150} width={780} t={t} size={44} glow={{rate: [k.down - 10, 99999], total: [k.never, 99999]}} />
			<FundGraph x={420} y={390} w={760} h={570} t={t} kind="total" C={C} full xTicks={LADDER}>
				{m => {
					const steps = LADDER.slice(1).map((b, i) => ({a: LADDER[i], b, on: Math.min(1, Math.max(0, (t - b) / (0.12 * b) + 0.4))}));
					return <>
						<g clipPath={m.clip} opacity={ghostO}><path d={fnPath(m, u => total(u, 0), 1, 32)} stroke={MATH_EXCLUDED} strokeWidth={4} strokeDasharray="12 10" fill="none" /></g>
						{(() => {const p = m.p(1, 2000); return <circle cx={p[0]} cy={p[1]} r={22} fill="none" stroke={MATH_AMBER} strokeWidth={5} opacity={prog(f, k.after, 12)} />;})()}
						{(() => {const a = m.p(1, 0), b = m.p(1, C); const o = prog(f, k.cIs - 24, 10) * (1 - prog(f, k.each, 12)); return C > 30 ? <g opacity={o}><line x1={a[0] + 30} x2={b[0] + 30} y1={a[1]} y2={b[1] + 10} stroke={MATH_AMBER} strokeWidth={6} strokeLinecap="round" /><path d={`M${b[0] + 18},${b[1] + 18} L${b[0] + 30},${b[1]} L${b[0] + 42},${b[1] + 18}`} stroke={MATH_AMBER} strokeWidth={6} fill="none" strokeLinecap="round" /></g> : null;})()}
						<PLabel p={m.p(1.6, 2000)} dy={-30} text="$2000 at t = 1" size={34} color="#7a4600" o={prog(f, k.after, 12) * (1 - prog(f, k.each, 12))} />
						{steps.map(s => {const p0 = m.p(s.a, total(s.a)), p1 = m.p(s.b, total(s.a)), p2 = m.p(s.b, total(s.b)); return <g key={s.b} opacity={s.on}>
							<line x1={p0[0]} x2={p1[0]} y1={p0[1]} y2={p1[1]} stroke="#8a8378" strokeWidth={3} strokeDasharray="8 7" />
							<line x1={p1[0]} x2={p2[0]} y1={p1[1]} y2={p2[1]} stroke={MATH_AMBER} strokeWidth={8} strokeLinecap="round" />
							<circle cx={p2[0]} cy={p2[1]} r={9} fill={INK} />
							{s.b >= 8 ? <text x={p1[0] - 8} y={p1[1] + 36} textAnchor="end" opacity={tagO} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, fill: '#7a4600'}} stroke={CARD} strokeWidth={6} paintOrder="stroke">+$693</text> : null}
						</g>;})}
						<PLabel p={m.p(9, 1600)} text="+ $693 each doubling" size={44} color="#7a4600" hand o={tagO} />
						<PLabel p={m.p(9, 900)} text="1000 ln 2 ≈ 693" size={36} color="#6f675b" o={tagO} />
						<PLabel p={m.p(20, 6250)} text="still growing" size={44} hand o={prog(f, k.never, 12)} />
					</>;
				}}
			</FundGraph>
			<Card x={RX6A} y={150} w={690} at={-30} pad="10px 24px 12px">
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: '#4f4840'}}>GIVEN</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: INK, lineHeight: 1.3}}>rate <V>1000/t</V> dollars a day<br /><span style={{color: '#7a4600'}}>$2000</span> in at t = 1</div>
			</Card>
			<Line x={RX6A} y={350} at={k.total} size={40}>D = ∫<V><Frac n="1000" d="t" /></V> dt = 1000 ln t <Cc>+ C</Cc></Line>
			<HandTag x={RX6A + 10} y={490} text="t > 0: no | | needed" at={k.here} size={40} color={GREY} />
			<Line x={RX6A} y={520} at={k.after} size={40}>2000 = 1000 ln 1 <Cc>+ C</Cc> = 0 <Cc>+ C</Cc></Line>
			<Line x={RX6A} y={600} at={k.cIs} size={52}><Cc>C = 2000</Cc></Line>
			<AnswerBox x={RX6A} y={690} at={k.thousand} size={46}>D = 1000 ln t + 2000</AnswerBox>
			<MistakeCard x={RX6A} y={800} w={690} at={k.thousand + 40} size={42} wrong={<>C = 0</>} caption="C is the day-one total" />
		</>
	);
};

// ---------- 7. a linear inside ----------
const RX7 = 1040;
const W7 = {x: [-1, 4] as [number, number], y: [-2.5, 1.8] as [number, number]};
export const S07: React.FC = () => {
	const f = useCurrentFrame();
	const k = K7;
	const kk = kf(f, [[k.squashed, 1], [k.squashed + 60, 2]]);
	const h = kf(f, [[k.slid, 0], [k.slid + 50, 1.5]]);
	const a = kf(f, [[k.divide, 1], [k.divide + 50, 0.5]]);
	const g = (x: number) => a * lnA(kk * (x - h));
	const xp = h + 1 / kk, slope = a * kk;
	const ghostO = prog(f, k.squashed, 10);
	const gapO = prog(f, k.too, 12);
	return (
		<>
			<SceneHeading text="A linear inside: 1/(2x − 3)" at={4} size={56} />
			<StudioPlot x={30} y={150} width={960} height={810} window={W7} xTicks={[-1, 1, {value: 1.5, label: '3/2'}, 2, 3, 4]} yTicks={[-2, -1, 1]} at={-30}>
				{m => {
					const p = m.p(xp, 0), q = m.p(xp + 1 / kk, 0), r = m.p(xp + 1 / kk, slope / kk);
					const vx = m.sx, vy = -slope * m.sy, l = Math.hypot(vx, vy), hl = 170;
					const as = m.p(h, 0);
					return <>
						<g clipPath={m.clip}>
							<line x1={as[0]} x2={as[0]} y1={m.box.top} y2={m.box.top + m.box.height} stroke={MATH_EXCLUDED} strokeWidth={gapO > 0 ? 5 : 3} strokeDasharray="12 10" />
							<path d={fnPath(m, lnA, -1, -0.01)} stroke="#9b9387" strokeWidth={4} strokeDasharray="12 10" fill="none" opacity={ghostO} />
							<path d={fnPath(m, lnA, 0.01, 4)} stroke="#9b9387" strokeWidth={4} strokeDasharray="12 10" fill="none" opacity={ghostO} />
							<path d={fnPath(m, g, -1, h - 0.003)} stroke={INK} strokeWidth={6.5} fill="none" strokeLinecap="round" />
							<path d={fnPath(m, g, h + 0.003, 4)} stroke={INK} strokeWidth={6.5} fill="none" strokeLinecap="round" />
							<path d={`M${p[0]},${p[1]} H${q[0]} V${r[1]}`} stroke={BLUE} strokeWidth={5} fill="none" />
							<line x1={p[0] - (vx / l) * hl} y1={p[1] - (vy / l) * hl} x2={p[0] + (vx / l) * hl} y2={p[1] + (vy / l) * hl} stroke={VIOLET} strokeWidth={6} strokeLinecap="round" />
						</g>
						<circle cx={p[0]} cy={p[1]} r={12} fill={VIOLET} stroke={CARD} strokeWidth={4} />
						<PLabel p={[(p[0] + q[0]) / 2, p[1]]} dy={42} text={kk > 1.5 ? 'run ½' : 'run 1'} color={BLUE} size={34} anchor="middle" />
						<PLabel p={[q[0], (q[1] + r[1]) / 2]} dx={14} dy={12} text={a < 0.75 ? 'rise ½' : 'rise 1'} color={BLUE} size={34} />
						<PLabel p={m.p(2.55, -1.55)} text={a < 0.75 ? 'y = ½ ln|2x − 3|' : kk > 1.5 && h > 1 ? 'y = ln|2x − 3|' : kk > 1.02 ? 'squashed by 2' : 'y = ln|u|'} size={40} />
						<PLabel p={m.p(-0.9, -2.15)} text="ln|u| (dashed): before" size={32} color="#6f675b" o={ghostO * (1 - gapO)} />
						<PLabel p={m.p(1.58, -2.15)} text="gap: x = 3/2" size={34} color="#4f4840" o={gapO} />
					</>;
				}}
			</StudioPlot>
			<Chip x={110} y={170} at={k.works} size={32} color={GREY}>∫<Frac n="1" d="ax + b" /> dx = <Frac n="1" d={<Bl>a</Bl>} /> ln|ax + b| <Cc>+ C</Cc>, a ≠ 0</Chip>
			<BoxCard x={RX7} y={150} w={850} at={-30} size={50} title="task">Find ∫<V><Frac n="1" d={<InnerSlot>2x − 3</InnerSlot>} /></V> dx</BoxCard>
			<BoxCard x={RX7} y={330} w={850} at={-30} out={k.tryit - 4} size={42} title="the plan">1. try ln|inside|<br />2. differentiate and compare<br />3. fix the factor in front</BoxCard>
			<Line x={RX7 + 10} y={320} at={k.tryit} size={46}>try ln|<InnerSlot>2x − 3</InnerSlot>|</Line>
			<Line x={RX7 + 10} y={410} at={k.chain} size={44}><V>d/dx</V> ln|2x − 3| = <Frac n={<Bl>2</Bl>} d="2x − 3" /></Line>
			<HandTag x={RX7 + 20} y={548} text="= 2 × 1/(2x − 3): twice too big" at={k.want} size={40} color={RED} />
			<LiveReadoutBoard x={RX7} y={580} width={850} at={-30} inline size={52} labelSize={30} rows={[
				{label: 'marked point x', value: xp, digits: 2},
				{label: 'gradient there', value: slope, digits: 2, role: 'gradient', glow: [k.every - 10, k.every + 60]},
			]} />
			<AnswerBox x={RX7} y={740} at={k.answer + 30} size={42}>∫<Frac n="1" d="2x − 3" /> dx = <Bl>½</Bl> ln|2x − 3| <Cc>+ C</Cc></AnswerBox>
			<GapLine x={RX7} y={850} w={850} range={[-1, 4]} excluded={[1.5]} ticks={[{value: 0, label: '0'}, {value: 1.5, label: '3/2'}, {value: 3, label: '3'}]} at={k.too} />
			<HandTag x={RX7 + 330} y={890} text="either side, not across" at={k.works} size={36} color={INK} />
		</>
	);
};

// ---------- 8. f′/f ----------
const RX8 = 1080;
export const S08: React.FC = () => {
	const f = useCurrentFrame();
	const k = K8;
	const bars = 1 - prog(f, k.go, 14);
	return (
		<>
			<SceneHeading text="The top is the bottom's derivative" at={4} size={56} />
			<BoxCard x={60} y={150} w={960} at={-30} size={54} title="task">Find ∫<V><Frac n={<Bl g={prog(f, k.top, 12)}>2x</Bl>} d={<InnerSlot>x² + 4</InnerSlot>} /></V> dx</BoxCard>
			<BoxCard x={60} y={340} w={960} at={-30} out={k.its - 4} size={42} title="the plan">1. differentiate the bottom<br />2. compare it with the top<br />3. if they match: ln|bottom|</BoxCard>
			<Line x={70} y={360} at={k.its} size={48}><V>d/dx</V> (x² + 4) = <Bl>2x</Bl></Line>
			<HandTag x={600} y={420} text="top = bottom's derivative" at={k.top} size={42} color={BLUE} />
			<Line x={70} y={480} at={k.chain} size={40}><V>d/dx</V> ln|f(x)| = <Frac n="f′(x)" d="f(x)" />, where f(x) ≠ 0</Line>
			<HandTag x={850} y={530} text="chain rule" at={k.chain + 20} size={36} color={GREY} />
			<Line x={70} y={600} at={k.so} size={46}>∫<Frac n="2x" d="x² + 4" /> dx = ln<span style={{opacity: bars}}>|</span>x² + 4<span style={{opacity: bars}}>|</span> <Cc>+ C</Cc></Line>
			<AnswerBox x={60} y={730} at={k.go} size={48}>= ln(x² + 4) <Cc>+ C</Cc>, all real x</AnswerBox>
			<Chip x={60} y={860} at={k.keep} size={36} color={GREY}>but ∫<Frac n="2x" d="x² − 4" /> dx = ln<span style={{color: RED}}>|</span>x² − 4<span style={{color: RED}}>|</span> <Cc>+ C</Cc>, x ≠ ±2</Chip>
			<MiniPlot x={RX8} y={150} w={810} h={400} win={{x: [-3.2, 3.2], y: [-1, 14]}} xTicks={[-2, 2]} yTicks={[4, 8, 12]} curves={[{fn: x => x * x + 4, from: -3.2, to: 3.2, color: INK}]}>
				{m => {const a = m.p(-3.2, 4), b = m.p(3.2, 4); const o = prog(f, k.here, 12); return <>
					<line x1={a[0]} x2={b[0]} y1={a[1]} y2={a[1]} stroke="#8a8378" strokeWidth={4} strokeDasharray="12 10" opacity={o} />
					<PLabel p={m.p(-3.0, 12.6)} text="bottom: y = x² + 4" size={36} />
					<PLabel p={m.p(-1.2, 2.2)} text="x² + 4 ≥ 4 > 0" size={40} color="#287347" hand o={prog(f, k.positive, 12)} />
				</>;}}
			</MiniPlot>
			<MiniPlot x={RX8} y={570} w={810} h={390} win={{x: [-3.2, 3.2], y: [-0.7, 0.7]}} xTicks={[-2, 2]} yTicks={[-0.5, 0.5]} out={k.but - 4}
				curves={[{fn: x => (2 * x) / (x * x + 4), from: -3.2, to: 3.2, color: VIOLET}]}>
				{m => <PLabel p={m.p(-3.0, 0.55)} text="integrand: defined for every x" size={34} color={VIOLET} />}
			</MiniPlot>
			<MiniPlot x={RX8} y={570} w={810} h={390} win={{x: [-3.2, 3.2], y: [-5, 6]}} xTicks={[-2, 2]} yTicks={[-4, 4]} at={k.but}
				curves={[{fn: x => x * x - 4, from: -3.2, to: 3.2, color: INK}]}>
				{m => <>
					{[-2, 2].map(X => {const p = m.p(X, 0); return <circle key={X} cx={p[0]} cy={p[1]} r={16} fill={CARD} stroke={MATH_EXCLUDED} strokeWidth={5} opacity={prog(f, k.change, 12)} />;})}
					<PLabel p={m.p(-3.0, 5.0)} text="y = x² − 4 changes sign" size={36} />
					<PLabel p={m.p(-1.2, -2.6)} text="gaps at ±2" size={40} color={RED} hand o={prog(f, k.gaps, 12)} />
				</>}
			</MiniPlot>
		</>
	);
};

// ---------- 9. the second mixed task ----------
const RX9 = 960;
const we2 = (x: number) => Math.exp(-x) + 3 / x + x * x;
export const S09: React.FC = () => {
	const f = useCurrentFrame();
	const k = K9;
	return (
		<>
			<SceneHeading text="One more from last video" at={4} size={56} />
			<MiniPlot x={30} y={150} w={880} h={810} win={{x: [-2.2, 3], y: [-10, 14]}} xTicks={[-2, -1, 1, 2, 3]} yTicks={[-8, -4, 4, 8, 12]}
				curves={[{fn: we2, from: -2.2, to: -0.02, color: VIOLET}, {fn: we2, from: 0.02, to: 3, color: VIOLET}]}>
				{m => {const a = m.p(0, -10), b = m.p(0, 14), o = m.p(0, 0); const z = prog(f, k.zero, 12); return <>
					<line x1={a[0]} x2={b[0]} y1={a[1]} y2={b[1]} stroke={MATH_EXCLUDED} strokeWidth={4} strokeDasharray="12 10" />
					<circle cx={o[0]} cy={o[1]} r={18} fill={CARD} stroke={MATH_EXCLUDED} strokeWidth={5} />
					<PLabel p={m.p(0.6, 12.6)} text="the integrand" size={40} color={VIOLET} />
					<PLabel p={m.p(0.12, -1.6)} text="x = 0: excluded" size={36} color="#4f4840" />
					<PLabel p={m.p(-2.1, -8.6)} text="3/x splits it in two" size={40} color={RED} hand o={z} />
				</>;}}
			</MiniPlot>
			<BoxCard x={RX9} y={150} w={930} at={-30} size={50} title="task">Find ∫(e⁻ˣ + <V><Frac n="3" d="x" /></V> + x²) dx</BoxCard>
			<BoxCard x={RX9} y={330} w={930} at={-30} out={k.last - 4} size={42} title="the plan">each term: its own rule,<br />then one <Cc>+ C</Cc>, and say where it is valid</BoxCard>
			<Line x={RX9 + 10} y={330} at={k.last} size={48}>∫e⁻ˣ dx = −e⁻ˣ</Line>
			<HandTag x={RX9 + 470} y={370} text="last video" at={k.last + 10} size={36} color={GREY} />
			<Line x={RX9 + 10} y={430} at={k.three} size={48}>∫<V><Frac n="3" d="x" /></V> dx = 3 ln|x|</Line>
			<Line x={RX9 + 10} y={550} at={k.sq} size={48}>∫x² dx = <Frac n="x³" d="3" /></Line>
			<HandTag x={RX9 + 380} y={600} text="power rule" at={k.sq + 10} size={36} color={GREY} />
			<AnswerBox x={RX9} y={680} at={k.plusC} size={48}>−e⁻ˣ + 3 ln|x| + <Frac n="x³" d="3" /> <Cc>+ C</Cc></AnswerBox>
			<GapLine x={RX9} y={810} w={930} range={[-2.2, 3]} excluded={[0]} ticks={tk([-2, -1, 0, 1, 2, 3])} label="x ≠ 0" at={k.zero} />
			<div style={{position: 'absolute', left: RX9 + 700, top: 690, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, color: '#7a4600', opacity: prog(f, k.plusC + 10, 12)}}>one + C</div>
		</>
	);
};
