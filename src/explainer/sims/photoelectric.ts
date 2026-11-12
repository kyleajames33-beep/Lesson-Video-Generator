// A photoelectric bench: light of one frequency on a metal surface. One photon gives its
// energy hf to one electron; the electron escapes only if hf is at least the metal's work
// function, and then leaves with at most hf minus the work function. Plain TypeScript, no
// React. Frequencies in hertz, wavelengths in metres, energies in electronvolts unless a
// name says joules.
import {LIGHT_C, PLANCK_H} from './blackbody';

/** The charge on one electron, in coulombs (also the number of joules in one electronvolt), and its mass in kg. */
export const ELECTRON_CHARGE = 1.602176634e-19, ELECTRON_MASS = 9.1093837e-31;

export type Light = {frequency: number} | {wavelength: number};
const frequencyOf = (light: Light) => ('frequency' in light ? light.frequency : LIGHT_C / light.wavelength);
/** One photon of this light: its frequency, wavelength and energy. */
export const photon = (light: Light) => {
	const frequency = frequencyOf(light), joules = PLANCK_H * frequency;
	return {frequency, wavelength: LIGHT_C / frequency, joules, eV: joules / ELECTRON_CHARGE};
};

export type PhotoResult = {
	photonEV: number; workFunction: number;
	/** True when one photon has enough energy to free an electron. */
	emits: boolean;
	/** Largest kinetic energy of the freed electrons (0 when none are freed), in eV and in joules. */
	kMaxEV: number; kMaxJ: number;
	/** The reverse voltage that just stops the fastest electrons, in volts (the same number as kMaxEV). */
	stoppingVoltage: number;
	/** Speed of the fastest electrons in m/s (from kinetic energy = half m v squared). */
	maxSpeed: number;
	/** The lowest frequency, and longest wavelength, that frees electrons from this metal. */
	thresholdFrequency: number; thresholdWavelength: number;
};
/** What this light does to a metal with this work function (eV). Brightness plays no part here: it only sets how many electrons leave. */
export const photoelectric = (light: Light, workFunction: number): PhotoResult => {
	const p = photon(light), spare = p.eV - workFunction, emits = spare >= 0, kMaxEV = emits ? spare : 0, kMaxJ = kMaxEV * ELECTRON_CHARGE;
	const thresholdFrequency = (workFunction * ELECTRON_CHARGE) / PLANCK_H;
	return {photonEV: p.eV, workFunction, emits, kMaxEV, kMaxJ, stoppingVoltage: kMaxEV, maxSpeed: Math.sqrt((2 * kMaxJ) / ELECTRON_MASS), thresholdFrequency, thresholdWavelength: LIGHT_C / thresholdFrequency};
};
/**
 * The photocurrent, in relative units, for this light at `intensity` (relative brightness)
 * with `voltage` volts across the cell (negative: a reverse voltage that pushes electrons
 * back). Above zero volts every freed electron is collected, so the current is set by the
 * brightness alone. Between zero and the stopping voltage it falls in a straight line: a
 * simple model of a real cell's curve, whose exact shape depends on the cell.
 */
export const photocurrent = (light: Light, workFunction: number, intensity: number, voltage = 0) => {
	const r = photoelectric(light, workFunction);
	if (!r.emits || intensity <= 0) return 0;
	if (voltage >= 0) return intensity;
	return r.stoppingVoltage <= 0 || voltage <= -r.stoppingVoltage ? 0 : intensity * (1 + voltage / r.stoppingVoltage);
};
/** Points for a graph of largest kinetic energy (eV) against frequency (Hz): flat at zero up to the threshold, then a straight line of gradient h / e. */
export const kMaxLine = (workFunction: number, toFrequency: number) => {
	const f0 = (workFunction * ELECTRON_CHARGE) / PLANCK_H;
	return {frequency: Float64Array.from([0, Math.min(f0, toFrequency), toFrequency]), kMaxEV: Float64Array.from([0, 0, Math.max(0, (PLANCK_H * toFrequency) / ELECTRON_CHARGE - workFunction)]), threshold: f0};
};
/**
 * Fit a straight line through measured points of stopping voltage (V) against frequency
 * (Hz): its gradient x e is a value for Planck's constant, its frequency intercept is the
 * threshold frequency, and its voltage intercept gives the work function in eV.
 */
export const fitStoppingVoltage = (points: readonly (readonly [frequency: number, voltage: number])[]) => {
	const n = points.length, mx = points.reduce((s, p) => s + p[0], 0) / n, my = points.reduce((s, p) => s + p[1], 0) / n;
	const gradient = points.reduce((s, p) => s + (p[0] - mx) * (p[1] - my), 0) / points.reduce((s, p) => s + (p[0] - mx) ** 2, 0), intercept = my - gradient * mx;
	return {gradient, intercept, planck: gradient * ELECTRON_CHARGE, thresholdFrequency: -intercept / gradient, workFunction: -intercept};
};
