import lesson from '../../../../docs/production/claude-pm/lessons/m7p02b/measured/lesson.json';
import type {ExplainerConfig} from '../../types';
import {SCENES} from './scenes';
import {ASSETS_M7P02B} from './assets';

const l = lesson as unknown as ExplainerConfig['lesson'];
const missing = l.scenes.filter(s => !SCENES[s.id]).map(s => s.id);
if (missing.length) throw new Error('M7 P02 (Biology) scenes missing: ' + missing.join(', '));
export const config_m7p02b: ExplainerConfig = {
	id: 'Explainer-bio-m7-p02',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'BIOLOGY',
	topicLabel: 'MICROBIAL TESTING OF WATER PRACTICAL',
	accent: undefined,
	assets: ASSETS_M7P02B,
};
