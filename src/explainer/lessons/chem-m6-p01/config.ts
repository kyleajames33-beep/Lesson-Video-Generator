import lesson from '../../../../docs/production/claude-pm/lessons/m6p01c/measured/lesson.json';
import type {ExplainerConfig} from '../../types';
import {SCENES} from './scenes';
import {ASSETS} from './assets';

const l = lesson as unknown as ExplainerConfig['lesson'];
export const config_m6p01c: ExplainerConfig = {
	id: 'Explainer-chem-m6-p01',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'CHEMISTRY',
	topicLabel: 'INDICATOR PRACTICAL',
	accent: '#0d6b52',
	assets: ASSETS,
};
