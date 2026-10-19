import lesson from '../../../../docs/production/claude-pm/lessons/m6b02/measured/lesson.json';
import type {ExplainerConfig} from '../../types';
import {SCENES} from './scenes';
import {ASSETS} from './assets';

const l = lesson as unknown as ExplainerConfig['lesson'];
const missing = l.scenes.filter(s => !SCENES[s.id]).map(s => s.id);
if (missing.length) throw new Error('M6 B02 scenes missing: ' + missing.join(', '));
export const config_m6b02: ExplainerConfig = {
	id: 'Explainer-bio-m6-b02',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'BIOLOGY',
	topicLabel: 'MUTAGENS',
	accent: undefined,
	assets: ASSETS,
};
