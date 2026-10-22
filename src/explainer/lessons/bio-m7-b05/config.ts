import lesson from '../../../../docs/production/claude-pm/lessons/m7b05/measured/lesson.json';
import type {ExplainerConfig} from '../../types';
import {SCENES} from './scenes';
import {ASSETS_M7B05} from './assets';

const l = lesson as unknown as ExplainerConfig['lesson'];
const missing = l.scenes.filter(s => !SCENES[s.id]).map(s => s.id);
if (missing.length) throw new Error('M7 B05 scenes missing: ' + missing.join(', '));
export const config_m7b05: ExplainerConfig = {
	id: 'Explainer-bio-m7-b05',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'BIOLOGY',
	topicLabel: 'HOW A PLANT DEFENDS ITSELF',
	accent: undefined,
	assets: ASSETS_M7B05,
};
