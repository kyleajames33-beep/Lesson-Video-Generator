// M7 P06 shared pieces: measured lesson lookups and the plates. Reused: C12's soap tube pair (soft, hard) and oil-water
// tube pair (layers, emulsion), brief 107, all four from one master tube with the same alpha box [701, 250, 1299, 1749],
// so every slot in the line-up has the same tube outline and pairs cross-fade in place; the wash bottle (M6), the
// dropper bottle (P03), glasses, stopper and waste bottle (M5 P01). Tube plate pixels (sampled 30 Oct down x = 1000):
// stopper 250 to 490; soft froth 500 to 935, liquid 940 to 1440; hard froth about 900 to 945, liquid 955 to 1440;
// tube outer x about 880 to 1120, bottom about 1500; wooden block 1520 to 1749. Froth scale: the soft plate's 435 px of
// froth is drawn as the 6.0 cm example result, so 1 cm is about 72 plate px.
import lesson from '../../../../docs/production/claude-pm/lessons/m7p06c/measured/lesson.json';
import type {CueScene} from '../../cues';
import {OW, ST} from '../chem-m7-c12/common';
import {DBOTTLE} from '../chem-m7-p01/common';
import {GLASSES, STOPPER, WASH, WASTE} from '../chem-m5-p01/assets';

export {Heading} from '../chem-m5-c03/common';
export {OW, ST, DBOTTLE, GLASSES, STOPPER, WASH, WASTE};

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('M7 P06 scene not found ' + id);
	return s;
};
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};

export const TG = {stopTop: 250, stopBot: 490, softTop: 500, softSurf: 935, hardTop: 900, hardSurf: 950, liqBot: 1440, x0: 880, x1: 1120, bottom: 1500, block: 1520, cm: 72};
