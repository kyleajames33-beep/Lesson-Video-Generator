import lesson from '../../../../docs/production/claude-pm/lessons/m8g01/measured/lesson.json';
import type {CueScene} from '../../cues';
export {Heading} from '../chem-m5-c03/common';
export const sc = (id: string) => {
 const s = lesson.scenes.find(s => s.id === id);
 if (!s) throw new Error('M8 G01 scene not found: ' + id);
 return s as CueScene & {durationInFrames: number};
};
export const hold = (id: string) => {
 const h = sc(id).responseHold;
 if (!h) throw new Error('M8 G01 hold missing: ' + id);
 return h;
};

// Keep unrounded quantities internally; displayed guard digits do not feed the next operation.
const nBa = 0.783 / 233.39;
const nSalt = nBa / 3;
const mSalt = nSalt * 342.14;
export const Q2_CALC = {nBa, nSalt, mSalt, purity: mSalt / 0.400 * 100};
