import lesson from '../../../../docs/production/claude-pm/lessons/m6b13/measured/lesson.json';
import type {ExplainerConfig} from '../../types';
import {SCENES} from './scenes';
import {ASSETS_B13} from './assets';

const l = lesson as unknown as ExplainerConfig['lesson'];
const missing = l.scenes.filter(s => !SCENES[s.id]).map(s => s.id);
if (missing.length) throw new Error('M6 B13 scenes missing: ' + missing.join(', '));
export const config_m6b13: ExplainerConfig = {
	id: 'Explainer-bio-m6-b13',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'BIOLOGY',
	topicLabel: 'WEIGHING BENEFITS AND BIODIVERSITY RISKS',
	accent: undefined,
	assets: ASSETS_B13,
};
