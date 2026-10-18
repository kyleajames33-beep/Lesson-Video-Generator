import lesson from '../../../../docs/production/claude-pm/lessons/p03/measured/lesson.json';
import type {ExplainerConfig} from '../../types';
import {SCENES} from './scenes';
import {ASSETS} from './assets';

const l = lesson as unknown as ExplainerConfig['lesson'];
export const config_p03: ExplainerConfig = {
	id: 'Explainer-chem-m5-p03',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'CHEMISTRY',
	topicLabel: 'PRACTICAL: SOLUBILITY RULES',
	accent: '#0d6b52',
	assets: ASSETS,
};
