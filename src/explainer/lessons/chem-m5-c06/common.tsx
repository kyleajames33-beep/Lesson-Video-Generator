import lesson from '../../../../docs/production/claude-pm/lessons/c6/measured/lesson.json';
import type {CueScene} from '../../cues';

export {Heading, kf, hexMix} from '../chem-m5-c03/common';
export {NAVY, VIOLET, GREENP, GREEN_INK} from '../chem-m5-c02/common';

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('scene not found ' + id);
	return s;
};
export const dur = (id: string) => sc(id).durationInFrames;

const norm = (w: string) => w.toLowerCase().replace(/[^a-z0-9']/g, '');
/** Frame of word `k` (0-based) inside `phrase`, which is found as the `occ`-th run in the narration. */
export const cw = (id: string, phrase: string, k = 0, occ = 1, fps = 30): number => {
	const s = sc(id);
	const words = (s.captions ?? []).map(c => ({w: norm(c.text), ms: c.startMs}));
	const target = phrase.split(/\s+/).map(norm).filter(Boolean);
	let seen = 0;
	for (let i = 0; i + target.length <= words.length; i++) {
		if (target.every((t, j) => words[i + j].w === t)) {
			seen++;
			if (seen === occ) return Math.round((words[i + k].ms / 1000) * fps);
		}
	}
	throw new Error(`cw "${phrase}" (#${occ}) not found in ${id}`);
};

// Colour key (one visual system, as C2 to C5): forward blue, reverse amber, equal teal.
// Made = plus (green), used up = minus (red-orange); the pen highlight is amber.
export const PLUS = '#1f8a5b';
export const MINUS = '#c4432f';
export const GREEN = '#2f8a5b';
export const CROSS = '#c4432f';
export const GLASS = '#eef5fa';
export const NO2C = '#9a5a24';
export const N2O4C = '#66718c';
