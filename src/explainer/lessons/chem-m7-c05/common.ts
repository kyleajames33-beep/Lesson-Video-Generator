// M7 C05 shared pieces: measured lesson lookups and the plates (all reused): the camping stove (C01), the ethanol fuel
// bottle (C02) and the alcohol / water tubes (brief 100; scene 12).
import lesson from '../../../../docs/production/claude-pm/lessons/m7c05/measured/lesson.json';
import type {CueScene} from '../../cues';
import {mk} from '../chem-m6-c01/assets';
import {BURNER} from '../chem-m7-c01/common';
import {BOTTLE} from '../chem-m7-c02/common';

export {Heading} from '../chem-m5-c03/common';
export {BURNER, BOTTLE};

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('M7 C05 scene not found ' + id);
	return s;
};
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};
/** Two tubes (2000 square): left ethanol + water, one layer; right hexan-1-ol on top of water. */
export const ALC_TUBES = mk('m7-alcohol-water-tubes-v1.png', [2000, 2000], [452, 200, 1548, 1800]);
