// Lesson parts for phys-y12-m6-v19: the four-pole stator ring and the end-on cage rotor of the induction-motor kit in
// this lesson's colours, the turning angles (one field clock; the rotor's angle integrates its speed), an outline
// motion arrow, a big grey speed readout, the question-card sketch, and v18's parts re-exported.
// Colour roles (design, Revision 2): stator field slate (pole markers, dashed field arrow, field lines); induced rotor
// emf and current rose; supply current in the stator coils orange; forces and torque amber; load arrow amber outline;
// speed readouts grey at full ink; slip amber; answers in dark-ink frames; mistakes slate (root rule R1).
import React from 'react';
import {INK} from '../../shared/tokens';
import {BOSS, STAND} from '../../physics/electromagnetism/bench';
import {Arrow2} from '../../physics/electromagnetism/magnetic';
import {ArcArrow, CageRotor, FourPoleRing} from '../../physics/electromagnetism/induction-motor';
import type {RingMode} from '../../physics/electromagnetism/induction-motor';
import {EDDY_PLATES} from '../../physics/electromagnetism/eddy';
import {turned} from '../phys-y12-m6-v17/parts';
import {AMBER, CAGE_ROTOR, COPPER_INK, CardRect, FLUX, GREY, Gen, Lbl, NAVY, ORANGE, ROSE, Ring, Shrunk, Strip, V18_PLATES, fx} from '../phys-y12-m6-v18/parts';

export {AMBER, CAGE_ROTOR, COPPER_INK, CardRect, FLUX, GREY, Gen, Lbl, NAVY, ORANGE, ROSE, Ring, Shrunk, Strip, fx, turned};
export const V19_PLATES = [...V18_PLATES, ...EDDY_PLATES, STAND.src, BOSS.src, 'assets/physics/phys-y11-bar-magnet-v1.png', 'assets/physics/phys-y11-solenoid-coil-v1.png'];
type Pt = [number, number];

