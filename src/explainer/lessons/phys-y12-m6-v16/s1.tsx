// Scenes 1 to 5: the hook (last time's lab bench; the painted motor becomes the coded three-quarter model, the split
// ring is taken away, the coil rocks and settles face on, the split ring goes back and it spins), the parts on the
// painted motor with pen arrows and a ring close-up, the two forces on the end-on coil, the one-side derivation of
// tau = nIAB sin theta (lever arm, the normal, the equal angle, the cos and sin parts of the force) and the angle drag
// from edge on to face on with a point riding the torque curve.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, Mark, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {INK} from '../../shared/tokens';
import {AnswerBox, Chip, Row} from '../../physics/projectile/board';
import {Plate} from '../../physics/electromagnetism/bench';
import type {Place} from '../../physics/electromagnetism/bench';
import {ArcBetween} from '../../physics/electromagnetism/flux';
import {Arrow2} from '../../physics/electromagnetism/magnetic';
import {Lead} from '../../physics/electromagnetism/plates';
import {DC_MOTOR} from '../../physics/electromagnetism/transformer';
import {RingCloseUp, coilRun, endOnGeom, modelGeom, runAt, ModelSpin} from '../../physics/electromagnetism/motor';
import {M6V15FinalFrame} from '../phys-y12-m6-v15/s3';
import {DRAG, HEAD, HEAD_SIZE, cap, cue, holdIf} from './common';
import {AMBER, CardRect, Coil, EndSidesInset, FLUX, GREY, HOOK_CAM, LabPack, Lbl, MO, MOTOR, Model, NAVY, ORANGE, PackLeads, PlateSpin, PowerPoint, Ring, T, TorqueGraph, fx} from './parts';

type Pt = [number, number];
const ROCK = coilRun('rock', 420, {alpha0: 100, k: 0.003, c: 0.02});
const SPIN = coilRun('spin', 900, {alpha0: 2, k: 0.003, c: 0.02});

// ---------- 1. hook ----------
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const spins = cue(id, 'Its coil spins'), take = cue(id, 'Take away the split ring'), connect = cue(id, "connect the coil's two ends"), on = cue(id, 'Switch it on'), pred = cue(id, 'Make your prediction'), swings = cue(id, 'It swings round'), magnets = cue(id, 'towards the magnets'), back = cue(id, 'Put the split ring back'), again = cue(id, 'it spins again'), how = cap(id, cue(id, 'So how does a split-ring motor'));
	const h = holdIf(id);
	if (f < 1) return <M6V15FinalFrame />;
	const plateO = 1 - prog(f, take, 20), modelO = prog(f, take, 20);
	const ringO = Math.min(1, (1 - prog(f, take + 24, 16)) + prog(f, back, 16));
	const direct = prog(f, connect, 16) * (1 - prog(f, back, 14));
	const alpha = f < swings ? 100 : f < again ? runAt(ROCK, f - swings) : runAt(SPIN, f - again);
	const g = modelGeom(HOOK_CAM, alpha, 'split');
	const dEndP: Pt = [g.plusFront[0] - HOOK_CAM.k * 0.5, g.plusFront[1] + HOOK_CAM.k * 0.9], dEndM: Pt = [g.minusFront[0] + HOOK_CAM.k * 0.5, g.minusFront[1] + HOOK_CAM.k * 0.9];
	const dotsO = Math.max(plateO, prog(f, on, 12));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<PowerPoint opacity={1 - prog(f, 1, 20)} />
				<LabPack />
				<g opacity={plateO}>
					<PackLeads a={MOTOR.tL} b={MOTOR.tR} dots={1} phase={f * 2} />
					<Plate spec={DC_MOTOR} p={MO} />
					<PlateSpin t={f} />
				</g>
				<g opacity={modelO}>
					<PackLeads a={g.leadL} b={g.leadR} dots={dotsO} phase={f * 2} drop={210} />
					<Lead pts={[g.leadL, g.br.L]} width={5} color="#c0392b" opacity={ringO} />
					<Lead pts={[g.leadR, g.br.R]} width={5} color={INK} opacity={ringO} />
					<Lead pts={[g.leadL, dEndP]} width={5} color="#c0392b" opacity={direct} />
					<Lead pts={[g.leadR, dEndM]} width={5} color={INK} opacity={direct} />
					<Model c={HOOK_CAM} alpha={alpha} ringO={ringO} directLeads={direct} />
					<ModelSpin c={HOOK_CAM} t={f} color={AMBER.stroke} opacity={prog(f, again + 20, 16)} />
				</g>
				{f >= magnets ? <Mark x={150} y={290} at={magnets + 4} kind="tick" color={INK} size={36} /> : null}
				{f < back ? <Ring cx={HOOK_CAM.cx} cy={HOOK_CAM.cy} rx={150} ry={190} at={magnets + 24} color={INK} /> : null}
				<Ring cx={g.rc[0]} cy={g.rc[1]} rx={90} ry={70} at={how} color={NAVY.stroke} />
				{h ? <Countdown start={h.startFrame} end={h.endFrame} x={1010} y={320} r={52} ringFrom={h.startFrame - 30} /> : null}
			</FrameSvg>
			<Chip x={96} y={890} at={-60} out={1} size={30} w={1728} color={INK} border={INK}>Next: how does a split-ring motor keep turning?</Chip>
			<HandTag x={1700} y={330} text="spins" at={spins} out={take} size={40} color={AMBER.ink} />
			<HandTag x={1210} y={880} text="no split ring" at={take + 30} out={back} size={36} color={INK} />
			<HandTag x={1210} y={880} text="split ring back: it spins" at={again} size={36} color={AMBER.ink} />
			{['keeps spinning', 'rocks and stops', "doesn't move"].map((c, i) => <Chip key={c} x={190} y={190 + i * 70} at={pred + i * 6} size={32} w={320}>{c}</Chip>)}
			<Lbl x={96} y={420} at={swings} color={INK} size={30}>swings, overshoots, settles</Lbl>
			<Lbl x={96} y={460} at={magnets} color={INK} size={30}>face on to the magnets</Lbl>
		</>
	);
};

