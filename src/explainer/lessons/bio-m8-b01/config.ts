import lesson from '../../../../docs/production/claude-pm/lessons/m8b01/measured/lesson.json';
import type {ExplainerConfig} from '../../types';
import {SCENES} from './scenes';
import {ASSETS_M8B01} from './assets';

const l = lesson as unknown as ExplainerConfig['lesson'];
const missing = l.scenes.filter(s => !SCENES[s.id]).map(s => s.id);
if (missing.length) throw new Error('M8 B01 scenes missing: ' + missing.join(', '));
export const config_m8b01: ExplainerConfig = {
	id: 'Explainer-bio-m8-b01',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'BIOLOGY',
	topicLabel: 'HOMEOSTASIS AND NEGATIVE FEEDBACK',
	accent: undefined,
	assets: ASSETS_M8B01,
};
