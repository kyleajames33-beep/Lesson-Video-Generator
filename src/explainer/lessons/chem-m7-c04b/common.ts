// M7 C04b shared pieces: measured lesson lookups and the plates (alpha boxes measured 23 Oct, PIL alpha > 20): the
// bromine water tubes and pair (C04a's; hook, scenes 9 and 15), the bromine-in-hexane tubes and the UV lamp (brief 100;
// hook, scenes 3 and 4). The faded hexane tube shares the orange tube's box so they cross-fade in place; its fumes rise
// above the box (accepted margin).
import lesson from '../../../../docs/production/claude-pm/lessons/m7c04b/measured/lesson.json';
import type {CueScene} from '../../cues';
import {mk} from '../chem-m6-c01/assets';
import {BRW, BRW_PAIR} from '../chem-m7-c04a/common';

export {Heading} from '../chem-m5-c03/common';
export {BRW, BRW_PAIR};

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('M7 C04b scene not found ' + id);
	return s;
};
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};

const TUBE_BOX: [number, number, number, number] = [820, 200, 1182, 1800];
/** Bromine in hexane: orange-brown, and the same tube faded with HBr fumes at the mouth. */
export const HEX = {orange: mk('m7-bromine-hexane-orange-v1.png', [2000, 2000], TUBE_BOX), faded: mk('m7-bromine-hexane-faded-v1.png', [2000, 2000], TUBE_BOX)};
/** Benchtop UV lamp, violet window (2000 square). */
export const LAMP = mk('m7-uv-lamp-v1.png', [2000, 2000], [200, 577, 1800, 1423]);
