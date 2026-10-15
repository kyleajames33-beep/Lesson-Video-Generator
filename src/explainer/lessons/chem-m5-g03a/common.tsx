import lesson from '../../../../docs/production/claude-pm/lessons/g03a/measured/lesson.json';
import type {CueScene} from '../../cues';

export {Heading, kf} from '../chem-m5-c03/common';
export {PLUS, MINUS, GREEN, CROSS} from '../chem-m5-c06/common';
export * from '../chem-m5-g03a/tokens';

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('scene not found ' + id);
	return s;
};
export const dur = (id: string) => sc(id).durationInFrames;
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};

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
