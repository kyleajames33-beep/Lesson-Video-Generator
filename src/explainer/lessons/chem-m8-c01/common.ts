// M8 C01 shared pieces: measured lesson lookups and the plates. Reused (alpha boxes as their first users measured them):
// the burette on its stand, the empty conical flask, the white tile and the phenolphthalein clip flasks (M6 C12); the
// analytical balance (M6 P06 box, re-measured 30 Oct). New (brief 111, provenance 28 Oct): the three Mohr flasks
// (yellow, white, endpoint; 2048 x 1700, alpha identical to the clip flask template, box 561,139..1484,1562, so they
// cross-fade in place with the clip flasks) and the chromate dropper bottle (box 720,201..1239,1772, PIL alpha > 20,
// measured 30 Oct). The estuary bottle is m8-river-sampling-bottle-v1 (clear water; box 160,226..1839,1772).
import lesson from '../../../../docs/production/claude-pm/lessons/m8c01/measured/lesson.json';
import type {CueScene} from '../../cues';
import {mk} from '../chem-m6-c01/assets';
import {BURETTE, BUR_G, CFLASK, PHTH, TILE} from '../chem-m6-c12/assets';

export {Heading, kf} from '../chem-m5-c03/common';
export {BURETTE, BUR_G, CFLASK, PHTH, TILE};

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('M8 C01 scene not found ' + id);
	return s;
};
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};

const CLIP_B: [number, number, number, number] = [561, 139, 1484, 1562];
export const MOHR = {
	yellow: mk('m8-mohr-flask-yellow-v1.png', [2048, 1700], CLIP_B),
	white: mk('m8-mohr-flask-white-v1.png', [2048, 1700], CLIP_B),
	end: mk('m8-mohr-flask-endpoint-v1.png', [2048, 1700], CLIP_B),
};
export const DROPPER = mk('m8-chromate-dropper-bottle-v1.png', [2000, 2000], [720, 201, 1239, 1772]);
export const BOTTLE = mk('m8-river-sampling-bottle-v1.png', [2000, 2000], [160, 226, 1839, 1772]);
export const BALANCE = mk('m6-analytical-balance-v1.png', [2000, 2000], [547, 373, 1567, 1681]);
