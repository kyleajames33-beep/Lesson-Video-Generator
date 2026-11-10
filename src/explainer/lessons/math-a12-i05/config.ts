import type {ExplainerConfig} from '../../types';
import {lesson} from './common';
import {SCENES} from './scenes';
import {ASSETS} from './assets';
import './cuemap';

// Revision 3 on the maths studio kit (a home's solar panels over one day). The quiet
// key-notes hold runs at least 45 s.
const source = lesson as unknown as ExplainerConfig['lesson'];
const l = {...source, scenes: source.scenes.map(s => (s.id === 'scene-15' ? {...s, durationInFrames: Math.max(1350, s.durationInFrames)} : s))};
const missing = l.scenes.filter(s => !SCENES[s.id]).map(s => s.id);
if (missing.length) throw new Error('math-a12-i05 scenes missing: ' + missing.join(', '));
export const config_math_a12_i05: ExplainerConfig = {
	id: 'Explainer-math-a12-i05',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'MATHEMATICS ADVANCED',
	topicLabel: 'PRIMITIVES',
	accent: '#8a5a12',
	assets: ASSETS,
	burnCaptions: false,
};
