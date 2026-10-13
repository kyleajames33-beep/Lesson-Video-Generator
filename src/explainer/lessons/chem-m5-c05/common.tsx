import lesson from '../../../../docs/production/claude-pm/lessons/c5/measured/lesson.json';
import type {CueScene} from '../../cues';

export {Heading, hexMix, kf, FE, FE_INK, SCN, SCN_INK, RED, RED_INK, PINK, PINK_INK, COBLUE, COBLUE_INK, CLC, CLC_INK} from '../chem-m5-c03/common';

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('scene not found ' + id);
	return s;
};

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

// Colour key (one visual system, as C2 to C4b): forward blue, reverse amber, equal teal.
export const H2C = '#eceae4', H2_INK = '#6b6358';
export const I2C = '#8a4fc4', I2_INK = '#5f2f94';
export const HIC = '#c9ccd2', HI_INK = '#4a4f57';
export const CU_PALE = '#bfe0f0', CU_DEEP = '#1f48b0', CU_INK = '#1f3f94';
export const GLASS = '#eef5fa';
export const GREEN = '#2f8a5b';
export const CROSS = '#c4432f';
