// phys-y12-m8-v02 (Year 12 Physics M8 V02: evidence for the Big Bang, what evidence supports an expanding hot early
// Universe?). Lesson lookups and every displayed number. Every change is keyed to the frame at which its cue
// PHRASE is spoken (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import below to
// the measured take re-times the whole video.
// Narration check (25 November 2026): the prepared lesson.json, the brief 259 source audit and the current design
// (Revision 3) carry identical narration (6,518 characters).
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m8-v02/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m8-v02: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m8-v02: no response hold in ' + id);
	return h;
};
/** Latest safe frame for a visual change in a scene (no change in its last 2 s). */
export const cap = (id: string, f: number) => Math.min(f, dur(id) - 64);

// ---------------------------------------------------------------- numbers (design "Numbers used")
/** Site and data-sheet values: c = 3.00 × 10⁵ km s⁻¹; H₀ = 70 km s⁻¹ Mpc⁻¹; 1 Mpc = 3.086 × 10¹⁹ km = 3.26 × 10⁶ ly; b = 2.898 × 10⁻³ m K. */
export const C_KMS = 3.0e5, H0 = 70, MPC_KM = 3.086e19, MPC_LY = 3.26e6, B = 2.898e-3, YEAR = 3.156e7;
/** Hydrogen lines (NIST, nm). */
export const HA = 656.3, HB = 486.1, HG = 434.0, HD = 410.2;
/** Redshift slider: λobs = (1 + z)λrest; v ≈ cz. z = 0.02, 0.04, 0.088 give Hα 669.4, 682.6, 714.1 nm and v = 6.0 × 10³, 1.2 × 10⁴, 2.64 × 10⁴ km s⁻¹. */
export const SLIDER_Z = [0, 0.02, 0.04, 0.088] as const;
export const lamObs = (rest: number, z: number) => rest * (1 + z);
/** Hubble graph: gradient 28 000 / 400 = 70; 200 Mpc → 14 000 km s⁻¹. Illustrative points scattered about v = 70d (two on the line). */
export const HUBBLE_PTS: readonly (readonly [number, number])[] = [[25, 3300], [48, 2600], [70, 6100], [96, 5900], [125, 9600], [160, 10400], [200, 14000], [235, 17600], [275, 18300], [310, 23200], [350, 23100], [400, 28000], [440, 32300], [470, 31600]];
/** Hubble time 1/H₀ = 3.086 × 10¹⁹ km / 70 km s⁻¹ = 4.41 × 10¹⁷ s = 14.0 billion years. */
export const T_HUBBLE_S = MPC_KM / H0, T_HUBBLE_GYR = T_HUBBLE_S / YEAR / 1e9;
/** Worked example (site): z = 58/656 = 0.0884; v = 2.65 × 10⁴ km s⁻¹; d = 379 ≈ 380 Mpc ≈ 1.2 × 10⁹ ly; slip 714/656 = 1.09. */
export const W_REST = 656, W_OBS = 714, W_Z = (W_OBS - W_REST) / W_REST, W_Z_SHOWN = 0.0884, W_V = C_KMS * W_Z_SHOWN, W_V_SHOWN = 2.65e4, W_D = W_V_SHOWN / H0, W_LY = 380 * MPC_LY, W_SLIP = W_OBS / W_REST;
/** Andromeda: 0.77 Mpc; H₀d = 54 km s⁻¹ away; observed approach about 300 km s⁻¹ (relative to the Sun). */
export const AND_D = 0.77, AND_HUB = H0 * AND_D, AND_OBS = 300;
/** CMB (COBE FIRAS): 2.725 K; λmax = 1.06 × 10⁻³ m; 3000 K: 9.66 × 10⁻⁷ m; 3000/2.725 = 1101; 0.97 μm × 1100 = 1.06 mm. Dipole 3.36 mK: 2.728 and 2.722 K. */
export const T_CMB = 2.725, LAM_CMB = B / T_CMB, T_EMIT = 3000, LAM_EMIT = B / T_EMIT, STRETCH = T_EMIT / T_CMB, DIPOLE = 3.36e-3;
/** Penzias and Wilson's wavelength 7.35 cm. */
export const PW_CM = 7.35;
/** Helium: predicted 25% (last time's count), observed 24 to 25% in the least processed gas. */
export const HE_PRED = 25, HE_OBS_LO = 24, HE_OBS_HI = 25;
/** Supernova light curves (schematic): 60 days nearby; z = 1 stretches by 1 + z = 2 to 120 days. */
export const SN_DAYS = 60, SN_Z = 1;
/** Attempt 1: z = 31.6/393.4 = 0.0803; v = 2.41 × 10⁴ km s⁻¹; d = 344 ≈ 340 Mpc; slip with v in m s⁻¹: 3.4 × 10⁵ "Mpc". */
export const A1_REST = 393.4, A1_OBS = 425.0, A1_Z = (A1_OBS - A1_REST) / A1_REST, A1_V = C_KMS * 0.0803, A1_D = 2.41e4 / H0, A1_SLIP = 2.41e7 / H0;

export const HEAD = 'What evidence supports an expanding hot early Universe?';
export const HEAD_NEXT = 'How can spectra classify stars and reveal their temperature?';
export const HEAD_SIZE = 50;
export const ACCENT = '#9c5a00';
