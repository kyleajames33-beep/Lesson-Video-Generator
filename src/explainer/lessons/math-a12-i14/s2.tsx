// Scenes 6 to 8: going back up from ẍ = 6t − 4 with two starting values (the constant family settling on the member
// through the start, for v and then for x); what x(2) = 0 means (the second particle goes left to −32/27 m and comes
// back: displacement 0, distance 64/27 m); and snow depth on a ski-field post (D = 100 + 20t − t², deepest at day 10).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, INK, prog} from '../../kit';
import {ConstantFamilySlider, LiveReadoutBoard, SceneHeading, StudioPlot, fnPath, kf, vis} from '../../math/studio';
import type {PlotMap} from '../../math/studio';
import {K6, K7, K8} from './cuemap';
import {AMBER, AnswerBox, BLUE, BoxCard, C_, Chip, Column, Dot, Stub, Dr, Dsn, GREEN, Hand, Int, Lbl, Row, SOFT, SnowPost, Stack, TEAL, TEAL_SOFT, Task, VIOLET, WARM_SOFT, a1, regionD, v1, x1} from './parts';
import type {Pan} from './parts';

// ---------- 6. going back up ----------
const R6 = 930;
const FAM = {x: 40, y: 330, w: 860, h: 650};
const TASK6 = <>A different particle has acceleration <b>ẍ = 6t − 4 m/s²</b>. It starts at rest at the origin. Find its position at t = 2 s.</>;
export const S06: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K6;
	const phB = vis(fr, k.plus - 6, k.again + 10, 14);
	const phC = prog(fr, k.again + 10, 14);
	const phA = 1 - prog(fr, k.plus - 6, 14);
	const Cv = kf(fr, [[k.only, 2], [k.only + 46, -2], [k.so, 1], [k.value, 1], [k.value + 36, 0]]);
	const Cx = kf(fr, [[k.x, 2], [k.starting, 2], [k.starting + 34, 0]]);
	return (
		<>
			<SceneHeading text="Going back up: integrate, then use the start" at={4} size={48} />
			<Task x={96} y={160} w={1728} at={-30} size={38}>{TASK6}</Task>
			{phA > 0.01 ? <div style={{position: 'absolute', inset: 0, opacity: phA}}>
				<StudioPlot x={FAM.x} y={FAM.y} width={FAM.w} height={FAM.h} window={{x: [-0.15, 2.3], y: [-5.5, 9.5]}} xTicks={[1, 2]} yTicks={[-4, 4, 8]} xLabel="t (s)" yLabel="acceleration ẍ (m/s²)" at={-30}>
					{(m: PlotMap) => <>
						<g clipPath={m.clip}><path d={fnPath(m, a1, 0, 2.3)} stroke={VIOLET} strokeWidth={7} fill="none" strokeLinecap="round" /></g>
						<Lbl x={m.p(1.05, 6.6)[0]} y={m.p(1.05, 6.6)[1]} text="ẍ = 6t − 4 (given)" color={VIOLET} size={40} />
						<Lbl x={m.p(0.05, -4.9)[0]} y={m.p(0.05, -4.9)[1]} text="integrate up to find v, then x" hand size={36} color={SOFT} o={prog(fr, k.integ, 12)} />
					</>}
				</StudioPlot>
			</div> : null}
			{phB > 0.01 ? <div style={{position: 'absolute', inset: 0, opacity: phB}}>
				<ConstantFamilySlider x={FAM.x} y={FAM.y} width={FAM.w} height={FAM.h} window={{x: [-0.15, 2.3], y: [-4, 7.5]}} g={v1} constants={[-2, -1, 0, 1, 2]} C={Cv} point={{x: 0, y: 0, label: 'start: v(0) = 0'}} markerX={0}
					label={C => (Math.abs(C) < 1e-6 ? 'v = 3t² − 4t' : 'v = 3t² − 4t + C')} xTicks={[1, 2]} yTicks={[-2, 2, 4, 6]} xLabel="t (s)" yLabel="velocity v (m/s)" at={-30} />
				<Hand x={470} y={350} at={k.only} size={38} color={AMBER}>same gradients, different starts</Hand>
			</div> : null}
			{phC > 0.01 ? <div style={{position: 'absolute', inset: 0, opacity: phC}}>
				<ConstantFamilySlider x={FAM.x} y={FAM.y} width={FAM.w} height={FAM.h} window={{x: [-0.15, 2.3], y: [-3.8, 3.4]}} g={x1} constants={[-2, -1, 0, 1, 2]} C={Cx} point={{x: 0, y: 0, label: 'start: x(0) = 0'}} markerX={0}
					label={C => (Math.abs(C) < 1e-6 ? 'x = t³ − 2t²' : 'x = t³ − 2t² + C')} xTicks={[1, 2]} yTicks={[-2, 2]} xLabel="t (s)" yLabel="position x (m)" at={-30} />
				<Hand x={470} y={350} at={k.two} size={38} color={AMBER}>two steps up, two starting values</Hand>
			</div> : null}
			<BoxCard x={R6} y={330} w={400} at={-30} size={28} title="equation">
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, color: INK}}><span style={{color: VIOLET}}>ẍ</span> = 6t − 4</div>
				<div style={{fontSize: 30, color: SOFT}}>m/s², t in s</div>
			</BoxCard>
			<BoxCard x={R6 + 420} y={330} w={530} at={-30} size={44} title="initial conditions">
				<div style={{color: AMBER, fontWeight: 800}}>v(0) = 0 m/s</div>
				<div style={{color: AMBER, fontWeight: 800}}>x(0) = 0 m</div>
				<div style={{fontSize: 30, color: SOFT}}>(starting values)</div>
			</BoxCard>
			<Row x={R6} y={560} at={k.three} size={48} small={38} dim={prog(fr, k.again, 12)}>v = <Int /> (6t − 4) dt = 3t² − 4t + {C_(1)}</Row>
			<BoxCard x={R6} y={648} w={950} at={k.only} out={k.c0 - 4} size={38} edge={AMBER}>Integration knows the shape (the gradients), not where it starts.</BoxCard>
			<Row x={R6} y={640} at={k.c0} size={48} small={38} dim={prog(fr, k.again, 12)}>v(0) = 0 → {C_(1)} = 0</Row>
			<Row x={R6} y={706} at={k.c0 + 26} size={32} color={SOFT}>check: d/dt (3t² − 4t) = 6t − 4 <span style={{color: GREEN}}>✓</span></Row>
			<Row x={R6} y={762} at={k.x} size={48} small={40} dim={0}>x = <Int /> (3t² − 4t) dt = t³ − 2t² + {C_(2)}</Row>
			<Row x={R6} y={842} at={k.zero2} size={48}>x(0) = 0 → {C_(2)} = 0</Row>
			<Row x={R6 + 470} y={852} at={k.zero2 + 26} size={32} color={SOFT}>check by differentiating <span style={{color: GREEN}}>✓</span></Row>
			<Chip x={R6} y={922} at={k.two} size={36} color={AMBER}>a → v → x: two integrations, two starting values</Chip>
		</>
	);
};

