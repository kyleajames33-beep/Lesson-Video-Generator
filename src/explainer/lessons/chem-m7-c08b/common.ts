// M7 C08b shared pieces: measured lesson lookups and the plates. Brief 105: Tollens' (clear, mirror) and Fehling's
// (blue, brick red) tubes, two aligned pairs with the same alpha box as the dichromate pair (overlays checked in
// assets/brief105-qa/), so each cross-fades in place. Tube plate pixels: wall (900, 1350), base (990, 1520). Reused: the
// dichromate pair (C08a) and the school distillation setup (C06).
import lesson from '../../../../docs/production/claude-pm/lessons/m7c08b/measured/lesson.json';
import type {CueScene} from '../../cues';
import {mk} from '../chem-m6-c01/assets';
import {DICH, DISTIL, TB} from '../chem-m7-c08a/common';

export {Heading} from '../chem-m5-c03/common';
export {DICH, DISTIL};

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('M7 C08b scene not found ' + id);
	return s;
};
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};

const N2: [number, number] = [2000, 2000];
export const TOLL = {clear: mk('m7-tollens-tube-clear-v1.png', N2, TB), mirror: mk('m7-tollens-tube-mirror-v1.png', N2, TB)};
export const FEHL = {blue: mk('m7-fehlings-tube-blue-v1.png', N2, TB), red: mk('m7-fehlings-tube-brickred-v1.png', N2, TB)};
