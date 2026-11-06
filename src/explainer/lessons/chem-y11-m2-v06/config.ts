import lesson from '../../../../docs/production/claude-pm/lessons/c-y11-m2-v06/measured/lesson.json';
import type {ExplainerConfig} from '../../types';
import {SCENES} from './scenes';
import {ASSETS} from './assets';

// Recorded narration unchanged; the quiet key-notes hold runs at least 40 s.
const source = lesson as unknown as ExplainerConfig['lesson'];
const l = {...source, scenes: source.scenes.map(s => (s.id === 'key-notes' ? {...s, durationInFrames: Math.max(1200, s.durationInFrames)} : s))};
const missing = l.scenes.filter(s => !SCENES[s.id]).map(s => s.id);
if (missing.length) throw new Error('Y11 M2 V06 scenes missing: ' + missing.join(', '));
export const config_y11c_m2v06: ExplainerConfig = {
	id: 'Explainer-chem-y11-m2-v06',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'CHEMISTRY',
	topicLabel: 'MOLE RATIOS',
	accent: '#12827b',
	assets: ASSETS,
};
