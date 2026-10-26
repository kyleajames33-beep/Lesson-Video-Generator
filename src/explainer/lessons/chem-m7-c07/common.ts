// M7 C07 shared pieces: measured lesson lookups and the plates. Alpha boxes measured 27 Oct (PIL, alpha > 20). New
// (brief 103): the spirit-burner calorimeter, clean and sooty (a registered pair: both drawn in the union of their two
// alpha boxes so they cross-fade in place; flame at plate pixel (1117, 1275), can base (1117, 1150), soot patch (1117,
// 1137), thermometer top (1270, 262)) and the sugarcane stalks. Reused: the ethanol bottle (C02), the crude oil barrel
// (C06) and the oil and gas rig.
import lesson from '../../../../docs/production/claude-pm/lessons/m7c07/measured/lesson.json';
import type {CueScene} from '../../cues';
import {mk} from '../chem-m6-c01/assets';
import {BARREL, BOTTLE} from '../chem-m7-c06/common';

export {Heading} from '../chem-m5-c03/common';
export {BARREL, BOTTLE};

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('M7 C07 scene not found ' + id);
	return s;
};
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};

const N2: [number, number] = [2000, 2000];
const BB: [number, number, number, number] = [465, 215, 1492, 1756];
export const BURNER = {clean: mk('m7-spirit-burner-calorimeter-v1.png', N2, BB), sooty: mk('m7-spirit-burner-calorimeter-sooty-v1.png', N2, BB)};
export const CANE = mk('m7-sugarcane-stalks-v1.png', N2, [278, 201, 1721, 1800]);
export const RIG = mk('m7-oil-gas-rig-v1.png', N2, [252, 200, 1747, 1798]);
