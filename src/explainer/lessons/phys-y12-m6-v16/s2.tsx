// Scenes 6 to 10: the worked example (task strip, equation strip, grouped givens, one stage at a time; the plane-angle
// trap on the small end-on coil), why it rocks without a split ring (the sides swap places but keep their forces; the
// torque curve crosses zero), what the split ring does (the end-on coil linked to the ring close-up; the current flips
// at the dead point; the torque keeps its sense, a train of humps), smoother motors (parked at the dead point, three
// coils with six segments, the radial field) and the memory card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {INK} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {MemoryCard} from '../../shared/scenes';
import {ArcBetween} from '../../physics/electromagnetism/flux';
import {Arrow2} from '../../physics/electromagnetism/magnetic';
import {EndOnWire} from '../../physics/electromagnetism/wires';
import {RingCloseUp, coilRun, commSign, endOnGeom, runAt} from '../../physics/electromagnetism/motor';
import {HEAD, HEAD_SIZE, WE, cap, cue} from './common';
import {AMBER, CardRect, Coil, FLUX, GREY, Lbl, NAVY, ORANGE, RadialView, Ring, Strip, TorqueGraph, fx, sci, tauFixed, tauSplit, tauThree} from './parts';

type Pt = [number, number];
const HALF = ['#c8742c', '#6e4126'], TINT = ['#f3cfa8', '#d9c3ad'];
/** Current in side "+" through the split ring: 0 right at a gap. */
const viaRing = (alpha: number): 1 | -1 | 0 => (Math.abs(Math.sin((alpha * Math.PI) / 180)) < 0.06 ? 0 : commSign(alpha) as 1 | -1);
const TurnArrow: React.FC<{cx: number; cy: number; r: number; cw: boolean; color: string; opacity?: number}> = ({cx, cy, r, cw, color, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const a0 = cw ? 150 : 30, a1 = cw ? 30 : 150;
	const p = (a: number): Pt => [cx + r * Math.cos((a * Math.PI) / 180), cy - r * Math.sin((a * Math.PI) / 180)];
	const s = p(a0), e = p(a1), pe = p(cw ? a1 + 12 : a1 - 12);
	const ang = Math.atan2(e[1] - pe[1], e[0] - pe[0]);
	return (
		<g opacity={opacity}>
			<path d={`M${s[0]},${s[1]} A${r},${r} 0 0 ${cw ? 1 : 0} ${e[0]},${e[1]}`} fill="none" stroke={color} strokeWidth={8} strokeDasharray="24 10" />
			<path d={`M${e[0] + 22 * Math.cos(ang)},${e[1] + 22 * Math.sin(ang)} L${e[0] + 16 * Math.cos(ang + 2.2)},${e[1] + 16 * Math.sin(ang + 2.2)} L${e[0] + 16 * Math.cos(ang - 2.2)},${e[1] + 16 * Math.sin(ang - 2.2)} Z`} fill={color} />
		</g>
	);
};

// ---------- 6. worked example ----------
const C6 = {cx: 1590, cy: 420, R: 150};
export const S06: React.FC = () => {
	const id = 'worked-example';
	const f = useCurrentFrame();
	const area = cue(id, 'The area is one point two'), mult = cue(id, 'Multiply n, I, A and B'), m1 = cue(id, 'newton metres'), plane = cue(id, "Now the coil's plane is at thirty degrees"), careful = cue(id, "Careful, that's the plane"), deg = cue(id, 'the normal is at sixty degrees'), sin60 = cue(id, 'The torque is three point six'), m2 = cue(id, 'newton metres', 2), books = cue(id, 'Some books and data sheets'), given = cap(id, cue(id, "you're given"));
	const alpha = kf(f, [[0, 90], [plane, 90], [plane + 30, 60]]);
	const g = endOnGeom(C6.cx, C6.cy, C6.R, alpha);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Strip x={96} y={166} at={-30} size={34} w={1300}>Find the maximum torque, then the torque when the coil's plane is at 30° to B.</Strip>
			<Strip x={96} y={250} at={-30} size={34} w={1100} color={INK}>τ = nIAB sin θ&nbsp;&nbsp;<span style={{color: NAVY.ink}}>(θ: area normal to B)</span></Strip>
			<div style={{position: 'absolute', left: 96, top: 334, width: 1180, background: NAVY.soft, border: `3px solid ${NAVY.stroke}`, borderRadius: 14, padding: '8px 22px 10px'}}>
				<Row at={-30} size={34}><span style={{color: NAVY.ink}}>n = 50</span>;&nbsp; <span style={{color: ORANGE.ink}}>I = 3.0 A</span>;&nbsp; <span style={{color: FLUX}}>B = 0.20 T</span></Row>
				<Row at={-30} size={34}><span style={{color: NAVY.ink}}>coil 4.0 cm × 3.0 cm{f >= area ? <> → A = 0.040 × 0.030 = {sci(WE.A, 1)} m²</> : null}</span></Row>
			</div>
			<FrameSvg>
				<CardRect x={C6.cx - 260} y={C6.cy - 230} w={520} h={460} />
				<Coil cx={C6.cx} cy={C6.cy} R={C6.R} alpha={alpha} plusI={0} fieldW={230} rows={[-170, -85, 85, 170]} normal={prog(f, deg, 14)} arc={prog(f, deg + 8, 12)} wireR={22} />
				{f >= plane + 30 ? <g opacity={prog(f, careful, 12)}>
					<ArcBetween c={g.axle} a={[g.axle[0] - 1, g.axle[1]]} b={g.plus} r={95} color={INK} width={4} />
				</g> : null}
			</FrameSvg>
			<Lbl x={C6.cx - 225} y={C6.cy - 110} at={careful} color={INK} size={30}>30°</Lbl>
			<Lbl x={C6.cx + 240} y={C6.cy - 175} at={0} color={FLUX} size={30} anchor="end">B</Lbl>
			<HandTag x={1370} y={700} text="θ = 90° − 30° = 60°" at={deg + 10} size={38} color={NAVY.ink} />
			<div style={{position: 'absolute', left: 96, top: 620, display: 'flex', flexDirection: 'column', gap: 18, width: 1500}}>
				<Row at={mult} ageAt={plane} size={48} oldSize={38}>τ<sub>max</sub> = 50 × 3.0 × {sci(WE.A, 1)} × 0.20 = <AnswerBox at={m1}><span style={{whiteSpace: 'nowrap'}}>{sci(WE.max, 1)} N m</span></AnswerBox></Row>
				<Row at={sin60} size={52}>τ = {sci(WE.max, 1)} × sin 60° = <AnswerBox at={m2}><span style={{whiteSpace: 'nowrap'}}>{sci(WE.at, 1)} N m</span></AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={850} at={m1 + 10} crossAt={m1 + 40} out={plane} size={32} caption="convert cm to m first">A = 4.0 × 3.0 = 12 → τ = {fx(WE.slip, 0)} N m</CrossedChip>
			<Chip x={96} y={860} at={books} size={30} w={1100} color={INK}>plane angle α: τ = nIAB cos α (same answer)</Chip>
			<HandTag x={1220} y={890} text="check which angle" at={given} size={34} color={NAVY.ink} />
		</>
	);
};

