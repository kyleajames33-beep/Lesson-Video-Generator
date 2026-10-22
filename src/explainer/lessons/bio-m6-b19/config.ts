import lesson from '../../../../docs/production/claude-pm/lessons/m6b19/measured/lesson.json';
import type {ExplainerConfig} from '../../types';
import {SCENES} from './scenes';
import {ASSETS_B19} from './assets';

const l = lesson as unknown as ExplainerConfig['lesson'];
const missing = l.scenes.filter(s => !SCENES[s.id]).map(s => s.id);
if (missing.length) throw new Error('M6 B19 scenes missing: ' + missing.join(', '));
export const config_m6b19: ExplainerConfig = {
	id: 'Explainer-bio-m6-b19',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'BIOLOGY',
	topicLabel: 'GENETIC TECHNOLOGY BENEFITS',
	accent: undefined,
	assets: ASSETS_B19,
};
