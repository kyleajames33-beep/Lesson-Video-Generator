import lesson from '../../../../docs/production/claude-pm/lessons/c15/measured/lesson.json';
import type {CueScene} from '../../cues';

// one visual system with C14 (and C11, C13): positive ions amber, negative ions violet, water pale blue; s and Ksp
// teal; Qsp coral (the moving marker); spectators grey; the solid in its real colour.
export {Heading, kf, hexMix, GREEN, CROSS, PLUS, MINUS, CAT, CAT_INK, AN, AN_INK, WATERC, WATER_INK, LEFT, S_INK, CORAL, CORAL_INK, WHITE_INK, GHOST} from '../chem-m5-c14/common';

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('scene not found ' + id);
	return s;
};
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};