// ---------- 7. why it rocks without a split ring ----------
const C7 = {cx: 520, cy: 580, R: 220};
const G7 = {x: 1080, y: 300, w: 700, h: 380, x0: 0, x1: 150, ymin: -1.15, ymax: 1.15};
const ROCK7 = coilRun('rock', 600, {alpha0: -40, k: 0.003, c: 0.02});
export const S07: React.FC = () => {
	const id = 'rocking';
	const f = useCurrentFrame();
	const never = cue(id, 'never changes direction'), toward = cue(id, 'The coil turns towards face on'), past = cue(id, 'carries it past the dead point'), swapped = cue(id, 'the sides have swapped places'), left = cue(id, 'The side on the left is now on the right'), back = cue(id, 'So the torque now turns the coil back'), forth = cue(id, 'It swings back and forth'), rock = cap(id, cue(id, "That's the rocking"));
	const alpha = f < back ? kf(f, [[0, 90], [toward, 90], [past + 10, 8], [swapped, -40]]) : runAt(ROCK7, f - back);
	const phi = 90 - alpha;
	const grow = Math.min(1, (f < back ? Math.max(0, phi) : 130) / 150);
	const g90 = endOnGeom(C7.cx, C7.cy, C7.R, 90), gNow = endOnGeom(C7.cx, C7.cy, C7.R, alpha);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Coil cx={C7.cx} cy={C7.cy} R={C7.R} alpha={alpha} plusI={1} fieldW={430} rows={[-300, -150, 150, 300]} forces={1} forceLen={120} plusTint={f >= never ? TINT[0] : undefined} minusTint={f >= never ? TINT[1] : undefined} />
				<TorqueGraph b={G7} fn={tauFixed} grow={grow} cursor={Math.min(150, Math.max(0, phi))} ticks={[[90, 'face on']]} xLabel="turned" yLabel="τ (forward +)" />
				<TurnArrow cx={C7.cx} cy={C7.cy} r={120} cw color={AMBER.stroke} opacity={prog(f, toward, 12) * (1 - prog(f, back, 10))} />
				<TurnArrow cx={C7.cx} cy={C7.cy} r={120} cw={false} color={AMBER.stroke} opacity={prog(f, back, 12) * (1 - prog(f, forth + 30, 12))} />
				{f >= swapped ? <g opacity={prog(f, swapped, 12) * (1 - prog(f, back, 12))}>
					<Arrow2 from={[g90.plus[0], g90.plus[1] - 60]} to={[gNow.plus[0] - 10, gNow.plus[1] - 70]} color={AMBER.stroke} width={5} head={18} dash="10 8" />
					<Arrow2 from={[g90.minus[0], g90.minus[1] + 60]} to={[gNow.minus[0] + 10, gNow.minus[1] + 70]} color={AMBER.stroke} width={5} head={18} dash="10 8" />
				</g> : null}
			</FrameSvg>
			<Lbl x={C7.cx + 440} y={C7.cy - 320} at={0} color={FLUX} size={34}>B</Lbl>
			<Chip x={96} y={170} at={-30} size={32} w={360} color={INK} border={GREY.stroke}>no split ring</Chip>
			<HandTag x={110} y={905} text="same current, always" at={never + 6} out={swapped} size={36} color={ORANGE.ink} />
			<Lbl x={G7.x + G7.w / 2} y={G7.y + G7.h + 110} at={past} color={AMBER.ink} size={32} anchor="middle">past face on, τ goes negative</Lbl>
			<HandTag x={110} y={905} text="sides swapped, forces kept" at={left} out={back} size={36} color={AMBER.ink} />
			<HandTag x={110} y={905} text="torque reverses" at={back + 6} out={forth} size={38} color={AMBER.ink} />
			<HandTag x={110} y={905} text="rocks and stops face on" at={rock} size={38} color={INK} />
		</>
	);
};

