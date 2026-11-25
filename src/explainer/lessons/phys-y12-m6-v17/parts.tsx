// Lesson parts for phys-y12-m6-v17: the motor bench (the painted hobby motor with its turning flywheel, the multimeter
// used as an ammeter with a coded readout, the knife switch and the lab power pack, coded leads whose current dots
// thin as the current falls), the equivalent circuit (supply, the coil's resistance and the back emf as a rose cell
// facing the supply; optional painted rheostat in series), the voltage-share bar, the current against speed line, the
// power bars, the load bench (pulley, hanger and slotted masses) and the handoff bench with the oscilloscope.
// Colour roles (design, Revision 2): supply current orange; back emf rose; magnetic field slate; forces and torques
// amber; supply voltage navy; power bars input orange, heat red, converted amber; kinetic energy green (what-if only);
// friction grey; answers in dark-ink frames; mistakes slate (root rule R1).
import React from 'react';
import {FONT_DISPLAY} from '../../kit';
import {CARD, INK, TONES} from '../../shared/tokens';
import {BLOCK, DMM, Display, KnifeSwitch, LVS, Plate, dmmPts, lvsPts, placeOf, switchPts} from '../../physics/electromagnetism/bench';
import type {Place} from '../../physics/electromagnetism/bench';
import {FlowDots} from '../../physics/electromagnetism/induction';
import {Lead} from '../../physics/electromagnetism/plates';
import {HEAT} from '../../physics/electromagnetism/transformer';
import {FnGraph, HANGER, HobbyMotor, MANCHOR, MOTOR_KIT_PLATES, PULLEY, RHEOSTAT, SLOTTED, Scope, hobbyPts} from '../../physics/electromagnetism/motor';
import type {FnBox} from '../../physics/electromagnetism/motor';
import {AMBER, CardRect, FLUX, Givens, Lbl, NAVY, ORANGE, ROSE, Ring, Shrunk, Strip, T, V16_PLATES, fx} from '../phys-y12-m6-v16/parts';
import {iAt} from './common';

export {AMBER, CardRect, FLUX, Givens, Lbl, NAVY, ORANGE, ROSE, Ring, Shrunk, Strip, T, fx, HEAT};
export const GREEN = TONES.green, GREY = TONES.grey;
export const V17_PLATES = [...V16_PLATES, ...MOTOR_KIT_PLATES, DMM.src, LVS.src, BLOCK.src, 'assets/physics/phys-y11-knife-switch-v1.png', 'assets/physics/phys-y11-knife-switch-blade-v1.png'];
type Pt = [number, number];
const svgText = (size: number, color: string, weight = 800): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: weight, fontSize: size, fill: color, paintOrder: 'stroke', stroke: CARD, strokeWidth: 7, strokeLinejoin: 'round'} as React.CSSProperties);
/** Flywheel angle (degrees) at frame f for a spin rate (degrees per frame) that is a function of frame. */
export const turned = (f: number, rate: (g: number) => number) => { let a = 0; for (let g = 1; g <= f; g++) a += rate(g); return a; };
/** Dot spacing (px) for a current: 6.0 A at 26 px, smaller currents more widely spaced. */
export const gapFor = (I: number) => Math.min(220, (26 * 6) / Math.max(0.3, I));

