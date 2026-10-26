// M7 P01 shared pieces: measured lesson lookups and the plates (alpha boxes measured 23 Oct, PIL alpha > 20). New (brief
// 101): the clamped temperature probe with its filter-paper sleeve and the fume cupboard. Reused: the dropper bottle
// (P03, coded labels), the colourless tube (C04a's, as a plain sample tube), the stopper, glasses, gloves and waste
// bottle (M5 P01), the camping stove (C01), the Bunsen burner and the cold thermometer (M5 C11, the calibrated
// reference).
import lesson from '../../../../docs/production/claude-pm/lessons/m7p01c/measured/lesson.json';
import type {CueScene} from '../../cues';
import {mk} from '../chem-m6-c01/assets';
import {BRW} from '../chem-m7-c04a/common';
import {BURNER} from '../chem-m7-c01/common';
import {GLASSES, GLOVES, STOPPER, WASTE} from '../chem-m5-p01/assets';
import {THERMO_COLD} from '../chem-m5-c11/assets';

export {Heading} from '../chem-m5-c03/common';
export {BURNER, GLASSES, GLOVES, STOPPER, WASTE, THERMO_COLD};

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('M7 P01 scene not found ' + id);
	return s;
};
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};

const N2: [number, number] = [2000, 2000];
/** Retort stand clamping a probe; filter-paper sleeve on the tip. Visible-box fractions: probe axis u 0.499, sleeve
 *  top v 0.49, tip v 0.623, base top v 0.833, cable end (u 0.996, v 0.26). */
export const PROBE = mk('m7-temp-probe-sleeve-stand-v1.png', N2, [304, 200, 1696, 1799]);
/** School fume cupboard, front view. Opening (below the glass) u 0.06 to 0.86, glass top v 0.235, work surface v 0.62. */
export const HOOD = mk('m7-fume-cupboard-v1.png', N2, [312, 200, 1688, 1800]);
/** Clear dropper bottle with a blank cream label (label u 0.03 to 0.97, v 0.52 to 0.82). */
export const DBOTTLE = mk('p03-dropper-bottle-v1.png', N2, [746, 219, 1254, 1760]);
/** Plain tube of colourless liquid (surface at v 0.40). */
export const TUBE = BRW.clear;
export const BUNSEN = mk('m5x-bunsen-burner-v1.png', N2, [687, 242, 1313, 1733]);
