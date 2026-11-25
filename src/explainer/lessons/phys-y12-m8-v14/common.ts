// phys-y12-m8-v14 (Year 12 Physics M8 V14: alpha, beta and gamma decay, what changes in a nucleus during alpha, beta
// and gamma decay?). Lesson lookups and every displayed number. Every change is keyed to the frame at which its cue
// PHRASE is spoken (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import below to
// the measured take re-times the whole video.
// Narration check (26 November 2026): the prepared lesson.json, the brief 259 source audit and the current design
// (Revision 3 with the 21 November root fix and the 24 November coherence fix) carry identical narration (5,620
// characters, 18 scenes).
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m8-v14/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m8-v14: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m8-v14: no response hold in ' + id);
	return h;
};
/** Latest safe frame for a visual change in a scene (no change in its last 2 s); `room` keeps later offsets clear too. */
export const cap = (id: string, f: number, room = 0) => Math.min(f, dur(id) - 64 - room);

// ---------------------------------------------------------------- numbers (design "Numbers used")
/** A nuclide (mass number A, atomic number Z, symbol). */
export type Nuc = {A: number; Z: number; s: string};
const nuc = (A: number, Z: number, s: string): Nuc => ({A, Z, s});
/** Decay rules: alpha A − 4, Z − 2; beta-minus Z + 1; beta-plus Z − 1; gamma no change. */
export const alpha = (n: Nuc, s: string) => nuc(n.A - 4, n.Z - 2, s);
export const betaMinus = (n: Nuc, s: string) => nuc(n.A, n.Z + 1, s);
export const betaPlus = (n: Nuc, s: string) => nuc(n.A, n.Z - 1, s);
export const U238 = nuc(238, 92, 'U'), TH234 = alpha(U238, 'Th'), HE4 = nuc(4, 2, 'He');
export const C14 = nuc(14, 6, 'C'), N14 = betaMinus(C14, 'N');
export const F18 = nuc(18, 9, 'F'), O18 = betaPlus(F18, 'O');
export const CO60 = nuc(60, 27, 'Co'), NI60 = betaMinus(CO60, 'Ni');
export const RA226 = nuc(226, 88, 'Ra'), RN222 = alpha(RA226, 'Rn'), SR90 = nuc(90, 38, 'Sr'), Y90 = betaMinus(SR90, 'Y'), KR86 = alpha(SR90, 'Kr');
/** Ni-60 cascade (author note d): 2.506 → 1.333 → 0 MeV: γ₁ = 1.173 MeV ("1.17"), γ₂ = 1.333 MeV ("1.33"; the design's 1.332
 *  MeV photon after recoil); visible photon about 2 eV: 1.33 × 10⁶ / 2 ≈ 6.7 × 10⁵ ("hundreds of thousands"). */
export const NI_LEVELS = [2.506, 1.333, 0] as const;
export const GAMMA1 = NI_LEVELS[0] - NI_LEVELS[1], GAMMA2 = NI_LEVELS[1] - NI_LEVELS[2], GAMMA_RATIO = (GAMMA2 * 1e6) / 2;
/** Scene 9 selector (mixed school source, corrected counts per minute): none 940, paper 622, 5 mm Al 88, 5 cm lead 27. */
export const SELECTOR = [940, 622, 88, 27] as const;
/** Attempt 2 data (counts per minute, corrected): no absorber 612, paper 610, 5 mm Al 98, 5 cm lead 31. */
export const A2_DATA = [612, 610, 98, 31] as const;
/** Po-210 alpha decay preview: 5.41 MeV (site; AME2020 5.408 MeV). */
export const PO210_MEV = 5.41;
/** Charges and masses: α +2, 4 u (m_α/m_e = 7294); β⁻ −1, 1/1823 u; γ 0. */
export const ALPHA_E_RATIO = 7294;

export const HEAD = 'What changes in a nucleus during alpha, beta and gamma decay?';
export const HEAD_NEXT = 'Why does half-life predict a population but not one atom?';
export const HEAD_SIZE = 50;
export const ACCENT = '#9c5a00';
