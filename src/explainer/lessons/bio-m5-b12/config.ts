import lesson from '../../../../docs/production/claude-pm/lessons/b12/measured/lesson.json';
import type {ExplainerConfig} from '../../types';
import {SCENES} from './scenes';
import {ASSETS} from './assets';

const l = lesson as unknown as ExplainerConfig['lesson'];
const missing = l.scenes.filter(s => !SCENES[s.id]).map(s => s.id);
if (missing.length) throw new Error('B12 scenes missing: ' + missing.join(', '));
export const config_b12: ExplainerConfig = {
	id: 'Explainer-bio-m5-b12',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'BIOLOGY',
	topicLabel: 'DNA SEQUENCING AND PROFILING',
	accent: undefined,
	assets: ASSETS,
};
