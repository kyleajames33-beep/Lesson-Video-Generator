import lesson from '../../../../docs/production/claude-pm/lessons/bp01/measured/lesson.json';
import type {ExplainerConfig} from '../../types';
import {SCENES} from './scenes';
import {ASSETS} from './assets';

const l = lesson as unknown as ExplainerConfig['lesson'];
const missing = l.scenes.filter(s => !SCENES[s.id]).map(s => s.id);
if (missing.length) throw new Error('P01 (Biology) scenes missing: ' + missing.join(', '));
export const config_bp01: ExplainerConfig = {
	id: 'Explainer-bio-m5-p01',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'BIOLOGY',
	topicLabel: 'PRACTICAL: REPLICATION AND SYNTHESIS MODELS',
	accent: undefined,
	assets: ASSETS,
};
