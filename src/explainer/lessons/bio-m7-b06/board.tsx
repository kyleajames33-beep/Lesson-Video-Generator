// M7 B06 board state shared by the scenes: the response strip as it stands after each scene (rungs written, lit and
// given thumbnails as they are taught), and the fixed positions of the close-up and the skin block.
import type {StripProps, StripRung} from './strip';
import {PLATES} from './assets';

export const HEAD = 'What happens first when bacteria get in?';
/** The close-up's home position (left two-thirds). */
export const CL = {cx: 720, cy: 600, w: 800};
export const LABELS = ['always there: barriers', 'minutes: inflammation', 'hours: phagocytes', 'days: adaptive'];

/**
 * The strip after scene `n` (3 to 11). Overrides patch individual rungs (cue-timed writing and lighting in the scene).
 * Thumbnails arrive as each rung is taught: the barrier plates (scene 4), the inflamed vessel (scene 7), the digest
 * plate (scene 9), the dendritic cell (scene 11).
 */
export const stripAt = (n: number, over: Partial<StripRung>[] = [], extra: Partial<StripProps> = {}): StripProps => {
	const rungs: StripRung[] = LABELS.map((label, i) => ({
		label: n >= [3, 4, 4, 10][i] ? label : undefined,
		at: -100,
		lit: n >= [3, 5, 7, 10][i] ? 1 : 0,
		color: i === 3 ? 'amber' : 'teal',
	}));
	if (n >= 4) rungs[0].thumbs = [PLATES.epi, PLATES.airway];
	if (n >= 7) rungs[1].thumbs = [PLATES.vesselCrop];
	if (n >= 9) rungs[2].thumbs = [PLATES.digest];
	if (n >= 11) rungs[3].thumbs = [PLATES.dendCrop];
	over.forEach((o, i) => { if (o) rungs[i] = {...rungs[i], ...o}; });
	return {rungs, bracket: n >= 4 ? {from: 0, to: 2, at: -100, label: 'innate', lit: 1} : undefined, ...extra};
};
