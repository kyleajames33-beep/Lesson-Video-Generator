// phys-y12-m8-v22 (Year 12 Physics M8 V22: particle accelerators, how do accelerators create and test evidence about
// particles?). Lesson lookups and every displayed number. Every change is keyed to the frame at which its cue PHRASE is
// spoken (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import below to the measured
// take re-times the whole video.
// Narration check (26 November 2026): the prepared lesson.json, the brief 259 source audit and the current design
// (Revision 3 with the 21 November root fix) carry identical narration (6,432 characters, 21 scenes).
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m8-v22/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m8-v22: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m8-v22: no response hold in ' + id);
	return h;
};
/** Latest safe frame for a visual change in a scene (no change in its last 2 s); `room` keeps later offsets clear too. */
export const cap = (id: string, f: number, room = 0) => Math.min(f, dur(id) - 64 - room);

// ---------------------------------------------------------------- numbers (design "Numbers used")
/** HSC data sheet: e = 1.602 × 10⁻¹⁹ C, c = 3.00 × 10⁸ m s⁻¹. */
export const E_CH = 1.602e-19, C_L = 3.0e8;
/** Rest energies to create (GeV): W 80.4, Z 91.2, Higgs 125, top 173. */
export const REST = [{s: 'W', m: 80.4}, {s: 'Z', m: 91.2}, {s: 'H', m: 125}, {s: 't', m: 173}] as const;
/** W = qV: 1 MV gives 1 MeV (1.602 × 10⁻¹³ J); 6.8 TeV in one step needs 6.8 × 10¹² V. */
export const W_1MV = E_CH * 1e6, V_ONE = 6.8e12;
/** Momentum of a highly relativistic particle of energy E (GeV): p ≈ E/c (author note a). */
export const pOf = (eGeV: number) => (eGeV * 1e9 * E_CH) / C_L;
/** Booster: r = 8.0 m; B = p/(qr): E = 0.1, 0.5, 1.0, 2.0, 3.0 GeV give p = 5.34 × 10⁻²⁰, 2.67 × 10⁻¹⁹, 5.34 × 10⁻¹⁹,
 *  1.068 × 10⁻¹⁸, 1.602 × 10⁻¹⁸ kg m s⁻¹ and B = 0.0417, 0.208, 0.417, 0.833, 1.25 T; 3.0 / 0.1 = 30. */
export const R_B = 8.0;
export const bOf = (p: number, r = R_B) => p / (E_CH * r);
export const E_RAMP = [0.1, 0.5, 1.0, 2.0, 3.0] as const;
export const P3 = pOf(3.0), B3 = bOf(P3), P01 = pOf(0.1), B01 = bOf(P01), RAMP_RATIO = 3.0 / 0.1;
/** Slip: p left as 3.0 × 10⁹ (the energy in eV): 3.0e9 / (1.602e-19 × 8.0) = 2.3 × 10²⁷ T. */
export const B_SLIP7 = 3.0e9 / (E_CH * R_B);
/** Australian Synchrotron: linac 100 MeV, booster 130 m, storage ring 216 m, 3.0 GeV, since 2007. */
export const AS = {linac: 100, booster: 130, ring: 216, e: 3.0} as const;
/** Radiation ratio at equal energy and radius (author note b): 1836⁴ = 1.1 × 10¹³. */
export const RAD_RATIO = 1836 ** 4;
/** LHC: 27 km, 6.8 TeV per beam, ≈ 8 T dipoles, head on 13.6 TeV; fixed target √(2 × 0.938 × 6800) = 113 GeV ≈ 0.11 TeV. */
export const LHC = {km: 27, beam: 6.8, tesla: 8} as const;
export const LHC_SUM = 2 * LHC.beam, FIXED_TEV = Math.sqrt(2 * 0.938 * LHC.beam * 1000) / 1000;
/** A1: p = 3.63 × 10⁻¹⁵ kg m s⁻¹, r = 2.80 km: B = 8.09 T; slip with r = 2.80: 8090 T ("over eight thousand"). */
export const A1_P = 3.63e-15, A1_R = 2.8e3;
export const A1_B = bOf(A1_P, A1_R), A1_SLIP = bOf(A1_P, 2.8);

export const HEAD = 'How do accelerators create and test evidence about particles?';
export const HEAD_SIZE = 50;
export const ACCENT = '#9c5a00';
