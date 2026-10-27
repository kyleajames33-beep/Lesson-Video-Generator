import lesson from '../../../../docs/production/claude-pm/lessons/m7g03b/measured/lesson.json';
import type {ExplainerConfig} from '../../types';
import {SCENES} from './scenes';
import {ASSETS_M7G03} from './assets';

const l = lesson as unknown as ExplainerConfig['lesson'];
const missing = l.scenes.filter(s => !SCENES[s.id]).map(s => s.id);
if (missing.length) throw new Error('M7 G03 scenes missing: ' + missing.join(', '));
export const config_m7g03: ExplainerConfig = {
	id: 'Explainer-bio-m7-g03',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'BIOLOGY',
	topicLabel: 'IMMUNE RESPONSE PRACTICE',
	accent: undefined,
	assets: ASSETS_M7G03,
};
