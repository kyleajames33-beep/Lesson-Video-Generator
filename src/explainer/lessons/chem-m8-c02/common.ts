// M8 C02 shared pieces: measured lesson lookups and the plates. Reused: the empty beaker (M6 C01 box), the wash bottle
// and the wastewater outlet (both measured 30 Oct, PIL alpha > 20). New (brief 111): the settled BaSO4 beaker (drawn on
// the empty beaker's box so the two cross-fade in place; its own alpha box differs by 1 px), the filter funnel with a
// white precipitate, the drying oven, the desiccator and the balance with the watch glass (alpha boxes measured 30 Oct).
import lesson from '../../../../docs/production/claude-pm/lessons/m8c02/measured/lesson.json';
import type {CueScene} from '../../cues';
import {BEAKER, mk} from '../chem-m6-c01/assets';

export {Heading} from '../chem-m5-c03/common';
export {BEAKER};

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('M8 C02 scene not found ' + id);
	return s;
};
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};
/** Non-breaking space between a number and its unit. */
export const NB = ' ';

const N2: [number, number] = [2000, 2000], N4: [number, number] = [2048, 2048];
export const SETTLED = mk('m8-baso4-beaker-settled-v1.png', N4, [278, 164, 1769, 1884]);
export const FUNNEL = mk('m8-filter-funnel-white-ppt-v1.png', N2, [651, 326, 1347, 1674]);
export const OVEN = mk('m8-drying-oven-v1.png', N2, [221, 231, 1780, 1769]);
export const DESICC = mk('m8-desiccator-v1.png', N2, [299, 220, 1702, 1780]);
export const BAL = mk('m8-balance-watch-glass-v1.png', N2, [548, 373, 1566, 1681]);
export const WASH = mk('m6-wash-bottle-v1.png', N4, [587, 164, 1460, 1884]);
export const WASTE = mk('m6-wastewater-outlet-probe-v1.png', N2, [27, 0, 2000, 1948]);
/** Natural-pixel anchors (gridded views, 30 Oct). */
export const FEAT = {
	/** Beakers: liquid surface, inner walls and floor (the settled layer sits on the floor). */
	surf: 734, wallL: 340, wallR: 1705, floor: 1790, settle: 1610,
	/** Balance: the blank display and the watch glass on the pan. */
	display: [930, 1380] as [number, number],
	pan: [1080, 1065] as [number, number],
	/** Funnel: paper rim, the white mound, the stem tip. Wash bottle: nozzle tip. */
	rim: [1000, 410] as [number, number],
	mound: [990, 500] as [number, number],
	tip: [990, 1180] as [number, number],
	nozzle: [1450, 490] as [number, number],
};
