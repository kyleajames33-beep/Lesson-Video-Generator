// Field motion: the path of one body under a force law, in real units.
// Engine only (no drawing, no React). It covers the standard cases a physics
// course draws again and again:
//   - uniform field: projectiles, a charge between parallel plates;
//   - central inverse-square field: circular and elliptical orbits, escape;
//   - magnetic field into or out of the page: a charge moving in a circle;
//   - custom: any acceleration you can write as a function of position and velocity.
// Added 14 November 2026: the body can be held on a string (a pendulum, a vertical circle,
// a conical pendulum seen from above) or made to follow a track (a bead on a wire, a cart on
// a frictionless hill), and it can be given sudden changes of velocity (engine burns).
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
	/**
	 * Sudden changes of velocity at set times, such as an engine burn that is short compared
	 * with the orbit. Give `along` (m/s added along the direction of motion; negative slows
	 * it) or `dvx` and `dvy`. On a string or a track only the part along the path counts.
	 */
	burns?: readonly Burn[];
	/** Hold the body on a string or a track. Left out, it moves freely. */
	constraint?: Constraint;
};
export type Burn = {at: number; along?: number; dvx?: number; dvy?: number};
export type Constraint =
	/**
	 * A string (or light rod) fixed at (cx, cy). Its length is the distance from there to the
	 * start. A string can only pull: if its tension would fall below zero it goes slack and
	 * the body flies free from that moment. `rigid` makes it a rod (or the inside of a loop
	 * of track that the body is fastened to), which can also push.
	 */
	| {kind: 'string'; cx: number; cy: number; rigid?: boolean}
	/** A smooth track of height y = f(x), with no friction. The body is fastened to it and cannot leave. */
	| {kind: 'track'; y: (x: number) => number};
export type MotionState = {t: number; x: number; y: number; vx: number; vy: number; ax: number; ay: number; speed: number};
export type MotionPath = {
	config: MotionConfig; duration: number; dt: number; n: number; x: Float64Array; y: Float64Array; vx: Float64Array; vy: Float64Array;
	/** Constrained motion only: the body's actual acceleration at each step (the field's plus the string's or track's). */
	ax?: Float64Array; ay?: Float64Array;
	/**
	 * Constrained motion only: the force from the string or track on each kilogram of the body
	 * (m/s^2; multiply by the mass for newtons). For a string it is the tension; for a track it
	 * is the push at right angles to the track, positive on the upper side.
	 */
	support?: Float64Array;
	/** A string that went slack: the time it happened. */
	released?: number;
};

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

type Vec4 = [number, number, number, number];
/** One fourth-order Runge-Kutta step of a free body: returns the new x, y, vx, vy. */
const freeStep = (a: ReturnType<typeof accelOf>, x: number, y: number, vx: number, vy: number, t: number, dt: number): Vec4 => {
	const [a1x, a1y] = a(x, y, vx, vy, t);
	const [a2x, a2y] = a(x + 0.5 * dt * vx, y + 0.5 * dt * vy, vx + 0.5 * dt * a1x, vy + 0.5 * dt * a1y, t + 0.5 * dt);
	const k2vx = vx + 0.5 * dt * a1x, k2vy = vy + 0.5 * dt * a1y;
	const [a3x, a3y] = a(x + 0.5 * dt * k2vx, y + 0.5 * dt * k2vy, vx + 0.5 * dt * a2x, vy + 0.5 * dt * a2y, t + 0.5 * dt);
	const k3vx = vx + 0.5 * dt * a2x, k3vy = vy + 0.5 * dt * a2y;
	const [a4x, a4y] = a(x + dt * k3vx, y + dt * k3vy, vx + dt * a3x, vy + dt * a3y, t + dt);
	const k4vx = vx + dt * a3x, k4vy = vy + dt * a3y;
	return [x + (dt / 6) * (vx + 2 * k2vx + 2 * k3vx + k4vx), y + (dt / 6) * (vy + 2 * k2vy + 2 * k3vy + k4vy), vx + (dt / 6) * (a1x + 2 * a2x + 2 * a3x + a4x), vy + (dt / 6) * (a1y + 2 * a2y + 2 * a3y + a4y)];
};
/** Fourth-order Runge-Kutta step for one coordinate q with rate w, where the acceleration of q depends on (q, w, t). */
const coordStep = (acc: (q: number, w: number, t: number) => number, q: number, w: number, t: number, dt: number): [number, number] => {
	const a1 = acc(q, w, t), a2 = acc(q + 0.5 * dt * w, w + 0.5 * dt * a1, t + 0.5 * dt), a3 = acc(q + 0.5 * dt * (w + 0.5 * dt * a1), w + 0.5 * dt * a2, t + 0.5 * dt), a4 = acc(q + dt * (w + 0.5 * dt * a2), w + dt * a3, t + dt);
	return [q + (dt / 6) * (6 * w + dt * (a1 + a2 + a3)), w + (dt / 6) * (a1 + 2 * a2 + 2 * a3 + a4)];
};

