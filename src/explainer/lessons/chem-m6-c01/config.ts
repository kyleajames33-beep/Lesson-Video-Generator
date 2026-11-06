import lesson from '../../../../docs/production/claude-pm/lessons/m6c01/measured/lesson.json';
import type {ExplainerConfig} from '../../types';
import {SCENES} from './scenes';
import {ASSETS} from './assets';

// Quality fix (6 Nov, root rule): the quiet key-notes hold is at least 40 s in all (1,200 frames). The measured scene was 759 frames.
const source = lesson as unknown as ExplainerConfig['lesson'];
const l = {...source, scenes: source.scenes.map(s => (s.id === 'key-notes' ? {...s, durationInFrames: Math.max(1200, s.durationInFrames)} : s))};
export const config_m6c01: ExplainerConfig = {
	id: 'Explainer-chem-m6-c01',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'CHEMISTRY',
	topicLabel: 'ACID AND BASE MODELS',
	accent: '#0d6b52',
	assets: ASSETS,
};
