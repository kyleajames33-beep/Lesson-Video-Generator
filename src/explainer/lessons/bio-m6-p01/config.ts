import lesson from '../../../../docs/production/claude-pm/lessons/m6p01b/measured/lesson.json';
import type {ExplainerConfig} from '../../types';
import {SCENES} from './scenes';
import {ASSETS_P01B} from './assets';

const l = lesson as unknown as ExplainerConfig['lesson'];
const missing = l.scenes.filter(s => !SCENES[s.id]).map(s => s.id);
if (missing.length) throw new Error('M6 P01 (Biology) scenes missing: ' + missing.join(', '));
export const config_m6p01b: ExplainerConfig = {
	id: 'Explainer-bio-m6-p01',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'BIOLOGY',
	topicLabel: 'UV AND YEAST SURVIVAL PRACTICAL',
	accent: undefined,
	assets: ASSETS_P01B,
};