/** The four-pole stator ring in this lesson's colours. */
export const Stator: React.FC<{cx: number; cy: number; r: number; phi: number; mode?: RingMode; single?: number; glow?: number; groupO?: readonly number[]; poles?: number; arrow?: number; labels?: number; opacity?: number}> = p => (
	<FourPoleRing {...p} poleColor={FLUX} litColor={ORANGE.stroke} />
);
/** The end-on cage rotor in this lesson's colours. */
export const Rotor: React.FC<{cx: number; cy: number; r: number; rho: number; phi: number; lines?: number; currents?: number; forces?: number; outline?: boolean; opacity?: number; loop?: readonly [number, number]; loopO?: number; mark?: number}> = p => (
	<CageRotor {...p} lineColor={FLUX} currentColor={ROSE.stroke} forceColor={AMBER.stroke} markColor={NAVY.stroke} loopColor={ROSE.stroke} />
);
/** The dashed field arrow from the centre to the first N pole. */
export const FieldArrow: React.FC<{cx: number; cy: number; r: number; phi: number; opacity?: number}> = ({cx, cy, r, phi, opacity = 1}) => {
	const L = r * 0.74 - 34 * (r / 250);
	const a = (phi * Math.PI) / 180;
	return <Arrow2 from={[cx, cy]} to={[cx + L * Math.cos(a), cy - L * Math.sin(a)]} color={FLUX} width={7} head={26} dash="20 12" opacity={opacity} />;
};
/** A motor (ring + rotor) drawn together, the field arrow on top. */
export const Motor: React.FC<{cx: number; cy: number; r: number; phi: number; rho: number; lines?: number; currents?: number; forces?: number; poles?: number; arrow?: number; glow?: number; rotorR?: number; opacity?: number}> = ({cx, cy, r, phi, rho, lines = 0, currents = 0, forces = 0, poles = 1, arrow = 1, glow = 0, rotorR, opacity = 1}) => (
	<g opacity={opacity}>
		<Stator cx={cx} cy={cy} r={r} phi={phi} poles={poles} arrow={0} glow={glow} />
		<Rotor cx={cx} cy={cy} r={rotorR ?? r * 0.6} rho={rho} phi={phi} lines={lines} currents={currents} forces={forces} />
		<FieldArrow cx={cx} cy={cy} r={r} phi={phi} opacity={arrow} />
	</g>
);
/** Torque (amber, forward) and load (amber outline, backward) arcs round a rotor. */
export const Torque: React.FC<{cx: number; cy: number; r: number; at: number; size?: number; opacity?: number}> = ({cx, cy, r, at, size = 1, opacity = 1}) => (
	<ArcArrow cx={cx} cy={cy} r={r} a0={at} a1={at + 50 * size} color={AMBER.stroke} width={8 + 3 * size} head={22 + 6 * size} opacity={opacity} />
);
export const Load: React.FC<{cx: number; cy: number; r: number; at: number; size?: number; opacity?: number}> = ({cx, cy, r, at, size = 1, opacity = 1}) => (
	<ArcArrow cx={cx} cy={cy} r={r} a0={at} a1={at - 50 * size} color={AMBER.stroke} width={6 + 3 * size} head={22 + 6 * size} outline opacity={opacity} />
);
/** An amber outline straight arrow (motion). */
export const MoveArrow: React.FC<{from: Pt; to: Pt; opacity?: number; color?: string; w?: number}> = ({from, to, opacity = 1, color = AMBER.stroke, w = 14}) => {
	if (opacity <= 0.001) return null;
	const L = Math.hypot(to[0] - from[0], to[1] - from[1]);
	if (L < 4) return null;
	const u: Pt = [(to[0] - from[0]) / L, (to[1] - from[1]) / L], n: Pt = [-u[1], u[0]];
	const hl = Math.min(L * 0.45, w * 3), hw = w * 1.6;
	const b: Pt = [to[0] - u[0] * hl, to[1] - u[1] * hl];
	const q = (p: Pt, k: number): string => `${(p[0] + n[0] * k).toFixed(1)},${(p[1] + n[1] * k).toFixed(1)}`;
	const d = `M${q(from, w / 2)} L${q(b, w / 2)} L${q(b, hw)} L${to[0]},${to[1]} L${q(b, -hw)} L${q(b, -w / 2)} L${q(from, -w / 2)} Z`;
	return <path d={d} fill="#fffdf8" stroke={color} strokeWidth={5} strokeLinejoin="round" opacity={opacity} />;
};
/** A grey speed readout: small label over a big value (full ink). */
export const Readout: React.FC<{x: number; y: number; label: string; value: React.ReactNode; at: number; out?: number; size?: number; color?: string}> = ({x, y, label, value, at, out, size = 52, color = GREY.ink}) => (
	<>
		<Lbl x={x} y={y} at={at} out={out} color={color} size={30}>{label}</Lbl>
		<Lbl x={x} y={y + size * 1.05} at={at} out={out} color={color} size={size}>{value}</Lbl>
	</>
);
/** The attempt picture: the ring, the end-on rotor and an amber outline load arrow on the shaft (nothing else). */
export const MotorSketch: React.FC<{load?: number; phi?: number; rho?: number; currents?: number; forces?: number; w?: number; h?: number}> = ({load = 1, phi = 60, rho = 40, currents = 0, forces = 0, w = 678, h = 560}) => (
	<svg width={w} height={h} style={{overflow: 'visible'}}>
		<rect x={10} y={20} width={w - 28} height={h - 40} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
		<Stator cx={w / 2} cy={h / 2 + 4} r={190} phi={phi} arrow={1} />
		<Rotor cx={w / 2} cy={h / 2 + 4} r={118} rho={rho} phi={phi} currents={currents} forces={forces} />
		<Load cx={w / 2} cy={h / 2 + 4} r={52} at={110} size={load} />
		<text x={w / 2} y={h - 34} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30, fill: AMBER.ink}}>load</text>
	</svg>
);
export const INK_ = INK;
