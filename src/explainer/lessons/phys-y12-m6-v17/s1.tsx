// Scenes 1 to 5: the hook (last time's motor stops and becomes a small inset; the bench with the painted hobby motor,
// its flywheel, the switch, the multimeter used as an ammeter and the supply: 6.0 A at switch-on falling to 1.0 A as
// the flywheel speeds up), the motor is also a generator (the coded model turning, the flux tag, the back emf on one
// side against the supply current), the what-if energy ledger (a helping emf: 132 W in, 242 W of heat), the
// equivalent circuit with the voltage-share bar, and spinning up (a speed slider on the circuits engine).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, Mark, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {INK} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {DMM, Display, Plate, dmmPts} from '../../physics/electromagnetism/bench';
import {BatterySymbol} from '../../physics/electromagnetism/induction';
import {Arrow2} from '../../physics/electromagnetism/magnetic';
import {Lead, Slider} from '../../physics/electromagnetism/plates';
import {HobbyMotor, ModelSpin, MotorModel, modelGeom} from '../../physics/electromagnetism/motor';
import type {MCam} from '../../physics/electromagnetism/motor';
import {HO_CAM} from '../phys-y12-m6-v16/parts';
import {HandoffBoard, M6V16FinalFrame, V16_END} from '../phys-y12-m6-v16/s3';
import {BACK_FULL, FULL, HEAD, HEAD_SIZE, SLIDE, START, V, WHATIF, cap, cue, holdIf, iAt} from './common';
import {AMBER, Bench, CardRect, EqCircuit, FLUX, GREEN, GREY, HEAT, IGraph, ITicks, Lbl, NAVY, ORANGE, PBar, ROSE, Ring, ShareBar, Strip, benchGeom, fx, turned} from './parts';

const INSET: MCam = {cx: 300, cy: 290, k: 48};
const lerpCam = (a: MCam, b: MCam, t: number): MCam => ({cx: a.cx + (b.cx - a.cx) * t, cy: a.cy + (b.cy - a.cy) * t, k: a.k + (b.k - a.k) * t});

// ---------- 1. hook ----------
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const stop = cue(id, "Let's stop it"), amm = cue(id, 'with an ammeter in the circuit'), closes = cue(id, 'Just after the switch closes'), reads = cue(id, 'the ammeter reads six amps'), up = cue(id, 'As the coil speeds up'), one = cue(id, 'settles at just one amp'), same = cue(id, 'Same twelve volt supply'), pred = cue(id, 'Make your prediction'), back = cap(id, cue(id, 'Something pushes back'));
	const h = holdIf(id);
	if (f < 1) return <M6V16FinalFrame />;
	const fade = prog(f, stop, 24);
	const spinRate = (g: number) => 6 * (1 - prog(g, stop, 30));
	const alpha = V16_END.alpha - turned(f, spinRate);
	const shrink = prog(f, stop + 20, 30);
	const k = f < closes ? 0 : kf(f, [[up, 0], [one, 1]]);
	const I = f < closes ? 0 : iAt(k);
	const deg = turned(f, g => (g < up ? 0 : 14 * kf(g, [[up, 0], [one, 1]])));
	const benchO = prog(f, amm, 20);
	const g = benchGeom();
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<div style={{position: 'absolute', inset: 0, opacity: 1 - fade}}><HandoffBoard f={V16_END.f + f} final chip={false} heading={false} /></div>
			<FrameSvg>
				{fade > 0.001 ? <g>
					<MotorModel c={lerpCam(HO_CAM, INSET, shrink)} alpha={alpha} fieldColor={FLUX} coilColor={ORANGE.stroke} />
					<ModelSpin c={lerpCam(HO_CAM, INSET, shrink)} t={f} color={AMBER.stroke} opacity={1 - prog(f, stop, 30)} />
				</g> : null}
				<g opacity={benchO} transform={`translate(0 ${40 * (1 - benchO)})`}>
					<Bench deg={deg} open={1 - prog(f, closes, 10)} reading={`${fx(I, 1)} A`} I={I} dots={f >= closes ? 1 : 0} phase={f * 3} />
				</g>
				<Ring cx={(g.d.display[0][0] + g.d.display[1][0]) / 2} cy={(g.d.display[0][1] + g.d.display[1][1]) / 2} rx={120} ry={60} at={one + 10} color={ORANGE.stroke} />
				{f >= back ? <Mark x={1110} y={322} at={back + 10} kind="tick" color={INK} size={36} /> : null}
				{h ? <Countdown start={h.startFrame} end={h.endFrame} x={1000} y={250} r={50} ringFrom={h.startFrame - 30} /> : null}
			</FrameSvg>
			<Chip x={96} y={890} at={-60} out={1} size={30} w={1728} color={INK} border={INK}>Next: why does a spinning DC motor draw less current?</Chip>
			<Lbl x={INSET.cx} y={INSET.cy + 140} at={stop + 40} color={INK} size={28} anchor="middle">last time's motor</Lbl>
			<HandTag x={g.l.pos[0] - 160} y={g.l.pos[1] - 120} text="12 V" at={amm + 10} size={40} color={NAVY.ink} />
			<HandTag x={940} y={380} text="big at the start" at={reads} out={one} size={36} color={ORANGE.ink} />
			<Chip x={560} y={190} at={same} size={30} w={200} color={NAVY.ink} border={NAVY.stroke}>same 12 V</Chip>
			<Chip x={560} y={250} at={same + 12} size={30} w={200}>same coil</Chip>
			<Chip x={560} y={310} at={same + 24} size={30} w={260}>same R = 2.0 Ω</Chip>
			<CrossedChip x={1140} y={180} at={pred} crossAt={back} size={30} caption="it contradicts same R">the coil's resistance rises</CrossedChip>
			<Chip x={1140} y={300} at={pred + 8} size={30} w={560} color={ROSE.ink} border={ROSE.stroke}>something in the coil pushes back</Chip>
		</>
	);
};

