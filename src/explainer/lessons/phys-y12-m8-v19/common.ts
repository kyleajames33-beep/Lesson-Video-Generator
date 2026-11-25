// phys-y12-m8-v19 (Year 12 Physics M8 V19: fusion and the Coulomb barrier, why can fusion release energy despite
// repulsion between nuclei?). Lesson lookups and every displayed number. Every change is keyed to the frame at which
// its cue PHRASE is spoken (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import
// below to the measured take re-times the whole video.
// Narration check (26 November 2026): the prepared lesson.json, the brief 259 source audit and the current design
// (Revision 3 with the 21 November root label edit and root fix) carry identical narration (5,770 characters,
// 18 scenes).
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m8-v19/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m8-v19: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m8-v19: no response hold in ' + id);
	return h;
};
/** Latest safe frame for a visual change in a scene (no change in its last 2 s); `room` keeps later offsets clear too. */
export const cap = (id: string, f: number, room = 0) => Math.min(f, dur(id) - 64 - room);

// ---------------------------------------------------------------- numbers (design "Numbers used")
/** HSC data sheet: k = 8.99 × 10⁹ N m² C⁻², e = 1.602 × 10⁻¹⁹ C, 1 u = 931.5 MeV/c² = 1.661 × 10⁻²⁷ kg; g = 9.8;
 *  Boltzmann 1.381 × 10⁻²³ J K⁻¹. */
export const K_C = 8.99e9, E_CH = 1.602e-19, U_MEV = 931.5, U_KG = 1.661e-27, G = 9.8, K_B = 1.381e-23;
/** Coulomb force between two single charges r fm apart (N), and the energy needed to bring them that close (MeV):
 *  10, 5, 3 fm give 2.31, 9.23, 25.6 N and 0.144, 0.288, 0.480 MeV. */
export const forceAt = (rFm: number) => (K_C * E_CH * E_CH) / (rFm * 1e-15) ** 2;
export const barrierAt = (rFm: number) => (K_C * E_CH * E_CH) / (rFm * 1e-15) / (E_CH * 1e6);
export const F3 = forceAt(3), U3 = barrierAt(3);
/** Weight equivalent 25.6 / 9.8 = 2.62 kg ("about two and a half kilogram"); deuteron (nucleus) 2.013553 u = 3.34 × 10⁻²⁷ kg. */
export const KG_EQ = F3 / G, M_DEUTERON = 2.013553 * U_KG;
/** Atom scale 10⁻¹⁰ m: 2.31 × 10⁻⁸ N; ratio (10⁻¹⁰ / 3 × 10⁻¹⁵)² = 1.11 × 10⁹ ("about a billion"). */
export const F_ATOM = (K_C * E_CH * E_CH) / 1e-20, F_RATIO = F3 / F_ATOM;
/** Slip: r = 3.0 (metres, not fm) gives 2.56 × 10⁻²⁹ N. */
export const F_SLIP = (K_C * E_CH * E_CH) / 9;
/** Typical (3/2)kT: 1.5 × 10⁷ K → 1.94 keV (0.40% of 0.48 MeV); 1.5 × 10⁸ K → 19.4 keV (4.0%, "about four per cent"). */
export const T_SUN = 1.5e7, T_REACTOR = 1.5e8;
export const kT = (T: number) => (1.5 * K_B * T) / E_CH / 1e3;
/** Binding energies from atomic masses (keV-exact then MeV): ²H 2.224 (1.112 per nucleon), ³H 8.482 (2.827),
 *  ⁴He 28.296 (7.074); 28.296 − 2.224 − 8.482 = 17.590. */
const H1 = 1007825, NN = 1008665, H2 = 2014102, H3 = 3016049, HE3 = 3016029, HE4 = 4002603;
const u = (micro: number) => micro / 1e6;
export const M = {h1: u(H1), n: u(NN), h2: u(H2), h3: u(H3), he3: u(HE3), he4: u(HE4)};
const be = (Z: number, N: number, atom: number) => u(Z * H1 + N * NN - atom) * U_MEV;
export const BE_D = be(1, 1, H2), BE_T = be(1, 2, H3), BE_HE = be(2, 2, HE4);
export const BEA_D = BE_D / 2, BEA_T = BE_T / 3, BEA_HE = BE_HE / 4;
/** D-T from atomic masses: 5.030151 u ("5.0302") against 5.011268 u ("5.0113"); Δm = 0.018883 u ("0.0189");
 *  Q = 17.590 → 17.6 MeV. Binding route: 28.296 − (2.224 + 8.482) = 17.590 (same). */
export const DT_IN = u(H2 + H3), DT_OUT = u(HE4 + NN), DT_DM = u(H2 + H3 - HE4 - NN), DT_Q = DT_DM * U_MEV, BE_GAIN = BE_HE - BE_D - BE_T;
/** Shares by momentum (masses in u): neutron 4.002603/(4.002603 + 1.008665) × 17.59 = 14.05 ("about fourteen", four
 *  fifths); ⁴He 3.54. Speed ratio √(14.05/1.008665) / √(3.54/4.002603) = 3.97 ("four times"). */
export const SH_N = (DT_Q * M.he4) / (M.he4 + M.n), SH_A = (DT_Q * M.n) / (M.he4 + M.n), V_RATIO = Math.sqrt(SH_N / M.n) / Math.sqrt(SH_A / M.he4);
/** Per nucleon: 17.59 / 5 = 3.52 ("three and a half"); fission 200 / 236 = 0.85 (last video); ratio 4.15 ("four times"). */
export const PN_FUS = DT_Q / 5, PN_FIS = 200 / 236;
/** A1: D-D → ³He + n: 4.028204 u ("4.0282") against 4.024694 u ("4.0247"); Δm 0.003510 u; E 3.2696 → 3.27 MeV.
 *  Slip (neutron left out): 4.028204 − 3.016029 = 1.012175 u → 942.8 → about 943 MeV. */
export const DD_IN = u(2 * H2), DD_OUT = u(HE3 + NN), DD_DM = u(2 * H2 - HE3 - NN), DD_E = DD_DM * U_MEV;
export const DD_SLIP_DM = u(2 * H2 - HE3), DD_SLIP_E = DD_SLIP_DM * U_MEV;
/** ITER aims for 150 million °C; ANSTO and ITER cooperation agreement, 30 September 2016. */
export const ITER_T = 150;

export const HEAD = 'Why can fusion release energy despite repulsion between nuclei?';
export const HEAD_NEXT = 'What evidence shows that protons and neutrons have smaller constituents?';
export const HEAD_SIZE = 50;
export const ACCENT = '#9c5a00';
