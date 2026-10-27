// M7 C08a shared pieces: measured lesson lookups and the plates. The acidified dichromate tubes (orange, green; brief
// 105 re-matte) are an aligned pair (identical alpha boxes, overlay checked in assets/brief105-qa/dichromate-overlay-50)
// so they cross-fade in place. Tube plate pixels: liquid centre (990, 1350), base (990, 1530), rim (990, 470). Reused:
// the reflux apparatus and the school distillation setup (C06).
import lesson from '../../../../docs/production/claude-pm/lessons/m7c08a/measured/lesson.json';
import type {CueScene} from '../../cues';
import {mk} from '../chem-m6-c01/assets';
import {DISTIL, REFLUX} from '../chem-m7-c06/common';

export {Heading} from '../chem-m5-c03/common';
export {DISTIL, REFLUX};

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('M7 C08a scene not found ' + id);
	return s;
};
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};

const N2: [number, number] = [2000, 2000];
export const TB: [number, number, number, number] = [389, 220, 1611, 1780];
export const DICH = {orange: mk('m8-dichromate-orange-v1.png', N2, TB), green: mk('m8-dichromate-green-v1.png', N2, TB)};
