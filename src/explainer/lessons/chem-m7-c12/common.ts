// M7 C12 shared pieces: measured lesson lookups and the plates. Brief 107: the oil-water tube pair (layers, emulsion)
// and the soap tube pair (soft, hard), all four from one master tube with the same alpha box [701, 250, 1299, 1749]
// (measured 28 Oct; 50% overlays checked in assets/brief107-qa/oil-water-overlay-50 and soap-overlay-50). Plate pixels:
// oil layer about (1000, 740), water (1000, 1150); soap froth about (1000, 760), soap liquid (1000, 1150). Reused: the
// vegetable oil bottle (C04a), the soap bar (M6) and the soap-making plate.
import lesson from '../../../../docs/production/claude-pm/lessons/m7c12/measured/lesson.json';
import type {CueScene} from '../../cues';
import {SOAP, mk} from '../chem-m6-c01/assets';
import {OIL as OIL_BOTTLE} from '../chem-m7-c04a/common';

export {Heading} from '../chem-m5-c03/common';
export {OIL_BOTTLE, SOAP};

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('M7 C12 scene not found ' + id);
	return s;
};
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};

const N2: [number, number] = [2000, 2000];
const TB: [number, number, number, number] = [701, 250, 1299, 1749];
export const OW = {layers: mk('m7-oil-water-tube-layers-v1.png', N2, TB), emulsion: mk('m7-oil-water-tube-emulsion-v1.png', N2, TB)};
export const ST = {soft: mk('m7-soap-tube-soft-v1.png', N2, TB), hard: mk('m7-soap-tube-hard-v1.png', N2, TB)};
export const SOAPMAKE = mk('m7-soap-making-v1.png', N2, [200, 488, 1800, 1511]);
