// M8 B01 scenes 1 to 4: the hook (skin losing heat to 22 degree air, the thermometer at 37, the dashed circle that the
// ring will become); a range, not a number (gloss, the wobbling trace, band and set point, the enzyme that loses shape);
// the heater thermostat (dial, sensor and switch pointed at on the painted heater, heat arrows into a coded room with a
// climbing readout, detect, decide, act); the five parts built slot by slot for a cold wind.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay} from '../bio-m5-b13/shared';
import {NB, S} from './common';
import {
	AMBER, AMBER_INK, CTag, ColdRing, DLbl, DashCircle, DrawPath, FEAT, GREY_INK, GTag, HEAD, INK, INK_SOFT, PLATES, Pl, PlateB, Sx, TEAL, Thermo, WARM, Zoom, pbPt, prog, ringPt,
	scribbleEllipse, smooth, vis,
} from './parts';
import type {RG} from './parts';
import {Arteriole, Enzyme, HeatArrows, Pointer, SignalPulse, TAxes, TBand, THLine, TLine, tremor, ty} from '../m8-shared/parts';
import type {TG} from '../m8-shared/parts';

// ---------- 1. Hook ----------
const K1 = cues(S('hook'), {room: 'about twenty-two degrees', losing: 'losing heat', core: 'core temperature', detecting: 'detecting that drift', so: 'So what detects'});
export const SKIN1 = {cx: 520, cy: 650, w: 700};
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const k = SKIN1.w / (PLATES.skin.box[2] - PLATES.skin.box[0]);
	const top = SKIN1.cy + (FEAT.skinTop - 1000) * k;
	const tIn = smooth(prog(f, K1.core, 20));
	return (
		<>
			<Heading text={HEAD} at={K1.so} size={52} />
			<Overlay>
				<rect x={170} y={190} width={700} height={top - 200} rx={18} fill="#e7f0f6" opacity={prog(f, K1.room, 14) * 0.8} />
				<Sx x={196} y={238} text={`air 22${NB}°C`} size={34} color={GREY_INK} hand weight={700} at={K1.room} />
				<Pl p={PLATES.skin} cx={SKIN1.cx} cy={SKIN1.cy} w={SKIN1.w} o={prog(f, 0, 16)} />
				<GTag x={330} y={1000} text="skin, cut through" at={10} size={24} />
				<HeatArrows x={240} y={top + 6} w={560} at={K1.losing} n={5} len={70} />
				<g opacity={tIn} transform={`translate(${(1 - tIn) * 120},0)`}>
					<Thermo cx={1380} cy={560} w={560} />
				</g>
				<CTag x={1180} y={800} text={`core 37${NB}°C`} at={K1.core + 12} color={WARM} size={44} />
				<DashCircle cx={960} cy={610} rx={800} ry={390} at={K1.detecting} />
			</Overlay>
		</>
	);
};

// ---------- 2. A range, not a fixed number ----------
const K2 = cues(S('range-not-number'), {homeo: 'homeostasis', rel: 'Relatively is the', wobbles: 'wobbles within a narrow', roughly: 'roughly', tol: 'tolerance range', set: 'set point', why: 'Why does it', enz: 'Your enzymes', hot: 'Too hot', shape: 'losing their shape', cold: 'Too cold', slow: 'reactions slow down'});
const G2: TG = {x: 1060, y: 220, w: 720, h: 470, x0: 0, x1: 10, y0: 36, y1: 38};
const WOB: [number, number][] = Array.from({length: 41}, (_, i) => [i / 4, 37 + 0.22 * Math.sin(i * 0.9) + 0.08 * Math.sin(i * 2.3)]);
export const SceneRange: React.FC = () => {
	const f = useCurrentFrame();
	const sh = smooth(prog(f, 0, 24));
	const warp = smooth(prog(f, K2.shape, 20)) * (1 - prog(f, K2.cold, 14));
	return (
		<>
			<Heading text="A range, not a fixed number" at={4} size={56} />
			<Overlay>
				<Pl p={PLATES.skin} cx={520 - 300 * sh} cy={650 - 300 * sh} w={700 - 440 * sh} />
				<g opacity={1 - 0.6 * prog(f, K2.set, 14)}>
					<CTag x={96} y={520} text="homeostasis: keeping the internal environment relatively stable" at={K2.homeo} color={TEAL} size={36} maxW={760} />
				</g>
				<Sx x={110} y={720} text="relatively" size={40} color={AMBER_INK} hand weight={700} at={K2.rel} out={K2.wobbles + 30} />
				<TAxes g={G2} at={K2.wobbles - 20} xLabel="time" yLabel="core temperature (°C)" yTicks={[36, 36.5, 37, 37.5, 38]} fmt={n => n.toFixed(1)} />
				<TBand g={G2} lo={36.5} hi={37.5} at={K2.roughly} />
				<TLine g={G2} pts={WOB} at={K2.wobbles} dur={70} color={TEAL} />
				<Sx x={G2.x + G2.w - 12} y={ty(G2, 37.5) - 12} text="tolerance range" size={32} color={TEAL} anchor="end" hand weight={700} at={K2.tol} />
				<THLine g={G2} v={37} at={K2.set} color={INK} />
				<Sx x={G2.x + 14} y={ty(G2, 37) - 14} text="set point" size={30} color={INK} hand weight={700} at={K2.set + 6} />
				<Enzyme x={1240} y={900} s={1.1} at={K2.enz} warp={warp} />
				<GTag x={1340} y={830} text="Year 11: enzyme shape and active site" at={K2.enz + 8} size={22} />
				<GTag x={1340} y={890} text="large rises can denature enzymes" at={K2.shape} out={K2.cold} size={22} />
				<g opacity={vis(f, K2.slow, undefined, 10)}>
					<path d="M1340,970 L1520,970" stroke={GREY_INK} strokeWidth={4} strokeLinecap="round" />
					<path d="M1500,958 L1520,970 L1500,982" fill="none" stroke={GREY_INK} strokeWidth={4} strokeLinecap="round" />
					<Sx x={1540} y={980} text="slower collisions" size={26} color={GREY_INK} weight={600} at={-1000} />
				</g>
				{void K2.why}{void K2.hot}
			</Overlay>
		</>
	);
};

