import lesson from '../../../../docs/production/claude-pm/lessons/m7p02c/measured/lesson.json';
import type {ExplainerConfig} from '../../types';
import {SCENES} from './scenes';
import {ASSETS} from './assets';

const l = lesson as unknown as ExplainerConfig['lesson'];
export const config_m7p02c: ExplainerConfig = {
	id: 'Explainer-chem-m7-p02',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'CHEMISTRY',
	topicLabel: 'BROMINE WATER PRACTICAL',
	accent: '#0d6b52',
	assets: ASSETS,
};
