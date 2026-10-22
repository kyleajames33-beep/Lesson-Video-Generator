import lesson from '../../../../docs/production/claude-pm/lessons/m7b01/measured/lesson.json';
import type {ExplainerConfig} from '../../types';
import {SCENES} from './scenes';
import {ASSETS_M7B01} from './assets';

const l = lesson as unknown as ExplainerConfig['lesson'];
const missing = l.scenes.filter(s => !SCENES[s.id]).map(s => s.id);
if (missing.length) throw new Error('M7 B01 scenes missing: ' + missing.join(', '));
export const config_m7b01: ExplainerConfig = {
	id: 'Explainer-bio-m7-b01',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'BIOLOGY',
	topicLabel: 'PATHOGENS AND HOW TO CLASSIFY THEM',
	accent: undefined,
	assets: ASSETS_M7B01,
};
