// Field motion: the path of one body under a force law, in real units.
// Engine only (no drawing, no React). It covers the standard cases a physics
// course draws again and again:
//   - uniform field: projectiles, a charge between parallel plates;
//   - central inverse-square field: circular and elliptical orbits, escape;
//   - magnetic field into or out of the page: a charge moving in a circle;
//   - custom: any acceleration you can write as a function of position and velocity.
//
// The path is integrated once (fourth-order Runge-Kutta) and stored, so the state
// at any time is a lookup. Drawing code, vector arrows, readouts and graphs all read
// the same stored path, so they always agree. Work in SI units and let the drawing
// component scale metres to pixels.

export type Field =
	/** Constant acceleration, for example gravity {ax: 0, ay: -9.8} or a charge between plates {ax: 0, ay: qE / m}. */
	| {kind: 'uniform'; ax: number; ay: number}
	/** Attraction towards a centre: acceleration gm / r squared (gm = G x mass of the central body). */
	| {kind: 'central'; gm: number; cx?: number; cy?: number}
	/** Magnetic field of strength b out of the page (negative b: into the page) on a charge with charge-to-mass ratio qOverM. */
	| {kind: 'magnetic'; qOverM: number; b: number}
	| {kind: 'custom'; accel: (x: number, y: number, vx: number, vy: number, t: number) => readonly [number, number]};

export type MotionConfig = {
	field: Field;
	start: {x: number; y: number; vx: number; vy: number};
	/** Length of the motion in seconds. */
	duration: number;
	/** Number of integration steps (default 600). More steps for tight orbits. */
	steps?: number;
	/** Stop early when this returns true (for example a projectile reaching the ground: s => s.y < 0). */
	stopWhen?: (s: MotionState) => boolean;
};
export type MotionState = {t: number; x: number; y: number; vx: number; vy: number; ax: number; ay: number; speed: number};
export type MotionPath = {config: MotionConfig; duration: number; dt: number; n: number; x: Float64Array; y: Float64Array; vx: Float64Array; vy: Float64Array};

const accelOf = (field: Field) => (x: number, y: number, vx: number, vy: number, t: number): readonly [number, number] => {
	if (field.kind === 'uniform') return [field.ax, field.ay];
	if (field.kind === 'central') {
		const dx = x - (field.cx ?? 0), dy = y - (field.cy ?? 0), r = Math.hypot(dx, dy);
		if (r === 0) return [0, 0];
		const k = -field.gm / (r * r * r);
		return [k * dx, k * dy];
	}
	if (field.kind === 'magnetic') return [field.qOverM * vy * field.b, -field.qOverM * vx * field.b];
	return field.accel(x, y, vx, vy, t);
};

/** Integrate the motion. Deterministic. */
export const runMotion = (config: MotionConfig): MotionPath => {
	const steps = Math.max(1, Math.round(config.steps ?? 600));
	if (!(config.duration > 0)) throw new RangeError('runMotion: duration must be positive');
	const dt = config.duration / steps, a = accelOf(config.field);
	const X = new Float64Array(steps + 1), Y = new Float64Array(steps + 1), VX = new Float64Array(steps + 1), VY = new Float64Array(steps + 1);
	let {x, y, vx, vy} = config.start, n = 0;
	X[0] = x; Y[0] = y; VX[0] = vx; VY[0] = vy;
	for (let i = 1; i <= steps; i++) {
		const t = (i - 1) * dt;
		const [a1x, a1y] = a(x, y, vx, vy, t);
		const [a2x, a2y] = a(x + 0.5 * dt * vx, y + 0.5 * dt * vy, vx + 0.5 * dt * a1x, vy + 0.5 * dt * a1y, t + 0.5 * dt);
		const k2vx = vx + 0.5 * dt * a1x, k2vy = vy + 0.5 * dt * a1y;
		const [a3x, a3y] = a(x + 0.5 * dt * k2vx, y + 0.5 * dt * k2vy, vx + 0.5 * dt * a2x, vy + 0.5 * dt * a2y, t + 0.5 * dt);
		const k3vx = vx + 0.5 * dt * a2x, k3vy = vy + 0.5 * dt * a2y;
		const [a4x, a4y] = a(x + dt * k3vx, y + dt * k3vy, vx + dt * a3x, vy + dt * a3y, t + dt);
		const k4vx = vx + dt * a3x, k4vy = vy + dt * a3y;
		x += (dt / 6) * (vx + 2 * k2vx + 2 * k3vx + k4vx); y += (dt / 6) * (vy + 2 * k2vy + 2 * k3vy + k4vy);
		vx += (dt / 6) * (a1x + 2 * a2x + 2 * a3x + a4x); vy += (dt / 6) * (a1y + 2 * a2y + 2 * a3y + a4y);
		X[i] = x; Y[i] = y; VX[i] = vx; VY[i] = vy; n = i;
		if (config.stopWhen) { const [ax, ay] = a(x, y, vx, vy, i * dt); if (config.stopWhen({t: i * dt, x, y, vx, vy, ax, ay, speed: Math.hypot(vx, vy)})) break; }
	}
	return {config, duration: n * dt, dt, n, x: X, y: Y, vx: VX, vy: VY};
};

/** State at time t (seconds), clamped to the path. Smooth between stored steps. */
export const stateAt = (path: MotionPath, t: number): MotionState => {
	const u = Math.min(path.n, Math.max(0, t / path.dt));
	const i = Math.min(path.n - 1, Math.floor(u)), s = path.n === 0 ? 0 : u - i, j = Math.min(path.n, i + 1), dt = path.dt;
	// Cubic Hermite: positions with velocities as tangents, so the drawn path has no corners.
	const h00 = 2 * s ** 3 - 3 * s ** 2 + 1, h10 = s ** 3 - 2 * s ** 2 + s, h01 = -2 * s ** 3 + 3 * s ** 2, h11 = s ** 3 - s ** 2;
	const x = h00 * path.x[i] + h10 * dt * path.vx[i] + h01 * path.x[j] + h11 * dt * path.vx[j];
	const y = h00 * path.y[i] + h10 * dt * path.vy[i] + h01 * path.y[j] + h11 * dt * path.vy[j];
	const vx = path.vx[i] + (path.vx[j] - path.vx[i]) * s, vy = path.vy[i] + (path.vy[j] - path.vy[i]) * s;
	const time = Math.min(path.duration, Math.max(0, t));
	const [ax, ay] = accelOf(path.config.field)(x, y, vx, vy, time);
	return {t: time, x, y, vx, vy, ax, ay, speed: Math.hypot(vx, vy)};
};

/** Points along the path from time 0 to t, for drawing the trail. */
export const trailTo = (path: MotionPath, t: number, maxPoints = 240): [number, number][] => {
	const end = Math.min(path.duration, Math.max(0, t)), count = Math.max(2, Math.min(maxPoints, Math.ceil(end / path.dt) + 1));
	return Array.from({length: count}, (_, k) => { const s = stateAt(path, (end * k) / (count - 1)); return [s.x, s.y] as [number, number]; });
};

/** Smallest box that holds the whole path: use it to choose the drawing scale. */
export const boundsOf = (path: MotionPath) => {
	let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
	for (let i = 0; i <= path.n; i++) { x0 = Math.min(x0, path.x[i]); x1 = Math.max(x1, path.x[i]); y0 = Math.min(y0, path.y[i]); y1 = Math.max(y1, path.y[i]); }
	return {x0, x1, y0, y1};
};
