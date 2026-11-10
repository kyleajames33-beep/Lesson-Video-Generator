// Waves: displacement as a function of place and time, in real units.
// Engine only (no drawing, no React). Everything is a formula of position and time, so
// any frame can be worked out on its own and the picture, the labels and the readouts
// always agree. It covers the cases a waves unit draws again and again:
//   - a travelling wave, and the same wave as moving particles (transverse or longitudinal);
//   - superposition of waves or pulses, including two opposite waves making a standing wave;
//   - standing-wave modes of strings and pipes (nodes, antinodes, wavelength);
//   - two sources: path difference and where they reinforce or cancel;
//   - wavefronts from a moving source (Doppler effect);
//   - refraction at a boundary (Snell's law, critical angle).
// Work in SI units (or any consistent units) and let the drawing component scale them.

const TAU = 2 * Math.PI;

// ------------------------------------------------------------ travelling waves
export type Wave = {
	amplitude: number; wavelength: number; period: number;
	/** 1 travels towards +x (default), -1 towards -x. */
	direction?: 1 | -1;
	/** Phase at the origin at t = 0, in radians. */
	phase?: number;
	/** Where the wave starts from (default 0). */
	origin?: number;
	/** If true the wave only exists where it has had time to reach: it spreads out from `origin` starting at t = 0. */
	front?: boolean;
};
export const waveSpeed = (w: Wave) => w.wavelength / w.period;
export const waveFrequency = (w: Wave) => 1 / w.period;
/** Displacement of the medium at position x and time t. */
export const displacement = (w: Wave, x: number, t: number) => {
	const dir = w.direction ?? 1, d = dir * (x - (w.origin ?? 0));
	if (w.front && (d < 0 || d > waveSpeed(w) * t)) return 0;
	return w.amplitude * Math.sin(TAU * (t / w.period - d / w.wavelength) + (w.phase ?? 0));
};
/** Superposition: add the displacements of several waves at one place and time. */
export const sumAt = (waves: readonly Wave[], x: number, t: number) => waves.reduce((s, w) => s + displacement(w, x, t), 0);

export type Pulse = {amplitude: number; width: number; /** centre at t = 0 */ start: number; /** signed: positive moves towards +x */ speed: number};
/** A single smooth bump travelling without changing shape. */
export const pulseAt = (p: Pulse, x: number, t: number) => p.amplitude * Math.exp(-(((x - p.start - p.speed * t) / (p.width / 2)) ** 2) * 2);

/**
 * Where a particle of the medium is at time t. `x0` is its rest position. In a transverse
 * wave it moves across the direction of travel; in a longitudinal wave it moves back and
 * forth along it, which bunches particles into compressions.
 */
export const particleAt = (fn: (x: number, t: number) => number, x0: number, t: number, mode: 'transverse' | 'longitudinal'): readonly [number, number] => {
	const s = fn(x0, t);
	return mode === 'transverse' ? [x0, s] : [x0 + s, 0];
};

// -------------------------------------------------------------- standing waves
export type Ends = 'fixed-fixed' | 'open-open' | 'closed-open';
export type StandingMode = {length: number; ends: Ends; harmonic: number; wavelength: number; nodes: number[]; antinodes: number[]};
/**
 * Standing-wave mode number `harmonic` (1 is the fundamental). A string fixed at both ends
 * and a pipe open at both ends fit whole half-wavelengths. A pipe closed at x = 0 and open
 * at the other end fits odd quarter-wavelengths, so only harmonics 1, 3, 5... exist.
 */
export const standingMode = (length: number, harmonic: number, ends: Ends = 'fixed-fixed'): StandingMode => {
	if (!Number.isInteger(harmonic) || harmonic < 1) throw new Error('standingMode: harmonic must be a whole number from 1.');
	if (ends === 'closed-open' && harmonic % 2 === 0) throw new Error('standingMode: a pipe closed at one end only has odd harmonics (1, 3, 5...).');
	const wavelength = ends === 'closed-open' ? (4 * length) / harmonic : (2 * length) / harmonic;
	const half = wavelength / 2, a: number[] = [], b: number[] = [];
	const limit = length * (1 + 1e-9);
	for (let i = 0; i * half <= limit; i++) a.push(Math.min(length, i * half));
	for (let i = 0; (i + 0.5) * half <= limit; i++) b.push(Math.min(length, (i + 0.5) * half));
	// a starts at x = 0: displacement nodes for a fixed end or a closed pipe end, antinodes for an open end.
	return ends === 'open-open' ? {length, ends, harmonic, wavelength, nodes: b, antinodes: a} : {length, ends, harmonic, wavelength, nodes: a, antinodes: b};
};
/** Displacement of a standing wave at x and t. `amplitude` is the largest displacement, at an antinode. */
export const standingAt = (mode: StandingMode, amplitude: number, period: number, x: number, t: number) => {
	const k = TAU / mode.wavelength, shape = mode.ends === 'open-open' ? Math.cos(k * x) : Math.sin(k * x);
	return amplitude * shape * Math.cos((TAU * t) / period);
};