// ---------- 7. what the answer means ----------
const R7 = 940;
const NL7 = {x: 170, w: 1160, y: 236};
const N7 = (v: number) => NL7.x + ((v + 2) / 4) * NL7.w;
export const S07: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K7;
	const preview = kf(fr, [[k.but + 4, 0], [k.but + 120, 2]], false);
	const resetAt = k.so - 8;
	const tp = fr < k.but ? 0 : fr < resetAt ? preview : kf(fr, [[k.so + 8, 0], [k.minus + 50, 4 / 3], [k.then + 6, 4 / 3], [k.comes + 24, 2]], false);
	const pO = fr < k.but ? 1 : fr < resetAt + 12 && fr >= resetAt - 12 ? (fr < resetAt ? 1 - prog(fr, resetAt - 12, 12) : prog(fr, resetAt, 12)) : 1;
	const replay = fr >= resetAt;
	const xp = x1(tp);
	const leg1 = replay ? (tp >= 4 / 3 ? 1 : Math.max(0, -xp / (32 / 27))) : 0;
	const leg2 = replay && tp > 4 / 3 ? Math.min(1, (xp + 32 / 27) / (32 / 27)) : 0;
	const legRow = (from: number, to: number, p: number, y: number, label: string) => {
		if (p <= 0.001) return null;
		const a = N7(from), b = N7(from + (to - from) * p), s = Math.sign(to - from);
		return <g>
			<line x1={a} x2={b} y1={y} y2={y} stroke={INK} strokeWidth={5} strokeLinecap="round" />
			{p > 0.15 ? <path d={`M${b - s * 16},${y - 11} L${b},${y} L${b - s * 16},${y + 11}`} stroke={INK} strokeWidth={5} fill="none" strokeLinecap="round" strokeLinejoin="round" /> : null}
			<Lbl x={N7(-32 / 27) - 24} y={y + 12} text={label} anchor="end" size={34} o={prog(fr, k.comes, 12)} />
		</g>;
	};
	return (
		<>
			<SceneHeading text="What the answer means" at={4} size={48} />
			<svg width={1920} height={1080} style={{position: 'absolute', inset: 0, overflow: 'visible'}}>
				<line x1={NL7.x - 30} x2={NL7.x + NL7.w + 30} y1={NL7.y} y2={NL7.y} stroke={INK} strokeWidth={4} />
				{[-2, -1, 0, 1, 2].map(v => <g key={v}><line x1={N7(v)} x2={N7(v)} y1={NL7.y - 12} y2={NL7.y + 12} stroke={INK} strokeWidth={3.5} /><text x={N7(v)} y={NL7.y + 46} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, fill: INK}}>{v < 0 ? '−' + Math.abs(v) : v}</text></g>)}
				<text x={NL7.x + NL7.w + 46} y={NL7.y + 12} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: SOFT}}>x (m)</text>
				<g opacity={prog(fr, k.minus, 12)}>
					<line x1={N7(-32 / 27)} x2={N7(-32 / 27)} y1={NL7.y - 12} y2={NL7.y + 12} stroke={TEAL} strokeWidth={4} />
					<circle cx={N7(-32 / 27)} cy={NL7.y} r={14} fill="#fffdf8" stroke={TEAL} strokeWidth={5} />
					<Lbl x={N7(-32 / 27)} y={NL7.y - 30} text="−32/27 ≈ −1.19" anchor="middle" size={30} color={TEAL} />
				</g>
				{legRow(0, -32 / 27, leg1, NL7.y + 90, '32/27 m')}
				{legRow(-32 / 27, 0, leg2, NL7.y + 130, '32/27 m')}
				<circle cx={N7(xp)} cy={NL7.y} r={17} fill={INK} stroke="#fffdf8" strokeWidth={5} opacity={pO} />
			</svg>
			<LiveReadoutBoard x={1530} y={150} width={350} at={-30} inline size={44} labelSize={30} rows={[
				{label: 't', value: tp, digits: 2, role: 'inner', unit: 's'},
				{label: 'x', value: xp, digits: 2, role: 'a', unit: 'm'},
				{label: 'v', value: v1(tp), digits: 2, role: 'b', unit: 'm/s'},
			]} />
			<StudioPlot x={40} y={420} width={860} height={580} window={{x: [-0.12, 2.3], y: [-1.7, 1.5]}} xTicks={[1, {value: 4 / 3, label: '4/3'}, 2]} yTicks={[-1, 1]} xLabel="t (s)" yLabel="position x (m)" at={-30}>
				{(m: PlotMap) => {const [px, py] = m.p(tp, xp), [qx, qy] = m.p(4 / 3, -32 / 27); return <>
					<g clipPath={m.clip}><path d={fnPath(m, x1, 0, 2.2)} stroke={BLUE} strokeWidth={6.5} fill="none" strokeLinecap="round" /></g>
					<g opacity={prog(fr, k.neg, 12)}><circle cx={qx} cy={qy} r={14} fill="#fffdf8" stroke={TEAL} strokeWidth={5} /><Lbl x={qx + 22} y={qy + 44} text="turns: v = 0" hand size={36} color={TEAL} /></g>
					<circle cx={px} cy={py} r={13} fill={BLUE} stroke="#fffdf8" strokeWidth={4} opacity={pO} />
					<Lbl x={m.p(0.05, 1.15)[0]} y={m.p(0.05, 1.15)[1]} text="x = t³ − 2t²" color={BLUE} size={40} />
				</>;}}
			</StudioPlot>
			<Row x={R7} y={420} at={k.at2} size={52}>x(2) = 8 − 8 = 0</Row>
			<AnswerBox x={R7 + 470} y={410} at={k.zero} size={52}>0 m</AnswerBox>
			<BoxCard x={R7} y={520} w={930} at={-30} out={k.its - 6} size={40} title="the particle from the last step">v = 3t² − 4t and x = t³ − 2t², starting at rest at the origin</BoxCard>
			<Row x={R7} y={520} at={k.its} size={44}><span style={{color: TEAL}}>v = t(3t − 4)</span><span style={{opacity: prog(fr, k.neg, 12)}}> &lt; 0 for 0 &lt; t &lt; 4/3</span></Row>
			<Row x={R7} y={600} at={k.minus} size={44}>x(4/3) = 64/27 − 32/9 = −32/27</Row>
			<Hand x={R7 + 10} y={662} at={k.minus + 20} size={36} color={SOFT}>≈ −1.19 m: it went left first</Hand>
			<Chip x={R7} y={740} at={k.disp} size={44} color={BLUE}>displacement: 0 m</Chip>
			<Chip x={R7} y={840} at={k.trav} size={44} color={INK}>distance travelled: 64/27 m <span style={{color: SOFT, fontSize: 34}}>≈ 2.37 m</span></Chip>
			<Hand x={R7 + 10} y={940} at={k.trav + 20} size={34} color={SOFT}>displacement and distance (earlier videos)</Hand>
		</>
	);
};

