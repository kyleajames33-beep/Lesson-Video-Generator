// Word-cue helpers: key animations to the exact spoken word in a measured scene.
// A measured scene carries `captions` (word tokens with startMs/endMs) from the
// selected recording, so cue frames never drift from the narration.

export type CueCaption = {text: string; startMs: number; endMs: number};
export type CueScene = {id: string; captions?: CueCaption[]; responseHold?: {startFrame: number; endFrame: number}; voiceover?: {endFrame?: number}};

const norm = (w: string) => w.toLowerCase().replace(/[^a-z0-9']/g, '');

/**
 * Frame (scene-local, 30 fps) at which `phrase` starts being spoken.
 * Matches a run of words, ignoring case and punctuation. Use `occurrence` (1-based)
 * when a phrase repeats. Throws if missing, so a script change cannot silently
 * leave an animation pointing at nothing.
 */
export const cueFrame = (scene: CueScene, phrase: string, occurrence = 1, fps = 30): number => {
	const words = (scene.captions ?? []).map(c => ({w: norm(c.text), ms: c.startMs}));
	const target = phrase.split(/\s+/).map(norm).filter(Boolean);
	let seen = 0;
	for (let i = 0; i + target.length <= words.length; i++) {
		if (target.every((t, k) => words[i + k].w === t)) {
			seen++;
			if (seen === occurrence) return Math.round((words[i].ms / 1000) * fps);
		}
	}
	throw new Error(`Cue "${phrase}" (#${occurrence}) not found in scene ${scene.id}`);
};

/** End of narration in this scene (frames). */
export const speechEnd = (scene: CueScene, fps = 30): number => {
	const caps = scene.captions ?? [];
	return caps.length ? Math.round((caps[caps.length - 1].endMs / 1000) * fps) : 0;
};

/** Build a lookup of named cues for one scene: cues(scene, {escape: 'escape', dissolve: 'dissolve back'}). */
export const cues = <K extends string>(scene: CueScene, map: Record<K, string | [string, number]>): Record<K, number> => {
	const out = {} as Record<K, number>;
	for (const [k, v] of Object.entries(map) as [K, string | [string, number]][]) out[k] = Array.isArray(v) ? cueFrame(scene, v[0], v[1]) : cueFrame(scene, v);
	return out;
};
