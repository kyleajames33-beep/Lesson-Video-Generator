// phys-y12-m8-v01 (Year 12 Physics M8 V01: from radiation to matter, how did cooling radiation allow matter to form in
// the early Universe?). Lesson lookups and every displayed number. Every change is keyed to the frame at which its cue
// PHRASE is spoken (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import below to
// the measured take re-times the whole video.
// Narration check (25 November 2026): the prepared lesson.json, the brief 259 source audit and the current design
// (Revision 3 with the coherence audit fix and the root opening-frame note) carry identical narration (6,504 characters).
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m8-v01/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m8-v01: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m8-v01: no response hold in ' + id);
	return h;
};
/** Latest safe frame for a visual change in a scene (no change in its last 2 s). */
export const cap = (id: string, f: number) => Math.min(f, dur(id) - 64);

// ---------------------------------------------------------------- numbers (design "Numbers used")
/** HSC data sheet. */
export const H = 6.626e-34, C = 3.0e8, B = 2.898e-3, M_E = 9.109e-31, M_P = 1.673e-27, EV = 1.602e-19, MEV = 1.602e-13;
export const HC = H * C;
/** Wien-peak photon energy at temperature T: E = hcT/b (J), and in MeV. */
export const ePeak = (T: number) => (HC * T) / B;
export const ePeakMeV = (T: number) => ePeak(T) / MEV;
/** Scene 4: m_e c² = 8.198 × 10⁻¹⁴ J (0.512 MeV); shown 8.2 × 10⁻¹⁴ J; λ from the shown E = 2.42 × 10⁻¹² m; T from the shown λ = 1.21 × 10⁹ K. */
export const E_E = M_E * C * C, E_E_MEV = E_E / MEV, E_E_SHOWN = 8.2e-14, LAM_E = HC / E_E_SHOWN, LAM_E_SHOWN = 2.4e-12, T_E = B / LAM_E_SHOWN;
/** Scene 4 slip: c not squared, 9.109 × 10⁻³¹ × 3.00 × 10⁸ = 2.73 × 10⁻²² J. */
export const E_E_SLIP = M_E * C;
/** Scene 5: m_p c² = 1.506 × 10⁻¹⁰ J = 940 MeV; m_p/m_e = 1837 (data-sheet masses); T = b/(hc/E) = 2.2 × 10¹² K. */
export const E_P = M_P * C * C, E_P_MEV = E_P / MEV, P_OVER_E = M_P / M_E, T_P = B / (HC / E_P);
/** Scene 6: Planck 2018 η = 6.1 × 10⁻¹⁰, so 1/η = 1.6 × 10⁹ photons per proton or neutron. */
export const ETA = 6.1e-10, PHOTONS_PER = 1 / ETA;
/** Scene 7: neutron mass excess 1.293 MeV of 938.3 MeV (CODATA) = 0.14%; free-neutron half-life 609 s ≈ 10 min. */
export const DM_N_PCT = (1.293 / 938.3) * 100, N_HALF_MIN = 609 / 60;
/** Scene 8: deuterium binding 2.224 MeV; Wien-peak photon at 10⁹ K = 0.43 MeV. */
export const B_D = 2.224, E_PEAK_1E9 = ePeakMeV(1e9);
/** Scene 9: 2 n + 14 p → ⁴He + 12 ¹H; 4/16 = 25%; slip by number 1/13 = 7.7%. */
export const HE_FRAC = 4 / 16, HE_BY_NUMBER = 1 / 13;
/** Scene 10: 2.224 MeV / 13.6 eV = 1.6 × 10⁵. */
export const B_H = 13.6, BIND_RATIO = (B_D * 1e6) / B_H;
/** Scene 11 and the dial: 3000 K: Wien peak 966 nm, photon 1.28 eV. */
export const T_REC = 3000, LAM_REC_NM = (B / T_REC) * 1e9, E_REC_EV = ePeak(T_REC) / EV;
/** Attempt 1 (muon): E = 1.69 × 10⁻¹¹ J; λ = hc/1.69 × 10⁻¹¹ = 1.18 × 10⁻¹⁴ m; T = b/1.18 × 10⁻¹⁴ = 2.5 × 10¹¹ K; slip bλ = 3.4 × 10⁻¹⁷. */
export const M_MU = 1.88e-28, A1_E = M_MU * C * C, A1_LAM = HC / 1.69e-11, A1_T = B / 1.18e-14, A1_SLIP = B * 1.18e-14;
/** Scene 3 gauge: photon energies as multiples of the Wien-peak energy (one energetic-tail photon in twenty). */
export const SPREAD = [0.42, 0.85, 0.3, 0.68, 1.1, 0.55, 0.2, 0.95, 0.62, 0.36, 2.5, 0.78, 0.48, 1.02, 0.25, 0.7, 0.9, 0.4, 0.58, 0.33] as const;
export const TAIL_I = 10;
/** Scene 3: hot T 10¹¹ K (peak photon 43 MeV, far above 0.51 MeV) cooling to 10⁹ K (0.43 MeV, below it). */
export const T_HOT = 1e11, T_COOL = 1e9;
/** Cooling dial (scene 12): time (s) and temperature (K) at the markers (site timeline; approximate), log-interpolated between them. */
export const YEAR = 3.156e7;
export const DIAL: readonly (readonly [number, number])[] = [[1e-6, 1e12], [1, 1e10], [180, 1e9], [3.8e5 * YEAR, 3000]];
export const dialT = (t: number) => {
	const L = Math.log10;
	if (t <= DIAL[0][0]) return DIAL[0][1];
	for (let i = 0; i + 1 < DIAL.length; i++) { const [t0, T0] = DIAL[i], [t1, T1] = DIAL[i + 1]; if (t <= t1) return 10 ** (L(T0) + ((L(t) - L(t0)) / (L(t1) - L(t0))) * (L(T1) - L(T0))); }
	return DIAL[DIAL.length - 1][1];
};

export const HEAD = 'How did cooling radiation allow matter to form in the early Universe?';
export const HEAD_NEXT = 'What evidence supports an expanding hot early Universe?';
export const HEAD_SIZE = 50;
export const ACCENT = '#9c5a00';