// ----------------------------------------------------------------- two sources
export type Source = {x: number; y: number; /** phase lead in radians (default 0: in step) */ phase?: number};
export const pathDifference = (a: Source, b: Source, px: number, py: number) => Math.hypot(px - b.x, py - b.y) - Math.hypot(px - a.x, py - a.y);
/**
 * What two sources of the same wavelength do at a point. `wavelengths` is the path
 * difference counted in wavelengths: a whole number means the waves arrive in step and
 * reinforce; a half number means they arrive out of step and cancel. `strength` runs
 * from 0 (cancel) to 1 (fully reinforce).
 */
export const interferenceAt = (a: Source, b: Source, px: number, py: number, wavelength: number) => {
	const diff = pathDifference(a, b, px, py), wavelengths = diff / wavelength;
	const lag = TAU * wavelengths + (a.phase ?? 0) - (b.phase ?? 0);
	const strength = Math.abs(Math.cos(lag / 2));
	return {pathDifference: diff, wavelengths, strength, kind: strength > 0.92 ? 'reinforce' as const : strength < 0.38 ? 'cancel' as const : 'partly' as const};
};
/** Combined displacement of circular waves of unit amplitude from several sources. */
export const fieldAt = (sources: readonly Source[], wavelength: number, period: number, x: number, y: number, t: number) =>
	sources.reduce((s, src) => s + Math.sin(TAU * (t / period - Math.hypot(x - src.x, y - src.y) / wavelength) + (src.phase ?? 0)), 0);
/** Far from two in-step sources a distance d apart: directions (radians from straight ahead) of the bright lines, d sin(angle) = m x wavelength. */
export const brightAngles = (d: number, wavelength: number) => { const out: {m: number; angle: number}[] = []; for (let m = -Math.floor(d / wavelength); m <= d / wavelength; m++) out.push({m, angle: Math.asin((m * wavelength) / d)}); return out; };
/** Directions of the dark lines, d sin(angle) = (m + 1/2) x wavelength. */
export const darkAngles = (d: number, wavelength: number) => { const out: {m: number; angle: number}[] = []; for (let m = -Math.floor(d / wavelength + 0.5); m + 0.5 <= d / wavelength; m++) out.push({m, angle: Math.asin(((m + 0.5) * wavelength) / d)}); return out; };
/** Relative brightness (0 to 1) on a far screen at this angle, for two slits d apart, each of width `slitWidth` (0: ignore the single-slit envelope). */
export const doubleSlitBrightness = (d: number, wavelength: number, angle: number, slitWidth = 0) => {
	const beta = (Math.PI * d * Math.sin(angle)) / wavelength, alpha = (Math.PI * slitWidth * Math.sin(angle)) / wavelength;
	const envelope = slitWidth > 0 && Math.abs(alpha) > 1e-9 ? (Math.sin(alpha) / alpha) ** 2 : 1;
	return Math.cos(beta) ** 2 * envelope;
};

// ------------------------------------------------------------------ wavefronts
export type Wavefront = {x: number; y: number; r: number; /** time since it was sent out */ age: number};
/**
 * Crests sent out one period apart by a source that may be moving. Each crest is a circle
 * centred where the source was when it sent it, growing at the wave speed. In front of a
 * moving source the circles crowd together; behind it they spread apart (Doppler effect).
 * For troughs, pass `offset: 0.5`.
 */
export const wavefronts = (o: {source: (t: number) => readonly [number, number]; speed: number; period: number; t: number; maxRadius?: number; offset?: number}): Wavefront[] => {
	const out: Wavefront[] = [];
	for (let k = 0; ; k++) {
		const sent = (k + (o.offset ?? 0)) * o.period;
		if (sent > o.t) break;
		const age = o.t - sent, r = age * o.speed;
		if (o.maxRadius !== undefined && r > o.maxRadius) continue;
		const [x, y] = o.source(sent);
		out.push({x, y, r, age});
	}
	return out;
};
/**
 * Frequency heard when source and listener move along the line between them.
 * `sourceSpeed` is positive when the source moves towards the listener;
 * `listenerSpeed` is positive when the listener moves towards the source.
 */
export const dopplerFrequency = (o: {frequency: number; waveSpeed: number; sourceSpeed?: number; listenerSpeed?: number}) =>
	(o.frequency * (o.waveSpeed + (o.listenerSpeed ?? 0))) / (o.waveSpeed - (o.sourceSpeed ?? 0));

// ------------------------------------------------------------------ boundaries
/** Snell's law. Angles in radians from the normal. Returns null when the ray is totally internally reflected. */
export const refractionAngle = (n1: number, n2: number, incidence: number) => { const s = (n1 * Math.sin(incidence)) / n2; return Math.abs(s) > 1 ? null : Math.asin(s); };
/** Critical angle (radians) going from index n1 into a smaller index n2, or null if there is none. */
export const criticalAngle = (n1: number, n2: number) => (n2 < n1 ? Math.asin(n2 / n1) : null);
