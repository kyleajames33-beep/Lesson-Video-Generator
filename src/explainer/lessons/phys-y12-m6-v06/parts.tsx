// Lesson parts for phys-y12-m6-v06: the crossed-field stage (kit gap 6, from the shared crossed kit) wired to the
// painted supply, schematic runs drawn with their trail, the force arrows F_E and F_B, the mass spectrometer plate.
// Colour roles (design, Revision 2): electric field lines blue; magnetic crosses slate; F_E amber; F_B rose;
// velocity and the selected speed E/B teal; net force ink; supply voltage and gap navy; answers in dark-ink frames;
// mistakes slate (root rule R1).
import React from 'react';
import {staticFile} from 'remotion';
import {Lead, Particle, Supply, supplyPts} from '../../physics/electromagnetism/plates';
import type {PG, SupplyAt} from '../../physics/electromagnetism/plates';
import {Arrow2} from '../../physics/electromagnetism/magnetic';
import {stateAt, trailTo} from '../../sims/field-motion';
import type {MotionPath} from '../../sims/field-motion';
import {AMBER, CardRect, FIELD, GREY, Givens, Lbl, NAVY, ORANGE, ROSE, Ring, Shrunk, Strip, T, TEAL, fx, sci, usePulse, V05_PLATES} from '../phys-y12-m6-v05/parts';

export {AMBER, CardRect, FIELD, GREY, Givens, Lbl, NAVY, ORANGE, ROSE, Ring, Shrunk, Strip, T, TEAL, fx, sci, usePulse};
export const MS_SRC = 'assets/chemistry/m8-mass-spectrometer-v1.png';
export const V06_PLATES = [...V05_PLATES, MS_SRC];

/** The mass spectrometer plate (alpha box (161, 520) to (1839, 1479) in its 2000 × 2000 plate), by left, top and width. */
export const MassSpec: React.FC<{x: number; y: number; w: number; opacity?: number}> = ({x, y, w, opacity = 1}) => {
	const s = w / 1678;
	return <image href={staticFile(MS_SRC)} x={x - 161 * s} y={y - 520 * s} width={2000 * s} height={2000 * s} opacity={opacity} />;
};
/** Leads from the painted supply to the plates' left ends (+ to the top plate), and the supply itself. */
export const SupplyRig: React.FC<{g: PG; sup: SupplyAt; reading: string; opacity?: number}> = ({g, sup, reading, opacity = 1}) => {
	const p = supplyPts(sup);
	return (
		<g opacity={opacity}>
			<Lead pts={[p.pos, [p.pos[0], p.pos[1] + 0.22 * p.h], [g.x1 - 60, p.pos[1] + 0.22 * p.h], [g.x1 - 60, g.yTop - 11], [g.x1, g.yTop - 11]]} />
			<Lead pts={[p.neg, [p.neg[0], p.neg[1] + 0.34 * p.h], [g.x1 - 30, p.neg[1] + 0.34 * p.h], [g.x1 - 30, g.yBot + 11], [g.x1, g.yBot + 11]]} />
			<Supply at={sup} reading={reading} />
		</g>
	);
};
/** A run drawn from entry point (x0, y0): its trail to time t (dashed teal) and the particle with its velocity arrow. */
export const RunOn: React.FC<{run: MotionPath; t: number; x0: number; y0: number; sign?: '+' | '−'; r?: number; vScale?: number; trail?: boolean; opacity?: number}> = ({run, t, x0, y0, sign = '−', r = 16, vScale = 14, trail = true, opacity = 1}) => {
	const tt = Math.min(Math.max(0, t), run.duration);
	const s = stateAt(run, tt);
	const pts = tt > 0 ? trailTo(run, tt, 120).map(([x, y]) => `${x0 + x},${y0 - y}`).join(' ') : '';
	const x = x0 + s.x, y = y0 - s.y;
	return (
		<g opacity={opacity}>
			{trail && pts ? <polyline points={pts} fill="none" stroke={TEAL.stroke} strokeWidth={3.5} strokeDasharray="9 6" /> : null}
			<Arrow2 from={[x + r + 4, y]} to={[x + r + 4 + s.vx * vScale, y - s.vy * vScale]} color={TEAL.stroke} width={4} head={14} />
			<Particle cx={x} cy={y} sign={sign} r={r} />
		</g>
	);
};
/** The pair of force arrows on a charge at (x, y): F_E (amber) and F_B (rose), lengths in px (up positive). */
export const ForcePair: React.FC<{x: number; y: number; fe: number; fb: number; r?: number; dx?: number; opacity?: number}> = ({x, y, fe, fb, r = 26, dx = 0, opacity = 1}) => (
	<g opacity={opacity}>
		{Math.abs(fe) > 2 ? <Arrow2 from={[x - dx, y - Math.sign(fe) * (r + 4)]} to={[x - dx, y - Math.sign(fe) * (r + 4) - fe]} color={AMBER.stroke} width={7} head={22} /> : null}
		{Math.abs(fb) > 2 ? <Arrow2 from={[x + dx, y - Math.sign(fb) * (r + 4)]} to={[x + dx, y - Math.sign(fb) * (r + 4) - fb]} color={ROSE.stroke} width={7} head={22} /> : null}
	</g>
);
