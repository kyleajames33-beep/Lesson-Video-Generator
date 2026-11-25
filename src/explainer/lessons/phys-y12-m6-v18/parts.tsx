// Lesson parts for phys-y12-m6-v18: the generator stage (the kit's three-quarter model with slip rings or a split ring,
// the navy area normal fixed to the coil and side "a" marked), its leads to the painted lamp holder and the
// oscilloscope (kit `Scope` with a sine or rectified-sine trace), the flux loop of the flux video (kit `LoopInField`) for
// the flux stage, the linked flux and emf graphs (kit `FnGraph`), and v17's parts re-exported.
// Colour roles (design, Revision 2): magnetic field slate; area normal navy; induced emf and its graph rose; flux graph
// slate; current orange; force and torque amber; outside-drive arrows amber outline; side "a" orange outline;
// slip-ring parts grey, split-ring halves copper; answers in dark-ink frames; mistakes slate (root rule R1).
import React from 'react';
import {INK} from '../../shared/tokens';
import {Plate, placeOf} from '../../physics/electromagnetism/bench';
import type {Place} from '../../physics/electromagnetism/bench';
import {FlowDots} from '../../physics/electromagnetism/induction';
import {Lead} from '../../physics/electromagnetism/plates';
import {LoopInField} from '../../physics/electromagnetism/flux';
import type {FluxCam} from '../../physics/electromagnetism/flux';
import {CAGE_ROTOR, LAMP_HOLDER, MANCHOR, ModelSpin, MotorModel, STATION_V1, modelGeom, scopeScreen} from '../../physics/electromagnetism/motor';
import type {MCam} from '../../physics/electromagnetism/motor';
import {AMBER, CardRect, FLUX, GREY, Lbl, NAVY, ORANGE, ROSE, Ring, Shrunk, Strip, T, V17_PLATES, fx} from '../phys-y12-m6-v17/parts';

export {AMBER, CardRect, FLUX, GREY, Lbl, NAVY, ORANGE, ROSE, Ring, Shrunk, Strip, T, fx};
export const V18_PLATES = [...V17_PLATES, STATION_V1.src, CAGE_ROTOR.src, LAMP_HOLDER.src];
export const COPPER_INK = '#8a4f1c';
type Pt = [number, number];

/** The generator model with this lesson's colour roles. */
export const Gen: React.FC<{c: MCam; alpha: number; ring: 'split' | 'slip' | 'none'; ringO?: number; normal?: number; markA?: number; opacity?: number; drive?: number; t?: number}> = ({c, alpha, ring, ringO = 1, normal = 0, markA = 0, opacity = 1, drive = 0, t = 0}) => (
	<g opacity={opacity}>
		<MotorModel c={c} alpha={alpha} ring={ring} ringO={ringO} fieldColor={FLUX} coilColor={ORANGE.stroke} normalColor={NAVY.stroke} normal={normal} markA={markA} />
		<ModelSpin c={c} t={t} sense={1} color={AMBER.stroke} opacity={drive} />
	</g>
);
/** Leads from the model's brushes to two points (orange dots moving `dir` +1 or -1, spaced `gap`). */
export const GenLeads: React.FC<{c: MCam; alpha: number; ring: 'split' | 'slip'; a: Pt; b: Pt; yRun?: number; dots?: number; dir?: number; phase?: number; opacity?: number}> = ({c, alpha, ring, a, b, yRun, dots = 0, dir = 1, phase = 0, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const g = modelGeom(c, alpha, ring);
	const y = yRun ?? Math.max(g.leadL[1], g.leadR[1]) + 40;
	const la: Pt[] = [g.br.L, g.leadL, [g.leadL[0], y + 30], [a[0], y + 30], a];
	const lb: Pt[] = [g.br.R, g.leadR, [g.leadR[0], y], [b[0], y], b];
	const path = dir >= 0 ? [...la].reverse() : la;
	return (
		<g opacity={opacity}>
			<Lead pts={la} width={5} color="#c0392b" />
			<Lead pts={lb} width={5} color={INK} />
			{dots > 0.001 ? <><FlowDots pts={path} phase={phase} gap={44} r={7} color={ORANGE.stroke} opacity={dots} /><FlowDots pts={dir >= 0 ? lb : [...lb].reverse()} phase={phase} gap={44} r={7} color={ORANGE.stroke} opacity={dots} /></> : null}
		</g>
	);
};
/** The painted lamp holder; `glow` 0 to 1 lights the bulb. Returns its terminals. */
export const lampPts = (p: Place) => { const g = placeOf(LAMP_HOLDER, p); return {tL: g.at(...MANCHOR.lamp.tL), tR: g.at(...MANCHOR.lamp.tR), bulb: g.at(...MANCHOR.lamp.bulb), s: g.s}; };
export const Lamp: React.FC<{p: Place; glow?: number; opacity?: number}> = ({p, glow = 0, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const l = lampPts(p);
	return (
		<g opacity={opacity}>
			{glow > 0.01 ? <circle cx={l.bulb[0]} cy={l.bulb[1]} r={180 * l.s * 2.2} fill="#ffd66b" opacity={0.45 * glow} /> : null}
			<Plate spec={LAMP_HOLDER} p={p} />
		</g>
	);
};
/** Where a lead meets the scope's two inputs. */
export const scopeIns = (p: Place) => { const s = scopeScreen(p); return {a: s.in1, b: s.in2}; };
/** The flux loop (kit) with this lesson's colours. */
export const FluxLoop: React.FC<{cam: FluxCam; phi: number; normal?: number; arc?: number; lit?: number; a?: number}> = ({cam, phi, normal = 1, arc = 1, lit = 1, a = 1}) => (
	<LoopInField cam={cam} a={a} phi={phi} lit={lit} normal={normal} arc={arc} lineColor={FLUX} litColor={'#3d4852'} normalColor={NAVY.stroke} loopColor={ORANGE.stroke} />
);
/** A small framed sine or rectified-sine trace (for the comparison and answer pictures). */
export const MiniTrace: React.FC<{x: number; y: number; w: number; h: number; kind: 'sine' | 'humps'; color?: string; turns?: number; ghost?: boolean}> = ({x, y, w, h, kind, color = ROSE.stroke, turns = 2, ghost = false}) => {
	const pts: string[] = [], gp: string[] = [];
	for (let i = 0; i <= 160; i++) {
		const u = (i / 160) * turns, v = Math.sin(2 * Math.PI * u);
		const px = x + (i / 160) * w;
		pts.push(`${i ? 'L' : 'M'}${px.toFixed(1)},${(y + h / 2 - (kind === 'sine' ? v : Math.abs(v)) * h * 0.42).toFixed(1)}`);
		gp.push(`${i ? 'L' : 'M'}${px.toFixed(1)},${(y + h / 2 - v * h * 0.42).toFixed(1)}`);
	}
	return (
		<g>
			<rect x={x - 8} y={y} width={w + 16} height={h} rx={10} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2} />
			<line x1={x} y1={y + h / 2} x2={x + w} y2={y + h / 2} stroke={INK} strokeWidth={2} strokeDasharray="8 6" />
			{ghost && kind === 'humps' ? <path d={gp.join(' ')} fill="none" stroke={color} strokeWidth={3} strokeDasharray="8 7" /> : null}
			<path d={pts.join(' ')} fill="none" stroke={color} strokeWidth={5} />
		</g>
	);
};
export {CAGE_ROTOR, LAMP_HOLDER, STATION_V1};
