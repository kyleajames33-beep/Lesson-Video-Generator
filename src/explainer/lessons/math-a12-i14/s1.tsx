// Scenes 1 to 5: the robot vacuum in the hallway (x = t³ − 9t² + 24t cm) linked to the stacked x, v and a panels.
// 1 the hook (i13's final frame, the run, a < 0 at t = 2.5: slowing down?); 2 v = dx/dt as the gradient, rest at
// v = 0, moving left, speed; 3 a = dv/dt = d²x/dt² = ẍ; 4 the signs (t = 2.5 speeding up, t = 1 slowing down);
// 5 ∫₀⁶ v dt = 36 cm against 44 cm travelled, leg by leg. Also exports I13FinalFrameStandIn (frame 0).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, prog} from '../../kit';
import {LiveReadoutBoard, SceneHeading, kf, smooth, vis} from '../../math/studio';
import type {ReadoutRow} from '../../math/studio';
import {K1, K2, K3, K4, K5} from './cuemap';
import {AMBER, BLUE, BoxCard, Chip, Column, Dot, GREEN, Hallway, Hand, Int, Lbl, Row, SOFT, Stack, Stub, TEAL, TEAL_SOFT, TEAL_STROKE, VIOLET, WARM_SOFT, ar, regionD, vr, xr} from './parts';
import type {Pan, PanMap} from './parts';

// ---------- shared layout ----------
export const RX = 1110;
const PX = 30, PW = 1060, PY = 392;
const WIN = [-0.2, 6.3] as const;
const XT = [1, 2, 3, 4, 5, 6] as const;
const panX = (h: number, o = 1, curveO = 1): Pan => ({fn: xr, y: [-3, 41], h, color: BLUE, title: 'displacement x (cm)', titleT: 0.15, yTicks: h > 400 ? [{v: 16, label: '16'}, {v: 20, label: '20'}, {v: 36, label: '36'}] : [{v: 20, label: '20'}, {v: 36, label: '36'}], o, curveO});
const panV = (h: number, extra: Partial<Pan> = {}): Pan => ({fn: vr, y: [-7, 27], h, color: TEAL, title: 'velocity v (cm/s)', titleT: 2.05, yTicks: [{v: -3, label: '−3'}, {v: 9, label: '9'}, {v: 24, label: '24'}], ...extra});
const panA = (h: number, extra: Partial<Pan> = {}): Pan => ({fn: ar, y: [-20, 20], h, color: VIOLET, title: 'acceleration a (cm/s²)', titleT: 0.15, yTicks: [{v: -12, label: '−12'}, {v: -3, label: '−3'}, {v: 6, label: '6'}, {v: 18, label: '18'}], ...extra});
const lerp = (a: number, b: number, u: number) => a + (b - a) * u;
/** Robot rows for the board, read from the same t that places the robot and the panel markers. */
const rows = (t: number, keys: readonly ('t' | 'x' | 'v' | 'speed' | 'a')[], extra: Partial<Record<string, Partial<ReadoutRow>>> = {}): ReadoutRow[] => keys.map(k => {
	const base: Record<string, ReadoutRow> = {
		t: {label: 'time t', value: t, digits: 1, role: 'inner', unit: 's'},
		x: {label: 'displacement x', value: xr(t), digits: 1, role: 'a', unit: 'cm'},
		v: {label: 'velocity v', value: vr(t), digits: 2, role: 'b', unit: 'cm/s'},
		speed: {label: 'speed = |v|', value: Math.abs(vr(t)), digits: 2, role: 'b', unit: 'cm/s'},
		a: {label: 'acceleration a', value: ar(t), digits: 1, role: 'gradient', unit: 'cm/s²'},
	};
	return {...base[k], ...(extra[k] ?? {})};
});
/** Fade the robot out and back in around a jump in its state at `at` (no fake motion between states). */
const jump = (fr: number, at: number) => (fr < at ? 1 - prog(fr, at - 12, 12) : prog(fr, at, 12));

