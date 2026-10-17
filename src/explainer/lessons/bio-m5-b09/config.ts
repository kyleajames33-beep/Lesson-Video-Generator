import lesson from '../../../../docs/production/claude-pm/lessons/b9/measured/lesson.json';
import type {ExplainerConfig} from '../../types';
import {SCENES} from './scenes';
import {ASSETS} from './assets';

const l = lesson as unknown as ExplainerConfig['lesson'];
const missing = l.scenes.filter(s => !SCENES[s.id]).map(s => s.id);
if (missing.length) throw new Error('B9 scenes missing: ' + missing.join(', '));
export const config_b09: ExplainerConfig = {
	id: 'Explainer-bio-m5-b09',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'BIOLOGY',
	topicLabel: 'MENDELIAN INHERITANCE',
	accent: undefined,
	assets: ASSETS,
};
