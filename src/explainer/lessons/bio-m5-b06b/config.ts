import lesson from '../../../../docs/production/claude-pm/lessons/b6b/measured/lesson.json';
import type {ExplainerConfig} from '../../types';
import {SCENES} from './scenes';
import {ASSETS} from './assets';

const l = lesson as unknown as ExplainerConfig['lesson'];
export const config_b06b: ExplainerConfig = {
	id: 'Explainer-bio-m5-b06b',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'BIOLOGY',
	topicLabel: 'TRANSCRIPTION',
	accent: undefined,
	assets: ASSETS,
};
