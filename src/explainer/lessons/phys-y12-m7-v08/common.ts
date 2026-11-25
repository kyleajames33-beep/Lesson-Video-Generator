// phys-y12-m7-v08 (Year 12 Physics M7 V08: polarisation and Malus's law, why does rotating a polariser change transmitted intensity?).
// Lesson lookups and every displayed number. Every change is keyed to the frame at which its cue PHRASE is spoken
// (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import below to the measured take
// re-times the whole video.
// The prepared narration matched the current design (Revision 3, 6,283 characters, 16 scenes; checked scene by scene
// by script against the prepared lesson.json and the brief 259 source audit), so the provisional file was made with
// the unchanged make-provisional script from the audit.
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m7-v08/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';
import {malus} from '../../sims/waves';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m7-v08: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m7-v08: no response hold in ' + id);
	return h;
};
export const holdIf = (id: string) => sc(id).responseHold;
/** Latest safe frame for a visual change in a scene (no change in its last 2 s). */
export const cap = (id: string, f: number) => Math.min(f, dur(id) - 64);

// ---------------------------------------------------------------- numbers (design "Numbers used")
const rad = (d: number) => (d * Math.PI) / 180;
/** cos²θ (Malus's law factor) for an angle in degrees, from the waves engine with I_max = 1. */
export const cos2 = (deg: number) => malus(1, rad(deg));
/** Analyser slider (Revision 2): I_max = 40 W m⁻²; θ = 0°, 45°, 60°, 90° → cos²θ = 1, 0.5, 0.25, 0 → I = 40, 20, 10, 0. */
export const IMAX4 = 40;
export const SLIDER_DEG = [0, 45, 60, 90] as const;
/** Chain (site): 80 W m⁻² unpolarised; axes 0°, 30°, 60°: 40, 30, 22.5; without the middle filter 40 cos²60° = 10. */
export const I0 = 80;
export const C1 = I0 / 2, C2 = malus(C1, rad(30)), C3 = malus(C2, rad(30)), C3_NOMID = malus(C1, rad(60));
/** Scene 7 slip: 40 cos 30° = 34.6 (cos, not cos²). */
export const C2_SLIP = C1 * Math.cos(rad(30));
/** Investigation (illustrative, background subtracted): θ 0 to 90° in 15° steps; readings in lux. */
export const INV_DEG = [0, 15, 30, 45, 60, 75, 90] as const;
export const INV_LUX = [482, 446, 362, 238, 121, 34, 3] as const;
export const INV_C2 = INV_DEG.map(d => cos2(d));
/** Best-fit line through the origin: gradient = Σxy / Σx² ≈ 480 lux (the maximum reading). */
export const INV_GRAD = INV_C2.reduce((s, x, i) => s + x * INV_LUX[i], 0) / INV_C2.reduce((s, x) => s + x * x, 0);
/** Attempt 1 (original): 120 W m⁻² unpolarised, ideal filters 35° apart: ½ × 120 = 60; 60 cos²35° = 40.3 ≈ 40; slip 120 cos²35° = 80.5 ≈ 81. */
export const A1_I0 = 120, A1_DEG = 35;
export const A1_I1 = A1_I0 / 2, A1_I2 = malus(A1_I1, rad(A1_DEG)), A1_SLIP = malus(A1_I0, rad(A1_DEG)), A1_C2 = cos2(A1_DEG);

export const HEAD = 'Why does rotating a polariser change transmitted intensity?';
export const HEAD_NEXT = 'How did thermal spectra challenge classical predictions?';
export const HEAD_SIZE = 48;
export const ACCENT = '#8e3b78';
