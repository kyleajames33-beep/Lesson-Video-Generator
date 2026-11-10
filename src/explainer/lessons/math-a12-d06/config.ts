import type {ExplainerConfig} from '../../types';
import {lesson} from './common';
import {SCENES} from './scenes';
import {ASSETS} from './assets';

// Revision 3 on the maths studio kit. The quiet key-notes hold runs 45 s (root decision 13).
const source = lesson as unknown as ExplainerConfig['lesson'];
const l = {...source, scenes: source.scenes.map(s => (s.id === 'scene-15' ? {...s, durationInFrames: Math.max(1350, s.durationInFrames)} : s))};
const missing = l.scenes.filter(s => !SCENES[s.id]).map(s => s.id);
if (missing.length) throw new Error('math-a12-d06 scenes missing: ' + missing.join(', '));
export const config_math_a12_d06: ExplainerConfig = {
	id: 'Explainer-math-a12-d06',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'MATHEMATICS ADVANCED',
	topicLabel: 'THE CHAIN RULE',
	accent: '#8a5a12',
	assets: ASSETS,
	burnCaptions: false,
};
