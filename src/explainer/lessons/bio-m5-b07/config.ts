import lesson from '../../../../docs/production/claude-pm/lessons/b7/measured/lesson.json';
import type {ExplainerConfig} from '../../types';
import {SCENES} from './scenes';
import {ASSETS} from './assets';

const l = lesson as unknown as ExplainerConfig['lesson'];
export const config_b07: ExplainerConfig = {
	id: 'Explainer-bio-m5-b07',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'BIOLOGY',
	topicLabel: 'PROTEINS AND PHENOTYPE',
	accent: undefined,
	assets: ASSETS,
};
