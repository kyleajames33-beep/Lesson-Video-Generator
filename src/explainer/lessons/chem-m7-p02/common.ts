// M7 P02 shared pieces: measured lesson lookups and the plates (alpha boxes measured 27 Oct, PIL alpha > 20). New (brief
// 101): the two-layer result tubes (orange top layer; colourless) and the diluted control, all in the bromine water
// tube's box so they cross-fade in place (top layer v 0.18 to 0.41, lower layer v 0.41 to 0.98). Reused: the bromine
// water tubes and pair (C04a), bromine in a hydrocarbon and the UV lamp (C04b), the dropper bottle and fume cupboard
// (P01), the graduated pipette (M5 C15), white tile, stopper, glasses, gloves and waste bottle (M5 P01), litmus (M6 C01).
import lesson from '../../../../docs/production/claude-pm/lessons/m7p02c/measured/lesson.json';
import type {CueScene} from '../../cues';
import {mk} from '../chem-m6-c01/assets';
import {BRW, BRW_PAIR} from '../chem-m7-c04a/common';
import {HEX, LAMP} from '../chem-m7-c04b/common';
import {DBOTTLE, HOOD} from '../chem-m7-p01/common';
import {GLASSES, GLOVES, STOPPER, TILE, WASTE} from '../chem-m5-p01/assets';
import {LITMUS} from '../chem-m6-c01/assets';

export {Heading} from '../chem-m5-c03/common';
export {BRW, BRW_PAIR, HEX, LAMP, DBOTTLE, HOOD, GLASSES, GLOVES, STOPPER, TILE, WASTE, LITMUS};

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('M7 P02 scene not found ' + id);
	return s;
};
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};

const N2: [number, number] = [2000, 2000];
const TB: [number, number, number, number] = [820, 200, 1182, 1800];
export const LAYERS = {top: mk('m7-bromine-layers-orange-top-v1.png', N2, TB), clear: mk('m7-bromine-layers-colourless-v1.png', N2, TB)};
export const CONTROL = mk('m7-bromine-water-control-v1.png', N2, TB);
/** Graduated pipette with a red filler, drawn on a diagonal (2000 square). */
export const PIPETTE = mk('m5x-graduated-pipette-v1.png', N2, [160, 178, 1840, 1822]);