// ---------------------------------------------------------------- the motor bench (scenes 1, 10, 15)
export const B1 = {lvs: {x: 80, y: 600, w: 400} as Place, sw: {x: 540, y: 640, w: 300} as Place, dmm: {x: 880, y: 420, w: 230} as Place, motor: {x: 1260, y: 470, w: 430} as Place};
export const benchGeom = (b = B1) => {
	const l = lvsPts(b.lvs), s = switchPts(b.sw), d = dmmPts(b.dmm), m = hobbyPts(b.motor);
	const yA = 830, yB = 900;
	return {l, s, d, m,
		a: [l.pos, [l.pos[0], yA], [s.left[0], yA], s.left] as Pt[],
		b: [s.right, [s.right[0], yA], [d.amp[0], yA], d.amp] as Pt[],
		c: [d.com, [d.com[0], yA + 40], [m.tabHi[0] - 50, yA + 40], [m.tabHi[0] - 50, m.tabHi[1]], m.tabHi] as Pt[],
		d2: [m.tabLo, [m.tabLo[0] - 26, m.tabLo[1]], [m.tabLo[0] - 26, yB], [l.neg[0], yB], l.neg] as Pt[]};
};
/** The bench: supply, switch (open 0 to 1), multimeter with `reading`, hobby motor with the flywheel at `deg`. */
export const Bench: React.FC<{deg: number; open?: number; reading?: string; I?: number; dots?: number; phase?: number; parts?: readonly number[]; b?: typeof B1}> = ({deg, open = 0, reading = '0.0 A', I = 0, dots = 0, phase = 0, parts = [1, 1, 1, 1], b = B1}) => {
	const g = benchGeom(b);
	const loop = [...g.a, ...g.b, ...g.c];
	return (
		<g>
			<g opacity={parts[0]}><Plate spec={LVS} p={b.lvs} /></g>
			<g opacity={Math.min(parts[0], parts[1], parts[2])}>
				<Lead pts={g.a} width={5} color="#c0392b" /><Lead pts={g.b} width={5} color="#c0392b" /><Lead pts={g.c} width={5} color="#c0392b" /><Lead pts={g.d2} width={5} color={INK} />
				{dots > 0.001 && I > 0.01 ? <><FlowDots pts={loop} phase={phase} gap={gapFor(I)} r={7} color={ORANGE.stroke} opacity={dots} /><FlowDots pts={g.d2} phase={phase} gap={gapFor(I)} r={7} color={ORANGE.stroke} opacity={dots} /></> : null}
			</g>
			<g opacity={parts[1]}><KnifeSwitch p={b.sw} open={open} /></g>
			<g opacity={parts[2]}><Plate spec={DMM} p={b.dmm} /><Display box={g.d.display} text={reading} /></g>
			<g opacity={parts[3]}><HobbyMotor p={b.motor} deg={deg} /></g>
		</g>
	);
};

// ---------------------------------------------------------------- the equivalent circuit
export type EqBox = {x: number; y: number; w: number; h: number};
/** A vertical cell symbol centred at (x, y): long plate (+) on top when `upPlus`. */
const VCell: React.FC<{x: number; y: number; upPlus: boolean; color: string; size?: number}> = ({x, y, upPlus, color, size = 1}) => {
	const L = 44 * size, S = 24 * size, gap = 9 * size;
	const yl = upPlus ? y - gap : y + gap, ys = upPlus ? y + gap : y - gap;
	return (
		<g>
			<rect x={x - L - 6} y={y - gap - 8} width={2 * L + 12} height={2 * gap + 16} fill={CARD} />
			<line x1={x - L} y1={yl} x2={x + L} y2={yl} stroke={color} strokeWidth={5} />
			<line x1={x - S} y1={ys} x2={x + S} y2={ys} stroke={color} strokeWidth={11} />
		</g>
	);
};
/**
 * The loop: supply V on the left side (+ at the top), the coil's resistance R on the top side, the back emf cell on
 * the right side (`emf` 1 opposing, -1 helping, 0 drawn as a plain wire), dots clockwise spaced for current I. With
 * `rheo` the painted rheostat sits in the bottom side as the starting resistor, its slider pointer at `slide` (0 to 1).
 */
