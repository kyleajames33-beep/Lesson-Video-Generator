// Lesson parts for phys-y12-m6-v03: the exam-style electron gun wired to the painted supply (the design's fallback
// for the held cathode ray tube plate: an exam-style gun is a coded diagram, not a drawing of the real tube), the
// potential ladder with the energy ledger (kit gap 3: equipotential lines labelled in volts, signed change bars from
// one zero line), and the shared v01 and v02 parts.
// Colour roles (design, Revision 2): kinetic energy and ΔK orange; potential energy change ΔU violet; voltage, ΔV
// and ladder labels grey-ink (full ink); field lines blue; forces amber; velocity and speed teal; displacement
// brackets navy; answers in dark-ink frames; mistakes slate (root rule R1).
import React from 'react';
import {INK} from '../../shared/tokens';
import {Gun, Lead, Supply, gunPts, supplyPts} from '../../physics/electromagnetism/plates';
import type {SupplyAt} from '../../physics/electromagnetism/plates';
import {AMBER, BLUE, CardRect, GREY, Givens, KBar, Lbl, NAVY, ORANGE, Ring, Shrunk, Stage, Strip, T, TEAL, VIOLET, VecArrow, Trail, RunDot, Strobes, comma, fx, platesFor, sci, toPx, usePulse} from '../phys-y12-m6-v02/parts';
import type {Map} from '../phys-y12-m6-v02/parts';
import {V02_PLATES} from '../phys-y12-m6-v02/parts';

export {AMBER, BLUE, CardRect, GREY, Givens, KBar, Lbl, NAVY, ORANGE, Ring, Shrunk, Stage, Strip, T, TEAL, VIOLET, VecArrow, Trail, RunDot, Strobes, comma, fx, platesFor, sci, toPx, usePulse};
export type {Map};
export const V03_PLATES = [...V02_PLATES];

/** A voltage or energy number for display: plain digits below 10 000, a space as the thousands separator from 10 000. */
export const nV = (v: number) => { const r = Math.round(v); return r >= 10000 ? `${Math.floor(r / 1000)} ${String(r % 1000).padStart(3, '0')}` : String(r); };
/** The exam-style gun on an axis at (x, y), wired from the painted supply: cathode to the − terminal, anode to +. */
export const GunRig: React.FC<{x: number; y: number; sup: SupplyAt; reading: React.ReactNode; knobDeg?: number; h?: number; gap?: number; supplyOpacity?: number}> = ({x, y, sup, reading, knobDeg = 0, h = 140, gap = 90, supplyOpacity = 1}) => {
	const g = gunPts(x, y, h, gap), p = supplyPts(sup);
	return (
		<g>
			<g opacity={supplyOpacity}>
				<Lead pts={[p.neg, [p.neg[0], p.neg[1] + 0.3 * p.h], [sup.x - 30, p.neg[1] + 0.3 * p.h], [sup.x - 30, g.cathodeBot[1] + 40], [g.cathodeBot[0], g.cathodeBot[1] + 40], g.cathodeBot]} />
				<Lead pts={[p.pos, [p.pos[0], p.pos[1] + 0.2 * p.h], [g.anodeBot[0], p.pos[1] + 0.2 * p.h], g.anodeBot]} />
				<Supply at={sup} reading={reading} knobDeg={knobDeg} />
			</g>
			<Gun x={x} y={y} h={h} gap={gap} />
		</g>
	);
};
/** A beam of electrons leaving a gun: dots moving along a straight axis from x0 to x1 at y, `phase` in px. */
export const Beam: React.FC<{x0: number; x1: number; y: number; phase: number; step?: number; opacity?: number}> = ({x0, x1, y, phase, step = 70, opacity = 1}) => {
	const n = Math.floor((x1 - x0) / step);
	return (
		<g opacity={opacity}>
			<line x1={x0} y1={y} x2={x1} y2={y} stroke={TEAL.stroke} strokeWidth={4} opacity={0.9} />
			{Array.from({length: n}, (_, i) => { const x = x0 + ((i * step + phase) % (x1 - x0)); return <circle key={i} cx={x} cy={y} r={7} fill={TEAL.stroke} stroke={INK} strokeWidth={1.5} />; })}
		</g>
	);
};
