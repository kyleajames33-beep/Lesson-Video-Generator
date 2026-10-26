// M7 C06 shared pieces: measured lesson lookups and the plates. Alpha boxes measured 27 Oct (PIL, alpha > 20). Reused:
// the ethanol bottle (C02), the crude oil barrel, the reflux apparatus and the school distillation setup (all 2000
// square). New (matched pair, same box so they cross-fade in place): the fermentation setup, start and bubbling.
import lesson from '../../../../docs/production/claude-pm/lessons/m7c06/measured/lesson.json';
import type {CueScene} from '../../cues';
import {mk} from '../chem-m6-c01/assets';
import {BOTTLE} from '../chem-m7-c02/common';

export {Heading} from '../chem-m5-c03/common';
export {BOTTLE};

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('M7 C06 scene not found ' + id);
	return s;
};
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};

const N2: [number, number] = [2000, 2000];
/** A plain steel drum (no label). */
export const BARREL = mk('m7-crude-oil-barrel-v1.png', N2, [506, 200, 1493, 1798]);
/** Round-bottom flask on a heating mantle, upright water-jacketed condenser on a retort stand. Condenser x 1012, y 212 to
 *  925; flask centre (1000, 1300), liquid top y 1288 (plate pixels). */
export const REFLUX = mk('m7-reflux-apparatus-v1.png', N2, [619, 200, 1381, 1800]);
/** Flask on a mantle, still head with thermometer (top 545, 500), sloping condenser (825, 787) to (1400, 975), conical
 *  collecting flask (mouth 1530, 1087; liquid 1550, 1362). */
export const DISTIL = mk('m7-school-distillation-setup-v1.png', N2, [203, 488, 1800, 1511]);
/** Conical flask of glucose and yeast in a water bath (bath water 300, 1250; thermometer 362), bung (675, 625), delivery
 *  tube (top run y 425), limewater tube in a rack (1537, 1200; tube end 1562, 1300). */
export const FERM = {start: mk('m7-fermentation-setup-start-v1.png', N2, [201, 408, 1799, 1593]), bub: mk('m7-fermentation-setup-bubbling-v1.png', N2, [201, 408, 1799, 1593])};
