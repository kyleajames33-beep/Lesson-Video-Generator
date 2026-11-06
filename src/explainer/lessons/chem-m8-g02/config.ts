import lesson from '../../../../docs/production/claude-pm/lessons/m8g02/measured/lesson.json';
import type {ExplainerConfig} from '../../types';
import {SCENES} from './scenes';
import {ASSETS_M8G02} from './assets';

// Recorded narration unchanged; the quiet key-notes hold runs at least 40 s (house standard).
const source = lesson as unknown as ExplainerConfig['lesson'];
const l = {...source, scenes: source.scenes.map(s => (s.id === 'key-notes' ? {...s, durationInFrames: Math.max(1200, s.durationInFrames)} : s))};
const missing = l.scenes.filter(s => !SCENES[s.id]).map(s => s.id);
if (missing.length) throw new Error('M8 G02 (Chemistry) scenes missing: ' + missing.join(', '));
export const config_m8g02: ExplainerConfig = {
	id: 'Explainer-chem-m8-g02',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'CHEMISTRY',
	topicLabel: 'CALIBRATION AND WATER-ANALYSIS PRACTICE',
	accent: '#0d6b52',
	assets: ASSETS_M8G02,
};