// ---------- 1. hook (and i13's final frame) ----------
const HookBoard: React.FC<{curveO: number; chipsO: number; kids?: (ms: PanMap[]) => React.ReactNode}> = ({curveO, chipsO, kids}) => (
	<>
		<Stack x={PX} y={PY} w={PW} win={WIN} panels={[panX(578, 1, curveO)]} xTicks={XT} kids={kids} />
		{chipsO > 0.01 ? <div style={{position: 'absolute', inset: 0, opacity: chipsO}}>
			<Chip x={RX} y={430} at={-300} size={46} color="#8a5a12">{'Next: where, how fast,\nspeeding up?'}</Chip>
			<Chip x={RX} y={610} at={-300} size={80} color="#8a5a12">?</Chip>
		</div> : null}
	</>
);
/** i13's final frame (i13 is not built): the robot at 0 on the hallway floor, the faint x graph and both chips. */
export const I13FinalFrameStandIn: React.FC = () => (
	<>
		<Hallway pos={0} />
		<HookBoard curveO={0.35} chipsO={1} />
	</>
);
export const S01: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K1;
	const run = kf(fr, [[k.watch + 12, 0], [k.stops, 2], [k.again, 4], [k.speeds + 38, 6]], false);
	const back = k.at25 + 14;
	const t = fr < back ? run : 2.5;
	const robotO = fr < k.at25 ? 1 : jump(fr, back);
	const curveO = 0.35 + 0.65 * smooth(prog(fr, k.its, 24));
	return (
		<>
			<SceneHeading text="How do displacement, velocity and acceleration connect?" at={10} size={48} />
			<Hallway pos={xr(t)} vel={vr(t)} arrowO={vis(fr, k.watch + 12, k.speeds + 40)} robotO={robotO} rests={[{x: 20, o: prog(fr, k.stops, 10)}, {x: 16, o: prog(fr, k.again, 10)}]} />
			<HookBoard curveO={curveO} chipsO={1 - prog(fr, k.its - 10, 14)} kids={ms => <>
				<Dot m={ms[0]} t={t} color={BLUE} o={vis(fr, k.watch, undefined) * robotO} r={14} />
				<Lbl x={ms[0].p(2.35, 30)[0]} y={ms[0].p(2.35, 30)[1]} text="backs up" hand size={42} o={prog(fr, k.backs, 12)} />
				{fr >= k.backs ? (() => {const [ax, ay] = ms[0].p(2.75, 27.5), [bx, by] = ms[0].p(3, 21.5); return <path d={`M${ax},${ay} L${bx},${by} M${bx - 12},${by - 16} L${bx},${by} L${bx + 14},${by - 12}`} stroke={INK} strokeWidth={4} fill="none" strokeLinecap="round" opacity={prog(fr, k.backs, 12)} />;})() : null}
			</>} />
			<BoxCard x={RX} y={400} w={770} at={k.its} size={34} title="the robot vacuum">
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 54, color: BLUE}}>x = t³ − 9t² + 24t</div>
				<div>x cm from its start, after t s, t ≥ 0</div>
			</BoxCard>
			<LiveReadoutBoard x={RX} y={620} width={620} at={k.watch} inline size={52} labelSize={30} rows={rows(t, ['t', 'x'])} />
			<BoxCard x={RX} y={800} w={770} at={k.its + 30} out={k.neg - 6} size={38} title="three questions">Where is it? How fast is it going? Is it speeding up or slowing down?</BoxCard>
			<Chip x={RX} y={800} at={k.neg} size={42} color={VIOLET}>acceleration &lt; 0 at t = 2.5 s</Chip>
			<Chip x={RX} y={895} at={k.down} size={50} color="#8a5a12">slowing down?</Chip>
		</>
	);
};

