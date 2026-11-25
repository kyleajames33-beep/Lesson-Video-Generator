// Lesson parts for phys-y12-m6-v14: the transformer with losses (kit: last time's worked-example board with a heat
// tint, leakage loops and a missing-power slice on the P_out bar), the loss card (the ideal card with each assumption
// struck and labelled with its loss and fix), the grid landscape of the handoff (power station, two towers and a
// house on one coded line with a resistor zigzag, moving charges and a heat glow; the next lesson opens on it), small
// diagram icons for the loss table, and v13's parts re-exported.
// Colour roles (design, Revision 2): primary orange; flux slate; secondary and eddy currents rose; heat a warm tint;
// power and efficiency amber; turns and givens navy; answers in dark-ink frames; mistakes slate (root rule R1).
import React from 'react';
import {INK} from '../../shared/tokens';
import {Plate} from '../../physics/electromagnetism/bench';
import type {Place} from '../../physics/electromagnetism/bench';
import {FlowDots} from '../../physics/electromagnetism/induction';
import {ANCHOR, AssumptionCard, CoreSlice, HOUSE, HotWire, STATION, TOWER, XCore, Zigzag, anchorAt, byHeight, sagPts} from '../../physics/electromagnetism/transformer';
import {AMBER, CardRect, FB, FB_BARS, FB_G, FLUX, FinalBoard, Frac, Givens, IDEAL_ITEMS, Lbl, MiniXf, NAVY, ORANGE, PowerBars, ROSE, Ring, Sb, Shrunk, Strip, T, V13_PLATES, XCircuit, fx, swing, xcGeom} from '../phys-y12-m6-v13/parts';

export {AMBER, CardRect, FB, FB_BARS, FB_G, FLUX, FinalBoard, Frac, Givens, Lbl, MiniXf, NAVY, ORANGE, PowerBars, ROSE, Ring, Sb, Shrunk, Strip, T, XCircuit, fx, swing, xcGeom};
export const V14_PLATES = [...V13_PLATES];
/** A word subscript ("loss", "line") set larger than `Sub` so it stays readable. */
export const Ws: React.FC<{children: React.ReactNode}> = ({children}) => <span style={{fontSize: '0.8em', position: 'relative', top: '0.24em'}}>{children}</span>;
type Pt = [number, number];

// ---------------------------------------------------------------- the loss card
/** Which loss breaks each ideal assumption, and its fix (design scenes 3 to 8). */
export const LOSS = [
	{note: 'coupling: flux leakage', fix: 'fix: closed core, coils together', color: FLUX},
	{note: 'copper (resistive) heating', fix: 'fix: thicker wire', color: ORANGE.ink},
	{note: 'core: eddy currents; hysteresis', fix: 'fix: laminate; soft iron', color: ROSE.ink},
] as const;
/**
 * The ideal card with each item's state: `cross[i]` strikes and crosses it (0 to 1), `note[i]` shows its loss,
 * `fix[i]` its fix. Text stays solid (root rule R2).
 */
export const LossCard: React.FC<{x: number; y: number; w?: number; size?: number; cross?: readonly number[]; note?: readonly number[]; fix?: readonly number[]; notQuite?: readonly number[]; opacity?: number; hi?: readonly number[]}> = ({x, y, w = 600, size = 26, cross = [0, 0, 0], note = [0, 0, 0], fix = [0, 0, 0], notQuite = [0, 0, 0], opacity = 1, hi = [0, 0, 0]}) => (
	<AssumptionCard x={x} y={y} w={w} title="Ideal transformer: real life" size={size} opacity={opacity} items={IDEAL_ITEMS.map((text, i) => ({
		text, mark: cross[i] > 0.01 ? 'cross' as const : 'none' as const, markO: cross[i], strike: cross[i], hi: hi[i],
		note: note[i] > 0.01 ? LOSS[i].note : notQuite[i] > 0.01 ? 'not quite' : undefined, noteO: Math.max(note[i], notQuite[i]), noteColor: note[i] > 0.01 ? LOSS[i].color : FLUX,
		fix: fix[i] > 0.01 ? LOSS[i].fix : undefined, fixO: fix[i], fixColor: NAVY.ink,
	}))} />
);

