import lesson from '../../../../docs/production/claude-pm/lessons/m7p05b/measured/lesson.json';
import type {ExplainerConfig} from '../../types';
import {SCENES} from './scenes';
import {ASSETS_M7P05B} from './assets';

const l = lesson as unknown as ExplainerConfig['lesson'];
const missing = l.scenes.filter(s => !SCENES[s.id]).map(s => s.id);
if (missing.length) throw new Error('M7 P05 (Biology) scenes missing: ' + missing.join(', '));
export const config_m7p05b: ExplainerConfig = {
	id: 'Explainer-bio-m7-p05',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'BIOLOGY',
	topicLabel: 'ANTIMICROBIAL DISC PRACTICAL',
	accent: undefined,
	assets: ASSETS_M7P05B,
};
