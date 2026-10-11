import lesson from '../../../../docs/production/claude-pm/lessons/c1/measured/lesson.json';
import type {ExplainerConfig} from '../../types';
import {SCENES} from './scenes';
import {ASSETS} from './assets';

const l = lesson as unknown as ExplainerConfig['lesson'];
export const config_c01: ExplainerConfig = {
	id: 'Explainer-chem-m5-c01',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'CHEMISTRY',
	topicLabel: 'EQUILIBRIUM',
	accent: '#0d6b52',
	assets: ASSETS,
};
