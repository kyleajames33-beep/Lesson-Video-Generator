// Black-body radiation: how bright a perfect radiator is at each wavelength (Planck's law),
// where its curve peaks (Wien's law), its total output (Stefan-Boltzmann), and the
// classical curve that fails at short wavelengths. Plain TypeScript, no React. SI units:
// metres, kelvin, watts.

/** Planck's constant (J s), the speed of light (m/s), Boltzmann's constant (J/K), Wien's constant (m K), the Stefan-Boltzmann constant (W m^-2 K^-4). */
export const PLANCK_H = 6.62607015e-34, LIGHT_C = 2.99792458e8, BOLTZMANN_K = 1.380649e-23, WIEN_B = 2.897771955e-3, STEFAN_SIGMA = 5.670374419e-8;

/** Planck's law: power per unit area, per unit solid angle, per metre of wavelength (W sr^-1 m^-3). */
export const planck = (wavelength: number, temperature: number) => {
	const x = (PLANCK_H * LIGHT_C) / (wavelength * BOLTZMANN_K * temperature);
	return x > 700 ? 0 : (2 * PLANCK_H * LIGHT_C * LIGHT_C) / (wavelength ** 5 * Math.expm1(x));
};
/** The classical (Rayleigh-Jeans) prediction, which climbs without limit as the wavelength shrinks. Same units as `planck`. */
export const classicalRadiance = (wavelength: number, temperature: number) => (2 * LIGHT_C * BOLTZMANN_K * temperature) / wavelength ** 4;
/** Wien's law: the wavelength (m) at which the curve peaks. */
export const wienPeak = (temperature: number) => WIEN_B / temperature;
/** Wien's law the other way: the temperature (K) of a body whose curve peaks at this wavelength. */
export const temperatureFromPeak = (wavelength: number) => WIEN_B / wavelength;
/** Stefan-Boltzmann law: total power radiated per square metre of surface (W m^-2). */
export const radiatedPower = (temperature: number) => STEFAN_SIGMA * temperature ** 4;

export type BlackBodyCurve = {
	temperature: number;
	/** Wavelengths in metres, and the radiance at each (W sr^-1 m^-3). */
	wavelength: Float64Array; radiance: Float64Array;
	/** The classical prediction at the same wavelengths. */
	classical: Float64Array;
	peak: {wavelength: number; radiance: number};
};
/** The curve for one temperature between two wavelengths (default 361 points). */
export const blackBodyCurve = (o: {temperature: number; from: number; to: number; points?: number}): BlackBodyCurve => {
	if (!(o.temperature > 0 && o.from > 0 && o.to > o.from)) throw new RangeError('blackBodyCurve: give a positive temperature and from < to');
	const n = Math.max(2, o.points ?? 361), wavelength = new Float64Array(n), radiance = new Float64Array(n), classical = new Float64Array(n);
	for (let i = 0; i < n; i++) {
		const l = o.from + ((o.to - o.from) * i) / (n - 1);
		wavelength[i] = l; radiance[i] = planck(l, o.temperature); classical[i] = classicalRadiance(l, o.temperature);
	}
	const at = wienPeak(o.temperature);
	return {temperature: o.temperature, wavelength, radiance, classical, peak: {wavelength: at, radiance: planck(at, o.temperature)}};
};