// ---------- 2. the parts ----------
const PL2: Place = {x: 470, y: 205, w: 1000};
const at2 = (nx: number, ny: number): Pt => { const s = PL2.w / (DC_MOTOR.box[2] - DC_MOTOR.box[0]); return [PL2.x + (nx - DC_MOTOR.box[0]) * s, PL2.y + (ny - DC_MOTOR.box[1]) * s]; };
export const S02: React.FC = () => {
	const id = 'parts';
	const f = useCurrentFrame();
	const mag = cue(id, 'The magnets provide the magnetic field'), coilA = cue(id, 'The coil, also called the armature'), axle = cue(id, 'on an axle'), split = cue(id, 'At one end of the axle'), turn = cue(id, 'so the halves turn with the coil'), brushes = cue(id, 'Pressing on the ring are two brushes'), touching = cap(id, cue(id, "whichever half they're touching"));
	const magL = at2(470, 440), coilP = at2(615, 450), axleP = at2(767, 262), ringP = at2(767, 735), brushP = at2(655, 700);
	const fieldYs = [395, 455, 515].map(y => at2(0, y)[1]);
	const x1 = at2(540, 0)[0], x2 = at2(995, 0)[0];
	const ringA = 90 - Math.max(0, f - turn) * 1.6;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Plate spec={DC_MOTOR} p={PL2} />
				<g opacity={prog(f, mag, 14)}>{fieldYs.map(y => <Arrow2 key={y} from={[x1, y]} to={[x2, y]} color={FLUX} width={4} head={18} dash="16 10" />)}</g>
				<g opacity={prog(f, mag, 14)}><Arrow2 from={[400, 330]} to={[magL[0] - 30, magL[1] - 40]} color={NAVY.stroke} width={5} head={20} /></g>
				<g opacity={prog(f, coilA, 14)}><Arrow2 from={[400, 560]} to={[coilP[0] - 12, coilP[1] + 30]} color={ORANGE.stroke} width={5} head={20} /></g>
				<g opacity={prog(f, axle, 14)}><Arrow2 from={[1500, 260]} to={[axleP[0] + 22, axleP[1]]} color={INK} width={5} head={20} /></g>
				<Ring cx={ringP[0]} cy={ringP[1]} rx={78} ry={62} at={split + 10} color={'#8a4f1c'} />
				<g opacity={prog(f, brushes, 14)}><Arrow2 from={[400, 800]} to={[brushP[0] - 20, brushP[1] + 14]} color={GREY.stroke} width={5} head={20} /></g>
				<g opacity={prog(f, turn, 16)}>
					<CardRect x={1510} y={300} w={330} h={300} />
					<RingCloseUp cx={1675} cy={450} r={82} alpha={ringA} currentColor={ORANGE.stroke} current={f >= touching ? 1 : 0} leads />
				</g>
			</FrameSvg>
			<Chip x={96} y={190} at={mag} size={30} w={330} color={NAVY.ink} border={NAVY.stroke}>field magnets: provide B</Chip>
			<Chip x={96} y={430} at={coilA} size={30} w={330} color={ORANGE.ink} border={ORANGE.stroke}>coil (armature): carries the current</Chip>
			<Chip x={1500} y={190} at={axle} size={30} w={300}>axle: lets it turn</Chip>
			<Chip x={1500} y={620} at={split} size={28} w={340} color={'#8a4f1c'} border={'#8a4f1c'}>split-ring commutator: two half rings, turn with the coil</Chip>
			<HandTag x={1520} y={790} text="turns with the coil" at={turn} size={32} color={'#8a4f1c'} />
			<Chip x={96} y={690} at={brushes} size={30} w={330} color={GREY.ink} border={GREY.stroke}>brushes: fixed contacts</Chip>
			<HandTag x={110} y={880} text="stay still" at={brushes + 20} size={34} color={GREY.ink} />
			<HandTag x={1520} y={860} text="current in through a brush" at={touching} size={30} color={ORANGE.ink} />
		</>
	);
};

