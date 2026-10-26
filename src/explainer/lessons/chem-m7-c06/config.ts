import lesson from '../../../../docs/production/claude-pm/lessons/m7c06/measured/lesson.json';
import type {ExplainerConfig} from '../../types';
import {SCENES} from './scenes';
import {ASSETS} from './assets';

const l = lesson as unknown as ExplainerConfig['lesson'];
export const config_m7c06: ExplainerConfig = {
	id: 'Explainer-chem-m7-c06',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'CHEMISTRY',
	topicLabel: 'MAKING ETHANOL: THREE ROUTES',
	accent: '#0d6b52',
	assets: ASSETS,
};
