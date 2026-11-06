// Lesson lookups for math-a12-d01 (Revision 6, measured narration). Every change is keyed to the frame at
// which its cue word is spoken (cueFrame throws if a phrase is missing, so a script change cannot leave an
// animation pointing at nothing).
import lessonJson from '../../../../docs/production/claude-pm/lessons/math-a12-d01/measured/lesson.json';
import {cueFrame} from '../../cues';
import type {CueScene} from '../../cues';

export const lesson = lessonJson;
type Scene = (typeof lessonJson.scenes)[number] & {responseHold?: {startFrame: number; endFrame: number}};
const byId: Record<string, Scene> = Object.fromEntries(lessonJson.scenes.map(s => [s.id, s as Scene]));
export const sc = (id: string): Scene => {
	const s = byId[id];
	if (!s) throw new Error('math-a12-d01: no measured scene ' + id);
	return s;
};
/** Scene-local frame at which `phrase` starts (occurrence n, 1-based). */
export const cue = (id: string, phrase: string, n = 1) => cueFrame(sc(id) as unknown as CueScene, phrase, n);
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => {
	const h = sc(id).responseHold;
	if (!h) throw new Error('math-a12-d01: no response hold in ' + id);
	return h;
};
export const LN2 = Math.log(2);
export const LN3 = Math.log(3);
