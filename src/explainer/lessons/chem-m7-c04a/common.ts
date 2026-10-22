// M7 C04a shared pieces: measured lesson lookups and the plates (alpha boxes measured 23 Oct, PIL alpha > 20): the
// vegetable oil bottle and margarine tub (brief 100; hook, scene 4), the matched bromine water tubes (scene 5), the
// bromine water pair (feedback 2) and the ethanol bottle (scene 7).
import lesson from '../../../../docs/production/claude-pm/lessons/m7c04a/measured/lesson.json';
import type {CueScene} from '../../cues';
import {mk} from '../chem-m6-c01/assets';
import {BOTTLE} from '../chem-m7-c02/common';

export {Heading} from '../chem-m5-c03/common';
export {BOTTLE};

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('M7 C04a scene not found ' + id);
	return s;
};
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};

/** Clear bottle of golden vegetable oil, green cap (2000 square). */
export const OIL = mk('m7-vegetable-oil-bottle-v1.png', [2000, 2000], [763, 200, 1237, 1800]);
/** Open white tub of pale yellow soft spread (2000 square). */
export const TUB = mk('m7-margarine-tub-v1.png', [2000, 2000], [200, 295, 1800, 1705]);
/** Matched test tubes: orange bromine water and the same tube colourless (same box, so they cross-fade in place). */
export const BRW = {orange: mk('m7-bromine-water-orange-v1.png', [2000, 2000], [820, 200, 1182, 1800]), clear: mk('m7-bromine-water-colourless-v1.png', [2000, 2000], [820, 200, 1182, 1800])};
/** The two tubes side by side, orange and colourless. */
export const BRW_PAIR = mk('m7-bromine-water-pair-v1.png', [2000, 2000], [451, 200, 1549, 1799]);
