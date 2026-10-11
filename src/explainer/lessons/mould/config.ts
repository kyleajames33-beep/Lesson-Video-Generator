import lesson from '../../../../docs/production/fungi-design-reset-2026-10-11/teaching-reset-take02/measured/lesson.json';
import type {ExplainerConfig} from '../../types';
import {SceneAttempt, SceneFeedback, SceneHook, SceneMemory, SceneNewGrowth, SceneNotes, SceneRelease, SceneSporeCase, SceneThreads} from './scenes';
import {CLEAN_BREAD, GERM_PLATE, MOULD_PLATE} from './assets';

export const mouldConfig: ExplainerConfig = {
	id: 'Explainer-bio-m5-mould',
	lesson: lesson as unknown as ExplainerConfig['lesson'],
	scenes: {
		'mould-hook': SceneHook, 'mould-threads': SceneThreads, 'mould-spore-case': SceneSporeCase, 'mould-release': SceneRelease,
		'mould-new-growth': SceneNewGrowth, 'mould-attempt': SceneAttempt, 'mould-feedback': SceneFeedback, 'mould-memory': SceneMemory, 'key-notes': SceneNotes,
	},
	subjectLabel: 'BIOLOGY',
	topicLabel: 'BREAD MOULD',
	tracker: {
		labels: ['threads', 'spore case', 'release', 'new growth'],
		stageOf: {'mould-hook': 0, 'mould-threads': 1, 'mould-spore-case': 2, 'mould-release': 3, 'mould-new-growth': 4, 'mould-attempt': 5, 'mould-feedback': 5, 'mould-memory': 5, 'key-notes': -1},
	},
	assets: [MOULD_PLATE, GERM_PLATE, CLEAN_BREAD],
};
