import lesson from '../../../../docs/production/claude-pm/lessons/m7g02/measured/lesson.json';
import type {ExplainerConfig} from '../../types';
import {SCENES} from './scenes';
import {ASSETS} from './assets';

const l = lesson as unknown as ExplainerConfig['lesson'];
export const config_m7g02: ExplainerConfig = {
	id: 'Explainer-chem-m7-g02',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'CHEMISTRY',
	topicLabel: 'PRACTICE: COMBUSTION ENTHALPY',
	accent: '#0d6b52',
	assets: ASSETS,
};