// ---------- 2. the motor is also a generator ----------
const C2: MCam = {cx: 620, cy: 520, k: 150};
export const S02: React.FC = () => {
	const id = 'also-a-generator';
	const f = useCurrentFrame();
	const flux = cue(id, 'the flux through it keeps changing'), emf = cue(id, 'a changing flux induces an emf'), gen = cue(id, "So the motor's coil is also a generator"), lenz = cue(id, "Lenz's law says it opposes"), supply = cue(id, 'pushes against the supply'), call = cue(id, 'We call it the back emf'), extra = cue(id, "It isn't an extra part"), itself = cap(id, cue(id, 'It comes from the motion itself'));
	const alpha = 90 - f * 4;
	const c = Math.cos((alpha * Math.PI) / 180);
	const mg = modelGeom(C2, alpha, 'split');
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Lead pts={[mg.br.L, [mg.br.L[0], 860], [300, 860], [300, 900]]} width={5} color="#c0392b" />
				<Lead pts={[mg.br.R, [mg.br.R[0], 900], [380, 900]]} width={5} color={INK} />
				<BatterySymbol x={340} y={900} />
				<MotorModel c={C2} alpha={alpha} fieldColor={FLUX} coilColor={ORANGE.stroke} />
				<ModelSpin c={C2} t={f} color={AMBER.stroke} />
				<g opacity={prog(f, flux, 12)}>
					<text x={C2.cx + 30} y={C2.cy - 250} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 44 + 24 * Math.abs(c), fill: FLUX}}>Φ{c < 0 ? ' (reversed)' : ''}</text>
				</g>
				<g opacity={prog(f, supply, 14)}>
					<CardRect x={1150} y={560} w={660} h={260} />
					<line x1={1220} y1={720} x2={1740} y2={720} stroke={ORANGE.stroke} strokeWidth={14} strokeLinecap="round" />
					<Arrow2 from={[1260, 680]} to={[1700, 680]} color={ORANGE.stroke} width={8} head={26} />
					<Arrow2 from={[1700, 770]} to={[1260, 770]} color={ROSE.stroke} width={8} head={26} />
				</g>
				<Ring cx={1480} cy={725} rx={280} ry={80} at={supply + 20} color={ROSE.stroke} />
			</FrameSvg>
			<HandTag x={C2.cx + 160} y={C2.cy - 250} text="Φ changing" at={flux + 10} size={34} color={FLUX} />
			<Lbl x={C2.cx - 10} y={C2.cy + 40} at={emf} color={ROSE.ink} size={56} anchor="middle">ε</Lbl>
			<Chip x={1150} y={180} at={emf + 6} size={30} w={600} color={ROSE.ink} border={ROSE.stroke}>Faraday: changing Φ → ε</Chip>
			<Chip x={1150} y={250} at={gen} size={30} w={330} color={ORANGE.ink} border={ORANGE.stroke}>motor (current → turning)</Chip>
			<Chip x={1490} y={250} at={gen + 8} size={30} w={330} color={ROSE.ink} border={ROSE.stroke}>generator (turning → ε)</Chip>
			<HandTag x={1160} y={350} text="both at once" at={gen + 20} size={34} color={ROSE.ink} />
			<Chip x={1150} y={400} at={lenz} size={30} w={520} color={GREY.ink} border={GREY.stroke}>Lenz: opposes the change</Chip>
			<Lbl x={1240} y={655} at={supply} color={ORANGE.ink} size={30}>I (from supply)</Lbl>
			<Lbl x={1240} y={815} at={supply + 8} color={ROSE.ink} size={30}>ε_back</Lbl>
			<Lbl x={1480} y={600} at={supply} color={INK} size={28} anchor="middle">one side of the coil</Lbl>
			<Chip x={96} y={170} at={call} out={extra} size={30} w={1000} color={ROSE.ink} border={ROSE.stroke}>Back emf: “The voltage induced in a motor's rotating coil, opposing the applied voltage.”</Chip>
			<CrossedChip x={96} y={170} at={extra} crossAt={itself} size={30}>an extra part inside the motor</CrossedChip>
			<Chip x={600} y={180} at={itself + 6} size={30} w={420} color={ROSE.ink} border={ROSE.stroke}>made by the rotation ✓</Chip>
		</>
	);
};