export const EqCircuit: React.FC<{b: EqBox; emf?: number; I?: number; phase?: number; dots?: number; labels?: boolean; vLabel?: string; rLabel?: string; eLabel?: string; rheo?: number; slide?: number; bypass?: number; size?: number; grey?: boolean}> = ({b, emf = 1, I = 0, phase = 0, dots = 1, labels = true, vLabel = 'V', rLabel = 'R', eLabel = 'ε_back', rheo = 0, slide = 1, bypass = 0, size = 34, grey = false}) => {
	const {x, y, w, h} = b;
	const loop: Pt[] = [[x, y + h], [x, y], [x + w, y], [x + w, y + h], [x, y + h]];
	const wireC = grey ? '#8a8378' : INK;
	const rp = rheoPlace(b);
	const rg = placeOf(RHEOSTAT, rp);
	const tL = rg.at(...MANCHOR.rheostat.tL), tR = rg.at(...MANCHOR.rheostat.tR);
	const r0 = rg.at(...MANCHOR.rheostat.rail0), r1 = rg.at(...MANCHOR.rheostat.rail1);
	const sp: Pt = [r0[0] + (r1[0] - r0[0]) * slide, r0[1] + (r1[1] - r0[1]) * slide];
	return (
		<g>
			{rheo > 0.001 ? <g>
				<polyline points={[[x + w, y + h], [x + w * 0.72, y + h], [tR[0], tR[1]]].map(p => p.join(',')).join(' ')} fill="none" stroke={wireC} strokeWidth={5} opacity={rheo} />
				<polyline points={[[x, y + h], [x + w * 0.18, y + h], [tL[0], tL[1]]].map(p => p.join(',')).join(' ')} fill="none" stroke={wireC} strokeWidth={5} opacity={rheo} />
				<g opacity={rheo}><Plate spec={RHEOSTAT} p={rp} /></g>
				<path d={`M${sp[0]},${sp[1] - 34} l-16,-26 l32,0 Z`} fill={NAVY.stroke} opacity={rheo} />
			</g> : null}
			<polyline points={(rheo > 0.001 ? [[x + w * 0.18, y + h], [x, y + h], [x, y], [x + w, y], [x + w, y + h], [x + w * 0.72, y + h]] : loop).map(p => p.join(',')).join(' ')} fill="none" stroke={wireC} strokeWidth={5} strokeLinejoin="round" />
			{rheo <= 0.001 ? null : <line x1={x + w * 0.18} y1={y + h} x2={x + w * 0.18 + (w * 0.54) * bypass} y2={y + h} stroke={INK} strokeWidth={6} />}
			<VCell x={x} y={y + h / 2} upPlus color={grey ? '#8a8378' : NAVY.stroke} />
			<rect x={x + w / 2 - 70} y={y - 22} width={140} height={44} fill={CARD} stroke={wireC} strokeWidth={5} />
			{emf !== 0 ? <VCell x={x + w} y={y + h / 2} upPlus={emf > 0} color={ROSE.stroke} /> : null}
			{dots > 0.001 && I > 0.01 ? <FlowDots pts={loop} phase={phase} gap={gapFor(I)} r={8} color={ORANGE.stroke} opacity={dots} /> : null}
			{labels ? <>
				<text x={x - 70} y={y + h / 2 + 12} textAnchor="end" style={svgText(size, NAVY.ink)}>{vLabel}</text>
				<text x={x + w / 2} y={y - 40} textAnchor="middle" style={svgText(size, INK)}>{rLabel}</text>
				{emf !== 0 ? <text x={x + w + 66} y={y + h / 2 + 12} style={svgText(size, ROSE.ink)}>{eLabel}</text> : null}
				<text x={x - 40} y={y + h / 2 - 22} textAnchor="end" style={svgText(26, NAVY.ink)}>+</text>
				{emf !== 0 ? <text x={x + w + 52} y={emf > 0 ? y + h / 2 - 22 : y + h / 2 + 44} style={svgText(26, ROSE.ink)}>+</text> : null}
			</> : null}
		</g>
	);
};
export const rheoPlace = (b: EqBox): Place => ({x: b.x + b.w * 0.2, y: b.y + b.h + 20, w: b.w * 0.5});
/** The voltage-share bar: total V (navy outline) split into the back emf (rose, top) and IR (orange, bottom). */
export const ShareBar: React.FC<{x: number; y: number; h: number; w?: number; total: number; back: number; labels?: boolean; values?: boolean; size?: number; opacity?: number; pulse?: number}> = ({x, y, h, w = 110, total, back, labels = true, values = true, size = 30, opacity = 1, pulse = 0}) => {
	if (opacity <= 0.001) return null;
	const eh = (h * Math.max(0, back)) / total, ih = h - eh;
	return (
		<g opacity={opacity}>
			<rect x={x} y={y} width={w} height={h} fill="#fffdf8" stroke={NAVY.stroke} strokeWidth={4} rx={6} />
			{eh > 0.5 ? <rect x={x + 4} y={y + 4} width={w - 8} height={Math.max(0, eh - 4)} fill={ROSE.stroke} rx={4} /> : null}
			<rect x={x + 4} y={y + eh} width={w - 8} height={Math.max(0, ih - 4)} fill={ORANGE.stroke} rx={4} stroke={pulse > 0 ? INK : 'none'} strokeWidth={4 * pulse} />
			{labels ? <>
				<text x={x + w + 18} y={y + eh / 2 + 10} style={svgText(size, ROSE.ink)}>{eh > 30 ? (values ? `ε_back = ${fx(back, back < 10 ? 1 : 0)} V` : 'ε_back') : ''}</text>
				<text x={x + w + 18} y={y + eh + ih / 2 + 10} style={svgText(size, ORANGE.ink)}>{values ? `IR = ${fx(total - back, total - back < 10 && Math.abs(total - back - Math.round(total - back)) > 0.01 ? 1 : 0)} V` : 'IR'}</text>
				<text x={x + w / 2} y={y - 16} textAnchor="middle" style={svgText(size, NAVY.ink)}>{values ? `V = ${fx(total, 0)} V` : 'V'}</text>
			</> : null}
		</g>
	);
};
/** Current against speed: the engine's current at each fraction of full speed, a straight falling line. */
export const IGraph: React.FC<{b: FnBox; grow?: number; k?: number; size?: number; opacity?: number; xLabel?: string}> = ({b, grow = 1, k, size = 30, opacity = 1, xLabel = 'speed ω'}) => (
	<FnGraph b={b} fn={iAt} grow={grow} cursor={k} color={ORANGE.stroke} xLabel={xLabel} yLabel="current I (A)" size={size} opacity={opacity} xTicks={[[0, '0'], [0.5, '½'], [1, 'full']]} />
);
/** y-axis tick labels for the current graph. */
export const ITicks: React.FC<{b: FnBox; ticks: readonly number[]; size?: number}> = ({b, ticks, size = 28}) => (
	<g>{ticks.map(t => { const yy = b.y + b.h - ((t - b.ymin) / (b.ymax - b.ymin)) * b.h; return <g key={t}><line x1={b.x - 10} y1={yy} x2={b.x} y2={yy} stroke={INK} strokeWidth={3} /><text x={b.x - 16} y={yy + 10} textAnchor="end" style={svgText(size, INK, 700)}>{t}</text></g>; })}</g>
);

