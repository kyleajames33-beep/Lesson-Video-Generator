import lesson from '../../../../docs/production/claude-pm/lessons/m8c03b/measured/lesson.json';
import type {ExplainerConfig} from '../../types';
import {SCENES} from './scenes';
import {ASSETS} from './assets';

const l = lesson as unknown as ExplainerConfig['lesson'];
const missing = l.scenes.filter(s => !SCENES[s.id]).map(s => s.id);
if (missing.length) throw new Error('M8 C03b scenes missing: ' + missing.join(', '));
export const config_m8c03b: ExplainerConfig = {
	id: 'Explainer-chem-m8-c03b',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'CHEMISTRY',
	topicLabel: 'TESTING FOR ANIONS',
	accent: '#0d6b52',
	assets: ASSETS,
};