// ---------- 3. why it must push back ----------
const B3 = {x: 260, y: 360, w: 420, h: 380};
const PB = {base: 860, k: 480 / 242};
export const S03: React.FC = () => {
	const id = 'why-oppose';
	const f = useCurrentFrame();
	const why = cue(id, 'Why against, and not with'), suppose = cue(id, 'Suppose the induced emf helped the supply'), tt = cue(id, 'Then twenty two volts'), watts = cue(id, 'one hundred and thirty two watts'), heat = cue(id, 'two hundred and forty two watts into heat'), more = cue(id, 'More energy out than in'), must = cue(id, 'so the back emf must oppose the supply'), work1 = cue(id, 'Then the supply has to do work'), coul = cue(id, 'pushing each coulomb of charge'), work2 = cap(id, cue(id, "becomes the motor's mechanical work"));
	const helping = f >= suppose + 10 && f < must;
	const grey = f < must ? 1 - prog(f, must, 12) : 0;
	const I = f < tt ? FULL.I : helping ? WHATIF.I : FULL.I;
	const deg = turned(f, g => (g >= heat && g < must ? 10 + 0.06 * (g - heat) : 8));
	const hill = prog(f, coul, 14);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<rect x={80} y={166} width={1760} height={790} rx={24} fill={grey > 0.01 ? 'rgba(138,131,120,0.07)' : 'none'} stroke={GREY.stroke} strokeWidth={4} strokeDasharray="18 12" opacity={grey} />
				<EqCircuit b={B3} emf={helping ? -1 : 1} I={I} phase={f * 4} vLabel="12 V" rLabel="2.0 Ω" eLabel={helping ? '+10 V (what if)' : 'ε_back'} grey={grey > 0.5} />
				{hill > 0.01 ? <g opacity={hill}>
					<path d={`M${B3.x + B3.w + 140},${B3.y + B3.h - 20} L${B3.x + B3.w + 260},${B3.y + 60} L${B3.x + B3.w + 260},${B3.y + B3.h - 20} Z`} fill={ROSE.soft} stroke={ROSE.stroke} strokeWidth={4} />
					{[0, 1, 2].map(i => { const t = ((f - coul) / 50 + i / 3) % 1; return <circle key={i} cx={B3.x + B3.w + 140 + 120 * t} cy={B3.y + B3.h - 20 - (B3.h - 80) * t - 10} r={10} fill={ORANGE.stroke} stroke="#fffdf8" strokeWidth={2} />; })}
				</g> : null}
				<PBar x={1080} base={PB.base} w={150} h={WHATIF.pin * PB.k * prog(f, watts, 16)} color={ORANGE.stroke} label="in (supply)" value={`${fx(WHATIF.pin, 0)} W`} opacity={prog(f, watts, 10) * (1 - prog(f, must, 14))} />
				<PBar x={1300} base={PB.base} w={150} h={WHATIF.heat * PB.k * prog(f, heat, 24)} color={HEAT} label="heat (I²R)" value={`${fx(WHATIF.heat, 0)} W`} opacity={prog(f, heat, 10) * (1 - prog(f, must, 14))} />
				<g opacity={prog(f, heat + 20, 12) * (1 - prog(f, must, 14))}><Arrow2 from={[1530, PB.base - 40]} to={[1530, PB.base - 320]} color={GREEN.stroke} width={12} head={34} /></g>
				<HobbyMotor p={{x: 1520, y: 190, w: 260}} deg={deg} />
			</FrameSvg>
			<Lbl x={1560} y={PB.base - 360} at={heat + 20} out={must} color={GREEN.ink} size={28}>kinetic energy rising</Lbl>
			<Chip x={110} y={190} at={why} out={must} size={30} w={700} color={GREY.ink} border={GREY.stroke}>what if: the emf helps the supply</Chip>
			<div style={{position: 'absolute', left: 110, top: 800, width: 900}}>
				<Row at={tt} out={must} size={48}>I = (12 + 10) / 2.0 = {fx(WHATIF.I, 0)} A</Row>
			</div>
			<HandTag x={1080} y={230} text="out > 242 W, in = 132 W" at={more} out={must} size={36} color={INK} />
			<div style={{position: 'absolute', left: 1090, top: 280, opacity: prog(f, more + 6, 8) * (1 - prog(f, must, 12)), transform: 'rotate(-8deg)', border: `6px solid ${GREY.stroke}`, borderRadius: 10, padding: '4px 22px', fontFamily: 'Inter Tight', fontWeight: 900, fontSize: 56, color: GREY.ink, background: 'rgba(255,253,248,0.85)'}}>IMPOSSIBLE ✗</div>
			<HandTag x={1100} y={420} text="more out than in" at={more + 12} out={must} size={36} color={GREY.ink} />
			<Chip x={110} y={190} at={must} size={32} w={760} color={ROSE.ink} border={ROSE.stroke}>so the back emf must oppose the supply</Chip>
			<HandTag x={1060} y={520} text="supply does work against ε_back" at={work1 + 10} size={36} color={ROSE.ink} />
			<Chip x={1060} y={620} at={work2} size={34} w={720} color={AMBER.ink} border={AMBER.stroke}>→ mechanical work (turning the load)</Chip>
			<Lbl x={110} y={880} at={must + 10} color={INK} size={30}>each coulomb is pushed “uphill” against ε_back</Lbl>
		</>
	);
};

