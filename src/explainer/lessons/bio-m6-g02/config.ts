import lesson from '../../../../docs/production/claude-pm/lessons/m6g02b/measured/lesson.json';
import type {ExplainerConfig} from '../../types';
import {SCENES} from './scenes';
import {ASSETS_G02} from './common';

const l = lesson as unknown as ExplainerConfig['lesson'];
const missing = l.scenes.filter(s => !SCENES[s.id]).map(s => s.id);
if (missing.length) throw new Error('M6 G02 scenes missing: ' + missing.join(', '));
export const config_m6g02b: ExplainerConfig = {
	id: 'Explainer-bio-m6-g02',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'BIOLOGY',
	topicLabel: 'EVALUATING BIOTECHNOLOGY: HSC-STYLE PRACTICE',
	accent: undefined,
	assets: ASSETS_G02,
};
