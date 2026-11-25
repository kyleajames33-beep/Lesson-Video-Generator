// Lesson parts for phys-y12-m6-v16: the lab bench of last time's final frame (power pack, leads and the painted DC
// motor model), the coded three-quarter motor on the same spot (kit `MotorModel`, with or without its split ring), the
// end-on coil with forces, normal and lever arms (kit `EndOnCoil`), the ring close-up (kit `RingCloseUp`), the torque
// graph (kit `FnGraph`), a small three-quarter inset of the end sides, the radial-field view and the handoff board with
// the coded ammeter (kit `NeedleMeter`); v15's parts re-exported.
// Colour roles (design, Revision 2): magnetic field slate lines; current orange (dots and crosses orange); force amber;
// area normal and theta arcs navy; lever arm r ink dashed; torque graph amber; rotation arrows amber outline; brushes
// grey; split ring copper; answers in dark-ink frames; mistakes slate (root rule R1).
import React from 'react';
import {FONT_DISPLAY} from '../../kit';
import {CARD, INK, TONES} from '../../shared/tokens';
import {Plate} from '../../physics/electromagnetism/bench';
import type {Place} from '../../physics/electromagnetism/bench';
import {FlowDots} from '../../physics/electromagnetism/induction';
import {Arrow2} from '../../physics/electromagnetism/magnetic';
import {Lead} from '../../physics/electromagnetism/plates';
import {ANCHOR, DC_MOTOR, LVS_PLATE, POWER_POINT, anchorAt} from '../../physics/electromagnetism/transformer';
import {COPPER_RING, EndOnCoil, FnGraph, ModelSpin, MotorModel, NeedleMeter, m3, modelGeom} from '../../physics/electromagnetism/motor';
import type {EndOnProps, FnBox, MCam} from '../../physics/electromagnetism/motor';
import {AMBER, CardRect, FLUX, Givens, Lbl, NAVY, ORANGE, ROSE, Ring, Shrunk, Strip, T, fx} from '../phys-y12-m6-v15/parts';
import {sci} from '../phys-y12-m6-v01/parts';

export {AMBER, CardRect, FLUX, Givens, Lbl, NAVY, ORANGE, ROSE, Ring, Shrunk, Strip, T, fx, sci};
export const V16_PLATES = [DC_MOTOR, LVS_PLATE, POWER_POINT].map(s => s.src);
export const GREY = TONES.grey, VIOLET = TONES.violet;
export const COPPER = COPPER_RING;
type Pt = [number, number];
const svgText = (size: number, color: string, weight = 800): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: weight, fontSize: size, fill: color, paintOrder: 'stroke', stroke: CARD, strokeWidth: 7, strokeLinejoin: 'round'} as React.CSSProperties);

/** The kit end-on coil with this lesson's colour roles. */
export const Coil: React.FC<Omit<EndOnProps, 'fieldColor' | 'coilColor' | 'forceColor' | 'normalColor'>> = p => <EndOnCoil fieldColor={FLUX} coilColor={ORANGE.stroke} forceColor={AMBER.stroke} normalColor={NAVY.stroke} {...p} />;
/** The kit three-quarter model with this lesson's colour roles. */
export const Model: React.FC<{c: MCam; alpha: number; ringO?: number; directLeads?: number; opacity?: number}> = ({c, alpha, ringO = 1, directLeads = 0, opacity = 1}) => <MotorModel c={c} alpha={alpha} ring="split" ringO={ringO} directLeads={directLeads} fieldColor={FLUX} coilColor={ORANGE.stroke} opacity={opacity} />;

