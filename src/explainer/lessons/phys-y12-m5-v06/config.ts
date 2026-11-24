import type {ExplainerConfig} from '../../types';
import {lesson} from './common';
import {SCENES} from './scenes';
import {ASSETS} from './assets';

// Year 12 Physics M5 V06 (Revision 3 design), built on the measured take. The quiet key-notes hold runs at least 40 s.
const source = lesson as unknown as ExplainerConfig['lesson'];
const l = {...source, scenes: source.scenes.map(s => (s.id === 'key-notes' ? {...s, durationInFrames: Math.max(1200, s.durationInFrames)} : s))};
const missing = l.scenes.filter(s => !SCENES[s.id]).map(s => s.id);
if (missing.length) throw new Error('phys-y12-m5-v06 scenes missing: ' + missing.join(', '));
export const config_phys_y12_m5_v06: ExplainerConfig = {
	id: 'Explainer-phys-y12-m5-v06',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'PHYSICS',
	topicLabel: 'CLEARING A WALL',
	accent: '#9c5a00',
	assets: ASSETS,
	burnCaptions: false,
};
