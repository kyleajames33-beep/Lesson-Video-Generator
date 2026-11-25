// Module 8 kit, part 6: alpha scattering (additive kit file, 26 November 2026; first used by phys-y12-m8-v08).
// Course-neutral: every label, number and colour of meaning comes from the lesson.
// Plates (one 1536 x 1024 canvas shared by both layers; visible boxes measured from the alpha channel, threshold 20;
// anchors read from the plates on a grid, 26 November 2026; never stretched):
//   scattering chamber: the gold foil's centre (768, 440) on its post (base 762, 605); the source block's slit (474,
//     492); chamber rim from x 214 to 1305.
//   detector arm: hub centre (768, 572); the zinc sulfide screen's face (1293, 572); the microscope to x 1500. The arm
//     layer is drawn with the chamber's placement and turned about its own hub (root decision 18).
// - Chamber: the chamber plate with the arm turned to angle θ (degrees, anticlockwise on screen), an optional amber beam
//   from the slit to the foil and a pale green flash on the screen.
// - Scattering runs (field motion engine, sims/field-motion): a point charge (repulsive 1/r²) or the same charge spread
//   through a sphere of radius R (force grows in proportion to r inside, 1/r² outside).
import React from 'react';
import {staticFile} from 'remotion';
import {placeOf} from '../light/plates';
import type {LightSpec} from '../light/plates';
import {runMotion} from '../../sims/field-motion';
import type {MotionPath} from '../../sims/field-motion';

const P = (name: string) => `assets/physics/${name}.png`;
export const CHAMBER: LightSpec = {src: P('y12p-alpha-scattering-chamber-v1'), W: 1536, H: 1024, box: [210, 6, 1308, 1021]};
export const ARM_SRC = P('y12p-alpha-scattering-arm-v1');
export const CHAMBER_AT = {foil: [768, 440], post: [762, 605], slit: [474, 492], hub: [768, 572], screen: [1293, 572]} as const;
export const SCATTER_PLATES = [CHAMBER.src, ARM_SRC];
type Place = {x: number; y: number; w: number};

/** Screen point of a chamber-canvas pixel for a placement. */
export const chamberAt = (p: Place, nx: number, ny: number) => placeOf(CHAMBER, p).at(nx, ny);
/** Screen point of the arm's screen face when the arm is turned to θ degrees. */
export const armScreenAt = (p: Place, theta: number): [number, number] => {
	const g = placeOf(CHAMBER, p), [hx, hy] = g.at(CHAMBER_AT.hub[0], CHAMBER_AT.hub[1]), L = (CHAMBER_AT.screen[0] - CHAMBER_AT.hub[0]) * g.s, a = (theta * Math.PI) / 180;
	return [hx + L * Math.cos(a), hy - L * Math.sin(a)];
};
export const Chamber: React.FC<{p: Place; theta?: number; beam?: number; flash?: number; arm?: boolean; opacity?: number; beamColor?: string; flashColor?: string}> = ({p, theta = 0, beam = 0, flash = 0, arm = true, opacity = 1, beamColor = '#d18f1f', flashColor = '#b8f5a0'}) => {
	if (opacity <= 0.001) return null;
	const g = placeOf(CHAMBER, p), [hx, hy] = g.at(CHAMBER_AT.hub[0], CHAMBER_AT.hub[1]);
	const [sx, sy] = g.at(CHAMBER_AT.slit[0], CHAMBER_AT.slit[1]), [fx, fy] = g.at(CHAMBER_AT.foil[0], CHAMBER_AT.foil[1]);
	const [ax, ay] = armScreenAt(p, theta);
	return (
		<g opacity={opacity}>
			<image href={staticFile(CHAMBER.src)} x={g.ix} y={g.iy} width={CHAMBER.W * g.s} height={CHAMBER.H * g.s} />
			{beam > 0.001 ? <line x1={sx} y1={sy} x2={sx + (fx - sx) * beam} y2={sy + (fy - sy) * beam} stroke={beamColor} strokeWidth={Math.max(3, 8 * g.s)} strokeLinecap="round" /> : null}
			{arm ? <g transform={`rotate(${-theta} ${hx} ${hy})`}><image href={staticFile(ARM_SRC)} x={g.ix} y={g.iy} width={CHAMBER.W * g.s} height={CHAMBER.H * g.s} /></g> : null}
			{flash > 0.001 ? <circle cx={ax} cy={ay} r={Math.max(6, 26 * g.s) * (0.6 + 0.4 * flash)} fill={flashColor} opacity={flash} stroke="#5fbf63" strokeWidth={2} /> : null}
		</g>
	);
};

/** An alpha path past a point charge at the origin: repulsion k/r², start far left at height b (aiming distance). */
export const pointRun = (o: {b: number; k: number; v?: number; x0?: number; duration?: number}): MotionPath => runMotion({
	field: {kind: 'custom', accel: (x, y) => { const r2 = x * x + y * y, r = Math.sqrt(r2); return r < 1e-9 ? [0, 0] : [(o.k * x) / (r2 * r), (o.k * y) / (r2 * r)]; }},
	start: {x: o.x0 ?? -10, y: o.b, vx: o.v ?? 1, vy: 0},
	duration: o.duration ?? 20,
	steps: 1600,
});
/** An alpha path past the same charge spread through a sphere of radius R (Thomson's atom). */
export const sphereRun = (o: {b: number; k: number; R: number; v?: number; x0?: number; duration?: number}): MotionPath => runMotion({
	field: {kind: 'custom', accel: (x, y) => { const r = Math.hypot(x, y); if (r < 1e-9) return [0, 0]; const m = r < o.R ? (o.k * r) / o.R ** 3 : o.k / (r * r); return [(m * x) / r, (m * y) / r]; }},
	start: {x: o.x0 ?? -10, y: o.b, vx: o.v ?? 1, vy: 0},
	duration: o.duration ?? 20,
	steps: 1600,
});
/** Final direction of a run, degrees from the starting direction (0 = straight on, 180 = straight back). */
export const deflection = (run: MotionPath) => Math.abs((Math.atan2(run.vy[run.n], run.vx[run.n]) * 180) / Math.PI);
/** SVG path of a run: (x, y) in model units scaled by k px about the screen point (cx, cy); y up; drawn to fraction u. */
export const runPath = (run: MotionPath, cx: number, cy: number, k: number, u = 1) => {
	const n = Math.max(1, Math.floor(run.n * Math.max(0, Math.min(1, u))));
	const pts: string[] = [];
	for (let i = 0; i <= n; i += 4) pts.push(`${i ? 'L' : 'M'}${(cx + run.x[i] * k).toFixed(1)},${(cy - run.y[i] * k).toFixed(1)}`);
	return pts.join(' ');
};