// ---------- 3. two forces on the coil ----------
const C3 = {cx: 620, cy: 580, R: 230};
export const S03: React.FC = () => {
	const id = 'force-pair';
	const f = useCurrentFrame();
	const look = cue(id, 'Now look at the coil end on'), cross = cue(id, 'cross the magnetic field at right angles'), outA = cue(id, 'Current comes out of the screen'), field = cue(id, 'to both the current and the field'), down = cue(id, 'one up, one down'), pair = cue(id, 'That pair turns the coil'), axle = cap(id, cue(id, 'push along the axle'));
	const g = endOnGeom(C3.cx, C3.cy, C3.R, 90);
	const fl = 150, up = prog(f, field + 6, 14), dn = prog(f, down + 10, 14);
	const turnArc = prog(f, pair, 16);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Coil cx={C3.cx} cy={C3.cy} R={C3.R} alpha={90} plusI={f >= outA ? 1 : 0} field={prog(f, look, 12)} fieldW={480} rows={[-300, -150, 150, 300]} />
				<g opacity={up}><Arrow2 from={[g.plus[0], g.plus[1] - 42]} to={[g.plus[0], g.plus[1] - 42 - fl]} color={AMBER.stroke} width={9} head={28} /></g>
				<g opacity={dn}><Arrow2 from={[g.minus[0], g.minus[1] + 42]} to={[g.minus[0], g.minus[1] + 42 + fl]} color={AMBER.stroke} width={9} head={28} /></g>
				{turnArc > 0.01 ? <g opacity={turnArc}>
					<path d={`M${C3.cx - 120},${C3.cy - 90} A150,150 0 0 1 ${C3.cx + 120},${C3.cy - 90}`} fill="none" stroke={AMBER.stroke} strokeWidth={7} strokeDasharray="22 10" />
					<path d={`M${C3.cx + 138},${C3.cy - 66} L${C3.cx + 96},${C3.cy - 74} L${C3.cx + 132},${C3.cy - 112} Z`} fill={AMBER.stroke} />
				</g> : null}
				<g opacity={prog(f, field, 14)}>
					<CardRect x={1180} y={200} w={330} h={250} />
					<Arrow2 from={[1250, 400]} to={[1440, 400]} color={FLUX} width={7} head={22} />
					<Arrow2 from={[1250, 400]} to={[1250, 240]} color={AMBER.stroke} width={7} head={22} />
					<circle cx={1250} cy={400} r={18} fill="#f6dcc0" stroke={ORANGE.stroke} strokeWidth={4} /><circle cx={1250} cy={400} r={5} fill={INK} />
					<T x={1460} y={410} size={32} color={FLUX}>B</T><T x={1270} y={262} size={32} color={AMBER.ink}>F</T><T x={1200} y={370} size={32} color={ORANGE.ink}>I</T>
				</g>
				<EndSidesInset x={1520} y={770} k={68} opacity={prog(f, axle, 14)} />
			</FrameSvg>
			<Lbl x={C3.cx + 470} y={C3.cy - 320} at={look} color={FLUX} size={36}>B</Lbl>
			<Lbl x={C3.cx} y={C3.cy + 380} at={look} color={INK} size={30} anchor="middle">end on: looking along the axle</Lbl>
			<Lbl x={g.plus[0] - 10} y={g.plus[1] + 90} at={outA} color={ORANGE.ink} size={30} anchor="middle">out of the screen</Lbl>
			<Lbl x={g.minus[0] + 10} y={g.minus[1] + 90} at={outA + 30} color={ORANGE.ink} size={30} anchor="middle">into the screen</Lbl>
			<Lbl x={g.plus[0] + 20} y={g.plus[1] - 220} at={field + 12} color={AMBER.ink} size={32}>F = nIlB</Lbl>
			<Lbl x={g.minus[0] + 24} y={g.minus[1] + 170} at={down + 14} color={AMBER.ink} size={32}>F = nIlB</Lbl>
			<Chip x={1180} y={480} at={cross} size={30} w={640}>long sides cross B at right angles</Chip>
			<HandTag x={1180} y={600} text="opposite currents, opposite forces" at={down + 16} size={34} color={AMBER.ink} />
			<HandTag x={C3.cx - 60} y={C3.cy - 190} text="turning pair" at={pair + 10} size={34} color={AMBER.ink} />
			<HandTag x={1180} y={905} text="no turning effect" at={axle + 10} size={32} color={AMBER.ink} />
			<Lbl x={1260} y={180} at={field} color={INK} size={28}>force at right angles to I and B</Lbl>
		</>
	);
};

