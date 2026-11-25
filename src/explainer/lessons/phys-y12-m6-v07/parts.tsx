// Lesson parts for phys-y12-m6-v07: the magnet stage (kit gap 1: the painted horseshoe magnet seen from the front with
// the 3D field box from the shared magnetic kit in its gap, the painted copper rod hanging on two coded leads from the
// painted stand and boss; the same camera tilts to the top view, where the field is a grid of crosses), the bench
// circuit plates (knife switch, low-voltage supply), and v06's parts re-exported.
// Colour roles (design, Revision 2): conventional current orange; electrons grey "−" dots; magnetic field slate (grey
// ink): arrows, dots and crosses; forces amber; active-length brackets navy; angle arcs ink; answers in dark-ink
// frames; mistakes slate (root rule R1).
import React from 'react';
import {INK} from '../../shared/tokens';
import {FieldBox3D, Horseshoe, project} from '../../physics/electromagnetism/magnetic';
import type {Cam, V3} from '../../physics/electromagnetism/magnetic';
import {BENCH_PLATES, Boss, KnifeSwitch, LVS, Plate, Rod, Stand, lvsPts, switchPts} from '../../physics/electromagnetism/bench';
import type {Place} from '../../physics/electromagnetism/bench';
import {Lead} from '../../physics/electromagnetism/plates';
import {AMBER, CardRect, FIELD, GREY, Givens, Lbl, NAVY, ORANGE, ROSE, Ring, Shrunk, Strip, T, TEAL, fx, sci, usePulse, V06_PLATES} from '../phys-y12-m6-v06/parts';

export {AMBER, CardRect, FIELD, GREY, Givens, Lbl, NAVY, ORANGE, ROSE, Ring, Shrunk, Strip, T, TEAL, fx, sci, usePulse};
export const V07_PLATES = [...V06_PLATES, ...BENCH_PLATES];

const clamp01 = (t: number) => Math.min(1, Math.max(0, t));
// ---------------------------------------------------------------- the magnet stage
/** Front view: looking across the field, which runs down from the north pole face (top) to the south face. */
export const CAM_F: Cam = {cx: 700, cy: 560, k: 1, tilt: 1, maxDeg: 65, depthX: 0.45, depthY: 0};
/** Top view: looking down through the gap, so the field points into the screen (crosses). */
export const CAM_T: Cam = {cx: 760, cy: 560, k: 1.3, tilt: 0, maxDeg: 65, depthX: 0.45, depthY: 0};
export const BOX = {hx: 210, hz: 66};
export const hyFor = (tilt: number) => 50 + 190 * (1 - clamp01(tilt));
/** The rod's visible length and the lead length (world px at k = 1). */
export const ROD_L = 618, LEAD = 330;
/** Pole-face lines for the box under a camera (where the magnet plate sits). */
export const facesFor = (cam: Cam) => {
	const a = project(cam, [0, 0, BOX.hz]), b = project(cam, [0, 0, -BOX.hz]);
	return {x: (a[0] + b[0]) / 2, top: a[1], bot: b[1]};
};
/** The rod's centre in the world for a swing `a` (radians; positive swings away from the viewer, up the top view). */
export const rodWorld = (a: number): V3 => [0, LEAD * Math.sin(a), LEAD * (1 - Math.cos(a))];
/** The painted rod on the stage: projected centre, illustrative size change with the swing (author note d). */
export const StageRod: React.FC<{cam: Cam; a?: number; shift?: number; opacity?: number}> = ({cam, a = 0, shift = 0, opacity = 1}) => {
	const [x, y] = project(cam, [0, rodWorld(a)[1] + shift, rodWorld(a)[2]]);
	const len = cam.k * ROD_L * (1 - 0.12 * Math.sin(a) * clamp01(cam.tilt));
	return <Rod cx={x} cy={y} len={len} opacity={opacity} />;
};
/** Screen ends of the rod (for brackets and leads). */
export const rodEnds = (cam: Cam, a = 0, shift = 0) => {
	const w = rodWorld(a);
	const c = project(cam, [0, w[1] + shift, w[2]]);
	const len = cam.k * ROD_L * (1 - 0.12 * Math.sin(a) * clamp01(cam.tilt));
	return {c, x1: c[0] - len / 2, x2: c[0] + len / 2};
};
/** The field box, with the magnet plate round it (`magnet` 0 to 1) and the hanging leads (`leads` 0 to 1). */
export const MagnetStage: React.FC<{cam: Cam; magnet?: number; leads?: number; a?: number; edges?: number; arrowCols?: number; crossStep?: number; rod?: number; shift?: number; field?: number; children?: React.ReactNode}> = ({cam, magnet = 1, leads = 1, a = 0, edges, arrowCols = 5, crossStep = 70, rod = 1, shift = 0, field = 1, children}) => {
	const m = facesFor(cam);
	const e = rodEnds(cam, a, shift);
	const top = project(cam, [0, 0, LEAD]);
	return (
		<g>
			<Horseshoe x={m.x} top={m.top} bot={m.bot} opacity={magnet} />
			<FieldBox3D cam={cam} hx={BOX.hx} hy={hyFor(cam.tilt)} hz={BOX.hz} edges={edges} arrowCols={arrowCols} arrowRows={1} crossStep={crossStep} opacity={field} />
			{leads > 0.001 ? <g opacity={leads}>
				<line x1={e.x1 + 14} y1={e.c[1]} x2={e.x1 + 14} y2={top[1]} stroke={INK} strokeWidth={3} />
				<line x1={e.x2 - 14} y1={e.c[1]} x2={e.x2 - 14} y2={top[1]} stroke={INK} strokeWidth={3} />
			</g> : null}
			<StageRod cam={cam} a={a} shift={shift} opacity={rod} />
			{children}
		</g>
	);
};
// ---------------------------------------------------------------- the bench (front view only)
export const SW_AT: Place = {x: 1170, y: 771, w: 300};
export const LVS_AT: Place = {x: 1540, y: 779, w: 300};
export const STAND_X = 190, BENCH_Y = 900;
/** The stand, boss, coded crossbar, switch, supply and the coded leads joining them (current path + to the left lead). */
export const Bench: React.FC<{cam: Cam; open: number; opacity?: number}> = ({cam, open, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const top = project(cam, [0, 0, LEAD])[1];
	const e = rodEnds(cam, 0);
	const sw = switchPts(SW_AT), sp = lvsPts(LVS_AT);
	const lx = e.x1 + 14, rx = e.x2 - 14;
	return (
		<g opacity={opacity}>
			<line x1={60} y1={BENCH_Y} x2={1860} y2={BENCH_Y} stroke={INK} strokeWidth={4} />
			<Stand rodX={STAND_X} baseY={BENCH_Y} height={700} />
			<line x1={STAND_X} y1={top} x2={rx + 40} y2={top} stroke="#8d8f93" strokeWidth={12} strokeLinecap="round" />
			<Boss x={STAND_X} y={top} w={120} />
			<Lead pts={[sp.pos, [sp.pos[0], 200], [lx, 200], [lx, top]]} color={INK} width={3.5} />
			<Lead pts={[[rx, top], [rx, top - 30], [sw.left[0], top - 30], sw.left]} color={INK} width={3.5} />
			<Lead pts={[sw.right, [sw.right[0], sw.right[1] + 60], [sp.neg[0], sw.right[1] + 60], sp.neg]} color={INK} width={3.5} />
			<KnifeSwitch p={SW_AT} open={open} />
			<Plate spec={LVS} p={LVS_AT} />
		</g>
	);
};
