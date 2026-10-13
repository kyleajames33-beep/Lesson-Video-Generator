import lesson from '../../../../docs/production/claude-pm/lessons/c7/measured/lesson.json';
import type {CueScene} from '../../cues';

export {Heading, kf, hexMix} from '../chem-m5-c03/common';

type SceneL = CueScene & {durationInFrames: number; responseHold?: {startFrame: number; endFrame: number}};
const L = lesson as unknown as {scenes: SceneL[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('scene not found ' + id);
	return s;
};
export const dur = (id: string) => sc(id).durationInFrames;

// Colour key (one visual system with C2 to C6): forward blue, reverse amber. New in C7:
// N2 navy, H2 pale grey, NH3 green; yield green, rate blue, cost or limit brick red; iron metallic grey.
export const N2C = '#2c3e78';
export const H2C = '#cfc9bc';
export const NH3C = '#2f8a5b';
export const YIELD = '#2f8a5b';
export const RATE = '#1f6fb2';
export const COST = '#b3392a';
export const IRON = '#8d939b';
export const IRON_DARK = '#5d636b';
export const HEAT = '#c4582f';
export const COLD = '#4f8fc0';
export const CROSS = '#c4432f';
export const GREEN = '#2f8a5b';
export const GREY = '#8a8378';

const clamp = (v: number, a = 0, b = 1) => Math.max(a, Math.min(b, v));
/** Illustrative gauge values (0..1) for the dashboard: cooling and squeezing raise the settled share, heat and squeeze raise the speed. */
export const yieldOf = (t: number, p: number) => clamp(0.1 + 0.42 * (1 - t) + 0.28 * p);
export const rateOf = (t: number, p: number, c: number) => clamp(0.08 + 0.4 * t + 0.15 * p + 0.3 * c);
