import lesson from '../../../../docs/production/claude-pm/lessons/c-y11-m2-v03/measured/lesson.json';
import type {ExplainerConfig} from '../../types';
import {SCENES} from './scenes';
import {ASSETS} from './assets';

// Recorded narration unchanged (Google voice, brief 236); the quiet key-notes hold runs at least 40 s (measured 45 s).
const source = lesson as unknown as ExplainerConfig['lesson'];
const l = {...source, scenes: source.scenes.map(s => (s.id === 'key-notes' ? {...s, durationInFrames: Math.max(1200, s.durationInFrames)} : s))};
const missing = l.scenes.filter(s => !SCENES[s.id]).map(s => s.id);
if (missing.length) throw new Error('Y11 M2 V03 scenes missing: ' + missing.join(', '));
export const config_y11c_m2v03: ExplainerConfig = {
	id: 'Explainer-chem-y11-m2-v03',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'CHEMISTRY',
	topicLabel: 'MOLAR MASS',
	accent: '#12827b',
	assets: ASSETS,
};
