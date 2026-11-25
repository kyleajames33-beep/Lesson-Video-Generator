// phys-y12-m7-v03 (Year 12 Physics M7 V03: spectra from different sources, how do different sources produce
// different spectral patterns?). Lesson lookups and every displayed number. Every change is keyed to the frame at which
// its cue PHRASE is spoken (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import
// below to the measured take re-times the whole video.
// The prepared narration matched the current design (Revision 3, 6,291 characters, 15 scenes; checked scene by scene
// by script against the prepared lesson.json and the brief 259 source audit), so the provisional file was made with
// the unchanged make-provisional script from the audit.
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m7-v03/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m7-v03: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m7-v03: no response hold in ' + id);
	return h;
};
export const holdIf = (id: string) => sc(id).responseHold;
/** Latest safe frame for a visual change in a scene (no change in its last 2 s). */
export const cap = (id: string, f: number) => Math.min(f, dur(id) - 64);

// ---------------------------------------------------------------- numbers (design "Numbers used", NIST air values)
/** Hydrogen's four bright visible lines (nm). */
export const H_LINES = [656.3, 486.1, 434.0, 410.2];
/** Upper levels of the four drops to level 2. */
export const H_UPPER = [3, 4, 5, 6];
/** Relative drop size, proportional to 1 / lambda: 1.00, 1.35, 1.51, 1.60. */
export const DROP = H_LINES.map(l => H_LINES[0] / l);
export const NA_LINES = [589.0, 589.6];
export const HE_LINES = [447.1, 471.3, 492.2, 501.6, 587.6, 667.8, 706.5];
export const NE_LINES = [585.2, 588.2, 594.5, 614.3, 640.2, 650.7, 692.9, 703.2];
/** Card values (rounded as printed on the reference card). */
export const HE_CARD = [447, 471, 492, 502, 588, 668, 707];
export const NE_CARD = [585, 588, 594, 614, 640, 651, 693, 703];
export const H_CARD = [410, 434, 486, 656];
/** Attempt 1's unknown gas (helium's lines; 471 and 492 nm not seen). */
export const UNKNOWN = [447, 502, 588, 668, 707];
/** A schematic selection of the Sun's dark (Fraunhofer) lines: H, Na pair, Mg b, Fe E, G band (strengths schematic). */
export const SUN_LINES = [410.2, 430.8, 434.0, 486.1, 517.3, 527.0, 589.0, 589.6, 656.3];
/** Temperature slider readouts (qualitative profile only). */
export const TEMPS = [2000, 2900, 3500];
export const T_FIL = 2900;
/** Helium: line seen in 1868, found on Earth in 1895 (27 years). */
export const HE_SEEN = 1868, HE_FOUND = 1895;
/** Handoff: star A's lines shifted by the same fraction (exaggerated), star B's broadened. */
export const SHIFT = 1.035;

export const HEAD = 'How do different sources produce different spectral patterns?';
export const HEAD_NEXT = 'What can stellar spectra tell us beyond chemical identity?';
export const HEAD_SIZE = 48;
export const ACCENT = '#9c5a00';
