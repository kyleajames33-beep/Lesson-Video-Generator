import lesson from '../../../../docs/production/claude-pm/lessons/m8c11b/measured/lesson.json';
import type {ExplainerConfig} from '../../types';
import {SCENES} from './scenes';
import {ASSETS_M8C11B} from './assets';

// Recorded narration unchanged; the quiet key-notes hold runs at least 40 s (house standard).
const source = lesson as unknown as ExplainerConfig['lesson'];
const l = {...source, scenes: source.scenes.map(s => (s.id === 'key-notes' ? {...s, durationInFrames: Math.max(1200, s.durationInFrames)} : s))};
const missing = l.scenes.filter(s => !SCENES[s.id]).map(s => s.id);
if (missing.length) throw new Error('C8-11b scenes missing: ' + missing.join(', '));
export const config_m8c11b: ExplainerConfig = {
	id: 'Explainer-chem-m8-c11b',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'CHEMISTRY',
	topicLabel: 'PROTON NMR',
	assets: ASSETS_M8C11B,
};
