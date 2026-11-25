// phys-y12-m8-v18 (Year 12 Physics M8 V18: fission chain reactions, why can one fission event trigger a controlled or
// uncontrolled chain?). Lesson lookups and every displayed number. Every change is keyed to the frame at which its cue
// PHRASE is spoken (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import below to
// the measured take re-times the whole video.
// Narration check (26 November 2026): the prepared lesson.json, the brief 259 source audit and the current design
// (Revision 3 with the 21 November root fix) carry identical narration (6,435 characters, 19 scenes).
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m8-v18/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m8-v18: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m8-v18: no response hold in ' + id);
	return h;
};
/** Latest safe frame for a visual change in a scene (no change in its last 2 s); `room` keeps later offsets clear too. */
export const cap = (id: string, f: number, room = 0) => Math.min(f, dur(id) - 64 - room);

// ---------------------------------------------------------------- numbers (design "Numbers used")
/** Atomic masses in micro-u (AME2020 to six decimals). */
const NN = 1008665, H1 = 1007825, U235 = 235043930, BA141 = 140914403, KR92 = 91926173, XE140 = 139921646, SR94 = 93915356;
const u = (micro: number) => micro / 1e6;
/** HSC data sheet: 1 u = 931.5 MeV/c²; 1 eV = 1.602 × 10⁻¹⁹ J; c = 3.00 × 10⁸ m s⁻¹. */
export const U_MEV = 931.5, EV_J = 1.602e-19, C = 3.0e8;
export const M = {n: u(NN), h1: u(H1), u235: u(U235), ba: u(BA141), kr: u(KR92), xe: u(XE140), sr: u(SR94)};
/** Ba/Kr split: 236.052595 u ("236.0526") against 235.866571 u ("235.8666"); Δm = 0.186024 u ("0.1860");
 *  E = 173.28 → 173 MeV = 2.776 × 10⁻¹¹ J. */
export const F_IN = u(NN + U235), F_OUT = u(BA141 + KR92 + 3 * NN), F_DM = u(NN + U235 - BA141 - KR92 - 3 * NN), F_Q = F_DM * U_MEV, F_J = F_Q * 1e6 * EV_J;
/** Slip: Δm in u times c² with no conversion: 0.186024 × 9.00 × 10¹⁶ = 1.67 × 10¹⁶ ("J"). */
export const F_SLIP = F_DM * C * C;
/** Binding energies (Z ¹H atoms + N neutrons − atom) × 931.5: ²³⁵U 1783.88 (7.591 per nucleon, said "seven point six");
 *  ¹⁴¹Ba 1173.99 (8.326, "eight point three"); ⁹²Kr 783.17 (8.513, "eight point five"); 1957.16 − 1783.88 = 173.28. */
const be = (Z: number, N: number, atom: number) => (u(Z * H1 + N * NN - atom)) * U_MEV;
export const BE_U = be(92, 143, U235), BE_BA = be(56, 85, BA141), BE_KR = be(36, 56, KR92);
export const BA_U = BE_U / 235, BA_BA = BE_BA / 141, BA_KR = BE_KR / 92, BE_FRAG = BE_BA + BE_KR, BE_GAIN = BE_FRAG - BE_U;
/** Methane: 890 kJ mol⁻¹ / 6.022 × 10²³ = 9.23 eV per molecule ("about nine"); 200 MeV / 9.23 eV = 2.17 × 10⁷
 *  ("about twenty million"). */
export const CH4_EV = 890000 / 6.022e23 / EV_J, RATIO = 200e6 / CH4_EV;
/** Generations: 1, 2, 4, 8; generation 11 holds 2¹⁰ = 1024 fissions. */
export const GEN11 = 2 ** 10;
/** The k slider: fissions in generation n = 1000 × k^(n − 1); generation 10 for k = 0.8, 1.0, 1.5: 134, 1000, 38,443. */
export const K_SET = [0.8, 1.0, 1.5] as const;
export const gen = (k: number, n: number) => 1000 * k ** (n - 1);
/** Sensitivity: 1.01¹⁰⁰ = 2.70. */
export const K101 = 1.01 ** 100;
/** Moderation: fast about 2 MeV, thermal 0.025 eV; ln(2 × 10⁶ / 0.025) = 18.2 collisions with hydrogen ("about eighteen"). */
export const E_FAST = 2, E_THERM = 0.025, N_COLL = Math.log(2e6 / E_THERM);
/** Control rods: k = 0.98 (in), 1.02 (out), 1.00 (held). */
export const K_RODS = [0.98, 1.02, 1.0] as const;
/** OPAL (ANSTO): 20 MW thermal; pool about 13 m deep (12.8 m); five hafnium control rods. */
export const OPAL = {mw: 20, depth: 12.8, rods: 5};
/** Neutrons per thermal U-235 fission: 2 or 3, average about 2.4 (2.43). */
export const NU = 2.43;
/** A1: x = 1 + 235 − 140 − 94 = 2; products 235.854332 u ("235.8543"); Δm 0.198263 u ("0.1983"); E 184.68 → 185 MeV.
 *  Slip (product neutrons left out): 236.052595 − 233.837002 = 2.215593 u → 2063.8 → about 2060 MeV. */
export const A_X = 1 + 235 - 140 - 94;
export const A_OUT = u(XE140 + SR94 + A_X * NN), A_DM = u(NN + U235 - XE140 - SR94 - A_X * NN), A_E = A_DM * U_MEV;
export const A_SLIP_OUT = u(XE140 + SR94), A_SLIP_DM = u(NN + U235 - XE140 - SR94), A_SLIP_E = A_SLIP_DM * U_MEV;
/** Rounded to three significant figures. */
export const sig3 = (v: number) => { const e = Math.floor(Math.log10(Math.abs(v))) - 2; return Math.round(v / 10 ** e) * 10 ** e; };

export const HEAD = 'Why can one fission event trigger a controlled or uncontrolled chain?';
export const HEAD_NEXT = 'Why can fusion release energy despite repulsion between nuclei?';
export const HEAD_SIZE = 50;
export const ACCENT = '#9c5a00';
