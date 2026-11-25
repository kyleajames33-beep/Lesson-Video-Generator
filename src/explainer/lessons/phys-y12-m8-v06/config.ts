import type {ExplainerConfig} from '../../types';
import {lesson} from './common';
import {SCENES} from './scenes';
import {ASSETS} from './assets';

// Year 12 Physics M8 V06 (Revision 3 design), built on PROVISIONAL timing (see common.ts). The quiet key-notes hold
// runs at least 45 s.
const source = lesson as unknown as ExplainerConfig['lesson'];
const l = {...source, scenes: source.scenes.map(s => (s.id === 'key-notes' ? {...s, durationInFrames: Math.max(1350, s.durationInFrames)} : s))};
const missing = l.scenes.filter(s => !SCENES[s.id]).map(s => s.id);
if (missing.length) throw new Error('phys-y12-m8-v06 scenes missing: ' + missing.join(', '));
export const config_phys_y12_m8_v06: ExplainerConfig = {
	id: 'Explainer-phys-y12-m8-v06',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'PHYSICS',
	topicLabel: 'STELLAR MASS AND ELEMENTS',
	accent: '#9c5a00',
	assets: ASSETS,
	burnCaptions: false,
};
