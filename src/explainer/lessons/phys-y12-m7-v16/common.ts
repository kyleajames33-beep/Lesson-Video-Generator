// phys-y12-m7-v16 (Year 12 Physics M7 V16: mass-energy, how does mass-energy accounting explain fusion, annihilation and combustion?).
// Lesson lookups and every displayed number. Every change is keyed to the frame at which its cue PHRASE is spoken
// (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import below to the measured take
// re-times the whole video.
// NARRATION MISMATCH: the prepared lesson.json and the brief 259 source audit predate the design's coherence audit fix
// (24 November 2026), which added one sentence to scene 5 ("In these symbols, the top number is the mass number, ...";
// 5,887 characters, not 5,750). This build follows the CURRENT design: the provisional file was made by running the
// unchanged make-provisional script on a scratch copy of the audit carrying the current narration (work/brief259 was not
// edited). The prepared inputs in docs/production/claude-pm/lessons/p-y12-m7-v16/ must be regenerated before voicing.
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m7-v16/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m7-v16: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m7-v16: no response hold in ' + id);
	return h;
};
/** Latest safe frame for a visual change in a scene (no change in its last 2 s). */
export const cap = (id: string, f: number) => Math.min(f, dur(id) - 64);

// ---------------------------------------------------------------- numbers (design "Numbers used")
/** HSC data sheet. */
export const C = 3.0e8, C2 = C * C, M_E = 9.109e-31, EV = 1.602e-19;
/** 1 kg of rest energy: 9.0 × 10¹⁶ J; a 1 GW station runs 9.0 × 10⁷ s = 2.85 years ("almost three"). */
export const E_1KG = C2, T_1GW = E_1KG / 1e9, T_1GW_YR = T_1GW / 3.156e7;
/** Energy-out slider: 9.0 × 10⁷, 10¹⁰, 10¹³, 10¹⁶ J give Δm = 1.0 × 10⁻⁹, 10⁻⁶, 10⁻³, 1.0 kg. */
export const SLIDER_E = [9.0e7, 9.0e10, 9.0e13, 9.0e16] as const;
/** The Sun (site): 3.8 × 10²⁶ W: Δm = 4.2 × 10⁹ kg each second; hydrogen fused = Δm / 0.007 = 6.0 × 10¹¹ kg. Slip: ÷ c gives 1.3 × 10¹⁸. */
export const SUN_W = 3.8e26, SUN_DM = SUN_W / C2, FUSION_F = 0.007, SUN_H = SUN_DM / FUSION_F, SUN_SLIP = SUN_W / C;
/** Annihilation at rest: 2mₑc² = 1.64 × 10⁻¹³ J; each photon 8.20 × 10⁻¹⁴ J = 5.1 × 10⁵ eV ≈ 0.51 MeV. */
export const E_PAIR = 2 * M_E * C2, E_PHOTON = E_PAIR / 2, E_PHOTON_EV = E_PHOTON / EV;
/** Combustion (site): 44 MJ per kg of petrol: Δm = 4.9 × 10⁻¹⁰ kg; system petrol 1.0 kg + oxygen 3.5 kg = 4.5 kg; fraction 1.1 × 10⁻¹⁰. */
export const E_PETROL = 44e6, DM_PETROL = E_PETROL / C2, O2_KG = (12.5 * 31.998) / 114.23, SYS_KG = 1 + O2_KG, FRACTION_COMB = DM_PETROL / SYS_KG;
/** The three fractions of reacting mass: combustion 1.1 × 10⁻¹⁰, fusion 7 × 10⁻³, annihilation 1. */
export const FRACTIONS = {combustion: FRACTION_COMB, fusion: FUSION_F, annihilation: 1} as const;
/** Attempt 1: a star at 1.5 × 10²⁷ W: Δm = 1.7 × 10¹⁰ kg each second; hydrogen 2.4 × 10¹² kg; slip ÷ c = 5.0 × 10¹⁸ kg. */
export const A1_W = 1.5e27, A1_DM = A1_W / C2, A1_H = Math.round(A1_DM / 1e9) * 1e9 / FUSION_F, A1_SLIP = A1_W / C;
/** Attempt 2: methane, 55 MJ per kg: Δm = 6.1 × 10⁻¹⁰ kg (about 0.6 μg). */
export const A2_E = 55e6, A2_DM = A2_E / C2;
/** Pair production (handoff): each photon needs at least mₑc² ≈ 0.51 MeV (head-on, equal energies). */
export const PAIR_MEV = E_PHOTON_EV / 1e6;

export const HEAD = 'How does mass-energy accounting explain fusion, annihilation and combustion?';
export const HEAD_NEXT = 'How did cooling radiation allow matter to form in the early Universe?';
export const HEAD_SIZE = 50;
export const ACCENT = '#8e3b78';
