import lesson from '../../../../docs/production/claude-pm/lessons/b6a/measured/lesson.json';
import type {ExplainerConfig} from '../../types';
import {SCENES} from './scenes';
import {ASSETS} from './assets';

const l = lesson as unknown as ExplainerConfig['lesson'];
export const config_b06a: ExplainerConfig = {
	id: 'Explainer-bio-m5-b06a',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'BIOLOGY',
	topicLabel: 'DNA IN CELLS',
	accent: undefined,
	assets: ASSETS,
};