// ---------- 4. how big is the torque? ----------
const C4 = {cx: 540, cy: 700, R: 320};
export const S04: React.FC = () => {
	const id = 'torque-formula';
	const f = useCurrentFrame();
	const met = cue(id, "it's r F sine theta"), half = cue(id, "half the coil's width"), nilb = cue(id, 'its force is n I l B'), flux = cue(id, 'the same normal we used for flux'), add = cue(id, 'Add the two sides'), cos = cue(id, 'Cos is close'), th = cue(id, 'n I A B sine theta'), use = cap(id, cue(id, "That's the form we'll use"));
	const alpha = kf(f, [[0, 90], [flux, 90], [flux + 40, 50]]);
	const g = endOnGeom(C4.cx, C4.cy, C4.R, alpha);
	const F = 180, base: Pt = [g.plus[0], g.plus[1]];
	const tip: Pt = [base[0], base[1] - F];
	const ux = g.plus[0] - C4.cx, uy = g.plus[1] - C4.cy, ul = Math.hypot(ux, uy);
	const us: Pt = [ux / ul, uy / ul];
	const along = F * Math.cos((alpha * Math.PI) / 180);
	const aTip: Pt = [base[0] + along * us[0], base[1] + along * us[1]];
	const pTip: Pt = [base[0] + (tip[0] - aTip[0]), base[1] + (tip[1] - aTip[1])];
	const split = prog(f, cos, 16);
	const pulse = f >= nilb && f < nilb + 40 ? Math.sin((Math.PI * (f - nilb)) / 40) : 0;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Coil cx={C4.cx} cy={C4.cy} R={C4.R} alpha={alpha} plusI={1} fieldW={440} rows={[-450, -300, -150, 150]} normal={prog(f, flux, 16)} arc={prog(f, flux + 40, 12)} radial={prog(f, half, 14)} wireR={34} />
				<g opacity={1 - 0.65 * split}><Arrow2 from={base} to={tip} color={AMBER.stroke} width={9 + 4 * pulse} head={28} /></g>
				{split > 0.01 ? <g opacity={split}>
					<Arrow2 from={base} to={aTip} color={GREY.stroke} width={8} head={24} />
					<Arrow2 from={base} to={pTip} color={AMBER.stroke} width={9} head={28} />
					<line x1={aTip[0]} y1={aTip[1]} x2={tip[0]} y2={tip[1]} stroke={INK} strokeWidth={2.5} strokeDasharray="6 6" />
				</g> : null}
				{f >= flux + 40 ? <g opacity={prog(f, flux + 46, 12)}>
					<line x1={base[0]} y1={base[1]} x2={base[0] + 120 * us[0]} y2={base[1] + 120 * us[1]} stroke={INK} strokeWidth={3} strokeDasharray="5 7" />
					<ArcBetween c={base} a={[base[0] + us[0], base[1] + us[1]]} b={[base[0], base[1] - 1]} r={70} color={NAVY.stroke} width={4} />
				</g> : null}
			</FrameSvg>
			<Lbl x={C4.cx + 480} y={C4.cy - 470} at={0} color={FLUX} size={34}>B</Lbl>
			<Chip x={1060} y={180} at={met} out={nilb} size={34} w={600} color={INK} border={INK}>τ = rF sin θ (met before)</Chip>
			<Lbl x={(C4.cx + g.plus[0]) / 2 + 30} y={(C4.cy + g.plus[1]) / 2 + 50} at={half + 6} color={INK} size={34}>r = w/2</Lbl>
			<HandTag x={110} y={905} text="half the width" at={half + 14} out={flux} size={34} color={INK} />
			<Lbl x={tip[0] + 24} y={tip[1] + 20} at={nilb} out={cos} color={AMBER.ink} size={34}>F = nIlB</Lbl>
			<Lbl x={C4.cx + 110} y={C4.cy - 30} at={flux + 16} color={NAVY.ink} size={30}>normal</Lbl>
			<HandTag x={110} y={905} text="same angle" at={flux + 50} size={34} color={NAVY.ink} />
			<Lbl x={aTip[0] - 10} y={aTip[1] - 20} at={cos + 8} color={GREY.ink} size={30} anchor="end">F cos θ</Lbl>
			<Lbl x={pTip[0] + 18} y={pTip[1] - 6} at={cos + 14} color={AMBER.ink} size={30}>F sin θ</Lbl>
			<Chip x={1060} y={180} at={nilb} out={cos} size={32} w={760} color={AMBER.ink} border={AMBER.stroke}>each long side: F = nIlB (n turns), r = w/2</Chip>
			<Chip x={1060} y={250} at={cos} size={30} w={420} color={NAVY.ink} border={NAVY.stroke}>recall: Cos is close</Chip>
			<Chip x={1060} y={320} at={cos + 8} size={28} w={760} color={GREY.ink} border={GREY.stroke}>F cos θ: next to θ, along the face, no turning</Chip>
			<Chip x={1060} y={380} at={cos + 14} size={28} w={760} color={AMBER.ink} border={AMBER.stroke}>F sin θ: opposite θ, the turning part</Chip>
			<div style={{position: 'absolute', left: 1040, top: 460, display: 'flex', flexDirection: 'column', gap: 12, width: 840}}>
				<Row at={add} ageAt={th} size={44} oldSize={36}>τ = 2 × (w/2) × nIlB × sin θ</Row>
				<Row at={cos + 50} ageAt={th} size={44} oldSize={36}>&nbsp;&nbsp;= nI(lw)B sin θ</Row>
				<Row at={th} size={60}><AnswerBox at={th + 14}><span style={{whiteSpace: 'nowrap'}}>τ = nIAB sin θ</span></AnswerBox></Row>
			</div>
			<HandTag x={1620} y={580} text="lw = A" at={add + 30} size={40} color={NAVY.ink} />
			<Chip x={1040} y={790} at={use} size={36} w={760} color={INK} border={INK}>τ = nIA⊥B = nIAB sin θ</Chip>
			<HandTag x={1050} y={880} text="A⊥ = A sin θ; θ: area normal to B" at={use + 10} size={34} color={NAVY.ink} />
		</>
	);
};

