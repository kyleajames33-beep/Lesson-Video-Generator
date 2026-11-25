// phys-y12-m8-v04 (Year 12 Physics M8 V04: the HR diagram, how does the HR diagram distinguish brightness, temperature
// and stellar stage?). Lesson lookups and every displayed number. Every change is keyed to the frame at which its cue
// PHRASE is spoken (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import below to
// the measured take re-times the whole video.
// Narration check (25 November 2026): the prepared lesson.json, the brief 259 source audit and the current design
// (Revision 3) carry identical narration (6,067 characters).
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m8-v04/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m8-v04: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m8-v04: no response hold in ' + id);
	return h;
};
/** Latest safe frame for a visual change in a scene (no change in its last 2 s). */
export const cap = (id: string, f: number) => Math.min(f, dur(id) - 64);

// ---------------------------------------------------------------- numbers (design "Numbers used")
/** Sun (IAU 2015; site): L☉ = 3.828 × 10²⁶ W (screen 3.8 × 10²⁶); T = 5772 K (screen 5800 K). */
export const L_SUN_W = 3.828e26, T_SUN = 5800;
/** Proxima Centauri: 4.246 ly (screen 4.2), L ≈ 0.0016 L☉ (screen 0.002), 3040 K. Rigel: about 860 ly, 10⁵ L☉, 12 100 K. Sun at 1 AU = 1.58 × 10⁻⁵ ly. */
export const PROX = {d: 4.246, L: 0.0016, T: 3040}, RIGEL = {d: 860, L: 1e5, T: 12100}, SUN_D_LY = 1.496e11 / 9.461e15;
/** Apparent brightness ∝ L/d² (relative units). */
export const appB = (L: number, dLy: number) => L / (dLy * dLy);
/** Same-temperature rule: R ratio = √(L ratio): 100 → 10. */
export const SAME_T_L = 100, SAME_T_R = Math.sqrt(SAME_T_L);
/** Betelgeuse: about 3600 K, about 10⁵ L☉, about 764 R☉ = 3.55 AU (R☉ = 6.957 × 10⁸ m, 1 AU = 1.496 × 10¹¹ m); Mars 1.52 AU. */
export const BETEL = {T: 3600, L: 1e5, R: 764}, R_SUN_M = 6.957e8, AU_M = 1.496e11, BETEL_AU = (BETEL.R * R_SUN_M) / AU_M;
export const ORBITS_AU = {Mercury: 0.39, Venus: 0.72, Earth: 1.0, Mars: 1.52} as const;
/** The two red stars: 3500 K, 0.01 and 10⁴ L☉: R = 0.27 and 272 R☉; ratio √10⁶ = 1000. */
export const RED_T = 3500, RED_LO = 0.01, RED_HI = 1e4, RED_RATIO = Math.sqrt(RED_HI / RED_LO);
/** Aldebaran (point): 3900 K, 440 L☉. Sirius A: 9940 K, 25 L☉. Sirius B (Bond et al. 2017): 25 369 K (about 25 000), 0.0245 L☉ (about 0.025), 5634 km (about 5600); Earth 6371 km; width ratio 0.88. */
export const ALDEB = {T: 3900, L: 440}, SIRIUS_A = {T: 9940, L: 25}, SIRIUS_B = {T: 25000, L: 0.025, km: 5634}, EARTH_KM = 6371, SB_RATIO = SIRIUS_B.km / EARTH_KM;
/** Worked reading: 4000 K, 100 L☉; main sequence at 4000 K ≈ 0.1 L☉; ratio 1000; √1000 = 31.6 ≈ 32. */
export const W_T = 4000, W_L = 100, W_MS = 0.1, W_RATIO = W_L / W_MS, W_R = Math.sqrt(W_RATIO);
/** Attempt 1: 450 / 0.5 = 900; √900 = 30; slip 900. */
export const A1_LA = 0.5, A1_LB = 450, A1_T = 5000, A1_AREA = A1_LB / A1_LA, A1_R = Math.sqrt(A1_AREA);

export const HEAD = 'How does the HR diagram distinguish brightness, temperature and stellar stage?';
export const HEAD_NEXT = 'Why do main-sequence stars release energy by combining light nuclei?';
export const HEAD_SIZE = 50;
export const ACCENT = '#9c5a00';
