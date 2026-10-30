// M7 G03 (chemistry) shared pieces: measured lesson lookups. No plates: every question is on paper, so the cards,
// structures, flow charts and chips are coded. Reuses C13's reaction map, flow-chart boxes, arrows and condition chips.
import lesson from '../../../../docs/production/claude-pm/lessons/m7g03/measured/lesson.json';
import type {CueScene} from '../../cues';

export {Heading} from '../chem-m5-c03/common';

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('M7 G03 scene not found ' + id);
	return s;
};
export const hold = (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number};
