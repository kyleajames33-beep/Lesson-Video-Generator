// M7 C10 shared pieces: measured lesson lookups and the plates. Reused: the ester fruit (C09), the reflux apparatus and
// the school distillation setup (C06), and the separating funnel pair (cloudy, clear; identical alpha box [666, 200,
// 1333, 1800], measured 28 Oct, PIL alpha > 8, so the pair cross-fades in place). Funnel plate pixels: upper (ester)
// layer about (1000, 760), lower (water) layer about (1000, 950), stopper (1000, 240).
import lesson from '../../../../docs/production/claude-pm/lessons/m7c10/measured/lesson.json';
import type {CueScene} from '../../cues';
import {mk} from '../chem-m6-c01/assets';
import {DISTIL, REFLUX} from '../chem-m7-c06/common';
import {FRUIT} from '../chem-m7-c09/common';

export {Heading} from '../chem-m5-c03/common';
export {DISTIL, FRUIT, REFLUX};

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('M7 C10 scene not found ' + id);
	return s;
};
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};

const N2: [number, number] = [2000, 2000];
const FB: [number, number, number, number] = [666, 200, 1333, 1800];
export const FUNNEL = {cloudy: mk('m7-separating-funnel-cloudy-v1.png', N2, FB), clear: mk('m7-separating-funnel-clear-v1.png', N2, FB)};