// ---------- 8. any quantity that changes with time ----------
const R8 = 1215;
const panD = (upto: number): Pan => ({fn: Dsn, y: [0, 228], h: 300, color: BLUE, title: 'depth D (cm)', titleT: 0.3, yTicks: [{v: 100, label: '100'}, {v: 175, label: '175'}, {v: 200, label: '200'}], upto});
const panR = (upto: number): Pan => ({fn: Dr, y: [-23, 23], h: 300, color: TEAL, title: 'rate dD/dt (cm per day)', titleT: 5.2, yTicks: [{v: -20, label: '−20'}, {v: 10, label: '10'}, {v: 20, label: '20'}], upto});
export const S08: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K8;
	const day = kf(fr, [[k.day5, 0], [k.day5 + 40, 5], [k.deepest, 5], [k.deepest + 60, 10], [k.after + 4, 10], [k.melts + 10, 20]]);
	const dUp = kf(fr, [[k.D, 0], [k.D + 110, 20.5]], false);
	const rUp = kf(fr, [[0, 0], [60, 20.5]], false);
	const peak = prog(fr, k.cm, 12);
	const dayO = prog(fr, k.day5, 12);
	return (
		<>
			<SceneHeading text="Any quantity that changes with time" at={4} size={48} />
			<Task x={96} y={160} w={1320} at={-30} size={38}>Snow is 100 cm deep at t = 0 days. It builds up at <span style={{color: TEAL}}>dD/dt = 20 − 2t</span> cm per day, for 0 ≤ t ≤ 20.</Task>
			<BoxCard x={1440} y={160} w={440} at={-30} size={44} title="given"><span style={{color: AMBER, fontWeight: 800}}>D(0) = 100 cm</span></BoxCard>
			<SnowPost x={70} y={330} h={640} D={Dsn(day)} peak={peak * (1 - prog(fr, k.after + 10, 12))} />
			<Stack x={380} y={330} w={820} win={[-0.6, 21]} panels={[panD(fr < k.D ? -1 : dUp), panR(rUp)]} gap={14} xTicks={[5, 10, 15, 20]} xLabel="t (days)"
				under={ms => <g opacity={prog(fr, k.after, 14)}><path d={regionD(ms[1], Dr, 10, 20)} fill={WARM_SOFT} /><path d={regionD(ms[1], Dr, 0, 10)} fill={TEAL_SOFT} opacity={0.7} /></g>}
				kids={ms => <>
					{(() => {const [cx, cy] = ms[0].p(0, 100); return <g><circle cx={cx} cy={cy} r={13} fill={AMBER} stroke="#fffdf8" strokeWidth={4} /><Lbl x={cx + 20} y={cy + 44} text="D(0) = 100" size={30} color={AMBER} /></g>;})()}
					<Stub m={ms[0]} t={0} s={20} color={TEAL} hl={90} o={vis(fr, k.rate, k.D + 20, 12)} />
					<Lbl x={ms[0].p(0.6, 150)[0]} y={ms[0].p(0.6, 150)[1]} text="starts rising at 20 cm per day" hand size={34} color={TEAL} o={vis(fr, k.rate, k.D + 20, 12)} />
					<Column ms={ms} t={day} o={dayO * (1 - 0.7 * peak)} label={`day ${Math.round(day)}`} />
					<Dot m={ms[0]} t={day} color={BLUE} o={dayO} r={13} />
					<Dot m={ms[1]} t={day} color={TEAL} o={dayO} r={13} />
					<Column ms={ms} t={10} o={peak} />
					{peak > 0.01 ? (() => {const [cx, cy] = ms[1].p(10, 0); return <circle cx={cx} cy={cy} r={18} fill="none" stroke={GREEN} strokeWidth={5} opacity={peak} />;})() : null}
					<Lbl x={ms[0].p(10, 140)[0]} y={ms[0].p(10, 140)[1]} text="deepest when the rate is 0" hand size={38} color={GREEN} anchor="middle" o={peak} />
					<Lbl x={ms[1].p(15, -6)[0]} y={ms[1].p(15, -6)[1]} text="rate < 0: melting" hand size={36} color="#a8421c" anchor="middle" o={prog(fr, k.after + 6, 12)} />
					<Lbl x={ms[1].p(9.5, -12)[0]} y={ms[1].p(9.5, -12)[1]} text="rising slower and slower" hand size={34} color={TEAL} o={vis(fr, k.rise, k.cm, 12)} />
				</>} />
			<BoxCard x={R8} y={340} w={665} at={-30} out={k.integ - 6} size={38} title="the plan" edge={AMBER}>The rate is given. Integrate it, then use the start D(0) = 100 to fix the constant.</BoxCard>
			<Row x={R8} y={340} at={k.integ} out={k.cm} size={46}>D = <Int /> (20 − 2t) dt</Row>
			<Row x={R8} y={402} at={k.integ + 16} out={k.cm} size={46}>{'   '}= 20t − t² + <span style={{color: AMBER}}>C</span></Row>
			<Row x={R8} y={464} at={k.start} out={k.cm} size={46}>D(0) = 100 → <span style={{color: AMBER}}>C = 100</span></Row>
			<AnswerBox x={R8} y={350} at={k.cm + 4} size={50}>D(10) = 200 cm</AnswerBox>
			<Row x={R8} y={536} at={k.D} size={52} color={BLUE}>D = 100 + 20t − t²</Row>
			<Row x={R8} y={614} at={k.second} size={52} color={VIOLET}>d²D/dt² = −2</Row>
			<Hand x={R8} y={688} at={k.drops} size={34} color={SOFT}>the rate falls by 2 cm per day, each day</Hand>
			<LiveReadoutBoard x={R8} y={756} width={665} at={-30} inline size={42} labelSize={30} rows={[
				{label: 'depth D', value: Dsn(day), digits: 0, role: 'a', unit: 'cm'},
				{label: 'rate dD/dt', value: Dr(day), digits: 1, role: 'b', unit: 'cm per day'},
				{label: 'd²D/dt²', value: -2, digits: 0, role: 'gradient', at: k.second},
			]} />
		</>
	);
};
