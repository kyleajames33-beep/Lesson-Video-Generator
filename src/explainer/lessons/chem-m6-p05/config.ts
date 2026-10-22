import lesson from '../../../../docs/production/claude-pm/lessons/m6p05/measured/lesson.json';
import type {ExplainerConfig} from '../../types';
import {SCENES} from './scenes';
import {ASSETS} from './assets';

const l = lesson as unknown as ExplainerConfig['lesson'];
export const config_m6p05: ExplainerConfig = {
	id: 'Explainer-chem-m6-p05',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'CHEMISTRY',
	topicLabel: 'BUFFER PRACTICAL',
	accent: '#0d6b52',
	assets: ASSETS,
};
