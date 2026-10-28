import lesson from '../../../../docs/production/claude-pm/lessons/m7p01b/measured/lesson.json';
import type {ExplainerConfig} from '../../types';
import {SCENES} from './scenes';
import {ASSETS_M7P01B} from './assets';

const l = lesson as unknown as ExplainerConfig['lesson'];
const missing = l.scenes.filter(s => !SCENES[s.id]).map(s => s.id);
if (missing.length) throw new Error('M7 P01 (Biology) scenes missing: ' + missing.join(', '));
export const config_m7p01b: ExplainerConfig = {
	id: 'Explainer-bio-m7-p01',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'BIOLOGY',
	topicLabel: 'EPIDEMIC SIMULATION PRACTICAL',
	accent: undefined,
	assets: ASSETS_M7P01B,
};
