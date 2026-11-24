// Projectile maths for a landing below the launch level (additive kit file, 22 November 2026, first used by
// phys-y12-m5-v05). Course-neutral. Same model as flight.ts: uniform g, no air resistance, +y up, origin at
// the launch point; the landing level is `drop` metres below the launch point (drop >= 0).
import {G, landT, ux, uy} from './flight';

/**
 * Both roots of the landing condition s_y = −drop, that is ½g t² − u_y t − drop = 0:
 * [positive root (the landing), other root (a time before launch on the same parabola; 0 when drop = 0)].
 */
export const landRoots = (u: number, deg: number, drop: number, g = G): [number, number] => {
	const v = uy(u, deg);
	const s = Math.sqrt(v * v + 2 * g * drop);
	return [(v + s) / g, (v - s) / g];
};
/** The discriminant under the square root in t = (u_y ± √(u_y² + 2gh)) / g. */
export const landDisc = (u: number, deg: number, drop: number, g = G) => uy(u, deg) ** 2 + 2 * g * drop;
/** Horizontal distance from the launch point to the landing point `drop` metres below: R = u_x t. */
export const rangeFrom = (u: number, deg: number, drop: number, g = G) => ux(u, deg) * landT(u, deg, drop, g);
/** Time spent below the launch level: landing time minus the time to come back to the launch level. */
export const belowT = (u: number, deg: number, drop: number, g = G) => landT(u, deg, drop, g) - (2 * uy(u, deg)) / g;
/** The launch angle (to `step` degrees) that gives the longest range from a height, by a numerical scan. */
export const bestAngle = (u: number, drop: number, step = 0.01, g = G) => {
	let deg = 0, R = -Infinity;
	for (let k = 0; k * step <= 90 + 1e-9; k++) {
		const d = +(k * step).toFixed(6);
		const r = rangeFrom(u, d, drop, g);
		if (r > R) { R = r; deg = d; }
	}
	return {deg, R};
};