// ---------- 3. A heater with a thermostat ----------
const K3 = cues(S('thermostat'), {heater: 'A heater with', dial: 'set the dial', setp: "that's the set", sensor: 'A sensor inside', sw: 'A switch compares', drops: 'When the room', on: 'turns the heater on', warms: 'As the room', off: 'turns it off', detect: 'Detect', decide: 'decide', act: 'act'});
const H3 = {cx: 560, cy: 610, w: 560};
export const SceneThermostat: React.FC = () => {
	const f = useCurrentFrame();
	const P = pbPt(PLATES.heater, H3.cx, H3.cy, H3.w);
	const [dx, dy] = P(...FEAT.dial), [gx, gy] = P(...FEAT.grille), [px, py] = P(...FEAT.panel), [fx, fy] = P(...FEAT.fins);
	const on = vis(f, K3.on, K3.off + 10, 16);
	const glow = on * (0.6 + 0.4 * Math.sin(f / 9));
	const temp = f < K3.on ? 18 : Math.min(20, 18 + (f - K3.on) / ((K3.off - K3.on) / 2));
	const lastDim = (at: number, next?: number) => (next === undefined ? undefined : next);
	return (
		<>
			<Heading text="A heater with a thermostat" at={K3.heater} size={56} />
			<Overlay>
				{glow > 0.01 ? <ellipse cx={fx} cy={fy} rx={230} ry={330} fill={AMBER} opacity={0.22 * glow} /> : null}
				<PlateB p={PLATES.heater} cx={H3.cx} cy={H3.cy} w={H3.w} o={prog(f, 0, 16)} />
				{f >= K3.dial ? <DrawPath d={scribbleEllipse(dx, dy, 62, 62, 4)} at={K3.dial} dur={18} color={AMBER} width={5} /> : null}
				<Pointer from={[1000, 300]} to={[dx + 50, dy - 20]} at={K3.dial + 6} />
				<DLbl x={1010} y={290} text={`dial = set point (20${NB}°C)`} at={K3.dial + 10} dimAt={K3.sensor} size={34} />
				<Pointer from={[1000, 420]} to={[gx + 40, gy]} at={K3.sensor} />
				<DLbl x={1010} y={410} text="sensor: measures" at={K3.sensor + 6} dimAt={K3.sw} size={34} />
				<Pointer from={[1000, 530]} to={[px + 30, py]} at={K3.sw} />
				<DLbl x={1010} y={520} text="switch: compares" at={K3.sw + 6} dimAt={K3.detect} size={34} />
				<g opacity={prog(f, K3.drops - 10, 14)}>
					<rect x={1060} y={620} width={720} height={300} rx={20} fill="#f3efe6" stroke={INK_SOFT} strokeWidth={3} strokeDasharray="10 8" />
					<Sx x={1086} y={664} text="room" size={28} color={INK_SOFT} hand weight={700} at={-1000} />
					<Sx x={1760} y={672} text={`${Math.round(temp)}${NB}°C`} size={48} color={temp < 20 ? '#3f6fb0' : INK} anchor="end" weight={800} at={-1000} />
				</g>
				<HeatArrows x={1100} y={900} w={560} at={K3.on} out={K3.off + 10} n={5} len={90} />
				{[['detect', K3.detect], ['decide', K3.decide], ['act', K3.act]].map(([t, a], i) => (
					<Sx key={t as string} x={340 + i * 230} y={1045} text={t as string} size={48} color={TEAL} anchor="middle" hand weight={700} at={a as number} />
				))}
				{void K3.setp}{void K3.warms}{void lastDim}
			</Overlay>
		</>
	);
};

