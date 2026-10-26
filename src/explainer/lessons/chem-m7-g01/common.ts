// M7 G01 shared pieces: measured lesson lookups and the plates (all reused, no new art): C04b's UV lamp (hook, Q2),
// C04a's matched bromine water tubes and pair (hook, Q4) and C02's ethanol fuel bottle (decision board "Next" chip).
import lesson from '../../../../docs/production/claude-pm/lessons/m7g01/measured/lesson.json';
import type {CueScene} from '../../cues';
import {BRW, BRW_PAIR} from '../chem-m7-c04a/common';
import {LAMP} from '../chem-m7-c04b/common';
import {BOTTLE} from '../chem-m7-c02/common';

export {Heading} from '../chem-m5-c03/common';
export {BRW, BRW_PAIR, LAMP, BOTTLE};

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('M7 G01 scene not found ' + id);
	return s;
};
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};
