// M7 G02 shared pieces: measured lesson lookups and the plates (all reused, no new art): the spirit-burner set and the
// burner on a balance (brief 103, via P03) and C02's ethanol fuel bottle.
import lesson from '../../../../docs/production/claude-pm/lessons/m7g02/measured/lesson.json';
import type {CueScene} from '../../cues';
import {BAL, BOTTLE, SET} from '../chem-m7-p03/common';

export {Heading} from '../chem-m5-c03/common';
export {BAL, BOTTLE, SET};

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('M7 G02 scene not found ' + id);
	return s;
};
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};