// ---------------------------------------------------------------- last time's lab bench (v15's final frame)
export const LV: Place = {x: 500, y: 470, w: 440};
export const PP: Place = {x: 60, y: 430, w: 330};
export const MO: Place = {x: 1140, y: 300, w: 660};
export const MOTOR = {ring: anchorAt(DC_MOTOR, MO, ANCHOR.motor.ring), coil: anchorAt(DC_MOTOR, MO, ANCHOR.motor.coil), tL: anchorAt(DC_MOTOR, MO, ANCHOR.motor.termL), tR: anchorAt(DC_MOTOR, MO, ANCHOR.motor.termR)};
export const LVP = {pos: anchorAt(LVS_PLATE, LV, ANCHOR.lvs.pos), neg: anchorAt(LVS_PLATE, LV, ANCHOR.lvs.neg), inlet: anchorAt(LVS_PLATE, LV, ANCHOR.lvs.inlet)};
/** The spin arrow round the painted motor's axle (as last time). */
export const PlateSpin: React.FC<{t: number; opacity?: number}> = ({t, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const [x, y] = MOTOR.coil, rx = 200, ry = 46;
	return (
		<g opacity={opacity}>
			<ellipse cx={x} cy={y} rx={rx} ry={ry} fill="none" stroke={AMBER.stroke} strokeWidth={7} strokeDasharray="70 30" strokeDashoffset={-t * 6} />
			<path d={`M${x + rx - 16},${y - 22} L${x + rx + 14},${y + 2} L${x + rx - 22},${y + 14} Z`} fill={AMBER.stroke} />
		</g>
	);
};
/** The coded model on the plate's spot (same size as the painted motor). */
export const HOOK_CAM: MCam = {cx: 1470, cy: 470, k: 118};
/** Leads from the pack's terminals to two points (red to the first). */
export const PackLeads: React.FC<{a: Pt; b: Pt; drop?: number; dots?: number; phase?: number; gap?: number; opacity?: number}> = ({a, b, drop = 150, dots = 0, phase = 0, gap = 40, opacity = 1}) => {
	const red: Pt[] = [LVP.pos, [LVP.pos[0], LVP.pos[1] + drop], [a[0], LVP.pos[1] + drop], a];
	const blk: Pt[] = [LVP.neg, [LVP.neg[0], LVP.neg[1] + drop - 30], [b[0], LVP.neg[1] + drop - 30], b];
	return (
		<g opacity={opacity}>
			<Lead pts={red} width={5} color="#c0392b" />
			<Lead pts={blk} width={5} color={INK} />
			{dots > 0.001 ? <><FlowDots pts={red} phase={phase} gap={gap} r={7} color={ORANGE.stroke} opacity={dots} /><FlowDots pts={[...blk].reverse()} phase={phase} gap={gap} r={7} color={ORANGE.stroke} opacity={dots} /></> : null}
		</g>
	);
};
export const LabPack: React.FC<{opacity?: number}> = ({opacity = 1}) => <Plate spec={LVS_PLATE} p={LV} opacity={opacity} />;
export const PowerPoint: React.FC<{opacity?: number}> = ({opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const cord = anchorAt(POWER_POINT, PP, ANCHOR.powerPointCord);
	return <g opacity={opacity}><Lead pts={[cord, [cord[0] + 30, cord[1]], [cord[0] + 30, LVP.inlet[1]], LVP.inlet]} width={5} /><Plate spec={POWER_POINT} p={PP} /></g>;
};

// ---------------------------------------------------------------- torque against angle turned
/** tau / tau_max against the angle turned (degrees from edge on): fixed current (cos) or with a split ring (|cos|). */
export const tauFixed = (phi: number) => Math.cos((phi * Math.PI) / 180);
export const tauSplit = (phi: number) => Math.abs(Math.cos((phi * Math.PI) / 180));
/** Three coils at 60 degrees with a six-segment commutator: the sum of three shifted humps, scaled to the single peak. */
export const tauThree = (phi: number) => {
	const s = [0, 60, 120].reduce((a, d) => a + Math.abs(Math.cos(((phi + d) * Math.PI) / 180)), 0);
	return s / 2;
};
export const TorqueGraph: React.FC<{b: FnBox; fn: (u: number) => number; grow?: number; cursor?: number; xLabel?: React.ReactNode; yLabel?: React.ReactNode; ticks?: readonly (readonly [number, string])[]; size?: number; opacity?: number; color?: string; dash?: string; axes?: boolean}> = ({b, fn, grow = 1, cursor, xLabel = 'angle turned', yLabel = 'τ', ticks = [], size = 30, opacity = 1, color = AMBER.stroke, dash, axes = true}) => (
	<FnGraph b={b} fn={fn} grow={grow} cursor={cursor} color={color} xLabel={xLabel} yLabel={yLabel} xTicks={ticks} size={size} opacity={opacity} dash={dash} axes={axes} />
);

// ---------------------------------------------------------------- three-quarter inset of the end sides (scene 3)
/** A small rectangular coil in three-quarter view, edge on, with the two short end sides marked and their forces. */
export const EndSidesInset: React.FC<{x: number; y: number; k?: number; arrows?: number; opacity?: number}> = ({x, y, k = 70, arrows = 1, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const c: MCam = {cx: x, cy: y, k};
	const q = (p: readonly [number, number, number]) => m3(c, p);
	const A = q([-1, 0, -1.3]), B = q([1, 0, -1.3]), C = q([1, 0, 1.3]), D = q([-1, 0, 1.3]);
	const end1: [Pt, Pt] = [A, B], end2: [Pt, Pt] = [D, C];
	const mid = (s: [Pt, Pt]): Pt => [(s[0][0] + s[1][0]) / 2, (s[0][1] + s[1][1]) / 2];
	const m1 = mid(end1), m2 = mid(end2);
	const dz = (sgn: number): Pt => { const a = q([0, 0, 0]), b = q([0, 0, sgn * 0.9]); return [b[0] - a[0], b[1] - a[1]]; };
	return (
		<g opacity={opacity}>
			<CardRect x={x - 190} y={y - 170} w={380} h={300} />
			<line x1={q([0, 0, -2])[0]} y1={q([0, 0, -2])[1]} x2={q([0, 0, 2])[0]} y2={q([0, 0, 2])[1]} stroke="#6f6a62" strokeWidth={8} strokeLinecap="round" />
			<polygon points={[A, B, C, D].map(p => p.join(',')).join(' ')} fill="none" stroke={ORANGE.stroke} strokeWidth={7} strokeLinejoin="round" />
			<line x1={end1[0][0]} y1={end1[0][1]} x2={end1[1][0]} y2={end1[1][1]} stroke={ORANGE.stroke} strokeWidth={14} strokeLinecap="round" opacity={0.5} />
			<line x1={end2[0][0]} y1={end2[0][1]} x2={end2[1][0]} y2={end2[1][1]} stroke={ORANGE.stroke} strokeWidth={14} strokeLinecap="round" opacity={0.5} />
			<g opacity={arrows}>
				<Arrow2 from={m1} to={[m1[0] + dz(-1)[0], m1[1] + dz(-1)[1]]} color={AMBER.stroke} width={7} head={20} />
				<Arrow2 from={m2} to={[m2[0] + dz(1)[0], m2[1] + dz(1)[1]]} color={AMBER.stroke} width={7} head={20} />
			</g>
			<text x={x} y={y + 112} textAnchor="middle" style={svgText(28, INK, 700)}>end sides (short)</text>
		</g>
	);
};

// ---------------------------------------------------------------- the radial field view (scene 9)
/** Curved pole pieces round an iron cylinder: radial field lines in the gap and the coil's sides on the cylinder. */
export const RadialView: React.FC<{cx: number; cy: number; r: number; alpha: number; opacity?: number}> = ({cx, cy, r, alpha, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const gap = 70, R2 = r + gap;
	const pole = (a0: number, a1: number, fill: string, label: string, lx: number) => {
		const p = (a: number, rr: number): Pt => [cx + rr * Math.cos((a * Math.PI) / 180), cy - rr * Math.sin((a * Math.PI) / 180)];
		const o1 = p(a0, R2), o2 = p(a1, R2), b1 = p(a1, R2 + 90), b2 = p(a0, R2 + 90);
		return <g><path d={`M${o1[0]},${o1[1]} A${R2},${R2} 0 0 ${a1 > a0 ? 0 : 1} ${o2[0]},${o2[1]} L${b1[0]},${b1[1]} A${R2 + 90},${R2 + 90} 0 0 ${a1 > a0 ? 1 : 0} ${b2[0]},${b2[1]} Z`} fill={fill} stroke={INK} strokeWidth={4} /><text x={lx} y={cy + 18} textAnchor="middle" style={svgText(48, INK)}>{label}</text></g>;
	};
	const radials = [-50, -25, 0, 25, 50].flatMap(a => [a, 180 + a]);
	const u: Pt = [-Math.sin((alpha * Math.PI) / 180), Math.cos((alpha * Math.PI) / 180)];
	return (
		<g opacity={opacity}>
			{pole(130, 230, '#e9e4da', 'N', cx - R2 - 45)}
			{pole(-50, 50, '#e9e4da', 'S', cx + R2 + 45)}
			<circle cx={cx} cy={cy} r={r} fill="#d9d4cb" stroke={INK} strokeWidth={4} />
			<text x={cx} y={cy + r * 0.55} textAnchor="middle" style={svgText(26, INK, 700)}>iron core</text>
			{radials.map(a => { const t = (a * Math.PI) / 180, s: Pt = a > 90 ? [cx + R2 * Math.cos(t), cy - R2 * Math.sin(t)] : [cx + r * Math.cos(t), cy - r * Math.sin(t)], e: Pt = a > 90 ? [cx + r * Math.cos(t), cy - r * Math.sin(t)] : [cx + R2 * Math.cos(t), cy - R2 * Math.sin(t)]; return <Arrow2 key={a} from={s} to={e} color={FLUX} width={3} head={14} />; })}
			<line x1={cx - r * u[0]} y1={cy + r * u[1]} x2={cx + r * u[0]} y2={cy - r * u[1]} stroke={ORANGE.stroke} strokeWidth={6} opacity={0.7} />
			<circle cx={cx + (r + gap / 2) * u[0]} cy={cy - (r + gap / 2) * u[1]} r={20} fill="#f6dcc0" stroke={ORANGE.stroke} strokeWidth={4} />
			<circle cx={cx - (r + gap / 2) * u[0]} cy={cy + (r + gap / 2) * u[1]} r={20} fill="#f6dcc0" stroke={ORANGE.stroke} strokeWidth={4} />
		</g>
	);
};

// ---------------------------------------------------------------- the handoff board (final frame)
export const HO_CAM: MCam = {cx: 1440, cy: 470, k: 118};
export const HP: Place = {x: 110, y: 400, w: 460};
export const HPP = {pos: anchorAt(LVS_PLATE, HP, ANCHOR.lvs.pos), neg: anchorAt(LVS_PLATE, HP, ANCHOR.lvs.neg)};
export const METER = {x: 820, y: 760, r: 95};
/** Supply, the coded ammeter in the red lead and the three-quarter motor. Values 0 to 1 of the meter's scale. */
export const HandoffLayout: React.FC<{alpha: number; t: number; meter: number; ghost?: number; meterO?: number; dots?: number; gap?: number; spinO?: number}> = ({alpha, t, meter, ghost, meterO = 1, dots = 1, gap = 34, spinO = 1}) => {
	const g = modelGeom(HO_CAM, alpha, 'split');
	const {x: mx, y: my, r: mr} = METER;
	const red: Pt[] = [HPP.pos, [HPP.pos[0], my], [mx - mr, my]];
	const red2: Pt[] = [[mx + mr, my], [g.leadL[0], my], g.leadL, g.br.L];
	const blk: Pt[] = [g.br.R, g.leadR, [g.leadR[0], 900], [HPP.neg[0] + 40, 900], [HPP.neg[0] + 40, HPP.neg[1] + 40], [HPP.neg[0], HPP.neg[1] + 40], HPP.neg];
	return (
		<g>
			<Plate spec={LVS_PLATE} p={HP} />
			<Lead pts={red} width={5} color="#c0392b" />
			<Lead pts={meterO > 0.5 ? red2 : [[mx - mr, my], ...red2]} width={5} color="#c0392b" />
			<Lead pts={blk} width={5} color={INK} />
			{dots > 0.001 ? <><FlowDots pts={[...red, ...red2]} phase={t * 3} gap={gap} r={7} color={ORANGE.stroke} opacity={dots} /><FlowDots pts={blk} phase={t * 3} gap={gap} r={7} color={ORANGE.stroke} opacity={dots} /></> : null}
			<NeedleMeter cx={mx} cy={my} r={mr} value={meter} ghost={ghost} opacity={meterO} />
			<Model c={HO_CAM} alpha={alpha} />
			<ModelSpin c={HO_CAM} t={t} color={AMBER.stroke} opacity={spinO} />
		</g>
	);
};
