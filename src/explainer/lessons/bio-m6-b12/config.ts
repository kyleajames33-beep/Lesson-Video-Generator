import lesson from '../../../../docs/production/claude-pm/lessons/m6b12/measured/lesson.json';
import type {ExplainerConfig} from '../../types';
import {SCENES} from './scenes';
import {ASSETS_B12} from './assets';

const l = lesson as unknown as ExplainerConfig['lesson'];
const missing = l.scenes.filter(s => !SCENES[s.id]).map(s => s.id);
if (missing.length) throw new Error('M6 B12 scenes missing: ' + missing.join(', '));
export const config_m6b12: ExplainerConfig = {
	id: 'Explainer-bio-m6-b12',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'BIOLOGY',
	topicLabel: 'BIOTECHNOLOGY AND BIODIVERSITY',
	accent: undefined,
	assets: ASSETS_B12,
};
