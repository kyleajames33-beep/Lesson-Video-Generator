import lesson from '../../../../docs/production/claude-pm/lessons/m8p02/measured/lesson.json';
import type {ExplainerConfig} from '../../types';
import {SCENES} from './scenes';
import {ASSETS} from './assets';

const l = lesson as unknown as ExplainerConfig['lesson'];
const missing = l.scenes.filter(s => !SCENES[s.id]).map(s => s.id);
if (missing.length) throw new Error('M8 P02 scenes missing: ' + missing.join(', '));
export const config_m8p02: ExplainerConfig = {
	id: 'Explainer-chem-m8-p02',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'CHEMISTRY',
	topicLabel: 'GRAVIMETRIC PRACTICAL',
	accent: '#0d6b52',
	assets: ASSETS,
};
