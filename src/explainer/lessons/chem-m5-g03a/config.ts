import lesson from '../../../../docs/production/claude-pm/lessons/g03a/measured/lesson.json';
import type {ExplainerConfig} from '../../types';
import {SCENES} from './scenes';
import {ASSETS} from './assets';

const l = lesson as unknown as ExplainerConfig['lesson'];
export const config_g03a: ExplainerConfig = {
	id: 'Explainer-chem-m5-g03a',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'CHEMISTRY',
	topicLabel: 'EQUILIBRIUM CALCULATIONS, PART 1',
	accent: '#0d6b52',
	assets: ASSETS,
};
