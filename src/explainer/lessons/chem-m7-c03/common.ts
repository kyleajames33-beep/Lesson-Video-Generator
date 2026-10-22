// M7 C03 shared pieces: measured lesson lookups and the plates (alpha boxes measured 23 Oct, PIL alpha > 20): the
// camping stove (C01's plate; hook, scene 10 callback, handoff), the paraffin candle (hook, scene 9, handoff) and the
// hexane / water / heptane tube pair (scene 12).
import lesson from '../../../../docs/production/claude-pm/lessons/m7c03/measured/lesson.json';
import type {CueScene} from '../../cues';
import {mk} from '../chem-m6-c01/assets';
import {BURNER} from '../chem-m7-c01/common';

export {Heading} from '../chem-m5-c03/common';
export {BURNER};

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('M7 C03 scene not found ' + id);
	return s;
};
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};

/** Unlit white paraffin pillar candle with a short wick (2000 square). */
export const CANDLE = mk('m7-paraffin-candle-v1.png', [2000, 2000], [606, 201, 1395, 1799]);
/** Two clear test tubes (2000 square): left two colourless layers, right one layer. Tube centres at natural x 750 and
 *  1250; top meniscus y about 800; the left tube's boundary y about 1130. */
export const TUBES = mk('m7-hexane-water-heptane-tubes-v1.png', [2000, 2000], [582, 200, 1418, 1800]);
export const TUBES_UV = {left: (750 - 582) / 836, right: (1250 - 582) / 836, top: (800 - 200) / 1600, boundary: (1130 - 200) / 1600, bottom: (1760 - 200) / 1600};
