import lesson from '../../../../docs/production/claude-pm/lessons/m7p03c/measured/lesson.json';
import type {ExplainerConfig} from '../../types';
import {SCENES} from './scenes';
import {ASSETS} from './assets';

const l = lesson as unknown as ExplainerConfig['lesson'];
export const config_m7p03c: ExplainerConfig = {
	id: 'Explainer-chem-m7-p03',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'CHEMISTRY',
	topicLabel: 'PRACTICAL: ENTHALPY OF COMBUSTION',
	accent: '#0d6b52',
	assets: ASSETS,
};
