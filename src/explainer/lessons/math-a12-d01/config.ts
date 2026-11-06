import type {ExplainerConfig} from '../../types';
import {lesson} from './common';
import {SCENES} from './scenes';
import {ASSETS} from './assets';

// Revision 6 on the maths studio kit. Recorded narration unchanged; the quiet key-notes hold runs at least 40 s.
const source = lesson as unknown as ExplainerConfig['lesson'];
const l = {...source, scenes: source.scenes.map(s => (s.id === 'key-notes' ? {...s, durationInFrames: Math.max(1200, s.durationInFrames)} : s))};
const missing = l.scenes.filter(s => !SCENES[s.id]).map(s => s.id);
if (missing.length) throw new Error('math-a12-d01 scenes missing: ' + missing.join(', '));
export const config_math_a12_d01: ExplainerConfig = {
	id: 'Explainer-math-a12-d01',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'MATHEMATICS ADVANCED',
	topicLabel: 'EXPONENTIAL DERIVATIVES',
	accent: '#8a5a12',
	assets: ASSETS,
	burnCaptions: false,
};
