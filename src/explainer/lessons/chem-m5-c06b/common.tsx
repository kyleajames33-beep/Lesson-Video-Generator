import lesson from '../../../../docs/production/claude-pm/lessons/c6b/measured/lesson.json';
import type {CueScene} from '../../cues';

export {Heading, kf, hexMix} from '../chem-m5-c03/common';
export {NAVY, VIOLET, GREENP, GREEN_INK} from '../chem-m5-c02/common';
export {PLUS, MINUS, GREEN, CROSS, GLASS, NO2C, N2O4C} from '../chem-m5-c06/common';

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

// C6b colour key (one visual system with C6): H2 and HI pale grey, I2 purple, I atoms a lighter violet;
// N2 navy, O2 red-orange, NO pale brown; made plus green, used up minus red; K teal.
export const H2K = '#6b6358', I2K = '#5f2f94', HIK = '#4a4f57';
export const I2FILL = '#8a4fc4', IAT = '#b48ae0', IAT_INK = '#7a4fb0';
export const N2K = '#2b4a8f', O2K = '#c4432f', NOK = '#9a6a3c';
