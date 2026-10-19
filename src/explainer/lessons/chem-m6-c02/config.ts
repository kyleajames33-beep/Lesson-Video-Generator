import lesson from '../../../../docs/production/claude-pm/lessons/m6c02/measured/lesson.json';
import type {ExplainerConfig} from '../../types';
import {SCENES} from './scenes';
import {ASSETS} from './assets';

const l = lesson as unknown as ExplainerConfig['lesson'];
export const config_m6c02: ExplainerConfig = {
	id: 'Explainer-chem-m6-c02',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'CHEMISTRY',
	topicLabel: 'NAMING AND ACID REACTIONS',
	accent: '#0d6b52',
	assets: ASSETS,
};
