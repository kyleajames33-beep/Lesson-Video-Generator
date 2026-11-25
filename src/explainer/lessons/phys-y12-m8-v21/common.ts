// phys-y12-m8-v21 (Year 12 Physics M8 V21: the Standard Model, how does the Standard Model organise particles and
// interactions?). Lesson lookups and every displayed number. Every change is keyed to the frame at which its cue PHRASE
// is spoken (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import below to the
// measured take re-times the whole video.
// Narration check (26 November 2026): the prepared lesson.json, the brief 259 source audit and the current design
// (Revision 3) carry identical narration (6,213 characters, 19 scenes).
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m8-v21/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m8-v21: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m8-v21: no response hold in ' + id);
	return h;
};
/** Latest safe frame for a visual change in a scene (no change in its last 2 s); `room` keeps later offsets clear too. */
export const cap = (id: string, f: number, room = 0) => Math.min(f, dur(id) - 64 - room);

// ---------------------------------------------------------------- numbers (design "Numbers used")
/** Kinds: 6 quarks + 6 leptons + 4 carriers (W⁺ and W⁻ one kind, eight gluons one kind) + 1 Higgs = 17. */
export const N_Q = 6, N_L = 6, N_C = 4, N_H = 1, N_ALL = N_Q + N_L + N_C + N_H;
/** Quark charges in thirds of e: up-type +2, down-type −1; antiquarks reversed. */
export const Q_UP = 2 / 3, Q_DOWN = -1 / 3;
/** Hadron sums: π⁺ = u d̄ = +⅔ + ⅓ = +1; π⁻ = d ū = −⅓ − ⅔ = −1; p̄ = ū ū d̄ = −⅔ − ⅔ + ⅓ = −1; K⁺ = u s̄ = +1;
 *  K⁻ = s ū = −1; slip (ū taken as +⅔): −⅓ + ⅔ = +⅓. */
export const PI_P = Q_UP - Q_DOWN, PI_M = Q_DOWN - Q_UP, PBAR = -2 * Q_UP - Q_DOWN, K_P = Q_UP - Q_DOWN, K_M = Q_DOWN - Q_UP, K_SLIP = Q_DOWN + Q_UP;
/** Masses (PDG; site values kept): u 2.2, d 4.7, s 93 MeV; c 1.27, b 4.18, t 173 (172.6) GeV; e 0.511, μ 105.7 MeV,
 *  τ 1.777 GeV; proton 938.3 MeV; W 80.4, Z 91.2, H 125 GeV. Gold-197 atom 196.966569 u × 0.9315 = 183.5 GeV/c². */
export const M_T = 172.6, M_GOLD = 196.966569 * 0.9315, M_TAU = 1776.9, M_P = 938.3, M_W = 80.4, M_Z = 91.2, M_H = 125;
/** τ / proton = 1.89 ("nearly twice"); W and Z / proton = 85.7 and 97.2 ("eighty-five to a hundred times"). */
export const TAU_P = M_TAU / M_P, W_P = (M_W * 1000) / M_P, Z_P = (M_Z * 1000) / M_P;
/** Extension estimate R ≈ ħc/(mc²), ħc = 197.327 MeV fm: 10 GeV → 1.97 × 10⁻¹⁷ m; W → 2.45 × 10⁻¹⁸ m; Z → 2.16 × 10⁻¹⁸ m. */
export const HBARC = 197.327;
export const reachM = (mGeV: number) => (mGeV <= 0 ? Infinity : (HBARC / (mGeV * 1000)) * 1e-15);
export const M_STEPS = [10, M_W, M_Z] as const;
/** Strength guide (site, guide values only): 1 : 10⁻² : 10⁻¹³ : 10⁻³⁸; ranges strong ≈ 10⁻¹⁵ m, weak ≈ 10⁻¹⁸ m. */
export const STRENGTH = [0, -2, -13, -38] as const;

export const HEAD = 'How does the Standard Model organise particles and interactions?';
export const HEAD_NEXT = 'How do accelerators create and test evidence about particles?';
export const HEAD_SIZE = 50;
export const ACCENT = '#9c5a00';
