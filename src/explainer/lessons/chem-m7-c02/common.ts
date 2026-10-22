// M7 C02 shared pieces: measured lesson lookups and the plates (alpha boxes measured 23 Oct, PIL alpha > 20):
// the ethanol bottle and the aerosol can (hook), the camping stove (C01's plate; scenes 4 and 16).
import lesson from '../../../../docs/production/claude-pm/lessons/m7c02/measured/lesson.json';
import type {CueScene} from '../../cues';
import {mk} from '../chem-m6-c01/assets';
import {BURNER} from '../chem-m7-c01/common';

export {Heading} from '../chem-m5-c03/common';
export {BURNER};

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('M7 C02 scene not found ' + id);
	return s;
};
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};

/** Amber stoppered glass bottle, half full, no label (2000 square). */
export const BOTTLE = mk('m7-ethanol-fuel-bottle-v1.png', [2000, 2000], [630, 201, 1369, 1798]);
/** Plain silver aerosol can with a teal band, nozzle at the top centre (2000 square). Nozzle top about natural (1000, 315). */
export const CAN = mk('m7-aerosol-spray-can-v1.png', [2000, 2000], [752, 302, 1248, 1697]);
export const CAN_NOZZLE: [number, number] = [(1000 - 752) / 496, (315 - 302) / 1395];
