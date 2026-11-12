// Two bodies colliding along a straight track. Momentum is conserved in every collision;
// kinetic energy only in an elastic one. Plain TypeScript, no React. SI units: kilograms,
// metres per second (positive to the right), joules.

export type Collision = {
	m1: number; m2: number;
	/** Velocities before the collision. */
	u1: number; u2: number;
	/**
	 * How bouncy the collision is: 1 (default) is elastic, 0 means the two stick together,
	 * anything between loses some kinetic energy. It is the speed they separate at divided
	 * by the speed they closed at.
	 */
	restitution?: number;
};
export type CollisionResult = {
	/** Velocities after the collision. */
	v1: number; v2: number;
	momentumBefore: number; momentumAfter: number;
	kineticBefore: number; kineticAfter: number;
	/** Kinetic energy turned into heat, sound and bending (0 for an elastic collision). */
	kineticLost: number;
	/** Impulse on body 2 (N s). Body 1 receives the same size the other way. */
	impulse: number;
	elastic: boolean;
};
/** Work out the velocities after a collision from the two conservation rules. */
export const collide = (c: Collision): CollisionResult => {
	const {m1, m2, u1, u2} = c, e = c.restitution ?? 1, total = m1 * u1 + m2 * u2, sum = m1 + m2;
	const v1 = (total - m2 * e * (u1 - u2)) / sum, v2 = (total + m1 * e * (u1 - u2)) / sum;
	const kineticBefore = 0.5 * m1 * u1 * u1 + 0.5 * m2 * u2 * u2, kineticAfter = 0.5 * m1 * v1 * v1 + 0.5 * m2 * v2 * v2;
	return {v1, v2, momentumBefore: total, momentumAfter: m1 * v1 + m2 * v2, kineticBefore, kineticAfter, kineticLost: Math.max(0, kineticBefore - kineticAfter), impulse: m2 * (v2 - u2), elastic: Math.abs(e - 1) < 1e-12};
};
/** Head-on elastic hit on a body at rest: how fast the struck body leaves (as a multiple of the incoming speed) and the share of the kinetic energy it takes. */
export const elasticTransfer = (incoming: number, target: number) => ({speedRatio: (2 * incoming) / (incoming + target), energyShare: (4 * incoming * target) / (incoming + target) ** 2});
/** Two bodies at rest pushed apart by `energy` joules (a spring, an explosion, a recoil): their velocities, equal and opposite in momentum. */
export const pushApart = (m1: number, m2: number, energy: number) => { const p = Math.sqrt((2 * energy * m1 * m2) / (m1 + m2)); return {v1: -p / m1, v2: p / m2, momentum: p}; };

export type CollisionRunConfig = Collision & {
	/** Where each body's centre starts (m), and half of each body's length (m), so that they touch when their centres are size1 + size2 apart. */
	x1: number; x2: number; size1?: number; size2?: number;
	duration: number;
};
export type CollisionRun = {config: CollisionRunConfig; result: CollisionResult; /** When they touch (s), or null if they never do in this run. */ time: number | null; duration: number};
export type CollisionState = {t: number; x1: number; x2: number; v1: number; v2: number; hit: boolean; p1: number; p2: number; k1: number; k2: number};
/** Set two bodies moving on a track and work out when they meet and what happens then. */
export const runCollision = (config: CollisionRunConfig): CollisionRun => {
	const gap = config.x2 - config.x1 - (config.size1 ?? 0) - (config.size2 ?? 0), closing = config.u1 - config.u2;
	if (gap < 0) throw new RangeError('runCollision: the bodies overlap at the start (body 1 must be to the left of body 2)');
	const time = closing > 0 && gap / closing <= config.duration ? gap / closing : null;
	return {config, result: collide(config), time, duration: config.duration};
};
/** Positions, velocities, momenta and kinetic energies at time t. */
export const collisionAt = (run: CollisionRun, t: number): CollisionState => {
	const c = run.config, time = Math.min(run.duration, Math.max(0, t)), hit = run.time !== null && time >= run.time, tc = run.time ?? 0;
	const v1 = hit ? run.result.v1 : c.u1, v2 = hit ? run.result.v2 : c.u2;
	const x1 = hit ? c.x1 + c.u1 * tc + v1 * (time - tc) : c.x1 + c.u1 * time, x2 = hit ? c.x2 + c.u2 * tc + v2 * (time - tc) : c.x2 + c.u2 * time;
	return {t: time, x1, x2, v1, v2, hit, p1: c.m1 * v1, p2: c.m2 * v2, k1: 0.5 * c.m1 * v1 * v1, k2: 0.5 * c.m2 * v2 * v2};
};