// ---------- 4. what the circuit sees ----------
const B4 = {x: 200, y: 300, w: 480, h: 470};
export const S04: React.FC = () => {
	const id = 'circuit';
	const f = useCurrentFrame();
	const two = cue(id, 'two things in series'), its = cue(id, 'Its resistance, R'), shared = cue(id, 'the supply voltage V is shared'), part = cue(id, 'Part of it balances the back emf'), plus = cue(id, 'So V equals the back emf plus I R'), all = cue(id, 'all over R'), left = cap(id, cue(id, "Only the voltage that's left over"));
	const pulse = f >= left && f < left + 40 ? Math.sin((Math.PI * (f - left)) / 40) : 0;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<EqCircuit b={B4} emf={1} I={2.5} phase={f * 3} size={40} />
				<Ring cx={B4.x + B4.w / 2} cy={B4.y} rx={110} ry={60} at={its} color={INK} />
				<Ring cx={B4.x + B4.w} cy={B4.y + B4.h / 2} rx={90} ry={70} at={its + 30} color={ROSE.stroke} />
				<ShareBar x={960} y={300} h={520} total={12} back={7.5} values={false} opacity={prog(f, shared, 14)} pulse={pulse} size={36} />
				{f >= left ? <path d={`M945,${300 + 520 * 7.5 / 12 + 6} l-18,0 l0,${520 * 4.5 / 12 - 12} l18,0`} fill="none" stroke={ORANGE.stroke} strokeWidth={5} opacity={prog(f, left, 10)} /> : null}
			</FrameSvg>
			<Lbl x={B4.x + 40} y={B4.y + B4.h + 70} at={two} color={INK} size={32}>the coil = resistance R + back emf, in series</Lbl>
			<HandTag x={960} y={890} text="V shared round the loop" at={shared + 10} size={36} color={NAVY.ink} />
			<Lbl x={1250} y={760} at={part} color={INK} size={30}>part balances ε_back; the rest is IR</Lbl>
			<div style={{position: 'absolute', left: 1250, top: 300, display: 'flex', flexDirection: 'column', gap: 26, width: 640}}>
				<Row at={plus} size={52}>V = ε_back + IR</Row>
				<Row at={all} size={52}><AnswerBox at={all + 10}><span style={{whiteSpace: 'nowrap'}}>I = (V − ε_back) / R</span></AnswerBox></Row>
			</div>
			<HandTag x={1250} y={640} text="only the leftover drives I" at={left + 6} size={38} color={ORANGE.ink} />
		</>
	);
};

