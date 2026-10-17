import lesson from '../../../../docs/production/claude-pm/lessons/b8/measured/lesson.json';
import type {ExplainerConfig} from '../../types';
import {SCENES} from './scenes';
import {ASSETS} from './assets';

const l = lesson as unknown as ExplainerConfig['lesson'];
export const config_b08: ExplainerConfig = {
	id: 'Explainer-bio-m5-b08',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'BIOLOGY',
	topicLabel: 'SOURCES OF VARIATION',
	accent: undefined,
	assets: ASSETS,
};
