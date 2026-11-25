// Lesson parts for phys-y12-m7-v10: the colour roles (design colour key, Revision 2, with root rule R1), the live
// photocell bench (painted multimeter, photocell and bench lamp; coded wiring, beam and electrons; electron emission
// gated by the photoelectric engine), the zinc surface strip and v09's parts re-exported.
// Colour key: photons amber packets; electrons navy dots; work function slate; kinetic energy orange; wave-model chips
// grey; beams coloured by wavelength (ultraviolet drawn violet with a "UV" tag); answers in dark-ink frames; mistakes
// slate (root rule R1).
import React from 'react';
import {INK, TONES} from '../../shared/tokens';
import {LPlate} from '../../physics/light/plates';
import type {Place} from '../../physics/light/plates';
import {BENCH_LAMP, METAL_PLATE, THERMAL_ANCHOR, nat} from '../../physics/light/thermal';
import {Beam, Electron, METER, Meter, PHOTOCELL, PHOTO_ANCHOR, PHOTO_PLATES, cellGeom} from '../../physics/light/photo';
import {wlColor} from '../../physics/light/spectrum';
import {photoelectric} from '../../sims/photoelectric';
import {AMBER, GREY, Lbl, NAVY, ORANGE, SLATE, Shrunk, Strip, V09_PLATES, fx, sci} from '../phys-y12-m7-v09/parts';
import {PHI} from './common';

export {AMBER, GREY, INK, Lbl, NAVY, ORANGE, SLATE, Shrunk, Strip, fx, sci};
type Pt = [number, number];
export const V10_PLATES = [...new Set([...V09_PLATES, ...PHOTO_PLATES, BENCH_LAMP.src, METAL_PLATE.src])];
export const UV = '#7d62b3', UV_INK = '#6b4fa0', RED_BEAM = wlColor(680), ORANGE_BEAM = wlColor(600);
export const VIOLET = TONES.violet;
/** Beam colour for a wavelength (ultraviolet drawn violet). */
export const beamCol = (nm: number) => (nm < 400 ? UV : wlColor(nm));

/** Screen aperture of a bench lamp at p (flip: facing left). */
export const lampAp = (p: Place, flip = false): Pt => {
	const A = THERMAL_ANCHOR.lampAp;
	const q = nat(BENCH_LAMP, p, A[0], A[1]);
	return flip ? [2 * p.x + p.w - q[0], q[1]] : q;
};
/** A deterministic 0..1 hash. */
export const h01 = (i: number, k = 1) => { const v = Math.sin(i * 127.1 + k * 311.7) * 43758.5453; return v - Math.floor(v); };

// ---------------------------------------------------------------- the live photocell bench
export const MP: Place = {x: 96, y: 300, w: 250}, CP: Place = {x: 430, y: 236, w: 320}, LP: Place = {x: 880, y: 340, w: 320};
export const CG = cellGeom(CP);
export const LA = lampAp(LP, true);
/** Electrons leaving the cathode (right) towards the anode wire (left): rate from brightness, top speed from K_max. */
export const Stream: React.FC<{t: number; nm: number; bright: number; on?: boolean; phi?: number; from?: Pt; to?: Pt; spread?: number; rate?: number; color?: string; vScale?: number}> = ({t, nm, bright, on = true, phi = PHI, from, to, spread, rate = 7, color = NAVY.stroke, vScale = 1}) => {
	const r = photoelectric({wavelength: nm * 1e-9}, phi);
	if (!on || !r.emits || r.kMaxEV < 0.02 || bright <= 0.01) return null;
	const a = from ?? [CG.cathode[0] - 6, CG.cathode[1]], b = to ?? [CG.anode[0] + 6, CG.anode[1]];
	const sp = spread ?? (CG.cBot[1] - CG.cTop[1]) * 0.42;
	const vmax = (60 + 120 * Math.sqrt(r.kMaxEV / 1.9)) * vScale;
	const N = Math.ceil(rate * bright * 3);
	return (
		<g>
			{Array.from({length: N}, (_, k) => {
				const period = 3, t0 = (k / N) * period, age = (((t - t0) % period) + period) % period;
				const v = vmax * (0.45 + 0.55 * h01(k, 3));
				const L = Math.hypot(b[0] - a[0], b[1] - a[1]);
				const u = (age * v) / L;
				if (u > 1) return null;
				const y = a[1] + (h01(k, 7) - 0.5) * 2 * sp;
				return <Electron key={k} x={a[0] + (b[0] - a[0]) * u} y={y + (b[1] - a[1]) * u * 0.2} r={8} color={color} />;
			})}
		</g>
	);
};
/** The bench: meter, photocell, flipped lamp, wiring and beam (the scene adds electrons and labels). */
export const Bench: React.FC<{nm: number; bright: number; reading: string; opacity?: number; beamO?: number}> = ({nm, bright, reading, opacity = 1, beamO = 1}) => {
	if (opacity <= 0.001) return null;
	const m1 = nat(METER, MP, PHOTO_ANCHOR.meterTerminals[0][0], PHOTO_ANCHOR.meterTerminals[0][1]);
	const m2 = nat(METER, MP, PHOTO_ANCHOR.meterTerminals[1][0], PHOTO_ANCHOR.meterTerminals[1][1]);
	const wire = (pts: Pt[]) => <path d={pts.map((q, i) => `${i ? 'L' : 'M'}${q[0]},${q[1]}`).join(' ')} fill="none" stroke={INK} strokeWidth={4} strokeLinejoin="round" />;
	return (
		<g opacity={opacity}>
			{wire([CG.t1, [CG.t1[0], 900], [m1[0], 900], m1])}
			{wire([CG.t2, [CG.t2[0], 922], [m2[0] + 30, 922], [m2[0] + 30, m2[1] + 40], [m2[0], m2[1] + 40], m2])}
			<Meter p={MP} reading={reading} />
			<LPlate spec={PHOTOCELL} p={CP} />
			<LPlate spec={BENCH_LAMP} p={LP} flip />
			<Beam a={LA} b={CG.cathode} wa={6 + 8 * bright} wb={12 + 30 * bright} color={beamCol(nm)} opacity={beamO} />
		</g>
	);
};
/** Relative photocurrent shown on the meter (brightness above threshold, else 0). */
export const reading = (nm: number, bright: number) => (photoelectric({wavelength: nm * 1e-9}, PHI).kMaxEV > 0.02 ? fx(bright, 1) : '0.0');
