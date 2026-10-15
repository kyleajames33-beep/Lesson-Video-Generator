import lesson from '../../../../docs/production/claude-pm/lessons/g03d/measured/lesson.json';
import type {ExplainerConfig} from '../../types';
import {SCENES} from './scenes';
import {ASSETS_D} from '../chem-m5-g03c/assets';

const l = lesson as unknown as ExplainerConfig['lesson'];
export const config_g03d: ExplainerConfig = {
	id: 'Explainer-chem-m5-g03d',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'CHEMISTRY',
	topicLabel: 'EQUILIBRIUM CALCULATIONS: PRACTICE, PART 2',
	accent: '#0d6b52',
	assets: ASSETS_D,
};
