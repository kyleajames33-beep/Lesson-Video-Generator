import lesson from '../../../../docs/production/claude-pm/lessons/b5b/measured/lesson.json';
import type {ExplainerConfig} from '../../types';
import {SCENES} from './scenes';
import {ASSETS} from './assets';

const l = lesson as unknown as ExplainerConfig['lesson'];
export const config_b05b: ExplainerConfig = {
	id: 'Explainer-bio-m5-b05b',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'BIOLOGY',
	topicLabel: 'HEREDITY',
	accent: undefined,
	assets: ASSETS,
};