// ---------- 2. velocity is the gradient ----------
export const S02: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K2;
	const sh = smooth(prog(fr, 0, 24));
	const sweep = kf(fr, [[k.grad, 0], [k.veq + 70, 6]], false);
	const vUpto = fr < k.grad ? -1 : sweep;
	const jumpAt = k.flat - 10;
	const left = kf(fr, [[k.left, 2], [k.left + 52, 4]], false);
	const t = fr < jumpAt ? 2.5 : left;
	const robotO = jump(fr, jumpAt);
	const flat = prog(fr, k.flat, 14);
	return (
		<>
			<SceneHeading text="Velocity is the gradient of displacement" at={4} size={48} />
			<Hallway pos={xr(t)} vel={vr(t)} arrowO={vis(fr, k.left, k.left + 56)} robotO={robotO} origin={prog(fr, k.disp, 12)} rests={[{x: 20, o: 1, pulse: vis(fr, k.flat, k.flat + 30) * 0.8}, {x: 16, o: 1, pulse: vis(fr, k.flat + 8, k.flat + 38) * 0.8}]} />
			<Stack x={PX} y={PY} w={PW} win={WIN} panels={[panX(lerp(578, 282, sh)), panV(282, {o: sh, upto: vUpto})]} gap={14} xTicks={XT}
				under={ms => <g opacity={prog(fr, k.between, 14)}><path d={regionD(ms[1], vr, 2, 4)} fill={WARM_SOFT} /></g>}
				kids={ms => <>
					{fr >= k.grad && fr < k.veq + 90 ? <g opacity={vis(fr, k.grad, k.veq + 76)}>
						<Stub m={ms[0]} t={sweep} s={vr(sweep)} color={TEAL} hl={120} />
						<Dot m={ms[0]} t={sweep} color={BLUE} />
						<Dot m={ms[1]} t={sweep} color={TEAL} />
						{(() => {const [ax, ay] = ms[0].p(sweep, xr(sweep)), [, by] = ms[1].p(sweep, vr(sweep)); return <line x1={ax} x2={ax} y1={ay + 14} y2={by - 14} stroke={TEAL} strokeWidth={3} strokeDasharray="6 9" />;})()}
					</g> : null}
					{[2, 4].map((tt, i) => <g key={tt}>
						<Stub m={ms[0]} t={tt} s={0} color={TEAL} hl={80} o={flat} />
						<Lbl x={ms[0].p(tt, 0)[0]} y={ms[0].p(tt, xr(tt))[1] - (i ? -44 : 22)} text="gradient 0" anchor="middle" size={30} color={TEAL} o={flat} />
						{flat > 0.01 ? (() => {const [cx, cy] = ms[1].p(tt, 0); return <circle cx={cx} cy={cy} r={16} fill="none" stroke={TEAL} strokeWidth={5} opacity={flat} />;})() : null}
					</g>)}
					<Lbl x={ms[1].p(2.15, 21)[0]} y={ms[1].p(2.15, 21)[1]} text="at rest: v = 0" hand size={40} color={TEAL} o={prog(fr, k.flat + 6, 12)} />
					<Lbl x={ms[1].p(3, -5.2)[0]} y={ms[1].p(3, -5.2)[1]} text="v < 0: moving left" hand size={34} color="#a8421c" anchor="middle" o={prog(fr, k.left, 12)} />
				</>} />
			<BoxCard x={RX} y={400} w={770} at={k.disp} out={k.diff} size={36} title="displacement x" edge={BLUE}>x: measured from a fixed origin O (here, the robot's start); negative to the left of O</BoxCard>
			<BoxCard x={RX} y={640} w={770} at={k.vel} out={k.diff} size={36} title="velocity v" edge={TEAL}>
				how fast x changes; its sign gives the direction
				<div style={{opacity: prog(fr, k.veq, 12), marginTop: 6, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, color: TEAL}}>v = dx/dt <span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36, color: SOFT}}>gradient of the x graph</span></div>
			</BoxCard>
			<Row x={RX} y={400} at={k.diff + 4} size={52} color={TEAL}>v = dx/dt</Row>
			<Hand x={RX + 270} y={414} at={k.diff + 4} size={36} color={SOFT}>the gradient of the x graph</Hand>
			<Row x={RX} y={484} at={k.three} size={52} dim={prog(fr, k.four, 12)} small={44}>v = 3t² − 18t + 24</Row>
			<Row x={RX} y={560} at={k.four} size={52}>{'  '}= 3(t − 2)(t − 4)</Row>
			<Row x={RX} y={642} at={k.so + 30} size={44} color={TEAL}>at rest: t = 2 s and t = 4 s</Row>
			<LiveReadoutBoard x={RX} y={722} width={620} at={k.left} inline size={44} labelSize={30} rows={rows(t, ['t', 'x', 'v', 'speed'], {speed: {at: k.speed}})} />
		</>
	);
};

