import lesson from '../../../../docs/production/claude-pm/lessons/m6g01b/measured/lesson.json';
import type {ExplainerConfig} from '../../types';
import {SCENES} from './scenes';
import {ASSETS_G01M6} from './assets';

const l = lesson as unknown as ExplainerConfig['lesson'];
const missing = l.scenes.filter(s => !SCENES[s.id]).map(s => s.id);
if (missing.length) throw new Error('M6 G01 scenes missing: ' + missing.join(', '));
export const config_m6g01b: ExplainerConfig = {
	id: 'Explainer-bio-m6-g01',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'BIOLOGY',
	topicLabel: 'MUTATION EFFECTS: HSC-STYLE PRACTICE',
	accent: undefined,
	assets: ASSETS_G01M6,
};
