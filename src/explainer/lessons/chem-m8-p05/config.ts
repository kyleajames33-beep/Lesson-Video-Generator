import lesson from '../../../../docs/production/claude-pm/lessons/m8p05/measured/lesson.json';
import type {ExplainerConfig} from '../../types';
import {SCENES} from './scenes';
import {ASSETS} from './assets';

// Recorded narration unchanged. The risk scene gains a quiet 4 s reading hold on the full table; the quiet key-notes
// hold runs at least 40 s.
const source = lesson as unknown as ExplainerConfig['lesson'];
const l = {...source, scenes: source.scenes.map(s => (s.id === 'risk' ? {...s, durationInFrames: s.durationInFrames + 120} : s.id === 'key-notes' ? {...s, durationInFrames: Math.max(1200, s.durationInFrames)} : s))};
const missing = l.scenes.filter(s => !SCENES[s.id]).map(s => s.id);
if (missing.length) throw new Error('M8 P05 scenes missing: ' + missing.join(', '));
export const config_m8p05: ExplainerConfig = {
	id: 'Explainer-chem-m8-p05',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'CHEMISTRY',
	topicLabel: 'TESTING UNKNOWN ORGANIC LIQUIDS PRACTICAL',
	accent: '#0d6b52',
	assets: ASSETS,
};
