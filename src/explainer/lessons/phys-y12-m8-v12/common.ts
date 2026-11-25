// phys-y12-m8-v12 (Year 12 Physics M8 V12: matter waves and electron diffraction, what evidence shows that particles
// have wave behaviour?). Lesson lookups and every displayed number. Every change is keyed to the frame at
// which its cue PHRASE is spoken (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the
// import below to the measured take re-times the whole video.
// Narration check (26 November 2026): the prepared lesson.json, the brief 259 source audit and the current design
// (Revision 3 with the 21 November root edits) carry identical narration (6,265 characters, 18 scenes).
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m8-v12/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m8-v12: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m8-v12: no response hold in ' + id);
	return h;
};
/** Latest safe frame for a visual change in a scene (no change in its last 2 s). */
export const cap = (id: string, f: number) => Math.min(f, dur(id) - 64);

// ---------------------------------------------------------------- numbers (design "Numbers used")
/** HSC data sheet: h = 6.626 × 10⁻³⁴ J s; c = 3.00 × 10⁸ m s⁻¹; e = 1.602 × 10⁻¹⁹ C; m_e = 9.109 × 10⁻³¹ kg; k = 8.99 × 10⁹. */
// ---------------------------------------------------------------- numbers (design "Numbers used")
import {ringRadius} from '../../physics/atom/matterwave';
/** HSC data sheet: h = 6.626 × 10⁻³⁴ J s; m_e = 9.109 × 10⁻³¹ kg; e = 1.602 × 10⁻¹⁹ C; c = 3.00 × 10⁸ m s⁻¹. */
export const H = 6.626e-34, M_E = 9.109e-31, E_CH = 1.602e-19, C = 3.0e8;
/** Steel ball: 0.050 kg at 2.0 m s⁻¹: λ = 6.626 × 10⁻³³ m ("6.6 × 10⁻³³"); slip m = 50: 6.6 × 10⁻³⁶ m. */
export const BALL_LAM = H / (0.05 * 2.0), BALL_SLIP = H / (50 * 2.0);
/** Electron at 2.2 × 10⁶ m s⁻¹: λ = 3.306 × 10⁻¹⁰ m ("3.31"); ground orbit 2πr₁ = 2π × 5.29 × 10⁻¹¹ = 3.324 × 10⁻¹⁰ m. */
export const V_E = 2.2e6, E_LAM = H / (M_E * V_E), R1 = 5.29e-11, CIRC1 = 2 * Math.PI * R1;
/** Davisson and Germer: 54 V: E_k = 8.651 × 10⁻¹⁸ J; v = 4.358 × 10⁶ m s⁻¹ ("4.36"; 1.45% of c); λ = h/(m × 4.36 × 10⁶) = 1.668 × 10⁻¹⁰ m;
 *  d sin θ = 2.15 × 10⁻¹⁰ × sin 50° = 1.647 × 10⁻¹⁰ m; difference 1.3% ("about one per cent"). Slip: sin 50 in radians: −5.64 × 10⁻¹¹ m. */
export const DG_V = 54, DG_EK = DG_V * E_CH, DG_SPEED = Math.sqrt((2 * DG_EK) / M_E), DG_SPEED3 = Number(DG_SPEED.toPrecision(3));
export const DG_LAM = H / (M_E * DG_SPEED3), DG_D = 2.15e-10, DG_TH = 50, DG_MEAS = DG_D * Math.sin((DG_TH * Math.PI) / 180), DG_RAD_SLIP = DG_D * Math.sin(DG_TH);
export const DG_DIFF = DG_LAM / DG_MEAS - 1, DG_FRAC_C = DG_SPEED / C;
/** Attempt 1: 100 V: E_k = 1.602 × 10⁻¹⁷ J; v = 5.931 × 10⁶ m s⁻¹ ("5.93"); λ = h/(m × 5.93 × 10⁶) = 1.227 × 10⁻¹⁰ m; slip (100 J): 1.48 × 10¹⁶ m s⁻¹. */
export const A1_EK = 100 * E_CH, A1_V = Math.sqrt((2 * A1_EK) / M_E), A1_V3 = Number(A1_V.toPrecision(3)), A1_LAM = H / (M_E * A1_V3), A1_SLIP = Math.sqrt((2 * 100) / M_E);
/** School tube (model: graphite 0.213 nm, screen 0.135 m): 3.0, 4.0, 5.0 kV → v 3.25, 3.75, 4.19 × 10⁷ m s⁻¹; λ 2.24, 1.94, 1.73 × 10⁻¹¹ m; r 14, 12, 11 mm. */
export const TUBE_KV = [3, 4, 5] as const, GRAPHITE_D = 0.213e-9, TUBE_L = 0.135;
export const tubeV = (kv: number) => Math.sqrt((2 * kv * 1000 * E_CH) / M_E);
export const tubeLam = (kv: number) => H / (M_E * tubeV(kv));
export const tubeRmm = (kv: number) => ringRadius(GRAPHITE_D, tubeLam(kv), TUBE_L) * 1000;

export const HEAD = 'What evidence shows that particles have wave behaviour?';
export const HEAD_NEXT = 'Why do orbital probabilities replace literal electron paths?';
export const HEAD_SIZE = 50;
export const ACCENT = '#9c5a00';
