import lesson from '../../../../docs/production/claude-pm/lessons/b2c/measured/lesson.json';
import type {ExplainerConfig} from '../../types';
import {SCENES} from './scenes';
import {ASSETS} from './assets';

const l = lesson as unknown as ExplainerConfig['lesson'];
export const config_b02c: ExplainerConfig = {
	id: 'Explainer-bio-m5-b02c',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'BIOLOGY',
	topicLabel: 'REPRODUCTION',
	accent: undefined,
	assets: ASSETS,
};
