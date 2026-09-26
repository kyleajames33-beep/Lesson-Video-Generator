// sceneSync — lets the shared generic diagrams (table, flow, barChart, …) time
// themselves to their own scene without any lesson JSON changing.
//
// DiagramRenderer passes a generic diagram only its data props. Two things it
// doesn't pass matter for timing:
//   1. When the visual card actually appears (`revealDelays.diagram`, which
//      ranges from 6 to 600 frames across the catalogue). Without it, a table
//      with the default `delay` of 0 built its rows while the card was still
//      invisible, so viewers only ever saw the finished table.
//   2. The narration, so a row / node / bar can land when the voiceover says it
//      (docs/diorama-system.md, rule 3).
// Both live on the scene, so we find the scene whose diagram carries exactly
// these props (content match, once per data set) and read them from there.
// If nothing matches (a gallery, a test composition), callers fall back to the
// component's own `delay`, as before.

import {lessons} from '../../../../data/lessonRegistry';

export type SceneTiming = {
	/** Frame the concept card starts fading in (ConceptSlide's default is 62). */
	reveal: number;
	durationInFrames: number;
	/** Voiceover split into normalised words, with the frame each is spoken. */
	words: {w: string; frame: number}[];
	/** The scene's full diagram config (for fields DiagramRenderer doesn't pass on, e.g. a bar chart's `unit`). */
	diagram: Record<string, unknown>;
};

const CARD_REVEAL_DEFAULT = 62;
// Voiceover pace used when the audio is shorter than the scene (≈2.5 words/s).
const FRAMES_PER_WORD = 12;

type AnyDiagram = Record<string, unknown> & {type?: string};

/** A stable key for a diagram's content (type + the props that define it). */
export const diagramKey = (type: string, content: unknown) => `${type}|${JSON.stringify(content)}`;

const contentOf = (d: AnyDiagram): unknown => {
	switch (d.type) {
		case 'table':
			return [d.headers, d.rows];
		case 'flow':
			return [d.nodes, d.edges];
		case 'barChart':
			return d.bars;
		case 'beforeAfter':
			return [d.beforeLabel, d.afterLabel, d.beforeContent, d.afterContent];
		case 'venn':
			return [d.leftLabel, d.rightLabel, d.overlapLabel];
		case 'lineGraph':
			return [d.xLabel, d.yLabel, d.series];
		default:
			return undefined;
	}
};

export const normWord = (s: string) =>
	s
		.toLowerCase()
		.normalize('NFKD')
		.replace(/[^a-z0-9]+/g, '');

let index: Map<string, SceneTiming> | null = null;

const buildIndex = () => {
	const map = new Map<string, SceneTiming>();
	for (const {data} of lessons) {
		for (const scene of data.scenes ?? []) {
			const d = (scene as {diagram?: AnyDiagram}).diagram;
			if (!d || scene.type !== 'concept' || !d.type) continue;
			const content = contentOf(d);
			if (content === undefined) continue;
			const key = diagramKey(d.type, content);
			if (map.has(key)) continue;
			const rd = (scene as {revealDelays?: Record<string, number>}).revealDelays ?? {};
			const dur = scene.durationInFrames;
			const raw = (scene.voiceover?.text ?? '').split(/\s+/).map(normWord).filter(Boolean);
			const speech = Math.max(1, Math.min(dur - 45, raw.length * FRAMES_PER_WORD));
			map.set(key, {
				reveal: rd.diagram ?? CARD_REVEAL_DEFAULT,
				durationInFrames: dur,
				words: raw.map((w, i) => ({w, frame: Math.round((i / Math.max(1, raw.length)) * speech)})),
				diagram: d,
			});
		}
	}
	return map;
};

export const sceneTimingFor = (type: string, content: unknown): SceneTiming | undefined => {
	index ??= buildIndex();
	return index.get(diagramKey(type, content));
};

// Words too common to identify a row/node on their own.
const STOP = new Set(
	'the and for with from into that this then than are was were has have its not but can all any one two per each more less very only just like also your you our their them they which what when where how why who does did out off over under between about after before via using used use high low'.split(' '),
);

/**
 * Frame at which the narration first mentions `label`, searching from word
 * `fromWord`. Matches the label's rarest distinctive word (≥ 3 letters) so
 * "Cell membrane" keys on "membrane", "-NH2 amine" on "amine". Returns the
 * frame and word index, or undefined when the narration never says it.
 */
export const mentionOf = (timing: SceneTiming, label: string, fromWord = 0) => {
	const counts = new Map<string, number>();
	for (const {w} of timing.words) counts.set(w, (counts.get(w) ?? 0) + 1);
	const cands = label
		.split(/[\s/,;:()[\]=+→–—-]+/)
		.map(normWord)
		.filter((w) => w.length >= 3 && !STOP.has(w) && !/^\d+$/.test(w))
		.filter((w) => counts.has(w) || counts.has(`${w}s`) || (w.endsWith('s') && counts.has(w.slice(0, -1))));
	if (!cands.length) return undefined;
	cands.sort((a, b) => (counts.get(a) ?? 99) - (counts.get(b) ?? 99));
	const target = cands[0];
	for (let i = fromWord; i < timing.words.length; i++) {
		const w = timing.words[i].w;
		if (w === target || w === `${target}s` || `${w}s` === target) return {frame: timing.words[i].frame, word: i};
	}
	return undefined;
};

/**
 * Entry frames for a list of items (rows, nodes, bars), synced to narration.
 * Each item lands a beat before the narration names it, never before the
 * card is up, and never later than 70% through the scene (so every build
 * finishes with a hold left). If the narration names fewer than half the
 * items, it isn't following the diagram, so items just stagger in.
 */
export const itemEntryFrames = (
	labels: string[],
	opts: {timing?: SceneTiming; start: number; stagger: number; lead?: number},
): number[] => {
	const {timing, start, stagger, lead = 10} = opts;
	const fallback = labels.map((_, i) => start + i * stagger);
	if (!timing || labels.length < 2) return fallback;
	const hits = labels.map((l) => mentionOf(timing, l));
	const found = hits.filter(Boolean).length;
	if (found < Math.ceil(labels.length / 2)) return fallback;
	const latest = Math.max(start + stagger * labels.length, Math.round(timing.durationInFrames * 0.7));
	const out: number[] = [];
	for (let i = 0; i < labels.length; i++) {
		const h = hits[i];
		let f: number;
		if (h) {
			f = h.frame - lead;
		} else {
			// Unnamed item: slot it in just after the previous one.
			f = (out[i - 1] ?? start) + stagger;
		}
		out.push(Math.round(Math.min(latest, Math.max(start + (i === 0 ? 0 : 4), f))));
	}
	return out;
};

/** Build start for a generic diagram: never before its card is on screen. */
export const buildStart = (delay: number | undefined, timing: SceneTiming | undefined) =>
	Math.max(delay ?? 0, timing ? timing.reveal + 6 : 0);
