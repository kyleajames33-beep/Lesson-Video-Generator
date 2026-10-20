import type {CueScene} from '../../cues';

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
/** Scene lookup helpers bound to one measured lesson JSON. */
export const lessonHelpers = (lesson: unknown, key: string) => {
	const L = lesson as {scenes: SceneL[]};
	const sc = (id: string) => {
		const s = L.scenes.find(x => x.id === id);
		if (!s) throw new Error(`${key}: scene not found ${id}`);
		return s;
	};
	return {sc, dur: (id: string) => sc(id).durationInFrames, hold: (id: string) => sc(id).responseHold as {startFrame: number; endFrame: number}};
};