// ---------- 3. acceleration and its notation ----------
export const S03: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K3;
	const sh = smooth(prog(fr, 0, 24));
	const sweep = kf(fr, [[24, 0], [200, 6]], false);
	const jumpAt = k.at2;
	const t = fr < jumpAt ? 4 : 2;
	const robotO = jump(fr, jumpAt);
	const hX = lerp(282, 186, sh), hV = lerp(282, 186, sh);
	const after = prog(fr, k.after, 14);
	const at2 = prog(fr, k.at2 + 6, 12);
	return (
		<>
			<SceneHeading text="Acceleration: how fast velocity changes" at={4} size={48} />
			<Hallway pos={xr(t)} robotO={robotO} rests={[{x: 20, o: 1}, {x: 16, o: 1}]} dashLeft={prog(fr, k.moving - 20, 14)} />
			<Stack x={PX} y={PY} w={PW} win={WIN} panels={[panX(hX), panV(hV), panA(186, {o: sh, upto: sweep})]} gap={lerp(14, 10, sh)} xTicks={XT}
				under={ms => <g opacity={after}>
					<path d={regionD(ms[2], ar, 0, 3)} fill={WARM_SOFT} />
					<path d={regionD(ms[2], ar, 3, 6.3)} fill={TEAL_SOFT} />
				</g>}
				kids={ms => <>
					{fr < 220 ? <g opacity={vis(fr, 24, 206)}>
						<Stub m={ms[1]} t={sweep} s={ar(sweep)} color={VIOLET} hl={100} />
						<Dot m={ms[1]} t={sweep} color={TEAL} />
						<Dot m={ms[2]} t={sweep} color={VIOLET} />
					</g> : null}
					<Column ms={ms} t={3} from={1} to={2} o={after * (1 - 0.6 * at2)} />
					<Dot m={ms[1]} t={3} color={TEAL} o={after} />
					<Dot m={ms[2]} t={3} color={VIOLET} o={after} open />
					<Lbl x={ms[1].p(3.12, 15)[0]} y={ms[1].p(3.12, 15)[1]} text="v lowest where a = 0" hand size={34} color={INK} o={after} />
					<Column ms={ms} t={2} o={at2} label="t = 2" />
					<Dot m={ms[1]} t={2} color={TEAL} o={at2} open />
					<Dot m={ms[2]} t={2} color={VIOLET} o={at2} r={14} />
					<Lbl x={ms[2].p(2.12, 12)[0]} y={ms[2].p(2.12, 12)[1]} text="at rest, but a ≠ 0" hand size={38} color={VIOLET} o={prog(fr, k.minus6, 12)} />
					<Lbl x={ms[2].p(1.9, -6)[0]} y={ms[2].p(1.9, -6)[1] + 10} text="−6" anchor="end" size={32} color={VIOLET} o={prog(fr, k.minus6, 12)} />
				</>} />
			<Row x={RX} y={400} at={k.acc} size={52} color={VIOLET}>a = dv/dt<span style={{opacity: prog(fr, k.second, 12)}}> = d²x/dt²</span><span style={{opacity: prog(fr, k.dots, 12)}}> = ẍ</span></Row>
			<Row x={RX + 10} y={470} at={k.dot} size={100} color={VIOLET}>ẍ</Row>
			<Hand x={RX + 120} y={498} at={k.dot + 8} size={40} color={VIOLET}>two dots: differentiated twice</Hand>
			<Row x={RX} y={598} at={k.six} size={52}><span style={{color: VIOLET}}>ẍ</span> = 6t − 18</Row>
			<Hand x={RX + 380} y={608} at={k.units} size={36} color={SOFT}>cm/s per s = cm/s²</Hand>
			<LiveReadoutBoard x={RX} y={680} width={620} at={-30} inline size={44} labelSize={30} rows={rows(t, ['t', 'x', 'v', 'a'], {a: {at: k.acc}})} />
		</>
	);
};

