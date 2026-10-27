import lesson from '../../../../docs/production/claude-pm/lessons/m7b10/measured/lesson.json';
import type {ExplainerConfig} from '../../types';
import {SCENES} from './scenes';
import {ASSETS_M7B10} from './assets';

const l = lesson as unknown as ExplainerConfig['lesson'];
const missing = l.scenes.filter(s => !SCENES[s.id]).map(s => s.id);
if (missing.length) throw new Error('M7 B10 scenes missing: ' + missing.join(', '));
export const config_m7b10: ExplainerConfig = {
	id: 'Explainer-bio-m7-b10',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'BIOLOGY',
	topicLabel: 'HYGIENE, QUARANTINE AND HERD IMMUNITY',
	accent: undefined,
	assets: ASSETS_M7B10,
};
