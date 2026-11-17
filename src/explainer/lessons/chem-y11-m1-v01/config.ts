import lesson from '../../../../docs/production/claude-pm/lessons/c-y11-m1-v01/measured/lesson.json';
import type {ExplainerConfig} from '../../types';
import {SCENES} from './scenes';
import {ASSETS} from './assets';

// Recorded narration unchanged (Google voice, brief 236); the measured key-notes scene already runs 45 s.
const l = lesson as unknown as ExplainerConfig['lesson'];
const missing = l.scenes.filter(s => !SCENES[s.id]).map(s => s.id);
if (missing.length) throw new Error('Y11 M1 V01 scenes missing: ' + missing.join(', '));
export const config_y11c_m1v01: ExplainerConfig = {
	id: 'Explainer-chem-y11-m1-v01',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'CHEMISTRY',
	topicLabel: 'CLASSIFYING MATTER',
	accent: '#24407a',
	assets: ASSETS,
};