// ---------- 8. what the split ring does ----------
const C8 = {cx: 470, cy: 480, R: 190};
const RC8 = {cx: 1380, cy: 470, r: 140};
const G8 = {x: 180, y: 760, w: 1560, h: 150, x0: 0, x1: 720, ymin: 0, ymax: 1.15};
const SPIN8 = coilRun('spin', 900, {alpha0: -40, k: 0.003, c: 0.02, w0: -3});
export const S08: React.FC = () => {
	const id = 'split-ring';
	const f = useCurrentFrame();
	const watch = cue(id, 'Watch the brushes'), ring = cue(id, 'onto the other half of the ring'), rev = cue(id, 'the current in the coil reverses'), way = cue(id, 'keeps turning the coil the same way'), none = cue(id, 'no current flows'), going = cue(id, 'so it keeps going through that point'), every = cue(id, 'Every half turn'), turning = cap(id, cue(id, 'so the coil keeps turning'));
	const alpha = f < every ? kf(f, [[0, 90], [watch, 90], [ring, 0], [rev, 0], [way, -40]]) : runAt(SPIN8, f - every);
	const plusI = f < rev && Math.abs(alpha) < 0.5 ? 1 : viaRing(alpha);
	const shown = f >= ring - 4 && f < rev ? 1 : plusI;
	const phi = 90 - alpha;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Coil cx={C8.cx} cy={C8.cy} R={C8.R} alpha={alpha} plusI={shown as 1 | -1 | 0} fieldW={380} rows={[-240, -120, 120, 240]} forces={1} forceLen={110} plusTint={TINT[0]} minusTint={TINT[1]} wireR={32} />
				<CardRect x={RC8.cx - 300} y={RC8.cy - 230} w={600} h={460} />
				<RingCloseUp cx={RC8.cx} cy={RC8.cy} r={RC8.r} alpha={alpha} current={shown === 0 ? 0 : 1} currentColor={ORANGE.stroke} ringColors={HALF} />
				<Ring cx={RC8.cx} cy={RC8.cy} rx={290} ry={70} at={watch + 4} color={GREY.stroke} />
				<TorqueGraph b={G8} fn={tauSplit} grow={Math.min(1, Math.max(0, phi) / 720)} cursor={Math.min(720, Math.max(0, phi))} ticks={[[90, '½'], [270, '1'], [450, '1½'], [630, '2']]} xLabel="turns" size={28} />
				<TurnArrow cx={C8.cx} cy={C8.cy} r={110} cw color={AMBER.stroke} opacity={prog(f, way, 12)} />
				<Ring cx={C8.cx} cy={C8.cy} rx={240} ry={70} at={none} color={INK} />
			</FrameSvg>
			<Lbl x={C8.cx + 390} y={C8.cy - 260} at={0} color={FLUX} size={32}>B</Lbl>
			<Lbl x={RC8.cx} y={RC8.cy + 200} at={0} color={'#8a4f1c'} size={28} anchor="middle">each half joined to one side of the coil</Lbl>
			<Lbl x={RC8.cx - 270} y={RC8.cy - 180} at={0} color={ORANGE.ink} size={28}>+ supply</Lbl>
			<HandTag x={1720} y={300} text="gaps pass the brushes" at={ring} out={rev} size={32} color={'#8a4f1c'} anchor="end" />
			<HandTag x={1720} y={300} text="current flips" at={rev + 6} out={none} size={36} color={ORANGE.ink} anchor="end" />
			<HandTag x={110} y={180} text="torque keeps its sense" at={way + 6} out={every} size={36} color={AMBER.ink} />
			<HandTag x={1720} y={300} text="for a moment: I = 0, τ = 0" at={none} out={every} size={32} color={INK} anchor="end" />
			<HandTag x={110} y={180} text="split ring: reverses the current every half turn" at={turning} size={34} color={'#8a4f1c'} />
			<HandTag x={1720} y={660} text="already turning: it keeps going" at={going} out={every} size={32} color={AMBER.ink} anchor="end" />
		</>
	);
};

