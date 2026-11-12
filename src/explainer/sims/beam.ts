// Turning effects on a beam: forces at set distances from a pivot, the torque of each, and
// whether the beam balances. Plain TypeScript, no React. Positions are measured along the
// beam from the pivot (positive to the right), in metres; forces in newtons; torques in
// newton metres, positive when anticlockwise.

export type BeamForce = {
	id?: string;
	/** Where the force acts, in metres from the pivot (negative: to the left of it). */
	at: number;
	/** Size of the force in newtons. */
	force: number;
	/** 'down' (default: a weight) or 'up' (a push or a string pulling up). */
	direction?: 'down' | 'up';
	/** Angle between the force and the beam in degrees (default 90: at right angles). Only the part at right angles turns the beam. */
	angle?: number;
};
export type Beam = {
	forces: readonly BeamForce[];
	/** The beam's own weight in newtons, acting at `centre` metres from the pivot (default 0: a uniform beam pivoted at its middle). */
	weight?: number; centre?: number;
};
export type BeamTorque = {id?: string; at: number; force: number; torque: number; sense: 'clockwise' | 'anticlockwise' | 'none'};
export type BeamState = {
	torques: BeamTorque[];
	/** Sum of the clockwise torques and of the anticlockwise torques (both as sizes), and the net torque (anticlockwise positive). */
	clockwise: number; anticlockwise: number; net: number;
	balanced: boolean;
	/** The upward force the pivot must supply so that the forces balance too. */
	support: number;
};

/** Torque of a force F acting r metres from a pivot at an angle to the line from the pivot (degrees): r F sin(angle). */
export const torque = (r: number, force: number, angle = 90) => r * force * Math.sin((angle * Math.PI) / 180);
const turning = (f: BeamForce) => -f.at * f.force * Math.sin(((f.angle ?? 90) * Math.PI) / 180) * (f.direction === 'up' ? -1 : 1);
const all = (beam: Beam): BeamForce[] => [...beam.forces, ...(beam.weight ? [{id: 'beam', at: beam.centre ?? 0, force: beam.weight}] : [])];

/** Every torque about the pivot, their totals, and whether the beam is in rotational equilibrium. */
export const solveBeam = (beam: Beam): BeamState => {
	const torques = all(beam).map(f => { const tq = turning(f); return {id: f.id, at: f.at, force: f.force, torque: tq, sense: tq > 1e-12 ? 'anticlockwise' as const : tq < -1e-12 ? 'clockwise' as const : 'none' as const}; });
	const anticlockwise = torques.reduce((s, tq) => s + Math.max(0, tq.torque), 0), clockwise = torques.reduce((s, tq) => s + Math.max(0, -tq.torque), 0), net = anticlockwise - clockwise;
	const support = all(beam).reduce((s, f) => s + f.force * Math.sin(((f.angle ?? 90) * Math.PI) / 180) * (f.direction === 'up' ? -1 : 1), 0);
	return {torques, clockwise, anticlockwise, net, balanced: Math.abs(net) <= 1e-9 * Math.max(1, clockwise, anticlockwise), support};
};
/** Where a downward force of this size must act (metres from the pivot) to balance the beam as it stands. */
export const balancePoint = (beam: Beam, force: number) => solveBeam(beam).net / force;
/** The downward force needed at this position to balance the beam as it stands (negative: it would have to pull up). */
export const balanceForce = (beam: Beam, at: number) => solveBeam(beam).net / at;

export type BeamRun = {beam: Beam; duration: number; dt: number; n: number; angle: Float64Array};
/**
 * Let the beam go from level and watch it tip. `limit` is the most it can tilt (radians)
 * before it rests on its stop. Moment of inertia: each force is taken as a weight (mass =
 * force / g) at its position, plus `extra` for the beam itself. A balanced beam stays level.
 */
export const runBeam = (beam: Beam, o: {duration: number; limit?: number; steps?: number; extra?: number; g?: number}): BeamRun => {
	const n = Math.max(1, o.steps ?? 600), dt = o.duration / n, limit = o.limit ?? 0.3, g = o.g ?? 9.8;
	const inertia = Math.max(1e-9, all(beam).reduce((s, f) => s + (f.force / g) * f.at * f.at, 0) + (o.extra ?? 0)), net = solveBeam(beam).net;
	const angle = new Float64Array(n + 1);
	let th = 0, om = 0;
	for (let i = 1; i <= n; i++) {
		// The arms shorten as the beam tilts, so the torque falls with cos(angle).
		om += ((net * Math.cos(th)) / inertia) * dt; th += om * dt;
		if (Math.abs(th) >= limit) { th = Math.sign(th) * limit; om = 0; }
		angle[i] = th;
	}
	return {beam, duration: o.duration, dt, n, angle};
};
/** Tilt of the beam at time t, in radians (anticlockwise positive: the left end goes down). */
export const beamAngleAt = (run: BeamRun, t: number) => { const u = Math.min(run.n, Math.max(0, t / run.dt)), i = Math.min(run.n - 1, Math.floor(u)); return run.angle[i] + (run.angle[i + 1] - run.angle[i]) * (u - i); };
