import lesson from '../../../../docs/production/claude-pm/lessons/c-y11-m1-v05/measured/lesson.json';
import type {ExplainerConfig} from '../../types';
import {SCENES} from './scenes';
import {ASSETS} from './assets';

// Recorded narration unchanged (Google voice, brief 236). The key-notes hold is at least 40 s.
const raw = lesson as unknown as ExplainerConfig['lesson'];
const l = {...raw, scenes: raw.scenes.map(s => (s.id === 'key-notes' ? {...s, durationInFrames: Math.max(1200, s.durationInFrames)} : s))} as ExplainerConfig['lesson'];
const missing = l.scenes.filter(s => !SCENES[s.id]).map(s => s.id);
if (missing.length) throw new Error('Y11 M1 V05 scenes missing: ' + missing.join(', '));
export const config_y11c_m1v05: ExplainerConfig = {
	id: 'Explainer-chem-y11-m1-v05',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'CHEMISTRY',
	topicLabel: 'PAPER CHROMATOGRAPHY',
	accent: '#24407a',
	assets: ASSETS,
};