// ---------- 9. smoother motors ----------
const G9 = {x: 1020, y: 320, w: 760, h: 300, x0: 0, x1: 540, ymin: 0, ymax: 1.3};
const C9 = {cx: 470, cy: 560, R: 190};
export const S09: React.FC = () => {
	const id = 'smoother-motors';
	const f = useCurrentFrame();
	const pulses = cue(id, 'Its torque pulses'), stop = cue(id, "won't start by itself"), several = cue(id, 'several coils at different angles'), curved = cue(id, 'curved magnets around an iron core'), radial = cue(id, "That's called a radial field"), max = cap(id, cue(id, 'close to its maximum'));
	const spinA = 90 - f * 6;
	const a1 = f < stop ? spinA : kf(f, [[stop, ((spinA % 180) + 180) % 180], [stop + 30, 0]]);
	const a3 = 90 - Math.max(0, f - several) * 2;
	const aR = 90 - Math.max(0, f - curved) * 2;
	const phase = f < several ? 0 : f < curved ? 1 : 2;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<g opacity={1 - prog(f, several, 14)}>
					<Coil cx={C9.cx} cy={C9.cy} R={C9.R} alpha={a1} plusI={f >= stop + 30 ? 0 : (viaRing(a1) || 1) as 1 | -1} fieldW={360} rows={[-200, -100, 100, 200]} forces={f >= stop + 30 ? 0 : 1} forceLen={100} wireR={30} />
					<RingCloseUp cx={820} cy={870} r={66} alpha={a1} currentColor={ORANGE.stroke} ringColors={HALF} leads={false} />
				</g>
				<g opacity={prog(f, several, 14) * (1 - prog(f, curved, 14))}>
					{[0, 60, 120].map(d => { const gg = endOnGeom(C9.cx, C9.cy, C9.R, a3 + d); return <g key={d}>
						<line x1={gg.minus[0]} y1={gg.minus[1]} x2={gg.plus[0]} y2={gg.plus[1]} stroke={ORANGE.stroke} strokeWidth={8} />
						<EndOnWire cx={gg.plus[0]} cy={gg.plus[1]} r={24} dir="out" color={ORANGE.stroke} />
						<EndOnWire cx={gg.minus[0]} cy={gg.minus[1]} r={24} dir="in" color={ORANGE.stroke} />
					</g>; })}
					{[-200, -100, 100, 200].map(y => <Arrow2 key={y} from={[C9.cx - 360, C9.cy + y]} to={[C9.cx + 360, C9.cy + y]} color={FLUX} width={3.5} head={18} />)}
					<circle cx={C9.cx} cy={C9.cy} r={14} fill="#fffdf8" stroke={INK} strokeWidth={5} />
					<RingCloseUp cx={820} cy={870} r={66} alpha={a3} segments={6} currentColor={ORANGE.stroke} leads={false} />
				</g>
				<RadialView cx={C9.cx} cy={C9.cy} r={150} alpha={aR} opacity={prog(f, curved, 14)} />
				<TorqueGraph b={G9} fn={tauSplit} color={phase ? GREY.stroke : AMBER.stroke} dash={phase ? '10 8' : undefined} ticks={[[90, '½'], [270, '1½'], [450, '2½']]} xLabel="turns" />
				<TorqueGraph b={G9} fn={tauThree} grow={prog(f, several, 40)} axes={false} opacity={phase === 1 ? 1 : 0.6 * prog(f, several, 10)} />
				<TorqueGraph b={G9} fn={() => 1.0} grow={prog(f, curved + 20, 40)} axes={false} color={AMBER.stroke} />
				{f >= max ? <path d={`M${G9.x},${G9.y + G9.h - (1.08 / 1.3) * G9.h} L${G9.x + G9.w},${G9.y + G9.h - (1.08 / 1.3) * G9.h}`} stroke={AMBER.stroke} strokeWidth={5} strokeDasharray="4 8" opacity={prog(f, max, 10)} /> : null}
			</FrameSvg>
			<HandTag x={G9.x + 140} y={G9.y - 30} text="pulses" at={pulses} out={several} size={36} color={AMBER.ink} />
			<HandTag x={110} y={905} text="stopped at the dead point: τ = 0" at={stop + 20} out={several} size={36} color={INK} />
			<Chip x={G9.x} y={720} at={several} size={30} w={760}>three coils at 60° (six segments): humps overlap</Chip>
			<HandTag x={110} y={905} text="always edge on" at={curved + 30} size={38} color={FLUX} />
			<Chip x={G9.x} y={800} at={radial} size={30} w={760} color={AMBER.ink} border={AMBER.stroke}>radial field: θ stays near 90°</Chip>
			<HandTag x={G9.x + G9.w - 260} y={G9.y + 10} text="near τ max" at={max} size={34} color={AMBER.ink} />
		</>
	);
};

