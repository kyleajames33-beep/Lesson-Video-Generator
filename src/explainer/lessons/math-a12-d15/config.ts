import type {ExplainerConfig} from '../../types';
import {lesson} from './common';
import {SCENES} from './scenes';
import {ASSETS} from './assets';

// Revision 4 on the maths studio kit (a skateboard on skate tracks). The quiet key-notes hold runs 45 s.
const source = lesson as unknown as ExplainerConfig['lesson'];
const l = {...source, scenes: source.scenes.map(s => (s.id === 'scene-15' ? {...s, durationInFrames: Math.max(1350, s.durationInFrames)} : s))};
const missing = l.scenes.filter(s => !SCENES[s.id]).map(s => s.id);
if (missing.length) throw new Error('math-a12-d15 scenes missing: ' + missing.join(', '));
export const config_math_a12_d15: ExplainerConfig = {
	id: 'Explainer-math-a12-d15',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'MATHEMATICS ADVANCED',
	topicLabel: 'DIFFERENTIABILITY',
	accent: '#8a5a12',
	assets: ASSETS,
	burnCaptions: false,
};
