// phys-y12-m8-v06 (Year 12 Physics M8 V06: stellar mass and element production, how does stellar mass change the
// elements a star can make?). Lesson lookups and every displayed number. Every change is keyed to the frame at which
// its cue PHRASE is spoken (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import
// below to the measured take re-times the whole video.
// Narration check (26 November 2026): the prepared lesson.json, the brief 259 source audit and the current design
// (Revision 3 with the 24 November coherence fix, narration unchanged) carry identical narration (6,361 characters,
// 18 scenes).
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m8-v06/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m8-v06: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m8-v06: no response hold in ' + id);
	return h;
};
/** Latest safe frame for a visual change in a scene (no change in its last 2 s). */
export const cap = (id: string, f: number) => Math.min(f, dur(id) - 64);

// ---------------------------------------------------------------- numbers (design "Numbers used")
/** HSC data sheet: 1 u = 931.5 MeV/c². AME2020 atomic masses: ⁴He 4.002603 u; ¹²C 12.000000 u; ¹⁶O 15.994915 u. */
export const U_MEV = 931.5, M_HE4 = 4.002603, M_C12 = 12.0, M_O16 = 15.994915;
/** Triple alpha: 3 × 4.002603 = 12.007809 u; Δm = 0.007809 u; 7.274 MeV (7.27). Slip: 12.000000 − 12.007809 = −0.0078 u. */
export const TA_R = 3 * M_HE4, TA_DM = TA_R - M_C12, TA_E = TA_DM * U_MEV, TA_SLIP = M_C12 - TA_R;
/** Alpha capture ¹²C + ⁴He → ¹⁶O: 0.007688 u, 7.16 MeV (screen tag). */
export const AC_DM = M_C12 + M_HE4 - M_O16, AC_E = AC_DM * U_MEV;
/** Ignition temperatures (author note b; K): H ~10⁷; He ~10⁸; C ~6 × 10⁸; Ne ~1.2 × 10⁹; O ~1.5 × 10⁹; Si ~3 × 10⁹. */
export const IGNITE = {H: 1e7, He: 1e8, C: 6e8, Ne: 1.2e9, O: 1.5e9, Si: 3e9} as const;
/** Sun's core now: 1.5 × 10⁷ K. */
export const T_SUN_CORE = 1.5e7;
/** Mass slider (design table): 1 and 4 M☉ reach about 10⁸ K (helium), end as C-O white dwarfs; 15 and 25 M☉ (more than about 8) reach about 3 × 10⁹ K (silicon), iron core then supernova. */
export const MASSES = [{m: 1, T: 1e8, fuel: 'helium', end: 'C-O white dwarf'}, {m: 4, T: 1e8, fuel: 'helium', end: 'C-O white dwarf'}, {m: 15, T: 3e9, fuel: 'silicon', end: 'iron core, then supernova'}, {m: 25, T: 3e9, fuel: 'silicon', end: 'iron core, then supernova'}] as const;
export const M_MASSIVE = 8;
/** 15 M☉ model stage durations (Woosley and Janka 2005, table 1). */
export const STAGES = [{f: 'H', t: '11 million yr'}, {f: 'He', t: '2 million yr'}, {f: 'C', t: '2000 yr'}, {f: 'Ne', t: '0.7 yr'}, {f: 'O', t: '2.6 yr'}, {f: 'Si', t: '18 days'}] as const;
/** Collapse (site lesson 10): under 1 s; radius about 10 to 15 km; about 99% of the energy leaves as neutrinos. */
export const NU_SHARE = 0.99;
/** Capture chain: ⁵⁸Fe (Z 26, N 32) + n → ⁵⁹Fe (N 33); ⁵⁹Fe → ⁵⁹Co (Z 27, N 32) + e⁻ + ν̄ (half-life 44.5 d). */
export const FE58 = {Z: 26, N: 32}, FE59 = {Z: 26, N: 33}, CO59 = {Z: 27, N: 32}, FE59_HALF_DAYS = 44.5;
/** Gold-197: Z = 79, N = 118. */
export const AU = {Z: 79, A: 197, N: 197 - 79};
/** Binding peak (v05): ⁵⁶Fe 8.79 MeV per nucleon. */
export const FE_PEAK = 8.79;

export const HEAD = 'How does stellar mass change the elements a star can make?';
export const HEAD_NEXT = 'How did cathode rays and oil drops reveal the electron?';
export const HEAD_SIZE = 50;
export const ACCENT = '#9c5a00';