// ---------- 4. speeding up or slowing down ----------
export const S04: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K4;
	const j1 = k.at25 + 6, j2 = k.compare + 8;
	const t = fr < j1 ? 2 : fr < j2 ? kf(fr, [[k.further, 2.5], [k.three, 3]], false) : kf(fr, [[k.slowing - 20, 1], [k.slowing + 50, 2]], false);
	const robotO = fr < j2 ? jump(fr, j1) : jump(fr, j2);
	const moving = vis(fr, k.further, k.three + 4) + vis(fr, k.slowing - 20, k.slowing + 52);
	const colO = fr < j2 ? prog(fr, j1, 12) : 1;
	const st = (a: number, out?: number) => vis(fr, a, out, 12);
	return (
		<>
			<SceneHeading text="Speeding up or slowing down?" at={4} size={48} />
			<Hallway pos={xr(t)} vel={vr(t)} arrowO={fr >= j1 ? robotO * (0.35 + 0.65 * Math.min(1, moving)) : 0} robotO={robotO} rests={[{x: 20, o: 1}, {x: 16, o: 1}]} />
			<Stack x={PX} y={PY} w={PW} win={WIN} panels={[panX(186), panV(186), panA(186)]} gap={10} xTicks={XT} kids={ms => <>
				<Column ms={ms} t={t} o={colO * robotO} glow={st(k.velocity, k.three + 30) + st(k.there, k.slowing + 60)} />
				<Dot m={ms[0]} t={t} color={BLUE} o={colO * robotO} />
				<Dot m={ms[1]} t={t} color={TEAL} o={colO * robotO} r={14} />
				<Dot m={ms[2]} t={t} color={VIOLET} o={colO * robotO} r={14} />
				{fr < j2 ? <>
					<Lbl x={ms[1].p(t + 0.15, vr(t))[0]} y={ms[1].p(t, vr(t))[1] + 40} text="v < 0" size={34} color={TEAL} o={st(k.vis) * robotO} />
					<Lbl x={ms[2].p(t + 0.15, ar(t))[0]} y={ms[2].p(t, ar(t))[1] + 40} text="a < 0" size={34} color={VIOLET} o={st(k.acc3) * robotO} />
					<Lbl x={ms[0].p(3.2, 33)[0]} y={ms[0].p(3.2, 33)[1]} text="faster, though a < 0" hand size={38} color={INK} o={st(k.robot)} />
				</> : <>
					<Lbl x={ms[1].p(t + 0.15, vr(t))[0]} y={ms[1].p(t, vr(t))[1] - 18} text="v > 0" size={34} color={TEAL} o={st(k.there) * robotO} />
					<Lbl x={ms[2].p(t + 0.15, ar(t))[0]} y={ms[2].p(t, ar(t))[1] + 40} text="a < 0" size={34} color={VIOLET} o={st(k.twelve) * robotO} />
				</>}
			</>} />
			<LiveReadoutBoard x={RX} y={400} width={620} at={-30} inline size={44} labelSize={30} rows={rows(t, ['t', 'x', 'v', 'speed', 'a'], {speed: {glow: [k.speed, k.three + 40]}})} />
			<Chip x={RX} y={760} at={-30} out={k.three - 6} size={40} color="#8a5a12">{'a < 0 at t = 2.5 s:\nslowing down?'}</Chip>
			<Chip x={RX} y={760} at={k.three} out={k.down + 6} size={42} color={TEAL}>same signs: speeding up</Chip>
			<Chip x={RX} y={858} at={k.slowing} out={k.down + 6} size={42} color={AMBER}>opposite signs: slowing down</Chip>
			<div style={{position: 'absolute', left: RX, top: 768, opacity: prog(fr, k.down + 8, 14), background: '#fffdf8', border: `5px solid ${GREEN}`, borderRadius: 18, padding: '10px 26px 14px', boxShadow: '0 12px 26px rgba(40,115,71,0.16)', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 42, color: INK, lineHeight: 1.3, whiteSpace: 'pre'}}>
				<span style={{color: GREEN}}>v and a same sign:</span> speeding up{'\n'}<span style={{color: GREEN}}>opposite signs:</span> slowing down
			</div>
		</>
	);
};

