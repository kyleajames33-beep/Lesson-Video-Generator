// M8 P02 (gravimetric practical: recovery from a known sample) shared pieces: measured lesson lookups and the plates.
// Alpha boxes measured 31 Oct (PIL alpha > 20). New (brief 116): the hotplate beaker pair (clear, then a settled white
// layer; both drawn on 298,200..1701,1800 so they cross-fade in place) and the cloudy-filtrate funnel (drawn on the clear
// funnel's box 651,326..1347,1674). Hotplate plate anchors (natural px): beaker inner walls x 640..1390, liquid surface
// y 660, settled layer y 1130..1310, beaker centre x 1005, rim y 285. Funnel: c02's anchors (rim, mound, stem tip);
// flask liquid centre (996, 1500). Analytical balance: display centre (950, 1390); small beaker on the pan (1080, 1020).
// Measuring cylinder spout (819, 225). Reused: c02's beaker, funnel, wash bottle, oven, desiccator and watch-glass
// balance; the m5x test-tube pair (568,200..1432,1800); the dropper bottle, glasses, gloves and waste bottle.
import lesson from '../../../../docs/production/claude-pm/lessons/m8p02/measured/lesson.json';
import type {CueScene} from '../../cues';
import {mk} from '../chem-m6-c01/assets';
import type {PDef} from '../chem-m6-c01/assets';
import {BAL, BEAKER, DESICC, FEAT as FEAT_C02, FUNNEL, OVEN, WASH} from '../chem-m8-c02/common';
import {GLASSES, GLOVES, WASTE} from '../chem-m5-p01/assets';

export {Heading} from '../chem-m5-c03/common';
export {BAL, BEAKER, DESICC, FEAT_C02, FUNNEL, OVEN, WASH, GLASSES, GLOVES, WASTE};

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('M8 P02 scene not found ' + id);
	return s;
};
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};
/** Non-breaking space between a number and its unit. */
export const NB = ' ';

const N2: [number, number] = [2000, 2000];
const HOT_B: [number, number, number, number] = [298, 200, 1701, 1800];
export const HOT = {clear: mk('m8-beaker-hotplate-clear-v1.png', N2, HOT_B), baso4: mk('m8-baso4-beaker-hotplate-v1.png', N2, HOT_B)};
export const HOT_A = {wallL: 640, wallR: 1390, surf: 660, settle: 1130, floor: 1310, cx: 1005, rim: 285};
export const CLOUDY = mk('m8-filter-funnel-cloudy-filtrate-v1.png', N2, [651, 326, 1347, 1674]);
export const FLASK_LIQ: [number, number] = [996, 1500];
export const BAL6 = mk('m6-analytical-balance-v1.png', N2, [547, 373, 1567, 1681]);
export const BAL6_A = {display: [950, 1390] as [number, number], beaker: [1080, 1020] as [number, number]};
export const CYL = mk('m6-measuring-cylinder-v1.png', N2, [738, 201, 1262, 1800]);
export const CYL_SPOUT: [number, number] = [819, 225];
export const DROPB = mk('p03-dropper-bottle-v1.png', N2, [746, 219, 1254, 1760]);
const RACK_B: [number, number, number, number] = [568, 200, 1432, 1800];
export const TUBE = {agcl: mk('m5x-ppt-agcl-white-v1.png', N2, RACK_B), clear: mk('m5x-no-ppt-clear-v1.png', N2, RACK_B)};
export const TUBE_A = {cx: 998, mouth: 210, surf: 590};

export const PLATES: PDef[] = [BAL, BEAKER, DESICC, FUNNEL, OVEN, WASH, GLASSES, GLOVES, WASTE, HOT.clear, HOT.baso4, CLOUDY, BAL6, CYL, DROPB, TUBE.agcl, TUBE.clear];
