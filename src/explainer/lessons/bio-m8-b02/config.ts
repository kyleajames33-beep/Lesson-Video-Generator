import lesson from '../../../../docs/production/claude-pm/lessons/m8b02/measured/lesson.json';
import type {ExplainerConfig} from '../../types';
import {SCENES} from './scenes';
import {ASSETS_M8B02} from './assets';
import {PLATES as P1} from '../bio-m8-b01/assets';

const l = lesson as unknown as ExplainerConfig['lesson'];
const missing = l.scenes.filter(s => !SCENES[s.id]).map(s => s.id);
if (missing.length) throw new Error('M8 B02 scenes missing: ' + missing.join(', '));
/** b01's loop ring thumbnail draws b01's skin and brain plates, so their files ship too. */
export const config_m8b02: ExplainerConfig = {
	id: 'Explainer-bio-m8-b02',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'BIOLOGY',
	topicLabel: 'ENDOTHERM TEMPERATURE REGULATION',
	accent: undefined,
	assets: Array.from(new Set([...ASSETS_M8B02, P1.skin.src, P1.brain.src, P1.thermo.src, P1.muscle.src])),
};