/** Integrate the motion. Deterministic. */
export const runMotion = (config: MotionConfig): MotionPath => {
	const steps = Math.max(1, Math.round(config.steps ?? 600));
	if (!(config.duration > 0)) throw new RangeError('runMotion: duration must be positive');
	const dt = config.duration / steps, a = accelOf(config.field), c = config.constraint;
	const X = new Float64Array(steps + 1), Y = new Float64Array(steps + 1), VX = new Float64Array(steps + 1), VY = new Float64Array(steps + 1);
	const AX = c ? new Float64Array(steps + 1) : undefined, AY = c ? new Float64Array(steps + 1) : undefined, S = c ? new Float64Array(steps + 1) : undefined;
	const burns = [...(config.burns ?? [])].sort((p, q) => p.at - q.at);
	let {x, y, vx, vy} = config.start, n = 0, nextBurn = 0, released: number | undefined;
	/** The change of velocity a burn gives a body moving at (vx, vy). */
	const kick = (b: Burn, ux: number, uy: number): [number, number] => {
		const sp = Math.hypot(ux, uy), along = b.along ?? 0;
		return [(b.dvx ?? 0) + (sp > 0 ? (along * ux) / sp : along), (b.dvy ?? 0) + (sp > 0 ? (along * uy) / sp : 0)];
	};
	// A string: one coordinate, the angle th of the body round the fixed point.
	const L = c?.kind === 'string' ? Math.hypot(x - c.cx, y - c.cy) : 0;
	if (c?.kind === 'string' && !(L > 0)) throw new RangeError('runMotion: a body on a string must start away from the fixed point');
	let th = c?.kind === 'string' ? Math.atan2(y - c.cy, x - c.cx) : 0, om = c?.kind === 'string' ? (-Math.sin(th) * vx + Math.cos(th) * vy) / L : 0;
	const stringAcc = (q: number, w: number, time: number) => {
		const sc = c as Extract<Constraint, {kind: 'string'}>, [fx, fy] = a(sc.cx + L * Math.cos(q), sc.cy + L * Math.sin(q), -L * w * Math.sin(q), L * w * Math.cos(q), time);
		return (-Math.sin(q) * fx + Math.cos(q) * fy) / L;
	};
	// A track: one coordinate, x itself. Slope and curvature come from the track's shape.
	const shape = (q: number) => { const f = (c as Extract<Constraint, {kind: 'track'}>).y, h = 1e-4 * (1 + Math.abs(q)); return {f: f(q), p: (f(q + h) - f(q - h)) / (2 * h), k: (f(q + h) - 2 * f(q) + f(q - h)) / (h * h)}; };
	const trackAcc = (q: number, w: number, time: number) => { const s = shape(q), [fx, fy] = a(q, s.f, w, s.p * w, time); return (fx + s.p * fy - s.p * s.k * w * w) / (1 + s.p * s.p); };
	if (c?.kind === 'track') { const s = shape(x); y = s.f; vx = (vx + s.p * vy) / (1 + s.p * s.p); vy = s.p * vx; }
	/** Store step i, working out the acceleration and the support force for a constrained body. */
	const store = (i: number, time: number) => {
		X[i] = x; Y[i] = y; VX[i] = vx; VY[i] = vy;
		if (!c || !AX || !AY || !S) return;
		const [fx, fy] = a(x, y, vx, vy, time);
		if (released !== undefined) { AX[i] = fx; AY[i] = fy; S[i] = 0; return; }
		if (c.kind === 'string') {
			const rx = Math.cos(th), ry = Math.sin(th), tension = L * om * om + fx * rx + fy * ry, al = stringAcc(th, om, time);
			S[i] = tension; AX[i] = -L * om * om * rx - L * al * ry; AY[i] = -L * om * om * ry + L * al * rx;
		} else {
			const s = shape(x), ax = trackAcc(x, vx, time), ay = s.k * vx * vx + s.p * ax, root = Math.sqrt(1 + s.p * s.p);
			AX[i] = ax; AY[i] = ay; S[i] = (-(ax - fx) * s.p + (ay - fy)) / root;
		}
	};
	if (c?.kind === 'string') { x = c.cx + L * Math.cos(th); y = c.cy + L * Math.sin(th); vx = -L * om * Math.sin(th); vy = L * om * Math.cos(th); }
	store(0, 0);
	for (let i = 1; i <= steps; i++) {
		const time = (i - 1) * dt;
		while (nextBurn < burns.length && burns[nextBurn].at <= time + 1e-12) {
			const [dx, dy] = kick(burns[nextBurn++], vx, vy);
			if (c?.kind === 'string' && released === undefined) om += (-Math.sin(th) * dx + Math.cos(th) * dy) / L;
			else if (c?.kind === 'track') { const s = shape(x); vx += (dx + s.p * dy) / (1 + s.p * s.p); }
			else { vx += dx; vy += dy; }
			if (c?.kind === 'string' && released === undefined) { vx = -L * om * Math.sin(th); vy = L * om * Math.cos(th); }
			if (c?.kind === 'track') vy = shape(x).p * vx;
		}
		if (c?.kind === 'string' && released === undefined) {
			[th, om] = coordStep(stringAcc, th, om, time, dt);
			x = c.cx + L * Math.cos(th); y = c.cy + L * Math.sin(th); vx = -L * om * Math.sin(th); vy = L * om * Math.cos(th);
			const [fx, fy] = a(x, y, vx, vy, i * dt);
			// A string cannot push: once the tension would be negative the body is on its own.
			if (!c.rigid && L * om * om + fx * Math.cos(th) + fy * Math.sin(th) < 0) released = i * dt;
		} else if (c?.kind === 'track') {
			[x, vx] = coordStep(trackAcc, x, vx, time, dt);
			const s = shape(x); y = s.f; vy = s.p * vx;
		} else [x, y, vx, vy] = freeStep(a, x, y, vx, vy, time, dt);
		store(i, i * dt); n = i;
		if (config.stopWhen) { const [ax, ay] = a(x, y, vx, vy, i * dt); if (config.stopWhen({t: i * dt, x, y, vx, vy, ax: AX ? AX[i] : ax, ay: AY ? AY[i] : ay, speed: Math.hypot(vx, vy)})) break; }
	}
	return {config, duration: n * dt, dt, n, x: X, y: Y, vx: VX, vy: VY, ax: AX, ay: AY, support: S, released};
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
	// A constrained body's acceleration includes the string's or track's force, so it is read from the stored run.
	const [ax, ay] = path.ax && path.ay ? [path.ax[i] + (path.ax[j] - path.ax[i]) * s, path.ay[i] + (path.ay[j] - path.ay[i]) * s] : accelOf(path.config.field)(x, y, vx, vy, time);
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

/** The string's tension, or the track's push, on each kilogram of the body at time t (m/s^2). Zero for a free body. */
export const supportAt = (path: MotionPath, t: number) => {
	if (!path.support) return 0;
	const u = Math.min(path.n, Math.max(0, t / path.dt)), i = Math.min(path.n - 1, Math.floor(u)), j = Math.min(path.n, i + 1);
	return path.support[i] + (path.support[j] - path.support[i]) * (u - i);
};
/** Kinetic and potential energy per kilogram for a body in a uniform field (J/kg), with potential measured from height `zero`. Their sum stays fixed on a string or a smooth track. */
export const energyAt = (path: MotionPath, t: number, zero = 0) => {
	const s = stateAt(path, t), f = path.config.field, g = f.kind === 'uniform' ? Math.hypot(f.ax, f.ay) : 0;
	const height = f.kind === 'uniform' && g > 0 ? -((s.x * f.ax + s.y * f.ay) / g) - zero : 0, kinetic = 0.5 * s.speed * s.speed, potential = g * height;
	return {kinetic, potential, total: kinetic + potential};
};