// ---------------------------------------------------------------- power bars
/** A labelled vertical power bar from a base line. */
export const PBar: React.FC<{x: number; base: number; w?: number; h: number; color: string; label?: React.ReactNode; value?: React.ReactNode; size?: number; opacity?: number; dash?: boolean}> = ({x, base, w = 120, h, color, label, value, size = 30, opacity = 1, dash = false}) => {
	if (opacity <= 0.001) return null;
	return (
		<g opacity={opacity}>
			<rect x={x} y={base - h} width={w} height={h} fill={dash ? 'none' : color} stroke={dash ? color : 'none'} strokeWidth={4} strokeDasharray={dash ? '10 8' : undefined} rx={6} />
			{value !== undefined ? <text x={x + w / 2} y={base - h - 14} textAnchor="middle" style={svgText(size, color === ORANGE.stroke ? ORANGE.ink : color === AMBER.stroke ? AMBER.ink : color)}>{value}</text> : null}
			{label !== undefined ? <text x={x + w / 2} y={base + size + 10} textAnchor="middle" style={svgText(size - 2, INK, 700)}>{label}</text> : null}
		</g>
	);
};

// ---------------------------------------------------------------- the load bench (scenes 6, 13, 14)
export const LB = {motor: {x: 150, y: 330, w: 420} as Place, pulley: {x: 860, y: 300, w: 420} as Place};
export const loadGeom = (lb = LB) => {
	const m = hobbyPts(lb.motor);
	const pg = placeOf(PULLEY, lb.pulley);
	const wheel = pg.at(945, 375), wr = 150 * pg.s;
	const hookX = wheel[0] + wr;
	return {m, wheel, wr, hookX, hub: [m.fly[0], m.fly[1] - 18] as Pt};
};
/** The motor lifting a load: string from the flywheel's hub over the pulley to the hanger (or the heavier stack). */
export const LoadBench: React.FC<{deg: number; heavy?: number; drop?: number; lb?: typeof LB; hangY?: number; scale?: number}> = ({deg, heavy = 0, drop = 0, lb = LB, hangY = 0}) => {
	const g = loadGeom(lb);
	const hy = g.wheel[1] + 150 + hangY;
	const hs = 300 / (HANGER.box[3] - HANGER.box[1]);
	const hp: Place = {x: g.hookX - (300 - HANGER.box[0]) * hs, y: hy, w: (HANGER.box[2] - HANGER.box[0]) * hs};
	const ss = 300 / (SLOTTED.box[3] - SLOTTED.box[1]);
	const sp: Place = {x: g.hookX - (500 - SLOTTED.box[0]) * ss, y: hy - 30 * (1 - drop), w: (SLOTTED.box[2] - SLOTTED.box[0]) * ss};
	return (
		<g>
			<line x1={g.hub[0]} y1={g.hub[1]} x2={g.wheel[0]} y2={g.wheel[1] - g.wr} stroke={INK} strokeWidth={3} />
			<line x1={g.hookX} y1={g.wheel[1]} x2={g.hookX} y2={hy + 8} stroke={INK} strokeWidth={3} />
			<Plate spec={PULLEY} p={lb.pulley} />
			<g opacity={1 - heavy}><Plate spec={HANGER} p={hp} /></g>
			<g opacity={heavy}><Plate spec={SLOTTED} p={sp} /></g>
			<HobbyMotor p={lb.motor} deg={deg} />
		</g>
	);
};
/** A torque arrow round the flywheel: an arc of `len` degrees (sign: direction). */
export const TorqueArc: React.FC<{c: Pt; r: number; len: number; color: string; start?: number; width?: number; opacity?: number; dash?: string}> = ({c, r, len, color, start = 90, width = 9, opacity = 1, dash}) => {
	if (opacity <= 0.001 || Math.abs(len) < 2) return null;
	const pts: Pt[] = Array.from({length: 25}, (_, i) => { const a = ((start + (len * i) / 24) * Math.PI) / 180; return [c[0] + r * Math.cos(a), c[1] - r * Math.sin(a)]; });
	const e = pts[pts.length - 1], p = pts[pts.length - 3];
	const ang = Math.atan2(e[1] - p[1], e[0] - p[0]);
	return (
		<g opacity={opacity}>
			<path d={pts.map((q, i) => `${i ? 'L' : 'M'}${q[0].toFixed(1)},${q[1].toFixed(1)}`).join(' ')} fill="none" stroke={color} strokeWidth={width} strokeDasharray={dash} />
			<path d={`M${e[0] + 24 * Math.cos(ang)},${e[1] + 24 * Math.sin(ang)} L${e[0] + 18 * Math.cos(ang + 2.2)},${e[1] + 18 * Math.sin(ang + 2.2)} L${e[0] + 18 * Math.cos(ang - 2.2)},${e[1] + 18 * Math.sin(ang - 2.2)} Z`} fill={color} />
		</g>
	);
};
/** The painted wooden block jammed against the flywheel's rim (uniform scale, turned). */
export const JamBlock: React.FC<{c: Pt; r: number; slide?: number; w?: number}> = ({c, r, slide = 1, w = 230}) => {
	const h = (w * (BLOCK.box[3] - BLOCK.box[1])) / (BLOCK.box[2] - BLOCK.box[0]);
	const tx = c[0] + r * 0.72 + 30 * (1 - slide) * 4, ty = c[1] + r * 0.72 + 30 * (1 - slide) * 4;
	return <g opacity={slide}><Plate spec={BLOCK} p={{x: tx - 10, y: ty - h / 2, w}} rotate={{deg: 40, px: tx, py: ty}} /></g>;
};
/** The oscilloscope plate placed for the handoff, with a flat trace and a "?". */
export const SCOPE_AT: Place = {x: 1100, y: 330, w: 700};
export const ScopeFlat: React.FC<{q?: number; opacity?: number; dx?: number}> = ({q = 1, opacity = 1, dx = 0}) => <Scope p={{...SCOPE_AT, x: SCOPE_AT.x + dx}} fn={() => 0} q={q} opacity={opacity} />;
export const flyGlow = (p: Place) => { const h = hobbyPts(p); return {cx: (h.tabHi[0] + h.root[0]) / 2, cy: (h.tabHi[1] + h.root[1]) / 2 + 20, rx: (h.root[0] - h.tabHi[0]) * 0.5, ry: h.h * 0.36}; };
