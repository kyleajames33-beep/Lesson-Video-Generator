// phys-y12-m7-v04 (Year 12 Physics M7 V04: reading stellar spectra, what can stellar spectra tell us beyond chemical
// identity?). Lesson lookups and every displayed number. Every change is keyed to the frame at which its cue PHRASE is
// spoken (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import below to the
// measured take re-times the whole video.
// The prepared narration matched the current design (Revision 3, 6,261 characters, 15 scenes; checked scene by scene
// by script against the prepared lesson.json and the brief 259 source audit), so the provisional file was made with
// the unchanged make-provisional script from the audit.
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m7-v04/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m7-v04: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m7-v04: no response hold in ' + id);
	return h;
};
export const holdIf = (id: string) => sc(id).responseHold;
/** Latest safe frame for a visual change in a scene (no change in its last 2 s). */
export const cap = (id: string, f: number) => Math.min(f, dur(id) - 64);

// ---------------------------------------------------------------- numbers (design "Numbers used"; NIST air values)
export const C = 3.0e8;
/** H-alpha rest wavelength (nm). */
export const HA = 656.3;
/** Hydrogen's four visible lines (nm). */
export const H_LINES = [656.3, 486.1, 434.0, 410.2];
/** Sodium D pair and calcium II K and H (nm); the site's Ca II rest value is 393.3 nm. */
export const NA_LINES = [589.0, 589.6];
export const CA_LINES = [393.4, 396.8];
/** Doppler shift (nm) for a radial speed (m/s): Δλ = λ v / c. */
export const shiftNm = (lambda: number, v: number) => (lambda * v) / C;

/** Scene 4 velocity slider (m/s): +300, +600 (away), then -300 km/s (towards); Δλ +0.66, +1.31, -0.66 nm. */
export const SLIDE_V = [3.0e5, 6.0e5, -3.0e5];
export const SLIDE_DL = SLIDE_V.map(v => shiftNm(HA, v));
export const SLIDE_OBS = SLIDE_DL.map(d => HA + d);

/** Scene 5 worked example (site): Ca II 393.3 nm observed at 394.2 nm. */
export const CA_REST = 393.3, CA_OBS = 394.2;
export const CA_DL = Math.round((CA_OBS - CA_REST) * 10) / 10; // 0.9 nm
export const CA_V = (C * CA_DL) / CA_REST; // 6.865e5 m/s

/** Scene 6 spin slider (equatorial speed, m/s; side-on half-width nm): 0, 0.11, 0.22, 0.33 nm. */
export const SPIN_V = [0, 5.0e4, 1.0e5, 1.5e5];
export const SPIN_HW = SPIN_V.map(v => shiftNm(HA, v));
export const ROT_V = 1.0e5;
export const ROT_HW = shiftNm(HA, ROT_V); // 0.2188 nm each side
export const ROT_WHOLE = 2 * ROT_HW; // 0.4375 nm in all

/** Attempt 1 (original): H-alpha 656.3 nm observed at 655.6 nm. */
export const A1_REST = 656.3, A1_OBS = 655.6;
export const A1_DL = Math.round((A1_OBS - A1_REST) * 10) / 10; // -0.7 nm
export const A1_V = (C * Math.abs(A1_DL)) / A1_REST; // 3.1998e5 m/s towards
export const A1_WRONG = (C * A1_OBS) / A1_REST; // 2.9968e8 m/s

/** Hydrogen lines strongest near 10 000 K (approximate, schematic graph). */
export const H_PEAK_T = 10000;
/** Handoff: v03's exaggerated shift factor for star A (same as v03's final frame). */
export const SHIFT = 1.035;

export const HEAD = 'What can stellar spectra tell us beyond chemical identity?';
export const HEAD_NEXT = 'Why does light spread after passing an edge or narrow opening?';
export const HEAD_SIZE = 48;
export const ACCENT = '#9c5a00';