// ---------- 5. spinning up ----------
const B5 = {x: 170, y: 300, w: 260, h: 240};
const G5 = {x: 1080, y: 290, w: 600, h: 330, x0: 0, x1: 1, ymin: 0, ymax: 7};
export const S05: React.FC = () => {
	const id = 'spinning-up';
	const f = useCurrentFrame();
	const starts = cue(id, 'Just as it starts'), six = cue(id, 'giving six point zero amps'), grows = cue(id, 'As the coil speeds up, the back emf grows'), prop = cue(id, 'proportional to the speed'), ten = cue(id, 'the back emf here is ten volts'), one = cue(id, 'one point zero amp'), faster = cap(id, cue(id, 'The faster it spins'));
	const k = kf(f, [[0, 0], [grows, 0], [prop, 0.25], [prop + 30, 0.25], [prop + 45, 0.5], [prop + 75, 0.5], [prop + 90, 0.75], [Math.max(prop + 120, ten - 20), 0.75], [ten, 1]], false);
	const step = SLIDE.reduce((a, s) => (Math.abs(s.k - k) < Math.abs(a.k - k) ? s : a));
	const shown = Math.abs(step.k - k) < 0.01 ? step : {k, back: BACK_FULL * k, I: iAt(k)};
	const deg = turned(f, g => 16 * kf(g, [[0, 0], [grows, 0], [prop, 0.25], [prop + 30, 0.25], [prop + 45, 0.5], [prop + 75, 0.5], [prop + 90, 0.75], [Math.max(prop + 120, ten - 20), 0.75], [ten, 1]], false));
	const dmm = {x: 1680, y: 690, w: 130};
	const dp = dmmPts(dmm);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Strip x={1080} y={166} at={-30} size={32} color={NAVY.ink}>V = 12 V,&nbsp; R = 2.0 Ω</Strip>
			<FrameSvg>
				<EqCircuit b={B5} emf={1} I={shown.I} phase={f * 3} size={30} eLabel="ε" />
				<ShareBar x={580} y={250} h={380} total={V} back={shown.back} size={30} opacity={prog(f, starts, 12)} />
				<IGraph b={G5} grow={prog(f, starts, 30)} k={shown.k} />
				<ITicks b={G5} ticks={[0, 2, 4, 6]} />
				<Slider x={1100} y={690} w={460} value={shown.k} color={NAVY.stroke} label="speed" ticks={[[0, '0'], [0.25, '¼'], [0.5, '½'], [0.75, '¾'], [1, 'full']]} size={28} />
				<HobbyMotor p={{x: 1150, y: 790, w: 200}} deg={deg} />
				<g opacity={prog(f, faster, 14)}><Plate spec={DMM} p={dmm} /><Display box={dp.display} text={`${fx(shown.I, shown.I < 10 && Math.abs(shown.I * 10 - Math.round(shown.I * 10)) > 0.01 ? 2 : 1)} A`} /></g>
			</FrameSvg>
			<HandTag x={G5.x + 60} y={G5.y + 40} text="resistance-only estimate" at={six + 10} out={prop} size={30} color={ORANGE.ink} />
			<HandTag x={580} y={690} text="ε_back ∝ ω (fixed field)" at={prop + 10} out={faster} size={34} color={ROSE.ink} />
			<div style={{position: 'absolute', left: 96, top: 640, width: 520, opacity: prog(f, grows, 12)}}>
				<Row at={grows} size={44}><span style={{color: ROSE.ink}}>ε_back = {fx(shown.back, shown.back % 1 ? 1 : 0)} V</span></Row>
				<Row at={grows + 6} size={44}><span style={{color: ORANGE.ink}}>I = {fx(shown.I, Math.abs(shown.I * 10 - Math.round(shown.I * 10)) > 0.01 ? 2 : 1)} A</span></Row>
			</div>
			<div style={{position: 'absolute', left: 96, top: 800, display: 'flex', flexDirection: 'column', gap: 6, width: 1200}}>
				<Row at={six - 30} ageAt={one - 30} size={44} oldSize={34}>I = (12 − 0) / 2.0 = <AnswerBox at={six}><span style={{whiteSpace: 'nowrap'}}>{fx(START.I, 1)} A</span></AnswerBox></Row>
				<Row at={one - 30} size={44}>I = (12 − 10) / 2.0 = <AnswerBox at={one}><span style={{whiteSpace: 'nowrap'}}>{fx(FULL.I, 1)} A</span></AnswerBox></Row>
			</div>
			<HandTag x={1060} y={905} text="spinning fast → big ε_back → small I" at={faster + 6} size={32} color={ROSE.ink} />
		</>
	);
};