// ---------------------------------------------------------------- the grid landscape (handoff; next lesson's opening)
export const GL = (() => {
	const st: Place = byHeight(STATION, 50, 540, 260);
	const t1: Place = byHeight(TOWER, 640, 340, 460), t2: Place = byHeight(TOWER, 1120, 340, 460);
	const ho: Place = byHeight(HOUSE, 1500, 620, 180);
	const a = anchorAt(STATION, st, ANCHOR.station);
	const t1l = anchorAt(TOWER, t1, ANCHOR.tower.lL), t1r = anchorAt(TOWER, t1, ANCHOR.tower.lR);
	const t2l = anchorAt(TOWER, t2, ANCHOR.tower.lL), t2r = anchorAt(TOWER, t2, ANCHOR.tower.lR);
	const h = anchorAt(HOUSE, ho, ANCHOR.houseEave);
	const z1: Pt = [t1r[0] + 70, t1r[1] + 26], z2: Pt = [t2l[0] - 70, t2l[1] + 26];
	const path: Pt[] = [...sagPts(a, t1l, 18), t1r, ...sagPts(t1r, z1, 6, 6).slice(1), z2, ...sagPts(z2, t2l, 6, 6).slice(1), t2r, ...sagPts(t2r, h, 16).slice(1)];
	return {st, t1, t2, ho, a, t1l, t1r, t2l, t2r, h, z1, z2, path, ground: 800};
})();
/**
 * The landscape: the painted power station, two towers and a house on one coded line (a resistor zigzag on the middle
 * span), orange charges along it (`dots`, `phase`) and a warm glow along the whole line (`tint`).
 */
export const GridLandscape: React.FC<{tint?: number; dots?: number; phase?: number; zig?: number; opacity?: number}> = ({tint = 0, dots = 0, phase = 0, zig = 1, opacity = 1}) => (
	<g opacity={opacity}>
		<line x1={30} y1={GL.ground} x2={1890} y2={GL.ground} stroke={INK} strokeWidth={4} />
		<Plate spec={STATION} p={GL.st} />
		<Plate spec={TOWER} p={GL.t1} />
		<Plate spec={TOWER} p={GL.t2} />
		<Plate spec={HOUSE} p={GL.ho} />
		<HotWire pts={GL.path} tint={tint} width={4} />
		{zig > 0.001 ? <g opacity={zig}><line x1={GL.z1[0]} y1={GL.z1[1]} x2={GL.z2[0]} y2={GL.z2[1]} stroke="#f6f1e7" strokeWidth={8} /><Zigzag x1={GL.z1[0]} y1={GL.z1[1]} x2={GL.z2[0]} y2={GL.z2[1]} n={6} amp={14} width={4.5} /></g> : null}
		{dots > 0.001 ? <FlowDots pts={GL.path} phase={phase} gap={44} r={7} color={ORANGE.stroke} opacity={dots} /> : null}
	</g>
);

// ---------------------------------------------------------------- small diagram icons (loss table, memory aid)
/** A winding glowing warm (copper loss). */
export const IconCopper: React.FC<{x: number; y: number; k?: number; glow?: number}> = ({x, y, k = 1, glow = 1}) => (
	<g transform={`translate(${x} ${y}) scale(${k})`}><XCore cx={0} cy={0} s={170} t={36} np={6} ns={2} flux={0} pColor={ORANGE.stroke} sColor={ROSE.stroke} sWidth={11} heatP={0.6 * glow} heatS={glow} heatCore={0} /></g>
);
/** A core slice with one eddy loop (core loss). */
export const IconCore: React.FC<{x: number; y: number; k?: number; glow?: number}> = ({x, y, k = 1, glow = 1}) => (
	<g transform={`translate(${x} ${y}) scale(${k})`}><CoreSlice x={-85} y={-70} w={170} h={140} sheets={1} flux={0.6} eddy={1} heat={0.6 * glow} /></g>
);
/** A core with flux leaking into the air (coupling). */
export const IconCoupling: React.FC<{x: number; y: number; k?: number; glow?: number}> = ({x, y, k = 1, glow = 1}) => (
	<g transform={`translate(${x} ${y}) scale(${k})`}><XCore cx={20} cy={0} s={170} t={36} np={4} ns={4} flux={0.8} pColor={ORANGE.stroke} sColor={ROSE.stroke} leak={0.35 + 0.3 * glow} /></g>
);
export {CoreSlice, MiniXf as Mini};