// ---------- 4. Five parts, built in the cold ----------
const K4 = cues(S('five-parts'), {five: 'five parts', wind: 'cold wind', stim: 'the stimulus', fall: 'starting to fall', rec: 'a receptor detects', thermo: 'thermoreceptors', hypo1: 'hypothalamus, a small', control: 'the control centre', compares: 'compares that signal', eff: 'effectors, the muscles', shiver: 'start shivering', narrow: 'arterioles, narrow', resp: 'the response', climbs: 'climbs back'});
export const G4: RG = {cx: 800, cy: 610, R: 290, r: 95};
export const SceneFive: React.FC = () => {
	const f = useCurrentFrame();
	const p = (i: number) => ringPt(G4, i);
	const thermo = (fr: number) => (fr < K4.fall ? 1 : fr < K4.climbs ? 1 - 0.25 * smooth(prog(fr, K4.fall, 30)) : 0.75 + 0.25 * smooth(prog(fr, K4.climbs, 30)));
	const shiver = (fr: number) => vis(fr, K4.shiver, K4.narrow + 10, 6);
	const [ex, ey] = p(3);
	return (
		<>
			<Heading text="Five parts, built in the cold" at={4} size={56} />
			<Overlay>
				<GTag x={96} y={200} text="outside change: cold wind" at={K4.wind} size={26} />
				<ColdRing id="b01s4" g={G4} at={K4.five - 10} c={{lit: [K4.stim, K4.rec, K4.control, K4.eff, K4.resp], show: [K4.stim + 6, K4.thermo, K4.hypo1, K4.shiver - 8, K4.resp + 6], thermo, shiver,
					pulses: [{a: 1, b: 2, at: K4.compares, until: K4.eff, every: 22}, {a: 2, b: 3, at: K4.eff + 10, until: K4.resp + 30, every: 22}]}} />
				<DLbl x={p(0)[0] + 120} y={p(0)[1] - 6} text="stimulus: body temperature falls" at={K4.stim + 6} dimAt={K4.rec} size={32} maxW={760} />
				<DLbl x={p(1)[0] + 120} y={p(1)[1] - 14} text="receptor: thermoreceptors (skin, hypothalamus)" at={K4.thermo} dimAt={K4.control} size={32} maxW={620} />
				<Pointer from={[p(1)[0] + 116, p(1)[1] + 40]} to={[p(1)[0] - 2, p(1)[1] - 26]} at={K4.thermo + 8} out={K4.control} color={AMBER_INK} />
				<DLbl x={p(2)[0] + 120} y={p(2)[1] + 6} text="control centre: hypothalamus" at={K4.hypo1} dimAt={K4.eff} size={32} maxW={700} />
				{f >= K4.hypo1 + 10 ? <DrawPath d={scribbleEllipse(p(2)[0], p(2)[1] + 6, 30, 26, 6)} at={K4.hypo1 + 10} dur={16} color={AMBER} width={4} /> : null}
				<GTag x={p(2)[0] + 120} y={p(2)[1] + 50} text={`compares with set point (about 37${NB}°C)`} at={K4.compares} size={22} />
				<DLbl x={p(3)[0] - 120} y={p(3)[1] - 30} text="effectors: shivering muscles" at={K4.eff} dimAt={K4.resp} size={32} maxW={420} anchor="end" />
				<Arteriole x={ex - 240} y={ey + 92} w={150} gap={fr => 34 - 18 * smooth(prog(fr, K4.narrow + 10, 24))} at={K4.narrow} />
				<Sx x={ex - 165} y={ey + 160} text="skin arterioles narrow" size={26} color={INK} anchor="middle" hand weight={700} at={K4.narrow + 6} />
				<DLbl x={p(4)[0] - 120} y={p(4)[1] - 20} text="response: more heat made, less lost" at={K4.resp + 6} size={32} maxW={380} anchor="end" />
				{void tremor}{void SignalPulse}{void Zoom}
			</Overlay>
		</>
	);
};