// ---------- 5. edge on and face on ----------
const C5 = {cx: 520, cy: 600, R: 230};
const G5 = {x: 1060, y: 330, w: 700, h: 330, x0: 0, x1: 90, ymin: 0, ymax: 1.12};
export const S05: React.FC = () => {
	const id = 'edge-face';
	const f = useCurrentFrame();
	const edge = cue(id, 'When the coil is edge on to the field'), max = cue(id, 'and the torque is the maximum'), turns = cue(id, 'As it turns'), faceOn = cue(id, 'When the coil is face on to the field'), zero = cue(id, 'The torque is zero'), dead = cue(id, 'This is called the dead point'), contrast = cap(id, cue(id, 'Notice the contrast with flux'));
	const theta = kf(f, [[0, 90], [turns, 90], [turns + 30, 60], [turns + 70, 60], [turns + 100, 30], [faceOn, 30], [Math.max(faceOn + 8, zero - 10), 0]]);
	const s = Math.sin((theta * Math.PI) / 180);
	const step = DRAG.reduce((a, d) => (Math.abs(d.t - theta) < Math.abs(a.t - theta) ? d : a));
	const sv = Math.abs(step.t - theta) < 2 ? step.s : s;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Coil cx={C5.cx} cy={C5.cy} R={C5.R} alpha={theta} plusI={1} fieldW={430} rows={[-300, -150, 150, 300]} forces={1} forceLen={130} arms={prog(f, turns, 14)} normal={1} arc={1} />
				<TorqueGraph b={G5} fn={u => Math.sin((u * Math.PI) / 180)} grow={prog(f, edge, 40)} cursor={f >= edge ? theta : undefined} xLabel="θ" yLabel="τ" ticks={[[0, '0°'], [30, '30°'], [60, '60°'], [90, '90°']]} />
				<Ring cx={C5.cx} cy={C5.cy} rx={150} ry={300} at={dead + 6} color={INK} />
			</FrameSvg>
			<Lbl x={C5.cx + 440} y={C5.cy - 320} at={0} color={FLUX} size={34}>B</Lbl>
			<Lbl x={G5.x + G5.w - 30} y={G5.y - 10} at={max} out={turns + 20} color={AMBER.ink} size={36} anchor="end"><AnswerBox at={max + 10}><span style={{whiteSpace: 'nowrap'}}>τ<sub>max</sub> = nIAB</span></AnswerBox></Lbl>
			<Lbl x={G5.x + 20} y={G5.y + G5.h - 30} at={zero} color={AMBER.ink} size={34}>τ = 0</Lbl>
			<div style={{position: 'absolute', left: 1060, top: 760, width: 800, opacity: prog(f, edge, 12), fontFamily: 'inherit'}}>
				<Row at={edge} size={48}>θ = {fx(theta, 0)}°&nbsp;&nbsp;&nbsp;sin θ = {fx(sv, 2)}</Row>
				<Row at={edge + 10} size={48}><span style={{color: AMBER.ink}}>τ = {fx(sv, 2)} τ<sub>max</sub></span></Row>
			</div>
			<HandTag x={110} y={905} text="forces stay vertical, arms shrink" at={turns + 34} out={dead} size={34} color={NAVY.ink} />
			<Lbl x={110} y={905} at={dead} color={INK} size={36}>dead point (face on)</Lbl>
			<div style={{position: 'absolute', left: 1060, top: 176}}>
				<Chip x={0} y={0} at={contrast} size={30} w={760}>face on: full flux (an earlier video), zero torque</Chip>
				<Chip x={0} y={60} at={contrast + 12} size={30} w={760}>edge on: zero flux, full torque</Chip>
			</div>
		</>
	);
};
