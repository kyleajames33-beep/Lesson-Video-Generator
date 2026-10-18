import lesson from '../../../../docs/production/claude-pm/lessons/g01b/measured/lesson.json';
import type {ExplainerConfig} from '../../types';
import {SCENES} from './scenes';
import {ASSETS} from './assets';

const l = lesson as unknown as ExplainerConfig['lesson'];
const missing = l.scenes.filter(s => !SCENES[s.id]).map(s => s.id);
if (missing.length) throw new Error('G01 scenes missing: ' + missing.join(', '));
export const config_g01b: ExplainerConfig = {
	id: 'Explainer-bio-m5-g01',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'BIOLOGY',
	topicLabel: 'TRACE A SEQUENCE OR A CHROMOSOME: PRACTICE',
	accent: undefined,
	assets: ASSETS,
};
