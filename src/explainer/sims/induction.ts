// Flux and induction: the magnetic flux through a loop or coil as it turns, as it moves,
// or as the field through it changes, and the emf that change induces (Faraday's law:
// emf = -N dPhi/dt), with the direction Lenz's law gives. Plain TypeScript, no React.
// The whole run is worked out once and stored, so a picture of the coil, the flux strip,
// the emf strip and a meter needle all read the same numbers. SI units: tesla, square
// metres, webers, volts, seconds.
//
// Signs. The coil has a normal (the direction its face points). Flux is positive when the
// field passes through along the normal. A positive emf drives a current that is
// anticlockwise when you look at the coil from the side its normal points to; that current
// makes a field along the normal.
import {MU0} from './magnetic-field';

export type FluxSource =
	/** A coil turning at a steady rate in a uniform field: flux = B A cos(angle), angle = 2 pi f t + phase (0: face on to the field). */
	| {kind: 'rotating'; b: number; area: number; frequency: number; phase?: number}
	/** A fixed coil in a field that changes with time. `angle` is between the coil's normal and the field (default 0). */
	| {kind: 'field'; area: number; angle?: number; b: (t: number) => number}
	/** A rod of this length sliding on rails across a uniform field: the loop's area is length x position(t). */
	| {kind: 'rod'; b: number; length: number; position: (t: number) => number}
	/**
	 * A small magnet moving along the coil's axis. `moment` is its dipole moment in A m^2,
	 * pointing along the coil's normal (negative: pointing against it); `radius` is the coil's
	 * radius; position(t) is the magnet's distance from the coil's centre along the axis.
	 */
	| {kind: 'magnet'; moment: number; radius: number; position: (t: number) => number}
	/** Any flux through one turn, in webers, as a function of time. */
	| {kind: 'custom'; flux: (t: number) => number};

export type InductionConfig = {
	source: FluxSource;
	/** Number of turns (default 1). */
	turns?: number;
	/** Length of the run in seconds. */
	duration: number;
	/** Number of stored steps (default 600). */
	steps?: number;
	/** Resistance of the closed circuit in ohms. Left out, the circuit is open and no current is reported. */
	resistance?: number;
};
export type InductionRun = {
	config: InductionConfig; duration: number; dt: number; n: number;
	t: Float64Array;
	/** Flux through one turn (Wb), flux linkage N x flux (Wb), and induced emf (V) at each step. */
	flux: Float64Array; linkage: Float64Array; emf: Float64Array;
	/** Largest size the emf reaches in the run. */
	peakEmf: number;
};
export type LenzSense = {
	/** What the flux along the normal is doing. */
	change: 'increasing' | 'decreasing' | 'steady';
	/** Direction of the induced current's own field: +1 along the normal, -1 against it, 0 for none. It always opposes the change. */
	inducedField: 1 | -1 | 0;
	/** The induced current, seen from the side the normal points to. */
	current: 'anticlockwise' | 'clockwise' | 'none';
};
export type InductionState = {t: number; flux: number; linkage: number; emf: number; /** emf / resistance (0 for an open circuit). */ current: number; /** For a rotating coil: angle between normal and field, radians. */ angle: number; lenz: LenzSense};

/** Flux through one turn at time t. */
export const fluxAt = (source: FluxSource, t: number): number => {
	if (source.kind === 'rotating') return source.b * source.area * Math.cos(2 * Math.PI * source.frequency * t + (source.phase ?? 0));
	if (source.kind === 'field') return source.b(t) * source.area * Math.cos(source.angle ?? 0);
	if (source.kind === 'rod') return source.b * source.length * source.position(t);
	if (source.kind === 'magnet') { const z = source.position(t), a = source.radius; return (MU0 * source.moment * a * a) / (2 * (a * a + z * z) ** 1.5); }
	return source.flux(t);
};

/** Work out the flux and the induced emf over the whole run. Deterministic. */
export const runInduction = (config: InductionConfig): InductionRun => {
	if (!(config.duration > 0)) throw new RangeError('runInduction: duration must be positive');
	const n = Math.max(2, Math.round(config.steps ?? 600)), dt = config.duration / n, N = config.turns ?? 1, h = dt / 64;
	const t = new Float64Array(n + 1), flux = new Float64Array(n + 1), linkage = new Float64Array(n + 1), emf = new Float64Array(n + 1);
	let peakEmf = 0;
	for (let i = 0; i <= n; i++) {
		const ti = i * dt;
		t[i] = ti; flux[i] = fluxAt(config.source, ti); linkage[i] = N * flux[i];
		// Faraday's law, from the slope of the flux at this instant.
		emf[i] = (-N * (fluxAt(config.source, ti + h) - fluxAt(config.source, ti - h))) / (2 * h);
		peakEmf = Math.max(peakEmf, Math.abs(emf[i]));
	}
	return {config, duration: config.duration, dt, n, t, flux, linkage, emf, peakEmf};
};

const lerp = (a: Float64Array, u: number) => { const i = Math.min(a.length - 2, Math.floor(u)), s = u - i; return a[i] + (a[i + 1] - a[i]) * s; };
/** Flux, emf, current and the Lenz's-law direction at time t (clamped to the run). */
export const inductionAt = (run: InductionRun, t: number): InductionState => {
	const time = Math.min(run.duration, Math.max(0, t)), u = time / run.dt;
	const emf = lerp(run.emf, u), flux = lerp(run.flux, u), src = run.config.source;
	const quiet = Math.abs(emf) <= 1e-6 * Math.max(run.peakEmf, 1e-300);
	const lenz: LenzSense = quiet ? {change: 'steady', inducedField: 0, current: 'none'}
		: emf > 0 ? {change: 'decreasing', inducedField: 1, current: 'anticlockwise'} : {change: 'increasing', inducedField: -1, current: 'clockwise'};
	const R = run.config.resistance;
	return {t: time, flux, linkage: lerp(run.linkage, u), emf, current: R && R > 0 ? emf / R : 0, angle: src.kind === 'rotating' ? 2 * Math.PI * src.frequency * time + (src.phase ?? 0) : src.kind === 'field' ? src.angle ?? 0 : 0, lenz};
};

// Textbook results, for readouts and checks.
/** Average emf when the flux through each of N turns changes by dPhi in time dt: emf = -N dPhi / dt. */
export const faradayEmf = (turns: number, dPhi: number, dt: number) => (-turns * dPhi) / dt;
/** Largest emf of a coil turning in a uniform field: N B A omega. */
export const generatorPeakEmf = (turns: number, b: number, area: number, frequency: number) => turns * b * area * 2 * Math.PI * frequency;
/** Size of the emf across a rod of length l moving at speed v across a field B: B l v. */
export const rodEmf = (b: number, length: number, speed: number) => b * length * speed;
/** Flux through a flat loop: B A cos(angle), angle between the normal and the field. */
export const fluxThrough = (b: number, area: number, angle = 0) => b * area * Math.cos(angle);
