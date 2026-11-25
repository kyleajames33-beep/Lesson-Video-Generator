// phys-y12-m8-v03 (Year 12 Physics M8 V03: stellar spectra and classes, how can spectra classify stars and reveal
// their temperature?). Lesson lookups and every displayed number. Every change is keyed to the frame at which its cue
// PHRASE is spoken (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import below to
// the measured take re-times the whole video.
// Narration check (25 November 2026): the prepared lesson.json, the brief 259 source audit and the current design
// (Revision 3) carry identical narration (6,303 characters).
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m8-v03/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m8-v03: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m8-v03: no response hold in ' + id);
	return h;
};
/** Latest safe frame for a visual change in a scene (no change in its last 2 s). */
export const cap = (id: string, f: number) => Math.min(f, dur(id) - 64);

// ---------------------------------------------------------------- numbers (design "Numbers used")
/** HSC data sheet. */
export const H = 6.626e-34, C = 3.0e8, B = 2.898e-3, EV = 1.602e-19, HC = H * C;
/** Line wavelengths (NIST, nm). */
export const HA = 656.3, HBETA = 486.1, HG = 434.0, HD = 410.2, CA_K = 393.4, CA_H = 396.8, HE1A = 447.1, HE1B = 587.6, HE2 = 468.6, NA_D = 589.0;
export const TIO = [476, 517, 545, 616, 671, 706] as const;
export const H_LINES = [HD, HG, HBETA, HA] as const;
/** Scene 2: Hα photon E = hc/λ = 3.03 × 10⁻¹⁹ J = 1.89 eV. Scene 3: Na D 589.0 nm = 3.37 × 10⁻¹⁹ J = 2.11 eV. */
export const E_HA = HC / (HA * 1e-9), E_HA_EV = E_HA / EV, E_NA = HC / (NA_D * 1e-9), E_NA_EV = E_NA / EV;
/** Wien: λmax = b/T (nm). Thermometer stops: 3000, 4000, 5800, 7000, 10 000, 30 000 K give 966, 725, 500, 414, 290, 96.6 nm. */
export const peakNmOf = (T: number) => (B / T) * 1e9;
export const THERMO_T = [3000, 4000, 5800, 7000, 10000, 30000] as const;
/** Scene 5: the Sun, 5.0 × 10⁻⁷ m: 5796 K ≈ 5.8 × 10³ K; slip b × λ = 1.4 × 10⁻⁹. */
export const SUN_LAM = 5.0e-7, SUN_T = B / SUN_LAM, SUN_SLIP = B * SUN_LAM;
/** Hydrogen: n = 2 is 10.2 eV above n = 1; ionisation 13.6 eV. Ionisation energies: He 24.6 eV, Ca 6.11 eV. */
export const H_N2 = 13.6 * (1 - 1 / 4), H_ION = 13.6, HE_ION = 24.6, CA_ION = 6.11;
/** Composition by mass: H ≈ 73%, He ≈ 25%, other ≈ 2%. */
export const COMP = {h: 73, he: 25, other: 2} as const;
/** Scene 10: 414 nm gives 7.0 × 10³ K, class F. */
export const W_LAM = 4.14e-7, W_T = B / W_LAM;
/** Attempt 1: 725 nm gives 3997 K ≈ 4.0 × 10³ K, class K; slip b/725 = 4.0 × 10⁻⁶ K. */
export const A1_LAM = 7.25e-7, A1_T = B / A1_LAM, A1_SLIP = B / 725;
/** Hydrogen line strength against temperature (schematic hump peaking near 10 000 K, log axis). */
export const hStrength = (T: number) => Math.exp(-0.5 * ((Math.log10(T) - 4) / 0.2) ** 2);
/** Handoff: luminosity ratio about 10⁶ (illustrative red dwarf 0.01 L☉ against red supergiant 10⁴ L☉). */
export const LUM_RATIO = 1e6;

export const HEAD = 'How can spectra classify stars and reveal their temperature?';
export const HEAD_NEXT = 'How does the HR diagram distinguish brightness, temperature and stellar stage?';
export const HEAD_SIZE = 50;
export const ACCENT = '#9c5a00';
