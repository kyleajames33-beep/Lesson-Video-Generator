// Which transition goes between two scenes. Chosen by what the cut MEANS, not
// rotated through a pool (the old round-robin produced a different effect on
// every cut — "feature soup", see visual-design-handbook.md "Cuts are
// punctuation").
//
//   title/hook → next        iris        zooming "into" the lesson's idea
//   → misconception          crashZoom   the "wait — trap!" beat
//   → quickCheck/summary/end shapeWipe   chapter-level punctuation
//   everything else          cameraBlur  continuous explanation, one camera move

import type {SceneData} from '../lesson/types';
import type {TransitionKind} from './cinematicTransitions';

export type TransitionChoice = TransitionKind | 'crashZoom';

const PUNCTUATION = new Set(['quickCheck', 'summary', 'endCard']);

export const pickTransition = (prev: SceneData, next: SceneData): TransitionChoice => {
	if (PUNCTUATION.has(next.type)) return 'shapeWipe';
	if (next.type === 'misconception') return 'crashZoom';
	if (prev.type === 'title' || prev.type === 'hook') return 'iris';
	return 'cameraBlur';
};
