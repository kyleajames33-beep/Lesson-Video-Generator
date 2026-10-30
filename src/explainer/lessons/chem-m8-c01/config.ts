import lesson from '../../../../docs/production/claude-pm/lessons/m8c01/measured/lesson.json';
import type {ExplainerConfig} from '../../types';
import {SCENES} from './scenes';
import {ASSETS} from './assets';

const l = lesson as unknown as ExplainerConfig['lesson'];
const missing = l.scenes.filter(s => !SCENES[s.id]).map(s => s.id);
if (missing.length) throw new Error('M8 C01 scenes missing: ' + missing.join(', '));
export const config_m8c01: ExplainerConfig = {
	id: 'Explainer-chem-m8-c01',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'CHEMISTRY',
	topicLabel: 'PRECIPITATION TITRATION: MOHR METHOD',
	accent: '#0d6b52',
	assets: ASSETS,
};