// ---------- 10. a way to remember ----------
const C10 = {cx: 480, cy: 540, R: 200};
export const S10: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const every = cue(id, 'Every half turn, flip the current'), flipA = cue(id, 'Flip the current, and the forces flip'), way = cap(id, cue(id, 'turning the same way'));
	const alpha = kf(f, [[0, 60], [every, 60], [every + 50, -60], [flipA, -60], [flipA + 50, -180]]);
	const plusI = viaRing(alpha);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Coil cx={C10.cx} cy={C10.cy} R={C10.R} alpha={alpha} plusI={(plusI || 1) as 1 | -1} fieldW={380} rows={[-260, -130, 130, 260]} forces={1} forceLen={110} plusTint={TINT[0]} minusTint={TINT[1]} />
				<TurnArrow cx={C10.cx} cy={C10.cy} r={110} cw color={AMBER.stroke} />
				<CardRect x={760} y={620} w={360} h={300} />
				<RingCloseUp cx={940} cy={770} r={80} alpha={alpha} current={1} currentColor={ORANGE.stroke} ringColors={HALF} />
			</FrameSvg>
			<div style={{position: 'absolute', left: 1180, top: 230, width: 640}}>
				<MemoryCard at={way} main={<>Every half turn, <span style={{color: ORANGE.ink}}>flip the current</span>.</>} sub={<>Face on, no torque. Edge on, full torque.</>} />
			</div>
			<HandTag x={110} y={905} text="half a turn: current flips" at={every + 10} size={36} color={ORANGE.ink} />
			<HandTag x={1190} y={180} text="forces flip, same turning" at={flipA + 10} out={way} size={36} color={AMBER.ink} />
			<Lbl x={C10.cx + 390} y={C10.cy - 290} at={0} color={FLUX} size={32}>B</Lbl>
		</>
	);
};