// ---------- 5. back from velocity to displacement ----------
export const S05: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K5;
	const sh = smooth(prog(fr, 0, 24));
	const jumpAt = k.went - 18;
	const t = fr < jumpAt ? 2 : kf(fr, [[k.went, 0], [k.back + 2, 2], [k.then + 8, 4], [k.then + 46, 6]], false);
	const robotO = jump(fr, jumpAt);
	const fill = kf(fr, [[k.integ, 0], [k.integ + 120, 6]], false);
	const replay = fr >= jumpAt;
	const leg = (u: number) => Math.max(0, Math.min(1, u));
	const x = xr(t);
	const legs = replay ? [
		{from: 0, to: 20, row: 0, label: '20 cm', p: t >= 2 ? 1 : leg(x / 20)},
		{from: 20, to: 16, row: 1, label: '4 cm', p: t >= 4 ? 1 : t > 2 ? leg((20 - x) / 4) : 0},
		{from: 16, to: 36, row: 2, label: '20 cm', p: t >= 6 ? 1 : t > 4 ? leg((x - 16) / 20) : 0},
	] : [];
	const pulse = vis(fr, k.times, k.times + 40);
	const top = lerp(392, 506, sh);
	return (
		<>
			<SceneHeading text="Back from velocity to displacement" at={4} size={48} />
			<Hallway pos={x} vel={vr(t)} arrowO={vis(fr, k.went, k.then + 48)} robotO={robotO} legs={legs} rests={[{x: 20, o: 1, pulse: pulse * 0.8}, {x: 16, o: 1, pulse: pulse * 0.8}]} />
			<Stack x={PX} y={top} w={PW} win={WIN} panels={[panX(lerp(186, 230, sh)), panV(lerp(186, 230, sh)), panA(lerp(186, 60, sh), {o: 1 - sh})]} gap={lerp(10, 14, sh)} xTicks={XT}
				under={ms => fill > 0 ? <g>
					<path d={regionD(ms[1], vr, 0, Math.min(2, fill))} fill={TEAL_SOFT} />
					{fill > 2 ? <path d={regionD(ms[1], vr, 2, Math.min(4, fill))} fill={WARM_SOFT} /> : null}
					{fill > 4 ? <path d={regionD(ms[1], vr, 4, Math.min(6, fill))} fill={TEAL_SOFT} /> : null}
				</g> : null}
				kids={ms => <>
					<Lbl x={ms[1].p(0.55, 6)[0]} y={ms[1].p(0.55, 6)[1]} text="+20" size={36} color={TEAL} o={prog(fr, k.integ + 40, 12)} />
					<Lbl x={ms[1].p(3, -1.2)[0]} y={ms[1].p(3, -1.2)[1]} text="−4" size={34} anchor="middle" color="#a8421c" o={prog(fr, k.integ + 80, 12)} />
					<Lbl x={ms[1].p(5.1, 6)[0]} y={ms[1].p(5.1, 6)[1]} text="+20" size={36} color={TEAL} o={prog(fr, k.integ + 110, 12)} />
					<Dot m={ms[0]} t={t} color={BLUE} o={replay ? robotO : 0} />
					{[2, 4].map(tt => {const [cx, cy] = ms[1].p(tt, 0); return <g key={tt} opacity={pulse}><circle cx={cx} cy={cy} r={16 + 10 * pulse} fill="none" stroke={TEAL_STROKE} strokeWidth={5} /></g>;})}
					<Lbl x={ms[1].p(4.15, 20)[0]} y={ms[1].p(4.15, 20)[1]} text="split at the rest times" hand size={36} color={TEAL} o={prog(fr, k.times, 12)} />
				</>} />
			<Row x={RX} y={515} at={k.integ} size={52} dim={prog(fr, k.so, 12)} small={40}><Int lo="0" hi="6" /> v dt = x(6) − x(0)</Row>
			<Hand x={RX} y={588} at={k.integ + 20} out={k.so} size={36} color={SOFT}>rate → change in amount (last video)</Hand>
			<Row x={RX} y={628} at={k.that} size={52} dim={prog(fr, k.so, 12)} small={40}>{'      '}= 36 − 0 = <span style={{color: BLUE, opacity: prog(fr, k.t36, 12)}}>36 cm</span></Row>
			<Row x={RX} y={718} at={k.so} size={46}>distance = 20 + 4 + 20<span style={{opacity: prog(fr, k.f44, 12)}}> = 44 cm</span></Row>
			<Hand x={RX} y={790} at={k.total} size={42} color={INK}>36 cm away, 44 cm travelled</Hand>
			<Chip x={RX} y={852} at={k.integral} size={38} color={BLUE}>displacement: 36 cm (the integral)</Chip>
			<Chip x={RX} y={938} at={k.dist} size={38} color={INK}>distance: 44 cm (add each leg)</Chip>
		</>
	);
};
