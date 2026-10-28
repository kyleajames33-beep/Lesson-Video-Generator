// M7 C13 shared pieces: measured lesson lookups. No new plates: the reaction map and flow charts are coded. Reused:
// the ester fruit (C09).
import lesson from '../../../../docs/production/claude-pm/lessons/m7c13/measured/lesson.json';
import type {CueScene} from '../../cues';
import {FRUIT} from '../chem-m7-c09/common';

export {Heading} from '../chem-m5-c03/common';
export {FRUIT};

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('M7 C13 scene not found ' + id);
	return s;
};
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};
