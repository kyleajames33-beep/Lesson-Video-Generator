// phys-y12-m7-v05 (Year 12 Physics M7 V05: diffraction and the wave model, why does light spread after passing an edge
// or narrow opening?). Lesson lookups and every displayed number. Every change is keyed to the frame at which its cue
// PHRASE is spoken (cueFrame throws if a phrase is missing), never to a fixed frame, so switching the import below to
// the measured take re-times the whole video.
// The prepared narration matched the current design (Revision 3, 6,289 characters, 16 scenes; checked scene by scene
// by script against the prepared lesson.json and the brief 259 source audit), so the provisional file was made with
// the unchanged make-provisional script from the audit.
// PROVISIONAL TIMING: switch to measured/lesson.json when voiced
import lessonJson from '../../../../work/physics-prebuild/p-y12-m7-v05/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';
import {singleSlitBrightness} from '../../sims/waves';

/** True while the word times are estimates (provisional lesson.json). Set false with the measured import. */
export const PROVISIONAL = true;

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('phys-y12-m7-v05: no scene ' + id);
	return s;
};
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('phys-y12-m7-v05: no response hold in ' + id);
	return h;
};
export const holdIf = (id: string) => sc(id).responseHold;
/** Latest safe frame for a visual change in a scene (no change in its last 2 s). */
export const cap = (id: string, f: number) => Math.min(f, dur(id) - 64);

// ---------------------------------------------------------------- numbers (design "Numbers used", author note g)
/** Slit-to-screen distance (m) for the simulated slit sweep. */
export const L_SCREEN = 2.0;
export const RED = 650e-9, GREEN = 532e-9;
/** Slit widths (mm) in the sweep. */
export const SWEEP = [0.2, 0.1, 0.05];
/** Central band full width (mm) on the screen at small angles: 2 L λ / a. Red 13, 26, 52; green 10.64, 21.28, 42.56. */
export const bandMm = (aMm: number, lambda: number) => (2 * L_SCREEN * lambda) / (aMm * 1e-3) * 1e3;
/** Screen brightness (0 to 1) at a screen position x (mm) for slit width a (mm) and wavelength (m): the engine's
 * single-slit relation at angle atan(x / L). */
export const slitBright = (xMm: number, aMm: number, lambda: number) => singleSlitBrightness(aMm * 1e-3, lambda, Math.atan(xMm * 1e-3 / L_SCREEN));
/** Visible light (m), doorway (m), slit (m), sound speed and frequency. */
export const LIGHT_L = 500e-9, DOOR = 1, SLIT = 0.1e-3, V_SOUND = 340, F_SOUND = 340;
export const DOOR_WAVES = DOOR / LIGHT_L; // 2.0e6
export const DOOR_SLIP = 1 / 500; // 0.002
export const SLIT_WAVES = SLIT / LIGHT_L; // 200
export const SOUND_L = V_SOUND / F_SOUND; // 1.0 m
/** Dates named on screen. */
export const FOUCAULT_YEAR = 1850;

export const HEAD = 'Why does light spread after passing an edge or narrow opening?';
export const HEAD_NEXT = 'Why do two slits produce regularly spaced bright and dark bands?';
export const HEAD_SIZE = 48;
export const ACCENT = '#13767a';
