import lesson from '../../../../docs/production/claude-pm/lessons/m8c10/measured/lesson.json';
import type {ExplainerConfig} from '../../types';
import {SCENES} from './scenes';
import {ASSETS_M8C10} from './assets';

// Recorded narration unchanged; the quiet key-notes hold runs at least 40 s (house standard).
const source = lesson as unknown as ExplainerConfig['lesson'];
const l = {...source, scenes: source.scenes.map(s => (s.id === 'key-notes' ? {...s, durationInFrames: Math.max(1200, s.durationInFrames)} : s))};
const missing = l.scenes.filter(s => !SCENES[s.id]).map(s => s.id);
if (missing.length) throw new Error('C8-10 scenes missing: ' + missing.join(', '));
export const config_m8c10: ExplainerConfig = {
	id: 'Explainer-chem-m8-c10',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'CHEMISTRY',
	topicLabel: 'INFRARED SPECTROSCOPY',
	assets: ASSETS_M8C10,
};
